#!/usr/bin/env python3
"""Serveur local 100 % hors-ligne — Foibe momba ny Teny an'ny Akademia Malagasy (Port 8769)."""

from __future__ import annotations

import argparse
import json
import mimetypes
import os
import re
import socket
import sys
import threading
import urllib.parse
import webbrowser
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any

APP_ROOT = Path(__file__).resolve().parent
if str(APP_ROOT) not in sys.path:
    sys.path.insert(0, str(APP_ROOT))

from ak_engine.crawler import SyncManager  # noqa: E402
from ak_engine.database import AkademiaDB  # noqa: E402
from ak_engine.seed_data import ensure_seed_data  # noqa: E402

DEFAULT_PORT = 8769
STATIC_DIR = APP_ROOT / "static"
DATA_DIR = APP_ROOT / "data"
FILES_DIR = APP_ROOT / "fichiers"
PDF_DIR = FILES_DIR / "pdf"


def get_lan_urls(port: int) -> list[str]:
    """Detecte les adresses IP Wi-Fi locales pour connecter Android / iPhone hors-ligne."""
    ips: set[str] = set()
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
            s.settimeout(0.2)
            s.connect(("10.255.255.255", 1))
            ip = s.getsockname()[0]
            if ip and not ip.startswith("127."):
                ips.add(ip)
    except Exception:
        pass
    try:
        for info in socket.getaddrinfo(socket.gethostname(), None, socket.AF_INET):
            ip = info[4][0]
            if ip and not ip.startswith("127."):
                ips.add(ip)
    except Exception:
        pass
    return [f"http://{ip}:{port}" for ip in sorted(ips)]


