# -*- coding: utf-8 -*-
"""Full 67-seance plan for ST T4, derived from the 9 thematiques of PE T4
(page 79-100 of 'PE RAPE/PE T4.pdf'). This is the authoritative table of
contents used to build the global TOC and to number seances/units
consistently across all unit-build scripts.
"""

UNITS = [
    # (roman, title, hours, valeurs, ras_summary, seances[list of (title, kind)])
    ("I", "Alimentation de l'homme", 9,
     "respect de la vie, responsabilité",
     "Élaborer un menu varié ; appliquer des mesures d'hygiène des aliments crus et cuits ; "
     "analyser les informations sur un emballage alimentaire",
     [
        ("Classification des aliments : couleur et goût", "lesson"),
        ("Classification des aliments : origine et rôles nutritionnels", "lesson"),
        ("Élaborer un menu varié", "lesson"),
        ("Hygiène des aliments crus et cuits", "lesson"),
        ("Analyser un emballage alimentaire", "lesson"),
        ("Révision — Unité I : Alimentation de l'homme", "revision"),
        ("Sujet d'examen ST T4 — Unité I : Alimentation de l'homme", "exam"),
     ]),
    ("II", "Organisation des êtres vivants", 15,
     "respect des biens communs, responsabilité",
     "Classifier des plantes selon leurs caractéristiques ; expliquer l'importance des plantes "
     "pour l'environnement et la vie quotidienne",
     [
        ("L'organisation générale d'une plante", "lesson"),
        ("Les plantes sans fleurs", "lesson"),
        ("Les plantes à fleurs : monocotylédones et dicotylédones", "lesson"),
        ("Classer des plantes locales", "lesson"),
        ("Les rôles sociaux et économiques des plantes", "lesson"),
        ("Les rôles culturels des plantes à Madagascar", "lesson"),
        ("Les rôles environnementaux des plantes", "lesson"),
        ("Enquête sur les plantes de ma communauté", "lesson"),
        ("Révision — Unité II : Organisation des êtres vivants", "revision"),
        ("Sujet d'examen ST T4 — Unité II : Organisation des êtres vivants", "exam"),
     ]),
    ("III", "Objet technique", 12,
     "rigueur, respect mutuel",
     "Classer divers matériaux selon leurs propriétés ; détecter le meilleur moyen de joindre "
     "divers matériaux ; identifier les besoins à l'origine de quelques outils simples ; "
     "expliquer l'action d'une force sur un objet pour engendrer un mouvement",
     [
        ("Les types de matériaux", "lesson"),
        ("Les propriétés des matériaux", "lesson"),
        ("Les méthodes d'assemblage", "lesson"),
        ("Assemblages permanents et non permanents", "lesson"),
        ("Les outils simples et leurs usages", "lesson"),
        ("Les besoins à l'origine des outils", "lesson"),
        ("La force et le mouvement", "lesson"),
        ("Révision — Unité III : Objet technique", "revision"),
        ("Sujet d'examen ST T4 — Unité III : Objet technique", "exam"),
     ]),
    ("IV", "Reproduction humaine", 9,
     "respect de la vie, responsabilité",
     "Déterminer les moyens pour prendre soin des organes génitaux externes",
     [
        ("Les organes génitaux externes : description", "lesson"),
        ("Les rôles des organes génitaux externes", "lesson"),
        ("Hygiène et soins des organes génitaux externes", "lesson"),
        ("Mini-projet : règles d'hygiène intime", "lesson"),
        ("Révision — Unité IV : Reproduction humaine", "revision"),
        ("Sujet d'examen ST T4 — Unité IV : Reproduction humaine", "exam"),
     ]),
    ("V", "Conception technologique", 15,
     "goût du beau, sens de la responsabilité",
     "Dessiner le croquis et le schéma de principe d'un mini-bateau ; construire un mini-bateau simple",
     [
        ("Le cahier des charges du mini-bateau", "lesson"),
        ("Dessiner le croquis du mini-bateau", "lesson"),
        ("Le schéma de principe et les symboles de mouvement", "lesson"),
        ("Choisir les matériaux et outils", "lesson"),
        ("Construction du mini-bateau", "lesson"),
        ("Essais, ajustements et finition", "lesson"),
        ("Présentation des prototypes", "lesson"),
        ("Révision — Unité V : Conception technologique", "revision"),
        ("Sujet d'examen ST T4 — Unité V : Conception technologique", "exam"),
     ]),
    ("VI", "Santé et bien-être", 8,
     "responsabilité, respect de la vie",
     "Déterminer les moyens pour prendre soin des organes sensoriels",
     [
        ("L'œil et la vue", "lesson"),
        ("L'oreille et l'ouïe, le nez et l'odorat", "lesson"),
        ("La langue et la peau", "lesson"),
        ("Hygiène et soins des organes sensoriels", "lesson"),
        ("Révision — Unité VI : Santé et bien-être", "revision"),
        ("Sujet d'examen ST T4 — Unité VI : Santé et bien-être", "exam"),
     ]),
    ("VII", "Géologie", 9,
     "persévérance, responsabilité",
     "Analyser un échantillon de sol ; proposer des moyens de lutte contre la dégradation du sol",
     [
        ("Les différentes couches du sol", "lesson"),
        ("Les constituants du sol", "lesson"),
        ("Les types de dégradation du sol", "lesson"),
        ("Lutte contre la dégradation du sol", "lesson"),
        ("Révision — Unité VII : Géologie", "revision"),
        ("Sujet d'examen ST T4 — Unité VII : Géologie", "exam"),
     ]),
    ("VIII", "Matière", 13,
     "rigueur, respect mutuel",
     "Expliquer les propriétés de la matière ; expliquer les changements d'état physiques de l'eau",
     [
        ("Les états physiques de la matière", "lesson"),
        ("L'origine de la matière", "lesson"),
        ("Les états physiques de l'eau", "lesson"),
        ("Fusion et solidification de l'eau", "lesson"),
        ("Vaporisation et condensation de l'eau", "lesson"),
        ("Le cycle de l'eau", "lesson"),
        ("Révision — Unité VIII : Matière", "revision"),
        ("Sujet d'examen ST T4 — Unité VIII : Matière", "exam"),
     ]),
    ("IX", "Électricité et magnétisme", 9,
     "goût de l'effort, rigueur",
     "Interpréter l'interaction des aimants avec d'autres aimants et avec des matériaux quotidiens ; "
     "interpréter l'interaction d'un objet préalablement électrisé avec des matériaux quotidiens",
     [
        ("Les aimants et leurs interactions", "lesson"),
        ("Les pôles d'un aimant", "lesson"),
        ("L'électrisation d'un objet", "lesson"),
        ("Les charges électriques et leurs interactions", "lesson"),
        ("Révision — Unité IX : Électricité et magnétisme", "revision"),
        ("Sujet d'examen ST T4 — Unité IX : Électricité et magnétisme", "exam"),
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
