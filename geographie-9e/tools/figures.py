#!/usr/bin/env python3
"""Bibliothèque de figures pédagogiques — Géographie 9e.

Rendu SVG impossible ici (pas de rsvg / cairosvg / sharp / PIL) : on dessine avec
ImageMagick (`convert`), qui dispose de la police DejaVu et sait tracer lignes,
cercles, arcs, polygones et texte accentué.

Sortie : PNG **8 bits** à ~1100 px de large (règle de `illustrations.md`).
Word refuse d'ouvrir un docx dont les images sont en PNG 16 bits, profondeur
par défaut d'ImageMagick : `-depth 8` + `png24:` sont donc obligatoires.
Convention de nommage v19 : img_sNN_a.png, img_sNN_b.png …
"""
import os
import subprocess

FONT = "DejaVu-Sans"
FONT_B = "DejaVu-Sans-Bold"
BLEU = "#1F4E79"
ROUGE = "#C00000"
VERT = "#1F6B2E"
NOIR = "#222222"
GRIS = "#7F7F7F"
JAUNE = "#F2B705"
BLEU_CIEL = "#BBD9EE"


class Fig:
    """Construit une commande ImageMagick puis génère le PNG."""

    def __init__(self, w=1100, h=700, bg="white"):
        self.w, self.h = w, h
        self.args = ["-size", f"{w}x{h}", f"xc:{bg}"]

    # ------------------------------------------------------------- primitives
    def txt(self, x, y, s, size=28, color=NOIR, bold=False, gravity="northwest"):
        self.args += ["-gravity", gravity, "-font", FONT_B if bold else FONT,
                      "-pointsize", str(size), "-fill", color,
                      "-annotate", f"{x:+d}{y:+d}", s]
        return self

    def txtc(self, cx, y, s, size=28, color=NOIR, bold=False):
        """Texte centré horizontalement sur cx (y = baseline, depuis le haut)."""
        return self.txt(int(cx - self.w / 2), y, s, size, color, bold, gravity="north")

    def line(self, x1, y1, x2, y2, color=NOIR, width=3):
        self.args += ["-stroke", color, "-strokewidth", str(width),
                      "-draw", f"line {x1},{y1} {x2},{y2}",
                      "-stroke", "none"]
        return self

    def rect(self, x1, y1, x2, y2, fill="none", stroke=NOIR, width=3):
        self.args += ["-fill", fill, "-stroke", stroke, "-strokewidth", str(width),
                      "-draw", f"rectangle {x1},{y1} {x2},{y2}",
                      "-fill", "none", "-stroke", "none"]
        return self

    def circle(self, cx, cy, r, fill="none", stroke=NOIR, width=3):
        self.args += ["-fill", fill, "-stroke", stroke, "-strokewidth", str(width),
                      "-draw", f"circle {cx},{cy} {cx+r},{cy}",
                      "-fill", "none", "-stroke", "none"]
        return self

    def ellipse(self, cx, cy, rx, ry, fill="none", stroke=NOIR, width=3):
        self.args += ["-fill", fill, "-stroke", stroke, "-strokewidth", str(width),
                      "-draw", f"ellipse {cx},{cy} {rx},{ry} 0,360",
                      "-fill", "none", "-stroke", "none"]
        return self

    def arc(self, x1, y1, x2, y2, a1, a2, color=NOIR, width=3):
        self.args += ["-stroke", color, "-strokewidth", str(width), "-fill", "none",
                      "-draw", f"arc {x1},{y1} {x2},{y2} {a1},{a2}",
                      "-stroke", "none"]
        return self

    def poly(self, points, fill="none", stroke=NOIR, width=3):
        pts = " ".join(f"{x},{y}" for x, y in points)
        self.args += ["-fill", fill, "-stroke", stroke, "-strokewidth", str(width),
                      "-draw", f"polygon {pts}", "-fill", "none", "-stroke", "none"]
        return self

    def save(self, path):
        """Toujours du PNG 8 bits : Word n'ouvre pas les PNG 16 bits d'ImageMagick."""
        os.makedirs(os.path.dirname(path), exist_ok=True)
        cmd = ["convert"] + self.args + ["-depth", "8", "-strip", "png24:" + path]
        r = subprocess.run(cmd, capture_output=True, text=True)
        if r.returncode != 0:
            raise RuntimeError(f"ImageMagick a échoué : {r.stderr[:400]}")
        return path


# ══════════════════════════════ figures — séance 1 ══════════════════════════════

def trajet_soleil(path):
    """Le trajet du soleil du matin au soir (Est → zénith → Ouest)."""
    f = Fig(1100, 620)
    f.txtc(550, 60, "Le trajet du soleil", 40, BLEU, bold=True)
    # sol
    f.line(60, 540, 1040, 540, GRIS, 4)
    f.rect(60, 540, 1040, 600, fill="#E8E0CE", stroke="#E8E0CE", width=1)
    # arc du soleil
    f.arc(150, 130, 950, 730, 180, 0, JAUNE, 5)
    # trois positions du soleil
    for cx, cy, label, moment in ((200, 500, "Est", "matin"), (550, 165, "Zénith", "midi"),
                                  (900, 500, "Ouest", "soir")):
        f.circle(cx, cy, 46, fill=JAUNE, stroke="#D89B00", width=4)
        f.txtc(cx, cy + 14, label, 26, "#7A4E00", bold=True)
        f.txtc(cx, cy + 78, moment, 24, NOIR)
    # flèches de direction
    f.line(240, 470, 320, 400, GRIS, 3)
    f.poly([(320, 400), (300, 408), (306, 424)], fill=GRIS, stroke=GRIS, width=1)
    f.line(860, 470, 780, 400, GRIS, 3)
    f.poly([(780, 400), (800, 408), (794, 424)], fill=GRIS, stroke=GRIS, width=1)
    f.txtc(550, 590, "Le soleil se lève à l'Est, monte, puis se couche à l'Ouest.", 26, NOIR)
    return f.save(path)


def ombres_enfant(path):
    """L'ombre d'un enfant le matin, à midi et le soir."""
    f = Fig(1100, 560)
    f.txtc(550, 55, "Notre ombre change dans la journée", 38, BLEU, bold=True)
    sol = 430
    f.line(40, sol, 1060, sol, GRIS, 4)
    f.rect(40, sol, 1060, 500, fill="#E8E0CE", stroke="#E8E0CE", width=1)
    zones = [(180, "Le matin", 210, 190), (550, "À midi", 62, 150), (920, "Le soir", 210, 190)]
    for cx, titre, ombre_l, h in zones:
        # enfant stylisé : tête + corps
        f.circle(cx, sol - h - 30, 22, fill="#F6D2A9", stroke=NOIR, width=3)
        f.line(cx, sol - h - 8, cx, sol - 40, NOIR, 8)
        f.line(cx, sol - 40, cx - 26, sol, NOIR, 7)
        f.line(cx, sol - 40, cx + 26, sol, NOIR, 7)
        f.line(cx, sol - 34, cx - 34, sol - 8, NOIR, 6)
        f.line(cx, sol - 34, cx + 34, sol - 8, NOIR, 6)
        # ombre au sol
        direction = -1 if titre == "Le soir" else 1
        f.rect(cx, sol + 16, cx + direction * ombre_l, sol + 40, fill="#B0B0B0",
               stroke="#8A8A8A", width=2)
        f.txtc(cx, 110, titre, 28, VERT, bold=True)
        f.txtc(cx, 500, "ombre longue" if titre != "À midi" else "ombre courte", 26, NOIR)
    return f.save(path)


def rose_des_vents(path):
    """Rose des vents à compléter (schéma à légender pour les exercices)."""
    f = Fig(760, 760)
    f.txtc(380, 55, "La rose des vents", 36, BLEU, bold=True)
    cx, cy, r = 380, 400, 250
    f.circle(cx, cy, r, fill="white", stroke=NOIR, width=4)
    f.circle(cx, cy, r - 40, fill="none", stroke=GRIS, width=2)
    for dx, dy, label in ((0, -1, "N"), (0, 1, "S"), (1, 0, "E"), (-1, 0, "O"),
                          (0.7, -0.7, "NE"), (0.7, 0.7, "SE"),
                          (-0.7, 0.7, "SO"), (-0.7, -0.7, "NO")):
        lx = int(cx + dx * (r + 34))
        ly = int(cy + dy * (r + 34))
        f.txtc(int(cx + dx * (r + 34)), ly + 14, label, 30, ROUGE, bold=True)
    for dx, dy in ((0, -1), (0, 1), (1, 0), (-1, 0)):
        f.line(cx, cy, int(cx + dx * (r - 10)), int(cy + dy * (r - 10)), NOIR, 3)
    for dx, dy in ((0.7, -0.7), (0.7, 0.7), (-0.7, 0.7), (-0.7, -0.7)):
        f.line(cx, cy, int(cx + dx * (r - 46)), int(cy + dy * (r - 46)), GRIS, 2)
    return f.save(path)


def lever_coucher(path):
    """Paysage stylisé : lever du soleil à l'Est, coucher à l'Ouest."""
    f = Fig(1100, 520)
    # moitié gauche : matin
    f.rect(0, 0, 550, 520, fill="#DCEBFA", stroke="none", width=0)
    f.rect(550, 0, 1100, 520, fill="#FDE9C8", stroke="none", width=0)
    f.line(0, 380, 1100, 380, "#8B6B3F", 5)
    f.rect(0, 380, 1100, 520, fill="#CFE3B0", stroke="none", width=0)
    # soleil levant (Est, gauche)
    f.circle(190, 330, 52, fill=JAUNE, stroke="#D89B00", width=4)
    f.txtc(190, 430, "Lever — Est", 30, NOIR, bold=True)
    # soleil couchant (Ouest, droite)
    f.circle(910, 330, 52, fill="#F08A24", stroke="#B45F06", width=4)
    f.txtc(910, 430, "Coucher — Ouest", 30, NOIR, bold=True)
    # maison malgache stylisée au centre
    f.poly([(470, 380), (630, 380), (630, 280), (470, 280)], fill="#FFF3E0", stroke=NOIR, width=3)
    f.poly([(455, 282), (645, 282), (550, 210)], fill="#C0504D", stroke=NOIR, width=3)
    f.rect(530, 320, 570, 380, fill="#8B5A2B", stroke=NOIR, width=3)
    f.txtc(550, 120, "Le matin à gauche, le soir à droite", 28, VERT, bold=True)
    f.line(550, 40, 550, 500, GRIS, 2)
    return f.save(path)


FIGURES_S1 = {
    "img_s01_a.png": trajet_soleil,
    "img_s01_b.png": ombres_enfant,
    "img_s01_c.png": lever_coucher,
    "img_s01_d.png": rose_des_vents,
}

if __name__ == "__main__":
    out_dir = os.path.join(os.path.dirname(__file__), "..", "assets")
    for nom, fn in FIGURES_S1.items():
        p = fn(os.path.join(out_dir, nom))
        print("généré :", os.path.abspath(p), os.path.getsize(p), "octets")


# ══════════════════════════════ figures — séances 2 à 6 ═══════════════════════

