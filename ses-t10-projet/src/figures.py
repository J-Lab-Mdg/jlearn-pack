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



# ------------------------------------------------------------
# Figure 10 — Productivité et progrès technique
# ------------------------------------------------------------
def fig_productivite():
    W, H = 1240, 620
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Le progrès technique augmente la productivité")

    d.rounded_rectangle([60, 140, 600, 560], radius=10, fill=BLANC, outline=GRIS, width=3)
    d.text((80, 158), "AVANT : travail manuel", font=F_BOLD, fill=GRIS)
    d.text((80, 196), "5 travailleurs, sans machine", font=F_SMALL, fill=NOIR)
    d.rectangle([140, 340, 260, 520], fill=BLEU_C, outline=BLEU, width=3)
    d.text((150, 312), "100 kg", font=F_BOLD, fill=BLEU)
    d.text((320, 380), "20 kg", font=F_SMALL, fill=NOIR)
    d.text((320, 410), "par personne", font=F_SMALL, fill=NOIR)

    fleche(d, 610, 350, 630, 350)

    d.rounded_rectangle([640, 140, 1180, 560], radius=10, fill=BLANC, outline=GRIS, width=3)
    d.text((660, 158), "APRÈS : avec une décortiqueuse", font=F_BOLD, fill=GRIS)
    d.text((660, 196), "5 travailleurs, une machine", font=F_SMALL, fill=NOIR)
    d.rectangle([720, 160, 840, 520], fill=VERT_C, outline=VERT, width=3)
    d.text((730, 132), "400 kg", font=F_BOLD, fill=VERT)
    d.text((900, 380), "80 kg", font=F_SMALL, fill=NOIR)
    d.text((900, 410), "par personne", font=F_SMALL, fill=NOIR)

    d.rounded_rectangle([60, 572, 1180, 610], radius=8, fill=JAUNE_C, outline=ORANGE, width=2)
    d.text((80, 582), "Même équipe, même durée : la productivité du travail a été multipliée par quatre.",
           font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "u3_productivite.png"))
    print("Figure écrite : u3_productivite.png")


# ------------------------------------------------------------
# Figure 11 — Le calcul du profit
# ------------------------------------------------------------
def fig_profit():
    W, H = 1240, 620
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Du chiffre d'affaires au profit")

    d.text((120, 150), "RECETTES = 600 000 Ar", font=F_BOLD, fill=NOIR)
    d.rectangle([120, 190, 870, 290], fill=(255, 235, 210), outline=ORANGE, width=3)
    texte_centre(d, (120, 190, 870, 290), "CHARGES = 500 000 Ar", F_BOLD, ORANGE)
    d.rectangle([870, 190, 1020, 290], fill=VERT_C, outline=VERT, width=3)
    texte_centre(d, (870, 190, 1020, 290), "100 000", F_SMALL, VERT)
    d.text((1040, 210), "PROFIT", font=F_BOLD, fill=VERT)

    d.text((120, 320), "Profit = recettes − charges = 600 000 − 500 000 = 100 000 Ar", font=F_SMALL, fill=NOIR)

    boite(d, 120, 380, 1120, 590, "À quoi sert le profit ?",
          ["40 000 Ar pour faire vivre la famille de l'entrepreneur",
           "50 000 Ar réinvestis dans une nouvelle machine",
           "10 000 Ar gardés en réserve pour les imprévus"],
          fill=BLEU_C, bord=BLEU)
    img.save(os.path.join(OUT, "u3_profit.png"))
    print("Figure écrite : u3_profit.png")


