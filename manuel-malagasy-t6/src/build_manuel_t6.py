# -*- coding: utf-8 -*-
"""build_manuel_t6.py — ny **MANUELA MALAGASY T6** voarindra araka ny ZANA-TARANJA an'ny PE.

Rafitra vaovao (tsy fanovana ny votoatin'ny lesona akory — ny fitarihana ihany no ovana) :

    Fonony  ->  LAHARISA INTERACTIF (rohy anatiny, tsy mila « Update field »)
    ZANA-TARANJA I   MALAGASY, KOLONTSAINA ARY FIARAHAMONINA   (PE : ora 38)
    ZANA-TARANJA II  TONTOLON'NY LITERATIORA                   (PE : ora 54)
    ZANA-TARANJA III Fepetra sy tekinika + VOTOATINY           (laharisa + toro-lalana)
    ZANA-TARANJA IV  FIASAN'NY TENY - Tsipelina                (PE : ora 12)
    ZANA-TARANJA V   FIASAN'NY TENY - Fitsipiky ny teny        (PE : ora 20)
    ZANA-TARANJA VI  ASA AN-TSORATRA - Lahatsoratra manoritsoritra (PE : ora 20)

Isaky ny fizarana : lohateny (style Heading 1, miseho ao amin'ny « Navigation »), ny Vontoatiny
sy ny Sahanasa voasoratra **teny-teny** avy amin'ny PE, ary ny firaketana ao anatiny.
Rohy : `Ctrl+clic` amin'ny laharisa -> mandeha hafahito ; « miverina amin'ny laharisa » isaky ny
farany ; laharan-tsingana « Pajy x / y » (champ PAGE/NUMPAGES, tsy mila fanoherana).

    ./run.sh src/build_manuel_t6.py                  -> output/Malagasy_T6_J-Learn.docx
    ./run.sh src/build_manuel_t6.py --nom Mon_boky   -> output/Mon_boky.docx
"""
import importlib
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import docx                                     # noqa: E402
import pe_t6                                    # noqa: E402
import sortsy as SO                             # noqa: E402
from docx.shared import Cm, Pt, Twips           # noqa: E402

import build_fiche as BF                        # noqa: E402
import sary_fano                                 # noqa: E402

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
COULEUR_LIEN = "1F4E79"

# ----------------------------------------------------------------- ny firaketana
# (n° an'ny ZANA-TARANJA, index ao amin'ny LESONS taloha) — ny votoaty dia tsy mikasika akory
GROUPE = {2: [11, 12, 13, 14], 3: [15, 16, 17], 4: [0, 1, 2], 5: [3, 4, 5, 6, 7, 8, 9, 10]}


def num_roma(n):
    return ["I", "II", "III", "IV", "V", "VI", "VII"][n - 1]


def zt_of(n):
    for z in pe_t6.ZT:
        if z["n"] == n:
            return z
    raise KeyError(n)


# ----------------------------------------------------------------- takelaka
def tonon_titre(doc, txt, niveau=1, taille=None, loko=None, centre=False, gras=True, italique=False,
                space_after=6):
    par = BF.p(doc, txt, bold=gras, italic=italique, color=loko, size=taille, centre=centre,
               space_after=space_after, keep=True)
    SO.titre(doc, par, niveau)
    return par


def laharisa(doc, mapy, par_zt, n_fiche):
    """LAHARISA INTERACTIF : tabilao misy rohy -> signet isaky ny firaketana."""
    par = BF.p(doc, "", centre=True, space_after=0)
    SO.marika(par, "bm_laharisa")
    tonon_titre(doc, "LAHARISA NY MANUELA", 1, taille=20, loko=BF.C_NOIR, centre=True,
                space_after=4)
    BF.p(doc, "Tsindrio (Ctrl+clic) ny lohateny iray mba handeha haafahito.", size=9.5,
         italic=True, color="595959", centre=True, space_after=10)
    lignes = []
    for z in pe_t6.ZT:
        n = z["n"]
        for l in z["loha"]:
            lignes.append(("ZT " + num_roma(n),
                           "%s   ·   ora %s" % (l["titre"], l["ora"] if l["ora"] else "—"),
                           "PE T6", "", "bm_zt%d" % n))
        for idx, numero in par_zt.get(n, []):
            f = mapy[(n, idx)][0]
            lignes.append((str(numero), f["lt"], f.get("lfk", ""), f.get("heri", ""),
                           "bm_fiche%d" % numero))
    SO.table_sommaire(doc, lignes)
    for ln in ("Laharisa : ny firaketana %d rehetra ; « PE T6 » = ny ZANA-TARANJA sy ny ora "
               "voalaza amin'ny Programmes d'Études ; « Laharana ao amin'ny FRP » = ny fizarana "
               "an'ny Recueil de Fiches Pédagogiques ; « Herinandro » = ny fitsinjarana an'ny "
               "RAPE (4 ora/kerinandro)." % n_fiche,
               "Mangina ny `Daty` : tsy misy daty voatonditra amin'ny taratasy ofisialy "
               "(RAPE T6 septambra 2026)."):
        BF.p(doc, ln, size=9.5, italic=True, color="595959", space_after=3)


