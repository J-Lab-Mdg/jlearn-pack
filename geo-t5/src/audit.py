#!/usr/bin/env python3
# audit.py — Audit de CONTENU du manuel T5 (complète verifications.py qui audite la structure XML)
# Usage : python3 geo-t5/src/audit.py [chemin.docx]
import re
import sys
import os
import glob
import zipfile
from collections import Counter

DOCX = sys.argv[1] if len(sys.argv) > 1 else "geo-t5/output/Manuel_Geographie_T5_JLearn.docx"
SRC = os.path.dirname(os.path.abspath(__file__))

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

# Protection J-Learn : filigrane et pied de page sont stockés hors de document.xml.
protection_xml = "\n".join(
    z.read(n).decode("utf-8")
    for n in z.namelist()
    if re.fullmatch(r"word/(?:header|footer)\d+\.xml", n)
)
rels_xml = "\n".join(
    z.read(n).decode("utf-8")
    for n in z.namelist()
    if n.endswith(".rels")
)

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
report("5 séances de révision", len(re.findall(r"Révision \(Unité \d\)", full)) == 5, str(len(re.findall(r"Révision \(Unité \d\)", full))))

# ── 3. Sujets d'examen et barèmes ──
EXAMENS = [16, 26, 55, 61, 76]
for n in EXAMENS:
    m = re.search(rf"SÉANCE {n} / 76(.*?)(?=SÉANCE {n + 1} / 76|$)", full, re.S)
    chunk = m.group(1) if m else ""
    # chaque titre d'exercice apparaît 2 fois (énoncé + corrigé) : la moitié doit sommer à 20
    pts = [float(x.replace(",", ".")) for x in re.findall(r"Exercice \d+ \(([\d]+(?:,[\d]+)?) points?\)", chunk)]
    total = re.search(r"Total : (\d+) points", chunk)
    ok_ex = ("Sujet d'examen T5" in chunk
             and len(pts) % 2 == 0
             and abs(sum(pts) / 2 - 20.0) < 1e-9
             and total and total.group(1) == "20")
    report(f"Séance {n} : sujet d'examen, barème = 20 pts", ok_ex,
           f"exos(×2)={len(pts)} demi-somme={sum(pts) / 2} total={total.group(1) if total else '?'}")
report("15 mentions « Sujet d'examen T5 »", full.count("Sujet d'examen T5") == 15, str(full.count("Sujet d'examen T5")))

# ── 4. Structure des fiches (6 sous-étapes) ──
for step in ["Mise en situation", "Présentation", "Analyse", "Synthèse", "Application"]:
    n = full.count(step)
    report(f"Sous-étape « {step} » ≥ 71", n >= 71, f"occurrences : {n}")

# ── 5. Corrigés et documents ──
n_app = len(re.findall(r"Corrigé de l'exercice", full))
report("Corrigés d'exercices ≥ 528 (2 par exercice)", n_app >= 528, f"occurrences : {n_app}")
report("66 documents de leçon « Document : »", full.count("Document :") == 66, str(full.count("Document :")))
report("Aucun « ** » résiduel", "**" not in full)
report("Aucun marqueur TODO/XXX/???", not re.search(r"\bTODO\b|\bXXX\b|\?\?\?", full))

# ── 6. Mots interdits ──
for mot in ["minist", "Minist", "MINIST", "Hatier", "MINESEB", "Menesb"]:
    report(f"Interdit « {mot} » absent", mot not in full, str(full.count(mot)))
report("Aucun « Oral » seul entre balises", not re.search(r">Oral<", xml))

# ── 7. Typographie ──
report("Aucun double espace", "  " not in full)
esp_avant = [p for p in paras if re.search(r"[a-zà-ÿ] [,\.\)]", p)]
report("Aucune espace avant virgule/point/parenthèse", not esp_avant,
       esp_avant[0][:80] if esp_avant else "")
# lettres triplées (coquilles) — III = chiffre romain des fiches (I. II. III.)
hits_triple = []
for p in paras:
    for m in re.finditer(r"\w*([a-zà-ÿ])\1\1\w*", p, re.IGNORECASE):
        w = m.group(0)
        if not re.fullmatch(r"(?i)(eee|www|nnn|iii)", w):
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
    r"\bdeveloppement\b", r"\bgeographie\b", r"\bseance\b", r"\blecon\b",
    r"\beleves?\b", r"\bprobleme\b", r"\bnumero\b", r"\bresume\b", r"\bdeforestation\b",
    r"\bdegradation\b", r"\bproprete\b", r"\bequateur\b", r"\bhemisphere\b", r"\bocean\b",
    r"\bcontinant\b", r"\bvegetation\b", r"\bsuperficiel\b", r"\bsaisonn\b", r"\btropiqu\b",
]
hits_fautes = []
for f in FAUTES:
    for m in re.finditer(f, full, re.IGNORECASE):
        i = m.start()
        hits_fautes.append(f"{m.group(0)!r} → …{full[max(0, i-40):i+40]}…".replace("\n", " "))
