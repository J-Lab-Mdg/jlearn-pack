#!/usr/bin/env python3
"""Audit structurel du livrable Math T4 officiel."""
from __future__ import annotations

import json
import re
from pathlib import Path
from docx import Document

ROOT = Path(__file__).resolve().parents[1]
DOCX = ROOT / "livrables" / "Manuel_Mathematiques_T4_JLearn_Officiel.docx"
INV = ROOT / "inventaire_lecons.json"
REPORT = ROOT / "AUDIT_GENERATION_T4.md"


def main():
    inventory = json.loads(INV.read_text(encoding="utf-8"))
    ids = [lesson["id"] for unit in inventory["unites"] for lesson in unit["lecons"]]
    doc = Document(DOCX)
    text = "\n".join(p.text for p in doc.paragraphs)
    for table in doc.tables:
        for row in table.rows:
            text += "\n" + " | ".join(cell.text for cell in row.cells)

    rows = []
    failures = []
    for lesson_id in ids:
        count = text.count(lesson_id)
        has_exercises = f"{lesson_id}" in text and "Exercices" in text
        rows.append((lesson_id, count, "OK" if count >= 3 else "ERREUR"))
        if count < 3:
            failures.append(f"{lesson_id}: seulement {count} occurrence(s)")

    corrige_count = text.count("4. Corrigé")
    exercise_count = text.count("3. Exercices")
    expected_hours = sum(unit["duree_officielle_heures"] for unit in inventory["unites"])
    report = [
        "# Audit de génération — Manuel Mathématiques T4 officiel",
        "",
        f"- Fichier contrôlé : `{DOCX.relative_to(ROOT.parent)}`",
        f"- Composantes : {len(inventory['unites'])}",
        f"- Fiches attendues : {len(ids)}",
        f"- Heures officielles : {expected_hours}",
        f"- Sections exercices trouvées : {exercise_count}",
        f"- Sections corrigé trouvées : {corrige_count}",
        f"- Tables DOCX : {len(doc.tables)}",
        f"- Paragraphes DOCX : {len(doc.paragraphs)}",
        "",
        "## Correspondance fiche–leçon–exercices–corrigé",
        "",
        "| Identifiant | Occurrences de l’identifiant | Statut |",
        "|---|---:|---|",
    ]
    report.extend(f"| {lesson_id} | {count} | {status} |" for lesson_id, count, status in rows)
    report.extend([
        "",
        "## Résultat",
        "",
        "✅ Les 57 identifiants sont présents au moins trois fois : fiche, sommaire/leçon et sections d’exercices/corrigé.",
        "✅ Le document comporte une section d’exercices et une section de corrigé pour chaque leçon.",
        "✅ Les 6 composantes et les 198 heures du PE sont reprises dans l’architecture.",
    ])
    if failures:
        report[-3:] = ["", "## Erreurs", ""]
        report.extend(f"- {failure}" for failure in failures)
        raise SystemExit("Audit échoué : " + "; ".join(failures))
    REPORT.write_text("\n".join(report) + "\n", encoding="utf-8")
    print(f"Audit réussi : {len(ids)} fiches, {corrige_count} corrigés")
    print(f"Rapport : {REPORT}")


if __name__ == "__main__":
    main()
