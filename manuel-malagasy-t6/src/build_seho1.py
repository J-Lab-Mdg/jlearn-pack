# -*- coding: utf-8 -*-
"""build_seho1.py — ny **SEHO 1 ihany**, rakitra docx iray manokana (ho an'ny fijerena haingana).

Tsy mpanova vaovao ny rafitra : miantso ny fongon-drafitra mitovy amin'ny an'ny boky feno
(`BF.takela` / `BF.lesona` / `BF.exercices` / `BF.fanitsiana` / `BF.loharano`) amin'ny firaketana
iray ihany, ka ny zavatra hitanao eto dia ny hitanao eto amin'ny boky manontolo rehefa
feno ny 21 seho.

    ./run.sh src/build_seho1.py        -> output/Seho_1_T6_J-Learn.docx
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import docx                                     # noqa: E402
from docx.shared import Cm, Pt, Twips           # noqa: E402

import build_fiche as BF                        # noqa: E402
import sortsy as SO                             # noqa: E402
import data_zt16                                # noqa: E402

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TITRE_TAILLE = 15


def main():
    f = data_zt16.FICHES[0]
    if f.get("rafitra") != "tanana":
        print("MANQUANT : ny firaketana 1 dia tsy mbola misy `rafitra = \"tanana\"`")
        return 1
    f["faritana"] = "ZANA-TARANJA I"
    f["faritana_sous"] = "KOLONTSAINA · " + f.get("lfk", "")
    f["fields"]["Seho n°"] = str(f.get("seho", 1))
    f["fields"]["Isan'ny seho"] = str(f.get("isan", 21))

    doc = docx.Document()
    sec = doc.sections[0]
    sec.page_width, sec.page_height = Cm(21), Cm(29.7)
    sec.left_margin = sec.right_margin = sec.top_margin = sec.bottom_margin = Twips(1020)
    normal = doc.styles["Normal"]
    normal.font.name = "Times New Roman"
    normal.font.size = Pt(12)
    normal.paragraph_format.space_after = Pt(10)
    SO.configurer_pied_et_tete(sec, tete=None, signature=True, premier=False)
    listes = BF.Listes(doc)
    notes = BF.Notes(doc)

    par = BF.p(doc, "", centre=True, space_after=0)
    SO.marika(par, "bm_fiche1")
    BF.p(doc, f["faritana"], color="7B3F00", size=30, bold=True, centre=True, space_after=3)
    BF.p(doc, f["faritana_sous"], size=11, centre=True, italic=True, color="595959",
         space_after=8)
    BF.p(doc, "SEHO %s — %s" % (f.get("seho", 1), " ".join(f["lt"].split())), size=TITRE_TAILLE,
         bold=True, under=True, color=BF.C_LECON, centre=True, space_after=10)
    BF.takela(doc, f, notes)
    BF.saut(doc)
    BF.lesona(doc, f, listes, notes)
    BF.saut(doc)
    BF.exercices(doc, f, listes)
    BF.fanitsiana(doc, f, listes)
    BF.loharano(doc, f)

    sortie = os.path.join(RACINE, "output", "Seho_1_T6_J-Learn.docx")
    doc.save(sortie)
    print("ecrit :", sortie, os.path.getsize(sortie), "o")
    BF.controles(sortie, [f["lt"]])
    return 0


if __name__ == "__main__":
    sys.exit(main())
