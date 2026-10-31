# -*- coding: utf-8 -*-
"""Moteur de téléchargement « Mode Complet » avec Keep-Alive, compression gzip et reprise automatique.

Conçu spécialement pour être :
- Économe en data (`Accept-Encoding: gzip` divise par ~4 le volume transféré sur le réseau),
- Rapide malgré la latence (`Connection: keep-alive` réutilise la connexion TLS sans refaire le handshake),
- Respectueux du serveur (`motmalgache.org` / `malagasyword.org`),
- 100 % résilient aux coupures Internet ou d'électricité (sauvegarde continue dans SQLite).
"""

from __future__ import annotations

import gzip
import http.client
import socket
import ssl
import threading
import time
import zlib
from collections import deque
from typing import Any, Callable, Deque, Dict, List, Optional, Tuple
from urllib.parse import quote, urlparse

from .database import DictionaryDB
from .parser import (
    parse_alpha_list_mg,
    parse_alpha_list_reverse,
    parse_ohabolana_page,
    parse_proverb_index,
    parse_teny2_page,
)

MIRROR_HOSTS = ("motmalgache.org", "malagasyword.org")

SPEED_PROFILES: Dict[str, Dict[str, Any]] = {
    "prudent": {"workers": 2, "delay": 0.35, "label": "Prudent (2 connexions, très doux)"},
    "equilibre": {"workers": 4, "delay": 0.12, "label": "Équilibré (4 connexions Keep-Alive — recommandé)"},
    "rapide": {"workers": 6, "delay": 0.04, "label": "Rapide (6 connexions Keep-Alive, fibre)"},
}

MODE_PROFILES: Dict[str, Tuple[str, ...]] = {
    "express": ("alpha_mg", "alpha_fr", "alpha_en", "proverb_idx", "ohabolana"),
    "complet": ("alpha_mg", "alpha_fr", "alpha_en", "proverb_idx", "ohabolana", "teny2"),
}

USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "MalagasyWord-PersonalOfflineCache/1.0 (+personal-study)"
)


class NetworkUnreachableError(RuntimeError):
    """Levée lorsque le poste n'a pas accès à motmalgache.org / malagasyword.org."""


class _KeepAliveClient:
    """Client HTTPS persistant (1 par thread worker) avec compression gzip et bascule miroir."""

    def __init__(self, timeout: float = 20.0) -> None:
        self.timeout = timeout
        self._host_idx = 0
        self._conn: Optional[http.client.HTTPSConnection] = None
        self._unverified_ssl = False

    @property
    def current_host(self) -> str:
        return MIRROR_HOSTS[self._host_idx % len(MIRROR_HOSTS)]

    def close(self) -> None:
        if self._conn is not None:
            try:
                self._conn.close()
            except Exception:
                pass
            self._conn = None

    def _make_ssl_context(self) -> ssl.SSLContext:
        if self._unverified_ssl:
            return ssl._create_unverified_context()
        return ssl.create_default_context()

    def _ensure_conn(self) -> http.client.HTTPSConnection:
        if self._conn is None:
            self._conn = http.client.HTTPSConnection(
                self.current_host,
                port=443,
                timeout=self.timeout,
                context=self._make_ssl_context(),
            )
        return self._conn

    def get_html(self, path_and_query: str) -> Optional[str]:
        """Télécharge `path_and_query` (ex: `/bins/teny2/trano`).
        Retourne `None` si la page n'existe pas (HTTP 404).
        """
        last_exc: Optional[Exception] = None

        for attempt in range(4):
            try:
                conn = self._ensure_conn()
                headers = {
                    "Host": self.current_host,
                    "User-Agent": USER_AGENT,
                    "Accept": "text/html,application/xhtml+xml,*/*;q=0.8",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "fr,mg;q=0.9,en;q=0.8",
                    "Connection": "keep-alive",
                }
                conn.request("GET", path_and_query, headers=headers)
                resp = conn.getresponse()
                raw = resp.read()
                status = resp.status

                if status == 404:
                    return None

                if status in (301, 302, 303, 307, 308):
                    loc = resp.getheader("Location", "")
                    if loc:
                        parsed = urlparse(loc)
                        new_path = parsed.path or "/"
                        if parsed.query:
                            new_path += "?" + parsed.query
                        path_and_query = new_path
                        continue

                if status in (429, 502, 503, 504):
                    self.close()
                    time.sleep(1.5 * (attempt + 1))
                    self._host_idx += 1
                    continue

                if status >= 400:
                    raise RuntimeError(f"HTTP {status} sur {path_and_query}")

                enc = (resp.getheader("Content-Encoding") or "").lower()
                if "gzip" in enc:
                    raw = gzip.decompress(raw)
                elif "deflate" in enc:
                    try:
                        raw = zlib.decompress(raw)
                    except zlib.error:
                        raw = zlib.decompress(raw, -zlib.MAX_WBITS)

                try:
                    return raw.decode("utf-8")
                except UnicodeDecodeError:
                    return raw.decode("latin-1", errors="replace")

            except ssl.SSLCertVerificationError:
                # Certains postes Windows/Linux anciens n'ont pas la chaîne intermédiaire du site
                self.close()
                self._unverified_ssl = True
                continue
            except (
                http.client.HTTPException,
                OSError,
                socket.timeout,
                ConnectionError,
            ) as exc:
                last_exc = exc
                self.close()
                if attempt >= 1:
                    self._host_idx += 1
                time.sleep(0.6 * (attempt + 1))

        raise NetworkUnreachableError(f"Échec réseau après 4 essais ({path_and_query}) : {last_exc}")


