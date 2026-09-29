# -*- coding: utf-8 -*-
"""Pure python-docx builder for 'ST T4 [PE] Fiche de preparation sujet
corriges J-Learn.docx'. Built from scratch (no existing T4 draft), matching
the visual/structural conventions established in the T6-T9 fiches
(verified against the final SVT T9 docx): Times New Roman body text,
seance marker in dark blue bold, titles in dark red bold, lesson section
headers in green bold, sub-headers in black bold, EXERCICES/CORRIGE
headings in dark blue bold.
"""
import docx
from docx.shared import Pt, RGBColor, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

FONT = "Times New Roman"

BLUE = RGBColor(0x1F, 0x4E, 0x79)
RED = RGBColor(0xC0, 0x00, 0x00)
GREEN = RGBColor(0x1E, 0x7B, 0x34)
BLACK = RGBColor(0x00, 0x00, 0x00)


def _set_cell_borders(cell, sides=("top", "left", "bottom", "right"), sz=4, color="000000"):
    tcPr = cell._tc.get_or_add_tcPr()
    borders = OxmlElement('w:tcBorders')
    for side in sides:
        el = OxmlElement(f'w:{side}')
        el.set(qn('w:val'), 'single')
        el.set(qn('w:sz'), str(sz))
        el.set(qn('w:space'), '0')
        el.set(qn('w:color'), color)
        borders.append(el)
    tcPr.append(borders)


def _shade_cell(cell, hexcolor):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = OxmlElement('w:shd')
    shd.set(qn('w:val'), 'clear')
    shd.set(qn('w:color'), 'auto')
    shd.set(qn('w:fill'), hexcolor)
    tcPr.append(shd)


def add_run(p, text, bold=False, size=11, color=None, italic=False, font=FONT):
    r = p.add_run(text)
    r.bold = bold
    r.italic = italic
    r.font.name = font
    r.font.size = Pt(size)
    if color is not None:
        r.font.color.rgb = color
    rPr = r._element.get_or_add_rPr()
    rFonts = rPr.find(qn('w:rFonts'))
    if rFonts is None:
        rFonts = OxmlElement('w:rFonts')
        rPr.append(rFonts)
    rFonts.set(qn('w:eastAsia'), font)
    return r


def blank(doc):
    doc.add_paragraph()


def para(doc, text, bold=False, size=11, color=None, align=None, italic=False, space_after=6):
    p = doc.add_paragraph()
    if align is not None:
        p.alignment = align
    p.paragraph_format.space_after = Pt(space_after)
    add_run(p, text, bold=bold, size=size, color=color, italic=italic)
    return p


def mixed_para(doc, parts, align=None, space_after=6):
    """parts: list of (text, bold) or (text, bold, color) tuples."""
    p = doc.add_paragraph()
    if align is not None:
        p.alignment = align
    p.paragraph_format.space_after = Pt(space_after)
    for part in parts:
        if len(part) == 2:
            text, bold = part
            color = None
        else:
            text, bold, color = part
        add_run(p, text, bold=bold, size=11, color=color)
    return p


# ---------------------------------------------------------------------------
# Front matter
# ---------------------------------------------------------------------------

def add_cover(doc, subject_line, level_line, programme_line, sub_line, country="Madagascar"):
    for _ in range(3):
        blank(doc)
    para(doc, "Collection J-Learn", bold=True, size=14, color=BLUE, align=WD_ALIGN_PARAGRAPH.CENTER)
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    add_run(p, subject_line, bold=True, size=28, color=RED)
    add_run(p, " " + level_line, bold=True, size=28, color=RED)
    para(doc, programme_line, size=13, align=WD_ALIGN_PARAGRAPH.CENTER, italic=True)
    para(doc, sub_line, size=12, align=WD_ALIGN_PARAGRAPH.CENTER)
    for _ in range(2):
        blank(doc)
    para(doc, country, bold=True, size=14, align=WD_ALIGN_PARAGRAPH.CENTER)
    doc.add_page_break()


