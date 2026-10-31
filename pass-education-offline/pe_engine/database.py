# -*- coding: utf-8 -*-
"""Base SQLite + FTS5 pour Pass-Éducation Offline (Catalogue, Cours HTML & Recherche PDF).

- Mode WAL (`journal_mode=WAL`) pour lecture instantanée pendant le téléchargement.
- Recherche plein-texte FTS5 (`unicode61 remove_diacritics 2`) à la fois dans les titres,
  le texte HTML des cours/exercices ET le texte extrait à l'intérieur des fichiers PDF !
- Gestion complète des filtres (Cycle, Classe PS->Terminale, Matière, Type, Statut PDF)
  et suivi de reprise après coupure Internet.
"""

from __future__ import annotations

import html
import json
import os
import re
import sqlite3
import threading
import time
from typing import Any, Dict, List, Optional, Tuple

from .taxonomy import (
    CLASSES,
    CLASS_BY_CODE,
    CYCLES,
    RESOURCE_TYPES,
    SUBJECTS,
    SUBJECT_BY_CODE,
    get_cycle_for_class,
    get_subject_short_label,
    normalize_search_text,
)

_RE_SCRIPT_STYLE = re.compile(r"<(script|style|iframe|noscript|form)\b[^>]*>.*?</\1>", re.IGNORECASE | re.DOTALL)
_RE_HTML_TAG = re.compile(r"<[^>]+>")
_RE_MULTI_SPACE = re.compile(r"[ \t]+")
_RE_MULTI_NL = re.compile(r"\n{3,}")


def html_to_clean_text(raw_html: str) -> str:
    if not raw_html:
        return ""
    s = _RE_SCRIPT_STYLE.sub(" ", raw_html)
    s = re.sub(r"<br\s*/?>", "\n", s, flags=re.IGNORECASE)
    s = re.sub(r"</(p|div|h1|h2|h3|h4|li|tr)>", "\n", s, flags=re.IGNORECASE)
    s = _RE_HTML_TAG.sub(" ", s)
    s = html.unescape(s).replace("\xa0", " ")
    # Coupe le pied de page générique "Voir les fiches / Télécharger les documents"
    for marker in ("Voir les fiches", "Télécharger les documents"):
        idx = s.find(marker)
        if idx > 80:
            s = s[:idx]
    s = _RE_MULTI_SPACE.sub(" ", s)
    lines = [ln.strip() for ln in s.splitlines()]
    s = "\n".join(ln for ln in lines if ln)
    return _RE_MULTI_NL.sub("\n\n", s).strip()


def sanitize_lesson_html(raw_html: str) -> str:
    """Nettoie le HTML WordPress pour un affichage propre et 100 % hors-ligne."""
    if not raw_html:
        return ""
    s = _RE_SCRIPT_STYLE.sub("", raw_html)
    # Coupe la zone des liens d'extranet en bas d'article WordPress
    for marker in ("Voir les fiches", "Télécharger les documents"):
        idx = s.find(marker)
        if idx > 80:
            s = s[:idx]
    # Désactive les images externes non mises en cache pour éviter les icônes cassées hors-ligne
    s = re.sub(r"<img\b[^>]*>", "", s, flags=re.IGNORECASE)
    # Remplace les liens externes par du texte lisible
    s = re.sub(r"<a\b[^>]*>(.*?)</a>", r"\1", s, flags=re.IGNORECASE | re.DOTALL)
    return s.strip()


