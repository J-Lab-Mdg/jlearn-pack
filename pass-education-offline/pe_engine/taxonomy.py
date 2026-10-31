# -*- coding: utf-8 -*-
"""Taxonomie officielle Pass-Éducation (Cycles, Classes PS->Terminale, Matières, Types).

Basé sur l'arborescence réelle de l'API WordPress `/wp-json/wp/v2/categories` de pass-education.fr.
"""

from __future__ import annotations

import re
import unicodedata
from typing import Any, Dict, List, Optional, Set, Tuple

CYCLES: List[Dict[str, Any]] = [
    {"code": "maternelle", "label": "Maternelle (Cycle 1)", "classes": ["PS", "MS", "GS"]},
    {"code": "primaire", "label": "Primaire (Cycles 2 & 3)", "classes": ["CP", "CE1", "CE2", "CM1", "CM2"]},
    {"code": "college", "label": "Collège (Cycle 4)", "classes": ["6eme", "5eme", "4eme", "3eme"]},
    {"code": "lycee", "label": "Lycée", "classes": ["2nde", "1ere", "Term"]},
    {"code": "perso", "label": "Mes PDF Personnels", "classes": ["Perso"]},
]

# Classes ordonnées avec leurs vrais IDs de catégories WordPress sur pass-education.fr
CLASSES: List[Dict[str, Any]] = [
    {"code": "PS", "label": "PS (Petite Section)", "short": "PS", "cycle": "maternelle", "wp_cat_id": 1631, "folder": "01_PS", "slug_tokens": ["ps-petite-section", "-ps-"]},
    {"code": "MS", "label": "MS (Moyenne Section)", "short": "MS", "cycle": "maternelle", "wp_cat_id": 1632, "folder": "02_MS", "slug_tokens": ["ms-moyenne-section", "-ms-"]},
    {"code": "GS", "label": "GS (Grande Section)", "short": "GS", "cycle": "maternelle", "wp_cat_id": 1633, "folder": "03_GS", "slug_tokens": ["gs-grande-section", "grande-section", "-gs-"]},
    {"code": "CP", "label": "CP", "short": "CP", "cycle": "primaire", "wp_cat_id": 97, "folder": "04_CP", "slug_tokens": ["-cp-", "-cp.", "au-cp"]},
    {"code": "CE1", "label": "CE1", "short": "CE1", "cycle": "primaire", "wp_cat_id": 98, "folder": "05_CE1", "slug_tokens": ["-ce1", "au-ce1"]},
    {"code": "CE2", "label": "CE2", "short": "CE2", "cycle": "primaire", "wp_cat_id": 99, "folder": "06_CE2", "slug_tokens": ["-ce2", "au-ce2"]},
    {"code": "CM1", "label": "CM1", "short": "CM1", "cycle": "primaire", "wp_cat_id": 100, "folder": "07_CM1", "slug_tokens": ["-cm1", "au-cm1"]},
    {"code": "CM2", "label": "CM2", "short": "CM2", "cycle": "primaire", "wp_cat_id": 101, "folder": "08_CM2", "slug_tokens": ["-cm2", "au-cm2"]},
    {"code": "6eme", "label": "6ème", "short": "6ème", "cycle": "college", "wp_cat_id": 88, "folder": "09_6eme", "slug_tokens": ["-6eme", "6eme-"]},
    {"code": "5eme", "label": "5ème", "short": "5ème", "cycle": "college", "wp_cat_id": 307, "folder": "10_5eme", "slug_tokens": ["-5eme", "5eme-"]},
    {"code": "4eme", "label": "4ème", "short": "4ème", "cycle": "college", "wp_cat_id": 308, "folder": "11_4eme", "slug_tokens": ["-4eme", "4eme-"]},
    {"code": "3eme", "label": "3ème (Brevet)", "short": "3ème", "cycle": "college", "wp_cat_id": 309, "folder": "12_3eme", "slug_tokens": ["-3eme", "3eme-", "brevet"]},
    {"code": "2nde", "label": "Seconde (2nde)", "short": "2nde", "cycle": "lycee", "wp_cat_id": 4018, "folder": "13_2nde", "slug_tokens": ["-2nde", "seconde"]},
    {"code": "1ere", "label": "Première (1ère)", "short": "1ère", "cycle": "lycee", "wp_cat_id": 4278, "folder": "14_1ere", "slug_tokens": ["-1ere", "premiere"]},
    {"code": "Term", "label": "Terminale", "short": "Term", "cycle": "lycee", "wp_cat_id": 4630, "folder": "15_Terminale", "slug_tokens": ["terminale", "-ts-"]},
]

