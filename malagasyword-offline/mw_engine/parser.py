# -*- coding: utf-8 -*-
"""Extraction structurée des pages de motmalgache.org / malagasyword.org / tenymalagasy.org.

Gère les 4 types de pages utiles au Mode Complet :
1. `/bins/alphaLists?lang=mg` (et `&range=...`) -> 109 000 mots malgaches + radicaux + gloses FR/EN
2. `/bins/alphaLists?lang=fr` et `lang=en` -> 34 000 entrées FR + 15 000 entrées EN
3. `/bins/proverbIndex` (et `?i=...`) -> index complet des pages de proverbes
4. `/bins/ohabolana/<slug>` -> proverbes complets, variantes, traductions et interprétations
5. `/bins/teny2/<slug>` -> fiches encyclopédiques complètes (homonymes, MG/FR/EN, exemples, morphologie, dérivés...)
"""

from __future__ import annotations

import hashlib
import html
import re
from typing import Any, Dict, List, Optional, Set, Tuple
from urllib.parse import parse_qs, unquote, urlparse

from .html_dom import Element, iter_table_rows, parse_html

# Expressions régulières précompilées
_WS_RE = re.compile(r"[ \t\r\f\v\xa0]+")
_LEADING_COUNTER_RE = re.compile(
    r"^\s*(\d+)(?:[\s\xa0]+|(?=[A-ZÀÂÄÉÈÊËÎÏÔÖÙÛÜÇÑa-zàâäéèêëîïôöùûüçñ«\"'(\[_-]))"
)
_LEADING_HEADWORD_COUNTER_RE = re.compile(r"^\s*\d+\s*")
_STANDALONE_REF_RE = re.compile(r"^\s*\[[\d.,#\s;a-zA-Z-]+\]\s*$")
_TRAILING_REF_RE = re.compile(r"(\[\s*\d+(?:\.\d+)?[^\]]*\])\s*$")
_LIST_COMPLETE_RE = re.compile(r"\[\s*(?:Liste complète|Complete list|Lisitra feno)\s*\]", re.IGNORECASE)
_PROVERB_HEADER_RE = re.compile(r"^(?:Proverbe|Proverb|Ohabolana)\s*(\d*)\s*$", re.IGNORECASE)
_UPDATED_RE = re.compile(r"(?:Mis à jour le|Updated on|Nohavaozina tamin'ny)\s*([0-9/\-.]+)", re.IGNORECASE)
_PAREN_COUNT_RE = re.compile(r"\((\d+)\)")


def _norm_ws(s: str) -> str:
    return _WS_RE.sub(" ", s).strip()


def normalize_search_token(text: str) -> str:
    """Normalise une chaîne pour recherche tolérante (accents malgaches/français, ñ->n, tirets)."""
    if not text:
        return ""
    s = text.lower().strip()
    replacements = {
        "à": "a", "á": "a", "â": "a", "ä": "a", "ã": "a",
        "è": "e", "é": "e", "ê": "e", "ë": "e",
        "ì": "i", "í": "i", "î": "i", "ï": "i",
        "ò": "o", "ó": "o", "ô": "o", "ö": "o",
        "ù": "u", "ú": "u", "û": "u", "ü": "u",
        "ñ": "n", "ç": "c", "œ": "oe", "æ": "ae",
        "’": "'", "‘": "'",
    }
    for k, v in replacements.items():
        if k in s:
            s = s.replace(k, v)
    return _norm_ws(s)


def canonical_teny_slug(href: str) -> Optional[str]:
    """Extrait le slug canonique d'un lien `/bins/teny2/<slug>` (sans `#...`, `?w=...`, `@mg.n`)."""
    if not href or "/bins/teny2/" not in href:
        return None
    # Retire fragment et query
    part = href.split("#", 1)[0].split("?", 1)[0]
    idx = part.find("/bins/teny2/")
    if idx < 0:
        return None
    slug = part[idx + len("/bins/teny2/"):]
    # Retire le filtre grammatical éventuel `@mg.n`
    if "@" in slug:
        slug = slug.split("@", 1)[0]
    slug = unquote(slug).strip().strip("/")
    if not slug:
        return None
    return slug


def canonical_ohabolana_slug(href: str) -> Optional[str]:
    """Extrait le slug canonique d'un lien `/bins/ohabolana/<slug>`."""
    if not href or "/bins/ohabolana/" not in href:
        return None
    part = href.split("#", 1)[0].split("?", 1)[0]
    idx = part.find("/bins/ohabolana/")
    if idx < 0:
        return None
    slug = part[idx + len("/bins/ohabolana/"):]
    if "@" in slug:
        slug = slug.split("@", 1)[0]
    slug = unquote(slug).strip().strip("/")
    return slug or None


