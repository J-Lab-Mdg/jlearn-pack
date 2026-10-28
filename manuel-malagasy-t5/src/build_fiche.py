# -*- coding: utf-8 -*-
"""Constructeur fidel au fichiermodele du proprietaire
(`Nos manuels/EXEMPLE DE MALAGASY.docx`). Ny mpanaraka dia voasoro avy amin'ny XML
(`word/document.xml`, `word/styles.xml`, `word/numbering.xml`) ilay rakitra, fa tsy avy
amin'ny dika tahiry (`refs/EXEMPLE_DU_MANUEL.txt` : tsy misy antontan-taratasy momba ny
sora, ny habe, ny loko na ny lisitra isan'ireo).

    page        A4, marges 1020 twips ; sora = anaran'ny theme (Calibri) 11 pt,
                Normal : espace apres 10 pt, ligne 259/240
    titre       4 paragrafo banga voarindra (jc=center), dia ny anaran'ny zana-taranja
                90 pt E36C0A (Tsipelina) / 365F91 (Fitsipika), voarindra, tsy matora
    TAKELA      « TAKELA-PANOMANAN-DESONA » : gras, voarindra, espace apres 6 pt
    champs      tableau 2 kolona (6576 | 3175) TSISY bordure, tsy misy style
    grille      style « TableGrid » (Grilledutableau), w=11069, kolona
                1634 | 3744 | 1559 | 1194 | 1328 | 1610 ; en-tete : « Fizotry ny Lesona »
                etalee amin'ny kolona 2, vMerge amin'ny hafa ;
                bandeau « II. LESONA VAOVAO (… min) » etale amin'ny 6, fond D9D9D9 ;
                dingana : I. Famerenana · 1. Fitarihan-tsaina · 2. Fanolorana · 3. Fandinihana ·
                4. Famakafakana · 5. Fandravonana · 6. Fampiharana · III. Tombana
                (oresaka ny Mpampianatra = teny atao ; Mpianatra = « V.A. : … » ; « ---- »)
    note        (décision du maître, 2026-10-29) : une ligne de source en petits caractères
                (9 pt, italique, parenthèses) est laissée sous CHAQUE bloc « Ohatra: » ; la
                source est aussi reprise en fin de fiche sous LOHARANON-KEVITRA.
    LESONA      « LESONA: » souligne ; titre magenta FF00FF gras+souligne voarindra ;
                rubriques = LISITRA ISOAN'NY (numPr) loko 00B0F0 gras+souligne ;
                glose = maints gras-italique, 1re ligne retiree 360 ;
                « Ohatra: » italique+souligne ; phrases = F76995 gras-italique,
                lisitra isan-ny (numId misolo isaky ny ampahany = mamerina amin'ny 1)
    FANAZARAN   titre noir gras+souligne ; consignes = lisitra isan'ny maintsy tsy matora
    FANITSIANA  titre FA6A97 gras+souligne ; consignes = lisitra isan'ny faharoa
    tsilo       tableau 3 kolona 2545 | 567 | 5812, style TableGrid

    ./run.sh src/build_fiche.py data_tsipelina_s2 Manuel_Malagasy_T5_TSIPELINA-S2_V1
"""
import docx
import importlib
import io
import os
import re
import sys

from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Cm, Pt, RGBColor, Twips

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEPOTS = os.path.dirname(RACINE)

C_TITRE_ZT = {"Tsipelina": "E36C0A", "Fitsipika": "365F91"}
C_NOIR = "000000"
C_LECON = "FF00FF"      # lohatenin'ny lesona
C_RUBRIQUE = "00B0F0"   # rubriques
C_EXEMPLE = "F76995"    # ohatra
C_OHATRA = "78B832"     # etikety « Ohatra: » manaraka
C_CORRIGE = "FA6A97"    # lohatenin'ny fanitsiana
C_REP = "FF00FF"        # valin'ny famoronana
BANDE = "D9D9D9"
COLS_CHAMPS = (6576, 3175)
COLS_GRILLE = (1634, 3744, 1559, 1194, 1328, 1610)
COLS_TSILO = (3400, 567, 4957)
STYLE_GRILLE = "TableGrid"

# andian-dahatsoratra : filaharan'ny zanaky ny w:pPr (schema OOXML)
ORDRE_PPR = ["pStyle", "keepNext", "keepLines", "pageBreakBefore", "framePr", "widowControl",
             "numPr", "suppressLineNumbers", "pBdr", "shd", "tabs", "suppressAutoHyphens",
             "kinsoku", "wordWrap", "overflowPunct", "topLinePunct", "autoSpaceDE",
             "autoSpaceDN", "bidi", "adjustRightInd", "snapToGrid", "spacing", "ind",
             "contextualSpacing", "mirrorIndents", "suppressOverlap", "jc", "textDirection",
             "textAlignment", "textboxTightWrap", "outlineLvl", "divId", "cnfStyle",
             "rPr", "sectPr", "pPrChange"]


