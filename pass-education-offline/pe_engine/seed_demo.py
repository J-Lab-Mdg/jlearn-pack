# -*- coding: utf-8 -*-
"""Fiches et vrais fichiers PDF de démonstration hors-ligne pour Pass-Éducation Offline.

Permet de tester immédiatement le lecteur PDF intégré, l'impression et la recherche plein-texte
à l'intérieur des PDF avant même de lancer la synchronisation Internet.
"""

from __future__ import annotations

import os
from typing import Any, Dict, List

from .database import PassEducationDB
from .pdf_text import build_minimal_pdf, extract_pdf_text_and_pages
from .taxonomy import get_class_folder, get_subject_folder


DEMO_ITEMS: List[Dict[str, Any]] = [
    {
        "slug": "demo-sens-de-la-soustraction-ce1-lecon",
        "title": "Sens de la soustraction et soustraction en ligne – CE1 – Leçon",
        "class_code": "CE1",
        "subject_code": "mathematiques",
        "resource_type": "lecon",
        "source_url": "https://www.pass-education.fr/sens-de-la-soustraction-et-soustraction-en-ligne-au-ce1-lecon/",
        "paragraphs": [
            "## La soustraction : comprendre le sens",
            "Soustraire, c'est retrancher (enlever) une quantite a une autre. Le signe de la soustraction est le moins (-). Le resultat d'une soustraction s'appelle une difference.",
            "On peut soustraire deux nombres seulement si le nombre a soustraire est plus petit ou egal au nombre de depart.",
            "## Methode 1 : Decomposer les deux nombres (sans retenue)",
            "On decompose en dizaines et unites avant de soustraire chaque classe : 46 - 14 -> unites : 6 - 4 = 2 ; dizaines : 4 - 1 = 3. Donc 46 - 14 = 32.",
            "## Methode 2 : Decomposer uniquement le nombre a soustraire (avec retenue)",
            "Exemple : 67 - 29. On decompose 29 = 20 + 9. Etape 1 : 67 - 20 = 47. Etape 2 : 47 - 9 = 38. La difference entre 67 et 29 est 38.",
        ],
    },
    {
        "slug": "demo-le-verbe-et-son-infinitif-ce2-lecon",
        "title": "Le verbe et son infinitif – CE2 – Grammaire – Leçon",
        "class_code": "CE2",
        "subject_code": "francais",
        "resource_type": "lecon",
        "source_url": "https://www.pass-education.fr/clc-cours-lecons-verbe-et-son-infinitif-grammaire-francais-cycle-3/",
        "paragraphs": [
            "## Reconnaître le verbe dans la phrase",
            "Dans une phrase, le verbe indique une action (manger, sauter, courir) ou un etat (etre, sembler, paraitre, devenir).",
            "Le verbe change de terminaison selon le temps et la personne : on dit qu'il se conjugue.",
            "## Trouver l'infinitif d'un verbe",
            "Quand le verbe n'est pas conjugue, il est a l'infinitif (comme dans le dictionnaire). Pour trouver l'infinitif, on utilise la formule : « Il est en train de ... » ou « Il faut ... ».",
            "Exemples : Il finit son repas -> Il faut finir. Les enfants chantent -> Il faut chanter.",
        ],
    },
    {
        "slug": "demo-fractions-mesurer-longueurs-cm1-lecon",
        "title": "Les fractions pour mesurer et partager des grandeurs – CM1 – Leçon",
        "class_code": "CM1",
        "subject_code": "mathematiques",
        "resource_type": "lecon",
        "source_url": "https://www.pass-education.fr/les-fractions-pour-mesurer-les-unites-de-longueurs-ce2-lecon/",
        "paragraphs": [
            "## Numerateur et denominateur",
            "Lorsqu'on partage une unite en parts egales, chaque part s'ecrit sous forme de fraction a/b.",
            "Le denominateur (en bas) indique en combien de parts egales l'unite est partagee. Le numerateur (en haut) indique le nombre de parts prises.",
            "## Fractions egales a l'unite",
            "Si le numerateur est egal au denominateur, la fraction vaut 1 unite entiere : 4/4 = 1, 6/6 = 1, 10/10 = 1.",
        ],
    },
    {
        "slug": "demo-empire-romain-monde-antique-6eme-cours",
        "title": "L'Empire romain dans le monde antique – 6ème – Histoire – Cours",
        "class_code": "6eme",
        "subject_code": "histoire",
        "resource_type": "lecon",
        "source_url": "https://www.pass-education.fr/tdm-6eme/",
        "paragraphs": [
            "## Du principat d'Auguste a la Pax Romana",
            "En 27 avant J.-C., Octave recoit le titre d'Auguste et fonde l'Empire romain. Aux Ier et IIe siecles apres J.-C., l'Empire connait la paix romaine (Pax Romana) autour de la mer Mediterranee.",
            "## Romanisation et citoyennete",
            "Les habitants des provinces adoptent le mode de vie romain (forum, thermes, amphitheatres, aqueducs, langue latine). En 212, l'edit de Caracalla accorde la citoyennete romaine a tous les hommes libres de l'Empire.",
        ],
    },
    {
        "slug": "demo-atomes-et-ions-physique-chimie-3eme-cours",
        "title": "La matière dans l'Univers : Atomes et ions – 3ème – Physique-Chimie – Cours",
        "class_code": "3eme",
        "subject_code": "physique_chimie",
        "resource_type": "lecon",
        "source_url": "https://www.pass-education.fr/tdm-physique-chimie-3eme/",
        "paragraphs": [
            "## Structure de l'atome",
            "Un atome est constitue d'un noyau central charge positivement (contenant protons et neutrons) entoure d'electrons charges negativement. Un atome est electriquement neutre : il possede autant d'electrons que de protons.",
            "## Formation des ions monoatomiques",
            "Un cation est un ion positif forme lorsqu'un atome perd un ou plusieurs electrons (ex: Cu2+, Na+). Un anion est un ion negatif forme lorsqu'un atome gagne un ou plusieurs electrons (ex: Cl-).",
        ],
    },
    {
        "slug": "demo-fonctions-de-reference-2nde-cours",
        "title": "Fonctions de référence (carré, inverse, racine carrée) – Seconde (2nde) – Cours",
        "class_code": "2nde",
        "subject_code": "mathematiques",
        "resource_type": "lecon",
        "source_url": "https://www.pass-education.fr/tdm-mathematiques-seconde-2nde/",
        "paragraphs": [
            "## La fonction carre f(x) = x^2",
            "Definie sur R, la fonction carre est strictement decroissante sur ]-infini ; 0] et strictement croissante sur [0 ; +infini[. Sa courbe representative est une parabole symetrique par rapport a l'axe des ordonnees (fonction paire).",
            "## La fonction inverse g(x) = 1/x",
            "Definie sur R prive de 0, la fonction inverse est strictement decroissante sur ]-infini ; 0[ et sur ]0 ; +infini[. Sa courbe est une hyperbole symetrique par rapport a l'origine (fonction impaire).",
        ],
    },
]


