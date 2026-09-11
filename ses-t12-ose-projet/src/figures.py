# ------------------------------------------------------------
# Figures — Manuel SES T12 série OSE · Unité I « Croissance et développement »
# ------------------------------------------------------------
#!/usr/bin/env python3
# ============================================================
# figures.py — figures géométriques du manuel SES T12 (série OSE)
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
# Figure 1 — Le PIB : définition
# ------------------------------------------------------------
def fig_pib():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Le produit intérieur brut : de quoi parle-t-on ?")

    boite(d, 60, 130, 560, 300, "PRODUCTION INTÉRIEURE",
          ["Biens et services produits", "sur le territoire, pendant", "une année, par les unités", "résidentes et non résidentes"],
          fill=BLEU_C, bord=BLEU, interligne=26, font=F_SMALL)

    boite(d, 680, 130, 1180, 300, "VALEUR AJOUTÉE",
          ["Valeur de la production", "moins consommations", "intermédiaires : la richesse", "créée par chaque unité"],
          fill=VERT_C, bord=VERT, interligne=26, font=F_SMALL)

    fleche(d, 562, 215, 676, 215, GRIS, 3)

    d.rounded_rectangle([260, 360, 980, 470], radius=12, fill=JAUNE_C, outline=ORANGE, width=4)
    texte_centre(d, (260, 360, 980, 410),
                 "PIB = somme des valeurs ajoutées + impôts sur les produits − subventions",
                 F_BOLD, ORANGE)
    texte_centre(d, (260, 410, 980, 468), "un indicateur de la production créée dans le pays", F_SMALL, NOIR)

    fleche(d, 620, 302, 620, 356, GRIS, 3)

    d.rounded_rectangle([60, 520, 580, 690], radius=10, fill=BLEU_C, outline=BLEU, width=3)
    d.text((84, 542), "Intérieur : sur le territoire", font=F_BOLD, fill=BLEU)
    for i, l in enumerate(["La production d'une usine installée dans le",
                           "pays compte, même si ses propriétaires",
                           "sont étrangers."]):
        d.text((84, 582 + i * 30), l, font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([660, 520, 1180, 690], radius=10, fill=VERT_C, outline=VERT, width=3)
    d.text((684, 542), "Brut : avant déduction de l'usure", font=F_BOLD, fill=VERT)
    for i, l in enumerate(["Le PIB ne retire pas l'amortissement des",
                           "machines et des bâtiments utilisés pour",
                           "produire."]):
        d.text((684, 582 + i * 30), l, font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t12_u1_pib.png"))
    print("Figure écrite : t12_u1_pib.png")


# ------------------------------------------------------------
# Figure 2 — Le calcul du PIB
# ------------------------------------------------------------
def fig_calcul_pib():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Les trois manières de calculer le PIB")

    y = 130
    d.rounded_rectangle([60, y, 1180, y + 150], radius=10, fill=BLEU_C, outline=BLEU, width=3)
    d.text((88, y + 14), "1. L'approche par la dépense", font=F_BOLD, fill=BLEU)
    d.text((88, y + 52), "PIB = consommation (C) + investissement (I) + dépenses publiques (G) + (exportations − importations)",
           font=F_SMALL, fill=NOIR)
    d.text((88, y + 88), "Exemple : C = 62 000 + I = 14 000 + G = 9 000 + (X − M) = −3 000", font=F_SMALL, fill=NOIR)
    d.text((88, y + 120), "PIB = 82 000 milliards d'ariary", font=F_BOLD, fill=BLEU)

    y = 300
    d.rounded_rectangle([60, y, 1180, y + 150], radius=10, fill=VERT_C, outline=VERT, width=3)
    d.text((88, y + 14), "2. L'approche par la production", font=F_BOLD, fill=VERT)
    d.text((88, y + 52), "PIB = somme des valeurs ajoutées des branches + impôts sur les produits − subventions",
           font=F_SMALL, fill=NOIR)
    d.text((88, y + 88), "Exemple : agriculture 24 000 + industrie 15 000 + services 40 000 + impôts nets 3 000",
           font=F_SMALL, fill=NOIR)
    d.text((88, y + 120), "PIB = 82 000 milliards d'ariary", font=F_BOLD, fill=VERT)

    y = 470
    d.rounded_rectangle([60, y, 1180, y + 150], radius=10, fill=JAUNE_C, outline=ORANGE, width=3)
    d.text((88, y + 14), "3. L'approche par le revenu", font=F_BOLD, fill=ORANGE)
    d.text((88, y + 52), "PIB = rémunération des salariés + excédent brut d'exploitation + impôts − subventions",
           font=F_SMALL, fill=NOIR)
    d.text((88, y + 88), "Exemple : salaires 38 000 + excédent brut 41 000 + impôts nets 3 000", font=F_SMALL, fill=NOIR)
    d.text((88, y + 120), "PIB = 82 000 milliards d'ariary", font=F_BOLD, fill=ORANGE)

    d.rounded_rectangle([60, 640, 1180, 690], radius=8, fill=VIOLET_C, outline=VIOLET, width=3)
    d.text((84, 662), "Les trois approches donnent le même résultat : toute production crée un revenu et trouve un acheteur.",
           font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t12_u1_calcul_pib.png"))
    print("Figure écrite : t12_u1_calcul_pib.png")


# ------------------------------------------------------------
# Figure 3 — Les limites du PIB
# ------------------------------------------------------------
def fig_limites_pib():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Ce que le PIB mesure et ce qu'il ne mesure pas")

    d.rounded_rectangle([480, 130, 760, 230], radius=12, fill=BLEU_C, outline=BLEU, width=4)
    texte_centre(d, (480, 130, 760, 230), "LE PIB", F_TITLE, BLEU)

    limites = [("TRAVAIL DOMESTIQUE", "Cuisine, soins, éducation\nau foyer : non comptés", 60, 130, BLEU, BLEU_C),
               ("ÉCONOMIE INFORMELLE", "Petits métiers et troc\néchappent aux comptes", 900, 130, ORANGE, JAUNE_C),
               ("TEMPS LIBRE", "Le PIB ignore la durée\net la qualité des loisirs", 60, 400, VERT, VERT_C),
               ("DÉGRADATIONS", "Pollution et épuisement\ndes ressources non déduits", 900, 400, ROUGE, ROSE_C),
               ("RÉPARTITION", "Le PIB ne dit pas comment\nla richesse est partagée", 480, 520, VIOLET, VIOLET_C)]
    for t, s, a, b, bord, fond in limites:
        d.rounded_rectangle([a, b, a + 280, b + 150], radius=10, fill=fond, outline=bord, width=3)
        for i, l in enumerate(wrap(d, t, F_BOLD, 250)):
            texte_centre(d, (a, b + 12 + i * 30, a + 280, b + 42 + i * 30), l, F_BOLD, bord)
        for i, l in enumerate(s.split("\n")):
            texte_centre(d, (a, b + 78 + i * 26, a + 280, b + 104 + i * 26), l, F_MINI, NOIR)
        d.line([a + 140, b + 75, 620, 180], fill=(200, 200, 200), width=2)

    d.rounded_rectangle([60, 620, 1180, 690], radius=8, fill=BLEU_C, outline=BLEU, width=3)
    d.text((84, 644), "Le PIB mesure la production marchande : il est un instrument, pas un indicateur de bien-être.",
           font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t12_u1_limites_pib.png"))
    print("Figure écrite : t12_u1_limites_pib.png")


# ------------------------------------------------------------
# Figure 4 — Les sources de la croissance
# ------------------------------------------------------------
def fig_sources():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Les sources de la croissance : travail et capital")

    boite(d, 60, 150, 400, 380, "LE FACTEUR TRAVAIL",
          ["Quantité : nombre", "d'actifs occupés, durée", "du travail",
           "Qualité : formation,", "expérience, santé",
           "Plus d'actifs formés =", "plus de production"],
          fill=BLEU_C, bord=BLEU, interligne=26, font=F_SMALL)

    boite(d, 840, 150, 1180, 380, "LE FACTEUR CAPITAL",
          ["Quantité : machines,", "bâtiments, routes,", "réseaux",
           "Qualité : matériel récent,", "infrastructures fiables",
           "Plus de capital par", "travailleur = plus de", "production"],
          fill=JAUNE_C, bord=ORANGE, interligne=26, font=F_SMALL)

    fleche(d, 404, 265, 560, 265, GRIS, 3)
    fleche(d, 836, 265, 680, 265, GRIS, 3)

    d.rounded_rectangle([560, 200, 680, 330], radius=12, fill=VERT_C, outline=VERT, width=4)
    texte_centre(d, (560, 200, 680, 245), "Y =", F_TITLE, VERT)
    texte_centre(d, (560, 245, 680, 300), "A F(K, L)", F_TITLE, VERT)
    texte_centre(d, (560, 300, 680, 328), "production", F_MINI, NOIR)

    fleche(d, 620, 332, 620, 420, GRIS, 3)

    d.rounded_rectangle([380, 420, 860, 510], radius=10, fill=VIOLET_C, outline=VIOLET, width=3)
    texte_centre(d, (380, 420, 860, 465), "LA PRODUCTION AUGMENTE", F_BOLD, VIOLET)
    texte_centre(d, (380, 465, 860, 508), "si la quantité ou la qualité de l'un des deux facteurs progresse", F_MINI, NOIR)

    d.rounded_rectangle([60, 560, 1180, 690], radius=10, fill=BLEU_C, outline=BLEU, width=3)
    d.text((84, 582), "À retenir", font=F_BOLD, fill=BLEU)
    for i, l in enumerate(["• Accumuler du capital et élever la qualification de la main-d'œuvre sont les deux leviers visibles de la croissance.",
                           "• Mais une partie de la croissance n'est expliquée ni par l'un ni par l'autre : c'est le rôle du progrès technique."]):
        d.text((84, 622 + i * 30), l, font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t12_u1_sources.png"))
    print("Figure écrite : t12_u1_sources.png")


# ------------------------------------------------------------
# Figure 5 — Le progrès technique et la PGF
# ------------------------------------------------------------
def fig_pgf():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "La productivité globale des facteurs et le progrès technique")

    d.rounded_rectangle([60, 130, 560, 420], radius=12, fill=VIOLET_C, outline=VIOLET, width=3)
    d.rectangle([60, 130, 560, 184], fill=VIOLET)
    texte_centre(d, (60, 130, 560, 184), "LA PRODUCTIVITÉ GLOBALE DES FACTEURS", F_BOLD, BLANC)
    for i, l in enumerate(["La part de la croissance qui ne s'explique ni",
                           "par le travail ni par le capital :",
                           "• le progrès technique ;",
                           "• une meilleure organisation du travail ;",
                           "• la qualification et la santé des travailleurs ;",
                           "• l'efficacité des institutions."]):
        d.text((88, 214 + i * 32), l, font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([620, 130, 1180, 420], radius=10, fill=BLANC, outline=GRIS, width=2)
    d.text((644, 145), "Production par heure de travail", font=F_SMALL, fill=GRIS)
    d.line([660, 400, 1150, 400], fill=NOIR, width=3)
    d.line([660, 400, 660, 180], fill=NOIR, width=3)
    d.text((1160, 390), "temps", font=F_MINI, fill=NOIR)
    d.line([680, 360, 1140, 250], fill=BLEU, width=4)
    d.text((1000, 210), "progrès technique", font=F_SMALL, fill=BLEU)
    d.line([680, 360, 1140, 330], fill=BLEU_C, width=4)
    d.text((1000, 340), "sans progrès", font=F_SMALL, fill=GRIS)
    fleche(d, 1050, 300, 1050, 262, VIOLET, 3)

    d.rounded_rectangle([60, 460, 1180, 690], radius=10, fill=BLEU_C, outline=BLEU, width=3)
    d.text((84, 482), "Comment lire le graphique", font=F_BOLD, fill=BLEU)
    for i, l in enumerate(["• Sans progrès technique, la production par heure progresse peu : on ne fait qu'ajouter des machines ou des heures.",
                           "• Avec le progrès technique, la même heure de travail produit beaucoup plus : la courbe se déplace vers le haut.",
                           "• La PGF mesure ce déplacement : c'est « l'efficacité » avec laquelle les facteurs sont combinés."]):
        d.text((84, 522 + i * 32), l, font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t12_u1_pgf.png"))
    print("Figure écrite : t12_u1_pgf.png")


# ------------------------------------------------------------
# Figure 6 — Croissance extensive et croissance intensive
# ------------------------------------------------------------
def fig_extensive():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Croissance extensive et croissance intensive")

    boite(d, 60, 130, 600, 470, "CROISSANCE EXTENSIVE",
          ["On produit plus en utilisant", "davantage de facteurs :",
           "• plus de travailleurs ;",
           "• plus de machines ;",
           "• plus de terres cultivées.",
           "La quantité augmente, mais",
           "l'efficacité reste la même.",
           "Elle se heurte vite à des",
           "limites : ressources et",
           "population disponibles."],
          fill=BLEU_C, bord=BLEU, interligne=28, font=F_SMALL)

    boite(d, 640, 130, 1180, 470, "CROISSANCE INTENSIVE",
          ["On produit plus avec autant", "de facteurs, en les rendant",
           "plus efficaces :",
           "• machines plus performantes ;",
           "• travailleurs mieux formés ;",
           "• meilleure organisation ;",
           "• innovations de procédé.",
           "C'est la croissance portée",
           "par la productivité globale",
           "des facteurs."],
          fill=VERT_C, bord=VERT, interligne=28, font=F_SMALL)

    d.rounded_rectangle([60, 510, 1180, 620], radius=10, fill=JAUNE_C, outline=ORANGE, width=3)
    d.text((84, 532), "Comparaison", font=F_BOLD, fill=ORANGE)
    d.text((84, 572), "Extensive : défricher deux fois plus de rizières pour doubler la récolte.", font=F_SMALL, fill=NOIR)
    d.text((84, 606), "Intensive : doubler la récolte sur la même surface grâce à de meilleures semences et à l'irrigation.",
           font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([60, 645, 1180, 690], radius=8, fill=BLEU_C, outline=BLEU, width=3)
    d.text((84, 665), "Toute croissance réelle combine les deux formes ; la croissance intensive est la seule durable.",
           font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t12_u1_extensive.png"))
    print("Figure écrite : t12_u1_extensive.png")


# ------------------------------------------------------------
# Figure 7 — La croissance, un phénomène endogène
# ------------------------------------------------------------
def fig_endogene():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "La croissance, un phénomène endogène : la boucle de l'investissement")

    etapes = [("INVESTISSEMENT", "machines, routes, formation", 60, 150, BLEU, BLEU_C),
              ("CAPITAL ET SAVOIR", "plus de capital, plus de compétences", 900, 150, VERT, VERT_C),
              ("PRODUCTIVITÉ", "on produit plus par heure", 900, 430, ORANGE, JAUNE_C),
              ("CROISSANCE", "la production nationale augmente", 60, 430, VIOLET, VIOLET_C)]
    for t, s, a, b, bord, fond in etapes:
        d.rounded_rectangle([a, b, a + 340, b + 140], radius=12, fill=fond, outline=bord, width=3)
        d.rectangle([a, b, a + 340, b + 46], fill=bord)
        texte_centre(d, (a, b, a + 340, b + 46), t, F_BOLD, BLANC)
        for i, l in enumerate(wrap(d, s, F_MINI, 300)):
            texte_centre(d, (a, b + 60 + i * 24, a + 340, b + 84 + i * 24), l, F_MINI, NOIR)

    fleche(d, 402, 220, 896, 220, GRIS, 3)
    fleche(d, 1070, 292, 1070, 426, GRIS, 3)
    fleche(d, 896, 500, 402, 500, GRIS, 3)
    fleche(d, 230, 426, 230, 292, GRIS, 3)

    d.rounded_rectangle([480, 280, 760, 420], radius=14, fill=ROSE_C, outline=ROUGE, width=4)
    texte_centre(d, (480, 280, 760, 330), "CROISSANCE", F_BOLD, ROUGE)
    texte_centre(d, (480, 330, 760, 380), "ENDOGÈNE", F_BOLD, ROUGE)
    texte_centre(d, (480, 380, 760, 418), "la cause est interne", F_MINI, NOIR)

    d.rounded_rectangle([60, 600, 1180, 690], radius=10, fill=BLEU_C, outline=BLEU, width=3)
    d.text((84, 622), "Le profit et l'épargne alimentent l'investissement : la croissance entretient la croissance.",
           font=F_BOLD, fill=BLEU)
    d.text((84, 658), "Les connaissances ne s'épuisent pas en servant : elles peuvent profiter à tous sans se raréfier.",
           font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t12_u1_endogene.png"))
    print("Figure écrite : t12_u1_endogene.png")


# ------------------------------------------------------------
# Figure 9 — Les indicateurs du développement : RNB et IDH
# ------------------------------------------------------------
def fig_idh():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Mesurer le développement : le RNB et l'IDH")

    d.rounded_rectangle([60, 130, 580, 330], radius=10, fill=BLEU_C, outline=BLEU, width=3)
    d.text((84, 152), "LE REVENU NATIONAL BRUT PAR HABITANT", font=F_BOLD, fill=BLEU)
    for i, l in enumerate(["Richesses produites par les résidents,",
                           "divisées par le nombre d'habitants.",
                           "Il approche le niveau de vie moyen,",
                           "mais dit rien de sa répartition."]):
        d.text((84, 196 + i * 30), l, font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([660, 130, 1180, 330], radius=10, fill=VERT_C, outline=VERT, width=3)
    d.text((684, 152), "L'INDICE DE DÉVELOPPEMENT HUMAIN", font=F_BOLD, fill=VERT)
    for i, l in enumerate(["Indice compris entre 0 et 1, qui combine",
                           "trois dimensions : la santé, l'éducation",
                           "et le niveau de vie. Plus il est proche",
                           "de 1, plus le développement est élevé."]):
        d.text((684, 196 + i * 30), l, font=F_SMALL, fill=NOIR)

    dims = [("SANTÉ", "espérance de vie\nà la naissance", 60, 380, BLEU, BLEU_C),
            ("ÉDUCATION", "durée de scolarisation\net années attendues", 460, 380, ORANGE, JAUNE_C),
            ("NIVEAU DE VIE", "RNB par habitant", 860, 380, VERT, VERT_C)]
    for t, s, a, b, bord, fond in dims:
        d.rounded_rectangle([a, b, a + 320, b + 150], radius=10, fill=fond, outline=bord, width=3)
        d.rectangle([a, b, a + 320, b + 44], fill=bord)
        texte_centre(d, (a, b, a + 320, b + 44), t, F_BOLD, BLANC)
        for i, l in enumerate(s.split("\n")):
            texte_centre(d, (a, b + 60 + i * 26, a + 320, b + 86 + i * 26), l, F_SMALL, NOIR)
        fleche(d, a + 160, b + 150, 620, 585, GRIS, 2)

    d.rounded_rectangle([400, 585, 840, 660], radius=10, fill=VIOLET_C, outline=VIOLET, width=4)
    texte_centre(d, (400, 585, 840, 660), "IDH", F_TITLE, VIOLET)

    img.save(os.path.join(OUT, "t12_u1_idh.png"))
    print("Figure écrite : t12_u1_idh.png")


# ------------------------------------------------------------
# Figure 10 — Les causes du sous-développement
# ------------------------------------------------------------
def fig_causes():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Les principales causes du retard de développement")

    d.rounded_rectangle([460, 300, 780, 400], radius=12, fill=ROSE_C, outline=ROUGE, width=4)
    texte_centre(d, (460, 300, 780, 400), "SOUS-DÉVELOPPEMENT", F_BOLD, ROUGE)

    causes = [("INSUFFISANCE DE CAPITAL", "peu de machines, d'infrastructures\net de moyens financiers", 60, 120, BLEU, BLEU_C),
              ("CROISSANCE DÉMOGRAPHIQUE", "une population nombreuse dilue\nles efforts d'équipement", 900, 120, ORANGE, JAUNE_C),
              ("INSERTION COMMERCIALE", "exportations peu diversifiées et\nprix mondiaux défavorables", 60, 460, VERT, VERT_C),
              ("INSTITUTIONS FRAGILES", "règles incertaines, coût élevé\nde l'activité économique", 900, 460, VIOLET, VIOLET_C)]
    for t, s, a, b, bord, fond in causes:
        d.rounded_rectangle([a, b, a + 280, b + 160], radius=10, fill=fond, outline=bord, width=3)
        for i, l in enumerate(wrap(d, t, F_BOLD, 250)):
            texte_centre(d, (a, b + 12 + i * 28, a + 280, b + 40 + i * 28), l, F_BOLD, bord)
        for i, l in enumerate(s.split("\n")):
            texte_centre(d, (a, b + 80 + i * 26, a + 280, b + 106 + i * 26), l, F_MINI, NOIR)
        d.line([a + 140, b + 80, 620, 350], fill=(200, 200, 200), width=2)

    d.rounded_rectangle([60, 645, 1180, 690], radius=8, fill=BLEU_C, outline=BLEU, width=3)
    d.text((84, 665), "Ces causes se renforcent entre elles : elles forment un enchaînement difficile à rompre.",
           font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t12_u1_causes.png"))
    print("Figure écrite : t12_u1_causes.png")


# ------------------------------------------------------------
# Figure 11 — Le cercle vicieux du sous-développement
# ------------------------------------------------------------
def fig_cercle():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Le cercle vicieux du sous-développement")

    etapes = [("FAIBLE REVENU", "les ménages disposent de peu", 90, 140, BLEU, BLEU_C),
              ("FAIBLE ÉPARGNE", "on consomme presque tout", 830, 140, VERT, VERT_C),
              ("FAIBLE INVESTISSEMENT", "peu de machines, d'écoles, de routes", 830, 430, ORANGE, JAUNE_C),
              ("FAIBLE PRODUCTIVITÉ", "chaque heure produit peu", 90, 430, VIOLET, VIOLET_C)]
    for t, s, a, b, bord, fond in etapes:
        d.rounded_rectangle([a, b, a + 320, b + 150], radius=12, fill=fond, outline=bord, width=3)
        d.rectangle([a, b, a + 320, b + 44], fill=bord)
        texte_centre(d, (a, b, a + 320, b + 44), t, F_BOLD, BLANC)
        for i, l in enumerate(wrap(d, s, F_MINI, 280)):
            texte_centre(d, (a, b + 58 + i * 24, a + 320, b + 82 + i * 24), l, F_MINI, NOIR)

    fleche(d, 412, 215, 826, 215, GRIS, 3)
    fleche(d, 990, 292, 990, 426, GRIS, 3)
    fleche(d, 826, 505, 412, 505, GRIS, 3)
    fleche(d, 250, 426, 250, 292, GRIS, 3)

    d.rounded_rectangle([460, 280, 780, 420], radius=14, fill=JAUNE_C, outline=ORANGE, width=4)
    texte_centre(d, (460, 280, 780, 330), "CERCLE", F_BOLD, ORANGE)
    texte_centre(d, (460, 330, 780, 380), "VICIEUX", F_BOLD, ORANGE)
    texte_centre(d, (460, 380, 780, 418), "chaque cause renforce l'autre", F_MINI, NOIR)

    d.rounded_rectangle([60, 620, 1180, 690], radius=10, fill=VERT_C, outline=VERT, width=3)
    d.text((84, 642), "Rompre le cercle", font=F_BOLD, fill=VERT)
    d.text((84, 678), "Un apport extérieur — investissement, aide, transfert de technologie — permet d'augmenter la productivité, donc le revenu.",
           font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t12_u1_cercle.png"))
    print("Figure écrite : t12_u1_cercle.png")


# ------------------------------------------------------------
# Figure 12 — Les politiques économiques de développement
# ------------------------------------------------------------
def fig_politiques():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Les politiques économiques de développement")

    politiques = [("MODERNISATION AGRICOLE", "semences améliorées, irrigation,", "pistes rurales, stockage", 60, 130, VERT, VERT_C),
                  ("INDUSTRIALISATION", "transformer sur place les", "produits exportés", 640, 130, BLEU, BLEU_C),
                  ("INSERTION COMMERCIALE", "diversifier les exportations,", "accéder aux marchés", 60, 340, ORANGE, JAUNE_C),
                  ("INSTITUTIONS ET AIDE", "règles stables, financement", "des partenaires extérieurs", 640, 340, VIOLET, VIOLET_C)]
    for t, s1, s2, a, b, bord, fond in politiques:
        d.rounded_rectangle([a, b, a + 540, b + 170], radius=10, fill=fond, outline=bord, width=3)
        d.rectangle([a, b, a + 540, b + 44], fill=bord)
        texte_centre(d, (a, b, a + 540, b + 44), t, F_BOLD, BLANC)
        texte_centre(d, (a, b + 54, a + 540, b + 90), s1, F_SMALL, NOIR)
        texte_centre(d, (a, b + 90, a + 540, b + 126), s2, F_SMALL, NOIR)
        fleche(d, a + 270, b + 172, 620, 570, GRIS, 2)

    d.rounded_rectangle([360, 570, 880, 680], radius=12, fill=ROSE_C, outline=ROUGE, width=4)
    texte_centre(d, (360, 570, 880, 625), "DÉVELOPPEMENT", F_TITLE, ROUGE)
    texte_centre(d, (360, 625, 880, 676), "revenu, santé, éducation, emploi", F_SMALL, NOIR)
    img.save(os.path.join(OUT, "t12_u1_politiques.png"))
    print("Figure écrite : t12_u1_politiques.png")


# ------------------------------------------------------------
# Figure 14 — Soutenabilité faible et soutenabilité forte
# ------------------------------------------------------------
def fig_soutenabilite():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Soutenabilité faible et soutenabilité forte")

    boite(d, 60, 130, 600, 450, "SOUTENABILITÉ FAIBLE",
          ["Le capital doit se transmettre",
           "aux générations suivantes,",
           "mais les formes de capital",
           "sont interchangeables :",
           "• une ressource épuisée peut",
           "être remplacée par des",
           "machines, des routes ou du",
           "savoir ;",
           "• ce qui compte, c'est le",
           "stock total de capital."],
          fill=BLEU_C, bord=BLEU, interligne=27, font=F_SMALL)

    boite(d, 640, 130, 1180, 450, "SOUTENABILITÉ FORTE",
          ["Le capital naturel ne se",
           "remplace pas : chaque forme",
           "de capital doit être",
           "préservée séparément.",
           "• une forêt disparue ne se",
           "substitue pas par une usine ;",
           "• certaines ressources sont",
           "irréversibles ;",
           "• la prudence impose de",
           "fixer des seuils à ne pas",
           "franchir."],
          fill=VERT_C, bord=VERT, interligne=27, font=F_SMALL)

    d.rounded_rectangle([60, 490, 1180, 620], radius=10, fill=JAUNE_C, outline=ORANGE, width=3)
    d.text((84, 512), "La condition commune", font=F_BOLD, fill=ORANGE)
    for i, l in enumerate(["Le développement est durable s'il répond aux besoins du présent sans compromettre la capacité des générations",
                           "futures à répondre aux leurs : les deux approches partagent cette exigence, mais diffèrent sur les moyens"]):
        d.text((84, 552 + i * 30), l, font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([60, 645, 1180, 690], radius=8, fill=BLEU_C, outline=BLEU, width=3)
    d.text((84, 665), "Soutenabilité faible : substituer. Soutenabilité forte : préserver chaque capital séparément.",
           font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t12_u1_soutenabilite.png"))
    print("Figure écrite : t12_u1_soutenabilite.png")


# ------------------------------------------------------------
# Figure 15 — Les politiques environnementales
# ------------------------------------------------------------
def fig_environnement():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Les trois instruments des politiques environnementales")

    instr = [("LA RÉGLEMENTATION", "Interdire ou limiter", "Normes d'émission, interdiction",
              "de certains produits, aires",
              "protégées, études d'impact.",
              "Avantage : résultat direct.",
              "Limite : contrôle coûteux.", 60, 130, BLEU, BLEU_C),
             ("LA TAXATION", "Faire payer le pollueur", "Une taxe sur les émissions ou",
              "les produits polluants élève",
              "leur prix et décourage leur",
              "usage : c'est le principe",
              "pollueur-payeur.", 440, 130, ORANGE, JAUNE_C),
             ("LES MARCHÉS DE QUOTAS", "Plafonner puis échanger", "L'autorité fixe un plafond",
              "d'émissions et répartit des",
              "quotas échangeables : celui",
              "qui pollue moins vend son",
              "quota à celui qui pollue plus.", 820, 130, VERT, VERT_C)]
    for t, st, l1, l2, l3, l4, l5, a, b, bord, fond in instr:
        d.rounded_rectangle([a, b, a + 360, b + 400], radius=10, fill=fond, outline=bord, width=3)
        d.rectangle([a, b, a + 360, b + 44], fill=bord)
        texte_centre(d, (a, b, a + 360, b + 44), t, F_BOLD, BLANC)
        d.text((a + 18, b + 56), st, font=F_SMALL, fill=bord)
        for i, l in enumerate([l1, l2, l3, l4, l5]):
            d.text((a + 18, b + 100 + i * 30), l, font=F_MINI, fill=NOIR)
        d.text((a + 18, b + 330), l1 if False else "", font=F_MINI, fill=NOIR)

    d.rounded_rectangle([60, 560, 1180, 690], radius=10, fill=VIOLET_C, outline=VIOLET, width=3)
    d.text((84, 582), "Comparaison rapide", font=F_BOLD, fill=VIOLET)
    for i, l in enumerate(["• La réglementation impose une conduite ; la taxation modifie les prix ; les quotas fixent une quantité globale.",
                           "• Les quotas garantissent le volume total d'émissions, mais supposent un marché organisé et un contrôle des déclarations."]):
        d.text((84, 622 + i * 30), l, font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t12_u1_environnement.png"))
    print("Figure écrite : t12_u1_environnement.png")



# ------------------------------------------------------------
# Figure 16 — La structure des échanges mondiaux
# ------------------------------------------------------------
def fig_structure():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "La transformation de la structure du commerce mondial")

    d.text((80, 110), "Part des grandes catégories de produits dans les échanges mondiaux",
           font=F_SMALL, fill=GRIS)

    # axes
    x0, y0, x1, y1 = 100, 480, 1140, 170
    d.line([x0, y0, x0, y1], fill=NOIR, width=3)
    d.line([x0, y0, x1, y0], fill=NOIR, width=3)
    d.text((1150, 470), "années", font=F_MINI, fill=NOIR)

    annees = [0, 1, 2, 3]
    for a in annees:
        x = x0 + a * 260
        d.line([x, y0, x, y0 + 8], fill=NOIR, width=2)
        d.text((x - 20, y0 + 14), "P" + str(a + 1), font=F_MINI, fill=NOIR)

    # courbes empilées simplifiées (chaque bande = une catégorie)
    hauteurs = [
        [90, 80, 62, 50],    # produits primaires
        [110, 118, 130, 136],  # produits manufacturés
        [46, 62, 86, 104],   # services
    ]
    couleurs = [BLEU, VERT, ORANGE]
    for i, (serie, coul) in enumerate(zip(hauteurs, couleurs)):
        pts = []
        for a in annees:
            x = x0 + a * 260
            cumul = sum(h[a] for h in hauteurs[:i + 1])
            pts.append((x, y0 - cumul * 2))
        d.line(pts, fill=coul, width=5)

    légende = [("PRODUITS PRIMAIRES", BLEU, 80, 560),
               ("PRODUITS MANUFACTURÉS", VERT, 430, 560),
               ("SERVICES", ORANGE, 830, 560)]
    for t, coul, x, y in légende:
        d.rectangle([x, y, x + 34, y + 22], fill=coul)
        d.text((x + 46, y), t, font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([80, 620, 1160, 690], radius=8, fill=BLEU_C, outline=BLEU, width=3)
    d.text((104, 642), "Lecture : la part des produits manufacturés et des services progresse, "
                       "celle des produits primaires recule.", font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t12_u2_structure.png"))
    print("Figure écrite : t12_u2_structure.png")


# ------------------------------------------------------------
# Figure 17 — Échanges et croissance
# ------------------------------------------------------------
def fig_echanges_croissance():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Commerce international et croissance : une interaction")

    etapes = [("OUVERTURE", "accès à un marché plus vaste", 70, 150, BLEU, BLEU_C),
              ("SPÉCIALISATION", "production là où l'on est le plus efficace", 820, 150, VERT, VERT_C),
              ("GAINS DE PRODUCTIVITÉ", "échelle, concurrence, diffusion des techniques", 820, 420, ORANGE, JAUNE_C),
              ("CROISSANCE", "hausse du revenu national", 70, 420, VIOLET, VIOLET_C)]
    for t, s, a, b, bord, fond in etapes:
        d.rounded_rectangle([a, b, a + 350, b + 150], radius=12, fill=fond, outline=bord, width=3)
        d.rectangle([a, b, a + 350, b + 44], fill=bord)
        texte_centre(d, (a, b, a + 350, b + 44), t, F_BOLD, BLANC)
        for i, l in enumerate(wrap(d, s, F_MINI, 310)):
            texte_centre(d, (a, b + 58 + i * 24, a + 350, b + 82 + i * 24), l, F_MINI, NOIR)

    fleche(d, 422, 225, 816, 225, GRIS, 3)
    fleche(d, 995, 302, 995, 416, GRIS, 3)
    fleche(d, 816, 495, 422, 495, GRIS, 3)
    fleche(d, 245, 416, 245, 302, GRIS, 3)

    d.rounded_rectangle([460, 280, 780, 390], radius=14, fill=ROSE_C, outline=ROUGE, width=4)
    texte_centre(d, (460, 280, 780, 340), "CERCLE", F_BOLD, ROUGE)
    texte_centre(d, (460, 340, 780, 388), "VERTUEUX", F_BOLD, ROUGE)

    d.rounded_rectangle([70, 600, 1170, 690], radius=10, fill=JAUNE_C, outline=ORANGE, width=3)
    d.text((94, 622), "Condition", font=F_BOLD, fill=ORANGE)
    d.text((94, 658), "Le gain n'est pas automatique : il suppose des capacités de production et une spécialisation porteuse.",
           font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t12_u2_echanges.png"))
    print("Figure écrite : t12_u2_echanges.png")


# ------------------------------------------------------------
# Figure 18 — Libre-échange et protectionnisme
# ------------------------------------------------------------
def fig_libre_echange():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Libre-échange et protectionnisme : deux politiques commerciales")

    boite(d, 60, 130, 600, 440, "LIBRE-ÉCHANGE",
          ["Aucun obstacle aux échanges :",
           "• suppression des droits de douane ;",
           "• suppression des quotas ;",
           "• libre circulation des capitaux.",
           "",
           "Arguments : baisse des prix, plus",
           "large choix, spécialisation selon",
           "les avantages de chacun."],
          fill=VERT_C, bord=VERT, interligne=27, font=F_SMALL)

    boite(d, 640, 130, 1180, 440, "PROTECTIONNISME",
          ["Protection de la production nationale :",
           "• droits de douane ;",
           "• quotas et licences d'importation ;",
           "• normes sanitaires et techniques ;",
           "• subventions aux exportateurs.",
           "",
           "Arguments : protéger les industries",
           "naissantes et l'emploi local."],
          fill=ROSE_C, bord=ROUGE, interligne=27, font=F_SMALL)

    d.rounded_rectangle([60, 480, 600, 690], radius=10, fill=BLEU_C, outline=BLEU, width=3)
    d.text((84, 502), "Limites du libre-échange", font=F_BOLD, fill=BLEU)
    for i, l in enumerate(["• Concurrence brutale pour les", "  productions locales fragiles ;",
                           "• dépendance accrue à l'égard", "  des marchés extérieurs."]):
        d.text((84, 546 + i * 30), l, font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([640, 480, 1180, 690], radius=10, fill=JAUNE_C, outline=ORANGE, width=3)
    d.text((664, 502), "Limites du protectionnisme", font=F_BOLD, fill=ORANGE)
    for i, l in enumerate(["• Prix plus élevés pour les", "  consommateurs ;",
                           "• mesures de rétorsion des", "  partenaires commerciaux."]):
        d.text((664, 546 + i * 30), l, font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t12_u2_libre_echange.png"))
    print("Figure écrite : t12_u2_libre_echange.png")


# ------------------------------------------------------------
# Figure 19 — Les avantages absolus (Smith)
# ------------------------------------------------------------
def fig_absolus():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Les avantages absolus selon Adam Smith")

    y = tableau(d, 80, 130, [300, 240, 240, 240],
                [50, 50, 50, 50],
                ["Pays", "Riz (heures/tonne)", "Tissu (heures/pièce)", "Avantage absolu"],
                [["Madagascar", "10", "20", "riz"],
                 ["Pays voisin", "30", "10", "tissu"]],
                couleur=BLEU)

    d.rounded_rectangle([80, 420, 1160, 530], radius=10, fill=VERT_C, outline=VERT, width=3)
    d.text((104, 442), "Le raisonnement", font=F_BOLD, fill=VERT)
    d.text((104, 482), "Chaque pays produit le bien qu'il fabrique avec le moins d'heures de travail, puis il échange.",
           font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([80, 560, 570, 690], radius=10, fill=BLEU_C, outline=BLEU, width=3)
    d.text((104, 582), "Résultat", font=F_BOLD, fill=BLEU)
    for i, l in enumerate(["Madagascar se spécialise dans le riz,", "le pays voisin dans le tissu : la production",
                           "totale des deux biens augmente."]):
        d.text((104, 622 + i * 28), l, font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([640, 560, 1160, 690], radius=10, fill=ROSE_C, outline=ROUGE, width=3)
    d.text((664, 582), "Limite de la théorie", font=F_BOLD, fill=ROUGE)
    for i, l in enumerate(["Smith n'explique pas le cas d'un pays", "qui serait moins efficace partout : c'est",
                           "l'apport de Ricardo."]):
        d.text((664, 622 + i * 28), l, font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t12_u2_absolus.png"))
    print("Figure écrite : t12_u2_absolus.png")


# ------------------------------------------------------------
# Figure 20 — Les avantages comparatifs (Ricardo)
# ------------------------------------------------------------
def fig_comparatifs():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Les avantages comparatifs selon David Ricardo")

    tableau(d, 80, 130, [340, 250, 250, 300],
            [50, 50, 50, 50],
            ["Pays", "Vanille (h/kg)", "Textile (h/pièce)", "Coût relatif"],
            [["Madagascar", "4", "8", "0,5 pièce par kg"],
             ["Pays partenaire", "6", "6", "1 pièce par kg"]],
            couleur=VERT)

    d.rounded_rectangle([80, 410, 1160, 560], radius=10, fill=VERT_C, outline=VERT, width=3)
    d.text((104, 432), "Le raisonnement", font=F_BOLD, fill=VERT)
    for i, l in enumerate(["Le pays partenaire est plus efficace dans les deux productions : aucun avantage absolu n'existe ici.",
                           "Pourtant l'échange reste avantageux : Madagascar a un avantage comparatif en vanille,",
                           "le partenaire en textile. Chacun se spécialise là où son désavantage est le plus faible."]):
        d.text((104, 474 + i * 30), l, font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([80, 590, 1160, 690], radius=10, fill=BLEU_C, outline=BLEU, width=3)
    d.text((104, 612), "Enseignement", font=F_BOLD, fill=BLEU)
    d.text((104, 652), "Ce n'est pas le coût absolu qui décide de la spécialisation, mais le coût relatif : "
                       "l'échange profite aux deux pays.", font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t12_u2_comparatifs.png"))
    print("Figure écrite : t12_u2_comparatifs.png")


# ------------------------------------------------------------
# Figure 21 — Les dotations factorielles
# ------------------------------------------------------------
def fig_dotation():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Les dotations factorielles : Heckscher et Ohlin")

    boite(d, 60, 130, 600, 400, "PAYS A — ABONDANT EN MAIN-D'ŒUVRE",
          ["Beaucoup de travailleurs,", "peu de capital.",
           "",
           "Conséquence : la main-d'œuvre", "y est relativement moins chère.",
           "",
           "Spécialisation : productions", "intensives en travail :",
           "textile, artisanat, agriculture."],
          fill=BLEU_C, bord=BLEU, interligne=26, font=F_SMALL)

    boite(d, 640, 130, 1180, 400, "PAYS B — ABONDANT EN CAPITAL",
          ["Beaucoup de machines et", "d'infrastructures, main-d'œuvre", "moins nombreuse.",
           "",
           "Conséquence : le capital y est", "relativement moins coûteux.",
           "",
           "Spécialisation : productions", "intensives en capital :",
           "chimie, matériel, transport."],
          fill=JAUNE_C, bord=ORANGE, interligne=26, font=F_SMALL)

    fleche(d, 604, 265, 636, 265, GRIS, 3)

    d.rounded_rectangle([60, 440, 1180, 560], radius=10, fill=VERT_C, outline=VERT, width=3)
    d.text((84, 462), "Le théorème", font=F_BOLD, fill=VERT)
    for i, l in enumerate(["Chaque pays exporte les biens qui utilisent intensivement le facteur dont il est le mieux pourvu.",
                           "L'échange international revient donc à échanger, indirectement, du travail contre du capital."]):
        d.text((84, 502 + i * 30), l, font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([60, 590, 1180, 690], radius=10, fill=VIOLET_C, outline=VIOLET, width=3)
    d.text((84, 612), "Limites", font=F_BOLD, fill=VIOLET)
    d.text((84, 652), "Le modèle suppose des facteurs immobiles entre pays et des techniques identiques : la réalité est plus complexe.",
           font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t12_u2_dotation.png"))
    print("Figure écrite : t12_u2_dotation.png")


# ------------------------------------------------------------
# Figure 22 — Commerce intra-branche et avantages construits
# ------------------------------------------------------------
def fig_intra_branche():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Commerce intra-branche et avantages construits")

    d.rounded_rectangle([60, 130, 1180, 300], radius=10, fill=BLEU_C, outline=BLEU, width=3)
    d.text((84, 152), "LE COMMERCE INTRA-BRANCHE", font=F_BOLD, fill=BLEU)
    for i, l in enumerate(["Un même pays exporte et importe des produits d'une même branche : deux pays échangent",
                           "des voitures, des vêtements ou des denrées alimentaires de gammes différentes.",
                           "Il s'explique par la différenciation des produits, les préférences des consommateurs",
                           "et les économies d'échelle."]):
        d.text((84, 196 + i * 28), l, font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([60, 340, 600, 620], radius=10, fill=VERT_C, outline=VERT, width=3)
    d.text((84, 362), "LES ÉCONOMIES D'ÉCHELLE", font=F_BOLD, fill=VERT)
    for i, l in enumerate(["Produire en grande série abaisse le", "coût unitaire : chaque pays se spécialise",
                           "dans quelques variétés et les échange.",
                           "Le gain vient de la taille du marché,",
                           "non des ressources naturelles."]):
        d.text((84, 404 + i * 28), l, font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([640, 340, 1180, 620], radius=10, fill=JAUNE_C, outline=ORANGE, width=3)
    d.text((664, 362), "LES AVANTAGES CONSTRUITS", font=F_BOLD, fill=ORANGE)
    for i, l in enumerate(["L'avantage ne vient pas du climat ni", "des ressources, mais d'un effort délibéré :",
                           "formation, innovation, qualité, marque,",
                           "respect des normes, organisation des",
                           "filières. Il se construit dans le temps."]):
        d.text((664, 404 + i * 28), l, font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([60, 645, 1180, 690], radius=8, fill=VIOLET_C, outline=VIOLET, width=3)
    d.text((84, 665), "Un pays peut donc acquérir un avantage : la spécialisation n'est pas seulement un héritage.",
           font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t12_u2_intra_branche.png"))
    print("Figure écrite : t12_u2_intra_branche.png")


# ------------------------------------------------------------
# Figure 23 — L'OMC et la coopération internationale
# ------------------------------------------------------------
def fig_omc():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "L'Organisation mondiale du commerce et la coopération internationale")

    d.rounded_rectangle([470, 130, 770, 240], radius=12, fill=BLEU_C, outline=BLEU, width=4)
    texte_centre(d, (470, 130, 770, 240), "L'OMC", F_TITLE, BLEU)

    principes = [("NON-DISCRIMINATION", "Clause de la nation la plus favorisée et traitement national : un avantage accordé à l'un l'est à tous.", 60, 300, BLEU, BLEU_C),
                 ("RÉCIPROCITÉ", "Les concessions commerciales sont négociées et équilibrées entre partenaires.", 780, 300, VERT, VERT_C),
                 ("TRANSPARENCE", "Les règles sont publiées et les pratiques commerciales notifiées.", 60, 460, ORANGE, JAUNE_C),
                 ("RÈGLEMENT DES DIFFÉRENDS", "Un mécanisme arbital tranche les litiges entre États membres.", 780, 460, VIOLET, VIOLET_C)]
    for t, s, a, b, bord, fond in principes:
        d.rounded_rectangle([a, b, a + 400, b + 160], radius=10, fill=fond, outline=bord, width=3)
        for i, l in enumerate(wrap(d, t, F_BOLD, 360)):
            texte_centre(d, (a, b + 12 + i * 28, a + 400, b + 40 + i * 28), l, F_BOLD, bord)
        for i, l in enumerate(wrap(d, s, F_MINI, 360)):
            texte_centre(d, (a, b + 78 + i * 22, a + 400, b + 100 + i * 22), l, F_MINI, NOIR)
        d.line([a + 200, b + 80, 620, 180], fill=(200, 200, 200), width=2)

    d.rounded_rectangle([60, 645, 1180, 690], radius=8, fill=BLEU_C, outline=BLEU, width=3)
    d.text((84, 665), "Objectif : un commerce prévisible et ouvert, qui profite au plus grand nombre.",
           font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t12_u2_omc.png"))
    print("Figure écrite : t12_u2_omc.png")


# ------------------------------------------------------------
# Figure 24 — Localisation et délocalisation des firmes multinationales
# ------------------------------------------------------------
def fig_fmn():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Les stratégies de localisation des firmes multinationales")

    d.rounded_rectangle([60, 130, 580, 400], radius=10, fill=BLEU_C, outline=BLEU, width=3)
    d.text((84, 152), "POURQUOI SE LOCALISER AILLEURS", font=F_BOLD, fill=BLEU)
    for i, l in enumerate(["• Recherche de coûts de production", "  plus faibles ;",
                           "• accès à des ressources ou à des", "  matières premières ;",
                           "• proximité d'un marché de", "  consommateurs ;",
                           "• qualité des infrastructures et", "  stabilité des règles."]):
        d.text((84, 194 + i * 28), l, font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([660, 130, 1180, 400], radius=10, fill=JAUNE_C, outline=ORANGE, width=3)
    d.text((684, 152), "LES EFFETS DANS LE PAYS D'ACCUEIL", font=F_BOLD, fill=ORANGE)
    for i, l in enumerate(["• Créations d'emplois et", "  investissements ;",
                           "• transferts de technologie et", "  de savoir-faire ;",
                           "• accès aux réseaux commerciaux", "  internationaux ;",
                           "• risques : concurrence aux", "  entreprises locales, rapatriement",
                           "  des bénéfices."]):
        d.text((684, 194 + i * 28), l, font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([60, 440, 580, 660], radius=10, fill=VERT_C, outline=VERT, width=3)
    d.text((84, 462), "DANS LE PAYS D'ORIGINE", font=F_BOLD, fill=VERT)
    for i, l in enumerate(["• Perte d'emplois peu qualifiés ;",
                           "• spécialisation dans les activités",
                           "  à plus forte valeur ajoutée ;",
                           "• baisse des prix pour les",
                           "  consommateurs."]):
        d.text((84, 502 + i * 28), l, font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([660, 440, 1180, 660], radius=10, fill=ROSE_C, outline=ROUGE, width=3)
    d.text((684, 462), "LES FORMES DE PRÉSENCE", font=F_BOLD, fill=ROUGE)
    for i, l in enumerate(["• Filiale de production ;",
                           "• sous-traitance auprès d'entreprises",
                           "  locales ;",
                           "• coentreprise avec un partenaire",
                           "  national."]):
        d.text((684, 502 + i * 28), l, font=F_SMALL, fill=NOIR)

    img.save(os.path.join(OUT, "t12_u2_fmn.png"))
    print("Figure écrite : t12_u2_fmn.png")


# ------------------------------------------------------------
# Figure 25 — IDE et investissements de portefeuille
# ------------------------------------------------------------
def fig_ide():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Les flux internationaux de capitaux : IDE et investissements de portefeuille")

    boite(d, 60, 130, 600, 470, "INVESTISSEMENT DIRECT À L'ÉTRANGER",
          ["Une entreprise crée ou rachète",
           "une unité de production dans un",
           "autre pays, et en garde le contrôle.",
           "",
           "• Horizon long ;",
           "• apporte capitaux, techniques",
           "  et compétences ;",
           "• difficile à retirer rapidement.",
           "",
           "Exemple : une usine de",
           "transformation construite et",
           "dirigée depuis l'étranger."],
          fill=BLEU_C, bord=BLEU, interligne=26, font=F_SMALL)

    boite(d, 640, 130, 1180, 470, "INVESTISSEMENT DE PORTEFEUILLE",
          ["Un investisseur achète des titres",
           "(actions, obligations) étrangers",
           "sans diriger l'entreprise.",
           "",
           "• Horizon court ;",
           "• recherche un rendement",
           "  financier immédiat ;",
           "• retraits possibles en quelques",
           "  jours, d'où un risque de",
           "  volatilité.",
           "",
           "Exemple : achat d'actions cotées",
           "sur une place étrangère."],
          fill=JAUNE_C, bord=ORANGE, interligne=26, font=F_SMALL)

    d.rounded_rectangle([60, 510, 1180, 640], radius=10, fill=VERT_C, outline=VERT, width=3)
    d.text((84, 532), "Différence essentielle", font=F_BOLD, fill=VERT)
    for i, l in enumerate(["L'IDE engage une relation durable et transfère des capacités de production ; "
                           "l'investissement de portefeuille",
                           "ne recherche qu'un rendement financier et peut se retirer très vite, ce qui le rend instable."]):
        d.text((84, 574 + i * 30), l, font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([60, 660, 1180, 690], radius=8, fill=BLEU_C, outline=BLEU, width=3)
    d.text((84, 677), "Les deux flux sont complémentaires : l'un construit, l'autre finance.", font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t12_u2_ide.png"))
    print("Figure écrite : t12_u2_ide.png")


# ------------------------------------------------------------
# Figure 26 — Le taux de change
# ------------------------------------------------------------
def fig_change():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Le taux de change et le marché des changes")

    d.rounded_rectangle([60, 130, 1180, 260], radius=10, fill=BLEU_C, outline=BLEU, width=3)
    d.text((84, 152), "DÉFINITION", font=F_BOLD, fill=BLEU)
    d.text((84, 194), "Le taux de change est le prix d'une monnaie exprimé dans une autre : il indique "
                      "combien d'unités de monnaie", font=F_SMALL, fill=NOIR)
    d.text((84, 224), "nationale il faut donner pour obtenir une unité de monnaie étrangère.", font=F_SMALL, fill=NOIR)

    boite(d, 60, 300, 600, 570, "LA MONNAIE S'APPRÉCIE",
          ["Il faut moins de monnaie", "nationale pour la même devise.",
           "",
           "Effets :",
           "• les importations coûtent", "  moins cher ;",
           "• les exportations deviennent",
           "  plus chères pour l'acheteur",
           "  étranger."],
          fill=VERT_C, bord=VERT, interligne=26, font=F_SMALL)

    boite(d, 640, 300, 1180, 570, "LA MONNAIE SE DÉPRÉCIE",
          ["Il faut davantage de monnaie", "nationale pour la même devise.",
           "",
           "Effets :",
           "• les exportations deviennent",
           "  plus compétitives ;",
           "• les importations renchérissent,",
           "  ce qui pousse l'inflation."],
          fill=ROSE_C, bord=ROUGE, interligne=26, font=F_SMALL)

    d.rounded_rectangle([60, 600, 1180, 690], radius=10, fill=JAUNE_C, outline=ORANGE, width=3)
    d.text((84, 622), "Vocabulaire", font=F_BOLD, fill=ORANGE)
    d.text((84, 658), "Dans un régime de changes fixes, on parle de dévaluation ou de réévaluation ; "
                      "en changes flottants, de dépréciation ou d'appréciation.", font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t12_u2_change.png"))
    print("Figure écrite : t12_u2_change.png")


# ------------------------------------------------------------
# Figure 28 — Les crises financières
# ------------------------------------------------------------
def fig_crises():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Les trois formes de crises financières")

    crises = [("CRISE BOURSIÈRE", "Effondrement des cours", "Krach des actions, perte de valeur",
               "des portefeuilles, faillites en chaîne.", 60, 130, BLEU, BLEU_C),
              ("CRISE BANCAIRE", "Défaillance des banques", "Retraits massifs, créances irrécouvrables,",
               "assèchement du crédit à l'économie.", 440, 130, ORANGE, JAUNE_C),
              ("CRISE DE TAUX DE CHANGE", "Attaque contre la monnaie", "Dépréciation brutale, fuite des capitaux,",
               "renchérissement de la dette en devises.", 820, 130, ROUGE, ROSE_C)]
    for t, st, l1, l2, a, b, bord, fond in crises:
        d.rounded_rectangle([a, b, a + 360, b + 250], radius=10, fill=fond, outline=bord, width=3)
        d.rectangle([a, b, a + 360, b + 44], fill=bord)
        texte_centre(d, (a, b, a + 360, b + 44), t, F_BOLD, BLANC)
        d.text((a + 18, b + 56), st, font=F_SMALL, fill=bord)
        d.text((a + 18, b + 110), l1, font=F_MINI, fill=NOIR)
        d.text((a + 18, b + 140), l2, font=F_MINI, fill=NOIR)

    d.rounded_rectangle([60, 420, 1180, 560], radius=10, fill=VIOLET_C, outline=VIOLET, width=3)
    d.text((84, 442), "Le mécanisme de contagion", font=F_BOLD, fill=VIOLET)
    for i, l in enumerate(["• La défiance d'un marché gagne les autres : les capitaux se retirent en masse ;",
                           "• les banques, privées de liquidités, cessent de prêter : l'économie réelle est touchée ;",
                           "• le commerce international se contracte, et la crise devient mondiale."]):
        d.text((84, 484 + i * 28), l, font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([60, 590, 1180, 690], radius=10, fill=BLEU_C, outline=BLEU, width=3)
    d.text((84, 612), "Rôle de la banque centrale", font=F_BOLD, fill=BLEU)
    d.text((84, 652), "Prêteur en dernier ressort, elle fournit des liquidités et surveille la solidité des "
                      "établissements pour éviter la panique.", font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t12_u2_crises.png"))
    print("Figure écrite : t12_u2_crises.png")


# ------------------------------------------------------------
# Figure 29 — L'endettement extérieur
# ------------------------------------------------------------
def fig_dette():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "L'endettement extérieur et son service")

    d.rounded_rectangle([460, 130, 780, 240], radius=12, fill=ROSE_C, outline=ROUGE, width=4)
    texte_centre(d, (460, 130, 780, 240), "DETTE EXTÉRIEURE", F_TITLE, ROUGE)

    boite(d, 60, 280, 600, 500, "LE SERVICE DE LA DETTE",
          ["Somme que le pays doit verser",
           "chaque année :",
           "• remboursement du capital ;",
           "• paiement des intérêts.",
           "",
           "Un service élevé absorbe une",
           "part du budget et réduit les",
           "moyens consacrés à la santé,",
           "à l'école et aux routes."],
          fill=JAUNE_C, bord=ORANGE, interligne=26, font=F_SMALL)

    boite(d, 640, 280, 1180, 500, "EFFETS SUR L'ÉCONOMIE",
          ["Positifs, si l'emprunt finance",
           "des investissements rentables :",
           "• routes, écoles, centrales ;",
           "• équipements productifs.",
           "",
           "Négatifs, s'il finance des",
           "dépenses courantes :",
           "• remboursement impossible ;",
           "• dépendance à l'égard des",
           "  créanciers."],
          fill=BLEU_C, bord=BLEU, interligne=26, font=F_SMALL)

    fleche(d, 604, 300, 636, 300, GRIS, 3)

    d.rounded_rectangle([60, 540, 1180, 690], radius=10, fill=VERT_C, outline=VERT, width=3)
    d.text((84, 562), "Soutenabilité", font=F_BOLD, fill=VERT)
    for i, l in enumerate(["La dette est soutenable lorsque sa croissance reste inférieure à celle des capacités "
                           "de remboursement du pays.",
                           "Le surendettement se traite par le rééchelonnement, la réduction de la dette ou "
                           "l'allongement des délais."]):
        d.text((84, 606 + i * 30), l, font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "t12_u2_dette.png"))
    print("Figure écrite : t12_u2_dette.png")

if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    fig_pib()
    fig_calcul_pib()
    fig_limites_pib()
    fig_sources()
    fig_pgf()
    fig_extensive()
    fig_endogene()
    fig_idh()
    fig_causes()
    fig_cercle()
    fig_politiques()
    fig_soutenabilite()
    fig_environnement()
    fig_structure()
    fig_echanges_croissance()
    fig_libre_echange()
    fig_absolus()
    fig_comparatifs()
    fig_dotation()
    fig_intra_branche()
    fig_omc()
    fig_fmn()
    fig_ide()
    fig_change()
    fig_crises()
    fig_dette()
