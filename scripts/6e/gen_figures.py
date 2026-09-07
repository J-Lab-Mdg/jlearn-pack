# -*- coding: utf-8 -*-
"""Generation des figures du Manuel de Mathematiques 6e."""
import sys, os, math
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from figures import *

SORTIE = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                      "..", "..", "figures-6e")
LARGEUR = 900          # largeur finale des PNG
FIGURES = {}


def figure(cle):
    def deco(fn):
        FIGURES[cle] = fn
        return fn
    return deco


# ============================================================ GEOMETRIE
@figure("triangles")
def f_triangles():
    """Les quatre sortes de triangles."""
    c = Canevas(980, 260).cadrer(-0.5, -0.6, 15.5, 2.9, bas=0.55)
    def tri(ox, pts, nom, codes):
        P = [(x + ox, y) for x, y in pts]
        c.polygone(P, ep=2)
        for a, b, n in codes:
            c.marque(P[a], P[b], n)
        c.texte((ox + 1.65, -0.5), nom, 13, BLEU, gras=True)
        return P
    tri(0, [(0, 0), (3.3, 0), (2.4, 2.3)], "quelconque", [])
    tri(4, [(0, 0), (3.3, 0), (1.65, 2.4)], "isocèle", [(0, 2, 1), (1, 2, 1)])
    tri(8, [(0, 0), (3.0, 0), (1.5, 2.598)], "équilatéral",
        [(0, 1, 1), (1, 2, 1), (0, 2, 1)])
    P = tri(12, [(0, 0), (3.2, 0), (0, 2.4)], "rectangle", [])
    c.angle_droit(P[0], P[1], P[2])
    c.legende("Les quatre sortes de triangles : codage des côtés égaux et de l'angle droit")
    return c


@figure("quadrilateres")
def f_quadrilateres():
    """Les quatre quadrilateres usuels."""
    c = Canevas(980, 270).cadrer(-0.5, -0.6, 15.5, 3.0, bas=0.55)
    def q(ox, pts, nom, droits, codes):
        P = [(x + ox, y) for x, y in pts]
        c.polygone(P, ep=2)
        for i in droits:
            c.angle_droit(P[i], P[(i + 1) % 4], P[(i - 1) % 4], 0.26)
        for a, b, n in codes:
            c.marque(P[a], P[b], n)
        c.texte((ox + 1.6, -0.5), nom, 13, BLEU, gras=True)
    q(0, [(0, 0), (3.2, 0), (3.2, 2.2), (0, 2.2)], "rectangle", [0, 1, 2, 3],
      [(0, 1, 1), (2, 3, 1), (1, 2, 2), (3, 0, 2)])
    q(4.2, [(0, 0), (2.5, 0), (2.5, 2.5), (0, 2.5)], "carré", [0, 1, 2, 3],
      [(0, 1, 1), (1, 2, 1), (2, 3, 1), (3, 0, 1)])
    q(7.8, [(1.3, 0), (2.6, 1.4), (1.3, 2.8), (0, 1.4)], "losange", [],
      [(0, 1, 1), (1, 2, 1), (2, 3, 1), (3, 0, 1)])
    q(11.6, [(0, 0), (2.8, 0), (3.7, 2.2), (0.9, 2.2)], "parallélogramme", [],
      [(0, 1, 1), (2, 3, 1), (1, 2, 2), (3, 0, 2)])
    c.legende("Les quadrilatères usuels : angles droits et côtés de même longueur")
    return c


@figure("cercle-vocabulaire")
def f_cercle():
    """Vocabulaire du cercle : centre, rayon, diametre, corde, arc."""
    c = Canevas(760, 560).cadrer(-3.4, -3.3, 3.4, 3.3, bas=0.5)
    O, R = (0, 0), 2.6
    c.cercle(O, R, TRAIT, 2)
    A = polaire(O, R, 138)
    Bp = polaire(O, R, 42)
    c.arc(O, R, 42, 138, ROUGE, 5)                      # arc en evidence
    c.ligne(A, Bp, VERT, 2)                              # corde
    D1, D2 = polaire(O, R, 205), polaire(O, R, 25)
    c.ligne(D1, D2, BLEU, 2)                             # diametre
    M = polaire(O, R, 305)
    c.ligne(O, M, ROSE, 2)                               # rayon
    for p in (O, A, Bp, D1, D2, M):
        c.point(p, 3.2)
    c.texte((0, -0.34), "O", 13, gras=True)
    c.texte(polaire(O, R + 0.34, 138), "A", 13, gras=True)
    c.texte(polaire(O, R + 0.34, 42), "B", 13, gras=True)
    c.cote(A, Bp, "corde", 0.34, 12, VERT, True)
    c.texte(polaire(O, 1.55, 25), "diamètre", 12, BLEU, True, dx=0, dy=-16)
    c.cote(O, M, "rayon", -0.38, 12, ROSE, True)
    c.texte(polaire(O, R + 0.55, 90), "arc", 12, ROUGE, True)
    c.legende("Le cercle de centre O : rayon, diamètre, corde et arc")
    return c