def _is_inline_counter_element(el: Element) -> bool:
    """Détecte `<font size=-2>13</font>` ou `<sup>13</sup>` placé devant un sens/mot."""
    if el.tag not in ("font", "sup", "small", "span"):
        return False
    if el.has_descendant("a") or el.has_descendant("table"):
        return False
    t = el.text().strip()
    return bool(t) and t.isdigit()


def _detect_flag_lang(el: Element) -> Optional[str]:
    """Détecte un drapeau de langue (`flag_fr.png`, `flag_en.png`, `flag_mg.png`) dans une cellule."""
    for img in el.iter_elements("img"):
        src = img.get("src", "").lower()
        if "flag_fr" in src:
            return "fr"
        if "flag_en" in src or "flag_uk" in src or "flag_us" in src:
            return "en"
        if "flag_mg" in src:
            return "mg"
    return None


def _render_rich_lines(cell: Element) -> List[Tuple[str, str]]:
    """Convertit le contenu d'une cellule `<td>` en lignes `(plain_text, safe_html)`
    séparées par `<br>` / blocs, en supprimant les compteurs globaux (`13`, `23`) en tête de ligne
    et en réécrivant les liens internes `/bins/teny2/...` et `/bins/ohabolana/...`.
    """
    lines_html: List[List[str]] = [[]]
    lines_text: List[List[str]] = [[]]
    at_line_start = [True]

    def new_line() -> None:
        if lines_html[-1] or lines_text[-1]:
            lines_html.append([])
            lines_text.append([])
        at_line_start[0] = True

    def walk(node: Any) -> None:
        if isinstance(node, str):
            txt = node.replace("\r", "").replace("\n", " ")
            if at_line_start[0]:
                # Si le compteur numérique est directement collé en texte brut en début de ligne
                txt_stripped = txt.lstrip(" \t\xa0")
                if not txt_stripped:
                    return
            lines_text[-1].append(txt)
            lines_html[-1].append(html.escape(txt))
            if txt.strip():
                at_line_start[0] = False
            return

        tag = node.tag
        if tag in ("script", "style"):
            return
        if tag == "br":
            new_line()
            return
        if tag in ("p", "div", "tr", "li"):
            new_line()
            for ch in node.children:
                walk(ch)
            new_line()
            return

        # Compteur de sens en début de ligne : <font size=-2>14</font> ou <sup>14</sup>
        if at_line_start[0] and _is_inline_counter_element(node):
            # Ignore le numéro global de la page (on renumérotera proprement par section)
            return

        if tag == "img":
            # Ignore pixelsMail / drapeaux décoratifs dans le corps
            return

        if tag == "a":
            href = node.get("href", "")
            inner_text = _norm_ws(node.text())
            if not inner_text:
                return
            t_slug = canonical_teny_slug(href)
            o_slug = canonical_ohabolana_slug(href)
            # Est-ce une référence bibliographique numérique du type `1.1` ou `2.472#8` ?
            is_bib_ref = bool(re.match(r"^\d+\.\d+", inner_text))
            lines_text[-1].append(inner_text)
            esc_text = html.escape(inner_text)
            if t_slug:
                esc_slug = html.escape(t_slug, quote=True)
                cls = "mw-ref-link" if is_bib_ref else "mw-link"
                title_attr = f' title="{esc_slug}"' if is_bib_ref else ""
                lines_html[-1].append(
                    f'<a href="#/mot/{esc_slug}" data-slug="{esc_slug}" class="{cls}"{title_attr}>{esc_text}</a>'
                )
            elif o_slug:
                esc_slug = html.escape(o_slug, quote=True)
                lines_html[-1].append(
                    f'<a href="#/proverbes/{esc_slug}" data-proverb-slug="{esc_slug}" class="mw-proverb-link">{esc_text}</a>'
                )
            else:
                lines_html[-1].append(esc_text)
            at_line_start[0] = False
            return

        if tag in ("i", "em"):
            before_len = len(lines_html[-1])
            lines_html[-1].append("<em>")
            for ch in node.children:
                walk(ch)
            if len(lines_html[-1]) == before_len + 1:
                lines_html[-1].pop()
            else:
                lines_html[-1].append("</em>")
            return

        if tag in ("b", "strong"):
            before_len = len(lines_html[-1])
            lines_html[-1].append("<strong>")
            for ch in node.children:
                walk(ch)
            if len(lines_html[-1]) == before_len + 1:
                lines_html[-1].pop()
            else:
                lines_html[-1].append("</strong>")
            return

        for ch in node.children:
            walk(ch)

    for child in cell.children:
        walk(child)

    cleaned: List[Tuple[str, str]] = []
    for raw_t_parts, raw_h_parts in zip(lines_text, lines_html):
        t = _norm_ws("".join(raw_t_parts))
        h = _norm_ws("".join(raw_h_parts))
        if not t:
            continue
        # Nettoie un éventuel compteur numérique brut en tête de ligne (ex: "23Efitra..." ou "17 maison")
        m = _LEADING_COUNTER_RE.match(t)
        if m:
            num_prefix = m.group(1)
            t = t[m.end():].strip()
            h = re.sub(r"^\s*" + re.escape(num_prefix) + r"[\s\xa0]*", "", h, count=1).strip()
        if not t:
            continue
        # Si la ligne est uniquement une référence bibliographique `[1.3, 1.8]`, on la rattache au sens précédent
        if _STANDALONE_REF_RE.match(t) and cleaned:
            prev_t, prev_h = cleaned[-1]
            cleaned[-1] = (
                f"{prev_t} {t}",
                f'{prev_h} <span class="mw-cite">{h}</span>',
            )
        else:
            cleaned.append((t, h))
    return cleaned


