#!/usr/bin/env python3
# audit.py — Audit de CONTENU du manuel (complète verifications.py qui audite la structure XML)
# Usage : python3 geo-t4/src/audit.py [chemin.docx]
import re
import sys
import os
import glob
import unicodedata
import zipfile
from collections import Counter

DOCX = sys.argv[1] if len(sys.argv) > 1 else "geo-t4/output/Manuel_Geographie_T4_JLearn.docx"

z = zipfile.ZipFile(DOCX)
xml = z.read("word/document.xml").decode("utf-8")

# ── extraction paragraphe par paragraphe ──
paras = []
for p in xml.split("</w:p>"):
    t = re.sub(r"<[^>]+>", "", p)
    t = t.replace("&amp;", "&").replace("&lt;", "<").replace("&gt;", ">").replace("&apos;", "'").replace("&quot;", '"')
    if t.strip():
        paras.append(t.strip())
full = "\n".join(paras)

issues = []
ok = []


def report(name, cond, detail=""):
    (ok if cond else issues).append(f"{name}{(' — ' + detail) if detail else ''}")


# ── 1. Séquençage des 76 séances ──
seances = re.findall(r"SÉANCE (\d+) / 76", full)
nums = [int(n) for n in seances]
report("76 séances présentes", len(nums) == 76, f"trouvées : {len(nums)}")
attendu = list(range(1, 77))
report("Numérotation complète et ordonnée", nums == attendu,
       "" if nums == attendu else f"manquants {sorted(set(attendu) - set(nums))}, en trop {sorted(set(nums) - set(attendu))}, ordre OK={nums == sorted(nums)}")

# ── 2. Unités, fiches, durées ──
unites = re.findall(r"UNITÉ (\d+) —", full)
report("5 titres d'unités", sorted(set(int(u) for u in unites)) == [1, 2, 3, 4, 5], str(Counter(unites)))
report("71 fiches de préparation", full.count("FICHE DE PRÉPARATION") == 71, str(full.count("FICHE DE PRÉPARATION")))
n_dur = len(re.findall(r"Durée :", full))
report("Durées : 71 fiches + 5 sujets d'examen", n_dur == 76, f"labels « Durée : » : {n_dur}")
report("Valeurs « 30 min » ≥ 71", full.count("30 min") >= 71, str(full.count("30 min")))
# ── 3. Sujets d'examen et barèmes (par tranche de séance) ──
EXAMENS = [10, 24, 38, 56, 76]
for n in EXAMENS:
    m = re.search(rf"SÉANCE {n} / 76(.*?)(?=SÉANCE {n + 1} / 76|$)", full, re.S)
    chunk = m.group(1) if m else ""
    # chaque titre d'exercice apparaît 2 fois (énoncé + corrigé) : la moitié doit sommer à 20
    pts = [float(x.replace(",", ".")) for x in re.findall(r"Exercice \d+ \(([\d]+(?:,[\d]+)?) points?\)", chunk)]
    total = re.search(r"Total : (\d+) points", chunk)
    ok_ex = ("Sujet d'examen T4" in chunk
             and len(pts) % 2 == 0
             and abs(sum(pts) / 2 - 20.0) < 1e-9
             and total and total.group(1) == "20")
    report(f"Séance {n} : sujet d'examen, barème = 20 pts", ok_ex,
           f"exos(×2)={len(pts)} demi-somme={sum(pts) / 2} total={total.group(1) if total else '?'}")

# ── 4. Structure des fiches (6 sous-étapes) ──
for step in ["Mise en situation", "Présentation", "Observation", "Analyse", "Synthèse", "Application"]:
    n = full.count(step)
    report(f"Sous-étape « {step} » ≥ 71", n >= 71, f"occurrences : {n}")

# ── 5. Corrigés ──
n_app = len(re.findall(r"Corrigé de l'exercice", full))
report("Corrigés d'exercices ≥ 264 (4 par leçon)", n_app >= 264, f"occurrences : {n_app}")
report("Aucun « ** » résiduel", "**" not in full)
report("Aucun marqueur TODO/XXX/???", not re.search(r"\bTODO\b|\bXXX\b|\?\?\?", full))

# ── 6. Mots interdits ──
for mot in ["minist", "Minist", "MINIST", "Hatier", "MINESEB", "Menesb"]:
    report(f"Interdit « {mot} » absent", mot not in full, str(full.count(mot)))
report("Aucun « Oral » seul entre balises", not re.search(r">Oral<", xml))

# ── 7. Typographie ──
report("Aucun double espace", "  " not in full)
for para in paras:
    for m in re.finditer(r"\S +(,|\.)", para):
        pass
