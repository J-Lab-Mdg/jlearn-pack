#!/usr/bin/env python3
"""Extraction de texte d'un PDF à polices CID (Identity-H) — stdlib uniquement.

Différence avec pdf_cid.py : les flux NON compressés sont conservés (les CMap
ToUnicode du programme d'étude ne sont pas en FlateDecode), et le décodage
tient compte des codes 2 octets.

Usage :
    python3 tools/pdf_cid2.py fichier.pdf [première_page] [dernière_page] > sortie.txt
"""
import re
import sys
import zlib


def streams(data):
    """Tous les flux : décompressés si FlateDecode, sinon bruts."""
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
            out.append(raw)          # flux non compressé (CMap, parfois contenu)
    return out


def parse_cmaps(stream_list):
    """[{code: car}] — une cmap par police (les encodages sont incompatibles)."""
    maps = []
    for s in stream_list:
        if b"beginbfchar" not in s and b"beginbfrange" not in s:
            continue
        if b"Tj" in s or b"TJ" in s:
            continue                 # ce n'est pas une CMap
        cmap = {}
        txt = s.decode("latin-1", "replace")
        for blk in re.finditer(r"beginbfchar(.*?)endbfchar", txt, re.S):
            for src, dst in re.findall(r"<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>", blk.group(1)):
                try:
                    cmap[int(src, 16)] = bytes.fromhex(dst).decode("utf-16-be", "replace")
                except ValueError:
                    pass
        for blk in re.finditer(r"beginbfrange(.*?)endbfrange", txt, re.S):
            for lo, hi, dst in re.findall(
                    r"<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>", blk.group(1)):
                try:
                    n = int(dst, 16)
                    for c in range(int(lo, 16), int(hi, 16) + 1):
                        cmap[c] = chr(n)
                        n += 1
                except ValueError:
                    pass
            for lo, hi, arr in re.findall(
                    r"<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>\s*\[(.*?)\]", blk.group(1), re.S):
                for i, d in enumerate(re.findall(r"<([0-9A-Fa-f]+)>", arr)):
                    try:
                        cmap[int(lo, 16) + i] = bytes.fromhex(d).decode("utf-16-be", "replace")
                    except ValueError:
                        pass
        if cmap:
            maps.append(cmap)
    return maps


def _dec(h, cmap, w):
    out = []
    for i in range(0, len(h) - w + 1, w):
        try:
            code = int(h[i:i + w], 16)
        except ValueError:
            continue
        out.append(cmap.get(code, ""))
    return "".join(out)


def decode_hex(h, cmap):
    """Essaie les codes 1 octet et 2 octets, garde le meilleur."""
    h = re.sub(r"\s+", "", h)
    if not h:
        return ""
    a = _dec(h, cmap, 2)
    b = _dec(h, cmap, 4) if len(h) % 4 == 0 else ""
    return b if score(b) > score(a) else a


GOOD = re.compile(r"[A-Za-zÀ-ÿ0-9 ,.;:()'\-]")


def score(t):
    return sum(1 for c in t if GOOD.match(c)) / max(len(t), 1)


def render_multi(s, cmaps):
    """Décode un flux en choisissant, pour chaque fragment, la meilleure cmap."""
    s0 = re.sub(rb"(?<![A-Za-z])(Td|TD|T\*|ET)(?![A-Za-z])", b"\n", s)
    chunks, pos, n = [], 0, len(s0)
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
            h = s0[lt + 1:gt].decode("latin-1", "replace")
            meilleur, meilleur_score = "", -1.0
            for cmap in cmaps:
                t = decode_hex(h, cmap)
                sc = score(t)
                if sc > meilleur_score:
                    meilleur, meilleur_score = t, sc
            chunks.append(meilleur)
            pos = k + 2
        else:
            pos = gt + 1
    return "".join(chunks)


def render(s, cmap):
    s0 = re.sub(rb"(?<![A-Za-z])(Td|TD|T\*|ET)(?![A-Za-z])", b"\n", s)
    chunks, pos, n = [], 0, len(s0)
    while pos < n:
        lt = s0.find(b"<", pos)
        lp = s0.find(b"(", pos)
        if lt < 0 and lp < 0:
            break
        if lp >= 0 and (lt < 0 or lp < lt):                     # chaîne littérale
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
    cmaps = parse_cmaps(st)
    if not cmaps:
        cmaps = [{}]
    pages = []
    for s in st:
        if b"BT" not in s or (b"Tj" not in s and b"TJ" not in s):
            continue
        if len(s) > 400_000:
            continue
        best = render_multi(s, cmaps)
        if best.strip():
            pages.append(best)
    return pages


if __name__ == "__main__":
    data = open(sys.argv[1], "rb").read()
    pages = page_texts(data)
    first = int(sys.argv[2]) if len(sys.argv) > 2 else 1
    last = int(sys.argv[3]) if len(sys.argv) > 3 else len(pages)
    for i, t in enumerate(pages[first - 1:last], start=first):
        print(f"\n===== PAGE/FLUX {i} =====\n{t}")
