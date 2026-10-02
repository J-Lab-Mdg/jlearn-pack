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
BASE_SIZE = 13  # base font size (pt) applied throughout the document

BLUE = RGBColor(0x1F, 0x4E, 0x79)
RED = RGBColor(0xC0, 0x00, 0x00)
GREEN = RGBColor(0x1E, 0x7B, 0x34)
BLACK = RGBColor(0x00, 0x00, 0x00)


def _set_cell_borders(cell, sides=("top", "left", "bottom", "right"), sz=8, color="000000"):
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


def _set_table_borders(table, sz=8, color="000000"):
    """Add an explicit outer + inside border at the table level, as a
    fallback/reinforcement for the per-cell borders (some viewers render
    tcBorders inconsistently without a tblBorders fallback)."""
    tbl = table._tbl
    tblPr = tbl.tblPr
    borders = OxmlElement('w:tblBorders')
    for side in ("top", "left", "bottom", "right", "insideH", "insideV"):
        el = OxmlElement(f'w:{side}')
        el.set(qn('w:val'), 'single')
        el.set(qn('w:sz'), str(sz))
        el.set(qn('w:space'), '0')
        el.set(qn('w:color'), color)
        borders.append(el)
    # OOXML schema (CT_TblPrBase) requires tblBorders to appear BEFORE
    # tblLook (and shd/tblLayout/tblCellMar) in the tblPr child sequence.
    # python-docx auto-adds tblLook when the table is created; appending
    # tblBorders after it violates that order and some renderers silently
    # ignore an out-of-sequence border definition. Insert it in the correct
    # position instead of blindly appending at the end.
    tbl_look = tblPr.find(qn('w:tblLook'))
    if tbl_look is not None:
        tbl_look.addprevious(borders)
    else:
        tblPr.append(borders)


def _trim_cell_paragraphs(cell, keep=1):
    """After merging table cells, python-docx concatenates every paragraph
    from each of the original cells into the surviving cell. For a divider
    row where only the first original cell carried real text (the other
    cells were left with a single empty paragraph each), this leaves several
    empty trailing paragraphs that make the merged banner cell look far
    taller/emptier than intended. Remove all but the first `keep`
    paragraph(s) so the banner hugs its text."""
    paras = cell.paragraphs
    for p_ in paras[keep:]:
        p_._p.getparent().remove(p_._p)


def _shade_cell(cell, hexcolor):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = OxmlElement('w:shd')
    shd.set(qn('w:val'), 'clear')
    shd.set(qn('w:color'), 'auto')
    shd.set(qn('w:fill'), hexcolor)
    tcPr.append(shd)


def add_run(p, text, bold=False, size=BASE_SIZE, color=None, italic=False, font=FONT):
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


def para(doc, text, bold=False, size=BASE_SIZE, color=None, align=None, italic=False, space_after=6):
    p = doc.add_paragraph()
    if align is not None:
        p.alignment = align
    p.paragraph_format.space_after = Pt(space_after)
    add_run(p, text, bold=bold, size=size, color=color, italic=italic)
    return p


def mixed_para(doc, parts, align=None, space_after=6, size=BASE_SIZE):
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
        add_run(p, text, bold=bold, size=size, color=color)
    return p


# ---------------------------------------------------------------------------
# Bookmarks & internal hyperlinks (for a clickable table of contents)
# ---------------------------------------------------------------------------

_bookmark_id_counter = [0]


def add_bookmark(paragraph, bookmark_name):
    """Wrap the whole paragraph content in a bookmark, so it can be jumped
    to from an internal hyperlink elsewhere in the document."""
    _bookmark_id_counter[0] += 1
    bid = str(_bookmark_id_counter[0])
    start = OxmlElement('w:bookmarkStart')
    start.set(qn('w:id'), bid)
    start.set(qn('w:name'), bookmark_name)
    end = OxmlElement('w:bookmarkEnd')
    end.set(qn('w:id'), bid)
    paragraph._p.insert(0, start)
    paragraph._p.append(end)


