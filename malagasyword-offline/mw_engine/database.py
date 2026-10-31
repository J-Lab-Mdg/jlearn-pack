# -*- coding: utf-8 -*-
""" Couche SQLite + FTS5 pour MalagasyWord Offline (Mode Complet).

- Mode WAL (`journal_mode=WAL`) pour permettre la lecture instantanée dans l'application web
  pendant que l'aspirateur écrit en arrière-plan.
- Recherche plein-texte FTS5 trilingue (Malgache, Français, Anglais) insensible aux accents (`ñ`=`n`, `é`=`e`)
  et tolérante aux tirets (`afa-po` / `afapo`), + index FTS5 dédié aux proverbes (`Ohabolana`).
- File d'attente persistante (`crawl_tasks`) garantissant une reprise exacte après coupure Internet ou Ctrl+C.
"""

from __future__ import annotations

import json
import os
import re
import sqlite3
import threading
import time
from typing import Any, Dict, Iterable, List, Optional, Tuple

from .parser import normalize_search_token


class DictionaryDB:
    """Gestionnaire thread-safe de la base SQLite hors-ligne."""

    def __init__(self, db_path: str) -> None:
        self.db_path = os.path.abspath(db_path)
        os.makedirs(os.path.dirname(self.db_path), exist_ok=True)
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
            conn.execute("PRAGMA foreign_keys=ON;")
            self._local.conn = conn
        return conn

    def close_thread_conn(self) -> None:
        conn: Optional[sqlite3.Connection] = getattr(self._local, "conn", None)
        if conn is not None:
            try:
                conn.close()
            except Exception:
                pass
            self._local.conn = None

    def _init_schema(self) -> None:
        with self._write_lock:
            c = self._conn()
            c.executescript(
                """
                CREATE TABLE IF NOT EXISTS meta (
                    key TEXT PRIMARY KEY,
                    value TEXT NOT NULL
                );

                CREATE TABLE IF NOT EXISTS crawl_tasks (
                    kind TEXT NOT NULL,
                    key TEXT NOT NULL,
                    priority INTEGER NOT NULL DEFAULT 50,
                    status TEXT NOT NULL DEFAULT 'pending',
                    attempts INTEGER NOT NULL DEFAULT 0,
                    last_error TEXT NOT NULL DEFAULT '',
                    updated_at REAL NOT NULL DEFAULT 0,
                    PRIMARY KEY (kind, key)
                );
                CREATE INDEX IF NOT EXISTS idx_crawl_pending
                    ON crawl_tasks (kind, status, priority, key);

                CREATE TABLE IF NOT EXISTS words (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    slug TEXT NOT NULL UNIQUE,
                    primary_word TEXT NOT NULL,
                    norm_word TEXT NOT NULL,
                    alt_words_json TEXT NOT NULL DEFAULT '[]',
                    lang TEXT NOT NULL DEFAULT 'mg',
                    root_word TEXT NOT NULL DEFAULT '',
                    root_slug TEXT NOT NULL DEFAULT '',
                    pos_summary TEXT NOT NULL DEFAULT '',
                    gloss_fr TEXT NOT NULL DEFAULT '',
                    gloss_en TEXT NOT NULL DEFAULT '',
                    defs_mg_text TEXT NOT NULL DEFAULT '',
                    defs_fr_text TEXT NOT NULL DEFAULT '',
                    defs_en_text TEXT NOT NULL DEFAULT '',
                    examples_text TEXT NOT NULL DEFAULT '',
                    entries_json TEXT NOT NULL DEFAULT '[]',
                    anagrams_json TEXT NOT NULL DEFAULT '[]',
                    updated_date TEXT NOT NULL DEFAULT '',
                    is_full INTEGER NOT NULL DEFAULT 0,
                    is_root INTEGER NOT NULL DEFAULT 0,
                    is_demo INTEGER NOT NULL DEFAULT 0
                );
                CREATE INDEX IF NOT EXISTS idx_words_norm ON words (norm_word);
                CREATE INDEX IF NOT EXISTS idx_words_root_slug ON words (root_slug);
                CREATE INDEX IF NOT EXISTS idx_words_is_full ON words (is_full);

                CREATE TABLE IF NOT EXISTS reverse_index (
                    lang TEXT NOT NULL,
                    term TEXT NOT NULL,
                    norm_term TEXT NOT NULL,
                    slug TEXT NOT NULL,
                    mg_word TEXT NOT NULL,
                    PRIMARY KEY (lang, term, slug)
                );
                CREATE INDEX IF NOT EXISTS idx_rev_norm ON reverse_index (lang, norm_term);
                CREATE INDEX IF NOT EXISTS idx_rev_slug ON reverse_index (slug);

                CREATE TABLE IF NOT EXISTS proverbs (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    hash TEXT NOT NULL UNIQUE,
                    text_mg TEXT NOT NULL,
                    html_mg TEXT NOT NULL,
                    variants_json TEXT NOT NULL DEFAULT '[]',
                    interp_mg_json TEXT NOT NULL DEFAULT '[]',
                    trans_fr_json TEXT NOT NULL DEFAULT '[]',
                    interp_fr_json TEXT NOT NULL DEFAULT '[]',
                    trans_en_json TEXT NOT NULL DEFAULT '[]',
                    interp_en_json TEXT NOT NULL DEFAULT '[]',
                    notes_json TEXT NOT NULL DEFAULT '[]',
                    is_demo INTEGER NOT NULL DEFAULT 0
                );

                CREATE TABLE IF NOT EXISTS proverb_words (
                    proverb_id INTEGER NOT NULL,
                    slug TEXT NOT NULL,
                    PRIMARY KEY (proverb_id, slug)
                );
                CREATE INDEX IF NOT EXISTS idx_proverb_words_slug ON proverb_words (slug);

                CREATE VIRTUAL TABLE IF NOT EXISTS words_fts USING fts5(
                    slug UNINDEXED,
                    headwords,
                    root_word,
                    gloss_fr,
                    gloss_en,
                    defs_mg,
                    defs_fr,
                    defs_en,
                    examples,
                    tokenize='unicode61 remove_diacritics 2'
                );

                CREATE VIRTUAL TABLE IF NOT EXISTS proverbs_fts USING fts5(
                    proverb_id UNINDEXED,
                    text_mg,
                    trans_fr,
                    interp_mg,
                    interp_fr,
                    trans_en,
                    tokenize='unicode61 remove_diacritics 2'
                );
                """
            )
            c.commit()

    # ------------------------------------------------------------------
    # Métadonnées & Statistiques
    # ------------------------------------------------------------------

    def get_meta(self, key: str, default: str = "") -> str:
        row = self._conn().execute("SELECT value FROM meta WHERE key = ?", (key,)).fetchone()
        return row["value"] if row else default

    def set_meta(self, key: str, value: str) -> None:
        with self._write_lock:
            c = self._conn()
            c.execute(
                "INSERT INTO meta(key, value) VALUES (?, ?) "
                "ON CONFLICT(key) DO UPDATE SET value = excluded.value",
                (key, value),
            )
            c.commit()

    def get_stats(self) -> Dict[str, Any]:
        c = self._conn()
        total_words = c.execute("SELECT COUNT(*) FROM words").fetchone()[0]
        full_words = c.execute("SELECT COUNT(*) FROM words WHERE is_full = 1").fetchone()[0]
        demo_only = (
            total_words > 0
            and c.execute("SELECT COUNT(*) FROM words WHERE is_demo = 0").fetchone()[0] == 0
        )
        total_proverbs = c.execute("SELECT COUNT(*) FROM proverbs").fetchone()[0]
        fr_terms = c.execute("SELECT COUNT(DISTINCT term) FROM reverse_index WHERE lang = 'fr'").fetchone()[0]
        en_terms = c.execute("SELECT COUNT(DISTINCT term) FROM reverse_index WHERE lang = 'en'").fetchone()[0]
        roots_count = c.execute("SELECT COUNT(*) FROM words WHERE is_root = 1").fetchone()[0]

        # Progression de la file d'attente par type
        q_rows = c.execute(
            "SELECT kind, status, COUNT(*) AS cnt FROM crawl_tasks GROUP BY kind, status"
        ).fetchall()
        queue_summary: Dict[str, Dict[str, int]] = {}
        for r in q_rows:
            d = queue_summary.setdefault(r["kind"], {"pending": 0, "done": 0, "error": 0, "running": 0})
            d[r["status"]] = r["cnt"]

        db_size_bytes = os.path.getsize(self.db_path) if os.path.exists(self.db_path) else 0
        for ext in ("-wal", "-shm"):
            p = self.db_path + ext
            if os.path.exists(p):
                db_size_bytes += os.path.getsize(p)

        return {
            "total_words": total_words,
            "full_words": full_words,
            "total_proverbs": total_proverbs,
            "fr_terms": fr_terms,
            "en_terms": en_terms,
            "roots_count": roots_count,
            "demo_only": demo_only,
            "db_size_mb": round(db_size_bytes / (1024 * 1024), 2),
            "queue": queue_summary,
            "last_sync": self.get_meta("last_sync", ""),
        }

    # ------------------------------------------------------------------
    # Gestion de la file d'attente persistante (`crawl_tasks`)
    # ------------------------------------------------------------------

    def reset_interrupted_tasks(self) -> None:
        """Remet en 'pending' les tâches qui étaient 'running' lors d'un arrêt brutal."""
        with self._write_lock:
            c = self._conn()
            c.execute("UPDATE crawl_tasks SET status = 'pending' WHERE status = 'running'")
            c.commit()

    def retry_errored_tasks(self, max_attempts: int = 5) -> int:
        with self._write_lock:
            c = self._conn()
            cur = c.execute(
                "UPDATE crawl_tasks SET status = 'pending' WHERE status = 'error' AND attempts < ?",
                (max_attempts,),
            )
            c.commit()
            return cur.rowcount

    def enqueue_tasks(self, tasks: Iterable[Tuple[str, str, int]]) -> None:
        """Ajoute `(kind, key, priority)` sans écraser les tâches déjà terminées.
        Si une tâche est encore 'pending' et reçoit une meilleure priorité (plus petit nombre), on l'améliore.
        """
        batch = [(kind, key, prio, time.time()) for kind, key, prio in tasks if key is not None]
        if not batch:
            return
        with self._write_lock:
            c = self._conn()
            c.executemany(
                """
                INSERT INTO crawl_tasks(kind, key, priority, status, updated_at)
                VALUES (?, ?, ?, 'pending', ?)
                ON CONFLICT(kind, key) DO UPDATE SET
                    priority = MIN(crawl_tasks.priority, excluded.priority)
                WHERE crawl_tasks.status = 'pending'
                """,
                batch,
            )
            c.commit()

    def claim_tasks(self, kinds: Tuple[str, ...], limit: int = 20) -> List[Tuple[str, str]]:
        """Réserve atomiquement jusqu'à `limit` tâches en attente selon l'ordre des `kinds` et la priorité."""
        if not kinds:
            return []
        placeholders = ",".join("?" for _ in kinds)
        # Construit un ordre CASE pour respecter l'ordre des étapes
        case_expr = " ".join(f"WHEN ? THEN {idx}" for idx, _ in enumerate(kinds))
        params: List[Any] = list(kinds) + list(kinds) + [limit]

        with self._write_lock:
            c = self._conn()
            rows = c.execute(
                f"""
                SELECT kind, key FROM crawl_tasks
                WHERE status = 'pending' AND kind IN ({placeholders})
                ORDER BY (CASE kind {case_expr} ELSE 99 END), priority ASC, key ASC
                LIMIT ?
                """,
                params,
            ).fetchall()
            if not rows:
                return []
            now = time.time()
            claimed = [(r["kind"], r["key"]) for r in rows]
            c.executemany(
                "UPDATE crawl_tasks SET status = 'running', updated_at = ? WHERE kind = ? AND key = ?",
                [(now, k, key) for k, key in claimed],
            )
            c.commit()
            return claimed

    def mark_task_done(self, kind: str, key: str) -> None:
        with self._write_lock:
            c = self._conn()
            c.execute(
                "UPDATE crawl_tasks SET status = 'done', last_error = '', updated_at = ? WHERE kind = ? AND key = ?",
                (time.time(), kind, key),
            )
            c.commit()

    def mark_task_error(self, kind: str, key: str, error_msg: str) -> None:
        with self._write_lock:
            c = self._conn()
            c.execute(
                """
                UPDATE crawl_tasks
                SET status = CASE WHEN attempts + 1 >= 4 THEN 'error' ELSE 'pending' END,
                    attempts = attempts + 1,
                    last_error = ?,
                    updated_at = ?
                WHERE kind = ? AND key = ?
                """,
                (error_msg[:300], time.time(), kind, key),
            )
            c.commit()

    # ------------------------------------------------------------------
    # Indexation FTS5 interne
    # ------------------------------------------------------------------

    @staticmethod
    def _expand_headwords_for_fts(primary_word: str, alt_words: List[str], slug: str) -> str:
        """Inclut les variantes avec/sans tiret (`afa-po` -> `afa-po afapo afa po`) pour FTS5."""
        tokens: List[str] = []
        seen = set()
        for w in [primary_word] + alt_words + [slug]:
            w = w.strip()
            if not w:
                continue
            for variant in (w, w.replace("-", ""), w.replace("-", " "), normalize_search_token(w)):
                v = variant.strip()
                if v and v not in seen:
                    seen.add(v)
                    tokens.append(v)
        return " | ".join(tokens)

    def _refresh_word_fts(self, c: sqlite3.Connection, word_id: int) -> None:
        row = c.execute("SELECT * FROM words WHERE id = ?", (word_id,)).fetchone()
        if not row:
            return
        try:
            alts = json.loads(row["alt_words_json"] or "[]")
        except Exception:
            alts = []

        # Ajoute également les termes inverses FR/EN pointant vers ce slug pour enrichir la recherche
        rev_fr = [
            r["term"]
            for r in c.execute("SELECT term FROM reverse_index WHERE slug = ? AND lang = 'fr'", (row["slug"],))
        ]
        rev_en = [
            r["term"]
            for r in c.execute("SELECT term FROM reverse_index WHERE slug = ? AND lang = 'en'", (row["slug"],))
        ]
        gloss_fr_combined = " ; ".join(filter(None, [row["gloss_fr"]] + rev_fr))
        gloss_en_combined = " ; ".join(filter(None, [row["gloss_en"]] + rev_en))

        headwords = self._expand_headwords_for_fts(row["primary_word"], alts, row["slug"])
        c.execute("DELETE FROM words_fts WHERE rowid = ?", (word_id,))
        c.execute(
            """
            INSERT INTO words_fts(
                rowid, slug, headwords, root_word, gloss_fr, gloss_en, defs_mg, defs_fr, defs_en, examples
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                word_id,
                row["slug"],
                headwords,
                row["root_word"],
                gloss_fr_combined,
                gloss_en_combined,
                row["defs_mg_text"],
                row["defs_fr_text"],
                row["defs_en_text"],
                row["examples_text"],
            ),
        )

    # ------------------------------------------------------------------
    # Sauvegarde des données parsées (Étapes 1, 2 et 3)
    # ------------------------------------------------------------------

    def save_alpha_mg_batch(self, items: List[Dict[str, str]]) -> None:
        """Sauvegarde un lot issu de `/bins/alphaLists?lang=mg` et planifie les fiches `/bins/teny2/`."""
        if not items:
            return

        # Regroupe par slug (ex: `-a`, `a`, `a~` partagent le slug `a`)
        grouped: Dict[str, Dict[str, Any]] = {}
        root_slugs = set()

        for it in items:
            slug = it["slug"]
            w = it["word"]
            r_word = it.get("root_word", "")
            r_slug = it.get("root_slug", "")
            if r_slug:
                root_slugs.add(r_slug)
            if not r_slug and not w.startswith("-") and "~" not in w:
                # Un mot sans radical parenthésé est souvent lui-même une racine/mot de base
                root_slugs.add(slug)

            g = grouped.get(slug)
            if g is None:
                grouped[slug] = {
                    "slug": slug,
                    "words": [w],
                    "root_word": r_word,
                    "root_slug": r_slug,
                    "gloss_en": [it["gloss_en"]] if it.get("gloss_en") else [],
                    "gloss_fr": [it["gloss_fr"]] if it.get("gloss_fr") else [],
                }
            else:
                if w not in g["words"]:
                    g["words"].append(w)
                if not g["root_word"] and r_word:
                    g["root_word"] = r_word
                    g["root_slug"] = r_slug
                if it.get("gloss_en") and it["gloss_en"] not in g["gloss_en"]:
                    g["gloss_en"].append(it["gloss_en"])
                if it.get("gloss_fr") and it["gloss_fr"] not in g["gloss_fr"]:
                    g["gloss_fr"].append(it["gloss_fr"])

        with self._write_lock:
            c = self._conn()
            touched_ids: List[int] = []
            teny_tasks: List[Tuple[str, str, int]] = []
            now = time.time()

            for slug, g in grouped.items():
                # Choisit la forme principale la plus propre (sans tiret ni tilde si possible)
                clean_candidates = [w for w in g["words"] if not w.startswith("-") and "~" not in w]
                primary = clean_candidates[0] if clean_candidates else g["words"][0]
                alts = [w for w in g["words"] if w != primary]
                gloss_fr = " ; ".join(g["gloss_fr"])
                gloss_en = " ; ".join(g["gloss_en"])
                is_root = 1 if slug in root_slugs else 0

                existing = c.execute(
                    "SELECT id, alt_words_json, gloss_fr, gloss_en, is_root FROM words WHERE slug = ?",
                    (slug,),
                ).fetchone()

                if existing is None:
                    cur = c.execute(
                        """
                        INSERT INTO words(
                            slug, primary_word, norm_word, alt_words_json, lang,
                            root_word, root_slug, gloss_fr, gloss_en, is_root, is_demo
                        ) VALUES (?, ?, ?, ?, 'mg', ?, ?, ?, ?, ?, 0)
                        """,
                        (
                            slug,
                            primary,
                            normalize_search_token(primary),
                            json.dumps(alts, ensure_ascii=False),
                            g["root_word"],
                            g["root_slug"],
                            gloss_fr,
                            gloss_en,
                            is_root,
                        ),
                    )
                    touched_ids.append(int(cur.lastrowid))
                else:
                    try:
                        prev_alts = json.loads(existing["alt_words_json"] or "[]")
                    except Exception:
                        prev_alts = []
                    merged_alts = list(dict.fromkeys(prev_alts + alts))
                    new_fr = gloss_fr or existing["gloss_fr"]
                    new_en = gloss_en or existing["gloss_en"]
                    new_is_root = max(is_root, existing["is_root"])
                    c.execute(
                        """
                        UPDATE words SET
                            alt_words_json = ?,
                            root_word = CASE WHEN root_word = '' THEN ? ELSE root_word END,
                            root_slug = CASE WHEN root_slug = '' THEN ? ELSE root_slug END,
                            gloss_fr = ?,
                            gloss_en = ?,
                            is_root = ?,
                            is_demo = 0
                        WHERE id = ?
                        """,
                        (
                            json.dumps(merged_alts, ensure_ascii=False),
                            g["root_word"],
                            g["root_slug"],
                            new_fr,
                            new_en,
                            new_is_root,
                            existing["id"],
                        ),
                    )
                    touched_ids.append(int(existing["id"]))

                # Priorité intelligente :
                # 10 = racine / mot de base avec traductions FR/EN
                # 18 = racine / mot de base
                # 25 = forme dérivée ayant déjà une traduction FR/EN
                # 50 = forme fléchie secondaire
                if is_root and (gloss_fr or gloss_en):
                    prio = 10
                elif is_root:
                    prio = 18
                elif gloss_fr or gloss_en:
                    prio = 25
                else:
                    prio = 50
                teny_tasks.append(("teny2", slug, prio))

            if root_slugs:
                placeholders = ",".join("?" for _ in root_slugs)
                c.execute(f"UPDATE words SET is_root = 1 WHERE slug IN ({placeholders})", tuple(root_slugs))

            for wid in touched_ids:
                self._refresh_word_fts(c, wid)

            c.executemany(
                """
                INSERT INTO crawl_tasks(kind, key, priority, status, updated_at)
                VALUES (?, ?, ?, 'pending', ?)
                ON CONFLICT(kind, key) DO UPDATE SET
                    priority = MIN(crawl_tasks.priority, excluded.priority)
                WHERE crawl_tasks.status = 'pending'
                """,
                [(k, key, p, now) for k, key, p in teny_tasks],
            )
            c.commit()

    def save_alpha_reverse_batch(self, mappings: List[Dict[str, Any]]) -> None:
        """Sauvegarde un lot d'entrées françaises ou anglaises (`alphaLists?lang=fr|en`)."""
        if not mappings:
            return
        with self._write_lock:
            c = self._conn()
            rev_rows: List[Tuple[str, str, str, str, str]] = []
            touched_slugs = set()
            now = time.time()

            for m in mappings:
                lang = m["lang"]
                term = m["term"]
                norm_t = normalize_search_token(term)
                for tgt in m["targets"]:
                    slug = tgt["slug"]
                    mg_word = tgt["word"]
                    rev_rows.append((lang, term, norm_t, slug, mg_word))
                    touched_slugs.add((slug, mg_word))

            c.executemany(
                "INSERT OR IGNORE INTO reverse_index(lang, term, norm_term, slug, mg_word) VALUES (?, ?, ?, ?, ?)",
                rev_rows,
            )

            # S'assure que chaque mot malgache référencé existe dans `words` et reçoit une haute priorité (12)
            for slug, mg_word in touched_slugs:
                row = c.execute("SELECT id FROM words WHERE slug = ?", (slug,)).fetchone()
                if row is None:
                    cur = c.execute(
                        """
                        INSERT INTO words(slug, primary_word, norm_word, lang, is_demo)
                        VALUES (?, ?, ?, 'mg', 0)
                        """,
                        (slug, mg_word, normalize_search_token(mg_word)),
                    )
                    wid = int(cur.lastrowid)
                else:
                    wid = int(row["id"])
                self._refresh_word_fts(c, wid)

            c.executemany(
                """
                INSERT INTO crawl_tasks(kind, key, priority, status, updated_at)
                VALUES ('teny2', ?, 12, 'pending', ?)
                ON CONFLICT(kind, key) DO UPDATE SET
                    priority = MIN(crawl_tasks.priority, 12)
                WHERE crawl_tasks.status = 'pending'
                """,
                [(slug, now) for slug, _ in touched_slugs],
            )
            c.commit()

    def save_proverb_index_items(self, items: List[Dict[str, Any]]) -> None:
        """Planifie les pages `/bins/ohabolana/<slug>` découvertes dans `proverbIndex`."""
        if not items:
            return
        now = time.time()
        tasks = []
        teny_boost = []
        for it in items:
            slug = it["slug"]
            cnt = int(it.get("count", 1))
            # Plus un mot a de proverbes, plus il est prioritaire (ex: adala (83) -> prio 5)
            prio = max(5, 40 - min(cnt, 35))
            tasks.append(("ohabolana", slug, prio, now))
            teny_boost.append((slug, now))

        with self._write_lock:
            c = self._conn()
            c.executemany(
                """
                INSERT INTO crawl_tasks(kind, key, priority, status, updated_at)
                VALUES (?, ?, ?, 'pending', ?)
                ON CONFLICT(kind, key) DO UPDATE SET
                    priority = MIN(crawl_tasks.priority, excluded.priority)
                WHERE crawl_tasks.status = 'pending'
                """,
                tasks,
            )
            c.executemany(
                """
                INSERT INTO crawl_tasks(kind, key, priority, status, updated_at)
                VALUES ('teny2', ?, 8, 'pending', ?)
                ON CONFLICT(kind, key) DO UPDATE SET
                    priority = MIN(crawl_tasks.priority, 8)
                WHERE crawl_tasks.status = 'pending'
                """,
                teny_boost,
            )
            c.commit()

    def save_ohabolana_parsed(self, parsed: Dict[str, Any], is_demo: bool = False) -> int:
        """Sauvegarde tous les proverbes extraits d'une page `/bins/ohabolana/<slug>`."""
        proverbs = parsed.get("proverbs", [])
        if not proverbs:
            return 0

        inserted_or_updated = 0
        with self._write_lock:
            c = self._conn()
            for p in proverbs:
                p_hash = p.get("hash")
                if not p_hash:
                    continue
                existing = c.execute("SELECT id, trans_fr_json, trans_en_json, interp_mg_json FROM proverbs WHERE hash = ?", (p_hash,)).fetchone()
                if existing is None:
                    cur = c.execute(
                        """
                        INSERT INTO proverbs(
                            hash, text_mg, html_mg, variants_json, interp_mg_json,
                            trans_fr_json, interp_fr_json, trans_en_json, interp_en_json, notes_json, is_demo
                        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                        """,
                        (
                            p_hash,
                            p["text_mg"],
                            p["html_mg"],
                            json.dumps(p["variants"], ensure_ascii=False),
                            json.dumps(p["interp_mg"], ensure_ascii=False),
                            json.dumps(p["trans_fr"], ensure_ascii=False),
                            json.dumps(p["interp_fr"], ensure_ascii=False),
                            json.dumps(p["trans_en"], ensure_ascii=False),
                            json.dumps(p["interp_en"], ensure_ascii=False),
                            json.dumps(p["notes"], ensure_ascii=False),
                            1 if is_demo else 0,
                        ),
                    )
                    pid = int(cur.lastrowid)
                    c.execute(
                        """
                        INSERT INTO proverbs_fts(rowid, proverb_id, text_mg, trans_fr, interp_mg, interp_fr, trans_en)
                        VALUES (?, ?, ?, ?, ?, ?, ?)
                        """,
                        (
                            pid,
                            str(pid),
                            " | ".join(v["text"] for v in p["variants"]),
                            " | ".join(x["text"] for x in p["trans_fr"]),
                            " | ".join(x["text"] for x in p["interp_mg"]),
                            " | ".join(x["text"] for x in p["interp_fr"]),
                            " | ".join(x["text"] for x in p["trans_en"]),
                        ),
                    )
                    inserted_or_updated += 1
                else:
                    pid = int(existing["id"])
                    if not is_demo:
                        c.execute("UPDATE proverbs SET is_demo = 0 WHERE id = ?", (pid,))

                for w_slug in p.get("word_slugs", []):
                    c.execute(
                        "INSERT OR IGNORE INTO proverb_words(proverb_id, slug) VALUES (?, ?)",
                        (pid, w_slug),
                    )

            c.commit()
        return inserted_or_updated

    def save_teny2_parsed(self, parsed: Dict[str, Any], is_demo: bool = False) -> None:
        """Enregistre une fiche complète `/bins/teny2/<slug>` dans `words` + `words_fts`."""
        slug = parsed["slug"]
        entries = parsed.get("entries", [])
        anagrams = parsed.get("anagrams", [])
        updated_at = parsed.get("updated_at", "")

        # Synthétise les champs texte pour l'affichage rapide dans les listes et FTS5
        headwords_seen: List[str] = []
        pos_list: List[str] = []
        roots_words: List[str] = []
        first_root_slug = ""
        defs_mg_parts: List[str] = []
        defs_fr_parts: List[str] = []
        defs_en_parts: List[str] = []
        examples_parts: List[str] = []
        primary_lang = "mg"

        for idx, ent in enumerate(entries):
            hw = ent.get("headword", "").strip()
            if hw and hw not in headwords_seen:
                headwords_seen.append(hw)
            if idx == 0 and ent.get("lang"):
                primary_lang = ent["lang"]
            pos = ent.get("pos", "").strip()
            if pos and pos not in pos_list:
                pos_list.append(pos)
            for r in ent.get("roots", []):
                rw = r.get("word", "").strip()
                if rw and rw not in roots_words:
                    roots_words.append(rw)
                if not first_root_slug and r.get("slug"):
                    first_root_slug = r["slug"]
            for d in ent.get("defs_mg", []):
                defs_mg_parts.append(d["text"])
            for d in ent.get("defs_fr", []):
                defs_fr_parts.append(d["text"])
            for d in ent.get("defs_en", []):
                defs_en_parts.append(d["text"])
            for ex in ent.get("examples", []):
                examples_parts.append(ex["text"])

        primary_word = headwords_seen[0] if headwords_seen else slug
        alt_from_entries = headwords_seen[1:]
        pos_summary = ", ".join(pos_list)
        root_word = ", ".join(roots_words)
        defs_mg_text = " | ".join(defs_mg_parts)
        defs_fr_text = " | ".join(defs_fr_parts)
        defs_en_text = " | ".join(defs_en_parts)
        examples_text = " | ".join(examples_parts)

        # Déduit une glose courte FR/EN si la fiche n'était pas passée par alphaLists
        short_fr = defs_fr_parts[0][:160] if defs_fr_parts else ""
        short_en = defs_en_parts[0][:160] if defs_en_parts else ""

        with self._write_lock:
            c = self._conn()
            existing = c.execute(
                "SELECT id, primary_word, alt_words_json, root_word, root_slug, gloss_fr, gloss_en, is_root FROM words WHERE slug = ?",
                (slug,),
            ).fetchone()

            is_root_flag = 1 if (not first_root_slug and any(ent.get("derivatives") for ent in entries)) else 0

            if existing is None:
                cur = c.execute(
                    """
                    INSERT INTO words(
                        slug, primary_word, norm_word, alt_words_json, lang,
                        root_word, root_slug, pos_summary, gloss_fr, gloss_en,
                        defs_mg_text, defs_fr_text, defs_en_text, examples_text,
                        entries_json, anagrams_json, updated_date, is_full, is_root, is_demo
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?, ?)
                    """,
                    (
                        slug,
                        primary_word,
                        normalize_search_token(primary_word),
                        json.dumps(alt_from_entries, ensure_ascii=False),
                        primary_lang,
                        root_word,
                        first_root_slug,
                        pos_summary,
                        short_fr,
                        short_en,
                        defs_mg_text,
                        defs_fr_text,
                        defs_en_text,
                        examples_text,
                        json.dumps(entries, ensure_ascii=False),
                        json.dumps(anagrams, ensure_ascii=False),
                        updated_at,
                        is_root_flag,
                        1 if is_demo else 0,
                    ),
                )
                wid = int(cur.lastrowid)
            else:
                try:
                    prev_alts = json.loads(existing["alt_words_json"] or "[]")
                except Exception:
                    prev_alts = []
                merged_alts = list(dict.fromkeys(prev_alts + alt_from_entries))
                c.execute(
                    """
                    UPDATE words SET
                        primary_word = ?,
                        norm_word = ?,
                        alt_words_json = ?,
                        lang = ?,
                        root_word = CASE WHEN ? != '' THEN ? ELSE root_word END,
                        root_slug = CASE WHEN ? != '' THEN ? ELSE root_slug END,
                        pos_summary = ?,
                        gloss_fr = CASE WHEN gloss_fr = '' THEN ? ELSE gloss_fr END,
                        gloss_en = CASE WHEN gloss_en = '' THEN ? ELSE gloss_en END,
                        defs_mg_text = ?,
                        defs_fr_text = ?,
                        defs_en_text = ?,
                        examples_text = ?,
                        entries_json = ?,
                        anagrams_json = ?,
                        updated_date = ?,
                        is_full = 1,
                        is_root = MAX(is_root, ?),
                        is_demo = CASE WHEN ? = 0 THEN 0 ELSE is_demo END
                    WHERE id = ?
                    """,
                    (
                        primary_word,
                        normalize_search_token(primary_word),
                        json.dumps(merged_alts, ensure_ascii=False),
                        primary_lang,
                        root_word, root_word,
                        first_root_slug, first_root_slug,
                        pos_summary,
                        short_fr,
                        short_en,
                        defs_mg_text,
                        defs_fr_text,
                        defs_en_text,
                        examples_text,
                        json.dumps(entries, ensure_ascii=False),
                        json.dumps(anagrams, ensure_ascii=False),
                        updated_at,
                        is_root_flag,
                        1 if is_demo else 0,
                        existing["id"],
                    ),
                )
                wid = int(existing["id"])

            self._refresh_word_fts(c, wid)

            # Planifie aussi les pages de proverbes éventuellement découvertes sur la fiche
            ohab_slugs = parsed.get("discovered_ohabolana_slugs", [])
            if ohab_slugs and not is_demo:
                now = time.time()
                c.executemany(
                    """
                    INSERT INTO crawl_tasks(kind, key, priority, status, updated_at)
                    VALUES ('ohabolana', ?, 20, 'pending', ?)
                    ON CONFLICT(kind, key) DO NOTHING
                    """,
                    [(oslug, now) for oslug in ohab_slugs],
                )

            c.commit()

    # ------------------------------------------------------------------
    # Requête de lecture & Recherche hors-ligne ultra-rapide
    # ------------------------------------------------------------------

    @staticmethod
    def _build_fts_query(raw_query: str, scope: str = "all") -> Optional[str]:
        """Construit une requête FTS5 sûre avec correspondance par préfixe."""
        # Garde uniquement lettres/chiffres Unicode
        tokens = re.findall(r"[\w]+", normalize_search_token(raw_query), flags=re.UNICODE)
        tokens = [t for t in tokens if t]
        if not tokens:
            return None

        col_prefix = ""
        if scope == "mg":
            col_prefix = "{headwords root_word defs_mg examples} : "
        elif scope == "fr":
            col_prefix = "{gloss_fr defs_fr headwords} : "
        elif scope == "en":
            col_prefix = "{gloss_en defs_en headwords} : "
        elif scope == "roots":
            col_prefix = "{headwords root_word} : "

        parts = []
        for idx, tok in enumerate(tokens):
            if idx == len(tokens) - 1:
                parts.append(f'"{tok}"*')
            else:
                parts.append(f'"{tok}"')
        return col_prefix + " AND ".join(parts)

    def search_words(self, query: str, scope: str = "all", limit: int = 40) -> List[Dict[str, Any]]:
        c = self._conn()
        q_clean = query.strip()

        if not q_clean:
            # Sans requête : affiche les fiches complètes et racines les plus riches
            where = "WHERE is_root = 1" if scope == "roots" else ""
            rows = c.execute(
                f"""
                SELECT slug, primary_word, lang, root_word, root_slug, pos_summary,
                       gloss_fr, gloss_en, defs_mg_text, defs_fr_text, defs_en_text, is_full, is_root
                FROM words
                {where}
                ORDER BY is_full DESC, is_root DESC, primary_word COLLATE NOCASE ASC
                LIMIT ?
                """,
                (limit,),
            ).fetchall()
            return [self._word_summary_dict(r) for r in rows]

        norm_q = normalize_search_token(q_clean)
        norm_q_no_hyphen = norm_q.replace("-", "")
        fts_expr = self._build_fts_query(q_clean, scope=scope)
        results: List[Dict[str, Any]] = []
        seen_slugs = set()

        # 1. Correspondances exactes sur mot malgache ou index inverse FR/EN en tête
        if scope in ("all", "mg", "roots"):
            exact_sql = """
                SELECT slug, primary_word, lang, root_word, root_slug, pos_summary,
                       gloss_fr, gloss_en, defs_mg_text, defs_fr_text, defs_en_text, is_full, is_root
                FROM words
                WHERE (norm_word = ? OR REPLACE(norm_word, '-', '') = ? OR slug = ?)
            """
            if scope == "roots":
                exact_sql += " AND is_root = 1"
            exact_sql += " ORDER BY is_full DESC LIMIT 10"
            for r in c.execute(exact_sql, (norm_q, norm_q_no_hyphen, norm_q)):
                seen_slugs.add(r["slug"])
                results.append(self._word_summary_dict(r))

        if scope in ("all", "fr", "en") and len(results) < limit:
            lang_filter = "AND r.lang = ?" if scope in ("fr", "en") else ""
            params: List[Any] = [norm_q]
            if scope in ("fr", "en"):
                params.append(scope)
            params.append(15)
            rev_rows = c.execute(
                f"""
                SELECT DISTINCT w.slug, w.primary_word, w.lang, w.root_word, w.root_slug, w.pos_summary,
                       w.gloss_fr, w.gloss_en, w.defs_mg_text, w.defs_fr_text, w.defs_en_text, w.is_full, w.is_root
                FROM reverse_index r
                JOIN words w ON w.slug = r.slug
                WHERE r.norm_term = ? {lang_filter}
                ORDER BY w.is_full DESC, w.is_root DESC
                LIMIT ?
                """,
                params,
            ).fetchall()
            for r in rev_rows:
                if r["slug"] not in seen_slugs:
                    seen_slugs.add(r["slug"])
                    results.append(self._word_summary_dict(r))

        # 2. Recherche plein-texte FTS5 avec pondération BM25
        if fts_expr and len(results) < limit:
            root_clause = "AND w.is_root = 1" if scope == "roots" else ""
            fts_rows = c.execute(
                f"""
                SELECT w.slug, w.primary_word, w.lang, w.root_word, w.root_slug, w.pos_summary,
                       w.gloss_fr, w.gloss_en, w.defs_mg_text, w.defs_fr_text, w.defs_en_text, w.is_full, w.is_root,
                       bm25(words_fts, 0.0, 22.0, 8.0, 14.0, 14.0, 5.0, 7.0, 7.0, 2.0) AS score
                FROM words_fts
                JOIN words w ON w.id = words_fts.rowid
                WHERE words_fts MATCH ? {root_clause}
                ORDER BY
                    (CASE WHEN w.norm_word LIKE ? THEN 0 ELSE 1 END) ASC,
                    score ASC,
                    w.is_full DESC
                LIMIT ?
                """,
                (fts_expr, f"{norm_q}%", limit),
            ).fetchall()
            for r in fts_rows:
                if r["slug"] not in seen_slugs:
                    seen_slugs.add(r["slug"])
                    results.append(self._word_summary_dict(r))
                    if len(results) >= limit:
                        break

        return results[:limit]

    @staticmethod
    def _word_summary_dict(row: sqlite3.Row) -> Dict[str, Any]:
        preview_fr = row["gloss_fr"] or row["defs_fr_text"][:160]
        preview_en = row["gloss_en"] or row["defs_en_text"][:160]
        preview_mg = row["defs_mg_text"][:180]
        return {
            "slug": row["slug"],
            "word": row["primary_word"],
            "lang": row["lang"],
            "root_word": row["root_word"],
            "root_slug": row["root_slug"],
            "pos": row["pos_summary"],
            "preview_fr": preview_fr.split(" | ")[0] if preview_fr else "",
            "preview_en": preview_en.split(" | ")[0] if preview_en else "",
            "preview_mg": preview_mg.split(" | ")[0] if preview_mg else "",
            "is_full": bool(row["is_full"]),
            "is_root": bool(row["is_root"]),
        }

    def get_word_detail(self, slug: str) -> Optional[Dict[str, Any]]:
        c = self._conn()
        row = c.execute("SELECT * FROM words WHERE slug = ?", (slug,)).fetchone()
        if row is None:
            # Essaie une correspondance normalisée au cas où l'utilisateur passe le mot avec accents/espaces
            norm = normalize_search_token(slug)
            row = c.execute("SELECT * FROM words WHERE norm_word = ? LIMIT 1", (norm,)).fetchone()
        if row is None:
            return None

        actual_slug = row["slug"]
        entries = json.loads(row["entries_json"] or "[]")
        anagrams = json.loads(row["anagrams_json"] or "[]")
        alt_words = json.loads(row["alt_words_json"] or "[]")

        # Récupère les termes inverses FR & EN associés
        rev_fr = [
            r["term"]
            for r in c.execute("SELECT term FROM reverse_index WHERE slug = ? AND lang = 'fr' ORDER BY term", (actual_slug,))
        ]
        rev_en = [
            r["term"]
            for r in c.execute("SELECT term FROM reverse_index WHERE slug = ? AND lang = 'en' ORDER BY term", (actual_slug,))
        ]

        # Récupère les mots partageant le même radical présents dans la base
        family_slug = row["root_slug"] or (actual_slug if row["is_root"] else "")
        family_words: List[Dict[str, str]] = []
        if family_slug:
            fam_rows = c.execute(
                """
                SELECT slug, primary_word, pos_summary, gloss_fr
                FROM words
                WHERE (root_slug = ? OR slug = ?) AND slug != ?
                ORDER BY is_full DESC, primary_word ASC
                LIMIT 36
                """,
                (family_slug, family_slug, actual_slug),
            ).fetchall()
            family_words = [
                {
                    "slug": fr["slug"],
                    "word": fr["primary_word"],
                    "pos": fr["pos_summary"],
                    "gloss_fr": fr["gloss_fr"][:80],
                }
                for fr in fam_rows
            ]

        # Récupère les proverbes associés au mot
        proverbs = self.get_proverbs_for_slug(actual_slug, limit=100)

        return {
            "slug": actual_slug,
            "word": row["primary_word"],
            "alt_words": alt_words,
            "lang": row["lang"],
            "root_word": row["root_word"],
            "root_slug": row["root_slug"],
            "pos": row["pos_summary"],
            "gloss_fr": row["gloss_fr"],
            "gloss_en": row["gloss_en"],
            "reverse_fr": rev_fr,
            "reverse_en": rev_en,
            "entries": entries,
            "anagrams": anagrams,
            "family_words": family_words,
            "proverbs": proverbs,
            "updated_date": row["updated_date"],
            "is_full": bool(row["is_full"]),
            "is_root": bool(row["is_root"]),
        }

    def get_proverbs_for_slug(self, slug: str, limit: int = 80) -> List[Dict[str, Any]]:
        c = self._conn()
        rows = c.execute(
            """
            SELECT p.*
            FROM proverb_words pw
            JOIN proverbs p ON p.id = pw.proverb_id
            WHERE pw.slug = ?
            ORDER BY p.id ASC
            LIMIT ?
            """,
            (slug, limit),
        ).fetchall()
        return [self._proverb_dict(r) for r in rows]

    def search_proverbs(self, query: str = "", limit: int = 40) -> List[Dict[str, Any]]:
        c = self._conn()
        q = query.strip()
        if not q:
            rows = c.execute("SELECT * FROM proverbs ORDER BY id ASC LIMIT ?", (limit,)).fetchall()
            return [self._proverb_dict(r) for r in rows]

        tokens = re.findall(r"[\w]+", normalize_search_token(q), flags=re.UNICODE)
        if not tokens:
            return []
        fts_q = " AND ".join(
            f'"{tok}"*' if idx == len(tokens) - 1 else f'"{tok}"'
            for idx, tok in enumerate(tokens)
        )
        rows = c.execute(
            """
            SELECT p.*, bm25(proverbs_fts, 0.0, 12.0, 10.0, 6.0, 6.0, 8.0) AS score
            FROM proverbs_fts
            JOIN proverbs p ON p.id = proverbs_fts.rowid
            WHERE proverbs_fts MATCH ?
            ORDER BY score ASC
            LIMIT ?
            """,
            (fts_q, limit),
        ).fetchall()
        return [self._proverb_dict(r) for r in rows]

    def get_random_discovery(self) -> Dict[str, Any]:
        c = self._conn()
        w_row = c.execute(
            "SELECT slug FROM words WHERE is_full = 1 ORDER BY RANDOM() LIMIT 1"
        ).fetchone()
        if not w_row:
            w_row = c.execute("SELECT slug FROM words ORDER BY RANDOM() LIMIT 1").fetchone()
        p_row = c.execute("SELECT * FROM proverbs ORDER BY RANDOM() LIMIT 1").fetchone()
        return {
            "word": self.get_word_detail(w_row["slug"]) if w_row else None,
            "proverb": self._proverb_dict(p_row) if p_row else None,
        }

    @staticmethod
    def _proverb_dict(row: sqlite3.Row) -> Dict[str, Any]:
        return {
            "id": row["id"],
            "text_mg": row["text_mg"],
            "html_mg": row["html_mg"],
            "variants": json.loads(row["variants_json"] or "[]"),
            "interp_mg": json.loads(row["interp_mg_json"] or "[]"),
            "trans_fr": json.loads(row["trans_fr_json"] or "[]"),
            "interp_fr": json.loads(row["interp_fr_json"] or "[]"),
            "trans_en": json.loads(row["trans_en_json"] or "[]"),
            "interp_en": json.loads(row["interp_en_json"] or "[]"),
            "notes": json.loads(row["notes_json"] or "[]"),
        }
