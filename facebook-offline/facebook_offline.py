#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Facebook Page Offline — Lecteur & Moteur de Recherche Hors-Ligne d'Archive Officielle Facebook.

Port par défaut : 8768 (tourne simultanément avec MalagasyWord 8765, Pass-Éducation 8766 et JW 8767).
100 % autonome (bibliothèque standard Python uniquement, zéro dépendance externe).
Zéro risque de blocage de compte : ne se connecte jamais à Facebook, lit vos exports officiels .zip.
"""

from __future__ import annotations

import argparse
import json
import mimetypes
import re
import socket
import sys
import threading
import time
import urllib.parse
import webbrowser
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any, Dict, List

BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
IMPORTS_DIR = BASE_DIR / "imports"
MEDIAS_DIR = BASE_DIR / "medias"
STATIC_DIR = BASE_DIR / "static"
DB_PATH = DATA_DIR / "facebook_page.db"

from fb_engine.database import FBDatabase  # noqa: E402
from fb_engine.importer import FBArchiveImporter, ensure_demo_seed  # noqa: E402


def detect_lan_urls(port: int) -> List[str]:
    ips = set()
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.settimeout(0.3)
        s.connect(("10.255.255.255", 1))
        ip = s.getsockname()[0]
        s.close()
        if ip and not ip.startswith("127."):
            ips.add(ip)
    except Exception:
        pass
    try:
        hostname = socket.gethostname()
        for info in socket.getaddrinfo(hostname, None, socket.AF_INET):
            ip = info[4][0]
            if ip and not ip.startswith("127."):
                ips.add(ip)
    except Exception:
        pass
    return [f"http://{ip}:{port}" for ip in sorted(ips)]


class AppContext:
    def __init__(self, port: int) -> None:
        self.port = port
        self.db = FBDatabase(DB_PATH, MEDIAS_DIR, IMPORTS_DIR)
        self.importer = FBArchiveImporter(self.db)
        ensure_demo_seed(self.db)


class FBRequestHandler(BaseHTTPRequestHandler):
    ctx: AppContext = None  # type: ignore

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
        length = int(self.headers.get("Content-Length") or 0)
        if length <= 0 or length > 2_000_000:
            return {}
        raw = self.rfile.read(length)
        try:
            data = json.loads(raw.decode("utf-8"))
            return data if isinstance(data, dict) else {}
        except Exception:
            return {}

    def _serve_media_file(self, file_path: Path) -> None:
        if not file_path.is_file():
            self._send_json({"error": "Média introuvable"}, status=404)
            return

        ctype, _ = mimetypes.guess_type(str(file_path))
        if file_path.suffix.lower() == ".svg":
            ctype = "image/svg+xml"
        elif file_path.suffix.lower() in (".mp4", ".m4v"):
            ctype = "video/mp4"
        elif file_path.suffix.lower() == ".webm":
            ctype = "video/webm"
        elif file_path.suffix.lower() == ".mov":
            ctype = "video/quicktime"

        file_size = file_path.stat().st_size
        range_hdr = self.headers.get("Range", "")
        start = 0
        end = file_size - 1
        status = HTTPStatus.OK

        if range_hdr.startswith("bytes=") and file_size > 0:
            m = re.match(r"bytes=(\d*)-(\d*)", range_hdr)
            if m:
                s_str, e_str = m.group(1), m.group(2)
                if s_str:
                    start = int(s_str)
                if e_str:
                    end = min(file_size - 1, int(e_str))
                if 0 <= start <= end < file_size:
                    status = HTTPStatus.PARTIAL_CONTENT

        chunk_len = (end - start + 1) if file_size > 0 else 0
        self.send_response(status)
        self.send_header("Content-Type", ctype or "application/octet-stream")
        self.send_header("Accept-Ranges", "bytes")
        self.send_header("Content-Length", str(chunk_len))
        if status == HTTPStatus.PARTIAL_CONTENT:
            self.send_header("Content-Range", f"bytes {start}-{end}/{file_size}")
        self.end_headers()

        with open(file_path, "rb") as f:
            f.seek(start)
            remaining = chunk_len
            while remaining > 0:
                buf = f.read(min(131072, remaining))
                if not buf:
                    break
                try:
                    self.wfile.write(buf)
                except (BrokenPipeError, ConnectionResetError):
                    break
                remaining -= len(buf)

    def _serve_static(self, rel_path: str) -> None:
        if not rel_path or rel_path == "/":
            rel_path = "index.html"
        rel_path = rel_path.lstrip("/")
        target = (STATIC_DIR / rel_path).resolve()
        if not str(target).startswith(str(STATIC_DIR.resolve())) or not target.is_file():
            target = STATIC_DIR / "index.html"
        ctype, _ = mimetypes.guess_type(str(target))
        if target.suffix == ".webmanifest":
            ctype = "application/manifest+json; charset=utf-8"
        elif target.suffix == ".svg":
            ctype = "image/svg+xml"
        elif target.suffix == ".js":
            ctype = "application/javascript; charset=utf-8"
        elif target.suffix == ".css":
            ctype = "text/css; charset=utf-8"
        elif target.suffix == ".html":
            ctype = "text/html; charset=utf-8"

        data = target.read_bytes()
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-Type", ctype or "application/octet-stream")
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-cache")
        self.end_headers()
        self.wfile.write(data)

    def do_GET(self) -> None:
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        qs = urllib.parse.parse_qs(parsed.query)

        if path == "/api/stats":
            st = self.ctx.db.get_stats()
            st["lan_urls"] = detect_lan_urls(self.ctx.port)
            st["import_status"] = self.ctx.importer.get_status()
            self._send_json(st)
            return

        if path == "/api/posts":
            q = (qs.get("q", [""])[0] or "").strip()
            ptype = (qs.get("type", [""])[0] or "").strip()
            year = int(qs.get("year", ["0"])[0] or 0)
            fav_only = qs.get("favorites_only", ["0"])[0] in ("1", "true")
            limit = max(1, min(120, int(qs.get("limit", ["40"])[0] or 40)))
            offset = max(0, int(qs.get("offset", ["0"])[0] or 0))
            res = self.ctx.db.query_posts(
                query=q,
                post_type=ptype,
                year=year,
                favorites_only=fav_only,
                limit=limit,
                offset=offset,
            )
            self._send_json(res)
            return

        if path == "/api/gallery":
            mtype = (qs.get("type", ["photo"])[0] or "photo").strip()
            year = int(qs.get("year", ["0"])[0] or 0)
            items = self.ctx.db.list_media_gallery(media_type=mtype, year=year, limit=180)
            self._send_json({"items": items})
            return

        m_media = re.match(r"^/api/media/(\d+)$", path)
        if m_media:
            mid = int(m_media.group(1))
            row = self.ctx.db._conn().execute("SELECT rel_path FROM post_media WHERE id = ?", (mid,)).fetchone()
            if not row or not row["rel_path"]:
                self._send_json({"error": "Média introuvable"}, status=404)
                return
            root = self.ctx.db.medias_dir.resolve()
            abs_p = (root / row["rel_path"]).resolve()
            if not str(abs_p).startswith(str(root)) or not abs_p.is_file():
                self._send_json({"error": "Fichier absent du disque"}, status=404)
                return
            self._serve_media_file(abs_p)
            return

        if path == "/api/import/status":
            self._send_json(self.ctx.importer.get_status())
            return

        self._serve_static(path)

    def do_POST(self) -> None:
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        m_fav = re.match(r"^/api/favorite/(\d+)$", path)
        if m_fav:
            val = self.ctx.db.toggle_favorite(int(m_fav.group(1)))
            if val is None:
                self._send_json({"error": "Introuvable"}, status=404)
            else:
                self._send_json({"favorite": val})
            return

        if path == "/api/import/scan":
            started = self.ctx.importer.start_import_from_folder()
            self._send_json({"started": started, "status": self.ctx.importer.get_status()})
            return

        if path == "/api/import/upload":
            length = int(self.headers.get("Content-Length") or 0)
            raw_name = urllib.parse.unquote(self.headers.get("X-Filename") or "archive_facebook.zip")
            safe_name = re.sub(r'[^A-Za-z0-9._-]+', "_", Path(raw_name).name)
            if not safe_name.lower().endswith(".zip"):
                safe_name += ".zip"
            if length <= 0:
                self._send_json({"error": "Fichier vide"}, status=400)
                return

            dest = self.ctx.db.imports_dir / safe_name
            remaining = length
            with open(dest, "wb") as out_f:
                while remaining > 0:
                    chunk = self.rfile.read(min(262144, remaining))
                    if not chunk:
                        break
                    out_f.write(chunk)
                    remaining -= len(chunk)

            started = self.ctx.importer.start_import_from_folder()
            self._send_json({"saved_as": safe_name, "started": started, "status": self.ctx.importer.get_status()})
            return

        if path == "/api/settings/page-name":
            body = self._read_json_body()
            pname = (body.get("page_name") or "").strip()
            if pname:
                self.ctx.db.set_meta("page_name", pname[:120])
            self._send_json({"ok": True, "page_name": self.ctx.db.get_meta("page_name")})
            return

        self._send_json({"error": "Route inconnue"}, status=404)


def main() -> None:
    parser = argparse.ArgumentParser(description="Facebook Page Offline — Lecteur & Recherche Hors-Ligne")
    parser.add_argument("--host", default="0.0.0.0", help="Adresse d'écoute (défaut: 0.0.0.0)")
    parser.add_argument("--port", type=int, default=8768, help="Port HTTP local (défaut: 8768)")
    parser.add_argument("--no-browser", action="store_true", help="Ne pas ouvrir automatiquement le navigateur")
    args = parser.parse_args()

    ctx = AppContext(port=args.port)
    FBRequestHandler.ctx = ctx

    server = ThreadingHTTPServer((args.host, args.port), FBRequestHandler)
    local_url = f"http://127.0.0.1:{args.port}"
    lan_urls = detect_lan_urls(args.port)

    print("=" * 68)
    print("  FACEBOOK PAGE OFFLINE — Publications, Photos, Vidéos & Recherche")
    print("=" * 68)
    print(f"  Sur cet ordinateur : {local_url}")
    if lan_urls:
        print(f"  Sur Téléphone (Android / iPhone en Wi-Fi) : {lan_urls[0]}")
    print(f"  Déposez vos .zip Facebook dans : {IMPORTS_DIR}")
    print(f"  Photos & Vidéos extraites dans : {MEDIAS_DIR}")
    print("  (Fermez cette fenêtre proprement avant de débrancher un disque externe)")
    print("=" * 68)
    sys.stdout.flush()

    if not args.no_browser:
        threading.Thread(
            target=lambda: (time.sleep(0.8), webbrowser.open(local_url)),
            daemon=True,
        ).start()

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nArrêt propre du serveur…")
        server.server_close()


if __name__ == "__main__":
    main()