# ------------------------------------------------------------
# Figure 16 — Le pouvoir d'achat
# ------------------------------------------------------------
def fig_pouvoir_achat():
    W, H = 1240, 620
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Même somme, moins de riz : la baisse du pouvoir d'achat")

    d.rounded_rectangle([60, 150, 560, 520], radius=10, fill=VERT_C, outline=VERT, width=3)
    d.text((90, 172), "MOIS 1", font=F_BOLD, fill=VERT)
    d.text((90, 214), "Prix du riz : 2 000 Ar le kilo", font=F_SMALL, fill=NOIR)
    for r in range(4):
        for c in range(10):
            d.rounded_rectangle([90 + c * 46, 260 + r * 58, 90 + c * 46 + 34, 260 + r * 58 + 40],
                                radius=5, fill=BLANC, outline=VERT, width=2)
    d.text((90, 500), "40 kilos achetés avec 80 000 Ar", font=F_BOLD, fill=VERT)

    d.text((590, 320), "→", font=F_BOLD, fill=NOIR)

    d.rounded_rectangle([680, 150, 1180, 520], radius=10, fill=ROSE_C, outline=(190, 60, 100), width=3)
    d.text((710, 172), "MOIS 2", font=F_BOLD, fill=(190, 60, 100))
    d.text((710, 214), "Prix du riz : 2 500 Ar le kilo", font=F_SMALL, fill=NOIR)
    for r in range(4):
        for c in range(8):
            d.rounded_rectangle([710 + c * 46, 260 + r * 58, 710 + c * 46 + 34, 260 + r * 58 + 40],
                                radius=5, fill=BLANC, outline=(190, 60, 100), width=2)
    d.text((710, 500), "32 kilos seulement avec 80 000 Ar", font=F_BOLD, fill=(190, 60, 100))

    d.rounded_rectangle([60, 545, 1180, 600], radius=8, fill=JAUNE_C, outline=ORANGE, width=2)
    d.text((80, 562), "Les prix ont monté plus vite que le revenu : le ménage réduit la quantité achetée.",
           font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "u4_pouvoir_achat.png"))
    print("Figure écrite : u4_pouvoir_achat.png")


# ------------------------------------------------------------
# Figure 17 — Les deux familles de déterminants
# ------------------------------------------------------------
def fig_determinants():
    W, H = 1240, 660
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Ce qui fait varier la consommation d'un ménage")

    boite(d, 60, 170, 600, 520, "DÉTERMINANTS ÉCONOMIQUES",
          ["• Le revenu du ménage", "• Le pouvoir d'achat", "• Le prix des biens",
           "  et des services", "• Le prix des produits", "  de remplacement"],
          fill=BLEU_C, bord=BLEU)
    boite(d, 640, 170, 1180, 520, "DÉTERMINANTS SOCIOCULTURELS",
          ["• L'âge", "• Le genre", "• Le milieu social", "• Le lieu d'habitation",
           "• Le niveau d'instruction", "• La culture et les traditions"],
          fill=VERT_C, bord=VERT)

    d.rounded_rectangle([60, 560, 1180, 630], radius=8, fill=JAUNE_C, outline=ORANGE, width=2)
    d.text((80, 578), "Les deux familles se combinent : deux ménages au même revenu peuvent", font=F_SMALL, fill=NOIR)
    d.text((80, 606), "consommer très différemment selon leur âge, leur milieu et leur culture.", font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "u4_determinants.png"))
    print("Figure écrite : u4_determinants.png")


# ------------------------------------------------------------
# Figure 18 — Imitation et distinction
# ------------------------------------------------------------
def fig_imitation_distinction():
    W, H = 1240, 600
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Imiter son groupe ou s'en distinguer")

    boite(d, 60, 200, 400, 460, "LE GROUPE DE RÉFÉRENCE",
          ["Amis, camarades,", "jeunes du quartier", "modèles médiatiques"],
          fill=BLEU_C, bord=BLEU)
    fleche_label(d, 400, 275, 560, 275, "imiter")

    d.ellipse([560, 200, 800, 440], fill=JAUNE_C, outline=ORANGE, width=3)
    texte_centre(d, (560, 200, 800, 440), "LE CONSOMMATEUR", F_BOLD, ORANGE)

    fleche_label(d, 800, 395, 960, 395, "se distinguer")
    boite(d, 960, 200, 1180, 460, "SE DÉMARQUER",
          ["Objet rare,", "coûteux ou", "original"],
          fill=ROSE_C, bord=(190, 60, 100))

    d.rounded_rectangle([60, 500, 1180, 580], radius=8, fill=BLANC, outline=GRIS, width=2)
    d.text((80, 518), "Imitation : consommer comme son groupe pour en faire partie.", font=F_SMALL, fill=NOIR)
    d.text((80, 548), "Distinction : consommer ce que peu possèdent pour marquer sa position.", font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "u4_imitation_distinction.png"))
    print("Figure écrite : u4_imitation_distinction.png")