def check_remote_reachable(timeout: float = 6.0) -> Tuple[bool, str]:
    """Vérifie rapidement si `motmalgache.org` ou `malagasyword.org` est joignable depuis cette machine."""
    client = _KeepAliveClient(timeout=timeout)
    try:
        html_txt = client.get_html("/robots.txt")
        if html_txt is not None:
            return True, f"Connecté à {client.current_host}"
        return True, f"Connecté à {client.current_host}"
    except Exception as exc:
        return False, str(exc)
    finally:
        client.close()


class OfflineSyncManager:
    """Orchestre le téléchargement complet (Étapes 1, 2 et 3) en tâche de fond ou en CLI."""

    def __init__(self, db: DictionaryDB) -> None:
        self.db = db
        self._lock = threading.RLock()
        self._stop_event = threading.Event()
        self._threads: List[threading.Thread] = []
        self._coordinator: Optional[threading.Thread] = None

        self.running: bool = False
        self.mode: str = "complet"
        self.speed: str = "equilibre"
        self.phase_label: str = "En veille"
        self.last_message: str = "Prêt à démarrer ou reprendre la synchronisation."
        self.error_banner: str = ""
        self.sandbox_blocked: bool = False
        self.started_at: float = 0.0
        self.processed_in_session: int = 0
        self.bytes_saved_hint: int = 0
        self._recent_timestamps: Deque[float] = deque(maxlen=120)
        self._recent_items: Deque[str] = deque(maxlen=8)

    def seed_initial_index_tasks(self) -> None:
        """Garantit que les 4 racines d'index de l'Étape 1 existent dans `crawl_tasks`."""
        self.db.enqueue_tasks([
            ("alpha_mg", "", 1),
            ("alpha_fr", "", 2),
            ("alpha_en", "", 3),
            ("proverb_idx", "", 4),
        ])

    def start(self, mode: str = "complet", speed: str = "equilibre") -> Dict[str, Any]:
        with self._lock:
            if self.running:
                return self.get_status()

            if mode not in MODE_PROFILES:
                mode = "complet"
            if speed not in SPEED_PROFILES:
                speed = "equilibre"

            ok, info = check_remote_reachable(timeout=5.0)
            if not ok:
                self.error_banner = (
                    "Impossible de joindre motmalgache.org / malagasyword.org depuis cet environnement. "
                    "Si vous êtes dans l'aperçu en ligne Arena, téléchargez le pack .zip sur votre ordinateur "
                    "puis lancez LANCER_WINDOWS.bat (ou ./lancer.sh) chez vous avec votre connexion Internet."
                )
                self.sandbox_blocked = True
                self.phase_label = "Connexion bloquée ici"
                return self.get_status()

            self.sandbox_blocked = False
            self.error_banner = ""
            self.mode = mode
            self.speed = speed
            self._stop_event.clear()
            self.running = True
            self.started_at = time.time()
            self.processed_in_session = 0
            self._recent_timestamps.clear()
            self.phase_label = "Initialisation…"
            self.last_message = f"{info} — reprise de la file d'attente…"

            self.db.reset_interrupted_tasks()
            self.db.retry_errored_tasks()
            self.seed_initial_index_tasks()

            self._coordinator = threading.Thread(
                target=self._run_coordinator,
                name="mw-sync-coordinator",
                daemon=True,
            )
            self._coordinator.start()
            return self.get_status()

    def stop(self) -> Dict[str, Any]:
        with self._lock:
            if not self.running:
                return self.get_status()
            self._stop_event.set()
            self.phase_label = "Mise en pause…"
            self.last_message = "Arrêt propre en cours (sauvegarde SQLite garantie)…"
        return self.get_status()

    def wait_until_finished(self, progress_callback: Optional[Callable[[Dict[str, Any]], None]] = None) -> None:
        while self.running:
            if progress_callback:
                progress_callback(self.get_status())
            time.sleep(1.0)
        if progress_callback:
            progress_callback(self.get_status())

    def get_status(self) -> Dict[str, Any]:
        stats = self.db.get_stats()
        q = stats["queue"]

        def sum_stage(kinds: Tuple[str, ...]) -> Dict[str, int]:
            done = sum(q.get(k, {}).get("done", 0) for k in kinds)
            pending = sum(
                q.get(k, {}).get("pending", 0) + q.get(k, {}).get("running", 0)
                for k in kinds
            )
            err = sum(q.get(k, {}).get("error", 0) for k in kinds)
            total = done + pending + err
            pct = int(round(100.0 * done / total)) if total > 0 else 0
            return {"done": done, "pending": pending, "error": err, "total": total, "percent": pct}

        s1 = sum_stage(("alpha_mg", "alpha_fr", "alpha_en", "proverb_idx"))
        s2 = sum_stage(("ohabolana",))
        s3 = sum_stage(("teny2",))

        # Débit instantané (pages/sec)
        now = time.time()
        recent = [ts for ts in self._recent_timestamps if now - ts <= 20.0]
        rate = round(len(recent) / 20.0, 1) if len(recent) >= 3 else 0.0

        remaining_total = s1["pending"] + s2["pending"] + (s3["pending"] if self.mode == "complet" else 0)
        eta_seconds = int(remaining_total / rate) if rate > 0.2 and remaining_total > 0 else None

        return {
            "running": self.running,
            "mode": self.mode,
            "speed": self.speed,
            "speed_profiles": SPEED_PROFILES,
            "phase_label": self.phase_label,
            "last_message": self.last_message,
            "error_banner": self.error_banner,
            "sandbox_blocked": self.sandbox_blocked,
            "rate_pages_per_sec": rate,
            "eta_seconds": eta_seconds,
            "processed_in_session": self.processed_in_session,
            "recent_items": list(self._recent_items),
            "stages": {
                "stage1_index": s1,
                "stage2_proverbs": s2,
                "stage3_words": s3,
            },
            "stats": stats,
        }

    # ------------------------------------------------------------------
    # Exécution interne des workers Keep-Alive
    # ------------------------------------------------------------------

    @staticmethod
    def _build_url(kind: str, key: str) -> str:
        if kind == "alpha_mg":
            return f"/bins/alphaLists?lang=mg&range={quote(key, safe='-_.~')}" if key else "/bins/alphaLists?lang=mg"
        if kind == "alpha_fr":
            return f"/bins/alphaLists?lang=fr&range={quote(key, safe='-_.~')}" if key else "/bins/alphaLists?lang=fr"
        if kind == "alpha_en":
            return f"/bins/alphaLists?lang=en&range={quote(key, safe='-_.~')}" if key else "/bins/alphaLists?lang=en"
        if kind == "proverb_idx":
            return f"/bins/proverbIndex?i={quote(key, safe='-_.~')}" if key else "/bins/proverbIndex"
        if kind == "ohabolana":
            return f"/bins/ohabolana/{quote(key, safe='-_.~')}"
        if kind == "teny2":
            return f"/bins/teny2/{quote(key, safe='-_.~')}"
        raise ValueError(f"Type de tâche inconnu : {kind}")

    def _execute_single_task(self, client: _KeepAliveClient, kind: str, key: str) -> str:
        url = self._build_url(kind, key)
        html_text = client.get_html(url)
        if html_text is None:
            return f"{kind}:{key} (404 ignoré)"

        if kind == "alpha_mg":
            parsed = parse_alpha_list_mg(html_text)
            if parsed["ranges"]:
                self.db.enqueue_tasks([("alpha_mg", r, 1) for r in parsed["ranges"]])
            self.db.save_alpha_mg_batch(parsed["words"])
            return f"Index MG [{key or 'a-aba'}] : +{len(parsed['words'])} mots"

        if kind in ("alpha_fr", "alpha_en"):
            lang = "fr" if kind == "alpha_fr" else "en"
            parsed = parse_alpha_list_reverse(html_text, lang=lang)
            if parsed["ranges"]:
                prio = 2 if lang == "fr" else 3
                self.db.enqueue_tasks([(kind, r, prio) for r in parsed["ranges"]])
            self.db.save_alpha_reverse_batch(parsed["mappings"])
            return f"Index {lang.upper()} [{key or 'a'}] : +{len(parsed['mappings'])} entrées"

        if kind == "proverb_idx":
            parsed = parse_proverb_index(html_text)
            if parsed["letters"]:
                self.db.enqueue_tasks([("proverb_idx", lt, 4) for lt in parsed["letters"]])
            self.db.save_proverb_index_items(parsed["items"])
            return f"Index Proverbes [{key or 'a'}] : +{len(parsed['items'])} mots"

        if kind == "ohabolana":
            parsed = parse_ohabolana_page(html_text, page_slug=key)
            added = self.db.save_ohabolana_parsed(parsed, is_demo=False)
            return f"Proverbes « {key} » (+{added} nouveaux)"

        if kind == "teny2":
            parsed = parse_teny2_page(html_text, page_slug=key)
            self.db.save_teny2_parsed(parsed, is_demo=False)
            return f"Fiche « {key} »"

        return f"{kind}:{key}"

    def _run_coordinator(self) -> None:
        profile = SPEED_PROFILES[self.speed]
        num_workers = int(profile["workers"])
        delay = float(profile["delay"])
        allowed_kinds = MODE_PROFILES[self.mode]

        workers = [
            threading.Thread(
                target=self._worker_loop,
                args=(allowed_kinds, delay),
                name=f"mw-worker-{idx}",
                daemon=True,
            )
            for idx in range(num_workers)
        ]
        self._threads = workers
        for w in workers:
            w.start()
        for w in workers:
            w.join()

        self.db.reset_interrupted_tasks()
        self.db.set_meta("last_sync", time.strftime("%Y-%m-%d %H:%M:%S"))

        with self._lock:
            self.running = False
            if self._stop_event.is_set():
                self.phase_label = "En pause (reprise prête)"
                self.last_message = "Synchronisation mise en pause. Relancez à tout moment pour reprendre exactement ici."
            elif not self.error_banner:
                self.phase_label = "Synchronisation terminée ✓"
                self.last_message = "Toutes les tâches sélectionnées sont enregistrées hors-ligne dans SQLite !"
        self.db.close_thread_conn()

    def _worker_loop(self, allowed_kinds: Tuple[str, ...], delay: float) -> None:
        client = _KeepAliveClient(timeout=20.0)
        consecutive_net_failures = 0
        try:
            while not self._stop_event.is_set():
                tasks = self.db.claim_tasks(allowed_kinds, limit=6)
                if not tasks:
                    # Attend brièvement au cas où un autre worker d'index (Étape 1) soit en train d'ajouter des plages
                    time.sleep(0.8)
                    tasks = self.db.claim_tasks(allowed_kinds, limit=6)
                    if not tasks:
                        break

                for kind, key in tasks:
                    if self._stop_event.is_set():
                        break
                    self._update_phase_label(kind)
                    try:
                        summary = self._execute_single_task(client, kind, key)
                        self.db.mark_task_done(kind, key)
                        consecutive_net_failures = 0
                        with self._lock:
                            self.processed_in_session += 1
                            self._recent_timestamps.append(time.time())
                            self._recent_items.appendleft(summary)
                            self.last_message = summary
                    except Exception as exc:
                        self.db.mark_task_error(kind, key, str(exc))
                        consecutive_net_failures += 1
                        if consecutive_net_failures >= 8:
                            with self._lock:
                                self.error_banner = (
                                    f"Connexion interrompue ({exc}). Mise en pause automatique — "
                                    "cliquez sur « Reprendre » dès que la connexion Internet revient."
                                )
                            self._stop_event.set()
                            break
                    if delay > 0 and not self._stop_event.is_set():
                        time.sleep(delay)
        finally:
            client.close()
            self.db.close_thread_conn()

    def _update_phase_label(self, kind: str) -> None:
        labels = {
            "alpha_mg": "Étape 1/3 — Index des 109 000 mots malgaches",
            "alpha_fr": "Étape 1/3 — Index des 34 000 mots français",
            "alpha_en": "Étape 1/3 — Index des 15 000 mots anglais",
            "proverb_idx": "Étape 1/3 — Index des proverbes (Ohabolana)",
            "ohabolana": "Étape 2/3 — Téléchargement des 8 000 proverbes & traductions",
            "teny2": "Étape 3/3 — Mode Complet : fiches détaillées, exemples & dérivés",
        }
        lbl = labels.get(kind, "Synchronisation en cours…")
        if self.phase_label != lbl:
            self.phase_label = lbl

    def fetch_word_now(self, slug: str) -> Optional[Dict[str, Any]]:
        """Récupère à la demande une fiche `/bins/teny2/<slug>` (+ ses proverbes éventuels) en direct."""
        client = _KeepAliveClient(timeout=10.0)
        try:
            html_text = client.get_html(f"/bins/teny2/{quote(slug, safe='-_.~')}")
            if html_text is None:
                return None
            parsed = parse_teny2_page(html_text, page_slug=slug)
            self.db.save_teny2_parsed(parsed, is_demo=False)
            self.db.mark_task_done("teny2", slug)

            # Si la fiche mentionne une page de proverbes pas encore chargée, on la récupère aussi !
            for o_slug in parsed.get("discovered_ohabolana_slugs", [])[:2]:
                if not self.db.get_proverbs_for_slug(o_slug, limit=1):
                    ohab_html = client.get_html(f"/bins/ohabolana/{quote(o_slug, safe='-_.~')}")
                    if ohab_html:
                        ohab_parsed = parse_ohabolana_page(ohab_html, page_slug=o_slug)
                        self.db.save_ohabolana_parsed(ohab_parsed, is_demo=False)
                        self.db.mark_task_done("ohabolana", o_slug)

            return self.db.get_word_detail(slug)
        finally:
            client.close()
