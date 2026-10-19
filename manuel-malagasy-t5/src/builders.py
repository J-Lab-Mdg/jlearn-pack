# -*- coding: utf-8 -*-
"""builders.py — Manuel Malagasy T5 (J-Learn), Traitement C.

Conventions skill jlearn-manuel-scolaire v21 :
- fiche = 3 grandes étapes I / II (6 sous-étapes) / III, durée affichée uniquement sur I, II, III ;
- table de déroulement 6 colonnes, 2 lignes d'en-tête, méta-table SANS bordures ;
- Times New Roman partout ; code couleur : titre #C00000, sous-titres #1E7B34,
  mots-clés #1F4E79, corrigés (mots-clés uniquement) #C2185B ;
- gabarit malgache : TAKELA-PANOMANAN-DESONA, V.A., `Fitaovana` = "----" quand pas de support ;
- `Faharetany` laissé VIDE dans la méta-table (décision utilisateur), `Isan'ny seho : X` obligatoire ;
- sommaire interactif = signets + liens internes (jamais de champ TOC natif).

Les mots-clés à colorer s'écrivent **entre astérisques** dans les données.
"""
import os
import re
from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

ROOT = os.environ.get("JLEARN_ROOT", "/home/user/jlearn-pack")
PAGEBREAK = WD_BREAK.PAGE

FONT = "Times New Roman"
ROUGE = RGBColor(0xC0, 0x00, 0x00)
VERT = RGBColor(0x1E, 0x7B, 0x34)
BLEU = RGBColor(0x1F, 0x4E, 0x79)
BORDEAUX = RGBColor(0xC2, 0x18, 0x5B)
NOIR = RGBColor(0x00, 0x00, 0x00)
BLEU_LIEN = RGBColor(0x05, 0x63, 0xC1)
C = WD_ALIGN_PARAGRAPH.CENTER

_bm = [1]

# ---------------------------------------------------------------- low level
def rich(p, text, size=11, color=NOIR, bold=False, italic=False, kw_color=None):
    for chunk in re.split(r"(\*\*.+?\*\*)", text):
        if not chunk:
            continue
        kw = chunk.startswith("**") and chunk.endswith("**")
        r = p.add_run(chunk[2:-2] if kw else chunk)
        r.font.name = FONT
        r.font.size = Pt(size)
        if kw and kw_color is not None:
            r.font.color.rgb = kw_color
            r.font.bold = True
        else:
            r.font.color.rgb = color
            r.font.bold = bold
            r.font.italic = italic
    return p


def para(doc, text, size=11, color=NOIR, bold=False, italic=False, align=None,
         kw_color=None, space_after=6, bookmark=None, indent=0.0):
    p = doc.add_paragraph()
    if indent:
        p.paragraph_format.left_indent = Cm(indent)
    if align is not None:
        p.alignment = align
    p.paragraph_format.space_after = Pt(space_after)
    if kw_color is None:
        kw_color = BLEU
    rich(p, text, size, color, bold, italic, kw_color)
    if bookmark:
        _bm[0] += 1
        i = _bm[0]
        s = OxmlElement("w:bookmarkStart"); s.set(qn("w:id"), str(i)); s.set(qn("w:name"), bookmark)
        e = OxmlElement("w:bookmarkEnd"); e.set(qn("w:id"), str(i))
        p._p.append(s); p._p.append(e)
    return p


def cell_add(cell, text, size=10, color=NOIR, bold=False, italic=False, kw_color=None,
             first=False, indent=0.0):
    p = cell.paragraphs[0] if (first and not cell.paragraphs[0].runs) else cell.add_paragraph()
    p.paragraph_format.space_after = Pt(2)
    if indent:
        p.paragraph_format.left_indent = Cm(indent)
    rich(p, text, size, color, bold, italic, kw_color if kw_color is not None else BLEU)
    return p


def no_borders(table):
    b = OxmlElement("w:tblBorders")
    for edge in ("top", "left", "bottom", "right", "insideH", "insideV"):
        e = OxmlElement("w:" + edge)
        e.set(qn("w:val"), "none"); e.set(qn("w:sz"), "0")
        e.set(qn("w:space"), "0"); e.set(qn("w:color"), "auto")
        b.append(e)
    table._tbl.tblPr.append(b)


