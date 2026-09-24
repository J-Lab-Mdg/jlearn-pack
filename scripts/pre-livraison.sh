#!/usr/bin/env bash
# Chaîne de contrôle à lancer avant toute remise de fichier.
# `set -e` : la chaîne s'arrête à la première anomalie — une livraison ne part
# jamais sur un contrôle rouge.
set -e
MANUEL="${1:-Manuel-SVT-T9-complet}"
LANGUE="${2:-fr}"

python3 scripts/assembler_manuel.py
python3 scripts/md2docx.py "$MANUEL.md" "$MANUEL.docx"
python3 scripts/verifier_manuel.py
python3 scripts/lint_langue.py "$MANUEL.md" --langue "$LANGUE"

echo "--- couleurs, sommaire, intégrité ---"
python3 - "$MANUEL.docx" <<'PYEOF'
import sys, zipfile, re, collections
z = zipfile.ZipFile(sys.argv[1]); assert z.testzip() is None
x = z.read("word/document.xml").decode("utf8")
c = collections.Counter(re.findall(r'w:color w:val="([0-9A-Fa-f]{6})"', x))
manque = [k for k in ("C00000", "1E7B34", "1F4E79", "C2185B") if not c.get(k)]
liens = re.findall(r'w:anchor="([^"]+)"', x)
signets = set(re.findall(r'w:bookmarkStart[^>]*w:name="([^"]+)"', x))
orphelins = [a for a in liens if a not in signets]
print("couleurs manquantes :", manque or "aucune")
print("liens sommaire :", len(liens), "| orphelins :", len(orphelins))
print("sectPr :", x.count("<w:sectPr"), "| ns0 :", x.count("ns0:"))
assert not manque and liens and not orphelins
assert x.count("<w:sectPr") == 1 and x.count("ns0:") == 0
print("OK")
PYEOF