def heading(doc, text):
    para(doc, text, bold=True, size=15, color=BLUE, space_after=10)


def add_avant_propos(doc, paragraphs):
    heading(doc, "AVANT-PROPOS")
    for t in paragraphs:
        para(doc, t)
    blank(doc)


def add_mode_emploi(doc, paragraphs):
    heading(doc, "MODE D'EMPLOI")
    for t in paragraphs:
        para(doc, t)
    blank(doc)
    para(doc, "Code couleur utilisé dans ce manuel :", bold=True)
    mixed_para(doc, [("Titre de leçon", True, RED)])
    mixed_para(doc, [("Sous-titres", True, GREEN)])
    mixed_para(doc, [("Mots clés de la leçon", True, BLUE)])
    mixed_para(doc, [("Corrigé des exercices", True, BLACK)])
    para(doc, "Texte courant : noir, police Times New Roman.")
    doc.add_page_break()


def add_global_toc(doc, units_flat, unit_meta):
    """units_flat: list of seance dicts from plan.flat_seances().
    unit_meta: list of (roman, title) tuples in order, used to print unit dividers.
    """
    heading(doc, "TABLE DES MATIÈRES")
    para(doc, "Avant-propos")
    para(doc, "Mode d'emploi")
    current_unit = None
    for s in units_flat:
        if s["unit_roman"] != current_unit:
            current_unit = s["unit_roman"]
            mixed_para(doc, [(f"UNITÉ {s['unit_roman']} — {s['unit_title']}", True, BLUE)])
        label = f"Séance {s['num']} — {s['title']}"
        para(doc, label, size=10.5)
    para(doc, "Annexes")
    para(doc, "Glossaire")
    doc.add_page_break()


# ---------------------------------------------------------------------------
# Unit divider
# ---------------------------------------------------------------------------

def add_unit_divider(doc, roman, title, ras_summary, valeurs, seances):
    """seances: list of dicts (num, title) belonging to this unit, for the
    local mini table of contents."""
    mixed_para(doc, [(f"UNITÉ {roman} — {title}", True, BLUE)], space_after=8)
    p = doc.add_paragraph()
    add_run(p, "Résultat d'apprentissage spécifique (PE T4) : ", bold=True)
    add_run(p, ras_summary, bold=False)
    p2 = doc.add_paragraph()
    add_run(p2, "Valeurs à véhiculer : ", bold=True)
    add_run(p2, valeurs, bold=False)
    blank(doc)
    table = doc.add_table(rows=1 + len(seances), cols=2)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    hdr = table.rows[0].cells
    hdr[0].text = "N°"
    hdr[1].text = "Séance"
    for cell in hdr:
        for p_ in cell.paragraphs:
            for r in p_.runs:
                r.bold = True
        _shade_cell(cell, "D9E2F3")
        _set_cell_borders(cell)
    for i, s in enumerate(seances, start=1):
        row = table.rows[i].cells
        row[0].text = str(s["num"])
        row[1].text = s["title"]
        for cell in row:
            _set_cell_borders(cell)
    doc.add_page_break()


# ---------------------------------------------------------------------------
# Seance fiche header block (meta table)
# ---------------------------------------------------------------------------