def shade(cell, hexval="D9D9D9"):
    sh = OxmlElement("w:shd")
    sh.set(qn("w:val"), "clear"); sh.set(qn("w:fill"), hexval)
    cell._tc.get_or_add_tcPr().append(sh)


def set_widths(table, widths_cm):
    for row in table.rows:
        for i, w in enumerate(widths_cm):
            if i < len(row.cells):
                row.cells[i].width = Cm(w)


def page_break(doc):
    doc.add_paragraph().add_run().add_break(PAGEBREAK)


def sommaire_link(doc, anchor, text, indent=0):
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(2)
    p.paragraph_format.left_indent = Cm(0.6 * indent)
    hl = OxmlElement("w:hyperlink"); hl.set(qn("w:anchor"), anchor); hl.set(qn("w:history"), "1")
    run = OxmlElement("w:r"); rPr = OxmlElement("w:rPr")
    rf = OxmlElement("w:rFonts"); rf.set(qn("w:ascii"), FONT); rf.set(qn("w:hAnsi"), FONT); rPr.append(rf)
    sz = OxmlElement("w:sz"); sz.set(qn("w:val"), "22"); rPr.append(sz)
    col = OxmlElement("w:color"); col.set(qn("w:val"), "0563C1"); rPr.append(col)
    u = OxmlElement("w:u"); u.set(qn("w:val"), "single"); rPr.append(u)
    run.append(rPr)
    t = OxmlElement("w:t"); t.text = text; t.set(qn("xml:space"), "preserve"); run.append(t)
    hl.append(run); p._p.append(hl)
    return p


def add_image(doc, path, width_cm=9.0, caption=None):
    """Image du pack J-Learn uniquement (aucune image IA) — redimensionnée 800 px + palette."""
    if not path or not os.path.exists(path):
        return None
    out = path
    try:
        from PIL import Image
        im = Image.open(path)
        cache = os.path.join(os.path.dirname(os.path.abspath(__file__)), ".imgcache")
        os.makedirs(cache, exist_ok=True)
        out = os.path.join(cache, os.path.basename(path).rsplit(".", 1)[0] + "_800.png")
        if not os.path.exists(out):
            im.thumbnail((800, 800))
            if im.mode in ("RGBA", "LA", "P"):
                im = im.convert("RGB")
            im.save(out, optimize=True)
            try:
                q = Image.open(out).convert("P", palette=Image.ADAPTIVE, colors=128)
                q.save(out, optimize=True)
            except Exception:
                pass
    except Exception:
        out = path if os.path.getsize(path) < 900_000 else None
        if out is None:
            return None
    p_ = doc.add_paragraph()
    p_.alignment = C
    p_.paragraph_format.space_after = Pt(2)
    p_.add_run().add_picture(out, width=Cm(width_cm))
    if caption:
        para(doc, caption, 9, NOIR, False, True, C, space_after=8)
    return p_


def new_document():
    doc = Document()
    sec = doc.sections[0]
    sec.page_width, sec.page_height = Cm(21.0), Cm(29.7)
    sec.left_margin = sec.right_margin = Cm(1.8)
    sec.top_margin = sec.bottom_margin = Cm(1.8)
    st = doc.styles["Normal"]
    st.font.name = FONT
    st.font.size = Pt(11)
    st.element.rPr.rFonts.set(qn("w:eastAsia"), FONT)
    return doc


# ---------------------------------------------------------------- la fiche
HEADERS = ["Dingana sy Faharetany", "Fizotry ny Lesona", "", "Tetika Amam-paika",
           "Fitaovana", "Fanamarihana"]


