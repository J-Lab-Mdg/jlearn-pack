# -*- coding: utf-8 -*-
"""Content for UNITE III - Reproduction humaine / Puberte (seances 1-4).
Grounded in PE T5 p.112-113 (RAS: decrire les transformations morphologiques,
psychologiques et physiologiques de la puberte chez la fille et le garcon ;
adopter des comportements responsables).

Tone directive (user-approved, binding for this unit only): factual,
scientifically accurate, reassuring / normalizing, hygiene-focused, no
graphic physiological mechanism detail beyond pedagogical need. Anatomical
diagrams: clinical, labeled, non-sexualized cross-sections of the
reproductive system (textbook/medical illustration style), matching
international SVT curricula and UNESCO comprehensive sexuality education
guidance for this age group.
"""

THEME = "Reproduction humaine"
RAS_THEME_1 = "Décrire les transformations morphologiques et psychologiques de la puberté chez la fille et le garçon"
RAS_THEME_2 = "Décrire les transformations physiologiques de la puberté et adopter des comportements responsables"
VALEURS = "respect de soi et d'autrui, hygiène corporelle, confiance, pudeur"

# ---------------------------------------------------------------------------
# SEANCE 1 - La puberte : les transformations du corps
# ---------------------------------------------------------------------------
S1 = {
    "num": 1, "title": "La puberté : les transformations du corps",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "décrire les transformations morphologiques et psychologiques qui apparaissent à la puberté, "
                "chez la fille et chez le garçon.",
    "support": "affiche ou schéma des transformations corporelles de la puberté, tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u3_s1_a_transformations.jpg",
                     "Les transformations du corps à la puberté, communes et spécifiques à chaque sexe."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Selon vous, qu'est-ce qui différencie le corps d'un enfant de celui d'un adulte ?",
         "R.A. : la taille, la carrure, la voix, l'apparence générale.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "As-tu remarqué, chez toi ou chez des camarades, des changements du corps ces "
                                  "derniers mois ou ces dernières années ?",
         "R.A. : oui, par exemple grandir plus vite, la voix qui change, etc. (réponses libres et respectueuses)",
         "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « La puberté : les transformations du corps ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez l'affiche représentant un enfant avant et après la puberté, fille et "
                            "garçon. Notez les changements visibles.",
         "R.A. : taille plus grande, pilosité, voix plus grave chez le garçon, poitrine et hanches plus larges "
         "chez la fille.", "Observation dirigée", "Affiche ou schéma", ""),
        ("4. Analyse", "Pourquoi ces changements n'apparaissent-ils pas au même âge chez tout le monde ?",
         "R.A. : chaque personne grandit et se développe à son propre rythme ; c'est normal de commencer plus "
         "tôt ou plus tard que ses camarades.", "Étude de cas", "Documents", ""),
        ("5. Synthèse", "Donc, la puberté est la période de transition entre l'enfance et l'âge adulte, en "
                         "général entre 10 et 15 ans. Elle s'accompagne de transformations morphologiques "
                         "(communes aux deux sexes et spécifiques à chacun) et de transformations psychologiques. "
                         "Chacun vit cette période à son propre rythme, et c'est tout à fait normal.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Classe ces transformations en « commune aux deux sexes », « spécifique à la "
                            "fille » ou « spécifique au garçon » : poussée de croissance, développement de la "
                            "poitrine, mue de la voix, apparition de poils sous les bras.",
         "Ex. 1 : poussée de croissance — commune ; poitrine — fille ; mue de la voix — garçon ; poils sous les "
         "bras — commune.", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite deux transformations communes aux filles et aux garçons à la puberté.",
         "Ex. 1 : la poussée de croissance, l'apparition de la pilosité (aisselles, pubis).",
         "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Qu'est-ce que la puberté ?"),
        ("body", "La puberté est la période de transition entre l'enfance et l'âge adulte. Elle se produit en "
                 "général entre 10 et 15 ans, mais l'âge exact varie selon chaque personne : commencer plus tôt "
                 "ou plus tard que ses camarades est tout à fait normal."),
        ("body", "Elle est provoquée par des hormones, des substances produites par le corps qui déclenchent la "
                 "croissance et les autres transformations du corps."),
        ("section", "2. Les transformations communes aux filles et aux garçons"),
        ("sub", "a. La croissance"),
        ("body", "Une poussée de croissance rapide : on peut grandir de plusieurs centimètres en une année."),
        ("sub", "b. La peau"),
        ("body", "Une transpiration plus importante et davantage de sébum (une substance grasse de la peau), "
                 "ce qui peut provoquer des boutons d'acné."),
        ("sub", "c. La pilosité"),
        ("body", "L'apparition de poils sous les bras (aisselles) et au niveau du pubis."),
        ("image", ("scripts/t5/generated_images/u3_s1_a_transformations.jpg",
                   "Les transformations communes de la puberté : croissance, peau, pilosité.")),
        ("section", "3. Les transformations spécifiques chez la fille"),
        ("body", "Le développement de la poitrine, l'élargissement du bassin (les hanches), et l'apparition des "
                 "premières règles, qui seront expliquées dans la séance suivante."),
        ("section", "4. Les transformations spécifiques chez le garçon"),
        ("body", "L'élargissement des épaules, le développement de la musculature, la mue de la voix (la voix "
                 "devient plus grave), et l'apparition des premières éjaculations, qui seront expliquées dans "
                 "la séance suivante."),
        ("section", "5. Les transformations psychologiques"),
        ("body", "La puberté s'accompagne aussi de changements dans les émotions et le comportement : des "
                 "changements d'humeur plus fréquents, un besoin accru d'intimité, un intérêt nouveau pour son "
                 "apparence. Ces changements sont normaux. Il est toujours utile d'en parler avec un adulte de "
                 "confiance (parent, enseignant, personnel de santé) en cas de question ou d'inquiétude."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Classe ces transformations en trois colonnes « commune », « fille » ou "
                                  "« garçon » : 1. poussée de croissance · 2. développement de la poitrine · "
                                  "3. mue de la voix · 4. transpiration plus importante · 5. élargissement des "
                                  "épaules."),
        ("Exercice 2 (5 points)", " — Complète : la puberté se produit en général entre …… et …… ans ; elle est "
                                  "provoquée par des …………… produites par le corps ; chaque personne se développe "
                                  "à son propre …………… ."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Tous les enfants vivent la puberté exactement au même âge.\n"
                                  "2. La mue de la voix est une transformation spécifique au garçon.\n"
                                  "3. Les changements d'humeur à la puberté sont anormaux et inquiétants.\n"
                                  "4. On peut parler de ses questions sur la puberté à un adulte de confiance."),
        ("Exercice 4 (4 points)", " — Une camarade s'inquiète car elle grandit plus vite que ses amies. Que lui "
                                  "répondrais-tu, en t'appuyant sur ce que tu as appris ?"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. commune", True), (" · 2. ", False), ("fille", True), (" · 3. ", False),
         ("garçon", True), (" · 4. ", False), ("commune", True), (" · 5. ", False), ("garçon", True)],
        [("Ex. 2 — ", False), ("10 et 15 ans ; hormones ; rythme. (1,5 à 2 pts par terme exact)", False)],
        [("Ex. 3 — ", False),
         ("1. Faux. Chaque personne vit la puberté à son propre rythme, à un âge qui lui est propre. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Faux. Les changements d'humeur sont des transformations psychologiques normales à la puberté. "
          "(1,5 pt)", False)],
        [("4. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Lui expliquer que chaque personne grandit à son propre rythme, que commencer la "
                                "puberté plus tôt ou plus tard que ses amies est normal, et que cela n'a rien "
                                "d'inquiétant. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 2 - La puberte : transformations physiologiques et comportements responsables
# ---------------------------------------------------------------------------
S2 = {
    "num": 2, "title": "La puberté : transformations physiologiques et comportements responsables",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "décrire simplement le cycle menstruel et les premières éjaculations, et adopter des "
                "comportements responsables d'hygiène pendant la puberté.",
    "support": "schémas légendés de l'appareil reproducteur féminin et masculin, affiche sur l'hygiène, "
               "tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u3_s2_c_hygiene.jpg",
                     "Des comportements responsables pendant la puberté : hygiène, sommeil, alimentation, sport."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite une transformation spécifique à la fille et une spécifique au garçon à la "
                         "puberté.",
         "R.A. : le développement de la poitrine (fille) ; la mue de la voix (garçon).", "Questionnement oral",
         "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "As-tu déjà entendu parler des « règles » chez les filles, ou des changements "
                                  "qui concernent les garçons à la puberté ? D'où viennent-ils, selon toi ?",
         "R.A. : réponses libres ; l'enseignant accueille toutes les réponses sans jugement.",
         "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « La puberté : transformations physiologiques "
                             "et comportements responsables ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez les schémas légendés de l'appareil reproducteur féminin et de l'appareil "
                            "reproducteur masculin. Repérez le nom des principaux organes.",
         "R.A. : fille — ovaires, trompes, utérus, vagin ; garçon — testicules, canal déférent, pénis.",
         "Observation dirigée", "Schémas légendés", ""),
        ("4. Analyse", "D'après le schéma, que produisent les ovaires chez la fille ? Et les testicules chez le "
                        "garçon ?",
         "R.A. : les ovaires produisent des ovules ; les testicules produisent des spermatozoïdes.",
         "Étude de cas", "Schémas, documents", ""),
        ("5. Synthèse", "Donc, à partir de la puberté, le corps de la fille libère chaque mois un ovule ; si cet "
                         "ovule n'est pas fécondé, la paroi de l'utérus se détache et s'écoule pendant quelques "
                         "jours : ce sont les règles. Chez le garçon, les testicules produisent des "
                         "spermatozoïdes ; leur évacuation, appelée éjaculation, peut survenir pendant le "
                         "sommeil. Ce sont des phénomènes naturels et normaux, signes que le corps devient "
                         "capable, à l'âge adulte, de se reproduire. Une bonne hygiène, un sommeil suffisant, "
                         "une alimentation équilibrée et une activité physique régulière aident à bien vivre "
                         "cette période.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Cite deux gestes d'hygiène à adopter par une fille pendant ses règles.",
         "Ex. 1 : se laver régulièrement, changer de protection hygiénique plusieurs fois par jour.",
         "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Pourquoi les règles et les premières éjaculations sont-elles des "
                             "phénomènes normaux ?",
         "Ex. 1 : parce qu'elles montrent que le corps devient capable, à l'âge adulte, de se reproduire ; ce "
         "sont des étapes naturelles du développement.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. L'appareil reproducteur féminin"),
        ("body", "L'appareil reproducteur féminin comprend : deux ovaires (qui produisent les ovules), deux "
                 "trompes (qui conduisent l'ovule vers l'utérus), l'utérus (un organe creux où pourrait se "
                 "développer un bébé) et le vagin (qui relie l'utérus à l'extérieur du corps)."),
        ("image", ("scripts/t5/generated_images/u3_s2_a_app_reproducteur_feminin.jpg",
                   "Schéma en coupe légendé de l'appareil reproducteur féminin : ovaires, trompes, utérus, vagin.")),
        ("section", "2. Le cycle menstruel et les règles"),
        ("body", "Chaque mois, à partir de la puberté, un ovaire libère un ovule. En même temps, la paroi "
                 "interne de l'utérus s'épaissit pour se préparer à accueillir un éventuel bébé. Si l'ovule "
                 "n'est pas fécondé, cette paroi se détache et s'écoule par le vagin pendant quelques jours : "
                 "ce sont les règles, aussi appelées menstruations. Ce cycle se répète en moyenne tous les "
                 "28 jours, mais sa durée varie selon les personnes."),
        ("body", "Les règles sont un phénomène naturel et normal, signe que le corps d'une fille devient "
                 "capable, à l'âge adulte, de porter un enfant. Il n'y a aucune honte à en parler ni à en "
                 "ressentir les effets (légère fatigue, parfois de petites crampes)."),
        ("section", "3. L'appareil reproducteur masculin"),
        ("body", "L'appareil reproducteur masculin comprend : deux testicules (qui produisent les "
                 "spermatozoïdes), le canal déférent (qui conduit les spermatozoïdes) et le pénis."),
        ("image", ("scripts/t5/generated_images/u3_s2_b_app_reproducteur_masculin.jpg",
                   "Schéma en coupe légendé de l'appareil reproducteur masculin : testicules, canal déférent, pénis.")),
        ("section", "4. Les premières éjaculations"),
        ("body", "À partir de la puberté, les testicules produisent des spermatozoïdes. Leur évacuation, "
                 "appelée éjaculation, peut se produire pendant le sommeil : on parle alors de « pollution "
                 "nocturne ». C'est un phénomène naturel et normal, signe que le corps d'un garçon devient "
                 "capable, à l'âge adulte, de participer à la reproduction."),
        ("section", "5. Des comportements responsables"),
        ("body", "Pendant la puberté, il est important de : se laver chaque jour et après l'activité physique ; "
                 "changer régulièrement de sous-vêtements et, pendant les règles, de protection hygiénique ; "
                 "dormir suffisamment (8 à 10 heures par nuit) ; manger de façon équilibrée et variée ; "
                 "pratiquer une activité physique régulière ; et parler à un adulte de confiance (parent, "
                 "enseignant, personnel de santé) en cas de question ou d'inquiétude."),
        ("image", ("scripts/t5/generated_images/u3_s2_c_hygiene.jpg",
                   "Des comportements responsables pendant la puberté : hygiène, sommeil, alimentation, sport.")),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Cite les organes de l'appareil reproducteur féminin et leur rôle "
                                  "principal."),
        ("Exercice 2 (5 points)", " — Cite les organes de l'appareil reproducteur masculin et leur rôle "
                                  "principal."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Les règles sont le signe d'une maladie.\n"
                                  "2. L'éjaculation est un phénomène naturel lié à la maturation du corps du "
                                  "garçon.\n"
                                  "3. Il faut changer régulièrement de protection hygiénique pendant les "
                                  "règles.\n"
                                  "4. Il n'est jamais possible de parler de la puberté avec un adulte."),
        ("Exercice 4 (4 points)", " — Cite trois comportements responsables à adopter pendant la puberté, pour "
                                  "rester en bonne santé."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("ovaires (produisent les ovules), trompes (conduisent l'ovule), utérus (peut "
                                "accueillir un bébé), vagin (relie l'utérus à l'extérieur). (1,25 pt par organe "
                                "correct)", False)],
        [("Ex. 2 — ", False), ("testicules (produisent les spermatozoïdes), canal déférent (conduit les "
                                "spermatozoïdes), pénis. (1,66 pt par organe correct)", False)],
        [("Ex. 3 — ", False),
         ("1. Faux. Les règles sont un phénomène naturel et normal, pas une maladie. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Vrai. (1,5 pt)", False)],
        [("4. Faux. On peut et on doit pouvoir parler de la puberté à un adulte de confiance en cas de "
          "question. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Par exemple : se laver chaque jour, dormir suffisamment, manger équilibré, "
                                "faire du sport régulièrement. (4 pts — 1,33 pt par comportement correct, "
                                "3 attendus)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 3 - Revision Unite III
# ---------------------------------------------------------------------------
S3 = {
    "num": 3, "title": "Révision — Unité III : Reproduction humaine", "kind": "revision",
    "cover_image": ("scripts/t5/generated_images/u3_bilan_r1.jpg",
                     "Bilan de l'Unité III : transformations de la puberté et comportements responsables."),
    "theme": THEME, "ras_theme": "Transformations morphologiques, psychologiques et physiologiques de la "
                                  "puberté ; comportements responsables",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "traiter un sujet complet portant sur les séances 1 et 2, puis identifier ses points faibles.",
    "support": "sujet recopié au tableau ou polycopié, cahier de brouillon.",
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Sans ouvrir votre cahier : cite un comportement responsable à adopter pendant la "
                         "puberté.",
         "R.A. : se laver chaque jour, dormir suffisamment, manger équilibré.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Aujourd'hui vous traitez un sujet d'entraînement, comme un examen, mais sans "
                                  "note comptant pour la moyenne.",
         "Les élèves s'installent en condition d'examen.", "Consigne", "Tableau noir", ""),
        ("2. Présentation", "Quatre exercices, 20 points. Cahier de brouillon autorisé.",
         "Les élèves écoutent.", "Exposé", "Tableau noir", ""),
        ("3. Passation", "L'enseignant distribue ou recopie le sujet au tableau.",
         "Les élèves traitent le sujet.", "Travail individuel", "Sujet, cahier", ""),
        ("4. Correction collective", "Exercice par exercice, l'enseignant corrige au tableau avec la classe, "
                                       "dans un climat de respect et de bienveillance.",
         "Les élèves corrigent au stylo de couleur.", "Correction dirigée", "Tableau noir", ""),
        ("5. Synthèse", "Donc, les points faibles de la classe sont notés au tableau pour être repris.",
         "Les élèves notent leurs deux points faibles.", "Bilan collectif", "Cahier", ""),
        ("III. ÉVALUATION", "L'auto-évaluation tient lieu d'évaluation.",
         "Les élèves calculent leur score.", "Auto-évaluation", "Cahier", ""),
    ],
    "sujet_title": "Sujet d'entraînement — Unité III (Reproduction humaine) — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Vrai ou faux (2 points)\n"
         "1. La puberté se produit exactement au même âge pour tout le monde.\n"
         "2. Les règles sont un phénomène naturel et normal.\n"
         "B. Complète (2 points)\n"
         "3. Les ovaires produisent des ……………… .\n"
         "4. Les testicules produisent des ……………… ."),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "Un élève note les transformations suivantes chez lui : poussée de croissance, mue de la voix, "
         "apparition de poils sous les bras.\n"
         "1. Classe chacune en « commune » ou « spécifique au garçon ». (3 pts)\n"
         "2. Ces transformations sont-elles normales pour un garçon à la puberté ? (1 pt)\n"
         "3. Cite un comportement responsable qu'il pourrait adopter à cette période. (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Une fille commence ses règles à 11 ans, une de ses camarades à 14 ans.\n"
         "1. Cela signifie-t-il que l'une d'elles a un problème de santé ? Justifie. (2 pts)\n"
         "2. Cite deux gestes d'hygiène à adopter pendant les règles. (2 pts)\n"
         "3. Que peut faire une fille si elle a des questions sur ses règles ? (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Un camarade se moque d'un autre élève parce que sa voix n'a pas encore mué.\n"
         "Explique, en t'appuyant sur la leçon, pourquoi cette moquerie n'est pas justifiée."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. Faux (chacun a son propre rythme). 2. Vrai. (1 pt par item)", False)],
        [("B. 3. ovules. 4. spermatozoïdes. (1 pt par item)", False)],
        [("Renvoi : séances 1, 2.", True)],
        [("Exercice 2 (6 pts)", True)],
        [("1. Poussée de croissance — commune ; mue de la voix — spécifique au garçon ; poils sous les bras — "
          "commune. (3 pts)", False)],
        [("2. Oui, ce sont des transformations normales de la puberté. (1 pt)", False)],
        [("3. Par exemple : se laver chaque jour, dormir suffisamment, manger équilibré. (2 pts)", False)],
        [("Renvoi : séances 1, 2.", True)],
        [("Exercice 3 (6 pts)", True)],
        [("1. Non. Chaque fille vit la puberté à son propre rythme ; commencer plus tôt ou plus tard est "
          "normal. (2 pts)", False)],
        [("2. Par exemple : se laver régulièrement, changer de protection hygiénique plusieurs fois par jour. "
          "(2 pts)", False)],
        [("3. Elle peut en parler à un adulte de confiance : un parent, un enseignant ou un membre du personnel "
          "de santé. (2 pts)", False)],
        [("Renvoi : séance 2.", True)],
        [("Exercice 4 (4 pts)", True)],
        [("Chaque personne se développe à son propre rythme à la puberté ; ne pas avoir encore mué n'est ni un "
          "problème, ni un motif de moquerie. (4 pts)", False)],
        [("Renvoi : séance 1.", True)],
        [("Repères de score : 16-20 acquis · 11-15 à consolider · 6-10 fragile · 0-5 reprendre les séances 1 et 2.", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 4 - Examen Unite III
# ---------------------------------------------------------------------------
S4 = {
    "num": 4, "title": "Sujet d'examen ST T5 — Unité III : Reproduction humaine", "kind": "exam",
    "cover_image": ("scripts/t5/generated_images/u3_bilan_e1.jpg",
                     "Sujet d'examen, Unité III : Reproduction humaine."),
    "theme": THEME, "ras_theme": "Transformations morphologiques, psychologiques et physiologiques de la "
                                  "puberté ; comportements responsables",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "évaluer la maîtrise des notions des séances 1 et 2 — transformations de la puberté et "
                "comportements responsables.",
    "support": "sujet polycopié ou recopié au tableau, cahier de composition.",
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Rappel des consignes d'examen. Aucune question, aucun échange autorisé.",
         "Les élèves rangent cahiers et livres.", "Consigne", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "L'enseignant écrit au tableau le barème de l'épreuve (20 points, quatre "
                                  "exercices).",
         "Les élèves notent le barème.", "Consigne", "Tableau noir", ""),
        ("2. Présentation", "Lecture à voix haute de l'intégralité du sujet avant le début de l'épreuve.",
         "Les élèves suivent et signalent une incompréhension éventuelle.", "Lecture dirigée", "Sujet", ""),
        ("3. Passation", "Surveillance active et bienveillante. L'enseignant ne donne aucune indication sur les "
                          "réponses.",
         "Les élèves composent individuellement.", "Évaluation écrite", "Sujet, cahier", ""),
        ("4. Ramassage", "Ramassage des copies, vérification du nombre.",
         "Les élèves rendent leur copie.", "Organisation", "Copies", ""),
        ("5. Synthèse", "Donc, la correction sera rendue à la séance suivante.",
         "Les élèves écoutent.", "Bilan", "—", ""),
        ("III. ÉVALUATION", "(L'épreuve elle-même constitue l'évaluation.)",
         "", "Évaluation écrite", "Copies", ""),
    ],
    "sujet_title": "SUJET D'EXAMEN — Unité III : Reproduction humaine — Durée : ____________ — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Complète avec le mot exact (2 points)\n"
         "1. La période de transition entre l'enfance et l'âge adulte s'appelle la ……………… .\n"
         "2. L'organe féminin où pourrait se développer un bébé est ……………… .\n"
         "B. QCM — une seule réponse exacte (2 points)\n"
         "1. Les règles se produisent lorsque : A. l'ovule a été fécondé B. l'ovule n'a pas été fécondé "
         "C. il n'y a jamais d'ovule\n"
         "2. L'éjaculation pendant le sommeil s'appelle : A. une pollution nocturne B. une poussée de croissance "
         "C. une mue de la voix"),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "Observe la liste suivante : poussée de croissance, développement de la poitrine, mue de la voix, "
         "transpiration plus importante, élargissement du bassin.\n"
         "1. Classe chaque transformation en « commune », « fille » ou « garçon ». (3 pts)\n"
         "2. Cite l'organe qui produit les ovules et celui qui produit les spermatozoïdes. (2 pts)\n"
         "3. À quel âge se produit en général la puberté ? (1 pt)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Un élève a honte de parler de ses changements de voix et une élève a honte de parler de ses règles.\n"
         "1. Ces transformations sont-elles anormales ? Justifie. (2 pts)\n"
         "2. Cite deux comportements responsables à adopter pendant la puberté. (2 pts)\n"
         "3. À qui peuvent-ils s'adresser en cas de question ou d'inquiétude ? (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Ta jeune cousine va bientôt avoir ses premières règles et elle a peur.\n"
         "Explique-lui, en deux phrases, pourquoi c'est un phénomène naturel et normal, et rassure-la."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. puberté. 2. l'utérus. (1 pt par item)", False)],
        [("B. 1. B. 2. A. (1 pt par item)", False)],
        [("Exercice 2 (6 pts)", True)],
        [("1. Poussée de croissance — commune ; poitrine — fille ; mue de la voix — garçon ; transpiration — "
          "commune ; bassin — fille. (3 pts — 0,6 pt par item)", False)],
        [("2. Les ovaires produisent les ovules ; les testicules produisent les spermatozoïdes. (2 pts)", False)],
        [("3. En général entre 10 et 15 ans. (1 pt)", False)],
        [("Exercice 3 (6 pts)", True)],
        [("1. Non, ce sont des transformations naturelles et normales de la puberté, qui n'ont rien de honteux. "
          "(2 pts)", False)],
        [("2. Par exemple : se laver chaque jour, dormir suffisamment, manger équilibré, faire du sport. "
          "(2 pts)", False)],
        [("3. À un adulte de confiance : un parent, un enseignant ou un membre du personnel de santé. (2 pts)", False)],
        [("Exercice 4 (4 pts)", True)],
        [("Les règles sont un phénomène naturel qui montre que son corps grandit et se développe normalement. "
          "Beaucoup de filles ressentent un peu d'appréhension au début, mais avec une bonne hygiène, cela se "
          "vit sereinement. (4 pts)", False)],
    ],
}
