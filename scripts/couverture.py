#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Adapte une maquette de couverture J-Learn à une matière et un niveau donnés.

Usage :
    python3 scripts/couverture.py bookcovers3.png couverture-SVT-T9.png \\
        --titre SVT --niveau T9 --tableau "CONTENU PE"

    # inspecter la maquette sans rien écrire
    python3 scripts/couverture.py bookcovers3.png --mesurer

Les maquettes du dépôt (`bookcovers1.png` … `bookcovers6.png`) partagent la
même composition mais **pas les mêmes dimensions** (1024x1536, 1029x1528,
843x1264…). Aucune coordonnée n'est donc codée en dur : le script mesure
chaque maquette avant de la retoucher. C'est la raison d'être de `--mesurer`.

Principe de la retouche, en trois temps :

1. Repérer les bandes de texte de l'en-tête (pixels sombres sur fond clair) en
   ignorant la colonne du logo, qui fausserait le centrage.
2. Effacer le mot écrit à la craie sur le tableau par diffusion de Laplace.
   Le tableau porte un dégradé de lumière : un aplat de vert laisse une tache
   visible, et recopier une zone voisine risque d'importer le cadre en bois.
   La diffusion ne propage que les pixels sains du pourtour.
3. Redessiner les textes centrés sur le milieu réel de l'image, à hauteur de
   capitale et couleur relevées sur l'original.

Le script garantit qu'aucun pixel n'est modifié hors des zones de texte, et
le vérifie lui-même en fin de traitement (`--verifier`, actif par défaut).
"""

import argparse
import os
import sys

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

POLICE_DEFAUT = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"

# Seuil de « pixel sombre » sur fond clair, en somme R+V+B.
SEUIL_SOMBRE = 330


def bandes_texte(arr, y_max, x_min, x_max):
    """Repère les bandes horizontales contenant du texte sombre."""
    sombre = arr.sum(2) < SEUIL_SOMBRE
    lignes = [y for y in range(y_max) if sombre[y, x_min:x_max].sum() > 3]
    bandes, debut, prec = [], None, None
    for y in lignes:
        if prec is None or y - prec > 8:
            if debut is not None:
                bandes.append((debut, prec))
            debut = y
        prec = y
    if debut is not None:
        bandes.append((debut, prec))
    return [(a, b) for a, b in bandes if b - a >= 15]


def boite_texte(arr, y0, y1, x_min, x_max):
    """Boîte englobante et couleur moyenne du texte d'une bande."""
    sombre = arr.sum(2) < SEUIL_SOMBRE
    m = sombre[y0:y1 + 1, x_min:x_max]
    cols = np.where(m.sum(0) > 0)[0]
    rows = np.where(m.sum(1) > 0)[0]
    if not len(cols) or not len(rows):
        return None
    sub = arr[y0 + rows.min():y0 + rows.max() + 1,
              x_min + cols.min():x_min + cols.max() + 1].reshape(-1, 3)
    s = sub.sum(1)
    couleur = tuple(int(v) for v in sub[s < np.percentile(s, 5)].mean(0))
    return dict(y0=y0 + int(rows.min()), y1=y0 + int(rows.max()),
                x0=x_min + int(cols.min()), x1=x_min + int(cols.max()),
                couleur=couleur)


def zone_craie(arr):
    """Repère le mot écrit à la craie colorée sur le tableau."""
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    rose = (r - g > 10) & (b - g > 6) & (arr.sum(2) < 640)
    if not rose.any():
        return None
    # D'autres éléments de la photo tombent dans la gamme rose (teint de la
    # peau, reflets). On retient le plus gros bloc de lignes contiguës, qui
    # est le mot à la craie — les parasites forment des amas bien plus petits.
    densite = rose.sum(1)
    groupes, debut = [], None
    for y in range(len(densite)):
        if densite[y] > 20:
            if debut is None:
                debut = y
        elif debut is not None:
            groupes.append((debut, y - 1))
            debut = None
    if debut is not None:
        groupes.append((debut, len(densite) - 1))
    if not groupes:
        return None
    y0, y1 = max(groupes, key=lambda g: rose[g[0]:g[1] + 1].sum())
    bande = rose[y0:y1 + 1]
    xs2 = np.where(bande.sum(0) > 0)[0]
    zone = np.zeros_like(rose)
    zone[y0:y1 + 1] = bande
    # La moyenne brute mêlerait le vert sombre du tableau aux traits de craie
    # et donnerait une teinte terne. On ne retient que les pixels les plus
    # clairs de la zone, qui sont le coeur du tracé.
    pix = arr[zone]
    clairs = pix[pix.sum(1) >= np.percentile(pix.sum(1), 75)]
    couleur = tuple(int(v) for v in clairs.mean(0))
    return dict(y0=y0, y1=y1, x0=int(xs2.min()), x1=int(xs2.max()),
                couleur=couleur)