CT_FOOTNOTES = "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml"


class Notes(object):
    """Notes de bas de page reels (Word), comme dans le fichier modele : le modele porte
    <w:footnoteReference w:id="1"/> sur le libelle « V. P. M » et la note « Voka-pianarana
    manokana » en bas de page. Le gabarit de python-docx n'a pas de partie footnotes : on la
    cree et on la reecrit a chaque note."""

    DEBUT = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
             '<w:footnotes xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas" '
             'xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" '
             'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" '
             'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" '
             'xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" '
             'xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape">')

    def __init__(self, doc):
        from docx.opc.part import Part
        from docx.opc.packuri import PackURI
        from docx.opc.constants import RELATIONSHIP_TYPE as RT
        self.doc = doc
        self.notes = []
        tete = ('<w:footnote w:type="separator" w:id="-1"><w:p><w:pPr>'
                '<w:spacing w:after="0" w:line="240" w:lineRule="auto"/></w:pPr></w:p></w:footnote>'
                '<w:footnote w:type="continuationSeparator" w:id="0"><w:p><w:pPr>'
                '<w:spacing w:after="0" w:line="240" w:lineRule="auto"/></w:pPr></w:p></w:footnote>')
        self.part = Part(PackURI("/word/footnotes.xml"), CT_FOOTNOTES,
                         (self.DEBUT + tete + "</w:footnotes>").encode("utf-8"), doc.part.package)
        doc.part.relate_to(self.part, RT.NUMBERING if False else
                           "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes")
        self.tete = tete

    def appel(self, par, txt):
        """Renvoie le run d'appel (exposant, chiffre auto) et enregistre le texte de la note."""
        no = len(self.notes) + 1
        nid = 1000 + no
        ligne = ('<w:p><w:pPr><w:spacing w:after="0" w:line="240" w:lineRule="auto"/></w:pPr>'
                 '<w:r><w:rPr><w:vertAlign w:val="superscript"/><w:sz w:val="18"/></w:rPr>'
                 '<w:footnoteRef/></w:r><w:r><w:rPr><w:sz w:val="18"/></w:rPr>'
                 '<w:t xml:space="preserve"> %s</w:t></w:r></w:p>' % _esc(txt))
        self.notes.append('<w:footnote w:id="%d">%s</w:footnote>' % (nid, ligne))
        self.part._blob = (self.DEBUT + self.tete + "".join(self.notes) +
                           "</w:footnotes>").encode("utf-8")
        r = par.add_run()
        rPr = r._r.get_or_add_rPr()
        va = OxmlElement("w:vertAlign"); va.set(qn("w:val"), "superscript")
        rPr.append(va)
        ref = OxmlElement("w:footnoteReference"); ref.set(qn("w:id"), str(nid))
        r._r.append(ref)
        return r


def _esc(txt):
    return (txt or "").replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


# ---------------------------------------------------------------- deSSINs
NS_DES = ('xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" '
          'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" '
          'xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" '
          'xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" '
          'xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape" '
          'xmlns:v="urn:schemas-microsoft-com:vml" '
          'xmlns:o="urn:schemas-microsoft-com:office:office" '
          'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"')
PT = 12700            # EMU par point
HAUT_LIGNE = 22.0     # hauteur de rangee imposee (440 twips) pour que la fleche tombe juste
X_DEPART = -30.0      # depart dans la colonne de gauche (relatif a la colonne du milieu)
LARGEUR = 88.0        # longueur horizontale du trait : tipona eo am-piandohan'ny
# tapany ankavanana, ka tsy mboina manjavona amin'ny soratra


def _image(doc, nom, bytes_, type_):
    """Partie media + relation (python-docx n'a pas d'API pour le SVG : on ecrit la partie
    nous-memes, Word lit l'Override de [Content_Types].xml)."""
    from docx.opc.part import Part
    from docx.opc.packuri import PackURI
    from docx.opc.constants import RELATIONSHIP_TYPE as RT
    k = len(getattr(doc, "_svg_compte", [])) + 1
    if not hasattr(doc, "_svg_compte"):
        doc._svg_compte = []
    doc._svg_compte.append(nom)
    part = Part(PackURI("/word/media/%s%d.%s" % (nom, k, type_.split("/")[-1].replace("svg+xml", "svg").replace("png", "png"))),
                type_, bytes_, doc.part.package)
    return doc.part.relate_to(part, RT.IMAGE)


