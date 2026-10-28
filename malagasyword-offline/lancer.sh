#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"

if command -v python3 >/dev/null 2>&1; then
  exec python3 malagasyword_offline.py "$@"
elif command -v python >/dev/null 2>&1; then
  exec python malagasyword_offline.py "$@"
else
  echo "[!] Python 3 n'est pas installé. Installez python3 puis relancez ./lancer.sh"
  exit 1
fi