# ------------------------------------------------------------
# Figure 20 — La loi de l'offre et de la demande
# ------------------------------------------------------------
def fig_loi():
    W, H = 1240, 620
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "La loi de la demande et la loi de l'offre")

    for (xa, xb, titre, couleur, montant, desc) in [
        (60, 600, "LA DEMANDE", BLEU, True, "prix ↑ → quantité demandée ↓"),
        (640, 1180, "L'OFFRE", VERT, False, "prix ↑ → quantité offerte ↑"),
    ]:
        d.rounded_rectangle([xa, 150, xb, 520], radius=10, fill=BLANC, outline=GRIS, width=3)
        d.text((xa + 20, 168), titre, font=F_BOLD, fill=couleur)
        ox, oy, ox2, oy2 = xa + 90, 470, xb - 60, 210
        d.line([ox, oy, ox2, oy2], fill=NOIR, width=3)
        d.line([ox, oy, ox, oy2], fill=NOIR, width=3)
        d.text((ox - 40, oy2 - 30), "prix", font=F_SMALL, fill=NOIR)
        d.text((ox2 - 60, oy + 12), "quantités", font=F_SMALL, fill=NOIR)
        if desc:
            d.line([ox + 30, oy2 + 20, ox2 - 40, oy - 20], fill=couleur, width=5)
            fleche(d, ox2 - 90, oy2 + 60, ox2 - 40, oy - 20, couleur)
        else:
            d.line([ox + 30, oy - 20, ox2 - 40, oy2 + 20], fill=couleur, width=5)
            fleche(d, ox2 - 100, oy - 30, ox2 - 40, oy2 + 20, couleur)
        d.text((xa + 20, 500), desc, font=F_SMALL, fill=couleur)

    d.rounded_rectangle([60, 545, 1180, 600], radius=8, fill=JAUNE_C, outline=ORANGE, width=2)
    d.text((80, 562), "Les deux courbes vont en sens contraire : leur croisement donne le prix d'équilibre.",
           font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "u5_loi.png"))
    print("Figure écrite : u5_loi.png")


# ------------------------------------------------------------
# Figure 22 — Les conditions de la concurrence pure et parfaite
# ------------------------------------------------------------
def fig_cpp():
    W, H = 1240, 660
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Les cinq conditions de la concurrence pure et parfaite")

    boite(d, 40, 150, 1200, 240, "MARCHÉ EN CONCURRENCE PURE ET PARFAITE",
          ["Aucun participant ne peut imposer son prix : le prix s'impose à tous"],
          fill=BLEU_C, bord=BLEU, interligne=26)

    conditions = [
        ("ATOMICITÉ", ["Très grand nombre", "d'acheteurs", "et de vendeurs"], VERT_C, VERT),
        ("HOMOGÉNÉITÉ", ["Produits", "identiques ou", "comparables"], JAUNE_C, ORANGE),
        ("LIBRE ENTRÉE", ["Possibilité de", "s'installer", "ou de partir"], VIOLET_C, VIOLET),
        ("TRANSPARENCE", ["Prix et qualité", "connus", "de tous"], ROSE_C, (190, 60, 100)),
        ("MOBILITÉ", ["Acheteurs et", "vendeurs", "peuvent changer"], BLEU_C, BLEU),
    ]
    for i, (titre, lignes, fc, bc) in enumerate(conditions):
        x0 = 40 + i * 240
        boite(d, x0, 280, x0 + 220, 520, titre, lignes, fill=fc, bord=bc)
        fleche(d, x0 + 110, 280, x0 + 110, 250)

    d.rounded_rectangle([40, 555, 1200, 630], radius=8, fill=JAUNE_C, outline=ORANGE, width=2)
    for i, l in enumerate(wrap(d, "Modèle de référence : il est rarement réalisé complètement, "
                                  "mais il sert à mesurer les écarts d'un marché réel.", F_SMALL, 1100)):
        d.text((60, 575 + i * 28), l, font=F_SMALL, fill=NOIR)
    img.save(os.path.join(OUT, "u5_cpp.png"))
    print("Figure écrite : u5_cpp.png")


