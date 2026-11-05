"""Analyseur HTML pour les pages, traites et lexiques de l'Akademia Malagasy."""

from __future__ import annotations

import hashlib
import html
import re
from html.parser import HTMLParser
from typing import Any
from urllib.parse import urljoin


FOOTER_PATTERNS = [
    re.compile(r"FOIBE\s+MOMBA\s+NY\s+TENY\s+an['’]ny\s+AKADEMIA\s+MALAGASY.*", re.IGNORECASE | re.DOTALL),
    re.compile(r"©\s*Foibe\s+momba\s+ny\s+teny.*", re.IGNORECASE | re.DOTALL),
]

POS_MG_RE = re.compile(
    r"^(.*?)\s+(a\.t\.|a\.|mpt\.|mt\.p\.|mt\.ih\.|mt\.|mp\.t\.|t\.p\.|pis\.|mpamp\.|adj\.|n\.|v\.|loc\.|adv\.)(?:\s+J\.)?\s*(.*)$",
    re.IGNORECASE | re.DOTALL,
)

POS_FR_RE = re.compile(
    r"^(.*?)\s+((?:n\.|v\.|adj\.|adv\.|loc\.)(?:\s*,\s*(?:e|ive|elle|ale|trice|nne))?)\s*,?\s*$",
    re.IGNORECASE | re.DOTALL,
)

FR_TRANSLATION_LINE_RE = re.compile(
    r"\b(n\.|adj\.|loc\.|v\.|adv\.)\s*$",
    re.IGNORECASE,
)


def decode_html_bytes(raw: bytes) -> str:
    """Decode proprement l'HTML (UTF-8 prioritaire, repli Windows-1252 / Latin-1)."""
    if not raw:
        return ""
    if raw.startswith(b"\xef\xbb\xbf"):
        return raw[3:].decode("utf-8", errors="replace")
    try:
        return raw.decode("utf-8")
    except UnicodeDecodeError:
        pass
    head_ascii = raw[:2048].decode("ascii", errors="ignore").lower()
    if "iso-8859-1" in head_ascii or "windows-1252" in head_ascii:
        return raw.decode("cp1252", errors="replace")
    return raw.decode("cp1252", errors="replace")


def make_entry_uid(domain: str, direction: str, term: str, sense_num: str, translation: str) -> str:
    raw = f"{domain.lower()}|{direction.lower()}|{term.strip().lower()}|{sense_num.strip()}|{translation.strip().lower()[:60]}"
    return hashlib.sha1(raw.encode("utf-8")).hexdigest()[:20]


class _LinkExtractor(HTMLParser):
    """Extrait tous les liens <a href> et <script src> d'une page HTML."""

    def __init__(self, base_url: str) -> None:
        super().__init__(convert_charrefs=True)
        self.base_url = base_url
        self.links: list[tuple[str, str]] = []
        self.scripts: list[str] = []
        self._in_a = False
        self._current_href = ""
        self._current_text: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attr_map = {k.lower(): (v or "") for k, v in attrs}
        if tag.lower() == "a" and attr_map.get("href"):
            self._in_a = True
            self._current_href = urljoin(self.base_url, attr_map["href"].strip())
            self._current_text = []
        elif tag.lower() == "script" and attr_map.get("src"):
            self.scripts.append(urljoin(self.base_url, attr_map["src"].strip()))

    def handle_data(self, data: str) -> None:
        if self._in_a:
            self._current_text.append(data)

    def handle_endtag(self, tag: str) -> None:
        if tag.lower() == "a" and self._in_a:
            label = " ".join("".join(self._current_text).split())
            self.links.append((self._current_href, label))
            self._in_a = False
            self._current_href = ""
            self._current_text = []


def extract_links_and_scripts(raw_html: str, base_url: str) -> tuple[list[tuple[str, str]], list[str]]:
    parser = _LinkExtractor(base_url)
    try:
        parser.feed(raw_html)
    except Exception:
        pass
    # Detecter aussi d'eventuels liens .php ou .pdf dans des menus JS inline (ex: Sothink stm_ai)
    for m in re.finditer(r"""['"]([A-Za-z0-9_./-]+\.(?:php|pdf)(?:\?[A-Za-z0-9_=&-]+)?)['"]""", raw_html):
        candidate = urljoin(base_url, m.group(1))
        parser.links.append((candidate, ""))
    return parser.links, parser.scripts


