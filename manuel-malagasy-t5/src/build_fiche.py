# -*- coding: utf-8 -*-
"""Constructeur « gabarit exemple du proprietaire » : TAKELA-PANOMANAN-DESONA ·
LESONA · FANAZARAN-TENA · FANITSIANA · LOHARANON-KEVITRA.

Ce gabarit est celui de `Nos manuels/EXEMPLE DE MALAGASY.docx` (branche main) :
le libelle de la grille, la place de la leson et le corriges qui suit chaque
exercice sont repris de la. Utilisation :

    ./run.sh src/build_fiche.py data_ambava_t1 Manuel_Malagasy_T5_AMBAVA_T1_V1
"""
import importlib
import io
import os
import re
import sys

import docx
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml.ns import qn
from docx.shared import Cm, Pt, RGBColor

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEPOTS = os.path.dirname(RACINE)
ROUGE = os.path.join(DEPOTS, "fianarana-malagasy", "LISTE-ROUGE.md")

# couleurs relevees dans l'exemple
C_ZT = "E36C0A"      # titre de la sous-discipline
C_TITRE = "FF00FF"   # titre de la leson
C_SEC = "00B0F0"     # rubrique de la leson
C_OHATRA = "78B832"  # etiquette « Ohatra: »
C_EX = "F76995"      # exemple / phrase citee
C_CORRIGE = "FA6A97"  # titre du corrigé et réponses
C_NOTA = "808080"


def rgb(h):
    return RGBColor(int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16))


def taille_titre(txt):
    """L'exemple met le nom de la sous-discipline en 90 points. On garde 90 pour un
    nom court, on descend pour qu'un nom long ne casse pas la page."""
    n = len(txt)
    if n <= 12:
        return 90.0
    if n <= 22:
        return 54.0
    return 40.0


def p(doc, txt="", size=11, bold=False, color=None, align=None, italic=False,
      space_after=2, keep=False):
    par = doc.add_paragraph()
    if align is not None:
        par.alignment = align
    par.paragraph_format.space_after = Pt(space_after)
    par.paragraph_format.space_before = Pt(0)
    if keep:
        par.paragraph_format.keep_with_next = True
    if txt:
        r = par.add_run(txt)
        r.font.size = Pt(size)
        r.bold = bold
        r.italic = italic
        r.font.name = "Arial"
        if color:
            r.font.color.rgb = rgb(color)
    return par


def banniere(doc, txt, color="000000", size=13):
    par = p(doc, txt.upper(), size=size, bold=True, color=color,
            align=WD_ALIGN_PARAGRAPH.CENTER, space_after=6, keep=True)
    return par


def saut(doc):
    par = doc.add_paragraph()
    par.add_run().add_break(WD_BREAK.PAGE)


def bordures(table):
    tbl = table._tbl
    props = tbl.tblPr
    b = props.makeelement(qn('w:tblBorders'), {})
    for cot in ("top", "left", "bottom", "right", "insideH", "insideV"):
        el = b.makeelement(qn('w:' + cot), {})
        el.set(qn('w:val'), 'single')
        el.set(qn('w:sz'), '6')
        el.set(qn('w:color'), '000000')
        b.append(el)
    props.append(b)


def cellule(cell, txt, size=9.5, bold=False, color=None, align=None):
    cell.text = ""
    par = cell.paragraphs[0]
    if align is not None:
        par.alignment = align
    par.paragraph_format.space_after = Pt(1)
    par.paragraph_format.space_before = Pt(1)
    r = par.add_run(txt or "")
    r.font.size = Pt(size)
    r.bold = bold
    r.font.name = "Arial"
    if color:
        r.font.color.rgb = rgb(color)
    return cell


