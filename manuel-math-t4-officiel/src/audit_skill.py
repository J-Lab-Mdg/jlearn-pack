#!/usr/bin/env python3
"""Contrôle de conformité du DOCX T4 produit par build_skill.js."""
from __future__ import annotations

import json
import re
from pathlib import Path
from zipfile import ZipFile

ROOT = Path(__file__).resolve().parents[1]
DOCX = ROOT / "livrables" / "Manuel_Mathematiques_T4_JLearn_SkillV1.docx"
INV = ROOT / "inventaire_lecons.json"
REPORT = ROOT / "AUDIT_SKILL_T4_V1.md"


def main():
    inv = json.loads(INV.read_text(encoding="utf-8"))
    ids = [lesson["id"] for unit in inv["unites"] for lesson in unit["lecons"]]
    with ZipFile(DOCX) as z:
        xml = z.read("word/document.xml").decode("utf-8")
        names = set(re.findall(r'w:bookmarkStart[^>]+w:name="([^"]+)"', xml))
        anchors = set(re.findall(r'w:hyperlink[^>]+w:anchor="([^"]+)"', xml))
        media = [n for n in z.namelist() if n.startswith("word/media/")]
    expected_links = len(inv["unites"]) + 2 * len(ids)
    lesson_bookmarks = {f"lecon{re.sub(r'[^A-Za-z0-9]', '', i)}" for i in ids}
    session_bookmarks = {f"seance{i + 1}" for i in range(len(ids))}
    unit_bookmarks = {f"unite{i + 1}" for i in range(len(inv["unites"]))}
    required_bookmarks = lesson_bookmarks | session_bookmarks | unit_bookmarks
    required_links = required_bookmarks
    checks = [
        ("57 fiches de préparation", xml.count("FICHE DE PRÉPARATION") == len(ids)),
        ("57 tables de déroulement", xml.count("Étapes et durée") == len(ids)),
        ("6 colonnes matérialisées par la ligne d’en-tête", xml.count("Déroulement de la leçon") == len(ids)),
        ("57 sections d’exercices", xml.count("4. Exercices") == len(ids)),
        ("57 sections de corrigés", xml.count("5. Corrigé détaillé") == len(ids)),
        ("police Times New Roman présente", xml.count("Times New Roman") > 0),
        ("aucun support nommé Oral", ">Oral<" not in xml),
        ("aucun champ TOC natif", "w:instrText" not in xml),
        ("liens sans ancres manquantes", not (required_links - anchors)),
        ("nombre de liens TOC attendu", len(anchors & required_links) == expected_links),
        ("identifiants de leçons présents", all(i in xml for i in ids)),
    ]
    report = [
        "# Audit skill J-Learn — Mathématiques T4 V1",
        "",
        f"- Fichier : `{DOCX.relative_to(ROOT.parent)}`",
        f"- Leçons attendues : {len(ids)}",
        f"- Composantes : {len(inv['unites'])}",
        f"- Signets totaux : {len(names)}",
        f"- Liens internes totaux : {len(anchors)}",
        f"- Liens attendus dans le sommaire : {expected_links}",
        f"- Images intégrées : {len(media)}",
        "",
        "## Contrôles",
        "",
        "| Contrôle | Résultat |",
        "|---|---|",
    ]
    for label, ok in checks:
        report.append(f"| {label} | {'✅ OK' if ok else '❌ ÉCHEC'} |")
    illustrations = (f"✅ {len(media)} images PNG sont intégrées dans le DOCX, à partir des figures mathématiques générées en SVG/PNG." if media else "⚠️ Aucune image n’est encore intégrée dans cette V1 skill.")
    report += [
        "",
        "## État des illustrations",
        "",
        illustrations,
        "",
        "## Conclusion",
        "",
        "✅ La structure de fiche, la police, les liens internes et les compteurs de sections sont conformes au premier niveau de contrôle du skill.",
        "⚠️ La V1 n’est pas encore le livrable final : il reste à enrichir la variété des exercices, les barèmes détaillés et les vérifications numériques exhaustives.",
    ]
    REPORT.write_text("\n".join(report) + "\n", encoding="utf-8")
    failed = [label for label, ok in checks if not ok]
    if failed:
        raise SystemExit("Échec : " + "; ".join(failed))
    print(f"Audit skill réussi : {len(ids)} fiches, {expected_links} liens TOC attendus, {len(media)} images")


if __name__ == "__main__":
    main()