def _form(w, h, vers_le_haut):
    """Coordonnees du trait + pointe de fleche, en pixels (96 ppp)."""
    pad = 3.0
    x0, x1 = pad, w - pad - 5
    if vers_le_haut:
        y0, y1, ya = h - pad, pad, pad + 8
    else:
        y0, y1, ya = pad, h - pad, h - pad - 8
    dx, dy = x1 - x0, y1 - y0
    n = (dx * dx + dy * dy) ** 0.5 or 1.0
    ux, uy = dx / n, dy / n
    b = 2.8                                        # largeur de la pointe (triangle)
    px, py = -uy * b, ux * b                       # perpendiculaire
    base_x, base_y = x1 - ux * 8, y1 - uy * 8
    poly = [(x1, y1), (base_x + px, base_y + py), (base_x - px, base_y - py)]
    return (x0, y0), (x1, y1), (y0, y1, ya), poly


def fleche(par, i, j, doc=None):
    """Sary SVG (fallback PNG) : « tsilo » mitovy amin'ny an'ny modele — connecteur
    magenta FF00FF misy pointe de fleche — ancore flottante ao anaty kolon'ny tabilao
    afovoany, ka mameno ambony an'ny lahatsoratra tsy manova ny halavan'ny rangee.
    (demande du maitre 2026-10-29 : « fais les en svg »)."""
    from docx.oxml import parse_xml
    try:
        from PIL import Image, ImageDraw
    except Exception:
        Image = None
    dy_pt = (j - i) * HAUT_LIGNE
    vers_le_haut = dy_pt < 0
    H_pt = max(abs(dy_pt), 8.0)
    W_px = int(round(LARGEUR * 96 / 72.0))
    H_px = max(int(round(H_pt * 96 / 72.0)), 12)
    (x0, y0), (x1, y1), (ya, yb, yc), poly = _form(W_px, H_px, vers_le_haut)
    haut, poly_s = poly[0], " ".join("%d,%d" % (round(a), round(b)) for a, b in poly)
    svg = ('<svg xmlns="http://www.w3.org/2000/svg" width="%d" height="%d" viewBox="0 0 %d %d">'
           '<line x1="%d" y1="%d" x2="%d" y2="%d" stroke="#FF00FF" stroke-width="1.333" '
           'stroke-linecap="round"/><polygon points="%s" fill="#FF00FF"/></svg>'
           % (W_px, H_px, W_px, H_px, x0, y0, round(haut[0]), round(haut[1]), poly_s))
    blob_png = b""
    if Image is not None:
        img = Image.new("RGBA", (W_px, H_px), (0, 0, 0, 0))
        dr = ImageDraw.Draw(img)
        dr.line([x0, y0, round(haut[0]), haut[1]], fill=(255, 0, 255, 255), width=2)
        dr.polygon(poly, fill=(255, 0, 255, 255))
        import io as _io
        buf = _io.BytesIO()
        img.save(buf, "PNG")
        blob_png = buf.getvalue()
    rid_png = _image(doc, "fleche", blob_png, "image/png") if blob_png else None
    rid_svg = _image(doc, "fleche", svg.encode("utf-8"), "image/svg+xml")
    if rid_png is None:
        rid_png = rid_svg
    cx = int(round(LARGEUR * PT))
    cy = int(round(H_pt * PT))
    posH = int(round(X_DEPART * PT))
    posV = int(round((8.0 if not vers_le_haut else 8.0 - H_pt) * PT))
    nom = "tsilo %d" % (i + 1)
    xml = (
        '<w:drawing xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" '
        'xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" '
        'xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" '
        'xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture" '
        'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">'
        '<wp:anchor distT="0" distB="0" distL="0" distR="0" simplePos="0" '
        'relativeHeight="251659264" behindDoc="0" locked="0" layoutInCell="1" allowOverlap="1">'
        '<wp:simplePos x="0" y="0"/>'
        '<wp:positionH relativeFrom="column"><wp:posOffset>%d</wp:posOffset></wp:positionH>'
        '<wp:positionV relativeFrom="paragraph"><wp:posOffset>%d</wp:posOffset></wp:positionV>'
        '<wp:extent cx="%d" cy="%d"/><wp:effectExtent l="25400" t="25400" r="25400" b="25400"/>'
        '<wp:wrapNone/><wp:docPr id="%d" name="%s"/><wp:cNvGraphicFramePr/>'
        '<a:graphic><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">'
        '<pic:pic><pic:nvPicPr><pic:cNvPr id="%d" name="%s"/><pic:cNvPicPr/></pic:nvPicPr>'
        '<pic:blipFill><a:blip r:embed="%s"><a:extLst>'
        '<a:ext uri="{96DAC541-7B7A-43D3-8B79-37D633B846F1}">'
        '<asvg:svgBlip xmlns:asvg="http://schemas.microsoft.com/office/drawing/2016/SVG/main" '
        'r:embed="%s"/></a:ext></a:extLst></a:blip>'
        '<a:stretch><a:fillRect/></a:stretch></pic:blipFill>'
        '<pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="%d" cy="%d"/></a:xfrm>'
        '<a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr>'
        '</pic:pic></a:graphicData></a:graphic></wp:anchor></w:drawing>'
        % (posH, posV, cx, cy, 750554311 + i, nom, 750554311 + i, nom,
           rid_png, rid_svg, cx, cy))
    par._p.append(parse_xml(xml))


