#!/usr/bin/env python3
"""Génère le premier livrable complet du manuel Mathématiques T4.

Le contenu provient de l'inventaire éditorial et de la banque de leçons du dossier.
Le moteur ne lit aucun contenu de l'ancien dossier manuel-math-t4.
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

from docx import Document
from docx.enum.section import WD_SECTION
from docx.enum.table import WD_CELL_VERTICAL_ALIGNMENT, WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK
from docx.enum.style import WD_STYLE_TYPE
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Cm, Inches, Pt, RGBColor

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src"
OUT = ROOT / "livrables" / "Manuel_Mathematiques_T4_JLearn_Officiel.docx"
sys.path.insert(0, str(SRC))
from content_bank import BANK  # noqa: E402

BLUE = "1F4E79"
DARK = "17365D"
PINK = "C2185B"
GREEN = "2E7D32"
TEAL = "00796B"
GOLD = "B7791F"
LIGHT_BLUE = "EAF3F8"
LIGHT_PINK = "FCEEF4"
LIGHT_GREEN = "EDF7ED"
LIGHT_GOLD = "FFF8E6"
GREY = "F2F4F7"
TEXT = "222222"


def shade(cell, fill):
    tc_pr = cell._tc.get_or_add_tcPr()
    shd = tc_pr.find(qn("w:shd"))
    if shd is None:
        shd = OxmlElement("w:shd")
        tc_pr.append(shd)
    shd.set(qn("w:fill"), fill)


def cell_border(cell, color="D0D7DE", size="6"):
    tc = cell._tc
    tc_pr = tc.get_or_add_tcPr()
    borders = tc_pr.first_child_found_in("w:tcBorders")
    if borders is None:
        borders = OxmlElement("w:tcBorders")
        tc_pr.append(borders)
    for edge in ("top", "left", "bottom", "right", "insideH", "insideV"):
        tag = "w:" + edge
        el = borders.find(qn(tag))
        if el is None:
            el = OxmlElement(tag)
            borders.append(el)
        el.set(qn("w:val"), "single")
        el.set(qn("w:sz"), size)
        el.set(qn("w:space"), "0")
        el.set(qn("w:color"), color)


def set_cell_text(cell, text, *, bold=False, color=TEXT, size=9.5, align=None):
    cell.text = ""
    p = cell.paragraphs[0]
    if align is not None:
        p.alignment = align
    r = p.add_run(str(text))
    r.bold = bold
    r.font.name = "Aptos"
    r.font.size = Pt(size)
    r.font.color.rgb = RGBColor.from_string(color)
    cell.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.CENTER


def set_cell_margins(cell, top=80, start=100, bottom=80, end=100):
    tc = cell._tc
    tc_pr = tc.get_or_add_tcPr()
    tc_mar = tc_pr.first_child_found_in("w:tcMar")
    if tc_mar is None:
        tc_mar = OxmlElement("w:tcMar")
        tc_pr.append(tc_mar)
    for m, v in (("top", top), ("start", start), ("bottom", bottom), ("end", end)):
        node = tc_mar.find(qn(f"w:{m}"))
        if node is None:
            node = OxmlElement(f"w:{m}")
            tc_mar.append(node)
        node.set(qn("w:w"), str(v))
        node.set(qn("w:type"), "dxa")


def add_table(doc, rows, *, header=True, widths=None, fill_header=BLUE, font_size=9.5):
    table = doc.add_table(rows=len(rows), cols=max(len(row) for row in rows))
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.style = "Table Grid"
    for i, row in enumerate(rows):
        for j in range(len(table.columns)):
            cell = table.cell(i, j)
            set_cell_margins(cell)
            text = row[j] if j < len(row) else ""
            is_header = header and i == 0
            set_cell_text(cell, text, bold=is_header, color="FFFFFF" if is_header else TEXT, size=font_size)
            shade(cell, fill_header if is_header else ("FFFFFF" if i % 2 else GREY))
            cell_border(cell)
    if widths:
        for row in table.rows:
            for j, width in enumerate(widths):
                if j < len(row.cells):
                    row.cells[j].width = Cm(width)
    doc.add_paragraph().paragraph_format.space_after = Pt(2)
    return table


def add_box(doc, title, body, *, fill=LIGHT_BLUE, title_color=BLUE):
    table = doc.add_table(rows=1, cols=1)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    cell = table.cell(0, 0)
    set_cell_margins(cell, top=120, start=150, bottom=120, end=150)
    shade(cell, fill)
    cell_border(cell, color=title_color, size="10")
    p = cell.paragraphs[0]
    p.paragraph_format.space_after = Pt(2)
    r = p.add_run(title)
    r.bold = True
    r.font.name = "Aptos Display"
    r.font.size = Pt(11)
    r.font.color.rgb = RGBColor.from_string(title_color)
    p2 = cell.add_paragraph(body)
    p2.paragraph_format.space_after = Pt(0)
    for r in p2.runs:
        r.font.name = "Aptos"
        r.font.size = Pt(10)
        r.font.color.rgb = RGBColor.from_string(TEXT)
    doc.add_paragraph().paragraph_format.space_after = Pt(2)
    return table


def add_bullets(doc, items, *, style="List Bullet", color=TEXT, size=10):
    for item in items:
        p = doc.add_paragraph(style=style)
        p.paragraph_format.space_after = Pt(1)
        r = p.add_run(item)
        r.font.name = "Aptos"
        r.font.size = Pt(size)
        r.font.color.rgb = RGBColor.from_string(color)


def add_numbered(doc, items, color=TEXT, size=10):
    for item in items:
        p = doc.add_paragraph(style="List Number")
        p.paragraph_format.space_after = Pt(2)
        r = p.add_run(item)
        r.font.name = "Aptos"
        r.font.size = Pt(size)
        r.font.color.rgb = RGBColor.from_string(color)


def add_heading(doc, text, level=1, color=BLUE):
    p = doc.add_heading(text, level=level)
    p.paragraph_format.keep_with_next = True
    for r in p.runs:
        r.font.name = "Aptos Display"
        r.font.color.rgb = RGBColor.from_string(color)
    return p


def add_label(doc, label, value, *, fill=LIGHT_BLUE, color=BLUE):
    table = doc.add_table(rows=1, cols=2)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    c1, c2 = table.rows[0].cells
    for c in (c1, c2):
        set_cell_margins(c, top=85, start=110, bottom=85, end=110)
        cell_border(c)
    shade(c1, fill)
    shade(c2, "FFFFFF")
    set_cell_text(c1, label, bold=True, color=color, size=9.5)
    set_cell_text(c2, value, color=TEXT, size=9.5)
    doc.add_paragraph().paragraph_format.space_after = Pt(1)
    return table


def add_page_field(paragraph):
    run = paragraph.add_run()
    fld_char1 = OxmlElement("w:fldChar")
    fld_char1.set(qn("w:fldCharType"), "begin")
    instr = OxmlElement("w:instrText")
    instr.set(qn("xml:space"), "preserve")
    instr.text = "PAGE"
    fld_char2 = OxmlElement("w:fldChar")
    fld_char2.set(qn("w:fldCharType"), "end")
    run._r.append(fld_char1)
    run._r.append(instr)
    run._r.append(fld_char2)


def configure_document(doc):
    sec = doc.sections[0]
    sec.top_margin = Cm(1.65)
    sec.bottom_margin = Cm(1.5)
    sec.left_margin = Cm(1.7)
    sec.right_margin = Cm(1.7)
    sec.header_distance = Cm(0.7)
    sec.footer_distance = Cm(0.7)

    styles = doc.styles
    normal = styles["Normal"]
    normal.font.name = "Aptos"
    normal.font.size = Pt(10)
    normal.font.color.rgb = RGBColor.from_string(TEXT)
    normal.paragraph_format.space_after = Pt(4)
    normal.paragraph_format.line_spacing = 1.05
    for name, size, color in (("Title", 29, DARK), ("Heading 1", 18, BLUE), ("Heading 2", 14, PINK), ("Heading 3", 11, TEAL)):
        st = styles[name]
        st.font.name = "Aptos Display"
        st.font.size = Pt(size)
        st.font.bold = True
        st.font.color.rgb = RGBColor.from_string(color)
        st.paragraph_format.space_before = Pt(8)
        st.paragraph_format.space_after = Pt(4)
        st.paragraph_format.keep_with_next = True

    if "Small Note" not in styles:
        st = styles.add_style("Small Note", WD_STYLE_TYPE.PARAGRAPH)
        st.font.name = "Aptos"
        st.font.size = Pt(8)
        st.font.italic = True
        st.font.color.rgb = RGBColor.from_string("5B6573")
    if "Cover Subtitle" not in styles:
        st = styles.add_style("Cover Subtitle", WD_STYLE_TYPE.PARAGRAPH)
        st.font.name = "Aptos"
        st.font.size = Pt(14)
        st.font.color.rgb = RGBColor.from_string(BLUE)

    header = sec.header.paragraphs[0]
    header.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    rr = header.add_run("J-Learn · Mathématiques T4")
    rr.font.name = "Aptos"
    rr.font.size = Pt(8)
    rr.font.color.rgb = RGBColor.from_string("5B6573")
    footer = sec.footer.paragraphs[0]
    footer.alignment = WD_ALIGN_PARAGRAPH.CENTER
    fr = footer.add_run("Manuel construit à partir du PE T4 et du FRP T4 · page ")
    fr.font.name = "Aptos"
    fr.font.size = Pt(8)
    fr.font.color.rgb = RGBColor.from_string("5B6573")
    add_page_field(footer)


def add_cover(doc):
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p.paragraph_format.space_before = Pt(70)
    r = p.add_run("MATHÉMATIQUES")
    r.font.name = "Aptos Display"
    r.font.size = Pt(34)
    r.font.bold = True
    r.font.color.rgb = RGBColor.from_string(BLUE)
    p2 = doc.add_paragraph()
    p2.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = p2.add_run("T4")
    r.font.name = "Aptos Display"
    r.font.size = Pt(66)
    r.font.bold = True
    r.font.color.rgb = RGBColor.from_string(PINK)
    p3 = doc.add_paragraph(style="Cover Subtitle")
    p3.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p3.add_run("Manuel de l’apprenant et fiches de préparation enseignant")
    doc.add_paragraph()
    add_box(doc, "PROGRESSION OFFICIELLE", "6 composantes · 198 heures · 57 leçons structurées", fill=LIGHT_GOLD, title_color=GOLD)
    add_box(doc, "SOURCES DE CONTENU", "PE T4.pdf et FRP T4 Fascicule 2.pdf\nLa présentation reprend la logique validée pour le manuel T5.", fill=LIGHT_BLUE, title_color=BLUE)
    p4 = doc.add_paragraph()
    p4.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p4.paragraph_format.space_before = Pt(50)
    r = p4.add_run("Édition de travail J-Learn · 2026")
    r.font.name = "Aptos"
    r.font.size = Pt(10)
    r.font.color.rgb = RGBColor.from_string("5B6573")
    doc.add_page_break()


def add_toc(doc, units):
    add_heading(doc, "Sommaire", 1, BLUE)
    p = doc.add_paragraph("Le manuel suit les six composantes du programme officiel. Chaque leçon contient sa fiche de préparation, sa trace apprenant, ses exercices et son corrigé.")
    p.paragraph_format.space_after = Pt(8)
    for unit in units:
        p = doc.add_paragraph()
        p.paragraph_format.left_indent = Cm(0.2)
        r = p.add_run(f"{unit['id']} · {unit['nom']} — {unit['duree_officielle_heures']} heures")
        r.bold = True
        r.font.name = "Aptos Display"
        r.font.size = Pt(12)
        r.font.color.rgb = RGBColor.from_string(BLUE)
        for lesson in unit["lecons"]:
            q = doc.add_paragraph(style="List Bullet")
            q.paragraph_format.left_indent = Cm(1)
            rr = q.add_run(f"{lesson['id']} — {lesson['titre']}")
            rr.font.size = Pt(8.5)
            rr.font.color.rgb = RGBColor.from_string(TEXT)
    doc.add_page_break()


def add_unit_intro(doc, unit):
    add_heading(doc, f"{unit['id']} · {unit['nom']}", 1, BLUE)
    add_label(doc, "Durée officielle", f"{unit['duree_officielle_heures']} heures", fill=LIGHT_BLUE, color=BLUE)
    add_label(doc, "Valeurs à développer", ", ".join(unit["valeurs"]), fill=LIGHT_GOLD, color=GOLD)
    add_box(doc, "Fil directeur", f"Cette unité couvre les contenus de la composante {unit['nom']} du PE T4. Les activités partent de la manipulation, conduisent à la représentation, puis à la formulation et à l’entraînement.", fill=LIGHT_GREEN, title_color=GREEN)


def add_preparation(doc, unit, lesson, data):
    add_heading(doc, "1. Fiche de préparation enseignant", 2, PINK)
    add_label(doc, "Référence de la fiche", lesson["id"], fill=LIGHT_PINK, color=PINK)
    add_label(doc, "Résultat visé", lesson["objectif"], fill=LIGHT_BLUE, color=BLUE)
    add_label(doc, "Contenu", lesson["titre"], fill=LIGHT_BLUE, color=BLUE)
    add_label(doc, "Matériel et supports", "; ".join(lesson["supports"]), fill=LIGHT_GREEN, color=GREEN)
    add_box(doc, "Mise en situation", lesson["activite"], fill=LIGHT_GOLD, title_color=GOLD)
    add_heading(doc, "Déroulement proposé", 3, TEAL)
    steps = [
        ("1 · Observer et questionner", "Présenter la situation ou l’objet. Faire verbaliser ce que les apprenants voient, savent déjà et cherchent à déterminer."),
        ("2 · Manipuler ou représenter", f"Organiser la manipulation avec : {', '.join(lesson['supports'])}. Faire produire un dessin, un tableau, une construction ou une écriture mathématique."),
        ("3 · Mettre en commun", "Comparer les procédures, faire justifier les choix et corriger le vocabulaire sans effacer les démarches pertinentes."),
        ("4 · Formaliser", "Construire la trace écrite de la leçon à partir des observations et de l’exemple guidé ci-dessous."),
        ("5 · S’entraîner et évaluer", "Faire réaliser les exercices dans l’ordre. Repérer l’erreur, demander la justification et reprendre avec le support si nécessaire."),
    ]
    add_table(doc, [["Étape", "Actions de l’enseignant et des apprenants"]] + steps, widths=[4.6, 12.7], fill_header=TEAL, font_size=9)
    add_heading(doc, "Évaluation formative", 3, TEAL)
    add_bullets(doc, [
        f"L’apprenant peut expliquer la notion de « {lesson['titre'].lower()} » avec ses propres mots.",
        "L’apprenant représente ou calcule avant de donner une réponse finale.",
        "L’apprenant vérifie son résultat avec la propriété, l’instrument ou le support adapté.",
    ], size=9.5)
    p = doc.add_paragraph(style="Small Note")
    p.add_run("Sources de contenu : PE T4 ").bold = True
    p.add_run(lesson["sources"]["pe"] + "; FRP T4 " + lesson["sources"]["frp"] + ".")


def add_learner_lesson(doc, lesson, data):
    add_heading(doc, "2. Leçon de l’apprenant", 2, BLUE)
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(4)
    r = p.add_run(lesson["titre"])
    r.bold = True
    r.font.name = "Aptos Display"
    r.font.size = Pt(16)
    r.font.color.rgb = RGBColor.from_string(BLUE)
    add_box(doc, "Je retiens", "\n".join("• " + x for x in data["retain"]), fill=LIGHT_BLUE, title_color=BLUE)
    add_box(doc, "Exemple guidé", data["example"], fill=LIGHT_GREEN, title_color=GREEN)
    add_heading(doc, "Support visuel ou de manipulation", 3, TEAL)
    add_table(doc, data["visual"], widths=None, fill_header=TEAL, font_size=9)
    p = doc.add_paragraph("Je peux expliquer ma réponse avec des mots, un dessin, un tableau, un instrument ou une opération. Je n’oublie pas l’unité lorsque la situation en demande une.")
    p.style = "Small Note"


def add_exercises(doc, data):
    add_heading(doc, "3. Exercices", 2, PINK)
    p = doc.add_paragraph("Travaille d’abord seul, puis compare ta méthode avec celle d’un camarade. Les exercices reprennent directement l’objectif de la fiche.")
    p.paragraph_format.space_after = Pt(5)
    add_numbered(doc, data["exercises"], size=10.5)


def add_corrections(doc, data):
    add_heading(doc, "4. Corrigé", 2, GREEN)
    add_numbered(doc, data["corrections"], color=GREEN, size=10.5)
    add_box(doc, "Auto-vérification", "Ai-je répondu à la question ? Ai-je posé ou représenté le calcul ? Ai-je respecté l’unité, le signe, l’ordre ou l’instrument demandé ?", fill=LIGHT_GOLD, title_color=GOLD)


def add_lesson(doc, unit, lesson, index):
    if index > 0:
        doc.add_page_break()
    data = BANK[lesson["id"]]
    add_heading(doc, f"{lesson['id']} · {lesson['titre']}", 1, PINK)
    add_preparation(doc, unit, lesson, data)
    add_learner_lesson(doc, lesson, data)
    add_exercises(doc, data)
    add_corrections(doc, data)


def load_inventory():
    with (ROOT / "inventaire_lecons.json").open(encoding="utf-8") as f:
        return json.load(f)


def validate(inventory):
    ids = [l["id"] for u in inventory["unites"] for l in u["lecons"]]
    missing = [i for i in ids if i not in BANK]
    extra = [i for i in BANK if i not in ids]
    if missing or extra:
        raise ValueError(f"Banque incohérente : manquants={missing}, en trop={extra}")
    assert len(ids) == 57, len(ids)
    assert sum(u["duree_officielle_heures"] for u in inventory["unites"]) == 198


def main():
    inventory = load_inventory()
    validate(inventory)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    doc = Document()
    configure_document(doc)
    add_cover(doc)
    add_toc(doc, inventory["unites"])
    for unit_index, unit in enumerate(inventory["unites"]):
        if unit_index:
            doc.add_page_break()
        add_unit_intro(doc, unit)
        for lesson_index, lesson in enumerate(unit["lecons"]):
            add_lesson(doc, unit, lesson, lesson_index)
    doc.add_page_break()
    add_heading(doc, "Références et contrôle éditorial", 1, BLUE)
    add_box(doc, "Références officielles", "PE T4.pdf, pages imprimées 67–77 ; FRP T4 Fascicule 2.pdf, pages imprimées 5–54. La numérotation des composantes suit le PE lorsque le FRP présente une incohérence.", fill=LIGHT_BLUE, title_color=BLUE)
    add_box(doc, "Contrôle de cohérence", "57 identifiants uniques sont présents. Chaque identifiant relie une fiche de préparation, une leçon, trois exercices et un corrigé dans ce document. Les durées officielles totalisent 198 heures.", fill=LIGHT_GREEN, title_color=GREEN)
    doc.save(OUT)
    print(f"Écrit : {OUT} ({OUT.stat().st_size} octets)")


if __name__ == "__main__":
    main()
