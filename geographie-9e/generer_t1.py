#!/usr/bin/env python3
"""Génère le Trimestre 1 du manuel de Géographie 9e à partir de `contenu_s1.py`
et `contenu_t1.py`.

Relance après chaque ajout de séances : le fichier est régénéré en entier.
    python3 generer_t1.py
"""
import os
import re
import sys

RACINE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(RACINE, "tools"))
sys.path.insert(0, RACINE)
from jlearn_docx import Doc                                  # noqa: E402
import figures                                               # noqa: E402
from contenu_s1 import S1                                    # noqa: E402
from contenu_t1 import SEANCES as T1                         # noqa: E402

SEANCES = [S1] + T1

SQUELETTE = os.path.join(RACINE, "..", "Manuel_Geographie_1ereACD_V1_FINAL.docx")
ASSETS = os.path.join(RACINE, "assets")
SORTIE = os.path.join(RACINE, "output", "Manuel_Geographie_9e_V2_T1.docx")

L6 = [1306, 2300, 2300, 1600, 1400, 1000]
L4 = [1500, 3453, 1500, 3453]
TOTAL = 87

# tailles en demi-points (Word) — corps de texte 12 à 13 pt
PT = {"titre_fiche": 34, "meta": 24, "deroul": 22, "lecon": 32, "section": 28,
      "corps": 26, "bareme": 22, "exercice": 26}

