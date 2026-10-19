# -*- coding: utf-8 -*-
"""Vérificateur d'invariants — Manuel Malagasy T5 (aucun LibreOffice/pandoc dans ce sandbox).

On dézippe word/document.xml, on sépare l'avant-propos+sommaire du corps des fiches,
puis on compte les marqueurs de structure et on cherche les interdits du skill v21.

Usage : python3 src/verify.py [docx] [nb_fiches_attendues]
"""
import os
import re
import sys
import zipfile

# durées autorisées (primaire : lues dans le LANJAN'ORA du PE, jamais inventées)
DUREES_OK = {(3, 14, 3), (5, 20, 5), (7, 30, 8)}

DOCX = sys.argv[1] if len(sys.argv) > 1 else "output/Echantillon_Malagasy_T5_V1.docx"
NFICHE = int(sys.argv[2]) if len(sys.argv) > 2 else 1
MODULE = sys.argv[3] if len(sys.argv) > 3 else None

with zipfile.ZipFile(DOCX) as z:
    xml = z.read("word/document.xml").decode("utf-8")

paras = [re.sub(r"<[^>]+>", "", m) for m in re.findall(r"<w:p[ >].*?</w:p>", xml, re.S)]
txt = "\n".join(paras)
i = txt.find("SEHO 1 /")
head, body = (txt[:i], txt[i:]) if i > 0 else ("", txt)

checks = []


def add(label, got, want, kind="eq"):
    checks.append((label, got, want, (got == want) if kind == "eq" else (got >= want)))


# ---- structure du fichier
add("sectPr (1 seule section)", xml.count("<w:sectPr"), 1)
add("préfixe ns0: parasite", xml.count("ns0:"), 0)
add("gridCol (2 méta + 6 déroulement) x fiches", len(re.findall(r"<w:gridCol", xml)), 8 * NFICHE)
add("Times New Roman déclaré", xml.count('w:ascii="Times New Roman"') >= 50 * NFICHE, True)
add("aucun champ TOC natif", xml.count("<w:fldChar"), 0)

# ---- structure de la fiche (corps uniquement)
add("fiches (SEHO n / N)", len(re.findall(r"SEHO \d+ / \d+", body)), NFICHE)
add("TAKELA-PANOMANAN-DESONA", body.count("TAKELA-PANOMANAN-DESONA"), NFICHE)
add("I. Famerenana", body.count("I. Famerenana"), NFICHE)
add("II. LESONA VAOVAO", body.count("II. LESONA VAOVAO"), NFICHE)
add("III. Tombana", body.count("III. Tombana"), NFICHE)
add("LESONA (page propre)", body.count("\nLESONA\n"), NFICHE)
add("FANAZARAN-TENA", body.count("FANAZARAN-TENA"), NFICHE)
add("VALINY", body.count("VALINY"), NFICHE)
add("Isan'ny seho", body.count("Isan'ny seho"), NFICHE)
for k in "123456":
    add(f"sous-étape {k}", len([p for p in body.split("\n") if p.startswith(f"{k}. ")]) > 0, True)
add("durées = 3 lignes I/II/III uniquement", len(re.findall(r"\(\d+ min\)", body)), 3 * NFICHE)
add("Kilasy : 5e", body.count("Kilasy : 5e"), NFICHE)
add("Faharetany vide (ni 'min' collé après)", len(re.findall(r"Faharetany : [A-Z]", body)), 0)
add("hyperliens sommaire >= fiches*3", xml.count("<w:hyperlink"), 3 * NFICHE, "ge")
add("aucune image dans ce pilote (décision)", xml.count("<w:drawing"), 0)
add("note culturelle par fiche", body.count("Fampahalalana fanampiny"), NFICHE)
add("leçon : section « Ny teny vaovao »", body.count("Ny teny vaovao") >= NFICHE, True)

# ---- propreté du texte
add("astérites résiduelles (marqueurs non consommés)", txt.count("**"), 0)
add("double espace dans un run", len([1 for m in re.findall(r"<w:t[^>]*>([^<]*)</w:t>", xml)
                                       if "  " in m.strip()]), 0)
# Le modèle FFMOM du dépôt met une espace avant « : » et « ? » : on ne contrôle que « . » et « , ».
add("espace avant « . » ou « , »",
    len([1 for m in re.findall(r"<w:t[^>]*>([^<]*)</w:t>", xml) if re.search(r"\s[,.](?!\.)", m)]), 0)
