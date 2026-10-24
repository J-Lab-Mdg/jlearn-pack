#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fikarohana — vérifier une expression malgache avant de l'écrire.

    ./run.sh ../fianarana-malagasy/fikarohana.py "manasa tanana"     recherche + corpus local
    python3 fikarohana.py --corpus                                   ce que le corpus local contient
    python3 fikarohana.py --carnet                                   les lignes du CARNET non retrouvées
    python3 fikarohana.py --rouge                                    les fautes de la LISTE-ROUGE encore présentes
    python3 fikarohana.py --fanamarinana data_modele                 chaque mot de la fiche doit avoir une trace locale
    python3 fikarohana.py --teny fandroana                           occurrences dans le corpus, avec contexte

Deux sources de vérité : l'index de mg.wikipedia.org (recherche plein texte, si le réseau sortant est
ouvert) et le corpus local (les pages collées pour le manuel + les .txt de refs/). Une expression absente
des deux n'est pas utilisable : elle va dans LISTE-ROUGE.md.
"""
import ast
import os
import re
import sys
import unicodedata
import urllib.parse
import urllib.request

IHERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(IHERE)
MANUEL = os.path.join(ROOT, "manuel-malagasy-t5")
CORPUS = [os.path.join(IHERE, "corpus"),
          os.path.join(MANUEL, "sources_web", "full"),
          os.path.join(MANUEL, "sources_web"),
          os.path.join(MANUEL, "refs")]
CARNET = os.path.join(IHERE, "CARNET.md")
ROUGE = os.path.join(IHERE, "LISTE-ROUGE.md")
API = ("https://mg.wikipedia.org/w/api.php?action=query&list=search&srsearch=%s"
       "&srlimit=8&format=json")


def hiovy(txt):
    """minuscules + apostrophes unifiées + espaces collés : ce qui sert à comparer."""
    t = txt.lower().replace("\u2019", "'").replace("\u2018", "'")
    return re.sub(r"\s+", " ", t).strip()


def malemy(txt):
    """pareil en retirant les accents (pour `barìka` vs `barika`)."""
    return "".join(c for c in unicodedata.normalize("NFD", hiovy(txt)) if unicodedata.category(c) != "Mn")


def laharana():
    """le corpus, plat : [(chemin, texte)]"""
    out = []
    for d in CORPUS:
        if not os.path.isdir(d):
            continue
        for rac, _dirs, files in os.walk(d):
            for f in sorted(files):
                if f.endswith((".txt", ".md")):
                    path = os.path.join(rac, f)
                    try:
                        with open(path, encoding="utf-8") as fh:
                            out.append((os.path.relpath(path, ROOT), fh.read()))
                    except Exception:
                        pass
    return out


def _marininteny(txt, loose=False):
    """chaîne -> (chaîne comparables, index d'origine de chaque caractère).

    Le corpus vient de PDF : les phrases du PE sont coupées en milieu de ligne, et la leçon recopiée de
    l'encyclopédie contient des sauts de ligne partout. Une recherche ligne par ligne raterait donc
    « haminavina ny mety ho votoatin'ny ⏎ lahatsoratra », qui est bien la phrase du PE. D'où une
    comparaison sur le fichier entier, espaces normalisés, en gardant l'index d'origine pour le contexte.
    """
    out, idx = [], []
    for k, ch in enumerate(txt):
        c = "'" if ch in "\u2019\u2018" else ch
        c = (c.lower() or " ")
        if c.isspace():
            c = " "
        if loose:
            base = "".join(x for x in unicodedata.normalize("NFD", c)
                           if unicodedata.category(x) != "Mn")
            c = (base or c)[:1]
        if out and c == " " and out[-1] == " ":
            continue
        out.append(c)
        idx.append(k)
    return "".join(out), idx


def fikaro_masino(oxford, loose=False):
    """occurrences exactes (ou sans accents) dans le corpus local : [(chemin, ligne, extrait)]."""
    needle, _ = _marininteny(oxford, loose)
    hits = []
    if not needle:
        return hits
    for path, text in laharana():
        plat, idx = _marininteny(text, loose)
        start = 0
        while True:
            i = plat.find(needle, start)
            if i < 0:
                break
            a, b = idx[i], (idx[i + len(needle) - 1] + 80 if i + len(needle) <= len(idx) else len(text))
            extrait = " ".join(text[max(0, a - 70):b].split())
            extra = "  [accents ignorés]" if loose else ""
            hits.append((path, text.count("\n", 0, a) + 1, extrait + extra))
            start = i + len(needle)
    return hits


def aingiry_web(oxford):
    """l'URL de recherche ; renvoie (nb_pages, [(titre, snippet)]) si le réseau sortant est ouvert."""
    url = API % urllib.parse.quote('"%s"' % oxford)
    try:
        with urllib.request.urlopen(url, timeout=8) as r:
            import json
            data = json.loads(r.read().decode("utf-8"))
        q = data.get("query", {})
        return q.get("searchinfo", {}).get("totalhits"), url, [
            (s["title"], re.sub(r"<[^>]+>", "", s["snippet"])) for s in q.get("search", [])]
    except Exception:
        return None, url, []


def tableau(path):
    """les cellules entre `…` des deux premières colonnes d'un tableau markdown."""
    rows = []
    with open(path, encoding="utf-8") as f:
        for line in f:
            if not line.strip().startswith("|") or line.count("|") < 3:
                continue
            cols = [c.strip() for c in line.strip().strip("|").split("|")]
            rows.append(cols)
    return rows


def menu():
    print("CORPUS (repertoires) :")
    for d in CORPUS:
        if os.path.isdir(d):
            n = sum(1 for _r, _s, fs in os.walk(d) for f in fs if f.endswith((".txt", ".md")))
            print("  %-58s %d fichier(s)" % (os.path.relpath(d, ROOT), n))
    print("TOTAL : %d fichier(s)" % len(laharana()))


def texte_donnees(path):
    """Le malgache destine a l'impression : les litteraux des affectations, hors commentaires et docstring.

    Une faute citee dans un commentaire (la liste rouge elle-meme, la docstring qui explique pourquoi un mot
    est banni) n'est pas une reaparition : seule la donnee imprimee compte. D'ou le passage par l'arbre
    syntaxique plutot que par la lecture brute du fichier.
    """
    with open(path, encoding="utf-8") as f:
        src = f.read()
    try:
        tree = ast.parse(src)
    except SyntaxError:
        return src.split("\n")
    lignes = []
    for node in tree.body:
        if isinstance(node, (ast.Assign, ast.AnnAssign)):
            for lit in ast.walk(node):
                if isinstance(lit, ast.Constant) and isinstance(lit.value, str):
                    lignes.extend(lit.value.split("\n"))
    return lignes or src.split("\n")


def rouge():
    t = laharana()
    srcs = [os.path.join(MANUEL, "src", f) for f in sorted(os.listdir(os.path.join(MANUEL, "src")))
            if f.startswith("data_") and f.endswith(".py")]
    fautes = []
    for cols in tableau(ROUGE):
        # seules les lignes « TENY » sont bannies à l'écriture ; « FAKANA » = mot licite, sens faux
        if len(cols) < 5 or not cols[4].startswith("TENY"):
            continue
        m = re.match(r"`([^`]+)`", cols[0])
        if m:
            fautes.append(m.group(1))
    n = 0
    for path in srcs:
        for fa in fautes:
            for i, line in enumerate(texte_donnees(path), 1):
                if hiovy(fa) in hiovy(line):
                    print("  %-26s bloc %-5d %s" % (os.path.relpath(path, ROOT), i, line.strip()[:110]))
                    n += 1
    print("LISTE-ROUGE : %d faute(s) recherchée(s), %d réapparition(s) dans %d module(s) de données"
          % (len(fautes), n, len(srcs)))
    if not t:
        print("NB : corpus local vide — alimente fianarana-malagasy/corpus/ ou manuel-malagasy-t5/sources_web/full/")
    return n


def misy_etonka(ox):
    """True si la trace locale existe — une ligne du CARNET peut aligner plusieurs variantes
    (« X / Y / Z », « X -> Y ») : il suffit que l'une d'elles se retrouve dans le corpus.
    """
    if fikaro_masino(ox) or fikaro_masino(ox, loose=True):
        return True
    for part in re.split(r"\s*(?:/|->|\u2192|;)\s*", ox):
        if len(part) > 6 and (fikaro_masino(part) or fikaro_masino(part, loose=True)):
            return True
    return False


def carnet():
    manques = []
    for cols in tableau(CARNET):
        if len(cols) < 4 or cols[0] in ("expression", "") or set(cols[0]) <= set("-: "):
            continue
        m = re.match(r"`([^`]+)`", cols[0])
        if not m:
            continue
        ox = m.group(1)
        if not misy_etonka(ox):
            manques.append(ox)
    print("CARNET : %d expression(s) sans trace dans le corpus local :" % len(manques))
    for ox in manques:
        tot, url, _ = aingiry_web(ox)
        print("  - %-52s mg.wikipedia : %s" % (ox, "réseau bouché" if tot is None else "%s page(s)" % tot))
        print("    %s" % url)
    return len(manques)


def fanamarinana(module):
    """Le contrôle le plus dur : chaque mot d'une fiche doit être écrit quelque part dans le corpus.

    Une fiche est dite propre quand ses tokens sans apostrophe se retrouvent tels quels dans le PE, les
    pages collées ou `refs/`. Les mots de base du malgache (`etsy`, `kely`, `mafana` …) peuvent rester sur
    la liste : la langue est vivante, le corpus est petit. Mais un mot qui n'y est PAS et qui n'est pas un
    mot de base — `veroso`, `amboary`, `zam-jerena` — est une invention de l'agent, et c'est exactement ce
    que ce contrôle cherche à attraper.
    """
    corpus = set()
    for d in CORPUS:
        if not os.path.isdir(d):
            continue
        for rac, _dirs, files in os.walk(d):
            for f in files:
                if f.endswith((".txt", ".md")):
                    with open(os.path.join(rac, f), encoding="utf-8", errors="replace") as fh:
                        corpus.update(re.findall(r"[a-z']+(?:-[a-z']+)*", hiovy(fh.read())))
    chem = os.path.join(MANUEL, "src", module + ".py")
    with open(chem, encoding="utf-8") as f:
        src = f.read()
    mots = []
    for node in ast.parse(src).body:
        if isinstance(node, (ast.Assign, ast.AnnAssign)):
            for lit in ast.walk(node):
                if isinstance(lit, ast.Constant) and isinstance(lit.value, str):
                    txt = malemy(lit.value.replace("**", ""))
                    mots += re.findall(r"[a-z']+(?:-[a-z']+)*", txt)
    clefs = {k for k in re.findall(r'"([a-z0-9_]+)":', src)}
    hors = sorted({w for w in mots if len(w) > 3 and "'" not in w and w not in corpus and w not in clefs})
    print("%s : %d mot(s) écrit(s), %d sans trace exacte dans le corpus (%d%%)"
          % (module, len(mots), len(hors), 100 * len(hors) // max(1, len(set(mots)))))
    for i in range(0, len(hors), 8):
        print("    " + "  ".join(hors[i:i + 8]))
    return len(hors)


def main():
    args = sys.argv[1:]
    if not args:
        print(__doc__)
        return
    if args[0] == "--corpus":
        menu()
    elif args[0] == "--fanamarinana" and len(args) > 1:
        for mod in args[1:]:
            fanamarinana(mod)
    elif args[0] == "--rouge":
        sys.exit(1 if rouge() else 0)
    elif args[0] == "--carnet":
        carnet()
    elif args[0] in ("--teny", "-t") and len(args) > 1:
        for path, n, ctx in fikaro_masino(args[1]):
            print("%s:%d\n    …%s…" % (path, n, ctx))
        if not fikaro_masino(args[1]):
            print("aucune occurrence dans le corpus local")
    else:
        ox = " ".join(args)
        print("EXPRESSION : %s" % ox)
        tot, url, res = aingiry_web(ox)
        print("mg.wikipedia.org : %s" % ("réseau sortant bouché ici — ouvre l'URL" if tot is None
                                        else "%d page(s) contiennent la suite exacte" % tot))
        if tot:
            for title, snip in res:
                print("  - %s : %s" % (title, snip))
        print("  URL : %s" % url)
        hits = fikaro_masino(ox)
        print("corpus local : %d occurrence(s)" % len(hits))
        for path, n, ctx in hits[:6]:
            print("  %s:%d …%s…" % (path, n, ctx))
        if not hits:
            loose = fikaro_masino(ox, loose=True)
            if loose:
                print("  (sans compter les accents : %d occurrence(s))" % len(loose))


if __name__ == "__main__":
    main()
