# -*- coding: utf-8 -*-
"""Assembleur unique du Manuel Malagasy T5 — Traitement C (python-docx).

    python3 src/build.py data_pilote Echantillon_Malagasy_T5_V1
    python3 src/build.py data_loha1  Manuel_Malagasy_T5_Loha1_V1
    python3 src/build.py data_loha1  Manuel_Malagasy_T5_Loha1_V1 lesona   # la leçon d'abord

Le module de données doit exposer `SEANCES` (liste de dictionnaires, voir data_pilote.py).
La numérotation des fiches (`Seho n° N / TOTAL`, signets du sommaire) est calculée ici : les
données n'ont pas à connaître leur position dans le manuel.
Le « feuillet de validation » (conventions) n'est imprimé que pour l'échantillon.
"""
import importlib
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from docx.shared import Pt

from builders import (new_document, para, seance_complet, seance_lesona_aloha, sommaire_link, norm_all,
                      PAGEBREAK, ROUGE, NOIR, VERT, BLEU)
from sources import SOURCES, biblio

MANUEL = "Manuel Fiteny Malagasy"
NIVEAU = "T5 — Cinquième"
SRC = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.join(os.path.dirname(SRC), "output")

AVANT_PROPOS = [
    "Ity boky ity dia soran-boky fanampiana ho an'ny mpampianatra fiteny malagasy amin'ny kilasy "
    "T5 (Cinquième). Ny dingana ara-dalàna sy ny fotoana lanin'ny Programmes d'Études no fototra "
    "nipanganana azy.",
    "Mbola V1 ity : mety hisy hadisoana hita ao, ka mba hampafahana anao meloka amiko raha mahita "
    "hadisoana ianareo.",
    "Ireto lohahevitra ireto dia mamaritra an'ireo atao amin'ny taom-pianarana.",
    "Mankahery miarahaba rehetra ny mpanangona sy ny mpanara-tànana ny kanto sy ny fahaiza-manao "
    "teny nampiasaina.",
]

NOTES = [
    ("Convention 1 — Structure", "Fiche = 3 grandes étapes : I. Famerenana / II. LESONA VAOVAO "
     "(6 sous-étapes : Tari-dresaka, Fanolorana, Fandinihana, Famakafakana, Fandravonana, "
     "Fampiharana) / III. Tombana. Aucune durée sur les sous-étapes."),
    ("Convention 2 — Minutage", "Séance de 30 minitra : 5 / 20 / 5. Séance de 20 minitra : 3 / 14 / 3. "
     "La durée n'est inscrite que sur les trois lignes I, II et III."),
    ("Convention 3 — Méta-table", "Faharetany laissée vide (décision projet) ; la durée est portée par "
     "les lignes I / II / III. Isan'ny seho et Seho n° / Total affichés."),
    ("Convention 4 — Corrigés", "VALINY placé après la leçon et le Fanazaran-tena, uniquement sur les "
     "mots-clés (bordeaux). Tombana = questions-réponses simples, sans nom de type."),
    ("Convention 5 — Sources", "Lahatsoratra, ohabolana et angano : recueils du domaine public ou "
     "textes adaptés au niveau, cités en fin de manuel (ohabolana.org, Houlder 1915, Dahle 1908, "
     "JICA/PAGEM)."),
    ("Convention 6 — Typographie", "Alphabet malgache pour le lettrage (a b d e f g h i j k l m n o p "
     "r s t v z) : jamais de C, Q, U, W, X. Espace française avant « : » et « ? », comme dans le "
     "modèle FFMOM du dépôt."),
    ("Convention 7 — Images", "Aucune image dans ce pilote (décision) ; add_image() est prêt pour la "
     "suite, pack J-Learn uniquement, réduit à 800 px."),
]


def couverture(doc, notes=False):
    para(doc, "J-Learn — Manuels scolaires malagasy", 11, NOIR, False, True, None)
    para(doc, "", 20, NOIR, False, True, None)
    para(doc, MANUEL, 26, ROUGE, True, True, None)
    para(doc, NIVEAU, 18, ROUGE, True, True, None)
    para(doc, "", 20, NOIR, False, True, None)
    para(doc, "Soran-boky fanampiana ho an'ny mpampianatra", 13, NOIR, True, True, None)
    para(doc, "V1", 12, NOIR, False, True, None)
    para(doc, "", 20, NOIR, False, True, None)
    para(doc, "Avant-propos", 16, ROUGE, True, False, None)
    for line in AVANT_PROPOS:
        para(doc, line, 11, NOIR, False, False, None)
    if notes:
        para(doc, "", 12, NOIR, False, True, None)
        para(doc, "Famaritana ny conventions — feuillet de validation, tsy ho ao amin'ny boky farany",
             12, VERT, True, False, None)
        for titre, txt in NOTES:
            para(doc, f"{titre} — {txt}", 10, NOIR, False, False, None)
    para(doc, "", 12, NOIR, False, True, None)
    sommaire_link(doc, "bm_sommaire", "Fizahan-takila")