esp_avant = [p for p in paras if re.search(r"[a-zà-ÿ] [,\.]", p)]
report("Aucune espace avant virgule/point", not esp_avant,
       esp_avant[0][:80] if esp_avant else "")
# lettres triplées (coquilles type « rapetissse »)
triple = [p for p in paras if re.search(r"(?<![a-zà-ÿ])([a-zà-ÿ])\1\1(?![a-zà-ÿ]*\bdate)", p) and re.search(r"([a-zà-ÿ])\1\1[a-zà-ÿ]", p)]
triple = [p for p in triple if re.search(r"([a-zà-ÿ])\1\1", p)]
hits_triple = []
for p in triple:
    for m in re.finditer(r"\w*([a-zà-ÿ])\1\1\w*", p, re.IGNORECASE):
        w = m.group(0)
        if not re.fullmatch(r"(?i)(eee|www|nnn)", w):
            hits_triple.append(w)
report("Aucune lettre triplée (coquille)", not hits_triple, ", ".join(sorted(set(hits_triple))[:10]))
# mots doublés (« le le », « la la »…)
EXCLUS = {"nous", "vous", "si", "langue", "glou", "est"}
hits_dbl = []
for p in paras:
    for m in re.finditer(r"\b([A-Za-zÀ-ÿ]{2,})\b \1\b", p, re.IGNORECASE):
        if m.group(1).lower() not in EXCLUS:
            hits_dbl.append(f"« {m.group(0)} » : {p[:70]}")
report("Aucun mot doublé", not hits_dbl, " | ".join(hits_dbl[:3]))
# équilibre des parenthèses et des guillemets
report("Parenthèses équilibrées", full.count("(") == full.count(")"),
       f"( ={full.count('(')} ) ={full.count(')')}")
report("Guillemets « » équilibrés", full.count("«") == full.count("»"),
       f"« ={full.count('«')} » ={full.count('»')}")
# mojibake
report("Aucun mojibake (Ã, â€™, Å“)", not re.search(r"Ã|â€™|Å“|Â ", full))

# ── 8. Orthographe : liste curated d'erreurs fréquentes sans accent ──
FAUTES = [
    r"\bapres\b", r"\btres\b", r"\bdeja\b", r"\beventuel\b", r"\binteret\b", r"\bc'est a dire\b",
    r"\ba cause\b", r"\ba partir\b", r"\ba travers\b", r"\belement", r"\benvironement\b",
    r"\bdeveloppement\b", r"\bgeographie\b", r"\bseance\b", r"\blecon\b", r"\breussir\b",
    r"\beleves?\b", r"\bprobleme\b", r"\bnumero\b", r"\bresume\b", r"\bdeforestation\b",
    r"\bdegradation\b", r"\bproprete\b", r"\bcapitael\b", r"\bmouilleux\b", r"\bsqueître\b",
    r"\bviulent\b", r"\bhotess\b", r"\bcérémonion\b",
]
hits_fautes = []
for f in FAUTES:
    for m in re.finditer(f, full, re.IGNORECASE):
        i = m.start()
        hits_fautes.append(f"{m.group(0)!r} → …{full[max(0, i-40):i+40]}…".replace("\n", " "))
report("Aucune faute de la liste curated", not hits_fautes, " || ".join(hits_fautes[:6]))

# ── 9. Images et légendes ──
media = [n for n in z.namelist() if n.startswith("word/media/")]
# scènes intégrées = champs "scene: {" dans les fichiers de données
n_scenes = 0
for _f in glob.glob(os.path.join(os.path.dirname(os.path.abspath(__file__)), "data-*.js")):
    with open(_f, encoding="utf-8") as _fh:
        n_scenes += _fh.read().count("scene: {")
expected_img = 64 + n_scenes
report(f"{expected_img} images embarquées (64 schémas + {n_scenes} scènes)", len(media) == expected_img, str(len(media)))
n_leg = len(re.findall(r"Schéma|Carte|Tableau|Affiche|Document :|Illustration :|La rose des vents à compléter", full))
report("Légendes d'images présentes", n_leg >= expected_img, f"occurrences : {n_leg}")

# ── 10. R.A. ──
report("R.A. présents (≥ 700)", full.count("R.A.") >= 700, str(full.count("R.A.")))

# ── Résumé ──
print(f"─ AUDIT DE CONTENU : {DOCX} " + "─" * 30)
for line in ok:
    print(f"✅ {line}")
for line in issues:
    print(f"❌ {line}")
print(f"\nRÉSULTAT : {'✅ AUDIT COMPLET : ' + str(len(ok)) + ' contrôles OK' if not issues else '❌ ' + str(len(issues)) + ' problème(s) sur ' + str(len(issues) + len(ok)) + ' contrôles'}")
sys.exit(1 if issues else 0)