CLASS_BY_CODE: Dict[str, Dict[str, Any]] = {c["code"]: c for c in CLASSES}
CLASS_BY_WP_ID: Dict[int, Dict[str, Any]] = {c["wp_cat_id"]: c for c in CLASSES}

# Matières proposées avec cases à cocher dans l'application
SUBJECTS: List[Dict[str, Any]] = [
    {
        "code": "francais",
        "label": "Français (Lecture, Grammaire, Conjugaison, Orthographe…)",
        "short": "Français",
        "folder": "Francais",
        "wp_cat_ids": {111, 1646, 7188, 7788, 7789, 9568, 11782},
        "keywords": [
            "francais", "grammaire", "conjugaison", "orthographe", "vocabulaire",
            "lexique", "lecture", "phonologie", "dictee", "ecriture", "redaction",
            "poesie", "litterature", "verbe", "nom", "adjectif", "phrase", "son-",
        ],
    },
    {
        "code": "mathematiques",
        "label": "Mathématiques (Calcul, Numération, Géométrie, Mesures…)",
        "short": "Mathématiques",
        "folder": "Mathematiques",
        "wp_cat_ids": {105, 106, 6190, 5971, 7189, 7790, 7791, 9569, 10990, 11034},
        "keywords": [
            "mathematiques", "calcul", "numeration", "geometrie", "mesure",
            "addition", "soustraction", "multiplication", "division", "fraction",
            "decimau", "probleme", "equation", "fonction", "probabilite", "statistique",
            "triangle", "cercle", "perimetre", "aire-", "nombres", "doubles", "tables-d",
        ],
    },
    {
        "code": "histoire",
        "label": "Histoire & Histoire des arts",
        "short": "Histoire",
        "folder": "Histoire",
        "wp_cat_ids": {186, 5540, 2032, 7190, 7192},
        "keywords": [
            "histoire", "prehistoire", "antiquite", "moyen-age", "renaissance",
            "revolution", "guerre", "empire", "republique", " chronologi",
        ],
    },
    {
        "code": "geographie",
        "label": "Géographie",
        "short": "Géographie",
        "folder": "Geographie",
        "wp_cat_ids": {187, 5624, 7191},
        "keywords": [
            "geographie", "metropole", "littorau", "territoire", "continent",
            "ocean", "carte", "climat", "population", "relief", "boussole",
        ],
    },
    {
        "code": "sciences",
        "label": "Sciences, Technologie & Questionner le monde",
        "short": "Sciences & Techno",
        "folder": "Sciences_Techno",
        "wp_cat_ids": {288, 5626, 1668, 5464, 12454, 296},
        "keywords": [
            "sciences", "technologie", "questionner-le-monde", "explorer-le-monde",
            "decouvrir-le-monde", "eprouvette", "apis", "regime-alimentaire",
            "vivant", "objet-technique", "planete", "informatique",
        ],
    },
    {
        "code": "svt",
        "label": "SVT (Sciences de la Vie et de la Terre)",
        "short": "SVT",
        "folder": "SVT",
        "wp_cat_ids": {512, 7193},
        "keywords": [
            "svt", "biologie", "geologie", "cellule", "reproduction", "organisme",
            "ecosysteme", "risques-naturels", "activite-terrestre", "pression-arterielle",
        ],
    },
    {
        "code": "physique_chimie",
        "label": "Physique - Chimie",
        "short": "Physique-Chimie",
        "folder": "Physique_Chimie",
        "wp_cat_ids": {2698, 7194},
        "keywords": [
            "physique", "chimie", "electricite", "atome", "ion", "acide",
            "gravitation", "energie-cinetique", "masse-volumique", "combustion",
            "ohm", "circuit", "lumiere", "optique", "mecanique",
        ],
    },
    {
        "code": "anglais",
        "label": "Anglais & Langues vivantes",
        "short": "Anglais & Langues",
        "folder": "Anglais_Langues",
        "wp_cat_ids": {188, 7195, 7196, 7197, 7198, 11877, 10480},
        "keywords": [
            "anglais", "english", "kelly-and-james", "allemand", "espagnol",
            "italien", "flashcard", "prepositions", "vocabulary",
        ],
    },
    {
        "code": "emc",
        "label": "EMC (Enseignement Moral & Civique)",
        "short": "EMC / Citoyenneté",
        "folder": "EMC_Citoyennete",
        "wp_cat_ids": {579, 12714, 12715, 12713, 12716, 12717, 5502},
        "keywords": [
            "emc", "instruction-civique", "morale", "citoyen", "laicite",
            "symbole", "droits", "egalite",
        ],
    },
    {
        "code": "autres",
        "label": "Autres (Cahiers de vacances, Arts, Coloriages, Vie de classe…)",
        "short": "Autres / Vacances",
        "folder": "Autres_Thematiques",
        "wp_cat_ids": {2125, 11792, 11296, 5417, 2547, 250, 255, 2015, 11891, 5739, 12142},
        "keywords": [],
    },
]

