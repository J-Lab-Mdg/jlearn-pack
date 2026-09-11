#!/usr/bin/env python3
"""Générateur de manuels J-Learn au format .docx — Traitement C.

Le paquet npm `docx` n'est pas installable ici (pas de réseau) : on écrit l'OOXML
directement, en réutilisant la balise <w:document> (32 namespaces), les styles et le
<sectPr> d'un manuel source J-Learn conforme — règle critique n°5 du skill.

Usage typique :
    from jlearn_docx import Doc, COULEURS
    d = Doc(template="Manuel_Geographie_1ereACD_V1_FINAL.docx")
    d.titre1("SÉANCE 1 — Observer le trajet du soleil", anchor="s1")
    d.table_fiche(rows, widths)
    d.save("output/Manuel_Geographie_9e_V2_S1.docx")
"""
import os
import re
import shutil
import zipfile

TNR = "Times New Roman"
COULEURS = {
    "noir": "000000",
    "rouge": "C00000",
    "vert": "1F6B2E",
    "bleu": "1F4E79",
    "corrige": "C2185B",      # couleur du corrigé — défaut skill
    "saumon": "E2725B",       # mots clés surlignés dans la leçon et le résumé
    "gris_clair": "F2F2F2",
    "bleu_clair": "D9E2F3",
}

W_UTILE = 9906  # largeur imprimable A4 (11906 - 2 x 1000 twips de marge)


