# -*- coding: utf-8 -*-
"""Fikambanana ny **MANUELA T6 MANONTOLO** : rakitra iray ihany, araka ny didin'ny mpanabe
« Malagasy_T6_J-Learn.docx ». Isaky ny lesona voamarina dia ampirehetina ao amin'`FICHES`.

    ./run.sh src/sary_tsilo.py data_manuel          # sary ho an'ny FANITSIANA (rehetra)
    ./run.sh src/build_fiche.py data_manuel Malagasy_T6_J-Learn

FANDRINDANA (araka ny lisitry ny **FRP T6, édisiona Oktobra 2026** ; gandra = **RAPE T6
sept. 2026**, 4 ora/kerinandro, `Daty` = mangina) :
  herin. 1-7  : S1 = LFK 1a + 1b (vita, V2) — S2 = LFK 1d verindroa (vita) — S3 = LFK 1e
                Fanakambanan-teny (vita) — S4 = rima/ngadona (LII 2d tononkalo)
  herin. 8-14 : S5 = LFK 2a tsirinteny — S6 = LFK 2d Fandrasan-teny (marika « < »,
                fanatsaram-peo) — S7 = LFK 2e anaran'ny tsirinteny
  herin. 15-21: S8 = LFK 2b Mpanoritra — S9 = LFK 2c Mpamari-toetra — S10 = LFK 2c
                Mpamaritr'isa — S11 = LFK 2f famadihana RF ho L — S12 = LFK 2g filaza mandidy
  herin. 22-27: S13 = santionany sy mpanoratra (Jean Narivony) — S14 = sokajin-dahatsoratra
  herin. 28-33: S15-S16 = Asa an-tsoratra : Lahatsoratra manoritsoritra (LI 1a)
  farany      : FLJ / FANONERANA.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import data_tsipelina_s1  # noqa: E402
import data_tsipelina_s2  # noqa: E402
import data_tsipelina_s3  # noqa: E402

LESONS = [
    data_tsipelina_s1.FICHE,
    data_tsipelina_s2.FICHE,
    data_tsipelina_s3.FICHE,
]

FICHE = {"FICHES": LESONS}

if __name__ == "__main__":
    for f in LESONS:
        print(" -", f["zt"], "·", f["lt"], "|", len(f["lesona"]), "bloc lesona,",
              len(f["exos"]), "fanazaran-tena,", len(f["grille"]), "andiany takela")