# le tableau de déroulement : 11 lignes x 6 colonnes, ligne 3 fusionnée + grisée
tbls = re.findall(r"<w:tbl>.*?</w:tbl>", xml, re.S)
add("tables = 2 par fiche", len(tbls), 2 * NFICHE)
der = tbls[1] if len(tbls) > 1 else ""
add("lignes du déroulement", len(re.findall(r"<w:tr\b", der)), 11)
add("gridCol du déroulement", len(re.findall(r"<w:gridCol", der)), 6)
add("vMerge/gridSpan de la ligne II. LESONA VAOVAO", len(re.findall(r'w:gridSpan w:val="6"', der)), 1)
add("fond gris de la ligne fusionnée", der.count('w:fill="D9D9D9"'), 1)
add("méta-table sans bordures", len(re.findall(r"<w:tbl>", tbls[0])) and tbls[0].count('w:val="none"'), 6)
# le gabarit : chaque ligne de la méta-table est présente une fois par fiche
for lab in ["Taranja :", "Zana-taranja :", "Lohahevitra :", "Lohateny :", "Tanjona manokana :",
            "Fanovozan-kevitra :", "Kilasy :", "Seho n° :", "Daty :"]:
    add(f"méta-table « {lab} »", body.count(lab), NFICHE)

# ---- interdits du skill / conventions projet
for w in ["ministère de l'éducation nationale", "Ministère de l'Éducation", "BEPC", "bepc",
          "barémé", "Barème", "Table of Contents", "{{", "TODO", "lorem", "Ipsum",
          "V.A. : ...", "V.A. : …", "à compléter", "TBD", "Fitaovana : Oral",
          "Daty : 2026", "Daty : 2025"]:
    if w in ("20", "19"):
        add(f"année de calendrier « {w} »", len(re.findall(rf"\b{w}\d\d\b", body)), 0)
    else:
        add(f"interdit « {w} »", txt.count(w), 0)

# ---- gabarit malgache
for v in ["Mamaly.", "Mihaino.", "Mijery.", "Mamerina."]:
    add(f"verbe d'action Mpianatra « {v} »", body.count(v) > 0, True)
add("deux verbes dans une cellule Mpianatra", body.count("Mihaino. Mamaly."), 0)
add("formule figée Fanolorana", body.count("Androany isika dia hianatra lesona vaovao hoe :"), NFICHE)
add("Fandravonana commence par « Koa, »", body.count("Koa, "), NFICHE)

# ---- lint des données (règles matière) si un module est fourni
if MODULE:
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    import importlib
    for s in importlib.import_module(MODULE).SEANCES:
        tag = f"[{s['lohateny'][:22]}]"
        add(tag + " isan_ny_seho", isinstance(s.get("isan_ny_seho"), int), True)
        d3 = s.get("durees")
        add(tag + f" durees {d3} ∈ {DUREES_OK}", d3 in DUREES_OK, True)
        zt = s.get("zana_taranja", "")
        voulu = (3, 14, 3) if "am-bava" in zt else (5, 20, 5)
        add(tag + " durees concordantes avec le zana-taranja", d3, voulu)
        fit = [x for k, x in s.items()
               if (k.startswith("fitaovana") or k.startswith("fit_")) and isinstance(x, str)]
        add(tag + " aucun « am-bava » ni « Oral » dans Fitaovana",
            len([x for x in fit if "am-bava" in x or "ral" in x]), 0)
        add(tag + " 2 types d'exercices minimum", len(s["fampiharana"]) >= 2, True)
        add(tag + " 3 Fanazaran-tena", len(s["fanazaran_tenay"]) >= 3, True)
        for e in s["fampiharana"] + s["fanazaran_tenay"]:
            add(tag + f" ≥ 4 items ({e['c'][:18]})", len(e["items"]) >= 4, True)
            add(tag + " lettrage sans c)", "c)" not in " ".join(e["items"]), True)
        for key in ("famerenana", "famakafakana", "tombana"):
            add(tag + f" {key} non vide", len(s[key]) >= 3, True)
            add(tag + f" {key} : V.A. jamais vide", len([1 for q, a in s[key] if not a.strip()]), 0)
        allstr = " ".join(str(x) for x in s.values())
        for w in ("→", "TODO", " ...", "barémé", "BEPC", "Ministère", "2019", "2020", "2025", "2026"):
            add(tag + f" interdit « {w} »", allstr.count(w), 0)
        if "am-bava" in zt:
            add(tag + " dialogue présent (zana-taranja ara-pifampizarana)",
                any(b[0] == "d" for b in s["lecon"]), True)
        add(tag + " note culturelle présente", bool(s.get("fampahalalana")), True)
        add(tag + " Fandravonana non vide", len(s["fandravonana"]) > 40, True)

bad = [c for c in checks if not c[3]]
for label, got, want, ok in checks:
    print(("  OK  " if ok else " FOER  ") + label + f"  →  {got!r}" + ("" if ok else f"  (attendu {want!r})"))
print("\n" + ("TUATUA — tous les invariants sont conformes" if not bad
              else f"!! {len(bad)} invariant(s) en échec sur {len(checks)}"))
sys.exit(1 if bad else 0)