# --------------------------------------------------------------------- blocs
def takela(doc, d):
    banniere(doc, "TAKELA-PANOMANAN-DESONA")
    champs = d["fields"]
    cles = list(champs.keys())
    t = doc.add_table(rows=6, cols=2)
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    bordures(t)
    # 1re ligne : deux champs cote a cote, comme dans l'exemple
    cellule(t.cell(0, 0), "%s : %s" % (cles[0], champs[cles[0]]), bold=True)
    cellule(t.cell(0, 1), "%s : %s" % (cles[1], champs[cles[1]]), bold=True)
    for i, cle in enumerate(cles[2:], start=1):
        cellule(t.cell(i, 0), "%s : %s" % (cle, champs[cle]), bold=True)
        cellule(t.cell(i, 1), "")
    for i in range(4, 6):
        for j in range(2):
            cellule(t.cell(i, j), "")

    # la grille : en-tetes exacts de l'exemple
    lignes = d["grille"]
    g = doc.add_table(rows=2 + len(lignes), cols=6)
    g.alignment = WD_TABLE_ALIGNMENT.CENTER
    bordures(g)
    tete = ["Dingana sy Faharetany", "Fizotry ny Lesona", None, "Tetika Amam-paika",
            "Fitaovana", "Fanamarihana"]
    for j, txt in enumerate(tete):
        if txt is None:
            continue
        cellule(g.cell(0, j), txt, size=9, bold=True, align=WD_ALIGN_PARAGRAPH.CENTER)
    a_fusionner = g.cell(0, 1).merge(g.cell(0, 2))
    for j, txt in enumerate(["Mpampianatra", "Mpianatra"]):
        cellule(g.cell(1, j + 1), txt, size=9, bold=True, align=WD_ALIGN_PARAGRAPH.CENTER)
    for j in (0, 3, 4, 5):
        g.cell(0, j).merge(g.cell(1, j))
    for i, row in enumerate(lignes, start=2):
        etape = row[0]
        titre_et_ongles = etape.startswith("II.") and row[1] == ""
        if titre_et_ongles:
            bande = g.cell(i, 0)
            for j in range(1, 6):
                bande = bande.merge(g.cell(i, j))
            cellule(bande, etape, size=10, bold=True, color="C00000")
            continue
        for j, val in enumerate(row):
            cellule(g.cell(i, j), val, size=9, bold=(j == 0))
    return g


def lesona(doc, d):
    p(doc, "LESONA:", size=12, bold=True, space_after=4, keep=True)
    p(doc, d["lt"], size=14, bold=True, color=C_TITRE, space_after=8, keep=True)
    for kind, val in d["lesona"]:
        if kind == "h2":
            p(doc, val, size=11.5, bold=True, color=C_SEC, space_after=3, keep=True)
        elif kind == "p":
            if val.endswith(":"):
                p(doc, val, size=11, bold=True, color=C_OHATRA, space_after=2, keep=True)
            else:
                p(doc, val, size=11, bold=True, color="000000", space_after=4)
        elif kind == "bul":
            for it in val:
                par = doc.add_paragraph(style="List Bullet")
                par.paragraph_format.space_after = Pt(1)
                r = par.add_run(it)
                r.font.size = Pt(11)
                r.bold = True
                r.font.name = "Arial"
                r.font.color.rgb = rgb(C_EX)
        elif kind == "ohatra":
            p(doc, "Ohatra:", size=11, bold=True, color=C_OHATRA, space_after=2, keep=True)
            for it in val:
                par = doc.add_paragraph(style="List Number")
                par.paragraph_format.space_after = Pt(1)
                r = par.add_run(it)
                r.font.size = Pt(11)
                r.bold = True
                r.font.name = "Arial"
                r.font.color.rgb = rgb(C_EX)
        elif kind == "tabl":
            tete, andalana = val
            t = doc.add_table(rows=1 + len(andalana), cols=len(tete))
            t.alignment = WD_TABLE_ALIGNMENT.CENTER
            bordures(t)
            for j, h in enumerate(tete):
                cellule(t.cell(0, j), h, size=10, bold=True,
                        align=WD_ALIGN_PARAGRAPH.CENTER)
            for i, row in enumerate(andalana, start=1):
                for j, v in enumerate(row):
                    cellule(t.cell(i, j), v, size=10.5, color=C_EX, bold=True,
                            align=WD_ALIGN_PARAGRAPH.CENTER)
            p(doc, "", size=6)
        elif kind == "note":
            p(doc, "(" + val + ")", size=8, italic=True, color=C_NOTA, space_after=5)