def _extract_cell_links(cell: Element) -> List[Dict[str, str]]:
    """Extrait tous les liens `/bins/teny2/<slug>` d'une cellule sous forme `[{word, slug}]`."""
    items: List[Dict[str, str]] = []
    seen: Set[Tuple[str, str]] = set()
    for a in cell.iter_elements("a"):
        slug = canonical_teny_slug(a.get("href", ""))
        if not slug:
            continue
        w = _norm_ws(a.text())
        if not w or re.match(r"^\d+\.\d+", w):
            continue
        key = (w, slug)
        if key not in seen:
            seen.add(key)
            items.append({"word": w, "slug": slug})
    return items


def _is_nav_or_Chrome_table(table: Element) -> bool:
    """Détecte le bandeau de navigation supérieur, le sélecteur de drapeaux ou le pied de page."""
    has_home = False
    has_alpha = False
    for a in table.iter_elements("a"):
        href = a.get("href", "")
        if "/bins/homePage" in href or "/bins/ethnicLists" in href:
            has_home = True
        if "/bins/alphaLists" in href and "range=" not in href and "lang=" not in href:
            has_alpha = True
    if has_home and has_alpha:
        return True
    # Sélecteur de drapeaux inter-domaines (?w=...) sans aucune donnée lexicale
    links = list(table.iter_elements("a"))
    if links and all("?w=" in a.get("href", "") or "&w=" in a.get("href", "") for a in links):
        if not any("/bins/teny2/" in a.get("href", "") and "?w=" not in a.get("href", "") for a in links):
            return True
    # Pied de page copyright / pixelsMail
    imgs = list(table.iter_elements("img"))
    if imgs and all("pixelsmail" in img.get("src", "").lower() for img in imgs):
        t = table.text(strip=True)
        if len(t) < 120 and ("2001-" in t or "Mis à jour" in t or "Updated on" in t or not t):
            return True
    return False


# ---------------------------------------------------------------------------
# 1. Parseur `/bins/alphaLists?lang=mg`
# ---------------------------------------------------------------------------

def parse_alpha_list_mg(html_text: str) -> Dict[str, Any]:
    """Parse une page d'index alphabétique malgache.

    Retourne:
        {
          "ranges": ["a-aba", "abe-akak", ...],
          "words": [
            {
              "word": "aada",
              "slug": "aada",
              "root_word": "ada",
              "root_slug": "ada",
              "gloss_en": "",
              "gloss_fr": "lentement (à faire aller), ralentir (à faire)"
            }, ...
          ]
        }
    """
    doc = parse_html(html_text)
    ranges: List[str] = []
    seen_ranges: Set[str] = set()

    for a in doc.iter_elements("a"):
        href = a.get("href", "")
        if "alphaLists?" in href and "range=" in href:
            qs = parse_qs(urlparse(href).query)
            if qs.get("lang", ["mg"])[0] == "mg":
                for rng in qs.get("range", []):
                    rng = rng.strip()
                    if rng and rng not in seen_ranges:
                        seen_ranges.add(rng)
                        ranges.append(rng)

    words: List[Dict[str, str]] = []
    for table in doc.iter_elements("table"):
        for _tr, cells in iter_table_rows(table):
            if len(cells) < 3:
                continue
            if cells[0].has_descendant("table"):
                continue
            # Vérifie que la colonne 0 contient au moins un lien `/bins/teny2/`
            col0_links = [
                (a, canonical_teny_slug(a.get("href", "")))
                for a in cells[0].iter_elements("a")
            ]
            col0_links = [(a, s) for a, s in col0_links if s]
            if not col0_links:
                continue

            main_a, main_slug = col0_links[0]
            word = _norm_ws(main_a.text())
            if not word:
                continue

            root_word = ""
            root_slug = ""
            if len(col0_links) >= 2:
                col0_txt = cells[0].text(strip=True)
                if "(" in col0_txt:
                    root_a, r_slug = col0_links[1]
                    root_word = _norm_ws(root_a.text())
                    root_slug = r_slug or ""

            gloss_en = _norm_ws(cells[1].text(sep=" "))
            gloss_fr = _norm_ws(cells[2].text(sep=" "))

            words.append({
                "word": word,
                "slug": main_slug,
                "root_word": root_word,
                "root_slug": root_slug,
                "gloss_en": gloss_en,
                "gloss_fr": gloss_fr,
            })

    return {"ranges": ranges, "words": words}


