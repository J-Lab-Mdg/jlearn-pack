# -*- coding: utf-8 -*-
"""Catégories et classification des publications en malgache (`MG`).

Utilise les symboles officiels (`KeySymbol`) et `PublicationTypeId` du catalogue public JW.
"""

from __future__ import annotations

import re
import unicodedata
from typing import Any, Dict, List, Set

CATEGORIES: List[Dict[str, Any]] = [
    {
        "code": "baiboly",
        "label": "Baiboly (Bibles en malgache)",
        "short": "Baiboly",
        "folder": "01_Baiboly",
        "symbols": {"bi12", "nwt", "nwtsty", "bi7", "bi8", "int", "rh", "bi22"},
    },
    {
        "code": "fitaovana",
        "label": "Fitaovana Fikarohana (Étude perspicace, Index, Texte du jour…)",
        "short": "Fikarohana & Index",
        "folder": "02_Fitaovana_Fikarohana",
        "symbols": {"it", "rs", "si", "wol", "es", "es24", "es25", "es26", "es27", "nwtpkt"},
    },
    {
        "code": "boky",
        "label": "Boky (Livres d'étude biblique)",
        "short": "Boky (Livres)",
        "folder": "03_Boky",
        "symbols": {
            "lff", "bhs", "bh", "rr", "jy", "lfb", "lvs", "lv", "kr", "ia",
            "cl", "cf", "bt", "yp1", "yp2", "fy", "dp", "jr", "jd", "re",
            "gt", "my", "lr", "wt", "kl", "sh", "gm", "pe",
        },
    },
    {
        "code": "bokikely",
        "label": "Bokikely sy Trakta (Brochures & Tracts)",
        "short": "Bokikely & Trakta",
        "folder": "04_Bokikely_sy_Trakta",
        "symbols": {
            "fg", "ll", "ld", "lffi", "hl", "lf", "lc", "ph", "pc", "ypq",
            "rk", "rj", "bm", "dg", "we", "gf", "rq", "sp", "jt", "ie",
            "ol", "kp", "ed", "la", "ba", "gu", "kt", "t-30", "t-31", "t-32",
            "t-33", "t-34", "t-35", "t-36", "t-37", "ay", "th", "lmd",
        },
    },
    {
        "code": "tilikambo",
        "label": "Ny Tilikambo Fiambenana (La Tour de Garde — étude & publique)",
        "short": "Tilikambo Fiambenana",
        "folder": "05_Tilikambo_Fiambenana",
        "symbols": {"w", "wp"},
    },
    {
        "code": "mifohaza",
        "label": "Mifohaza! (Réveillez-vous !)",
        "short": "Mifohaza!",
        "folder": "06_Mifohaza",
        "symbols": {"g"},
    },
    {
        "code": "taridalana",
        "label": "Tari-dalana & Fanompoana (Cahier Vie et Ministère, Ministère…)",
        "short": "Tari-dalana & Fanompoana",
        "folder": "07_Tari-dalana_sy_Fanompoana",
        "symbols": {"mwb", "km", "od", "sfl"},
    },
    {
        "code": "hafa",
        "label": "Fihirana, Fivoriambe & Hafa (Cantiques, Programmes, Autres)",
        "short": "Fihirana & Hafa",
        "folder": "08_Fihirana_sy_Hafa",
        "symbols": {"sjj", "sjjm", "sn", "snnw", "iasn", "brfi"},
    },
]

CATEGORY_BY_CODE: Dict[str, Dict[str, Any]] = {c["code"]: c for c in CATEGORIES}

