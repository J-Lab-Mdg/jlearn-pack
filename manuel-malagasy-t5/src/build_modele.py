# -*- coding: utf-8 -*-
"""FICHE MODÈLE du Manuel Fiteny Malagasy T5 — la LEÇON d'abord.

    ./run.sh src/build_modele.py data_loha1 Manuel_Malagasy_T5_FICHE-MODELE_V1 [index de la fiche]

Une page de firafitra (mode d'emploi : ce que contient chaque bloc, les termes validés, les interdits)
puis UNE fiche complète dans l'ordre demandé : LESONA, FANAZARAN-TENA sy VALINY, LOHARANON-KEVITRA
(la page web collée en entier), puis la TAKELA-PANOMANAN-DESONA (méta-table + grille I/II/III).
Le modèle est livré à part : il est validé d'abord, puis appliqué aux 15 lohahevitra.
"""
import importlib
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from builders import (new_document, para, seance_lesona_aloha, norm_all, set_widths, cell_add,
                      page_break, ROUGE, NOIR, VERT, BLEU)

OUT_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "output")

TITRE = "FICHE MODÈLE — firafitry ny takelaka"
SOUS_TITRE = ("Manuel Fiteny Malagasy T5 · modely iray ho an'ny lohahevitra rehetra · "
              "ny lesona dia voalohany, ny takela-panomanan-dlesona manaraka")

POINTS = [
    ("1. Ny lesona dia voalohany",
     "Ny takelaka an'ny mpianatra no mitanisa voalohany : ny LESONA, ny FANAZARAN-TENA sy ny VALINY eo "
     "hatrany ambanin'ny tsirairay, ary ny LOHARANON-KEVITRA. Ny takela-panomanan-dlesona (tabilao "
     "I/II/III) dia avy amin'ny takelaka manaraka, sady anjaran'ny mpampianatra ihany : ny mpianatra tsy "
     "mifandray amin'ny dingana sy ny fotoana."),
    ("2. Ny LESONA",
     "Eo dia voasoratra ny zavatra jeren'ny mpianatra sy adika amin'ny kahiny : ny dihy na ny "
     "lahatsoratra, ny fitsipika, ny ohatra diso sy ny fanitsiana, ary « Ny teny vaovao » (4 na 5 teny "
     "miaraka amin'ny dikany fohy). Tsy misy didy na fanontaniana eto : fanazavana ihany. Ny « Koa, » "
     "dia mamarana ny fandravonana."),
    ("3. Ny FANAZARAN-TENA sy ny VALINY",
     "Fanazaran-tena tsirairay : didy iray ihany, araka ny fomba fanoratana ny taranja malagasy "
     "(a b d e f g h i j k l m n o p r s t v z), ary ny VALINY eo hatrany ambanin'ny fanazaran-tena "
     "tsirairay, miloko bordeaux. Tsy voasoratra ny karazana fanazaran-tena. Tombana : fanontaniana sy "
     "valiny fotsiny."),
    ("4. Ny LOHARANON-KEVITRA",
     "Ny loharanom-pahalalana dia pejy fenony, avy amin'ny Wikipedia malagasy (mg.wikipedia.org) rehefa "
     "misy, na avy amin'ny boky efa navoaka. Tsy ampahany nobakabakaina ihany no avela, fa ny pejy "
     "manontolo, mba ho hitan'ny mpampianatra ny manodidina azy. Tsy ovaina na haingonina ny soratra "
     "ao amin'ny pejy, na dia misy hadisoana aza : ny loharano no heverina ho marina, fa ny fanitsiana "
     "azy tsy anjaran'ity boky ity."),
    ("5. Isan'ny seho sy ny fotoana",
     "Seho 20 minitra : 3 / 14 / 3. Seho 30 minitra : 5 / 20 / 5. Ny fotoana dia soratina amin'ny "
     "andalana I, II ary III ihany. Isan'ny seho an'ny lohahevitra iray : 3 ho an'ny Fanehoan-kevitra "
     "am-bava, 2 seho 30 minitra ho an'ny Vakiteny, 2 ho an'ny Fiasan'ny teny (Tsipelina sy Fitsipiky "
     "ny teny), 2 ho an'ny Asa an-tsoratra."),
    ("6. Ny tabilao amin'ny takela-panomanan-dlesona",
     "Andalana : Dingana sy Faharetany, Fizotry ny Lesona (Mpampianatra sy Mpianatra), Tetika "
     "Amam-paika, Fitaovana, Fanamarihana. Dingana : I. Famerenana ; II. LESONA VAOVAO (1. Tari-dresaka, "
     "2. Fanolorana, 3. Fandinihana, 4. Famakafakana, 5. Fandravonana, 6. Fampiharana) ; III. Tombana. "
     "Matoanteny iray ihany no atao amin'ny andalana Mpianatra (Mihaino., Mamaly., Mijery., Mamerina., "
     "Manoratra.), ary ny « Daty : » dia havotsin'ny mpampianatra."),
    ("7. Ny adihevitra sy ny fifaninanana an-tarika",
     "Tarika roa isaky ny seho (ohatra : Voromahery sy Railovy). Ny mametraka fanontaniana dia miteny "
     "hoe : « Araka ny hevitrao/hevitrareo, mahasalama ve ny … ? » ; ny mamaly : « Araka ny "
     "hevitro/hevitray, (tsy) mahasalama ny … ». Mba hahazoana antony fanampiny : « Azafady, afaka "
     "manazava misimisy kokoa ve ianao ? », « Tsy azoko tsara, azo azavaina ve ? ». Ho an'ny tombana : "
     "isa iray ho an'ny tarika mahavaly, ary isa iray ho an'ny tarika nametraka ny fanontaniana raha tsy "
     "mahavaly ilay namaly ; ny isa dia apetaka eny amin'ny solaitrabe."),
    ("8. Teny voamarina ihany no ampiasaina",
     "Fizahan-takila (tsy hoe « sommaire », tsy hoe « tsisan-teny ») ; Tari-dresaka (tsy hoe « mise en "
     "situation », tsy hoe « fitarihan-tsaina ») ; Fifanakalozan-kevitra sy adihevitra, fa tsy teny vahiny "
     "; Famerenana, Fandinihana, Famakafakana, Fandravonana, Tombana. Ho an'ny mpanao fenitra amin'ny "
     "teny : miteny sy itenenana. Tsy mamorona teny vaovao izahay : ny teny efa hita amin'ny boky "
     "malagasy na amin'ny pejy voamarina ihany no take, ohatra ny « legioma » sy ny « fepetra "
     "fototra ». Ny soratra ao amin'ny boky Fizahan-takila dia noheverina hoe marina."),
    ("9. Sary, daty, zava-tsy tokony hita",
     "Tsy misy sary ao amin'ity boky ity : ny sary ilazana ny fandinihana dia voalaza an-tsoratra (ilay "
     "ankavanana : … ; ilay ankavia : …). Tsy misy daty ara-kalendaria na taona, tsy misy anaran'ny "
     "faton-dradidiana taloha (Lohahevitry ny fanadinana ihany no atao), tsy misy lisitra ny isa, ary "
     "tsy misy toerana banga feno tsipika ihany : ny V.A. dia misy valiny foana."),
]

