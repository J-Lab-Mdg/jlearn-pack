# -*- coding: utf-8 -*-
"""Lecteur et extracteur de chapitres EPUB & PDF en Python 100 % standard (`zipfile`, `xml`, `zlib`).

- Lit les fichiers `.epub` officiels (EPUB 2 / EPUB 3) dans l'ordre exact du `<spine>` OPF,
  extrait chaque chapitre avec son titre, son HTML nettoyé hors-ligne et son texte intégral
  pour l'indexation plein-texte SQLite FTS5 (style `wol` hors-ligne, sur vos propres fichiers).
- Valide et extrait le texte des fichiers `.pdf` téléchargés.
- Génère des fichiers `.epub` et `.pdf` de démonstration en malgache pour tester l'outil hors-ligne dès l'ouverture.
"""

from __future__ import annotations

import html
import io
import posixpath
import re
import xml.etree.ElementTree as ET
import zipfile
import zlib
from typing import Any, Dict, List, Tuple

_RE_SCRIPT_STYLE = re.compile(r"<(script|style|head|svg)\b[^>]*>.*?</\1>", re.IGNORECASE | re.DOTALL)
_RE_BODY = re.compile(r"<body\b[^>]*>(.*?)</body>", re.IGNORECASE | re.DOTALL)
_RE_HEADING = re.compile(r"<h[1-3]\b[^>]*>(.*?)</h[1-3]>", re.IGNORECASE | re.DOTALL)
_RE_TITLE = re.compile(r"<title\b[^>]*>(.*?)</title>", re.IGNORECASE | re.DOTALL)
_RE_TAG = re.compile(r"<[^>]+>")
_RE_IMG_AUDIO = re.compile(r"<(img|audio|video|source|object)\b[^>]*>", re.IGNORECASE)
_RE_MULTI_SPACE = re.compile(r"[ \t]+")
_RE_MULTI_NL = re.compile(r"\n{3,}")


def _strip_tags_to_text(fragment: str) -> str:
    s = re.sub(r"<br\s*/?>", "\n", fragment, flags=re.IGNORECASE)
    s = re.sub(r"</(p|div|h1|h2|h3|h4|li|tr|blockquote)>", "\n", s, flags=re.IGNORECASE)
    # Ajoute un espace autour des numéros de versets <sup> pour que "14Ary" devienne "14 Ary"
    s = re.sub(r"<sup\b[^>]*>(.*?)</sup>", r" \1 ", s, flags=re.IGNORECASE | re.DOTALL)
    s = _RE_TAG.sub(" ", s)
    s = html.unescape(s).replace("\xa0", " ")
    s = _RE_MULTI_SPACE.sub(" ", s)
    lines = [ln.strip() for ln in s.splitlines()]
    s = "\n".join(ln for ln in lines if ln)
    return _RE_MULTI_NL.sub("\n\n", s).strip()


def _sanitize_xhtml_body(raw_xhtml: str) -> Tuple[str, str, str]:
    """Retourne (chapter_title, clean_html, plain_text)."""
    title = ""
    m_t = _RE_TITLE.search(raw_xhtml)
    if m_t:
        title = _strip_tags_to_text(m_t.group(1))

    cleaned_doc = _RE_SCRIPT_STYLE.sub("", raw_xhtml)
    m_b = _RE_BODY.search(cleaned_doc)
    body = m_b.group(1) if m_b else cleaned_doc

    m_h = _RE_HEADING.search(body)
    if m_h:
        h_txt = _strip_tags_to_text(m_h.group(1))
        if h_txt:
            title = h_txt

    plain_text = _strip_tags_to_text(body)

    # Nettoyage HTML sécurisé et lisible hors-ligne
    safe_html = _RE_IMG_AUDIO.sub("", body)
    # Désactive les liens internes EPUB cassés tout en gardant le texte des versets en gras/couleur
    safe_html = re.sub(
        r"<a\b[^>]*>(.*?)</a>",
        r'<span class="ref-tag">\1</span>',
        safe_html,
        flags=re.IGNORECASE | re.DOTALL,
    )
    # Supprime les attributs style/onclick éventuels
    safe_html = re.sub(r'\s+on[a-z]+="[^"]*"', "", safe_html, flags=re.IGNORECASE)
    return title.strip(), safe_html.strip(), plain_text


def _local_name(tag: str) -> str:
    return tag.split("}", 1)[-1] if "}" in tag else tag


