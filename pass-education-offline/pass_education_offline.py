#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Pass-Éducation Offline — Bibliothèque de Cours & Lecteur PDF Hors-Ligne (PS -> Terminale).

 Zéro dépendance externe (100 % bibliothèque standard Python 3).
 Fonctionne simultanément avec MalagasyWord Offline (port 8766 par défaut).
"""

from __future__ import annotations

import argparse
import io
import json
import mimetypes
import os
import socket
import subprocess
import sys
import threading
import urllib.parse
import webbrowser
import zipfile
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from typing import Any, Dict

APP_DIR = os.path.dirname(os.path.abspath(__file__))
if APP_DIR not in sys.path:
    sys.path.insert(0, APP_DIR)

from pe_engine.crawler import PassEducationSyncManager  # noqa: E402
from pe_engine.database import PassEducationDB  # noqa: E402
from pe_engine.seed_demo import ensure_demo_seed  # noqa: E402

STATIC_DIR = os.path.join(APP_DIR, "static")
DATA_DIR = os.path.join(APP_DIR, "data")
PDF_ROOT = os.path.join(APP_DIR, "pdfs")
DB_PATH = os.path.join(DATA_DIR, "pass_education.db")


def build_clean_pack_zip_bytes() -> bytes:
    """Génère une archive propre `pass-education-offline.zip` prête à extraire sous Windows/Mac/Linux."""
    buf = io.BytesIO()
    excluded_dirs = {"__pycache__", "data", "pdfs", "runtime", ".git", ".pytest_cache"}
    excluded_exts = {".pyc", ".pyo", ".db", ".db-wal", ".db-shm", ".zip", ".part"}

    with zipfile.ZipFile(buf, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as zf:
        for root, dirs, files in os.walk(APP_DIR):
            dirs[:] = sorted(d for d in dirs if d not in excluded_dirs)
            for fname in sorted(files):
                _, ext = os.path.splitext(fname)
                if ext.lower() in excluded_exts:
                    continue
                abs_p = os.path.join(root, fname)
                rel_p = os.path.relpath(abs_p, APP_DIR).replace("\\", "/")
                arcname = f"pass-education-offline/{rel_p}"
                zf.write(abs_p, arcname)
    return buf.getvalue()


def make_handler(db: PassEducationDB, sync_mgr: PassEducationSyncManager):
    class PEHandler(BaseHTTPRequestHandler):
        server_version = "PassEducationOffline/1.0"

        def log_message(self, fmt: str, *args: Any) -> None:
            return

        def _send_json(self, payload: Any, status: int = 200) -> None:
            body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
            self.send_response(status)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            self.wfile.write(body)

        def _read_json_body(self) -> Dict[str, Any]:
            length = int(self.headers.get("Content-Length") or "0")
            if length <= 0:
                return {}
            raw = self.rfile.read(min(length, 2 * 1024 * 1024))
            try:
                return json.loads(raw.decode("utf-8"))
            except Exception:
                return {}

        def do_GET(self) -> None:
            parsed = urllib.parse.urlsplit(self.path)
            path = parsed.path
            qs = urllib.parse.parse_qs(parsed.query)

            if path == "/api/stats":
                self._send_json(db.get_stats())
                return

            if path == "/api/sync/status":
                self._send_json(sync_mgr.get_status())
                return

            if path == "/api/search":
                q = (qs.get("q", [""])[0] or "").strip()
                cycle = (qs.get("cycle", [""])[0] or "").strip()
                cls = (qs.get("class", [""])[0] or "").strip()
                subj = (qs.get("subject", [""])[0] or "").strip()
                rtype = (qs.get("type", [""])[0] or "").strip()
                pdf_filter = (qs.get("pdf_filter", [""])[0] or "").strip()
                try:
                    limit = max(1, min(150, int(qs.get("limit", ["60"])[0])))
                except ValueError:
                    limit = 60
                try:
                    offset = max(0, int(qs.get("offset", ["0"])[0]))
                except ValueError:
                    offset = 0
                res = db.search_resources(
                    query=q,
                    cycle_code=cycle,
                    class_code=cls,
                    subject_code=subj,
                    resource_type=rtype,
                    pdf_filter=pdf_filter,
                    limit=limit,
                    offset=offset,
                )
                self._send_json(res)
                return

            if path == "/api/resource":
                try:
                    res_id = int(qs.get("id", ["0"])[0])
                except ValueError:
                    res_id = 0
                detail = db.get_resource_detail(res_id)
                if not detail:
                    self._send_json({"error": "Ressource introuvable"}, status=404)
                    return
                self._send_json(detail)
                return

            if path == "/api/pdf":
                try:
                    res_id = int(qs.get("id", ["0"])[0])
                except ValueError:
                    res_id = 0
                detail = db.get_resource_detail(res_id)
                if not detail or not detail.get("local_pdf_exists"):
                    self._send_json({"error": "Fichier PDF non présent localement"}, status=404)
                    return
                abs_pdf = detail["local_pdf_abspath"]
                try:
                    with open(abs_pdf, "rb") as f:
                        pdf_bytes = f.read()
                except Exception as exc:
                    self._send_json({"error": str(exc)}, status=500)
                    return
                dl_flag = qs.get("download", ["0"])[0] == "1"
                disp = "attachment" if dl_flag else "inline"
                fname = os.path.basename(abs_pdf).replace('"', "")
                self.send_response(HTTPStatus.OK)
                self.send_header("Content-Type", "application/pdf")
                self.send_header("Content-Disposition", f'{disp}; filename="{fname}"')
                self.send_header("Content-Length", str(len(pdf_bytes)))
                self.send_header("Cache-Control", "private, max-age=3600")
                self.end_headers()
                self.wfile.write(pdf_bytes)
                return

            if path == "/download-pack":
                zbytes = build_clean_pack_zip_bytes()
                self.send_response(HTTPStatus.OK)
                self.send_header("Content-Type", "application/zip")
                self.send_header(
                    "Content-Disposition", 'attachment; filename="pass-education-offline.zip"'
                )
                self.send_header("Content-Length", str(len(zbytes)))
                self.end_headers()
                self.wfile.write(zbytes)
                return

            # Fichiers statiques PWA
            rel = "index.html" if path in ("/", "") else path.lstrip("/")
            safe_path = os.path.normpath(os.path.join(STATIC_DIR, rel))
            if not safe_path.startswith(os.path.abspath(STATIC_DIR)) or not os.path.isfile(safe_path):
                safe_path = os.path.join(STATIC_DIR, "index.html")

            ctype, _ = mimetypes.guess_type(safe_path)
            if not ctype:
                if safe_path.endswith(".webmanifest"):
                    ctype = "application/manifest+json"
                elif safe_path.endswith(".svg"):
                    ctype = "image/svg+xml"
                else:
                    ctype = "application/octet-stream"

            with open(safe_path, "rb") as f:
                data = f.read()

            self.send_response(HTTPStatus.OK)
            self.send_header("Content-Type", ctype)
            self.send_header("Content-Length", str(len(data)))
            self.send_header("Cache-Control", "no-cache")
            self.end_headers()
            self.wfile.write(data)

        def do_POST(self) -> None:
            parsed = urllib.parse.urlsplit(self.path)
            path = parsed.path
            body = self._read_json_body()

            if path == "/api/sync/start":
                try:
                    st = sync_mgr.start(body if body else None)
                    self._send_json(st)
                except Exception as exc:
                    self._send_json({"error": str(exc)}, status=400)
                return

            if path == "/api/sync/stop":
                self._send_json(sync_mgr.stop())
                return

            if path == "/api/sync/save-prefs":
                saved = db.save_sync_preferences(body)
                self._send_json({"ok": True, "prefs": saved})
                return

            if path == "/api/download-one":
                try:
                    res_id = int(body.get("id") or 0)
                    updated = sync_mgr.download_single_resource_pdf(res_id)
                    self._send_json({"ok": True, "resource": updated})
                except Exception as exc:
                    self._send_json({"ok": False, "error": str(exc)}, status=400)
                return

            if path == "/api/scan-personal":
                res = sync_mgr.scan_personal_pdfs()
                self._send_json({"ok": True, **res, "stats": db.get_stats()})
                return

            if path == "/api/open-folder":
                # Ouvre le dossier local sous Windows / macOS / Linux (en usage local uniquement)
                target = PDF_ROOT
                res_id = int(body.get("id") or 0)
                if res_id > 0:
                    det = db.get_resource_detail(res_id)
                    if det and det.get("local_pdf_exists"):
                        target = det["local_pdf_abspath"]
                try:
                    if os.name == "nt":
                        if os.path.isfile(target):
                            subprocess.Popen(["explorer.exe", f"/select,{target}"])
                        else:
                            os.startfile(target)  # type: ignore[attr-defined]
                    elif sys.platform == "darwin":
                        subprocess.Popen(["open", os.path.dirname(target) if os.path.isfile(target) else target])
                    else:
                        subprocess.Popen(["xdg-open", os.path.dirname(target) if os.path.isfile(target) else target])
                    self._send_json({"ok": True, "path": target})
                except Exception:
                    self._send_json({"ok": True, "path": target, "note": "Chemin affiché ci-dessous."})
                return

            self._send_json({"error": "Route inconnue"}, status=404)

    return PEHandler


def _find_available_port(host: str, preferred_port: int) -> int:
    for p in range(preferred_port, preferred_port + 20):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            try:
                s.bind((host, p))
                return p
            except OSError:
                continue
    return preferred_port


def main() -> None:
    parser = argparse.ArgumentParser(description="Pass-Éducation Offline (Maternelle -> Lycée + PDF)")
    parser.add_argument("--host", default="127.0.0.1", help="Adresse d'écoute (défaut: 127.0.0.1)")
    parser.add_argument("--port", type=int, default=8766, help="Port HTTP (défaut: 8766)")
    parser.add_argument("--no-browser", action="store_true", help="Ne pas ouvrir automatiquement le navigateur")
    args = parser.parse_args()

    db = PassEducationDB(DB_PATH, PDF_ROOT)
    ensure_demo_seed(db)
    sync_mgr = PassEducationSyncManager(db)

    port = args.port if args.host == "0.0.0.0" else _find_available_port(args.host, args.port)
    server = ThreadingHTTPServer((args.host, port), make_handler(db, sync_mgr))

    local_url = f"http://127.0.0.1:{port}"
    print("=" * 70)
    print("  PASS-EDUCATION OFFLINE — Bibliotheque & Lecteur PDF Hors-Ligne")
    print("=" * 70)
    print(f"  Interface locale : {local_url}")
    print(f"  Dossier des PDF  : {PDF_ROOT}")
    print(f"  Base de donnees  : {DB_PATH}")
    print("  Gardez cette fenetre ouverte pendant l'utilisation (Ctrl+C pour quitter).")
    print("=" * 70)

    def _open_ui() -> None:
        try:
            if os.name == "nt" and hasattr(os, "startfile"):
                os.startfile(local_url)  # type: ignore[attr-defined]
            else:
                webbrowser.open(local_url)
        except Exception:
            try:
                webbrowser.open(local_url)
            except Exception:
                pass

    if not args.no_browser:
        threading.Timer(0.6, _open_ui).start()

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nArret propre en cours...")
        sync_mgr.stop()
        server.server_close()


if __name__ == "__main__":
    main()
