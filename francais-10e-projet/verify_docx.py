# -*- coding: utf-8 -*-
"""
Vérifications obligatoires post-génération (skill v18) sur le .docx produit.
Usage : python3 verify_docx.py output/Manuel_xxx.docx [nb_seances_attendues=10]
"""
import re, sys, zipfile

path = sys.argv[1]
N = int(sys.argv[2]) if len(sys.argv) > 2 else 10
z = zipfile.ZipFile(path)
xml = z.read("word/document.xml").decode("utf-8")

def txt_tags():
    return re.findall(r"<w:t[^>]*>(.*?)</w:t>", xml, flags=re.S)

textes = txt_tags()
texte_complet = "".join(textes)

checks = {}

# 1. sectPr exactement 1
checks["sectPr = 1"] = (len(re.findall(r"<w:sectPr[ >]", xml)), 1)

# 2. namespace ns0 = 0
checks["ns0 = 0"] = (xml.count("ns0:"), 0)

# 3. Times New Roman présent partout (aucun autre font)
fonts = set(re.findall(r'w:ascii="([^"]+)"', xml))
checks["police = Times New Roman seule"] = (fonts, {"Times New Roman"})

# 4. Doubles espaces dans le texte = 0
checks["doubles espaces = 0"] = (texte_complet.count("  "), 0)

# 5. gridCol : tables déroulement = 6 colonnes ; méta = 4
grids = re.findall(r"<w:tblGrid>(.*?)</w:tblGrid>", xml, flags=re.S)
six = sum(1 for g in grids if g.count("<w:gridCol") == 6)
quatre = sum(1 for g in grids if g.count("<w:gridCol") == 4)
checks[f"tables 6 col (déroulement) x{N}"] = (six, N)
checks["tables 4 col (méta + dashboards) >= N"] = (quatre, "min")

# 6. FICHE DE PRÉPARATION = N
checks[f"FICHE DE PRÉPARATION = {N}"] = (texte_complet.count("FICHE DE PRÉPARATION"), N)

# 7. Signets == ancres des liens internes
bookmarks = set(re.findall(r'<w:bookmarkStart[^>]*w:name="([^"]+)"', xml))
anchors = set(re.findall(r'<w:hyperlink[^>]*w:anchor="([^"]+)"', xml))
checks["tout ancre a un signet"] = (anchors - bookmarks, set())
checks[f"nb signets (attendu >= {N + 4})"] = (len(bookmarks), f">={N + 4}")

# 8. Interdits
interdits = {
    ">Oral<": 0, "BEPC": 0, "ministère": 0, "MINISTERE": 0, "MINESEB": 0, "Hatier": 0,
}
for mot, attendu in interdits.items():
    checks[f"interdit « {mot} »"] = (texte_complet.count(mot), attendu)

# 9. Dates calendaires interdites (règle 11) : 15/10/2025, "Octobre 2025"…
dates_num = re.findall(r"\b\d{1,2}[/.]\d{1,2}[/.]\d{2,4}\b", texte_complet)
mois = re.findall(r"\b(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)\b", texte_complet, flags=re.I)
checks["dates numériques = 0"] = (dates_num, [])
checks["mois calendaires = 0"] = (mois, [])

# 10. Structure I/II/III dans chaque déroulement (30 fiches de section ? non — 10)
for motif in ["I. Révision", "II. NOUVELLE LEÇON", "III. Évaluation"]:
    checks[f"« {motif} » = {N}"] = (texte_complet.count(motif), N)

# 11. Aucune durée sur les sous-étapes (ex : "Mise en situation 2")
durations_sub = re.findall(r"(Mise en situation|Présentation|Observation|Analyse|Synthèse|Application)\s*\n?\s*\d+\s*min", texte_complet)
checks["sous-étapes sans durée"] = (durations_sub, [])

ok = True
print("=" * 64)
for k, (obtenu, attendu) in checks.items():
    if attendu == "min":
        verdict = "OK " if isinstance(obtenu, int) and obtenu >= N else "ÉCART"
    elif isinstance(attendu, str) and attendu.startswith(">="):
        seuil = int(attendu[2:])
        verdict = "OK " if isinstance(obtenu, int) and obtenu >= seuil else "ÉCART"
    else:
        verdict = "OK " if obtenu == attendu else "ÉCART"
    if verdict == "ÉCART":
        ok = False
    print(f"[{verdict}] {k}  →  obtenu : {obtenu!r}" + ("" if verdict == "OK " else f"  (attendu : {attendu!r})"))
print("=" * 64)
print("RÉSULTAT :", "TOUT CONFORME ✓" if ok else "DES ÉCARTS À CORRIGER ✗")
sys.exit(0 if ok else 1)
