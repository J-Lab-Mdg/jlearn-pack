#!/usr/bin/env python3
# ============================================================
# audit.py — contrôle du docx produit (Manuel SES T12, série OSE)
# Usage : python3 src/audit.py [chemin_du_docx]
# ============================================================
import os
import re
import sys
import zipfile
import xml.etree.ElementTree as ET

DOCX = sys.argv[1] if len(sys.argv) > 1 else os.path.join(
    os.path.dirname(__file__), "..", "output", "Manuel_SES_T12_OSE_JLearn.docx")
W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"

z = zipfile.ZipFile(DOCX)
xml = z.read("word/document.xml").decode("utf-8")
root = ET.fromstring(xml)
txt = "".join(t.text or "" for t in root.iter(W + "t"))

checks = []


def chk(label, value, expected=None):
    ok = "" if expected is None else ("  OK" if value == expected else "  <-- ATTENDU %s" % expected)
    checks.append("%-46s %s%s" % (label, value, ok))


nb_fiches = txt.count("FICHE DE PR")
chk("Fiches de préparation (séances de cours)", nb_fiches)
nums = sorted(int(x) for x in re.findall(r"SÉANCE (\d+) / 89", txt))
chk("Séances « n / 89 »", len(nums))
chk("Plage de numéros", "%d à %d" % (nums[0], nums[-1]) if nums else "-")
manquants = [i for i in range(1, nums[-1] + 1) if i not in nums] if nums else []
chk("Numéros manquants", manquants if manquants else "aucun")
chk("Durées vierges « Durée : ____ »", txt.count("Durée : ____________"))
chk("Champs « Durée : » total", txt.count("Durée :"))
chk("Sections <sectPr>", len(re.findall(r"<w:sectPr", xml)), 1)
chk("Balises ns0: (erreur docx)", len(re.findall(r"ns0:", xml)), 0)
chk("Polices Times New Roman", len(re.findall(r"Times New Roman", xml)))
chk("Mentions « Ministère »", txt.count("Ministère"), 0)
chk("Mentions « BEPC »", txt.count("BEPC"), 0)
chk("« Oral » dans la colonne support", len(re.findall(r">Oral<", xml)), 0)
blips = len(re.findall(r"<a:blip", xml))
chk("Images insérées (<a:blip>)", blips)
figs = sorted(set(int(x) for x in re.findall(r"Figure (\d+) —", txt)))
chk("Figures numérotées", len(figs))
manque_fig = [f for f in range(1, (figs[-1] if figs else 0) + 1) if f not in figs]
chk("Numéros de figure manquants", manque_fig if manque_fig else "aucun")
chk("Liens internes", len(re.findall(r"w:anchor", xml)))
chk("Signets (bookmarks)", len(re.findall(r"<w:bookmarkStart", xml)))
chk("Sections « CORRIGÉ »", txt.count("CORRIGÉ"), nb_fiches + txt.count("Barème total"))
chk("Barèmes affichés (examens)", txt.count("Barème total"))
chk("Exercices notés", len(re.findall(r"Exercice \d+ \(\d+ points?\)", txt)))
dates = re.findall(r"\b\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b|"
                   r"\b(?:janvier|février|mars|avril|mai|juin|juillet|août|septembre|"
                   r"octobre|novembre|décembre) 20\d\d\b", txt)
chk("Dates précises", dates if dates else "aucune")
chk("Titres « UNITÉ x — »", txt.count("UNITÉ "))
chk("Mots-clés de leçon", txt.count("Mots clés"))
chk("Occurrences « undefined »", txt.count("undefined"), 0)
chk("Occurrences « NaN »", txt.count("NaN"), 0)

print("=== AUDIT : %s ===" % os.path.abspath(DOCX))
for c in checks:
    print(" ", c)
print()
print("document.xml :", round(len(xml) / 1024), "Ko · entrées zip :", len(z.namelist()),
      "· poids :", round(os.path.getsize(DOCX) / 1024), "Ko")