report("Aucune faute de la liste curated", not hits_fautes, " || ".join(hits_fautes[:6]))

# ── 9. Images et scènes ──
media = [n for n in z.namelist() if n.startswith("word/media/") and z.getinfo(n).file_size > 0]
n_scenes = 0
for _f in glob.glob(os.path.join(SRC, "data-*.js")):
    with open(_f, encoding="utf-8") as _fh:
        n_scenes += _fh.read().count("scene: {")
with open(os.path.join(SRC, "annexes.js"), encoding="utf-8") as _fh:
    annex_src = _fh.read()
n_muettes = len(re.findall(r'imgBlock\("geo5_', annex_src))
n_atlas = 5
expected_img = 2 + 66 + n_scenes + n_muettes + n_atlas
report(f"{expected_img} images embarquées (1 couverture + 1 QR officiel + 66 schémas + {n_scenes} scènes + {n_muettes} cartes muettes + {n_atlas} cartes-atlas)",
       len(media) == expected_img, str(len(media)))
n_leg = len(re.findall(r"Schéma|Carte|Tableau|Document :|Le planisphère à compléter|L'océan Indien à compléter", full))
report("Légendes d'images présentes", n_leg >= expected_img, f"occurrences : {n_leg}")

# ── 10. Annexes ──
report("Page ANNEXES présente", "ANNEXES" in full)
gloss_block = re.search(r"const GLOSSAIRE = \[(.*?)\n\];", annex_src, re.S)
gloss_terms = re.findall(r'\["([^"]+)",', gloss_block.group(1)) if gloss_block else []
report("Glossaire ≥ 50 termes", len(gloss_terms) >= 50, f"{len(gloss_terms)} termes dans annexes.js")
absents = [t for t in gloss_terms if t not in full]
report("Tous les termes du glossaire figurent dans le manuel", not absents, ", ".join(absents[:5]))
report("4 consignes de cartes muettes", full.count("Consigne :") == 4, str(full.count("Consigne :")))
for m in ["Le planisphère à compléter", "L'océan Indien à compléter",
          "La carte de Madagascar à compléter", "La carte des régions naturelles à compléter"]:
    report(f"Carte muette « {m} »", m in full)
eval_block = re.search(r"const AUTO_EVAL = \[(.*?)\n\];", annex_src, re.S)
n_comps = len(re.findall(r'"J[e\'’]', eval_block.group(1))) if eval_block else 0
report("Auto-évaluation ≥ 20 compétences", n_comps >= 20, f"{n_comps} compétences")
for m in ["Acquis", "En cours", "À revoir"]:
    report(f"Colonne « {m} » de l'auto-évaluation", m in full)
report("Table des illustrations : 66 lignes + annexe",
       len(re.findall(r"Le planisphère à compléter ; l'océan Indien à compléter", full)) == 1
       and full.count("Table des illustrations") >= 2)
for m in ["Programme d'études officiel T5", "FRP T5 — Fascicule 2", "Collection J-Learn"]:
    report(f"Source « {m} » citée", m in full)
report("Sommaire : liens vers les 5 annexes", all(a in xml for a in
       ['w:anchor="annexes"', 'w:anchor="glossaire"', 'w:anchor="cartesmuettes"',
        'w:anchor="autoevaluation"', 'w:anchor="illustrations"', 'w:anchor="sources"']))

# ── 11. R.A. ──
report("R.A. présents (≥ 760)", full.count("R.A.") >= 760, str(full.count("R.A.")))

# ── Protection officielle J-Learn ──
FACEBOOK_URL = "https://web.facebook.com/profile.php?id=61575599505051"
report("Page « Authenticité et droits »", "AUTHENTICITÉ ET DROITS" in full and "ATTENTION AUX REVENTES NON AUTORISÉES" in full)
report("QR et message de vérification officiels", "Scannez ce QR code" in full)
report("Filigrane diagonal J-Learn", "COPIE OFFICIELLE J-LEARN" in protection_xml)
report("Pied de page anti-revente", "Vente autorisée exclusivement via" in protection_xml)
report("Lien Facebook officiel intégré", FACEBOOK_URL in rels_xml)

# ── Résumé ──
print(f"─ AUDIT DE CONTENU : {DOCX} " + "─" * 30)
for line in ok:
    print(f"✅ {line}")
for line in issues:
    print(f"❌ {line}")
print(f"\nRÉSULTAT : {'✅ AUDIT COMPLET : ' + str(len(ok)) + ' contrôles OK' if not issues else '❌ ' + str(len(issues)) + ' problème(s) sur ' + str(len(issues) + len(ok)) + ' contrôles'}")
sys.exit(1 if issues else 0)
