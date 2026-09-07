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
