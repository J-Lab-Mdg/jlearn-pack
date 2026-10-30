# -*- coding: utf-8 -*-
"""Fikambanana ny **MANUELA T6 MANONTOLO** : rakitra iray ihany, araka ny didin'ny mpanabe
« Malagasy_T6_J-Learn.docx ». Isaky ny lesona voamarina dia ampirehetina ao amin'`FICHES`.

    ./run.sh src/sary_tsilo.py data_manuel          # sary ho an'ny FANITSIANA (rehetra)
    ./run.sh src/build_fiche.py data_manuel Malagasy_T6_J-Learn

Fandrindrana : S1 = Teny verindroa (1a) — S2 = tendro + tanjony (1b, 1d) —
S3-S4 = Fanakambanan-teny (1e) — S5-S6 = Tsirinteny (2a) — S7-S9 = Sokajin-teny (2b) —
S10-S11 = Anjara asa EM sy L (2d, 2e, 2f) — S12 = Filaza mandidy (2g) —
S13-S16 = Asa an-tsoratra : Lahatsoratra manoritsoritra (FRP p.71-73, PE p.25-26).
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import data_tsipelina_s1  # noqa: E402

LESONS = [
    data_tsipelina_s1.FICHE,
]

FICHE = {"FICHES": LESONS}

if __name__ == "__main__":
    for f in LESONS:
        print(" -", f["zt"], "·", f["lt"], "|", len(f["lesona"]), "bloc lesona,",
              len(f["exos"]), "fanazaran-tena,", len(f["grille"]), "andiany takela")