def meta_table(doc, s, n, total):
    meta = doc.add_table(rows=6, cols=2)
    no_borders(meta)
    set_widths(meta, [11.6, 5.6])
    gauche = [f"Taranja : {s['taranja']}",
              f"Zana-taranja : {s['zana_taranja']}",
              f"Lohahevitra : {s['lohahevitra']}",
              f"Lohateny : {s['lohateny']}",
              f"Tanjona manokana : Mpianatra afaka {s['tanjona']}",
              f"Fanovozan-kevitra : {s['doc']}"]
    droite = ["Daty : ...",
              "Kilasy : 5e",
              f"Seho n° : {n} / {total}",
              f"Isan'ny seho : {s['isan_ny_seho']}",
              "Faharetany :",
              ""]
    for i in range(6):
        cell_add(meta.rows[i].cells[0], gauche[i], size=10, first=True)
        if droite[i]:
            cell_add(meta.rows[i].cells[1], droite[i], size=10, first=True)
    return meta


def _qa_ens(cell, qa, first):
    cell_add(cell, "Fanontaniana :", bold=True, first=first)
    for i, (q, _a) in enumerate(qa, start=1):
        cell_add(cell, f"{i}. {q}")


def _qa_app(cell, qa, first):
    cell_add(cell, "V.A. :", bold=True, first=first)
    for i, (_q, a) in enumerate(qa, start=1):
        cell_add(cell, f"{i}. {a}")


def _exo_ens(cell, exos, first):
    f = first
    for e in exos:
        cell_add(cell, e["c"], bold=True, first=f)
        f = False
        for it in e["items"]:
            cell_add(cell, it, indent=0.5)


def _exo_app(cell, exos, first):
    cell_add(cell, "V.A. :", bold=True, first=first)
    for e in exos:
        for line in e["cor"]:
            cell_add(cell, line, kw_color=BORDEAUX, indent=0.5)


def deroulement(doc, s, duree_i, duree_ii, duree_iii):
    der = doc.add_table(rows=11, cols=6, style="Table Grid")
    set_widths(der, [2.5, 4.3, 4.3, 2.1, 2.1, 1.9])
    h0, h1 = der.rows[0], der.rows[1]
    h0.cells[0].merge(h1.cells[0]); h0.cells[1].merge(h0.cells[2])
    h0.cells[3].merge(h1.cells[3]); h0.cells[4].merge(h1.cells[4]); h0.cells[5].merge(h1.cells[5])
    cell_add(h0.cells[0], HEADERS[0], bold=True, first=True)
    cell_add(h0.cells[1], HEADERS[1], bold=True, first=True)
    cell_add(h0.cells[3], HEADERS[3], bold=True, first=True)
    cell_add(h0.cells[4], HEADERS[4], bold=True, first=True)
    cell_add(h0.cells[5], HEADERS[5], bold=True, first=True)
    cell_add(h1.cells[1], "Mpampianatra", bold=True, first=True)
    cell_add(h1.cells[2], "Mpianatra", bold=True, first=True)

    def row(r, etape, ens, app, tech, fitaovana, obs=None):
        c = der.rows[r].cells
        cell_add(c[0], etape, bold=True, first=True)
        ens(c[1], True)
        app(c[2], True)
        cell_add(c[3], tech, first=True)
        cell_add(c[4], fitaovana, first=True)
        if obs:
            cell_add(c[5], obs, first=True)

    row(2, f"I. Famerenana ({duree_i} min)",
        lambda cl, f: _qa_ens(cl, s["famerenana"], f),
        lambda cl, f: _qa_app(cl, s["famerenana"], f),
        "Asa tsirairay", "----", s.get("obs_famerenana"))
    sec2 = der.rows[3].cells
    sec2[0].merge(sec2[5])
    cell_add(sec2[0], f"II. LESONA VAOVAO ({duree_ii} min)", bold=True, first=True)
    shade(sec2[0])
    row(4, "1. Fitarihan-tsaina",
        lambda cl, f: cell_add(cl, s["situation"], first=f),
        lambda cl, f: cell_add(cl, "Mamaly.", first=f),
        "Asa iombonana", s.get("fit_fitarihana", "Solaitrabe"), s.get("obs_fitarihan-tsaina"))
    row(5, "2. Fanolorana",
        lambda cl, f: cell_add(cl, s["fanolorana"], first=f),
        lambda cl, f: cell_add(cl, "Mihaino.", first=f),
        "Asa iombonana", "Solaitrabe")
    row(6, "3. Fandinihana",
        lambda cl, f: [cell_add(cl, x, first=(f and i == 0)) for i, x in enumerate(s["fandinihana"])],
        lambda cl, f: cell_add(cl, "Mijery.", first=f),
        "Asa iombonana", s["fitaovana_fandinihana"], s.get("obs_fandinihana"))
    row(7, "4. Famakafakana",
        lambda cl, f: _qa_ens(cl, s["famakafakana"], f),
        lambda cl, f: _qa_app(cl, s["famakafakana"], f),
        s.get("tech_famakafakana", "Brainstorming / Asa iombonana"), s["fitaovana_fandinihana"])
    row(8, "5. Fandravonana",
        lambda cl, f: cell_add(cl, "Koa, " + s["fandravonana"], first=f),
        lambda cl, f: cell_add(cl, "Mamerina.", first=f),
        "Asa iombonana", "Solaitrabe")
    row(9, "6. Fampiharana",
        lambda cl, f: _exo_ens(cl, s["fampiharana"], f),
        lambda cl, f: _exo_app(cl, s["fampiharana"], f),
        s.get("tech_fampiharana", "Asa isan-tarika"), s.get("fit_fampiharana", "Kahie"))
    row(10, f"III. Tombana ({duree_iii} min)",
        lambda cl, f: _qa_ens(cl, s["tombana"], f),
        lambda cl, f: _qa_app(cl, s["tombana"], f),
        "Asa tsirairay", "Kahie")
    return der