def add_internal_hyperlink(doc, bookmark_name, text, size=BASE_SIZE, bold=False,
                            color=BLUE, underline=True, align=None, space_after=4):
    """Add a paragraph containing a clickable internal link (Ctrl+clic) that
    jumps to the given bookmark name."""
    p = doc.add_paragraph()
    if align is not None:
        p.alignment = align
    p.paragraph_format.space_after = Pt(space_after)
    hyperlink = OxmlElement('w:hyperlink')
    hyperlink.set(qn('w:anchor'), bookmark_name)
    run = OxmlElement('w:r')
    rPr = OxmlElement('w:rPr')
    rFonts = OxmlElement('w:rFonts')
    rFonts.set(qn('w:ascii'), FONT)
    rFonts.set(qn('w:hAnsi'), FONT)
    rFonts.set(qn('w:eastAsia'), FONT)
    rPr.append(rFonts)
    if bold:
        rPr.append(OxmlElement('w:b'))
    if underline:
        u = OxmlElement('w:u')
        u.set(qn('w:val'), 'single')
        rPr.append(u)
    color_el = OxmlElement('w:color')
    color_el.set(qn('w:val'), str(color))
    rPr.append(color_el)
    sz = OxmlElement('w:sz')
    sz.set(qn('w:val'), str(int(size * 2)))
    rPr.append(sz)
    run.append(rPr)
    t = OxmlElement('w:t')
    t.set(qn('xml:space'), 'preserve')
    t.text = text
    run.append(t)
    hyperlink.append(run)
    p._p.append(hyperlink)
    return p



# ---------------------------------------------------------------------------
# Front matter
# ---------------------------------------------------------------------------

def add_bleed_cover(doc, image_path, page_height_in=11.0):
    """Insert a full-page branded cover image (page 1), matching the
    illustrated covers used on the sibling J-Learn manuals (T6-T9).
    Assumes the current (first) section already has zero margins."""
    from docx.shared import Inches
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(0)
    run = p.add_run()
    run.add_picture(image_path, height=Inches(page_height_in))


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


def heading(doc, text, bookmark=None):
    p = para(doc, text, bold=True, size=15, color=BLUE, space_after=10)
    if bookmark:
        add_bookmark(p, bookmark)
    return p


def add_avant_propos(doc, paragraphs):
    heading(doc, "AVANT-PROPOS", bookmark="avant_propos")
    for t in paragraphs:
        para(doc, t)
    blank(doc)


