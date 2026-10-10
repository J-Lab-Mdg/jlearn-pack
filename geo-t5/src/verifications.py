#!/usr/bin/env python3
# verifications.py — Vérifications obligatoires post-génération (skill jlearn-manuel-scolaire)
import re, sys, zipfile

path = sys.argv[1] if len(sys.argv) > 1 else "output/Manuel_Geographie_T5_V1_UNITE1.docx"
xml = zipfile.ZipFile(path).read("word/document.xml").decode("utf-8")

checks = {}
checks["sectPr (attendu 1)"] = len(re.findall(r"<w:sectPr[\s>]", xml))
checks["ns0: (attendu 0)"] = len(re.findall(r"\bns0:", xml))
checks["FICHE DE PRÉPARATION"] = len(re.findall(r"FICHE DE PR", xml))
checks["SÉANCE N"] = len(re.findall(r"SÉANCE \d+", xml))
checks["Times New Roman"] = len(re.findall(r"Times New Roman", xml))
checks[">Oral< (attendu 0)"] = len(re.findall(r">Oral<", xml))
checks["Hatier|MINESEB (attendu 0)"] = len(re.findall(r"Hatier|MINESEB", xml, re.I))
checks["ministère (attendu 0)"] = len(re.findall(r"minist", xml, re.I))
checks["gridCol total"] = len(re.findall(r"<w:gridCol ", xml))
# doubles espaces dans les textes
dbl = re.findall(r"<w:t[^>]*>[^<]*  [^<]*</w:t>", xml)
checks["doubles espaces (attendu 0)"] = len(dbl)

# signets vs liens du sommaire
bookmarks = set(m.group(1) for m in re.finditer(r'<w:bookmarkStart[^>]*w:name="([^"]+)"', xml))
anchors = set(m.group(1) for m in re.finditer(r'w:anchor="([^"]+)"', xml))
sans_lien = sorted(b for b in bookmarks if b not in anchors)
sans_signet = sorted(a for a in anchors if a not in bookmarks)

for k, v in checks.items():
    print(f"{k:38s} : {v}")
print(f"{'signets':38s} : {len(bookmarks)}  {sorted(bookmarks)}")
print(f"{'liens sommaire':38s} : {len(anchors)}")
print(f"{'signets sans lien':38s} : {sans_lien}")
print(f"{'liens sans signet':38s} : {sans_signet}")

ok = (checks["sectPr (attendu 1)"] == 1 and checks["ns0: (attendu 0)"] == 0
      and checks[">Oral< (attendu 0)"] == 0 and checks["Hatier|MINESEB (attendu 0)"] == 0
      and checks["ministère (attendu 0)"] == 0 and checks["doubles espaces (attendu 0)"] == 0
      and not sans_lien and not sans_signet and checks["Times New Roman"] > 0)
print("\nRÉSULTAT :", "✅ TOUTES LES VÉRIFICATIONS CRITIQUES PASSENT" if ok else "❌ ÉCHEC — voir ci-dessus")