def exercices(doc, d):
    banniere(doc, "FANAZARAN-TENA")
    for ex in d["exos"]:
        p(doc, ex["consigne"], size=11, bold=True, color="000000", space_after=4, keep=True)
        if "tsilo" in ex:
            gauche, droite = ex["tsilo"]
            t = doc.add_table(rows=len(gauche), cols=3)
            t.alignment = WD_TABLE_ALIGNMENT.CENTER
            for i in range(len(gauche)):
                cellule(t.cell(i, 0), "%d. %s" % (i + 1, gauche[i]), size=10,
                        color=C_EX)
                cellule(t.cell(i, 1), "\u2022\u2022\u2022", size=10,
                        align=WD_ALIGN_PARAGRAPH.CENTER)
                lettre = chr(ord("a") + i)
                cellule(t.cell(i, 2), "%s. %s" % (lettre, droite[i]), size=10,
                        align=WD_ALIGN_PARAGRAPH.RIGHT, color=C_EX)
            p(doc, "", size=6)
        elif "banga" in ex:
            for ligne in ex["banga"]:
                p(doc, " " + ligne, size=11, color="000000", space_after=4)
            p(doc, "", size=6)
        else:
            p(doc, "", size=6)


def fanitsiana(doc, d):
    banniere(doc, "FANITSIANA", color=C_CORRIGE)
    for i, rep in enumerate(d["fanitsiana"], start=1):
        if "tsilo" in rep:
            p(doc, "%d." % i, size=10.5, bold=True, space_after=2)
            for gauche, droite in rep["tsilo"]:
                p(doc, "     %s : %s" % (gauche, droite), size=10, color=C_EX,
                  space_after=2)
        elif "banga" in rep:
            p(doc, "%d." % i, size=10.5, bold=True, space_after=2)
            for j, mot in enumerate(rep["banga"], start=1):
                p(doc, "     %d) %s" % (j, mot), size=10, color=C_TITRE, space_after=2)
        elif "ohatra" in rep:
            p(doc, "%d. %s" % (i, "Ohatra:"), size=10.5, bold=True, color=C_OHATRA,
              space_after=2)
            for mot in rep["ohatra"]:
                p(doc, "     " + mot, size=10, color=C_EX, space_after=2)
        elif "note" in rep:
            p(doc, "%d. %s" % (i, rep["note"]), size=10, color=C_EX, space_after=3)
        p(doc, "", size=6)


def loharano(doc, d):
    saut(doc)
    banniere(doc, "LOHARANON-KEVITRA")
    for note in d["loharano"]:
        p(doc, "• " + note, size=9, color="000000", space_after=3)
    racine_src = os.path.join(RACINE, "sources_web", "full")
    for nom in d.get("pages", []):
        chemin = os.path.join(racine_src, nom)
        if not os.path.exists(chemin):
            continue
        lignes = [ln.rstrip("\n") for ln in io.open(chemin, encoding="utf-8")]
        lignes = [ln for ln in lignes if not ln.startswith("#")]
        p(doc, "", size=6)
        p(doc, "--- %s ---" % nom, size=9, bold=True, color=C_NOTA, space_after=3,
          keep=True)
        for ln in lignes:
            txt = ln.strip()
            if not txt:
                continue
            txt = txt.replace("**", "").replace("`", "")
            if re.match(r"^_[^_]+_$", txt):
                txt = txt.strip("_")
            if txt.startswith("##"):
                p(doc, txt.lstrip("# ").strip(), size=9, bold=True, space_after=2,
                  keep=True)
            elif txt.startswith("#"):
                p(doc, txt.lstrip("# ").strip(), size=10, bold=True, color=C_SEC,
                  space_after=2, keep=True)
            else:
                p(doc, txt, size=8.5, space_after=2)