@figure("symetrie-point")
def f_symetrie_point():
    """Construction du symetrique d'un point."""
    c = Canevas(720, 520).cadrer(-1.0, -0.7, 6.0, 4.3, bas=0.5)
    # axe vertical
    ax = 2.9
    c.ligne((ax, -0.4), (ax, 4.1), BLEU, 2)
    c.texte((ax + 0.3, 4.0), "(d)", 12, BLEU, gras=True)
    A = (0.7, 2.6)
    H = (ax, 2.6)
    Ap = (2 * ax - A[0], A[1])
    c.ligne(A, Ap, GRIS, 1.4, pointille=True)
    c.angle_droit(H, A, (ax, 3.6), 0.26, GRIS)
    c.arc(H, abs(ax - A[0]), -32, 32, ROSE, 1.6)         # arc de report
    c.point(A); c.point(H, 3, GRIS); c.point(Ap, 3.4, ROUGE)
    c.texte((A[0] - 0.06, A[1] + 0.36), "A", 13, gras=True)
    c.texte((H[0] - 0.28, H[1] + 0.34), "H", 12, GRIS, gras=True)
    c.texte((Ap[0] + 0.1, Ap[1] + 0.36), "A'", 13, ROUGE, gras=True)
    c.marque(A, H, 1, ROSE); c.marque(H, Ap, 1, ROSE)
    c.texte((ax, 0.5), "AH = HA'", 12, ROSE, gras=True)
    c.legende("Symétrique d'un point : perpendiculaire à l'axe, puis report de la distance")
    return c


@figure("axes-symetrie")
def f_axes():
    """Nombre d'axes de symetrie des figures usuelles."""
    c = Canevas(980, 290).cadrer(-0.6, -0.9, 15.6, 3.0, bas=0.5)
    def cadre(ox, nom, n):
        c.texte((ox + 1.5, -0.55), nom, 12.5, BLEU, gras=True)
        c.texte((ox + 1.5, -0.95), f"{n} axe" + ("s" if n > 1 else ""),
                11.5, GRIS)
    # rectangle : 2 axes
    P = [(0, 0), (3.0, 0), (3.0, 2.0), (0, 2.0)]
    c.polygone(P)
    c.ligne((1.5, -0.35), (1.5, 2.35), ROUGE, 1.6, True)
    c.ligne((-0.35, 1.0), (3.35, 1.0), ROUGE, 1.6, True)
    cadre(0, "rectangle", 2)
    # losange : 2 axes
    ox = 4.2
    P = [(ox + 1.3, 0), (ox + 2.6, 1.2), (ox + 1.3, 2.4), (ox, 1.2)]
    c.polygone(P)
    c.ligne((ox + 1.3, -0.35), (ox + 1.3, 2.75), ROUGE, 1.6, True)
    c.ligne((ox - 0.35, 1.2), (ox + 2.95, 1.2), ROUGE, 1.6, True)
    cadre(ox - 0.2, "losange", 2)
    # carre : 4 axes
    ox = 8.0
    P = [(ox, 0), (ox + 2.4, 0), (ox + 2.4, 2.4), (ox, 2.4)]
    c.polygone(P)
    c.ligne((ox + 1.2, -0.35), (ox + 1.2, 2.75), ROUGE, 1.6, True)
    c.ligne((ox - 0.35, 1.2), (ox + 2.75, 1.2), ROUGE, 1.6, True)
    c.ligne((ox - 0.3, -0.3), (ox + 2.7, 2.7), ROUGE, 1.6, True)
    c.ligne((ox - 0.3, 2.7), (ox + 2.7, -0.3), ROUGE, 1.6, True)
    cadre(ox - 0.3, "carré", 4)
    # cercle : une infinite
    ox = 13.5
    c.cercle((ox, 1.2), 1.2)
    for a in range(0, 180, 30):
        c.ligne(polaire((ox, 1.2), 1.5, a), polaire((ox, 1.2), 1.5, a + 180),
                ROUGE, 1.4, True)
    c.texte((ox, -0.55), "cercle", 12.5, BLEU, gras=True)
    c.texte((ox, -0.95), "une infinité", 11.5, GRIS)
    c.legende("Axes de symétrie des figures usuelles")
    return c


