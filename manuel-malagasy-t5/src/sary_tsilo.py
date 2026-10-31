# -*- coding: utf-8 -*-
"""
sary_tsilo.py — « pourquoi ne pas generer seulement l'image ? » (maitre, 2026-10-29)

        ./run.sh src/sary_tsilo.py data_tsipelina_s2

Mamoaka ny sary samy hafa, ka azo jerena aloha ny tabilao « Ampifandraiso amin'ny alalan'ny
tsilo » **tsy mila Word** :

  output/fleche/tsilo-<n>.svg|.png   ny tsilo iray avy isaky ny rangee (raha tianao
                                     amboarina tanana ny FANITSIANA)
  output/sary_fanitsiana.svg|.png    ny sary **iray** mandalo tabilao feno (sisiny +
                                     soratra + tsilo) — ity ihany no atao ao anaty .docx
                                     raha `sary=True` ny antontan'antariny
  output/ajerena_tsilo.png           kajy: tabilao an'ny FANAZARAN-TENA (tsy misy tsilo)
                                     + sary an'ny FANITSIANA, ary ny fifandraisana

Ny famokarana rehetra dia mandeha amin'ny `sary_tabalo.py` ihany — toy izany koa ny
.o.docx : raha mitovy ny sary dia mitovy ny antontan'antariny.
"""
import importlib
import os
import sys

import build_fiche as bf
import sary_tabalo as st

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(bf.__file__)))
SORATRA = os.path.join(RACINE, "output")


def tableau(fiche):
    """(gauche, droite_mele, rezo, exo) avy amin'ny antontan'antariny, araka ny
    fampiasan'ny mpamorona (build_fiche.exercices)."""
    ex = [e for e in fiche["exos"] if "tsilo" in e][0]
    gauche, droite = ex["tsilo"]
    n = min(len(gauche), len(droite))
    gauche, droite = list(gauche[:n]), list(droite[:n])
    mele, rezo = bf.melange(list(droite))
    ex["_mele"], ex["_rezo"] = mele, rezo
    return gauche, mele, rezo, ex


def main():
    nom = sys.argv[1] if len(sys.argv) > 1 else "data_tsipelina_s2"
    nom = nom[:-3] if nom.endswith(".py") else nom
    if not nom.startswith("data_"):
        nom = "data_" + nom
    f = importlib.import_module(nom).FICHE
    gauche, mele, rezo, ex = tableau(f)
    n = len(gauche)

    # 1. ny sary atao ao anaty .docx (avy amin'ny function ihany koa)
    ops, w, h, avis = st.tabalo(gauche, mele, rezo, cols=bf.COLS_TSILO, haut=bf.HAUT_LIGNE,
                                taille=12.0)
    dossier = os.path.join(SORATRA, "fleche")
    if not os.path.isdir(dossier):
        os.makedirs(dossier)
    with open(os.path.join(SORATRA, "sary_fanitsiana.svg"), "wb") as fh:
        fh.write(st.svg_de(ops, w, h))
    with open(os.path.join(SORATRA, "sary_fanitsiana.png"), "wb") as fh:
        fh.write(st.png_de(ops, w, h, echelle=3.0))
    # 2. ny tsilo iray avy (ho an'ny fanamboarana tanana : 120 x (trajet + 16) pt)
    largeur_trait = 120.0
    for i, j in sorted(rezo.items()):
        trajet = abs(j - i) * bf.HAUT_LIGNE
        hgt = trajet + 16.0
        if j > i:
            yo, yk = 8.0, hgt - 8.0
        else:
            yo, yk = hgt - 8.0, 8.0
        sous = [("fleche", 4.0, yo, largeur_trait - 4.0, yk, 1.0, st.COUL_FLECHE)]
        with open(os.path.join(dossier, "tsilo-%d.svg" % (i + 1)), "wb") as fh:
            fh.write(st.svg_de(sous, largeur_trait, hgt))
        with open(os.path.join(dossier, "tsilo-%d.png" % (i + 1)), "wb") as fh:
            fh.write(st.png_de(sous, largeur_trait, hgt, echelle=3.0))
    # 3. sary fijerena: FANAZARAN-TENA (tsy misy tsilo) + FANITSIANA (sary feno)
    ops_ex, we, he, avis_ex = st.tabalo(gauche, mele, None, cols=bf.COLS_TSILO,
                                       haut=bf.HAUT_LIGNE, taille=12.0)
    from PIL import Image
    import io as _io
    a = Image.open(_io.BytesIO(st.png_de(ops_ex, we, he, echelle=2.0)))
    b = Image.open(_io.BytesIO(st.png_de(ops, w, h, echelle=2.0)))
    ecart = 40
    page = Image.new("RGB", (max(a.width, b.width), a.height + b.height + ecart + 90),
                     "white")
    from PIL import ImageDraw
    dr = ImageDraw.Draw(page)
    dr.text((10, 12), "1. FANAZARAN-TENA - tabilao Word (tsy misy tsilo : ny mpianatra no "
                      "mameratra)", fill=(30, 30, 30))
    page.paste(a, (0, 40))
    dr.text((10, a.height + 40 + 14),
            "2. FANITSIANA - ny sary iray atao ao anaty .docx (%.0f x %.0f pt) : "
            "sisiny + soratra + tsilo" % (w, h), fill=(30, 30, 30))
    page.paste(b, (0, a.height + 40 + 40))
    chemin = os.path.join(SORATRA, "ajerena_tsilo.png")
    page.save(chemin)
    print("sary : %s\n       %s\n       %s" % (chemin, os.path.join(SORATRA, "sary_fanitsiana.png"),
                                               dossier))
    print("habe ny sary : %.1f x %.1f pt (%d rangee @ %.1f pt)"
          % (w, h, n, bf.HAUT_LIGNE))
    for a_ in avis + avis_ex:
        print("  !", a_)
    print("\n--- halavan'ny soratra (Tinos = metriques Times New Roman, 12 pt) ---")
    dispo = [c * st.TW2PT - 2 * st.MARGE for c in bf.COLS_TSILO]
    ok = True
    for i in range(n):
        g = st.retirer_marques(gauche[i]) + "  \u2022"
        d = st.retirer_marques(mele[i])
        lg, ld = st.largeur(g), st.largeur(d)
        if lg > dispo[0] or ld > dispo[2]:
            ok = False
        print("  %d : havia %5.1f/%5.1f pt %s | ankavanana %5.1f/%5.1f pt %s"
              % (i, lg, dispo[0], "OK" if lg <= dispo[0] else "LEHIBE",
                 ld, dispo[2], "OK" if ld <= dispo[2] else "LEHIBE"))
    print("  -> %s" % ("tsy misy ho voafapa" if ok else
                       "MISY LEHIBE : mihena ho 9 pt (na ampifaketina) ny soratra"))
    print("\n--- ny lalan'ny tsilo (rangee havia -> rangee ankavanana) ---")
    for i, j in sorted(rezo.items()):
        print("  %d %-32s -> %d %s" % (i, st.retirer_marques(gauche[i])[:32], j,
                                       st.retirer_marques(mele[j])[:38]))


if __name__ == "__main__":
    main()