SUBJECT_BY_CODE: Dict[str, Dict[str, Any]] = {s["code"]: s for s in SUBJECTS}

# Catégories WordPress des types de ressources
WP_CAT_FREE_RESOURCES = 11718
WP_CAT_LESSONS = 118
WP_CAT_EXERCISES = 119
WP_CAT_EVALUATIONS = 3822
WP_CAT_EVAL_COMP = 11120
WP_CAT_QCM = 11121
WP_CAT_SEQUENCES = 5406
WP_CAT_VACANCES = 5417
WP_CAT_AFFICHES = 5608
WP_CAT_CARTES_MENTALES = 5057
WP_CAT_COLORIAGES_GRATUITS = 11296

RESOURCE_TYPES: Dict[str, str] = {
    "lecon": "Cours / Leçon",
    "exercice": "Exercices",
    "evaluation": "Évaluation / Bilan",
    "sequence": "Séquence / Fiche de prep",
    "cahier": "Cahier / Activités",
    "affiche": "Carte mentale / Affiche",
    "autre": "Ressource",
}


def strip_accents(text: str) -> str:
    if not text:
        return ""
    decomp = unicodedata.normalize("NFD", text)
    return "".join(ch for ch in decomp if unicodedata.category(ch) != "Mn")


def normalize_search_text(text: str) -> str:
    cleaned = strip_accents(text or "").lower()
    cleaned = re.sub(r"[^a-z0-9]+", " ", cleaned)
    return re.sub(r"\s+", " ", cleaned).strip()


