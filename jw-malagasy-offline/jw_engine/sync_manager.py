# -*- coding: utf-8 -*-
"""Gestionnaire de téléchargement public, catalogue officiel & mises à jour incrémentales (MG).

100 % conforme aux Conditions d'utilisation de JW.ORG :
- Aucun scraping de pages HTML `jw.org` ou `wol.jw.org`.
- Utilise uniquement le manifeste public du catalogue (`catalog.db.gz`) et l'API publique
  de médias (`GETPUBMEDIALINKS`) pour télécharger les fichiers publics `JWPUB`, `EPUB` et `PDF`
  pour un usage strictement personnel et non commercial.
- Vérifie la somme de contrôle `MD5` (`checksum`) officielle de chaque fichier téléchargé.
- Lors des mises à jour, compare `checksum` et `LastModified` pour ne télécharger QUE les nouveautés
  ou éditions révisées.
"""

from __future__ import annotations

import datetime
import hashlib
import json
import os
import re
import sqlite3
import ssl
import threading
import time
import urllib.error
import urllib.parse
import urllib.request
import zlib
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

from .categories import (
    CATEGORIES,
    CURATED_STARTER_PUBS,
    classify_publication,
    get_category_folder,
    normalise_issue,
)
from .database import JWDatabase
from .epub_reader import (
    extract_epub_chapters,
    extract_pdf_text_light,
    is_valid_epub,
    is_valid_jwpub,
    is_valid_pdf,
)

MANIFEST_URL = "https://app.jw-cdn.org/catalogs/publications/v4/manifest.json"
CATALOG_URL_TMPL = "https://app.jw-cdn.org/catalogs/publications/v4/{manifest_id}/catalog.db.gz"
PUBMEDIA_API = "https://b.jw-cdn.org/apis/pub-media/GETPUBMEDIALINKS"
USER_AGENT = "JWMalagasyPersonalOffline/1.0 (Personal Non-Commercial Offline Reader)"


def _ssl_ctx() -> ssl.SSLContext:
    ctx = ssl.create_default_context()
    return ctx


def _http_get_json(url: str, timeout: float = 25.0) -> Tuple[int, Any]:
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": USER_AGENT,
            "Accept": "application/json",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=timeout, context=_ssl_ctx()) as resp:
            raw = resp.read().decode("utf-8", errors="replace")
            return resp.status, json.loads(raw)
    except urllib.error.HTTPError as e:
        return e.code, None
    except Exception:
        return 0, None


def _pick_standard_media_entry(entries: List[Dict[str, Any]]) -> Optional[Dict[str, Any]]:
    """Privilégie l'édition standard ('Mahazatra', format == '') plutôt que Gros Caractères ('lp')."""
    if not entries or not isinstance(entries, list):
        return None
    for item in entries:
        if not isinstance(item, dict):
            continue
        fmt = str(item.get("format") or "").strip().lower()
        spec = str(item.get("specialty") or "").strip().lower()
        fobj = item.get("file") or {}
        if fmt == "" and spec == "" and isinstance(fobj, dict) and fobj.get("url"):
            return item
    for item in entries:
        if isinstance(item, dict) and isinstance(item.get("file"), dict) and item["file"].get("url"):
            return item
    return None


def _safe_filename(name: str) -> str:
    s = re.sub(r'[<>:"/\\|?*\x00-\x1f]+', "_", name.strip())
    return s[:140] or "fichier"


