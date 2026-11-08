# -*- coding: utf-8 -*-
"""sento_tanana.py — ny **sisin'ny boky natao an-tanana** : docx → `refs/14_MANUELA-T6-TANANA.txt`.

Ataon-drehetra ny tabilao (tsy « TAB 13r » fotsiny toy ny `dump_docx.py`), satria ao amin'ny
sela no onenan'ny boky ny dingana 6 sy ny valin'ny « Ampifandraiso » — ka tsy ho hita
amin'ny mpijinja teny-teny (`fikajy_citation.py`) ny teny anaty tabilao raha tsy eto.

    git show "origin/main:Nos manuels/Manuel de Malagasy - Classe de T6 (1).docx" > /tmp/t6_main.docx
    ./run.sh src/sento_tanana.py /tmp/t6_main.docx refs/14_MANUELA-T6-TANANA.txt
"""
import io
import os
import re
import sys
import zipfile

DOS = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def paragrafo(frag):
    out = []
    for m in re.finditer(r"<w:p[ >].*?</w:p>", frag, re.S):
        t = re.sub(r"\s+", " ", "".join(re.findall(r"<w:t[^>]*>([^<]*)</w:t>", m.group(0)))).strip()
        if t:
            out.append(t)
    return out


def sento(chemin):
    x = zipfile.ZipFile(chemin).read("word/document.xml").decode("utf8")
    lignes = []
    n_tab = 0
    for b in re.split(r"(<w:tbl>.*?</w:tbl>)", x, flags=re.S):
        if b.startswith("<w:tbl>"):
            n_tab += 1
            lignes.append("[TABILAO %d]" % n_tab)
            for r in re.findall(r"<w:tr[ >].*?</w:tr>", b, re.S):
                cells = [" ⏎ ".join(paragrafo(c)) for c in
                         re.findall(r"<w:tc[ >].*?</w:tc>", r, re.S)]
                if any(c.strip() for c in cells):
                    lignes.append("  | " + " | ".join(cells))
        else:
            for t in paragrafo(b):
                lignes.append(t)
    return lignes, n_tab


def main():
    src = sys.argv[1] if len(sys.argv) > 1 else "/tmp/t6_main.docx"
    dst = sys.argv[2] if len(sys.argv) > 2 else os.path.join(DOS, "refs",
                                                                 "14_MANUELA-T6-TANANA.txt")
    if not os.path.exists(src):
        print("TSY HITAFAY :", src, "— alao amin'ny `git show origin/main:…`")
        return 1
    lignes, n_tab = sento(src)
    io.open(dst, "w", encoding="utf-8").write("\n".join(lignes) + "\n")
    print("sento :", dst, os.path.getsize(dst), "o ·", len(lignes), "tarika ·", n_tab, "tabilao")
    return 0


if __name__ == "__main__":
    sys.exit(main())
