# -*- coding: utf-8 -*-
"""Génère les 3 Programmes d'Emploi (Lamim-pandalamiana) 2026-2027 :
R.P.I (Etat), F.C.E, V.O.I — FEFFI ANDRANOMAFANA.
Gabarits : formulaires officiels vierges 2026-2027 (photos PEC TESI 2026-2027 3/4/5.jpg).
Chiffres : listes manuscrites du 08/09/2026 (RPI, FCE) + PEC_TeSI_2026_2027_corrige.docx (VOI).
"""
import os
from docx import Document
from docx.shared import Pt, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_CELL_VERTICAL_ALIGNMENT
from docx.oxml.ns import qn

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "pe-2026-2027")
os.makedirs(OUT, exist_ok=True)

FONT = "Times New Roman"

IDENT = [
    ("MINISTERE DE L’EDUCATION NATIONALE", True),
    ("DREN : ALAOTRA MANGORO", True),
    ("CISCO : ANOSIBE AN’ALA", True),
    ("COMMUNE : TRATRAMARINA", True),
    ("ZAP : TRATRAMARINA", True),
    ("FOKONTANY : TRATRAMARINA", True),
    ("EPP : ANDRANOMAFANA", True),
    ("CODE : 506 090 012", False),
]


def fmt(n):
    return "N/A" if n == "N/A" else f"{n:,}".replace(",", " ")


def set_cell(cell, text, bold=False, size=9, align="left"):
    cell.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.CENTER
    cell.text = ""
    for i, line in enumerate(str(text).split("\n")):
        p = cell.paragraphs[0] if i == 0 else cell.add_paragraph()
        p.alignment = {"left": WD_ALIGN_PARAGRAPH.LEFT, "center": WD_ALIGN_PARAGRAPH.CENTER,
                       "right": WD_ALIGN_PARAGRAPH.RIGHT}[align]
        r = p.add_run(line)
        r.font.name = FONT
        r.font.size = Pt(size)
        r.font.bold = bold
        p.paragraph_format.space_after = Pt(0)
        p.paragraph_format.space_before = Pt(0)


def borders_off(table):
    pr = table._tbl.tblPr
    b = pr.makeelement(qn('w:tblBorders'), {})
    for edge in ('top', 'left', 'bottom', 'right', 'insideH', 'insideV'):
        b.append(pr.makeelement(qn(f'w:{edge}'),
                   {qn('w:val'): 'none', qn('w:sz'): '0', qn('w:space'): '0', qn('w:color'): 'auto'}))
    pr.append(b)


def header_block(doc, titre):
    t = doc.add_table(rows=1, cols=2)
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    borders_off(t)
    left, right = t.cell(0, 0), t.cell(0, 1)
    left.text = ""
    for i, (txt, bold) in enumerate(IDENT):
        p = left.paragraphs[0] if i == 0 else left.add_paragraph()
        r = p.add_run(txt)
        r.font.name = FONT
        r.font.size = Pt(10)
        r.font.bold = bold
        p.paragraph_format.space_after = Pt(2)
        p.paragraph_format.space_before = Pt(0)
    right.text = ""
    p = right.paragraphs[0]
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = p.add_run(titre)
    r.font.name = FONT; r.font.size = Pt(11); r.font.bold = True
    for txt in ("FEFFI : ANDRANOMAFANA", "Taom-pianarana 2026 - 2027"):
        p = right.add_paragraph()
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        r = p.add_run(txt)
        r.font.name = FONT; r.font.size = Pt(10); r.font.bold = True
        p.paragraph_format.space_before = Pt(6)


