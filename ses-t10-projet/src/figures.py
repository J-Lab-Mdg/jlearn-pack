#!/usr/bin/env python3
# ============================================================
# figures.py — figures géométriques du manuel SES T10 (style scolaire)
# Générées en Pillow (PNG) : cadres nets, aplats clairs, texte lisible.
# ============================================================
import os
from PIL import Image, ImageDraw, ImageFont

OUT = os.path.join(os.path.dirname(__file__), "..", "output", "images")
FONT_DIR = "/usr/share/fonts/truetype/dejavu"

F_REG = ImageFont.truetype(os.path.join(FONT_DIR, "DejaVuSans.ttf"), 26)
F_BOLD = ImageFont.truetype(os.path.join(FONT_DIR, "DejaVuSans-Bold.ttf"), 28)
F_SMALL = ImageFont.truetype(os.path.join(FONT_DIR, "DejaVuSans.ttf"), 22)
F_TITLE = ImageFont.truetype(os.path.join(FONT_DIR, "DejaVuSans-Bold.ttf"), 32)

BLANC = (255, 255, 255)
NOIR = (0, 0, 0)
BLEU = (31, 78, 121)
BLEU_C = (217, 226, 243)
VERT = (30, 123, 52)
VERT_C = (222, 240, 226)
GRIS = (90, 90, 90)
JAUNE_C = (255, 248, 220)


def texte_centre(d, box, txt, font, fill=NOIR):
    x0, y0, x1, y1 = box
    bb = d.textbbox((0, 0), txt, font=font)
    w, h = bb[2] - bb[0], bb[3] - bb[1]
    d.text((x0 + (x1 - x0 - w) / 2 - bb[0], y0 + (y1 - y0 - h) / 2 - bb[1]), txt, font=font, fill=fill)


def wrap(d, txt, font, largeur):
    """Découpe un texte en lignes qui tiennent dans `largeur` pixels."""
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


def boite(d, x0, y0, x1, y1, titre, lignes, fill=BLEU_C, bord=BLEU, titre_font=F_BOLD):
    d.rounded_rectangle([x0, y0, x1, y1], radius=10, fill=fill, outline=bord, width=3)
    d.rectangle([x0, y0, x1, y0 + 46], fill=bord)
    texte_centre(d, (x0, y0, x1, y0 + 46), titre, titre_font, BLANC)
    y = y0 + 62
    for l in lignes:
        d.text((x0 + 16, y), l, font=F_SMALL, fill=NOIR)
        y += 28


def fleche(d, x0, y0, x1, y1, couleur=NOIR):
    d.line([x0, y0, x1, y1], fill=couleur, width=4)
    import math
    ang = math.atan2(y1 - y0, x1 - x0)
    L = 14
    a = math.pi / 7
    d.polygon([(x1, y1),
               (x1 - L * math.cos(ang - a), y1 - L * math.sin(ang - a)),
               (x1 - L * math.cos(ang + a), y1 - L * math.sin(ang + a))], fill=couleur)


