# -*- coding: utf-8 -*-
"""Genere la fiche de preparation GABARIT (seance 1) conforme au skill v18.

    python3 scripts/fiche_gabarit.py

Produit Fiche-gabarit-seance-1.docx. Sert de modele a valider avant
deploiement sur les 51 seances.

Points du skill v18 appliques ici (design-fiche.md) :
  - titre « FICHE DE PREPARATION » AVANT la meta-table, Times gras centre
  - meta-table 2 zones, BORDURES INVISIBLES
      gauche : Discipline / Sous discipline / Theme / Titre /
               Objectif specifique / Documentation / Support et materiel
      droite : Date / Classe / Seance n / Duree
  - table de deroulement 6 colonnes, en-tete sur 2 LIGNES :
      ligne 1 : [Etapes et Duree rowspan] [Deroulement de la lecon colspan=2]
                [Technique et Strategie rowspan] [Support et Materiel rowspan]
                [Observation rowspan]
      ligne 2 : [vMerge] Enseignant | Apprenants [vMerge] [vMerge] [vMerge]
  - illustration en haut de la page LECON, juste apres le titre
  - A4 portrait, Times New Roman
"""
import os
import sys

from docx import Document
from docx.enum.section import WD_ORIENT
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Cm, Pt, RGBColor

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

VERT = RGBColor(0x1E, 0x7B, 0x34)      # titres de lecon
BORDEAUX = RGBColor(0xC2, 0x18, 0x5B)  # corrige, impose par le skill
NOIR = RGBColor(0, 0, 0)


# --------------------------------------------------------------- utilitaires
def police(doc):
    st = doc.styles["Normal"]
    st.font.name = "Times New Roman"
    st.font.size = Pt(11)
    rpr = st.element.get_or_add_rPr()
    rf = rpr.get_or_add_rFonts()
    for a in ("w:ascii", "w:hAnsi", "w:cs", "w:eastAsia"):
        rf.set(qn(a), "Times New Roman")


def sans_bordures(table):
    """Bordures invisibles — exige par le skill pour la meta-table."""
    tbl = table._tbl
    pr = tbl.tblPr
    anciennes = pr.find(qn("w:tblBorders"))
    if anciennes is not None:
        pr.remove(anciennes)
    bords = OxmlElement("w:tblBorders")
    for cote in ("top", "left", "bottom", "right", "insideH", "insideV"):
        el = OxmlElement(f"w:{cote}")
        el.set(qn("w:val"), "none")
        el.set(qn("w:sz"), "0")
        el.set(qn("w:space"), "0")
        el.set(qn("w:color"), "auto")
        bords.append(el)
    pr.append(bords)


def grille(table):
    tbl = table._tbl
    pr = tbl.tblPr
    bords = OxmlElement("w:tblBorders")
    for cote in ("top", "left", "bottom", "right", "insideH", "insideV"):
        el = OxmlElement(f"w:{cote}")
        el.set(qn("w:val"), "single")
        el.set(qn("w:sz"), "6")
        el.set(qn("w:space"), "0")
        el.set(qn("w:color"), "000000")
        bords.append(el)
    pr.append(bords)


def fusion_verticale(cellule, valeur):
    """vMerge : 'restart' ouvre la fusion, 'continue' la poursuit."""
    tc_pr = cellule._tc.get_or_add_tcPr()
    vm = OxmlElement("w:vMerge")
    vm.set(qn("w:val"), valeur)
    tc_pr.append(vm)


def ombrer(cellule, hexa):
    tc_pr = cellule._tc.get_or_add_tcPr()
    sh = OxmlElement("w:shd")
    sh.set(qn("w:val"), "clear")
    sh.set(qn("w:fill"), hexa)
    tc_pr.append(sh)


def ecrire(cellule, texte, gras=False, taille=10, couleur=NOIR, centre=False):
    cellule.text = ""
    p = cellule.paragraphs[0]
    if centre:
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    for i, ligne in enumerate(texte.split("\n")):
        cible = p if i == 0 else cellule.add_paragraph()
        if centre and i:
            cible.alignment = WD_ALIGN_PARAGRAPH.CENTER
        r = cible.add_run(ligne)
        r.font.name = "Times New Roman"
        r.font.size = Pt(taille)
        r.bold = gras
        r.font.color.rgb = couleur
    for par in cellule.paragraphs:
        par.paragraph_format.space_before = Pt(1)
        par.paragraph_format.space_after = Pt(1)


