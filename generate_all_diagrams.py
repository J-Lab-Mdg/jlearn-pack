import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs('images_gen', exist_ok=True)

# Load fonts
try:
    font_title = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 20)
    font_bold = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 16)
    font_main = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 15)
    font_small = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 13)
    font_math = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf', 17)
except:
    font_title = font_bold = font_main = font_small = font_math = ImageFont.load_default()

# 1. CARRE PROPRIETES
def gen_carre():
    W, H = 550, 320
    im = Image.new('RGB', (W, H), '#FFFFFF')
    draw = ImageDraw.Draw(im)
    
    # Square
    x0, y0, sz = 160, 50, 180
    x1, y1 = x0 + sz, y0 + sz
    draw.rectangle([x0, y0, x1, y1], fill='#E8F8F5', outline='#117A65', width=3)
    
    # 4 right angle marks
    a_sz = 16
    draw.rectangle([x0, y0, x0+a_sz, y0+a_sz], outline='#117A65', width=2)
    draw.rectangle([x1-a_sz, y0, x1, y0+a_sz], outline='#117A65', width=2)
    draw.rectangle([x0, y1-a_sz, x0+a_sz, y1], outline='#117A65', width=2)
    draw.rectangle([x1-a_sz, y1-a_sz, x1, y1], outline='#117A65', width=2)
    
    # Tick marks on 4 equal sides
    # top
    draw.line([x0+sz/2, y0-6, x0+sz/2, y0+6], fill='#C0392B', width=2)
    # bottom
    draw.line([x0+sz/2, y1-6, x0+sz/2, y1+6], fill='#C0392B', width=2)
    # left
    draw.line([x0-6, y0+sz/2, x0+6, y0+sz/2], fill='#C0392B', width=2)
    # right
    draw.line([x1-6, y0+sz/2, x1+6, y0+sz/2], fill='#C0392B', width=2)
    
    # Labels with arrows
    # Angle label
    draw.line([x0-10, y0-10, x0+6, y0+6], fill='#2980B9', width=2)
    draw.text((x0-140, y0-20), "4 angles droits (90°)", fill='#2980B9', font=font_small)
    
    # Side label
    draw.text((x0 + sz/2 - 25, y1 + 10), "côté (c)", fill='#117A65', font=font_bold)
    draw.text((x1 + 15, y0 + sz/2 - 10), "côté (c)", fill='#117A65', font=font_bold)
    
    # Top legend
    draw.text((x0 - 50, 12), "Carré : 4 côtés égaux et 4 angles droits", fill='#2C3E50', font=font_bold)
    
    # Side note
    draw.text((370, 100), "• 4 côtés égaux (c)", fill='#34495E', font=font_main)
    draw.text((370, 130), "• 4 angles droits", fill='#34495E', font=font_main)
    draw.text((370, 160), "• Périmètre : P = c × 4", fill='#C0392B', font=font_bold)
    draw.text((370, 190), "• Aire : A = c × c", fill='#C0392B', font=font_bold)
    
    im.save('images_gen/carre_proprietes.png')