BLOCS = [
    ("Safetra", "Inona no aseho amin'ny lesona", "Ohatra ao amin'ny angona"),
    ("h", "Lohateny an'ny lesona (maitso, matavy)", "(h, « Ny mpanamarika fotoana »)"),
    ("l", "Lahatsoratra na vakiteny (kavy, maizina)", "(l, « <lahatsoratra feno> »)"),
    ("d", "Dihy na fifanakalozana teny an'ny mpianatra", "(d, « Mpianatra Andry : … », « … : … »)"),
    ("x", "Lisitra : ohatra, tsipika, didy fanaovana", "(x, « Marina : … », « Diso : … »)"),
    ("p", "Fitsipika na famaritana (mavo ny teny vaovao)", "(p, « fepetra : ny toe-javatra … »)"),
    ("n", "Tadidy na teny fanamafisana (mavo)", "(n, « Tadiavo : … »)"),
]


def mode_emploi(doc):
    para(doc, TITRE, 18, ROUGE, True, False, None)
    para(doc, SOUS_TITRE, 11, NOIR, False, True, None, space_after=10)
    for titre, texte in POINTS:
        para(doc, titre, 12, VERT, True, False, None, space_after=2)
        para(doc, texte, 11, NOIR, False, False, None, indent=0.4, space_after=7)
    page_break(doc)
    para(doc, "Ny endrika (bloc) hita ao amin'ny lesona", 12, VERT, True, False, None)
    para(doc, "Ireto ihany no endrika ampiasaina, mba ho mitovy endrika ny takelaka rehetra.",
         10, NOIR, False, True, None, space_after=6)
    tbl = doc.add_table(rows=len(BLOCS), cols=3, style="Table Grid")
    set_widths(tbl, [1.6, 6.6, 8.8])
    for r, rowvals in enumerate(BLOCS):
        for c, val in enumerate(rowvals):
            cell_add(tbl.rows[r].cells[c], val, size=10, bold=(r == 0 or c == 0), first=(r == 0))
    para(doc, "", 10, NOIR, False, False, None)
    para(doc, "Ny « Diso / Marina » : andalana iray ho an'ny ohatra roa, ka hoe « Diso : … — Marina : … », "
              "satria ny fandinihana ny hadisoana no manarakaraka ny fanitsiana.",
         10, NOIR, False, True, None)
    para(doc, "Ny « Ny teny vaovao » : 4 na 5 teny, mavo ny teny vaovao, ary ny dikany fohy manaraka "
              "aony hatony.", 10, NOIR, False, True, None, space_after=10)
    para(doc, "Ny takelaka manaraka dia ohatra tena izy : ny lesona voalohany ao amin'ny lohahevitra 1, "
              "natao tamin'ity firafitra ity.", 11, BLEU, False, True, None)


def main():
    module = sys.argv[1] if len(sys.argv) > 1 else "data_loha1"
    out_name = sys.argv[2] if len(sys.argv) > 2 else "Manuel_Malagasy_T5_FICHE-MODELE_V1"
    k = int(sys.argv[3]) if len(sys.argv) > 3 else 1
    seances = norm_all(importlib.import_module(module).SEANCES)

    doc = new_document()
    mode_emploi(doc)
    # k = 0 : le thème entier dans le nouvel ordre, pour voir le modèle appliqué d'un bout à l'autre
    choose = seances if k == 0 else [seances[k - 1]]
    for s in choose:
        idx = seances.index(s) + 1
        seance_lesona_aloha(doc, s, idx, len(seances), s.get("durees", (3, 14, 3)))
    s = choose[0]
    os.makedirs(OUT_DIR, exist_ok=True)
    out = os.path.join(OUT_DIR, out_name + ".docx")
    doc.save(out)
    print("Écrit : %s | %d octets | %d fiche(s) en ordre « leçon d\'abord » (module %s, 1re = %s)"
          % (out, os.path.getsize(out), len(choose), module, s["zana_taranja"]))


if __name__ == "__main__":
    main()
