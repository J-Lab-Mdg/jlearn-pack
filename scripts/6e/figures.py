# -*- coding: utf-8 -*-
"""Bibliotheque de trace de figures geometriques pour le Manuel de Maths 6e.

Aucun rasteriseur SVG n'est disponible dans l'environnement : on dessine donc
directement en PIL, avec un surechantillonnage (facteur SS) puis une reduction
LANCZOS, ce qui donne des traits nets et antialiases.

Toutes les coordonnees sont exprimees en unites mathematiques (cm virtuels) ;
la conversion en pixels est faite par Canevas.px(). Les figures sont donc des
constructions exactes, pas des dessins approches.
"""
import math, os
from PIL import Image, ImageDraw, ImageFont

SS = 3                      # facteur de surechantillonnage
FONT_PATH = "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"
FONT_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"
FONT_ITAL = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"

# Palette alignee sur celle du manuel (builders.js)
NOIR    = (0, 0, 0)
TRAIT   = (25, 25, 25)
ROUGE   = (192, 0, 0)        # C.titre
VERT    = (30, 132, 73)      # C.soustitre
BLEU    = (31, 78, 121)      # C.motcle
ROSE    = (194, 24, 91)      # C.corrige
GRIS    = (110, 110, 110)
GRISCLR = (170, 170, 170)
BLANC   = (255, 255, 255)
BLEUPAL = (222, 238, 252)
VERTPAL = (226, 245, 235)
JAUNE   = (253, 246, 214)