def melange(droite, decalage=2):
    """Manda ny filaharan'ny tapany ankavanana : ny mpianatra dia tsy mahita ny valiny
    mifandimby (fy : « les eleves vont les trouver facilement »). Renvoie (liste mele,
    {i_gauche: j_droite})."""
    n = len(droite)
    k = decalage
    while any((i + k) % n == i for i in range(n)) or n < 2:
        k += 1
        if k > n:
            break
    mele = [droite[(i + k) % n] for i in range(n)]
    rezo = {}
    for i, val in enumerate(droite):
        j = mele.index(val)
        rezo[i] = j
    return mele, rezo


def rgb(h):
    return RGBColor(int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16))


# ------------------------------------------------------------ numbering
class Listes(object):
    """Mananganisa lisitra isan'ny (w:num) toy ny an'ny modele : numId anankiray isaky ny
    soketra, ka mamerina amin'ny 1 ny isan'ny soketra manaraka."""

    def __init__(self, doc):
        from docx.opc.constants import RELATIONSHIP_TYPE as RT
        self.el = doc.part.part_related_by(RT.NUMBERING).element
        self.prochain = 100

    def groupe(self, gauche=360, hanging=360):
        aid = self.prochain
        self.prochain += 1
        abstract = OxmlElement('w:abstractNum')
        abstract.set(qn('w:abstractNumId'), str(aid))
        mlt = OxmlElement('w:multiLevelType')
        mlt.set(qn('w:val'), 'singleLevel')
        abstract.append(mlt)
        lvl = OxmlElement('w:lvl')
        lvl.set(qn('w:ilvl'), '0')
        for nom, val in (("start", "1"), ("numFmt", "decimal"), ("lvlText", "%1."),
                         ("suff", "space"), ("lvlJc", "left")):
            e = OxmlElement('w:' + nom)
            e.set(qn('w:val'), val)
            lvl.append(e)
        ind = OxmlElement('w:ind')
        ind.set(qn('w:left'), str(gauche))
        ind.set(qn('w:hanging'), str(hanging))
        lvl.append(ind)
        abstract.append(lvl)
        nums = self.el.findall(qn('w:num'))
        if nums:
            nums[0].addprevious(abstract)
        else:
            self.el.append(abstract)
        num = OxmlElement('w:num')
        num.set(qn('w:numId'), str(aid))
        ref = OxmlElement('w:abstractNumId')
        ref.set(qn('w:val'), str(aid))
        num.append(ref)
        self.el.append(num)
        return aid


def _liste(par, numId):
    pPr = par._p.get_or_add_pPr()
    numPr = OxmlElement('w:numPr')
    ilvl = OxmlElement('w:ilvl')
    ilvl.set(qn('w:val'), '0')
    numPr.append(ilvl)
    nid = OxmlElement('w:numId')
    nid.set(qn('w:val'), str(numId))
    numPr.append(nid)
    pPr.append(numPr)
    _ordre(pPr)


def _ordre(pPr):
    clefs = [etree_cle(c) for c in pPr]
    if any(k is None for k in clefs):
        return
    for c, k in sorted(zip(list(pPr), clefs), key=lambda x: ORDRE_PPR.index(x[1])
                       if x[1] in ORDRE_PPR else len(ORDRE_PPR)):
        pPr.append(c)


def etree_cle(c):
    t = c.tag
    return t.split('}')[-1] if '}' in t else t


# ------------------------------------------------------------ paragraphe
MARQUE = re.compile(r"(\*\*.+?\*\*|\[\[.+?\]\])", re.S)


def _eclats(txt):
    """Tsy misy marqy = (« base », texte). Marqy **x** = teny ilazavana (F76995 gras-italique,
    toy ny modele) ; [[x]] = valiny ao amin'ny fanitsiana (italique FF00FF)."""
    out = []
    for part in MARQUE.split(txt or ""):
        if not part:
            continue
        if part.startswith("**"):
            out.append(("em", part[2:-2]))
        elif part.startswith("[["):
            out.append(("rep", part[2:-2]))
        else:
            out.append(("base", part))
    return out


