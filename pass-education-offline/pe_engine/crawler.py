# -*- coding: utf-8 -*-
"""Synchroniseur hors-ligne 3 étapes pour Pass-Éducation Offline + Import PDF local.

Étape 1 : Indexation de `sitemap-free-pdfs.xml.gz` (catalogue officiel des milliers de PDF gratuits `/free-pdf/`).
Étape 2 : Récupération rapide par lots de 100 via l'API publique `/wp-json/wp/v2/posts`
          uniquement pour les classes (PS -> Terminale) et matières cochées par l'utilisateur.
Étape 3 : Téléchargement atomique des fichiers `.pdf` classés dans `pdfs/<Classe>/<Matière>/`,
          vérification de l'en-tête `%PDF-` et extraction du texte interne dans SQLite FTS5.
"""

from __future__ import annotations

import gzip
import hashlib
import html
import json
import os
import re
import ssl
import threading
import time
import urllib.error
import urllib.parse
import urllib.request
from typing import Any, Dict, List, Optional, Set, Tuple

from .database import PassEducationDB, html_to_clean_text, sanitize_lesson_html
from .pdf_text import extract_pdf_text_and_pages, is_valid_pdf_bytes
from .taxonomy import (
    CLASS_BY_CODE,
    WP_CAT_COLORIAGES_GRATUITS,
    WP_CAT_FREE_RESOURCES,
    WP_CAT_LESSONS,
    detect_class_from_categories_or_slug,
    detect_resource_type,
    detect_subject_from_categories_or_slug,
    get_class_folder,
    get_cycle_for_class,
    get_subject_folder,
)

USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
)

SITEMAP_FREE_PDFS_URL = "https://www.pass-education.fr/sitemap-free-pdfs.xml.gz"
WP_POSTS_API = "https://www.pass-education.fr/wp-json/wp/v2/posts"

_RE_LOC = re.compile(r"<loc>\s*(https?://[^<\s]+)\s*</loc>", re.IGNORECASE)
_RE_PARCOURS_PDF = re.compile(r"/free-pdf/parcours-(\d+)-([a-z0-9_-]+)\.pdf", re.IGNORECASE)
_RE_HTML_FREE_PDF = re.compile(
    r'href=["\'](https?://(?:www\.|cdn\.)?pass-education\.fr/free-pdf/[^"\']+?\.pdf(?:\?[^"\']*)?)["\']',
    re.IGNORECASE,
)
_RE_HTML_DIRECT_PDF = re.compile(
    r'href=["\'](https?://(?:www\.|cdn\.)?pass-education\.fr/[^"\']+?\.pdf)["\']',
    re.IGNORECASE,
)
_RE_HTML_MEMBER_PDF = re.compile(
    r'href=["\'](https?://www\.pass-education\.fr/(?:extranet/fr/auth-telechargement/|auth_telechargement\.php\?|\?attachment_id=)[^"\']*type_mime=application/pdf[^"\']*)["\']',
    re.IGNORECASE,
)


def _humanize_slug(slug: str) -> str:
    s = slug.replace("-pdf-gratuit-a-imprimer", "").replace("-a-imprimer", "")
    s = re.sub(r"^(clc-cours-lecons-|exo-exercice-|evb-evaluation-bilan-)", "", s)
    s = s.replace("-", " ").strip()
    return s[:1].upper() + s[1:] if s else slug


def _safe_filename(slug: str) -> str:
    clean = re.sub(r"[^a-zA-Z0-9._-]+", "-", slug).strip("-")
    return (clean[:110] or "document") + ".pdf"