# ------------------------------------------------------------------- blocs
def titre_fiche(doc):
    """« FICHE DE PREPARATION » — avant la meta-table, gras, centre."""
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = p.add_run("FICHE DE PRÉPARATION")
    r.bold = True
    r.font.size = Pt(14)
    r.font.name = "Times New Roman"
    p.paragraph_format.space_after = Pt(8)


def meta_table(doc, champs_gauche, champs_droite):
    """Deux zones cote a cote, bordures invisibles."""
    n = max(len(champs_gauche), len(champs_droite))
    t = doc.add_table(rows=n, cols=2)
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    sans_bordures(t)
    for i in range(n):
        g = champs_gauche[i] if i < len(champs_gauche) else ("", "")
        d = champs_droite[i] if i < len(champs_droite) else ("", "")
        for col, (libelle, valeur) in ((0, g), (1, d)):
            cel = t.cell(i, col)
            cel.text = ""
            p = cel.paragraphs[0]
            p.paragraph_format.space_before = Pt(0)
            p.paragraph_format.space_after = Pt(0)
            if libelle:
                r = p.add_run(f"{libelle} : ")
                r.bold = True
                r.font.size = Pt(10.5)
                r.font.name = "Times New Roman"
                r2 = p.add_run(valeur)
                r2.font.size = Pt(10.5)
                r2.font.name = "Times New Roman"
    t.columns[0].width = Cm(11.5)
    t.columns[1].width = Cm(6.0)
    return t


def entete_deroulement(t):
    """En-tete sur 2 lignes avec rowspan (vMerge) et colspan (gridSpan)."""
    l1, l2 = t.rows[0], t.rows[1]

    ecrire(l1.cells[0], "Étapes et Durée", gras=True, centre=True)
    fusion_verticale(l1.cells[0], "restart")
    fusion_verticale(l2.cells[0], "continue")

    # colonnes 2 et 3 fusionnees horizontalement sur la ligne 1
    fusionnee = l1.cells[1].merge(l1.cells[2])
    ecrire(fusionnee, "Déroulement de la leçon", gras=True, centre=True)

    for idx, libelle in ((3, "Technique et Stratégie"),
                         (4, "Support et Matériel"),
                         (5, "Observation")):
        ecrire(l1.cells[idx], libelle, gras=True, centre=True)
        fusion_verticale(l1.cells[idx], "restart")
        fusion_verticale(l2.cells[idx], "continue")

    ecrire(l2.cells[1], "Enseignant", gras=True, centre=True)
    ecrire(l2.cells[2], "Apprenants", gras=True, centre=True)

    for ligne in (l1, l2):
        for c in ligne.cells:
            ombrer(c, "D9E2D9")