def _sora(r, bold=False, italic=False, under=False, color=None, size=None):
    if bold:
        r.bold = True
    if italic:
        r.italic = True
    if under:
        r.underline = True
    if size:
        r.font.size = Pt(size)
    if color:
        r.font.color.rgb = rgb(color)


def p(doc, txt="", bold=False, italic=False, under=False, color=None, size=None,
      space_after=2, first_line=None, left=None, centre=False, keep=False, liste=None):
    par = doc.add_paragraph()
    pf = par.paragraph_format
    pf.space_after = Pt(space_after)
    pf.space_before = Pt(0)
    if centre:
        par.alignment = WD_ALIGN_PARAGRAPH.CENTER
    if first_line is not None:
        pf.first_line_indent = Twips(first_line)
    if left is not None:
        pf.left_indent = Twips(left)
    if keep:
        pf.keep_with_next = True
    for nature, fragment in _eclats(txt):
        if nature == "em":
            _sora(par.add_run(fragment), True, True, under, C_EXEMPLE, size)
        elif nature == "rep":
            _sora(par.add_run(fragment), bold, True, under, C_REP, size)
        else:
            _sora(par.add_run(fragment), bold, italic, under, color, size)
    if liste is not None:
        _liste(par, liste)
    return par


def saut(doc):
    par = doc.add_paragraph()
    par.paragraph_format.space_after = Pt(0)
    par.add_run().add_break(WD_BREAK.PAGE)


# ------------------------------------------------------------ tableau
def style_table(table, nom):
    """Style de tableau du modele : « Grilledutableau » = TableGrid (bordures du style)."""
    if not nom:
        return
    doc = table.part.document
    try:
        style = doc.styles[nom]
    except KeyError:
        from docx.enum.style import WD_STYLE_TYPE
        from docx.oxml import OxmlElement as OE
        style = doc.styles.add_style(nom, WD_STYLE_TYPE.TABLE)
        style.element.name = OE('w:name')
        style.element.name.set(qn('w:val'), nom)
    table.style = style
    table.autofit = False


def largeur(table, twips, total=None, fixe=True):
    table.autofit = False
    tblPr = table._tbl.tblPr
    for balise in ("w:tblLayout", "w:tblW"):
        for el in tblPr.findall(qn(balise)):
            tblPr.remove(el)
    if total:
        w = OxmlElement('w:tblW')
        w.set(qn('w:w'), str(total))
        w.set(qn('w:type'), 'dxa')
        tblPr.append(w)
    if fixe:
        layout = OxmlElement('w:tblLayout')
        layout.set(qn('w:type'), 'fixed')
        tblPr.append(layout)
    _ordre_tblPr(tblPr)
    grid = table._tbl.find(qn('w:tblGrid'))
    if grid is not None:
        for gc, wd in zip(grid.findall(qn('w:gridCol')), twips):
            gc.set(qn('w:w'), str(wd))
    for row in table.rows:
        for cell, wd in zip(row.cells, twips):
            try:
                cell.width = Twips(wd)
            except IndexError:
                pass


def _ordre_tblPr(tblPr):
    ordre = ["tblStyle", "tblpPr", "tblOverlap", "bidiVisual", "tblStyleRowBandSize",
             "tblStyleColBandSize", "tblW", "jc", "tblCellSpacing", "tblInd", "tblBorders",
             "shd", "tblLayout", "tblCellMar", "tblLook", "tblCaption", "tblDescription"]
    clefs = [etree_cle(c) for c in tblPr]
    if any(k not in ordre for k in clefs):
        return
    for c, k in sorted(zip(list(tblPr), clefs), key=lambda x: ordre.index(x[1])):
        tblPr.append(c)


def _tabalo_tsilo(doc, gauche, droite):
    """Tabilao fampifandraisana : 3 kolona 3200 | 567 | 5157 (toy ny modele, 8924 twips
    amin'ny totaly), rangee hajana 440 twips mba hajana tsara ny sarin'ny tsilo."""
    t = doc.add_table(rows=len(gauche), cols=3)
    style_table(t, STYLE_GRILLE)
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    largeur(t, COLS_TSILO, total=sum(COLS_TSILO))
    for i in range(len(gauche)):
        cellule(t.cell(i, 0), "%s \u2022" % gauche[i], space=0)
        cellule(t.cell(i, 1), "", space=0)
        cellule(t.cell(i, 2), droite[i], space=0)
        trPr = t.rows[i]._tr.get_or_add_trPr()
        h = OxmlElement('w:trHeight')
        h.set(qn('w:val'), '440')
        h.set(qn('w:hRule'), 'exact')
        trPr.append(h)
    return t


