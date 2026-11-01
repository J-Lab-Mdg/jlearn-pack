# -*- coding: utf-8 -*-
"""
sary_tabalo.py — tabilao fampifandraisana (tsilo) : SARY FENO, TSY tabilao Word intsony.

Mba inona ? Teo aloha dia tabilao Word ny « FANITSIANA », ary nanaovana ancre flottante
ny tsilo : mety miasa, fa ny toeranan'ny tsilo dia miankin-doha amin'ny halavan'ny
lahatsoratra voasoratra an-tabilao — ka raha miova ny polise/spacing an'Word dia miova
koa ny fihaonana. (famalian'ny mpanabe : « tu generes les textes aussi dans le svg et le
fleches entrera bien »).

Etro dia ny **tabilao manontolo** (sisiny, soratra, tsilo) dia endrika SVG iray :
  - ny soratra = contours (paths) avy amin'ny TTF, ka TSY mila polise ilay mamerina azy ;
  - ny tsilo = Coordinates avy amin'ny layout ihany → tsy mety diso intsony ;
  - fallback PNG (Pillow) ho an'ny Word tsy mahay SVG.

Rafitra : lisitra « ops » (opératy) iray no lasin'ny mpamokatra rehetra :
    ("texte", x, y_baseline, txt, taille_pt, gras, italik, couleur)
    ("ligne", x0, y0, x1, y1, w_pt, couleur)
    ("poly",  [(x, y), ...], couleur)
    ("cadre", x0, y0, x1, y1, w_pt, couleur)

        ./run.sh src/sary_tabalo.py            -> mamerina sary ohatra (test)
"""
import glob
import os

TW2PT = 1.0 / 20.0
PT2EMU = 12700
PT2PX = 96.0 / 72.0

COLS = (4400, 567, 4899)      # twips : havia | tsilo | ankavanana
HAUT = 22.0                   # points : halavan'ny rangee iray
MARGE = 5.4                   # points : gouttiere ao anaty takelaka
TAILLE = 12.0                 # points
COUL_NOIR = "000000"
COUL_FLECHE = "FF00FF"
COUL_CADRE = "808080"
DOSSIER_POLICE = os.environ.get("POLICE", "/home/user/police")

FICHIERS = {"normal": "Tinos-Regular.ttf", "gras": "Tinos-Bold.ttf",
            "italik": "Tinos-Italic.ttf", "gras_italik": "Tinos-BoldItalic.ttf"}


def _trouver(nom):
    """Tinos (métriques = Times New Roman) na DejaVu raha tsy misy."""
    racines = [DOSSIER_POLICE]
    for base in (os.environ.get("PYTHONPATH", "") or "").split(os.pathsep):
        if base:
            racines.append(base)
    candidats = [nom]
    base = os.path.splitext(nom)[0].lower()
    if "tinos" in base:
        candidats.append("DejaVuSans%s.ttf" % ("-" + base.split("-")[-1].title()
                                               if "-" in base else ""))
        candidats.append("DejaVuSans.ttf")
    for c in candidats:
        for r in racines:
            for p in glob.glob(os.path.join(r, "**", c), recursive=True):
                return p
    return None


class Fonte:
    """Kely : halavan'ny soratra sy contours des glyphes, amin'ny points."""

    def __init__(self, chemin):
        from fontTools.ttLib import TTFont
        self.chemin = chemin
        f = TTFont(chemin)
        self.upem = f["head"].unitsPerEm
        self.cmap = f.getBestCmap()
        self.glyphes = f.getGlyphSet()
        self.hmtx = f["hmtx"]
        self._cache = {}

    def _nom(self, c):
        return self.cmap.get(ord(c))

    def largeur(self, txt, pt):
        k = pt / float(self.upem)
        return sum(self.hmtx[self._nom(c)][0] * k for c in txt if self._nom(c))

    def chemin_svg(self, txt, pt):
        """Contour (path SVG) ho an'ny `txt`, mifanaraka amin'ny (0, 0) — ny
        `translate` no ametra-na azy ao an'ny sary, ka azo anaovana cache ny path."""
        from fontTools.pens.svgPathPen import SVGPathPen
        from fontTools.pens.transformPen import TransformPen
        from fontTools.misc.transform import Transform
        cle = (txt, round(pt, 3))
        if cle in self._cache:
            return self._cache[cle]
        k = pt / float(self.upem)
        parts = []
        cour = 0.0
        for c in txt:
            g = self._nom(c)
            if not g:
                espace = self._nom(" ")
                cour += self.hmtx[espace][0] * k if espace else pt * 0.3
                continue
            pen = SVGPathPen(self.glyphes)
            self.glyphes[g].draw(TransformPen(pen, Transform(k, 0, 0, -k, cour, 0.0)))
            parts.append(pen.getCommands())
            cour += self.hmtx[g][0] * k
        d = " ".join(parts)
        self._cache[cle] = d
        return d


_FONTES = {}


def fonte(cle="normal"):
    if cle not in _FONTES:
        chemin = _trouver(FICHIERS[cle]) or _trouver("DejaVuSans.ttf")
        _FONTES[cle] = Fonte(chemin) if chemin else None
    return _FONTES[cle]