def page_fizarana(doc, z, fiches):
    """Tongoloana ny ZANA-TARANJA : lohateny + Vontoatiny an'ny PE + lisitry ny firaketana."""
    par = BF.p(doc, "", centre=True, space_after=0)
    SO.marika(par, "bm_zt%d" % z["n"])
    for _ in range(2):
        BF.p(doc, "", centre=True, space_after=0)
    BF.p(doc, "ZANA-TARANJA %s" % num_roma(z["n"]), size=13, bold=True, centre=True,
         color="E36C0A", space_after=2)
    tonon_titre(doc, z["anarana"], 1, taille=26, loko=BF.C_NOIR, centre=True, space_after=8)
    tot = sum((l["ora"] or 0) for l in z["loha"])
    BF.p(doc, "Faharetany amin'ny PE T6 : ora %d  ·  %d firaketana ao amin'ny boky"
         % (tot, len(fiches)) if fiches else "Faharetany amin'ny PE T6 : ora %d" % tot,
         size=11, italic=True, centre=True, color="595959", space_after=12)
    for l in z["loha"]:
        tonon_titre(doc, l["titre"], 2, taille=14, loko=BF.C_RUBRIQUE, space_after=3)
        if l.get("fahendrena"):
            BF.p(doc, "Fahendrena voizina : %s" % l["fahendrena"], size=10, italic=True,
                 color="595959", space_after=4)
        BF.p(doc, "Vontoatiny", size=11, bold=True, space_after=2)
        for nom, puces in l["vontoatiny"]:
            BF.p(doc, "• %s" % nom, size=11, bold=True, left=200, space_after=1)
            for b in puces:
                BF.p(doc, "– %s" % b, size=10.5, left=420, space_after=1)
        if l["sahanasa"]:
            BF.p(doc, "Sahanasa (tari-dalana)", size=11, bold=True, space_after=2)
            for b in l["sahanasa"]:
                BF.p(doc, "– %s" % b, size=10.5, left=420, space_after=1)
        if l["tetika"]:
            BF.p(doc, "Tetika amam-paika : %s" % " · ".join(l["tetika"]), size=10.5, left=420,
                 space_after=1)
        if l["fitaovana"]:
            BF.p(doc, "Fitaovana : %s" % " · ".join(l["fitaovana"]), size=10.5, left=420,
                 space_after=1)
        if l["tombana"]:
            BF.p(doc, "Voka-pianarana (Tombana)", size=11, bold=True, space_after=2)
            for b in l["tombana"]:
                BF.p(doc, "– %s" % b, size=10.5, left=420, space_after=1)
        if l.get("ora"):
            BF.p(doc, "Ora lanin'ny PE ho an'ity fizarana ity : ora %d" % l["ora"], size=9.5,
                 italic=True, color="595959", space_after=10)
    if not fiches:
        BF.p(doc, "Firaketana : mbola ho soratana — ny votoatiny rehetra eo ambony dia avy "
                  "amin'ny PE T6 ary hatao ao amin'ity fizarana ity.", size=10, italic=True,
             color=BF.C_OHATRA, space_after=8)
    if z["n"] == 3:
        # Ny fandaharam-potoana an-taona : sary ny mpamokatra (`sary_fano.planning`)
        tonon_titre(doc, "Fandaharam-potoana (RAPE T6 septambra 2026 : 4 ora/kerinandro)", 2,
                    taille=13, loko=BF.C_RUBRIQUE, space_after=6)
        try:
            ops, w, h = sary_fano.sary("planning")
            par = BF.p(doc, "", centre=True, space_after=4)
            BF._sary_ao_anaty(doc, par, ops, w, h, "planning")
        except Exception as e:
            BF.p(doc, "Sary fandaharana tsy natao : %s" % e, size=9, italic=True, space_after=4)
        BF.p(doc, "Ora feno ara-PE : %d ora (ZANA-TARANJA I 38 + II 54 + IV 12 + V 20 + VI 20) "
                  "· 4 ora isaky ny kerinandro = 36 kerinandro." % pe_t6.total(), size=9.5,
             italic=True, color="595959", space_after=6)