def add_mode_emploi(doc, paragraphs):
    heading(doc, "MODE D'EMPLOI", bookmark="mode_emploi")
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
    Entries are clickable internal hyperlinks (Ctrl+clic) that jump straight
    to the corresponding bookmark ("seance_<num>") in the document.
    """
    heading(doc, "TABLE DES MATIÈRES")
    add_internal_hyperlink(doc, "avant_propos", "Avant-propos", bold=True)
    add_internal_hyperlink(doc, "mode_emploi", "Mode d'emploi", bold=True)
    current_unit = None
    for s in units_flat:
        if s["unit_roman"] != current_unit:
            current_unit = s["unit_roman"]
            mixed_para(doc, [(f"UNITÉ {s['unit_roman']} — {s['unit_title']}", True, BLUE)])
        label = f"Séance {s['num']} — {s['title']}"
        add_internal_hyperlink(doc, f"seance_{s['num']}", label, size=BASE_SIZE, space_after=3)
    doc.add_page_break()


# ---------------------------------------------------------------------------
# Unit divider
# ---------------------------------------------------------------------------

def add_unit_divider(doc, roman, title, ras_summary, valeurs, seances):
    """seances: list of dicts (num, title) belonging to this unit, for the
    local mini table of contents. Each row is a clickable internal link to
    the corresponding séance."""
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
    _set_table_borders(table)
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
        row[1].text = ""
        _add_hyperlink_in_cell(row[1], f"seance_{s['num']}", s["title"])
        for cell in row:
            _set_cell_borders(cell)
    doc.add_page_break()


def _add_hyperlink_in_cell(cell, bookmark_name, text, size=BASE_SIZE):
    """Append a clickable internal hyperlink run to the first paragraph of a
    table cell (used for mini tables of contents inside unit dividers)."""
    p = cell.paragraphs[0]
    hyperlink = OxmlElement('w:hyperlink')
    hyperlink.set(qn('w:anchor'), bookmark_name)
    run = OxmlElement('w:r')
    rPr = OxmlElement('w:rPr')
    rFonts = OxmlElement('w:rFonts')
    rFonts.set(qn('w:ascii'), FONT)
    rFonts.set(qn('w:hAnsi'), FONT)
    rFonts.set(qn('w:eastAsia'), FONT)
    rPr.append(rFonts)
    u = OxmlElement('w:u')
    u.set(qn('w:val'), 'single')
    rPr.append(u)
    color_el = OxmlElement('w:color')
    color_el.set(qn('w:val'), str(BLUE))
    rPr.append(color_el)
    sz = OxmlElement('w:sz')
    sz.set(qn('w:val'), str(int(size * 2)))
    rPr.append(sz)
    run.append(rPr)
    t = OxmlElement('w:t')
    t.set(qn('xml:space'), 'preserve')
    t.text = text
    run.append(t)
    hyperlink.append(run)
    p._p.append(hyperlink)


# ---------------------------------------------------------------------------
# Seance fiche header block (meta table)
# ---------------------------------------------------------------------------

def _skill_verb(objectif):
    """Extract a short 'habileté' (skill) label from the leading verb of an
    'objectif spécifique' sentence, e.g. 'identifier et nommer...' -> 'Identifier'."""
    first_word = objectif.strip().split(" ")[0].strip(",.;:")
    return first_word.capitalize() if first_word else "—"


def add_seance_header(doc, num, total, title, theme, objectif, support, ras_theme,
                       valeurs, duree, documentation="Programme d'Études — Classe de T4 (ST), DCRP"):
    p_num = mixed_para(doc, [(f"SÉANCE {num} / {total}", True, BLUE)], space_after=4)
    add_bookmark(p_num, f"seance_{num}")
    mixed_para(doc, [(title.upper(), True, RED)], space_after=10, size=18,
               align=WD_ALIGN_PARAGRAPH.CENTER)
    para(doc, "FICHE DE PRÉPARATION", bold=True, size=14, space_after=8,
         align=WD_ALIGN_PARAGRAPH.CENTER)

    table = doc.add_table(rows=1, cols=2)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    _set_table_borders(table)
    left, right = table.rows[0].cells
    _set_cell_borders(left)
    _set_cell_borders(right)

    def fill(cell, lines):
        cell.text = ""
        p0 = cell.paragraphs[0]
        for i, (label, value) in enumerate(lines):
            p_ = p0 if i == 0 else cell.add_paragraph()
            add_run(p_, f"{label} : ", bold=True, size=BASE_SIZE)
            add_run(p_, value, bold=False, size=BASE_SIZE)

    fill(left, [
        ("Discipline", "Sciences et Technologie"),
        ("Thème", theme),
        ("Titre", title),
        ("Habileté visée", _skill_verb(objectif)),
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
    The first row must be the column header ('Étapes', 'Déroulement de la
    leçon', 'Déroulement de la leçon', 'Technique et Stratégie', 'Support et
    Matériel', 'Observation') and the second row the sub-header ('',
    Enseignant, Apprenants, '', '', ''). The header is rendered with the
    'Déroulement de la leçon' cell merged horizontally over the Enseignant/
    Apprenants sub-columns, and the other header cells merged vertically
    over both header rows. Any later row whose six cells all repeat the
    same non-empty text (e.g. a 'II. NOUVELLE LEÇON' divider) is merged
    into a single full-width banner cell instead of six duplicate cells."""
    n = len(rows)
    table = doc.add_table(rows=n, cols=6)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    _set_table_borders(table)
    widths = [Cm(2.6), Cm(4.8), Cm(4.0), Cm(2.6), Cm(2.6), Cm(1.6)]
    divider_rows = []
    for ridx, rowvals in enumerate(rows):
        cells = table.rows[ridx].cells
        is_divider = (ridx > 1 and len(set(rowvals)) == 1 and rowvals[0].strip() != "")
        if is_divider:
            divider_rows.append(ridx)
        for cidx, val in enumerate(rowvals):
            # For a divider row (all 6 cells repeating the same banner text),
            # only the first cell keeps the text; the rest stay blank so the
            # post-merge cell doesn't repeat the banner text several times.
            # Same trick for the row-0 "Déroulement de la leçon" header,
            # which is duplicated across cols 1-2 before being merged.
            cell_text = val
            if is_divider and cidx > 0:
                cell_text = ""
            elif ridx == 0 and cidx == 2 and val == rowvals[1]:
                cell_text = ""
            cells[cidx].width = widths[cidx]
            cells[cidx].text = ""
            p_ = cells[cidx].paragraphs[0]
            if is_divider:
                p_.alignment = WD_ALIGN_PARAGRAPH.CENTER
            bold = ridx <= 1 or is_divider or val.strip().startswith(("I.", "II.", "III."))
            add_run(p_, cell_text, bold=bold, size=BASE_SIZE)
            _set_cell_borders(cells[cidx])
            if ridx == 0:
                _shade_cell(cells[cidx], "D9E2F3")
            if is_divider:
                _shade_cell(cells[cidx], "EFEFEF")

    # Merge the repeated "Déroulement de la leçon" header cell (row 0, cols 1-2).
    _trim_cell_paragraphs(table.cell(0, 1).merge(table.cell(0, 2)), keep=1)
    # Vertically merge the header cells that have no sub-header split.
    for col in (0, 3, 4, 5):
        _trim_cell_paragraphs(table.cell(0, col).merge(table.cell(1, col)), keep=1)
    # Merge full-width divider rows (e.g. "II. NOUVELLE LEÇON") into one cell.
    for ridx in divider_rows:
        merged = table.cell(ridx, 0).merge(table.cell(ridx, 5))
        _trim_cell_paragraphs(merged, keep=1)
    blank(doc)