def retirer_marques(txt):
    out, i = "", 0
    while i < len(txt):
        if txt.startswith("**", i):
            j = txt.find("**", i + 2)
            if j < 0:
                break
            i = j + 2
            continue
        out += txt[i]
        i += 1
    return out


def _polisy(txt, gras=False, italik=False):
    for cle in (("gras_italik" if gras and italik else "gras" if gras
                 else "italik" if italik else "normal"), "normal"):
        f = fonte(cle)
        if f is not None:
            return f
    return None


def largeur(txt, pt=TAILLE, gras=False, italik=False):
    f = _polisy(gras, italik)
    txt = retirer_marques(txt)
    if f is None:                            # ref : ~0.5 em isaky ny endri-tsoratra
        return len(txt) * pt * 0.5
    return f.largeur(txt, pt)


def _fit(txt, dispo, pt=TAILLE, gras=False, italik=False):
    """Ampihena ny haba hatramin'ny 9 pt mba tsy haloaka ny sisin'ny kolona."""
    pt = float(pt)
    warns = []
    while pt > 9.0 and largeur(txt, pt, gras, italik) > dispo:
        pt -= 0.5
        warns.append("tambo")
    return pt, bool(warns)


# ----------------------------------------------------------------- lalana ny sary
def tabalo(gauche, droite, rezo=None, cols=COLS, haut=HAUT, taille=TAILLE,
           puce=True, retour=False):
    """(ops, habe, hatevina) — `rezo` = {i: j} : ny tsilo avy amin'ny rangee i
    mankany amin'ny rangee j. Raha tsy misy dia tabilao fotsiny (FANAZARAN-TENA)."""
    n = len(gauche)
    cols_pt = [c * TW2PT for c in cols]
    w = sum(cols_pt)
    h = n * haut
    dispo = [c - 2 * MARGE for c in cols_pt]
    ops, avis = [], []
    xb = [0.0]
    for c in cols_pt:
        xb.append(xb[-1] + c)
    for i in range(n + 1):                   # tsipika mana
        ops.append(("ligne", 0.0, i * haut, w, i * haut, 0.5, COUL_CADRE))
    for x in xb:                             # tsipika mitsangana
        ops.append(("ligne", x, 0.0, x, h, 0.5, COUL_CADRE))
    ga_l, dr_l = [], []
    for i in range(n):
        g = retirer_marques(gauche[i]) + ("  \u2022" if puce else "")
        d = retirer_marques(droite[i])
        tg, wg = _fit(g, dispo[0], taille)
        td, wd = _fit(d, dispo[2], taille)
        ga_l.append((g, tg, wg))
        dr_l.append((d, td, wd))
        if wg or wd:
            avis.append("rangee %d : soratra narerenina (%.1f / %.1f pt)"
                        % (i, tg, td))
        y = i * haut + haut / 2.0 + taille * 0.34
        ops.append(("texte", MARGE, y, g, tg, False, False, COUL_NOIR))
        ops.append(("texte", xb[1] + MARGE, y, d, td, False, False, COUL_NOIR))
    if rezo:
        # ny trait dia mamela ny soratra havia, ary miato akaikin'ny soratra ankavanana
        max_g = max(largeur(g, t) for g, t, _ in ga_l)
        x0 = min(max(MARGE + max_g + 8.0, xb[0] - 40.0), xb[1] - 12.0)
        x1 = xb[1] + MARGE - 3.0
        for i, j in sorted(rezo.items()):
            yc = i * haut + haut / 2.0
            yk = j * haut + haut / 2.0
            ops.append(("fleche", x0, yc, x1, yk, 1.0, COUL_FLECHE))
    return ops, w, h, avis


def fleche_poly(x0, y0, x1, y1, tete=9.0, loko=2.1):
    """Pointe de fleche : (tip, base+perp, base-perp) + ny rantsan'ny trait."""
    dx, dy = x1 - x0, y1 - y0
    n = (dx * dx + dy * dy) ** 0.5 or 1.0
    ux, uy = dx / n, dy / n
    px, py = -uy * loko, ux * loko
    bx, by = x1 - ux * tete, y1 - uy * tete
    return (bx + px, by + py), (bx - px, by - py)


def _ops_avec_fleches(ops, tete=9.0):
    out = []
    for op in ops:
        if op[0] == "fleche":
            _, x0, y0, x1, y1, w, col = op
            dx, dy = x1 - x0, y1 - y0
            n = (dx * dx + dy * dy) or 1.0
            ex, ey = dx / n, dy / n
            xb, yb = x1 - ex * tete, y1 - ey * tete
            b1, b2 = fleche_poly(x0, y0, x1, y1, tete)
            out.append(("ligne", x0, y0, xb, yb, w, col))
            out.append(("poly", [(x1, y1), b1, b2], col))
        else:
            out.append(op)
    return out