# Catalogue initial essentiel pré-enregistré (permet de lancer un téléchargement ciblé
# immédiatement, avant même ou sans télécharger les 57 Mo du catalogue mondial complet).
CURATED_STARTER_PUBS: List[Dict[str, Any]] = [
    {"pub_symbol": "bi12", "issue": "", "year": 2008, "category": "baiboly", "title": "Ny Soratra Masina—Fandikan-tenin’ny Tontolo Vaovao"},
    {"pub_symbol": "lff", "issue": "", "year": 2021, "category": "boky", "title": "Ankafizo Mandrakizay ny Fiainana!—Fianarana Baiboly Natao ho Anao"},
    {"pub_symbol": "bhs", "issue": "", "year": 2015, "category": "boky", "title": "Inona Marina no Ampianarin’ny Baiboly? (Boky Fanazavana)"},
    {"pub_symbol": "rr", "issue": "", "year": 2018, "category": "boky", "title": "Naverina Tamin’ny Laoniny ny Fivavahana Madio!"},
    {"pub_symbol": "jy", "issue": "", "year": 2014, "category": "boky", "title": "Jesosy—Ilay Lalana sy Fahamarinana ary Fiainana"},
    {"pub_symbol": "lfb", "issue": "", "year": 2017, "category": "boky", "title": "Tantara ao Amin’ny Baiboly—Inona no Ianarantsika Avy Amin’izy Ireny?"},
    {"pub_symbol": "lvs", "issue": "", "year": 2017, "category": "boky", "title": "Ahoana no Hitoeranao ao Amin’ny Fitiavan’Andriamanitra?"},
    {"pub_symbol": "bt", "issue": "", "year": 2009, "category": "boky", "title": "Mitoria Momba ny Fanjakan’Andriamanitra"},
    {"pub_symbol": "cl", "issue": "", "year": 2014, "category": "boky", "title": "Manatòna an’i Jehovah"},
    {"pub_symbol": "cf", "issue": "", "year": 2007, "category": "boky", "title": "‘Avia Hanara-dia Ahy’"},
    {"pub_symbol": "kr", "issue": "", "year": 2014, "category": "boky", "title": "Miasa ny Fanjakan’Andriamanitra!"},
    {"pub_symbol": "ia", "issue": "", "year": 2013, "category": "boky", "title": "Tahafo ny Finoan’izy Ireo"},
    {"pub_symbol": "it", "issue": "", "year": 2018, "category": "fitaovana", "title": "Fandalinana ny Soratra Masina (Étude perspicace)"},
    {"pub_symbol": "rs", "issue": "", "year": 2005, "category": "fitaovana", "title": "Fanjohian-kevitra Avy Amin’ny Soratra Masina"},
    {"pub_symbol": "es26", "issue": "", "year": 2026, "category": "fitaovana", "title": "Fandinihana ny Soratra Masina Isan’andro—2026"},
    {"pub_symbol": "fg", "issue": "", "year": 2012, "category": "bokikely", "title": "Vaovao Mahafaly Avy Amin’Andriamanitra!"},
    {"pub_symbol": "lmd", "issue": "", "year": 2023, "category": "bokikely", "title": "Tiavo ny Olona—Ataovy Mpianatra Izy Ireo"},
    {"pub_symbol": "th", "issue": "", "year": 2018, "category": "bokikely", "title": "Mazotoa Mamaky Teny sy Mampianatra"},
    {"pub_symbol": "ll", "issue": "", "year": 2011, "category": "bokikely", "title": "Henoy Andriamanitra dia Hiaina Mandrakizay Ianao"},
    {"pub_symbol": "ypq", "issue": "", "year": 2016, "category": "bokikely", "title": "Fanontaniana 10 Apetraky ny Tanora—Ny Valiny"},
    {"pub_symbol": "rj", "issue": "", "year": 2015, "category": "bokikely", "title": "Miverena Amin’i Jehovah"},
    {"pub_symbol": "od", "issue": "", "year": 2019, "category": "taridalana", "title": "Voalamina Hanao ny Sitrapon’i Jehovah"},
    {"pub_symbol": "sjj", "issue": "", "year": 2016, "category": "hafa", "title": "Mihirà Amin-kafaliana ho An’i Jehovah (Fihirana)"},
]


def strip_accents(text: str) -> str:
    if not text:
        return ""
    decomp = unicodedata.normalize("NFD", text)
    return "".join(ch for ch in decomp if unicodedata.category(ch) != "Mn")


def normalize_search_text(text: str) -> str:
    s = strip_accents(text or "").lower()
    # Préserve chiffres et lettres (ex: "matio 24 14" pour "Matio 24:14")
    s = re.sub(r"[^a-z0-9]+", " ", s)
    return re.sub(r"\s+", " ", s).strip()


def normalise_issue(issue_val: Any) -> str:
    s = str(issue_val or "").strip()
    if s in ("", "0", "00000000", "None"):
        return ""
    if len(s) == 8 and s.endswith("00"):
        return s[:6]
    return s


def classify_publication(symbol: str, pub_type_id: int = 0, title: str = "", issue: str = "") -> str:
    sym = (symbol or "").strip().lower()
    low_title = strip_accents(title or "").lower()

    for cat in CATEGORIES:
        if sym in cat["symbols"]:
            return cat["code"]

    if sym.startswith("dx") or sym.startswith("es") or sym.startswith("wol"):
        return "fitaovana"
    if sym.startswith("t-") or sym.startswith("inv") or "trakta" in low_title or "bokikely" in low_title:
        return "bokikely"
    if sym in ("w", "wp") or "tilikambo" in low_title:
        return "tilikambo"
    if sym == "g" or "mifohaza" in low_title:
        return "mifohaza"
    if sym in ("mwb", "km") or "tari-dalana" in low_title or "fanompoantsika" in low_title:
        return "taridalana"
    if sym.startswith("yb") or pub_type_id == 1:
        return "baiboly" if pub_type_id == 1 else "fitaovana"
    if sym.startswith("co-pgm") or sym.startswith("ca-") or "fihirana" in low_title or "fivoriambe" in low_title:
        return "hafa"

    # Heuristique sur PublicationTypeId standard MEPS
    if pub_type_id == 2:
        return "boky"
    if pub_type_id in (4, 5, 10):
        return "bokikely"
    if issue:
        return "hafa"
    return "boky"


def get_category_folder(cat_code: str) -> str:
    info = CATEGORY_BY_CODE.get(cat_code)
    return info["folder"] if info else "08_Fihirana_sy_Hafa"


def get_category_short(cat_code: str) -> str:
    info = CATEGORY_BY_CODE.get(cat_code)
    return info["short"] if info else "Hafa"