# ============================================================ SOLIDES
def _pave(c, ox, oy, L, l, h, fuy=0.42, ang=32, ep=2, etiquettes=None):
    """Trace un pave droit en perspective cavaliere. Renvoie les 8 sommets."""
    dx = fuy * l * math.cos(math.radians(ang))
    dy = fuy * l * math.sin(math.radians(ang))
    A = (ox, oy); B = (ox + L, oy); C = (ox + L, oy + h); D = (ox, oy + h)
    A2 = (A[0] + dx, A[1] + dy); B2 = (B[0] + dx, B[1] + dy)
    C2 = (C[0] + dx, C[1] + dy); D2 = (D[0] + dx, D[1] + dy)
    # face avant
    c.polygone([A, B, C, D], TRAIT, ep)
    # aretes visibles du fond
    c.polyligne([B, B2, C2, D2, D], TRAIT, ep)
    c.ligne(C, C2, TRAIT, ep)
    # aretes cachees
    c.ligne(A, A2, GRIS, 1.6, True)
    c.ligne(A2, B2, GRIS, 1.6, True)
    c.ligne(A2, D2, GRIS, 1.6, True)
    return [A, B, C, D, A2, B2, C2, D2]


@figure("pave-perspective")
def f_pave():
    """Pave droit en perspective : aretes cachees, dimensions."""
    c = Canevas(760, 520).cadrer(-0.8, -0.9, 6.6, 4.4, bas=0.5)
    S = _pave(c, 0, 0, 4.0, 2.4, 2.6)
    A, B, C, D, A2, B2, C2, D2 = S
    for p in (A, B, C, D, B2, C2, D2):
        c.point(p, 3)
    c.point(A2, 3, GRIS, creux=True)
    c.cote_mesure(A, B, "Longueur", -0.45, 11.5)
    c.cote_mesure(A, D, "hauteur", 0.45, 11.5)
    c.cote_mesure(D, D2, "largeur", 0.3, 11.5)
    c.texte((2.0, 3.95), "arêtes cachées en pointillés", 11.5, GRIS)
    c.legende("Le pavé droit en perspective : 6 faces, 12 arêtes, 8 sommets")
    return c


@figure("patron-pave")
def f_patron_pave():
    """Patron du pave droit."""
    c = Canevas(820, 560).cadrer(-0.6, -0.9, 10.4, 7.0, bas=0.5)
    L, l, h = 3.4, 2.0, 2.2
    x0, y0 = 0, 0
    def rect(x, y, w, ht, txt, coul):
        c.polygone([(x, y), (x + w, y), (x + w, y + ht), (x, y + ht)],
                   TRAIT, 2, remplissage=coul)
        c.polygone([(x, y), (x + w, y), (x + w, y + ht), (x, y + ht)], TRAIT, 2)
        c.texte((x + w / 2, y + ht / 2), txt, 11.5, GRIS)
    # bande centrale : 4 faces laterales
    rect(x0, y0 + l, L, h, "L × h", BLEU and BLEUPAL)
    rect(x0 + L, y0 + l, l, h, "l × h", VERTPAL)
    rect(x0 + L + l, y0 + l, L, h, "L × h", BLEUPAL)
    rect(x0 + 2 * L + l, y0 + l, l, h, "l × h", VERTPAL)
    # dessus et dessous
    rect(x0, y0 + l + h, L, l, "L × l", JAUNE)
    rect(x0, y0, L, l, "L × l", JAUNE)
    c.cote_mesure((x0, y0 + l), (x0 + L, y0 + l), "L", -0.4, 11.5)
    c.texte((5.0, -0.55), "6 rectangles, identiques deux à deux", 11.5, GRIS)
    c.legende("Patron du pavé droit : il se replie pour reconstituer le solide")
    return c


@figure("patron-cylindre")
def f_patron_cylindre():
    """Patron du cylindre : deux disques et un rectangle, pieces disjointes."""
    r, h = 1.1, 2.6
    circ = 2 * math.pi * r
    c = Canevas(880, 430).cadrer(-0.7, -1.2, circ + 2 * r + 2.6, h + 2 * r + 0.6,
                                 bas=0.45)
    # rectangle : la surface courbe
    c.polygone([(0, 0), (circ, 0), (circ, h), (0, h)], TRAIT, 2,
               remplissage=BLEUPAL)
    c.polygone([(0, 0), (circ, 0), (circ, h), (0, h)], TRAIT, 2)
    c.texte((circ / 2, h / 2), "surface courbe", 12, GRIS)
    c.cote_mesure((0, 0), (circ, 0), "circonférence de la base = 2 × π × r",
                  -0.55, 11.5)
    c.cote_mesure((circ, 0), (circ, h), "hauteur", -0.55, 11.5)
    # les deux bases, nettement separees
    cx = circ + r + 0.9
    for cy, lib in ((h + r + 0.15, "base du dessus"), (r - 0.15, "base du dessous")):
        c.cercle((cx, cy), r, TRAIT, 2, remplissage=VERTPAL)
        c.cercle((cx, cy), r, TRAIT, 2)
        c.point((cx, cy), 2.6)
        c.ligne((cx, cy), polaire((cx, cy), r, 35), ROSE, 1.8)
        c.texte(polaire((cx, cy), r * 0.55, 35), "r", 11.5, ROSE, True, dy=-11)
        c.texte((cx, cy - r - 0.32), lib, 10.5, GRIS)
    c.legende("Patron du cylindre : deux disques et un rectangle")
    return c


