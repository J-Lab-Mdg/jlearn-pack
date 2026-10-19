# -*- coding: utf-8 -*-
"""Vérificateur d'invariants — Manuel Malagasy T5 (aucun LibreOffice/pandoc dans ce sandbox).

On dézippe word/document.xml, on sépare l'avant-propos+sommaire du corps des fiches,
puis on compte les marqueurs de structure et on cherche les interdits du skill v21.

Usage : python3 src/verify.py [docx] [nb_fiches_attendues]
"""
import re
import sys
import zipfile

DOCX = sys.argv[1] if len(sys.argv) > 1 else "output/Echantillon_Malagasy_T5_V1.docx"
NFICHE = int(sys.argv[2]) if len(sys.argv) > 2 else 1

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
add("image(s) du pack", xml.count("<w:drawing"), NFICHE, "ge")

# ---- propreté du texte
add("astérites résiduelles (marqueurs non consommés)", txt.count("**"), 0)
add("double espace dans un run", len([1 for m in re.findall(r"<w:t[^>]*>([^<]*)</w:t>", xml)
                                       if "  " in m.strip()]), 0)
add("espace avant . , ! (le « ? » et le « : » à la française sont admis)",
    len([1 for m in re.findall(r"<w:t[^>]*>([^<]*)</w:t>", xml) if re.search(r"\s[,.!](?!\.)", m)]), 0)
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
          "V.A. : ...", "V.A. : …", "à compléter", "TBD", "Fitaovana : Oral", "am-bava ",
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

bad = [c for c in checks if not c[3]]
for label, got, want, ok in checks:
    print(("  OK  " if ok else " FOER  ") + label + f"  →  {got!r}" + ("" if ok else f"  (attendu {want!r})"))
print("\n" + ("TUATUA — tous les invariants sont conformes" if not bad
              else f"!! {len(bad)} invariant(s) en échec sur {len(checks)}"))
sys.exit(1 if bad else 0)
