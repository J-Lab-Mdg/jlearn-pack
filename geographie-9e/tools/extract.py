#!/usr/bin/env python3
"""Extracteurs minimalistes (stdlib uniquement — pas de réseau, pas de pip).

Usage :
    python3 tools/extract.py docx  chemin/fichier.docx
    python3 tools/extract.py pdf   chemin/fichier.pdf [page_debut page_fin]
    python3 tools/extract.py doc   chemin/fichier.doc      (Word 97 binaire, best effort)
"""
import re
import sys
import zipfile
import zlib


# --------------------------------------------------------------------------- #
# DOCX : zip + word/document.xml
# --------------------------------------------------------------------------- #
def docx_text(path):
    with zipfile.ZipFile(path) as z:
        names = [n for n in z.namelist() if n.endswith(".xml")]
        target = "word/document.xml" if "word/document.xml" in names else names[0]
        xml = z.read(target).decode("utf-8", "replace")

    # paragraphes
    xml = re.sub(r"</w:p>", "\n", xml)
    # tabulations et sauts
    xml = re.sub(r"<w:tab\b[^>]*/>", "\t", xml)
    xml = re.sub(r"<w:br\b[^>]*/>", "\n", xml)
    # cellules de tableau -> séparateur
    xml = re.sub(r"</w:tc>", " | ", xml)
    xml = re.sub(r"</w:tr>", "\n", xml)
    # texte restant
    xml = re.sub(r"<w:t\b[^>]*>(.*?)</w:t>", r"\1", xml, flags=re.S)
    xml = re.sub(r"<[^>]+>", "", xml)
    xml = (xml.replace("&amp;", "&").replace("&lt;", "<")
              .replace("&gt;", ">").replace("&quot;", '"').replace("&apos;", "'"))
    # nettoyage
    lines = [re.sub(r"[ \t]+", " ", ln).strip() for ln in xml.split("\n")]
    return "\n".join(ln for ln in lines if ln)


# --------------------------------------------------------------------------- #
# PDF : inflate des streams + opérateurs Tj / TJ
# --------------------------------------------------------------------------- #
def _inflate_streams(data):
    streams = []
    for m in re.finditer(rb"stream\r?\n", data):
        start = m.end()
        end = data.find(b"endstream", start)
        if end < 0:
            continue
        raw = data[start:end]
        try:
            streams.append(zlib.decompress(raw))
        except Exception:
            streams.append(raw)  # stream non compressé
    return streams


def _decode_literal(raw):
    out = bytearray()
    i = 0
    n = len(raw)
    while i < n:
        c = raw[i]
        if c == 0x5C and i + 1 < n:  # backslash
            nxt = raw[i + 1]
            simple = {0x6E: 10, 0x72: 13, 0x74: 9, 0x62: 8, 0x66: 12,
                      0x28: 40, 0x29: 41, 0x5C: 92}
            if nxt in simple:
                out.append(simple[nxt])
                i += 2
                continue
            if 0x30 <= nxt <= 0x37:  # octal
                j = i + 1
                oct_digits = b""
                while j < n and len(oct_digits) < 3 and 0x30 <= raw[j] <= 0x37:
                    oct_digits += bytes([raw[j]])
                    j += 1
                out.append(int(oct_digits, 8) & 0xFF)
                i = j
                continue
            out.append(nxt)
            i += 2
            continue
        out.append(c)
        i += 1
    return bytes(out)


def _text_from_content(content):
    """Parcours linéaire des littéraux suivis de Tj / TJ (O(n), sans backtracking)."""
    chunks = []
    n = len(content)
    pos = 0
    while pos < n:
        i = content.find(b"(", pos)
        if i < 0:
            break
        j = i + 1
        while j < n:
            c = content[j]
            if c == 0x5C:          # backslash -> caractère suivant échappé
                j += 2
                continue
            if c == 0x29:          # ')'
                break
            j += 1
        if j >= n:
            break
        k = j + 1
        while k < n and content[k] in b" \r\n\t":
            k += 1
        nxt = content[k:k + 2]
        if nxt in (b"Tj", b"TJ", b"Tc", b"Td", b"TD", b"T*"):
            chunks.append(_decode_literal(content[i + 1:j]))
            if nxt in (b"Td", b"TD", b"T*"):
                chunks.append(b"\n")
            pos = k + 2
        else:
            pos = j + 1
    if not chunks:
        return None
    text = b"".join(chunks)
    for enc in ("utf-8", "cp1252", "latin-1"):
        try:
            return text.decode(enc)
        except UnicodeDecodeError:
            continue
    return text.decode("latin-1", "replace")


def pdf_text(path, first=1, last=None):
    data = open(path, "rb").read()
    streams = _inflate_streams(data)
    pages = []
    for content in streams:
        if b"Tj" not in content and b"TJ" not in content:
            continue
        t = _text_from_content(content)
        if t and t.strip():
            pages.append(t)
    if last is None:
        last = len(pages)
    sel = pages[first - 1:last]
    out = []
    for i, t in enumerate(sel, start=first):
        out.append(f"\n=====PAGE {i}=====\n{t}")
    return "\n".join(out)


# --------------------------------------------------------------------------- #
# DOC (Word 97 binaire) : extraction best effort des chaînes lisibles
# --------------------------------------------------------------------------- #
def doc_text(path):
    data = open(path, "rb").read()
    texts = []
    # Word 97 stocke souvent le texte en UTF-16LE dans le flux WordDocument,
    # parfois en CP1252. On tente les deux et on garde le plus riche.
    try:
        u16 = data.decode("utf-16-le", "replace")
        runs = re.findall(r"[\u0020-\u007E\u00C0-\u024F\u2019\u2013\u2026\n\r\t]{6,}", u16)
        texts.append("\n".join(runs))
    except Exception:
        pass
    try:
        s8 = data.decode("cp1252", "replace")
        runs = re.findall(r"[\u0020-\u007E\u00C0-\u024F\u2019\u2013\u2026]{6,}", s8)
        texts.append("\n".join(runs))
    except Exception:
        pass
    best = max(texts, key=len) if texts else ""
    # dédoublonnage des lignes consécutives identiques
    lines, prev = [], None
    for ln in best.split("\n"):
        ln = ln.strip()
        if ln and ln != prev:
            lines.append(ln)
        prev = ln
    return "\n".join(lines)


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)
    kind, path = sys.argv[1], sys.argv[2]
    if kind == "docx":
        print(docx_text(path))
    elif kind == "pdf":
        first = int(sys.argv[3]) if len(sys.argv) > 3 else 1
        last = int(sys.argv[4]) if len(sys.argv) > 4 else None
        print(pdf_text(path, first, last))
    elif kind == "doc":
        print(doc_text(path))
    else:
        print(__doc__)
        sys.exit(1)
