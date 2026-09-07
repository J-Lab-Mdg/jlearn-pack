# -*- coding: utf-8 -*-
"""
Illustrations scolaires (style manuel CP, à plat) — Thème 1 « Les salutations »
Génère des PNG ~1100px de large (norme illustrations.md) dans ../assets/
Style : dessin scolaire plat (pas de réalisme) — préférence utilisateur v19.
"""
import math, os
from PIL import Image, ImageDraw, ImageFont

OUT = os.path.join(os.path.dirname(__file__), "..", "assets")
os.makedirs(OUT, exist_ok=True)

F_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
F_REG = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"

CIER = (255, 255, 255)
NOIR = (40, 40, 40)
CONT = (60, 60, 60)
JAUNE = (255, 213, 79)
JAUNE_F = (255, 179, 0)
ORANGE = (255, 138, 61)
BLEU = (79, 195, 247)
BLEU_F = (30, 100, 160)
VERT = (129, 199, 132)
VERT_F = (56, 142, 60)
ROUGE_F = (198, 40, 40)
TERRE = (215, 165, 120)
MUR = (255, 249, 230)
TOIT = (198, 88, 66)
GRIS = (176, 190, 197)
ROSE = (244, 143, 177)
VIOLET = (149, 117, 205)


def font(sz, bold=True):
    return ImageFont.truetype(F_BOLD if bold else F_REG, sz)


def nouvelle(l, h, bg=CIER):
    img = Image.new("RGB", (l, h), bg)
    return img, ImageDraw.Draw(img)