def cellule(cell, txt, bold=False, italic=False, under=False, color=None, align=None,
            fond=None, space=2):
    cell.text = ""
    for i, part in enumerate((txt or "").split("\n")):
        par = cell.paragraphs[0] if i == 0 else cell.add_paragraph()
        par.paragraph_format.space_after = Pt(space)
        par.paragraph_format.space_before = Pt(0)
        if align is not None:
            par.alignment = align
        _sora(par.add_run(part), bold, italic, under, color)
    if fond:
        shd = OxmlElement('w:shd')
        shd.set(qn('w:val'), 'clear')
        shd.set(qn('w:fill'), fond)
        cell._tc.get_or_add_tcPr().append(shd)
    return cell


# --------------------------------------------------------------- TAKELA
SEPAR = {"V. P. M": ": ", "Fitaovana": ": ", "Faharetany": " :"}


def _saha(c, spec):
    if spec is None:
        return ""
    lignes = []
    for cle in (spec if isinstance(spec, (list, tuple)) else [spec]):
        valeur = c.get(cle, "")
        if isinstance(valeur, (list, tuple)):
            valeur = "\n".join(valeur)
        sep = SEPAR.get(cle, " : ")
        lignes.append("%s%s%s" % (cle, sep, valeur) if valeur else "%s%s" % (cle, sep))
    return "\n".join(lignes)


def takela(doc, d, notes=None):
    p(doc, "TAKELA-PANOMANAN-DESONA", bold=True, color=C_NOIR, centre=True, space_after=6)
    c = d["fields"]
    rangs = c.get("rangs")
    if not rangs:
        kl = [k for k in c if k != "rangs"]
        rangs = [(kl[i], kl[i + 1] if i + 1 < len(kl) else None) for i in range(0, len(kl), 2)]
    t = doc.add_table(rows=len(rangs), cols=2)
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    largeur(t, COLS_CHAMPS, total=0, fixe=False)
    for i, (g, dr) in enumerate(rangs):
        cellule(t.cell(i, 0), _saha(c, g))
        cellule(t.cell(i, 1), _saha(c, dr))
    # « V. P. M » : le modele porte un appel de note ici, avec « Voka-pianarana manokana »
    if notes is not None:
        for row in t.rows:
            for cell in row.cells:
                par = cell.paragraphs[0]
                if par.text.startswith("V. P. M"):
                    notes.appel(par, c.get("V. P. M note", "Voka-pianarana manokana"))

    lignes = d["grille"]
    g = doc.add_table(rows=2 + len(lignes), cols=6)
    style_table(g, STYLE_GRILLE)
    g.alignment = WD_TABLE_ALIGNMENT.CENTER
    largeur(g, COLS_GRILLE, total=sum(COLS_GRILLE))
    tete = ["Dingana sy Faharetany", "Fizotry ny Lesona", None, "Tetika Amam-paika",
            "Fitaovana", "Fanamarihana"]
    for j, txt in enumerate(tete):
        if txt:
            cellule(g.cell(0, j), txt, bold=True)
    g.cell(0, 1).merge(g.cell(0, 2))
    for j in (0, 3, 4, 5):
        g.cell(0, j).merge(g.cell(1, j))
    cellule(g.cell(1, 1), "Mpampianatra", bold=True)
    cellule(g.cell(1, 2), "Mpianatra", bold=True)
    i = 2
    for row in lignes:
        if len(row) == 1:
            bande = g.cell(i, 0)
            for j in range(1, 6):
                bande = bande.merge(g.cell(i, j))
            cellule(bande, row[0], bold=True, fond=BANDE)
        else:
            for j, val in enumerate(row):
                cellule(g.cell(i, j), val, bold=(j == 0))
        i += 1