# ---------------------------------------------------------------------------
# 2. Parseur `/bins/alphaLists?lang=fr` et `/bins/alphaLists?lang=en`
# ---------------------------------------------------------------------------

def parse_alpha_list_reverse(html_text: str, lang: str) -> Dict[str, Any]:
    """Parse une page d'index français (`lang='fr'`) ou anglais (`lang='en'`).

    Retourne:
        {
          "ranges": ["b", "c", ..., "z"],
          "mappings": [
            {"lang": "fr", "term": "abandonner", "targets": [{"word": "manary", "slug": "manary"}, ...]}
          ]
        }
    """
    doc = parse_html(html_text)
    ranges: List[str] = []
    seen_ranges: Set[str] = set()

    for a in doc.iter_elements("a"):
        href = a.get("href", "")
        if "alphaLists?" in href and "range=" in href:
            qs = parse_qs(urlparse(href).query)
            if qs.get("lang", [""])[0] == lang:
                for rng in qs.get("range", []):
                    rng = rng.strip()
                    if rng and rng not in seen_ranges:
                        seen_ranges.add(rng)
                        ranges.append(rng)

    mappings: List[Dict[str, Any]] = []
    header_blacklist = {
        "mots français", "mots anglais", "french words", "english words",
        "teny frantsay", "teny anglisy",
    }

    for table in doc.iter_elements("table"):
        for _tr, cells in iter_table_rows(table):
            if len(cells) != 2:
                continue
            if cells[0].has_descendant("table") or cells[1].has_descendant("table"):
                continue
            term = _norm_ws(cells[0].text(sep=" "))
            if not term or term.lower() in header_blacklist:
                continue
            targets = _extract_cell_links(cells[1])
            if not targets:
                continue
            mappings.append({
                "lang": lang,
                "term": term,
                "targets": targets,
            })

    return {"ranges": ranges, "mappings": mappings}


# ---------------------------------------------------------------------------
# 3. Parseur `/bins/proverbIndex`
# ---------------------------------------------------------------------------

def parse_proverb_index(html_text: str) -> Dict[str, Any]:
    """Parse une page d'index des proverbes (`/bins/proverbIndex` et `?i=b..z`).

    Retourne:
        {
          "letters": ["b", "d", ...],
          "items": [{"word": "adala", "slug": "adala", "count": 83}, ...]
        }
    """
    doc = parse_html(html_text)
    letters: List[str] = []
    seen_letters: Set[str] = set()

    for a in doc.iter_elements("a"):
        href = a.get("href", "")
        if "proverbIndex?" in href and "i=" in href:
            qs = parse_qs(urlparse(href).query)
            for lt in qs.get("i", []):
                lt = lt.strip().lower()
                if lt and lt not in seen_letters:
                    seen_letters.add(lt)
                    letters.append(lt)

    items: List[Dict[str, Any]] = []
    seen_slugs: Set[str] = set()

    # Parcourt les cellules contenant des liens `/bins/ohabolana/` pour récupérer aussi `(count)`
    for td in doc.iter_elements("td"):
        if td.has_descendant("table"):
            continue
        children = td.children
        for idx, ch in enumerate(children):
            if not isinstance(ch, Element) or ch.tag != "a":
                continue
            slug = canonical_ohabolana_slug(ch.get("href", ""))
            if not slug or slug in seen_slugs:
                continue
            word = _norm_ws(ch.text())
            count = 1
            if idx + 1 < len(children) and isinstance(children[idx + 1], str):
                m = _PAREN_COUNT_RE.search(children[idx + 1])
                if m:
                    count = int(m.group(1))
            seen_slugs.add(slug)
            items.append({"word": word or slug, "slug": slug, "count": count})

    # Filet de sécurité au cas où certains liens soient hors `<td>` direct
    for a in doc.iter_elements("a"):
        slug = canonical_ohabolana_slug(a.get("href", ""))
        if slug and slug not in seen_slugs:
            seen_slugs.add(slug)
            items.append({"word": _norm_ws(a.text()) or slug, "slug": slug, "count": 1})

    return {"letters": letters, "items": items}


