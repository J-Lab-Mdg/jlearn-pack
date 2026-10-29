# -*- coding: utf-8 -*-
"""
sary_tsilo.py — « pouroi ne pas generer seulement l'image ? » (maitre, 2026-10-29)

Produit des images que l'on peut REGARDER, sans Word :

  output/fleche/tsilo-<n>.svg   la fleche seule, en vecteur (celle qui va dans le .docx)
  output/fleche/tsilo-<n>.png   la fleche seule, en pixels (fallback des anciennes versions)
  output/ajerena_tsilo.png      la page de l'exercice + celle du FANITSIANA, redrawes avec
                                LA MEME geometrie que le constructeur (bf.sary_fleche), donc
                                ce que l'on voit ici est ce que Word va afficher.

Il dit aussi si un fragment est trop long pour sa colonne : avec des rangees a hauteur
« exact », un texte qui passe a la ligne serait COUPE et deplacerait les fleches.

    ./run.sh src/sary_tsilo.py data_tsipelina_s2
"""
import glob
import os
import sys

import build_fiche as bf

try:
    from PIL import Image, ImageDraw, ImageFont
except Exception:                                   # pragma: no cover
    sys.exit("Pillow est requis : passer par ./run.sh")

TW2PT = 1.0 / 20.0          # twips -> points
EMU2PT = 1.0 / 12700.0
PX2PT = 72.0 / 96.0         # pixels 96 ppp -> points
MARGE_CELL = 5.4            # gouttiere gauche/droite par defaut, en points


def _police(pt):
    """Times New Roman n'existe pas dans le sandbox : DejaVu Serif est plus LARGE, donc
    une largeur qui passe ici passera a coup sur dans Word (controle conservateur)."""
    racines = [os.path.dirname(bf.__file__)]
    for base in (os.environ.get("PYTHONPATH", "") or "").split(os.pathsep):
        if base:
            racines.append(base)
    for motif in ("DejaVuSerif.ttf", "DejaVuSans.ttf", "FreeSerif.ttf", "LiberationSerif.ttf"):
        for r in racines:
            for p in glob.glob(os.path.join(r, "**", motif), recursive=True):
                try:
                    return ImageFont.truetype(p, int(round(pt * 96 / 72.0)))
                except Exception:
                    pass
    return ImageFont.load_default()


def _retirer_marques(txt):
    out = ""
    i = 0
    while i < len(txt):
        if txt.startswith("**", i):
            j = txt.find("**", i + 2)
            if j < 0:
                break
            i = j + 2
            continue
        out += txt[i]
        i += 1
    return out


def largeurs(lignes, fonte):
    """Largeur en points de chaque andalana (le texte est rendu en 12 pt dans le document)."""
    return [fonte.getlength(l) * PX2PT for l in lignes]


def dessiner_aperu(chemin, gauche, droite, fleches, titre, SC=6.0):
    cols = [c * TW2PT for c in bf.COLS_TSILO]
    w_tab = sum(cols)
    marge = 24.0
    haut_titre, pied = 20.0, 14.0
    h_tab = len(gauche) * bf.HAUT_LIGNE
    W = int(round((w_tab + 2 * marge) * SC))
    H = int(round((2 * (haut_titre + h_tab + pied) + 16) * SC))
    img = Image.new("RGB", (W, H), "white")
    dr = ImageDraw.Draw(img)
    fonte = _police(12)

    def table(base, gauche_txt, droite_txt, avec_fleches):
        dr.text((marge * SC, (base - haut_titre + 3) * SC), titre, font=_police(12), fill=(60, 60, 60))
        xs = [marge]
        for c in cols:
            xs.append(xs[-1] + c)
        for i in range(len(gauche_txt) + 1):
            y = (base + i * bf.HAUT_LIGNE) * SC
            dr.line([(marge * SC, y), (xs[-1] * SC, y)], fill=(190, 190, 190))
        for x in xs:
            dr.line([(x * SC, base * SC), (x * SC, (base + h_tab) * SC)], fill=(190, 190, 190))
        for i, g in enumerate(gauche_txt):
            yc = (base + i * bf.HAUT_LIGNE + 4.0) * SC
            dr.text(((marge + MARGE_CELL) * SC, yc), g, font=fonte, fill=(0, 0, 0))
            dr.text(((marge + cols[0] + cols[1] + MARGE_CELL) * SC, yc), droite_txt[i],
                    font=fonte, fill=(0, 0, 0))
        if avec_fleches:
            pas = SC * PX2PT          # px 96 ppp de l'image -> points -> pixels du sary
            for (i, j), g in fleches:
                # le box de l'image = (colonne afovoany + posH, haut'ny rangee + posV)
                bx = (marge + cols[0] + cols[1]) * SC + g["posH"] * EMU2PT * SC
                by = (base + i * bf.HAUT_LIGNE + g["posV"] * EMU2PT) * SC
                xL, yL, xR, yR = g["ligne"]
                dr.line([(bx + xL * pas, by + yL * pas), (bx + xR * pas, by + yR * pas)],
                        fill=(255, 0, 255), width=max(1, int(round(1.333 * SC * PX2PT))))
                dr.polygon([(bx + a * pas, by + b * pas) for a, b in g["poly"]],
                           fill=(255, 0, 255))
        return base + h_tab + pied

    y = table(haut_titre, gauche, droite, False) + 16
    table(y + haut_titre, gauche, droite, True)
    img.save(chemin)
    return W, H


