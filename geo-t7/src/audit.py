#!/usr/bin/env python3
"""Audit de contenu et de protection du Manuel de Géographie T7."""
import glob, html, os, re, sys, zipfile
from collections import Counter

DOCX = sys.argv[1] if len(sys.argv) > 1 else "geo-t7/output/Manuel_Geographie_T7_JLearn.docx"
SRC = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(SRC, "..", ".."))
z = zipfile.ZipFile(DOCX)
xml = z.read("word/document.xml").decode("utf-8")
paras = []
for raw in xml.split("</w:p>"):
    text = html.unescape(re.sub(r"<[^>]+>", "", raw)).strip()
    if text:
        paras.append(text)
full = "\n".join(paras)
low = full.lower()
protection_xml = "\n".join(z.read(n).decode("utf-8") for n in z.namelist() if re.fullmatch(r"word/(?:header|footer)\d+\.xml", n))
rels_xml = "\n".join(z.read(n).decode("utf-8") for n in z.namelist() if n.endswith(".rels"))

ok, issues = [], []
def report(name, cond, detail=""):
    (ok if cond else issues).append(name + ((" — " + detail) if detail else ""))

# Structure générale : 66 leçons + 7 révisions + 7 examens.
nums = [int(n) for n in re.findall(r"SÉANCE (\d+) / 80", full)]
report("80 numéros présents", len(nums) == 80, f"trouvés : {len(nums)}")
report("Numérotation continue 1–80", nums == list(range(1, 81)), str(nums[:5] + nums[-5:]))
unites = sorted(set(map(int, re.findall(r"UNITÉ (\d+) —", full))))
report("7 unités présentes", unites == list(range(1, 8)), str(unites))
report("73 fiches de préparation", full.count("FICHE DE PRÉPARATION") == 73, str(full.count("FICHE DE PRÉPARATION")))
report("80 mentions de durée", full.count("Durée :") == 80, str(full.count("Durée :")))
report("Séances de 60 minutes", full.count("60 minutes") >= 80, str(full.count("60 minutes")))
report("7 liens de révision au sommaire", len(re.findall(r"Révision \(Unité \d\)", full)) == 7)

# Examens corrigés et barèmes.
examens = [8, 20, 34, 44, 58, 66, 80]
for n in examens:
    nxt = n + 1
    m = re.search(rf"SÉANCE {n} / 80(.*?)(?=SÉANCE {nxt} / 80|ANNEXES|$)", full, re.S)
    chunk = m.group(1) if m else ""
    pts = [int(x) for x in re.findall(r"Exercice \d+ \((\d+) points\)", chunk)]
    total = re.search(r"Total : (\d+) points", chunk)
    valid = "Sujet d'examen T7" in chunk and len(pts) == 8 and sum(pts) // 2 == 20 and total and total.group(1) == "20"
    report(f"Examen {n} corrigé et noté sur 20", valid, f"mentions exercices={len(pts)}, total={total.group(1) if total else '?'}")
report("21 mentions des 7 sujets d'examen", full.count("Sujet d'examen T7") == 21, str(full.count("Sujet d'examen T7")))

# Contenu pédagogique.
for step in ["Mise en situation", "Présentation", "Synthèse", "Application"]:
    report(f"73 sous-étapes « {step} »", full.count(step) == 73, str(full.count(step)))
report("66 blocs d'exercices de leçon", full.count("EXERCICES") == 66, str(full.count("EXERCICES")))
report("7 corrigés et barèmes d'examen", full.count("CORRIGÉ ET BARÈME") == 7)
report("Corrigés détaillés des exercices", full.count("Corrigé de l'exercice") >= 264, str(full.count("Corrigé de l'exercice")))
report("Au moins 800 réponses attendues", full.count("R.A.") >= 800, str(full.count("R.A.")))
report("66 scènes légendées", full.count("Document d'observation :") == 66, str(full.count("Document d'observation :")))
report("66 schémas pédagogiques dans les leçons", full.count("Schéma pédagogique :") >= 66, str(full.count("Schéma pédagogique :")))
report("Aucun balisage gras résiduel", "**" not in full)
report("Aucun marqueur TODO/XXX/???", not re.search(r"\bTODO\b|\bXXX\b|\?\?\?", full))

# Conventions éditoriales et typographie.
report("Aucune mention ministérielle", not re.findall(r"\bminist\w*", full, re.I), str(re.findall(r"\bminist\w*", full, re.I)[:3]))
for word in ["Hatier", "MINESEB", "Menesb"]:
    report(f"Interdit « {word} » absent", word not in full)
