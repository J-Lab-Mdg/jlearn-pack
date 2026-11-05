"""Synchroniseur complet et incrementiel pour https://teny-malagasy.akademia-malagasy.mg/."""

from __future__ import annotations

import datetime as dt
import re
import ssl
import threading
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path
from typing import Any

from .database import AkademiaDB
from .parser import (
    decode_html_bytes,
    extract_links_and_scripts,
    extract_scientific_terms,
    parse_article_page,
    parse_vocab_page,
)

BASE_HTTPS = "https://teny-malagasy.akademia-malagasy.mg/"
ALLOWED_HOST = "teny-malagasy.akademia-malagasy.mg"

MG_LETTERS = [
    "a", "b", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "r", "s", "t", "v", "z",
]

EXTRA_FR_CODES = ["cf", "qf", "uf", "wf", "xf", "yf"]

KNOWN_ARTICLES: list[dict[str, str]] = [
    {
        "slug": "foibe-fandraisana",
        "path": "index.php",
        "category": "Tantara & Vaovao",
        "title": "Ny Foibe momba ny Teny an'ny Akademia Malagasy (1977–2026)",
        "author": "Foibe momba ny Teny",
    },
    {
        "slug": "fomba-fanoratra",
        "path": "fanoratra.php",
        "category": "Fitsipika & Fanoratra",
        "title": "Fomba fanoratra — Ny « ana » manomboka ny teny (an- / am- / an')",
        "author": "Foibe momba ny Teny",
    },
    {
        "slug": "fanagasiana-teny-vahiny",
        "path": "fanagasiana.php",
        "category": "Fitsipika & Fanoratra",
        "title": "Fanagasiana ny Teny vahiny (Fitsipika 16)",
        "author": "Foibe momba ny Teny",
    },
    {
        "slug": "matoanteny-rajaona",
        "path": "matoanteny.php",
        "category": "Haiteny & Fitsipiteny",
        "title": "Ny Matoanteny eo amin'ny Teny malagasy",
        "author": "Pr. Siméon Rajaona",
    },
    {
        "slug": "fifehezanteny-rabenilaina",
        "path": "fifehezanteny.php",
        "category": "Haiteny & Fitsipiteny",
        "title": "Ny fifehezanteny malagasy",
        "author": "Pr. Roger Bruno Rabenilaina",
    },
    {
        "slug": "feonteny-andrianasolo",
        "path": "feonteny.php",
        "category": "Haiteny & Fitsipiteny",
        "title": "Ny feon-teny malagasy",
        "author": "Fidèle Joseph Andrianasolo",
    },
    {
        "slug": "fandrafetana-siantifika",
        "path": "fandrafetana.php",
        "category": "Haiteny & Fitsipiteny",
        "title": "Ny Fandrafetana ny teny siantifika",
        "author": "Pr. Raoelina Andriambololona & Fred Ramiandrasoa",
    },
    {
        "slug": "tantaran-ny-teny",
        "path": "tantara.php",
        "category": "Tantara & Vaovao",
        "title": "Ny Tantaran'ny Teny malagasy & Bulletin (1902–2001)",
        "author": "Dr Randria Michel & Akademia Malagasy",
    },
    {
        "slug": "vaovao-1-unesco",
        "path": "vaovao.php?id=1",
        "category": "Tantara & Vaovao",
        "title": "Les langues maternelles comme base stratégique au service de la réconciliation",
        "author": "Pr. Marie Jeanne Razanamanana & Dr Oliva Ramavonirina",
    },
    {
        "slug": "vaovao-2-acalan",
        "path": "vaovao.php?id=2",
        "category": "Tantara & Vaovao",
        "title": "Ny Teny malagasy eo anivon'ny Firaisambe Afrikanina (ACALAN)",
        "author": "Dr Oliva Ramavonirina",
    },
    {
        "slug": "vaovao-3-kibushi",
        "path": "vaovao.php?id=3",
        "category": "Tantara & Vaovao",
        "title": "Ny Endriky ny teny malagasy miampita sisintany (Kibushi / Shibushi)",
        "author": "Dr Oliva Ramavonirina",
    },
    {
        "slug": "vahatra-78",
        "path": "vahatra.php",
        "category": "Vahatra & Dikanteny",
        "title": "Vahatra — Lisitry ny lohahevitra 78 momba ny kolontsaina sy teny malagasy",
        "author": "Foibe momba ny Teny / TVM",
    },
    {
        "slug": "dikanteny-sehatra",
        "path": "dikanteny.php",
        "category": "Vahatra & Dikanteny",
        "title": "Sehatra efa nanaovana fandikan-teny ho amin'ny Teny malagasy",
        "author": "Foibe momba ny Teny",
    },
    {
        "slug": "bibliografia-1880-2001",
        "path": "biblio.php",
        "category": "Bibliôgrafia",
        "title": "Bibliôgrafia sy Vao niseho (1880–2001)",
        "author": "Akademia Malagasy",
    },
]

