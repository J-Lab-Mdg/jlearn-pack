#!/usr/bin/env python3
# ============================================================
# figures.py — figures géométriques du manuel SES T11 (série OSE)
# Style scolaire : cadres nets, aplats clairs, texte lisible.
# ============================================================
import os
import math
from PIL import Image, ImageDraw, ImageFont

OUT = os.path.join(os.path.dirname(__file__), "..", "output", "images")
FONT_DIR = "/usr/share/fonts/truetype/dejavu"

F_REG = ImageFont.truetype(os.path.join(FONT_DIR, "DejaVuSans.ttf"), 26)
F_BOLD = ImageFont.truetype(os.path.join(FONT_DIR, "DejaVuSans-Bold.ttf"), 28)
F_SMALL = ImageFont.truetype(os.path.join(FONT_DIR, "DejaVuSans.ttf"), 22)
F_MINI = ImageFont.truetype(os.path.join(FONT_DIR, "DejaVuSans.ttf"), 19)
F_TITLE = ImageFont.truetype(os.path.join(FONT_DIR, "DejaVuSans-Bold.ttf"), 32)

BLANC = (255, 255, 255)
NOIR = (0, 0, 0)
BLEU = (31, 78, 121)
BLEU_C = (217, 226, 243)
VERT = (30, 123, 52)
VERT_C = (222, 240, 226)
GRIS = (90, 90, 90)
JAUNE_C = (255, 248, 220)
ORANGE = (180, 130, 20)
VIOLET = (110, 70, 140)
VIOLET_C = (240, 230, 245)
ROUGE = (190, 60, 100)
ROSE_C = (250, 232, 238)


def texte_centre(d, box, txt, font, fill=NOIR):
    x0, y0, x1, y1 = box
    bb = d.textbbox((0, 0), txt, font=font)
    w, h = bb[2] - bb[0], bb[3] - bb[1]
    d.text((x0 + (x1 - x0 - w) / 2 - bb[0], y0 + (y1 - y0 - h) / 2 - bb[1]), txt, font=font, fill=fill)


def wrap(d, txt, font, largeur):
    mots, lignes, courante = txt.split(), [], ""
    for m in mots:
        essai = (courante + " " + m).strip()
        if d.textlength(essai, font=font) <= largeur:
            courante = essai
        else:
            if courante:
                lignes.append(courante)
            courante = m
    if courante:
        lignes.append(courante)
    return lignes


def boite(d, x0, y0, x1, y1, titre, lignes, fill=BLEU_C, bord=BLEU, interligne=28, font=F_SMALL):
    d.rounded_rectangle([x0, y0, x1, y1], radius=10, fill=fill, outline=bord, width=3)
    d.rectangle([x0, y0, x1, y0 + 46], fill=bord)
    texte_centre(d, (x0, y0, x1, y0 + 46), titre, F_BOLD, BLANC)
    y = y0 + 62
    for l in lignes:
        d.text((x0 + 16, y), l, font=font, fill=NOIR)
        y += interligne


def fleche(d, x0, y0, x1, y1, couleur=NOIR, largeur=4):
    d.line([x0, y0, x1, y1], fill=couleur, width=largeur)
    ang = math.atan2(y1 - y0, x1 - x0)
    L = 14
    a = math.pi / 7
    d.polygon([(x1, y1),
               (x1 - L * math.cos(ang - a), y1 - L * math.sin(ang - a)),
               (x1 - L * math.cos(ang + a), y1 - L * math.sin(ang + a))], fill=couleur)


def cadre(d, W, H, titre):
    d.rectangle([0, 0, W - 1, H - 1], outline=GRIS, width=2)
    texte_centre(d, (0, 20, W, 70), titre, F_TITLE, BLEU)


def tableau(d, x0, y0, largeurs, hauteurs, entetes, lignes, couleur=BLEU):
    """Dessine un tableau simple. largeurs = liste, hauteurs = liste (par ligne)."""
    x = x0
    cols = [x0]
    for l in largeurs:
        x += l
        cols.append(x)
    # entêtes
    d.rectangle([x0, y0, cols[-1], y0 + hauteurs[0]], fill=couleur)
    for i, t in enumerate(entetes):
        texte_centre(d, (cols[i], y0, cols[i + 1], y0 + hauteurs[0]), t, F_BOLD, BLANC)
    y = y0 + hauteurs[0]
    for r, lig in enumerate(lignes):
        h = hauteurs[r + 1]
        d.rectangle([x0, y, cols[-1], y + h], fill=BLANC if r % 2 == 0 else BLEU_C, outline=GRIS, width=2)
        for c, val in enumerate(lig):
            d.text((cols[c] + 12, y + (h - 24) / 2), val, font=F_SMALL, fill=NOIR)
        y += h
    # lignes verticales
    for c in cols:
        d.line([c, y0, c, y], fill=GRIS, width=2)
    return y