# ------------------------------------------------------------
# Figure 23 — Les structures de marché
# ------------------------------------------------------------
def fig_structures():
    W, H = 1240, 680
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Selon le nombre d'offreurs : quatre structures de marché")

    panels = [
        ("MONOPOLE", 1, ROSE_C, (190, 60, 100), "Un seul vendeur"),
        ("DUOPOLE", 2, VIOLET_C, VIOLET, "Deux vendeurs"),
        ("OLIGOPOLE", 4, JAUNE_C, ORANGE, "Quelques vendeurs"),
        ("CONCURRENCE", 12, VERT_C, VERT, "Une multitude"),
    ]
    for i, (titre, n, fc, bc, sous) in enumerate(panels):
        x0 = 40 + i * 300
        d.rounded_rectangle([x0, 150, x0 + 280, 560], radius=10, fill=fc, outline=bc, width=3)
        texte_centre(d, (x0, 160, x0 + 280, 210), titre, F_BOLD, bc)
        d.text((x0 + 16, 218), sous, font=F_SMALL, fill=NOIR)
        cy = 290
        if n == 1:
            d.ellipse([x0 + 100, cy, x0 + 180, cy + 80], fill=bc)
        elif n == 2:
            for k in range(2):
                d.ellipse([x0 + 50 + k * 110, cy, x0 + 130 + k * 110, cy + 80], fill=bc)
        elif n == 4:
            for k in range(2):
                for j in range(2):
                    d.ellipse([x0 + 50 + j * 110, cy + k * 95, x0 + 130 + j * 110, cy + 80 + k * 95], fill=bc)
        else:
            for k in range(3):
                for j in range(4):
                    cx = x0 + 30 + j * 68
                    d.ellipse([cx, cy + k * 68, cx + 48, cy + 48 + k * 68], fill=bc)

    d.rounded_rectangle([40, 590, 1200, 660], radius=8, fill=BLANC, outline=GRIS, width=2)
    d.text((60, 610), "Plus les offreurs sont nombreux, moins chacun peut imposer son prix.", font=F_SMALL, fill=NOIR)
    d.text((60, 638), "Les acheteurs, représentés en petit nombre ici, sont en réalité très nombreux.",
           font=F_MINI, fill=NOIR)
    img.save(os.path.join(OUT, "u5_structures.png"))
    print("Figure écrite : u5_structures.png")


# ------------------------------------------------------------
# Figure 24 — Les conséquences d'une entente
# ------------------------------------------------------------
def fig_entente():
    W, H = 1240, 620
    img = Image.new("RGB", (W, H), BLANC)
    d = ImageDraw.Draw(img)
    cadre(d, W, H, "Le prix du ciment avec et sans entente")

    base = 520
    d.line([120, base, 1120, base], fill=NOIR, width=3)
    d.line([120, base, 120, 170], fill=NOIR, width=3)
    d.text((40, 160), "prix", font=F_SMALL, fill=NOIR)

    h1 = 240
    d.rectangle([300, base - h1, 520, base], fill=VERT_C, outline=VERT, width=3)
    texte_centre(d, (300, base - h1, 520, base - h1 + 40), "18 000 Ar", F_BOLD, VERT)
    d.text((290, base + 16), "Prix de concurrence", font=F_SMALL, fill=VERT)

    h2 = 333
    d.rectangle([700, base - h2, 920, base], fill=ROSE_C, outline=(190, 60, 100), width=3)
    texte_centre(d, (700, base - h2, 920, base - h2 + 40), "25 000 Ar", F_BOLD, (190, 60, 100))
    d.text((700, base + 16), "Prix d'entente", font=F_SMALL, fill=(190, 60, 100))

    fleche(d, 540, base - h1, 680, base - h2, (190, 60, 100))

    d.rounded_rectangle([60, 560, 1180, 610], radius=8, fill=JAUNE_C, outline=ORANGE, width=2)
    d.text((80, 578), "Quatre fournisseurs s'entendent : les familles paient plus cher et renoncent à une "
                      "partie des travaux.", font=F_MINI, fill=NOIR)
    img.save(os.path.join(OUT, "u5_entente.png"))
    print("Figure écrite : u5_entente.png")


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
    fig_productivite()
    fig_profit()
    fig_pouvoir_achat()
    fig_determinants()
    fig_imitation_distinction()
    fig_loi()
    fig_cpp()
    fig_structures()
    fig_entente()