def effacer_par_diffusion(arr, y0, y1, x0, x1, marge=40, iterations=900):
    """Reconstruit une zone à partir de son pourtour (équation de Laplace)."""
    h, w = arr.shape[:2]
    ya, yb = max(0, y0 - marge), min(h, y1 + marge)
    xa, xb = max(0, x0 - marge), min(w, x1 + marge)
    fen = arr[ya:yb, xa:xb].astype(np.float64).copy()
    masque = np.zeros(fen.shape[:2], bool)
    masque[y0 - ya:y1 - ya, x0 - xa:x1 - xa] = True
    fen[masque] = fen[~masque].mean(0)
    for _ in range(iterations):
        moy = (np.roll(fen, 1, 0) + np.roll(fen, -1, 0)
               + np.roll(fen, 1, 1) + np.roll(fen, -1, 1)) / 4.0
        fen[masque] = moy[masque]
    arr[ya:yb, xa:xb] = fen
    return arr


def taille_pour_hauteur(police, texte, hauteur_cible):
    """Plus petit corps dont la hauteur de capitale atteint la cible."""
    for taille in range(20, 400):
        f = ImageFont.truetype(police, taille)
        bb = f.getbbox(texte)
        if bb[3] - bb[1] >= hauteur_cible:
            return taille, f, bb
    raise ValueError("hauteur inatteignable")


def dessiner_centre(dessin, texte, police, taille_px, centre_x, haut, couleur):
    _, f, bb = taille_pour_hauteur(police, texte, taille_px)
    largeur = bb[2] - bb[0]
    dessin.text((centre_x - largeur / 2 - bb[0], haut - bb[1]),
                texte, font=f, fill=couleur)
    return largeur