# --------------------------------------------------------------- LESONA
def lesona(doc, d, listes, notes):
    saut(doc)
    p(doc, "LESONA:", under=True, space_after=2)
    p(doc, d["lt"], bold=True, under=True, color=C_LECON, centre=True, space_after=2,
      keep=True)
    rub = listes.groupe(gauche=360, hanging=360)
    groupe = None
    etiq = 0
    dernier = None
    for kind, val in d["lesona"]:
        if kind == "h2":
            groupe = None
            p(doc, val, bold=True, under=True, color=C_RUBRIQUE, liste=rub, space_after=2,
              keep=True)
        elif kind == "p":
            dernier = p(doc, val, color=C_NOIR, first_line=360, space_after=2)
        elif kind == "note":
            notes.appel(dernier, val) if dernier is not None else p(doc, val, size=9)
        elif kind == "ohatra":
            etiq += 1
            p(doc, "Ohatra:", italic=True, under=True, color=C_OHATRA,
              first_line=None if etiq == 1 else 720, space_after=2, keep=True)
            groupe = listes.groupe(gauche=1080, hanging=360)
            for it in val:
                dernier = p(doc, it, liste=groupe, space_after=2)
            p(doc, "", space_after=2, left=2160)
        elif kind == "bul":
            groupe = listes.groupe(gauche=1080, hanging=360)
            for it in val:
                dernier = p(doc, it, liste=groupe, space_after=2)
            p(doc, "", space_after=2, left=2160)
        elif kind == "tabl":
            tete, andalana = val
            t = doc.add_table(rows=1 + len(andalana), cols=len(tete))
            style_table(t, STYLE_GRILLE)
            t.alignment = WD_TABLE_ALIGNMENT.CENTER
            for j, h in enumerate(tete):
                cellule(t.cell(0, j), h, bold=True)
            for i, row in enumerate(andalana, start=1):
                for j, v in enumerate(row):
                    cellule(t.cell(i, j), v, bold=True, italic=True, color=C_EXEMPLE)
            p(doc, "", space_after=2)


# ------------------------------------------------------- FANAZARAN-TENA
def exercices(doc, d, listes):
    saut(doc)
    p(doc, "FANAZARAN-TENA", bold=True, under=True, color=C_NOIR, space_after=4)
    consignes = listes.groupe(gauche=360, hanging=360)
    for ex in d["exos"]:
        p(doc, ex["consigne"], liste=consignes, space_after=2, keep=True)
        if "tsilo" in ex:
            gauche, droite = ex["tsilo"]
            n = min(len(gauche), len(droite))
            mele, rezo = melange(list(droite[:n]))
            ex["_mele"], ex["_rezo"] = mele, rezo
            t = _tabalo_tsilo(doc, list(gauche[:n]), mele)
            p(doc, "", space_after=2)
        elif "banga" in ex:
            lignes = ex["banga"]
            if isinstance(lignes, str):
                lignes = [lignes]
            for ligne in lignes:
                p(doc, ligne, color=C_NOIR, first_line=720, space_after=2)
            p(doc, "", space_after=2)
        else:
            p(doc, "", space_after=2)


# ----------------------------------------------------------- FANITSIANA
def fanitsiana(doc, d, listes):
    p(doc, "FANITSIANA", bold=True, under=True, color=C_CORRIGE, space_after=4)  # modele
    consignes = listes.groupe(gauche=360, hanging=360)
    for n, rep in enumerate(d["fanitsiana"], start=1):
        cons = d["exos"][n - 1]["consigne"] if n - 1 < len(d["exos"]) else ""
        p(doc, cons, liste=consignes, space_after=2, keep=True)
        if "tsilo" in rep:
            # le modele : le FANITSIANA dia mamerina ny tabilao mitovy, ary eto no misy ny
            # « Connecteur droit avec flèche » magenta — 6 traits, iray isaky ny andalana.
            ex = d["exos"][n - 1]
            if "tsilo" not in ex:            # fiche laoza : tabilao betsy tsy misy tsilo
                for gauche, droite in rep["tsilo"]:
                    p(doc, "%s : %s" % (gauche, droite), color=C_NOIR, first_line=720,
                      space_after=2)
                p(doc, "", space_after=2)
                continue
            gauche = list(ex["tsilo"][0])
            mele = ex.get("_mele") or list(ex["tsilo"][1])
            rezo = ex.get("_rezo") or {}
            t = _tabalo_tsilo(doc, gauche, mele)
            for i in range(len(gauche)):
                if i in rezo:
                    fleche(t.cell(i, 1).paragraphs[0], i, rezo[i], doc)
        elif "banga" in rep:
            lignes = rep["banga"]
            if isinstance(lignes, str):
                lignes = [lignes]
            for ligne in lignes:
                p(doc, ligne, color=C_NOIR, first_line=720, space_after=2)
        elif "ohatra" in rep:
            for mot in rep["ohatra"]:
                p(doc, mot, italic=True, color=C_REP, space_after=2)
        elif "note" in rep:
            p(doc, rep["note"], color=C_NOIR, first_line=720, space_after=2)
        p(doc, "", space_after=2)


