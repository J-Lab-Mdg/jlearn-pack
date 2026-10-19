# -*- coding: utf-8 -*-
"""Génération de l'ÉCHANTILLON V1 — Manuel Fiteny Malagasy T5 (1 seho complète).

But : figer les conventions (structure 3 grandes étapes, tableau 11x6 à ligne fusionnée,
minutage proportionnel I/II/III, place des corrigés, français réservé aux notes) AVANT de
produire les 19 autres fiches du pilote. Relure malagasy : propriétaire du projet.

Usage : python3 src/build_pilote.py   →  output/Echantillon_Malagasy_T5_V1.docx
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from builders import (new_document, para, seance_complet, sommaire_link,
                      PAGEBREAK, ROUGE, NOIR, VERT)
from data_pilote import SEANCES

MANUEL = "Manuel Fiteny Malagasy"
NIVEAU = "T5 — Cinquième"
OUT_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "output")

AVANT_PROPOS = [
    "Ity boky ity dia soran-boky fanampiana ho an'ny mpampianatra fiteny malagasy amin'ny kilasy "
    "T5 (Cinquième). Ny dingana ara-dalàna sy ny fotoana lanin'ny Programmes d'Études no fototra "
    "nipanganana azy.",
    "Mbola V1 ity : mety hisy hadisoana hita ao, ka mba hampafahana anao meloka amiko raha mahita "
    "hadisoana ianareo.",
    "Ireto lohahevitra ireto dia mamaritra an'ireo atao amin'ny taom-pianarana.",
    "Mankahery miarahaba rehetra ny mpanangona sy ny mpanara-tànana ny kanto sy ny "
    "fahaiza-manao teny nampiasaina.",
]

# Feuillet de validation (à retirer du boky farany)
NOTES = [
    ("Convention 1 — Structure", "Fiche = 3 grandes étapes : I. Famerenana / II. LESONA VAOVAO "
     "(6 sous-étapes : Fitarihan-tsaina, Fanolorana, Fandinihana, Famakafakana, Fandravonana, "
     "Fampiharana) / III. Tombana. Aucune durée sur les sous-étapes."),
    ("Convention 2 — Minutage", "Séance de 30 minitra : 5 / 20 / 5. La durée n'est inscrite que sur "
     "les trois lignes I, II et III du tableau de déroulement."),
    ("Convention 3 — Méta-table", "Faharetany laissée vide (décision projet) ; la durée est portée par "
     "les lignes I / II / III. Isan'ny seho et Seho n° / Total affichés."),
    ("Convention 4 — Corrigés", "VALINY placé après la leçon et le Fanazaran-tena, uniquement sur les "
     "mots-clés (bordeaux). Tombana = questions-réponses simples, sans nom de type."),
    ("Convention 5 — Sources", "Lahatsoratra, ohabolana et angano repris de recueils du domaine public "
     "(Houlder 1915, Dahle 1908, JICA/PAGEM) — la bibliographie figure en fin de manuel."),
    ("Convention 6 — Images", "Illustrations issues du pack J-Learn (schématique, jamais photo, jamais "
     "générées par IA pour le contenu officiel)."),
]


def couverture(doc):
    para(doc, "J-Learn — Manuels scolaires malagasy", 11, NOIR, False, True, None)
    para(doc, "", 20, NOIR, False, True, None)
    para(doc, MANUEL, 26, ROUGE, True, True, None)
    para(doc, NIVEAU, 18, ROUGE, True, True, None)
    para(doc, "", 20, NOIR, False, True, None)
    para(doc, "Soran-boky fanampiana ho an'ny mpampianatra", 13, NOIR, True, True, None)
    para(doc, "V1 — Échantillon de validation (1 seho : Vakiteny, lohahevitra 1)", 12, NOIR, False, True, None)
    para(doc, "", 20, NOIR, False, True, None)
    para(doc, "Avant-propos", 16, ROUGE, True, False, None)
    for line in AVANT_PROPOS:
        para(doc, line, 11, NOIR, False, False, None)
    para(doc, "", 12, NOIR, False, True, None)
    sommaire_link(doc, "bm_sommaire", "Tsisan-teny (Sommaire)")
    para(doc, "", 12, NOIR, False, True, None)
    para(doc, "Famaritana ny conventions — feuillet de validation, tsy ho ao amin'ny boky farany", 12, VERT, True, False, None)
    for titre, txt in NOTES:
        para(doc, f"{titre} — {txt}", 10, NOIR, False, False, None)


def sommaire(doc, seances):
    para(doc, "Tsisan-teny (Sommaire)", 16, ROUGE, True, False, None, bookmark="bm_sommaire")
    for t_ in seances:
        sommaire_link(doc, f"bm_seho{t_['n']}", f"TAKELA-PANOMANAN-DESONA {t_['n']} : {t_['lohateny']}")
        for lbl, bm in (("LESONA", "lesona"), ("FANAZARAN-TENA", "fanazarana")):
            sommaire_link(doc, f"bm_{bm}{t_['n']}", f"{t_['n']}. {lbl}", indent=1)
        sommaire_link(doc, "bm_sommaire", "← miverina amin'ny tsisan-teny", indent=1)


def main():
    doc = new_document()
    couverture(doc)
    doc.add_paragraph().add_run().add_break(PAGEBREAK)
    sommaire(doc, SEANCES)
    total = len(SEANCES)
    for s in SEANCES:
        seance_complet(doc, s, s["n"], total, s["durees"])
    os.makedirs(OUT_DIR, exist_ok=True)
    out = os.path.join(OUT_DIR, "Echantillon_Malagasy_T5_V1.docx")
    doc.save(out)
    print("Écrit :", out, "|", os.path.getsize(out), "octets")


for s in SEANCES:
    s.setdefault("durees", (5, 20, 5))

if __name__ == "__main__":
    main()
