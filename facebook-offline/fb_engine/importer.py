# -*- coding: utf-8 -*-
"""Importateur universel d'archives officielles Facebook (Page & Profil, JSON & HTML, parties multiples).

Gère automatiquement :
1. Le bug d'encodage UTF-8/Latin-1 (« mojibake ») propre aux exports JSON de Meta
   (ex: `"Fampianarana tamin\u00e2\u0080\u0099ny"` -> `"Fampianarana tamin’ny"`).
2. Tous les formats de dossiers Meta (2020–2026) :
   - `your_facebook_activity/posts/...`
   - `your_activity_across_facebook/posts/...`
   - `posts/page_posts_*.json`, `posts/your_posts_*.json`, `posts/album/*.json`, `videos/*.json`
   - Exports en plusieurs fichiers `.zip` (`part1.zip`, `part2.zip`...) où les vidéos/photos
     sont réparties dans différentes archives !
3. Les exports au format HTML si l'utilisateur a choisi HTML au lieu de JSON sur Facebook.
"""

from __future__ import annotations

import datetime
import hashlib
import html
import json
import os
import posixpath
import re
import shutil
import threading
import time
import zipfile
from pathlib import Path
from typing import Any, Dict, List, Optional, Set, Tuple

from .database import FBDatabase

PHOTO_EXTS = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".bmp"}
VIDEO_EXTS = {".mp4", ".mov", ".webm", ".m4v", ".avi", ".mkv"}


def fix_meta_mojibake(val: Any) -> str:
    """Corrige l'encodage UTF-8 sérialisé en Latin-1 par Meta JSON sans jamais altérer un texte déjà propre."""
    if not isinstance(val, str) or not val:
        return ""
    # Tout caractère UTF-8 multi-octet produit au moins un octet de continuation 0x80..0xBF
    # qui devient U+0080..U+00BF en Latin-1 (caractères de contrôle C1 absents de tout vrai texte).
    if any("\u0080" <= ch <= "\u00bf" for ch in val):
        try:
            return val.encode("latin-1").decode("utf-8")
        except (UnicodeEncodeError, UnicodeDecodeError):
            # Réparation par segments si la chaîne est mixte
            out: List[str] = []
            buf = bytearray()
            for ch in val:
                code = ord(ch)
                if code <= 255:
                    buf.append(code)
                else:
                    if buf:
                        out.append(buf.decode("utf-8", errors="replace"))
                        buf.clear()
                    out.append(ch)
            if buf:
                out.append(buf.decode("utf-8", errors="replace"))
            return "".join(out)
    return val


def fix_json_tree(obj: Any) -> Any:
    if isinstance(obj, str):
        return fix_meta_mojibake(obj)
    if isinstance(obj, list):
        return [fix_json_tree(x) for x in obj]
    if isinstance(obj, dict):
        return {fix_meta_mojibake(k): fix_json_tree(v) for k, v in obj.items()}
    return obj


def make_post_uid(timestamp: int, text: str, media_refs: List[str]) -> str:
    norm_t = re.sub(r"\s+", " ", (text or "").strip().lower())
    sorted_m = "|".join(sorted(posixpath.basename(r) for r in media_refs if r))
    raw = f"{timestamp}|{len(norm_t)}:{norm_t[:500]}|{sorted_m}"
    return hashlib.sha1(raw.encode("utf-8")).hexdigest()[:24]


def _classify_media_ext(path_str: str) -> Optional[str]:
    ext = posixpath.splitext(path_str.lower())[1]
    if ext in PHOTO_EXTS:
        return "photo"
    if ext in VIDEO_EXTS:
        return "video"
    return None


def _normalize_zip_rel_uri(uri: str) -> str:
    s = (uri or "").strip().replace("\\", "/").lstrip("./")
    return posixpath.normpath(s) if s else ""


