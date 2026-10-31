# -*- coding: utf-8 -*-
"""Validation PDF et extraction légère de texte PDF en Python 100 % standard (`zlib`).

Aucune dépendance externe requise :
- Vérifie l'en-tête `%PDF-` pour ne jamais enregistrer une page HTML par erreur.
- Compte le nombre de pages (`/Type /Page`).
- Décompresse les flux `/FlateDecode`, lit les tables `/ToUnicode` (`beginbfchar` / `beginbfrange`)
  et extrait le texte des opérateurs PDF (`Tj`, `TJ`, `'`, `"`) pour l'indexation plein-texte SQLite FTS5.
"""

from __future__ import annotations

import re
import zlib
from typing import Dict, List, Tuple


_RE_PAGE = re.compile(rb"/Type\s*/Page\b")
_RE_STREAM = re.compile(rb"<<(.*?)>>\s*stream\r?\n(.*?)\r?\nendstream", re.DOTALL)
_RE_BFCHAR = re.compile(rb"beginbfchar(.*?)endbfchar", re.DOTALL)
_RE_BFRANGE = re.compile(rb"beginbfrange(.*?)endbfrange", re.DOTALL)
_RE_HEX_PAIR = re.compile(rb"<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>")
_RE_RANGE_LINE = re.compile(
    rb"<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>\s*(?:<([0-9A-Fa-f]+)>|\[(.*?)\])",
    re.DOTALL,
)
_RE_BT_ET = re.compile(rb"BT\b(.*?)ET\b", re.DOTALL)
_RE_TJ_ARRAY = re.compile(rb"\[(.*?)\]\s*TJ", re.DOTALL)
_RE_TJ_SINGLE = re.compile(rb"(\((?:\\.|[^\\()])*\)|<[0-9A-Fa-f\s]+>)\s*(?:Tj|')", re.DOTALL)
_RE_TOKEN_IN_ARRAY = re.compile(rb"\((?:\\.|[^\\()])*\)|<[0-9A-Fa-f\s]+>|-?\d+(?:\.\d+)?")


def is_valid_pdf_bytes(data: bytes) -> bool:
    if not data or len(data) < 64:
        return False
    head = data[:1024]
    return b"%PDF-" in head


def count_pdf_pages(data: bytes) -> int:
    if not is_valid_pdf_bytes(data):
        return 0
    n = len(_RE_PAGE.findall(data))
    return max(n, 1)


def _decode_utf16be_hex(hex_bytes: bytes) -> str:
    h = re.sub(rb"\s+", b"", hex_bytes)
    if not h:
        return ""
    if len(h) % 2 == 1:
        h += b"0"
    raw = bytes.fromhex(h.decode("ascii"))
    if len(raw) >= 2 and len(raw) % 2 == 0:
        try:
            return raw.decode("utf-16-be", errors="ignore")
        except Exception:
            pass
    return raw.decode("latin-1", errors="ignore")