def perso(d, x, y, t, peau=TERRE, haut=BLEU_F, bas=(60, 70, 90), bras_up=False):
    """Petit personnage plat ; (x,y)=centre tête ; t=taille unité."""
    r = t
    # tête
    d.ellipse([x - r, y - r, x + r, y + r], fill=peau, outline=CONT, width=3)
    # yeux + sourire
    er = max(2, t // 7)
    d.ellipse([x - r // 2 - er // 2, y - er, x - r // 2 + er // 2, y], fill=NOIR)
    d.ellipse([x + r // 2 - er // 2, y - er, x + r // 2 + er // 2, y], fill=NOIR)
    d.arc([x - r // 2, y + r // 5, x + r // 2, y + r], 15, 165, fill=NOIR, width=3)
    # corps
    cy = y + r + int(r * 0.4)
    d.rounded_rectangle([x - r, cy, x + r, cy + int(2.2 * r)], radius=r // 2, fill=haut, outline=CONT, width=3)
    # jambes
    jy = cy + int(2.2 * r)
    d.line([x - r // 2, jy, x - r // 2, jy + int(r * 0.9)], fill=bas, width=max(4, t // 4))
    d.line([x + r // 2, jy, x + r // 2, jy + int(r * 0.9)], fill=bas, width=max(4, t // 4))
    # bras
    ay = cy + int(0.5 * r)
    if bras_up:
        d.line([x - r, ay, x - int(r * 1.7), ay - int(r * 0.9)], fill=peau, width=max(4, t // 4))
        d.line([x + r, ay, x + int(r * 1.7), ay - int(r * 0.9)], fill=peau, width=max(4, t // 4))
    else:
        d.line([x - r, ay, x - int(r * 1.5), ay + int(r * 0.8)], fill=peau, width=max(4, t // 4))
        d.line([x + r, ay, x + int(r * 1.5), ay + int(r * 0.8)], fill=peau, width=max(4, t // 4))


def bulle(d, x, y, texte, f=None, rc=(255, 255, 255), center_x=None):
    """Bulle de parole pointant vers le bas-gauche ; (x,y)=coin supérieur gauche.
    center_x : si fourni, la bulle est centrée horizontalement sur cette position."""
    f = f or font(34)
    bb = d.textbbox((0, 0), texte, font=f)
    tw, th = bb[2] - bb[0], bb[3] - bb[1]
    pad = 18
    if center_x is not None:
        x = center_x - (tw + 2 * pad) // 2
    x2, y2 = x + tw + 2 * pad, y + th + 2 * pad
    d.rounded_rectangle([x, y, x2, y2], radius=20, fill=rc, outline=CONT, width=3)
    d.polygon([(x + 28, y2 - 2), (x + 62, y2 - 2), (x + 30, y2 + 26)], fill=rc, outline=CONT)
    d.text((x + pad - bb[0], y + pad - bb[1]), texte, font=f, fill=NOIR)
    return (x2, y2)


def soleil(d, cx, cy, r, couche=False):
    col = ORANGE if couche else JAUNE_F
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=col, outline=CONT, width=3)
    for i in range(12):
        a = math.radians(i * 30)
        x1, y1 = cx + (r + 8) * math.cos(a), cy + (r + 8) * math.sin(a)
        x2, y2 = cx + (r + 26) * math.cos(a), cy + (r + 26) * math.sin(a)
        d.line([x1, y1, x2, y2], fill=col, width=5)


def ecole(d, x, y, l, h):
    """Bâtiment école ; (x,y)=coin bas-gauche."""
    d.rectangle([x, y - h, x + l, y], fill=MUR, outline=CONT, width=3)
    d.polygon([(x - 14, y - h), (x + l + 14, y - h), (x + l // 2, y - h - int(l * 0.28))], fill=TOIT, outline=CONT)
    # porte + fenêtres
    d.rectangle([x + l // 2 - 22, y - 66, x + l // 2 + 22, y], fill=(121, 85, 72), outline=CONT, width=3)
    for fx in (x + 24, x + l - 78):
        d.rectangle([fx, y - h + 22, fx + 54, y - h + 76], fill=BLEU, outline=CONT, width=3)
    # drapeau
    d.line([x + l // 2, y - h - int(l * 0.28), x + l // 2, y - h - int(l * 0.46)], fill=CONT, width=3)
    d.rectangle([x + l // 2, y - h - int(l * 0.46), x + l // 2 + 34, y - h - int(l * 0.46) + 20], fill=(76, 175, 80), outline=CONT, width=2)


def maison(d, x, y, l, h):
    d.rectangle([x, y - h, x + l, y], fill=(255, 224, 178), outline=CONT, width=3)
    d.polygon([(x - 12, y - h), (x + l + 12, y - h), (x + l // 2, y - h - int(l * 0.3))], fill=ROUGE_F, outline=CONT)
    d.rectangle([x + l // 2 - 20, y - 58, x + l // 2 + 20, y], fill=(121, 85, 72), outline=CONT, width=3)
    d.rectangle([x + 20, y - h + 20, x + 20 + 48, y - h + 66], fill=JAUNE, outline=CONT, width=3)


def panneau(d, x, y, l, h, titre, couleur):
    d.rounded_rectangle([x, y, x + l, y + h], radius=14, fill=couleur, outline=CONT, width=3)
    f = font(30)
    bb = d.textbbox((0, 0), titre, font=f)
    d.text((x + (l - (bb[2] - bb[0])) // 2, y + (h - (bb[3] - bb[1])) // 2 - bb[1]), titre, font=f, fill=CIER)


def sol(d, x1, x2, y, col=(180, 205, 150)):
    d.rectangle([x1, y, x2, y + 26], fill=col, outline=CONT, width=2)


# ============================================================
# 1. cover_hero.png — deux enfants devant l'école, « Bonjour ! »
# ============================================================
img, d = nouvelle(1100, 560)
d.rectangle([0, 0, 1100, 400], fill=(200, 235, 255))
soleil(d, 950, 90, 52)
d.rectangle([0, 400, 1100, 560], fill=(180, 205, 150))
ecole(d, 60, 400, 380, 240)
perso(d, 620, 260, 34, haut=BLEU_F)
perso(d, 780, 250, 34, haut=VERT_F, bras_up=True)
bulle(d, 700, 100, "Bonjour !", font(44))
sol(d, 0, 1100, 400)
img.save(os.path.join(OUT, "cover_hero.png"))

# ============================================================
# 2. s1_matin_soir.png — matin (BONJOUR) / soir (BONSOIR)
# ============================================================
img, d = nouvelle(1100, 520)
# panneau matin
d.rectangle([0, 0, 549, 520], fill=(200, 235, 255))
soleil(d, 130, 90, 46)
ecole(d, 40, 400, 260, 190)
perso(d, 410, 300, 26, haut=BLEU_F)
bulle(d, 0, 150, "BONJOUR !", font(32), center_x=350)
d.line([549, 0, 549, 520], fill=CONT, width=4)
# panneau soir
d.rectangle([551, 0, 1100, 520], fill=(90, 90, 160))
soleil(d, 618, 345, 44, couche=True)
d.ellipse([950, 60, 1000, 110], fill=(236, 239, 241), outline=CONT, width=2)
maison(d, 790, 400, 240, 170)
perso(d, 715, 300, 26, haut=VIOLET)
bulle(d, 0, 150, "BONSOIR !", font(32), center_x=820)
img.save(os.path.join(OUT, "s1_matin_soir.png"))

# ============================================================
# 3. s2_depart.png — enfants qui quittent l'école — AU REVOIR !
# ============================================================
img, d = nouvelle(1100, 520)
d.rectangle([0, 0, 1100, 380], fill=(255, 224, 178))
soleil(d, 940, 90, 44, couche=True)
ecole(d, 50, 380, 330, 220)
perso(d, 560, 260, 30, haut=VERT_F, bras_up=True)
perso(d, 740, 270, 30, haut=ROSE)
bulle(d, 600, 110, "AU REVOIR !", font(40))
d.rectangle([0, 380, 1100, 520], fill=(180, 205, 150))
sol(d, 0, 1100, 380)
img.save(os.path.join(OUT, "s2_depart.png"))

# ============================================================
# 4. s3_politesse.png — demander / remercier / répondre
# ============================================================
img, d = nouvelle(1100, 520)
titres = [("S'il te plaît", 20), ("Merci !", 390), ("De rien", 760)]
for i, (t, x) in enumerate(titres):
    panneau(d, x + 60, 20, 220, 56, t, [BLEU_F, VERT_F, ORANGE][i])
# scène 1 : tend un crayon
perso(d, 130, 250, 28, haut=BLEU_F)
perso(d, 300, 250, 28, haut=ROSE)
d.line([170, 300, 260, 320], fill=(121, 85, 72), width=8)
# scène 2 : donne un livre
perso(d, 500, 250, 28, haut=VERT_F)
perso(d, 670, 250, 28, haut=BLEU_F)
d.rectangle([590, 290, 650, 330], fill=(236, 239, 241), outline=CONT, width=3)
# scène 3 : deux mains (poignée de main simplifiée)
perso(d, 870, 250, 28, haut=ORANGE)
perso(d, 1040, 250, 28, haut=VIOLET)
d.line([910, 305, 1000, 305], fill=TERRE, width=10)
d.rectangle([0, 420, 1100, 520], fill=(180, 205, 150))
sol(d, 0, 1100, 420)
img.save(os.path.join(OUT, "s3_politesse.png"))

# ============================================================
# 5. s6_adulte.png — élève devant la maîtresse
# ============================================================
img, d = nouvelle(1100, 520)
d.rectangle([0, 0, 1100, 420], fill=MUR)
d.rectangle([0, 420, 1100, 520], fill=(161, 136, 110))
# tableau
d.rectangle([60, 60, 420, 260], fill=(46, 90, 60), outline=CONT, width=4)
d.text((120, 130), "Bonjour !", font=font(44), fill=CIER)
# maîtresse (adulte plus grand) — cheveux dessinés derrière la tête, pas de triangle sur le visage
d.ellipse([700 - 52, 150 - 52, 700 + 52, 150 + 52], fill=(90, 60, 40), outline=CONT, width=3)
perso(d, 700, 150, 44, haut=ROSE)
d.ellipse([700 - 30, 150 - 30, 700 - 8, 150 - 8], outline=CONT, width=0)
# élève
perso(d, 920, 260, 28, haut=BLEU_F, bras_up=True)
bulle(d, 700, 70, "Bonjour Madame !", font(34))
sol(d, 0, 1100, 420, (161, 136, 110))
img.save(os.path.join(OUT, "s6_adulte.png"))

# ============================================================
# 6. s7_lieux.png — école / marché / maison / rue
# ============================================================
img, d = nouvelle(1100, 480)
# école
ecole(d, 30, 300, 200, 160)
panneau(d, 60, 320, 140, 46, "ÉCOLE", BLEU_F)
# marché (étal)
d.rectangle([360, 200, 560, 300], fill=(255, 224, 178), outline=CONT, width=3)
d.polygon([(350, 200), (570, 200), (560, 160), (360, 160)], fill=(239, 108, 0), outline=CONT)
for i, c in enumerate([ROUGE_F, VERT_F, JAUNE_F]):
    d.ellipse([380 + i * 60, 230, 420 + i * 60, 270], fill=c, outline=CONT, width=2)
panneau(d, 380, 320, 140, 46, "MARCHÉ", ORANGE)
# maison
maison(d, 700, 300, 200, 150)
panneau(d, 720, 320, 140, 46, "MAISON", VERT_F)
# rue
d.rectangle([950, 170, 1080, 300], fill=GRIS, outline=CONT, width=3)
d.rectangle([970, 200, 1000, 240], fill=BLEU, outline=CONT, width=2)
d.rectangle([1010, 200, 1060, 240], fill=JAUNE, outline=CONT, width=2)
panneau(d, 940, 320, 140, 46, "RUE", VIOLET)
d.rectangle([0, 366, 1100, 480], fill=(180, 205, 150))
sol(d, 0, 1100, 366)
img.save(os.path.join(OUT, "s7_lieux.png"))

# ============================================================
# 7. s10_bilan.png — affiche récapitulative des formules
# ============================================================
img, d = nouvelle(1100, 760)
d.rounded_rectangle([20, 20, 1080, 740], radius=24, fill=(255, 253, 245), outline=CONT, width=5)
d.text((300, 44), "MES FORMULES DE POLITESSE", font=font(40), fill=ROUGE_F)
lignes = [
    ("BONJOUR", "quand j'arrive le matin", JAUNE),
    ("BONSOIR", "quand le soir arrive", (206, 147, 216)),
    ("AU REVOIR", "quand je pars", BLEU),
    ("S'IL TE PLAÎT", "quand je demande", VERT),
    ("MERCI", "quand je reçois", ORANGE),
    ("PARDON", "quand je m'excuse", ROSE),
]
y = 130
for formule, emploi, coul in lignes:
    d.rounded_rectangle([70, y, 380, y + 70], radius=14, fill=coul, outline=CONT, width=3)
    f = font(32)
    bb = d.textbbox((0, 0), formule, font=f)
    d.text((70 + (310 - (bb[2] - bb[0])) // 2, y + (70 - (bb[3] - bb[1])) // 2 - bb[1]), formule, font=f, fill=NOIR)
    d.text((420, y + 16), "→ " + emploi, font=font(34, bold=False), fill=CONT)
    y += 98
img.save(os.path.join(OUT, "s10_bilan.png"))

print("Illustrations générées :")
for f in sorted(os.listdir(OUT)):
    print("  -", f)

# ============================================================
# THÈME 2 — LES SONS I ET U (séances 11-20, Phonétique)
# ============================================================

def grande_lettre(d, x, y, lettre, coul, sz=130):
    d.text((x, y), lettre, font=font(sz), fill=coul)

def etiquette(d, cx, y, texte):
    f = font(30)
    bb = d.textbbox((0, 0), texte, font=f)
    w = bb[2] - bb[0]
    d.rounded_rectangle([cx - w // 2 - 16, y, cx + w // 2 + 16, y + 52], radius=12, fill=(255, 253, 245), outline=CONT, width=3)
    d.text((cx - w // 2, y + 10 - bb[1]), texte, font=f, fill=NOIR)

def souris(d, x, y, t):
    """Petite souris grise ; (x,y)=centre du corps."""
    d.ellipse([x - t, y - t // 2 - t // 4, x + t, y + t], fill=(176, 190, 197), outline=CONT, width=3)
    d.ellipse([x - t + t // 6, y - t - t // 3, x - t + t // 6 + t // 2, y - t + t // 5], fill=(220, 210, 200), outline=CONT, width=3)
    d.ellipse([x + t - t // 6 - t // 2, y - t - t // 3, x + t - t // 6, y - t + t // 5], fill=(220, 210, 200), outline=CONT, width=3)
    er = max(3, t // 9)
    d.ellipse([x - t // 3 - er // 2, y - t // 3, x - t // 3 + er // 2, y - t // 3 + er], fill=NOIR)
    d.ellipse([x + t // 3 - er // 2, y - t // 3, x + t // 3 + er // 2, y - t // 3 + er], fill=NOIR)
    d.ellipse([x - 6, y + t // 5, x + 6, y + t // 5 + 10], fill=ROSE, outline=CONT, width=2)
    d.arc([x + t, y - t // 3, x + int(t * 2.1), y + t], 270, 90, fill=CONT, width=4)

def bol_riz(d, x, y, l):
    """Bol de riz ; (x,y)=centre du bol."""
    d.polygon([(x - l // 2, y), (x + l // 2, y), (x + l // 3, y + int(l * 0.42)), (x - l // 3, y + int(l * 0.42))], fill=BLEU_F, outline=CONT)
    d.pieslice([x - l // 2, y - int(l * 0.45), x + l // 2, y + int(l * 0.3)], 180, 360, fill=CIER, outline=CONT)
    for gx in range(-l // 3, l // 3, 14):
        d.ellipse([x + gx - 4, y - int(l * 0.32) + (gx % 3) * 4, x + gx + 4, y - int(l * 0.32) + 8 + (gx % 3) * 4], fill=(235, 235, 235), outline=CONT, width=1)

def tapis(d, x, y, l, h):
    d.rounded_rectangle([x, y, x + l, y + h], radius=12, fill=(239, 108, 0), outline=CONT, width=3)
    for i in range(1, 4):
        d.line([x + 10, y + i * h // 4, x + l - 10, y + i * h // 4], fill=JAUNE, width=5)

def lune(d, cx, cy, r):
    d.pieslice([cx - r, cy - r, cx + r, cy + r], 60, 300, fill=JAUNE, outline=CONT, width=3)

def tortue(d, x, y, t):
    d.pieslice([x - t, y - t, x + t, y + int(t * 0.6)], 180, 360, fill=VERT_F, outline=CONT, width=3)
    d.polygon([(x - t // 3, y - t + 4), (x, y - int(t * 0.2)), (x + t // 3, y - t + 4)], outline=JAUNE, width=3)
    d.ellipse([x + t - 4, y - t // 3, x + t + t // 3, y + t // 4], fill=VERT, outline=CONT, width=3)
    d.ellipse([x + t + t // 5 - 2, y - t // 4, x + t + t // 5 + 4, y - t // 4 + 6], fill=NOIR)
    for lx in (-t // 2, t // 2 - 6):
        d.line([x + lx, y + t // 6, x + lx, y + t // 2], fill=VERT, width=max(4, t // 6))

def visage(d, cx, cy, r, bouche="i"):
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=TERRE, outline=CONT, width=4)
    er = max(4, r // 10)
    d.ellipse([cx - r // 3 - er // 2, cy - r // 4 - er // 2, cx - r // 3 + er // 2, cy - r // 4 + er // 2], fill=NOIR)
    d.ellipse([cx + r // 3 - er // 2, cy - r // 4 - er // 2, cx + r // 3 + er // 2, cy - r // 4 + er // 2], fill=NOIR)
    if bouche == "i":
        d.line([cx - r // 2, cy + r // 2, cx + r // 2, cy + r // 2], fill=ROUGE_F, width=8)
        d.line([cx - r // 2, cy + r // 2, cx - int(r * 0.72), cy + int(r * 0.36)], fill=ROUGE_F, width=8)
        d.line([cx + r // 2, cy + r // 2, cx + int(r * 0.72), cy + int(r * 0.36)], fill=ROUGE_F, width=8)
    elif bouche == "u":
        d.ellipse([cx - r // 5, cy + r // 3, cx + r // 5, cy + r // 3 + int(r * 0.42)], fill=ROUGE_F, outline=CONT, width=3)

# 8. s11_son_i.png — le son I : souris, riz, tapis
img, d = nouvelle(1100, 540)
d.rectangle([40, 30, 260, 190], fill=(255, 253, 245), outline=CONT, width=4)
grande_lettre(d, 80, 40, "I", ROUGE_F)
d.text((160, 105), "i", font=font(90), fill=ROUGE_F)
souris(d, 430, 300, 70)
etiquette(d, 430, 400, "la souris")
bol_riz(d, 690, 320, 150)
etiquette(d, 690, 400, "le riz")
tapis(d, 880, 300, 170, 80)
etiquette(d, 965, 400, "le tapis")
d.text((330, 70), "J'entends  I  dans :", font=font(40), fill=CONT)
img.save(os.path.join(OUT, "s11_son_i.png"))

# 9. s12_son_u.png — le son U : lune, tortue, rue
img, d = nouvelle(1100, 540)
d.rectangle([40, 30, 260, 190], fill=(255, 253, 245), outline=CONT, width=4)
grande_lettre(d, 70, 40, "U", BLEU_F)
lune(d, 430, 280, 75)
etiquette(d, 430, 400, "la lune")
tortue(d, 680, 330, 80)
etiquette(d, 680, 420, "la tortue")
maison(d, 860, 380, 100, 90)
maison(d, 980, 380, 100, 90)
d.line([830, 380, 1090, 380], fill=CONT, width=3)
etiquette(d, 965, 400, "la rue")
d.text((330, 70), "J'entends  U  dans :", font=font(40), fill=CONT)
img.save(os.path.join(OUT, "s12_son_u.png"))

# 10. s13_i_ou_u.png — discrimination I ou U
img, d = nouvelle(1100, 540)
d.rectangle([30, 30, 520, 500], fill=(227, 242, 253), outline=CONT, width=4)
d.rectangle([580, 30, 1070, 500], fill=(255, 243, 224), outline=CONT, width=4)
grande_lettre(d, 230, 60, "I", ROUGE_F, 110)
d.text((130, 220), "riz  •  souris", font=font(44, bold=False), fill=CONT)
d.text((130, 290), "tapis  •  ici", font=font(44, bold=False), fill=CONT)
d.text((130, 360), "La bouche sourit !", font=font(38), fill=ROUGE_F)
grande_lettre(d, 780, 60, "U", BLEU_F, 110)
d.text((680, 220), "lune  •  rue", font=font(44, bold=False), fill=CONT)
d.text((680, 290), "salut  •  tortue", font=font(44, bold=False), fill=CONT)
d.text((680, 360), "La bouche est ronde !", font=font(38), fill=BLEU_F)
d.text((380, 480), "I ou U ? Je choisis !", font=font(40), fill=CONT)
img.save(os.path.join(OUT, "s13_i_ou_u.png"))

# 11. s15_comptine.png — la comptine I et U
img, d = nouvelle(1100, 620)
d.rounded_rectangle([40, 30, 1060, 590], radius=26, fill=(255, 253, 245), outline=CONT, width=5)
d.text((280, 60), "MA COMPTINE  I  ET  U", font=font(44), fill=ROUGE_F)
vers = [
    "I, I, la petite souris,",
    "court dans toute la maison.",
    "U, U, la jolie lune,",
    "éclaire toute votre rue.",
    "I et U, c'est rigolo,",
    "je les dis très bien : bravo !",
]
y = 170
for v in vers:
    d.text((300, y), v, font=font(40, bold=False), fill=CONT)
    y += 62
soleil(d, 150, 120, 40)
lune(d, 950, 130, 40)
img.save(os.path.join(OUT, "s15_comptine.png"))

# 12. s16_bouche_i.png — l'articulation du son I
img, d = nouvelle(1000, 520)
visage(d, 340, 240, 150, bouche="i")
d.text((250, 430), "La bouche sourit, elle est étirée !", font=font(36), fill=ROUGE_F)
d.rectangle([640, 60, 950, 210], fill=(255, 253, 245), outline=CONT, width=4)
grande_lettre(d, 700, 70, "I", ROUGE_F, 90)
d.text((780, 100), "= iiiii", font=font(56), fill=CONT)
d.text((640, 260), "Dans : riz, tapis,", font=font(38, bold=False), fill=CONT)
d.text((640, 320), "souris, midi, ici", font=font(38, bold=False), fill=CONT)
img.save(os.path.join(OUT, "s16_bouche_i.png"))

# 13. s17_bouche_u.png — l'articulation du son U
img, d = nouvelle(1000, 520)
visage(d, 340, 240, 150, bouche="u")
d.text((255, 430), "La bouche est ronde comme un O !", font=font(36), fill=BLEU_F)
d.rectangle([640, 60, 950, 210], fill=(255, 253, 245), outline=CONT, width=4)
grande_lettre(d, 690, 70, "U", BLEU_F, 90)
d.text((790, 100), "= uuuu", font=font(56), fill=CONT)
d.text((640, 260), "Astuce : dis I avec", font=font(38, bold=False), fill=CONT)
d.text((640, 320), "les lèvres de OU !", font=font(38, bold=False), fill=CONT)
img.save(os.path.join(OUT, "s17_bouche_u.png"))

# 14. s18_tulipe.png — I et U dans le même mot
img, d = nouvelle(1100, 620)
# tulipe (polygone stylisé à 3 pointes) + tige + feuille
d.line([300, 305, 300, 500], fill=VERT_F, width=10)
d.polygon([(295, 420), (240, 390), (295, 360)], fill=VERT, outline=CONT)
d.polygon([(300, 310), (262, 250), (278, 262), (300, 222), (322, 262), (338, 250)], fill=ROUGE_F, outline=CONT)
d.ellipse([270, 255, 330, 315], fill=ROUGE_F, outline=CONT)
d.polygon([(300, 310), (262, 250), (278, 262), (300, 222), (322, 262), (338, 250)], fill=ROUGE_F, outline=CONT)
sy = ["tu", "li", "pe"]
for i, s in enumerate(sy):
    x0 = 200 + i * 110
    d.rounded_rectangle([x0, 520, x0 + 90, 580], radius=10, fill=(255, 253, 245), outline=CONT, width=3)
    f = font(36)
    bb = d.textbbox((0, 0), s, font=f)
    d.text((x0 + (90 - (bb[2] - bb[0])) // 2, 520 + (60 - (bb[3] - bb[1])) // 2 - bb[1]), s, font=f, fill=NOIR)
# musique (note de musique)
d.ellipse([620, 330, 690, 390], fill=CONT)
d.line([685, 350, 685, 230], fill=CONT, width=8)
d.polygon([(685, 230), (745, 250), (685, 270)], fill=CONT)
etiquette(d, 660, 410, "la musique")
# lumière (ampoule)
d.ellipse([880, 240, 980, 340], fill=JAUNE, outline=CONT, width=4)
d.rectangle([910, 340, 950, 375], fill=GRIS, outline=CONT, width=3)
for a in range(0, 360, 45):
    x1 = 930 + 62 * math.cos(math.radians(a))
    y1 = 290 + 62 * math.sin(math.radians(a))
    x2 = 930 + 82 * math.cos(math.radians(a))
    y2 = 290 + 82 * math.sin(math.radians(a))
    d.line([x1, y1, x2, y2], fill=JAUNE_F, width=5)
etiquette(d, 930, 410, "la lumière")
d.text((200, 80), "I  ET  U  dans le même mot :", font=font(42), fill=CONT)
img.save(os.path.join(OUT, "s18_tulipe.png"))

# 15. s20_performance.png — performance finale I et U
img, d = nouvelle(1100, 520)
# trophée
d.polygon([(480, 180), (620, 180), (600, 330), (500, 330)], fill=JAUNE_F, outline=CONT)
d.rectangle([530, 330, 570, 380], fill=JAUNE_F, outline=CONT)
d.rectangle([490, 380, 610, 420], fill=(121, 85, 72), outline=CONT)
d.arc([430, 180, 500, 260], 270, 90, fill=CONT, width=8)
d.arc([600, 180, 670, 260], 90, 270, fill=CONT, width=8)
d.text((520, 220), "I+U", font=font(44), fill=NOIR)
for sx, sy2 in [(400, 100), (700, 90), (550, 60), (380, 260), (720, 250)]:
    d.polygon([(sx, sy2 - 22), (sx + 7, sy2 - 7), (sx + 22, sy2 - 5), (sx + 11, sy2 + 5), (sx + 13, sy2 + 20), (sx, sy2 + 12), (sx - 13, sy2 + 20), (sx - 11, sy2 + 5), (sx - 22, sy2 - 5), (sx - 7, sy2 - 7)], fill=JAUNE_F, outline=CONT)
perso(d, 320, 300, 30, haut=BLEU_F, bras_up=True)
perso(d, 780, 300, 30, haut=VERT_F, bras_up=True)
d.rectangle([0, 420, 1100, 520], fill=(180, 205, 150))
img.save(os.path.join(OUT, "s20_performance.png"))

print("Illustrations générées (thèmes 1+2) :")
for f in sorted(os.listdir(OUT)):
    print("  -", f)

# ============================================================
# THÈME 3 — SE PRÉSENTER (séances 21-30, Langage)
# ============================================================

# 16. s21_jemappelle.png — l'élève se présente devant la classe
img, d = nouvelle(1100, 520)
d.rectangle([0, 0, 1100, 430], fill=MUR)
d.rectangle([0, 430, 1100, 520], fill=(161, 136, 110))
d.rectangle([60, 60, 430, 270], fill=(46, 90, 60), outline=CONT, width=4)
d.text((95, 130), "Je m'appelle...", font=font(42), fill=CIER)
perso(d, 760, 240, 40, haut=ROSE, bras_up=True)
bulle(d, 0, 70, "Bonjour ! Je m'appelle Rova !", font(34), center_x=830)
img.save(os.path.join(OUT, "s21_jemappelle.png"))

# 17. s23_jhabite.png — j'habite à... (maison + panneau du village)
img, d = nouvelle(1100, 520)
d.rectangle([0, 0, 1100, 420], fill=(200, 235, 255))
d.rectangle([0, 420, 1100, 520], fill=(180, 205, 150))
soleil(d, 120, 90, 42)
maison(d, 130, 420, 260, 190)
d.rounded_rectangle([480, 250, 760, 330], radius=14, fill=(121, 85, 72), outline=CONT, width=3)
d.line([620, 330, 620, 460], fill=CONT, width=8)
d.text((520, 268), "ANTSIRABE", font=font(40), fill=CIER)
perso(d, 880, 290, 32, haut=BLEU_F, bras_up=True)
bulle(d, 0, 130, "J'habite à Antsirabe !", font(34), center_x=860)
sol(d, 0, 1100, 420)
img.save(os.path.join(OUT, "s23_jhabite.png"))

# 18. s24_3phrases.png — ma présentation en 3 phrases
img, d = nouvelle(1100, 620)
d.rounded_rectangle([30, 30, 1070, 590], radius=24, fill=(255, 253, 245), outline=CONT, width=5)
d.text((300, 55), "MA PRÉSENTATION EN 3 PHRASES", font=font(38), fill=ROUGE_F)
phrases = [
    ("1", "Bonjour ! Je m'appelle Soa.", BLEU),
    ("2", "J'ai 7 ans.", VERT),
    ("3", "J'habite à Fianarantsoa.", ORANGE),
]
y = 160
for num, phr, coul in phrases:
    d.ellipse([80, y, 150, y + 70], fill=coul, outline=CONT, width=3)
    f = font(40)
    bb = d.textbbox((0, 0), num, font=f)
    d.text((115 - (bb[2] - bb[0]) // 2, y + 35 - (bb[3] - bb[1]) // 2 - bb[1]), num, font=f, fill=CIER)
    d.text((190, y + 12), phr, font=font(40, bold=False), fill=CONT)
    y += 110
perso(d, 930, 330, 44, haut=ROSE)
perso(d, 820, 350, 32, haut=BLEU_F)
img.save(os.path.join(OUT, "s24_3phrases.png"))

# 19. s26_quiestce.png — Qui est-ce ? C'est...
img, d = nouvelle(1100, 520)
d.rectangle([0, 0, 1100, 430], fill=MUR)
d.rectangle([0, 430, 1100, 520], fill=(161, 136, 110))
perso(d, 280, 250, 30, haut=BLEU_F)
perso(d, 480, 250, 30, haut=VERT_F)
perso(d, 840, 240, 34, haut=ORANGE)
d.line([520, 300, 790, 260], fill=CONT, width=5)
bulle(d, 130, 90, "Qui est-ce ?", font(36))
bulle(d, 560, 60, "C'est Koto !", font(36))
sol(d, 0, 1100, 430, (161, 136, 110))
img.save(os.path.join(OUT, "s26_quiestce.png"))

# 20. s27_famille.png — c'est ma famille
img, d = nouvelle(1100, 560)
d.rectangle([0, 0, 1100, 460], fill=(255, 243, 224))
d.rectangle([0, 460, 1100, 560], fill=(161, 136, 110))
perso(d, 200, 220, 40, haut=(60, 70, 90))
etiquette(d, 200, 320, "mon papa")
perso(d, 400, 215, 42, haut=ROSE)
etiquette(d, 400, 320, "ma maman")
perso(d, 610, 250, 30, haut=VERT_F)
etiquette(d, 610, 320, "mon frère")
perso(d, 790, 255, 28, haut=VIOLET)
etiquette(d, 790, 320, "ma sœur")
perso(d, 980, 250, 28, haut=BLEU_F, bras_up=True)
etiquette(d, 980, 320, "moi")
d.text((330, 40), "C'est ma famille !", font=font(46), fill=ROUGE_F)
sol(d, 0, 1100, 460, (161, 136, 110))
img.save(os.path.join(OUT, "s27_famille.png"))

# 21. s30_bilan.png — affiche bilan : se présenter et présenter
img, d = nouvelle(1100, 720)
d.rounded_rectangle([20, 20, 1080, 700], radius=24, fill=(255, 253, 245), outline=CONT, width=5)
d.text((310, 45), "JE SAIS ME PRÉSENTER", font=font(42), fill=ROUGE_F)
lignes = [
    ("Bonjour ! Je m'appelle ....", "mon prénom", BLEU),
    ("J'ai .... ans.", "mon âge", VERT),
    ("J'habite à ....", "mon village", ORANGE),
]
y = 140
for phr, emploi, coul in lignes:
    d.rounded_rectangle([70, y, 700, y + 66], radius=14, fill=coul, outline=CONT, width=3)
    d.text((90, y + 12), phr, font=font(32), fill=CIER)
    d.text((730, y + 14), "→ " + emploi, font=font(32, bold=False), fill=CONT)
    y += 96
d.text((70, y + 10), "Et pour présenter un camarade :", font=font(34), fill=CONT)
d.rounded_rectangle([70, y + 70, 700, y + 140], radius=14, fill=ROSE, outline=CONT, width=3)
d.text((90, y + 84), "C'est .... ! Il s'appelle ....", font=font(32), fill=CIER)
d.text((730, y + 90), "→ son prénom", font=font(32, bold=False), fill=CONT)
img.save(os.path.join(OUT, "s30_bilan.png"))

print("Illustrations générées (thèmes 1+2+3) :")
for f in sorted(os.listdir(OUT)):
    print("  -", f)

# ============================================================
# THÈME 4 — LE SON OUI (séances 31-40, Phonétique)
# ============================================================

def nuage(d, x, y, l, gouttes=0):
    """Nuage ; (x,y)=centre ; gouttes>0 = dessine des gouttes de pluie."""
    r = l // 4
    d.ellipse([x - l // 2, y - r, x - l // 2 + 2 * r, y + r], fill=(224, 231, 240), outline=CONT, width=3)
    d.ellipse([x - r, y - r - r // 2, x + r, y + r + r // 2], fill=(224, 231, 240), outline=CONT, width=3)
    d.ellipse([x + l // 2 - 2 * r, y - r, x + l // 2, y + r], fill=(224, 231, 240), outline=CONT, width=3)
    d.rectangle([x - l // 2 + r, y, x + l // 2 - r, y + r], fill=(224, 231, 240))
    for gx in (-1, 0, 1):
        d.line([x - l // 2 + r + gx * r, y, x - l // 2 + r + gx * r, y + r], fill=(224, 231, 240), width=6)
    if gouttes:
        for i in range(gouttes):
            gx = x - l // 3 + i * (l // max(1, gouttes - 1))
            d.polygon([(gx - 7, y + r + 18 + (i % 2) * 18), (gx + 7, y + r + 18 + (i % 2) * 18), (gx, y + r + 40 + (i % 2) * 18)], fill=BLEU, outline=CONT)

def carte_chiffre(d, cx, cy, chiffre, mot):
    d.rounded_rectangle([cx - 70, cy - 80, cx + 70, cy + 80], radius=16, fill=CIER, outline=CONT, width=4)
    d.text((cx - 30, cy - 65), chiffre, font=font(90), fill=ROUGE_F)
    f = font(30)
    bb = d.textbbox((0, 0), mot, font=f)
    d.text((cx - (bb[2] - bb[0]) // 2, cy + 28), mot, font=f, fill=CONT)

def pomme(d, x, y, t):
    d.ellipse([x - t, y - t, x + t, y + t], fill=ROUGE_F, outline=CONT, width=3)
    d.line([x, y - t, x, y - int(t * 1.5)], fill=(121, 85, 72), width=6)
    d.ellipse([x + 4, y - int(t * 1.6), x + int(t * 0.9), y - int(t * 1.1)], fill=VERT_F, outline=CONT)
    d.line([x + t - 6, y - 10, x + t + 6, y - 22], fill=CONT, width=3)

# 22. s31_son_oui.png — découverte du son OUI
img, d = nouvelle(1100, 560)
d.rectangle([40, 40, 320, 200], fill=(255, 253, 245), outline=CONT, width=4)
d.text((75, 55), "OUI", font=font(95), fill=ROUGE_F)
perso(d, 620, 250, 34, haut=VERT_F)
bulle(d, 0, 90, "Oui ! Oui ! Oui !", font(38), center_x=620)
carte_chiffre(d, 890, 240, "8", "huit")
nuage(d, 280, 330, 190, gouttes=3)
etiquette(d, 280, 430, "la pluie")
d.text((430, 70), "J'entends  OUI  dans :", font=font(38), fill=CONT)
etiquette(d, 890, 350, "le chiffre huit")
img.save(os.path.join(OUT, "s31_son_oui.png"))

# 23. s32_mots_oui.png — oui dans des mots courants
img, d = nouvelle(1100, 560)
d.text((330, 50), "DES MOTS AVEC  OUI :", font=font(42), fill=CONT)
pomme(d, 200, 300, 60)
etiquette(d, 200, 420, "le fruit")
lune(d, 480, 280, 60)
for i in range(4):
    sx, sy2 = 560 + (i % 2) * 40, 200 + (i // 2) * 45
    d.polygon([(sx, sy2 - 12), (sx + 4, sy2 - 4), (sx + 12, sy2 - 3), (sx + 6, sy2 + 3), (sx + 7, sy2 + 11), (sx, sy2 + 7), (sx - 7, sy2 + 11), (sx - 6, sy2 + 3), (sx - 12, sy2 - 3), (sx - 4, sy2 - 4)], fill=JAUNE_F, outline=CONT)
etiquette(d, 480, 420, "la nuit")
nuage(d, 780, 290, 200, gouttes=3)
etiquette(d, 780, 420, "la pluie")
carte_chiffre(d, 1000, 330, "8", "huit")
img.save(os.path.join(OUT, "s32_mots_oui.png"))

# 24. s33_oui_i_u.png — trois sons : I, U, OUI
img, d = nouvelle(1100, 560)
sons = [("I", "riz, tapis", (227, 242, 253), ROUGE_F, 40), ("U", "lune, rue", (255, 243, 224), BLEU_F, 400), ("OUI", "huit, pluie", (232, 245, 233), VERT_F, 760)]
for lettre, mots, fond, coul, x in sons:
    d.rounded_rectangle([x, 40, x + 300, 440], radius=20, fill=fond, outline=CONT, width=4)
    d.text((x + 90, 70), lettre, font=font(90), fill=coul)
    f = font(34, bold=False)
    d.text((x + 60, 220), mots, font=f, fill=CONT)
    d.text((x + 40, 300), "bouche :", font=font(30), fill=CONT)
d.text((75, 360), "sourit", font=font(34), fill=ROUGE_F)
d.text((435, 360), "ronde", font=font(34), fill=BLEU_F)
d.text((770, 350), "ronde PUIS", font=font(30), fill=VERT_F)
d.text((770, 390), "sourit !", font=font(30), fill=VERT_F)
d.text((330, 480), "I, U ou OUI ? J'écoute et je choisis !", font=font(38), fill=CONT)
img.save(os.path.join(OUT, "s33_oui_i_u.png"))

# 25. s35_comptine_oui.png — affiche comptine OUI
img, d = nouvelle(1100, 620)
d.rounded_rectangle([40, 30, 1060, 590], radius=26, fill=(255, 253, 245), outline=CONT, width=5)
d.text((330, 60), "MA COMPTINE  OUI", font=font(44), fill=ROUGE_F)
vers = [
    "Oui, oui, oui ! dit Petit Lui,",
    "huit gouttes de pluie tombent la nuit.",
    "Un fruit, deux fruits, j'ai tout compris :",
    "oui, oui, oui, je les dis : merci !",
]
y = 190
for v in vers:
    d.text((230, y), v, font=font(38, bold=False), fill=CONT)
    y += 70
nuage(d, 230, 520, 150, gouttes=2)
lune(d, 880, 520, 36)
img.save(os.path.join(OUT, "s35_comptine_oui.png"))

# 26. s36_articule_oui.png — articulation : U + I = OUI
img, d = nouvelle(1100, 520)
visage(d, 280, 230, 130, bouche="u")
d.text((190, 390), "la bouche RONDE", font=font(32), fill=BLEU_F)
d.text((240, 60), "U", font=font(80), fill=BLEU_F)
d.text((470, 200), "+", font=font(90), fill=CONT)
visage(d, 660, 230, 130, bouche="i")
d.text((575, 390), "puis elle SOURIT", font=font(32), fill=ROUGE_F)
d.text((620, 60), "I", font=font(80), fill=ROUGE_F)
d.text((850, 200), "=", font=font(90), fill=CONT)
d.text((920, 210), "OUI", font=font(70), fill=VERT_F)
d.text((110, 460), "La bouche ronde, puis elle sourit : ouiiii !", font=font(30), fill=CONT)
img.save(os.path.join(OUT, "s36_articule_oui.png"))

# 27. s40_performance_oui.png — performance finale OUI
img, d = nouvelle(1100, 520)
d.polygon([(480, 180), (620, 180), (600, 330), (500, 330)], fill=JAUNE_F, outline=CONT)
d.rectangle([530, 330, 570, 380], fill=JAUNE_F, outline=CONT)
d.rectangle([490, 380, 610, 420], fill=(121, 85, 72), outline=CONT)
d.arc([430, 180, 500, 260], 270, 90, fill=CONT, width=8)
d.arc([600, 180, 670, 260], 90, 270, fill=CONT, width=8)
d.text((500, 220), "OUI", font=font(46), fill=NOIR)
for sx, sy2 in [(400, 100), (700, 90), (550, 60), (380, 260), (720, 250)]:
    d.polygon([(sx, sy2 - 22), (sx + 7, sy2 - 7), (sx + 22, sy2 - 5), (sx + 11, sy2 + 5), (sx + 13, sy2 + 20), (sx, sy2 + 12), (sx - 13, sy2 + 20), (sx - 11, sy2 + 5), (sx - 22, sy2 - 5), (sx - 7, sy2 - 7)], fill=JAUNE_F, outline=CONT)
perso(d, 320, 300, 30, haut=BLEU_F, bras_up=True)
perso(d, 780, 300, 30, haut=VERT_F, bras_up=True)
d.rectangle([0, 420, 1100, 520], fill=(180, 205, 150))
img.save(os.path.join(OUT, "s40_performance_oui.png"))

print("Illustrations générées (thèmes 1+2+3+4) :")
for f in sorted(os.listdir(OUT)):
    print("  -", f)

# ============================================================
# THÈME 5 — LE SON U : NOUVEAUX MOTS (séances 41-50, Phonétique)
# ============================================================

def jupe(d, x, y, t):
    d.polygon([(x - t // 2, y - t // 2), (x + t // 2, y - t // 2), (x + t, y + t), (x - t, y + t)], fill=ROSE, outline=CONT)
    d.rectangle([x - t // 2, y - t // 2 - 10, x + t // 2, y - t // 2 + 6], fill=VIOLET, outline=CONT, width=3)

def mur_briques(d, x, y, l, h):
    d.rectangle([x, y, x + l, y + h], fill=(222, 196, 166), outline=CONT, width=3)
    for i in range(1, 4):
        d.line([x, y + i * h // 4, x + l, y + i * h // 4], fill=CONT, width=2)
    for j, yy in enumerate(range(y + h // 8, y + h, h // 4)):
        decal = (l // 6) if j % 2 else 0
        for xx in range(x + decal, x + l, l // 3):
            d.line([xx, yy, xx, yy + h // 4], fill=CONT, width=2)

def plume(d, x, y):
    d.ellipse([x - 38, y - 70, x + 38, y + 70], fill=(255, 253, 245), outline=CONT, width=3)
    d.line([x, y - 85, x, y + 85], fill=CONT, width=4)
    for yy in (-45, -15, 15, 45):
        d.line([x, y + yy, x + 26, y + yy + 10], fill=CONT, width=2)
        d.line([x, y + yy, x - 26, y + yy + 10], fill=CONT, width=2)

def fumee(d, x, y):
    for i, (dx, dy, r) in enumerate([(0, 0, 20), (14, -34, 15), (26, -62, 11), (36, -86, 8)]):
        d.ellipse([x + dx - r, y + dy - r, x + dx + r, y + dy + r], fill=(207, 216, 220), outline=CONT, width=3)

def roue(d, cx, cy, r):
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(121, 85, 72), outline=CONT, width=4)
    d.ellipse([cx - r // 3, cy - r // 3, cx + r // 3, cy + r // 3], fill=GRIS, outline=CONT, width=3)
    for a in range(0, 360, 45):
        d.line([cx + (r // 3) * math.cos(math.radians(a)), cy + (r // 3) * math.sin(math.radians(a)),
                cx + r * math.cos(math.radians(a)), cy + r * math.sin(math.radians(a))], fill=CONT, width=3)

# 28. s41_son_u_nouveaux.png — nouveaux mots avec U
img, d = nouvelle(1100, 560)
d.rectangle([40, 30, 260, 190], fill=(255, 253, 245), outline=CONT, width=4)
grande_lettre(d, 80, 40, "U", BLEU_F)
d.text((300, 70), "De NOUVEAUX mots avec U :", font=font(40), fill=CONT)
jupe(d, 360, 250, 60)
etiquette(d, 360, 420, "la jupe")
mur_briques(d, 500, 230, 160, 140)
etiquette(d, 580, 420, "le mur")
plume(d, 790, 290)
etiquette(d, 790, 420, "la plume")
fumee(d, 990, 330)
etiquette(d, 990, 420, "la fumée")
img.save(os.path.join(OUT, "s41_son_u_nouveaux.png"))

# 29. s42_classe_u.png — U dans les mots de la classe
img, d = nouvelle(1100, 560)
d.text((300, 50), "DANS MA CLASSE, J'ENTENDS U :", font=font(38), fill=CONT)
# bureau
d.rectangle([120, 260, 360, 290], fill=(121, 85, 72), outline=CONT, width=3)
d.line([150, 290, 150, 390], fill=(121, 85, 72), width=12)
d.line([330, 290, 330, 390], fill=(121, 85, 72), width=12)
etiquette(d, 240, 410, "le bureau")
# cahier
d.rectangle([470, 240, 600, 350], fill=(69, 90, 200), outline=CONT, width=3)
d.line([500, 240, 500, 350], fill=CIER, width=3)
etiquette(d, 535, 410, "un cahier")
# gomme
d.rounded_rectangle([700, 280, 800, 340], radius=10, fill=ROSE, outline=CONT, width=3)
etiquette(d, 750, 410, "une gomme")
# papier
d.polygon([(900, 240), (1010, 240), (1040, 270), (1040, 360), (900, 360)], fill=CIER, outline=CONT)
d.polygon([(1010, 240), (1010, 270), (1040, 270)], fill=(224, 231, 240), outline=CONT)
etiquette(d, 970, 410, "du papier")
img.save(os.path.join(OUT, "s42_classe_u.png"))

# 30. s43_u_ou_ou.png — U ou OU ?
img, d = nouvelle(1100, 560)
d.rectangle([30, 30, 520, 470], fill=(227, 242, 253), outline=CONT, width=4)
d.text((235, 55), "U", font=font(95), fill=BLEU_F)
d.text((120, 210), "rue  •  jupe  •  du", font=font(40, bold=False), fill=CONT)
d.text((120, 300), "bouche : RONDE", font=font(36), fill=BLEU_F)
d.line([550, 30, 550, 470], fill=CONT, width=4)
d.rectangle([580, 30, 1070, 470], fill=(232, 245, 233), outline=CONT, width=4)
d.text((780, 55), "OU", font=font(95), fill=VERT_F)
d.text((620, 210), "roue • loup • bonjour", font=font(34, bold=False), fill=CONT)
d.text((620, 300), "comme dans : « Bonjour ! »", font=font(30), fill=VERT_F)
roue(d, 750, 415, 34)
ft = font(36)
bb = d.textbbox((0, 0), "U ou OU ? J'écoute bien !", font=ft)
d.text(((1100 - (bb[2] - bb[0])) // 2, 490), "U ou OU ? J'écoute bien !", font=ft, fill=CONT)
img.save(os.path.join(OUT, "s43_u_ou_ou.png"))

# 31. s45_comptine_u.png — affiche comptine U
img, d = nouvelle(1100, 620)
d.rounded_rectangle([40, 30, 1060, 590], radius=26, fill=(255, 253, 245), outline=CONT, width=5)
d.text((390, 60), "MA COMPTINE  U", font=font(44), fill=ROUGE_F)
vers = [
    "U, U, la jupe de ma poupée,",
    "U, U, la plume envolée.",
    "Une bulle et de la fumée",
    "montent au-dessus du toit carré.",
    "Lundi, mardi, je répète :",
    "U, ma bouche est ronde, c'est parfait !",
]
y = 180
for v in vers:
    d.text((230, y), v, font=font(36, bold=False), fill=CONT)
    y += 62
# bulles décoratives (zone vide haut-droite, loin du texte)
for bx, by, br in [(920, 215, 22), (968, 185, 17), (1005, 160, 12)]:
    d.ellipse([bx - br, by - br, bx + br, by + br], fill=(219, 239, 252), outline=(41, 128, 185), width=3)
img.save(os.path.join(OUT, "s45_comptine_u.png"))

# 32. s50_performance_u.png — performance finale U
img, d = nouvelle(1100, 520)
d.polygon([(480, 180), (620, 180), (600, 330), (500, 330)], fill=JAUNE_F, outline=CONT)
d.rectangle([530, 330, 570, 380], fill=JAUNE_F, outline=CONT)
d.rectangle([490, 380, 610, 420], fill=(121, 85, 72), outline=CONT)
d.arc([430, 180, 500, 260], 270, 90, fill=CONT, width=8)
d.arc([600, 180, 670, 260], 90, 270, fill=CONT, width=8)
d.text((540, 220), "U", font=font(46), fill=NOIR)
for sx, sy2 in [(400, 100), (700, 90), (550, 60), (380, 260), (720, 250)]:
    d.polygon([(sx, sy2 - 22), (sx + 7, sy2 - 7), (sx + 22, sy2 - 5), (sx + 11, sy2 + 5), (sx + 13, sy2 + 20), (sx, sy2 + 12), (sx - 13, sy2 + 20), (sx - 11, sy2 + 5), (sx - 22, sy2 - 5), (sx - 7, sy2 - 7)], fill=JAUNE_F, outline=CONT)
perso(d, 320, 300, 30, haut=BLEU_F, bras_up=True)
perso(d, 780, 300, 30, haut=VERT_F, bras_up=True)
d.rectangle([0, 420, 1100, 520], fill=(180, 205, 150))
img.save(os.path.join(OUT, "s50_performance_u.png"))

print("Illustrations générées (thèmes 1-5) :")
for f in sorted(os.listdir(OUT)):
    print("  -", f)

# ============================================================
# THÈME 6 — LE VILLAGE (séances 51-60, Langage)
# ============================================================

def case_village(d, x, y, l, h, murcol=MUR, toitcol=TOIT, fenetre=True):
    # case : murs + toit de chaume ; (x,y) = coin haut-gauche des murs
    d.rectangle([x, y, x + l, y + h], fill=murcol, outline=CONT, width=3)
    d.polygon([(x - int(0.12 * l), y), (x + l + int(0.12 * l), y), (x + l // 2, y - int(0.5 * l))], fill=toitcol, outline=CONT)
    dw = l // 4
    d.rectangle([x + l // 2 - dw // 2, y + int(0.45 * h), x + l // 2 + dw // 2, y + h], fill=(160, 110, 60), outline=CONT, width=3)
    if fenetre and l >= 120:
        ww = l // 6
        d.rectangle([x + int(0.12 * l), y + int(0.25 * h), x + int(0.12 * l) + ww, y + int(0.25 * h) + ww], fill=BLEU, outline=CONT, width=2)
        d.rectangle([x + l - int(0.12 * l) - ww, y + int(0.25 * h), x + l - int(0.12 * l), y + int(0.25 * h) + ww], fill=BLEU, outline=CONT, width=2)


def puits(d, cx, yb, s=1.0):
    # puits : bassin en pierre + 2 poteaux + toit + corde et seau ; yb = base au sol
    w = int(120 * s); h = int(52 * s); ph = int(70 * s)
    d.rounded_rectangle([cx - w // 2, yb - h, cx + w // 2, yb], radius=8, fill=GRIS, outline=CONT, width=3)
    d.line([cx - w // 2 + 8, yb - h, cx - w // 2 + 8, yb - h - ph], fill=CONT, width=4)
    d.line([cx + w // 2 - 8, yb - h, cx + w // 2 - 8, yb - h - ph], fill=CONT, width=4)
    d.polygon([(cx - w // 2 - int(14 * s), yb - h - ph), (cx + w // 2 + int(14 * s), yb - h - ph), (cx, yb - h - ph - int(38 * s))], fill=TOIT, outline=CONT)
    d.line([cx, yb - h - ph + 6, cx, yb - h - int(14 * s)], fill=CONT, width=3)
    bw = int(18 * s)
    d.rectangle([cx - bw // 2, yb - h - int(14 * s), cx + bw // 2, yb - h - int(2 * s)], fill=(160, 110, 60), outline=CONT, width=2)


def arbre(d, cx, yb, s=1.0):
    # arbre : tronc + feuillage en nuage ; yb = base du tronc au sol
    tw = int(22 * s); th = int(120 * s)
    d.rectangle([cx - tw // 2, yb - th, cx + tw // 2, yb], fill=(121, 85, 72), outline=CONT, width=3)
    fr = int(60 * s); fy = yb - th - fr // 3
    for dx, dy, rr in [(-0.7, 0.15, 0.7), (0.7, 0.15, 0.7), (0, -0.55, 0.75), (0, 0, 1.0)]:
        rr2 = int(rr * fr)
        x0 = cx + int(dx * fr) - rr2; y0 = fy + int(dy * fr) - rr2
        d.ellipse([x0, y0, x0 + 2 * rr2, y0 + 2 * rr2], fill=VERT, outline=CONT, width=3)


def chat(d, cx, cy, t):
    # petit chat plat ; (cx,cy) = centre du corps
    d.ellipse([cx - t, cy - t // 2, cx + t, cy + int(1.1 * t)], fill=ORANGE, outline=CONT, width=3)
    hr = int(0.55 * t); hx, hy = cx, cy - int(0.85 * t)
    d.polygon([(hx - hr + 2, hy - hr // 2), (hx - hr // 2, hy - hr), (hx - int(0.9 * hr), hy - 2 * hr)], fill=ORANGE, outline=CONT)
    d.polygon([(hx + hr - 2, hy - hr // 2), (hx + hr // 2, hy - hr), (hx + int(0.9 * hr), hy - 2 * hr)], fill=ORANGE, outline=CONT)
    d.ellipse([hx - hr, hy - hr, hx + hr, hy + hr], fill=ORANGE, outline=CONT, width=3)
    er = max(2, t // 10)
    d.ellipse([hx - hr // 2 - er, hy - er, hx - hr // 2 + er, hy + er], fill=NOIR)
    d.ellipse([hx + hr // 2 - er, hy - er, hx + hr // 2 + er, hy + er], fill=NOIR)
    d.arc([cx + t - 8, cy - 4, cx + int(1.7 * t), cy + int(1.2 * t)], 250, 60, fill=CONT, width=5)


def boutique(d, x, y, l, h):
    # boutique : murs + auvent rayé + porte
    d.rectangle([x, y, x + l, y + h], fill=MUR, outline=CONT, width=3)
    d.rectangle([x + l // 2 - l // 8, y + int(0.45 * h), x + l // 2 + l // 8, y + h], fill=(160, 110, 60), outline=CONT, width=3)
    n = 5; sw = l // n
    for i in range(n):
        col = ROSE if i % 2 == 0 else CIER
        d.rectangle([x + i * sw, y, x + (i + 1) * sw, y + int(0.22 * h)], fill=col, outline=CONT, width=2)


# 33. s51_mon_village.png — affiche du village
img, d = nouvelle(1100, 560)
soleil(d, 90, 90, 45)
sol(d, 0, 1100, 452)
case_village(d, 60, 335, 130, 115, fenetre=False)
case_village(d, 210, 335, 130, 115)
d.rectangle([400, 305, 610, 452], fill=MUR, outline=CONT, width=3)
d.polygon([(385, 305), (625, 305), (505, 210)], fill=VERT_F, outline=CONT)
panneau(d, 435, 316, 140, 44, "ÉCOLE", VERT_F)
arbre(d, 655, 452, 0.75)
d.rectangle([487, 380, 523, 452], fill=(160, 110, 60), outline=CONT, width=3)
d.rectangle([418, 378, 452, 408], fill=BLEU, outline=CONT, width=2)
d.rectangle([558, 378, 592, 408], fill=BLEU, outline=CONT, width=2)
boutique(d, 700, 335, 140, 115)
puits(d, 980, 452, 1.0)
etiquette(d, 200, 478, "les cases")
etiquette(d, 505, 478, "l'école")
etiquette(d, 770, 478, "la boutique")
etiquette(d, 980, 478, "le puits")
ft = font(44)
bb = d.textbbox((0, 0), "MON VILLAGE", font=ft)
d.text(((1100 - (bb[2] - bb[0])) // 2, 28), "MON VILLAGE", font=ft, fill=CONT)
img.save(os.path.join(OUT, "s51_mon_village.png"))

# 34. s53_il_y_a.png — il y a / il n'y a pas
img, d = nouvelle(1100, 560)
d.rounded_rectangle([40, 30, 520, 460], radius=20, fill=(232, 245, 233), outline=CONT, width=4)
d.rounded_rectangle([580, 30, 1060, 460], radius=20, fill=(253, 235, 236), outline=CONT, width=4)
ft = font(58)
bb = d.textbbox((0, 0), "IL Y A", font=ft)
d.text((280 - (bb[2] - bb[0]) // 2, 52), "IL Y A", font=ft, fill=VERT_F)
case_village(d, 100, 265, 110, 95, fenetre=False)
d.rectangle([240, 255, 380, 360], fill=MUR, outline=CONT, width=3)
d.polygon([(228, 255), (392, 255), (310, 185)], fill=VERT_F, outline=CONT)
d.rectangle([292, 305, 328, 360], fill=(160, 110, 60), outline=CONT, width=2)
puits(d, 455, 360, 0.75)
ft = font(26)
bb = d.textbbox((0, 0), "une école, un puits,", font=ft)
d.text((280 - (bb[2] - bb[0]) // 2, 385), "une école, un puits,", font=ft, fill=CONT)
bb = d.textbbox((0, 0), "des cases...", font=ft)
d.text((280 - (bb[2] - bb[0]) // 2, 418), "des cases...", font=ft, fill=CONT)
ft = font(50)
bb = d.textbbox((0, 0), "IL N'Y A PAS", font=ft)
d.text((820 - (bb[2] - bb[0]) // 2, 55), "IL N'Y A PAS", font=ft, fill=ROUGE_F)
d.rounded_rectangle([710, 225, 930, 300], radius=12, fill=BLEU_F, outline=CONT, width=3)
d.rectangle([805, 235, 860, 268], fill=CIER, outline=CONT, width=2)
d.rectangle([722, 190, 748, 225], fill=ROUGE_F, outline=CONT, width=3)
roue(d, 755, 315, 22)
roue(d, 885, 315, 22)
d.line([690, 348, 950, 348], fill=CONT, width=5)
d.line([680, 180, 960, 345], fill=ROUGE_F, width=12)
d.line([960, 180, 680, 345], fill=ROUGE_F, width=12)
ft = font(26)
bb = d.textbbox((0, 0), "pas de train dans mon village !", font=ft)
d.text((820 - (bb[2] - bb[0]) // 2, 400), "pas de train dans mon village !", font=ft, fill=CONT)
ft = font(30)
msg = "Dans mon village, il y a une école. Il n'y a pas de train."
bb = d.textbbox((0, 0), msg, font=ft)
d.text(((1100 - (bb[2] - bb[0])) // 2, 505), msg, font=ft, fill=CONT)
img.save(os.path.join(OUT, "s53_il_y_a.png"))

# 35. s55_comptine_village.png — affiche comptine du village
img, d = nouvelle(1100, 620)
d.rounded_rectangle([40, 30, 1060, 590], radius=26, fill=(255, 253, 245), outline=CONT, width=5)
ft = font(42)
bb = d.textbbox((0, 0), "LA COMPTINE DU VILLAGE", font=ft)
d.text(((1100 - (bb[2] - bb[0])) // 2, 60), "LA COMPTINE DU VILLAGE", font=ft, fill=ROUGE_F)
vers = [
    "Mon village, c'est mon chez-moi,",
    "mes cases dorment sous le toit.",
    "L'école ouvre ses grands livres,",
    "au puits, l'eau rit quand on arrive.",
    "Au marché, je dis bonjour,",
    "mon village est plein d'amour !",
]
y = 180
for v in vers:
    d.text((230, y), v, font=font(34, bold=False), fill=CONT)
    y += 62
case_village(d, 870, 465, 80, 62, fenetre=False, toitcol=VERT_F)
case_village(d, 965, 465, 80, 62, fenetre=False)
puits(d, 880, 560, 0.6)
img.save(os.path.join(OUT, "s55_comptine_village.png"))

# 36. s57_ou_est_chat.png — où est le chat ? (positions)
img, d = nouvelle(1100, 560)
ft = font(42)
bb = d.textbbox((0, 0), "OÙ EST LE CHAT ?", font=ft)
d.text(((1100 - (bb[2] - bb[0])) // 2, 30), "OÙ EST LE CHAT ?", font=ft, fill=CONT)
# scène 1 : sur la table (cx=145)
d.rectangle([65, 260, 225, 282], fill=(160, 110, 60), outline=CONT, width=3)
d.rectangle([85, 282, 102, 360], fill=(160, 110, 60), outline=CONT, width=3)
d.rectangle([188, 282, 205, 360], fill=(160, 110, 60), outline=CONT, width=3)
chat(d, 145, 232, 24)
# scène 2 : sous la table (cx=385)
d.rectangle([305, 260, 465, 282], fill=(160, 110, 60), outline=CONT, width=3)
d.rectangle([325, 282, 342, 360], fill=(160, 110, 60), outline=CONT, width=3)
d.rectangle([428, 282, 445, 360], fill=(160, 110, 60), outline=CONT, width=3)
chat(d, 385, 318, 24)
# scène 3 : dans la boîte (cx=635)
chat(d, 635, 275, 24)
d.rectangle([565, 292, 705, 360], fill=ROSE, outline=CONT, width=4)
d.polygon([(565, 292), (635, 258), (705, 292)], fill=(247, 173, 200), outline=CONT, width=3)
# scène 4 : derrière l'arbre (cx=900)
chat(d, 878, 322, 22)
d.rectangle([890, 245, 912, 360], fill=(121, 85, 72), outline=CONT, width=3)
fr = 62
for dx, dy, rr in [(-0.7, 0.15, 0.7), (0.7, 0.15, 0.7), (0, -0.55, 0.75), (0, 0, 1.0)]:
    rr2 = int(rr * fr)
    x0 = 901 + int(dx * fr) - rr2; y0 = 175 + int(dy * fr) - rr2
    d.ellipse([x0, y0, x0 + 2 * rr2, y0 + 2 * rr2], fill=VERT, outline=CONT, width=3)
etiquette(d, 145, 408, "sur la table")
etiquette(d, 385, 408, "sous la table")
etiquette(d, 635, 408, "dans la boîte")
etiquette(d, 900, 408, "derrière l'arbre")
img.save(os.path.join(OUT, "s57_ou_est_chat.png"))

# 37. s60_performance_village.png — performance finale
img, d = nouvelle(1100, 520)
d.rectangle([0, 420, 1100, 520], fill=(180, 205, 150))
case_village(d, 55, 345, 105, 78, fenetre=False)
puits(d, 225, 422, 0.62)
case_village(d, 855, 345, 105, 78, fenetre=False)
arbre(d, 1005, 422, 0.85)
d.polygon([(480, 170), (620, 170), (600, 320), (500, 320)], fill=JAUNE_F, outline=CONT)
d.rectangle([530, 320, 570, 370], fill=JAUNE_F, outline=CONT)
d.rectangle([490, 370, 610, 410], fill=(121, 85, 72), outline=CONT)
d.arc([430, 170, 500, 250], 270, 90, fill=CONT, width=8)
d.arc([600, 170, 670, 250], 90, 270, fill=CONT, width=8)
ft = font(54)
bb = d.textbbox((0, 0), "V", font=ft)
d.text((550 - (bb[2] - bb[0]) // 2, 195), "V", font=ft, fill=NOIR)
for sx, sy2 in [(400, 95), (550, 55), (700, 95), (390, 250), (715, 245)]:
    d.polygon([(sx, sy2 - 22), (sx + 7, sy2 - 7), (sx + 22, sy2 - 5), (sx + 11, sy2 + 5), (sx + 13, sy2 + 20), (sx, sy2 + 12), (sx - 13, sy2 + 20), (sx - 11, sy2 + 5), (sx - 22, sy2 - 5), (sx - 7, sy2 - 7)], fill=JAUNE_F, outline=CONT)
perso(d, 320, 300, 30, haut=BLEU_F, bras_up=True)
perso(d, 780, 300, 30, haut=VERT_F, bras_up=True)
img.save(os.path.join(OUT, "s60_performance_village.png"))

print("Illustrations du thème 6 générées.")

# ============================================================
# THÈME 7 — LE SON GN (séances 61-70, Phonétique)
# ============================================================

def montagne(d, x, y, l, h):
    # montagne : 2 pics gris + neige ; (x,y) = base gauche
    d.polygon([(x + int(0.45 * l), y), (x + int(0.8 * l), y - int(0.75 * h)), (x + int(1.15 * l), y)], fill=GRIS, outline=CONT)
    d.polygon([(x, y), (x + int(0.55 * l), y - h), (x + l, y)], fill=(150, 158, 165), outline=CONT)
    d.polygon([(x + int(0.55 * l) - int(0.11 * l), y - int(0.78 * h)), (x + int(0.55 * l), y - h), (x + int(0.55 * l) + int(0.11 * l), y - int(0.78 * h))], fill=CIER, outline=CONT)


def agneau(d, cx, cy, t):
    # petit mouton : corps nuage + tête ; (cx,cy) = centre du corps
    for dx, dy, rr in [(-0.55, 0.05, 0.5), (0, -0.12, 0.55), (0.55, 0.05, 0.5), (0, 0.12, 0.5)]:
        r2 = int(rr * t)
        x0 = cx + int(dx * t) - r2; y0 = cy + int(dy * t) - r2
        d.ellipse([x0, y0, x0 + 2 * r2, y0 + 2 * r2], fill=CIER, outline=CONT, width=3)
    for px in [cx - int(0.5 * t), cx - int(0.2 * t), cx + int(0.2 * t), cx + int(0.5 * t)]:
        d.line([px, cy + int(0.5 * t), px, cy + int(0.95 * t)], fill=CONT, width=4)
    hr = int(0.3 * t); hx, hy = cx + int(0.85 * t), cy - int(0.5 * t)
    d.ellipse([hx - hr - 7, hy, hx - hr + 7, hy + 12], fill=TERRE, outline=CONT, width=2)
    d.ellipse([hx - hr, hy - hr, hx + hr, hy + hr], fill=TERRE, outline=CONT, width=3)
    er = max(2, t // 16)
    d.ellipse([hx - 2, hy - 7, hx - 2 + 2 * er, hy - 7 + 2 * er], fill=NOIR)


def peigne(d, cx, cy, t):
    # peigne horizontal : manche + dents ; (cx,cy) = centre
    d.rounded_rectangle([cx - int(1.2 * t), cy - int(0.45 * t), cx + int(1.2 * t), cy - int(0.1 * t)], radius=8, fill=ROSE, outline=CONT, width=3)
    tw = int(0.13 * t)
    for i in range(6):
        tx = cx - int(1.05 * t) + i * int(0.42 * t)
        d.rectangle([tx, cy - int(0.1 * t), tx + tw, cy + int(0.5 * t)], fill=ROSE, outline=CONT, width=2)


def champ(d, x, y, l, h):
    # champ de campagne : parcelle + sillons
    d.rectangle([x, y, x + l, y + h], fill=(206, 226, 166), outline=CONT, width=3)
    for i in [0.28, 0.55, 0.82]:
        d.line([x + 6, y + int(i * h), x + l - 6, y + int(i * h)], fill=CONT, width=2)
    for sx, sy in [(-0.25, 0.12), (0.1, 0.12), (0.42, 0.12)]:
        x0 = x + int((0.5 + sx) * l); y0 = y + int(sy * h)
        d.line([x0, y0 + 12, x0, y0], fill=VERT_F, width=4)
        d.ellipse([x0 - 5, y0 - 6, x0 + 5, y0 + 4], fill=VERT_F, outline=CONT, width=2)


def oignon(d, cx, cy, t):
    # oignon : bulbe doré + pousses ; (cx,cy) = centre du bulbe
    d.ellipse([cx - int(0.7 * t), cy - int(0.6 * t), cx + int(0.7 * t), cy + int(0.7 * t)], fill=(223, 168, 96), outline=CONT, width=3)
    d.arc([cx - int(0.28 * t), cy - int(0.55 * t), cx + int(0.28 * t), cy + int(0.65 * t)], 250, 470, fill=CONT, width=2)
    for dx in (-0.22, 0, 0.22):
        x0 = cx + int(dx * t)
        d.line([x0, cy - int(0.5 * t), x0 + int(0.18 * t), cy - int(1.15 * t)], fill=VERT_F, width=5)
    for dx in (-0.3, -0.1, 0.1, 0.3):
        d.line([cx + int(dx * t), cy + int(0.66 * t), cx + int(dx * t) + 4, cy + int(0.85 * t)], fill=CONT, width=2)


def cigogne(d, cx, cy, t):
    # cigogne blanche : corps, aile noire, long cou, bec rouge, 1 patte ; (cx,cy) = centre du corps
    d.line([cx - int(0.2 * t), cy + int(0.5 * t), cx - int(0.2 * t), cy + int(1.15 * t)], fill=CONT, width=4)
    d.line([cx + int(0.2 * t), cy + int(0.5 * t), cx + int(0.55 * t), cy + int(0.9 * t), cx + int(0.55 * t), cy + int(1.15 * t)], fill=CONT, width=4)
    d.ellipse([cx - int(0.9 * t), cy - int(0.45 * t), cx + int(0.9 * t), cy + int(0.55 * t)], fill=CIER, outline=CONT, width=3)
    d.ellipse([cx - int(0.55 * t), cy - int(0.25 * t), cx + int(0.45 * t), cy + int(0.45 * t)], fill=(90, 98, 105), outline=CONT, width=2)
    d.line([cx + int(0.65 * t), cy - int(0.2 * t), cx + int(0.85 * t), cy - int(0.95 * t)], fill=CONT, width=5)
    hr = int(0.2 * t); hx, hy = cx + int(0.95 * t), cy - int(1.05 * t)
    d.ellipse([hx - hr, hy - hr, hx + hr, hy + hr], fill=CIER, outline=CONT, width=3)
    d.ellipse([hx + int(0.08 * t), hy - 6, hx + int(0.08 * t) + 5, hy - 1], fill=NOIR)
    d.polygon([(hx + hr - 2, hy - 5), (hx + hr - 2, hy + 6), (hx + int(1.5 * t), hy + 4)], fill=ROUGE_F, outline=CONT)


def couronne(d, cx, cy, t):
    # couronne de reine ; (cx,cy) = centre
    pts = [(cx - int(0.6 * t), cy + int(0.35 * t)), (cx - int(0.6 * t), cy - int(0.15 * t)),
           (cx - int(0.3 * t), cy + int(0.05 * t)), (cx, cy - int(0.4 * t)),
           (cx + int(0.3 * t), cy + int(0.05 * t)), (cx + int(0.6 * t), cy - int(0.15 * t)),
           (cx + int(0.6 * t), cy + int(0.35 * t))]
    d.polygon(pts, fill=JAUNE_F, outline=CONT)


def nuage_simple(d, cx, cy, t):
    # petit nuage ; (cx,cy) = centre
    for dx, dy, rr in [(-0.5, 0.1, 0.45), (0.5, 0.1, 0.45), (0, -0.2, 0.6), (0, 0.15, 0.5)]:
        r2 = int(rr * t)
        x0 = cx + int(dx * t) - r2; y0 = cy + int(dy * t) - r2
        d.ellipse([x0, y0, x0 + 2 * r2, y0 + 2 * r2], fill=(236, 244, 250), outline=CONT, width=3)


def centre_texte(d, cx, y, texte, taille, couleur, bold=True):
    ft = font(taille, bold=bold)
    bb = d.textbbox((0, 0), texte, font=ft)
    d.text((cx - (bb[2] - bb[0]) // 2, y), texte, font=ft, fill=couleur)


# 38. s61_son_gn.png — nouveaux mots avec GN
img, d = nouvelle(1100, 560)
d.rounded_rectangle([40, 40, 260, 190], radius=16, fill=(255, 253, 245), outline=CONT, width=5)
centre_texte(d, 150, 62, "GN", 95, BLEU_F)
d.text((300, 92), "De NOUVEAUX mots avec GN :", font=font(42), fill=CONT)
montagne(d, 240, 400, 150, 165)
champ(d, 420, 285, 155, 115)
agneau(d, 690, 330, 50)
peigne(d, 880, 315, 42)
def etiquette_petite(d, cx, y, texte):
    f = font(24)
    bb = d.textbbox((0, 0), texte, font=f)
    w = bb[2] - bb[0]
    d.rounded_rectangle([cx - w // 2 - 14, y, cx + w // 2 + 14, y + 44], radius=10, fill=(255, 253, 245), outline=CONT, width=3)
    d.text((cx - w // 2, y + 8 - bb[1]), texte, font=f, fill=NOIR)
etiquette_petite(d, 318, 444, "montagne")
etiquette_petite(d, 509, 444, "campagne")
etiquette_petite(d, 690, 444, "agneau")
etiquette_petite(d, 880, 444, "peigne")
img.save(os.path.join(OUT, "s61_son_gn.png"))

# 39. s62_mots_gn.png — encore des mots avec GN
img, d = nouvelle(1100, 560)
centre_texte(d, 550, 32, "ENCORE DES MOTS AVEC GN :", 42, CONT)
oignon(d, 300, 320, 55)
d.rectangle([410, 255, 590, 282], fill=(255, 241, 178), outline=CONT, width=3)
for tx in range(425, 585, 22):
    d.line([tx, 255, tx, 268], fill=CONT, width=2)
d.line([395, 330, 585, 330], fill=BLEU_F, width=5)
d.polygon([(600, 330), (580, 322), (580, 338)], fill=BLEU_F, outline=CONT)
d.rectangle([674, 250, 686, 400], fill=GRIS, outline=CONT, width=2)
d.polygon([(680, 155), (618, 252), (742, 252)], fill=(255, 249, 230), outline=ROUGE_F)
centre_texte(d, 680, 185, "!", 42, ROUGE_F)
cigogne(d, 890, 320, 58)
etiquette(d, 300, 440, "l'oignon")
etiquette(d, 497, 440, "la ligne")
etiquette(d, 680, 440, "le signe")
etiquette(d, 890, 440, "la cigogne")
img.save(os.path.join(OUT, "s62_mots_gn.png"))

# 40. s63_gn_ou_n.png — GN ou N ?
img, d = nouvelle(1100, 560)
d.rounded_rectangle([40, 30, 520, 460], radius=20, fill=(232, 240, 252), outline=CONT, width=4)
d.rounded_rectangle([580, 30, 1060, 460], radius=20, fill=(232, 245, 233), outline=CONT, width=4)
centre_texte(d, 280, 48, "GN", 58, BLEU_F)
montagne(d, 105, 300, 105, 115)
peigne(d, 345, 265, 38)
centre_texte(d, 280, 330, "montagne • agneau • peigne", 26, CONT, bold=False)
centre_texte(d, 280, 368, "comme dans : « montagne »", 28, BLEU_F)
centre_texte(d, 280, 408, "la langue monte au palais !", 25, CONT, bold=False)
centre_texte(d, 820, 48, "N", 58, VERT_F)
nuage_simple(d, 730, 220, 45)
couronne(d, 940, 255, 42)
centre_texte(d, 820, 330, "nuage • nage • reine", 26, CONT, bold=False)
centre_texte(d, 820, 368, "comme dans : « nuage »", 28, VERT_F)
centre_texte(d, 820, 408, "le N tout simple, sans GN !", 25, CONT, bold=False)
centre_texte(d, 550, 490, "GN ou N ? J'écoute bien !", 36, CONT)
img.save(os.path.join(OUT, "s63_gn_ou_n.png"))

# 41. s65_comptine_gn.png — affiche comptine GN
img, d = nouvelle(1100, 620)
d.rounded_rectangle([40, 30, 1060, 590], radius=26, fill=(255, 253, 245), outline=CONT, width=5)
centre_texte(d, 550, 60, "LA COMPTINE GN", 42, ROUGE_F)
vers = [
    "GN, GN, la grande montagne,",
    "GN, GN, la jolie campagne.",
    "Un agneau gagne le chemin,",
    "et la cigogne vole au loin.",
    "Avec mon peigne, mon oignon,",
    "je gagne la maison, c'est bon !",
]
y = 180
for v in vers:
    d.text((230, y), v, font=font(34, bold=False), fill=CONT)
    y += 62
montagne(d, 820, 552, 115, 85)
agneau(d, 995, 505, 26)
img.save(os.path.join(OUT, "s65_comptine_gn.png"))

# 42. s70_performance_gn.png — performance finale GN
img, d = nouvelle(1100, 520)
d.rectangle([0, 420, 1100, 520], fill=(180, 205, 150))
montagne(d, 40, 420, 190, 195)
montagne(d, 830, 420, 190, 195)
d.polygon([(480, 170), (620, 170), (600, 320), (500, 320)], fill=JAUNE_F, outline=CONT)
d.rectangle([530, 320, 570, 370], fill=JAUNE_F, outline=CONT)
d.rectangle([490, 370, 610, 410], fill=(121, 85, 72), outline=CONT)
d.arc([430, 170, 500, 250], 270, 90, fill=CONT, width=8)
d.arc([600, 170, 670, 250], 90, 270, fill=CONT, width=8)
centre_texte(d, 550, 200, "GN", 44, NOIR)
for sx, sy2 in [(400, 95), (550, 55), (700, 95), (390, 250), (715, 245)]:
    d.polygon([(sx, sy2 - 22), (sx + 7, sy2 - 7), (sx + 22, sy2 - 5), (sx + 11, sy2 + 5), (sx + 13, sy2 + 20), (sx, sy2 + 12), (sx - 13, sy2 + 20), (sx - 11, sy2 + 5), (sx - 22, sy2 - 5), (sx - 7, sy2 - 7)], fill=JAUNE_F, outline=CONT)
perso(d, 320, 300, 30, haut=BLEU_F, bras_up=True)
perso(d, 780, 300, 30, haut=VERT_F, bras_up=True)
img.save(os.path.join(OUT, "s70_performance_gn.png"))

print("Illustrations du thème 7 générées.")