class FBArchiveImporter:
    def __init__(self, db: FBDatabase) -> None:
        self.db = db
        self._lock = threading.Lock()
        self._thread: Optional[threading.Thread] = None
        self._state: Dict[str, Any] = {
            "running": False,
            "phase": "idle",
            "message": "Prêt à importer une archive Facebook.",
            "archives_processed": 0,
            "posts_added": 0,
            "posts_updated": 0,
            "media_extracted": 0,
            "started_at": 0,
            "finished_at": 0,
        }

    def get_status(self) -> Dict[str, Any]:
        with self._lock:
            return dict(self._state)

    def _update(self, **kwargs: Any) -> None:
        with self._lock:
            self._state.update(kwargs)

    def start_import_from_folder(self) -> bool:
        with self._lock:
            if self._state["running"]:
                return False
            self._state.update(
                {
                    "running": True,
                    "phase": "scanning",
                    "message": "Recherche des archives Facebook dans le dossier « imports/ »…",
                    "archives_processed": 0,
                    "posts_added": 0,
                    "posts_updated": 0,
                    "media_extracted": 0,
                    "started_at": int(time.time()),
                    "finished_at": 0,
                }
            )
        self._thread = threading.Thread(target=self._worker_import_all, daemon=True)
        self._thread.start()
        return True

    def _worker_import_all(self) -> None:
        try:
            imports_dir = self.db.imports_dir
            zips = sorted(p for p in imports_dir.glob("*.zip") if p.is_file())
            subfolders = sorted(p for p in imports_dir.iterdir() if p.is_dir() and not p.name.startswith("."))

            if not zips and not subfolders:
                self._update(
                    running=False,
                    phase="empty",
                    message="Aucun fichier .zip ni dossier trouvé dans « imports/ ». Déposez-y votre export Facebook puis réessayez.",
                    finished_at=int(time.time()),
                )
                return

            res = self.import_sources(zips + subfolders)
            self._update(
                running=False,
                phase="done",
                archives_processed=res["sources"],
                posts_added=res["posts_added"],
                posts_updated=res["posts_updated"],
                media_extracted=res["media_extracted"],
                message=(
                    f"Import terminé avec succès : {res['posts_added']} nouvelle(s) publication(s), "
                    f"{res['posts_updated']} enrichie(s)/déjà présente(s), "
                    f"{res['media_extracted']} photo(s)/vidéo(s) copiées hors-ligne."
                ),
                finished_at=int(time.time()),
            )
        except Exception as exc:
            self._update(
                running=False,
                phase="error",
                message=f"Erreur lors de l'import : {exc}",
                finished_at=int(time.time()),
            )

    def import_sources(self, sources: List[Path]) -> Dict[str, int]:
        """Importe une liste de fichiers `.zip` et/ou dossiers extraits en gérant les archives multi-parties."""
        media_lookup: Dict[str, str] = {}  # suffixe normalisé -> rel_path dans medias/
        media_sizes: Dict[str, int] = {}
        extracted_count = 0

        # Passe 1 : Extraction de tous les fichiers médias (photos & vidéos) de toutes les parties .zip / dossiers
        for src in sources:
            self._update(phase="extract_media", message=f"Extraction des photos et vidéos depuis « {src.name} »…")
            if src.is_file() and src.suffix.lower() == ".zip":
                c = self._extract_media_from_zip(src, media_lookup, media_sizes)
                extracted_count += c
            elif src.is_dir():
                c = self._extract_media_from_dir(src, media_lookup, media_sizes)
                extracted_count += c

        # Index par nom de fichier simple en secours (si le chemin relatif varie entre JSON et dossier media)
        basename_lookup: Dict[str, str] = {}
        for k, rel_dst in media_lookup.items():
            bn = posixpath.basename(k)
            if bn not in basename_lookup:
                basename_lookup[bn] = rel_dst

        # Passe 2 : Lecture de tous les fichiers JSON (et HTML en secours) de publications / albums / vidéos
        parsed_posts: List[Dict[str, Any]] = []
        detected_page_name = ""

        for src in sources:
            self._update(phase="parse_posts", message=f"Analyse des publications et commentaires dans « {src.name} »…")
            if src.is_file() and src.suffix.lower() == ".zip":
                p_name, items = self._parse_posts_from_zip(src)
                if p_name and not detected_page_name:
                    detected_page_name = p_name
                parsed_posts.extend(items)
            elif src.is_dir():
                p_name, items = self._parse_posts_from_dir(src)
                if p_name and not detected_page_name:
                    detected_page_name = p_name
                parsed_posts.extend(items)

        # Si certaines photos/vidéos ne sont référencées dans aucun JSON (ex: dossier photos simple), crée des cartes dédiées
        referenced_rels: Set[str] = set()
        added = 0
        updated = 0
        demo_cleared = False

        for raw_post in parsed_posts:
            resolved_media = []
            raw_uris = raw_post.get("raw_media") or []
            for m in raw_uris:
                uri = _normalize_zip_rel_uri(m.get("uri") or "")
                mtype = _classify_media_ext(uri) or m.get("media_type") or "photo"
                rel_dst = self._resolve_media_uri(uri, media_lookup, basename_lookup)
                if rel_dst:
                    referenced_rels.add(rel_dst)
                    resolved_media.append(
                        {
                            "media_type": mtype,
                            "rel_path": rel_dst,
                            "caption": m.get("caption") or "",
                            "file_size": media_sizes.get(rel_dst, 0),
                        }
                    )

            ts = int(raw_post.get("timestamp") or 0)
            text = (raw_post.get("content") or "").strip()
            title = (raw_post.get("title") or "").strip()
            if not text and not title and not resolved_media and not raw_post.get("external_url"):
                continue

            if not demo_cleared:
                self.db.clear_demo_publications() if hasattr(self.db, "clear_demo_publications") else self.db.clear_demo_posts()
                demo_cleared = True

            uid = make_post_uid(ts, text or title, [m["rel_path"] for m in resolved_media] or [u.get("uri", "") for u in raw_uris])
            raw_post["post_uid"] = uid
            raw_post["media"] = resolved_media
            _, was_created = self.db.upsert_post(raw_post)
            if was_created:
                added += 1
            else:
                updated += 1

        # Médias orphelins éventuels (ex: vidéo ou album sans entrée post JSON)
        for rel_key, rel_dst in sorted(media_lookup.items()):
            if rel_dst in referenced_rels:
                continue
            abs_f = self.db.medias_dir / rel_dst
            if not abs_f.is_file():
                continue
            if not demo_cleared:
                self.db.clear_demo_posts()
                demo_cleared = True
            mtype = _classify_media_ext(rel_dst) or "photo"
            mtime = int(abs_f.stat().st_mtime)
            uid = make_post_uid(mtime, rel_dst, [rel_dst])
            _, was_created = self.db.upsert_post(
                {
                    "post_uid": uid,
                    "timestamp": mtime,
                    "title": f"{'Vidéo' if mtype == 'video' else 'Photo'} importée",
                    "content": "",
                    "album_name": posixpath.basename(posixpath.dirname(rel_dst)),
                    "media": [
                        {
                            "media_type": mtype,
                            "rel_path": rel_dst,
                            "caption": "",
                            "file_size": media_sizes.get(rel_dst, 0),
                        }
                    ],
                }
            )
            referenced_rels.add(rel_dst)
            if was_created:
                added += 1

        if detected_page_name:
            self.db.set_meta("page_name", detected_page_name)
        self.db.set_meta("last_import", datetime.datetime.now().strftime("%Y-%m-%d %H:%M"))

        return {
            "sources": len(sources),
            "posts_added": added,
            "posts_updated": updated,
            "media_extracted": extracted_count,
        }

    @staticmethod
    def _strip_archive_wrapper(arc_path: str) -> str:
        """Retire un éventuel dossier racine `facebook-nompage-2026-.../` au sommet du .zip."""
        norm = _normalize_zip_rel_uri(arc_path)
        parts = norm.split("/")
        if len(parts) >= 2 and (
            parts[0].lower().startswith("facebook-")
            or parts[0].lower().startswith("meta-")
        ):
            return "/".join(parts[1:])
        return norm

    @staticmethod
    def _resolve_media_uri(
        uri: str,
        media_lookup: Dict[str, str],
        basename_lookup: Dict[str, str],
    ) -> str:
        if not uri:
            return ""
        if uri in media_lookup:
            return media_lookup[uri]
        stripped = FBArchiveImporter._strip_archive_wrapper(uri)
        if stripped in media_lookup:
            return media_lookup[stripped]
        for k, val in media_lookup.items():
            if k.endswith("/" + uri) or uri.endswith("/" + k):
                return val
        return basename_lookup.get(posixpath.basename(uri), "")

    def _extract_media_from_zip(
        self,
        zip_path: Path,
        media_lookup: Dict[str, str],
        media_sizes: Dict[str, int],
    ) -> int:
        count = 0
        with zipfile.ZipFile(zip_path, "r") as zf:
            for info in zf.infolist():
                if info.is_dir():
                    continue
                clean_rel = self._strip_archive_wrapper(info.filename)
                low = clean_rel.lower()
                # Ignore les icônes décoratives internes des exports HTML Facebook
                if "/images/icons/" in low or low.startswith("style/") or "favicon" in low:
                    continue
                mtype = _classify_media_ext(clean_rel)
                if not mtype:
                    continue
                # Conserve une arborescence propre dans medias/
                safe_parts = [re.sub(r'[<>:"|?*\x00-\x1f]+', "_", p) for p in clean_rel.split("/") if p and p != ".."]
                rel_dst = "/".join(safe_parts)
                abs_dst = self.db.medias_dir / rel_dst
                abs_dst.parent.mkdir(parents=True, exist_ok=True)
                if not abs_dst.is_file() or abs_dst.stat().st_size != info.file_size:
                    with zf.open(info, "r") as src_f, open(abs_dst, "wb") as out_f:
                        shutil.copyfileobj(src_f, out_f, length=262144)
                    count += 1
                media_lookup[clean_rel] = rel_dst
                media_lookup[_normalize_zip_rel_uri(info.filename)] = rel_dst
                media_sizes[rel_dst] = abs_dst.stat().st_size
        return count

    def _extract_media_from_dir(
        self,
        folder: Path,
        media_lookup: Dict[str, str],
        media_sizes: Dict[str, int],
    ) -> int:
        count = 0
        for p in folder.rglob("*"):
            if not p.is_file():
                continue
            rel = p.relative_to(folder).as_posix()
            clean_rel = self._strip_archive_wrapper(rel)
            low = clean_rel.lower()
            if "/images/icons/" in low or low.startswith("style/"):
                continue
            if not _classify_media_ext(clean_rel):
                continue
            safe_parts = [re.sub(r'[<>:"|?*\x00-\x1f]+', "_", part) for part in clean_rel.split("/") if part and part != ".."]
            rel_dst = "/".join(safe_parts)
            abs_dst = self.db.medias_dir / rel_dst
            abs_dst.parent.mkdir(parents=True, exist_ok=True)
            sz = p.stat().st_size
            if not abs_dst.is_file() or abs_dst.stat().st_size != sz:
                shutil.copy2(p, abs_dst)
                count += 1
            media_lookup[clean_rel] = rel_dst
            media_lookup[rel] = rel_dst
            media_sizes[rel_dst] = sz
        return count

    # ------------------------------------------------------------------
    # Analyse JSON & HTML des publications Facebook (Page & Profil)
    # ------------------------------------------------------------------
    @staticmethod
    def _is_relevant_post_json(rel_path: str) -> bool:
        low = rel_path.lower()
        if not low.endswith(".json"):
            return False
        # Exclut les messages privés, publicités, connexions techniques
        excluded = ("messages/", "security_and_login", "ads_information", "logged_information", "preferences/", "followers_and_following")
        if any(ex in low for ex in excluded):
            return False
        keywords = ("post", "album", "video", "photo", "note", "story", "stories", "reel", "short_video", "page")
        return any(k in low for k in keywords)

    def _parse_posts_from_zip(self, zip_path: Path) -> Tuple[str, List[Dict[str, Any]]]:
        items: List[Dict[str, Any]] = []
        page_name = ""
        html_candidates: List[str] = []

        with zipfile.ZipFile(zip_path, "r") as zf:
            for name in sorted(zf.namelist()):
                clean_rel = self._strip_archive_wrapper(name)
                low = clean_rel.lower()
                if low.endswith(("profile_information.json", "page_information.json", "pages_you've_created.json")):
                    try:
                        data = fix_json_tree(json.loads(zf.read(name).decode("utf-8", errors="replace")))
                        page_name = self._extract_page_or_profile_name(data) or page_name
                    except Exception:
                        pass
                elif self._is_relevant_post_json(clean_rel):
                    try:
                        raw_txt = zf.read(name).decode("utf-8", errors="replace")
                        data = fix_json_tree(json.loads(raw_txt))
                        items.extend(self._extract_posts_from_json_data(data))
                    except Exception:
                        pass
                elif low.endswith((".html", ".htm")) and ("post" in low or "video" in low or "album" in low):
                    html_candidates.append(name)

            # Secours automatique si l'utilisateur a choisi le format HTML au lieu de JSON sur Facebook !
            if not items and html_candidates:
                for hname in html_candidates:
                    try:
                        raw_html = zf.read(hname).decode("utf-8", errors="replace")
                        items.extend(self._extract_posts_from_html(raw_html))
                    except Exception:
                        pass

        return page_name, items

    def _parse_posts_from_dir(self, folder: Path) -> Tuple[str, List[Dict[str, Any]]]:
        items: List[Dict[str, Any]] = []
        page_name = ""
        html_candidates: List[Path] = []

        for p in sorted(folder.rglob("*")):
            if not p.is_file():
                continue
            clean_rel = self._strip_archive_wrapper(p.relative_to(folder).as_posix())
            low = clean_rel.lower()
            if low.endswith(("profile_information.json", "page_information.json")):
                try:
                    data = fix_json_tree(json.loads(p.read_text(encoding="utf-8", errors="replace")))
                    page_name = self._extract_page_or_profile_name(data) or page_name
                except Exception:
                    pass
            elif self._is_relevant_post_json(clean_rel):
                try:
                    data = fix_json_tree(json.loads(p.read_text(encoding="utf-8", errors="replace")))
                    items.extend(self._extract_posts_from_json_data(data))
                except Exception:
                    pass
            elif low.endswith((".html", ".htm")) and ("post" in low or "video" in low or "album" in low):
                html_candidates.append(p)

        if not items and html_candidates:
            for hp in html_candidates:
                try:
                    items.extend(self._extract_posts_from_html(hp.read_text(encoding="utf-8", errors="replace")))
                except Exception:
                    pass

        return page_name, items

    @staticmethod
    def _extract_page_or_profile_name(data: Any) -> str:
        if isinstance(data, dict):
            for k in ("page", "profile_v2", "profile", "pages"):
                sub = data.get(k)
                if isinstance(sub, dict):
                    if isinstance(sub.get("name"), dict):
                        fn = sub["name"].get("full_name")
                        if fn:
                            return str(fn).strip()
                    elif isinstance(sub.get("name"), str) and sub["name"].strip():
                        return sub["name"].strip()
                elif isinstance(sub, list) and sub and isinstance(sub[0], dict) and sub[0].get("name"):
                    return str(sub[0]["name"]).strip()
            if isinstance(data.get("name"), str) and data["name"].strip():
                return data["name"].strip()
        return ""

    def _extract_posts_from_json_data(self, data: Any) -> List[Dict[str, Any]]:
        out: List[Dict[str, Any]] = []

        # Cas 1 : Objet d'album Facebook {"name": "Nom Album", "photos": [...], "last_modified_timestamp": ...}
        if isinstance(data, dict) and isinstance(data.get("photos"), list):
            album_title = str(data.get("name") or "Album Photo").strip()
            album_desc = str(data.get("description") or "").strip()
            album_ts = int(data.get("last_modified_timestamp") or 0)
            media_entries = []
            for ph in data["photos"]:
                if isinstance(ph, dict) and ph.get("uri"):
                    ph_ts = int(ph.get("creation_timestamp") or 0)
                    if ph_ts > album_ts:
                        album_ts = ph_ts
                    media_entries.append(
                        {
                            "uri": ph["uri"],
                            "caption": str(ph.get("description") or ph.get("title") or "").strip(),
                        }
                    )
            if media_entries:
                out.append(
                    {
                        "timestamp": album_ts,
                        "title": f"Album : {album_title}",
                        "album_name": album_title,
                        "content": album_desc,
                        "external_url": "",
                        "external_title": "",
                        "raw_media": media_entries,
                    }
                )
            return out

        # Cas 2 : Dictionnaire enveloppant une liste (ex: {"page_posts_v2": [...]}, {"videos_v2": [...]})
        records: List[Any] = []
        if isinstance(data, list):
            records = data
        elif isinstance(data, dict):
            for val in data.values():
                if isinstance(val, list):
                    records.extend(val)

        for entry in records:
            if not isinstance(entry, dict):
                continue
            parsed = self._parse_single_post_dict(entry)
            if parsed:
                out.append(parsed)
        return out

    @staticmethod
    def _parse_single_post_dict(entry: Dict[str, Any]) -> Optional[Dict[str, Any]]:
        ts = int(entry.get("timestamp") or entry.get("creation_timestamp") or 0)
        title = str(entry.get("title") or "").strip()
        texts: List[str] = []
        ext_url = ""
        ext_title = ""
        raw_media: List[Dict[str, str]] = []

        # Texte principal dans entry["data"]
        if isinstance(entry.get("data"), list):
            for d in entry["data"]:
                if isinstance(d, dict):
                    if isinstance(d.get("post"), str) and d["post"].strip():
                        texts.append(d["post"].strip())
                    if not ts and d.get("update_timestamp"):
                        ts = int(d["update_timestamp"])

        if isinstance(entry.get("description"), str) and entry["description"].strip():
            texts.append(entry["description"].strip())

        # Médias directs (ex: videos_v2 où l'entrée elle-même a "uri")
        if isinstance(entry.get("uri"), str) and entry["uri"].strip():
            raw_media.append(
                {
                    "uri": entry["uri"].strip(),
                    "caption": str(entry.get("description") or entry.get("title") or "").strip(),
                }
            )

        # Pièces jointes dans entry["attachments"]
        if isinstance(entry.get("attachments"), list):
            for att in entry["attachments"]:
                if not isinstance(att, dict):
                    continue
                for adata in att.get("data") or []:
                    if not isinstance(adata, dict):
                        continue
                    media_obj = adata.get("media")
                    if isinstance(media_obj, dict) and media_obj.get("uri"):
                        m_desc = str(media_obj.get("description") or "").strip()
                        m_title = str(media_obj.get("title") or "").strip()
                        if m_desc and m_desc not in texts:
                            texts.append(m_desc)
                        if not ts and media_obj.get("creation_timestamp"):
                            ts = int(media_obj["creation_timestamp"])
                        raw_media.append(
                            {
                                "uri": str(media_obj["uri"]).strip(),
                                "caption": m_desc or m_title,
                            }
                        )
                    ext_ctx = adata.get("external_context")
                    if isinstance(ext_ctx, dict) and ext_ctx.get("url"):
                        ext_url = str(ext_ctx.get("url") or "").strip()
                        ext_title = str(ext_ctx.get("name") or "").strip()

                    place_obj = adata.get("place")
                    if isinstance(place_obj, dict) and place_obj.get("name"):
                        texts.append(f"📍 {place_obj['name']}")

        full_text = "\n\n".join(dict.fromkeys(t for t in texts if t))
        if not full_text and not title and not raw_media and not ext_url:
            return None

        return {
            "timestamp": ts,
            "title": title,
            "album_name": "",
            "content": full_text,
            "external_url": ext_url,
            "external_title": ext_title,
            "raw_media": raw_media,
        }

    @staticmethod
    def _extract_posts_from_html(raw_html: str) -> List[Dict[str, Any]]:
        """Secours pour les exports Facebook au format HTML."""
        results: List[Dict[str, Any]] = []
        blocks = re.split(r'<div class="(?:pam _3-95|uiBoxWhite|_a6-g)[^"]*"[^>]*>', raw_html)
        for blk in blocks[1:]:
            imgs = re.findall(r'<img\b[^>]*src=["\']([^"\']+)["\']', blk, flags=re.IGNORECASE)
            vids = re.findall(r'<video\b[^>]*src=["\']([^"\']+)["\']', blk, flags=re.IGNORECASE)
            vids += re.findall(r'<source\b[^>]*src=["\']([^"\']+)["\']', blk, flags=re.IGNORECASE)

            raw_media = []
            for u in imgs + vids:
                if not u.startswith(("http://", "https://", "data:")):
                    raw_media.append({"uri": html.unescape(u), "caption": ""})

            txt = re.sub(r"<(script|style)\b[^>]*>.*?</\1>", "", blk, flags=re.IGNORECASE | re.DOTALL)
            txt = re.sub(r"<br\s*/?>", "\n", txt, flags=re.IGNORECASE)
            txt = re.sub(r"</(p|div|h1|h2|h3|section)>", "\n", txt, flags=re.IGNORECASE)
            txt = re.sub(r"<[^>]+>", " ", txt)
            txt = html.unescape(txt)
            lines = [re.sub(r"\s+", " ", ln).strip() for ln in txt.splitlines()]
            lines = [ln for ln in lines if ln]
            if not lines and not raw_media:
                continue

            content = "\n".join(lines[:25])
            results.append(
                {
                    "timestamp": int(time.time()),
                    "title": lines[0][:100] if lines else "Publication HTML",
                    "album_name": "",
                    "content": content,
                    "external_url": "",
                    "external_title": "",
                    "raw_media": raw_media,
                }
            )
        return results