def _strip_footer(text: str) -> str:
    out = text
    for pat in FOOTER_PATTERNS:
        out = pat.sub("", out)
    return out.strip()


def _html_to_marked_text(raw_html: str) -> str:
    """Convertit l'HTML d'une page lexique en texte structure en marquant les debuts en gras."""
    cleaned = re.sub(r"<(script|style)\b[^>]*>.*?</\1>", "", raw_html, flags=re.IGNORECASE | re.DOTALL)
    # Isoler la partie apres <hr> si presente (les pages lexique ont l'alphabet au-dessus de <hr>)
    hr_split = re.split(r"<hr\b[^>]*>", cleaned, maxsplit=1, flags=re.IGNORECASE)
    if len(hr_split) == 2:
        cleaned = hr_split[1]

    # Marquer les balises gras qui debutent souvent une entree "- mot"
    cleaned = re.sub(
        r"<(?:b|strong)\b[^>]*>(.*?)</(?:b|strong)>",
        lambda m: f"\x02{m.group(1)}\x03",
        cleaned,
        flags=re.IGNORECASE | re.DOTALL,
    )
    cleaned = re.sub(r"<br\s*/?>", "\n", cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r"</(?:p|div|li|tr|h[1-6]|blockquote)>", "\n", cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r"<[^>]+>", " ", cleaned)
    cleaned = html.unescape(cleaned)
    cleaned = cleaned.replace("\xa0", " ")
    cleaned = _strip_footer(cleaned)
    return cleaned


def _split_entry_chunks(marked_text: str) -> list[str]:
    """Decoupe le texte en blocs d'entrees individuelles commençant par '- '."""
    # Si des marqueurs gras \x02...\x03 contenant un tiret initial existent, les forcer en debut de bloc
    text = re.sub(r"\x02\s*([-–])\s*", lambda _: "\n\x01- ", marked_text)
    text = text.replace("\x02", " ").replace("\x03", " ")

    # Aussi supporter le texte brut ou les lignes commencent par "- mot"
    text = re.sub(r"(?:^|\n)\s*([-–])\s*(?=[A-Za-zÀ-ÿ])", lambda _: "\n\x01- ", text)

    raw_chunks = [c.strip() for c in text.split("\x01") if c.strip()]
    entries: list[str] = []
    for ch in raw_chunks:
        if ch.startswith("-"):
            entries.append(ch.lstrip("-").strip())
    return entries