# ============================================================ DONNEES
@figure("diagramme-batons")
def f_batons():
    """Diagramme en batons : moyens de transport."""
    c = Canevas(820, 500).cadrer(-1.9, -1.5, 9.0, 8.6, bas=0.4)
    donnees = [("marche", 12), ("taxi-brousse", 8), ("vélo", 15), ("voiture", 5)]
    ech = 0.45          # unites par eleve
    # axes
    c.fleche((0, 0), (8.4, 0), TRAIT, 1.8)
    c.fleche((0, 0), (0, 8.0), TRAIT, 1.8)
    for v in range(0, 16, 2):
        y = v * ech
        c.ligne((-0.13, y), (0.13, y), TRAIT, 1.5)
        c.ligne((0, y), (8.2, y), (235, 235, 235), 1)
        c.texte((-0.5, y), str(v), 11, GRIS)
    c.texte((-1.35, 4.0), "effectifs", 11.5, GRIS)
    largeur, ecart = 1.15, 0.75
    x = 0.75
    for nom, v in donnees:
        c.polygone([(x, 0), (x + largeur, 0), (x + largeur, v * ech), (x, v * ech)],
                   TRAIT, 1.8, remplissage=BLEUPAL)
        c.polygone([(x, 0), (x + largeur, 0), (x + largeur, v * ech), (x, v * ech)],
                   TRAIT, 1.8)
        c.texte((x + largeur / 2, v * ech + 0.32), str(v), 11.5, BLEU, gras=True)
        c.texte((x + largeur / 2, -0.42), nom, 11, GRIS)
        x += largeur + ecart
    c.legende("Diagramme en bâtons : effectif total 40 élèves")
    return c


@figure("diagramme-circulaire")
def f_circulaire():
    """Diagramme circulaire avec les memes donnees."""
    c = Canevas(760, 500).cadrer(-3.3, -3.0, 4.6, 3.0, bas=0.45)
    donnees = [("marche", 12, BLEUPAL), ("taxi-brousse", 8, VERTPAL),
               ("vélo", 15, JAUNE), ("voiture", 5, (250, 226, 226))]
    total = sum(v for _, v, _ in donnees)
    O, R = (0, 0), 2.3
    a0 = 90
    for nom, v, coul in donnees:
        ang = 360 * v / total
        a1 = a0 - ang
        # secteur : polygone approche par 60 points (trace exact a l'oeil)
        pts = [O] + [polaire(O, R, a0 - ang * k / 60) for k in range(61)]
        c.d.polygon([c.px(p) for p in pts], fill=coul)
        c.ligne(O, polaire(O, R, a0), TRAIT, 1.8)
        am = (a0 + a1) / 2
        pct = round(v / total * 100)
        c.texte(polaire(O, R * 0.62, am), f"{pct} %", 12, NOIR, gras=True)
        a0 = a1
    c.cercle(O, R, TRAIT, 2)
    # legende laterale
    y = 1.7
    for nom, v, coul in donnees:
        c.polygone([(3.0, y), (3.42, y), (3.42, y + 0.32), (3.0, y + 0.32)],
                   TRAIT, 1.4, remplissage=coul)
        c.texte((3.6, y + 0.16), f"{nom} ({v})", 11, GRIS, ancre="lm")
        y -= 0.62
    c.legende("Diagramme circulaire : angle du secteur = 360 × fréquence ÷ 100")
    return c


# ============================================================ EXECUTION
def main(cles=None):
    os.makedirs(SORTIE, exist_ok=True)
    liste = cles or sorted(FIGURES)
    for cle in liste:
        canevas = FIGURES[cle]()
        chemin = os.path.join(SORTIE, f"{cle}.png")
        canevas.enregistrer(chemin, LARGEUR)
        ko = os.path.getsize(chemin) / 1024
        print(f"  OK  {cle:24s} {ko:6.1f} Ko")
    print(f"{len(liste)} figure(s) dans {os.path.normpath(SORTIE)}")


if __name__ == "__main__":
    main(sys.argv[1:] or None)
