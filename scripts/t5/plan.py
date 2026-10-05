# -*- coding: utf-8 -*-
"""Full seance plan for ST T5, derived from the 11 thematiques of PE T5
(Sciences et Technologie, p.104-132 of 'PE RAPE/PE T5.pdf'). This is the
authoritative table of contents used to build the global TOC and to number
seances/units consistently across all unit-build scripts.
"""

UNITS = [
    # (roman, title, hours, valeurs, ras_summary, seances[list of (title, kind)])
    ("I", "Organisation des êtres vivants", 10,
     "sens de responsabilité, respect de toute vie",
     "Classifier sommairement les animaux locaux selon leurs caractéristiques ; préserver les "
     "différentes conditions de vie des animaux dans leur milieu",
     [
        ("Les caractéristiques des animaux et la notion de classification", "lesson"),
        ("Classification des invertébrés", "lesson"),
        ("Classification des vertébrés", "lesson"),
        ("Le mode de vie des animaux : habitat et alimentation", "lesson"),
        ("Le mode de vie des animaux : reproduction et protection", "lesson"),
        ("Révision — Unité I : Organisation des êtres vivants", "revision"),
        ("Sujet d'examen ST T5 — Unité I : Organisation des êtres vivants", "exam"),
     ]),
    ("II", "Objet technique", 11,
     "rigueur, respect des biens communs",
     "Utiliser de manière adéquate les outils en technologie ; décrire le mouvement engendré par un "
     "système composé de plusieurs pièces mobiles ; déterminer les propriétés des machines simples ; "
     "appliquer les principes scientifiques dans le fonctionnement d'un objet basé sur une machine "
     "simple ; représenter le fonctionnement d'un objet du quotidien",
     [
        ("Les outils simples : composants, matériaux, propriétés et sécurité", "lesson"),
        ("Les systèmes composés de plusieurs pièces mobiles", "lesson"),
        ("Les machines simples", "lesson"),
        ("Les objets basés sur une machine simple", "lesson"),
        ("Les représentations d'un objet du quotidien", "lesson"),
        ("Révision — Unité II : Objet technique", "revision"),
        ("Sujet d'examen ST T5 — Unité II : Objet technique", "exam"),
     ]),
    ("III", "Reproduction humaine", 6,
     "estime de soi, responsabilité",
     "Justifier les comportements responsables avant et pendant la puberté",
     [
        ("La puberté : les transformations du corps", "lesson"),
        ("La puberté : transformations physiologiques et comportements responsables", "lesson"),
        ("Révision — Unité III : Reproduction humaine", "revision"),
        ("Sujet d'examen ST T5 — Unité III : Reproduction humaine", "exam"),
     ]),
    ("IV", "Conception technologique", 12,
     "respect des biens communs, respect mutuel",
     "Classifier les objets volants ; décrire les notions scientifiques sur le vol ; déterminer la "
     "forme de motorisation adaptée pour un mini-véhicule ; construire un mini objet volant et un "
     "mini-véhicule ; analyser le prototype construit",
     [
        ("Classifier les objets volants", "lesson"),
        ("Les notions scientifiques sur le vol", "lesson"),
        ("La motorisation d'un mini-véhicule", "lesson"),
        ("Construction d'un mini objet volant et d'un mini-véhicule", "lesson"),
        ("Analyse et amélioration du prototype construit", "lesson"),
        ("Révision — Unité IV : Conception technologique", "revision"),
        ("Sujet d'examen ST T5 — Unité IV : Conception technologique", "exam"),
     ]),
    ("V", "Maladies infectieuses", 10,
     "estime de soi, respect mutuel",
     "Adopter les comportements responsables en cas de maladie et d'épidémie",
     [
        ("Les maladies courantes : causes, symptômes et transmission", "lesson"),
        ("Prévention et comportements à adopter en cas de maladie", "lesson"),
        ("Épidémie et pandémie : enquête et messages éducatifs", "lesson"),
        ("Révision — Unité V : Maladies infectieuses", "revision"),
        ("Sujet d'examen ST T5 — Unité V : Maladies infectieuses", "exam"),
     ]),
    ("VI", "Santé et bien-être", 8,
     "respect de toute vie, confiance en soi",
     "Démontrer les moyens pour la santé osseuse et musculaire",
     [
        ("Les muscles : description et rôles", "lesson"),
        ("Les articulations", "lesson"),
        ("Les os et l'hygiène du système musculo-squelettique", "lesson"),
        ("Révision — Unité VI : Santé et bien-être", "revision"),
        ("Sujet d'examen ST T5 — Unité VI : Santé et bien-être", "exam"),
     ]),
    ("VII", "Chaleur et température", 9,
     "rigueur, respect de la vie",
     "Distinguer les notions de température et de chaleur ; mesurer la température d'un objet",
     [
        ("Distinguer chaleur et température", "lesson"),
        ("Le transfert de chaleur", "lesson"),
        ("Le thermomètre et ses types", "lesson"),
        ("Les unités de mesure de la température", "lesson"),
        ("Révision — Unité VII : Chaleur et température", "revision"),
        ("Sujet d'examen ST T5 — Unité VII : Chaleur et température", "exam"),
     ]),
    ("VIII", "Matière", 9,
     "rigueur, respect mutuel",
     "Utiliser les échanges de chaleur pour provoquer un changement d'état de l'eau ; appliquer les "
     "principes de conservation lors d'une transformation physique ; expliquer les propriétés de "
     "solutions aqueuses",
     [
        ("Les changements d'état de l'eau", "lesson"),
        ("La conservation lors d'une transformation physique", "lesson"),
        ("Les propriétés des solutions aqueuses", "lesson"),
        ("Révision — Unité VIII : Matière", "revision"),
        ("Sujet d'examen ST T5 — Unité VIII : Matière", "exam"),
     ]),
    ("IX", "Géologie", 6,
     "respect de la vie, autonomie",
     "Choisir les plantes qui conviennent à chaque type de sol",
     [
        ("Les propriétés physiques et chimiques du sol", "lesson"),
        ("Les types de sol et leur culture correspondante", "lesson"),
        ("Révision — Unité IX : Géologie", "revision"),
        ("Sujet d'examen ST T5 — Unité IX : Géologie", "exam"),
     ]),
    ("X", "Environnement", 10,
     "respect des biens communs, respect de la vie",
     "Choisir les méthodes appropriées à la gestion de déchets (4R+C) d'une organisation ou d'une "
     "communauté",
     [
        ("Les types de déchets et les mauvaises pratiques de gestion", "lesson"),
        ("Les impacts des déchets sur l'environnement", "lesson"),
        ("Les méthodes de réduction des déchets (4R+C)", "lesson"),
        ("Révision — Unité X : Environnement", "revision"),
        ("Sujet d'examen ST T5 — Unité X : Environnement", "exam"),
     ]),
    ("XI", "Électricité et magnétisme", 9,
     "goût de l'excellence, rigueur",
     "Distinguer les propriétés de la matière vis-à-vis du courant électrique ; identifier les "
     "caractéristiques de quelques dipôles électriques ; manipuler les composants électriques en "
     "respectant les mesures de sécurité ; construire une mini-lampe de poche",
     [
        ("Conducteur, isolant, générateur, récepteur", "lesson"),
        ("Les caractéristiques d'une pile, d'une lampe et d'une DEL", "lesson"),
        ("Les règles de sécurité et les risques électriques", "lesson"),
        ("Construction d'une mini-lampe de poche", "lesson"),
        ("Révision — Unité XI : Électricité et magnétisme", "revision"),
        ("Sujet d'examen ST T5 — Unité XI : Électricité et magnétisme", "exam"),
     ]),
]


def flat_seances():
    """Returns list of dicts with global seance numbering."""
    out = []
    n = 0
    for roman, title, hours, valeurs, ras, seances in UNITS:
        for stitle, kind in seances:
            n += 1
            out.append({
                "num": n, "unit_roman": roman, "unit_title": title,
                "unit_hours": hours, "unit_valeurs": valeurs, "unit_ras": ras,
                "title": stitle, "kind": kind,
            })
    return out


TOTAL_SEANCES = len(flat_seances())

if __name__ == "__main__":
    seances = flat_seances()
    print(f"Total seances: {len(seances)}")
    for s in seances:
        print(s["num"], s["unit_roman"], "-", s["title"], f"[{s['kind']}]")