def seance_complet(doc, s, n, total, durees):
    """[page] Seho n/N + lohateny + TAKELA-PANOMANAN-DESONA + LEÇON + FANAZARAN-TENA + VALINY."""
    di, dii, diii = durees
    page_break(doc)
    para(doc, f"SEHO {n} / {total}", 13, NOIR, True, False, C, bookmark=f"bm_seho{n}")
    para(doc, s["lohateny"], 16, ROUGE, True, False, C)
    para(doc, "TAKELA-PANOMANAN-DESONA", 13, NOIR, True, False, C)
    meta_table(doc, s, n, total)
    doc.add_paragraph()
    deroulement(doc, s, di, dii, diii)

    page_break(doc)
    para(doc, "LESONA", 13, NOIR, True, False, None)
    para(doc, s["lohateny"], 15, ROUGE, True, False, None, bookmark=f"bm_lesona{n}")
    if s.get("libre_img"):
        add_image(doc, s["libre_img"], 8.5, s.get("libre_caption"))
    for blk in s["lecon"]:
        if blk[0] == "h":
            para(doc, blk[1], 12, VERT, True, False, None)
        elif blk[0] == "l":
            para(doc, blk[1], 11, NOIR, False, True, None)   # lahatsoratra (lecture) — italique
        else:
            para(doc, blk[1], 11, NOIR, False, False, None, kw_color=BLEU)
    if s.get("retenir"):
        para(doc, "Ny tsy maintsy tadiavin'ny mpianatra", 12, VERT, True, False, None)
        for line in s["retenir"]:
            para(doc, "• " + line, 11, NOIR, False, False, None, kw_color=BLEU, indent=0.4)

    para(doc, "FANAZARAN-TENA", 13, NOIR, True, False, None, bookmark=f"bm_fanazarana{n}")
    n = 0
    for e in s["fanazaran_tenay"]:
        n += 1
        para(doc, f"Fanazaran-tena {n} — {e['p']} isa", 11, NOIR, True, False, None)
        para(doc, e["c"], 11, NOIR, False, False, None, kw_color=BLEU)
        for it in e["items"]:
            para(doc, it, 11, NOIR, False, False, None, indent=0.6)
    para(doc, "VALINY", 12, BORDEAUX, True, False, None)
    n = 0
    for e in s["fanazaran_tenay"]:
        n += 1
        para(doc, f"Fanazaran-tena {n}", 11, NOIR, True, False, None)
        for line in e["cor"]:
            para(doc, line, 11, NOIR, False, False, None, kw_color=BORDEAUX, indent=0.6)
    return doc