def fiche(doc, f, numero, total, listes, notes):
    """Firaketana iray feno : marika + lohateny (Heading 2) + takela + lesona + exos + fanitsiana."""
    BF.saut(doc)
    par = BF.p(doc, "", centre=True, space_after=0)
    SO.marika(par, "bm_fiche%d" % numero)
    f["fields"]["Seho n°"] = "%d / %d" % (numero, total)
    BF.p(doc, f["faritana"], color=BF.C_TITRE_ZT.get(f["zt"], "E36C0A"), size=30, bold=True,
         centre=True, space_after=3)
    if f.get("faritana_sous"):
        BF.p(doc, f["faritana_sous"], size=11, centre=True, italic=True, color="595959",
             space_after=8)
    tonon_titre(doc, "LESONA %d — %s" % (numero, f["lt"]), 2, taille=15, loko=BF.C_LECON,
                centre=True, space_after=10)
    BF.takela(doc, f, notes)
    BF.lesona(doc, f, listes, notes)
    BF.exercices(doc, f, listes)
    BF.fanitsiana(doc, f, listes)
    BF.loharano(doc, f)
    der = BF.p(doc, "", centre=True, space_after=0)
    SO.lien(der, "bm_laharisa", "◄  Miverina amin'ny laharisa", couleur=COULEUR_LIEN, taille=9,
             italique=True)


# ----------------------------------------------------------------- mpitantana
def main():
    nom = "Malagasy_T6_J-Learn"
    if "--nom" in sys.argv:
        nom = sys.argv[sys.argv.index("--nom") + 1]
    if not nom.endswith(".docx"):
        nom += ".docx"
    d = importlib.import_module("data_manuel").FICHE
    lesons = d["FICHES"]

    # toerana vaovao : isan'ny firaketana araka ny ZANA-TARANJA
    ordre = []
    for z in pe_t6.ZT:
        for idx in GROUPE.get(z["n"], []):
            ordre.append((z["n"], idx, lesons[idx]))
    total = len(ordre)
    mapy, par_zt, titrees = {}, {}, []
    for numero, (zn, idx, f) in enumerate(ordre, start=1):
        mapy[(zn, idx)] = (f, numero)
        par_zt.setdefault(zn, []).append((idx, numero))
        z = zt_of(zn)
        f["faritana"] = "ZANA-TARANJA " + num_roma(zn)
        sous = f.get("lfk", "")
        sous = z["anarana"] + (" · " + sous if sous else "")
        if f.get("heri"):
            sous += " · herinandro " + f["heri"]
        f["faritana_sous"] = sous
        titrees.append(f["lt"])

    doc = docx.Document()
    sec = doc.sections[0]
    sec.page_width, sec.page_height = Cm(21), Cm(29.7)
    sec.left_margin = sec.right_margin = sec.top_margin = sec.bottom_margin = Twips(1020)
    normal = doc.styles["Normal"]
    normal.font.name = "Times New Roman"
    normal.font.size = Pt(12)
    normal.paragraph_format.space_after = Pt(10)
    for niv in (1, 2, 3):
        try:
            st = doc.styles["Heading %d" % niv]
            st.font.name = "Times New Roman"
            st.font.color.rgb = docx.shared.RGBColor(0x00, 0x00, 0x00)
            st.font.size = Pt({1: 20, 2: 15, 3: 12}[niv])
        except Exception:
            pass
    SO.configurer_pied_et_tete(sec, tete=None, signature=True, premier=True)
    listes = BF.Listes(doc)
    notes = BF.Notes(doc)

    BF._tongolo(doc, d["tongolo"])
    BF.saut(doc)
    laharisa(doc, mapy, par_zt, total)

    for z in pe_t6.ZT:
        indexes = GROUPE.get(z["n"], [])
        SO.fizarana(doc, tete="ZANA-TARANJA %s · %s" % (num_roma(z["n"]), z["anarana"]))
        page_fizarana(doc, z, indexes)
        for idx in indexes:
            f, numero = mapy[(z["n"], idx)]
            fiche(doc, f, numero, total, listes, notes)

    sortie = os.path.join(RACINE, "output", nom)
    doc.save(sortie)
    print("ecrit :", sortie, os.path.getsize(sortie), "o | firaketana :", total)
    fanamarinana(sortie, total, titrees)


def fanamarinana(chemin, total, titrees):
    """Compte les signets/lien/sections, puis laisse `controles()` valider le contenu."""
    import zipfile
    z = zipfile.ZipFile(chemin)
    x = z.read("word/document.xml").decode()
    signets = len(re.findall(r"<w:bookmarkStart ", x))
    rohy = len(re.findall(r"<w:hyperlink ", x))
    sections = len(re.findall(r"<w:sectPr", x))
    print("rafitra : %d signet, %d rohy anatiny, %d fizarana (section)" % (signets, rohy, sections))
    attendus = total + len(pe_t6.ZT)
    if rohy < total + 1:
        print("MANQUANT : rohy tsy feno (%d)" % rohy)
        sys.exit(1)
    if signets < len(pe_t6.ZT) + total:
        print("MANQUANT : signets tsy feno (%d / %d)" % (signets, len(pe_t6.ZT) + total))
        sys.exit(1)
    print("           : %d firaketana + %d ZANA-TARANJA = %d cibles ; %d rohy"
          % (total, len(pe_t6.ZT), attendus - len(pe_t6.ZT), rohy))
    BF.controles(chemin, titrees[:1] + titrees[-1:])


if __name__ == "__main__":
    main()
