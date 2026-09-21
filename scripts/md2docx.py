#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Convertit le manuel Markdown en .docx Word.

Usage :
    python3 scripts/md2docx.py Manuel-SVT-T9-complet.md Manuel-SVT-T9-complet.docx

Le convertisseur est volontairement limité au sous-ensemble de Markdown
effectivement employé dans le manuel — il n'a pas vocation à être général :

  # ## ### ####     titres
  | a | b |          tableaux, y compris lignes à cellules fusionnées (`||||||`)
  > citation         encadré (note à l'enseignant, avertissement)
  - puce             liste à puces
  1. item            liste numérotée
  ---                saut de section
  **gras** *ital*    formatage en ligne
  `code`             police à chasse fixe
  [texte](#ancre)    lien interne : seul le texte est conservé
  <br>               saut de ligne dans une cellule
  <span color>       couleurs J-Learn (#C00000 titre leçon, #1E7B34 sous-titre)

Les tableaux de déroulement (6 colonnes) reçoivent une largeur par colonne
adaptée à une page A4 paysage ; les autres tableaux sont laissés en
répartition automatique.
"""

import os
import re
import sys

from docx import Document
from docx.enum.section import WD_ORIENT
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Cm, Pt, RGBColor

# Couleurs du gabarit J-Learn
ROUGE_LECON = RGBColor(0xC0, 0x00, 0x00)
VERT_SOUS_TITRE = RGBColor(0x1E, 0x7B, 0x34)
GRIS_ENCADRE = "F2F2F2"
GRIS_ENTETE = "D9D9D9"

# Largeurs (cm) du tableau de déroulement à 6 colonnes, en A4 paysage
LARGEURS_DEROULEMENT = [2.6, 7.2, 6.0, 3.4, 3.2, 1.8]

# Largeur d'affichage des illustrations, en cm (A4 paysage, marges 1,5 cm)
LARGEUR_IMAGE_CM = 12.0

RE_SPAN = re.compile(r'<span style="color:#([0-9A-Fa-f]{6})">(.*?)</span>', re.S)
RE_LIEN = re.compile(r'\[([^\]]+)\]\([^)]+\)')
RE_INLINE = re.compile(r'(\*\*.+?\*\*|(?<!\*)\*(?!\*).+?(?<!\*)\*(?!\*)|`[^`]+`)', re.S)


def bord_cellule(cellule, couleur="999999", taille="4"):
    """Applique une bordure fine sur les quatre côtés d'une cellule."""
    tcPr = cellule._tc.get_or_add_tcPr()
    borders = OxmlElement("w:tcBorders")
    for cote in ("top", "left", "bottom", "right"):
        el = OxmlElement(f"w:{cote}")
        el.set(qn("w:val"), "single")
        el.set(qn("w:sz"), taille)
        el.set(qn("w:color"), couleur)
        borders.append(el)
    tcPr.append(borders)


def fond_cellule(cellule, couleur_hex):
    tcPr = cellule._tc.get_or_add_tcPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:val"), "clear")
    shd.set(qn("w:fill"), couleur_hex)
    tcPr.append(shd)


def ajouter_texte_riche(paragraphe, texte, gras_par_defaut=False):
    """Écrit `texte` dans `paragraphe` en interprétant le formatage en ligne."""
    texte = RE_LIEN.sub(r"\1", texte)

    # Les <span> colorés encadrent toujours un titre entier dans ce manuel :
    # on les traite avant le reste pour fixer la couleur de tout le fragment.
    couleur = None
    m = RE_SPAN.search(texte)
    if m:
        couleur = RGBColor.from_string(m.group(1).upper())
        texte = RE_SPAN.sub(r"\2", texte)

    for fragment in RE_INLINE.split(texte):
        if not fragment:
            continue
        gras, italique, code = gras_par_defaut, False, False
        if fragment.startswith("**") and fragment.endswith("**") and len(fragment) > 4:
            fragment, gras = fragment[2:-2], True
        elif fragment.startswith("*") and fragment.endswith("*") and len(fragment) > 2:
            fragment, italique = fragment[1:-1], True
        elif fragment.startswith("`") and fragment.endswith("`") and len(fragment) > 2:
            fragment, code = fragment[1:-1], True

        for i, ligne in enumerate(fragment.split("<br>")):
            if i:
                paragraphe.add_run().add_break()
            if not ligne:
                continue
            run = paragraphe.add_run(ligne)
            run.bold = gras
            run.italic = italique
            if code:
                run.font.name = "Consolas"
                run.font.size = Pt(9)
            if couleur is not None:
                run.font.color.rgb = couleur


def decouper_ligne_tableau(ligne):
    """`| a | b |` -> ['a', 'b'] en conservant les cellules vides."""
    ligne = ligne.strip()
    if ligne.startswith("|"):
        ligne = ligne[1:]
    if ligne.endswith("|"):
        ligne = ligne[:-1]
    return [c.strip() for c in ligne.split("|")]


def est_separateur(ligne):
    return bool(re.match(r'^\|[\s\-:|]+\|?\s*$', ligne)) and "-" in ligne


def fusionner_ligne(table, index_ligne, nb_colonnes):
    """Fusionne toutes les cellules d'une ligne (en-tête de section du tableau)."""
    cellules = table.rows[index_ligne].cells
    fusionnee = cellules[0]
    for c in cellules[1:nb_colonnes]:
        fusionnee = fusionnee.merge(c)
    return fusionnee


def ajouter_tableau(doc, lignes):
    """Construit un tableau Word à partir des lignes Markdown collectées."""
    donnees = [decouper_ligne_tableau(l) for l in lignes if not est_separateur(l)]
    if not donnees:
        return
    nb_col = max(len(r) for r in donnees)
    donnees = [r + [""] * (nb_col - len(r)) for r in donnees]

    entete_vide = all(c == "" for c in donnees[0])
    table = doc.add_table(rows=len(donnees), cols=nb_col)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.style = "Table Grid"
    table.autofit = True

    deroulement = nb_col == 6 and any(
        "Étapes" in c or "ÉTAPES" in c for c in donnees[0]
    )
    if deroulement:
        for ligne in table.rows:
            for i, cellule in enumerate(ligne.cells):
                cellule.width = Cm(LARGEURS_DEROULEMENT[i])

    for i, rangee in enumerate(donnees):
        # Ligne à cellules fusionnées : le contenu tient dans la 1re cellule,
        # les suivantes sont vides (écriture `| ... | ||||||` du Markdown).
        contenu = [c for c in rangee if c]
        if len(contenu) == 1 and rangee[0] and all(c == "" for c in rangee[1:]) and i > 0:
            cellule = fusionner_ligne(table, i, nb_col)
            cellule.paragraphs[0].text = ""
            p = cellule.paragraphs[0]
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            ajouter_texte_riche(p, rangee[0])
            fond_cellule(cellule, GRIS_ENTETE)
            bord_cellule(cellule)
            continue

        for j, valeur in enumerate(rangee):
            cellule = table.cell(i, j)
            cellule.text = ""
            p = cellule.paragraphs[0]
            p.paragraph_format.space_before = Pt(1)
            p.paragraph_format.space_after = Pt(1)
            ajouter_texte_riche(p, valeur, gras_par_defaut=(i == 0 and not entete_vide))
            for run in p.runs:
                run.font.size = Pt(8.5)
            if i == 0 and not entete_vide:
                fond_cellule(cellule, GRIS_ENTETE)
            bord_cellule(cellule)

    doc.add_paragraph()


def ajouter_citation(doc, lignes):
    """Encadré gris sur fond clair : notes à l'enseignant, avertissements.

    Les citations de plusieurs lignes (étapes a/b/c, mécanismes numérotés)
    gardent un paragraphe par ligne : les fusionner en un seul bloc effacerait
    une mise en forme qui porte du sens.
    """
    contenu = [l.lstrip(">").strip() for l in lignes]
    contenu = [l for l in contenu if l]
    if not contenu:
        return

    table = doc.add_table(rows=1, cols=1)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    cellule = table.cell(0, 0)
    cellule.text = ""

    for index, ligne in enumerate(contenu):
        p = cellule.paragraphs[0] if index == 0 else cellule.add_paragraph()
        p.paragraph_format.space_before = Pt(3 if index == 0 else 1)
        p.paragraph_format.space_after = Pt(3 if index == len(contenu) - 1 else 1)
        ajouter_texte_riche(p, ligne)
        for run in p.runs:
            run.font.size = Pt(9.5)

    fond_cellule(cellule, GRIS_ENCADRE)
    bord_cellule(cellule, couleur="BFBFBF")
    doc.add_paragraph()


def convertir(chemin_md, chemin_docx):
    texte = open(chemin_md, encoding="utf-8").read()
    lignes = texte.split("\n")

    doc = Document()

    # Mise en page alignee sur le document d'origine : A4 PORTRAIT, Times New
    # Roman. Le paysage avait ete choisi pour le confort des tableaux a six
    # colonnes, mais il s'ecarte du gabarit officiel des fiches de preparation.
    section = doc.sections[0]
    section.orientation = WD_ORIENT.PORTRAIT
    section.page_width = Cm(21.0)
    section.page_height = Cm(29.7)
    for marge in ("left_margin", "right_margin"):
        setattr(section, marge, Cm(1.5))
    for marge in ("top_margin", "bottom_margin"):
        setattr(section, marge, Cm(1.8))

    style = doc.styles["Normal"]
    style.font.name = "Times New Roman"
    style.font.size = Pt(11)
    # Sans cette ligne, Word retombe sur la police par defaut pour les
    # caracteres non latins et l'unification visuelle echoue.
    rpr = style.element.get_or_add_rPr()
    rfonts = rpr.get_or_add_rFonts()
    for att in (qn("w:ascii"), qn("w:hAnsi"), qn("w:cs"), qn("w:eastAsia")):
        rfonts.set(att, "Times New Roman")

    i = 0
    tampon_tableau = []
    tampon_citation = []

    def vider():
        nonlocal tampon_tableau, tampon_citation
        if tampon_tableau:
            ajouter_tableau(doc, tampon_tableau)
            tampon_tableau = []
        if tampon_citation:
            ajouter_citation(doc, tampon_citation)
            tampon_citation = []

    while i < len(lignes):
        ligne = lignes[i]
        nu = ligne.strip()

        if nu.startswith("|"):
            tampon_citation and vider()
            tampon_tableau.append(ligne)
            i += 1
            continue
        if nu.startswith(">"):
            tampon_tableau and vider()
            tampon_citation.append(ligne)
            i += 1
            continue

        vider()

        if not nu:
            i += 1
            continue

        if re.match(r'^---+$', nu):
            doc.add_page_break()
            i += 1
            continue

        m = re.match(r'^(#{1,4})\s+(.*)$', nu)
        if m:
            niveau, titre = len(m.group(1)), m.group(2)
            # Une séance commence toujours une nouvelle page.
            if niveau == 1 and titre.startswith("SÉANCE "):
                if doc.paragraphs and doc.paragraphs[-1].text.strip():
                    doc.add_page_break()
            p = doc.add_heading(level=min(niveau, 4))
            p.paragraph_format.space_before = Pt(10 if niveau > 1 else 14)
            p.paragraph_format.space_after = Pt(5)
            ajouter_texte_riche(p, titre)
            for run in p.runs:
                run.font.color.rgb = ROUGE_LECON if niveau <= 2 else VERT_SOUS_TITRE
                run.font.size = Pt({1: 17, 2: 14, 3: 12, 4: 11}[niveau])
                run.bold = True
            i += 1
            continue

        # Image : ![légende](fichier.png) — seule sur sa ligne.
        m = re.match(r'^!\[([^\]]*)\]\(([^)]+)\)\s*$', nu)
        if m:
            legende, chemin = m.group(1), m.group(2)
            chemin_abs = os.path.join(os.path.dirname(os.path.abspath(chemin_md)), chemin)
            if os.path.exists(chemin_abs):
                p = doc.add_paragraph()
                p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                p.add_run().add_picture(chemin_abs, width=Cm(LARGEUR_IMAGE_CM))
                if legende:
                    c = doc.add_paragraph()
                    c.alignment = WD_ALIGN_PARAGRAPH.CENTER
                    run = c.add_run(legende)
                    run.italic = True
                    run.font.size = Pt(9)
            else:
                # Ne jamais faire disparaître silencieusement une illustration.
                p = doc.add_paragraph()
                p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                run = p.add_run(f"[image manquante : {chemin}]")
                run.italic = True
                run.font.color.rgb = ROUGE_LECON
            i += 1
            continue

        m = re.match(r'^[-*]\s+(.*)$', nu)
        if m:
            p = doc.add_paragraph(style="List Bullet")
            p.paragraph_format.space_after = Pt(2)
            ajouter_texte_riche(p, m.group(1))
            i += 1
            continue

        m = re.match(r'^(\d+)\.\s+(.*)$', nu)
        if m:
            # Numéro écrit littéralement, et NON via le style "List Number" :
            # la numérotation automatique de Word repart d'un compteur global
            # et renumérote les questions d'un exercice à l'autre — la
            # question « 1. » d'un sujet s'afficherait « 47. ». Les numéros du
            # manuel sont porteurs de sens (renvois des corrigés), ils doivent
            # rester exactement ceux du texte.
            p = doc.add_paragraph()
            p.paragraph_format.left_indent = Cm(0.75)
            p.paragraph_format.space_after = Pt(2)
            ajouter_texte_riche(p, f"{m.group(1)}. {m.group(2)}")
            i += 1
            continue

        p = doc.add_paragraph()
        p.paragraph_format.space_after = Pt(4)
        ajouter_texte_riche(p, nu)
        i += 1

    vider()
    doc.save(chemin_docx)
    return doc


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print(__doc__)
        sys.exit(2)
    convertir(sys.argv[1], sys.argv[2])
    print(f"écrit : {sys.argv[2]}")
