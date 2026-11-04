#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "===================================================================="
echo "  FACEBOOK PAGE OFFLINE — Publications, Photos, Vidéos & Recherche"
echo "  Port 8768 — Compatible Linux, macOS et Android (Termux)"
echo "===================================================================="

if command -v python3 >/dev/null 2>&1; then
    exec python3 facebook_offline.py "$@"
elif command -v python >/dev/null 2>&1; then
    exec python facebook_offline.py "$@"
else
    echo "[ERREUR] Python 3 est requis. Sur Android (Termux) : pkg install python"
    exit 1
fi
