# -*- coding: utf-8 -*-
"""
fetch_police.py — mampiditra polise « Tinos » (OFL, metric-compatible avec Times New Roman)

Tsy misy Times New Roman ao anaty fitaovana ity (0 police sistema), ka mila polise
mifanaraka ny **halavan'ny endri-tsoratra** (métriques) vao afaka:
  1. manamarina raha feno ny soratra ao anaty kolon'ny tabilao (tsy tapaka) ;
  2. mametraka ny lahatsoratra ao anaty SARY (SVG) ho an'ny FANITSIANA : ny tsilo dia
     tonga amin'ny maha-meto azy satria ny toe-javatra ihany no sambo kinery.
Licensiata : OFL 1.1 (Tinos, Google Fonts) — azo ampiasaina sary kaonferensialy.
         https://github.com/google/fonts/tree/main/ofl/tinos

      ./run.sh src/fetch_police.py
"""
import base64
import json
import os
import urllib.request

DOSSIER = os.environ.get("POLICE", "/home/user/police")
DEPOT = "https://api.github.com/repos/google/fonts/contents/ofl/tinos"
FICHIERS = ("Tinos-Regular.ttf", "Tinos-Bold.ttf", "Tinos-Italic.ttf", "Tinos-BoldItalic.ttf")


def telecharger(nom):
    url = "%s/%s" % (DEPOT, nom)
    with urllib.request.urlopen(url, timeout=120) as r:
        donne = json.load(r)
    octets = base64.b64decode(donne["content"])
    with open(os.path.join(DOSSIER, nom), "wb") as f:
        f.write(octets)
    return len(octets)


def main():
    if not os.path.isdir(DOSSIER):
        os.makedirs(DOSSIER)
    for nom in FICHIERS:
        chem = os.path.join(DOSSIER, nom)
        if os.path.isfile(chem) and os.path.getsize(chem) > 50000:
            print("%-22s deja eo (%d o)" % (nom, os.path.getsize(chem)))
            continue
        try:
            print("%-22s %d o" % (nom, telecharger(nom)))
        except Exception as e:                       # rezo maina : DejaVu no fiovana
            print("%-22s ECHEC (%s)" % (nom, e))
    try:
        from fontTools.ttLib import TTFont
        f = TTFont(os.path.join(DOSSIER, "Tinos-Regular.ttf"))
        upem = f["head"].unitsPerEm
        for c in "noho":
            print("      metrise « %s » = %.4f em" % (c, f["hmtx"][f.getBestCmap()[ord(c)]][0] / upem))
    except Exception as e:
        print("      (fontTools tsy voafaritra : %s)" % e)


if __name__ == "__main__":
    main()