def points_cardinaux(path):
    """Les quatre points cardinaux autour d'un élève, avec le lever/coucher."""
    f = Fig(1100, 620)
    f.txtc(550, 55, "Les quatre points cardinaux", 38, BLEU, bold=True)
    cx, cy = 550, 330
    f.circle(cx, cy, 210, fill="#F7FBFF", stroke=GRIS, width=2)
    for dx, dy, label, couleur in ((0, -1, "NORD", NOIR), (0, 1, "SUD", NOIR),
                                   (1, 0, "EST", ROUGE), (-1, 0, "OUEST", ROUGE)):
        lx = int(cx + dx * 190)
        ly = int(cy + dy * 190)
        f.txtc(lx, ly + 12, label, 30, couleur, bold=True)
        f.line(cx, cy, int(cx + dx * 150), int(cy + dy * 150), GRIS, 2)
    f.circle(cx, cy, 42, fill=JAUNE, stroke="#D89B00", width=3)
    f.txtc(cx, cy + 12, "moi", 24, "#7A4E00", bold=True)
    f.txtc(250, 560, "Lever du soleil", 26, "#B26A00")
    f.txtc(850, 560, "Coucher du soleil", 26, "#B26A00")
    f.txtc(550, 600, "Le matin, le soleil est à l'Est ; le soir, il est à l'Ouest.", 24, NOIR)
    return f.save(path)


def croix_a_completer(path):
    """Croix des points cardinaux à compléter (exercice)."""
    f = Fig(700, 700)
    f.txtc(350, 55, "Complète la croix", 34, BLEU, bold=True)
    cx, cy = 350, 380
    f.line(cx, cy - 240, cx, cy + 240, NOIR, 4)
    f.line(cx - 240, cy, cx + 240, cy, NOIR, 4)
    for dx, dy in ((0, -1), (0, 1), (1, 0), (-1, 0)):
        f.txtc(int(cx + dx * 285), int(cy + dy * 285) + 12, "………", 34, ROUGE, bold=True)
    return f.save(path)


def rose_8_directions(path):
    """Rose des vents complète : 4 points cardinaux + 4 directions intermédiaires."""
    f = Fig(820, 820)
    f.txtc(410, 55, "La rose des vents", 36, BLEU, bold=True)
    cx, cy, r = 410, 440, 250
    f.circle(cx, cy, r, fill="white", stroke=NOIR, width=4)
    f.circle(cx, cy, int(r * 0.62), fill="none", stroke=GRIS, width=2)
    cardinaux = ((0, -1, "N"), (0, 1, "S"), (1, 0, "E"), (-1, 0, "O"))
    inter = ((0.7, -0.7, "NE"), (0.7, 0.7, "SE"), (-0.7, 0.7, "SO"), (-0.7, -0.7, "NO"))
    for dx, dy, lab in inter:
        f.line(cx, cy, int(cx + dx * (r - 60)), int(cy + dy * (r - 60)), GRIS, 3)
        f.txtc(int(cx + dx * (r + 30)), int(cy + dy * (r + 30)) + 12, lab, 28, VERT, bold=True)
    for dx, dy, lab in cardinaux:
        f.line(cx, cy, int(cx + dx * (r - 20)), int(cy + dy * (r - 20)), NOIR, 4)
        f.txtc(int(cx + dx * (r + 34)), int(cy + dy * (r + 34)) + 14, lab, 34, ROUGE, bold=True)
    return f.save(path)


def construction_rose(path):
    """Les 3 étapes du tracé de la rose des vents."""
    f = Fig(1100, 480)
    f.txtc(550, 50, "Tracer une rose des vents en 3 étapes", 34, BLEU, bold=True)
    etapes = [("1. Une croix", "croix"), ("2. Les directions\nintermédiaires", "inter"),
              ("3. Le cercle\net les lettres", "cercle")]
    for i, (titre, kind) in enumerate(etapes):
        cx = 200 + i * 350
        cy = 280
        f.txtc(cx, 100, titre, 26, VERT, bold=True)
        f.rect(cx - 150, 150, cx + 150, 430, fill="none", stroke=GRIS, width=2)
        if kind in ("croix", "inter", "cercle"):
            f.line(cx, cy - 120, cx, cy + 120, NOIR, 4)
            f.line(cx - 120, cy, cx + 120, cy, NOIR, 4)
        if kind in ("inter", "cercle"):
            for dx, dy in ((0.7, -0.7), (0.7, 0.7), (-0.7, 0.7), (-0.7, -0.7)):
                f.line(cx, cy, int(cx + dx * 95), int(cy + dy * 95), GRIS, 3)
        if kind == "cercle":
            f.circle(cx, cy, 120, fill="none", stroke=BLEU, width=3)
            for dx, dy, lab in ((0, -1, "N"), (0, 1, "S"), (1, 0, "E"), (-1, 0, "O")):
                f.txtc(int(cx + dx * 105), int(cy + dy * 105) + 12, lab, 26, ROUGE, bold=True)
    return f.save(path)


def enfant_oriente(path):
    """S'orienter : face à l'Est, le Nord est à gauche."""
    f = Fig(1100, 600)
    f.txtc(550, 50, "Face au soleil levant : je m'oriente", 34, BLEU, bold=True)
    cx, cy = 550, 330
    f.circle(cx, cy, 46, fill="#F6D2A9", stroke=NOIR, width=3)
    f.line(cx, cy + 46, cx, cy + 120, NOIR, 8)
    # bras tendus
    f.line(cx - 110, cy + 60, cx + 110, cy + 60, NOIR, 7)
    f.line(cx, cy + 70, cx - 60, cy + 150, NOIR, 6)
    f.line(cx, cy + 70, cx + 60, cy + 150, NOIR, 6)
    # repères
    f.txtc(cx, 150, "NORD (devant)", 28, NOIR, bold=True)
    f.txtc(cx, 540, "SUD (derrière)", 28, NOIR, bold=True)
    f.txtc(cx + 300, cy + 12, "EST\n(soleil levant)", 26, ROUGE, bold=True)
    f.txtc(cx - 300, cy + 12, "OUEST", 26, ROUGE, bold=True)
    f.circle(cx + 300, cy - 90, 40, fill=JAUNE, stroke="#D89B00", width=3)
    f.txtc(550, 580, "Bras droit vers le soleil levant = Est ; le Nord est devant toi.", 24, VERT)
    return f.save(path)


FIGURES_T1 = {
    "img_s02_a.png": points_cardinaux,
    "img_s02_b.png": croix_a_completer,
    "img_s04_a.png": rose_8_directions,
    "img_s05_a.png": construction_rose,
    "img_s03_a.png": enfant_oriente,
}


# ═══════════════════ figures — séances 6 à 12 (les plans) ═════════════════════

def itineraire_simple(path):
    """Un plan simple du village avec la rose des vents et un itinéraire maison → école."""
    f = Fig(1100, 640)
    f.txtc(550, 50, "Se diriger avec la rose des vents", 34, BLEU, bold=True)
    f.rect(80, 130, 1020, 560, fill="#FFFDF5", stroke="#B0A98A", width=3)
    # cases du village
    f.rect(140, 190, 340, 330, fill="#F3D9B1", stroke=NOIR, width=3)
    f.txtc(240, 250, "MAISON", 24, NOIR, bold=True)
    f.rect(600, 190, 900, 330, fill="#CFE3F7", stroke=NOIR, width=3)
    f.txtc(750, 250, "ÉCOLE", 24, NOIR, bold=True)
    f.rect(430, 430, 640, 520, fill="#D9EAD3", stroke=NOIR, width=3)
    f.txtc(535, 465, "MARCHÉ", 22, NOIR, bold=True)
    # itinéraire maison -> école
    f.line(340, 260, 600, 260, ROUGE, 5)
    f.poly([(600, 260), (578, 250), (578, 272)], fill=ROUGE, stroke=ROUGE, width=1)
    f.txtc(470, 200, "itinéraire", 22, ROUGE, bold=True)
    # rose des vents
    cx, cy = 940, 520
    f.circle(cx, cy, 78, fill="white", stroke=NOIR, width=3)
    f.line(cx, cy - 62, cx, cy + 62, NOIR, 4)
    f.line(cx - 62, cy, cx + 62, cy, NOIR, 4)
    for dx, dy, lab in ((0, -1, "N"), (0, 1, "S"), (1, 0, "E"), (-1, 0, "O")):
        f.txtc(int(cx + dx * 62), int(cy + dy * 62) + 10, lab, 24, ROUGE, bold=True)
    f.txtc(550, 600, "L'école se trouve à l'Est de la maison.", 26, VERT, bold=True)
    return f.save(path)


def elements_plan(path):
    """Les trois éléments obligatoires d'un plan : titre, échelle, légende."""
    f = Fig(1100, 660)
    f.txtc(550, 45, "Les éléments d'un plan", 36, BLEU, bold=True)
    # cadre du plan
    f.rect(90, 140, 1010, 560, fill="#FFFDF5", stroke="#B0A98A", width=3)
    # titre
    f.txtc(550, 105, "TITRE : Plan de la classe de 9e", 28, ROUGE, bold=True)
    # contenu stylisé
    f.rect(140, 190, 400, 330, fill="#CFE3F7", stroke=NOIR, width=3)
    f.txtc(270, 245, "TABLEAU", 22, NOIR, bold=True)
    f.rect(560, 200, 950, 300, fill="#F3D9B1", stroke=NOIR, width=3)
    f.txtc(755, 235, "BUREAUX", 22, NOIR, bold=True)
    f.rect(560, 340, 950, 430, fill="#D9EAD3", stroke=NOIR, width=3)
    f.txtc(755, 370, "PORTE", 22, NOIR, bold=True)
    # échelle
    f.line(140, 480, 340, 480, NOIR, 4)
    f.line(140, 472, 140, 488, NOIR, 3)
    f.line(340, 472, 340, 488, NOIR, 3)
    f.txtc(240, 500, "ÉCHELLE : 1 cm = 1 m", 24, VERT, bold=True)
    # légende
    f.rect(700, 450, 950, 540, fill="white", stroke=NOIR, width=3)
    f.txtc(825, 470, "LÉGENDE", 24, NOIR, bold=True)
    f.rect(720, 500, 750, 520, fill="#CFE3F7", stroke=NOIR, width=2)
    f.txtc(900, 517, "tableau", 22, NOIR)
    return f.save(path)


def plan_classe(path):
    """Plan de la classe vu de dessus, avec le mobilier et la flèche du Nord."""
    f = Fig(1100, 700)
    f.txtc(550, 45, "Plan de la classe", 36, BLEU, bold=True)
    f.rect(90, 130, 1010, 620, fill="#FFFDF5", stroke="#B0A98A", width=4)
    # estrade + bureau du maître
    f.rect(430, 170, 670, 230, fill="#E8D9C5", stroke=NOIR, width=3)
    f.txtc(550, 185, "ESTRADE", 22, NOIR, bold=True)
    f.rect(460, 250, 640, 300, fill="#F3D9B1", stroke=NOIR, width=3)
    f.txtc(550, 262, "BUREAU DU MAÎTRE", 20, NOIR, bold=True)
    # tableau
    f.rect(430, 140, 670, 165, fill="#3E4A3D", stroke=NOIR, width=2)
    f.txtc(550, 145, "TABLEAU", 18, "white", bold=True)
    # rangées de tables
    for i, y in enumerate((360, 450, 540)):
        for j, x in enumerate((180, 400, 620, 840)):
            f.rect(x, y, x + 150, y + 60, fill="#FFFFFF", stroke=NOIR, width=2)
            f.txtc(x + 75, y + 18, f"{i+1}{'ABCD'[j]}", 20, GRIS)
    # porte et fenêtres
    f.rect(90, 480, 100, 570, fill="#8B5A2B", stroke=NOIR, width=3)
    f.txtc(155, 515, "PORTE", 20, NOIR, bold=True)
    f.rect(1000, 200, 1010, 350, fill="#BBD9EE", stroke=NOIR, width=3)
    f.txtc(940, 265, "FENÊTRES", 20, NOIR, bold=True)
    # flèche du Nord
    f.line(970, 560, 970, 480, ROUGE, 4)
    f.poly([(970, 470), (958, 492), (982, 492)], fill=ROUGE, stroke=ROUGE, width=1)
    f.txtc(970, 575, "N", 26, ROUGE, bold=True)
    return f.save(path)