class AkademiaRequestHandler(BaseHTTPRequestHandler):
    """Gestionnaire HTTP/1.1 avec API JSON et streaming Range 206 pour les PDF."""

    protocol_version = "HTTP/1.1"
    db: AkademiaDB
    sync_mgr: SyncManager
    server_port: int = DEFAULT_PORT

    def log_message(self, fmt: str, *args: Any) -> None:
        # Garder la console propre (ignorer le polling /api/sync/status)
        if args and isinstance(args[0], str) and "/api/sync/status" in args[0]:
            return
        sys.stderr.write(f"[Akademia {self.log_date_time_string()}] {fmt % args}\n")

    def _send_json(self, payload: Any, status: int = 200) -> None:
        raw = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(raw)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(raw)

    def _read_json_body(self) -> dict[str, Any]:
        length = int(self.headers.get("Content-Length") or 0)
        if length <= 0:
            return {}
        raw = self.rfile.read(min(length, 1_048_576))
        try:
            return json.loads(raw.decode("utf-8"))
        except Exception:
            return {}

    def _serve_file(self, file_path: Path, *, content_type: str | None = None, inline_name: str = "") -> None:
        if not file_path.is_file():
            self._send_json({"error": "Fichier introuvable"}, status=404)
            return

        total_size = file_path.stat().st_size
        ctype = content_type or mimetypes.guess_type(str(file_path))[0] or "application/octet-stream"
        if ctype.startswith("text/") or ctype in {"application/javascript", "application/json"}:
            if "charset=" not in ctype:
                ctype += "; charset=utf-8"

        range_header = self.headers.get("Range")
        if range_header and ctype.startswith("application/pdf"):
            m = re.match(r"bytes=(\d*)-(\d*)", range_header.strip())
            if m:
                start_s, end_s = m.group(1), m.group(2)
                start = int(start_s) if start_s else 0
                end = int(end_s) if end_s else total_size - 1
                start = max(0, min(start, total_size - 1))
                end = max(start, min(end, total_size - 1))
                chunk_len = end - start + 1
                self.send_response(HTTPStatus.PARTIAL_CONTENT)
                self.send_header("Content-Type", ctype)
                self.send_header("Accept-Ranges", "bytes")
                self.send_header("Content-Range", f"bytes {start}-{end}/{total_size}")
                self.send_header("Content-Length", str(chunk_len))
                if inline_name:
                    self.send_header("Content-Disposition", f'inline; filename="{inline_name}"')
                self.end_headers()
                with file_path.open("rb") as fh:
                    fh.seek(start)
                    remaining = chunk_len
                    while remaining > 0:
                        buf = fh.read(min(65536, remaining))
                        if not buf:
                            break
                        self.wfile.write(buf)
                        remaining -= len(buf)
                return

        self.send_response(HTTPStatus.OK)
        self.send_header("Content-Type", ctype)
        self.send_header("Accept-Ranges", "bytes")
        self.send_header("Content-Length", str(total_size))
        if inline_name:
            self.send_header("Content-Disposition", f'inline; filename="{inline_name}"')
        self.send_header("Cache-Control", "no-cache")
        self.end_headers()
        with file_path.open("rb") as fh:
            while True:
                buf = fh.read(65536)
                if not buf:
                    break
                self.wfile.write(buf)

    def do_GET(self) -> None:  # noqa: N802
        parsed = urllib.parse.urlsplit(self.path)
        path = parsed.path
        qs = urllib.parse.parse_qs(parsed.query)

        if path == "/api/stats":
            stats = self.db.get_stats()
            stats["lan_urls"] = get_lan_urls(self.server_port)
            stats["port"] = self.server_port
            self._send_json(stats)
            return

        if path == "/api/vocab":
            q = (qs.get("q", [""])[0] or "").strip()
            domain = (qs.get("domain", [""])[0] or "").strip()
            direction = (qs.get("direction", [""])[0] or "").strip()
            letter = (qs.get("letter", [""])[0] or "").strip()
            fav = (qs.get("favorites", ["0"])[0] or "0") == "1"
            limit = max(1, min(300, int(qs.get("limit", ["100"])[0] or 100)))
            offset = max(0, int(qs.get("offset", ["0"])[0] or 0))
            res = self.db.search_vocab(
                q=q,
                domain=domain,
                direction=direction,
                letter=letter,
                favorites_only=fav,
                limit=limit,
                offset=offset,
            )
            self._send_json(res)
            return

        if path == "/api/documents":
            q = (qs.get("q", [""])[0] or "").strip()
            category = (qs.get("category", [""])[0] or "").strip()
            fav = (qs.get("favorites", ["0"])[0] or "0") == "1"
            docs = self.db.list_documents(q=q, category=category, favorites_only=fav)
            self._send_json({"items": docs, "total": len(docs)})
            return

        if path.startswith("/api/document/"):
            slug_or_id = urllib.parse.unquote(path[len("/api/document/"):]).strip("/")
            doc = self.db.get_document(slug_or_id)
            if not doc:
                self._send_json({"error": "Document introuvable"}, status=404)
                return
            self._send_json(doc)
            return

        if path == "/api/pdfs":
            self._send_json({"items": self.db.list_pdfs()})
            return

        if path.startswith("/api/pdf/"):
            raw_id = path[len("/api/pdf/"):].strip("/")
            if not raw_id.isdigit():
                self._send_json({"error": "ID PDF invalide"}, status=400)
                return
            pdf_rec = self.db.get_pdf(int(raw_id))
            if not pdf_rec or not pdf_rec.get("downloaded") or not pdf_rec.get("local_relpath"):
                self._send_json(
                    {
                        "error": "Ce fichier PDF n'est pas encore téléchargé hors-ligne. Cliquez sur « Synchroniser le site »."
                    },
                    status=404,
                )
                return
            full_pdf = (FILES_DIR / pdf_rec["local_relpath"]).resolve()
            if not str(full_pdf).startswith(str(FILES_DIR.resolve())) or not full_pdf.is_file():
                self._send_json({"error": "Fichier PDF absent du disque"}, status=404)
                return
            self._serve_file(full_pdf, content_type="application/pdf", inline_name=full_pdf.name)
            return

        if path == "/api/sync/status":
            self._send_json(self.sync_mgr.get_status())
            return

        # Fichiers statiques
        rel = "index.html" if path in {"", "/"} else path.lstrip("/")
        candidate = (STATIC_DIR / rel).resolve()
        if str(candidate).startswith(str(STATIC_DIR.resolve())) and candidate.is_file():
            self._serve_file(candidate)
            return

        # Repli SPA vers index.html
        self._serve_file(STATIC_DIR / "index.html")

    def do_POST(self) -> None:  # noqa: N802
        parsed = urllib.parse.urlsplit(self.path)
        path = parsed.path

        if path == "/api/favorite":
            body = self._read_json_body()
            kind = str(body.get("kind") or "vocab")
            item_id = int(body.get("id") or 0)
            if kind not in {"vocab", "doc"} or item_id <= 0:
                self._send_json({"error": "Paramètres invalides"}, status=400)
                return
            is_fav = self.db.toggle_favorite(kind, item_id)
            self._send_json({"ok": True, "is_favorite": is_fav})
            return

        if path == "/api/sync/start":
            body = self._read_json_body()
            started = self.sync_mgr.start_sync(
                include_vocab=bool(body.get("include_vocab", True)),
                include_treatises=bool(body.get("include_treatises", True)),
                include_pdfs=bool(body.get("include_pdfs", True)),
            )
            self._send_json({"ok": True, "started": started, "status": self.sync_mgr.get_status()})
            return

        if path == "/api/sync/stop":
            self.sync_mgr.stop_sync()
            self._send_json({"ok": True, "status": self.sync_mgr.get_status()})
            return

        self._send_json({"error": "Route inconnue"}, status=404)


