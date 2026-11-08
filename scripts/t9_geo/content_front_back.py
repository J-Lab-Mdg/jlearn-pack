# -*- coding: utf-8 -*-
"""Contenu des pages liminaires (page de garde, authenticité, avant-propos,
mode d'emploi, table des matières, tableau de bord général) et des annexes
(glossaire, cartes et schémas d'activités, auto-évaluation, table des
illustrations, sources) du manuel Géographie T9 — V1 PILOTE, construit sur
le même modèle que les manuels Géographie T4 à T9 de la collection J-Learn.
"""
import sys
import os

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

from content_unit1 import UNIT1, LESSONS as LESSONS1
from content_unit2 import UNIT2, LESSONS2
from content_unit3 import UNIT3, LESSONS3
from content_unit4 import UNIT4, LESSONS4
from content_unit5 import UNIT5, LESSONS5
from content_unit6 import UNIT6, LESSONS6

UNITS = [
    (UNIT1, LESSONS1, 1, 20),
    (UNIT2, LESSONS2, 21, 26),
    (UNIT3, LESSONS3, 27, 46),
    (UNIT4, LESSONS4, 47, 58),
    (UNIT5, LESSONS5, 59, 68),
    (UNIT6, LESSONS6, 69, 76),
]

FACEBOOK_URL = "https://web.facebook.com/profile.php?id=61575599505051"

# ---------------------------------------------------------------------
# 1. Authenticité et droits
# ---------------------------------------------------------------------
AUTHENTICITE = {
    'title': "AUTHENTICITÉ ET DROITS",
    'warning': "ATTENTION AUX REVENTES NON AUTORISÉES",
    'text': [
        "Ce manuel « Géographie T9 » est une publication officielle J-Learn. "
        "Il est vendu exclusivement par la page Facebook officielle J-Learn indiquée ci-dessous.",
        "Tout fichier proposé par un autre compte, une autre page ou un revendeur est une copie non "
        "autorisée. Avant tout achat, vérifiez le lien officiel ou scannez le QR code.",
    ],
    'facebook_url': FACEBOOK_URL,
    'qr_caption': "Scannez ce QR code pour accéder à l'unique page de vente officielle J-Learn.",
    'copyright': (
        "© 2026 J-Learn — Tous droits réservés. Toute revente, reproduction, modification ou "
        "diffusion intégrale ou partielle sans autorisation écrite de J-Learn est interdite."
    ),
}

# ---------------------------------------------------------------------
# 2. Avant-propos
# ---------------------------------------------------------------------
AVANT_PROPOS = [
    "Ce manuel de Géographie est destiné aux élèves de la classe de T9. Il couvre les 64 heures "
    "de contenus réparties dans le programme, à raison de deux heures par semaine.",
    "L'ouvrage compte 76 numéros : 64 leçons de 60 minutes, 6 révisions et 6 sujets d'examen "
    "corrigés. Chaque leçon comprend une fiche de préparation, une leçon illustrée et quatre "
    "exercices notés avec leurs corrigés.",
    "Les six unités suivent les thématiques officielles : la structure économique de Madagascar ; "
    "la méthodologie de traitement de devoir ; les potentialités naturelles de Madagascar ; les "
    "potentialités démographiques de Madagascar ; la protection de l'environnement ; la lutte "
    "contre la pauvreté à Madagascar.",
    "Des scènes semi-réalistes, des schémas pédagogiques, un glossaire, huit cartes et schémas "
    "d'activités, une auto-évaluation, une table des illustrations et les sources complètent le "
    "manuel.",
    "Cette édition a été élaborée avec soin à partir du programme d'études T9 et des ressources "
    "pédagogiques associées. L'équipe J-Lab accueille les retours destinés à améliorer les "
    "prochaines éditions.",
    "Nous remercions les enseignants qui guideront les élèves dans l'analyse géographique, la "
    "rédaction méthodique et l'action responsable.",
]

# ---------------------------------------------------------------------
# 3. Mode d'emploi du manuel
# ---------------------------------------------------------------------
MODE_EMPLOI = [
    "Chaque leçon de 60 minutes est organisée en trois temps :",
    "1. La fiche de préparation : révision (5 minutes), nouvelle leçon (45 minutes) et évaluation "
    "(10 minutes). Le tableau guide la mise en situation, la présentation, l'observation, "
    "l'analyse, la synthèse et l'application.",
    "2. La leçon : un schéma pédagogique, un document illustré et un contenu structuré mettent en "
    "évidence les notions à retenir.",
    "3. Les exercices : quatre activités notées sur 5 points, suivies de corrigés précis, "
    "permettent de s'entraîner et de vérifier les acquis.",
    "« R.A. » signifie « Réponse attendue ».",
    "Le titre de la leçon est en rouge, les sous-titres en vert, les mots clés en bleu et les "
    "éléments essentiels du corrigé en rose.",
    "Deux leçons de 60 minutes sont prévues chaque semaine, conformément au volume horaire de "
    "deux heures par semaine.",
]