# ------------------------------------------------------------------ contrôles
def controles(chemin, d):
    doc = docx.Document(chemin)
    txt = "\n".join(p_.text for p_ in doc.paragraphs)
    for t in doc.tables:
        for r in t.rows:
            for c in r.cells:
                txt += "\n" + c.text
    attendus = ["TAKELA-PANOMANAN-DESONA", "LESONA:", "FANAZARAN-TENA", "FANITSIANA",
                "Dingana sy Faharetany", "Fizotry ny Lesona", "Mpampianatra",
                "Mpianatra", "Tetika Amam-paika", "Fitaovana", "Fanamarihana",
                "I. Famerenana", "LOHARANON-KEVITRA", d["lt"]]
    manquants = [a for a in attendus if a not in txt]
    defendus = ["veroso", "amboary", "apono eo", "nonoy", "sazonio", "ara-potoana",
                "sabonina", "fahadiovana", "manasa nify", "fanasan-tanana", "resena",
                "fandroavana", "natsangana", "famelezana", "androavana", "mpamboly",
                "nosokajiana", "mitahiry fahasalamana", "maha-iankinan", "Oral",
                "barémé", "BEPC", "ministère de l'éducation nationale"]
    bas = txt.lower().replace("\u2019", "'")
    sales = [w for w in defendus if w.lower() in bas]
    nb_pages = len([1 for p_ in doc.paragraphs if p_.text == "" and
                    any(r._element.findall(qn('w:br')) for r in p_.runs)])
    if os.path.exists(ROUGE):
        rouge = io.open(ROUGE, encoding="utf-8").read()
        lignes = [ln for ln in rouge.splitlines() if ln.startswith("|")]
        nb_fautes = max(0, len(lignes) - 1)
    else:
        nb_fautes = 0
    print("briques : %d paragraphes, %d tableaux, %d caractères, %d sauts de page"
          % (len(doc.paragraphs), len(doc.tables), len(txt), nb_pages))
    print("liste rouge suivie : %d lignes" % nb_fautes)
    if manquants:
        print("MANQUANT :", manquants)
        sys.exit(1)
    if sales:
        print("FORME DEFENDUE :", sales)
        sys.exit(1)
    print("TUATUA")


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(2)
    module, nom = sys.argv[1], sys.argv[2]
    if not nom.endswith(".docx"):
        nom += ".docx"
    sys.path.insert(0, os.path.join(RACINE, "src"))
    d = importlib.import_module(module).FICHE
    sortie = os.path.join(RACINE, "output", nom)

    doc = docx.Document()
    s = doc.sections[0]
    s.page_width, s.page_height = Cm(21), Cm(29.7)
    s.left_margin = s.right_margin = Cm(1.8)
    s.top_margin = s.bottom_margin = Cm(1.6)
    style = doc.styles["Normal"]
    style.font.name = "Arial"
    style.font.size = Pt(11)

    fiches = d.get("FICHES") or [d]
    for k, f in enumerate(fiches):
        if k:
            saut(doc)
        p(doc, f["zt"], size=taille_titre(f["zt"]), bold=True, color=C_ZT, space_after=10)
        takela(doc, f)
        saut(doc)
        lesona(doc, f)
        exercices(doc, f)
        fanitsiana(doc, f)
        if f.get("loharano") or f.get("pages"):
            loharano(doc, f)

    if not os.path.isdir(os.path.join(RACINE, "output")):
        os.makedirs(os.path.join(RACINE, "output"))
    doc.save(sortie)
    print("écrit :", sortie, os.path.getsize(sortie), "o")
    controles(sortie, d)


if __name__ == "__main__":
    main()