# ------------------------------------------------------------------------- SVG
def svg_de(ops, w, h, fond="FFFFFF"):
    """Opy -> SVG. Ny soratra dia lasa `path` (contours) : tsy mila polise."""
    out = ['<svg xmlns="http://www.w3.org/2000/svg" width="%.0f" height="%.0f" '
           'viewBox="0 0 %.2f %.2f"><rect width="%.2f" height="%.2f" fill="#%s"/>'
           % (round(w * PT2PX), round(h * PT2PX), w, h, w, h, fond)]
    for op in _ops_avec_fleches(ops):
        t = op[0]
        if t == "ligne":
            _, x0, y0, x1, y1, ep, col = op
            out.append('<line x1="%.2f" y1="%.2f" x2="%.2f" y2="%.2f" stroke="#%s" '
                       'stroke-width="%.2f" stroke-linecap="round"/>'
                       % (x0, y0, x1, y1, col, ep))
        elif t == "poly":
            _, pts, col = op
            out.append('<polygon points="%s" fill="#%s"/>'
                       % (" ".join("%.2f,%.2f" % p for p in pts), col))
        elif t == "texte":
            _, x, y, txt, pt, gras, italik, col = op
            f = _polisy(gras, italik)
            if f is None:
                continue
            out.append('<path transform="translate(%.2f %.2f)" d="%s" fill="#%s"/>'
                       % (x, y, f.chemin_svg(retirer_marques(txt), pt), col))
    out.append("</svg>")
    return "".join(out).encode("utf-8")


# ------------------------------------------------------------------------- PNG
def png_de(ops, w, h, echelle=2.0, fond=(255, 255, 255)):
    """Opy -> PNG (fallback / sary hikarokarana). TAF2 = pixels per point."""
    from PIL import Image, ImageDraw, ImageFont
    k = 72.0 / 96.0 * PT2PX * echelle          # 1 pt -> 1 * echelle px (96 ppp x echelle)
    img = Image.new("RGB", (max(int(round(w * k)), 8), max(int(round(h * k)), 8)), fond)
    dr = ImageDraw.Draw(img)
    caches = {}

    def truetype(pt, gras, italik):
        cle = (round(pt, 2), gras, italik)
        if cle not in caches:
            nom = ("gras_italik" if gras and italik else "gras" if gras
                   else "italik" if italik else "normal")
            chemin = _trouver(FICHIERS[nom]) or _trouver("DejaVuSans.ttf")
            px = max(int(round(pt * k)), 6)
            caches[cle] = (ImageFont.truetype(chemin, px) if chemin
                           else ImageFont.load_default())
        return caches[cle]

    for op in _ops_avec_fleches(ops):
        t = op[0]
        if t == "ligne":
            _, x0, y0, x1, y1, ep, col = op
            dr.line([x0 * k, y0 * k, x1 * k, y1 * k],
                    fill=tuple(int(col[i:i + 2], 16) for i in (0, 2, 4)),
                    width=max(1, int(round(ep * k))))
        elif t == "poly":
            _, pts, col = op
            dr.polygon([(a * k, b * k) for a, b in pts],
                       fill=tuple(int(col[i:i + 2], 16) for i in (0, 2, 4)))
        elif t == "texte":
            _, x, y, txt, pt, gras, italik, col = op
            dr.text((x * k, y * k), retirer_marques(txt), font=truetype(pt, gras, italik),
                    fill=tuple(int(col[i:i + 2], 16) for i in (0, 2, 4)), anchor="ls")
    import io as _io
    buf = _io.BytesIO()
    img.save(buf, "PNG")
    return buf.getvalue()


def main():
    """test : tabilao 4 lahy + 4 tsilo, aseptioro sary."""
    gauche = ["Ilaina noho ny volamena", "Noho ianao nandiso fotoana,",
              "Nony lasa izy,", "Nony handeha indrindra"]
    droite = ["ny vy.", "dia tsy hahazo valisoa ianao.", "dia nody izahay.",
              "izahay no avy ny orana."]
    import importlib.util
    spec = importlib.util.find_spec("build_fiche")
    if spec:
        bf = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(bf)
        mele, rezo = bf.melange(list(droite))
    else:
        mele, rezo = list(droite), {i: (i + 2) % len(droite) for i in range(len(droite))}
    ops, w, h, avis = tabalo(gauche, mele, rezo)
    dossier = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                           "output")
    if not os.path.isdir(dossier):
        os.makedirs(dossier)
    with open(os.path.join(dossier, "test_tabalo.svg"), "wb") as f:
        f.write(svg_de(ops, w, h))
    png_de(ops, w, h, echelle=3.0).decode("latin-1")  # (tsy mitaky fanoratana)
    from PIL import Image
    import io as _io
    Image.open(_io.BytesIO(png_de(ops, w, h, echelle=3.0))).save(
        os.path.join(dossier, "test_tabalo.png"))
    print("sary : %s" % os.path.join(dossier, "test_tabalo.png"))
    print("habe : %.1f x %.1f pt (%d rangee)" % (w, h, len(gauche)))
    for a in avis:
        print("  !", a)
    if not avis:
        print("  : )  tsy misy soratra haloaka")


if __name__ == "__main__":
    main()