def dessiner_craie(image, texte, police, zone, centre_x, largeur_max, graine=5):
    """Écrit un mot à l'aspect craie, en surimpression douce."""
    hauteur = zone["y1"] - zone["y0"]
    taille, _, _ = taille_pour_hauteur(police, texte, max(20, hauteur * 3 // 4))
    while True:
        f = ImageFont.truetype(police, taille)
        bb = f.getbbox(texte)
        if bb[2] - bb[0] <= largeur_max or taille <= 12:
            break
        taille -= 1
    # Tracé suréchantillonné puis réduit : bords moins durs qu'un tracé direct.
    ss = 4
    grand = Image.new("L", (image.size[0] * ss, image.size[1] * ss), 0)
    fb = ImageFont.truetype(police, taille * ss)
    bbb = fb.getbbox(texte)
    centre_y = (zone["y0"] + zone["y1"]) / 2
    ImageDraw.Draw(grand).text(
        (centre_x * ss - (bbb[2] - bbb[0]) / 2 - bbb[0],
         centre_y * ss - (bbb[1] + bbb[3]) / 2), texte, font=fb, fill=255)
    calque = grand.resize(image.size, Image.LANCZOS)
    calque = calque.filter(ImageFilter.GaussianBlur(0.6))
    empreinte = calque.getbbox()

    a = np.asarray(calque).astype(float) / 255.0
    rng = np.random.default_rng(graine)
    grain = rng.normal(1.0, 0.13, a.shape)
    creux = (rng.random(a.shape) > 0.06).astype(float)
    alpha = np.clip(a * grain * (0.75 + 0.25 * creux), 0, 1) * 0.9

    base = np.asarray(image).astype(float)
    craie = np.array(zone["couleur"], dtype=float)
    fusion = base * (1 - alpha[:, :, None]) + craie[None, None, :] * alpha[:, :, None]
    return Image.fromarray(np.clip(fusion, 0, 255).astype("uint8")), empreinte


def mesurer(chemin):
    im = Image.open(chemin).convert("RGB")
    arr = np.asarray(im).astype(int)
    larg, haut = im.size
    print(f"{chemin} — {larg}x{haut}, centre x = {larg // 2}")
    y_entete = int(haut * 0.30)
    marge = int(larg * 0.08)
    # Le logo occupe le coin haut droit : on l'écarte du calcul de centrage.
    x_logo = int(larg * 0.78)
    print("\n  Bandes de texte de l'en-tête :")
    for i, (a, b) in enumerate(bandes_texte(arr, y_entete, marge, larg - marge)):
        bt = boite_texte(arr, a, b, marge, x_logo)
        if bt:
            centre = (bt["x0"] + bt["x1"]) // 2
            print(f"    [{i}] y {bt['y0']}-{bt['y1']} (h={bt['y1']-bt['y0']+1})"
                  f"  x {bt['x0']}-{bt['x1']}  centre {centre}"
                  f"  couleur {bt['couleur']}")
    z = zone_craie(arr)
    if z:
        print(f"\n  Mot à la craie : y {z['y0']}-{z['y1']}  x {z['x0']}-{z['x1']}"
              f"  couleur {z['couleur']}")
    return im


def verifier(origine, resultat, zones):
    """Confirme qu'aucun pixel n'a bougé hors des zones de texte."""
    o = np.asarray(origine.convert("RGB")).astype(int)
    n = np.asarray(resultat.convert("RGB")).astype(int)
    diff = np.abs(o - n).sum(2) > 6
    autorise = np.zeros_like(diff)
    for (y0, y1, x0, x1) in zones:
        autorise[y0:y1, x0:x1] = True
    hors = int((diff & ~autorise).sum())
    print(f"  pixels modifiés : {int(diff.sum())} "
          f"({100 * diff.sum() / diff.size:.2f} %)")
    print(f"  pixels modifiés hors zones de texte : {hors}")
    return hors == 0


def adapter(source, sortie, titre, niveau, mot_tableau, police=POLICE_DEFAUT,
            i_titre=None, i_niveau=None):
    origine = Image.open(source).convert("RGB")
    im = origine.copy()
    arr = np.asarray(im).astype(int)
    larg, haut = im.size
    centre_x = larg / 2
    y_entete = int(haut * 0.30)
    marge = int(larg * 0.08)
    x_logo = int(larg * 0.78)

    bandes = bandes_texte(arr, y_entete, marge, larg - marge)
    boites = [boite_texte(arr, a, b, marge, x_logo) for a, b in bandes]
    boites = [b for b in boites if b]
    # Convention des maquettes J-Learn à quatre bandes : 0 = « FICHE DE
    # PRÉPARATION » (conservée), 1 = matière, 2 = niveau, 3 = slogan.
    # Plusieurs maquettes du dépôt s'en écartent : `bookcovers6.png` porte un
    # titre sur une seule ligne, si bien que la bande 2 y est le slogan. Écrire
    # le niveau dessus le détruirait. On refuse donc de deviner.
    if i_titre is None or i_niveau is None:
        if len(boites) != 4:
            mesurer(source)
            raise SystemExit(
                f"\nen-tête non standard : {len(boites)} bandes de texte "
                "détectées au lieu de 4.\nIndiquer explicitement les bandes à "
                "remplacer, par exemple :\n"
                "    --bande-titre 1 --bande-niveau 2")
        i_titre, i_niveau = 1, 2
    for nom, i in (("--bande-titre", i_titre), ("--bande-niveau", i_niveau)):
        if not 0 <= i < len(boites):
            raise SystemExit(f"{nom} {i} hors des {len(boites)} bandes détectées")
    b_matiere, b_niveau = boites[i_titre], boites[i_niveau]

    zones = []
    dessin = ImageDraw.Draw(im)
    fond = tuple(int(v) for v in arr[b_matiere["y0"] - 12, marge // 2])
    for boite, texte in ((b_matiere, titre), (b_niveau, niveau)):
        y0, y1 = boite["y0"] - 8, boite["y1"] + 10
        x0, x1 = marge // 2, x_logo
        dessin.rectangle([x0, y0, x1, y1], fill=fond)
        zones.append((y0, y1 + 1, x0, x1 + 1))
        dessiner_centre(dessin, texte, police,
                        boite["y1"] - boite["y0"] + 1, centre_x,
                        boite["y0"], boite["couleur"])

    if mot_tableau:
        arr2 = np.asarray(im).astype(int)
        z = zone_craie(arr2)
        if z:
            y0, y1 = z["y0"] - 6, z["y1"] + 8
            x0, x1 = z["x0"] - 14, z["x1"] + 14
            a = np.asarray(im).astype(np.float64).copy()
            a = effacer_par_diffusion(a, y0, y1, x0, x1)
            rng = np.random.default_rng(11)
            a[y0:y1, x0:x1] += rng.normal(0, 3.0, (y1 - y0, x1 - x0, 1))
            im = Image.fromarray(np.clip(a, 0, 255).astype("uint8"))
            # Le texte ne doit pas déborder sur le personnage de droite.
            im, empreinte = dessiner_craie(im, mot_tableau, police, z,
                                           centre_x,
                                           largeur_max=int(larg * 0.39))
            zones.append((y0, y1, x0, x1))
            if empreinte:
                ex0, ey0, ex1, ey1 = empreinte
                zones.append((ey0, ey1 + 1, ex0, ex1 + 1))

    im.save(sortie)
    print(f"écrit : {sortie}")
    ok = verifier(origine, im, zones)
    print("  contrôle :", "OK — hors-zone intact" if ok else "ÉCHEC")
    return 0 if ok else 1


def main():
    p = argparse.ArgumentParser(description=__doc__,
                                formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("source")
    p.add_argument("sortie", nargs="?")
    p.add_argument("--titre", help="matière, ex. SVT")
    p.add_argument("--niveau", help="classe, ex. T9")
    p.add_argument("--tableau", default="", help="mot écrit à la craie")
    p.add_argument("--police", default=POLICE_DEFAUT)
    p.add_argument("--mesurer", action="store_true")
    p.add_argument("--bande-titre", type=int, default=None,
                   help="index de la bande portant la matière (voir --mesurer)")
    p.add_argument("--bande-niveau", type=int, default=None,
                   help="index de la bande portant le niveau")
    a = p.parse_args()

    if a.mesurer or not a.sortie:
        mesurer(a.source)
        return 0
    if not (a.titre and a.niveau):
        p.error("--titre et --niveau sont requis")
    if not os.path.exists(a.police):
        p.error(f"police introuvable : {a.police}")
    return adapter(a.source, a.sortie, a.titre, a.niveau, a.tableau, a.police,
                   a.bande_titre, a.bande_niveau)


if __name__ == "__main__":
    sys.exit(main())