def ensure_demo_seed(db: PassEducationDB) -> None:
    stats = db.get_stats()
    if stats["total_resources"] > 0:
        return

    for item in DEMO_ITEMS:
        class_folder = get_class_folder(item["class_code"])
        subj_folder = get_subject_folder(item["subject_code"])
        rel_dir = os.path.join(class_folder, subj_folder)
        os.makedirs(os.path.join(db.pdf_root, rel_dir), exist_ok=True)
        rel_pdf = os.path.join(rel_dir, f"{item['slug']}.pdf").replace("\\", "/")
        abs_pdf = os.path.join(db.pdf_root, rel_pdf)

        subtitle = f"Niveau : {item['class_code']} | Matiere : {subj_folder} | Fiche de demonstration hors-ligne"
        pdf_bytes = build_minimal_pdf(item["title"], subtitle, item["paragraphs"])
        with open(abs_pdf, "wb") as f:
            f.write(pdf_bytes)

        extracted_text, pages = extract_pdf_text_and_pages(pdf_bytes)
        html_parts = []
        text_parts = []
        for p in item["paragraphs"]:
            if p.startswith("## "):
                h = p[3:].strip()
                html_parts.append(f"<h3>{h}</h3>")
                text_parts.append(h)
            else:
                html_parts.append(f"<p>{p}</p>")
                text_parts.append(p)

        db.upsert_resource(
            {
                "wp_post_id": 0,
                "slug": item["slug"],
                "title": item["title"],
                "class_code": item["class_code"],
                "subject_code": item["subject_code"],
                "resource_type": item["resource_type"],
                "source_url": item["source_url"],
                "pdf_url": "",
                "local_pdf_relpath": rel_pdf,
                "pdf_size_bytes": len(pdf_bytes),
                "pdf_pages": pages,
                "pdf_status": "downloaded",
                "html_content": "\n".join(html_parts),
                "text_content": "\n".join(text_parts),
                "pdf_text": extracted_text or "\n".join(text_parts),
                "updated_date": "2026-10-30",
                "is_demo": 1,
            }
        )
