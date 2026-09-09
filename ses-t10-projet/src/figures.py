#!/usr/bin/env python3
# ============================================================
# figures.py — figures géométriques du manuel SES T10 (style scolaire)
# Générées en Pillow (PNG) : cadres nets, aplats clairs, texte lisible.
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


def fleche(d, x0, y0, x1, y1, couleur=NOIR):
    d.line([x0, y0, x1, y1], fill=couleur, width=4)
    ang = math.atan2(y1 - y0, x1 - x0)
    L = 14
    a = math.pi / 7
    d.polygon([(x1, y1),
               (x1 - L * math.cos(ang - a), y1 - L * math.sin(ang - a)),
               (x1 - L * math.cos(ang + a), y1 - L * math.sin(ang + a))], fill=couleur)


def fleche_label(d, x0, y0, x1, y1, label, couleur=NOIR):
    fleche(d, x0, y0, x1, y1, couleur)
    mx, my = (x0 + x1) / 2, (y0 + y1) / 2
    bb = d.textbbox((0, 0), label, font=F_MINI)
    w, h = bb[2] - bb[0], bb[3] - bb[1]
    d.rectangle([mx - w / 2 - 8, my - h / 2 - 6, mx + w / 2 + 8, my + h / 2 + 6], fill=BLANC)
    d.text((mx - w / 2 - bb[0], my - h / 2 - bb[1]), label, font=F_MINI, fill=couleur)


def cadre(d, W, H, titre):
    d.rectangle([0, 0, W - 1, H - 1], outline=GRIS, width=2)
    texte_centre(d, (0, 20, W, 70), titre, F_TITLE, BLEU)


# ------------------------------------------------------------
# Figure 2 — Les séries du lycée et leurs débouchés
# ------------------------------------------------------------
def fig_series():
    W, H = 1240, 900
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Les séries du lycée et les débouchés")

    boite(d, 500, 96, 740, 168, "T10", [], fill=JAUNE_C, bord=BLEU)
    fleche(d, 620, 168, 620, 216)

    series = [
        ("Série L", ["Langues, littérature,", "philosophie,", "histoire-géographie"], VERT_C, VERT),
        ("Série S", ["Mathématiques,", "sciences physiques,", "SVT"], BLEU_C, BLEU),
        ("Série OSE", ["SES, droit,", "gestion,", "comptabilité"], JAUNE_C, ORANGE),
    ]
    xs = [(60, 380), (450, 770), (840, 1180)]
    for (nom, lignes, fc, bc), (xa, xb) in zip(series, xs):
        boite(d, xa, 220, xb, 400, nom, lignes, fill=fc, bord=bc)
        fleche(d, (xa + xb) / 2, 400, (xa + xb) / 2, 452)

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

    d.rounded_rectangle([60, 740, 1180, 840], radius=10, fill=BLEU_C, outline=BLEU, width=2)
    for i, l in enumerate(wrap(d, "Le choix se fait à la fin de la T10, à partir de ses résultats, "
                                  "de ses goûts et de son projet. Des passerelles et des "
                                  "réorientations restent possibles après le baccalauréat.", F_SMALL, 1080)):
        d.text((80, 762 + i * 28), l, font=F_SMALL, fill=NOIR)

    img.save(os.path.join(OUT, "u1_series.png"))
    print("Figure écrite : u1_series.png")


# ------------------------------------------------------------
# Figure 3 — Les quatre étapes d'un projet d'orientation
# ------------------------------------------------------------
def fig_projet():
    W, H = 1240, 780
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Construire son projet d'orientation")

    etapes = [
        ("1. Se connaître", ["Ses intérêts", "Ses capacités", "Ses qualités"], VERT_C, VERT),
        ("2. S'informer", ["Les séries", "Les métiers", "Les formations"], BLEU_C, BLEU),
        ("3. Décider", ["Comparer", "Choisir sa série", "Écrire son choix"], JAUNE_C, ORANGE),
        ("4. S'engager", ["Travail régulier", "Participation", "Ajustements"], VIOLET_C, VIOLET),
    ]
    xa, largeur, ecart = 40, 280, 12
    y0, y1 = 130, 420
    for i, (titre, lignes, fc, bc) in enumerate(etapes):
        x0 = xa + i * (largeur + ecart)
        boite(d, x0, y0, x0 + largeur, y1, titre, lignes, fill=fc, bord=bc)
        if i < len(etapes) - 1:
            fleche(d, x0 + largeur + 2, (y0 + y1) / 2, x0 + largeur + ecart - 2, (y0 + y1) / 2)

    d.rounded_rectangle([40, 470, 1200, 610], radius=10, fill=BLEU_C, outline=BLEU, width=3)
    d.text((60, 490), "À chaque étape, garder un repère : les besoins de l'économie et de la société",
           font=F_BOLD, fill=BLEU)
    y = 536
    for l in wrap(d, "Agriculture et élevage  ·  Santé  ·  Enseignement  ·  Bâtiment et énergie  ·  "
                     "Numérique  ·  Tourisme et artisanat", F_SMALL, 1080):
        d.text((60, y), l, font=F_SMALL, fill=NOIR)
        y += 28

    d.rounded_rectangle([40, 636, 1200, 736], radius=10, fill=VERT_C, outline=VERT, width=3)
    y = 662
    for l in wrap(d, "Un projet n'est pas figé : il se précise et se corrige chaque année, "
                     "à condition de travailler avec constance.", F_SMALL, 1080):
        d.text((60, y), l, font=F_SMALL, fill=NOIR)
        y += 28

    img.save(os.path.join(OUT, "u1_projet.png"))
    print("Figure écrite : u1_projet.png")