KNOWN_VOCAB_MODULES: list[dict[str, str]] = [
    {
        "php": "fanabeazana.php",
        "domain": "Fanabeazana",
    }
]

KNOWN_PDFS: list[dict[str, str]] = [
    {
        "slug": "iray-volana-2026",
        "path": "pro/0.pdf",
        "title": "Iray volan'ny Teny malagasy 2026 — Fifaninanana « fanabeazam-boho ny teny »",
        "description": "Fitsipika sy antso fandraisana anjara amin'ny fifaninanana voambolana karakarain'ny Foibe momba ny Teny sy ny Akademia Malagasy (2026).",
    },
    {
        "slug": "ohabolana-2025",
        "path": "pro/oha.pdf",
        "title": "Iray volan'ny Teny malagasy 2025 — Fifaninanana mamorona ohabolana",
        "description": "Fepetra amin'ny fifaninanana mamorona ohabolana vaovao karakarain'ny Foibe momba ny Teny an'ny Akademia Malagasy (Tahala Rarihasina Analakely).",
    },
]


def normalize_akademia_url(url: str) -> str:
    """Force https:// sur teny-malagasy.akademia-malagasy.mg (http:// renvoie parfois HTTP 500)."""
    parsed = urllib.parse.urlsplit(url.strip())
    scheme = "https" if parsed.hostname == ALLOWED_HOST else (parsed.scheme or "https")
    return urllib.parse.urlunsplit((scheme, parsed.netloc, parsed.path, parsed.query, ""))