def extract_epub_chapters(epub_path_or_bytes: Any, max_chapters: int = 1500) -> List[Dict[str, Any]]:
    """Extrait dans l'ordre de lecture tous les chapitres textuels d'un fichier `.epub`."""
    chapters: List[Dict[str, Any]] = []
    try:
        zf_ctx = (
            zipfile.ZipFile(io.BytesIO(epub_path_or_bytes), "r")
            if isinstance(epub_path_or_bytes, (bytes, bytearray))
            else zipfile.ZipFile(epub_path_or_bytes, "r")
        )
    except Exception:
        return []

    with zf_ctx as zf:
        namelist = set(zf.namelist())
        opf_path = ""
        if "META-INF/container.xml" in namelist:
            try:
                c_xml = ET.fromstring(zf.read("META-INF/container.xml"))
                for elem in c_xml.iter():
                    if _local_name(elem.tag) == "rootfile" and elem.attrib.get("full-path"):
                        opf_path = elem.attrib["full-path"]
                        break
            except Exception:
                pass

        if not opf_path:
            for n in sorted(namelist):
                if n.lower().endswith(".opf"):
                    opf_path = n
                    break

        ordered_files: List[str] = []
        toc_titles: Dict[str, str] = {}

        if opf_path and opf_path in namelist:
            opf_dir = posixpath.dirname(opf_path)
            try:
                opf_root = ET.fromstring(zf.read(opf_path))
                manifest_map: Dict[str, Tuple[str, str]] = {}
                spine_ids: List[str] = []
                ncx_href = ""
                nav_href = ""

                for elem in opf_root.iter():
                    lname = _local_name(elem.tag)
                    if lname == "item":
                        iid = elem.attrib.get("id", "")
                        href = elem.attrib.get("href", "")
                        mtype = elem.attrib.get("media-type", "")
                        props = elem.attrib.get("properties", "")
                        if iid and href:
                            full_h = posixpath.normpath(posixpath.join(opf_dir, href)) if opf_dir else href
                            manifest_map[iid] = (full_h, mtype)
                            if "ncx" in mtype.lower():
                                ncx_href = full_h
                            if "nav" in props.split():
                                nav_href = full_h
                    elif lname == "itemref":
                        idref = elem.attrib.get("idref", "")
                        if idref:
                            spine_ids.append(idref)

                for sid in spine_ids:
                    if sid in manifest_map:
                        f_path, mtype = manifest_map[sid]
                        if "html" in mtype.lower() or f_path.lower().endswith((".xhtml", ".html", ".htm")):
                            if f_path in namelist:
                                ordered_files.append(f_path)

                # Lecture optionnelle des titres depuis toc.ncx
                if ncx_href and ncx_href in namelist:
                    ncx_dir = posixpath.dirname(ncx_href)
                    try:
                        ncx_root = ET.fromstring(zf.read(ncx_href))
                        for np in ncx_root.iter():
                            if _local_name(np.tag) == "navPoint":
                                lbl = ""
                                src = ""
                                for sub in np.iter():
                                    sl = _local_name(sub.tag)
                                    if sl == "text" and sub.text and not lbl:
                                        lbl = sub.text.strip()
                                    elif sl == "content" and sub.attrib.get("src") and not src:
                                        raw_s = sub.attrib["src"].split("#", 1)[0]
                                        src = posixpath.normpath(posixpath.join(ncx_dir, raw_s)) if ncx_dir else raw_s
                                if src and lbl and src not in toc_titles:
                                    toc_titles[src] = lbl
                    except Exception:
                        pass

                # Lecture optionnelle nav EPUB3
                if nav_href and nav_href in namelist and not toc_titles:
                    nav_dir = posixpath.dirname(nav_href)
                    try:
                        nav_txt = zf.read(nav_href).decode("utf-8", errors="replace")
                        for href_m, label_m in re.findall(
                            r'<a\b[^>]*href=["\']([^"\'#]+)(?:#[^"\']*)?["\'][^>]*>(.*?)</a>',
                            nav_txt,
                            flags=re.IGNORECASE | re.DOTALL,
                        ):
                            resolved = posixpath.normpath(posixpath.join(nav_dir, href_m)) if nav_dir else href_m
                            lbl = _strip_tags_to_text(label_m)
                            if resolved and lbl and resolved not in toc_titles:
                                toc_titles[resolved] = lbl
                    except Exception:
                        pass
            except Exception:
                pass

        if not ordered_files:
            ordered_files = [
                n for n in sorted(namelist)
                if n.lower().endswith((".xhtml", ".html", ".htm"))
                and "toc" not in n.lower()
                and "nav" not in n.lower()
            ]

        chap_idx = 0
        seen_paths = set()
        for fpath in ordered_files:
            if fpath in seen_paths:
                continue
            seen_paths.add(fpath)
            low_bn = posixpath.basename(fpath).lower()
            if low_bn in ("nav.xhtml", "toc.xhtml", "cover.xhtml"):
                continue
            try:
                raw_xhtml = zf.read(fpath).decode("utf-8", errors="replace")
            except Exception:
                continue

            ch_title, safe_html, plain_text = _sanitize_xhtml_body(raw_xhtml)
            # Ignore les pages vides ou purement décoratives (< 25 caractères)
            if len(plain_text.strip()) < 25:
                continue

            if not ch_title or ch_title.isdigit():
                ch_title = toc_titles.get(fpath, "") or ch_title
            if not ch_title:
                first_line = plain_text.splitlines()[0][:80] if plain_text else f"Toko {chap_idx + 1}"
                ch_title = first_line

            chap_idx += 1
            chapters.append(
                {
                    "chapter_index": chap_idx,
                    "chapter_title": ch_title[:160],
                    "html_content": safe_html,
                    "text_content": plain_text,
                }
            )
            if chap_idx >= max_chapters:
                break

    return chapters