class JWSyncManager:
    def __init__(self, db: JWDatabase, data_dir: Path) -> None:
        self.db = db
        self.data_dir = Path(data_dir)
        self.data_dir.mkdir(parents=True, exist_ok=True)
        self._lock = threading.Lock()
        self._stop_event = threading.Event()
        self._thread: Optional[threading.Thread] = None
        self._state: Dict[str, Any] = {
            "running": False,
            "phase": "idle",
            "mode": "",
            "message": "Prêt.",
            "current_item": "",
            "probed": 0,
            "total_candidates": 0,
            "downloaded_files": 0,
            "updated_files": 0,
            "skipped_up_to_date": 0,
            "indexed_chapters": 0,
            "bytes_downloaded": 0,
            "errors": 0,
            "started_at": 0,
            "finished_at": 0,
        }

    def get_status(self) -> Dict[str, Any]:
        with self._lock:
            st = dict(self._state)
        if st["running"] and st["started_at"]:
            st["elapsed_sec"] = max(1, int(time.time() - st["started_at"]))
        return st

    def stop(self) -> None:
        self._stop_event.set()
        with self._lock:
            if self._state["running"]:
                self._state["message"] = "Arrêt demandé… sauvegarde propre en cours."

    def _update(self, **kwargs: Any) -> None:
        with self._lock:
            self._state.update(kwargs)

    # ------------------------------------------------------------------
    # Initialisation rapide des publications essentielles + périodiques récents
    # ------------------------------------------------------------------
    def ensure_starter_catalog_seeded(self) -> int:
        items: List[Dict[str, Any]] = list(CURATED_STARTER_PUBS)
        cur_year = datetime.date.today().year
        # Génère les numéros récents (2024 -> année courante) pour Tour de Garde, Réveillez-vous, Cahier
        for yr in range(max(2024, cur_year - 2), cur_year + 1):
            for m in range(1, 13):
                iss = f"{yr}{m:02d}"
                items.append(
                    {
                        "pub_symbol": "w",
                        "issue": iss,
                        "year": yr,
                        "category": "tilikambo",
                        "title": f"Ny Tilikambo Fiambenana (Fianarana) — {m:02d}/{yr}",
                    }
                )
            for m in (1, 5, 9):
                iss = f"{yr}{m:02d}"
                items.append(
                    {
                        "pub_symbol": "wp",
                        "issue": iss,
                        "year": yr,
                        "category": "tilikambo",
                        "title": f"Ny Tilikambo Fiambenana (Ho An’ny Besinimaro) — No. { (m // 4) + 1 } {yr}",
                    }
                )
                items.append(
                    {
                        "pub_symbol": "g",
                        "issue": iss,
                        "year": yr,
                        "category": "mifohaza",
                        "title": f"Mifohaza! — No. { (m // 4) + 1 } {yr}",
                    }
                )
            for m in (1, 3, 5, 7, 9, 11):
                iss = f"{yr}{m:02d}"
                items.append(
                    {
                        "pub_symbol": "mwb",
                        "issue": iss,
                        "year": yr,
                        "category": "taridalana",
                        "title": f"Tari-dalana Ho An’ny Fiainantsika sy ny Fanompoana — {m:02d}/{yr}",
                    }
                )
        return self.db.bulk_upsert_publications(items)

    # ------------------------------------------------------------------
    # Synchronisation du catalogue officiel complet Malgache (`catalog.db.gz`)
    # ------------------------------------------------------------------
    def sync_full_catalog_from_cdn(self, force: bool = False) -> Tuple[bool, int, str]:
        self._update(phase="manifest", message="Vérification du manifeste officiel du catalogue JW…")
        status, mdata = _http_get_json(MANIFEST_URL, timeout=20.0)
        if status != 200 or not isinstance(mdata, dict) or not mdata.get("current"):
            return False, 0, "Impossible de joindre le serveur de manifeste JW (vérifiez votre connexion Internet)."

        manifest_id = str(mdata["current"]).strip()
        prev_manifest = self.db.get_meta("catalog_manifest_id", "")
        if not force and prev_manifest == manifest_id:
            self._update(message="Catalogue officiel Malgache déjà à la dernière version.")
            return True, 0, "Catalogue déjà à jour."

        cat_url = CATALOG_URL_TMPL.format(manifest_id=manifest_id)
        tmp_db_path = self.data_dir / "_tmp_jw_catalog.sqlite"
        if tmp_db_path.exists():
            try:
                tmp_db_path.unlink()
            except OSError:
                pass

        self._update(
            phase="catalog_download",
            message="Téléchargement et filtrage du catalogue officiel Malgache (MG)…",
        )
        req = urllib.request.Request(cat_url, headers={"User-Agent": USER_AGENT})
        decomp = zlib.decompressobj(16 + zlib.MAX_WBITS)
        downloaded_gz = 0
        try:
            with urllib.request.urlopen(req, timeout=45.0, context=_ssl_ctx()) as resp:
                total_len = int(resp.headers.get("Content-Length") or 0)
                with open(tmp_db_path, "wb") as out_f:
                    while not self._stop_event.is_set():
                        chunk = resp.read(262144)
                        if not chunk:
                            break
                        downloaded_gz += len(chunk)
                        out_f.write(decomp.decompress(chunk))
                        mb = downloaded_gz / (1024 * 1024)
                        if total_len > 0:
                            pct = int(downloaded_gz * 100 / total_len)
                            self._update(
                                message=f"Téléchargement du catalogue mondial officiel : {mb:.1f} / {total_len/(1024*1024):.1f} Mo ({pct}%)…"
                            )
                        else:
                            self._update(message=f"Téléchargement du catalogue officiel : {mb:.1f} Mo…")
                    out_f.write(decomp.flush())
        except Exception as exc:
            try:
                tmp_db_path.unlink(missing_ok=True)
            except Exception:
                pass
            return False, 0, f"Échec du téléchargement du catalogue : {exc}"

        if self._stop_event.is_set():
            tmp_db_path.unlink(missing_ok=True)
            return False, 0, "Opération annulée."

        # Extraction uniquement des publications en langue Malgache (MG)
        imported = 0
        try:
            imported = self._import_mg_from_catalog_sqlite(tmp_db_path)
            self.db.set_meta("catalog_manifest_id", manifest_id)
            self.db.set_meta(
                "last_catalog_sync",
                datetime.datetime.now().strftime("%Y-%m-%d %H:%M"),
            )
        finally:
            try:
                tmp_db_path.unlink(missing_ok=True)
            except OSError:
                pass

        return True, imported, f"{imported} publications malgaches chargées dans le catalogue."

    def _import_mg_from_catalog_sqlite(self, sqlite_path: Path) -> int:
        self._update(phase="catalog_parse", message="Extraction des publications en langue Malgache (MG)…")
        conn = sqlite3.connect(str(sqlite_path))
        conn.row_factory = sqlite3.Row
        try:
            tables = {
                r[0].lower(): r[0]
                for r in conn.execute("SELECT name FROM sqlite_master WHERE type='table'").fetchall()
            }
            pub_table = tables.get("publication")
            if not pub_table:
                return 0

            pub_cols = {
                r[1].lower(): r[1]
                for r in conn.execute(f"PRAGMA table_info({pub_table})").fetchall()
            }
            c_id = pub_cols.get("id", "Id")
            c_lang = pub_cols.get("mepslanguageid", "MepsLanguageId")
            c_type = pub_cols.get("publicationtypeid", "PublicationTypeId")
            c_issue = pub_cols.get("issuetagnumber", "IssueTagNumber")
            c_title = pub_cols.get("title", "Title")
            c_short = pub_cols.get("shorttitle", "ShortTitle")
            c_year = pub_cols.get("year", "Year")
            c_sym = pub_cols.get("symbol", "Symbol")
            c_keysym = pub_cols.get("keysymbol", "KeySymbol")

            # Détection infaillible du MepsLanguageId pour le Malgache (MG)
            mg_lang_id: Optional[int] = None
            for ltab_key in ("mepslanguage", "language"):
                if ltab_key in tables:
                    ltab = tables[ltab_key]
                    lcols = {r[1].lower(): r[1] for r in conn.execute(f"PRAGMA table_info({ltab})").fetchall()}
                    if "symbol" in lcols and "id" in lcols:
                        row = conn.execute(
                            f"SELECT {lcols['id']} FROM {ltab} WHERE UPPER({lcols['symbol']}) = 'MG' LIMIT 1"
                        ).fetchone()
                        if row:
                            mg_lang_id = int(row[0])
                            break

            if mg_lang_id is None:
                row = conn.execute(
                    f"""
                    SELECT {c_lang}, COUNT(*) AS cnt
                      FROM {pub_table}
                     WHERE ({c_title} LIKE '%Tilikambo Fiambenana%')
                        OR ({c_title} LIKE '%Ankafizo Mandrakizay ny Fiainana%')
                        OR ({c_title} LIKE '%Soratra Masina%Tontolo Vaovao%')
                     GROUP BY {c_lang}
                     ORDER BY cnt DESC
                     LIMIT 1
                    """
                ).fetchone()
                mg_lang_id = int(row[0]) if row else 26

            asset_map: Dict[int, Tuple[str, str]] = {}
            asset_table = tables.get("publicationasset")
            if asset_table:
                acols = {r[1].lower(): r[1] for r in conn.execute(f"PRAGMA table_info({asset_table})").fetchall()}
                a_pubid = acols.get("publicationid")
                a_lastmod = acols.get("lastmodified") or acols.get("lastupdated")
                a_sig = acols.get("signature")
                a_lang = acols.get("mepslanguageid")
                if a_pubid and a_lastmod:
                    where_a = f"WHERE {a_lang} = ?" if a_lang else ""
                    args_a = (mg_lang_id,) if a_lang else ()
                    sig_expr = a_sig if a_sig else "''"
                    for ar in conn.execute(
                        f"SELECT {a_pubid}, {a_lastmod}, {sig_expr} FROM {asset_table} {where_a}",
                        args_a,
                    ).fetchall():
                        asset_map[int(ar[0])] = (str(ar[1] or ""), str(ar[2] or ""))

            rows = conn.execute(
                f"""
                SELECT {c_id} AS pid,
                       COALESCE(NULLIF(TRIM({c_keysym}), ''), TRIM({c_sym})) AS sym,
                       {c_issue} AS iss,
                       {c_year} AS yr,
                       {c_type} AS ptype,
                       {c_title} AS title,
                       {c_short} AS stitle
                  FROM {pub_table}
                 WHERE {c_lang} = ?
                """,
                (mg_lang_id,),
            ).fetchall()

            batch: List[Dict[str, Any]] = []
            for r in rows:
                sym = str(r["sym"] or "").strip()
                if not sym:
                    continue
                iss = normalise_issue(r["iss"])
                yr = int(r["yr"] or 0)
                ptype = int(r["ptype"] or 0)
                title = str(r["title"] or sym).strip()
                stitle = str(r["stitle"] or "").strip()
                cat = classify_publication(sym, ptype, title, iss)
                mod_str, sig_str = asset_map.get(int(r["pid"]), ("", ""))
                batch.append(
                    {
                        "pub_symbol": sym,
                        "issue": iss,
                        "year": yr,
                        "category": cat,
                        "title": title,
                        "short_title": stitle,
                        "catalog_modified": mod_str,
                        "catalog_signature": sig_str,
                    }
                )
            return self.db.bulk_upsert_publications(batch)
        finally:
            conn.close()

    # ------------------------------------------------------------------
    # Téléchargement & Mise à jour d'une publication individuelle
    # ------------------------------------------------------------------
    def _download_file_verified(
        self,
        url: str,
        dest_path: Path,
        expected_md5: str = "",
    ) -> Tuple[bool, int, str]:
        dest_path.parent.mkdir(parents=True, exist_ok=True)
        part_path = dest_path.with_suffix(dest_path.suffix + ".part")
        hasher = hashlib.md5()
        size = 0
        req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
        try:
            with urllib.request.urlopen(req, timeout=45.0, context=_ssl_ctx()) as resp:
                with open(part_path, "wb") as f:
                    while not self._stop_event.is_set():
                        chunk = resp.read(131072)
                        if not chunk:
                            break
                        f.write(chunk)
                        hasher.update(chunk)
                        size += len(chunk)
            if self._stop_event.is_set():
                part_path.unlink(missing_ok=True)
                return False, 0, "stopped"

            actual_md5 = hasher.hexdigest().lower()
            if expected_md5 and actual_md5 != expected_md5.strip().lower():
                part_path.unlink(missing_ok=True)
                return False, 0, f"Checksum MD5 invalide ({actual_md5} != {expected_md5})"

            os.replace(str(part_path), str(dest_path))
            return True, size, actual_md5
        except Exception as exc:
            try:
                part_path.unlink(missing_ok=True)
            except Exception:
                pass
            return False, 0, str(exc)

    def sync_single_publication(
        self,
        pub_row: Dict[str, Any],
        formats: List[str],
        delay_sec: float = 0.25,
    ) -> Dict[str, int]:
        """Interroge GETPUBMEDIALINKS pour 1 publication MG, télécharge les formats nouveaux/modifiés et indexe l'EPUB/PDF."""
        stats = {"downloaded": 0, "updated": 0, "skipped": 0, "chapters": 0, "bytes": 0, "errors": 0}
        pub_id = int(pub_row["id"])
        symbol = str(pub_row["pub_symbol"]).strip()
        issue = str(pub_row.get("issue") or "").strip()
        wanted_formats = [f.upper() for f in formats if f.upper() in ("JWPUB", "EPUB", "PDF")]
        if not wanted_formats:
            return stats

        files_dir = self.db.get_files_dir()

        # Optimisation : si la publication a déjà été vérifiée récemment, que tous les formats demandés
        # sont déjà présents sur le disque dur externe et qu'aucun check de mise à jour n'est requis :
        params = {"output": "json", "pub": symbol, "langwritten": "MG"}
        if issue:
            params["issue"] = issue
        api_url = f"{PUBMEDIA_API}?{urllib.parse.urlencode(params)}"

        status, data = _http_get_json(api_url, timeout=25.0)
        if status in (400, 404):
            self.db.mark_probe_status(pub_id, -1)
            return stats
        if status == 429 or status >= 500 or not isinstance(data, dict):
            stats["errors"] += 1
            return stats

        # Met à jour le titre exact malgache et la date formatée depuis l'API officielle
        api_title = str(data.get("pubName") or "").strip()
        fmt_date = str(data.get("formattedDate") or "").strip()
        pub_img = ""
        if isinstance(data.get("pubImage"), dict):
            pub_img = str(data["pubImage"].get("url") or "").strip()

        cat = pub_row.get("category") or classify_publication(symbol, 0, api_title or pub_row["title"], issue)
        full_title = pub_row["title"]
        if api_title:
            full_title = f"{api_title} ({fmt_date})" if (fmt_date and fmt_date not in api_title) else api_title
            self.db.upsert_publication(
                {
                    "pub_key": pub_row["pub_key"],
                    "pub_symbol": symbol,
                    "issue": issue,
                    "year": pub_row.get("year") or 0,
                    "category": cat,
                    "title": full_title,
                    "formatted_date": fmt_date,
                    "cover_url": pub_img,
                }
            )

        mg_files = (data.get("files") or {}).get("MG") or {}
        if not isinstance(mg_files, dict):
            self.db.mark_probe_status(pub_id, -1)
            return stats

        self.db.mark_probe_status(pub_id, 1)
        cat_folder = get_category_folder(cat)
        demo_cleared = False
        epub_indexed = False

        for fmt in wanted_formats:
            if self._stop_event.is_set():
                break
            entries = mg_files.get(fmt)
            chosen = _pick_standard_media_entry(entries) if isinstance(entries, list) else None
            if not chosen:
                continue

            fobj = chosen.get("file") or {}
            f_url = str(fobj.get("url") or "").strip()
            remote_md5 = str(fobj.get("checksum") or "").strip().lower()
            remote_mod = str(fobj.get("modifiedDatetime") or "").strip()
            if not f_url:
                continue

            url_basename = _safe_filename(urllib.parse.unquote(f_url.rsplit("/", 1)[-1]))
            if not url_basename.lower().endswith(f".{fmt.lower()}"):
                suffix_issue = f"_{issue}" if issue else ""
                url_basename = f"{_safe_filename(symbol)}_MG{suffix_issue}.{fmt.lower()}"

            rel_path = f"{fmt}/{cat_folder}/{url_basename}"
            abs_path = files_dir / rel_path

            existing_rec = self.db.get_pub_file_record(pub_id, fmt)
            already_valid = False
            was_existing_file = False
            if existing_rec and existing_rec.get("rel_path"):
                old_abs = files_dir / existing_rec["rel_path"]
                if old_abs.is_file():
                    was_existing_file = True
                    if remote_md5 and (existing_rec.get("checksum") or "").lower() == remote_md5:
                        already_valid = True
                        rel_path = existing_rec["rel_path"]
                        abs_path = old_abs

            if already_valid:
                stats["skipped"] += 1
                # Si c'est un EPUB déjà présent mais pas encore indexé en chapitres :
                if fmt == "EPUB":
                    ch_cnt = self.db._conn().execute(
                        "SELECT COUNT(*) FROM chapters WHERE pub_id = ?", (pub_id,)
                    ).fetchone()[0]
                    if ch_cnt == 0:
                        chapters = extract_epub_chapters(abs_path)
                        if chapters:
                            stats["chapters"] += self.db.replace_publication_chapters(pub_id, full_title, "EPUB", chapters)
                            epub_indexed = True
                continue

            ok, dl_bytes, md5_or_err = self._download_file_verified(f_url, abs_path, expected_md5=remote_md5)
            if not ok:
                stats["errors"] += 1
                continue

            if not demo_cleared:
                self.db.clear_demo_publications()
                demo_cleared = True

            self.db.upsert_pub_file(
                pub_id=pub_id,
                file_format=fmt,
                rel_path=rel_path,
                file_url=f_url,
                checksum=md5_or_err,
                remote_modified=remote_mod,
                file_size=dl_bytes,
                downloaded=True,
            )
            stats["bytes"] += dl_bytes
            if was_existing_file:
                stats["updated"] += 1
            else:
                stats["downloaded"] += 1

            # Indexation automatique plein-texte des chapitres EPUB ou PDF !
            if fmt == "EPUB":
                chapters = extract_epub_chapters(abs_path)
                if chapters:
                    stats["chapters"] += self.db.replace_publication_chapters(pub_id, full_title, "EPUB", chapters)
                    epub_indexed = True
            elif fmt == "PDF" and not epub_indexed:
                existing_ch = self.db._conn().execute(
                    "SELECT COUNT(*) FROM chapters WHERE pub_id = ? AND source_format = 'EPUB'", (pub_id,)
                ).fetchone()[0]
                if existing_ch == 0:
                    try:
                        pdf_bytes = abs_path.read_bytes()
                        txt, pages = extract_pdf_text_light(pdf_bytes)
                        if len(txt) >= 30:
                            ch_list = [
                                {
                                    "chapter_index": 1,
                                    "chapter_title": f"{full_title} ({pages} p. PDF)",
                                    "html_content": f"<p>{txt}</p>",
                                    "text_content": txt,
                                }
                            ]
                            stats["chapters"] += self.db.replace_publication_chapters(pub_id, full_title, "PDF", ch_list)
                    except Exception:
                        pass

            if delay_sec > 0:
                time.sleep(delay_sec)

        return stats

    # ------------------------------------------------------------------
    # Tâche de fond : Téléchargement par sélection / Mise à jour en ligne
    # ------------------------------------------------------------------
    def start_batch_sync(
        self,
        categories: List[str],
        formats: List[str],
        year_min: int = 2020,
        sync_full_catalog: bool = False,
        max_publications: int = 250,
        mode: str = "download",
    ) -> bool:
        with self._lock:
            if self._state["running"]:
                return False
            self._stop_event.clear()
            self._state.update(
                {
                    "running": True,
                    "phase": "starting",
                    "mode": mode,
                    "message": "Préparation de la synchronisation Malgache (MG)…",
                    "current_item": "",
                    "probed": 0,
                    "total_candidates": 0,
                    "downloaded_files": 0,
                    "updated_files": 0,
                    "skipped_up_to_date": 0,
                    "indexed_chapters": 0,
                    "bytes_downloaded": 0,
                    "errors": 0,
                    "started_at": int(time.time()),
                    "finished_at": 0,
                }
            )

        cats = categories or [c["code"] for c in CATEGORIES]
        fmts = formats or ["JWPUB", "EPUB", "PDF"]

        self._thread = threading.Thread(
            target=self._run_worker,
            args=(cats, fmts, int(year_min), bool(sync_full_catalog), int(max_publications), mode),
            daemon=True,
        )
        self._thread.start()
        return True

    def start_single_pub_download(self, pub_id: int, formats: List[str]) -> bool:
        with self._lock:
            if self._state["running"]:
                return False
            pub = self.db.get_publication_detail(pub_id)
            if not pub:
                return False
            self._stop_event.clear()
            self._state.update(
                {
                    "running": True,
                    "phase": "downloading",
                    "mode": "single",
                    "message": f"Téléchargement de « {pub['title']} »…",
                    "current_item": pub["title"],
                    "probed": 0,
                    "total_candidates": 1,
                    "downloaded_files": 0,
                    "updated_files": 0,
                    "skipped_up_to_date": 0,
                    "indexed_chapters": 0,
                    "bytes_downloaded": 0,
                    "errors": 0,
                    "started_at": int(time.time()),
                    "finished_at": 0,
                }
            )

        def _single_worker() -> None:
            try:
                res = self.sync_single_publication(pub, formats or ["JWPUB", "EPUB", "PDF"], delay_sec=0.05)
                self._update(
                    running=False,
                    phase="done",
                    probed=1,
                    downloaded_files=res["downloaded"],
                    updated_files=res["updated"],
                    skipped_up_to_date=res["skipped"],
                    indexed_chapters=res["chapters"],
                    bytes_downloaded=res["bytes"],
                    errors=res["errors"],
                    finished_at=int(time.time()),
                    message=f"Terminé : {res['downloaded']} fichier(s) téléchargé(s), {res['chapters']} chapitre(s) indexé(s).",
                )
            except Exception as exc:
                self._update(running=False, phase="error", message=f"Erreur : {exc}", finished_at=int(time.time()))

        self._thread = threading.Thread(target=_single_worker, daemon=True)
        self._thread.start()
        return True

    def _run_worker(
        self,
        categories: List[str],
        formats: List[str],
        year_min: int,
        sync_full_catalog: bool,
        max_publications: int,
        mode: str,
    ) -> None:
        try:
            self.ensure_starter_catalog_seeded()

            if sync_full_catalog or mode == "update":
                ok, count, msg = self.sync_full_catalog_from_cdn(force=(mode == "update"))
                if not ok and self._stop_event.is_set():
                    self._update(running=False, phase="stopped", message="Synchronisation interrompue.", finished_at=int(time.time()))
                    return

            candidates = self.db.select_candidates_for_sync(
                categories=categories,
                year_min=year_min,
                only_unprobed_or_outdated=True,
                max_items=max_publications,
            )
            total_cand = len(candidates)
            self._update(
                phase="downloading",
                total_candidates=total_cand,
                message=f"Vérification et téléchargement sur {total_cand} publication(s) malgache(s)…",
            )

            dl_files = 0
            up_files = 0
            sk_files = 0
            ch_count = 0
            tot_bytes = 0
            errs = 0

            for idx, pub_row in enumerate(candidates, start=1):
                if self._stop_event.is_set():
                    break
                title = pub_row.get("title") or pub_row.get("pub_symbol")
                self._update(
                    probed=idx,
                    current_item=title,
                    message=(
                        f"[{idx}/{total_cand}] {title[:55]} — "
                        f"{dl_files} nouveaux, {up_files} mis à jour, {sk_files} déjà à jour"
                    ),
                )
                res = self.sync_single_publication(pub_row, formats=formats, delay_sec=0.22)
                dl_files += res["downloaded"]
                up_files += res["updated"]
                sk_files += res["skipped"]
                ch_count += res["chapters"]
                tot_bytes += res["bytes"]
                errs += res["errors"]

                self._update(
                    downloaded_files=dl_files,
                    updated_files=up_files,
                    skipped_up_to_date=sk_files,
                    indexed_chapters=ch_count,
                    bytes_downloaded=tot_bytes,
                    errors=errs,
                )
                time.sleep(0.15)

            now_str = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
            self.db.set_meta("last_update_check", now_str)

            mb = tot_bytes / (1024 * 1024)
            stopped = self._stop_event.is_set()
            summary = (
                f"{'Arrêté proprement' if stopped else 'Terminé'} : "
                f"{dl_files} nouveau(x) fichier(s) ({mb:.1f} Mo), "
                f"{up_files} mis à jour, {sk_files} déjà à jour, "
                f"{ch_count} chapitre(s) indexés pour la recherche hors-ligne."
            )
            self._update(
                running=False,
                phase="stopped" if stopped else "done",
                message=summary,
                finished_at=int(time.time()),
            )
        except Exception as exc:
            self._update(
                running=False,
                phase="error",
                message=f"Erreur inattendue : {exc}",
                finished_at=int(time.time()),
            )

    # ------------------------------------------------------------------
    # Scan hors-ligne du dossier `fichiers/` (disque dur externe)
    # ------------------------------------------------------------------
    def scan_local_files_folder(self) -> Dict[str, int]:
        """Détecte et indexe les fichiers .epub, .pdf et .jwpub copiés manuellement dans `fichiers/`."""
        files_dir = self.db.get_files_dir()
        found_files = 0
        indexed_chapters = 0

        for ext_fmt in ("EPUB", "PDF", "JWPUB"):
            ext_low = f".{ext_fmt.lower()}"
            for p in files_dir.rglob(f"*{ext_low}"):
                if not p.is_file() or p.name.endswith(".part") or "_DEMO" in p.name:
                    continue
                rel = p.relative_to(files_dir).as_posix()
                stem = p.stem
                # Extrait symbole et numéro éventuel (ex: w_MG_202605 -> sym=w, issue=202605)
                m = re.match(r"^([A-Za-z0-9-]+?)(?:_f-[a-z]+)?_MG(?:_([0-9]{6,8}))?$", stem, re.IGNORECASE)
                if m:
                    sym = m.group(1).lower()
                    iss = normalise_issue(m.group(2) or "")
                else:
                    sym = re.sub(r"[^a-z0-9-]+", "", stem.lower())[:20] or "local"
                    iss = ""

                yr = int(iss[:4]) if len(iss) >= 4 and iss[:4].isdigit() else 0
                cat = classify_publication(sym, 0, stem, iss)
                pub_id = self.db.upsert_publication(
                    {
                        "pub_symbol": sym,
                        "issue": iss,
                        "year": yr,
                        "category": cat,
                        "title": stem.replace("_", " "),
                    }
                )
                data = p.read_bytes()
                if ext_fmt == "PDF" and not is_valid_pdf(data):
                    continue
                if ext_fmt == "EPUB" and not is_valid_epub(data):
                    continue
                if ext_fmt == "JWPUB" and not is_valid_jwpub(data):
                    continue

                md5_hex = hashlib.md5(data).hexdigest().lower()
                self.db.upsert_pub_file(
                    pub_id=pub_id,
                    file_format=ext_fmt,
                    rel_path=rel,
                    checksum=md5_hex,
                    file_size=len(data),
                    downloaded=True,
                )
                found_files += 1
                if ext_fmt == "EPUB":
                    chapters = extract_epub_chapters(data)
                    if chapters:
                        indexed_chapters += self.db.replace_publication_chapters(
                            pub_id, stem.replace("_", " "), "EPUB", chapters
                        )
        if found_files > 0:
            self.db.clear_demo_publications()
        return {"found_files": found_files, "indexed_chapters": indexed_chapters}