class SyncManager:
    """Gestionnaire de synchronisation arriere-plan thread-safe."""

    def __init__(self, db: AkademiaDB, pdf_dir: Path) -> None:
        self.db = db
        self.pdf_dir = Path(pdf_dir)
        self.pdf_dir.mkdir(parents=True, exist_ok=True)
        self._lock = threading.Lock()
        self._stop_event = threading.Event()
        self._thread: threading.Thread | None = None
        self._ssl_unverified: ssl.SSLContext | None = None
        self._state: dict[str, Any] = {
            "running": False,
            "phase": "idle",
            "done": 0,
            "total": 0,
            "percent": 0,
            "docs_synced": 0,
            "vocab_synced": 0,
            "pdfs_synced": 0,
            "current_item": "",
            "error": "",
            "logs": [],
        }

    def get_status(self) -> dict[str, Any]:
        with self._lock:
            return {
                **self._state,
                "logs": list(self._state["logs"][-40:]),
            }

    def _log(self, msg: str) -> None:
        stamp = dt.datetime.now().strftime("%H:%M:%S")
        with self._lock:
            self._state["logs"].append(f"[{stamp}] {msg}")
            if len(self._state["logs"]) > 120:
                self._state["logs"] = self._state["logs"][-120:]

    def _update(self, **kwargs: Any) -> None:
        with self._lock:
            self._state.update(kwargs)
            total = max(1, int(self._state.get("total") or 1))
            done = int(self._state.get("done") or 0)
            self._state["percent"] = min(100, int(round((done * 100.0) / total)))

    def start_sync(
        self,
        *,
        include_vocab: bool = True,
        include_treatises: bool = True,
        include_pdfs: bool = True,
    ) -> bool:
        with self._lock:
            if self._state["running"]:
                return False
            self._stop_event.clear()
            self._state.update(
                {
                    "running": True,
                    "phase": "demarrage",
                    "done": 0,
                    "total": 10,
                    "percent": 0,
                    "docs_synced": 0,
                    "vocab_synced": 0,
                    "pdfs_synced": 0,
                    "current_item": "Connexion à teny-malagasy.akademia-malagasy.mg...",
                    "error": "",
                    "logs": [],
                }
            )
        self._thread = threading.Thread(
            target=self._run_sync,
            kwargs={
                "include_vocab": include_vocab,
                "include_treatises": include_treatises,
                "include_pdfs": include_pdfs,
            },
            daemon=True,
        )
        self._thread.start()
        return True

    def stop_sync(self) -> None:
        self._stop_event.set()
        self._log("Arrêt demandé par l'utilisateur...")

    def _fetch_bytes(self, url: str, timeout: float = 20.0) -> bytes | None:
        target = normalize_akademia_url(url)
        headers = {
            "User-Agent": (
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AkademiaMalagasyOffline/1.0 (Personal Offline Study)"
            ),
            "Accept": "text/html,application/xhtml+xml,application/pdf,*/*;q=0.8",
            "Accept-Language": "mg,fr-FR;q=0.9,fr;q=0.8,en;q=0.6",
        }
        req = urllib.request.Request(target, headers=headers)
        try:
            ctx = self._ssl_unverified
            with urllib.request.urlopen(req, timeout=timeout, context=ctx) as resp:
                if resp.status >= 400:
                    return None
                return resp.read()
        except ssl.SSLCertVerificationError:
            # Certains serveurs institutionnels .mg ont parfois un certificat intermediaire expire
            if urllib.parse.urlsplit(target).hostname == ALLOWED_HOST:
                self._log("Certificat SSL du serveur .mg expiré ou incomplet : repli TLS tolérant activé.")
                unverified = ssl._create_unverified_context()
                self._ssl_unverified = unverified
                try:
                    with urllib.request.urlopen(req, timeout=timeout, context=unverified) as resp:
                        if resp.status >= 400:
                            return None
                        return resp.read()
                except Exception:
                    return None
            return None
        except urllib.error.HTTPError as exc:
            if exc.code == 404:
                return None
            self._log(f"HTTP {exc.code} sur {target}")
            return None
        except Exception as exc:
            self._log(f"Erreur réseau sur {target} : {exc}")
            return None

    def _discover_site_endpoints(self) -> tuple[list[dict[str, str]], list[dict[str, str]], list[dict[str, str]]]:
        """Explore index.php et ses scripts de menu pour decouvrir toute nouvelle page PHP ou PDF."""
        articles = list(KNOWN_ARTICLES)
        vocab_mods = list(KNOWN_VOCAB_MODULES)
        pdfs = list(KNOWN_PDFS)

        known_article_paths = {a["path"].lower() for a in articles}
        known_vocab_phps = {v["php"].lower() for v in vocab_mods}
        known_pdf_paths = {p["path"].lower() for p in pdfs}

        raw_index = self._fetch_bytes(urllib.parse.urljoin(BASE_HTTPS, "index.php"))
        if not raw_index:
            return articles, vocab_mods, pdfs

        index_html = decode_html_bytes(raw_index)
        links, scripts = extract_links_and_scripts(index_html, BASE_HTTPS)

        # Inspecter d'eventuels fichiers JS de menu du meme domaine
        for script_url in scripts[:8]:
            if self._stop_event.is_set():
                break
            parsed_sc = urllib.parse.urlsplit(script_url)
            if parsed_sc.hostname != ALLOWED_HOST:
                continue
            sc_bytes = self._fetch_bytes(script_url, timeout=10.0)
            if sc_bytes:
                sc_text = decode_html_bytes(sc_bytes)
                more_links, _ = extract_links_and_scripts(sc_text, script_url)
                links.extend(more_links)

        # Tester aussi vaovao.php?id=4..7 au cas ou de nouveaux communiques existent
        for vid in range(4, 8):
            links.append((f"{BASE_HTTPS}vaovao.php?id={vid}", f"Vaovao #{vid}"))

        for href, label in links:
            if self._stop_event.is_set():
                break
            parsed = urllib.parse.urlsplit(normalize_akademia_url(href))
            if parsed.hostname != ALLOWED_HOST:
                continue
            rel_path = parsed.path.lstrip("/")
            if not rel_path:
                continue
            full_rel = f"{rel_path}?{parsed.query}" if parsed.query else rel_path

            if rel_path.lower().endswith(".pdf"):
                if rel_path.lower() not in known_pdf_paths:
                    known_pdf_paths.add(rel_path.lower())
                    slug = re.sub(r"[^a-z0-9]+", "-", rel_path.lower()).strip("-")
                    pdfs.append(
                        {
                            "slug": slug,
                            "path": rel_path,
                            "title": label or f"Tahirin-kevitra PDF ({Path(rel_path).name})",
                            "description": "Tahirin-kevitra PDF hita tao amin'ny habaky ny Foibe momba ny Teny.",
                        }
                    )
                continue

            if not rel_path.lower().endswith(".php"):
                continue

            # Ignorer les liens deja connus ou les sous-pages ?id=a d'un module lexique connu
            if rel_path.lower() in known_vocab_phps:
                continue
            if full_rel.lower() in known_article_paths or rel_path.lower() in known_article_paths:
                continue

            # Sonder cette page .php inconnue pour voir si elle existe et si c'est un lexique A-Z
            probe_bytes = self._fetch_bytes(urllib.parse.urljoin(BASE_HTTPS, full_rel), timeout=12.0)
            if not probe_bytes:
                continue
            probe_html = decode_html_bytes(probe_bytes)
            if "404 Not Found" in probe_html or len(probe_html.strip()) < 200:
                continue

            # Est-ce un module lexique avec onglets ?id=a & ?id=b ?
            if (
                not parsed.query
                and re.search(rf"{re.escape(Path(rel_path).name)}\?id=a\b", probe_html, re.IGNORECASE)
                and re.search(rf"{re.escape(Path(rel_path).name)}\?id=b\b", probe_html, re.IGNORECASE)
            ):
                known_vocab_phps.add(rel_path.lower())
                dom_name = (label or Path(rel_path).stem.replace("_", " ").title()).strip()
                vocab_mods.append({"php": rel_path, "domain": dom_name})
                self._log(f"Nouveau lexique A–Z découvert automatiquement : {dom_name} ({rel_path})")
            else:
                # Verifier que la page contient un vrai texte (pas une coquille vide)
                parsed_doc = parse_article_page(
                    probe_html,
                    slug="probe",
                    url=urllib.parse.urljoin(BASE_HTTPS, full_rel),
                )
                if len(parsed_doc["body_text"]) >= 120:
                    known_article_paths.add(full_rel.lower())
                    slug = re.sub(r"[^a-z0-9]+", "-", full_rel.lower()).strip("-")
                    articles.append(
                        {
                            "slug": slug,
                            "path": full_rel,
                            "category": "Tantara & Vaovao" if "vaovao" in rel_path.lower() else "Tahirin-kevitra",
                            "title": label or parsed_doc["title"],
                            "author": "Foibe momba ny Teny",
                        }
                    )
                    self._log(f"Page académique découverte : {label or full_rel}")

        return articles, vocab_mods, pdfs

    def _run_sync(
        self,
        *,
        include_vocab: bool,
        include_treatises: bool,
        include_pdfs: bool,
    ) -> None:
        try:
            self._log("Démarrage de la synchronisation officielle (HTTPS)...")
            test_bytes = self._fetch_bytes(urllib.parse.urljoin(BASE_HTTPS, "index.php"))
            if not test_bytes:
                self._update(
                    running=False,
                    phase="error",
                    current_item="",
                    error=(
                        "Impossible de joindre https://teny-malagasy.akademia-malagasy.mg/. "
                        "Vérifiez votre connexion Internet (cybercafé ou données mobiles), puis réessayez."
                    ),
                )
                self._log("Échec de connexion au serveur Akademia Malagasy.")
                return

            self._update(phase="decouverte", current_item="Exploration du menu et des rubriques du Foibe...")
            articles, vocab_mods, pdfs = self._discover_site_endpoints()

            vocab_tasks: list[tuple[str, str, str, str]] = []
            if include_vocab:
                for mod in vocab_mods:
                    php_file = mod["php"]
                    domain = mod["domain"]
                    for let in MG_LETTERS:
                        vocab_tasks.append((php_file, domain, "mg-fr", let))
                        vocab_tasks.append((php_file, domain, "fr-mg", f"{let}f"))
                    for extra_fr in EXTRA_FR_CODES:
                        vocab_tasks.append((php_file, domain, "fr-mg", extra_fr))

            doc_tasks = articles if include_treatises else []
            pdf_tasks = pdfs if include_pdfs else []

            total_steps = max(1, len(doc_tasks) + len(vocab_tasks) + len(pdf_tasks))
            done_steps = 0
            self._update(total=total_steps, done=0, phase="synchronisation")
            self._log(
                f"Plan de synchronisation : {len(doc_tasks)} traités/articles, "
                f"{len(vocab_tasks)} pages de lexique, {len(pdf_tasks)} fichiers PDF."
            )

            # 1. Traites, regles, histoire, Vahatra, Bibliographie
            for art in doc_tasks:
                if self._stop_event.is_set():
                    break
                url = urllib.parse.urljoin(BASE_HTTPS, art["path"])
                self._update(current_item=f"Article : {art['title']}")
                raw = self._fetch_bytes(url)
                if raw:
                    html_str = decode_html_bytes(raw)
                    if "404 Not Found" not in html_str:
                        doc = parse_article_page(
                            html_str,
                            slug=art["slug"],
                            url=url,
                            default_title=art["title"],
                            default_category=art["category"],
                            default_author=art.get("author", ""),
                        )
                        if len(doc["body_text"]) >= 40:
                            self.db.upsert_document(**doc, is_seed=False)
                            with self._lock:
                                self._state["docs_synced"] += 1
                            self._log(f"✓ Traité enregistré : {doc['title']} ({len(doc['body_text'].split())} mots)")

                            if art["path"] == "fandrafetana.php":
                                sci_entries = extract_scientific_terms(doc["body_text"], url)
                                if sci_entries:
                                    added_sci = self.db.upsert_vocab_batch(sci_entries, is_seed=False)
                                    with self._lock:
                                        self._state["vocab_synced"] += added_sci
                                    self._log(f"✓ {added_sci} termes scientifiques extraits dans le Voambolana.")

                done_steps += 1
                self._update(done=done_steps)
                time.sleep(0.08)

            # 2. Pages Voambolana A-Z (MG->FR et FR->MG)
            for php_file, domain, direction, code in vocab_tasks:
                if self._stop_event.is_set():
                    break
                url = urllib.parse.urljoin(BASE_HTTPS, f"{php_file}?id={code}")
                dir_label = "MG→FR" if direction == "mg-fr" else "FR→MG"
                letter_upper = code[0].upper()
                self._update(current_item=f"Voambolana {domain} ({dir_label}) — Lettre {letter_upper}")
                raw = self._fetch_bytes(url)
                if raw:
                    html_str = decode_html_bytes(raw)
                    if "404 Not Found" not in html_str:
                        parsed_entries = parse_vocab_page(
                            html_str,
                            domain=domain,
                            direction=direction,
                            letter=letter_upper,
                            source_url=url,
                        )
                        if parsed_entries:
                            added = self.db.upsert_vocab_batch(
                                parsed_entries,
                                is_seed=False,
                                replace_seed_for_domain_letter=(domain, direction, letter_upper),
                            )
                            with self._lock:
                                self._state["vocab_synced"] += added
                            self._log(
                                f"✓ {domain} [{dir_label} · {letter_upper}] : {added} entrées indexées"
                            )
                done_steps += 1
                self._update(done=done_steps)
                time.sleep(0.06)

            # 3. Documents PDF officiels (/pro/*.pdf)
            for pdf_item in pdf_tasks:
                if self._stop_event.is_set():
                    break
                url = urllib.parse.urljoin(BASE_HTTPS, pdf_item["path"])
                self._update(current_item=f"PDF : {pdf_item['title']}")
                raw_pdf = self._fetch_bytes(url, timeout=35.0)
                if raw_pdf and raw_pdf.startswith(b"%PDF"):
                    filename = f"{pdf_item['slug']}.pdf"
                    dest = self.pdf_dir / filename
                    dest.write_bytes(raw_pdf)
                    self.db.upsert_pdf(
                        slug=pdf_item["slug"],
                        title=pdf_item["title"],
                        description=pdf_item["description"],
                        source_url=url,
                        local_relpath=f"pdf/{filename}",
                        file_size=len(raw_pdf),
                        downloaded=True,
                    )
                    with self._lock:
                        self._state["pdfs_synced"] += 1
                    self._log(f"✓ PDF téléchargé : {filename} ({len(raw_pdf) // 1024} Ko)")
                done_steps += 1
                self._update(done=done_steps)

            if self._stop_event.is_set():
                self._update(running=False, phase="stopped", current_item="Synchronisation interrompue.")
                self._log("Synchronisation arrêtée proprement (les données déjà reçues sont sauvegardées).")
                return

            now_str = dt.datetime.now().strftime("%Y-%m-%d %H:%M")
            self.db.set_setting("last_sync_at", now_str)
            self.db.set_setting("sync_complete", "1")
            self._update(
                running=False,
                phase="completed",
                done=total_steps,
                current_item="Synchronisation terminée avec succès !",
            )
            self._log("Synchronisation 100 % terminée et indexée dans SQLite FTS5.")
        except Exception as exc:
            self._update(
                running=False,
                phase="error",
                current_item="",
                error=f"Erreur inattendue : {exc}",
            )
            self._log(f"Erreur critique : {exc}")