# ---------------------------------------------------------------------------
# Lecon / exercices / corrige body
# ---------------------------------------------------------------------------

def lecon_title_repeat(doc, title):
    mixed_para(doc, [(title.upper(), True, RED)], space_after=6, size=18,
               align=WD_ALIGN_PARAGRAPH.CENTER)
    blank(doc)


def section_header(doc, text):
    para(doc, text, bold=True, color=GREEN, space_after=6)


def sub_header(doc, text):
    para(doc, text, bold=True, color=BLACK, space_after=4)


def body_text(doc, text, space_after=6):
    para(doc, text, space_after=space_after)


def body_mixed(doc, parts, space_after=6, size=BASE_SIZE):
    """parts: list of (text, italic) tuples — a plain-text sentence followed
    by an italicised example list, e.g. a statement ending in ' : ' then the
    concrete examples in italics (phrase first, example second)."""
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(space_after)
    for text, italic in parts:
        add_run(p, text, bold=False, size=size, italic=italic)
    return p


def exercices_heading(doc):
    para(doc, "EXERCICES", bold=True, size=12, color=BLUE, space_after=8)


def exercise_item(doc, header, rest, space_after=6):
    """header: e.g. 'Exercice 1 (5 points)'; rest: e.g. ' — Classe ces aliments...'"""
    mixed_para(doc, [(header, True), (rest, False)], space_after=space_after)


def plain_item(doc, text, space_after=4):
    para(doc, text, space_after=space_after)


def total_line(doc, points):
    para(doc, f"TOTAL : {points} points", bold=True, size=BASE_SIZE, space_after=10)


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
        add_run(cap, caption, italic=True, size=BASE_SIZE, color=BLUE)


def page_break(doc):
    doc.add_page_break()
