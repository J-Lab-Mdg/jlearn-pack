# -*- coding: utf-8 -*-
"""Content for UNITE X - Environnement (seances 1-5).
Grounded in PE T5 p.125-128 (RAS: decrire les types de dechets et les
mauvaises pratiques de gestion, leurs impacts sur l'environnement, et les
methodes de reduction des dechets - 4R+C).
"""

THEME = "Environnement"
RAS_THEME_1 = "Décrire les types de déchets, les mauvaises pratiques de gestion et leurs impacts sur l'environnement"
RAS_THEME_2 = "Appliquer les méthodes de réduction des déchets (4R+C)"
VALEURS = "civisme environnemental, sens de responsabilité, respect de la nature"

# ---------------------------------------------------------------------------
# SEANCE 1 - Les types de dechets et les mauvaises pratiques de gestion
# ---------------------------------------------------------------------------
S1 = {
    "num": 1, "title": "Les types de déchets et les mauvaises pratiques de gestion",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "distinguer les déchets dégradables des déchets non dégradables et identifier les mauvaises "
                "pratiques de gestion des déchets.",
    "support": "divers déchets (épluchures, bouteille plastique, boîte métallique, papier), tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u10_s1_a_dechets.jpg",
                     "Des déchets dégradables (épluchures, papier) et non dégradables (plastique, verre, métal)."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite un déchet que tu produis chez toi chaque jour.",
         "R.A. : des épluchures, un emballage, du papier.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Si on enterre des épluchures de légumes et un sac en plastique, lequel des "
                                  "deux se décomposera le plus vite dans le sol ?",
         "R.A. : les épluchures se décomposeront plus vite que le plastique.", "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les types de déchets et les mauvaises "
                             "pratiques de gestion ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez plusieurs déchets : épluchures, papier, bouteille plastique, boîte "
                            "métallique, morceau de verre. Classez-les selon qu'ils se décomposent vite ou "
                            "très lentement dans la nature.",
         "R.A. : épluchures et papier — se décomposent assez vite (dégradables) ; plastique, métal, verre — "
         "mettent très longtemps à se décomposer (non dégradables).", "Observation dirigée", "Déchets variés", ""),
        ("4. Analyse", "Que font parfois les gens de leurs déchets, sans toujours bien faire ?",
         "R.A. : les abandonner dans la nature, les jeter dans une rivière, les enterrer, ou les brûler à "
         "l'air libre.", "Discussion dirigée", "Documents", ""),
        ("5. Synthèse", "Donc, on distingue les déchets dégradables (ou biodégradables), qui se décomposent "
                         "naturellement assez vite (épluchures, papier, feuilles mortes), et les déchets non "
                         "dégradables, qui mettent très longtemps à se décomposer, parfois des centaines "
                         "d'années (plastique, verre, métal). Plusieurs pratiques de gestion des déchets sont "
                         "mauvaises pour l'environnement : l'abandon dans la nature, la dispersion dans l'eau ou "
                         "sur le sol, l'enterrement non contrôlé et l'incinération (le brûlage) à l'air libre.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Range ces déchets en « dégradable » ou « non dégradable » : épluchure de "
                            "banane, bouteille en plastique, feuille de papier, canette en métal.",
         "Ex. 1 : dégradables — épluchure de banane, feuille de papier ; non dégradables — bouteille en "
         "plastique, canette en métal.", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite deux mauvaises pratiques de gestion des déchets.",
         "Ex. 1 : l'abandon dans la nature, le brûlage à l'air libre (ou l'enterrement non contrôlé, la "
         "dispersion dans l'eau).", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Les déchets dégradables"),
        ("body", "Les déchets dégradables, aussi appelés biodégradables, sont des déchets d'origine naturelle "
                 "qui se décomposent assez rapidement grâce à l'action de micro-organismes : épluchures, restes "
                 "alimentaires, feuilles mortes, papier."),
        ("section", "2. Les déchets non dégradables"),
        ("body", "Les déchets non dégradables mettent un temps très long, parfois des centaines d'années, pour "
                 "se décomposer dans la nature, ou ne se décomposent presque jamais : le plastique, le verre, "
                 "le métal, certains emballages."),
        ("image", ("scripts/t5/generated_images/u10_s1_a_dechets.jpg",
                   "Des déchets dégradables (épluchures, papier) et non dégradables (plastique, verre, métal).")),
        ("section", "3. Les mauvaises pratiques de gestion des déchets"),
        ("sub", "a. L'abandon dans la nature"),
        ("body", "Jeter des déchets dans la rue, dans les champs ou dans la forêt pollue l'environnement et "
                 "peut blesser les animaux."),
        ("sub", "b. La dispersion dans l'eau"),
        ("body", "Jeter des déchets dans une rivière, un lac ou la mer pollue l'eau et met en danger les "
                 "poissons et les personnes qui utilisent cette eau."),
        ("sub", "c. L'enterrement non contrôlé"),
        ("body", "Enterrer des déchets sans précaution peut polluer le sol et les nappes d'eau souterraines, "
                 "surtout pour les déchets non dégradables ou dangereux."),
        ("sub", "d. L'incinération à l'air libre"),
        ("body", "Brûler les déchets à l'air libre produit une fumée qui pollue l'air et peut être dangereuse "
                 "pour la santé."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Classe ces déchets en « dégradable » ou « non dégradable » : 1. épluchure "
                                  "de légume · 2. sac en plastique · 3. feuille morte · 4. bouteille en verre · "
                                  "5. boîte de conserve en métal."),
        ("Exercice 2 (5 points)", " — Cite les quatre mauvaises pratiques de gestion des déchets étudiées dans "
                                  "la leçon."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Le plastique se décompose aussi vite que les épluchures de légumes.\n"
                                  "2. Brûler les déchets à l'air libre pollue l'air.\n"
                                  "3. Jeter des déchets dans une rivière n'a aucune conséquence.\n"
                                  "4. Les déchets biodégradables se décomposent naturellement."),
        ("Exercice 4 (4 points)", " — Explique pourquoi il est risqué d'enterrer des déchets en plastique près "
                                  "d'un puits utilisé pour l'eau potable."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. dégradable", True), (" · 2. ", False), ("non dégradable", True), (" · 3. ", False),
         ("dégradable", True), (" · 4. ", False), ("non dégradable", True), (" · 5. ", False),
         ("non dégradable", True)],
        [("Ex. 2 — ", False), ("l'abandon dans la nature, la dispersion dans l'eau, l'enterrement non contrôlé, "
                                "l'incinération à l'air libre. (1,25 pt par pratique correcte)", False)],
        [("Ex. 3 — ", False),
         ("1. Faux. Le plastique met beaucoup plus de temps à se décomposer. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Faux. Cela pollue l'eau et met en danger les poissons et les usagers de l'eau. (1,5 pt)", False)],
        [("4. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Les substances des déchets en plastique peuvent s'infiltrer dans le sol et "
                                "polluer l'eau souterraine utilisée par le puits, rendant l'eau dangereuse à "
                                "boire. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 2 - Les impacts des dechets sur l'environnement
# ---------------------------------------------------------------------------
S2 = {
    "num": 2, "title": "Les impacts des déchets sur l'environnement",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "décrire les impacts des mauvaises pratiques de gestion des déchets sur l'environnement et la "
                "santé.",
    "support": "images de pollution (décharge sauvage, rivière polluée, animal avec du plastique), tableau "
               "noir.",
    "cover_image": ("scripts/t5/generated_images/u10_s2_a_impacts.jpg",
                     "Les impacts des déchets mal gérés sur l'eau, le sol, l'air et les animaux."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite une mauvaise pratique de gestion des déchets.",
         "R.A. : l'abandon dans la nature, le brûlage à l'air libre.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Que peut-il arriver à un animal qui avale un morceau de plastique trouvé dans "
                                  "la nature ?",
         "R.A. : il peut tomber malade, s'étouffer ou mourir.", "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les impacts des déchets sur l'environnement "
                             "».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez des images d'une décharge sauvage, d'une rivière polluée par des déchets, "
                            "et d'un animal en contact avec du plastique.",
         "R.A. : les élèves décrivent ce qu'ils voient : mauvaises odeurs, eau sale, danger pour les animaux.",
         "Observation dirigée", "Images", ""),
        ("4. Analyse", "Quels sont les différents milieux touchés par les déchets mal gérés ?",
         "R.A. : l'eau, le sol, l'air et les êtres vivants (animaux et personnes).", "Discussion dirigée",
         "Documents", ""),
        ("5. Synthèse", "Donc, les déchets mal gérés ont plusieurs impacts sur l'environnement : ils polluent "
                         "l'eau (rivières, puits), le sol (perte de fertilité, substances toxiques) et l'air "
                         "(fumées du brûlage). Ils menacent aussi la santé des personnes (maladies liées à l'eau "
                         "ou à l'air pollués, prolifération de moustiques et de rats dans les décharges) et la "
                         "vie des animaux (ingestion de plastique, blessures).",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Cite un impact des déchets mal gérés sur la santé humaine.",
         "Ex. 1 : la prolifération de moustiques ou de rats, qui peuvent transmettre des maladies.",
         "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite trois milieux touchés par les déchets mal gérés.",
         "Ex. 1 : l'eau, le sol, l'air.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. L'impact sur l'eau"),
        ("body", "Les déchets jetés dans les rivières, les lacs ou près des puits polluent l'eau, la rendant "
                 "dangereuse à boire et nuisible pour les poissons et les autres animaux aquatiques."),
        ("section", "2. L'impact sur le sol"),
        ("body", "Les déchets enterrés ou abandonnés peuvent libérer des substances qui appauvrissent le sol ou "
                 "le rendent impropre à la culture."),
        ("image", ("scripts/t5/generated_images/u10_s2_a_impacts.jpg",
                   "Les impacts des déchets mal gérés sur l'eau, le sol, l'air et les animaux.")),
        ("section", "3. L'impact sur l'air"),
        ("body", "Le brûlage des déchets à l'air libre dégage des fumées toxiques, qui polluent l'air et "
                 "peuvent provoquer des maladies respiratoires."),
        ("section", "4. L'impact sur la santé et les animaux"),
        ("body", "Les décharges de déchets favorisent la prolifération de moustiques et de rats, qui peuvent "
                 "transmettre des maladies (voir l'unité sur les maladies infectieuses). Les animaux peuvent "
                 "aussi avaler ou s'empêtrer dans des déchets, notamment du plastique, ce qui peut les blesser "
                 "ou les tuer."),
        ("section", "5. Un cercle à briser"),
        ("body", "Comprendre ces impacts aide à comprendre pourquoi il est important de bien gérer ses déchets, "
                 "pour protéger sa propre santé, celle de sa communauté et celle de l'environnement."),
    ],
    "exercices": [
        ("Exercice 1 (6 points)", " — Pour chacun de ces milieux, cite un impact possible des déchets mal "
                                  "gérés : 1. l'eau · 2. le sol · 3. l'air."),
        ("Exercice 2 (4 points)", " — Cite deux conséquences possibles d'une décharge sauvage sur la santé des "
                                  "habitants d'un quartier."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Les déchets mal gérés n'ont aucun impact sur la santé.\n"
                                  "2. Le brûlage des déchets peut provoquer des maladies respiratoires.\n"
                                  "3. Les décharges peuvent favoriser la prolifération de moustiques et de "
                                  "rats.\n"
                                  "4. Les animaux ne sont jamais affectés par les déchets."),
        ("Exercice 4 (4 points)", " — Explique, en citant un exemple, pourquoi les déchets plastiques sont "
                                  "particulièrement dangereux pour les animaux."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. pollution de l'eau, dangereuse pour la santé et les poissons ; 2. perte de "
                                "fertilité ou pollution du sol ; 3. fumées toxiques lors du brûlage. (2 pts par "
                                "impact correct)", False)],
        [("Ex. 2 — ", False), ("par exemple : maladies transmises par les moustiques ou les rats, maladies "
                                "respiratoires liées aux fumées. (2 pts par conséquence correcte)", False)],
        [("Ex. 3 — ", False),
         ("1. Faux. Ils peuvent transmettre des maladies ou polluer l'environnement. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Vrai. (1,5 pt)", False)],
        [("4. Faux. Les animaux peuvent avaler ou s'empêtrer dans des déchets, notamment le plastique. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Par exemple, une tortue marine peut confondre un sac plastique avec une méduse "
                                "et l'avaler, ce qui peut l'étouffer ou bloquer sa digestion. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 3 - Les methodes de reduction des dechets (4R+C)
# ---------------------------------------------------------------------------
S3 = {
    "num": 3, "title": "Les méthodes de réduction des déchets (4R+C)",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "identifier et appliquer les méthodes de réduction des déchets : réduire, réutiliser, réparer, "
                "recycler, composter.",
    "support": "exemples d'objets réutilisés, un petit compost si possible, tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u10_s3_a_4rc.jpg",
                     "Les cinq méthodes de réduction des déchets : Réduire, Réutiliser, Réparer, Recycler, Composter."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite un impact des déchets mal gérés sur l'environnement.",
         "R.A. : la pollution de l'eau, du sol ou de l'air.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Que peux-tu faire d'une bouteille en plastique vide plutôt que de la jeter ?",
         "R.A. : la réutiliser comme pot de fleurs, la rapporter pour la recycler.", "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les méthodes de réduction des déchets "
                             "(4R+C) ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez des exemples : une bouteille transformée en pot de fleurs, un vêtement "
                            "réparé plutôt que jeté, des épluchures mises en tas de compost.",
         "R.A. : les élèves identifient les gestes qui évitent de produire ou de jeter des déchets.",
         "Observation dirigée", "Exemples, images", ""),
        ("4. Analyse", "Peut-on classer ces gestes en plusieurs catégories ?",
         "R.A. : oui : réduire la quantité de déchets, réutiliser un objet, le réparer, le recycler, ou "
         "composter les déchets organiques.", "Discussion dirigée", "Documents", ""),
        ("5. Synthèse", "Donc, pour limiter les déchets, on peut appliquer la méthode des « 4R+C » : Réduire "
                         "(produire moins de déchets, par exemple en évitant les emballages inutiles), "
                         "Réutiliser (employer à nouveau un objet avant de le jeter), Réparer (prolonger la vie "
                         "d'un objet abîmé plutôt que de le remplacer), Recycler (transformer un déchet en "
                         "nouvelle matière première) et Composter (transformer les déchets organiques en engrais "
                         "naturel pour les plantes).",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Dans quelle catégorie (4R+C) ranges-tu le fait de transformer des "
                            "épluchures en engrais pour le jardin ?",
         "Ex. 1 : composter.", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite les cinq méthodes de réduction des déchets (4R+C).",
         "Ex. 1 : réduire, réutiliser, réparer, recycler, composter.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Réduire"),
        ("body", "Réduire, c'est produire moins de déchets dès le départ : éviter les emballages inutiles, "
                 "acheter en plus grande quantité pour limiter les emballages, utiliser des sacs réutilisables "
                 "plutôt que des sacs plastiques jetables."),
        ("section", "2. Réutiliser"),
        ("body", "Réutiliser, c'est employer à nouveau un objet, pour le même usage ou un usage différent, "
                 "avant de le jeter. Exemple : transformer une bouteille en plastique en pot de fleurs, ou "
                 "utiliser un bocal en verre pour stocker des aliments."),
        ("image", ("scripts/t5/generated_images/u10_s3_a_4rc.jpg",
                   "Les cinq méthodes de réduction des déchets : Réduire, Réutiliser, Réparer, Recycler, Composter.")),
        ("section", "3. Réparer"),
        ("body", "Réparer, c'est remettre en état un objet abîmé plutôt que de le jeter et d'en racheter un "
                 "nouveau : recoudre un vêtement déchiré, réparer un outil cassé."),
        ("section", "4. Recycler"),
        ("body", "Recycler, c'est transformer un déchet (papier, verre, métal, certains plastiques) en nouvelle "
                 "matière première pour fabriquer de nouveaux objets."),
        ("section", "5. Composter"),
        ("body", "Composter, c'est laisser se décomposer les déchets organiques (épluchures, restes "
                 "alimentaires, feuilles mortes) pour obtenir un engrais naturel, utile pour enrichir le sol du "
                 "jardin ou du champ."),
        ("section", "6. L'ordre de priorité"),
        ("body", "Le meilleur geste est d'abord de réduire ses déchets, puis de réutiliser et réparer ce qui "
                 "peut l'être, puis de recycler et composter ce qui reste, plutôt que de tout jeter."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Définis en une phrase chacune des cinq méthodes « 4R+C » : 1. réduire · "
                                  "2. réutiliser · 3. réparer · 4. recycler · 5. composter."),
        ("Exercice 2 (5 points)", " — Pour chaque action, indique à quelle méthode (4R+C) elle correspond : "
                                  "1. recoudre un vêtement déchiré · 2. utiliser un sac en tissu réutilisable au "
                                  "marché · 3. transformer des épluchures en engrais · 4. apporter des "
                                  "bouteilles en verre à un point de collecte pour qu'elles soient refondues."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Réduire les déchets signifie en produire moins dès le départ.\n"
                                  "2. Il vaut mieux jeter un objet cassé que de le réparer.\n"
                                  "3. Le compost est obtenu à partir de déchets organiques.\n"
                                  "4. Recycler et réduire sont exactement la même chose."),
        ("Exercice 4 (4 points)", " — Propose deux gestes « 4R+C » que ta famille pourrait appliquer à la "
                                  "maison."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. produire moins de déchets ; 2. employer à nouveau un objet ; 3. remettre en "
                                "état un objet abîmé ; 4. transformer un déchet en nouvelle matière première ; "
                                "5. transformer les déchets organiques en engrais. (1 pt par définition "
                                "correcte)", False)],
        [("Ex. 2 — ", False), ("1. réparer", True), (" · 2. ", False), ("réduire", True), (" · 3. ", False),
         ("composter", True), (" · 4. ", False), ("recycler", True)],
        [("Ex. 3 — ", False),
         ("1. Vrai. (1,5 pt)", False)],
        [("2. Faux. Il vaut mieux réparer un objet quand c'est possible. (1,5 pt)", False)],
        [("3. Vrai. (1,5 pt)", False)],
        [("4. Faux. Réduire signifie produire moins de déchets ; recycler signifie transformer un déchet déjà "
          "produit. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Réponse libre : par exemple, utiliser des sacs réutilisables au marché, et "
                                "composter les épluchures du jardin. (4 pts — 2 pts par geste cohérent)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 4 - Revision Unite X
# ---------------------------------------------------------------------------
S4 = {
    "num": 4, "title": "Révision — Unité X : Environnement", "kind": "revision",
    "cover_image": ("scripts/t5/generated_images/u10_bilan_r1.jpg",
                     "Bilan de l'Unité X : types de déchets, impacts sur l'environnement, méthodes 4R+C."),
    "theme": THEME, "ras_theme": "Types de déchets, mauvaises pratiques de gestion, impacts sur "
                                  "l'environnement, méthodes de réduction des déchets (4R+C)",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "traiter un sujet complet portant sur les séances 1 à 3, puis identifier ses points faibles.",
    "support": "sujet recopié au tableau ou polycopié, cahier de brouillon.",
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Sans ouvrir votre cahier : cite une des cinq méthodes 4R+C.",
         "R.A. : réduire, réutiliser, réparer, recycler ou composter.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Aujourd'hui vous traitez un sujet d'entraînement, comme un examen, mais sans "
                                  "note comptant pour la moyenne.",
         "Les élèves s'installent en condition d'examen.", "Consigne", "Tableau noir", ""),
        ("2. Présentation", "Quatre exercices, 20 points. Cahier de brouillon autorisé.",
         "Les élèves écoutent.", "Exposé", "Tableau noir", ""),
        ("3. Passation", "L'enseignant distribue ou recopie le sujet au tableau.",
         "Les élèves traitent le sujet.", "Travail individuel", "Sujet, cahier", ""),
        ("4. Correction collective", "Exercice par exercice, l'enseignant corrige au tableau avec la classe.",
         "Les élèves corrigent au stylo de couleur.", "Correction dirigée", "Tableau noir", ""),
        ("5. Synthèse", "Donc, les points faibles de la classe sont notés au tableau pour être repris.",
         "Les élèves notent leurs deux points faibles.", "Bilan collectif", "Cahier", ""),
        ("III. ÉVALUATION", "L'auto-évaluation tient lieu d'évaluation.",
         "Les élèves calculent leur score.", "Auto-évaluation", "Cahier", ""),
    ],
    "sujet_title": "Sujet d'entraînement — Unité X (Environnement) — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Vrai ou faux (2 points)\n"
         "1. Le plastique est un déchet dégradable.\n"
         "2. Brûler les déchets à l'air libre pollue l'air.\n"
         "B. Complète (2 points)\n"
         "3. Transformer les déchets organiques en engrais s'appelle …………… .\n"
         "4. Employer à nouveau un objet avant de le jeter s'appelle …………… ."),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "Un village jette ses déchets dans la rivière voisine.\n"
         "1. Cite deux conséquences possibles de cette pratique. (2 pts)\n"
         "2. Quelle méthode 4R+C pourrait réduire la quantité de déchets plastiques jetés dans la rivière ? "
         "(2 pts)\n"
         "3. Propose une solution concrète pour les déchets organiques du village. (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Une école décide de lancer un projet « zéro déchet » avec les élèves.\n"
         "1. Cite deux actions concrètes que les élèves pourraient mettre en place. (2 pts)\n"
         "2. À quelle(s) méthode(s) 4R+C ces actions correspondent-elles ? (2 pts)\n"
         "3. Pourquoi est-il utile d'impliquer les élèves dans ce type de projet ? (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Un camarade dit : « Jeter mes déchets dans la nature n'a pas d'importance, la nature s'en occupe "
         "toute seule. »\n"
         "Réponds-lui en expliquant pourquoi ce n'est pas vrai pour tous les types de déchets."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. Faux (il est non dégradable). 2. Vrai. (1 pt par item)", False)],
        [("B. 3. composter. 4. réutiliser. (1 pt par item)", False)],
        [("Renvoi : séances 1, 2, 3.", True)],
        [("Exercice 2 (6 pts)", True)],
        [("1. Pollution de l'eau, danger pour les poissons et les usagers de l'eau. (2 pts)", False)],
        [("2. Réduire (moins d'emballages plastiques) ou recycler. (2 pts)", False)],
        [("3. Mettre en place un compost collectif pour les déchets organiques. (2 pts)", False)],
        [("Renvoi : séances 1, 2, 3.", True)],
        [("Exercice 3 (6 pts)", True)],
        [("1. Par exemple : composter les déchets de la cantine, utiliser des gourdes réutilisables. (2 pts)", False)],
        [("2. Composter et réduire/réutiliser. (2 pts)", False)],
        [("3. Pour les sensibiliser tôt à la protection de l'environnement et créer de bonnes habitudes durables. "
          "(2 pts)", False)],
        [("Renvoi : séance 3.", True)],
        [("Exercice 4 (4 pts)", True)],
        [("Les déchets dégradables se décomposent assez vite, mais les déchets non dégradables comme le "
          "plastique mettent des centaines d'années à disparaître et polluent entre-temps. (4 pts)", False)],
        [("Renvoi : séance 1.", True)],
        [("Repères de score : 16-20 acquis · 11-15 à consolider · 6-10 fragile · 0-5 reprendre les séances 1 à 3.", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 5 - Examen Unite X
# ---------------------------------------------------------------------------
S5 = {
    "num": 5, "title": "Sujet d'examen ST T5 — Unité X : Environnement", "kind": "exam",
    "cover_image": ("scripts/t5/generated_images/u10_bilan_e1.jpg",
                     "Sujet d'examen, Unité X : Environnement."),
    "theme": THEME, "ras_theme": "Types de déchets, mauvaises pratiques de gestion, impacts sur "
                                  "l'environnement, méthodes de réduction des déchets (4R+C)",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "évaluer la maîtrise des notions des séances 1 à 3 — types de déchets, impacts, méthodes "
                "4R+C.",
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
        ("3. Passation", "Surveillance active. L'enseignant ne donne aucune indication sur les réponses.",
         "Les élèves composent individuellement.", "Évaluation écrite", "Sujet, cahier", ""),
        ("4. Ramassage", "Ramassage des copies, vérification du nombre.",
         "Les élèves rendent leur copie.", "Organisation", "Copies", ""),
        ("5. Synthèse", "Donc, la correction sera rendue à la séance suivante.",
         "Les élèves écoutent.", "Bilan", "—", ""),
        ("III. ÉVALUATION", "(L'épreuve elle-même constitue l'évaluation.)",
         "", "Évaluation écrite", "Copies", ""),
    ],
    "sujet_title": "SUJET D'EXAMEN — Unité X : Environnement — Durée : ____________ — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Complète avec le mot exact (2 points)\n"
         "1. Un déchet qui se décompose rapidement dans la nature est dit ……………… .\n"
         "2. Remettre en état un objet abîmé plutôt que de le jeter s'appelle ……………… .\n"
         "B. QCM — une seule réponse exacte (2 points)\n"
         "1. Le plastique est un déchet : A. dégradable B. non dégradable C. comestible\n"
         "2. Composter sert surtout à : A. polluer le sol B. fabriquer un engrais naturel C. brûler les "
         "déchets"),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "Un quartier produit chaque jour des déchets de cuisine, des bouteilles en plastique et des "
         "vêtements usés.\n"
         "1. Quelle méthode 4R+C convient le mieux aux déchets de cuisine ? (2 pts)\n"
         "2. Quelle méthode 4R+C convient le mieux à un vêtement légèrement déchiré ? (2 pts)\n"
         "3. Cite une méthode pour réduire la quantité de bouteilles en plastique utilisées. (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Une décharge sauvage s'est formée près d'un quartier, avec de mauvaises odeurs et des rats.\n"
         "1. Cite un risque pour la santé des habitants. (2 pts)\n"
         "2. Cite une mauvaise pratique de gestion des déchets à l'origine de cette situation. (2 pts)\n"
         "3. Propose une solution pour améliorer la situation. (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Ton petit frère jette systématiquement tous ses déchets ensemble, sans les trier.\n"
         "Explique-lui, en deux phrases, pourquoi il serait utile de séparer les déchets organiques des autres "
         "déchets."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. dégradable (biodégradable). 2. réparer. (1 pt par item)", False)],
        [("B. 1. B. 2. B. (1 pt par item)", False)],
        [("Exercice 2 (6 pts)", True)],
        [("1. Composter. (2 pts)", False)],
        [("2. Réparer. (2 pts)", False)],
        [("3. Utiliser des gourdes ou des récipients réutilisables plutôt que d'acheter des bouteilles "
          "jetables. (2 pts)", False)],
        [("Exercice 3 (6 pts)", True)],
        [("1. Maladies transmises par les rats ou les moustiques. (2 pts)", False)],
        [("2. L'abandon des déchets dans la nature (décharge sauvage). (2 pts)", False)],
        [("3. Par exemple : organiser une collecte régulière des déchets et un tri (compost, recyclage). "
          "(2 pts)", False)],
        [("Exercice 4 (4 pts)", True)],
        [("Les déchets organiques peuvent être compostés pour fabriquer un engrais utile, alors que les mélanger "
          "aux autres déchets empêche de les valoriser et complique leur gestion. (4 pts)", False)],
    ],
}