def parse_vocab_page(
    raw_html: str,
    *,
    domain: str,
    direction: str,
    letter: str,
    source_url: str = "",
) -> list[dict[str, Any]]:
    """Extrait les entrees MG->FR ou FR->MG d'une page Voambolana de l'Akademia."""
    marked = _html_to_marked_text(raw_html)
    chunks = _split_entry_chunks(marked)
    results: list[dict[str, Any]] = []
    norm_letter = (letter[:1] or "A").upper()

    for chunk in chunks:
        lines = [" ".join(ln.split()) for ln in chunk.splitlines() if ln.strip()]
        if not lines:
            continue
        joined = " ".join(lines)
        if len(joined) < 4:
            continue
        # Ignorer d'eventuels restes de navigation
        if joined.lower().startswith("fandraisana") or re.match(r"^[a-z]\s*-\s*fr$", joined.lower()):
            continue

        if direction == "fr-mg":
            if ":" not in joined:
                continue
            left, right = joined.split(":", 1)
            left = " ".join(left.split()).strip()
            translation = " ".join(right.split()).strip(" .;")
            if not left or not translation:
                continue
            pos = ""
            term = left
            m_fr = POS_FR_RE.match(left)
            if m_fr:
                term = m_fr.group(1).strip()
                pos = m_fr.group(2).strip()
            else:
                # Cas sans point comme "appeler v"
                m_alt = re.match(r"^(.*?)\s+(n|v|adj|adv|loc)\.?$", left, flags=re.IGNORECASE)
                if m_alt:
                    term = m_alt.group(1).strip()
                    pos = m_alt.group(2).lower() + "."
            actual_letter = (term[:1] or norm_letter).upper()
            uid = make_entry_uid(domain, direction, term, "", translation)
            results.append(
                {
                    "entry_uid": uid,
                    "domain": domain,
                    "direction": "fr-mg",
                    "letter": actual_letter,
                    "term": term,
                    "sense_num": "",
                    "pos": pos,
                    "definition": "",
                    "translation": translation,
                    "source_url": source_url,
                }
            )
        else:
            # Direction MG -> FR :
            # Format typique :
            #   abàka a. fafana fizahana marika.
            #   abaque n.
            translation = ""
            body_lines = lines[:]
            if len(body_lines) >= 2 and (
                FR_TRANSLATION_LINE_RE.search(body_lines[-1])
                or not body_lines[-1].endswith(".")
                or body_lines[-2].endswith(".")
            ):
                translation = body_lines[-1].strip()
                body_lines = body_lines[:-1]

            main_text = " ".join(body_lines).strip()
            if not main_text:
                continue

            term = ""
            pos = ""
            definition = ""
            m_mg = POS_MG_RE.match(main_text)
            if m_mg:
                raw_term = m_mg.group(1).strip()
                pos = m_mg.group(2).strip()
                definition = m_mg.group(3).strip()
            else:
                parts = main_text.split(" ", 1)
                raw_term = parts[0].strip()
                definition = parts[1].strip() if len(parts) > 1 else ""

            # Extraire un numero d'homonyme/sens colle (ex: adihevitra1 -> adihevitra, sense 1)
            sense_num = ""
            m_num = re.match(r"^(.*?)(\d+)$", raw_term)
            if m_num and m_num.group(1).strip():
                term = m_num.group(1).strip()
                sense_num = m_num.group(2)
            else:
                term = raw_term

            if not term:
                continue

            # Si la traduction etait restee collee en fin de definition (ex: "... marika. abaque n.")
            if not translation and definition:
                m_tail = re.match(
                    r"^(.*?\.)\s+([a-zàâçéèêëîïôûùüÿñœ'\s,()-]+\s+(?:n\.|adj\.|loc\.|v\.|adv\.))\s*$",
                    definition,
                    flags=re.IGNORECASE,
                )
                if m_tail:
                    definition = m_tail.group(1).strip()
                    translation = m_tail.group(2).strip()

            actual_letter = norm_letter
            first_alpha = re.search(r"[A-Za-zÀ-ÿ]", term)
            if first_alpha:
                actual_letter = first_alpha.group(0).upper()

            uid = make_entry_uid(domain, "mg-fr", term, sense_num, translation or definition)
            results.append(
                {
                    "entry_uid": uid,
                    "domain": domain,
                    "direction": "mg-fr",
                    "letter": actual_letter,
                    "term": term,
                    "sense_num": sense_num,
                    "pos": pos,
                    "definition": definition,
                    "translation": translation,
                    "source_url": source_url,
                }
            )

    return results


def extract_scientific_terms(body_text: str, source_url: str) -> list[dict[str, Any]]:
    """Extrait les paires terminologiques scientifiques de fandrafetana.php."""
    entries: list[dict[str, Any]] = []
    seen: set[str] = set()
    current_sub = "Teny siantifika"
    for raw_line in body_text.splitlines():
        line = " ".join(raw_line.split()).strip()
        if not line:
            continue
        m_dom = re.match(
            r"^(Matematika|Fizika|Simia|Zeolozia|Meteorolojia|Siansa natioraly|Fomba fiteny)\s*:",
            line,
            flags=re.IGNORECASE,
        )
        if m_dom:
            current_sub = f"Teny siantifika ({m_dom.group(1)})"
            line = line[m_dom.end():].strip()
        for m in re.finditer(
            r"(?:^|[-–•])\s*([A-Za-zÀ-ÿ][A-Za-zÀ-ÿ\s'()-]{1,42}?)\s*:\s*([A-Za-zÀ-ÿ][A-Za-zÀ-ÿ\s,()-]{1,45})(?=$|\s+[-–•])",
            line,
        ):
            mg_term = m.group(1).strip(" -–•")
            fr_term = m.group(2).strip(" -–•.;")
            if len(mg_term) < 2 or len(fr_term) < 2:
                continue
            if mg_term.lower() in {"ohatra", "dikan-teny ratsy", "maningana", "lohahevitra 1", "lohahevitra 2"}:
                continue
            key = f"{mg_term.lower()}={fr_term.lower()}"
            if key in seen:
                continue
            seen.add(key)
            first_ch = re.search(r"[A-Za-zÀ-ÿ]", mg_term)
            letter = first_ch.group(0).upper() if first_ch else "A"
            uid = make_entry_uid("Teny siantifika", "mg-fr", mg_term, "", fr_term)
            entries.append(
                {
                    "entry_uid": uid,
                    "domain": "Teny siantifika",
                    "direction": "mg-fr",
                    "letter": letter,
                    "term": mg_term,
                    "sense_num": "",
                    "pos": current_sub,
                    "definition": "Voambolana siantifika narafitry ny Akademia Malagasy (Pr. Raoelina Andriambololona & F. Ramiandrasoa).",
                    "translation": fr_term,
                    "source_url": source_url,
                }
            )
    return entries