def esc(t):
    return (str(t).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;"))


def rPr(size=20, bold=False, italic=False, color=None, underline=False):
    x = ["<w:rPr>"]
    x.append(f'<w:rFonts w:ascii="{TNR}" w:hAnsi="{TNR}" w:cs="{TNR}"/>')
    if bold:
        x.append("<w:b/><w:bCs/>")
    if italic:
        x.append("<w:i/><w:iCs/>")
    if underline:
        x.append('<w:u w:val="single"/>')
    if color:
        x.append(f'<w:color w:val="{color}"/>')
    x.append(f'<w:sz w:val="{size}"/><w:szCs w:val="{size}"/>')
    x.append("</w:rPr>")
    return "".join(x)


def run(text, size=20, bold=False, italic=False, color=None, underline=False):
    return (f'<w:r>{rPr(size, bold, italic, color, underline)}'
            f'<w:t xml:space="preserve">{esc(text)}</w:t></w:r>')


def png_size(path):
    """Lit largeur/hauteur dans l'en-tête PNG (IHDR)."""
    with open(path, "rb") as fh:
        head = fh.read(26)
    if head[:8] != b"\x89PNG\r\n\x1a\n":
        raise ValueError(f"{path} n'est pas un PNG")
    w = int.from_bytes(head[16:20], "big")
    h = int.from_bytes(head[20:24], "big")
    return w, h


def runs_mots_cles(text, size=20, bold=False, italic=False, color=None, underline=False,
                   termes=()):
    """Un run par segment ; les `termes` sont écrits en saumon.

    Un terme commençant par une majuscule n'est reconnu qu'à l'identique (ainsi
    « Est » n'est pas confondu avec le verbe « est »).
    """
    if not termes:
        return run(text, size, bold, italic, color, underline)
    import re as _re
    motifs = []
    for terme in sorted(termes, key=len, reverse=True):
        drapeau = 0 if terme[:1].isupper() else _re.IGNORECASE
        motifs.append(_re.compile(r"(?<![\w])" + _re.escape(terme) + r"(?![\w])", drapeau))
    segs, pos = [], 0
    while pos < len(text):
        meilleur = None
        for motif in motifs:
            m = motif.search(text, pos)
            if m and (meilleur is None or m.start() < meilleur.start()):
                meilleur = m
        if meilleur is None:
            break
        if meilleur.start() > pos:
            segs.append((text[pos:meilleur.start()], False))
        segs.append((meilleur.group(0), True))
        pos = meilleur.end()
    segs.append((text[pos:], False))
    return "".join(
        run(morceau, size, bold, italic, COULEURS["saumon"] if cle else color, underline)
        for morceau, cle in segs if morceau)


class Doc:
    def __init__(self, template="Manuel_Geographie_1ereACD_V1_FINAL.docx"):
        self.template = template
        self.z = zipfile.ZipFile(template)
        src = self.z.read("word/document.xml").decode("utf-8")
        i = src.find("<w:document")
        self.head = src[:src.find(">", i) + 1]              # balise <w:document …>
        m = re.search(r"<w:sectPr[\s>][\s\S]*?</w:sectPr>", src)
        self.sectPr = m.group(0)
        self.body = []
        self.bm_id = 0
        self.media = []      # [(chemin_source, cible_dans_le_zip)]
        self.rids = {}       # {nom_de_fichier: rId}
        self.img_id = 0

    # ------------------------------------------------------------------ blocs
    def add(self, xml):
        self.body.append(xml)

    def saut_page(self):
        self.add('<w:p><w:r><w:br w:type="page"/></w:r></w:p>')

    def paragraphe(self, text="", size=20, bold=False, italic=False, color=None,
                   align=None, style=None, space_after=120, indent=None, underline=False,
                   termes=()):
        pPr = ["<w:pPr>"]
        if style:
            pPr.append(f'<w:pStyle w:val="{style}"/>')
        if align:
            pPr.append(f'<w:jc w:val="{align}"/>')
        if indent:
            pPr.append(f'<w:ind w:left="{indent}"/>')
        pPr.append(f'<w:spacing w:after="{space_after}" w:before="0"/>')
        pPr.append("</w:pPr>")
        self.add(f'<w:p>{"".join(pPr)}'
                 f'{runs_mots_cles(text, size, bold, italic, color, underline, termes)}</w:p>')

    def ligne_vide(self, size=20):
        self.paragraphe("", size=size, space_after=60)

    def titre(self, text, anchor=None, size=28, bold=True, color="rouge", align="left",
              space_after=200):
        """Titre avec signet optionnel (sommaire interactif)."""
        if anchor:
            self.bm_id += 1
            bid = str(self.bm_id)
            self.add(f'<w:bookmarkStart w:id="{bid}" w:name="{anchor}"/>')
        self.paragraphe(text, size=size, bold=bold, color=COULEURS.get(color, color),
                        align=align, space_after=space_after)
        if anchor:
            self.add(f'<w:bookmarkEnd w:id="{bid}"/>')

    def lien_interne(self, anchor, text, size=20):
        self.add(f'<w:p><w:hyperlink w:anchor="{anchor}" w:history="1">'
                 f'{run(text, size=size, underline=True, color=" bleu".strip())}'
                 f"</w:hyperlink></w:p>")

    # ------------------------------------------------------------------ tables
    @staticmethod
    def _borders(sz=4, color="7F7F7F"):
        b = "".join(
            f'<w:{c} w:val="single" w:sz="{sz}" w:space="0" w:color="{color}"/>'
            for c in ("top", "left", "bottom", "right", "insideH", "insideV"))
        return f"<w:tblBorders>{b}</w:tblBorders>"

    def table(self, rows, widths, borders=True, header_fill="bleu_clair",
              border_sz=4, border_color="7F7F7F"):
        """rows : liste de lignes ; chaque cellule = dict(text, span, fill, bold,
        size, color, align, italic)."""
        grid = "".join(f'<w:gridCol w:w="{w}"/>' for w in widths)
        xml = ['<w:tbl><w:tblPr><w:tblW w:w="5000" w:type="pct"/>']
        if borders:
            xml.append(self._borders(border_sz, border_color))
        xml.append(f'<w:tblCellMar><w:left w:w="60" w:type="dxa"/>'
                   f'<w:right w:w="60" w:type="dxa"/></w:tblCellMar>')
        xml.append("</w:tblPr>")
        xml.append(f"<w:tblGrid>{grid}</w:tblGrid>")
        for r_i, row in enumerate(rows):
            xml.append('<w:tr><w:trPr><w:cantSplit/></w:trPr>' if r_i == 0 else "<w:tr>")
            col = 0
            for cell in row:
                text = cell.get("text", "")
                size = cell.get("size", 18)
                bold = cell.get("bold", False)
                fill = cell.get("fill") or (header_fill if r_i == 0 else None)
                tcPr = ["<w:tcPr>"]
                span_n = cell.get("span", 1)
                largeur_cellule = sum(widths[col:col + span_n]) if col < len(widths) else 0
                col += span_n
                if largeur_cellule:
                    tcPr.append(f'<w:tcW w:w="{largeur_cellule}" w:type="dxa"/>')
                if cell.get("span"):
                    tcPr.append(f'<w:gridSpan w:val="{cell["span"]}"/>')
                if cell.get("vmerge") == "start":
                    tcPr.append('<w:vMerge w:val="restart"/>')
                elif cell.get("vmerge") == "suite":
                    tcPr.append("<w:vMerge/>")
                if fill:
                    tcPr.append(f'<w:shd w:val="clear" w:color="auto" '
                                f'w:fill="{COULEURS.get(fill, fill)}"/>')
                tcPr.append('<w:vAlign w:val="center"/>')
                tcPr.append("</w:tcPr>")
                # texte multiligne : chaque "\n" devient un paragraphe
                align = cell.get("align", "left")
                ital = cell.get("italic", False)
                coul = COULEURS.get(cell.get("color"), cell.get("color"))
                paras = []
                for ln in str(text).split("\n"):
                    paras.append(
                        '<w:p><w:pPr><w:spacing w:after="0" w:before="0"/>'
                        '<w:jc w:val="' + align + '"/></w:pPr>'
                        + run(ln, size, bold, ital, coul) + '</w:p>')
                paras = "".join(paras)
                xml.append(f'<w:tc>{"".join(tcPr)}{paras}</w:tc>')
            xml.append("</w:tr>")
        xml.append("</w:tbl>")
        self.add("".join(xml))
        # paragraphe vide après tableau (sinon Word fusionne deux tables collées)
        self.add('<w:p><w:pPr><w:spacing w:after="0"/></w:pPr></w:p>')

    # ----------------------------------------------------------------- images
    def image(self, path, caption=None, width_px=660, align="center"):
        """Insère un PNG. Les namespaces a: et pic: sont déclarés localement
        (la balise w:document du squelette ne les porte pas — interdit de la réécrire).

        JL_SANS_IMAGES=1 dans l'environnement : n'insère rien (diagnostic Word).
        """
        import os as _os
        if _os.environ.get("JL_SANS_IMAGES") == "1":
            if caption:
                self.paragraphe(caption, size=22, italic=True, align="center", space_after=120)
            return
        nom = os.path.basename(path)
        if nom in self.rids:                      # même image réutilisée : même relation
            rid = self.rids[nom]
        else:
            self.img_id += 1
            rid = f"rIdIMG{self.img_id}"
            self.rids[nom] = rid
            self.media.append((path, f"media/{nom}"))
        w_px, h_px = png_size(path)
        cx = int(width_px * 9525)
        cy = int(cx * h_px / w_px)
        drawing = (
            f'<w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0">'
            f'<wp:extent cx="{cx}" cy="{cy}"/>'
            f'<wp:effectExtent l="0" t="0" r="0" b="0"/>'
            f'<wp:docPr id="{self.img_id}" name="{esc(os.path.basename(path))}"/>'
            f'<wp:cNvGraphicFramePr/>'
            f'<a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">'
            f'<a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">'
            f'<pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture">'
            f'<pic:nvPicPr><pic:cNvPr id="0" name="{esc(os.path.basename(path))}"/>'
            f'<pic:cNvPicPr/></pic:nvPicPr>'
            f'<pic:blipFill><a:blip r:embed="{rid}"/>'
            f'<a:stretch><a:fillRect/></a:stretch></pic:blipFill>'
            f'<pic:spPr><a:xfrm><a:off x="0" y="0"/>'
            f'<a:ext cx="{cx}" cy="{cy}"/></a:xfrm>'
            f'<a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr>'
            f'</pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing>')
        self.add(f'<w:p><w:pPr><w:jc w:val="{align}"/>'
                 f'<w:spacing w:after="60"/></w:pPr><w:r>{drawing}</w:r></w:p>')
        if caption:
            self.paragraphe(caption, size=17, italic=True, align="center",
                            color="bleu", space_after=160)
        return rid

    # --------------------------------------------------------------- encadrés
    def encadre(self, titre, texte, couleur="vert", largeur=9906, size=26, termes=()):
        """Encadré pédagogique (1 cellule, bordure gauche épaisse + fond clair)."""
        fill = {"vert": "E2F0D9", "rouge": "FCE4E4", "bleu": "DEEAF6",
                "noir": "F2F2F2"}.get(couleur, "F2F2F2")
        bord = {"vert": "1F6B2E", "rouge": "C00000", "bleu": "1F4E79",
                "noir": "000000"}.get(couleur, "7F7F7F")
        tcPr = (f'<w:tcPr><w:tcW w:w="{largeur}" w:type="dxa"/>'
                f'<w:shd w:val="clear" w:color="auto" w:fill="{fill}"/>'
                f'<w:tcBorders>'
                + "".join(
                    f'<w:{c} w:val="single" w:sz="{24 if c == "left" else 4}" '
                    f'w:space="0" w:color="{bord if c == "left" else "BFBFBF"}"/>'
                    for c in ("top", "left", "bottom", "right"))
                + "</w:tcBorders></w:tcPr>")
        contenu = (
            f'<w:p><w:pPr><w:spacing w:after="60" w:before="0"/></w:pPr>'
            f'{run(titre, 20, True, False, COULEURS.get(couleur, bord))}</w:p>'
            + "".join(
                f'<w:p><w:pPr><w:spacing w:after="40" w:before="0"/><w:jc w:val="both"/>'
                f'</w:pPr>{runs_mots_cles(ln, size, False, False, None, False, termes)}</w:p>'
                for ln in str(texte).split("\n")))
        self.add(f'<w:tbl><w:tblPr><w:tblW w:w="5000" w:type="pct"/></w:tblPr>'
                 f'<w:tblGrid><w:gridCol w:w="{largeur}"/></w:tblGrid>'
                 f'<w:tr><w:tc>{tcPr}{contenu}</w:tc></w:tr></w:tbl>')
        self.add('<w:p><w:pPr><w:spacing w:after="0"/></w:pPr></w:p>')

    def resume(self, phrases, titre="RÉSUMÉ", termes=(), size=26):
        """Cadre « RÉSUMÉ » : phrases courtes, mots clés en saumon."""
        txt = "\n".join("• " + p.strip() for p in phrases if p.strip())
        self.encadre(titre, txt, couleur="noir", size=size, termes=termes)

    def lexique(self, paires, titre="Lexique de la leçon", size=24):
        """Table 2 colonnes : mot | définition."""
        rows = [[{"text": titre, "bold": True, "size": size, "span": 2,
                  "fill": "bleu_clair", "align": "center"}]]
        for mot, definition in paires:
            rows.append([{"text": mot, "bold": True, "size": size - 2},
                         {"text": definition, "size": size - 2}])
        self.table(rows, [2400, 7506])

    # ----------------------------------------------------------------- sortie
    def xml(self):
        return (self.head + "<w:body>" + "".join(self.body)
                + self.sectPr + "</w:body></w:document>")

    def save(self, out_path):
        """Écrit le docx en purgeant les médias du manuel source (images non réutilisées)."""
        import re as _re
        tmp = out_path + ".tmp"
        with zipfile.ZipFile(tmp, "w", zipfile.ZIP_DEFLATED) as zo:
            for item in self.z.infolist():
                name = item.filename
                if name.startswith("word/media/"):
                    continue                      # images du manuel source : non reprises
                data = self.z.read(name)
                if name == "word/document.xml":
                    data = self.xml().encode("utf-8")
                elif name == "word/_rels/document.xml.rels":
                    rels = data.decode("utf-8")
                    rels = _re.sub(r'<Relationship[^>]*Target="media/[^"]*"[^>]*/>', "", rels)
                    images = "".join(
                        f'<Relationship Id="rIdIMG{i}" Type="http://schemas.openxmlformats'
                        f'.org/officeDocument/2006/relationships/image" Target="media/'
                        f'{os.path.basename(src)}"/>'
                        for i, (src, _) in enumerate(self.media, start=1))
                    rels = rels.replace("</Relationships>", images + "</Relationships>")
                    data = rels.encode("utf-8")
                zo.writestr(item, data)
            for src, cible in self.media:
                zo.write(src, "word/" + cible)
        shutil.move(tmp, out_path)
        return out_path

    def verif(self):
        """Check-list technique du skill (technical-notes.md)."""
        x = self.xml()
        return {
            "sectPr": len(re.findall(r"<w:sectPr[\s>]", x)),
            "ns0": x.count("ns0:"),
            "namespaces": len(re.findall(r"xmlns:", self.head)),
            "times_new_roman": x.count(TNR),
            "doubles_espaces": len(re.findall(r">[^<>]*  [^<>]*<", x)),
            "signets": len(re.findall(r"<w:bookmarkStart", x)),
            "liens": len(re.findall(r'w:anchor="', x)),
            "tables": x.count("<w:tbl>"),
        }
