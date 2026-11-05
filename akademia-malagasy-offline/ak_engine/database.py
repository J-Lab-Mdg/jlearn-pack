"""Base SQLite WAL + Recherche plein texte FTS5 pour Akademia Malagasy Offline."""

from __future__ import annotations

import json
import re
import sqlite3
import threading
from pathlib import Path
from typing import Any


def _make_fts_query(raw: str) -> str:
    """Construit une requete FTS5 robuste avec prefixe sur chaque terme."""
    cleaned = re.sub(r"[^\w\s'-]", " ", raw, flags=re.UNICODE)
    tokens = [t.strip("'-") for t in cleaned.split() if t.strip("'-")]
    if not tokens:
        return ""
    parts = []
    for tok in tokens[:8]:
        safe = tok.replace('"', "")
        if safe:
            parts.append(f'"{safe}"*')
    return " AND ".join(parts)


class AkademiaDB:
    """Gestionnaire thread-safe SQLite + FTS5 pour les ressources de l'Akademia Malagasy."""

    def __init__(self, db_path: Path) -> None:
        self.db_path = Path(db_path)
        self.db_path.parent.mkdir(parents=True, exist_ok=True)
        self._write_lock = threading.Lock()
        self._init_schema()

    def _connect(self) -> sqlite3.Connection:
        conn = sqlite3.connect(str(self.db_path), timeout=30.0)
        conn.row_factory = sqlite3.Row
        conn.execute("PRAGMA journal_mode=WAL;")
        conn.execute("PRAGMA synchronous=NORMAL;")
        conn.execute("PRAGMA foreign_keys=ON;")
        return conn

    def _init_schema(self) -> None:
        with self._write_lock:
            conn = self._connect()
            try:
                conn.executescript(
                    """
                    CREATE TABLE IF NOT EXISTS settings (
                        key TEXT PRIMARY KEY,
                        value TEXT NOT NULL
                    );

                    CREATE TABLE IF NOT EXISTS documents (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        slug TEXT NOT NULL UNIQUE,
                        url TEXT NOT NULL,
                        category TEXT NOT NULL,
                        title TEXT NOT NULL,
                        author TEXT NOT NULL DEFAULT '',
                        summary TEXT NOT NULL DEFAULT '',
                        body_html TEXT NOT NULL,
                        body_text TEXT NOT NULL,
                        toc_json TEXT NOT NULL DEFAULT '[]',
                        word_count INTEGER NOT NULL DEFAULT 0,
                        is_seed INTEGER NOT NULL DEFAULT 0,
                        is_favorite INTEGER NOT NULL DEFAULT 0,
                        updated_at TEXT NOT NULL DEFAULT (datetime('now'))
                    );

                    CREATE INDEX IF NOT EXISTS idx_documents_cat ON documents(category);
                    CREATE INDEX IF NOT EXISTS idx_documents_fav ON documents(is_favorite);

                    CREATE VIRTUAL TABLE IF NOT EXISTS docs_fts USING fts5(
                        title,
                        author,
                        category,
                        summary,
                        body_text,
                        content='documents',
                        content_rowid='id',
                        tokenize='unicode61 remove_diacritics 2'
                    );

                    CREATE TRIGGER IF NOT EXISTS docs_ai AFTER INSERT ON documents BEGIN
                        INSERT INTO docs_fts(rowid, title, author, category, summary, body_text)
                        VALUES (new.id, new.title, new.author, new.category, new.summary, new.body_text);
                    END;

                    CREATE TRIGGER IF NOT EXISTS docs_ad AFTER DELETE ON documents BEGIN
                        INSERT INTO docs_fts(docs_fts, rowid, title, author, category, summary, body_text)
                        VALUES ('delete', old.id, old.title, old.author, old.category, old.summary, old.body_text);
                    END;

                    CREATE TRIGGER IF NOT EXISTS docs_au AFTER UPDATE ON documents BEGIN
                        INSERT INTO docs_fts(docs_fts, rowid, title, author, category, summary, body_text)
                        VALUES ('delete', old.id, old.title, old.author, old.category, old.summary, old.body_text);
                        INSERT INTO docs_fts(rowid, title, author, category, summary, body_text)
                        VALUES (new.id, new.title, new.author, new.category, new.summary, new.body_text);
                    END;

                    CREATE TABLE IF NOT EXISTS vocab_entries (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        entry_uid TEXT NOT NULL UNIQUE,
                        domain TEXT NOT NULL,
                        direction TEXT NOT NULL,
                        letter TEXT NOT NULL,
                        term TEXT NOT NULL,
                        sense_num TEXT NOT NULL DEFAULT '',
                        pos TEXT NOT NULL DEFAULT '',
                        definition TEXT NOT NULL DEFAULT '',
                        translation TEXT NOT NULL DEFAULT '',
                        source_url TEXT NOT NULL DEFAULT '',
                        is_seed INTEGER NOT NULL DEFAULT 0,
                        is_favorite INTEGER NOT NULL DEFAULT 0
                    );

                    CREATE INDEX IF NOT EXISTS idx_vocab_domain_dir_letter
                        ON vocab_entries(domain, direction, letter, term COLLATE NOCASE);
                    CREATE INDEX IF NOT EXISTS idx_vocab_fav ON vocab_entries(is_favorite);

                    CREATE VIRTUAL TABLE IF NOT EXISTS vocab_fts USING fts5(
                        term,
                        pos,
                        definition,
                        translation,
                        domain,
                        content='vocab_entries',
                        content_rowid='id',
                        tokenize='unicode61 remove_diacritics 2'
                    );

                    CREATE TRIGGER IF NOT EXISTS vocab_ai AFTER INSERT ON vocab_entries BEGIN
                        INSERT INTO vocab_fts(rowid, term, pos, definition, translation, domain)
                        VALUES (new.id, new.term, new.pos, new.definition, new.translation, new.domain);
                    END;

                    CREATE TRIGGER IF NOT EXISTS vocab_ad AFTER DELETE ON vocab_entries BEGIN
                        INSERT INTO vocab_fts(vocab_fts, rowid, term, pos, definition, translation, domain)
                        VALUES ('delete', old.id, old.term, old.pos, old.definition, old.translation, old.domain);
                    END;

                    CREATE TRIGGER IF NOT EXISTS vocab_au AFTER UPDATE ON vocab_entries BEGIN
                        INSERT INTO vocab_fts(vocab_fts, rowid, term, pos, definition, translation, domain)
                        VALUES ('delete', old.id, old.term, old.pos, old.definition, old.translation, old.domain);
                        INSERT INTO vocab_fts(rowid, term, pos, definition, translation, domain)
                        VALUES (new.id, new.term, new.pos, new.definition, new.translation, new.domain);
                    END;

                    CREATE TABLE IF NOT EXISTS pdf_files (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        slug TEXT NOT NULL UNIQUE,
                        title TEXT NOT NULL,
                        description TEXT NOT NULL DEFAULT '',
                        source_url TEXT NOT NULL,
                        local_relpath TEXT NOT NULL DEFAULT '',
                        file_size INTEGER NOT NULL DEFAULT 0,
                        downloaded INTEGER NOT NULL DEFAULT 0,
                        updated_at TEXT NOT NULL DEFAULT (datetime('now'))
                    );
                    """
                )
                conn.commit()
            finally:
                conn.close()

    # ------------------------------------------------------------------
    # Settings
    # ------------------------------------------------------------------
    def get_setting(self, key: str, default: str = "") -> str:
        conn = self._connect()
        try:
            row = conn.execute("SELECT value FROM settings WHERE key = ?", (key,)).fetchone()
            return str(row["value"]) if row else default
        finally:
            conn.close()

    def set_setting(self, key: str, value: str) -> None:
        with self._write_lock:
            conn = self._connect()
            try:
                conn.execute(
                    "INSERT INTO settings(key, value) VALUES(?, ?) "
                    "ON CONFLICT(key) DO UPDATE SET value = excluded.value",
                    (key, value),
                )
                conn.commit()
            finally:
                conn.close()

    # ------------------------------------------------------------------
    # Upserts
    # ------------------------------------------------------------------
    def upsert_document(
        self,
        *,
        slug: str,
        url: str,
        category: str,
        title: str,
        author: str,
        summary: str,
        body_html: str,
        body_text: str,
        toc: list[dict[str, Any]] | None = None,
        is_seed: bool = False,
    ) -> int:
        toc_str = json.dumps(toc or [], ensure_ascii=False)
        word_count = len(body_text.split())
        with self._write_lock:
            conn = self._connect()
            try:
                existing = conn.execute(
                    "SELECT id, is_seed, word_count FROM documents WHERE slug = ?",
                    (slug,),
                ).fetchone()
                # Ne jamais ecraser un vrai document complet synchronise par un apercu seed
                if existing and is_seed and int(existing["is_seed"]) == 0:
                    return int(existing["id"])

                conn.execute(
                    """
                    INSERT INTO documents(
                        slug, url, category, title, author, summary,
                        body_html, body_text, toc_json, word_count, is_seed, updated_at
                    )
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
                    ON CONFLICT(slug) DO UPDATE SET
                        url = excluded.url,
                        category = excluded.category,
                        title = excluded.title,
                        author = excluded.author,
                        summary = excluded.summary,
                        body_html = excluded.body_html,
                        body_text = excluded.body_text,
                        toc_json = excluded.toc_json,
                        word_count = excluded.word_count,
                        is_seed = excluded.is_seed,
                        updated_at = datetime('now')
                    """,
                    (
                        slug,
                        url,
                        category,
                        title,
                        author,
                        summary,
                        body_html,
                        body_text,
                        toc_str,
                        word_count,
                        1 if is_seed else 0,
                    ),
                )
                conn.commit()
                row = conn.execute("SELECT id FROM documents WHERE slug = ?", (slug,)).fetchone()
                return int(row["id"])
            finally:
                conn.close()

    def upsert_vocab_batch(
        self,
        entries: list[dict[str, Any]],
        *,
        is_seed: bool = False,
        replace_seed_for_domain_letter: tuple[str, str, str] | None = None,
    ) -> int:
        """Insere ou met a jour un lot d'entrees lexicales en transaction."""
        if not entries and not replace_seed_for_domain_letter:
            return 0
        with self._write_lock:
            conn = self._connect()
            try:
                if replace_seed_for_domain_letter and not is_seed:
                    dom, direction, letter = replace_seed_for_domain_letter
                    conn.execute(
                        """
                        DELETE FROM vocab_entries
                        WHERE domain = ? AND direction = ? AND letter = ? AND is_seed = 1 AND is_favorite = 0
                        """,
                        (dom, direction, letter),
                    )
                count = 0
                for item in entries:
                    uid = item["entry_uid"]
                    if is_seed:
                        ex = conn.execute(
                            "SELECT is_seed FROM vocab_entries WHERE entry_uid = ?",
                            (uid,),
                        ).fetchone()
                        if ex and int(ex["is_seed"]) == 0:
                            continue
                    conn.execute(
                        """
                        INSERT INTO vocab_entries(
                            entry_uid, domain, direction, letter, term, sense_num,
                            pos, definition, translation, source_url, is_seed
                        )
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                        ON CONFLICT(entry_uid) DO UPDATE SET
                            domain = excluded.domain,
                            direction = excluded.direction,
                            letter = excluded.letter,
                            term = excluded.term,
                            sense_num = excluded.sense_num,
                            pos = excluded.pos,
                            definition = excluded.definition,
                            translation = excluded.translation,
                            source_url = excluded.source_url,
                            is_seed = excluded.is_seed
                        """,
                        (
                            uid,
                            item["domain"],
                            item["direction"],
                            item["letter"],
                            item["term"],
                            item.get("sense_num", ""),
                            item.get("pos", ""),
                            item.get("definition", ""),
                            item.get("translation", ""),
                            item.get("source_url", ""),
                            1 if is_seed else 0,
                        ),
                    )
                    count += 1
                conn.commit()
                return count
            finally:
                conn.close()

    def upsert_pdf(
        self,
        *,
        slug: str,
        title: str,
        description: str,
        source_url: str,
        local_relpath: str = "",
        file_size: int = 0,
        downloaded: bool = False,
    ) -> int:
        with self._write_lock:
            conn = self._connect()
            try:
                existing = conn.execute(
                    "SELECT id, downloaded, local_relpath, file_size FROM pdf_files WHERE slug = ?",
                    (slug,),
                ).fetchone()
                if existing and int(existing["downloaded"]) == 1 and not downloaded:
                    return int(existing["id"])
                conn.execute(
                    """
                    INSERT INTO pdf_files(
                        slug, title, description, source_url, local_relpath,
                        file_size, downloaded, updated_at
                    )
                    VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'))
                    ON CONFLICT(slug) DO UPDATE SET
                        title = excluded.title,
                        description = excluded.description,
                        source_url = excluded.source_url,
                        local_relpath = CASE WHEN excluded.downloaded = 1 THEN excluded.local_relpath ELSE pdf_files.local_relpath END,
                        file_size = CASE WHEN excluded.downloaded = 1 THEN excluded.file_size ELSE pdf_files.file_size END,
                        downloaded = CASE WHEN excluded.downloaded = 1 THEN 1 ELSE pdf_files.downloaded END,
                        updated_at = datetime('now')
                    """,
                    (
                        slug,
                        title,
                        description,
                        source_url,
                        local_relpath,
                        file_size,
                        1 if downloaded else 0,
                    ),
                )
                conn.commit()
                row = conn.execute("SELECT id FROM pdf_files WHERE slug = ?", (slug,)).fetchone()
                return int(row["id"])
            finally:
                conn.close()

    # ------------------------------------------------------------------
    # Queries & Search
    # ------------------------------------------------------------------
    def get_stats(self) -> dict[str, Any]:
        conn = self._connect()
        try:
            total_vocab = conn.execute("SELECT COUNT(*) FROM vocab_entries").fetchone()[0]
            mg_fr_count = conn.execute(
                "SELECT COUNT(*) FROM vocab_entries WHERE direction = 'mg-fr'"
            ).fetchone()[0]
            fr_mg_count = conn.execute(
                "SELECT COUNT(*) FROM vocab_entries WHERE direction = 'fr-mg'"
            ).fetchone()[0]
            total_docs = conn.execute("SELECT COUNT(*) FROM documents").fetchone()[0]
            synced_docs = conn.execute(
                "SELECT COUNT(*) FROM documents WHERE is_seed = 0"
            ).fetchone()[0]
            total_words = conn.execute(
                "SELECT COALESCE(SUM(word_count), 0) FROM documents"
            ).fetchone()[0]
            total_pdfs = conn.execute("SELECT COUNT(*) FROM pdf_files").fetchone()[0]
            downloaded_pdfs = conn.execute(
                "SELECT COUNT(*) FROM pdf_files WHERE downloaded = 1"
            ).fetchone()[0]
            fav_vocab = conn.execute(
                "SELECT COUNT(*) FROM vocab_entries WHERE is_favorite = 1"
            ).fetchone()[0]
            fav_docs = conn.execute(
                "SELECT COUNT(*) FROM documents WHERE is_favorite = 1"
            ).fetchone()[0]

            domains = [
                dict(r)
                for r in conn.execute(
                    """
                    SELECT domain, COUNT(*) AS count
                    FROM vocab_entries
                    GROUP BY domain
                    ORDER BY count DESC, domain ASC
                    """
                ).fetchall()
            ]
            categories = [
                dict(r)
                for r in conn.execute(
                    """
                    SELECT category, COUNT(*) AS count
                    FROM documents
                    GROUP BY category
                    ORDER BY category ASC
                    """
                ).fetchall()
            ]
            last_sync = self.get_setting("last_sync_at", "")
            sync_complete = self.get_setting("sync_complete", "0") == "1"
            return {
                "total_vocab": int(total_vocab),
                "mg_fr_count": int(mg_fr_count),
                "fr_mg_count": int(fr_mg_count),
                "total_docs": int(total_docs),
                "synced_docs": int(synced_docs),
                "total_words": int(total_words),
                "total_pdfs": int(total_pdfs),
                "downloaded_pdfs": int(downloaded_pdfs),
                "favorites_count": int(fav_vocab + fav_docs),
                "domains": domains,
                "categories": categories,
                "last_sync_at": last_sync,
                "sync_complete": sync_complete,
            }
        finally:
            conn.close()

    def search_vocab(
        self,
        *,
        q: str = "",
        domain: str = "",
        direction: str = "",
        letter: str = "",
        favorites_only: bool = False,
        limit: int = 80,
        offset: int = 0,
    ) -> dict[str, Any]:
        conn = self._connect()
        try:
            where_clauses: list[str] = []
            params: list[Any] = []

            fts_q = _make_fts_query(q) if q.strip() else ""
            if fts_q:
                where_clauses.append(
                    "v.id IN (SELECT rowid FROM vocab_fts WHERE vocab_fts MATCH ?)"
                )
                params.append(fts_q)

            if domain:
                where_clauses.append("v.domain = ?")
                params.append(domain)
            if direction:
                where_clauses.append("v.direction = ?")
                params.append(direction)
            if letter:
                where_clauses.append("v.letter = ?")
                params.append(letter.upper())
            if favorites_only:
                where_clauses.append("v.is_favorite = 1")

            where_sql = ("WHERE " + " AND ".join(where_clauses)) if where_clauses else ""

            total = conn.execute(
                f"SELECT COUNT(*) FROM vocab_entries v {where_sql}",
                params,
            ).fetchone()[0]

            if q.strip():
                exact_term = q.strip().lower()
                order_sql = (
                    "ORDER BY (LOWER(v.term) = ?) DESC, "
                    "(LOWER(v.term) LIKE ?) DESC, "
                    "v.term COLLATE NOCASE ASC, v.sense_num ASC"
                )
                query_params = [*params, exact_term, f"{exact_term}%", limit, offset]
            else:
                order_sql = "ORDER BY v.term COLLATE NOCASE ASC, v.sense_num ASC"
                query_params = [*params, limit, offset]

            rows = conn.execute(
                f"""
                SELECT
                    v.id, v.entry_uid, v.domain, v.direction, v.letter,
                    v.term, v.sense_num, v.pos, v.definition, v.translation,
                    v.source_url, v.is_seed, v.is_favorite
                FROM vocab_entries v
                {where_sql}
                {order_sql}
                LIMIT ? OFFSET ?
                """,
                query_params,
            ).fetchall()

            # Lettres disponibles pour les filtres courants (hors filtre lettre)
            letter_clauses = [c for c in where_clauses if c != "v.letter = ?"]
            letter_params = [
                p for i, p in enumerate(params)
                if not (letter and i == len(params) - (2 if favorites_only else 1))
            ]
            # Plus propre : reconstruire sans letter
            l_clauses: list[str] = []
            l_params: list[Any] = []
            if fts_q:
                l_clauses.append("v.id IN (SELECT rowid FROM vocab_fts WHERE vocab_fts MATCH ?)")
                l_params.append(fts_q)
            if domain:
                l_clauses.append("v.domain = ?")
                l_params.append(domain)
            if direction:
                l_clauses.append("v.direction = ?")
                l_params.append(direction)
            if favorites_only:
                l_clauses.append("v.is_favorite = 1")
            l_where = ("WHERE " + " AND ".join(l_clauses)) if l_clauses else ""
            letters = [
                dict(r)
                for r in conn.execute(
                    f"""
                    SELECT v.letter, COUNT(*) AS count
                    FROM vocab_entries v
                    {l_where}
                    GROUP BY v.letter
                    ORDER BY v.letter ASC
                    """,
                    l_params,
                ).fetchall()
            ]

            return {
                "total": int(total),
                "items": [dict(r) for r in rows],
                "letters": letters,
            }
        finally:
            conn.close()

    def list_documents(
        self,
        *,
        q: str = "",
        category: str = "",
        favorites_only: bool = False,
    ) -> list[dict[str, Any]]:
        conn = self._connect()
        try:
            fts_q = _make_fts_query(q) if q.strip() else ""
            clauses: list[str] = []
            params: list[Any] = []

            if category:
                clauses.append("d.category = ?")
                params.append(category)
            if favorites_only:
                clauses.append("d.is_favorite = 1")

            if fts_q:
                where_extra = (" AND " + " AND ".join(clauses)) if clauses else ""
                rows = conn.execute(
                    f"""
                    SELECT
                        d.id, d.slug, d.url, d.category, d.title, d.author,
                        d.summary, d.word_count, d.is_seed, d.is_favorite, d.updated_at,
                        snippet(docs_fts, 4, '<mark>', '</mark>', ' … ', 28) AS snippet
                    FROM docs_fts
                    JOIN documents d ON d.id = docs_fts.rowid
                    WHERE docs_fts MATCH ? {where_extra}
                    ORDER BY bm25(docs_fts) ASC, d.title ASC
                    """,
                    [fts_q, *params],
                ).fetchall()
                return [dict(r) for r in rows]

            where_sql = ("WHERE " + " AND ".join(clauses)) if clauses else ""
            rows = conn.execute(
                f"""
                SELECT
                    d.id, d.slug, d.url, d.category, d.title, d.author,
                    d.summary, d.word_count, d.is_seed, d.is_favorite, d.updated_at,
                    '' AS snippet
                FROM documents d
                {where_sql}
                ORDER BY d.category ASC, d.id ASC
                """,
                params,
            ).fetchall()
            return [dict(r) for r in rows]
        finally:
            conn.close()

    def get_document(self, slug_or_id: str) -> dict[str, Any] | None:
        conn = self._connect()
        try:
            if slug_or_id.isdigit():
                row = conn.execute(
                    "SELECT * FROM documents WHERE id = ?",
                    (int(slug_or_id),),
                ).fetchone()
            else:
                row = conn.execute(
                    "SELECT * FROM documents WHERE slug = ?",
                    (slug_or_id,),
                ).fetchone()
            if not row:
                return None
            data = dict(row)
            try:
                data["toc"] = json.loads(data.pop("toc_json", "[]"))
            except Exception:
                data["toc"] = []
            return data
        finally:
            conn.close()

    def list_pdfs(self) -> list[dict[str, Any]]:
        conn = self._connect()
        try:
            rows = conn.execute(
                "SELECT * FROM pdf_files ORDER BY id ASC"
            ).fetchall()
            return [dict(r) for r in rows]
        finally:
            conn.close()

    def get_pdf(self, pdf_id: int) -> dict[str, Any] | None:
        conn = self._connect()
        try:
            row = conn.execute(
                "SELECT * FROM pdf_files WHERE id = ?",
                (pdf_id,),
            ).fetchone()
            return dict(row) if row else None
        finally:
            conn.close()

    def toggle_favorite(self, kind: str, item_id: int) -> bool:
        table = "vocab_entries" if kind == "vocab" else "documents"
        with self._write_lock:
            conn = self._connect()
            try:
                row = conn.execute(
                    f"SELECT is_favorite FROM {table} WHERE id = ?",
                    (item_id,),
                ).fetchone()
                if not row:
                    return False
                new_val = 0 if int(row["is_favorite"]) == 1 else 1
                conn.execute(
                    f"UPDATE {table} SET is_favorite = ? WHERE id = ?",
                    (new_val, item_id),
                )
                conn.commit()
                return bool(new_val)
            finally:
                conn.close()