def detect_class_from_categories_or_slug(
    cat_ids: Set[int], slug_or_title: str = "", default_class: str = ""
) -> str:
    for cid in cat_ids:
        if cid in CLASS_BY_WP_ID:
            return CLASS_BY_WP_ID[cid]["code"]
    if default_class and default_class in CLASS_BY_CODE:
        return default_class

    low = f"-{strip_accents(slug_or_title).lower()}-"
    # Vérifie d'abord les identifiants précis
    ordered_checks: List[Tuple[str, List[str]]] = [
        ("PS", ["-ps-", "petite-section"]),
        ("MS", ["-ms-", "moyenne-section"]),
        ("GS", ["-gs-", "grande-section"]),
        ("CP", ["-cp-", "au-cp-"]),
        ("CE1", ["-ce1-", "au-ce1-"]),
        ("CE2", ["-ce2-", "au-ce2-"]),
        ("CM1", ["-cm1-", "au-cm1-"]),
        ("CM2", ["-cm2-", "au-cm2-"]),
        ("6eme", ["-6eme-", "-sixieme-"]),
        ("5eme", ["-5eme-", "-cinquieme-"]),
        ("4eme", ["-4eme-", "-quatrieme-"]),
        ("3eme", ["-3eme-", "-troisieme-", "-brevet-"]),
        ("2nde", ["-2nde-", "-seconde-"]),
        ("1ere", ["-1ere-", "-premiere-"]),
        ("Term", ["-terminale-", "-term-", "-ts-"]),
    ]
    for code, tokens in ordered_checks:
        for tok in tokens:
            if tok in low:
                return code
    if "cycle-1" in low or "maternelle" in low:
        return "GS"
    if "cycle-2" in low:
        return "CE1"
    if "cycle-3" in low:
        return "CM1"
    if "college" in low or "cycle-4" in low:
        return "6eme"
    if "lycee" in low:
        return "2nde"
    return default_class or "CE1"


def detect_subject_from_categories_or_slug(cat_ids: Set[int], slug_or_title: str = "") -> str:
    for subj in SUBJECTS:
        if subj["code"] == "autres":
            continue
        if cat_ids & subj["wp_cat_ids"]:
            return subj["code"]

    low = strip_accents(slug_or_title).lower()
    for subj in SUBJECTS:
        if subj["code"] == "autres":
            continue
        for kw in subj["keywords"]:
            if kw in low:
                return subj["code"]
    return "autres"


def detect_resource_type(cat_ids: Set[int], slug_or_title: str = "") -> str:
    if WP_CAT_LESSONS in cat_ids:
        return "lecon"
    if WP_CAT_EVALUATIONS in cat_ids or WP_CAT_EVAL_COMP in cat_ids or WP_CAT_QCM in cat_ids:
        return "evaluation"
    if WP_CAT_EXERCISES in cat_ids:
        return "exercice"
    if WP_CAT_SEQUENCES in cat_ids:
        return "sequence"
    if WP_CAT_VACANCES in cat_ids or WP_CAT_COLORIAGES_GRATUITS in cat_ids:
        return "cahier"
    if WP_CAT_AFFICHES in cat_ids or WP_CAT_CARTES_MENTALES in cat_ids:
        return "affiche"

    low = strip_accents(slug_or_title).lower()
    if any(k in low for k in ("lecon", "trace-ecrite", "-cours", "clc-cours", "flashcard")):
        return "lecon"
    if any(k in low for k in ("evaluation", "evb-", "bilan", "qcm")):
        return "evaluation"
    if any(k in low for k in ("exercice", "exo-")):
        return "exercice"
    if any(k in low for k in ("sequence", "fiche-de-preparation")):
        return "sequence"
    if any(k in low for k in ("vacances", "coloriage", "activite")):
        return "cahier"
    if any(k in low for k in ("affiche", "carte-mentale")):
        return "affiche"
    return "autre"


def get_cycle_for_class(class_code: str) -> str:
    info = CLASS_BY_CODE.get(class_code)
    if info:
        return info["cycle"]
    return "perso"


def get_class_folder(class_code: str) -> str:
    info = CLASS_BY_CODE.get(class_code)
    if info:
        return info["folder"]
    return "99_Import_Personnel"


def get_subject_folder(subject_code: str) -> str:
    info = SUBJECT_BY_CODE.get(subject_code)
    if info:
        return info["folder"]
    return "Autres_Thematiques"


def get_subject_short_label(subject_code: str) -> str:
    info = SUBJECT_BY_CODE.get(subject_code)
    if info:
        return info["short"]
    return "Autres"
