#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""MalagasyWord Offline — Application & Aspirateur « Mode Complet » (100 % Python Standard).

Usage rapide sur votre ordinateur (Windows / macOS / Linux) :
    python malagasyword_offline.py

Ou en ligne de commande pure (sans interface graphique) :
    python malagasyword_offline.py --sync --mode complet --speed equilibre
"""

from __future__ import annotations

import argparse
import io
import json
import mimetypes
import os
import signal
import socket
import sys
import threading
import time
import webbrowser
import zipfile
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from typing import Any, Dict, List
from urllib.parse import parse_qs, unquote, urlparse

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
if BASE_DIR not in sys.path:
    sys.path.insert(0, BASE_DIR)

from mw_engine.crawler import MODE_PROFILES, SPEED_PROFILES, OfflineSyncManager  # noqa: E402
from mw_engine.database import DictionaryDB  # noqa: E402
from mw_engine.seed_demo import seed_demo_if_empty  # noqa: E402

STATIC_DIR = os.path.join(BASE_DIR, "static")
DEFAULT_DB_PATH = os.path.join(BASE_DIR, "data", "malagasyword.db")


def _detect_lan_ips() -> List[str]:
    ips: List[str] = []
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.settimeout(0.2)
        s.connect(("10.255.255.255", 1))
        ip = s.getsockname()[0]
        s.close()
        if ip and not ip.startswith("127."):
            ips.append(ip)
    except Exception:
        pass
    return ips


def build_clean_pack_zip_bytes() -> bytes:
    """Construit à la volée une archive propre `malagasyword-offline.zip` prête à décompresser sur PC."""
    buf = io.BytesIO()
    excluded_dirs = {"__pycache__", "data", "runtime", ".git", ".pytest_cache"}
    excluded_exts = {".pyc", ".pyo", ".db", ".db-wal", ".db-shm", ".zip"}

    with zipfile.ZipFile(buf, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as zf:
        for root, dirs, files in os.walk(BASE_DIR):
            dirs[:] = sorted(d for d in dirs if d not in excluded_dirs)
            for fname in sorted(files):
                if any(fname.endswith(ext) for ext in excluded_exts):
                    continue
                abs_path = os.path.join(root, fname)
                rel_path = os.path.relpath(abs_path, BASE_DIR).replace("\\", "/")
                arcname = f"malagasyword-offline/{rel_path}"
                zf.write(abs_path, arcname)
    return buf.getvalue()


class AppContext:
    def __init__(self, db_path: str, port: int) -> None:
        self.db = DictionaryDB(db_path)
        seed_demo_if_empty(self.db)
        self.sync = OfflineSyncManager(self.db)
        self.port = port
        self.lan_ips = _detect_lan_ips()


class OfflineHTTPHandler(BaseHTTPRequestHandler):
    ctx: AppContext  # injecté sur la sous-classe au démarrage

    def log_message(self, fmt: str, *args: Any) -> None:
        # Garde la console propre (n'affiche pas chaque polling de statut)
        pass

    def _send_json(self, payload: Any, status: int = 200) -> None:
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def _read_json_body(self) -> Dict[str, Any]:
        length = int(self.headers.get("Content-Length", "0") or "0")
        if length <= 0:
            return {}
        raw = self.rfile.read(min(length, 1024 * 256))
        try:
            return json.loads(raw.decode("utf-8"))
        except Exception:
            return {}

    def _serve_static(self, rel_path: str) -> None:
        clean_rel = os.path.normpath(rel_path).lstrip("/\\")
        target = os.path.abspath(os.path.join(STATIC_DIR, clean_rel))
        if not target.startswith(os.path.abspath(STATIC_DIR) + os.sep) and target != os.path.abspath(STATIC_DIR):
            self.send_error(403)
            return
        if os.path.isdir(target):
            target = os.path.join(target, "index.html")
        if not os.path.isfile(target):
            # Fallback SPA
            target = os.path.join(STATIC_DIR, "index.html")
        if not os.path.isfile(target):
            self.send_error(404)
            return

        ctype, _ = mimetypes.guess_type(target)
        if target.endswith(".webmanifest"):
            ctype = "application/manifest+json; charset=utf-8"
        elif target.endswith(".js"):
            ctype = "application/javascript; charset=utf-8"
        elif target.endswith(".css"):
            ctype = "text/css; charset=utf-8"
        elif target.endswith(".html"):
            ctype = "text/html; charset=utf-8"
        elif target.endswith(".svg"):
            ctype = "image/svg+xml"

        with open(target, "rb") as f:
            data = f.read()

        self.send_response(200)
        self.send_header("Content-Type", ctype or "application/octet-stream")
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-cache")
        self.end_headers()
        self.wfile.write(data)

    def do_GET(self) -> None:
        parsed = urlparse(self.path)
        path = parsed.path
        qs = parse_qs(parsed.query)

        try:
            if path == "/api/stats":
                data = self.ctx.db.get_stats()
                data["lan_urls"] = [f"http://{ip}:{self.ctx.port}" for ip in self.ctx.lan_ips]
                self._send_json(data)
                return

            if path == "/api/search":
                q = qs.get("q", [""])[0]
                scope = qs.get("scope", ["all"])[0]
                limit = min(max(int(qs.get("limit", ["45"])[0]), 1), 150)
                results = self.ctx.db.search_words(q, scope=scope, limit=limit)
                self._send_json({"query": q, "scope": scope, "results": results})
                return

            if path == "/api/proverbs":
                q = qs.get("q", [""])[0]
                limit = min(max(int(qs.get("limit", ["50"])[0]), 1), 150)
                results = self.ctx.db.search_proverbs(q, limit=limit)
                self._send_json({"query": q, "results": results})
                return

            if path == "/api/word":
                slug = unquote(qs.get("slug", [""])[0]).strip()
                if not slug:
                    self._send_json({"error": "Paramètre slug manquant"}, status=400)
                    return
                detail = self.ctx.db.get_word_detail(slug)
                if detail is None:
                    self._send_json({"found": False, "slug": slug}, status=404)
                    return
                detail["found"] = True
                self._send_json(detail)
                return

            if path == "/api/random":
                self._send_json(self.ctx.db.get_random_discovery())
                return

            if path == "/api/sync/status":
                self._send_json(self.ctx.sync.get_status())
                return

            if path == "/download-pack":
                zip_bytes = build_clean_pack_zip_bytes()
                self.send_response(200)
                self.send_header("Content-Type", "application/zip")
                self.send_header(
                    "Content-Disposition",
                    'attachment; filename="malagasyword-offline.zip"',
                )
                self.send_header("Content-Length", str(len(zip_bytes)))
                self.end_headers()
                self.wfile.write(zip_bytes)
                return

            rel = "index.html" if path in ("", "/") else path.lstrip("/")
            self._serve_static(rel)
        except BrokenPipeError:
            pass
        except Exception as exc:
            self._send_json({"error": str(exc)}, status=500)

    def do_POST(self) -> None:
        parsed = urlparse(self.path)
        path = parsed.path
        body = self._read_json_body()

        try:
            if path == "/api/sync/start":
                mode = str(body.get("mode", "complet"))
                speed = str(body.get("speed", "equilibre"))
                status = self.ctx.sync.start(mode=mode, speed=speed)
                self._send_json(status)
                return

            if path == "/api/sync/stop":
                status = self.ctx.sync.stop()
                self._send_json(status)
                return

            if path == "/api/fetch-now":
                slug = str(body.get("slug", "")).strip()
                if not slug:
                    self._send_json({"error": "Slug vide"}, status=400)
                    return
                try:
                    detail = self.ctx.sync.fetch_word_now(slug)
                except Exception as exc:
                    self._send_json({"ok": False, "error": str(exc)}, status=502)
                    return
                if detail is None:
                    self._send_json({"ok": False, "error": "Mot introuvable sur le serveur distant"}, status=404)
                    return
                self._send_json({"ok": True, "word": detail})
                return

            self._send_json({"error": "Route inconnue"}, status=404)
        except BrokenPipeError:
            pass
        except Exception as exc:
            self._send_json({"error": str(exc)}, status=500)


def _format_eta(sec: Any) -> str:
    if not sec or sec <= 0:
        return "--"
    sec = int(sec)
    h, rem = divmod(sec, 3600)
    m, s = divmod(rem, 60)
    if h > 0:
        return f"{h}h{m:02d}m"
    if m > 0:
        return f"{m}m{s:02d}s"
    return f"{s}s"


def run_cli_sync(db_path: str, mode: str, speed: str) -> int:
    ctx = AppContext(db_path=db_path, port=0)
    print("=" * 72)
    print("  MalagasyWord Offline — Synchronisation en ligne de commande")
    print(f"  Base SQLite : {db_path}")
    print(f"  Mode        : {mode}   |   Vitesse : {speed}")
    print("  Appuyez sur Ctrl+C à tout moment pour mettre en pause proprement.")
    print("=" * 72)

    st = ctx.sync.start(mode=mode, speed=speed)
    if st.get("sandbox_blocked"):
        print(f"\n[!] {st['error_banner']}\n")
        return 2

    def handle_sigint(_sig: int, _frame: Any) -> None:
        print("\n\n[Pause demandée] Arrêt propre des connexions en cours…")
        ctx.sync.stop()

    signal.signal(signal.SIGINT, handle_sigint)

    def show_progress(s: Dict[str, Any]) -> None:
        s1 = s["stages"]["stage1_index"]
        s2 = s["stages"]["stage2_proverbs"]
        s3 = s["stages"]["stage3_words"]
        stats = s["stats"]
        eta = _format_eta(s["eta_seconds"])
        line = (
            f"\r[{s['phase_label'][:34]:<34}] "
            f"Idx:{s1['done']}/{s1['total']} | "
            f"Prov:{s2['done']}/{s2['total']} ({stats['total_proverbs']}) | "
            f"Fiches:{s3['done']}/{s3['total']} | "
            f"{s['rate_pages_per_sec']} p/s | ETA:{eta} | {stats['db_size_mb']} Mo   "
        )
        sys.stdout.write(line)
        sys.stdout.flush()

    ctx.sync.wait_until_finished(progress_callback=show_progress)
    print("\n")
    final_st = ctx.sync.get_status()
    print(f"Statut final : {final_st['phase_label']}")
    print(
        f"Base locale  : {final_st['stats']['total_words']} mots "
        f"({final_st['stats']['full_words']} fiches complètes), "
        f"{final_st['stats']['total_proverbs']} proverbes "
        f"({final_st['stats']['db_size_mb']} Mo)."
    )
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(
        description="MalagasyWord Offline — Dictionnaire & Encyclopédie Malgache Hors-Ligne (Mode Complet)"
    )
    parser.add_argument("--db", default=DEFAULT_DB_PATH, help="Chemin du fichier SQLite malagasyword.db")
    parser.add_argument("--host", default="0.0.0.0", help="Adresse d'écoute du serveur local (défaut: 0.0.0.0)")
    parser.add_argument("--port", type=int, default=8765, help="Port du serveur local (défaut: 8765)")
    parser.add_argument("--no-browser", action="store_true", help="Ne pas ouvrir automatiquement le navigateur")
    parser.add_argument("--sync", action="store_true", help="Lancer directement le téléchargement en console")
    parser.add_argument("--mode", choices=list(MODE_PROFILES.keys()), default="complet", help="complet ou express")
    parser.add_argument("--speed", choices=list(SPEED_PROFILES.keys()), default="equilibre", help="prudent, equilibre ou rapide")
    parser.add_argument("--status", action="store_true", help="Afficher les statistiques de la base locale et quitter")

    args = parser.parse_args()

    if args.status:
        db = DictionaryDB(args.db)
        print(json.dumps(db.get_stats(), indent=2, ensure_ascii=False))
        return 0

    if args.sync:
        return run_cli_sync(args.db, mode=args.mode, speed=args.speed)

    ctx = AppContext(db_path=args.db, port=args.port)

    class BoundHandler(OfflineHTTPHandler):
        pass

    BoundHandler.ctx = ctx

    server = ThreadingHTTPServer((args.host, args.port), BoundHandler)
    local_url = f"http://127.0.0.1:{args.port}"

    print("=" * 72)
    print("  MalagasyWord Offline — Serveur local prêt !")
    print(f"  Ouvrez sur cet ordinateur : {local_url}")
    for ip in ctx.lan_ips:
        print(f"  Accès téléphone (même Wi-Fi, sans data) : http://{ip}:{args.port}")
    print(f"  Base SQLite : {os.path.abspath(args.db)}")
    print("  (Fermez cette fenêtre ou appuyez sur Ctrl+C pour quitter)")
    print("=" * 72)

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
        print("\nArrêt propre en cours…")
        ctx.sync.stop()
        server.server_close()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
