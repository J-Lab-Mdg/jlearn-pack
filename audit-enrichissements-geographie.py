#!/usr/bin/env python3
"""Audit transversal des récapitulatifs et atlas GEO T4 à T9."""
import hashlib, html, re, sys, zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent
EXPECTED = {
    4: (5, 8, 150), 5: (5, 16, 154), 6: (6, 19, 161),
    7: (7, 11, 153), 8: (6, 10, 132), 9: (6, 15, 153),
}
problems = []
for grade, (units, maps, drawings) in EXPECTED.items():
    src = ROOT / f"geo-t{grade}/output/Manuel_Geographie_T{grade}_JLearn.docx"
    final = ROOT / f"Nos manuels/Manuel_Geographie_T{grade}_JLearn.docx"
    with zipfile.ZipFile(src) as z:
        xml = z.read("word/document.xml").decode("utf-8")
        text = html.unescape(re.sub(r"<[^>]+>", "", xml))
        assert z.testzip() is None
    checks = {
        "récapitulatifs": text.count("RÉCAPITULATIF GÉOGRAPHIQUE — UNITÉ") == units,
        "atlas": text.count(f"ATLAS CARTOGRAPHIQUE EXPLOITABLE — T{grade}") == 1,
        "cartes annoncées": text.count("carte ou schéma de localisation exploitable") == maps,
        "échelles": text.count("Échelle géographique :") == maps,
        "renvois sources": text.count("Source cartographique : [S2] et [S3]") == maps,
        "page sources": text.count("Sources cartographiques des annexes") == 1,
        "note pédagogique": "elles ne constituent ni des limites cadastrales ni des mesures de terrain" in text,
        "illustrations": xml.count("<w:drawing>") == drawings,
        "copie finale": src.read_bytes() == final.read_bytes(),
    }
    bad = [k for k, ok in checks.items() if not ok]
    if bad: problems.append(f"T{grade}: " + ", ".join(bad))
    sha = hashlib.sha256(src.read_bytes()).hexdigest()
    print(f"T{grade} : {'OK' if not bad else 'ÉCHEC'} — {units} récapitulatifs, {maps} cartes — {sha}")

# Contrôle ciblé du passage explicitement rejeté dans les leçons.
lesson_sources = "\n".join(p.read_text(errors="ignore") for g in (4, 5, 6) for p in (ROOT / f"geo-t{g}/src").glob("data-unite*.js"))
rejected = "« On trouve du travail ! », répondait le groupe de Rakoto."
if rejected in lesson_sources:
    problems.append("Le passage narratif rejeté subsiste dans les sources de leçon.")

if problems:
    print("\n".join("❌ " + p for p in problems))
    sys.exit(1)
print("✅ AUDIT TRANSVERSAL RÉUSSI — 35 récapitulatifs et 79 cartes ou schémas localisés.")