# ------------------------------------------------------------
# Figure 4 — Le circuit économique
# ------------------------------------------------------------
def fig_circuit():
    W, H = 1240, 760
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Le circuit économique")

    boite(d, 90, 140, 420, 340, "MÉNAGES",
          ["Offrent leur travail", "Reçoivent des revenus", "Consomment", "Paient des impôts"],
          fill=JAUNE_C, bord=ORANGE)
    boite(d, 830, 140, 1160, 340, "ENTREPRISES",
          ["Emploient du travail", "Produisent", "Versent des salaires", "Vendent leur production"],
          fill=BLEU_C, bord=BLEU)
    boite(d, 460, 500, 790, 700, "ADMINISTRATIONS",
          ["Rendent les services publics", "Prélèvent l'impôt", "Redistribuent"],
          fill=VERT_C, bord=VERT)

    fleche_label(d, 420, 210, 830, 210, "Travail")
    fleche_label(d, 830, 280, 420, 280, "Salaires et revenus")
    fleche_label(d, 300, 340, 480, 500, "Impôts et cotisations")
    fleche_label(d, 790, 600, 420, 340, "Services publics, prestations")
    fleche_label(d, 1010, 340, 830, 500, "Impôts, marchés publics")

    d.rounded_rectangle([60, 700, 420, 745], radius=8, fill=BLANC, outline=GRIS, width=2)
    d.text((80, 714), "La dépense de l'un est le revenu de l'autre.", font=F_MINI, fill=NOIR)

    img.save(os.path.join(OUT, "u2_circuit.png"))
    print("Figure écrite : u2_circuit.png")


# ------------------------------------------------------------
# Figure 6 — Les facteurs de production et leur combinaison
# ------------------------------------------------------------
def fig_facteurs():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Les facteurs de production et leur combinaison")

    boite(d, 60, 150, 380, 400, "TRAVAIL",
          ["L'activité humaine :", "savoir-faire, effort", "physique ou intellectuel"],
          fill=VERT_C, bord=VERT)
    boite(d, 60, 440, 380, 660, "CAPITAL ET RESSOURCES",
          ["Machines, outils,", "bâtiments, argent,", "terre et matières", "premières"],
          fill=JAUNE_C, bord=ORANGE)

    fleche(d, 380, 275, 520, 300)
    fleche(d, 380, 550, 520, 400)

    boite(d, 520, 260, 800, 440, "COMBINAISON PRODUCTIVE",
          ["L'entreprise associe", "ses facteurs pour", "produire"],
          fill=BLEU_C, bord=BLEU)
    fleche(d, 800, 350, 940, 350)

    boite(d, 940, 260, 1180, 440, "PRODUCTION",
          ["Biens et services", "destinés à la vente", "ou au service public"],
          fill=VIOLET_C, bord=VIOLET)

    d.rounded_rectangle([520, 480, 800, 570], radius=8, fill=BLANC, outline=BLEU, width=2)
    d.text((540, 496), "Substituabilité : un facteur peut en remplacer un autre.", font=F_MINI, fill=NOIR)
    d.text((540, 524), "Complémentarité : aucun facteur ne produit seul.", font=F_MINI, fill=NOIR)

    img.save(os.path.join(OUT, "u3_facteurs.png"))
    print("Figure écrite : u3_facteurs.png")


