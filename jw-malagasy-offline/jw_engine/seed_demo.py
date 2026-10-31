# -*- coding: utf-8 -*-
"""Amorçage initial hors-ligne pour tester immédiatement le lecteur EPUB et la recherche Malgache."""

from __future__ import annotations

from pathlib import Path

from .database import JWDatabase
from .epub_reader import build_demo_epub_bytes, extract_epub_chapters
from .sync_manager import JWSyncManager


def ensure_initial_state(db: JWDatabase, sync_mgr: JWSyncManager) -> None:
    stats = db.get_stats()
    if stats["total_catalog_pubs"] == 0:
        sync_mgr.ensure_starter_catalog_seeded()

    # Si aucun fichier réel ni démo n'est encore indexé, crée un guide EPUB de démonstration en malgache/français
    stats = db.get_stats()
    if stats["downloaded_pubs"] == 0 and stats["demo_pubs"] == 0:
        files_dir = db.get_files_dir()
        rel_epub = "EPUB/00_Demo/Guide_Demarrage_Malagasy_DEMO.epub"
        abs_epub = files_dir / rel_epub
        abs_epub.parent.mkdir(parents=True, exist_ok=True)

        demo_chapters = [
            (
                "1. Tongasoa — Bibliothèque Hors-Ligne Malagasy (JWPUB, EPUB & PDF)",
                [
                    "Tongasoa eto amin'ny fitaovana fitahirizana sy fikarohana boky amin'ny teny malagasy (MG) ho an'ny fampiasana manokana ivelan'ny aterineto (Offline).",
                    "Ity fitaovana ity dia natao manokana ho an'ny kapila mangirana ivelany (disque dur externe), solosaina Windows, ary finday Android sy iPhone.",
                    "Tsindrio ny bokotra « Télécharger / Mettre à jour (MG) » eo ambony havanana mba hisafidianana ireo sokajy tianao halaina: Baiboly (bi12), Boky (lff, bhs, rr, jy), Bokikely, Ny Tilikambo Fiambenana (w, wp), Mifohaza! (g), ary Tari-dalana (mwb).",
                ],
            ),
            (
                "2. Fikarohana teny sy toko (Mode Recherche hors-ligne sur vos EPUB/PDF)",
                [
                    "Rehefa voatahiry ny rakitra EPUB sy PDF amin'ny teny malagasy (ohatra: Soratra Masina bi12, Ankafizo Mandrakizay ny Fiainana lff, Tilikambo Fiambenana), ny fitaovana dia manao fanondroana (indexation FTS5) isaky ny toko sy andininy.",
                    "Azonao atao ny mikaroka teny malagasy avy hatrany toy ny hoe: Fanjakan'Andriamanitra, fanantenana, fitsanganana amin'ny maty, Salamo 83, Matio 24, na Apokalypsy 21.",
                    "Tsindrio fotsiny ny valin'ny fikarohana dia hisokatra eo no ho eo ilay toko feno amin'ny teny malagasy, tsy mila aterineto mihitsy!",
                ],
            ),
            (
                "3. Fampiasana amin'ny Finday Android sy iPhone (JW Library & Wi-Fi Local)",
                [
                    "Rakitra JWPUB ho an'ny JW Library : Ny rakitra .jwpub rehetra dia voatahiry milamina ao anatin'ny lahatahiry fichiers/JWPUB/ arakaraka ny sokajy (01_Baiboly, 03_Boky, 05_Tilikambo_Fiambenana...). Azonao alefa amin'ny tariby USB na Wi-Fi mankany amin'ny Android sy iPhone mba hosokafana ao amin'ny JW Library tsy mandany data.",
                    "Fikarohana amin'ny finday (Android & iPhone) amin'ny alalan'ny Wi-Fi local : Tsindrio ny bokotra « Mode Téléphone » mba hahita ny adiresy Wi-Fi (http://192.168.x.x:8767). Sokafy amin'ny Safari (iPhone) na Chrome (Android) dia afaka mikaroka sy mamaky ireo boky rehetra eo amin'ny kapila mangirana ivelany ianao!",
                ],
            ),
        ]

        epub_bytes = build_demo_epub_bytes(
            "Torolalana Fampiasana — JW Malagasy Offline (Démo)",
            demo_chapters,
        )
        abs_epub.write_bytes(epub_bytes)

        pub_id = db.upsert_publication(
            {
                "pub_key": "demo_guide_mg",
                "pub_symbol": "guide",
                "issue": "",
                "year": 2026,
                "category": "fitaovana",
                "title": "[DÉMO] Torolalana — Recherche & Lecture Hors-Ligne Malgache",
                "short_title": "Guide Démo",
                "is_demo": 1,
            }
        )
        db.upsert_pub_file(
            pub_id=pub_id,
            file_format="EPUB",
            rel_path=rel_epub,
            checksum="demo",
            file_size=len(epub_bytes),
            downloaded=True,
        )
        parsed = extract_epub_chapters(epub_bytes)
        db.replace_publication_chapters(
            pub_id,
            "[DÉMO] Torolalana — Recherche & Lecture Hors-Ligne Malgache",
            "EPUB",
            parsed,
        )