def parse_article_page(
    raw_html: str,
    *,
    slug: str,
    url: str,
    default_title: str = "",
    default_category: str = "Tahirin-kevitra",
    default_author: str = "",
) -> dict[str, Any]:
    """Nettoie une page d'article/traite PHP et genere HTML hors-ligne + sommaire + texte FTS."""
    cleaned = re.sub(r"<(script|style|noscript|iframe)\b[^>]*>.*?</\1>", "", raw_html, flags=re.IGNORECASE | re.DOTALL)

    # Extraire <title> si disponible
    title_match = re.search(r"<title\b[^>]*>(.*?)</title>", cleaned, flags=re.IGNORECASE | re.DOTALL)
    page_title = html.unescape(title_match.group(1)).strip() if title_match else ""
    if page_title.lower() in {"", "404 not found", "foibe momba ny teny"} and default_title:
        page_title = default_title
    elif default_title and len(default_title) > len(page_title):
        page_title = default_title

    # Garder uniquement l'interieur de <body>
    body_match = re.search(r"<body\b[^>]*>(.*)</body>", cleaned, flags=re.IGNORECASE | re.DOTALL)
    body = body_match.group(1) if body_match else cleaned

    # Retirer banniere loha.jpg et lien retour Fandraisana
    body = re.sub(r"<img\b[^>]*loha\.jpg[^>]*>", "", body, flags=re.IGNORECASE)
    body = re.sub(
        r"<a\b[^>]*href=['\"][^'\"]*index\.php['\"][^>]*>\s*Fandraisana\s*</a>",
        "",
        body,
        flags=re.IGNORECASE,
    )
    # Retirer les menus ul/li de navigation principaux s'ils precedent le contenu
    body = re.sub(
        r"<ul\b[^>]*(?:id|class)=['\"][^'\"]*(?:nav|menu)[^'\"]*['\"][^>]*>.*?</ul>",
        "",
        body,
        flags=re.IGNORECASE | re.DOTALL,
    )

    # Corriger les liens casses http://localhost/rohyteny/... presents sur vahatra.php
    localhost_fixed = False
    if "localhost/rohyteny" in body:
        localhost_fixed = True
        body = re.sub(
            r"<a\b[^>]*href=['\"]http://localhost/rohyteny/[^'\"]*['\"][^>]*>(.*?)</a>",
            r"<span class='vahatra-topic'>\1</span>",
            body,
            flags=re.IGNORECASE | re.DOTALL,
        )

    # Supprimer les attributs dangereux / inutiles tout en gardant la structure lisible
    allowed_tags = {
        "h1", "h2", "h3", "h4", "p", "br", "hr", "ul", "ol", "li",
        "b", "strong", "i", "em", "u", "sup", "sub", "blockquote",
        "table", "thead", "tbody", "tr", "th", "td", "span", "div", "a",
    }

    def _clean_tag(match: re.Match[str]) -> str:
        closing = match.group(1) == "/"
        tag = match.group(2).lower()
        attrs = match.group(3) or ""
        if tag not in allowed_tags:
            return ""
        if closing:
            return f"</{tag}>"
        if tag == "br":
            return "<br>"
        if tag == "hr":
            return "<hr>"
        if tag == "span" and "vahatra-topic" in attrs:
            return '<span class="vahatra-topic">'
        if tag == "a":
            href_m = re.search(r"href=['\"]([^'\"]+)['\"]", attrs, flags=re.IGNORECASE)
            if href_m:
                href = urljoin(url, href_m.group(1).strip())
                if href.lower().endswith(".pdf"):
                    return f'<a href="{html.escape(href)}" target="_blank" rel="noopener" class="pdf-inline-link">'
                if href.startswith("#"):
                    return f'<a href="{html.escape(href)}">'
            return "<span>"
        return f"<{tag}>"

    body = re.sub(r"<(/?)([A-Za-z0-9]+)\b([^>]*)>", _clean_tag, body)
    # Fermer proprement les <a> transformes en <span> si besoin via normalisation legere
    body = html.unescape(body)
    body = _strip_footer(body)

    # Transformer les paragraphes numerotes (ex: <b>1.1.</b>, <b>2.6.1.</b>, <b>Volet I</b>) en sous-titres avec sommaire
    toc: list[dict[str, Any]] = []
    sec_counter = 0

    def _promote_heading(m: re.Match[str]) -> str:
        nonlocal sec_counter
        level_tag = m.group(1).lower()
        inner = re.sub(r"<[^>]+>", "", m.group(2)).strip()
        if not inner or len(inner) > 160:
            return m.group(0)
        sec_counter += 1
        sec_id = f"sec-{sec_counter}"
        lvl = 2 if level_tag in {"h1", "h2"} else 3
        toc.append({"id": sec_id, "title": inner, "level": lvl})
        return f'<h{lvl} id="{sec_id}">{html.escape(inner)}</h{lvl}>'

    body = re.sub(r"<(h[1-4])>(.*?)</\1>", _promote_heading, body, flags=re.IGNORECASE | re.DOTALL)

    # Si la page utilise des <b>1.2. ...</b> au lieu de <h2>/<h3>, generer des ancres de section
    if len(toc) < 2:
        def _bold_sec_repl(m: re.Match[str]) -> str:
            nonlocal sec_counter
            txt = " ".join(re.sub(r"<[^>]+>", "", m.group(1)).split()).strip()
            if re.match(
                r"^(?:Lohahevitra\s+\d+|Volet\s+[IVX]+|[IVX]+\s*\.\s+\S+|\d+(?:\.\d+){0,3}\s*[-–.]\s*[A-ZÀ-Ÿa-z])",
                txt,
            ) and 5 <= len(txt) <= 140:
                sec_counter += 1
                sec_id = f"sec-{sec_counter}"
                toc.append({"id": sec_id, "title": txt, "level": 3})
                return f'<h3 id="{sec_id}" class="doc-subhead">{html.escape(txt)}</h3>'
            return m.group(0)

        body = re.sub(
            r"<(?:b|strong)>(.*?)</(?:b|strong)>",
            _bold_sec_repl,
            body,
            flags=re.IGNORECASE | re.DOTALL,
        )

    if localhost_fixed:
        notice = (
            '<div class="ak-note-box">'
            "<strong>Fanamarihana momba ny Vahatra :</strong> Lisitry ny lohahevitra 78 ao amin'ny "
            "fandaharana <em>Vahatra</em> (TVM &amp; Foibe momba ny Teny). Eo amin'ny lohamilina "
            "ôfisialin'ny Akademia Malagasy dia mbola manondro <code>localhost/rohyteny</code> ireo rohy anatiny."
            "</div>"
        )
        body = notice + "\n" + body

    # Extraire le texte brut propre pour FTS5 et resume
    plain = re.sub(r"<(?:br|hr|/p|/div|/li|/tr|/h[1-6])>", "\n", body, flags=re.IGNORECASE)
    plain = re.sub(r"<[^>]+>", " ", plain)
    plain = html.unescape(plain).replace("\xa0", " ")
    plain_lines = [" ".join(ln.split()) for ln in plain.splitlines() if ln.strip()]
    plain_text = "\n".join(plain_lines)

    summary = ""
    for ln in plain_lines:
        if len(ln) > 45 and ln.lower() != page_title.lower():
            summary = ln[:260] + ("…" if len(ln) > 260 else "")
            break
    if not summary and plain_lines:
        summary = " ".join(plain_lines[:3])[:260]

    return {
        "slug": slug,
        "url": url,
        "category": default_category,
        "title": page_title or default_title or slug,
        "author": default_author,
        "summary": summary,
        "body_html": f'<div class="ak-doc-content">{body}</div>',
        "body_text": plain_text,
        "toc": toc,
    }
