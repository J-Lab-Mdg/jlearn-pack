#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Contrôle de langue et de typographie d'un manuel J-Learn.

Usage :
    python3 scripts/lint_langue.py Manuel-SVT-T9-complet.md [autre.md ...]
    python3 scripts/lint_langue.py Manuel.docx

Sort en code 1 dès qu'une anomalie est trouvée, pour usage en pré-livraison.

Ce contrôle existe parce que les manuels produits par gabarit accumulent une
famille d'erreurs très reconnaissable : la concaténation d'une formule figée
et d'un fragment variable produit « Être capable de identifier » au lieu de
« d'identifier ». L'erreur n'est pas aléatoire, elle est structurelle — elle
apparaît partout où le fragment suivant commence par une voyelle.

Le piège du contrôle naïf est le pronom enclitique : « compare-la à »,
« exprime-la en », « est-ce un » sont corrects. Un simple `\\bla [voyelle]`
produit donc des fausses alertes. Les motifs ci-dessous excluent ces cas.
"""

import re
import sys
import unicodedata
import zipfile
from xml.etree import ElementTree as ET

W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"

VOYELLE = "aeiouâàäéèêëîïôöûüAEIOUÂÀÄÉÈÊËÎÏÔÖÛÜ"

# « h » est écarté volontairement : le h aspiré (« le hasard », « la hauteur »)
# interdit l'élision et produirait des fausses alertes en masse.

CONTROLES = [
    # (identifiant, motif, explication)
    ("elision-de",
     r"(?<![\w-])[Dd]e (?=[" + VOYELLE + r"])",
     "« de » devant une voyelle : écrire « d' »"),
    ("elision-que",
     r"(?<![\w-])[Qq]ue (?=[" + VOYELLE + r"])",
     "« que » devant une voyelle : écrire « qu' »"),
    ("elision-ne",
     r"(?<![\w-])[Nn]e (?=[" + VOYELLE + r"])",
     "« ne » devant une voyelle : écrire « n' »"),
    ("elision-se",
     r"(?<![\w-])[Ss]e (?=[" + VOYELLE + r"])",
     "« se » devant une voyelle : écrire « s' »"),
    ("elision-je",
     r"(?<![\w-])[Jj]e (?=[" + VOYELLE + r"])",
     "« je » devant une voyelle : écrire « j' »"),
    # Le tiret devant écarte l'enclitique (« compare-la à », « est-ce un »).
    ("elision-la",
     r"(?<![\w-])[Ll]a (?=[" + VOYELLE + r"])",
     "« la » devant une voyelle : écrire « l' »"),
    ("elision-le",
     r"(?<![\w-])[Ll]e (?=[" + VOYELLE + r"])",
     "« le » devant une voyelle : écrire « l' »"),
    ("elision-ce",
     r"(?<![\w-])[Cc]e (?=[" + VOYELLE + r"])",
     "« ce » devant une voyelle : écrire « c' » ou « cet »"),
    ("si-il",
     r"(?<![\w-])[Ss]i ils?(?![\w])",
     "« si il » : écrire « s'il »"),
    ("double-espace",
     r"(?<=\S)  +(?=\S)",
     "double espace"),
    ("espace-avant-ponctuation",
     r"[^\s.]\s+[,.](?=\s|$)",
     "espace avant une virgule ou un point"),
]

# Contrôle facultatif (option --apostrophe) : le manuel peut légitimement
# retenir l'apostrophe droite comme style maison, à condition de s'y tenir.
# Ne l'activer que pour vérifier l'homogénéité, jamais en pré-livraison.
CONTROLE_APOSTROPHE = (
    "apostrophe-droite", r"\w'\w",
    "apostrophe droite ' : utiliser l'apostrophe typographique ’")

# Séquences correctes que les motifs ci-dessus signaleraient à tort.
EXCEPTIONS = [
    r"[Ll]e [Hh]",              # h aspiré éventuel laissé au rédacteur
    # Lettre isolée employée comme étiquette : « la réponse A », « Le B. »,
    # fréquent dans les QCM et les exercices d'appariement.
    r"[LlDdCcQq](?:e|a|ue) [A-Z](?![a-zà-ÿ])",
    # Points de suspension d'un texte à trous suivis du point final.
    r"…\s*\.",
]


def texte_docx(chemin):
    """Extrait le texte d'un .docx, un paragraphe par ligne."""
    racine = ET.fromstring(zipfile.ZipFile(chemin).read("word/document.xml"))
    return "\n".join(
        "".join(t.text or "" for t in p.iter(W + "t"))
        for p in racine.iter(W + "p"))


def charger(chemin):
    if chemin.lower().endswith(".docx"):
        return texte_docx(chemin)
    return open(chemin, encoding="utf-8").read()


def analyser(texte, controles=CONTROLES):
    """Renvoie la liste des anomalies : (ligne, identifiant, message, extrait)."""
    anomalies = []
    exceptions = [re.compile(m) for m in EXCEPTIONS]
    for ident, motif, message in controles:
        for m in re.finditer(motif, texte):
            fragment = texte[m.start():m.end() + 25]
            if any(e.match(fragment) for e in exceptions):
                continue
            ligne = texte.count("\n", 0, m.start()) + 1
            debut = max(0, m.start() - 45)
            extrait = texte[debut:m.end() + 35].replace("\n", " ")
            anomalies.append((ligne, ident, message, extrait))
    return sorted(anomalies)


def main(chemins, controles=CONTROLES):
    total = 0
    for chemin in chemins:
        texte = charger(chemin)
        anomalies = analyser(texte, controles)
        print(f"\n=== {chemin} ===")
        if not anomalies:
            print("  aucune anomalie de langue")
            continue
        par_type = {}
        for ligne, ident, message, extrait in anomalies:
            par_type.setdefault(ident, []).append((ligne, message, extrait))
        for ident, cas in sorted(par_type.items()):
            print(f"  {ident} — {len(cas)} occurrence(s) : {cas[0][1]}")
            for ligne, _, extrait in cas[:6]:
                print(f"      l.{ligne} …{extrait}…")
            if len(cas) > 6:
                print(f"      … et {len(cas) - 6} autre(s)")
        total += len(anomalies)
    print(f"\nTotal : {total} anomalie(s)")
    return 1 if total else 0


if __name__ == "__main__":
    args = [a for a in sys.argv[1:] if a != "--apostrophe"]
    controles = list(CONTROLES)
    if "--apostrophe" in sys.argv[1:]:
        controles.append(CONTROLE_APOSTROPHE)
    if not args:
        print(__doc__)
        sys.exit(2)
    sys.exit(main(args, controles))