# mots clés à mettre en saumon, par séance
SAUMON = {
    1: ["Est", "Ouest", "lever", "coucher", "ombre", "midi"],
    2: ["Nord", "Sud", "Est", "Ouest", "points cardinaux"],
    3: ["s'orienter", "Nord", "Sud", "Est", "Ouest", "repère"],
    4: ["Nord-Est", "Nord-Ouest", "Sud-Est", "Sud-Ouest", "intermédiaire"],
    5: ["rose des vents", "croix", "diagonales", "cercle", "Nord"],
    6: ["rose des vents", "Nord", "itinéraire", "Est", "plan"],
    7: ["titre", "échelle", "légende", "plan"],
    8: ["plan", "tableau", "estrade", "rangées", "Nord"],
    9: ["plan", "Nord", "Est", "Ouest", "légende"],
    10: ["Nord", "Sud", "Est", "Ouest", "flèche", "plan"],
    11: ["mesurer", "échelle", "mètre ruban", "réduire", "centimètre"],
    12: ["contour", "rectangle", "quadrillage", "échelle", "Nord"],
    13: ["plan", "école", "cour de récréation", "mât de drapeau", "clôture", "bâtiment"],
    14: ["Nord", "Sud", "Est", "Ouest", "cour", "salle de 9e"],
    15: ["itinéraire", "départ", "arrivée", "échelle", "cour"],
    16: ["village", "maisons", "rizières", "marché", "route", "rivière"],
    17: ["légende", "plan", "signes", "couleurs", "village"],
    18: ["Nord", "Sud", "Est", "Ouest", "plan", "rizières"],
    19: ["école", "église", "marché", "Ouest", "Nord-Est"],
    20: ["route", "piste", "rivière", "rizières", "champs"],
    21: ["itinéraire", "maison", "école", "route", "flèche"],
    22: ["ville", "village", "maisons", "immeubles", "champs"],
    23: ["ville", "village", "taille", "activités", "services"],
    24: ["quartier", "maisons", "avenue", "école", "boutique"],
    25: ["plan", "quartier", "îlots", "avenue", "école", "marché"],
    26: ["itinéraire", "rues", "avenue", "départ", "arrivée"],
    27: ["soleil", "Est", "Ouest", "rose des vents", "plan", "Nord"],
    28: ["révision", "unité", "repérage", "rose des vents", "plan", "échelle"],
    30: ["carte", "titre", "légende", "échelle", "Madagascar", "île"],
    31: ["orientation", "Nord", "Sud", "Est", "Ouest", "carte"],
    32: ["villes", "capitale", "Antananarivo", "côte", "port", "Toamasina"],
    33: ["situer", "points cardinaux", "est", "ouest", "nord", "sud"],
    34: ["échelle", "carte", "kilomètres", "réduite", "distance"],
    35: ["distance", "mesurer", "règle", "convertir", "comparer"],
    36: ["régions", "hautes terres", "côte", "Antananarivo", "Toliara"],
    37: ["itinéraire", "route nationale", "étape", "départ", "arrivée"],
    38: ["paysage", "relief", "eau", "végétation", "constructions"],
    39: ["vocabulaire", "sommet", "versant", "plaine", "vallée"],
    40: ["montagne", "sommet", "pentes", "altitude", "massif"],
    41: ["colline", "vallée", "rivière", "terrasses", "fertile"],
    42: ["plaine", "plat", "alluvions", "irrigation", "parcelle"],
    43: ["comparer", "critères", "hauteur", "forme", "pente"],
    44: ["terrasses", "canal", "forêt", "source", "altitude"],
    45: ["colline", "plaine", "bas-fond", "irrigation", "village"],
    46: ["érosion", "ravine", "lavaka", "feu de brousse", "reboiser"],
    47: ["ruisseau", "rivière", "fleuve", "débit", "cours d'eau"],
    48: ["source", "embouchure", "delta", "lit", "pente"],
    49: ["amont", "aval", "rive gauche", "rive droite", "courant"],
    50: ["affluent", "confluent", "réseau hydrographique", "bassin versant",
         "crête"],
    51: ["irrigation", "pêche", "pirogue", "barrage", "usage"],
    52: ["gérer", "source", "captage", "polluer", "reboiser"],
    53: ["synthèse", "carte", "relief", "cours d'eau", "territoire"],
    54: ["révision", "carte", "relief", "cours d'eau", "gestion"],
    56: ["jour", "nuit", "soleil", "éclairé", "ombre"],
    57: ["rotation", "axe", "Terre", "pôle", "équateur"],
    58: ["ciel", "matin", "midi", "soir", "observation"],
    59: ["temps", "climat", "température", "thermomètre", "pluie"],
    60: ["vent", "girouette", "flèche", "empennage", "direction"],
    61: ["fabriquer", "découper", "paille", "tuteur", "orienter"],
    62: ["thermomètre", "degré", "graduation", "liquide", "sommet"],
    63: ["courbe", "maximum", "minimum", "relevé", "amplitude"],
    64: ["grille", "symbole", "mois", "bilan", "tendance"],
    65: ["saisons", "pluies", "sèche", "cyclone", "récolte"],
    66: ["tableau", "graphique", "axe", "courbe", "relevés"],
    67: ["prévoir", "indices", "ciel", "animaux", "météo"],
    68: ["population", "effectif", "compter", "total", "classe"],
    69: ["école", "effectifs", "additionner", "tableau", "niveau"],
    70: ["village", "habitants", "recensement", "échelle", "commune"],
    71: ["répartir", "sexe", "groupe", "critère", "pourcentage"],
    72: ["groupe d'âge", "jeunes", "adultes", "personnes âgées", "âge"],
    73: ["structure", "croiser", "case", "colonne", "total"],
    74: ["naissances", "décès", "migrations", "immigration", "émigration"],
    75: ["solde naturel", "solde migratoire", "natalité", "mortalité",
         "croissance"],
}

# ── Illustration d'ouverture de leçon ───────────────────────────────────────
# RÈGLE : chaque leçon ouvre sur une image. Sujet concret (lever du soleil,
# village, école, quartier) -> SCÈNE générée. Sujet abstrait (rose des vents,
# croix des points cardinaux, plan, échelle) -> schéma d'ImageMagick.
ILLUSTRATIONS = {
    1:  ("scene_trajet_soleil.png",
         "Illustration — Le lever du soleil : Rova part à l'école, son ombre est "
         "longue devant elle.", 660),
    13: ("scene_ecole.png",
         "Illustration — La cour de l'école vue d'en haut : le bâtiment, le mât et le "
         "terrain.", 660),
    14: ("scene_ecole.png",
         "Illustration — L'école et les lieux qui l'entourent.", 660),
    15: ("scene_ecole.png",
         "Illustration — La cour de l'école, point de départ des itinéraires.", 660),
    17: ("scene_village.png",
         "Illustration — Un village malgache : les maisons, les rizières et la route.",
         660),
    18: ("scene_village.png",
         "Illustration — Le village et la campagne qui l'entoure.", 660),
    19: ("scene_village.png",
         "Illustration — Les maisons du village le long de la rue principale.", 660),
    20: ("scene_village.png",
         "Illustration — Les constituants du village : maisons, rizières et route.",
         660),
    21: ("scene_village.png",
         "Illustration — Le village, ses rues et ses chemins.", 660),
    22: ("scene_ville_village.png",
         "Illustration — À gauche le village, à droite la ville.", 660),
    23: ("scene_ville_village.png",
         "Illustration — Le village et la ville : deux manières d'habiter.", 660),
    25: ("scene_quartier.png",
         "Illustration — Les rues et les îlots d'un quartier.", 660),
    26: ("scene_quartier.png",
         "Illustration — Un quartier : les rues forment des îlots.", 660),
    27: ("scene_trajet_soleil.png",
         "Illustration — Le lever du soleil, première boussole du repérage.", 660),
}