def build(fname, titre, avec_lahasa, groupes, loharano, total, notes_pied):
    """groupes : [(lahasa_ou_None, [(karazany, vidin, isany, totaly, fanam), ...]), ...]"""
    doc = Document()
    st = doc.styles["Normal"]
    st.font.name = FONT
    st.font.size = Pt(9)
    sec = doc.sections[0]
    sec.page_height = Cm(29.7); sec.page_width = Cm(21.0)
    sec.top_margin = Cm(1.5); sec.bottom_margin = Cm(1.5)
    sec.left_margin = Cm(1.5); sec.right_margin = Cm(1.5)

    header_block(doc, titre)

    flat = [(la, it) for la, items in groupes for it in items]
    n_data = len(flat)
    ncols = 8 if avec_lahasa else 7
    t = doc.add_table(rows=2 + n_data, cols=ncols)
    t.style = "Table Grid"
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    kc = 2 if avec_lahasa else 1  # index colonne KARAZANY

    # --- en-têtes (2 niveaux)
    set_cell(t.cell(0, 0), "N°", bold=True, align="center")
    if avec_lahasa:
        set_cell(t.cell(0, 1), "LAHASA", bold=True, align="center")
    set_cell(t.cell(0, kc), "KARAZANY", bold=True, align="center")
    set_cell(t.cell(0, kc + 1), "TETIBIDY", bold=True, align="center")
    t.cell(0, kc + 1).merge(t.cell(0, kc + 3))
    set_cell(t.cell(0, kc + 4), "LOHARANO\nNIAVIAN’NY\nVOLA", bold=True, align="center")
    set_cell(t.cell(0, kc + 5), "FANAMARIHANA", bold=True, align="center")
    t.cell(0, 0).merge(t.cell(1, 0))
    if avec_lahasa:
        t.cell(0, 1).merge(t.cell(1, 1))
    t.cell(0, kc).merge(t.cell(1, kc))
    t.cell(0, kc + 4).merge(t.cell(1, kc + 4))
    t.cell(0, kc + 5).merge(t.cell(1, kc + 5))
    set_cell(t.cell(1, kc + 1), "Vidin’ny iray", bold=True, align="center")
    set_cell(t.cell(1, kc + 2), "Isany", bold=True, align="center")
    set_cell(t.cell(1, kc + 3), "Totaly", bold=True, align="center")

    # --- lignes de données
    num = 0
    for r, (la, (kar, vid, isa, tot, fan)) in enumerate(flat):
        num += 1
        rr = 2 + r
        set_cell(t.cell(rr, 0), str(num), align="center")
        set_cell(t.cell(rr, kc), kar)
        set_cell(t.cell(rr, kc + 1), fmt(vid), align="center")
        set_cell(t.cell(rr, kc + 2), fmt(isa), align="center")
        set_cell(t.cell(rr, kc + 3), fmt(tot), align="center")
        set_cell(t.cell(rr, kc + 5), fan)

    # --- fusion colonne LAHASA par groupe
    if avec_lahasa:
        row = 2
        for la, items in groupes:
            start, end = row, row + len(items) - 1
            if end > start:
                t.cell(start, 1).merge(t.cell(end, 1))
            set_cell(t.cell(start, 1), la or "", size=8)
            row = end + 1

    # --- fusion colonne LOHARANO (une seule caisse par document)
    set_cell(t.cell(2, kc + 4), f"{loharano}\nST : {fmt(total)} Ar", bold=True, align="center")
    if n_data > 1:
        t.cell(2, kc + 4).merge(t.cell(2 + n_data - 1, kc + 4))

    # --- pied de page
    for txt in notes_pied:
        p = doc.add_paragraph()
        r = p.add_run(txt)
        r.font.name = FONT
        r.font.size = Pt(10)
        p.paragraph_format.space_before = Pt(10)

    path = os.path.join(OUT, fname)
    doc.save(path)
    return path


# ================= R.P.I (ETAT) — gabarit SANS colonne LAHASA =================
RPI = [
    ("Frais 3 Mandataires", 30000, 3, 90000, ""),
    ("Ciment", 52000, 2, 104000, ""),
    ("Sport Scolaire", 500, 140, 70000, ""),
    ("Angady PM", 5000, 1, 5000, "(1/enseignant)"),
    ("Colle de bureau PM", 1600, 6, 9600, "(1/enseignant)"),
    ("Wood Fix 500 g", 9000, 1, 9000, ""),
    ("Craie couleur RAFAFA", 6000, 10, 60000, ""),
    ("Craie blanche RAFAFA", 5000, 25, 125000, ""),
    ("Cahier GF 200p Lux", 5800, 14, 81200, "(2/classe)"),
    ("Cahier PF 200p Lux", 3600, 12, 43200, "(2/enseig)"),
    ("Chemise à dossier", 600, 60, 36000, "(10/ens)"),
    ("Gony 250 kg", 4000, 1, 4000, ""),
    ("Ciseaux PM", 1800, 6, 10800, "(1/ens)"),
    ("Éponge GN", 700, 21, 14700, "(3/classe)"),
    ("Enveloppe A4 Kraft", 500, 18, 9000, "(3/ens)"),
    ("Isorel", 58000, 2, 116000, ""),
    ("Marker Dollar 6B/6 rouges", 3000, 12, 36000, "(2/ens)"),
    ("Ody parasy sachet", 3000, 3, 9000, ""),
    ("Papier Velin rame", 25000, 2, 50000, ""),
    ("Pointes 5,6,7,8", 9000, 2, 18000, ""),
    ("Pinceau N°3", 2500, 2, 5000, ""),
    ("Râteau", 8500, 1, 8500, ""),
    ("Registre d’appel GM", 3500, 7, 24500, "(1/classe)"),
    ("Règle pour TN", 10500, 1, 10500, ""),
    ("Stylo Digno R/N/B", 700, 18, 12600, "(3/ens)"),
    ("Stylo Schneider Bleu", 1000, 18, 18000, "(3/ens)"),
    ("Stylo Schneider Rouge", 1000, 18, 18000, "(3/ens)"),
    ("Stylo Schneider Noir", 1000, 18, 18000, "(3/ens)"),
    ("Stylo Schneider Vert", 1000, 6, 6000, "(1/ens)"),
    ("Sifflet vy", 1800, 6, 10800, "(1/ens)"),
    ("Scotch GM", 6000, 6, 36000, "(1/ens)"),
    ("Tadin-tsaina", 400, 24, 9600, ""),
    ("Emballage blanc", 400, 36, 14400, "(6/ens)"),
    ("Badge", 2000, 1, 2000, ""),
    ("Porte-feuille", 300, 12, 3600, "(2/ens)"),
]
RPI_TOTAL = 1098000