# ---------------------------------------------------------------------
# 4. Table des matières / Tableau de bord — construits à partir des LESSONS
# ---------------------------------------------------------------------
def _seance_title(num, lesson_title, kind, unit):
    if kind == 'lecon':
        return f"Séance {num} — {lesson_title}"
    if kind == 'revision':
        return f"Séance {num} — Révision (Unité {unit['num']})"
    return f"Séance {num} — Sujet d'examen T9 (Unité {unit['num']})"


def build_seance_index():
    """Renvoie la liste complète (num, titre_court, type, unit) des 76 numéros,
    dans l'ordre, pour la table des matières et le tableau de bord."""
    out = []
    for unit, lessons, start, end in UNITS:
        num = start
        for lesson in lessons:
            out.append((num, lesson['titre'], 'Leçon', unit))
            num += 1
        out.append((num, f"Révision (Unité {unit['num']})", 'Révision', unit))
        num += 1
        out.append((num, f"Sujet d'examen T9 (Unité {unit['num']})", "Sujet d'examen", unit))
        num += 1
        assert num - 1 == end, (unit['num'], num - 1, end)
    return out


SEANCE_INDEX = build_seance_index()

# ---------------------------------------------------------------------
# 5. Tableau de bord général — vue d'ensemble
# ---------------------------------------------------------------------
TABLEAU_DE_BORD_INTRO = (
    "Le programme de Géographie T9 prévoit 64 heures de contenus, à raison de 2 heures par "
    "semaine, réparties en six thématiques. Le manuel compte 76 numéros : 64 leçons de 60 "
    "minutes, 6 révisions et 6 sujets d'examen corrigés, complétés par les annexes."
)


def overview_rows():
    rows = []
    total_lessons = 0
    for unit, lessons, start, end in UNITS:
        n = len(lessons)
        total_lessons += n
        rows.append([
            f"Unité {unit['num']} — {unit['theme'].upper()}",
            f"Séances {start} à {end}",
            str(n),
            "2 (incluses)",
        ])
    rows.append(["Total", "Séances 1 à 76", str(total_lessons), "6 + 6"])
    return rows


# ---------------------------------------------------------------------
# 6. Glossaire — 64 notions classées par ordre alphabétique
# ---------------------------------------------------------------------
def _clean_term(term):
    t = term.strip()
    low = t.lower()
    for art in ("l'", "l’"):
        if low.startswith(art):
            rest = t[len(art):]
            return rest[0].upper() + rest[1:]
    for art in ("les ", "la ", "le ", "une ", "un "):
        if low.startswith(art):
            rest = t[len(art):]
            return rest[0].upper() + rest[1:]
    return t[0].upper() + t[1:]


def build_glossary():
    raw = []
    for _, lessons, _, _ in UNITS:
        for lesson in lessons:
            raw.append((lesson['notion'], lesson['notion_def']))
    cleaned = [(_clean_term(t), d) for t, d in raw]
    cleaned.sort(key=lambda x: x[0].lower())
    return cleaned


GLOSSAIRE = build_glossary()

# ---------------------------------------------------------------------
# 7. Cartes et schémas d'activités (8 annexes illustrées)
# ---------------------------------------------------------------------
CARTES_SCHEMAS = [
    {
        'title': "1. Relief de Madagascar",
        'consigne': "Consigne : Identifie massifs, plateaux, plaines et pentes ; relie-les aux activités.",
        'image': "annexe1_relief.png",
        'caption': "Relief de Madagascar — document d'activité GEO T9.",
    },
    {
        'title': "2. Climats et végétations",
        'consigne': "Consigne : Localise les grands climats et associe à chacun une végétation dominante.",
        'image': "annexe2_climats.png",
        'caption': "Climats et végétations — document d'activité GEO T9.",
    },
    {
        'title': "3. Hydrographie malgache",
        'consigne': "Consigne : Distingue fleuves de l'Est et de l'Ouest, puis place lacs et lagunes.",
        'image': "annexe3_hydro.png",
        'caption': "Hydrographie malgache — document d'activité GEO T9.",
    },
    {
        'title': "4. Cinq régions naturelles",
        'consigne': "Consigne : Délimite Hautes Terres, Ouest, Sud, Est et Nord ; complète la légende.",
        'image': "annexe4_regions.png",
        'caption': "Cinq régions naturelles — document d'activité GEO T9.",
    },
    {
        'title': "5. Réseaux et activités économiques",
        'consigne': "Consigne : Relie production, industrie, transport, commerce, tourisme et télécommunications.",
        'image': "annexe5_reseaux.png",
        'caption': "Réseaux et activités économiques — document d'activité GEO T9.",
    },
    {
        'title': "6. Répartition de la population",
        'consigne': "Consigne : Décris les contrastes de densité et propose des facteurs explicatifs.",
        'image': "annexe6_population.png",
        'caption': "Répartition de la population — document d'activité GEO T9.",
    },
    {
        'title': "7. Méthode du devoir composé",
        'consigne': "Consigne : Suis les quatre étapes pour préparer une réponse organisée.",
        'image': "annexe7_devoir.png",
        'caption': "Méthode du devoir composé — document d'activité GEO T9.",
    },
    {
        'title': "8. Mini-projet de petite entreprise",
        'consigne': "Consigne : Construis une activité locale viable, inclusive et respectueuse de l'environnement.",
        'image': "annexe8_miniprojet.png",
        'caption': "Mini-projet de petite entreprise — document d'activité GEO T9.",
    },
]