# ---------------------------------------------------------------------------
# 4. Parseur `/bins/ohabolana/<slug>`
# ---------------------------------------------------------------------------

def _compute_proverb_hash(primary_text: str) -> str:
    """Calcule une empreinte stable du proverbe (sans les crochets `[2.415 #3166]` ni ponctuation)."""
    cleaned = re.sub(r"\[[^\]]*\]", "", primary_text)
    cleaned = normalize_search_token(cleaned)
    cleaned = re.sub(r"[^a-z0-9]+", "", cleaned)
    return hashlib.sha1(cleaned.encode("utf-8")).hexdigest()[:20]


def parse_ohabolana_page(html_text: str, page_slug: str) -> Dict[str, Any]:
    """Parse une page `/bins/ohabolana/<slug>` contenant tous les proverbes d'un mot."""
    doc = parse_html(html_text)
    proverbs: List[Dict[str, Any]] = []
    discovered_words: Set[str] = set()
    current: Optional[Dict[str, Any]] = None

    for table in doc.iter_elements("table"):
        if _is_nav_or_Chrome_table(table):
            continue
        for _tr, cells in iter_table_rows(table):
            if len(cells) < 2:
                continue
            if cells[0].has_descendant("table"):
                continue

            label = _norm_ws(cells[0].text(sep=" "))
            if not label and cells[1].has_descendant("hr"):
                continue

            m_hdr = _PROVERB_HEADER_RE.match(label)
            if m_hdr:
                if current and current["variants"]:
                    proverbs.append(current)

                variants_lines = _render_rich_lines(cells[1])
                linked = _extract_cell_links(cells[1])
                word_slugs = {page_slug}
                for item in linked:
                    word_slugs.add(item["slug"])
                    discovered_words.add(item["slug"])

                variants = [{"text": t, "html": h} for t, h in variants_lines]
                primary_text = variants[0]["text"] if variants else ""
                p_hash = _compute_proverb_hash(primary_text) if primary_text else ""

                current = {
                    "hash": p_hash,
                    "text_mg": primary_text,
                    "html_mg": variants[0]["html"] if variants else "",
                    "variants": variants,
                    "interp_mg": [],
                    "trans_fr": [],
                    "interp_fr": [],
                    "trans_en": [],
                    "interp_en": [],
                    "notes": [],
                    "word_slugs": sorted(word_slugs),
                }
                continue

            if current is None or not label:
                continue

            low = normalize_search_token(label)
            lines = [{"text": t, "html": h} for t, h in _render_rich_lines(cells[1])]
            if not lines:
                continue

            if "interpretation" in low or "heviny" in low or "fanazavana" in low:
                if "francais" in low or "french" in low or "frantsay" in low:
                    current["interp_fr"].extend(lines)
                elif "anglais" in low or "english" in low or "anglisy" in low:
                    current["interp_en"].extend(lines)
                else:
                    current["interp_mg"].extend(lines)
            elif "traduction" in low or "translation" in low or "dikanteny" in low or "dikan-teny" in low:
                if "anglais" in low or "english" in low or "anglisy" in low:
                    current["trans_en"].extend(lines)
                else:
                    current["trans_fr"].extend(lines)
            else:
                current["notes"].append({"label": label, "lines": lines})

    if current and current["variants"]:
        proverbs.append(current)

    return {
        "slug": page_slug,
        "proverbs": proverbs,
        "discovered_teny_slugs": sorted(discovered_words),
    }


# ---------------------------------------------------------------------------
# 5. Parseur `/bins/teny2/<slug>` (Mode Complet)
# ---------------------------------------------------------------------------

