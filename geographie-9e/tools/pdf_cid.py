#!/usr/bin/env python3
"""Extraction de texte d'un PDF à polices CID (chaînes hexadécimales + ToUnicode CMap).

stdlib uniquement. Usage :
    python3 tools/pdf_cid.py fichier.pdf [motif]      # motif = filtre des pages (regex)
"""
import re
import sys
import zlib


def streams(data):
    out = []
    for m in re.finditer(rb"stream\r?\n", data):
        s = m.end()
        e = data.find(b"endstream", s)
        if e < 0:
            continue
        raw = data[s:e]
        try:
            out.append(zlib.decompress(raw))
        except Exception:
            out.append(b"")
    return out


def parse_cmaps(stream_list, all_maps=False):
    """Retourne {code:int -> str} à partir des ToUnicode CMap trouvées.

    Si all_maps=True, retourne la LISTE des cmap (une par police) au lieu d'une
    cmap fusionnée — les polices ont des encodages incompatibles.
    """
    maps = []
    cmap = {}
    for s in stream_list:
        if b"beginbfchar" not in s and b"beginbfrange" not in s:
            continue
        txt = s.decode("latin-1", "replace")
        # bfchar
        for blk in re.finditer(r"beginbfchar(.*?)endbfchar", txt, re.S):
            for src, dst in re.findall(r"<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>", blk.group(1)):
                try:
                    cmap[int(src, 16)] = bytes.fromhex(dst).decode("utf-16-be", "replace")
                except ValueError:
                    pass
        # bfrange
        for blk in re.finditer(r"beginbfrange(.*?)endbfrange", txt, re.S):
            body = blk.group(1)
            # forme simple : <lo> <hi> <dst>
            for lo, hi, dst in re.findall(r"<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>",
                                          body):
                try:
                    n = int(dst, 16)
                    for c in range(int(lo, 16), int(hi, 16) + 1):
                        cmap[c] = chr(n)
                        n += 1
                except ValueError:
                    pass
            # forme tableau : <lo> <hi> [ <d1> <d2> ... ]
            for lo, hi, arr in re.findall(r"<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>\s*\[(.*?)\]", body, re.S):
                dsts = re.findall(r"<([0-9A-Fa-f]+)>", arr)
                base = int(lo, 16)
                for i, d in enumerate(dsts):
                    try:
                        cmap[base + i] = bytes.fromhex(d).decode("utf-16-be", "replace")
                    except ValueError:
                        pass
        maps.append(dict(cmap))
    return maps if all_maps else cmap


def decode_hex(h, cmap, width=4):
    h = re.sub(r"\s+", "", h)
    out = []
    w = width if len(h) % width == 0 else 2
    for i in range(0, len(h) - w + 1, w):
        code = int(h[i:i + w], 16)
        out.append(cmap.get(code, chr(code) if code >= 32 else ""))
    return "".join(out)


GOOD = re.compile(r"[A-Za-zÀ-ÿ0-9 ,.;:()\'-]")


def _score(t):
    if not t:
        return 0.0
    return sum(1 for c in t if GOOD.match(c)) / len(t)


def _render(s, cmap):
    """Décode un flux de contenu avec une cmap donnée."""
    s0 = re.sub(rb"(?<![A-Za-z])(Td|TD|T\*|ET)(?![A-Za-z])", b"\n", s)
    chunks = []
    pos, n = 0, len(s0)
    while pos < n:
        lt = s0.find(b"<", pos)
        lp = s0.find(b"(", pos)
        if lt < 0 and lp < 0:
            break
        if lp >= 0 and (lt < 0 or lp < lt):
            j = lp + 1
            while j < n:
                if s0[j] == 0x5C:
                    j += 2
                    continue
                if s0[j] == 0x29:
                    break
                j += 1
            k = j + 1
            while k < n and s0[k] in b" \r\n\t":
                k += 1
            if s0[k:k + 2] in (b"Tj", b"TJ"):
                chunks.append(s0[lp + 1:j].decode("latin-1", "replace"))
                pos = k + 2
            else:
                pos = j + 1
            continue
        gt = s0.find(b">", lt)
        if gt < 0:
            break
        k = gt + 1
        while k < n and s0[k] in b" \r\n\t]":
            k += 1
        if s0[k:k + 2] in (b"Tj", b"TJ"):
            chunks.append(decode_hex(s0[lt + 1:gt].decode("latin-1", "replace"), cmap))
            pos = k + 2
        else:
            pos = gt + 1
    return "".join(chunks)


def page_texts(data):
    st = streams(data)
    cmaps = parse_cmaps(st, all_maps=True) or [{}]
    pages = []
    for s in st:
        if b"BT" not in s or (b"Tj" not in s and b"TJ" not in s):
            continue
        if len(s) > 400_000:
            continue
        best, best_score = "", -1.0
        for cmap in cmaps:
            t = _render(s, cmap)
            sc = _score(t)
            if sc > best_score:
                best, best_score = t, sc
        if best.strip():
            pages.append(best)
    return pages


if __name__ == "__main__":
    data = open(sys.argv[1], "rb").read()
    pages = page_texts(data)
    motif = sys.argv[2] if len(sys.argv) > 2 else None
    for i, t in enumerate(pages, start=1):
        if motif and not re.search(motif, t, re.I):
            continue
        print(f"\n===== FLUX {i} =====\n{t}")
