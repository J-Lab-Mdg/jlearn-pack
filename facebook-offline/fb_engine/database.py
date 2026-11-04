# -*- coding: utf-8 -*-
"""Base SQLite + Recherche plein-texte FTS5 pour Facebook Page Offline.

- Stocke toutes les publications (texte, titre, date, liens externes, albums) et leurs médias
  (photos, vidéos MP4/Reels) avec des chemins 100 % relatifs (portabilité totale sur disque dur externe).
- Déduplication déterministe par `post_uid` : permet d'importer plusieurs parties `.zip` ou
  de faire des mises à jour tous les 6 mois sans jamais créer de doublons.
"""

from __future__ import annotations

import datetime
import json
import re
import shutil
import sqlite3
import threading
import time
import unicodedata
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple


def strip_accents(text: str) -> str:
    if not text:
        return ""
    decomp = unicodedata.normalize("NFD", text)
    return "".join(ch for ch in decomp if unicodedata.category(ch) != "Mn")


def normalize_search(text: str) -> str:
    s = strip_accents(text or "").lower()
    s = re.sub(r"[^a-z0-9#]+", " ", s)
    return re.sub(r"\s+", " ", s).strip()


class FBDatabase:
    def __init__(self, db_path: Path, medias_dir: Path, imports_dir: Path) -> None:
        self.db_path = Path(db_path)
        self.db_path.parent.mkdir(parents=True, exist_ok=True)
        self.medias_dir = Path(medias_dir)
        self.medias_dir.mkdir(parents=True, exist_ok=True)
        self.imports_dir = Path(imports_dir)
        self.imports_dir.mkdir(parents=True, exist_ok=True)
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
            self._local.conn = conn
        return conn

    def _init_schema(self) -> None:
        conn = self._conn()
        with self._write_lock:
            conn.executescript(
                """
                CREATE TABLE IF NOT EXISTS meta (
                    key TEXT PRIMARY KEY,
                    value TEXT NOT NULL
                );

                CREATE TABLE IF NOT EXISTS posts (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    post_uid TEXT NOT NULL UNIQUE,
                    timestamp INTEGER NOT NULL DEFAULT 0,
                    year INTEGER NOT NULL DEFAULT 0,
                    month INTEGER NOT NULL DEFAULT 0,
                    date_str TEXT NOT NULL DEFAULT '',
                    title TEXT NOT NULL DEFAULT '',
                    content TEXT NOT NULL DEFAULT '',
                    album_name TEXT NOT NULL DEFAULT '',
                    external_url TEXT NOT NULL DEFAULT '',
                    external_title TEXT NOT NULL DEFAULT '',
                    post_type TEXT NOT NULL DEFAULT 'text',
                    photo_count INTEGER NOT NULL DEFAULT 0,
                    video_count INTEGER NOT NULL DEFAULT 0,
                    favorite INTEGER NOT NULL DEFAULT 0,
                    is_demo INTEGER NOT NULL DEFAULT 0,
                    norm_text TEXT NOT NULL DEFAULT '',
                    imported_at INTEGER NOT NULL DEFAULT 0
                );

                CREATE INDEX IF NOT EXISTS idx_posts_ts ON posts(timestamp DESC);
                CREATE INDEX IF NOT EXISTS idx_posts_year ON posts(year DESC, month DESC);
                CREATE INDEX IF NOT EXISTS idx_posts_type ON posts(post_type);
                CREATE INDEX IF NOT EXISTS idx_posts_fav ON posts(favorite);

                CREATE TABLE IF NOT EXISTS post_media (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    post_id INTEGER NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
                    media_type TEXT NOT NULL DEFAULT 'photo',
                    rel_path TEXT NOT NULL,
                    caption TEXT NOT NULL DEFAULT '',
                    file_size INTEGER NOT NULL DEFAULT 0,
                    sort_order INTEGER NOT NULL DEFAULT 0,
                    UNIQUE(post_id, rel_path)
                );

                CREATE INDEX IF NOT EXISTS idx_media_post ON post_media(post_id, sort_order);
                CREATE INDEX IF NOT EXISTS idx_media_type ON post_media(media_type);
                """
            )
            try:
                conn.executescript(
                    """
                    CREATE VIRTUAL TABLE IF NOT EXISTS posts_fts USING fts5(
                        title,
                        album_name,
                        content,
                        content='posts',
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

    def upsert_post(self, item: Dict[str, Any]) -> Tuple[int, bool]:
        """Insère ou enrichit une publication. Retourne (post_id, was_created)."""
        post_uid = str(item["post_uid"]).strip()
        ts = int(item.get("timestamp") or 0)
        if ts > 0:
            dt = datetime.datetime.fromtimestamp(ts, tz=datetime.timezone.utc)
            year = dt.year
            month = dt.month
            date_str = dt.strftime("%Y-%m-%d %H:%M")
        else:
            year = int(item.get("year") or 0)
            month = int(item.get("month") or 0)
            date_str = str(item.get("date_str") or "")

        title = (item.get("title") or "").strip()
        content = (item.get("content") or "").strip()
        album_name = (item.get("album_name") or "").strip()
        ext_url = (item.get("external_url") or "").strip()
        ext_title = (item.get("external_title") or "").strip()
        is_demo = 1 if item.get("is_demo") else 0

        media_list: List[Dict[str, Any]] = item.get("media") or []
        photos = sum(1 for m in media_list if m.get("media_type") == "photo")
        videos = sum(1 for m in media_list if m.get("media_type") == "video")

        if videos > 0:
            post_type = "video"
        elif photos > 0:
            post_type = "photo"
        elif ext_url:
            post_type = "link"
        else:
            post_type = "text"

        captions_joined = " ".join(m.get("caption", "") for m in media_list if m.get("caption"))
        norm_text = normalize_search(f"{title} {album_name} {content} {ext_title} {captions_joined} {date_str}")
        now = int(time.time())

        conn = self._conn()
        with self._write_lock:
            existing = conn.execute(
                "SELECT id, title, album_name, content FROM posts WHERE post_uid = ?",
                (post_uid,),
            ).fetchone()

            created = False
            if existing:
                post_id = int(existing["id"])
                if self._fts_enabled:
                    conn.execute(
                        "INSERT INTO posts_fts(posts_fts, rowid, title, album_name, content) VALUES('delete', ?, ?, ?, ?)",
                        (post_id, existing["title"], existing["album_name"], existing["content"]),
                    )
                new_title = title if len(title) >= len(existing["title"] or "") else existing["title"]
                new_content = content if len(content) >= len(existing["content"] or "") else existing["content"]
                new_album = album_name or existing["album_name"]
                conn.execute(
                    """
                    UPDATE posts
                       SET title = ?, album_name = ?, content = ?,
                           external_url = CASE WHEN ? != '' THEN ? ELSE external_url END,
                           external_title = CASE WHEN ? != '' THEN ? ELSE external_title END,
                           norm_text = ?
                     WHERE id = ?
                    """,
                    (new_title, new_album, new_content, ext_url, ext_url, ext_title, ext_title, norm_text, post_id),
                )
                if self._fts_enabled:
                    conn.execute(
                        "INSERT INTO posts_fts(rowid, title, album_name, content) VALUES (?, ?, ?, ?)",
                        (post_id, new_title, new_album, new_content),
                    )
            else:
                cur = conn.execute(
                    """
                    INSERT INTO posts(
                        post_uid, timestamp, year, month, date_str, title, content, album_name,
                        external_url, external_title, post_type, photo_count, video_count,
                        is_demo, norm_text, imported_at
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                    """,
                    (
                        post_uid, ts, year, month, date_str, title, content, album_name,
                        ext_url, ext_title, post_type, photos, videos, is_demo, norm_text, now,
                    ),
                )
                post_id = int(cur.lastrowid)
                created = True
                if self._fts_enabled:
                    conn.execute(
                        "INSERT INTO posts_fts(rowid, title, album_name, content) VALUES (?, ?, ?, ?)",
                        (post_id, title, album_name, content),
                    )

            for idx, m in enumerate(media_list):
                rel = (m.get("rel_path") or "").strip()
                if not rel:
                    continue
                mtype = m.get("media_type") or "photo"
                cap = (m.get("caption") or "").strip()
                fsize = int(m.get("file_size") or 0)
                conn.execute(
                    """
                    INSERT INTO post_media(post_id, media_type, rel_path, caption, file_size, sort_order)
                    VALUES (?, ?, ?, ?, ?, ?)
                    ON CONFLICT(post_id, rel_path) DO UPDATE SET
                        file_size = CASE WHEN excluded.file_size > 0 THEN excluded.file_size ELSE post_media.file_size END,
                        caption = CASE WHEN excluded.caption != '' THEN excluded.caption ELSE post_media.caption END
                    """,
                    (post_id, mtype, rel, cap, fsize, idx),
                )

            # Recalcule photo_count / video_count / post_type après fusion éventuelle de parties .zip
            cnt_row = conn.execute(
                """
                SELECT SUM(CASE WHEN media_type='photo' THEN 1 ELSE 0 END) AS p_cnt,
                       SUM(CASE WHEN media_type='video' THEN 1 ELSE 0 END) AS v_cnt
                  FROM post_media WHERE post_id = ?
                """,
                (post_id,),
            ).fetchone()
            p_cnt = int(cnt_row["p_cnt"] or 0)
            v_cnt = int(cnt_row["v_cnt"] or 0)
            final_type = "video" if v_cnt > 0 else ("photo" if p_cnt > 0 else post_type)
            conn.execute(
                "UPDATE posts SET photo_count = ?, video_count = ?, post_type = ? WHERE id = ?",
                (p_cnt, v_cnt, final_type, post_id),
            )
            conn.commit()
            return post_id, created

    def clear_demo_posts(self) -> int:
        conn = self._conn()
        with self._write_lock:
            rows = conn.execute("SELECT id, title, album_name, content FROM posts WHERE is_demo = 1").fetchall()
            if not rows:
                return 0
            for r in rows:
                pid = int(r["id"])
                mrows = conn.execute("SELECT rel_path FROM post_media WHERE post_id = ?", (pid,)).fetchall()
                for mr in mrows:
                    p = self.medias_dir / mr["rel_path"]
                    if p.is_file() and "_DEMO" in p.name:
                        try:
                            p.unlink()
                        except OSError:
                            pass
                if self._fts_enabled:
                    conn.execute(
                        "INSERT INTO posts_fts(posts_fts, rowid, title, album_name, content) VALUES('delete', ?, ?, ?, ?)",
                        (pid, r["title"], r["album_name"], r["content"]),
                    )
                conn.execute("DELETE FROM posts WHERE id = ?", (pid,))
            conn.commit()
            return len(rows)

    @staticmethod
    def _build_fts_query(q: str) -> str:
        cleaned = re.sub(r'["\'()*^:;,.!?/\\<>[\]{}|~`]+', " ", q)
        tokens = [t.strip() for t in cleaned.split() if t.strip()]
        parts = []
        for tok in tokens[:8]:
            safe = re.sub(r"[^0-9A-Za-zÀ-ÿ_#-]", "", tok).lstrip("#")
            if safe:
                parts.append(f'"{safe}"*' if not safe.isdigit() else f'"{safe}"')
        return " AND ".join(parts)

    def query_posts(
        self,
        query: str = "",
        post_type: str = "",
        year: int = 0,
        favorites_only: bool = False,
        limit: int = 50,
        offset: int = 0,
    ) -> Dict[str, Any]:
        conn = self._conn()
        where_parts = ["1=1"]
        params: List[Any] = []

        if post_type:
            where_parts.append("p.post_type = ?")
            params.append(post_type)
        if year > 0:
            where_parts.append("p.year = ?")
            params.append(year)
        if favorites_only:
            where_parts.append("p.favorite = 1")

        q = (query or "").strip()
        fts_q = self._build_fts_query(q) if q else ""

        rows = []
        total = 0
        used_fts = False

        if q and self._fts_enabled and fts_q:
            try:
                where_sql = " AND ".join(where_parts)
                total = int(
                    conn.execute(
                        f"SELECT COUNT(*) FROM posts_fts JOIN posts p ON p.id = posts_fts.rowid WHERE posts_fts MATCH ? AND {where_sql}",
                        [fts_q] + params,
                    ).fetchone()[0]
                )
                rows = conn.execute(
                    f"""
                    SELECT p.*,
                           snippet(posts_fts, 2, '<mark>', '</mark>', ' … ', 36) AS snippet_html
                      FROM posts_fts
                      JOIN posts p ON p.id = posts_fts.rowid
                     WHERE posts_fts MATCH ? AND {where_sql}
                     ORDER BY p.timestamp DESC, p.id DESC
                     LIMIT ? OFFSET ?
                    """,
                    [fts_q] + params + [limit, offset],
                ).fetchall()
                used_fts = True
            except sqlite3.OperationalError:
                used_fts = False

        if not used_fts:
            if q:
                norm_q = normalize_search(q)
                for tok in norm_q.split()[:6]:
                    where_parts.append("p.norm_text LIKE ?")
                    params.append(f"%{tok}%")
            where_sql = " AND ".join(where_parts)
            total = int(conn.execute(f"SELECT COUNT(*) FROM posts p WHERE {where_sql}", params).fetchone()[0])
            rows = conn.execute(
                f"""
                SELECT p.*, '' AS snippet_html
                  FROM posts p
                 WHERE {where_sql}
                 ORDER BY p.timestamp DESC, p.id DESC
                 LIMIT ? OFFSET ?
                """,
                params + [limit, offset],
            ).fetchall()

        post_ids = [int(r["id"]) for r in rows]
        media_map: Dict[int, List[Dict[str, Any]]] = {pid: [] for pid in post_ids}
        if post_ids:
            q_marks = ",".join("?" for _ in post_ids)
            m_rows = conn.execute(
                f"SELECT * FROM post_media WHERE post_id IN ({q_marks}) ORDER BY sort_order ASC, id ASC",
                post_ids,
            ).fetchall()
            for mr in m_rows:
                md = dict(mr)
                md["on_disk"] = (self.medias_dir / md["rel_path"]).is_file()
                media_map[int(md["post_id"])].append(md)

        items = []
        for r in rows:
            d = dict(r)
            d["media"] = media_map.get(int(d["id"]), [])
            items.append(d)

        return {"total": total, "items": items}

    def list_media_gallery(self, media_type: str = "photo", year: int = 0, limit: int = 120) -> List[Dict[str, Any]]:
        conn = self._conn()
        where = ["pm.media_type = ?"]
        params: List[Any] = [media_type]
        if year > 0:
            where.append("p.year = ?")
            params.append(year)
        rows = conn.execute(
            f"""
            SELECT pm.*, p.date_str, p.title AS post_title, p.content AS post_content, p.year
              FROM post_media pm
              JOIN posts p ON p.id = pm.post_id
             WHERE {' AND '.join(where)}
             ORDER BY p.timestamp DESC, pm.sort_order ASC
             LIMIT ?
            """,
            params + [limit],
        ).fetchall()
        out = []
        for r in rows:
            d = dict(r)
            if (self.medias_dir / d["rel_path"]).is_file():
                out.append(d)
        return out

    def toggle_favorite(self, post_id: int) -> Optional[int]:
        conn = self._conn()
        with self._write_lock:
            row = conn.execute("SELECT favorite FROM posts WHERE id = ?", (post_id,)).fetchone()
            if not row:
                return None
            new_val = 0 if row["favorite"] else 1
            conn.execute("UPDATE posts SET favorite = ? WHERE id = ?", (new_val, post_id))
            conn.commit()
            return new_val

    def get_stats(self) -> Dict[str, Any]:
        conn = self._conn()
        real_posts = int(conn.execute("SELECT COUNT(*) FROM posts WHERE is_demo = 0").fetchone()[0])
        demo_posts = int(conn.execute("SELECT COUNT(*) FROM posts WHERE is_demo = 1").fetchone()[0])
        photos = int(
            conn.execute(
                "SELECT COUNT(*) FROM post_media pm JOIN posts p ON p.id = pm.post_id WHERE pm.media_type='photo' AND p.is_demo=0"
            ).fetchone()[0]
        )
        videos = int(
            conn.execute(
                "SELECT COUNT(*) FROM post_media pm JOIN posts p ON p.id = pm.post_id WHERE pm.media_type='video' AND p.is_demo=0"
            ).fetchone()[0]
        )
        favs = int(conn.execute("SELECT COUNT(*) FROM posts WHERE favorite = 1").fetchone()[0])
        media_bytes = int(
            conn.execute(
                "SELECT COALESCE(SUM(pm.file_size), 0) FROM post_media pm JOIN posts p ON p.id = pm.post_id WHERE p.is_demo=0"
            ).fetchone()[0]
        )
        years = [
            {"year": int(r["year"]), "count": int(r["cnt"])}
            for r in conn.execute(
                "SELECT year, COUNT(*) AS cnt FROM posts WHERE year > 0 GROUP BY year ORDER BY year DESC"
            ).fetchall()
        ]

        # Vérifie quels fichiers .zip sont prêts dans imports/
        pending_zips = []
        for zp in sorted(self.imports_dir.glob("*.zip")):
            if zp.is_file():
                pending_zips.append({"name": zp.name, "size": zp.stat().st_size})

        disk_free = 0
        try:
            disk_free = int(shutil.disk_usage(str(self.medias_dir)).free)
        except Exception:
            pass

        return {
            "page_name": self.get_meta("page_name", "Ma Page Facebook (Hors-Ligne)"),
            "real_posts": real_posts,
            "demo_posts": demo_posts,
            "total_posts": real_posts + demo_posts,
            "photos_count": photos,
            "videos_count": videos,
            "favorites_count": favs,
            "media_bytes": media_bytes,
            "years": years,
            "pending_zips": pending_zips,
            "imports_dir": str(self.imports_dir),
            "medias_dir": str(self.medias_dir),
            "disk_free_bytes": disk_free,
            "last_import": self.get_meta("last_import", ""),
        }