def _parse_tounicode_cmap(stream_bytes: bytes, cmap: Dict[bytes, str]) -> None:
    for block in _RE_BFCHAR.findall(stream_bytes):
        for src_h, dst_h in _RE_HEX_PAIR.findall(block):
            src_b = bytes.fromhex(src_h.decode("ascii").zfill((len(src_h) + 1) // 2 * 2))
            val = _decode_utf16be_hex(dst_h)
            if val:
                cmap[src_b] = val

    for block in _RE_BFRANGE.findall(stream_bytes):
        for m in _RE_RANGE_LINE.finditer(block):
            start_h, end_h, dst_h, arr_body = m.groups()
            width = (len(start_h) + 1) // 2
            start_i = int(start_h, 16)
            end_i = int(end_h, 16)
            if end_i - start_i > 2048 or end_i < start_i:
                continue
            if dst_h is not None:
                base_val = _decode_utf16be_hex(dst_h)
                if len(base_val) == 1:
                    base_cp = ord(base_val)
                    for offset in range(end_i - start_i + 1):
                        key = (start_i + offset).to_bytes(width, "big")
                        cmap[key] = chr(base_cp + offset)
            elif arr_body is not None:
                targets = re.findall(rb"<([0-9A-Fa-f]+)>", arr_body)
                for offset, th in enumerate(targets[: end_i - start_i + 1]):
                    key = (start_i + offset).to_bytes(width, "big")
                    val = _decode_utf16be_hex(th)
                    if val:
                        cmap[key] = val


def _decode_pdf_literal_string(lit: bytes, cmap: Dict[bytes, str]) -> str:
    # Retire les parenthèses extérieures
    inner = lit[1:-1]
    out_bytes = bytearray()
    i = 0
    n = len(inner)
    while i < n:
        b = inner[i]
        if b == 0x5C:  # backslash '\'
            i += 1
            if i >= n:
                break
            esc = inner[i]
            if esc == ord("n"):
                out_bytes.append(10)
            elif esc == ord("r"):
                out_bytes.append(13)
            elif esc == ord("t"):
                out_bytes.append(9)
            elif esc in (ord("b"), ord("f")):
                out_bytes.append(32)
            elif esc in (ord("("), ord(")"), ord("\\")):
                out_bytes.append(esc)
            elif 48 <= esc <= 55:  # octal \ddd
                oct_digits = bytes([esc])
                for _ in range(2):
                    if i + 1 < n and 48 <= inner[i + 1] <= 55:
                        i += 1
                        oct_digits += bytes([inner[i]])
                    else:
                        break
                out_bytes.append(int(oct_digits, 8) & 0xFF)
            elif esc in (10, 13):
                if esc == 13 and i + 1 < n and inner[i + 1] == 10:
                    i += 1
            else:
                out_bytes.append(esc)
        else:
            out_bytes.append(b)
        i += 1

    raw = bytes(out_bytes)
    if raw.startswith(b"\xfe\xff"):
        return raw[2:].decode("utf-16-be", errors="ignore")
    # Essai CMap 1 octet seulement si pertinent, sinon CP1252 / Latin-1 standard PDF
    try:
        return raw.decode("cp1252")
    except Exception:
        return raw.decode("latin-1", errors="ignore")


def _decode_pdf_hex_string(hex_tok: bytes, cmap: Dict[bytes, str]) -> str:
    h = re.sub(rb"\s+", b"", hex_tok[1:-1])
    if not h:
        return ""
    if len(h) % 2 == 1:
        h += b"0"
    raw = bytes.fromhex(h.decode("ascii"))
    if raw.startswith(b"\xfe\xff"):
        return raw[2:].decode("utf-16-be", errors="ignore")

    if cmap:
        # Détecte si CMap 2 octets ou 1 octet
        has_2byte = any(len(k) == 2 for k in cmap)
        if has_2byte and len(raw) % 2 == 0:
            chars: List[str] = []
            mapped = 0
            for idx in range(0, len(raw), 2):
                chunk = raw[idx : idx + 2]
                if chunk in cmap:
                    chars.append(cmap[chunk])
                    mapped += 1
                elif chunk[0] == 0 and bytes([chunk[1]]) in cmap:
                    chars.append(cmap[bytes([chunk[1]])])
                    mapped += 1
                elif 32 <= chunk[1] <= 126 and chunk[0] == 0:
                    chars.append(chr(chunk[1]))
            if mapped > 0:
                return "".join(chars)

        chars_1b: List[str] = []
        mapped_1b = 0
        for b in raw:
            kb = bytes([b])
            if kb in cmap:
                chars_1b.append(cmap[kb])
                mapped_1b += 1
            elif 32 <= b <= 126:
                chars_1b.append(chr(b))
        if mapped_1b > 0:
            return "".join(chars_1b)

    try:
        return raw.decode("cp1252")
    except Exception:
        return raw.decode("latin-1", errors="ignore")


def extract_pdf_text_and_pages(data: bytes, max_chars: int = 40000) -> Tuple[str, int]:
    """Extrait le texte indexable et le nombre de pages d'un PDF binaire."""
    if not is_valid_pdf_bytes(data):
        return "", 0

    pages = count_pdf_pages(data)
    decompressed_streams: List[bytes] = []
    cmap: Dict[bytes, str] = {}

    for dict_bytes, raw_stream in _RE_STREAM.findall(data):
        stream_content = raw_stream
        if b"/FlateDecode" in dict_bytes:
            try:
                stream_content = zlib.decompress(raw_stream)
            except Exception:
                try:
                    stream_content = zlib.decompress(raw_stream.strip(b"\r\n"))
                except Exception:
                    continue
        elif b"/DCTDecode" in dict_bytes or b"/JPXDecode" in dict_bytes or b"/FontFile" in dict_bytes:
            continue

        if b"beginbfchar" in stream_content or b"beginbfrange" in stream_content:
            _parse_tounicode_cmap(stream_content, cmap)
        elif b"BT" in stream_content and b"ET" in stream_content:
            decompressed_streams.append(stream_content)

    chunks: List[str] = []
    total_len = 0

    for stream in decompressed_streams:
        for bt_block in _RE_BT_ET.findall(stream):
            # Parcours séquentiel des opérateurs dans l'ordre d'apparition
            pos = 0
            # On extrait à la fois [ ... ] TJ et (...) Tj / <...> Tj dans l'ordre du flux
            combined = re.finditer(
                rb"\[(?P<arr>.*?)\]\s*TJ|(?P<single>\((?:\\.|[^\\()])*\)|<[0-9A-Fa-f\s]+>)\s*(?:Tj|')",
                bt_block,
                re.DOTALL,
            )
            line_parts: List[str] = []
            for m in combined:
                arr = m.group("arr")
                single = m.group("single")
                if arr is not None:
                    piece: List[str] = []
                    for tok in _RE_TOKEN_IN_ARRAY.findall(arr):
                        if tok.startswith(b"("):
                            piece.append(_decode_pdf_literal_string(tok, cmap))
                        elif tok.startswith(b"<"):
                            piece.append(_decode_pdf_hex_string(tok, cmap))
                        else:
                            try:
                                kern = float(tok)
                                if kern < -180:
                                    piece.append(" ")
                            except Exception:
                                pass
                    s = "".join(piece)
                    if s:
                        line_parts.append(s)
                elif single is not None:
                    if single.startswith(b"("):
                        s = _decode_pdf_literal_string(single, cmap)
                    else:
                        s = _decode_pdf_hex_string(single, cmap)
                    if s:
                        line_parts.append(s)
            if line_parts:
                joined = " ".join(line_parts)
                chunks.append(joined)
                total_len += len(joined)
                if total_len >= max_chars:
                    break
        if total_len >= max_chars:
            break

    text = "\n".join(chunks)
    # Nettoyage des caractères de contrôle et espaces multiples
    text = re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f]+", " ", text)
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text).strip()
    return text[:max_chars], pages


