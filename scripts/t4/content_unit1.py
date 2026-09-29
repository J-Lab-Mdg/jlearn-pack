# -*- coding: utf-8 -*-
"""Content for UNITE I - Alimentation de l'homme (seances 1-7).
Grounded in PE T4 p.81-83 (RAS: Elaborer un menu varie / Appliquer des
mesures d'hygiene des aliments crus et cuits / Analyser les informations
sur un emballage alimentaire).
"""

THEME = "Alimentation de l'homme"
RAS_THEME_1 = "Élaborer un menu varié"
RAS_THEME_2 = "Appliquer des mesures d'hygiène des aliments crus et cuits"
RAS_THEME_3 = "Analyser les informations sur un emballage alimentaire"
VALEURS = "respect de la vie, responsabilité"

# ---------------------------------------------------------------------------
# SEANCE 1 - Classification des aliments : couleur et goût
# ---------------------------------------------------------------------------
S1 = {
    "num": 1, "title": "Classification des aliments : couleur et goût",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "classer des aliments selon leur couleur et identifier leur goût.",
    "support": "échantillons ou photos d'aliments locaux (riz, brèdes, mangue, sel, sucre, citron), tableau noir.",
    "cover_image": ("scripts/t4/generated_images/u1_s1_a_marche.jpg",
                     "Un étal de marché malgache : les aliments s'y distinguent déjà par leur couleur."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Citez trois aliments que vous avez mangés ce matin.",
         "R.A. : Du riz, du lait, une banane.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Voici deux aliments : une brède verte et un sel blanc. Sont-ils identiques ?",
         "R.A. : Non, ils sont différents (couleur, goût).", "Questionnement oral", "Échantillons d'aliments", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Classification des aliments : couleur et goût ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez ces aliments : riz, brèdes, mangue, sel, sucre, citron. Notez leur couleur.",
         "R.A. : blanc, vert, orange, blanc, blanc, jaune-vert.", "Observation dirigée", "Échantillons ou photos d'aliments", ""),
        ("4. Analyse", "Goûtez (ou rappelez le goût connu) du sucre, du sel, du citron, du café amer. Que remarquez-vous ?",
         "R.A. : le sucre est sucré, le sel est salé, le citron est acide, le café est amer.", "Étude de cas, dégustation dirigée", "Échantillons d'aliments", ""),
        ("5. Synthèse", "Donc, on peut classer les aliments selon leur couleur (blanc, vert, rouge...) et selon leur goût : sucré, salé, acide, amer, et umami (le goût d'un bouillon).",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Classe ces aliments par couleur puis par goût : riz, brède, mangue mûre, jus de citron.",
         "Ex. 1 : couleur — blanc/vert/orange/jaune ; goût — neutre/neutre/sucré/acide.", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Complète : le sel est … ; le sucre est … ; le citron est … .",
         "Ex. 1 : salé ; sucré ; acide.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. La couleur des aliments"),
        ("body", "Chaque aliment a une couleur qui permet de le reconnaître facilement : le riz est blanc, "
                 "les brèdes (anana) sont vertes, la mangue mûre est orange, la tomate est rouge. La couleur "
                 "vient de pigments naturels contenus dans l'aliment."),
        ("body", "Observer la couleur d'un aliment est la première étape pour l'identifier et le classer, "
                 "avant même de le goûter."),
        ("section", "2. Le goût des aliments"),
        ("body", "Le goût est ce que l'on ressent sur la langue lorsqu'on mange un aliment. On distingue cinq "
                 "goûts principaux :"),
        ("sub", "a. Le sucré"),
        ("body", "Sucre, miel, fruits mûrs (banane, mangue, letchi)."),
        ("sub", "b. Le salé"),
        ("body", "Sel de cuisine, poisson séché, fromage."),
        ("sub", "c. L'acide"),
        ("body", "Citron, tamarin (voamadilo), yaourt."),
        ("sub", "d. L'amer"),
        ("body", "Café, certaines feuilles médicinales, le margose (paoma be)."),
        ("sub", "e. L'umami"),
        ("body", "C'est le goût d'un bouillon de viande ou de poisson, un goût plaisant proche du sucré. On le "
                 "retrouve dans le romazava ou le ravitoto au porc."),
        ("image", ("scripts/t4/generated_images/u1_s1_b_gouts.jpg",
                   "Les cinq goûts principaux : sucré, salé, acide, amer, umami.")),
        ("section", "3. À quoi sert cette classification ?"),
        ("body", "Classer les aliments par couleur et par goût aide à décrire précisément un repas, à repérer la "
                 "variété d'un menu, et prépare l'étude des rôles et de l'origine des aliments dans la prochaine "
                 "leçon."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Range chaque aliment dans la bonne couleur : 1. le riz · 2. la brède · "
                                  "3. la mangue mûre · 4. la tomate · 5. le lait.\nCouleurs disponibles : blanc, "
                                  "vert, orange, rouge (le blanc est utilisé deux fois)."),
        ("Exercice 2 (5 points)", " — Associe chaque aliment à son goût principal : 1. le sucre · 2. le sel de "
                                  "cuisine · 3. le citron · 4. le café · 5. le romazava (bouillon de viande)."
                                  "\nGoûts disponibles : sucré, salé, acide, amer, umami."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. La couleur d'un aliment ne dépend que de sa cuisson.\n"
                                  "2. Le goût umami ressemble au goût d'un bouillon.\n"
                                  "3. Tous les aliments verts ont un goût amer.\n"
                                  "4. Le sel de cuisine a un goût salé."),
        ("Exercice 4 (4 points)", " — Choisis la bonne réponse :\n"
                                  "1. Le goût du tamarin (voamadilo) est : A. sucré B. acide C. amer\n"
                                  "2. L'umami est un goût proche : A. du sucré B. du salé C. de l'acide\n"
                                  "3. La couleur d'une mangue mûre est le plus souvent : A. verte B. orange C. bleue\n"
                                  "4. On reconnaît un aliment par sa couleur : A. avant de le goûter B. jamais C. seulement après"),
    ],
    "total": 20,
    "corrige": [
        ("Ex. 1 — ", False), ("1. blanc", True), (" · 2. ", False), ("vert", True), (" · 3. ", False),
        ("orange", True), (" · 4. ", False), ("rouge", True), (" · 5. ", False), ("blanc", True),
    ],
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. blanc", True), (" · 2. ", False), ("vert", True), (" · 3. ", False),
         ("orange", True), (" · 4. ", False), ("rouge", True), (" · 5. ", False), ("blanc", True)],
        [("Ex. 2 — ", False), ("1. sucré", True), (" · 2. ", False), ("salé", True), (" · 3. ", False),
         ("acide", True), (" · 4. ", False), ("amer", True), (" · 5. ", False), ("umami", True)],
        [("Ex. 3 — ", False),
         ("1. Faux. La couleur d'un aliment dépend surtout de sa nature (pigments), pas seulement de la cuisson "
          "— même si certaines cuissons peuvent la modifier légèrement. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Faux. Les brèdes sont vertes mais leur goût n'est pas amer ; certaines plantes amères ne sont "
          "pas vertes. (1,5 pt)", False)],
        [("4. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("1. B", True), (" · 2. ", False), ("A", True), (" · 3. ", False),
         ("B", True), (" · 4. ", False), ("A", True)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 2 - Classification des aliments : origine et rôles nutritionnels
# ---------------------------------------------------------------------------
S2 = {
    "num": 2, "title": "Classification des aliments : origine et rôles nutritionnels",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "classer les aliments selon leur origine et expliquer les rôles des différents types d'aliments.",
    "support": "planche « la fleur alimentaire » ou pyramide alimentaire, photos d'aliments, tableau noir.",
    "cover_image": ("scripts/t4/generated_images/u1_s2_a_repas.jpg",
                     "Un repas familial malgache réunit souvent des aliments de plusieurs origines."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Quel goût a le citron ? Et le sucre ?",
         "R.A. : Le citron est acide, le sucre est sucré.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Le riz vient d'une plante, le lait vient d'un zébu, le sel vient de la terre ou de la mer. Sont-ils de la même origine ?",
         "R.A. : Non — origine végétale, animale, minérale.", "Questionnement oral", "Photos d'aliments", ""),
        ("2. Présentation", "Aujourd'hui : « L'origine des aliments et leurs rôles pour le corps ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez cette pyramide alimentaire : quels aliments sont en bas, au milieu, en haut ?",
         "R.A. : céréales en bas, légumes/fruits/viandes au milieu, sucre/huile au sommet.", "Observation dirigée", "Planche « la fleur alimentaire »", ""),
        ("4. Analyse", "Pourquoi mange-t-on du poisson ou des haricots quand on grandit ? Pourquoi mange-t-on des brèdes ?",
         "R.A. : pour construire le corps ; pour se protéger des maladies.", "Étude de document, travail de groupe", "Pyramide alimentaire", ""),
        ("5. Synthèse", "Donc, les aliments ont trois origines (végétale, animale, minérale) et trois rôles : "
                        "constructeur, protecteur, énergétique.",
         "Les élèves écoutent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Range ces aliments par origine : riz, lait, sel, poisson, mangue, eau minérale.",
         "Ex. 1 : végétale — riz, mangue ; animale — lait, poisson ; minérale — sel, eau minérale.", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite un aliment constructeur et un aliment énergétique.",
         "R.A. : constructeur — poisson ; énergétique — riz.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. L'origine des aliments"),
        ("body", "Chaque aliment provient d'une source précise. On distingue trois origines :"),
        ("sub", "a. Origine végétale"),
        ("body", "Riz, manioc, brèdes, mangue, haricots : ces aliments proviennent de plantes cultivées."),
        ("sub", "b. Origine animale"),
        ("body", "Lait, viande de zébu, poisson, œufs : ces aliments proviennent d'animaux."),
        ("sub", "c. Origine minérale"),
        ("body", "Sel de cuisine, eau : ces aliments proviennent du sol, de la mer ou des roches, pas d'un être "
                 "vivant."),
        ("section", "2. Les rôles des aliments"),
        ("body", "Au-delà de leur origine, les aliments rendent des services différents au corps. On distingue "
                 "trois rôles principaux :"),
        ("sub", "a. Les aliments énergétiques"),
        ("body", "Riz, manioc, patate douce, huile, sucre : ils donnent la force nécessaire pour bouger, "
                 "travailler et se réchauffer."),
        ("sub", "b. Les aliments constructeurs"),
        ("body", "Poisson, viande, œufs, haricots, lait : ils apportent les matériaux qui construisent le corps "
                 "pendant la croissance et réparent ce qui s'use."),
        ("sub", "c. Les aliments protecteurs"),
        ("body", "Brèdes, légumes verts, fruits (mangue, orange, papaye) : ils défendent l'organisme contre les "
                 "maladies et assurent son bon fonctionnement."),
        ("image", ("scripts/t4/generated_images/u1_s2_b_roles.jpg",
                   "Les trois rôles des aliments : énergétique, constructeur, protecteur.")),
        ("section", "3. Un repas complet associe les trois rôles"),
        ("body", "Un repas malgache simple — riz, haricots, brèdes, un peu d'huile — associe déjà les trois "
                 "rôles : énergétique (riz, huile), constructeur (haricots) et protecteur (brèdes). C'est cette "
                 "association qui permet de construire un menu varié, objet de la prochaine leçon."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Classe ces aliments selon leur origine (végétale, animale ou minérale) : "
                                  "1. le zébu (viande) · 2. le sel · 3. le manioc · 4. l'œuf · 5. l'eau."),
        ("Exercice 2 (5 points)", " — Associe chaque aliment à son rôle principal : 1. le riz · 2. le poisson · "
                                  "3. la brède · 4. l'huile · 5. le haricot.\nRôles disponibles : énergétique, "
                                  "constructeur, protecteur (à réutiliser si nécessaire)."),
        ("Exercice 3 (6 points)", " — Voici le repas de Fara : riz, brèdes, un peu d'huile. 1. Quel rôle manque "
                                  "dans ce repas ? 2. Propose un aliment courant à Madagascar pour compléter ce "
                                  "repas, et précise son rôle."),
        ("Exercice 4 (4 points)", " — Choisis la bonne réponse :\n"
                                  "1. Le lait est d'origine : A. végétale B. animale C. minérale\n"
                                  "2. Les brèdes sont des aliments : A. énergétiques B. constructeurs C. protecteurs\n"
                                  "3. L'aliment le plus riche en énergie parmi ceux-ci est : A. la brède B. le riz C. l'eau\n"
                                  "4. Le sel est d'origine : A. végétale B. animale C. minérale"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. animale", True), (" · 2. ", False), ("minérale", True), (" · 3. ", False),
         ("végétale", True), (" · 4. ", False), ("animale", True), (" · 5. ", False), ("minérale", True)],
        [("Ex. 2 — ", False), ("1. énergétique", True), (" · 2. ", False), ("constructeur", True), (" · 3. ", False),
         ("protecteur", True), (" · 4. ", False), ("énergétique", True), (" · 5. ", False), ("constructeur", True)],
        [("Ex. 3 — 1. Il manque le rôle constructeur (le repas n'a pas d'aliment qui construit le corps). (3 pts)", False)],
        [("2. On peut ajouter du poisson, des haricots ou des œufs, qui sont des aliments constructeurs. "
          "(3 pts — 1 pt pour l'aliment, 2 pts pour la justification du rôle)", False)],
        [("Ex. 4 — ", False), ("1. B", True), (" · 2. ", False), ("C", True), (" · 3. ", False),
         ("B", True), (" · 4. ", False), ("C", True)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 3 - Elaborer un menu varie
# ---------------------------------------------------------------------------
S3 = {
    "num": 3, "title": "Élaborer un menu varié",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "déterminer les critères d'un menu varié et élaborer un menu pour une journée.",
    "support": "planche « la fleur alimentaire », pyramide alimentaire, fiches menu vierges, crayons.",
    "cover_image": ("scripts/t4/generated_images/u1_s3_a_petitdej.jpg",
                     "Un petit déjeuner malgache déjà varié : vary sosoa, lait, banane."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite un aliment énergétique, un constructeur et un protecteur.",
         "R.A. : riz (énergétique), poisson (constructeur), brède (protecteur).", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Voici deux repas : (A) riz seul ; (B) riz, haricots, brèdes, banane. Lequel est le mieux équilibré ?",
         "R.A. : le repas B, car il contient plusieurs groupes d'aliments.", "Questionnement oral", "Photos de deux repas", ""),
        ("2. Présentation", "Aujourd'hui : « Élaborer un menu varié ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez la pyramide : que remarquez-vous sur les quantités de chaque groupe ?",
         "R.A. : les céréales sont mangées en grande quantité, le sucre et l'huile en petite quantité.", "Observation dirigée", "Pyramide alimentaire", ""),
        ("4. Analyse", "Un repas composé uniquement de riz et de sucre respecte-t-il les trois critères d'un bon menu ?",
         "R.A. : Non, il manque la diversité et la qualité (pas de constructeur ni de protecteur).", "Étude de cas, travail de groupe", "Fiches menu vierges", ""),
        ("5. Synthèse", "Donc, un menu varié respecte trois critères : la quantité (adaptée aux besoins), la "
                        "qualité (les trois rôles présents) et la diversité (des aliments différents à chaque "
                        "repas).",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — En groupe, élabore un menu du petit déjeuner respectant les trois critères.",
         "R.A. (exemple) : thé au lait, pain ou vary sosoa, banane.", "Travail de groupe", "Fiches menu vierges", ""),
        ("III. ÉVALUATION", "Ex. 1 — Élabore un menu complet pour une journée (petit déjeuner, déjeuner, dîner).",
         "R.A. : menu varié avec les trois groupes présents à chaque repas.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Pourquoi un menu varié est-il important ?"),
        ("body", "Un repas composé d'un seul groupe d'aliments ne suffit pas à couvrir tous les besoins du "
                 "corps. Manger uniquement du riz apporte de l'énergie mais ne construit pas le corps et ne le "
                 "protège pas des maladies. Un menu varié est indispensable pour maintenir une bonne santé, "
                 "bien grandir et avoir de l'énergie tout au long de la journée."),
        ("section", "2. Les trois critères d'un menu varié"),
        ("sub", "a. La quantité"),
        ("body", "La quantité de nourriture doit être adaptée à l'âge, à l'activité et à l'état de santé de la "
                 "personne. Un enfant qui joue beaucoup ou un paysan qui travaille aux champs a besoin de plus "
                 "de nourriture qu'une personne peu active."),
        ("sub", "b. La qualité"),
        ("body", "Chaque repas devrait, autant que possible, réunir les trois rôles d'aliments : énergétique, "
                 "constructeur et protecteur."),
        ("sub", "c. La diversité"),
        ("body", "Il faut varier les aliments d'un repas à l'autre et d'un jour à l'autre, pour éviter la "
                 "monotonie et profiter des qualités différentes de chaque aliment."),
        ("section", "3. Exemple de menu varié pour une journée"),
        ("body", "Petit déjeuner : vary sosoa (bouillie de riz), lait, banane.\n"
                 "Déjeuner : riz, haricots rouges en sauce, brèdes sautées, un peu d'huile.\n"
                 "Dîner : riz, poisson grillé, légumes verts, eau."),
        ("body", "Ce menu associe, à chaque repas, un aliment énergétique (riz), un aliment constructeur (lait, "
                 "haricots, poisson) et un aliment protecteur (banane, brèdes, légumes)."),
        ("image", ("scripts/t4/generated_images/u1_s3_b_assiette.jpg",
                   "Une assiette équilibrée : énergétique, constructeur, protecteur.")),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Voici un menu : riz, sucre, thé sucré. 1. Ce menu respecte-t-il le critère "
                                  "de qualité ? Justifie. 2. Propose un aliment à ajouter pour l'améliorer."),
        ("Exercice 2 (5 points)", " — Vrai ou faux, et corrige les affirmations fausses :\n"
                                  "1. Un menu varié doit contenir le même aliment à chaque repas.\n"
                                  "2. La quantité de nourriture doit être adaptée à l'activité de la personne.\n"
                                  "3. Un bon menu associe des aliments énergétiques, constructeurs et protecteurs.\n"
                                  "4. Un paysan qui travaille aux champs a besoin de moins d'énergie qu'un élève assis en classe."),
        ("Exercice 3 (6 points)", " — Élabore un menu varié pour le déjeuner d'un élève de T4, en utilisant des "
                                  "aliments courants à Madagascar. Indique le rôle de chaque aliment choisi."),
        ("Exercice 4 (4 points)", " — Choisis la bonne réponse :\n"
                                  "1. Les trois critères d'un menu varié sont : A. couleur, goût, origine "
                                  "B. quantité, qualité, diversité C. prix, saison, transport\n"
                                  "2. Un repas composé uniquement de riz manque surtout : A. d'énergie "
                                  "B. de constructeurs et de protecteurs C. de sel\n"
                                  "3. La diversité alimentaire consiste à : A. manger toujours la même chose "
                                  "B. varier les aliments C. manger le moins possible\n"
                                  "4. Le critère de quantité dépend surtout : A. du prix des aliments "
                                  "B. de l'âge et de l'activité de la personne C. de la couleur des aliments"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — 1. Non. Ce menu contient seulement des aliments énergétiques (riz, sucre) ; il manque des "
          "aliments constructeurs et protecteurs. (3 pts)", False)],
        [("2. On peut ajouter des brèdes (protecteur) et des haricots ou un œuf (constructeur). (2 pts)", False)],
        [("Ex. 2 — ", False), ("1. Faux", True),
         (" — un menu varié doit changer d'un repas à l'autre. (1,25 pt)", False)],
        [("2. Vrai. (1,25 pt)", False)],
        [("3. Vrai. (1,25 pt)", False)],
        [("4. Faux — il a besoin de plus d'énergie, car son activité physique est plus intense. (1,25 pt)", False)],
        [("Ex. 3 — Exemple attendu : riz (énergétique), poisson ou haricots (constructeur), brèdes ou légumes "
          "(protecteur), avec un peu d'huile. (2 pts par aliment correctement justifié, dans la limite de 6 pts)", False)],
        [("Ex. 4 — ", False), ("1. B", True), (" · 2. ", False), ("B", True), (" · 3. ", False),
         ("B", True), (" · 4. ", False), ("B", True)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 4 - Hygiene des aliments crus et cuits
# ---------------------------------------------------------------------------
S4 = {
    "num": 4, "title": "Hygiène des aliments crus et cuits",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "appliquer des mesures d'hygiène des aliments crus et cuits, avant, pendant et après la cuisson.",
    "support": "emballages d'aliments propres, exemple d'aliment mal conservé (image), tableau noir.",
    "cover_image": ("scripts/t4/generated_images/u1_s4_a_cuisine.jpg",
                     "Se laver les mains avant de cuisiner : le premier geste d'hygiène."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Quels sont les trois critères d'un menu varié ?",
         "R.A. : quantité, qualité, diversité.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Un enfant mange un aliment laissé plusieurs heures au soleil et tombe malade. Pourquoi ?",
         "R.A. : l'aliment s'est peut-être abîmé, il n'était plus propre à la consommation.", "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui : « L'hygiène des aliments crus et cuits ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez ces deux images : un aliment frais et propre, un aliment périmé et couvert de moisissure.",
         "R.A. : le second aliment est abîmé, il a changé de couleur et d'odeur.", "Observation dirigée", "Images d'aliments", ""),
        ("4. Analyse", "Qu'est-ce qui abîme un aliment ? Que risque-t-on à manger un aliment abîmé ?",
         "R.A. : les microorganismes, la chaleur, l'humidité ; on risque une intoxication alimentaire.", "Étude de cas", "Images d'aliments", ""),
        ("5. Synthèse", "Donc, pour garder la qualité sanitaire d'un aliment, il faut le choisir frais et propre, "
                        "bien le laver, bien le cuire, et le conserver à l'abri de la chaleur et de l'humidité, "
                        "avant, pendant et après la cuisson.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Cite deux règles d'hygiène à respecter avant de cuisiner un poulet.",
         "R.A. : se laver les mains, bien laver le poulet à l'eau propre.", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Explique un risque du non-respect des règles d'hygiène alimentaire.",
         "R.A. : intoxication alimentaire, maladie digestive.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Ce qui abîme les aliments"),
        ("body", "Un aliment cru ou cuit peut s'abîmer sous l'effet de trois causes principales :"),
        ("sub", "a. Les microorganismes"),
        ("body", "Des êtres vivants invisibles à l'œil nu (microbes) se développent sur les aliments et peuvent "
                 "les rendre dangereux à manger."),
        ("sub", "b. La chaleur"),
        ("body", "Une chaleur excessive et prolongée accélère le développement des microorganismes et la "
                 "dégradation de l'aliment."),
        ("sub", "c. L'humidité"),
        ("body", "Un aliment humide ou mal séché favorise l'apparition de moisissures."),
        ("section", "2. Les risques d'un aliment mal conservé"),
        ("body", "Manger un aliment crus ou cuit qui n'est plus propre à la consommation peut provoquer une "
                 "intoxication alimentaire : maux de ventre, vomissements, diarrhée, fièvre. Chez un jeune "
                 "enfant ou une personne fragile, ces troubles peuvent être graves."),
        ("section", "3. Les règles d'hygiène, avant, pendant et après la cuisson"),
        ("sub", "a. Avant la cuisson"),
        ("body", "Se laver les mains ; choisir des aliments frais, propres, non périmés ; bien laver les fruits, "
                 "légumes et brèdes à l'eau propre ; conserver la viande et le poisson au frais."),
        ("sub", "b. Pendant la cuisson"),
        ("body", "Bien cuire les aliments, en particulier la viande, le poisson et les œufs, pour détruire les "
                 "microorganismes ; utiliser des ustensiles et un plan de travail propres."),
        ("sub", "c. Après la cuisson"),
        ("body", "Couvrir les aliments cuits pour les protéger de la poussière et des mouches ; ne pas laisser "
                 "un plat cuit trop longtemps à température ambiante ; réchauffer suffisamment avant de "
                 "consommer un reste."),
        ("image", ("scripts/t4/generated_images/u1_s4_b_regles.jpg",
                   "Les trois moments de l'hygiène alimentaire : avant, pendant, après la cuisson.")),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Cite les trois causes principales qui abîment un aliment, et explique "
                                  "brièvement chacune en une phrase."),
        ("Exercice 2 (5 points)", " — Classe chaque règle selon le moment où elle s'applique (avant, pendant ou "
                                  "après la cuisson) : 1. se laver les mains · 2. bien cuire la viande · "
                                  "3. couvrir le plat cuit · 4. laver les légumes à l'eau propre · "
                                  "5. ne pas laisser un plat longtemps à l'air libre."),
        ("Exercice 3 (6 points)", " — Une vendeuse laisse du poisson frit toute la journée à l'air libre, sans "
                                  "le couvrir, avant de le vendre le soir. 1. Quels risques cette pratique "
                                  "fait-elle courir aux acheteurs ? 2. Propose deux améliorations possibles."),
        ("Exercice 4 (4 points)", " — Choisis la bonne réponse :\n"
                                  "1. Une intoxication alimentaire peut être causée par : A. un aliment bien "
                                  "cuit et frais B. un aliment abîmé C. un aliment coloré\n"
                                  "2. La chaleur et l'humidité favorisent : A. la conservation des aliments "
                                  "B. le développement des microorganismes C. le goût sucré\n"
                                  "3. Avant de cuisiner, il faut d'abord : A. se laver les mains B. allumer la "
                                  "radio C. manger un fruit\n"
                                  "4. Un reste de nourriture doit être : A. laissé à l'air libre toute la nuit "
                                  "B. bien réchauffé avant consommation C. mangé cru le lendemain"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — Les microorganismes (microbes qui rendent l'aliment dangereux), la chaleur (qui accélère "
          "leur développement), l'humidité (qui favorise les moisissures). (5 pts — 1,5 pt + 1,5 pt + 2 pts)", False)],
        [("Ex. 2 — ", False), ("1. avant", True), (" · 2. ", False), ("pendant", True), (" · 3. ", False),
         ("après", True), (" · 4. ", False), ("avant", True), (" · 5. ", False), ("après", True)],
        [("Ex. 3 — 1. Le poisson exposé longtemps à l'air libre et à la chaleur peut développer des "
          "microorganismes et provoquer une intoxication alimentaire chez les acheteurs. (3 pts)", False)],
        [("2. Par exemple : couvrir le poisson pour le protéger des mouches et de la poussière ; le conserver "
          "au frais et le vendre plus tôt dans la journée. (3 pts — 1,5 pt par amélioration pertinente)", False)],
        [("Ex. 4 — ", False), ("1. B", True), (" · 2. ", False), ("B", True), (" · 3. ", False),
         ("A", True), (" · 4. ", False), ("B", True)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 5 - Analyser un emballage alimentaire
# ---------------------------------------------------------------------------
S5 = {
    "num": 5, "title": "Analyser un emballage alimentaire",
    "theme": THEME, "ras_theme": RAS_THEME_3, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "sélectionner et interpréter les informations présentes sur un emballage alimentaire.",
    "support": "emballages alimentaires variés (boisson, biscuits, conserve), tableau noir.",
    "cover_image": ("scripts/t4/generated_images/u1_s5_a_etiquette.jpg",
                     "Bien lire l'étiquette avant d'acheter : un geste de consommateur responsable."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite une règle d'hygiène à respecter avant de cuisiner.",
         "R.A. : se laver les mains, laver les aliments à l'eau propre.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Comment savoir si un paquet de biscuits est encore bon à manger, sans l'ouvrir ?",
         "R.A. : en lisant les informations écrites sur l'emballage.", "Questionnement oral", "Emballage de biscuits", ""),
        ("2. Présentation", "Aujourd'hui : « Analyser un emballage alimentaire ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez cet emballage de boisson : quelles informations y sont écrites ?",
         "R.A. : ingrédients, date de fabrication, date de péremption, valeurs nutritionnelles.", "Observation directe", "Emballages alimentaires variés", ""),
        ("4. Analyse", "Quelle est la différence entre la date de fabrication et la date de péremption ? "
                       "Que se passe-t-il si on consomme un aliment après sa date de péremption ?",
         "R.A. : la fabrication indique quand le produit a été fait, la péremption indique la limite pour le "
         "consommer sans risque ; après cette date, l'aliment peut être dangereux.", "Travaux de groupe", "Emballages alimentaires variés", ""),
        ("5. Synthèse", "Donc, un emballage alimentaire porte des informations importantes : les ingrédients, "
                        "les informations nutritionnelles, la date de fabrication et la date de péremption ou "
                        "de consommation.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Observe un emballage et relève sa date de péremption et ses trois premiers "
                           "ingrédients.",
         "R.A. (exemple) : date de péremption relevée ; ingrédients relevés dans l'ordre.", "Travail en groupe", "Emballages alimentaires variés", ""),
        ("III. ÉVALUATION", "Ex. 1 — Explique pourquoi il est important de lire la date de péremption avant "
                            "d'acheter un produit.",
         "R.A. : pour éviter de consommer un produit dangereux pour la santé.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Les informations présentes sur un emballage alimentaire"),
        ("body", "Un emballage alimentaire porte plusieurs informations utiles pour le consommateur :"),
        ("sub", "a. Les informations nutritionnelles"),
        ("body", "Elles indiquent la quantité de glucides, protéines, lipides, ou l'énergie (en kilocalories) "
                 "apportée par le produit."),
        ("sub", "b. Les ingrédients ou la composition"),
        ("body", "La liste des ingrédients est écrite par ordre décroissant de quantité : le premier ingrédient "
                 "cité est celui présent en plus grande quantité."),
        ("sub", "c. La date de fabrication"),
        ("body", "Elle indique le jour où le produit a été fabriqué."),
        ("sub", "d. La date de péremption ou date limite de consommation"),
        ("body", "Elle indique jusqu'à quand le produit peut être consommé sans risque pour la santé. Au-delà "
                 "de cette date, l'aliment peut devenir dangereux, même si son aspect paraît normal."),
        ("image", ("scripts/t4/generated_images/u1_s5_b_emballage.jpg",
                   "Les informations clés d'un emballage : nutrition, ingrédients, fabrication, péremption.")),
        ("section", "2. Pourquoi lire un emballage avant d'acheter ou de consommer ?"),
        ("body", "Lire un emballage permet de vérifier que le produit n'est pas périmé, de connaître sa "
                 "composition (utile en cas d'allergie ou de régime particulier), et de comparer plusieurs "
                 "produits avant de choisir le plus adapté."),
        ("body", "C'est un geste simple de consommateur responsable, qui protège sa propre santé et celle de "
                 "sa famille."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Cite quatre types d'informations que l'on trouve habituellement sur un "
                                  "emballage alimentaire."),
        ("Exercice 2 (5 points)", " — Vrai ou faux, et corrige les affirmations fausses :\n"
                                  "1. La date de fabrication et la date de péremption sont la même chose.\n"
                                  "2. Le premier ingrédient cité sur la liste est celui présent en plus grande quantité.\n"
                                  "3. On peut consommer un produit sans danger après sa date de péremption.\n"
                                  "4. Les informations nutritionnelles indiquent l'énergie apportée par le produit."),
        ("Exercice 3 (6 points)", " — Un emballage de biscuits indique : « Ingrédients : farine, sucre, huile de "
                                  "palme, sel. Date de péremption : dépassée de deux semaines. »\n"
                                  "1. Quel est l'ingrédient présent en plus grande quantité ? "
                                  "2. Peut-on consommer ces biscuits ? Justifie. "
                                  "3. Que risque-t-on si on les mange quand même ?"),
        ("Exercice 4 (4 points)", " — Choisis la bonne réponse :\n"
                                  "1. La liste des ingrédients est écrite : A. par ordre alphabétique B. par "
                                  "ordre décroissant de quantité C. au hasard\n"
                                  "2. La date de péremption sert à : A. décorer l'emballage B. indiquer la "
                                  "limite de consommation sans risque C. indiquer le prix\n"
                                  "3. Un produit consommé après sa date de péremption peut être : A. toujours "
                                  "sans danger B. dangereux pour la santé C. plus nutritif\n"
                                  "4. Les informations nutritionnelles renseignent sur : A. le prix B. l'énergie "
                                  "et les nutriments C. la couleur de l'emballage"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — Les informations nutritionnelles, les ingrédients (composition), la date de fabrication, la "
          "date de péremption. (5 pts — 1,25 pt chacune)", False)],
        [("Ex. 2 — ", False), ("1. Faux", True),
         (" — la fabrication indique quand le produit a été fait, la péremption indique la limite de "
          "consommation. (1,25 pt)", False)],
        [("2. Vrai. (1,25 pt)", False)],
        [("3. Faux — au-delà de cette date, l'aliment peut devenir dangereux. (1,25 pt)", False)],
        [("4. Vrai. (1,25 pt)", False)],
        [("Ex. 3 — 1. La farine (premier ingrédient cité). (2 pts)", False)],
        [("2. Non, la date de péremption est dépassée. (2 pts)", False)],
        [("3. On risque une intoxication alimentaire ou un trouble digestif. (2 pts)", False)],
        [("Ex. 4 — ", False), ("1. B", True), (" · 2. ", False), ("B", True), (" · 3. ", False),
         ("B", True), (" · 4. ", False), ("B", True)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 6 - Revision - Unite I
# ---------------------------------------------------------------------------
S6 = {
    "num": 6, "title": "Révision — Unité I : Alimentation de l'homme", "kind": "revision",
    "theme": THEME, "ras_theme": "Élaborer un menu varié ; hygiène des aliments ; emballage alimentaire",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "traiter un sujet complet portant sur les séances 1 à 5, puis identifier ses points faibles.",
    "support": "sujet recopié au tableau ou polycopié, cahier de brouillon.",
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Sans ouvrir votre cahier : cite un aliment constructeur et un critère d'un menu varié.",
         "R.A. : poisson (constructeur) ; diversité (critère).", "Questionnement oral", "—", ""),
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
    "sujet_title": "Sujet d'entraînement — Unité I (Alimentation de l'homme) — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Associe chaque aliment à son rôle principal (2 points)\n"
         "1. le poisson · 2. le riz · 3. la brède · 4. l'huile\n"
         "a. protecteur · b. constructeur · c. énergétique · d. énergétique"),
        ("", "B. Vrai ou faux — justifie en une phrase (2 points)\n"
              "1. La date de péremption indique quand un produit a été fabriqué.\n"
              "2. Un menu composé uniquement de riz est varié."),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "Voici le repas du soir de Tiana, élève de T4 : riz (250 g), poisson grillé (100 g), brèdes sautées "
         "(80 g), un peu d'huile (10 g).\n"
         "1. Cite le rôle principal de chacun de ces quatre aliments. (2 pts)\n"
         "2. Ce repas respecte-t-il les trois rôles (énergétique, constructeur, protecteur) ? Justifie. (2 pts)\n"
         "3. Propose un aliment à ajouter pour rendre ce repas encore plus varié, et précise son rôle. (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Un vendeur ambulant garde des samosas frits depuis le matin, à l'air libre, sans les couvrir, pour les "
         "vendre toute la journée.\n"
         "1. Quelles règles d'hygiène ne sont pas respectées ? (2 pts)\n"
         "2. Quel risque les acheteurs courent-ils l'après-midi ? (2 pts)\n"
         "3. Propose deux améliorations pour ce vendeur. (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Un commerçant affirme : « Cette date sur l'emballage, c'est juste la date où on l'a fabriqué, ça ne "
         "veut rien dire pour toi. »\n"
         "Réponds-lui en deux arguments tirés de la leçon."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1 → b · 2 → d · 3 → a · 4 → c (0,5 pt par association)", False)],
        [("B. (1 pt par item : 0,5 pt pour vrai/faux, 0,5 pt pour la justification)", False)],
        [("1. Faux. C'est la date de péremption qui indique la limite de consommation sans risque ; la date de "
          "fabrication indique seulement quand le produit a été fait.", False)],
        [("2. Faux. Un menu varié doit associer plusieurs aliments différents et les trois rôles nutritionnels ; "
          "le riz seul ne suffit pas.", False)],
        [("Exercice 2 (6 pts)", True)],
        [("1. Riz — énergétique ; poisson — constructeur ; brèdes — protecteur ; huile — énergétique. (2 pts)", False)],
        [("2. Oui : les trois rôles sont présents (riz/huile énergétiques, poisson constructeur, brèdes "
          "protectrices). (2 pts)", False)],
        [("3. Par exemple un fruit (mangue, banane) pour renforcer l'apport protecteur et la diversité. (2 pts)", False)],
        [("Renvoi : séances 1, 2, 3.", True)],
        [("Exercice 3 (6 pts)", True)],
        [("1. Les samosas ne sont ni couverts, ni conservés au frais ; ils restent trop longtemps exposés à la "
          "chaleur et à la poussière. (2 pts)", False)],
        [("2. Ils risquent une intoxication alimentaire (les microorganismes se sont développés avec la "
          "chaleur). (2 pts)", False)],
        [("3. Couvrir les samosas, les garder au frais ou à l'ombre, et limiter le temps entre la friture et la "
          "vente. (2 pts — 1 pt par amélioration)", False)],
        [("Renvoi : séance 4.", True)],
        [("Exercice 4 (4 pts)", True)],
        [("Argument 1 — la date de fabrication n'indique pas la limite de consommation ; c'est la date de "
          "péremption qui protège la santé. (2 pts)", False)],
        [("Argument 2 — consommer un produit après sa date de péremption peut provoquer une intoxication "
          "alimentaire, même si l'aspect semble normal. (2 pts)", False)],
        [("Renvoi : séance 5.", True)],
        [("Repères de score : 16-20 acquis · 11-15 à consolider · 6-10 fragile · 0-5 reprendre les séances 1 à 5.", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 7 - Examen - Unite I
# ---------------------------------------------------------------------------
S7 = {
    "num": 7, "title": "Sujet d'examen ST T4 — Unité I : Alimentation de l'homme", "kind": "exam",
    "theme": THEME, "ras_theme": "Élaborer un menu varié ; hygiène des aliments ; emballage alimentaire",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "évaluer la maîtrise des notions des séances 1 à 5 — classification des aliments, menu varié, "
                "hygiène alimentaire, emballage alimentaire.",
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
    "sujet_title": "SUJET D'EXAMEN — Unité I : Alimentation de l'homme — Durée : ____________ — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Complète avec le mot exact (2 points)\n"
         "1. Le sel de cuisine est un aliment d'origine ……………… .\n"
         "2. Les aliments qui construisent le corps sont dits ……………… .\n"
         "3. Le goût d'un bouillon de viande s'appelle ……………… .\n"
         "4. La ……………………… indique la limite de consommation sans risque d'un aliment."),
        ("", "B. QCM — une seule réponse exacte (2 points)\n"
              "1. Les trois critères d'un menu varié sont : A. couleur, goût, prix B. quantité, qualité, diversité "
              "C. origine, saison, transport\n"
              "2. La liste des ingrédients d'un emballage est écrite : A. au hasard B. par ordre décroissant de "
              "quantité C. par ordre alphabétique\n"
              "3. Le riz est un aliment : A. protecteur B. énergétique C. minéral\n"
              "4. Un aliment abîmé peut provoquer : A. une croissance rapide B. une intoxication alimentaire "
              "C. une meilleure digestion"),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "Une cantine scolaire prépare 150 repas identiques composés chacun de : 200 g de riz, 60 g de haricots, "
         "50 g de brèdes.\n"
         "1. Quelle masse totale de riz faut-il prévoir pour les 150 repas ? Exprime le résultat en kilogrammes. "
         "(2 pts)\n"
         "2. Même question pour les haricots. (2 pts)\n"
         "3. Le riz coûte 2 200 Ar le kilogramme. Quel est le coût total du riz pour les 150 repas ? (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Un centre de santé communautaire relève, sur un marché local, que 3 vendeurs sur 10 laissent leurs "
         "aliments cuits exposés au soleil toute la journée sans les couvrir.\n"
         "1. Quel pourcentage de vendeurs cela représente-t-il ? (1,5 pt)\n"
         "2. Quel risque cette pratique fait-elle courir aux consommateurs ? (1,5 pt)\n"
         "3. Cite deux règles d'hygiène que ces vendeurs devraient appliquer. (2 pts)\n"
         "4. Pourquoi est-il important d'informer les vendeurs sur ces règles, et pas seulement les "
         "consommateurs ? (1 pt)"),
        ("Exercice 4 — Situation (4 points)",
         "Une famille dispose d'un petit budget. Elle mange du riz et un peu de sel, trois fois par jour, "
         "presque tous les jours.\n"
         "1. Ce menu respecte-t-il le critère de qualité ? Justifie. (1,5 pt)\n"
         "2. Propose deux aliments peu coûteux et disponibles localement pour améliorer ce menu, en précisant "
         "le rôle de chacun. (2,5 pts)"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. (0,5 pt par mot)", False)],
        [("1. minérale — 2. constructeurs — 3. umami — 4. date de péremption (ou date limite de consommation)", False)],
        [("B. (0,5 pt par item)", False)],
        [("1. B — 2. B — 3. B — 4. B", False)],
        [("Renvoi : séances 1, 2, 3, 5.", True)],
        [("Exercice 2 (6 pts)", True)],
        [("1. 200 g × 150 = 30 000 g = 30 kg de riz. (2 pts)", False)],
        [("2. 60 g × 150 = 9 000 g = 9 kg de haricots. (2 pts)", False)],
        [("3. 30 × 2 200 = 66 000 Ar. (2 pts)", False)],
        [("Renvoi : séances 2, 3.", True)],
        [("Exercice 3 (6 pts)", True)],
        [("1. 3 ÷ 10 = 0,30 = 30 % des vendeurs. (1,5 pt)", False)],
        [("2. Les consommateurs risquent une intoxication alimentaire, car la chaleur et l'exposition prolongée "
          "favorisent les microorganismes. (1,5 pt)", False)],
        [("3. Par exemple : couvrir les aliments cuits, les garder à l'ombre ou au frais, et limiter le temps "
          "d'exposition avant la vente. (2 pts — 1 pt par règle)", False)],
        [("4. Parce que ce sont les vendeurs qui préparent et conservent les aliments : s'ils appliquent les "
          "bonnes pratiques, ils protègent tous leurs clients à la fois. (1 pt)", False)],
        [("Renvoi : séance 4.", True)],
        [("Exercice 4 (4 pts)", True)],
        [("1. Non. Ce menu est presque uniquement énergétique (riz) ; il manque des aliments constructeurs et "
          "protecteurs. (1,5 pt)", False)],
        [("2. Par exemple des haricots ou des œufs (constructeur, peu coûteux) et des brèdes ou légumes locaux "
          "(protecteur, peu coûteux). (2,5 pts — 1,25 pt par aliment correctement justifié)", False)],
        [("Renvoi : séances 1, 3.", True)],
    ],
}