def main():
    import importlib
    nom = sys.argv[1] if len(sys.argv) > 1 else "data_tsipelina_s2"
    if nom.endswith(".py"):
        nom = nom[:-3]
    if not nom.startswith("data_"):
        nom = "data_" + nom
    d = importlib.import_module(nom).FICHE
    exos = [e for e in d["exos"] if "tsilo" in e]
    if not exos:
        sys.exit("tsy misy tsilo ao amin'ity antontan'antariny ity")
    ex = exos[0]
    gauche, droite = ex["tsilo"]
    n = min(len(gauche), len(droite))
    gauche, droite = list(gauche[:n]), list(droite[:n])
    mele, rezo = bf.melange(list(droite))

    sortie = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(bf.__file__))), "output")
    dossier = os.path.join(sortie, "fleche")
    os.makedirs(dossier, exist_ok=True)

    fleches = []
    for i in range(n):
        g = bf.sary_fleche(i, rezo[i])
        fleches.append(((i, rezo[i]), g))
        with open(os.path.join(dossier, "tsilo-%d.svg" % (i + 1)), "wb") as f:
            f.write(g["svg"])
        if g["png"]:
            with open(os.path.join(dossier, "tsilo-%d.png" % (i + 1)), "wb") as f:
                f.write(g["png"])
    chemin = os.path.join(sortie, "ajerena_tsilo.png")
    W, H = dessiner_aperu(chemin, [g + "  \u2022" for g in gauche], mele, fleches,
                         "tsipelina : %s -> %s (fleche = %d)" % (
                             "FANAZARAN-TENA", "FANITSIANA", len(fleches)))
    print("sary : %s  (%d x %d px)\n       %s" % (chemin, W, H, dossier))

    fonte = _police(12)
    dispo = [cols - 2 * MARGE_CELL for cols in [c * TW2PT for c in bf.COLS_TSILO]]
    ga = largeurs([g + "  \u2022" for g in gauche], fonte)
    dr_ = largeurs(mele, fonte)
    print("\n--- controle des largeurs (12 pt, DejaVu Serif = plus large que Times) ---")
    ok = True
    for i in range(n):
        m1 = "OK " if ga[i] <= dispo[0] else "TROP LONG"
        m2 = "OK " if dr_[i] <= dispo[2] else "TROP LONG"
        if ga[i] > dispo[0] or dr_[i] > dispo[2]:
            ok = False
        print("  %d : gauche %5.1f/%5.1f pt %s | droite %5.1f/%5.1f pt %s"
              % (i, ga[i], dispo[0], m1, dr_[i], dispo[2], m2))
    print("  -> rangee 440 twips = %.1f pt : %s"
          % (bf.HAUT_LIGNE, "rien ne sera coupe" if ok else
             "ATTENTION : un texte trop long passe a la ligne et serait coupe (hRule=exact)"))
    # le trait doit partir APRES le texte de gauche et tipona AVANT le texte de droite
    cols = [c * TW2PT for c in bf.COLS_TSILO]
    bord_m = cols[0]                                  # bord ahoany ny kolona afovoany
    txt_d = cols[0] + cols[1] + MARGE_CELL             # fiandohan'ny soratra ankavanana
    print("\n--- trajectory ny tsilo (amin'ny points, 0 = sisiny ankavia an'tabilao) ---")
    for i in range(n):
        g = dict(fleches)[(i, rezo[i])] if False else [x for x in fleches if x[0][0] == i][0][1]
        debut = bord_m + g["posH"] * EMU2PT + g["ligne"][0] * PX2PT
        tipona = bord_m + g["posH"] * EMU2PT + g["ligne"][2] * PX2PT
        fin_gauche = MARGE_CELL + ga[i]
        etat = "OK" if debut > fin_gauche and tipona > txt_d - 14 else "TRO TAMPY"
        print("  %d->%d :  trait %.1f -> %.1f pt | texte gauche jusqu'a %.1f | droite a %.1f  %s"
              % (i, rezo[i], debut, tipona, fin_gauche, txt_d, etat))
    print("\n--- correspondances (ligne de gauche -> ligne de droite meleee) ---")
    for i in range(n):
        print("  %d %-34s -> %d %s" % (i, _retirer_marques(gauche[i])[:34], rezo[i],
                                       _retirer_marques(mele[rezo[i]])[:34]))


if __name__ == "__main__":
    main()
