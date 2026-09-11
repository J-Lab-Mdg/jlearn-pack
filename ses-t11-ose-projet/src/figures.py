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


# ------------------------------------------------------------
# Figure 9 — Les trois fonctions de la monnaie
# ------------------------------------------------------------
def fig_fonctions():
    W, H = 1240, 660
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Les trois fonctions de la monnaie")

    cols = [("INTERMÉDIAIRE DES ÉCHANGES", BLEU, BLEU_C,
             ["La monnaie sert à payer :", "elle supprime le troc", "et la double coïncidence", "des besoins."]),
            ("UNITÉ DE COMPTE", VERT, VERT_C,
             ["Elle mesure la valeur :", "les prix sont exprimés", "en une seule unité,", "comparable partout."]),
            ("RÉSERVE DE VALEUR", ORANGE, JAUNE_C,
             ["Elle conserve le pouvoir", "d'achat dans le temps :", "on peut épargner", "puis dépenser plus tard."])]
    x = 60
    for titre, bord, fond, lignes in cols:
        d.rounded_rectangle([x, 130, x + 360, 430], radius=12, fill=fond, outline=bord, width=3)
        d.rectangle([x, 130, x + 360, 182], fill=bord)
        texte_centre(d, (x, 130, x + 360, 182), titre, F_BOLD, BLANC)
        y = 210
        for l in lignes:
            d.text((x + 24, y), l, font=F_SMALL, fill=NOIR)
            y += 34
        x += 400

    d.rounded_rectangle([60, 470, 1180, 620], radius=10, fill=BLEU_C, outline=BLEU, width=3)
    for i, l in enumerate(wrap(d, "Une même somme joue les trois rôles à la fois : le billet qui paie le riz "
                                  "mesure sa valeur et conserve, jusqu'à l'achat suivant, le pouvoir d'achat "
                                  "du vendeur.", F_SMALL, 1060)):
        d.text((80, 500 + i * 30), l, font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t11_u2_fonctions.png"))
    print("Figure écrite : t11_u2_fonctions.png")


# ------------------------------------------------------------
# Figure 10 — Masse monétaire et marché monétaire
# ------------------------------------------------------------
def fig_masse():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "La masse monétaire et le marché monétaire")

    # agrégats emboîtés
    agg = [("M3", 60, 180, 1150, 470, (240, 240, 240), GRIS, "M3 = M2 + placements à long terme"),
           ("M2", 110, 220, 1100, 430, VERT_C, VERT, "M2 = M1 + dépôts à terme et épargne disponible"),
           ("M1", 160, 260, 1050, 390, BLEU_C, BLEU, "M1 = pièces et billets + dépôts à vue")]
    for nom, x0, y0, x1, y1, fond, bord, leg in agg:
        d.rounded_rectangle([x0, y0, x1, y1], radius=10, fill=fond, outline=bord, width=3)
        d.text((x0 + 18, y0 + 12), nom, font=F_BOLD, fill=bord)
        d.text((x0 + 90, y0 + 16), leg, font=F_SMALL, fill=NOIR)

    d.text((700, 300), "Pièces et billets en circulation", font=F_MINI, fill=BLEU)
    d.text((700, 330), "Dépôts à vue (comptes courants)", font=F_MINI, fill=BLEU)
    d.text((700, 365), "Épargne disponible, dépôts à terme", font=F_MINI, fill=VERT)
    d.text((700, 404), "Placements et titres à long terme", font=F_MINI, fill=GRIS)

    d.rounded_rectangle([60, 500, 580, 660], radius=8, fill=JAUNE_C, outline=ORANGE, width=2)
    d.text((80, 520), "Marché monétaire", font=F_BOLD, fill=ORANGE)
    for i, l in enumerate(wrap(d, "Les banques s'y prêtent entre elles, à court terme, pour équilibrer "
                                  "leur trésorerie.", F_SMALL, 480)):
        d.text((80, 560 + i * 28), l, font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([620, 500, 1180, 660], radius=8, fill=BLEU_C, outline=BLEU, width=2)
    d.text((640, 520), "Marché financier", font=F_BOLD, fill=BLEU)
    for i, l in enumerate(wrap(d, "Les entreprises et l'État y émettent actions et obligations, "
                                  "à moyen et long terme.", F_SMALL, 500)):
        d.text((640, 560 + i * 28), l, font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t11_u2_masse.png"))
    print("Figure écrite : t11_u2_masse.png")


# ------------------------------------------------------------
# Figure 11 — Le mécanisme de la création monétaire
# ------------------------------------------------------------
def fig_creation():
    W, H = 1240, 720
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Le mécanisme de la création monétaire par le crédit")

    etapes = [("1. Un client dépose", "1 000 000 Ar", "à la banque", BLEU, BLEU_C),
              ("2. Réserve obligatoire", "20 % = 200 000 Ar", "conservés", ORANGE, JAUNE_C),
              ("3. La banque prête", "800 000 Ar", "que le client dépense", VERT, VERT_C),
              ("4. La somme est redéposée", "800 000 Ar", "dans une banque", VIOLET, VIOLET_C)]
    x = 60
    for t, m, s, bord, fond in etapes:
        d.rounded_rectangle([x, 140, x + 260, 290], radius=10, fill=fond, outline=bord, width=3)
        d.rectangle([x, 140, x + 260, 182], fill=bord)
        texte_centre(d, (x, 140, x + 260, 182), t, F_MINI, BLANC)
        texte_centre(d, (x, 196, x + 260, 232), m, F_BOLD, bord)
        d.text((x + 20, 250), s, font=F_MINI, fill=NOIR)
        if x < 900:
            fleche(d, x + 262, 215, x + 296, 215, GRIS)
        x += 300

    fleche(d, 1060, 290, 620, 330, ROUGE, 3)
    d.text((700, 296), "le cycle recommence", font=F_MINI, fill=ROUGE)

    d.rounded_rectangle([60, 350, 1180, 470], radius=10, fill=BLEU_C, outline=BLEU, width=3)
    d.text((80, 374), "Masse monétaire créée = dépôt initial ÷ taux de réserve obligatoire", font=F_BOLD, fill=BLEU)
    d.text((80, 412), "= 1 000 000 ÷ 0,20 = 5 000 000 Ar   (dont 4 000 000 Ar de monnaie scripturale créée)",
           font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([60, 500, 580, 680], radius=8, fill=VERT_C, outline=VERT, width=2)
    d.text((80, 520), "Multiplicateur du crédit", font=F_BOLD, fill=VERT)
    for i, l in enumerate(wrap(d, "Un taux de réserve de 20 % donne un multiplicateur de 5 : "
                                  "chaque dépôt soutient cinq fois sa valeur en monnaie.", F_SMALL, 480)):
        d.text((80, 560 + i * 28), l, font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([620, 500, 1180, 680], radius=8, fill=ROSE_C, outline=ROUGE, width=2)
    d.text((640, 520), "Une limite réelle", font=F_BOLD, fill=ROUGE)
    for i, l in enumerate(wrap(d, "La création monétaire est encadrée : réserves obligatoires, "
                                  "besoins de billets, et surtout solvabilité des emprunteurs.", F_SMALL, 500)):
        d.text((640, 560 + i * 28), l, font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t11_u2_creation.png"))
    print("Figure écrite : t11_u2_creation.png")


# ------------------------------------------------------------
# Figure 12 — Banque centrale et banques commerciales
# ------------------------------------------------------------
def fig_banques():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Banque centrale et banques commerciales")

    d.rounded_rectangle([60, 120, 590, 470], radius=12, fill=BLEU_C, outline=BLEU, width=3)
    d.rectangle([60, 120, 590, 172], fill=BLEU)
    texte_centre(d, (60, 120, 590, 172), "LA BANQUE CENTRALE", F_BOLD, BLANC)
    y = 196
    for l in ["« banque des banques »",
              "Émet les billets et les pièces",
              "Fixe le taux directeur",
              "Fixe le taux de réserve obligatoire",
              "Prête aux banques en dernier ressort",
              "Veille à la stabilité de la monnaie"]:
        d.text((84, y), "• " + l, font=F_SMALL, fill=NOIR)
        y += 40

    d.rounded_rectangle([650, 120, 1180, 470], radius=12, fill=JAUNE_C, outline=ORANGE, width=3)
    d.rectangle([650, 120, 1180, 172], fill=ORANGE)
    texte_centre(d, (650, 120, 1180, 172), "LES BANQUES COMMERCIALES", F_BOLD, BLANC)
    y = 196
    for l in ["« banques du public »",
              "Collectent les dépôts des clients",
              "Accordent les crédits",
              "Gèrent les moyens de paiement",
              "Se refinancent sur le marché monétaire",
              "Cherchent un profit, mais sont régulées"]:
        d.text((674, y), "• " + l, font=F_SMALL, fill=NOIR)
        y += 40

    fleche(d, 596, 240, 644, 240, GRIS)
    fleche(d, 644, 320, 596, 320, GRIS)
    d.text((548, 200), "encadre", font=F_MINI, fill=GRIS)
    d.text((548, 330), "se refinance", font=F_MINI, fill=GRIS)

    d.rounded_rectangle([60, 510, 1180, 670], radius=10, fill=VERT_C, outline=VERT, width=3)
    d.text((80, 532), "Le circuit du financement de l'économie", font=F_BOLD, fill=VERT)
    etapes = ["Ménages", "Dépôts", "Banques", "Crédits", "Entreprises"]
    x = 90
    for i, e in enumerate(etapes):
        d.rounded_rectangle([x, 578, x + 180, 634], radius=8, fill=BLANC, outline=VERT, width=2)
        texte_centre(d, (x, 578, x + 180, 634), e, F_SMALL, VERT)
        if i < len(etapes) - 1:
            fleche(d, x + 182, 606, x + 214, 606, VERT, 3)
        x += 218
    img.save(os.path.join(OUT, "t11_u2_banques.png"))
    print("Figure écrite : t11_u2_banques.png")


# ------------------------------------------------------------
# Figure 13 — Besoin et capacité de financement
# ------------------------------------------------------------
def fig_financement():
    W, H = 1240, 760
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Besoin et capacité de financement des agents")

    fin = tableau(d, 60, 130, [280, 300, 260, 260], [50, 62, 62, 62, 62],
                  ["Agent", "Situation", "Besoin ou capacité", "Exemple"],
                  [["Ménage", "Revenu > dépense", "Capacité de financement", "Épargne placée"],
                   ["Entreprise", "Investissement > épargne", "Besoin de financement", "Emprunt bancaire"],
                   ["Administration", "Dépenses > recettes", "Besoin de financement", "Émission d'obligations"],
                   ["Reste du monde", "Selon les échanges", "Capacité ou besoin", "Investissement étranger"]])

    # flèches : des agents à capacité vers les agents à besoin
    d.rounded_rectangle([60, 460, 560, 600], radius=10, fill=VERT_C, outline=VERT, width=3)
    texte_centre(d, (60, 460, 560, 496), "AGENTS À CAPACITÉ DE FINANCEMENT", F_BOLD, VERT)
    d.text((84, 520), "Ils dégagent une épargne : les ménages,", font=F_SMALL, fill=NOIR)
    d.text((84, 554), "les entreprises bénéficiaires, les investisseurs.", font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([680, 460, 1180, 600], radius=10, fill=ROSE_C, outline=ROUGE, width=3)
    texte_centre(d, (680, 460, 1180, 496), "AGENTS À BESOIN DE FINANCEMENT", F_BOLD, ROUGE)
    d.text((704, 520), "Ils dépensent plus qu'ils ne gagnent :", font=F_SMALL, fill=NOIR)
    d.text((704, 554), "entreprises qui investissent, administrations.", font=F_SMALL, fill=NOIR)

    fleche(d, 562, 530, 676, 530, BLEU, 4)
    d.text((558, 560), "flux de financement", font=F_MINI, fill=BLEU)

    d.rounded_rectangle([60, 630, 1180, 720], radius=8, fill=BLEU_C, outline=BLEU, width=3)
    d.text((80, 656), "Les banques et le marché financier assurent la rencontre entre l'épargne disponible "
                      "et les besoins de financement.", font=F_SMALL, fill=NOIR)
    d.text((80, 692), "Capacité de financement = épargne − investissement. "
                      "Besoin de financement = investissement − épargne.", font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t11_u2_financement.png"))
    print("Figure écrite : t11_u2_financement.png")


# ------------------------------------------------------------
# Figure 14 — Le financement interne : l'autofinancement
# ------------------------------------------------------------
def fig_autofinancement():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Le financement interne : de la ressource à l'autofinancement")

    d.rounded_rectangle([470, 130, 770, 200], radius=8, fill=BLEU_C, outline=BLEU, width=3)
    texte_centre(d, (470, 130, 770, 200), "Chiffre d'affaires", F_BOLD, BLEU)
    fleche(d, 620, 202, 620, 240)
    d.rounded_rectangle([470, 242, 770, 312], radius=8, fill=JAUNE_C, outline=ORANGE, width=3)
    texte_centre(d, (470, 242, 770, 312), "− Charges d'exploitation", F_BOLD, ORANGE)
    fleche(d, 620, 314, 620, 352)
    d.rounded_rectangle([470, 354, 770, 424], radius=8, fill=VERT_C, outline=VERT, width=3)
    texte_centre(d, (470, 354, 770, 424), "= Résultat net", F_BOLD, VERT)

    fleche(d, 470, 390, 250, 390)
    d.rounded_rectangle([60, 354, 450, 424], radius=8, fill=ROSE_C, outline=ROUGE, width=3)
    texte_centre(d, (60, 354, 450, 424), "Dividendes versés", F_BOLD, ROUGE)

    fleche(d, 770, 390, 990, 390)
    d.rounded_rectangle([800, 354, 1180, 424], radius=8, fill=BLEU_C, outline=BLEU, width=3)
    texte_centre(d, (800, 354, 1180, 424), "Bénéfice conservé (mise en réserve)", F_BOLD, BLEU)

    fleche(d, 990, 426, 990, 470)
    fleche(d, 250, 426, 250, 470)
    fleche(d, 250, 470, 975, 470, GRIS, 3)
    d.rounded_rectangle([60, 460, 1180, 534], radius=10, fill=VIOLET_C, outline=VIOLET, width=3)
    texte_centre(d, (60, 460, 1180, 534),
                 "AUTOFINANCEMENT = bénéfice conservé + amortissements", F_BOLD, VIOLET)

    fleche(d, 620, 536, 620, 574)
    d.rounded_rectangle([360, 576, 880, 646], radius=8, fill=VERT_C, outline=VERT, width=3)
    texte_centre(d, (360, 576, 880, 646), "Financement des investissements", F_BOLD, VERT)

    d.text((60, 656), "Ressource interne, gratuite, qui préserve l'indépendance de l'entreprise.",
           font=F_MINI, fill=GRIS)
    img.save(os.path.join(OUT, "t11_u2_autofinancement.png"))
    print("Figure écrite : t11_u2_autofinancement.png")


# ------------------------------------------------------------
# Figure 15 — Le crédit bancaire
# ------------------------------------------------------------
def fig_credit():
    W, H = 1240, 660
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Le crédit bancaire : de l'épargne collectée au prêt accordé")

    d.rounded_rectangle([60, 150, 340, 330], radius=10, fill=VERT_C, outline=VERT, width=3)
    d.rectangle([60, 150, 340, 196], fill=VERT)
    texte_centre(d, (60, 150, 340, 196), "LES DÉPOSANTS", F_BOLD, BLANC)
    for i, l in enumerate(["Ménages, entreprises,", "associations : ils", "confient leur épargne", "à la banque"]):
        d.text((84, 220 + i * 26), l, font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([450, 150, 790, 450], radius=12, fill=BLEU_C, outline=BLEU, width=4)
    d.rectangle([450, 150, 790, 196], fill=BLEU)
    texte_centre(d, (450, 150, 790, 196), "LA BANQUE : INTERMÉDIAIRE", F_BOLD, BLANC)
    for i, l in enumerate(["Transformation : des dépôts", "de court terme en crédits",
                           "de plus longue durée.", "Étude du dossier, garanties,",
                           "taux adapté au risque."]):
        d.text((474, 226 + i * 30), l, font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([900, 150, 1180, 330], radius=10, fill=JAUNE_C, outline=ORANGE, width=3)
    d.rectangle([900, 150, 1180, 196], fill=ORANGE)
    texte_centre(d, (900, 150, 1180, 196), "LES EMPRUNTEURS", F_BOLD, BLANC)
    for i, l in enumerate(["Entreprises et ménages :", "ils financent un projet", "puis remboursent", "capital + intérêts"]):
        d.text((924, 220 + i * 26), l, font=F_SMALL, fill=NOIR)

    fleche(d, 342, 240, 446, 240, VERT, 4)
    fleche(d, 792, 240, 896, 240, ORANGE, 4)
    fleche(d, 896, 380, 792, 380, BLEU, 4)
    fleche(d, 446, 380, 342, 380, BLEU, 4)
    d.text((330, 396), "intérêts versés", font=F_MINI, fill=BLEU)
    d.text((800, 396), "échéances", font=F_MINI, fill=BLEU)

    d.rounded_rectangle([60, 490, 1180, 630], radius=10, fill=BLEU_C, outline=BLEU, width=3)
    d.text((80, 512), "Les trois questions du banquier avant d'accorder un crédit", font=F_BOLD, fill=BLEU)
    d.text((80, 552), "Quel est le montant ?   Pour quelle durée ?   Quelles garanties ?", font=F_SMALL, fill=NOIR)
    d.text((80, 592), "Le taux rémunère le renoncement et couvre le risque de non-remboursement.",
           font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t11_u2_credit.png"))
    print("Figure écrite : t11_u2_credit.png")


# ------------------------------------------------------------
# Figure 16 — Intermédié et désintermédié
# ------------------------------------------------------------
def fig_marches():
    W, H = 1240, 680
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Financement intermédié et financement désintermédié")

    # voie haute : intermédiée
    d.rounded_rectangle([60, 150, 300, 240], radius=8, fill=VERT_C, outline=VERT, width=3)
    texte_centre(d, (60, 150, 300, 240), "ÉPARGNANTS", F_BOLD, VERT)
    d.rounded_rectangle([470, 140, 770, 250], radius=8, fill=BLEU_C, outline=BLEU, width=3)
    texte_centre(d, (470, 140, 770, 250), "BANQUE\n(intermédiaire)", F_BOLD, BLEU)
    d.rounded_rectangle([940, 150, 1180, 240], radius=8, fill=JAUNE_C, outline=ORANGE, width=3)
    texte_centre(d, (940, 150, 1180, 240), "ENTREPRISES", F_BOLD, ORANGE)
    fleche(d, 302, 195, 466, 195, BLEU, 4)
    fleche(d, 772, 195, 936, 195, BLEU, 4)
    d.text((330, 168), "dépôts", font=F_MINI, fill=BLEU)
    d.text((790, 168), "crédits", font=F_MINI, fill=BLEU)

    d.line([60, 300, 1180, 300], fill=GRIS, width=2)
    d.text((540, 308), "financement intermédié", font=F_MINI, fill=GRIS)

    # voie basse : désintermédiée
    d.rounded_rectangle([60, 400, 300, 490], radius=8, fill=VERT_C, outline=VERT, width=3)
    texte_centre(d, (60, 400, 300, 490), "INVESTISSEURS", F_BOLD, VERT)
    d.rounded_rectangle([470, 390, 770, 500], radius=8, fill=VIOLET_C, outline=VIOLET, width=3)
    texte_centre(d, (470, 390, 770, 500), "MARCHÉ FINANCIER\nactions / obligations", F_BOLD, VIOLET)
    d.rounded_rectangle([940, 400, 1180, 490], radius=8, fill=JAUNE_C, outline=ORANGE, width=3)
    texte_centre(d, (940, 400, 1180, 490), "ENTREPRISES", F_BOLD, ORANGE)
    fleche(d, 302, 445, 466, 445, VIOLET, 4)
    fleche(d, 772, 445, 936, 445, VIOLET, 4)
    d.text((330, 418), "souscription", font=F_MINI, fill=VIOLET)
    d.text((790, 418), "émission de titres", font=F_MINI, fill=VIOLET)

    d.rounded_rectangle([60, 540, 1180, 660], radius=10, fill=BLEU_C, outline=BLEU, width=3)
    d.text((80, 562), "Action = titre de propriété (dividende, partage du risque)   ·   "
                      "Obligation = titre de créance (intérêts, remboursement à l'échéance)",
           font=F_MINI, fill=NOIR)
    d.text((80, 604), "Le marché financier suppose transparence des comptes et taille suffisante : "
                      "les petites structures restent tributaires de la banque.",
           font=F_MINI, fill=NOIR)
    img.save(os.path.join(OUT, "t11_u2_marches.png"))
    print("Figure écrite : t11_u2_marches.png")


# ------------------------------------------------------------
# Figure 17 — Le calcul des intérêts simples
# ------------------------------------------------------------
def fig_interets():
    W, H = 1240, 680
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Le calcul des intérêts simples : capital × taux × durée")

    d.rounded_rectangle([180, 130, 1060, 260], radius=12, fill=BLEU_C, outline=BLEU, width=4)
    texte_centre(d, (180, 130, 1060, 260), "INTÉRÊT  =  C  ×  t  ×  n", F_TITLE, BLEU)
    d.text((300, 274), "C = capital   ·   t = taux (en décimales)   ·   n = durée (en années)",
           font=F_SMALL, fill=NOIR)

    d.text((80, 320), "Exemple : un capital de 2 000 000 Ar placé à 6 % pendant 3 ans.",
           font=F_BOLD, fill=NOIR)
    lignes = ["C = 2 000 000 Ar",
              "t = 6 % = 0,06",
              "n = 3 ans",
              "I = 2 000 000 × 0,06 × 3 = 360 000 Ar"]
    y = 360
    for l in lignes:
        d.text((110, y), "• " + l, font=F_SMALL, fill=NOIR)
        y += 36

    d.rounded_rectangle([660, 330, 1160, 510], radius=10, fill=JAUNE_C, outline=ORANGE, width=3)
    d.text((684, 350), "Durée en mois : on convertit en années", font=F_BOLD, fill=ORANGE)
    for i, l in enumerate(["9 mois  →  n = 9 ÷ 12 = 0,75 an",
                           "5 000 000 × 0,12 × 0,75 = 450 000 Ar"]):
        d.text((684, 400 + i * 34), l, font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([60, 530, 1180, 650], radius=10, fill=VERT_C, outline=VERT, width=3)
    d.text((80, 554), "Aux intérêts simples, l'intérêt est calculé uniquement sur le capital initial : "
                      "il n'est pas capitalisé.", font=F_SMALL, fill=NOIR)
    d.text((80, 596), "Les rôles du taux : rémunérer le renoncement, couvrir le risque, "
                      "compenser la hausse des prix, réguler la demande de crédit.",
           font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t11_u2_interets.png"))
    print("Figure écrite : t11_u2_interets.png")


# ------------------------------------------------------------
# Figure 18 — La valeur acquise
# ------------------------------------------------------------
def fig_valeur():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Valeur acquise d'un capital de 1 000 000 Ar placé à 8 %")

    x0, y0, x1, y1 = 160, 580, 1140, 160
    d.line([x0, y0, x1, y0], fill=NOIR, width=3)
    d.line([x0, y0, x0, y1], fill=NOIR, width=3)
    d.text((x1 - 90, y0 + 16), "Années", font=F_SMALL, fill=NOIR)
    d.text((30, y1 - 12), "Ariary", font=F_SMALL, fill=NOIR)

    vmax = 1_500_000.0
    def yv(v):
        return y0 - v * (y0 - y1) / vmax

    donnees = [(0, 1_000_000), (1, 1_080_000), (2, 1_160_000), (3, 1_240_000), (4, 1_320_000), (5, 1_400_000)]
    larg = 110
    for i, (annee, va) in enumerate(donnees):
        cx = x0 + 70 + i * 155
        h = y0 - yv(va)
        d.rectangle([cx - larg / 2, yv(va), cx + larg / 2, y0], fill=BLEU_C, outline=BLEU, width=3)
        # part capital / part intérêts
        hint = y0 - (y0 - yv(1_000_000))
        d.rectangle([cx - larg / 2, y0 - hint, cx + larg / 2, y0], fill=BLEU, outline=BLEU, width=2)
        d.text((cx - 24, y0 + 18), "an " + str(annee), font=F_MINI, fill=NOIR)
        d.text((cx - 62, yv(va) - 30), "{:,} Ar".format(va).replace(",", " "), font=F_MINI, fill=BLEU)

    d.text((x0 + 12, y1 + 6), "capital initial (bleu foncé)", font=F_MINI, fill=BLEU)
    d.text((x0 + 12, y1 + 30), "intérêts cumulés (bleu clair)", font=F_MINI, fill=BLEU)

    d.rounded_rectangle([60, 620, 580, 680], radius=8, fill=JAUNE_C, outline=ORANGE, width=2)
    d.text((80, 640), "Valeur acquise = capital × (1 + taux × durée)", font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([620, 620, 1180, 680], radius=8, fill=VERT_C, outline=VERT, width=2)
    d.text((640, 640), "La progression est linéaire : 80 000 Ar d'intérêts par année.",
           font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t11_u2_valeur.png"))
    print("Figure écrite : t11_u2_valeur.png")


# ------------------------------------------------------------
# Figure 19 — Taux nominal et taux réel
# ------------------------------------------------------------
def fig_taux():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Taux nominal, hausse des prix et taux réel")

    d.rounded_rectangle([60, 130, 560, 300], radius=10, fill=BLEU_C, outline=BLEU, width=3)
    texte_centre(d, (60, 130, 560, 176), "TAUX NOMINAL", F_BOLD, BLANC)
    d.rectangle([60, 130, 560, 176], fill=BLEU)
    texte_centre(d, (60, 130, 560, 176), "TAUX NOMINAL", F_BOLD, BLANC)
    for i, l in enumerate(["Taux affiché au contrat :", "celui qui calcule les", "intérêts réellement versés."]):
        d.text((90, 204 + i * 30), l, font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([680, 130, 1180, 300], radius=10, fill=ROSE_C, outline=ROUGE, width=3)
    d.rectangle([680, 130, 1180, 176], fill=ROUGE)
    texte_centre(d, (680, 130, 1180, 176), "HAUSSE DES PRIX", F_BOLD, BLANC)
    for i, l in enumerate(["Elle réduit le pouvoir d'achat :", "100 Ar achètent moins", "à la fin de l'année."]):
        d.text((710, 204 + i * 30), l, font=F_SMALL, fill=NOIR)

    fleche(d, 210, 302, 210, 356, BLEU, 4)
    fleche(d, 830, 302, 830, 356, ROUGE, 4)
    d.text((150, 316), "−", font=F_BOLD, fill=NOIR)

    d.rounded_rectangle([280, 358, 960, 470], radius=12, fill=VERT_C, outline=VERT, width=4)
    texte_centre(d, (280, 358, 960, 470), "TAUX RÉEL  ≈  TAUX NOMINAL  −  HAUSSE DES PRIX", F_BOLD, VERT)

    cas = [("8 %", "3 %", "+5 %", "Le prêteur gagne", VERT, VERT_C),
           ("9 %", "6 %", "+3 %", "Le prêteur gagne", VERT, VERT_C),
           ("8 %", "10 %", "−2 %", "Le prêteur perd", ROUGE, ROSE_C),
           ("7 %", "12 %", "−5 %", "Le prêteur perd", ROUGE, ROSE_C)]
    x = 60
    for nomi, hausse, reel, verdict, bord, fond in cas:
        d.rounded_rectangle([x, 500, x + 270, 660], radius=8, fill=fond, outline=bord, width=2)
        d.text((x + 16, 516), "Nominal " + nomi, font=F_SMALL, fill=NOIR)
        d.text((x + 16, 550), "Prix + " + hausse, font=F_SMALL, fill=NOIR)
        d.text((x + 16, 590), "Réel = " + reel, font=F_BOLD, fill=bord)
        d.text((x + 16, 626), verdict, font=F_MINI, fill=bord)
        x += 290
    img.save(os.path.join(OUT, "t11_u2_taux.png"))
    print("Figure écrite : t11_u2_taux.png")


# ------------------------------------------------------------
# Figure 20 — Les risques de crédit
# ------------------------------------------------------------
def fig_risques():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Les risques de crédit et les parades possibles")

    paires = [("RISQUE DE DÉFAUT", "L'emprunteur ne rembourse pas.",
               "Étude du dossier, garanties, caution solidaire.", ROUGE, ROSE_C),
              ("RISQUE DE TAUX", "Le taux variable augmente.",
               "Privilégier le taux fixe ou plafonné.", ORANGE, JAUNE_C),
              ("RISQUE DE LIQUIDITÉ", "L'échéance ne peut être payée.",
               "Durée adaptée, échéancier souple, épargne de précaution.", VIOLET, VIOLET_C),
              ("RISQUE DE CHANGE", "La monnaie nationale se déprécie.",
               "Emprunter dans la monnaie de ses recettes.", BLEU, BLEU_C)]
    y = 130
    for titre, risque, parade, bord, fond in paires:
        d.rounded_rectangle([60, y, 700, y + 110], radius=10, fill=fond, outline=bord, width=3)
        d.text((84, y + 16), titre, font=F_BOLD, fill=bord)
        d.text((84, y + 62), risque, font=F_SMALL, fill=NOIR)
        fleche(d, 704, y + 55, 748, y + 55, GRIS, 3)
        d.rounded_rectangle([752, y, 1180, y + 110], radius=10, fill=VERT_C, outline=VERT, width=2)
        for i, l in enumerate(wrap(d, parade, F_SMALL, 380)):
            d.text((776, y + 26 + i * 28), l, font=F_SMALL, fill=NOIR)
        y += 132

    d.rounded_rectangle([60, 662, 1180, 690], radius=6, fill=BLEU_C, outline=BLEU, width=2)
    d.text((80, 668), "Le risque ne disparaît jamais : il s'évalue, il se couvre et il se répartit "
                      "entre le prêteur et l'emprunteur.", font=F_MINI, fill=NOIR)
    img.save(os.path.join(OUT, "t11_u2_risques.png"))
    print("Figure écrite : t11_u2_risques.png")


# ------------------------------------------------------------
# Figure 22 — La courbe de demande
# ------------------------------------------------------------
def fig_demande():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "La courbe de demande : prix et quantité demandée")

    x0, y0, x1, y1 = 170, 560, 760, 140
    qmax, pmax = 60.0, 2400.0

    def px(q):
        return x0 + q * (x1 - x0) / qmax

    def py(p):
        return y0 - p * (y0 - y1) / pmax

    d.line([x0, y0, x1 + 20, y0], fill=NOIR, width=3)
    d.line([x0, y0, x0, y1 - 20], fill=NOIR, width=3)
    d.text((x1 - 30, y0 + 16), "Quantité (kg)", font=F_SMALL, fill=NOIR)
    d.text((30, y1 - 40), "Prix (Ar)", font=F_SMALL, fill=NOIR)
    for p in (800, 1600, 2400):
        d.line([x0 - 8, py(p), x0, py(p)], fill=NOIR, width=2)
        d.text((60, py(p) - 12), "{:,} Ar".format(p).replace(",", " "), font=F_MINI, fill=NOIR)
    for q in (20, 40, 60):
        d.line([px(q), y0, px(q), y0 + 8], fill=NOIR, width=2)
        d.text((px(q) - 18, y0 + 14), str(q) + " kg", font=F_MINI, fill=NOIR)

    pts = [(10, 2000), (20, 1600), (35, 1200), (55, 800)]
    d.line([(px(q), py(p)) for q, p in pts], fill=BLEU, width=5)
    for q, p in pts:
        d.ellipse([px(q) - 8, py(p) - 8, px(q) + 8, py(p) + 8], fill=BLANC, outline=BLEU, width=4)
    d.text((px(55) + 16, py(800) - 12), "D", font=F_BOLD, fill=BLEU)

    d.text((px(22), py(1900)), "Plus le prix est bas, plus", font=F_MINI, fill=BLEU)
    d.text((px(22), py(1780)), "la quantité demandée est élevée", font=F_MINI, fill=BLEU)

    tableau(d, 800, 150, [180, 190], [46, 50, 50, 50, 50],
            ["Prix (Ar)", "Quantité (kg)"],
            [["2 000", "10"],
             ["1 600", "20"],
             ["1 200", "35"],
             ["800", "55"]])

    d.rounded_rectangle([800, 480, 1180, 570], radius=8, fill=JAUNE_C, outline=ORANGE, width=2)
    d.text((820, 500), "Une baisse de prix déplace le", font=F_MINI, fill=NOIR)
    d.text((820, 528), "point le long de la courbe.", font=F_MINI, fill=NOIR)

    d.rounded_rectangle([60, 610, 1180, 680], radius=8, fill=BLEU_C, outline=BLEU, width=2)
    d.text((80, 630), "La courbe de demande est décroissante : prix et quantité demandée varient en sens inverse.",
           font=F_SMALL, fill=NOIR)
    d.text((80, 660), "Seul un changement de prix déplace le point le long de la courbe.", font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t11_u3_demande.png"))
    print("Figure écrite : t11_u3_demande.png")


# ------------------------------------------------------------
# Figure 23 — La courbe d'offre
# ------------------------------------------------------------
def fig_offre():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "La courbe d'offre : prix et quantité offerte")

    x0, y0, x1, y1 = 170, 560, 760, 140
    qmax, pmax = 60.0, 2400.0

    def px(q):
        return x0 + q * (x1 - x0) / qmax

    def py(p):
        return y0 - p * (y0 - y1) / pmax

    d.line([x0, y0, x1 + 20, y0], fill=NOIR, width=3)
    d.line([x0, y0, x0, y1 - 20], fill=NOIR, width=3)
    d.text((x1 - 30, y0 + 16), "Quantité (kg)", font=F_SMALL, fill=NOIR)
    d.text((30, y1 - 40), "Prix (Ar)", font=F_SMALL, fill=NOIR)
    for p in (800, 1600, 2400):
        d.line([x0 - 8, py(p), x0, py(p)], fill=NOIR, width=2)
        d.text((60, py(p) - 12), "{:,} Ar".format(p).replace(",", " "), font=F_MINI, fill=NOIR)
    for q in (20, 40, 60):
        d.line([px(q), y0, px(q), y0 + 8], fill=NOIR, width=2)
        d.text((px(q) - 18, y0 + 14), str(q) + " kg", font=F_MINI, fill=NOIR)

    pts = [(12, 800), (30, 1200), (45, 1600), (60, 2000)]
    d.line([(px(q), py(p)) for q, p in pts], fill=ORANGE, width=5)
    for q, p in pts:
        d.ellipse([px(q) - 8, py(p) - 8, px(q) + 8, py(p) + 8], fill=BLANC, outline=ORANGE, width=4)
    d.text((px(60) + 16, py(2000) - 12), "O", font=F_BOLD, fill=ORANGE)

    d.text((px(10), py(2200)), "Plus le prix est élevé, plus", font=F_MINI, fill=ORANGE)
    d.text((px(10), py(2080)), "la production est rentable", font=F_MINI, fill=ORANGE)

    tableau(d, 800, 150, [180, 190], [46, 50, 50, 50, 50],
            ["Prix (Ar)", "Quantité (kg)"],
            [["2 000", "60"],
             ["1 600", "45"],
             ["1 200", "30"],
             ["800", "12"]])

    d.rounded_rectangle([800, 480, 1180, 570], radius=8, fill=JAUNE_C, outline=ORANGE, width=2)
    d.text((820, 500), "Coût des facteurs, technique", font=F_MINI, fill=NOIR)
    d.text((820, 528), "et climat déplacent la courbe.", font=F_MINI, fill=NOIR)

    d.rounded_rectangle([60, 610, 1180, 680], radius=8, fill=BLEU_C, outline=BLEU, width=2)
    d.text((80, 630), "La courbe d'offre est croissante : prix et quantité offerte varient dans le même sens.",
           font=F_SMALL, fill=NOIR)
    d.text((80, 660), "Une variation du prix du bien déplace le point le long de la courbe, pas la courbe entière.",
           font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t11_u3_offre.png"))
    print("Figure écrite : t11_u3_offre.png")


# ------------------------------------------------------------
# Figure 24 — L'équilibre du marché
# ------------------------------------------------------------
def fig_equilibre():
    W, H = 1240, 720
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "La croix offre-demande : le prix d'équilibre")

    x0, y0, x1, y1 = 180, 580, 1120, 150
    qmax, pmax = 80.0, 2400.0

    def px(q):
        return x0 + q * (x1 - x0) / qmax

    def py(p):
        return y0 - p * (y0 - y1) / pmax

    d.line([x0, y0, x1 + 20, y0], fill=NOIR, width=3)
    d.line([x0, y0, x0, y1 - 20], fill=NOIR, width=3)
    d.text((x1 - 30, y0 + 16), "Quantité (kg)", font=F_SMALL, fill=NOIR)
    d.text((30, y1 - 40), "Prix (Ar)", font=F_SMALL, fill=NOIR)
    for p in (1000, 1500, 2000):
        d.line([x0 - 8, py(p), x0, py(p)], fill=NOIR, width=2)
        d.text((40, py(p) - 12), "{:,} Ar".format(p).replace(",", " "), font=F_MINI, fill=NOIR)
    for q in (40,):
        d.line([px(q), y0, px(q), y0 + 8], fill=NOIR, width=2)
        d.text((px(q) - 18, y0 + 14), "40 kg", font=F_MINI, fill=NOIR)

    # zones
    d.polygon([(px(10), py(2000)), (px(40), py(1500)), (px(70), py(2000))], fill=BLEU_C)
    d.text((px(36), py(2160)), "EXCÉDENT : l'offre dépasse la demande", font=F_MINI, fill=BLEU)
    d.polygon([(px(10), py(1000)), (px(40), py(1500)), (px(70), py(1000))], fill=ROSE_C)
    d.text((px(36), py(950)), "PÉNURIE : la demande dépasse l'offre", font=F_MINI, fill=ROUGE)

    # courbes
    d.line([px(10), py(2000), px(70), py(1000)], fill=BLEU, width=5)
    d.line([px(10), py(1000), px(70), py(2000)], fill=ORANGE, width=5)
    d.text((px(66), py(1000) + 6), "D", font=F_BOLD, fill=BLEU)
    d.text((px(66), py(2000) - 30), "O", font=F_BOLD, fill=ORANGE)

    # point d'équilibre
    d.ellipse([px(40) - 11, py(1500) - 11, px(40) + 11, py(1500) + 11], fill=ROUGE)
    for ly in range(int(py(1500)), int(y0), 12):
        d.line([px(40), ly, px(40), ly + 6], fill=ROUGE, width=2)
    for lx in range(x0, int(px(40)), 12):
        d.line([lx, py(1500), lx + 6, py(1500)], fill=ROUGE, width=2)
    d.text((px(40) + 18, py(1500) - 34), "Équilibre", font=F_SMALL, fill=ROUGE)
    d.text((px(40) + 18, py(1500) - 8), "1 500 Ar · 40 kg", font=F_SMALL, fill=ROUGE)

    d.rounded_rectangle([60, 620, 1180, 700], radius=8, fill=VERT_C, outline=VERT, width=3)
    d.text((80, 642), "Au-dessus du prix d'équilibre, l'excédent pousse les vendeurs à baisser leurs prix.",
           font=F_SMALL, fill=NOIR)
    d.text((80, 676), "En dessous, la pénurie pousse le prix à la hausse : c'est le tâtonnement du marché.",
           font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t11_u3_equilibre.png"))
    print("Figure écrite : t11_u3_equilibre.png")


# ------------------------------------------------------------
# Figure 25 — Les conditions de la concurrence pure et parfaite
# ------------------------------------------------------------
def fig_cpp():
    W, H = 1240, 720
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Les cinq conditions de la concurrence pure et parfaite")

    conds = [("ATOMICITÉ", "Offreurs et demandeurs très nombreux : aucun ne pèse sur le prix.", BLEU, BLEU_C),
             ("HOMOGÉNÉITÉ", "Les produits sont identiques : rien ne distingue un vendeur.", VERT, VERT_C),
             ("TRANSPARENCE", "Chacun connaît les prix pratiqués et la qualité offerte.", ORANGE, JAUNE_C),
             ("LIBRE ENTRÉE", "Tout producteur peut entrer sur le marché ou en sortir.", VIOLET, VIOLET_C),
             ("LIBRE CIRCULATION", "Le travail et le capital vont là où ils sont le mieux rémunérés.", ROUGE, ROSE_C)]
    pos = [(60, 130, 420, 250), (440, 130, 800, 250), (820, 130, 1180, 250),
           (250, 275, 610, 395), (630, 275, 990, 395)]
    for (t, txt, bord, fond), (a, b, c, e) in zip(conds, pos):
        d.rounded_rectangle([a, b, c, e], radius=10, fill=fond, outline=bord, width=3)
        d.rectangle([a, b, c, b + 42], fill=bord)
        texte_centre(d, (a, b, c, b + 42), t, F_BOLD, BLANC)
        for i, l in enumerate(wrap(d, txt, F_MINI, c - a - 30)):
            d.text((a + 16, b + 54 + i * 24), l, font=F_MINI, fill=NOIR)

    for (a, b, c, e) in pos:
        cx, cy = (a + c) / 2, (b + e) / 2
        d.line([cx, cy, 620, 560], fill=GRIS, width=2)

    d.ellipse([620 - 150, 560 - 90, 620 + 150, 560 + 90], fill=BLEU_C, outline=BLEU, width=4)
    texte_centre(d, (470, 500, 770, 540), "PRENEURS DE PRIX", F_BOLD, BLEU)
    texte_centre(d, (470, 540, 770, 620), "Personne ne fixe le prix :", F_MINI, NOIR)
    img.save(os.path.join(OUT, "t11_u3_cpp.png"))
    print("Figure écrite : t11_u3_cpp.png")


# ------------------------------------------------------------
# Figure 26 — Les structures de marché
# ------------------------------------------------------------
def fig_structures():
    W, H = 1240, 680
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Les structures de marché, du plus au moins concurrentiel")

    fin = tableau(d, 60, 120, [240, 250, 230, 230], [50, 66, 66, 66, 66],
                  ["Structure", "Nombre d'offreurs", "Nature des produits", "Pouvoir sur le prix"],
                  [["Concurrence pure et parfaite", "Très nombreux", "Identiques", "Aucun"],
                   ["Concurrence monopolistique", "Nombreux", "Différenciés", "Faible"],
                   ["Oligopole", "Quelques-uns", "Identiques ou différenciés", "Fort"],
                   ["Monopole", "Un seul", "Aucun substitut", "Total"]])

    d.rounded_rectangle([60, fin + 20, 380, fin + 130], radius=8, fill=VERT_C, outline=VERT, width=2)
    d.text((80, fin + 40), "Concurrence maximale", font=F_BOLD, fill=VERT)
    d.text((80, fin + 74), "Prix le plus bas", font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([860, fin + 20, 1180, fin + 130], radius=8, fill=ROSE_C, outline=ROUGE, width=2)
    d.text((880, fin + 40), "Concurrence minimale", font=F_BOLD, fill=ROUGE)
    d.text((880, fin + 74), "Prix le plus élevé", font=F_SMALL, fill=NOIR)

    fleche(d, 382, fin + 75, 856, fin + 75, GRIS, 4)
    d.text((520, fin + 44), "le pouvoir de marché grandit, le prix s'élève", font=F_MINI, fill=GRIS)

    d.rounded_rectangle([60, fin + 150, 1180, fin + 220], radius=8, fill=JAUNE_C, outline=ORANGE, width=2)
    d.text((80, fin + 172), "Exemples : marché du riz au village (proche de la CPP), restaurants d'un quartier "
                            "(concurrence monopolistique), téléphonie mobile (oligopole), "
                            "distribution d'eau dans une ville (monopole).", font=F_MINI, fill=NOIR)
    img.save(os.path.join(OUT, "t11_u3_structures.png"))
    print("Figure écrite : t11_u3_structures.png")


# ------------------------------------------------------------
# Figure 27 — Le gain à l'échange
# ------------------------------------------------------------
def fig_gain():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Le gain à l'échange : le surplus du consommateur")

    x0, y0, x1, y1 = 160, 560, 1100, 150
    pmax = 2200.0

    def py(p):
        return y0 - p * (y0 - y1) / pmax

    def px(i):
        return x0 + 60 + i * 200

    d.line([x0, y0, x1, y0], fill=NOIR, width=3)
    d.line([x0, y0, x0, y1 - 20], fill=NOIR, width=3)
    d.text((40, y1 - 40), "Ariary", font=F_SMALL, fill=NOIR)
    d.text((x1 - 120, y0 + 16), "Acheteurs", font=F_SMALL, fill=NOIR)

    prix = 1500
    for ly in range(x0, x1, 12):
        d.line([ly, py(prix), ly + 6, py(prix)], fill=ROUGE, width=2)
    d.text((x0 - 4, py(prix) - 30), "Prix du marché", font=F_SMALL, fill=ROUGE)
    d.text((x0 - 4, py(prix) - 6), "1 500 Ar", font=F_SMALL, fill=ROUGE)

    acheteurs = [("A", 2000), ("B", 1700), ("C", 1600), ("D", 1400)]
    for i, (nom, dispo) in enumerate(acheteurs):
        cx = px(i)
        haut = py(dispo)
        if dispo > prix:
            d.rectangle([cx - 55, haut, cx + 55, py(prix)], fill=BLEU_C, outline=BLEU, width=3)
            d.rectangle([cx - 55, py(prix), cx + 55, y0], fill=BLEU, outline=BLEU, width=3)
            d.text((cx - 46, haut + 14), "+" + str(dispo - prix) + " Ar", font=F_BOLD, fill=BLEU)
            d.text((cx - 46, py(prix) + 16), "payé :", font=F_MINI, fill=BLANC)
            d.text((cx - 46, py(prix) + 34), "1 500 Ar", font=F_MINI, fill=BLANC)
        else:
            d.rectangle([cx - 55, py(prix), cx + 55, y0], fill=(235, 235, 235), outline=GRIS, width=2)
            d.text((cx - 52, py(prix) + 30), "n'achète pas", font=F_MINI, fill=GRIS)
        d.text((cx - 8, y0 + 18), nom, font=F_BOLD, fill=NOIR)
        d.text((cx - 52, y0 + 46), "prêt à payer", font=F_MINI, fill=NOIR)
        d.text((cx - 40, y0 + 66), "{:,} Ar".format(dispo).replace(",", " "), font=F_MINI, fill=NOIR)

    d.rounded_rectangle([60, 640, 1180, 690], radius=8, fill=BLEU_C, outline=BLEU, width=3)
    d.text((80, 660), "Surplus du consommateur = disposition à payer − prix payé : ici 500 + 200 + 100 = 800 Ar.",
           font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t11_u3_gain.png"))
    print("Figure écrite : t11_u3_gain.png")


# ------------------------------------------------------------
# Figure 28 — Le surplus de production
# ------------------------------------------------------------
def fig_surplus():
    W, H = 1240, 720
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Surplus de production et surplus total à l'équilibre")

    x0, y0, x1, y1 = 180, 580, 1100, 150
    qmax, pmax = 80.0, 2600.0

    def px(q):
        return x0 + q * (x1 - x0) / qmax

    def py(p):
        return y0 - p * (y0 - y1) / pmax

    d.line([x0, y0, x1 + 20, y0], fill=NOIR, width=3)
    d.line([x0, y0, x0, y1 - 20], fill=NOIR, width=3)
    d.text((x1 - 30, y0 + 16), "Quantité (kg)", font=F_SMALL, fill=NOIR)
    d.text((30, y1 - 40), "Prix (Ar)", font=F_SMALL, fill=NOIR)

    # offre et demande
    d.line([px(0), py(2400), px(80), py(800)], fill=BLEU, width=5)
    d.line([px(0), py(800), px(80), py(2400)], fill=ORANGE, width=5)
    d.text((px(72), py(820)), "D", font=F_BOLD, fill=BLEU)
    d.text((px(72), py(2400) - 34), "O", font=F_BOLD, fill=ORANGE)

    # surplus du consommateur
    d.polygon([(px(0), py(2400)), (px(40), py(1600)), (px(0), py(1600))], fill=BLEU_C)
    d.text((px(2), py(2050)), "Surplus du", font=F_MINI, fill=BLEU)
    d.text((px(2), py(1960)), "consommateur", font=F_MINI, fill=BLEU)

    # surplus de production
    d.polygon([(px(0), py(1600)), (px(40), py(1600)), (px(0), py(800))], fill=JAUNE_C)
    d.text((px(2), py(1200)), "Surplus de", font=F_MINI, fill=ORANGE)
    d.text((px(2), py(1110)), "production", font=F_MINI, fill=ORANGE)

    # équilibre
    for ly in range(int(py(1600)), int(y0), 12):
        d.line([px(40), ly, px(40), ly + 6], fill=ROUGE, width=2)
    for lx in range(x0, int(px(40)), 12):
        d.line([lx, py(1600), lx + 6, py(1600)], fill=ROUGE, width=2)
    d.ellipse([px(40) - 11, py(1600) - 11, px(40) + 11, py(1600) + 11], fill=ROUGE)
    d.text((px(40) + 18, py(1600) - 34), "Équilibre : 1 600 Ar, 40 kg", font=F_SMALL, fill=ROUGE)

    d.rounded_rectangle([60, 620, 580, 710], radius=8, fill=VERT_C, outline=VERT, width=3)
    d.text((80, 642), "Le surplus total est maximal", font=F_BOLD, fill=VERT)
    d.text((80, 676), "à la quantité d'équilibre.", font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([620, 620, 1180, 710], radius=8, fill=BLEU_C, outline=BLEU, width=3)
    d.text((640, 642), "Surplus de production = prix reçu − coût de production.", font=F_SMALL, fill=NOIR)
    d.text((640, 676), "Surplus total = surplus du consommateur + surplus de production.", font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t11_u3_surplus.png"))
    print("Figure écrite : t11_u3_surplus.png")


# ------------------------------------------------------------
# Figure 29 — Les imperfections du marché
# ------------------------------------------------------------
def fig_imperfections():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Les imperfections du marché et leurs conséquences")

    d.text((60, 118), "CAUSES", font=F_BOLD, fill=BLEU)
    causes = [("Nombre limité d'offreurs", "Oligopole ou monopole : peu de vendeurs en présence.", BLEU, BLEU_C),
              ("Différenciation des produits", "Marque, qualité, service : une clientèle captive.", VERT, VERT_C),
              ("Entente entre producteurs", "Accord sur les prix, sur les quantités ou sur le marché.", ORANGE, JAUNE_C),
              ("Barrières à l'entrée", "Investissement, licence, brevet : pas de nouveaux entrants.", VIOLET, VIOLET_C)]
    y = 150
    for t, txt, bord, fond in causes:
        d.rounded_rectangle([60, y, 560, y + 105], radius=10, fill=fond, outline=bord, width=3)
        d.text((84, y + 16), t, font=F_BOLD, fill=bord)
        for i, l in enumerate(wrap(d, txt, F_MINI, 420)):
            d.text((84, y + 52 + i * 24), l, font=F_MINI, fill=NOIR)
        y += 120

    fleche(d, 568, 390, 636, 390, GRIS, 4)

    d.text((660, 118), "CONSÉQUENCES", font=F_BOLD, fill=ROUGE)
    effets = [("Un pouvoir sur le prix", "L'offreur fixe un prix supérieur au coût de production.", ROUGE, ROSE_C),
              ("Une quantité réduite", "Des échanges avantageux ne se réalisent pas.", ROUGE, ROSE_C),
              ("Une perte sèche", "La société perd une partie du gain de l'échange.", ROUGE, ROSE_C)]
    y = 150
    for t, txt, bord, fond in effets:
        d.rounded_rectangle([650, y, 1180, y + 125], radius=10, fill=fond, outline=bord, width=3)
        d.text((674, y + 16), t, font=F_BOLD, fill=bord)
        for i, l in enumerate(wrap(d, txt, F_SMALL, 460)):
            d.text((674, y + 52 + i * 26), l, font=F_SMALL, fill=NOIR)
        y += 140

    d.rounded_rectangle([60, 620, 1180, 690], radius=8, fill=VERT_C, outline=VERT, width=3)
    d.text((80, 644), "Remèdes : ouvrir le marché à de nouveaux entrants, sanctionner les ententes, "
                      "contrôler les concentrations.", font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t11_u3_imperfections.png"))
    print("Figure écrite : t11_u3_imperfections.png")


# ------------------------------------------------------------
# Figure 31 — Externalités négatives et biens collectifs
# ------------------------------------------------------------
def fig_externalites():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Externalité négative et bien collectif")

    d.rounded_rectangle([60, 120, 600, 470], radius=12, fill=ROSE_C, outline=ROUGE, width=3)
    texte_centre(d, (60, 120, 600, 172), "EXTERNALITÉ NÉGATIVE", F_BOLD, BLANC)
    d.rectangle([60, 120, 600, 172], fill=ROUGE)
    texte_centre(d, (60, 120, 600, 172), "EXTERNALITÉ NÉGATIVE", F_BOLD, BLANC)
    d.rounded_rectangle([90, 200, 300, 300], radius=8, fill=BLANC, outline=ROUGE, width=2)
    texte_centre(d, (90, 200, 300, 300), "USINE", F_BOLD, NOIR)
    d.rounded_rectangle([360, 200, 570, 300], radius=8, fill=BLANC, outline=BLEU, width=2)
    texte_centre(d, (360, 200, 570, 300), "VILLAGE", F_BOLD, NOIR)
    fleche(d, 304, 250, 354, 250, ROUGE, 4)
    d.text((300, 210), "eaux usées", font=F_MINI, fill=ROUGE)
    for i, l in enumerate(wrap(d, "Un coût supporté par d'autres, sans compensation : la rivière polluée, "
                                  "la fumée, le bruit.", F_SMALL, 480)):
        d.text((90, 330 + i * 28), l, font=F_SMALL, fill=NOIR)
    d.text((90, 410), "Conséquence : le marché produit trop.", font=F_BOLD, fill=ROUGE)

    d.rounded_rectangle([640, 120, 1180, 470], radius=12, fill=VERT_C, outline=VERT, width=3)
    d.rectangle([640, 120, 1180, 172], fill=VERT)
    texte_centre(d, (640, 120, 1180, 172), "BIEN COLLECTIF", F_BOLD, BLANC)
    d.rounded_rectangle([670, 200, 1150, 300], radius=8, fill=BLANC, outline=VERT, width=2)
    texte_centre(d, (670, 200, 1150, 300), "ÉCLAIRAGE PUBLIC, ROUTE, DIGUE", F_BOLD, NOIR)
    for i, l in enumerate(wrap(d, "Non-rival : l'usage par l'un n'empêche pas celui des autres. "
                                  "Non-exclusif : personne ne peut en être écarté.", F_SMALL, 480)):
        d.text((670, 330 + i * 28), l, font=F_SMALL, fill=NOIR)
    d.text((670, 410), "Conséquence : le privé n'en fournit pas assez.", font=F_BOLD, fill=VERT)

    d.rounded_rectangle([60, 500, 600, 660], radius=8, fill=JAUNE_C, outline=ORANGE, width=2)
    d.text((84, 522), "Remèdes à l'externalité négative", font=F_BOLD, fill=ORANGE)
    for i, l in enumerate(wrap(d, "Taxe correspondant au dommage, normes d'émission, permis, "
                                  "négociation entre les parties.", F_SMALL, 480)):
        d.text((84, 562 + i * 28), l, font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([640, 500, 1180, 660], radius=8, fill=BLEU_C, outline=BLEU, width=2)
    d.text((664, 522), "Réponse pour le bien collectif", font=F_BOLD, fill=BLEU)
    for i, l in enumerate(wrap(d, "La puissance publique finance le bien par l'impôt, car le passager "
                                  "clandestin profiterait sans payer.", F_SMALL, 480)):
        d.text((664, 562 + i * 28), l, font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t11_u3_externalites.png"))
    print("Figure écrite : t11_u3_externalites.png")


# ------------------------------------------------------------
# Figure 32 — Les raisons de l'intervention de l'État
# ------------------------------------------------------------
def fig_etat():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Les raisons de l'intervention de l'État dans l'économie")

    d.ellipse([470, 300, 770, 460], fill=BLEU_C, outline=BLEU, width=4)
    texte_centre(d, (470, 320, 770, 380), "L'ÉTAT", F_TITLE, BLEU)
    texte_centre(d, (470, 390, 770, 450), "intérêt général", F_SMALL, NOIR)

    raisons = [("Fournir les biens collectifs", "Routes, écoles, sécurité, justice, monnaie.", 60, 130, VERT, VERT_C),
               ("Corriger les défaillances", "Externalités, asymétrie d'information, concurrence.", 660, 130, ORANGE, JAUNE_C),
               ("Réduire les inégalités", "Impôt progressif, prestations, services essentiels.", 60, 500, VIOLET, VIOLET_C),
               ("Assurer la stabilité", "Croissance, emploi, prix, équilibre extérieur.", 660, 500, ROUGE, ROSE_C)]
    for t, txt, a, b, bord, fond in raisons:
        d.rounded_rectangle([a, b, a + 520, b + 130], radius=10, fill=fond, outline=bord, width=3)
        d.text((a + 22, b + 18), t, font=F_BOLD, fill=bord)
        for i, l in enumerate(wrap(d, txt, F_SMALL, 470)):
            d.text((a + 22, b + 60 + i * 28), l, font=F_SMALL, fill=NOIR)
        cx, cy = (a + 260), (b + 65)
        d.line([cx, cy, 620, 380], fill=GRIS, width=2)

    img.save(os.path.join(OUT, "t11_u3_etat.png"))
    print("Figure écrite : t11_u3_etat.png")


# ------------------------------------------------------------
# Figure 33 — Les politiques conjoncturelles
# ------------------------------------------------------------
def fig_politiques():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Relance et rigueur : les deux orientations conjoncturelles")

    d.rounded_rectangle([60, 120, 600, 460], radius=12, fill=VERT_C, outline=VERT, width=3)
    d.rectangle([60, 120, 600, 174], fill=VERT)
    texte_centre(d, (60, 120, 600, 174), "POLITIQUE DE RELANCE", F_BOLD, BLANC)
    d.text((84, 196), "Quand l'activité ralentit :", font=F_BOLD, fill=VERT)
    for i, l in enumerate(["• Dépense publique en hausse : travaux, aides",
                           "• Impôts réduits : plus de revenu disponible",
                           "• Taux d'intérêt plus bas : crédit moins cher",
                           "• Objectif : soutenir la demande et l'emploi"]):
        d.text((84, 240 + i * 34), l, font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([640, 120, 1180, 460], radius=12, fill=ROSE_C, outline=ROUGE, width=3)
    d.rectangle([640, 120, 1180, 174], fill=ROUGE)
    texte_centre(d, (640, 120, 1180, 174), "POLITIQUE DE RIGUEUR", F_BOLD, BLANC)
    d.text((664, 196), "Quand les prix s'emballent :", font=F_BOLD, fill=ROUGE)
    for i, l in enumerate(["• Dépense publique réduite",
                           "• Impôts relevés : demande freinée",
                           "• Taux d'intérêt relevés : crédit plus cher",
                           "• Objectif : calmer la demande et les prix"]):
        d.text((664, 240 + i * 34), l, font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([60, 490, 600, 600], radius=8, fill=BLEU_C, outline=BLEU, width=2)
    d.text((84, 512), "Politique budgétaire", font=F_BOLD, fill=BLEU)
    d.text((84, 550), "Dépense publique et impôt :", font=F_SMALL, fill=NOIR)
    d.text((84, 574), "décidés par le budget de l'État.", font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([640, 490, 1180, 600], radius=8, fill=JAUNE_C, outline=ORANGE, width=2)
    d.text((664, 512), "Politique monétaire", font=F_BOLD, fill=ORANGE)
    d.text((664, 550), "Taux d'intérêt et monnaie :", font=F_SMALL, fill=NOIR)
    d.text((664, 574), "conduits par la banque centrale.", font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([60, 620, 1180, 690], radius=8, fill=BLEU_C, outline=BLEU, width=3)
    d.text((80, 644), "Limites : délai d'action de plusieurs mois, risque d'inflation en cas de relance "
                      "excessive, risque d'endettement.", font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t11_u3_politiques.png"))
    print("Figure écrite : t11_u3_politiques.png")


if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    fig_couts()
    fig_maximisation()
    fig_bilan()
    fig_resultat()
    fig_parties()
    fig_contributions()
    fig_fonctions()
    fig_masse()
    fig_creation()
    fig_banques()
    fig_financement()
    fig_autofinancement()
    fig_credit()
    fig_marches()
    fig_interets()
    fig_valeur()
    fig_taux()
    fig_risques()
    fig_demande()
    fig_offre()
    fig_equilibre()
    fig_cpp()
    fig_structures()
    fig_gain()
    fig_surplus()
    fig_imperfections()
    fig_externalites()
    fig_etat()
    fig_politiques()