TECH = {
    "revision": "Question-réponse / travail oral",
    "mes": "Question-réponse",
    "presentation": "Exposé bref",
    "observation": "Observation collective",
    "analyse": "Question-réponse / travail collectif",
    "synthese": "Travail collectif / copie",
    "application": "Travail individuel ou en binôme",
    "evaluation": "Travail individuel écrit",
}


def courtes(texte):
    """Raccourcit les phrases trop longues : ; → point, puis les coordinations."""
    t = re.sub(r"\s*;\s+", ". ", texte)
    for conj in ("mais", "car", "donc", "puis", "ensuite", "alors que",
                 "c'est pourquoi"):
        t = re.sub(rf",\s+{conj}\s+", f". {conj[0].upper() + conj[1:]} ", t)
    t = re.sub(r"(^|[.!?])\s+([a-zà-ÿ])", lambda m: m.group(1) + " " + m.group(2).upper(), t)
    t = t.replace(" .", ".").replace("..", ".").replace("  ", " ")
    return t.strip()


def elide(mot):
    """« de » + mot, avec élision : d'observer, de tracer."""
    return ("d'" if mot[0].lower() in "aeiouyàâäéèêëîïôöûùü" else "de ") + mot


def couple(liste):
    """[(q, ra)] → '1) q\\nR.A. : ra\\n2) q\\n…'"""
    return "\n".join(f"{i}) {q}\nR.A. : {ra}" for i, (q, ra) in enumerate(liste, 1))


def couples_separes(liste):
    return (("\n".join(f"{i}) {q}" for i, (q, ra) in enumerate(liste, 1))),
            "\n".join(f"{i}) {ra}" for i, (q, ra) in enumerate(liste, 1)))


def genere_examen(d, s):
    """Sujet d'examen : énoncé noté sur 20 points, puis corrigé détaillé."""
    n = s["n"]
    d.saut_page()
    d.paragraphe(f"SÉANCE {n} / 87 — Unité I", size=22, bold=True, align="center",
                 space_after=60)
    d.titre(s["titre"], size=PT["lecon"], color="rouge", anchor=f"s{n}_examen",
            space_after=120)
    d.encadre("Consignes générales",
              "Durée : 1 heure. Barème total : 20 points. Aucun document autorisé. "
              "Réponds avec des phrases complètes. Les réponses sont corrigées en fin "
              "de manuel.", couleur="bleu", size=PT["corps"])
    for titre_part, points, enonces in s["examen"]:
        d.paragraphe(f"{titre_part} — {points} points", size=PT["section"], bold=True,
                     color="bleu", space_after=80)
        for e in enonces:
            d.paragraphe(e, size=PT["exercice"], indent=567, space_after=20)
        d.ligne_vide()
    if s.get("figure_ex"):
        fichier, legende, largeur = s["figure_ex"]
        d.image(os.path.join(ASSETS, fichier), caption=legende, width_px=largeur)

    d.saut_page()
    d.titre("CORRIGÉ DU SUJET D'EXAMEN", size=28, bold=True, color="corrige",
            anchor=f"s{n}_corr", space_after=160)
    for titre_part, points, enonces, corriges in s["corrige_examen"]:
        d.paragraphe(f"{titre_part} — {points} points", size=PT["section"], bold=True,
                     color="corrige", space_after=80)
        for c in corriges:
            d.paragraphe(c, size=PT["exercice"], indent=567, color="corrige",
                         space_after=20)
        d.ligne_vide()
    d.saut_page()