# ================= F.C.E — gabarit AVEC colonne LAHASA =================
FCE = [
    ("Fampandehanana ny FEFFI", [
        ("Frais 3 Mandataires (saran-dalana)", 20000, 3, 60000, ""),
    ]),
    ("Fanatanterahana ny fianarana (Fianarana sy ny Ora Fanarenana « OF »)", [
        ("Ardoisine GN", 12000, 2, 24000, ""),
        ("Agrafe 24/6 boîte", 1800, 6, 10800, "(1/ens)"),
        ("Angady PM", 5000, 2, 10000, ""),
        ("Angady GM", 16000, 1, 16000, ""),
        ("Blanco Pen", 2000, 6, 12000, "(1/ens)"),
        ("Craie couleur RAFAFA", 6000, 10, 60000, ""),
        ("Craie blanche RAFAFA", 5000, 10, 50000, ""),
    ]),
    ("Tontolo ianarana / fitaovana", [
        ("Ciment", 52000, 1, 52000, ""),
    ]),
    ("Fividianana fitaovana ho an’ny mpampianatra", [
        ("Cahier de transmission", 11000, 1, 11000, ""),
        ("Cahier de départ", 8000, 1, 8000, ""),
        ("Cahier d’arrivée", 8000, 1, 8000, ""),
        ("Décamètre à 20 m", 18000, 1, 18000, ""),
        ("Masking Tape", 3000, 6, 18000, "(1/ens)"),
        ("Nappe de table lamba/m", 9000, 1, 9000, ""),
        ("Papier Velin rame", 25000, 1, 25000, ""),
        ("Enveloppe PM blanc", 100, 12, 1200, "(3/ens)"),
    ]),
]
FCE_TOTAL = 393000

# ================= V.O.I — gabarit AVEC colonne LAHASA =================
VOI = [
    ("Tontolo ianarana / fitaovana — Fanamboarana trano mpampianatra (logement)", [
        ("Andry", 6000, 60, 360000, ""),
        ("Chevron", 6000, 45, 270000, ""),
        ("Tôle 2,50", 40000, 30, 1200000, ""),
        ("Pointe tôle", 9000, 3, 27000, ""),
    ]),
    ("Kalitaom-pampianarana sy fianarana — Fandraisana mpampianatra", [
        ("Karamana mpampianatra", 1250000, 4, 5000000, ""),
    ]),
    ("Famonjena Journées Pédagogiques (JP) sy Sports scolaires", [
        ("Journées Pédagogiques", 72000, 5, 360000, ""),
        ("Sports scolaires", 50000, 5, 250000, ""),
        ("Hetsika « vokatra »", 35000, 2, 70000, ""),
        ("Hetsika VFF", 50000, 1, 50000, ""),
    ]),
    ("Fandoavana ny fiantohana « Pascoma »", [
        ("Pascoma", 200, 140, 28000, ""),
    ]),
    ("Fampisaafoanana an-tsekoly (Fambolena vomanga)", [
        ("Fambolena vomanga", "N/A", "N/A", "N/A", ""),
    ]),
]
VOI_TOTAL = 7615000

if __name__ == "__main__":
    p1 = build("PE_RPI_2026_2027.docx", "LAMIM-PANDANIANA CAISSE ECOLE ETAT", False,
               [(None, RPI)], "CAISSE ECOLE R.P.I (ETAT)", RPI_TOTAL, [
                   "Nofaranana tamin’ny tetibola : valo arivo sy sivy alina sy iray tapitrisa Ariary (Ar 1 098 000)",
                   "Natao teto Andranomafana, androany faha-…… Septambra 2026",
                   "Pièces jointes : Photocopie CIN 3 Mandataires",
                   "Visa du CHEF ZAP",
               ])
    p2 = build("PE_FCE_2026_2027.docx", "LAMIM-PANDANIANA CAISSE ECOLE FCE", True,
               FCE, "CAISSE ECOLE F.C.E", FCE_TOTAL, [
                   "Nofaranana tamin’ny tetibola : telo arivo sy sivy alina sy telo hetsy Ariary (Ar 393 000)",
                   "Natao teto Andranomafana, androany faha-…… Septambra 2026",
               ])
    p3 = build("PE_VOI_2026_2027.docx", "LAMIM-PANDANIANA VONDRON’OLONA IFOTONY", True,
               VOI, "VOI", VOI_TOTAL, [
                   "Nofaranana tamin’ny tetibola : dimy arivo sy iray alina sy enina hetsy sy fito tapitrisa Ariary (Ar 7 615 000)",
                   "Natao teto Andranomafana, androany faha-…… Septambra 2026",
               ])
    for p in (p1, p2, p3):
        print("OK ->", p)