# ---------------------------------------------------------------------
# 8. Auto-évaluation — 4 compétences par unité
# ---------------------------------------------------------------------
def build_auto_eval():
    """4 notions representatives par unite (reparties sur la longueur de
    l'unite), au format 'Definir X et l'appliquer a une situation
    geographique.'"""
    blocks = []
    for unit, lessons, _, _ in UNITS:
        n = len(lessons)
        if n <= 4:
            picks = lessons
        else:
            idxs = sorted(set(round(k * (n - 1) / 3) for k in range(4)))
            while len(idxs) < 4:
                for k in range(n):
                    if k not in idxs:
                        idxs.append(k)
                        break
                idxs = sorted(set(idxs))
            picks = [lessons[i] for i in idxs[:4]]
        skills = [f"Définir {notion_label_lower(l['notion'])} et l'appliquer à une situation géographique." for l in picks]
        blocks.append((f"Unité {unit['num']} — {unit['theme'].upper()}", skills))
    return blocks


def notion_label_lower(notion):
    n = notion.strip()
    low = n.lower()
    for art in ("l'", "l’"):
        if low.startswith(art):
            return n[len(art):]
    for art in ("les ", "la ", "le ", "une ", "un "):
        if low.startswith(art):
            return n[len(art):]
    return n


AUTO_EVAL = build_auto_eval()

# ---------------------------------------------------------------------
# 9. Table des illustrations — pour chacune des 64 leçons
# ---------------------------------------------------------------------
def build_illustrations():
    rows = []
    for unit, lessons, start, end in UNITS:
        num = start
        for lesson in lessons:
            illus = f"Schéma pédagogique : {lesson['fig_title']}.\n{lesson['obs_title']}"
            rows.append((str(num), lesson['titre'], illus))
            num += 1
    return rows


TABLE_ILLUSTRATIONS = build_illustrations()

# ---------------------------------------------------------------------
# 10. Sources
# ---------------------------------------------------------------------
SOURCES = [
    {
        'bullet': "• Programme d'études T9 — section Géographie, pages PDF 191 à 210 du document de référence.",
        'explain': "Source des six thématiques, des contenus, des résultats d'apprentissage et des 64 heures officielles.",
    },
    {
        'bullet': "• Collection J-Learn — éditions GEO T5, GEO T6, GEO T8 et GEO T9.",
        'explain': (
            "Les scènes semi-réalistes validées ont été sélectionnées selon les thèmes ; les 64 schémas "
            "et les 8 annexes de GEO T9 ont été composés pour le présent ouvrage."
        ),
    },
    {
        'bullet': "• Rapports des Nations unies, de la Banque mondiale et de l'Union européenne sur Madagascar.",
        'explain': (
            "Appui documentaire pour la lutte contre la pauvreté : aide publique au développement, filets "
            "sociaux, microfinance (CECAM, OTIV) et réponse à la crise sanitaire de 2020."
        ),
    },
    {
        'bullet': "• Atlas et vocabulaire géographiques scolaires de référence.",
        'explain': (
            "Appui pour les définitions, les cartes, les régions naturelles, les activités économiques et "
            "les indicateurs démographiques."
        ),
    },
    {
        'bullet': "• Principes de développement durable et de gestion de projet.",
        'explain': "Appui pour la protection de l'environnement, la lutte contre la pauvreté et l'étude de faisabilité.",
    },
]

SOURCES_CLOSING = (
    "Les six thématiques, les contenus et les 64 heures reprennent le programme T9 ; les formulations "
    "pédagogiques, les exercices, les corrigés, les schémas et les annexes constituent l'édition J-Learn."
)

ANNEXES_INTRO = "Glossaire, cartes et schémas d'activités, auto-évaluation, table des illustrations et sources."
GLOSSAIRE_INTRO = "Les 64 notions fondamentales des six thématiques sont classées par ordre alphabétique."
CARTES_INTRO = "Observe, complète et explique chaque document dans ton cahier."
AUTOEVAL_INTRO = "Après chaque unité, coche la colonne correspondant à ce que tu sais faire."
