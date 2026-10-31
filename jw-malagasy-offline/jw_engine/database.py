# -*- coding: utf-8 -*-
"""Base SQLite + Recherche plein-texte FTS5 par chapitres pour JW Malagasy Offline.

Conçue spécifiquement pour :
- Fonctionner sur disque dur externe (chemins 100 % relatifs : même si Windows change la lettre
  du disque de D: à E:, tous les fichiers PDF/EPUB/JWPUB restent liés sans aucune erreur).
- Recherche plein-texte ultra-rapide chapitre par chapitre (livres, Bible, Tour de Garde, etc.)
  avec extraits surlignés `<mark>...</mark>`.
- Suivi des sommes MD5 (`checksum`) et dates `remote_modified` pour les mises à jour incrémentales.
"""

from __future__ import annotations

import os
import re
import shutil
import sqlite3
import threading
import time
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

from .categories import CATEGORIES, CATEGORY_BY_CODE, normalize_search_text


class JWDatabase:
    def __init__(self, db_path: Path, default_files_dir: Path) -> None:
        self.db_path = Path(db_path)
        self.db_path.parent.mkdir(parents=True, exist_ok=True)
        self.default_files_dir = Path(default_files_dir)
        self.default_files_dir.mkdir(parents=True, exist_ok=True)
        self._local = threading.local()
        self._write_lock = threading.Lock()
        self._fts_enabled = False
        self._init_schema()

    def _conn(self) -> sqlite3.Connection:
        conn = getattr(self._local, "conn", None)
        if conn is None:
            conn = sqlite3.connect(str(self.db_path), timeout=30.0, check_same_thread=False)
            conn.row_factory = sqlite3.Row
            conn.execute("PRAGMA journal_mode=WAL;")
            conn.execute("PRAGMA synchronous=NORMAL;")
            conn.execute("PRAGMA foreign_keys=ON;")
            conn.execute("PRAGMA temp_store=MEMORY;")
            self._local.conn = conn
        return conn

    def get_files_dir(self) -> Path:
        custom = self.get_meta("custom_files_dir", "").strip()
        if custom:
            p = Path(custom)
            try:
                p.mkdir(parents=True, exist_ok=True)
                return p
            except Exception:
                pass
        self.default_files_dir.mkdir(parents=True, exist_ok=True)
        return self.default_files_dir

    def set_custom_files_dir(self, path_str: str) -> Tuple[bool, str]:
        cleaned = (path_str or "").strip()
        if not cleaned:
            self.set_meta("custom_files_dir", "")
            return True, str(self.default_files_dir)
        p = Path(cleaned)
        try:
            p.mkdir(parents=True, exist_ok=True)
            test_file = p / ".jw_write_test"
            test_file.write_text("ok", encoding="utf-8")
            test_file.unlink(missing_ok=True)
        except Exception as exc:
            return False, f"Dossier inaccessible en écriture : {exc}"
        self.set_meta("custom_files_dir", str(p))
        return True, str(p)

    def _init_schema(self) -> None:
        conn = self._conn()
        with self._write_lock:
            conn.executescript(
                """
                CREATE TABLE IF NOT EXISTS meta (
                    key TEXT PRIMARY KEY,
                    value TEXT NOT NULL
                );

                CREATE TABLE IF NOT EXISTS publications (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    pub_key TEXT NOT NULL UNIQUE,
                    pub_symbol TEXT NOT NULL,
                    issue TEXT NOT NULL DEFAULT '',
                    year INTEGER NOT NULL DEFAULT 0,
                    category TEXT NOT NULL DEFAULT 'boky',
                    title TEXT NOT NULL,
                    short_title TEXT NOT NULL DEFAULT '',
                    formatted_date TEXT NOT NULL DEFAULT '',
                    cover_url TEXT NOT NULL DEFAULT '',
                    catalog_modified TEXT NOT NULL DEFAULT '',
                    catalog_signature TEXT NOT NULL DEFAULT '',
                    probe_status INTEGER NOT NULL DEFAULT 0,
                    probed_at INTEGER NOT NULL DEFAULT 0,
                    favorite INTEGER NOT NULL DEFAULT 0,
                    is_demo INTEGER NOT NULL DEFAULT 0,
                    norm_title TEXT NOT NULL DEFAULT '',
                    updated_at INTEGER NOT NULL DEFAULT 0
                );

                CREATE INDEX IF NOT EXISTS idx_pub_cat ON publications(category);
                CREATE INDEX IF NOT EXISTS idx_pub_year ON publications(year DESC, issue DESC);
                CREATE INDEX IF NOT EXISTS idx_pub_symbol ON publications(pub_symbol);
                CREATE INDEX IF NOT EXISTS idx_pub_fav ON publications(favorite);

                CREATE TABLE IF NOT EXISTS pub_files (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    pub_id INTEGER NOT NULL REFERENCES publications(id) ON DELETE CASCADE,
                    file_format TEXT NOT NULL,
                    rel_path TEXT NOT NULL DEFAULT '',
                    file_url TEXT NOT NULL DEFAULT '',
                    checksum TEXT NOT NULL DEFAULT '',
                    remote_modified TEXT NOT NULL DEFAULT '',
                    file_size INTEGER NOT NULL DEFAULT 0,
                    downloaded_at INTEGER NOT NULL DEFAULT 0,
                    UNIQUE(pub_id, file_format)
                );

                CREATE INDEX IF NOT EXISTS idx_files_pub ON pub_files(pub_id);
                CREATE INDEX IF NOT EXISTS idx_files_fmt ON pub_files(file_format);

                CREATE TABLE IF NOT EXISTS chapters (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    pub_id INTEGER NOT NULL REFERENCES publications(id) ON DELETE CASCADE,
                    pub_title TEXT NOT NULL DEFAULT '',
                    source_format TEXT NOT NULL DEFAULT 'EPUB',
                    chapter_index INTEGER NOT NULL DEFAULT 1,
                    chapter_title TEXT NOT NULL,
                    html_content TEXT NOT NULL DEFAULT '',
                    text_content TEXT NOT NULL DEFAULT '',
                    norm_text TEXT NOT NULL DEFAULT '',
                    UNIQUE(pub_id, chapter_index)
                );

                CREATE INDEX IF NOT EXISTS idx_chap_pub ON chapters(pub_id, chapter_index);
                """
            )
            try:
                conn.executescript(
                    """
                    CREATE VIRTUAL TABLE IF NOT EXISTS chapters_fts USING fts5(
                        pub_title,
                        chapter_title,
                        text_content,
                        content='chapters',
                        content_rowid='id',
                        tokenize='unicode61 remove_diacritics 2'
                    );
                    """
                )
                self._fts_enabled = True
            except sqlite3.OperationalError:
                self._fts_enabled = False
            conn.commit()

    def get_meta(self, key: str, default: str = "") -> str:
        row = self._conn().execute("SELECT value FROM meta WHERE key = ?", (key,)).fetchone()
        return str(row["value"]) if row else default

    def set_meta(self, key: str, value: str) -> None:
        with self._write_lock:
            self._conn().execute(
                "INSERT INTO meta(key, value) VALUES(?, ?) "
                "ON CONFLICT(key) DO UPDATE SET value = excluded.value",
                (key, str(value)),
            )
            self._conn().commit()

    @staticmethod
    def make_pub_key(symbol: str, issue: str = "") -> str:
        s = (symbol or "").strip().lower()
        i = (issue or "").strip()
        return f"{s}_{i}" if i else s

    def upsert_publication(self, pub: Dict[str, Any], commit: bool = True) -> int:
        symbol = (pub.get("pub_symbol") or "").strip()
        issue = (pub.get("issue") or "").strip()
        pub_key = pub.get("pub_key") or self.make_pub_key(symbol, issue)
        year = int(pub.get("year") or 0)
        if not year and len(issue) >= 4 and issue[:4].isdigit():
            year = int(issue[:4])
        category = (pub.get("category") or "boky").strip()
        title = (pub.get("title") or symbol).strip()
        short_title = (pub.get("short_title") or "").strip()
        formatted_date = (pub.get("formatted_date") or "").strip()
        cover_url = (pub.get("cover_url") or "").strip()
        catalog_modified = (pub.get("catalog_modified") or "").strip()
        catalog_signature = (pub.get("catalog_signature") or "").strip()
        is_demo = 1 if pub.get("is_demo") else 0
        norm_title = normalize_search_text(f"{title} {short_title} {symbol} {formatted_date} {issue}")
        now = int(time.time())

        conn = self._conn()
        lock = self._write_lock if commit else _DummyLock()
        with lock:
            existing = conn.execute(
                "SELECT id, title, catalog_modified, catalog_signature, probe_status FROM publications WHERE pub_key = ?",
                (pub_key,),
            ).fetchone()

            if existing:
                pub_id = int(existing["id"])
                # Si la signature ou la date du catalogue officiel a changé, on remet probe_status=0
                # pour vérifier s'il existe une mise à jour de fichier !
                old_sig = existing["catalog_signature"] or ""
                old_mod = existing["catalog_modified"] or ""
                probe_status = int(existing["probe_status"] or 0)
                if (catalog_signature and old_sig and catalog_signature != old_sig) or (
                    catalog_modified and old_mod and catalog_modified > old_mod
                ):
                    probe_status = 0

                keep_title = title if (len(title) >= len(existing["title"] or "") or existing["title"] == symbol) else existing["title"]
                conn.execute(
                    """
                    UPDATE publications
                       SET year = CASE WHEN ? > 0 THEN ? ELSE year END,
                           category = ?,
                           title = ?,
                           short_title = CASE WHEN ? != '' THEN ? ELSE short_title END,
                           formatted_date = CASE WHEN ? != '' THEN ? ELSE formatted_date END,
                           cover_url = CASE WHEN ? != '' THEN ? ELSE cover_url END,
                           catalog_modified = CASE WHEN ? != '' THEN ? ELSE catalog_modified END,
                           catalog_signature = CASE WHEN ? != '' THEN ? ELSE catalog_signature END,
                           probe_status = ?,
                           is_demo = CASE WHEN is_demo = 1 AND ? = 0 THEN 0 ELSE is_demo END,
                           norm_title = ?,
                           updated_at = ?
                     WHERE id = ?
                    """,
                    (
                        year, year, category, keep_title,
                        short_title, short_title,
                        formatted_date, formatted_date,
                        cover_url, cover_url,
                        catalog_modified, catalog_modified,
                        catalog_signature, catalog_signature,
                        probe_status, is_demo, norm_title, now, pub_id,
                    ),
                )
            else:
                cur = conn.execute(
                    """
                    INSERT INTO publications(
                        pub_key, pub_symbol, issue, year, category, title, short_title,
                        formatted_date, cover_url, catalog_modified, catalog_signature,
                        probe_status, is_demo, norm_title, updated_at
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, ?, ?, ?)
                    """,
                    (
                        pub_key, symbol, issue, year, category, title, short_title,
                        formatted_date, cover_url, catalog_modified, catalog_signature,
                        is_demo, norm_title, now,
                    ),
                )
                pub_id = int(cur.lastrowid)

            if commit:
                conn.commit()
            return pub_id

    def bulk_upsert_publications(self, items: List[Dict[str, Any]]) -> int:
        conn = self._conn()
        count = 0
        with self._write_lock:
            for item in items:
                self.upsert_publication(item, commit=False)
                count += 1
            conn.commit()
        return count

    def mark_probe_status(self, pub_id: int, status: int) -> None:
        with self._write_lock:
            self._conn().execute(
                "UPDATE publications SET probe_status = ?, probed_at = ? WHERE id = ?",
                (int(status), int(time.time()), int(pub_id)),
            )
            self._conn().commit()

    def upsert_pub_file(
        self,
        pub_id: int,
        file_format: str,
        rel_path: str,
        file_url: str = "",
        checksum: str = "",
        remote_modified: str = "",
        file_size: int = 0,
        downloaded: bool = False,
    ) -> None:
        fmt = file_format.upper().strip()
        dl_ts = int(time.time()) if downloaded else 0
        conn = self._conn()
        with self._write_lock:
            existing = conn.execute(
                "SELECT id, rel_path, downloaded_at, file_size FROM pub_files WHERE pub_id = ? AND file_format = ?",
                (pub_id, fmt),
            ).fetchone()
            if existing:
                new_rel = rel_path if rel_path else existing["rel_path"]
                new_dl = dl_ts if downloaded else int(existing["downloaded_at"] or 0)
                new_sz = file_size if file_size > 0 else int(existing["file_size"] or 0)
                conn.execute(
                    """
                    UPDATE pub_files
                       SET rel_path = ?,
                           file_url = CASE WHEN ? != '' THEN ? ELSE file_url END,
                           checksum = CASE WHEN ? != '' THEN ? ELSE checksum END,
                           remote_modified = CASE WHEN ? != '' THEN ? ELSE remote_modified END,
                           file_size = ?,
                           downloaded_at = ?
                     WHERE id = ?
                    """,
                    (new_rel, file_url, file_url, checksum, checksum, remote_modified, remote_modified, new_sz, new_dl, existing["id"]),
                )
            else:
                conn.execute(
                    """
                    INSERT INTO pub_files(pub_id, file_format, rel_path, file_url, checksum, remote_modified, file_size, downloaded_at)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                    """,
                    (pub_id, fmt, rel_path, file_url, checksum, remote_modified, file_size, dl_ts),
                )
            conn.commit()

    def get_pub_file_record(self, pub_id: int, file_format: str) -> Optional[Dict[str, Any]]:
        row = self._conn().execute(
            "SELECT * FROM pub_files WHERE pub_id = ? AND file_format = ?",
            (pub_id, file_format.upper()),
        ).fetchone()
        return dict(row) if row else None

    def replace_publication_chapters(self, pub_id: int, pub_title: str, source_format: str, chapters: List[Dict[str, Any]]) -> int:
        if not chapters:
            return 0
        conn = self._conn()
        with self._write_lock:
            old_rows = conn.execute("SELECT id, pub_title, chapter_title, text_content FROM chapters WHERE pub_id = ?", (pub_id,)).fetchall()
            if self._fts_enabled and old_rows:
                for r in old_rows:
                    conn.execute(
                        "INSERT INTO chapters_fts(chapters_fts, rowid, pub_title, chapter_title, text_content) "
                        "VALUES('delete', ?, ?, ?, ?)",
                        (r["id"], r["pub_title"], r["chapter_title"], r["text_content"]),
                    )
            conn.execute("DELETE FROM chapters WHERE pub_id = ?", (pub_id,))

            inserted = 0
            for ch in chapters:
                c_idx = int(ch.get("chapter_index") or (inserted + 1))
                c_title = (ch.get("chapter_title") or f"Toko {c_idx}").strip()
                c_html = ch.get("html_content") or ""
                c_text = ch.get("text_content") or ""
                norm = normalize_search_text(f"{pub_title} {c_title} {c_text[:20000]}")
                cur = conn.execute(
                    """
                    INSERT INTO chapters(pub_id, pub_title, source_format, chapter_index, chapter_title, html_content, text_content, norm_text)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                    """,
                    (pub_id, pub_title, source_format, c_idx, c_title, c_html, c_text, norm),
                )
                cid = int(cur.lastrowid)
                if self._fts_enabled:
                    conn.execute(
                        "INSERT INTO chapters_fts(rowid, pub_title, chapter_title, text_content) VALUES (?, ?, ?, ?)",
                        (cid, pub_title, c_title, c_text),
                    )
                inserted += 1
            conn.commit()
            return inserted

    def rebuild_fts_all(self) -> None:
        if not self._fts_enabled:
            return
        conn = self._conn()
        with self._write_lock:
            conn.execute("DELETE FROM chapters_fts;")
            conn.execute(
                """
                INSERT INTO chapters_fts(rowid, pub_title, chapter_title, text_content)
                SELECT c.id, p.title, c.chapter_title, c.text_content
                  FROM chapters c
                  JOIN publications p ON p.id = c.pub_id
                """
            )
            conn.commit()

    def clear_demo_publications(self) -> int:
        conn = self._conn()
        files_dir = self.get_files_dir()
        with self._write_lock:
            rows = conn.execute("SELECT id FROM publications WHERE is_demo = 1").fetchall()
            if not rows:
                return 0
            for r in rows:
                pid = int(r["id"])
                f_rows = conn.execute("SELECT rel_path FROM pub_files WHERE pub_id = ?", (pid,)).fetchall()
                for fr in f_rows:
                    if fr["rel_path"]:
                        p = files_dir / fr["rel_path"]
                        if p.exists() and "_DEMO" in p.name:
                            try:
                                p.unlink()
                            except OSError:
                                pass
                old_ch = conn.execute(
                    "SELECT id, pub_title, chapter_title, text_content FROM chapters WHERE pub_id = ?",
                    (pid,),
                ).fetchall()
                if self._fts_enabled:
                    for ch in old_ch:
                        conn.execute(
                            "INSERT INTO chapters_fts(chapters_fts, rowid, pub_title, chapter_title, text_content) "
                            "VALUES('delete', ?, ?, ?, ?)",
                            (ch["id"], ch["pub_title"], ch["chapter_title"], ch["text_content"]),
                        )
                conn.execute("DELETE FROM publications WHERE id = ?", (pid,))
            conn.commit()
            return len(rows)

    @staticmethod
    def _build_fts_query(q: str) -> str:
        cleaned = re.sub(r'["\'()*^:;,.!?/\\<>[\]{}|~`]+', " ", q)
        tokens = [t.strip() for t in cleaned.split() if len(t.strip()) >= 1]
        if not tokens:
            return ""
        parts = []
        for tok in tokens[:8]:
            safe = re.sub(r"[^0-9A-Za-zÀ-ÿ_-]", "", tok)
            if safe:
                if safe.isdigit():
                    parts.append(f'"{safe}"')
                else:
                    parts.append(f'"{safe}"*')
        return " AND ".join(parts)

    def search_chapters(
        self,
        query: str = "",
        category: str = "",
        year_min: int = 0,
        limit: int = 60,
    ) -> Dict[str, Any]:
        """Recherche plein-texte chapitre par chapitre (façon `wol` hors-ligne)."""
        conn = self._conn()
        q = (query or "").strip()
        if not q:
            return {"total": 0, "items": []}

        where_parts = ["1=1"]
        params: List[Any] = []
        if category:
            where_parts.append("p.category = ?")
            params.append(category)
        if year_min > 0:
            where_parts.append("(p.year = 0 OR p.year >= ?)")
            params.append(year_min)
        where_sql = " AND ".join(where_parts)

        fts_q = self._build_fts_query(q)
        rows = []
        if self._fts_enabled and fts_q:
            try:
                sql = f"""
                    SELECT c.id AS chapter_id, c.pub_id, c.chapter_index, c.chapter_title, c.source_format,
                           p.title AS pub_title, p.pub_symbol, p.issue, p.year, p.category, p.formatted_date, p.is_demo,
                           snippet(chapters_fts, 2, '<mark>', '</mark>', ' … ', 28) AS snippet_html,
                           bm25(chapters_fts, 5.0, 8.0, 1.2) AS score
                      FROM chapters_fts
                      JOIN chapters c ON c.id = chapters_fts.rowid
                      JOIN publications p ON p.id = c.pub_id
                     WHERE chapters_fts MATCH ? AND {where_sql}
                     ORDER BY score ASC, p.year DESC, c.chapter_index ASC
                     LIMIT ?
                """
                rows = conn.execute(sql, [fts_q] + params + [limit]).fetchall()
            except sqlite3.OperationalError:
                rows = []

        if not rows:
            norm_q = normalize_search_text(q)
            tokens = [t for t in norm_q.split() if t]
            like_parts = ["c.norm_text LIKE ?" for _ in tokens[:6]]
            like_vals = [f"%{t}%" for t in tokens[:6]]
            if like_parts:
                sql = f"""
                    SELECT c.id AS chapter_id, c.pub_id, c.chapter_index, c.chapter_title, c.source_format,
                           p.title AS pub_title, p.pub_symbol, p.issue, p.year, p.category, p.formatted_date, p.is_demo,
                           substr(c.text_content, 1, 240) AS snippet_html
                      FROM chapters c
                      JOIN publications p ON p.id = c.pub_id
                     WHERE {' AND '.join(like_parts)} AND {where_sql}
                     ORDER BY p.year DESC, c.chapter_index ASC
                     LIMIT ?
                """
                rows = conn.execute(sql, like_vals + params + [limit]).fetchall()

        items = []
        for r in rows:
            d = dict(r)
            cat_info = CATEGORY_BY_CODE.get(d["category"], {})
            d["category_label"] = cat_info.get("short", d["category"])
            items.append(d)
        return {"total": len(items), "items": items}

    def list_publications(
        self,
        query: str = "",
        category: str = "",
        file_format: str = "",
        downloaded_only: bool = False,
        favorites_only: bool = False,
        year_min: int = 0,
        limit: int = 80,
        offset: int = 0,
    ) -> Dict[str, Any]:
        conn = self._conn()
        files_dir = self.get_files_dir()
        where_parts = ["1=1"]
        params: List[Any] = []

        if category:
            where_parts.append("p.category = ?")
            params.append(category)
        if favorites_only:
            where_parts.append("p.favorite = 1")
        if year_min > 0:
            where_parts.append("(p.year = 0 OR p.year >= ?)")
            params.append(year_min)
        if downloaded_only:
            where_parts.append("EXISTS (SELECT 1 FROM pub_files pf WHERE pf.pub_id = p.id AND pf.downloaded_at > 0)")
        if file_format:
            where_parts.append(
                "EXISTS (SELECT 1 FROM pub_files pf WHERE pf.pub_id = p.id AND pf.file_format = ? AND pf.downloaded_at > 0)"
            )
            params.append(file_format.upper())
        if query.strip():
            norm_q = normalize_search_text(query)
            for tok in norm_q.split()[:6]:
                where_parts.append("p.norm_title LIKE ?")
                params.append(f"%{tok}%")

        where_sql = " AND ".join(where_parts)
        total = int(conn.execute(f"SELECT COUNT(*) FROM publications p WHERE {where_sql}", params).fetchone()[0])

        rows = conn.execute(
            f"""
            SELECT p.*,
                   (SELECT COUNT(*) FROM chapters c WHERE c.pub_id = p.id) AS chapter_count
              FROM publications p
             WHERE {where_sql}
             ORDER BY
               CASE WHEN EXISTS (SELECT 1 FROM pub_files pf WHERE pf.pub_id = p.id AND pf.downloaded_at > 0) THEN 0 ELSE 1 END ASC,
               p.is_demo ASC,
               CASE p.category
                 WHEN 'baiboly' THEN 1
                 WHEN 'fitaovana' THEN 2
                 WHEN 'boky' THEN 3
                 WHEN 'bokikely' THEN 4
                 WHEN 'taridalana' THEN 5
                 WHEN 'tilikambo' THEN 6
                 WHEN 'mifohaza' THEN 7
                 ELSE 8
               END ASC,
               p.year DESC,
               p.issue DESC,
               p.title ASC
             LIMIT ? OFFSET ?
            """,
            params + [limit, offset],
        ).fetchall()

        pub_ids = [int(r["id"]) for r in rows]
        files_by_pub: Dict[int, List[Dict[str, Any]]] = {pid: [] for pid in pub_ids}
        if pub_ids:
            q_marks = ",".join("?" for _ in pub_ids)
            f_rows = conn.execute(
                f"SELECT * FROM pub_files WHERE pub_id IN ({q_marks}) ORDER BY file_format ASC",
                pub_ids,
            ).fetchall()
            for fr in f_rows:
                fd = dict(fr)
                rel = fd.get("rel_path") or ""
                exists_on_disk = bool(rel and (files_dir / rel).is_file())
                fd["on_disk"] = exists_on_disk
                files_by_pub[int(fd["pub_id"])].append(fd)

        items = []
        for r in rows:
            d = dict(r)
            cat_info = CATEGORY_BY_CODE.get(d["category"], {})
            d["category_label"] = cat_info.get("short", d["category"])
            d["files"] = files_by_pub.get(int(d["id"]), [])
            d["has_local_files"] = any(f["on_disk"] for f in d["files"])
            items.append(d)

        return {"total": total, "items": items}

    def get_publication_detail(self, pub_id: int) -> Optional[Dict[str, Any]]:
        conn = self._conn()
        row = conn.execute("SELECT * FROM publications WHERE id = ?", (pub_id,)).fetchone()
        if not row:
            return None
        d = dict(row)
        files_dir = self.get_files_dir()
        f_rows = conn.execute("SELECT * FROM pub_files WHERE pub_id = ? ORDER BY file_format ASC", (pub_id,)).fetchall()
        files = []
        for fr in f_rows:
            fd = dict(fr)
            rel = fd.get("rel_path") or ""
            fd["on_disk"] = bool(rel and (files_dir / rel).is_file())
            files.append(fd)
        d["files"] = files
        ch_rows = conn.execute(
            "SELECT id, chapter_index, chapter_title, source_format FROM chapters WHERE pub_id = ? ORDER BY chapter_index ASC",
            (pub_id,),
        ).fetchall()
        d["chapters"] = [dict(c) for c in ch_rows]
        cat_info = CATEGORY_BY_CODE.get(d["category"], {})
        d["category_label"] = cat_info.get("short", d["category"])
        return d

    def get_chapter_content(self, chapter_id: int) -> Optional[Dict[str, Any]]:
        conn = self._conn()
        row = conn.execute(
            """
            SELECT c.*, p.title AS pub_title, p.pub_symbol, p.issue, p.year, p.category, p.formatted_date
              FROM chapters c
              JOIN publications p ON p.id = c.pub_id
             WHERE c.id = ?
            """,
            (chapter_id,),
        ).fetchone()
        if not row:
            return None
        d = dict(row)
        prev_row = conn.execute(
            "SELECT id, chapter_title FROM chapters WHERE pub_id = ? AND chapter_index < ? ORDER BY chapter_index DESC LIMIT 1",
            (d["pub_id"], d["chapter_index"]),
        ).fetchone()
        next_row = conn.execute(
            "SELECT id, chapter_title FROM chapters WHERE pub_id = ? AND chapter_index > ? ORDER BY chapter_index ASC LIMIT 1",
            (d["pub_id"], d["chapter_index"]),
        ).fetchone()
        d["prev_chapter"] = dict(prev_row) if prev_row else None
        d["next_chapter"] = dict(next_row) if next_row else None
        return d

    def toggle_favorite(self, pub_id: int) -> Optional[int]:
        conn = self._conn()
        with self._write_lock:
            row = conn.execute("SELECT favorite FROM publications WHERE id = ?", (pub_id,)).fetchone()
            if not row:
                return None
            new_val = 0 if row["favorite"] else 1
            conn.execute("UPDATE publications SET favorite = ? WHERE id = ?", (new_val, pub_id))
            conn.commit()
            return new_val

    def select_candidates_for_sync(
        self,
        categories: List[str],
        year_min: int = 0,
        only_unprobed_or_outdated: bool = False,
        max_items: int = 500,
    ) -> List[Dict[str, Any]]:
        conn = self._conn()
        where_parts = ["is_demo = 0"]
        params: List[Any] = []
        if categories:
            q_marks = ",".join("?" for _ in categories)
            where_parts.append(f"category IN ({q_marks})")
            params.extend(categories)
        if year_min > 0:
            where_parts.append("(year = 0 OR year >= ?)")
            params.append(year_min)
        if only_unprobed_or_outdated:
            where_parts.append("probe_status != -1")

        sql = f"""
            SELECT * FROM publications
             WHERE {' AND '.join(where_parts)}
             ORDER BY
               CASE category
                 WHEN 'baiboly' THEN 1
                 WHEN 'fitaovana' THEN 2
                 WHEN 'boky' THEN 3
                 WHEN 'bokikely' THEN 4
                 WHEN 'taridalana' THEN 5
                 WHEN 'tilikambo' THEN 6
                 WHEN 'mifohaza' THEN 7
                 ELSE 8
               END ASC,
               year DESC,
               issue DESC
             LIMIT ?
        """
        rows = conn.execute(sql, params + [max_items]).fetchall()
        return [dict(r) for r in rows]

    def get_stats(self) -> Dict[str, Any]:
        conn = self._conn()
        files_dir = self.get_files_dir()

        total_pubs = int(conn.execute("SELECT COUNT(*) FROM publications WHERE is_demo = 0").fetchone()[0])
        demo_pubs = int(conn.execute("SELECT COUNT(*) FROM publications WHERE is_demo = 1").fetchone()[0])
        downloaded_pubs = int(
            conn.execute(
                "SELECT COUNT(DISTINCT p.id) FROM publications p "
                "JOIN pub_files pf ON pf.pub_id = p.id WHERE pf.downloaded_at > 0 AND p.is_demo = 0"
            ).fetchone()[0]
        )
        total_chapters = int(conn.execute("SELECT COUNT(*) FROM chapters").fetchone()[0])
        favorites_count = int(conn.execute("SELECT COUNT(*) FROM publications WHERE favorite = 1").fetchone()[0])

        fmt_rows = conn.execute(
            """
            SELECT pf.file_format, COUNT(*) AS cnt, COALESCE(SUM(pf.file_size), 0) AS bytes
              FROM pub_files pf
              JOIN publications p ON p.id = pf.pub_id
             WHERE pf.downloaded_at > 0 AND p.is_demo = 0
             GROUP BY pf.file_format
            """
        ).fetchall()
        formats_summary = {r["file_format"]: {"count": int(r["cnt"]), "bytes": int(r["bytes"])} for r in fmt_rows}
        total_bytes = sum(v["bytes"] for v in formats_summary.values())

        cat_rows = conn.execute(
            """
            SELECT category,
                   COUNT(*) AS total_cat,
                   SUM(CASE WHEN EXISTS (SELECT 1 FROM pub_files pf WHERE pf.pub_id = publications.id AND pf.downloaded_at > 0) THEN 1 ELSE 0 END) AS dl_cat
              FROM publications
             WHERE is_demo = 0
             GROUP BY category
            """
        ).fetchall()
        by_category = {r["category"]: {"total": int(r["total_cat"] or 0), "downloaded": int(r["dl_cat"] or 0)} for r in cat_rows}

        disk_free_bytes = 0
        disk_total_bytes = 0
        try:
            usage = shutil.disk_usage(str(files_dir))
            disk_free_bytes = int(usage.free)
            disk_total_bytes = int(usage.total)
        except Exception:
            pass

        return {
            "total_catalog_pubs": total_pubs,
            "demo_pubs": demo_pubs,
            "downloaded_pubs": downloaded_pubs,
            "total_chapters": total_chapters,
            "favorites_count": favorites_count,
            "total_downloaded_bytes": total_bytes,
            "formats": formats_summary,
            "by_category": by_category,
            "fts_enabled": self._fts_enabled,
            "files_dir": str(files_dir),
            "custom_files_dir": self.get_meta("custom_files_dir", ""),
            "disk_free_bytes": disk_free_bytes,
            "disk_total_bytes": disk_total_bytes,
            "catalog_manifest_id": self.get_meta("catalog_manifest_id", ""),
            "last_catalog_sync": self.get_meta("last_catalog_sync", ""),
            "last_update_check": self.get_meta("last_update_check", ""),
        }


class _DummyLock:
    def __enter__(self) -> None:
        return None

    def __exit__(self, exc_type: Any, exc: Any, tb: Any) -> None:
        return None