def plan_grille(path):
    """Quadrillage pour tracer un plan à l'échelle."""
    f = Fig(1100, 620)
    f.txtc(550, 45, "Tracer un plan avec un quadrillage", 34, BLEU, bold=True)
    x0, y0, x1, y1 = 150, 120, 950, 520
    for i in range(0, 9):
        x = x0 + i * 100
        f.line(x, y0, x, y1, "#D8D8D8", 2)
    for j in range(0, 5):
        y = y0 + j * 100
        f.line(x0, y, x1, y, "#D8D8D8", 2)
    f.rect(x0, y0, x1, y1, fill="none", stroke=NOIR, width=4)
    # exemple de meuble tracé sur la grille
    f.rect(x0 + 100, y0 + 100, x0 + 300, y0 + 200, fill="#CFE3F7", stroke=NOIR, width=3)
    f.txtc(x0 + 200, y0 + 135, "1 m", 22, NOIR, bold=True)
    f.txtc(x0 + 200, y0 + 165, "× 1 m", 22, NOIR, bold=True)
    f.txtc(550, 560, "1 carreau = 1 mètre", 28, VERT, bold=True)
    return f.save(path)


def regle_echelle(path):
    """De la mesure réelle à l'échelle du plan : la classe fait 8 m, le plan 8 cm."""
    f = Fig(1100, 620)
    f.txtc(550, 45, "Du réel au plan : mesurer puis réduire", 34, BLEU, bold=True)
    f.rect(120, 150, 980, 200, fill="#F6E3B8", stroke=NOIR, width=3)
    for i in range(0, 9):
        x = 120 + i * 95
        f.line(x, 150, x, 180 if i % 2 == 0 else 170, NOIR, 3)
        f.txtc(120 + i * 95 + 47, 190, str(i), 22, NOIR, bold=True)
    f.txtc(550, 120, "MESURE RÉELLE : la classe fait 8 m de large", 26, ROUGE, bold=True)
    f.line(550, 230, 550, 300, VERT, 4)
    f.poly([(550, 312), (538, 290), (562, 290)], fill=VERT, stroke=VERT, width=1)
    f.txtc(730, 275, "on divise par 100", 24, VERT, bold=True)
    f.rect(120, 340, 980, 420, fill="#CFE3F7", stroke=NOIR, width=3)
    for i in range(0, 9):
        f.line(120 + i * 95, 340, 120 + i * 95, 365, NOIR, 2)
    f.txtc(550, 370, "PLAN : la classe mesure 8 cm sur la feuille", 24, BLEU, bold=True)
    f.txtc(550, 470, "ÉCHELLE : 1 cm sur le plan = 1 m dans la réalité", 30, ROUGE, bold=True)
    f.txtc(550, 530, "Pour passer du réel au plan, on mesure d'abord, puis on réduit.", 24, NOIR)
    f.txtc(550, 570, "Pour passer du plan au réel, on mesure sur le plan, puis on multiplie.",
           24, NOIR)
    return f.save(path)

FIGURES_T1B = {
    "img_s06_a.png": itineraire_simple,
    "img_s07_a.png": elements_plan,
    "img_s08_a.png": plan_classe,
    "img_s11_a.png": plan_grille,
    "img_s11_b.png": regle_echelle,
}


# ═══════════════════ figures — séances 13 à 26 (école, village, quartier) ═════

def plan_ecole(path):
    """Plan de l'école : bâtiments, cour, WC, mât de drapeau, portail, clôture."""
    f = Fig(1100, 700)
    f.txtc(550, 45, "Le plan de l'école", 36, BLEU, bold=True)
    f.rect(80, 120, 1020, 600, fill="#FFFDF5", stroke="#B0A98A", width=4)
    # clôture (pointillés)
    for x in range(100, 1010, 30):
        f.line(x, 130, x + 15, 130, "#8B8B8B", 2)
        f.line(x, 590, x + 15, 590, "#8B8B8B", 2)
    for y in range(140, 590, 30):
        f.line(90, y, 90, y + 15, "#8B8B8B", 2)
        f.line(1010, y, 1010, y + 15, "#8B8B8B", 2)
    # bâtiments de classe
    for i, x in enumerate((140, 400, 660)):
        f.rect(x, 170, x + 220, 290, fill="#F3D9B1", stroke=NOIR, width=3)
        f.txtc(x + 110, 215, f"Salle {i + 1}", 24, NOIR, bold=True)
    # cour de récréation
    f.rect(140, 330, 880, 480, fill="#D9EAD3", stroke=NOIR, width=3)
    f.txtc(510, 390, "COUR DE RÉCRÉATION", 28, NOIR, bold=True)
    # WC
    f.rect(920, 170, 1000, 290, fill="#CFE3F7", stroke=NOIR, width=3)
    f.txtc(960, 215, "WC", 24, NOIR, bold=True)
    # mât de drapeau
    f.circle(510, 520, 34, fill="#FCE4E4", stroke=NOIR, width=3)
    f.txtc(510, 558, "MÂT", 20, NOIR, bold=True)
    # portail
    f.rect(80, 500, 110, 560, fill="#8B5A2B", stroke=NOIR, width=3)
    f.txtc(180, 525, "PORTAIL", 20, NOIR, bold=True)
    # flèche du Nord
    f.line(990, 620, 990, 560, ROUGE, 4)
    f.poly([(990, 550), (978, 572), (1002, 572)], fill=ROUGE, stroke=ROUGE, width=1)
    f.txtc(990, 645, "N", 26, ROUGE, bold=True)
    return f.save(path)


def plan_village(path):
    """Plan du village : maisons, école, marché, rizières, route, rivière, église."""
    f = Fig(1100, 700)
    f.txtc(550, 45, "Le plan du village", 36, BLEU, bold=True)
    f.rect(70, 120, 1030, 620, fill="#FFFDF5", stroke="#B0A98A", width=4)
    # rivière
    f.poly([(70, 560), (300, 500), (600, 540), (850, 480), (1030, 510), (1030, 620),
            (70, 620)], fill="#BBD9EE", stroke="#6FA8DC", width=3)
    f.txtc(540, 585, "RIVIÈRE", 24, "#1F4E79", bold=True)
    # route
    f.line(70, 200, 1030, 260, "#E8C15A", 14)
    f.txtc(200, 165, "ROUTE", 22, "#7A6000", bold=True)
    # rizières
    f.rect(760, 300, 1000, 430, fill="#C6E0B4", stroke=NOIR, width=3)
    f.txtc(880, 350, "RIZIÈRES", 24, NOIR, bold=True)
    # maisons (alignées le long de la route)
    for i, x in enumerate((120, 250, 380, 510)):
        f.rect(x, 290, x + 90, 370, fill="#F3D9B1", stroke=NOIR, width=3)
    f.txtc(285, 390, "MAISONS", 22, NOIR, bold=True)
    # école
    f.rect(140, 430, 330, 520, fill="#CFE3F7", stroke=NOIR, width=3)
    f.txtc(235, 462, "ÉCOLE", 26, NOIR, bold=True)
    # marché
    f.rect(450, 430, 650, 520, fill="#FCE4E4", stroke=NOIR, width=3)
    f.txtc(550, 462, "MARCHÉ", 26, NOIR, bold=True)
    # église
    f.rect(880, 150, 1000, 250, fill="#E8DDC5", stroke=NOIR, width=3)
    f.txtc(940, 185, "ÉGLISE", 22, NOIR, bold=True)
    # flèche du Nord
    f.line(990, 600, 990, 545, ROUGE, 4)
    f.poly([(990, 535), (978, 557), (1002, 557)], fill=ROUGE, stroke=ROUGE, width=1)
    f.txtc(990, 625, "N", 26, ROUGE, bold=True)
    return f.save(path)


def ville_village(path):
    """Comparer la ville et le village, côté à côté."""
    f = Fig(1100, 640)
    f.txtc(550, 45, "La ville et le village", 36, BLEU, bold=True)
    for x0, titre, couleur in ((80, "LE VILLAGE", "#1F6B2E"),
                                      (580, "LA VILLE", "#C00000")):
        f.txtc(x0 + 220, 100, titre, 30, couleur, bold=True)
        f.rect(x0, 130, x0 + 440, 580, fill="#FFFDF5", stroke="#B0A98A", width=3)
    # --- village
    f.line(100, 300, 500, 300, "#E8C15A", 8)
    f.txtc(300, 275, "piste en terre", 20, "#7A6000")
    for i, x in enumerate((120, 230, 340)):
        f.rect(x, 330, x + 80, 400, fill="#F3D9B1", stroke=NOIR, width=3)
    f.txtc(290, 420, "maisons basses", 20, NOIR)
    f.rect(120, 460, 480, 560, fill="#C6E0B4", stroke=NOIR, width=3)
    f.txtc(300, 495, "champs et rizières", 22, NOIR)
    f.txtc(300, 525, "peu de services", 20, NOIR)
    # --- ville
    f.line(600, 300, 1000, 300, "#8B8B8B", 12)
    f.txtc(800, 275, "route goudronnée", 20, NOIR)
    for x, h in ((620, 90), (710, 140), (800, 110), (890, 160)):
        f.rect(x, 330, x + 70, 330 + h, fill="#D6D6D6", stroke=NOIR, width=3)
        for r in range(2):
            for c in range(2):
                f.rect(x + 12 + c * 26, 350 + r * 28, x + 34 + c * 26, 372 + r * 28,
                       fill="#CFE3F7", stroke=NOIR, width=1)
    f.txtc(800, 500, "immeubles à étages", 20, NOIR)
    for cx, txt in ((660, "BOUTIQUES"), (800, "MARCHÉ"), (930, "HÔPITAL")):
        f.rect(cx - 55, 520, cx + 55, 565, fill="#FCE4E4", stroke=NOIR, width=2)
        f.txtc(cx, 533, txt, 18, NOIR, bold=True)
    return f.save(path)


FIGURES_T1C = {
    "img_s13_a.png": plan_ecole,
    "img_s16_a.png": plan_village,
    "img_s22_a.png": ville_village,
}


# ══════════════════════════════ figures — séances 25-26 ═══════════════════════