# --------------------------------------------------- LOHARANON-KEVITRA
def loharano(doc, d):
    if not (d.get("loharano") or d.get("pages")):
        return
    saut(doc)
    p(doc, "LOHARANON-KEVITRA", bold=True, under=True, space_after=4)
    for note in d.get("loharano", []):
        p(doc, "- " + note, space_after=2)
    racine_src = os.path.join(RACINE, "sources_web", "full")
    for nom in d.get("pages", []):
        chemin = os.path.join(racine_src, nom)
        if not os.path.exists(chemin):
            continue
        lignes = [ln.rstrip("\n") for ln in io.open(chemin, encoding="utf-8")]
        lignes = [ln for ln in lignes if not ln.startswith("#")]
        p(doc, "--- %s ---" % nom, bold=True, size=9, space_after=2, keep=True)
        for ln in lignes:
            txt = ln.strip().replace("**", "")
            if not txt:
                continue
            if txt.startswith("#"):
                p(doc, txt.lstrip("# ").strip(), bold=True, size=9, space_after=2, keep=True)
            else:
                p(doc, txt, size=9, space_after=2)


# ----------------------------------------------------------- controles
def controles(chemin, attendu):
    doc = docx.Document(chemin)
    txt = "\n".join(x.text for x in doc.paragraphs)
    for t in doc.tables:
        for r in t.rows:
            for c in r.cells:
                txt += "\n" + c.text
    attendus = ["TAKELA-PANOMANAN-DESONA", "LESONA:", "FANAZARAN-TENA", "FANITSIANA",
                "Dingana sy Faharetany", "Fizotry ny Lesona", "Mpampianatra", "Mpianatra",
                "Tetika Amam-paika", "Fitaovana", "Fanamarihana", "I. Famerenana",
                "II. LESONA VAOVAO", "1. Fitarihan-tsaina", "2. Fanolorana", "3. Fandinihana",
                "4. Famakafakana", "5. Fandravonana", "6. Fampiharana", "III. Tombana",
                "Kilasy", "Lohahevitra", "Lohateny", "V. P. M", "Fanovozan-kevitra",
                "LOHARANON-KEVITRA"] + attendu
    manquants = [a for a in attendus if a not in txt]
    defendus = ["veroso", "amboary", "apono eo", "nonoy", "sazonio", "ara-potoana", "sabonina",
                "fahadiovana", "manasa nify", "fanasan-tanana", "resena", "fandroavana",
                "natsangana", "famelezana", "androavana", "mpamboly", "nosokajiana",
                "mitahiry fahasalamana", "maha-iankinan", "Oral", "bar\u00e9m\u00e9", "BEPC",
                "minist\u00e8re de l'\u00e9ducation nationale"]
    bas = txt.lower().replace("\u2019", "'")
    sales = [w for w in defendus if w.lower() in bas]
    corps = txt.split("FANAZARAN-TENA")[0]
    apres = txt.split("FANAZARAN-TENA", 1)[1] if "FANAZARAN-TENA" in txt else ""
    apres = apres.split("FANITSIANA")[0]
    reprise = []
    for ligne in re.findall(r"[A-Z\u00c9\u00c8][^.\n]{18,}\.", corps):
        if ligne.strip() in apres:
            reprise.append(ligne.strip()[:60])
    print("controles : %d paragraphes, %d tableaux, %d caracteres" %
          (len(doc.paragraphs), len(doc.tables), len(txt)))
    if manquants:
        print("MANQUANT :", manquants)
        sys.exit(1)
    if sales:
        print("FORME DEFENDUE :", sales)
        sys.exit(1)
    if reprise:
        print("REPRISES DANS LES EXERCICES :", reprise)
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
    fiches = d.get("FICHES") or [d]
    sortie = os.path.join(RACINE, "output", nom)

    doc = docx.Document()
    s = doc.sections[0]
    s.page_width, s.page_height = Cm(21), Cm(29.7)
    s.left_margin = s.right_margin = s.top_margin = s.bottom_margin = Twips(1020)
    normal = doc.styles["Normal"]
    normal.font.name = "Times New Roman"   # decision du maitre (2026-10-29) : TNR 12
    normal.font.size = Pt(12)
    for el in ("w:rFonts",):
        pass
    normal.paragraph_format.space_after = Pt(10)
    listes = Listes(doc)
    notes = Notes(doc)

    for k, f in enumerate(fiches):
        if k:
            saut(doc)
        for _ in range(4):
            p(doc, "", centre=True, space_after=0)
        p(doc, f["zt"], color=C_TITRE_ZT.get(f["zt"], "E36C0A"), size=90, centre=True,
          space_after=13)
        p(doc, "", space_after=0)
        takela(doc, f, notes)
        lesona(doc, f, listes, notes)
        exercices(doc, f, listes)
        fanitsiana(doc, f, listes)
        loharano(doc, f)

    doc.save(sortie)
    print("ecrit :", sortie, os.path.getsize(sortie), "o")
    controles(sortie, [fiches[0]["lt"]])


if __name__ == "__main__":
    main()