def add_seance_header(doc, num, total, title, theme, objectif, support, ras_theme,
                       valeurs, duree, documentation="Programme d'Études — Classe de T4 (ST), DCRP"):
    mixed_para(doc, [(f"SÉANCE {num} / {total}", True, BLUE)], space_after=4)
    mixed_para(doc, [(title, True, RED)], space_after=10)
    para(doc, "FICHE DE PRÉPARATION", bold=True, size=12, space_after=8)

    table = doc.add_table(rows=1, cols=2)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    left, right = table.rows[0].cells
    _set_cell_borders(left)
    _set_cell_borders(right)

    def fill(cell, lines):
        cell.text = ""
        p0 = cell.paragraphs[0]
        for i, (label, value) in enumerate(lines):
            p_ = p0 if i == 0 else cell.add_paragraph()
            add_run(p_, f"{label} : ", bold=True, size=10.5)
            add_run(p_, value, bold=False, size=10.5)

    fill(left, [
        ("Discipline", "Sciences et Technologie"),
        ("Thème", theme),
        ("Titre", title),
        ("Objectif spécifique", objectif),
        ("Documentation", documentation),
        ("Support et matériel", support),
    ])
    fill(right, [
        ("Date", "____________"),
        ("Classe", "T4"),
        ("Séance n°", f"{num} / {total}"),
        ("Durée", duree),
        ("Thématique / RAS", ras_theme),
        ("Valeurs à véhiculer", valeurs),
    ])
    blank(doc)


def add_deroulement_table(doc, rows):
    """rows: list of 6-tuples of strings matching columns:
    Etapes | Enseignant | Apprenants | Technique et Strategie | Support et Materiel | Observation
    The first row must be the column header, second row the sub-header
    ('', Enseignant, Apprenants, '', '', '')."""
    n = len(rows)
    table = doc.add_table(rows=n, cols=6)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    widths = [Cm(2.6), Cm(4.8), Cm(4.0), Cm(2.6), Cm(2.6), Cm(1.6)]
    for ridx, rowvals in enumerate(rows):
        cells = table.rows[ridx].cells
        for cidx, val in enumerate(rowvals):
            cells[cidx].width = widths[cidx]
            cells[cidx].text = ""
            p_ = cells[cidx].paragraphs[0]
            bold = ridx <= 1 or val.strip().startswith(("I.", "II.", "III."))
            add_run(p_, val, bold=bold, size=9.5)
            _set_cell_borders(cells[cidx])
            if ridx == 0:
                _shade_cell(cells[cidx], "D9E2F3")
    blank(doc)


# ---------------------------------------------------------------------------
# Lecon / exercices / corrige body
# ---------------------------------------------------------------------------

def lecon_title_repeat(doc, title):
    mixed_para(doc, [(title, True, RED)], space_after=6)
    blank(doc)


def section_header(doc, text):
    para(doc, text, bold=True, color=GREEN, space_after=6)


def sub_header(doc, text):
    para(doc, text, bold=True, color=BLACK, space_after=4)


def body_text(doc, text, space_after=6):
    para(doc, text, space_after=space_after)


def exercices_heading(doc):
    para(doc, "EXERCICES", bold=True, size=12, color=BLUE, space_after=8)


def exercise_item(doc, header, rest, space_after=6):
    """header: e.g. 'Exercice 1 (5 points)'; rest: e.g. ' — Classe ces aliments...'"""
    mixed_para(doc, [(header, True), (rest, False)], space_after=space_after)


def plain_item(doc, text, space_after=4):
    para(doc, text, space_after=space_after)


def total_line(doc, points):
    para(doc, f"TOTAL : {points} points", bold=True, size=10.5, space_after=10)


def corrige_heading(doc):
    para(doc, "CORRIGÉ", bold=True, size=12, color=BLUE, space_after=8)


def corrige_mixed(doc, parts, space_after=4):
    """parts: list of (text, bold) tuples, e.g. [('Ex. 1', True), (' — 1. ', False), ('énergétique', True), ...]"""
    mixed_para(doc, parts, space_after=space_after)


def add_image(doc, path, caption=None, width_cm=13.5):
    """Insert a centered picture with an optional italic caption underneath."""
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = p.add_run()
    run.add_picture(path, width=Cm(width_cm))
    p.paragraph_format.space_after = Pt(2)
    if caption:
        cap = doc.add_paragraph()
        cap.alignment = WD_ALIGN_PARAGRAPH.CENTER
        cap.paragraph_format.space_after = Pt(8)
        add_run(cap, caption, italic=True, size=9.5, color=BLUE)


def page_break(doc):
    doc.add_page_break()