def main():
    doc = Document()
    s = doc.sections[0]
    s.orientation = WD_ORIENT.PORTRAIT
    s.page_width, s.page_height = Cm(21.0), Cm(29.7)
    s.left_margin = s.right_margin = Cm(1.5)
    s.top_margin = s.bottom_margin = Cm(1.5)
    police(doc)

    # ---------------------------------------------------------- 1. la fiche
    titre_fiche(doc)

    gauche = [
        ("Discipline", "Sciences de la vie et de la terre"),
        ("Sous discipline", "Biologie humaine — Alimentation"),
        ("Thème", "Alimentation de l'homme"),
        ("Titre", "Ration alimentaire et groupes d'aliments"),
        ("Objectif spécifique",
         "définir la ration alimentaire et classer les aliments selon leur rôle"),
        ("Documentation", "Programme d'Études T9 (SVT), DCRP"),
        ("Support et matériel",
         "pyramide alimentaire dessinée au tableau, photo d'un repas malgache"),
    ]
    droite = [
        ("Date", "____________"),
        ("Classe", "T9"),
        ("Séance n°", "1 / 51"),
        ("Durée", "____________"),
        ("", ""),
        ("Valeurs à véhiculer", "autonomie, esprit de créativité"),
    ]
    meta_table(doc, gauche, droite)
    doc.add_paragraph()

    # ------------------------------------------- 2. tableau de deroulement
    etapes = [
        ("I. RÉVISION\n____",
         "Citez trois aliments que vous avez mangés hier.\n"
         "Mange-t-on la même chose à chaque repas ?",
         "R.A. : Du riz, des brèdes, du poisson.\n"
         "R.A. : Non, les aliments changent d'un repas à l'autre.",
         "Questionnement oral", "—"),
        ("II. NOUVELLE LEÇON\n____", "", "", "", ""),
        ("1. Mise en situation",
         "Soa mange du riz à tous les repas, tous les jours. Nivo mange du riz, "
         "des brèdes, des haricots et parfois du poisson. Laquelle des deux se "
         "nourrit le mieux ?",
         "R.A. : Nivo, parce qu'elle mange des aliments variés.",
         "Questionnement oral", "Tableau noir"),
        ("2. Présentation",
         "Aujourd'hui nous allons apprendre : « Ration alimentaire et groupes "
         "d'aliments ». Après cette séance vous serez capables de définir une "
         "ration alimentaire et de classer les aliments en trois groupes.",
         "Écoutent.", "Exposé", "Tableau noir"),
        ("3. Observation",
         "Regardez et observez bien cette pyramide alimentaire et la photo de "
         "ce repas malgache.",
         "Observent silencieusement.",
         "Observation dirigée", "Pyramide alimentaire, photo de repas"),
        ("4. Analyse",
         "Que mange-t-on en plus grande quantité d'après la pyramide ?\n"
         "Quels aliments sont tout en haut, en petite quantité ?\n"
         "Le repas de la photo contient-il des aliments de chaque groupe ?",
         "R.A. : Le riz et les féculents, à la base de la pyramide.\n"
         "R.A. : Les matières grasses et les sucreries.\n"
         "R.A. : Oui : du riz, des brèdes, des haricots et du poisson.",
         "Observation, étude de documents, travail de groupe",
         "Pyramide alimentaire, grande ardoise"),
        ("5. Synthèse",
         "Qu'appelle-t-on ration alimentaire ? Quels sont les trois groupes "
         "d'aliments et leur rôle ?",
         "R.A. : La ration alimentaire est la quantité d'aliments dont une "
         "personne a besoin en une journée. Les trois groupes : les aliments "
         "énergétiques (riz, manioc, huile), les aliments bâtisseurs (poisson, "
         "haricots, œufs, lait) et les aliments protecteurs (brèdes, fruits, "
         "légumes).",
         "Questionnement oral, élaboration collective", "Tableau noir, cahier"),
        ("6. Application",
         "Classez ces aliments dans le bon groupe : manioc · poisson · orange · "
         "haricots · huile · brèdes.",
         "R.A. : Énergétiques : manioc, huile. Bâtisseurs : poisson, haricots. "
         "Protecteurs : orange, brèdes.",
         "Travail individuel puis correction au tableau", "Cahier"),
        ("III. ÉVALUATION\n____",
         "1. Qu'est-ce qu'une ration alimentaire ?\n"
         "2. Cite un aliment de chaque groupe.\n"
         "3. Pourquoi ne faut-il pas manger que du riz ?\n"
         "4. Compose un repas contenant les trois groupes.",
         "R.A. : 1. La quantité d'aliments nécessaire à une personne pour une "
         "journée.\n2. Riz (énergétique), poisson (bâtisseur), brèdes "
         "(protecteur).\n3. Parce que le riz n'apporte qu'de l'énergie : il "
         "manque les aliments bâtisseurs et protecteurs.\n"
         "4. Riz + haricots + brèdes, par exemple.",
         "Évaluation écrite individuelle", "Cahier"),
    ]

    t = doc.add_table(rows=2 + len(etapes), cols=6)
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    grille(t)
    entete_deroulement(t)

    largeurs = [Cm(2.6), Cm(5.2), Cm(4.6), Cm(2.8), Cm(2.4), Cm(1.4)]
    for i, l in enumerate(largeurs):
        t.columns[i].width = l

    for j, (etape, ens, app, tech, sup) in enumerate(etapes, start=2):
        ligne = t.rows[j]
        if etape.startswith("II. NOUVELLE"):
            # ligne de section : une seule cellule sur toute la largeur
            cible = ligne.cells[0]
            for k in range(1, 6):
                cible = cible.merge(ligne.cells[k])
            ecrire(cible, "II. NOUVELLE LEÇON", gras=True, centre=True)
            ombrer(cible, "EFEFEF")
            continue
        ecrire(ligne.cells[0], etape, gras=etape[0] in "I", taille=9.5)
        ecrire(ligne.cells[1], ens, taille=9.5)
        ecrire(ligne.cells[2], app, taille=9.5)
        ecrire(ligne.cells[3], tech, taille=9.5)
        ecrire(ligne.cells[4], sup, taille=9.5)
        ecrire(ligne.cells[5], "", taille=9.5)

    # ---------------------------------------------- 3. page LECON + image
    doc.add_page_break()
    p = doc.add_paragraph()
    r = p.add_run("LEÇON 1 — Ration alimentaire et groupes d'aliments")
    r.bold = True
    r.font.size = Pt(14)
    r.font.name = "Times New Roman"
    r.font.color.rgb = VERT

    # L'illustration se place juste apres le titre de la lecon (skill).
    image = os.path.join(RACINE, "img_seance01.png")
    if os.path.exists(image):
        pi = doc.add_paragraph()
        pi.alignment = WD_ALIGN_PARAGRAPH.CENTER
        pi.add_run().add_picture(image, width=Cm(13.0))
        leg = doc.add_paragraph()
        leg.alignment = WD_ALIGN_PARAGRAPH.CENTER
        rl = leg.add_run("Un repas malgache complet : riz, brèdes, haricots, "
                         "poisson, tomate et banane.")
        rl.italic = True
        rl.font.size = Pt(9)
        rl.font.name = "Times New Roman"
    else:
        av = doc.add_paragraph()
        ra = av.add_run(f"[image manquante : {os.path.basename(image)}]")
        ra.font.color.rgb = RGBColor(0xCC, 0, 0)

    for titre, corps in [
        ("1. Qu'est-ce qu'une ration alimentaire ?",
         "La ration alimentaire est la quantité d'aliments dont une personne a "
         "besoin pendant une journée pour vivre, grandir et travailler. Elle "
         "varie selon l'âge, le sexe et l'activité : un cultivateur qui bêche "
         "toute la journée a besoin d'une ration plus importante qu'un élève "
         "assis en classe."),
        ("2. Les trois groupes d'aliments",
         "a. Les aliments énergétiques fournissent l'énergie : riz, manioc, "
         "patate douce, maïs, huile, sucre.\n"
         "b. Les aliments bâtisseurs construisent et réparent le corps : "
         "poisson, viande, œufs, lait, haricots, lentilles.\n"
         "c. Les aliments protecteurs défendent contre les maladies : brèdes, "
         "tomates, carottes, oranges, mangues."),
        ("3. Pourquoi varier son alimentation ?",
         "Aucun aliment ne contient à lui seul tout ce dont le corps a besoin. "
         "Un repas composé uniquement de riz apporte de l'énergie, mais ni les "
         "matériaux de construction ni les défenses contre les maladies. Un "
         "repas équilibré associe donc les trois groupes."),
    ]:
        pt = doc.add_paragraph()
        rt = pt.add_run(titre)
        rt.bold = True
        rt.font.size = Pt(11.5)
        rt.font.color.rgb = VERT
        rt.font.name = "Times New Roman"
        pc = doc.add_paragraph()
        for i, l in enumerate(corps.split("\n")):
            cible = pc if i == 0 else doc.add_paragraph()
            rc = cible.add_run(l)
            rc.font.size = Pt(11)
            rc.font.name = "Times New Roman"

    sortie = os.path.join(RACINE, "Fiche-gabarit-seance-1.docx")
    doc.save(sortie)
    print(f"écrit : {os.path.basename(sortie)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