def _clean_headword_cell(cell: Element, page_slug: str) -> Tuple[str, str]:
    """Extrait `(headword, lang)` de la cellule `Entrée` en nettoyant le compteur initial."""
    lang = _detect_flag_lang(cell) or "mg"

    # Parcourt les enfants en ignorant un premier élément compteur (`<font>13</font>`)
    parts: List[str] = []
    skipped_counter = False
    for ch in cell.children:
        if not skipped_counter and isinstance(ch, Element) and _is_inline_counter_element(ch):
            skipped_counter = True
            continue
        if isinstance(ch, str):
            parts.append(ch)
        elif ch.tag == "br":
            parts.append("\n")
        elif ch.tag != "img":
            parts.append(ch.text(sep=""))

    raw = "".join(parts).strip()
    # Si un saut de ligne sépare le numéro et le mot (`1\nfihavanana`), garde la partie non numérique
    lines = [_norm_ws(ln) for ln in raw.splitlines() if _norm_ws(ln)]
    if len(lines) >= 2 and lines[0].isdigit():
        headword = " ".join(lines[1:])
    else:
        headword = _norm_ws(raw)
        # Cas `13vola` où le slug ne commence pas par un chiffre
        if headword and not (page_slug and page_slug[0].isdigit()):
            cleaned_hw = _LEADING_HEADWORD_COUNTER_RE.sub("", headword)
            if cleaned_hw:
                headword = cleaned_hw

    return (headword or page_slug, lang)


def _classify_field_label(label: str) -> str:
    """Identifie le rôle sémantique d'une ligne de fiche `/bins/teny2/` (en FR, EN ou MG)."""
    low = normalize_search_token(label)
    low_clean = low.rstrip(" :.")

    if re.match(r"^(?:entree|entry|teny)(?:\s*\(\d+/\d+\))?$", low_clean):
        return "entry"
    if low_clean in ("radical", "radicaux", "root", "roots", "fototeny"):
        return "root"
    if low_clean in ("mots elementaires", "mot elementaire", "elementary words", "elementary word", "teny fototra"):
        return "components"
    if low_clean in ("partie du discours", "part of speech", "sokajin-teny", "sokajinteny"):
        return "pos"
    if low_clean in ("morphologie", "morphology", "endri-teny", "endriteny"):
        return "morphology"
    if low_clean in ("derives", "derivatives", "sampan-teny", "sampanteny"):
        return "derivatives"
    if "explications" in low_clean or "explanations" in low_clean or "fanazavana" in low_clean or "dikan" in low_clean:
        if "francais" in low_clean or "french" in low_clean or "frantsay" in low_clean:
            return "defs_fr"
        if "anglais" in low_clean or "english" in low_clean or "anglisy" in low_clean:
            return "defs_en"
        return "defs_mg"
    if low_clean in ("exemples", "exemple", "examples", "example", "ohatra"):
        return "examples"
    if low_clean in ("synonymes", "synonyme", "synonyms", "synonym", "mitovy hevitra"):
        return "synonyms"
    if low_clean in ("antonymes", "antonyme", "antonyms", "antonym", "mifanohitra"):
        return "antonyms"
    if low_clean in ("analogues", "analogue", "analogs", "analog"):
        return "analogs"
    if "graphie" in low_clean or "spelling" in low_clean or "tsipelina" in low_clean:
        return "other_spellings"
    if "scientifique" in low_clean or "scientific" in low_clean:
        return "scientific_name"
    if low_clean in ("vocabulaire", "vocabulaires", "vocabulary", "vocabularies", "voambolana"):
        return "vocabulary"
    if low_clean in ("proverbes", "proverbe", "proverbs", "proverb", "ohabolana"):
        return "proverbs_link"
    if low_clean in ("combinaisons", "combinations", "fikambanana"):
        return "combinations"
    if low_clean in ("anagrammes", "anagramme", "anagrams", "anagram", "anagrama"):
        return "anagrams"
    if low_clean in ("illustrations", "illustration", "sary"):
        return "illustrations"
    return "extra"


def _new_entry_dict(headword: str, lang: str = "mg", entry_badge: str = "") -> Dict[str, Any]:
    return {
        "headword": headword,
        "lang": lang,
        "badge": entry_badge,
        "pos": "",
        "roots": [],
        "components": [],
        "defs_mg": [],
        "defs_fr": [],
        "defs_en": [],
        "examples": [],
        "morphology": [],
        "derivatives": [],
        "synonyms": [],
        "antonyms": [],
        "analogs": [],
        "other_spellings": [],
        "scientific_name": [],
        "vocabulary": [],
        "combinations_text": "",
        "proverb_slug": "",
        "extra_rows": [],
    }


