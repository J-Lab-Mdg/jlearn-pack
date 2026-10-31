#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "===================================================================="
echo "  JW MALAGASY OFFLINE — JWPUB / EPUB / PDF & Recherche (Port 8767)"
echo "  Compatible Linux, macOS et Android (via Termux : pkg install python)"
echo "===================================================================="

if command -v python3 >/dev/null 2>&1; then
    exec python3 jw_malagasy_offline.py "$@"
elif command -v python >/dev/null 2>&1; then
    exec python jw_malagasy_offline.py "$@"
else
    echo "[ERREUR] Python 3 est requis. Sur Android (Termux), tapez : pkg install python"
    exit 1
fi