report("Aucun « Oral » comme support isolé", not re.search(r">Oral<", xml))
report("Aucun double espace", "  " not in full)
bad_space = [p for p in paras if re.search(r"[a-zà-ÿ] [,\.\)]", p)]
report("Aucune espace avant virgule, point ou parenthèse", not bad_space, bad_space[0][:100] if bad_space else "")
triples = []
for p in paras:
    for m in re.finditer(r"\w*([a-zà-ÿ])\1\1\w*", p, re.I):
        if not re.fullmatch(r"(?i)(eee|www|nnn|iii)", m.group(0)):
            triples.append(m.group(0))
report("Aucune lettre triplée", not triples, ", ".join(sorted(set(triples))[:8]))
report("Parenthèses équilibrées", full.count("(") == full.count(")"), f"{full.count('(')}/{full.count(')')}")
report("Guillemets français équilibrés", full.count("«") == full.count("»"), f"{full.count('«')}/{full.count('»')}")
report("Aucun texte corrompu", not re.search(r"Ã|â€™|Å“|Â ", full))
for fault in [r"\benvironement\b", r"\bdeveloppement\b", r"\bgeographie\b", r"\bseance\b", r"\blecon\b", r"\beleves?\b", r"\bcontinant\b"]:
    report(f"Orthographe contrôlée : {fault}", not re.search(fault, full, re.I))

# Illustrations embarquées et fichiers sources.
drawings = xml.count("<w:drawing>")
media = [n for n in z.namelist() if n.startswith("word/media/") and "." in n.split("/")[-1]]
report("153 illustrations placées", drawings == 153, str(drawings))
report("Médias embarqués non vides", all(z.getinfo(n).file_size > 0 for n in media), str(len(media)))
scene_files = glob.glob(os.path.join(ROOT, "geo-t7", "scenes", "scene_s*.jpg"))
diagram_files = glob.glob(os.path.join(ROOT, "geo7_s*.png"))
annex_files = glob.glob(os.path.join(ROOT, "geo7_*.png"))
report("66 fichiers de scènes", len(scene_files) == 66, str(len(scene_files)))
report("66 fichiers de schémas", len(diagram_files) == 66, str(len(diagram_files)))
report("8 fichiers d'annexes", len(annex_files) - len(diagram_files) - 1 == 8, str(len(annex_files) - len(diagram_files) - 1))

# Annexes.
report("Page ANNEXES présente", "ANNEXES" in full)
report("Glossaire de 66 notions", "Les 66 notions fondamentales" in full)
report("8 consignes d'annexes", full.count("Consigne :") == 8, str(full.count("Consigne :")))
for title in ["Le planisphère à compléter", "Latitude et longitude", "Le profil du relief", "Les grandes zones climatiques", "Le cycle de l'eau", "La population mondiale", "Une chaîne de valeur mondiale", "Gérer durablement une ressource"]:
    report(f"Annexe « {title} »", title in full)
for col in ["Acquis", "En cours", "À revoir"]:
    report(f"Auto-évaluation : colonne « {col} »", col in full)
report("Table des illustrations présente", full.count("Table des illustrations") >= 2)
report("Programme T7 cité dans les sources", "Programme d'études T7" in full)
report("Ressources pédagogiques T7 citées", "Ressources pédagogiques T7" in full)

# Sommaire interactif.
bookmarks = set(re.findall(r'<w:bookmarkStart[^>]*w:name="([^"]+)"', xml))
anchors = set(re.findall(r'w:anchor="([^"]+)"', xml))
report("Tous les signets ont un lien", not (bookmarks - anchors), str(sorted(bookmarks - anchors)))
report("Tous les liens ont un signet", not (anchors - bookmarks), str(sorted(anchors - bookmarks)))
report("96 signets interactifs", len(bookmarks) == 96, str(len(bookmarks)))

# Protection anti-revente.
url = "https://web.facebook.com/profile.php?id=61575599505051"
report("Page « Authenticité et droits »", "AUTHENTICITÉ ET DROITS" in full and "ATTENTION AUX REVENTES NON AUTORISÉES" in full)
report("Message de vérification du QR", "Scannez ce QR code" in full)
report("Filigrane diagonal officiel", "COPIE OFFICIELLE J-LEARN" in protection_xml)
report("Pied de page légal", "Vente autorisée exclusivement via" in protection_xml)
report("Pagination de pied de page", "PAGE" in protection_xml)
report("Lien Facebook officiel", url in rels_xml)

print(f"─ AUDIT GEO T7 : {DOCX} " + "─" * 30)
for line in ok: print("✅", line)
for line in issues: print("❌", line)
print(f"\nRÉSULTAT : {'✅ AUDIT COMPLET : ' + str(len(ok)) + ' contrôles OK' if not issues else '❌ ' + str(len(issues)) + ' problème(s) sur ' + str(len(ok) + len(issues)) + ' contrôles'}")
sys.exit(1 if issues else 0)