# 2. CARRE EXEMPLE
def gen_carre_exemple():
    W, H = 450, 240
    im = Image.new('RGB', (W, H), '#FFFFFF')
    draw = ImageDraw.Draw(im)
    
    x0, y0, sz = 80, 40, 150
    x1, y1 = x0 + sz, y0 + sz
    draw.rectangle([x0, y0, x1, y1], fill='#FEF9E7', outline='#D4AC0D', width=3)
    
    # Right angle marks
    a_sz = 14
    draw.rectangle([x0, y0, x0+a_sz, y0+a_sz], outline='#B7950B', width=2)
    draw.rectangle([x1-a_sz, y0, x1, y0+a_sz], outline='#B7950B', width=2)
    draw.rectangle([x0, y1-a_sz, x0+a_sz, y1], outline='#B7950B', width=2)
    draw.rectangle([x1-a_sz, y1-a_sz, x1, y1], outline='#B7950B', width=2)
    
    # Label on side
    draw.text((x0 + sz/2 - 25, y1 + 8), "c = 5 m", fill='#B7950B', font=font_bold)
    draw.text((x1 + 10, y0 + sz/2 - 10), "c = 5 m", fill='#B7950B', font=font_bold)
    
    # Example calculations on right
    draw.text((260, 40), "Exemple : c = 5 m", fill='#2C3E50', font=font_bold)
    draw.text((260, 80), "Périmètre :", fill='#34495E', font=font_main)
    draw.text((260, 105), "P = 5 m × 4 = 20 m", fill='#C0392B', font=font_bold)
    draw.text((260, 145), "Aire :", fill='#34495E', font=font_main)
    draw.text((260, 170), "A = 5 m × 5 m = 25 m²", fill='#27AE60', font=font_bold)
    
    im.save('images_gen/carre_exemple.png')

# 3. RECTANGLE PROPRIETES
def gen_rectangle():
    W, H = 550, 280
    im = Image.new('RGB', (W, H), '#FFFFFF')
    draw = ImageDraw.Draw(im)
    
    x0, y0, w, h = 80, 50, 240, 140
    x1, y1 = x0 + w, y0 + h
    draw.rectangle([x0, y0, x1, y1], fill='#EBF5FB', outline='#2980B9', width=3)
    
    # Right angles
    a_sz = 14
    draw.rectangle([x0, y0, x0+a_sz, y0+a_sz], outline='#2980B9', width=2)
    draw.rectangle([x1-a_sz, y0, x1, y0+a_sz], outline='#2980B9', width=2)
    draw.rectangle([x0, y1-a_sz, x0+a_sz, y1], outline='#2980B9', width=2)
    draw.rectangle([x1-a_sz, y1-a_sz, x1, y1], outline='#2980B9', width=2)
    
    # Labels
    draw.text((x0 + w/2 - 45, y1 + 10), "Longueur (L)", fill='#1F4E79', font=font_bold)
    draw.text((x1 + 10, y0 + h/2 - 10), "largeur (l)", fill='#1F4E79', font=font_bold)
    draw.text((x0 - 50, 15), "Rectangle : côtés opposés égaux et 4 angles droits", fill='#2C3E50', font=font_bold)
    
    # Side summary
    draw.text((360, 60), "• L = grande longueur", fill='#34495E', font=font_main)
    draw.text((360, 90), "• l = petite largeur", fill='#34495E', font=font_main)
    draw.text((360, 125), "P = (L + l) × 2", fill='#C0392B', font=font_bold)
    draw.text((360, 160), "A = L × l", fill='#27AE60', font=font_bold)
    
    im.save('images_gen/rectangle_proprietes.png')

