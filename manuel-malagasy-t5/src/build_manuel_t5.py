# -*- coding: utf-8 -*-
"""build_manuel_t5.py — ny **boky feno** ho an'ny T5 : rakitra iray docx tokana.

Mpitambatra ny mpamokatra roa efa nampiasaina :
  * builders.py / seance_complet()  -> ny firaketana 20 (lohahevitra 1-5 × 4 zana-taranja)
  * build_fiche.py                  -> ny firaketana 13 (Tsipelina, Fitsipika, Fanehoan-kevitra)
Sary : 25 natao tamin'ny sary_loha.py (ny lahatsoratra rehetra ao anatiny dia nalaina
tsy niova avy amin'ny firaketana ihany) + ny sary tsilo an'ny mpamokatra fiche.

    ./run.sh src/build_manuel_t5.py            -> output/Malagasy_T5_J-Learn.docx
    ./run.sh src/build_manuel_t5.py --sans-sary

Tsy manova ny lahatsoratra anaty `data_*.py` akory : ny toeran'ny takela (Kilasy,
Seho n°, Lohateny) ihany no fenoana araka ny toerana ato amin'ny boky.
"""
import importlib
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import docx                                     # noqa: E402
from docx.shared import Cm, Pt, Twips           # noqa: E402

import build_fiche as BF                        # noqa: E402
import builders as BL                           # noqa: E402

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(RACINE, "output", "Malagasy_T5_J-Learn.docx")
THEMES = [1, 2, 3, 4, 5]
FICHE_MOD = ["data_fiasan", "data_ambava_t1"]
SARY_CM = 16.9


def seho_theme():
    """20 firaketana avy amin'ny lohahevitra 5 (4 zana-taranja isaky ny lohahevitra)."""
    out = []
    for t in THEMES:
        mod = importlib.import_module("data_loha%d" % t)
        for s in BL.norm_all(mod.SEANCES):
            s["_loha"] = t
            out.append(s)
    return out


def seho_fiche():
    """Ny firaketana vita amin'ny mpamokatra `build_fiche` (Tsipelina/Fitsipika/Kabary)."""
    out = []
    for nom in FICHE_MOD:
        mod = importlib.import_module(nom)
        d = mod.FICHE
        for f in (d.get("FICHES") or [d]):
            out.append((nom, dict(f)))
    return out


def feno_fields(f, n, total):
    """Fenoina araka ny toerana ato amin'ny boky (tsy lahatsoratra vaovao)."""
    c = f.setdefault("fields", {})
    if not c.get("Kilasy"):
        c["Kilasy"] = "5e"
    c["Seho n°"] = "%d / %d" % (n, total)
    if not c.get("Lohateny"):
        c["Lohateny"] = f.get("lt")
    if not c.get("Zana-taranja"):
        c["Zana-taranja"] = f.get("zt")
    return f


def sary_mino(s, i):
    """Anjam-bolana : ny sary natao tamin'ny `sary_loha` no ampidirina (tsy ny data)."""
    try:
        import sary_loha as SL
        nom = "loha%d-%d" % (s["_loha"], i)
        chemin = os.path.join(SL.DOSSIER, nom + ".png")
        if not os.path.exists(chemin):
            chemin = SL.rantsana(s, i)
        if chemin and os.path.exists(chemin):
            s["libre_img"] = chemin
            s["libre_hatevina"] = SARY_CM
            s["libre_caption"] = None
    except Exception as e:
        print("  ! sary %d : %s" % (i, repr(e)[:70]))
    return s


def carte(t, seances):
    try:
        import sary_loha as SL
        nom = os.path.join(SL.DOSSIER, "loha%d-carte.png" % t)
        if not os.path.exists(nom):
            SL.rantsana_lohahevitra(t, seances)
        return nom if os.path.exists(nom) else None
    except Exception as e:
        print("  ! carte %d : %s" % (t, repr(e)[:70]))
        return None


# ----------------------------------------------------------------- ny boky
def couverture(doc, total):
    for _ in range(3):
        BF.p(doc, "", space_after=0)
    BF.p(doc, "J-Learn — Manuels scolaires malagasy", size=12, color=BF.C_NOIR, centre=True,
         space_after=0)
    BF.p(doc, "", space_after=0)
    BF.p(doc, "MANUEL FITENY MALAGASY", size=34, bold=True, color=BF.C_LECON, centre=True,
         space_after=6)
    BF.p(doc, "Kilasy T5 (Cinquième) — Soran-boky fanampiana ho an'ny mpampianatra",
         size=15, bold=True, color=BF.C_NOIR, centre=True, space_after=6)
    BF.p(doc, "Firaketana %d : lohahevitra 1-5 (20) + Tsipelina sy Fitsipika (13)" % total,
         size=11, italic=True, color=BF.C_NOIR, centre=True, space_after=26)
    BF.p(doc, "Mpanangona sy mpamolavola", size=12, bold=True, centre=True, space_after=2)
    BF.p(doc, "_______________________________", size=12, centre=True, space_after=30)
    BF.p(doc, "Avant-propos", size=14, bold=True, color=BF.C_RUBRIQUE, space_after=6)
    import build as BD
    for line in BD.AVANT_PROPOS:
        BF.p(doc, line, size=11, space_after=4)