def ensure_demo_seed(db: FBDatabase) -> None:
    stats = db.get_stats()
    if stats["total_posts"] > 0:
        return

    demo_svg = (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420">'
        '<rect width="800" height="420" fill="#1877f2"/>'
        '<rect x="36" y="36" width="728" height="348" rx="18" fill="#ffffff" opacity="0.14"/>'
        '<text x="400" y="185" text-anchor="middle" font-family="Arial,sans-serif" font-weight="bold" font-size="38" fill="#ffffff">'
        "Ma Page Facebook Hors-Ligne"
        "</text>"
        '<text x="400" y="240" text-anchor="middle" font-family="Arial,sans-serif" font-size="22" fill="#e0edff">'
        "Photos, Videos, Publications &amp; Recherche Instantanee (0 Mo Internet)"
        "</text>"
        "</svg>"
    )
    rel_img = "demo/apercu_bienvenue_DEMO.svg"
    # On crée aussi une petite image PNG 100% valide ou SVG — utilisons .png minimal ou autorisons .svg
    abs_svg = db.medias_dir / rel_img
    abs_svg.parent.mkdir(parents=True, exist_ok=True)
    abs_svg.write_text(demo_svg, encoding="utf-8")

    now = int(time.time())
    db.upsert_post(
        {
            "post_uid": "demo_welcome_1",
            "timestamp": now,
            "title": "[DÉMO] Bienvenue dans Facebook Page Offline (Zéro Risque de Blocage !)",
            "content": (
                "Cet outil transforme le fichier .zip officiel de votre Page Facebook en une véritable bibliothèque hors-ligne sur votre disque dur externe, PC, Android et iPhone !\n\n"
                "✅ ÉTAPE 1 (À faire depuis chez vous en 1 minute avant d'aller au cybercafé) :\n"
                "Sur Facebook, basculez sur votre Page → Paramètres → « Télécharger les informations de la Page » → choisissez le format JSON (recommandé) → « Créer un fichier ». Facebook prépare le gros fichier tout seul sur ses serveurs !\n\n"
                "✅ ÉTAPE 2 (Au cybercafé) :\n"
                "Téléchargez le fichier .zip prêt depuis Facebook et glissez-le dans le sous-dossier « imports/ » de facebook-offline, puis cliquez sur « 📥 Importer mes archives Facebook » en haut à droite.\n\n"
                "🔍 Toutes vos publications (en malgache et en français), vos albums photos et vos vidéos MP4 seront alors consultables et cherchables hors-ligne à vie !"
            ),
            "is_demo": 1,
            "media": [
                {
                    "media_type": "photo",
                    "rel_path": rel_img,
                    "caption": "Exemple d'aperçu photo hors-ligne",
                    "file_size": len(demo_svg.encode("utf-8")),
                }
            ],
        }
    )