def build_minimal_pdf(title: str, subtitle: str, paragraphs: List[str]) -> bytes:
    """Génère un vrai fichier PDF léger et imprimable (pour les fiches de démonstration hors-ligne)."""

    def _pdf_escape(s: str) -> bytes:
        # Convertit vers CP1252 (WinAnsiEncoding supporté nativement par Helvetica dans PDF 1.4)
        replacements = {
            "\u2019": "'",
            "\u2018": "'",
            "\u2013": "-",
            "\u2014": "-",
            "\u2026": "...",
            "\u2192": "->",
            "\u2776": "1.",
            "\u2777": "2.",
            "\u2778": "3.",
            "\u2779": "4.",
            "\u0153": "oe",
            "\u0152": "OE",
        }
        for k, v in replacements.items():
            s = s.replace(k, v)
        b = s.encode("cp1252", errors="replace")
        b = b.replace(b"\\", b"\\\\").replace(b"(", b"\\(").replace(b")", b"\\)")
        return b

    def _wrap_line(text: str, width: int = 82) -> List[str]:
        words = text.split()
        if not words:
            return [""]
        lines: List[str] = []
        cur = words[0]
        for w in words[1:]:
            if len(cur) + 1 + len(w) <= width:
                cur += " " + w
            else:
                lines.append(cur)
                cur = w
        lines.append(cur)
        return lines

    ops: List[bytes] = []
    # Bandeau supérieur bleu éducatif
    ops.append(b"0.11 0.35 0.68 rg 40 770 515 42 re f")
    ops.append(b"BT /F2 14 Tf 1 1 1 rg 52 786 Td (" + _pdf_escape(title[:70]) + b") Tj ET")
    ops.append(b"BT /F1 10 Tf 0.25 0.32 0.42 rg 42 752 Td (" + _pdf_escape(subtitle[:90]) + b") Tj ET")
    ops.append(b"0.82 0.86 0.92 RG 1 w 40 744 m 555 744 l S")

    y = 720
    for para in paragraphs:
        is_heading = para.startswith("## ")
        clean_p = para[3:].strip() if is_heading else para.strip()
        wrapped = _wrap_line(clean_p, 74 if is_heading else 84)
        for line in wrapped:
            if y < 65:
                break
            if is_heading:
                ops.append(
                    f"BT /F2 12 Tf 0.10 0.28 0.55 rg 42 {y} Td (".encode("ascii")
                    + _pdf_escape(line)
                    + b") Tj ET"
                )
                y -= 18
            else:
                ops.append(
                    f"BT /F1 10.5 Tf 0.12 0.15 0.20 rg 42 {y} Td (".encode("ascii")
                    + _pdf_escape(line)
                    + b") Tj ET"
                )
                y -= 15
        y -= 6
        if y < 65:
            break

    ops.append(b"BT /F1 8.5 Tf 0.45 0.50 0.56 rg 42 36 Td (Pass-Education Offline - Usage personnel hors-ligne) Tj ET")

    stream_raw = b"\n".join(ops)
    stream_comp = zlib.compress(stream_raw)

    objects: List[bytes] = [
        b"1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n",
        b"2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n",
        (
            b"3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] "
            b"/Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>\nendobj\n"
        ),
        b"4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>\nendobj\n",
        b"5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>\nendobj\n",
        (
            f"6 0 obj\n<< /Length {len(stream_comp)} /Filter /FlateDecode >>\nstream\n".encode("ascii")
            + stream_comp
            + b"\nendstream\nendobj\n"
        ),
    ]

    buf = bytearray(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
    offsets: List[int] = [0]
    for obj in objects:
        offsets.append(len(buf))
        buf.extend(obj)

    xref_pos = len(buf)
    buf.extend(f"xref\n0 {len(offsets)}\n".encode("ascii"))
    buf.extend(b"0000000000 65535 f \n")
    for off in offsets[1:]:
        buf.extend(f"{off:010d} 00000 n \n".encode("ascii"))

    buf.extend(
        f"trailer\n<< /Size {len(offsets)} /Root 1 0 R >>\nstartxref\n{xref_pos}\n%%EOF\n".encode("ascii")
    )
    return bytes(buf)