def parse_teny2_page(html_text: str, page_slug: str) -> Dict[str, Any]:
    """Parse une fiche complète `/bins/teny2/<slug>` en conservant tous les homonymes et sections."""
    doc = parse_html(html_text)
    full_text = doc.text(sep=" ")
    m_upd = _UPDATED_RE.search(full_text)
    updated_at = m_upd.group(1) if m_upd else ""

    entries: List[Dict[str, Any]] = []
    current: Optional[Dict[str, Any]] = None
    anagrams: List[Dict[str, str]] = []
    discovered_teny: Set[str] = set()
    discovered_ohabolana: Set[str] = set()

    # Collecte les liens découverts sur la page
    for a in doc.iter_elements("a"):
        href = a.get("href", "")
        if "?w=" in href or "&w=" in href:
            continue
        o_slug = canonical_ohabolana_slug(href)
        if o_slug:
            discovered_ohabolana.add(o_slug)

    # Identifie les tables imbriquées pour ne pas les visiter deux fois au premier niveau
    nested_tables: Set[int] = set()
    for tbl in doc.iter_elements("table"):
        for sub_tbl in tbl.iter_elements("table"):
            nested_tables.add(id(sub_tbl))

    def process_table(table: Element) -> None:
        nonlocal current
        if _is_nav_or_Chrome_table(table):
            return

        rows = list(iter_table_rows(table))
        if not rows:
            return

        # Si une table enveloppe simplement d'autres tables dans une seule cellule ou en col 0, descendre dedans
        if all(len(cells) == 1 and cells[0].has_descendant("table") for _, cells in rows):
            for _, cells in rows:
                for sub_t in cells[0].direct_Tag_children("table"):
                    process_table(sub_t)
            return

        # Cas particulier des pages inverses FR/EN sans ligne `Entrée` (ex: `/bins/teny2/maison`)
        first_cells = rows[0][1]
        if (
            len(first_cells) >= 2
            and not _norm_ws(first_cells[0].text())
            and _detect_flag_lang(first_cells[1]) in ("fr", "en")
            and len(rows) >= 2
        ):
            hw, flg = _clean_headword_cell(first_cells[1], page_slug)
            rev_entry = _new_entry_dict(hw, lang=flg)
            for _, r_cells in rows[1:]:
                if len(r_cells) < 2:
                    continue
                links = _extract_cell_links(r_cells[0])
                lines = _render_rich_lines(r_cells[1])
                if links:
                    for lk in links:
                        discovered_teny.add(lk["slug"])
                    mg_links_html = ", ".join(
                        f'<a href="#/mot/{html.escape(lk["slug"], quote=True)}" '
                        f'data-slug="{html.escape(lk["slug"], quote=True)}" class="mw-link">'
                        f'<strong>{html.escape(lk["word"])}</strong></a>'
                        for lk in links
                    )
                    gloss_t = " ; ".join(t for t, _ in lines)
                    gloss_h = " ; ".join(h for _, h in lines)
                    target_list = rev_entry["defs_fr"] if flg == "fr" else rev_entry["defs_en"]
                    target_list.append({
                        "text": f"{', '.join(lk['word'] for lk in links)} : {gloss_t}".strip(" :"),
                        "html": f"{mg_links_html} — {gloss_h}" if gloss_h else mg_links_html,
                    })
            if rev_entry["defs_fr"] or rev_entry["defs_en"]:
                entries.append(rev_entry)
                current = rev_entry
            return

        for _tr, cells in rows:
            if len(cells) < 2:
                # Si cellule unique contenant des sous-tables, descendre dedans
                if len(cells) == 1 and cells[0].has_descendant("table"):
                    for sub_t in cells[0].iter_elements("table"):
                        if not _is_nav_or_Chrome_table(sub_t):
                            # Évite la double visite de sous-sous-tables
                            if not any(
                                id(sub_t) != id(other) and sub_t in other.find_all("table")
                                for other in cells[0].find_all("table")
                            ):
                                process_table(sub_t)
                continue

            if cells[0].has_descendant("table"):
                # Ligne de mise en page englobante
                for c in cells:
                    for sub_t in c.direct_Tag_children("table"):
                        process_table(sub_t)
                continue

            label = _norm_ws(cells[0].text(sep=" "))
            if not label:
                continue

            kind = _classify_field_label(label)
            val_cell = cells[1]

            if kind == "entry":
                hw, lang = _clean_headword_cell(val_cell, page_slug)
                m_badge = re.search(r"\((\d+/\d+)\)", label)
                badge = m_badge.group(1) if m_badge else ""
                current = _new_entry_dict(hw, lang=lang, entry_badge=badge)
                entries.append(current)
                continue

            if kind == "anagrams":
                for lk in _extract_cell_links(val_cell):
                    if lk not in anagrams:
                        anagrams.append(lk)
                        discovered_teny.add(lk["slug"])
                continue

            if kind == "illustrations":
                # En mode hors-ligne léger (~60-100 Mo), on n'aspire pas les photos JPEG lourdes
                continue

            # Si une fiche n'avait pas d'en-tête explicite `Entrée`, en crée une par défaut
            if current is None:
                current = _new_entry_dict(page_slug, lang="mg")
                entries.append(current)

            if kind == "root":
                links = _extract_cell_links(val_cell)
                if links:
                    for lk in links:
                        discovered_teny.add(lk["slug"])
                        if lk not in current["roots"]:
                            current["roots"].append(lk)
                else:
                    lines = _render_rich_lines(val_cell)
                    if lines:
                        current["roots"].append({"word": lines[0][0], "slug": ""})

            elif kind == "components":
                for lk in _extract_cell_links(val_cell):
                    discovered_teny.add(lk["slug"])
                    if lk not in current["components"]:
                        current["components"].append(lk)

            elif kind == "pos":
                lines = _render_rich_lines(val_cell)
                if lines:
                    pos_txt = _LIST_COMPLETE_RE.sub("", lines[0][0]).strip(" ,;:-")
                    current["pos"] = pos_txt

            elif kind == "morphology":
                sub_table = val_cell.find_first("table")
                if sub_table:
                    for _, s_cells in iter_table_rows(sub_table):
                        if len(s_cells) >= 2:
                            s_lbl_lines = _render_rich_lines(s_cells[0])
                            s_lbl = s_lbl_lines[0][0].rstrip(" :") if s_lbl_lines else _norm_ws(s_cells[0].text())
                            s_val_lines = _render_rich_lines(s_cells[1])
                            if s_val_lines:
                                current["morphology"].append({
                                    "label": s_lbl,
                                    "text": ", ".join(t for t, _ in s_val_lines),
                                    "html": ", ".join(h for _, h in s_val_lines),
                                })
                else:
                    for t, h in _render_rich_lines(val_cell):
                        current["morphology"].append({"label": "", "text": t, "html": h})

            elif kind == "derivatives":
                sub_table = val_cell.find_first("table")
                if sub_table:
                    for _, s_cells in iter_table_rows(sub_table):
                        if len(s_cells) >= 2:
                            s_lbl = _norm_ws(s_cells[0].text()).rstrip(" :")
                            d_links = _extract_cell_links(s_cells[1])
                            for lk in d_links:
                                discovered_teny.add(lk["slug"])
                            if d_links:
                                current["derivatives"].append({"label": s_lbl, "items": d_links})
                else:
                    d_links = _extract_cell_links(val_cell)
                    for lk in d_links:
                        discovered_teny.add(lk["slug"])
                    if d_links:
                        current["derivatives"].append({"label": "", "items": d_links})

            elif kind in ("defs_mg", "defs_fr", "defs_en", "examples"):
                for t, h in _render_rich_lines(val_cell):
                    current[kind].append({"text": t, "html": h})

            elif kind in ("synonyms", "antonyms", "analogs", "other_spellings"):
                links = _extract_cell_links(val_cell)
                if links:
                    for lk in links:
                        discovered_teny.add(lk["slug"])
                        if lk not in current[kind]:
                            current[kind].append(lk)
                else:
                    for t, _ in _render_rich_lines(val_cell):
                        for part in [p.strip() for p in t.split(",") if p.strip()]:
                            item = {"word": part, "slug": ""}
                            if item not in current[kind]:
                                current[kind].append(item)

            elif kind == "scientific_name":
                sub_t = val_cell.find_first("table")
                target_cell = sub_t if sub_t else val_cell
                for t, _ in _render_rich_lines(target_cell):
                    if t and t not in current["scientific_name"]:
                        current["scientific_name"].append(t)

            elif kind == "vocabulary":
                for t, _ in _render_rich_lines(val_cell):
                    if t and t not in current["vocabulary"]:
                        current["vocabulary"].append(t)

            elif kind == "proverbs_link":
                for a in val_cell.iter_elements("a"):
                    o_slug = canonical_ohabolana_slug(a.get("href", ""))
                    if o_slug:
                        current["proverb_slug"] = o_slug
                        discovered_ohabolana.add(o_slug)
                        break

            elif kind == "combinations":
                lines = _render_rich_lines(val_cell)
                if lines:
                    current["combinations_text"] = lines[0][0]

            else:
                lines = [{"text": t, "html": h} for t, h in _render_rich_lines(val_cell)]
                if lines:
                    current["extra_rows"].append({"label": label, "lines": lines})

    for tbl in doc.iter_elements("table"):
        if id(tbl) not in nested_tables:
            process_table(tbl)

    return {
        "slug": page_slug,
        "updated_at": updated_at,
        "entries": entries,
        "anagrams": anagrams,
        "discovered_teny_slugs": sorted(discovered_teny),
        "discovered_ohabolana_slugs": sorted(discovered_ohabolana),
    }