# ------------------------------------------------------------
# Figure 7 — La pyramide des besoins de Maslow
# ------------------------------------------------------------
def fig_maslow():
    W, H = 1240, 800
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "La pyramide des besoins de Maslow")

    niveaux = [
        ("ACCOMPLISSEMENT", "Réaliser ses projets, créer", ROSE_C, (190, 60, 100)),
        ("ESTIME", "Être reconnu, respecté", VIOLET_C, VIOLET),
        ("APPARTENANCE", "Famille, amis, groupe", BLEU_C, BLEU),
        ("SÉCURITÉ", "Logement sûr, revenu stable", VERT_C, VERT),
        ("BESOINS PHYSIOLOGIQUES", "Se nourrir, boire, dormir, se soigner", JAUNE_C, ORANGE),
    ]
    center = 620
    y_bottom = 720
    h = 108
    half_bottom = 420
    half_top = 90
    for i, (titre, sous, fc, bc) in enumerate(niveaux):
        yb = y_bottom - i * h
        yt = yb - h
        hb = half_bottom - (half_bottom - half_top) * (i / len(niveaux))
        ht = half_bottom - (half_bottom - half_top) * ((i + 1) / len(niveaux))
        d.polygon([(center - hb, yb), (center + hb, yb), (center + ht, yt), (center - ht, yt)],
                  fill=fc, outline=bc)
        d.line([(center - hb, yb), (center + hb, yb), (center + ht, yt), (center - ht, yt)],
               fill=bc, width=3)
        texte_centre(d, (center - ht, yt, center + ht, yb), titre, F_BOLD, bc)
        d.text((center + ht + 30, (yt + yb) / 2 - 12), sous, font=F_SMALL, fill=NOIR)

    d.text((60, 745), "On satisfait d'abord la base avant de chercher les niveaux supérieurs.",
           font=F_SMALL, fill=NOIR)

    img.save(os.path.join(OUT, "u4_maslow.png"))
    print("Figure écrite : u4_maslow.png")


# ------------------------------------------------------------
# Figure 8 — Le prix d'équilibre
# ------------------------------------------------------------
def fig_equilibre():
    W, H = 1240, 800
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "L'offre, la demande et le prix d'équilibre")

    x0, y0, x1, y1 = 180, 660, 1120, 140
    d.line([x0, y0, x1, y0], fill=NOIR, width=3)      # axe des quantités
    d.line([x0, y0, x0, y1], fill=NOIR, width=3)      # axe des prix
    d.text((x1 - 90, y0 + 14), "Quantités", font=F_SMALL, fill=NOIR)
    d.text((30, y1 - 10), "Prix", font=F_SMALL, fill=NOIR)

    # Droites : demande descendante, offre ascendante
    dx0, dy0, dx1, dy1 = x0 + 40, y1 + 40, x1 - 40, y0 - 60
    d.line([dx0, dy0, dx1, dy1], fill=BLEU, width=5)
    d.text((dx1 - 90, dy1 - 10), "Demande (D)", font=F_SMALL, fill=BLEU)
    d.line([dx0, dy1, dx1, dy0], fill=VERT, width=5)
    d.text((dx1 - 70, dy0 + 10), "Offre (O)", font=F_SMALL, fill=VERT)

    # Intersection
    mx, my = (dx0 + dx1) / 2, (dy0 + dy1) / 2
    d.ellipse([mx - 9, my - 9, mx + 9, my + 9], fill=(200, 30, 60))
    for lx in range(int(x0), int(mx), 12):
        d.line([lx, my, lx + 6, my], fill=(200, 30, 60), width=2)
    for ly in range(int(my), int(y0), 12):
        d.line([mx, ly, mx, ly + 6], fill=(200, 30, 60), width=2)
    d.text((x0 - 8, my - 30), "Prix", font=F_SMALL, fill=(200, 30, 60))
    d.text((x0 - 8, my - 8), "d'équilibre", font=F_SMALL, fill=(200, 30, 60))
    d.text((mx + 12, y0 + 16), "Quantité d'équilibre", font=F_SMALL, fill=(200, 30, 60))

    d.rounded_rectangle([60, 700, 1180, 780], radius=8, fill=BLEU_C, outline=BLEU, width=2)
    for i, l in enumerate(wrap(d, "Au prix d'équilibre, la quantité offerte est égale à la quantité "
                                  "demandée : il n'y a ni pénurie ni surplus. Le prix se déplace dès "
                                  "que l'offre ou la demande change.", F_SMALL, 1060)):
        d.text((80, 716 + i * 28), l, font=F_SMALL, fill=NOIR)

    img.save(os.path.join(OUT, "u5_equilibre.png"))
    print("Figure écrite : u5_equilibre.png")