# 4. TRAPEZE PROPRIETES
def gen_trapeze():
    W, H = 550, 280
    im = Image.new('RGB', (W, H), '#FFFFFF')
    draw = ImageDraw.Draw(im)
    
    # Trapezoid coordinates
    p1 = (80, 200)   # bottom-left
    p2 = (340, 200)  # bottom-right
    p3 = (280, 70)   # top-right
    p4 = (140, 70)   # top-left
    
    draw.polygon([p1, p2, p3, p4], fill='#FCF3CF', outline='#B7950B', width=3)
    
    # Height dashed line
    draw.line([p4[0], p4[1], p4[0], p1[1]], fill='#C0392B', width=2)
    # Right angle at height base
    draw.rectangle([p4[0], p1[1]-12, p4[0]+12, p1[1]], outline='#C0392B', width=1)
    
    # Labels
    draw.text((p4[0] - 25, (p4[1]+p1[1])//2 - 10), "h", fill='#C0392B', font=font_bold)
    draw.text(((p4[0]+p3[0])//2 - 40, p4[1] - 25), "Petite base (b)", fill='#7D6608', font=font_bold)
    draw.text(((p1[0]+p2[0])//2 - 45, p1[1] + 10), "Grande base (B)", fill='#7D6608', font=font_bold)
    draw.text((70, 15), "Trapèze : deux côtés parallèles (les bases)", fill='#2C3E50', font=font_bold)
    
    # Side summary
    draw.text((365, 60), "• B = Grande base", fill='#34495E', font=font_main)
    draw.text((365, 88), "• b = petite base", fill='#34495E', font=font_main)
    draw.text((365, 116), "• h = hauteur", fill='#34495E', font=font_main)
    draw.text((365, 148), "P = B + b + c1 + c2", fill='#C0392B', font=font_bold)
    draw.text((365, 180), "A = [(B + b) × h] ÷ 2", fill='#27AE60', font=font_bold)
    
    im.save('images_gen/trapeze_proprietes.png')

# 5. FRACTIONS NOTION (Disque, Rectangle, Bande)
def gen_fractions_notion():
    W, H = 600, 220
    im = Image.new('RGB', (W, H), '#FFFFFF')
    draw = ImageDraw.Draw(im)
    
    # 1. Circle divided in 4 parts, 3 colored (3/4)
    cx, cy, r = 100, 100, 60
    draw.ellipse([cx-r, cy-r, cx+r, cy+r], outline='#2C3E50', width=2, fill='#EAEDED')
    # Slice 0-90, 90-180, 180-270 colored
    draw.pieslice([cx-r, cy-r, cx+r, cy+r], 0, 270, fill='#5DADE2', outline='#2C3E50', width=2)
    draw.line([cx-r, cy, cx+r, cy], fill='#2C3E50', width=2)
    draw.line([cx, cy-r, cx, cy+r], fill='#2C3E50', width=2)
    draw.text((cx-15, cy+r+15), "3 / 4", fill='#1B4F72', font=font_bold)
    draw.text((cx-35, 15), "Disque : 3 parts sur 4", fill='#2C3E50', font=font_small)
    
    # 2. Rectangle divided in 6 parts, 2 colored (2/6)
    rx0, ry0, rw, rh = 230, 65, 140, 70
    draw.rectangle([rx0, ry0, rx0+rw, ry0+rh], outline='#2C3E50', width=2, fill='#EAEDED')
    # 2 columns x 3 rows -> 6 parts. Or 3 columns x 2 rows
    cw = rw / 3
    ch = rh / 2
    # Color top 2
    draw.rectangle([rx0, ry0, rx0+cw*2, ry0+ch], fill='#58D68D', outline='#2C3E50', width=2)
    # lines
    for i in range(1, 3):
        draw.line([rx0+cw*i, ry0, rx0+cw*i, ry0+rh], fill='#2C3E50', width=2)
    draw.line([rx0, ry0+ch, rx0+rw, ry0+ch], fill='#2C3E50', width=2)
    draw.text((rx0+rw//2-15, ry0+rh+15), "2 / 6", fill='#1E8449', font=font_bold)
    draw.text((rx0-5, 15), "Rectangle : 2 parts sur 6", fill='#2C3E50', font=font_small)
    
    # 3. Unit bar divided in 5 parts, 4 colored (4/5)
    bx0, by0, bw, bh = 420, 75, 150, 50
    draw.rectangle([bx0, by0, bx0+bw, by0+bh], outline='#2C3E50', width=2, fill='#EAEDED')
    pw = bw / 5
    draw.rectangle([bx0, by0, bx0+pw*4, by0+bh], fill='#F5B041', outline='#2C3E50', width=2)
    for i in range(1, 5):
        draw.line([bx0+pw*i, by0, bx0+pw*i, by0+bh], fill='#2C3E50', width=2)
    draw.text((bx0+bw//2-15, by0+bh+15), "4 / 5", fill='#B9770E', font=font_bold)
    draw.text((bx0, 15), "Bande : 4 parts sur 5", fill='#2C3E50', font=font_small)
    
    im.save('images_gen/fractions_notion.png')

# 6. METHODE PAPILLON (Addition / Soustraction)
def gen_methode_papillon():
    W, H = 560, 310
    im = Image.new('RGB', (W, H), '#FFFFFF')
    draw = ImageDraw.Draw(im)
    
    draw.text((120, 12), "Méthode Papillon : Addition et Soustraction", fill='#1A5276', font=font_title)
    
    # Left: diagram
    # Top fraction: 2 / 3  +  1 / 4
    # Draw oval 1 (wing 1: 2 and 4)
    draw.ellipse([80, 50, 240, 170], outline='#E74C3C', width=3, fill=None)
    # Draw oval 2 (wing 2: 3 and 1)
    draw.ellipse([140, 50, 300, 170], outline='#3498DB', width=3, fill=None)
    
    # Numbers
    # 2/3
    draw.text((120, 70), "2", fill='#2C3E50', font=font_title)
    draw.line([115, 100, 135, 100], fill='#2C3E50', width=2)
    draw.text((120, 110), "3", fill='#2C3E50', font=font_title)
    
    # +
    draw.text((185, 90), "+", fill='#2C3E50', font=font_title)
    
    # 1/4
    draw.text((245, 70), "1", fill='#2C3E50', font=font_title)
    draw.line([240, 100, 260, 100], fill='#2C3E50', width=2)
    draw.text((245, 110), "4", fill='#2C3E50', font=font_title)
    
    # Top antennae antenna products
    draw.text((80, 48), "2 × 4 = 8", fill='#E74C3C', font=font_bold)
    draw.text((240, 48), "3 × 1 = 3", fill='#3498DB', font=font_bold)
    
    # Bottom body curve: 3 x 4
    draw.arc([115, 135, 265, 185], 0, 180, fill='#27AE60', width=3)
    draw.text((145, 190), "3 × 4 = 12", fill='#27AE60', font=font_bold)
    
    # Right: Steps & calculation
    x_steps = 330
    draw.text((x_steps, 55), "1. Aile rouge (oblique) :", fill='#E74C3C', font=font_bold)
    draw.text((x_steps + 15, 80), "2 × 4 = 8", fill='#2C3E50', font=font_main)
    
    draw.text((x_steps, 110), "2. Aile bleue (oblique) :", fill='#3498DB', font=font_bold)
    draw.text((x_steps + 15, 135), "3 × 1 = 3", fill='#2C3E50', font=font_main)
    
    draw.text((x_steps, 165), "3. Dénominateur (en bas) :", fill='#27AE60', font=font_bold)
    draw.text((x_steps + 15, 190), "3 × 4 = 12", fill='#2C3E50', font=font_main)
    
    # Final formula
    draw.rectangle([80, 235, 480, 290], fill='#FEF9E7', outline='#F39C12', width=2)
    draw.text((100, 248), "Résultat :  8 + 3 = 11  →  11 / 12", fill='#B9770E', font=font_title)
    
    im.save('images_gen/methode_papillon.png')

# 7. FRACTIONS MULTIPLICATION & DIVISION
def gen_mult_div_fractions():
    W, H = 560, 250
    im = Image.new('RGB', (W, H), '#FFFFFF')
    draw = ImageDraw.Draw(im)
    
    draw.text((80, 12), "Multiplication et Division de Fractions", fill='#1A5276', font=font_title)
    
    # Left box: Multiplication
    draw.rectangle([30, 45, 270, 230], fill='#EBF5FB', outline='#2980B9', width=2)
    draw.text((50, 55), "Multiplication (en ligne)", fill='#1B4F72', font=font_bold)
    draw.text((50, 85), "• En haut : numérateur × numérateur", fill='#2C3E50', font=font_small)
    draw.text((50, 105), "• En bas : dénominateur × dénominateur", fill='#2C3E50', font=font_small)
    
    draw.text((50, 140), "Exemple :", fill='#2C3E50', font=font_bold)
    draw.text((50, 170), "2/3 × 4/5 = (2 × 4) / (3 × 5)", fill='#C0392B', font=font_bold)
    draw.text((115, 195), "= 8 / 15", fill='#C0392B', font=font_title)
    
    # Right box: Division
    draw.rectangle([290, 45, 530, 230], fill='#FEF9E7', outline='#F39C12', width=2)
    draw.text((310, 55), "Division (multiplier par l'inverse)", fill='#B9770E', font=font_bold)
    draw.text((310, 85), "• Diviser par c/d revient à", fill='#2C3E50', font=font_small)
    draw.text((310, 105), "  multiplier par son inverse d/c", fill='#2C3E50', font=font_small)
    
    draw.text((310, 140), "Exemple :", fill='#2C3E50', font=font_bold)
    draw.text((310, 170), "2/3 ÷ 4/5 = 2/3 × 5/4", fill='#27AE60', font=font_bold)
    draw.text((375, 195), "= 10 / 12 = 5 / 6", fill='#27AE60', font=font_title)
    
    im.save('images_gen/mult_div_fractions.png')

# 8. PREUVE PAR 9
def gen_preuve_par_9():
    W, H = 550, 290
    im = Image.new('RGB', (W, H), '#FFFFFF')
    draw = ImageDraw.Draw(im)
    
    draw.text((110, 12), "La Preuve par 9 pour la Multiplication", fill='#1A5276', font=font_title)
    
    # Cross
    cx, cy, sz = 130, 150, 70
    draw.line([cx - sz, cy - sz, cx + sz, cy + sz], fill='#2C3E50', width=3)
    draw.line([cx - sz, cy + sz, cx + sz, cy - sz], fill='#2C3E50', width=3)
    
    # Top: sum factor 1
    # Example: 12 x 13 = 156
    # factor 1 = 12 -> 1+2 = 3
    # factor 2 = 13 -> 1+3 = 4
    # Left = 3 x 4 = 12 -> 1+2 = 3
    # Right = 156 -> 1+5+6 = 12 -> 3
    draw.text((cx - 8, cy - sz + 15), "3", fill='#C0392B', font=font_title)
    draw.text((cx - 8, cy + sz - 35), "4", fill='#2980B9', font=font_title)
    draw.text((cx - sz + 15, cy - 12), "3", fill='#27AE60', font=font_title)
    draw.text((cx + sz - 30, cy - 12), "3", fill='#27AE60', font=font_title)
    
    # Explanations on right
    xr = 235
    draw.text((xr, 50), "Calcul : 12 × 13 = 156", fill='#2C3E50', font=font_title)
    draw.text((xr, 85), "1. Haut : somme du 1er facteur → 1+2 = 3", fill='#C0392B', font=font_main)
    draw.text((xr, 115), "2. Bas : somme du 2e facteur → 1+3 = 4", fill='#2980B9', font=font_main)
    draw.text((xr, 145), "3. Gauche : produit Haut × Bas → 3 × 4 = 12 → 3", fill='#27AE60', font=font_main)
    draw.text((xr, 175), "4. Droite : somme du résultat → 1+5+6 = 12 → 3", fill='#27AE60', font=font_main)
    
    # Verification banner
    draw.rectangle([xr, 215, 520, 265], fill='#E8F8F5', outline='#117A65', width=2)
    draw.text((xr + 20, 228), "Gauche = Droite (3 = 3) : Très bon indice !", fill='#117A65', font=font_bold)
    
    im.save('images_gen/preuve_par_9.png')

# 9. CONVERSIONS SEXAGESIMALES
def gen_conversions_sexa():
    W, H = 550, 250
    im = Image.new('RGB', (W, H), '#FFFFFF')
    draw = ImageDraw.Draw(im)
    
    draw.text((90, 12), "Conversions et Mesures de Temps", fill='#1A5276', font=font_title)
    
    # Conversion flow box
    draw.rectangle([40, 50, 510, 120], fill='#FEF9E7', outline='#F39C12', width=2)
    
    # Step: Heures -> Minutes -> Secondes
    draw.text((60, 75), "Heures (h)", fill='#2C3E50', font=font_title)
    draw.text((195, 60), "× 60 →", fill='#E74C3C', font=font_bold)
    draw.text((195, 90), "← ÷ 60", fill='#2980B9', font=font_bold)
    
    draw.text((265, 75), "Minutes (min)", fill='#2C3E50', font=font_title)
    draw.text((400, 60), "× 60 →", fill='#E74C3C', font=font_bold)
    draw.text((400, 90), "← ÷ 60", fill='#2980B9', font=font_bold)
    
    draw.text((465, 75), "s", fill='#2C3E50', font=font_title)
    
    # Reference table
    draw.text((50, 140), "Repères essentiels :", fill='#2C3E50', font=font_bold)
    draw.text((50, 168), "• 1 jour = 24 heures (h)", fill='#34495E', font=font_main)
    draw.text((50, 195), "• 1 heure = 60 minutes = 3 600 secondes", fill='#34495E', font=font_main)
    draw.text((50, 222), "• 1 minute = 60 secondes (s)", fill='#34495E', font=font_main)
    
    draw.text((320, 168), "• Addition : 60 min = +1 h", fill='#117A65', font=font_bold)
    draw.text((320, 195), "• Soustraction : emprunter 1 h = 60 min", fill='#C0392B', font=font_bold)
    
    im.save('images_gen/conversions_sexagesimales.png')

# 10. OPERATIONS SUR LES DECIMAUX
def gen_operations_decimaux():
    W, H = 550, 250
    im = Image.new('RGB', (W, H), '#FFFFFF')
    draw = ImageDraw.Draw(im)
    
    draw.text((90, 12), "Technique des Opérations sur les Décimaux", fill='#1A5276', font=font_title)
    
    # Left: Addition / Soustraction
    draw.rectangle([30, 45, 270, 230], fill='#E8F8F5', outline='#117A65', width=2)
    draw.text((45, 55), "Addition & Soustraction", fill='#117A65', font=font_bold)
    draw.text((45, 85), "• Aligner : virgule sous virgule", fill='#2C3E50', font=font_small)
    draw.text((45, 108), "• Compléter avec des 0 si besoin", fill='#2C3E50', font=font_small)
    draw.text((45, 135), "    1 4 2 , 5 0", fill='#2C3E50', font=font_bold)
    draw.text((45, 155), "  +   3 8 , 2 5", fill='#2C3E50', font=font_bold)
    draw.line([45, 178, 160, 178], fill='#2C3E50', width=2)
    draw.text((45, 185), "  = 1 8 0 , 7 5", fill='#117A65', font=font_bold)
    
    # Right: Multiplication & Division
    draw.rectangle([290, 45, 530, 230], fill='#FEF9E7', outline='#F39C12', width=2)
    draw.text((305, 55), "Multiplication & Division", fill='#B9770E', font=font_bold)
    draw.text((305, 85), "• Multiplication :", fill='#2C3E50', font=font_small)
    draw.text((315, 105), "Calculer sans virgule,", fill='#2C3E50', font=font_small)
    draw.text((315, 125), "puis compter les décimales.", fill='#2C3E50', font=font_small)
    draw.text((305, 155), "• Division :", fill='#2C3E50', font=font_small)
    draw.text((315, 175), "Rendre le diviseur entier (×10, ×100)", fill='#2C3E50', font=font_small)
    draw.text((315, 195), "Ajouter 0 et virgule au quotient.", fill='#2C3E50', font=font_small)
    
    im.save('images_gen/operations_decimaux.png')

gen_carre()
gen_carre_exemple()
gen_rectangle()
gen_trapeze()
gen_fractions_notion()
gen_methode_papillon()
gen_mult_div_fractions()
gen_preuve_par_9()
gen_conversions_sexa()
gen_operations_decimaux()
print("All 10 diagrams successfully generated in images_gen/!")