def generer(premiere=1, derniere=None, sortie=SORTIE):
    seances = SEANCES[premiere - 1:derniere]
    print("Figures…")
    for nom, fn in list(figures.FIGURES_S1.items()) + list(figures.FIGURES_T1.items()) \
            + list(figures.FIGURES_T1B.items()) + list(figures.FIGURES_T1C.items()) \
            + list(figures.FIGURES_T2.items()) \
            + list(figures.FIGURES_T3.items()):
        fn(os.path.join(ASSETS, nom))

    d = Doc(template=SQUELETTE)

    for s in seances:
        n = s["n"]
        if s.get("type") == "examen":
            genere_examen(d, s)
            continue
        termes = SAUMON.get(n, [])

        # ══════════════════════════ FICHE DE PRÉPARATION ══════════════════════
        d.titre(f"SÉANCE {n} / {TOTAL}", size=20, bold=True, color="noir", align="right",
                space_after=60)
        d.titre(s["titre"], size=PT["titre_fiche"], color="rouge", anchor=f"s{n}",
                align="center", space_after=200)
        d.paragraphe("FICHE DE PRÉPARATION", size=24, bold=True, color="bleu",
                     align="center", space_after=140)

        # table méta : grille de mise en page, SANS trait visible
        d.table([
            [{"text": "Discipline :", "bold": True, "size": PT["meta"]},
             {"text": "Géographie", "size": PT["meta"]},
             {"text": "Classe :", "bold": True, "size": PT["meta"]},
             {"text": "9e", "size": PT["meta"]}],
            [{"text": "Thème :", "bold": True, "size": PT["meta"]},
             {"text": "Le repérage dans l'espace", "size": PT["meta"]},
             {"text": "Séance n° :", "bold": True, "size": PT["meta"]},
             {"text": f"{n} / 29", "size": PT["meta"]}],
            [{"text": "Titre :", "bold": True, "size": PT["meta"]},
             {"text": s["titre"], "size": PT["meta"], "span": 3}],
            [{"text": "Trimestre :", "bold": True, "size": PT["meta"]},
             {"text": f"T1 — Semaine {s['semaine']}", "size": PT["meta"]},
             {"text": "Durée :", "bold": True, "size": PT["meta"]},
             {"text": "30 min", "size": PT["meta"]}],
            [{"text": "Objectif spécifique :", "bold": True, "size": PT["meta"]},
             {"text": s["objectif"], "size": PT["meta"], "span": 3}],
            [{"text": "Documentation :", "bold": True, "size": PT["meta"]},
             {"text": "Programme officiel de Géographie 9e — fiche de répartition annuelle des "
                      "objectifs spécifiques (FRA).", "size": PT["meta"], "span": 3}],
            [{"text": "Support et matériel :", "bold": True, "size": PT["meta"]},
             {"text": s["materiel"], "size": PT["meta"], "span": 3}],
        ], L4, borders=False)

        q_rev, ra_rev = couples_separes(s["revision"])
        q_ana, ra_ana = couples_separes(s["analyse"])
        support = s["materiel"].split(",")[0]
        premier = support.split()[0].lower().rstrip("s")
        if premier in ("cour", "carte", "classe", "feuille", "règle", "gomme", "rose",
                       "table", "porte", "photo", "image"):
            article = "la "
        elif support[0].lower() in "aeiouyàâäéèêëîïôöûùü":
            article = "l'"
        else:
            article = "le "
        support_phrase = article + support[0].lower() + support[1:]

        rows = [
            [{"text": "Étapes et Durée", "bold": True, "size": PT["deroul"],
              "align": "center"},
             {"text": "Déroulement de la leçon", "bold": True, "size": PT["deroul"],
              "align": "center", "span": 2},
             {"text": "Technique et Stratégie", "bold": True, "size": PT["deroul"],
              "align": "center"},
             {"text": "Support et matériel", "bold": True, "size": PT["deroul"],
              "align": "center"},
             {"text": "Observation", "bold": True, "size": PT["deroul"], "align": "center"}],
            [{"text": "", "size": PT["deroul"]},
             {"text": "Enseignant", "bold": True, "size": PT["deroul"], "align": "center"},
             {"text": "Apprenants", "bold": True, "size": PT["deroul"], "align": "center"},
             {"text": "", "size": PT["deroul"]}, {"text": "", "size": PT["deroul"]},
             {"text": "", "size": PT["deroul"]}],

            [{"text": "I. RÉVISION — 3 min", "bold": True, "size": PT["deroul"]},
             {"text": q_rev, "size": PT["deroul"]}, {"text": ra_rev, "size": PT["deroul"]},
             {"text": TECH["revision"], "size": PT["deroul"]},
             {"text": "—", "size": PT["deroul"]}, {"text": "—", "size": PT["deroul"]}],

            [{"text": "II. NOUVELLE LEÇON — 22 min", "bold": True, "size": PT["deroul"],
              "span": 6}],

            [{"text": "1. Mise en situation", "bold": True, "size": PT["deroul"]},
             {"text": s["mes"][0], "size": PT["deroul"]},
             {"text": s["mes"][1], "size": PT["deroul"]},
             {"text": TECH["mes"], "size": PT["deroul"]},
             {"text": "—", "size": PT["deroul"]}, {"text": "—", "size": PT["deroul"]}],

            [{"text": "2. Présentation", "bold": True, "size": PT["deroul"]},
             {"text": f"« Aujourd'hui, nous allons étudier : {s['titre']}. "
                      f"Après cette séance, vous serez capables "
                      f"{elide(s['objectif'][0].lower() + s['objectif'][1:])} »",
              "size": PT["deroul"]},
             {"text": "Écoutent l'annonce du titre et de l'objectif.", "size": PT["deroul"]},
             {"text": TECH["presentation"], "size": PT["deroul"]},
             {"text": "—", "size": PT["deroul"]}, {"text": "—", "size": PT["deroul"]}],

            [{"text": "3. Observation", "bold": True, "size": PT["deroul"]},
             {"text": f"« Regardez et observez bien {support_phrase}. »",
              "size": PT["deroul"]},
             {"text": "Observent silencieusement.", "size": PT["deroul"]},
             {"text": TECH["observation"], "size": PT["deroul"]},
             {"text": support.capitalize(), "size": PT["deroul"]},
             {"text": "—", "size": PT["deroul"]}],

            [{"text": "4. Analyse", "bold": True, "size": PT["deroul"]},
             {"text": q_ana, "size": PT["deroul"]}, {"text": ra_ana, "size": PT["deroul"]},
             {"text": TECH["analyse"], "size": PT["deroul"]},
             {"text": "Ardoise et craie", "size": PT["deroul"]},
             {"text": "—", "size": PT["deroul"]}],

            [{"text": "5. Synthèse", "bold": True, "size": PT["deroul"]},
             {"text": courtes(s["synthese"]), "size": PT["deroul"]},
             {"text": "Écoutent et copient la synthèse dans leur cahier.",
              "size": PT["deroul"]},
             {"text": TECH["synthese"], "size": PT["deroul"]},
             {"text": "Cahier", "size": PT["deroul"]}, {"text": "—", "size": PT["deroul"]}],

            [{"text": "6. Application", "bold": True, "size": PT["deroul"]},
             {"text": s["application"][0], "size": PT["deroul"]},
             {"text": s["application"][1], "size": PT["deroul"], "color": "corrige"},
             {"text": TECH["application"], "size": PT["deroul"]},
             {"text": "Ardoise, cahier", "size": PT["deroul"]},
             {"text": "—", "size": PT["deroul"]}],

            [{"text": "III. ÉVALUATION — 5 min", "bold": True, "size": PT["deroul"]},
             {"text": s["evaluation"][0], "size": PT["deroul"]},
             {"text": s["evaluation"][1], "size": PT["deroul"], "color": "corrige"},
             {"text": TECH["evaluation"], "size": PT["deroul"]},
             {"text": "Ardoise", "size": PT["deroul"]},
             {"text": "Corrigé en fin de séance", "size": PT["deroul"]}],
        ]
        d.table(rows, L6)

        # ════════════════════════════════ LEÇON ═══════════════════════════════
        d.saut_page()
        d.titre(s["lecon_titre"], size=PT["lecon"], color="rouge", anchor=f"s{n}_lecon",
                space_after=200)
        ill = s.get("illustration") or ILLUSTRATIONS.get(s["n"])
        if ill:
            fichier, legende, largeur = ill
            d.image(os.path.join(ASSETS, fichier), caption=legende, width_px=largeur)
        for sec in s["sections"]:
            titre_sec, texte = sec[0], sec[1]
            figure = sec[2] if len(sec) > 2 else None
            d.paragraphe(titre_sec, size=PT["section"], bold=True, color="vert",
                         space_after=80)
            if figure:
                fichier, legende, largeur = figure
                d.image(os.path.join(ASSETS, fichier), caption=legende, width_px=largeur)
            d.paragraphe(courtes(texte), size=PT["corps"], align="both", termes=termes)
        if s.get("encadre"):
            encadres = s["encadre"]
            if isinstance(encadres[0], str):
                encadres = [encadres]
            for couleur, titre_enc, texte_enc in encadres:
                d.encadre(titre_enc, courtes(texte_enc), couleur=couleur, size=PT["corps"])
        if s.get("resume"):
            d.resume([courtes(p) for p in s["resume"]], termes=termes, size=PT["corps"])
        d.paragraphe("Mots clés : " + ", ".join(m for m, _ in s["lexique"]) + ".",
                     size=PT["corps"], bold=True, color="bleu", space_after=120)
        d.lexique(s["lexique"], size=PT["meta"])

        # ═══════════════════════════════ EXERCICES ════════════════════════════
        d.saut_page()
        d.titre("EXERCICES", size=28, bold=True, color="bleu", anchor=f"s{n}_ex",
                space_after=60)
        d.paragraphe("Barème : 4 points par exercice — total 20 points.",
                     size=PT["bareme"], italic=True, space_after=160)
        for i, (consigne, items) in enumerate([(c, it) for c, it, _ in s["exercices"]],
                                              start=1):
            d.paragraphe(f"Exercice {i} — 4 points", size=PT["exercice"], bold=True,
                         space_after=60)
            d.paragraphe(consigne, size=PT["exercice"], space_after=40)
            for item in items:
                d.paragraphe(item, size=PT["exercice"], indent=567, space_after=20)
            d.ligne_vide()
        d.paragraphe("Exercice 5 — 4 points", size=PT["exercice"], bold=True, space_after=60)
        d.paragraphe(s["consigne_ex5"], size=PT["exercice"], space_after=60)
        if s.get("figure_ex"):
            fichier, legende, largeur = s["figure_ex"]
            d.image(os.path.join(ASSETS, fichier), caption=legende, width_px=largeur)

        # ════════════════════════════════ CORRIGÉ ═════════════════════════════
        d.saut_page()
        d.titre(f"CORRIGÉ — Séance {n}", size=28, bold=True, color="corrige",
                anchor=f"s{n}_corr", space_after=160)
        for i, (_, _, corriges) in enumerate(s["exercices"], start=1):
            d.paragraphe(f"Exercice {i} — 4 points (1 point par réponse)",
                         size=PT["exercice"], bold=True, space_after=60)
            for c in corriges:
                d.paragraphe(c, size=PT["exercice"], indent=567, color="corrige",
                             space_after=20)
            d.ligne_vide()
        d.paragraphe("Exercice 5 — 4 points", size=PT["exercice"], bold=True, space_after=60)
        d.paragraphe(s["corrige_ex5"], size=PT["exercice"], indent=567, color="corrige",
                     space_after=20)
        d.saut_page()

    os.makedirs(os.path.dirname(SORTIE), exist_ok=True)
    d.save(sortie)
    v = d.verif()
    print("Fichier généré :", sortie)
    print("Contrôles :", v)
    ok = (v["sectPr"] == 1 and v["ns0"] == 0 and v["namespaces"] == 32
          and v["doubles_espaces"] == 0)
    print("CONFORME" if ok else "NON CONFORME — à corriger")
    print(f"Séances générées : {len(seances)}")
    return v


if __name__ == "__main__":
    a = int(sys.argv[1]) if len(sys.argv) > 1 else 1
    b = int(sys.argv[2]) if len(sys.argv) > 2 else None
    c = sys.argv[3] if len(sys.argv) > 3 else SORTIE
    generer(a, b, c)