# ------------------------------------------------------------------
# Validation PDF & extraction de texte PDF (Python standard `zlib`)
# ------------------------------------------------------------------
_RE_PDF_PAGE = re.compile(rb"/Type\s*/Page\b")
_RE_PDF_STREAM = re.compile(rb"<<(.*?)>>\s*stream\r?\n(.*?)\r?\nendstream", re.DOTALL)
_RE_PDF_BT_ET = re.compile(rb"BT\b(.*?)ET\b", re.DOTALL)
_RE_PDF_TOK = re.compile(rb"\((?:\\.|[^\\()])*\)|<[0-9A-Fa-f\s]+>|-?\d+(?:\.\d+)?")


def is_valid_pdf(data: bytes) -> bool:
    return bool(data and len(data) >= 64 and b"%PDF-" in data[:1024])


def is_valid_epub(data: bytes) -> bool:
    return bool(data and len(data) >= 64 and data[:4] == b"PK\x03\x04")


def is_valid_jwpub(data: bytes) -> bool:
    return bool(data and len(data) >= 64 and data[:4] == b"PK\x03\x04")


def extract_pdf_text_light(data: bytes, max_chars: int = 50000) -> Tuple[str, int]:
    if not is_valid_pdf(data):
        return "", 0
    pages = max(1, len(_RE_PDF_PAGE.findall(data)))
    parts: List[str] = []
    total = 0

    for dict_b, stream_b in _RE_PDF_STREAM.findall(data):
        if b"/FlateDecode" in dict_b:
            try:
                content = zlib.decompress(stream_b)
            except Exception:
                try:
                    content = zlib.decompress(stream_b.strip(b"\r\n"))
                except Exception:
                    continue
        else:
            continue
        if b"BT" not in content:
            continue
        for bt in _RE_PDF_BT_ET.findall(content):
            for m in re.finditer(
                rb"\[(?P<arr>.*?)\]\s*TJ|(?P<lit>\((?:\\.|[^\\()])*\))\s*(?:Tj|')",
                bt,
                re.DOTALL,
            ):
                arr = m.group("arr")
                lit = m.group("lit")
                if arr is not None:
                    seg = []
                    for tok in _RE_PDF_TOK.findall(arr):
                        if tok.startswith(b"("):
                            seg.append(tok[1:-1].replace(b"\\(", b"(").replace(b"\\)", b")").decode("cp1252", errors="ignore"))
                    if seg:
                        s = "".join(seg)
                        parts.append(s)
                        total += len(s)
                elif lit is not None:
                    s = lit[1:-1].replace(b"\\(", b"(").replace(b"\\)", b")").decode("cp1252", errors="ignore")
                    parts.append(s)
                    total += len(s)
            if total >= max_chars:
                break
        if total >= max_chars:
            break

    txt = re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f]+", " ", " ".join(parts))
    txt = re.sub(r"\s+", " ", txt).strip()
    return txt[:max_chars], pages


def build_demo_epub_bytes(book_title: str, chapters: List[Tuple[str, List[str]]]) -> bytes:
    """Construit un vrai fichier `.epub` valide en mémoire pour la démonstration hors-ligne initiale."""
    buf = io.BytesIO()
    with zipfile.ZipFile(buf, "w") as zf:
        zf.writestr("mimetype", "application/epub+zip", compress_type=zipfile.ZIP_STORED)
        zf.writestr(
            "META-INF/container.xml",
            '<?xml version="1.0" encoding="UTF-8"?>'
            '<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">'
            '<rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles>'
            "</container>",
        )
        manifest_items = []
        spine_items = []
        for idx, (ch_title, paras) in enumerate(chapters, start=1):
            fname = f"chap_{idx:02d}.xhtml"
            manifest_items.append(f'<item id="c{idx}" href="{fname}" media-type="application/xhtml+xml"/>')
            spine_items.append(f'<itemref idref="c{idx}"/>')
            p_html = "\n".join(f"<p>{html.escape(p)}</p>" for p in paras)
            xhtml = (
                '<?xml version="1.0" encoding="UTF-8"?>\n'
                '<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="mg">\n'
                f"<head><title>{html.escape(ch_title)}</title></head>\n"
                f"<body><h2>{html.escape(ch_title)}</h2>\n{p_html}\n</body></html>"
            )
            zf.writestr(f"OEBPS/{fname}", xhtml.encode("utf-8"))

        opf = (
            '<?xml version="1.0" encoding="UTF-8"?>\n'
            '<package xmlns="http://www.idpf.org/2007/opf" version="2.0" unique-identifier="uid">\n'
            f"<metadata><dc:title xmlns:dc=\"http://purl.org/dc/elements/1.1/\">{html.escape(book_title)}</dc:title></metadata>\n"
            f"<manifest>{''.join(manifest_items)}</manifest>\n"
            f"<spine>{''.join(spine_items)}</spine>\n"
            "</package>"
        )
        zf.writestr("OEBPS/content.opf", opf.encode("utf-8"))
    return buf.getvalue()