# ------------------------------------------------------------
# Figure 10 — La socialisation
# ------------------------------------------------------------
def fig_socialisation():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "La socialisation : de l'individu à l'acteur social")

    boite(d, 60, 200, 340, 400, "INDIVIDU",
          ["À la naissance,", "il ne connaît ni", "la langue ni les", "règles du groupe"],
          fill=JAUNE_C, bord=ORANGE)
    fleche(d, 340, 300, 470, 300)

    boite(d, 470, 180, 800, 420, "SOCIALISATION",
          ["Transmission des", "normes et des", "valeurs par les", "agents sociaux"],
          fill=BLEU_C, bord=BLEU)
    fleche(d, 800, 300, 930, 300)

    boite(d, 930, 200, 1180, 400, "ACTEUR SOCIAL",
          ["Il comprend les", "attentes du groupe", "et peut agir", "avec les autres"],
          fill=VERT_C, bord=VERT)

    d.rounded_rectangle([60, 470, 1180, 660], radius=10, fill=BLANC, outline=GRIS, width=3)
    d.text((80, 490), "Ce qui est transmis", font=F_BOLD, fill=NOIR)
    d.text((420, 490), "Normes : règles de conduite", font=F_SMALL, fill=NOIR)
    d.text((420, 522), "saluer, arriver à l'heure, respecter le tour de parole", font=F_MINI, fill=NOIR)
    d.text((420, 566), "Valeurs : ce que le groupe juge important", font=F_SMALL, fill=NOIR)
    d.text((420, 598), "respect des aînés, solidarité, effort, vérité", font=F_MINI, fill=NOIR)
    d.line([400, 486, 400, 630], fill=GRIS, width=2)

    img.save(os.path.join(OUT, "u6_socialisation.png"))
    print("Figure écrite : u6_socialisation.png")


# ------------------------------------------------------------
# Figure 12 — Les éléments constitutifs de l'État
# ------------------------------------------------------------
def fig_etat():
    W, H = 1240, 760
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Les éléments constitutifs de l'État")

    boite(d, 500, 330, 740, 430, "ÉTAT", ["Pouvoir politique", "institutionnalisé"],
          fill=BLEU_C, bord=BLEU, interligne=26)

    satellites = [
        (80, 140, 380, 300, "POPULATION", ["Les habitants", "permanents"], VERT_C, VERT),
        (860, 140, 1160, 300, "TERRITOIRE", ["Sol, eaux, mer", "et espace aérien"], JAUNE_C, ORANGE),
        (80, 460, 380, 620, "GOUVERNEMENT", ["Institutions et", "administration"], VIOLET_C, VIOLET),
        (860, 460, 1160, 620, "SOUVERAINETÉ", ["Pouvoir suprême", "de décider"], ROSE_C, (190, 60, 100)),
    ]
    for (x0, y0, x1, y1, titre, lignes, fc, bc) in satellites:
        boite(d, x0, y0, x1, y1, titre, lignes, fill=fc, bord=bc)
        cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
        fleche(d, cx + (60 if cx < 620 else -60), cy, cx + (170 if cx < 620 else -170),
               cy + (10 if cy < 380 else -10))

    d.rounded_rectangle([420, 660, 820, 730], radius=8, fill=BLANC, outline=GRIS, width=2)
    for i, l in enumerate(wrap(d, "Puissance publique : la capacité de se faire obéir.", F_SMALL, 360)):
        d.text((440, 678 + i * 26), l, font=F_SMALL, fill=NOIR)

    img.save(os.path.join(OUT, "u7_etat.png"))
    print("Figure écrite : u7_etat.png")


# ------------------------------------------------------------
# Figure 13 — Les trois fonctions du droit
# ------------------------------------------------------------
def fig_droit():
    W, H = 1240, 700
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Les trois fonctions du droit")

    boite(d, 60, 160, 420, 500, "1. GARANTIR LES LIBERTÉS",
          ["Protéger la personne", "et sa dignité", "• Liberté d'aller et venir",
           "• Liberté d'expression", "• Droit de propriété", "• Limites à l'action de l'État"],
          fill=VERT_C, bord=VERT)
    fleche(d, 420, 330, 440, 330)

    boite(d, 440, 160, 800, 500, "2. ORGANISER LA VIE EN SOCIÉTÉ",
          ["Donner un cadre stable", "• État civil, famille", "• Propriété et contrats",
           "• Travail", "• Circulation", "• Services publics"],
          fill=BLEU_C, bord=BLEU)
    fleche(d, 800, 330, 820, 330)

    boite(d, 820, 160, 1180, 500, "3. PACIFIER LA SOCIÉTÉ",
          ["Régler les conflits", "sans violence", "• Médiation", "• Conciliation",
           "• Jugement", "• Sanction prévue par la loi"],
          fill=VIOLET_C, bord=VIOLET)

    d.rounded_rectangle([60, 550, 1180, 660], radius=10, fill=JAUNE_C, outline=ORANGE, width=3)
    for i, l in enumerate(wrap(d, "Une règle de droit est générale, obligatoire et sanctionnée. "
                                  "Elle est connue à l'avance : c'est la sécurité juridique.",
                               F_SMALL, 1080)):
        d.text((80, 580 + i * 28), l, font=F_SMALL, fill=NOIR)

    img.save(os.path.join(OUT, "u7_droit.png"))
    print("Figure écrite : u7_droit.png")


if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    fig_series()
    fig_projet()
    fig_circuit()
    fig_facteurs()
    fig_maslow()
    fig_equilibre()
    fig_socialisation()
    fig_etat()
    fig_droit()