def sommaire(doc, theme, fiches):
    BF.saut(doc)
    BL.para(doc, "Fizahan-takila", 16, BL.ROUGE, True, False, None, bookmark="bm_sommaire")
    n = 0
    for t in THEMES:
        BL.para(doc, "LOHAHEVITRA %d" % t, 12, BL.VERT, True, False, None, space_after=2)
        for s in [x for x in theme if x["_loha"] == t]:
            n += 1
            BL.sommaire_link(doc, "bm_seho%d" % n,
                             "%2d. %s : %s" % (n, s["zana_taranja"], s["lohateny"]), indent=1)
    BL.para(doc, "FISEHANA MIALA TASO — Tsipelina sy Fitsipika", 12, BL.VERT, True, False, None,
            space_after=2)
    for k, (mod, f) in enumerate(fiches, start=n + 1):
        BL.para(doc, "%2d. %s : %s" % (k, f["zt"], f["lt"]), 11, BL.NOIR, False, False, None,
                indent=0.6, space_after=2)


def main():
    sans_sary = "--sans-sary" in sys.argv
    theme = seho_theme()
    fiches = seho_fiche()
    total = len(theme) + len(fiches)

    doc = docx.Document()
    sec = doc.sections[0]
    sec.page_width, sec.page_height = Cm(21), Cm(29.7)
    sec.left_margin = sec.right_margin = sec.top_margin = sec.bottom_margin = Twips(1020)
    normal = doc.styles["Normal"]
    normal.font.name = "Times New Roman"
    normal.font.size = Pt(12)
    normal.paragraph_format.space_after = Pt(10)
    listes = BF.Listes(doc)
    notes = BF.Notes(doc)

    couverture(doc, total)
    sommaire(doc, theme, fiches)

    # --- 20 firaketana (lohahevitra 1-5)
    n = 0
    for t in THEMES:
        seances = [s for s in theme if s["_loha"] == t]
        BF.saut(doc)
        BL.para(doc, "LOHAHEVITRA %d" % t, 20, BL.ROUGE, True, False, BL.C, space_after=2)
        BL.para(doc, seances[0]["lohahevitra"].split(". ", 1)[-1], 14, BL.NOIR, True, True, BL.C,
                space_after=14)
        if not sans_sary:
            c = carte(t, seances)
            if c:
                BL.add_image(doc, c, SARY_CM, "Sary : ny zana-taranja efatra ao amin'ity "
                                              "lohahevitra ity sy ny lohatenin'ny firaketana.")
        for i, s in enumerate(seances, start=1):
            n += 1
            if not sans_sary:
                sary_mino(s, i)
            BL.seance_complet(doc, s, n, total, s.get("durees") or (5, 20, 5))

    # --- 13 firaketana Tsipelina / Fitsipika / Kabary
    for mod, f in fiches:
        n += 1
        feno_fields(f, n, total)
        BF.saut(doc)
        for _ in range(3):
            BF.p(doc, "", space_after=0)
        BF.p(doc, f["zt"], color=BF.C_TITRE_ZT.get(f["zt"], "E36C0A"), size=90, centre=True,
             space_after=13)
        BF.p(doc, "", space_after=0)
        BF.takela(doc, f, notes)
        BF.lesona(doc, f, listes, notes)
        BF.exercices(doc, f, listes)
        BF.fanitsiana(doc, f, listes)
        BF.loharano(doc, f)

    import build as BD
    BD.loharano_final(doc, theme)

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    doc.save(OUT)
    print("ecrit :", OUT, os.path.getsize(OUT), "o | firaketana :", total)
    tatitra(OUT, total)


def tatitra(chemin, total):
    doc = docx.Document(chemin)
    txt = "\n".join(x.text for x in doc.paragraphs)
    for t in doc.tables:
        for r in t.rows:
            for c in r.cells:
                txt += "\n" + c.text
    x = doc.element.body
    marq = ["TAKELA-PANOMANAN-DESONA", "LESONA", "FANAZARAN-TENA", "LOHARANON-KEVITRA",
            "Famerenana", "Fandravonana", "Fampiharana", "Tombana"]
    nimg = len(x.findall(".//{http://schemas.openxmlformats.org/drawingml/2006/main}blip"))
    print("controles : %d paragrafy, %d tabilao, %d tsirairay, %d sary"
          % (len(doc.paragraphs), len(doc.tables), len(txt), nimg))
    for m in marq:
        print("   %-26s %3d" % (m, txt.count(m)))
    print("   astérisques littéraux      %3d" % len(re.findall(r"\*", txt)))
    DEF = ["veroso", "amboary", "apono eo", "nonoy", "sazonio", "ara-potoana", "sabonina",
           "fahadiovana", "manasa nify", "fanasan-tanana", "resena", "fandroavana", "natsangana",
           "famelezana", "androavana", "mpamboly", "nosokajiana", "mitahiry fahasalamana",
           "maha-iankinan", "bar\u00e9m\u00e9", "BEPC", "minist\u00e8re"]
    bas = txt.lower().replace("\u2019", "'")
    sales = [w for w in DEF if w in bas]
    if sales:
        print("FORME DEFENDUE :", sales)
        sys.exit(1)
    print("   forma voaràna              0")
    nk = txt.count("TAKELA-PANOMANAN-DESONA")
    if nk != total:
        print("MANQUANT : takela %d fa nraraka %d" % (nk, total))
        sys.exit(1)
    print("TUATUA" if nimg else "TUATUA (tsy misy sary)")


if __name__ == "__main__":
    main()