def sommaire(doc, seances):
    para(doc, "Fizahan-takila", 16, ROUGE, True, False, None, bookmark="bm_sommaire")
    for idx, s in enumerate(seances, start=1):
        sommaire_link(doc, f"bm_seho{idx}",
                      f"{idx}. {s['zana_taranja']} : {s['lohateny']}")
        for lbl, bm in (("LESONA", "lesona"), ("FANAZARAN-TENA", "fanazarana")):
            sommaire_link(doc, f"bm_{bm}{idx}", f"{idx}. {lbl}", indent=1)
        sommaire_link(doc, "bm_sommaire", "← miverina amin'ny fizahan-takila", indent=1)


OFFICIELS = [
    ("Programmes d'Études (PE) — Fiteny Malagasy, Kilasy T5", "document officiel de l'école"),
    ("Recueil de Fiches Pédagogiques (FRP) T5, fascicule 2", "document officiel de l'école"),
    ("Votoatiny sy Sahanasa : PE T5, p.10-21 (Fanehoan-kevitra am-bava, Vakiteny, Fiasan'ny teny, "
     "Asa an-tsoratra)", "extrait de travail : refs/PE_T5_votoatiny_malagasy.txt dans le dépôt"),
]


def loharano_final(doc, seances):
    """Annexe « LOHARANON-KEVITRA » : documents officiels + toutes les pages utilisées, une fois chacun."""
    doc.add_paragraph().add_run().add_break(PAGEBREAK)
    para(doc, "LOHARANON-KEVITRA", 16, ROUGE, True, False, None, bookmark="bm_loharano")
    para(doc, "1. Documents ara-dalàna nampiasaina", 12, VERT, True, False, None)
    for ref, prec in OFFICIELS:
        para(doc, "— " + ref, 11, NOIR, False, False, None, indent=0.4)
        para(doc, prec, 10, NOIR, False, True, None, indent=0.9)
    cles = [k for s in seances for k in (s.get("loharano") or [])]
    liste = biblio(cles)
    if liste:
        para(doc, "2. Loharany hafa nampiasaina", 12, VERT, True, False, None)
        for i, (ref, url) in enumerate(liste, start=1):
            para(doc, f"{i}. {ref}", 11, NOIR, True, False, None, indent=0.4)
            para(doc, url, 10, BLEU, False, False, None, indent=0.9)
    para(doc, "3. Fomba fanaovana ny loharano", 12, VERT, True, False, None)
    para(doc, "Ny ohabolana sy ny angano dia nalaina tao amin'ireo boky efa namoaka an-dprinty na "
              "navoaka an-tserasera, ka azo jerena manonteny araka ny rohy eo ambony. Ny lahatsoratra "
              "fanampiana natao ho an'ny kilasy T5 kosa dia nosoratana eto ihany; ny fanontaniana momba "
              "azy dia valiny azo ao amin'ny lahatsoratra.",
         11, NOIR, False, False, None)


def main():
    module = sys.argv[1] if len(sys.argv) > 1 else "data_loha1"
    out_name = sys.argv[2] if len(sys.argv) > 2 else "Manuel_Malagasy_T5_Pilote_V1"
    # 3e argument « lesona » : la leçon d'abord, la fiche de préparation après (ordre du fiche modèle)
    lesona_aloha = len(sys.argv) > 3 and sys.argv[3] == "lesona"
    seances = norm_all(importlib.import_module(module).SEANCES)
    notes = (module == "data_pilote")

    doc = new_document()
    couverture(doc, notes=notes)
    doc.add_paragraph().add_run().add_break(PAGEBREAK)
    sommaire(doc, seances)
    total = len(seances)
    for idx, s in enumerate(seances, start=1):
        if lesona_aloha:
            seance_lesona_aloha(doc, s, idx, total, s.get("durees", (5, 20, 5)))
        else:
            seance_complet(doc, s, idx, total, s.get("durees", (5, 20, 5)))
    loharano_final(doc, seances)
    os.makedirs(OUT_DIR, exist_ok=True)
    out = os.path.join(OUT_DIR, out_name + ".docx")
    doc.save(out)
    print(f"Écrit : {out} | {os.path.getsize(out)} octets | {total} fiche(s)")


if __name__ == "__main__":
    main()