class PassEducationDB:
    """Gestionnaire thread-safe SQLite + FTS5 pour Pass-Éducation Offline."""

    def __init__(self, db_path: str, pdf_root: str) -> None:
        self.db_path = os.path.abspath(db_path)
        self.pdf_root = os.path.abspath(pdf_root)
        os.makedirs(os.path.dirname(self.db_path), exist_ok=True)
        os.makedirs(self.pdf_root, exist_ok=True)
        self._write_lock = threading.RLock()
        self._local = threading.local()
        self._init_schema()

    def _conn(self) -> sqlite3.Connection:
        conn: Optional[sqlite3.Connection] = getattr(self._local, "conn", None)
        if conn is None:
            conn = sqlite3.connect(self.db_path, timeout=30.0, check_same_thread=False)
            conn.row_factory = sqlite3.Row
            conn.execute("PRAGMA journal_mode=WAL;")
            conn.execute("PRAGMA synchronous=NORMAL;")
            conn.execute("PRAGMA temp_store=MEMORY;")
            conn.execute("PRAGMA cache_size=-24000;")
            self._local.conn = conn
        return conn

    def _init_schema(self) -> None:
        with self._write_lock:
            c = self._conn()
            c.executescript(
                """
                CREATE TABLE IF NOT EXISTS meta (
                    key TEXT PRIMARY KEY,
                    value TEXT NOT NULL
                );

                CREATE TABLE IF NOT EXISTS free_pdf_map (
                    slug_or_key TEXT PRIMARY KEY,
                    wp_post_id INTEGER NOT NULL DEFAULT 0,
                    pdf_url TEXT NOT NULL,
                    discovered_at REAL NOT NULL DEFAULT 0
                );
                CREATE INDEX IF NOT EXISTS idx_free_pdf_post ON free_pdf_map (wp_post_id);

                CREATE TABLE IF NOT EXISTS resources (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    wp_post_id INTEGER NOT NULL DEFAULT 0,
                    slug TEXT NOT NULL UNIQUE,
                    title TEXT NOT NULL,
                    cycle_code TEXT NOT NULL DEFAULT 'primaire',
                    class_code TEXT NOT NULL DEFAULT 'CE1',
                    subject_code TEXT NOT NULL DEFAULT 'francais',
                    resource_type TEXT NOT NULL DEFAULT 'lecon',
                    source_url TEXT NOT NULL DEFAULT '',
                    pdf_url TEXT NOT NULL DEFAULT '',
                    member_pdf_url TEXT NOT NULL DEFAULT '',
                    local_pdf_relpath TEXT NOT NULL DEFAULT '',
                    pdf_size_bytes INTEGER NOT NULL DEFAULT 0,
                    pdf_pages INTEGER NOT NULL DEFAULT 0,
                    pdf_status TEXT NOT NULL DEFAULT 'none',
                    last_error TEXT NOT NULL DEFAULT '',
                    html_content TEXT NOT NULL DEFAULT '',
                    text_content TEXT NOT NULL DEFAULT '',
                    pdf_text TEXT NOT NULL DEFAULT '',
                    updated_date TEXT NOT NULL DEFAULT '',
                    is_demo INTEGER NOT NULL DEFAULT 0,
                    created_at REAL NOT NULL DEFAULT 0
                );

                CREATE INDEX IF NOT EXISTS idx_res_class_subj ON resources (class_code, subject_code);
                CREATE INDEX IF NOT EXISTS idx_res_cycle ON resources (cycle_code);
                CREATE INDEX IF NOT EXISTS idx_res_type ON resources (resource_type);
                CREATE INDEX IF NOT EXISTS idx_res_pdf_status ON resources (pdf_status);
                CREATE INDEX IF NOT EXISTS idx_res_wp_id ON resources (wp_post_id);

                CREATE VIRTUAL TABLE IF NOT EXISTS resources_fts USING fts5(
                    title,
                    class_code,
                    subject_label,
                    text_content,
                    pdf_text,
                    tokenize='unicode61 remove_diacritics 2'
                );
                """
            )
            c.commit()

    # ------------------------------------------------------------------
    # Métadonnées & Préférences de synchronisation
    # ------------------------------------------------------------------
    def get_meta(self, key: str, default: str = "") -> str:
        row = self._conn().execute("SELECT value FROM meta WHERE key = ?", (key,)).fetchone()
        return row["value"] if row else default

    def set_meta(self, key: str, value: str) -> None:
        with self._write_lock:
            c = self._conn()
            c.execute(
                "INSERT INTO meta (key, value) VALUES (?, ?) "
                "ON CONFLICT(key) DO UPDATE SET value = excluded.value",
                (key, value),
            )
            c.commit()

    def get_sync_preferences(self) -> Dict[str, Any]:
        raw = self.get_meta("sync_prefs", "")
        default_prefs = {
            "classes": ["CP", "CE1", "CE2", "CM1", "CM2"],
            "subjects": [s["code"] for s in SUBJECTS],
            "only_with_pdf": False,
            "download_pdfs": True,
            "member_cookie": "",
        }
        if not raw:
            return default_prefs
        try:
            parsed = json.loads(raw)
            for k, v in default_prefs.items():
                if k not in parsed:
                    parsed[k] = v
            return parsed
        except Exception:
            return default_prefs

    def save_sync_preferences(self, prefs: Dict[str, Any]) -> Dict[str, Any]:
        current = self.get_sync_preferences()
        if "classes" in prefs and isinstance(prefs["classes"], list):
            valid_c = [c for c in prefs["classes"] if c in CLASS_BY_CODE]
            current["classes"] = valid_c
        if "subjects" in prefs and isinstance(prefs["subjects"], list):
            valid_s = [s for s in prefs["subjects"] if s in SUBJECT_BY_CODE]
            current["subjects"] = valid_s
        if "only_with_pdf" in prefs:
            current["only_with_pdf"] = bool(prefs["only_with_pdf"])
        if "download_pdfs" in prefs:
            current["download_pdfs"] = bool(prefs["download_pdfs"])
        if "member_cookie" in prefs and isinstance(prefs["member_cookie"], str):
            current["member_cookie"] = prefs["member_cookie"].strip()
        self.set_meta("sync_prefs", json.dumps(current, ensure_ascii=False))
        return current

    # ------------------------------------------------------------------
    # Indexation Sitemap Free PDFs & Ressources
    # ------------------------------------------------------------------
    def save_free_pdf_entries(self, entries: List[Tuple[str, int, str]]) -> int:
        if not entries:
            return 0
        now = time.time()
        with self._write_lock:
            c = self._conn()
            c.executemany(
                """
                INSERT INTO free_pdf_map (slug_or_key, wp_post_id, pdf_url, discovered_at)
                VALUES (?, ?, ?, ?)
                ON CONFLICT(slug_or_key) DO UPDATE SET
                    wp_post_id = CASE WHEN excluded.wp_post_id > 0 THEN excluded.wp_post_id ELSE free_pdf_map.wp_post_id END,
                    pdf_url = excluded.pdf_url
                """,
                [(k, pid, url, now) for (k, pid, url) in entries],
            )
            c.commit()
        return len(entries)

    def lookup_free_pdf_url(self, wp_post_id: int, slug: str) -> str:
        c = self._conn()
        if wp_post_id > 0:
            row = c.execute(
                "SELECT pdf_url FROM free_pdf_map WHERE wp_post_id = ? LIMIT 1",
                (wp_post_id,),
            ).fetchone()
            if row:
                return row["pdf_url"]
        if slug:
            row2 = c.execute(
                "SELECT pdf_url FROM free_pdf_map WHERE slug_or_key = ? LIMIT 1",
                (slug,),
            ).fetchone()
            if row2:
                return row2["pdf_url"]
        return ""

    def clear_demo_entries_if_real_sync(self) -> None:
        with self._write_lock:
            c = self._conn()
            demo_rows = c.execute(
                "SELECT id, local_pdf_relpath FROM resources WHERE is_demo = 1"
            ).fetchall()
            if not demo_rows:
                return
            for r in demo_rows:
                c.execute("DELETE FROM resources_fts WHERE rowid = ?", (r["id"],))
                rel = r["local_pdf_relpath"]
                if rel:
                    abs_p = os.path.join(self.pdf_root, rel)
                    if os.path.isfile(abs_p):
                        try:
                            os.remove(abs_p)
                        except Exception:
                            pass
            c.execute("DELETE FROM resources WHERE is_demo = 1")
            c.commit()

    def _sync_fts_row(self, c: sqlite3.Connection, row_id: int) -> None:
        r = c.execute(
            "SELECT id, title, class_code, subject_code, text_content, pdf_text FROM resources WHERE id = ?",
            (row_id,),
        ).fetchone()
        c.execute("DELETE FROM resources_fts WHERE rowid = ?", (row_id,))
        if r:
            subj_label = get_subject_short_label(r["subject_code"])
            c.execute(
                "INSERT INTO resources_fts (rowid, title, class_code, subject_label, text_content, pdf_text) "
                "VALUES (?, ?, ?, ?, ?, ?)",
                (
                    r["id"],
                    r["title"],
                    r["class_code"],
                    subj_label,
                    r["text_content"],
                    r["pdf_text"],
                ),
            )

    def upsert_resource(self, item: Dict[str, Any]) -> int:
        slug = (item.get("slug") or "").strip()
        if not slug:
            raise ValueError("slug manquant")

        class_code = item.get("class_code") or "CE1"
        cycle_code = item.get("cycle_code") or get_cycle_for_class(class_code)
        subject_code = item.get("subject_code") or "autres"
        resource_type = item.get("resource_type") or "autre"
        pdf_url = (item.get("pdf_url") or "").strip()
        local_rel = (item.get("local_pdf_relpath") or "").strip()

        with self._write_lock:
            c = self._conn()
            existing = c.execute(
                "SELECT id, pdf_url, local_pdf_relpath, pdf_size_bytes, pdf_pages, pdf_status, pdf_text, is_demo "
                "FROM resources WHERE slug = ?",
                (slug,),
            ).fetchone()

            now = time.time()
            if existing:
                row_id = existing["id"]
                keep_local = local_rel or existing["local_pdf_relpath"]
                keep_pdf_url = pdf_url or existing["pdf_url"]
                keep_status = item.get("pdf_status") or existing["pdf_status"]
                if keep_local and os.path.isfile(os.path.join(self.pdf_root, keep_local)):
                    keep_status = "downloaded"
                elif keep_pdf_url and keep_status == "none":
                    keep_status = "pending"

                c.execute(
                    """
                    UPDATE resources SET
                        wp_post_id = CASE WHEN ? > 0 THEN ? ELSE wp_post_id END,
                        title = ?,
                        cycle_code = ?,
                        class_code = ?,
                        subject_code = ?,
                        resource_type = ?,
                        source_url = CASE WHEN ? != '' THEN ? ELSE source_url END,
                        pdf_url = ?,
                        member_pdf_url = CASE WHEN ? != '' THEN ? ELSE member_pdf_url END,
                        local_pdf_relpath = ?,
                        pdf_size_bytes = CASE WHEN ? > 0 THEN ? ELSE pdf_size_bytes END,
                        pdf_pages = CASE WHEN ? > 0 THEN ? ELSE pdf_pages END,
                        pdf_status = ?,
                        html_content = CASE WHEN ? != '' THEN ? ELSE html_content END,
                        text_content = CASE WHEN ? != '' THEN ? ELSE text_content END,
                        pdf_text = CASE WHEN ? != '' THEN ? ELSE pdf_text END,
                        updated_date = CASE WHEN ? != '' THEN ? ELSE updated_date END,
                        is_demo = ?
                    WHERE id = ?
                    """,
                    (
                        int(item.get("wp_post_id") or 0),
                        int(item.get("wp_post_id") or 0),
                        item.get("title") or slug,
                        cycle_code,
                        class_code,
                        subject_code,
                        resource_type,
                        item.get("source_url") or "",
                        item.get("source_url") or "",
                        keep_pdf_url,
                        item.get("member_pdf_url") or "",
                        item.get("member_pdf_url") or "",
                        keep_local,
                        int(item.get("pdf_size_bytes") or 0),
                        int(item.get("pdf_size_bytes") or 0),
                        int(item.get("pdf_pages") or 0),
                        int(item.get("pdf_pages") or 0),
                        keep_status,
                        item.get("html_content") or "",
                        item.get("html_content") or "",
                        item.get("text_content") or "",
                        item.get("text_content") or "",
                        item.get("pdf_text") or "",
                        item.get("pdf_text") or "",
                        item.get("updated_date") or "",
                        item.get("updated_date") or "",
                        int(item.get("is_demo") or 0),
                        row_id,
                    ),
                )
            else:
                init_status = item.get("pdf_status") or ("downloaded" if local_rel else ("pending" if pdf_url else "none"))
                cur = c.execute(
                    """
                    INSERT INTO resources (
                        wp_post_id, slug, title, cycle_code, class_code, subject_code,
                        resource_type, source_url, pdf_url, member_pdf_url, local_pdf_relpath,
                        pdf_size_bytes, pdf_pages, pdf_status, html_content, text_content,
                        pdf_text, updated_date, is_demo, created_at
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                    """,
                    (
                        int(item.get("wp_post_id") or 0),
                        slug,
                        item.get("title") or slug,
                        cycle_code,
                        class_code,
                        subject_code,
                        resource_type,
                        item.get("source_url") or "",
                        pdf_url,
                        item.get("member_pdf_url") or "",
                        local_rel,
                        int(item.get("pdf_size_bytes") or 0),
                        int(item.get("pdf_pages") or 0),
                        init_status,
                        item.get("html_content") or "",
                        item.get("text_content") or "",
                        item.get("pdf_text") or "",
                        item.get("updated_date") or "",
                        int(item.get("is_demo") or 0),
                        now,
                    ),
                )
                row_id = int(cur.lastrowid)

            self._sync_fts_row(c, row_id)
            c.commit()
            return row_id

    def upsert_batch(self, items: List[Dict[str, Any]]) -> int:
        if not items:
            return 0
        count = 0
        with self._write_lock:
            for it in items:
                self.upsert_resource(it)
                count += 1
        return count

    def mark_pdf_downloaded(
        self,
        res_id: int,
        rel_path: str,
        size_bytes: int,
        pages: int,
        pdf_text: str,
        resolved_pdf_url: str = "",
    ) -> None:
        with self._write_lock:
            c = self._conn()
            c.execute(
                """
                UPDATE resources SET
                    local_pdf_relpath = ?,
                    pdf_size_bytes = ?,
                    pdf_pages = ?,
                    pdf_status = 'downloaded',
                    last_error = '',
                    pdf_url = CASE WHEN ? != '' THEN ? ELSE pdf_url END,
                    pdf_text = CASE WHEN ? != '' THEN ? ELSE pdf_text END
                WHERE id = ?
                """,
                (rel_path, size_bytes, pages, resolved_pdf_url, resolved_pdf_url, pdf_text, pdf_text, res_id),
            )
            self._sync_fts_row(c, res_id)
            c.commit()

    def mark_pdf_status(self, res_id: int, status: str, error_msg: str = "") -> None:
        with self._write_lock:
            c = self._conn()
            c.execute(
                "UPDATE resources SET pdf_status = ?, last_error = ? WHERE id = ?",
                (status, error_msg[:300], res_id),
            )
            c.commit()

    def get_pending_pdf_resources(
        self, classes: List[str], subjects: List[str], limit: int = 40
    ) -> List[Dict[str, Any]]:
        c = self._conn()
        where = ["pdf_status = 'pending'", "is_demo = 0"]
        params: List[Any] = []
        if classes:
            placeholders = ",".join("?" for _ in classes)
            where.append(f"class_code IN ({placeholders})")
            params.extend(classes)
        if subjects:
            placeholders = ",".join("?" for _ in subjects)
            where.append(f"subject_code IN ({placeholders})")
            params.extend(subjects)
        params.append(limit)
        sql = f"""
            SELECT id, wp_post_id, slug, title, class_code, subject_code, source_url, pdf_url, member_pdf_url
            FROM resources
            WHERE {' AND '.join(where)}
            ORDER BY CASE WHEN pdf_url != '' THEN 0 ELSE 1 END, id ASC
            LIMIT ?
        """
        return [dict(r) for r in c.execute(sql, params).fetchall()]

    def count_pending_pdfs(self, classes: List[str], subjects: List[str]) -> int:
        c = self._conn()
        where = ["pdf_status = 'pending'", "is_demo = 0"]
        params: List[Any] = []
        if classes:
            where.append(f"class_code IN ({','.join('?' for _ in classes)})")
            params.extend(classes)
        if subjects:
            where.append(f"subject_code IN ({','.join('?' for _ in subjects)})")
            params.extend(subjects)
        row = c.execute(f"SELECT COUNT(*) AS n FROM resources WHERE {' AND '.join(where)}", params).fetchone()
        return int(row["n"]) if row else 0

    # ------------------------------------------------------------------
    # Recherche plein-texte FTS5 & Catalogue
    # ------------------------------------------------------------------
    def search_resources(
        self,
        query: str = "",
        cycle_code: str = "",
        class_code: str = "",
        subject_code: str = "",
        resource_type: str = "",
        pdf_filter: str = "",
        limit: int = 60,
        offset: int = 0,
    ) -> Dict[str, Any]:
        c = self._conn()
        where: List[str] = []
        params: List[Any] = []

        if cycle_code:
            where.append("r.cycle_code = ?")
            params.append(cycle_code)
        if class_code:
            where.append("r.class_code = ?")
            params.append(class_code)
        if subject_code:
            where.append("r.subject_code = ?")
            params.append(subject_code)
        if resource_type:
            where.append("r.resource_type = ?")
            params.append(resource_type)
        if pdf_filter == "downloaded":
            where.append("r.pdf_status = 'downloaded'")
        elif pdf_filter == "has_pdf":
            where.append("(r.pdf_status IN ('downloaded', 'pending') OR r.pdf_url != '')")

        norm_q = normalize_search_text(query)
        tokens = [t for t in norm_q.split() if len(t) >= 1]

        if tokens:
            fts_expr = " AND ".join(f'"{t}"*' for t in tokens[:8])
            where_fts = ["resources_fts MATCH ?"] + where
            fts_params: List[Any] = [fts_expr] + params

            count_sql = f"""
                SELECT COUNT(*) AS total
                FROM resources_fts
                JOIN resources r ON r.id = resources_fts.rowid
                WHERE {' AND '.join(where_fts)}
            """
            total = int(c.execute(count_sql, fts_params).fetchone()["total"])

            sql = f"""
                SELECT
                    r.id, r.wp_post_id, r.slug, r.title, r.cycle_code, r.class_code,
                    r.subject_code, r.resource_type, r.source_url, r.pdf_url,
                    r.local_pdf_relpath, r.pdf_size_bytes, r.pdf_pages, r.pdf_status,
                    r.updated_date, r.is_demo,
                    snippet(resources_fts, 3, '<mark>', '</mark>', ' … ', 28) AS html_snippet,
                    snippet(resources_fts, 4, '<mark>', '</mark>', ' … ', 28) AS pdf_snippet,
                    substr(r.text_content, 1, 240) AS preview_text
                FROM resources_fts
                JOIN resources r ON r.id = resources_fts.rowid
                WHERE {' AND '.join(where_fts)}
                ORDER BY
                    CASE WHEN r.pdf_status = 'downloaded' THEN 0 ELSE 1 END,
                    bm25(resources_fts, 8.0, 2.0, 2.0, 1.5, 2.5)
                LIMIT ? OFFSET ?
            """
            rows = c.execute(sql, fts_params + [limit, offset]).fetchall()
        else:
            where_sql = f"WHERE {' AND '.join(where)}" if where else ""
            total = int(c.execute(f"SELECT COUNT(*) AS total FROM resources r {where_sql}", params).fetchone()["total"])
            sql = f"""
                SELECT
                    r.id, r.wp_post_id, r.slug, r.title, r.cycle_code, r.class_code,
                    r.subject_code, r.resource_type, r.source_url, r.pdf_url,
                    r.local_pdf_relpath, r.pdf_size_bytes, r.pdf_pages, r.pdf_status,
                    r.updated_date, r.is_demo,
                    '' AS html_snippet,
                    '' AS pdf_snippet,
                    substr(r.text_content, 1, 240) AS preview_text
                FROM resources r
                {where_sql}
                ORDER BY
                    CASE WHEN r.pdf_status = 'downloaded' THEN 0
                         WHEN r.pdf_url != '' THEN 1
                         ELSE 2 END,
                    r.id DESC
                LIMIT ? OFFSET ?
            """
            rows = c.execute(sql, params + [limit, offset]).fetchall()

        results: List[Dict[str, Any]] = []
        for r in rows:
            d = dict(r)
            d["subject_label"] = get_subject_short_label(d["subject_code"])
            d["type_label"] = RESOURCE_TYPES.get(d["resource_type"], "Ressource")
            class_info = CLASS_BY_CODE.get(d["class_code"])
            d["class_label"] = class_info["short"] if class_info else d["class_code"]
            snippet = d.get("pdf_snippet") or d.get("html_snippet") or ""
            if "<mark>" not in snippet:
                snippet = html.escape((d.get("preview_text") or "").replace("\n", " "))
            d["snippet_html"] = snippet
            d.pop("html_snippet", None)
            d.pop("pdf_snippet", None)
            d.pop("preview_text", None)
            results.append(d)

        return {"total": total, "items": results}

    def get_resource_detail(self, res_id: int) -> Optional[Dict[str, Any]]:
        c = self._conn()
        row = c.execute("SELECT * FROM resources WHERE id = ?", (res_id,)).fetchone()
        if not row:
            return None
        d = dict(row)
        d["subject_label"] = get_subject_short_label(d["subject_code"])
        d["type_label"] = RESOURCE_TYPES.get(d["resource_type"], "Ressource")
        class_info = CLASS_BY_CODE.get(d["class_code"])
        d["class_label"] = class_info["label"] if class_info else d["class_code"]
        if d["local_pdf_relpath"]:
            abs_pdf = os.path.join(self.pdf_root, d["local_pdf_relpath"])
            d["local_pdf_exists"] = os.path.isfile(abs_pdf)
            d["local_pdf_abspath"] = abs_pdf
        else:
            d["local_pdf_exists"] = False
            d["local_pdf_abspath"] = ""
        return d

    def get_stats(self) -> Dict[str, Any]:
        c = self._conn()
        totals = c.execute(
            """
            SELECT
                COUNT(*) AS total_resources,
                SUM(CASE WHEN pdf_status = 'downloaded' THEN 1 ELSE 0 END) AS downloaded_pdfs,
                SUM(CASE WHEN pdf_status = 'pending' THEN 1 ELSE 0 END) AS pending_pdfs,
                SUM(CASE WHEN pdf_url != '' OR pdf_status = 'downloaded' THEN 1 ELSE 0 END) AS free_pdf_total,
                COALESCE(SUM(CASE WHEN pdf_status = 'downloaded' THEN pdf_size_bytes ELSE 0 END), 0) AS pdf_bytes_sum,
                SUM(CASE WHEN is_demo = 1 THEN 1 ELSE 0 END) AS demo_count
            FROM resources
            """
        ).fetchone()

        by_class = {
            r["class_code"]: {"total": r["n"], "pdfs": r["p"]}
            for r in c.execute(
                """
                SELECT class_code,
                       COUNT(*) AS n,
                       SUM(CASE WHEN pdf_status = 'downloaded' THEN 1 ELSE 0 END) AS p
                FROM resources GROUP BY class_code
                """
            ).fetchall()
        }

        by_subject = {
            r["subject_code"]: {"total": r["n"], "pdfs": r["p"]}
            for r in c.execute(
                """
                SELECT subject_code,
                       COUNT(*) AS n,
                       SUM(CASE WHEN pdf_status = 'downloaded' THEN 1 ELSE 0 END) AS p
                FROM resources GROUP BY subject_code
                """
            ).fetchall()
        }

        db_bytes = 0
        for suffix in ("", "-wal", "-shm"):
            p = self.db_path + suffix
            if os.path.isfile(p):
                db_bytes += os.path.getsize(p)

        pdf_bytes = int(totals["pdf_bytes_sum"] or 0)
        sitemap_count = int(c.execute("SELECT COUNT(*) AS n FROM free_pdf_map").fetchone()["n"])

        return {
            "total_resources": int(totals["total_resources"] or 0),
            "downloaded_pdfs": int(totals["downloaded_pdfs"] or 0),
            "pending_pdfs": int(totals["pending_pdfs"] or 0),
            "free_pdf_total": int(totals["free_pdf_total"] or 0),
            "sitemap_pdf_indexed": sitemap_count,
            "is_demo_only": int(totals["demo_count"] or 0) > 0
            and int(totals["demo_count"] or 0) == int(totals["total_resources"] or 0),
            "db_size_mb": round(db_bytes / (1024 * 1024), 2),
            "pdf_size_mb": round(pdf_bytes / (1024 * 1024), 2),
            "total_disk_mb": round((db_bytes + pdf_bytes) / (1024 * 1024), 2),
            "by_class": by_class,
            "by_subject": by_subject,
            "taxonomy": {
                "cycles": CYCLES,
                "classes": [
                    {
                        "code": cl["code"],
                        "label": cl["label"],
                        "short": cl["short"],
                        "cycle": cl["cycle"],
                    }
                    for cl in CLASSES
                ],
                "subjects": [
                    {"code": sb["code"], "label": sb["label"], "short": sb["short"]}
                    for sb in SUBJECTS
                ],
                "types": [{"code": k, "label": v} for k, v in RESOURCE_TYPES.items()],
            },
        }