class Canevas:
    """Zone de dessin. `w` et `h` en pixels finaux, `echelle` en pixels par unite."""

    def __init__(self, w, h, echelle=40, marge=14, fond=BLANC):
        self.W, self.H = w, h
        self.e = echelle
        self.marge = marge
        self.img = Image.new("RGB", (w * SS, h * SS), fond)
        self.d = ImageDraw.Draw(self.img)
        self.ox, self.oy = marge * SS, (h - marge) * SS   # origine bas-gauche

    def cadrer(self, xmin, ymin, xmax, ymax, marge=0.55, bas=0.0):
        """Calcule l'echelle et l'origine pour que la zone demandee tienne
        dans le canevas, centree, avec une marge en unites mathematiques.
        `bas` reserve de la place sous la figure (legende)."""
        lx, ly = (xmax - xmin) + 2 * marge, (ymax - ymin) + 2 * marge + bas
        self.e = min(self.W / lx, self.H / ly)
        cx, cy = (xmin + xmax) / 2, (ymin + ymax) / 2
        self.ox = self.W * SS / 2 - cx * self.e * SS
        self.oy = (self.H - bas * self.e) * SS / 2 + cy * self.e * SS
        return self

    # -------------------------------------------------- reperes
    def px(self, p):
        """Unites mathematiques -> pixels (y vers le haut)."""
        x, y = p
        return (self.ox + x * self.e * SS, self.oy - y * self.e * SS)

    def _f(self, taille, gras=False, sans=False):
        path = FONT_ITAL if sans else (FONT_BOLD if gras else FONT_PATH)
        return ImageFont.truetype(path, int(taille * SS))

    # -------------------------------------------------- primitives
    def ligne(self, a, b, couleur=TRAIT, ep=2, pointille=False):
        A, B = self.px(a), self.px(b)
        if not pointille:
            self.d.line([A, B], fill=couleur, width=int(ep * SS))
            return
        # pointilles : on decoupe le segment
        dx, dy = B[0] - A[0], B[1] - A[1]
        L = math.hypot(dx, dy)
        if L == 0:
            return
        pas = 7 * SS
        n = max(1, int(L / pas))
        for i in range(n):
            if i % 2:
                continue
            t0, t1 = i / n, min(1.0, (i + 1) / n)
            self.d.line([(A[0] + dx * t0, A[1] + dy * t0),
                         (A[0] + dx * t1, A[1] + dy * t1)],
                        fill=couleur, width=int(ep * SS))

    def polygone(self, pts, couleur=TRAIT, ep=2, remplissage=None, pointille=False):
        if remplissage:
            self.d.polygon([self.px(p) for p in pts], fill=remplissage)
        for i in range(len(pts)):
            self.ligne(pts[i], pts[(i + 1) % len(pts)], couleur, ep, pointille)

    def polyligne(self, pts, couleur=TRAIT, ep=2, pointille=False):
        for i in range(len(pts) - 1):
            self.ligne(pts[i], pts[i + 1], couleur, ep, pointille)

    def cercle(self, centre, r, couleur=TRAIT, ep=2, remplissage=None):
        C = self.px(centre)
        R = r * self.e * SS
        box = [C[0] - R, C[1] - R, C[0] + R, C[1] + R]
        if remplissage:
            self.d.ellipse(box, fill=remplissage)
        self.d.ellipse(box, outline=couleur, width=int(ep * SS))

    def arc(self, centre, r, a0, a1, couleur=TRAIT, ep=2):
        """Arc de cercle, angles en degres, sens trigonometrique."""
        C = self.px(centre)
        R = r * self.e * SS
        box = [C[0] - R, C[1] - R, C[0] + R, C[1] + R]
        self.d.arc(box, -a1, -a0, fill=couleur, width=int(ep * SS))

    def point(self, p, r=3.2, couleur=TRAIT, creux=False):
        P = self.px(p)
        R = r * SS
        box = [P[0] - R, P[1] - R, P[0] + R, P[1] + R]
        if creux:
            self.d.ellipse(box, fill=BLANC, outline=couleur, width=int(1.6 * SS))
        else:
            self.d.ellipse(box, fill=couleur)

    def texte(self, p, txt, taille=13, couleur=NOIR, gras=False, sans=False,
              ancre="mm", dx=0, dy=0):
        P = self.px(p)
        self.d.text((P[0] + dx * SS, P[1] + dy * SS), txt,
                    font=self._f(taille, gras, sans), fill=couleur, anchor=ancre)

    # -------------------------------------------------- codages geometriques
    def angle_droit(self, sommet, p1, p2, taille=0.28, couleur=TRAIT, ep=2):
        """Petit carre marquant l'angle droit en `sommet`."""
        u = _unitaire(sommet, p1)
        v = _unitaire(sommet, p2)
        a = (sommet[0] + u[0] * taille, sommet[1] + u[1] * taille)
        b = (sommet[0] + u[0] * taille + v[0] * taille,
             sommet[1] + u[1] * taille + v[1] * taille)
        c = (sommet[0] + v[0] * taille, sommet[1] + v[1] * taille)
        self.polyligne([a, b, c], couleur, ep)

    def marque(self, a, b, n=1, couleur=TRAIT, ep=2, taille=0.13):
        """Codage d'egalite de longueurs : n petits traits au milieu de [ab]."""
        mx, my = (a[0] + b[0]) / 2, (a[1] + b[1]) / 2
        u = _unitaire(a, b)
        perp = (-u[1], u[0])
        ecart = 0.09
        for i in range(n):
            dec = (i - (n - 1) / 2) * ecart
            c = (mx + u[0] * dec, my + u[1] * dec)
            self.ligne((c[0] - perp[0] * taille, c[1] - perp[1] * taille),
                       (c[0] + perp[0] * taille, c[1] + perp[1] * taille),
                       couleur, ep)

    def cote(self, a, b, txt, decal=0.3, taille=12, couleur=NOIR, gras=False):
        """Etiquette de longueur placee a cote du segment [ab]."""
        u = _unitaire(a, b)
        perp = (-u[1], u[0])
        mx, my = (a[0] + b[0]) / 2, (a[1] + b[1]) / 2
        self.texte((mx + perp[0] * decal, my + perp[1] * decal), txt,
                   taille, couleur, gras)

    def arc_angle(self, sommet, p1, p2, r=0.5, txt=None, couleur=ROUGE, ep=2,
                  taille=12):
        """Arc marquant un angle, avec sa mesure eventuelle."""
        a0 = math.degrees(math.atan2(p1[1] - sommet[1], p1[0] - sommet[0]))
        a1 = math.degrees(math.atan2(p2[1] - sommet[1], p2[0] - sommet[0]))
        if a1 < a0:
            a0, a1 = a1, a0
        if a1 - a0 > 180:
            a0, a1 = a1, a0 + 360
        self.arc(sommet, r, a0, a1, couleur, ep)
        if txt:
            am = math.radians((a0 + a1) / 2)
            rp = r + 0.34
            self.texte((sommet[0] + math.cos(am) * rp,
                        sommet[1] + math.sin(am) * rp), txt, taille, couleur, True)

    def fleche(self, a, b, couleur=TRAIT, ep=2, tete=0.16):
        self.ligne(a, b, couleur, ep)
        u = _unitaire(a, b)
        perp = (-u[1], u[0])
        p1 = (b[0] - u[0] * tete + perp[0] * tete * 0.5,
              b[1] - u[1] * tete + perp[1] * tete * 0.5)
        p2 = (b[0] - u[0] * tete - perp[0] * tete * 0.5,
              b[1] - u[1] * tete - perp[1] * tete * 0.5)
        self.d.polygon([self.px(b), self.px(p1), self.px(p2)], fill=couleur)

    def cote_mesure(self, a, b, txt, decal=0.42, taille=11, couleur=GRIS):
        """Cote avec fleches aux deux extremites, decalee du segment."""
        u = _unitaire(a, b)
        perp = (-u[1], u[0])
        A = (a[0] + perp[0] * decal, a[1] + perp[1] * decal)
        B = (b[0] + perp[0] * decal, b[1] + perp[1] * decal)
        self.fleche(A, B, couleur, 1.4, 0.13)
        self.fleche(B, A, couleur, 1.4, 0.13)
        self.ligne(a, A, couleur, 1)
        self.ligne(b, B, couleur, 1)
        mx, my = (A[0] + B[0]) / 2, (A[1] + B[1]) / 2
        self.texte((mx + perp[0] * 0.26, my + perp[1] * 0.26), txt, taille, couleur)

    def quadrillage(self, x0, y0, x1, y1, pas=1, couleur=(228, 228, 228), ep=1):
        n = int(round((x1 - x0) / pas))
        m = int(round((y1 - y0) / pas))
        for i in range(n + 1):
            self.ligne((x0 + i * pas, y0), (x0 + i * pas, y1), couleur, ep)
        for j in range(m + 1):
            self.ligne((x0, y0 + j * pas), (x1, y0 + j * pas), couleur, ep)

    def legende(self, txt, taille=11.5, couleur=GRIS):
        """Legende centree en bas de la figure."""
        self.d.text((self.W * SS / 2, (self.H - 7) * SS), txt,
                    font=self._f(taille, sans=True), fill=couleur, anchor="mm")

    # -------------------------------------------------- sortie
    def enregistrer(self, chemin, largeur=None):
        img = self.img
        cible = largeur or self.W
        img = img.resize((cible, int(self.H * cible / self.W)), Image.LANCZOS)
        os.makedirs(os.path.dirname(chemin), exist_ok=True)
        img.save(chemin, "PNG", optimize=True)
        return chemin


def _unitaire(a, b):
    dx, dy = b[0] - a[0], b[1] - a[1]
    n = math.hypot(dx, dy)
    return (0, 0) if n == 0 else (dx / n, dy / n)


def milieu(a, b):
    return ((a[0] + b[0]) / 2, (a[1] + b[1]) / 2)


def polaire(centre, r, deg):
    a = math.radians(deg)
    return (centre[0] + r * math.cos(a), centre[1] + r * math.sin(a))
