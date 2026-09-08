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
def etiquette_petite(d, cx, y, texte):
    f = font(24)
    bb = d.textbbox((0, 0), texte, font=f)
    w = bb[2] - bb[0]
    d.rounded_rectangle([cx - w // 2 - 14, y, cx + w // 2 + 14, y + 44], radius=10, fill=(255, 253, 245), outline=CONT, width=3)
    d.text((cx - w // 2, y + 8 - bb[1]), texte, font=f, fill=NOIR)


def centre_texte(d, cx, y, texte, taille, couleur, bold=True):
    ft = font(taille, bold=bold)
    bb = d.textbbox((0, 0), texte, font=ft)
    d.text((cx - (bb[2] - bb[0]) // 2, y), texte, font=ft, fill=couleur)


def roue(d, cx, cy, r):
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(139, 195, 74), outline=CONT, width=4)
    d.ellipse([cx - r // 3, cy - r // 3, cx + r // 3, cy + r // 3], fill=GRIS, outline=CONT, width=2)
    for a in range(0, 360, 45):
        x1 = cx + (r // 3) * math.cos(math.radians(a))
        y1 = cy + (r // 3) * math.sin(math.radians(a))
        x2 = cx + r * math.cos(math.radians(a))
        y2 = cy + r * math.sin(math.radians(a))
        d.line([x1, y1, x2, y2], fill=CONT, width=3)


def arbre(d, cx, yb, s=1.0):
    tw = int(22 * s); th = int(120 * s)
    d.rectangle([cx - tw // 2, yb - th, cx + tw // 2, yb], fill=(121, 85, 72), outline=CONT, width=3)
    fr = int(60 * s); fy = yb - th - fr // 3
    for dx, dy, rr in [(-0.7, 0.15, 0.7), (0.7, 0.15, 0.7), (0, -0.55, 0.75), (0, 0, 1.0)]:
        rr2 = int(rr * fr)
        x0 = cx + int(dx * fr) - rr2; y0 = fy + int(dy * fr) - rr2
        d.ellipse([x0, y0, x0 + 2 * rr2, y0 + 2 * rr2], fill=VERT, outline=CONT, width=3)


def tasse(d, cx, cy, t):
    d.rounded_rectangle([cx - int(0.8 * t), cy - int(0.5 * t), cx + int(0.8 * t), cy + int(0.6 * t)], radius=8, fill=CIER, outline=CONT, width=3)
    d.rectangle([cx - int(0.8 * t), cy - int(0.15 * t), cx + int(0.8 * t), cy - int(0.02 * t)], fill=(121, 85, 72))
    d.arc([cx + int(0.7 * t), cy - int(0.35 * t), cx + int(1.3 * t), cy + int(0.35 * t)], 270, 90, fill=CONT, width=4)
    d.arc([cx - int(0.35 * t), cy - int(0.95 * t), cx - int(0.05 * t), cy - int(0.55 * t)], 90, 270, fill=GRIS, width=3)
    d.arc([cx + int(0.05 * t), cy - int(1.05 * t), cx + int(0.35 * t), cy - int(0.6 * t)], 270, 90, fill=GRIS, width=3)


def velo(d, cx, cy, t):
    roue(d, cx - t, cy, int(0.45 * t))
    roue(d, cx + t, cy, int(0.45 * t))
    d.line([cx - t, cy, cx - int(0.2 * t), cy - int(0.55 * t), cx + int(0.45 * t), cy - int(0.55 * t), cx + t, cy], fill=ROUGE_F, width=5)
    d.line([cx - int(0.2 * t), cy - int(0.55 * t), cx + int(0.1 * t), cy, cx - t, cy], fill=ROUGE_F, width=5)
    d.line([cx + int(0.45 * t), cy - int(0.55 * t), cx + int(0.62 * t), cy - int(0.85 * t)], fill=CONT, width=5)
    d.line([cx + int(0.5 * t), cy - int(0.9 * t), cx + int(0.76 * t), cy - int(0.8 * t)], fill=CONT, width=5)
    d.line([cx - int(0.2 * t), cy - int(0.55 * t), cx - int(0.3 * t), cy - int(0.9 * t)], fill=CONT, width=4)
    d.line([cx - int(0.42 * t), cy - int(0.9 * t), cx - int(0.18 * t), cy - int(0.9 * t)], fill=CONT, width=5)


def fanions(d, x1, x2, y):
    d.line([x1, y, x2, y], fill=CONT, width=3)
    n = 7; step = (x2 - x1) // n
    for i in range(n):
        fx = x1 + i * step
        col = [ROSE, JAUNE_F, VERT_F, BLEU_F, ORANGE, VIOLET, ROSE][i % 7]
        d.polygon([(fx, y), (fx + step, y), (fx + step // 2, y + 34)], fill=col, outline=CONT)


# 1. s1_je_mappelle.png — je me présente
img, d = nouvelle(1100, 560)
soleil(d, 90, 90, 45)
sol(d, 0, 1100, 470)
perso(d, 300, 280, 62, haut=BLEU_F)
d.ellipse([282, 445, 318, 458], fill=TERRE, outline=CONT, width=2)
bulle(d, 660, 175, "Bonjour ! Je m'appelle Rova.", center_x=660)
centre_texte(d, 660, 330, "La main sur la poitrine,", 32, CONT, bold=False)
centre_texte(d, 660, 375, "et je dis mon prénom !", 32, CONT, bold=False)
img.save(os.path.join(OUT, "s1_je_mappelle.png"))

# 2. s2_voici.png — voici... il/elle s'appelle...
img, d = nouvelle(1100, 560)
sol(d, 0, 1100, 470)
perso(d, 300, 300, 55, haut=BLEU_F)
perso(d, 800, 300, 55, haut=ROSE)
bulle(d, 300, 150, "Il s'appelle Koto.", center_x=300)
bulle(d, 800, 150, "Elle s'appelle Soa.", center_x=800)
etiquette_petite(d, 300, 440, "Koto (un garçon)")
etiquette_petite(d, 800, 440, "Soa (une fille)")
centre_texte(d, 550, 30, "VOICI KOTO ET SOA", 40, CONT)
img.save(os.path.join(OUT, "s2_voici.png"))

# 3. s3_dialogue.png — le dialogue de présentation
img, d = nouvelle(1100, 560)
sol(d, 0, 1100, 470)
perso(d, 230, 330, 52, haut=BLEU_F)
perso(d, 870, 330, 52, haut=VERT_F)
fb = font(26, bold=False)
bulle(d, 260, 145, "Bonjour ! Je m'appelle Rova.", f=fb, center_x=270)
bulle(d, 830, 145, "Je m'appelle Koto. Au revoir !", f=fb, center_x=830)
centre_texte(d, 550, 428, "Et toi, comment tu t'appelles ?", 30, BLEU_F)
img.save(os.path.join(OUT, "s3_dialogue.png"))

# 4. s6_devinette.png — jeu de devinette
img, d = nouvelle(1100, 560)
sol(d, 0, 1100, 470)
perso(d, 220, 310, 42, haut=BLEU_F)
perso(d, 550, 310, 42, haut=JAUNE_F)
perso(d, 880, 310, 42, haut=VERT_F)
d.rounded_rectangle([485, 125, 615, 230], radius=12, fill=BLEU, outline=CONT, width=4)
centre_texte(d, 550, 150, "?", 68, CIER)
bulle(d, 300, 130, "Qui est-ce ?", center_x=300)
centre_texte(d, 550, 505, "Qui est-ce, qui est-ce, dis-moi qui c'est !", 34, ROUGE_F)
img.save(os.path.join(OUT, "s6_devinette.png"))

# 5. s7_son_e.png — le son é
img, d = nouvelle(1100, 560)
d.rounded_rectangle([40, 40, 260, 190], radius=16, fill=(255, 253, 245), outline=CONT, width=5)
centre_texte(d, 150, 55, "é", 95, BLEU_F)
d.text((300, 92), "De nouveaux mots avec é :", font=font(42), fill=CONT)
# bébé : petit perso
perso(d, 330, 320, 30, haut=JAUNE_F)
etiquette_petite(d, 330, 430, "le bébé")
# école : bâtiment
d.rectangle([450, 285, 610, 430], fill=MUR, outline=CONT, width=3)
d.polygon([(438, 285), (622, 285), (530, 205)], fill=VERT_F, outline=CONT)
panneau(d, 480, 295, 100, 40, "ÉCOLE", VERT_F)
d.rectangle([512, 355, 548, 430], fill=(160, 110, 60), outline=CONT, width=3)
d.rectangle([468, 350, 496, 375], fill=BLEU, outline=CONT, width=2)
d.rectangle([564, 350, 592, 375], fill=BLEU, outline=CONT, width=2)
etiquette_petite(d, 530, 450, "l'école")
# café
tasse(d, 740, 330, 50)
etiquette_petite(d, 740, 430, "le café")
# vélo
velo(d, 950, 380, 55)
etiquette_petite(d, 950, 450, "le vélo")
img.save(os.path.join(OUT, "s7_son_e.png"))

# 6. s9_phrases_e.png — je lis des phrases avec é
img, d = nouvelle(1100, 620)
d.rounded_rectangle([40, 30, 1060, 590], radius=26, fill=(255, 253, 245), outline=CONT, width=5)
centre_texte(d, 550, 60, "JE LIS DES PHRASES AVEC É", 40, ROUGE_F)
phrases = [
    ["Le ", "bébé", " est à l'", "école", "."],
    ["Papa boit un ", "café", "."],
    ["J'ai un ", "vélo", "."],
    ["La ", "télé", " est allumée."],
]
f36 = font(36, bold=False)
y = 175
for ph in phrases:
    x = 160
    for mot in ph:
        bb = d.textbbox((0, 0), mot, font=f36)
        w = bb[2] - bb[0]
        if mot in ("bébé", "école", "café", "vélo", "télé"):
            d.text((x, y), mot, font=f36, fill=ROUGE_F)
            d.line([x, y + 44, x + w, y + 44], fill=ROUGE_F, width=3)
        else:
            d.text((x, y), mot, font=f36, fill=CONT)
        x += w + 12
    y += 72
perso(d, 900, 490, 26, haut=VERT_F)
img.save(os.path.join(OUT, "s9_phrases_e.png"))

# 7. s10_sons_ea.png — les sons è et ê
img, d = nouvelle(1100, 560)
d.rounded_rectangle([40, 40, 210, 170], radius=14, fill=(255, 253, 245), outline=CONT, width=5)
centre_texte(d, 125, 55, "è", 85, BLEU_F)
d.rounded_rectangle([230, 40, 400, 170], radius=14, fill=(255, 253, 245), outline=CONT, width=5)
centre_texte(d, 315, 55, "ê", 85, VERT_F)
d.text((450, 80), "Le son ouvert :", font=font(40), fill=CONT)
# mère + enfant
perso(d, 160, 350, 46, haut=ROSE)
perso(d, 310, 385, 28, haut=JAUNE_F)
etiquette_petite(d, 160, 460, "la mère")
etiquette_petite(d, 310, 460, "le bébé")
# père
perso(d, 500, 350, 46, haut=BLEU_F)
etiquette_petite(d, 500, 460, "le père")
# forêt
arbre(d, 700, 430, 0.8)
arbre(d, 800, 430, 0.6)
etiquette_petite(d, 750, 460, "la forêt")
# fête : fanions + ballon
fanions(d, 860, 1080, 250)
d.ellipse([940, 340, 1010, 410], fill=ROUGE_F, outline=CONT, width=3)
d.line([975, 340, 975, 300], fill=CONT, width=3)
etiquette_petite(d, 975, 460, "la fête")
img.save(os.path.join(OUT, "s10_sons_ea.png"))

print("Illustrations CP2 unité 1 générées.")

# ============================================================
# CP2 (10ème) — UNITÉ 2 : LES TERMES RELATIFS À LA FAMILLE (13-28)
# ============================================================

def jupe2(d, cx, yb, t):
    # jupe trapèze ; (cx,yb) = centre de la ceinture en haut
    d.polygon([(cx - int(0.35 * t), yb), (cx + int(0.35 * t), yb), (cx + int(0.75 * t), yb + t), (cx - int(0.75 * t), yb + t)], fill=ROSE, outline=CONT)
    d.rectangle([cx - int(0.38 * t), yb - 8, cx + int(0.38 * t), yb + 6], fill=VIOLET, outline=CONT)


def lune(d, cx, cy, r):
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(255, 238, 150), outline=CONT, width=3)
    d.ellipse([cx - r + int(0.5 * r), cy - int(0.55 * r), cx + r + int(0.4 * r), cy + int(0.75 * r)], fill=CIER)


def tortue(d, cx, yb, t):
    # tortue ; (cx,yb) = base au sol
    d.pieslice([cx - t, yb - t, cx + t, yb + int(0.35 * t)], 180, 360, fill=VERT, outline=CONT, width=3)
    d.polygon([(cx - t, yb + int(0.3 * t)), (cx - t - int(0.25 * t), yb + int(0.1 * t)), (cx - t, yb)], fill=VERT, outline=CONT)
    for px in (cx - int(0.6 * t), cx + int(0.25 * t)):
        d.rectangle([px, yb + int(0.2 * t), px + int(0.25 * t), yb + int(0.45 * t)], fill=VERT, outline=CONT, width=2)
    hx = cx + t + int(0.15 * t)
    d.ellipse([hx - int(0.25 * t), yb - int(0.45 * t), hx + int(0.3 * t), yb + int(0.05 * t)], fill=VERT, outline=CONT, width=3)
    d.ellipse([hx + int(0.08 * t), yb - int(0.32 * t), hx + int(0.18 * t), yb - int(0.22 * t)], fill=NOIR)


def route(d, x1, x2, y):
    d.rectangle([x1, y, x2, y + 46], fill=GRIS, outline=CONT, width=2)
    for dx in range(x1 + 10, x2 - 30, 60):
        d.rectangle([dx, y + 20, dx + 30, y + 26], fill=CIER)


def maison_rue(d, x, yb, s=1.0):
    w = int(90 * s); h = int(70 * s)
    d.rectangle([x, yb - h, x + w, yb], fill=MUR, outline=CONT, width=3)
    d.polygon([(x - int(10 * s), yb - h), (x + w + int(10 * s), yb - h), (x + w // 2, yb - h - int(40 * s))], fill=TOIT, outline=CONT)
    d.rectangle([x + w // 2 - int(12 * s), yb - int(35 * s), x + w // 2 + int(12 * s), yb], fill=(160, 110, 60), outline=CONT, width=2)


def flamme(d, cx, cy, t):
    d.polygon([(cx, cy - t), (cx + int(0.55 * t), cy), (cx + int(0.35 * t), cy + int(0.75 * t)), (cx - int(0.35 * t), cy + int(0.75 * t)), (cx - int(0.55 * t), cy)], fill=ORANGE, outline=CONT)
    d.polygon([(cx, cy - int(0.45 * t)), (cx + int(0.28 * t), cy + int(0.2 * t)), (cx - int(0.28 * t), cy + int(0.2 * t))], fill=JAUNE_F)


def ballon(d, cx, cy, r):
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=BLEU, outline=CONT, width=3)
    d.polygon([(cx, cy - int(0.3 * r)), (cx + int(0.5 * r), cy - int(0.1 * r)), (cx + int(0.3 * r), cy + int(0.45 * r)), (cx - int(0.3 * r), cy + int(0.45 * r)), (cx - int(0.5 * r), cy - int(0.1 * r))], fill=JAUNE_F, outline=CONT)


def cheveux_gris(d, cx, cy, r):
    d.pieslice([cx - r, cy - r, cx + r, cy + r], 180, 360, fill=GRIS, outline=CONT, width=2)


# 8. s13_famille.png — ma famille
img, d = nouvelle(1100, 560)
centre_texte(d, 550, 30, "MA FAMILLE", 44, CONT)
sol(d, 0, 1100, 470)
perso(d, 170, 280, 48, haut=BLEU_F)
perso(d, 380, 290, 44, haut=ROSE)
perso(d, 570, 330, 34, haut=VERT_F)
perso(d, 740, 335, 32, haut=JAUNE_F)
perso(d, 900, 365, 22, haut=(245, 200, 160))
etiquette_petite(d, 170, 505, "papa")
etiquette_petite(d, 380, 505, "maman")
etiquette_petite(d, 570, 505, "le frère")
etiquette_petite(d, 740, 505, "la sœur")
etiquette_petite(d, 900, 505, "le bébé")
img.save(os.path.join(OUT, "s13_famille.png"))

# 9. s14_grands_parents.png — la famille élargie
img, d = nouvelle(1100, 560)
centre_texte(d, 550, 30, "LA FAMILLE ÉLARGIE", 42, CONT)
sol(d, 0, 1100, 470)
perso(d, 180, 275, 48, haut=(90, 90, 110))
cheveux_gris(d, 180, 241, 40)
d.line([138, 380, 120, 485], fill=(121, 85, 72), width=6)
perso(d, 410, 285, 44, haut=ROSE)
d.ellipse([390, 215, 430, 243], fill=GRIS, outline=CONT, width=2)
perso(d, 680, 290, 44, haut=VERT_F)
perso(d, 920, 290, 44, haut=ORANGE)
etiquette_petite(d, 180, 505, "le grand-père")
etiquette_petite(d, 410, 505, "la grand-mère")
etiquette_petite(d, 680, 505, "l'oncle")
etiquette_petite(d, 920, 505, "la tante")
img.save(os.path.join(OUT, "s14_grands_parents.png"))

# 10. s15_voici_famille.png — voici ma famille
img, d = nouvelle(1100, 560)
sol(d, 0, 1100, 470)
d.rectangle([440, 300, 660, 470], fill=MUR, outline=CONT, width=3)
d.polygon([(425, 300), (675, 300), (550, 210)], fill=TOIT, outline=CONT)
d.rectangle([528, 380, 572, 470], fill=(160, 110, 60), outline=CONT, width=3)
perso(d, 200, 320, 50, haut=BLEU_F)
perso(d, 350, 330, 46, haut=ROSE)
perso(d, 800, 335, 40, haut=VERT_F)
perso(d, 940, 345, 36, haut=JAUNE_F)
bulle(d, 350, 105, "Voici ma famille !", center_x=550, f=font(30, bold=False))
etiquette_petite(d, 550, 505, "j'aime ma famille")
img.save(os.path.join(OUT, "s15_voici_famille.png"))

# 11. s17_possessifs.png — mon / ma
img, d = nouvelle(1100, 560)
d.rounded_rectangle([40, 40, 520, 480], radius=20, fill=(232, 240, 252), outline=CONT, width=4)
d.rounded_rectangle([580, 40, 1060, 480], radius=20, fill=(253, 235, 240), outline=CONT, width=4)
centre_texte(d, 280, 55, "MON", 60, BLEU_F)
centre_texte(d, 280, 150, "mon papa • mon frère", 28, CONT, bold=False)
centre_texte(d, 280, 190, "mon grand-père • mon oncle", 28, CONT, bold=False)
perso(d, 230, 305, 38, haut=BLEU_F)
ballon(d, 400, 330, 45)
centre_texte(d, 820, 55, "MA", 60, ROSE)
centre_texte(d, 820, 150, "ma maman • ma sœur", 28, CONT, bold=False)
centre_texte(d, 820, 190, "ma grand-mère • ma tante", 28, CONT, bold=False)
perso(d, 770, 305, 38, haut=ROSE)
jupe2(d, 940, 320, 80)
centre_texte(d, 550, 515, "MON pour les garçons, MA pour les filles !", 32, CONT)
img.save(os.path.join(OUT, "s17_possessifs.png"))

# 12. s21_son_u.png — le son u
img, d = nouvelle(1100, 560)
d.rounded_rectangle([40, 40, 260, 190], radius=16, fill=(255, 253, 245), outline=CONT, width=5)
centre_texte(d, 150, 55, "U", 95, BLEU_F)
d.text((300, 92), "Je lis des mots avec u :", font=font(42), fill=CONT)
jupe2(d, 330, 290, 120)
lune(d, 530, 320, 55)
route(d, 660, 820, 350)
maison_rue(d, 690, 350, 0.9)
maison_rue(d, 780, 350, 0.7)
tortue(d, 950, 400, 55)
etiquette_petite(d, 330, 450, "la jupe")
etiquette_petite(d, 530, 450, "la lune")
etiquette_petite(d, 745, 450, "la rue")
etiquette_petite(d, 950, 450, "la tortue")
img.save(os.path.join(OUT, "s21_son_u.png"))

# 13. s25_son_eu.png — le son eu
img, d = nouvelle(1100, 560)
d.rounded_rectangle([40, 40, 300, 190], radius=16, fill=(255, 253, 245), outline=CONT, width=5)
centre_texte(d, 170, 55, "EU", 95, VERT_F)
d.text((350, 92), "Je lis des mots avec eu :", font=font(42), fill=CONT)
ballon(d, 320, 330, 60)
flamme(d, 530, 330, 90)
centre_texte(d, 740, 250, "2", 110, BLEU_F)
d.ellipse([875, 245, 985, 355], fill=TERRE, outline=CONT, width=3)
d.pieslice([875, 245, 985, 325], 180, 360, fill=(121, 85, 72), outline=CONT, width=2)
d.ellipse([899, 298, 911, 310], fill=NOIR)
d.ellipse([949, 298, 961, 310], fill=NOIR)
d.arc([905, 312, 955, 342], 15, 165, fill=NOIR, width=3)
etiquette_petite(d, 320, 450, "le jeu")
etiquette_petite(d, 530, 450, "le feu")
etiquette_petite(d, 740, 450, "deux")
etiquette_petite(d, 930, 200, "les yeux")
etiquette_petite(d, 930, 450, "les cheveux")
img.save(os.path.join(OUT, "s25_son_eu.png"))

# 14bis. s31_dents.png — les dents (exercice)
img, d = nouvelle(1100, 560)
centre_texte(d, 550, 30, "JE ME BROSSE LES DENTS", 42, CONT)
d.rounded_rectangle([200, 130, 900, 330], radius=90, fill=ROSE, outline=CONT, width=5)
d.rounded_rectangle([240, 170, 860, 290], radius=60, fill=CIER, outline=CONT, width=4)
for x in range(280, 840, 80):
    d.line([x, 170, x, 290], fill=CONT, width=3)
# brosse
d.rectangle([420, 380, 680, 440], fill=BLEU, outline=CONT, width=4)
for x in range(430, 560, 24):
    d.rectangle([x, 340, x + 14, 382], fill=CIER, outline=CONT, width=2)
etiquette_petite(d, 550, 470, "la brosse à dents")
etiquette_petite(d, 250, 380, "le dentifrice")
etiquette_petite(d, 870, 380, "les dents")
img.save(os.path.join(OUT, "s31_dents.png"))

# 15bis. s35_son_an.png — le son an (exercice)
img, d = nouvelle(1100, 560)
d.rounded_rectangle([40, 40, 280, 190], radius=16, fill=(255, 253, 245), outline=CONT, width=5)
centre_texte(d, 160, 55, "AN", 95, VERT_F)
d.text((330, 92), "Je lis des mots avec an :", font=font(42), fill=CONT)
# lampe
d.polygon([(180, 350), (280, 350), (255, 260), (205, 260)], fill=JAUNE_F, outline=CONT)
d.rectangle([222, 350, 238, 420], fill=CONT)
d.rectangle([195, 420, 265, 435], fill=CONT)
# banane
d.arc([400, 260, 560, 400], 20, 160, fill=(230, 180, 40), width=22)
# canard
d.ellipse([700, 300, 820, 380], fill=JAUNE_F, outline=CONT, width=3)
d.ellipse([790, 260, 850, 320], fill=JAUNE_F, outline=CONT, width=3)
d.polygon([(845, 280), (890, 292), (845, 304)], fill=ORANGE, outline=CONT)
# pantalon
d.rectangle([930, 250, 1050, 280], fill=BLEU_F, outline=CONT)
d.rectangle([930, 280, 980, 420], fill=BLEU_F, outline=CONT, width=3)
d.rectangle([1000, 280, 1050, 420], fill=BLEU_F, outline=CONT, width=3)
etiquette_petite(d, 230, 470, "la lampe")
etiquette_petite(d, 480, 470, "la banane")
etiquette_petite(d, 775, 470, "le canard")
etiquette_petite(d, 990, 470, "le pantalon")
img.save(os.path.join(OUT, "s35_son_an.png"))

print("Illustrations CP2 unité 2 générées.")
