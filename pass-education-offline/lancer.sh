#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
if command -v python3 >/dev/null 2>&1; then
  exec python3 pass_education_offline.py "$@"
elif command -v python >/dev/null 2>&1; then
  exec python pass_education_offline.py "$@"
else
  echo "[!] Python 3 est requis pour lancer Pass-Education Offline."
  exit 1
fi
