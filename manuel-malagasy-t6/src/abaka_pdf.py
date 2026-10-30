# -*- coding: utf-8 -*-
"""abaka_pdf.py — PDF -> lahatsoratra (vy), ho an'ny refam-bokatra taranja.

    ./run.sh src/abaka_pdf.py <PDF> <soratra-hamoaka> [pejy Voalohany] [pejy Farany]

Ohatra :
    ./run.sh src/abaka_pdf.py "/home/user/t6_src/FRP_6eme_MLG.pdf" refs/FRP_6eme_MLG.txt
    ./run.sh src/abaka_pdf.py "/home/user/t6_src/PE T6.pdf" refs/PE_T6.txt 9 40

Mamoaka koa : isan'ny pejy, ny lohateny (lazanja lehibe / soratra matroka) ary ny
lisitra (ampiasaina hamaritana ny rafi-pampianarana alohan'ny fanoratana).
"""
import os
import re
import sys

from pypdf import PdfReader


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(2)
    src, dst = sys.argv[1], sys.argv[2]
    r = PdfReader(src)
    n = len(r.pages)
    a = int(sys.argv[3]) if len(sys.argv) > 3 else 1
    b = int(sys.argv[4]) if len(sys.argv) > 4 else n
    a, b = max(1, a), min(n, b)
    chunks = []
    for i in range(a - 1, b):
        try:
            txt = r.pages[i].extract_text() or ""
        except Exception as e:
            txt = "[tsy azo : %s]" % e
        chunks.append("\n\n===== PEJY %d =====\n%s" % (i + 1, txt))
    tout = "".join(chunks)
    if not os.path.isdir(os.path.dirname(dst) or "."):
        os.makedirs(os.path.dirname(dst))
    with open(dst, "w", encoding="utf-8") as f:
        f.write(tout)
    print("%s : %d pejy manontolo, %d-%d nalaina -> %s (%d toerana)"
          % (os.path.basename(src), n, a, b, dst, len(tout)))
    # lohateny : andalana feno soratra lehibe na matroka,tsy misy teny midadasika
    titry = []
    for ligne in tout.split("\n"):
        l = ligne.strip()
        if 6 < len(l) < 74 and (l.isupper() or re.match(r"^(I|II|III|IV|V|VI|VII|VIII|IX|X)[.\)]", l)
                                or re.match(r"^\d+[.)] ", l) or l.startswith("Lohahevitra")
                                or l.startswith("Fitaovana") or l.startswith("Votoatiny")):
            titry.append(l)
    print("--- lohateny hita (%d) ---" % len(titry))
    for t in titry[:70]:
        print("   ", t)


if __name__ == "__main__":
    main()