class PassEducationSyncManager:
    """Gestionnaire thread-safe de synchronisation sélective avec pause/reprise."""

    def __init__(self, db: PassEducationDB) -> None:
        self.db = db
        self._lock = threading.RLock()
        self._thread: Optional[threading.Thread] = None
        self._stop_event = threading.Event()
        self._ssl_ctx = ssl.create_default_context()

        self.state: Dict[str, Any] = {
            "running": False,
            "stage": "idle",
            "stage_label": "Prêt",
            "current_item": "",
            "catalog_indexed": 0,
            "pdfs_downloaded_session": 0,
            "pdfs_failed_session": 0,
            "bytes_downloaded_session": 0,
            "started_at": 0.0,
            "last_error": "",
        }
        self._ensure_personal_import_folder()

    def _ensure_personal_import_folder(self) -> None:
        perso_dir = os.path.join(self.db.pdf_root, "99_Import_Personnel")
        os.makedirs(perso_dir, exist_ok=True)
        readme_p = os.path.join(perso_dir, "LISEZMOI_VOS_PDF.txt")
        if not os.path.exists(readme_p):
            try:
                with open(readme_p, "w", encoding="utf-8") as f:
                    f.write(
                        "Glissez vos propres fichiers .pdf dans ce dossier (ou dans des sous-dossiers),\n"
                        "puis cliquez sur « Indexer mes PDF personnels » dans l'application !\n"
                        "Ils deviendront immédiatement consultables et recherchables hors-ligne.\n"
                    )
            except Exception:
                pass

    def get_status(self) -> Dict[str, Any]:
        with self._lock:
            st = dict(self.state)
        stats = self.db.get_stats()
        prefs = self.db.get_sync_preferences()
        elapsed = max(0.0, time.time() - st["started_at"]) if st["running"] and st["started_at"] else 0.0
        st["elapsed_sec"] = round(elapsed, 1)
        st["mb_downloaded_session"] = round(st["bytes_downloaded_session"] / (1024 * 1024), 2)
        st["prefs"] = prefs
        st["stats"] = stats
        return st

    def start(self, new_prefs: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        with self._lock:
            if new_prefs is not None:
                self.db.save_sync_preferences(new_prefs)
            if self._thread and self._thread.is_alive():
                return self.get_status()

            prefs = self.db.get_sync_preferences()
            if not prefs.get("classes"):
                raise ValueError("Veuillez cocher au moins une classe à synchroniser.")
            if not prefs.get("subjects"):
                raise ValueError("Veuillez cocher au moins une matière à synchroniser.")

            self._stop_event.clear()
            self.state.update(
                {
                    "running": True,
                    "stage": "starting",
                    "stage_label": "Démarrage de la synchronisation…",
                    "current_item": "",
                    "pdfs_downloaded_session": 0,
                    "pdfs_failed_session": 0,
                    "bytes_downloaded_session": 0,
                    "started_at": time.time(),
                    "last_error": "",
                }
            )
            self._thread = threading.Thread(target=self._run_pipeline, daemon=True)
            self._thread.start()
        return self.get_status()

    def stop(self) -> Dict[str, Any]:
        self._stop_event.set()
        with self._lock:
            if self.state["running"]:
                self.state["stage_label"] = "Mise en pause en cours…"
        return self.get_status()

    # ------------------------------------------------------------------
    # Utilitaires HTTP (Gzip, Keep-Alive, Cookie adhérent optionnel)
    # ------------------------------------------------------------------
    def _http_get(
        self, url: str, cookie: str = "", timeout: float = 25.0, accept: str = "*/*"
    ) -> Tuple[int, Dict[str, str], bytes]:
        headers = {
            "User-Agent": USER_AGENT,
            "Accept": accept,
            "Accept-Encoding": "gzip, identity",
            "Accept-Language": "fr-FR,fr;q=0.9,en;q=0.7",
        }
        if cookie:
            headers["Cookie"] = cookie

        req = urllib.request.Request(url, headers=headers, method="GET")
        try:
            with urllib.request.urlopen(req, timeout=timeout, context=self._ssl_ctx) as resp:
                status = getattr(resp, "status", 200)
                resp_headers = {k.lower(): v for k, v in resp.headers.items()}
                raw = resp.read()
                if resp_headers.get("content-encoding", "").lower() == "gzip":
                    try:
                        raw = gzip.decompress(raw)
                    except Exception:
                        pass
                return status, resp_headers, raw
        except urllib.error.HTTPError as e:
            body = b""
            try:
                body = e.read()
            except Exception:
                pass
            return e.code, {k.lower(): v for k, v in e.headers.items()} if e.headers else {}, body

    # ------------------------------------------------------------------
    # Pipeline complet (Étapes 1 -> 2 -> 3)
    # ------------------------------------------------------------------
    def _run_pipeline(self) -> None:
        try:
            prefs = self.db.get_sync_preferences()
            selected_classes: List[str] = prefs["classes"]
            selected_subjects: Set[str] = set(prefs["subjects"])
            only_with_pdf: bool = bool(prefs.get("only_with_pdf", False))
            download_pdfs: bool = bool(prefs.get("download_pdfs", True))
            member_cookie: str = prefs.get("member_cookie", "")

            # Étape 1 : Sitemap officiel des PDF gratuits
            if not self._stop_event.is_set():
                self._sync_free_pdf_sitemap(selected_classes, selected_subjects)

            # Étape 2 : Catalogue & textes via API WordPress par classe cochée
            if not self._stop_event.is_set():
                self._sync_wp_classes(selected_classes, selected_subjects, only_with_pdf)

            # Étape 3 : Téléchargement effectif des PDF + indexation plein-texte
            if download_pdfs and not self._stop_event.is_set():
                self._download_pending_pdfs(selected_classes, list(selected_subjects), member_cookie)

            with self._lock:
                self.state["running"] = False
                if self._stop_event.is_set():
                    self.state["stage"] = "paused"
                    self.state["stage_label"] = "En pause (reprise prête)"
                else:
                    self.state["stage"] = "completed"
                    self.state["stage_label"] = "Synchronisation terminée !"
                    self.state["current_item"] = ""
        except Exception as exc:
            with self._lock:
                self.state["running"] = False
                self.state["stage"] = "error"
                self.state["stage_label"] = "Erreur de synchronisation"
                self.state["last_error"] = str(exc)

    def _sync_free_pdf_sitemap(self, selected_classes: List[str], selected_subjects: Set[str]) -> None:
        with self._lock:
            self.state["stage"] = "stage1_sitemap"
            self.state["stage_label"] = "Étape 1/3 : Analyse de l'index officiel des PDF gratuits…"
            self.state["current_item"] = "sitemap-free-pdfs.xml.gz"

        try:
            status, _, raw = self._http_get(SITEMAP_FREE_PDFS_URL, timeout=30.0)
            if status != 200 or not raw:
                return
            if raw[:2] == b"\x1f\x8b":
                raw = gzip.decompress(raw)
            xml_text = raw.decode("utf-8", errors="replace")
        except Exception:
            return

        urls = _RE_LOC.findall(xml_text)
        # Supporte les sous-sitemaps éventuels
        pdf_urls: List[str] = []
        for u in urls:
            if u.endswith(".xml") or u.endswith(".xml.gz"):
                if self._stop_event.is_set():
                    return
                try:
                    st2, _, r2 = self._http_get(u, timeout=25.0)
                    if st2 == 200 and r2:
                        if r2[:2] == b"\x1f\x8b":
                            r2 = gzip.decompress(r2)
                        pdf_urls.extend(
                            loc for loc in _RE_LOC.findall(r2.decode("utf-8", errors="replace")) if ".pdf" in loc.lower()
                        )
                except Exception:
                    continue
            elif ".pdf" in u.lower():
                pdf_urls.append(u)

        if not pdf_urls:
            return

        map_entries: List[Tuple[str, int, str]] = []
        standalone_items: List[Dict[str, Any]] = []
        sel_class_set = set(selected_classes)

        for purl in pdf_urls:
            m = _RE_PARCOURS_PDF.search(purl)
            if m:
                post_id = int(m.group(1))
                slug = m.group(2).lower()
                map_entries.append((slug, post_id, purl))
            else:
                fname = urllib.parse.unquote(purl.rsplit("/", 1)[-1])
                if fname.lower().endswith(".pdf"):
                    fname = fname[:-4]
                slug = re.sub(r"[^a-z0-9_-]+", "-", fname.lower()).strip("-")
                if not slug:
                    continue
                map_entries.append((slug, 0, purl))
                # Détecte si ce PDF autonome correspond aux classes et matières sélectionnées
                c_code = detect_class_from_categories_or_slug(set(), slug, default_class="")
                if c_code in sel_class_set:
                    s_code = detect_subject_from_categories_or_slug(set(), slug)
                    if s_code in selected_subjects:
                        r_type = detect_resource_type(set(), slug)
                        standalone_items.append(
                            {
                                "wp_post_id": 0,
                                "slug": f"pdf-{slug}"[:140],
                                "title": _humanize_slug(slug),
                                "class_code": c_code,
                                "subject_code": s_code,
                                "resource_type": r_type,
                                "source_url": purl,
                                "pdf_url": purl,
                                "pdf_status": "pending",
                                "is_demo": 0,
                            }
                        )

        self.db.save_free_pdf_entries(map_entries)
        if standalone_items:
            self.db.clear_demo_entries_if_real_sync()
            self.db.upsert_batch(standalone_items)

    def _sync_wp_classes(
        self, selected_classes: List[str], selected_subjects: Set[str], only_with_pdf: bool
    ) -> None:
        subj_sig = hashlib.sha1(
            (",".join(sorted(selected_subjects)) + f"|pdf={int(only_with_pdf)}").encode("utf-8")
        ).hexdigest()[:10]

        for idx, class_code in enumerate(selected_classes, start=1):
            if self._stop_event.is_set():
                return
            class_info = CLASS_BY_CODE.get(class_code)
            if not class_info:
                continue

            wp_cat_id = class_info["wp_cat_id"]
            cursor_key = f"wp_cursor_{class_code}_{subj_sig}"
            saved_val = self.db.get_meta(cursor_key, "1")
            if saved_val == "done":
                continue

            try:
                page = max(1, int(saved_val))
            except ValueError:
                page = 1

            total_pages: Optional[int] = None
            cleared_demo = False

            while not self._stop_event.is_set():
                tp_str = f"/{total_pages}" if total_pages else ""
                with self._lock:
                    self.state["stage"] = "stage2_catalog"
                    self.state["stage_label"] = (
                        f"Étape 2/3 : Catalogue {class_info['short']} ({idx}/{len(selected_classes)}) — page {page}{tp_str}"
                    )
                    self.state["current_item"] = f"Classe {class_info['label']} (lot {page})"

                api_url = (
                    f"{WP_POSTS_API}?categories={wp_cat_id}&per_page=100&page={page}"
                    "&_fields=id,date,slug,link,title,content,categories"
                )
                status, headers, raw = self._http_get(api_url, timeout=30.0, accept="application/json")

                if status == 400:
                    # Fin de pagination WordPress (`rest_post_invalid_page_number`)
                    self.db.set_meta(cursor_key, "done")
                    break
                if status != 200 or not raw:
                    time.sleep(1.2)
                    status, headers, raw = self._http_get(api_url, timeout=30.0, accept="application/json")
                    if status != 200 or not raw:
                        break

                if total_pages is None and "x-wp-totalpages" in headers:
                    try:
                        total_pages = int(headers["x-wp-totalpages"])
                    except ValueError:
                        total_pages = None

                try:
                    posts = json.loads(raw.decode("utf-8", errors="replace"))
                except Exception:
                    break

                if not isinstance(posts, list) or not posts:
                    self.db.set_meta(cursor_key, "done")
                    break

                batch: List[Dict[str, Any]] = []
                for p in posts:
                    post_id = int(p.get("id") or 0)
                    slug = (p.get("slug") or "").strip()
                    if not slug:
                        continue
                    cat_ids: Set[int] = {int(x) for x in (p.get("categories") or []) if isinstance(x, int)}
                    title_raw = html.unescape(((p.get("title") or {}).get("rendered") or slug)).strip()
                    subj_code = detect_subject_from_categories_or_slug(cat_ids, f"{slug} {title_raw}")
                    if subj_code not in selected_subjects:
                        continue

                    r_type = detect_resource_type(cat_ids, f"{slug} {title_raw}")
                    content_html_raw = ((p.get("content") or {}).get("rendered") or "").strip()

                    # Détection d'un PDF gratuit associé
                    pdf_url = self.db.lookup_free_pdf_url(post_id, slug)
                    if not pdf_url and content_html_raw:
                        m_free = _RE_HTML_FREE_PDF.search(content_html_raw)
                        if m_free:
                            pdf_url = html.unescape(m_free.group(1))
                    if not pdf_url and (
                        WP_CAT_FREE_RESOURCES in cat_ids
                        or WP_CAT_LESSONS in cat_ids
                        or WP_CAT_COLORIAGES_GRATUITS in cat_ids
                    ):
                        # Candidate officielle vérifiée lors du téléchargement Étape 3
                        pdf_url = f"https://www.pass-education.fr/free-pdf/parcours-{post_id}-{slug}.pdf"

                    if only_with_pdf and not pdf_url:
                        continue

                    clean_html = sanitize_lesson_html(content_html_raw)
                    clean_text = html_to_clean_text(content_html_raw)
                    date_str = (p.get("date") or "")[:10]

                    batch.append(
                        {
                            "wp_post_id": post_id,
                            "slug": slug,
                            "title": title_raw,
                            "cycle_code": get_cycle_for_class(class_code),
                            "class_code": class_code,
                            "subject_code": subj_code,
                            "resource_type": r_type,
                            "source_url": p.get("link") or f"https://www.pass-education.fr/{slug}/",
                            "pdf_url": pdf_url,
                            "pdf_status": "pending" if pdf_url else "none",
                            "html_content": clean_html,
                            "text_content": clean_text,
                            "updated_date": date_str,
                            "is_demo": 0,
                        }
                    )

                if batch:
                    if not cleared_demo:
                        self.db.clear_demo_entries_if_real_sync()
                        cleared_demo = True
                    added = self.db.upsert_batch(batch)
                    with self._lock:
                        self.state["catalog_indexed"] += added

                if total_pages is not None and page >= total_pages:
                    self.db.set_meta(cursor_key, "done")
                    break

                page += 1
                self.db.set_meta(cursor_key, str(page))
                time.sleep(0.18)

    def _resolve_pdf_from_article_html(
        self, source_url: str, member_cookie: str = ""
    ) -> Tuple[str, str]:
        """Inspecte la page HTML de la ressource si l'URL candidate `parcours-...` n'existe pas."""
        if not source_url:
            return "", ""
        st, _, raw = self._http_get(source_url, cookie=member_cookie, timeout=20.0)
        if st != 200 or not raw:
            return "", ""
        page_html = raw.decode("utf-8", errors="replace")
        m_free = _RE_HTML_FREE_PDF.search(page_html)
        free_u = html.unescape(m_free.group(1)) if m_free else ""
        if not free_u:
            for m_dir in _RE_HTML_DIRECT_PDF.finditer(page_html):
                cand = html.unescape(m_dir.group(1))
                if "/free-pdf/" in cand or "/uploads/" in cand:
                    free_u = cand
                    break
        m_mem = _RE_HTML_MEMBER_PDF.search(page_html)
        mem_u = html.unescape(m_mem.group(1)) if m_mem else ""
        return free_u, mem_u

    def download_single_resource_pdf(self, res_id: int) -> Dict[str, Any]:
        """Télécharge à la demande (ou depuis l'Étape 3) le PDF d'une ressource précise."""
        detail = self.db.get_resource_detail(res_id)
        if not detail:
            raise ValueError("Ressource introuvable.")
        if detail.get("local_pdf_exists"):
            return detail

        prefs = self.db.get_sync_preferences()
        member_cookie = prefs.get("member_cookie", "")
        ok, err_msg, nbytes = self._fetch_and_store_pdf(detail, member_cookie)
        if not ok:
            raise RuntimeError(err_msg or "Ce document n'a pas de PDF gratuit public (réservé aux abonnés).")
        with self._lock:
            self.state["bytes_downloaded_session"] += nbytes
        return self.db.get_resource_detail(res_id) or detail

    def _fetch_and_store_pdf(
        self, row: Dict[str, Any], member_cookie: str = ""
    ) -> Tuple[bool, str, int]:
        res_id = int(row["id"])
        slug = row["slug"]
        class_code = row["class_code"]
        subject_code = row["subject_code"]
        source_url = row.get("source_url") or ""
        candidate_url = row.get("pdf_url") or ""

        tried_urls: List[str] = []
        pdf_bytes = b""
        final_url = ""

        # 1. Essai de l'URL PDF gratuite connue ou candidate
        if candidate_url:
            tried_urls.append(candidate_url)
            st, _, raw = self._http_get(candidate_url, cookie=member_cookie, timeout=30.0)
            if st == 200 and is_valid_pdf_bytes(raw):
                pdf_bytes = raw
                final_url = candidate_url

        # 2. Sinon, lecture de la page HTML de l'article pour trouver le vrai lien /free-pdf/ (ou lien abonné si cookie fourni)
        if not pdf_bytes and source_url and not source_url.lower().endswith(".pdf"):
            free_u, mem_u = self._resolve_pdf_from_article_html(source_url, member_cookie)
            if free_u and free_u not in tried_urls:
                tried_urls.append(free_u)
                st2, _, raw2 = self._http_get(free_u, cookie=member_cookie, timeout=30.0)
                if st2 == 200 and is_valid_pdf_bytes(raw2):
                    pdf_bytes = raw2
                    final_url = free_u
            if not pdf_bytes and mem_u and member_cookie:
                st3, _, raw3 = self._http_get(mem_u, cookie=member_cookie, timeout=30.0)
                if st3 == 200 and is_valid_pdf_bytes(raw3):
                    pdf_bytes = raw3
                    final_url = mem_u

        if not pdf_bytes:
            # Aucun PDF public disponible sur cette fiche (texte HTML uniquement ou fiche abonnés)
            self.db.mark_pdf_status(res_id, "none", "Texte HTML hors-ligne disponible (PDF réservé aux adhérents)")
            return False, "Pas de PDF gratuit public sur cette fiche (le texte du cours reste lisible hors-ligne).", 0

        rel_dir = os.path.join(get_class_folder(class_code), get_subject_folder(subject_code))
        abs_dir = os.path.join(self.db.pdf_root, rel_dir)
        os.makedirs(abs_dir, exist_ok=True)

        filename = _safe_filename(slug)
        rel_path = os.path.join(rel_dir, filename).replace("\\", "/")
        abs_path = os.path.join(self.db.pdf_root, rel_path)
        part_path = abs_path + ".part"

        with open(part_path, "wb") as f:
            f.write(pdf_bytes)
        os.replace(part_path, abs_path)

        extracted_text, pages = extract_pdf_text_and_pages(pdf_bytes)
        self.db.mark_pdf_downloaded(
            res_id=res_id,
            rel_path=rel_path,
            size_bytes=len(pdf_bytes),
            pages=pages,
            pdf_text=extracted_text,
            resolved_pdf_url=final_url,
        )
        return True, "", len(pdf_bytes)

    def _download_pending_pdfs(
        self, classes: List[str], subjects: List[str], member_cookie: str
    ) -> None:
        while not self._stop_event.is_set():
            pending_total = self.db.count_pending_pdfs(classes, subjects)
            if pending_total == 0:
                break

            batch = self.db.get_pending_pdf_resources(classes, subjects, limit=25)
            if not batch:
                break

            for row in batch:
                if self._stop_event.is_set():
                    return
                with self._lock:
                    done_n = self.state["pdfs_downloaded_session"]
                    self.state["stage"] = "stage3_pdfs"
                    self.state["stage_label"] = (
                        f"Étape 3/3 : Téléchargement & indexation des PDF ({done_n} téléchargés, {pending_total} restants)"
                    )
                    self.state["current_item"] = f"[{row['class_code']}] {row['title'][:75]}"

                ok, _, nbytes = self._fetch_and_store_pdf(row, member_cookie)
                with self._lock:
                    if ok:
                        self.state["pdfs_downloaded_session"] += 1
                        self.state["bytes_downloaded_session"] += nbytes
                    else:
                        self.state["pdfs_failed_session"] += 1
                pending_total = max(0, pending_total - 1)
                time.sleep(0.15)

    # ------------------------------------------------------------------
    # Import & indexation des PDF personnels glissés dans `pdfs/99_Import_Personnel/`
    # ------------------------------------------------------------------
    def scan_personal_pdfs(self) -> Dict[str, int]:
        perso_dir = os.path.join(self.db.pdf_root, "99_Import_Personnel")
        os.makedirs(perso_dir, exist_ok=True)
        imported = 0
        for root, _, files in os.walk(perso_dir):
            for fn in sorted(files):
                if not fn.lower().endswith(".pdf"):
                    continue
                abs_p = os.path.join(root, fn)
                rel_p = os.path.relpath(abs_p, self.db.pdf_root).replace("\\", "/")
                try:
                    with open(abs_p, "rb") as f:
                        data = f.read()
                except Exception:
                    continue
                if not is_valid_pdf_bytes(data):
                    continue
                slug_hash = hashlib.sha1(rel_p.encode("utf-8")).hexdigest()[:10]
                stem = os.path.splitext(fn)[0]
                slug = f"perso-{slug_hash}-{re.sub(r'[^a-z0-9]+', '-', stem.lower()).strip('-')[:60]}"
                pdf_text, pages = extract_pdf_text_and_pages(data)
                c_code = detect_class_from_categories_or_slug(set(), stem, default_class="Perso")
                s_code = detect_subject_from_categories_or_slug(set(), f"{stem} {pdf_text[:300]}")
                self.db.upsert_resource(
                    {
                        "wp_post_id": 0,
                        "slug": slug,
                        "title": stem.replace("_", " ").replace("-", " ").strip() or fn,
                        "cycle_code": "perso" if c_code == "Perso" else get_cycle_for_class(c_code),
                        "class_code": c_code,
                        "subject_code": s_code,
                        "resource_type": "lecon",
                        "source_url": "",
                        "pdf_url": "",
                        "local_pdf_relpath": rel_p,
                        "pdf_size_bytes": len(data),
                        "pdf_pages": pages,
                        "pdf_status": "downloaded",
                        "html_content": "",
                        "text_content": "",
                        "pdf_text": pdf_text,
                        "updated_date": time.strftime("%Y-%m-%d"),
                        "is_demo": 0,
                    }
                )
                imported += 1
        return {"imported": imported}
