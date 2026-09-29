# -*- coding: utf-8 -*-
"""Assemble 'ST T4 [PE] Fiche de preparation sujet corriges J-Learn.docx'.
Currently builds: cover + avant-propos + mode d'emploi + full 67-seance
global TOC + UNITE I (seances 1-7) complete. Later units will be appended
by extending this script once content_unitN.py files exist.
"""
import os
import sys
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

import docx
import builder as B
from plan import UNITS, flat_seances, TOTAL_SEANCES
import content_unit1 as U1
import content_unit2 as U2
import content_unit3 as U3
import content_unit4 as U4

OUT = os.path.join(os.path.dirname(os.path.dirname(HERE)),
                    "ST T4 [PE] Fiche de preparation sujet corriges J-Learn.docx")

ALL_SEANCES = flat_seances()


def build_lecon(doc, s):
    B.lecon_title_repeat(doc, s["title"])
    if s.get("cover_image"):
        path, caption = s["cover_image"]
        if os.path.exists(path):
            B.add_image(doc, path, caption)
        else:
            print("WARNING: missing image, skipped:", path)
    for item in s["lecon"]:
        kind, text = item[0], item[1]
        if kind == "section":
            B.section_header(doc, text)
        elif kind == "sub":
            B.sub_header(doc, text)
        elif kind == "body":
            for para_text in text.split("\n"):
                B.body_text(doc, para_text)
        elif kind == "image":
            path, caption = text
            if os.path.exists(path):
                B.add_image(doc, path, caption)
            else:
                print("WARNING: missing image, skipped:", path)
    B.exercices_heading(doc)
    for header, rest in s["exercices"]:
        for i, line in enumerate(rest.split("\n")):
            if i == 0:
                B.exercise_item(doc, header, line)
            else:
                B.plain_item(doc, line)
    B.total_line(doc, s["total"])
    B.corrige_heading(doc)
    for parts in s["corrige_lines"]:
        B.corrige_mixed(doc, parts)


def build_revexam(doc, s):
    B.mixed_para(doc, [(s["sujet_title"], True, B.BLACK)], space_after=8)
    for header, rest in s["exercices"]:
        if header:
            B.para(doc, header, bold=True, space_after=2)
            for line in rest.split("\n"):
                B.plain_item(doc, line)
        else:
            for line in rest.split("\n"):
                B.plain_item(doc, line)
    B.total_line(doc, s["total"])
    B.corrige_heading(doc)
    for parts in s["corrige_lines"]:
        B.corrige_mixed(doc, parts)


def build_seance(doc, s, content):
    B.add_seance_header(
        doc, num=s["num"], total=TOTAL_SEANCES, title=s["title"],
        theme=content["theme"], objectif=content["objectif"], support=content["support"],
        ras_theme=content["ras_theme"], valeurs=content["valeurs"], duree=content["duree"],
    )
    B.add_deroulement_table(doc, content["deroulement"])
    if content.get("kind") in ("revision", "exam"):
        build_revexam(doc, content)
    else:
        build_lecon(doc, content)
    B.page_break(doc)


def main():
    doc = docx.Document()
    # slightly narrower margins to match a dense fiche layout
    from docx.shared import Cm
    for section in doc.sections:
        section.left_margin = Cm(2)
        section.right_margin = Cm(2)
        section.top_margin = Cm(1.5)
        section.bottom_margin = Cm(1.5)

    B.add_cover(
        doc,
        subject_line="ST",
        level_line="T4",
        programme_line="Programme d'Études — 9 thématiques",
        sub_line="Fiches de préparation · Leçons · Exercices corrigés · Sujets d'examen corrigés",
    )

    B.add_avant_propos(doc, [
        "Ce manuel de Sciences et Technologie pour la classe de T4 a été élaboré à partir du "
        "Programme d'Études officiel (DCRP, Ministère de l'Éducation Nationale).",
        "Chaque séance est composée d'une fiche de préparation, d'une leçon, d'exercices notés et de leur "
        "corrigé.",
        "Conformément au Programme d'Études, les séances privilégient une approche par démarche "
        "d'investigation, d'observation ou de conception technologique, adaptée au contexte malgache.",
        "Les séances sont regroupées en neuf unités, une par thématique du programme. Chaque unité se "
        "termine par une séance de révision puis un sujet d'examen corrigés.",
        "Pour bien utiliser ce manuel, se reporter au « Mode d'emploi » qui suit.",
    ])

    B.add_mode_emploi(doc, [
        "Comment est construite chaque séance ?",
        "I. Révision — questions simples sur la séance précédente, avec la réponse attendue (R.A.).",
        "II. Nouvelle leçon — six sous-étapes : 1. Mise en situation, 2. Présentation, 3. Observation, "
        "4. Analyse, 5. Synthèse, 6. Application.",
        "III. Évaluation — exercices écrits, avec corrigé.",
        "La durée de chaque grande étape n'est pas indiquée : elle est laissée à l'enseignant selon le "
        "contexte de la classe.",
        "Après la fiche de préparation viennent la page LEÇON (le contenu à retenir) puis la section "
        "EXERCICES et son CORRIGÉ.",
    ])

    B.add_global_toc(doc, ALL_SEANCES, UNITS)

    # ---- UNITE I ----
    roman, title, hours, valeurs, ras, seances_list = UNITS[0]
    unit_seances = [s for s in ALL_SEANCES if s["unit_roman"] == roman]
    B.add_unit_divider(doc, roman, title, ras, valeurs, unit_seances)

    contents = [U1.S1, U1.S2, U1.S3, U1.S4, U1.S5, U1.S6, U1.S7]
    for s, content in zip(unit_seances, contents):
        build_seance(doc, s, content)

    # ---- UNITE II ----
    roman, title, hours, valeurs, ras, seances_list = UNITS[1]
    unit_seances = [s for s in ALL_SEANCES if s["unit_roman"] == roman]
    B.add_unit_divider(doc, roman, title, ras, valeurs, unit_seances)

    contents = [U2.S1, U2.S2, U2.S3, U2.S4, U2.S5, U2.S6, U2.S7, U2.S8, U2.S9, U2.S10]
    for s, content in zip(unit_seances, contents):
        build_seance(doc, s, content)

    # ---- UNITE III ----
    roman, title, hours, valeurs, ras, seances_list = UNITS[2]
    unit_seances = [s for s in ALL_SEANCES if s["unit_roman"] == roman]
    B.add_unit_divider(doc, roman, title, ras, valeurs, unit_seances)

    contents = [U3.S1, U3.S2, U3.S3, U3.S4, U3.S5, U3.S6, U3.S7, U3.S8, U3.S9]
    for s, content in zip(unit_seances, contents):
        build_seance(doc, s, content)

    # ---- UNITE IV ----
    roman, title, hours, valeurs, ras, seances_list = UNITS[3]
    unit_seances = [s for s in ALL_SEANCES if s["unit_roman"] == roman]
    B.add_unit_divider(doc, roman, title, ras, valeurs, unit_seances)

    contents = [U4.S1, U4.S2, U4.S3, U4.S4, U4.S5, U4.S6]
    for s, content in zip(unit_seances, contents):
        build_seance(doc, s, content)

    doc.save(OUT)
    print("Saved:", OUT)
    print("Paragraphs:", len(doc.paragraphs), "Tables:", len(doc.tables))


if __name__ == "__main__":
    main()