def plan_quartier(path):
    """Plan d'un quartier : rues, îlots, boutiques, école, marché, mosquée."""
    f = Fig(1100, 700)
    f.txtc(550, 45, "Le plan d'un quartier", 36, BLEU, bold=True)
    f.rect(70, 120, 1030, 620, fill="#FFFDF5", stroke="#B0A98A", width=4)
    # rues (grille)
    for y in (260, 420):
        f.line(90, y, 1010, y, "#BFBFBF", 26)
    for x in (380, 720):
        f.line(x, 140, x, 600, "#BFBFBF", 26)
    f.txtc(550, 228, "AVENUE PRINCIPALE", 20, NOIR, bold=True)
    # îlots
    blocs = [((110, 150, 360, 240), "#EFEFEF", "MAISONS"),
             ((400, 150, 700, 240), "#CFE3F7", "ÉCOLE"),
             ((740, 150, 990, 240), "#F3D9B1", "BOUTIQUES"),
             ((110, 290, 360, 400), "#D9EAD3", "PLACE"),
             ((400, 290, 700, 400), "#FCE4E4", "MARCHÉ"),
             ((740, 290, 990, 400), "#EFEFEF", "MAISONS"),
             ((110, 440, 360, 590), "#F3D9B1", "ATELIERS"),
             ((400, 440, 700, 590), "#E8DDC5", "LIEU DE CULTE"),
             ((740, 440, 990, 590), "#D9EAD3", "TERRAIN DE JEU")]
    for (x0, y0, x1, y1), couleur, texte in blocs:
        f.rect(x0, y0, x1, y1, fill=couleur, stroke=NOIR, width=2)
        f.txtc((x0 + x1) // 2, (y0 + y1) // 2 - 8, texte, 20, NOIR, bold=True)
    # flèche du Nord
    f.line(1010, 650, 1010, 590, ROUGE, 4)
    f.poly([(1010, 580), (998, 602), (1022, 602)], fill=ROUGE, stroke=ROUGE, width=1)
    f.txtc(1010, 675, "N", 26, ROUGE, bold=True)
    return f.save(path)


FIGURES_T1C["img_s25_a.png"] = plan_quartier


# ══════════════════════ figures — unité II : la carte ══════════════════════════
# Silhouette schématique de Madagascar. Repères en degrés (longitude, latitude),
# projection plate : longitude -> x, latitude -> y, le nord en haut.

_LON0, _LON1 = 43.0, 50.6          # ouest -> est
_LAT0, _LAT1 = -11.9, -25.8        # nord (haut) -> sud (bas)
_CW, _CH, _PAD = 800, 1000, 90

# contour simplifié, du cap d'Ambre (nord) vers le sud puis vers le nord
CONTOUR_MADA = [
    (49.30, -11.95), (48.30, -12.60), (48.80, -13.30), (49.00, -13.90),
    (49.60, -14.60), (50.00, -15.30), (50.45, -15.60), (49.90, -16.30),
    (49.55, -17.30), (49.40, -18.20), (48.90, -19.60), (48.30, -20.90),
    (47.60, -22.30), (47.20, -23.60), (47.30, -24.60), (46.60, -25.10),
    (45.60, -25.50), (45.15, -25.60), (44.20, -25.20), (43.50, -24.30),
    (43.25, -23.30), (43.40, -22.20), (43.60, -21.30), (44.00, -20.40),
    (44.30, -19.20), (44.80, -18.20), (45.40, -17.20), (46.00, -16.40),
    (46.30, -15.70), (46.90, -15.40), (47.60, -14.60), (48.20, -13.80),
    (48.60, -13.20), (48.90, -12.60),
]

VILLES_MADA = {
    "Antananarivo": (47.52, -18.88),
    "Toamasina":    (49.40, -18.15),
    "Mahajanga":    (46.32, -15.72),
    "Antsiranana":  (49.28, -12.28),
    "Fianarantsoa": (47.09, -21.44),
    "Toliara":      (43.67, -23.35),
    "Antsirabe":    (47.03, -19.87),
}


def _xy(lon, lat):
    """Degrés -> pixels, nord en haut."""
    x = _PAD + (lon - _LON0) / (_LON1 - _LON0) * (_CW - 2 * _PAD)
    y = _PAD + (lat - _LAT0) / (_LAT1 - _LAT0) * (_CH - 2 * _PAD)
    return int(round(x)), int(round(y))


def _contour():
    return [_xy(lon, lat) for lon, lat in CONTOUR_MADA]


def _fond_carte(f, mer="#BBD9EE"):
    """Mer + silhouette, sans aucun texte."""
    f.rect(0, 0, _CW, _CH, fill=mer, stroke="none")
    f.poly(_contour(), fill="#C8E6C9", stroke=VERT, width=5)
    return f


def _ville(f, nom, couleur=ROUGE, r=11, etiquette=True, decalage=(18, -14)):
    x, y = _xy(*VILLES_MADA[nom])
    f.circle(x, y, r, fill=couleur, stroke="white", width=3)
    if etiquette:
        f.txt(x + decalage[0], y + decalage[1], nom, size=26, color=NOIR, bold=True)
    return x, y


def carte_madagascar(path):
    """Séance 30 — carte complète : titre, mer, silhouette, légende, échelle, nord."""
    f = Fig(_CW, _CH + 120)
    f.txt(30, 20, "CARTE DE MADAGASCAR", size=40, color=BLEU, bold=True)
    f.rect(30, 80, _CW - 30, _CH + 80, fill="#BBD9EE", stroke=NOIR, width=3)
    f.poly([(x, y + 80) for x, y in _contour()], fill="#C8E6C9", stroke=VERT, width=5)
    # flèche du nord
    f.line(_CW - 90, 150, _CW - 90, 260, color=ROUGE, width=6)
    f.poly([(_CW - 90, 120), (_CW - 110, 175), (_CW - 70, 175)], fill=ROUGE, stroke=ROUGE)
    f.txt(_CW - 116, 275, "N", size=32, color=ROUGE, bold=True)
    # légende
    f.rect(45, _CH - 120, 380, _CH + 30, fill="white", stroke=NOIR, width=3)
    f.txt(62, _CH - 100, "LÉGENDE", size=26, color=NOIR, bold=True)
    f.rect(62, _CH - 58, 112, _CH - 8, fill="#C8E6C9", stroke=VERT, width=3)
    f.txt(130, _CH - 52, "la terre", size=26, color=NOIR)
    f.rect(232, _CH - 58, 282, _CH - 8, fill="#BBD9EE", stroke=NOIR, width=3)
    f.txt(300, _CH - 52, "la mer", size=26, color=NOIR)
    # échelle
    f.line(470, _CH - 40, 700, _CH - 40, color=NOIR, width=6)
    f.txt(470, _CH - 100, "ÉCHELLE", size=24, color=NOIR, bold=True)
    f.txt(470, _CH - 8, "0", size=24, color=NOIR)
    f.txtc(585, _CH - 8, "200 km", size=24, color=NOIR)
    f.txt(686, _CH - 8, "400 km", size=24, color=NOIR)
    return f.save(path)


def carte_orientee(path):
    """Séance 31 — orientation de la carte : N en haut, S en bas, E à droite, O à gauche."""
    f = Fig(_CW, _CH)
    _fond_carte(f)
    for txt, pos, col in [("N", (_CW // 2, 20), ROUGE), ("S", (_CW // 2, _CH - 70), ROUGE),
                          ("E", (_CW - 55, _CH // 2 - 20), ROUGE),
                          ("O", (20, _CH // 2 - 20), ROUGE)]:
        f.txtc(pos[0], pos[1], txt, size=52, color=col, bold=True)
    x1, y1 = _xy(43.6, -18.9)
    x2, y2 = _xy(50.2, -18.9)
    f.line(x1, y1, x2, y2, color=BLEU, width=4)
    return f.save(path)


def carte_villes(path):
    """Séance 32 — les grandes villes."""
    f = Fig(_CW, _CH)
    _fond_carte(f)
    dec = {"Antsiranana": (18, -18), "Mahajanga": (-150, -18), "Toamasina": (18, -18),
           "Antananarivo": (-190, -18), "Antsirabe": (-160, 20),
           "Fianarantsoa": (-200, -18), "Toliara": (18, -18)}
    for nom in VILLES_MADA:
        _ville(f, nom, decalage=dec.get(nom, (18, -14)))
    f.txtc(_CW // 2, 20, "LES GRANDES VILLES", size=36, color=BLEU, bold=True)
    return f.save(path)


def carte_points(path):
    """Séance 33 — situer une ville par rapport à une autre."""
    f = Fig(_CW, _CH)
    _fond_carte(f)
    xa, ya = _ville(f, "Antananarivo", decalage=(-210, -18))
    xt, yt = _ville(f, "Toamasina", decalage=(18, -18))
    f.line(xa, ya, xt, yt, color=ROUGE, width=6)
    f.txtc(_CW // 2, 20, "Antananarivo est à l'OUEST de Toamasina", size=30,
           color=ROUGE, bold=True)
    f.txtc(_CW // 2, _CH - 60, "Toamasina est à l'EST d'Antananarivo", size=30,
           color=BLEU, bold=True)
    return f.save(path)


FIGURES_T2 = {
    "img_s30_a.png": carte_madagascar,
    "img_s31_a.png": carte_orientee,
    "img_s32_a.png": carte_villes,
    "img_s33_a.png": carte_points,
}


def echelle_carte(path):
    """Séance 34 — lire une échelle graduée en kilomètres."""
    f = Fig(1000, 520)
    f.txtc(500, 30, "L'ÉCHELLE DE LA CARTE", size=38, color=BLEU, bold=True)
    f.txtc(500, 90, "1 cm sur la carte = 100 km sur le terrain", size=30, color=NOIR)
    y = 240
    f.rect(120, y - 30, 880, y + 55, fill="white", stroke=NOIR, width=3)
    for k in range(6):                       # 0, 100, 200 … 500 km
        x = 140 + k * 120
        f.line(x, y - 30, x, y + 55, color=NOIR, width=4)
        f.txtc(x, y + 70, "%d km" % (k * 100), size=24, color=NOIR)
    for k in range(5):                       # graduations intermédiaires
        x = 200 + k * 120
        f.line(x, y - 30, x, y - 5, color=NOIR, width=3)
    f.rect(140, y - 30, 380, y + 55, fill="#F2B705", stroke="none")
    f.txtc(260, y - 78, "mesuré : 2 cm", size=24, color=NOIR, bold=True)
    f.txtc(260, y - 118, "= 200 km", size=28, color=ROUGE, bold=True)
    f.line(140, y + 100, 380, y + 100, color=ROUGE, width=5)
    f.txtc(500, 430, "Plus l'échelle est grande, plus le pays est représenté "
                     "en détail.", size=24, color=GRIS)
    return f.save(path)


def distances_carte(path):
    """Séance 35 — distances d'Antananarivo vers les grandes villes."""
    f = Fig(_CW, _CH)
    _fond_carte(f)
    xa, ya = _xy(*VILLES_MADA["Antananarivo"])
    trajets = [("Toamasina", 220, (18, -18)), ("Mahajanga", 360, (-160, -18)),
               ("Fianarantsoa", 260, (-210, 18)), ("Toliara", 640, (-140, 18)),
               ("Antsiranana", 730, (18, -18))]
    for nom, km, dec in trajets:
        x, y = _xy(*VILLES_MADA[nom])
        f.line(xa, ya, x, y, color=ROUGE, width=4)
        _ville(f, nom, couleur=BLEU, r=10, decalage=dec)
        f.txtc((xa + x) // 2, (ya + y) // 2, "%d km" % km, size=24, color=NOIR, bold=True)
    f.circle(xa, ya, 13, fill=ROUGE, stroke="white", width=3)
    f.txt(xa - 220, ya - 18, "Antananarivo", size=26, color=NOIR, bold=True)
    f.txtc(_CW // 2, 20, "DISTANCES DEPUIS ANTANANARIVO", size=32, color=BLEU, bold=True)
    return f.save(path)


def regions_carte(path):
    """Séance 36 — les six grandes régions."""
    f = Fig(_CW, _CH)
    _fond_carte(f)
    regions = [("Antsiranana", (48.9, -13.2), "#F2B705"),
               ("Mahajanga", (45.6, -16.4), "#8BC34A"),
               ("Toamasina", (48.6, -18.9), "#4FA3D1"),
               ("Antananarivo", (46.9, -19.6), "#C2185B"),
               ("Fianarantsoa", (46.8, -21.9), "#7E57C2"),
               ("Toliara", (44.6, -23.4), "#EF6C00")]
    for nom, (lon, lat), couleur in regions:
        x, y = _xy(lon, lat)
        f.rect(x - 130, y - 34, x + 130, y + 34, fill=couleur, stroke="white", width=3)
        f.txtc(x, y - 22, nom, size=28, color="white", bold=True)
    f.txtc(_CW // 2, 20, "LES SIX GRANDES RÉGIONS", size=36, color=BLEU, bold=True)
    return f.save(path)


def itineraire_carte(path):
    """Séance 37 — lire un itinéraire de ville en ville (RN7)."""
    f = Fig(_CW, _CH)
    _fond_carte(f)
    etapes = ["Antananarivo", "Antsirabe", "Fianarantsoa", "Toliara"]
    pts = [_xy(*VILLES_MADA[v]) for v in etapes]
    for i in range(len(pts) - 1):
        x1, y1 = pts[i]
        x2, y2 = pts[i + 1]
        f.line(x1, y1, x2, y2, color=ROUGE, width=7)
        f.circle((x1 + x2) // 2, (y1 + y2) // 2, 9, fill=ROUGE, stroke="white", width=2)
    for i, (nom, (x, y)) in enumerate(zip(etapes, pts)):
        f.circle(x, y, 13, fill=BLEU, stroke="white", width=3)
        f.txt(x - 120 if i % 2 else x + 20, y - 18, "%d. %s" % (i + 1, nom),
              size=26, color=NOIR, bold=True)
    f.txtc(_CW // 2, 20, "ITINÉRAIRE : Antananarivo → Toliara",
           size=32, color=BLEU, bold=True)
    f.txtc(_CW // 2, _CH - 70, "On se dirige vers le SUD-OUEST", size=30,
           color=ROUGE, bold=True)
    return f.save(path)


FIGURES_T2["img_s34_a.png"] = echelle_carte
FIGURES_T2["img_s35_a.png"] = distances_carte
FIGURES_T2["img_s36_a.png"] = regions_carte
FIGURES_T2["img_s37_a.png"] = itineraire_carte


def profil_relief(path):
    """Séances 39-43 — profil comparé : montagne, colline, vallée, plaine."""
    f = Fig(1100, 620)
    f.txtc(550, 20, "LES FORMES DU RELIEF", size=38, color=BLEU, bold=True)
    sol = 520                                  # ligne du sol
    f.line(60, sol, 1040, sol, color=NOIR, width=4)
    # montagne : triangle élevé
    f.poly([(140, sol), (270, 130), (400, sol)], fill="#B0BEC5", stroke=NOIR, width=4)
    f.txtc(270, 570, "montagne", size=28, color=NOIR, bold=True)
    # colline : dôme arrondi
    f.poly([(420, sol), (500, 330), (580, 360), (660, sol)], fill="#A5D6A7",
           stroke=NOIR, width=4)
    f.txtc(540, 570, "colline", size=28, color=NOIR, bold=True)
    # vallée : creux en V entre deux pentes, avec la rivière
    f.poly([(680, sol), (790, 400), (860, sol)], fill="#C8E6C9", stroke=NOIR, width=4)
    f.line(790, sol - 10, 790, 430, color="#4FA3D1", width=8)
    f.txtc(780, 570, "vallée", size=28, color=NOIR, bold=True)
    # plaine : trait horizontal
    f.line(890, sol - 40, 1040, sol - 40, color=VERT, width=10)
    f.txtc(965, 570, "plaine", size=28, color=NOIR, bold=True)
    # échelle des hauteurs
    f.line(70, 120, 70, sol, color=GRIS, width=3)
    f.txt(80, 115, "haut", size=24, color=GRIS)
    f.txt(80, 505, "bas", size=24, color=GRIS)
    return f.save(path)


FIGURES_T2["img_s39_a.png"] = profil_relief


def comparaison_paysages(path):
    """Séance 43 — les quatre paysages comparés, en bandes."""
    f = Fig(1100, 700)
    f.txtc(550, 15, "COMPARER LES PAYSAGES", size=38, color=BLEU, bold=True)
    cases = [("MONTAGNE", "#B0BEC5", "haut, pentes raides", "sommet rocheux"),
             ("COLLINE", "#A5D6A7", "basse, sommet arrondi", "pentes douces"),
             ("VALLÉE", "#C8E6C9", "creux entre deux hauteurs", "fond plat, humide"),
             ("PLAINE", "#F2B705", "terrain plat", "horizon dégagé")]
    x0 = 40
    for i, (titre, couleur, l1, l2) in enumerate(cases):
        x = x0 + i * 262
        f.rect(x, 90, x + 240, 250, fill="white", stroke=NOIR, width=3)
        f.txtc(x + 120, 100, titre, size=26, color=couleur, bold=True)
        # petit profil schématique dans chaque case
        if i == 0:
            f.poly([(x + 30, 230), (x + 120, 140), (x + 210, 230)], fill=couleur,
                   stroke=NOIR, width=3)
        elif i == 1:
            f.poly([(x + 40, 230), (x + 120, 165), (x + 200, 230)], fill=couleur,
                   stroke=NOIR, width=3)
        elif i == 2:
            f.poly([(x + 30, 150), (x + 120, 230), (x + 210, 150)], fill=couleur,
                   stroke=NOIR, width=3)
            f.line(x + 120, 235, x + 120, 210, color="#4FA3D1", width=6)
        else:
            f.line(x + 30, 215, x + 210, 215, color=couleur, width=10)
        f.txtc(x + 120, 265, l1, size=22, color=NOIR)
        f.txtc(x + 120, 300, l2, size=22, color=NOIR)
        f.txtc(x + 120, 340, "altitude : %s" % ["très haute", "moyenne", "basse",
                                                "basse"][i], size=22, color=GRIS)
    f.line(40, 400, 1060, 400, color=NOIR, width=3)
    f.txtc(550, 420, "On les distingue par la hauteur, la forme et la pente.",
           size=28, color=BLEU, bold=True)
    return f.save(path)


FIGURES_T2["img_s43_a.png"] = comparaison_paysages


def types_cours_eau(path):
    """Séance 47 — ruisseau, rivière, fleuve : trois largeurs comparées."""
    f = Fig(1100, 560)
    f.txtc(550, 15, "LES TYPES DE COURS D'EAU", size=38, color=BLEU, bold=True)
    bandes = [("RUISSEAU", 14, "petit, court, parfois à sec", 150),
              ("RIVIÈRE", 30, "moyenne, rejoint un fleuve", 320),
              ("FLEUVE", 62, "grand, se jette dans la mer", 520)]
    for titre, h, descr, y in bandes:
        f.rect(90, y, 1010, y + h, fill="#4FA3D1", stroke=NOIR, width=3)
        f.txtc(300, y - 42, titre, size=30, color=BLEU, bold=True)
        f.txtc(620, y - 34, descr, size=24, color=NOIR)
    f.txtc(550, 505, "On les distingue par la largeur, la longueur et le débit.",
           size=26, color=GRIS)
    return f.save(path)


def source_embouchure(path):
    """Séance 48 — de la source à l'embouchure, profil schématique."""
    f = Fig(1100, 620)
    f.txtc(550, 15, "DE LA SOURCE À L'EMBOUCHURE", size=36, color=BLEU, bold=True)
    # montagne à gauche avec la source
    f.poly([(80, 420), (230, 180), (380, 420)], fill="#B0BEC5", stroke=NOIR, width=4)
    f.circle(230, 300, 16, fill="#4FA3D1", stroke="white", width=3)
    f.txtc(230, 130, "source", size=28, color=BLEU, bold=True)
    f.line(230, 320, 230, 380, color="#4FA3D1", width=6)
    # cours d'eau qui s'élargit
    haut = [(215, 380), (420, 395), (650, 410), (860, 425), (1010, 435)]
    bas = [(245, 380), (430, 415), (660, 455), (870, 490), (1010, 515)]
    f.poly(haut + bas[::-1], fill="#4FA3D1", stroke=NOIR, width=3)
    f.txtc(430, 340, "le cours d'eau", size=26, color=NOIR)
    # mer et embouchure
    f.rect(950, 400, 1100, 600, fill="#BBD9EE", stroke=NOIR, width=3)
    f.txtc(1030, 545, "embouchure", size=26, color=ROUGE, bold=True)
    f.txtc(1030, 585, "la mer", size=26, color=NOIR)
    f.txtc(550, 560, "L'eau descend de la montagne vers la mer : elle ne remonte "
                     "jamais.", size=26, color=GRIS)
    return f.save(path)


def amont_aval_rives(path):
    """Séance 49 — amont, aval, rive gauche et rive droite."""
    f = Fig(1100, 620)
    f.txtc(550, 15, "AMONT, AVAL ET RIVES", size=36, color=BLEU, bold=True)
    pts = [(140, 130), (300, 210), (420, 300), (560, 360), (720, 440), (900, 500)]
    haut = [(x - 26, y - 26) for x, y in pts]
    bas = [(x + 26, y + 26) for x, y in pts]
    f.poly(haut + bas[::-1], fill="#4FA3D1", stroke=NOIR, width=3)
    # flèche du sens de l'écoulement
    f.line(430, 200, 640, 330, color=ROUGE, width=5)
    f.poly([(660, 342), (612, 330), (638, 300)], fill=ROUGE, stroke=ROUGE)
    f.txtc(700, 175, "aval", size=32, color=ROUGE, bold=True)
    f.txtc(230, 400, "amont", size=32, color=BLEU, bold=True)
    # rives : on regarde dans le sens de l'écoulement
    f.txtc(300, 95, "rive gauche", size=28, color=VERT, bold=True)
    f.txtc(620, 545, "rive droite", size=28, color=VERT, bold=True)
    f.line(260, 118, 220, 165, color=VERT, width=3)
    f.line(600, 520, 560, 480, color=VERT, width=3)
    f.txtc(550, 585, "On se place dans le sens du courant pour nommer les rives.",
           size=26, color=GRIS)
    return f.save(path)


def reseau_hydro(path):
    """Séance 50 — affluents, confluent et bassin versant."""
    f = Fig(1100, 700)
    f.txtc(550, 15, "LE RÉSEAU HYDROGRAPHIQUE", size=36, color=BLEU, bold=True)
    # limite du bassin versant
    f.poly([(120, 90), (560, 60), (1010, 110), (1010, 590), (560, 640), (120, 600)],
           fill="none", stroke=GRIS, width=4)
    # cours principal : de haut en bas
    tronc = [(560, 100), (545, 240), (575, 380), (555, 520), (570, 620)]
    f.poly([(x - 16, y) for x, y in tronc] + [(x + 16, y) for x, y in tronc][::-1],
           fill="#4FA3D1", stroke=NOIR, width=3)
    f.txtc(760, 300, "fleuve", size=30, color=BLEU, bold=True)
    # affluents de gauche
    for (x1, y1), (x2, y2) in [((150, 180), (548, 250)), ((170, 480), (558, 520))]:
        f.line(x1, y1, x2, y2, color="#4FA3D1", width=10)
    # affluents de droite
    for (x1, y1), (x2, y2) in [((960, 200), (560, 260)), ((950, 470), (562, 500))]:
        f.line(x1, y1, x2, y2, color="#4FA3D1", width=10)
    f.circle(554, 255, 13, fill=ROUGE, stroke="white", width=3)
    f.txtc(830, 175, "affluent", size=28, color=NOIR, bold=True)
    f.txtc(860, 225, "confluent", size=28, color=ROUGE, bold=True)
    f.line(820, 205, 570, 245, color=ROUGE, width=3)
    f.txtc(250, 620, "bassin versant", size=26, color=GRIS, bold=True)
    return f.save(path)


FIGURES_T2["img_s47_a.png"] = types_cours_eau
FIGURES_T2["img_s48_a.png"] = source_embouchure
FIGURES_T2["img_s49_a.png"] = amont_aval_rives
FIGURES_T2["img_s50_a.png"] = reseau_hydro


def jour_nuit(path):
    """Séance 56 — le jour et la nuit : la Terre, moitié éclairée."""
    f = Fig(1100, 620)
    f.txtc(550, 15, "LE JOUR ET LA NUIT", size=38, color=BLEU, bold=True)
    # soleil à gauche
    f.circle(150, 300, 70, fill="#F2B705", stroke="#E6A200", width=4)
    for a in range(0, 360, 45):
        import math
        x1 = 150 + 88 * math.cos(math.radians(a))
        y1 = 300 + 88 * math.sin(math.radians(a))
        x2 = 150 + 130 * math.cos(math.radians(a))
        y2 = 300 + 130 * math.sin(math.radians(a))
        f.line(int(x1), int(y1), int(x2), int(y2), color="#F2B705", width=6)
    # rayons vers la Terre
    for y in (220, 300, 380):
        f.line(230, y, 830, y, color="#F2B705", width=4)
    # la Terre : moitié jour (gauche) / moitié nuit (droite)
    f.circle(700, 300, 170, fill="#37474F", stroke=NOIR, width=5)
    f.args += ["-fill", "#FFE082", "-stroke", "none",
               "-draw", "arc 530,130 870,470 90,270", "-fill", "none"]
    f.circle(700, 300, 170, fill="none", stroke=NOIR, width=5)
    f.txtc(620, 250, "jour", size=36, color=NOIR, bold=True)
    f.txtc(790, 250, "nuit", size=36, color="white", bold=True)
    f.txtc(700, 545, "La partie éclairée a le jour, l'autre a la nuit.",
           size=26, color=GRIS)
    return f.save(path)


def rotation_terre(path):
    """Séance 57 — la Terre tourne sur elle-même en 24 heures."""
    f = Fig(1100, 620)
    f.txtc(550, 15, "LA TERRE TOURNE SUR ELLE-MÊME", size=36, color=BLEU, bold=True)
    f.circle(120, 300, 65, fill="#F2B705", stroke="#E6A200", width=4)
    f.circle(620, 300, 175, fill="#4FA3D1", stroke=NOIR, width=5)
    # axe de rotation incliné
    f.line(620, 90, 620, 510, color=ROUGE, width=5)
    f.txtc(620, 545, "axe de rotation", size=26, color=ROUGE, bold=True)
    # continents schématiques
    f.poly([(560, 220), (640, 200), (700, 260), (640, 330), (560, 300)],
           fill="#8BC34A", stroke=NOIR, width=3)
    f.poly([(650, 350), (720, 340), (730, 410), (660, 420)], fill="#8BC34A",
           stroke=NOIR, width=3)
    # flèche de rotation
    f.arc(430, 120, 810, 480, 250, 70, color=ROUGE, width=6)
    f.poly([(810, 300), (780, 275), (782, 315)], fill=ROUGE, stroke=ROUGE)
    f.txtc(880, 180, "rotation", size=30, color=ROUGE, bold=True)
    f.txtc(880, 225, "en 24 heures", size=26, color=NOIR)
    f.txtc(880, 400, "le jour", size=28, color=NOIR, bold=True)
    f.txtc(300, 400, "la nuit", size=28, color=NOIR, bold=True)
    return f.save(path)


def temps_quil_fait(path):
    """Séance 59 — quatre panneaux : beau, pluie, chaud, froid."""
    f = Fig(1100, 620)
    f.txtc(550, 15, "DÉCRIRE LE TEMPS QU'IL FAIT", size=36, color=BLEU, bold=True)
    cases = [("Il fait beau", "#F2B705", 60), ("Il pleut", "#4FA3D1", 320),
             ("Il fait chaud", ROUGE, 580), ("Il fait froid", BLEU, 840)]
    for titre, couleur, x in cases:
        f.rect(x, 90, x + 200, 400, fill="white", stroke=NOIR, width=3)
        f.txtc(x + 100, 415, titre, size=26, color=couleur, bold=True)
    # 1. soleil
    f.circle(160, 220, 52, fill="#F2B705", stroke="#E6A200", width=4)
    for a in range(0, 360, 45):
        import math
        f.line(int(160 + 66 * math.cos(math.radians(a))),
               int(220 + 66 * math.sin(math.radians(a))),
               int(160 + 92 * math.cos(math.radians(a))),
               int(220 + 92 * math.sin(math.radians(a))), color="#F2B705", width=5)
    # 2. nuage et pluie
    f.circle(370, 210, 40, fill="#90A4AE", stroke="none")
    f.circle(410, 195, 48, fill="#90A4AE", stroke="none")
    f.circle(450, 215, 36, fill="#90A4AE", stroke="none")
    f.rect(370, 215, 450, 240, fill="#90A4AE", stroke="none")
    for i in range(5):
        f.line(378 + i * 18, 260, 372 + i * 18, 320, color="#4FA3D1", width=6)
    # 3. thermomètre haut
    f.rect(750, 150, 780, 330, fill="white", stroke=NOIR, width=3)
    f.circle(765, 355, 26, fill=ROUGE, stroke=NOIR, width=3)
    f.rect(754, 190, 776, 340, fill=ROUGE, stroke="none")
    f.txtc(830, 200, "élevée", size=24, color=ROUGE, bold=True)
    # 4. thermomètre bas
    f.rect(1010, 150, 1040, 330, fill="white", stroke=NOIR, width=3)
    f.circle(1025, 355, 26, fill=BLEU, stroke=NOIR, width=3)
    f.rect(1014, 300, 1036, 340, fill=BLEU, stroke="none")
    f.txtc(915, 200, "basse", size=24, color=BLEU, bold=True)
    return f.save(path)


FIGURES_T3 = {
    "img_s56_a.png": jour_nuit,
    "img_s57_a.png": rotation_terre,
    "img_s59_a.png": temps_quil_fait,
}


def girouette(path):
    """Séance 60 — la girouette : la flèche indique d'où vient le vent."""
    f = Fig(1100, 700)
    f.txtc(550, 15, "LA GIROUETTE", size=38, color=BLEU, bold=True)
    # mât
    f.rect(540, 250, 560, 600, fill="#8D6E63", stroke=NOIR, width=3)
    # croix des directions, au pied du mât
    f.line(550, 620, 550, 520, color=NOIR, width=4)
    f.line(550, 620, 550, 690, color=NOIR, width=4)
    f.line(480, 620, 620, 620, color=NOIR, width=4)
    f.txtc(550, 495, "N", size=30, color=ROUGE, bold=True)
    f.txtc(550, 690, "S", size=30, color=ROUGE, bold=True)
    f.txtc(455, 610, "O", size=30, color=ROUGE, bold=True)
    f.txtc(645, 610, "E", size=30, color=ROUGE, bold=True)
    # flèche de la girouette, orientée vers l'ouest (le vent vient de l'ouest)
    f.poly([(360, 300), (470, 270), (470, 330)], fill=ROUGE, stroke=NOIR, width=3)
    f.rect(470, 292, 620, 308, fill=ROUGE, stroke=NOIR, width=3)
    f.poly([(620, 275), (690, 255), (690, 300), (620, 300)], fill="#E6A200",
           stroke=NOIR, width=3)
    f.poly([(620, 300), (690, 300), (690, 345), (620, 325)], fill="#E6A200",
           stroke=NOIR, width=3)
    f.circle(560, 300, 12, fill=NOIR, stroke="none")
    # le vent qui souffle vers l'est
    for y in (200, 240):
        f.line(750, y, 900, y, color="#4FA3D1", width=5)
    f.poly([(920, 220), (885, 196), (885, 244)], fill="#4FA3D1", stroke="#4FA3D1")
    f.txtc(830, 150, "le vent", size=28, color="#4FA3D1", bold=True)
    f.txtc(300, 300, "vient de", size=26, color=NOIR)
    f.txtc(300, 340, "l'OUEST", size=30, color=ROUGE, bold=True)
    f.txtc(550, 610, "La flèche se place face au vent : elle indique d'où il "
                     "vient.", size=24, color=GRIS)
    return f.save(path)


def construction_girouette(path):
    """Séance 61 — les quatre étapes de la fabrication."""
    f = Fig(1100, 620)
    f.txtc(550, 15, "CONSTRUIRE UNE GIROUETTE", size=36, color=BLEU, bold=True)
    etapes = [("1. Découper", "la flèche et", "l'empennage"),
              ("2. Fixer sur", "une paille", "avec une épingle"),
              ("3. Planter", "le tuteur", "bien droit"),
              ("4. Placer la", "croix N-S-E-O", "au pied")]
    for i, (l1, l2, l3) in enumerate(etapes):
        x = 40 + i * 265
        f.rect(x, 90, x + 240, 420, fill="white", stroke=NOIR, width=3)
        f.txtc(x + 120, 105, l1, size=26, color=BLEU, bold=True)
        f.txtc(x + 120, 145, l2, size=26, color=NOIR)
        f.txtc(x + 120, 185, l3, size=26, color=NOIR)
        if i == 0:      # flèche et empennage découpés
            f.poly([(x + 60, 300), (x + 130, 275), (x + 130, 325)], fill=ROUGE,
                   stroke=NOIR, width=3)
            f.rect(x + 130, 292, x + 190, 308, fill=ROUGE, stroke=NOIR, width=3)
            f.poly([(x + 190, 275), (x + 220, 260), (x + 220, 290)], fill="#E6A200",
                   stroke=NOIR, width=3)
            f.poly([(x + 190, 310), (x + 220, 310), (x + 220, 340)], fill="#E6A200",
                   stroke=NOIR, width=3)
        elif i == 1:    # la paille et l'épingle
            f.rect(x + 40, 292, x + 200, 312, fill="#F2B705", stroke=NOIR, width=3)
            f.circle(x + 120, 302, 9, fill=NOIR, stroke="none")
            f.line(x + 120, 250, x + 120, 292, color=NOIR, width=3)
        elif i == 2:    # le tuteur planté
            f.rect(x + 112, 220, x + 128, 400, fill="#8D6E63", stroke=NOIR, width=3)
            f.line(x + 60, 400, x + 180, 400, color=NOIR, width=4)
        else:           # la croix au pied
            f.line(x + 120, 250, x + 120, 380, color=NOIR, width=4)
            f.line(x + 60, 315, x + 180, 315, color=NOIR, width=4)
            f.txtc(x + 120, 215, "N", size=26, color=ROUGE, bold=True)
            f.txtc(x + 120, 385, "S", size=26, color=ROUGE, bold=True)
            f.txtc(x + 45, 305, "O", size=26, color=ROUGE, bold=True)
            f.txtc(x + 195, 305, "E", size=26, color=ROUGE, bold=True)
    f.txtc(550, 450, "Une girouette doit tourner librement : vérifie qu'elle "
                     "n'accroche pas.", size=26, color=GRIS)
    f.txtc(550, 500, "On la place dégagée, loin des arbres et des murs.",
           size=26, color=GRIS)
    return f.save(path)


def thermometre(path):
    """Séance 62 — lire une température sur un thermomètre."""
    f = Fig(1100, 620)
    f.txtc(550, 15, "LIRE UN THERMOMÈTRE", size=38, color=BLEU, bold=True)
    # corps du thermomètre
    f.rect(330, 90, 400, 500, fill="white", stroke=NOIR, width=4)
    f.circle(365, 540, 50, fill=ROUGE, stroke=NOIR, width=4)
    f.rect(345, 300, 385, 500, fill=ROUGE, stroke="none")
    # graduations de 0 à 50
    for deg in range(0, 51, 5):
        y = 500 - deg * 8
        grand = deg % 10 == 0
        f.line(400, y, 400 + (40 if grand else 22), y, color=NOIR, width=3)
        if grand:
            f.txt(450, y - 16, "%d °C" % deg, size=26, color=NOIR, bold=True)
    # lecture : 25 °C
    f.line(400, 300, 460, 300, color=ROUGE, width=6)
    f.txt(480, 275, "la température", size=26, color=ROUGE, bold=True)
    f.txt(480, 315, "lue : 25 °C", size=30, color=ROUGE, bold=True)
    f.line(470, 300, 400, 300, color=ROUGE, width=4)
    f.txtc(180, 250, "le liquide monte", size=26, color=NOIR)
    f.txtc(180, 290, "quand il fait chaud", size=26, color=NOIR)
    f.txtc(180, 400, "le liquide descend", size=26, color=NOIR)
    f.txtc(180, 440, "quand il fait froid", size=26, color=NOIR)
    return f.save(path)


def graphique_temperatures(path):
    """Séance 63 — la courbe des températures au cours d'une journée."""
    f = Fig(1100, 700)
    f.txtc(550, 15, "LES TEMPÉRATURES D'UNE JOURNÉE", size=34, color=BLEU,
           bold=True)
    # axes
    x0, y0, x1, y1 = 140, 120, 1020, 560
    f.line(x0, y0, x0, y1, color=NOIR, width=4)
    f.line(x0, y1, x1, y1, color=NOIR, width=4)
    for deg, y in [(10, 500), (15, 440), (20, 380), (25, 320), (30, 260)]:
        f.line(x0, y, x1, y, color="#E0E0E0", width=2)
        f.txt(60, y - 16, "%d°" % deg, size=24, color=NOIR)
    heures = ["6 h", "9 h", "12 h", "15 h", "18 h"]
    points = [(240, 480), (420, 400), (600, 300), (780, 330), (960, 450)]
    for (x, y), h in zip(points, heures):
        f.line(x, y1, x, y1 + 10, color=NOIR, width=3)
        f.txtc(x, y1 + 15, h, size=24, color=NOIR)
        f.circle(x, y, 10, fill=ROUGE, stroke="white", width=3)
    for i in range(len(points) - 1):
        f.line(points[i][0], points[i][1], points[i + 1][0], points[i + 1][1],
               color=ROUGE, width=5)
    f.txtc(600, 275, "le maximum vers 14 h - 15 h", size=24, color=ROUGE, bold=True)
    f.txtc(240, 520, "le minimum le matin", size=24, color=BLEU, bold=True)
    f.txtc(550, 640, "La courbe monte le matin, atteint son maximum l'après-midi, "
                     "puis redescend.", size=26, color=GRIS)
    return f.save(path)


FIGURES_T3["img_s60_a.png"] = girouette
FIGURES_T3["img_s61_a.png"] = construction_girouette
FIGURES_T3["img_s62_a.png"] = thermometre
FIGURES_T3["img_s63_a.png"] = graphique_temperatures


def calendrier_mois(path):
    """Séance 64 — suivre le temps pendant un mois : une grille de symboles."""
    f = Fig(1100, 700)
    f.txtc(550, 15, "SUIVRE LE TEMPS PENDANT UN MOIS", size=34, color=BLEU,
           bold=True)
    x0, y0, c, l = 90, 90, 130, 100
    for i in range(30):
        col, lig = i % 7, i // 7
        x, y = x0 + col * c, y0 + lig * l
        f.rect(x, y, x + 118, y + 88, fill="white", stroke=NOIR, width=3)
        f.txtc(x + 59, y + 6, str(i + 1), size=22, color=GRIS)
        etat = i % 4                       # 0 beau, 1 pluie, 2 couvert, 3 beau
        cy = y + 55
        if etat in (0, 3):
            f.circle(x + 59, cy, 17, fill="#F2B705", stroke="#E6A200", width=3)
        elif etat == 1:
            f.circle(x + 45, cy - 4, 14, fill="#90A4AE", stroke="none")
            f.circle(x + 59, cy - 10, 17, fill="#90A4AE", stroke="none")
            f.circle(x + 73, cy - 4, 13, fill="#90A4AE", stroke="none")
            f.rect(x + 45, cy - 8, x + 73, cy + 4, fill="#90A4AE", stroke="none")
            for k in range(3):
                f.line(x + 48 + k * 11, cy + 10, x + 45 + k * 11, cy + 26,
                       color="#4FA3D1", width=4)
        else:
            f.circle(x + 50, cy, 13, fill="#B0BEC5", stroke="none")
            f.circle(x + 68, cy, 15, fill="#B0BEC5", stroke="none")
            f.rect(x + 50, cy, x + 68, cy + 15, fill="#B0BEC5", stroke="none")
    # légende
    f.rect(90, 600, 1010, 680, fill="white", stroke=NOIR, width=3)
    f.txtc(290, 615, "LÉGENDE", size=24, color=NOIR, bold=True)
    f.circle(150, 655, 15, fill="#F2B705", stroke="#E6A200", width=3)
    f.txtc(240, 640, "beau", size=24, color=NOIR)
    f.circle(390, 655, 14, fill="#B0BEC5", stroke="none")
    f.txtc(470, 640, "couvert", size=24, color=NOIR)
    for k in range(3):
        f.line(650 + k * 12, 662, 647 + k * 12, 680, color="#4FA3D1", width=4)
    f.txtc(760, 640, "pluie", size=24, color=NOIR)
    return f.save(path)


def saisons(path):
    """Séance 65 — les deux saisons de Madagascar."""
    f = Fig(1100, 700)
    f.txtc(550, 15, "LES DEUX SAISONS DE MADAGASCAR", size=34, color=BLEU,
           bold=True)
    # panneau gauche : saison des pluies
    f.rect(60, 90, 520, 400, fill="#BBD9EE", stroke=NOIR, width=4)
    f.txtc(290, 105, "SAISON DES PLUIES", size=30, color=BLEU, bold=True)
    f.txtc(290, 145, "novembre à avril", size=26, color=NOIR)
    f.circle(200, 240, 30, fill="#90A4AE", stroke="none")
    f.circle(250, 225, 36, fill="#90A4AE", stroke="none")
    f.circle(300, 245, 28, fill="#90A4AE", stroke="none")
    f.rect(200, 240, 300, 265, fill="#90A4AE", stroke="none")
    for k in range(6):
        f.line(190 + k * 22, 285, 184 + k * 22, 350, color="#4FA3D1", width=6)
    f.rect(120, 360, 460, 385, fill="#8BC34A", stroke=NOIR, width=3)
    f.txtc(290, 355, "rizières vertes", size=24, color=NOIR)
    # panneau droite : saison sèche
    f.rect(580, 90, 1040, 400, fill="#FFF3E0", stroke=NOIR, width=4)
    f.txtc(810, 105, "SAISON SÈCHE", size=30, color="#EF6C00", bold=True)
    f.txtc(810, 145, "mai à octobre", size=26, color=NOIR)
    f.circle(810, 250, 45, fill="#F2B705", stroke="#E6A200", width=4)
    for a in range(0, 360, 45):
        import math
        f.line(int(810 + 58 * math.cos(math.radians(a))),
               int(250 + 58 * math.sin(math.radians(a))),
               int(810 + 80 * math.cos(math.radians(a))),
               int(250 + 80 * math.sin(math.radians(a))), color="#F2B705", width=6)
    f.rect(640, 360, 980, 385, fill="#D7CCC8", stroke=NOIR, width=3)
    f.txtc(810, 355, "sols secs, ciel clair", size=24, color=NOIR)
    # bande des douze mois
    mois = ["N", "D", "J", "F", "M", "A", "M", "J", "J", "A", "S", "O"]
    for i, m in enumerate(mois):
        x = 60 + i * 82
        humide = i <= 5                     # novembre -> avril
        f.rect(x, 460, x + 78, 540, fill="#4FA3D1" if humide else "#F2B705",
               stroke=NOIR, width=3)
        f.txtc(x + 39, 475, m, size=28, color="white", bold=True)
    f.txtc(290, 560, "saison des pluies", size=24, color="#4FA3D1", bold=True)
    f.txtc(810, 560, "saison sèche", size=24, color="#EF6C00", bold=True)
    f.txtc(550, 620, "Deux saisons seulement : une humide et une sèche.",
           size=28, color=GRIS)
    return f.save(path)


def tableau_graphique(path):
    """Séance 66 — du tableau au graphique."""
    f = Fig(1100, 760)
    f.txtc(550, 15, "DU TABLEAU AU GRAPHIQUE", size=36, color=BLEU, bold=True)
    # le tableau
    f.rect(80, 90, 480, 400, fill="white", stroke=NOIR, width=4)
    f.txtc(280, 105, "TABLEAU DES RELEVÉS", size=26, color=NOIR, bold=True)
    for i in range(6):
        y = 155 + i * 45
        f.line(80, y, 480, y, color=NOIR, width=2)
    for x in (230, 355):
        f.line(x, 155, x, 400, color=NOIR, width=2)
    f.txtc(155, 170, "Jour", size=24, color=NOIR, bold=True)
    f.txtc(292, 170, "Température", size=24, color=NOIR, bold=True)
    f.txtc(417, 170, "Temps", size=24, color=NOIR, bold=True)
    for i, (j, t, c) in enumerate([("lundi", "24 °C", "beau"),
                                   ("mardi", "26 °C", "beau"),
                                   ("mercredi", "22 °C", "pluie"),
                                   ("jeudi", "25 °C", "couvert"),
                                   ("vendredi", "27 °C", "beau")]):
        y = 215 + i * 45
        f.txtc(155, y, j, size=24, color=NOIR)
        f.txtc(292, y, t, size=24, color=ROUGE, bold=True)
        f.txtc(417, y, c, size=24, color=NOIR)
    # le graphique correspondant
    f.rect(560, 90, 1040, 400, fill="white", stroke=NOIR, width=4)
    f.txtc(800, 105, "GRAPHIQUE", size=26, color=NOIR, bold=True)
    x0, y0, y1 = 620, 165, 370
    f.line(x0, y0, x0, y1, color=NOIR, width=4)
    f.line(x0, y1, 1010, y1, color=NOIR, width=4)
    for deg, y in [(20, 330), (25, 290), (30, 250)]:
        f.line(x0, y, 1010, y, color="#E0E0E0", width=2)
        f.txt(575, y - 16, "%d°" % deg, size=22, color=NOIR)
    pts = [(680, 300), (760, 285), (840, 315), (920, 292), (1000, 280)]
    for i, (x, y) in enumerate(pts):
        f.circle(x, y, 9, fill=ROUGE, stroke="white", width=3)
        f.txtc(x, y1 + 15, "L M M J V"[i], size=24, color=NOIR)
    for i in range(len(pts) - 1):
        f.line(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], color=ROUGE,
               width=5)
    f.txtc(550, 430, "Le graphique montre la tendance d'un seul coup "
                     "d'œil.", size=26, color=GRIS)
    f.txtc(550, 480, "Le tableau donne les valeurs exactes jour par jour.",
           size=26, color=GRIS)
    f.txtc(550, 540, "Un géographe utilise les deux : le tableau pour "
                     "relever, le graphique pour comparer.", size=26, color=BLEU)
    return f.save(path)


FIGURES_T3["img_s64_a.png"] = calendrier_mois
FIGURES_T3["img_s65_a.png"] = saisons
FIGURES_T3["img_s66_a.png"] = tableau_graphique


def effectif_classe(path):
    """Séance 68 — compter la population de la classe."""
    f = Fig(1100, 620)
    f.txtc(550, 15, "LA POPULATION DE LA CLASSE", size=36, color=BLEU, bold=True)
    garcons = [i for i in range(30) if i % 7 != 5]
    for i in range(30):
        col, lig = i % 10, i // 10
        x = 110 + col * 90
        y = 110 + lig * 150
        bleu = i in garcons
        couleur = "#4FA3D1" if bleu else "#F48FB1"
        f.circle(x, y, 20, fill=couleur, stroke=NOIR, width=3)
        f.poly([(x - 26, y + 105), (x + 26, y + 105), (x + 18, y + 38),
                (x - 18, y + 38)], fill=couleur, stroke=NOIR, width=3)
    f.rect(90, 440, 1010, 520, fill="white", stroke=NOIR, width=3)
    f.circle(160, 470, 16, fill="#4FA3D1", stroke=NOIR, width=3)
    f.txtc(280, 455, "garçons : 17", size=26, color=NOIR, bold=True)
    f.circle(520, 470, 16, fill="#F48FB1", stroke=NOIR, width=3)
    f.txtc(640, 455, "filles : 13", size=26, color=NOIR, bold=True)
    f.txtc(880, 455, "total : 30", size=28, color=ROUGE, bold=True)
    f.txtc(550, 555, "L'effectif est le nombre de personnes d'un groupe.",
           size=26, color=GRIS)
    return f.save(path)


def effectif_ecole(path):
    """Séance 69 — la population de l'école, par niveau."""
    f = Fig(1100, 700)
    f.txtc(550, 15, "LA POPULATION DE L'ÉCOLE", size=36, color=BLEU, bold=True)
    niveaux = [("7e A", 34), ("7e B", 32), ("8e A", 30), ("8e B", 28),
               ("9e A", 30), ("9e B", 26)]
    x0, y0, large, hmax = 120, 560, 130, 380
    f.line(x0, y0, 1030, y0, color=NOIR, width=4)
    f.line(x0, y0, x0, y0 - hmax, color=NOIR, width=4)
    for deg, y in [(0, 560), (10, 500), (20, 440), (30, 380), (40, 320)]:
        f.line(x0, y, 1030, y, color="#E0E0E0", width=2)
        f.txt(60, y - 18, str(deg), size=24, color=NOIR)
    for i, (niv, n) in enumerate(niveaux):
        x = x0 + 20 + i * large
        h = int(n / 40 * hmax)
        f.rect(x, y0 - h, x + 80, y0, fill="#4FA3D1", stroke=NOIR, width=3)
        f.txtc(x + 40, y0 - h - 42, str(n), size=26, color=NOIR, bold=True)
        f.txtc(x + 40, y0 + 15, niv, size=26, color=NOIR, bold=True)
    f.txtc(550, 640, "Total de l'école : 180 élèves", size=30, color=ROUGE,
           bold=True)
    f.txtc(550, 680, "On additionne les effectifs de toutes les classes.",
           size=26, color=GRIS)
    return f.save(path)


def emboitement_population(path):
    """Séance 70 — la classe dans l'école, l'école dans le village."""
    f = Fig(1100, 700)
    f.txtc(550, 15, "DE LA CLASSE AU VILLAGE", size=36, color=BLEU, bold=True)
    f.rect(140, 100, 960, 620, fill="#FFF8E1", stroke="#EF6C00", width=5)
    f.txtc(550, 120, "LE VILLAGE — 1 200 habitants", size=30, color="#EF6C00",
           bold=True)
    f.rect(260, 200, 840, 560, fill="#E3F2FD", stroke=BLEU, width=5)
    f.txtc(550, 220, "L'ÉCOLE — 180 élèves", size=30, color=BLEU,
           bold=True)
    f.rect(400, 320, 700, 520, fill="#E8F5E9", stroke=VERT, width=5)
    f.txtc(550, 340, "LA CLASSE", size=30, color=VERT, bold=True)
    f.txtc(550, 400, "30 élèves", size=34, color=NOIR, bold=True)
    f.txtc(550, 650, "Chaque ensemble est contenu dans le suivant.", size=28,
           color=GRIS)
    return f.save(path)


def repartition_sexe(path):
    """Séance 71 — répartir la population par sexe."""
    f = Fig(1100, 620)
    f.txtc(550, 15, "LA RÉPARTITION PAR SEXE", size=36, color=BLEU, bold=True)
    # deux colonnes de bonshommes
    for i in range(17):
        col, lig = i % 6, i // 6
        x = 180 + col * 70
        y = 130 + lig * 140
        f.circle(x, y, 18, fill="#4FA3D1", stroke=NOIR, width=3)
        f.poly([(x - 24, y + 100), (x + 24, y + 100), (x + 16, y + 34),
                (x - 16, y + 34)], fill="#4FA3D1", stroke=NOIR, width=3)
    for i in range(13):
        col, lig = i % 6, i // 6
        x = 700 + col * 70
        y = 130 + lig * 140
        f.circle(x, y, 18, fill="#F48FB1", stroke=NOIR, width=3)
        f.poly([(x - 24, y + 100), (x + 24, y + 100), (x + 16, y + 34),
                (x - 16, y + 34)], fill="#F48FB1", stroke=NOIR, width=3)
    f.txtc(345, 545, "garçons : 17", size=28, color=NOIR, bold=True)
    f.txtc(865, 545, "filles : 13", size=28, color=NOIR, bold=True)
    f.txtc(550, 590, "total : 30 élèves", size=28, color=ROUGE, bold=True)
    return f.save(path)


FIGURES_T3["img_s68_a.png"] = effectif_classe
FIGURES_T3["img_s69_a.png"] = effectif_ecole
FIGURES_T3["img_s70_a.png"] = emboitement_population
FIGURES_T3["img_s71_a.png"] = repartition_sexe


def groupes_age(path):
    """Séance 72 — trois groupes d'âge."""
    f = Fig(1100, 620)
    f.txtc(550, 15, "LES GROUPES D'ÂGE", size=38, color=BLEU, bold=True)
    groupes = [("0 - 14 ans", "les jeunes", 44, "#8BC34A", 130),
               ("15 - 59 ans", "les adultes", 50, "#4FA3D1", 270),
               ("60 ans et plus", "les personnes âgées", 6,
                "#EF6C00", 410)]
    for titre, descr, pct, couleur, y in groupes:
        f.rect(90, y, 90 + pct * 14, y + 90, fill=couleur, stroke=NOIR, width=3)
        f.txtc(90 + pct * 14 + 20, y + 20, "%d %%" % pct, size=30, color=NOIR,
               bold=True)
        f.txt(100, y + 25, titre, size=28, color="white", bold=True)
        f.txt(100, y + 65, descr, size=24, color="white")
    f.txtc(550, 545, "La somme des trois groupes fait cent pour cent.",
           size=28, color=GRIS)
    return f.save(path)


def tableau_structure(path):
    """Séance 73 — le tableau de structure : sexe et âge croisés."""
    f = Fig(1100, 700)
    f.txtc(550, 15, "LE TABLEAU DE STRUCTURE", size=36, color=BLEU, bold=True)
    x0, y0, cw, ch = 120, 110, 220, 90
    f.rect(x0, y0, x0 + 4 * cw, y0 + 4 * ch, fill="white", stroke=NOIR, width=4)
    for i in range(5):
        y = y0 + i * ch
        f.line(x0, y, x0 + 4 * cw, y, color=NOIR, width=3)
    for i in range(5):
        x = x0 + i * cw
        f.line(x, y0, x, y0 + 4 * ch, color=NOIR, width=3)
    entetes = ["", "0 - 14 ans", "15 - 59 ans", "60 ans et +", "Total"]
    for i, t in enumerate(entetes):
        f.txtc(x0 + i * cw + cw // 2, y0 + 25, t, size=24, color=BLEU, bold=True)
    lignes = [("Garçons", "120", "140", "40", "300"),
              ("Filles", "115", "145", "45", "305"),
              ("Total", "235", "285", "85", "605")]
    for j, lig in enumerate(lignes):
        y = y0 + (j + 1) * ch + 28
        for i, val in enumerate(lig):
            coul = NOIR
            gras = i == 0 or j == 2
            f.txtc(x0 + i * cw + cw // 2, y, val, size=26, color=coul, bold=gras)
    f.txtc(550, 490, "Chaque case se lit à la croisée d'une ligne et "
                     "d'une colonne.", size=26, color=GRIS)
    f.txtc(550, 540, "Le total de la dernière colonne est l'effectif du "
                     "village.", size=26, color=BLEU)
    f.txtc(550, 590, "Le total de la dernière ligne donne chaque groupe "
                     "d'âge.", size=26, color=BLEU)
    return f.save(path)


def mouvements_population(path):
    """Séance 74 — naissances, décès, arrivées et départs."""
    f = Fig(1100, 700)
    f.txtc(550, 15, "LES MOUVEMENTS DE LA POPULATION", size=34, color=BLEU,
           bold=True)
    f.rect(390, 260, 710, 440, fill="#E3F2FD", stroke=BLEU, width=5)
    f.txtc(550, 300, "LA POPULATION", size=30, color=BLEU, bold=True)
    f.txtc(550, 345, "DU VILLAGE", size=30, color=BLEU, bold=True)
    f.txtc(550, 395, "605 habitants", size=28, color=NOIR, bold=True)
    # naissances : flèche entrante en haut à gauche
    f.line(120, 180, 370, 290, color=VERT, width=6)
    f.poly([(385, 296), (340, 262), (345, 300)], fill=VERT, stroke=VERT)
    f.txtc(190, 110, "NAISSANCES", size=30, color=VERT, bold=True)
    f.txtc(190, 155, "la population augmente", size=22, color=NOIR)
    # décès : flèche sortante en bas à gauche
    f.line(370, 410, 120, 530, color=ROUGE, width=6)
    f.poly([(110, 540), (160, 512), (118, 505)], fill=ROUGE, stroke=ROUGE)
    f.txtc(190, 565, "DÉCÈS", size=30, color=ROUGE, bold=True)
    f.txtc(190, 610, "la population diminue", size=22, color=NOIR)
    # arrivées : flèche entrante à droite
    f.line(1010, 180, 740, 290, color="#7E57C2", width=6)
    f.poly([(725, 296), (770, 268), (762, 305)], fill="#7E57C2", stroke="#7E57C2")
    f.txtc(910, 110, "ARRIVÉES", size=30, color="#7E57C2", bold=True)
    f.txtc(910, 155, "immigration", size=22, color=NOIR)
    # départs : flèche sortante à droite
    f.line(740, 410, 1010, 530, color="#EF6C00", width=6)
    f.poly([(1020, 540), (968, 512), (1008, 500)], fill="#EF6C00",
           stroke="#EF6C00")
    f.txtc(910, 565, "DÉPARTS", size=30, color="#EF6C00", bold=True)
    f.txtc(910, 610, "émigration", size=22, color=NOIR)
    return f.save(path)


def croissance_population(path):
    """Séance 75 — une population qui augmente, et pourquoi."""
    f = Fig(1100, 700)
    f.txtc(550, 15, "UNE POPULATION QUI AUGMENTE", size=34, color=BLEU,
           bold=True)
    x0, y0, x1, y1 = 160, 560, 1010, 130
    f.line(x0, y0, x0, y1, color=NOIR, width=4)
    f.line(x0, y0, x1, y0, color=NOIR, width=4)
    for hab, y in [(0, 520), (200, 440), (400, 360), (600, 280), (800, 200)]:
        f.line(x0, y, x1, y, color="#E0E0E0", width=2)
        f.txt(60, y - 16, str(hab), size=22, color=NOIR)
    annees = ["1960", "1980", "2000", "2020"]
    pts = [(280, 500), (500, 430), (720, 320), (940, 210)]
    for (x, y), a in zip(pts, annees):
        f.circle(x, y, 10, fill=ROUGE, stroke="white", width=3)
        f.txtc(x, y0 + 15, a, size=26, color=NOIR)
    for i in range(len(pts) - 1):
        f.line(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], color=ROUGE,
               width=6)
    f.txtc(830, 250, "la courbe monte :", size=26, color=ROUGE, bold=True)
    f.txtc(830, 290, "la population augmente", size=26, color=ROUGE)
    f.txtc(550, 630, "Plus il naît de personnes qu'il n'en meurt, plus la "
                     "population augmente.", size=26, color=GRIS)
    f.txtc(550, 670, "C'est le cas de Madagascar depuis plusieurs dizaines "
                     "d'années.", size=26, color=GRIS)
    return f.save(path)


FIGURES_T3["img_s72_a.png"] = groupes_age
FIGURES_T3["img_s73_a.png"] = tableau_structure
FIGURES_T3["img_s74_a.png"] = mouvements_population
FIGURES_T3["img_s75_a.png"] = croissance_population