def main() -> int:
    mimetypes.add_type("application/manifest+json", ".webmanifest")
    mimetypes.add_type("image/svg+xml", ".svg")

    parser = argparse.ArgumentParser(
        description="Akademia Malagasy Offline — Foibe momba ny Teny (Port 8769)"
    )
    parser.add_argument("--host", default="0.0.0.0", help="Adresse d'écoute (défaut: 0.0.0.0)")
    parser.add_argument("--port", type=int, default=int(os.environ.get("PORT", DEFAULT_PORT)))
    parser.add_argument("--no-browser", action="store_true", help="Ne pas ouvrir le navigateur automatiquement")
    args = parser.parse_args()

    DATA_DIR.mkdir(parents=True, exist_ok=True)
    PDF_DIR.mkdir(parents=True, exist_ok=True)

    db = AkademiaDB(DATA_DIR / "akademia_malagasy.db")
    ensure_seed_data(db)
    sync_mgr = SyncManager(db, PDF_DIR)

    AkademiaRequestHandler.db = db
    AkademiaRequestHandler.sync_mgr = sync_mgr
    AkademiaRequestHandler.server_port = args.port

    httpd = ThreadingHTTPServer((args.host, args.port), AkademiaRequestHandler)
    local_url = f"http://localhost:{args.port}"
    lan_urls = get_lan_urls(args.port)

    print("=" * 70)
    print("  AKADEMIA MALAGASY OFFLINE — Foibe momba ny Teny (100 % Hors-Ligne)")
    print("=" * 70)
    print(f"  Sur cet ordinateur (PC)  : {local_url}")
    for u in lan_urls:
        print(f"  Sur Android / iPhone LAN : {u}")
    print(f"  Base SQLite FTS5         : {DATA_DIR / 'akademia_malagasy.db'}")
    print("  Fermez cette fenêtre proprement avant de débrancher un disque USB.")
    print("=" * 70)
    sys.stdout.flush()

    if not args.no_browser:
        threading.Timer(0.8, lambda: webbrowser.open(local_url)).start()

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nArrêt propre du serveur Akademia Malagasy Offline...")
        httpd.server_close()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
