#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""JW Malagasy Offline — Gestionnaire JWPUB/EPUB/PDF, Mises à jour & Recherche Hors-Ligne (MG).

Application locale 100 % autonome (zéro dépendance externe, bibliothèque standard Python uniquement) :
- Conforme aux Conditions d'utilisation de JW.ORG (aucun scraping web HTML ; téléchargement officiel
  des fichiers électroniques publics JWPUB, EPUB et PDF pour usage personnel non commercial).
- Pensée pour Disque Dur Externe (chemins relatifs portables) + Téléphones Android & iPhone + PC.
- Recherche plein-texte hors-ligne chapitre par chapitre (livres, Bible, périodiques) + Lecteur intégré.
"""

from __future__ import annotations

import argparse
import json
import mimetypes
import os
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
DEFAULT_FILES_DIR = BASE_DIR / "fichiers"
STATIC_DIR = BASE_DIR / "static"
DB_PATH = DATA_DIR / "jw_malagasy.db"

from jw_engine.categories import CATEGORIES  # noqa: E402
from jw_engine.database import JWDatabase  # noqa: E402
from jw_engine.seed_demo import ensure_initial_state  # noqa: E402
from jw_engine.sync_manager import JWSyncManager  # noqa: E402


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
        self.db = JWDatabase(DB_PATH, DEFAULT_FILES_DIR)
        self.sync_mgr = JWSyncManager(self.db, DATA_DIR)
        ensure_initial_state(self.db, self.sync_mgr)


class JWRequestHandler(BaseHTTPRequestHandler):
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

    def _serve_binary_file(
        self,
        file_path: Path,
        content_type: str,
        download_name: str = "",
        force_download: bool = False,
    ) -> None:
        if not file_path.is_file():
            self._send_json({"error": "Fichier introuvable sur le disque"}, status=404)
            return

        file_size = file_path.stat().st_size
        disp_type = "attachment" if force_download else "inline"
        safe_ascii = re.sub(r'[^A-Za-z0-9._-]+', "_", download_name or file_path.name)
        utf8_name = urllib.parse.quote(download_name or file_path.name)

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
        self.send_header("Content-Type", content_type)
        self.send_header("Accept-Ranges", "bytes")
        self.send_header("Content-Length", str(chunk_len))
        if status == HTTPStatus.PARTIAL_CONTENT:
            self.send_header("Content-Range", f"bytes {start}-{end}/{file_size}")
        self.send_header(
            "Content-Disposition",
            f"{disp_type}; filename=\"{safe_ascii}\"; filename*=UTF-8''{utf8_name}",
        )
        self.end_headers()

        with open(file_path, "rb") as f:
            f.seek(start)
            remaining = chunk_len
            while remaining > 0:
                buf = f.read(min(65536, remaining))
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
            stats = self.ctx.db.get_stats()
            stats["categories"] = [
                {"code": c["code"], "label": c["label"], "short": c["short"], "folder": c["folder"]}
                for c in CATEGORIES
            ]
            stats["lan_urls"] = detect_lan_urls(self.ctx.port)
            stats["sync"] = self.ctx.sync_mgr.get_status()
            self._send_json(stats)
            return

        if path == "/api/publications":
            q = (qs.get("q", [""])[0] or "").strip()
            cat = (qs.get("category", [""])[0] or "").strip()
            fmt = (qs.get("format", [""])[0] or "").strip()
            dl_only = qs.get("downloaded_only", ["0"])[0] in ("1", "true")
            fav_only = qs.get("favorites_only", ["0"])[0] in ("1", "true")
            year_min = int(qs.get("year_min", ["0"])[0] or 0)
            limit = max(1, min(200, int(qs.get("limit", ["60"])[0] or 60)))
            offset = max(0, int(qs.get("offset", ["0"])[0] or 0))
            res = self.ctx.db.list_publications(
                query=q,
                category=cat,
                file_format=fmt,
                downloaded_only=dl_only,
                favorites_only=fav_only,
                year_min=year_min,
                limit=limit,
                offset=offset,
            )
            self._send_json(res)
            return

        if path == "/api/search":
            q = (qs.get("q", [""])[0] or "").strip()
            cat = (qs.get("category", [""])[0] or "").strip()
            year_min = int(qs.get("year_min", ["0"])[0] or 0)
            limit = max(1, min(120, int(qs.get("limit", ["60"])[0] or 60)))
            res = self.ctx.db.search_chapters(query=q, category=cat, year_min=year_min, limit=limit)
            self._send_json(res)
            return

        m_pub = re.match(r"^/api/publication/(\d+)$", path)
        if m_pub:
            detail = self.ctx.db.get_publication_detail(int(m_pub.group(1)))
            if not detail:
                self._send_json({"error": "Publication introuvable"}, status=404)
            else:
                self._send_json(detail)
            return

        m_chap = re.match(r"^/api/chapter/(\d+)$", path)
        if m_chap:
            ch = self.ctx.db.get_chapter_content(int(m_chap.group(1)))
            if not ch:
                self._send_json({"error": "Chapitre introuvable"}, status=404)
            else:
                self._send_json(ch)
            return

        m_file = re.match(r"^/api/file/(\d+)/(PDF|EPUB|JWPUB)$", path, re.IGNORECASE)
        if m_file:
            pub_id = int(m_file.group(1))
            fmt = m_file.group(2).upper()
            rec = self.ctx.db.get_pub_file_record(pub_id, fmt)
            if not rec or not rec.get("rel_path"):
                self._send_json({"error": f"Format {fmt} non téléchargé pour cette publication"}, status=404)
                return
            files_dir = self.ctx.db.get_files_dir().resolve()
            abs_p = (files_dir / rec["rel_path"]).resolve()
            if not str(abs_p).startswith(str(files_dir)) or not abs_p.is_file():
                self._send_json({"error": "Fichier absent du disque"}, status=404)
                return

            force_dl = fmt in ("JWPUB", "EPUB") or qs.get("dl", ["0"])[0] == "1"
            mime_map = {
                "PDF": "application/pdf",
                "EPUB": "application/epub+zip",
                "JWPUB": "application/octet-stream",
            }
            self._serve_binary_file(
                abs_p,
                content_type=mime_map.get(fmt, "application/octet-stream"),
                download_name=abs_p.name,
                force_download=force_dl,
            )
            return

        if path == "/api/sync/status":
            self._send_json(self.ctx.sync_mgr.get_status())
            return

        self._serve_static(path)

    def do_POST(self) -> None:
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        m_fav = re.match(r"^/api/favorite/(\d+)$", path)
        if m_fav:
            new_val = self.ctx.db.toggle_favorite(int(m_fav.group(1)))
            if new_val is None:
                self._send_json({"error": "Introuvable"}, status=404)
            else:
                self._send_json({"favorite": new_val})
            return

        if path == "/api/sync/start":
            body = self._read_json_body()
            cats = body.get("categories") or []
            fmts = body.get("formats") or ["JWPUB", "EPUB", "PDF"]
            year_min = int(body.get("year_min") if body.get("year_min") is not None else 2020)
            sync_full = bool(body.get("sync_full_catalog", False))
            max_pubs = max(1, min(3000, int(body.get("max_publications") or 200)))
            mode = str(body.get("mode") or "download")
            started = self.ctx.sync_mgr.start_batch_sync(
                categories=cats,
                formats=fmts,
                year_min=year_min,
                sync_full_catalog=sync_full,
                max_publications=max_pubs,
                mode=mode,
            )
            self._send_json({"started": started, "status": self.ctx.sync_mgr.get_status()})
            return

        if path == "/api/sync/single":
            body = self._read_json_body()
            pub_id = int(body.get("pub_id") or 0)
            fmts = body.get("formats") or ["JWPUB", "EPUB", "PDF"]
            started = self.ctx.sync_mgr.start_single_pub_download(pub_id=pub_id, formats=fmts)
            self._send_json({"started": started, "status": self.ctx.sync_mgr.get_status()})
            return

        if path == "/api/sync/stop":
            self.ctx.sync_mgr.stop()
            self._send_json({"stopped": True, "status": self.ctx.sync_mgr.get_status()})
            return

        if path == "/api/sync/scan-local":
            res = self.ctx.sync_mgr.scan_local_files_folder()
            self._send_json(res)
            return

        if path == "/api/settings/files-dir":
            body = self._read_json_body()
            raw_dir = str(body.get("files_dir") or "")
            ok, msg = self.ctx.db.set_custom_files_dir(raw_dir)
            self._send_json({"ok": ok, "files_dir": msg}, status=200 if ok else 400)
            return

        self._send_json({"error": "Route inconnue"}, status=404)


def main() -> None:
    parser = argparse.ArgumentParser(description="JW Malagasy Offline — JWPUB/EPUB/PDF & Recherche Hors-Ligne")
    parser.add_argument("--host", default="0.0.0.0", help="Adresse d'écoute (défaut: 0.0.0.0 pour accès PC + Wi-Fi téléphone)")
    parser.add_argument("--port", type=int, default=8767, help="Port HTTP local (défaut: 8767)")
    parser.add_argument("--no-browser", action="store_true", help="Ne pas ouvrir automatiquement le navigateur")
    args = parser.parse_args()

    ctx = AppContext(port=args.port)
    JWRequestHandler.ctx = ctx

    server = ThreadingHTTPServer((args.host, args.port), JWRequestHandler)
    local_url = f"http://127.0.0.1:{args.port}"
    lan_urls = detect_lan_urls(args.port)

    print("=" * 68)
    print("  JW MALAGASY OFFLINE — JWPUB / EPUB / PDF & Recherche Hors-Ligne")
    print("=" * 68)
    print(f"  Sur cet ordinateur : {local_url}")
    if lan_urls:
        print(f"  Sur Téléphone (Android / iPhone en Wi-Fi) : {lan_urls[0]}")
    print(f"  Dossier fichiers   : {ctx.db.get_files_dir()}")
    print(f"  Base hors-ligne    : {DB_PATH}")
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