# ------------------------------------------------------------
# Figure 2 — Les séries du lycée et leurs débouchés
# ------------------------------------------------------------
def fig_series():
    W, H = 1240, 900
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    d.rectangle([0, 0, W - 1, H - 1], outline=GRIS, width=2)
    texte_centre(d, (0, 20, W, 70), "Les séries du lycée et les débouchés", F_TITLE, BLEU)

    # Boîte de départ
    boite(d, 500, 96, 740, 168, "T10", [], fill=JAUNE_C, bord=BLEU)
    fleche(d, 620, 168, 620, 216)

    # Trois séries
    series = [
        ("Série L", ["Langues, littérature,", "philosophie,", "histoire-géographie"], VERT_C, VERT),
        ("Série S", ["Mathématiques,", "sciences physiques,", "SVT"], BLEU_C, BLEU),
        ("Série OSE", ["SES, droit,", "gestion,", "comptabilité"], JAUNE_C, (180, 130, 20)),
    ]
    xs = [(60, 380), (450, 770), (840, 1180)]
    for (nom, lignes, fc, bc), (xa, xb) in zip(series, xs):
        boite(d, xa, 220, xb, 400, nom, lignes, fill=fc, bord=bc)
        fleche(d, (xa + xb) / 2, 400, (xa + xb) / 2, 452)

    # Débouchés
    debouches = [
        ["Enseignement", "Droit", "Journalisme", "Communication", "Traduction", "Culture"],
        ["Médecine", "Ingénierie", "Agronomie", "Informatique", "Géologie", "Recherche"],
        ["Gestion", "Comptabilité", "Banque", "Commerce", "Administration", "Entrepreneuriat"],
    ]
    for (nom, lignes, fc, bc), (xa, xb), items in zip(series, xs, debouches):
        d.rounded_rectangle([xa, 456, xb, 700], radius=10, fill=BLANC, outline=bc, width=3)
        d.text((xa + 16, 470), "Études et carrières", font=F_BOLD, fill=bc)
        y = 512
        for it in items:
            d.ellipse([xa + 20, y + 8, xa + 30, y + 18], fill=bc)
            d.text((xa + 42, y), it, font=F_SMALL, fill=NOIR)
            y += 30

    # Ligne de rappel
    d.rounded_rectangle([60, 740, 1180, 840], radius=10, fill=BLEU_C, outline=BLEU, width=2)
    d.text((80, 762), "Le choix se fait à la fin de la T10, à partir de ses résultats, de ses goûts et de son projet.",
           font=F_SMALL, fill=NOIR)
    d.text((80, 798), "Des passerelles et des réorientations restent possibles après le baccalauréat.",
           font=F_SMALL, fill=NOIR)

    img.save(os.path.join(OUT, "u1_series.png"))
    print("Figure écrite : u1_series.png")


# ------------------------------------------------------------
# Figure 3 — Les quatre étapes d'un projet d'orientation
# ------------------------------------------------------------
def fig_projet():
    W, H = 1240, 780
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    d.rectangle([0, 0, W - 1, H - 1], outline=GRIS, width=2)
    texte_centre(d, (0, 20, W, 70), "Construire son projet d'orientation", F_TITLE, BLEU)

    etapes = [
        ("1. Se connaître", ["Ses intérêts", "Ses capacités", "Ses qualités"], VERT_C, VERT),
        ("2. S'informer", ["Les séries", "Les métiers", "Les formations"], BLEU_C, BLEU),
        ("3. Décider", ["Comparer", "Choisir sa série", "Écrire son choix"], JAUNE_C, (180, 130, 20)),
        ("4. S'engager", ["Travail régulier", "Participation", "Ajustements"], (240, 230, 245), (110, 70, 140)),
    ]
    xa = 40
    largeur = 280
    ecart = 12
    y0, y1 = 130, 420
    for i, (titre, lignes, fc, bc) in enumerate(etapes):
        x0 = xa + i * (largeur + ecart)
        boite(d, x0, y0, x0 + largeur, y1, titre, lignes, fill=fc, bord=bc)
        if i < len(etapes) - 1:
            fleche(d, x0 + largeur + 2, (y0 + y1) / 2, x0 + largeur + ecart - 2, (y0 + y1) / 2)

    # Bloc : les besoins de l'économie
    d.rounded_rectangle([40, 470, 1200, 610], radius=10, fill=BLEU_C, outline=BLEU, width=3)
    d.text((60, 490), "À chaque étape, garder un repère : les besoins de l'économie et de la société",
           font=F_BOLD, fill=BLEU)
    secteurs = "Agriculture et élevage  ·  Santé  ·  Enseignement  ·  Bâtiment et énergie  ·  Numérique  ·  Tourisme et artisanat"
    y = 536
    for l in wrap(d, secteurs, F_SMALL, 1100):
        d.text((60, y), l, font=F_SMALL, fill=NOIR)
        y += 28

    d.rounded_rectangle([40, 636, 1200, 736], radius=10, fill=VERT_C, outline=VERT, width=3)
    y = 662
    for l in wrap(d, "Un projet n'est pas figé : il se précise et se corrige chaque année, "
                     "à condition de travailler avec constance.", F_SMALL, 1100):
        d.text((60, y), l, font=F_SMALL, fill=NOIR)
        y += 28

    img.save(os.path.join(OUT, "u1_projet.png"))
    print("Figure écrite : u1_projet.png")


if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    fig_series()
    fig_projet()
