#!/usr/bin/env python3
"""Génère github-sync/manifest-drive.csv : manifeste complet du Google Drive J-Learn.

Prérequis : rclone configuré avec un remote nommé `gdrive` pointant vers le Drive.
Usage :  python3 scripts/drive_manifest.py
"""
import csv, os, subprocess, sys

OUT = os.path.join(os.path.dirname(__file__), "..", "github-sync", "manifest-drive.csv")
REMOTE = os.environ.get("RCLONE_REMOTE", "gdrive:")


def main():
    # Liste récursive : chemin;taille;date;type MIME (approx)
    res = subprocess.run(
        ["rclone", "lsf", "--csv", "--files-only", REMOTE],
        capture_output=True, text=True, check=True,
    )
    rows = []
    for line in res.stdout.splitlines():
        if not line.strip():
            continue
        size, date, path = line.split(",", 2)
        ext = os.path.splitext(path)[1].lower().lstrip(".") or "dossier"
        rows.append([path, size, date, ext, f"https://drive.google.com/uc?id=PLACEHOLDER"])
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["chemin_drive", "taille_octets", "modifie_le", "extension", "lien_drive"])
        w.writerows(sorted(rows))
    print(f"{len(rows)} entrées écrites dans {OUT}")


if __name__ == "__main__":
    sys.exit(main())