# ------------------------------------------------------------
# Figure 1 — Coûts fixes, coûts variables, coût total
# ------------------------------------------------------------
def fig_couts():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Coûts fixes, coûts variables et coût total")

    boite(d, 60, 140, 560, 300, "COÛTS FIXES",
          ["Loyer, assurance, amortissement", "Salaire du gardien", "400 000 Ar par mois"],
          fill=BLEU_C, bord=BLEU)
    boite(d, 60, 330, 560, 490, "COÛTS VARIABLES",
          ["Matières premières, énergie", "Emballages, transport", "300 Ar par pièce"],
          fill=JAUNE_C, bord=ORANGE)
    fleche(d, 300, 300, 300, 326)
    boite(d, 60, 520, 560, 640, "COÛT TOTAL = CF + CV",
          ["Pour 1 000 pièces : 700 000 Ar"],
          fill=VERT_C, bord=VERT, interligne=26)

    tableau(d, 620, 150, [180, 190, 190], [46, 56, 56, 56],
            ["Quantité", "Coût total", "Coût moyen"],
            [["500", "550 000 Ar", "1 100 Ar"],
             ["1 000", "700 000 Ar", "700 Ar"],
             ["2 000", "1 000 000 Ar", "500 Ar"]])

    d.rounded_rectangle([620, 440, 1180, 560], radius=8, fill=JAUNE_C, outline=ORANGE, width=2)
    for i, l in enumerate(wrap(d, "Les charges fixes se répartissent sur un plus grand nombre d'unités : "
                                  "le coût moyen baisse quand la production augmente.", F_SMALL, 520)):
        d.text((640, 462 + i * 28), l, font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t11_u1_couts.png"))
    print("Figure écrite : t11_u1_couts.png")


# ------------------------------------------------------------
# Figure 2 — Recette marginale, coût marginal, profit maximal
# ------------------------------------------------------------
def fig_maximisation():
    W, H = 1240, 680
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Recette marginale, coût marginal et profit maximal")

    x0, y0, x1, y1 = 160, 580, 1120, 150
    d.line([x0, y0, x1, y0], fill=NOIR, width=3)
    d.line([x0, y0, x0, y1], fill=NOIR, width=3)
    d.text((x1 - 80, y0 + 14), "Quantités", font=F_SMALL, fill=NOIR)
    d.text((20, y1 - 10), "Ariary", font=F_SMALL, fill=NOIR)

    # échelle : 0 Ar en y0 (580), 6 000 Ar en y1 (150) -> 1 Ar = 0,0717 px
    def ya(v):
        return y0 - v * (y0 - y1) / 6000

    # recette marginale (prix) constante = 5 000
    d.line([x0 + 40, ya(5000), x1 - 40, ya(5000)], fill=BLEU, width=5)
    d.text((x1 - 130, ya(5000) - 34), "Recette marginale (prix) = 5 000", font=F_SMALL, fill=BLEU)

    # coût marginal croissant : 3 000 à gauche, 5 500 à droite
    d.line([x0 + 40, ya(3000), x1 - 40, ya(5500)], fill=ORANGE, width=5)
    d.text((x1 - 120, ya(5500) - 8), "Coût marginal", font=F_SMALL, fill=ORANGE)

    # intersection : résolution graphique approchée
    mx = x0 + 40 + (x1 - 40 - (x0 + 40)) * ((5000 - 3000) / (5500 - 3000))
    d.ellipse([mx - 9, ya(5000) - 9, mx + 9, ya(5000) + 9], fill=ROUGE)
    for ly in range(int(ya(5000)), int(y0), 12):
        d.line([mx, ly, mx, ly + 6], fill=ROUGE, width=2)
    d.text((mx + 14, y0 + 16), "Quantité optimale", font=F_SMALL, fill=ROUGE)

    # zones
    d.text((x0 + 70, ya(4000) + 10), "Produire : la recette", font=F_SMALL, fill=VERT)
    d.text((x0 + 70, ya(4000) + 38), "dépasse le coût", font=F_SMALL, fill=VERT)
    d.text((mx + 40, ya(4000) + 10), "S'arrêter : le coût", font=F_SMALL, fill=ROUGE)
    d.text((mx + 40, ya(4000) + 38), "dépasse la recette", font=F_SMALL, fill=ROUGE)

    d.rounded_rectangle([60, 610, 1180, 660], radius=8, fill=BLEU_C, outline=BLEU, width=2)
    d.text((80, 626), "Le profit est maximal là où la recette marginale est égale au coût marginal : "
                      "200 unités dans cet exemple.", font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t11_u1_maximisation.png"))
    print("Figure écrite : t11_u1_maximisation.png")


# ------------------------------------------------------------
# Figure 3 — Le bilan
# ------------------------------------------------------------
def fig_bilan():
    W, H = 1240, 720
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Le bilan : emplois et ressources de l'entreprise")

    d.text((330, 130), "ACTIF — les emplois", font=F_BOLD, fill=BLEU)
    d.text((790, 130), "PASSIF — les ressources", font=F_BOLD, fill=ORANGE)

    actif = [("Actif immobilisé", "Terrains, bâtiments, machines"),
             ("Stocks", "Matières, produits finis"),
             ("Créances clients", "Sommes dues par les clients"),
             ("Trésorerie", "Caisse et banque")]
    passif = [("Capitaux propres", "Capital, réserves, résultat"),
              ("Dettes financières", "Emprunts bancaires"),
              ("Dettes d'exploitation", "Fournisseurs, impôts à payer"),
              ("Trésorerie du passif", "Découverts bancaires")]

    y = 175
    for (t, s), (t2, s2) in zip(actif, passif):
        d.rounded_rectangle([60, y, 600, y + 90], radius=8, fill=BLEU_C, outline=BLEU, width=2)
        d.text((80, y + 14), t, font=F_BOLD, fill=BLEU)
        d.text((80, y + 52), s, font=F_SMALL, fill=NOIR)
        d.rounded_rectangle([640, y, 1180, y + 90], radius=8, fill=JAUNE_C, outline=ORANGE, width=2)
        d.text((660, y + 14), t2, font=F_BOLD, fill=ORANGE)
        d.text((660, y + 52), s2, font=F_SMALL, fill=NOIR)
        y += 100

    d.rounded_rectangle([60, y + 10, 1180, y + 100], radius=10, fill=VERT_C, outline=VERT, width=3)
    texte_centre(d, (60, y + 10, 1180, y + 100),
                 "TOTAL DE L'ACTIF = TOTAL DU PASSIF", F_BOLD, VERT)
    d.text((80, y + 118), "Tout bien possédé par l'entreprise a été financé par une ressource.",
           font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t11_u1_bilan.png"))
    print("Figure écrite : t11_u1_bilan.png")


# ------------------------------------------------------------
# Figure 4 — Le compte de résultat
# ------------------------------------------------------------
def fig_resultat():
    W, H = 1240, 720
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Le compte de résultat : des produits au résultat net")

    top = 130
    total_h = 380.0
    total = 24_000_000.0
    echelle = total_h / total

    x = 120
    largeur = 300
    y = top
    d.rectangle([x, y, x + largeur, y + total_h], fill=BLEU_C, outline=BLEU, width=3)
    texte_centre(d, (x, y, x + largeur, y + 40), "Chiffre d'affaires", F_BOLD, BLEU)
    d.text((x + 20, y + 60), "24 000 000 Ar", font=F_SMALL, fill=NOIR)

    charges = [("Achats consommés", 9_500_000, ORANGE, JAUNE_C),
               ("Services extérieurs", 2_800_000, VIOLET, VIOLET_C),
               ("Charges de personnel", 6_200_000, VIOLET, VIOLET_C),
               ("Impôts et taxes", 900_000, GRIS, (235, 235, 235)),
               ("Amortissements", 1_100_000, GRIS, (235, 235, 235))]
    for nom, montant, bord, fond in charges:
        h = montant * echelle
        d.rectangle([x, y, x + largeur, y + h], fill=fond, outline=bord, width=3)
        d.text((x + largeur + 30, y + h / 2 - 10), "− " + nom, font=F_SMALL, fill=NOIR)
        d.text((x + largeur + 320, y + h / 2 - 10), "{:,} Ar".format(montant).replace(",", " "),
               font=F_SMALL, fill=NOIR)
        y += h

    reste = total - sum(c[1] for c in charges)
    h = reste * echelle
    d.rectangle([x, y, x + largeur, y + total_h], fill=VERT_C, outline=VERT, width=3)
    texte_centre(d, (x, y, x + largeur, y + total_h), "RÉSULTAT NET", F_BOLD, VERT)
    d.text((x + largeur + 30, y + h / 2 - 10), "= Bénéfice", font=F_BOLD, fill=VERT)
    d.text((x + largeur + 320, y + h / 2 - 10), "{:,} Ar".format(int(reste)).replace(",", " "),
           font=F_BOLD, fill=VERT)

    d.rounded_rectangle([60, 560, 1180, 640], radius=8, fill=BLEU_C, outline=BLEU, width=2)
    d.text((80, 580), "Résultat = total des produits − total des charges.", font=F_SMALL, fill=NOIR)
    d.text((80, 612), "Taux de marge : 3 500 000 ÷ 24 000 000 ≈ 14,6 %.", font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t11_u1_resultat.png"))
    print("Figure écrite : t11_u1_resultat.png")


# ------------------------------------------------------------
# Figure 6 — Les parties prenantes
# ------------------------------------------------------------
def fig_parties():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Les parties prenantes internes et externes")

    cx, cy = 620, 380
    d.ellipse([cx - 260, cy - 260, cx + 260, cy + 260], outline=GRIS, width=2)
    d.text((cx - 120, cy - 250), "PARTIES PRENANTES EXTERNES", font=F_BOLD, fill=GRIS)
    d.ellipse([cx - 150, cy - 150, cx + 150, cy + 150], outline=BLEU, width=3)
    d.text((cx - 130, cy - 178), "PARTIES PRENANTES INTERNES", font=F_BOLD, fill=BLEU)
    d.ellipse([cx - 80, cy - 45, cx + 80, cy + 45], fill=BLEU_C, outline=BLEU, width=3)
    texte_centre(d, (cx - 80, cy - 45, cx + 80, cy + 45), "ENTREPRISE", F_BOLD, BLEU)

    internes = [("Salariés", -math.pi / 2), ("Dirigeants", math.pi / 6), ("Actionnaires", 5 * math.pi / 6)]
    for nom, ang in internes:
        bx = cx + 100 * math.cos(ang)
        by = cy + 100 * math.sin(ang)
        d.ellipse([bx - 52, by - 26, bx + 52, by + 26], fill=BLANC, outline=BLEU, width=2)
        texte_centre(d, (bx - 52, by - 26, bx + 52, by + 26), nom, F_MINI, BLEU)

    externes = [("Clients", 0), ("Fournisseurs", -math.pi / 3), ("Banques", -2 * math.pi / 3),
                ("État", 2 * math.pi / 3), ("Riverains", math.pi / 3)]
    for nom, ang in externes:
        bx = cx + 255 * math.cos(ang)
        by = cy + 255 * math.sin(ang)
        d.ellipse([bx - 70, by - 26, bx + 70, by + 26], fill=BLANC, outline=GRIS, width=2)
        texte_centre(d, (bx - 70, by - 26, bx + 70, by + 26), nom, F_MINI, NOIR)

    d.rounded_rectangle([60, 620, 1180, 680], radius=8, fill=JAUNE_C, outline=ORANGE, width=2)
    d.text((80, 642), "Tous ces acteurs sont affectés par l'activité de l'entreprise ou peuvent "
                      "l'influencer, sans avoir le même pouvoir.", font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t11_u1_parties.png"))
    print("Figure écrite : t11_u1_parties.png")


# ------------------------------------------------------------
# Figure 7 — Contributions et attentes
# ------------------------------------------------------------
def fig_contributions():
    W, H = 1240, 660
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Ce que chacun apporte et ce que chacun attend")

    fin = tableau(d, 60, 140, [260, 420, 420], [50, 62, 62, 62, 62, 62],
                  ["Partie prenante", "Contribution", "Attente"],
                  [["Salariés", "Travail et compétences", "Salaire et sécurité"],
                   ["Actionnaires", "Capitaux", "Dividende"],
                   ["Clients", "Achats et recettes", "Qualité et prix juste"],
                   ["Fournisseurs", "Matières et équipements", "Paiement à l'échéance"],
                   ["Banque", "Financement", "Remboursement et intérêts"]])

    d.rounded_rectangle([60, fin + 20, 1180, fin + 100], radius=10, fill=BLEU_C, outline=BLEU, width=3)
    for i, l in enumerate(wrap(d, "Chaque partie prenante entretient un échange avec l'entreprise : "
                                  "elle contribue et attend une contrepartie.", F_SMALL, 1060)):
        d.text((80, fin + 44 + i * 28), l, font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t11_u1_contributions.png"))
    print("Figure écrite : t11_u1_contributions.png")


if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    fig_couts()
    fig_maximisation()
    fig_bilan()
    fig_resultat()
    fig_parties()
    fig_contributions()
