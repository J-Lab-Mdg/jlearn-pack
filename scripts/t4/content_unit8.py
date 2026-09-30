# -*- coding: utf-8 -*-
"""Content for UNITE VIII - Matiere (seances 54-61).
Grounded in PE T4 (RAS: Expliquer les proprietes de la matiere ; expliquer
les changements d'etat physiques de l'eau).
"""

THEME = "Matière"
RAS_THEME = "Expliquer les propriétés de la matière ; expliquer les changements d'état physiques de l'eau"
VALEURS = "rigueur, respect mutuel"

# ---------------------------------------------------------------------------
# SEANCE 1 (globale 54) - Les etats physiques de la matiere
# ---------------------------------------------------------------------------
S1 = {
    "num": 1, "title": "Les états physiques de la matière",
    "theme": THEME, "ras_theme": RAS_THEME, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "identifier les trois états physiques de la matière (solide, liquide, gazeux) et leurs propriétés.",
    "support": "un caillou, un verre d'eau, un ballon gonflé, images d'objets variés.",
    "cover_image": ("scripts/t4/generated_images/u8_s1_a_objets.jpg",
                     "Un enfant observe un caillou, un verre d'eau et un ballon gonflé posés sur une table."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite un objet dur et un objet qui coule facilement d'un récipient à un autre.",
         "R.A. : un caillou (dur) ; de l'eau (coule facilement).", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Touchons un caillou, de l'eau et un ballon gonflé. Que remarquez-vous de "
                                 "différent entre ces trois objets ?",
         "R.A. : le caillou garde toujours sa forme, l'eau prend la forme du récipient, l'air dans le "
         "ballon remplit tout l'espace disponible.", "Expérimentation dirigée", "Caillou, eau, ballon", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les états physiques de la matière ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Versez l'eau du verre dans un autre récipient de forme différente : que se "
                            "passe-t-il ? Et si on presse doucement le ballon ?",
         "R.A. : l'eau prend la forme du nouveau récipient mais garde la même quantité ; le ballon reste "
         "gonflé, l'air remplit tout l'intérieur.", "Observation dirigée", "Récipients, ballon", ""),
        ("4. Analyse", "À votre avis, pourquoi le caillou ne change-t-il jamais de forme, alors que l'eau "
                        "en change facilement, et que l'air remplit tout l'espace qu'on lui donne ?",
         "R.A. : le caillou est un solide, ses particules sont serrées et ne bougent pas ; l'eau est un "
         "liquide, ses particules glissent les unes sur les autres ; l'air est un gaz, ses particules sont "
         "très écartées et se déplacent librement dans tout l'espace disponible.", "Étude de cas",
         "Images de particules", ""),
        ("5. Synthèse", "Donc, la matière existe sous trois états physiques : l'état solide (forme et "
                        "volume propres, comme le caillou), l'état liquide (volume propre mais prend la "
                        "forme du récipient, comme l'eau) et l'état gazeux (ni forme ni volume propres, "
                        "occupe tout l'espace disponible, comme l'air).",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Classe ces objets selon leur état : une pierre, du jus d'orange, l'air "
                            "d'un pneu, un morceau de bois, du lait.",
         "Ex. 1 : solides : pierre, bois ; liquides : jus d'orange, lait ; gazeux : air d'un pneu.",
         "Travail individuel", "Cahier", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite les trois états physiques de la matière et donne un exemple pour "
                            "chacun.",
         "Ex. 1 : solide (caillou), liquide (eau), gazeux (air).", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Qu'est-ce que la matière ?"),
        ("body", "La matière, c'est tout ce qui nous entoure et qui occupe un espace : les pierres, l'eau, "
                 "l'air, le bois, notre propre corps… La matière existe sous trois états physiques : solide, "
                 "liquide et gazeux."),
        ("section", "2. Les trois états physiques de la matière"),
        ("sub", "a. L'état solide"),
        ("body", "Un solide a une forme propre et un volume propre : il garde toujours la même forme, quel "
                 "que soit le récipient dans lequel on le place. Exemples : une pierre, un morceau de bois, "
                 "un glaçon."),
        ("sub", "b. L'état liquide"),
        ("body", "Un liquide a un volume propre mais pas de forme propre : il prend la forme du récipient "
                 "qui le contient, mais sa quantité ne change pas. Exemples : l'eau, le lait, l'huile."),
        ("sub", "c. L'état gazeux"),
        ("body", "Un gaz n'a ni forme ni volume propres : il se répand et occupe tout l'espace disponible "
                 "dans son récipient. Exemples : l'air, la vapeur d'eau, le gaz de cuisine."),
        ("image", ("scripts/t4/generated_images/u8_s1_b_etats.jpg",
                   "Les trois états physiques de la matière : solide, liquide et gazeux.")),
        ("section", "3. Reconnaître l'état d'un objet"),
        ("body", "Pour savoir dans quel état se trouve une matière, on observe si elle garde sa forme "
                 "(solide), si elle coule et prend la forme du récipient (liquide), ou si elle se répand "
                 "partout et est invisible ou presque (gazeux)."),
        ("image", ("scripts/t4/generated_images/u8_s1_c_exemples.jpg",
                   "Des exemples de matière autour de nous, dans chacun des trois états physiques.")),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Cite les trois états physiques de la matière et donne un exemple pour chacun."),
        ("Exercice 2 (5 points)", " — Quelle est la différence entre l'état solide et l'état liquide ?"),
        ("Exercice 3 (6 points)", " — Classe ces éléments selon leur état (solide, liquide ou gazeux) : "
                                   "1. une chaise · 2. le jus de mangue · 3. l'air d'un ballon · 4. une "
                                   "cuillère en métal · 5. le lait · 6. la vapeur d'une marmite."),
        ("Exercice 4 (4 points)", " — Explique en une phrase pourquoi l'air remplit tout l'intérieur d'un "
                                   "ballon, quelle que soit sa forme."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("solide (pierre), liquide (eau), gazeux (air) — exemples au choix. (5 pts)",
                                False)],
        [("Ex. 2 — ", False), ("un solide garde toujours sa forme ; un liquide prend la forme du récipient "
                                "qui le contient. (5 pts)", False)],
        [("Ex. 3 — ", False), ("solides : 1, 4 (1 pt chacun) ; liquides : 2, 5 (1 pt chacun) ; gazeux : 3, 6 "
                                "(1 pt chacun). (6 pts)", False)],
        [("Ex. 4 — ", False), ("parce que c'est un gaz : ses particules se déplacent librement et occupent "
                                "tout l'espace disponible. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 2 (globale 55) - L'origine de la matiere
# ---------------------------------------------------------------------------
S2 = {
    "num": 2, "title": "L'origine de la matière",
    "theme": THEME, "ras_theme": RAS_THEME, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "identifier l'origine (minérale, végétale, animale ou fabriquée) de la matière qui nous entoure.",
    "support": "objets variés (pierre, morceau de bois, laine, sac plastique), images.",
    "cover_image": ("scripts/t4/generated_images/u8_s2_a_matieres.jpg",
                     "Des matériaux d'origines différentes réunis sur une table : bois, laine, pierre, coton."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite les trois états physiques de la matière.",
         "R.A. : solide, liquide, gazeux.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Regardez ces objets : une pierre, un morceau de bois, un pull en laine, "
                                 "un sac plastique. D'où vient la matière de chacun ?",
         "R.A. : hypothèses des élèves.", "Questionnement oral", "Objets variés", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « L'origine de la matière ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Classons ces objets en groupes selon ce dont ils sont faits à l'origine.",
         "R.A. : la pierre vient de la terre (minérale), le bois vient d'un arbre (végétale), la laine "
         "vient d'un mouton (animale), le sac plastique est fabriqué par l'homme.", "Observation dirigée",
         "Objets variés", ""),
        ("4. Analyse", "À votre avis, pourquoi dit-on que le plastique n'existe pas directement dans la "
                        "nature ?",
         "R.A. : parce qu'il est fabriqué par l'homme, en transformant une autre matière première "
         "(souvent issue du pétrole), et n'existe pas tel quel dans la nature.", "Étude de cas",
         "Sac plastique", ""),
        ("5. Synthèse", "Donc, la matière qui nous entoure a quatre origines possibles : minérale (roches, "
                        "métaux, sable), végétale (bois, coton, papier), animale (laine, cuir, lait), ou "
                        "fabriquée par l'homme à partir d'autres matières (plastique, verre, tissu "
                        "synthétique).",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Trouve dans la classe un objet d'origine minérale, un d'origine "
                            "végétale et un d'origine animale.",
         "Ex. 1 : réponses libres, par exemple : craie (minérale), cahier en papier (végétale), pull en "
         "laine (animale).", "Travail en binôme", "Objets de la classe", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite les quatre origines possibles de la matière.",
         "Ex. 1 : minérale, végétale, animale, fabriquée par l'homme.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. D'où vient la matière qui nous entoure ?"),
        ("body", "Tous les objets qui nous entourent sont faits d'une matière première qui a une origine : "
                 "certaines matières existent directement dans la nature, d'autres sont fabriquées par "
                 "l'homme."),
        ("section", "2. Les quatre origines de la matière"),
        ("sub", "a. L'origine minérale"),
        ("body", "Elle provient du sol ou des roches : le sable, l'argile, les métaux (fer, or), le sel."),
        ("sub", "b. L'origine végétale"),
        ("body", "Elle provient des plantes : le bois, le coton, le papier (fabriqué à partir du bois), le "
                 "caoutchouc naturel."),
        ("sub", "c. L'origine animale"),
        ("body", "Elle provient des animaux : la laine (mouton), le cuir, le miel, le lait."),
        ("image", ("scripts/t4/generated_images/u8_s2_b_origines.jpg",
                   "Les quatre origines de la matière : minérale, végétale, animale et fabriquée par l'homme.")),
        ("sub", "d. La matière fabriquée par l'homme"),
        ("body", "Certains matériaux n'existent pas tels quels dans la nature : le plastique, le verre ou "
                 "les tissus synthétiques sont obtenus en transformant d'autres matières premières, souvent "
                 "par des procédés industriels."),
        ("section", "3. De la matière première à l'objet"),
        ("body", "Avant de devenir un objet utile, la matière première est souvent transformée : le bois "
                 "est scié et façonné pour faire des meubles, la laine est filée et tissée pour faire des "
                 "vêtements, le sable est fondu pour faire du verre."),
        ("image", ("scripts/t4/generated_images/u8_s2_c_transformation.jpg",
                   "Un artisan transforme une matière première (le bois) en objet utile.")),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Cite les quatre origines possibles de la matière."),
        ("Exercice 2 (5 points)", " — Pourquoi dit-on que le plastique est une matière fabriquée par "
                                   "l'homme ?"),
        ("Exercice 3 (6 points)", " — Associe chaque objet à son origine : 1. un pull en laine · 2. une "
                                   "table en bois · 3. une pièce de monnaie en métal · 4. un sac en "
                                   "plastique · 5. du papier · 6. une paire de chaussures en cuir.\n"
                                   "a. minérale · b. végétale · c. animale · d. fabriquée par l'homme."),
        ("Exercice 4 (4 points)", " — Explique en une phrase la transformation qui permet de passer du "
                                   "bois d'un arbre au papier de ton cahier."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("minérale, végétale, animale, fabriquée par l'homme. (5 pts)", False)],
        [("Ex. 2 — ", False), ("parce qu'il n'existe pas tel quel dans la nature : il est obtenu en "
                                "transformant d'autres matières premières. (5 pts)", False)],
        [("Ex. 3 — ", False), ("1 → c · 2 → b · 3 → a · 4 → d · 5 → b · 6 → c (1 pt par association). "
                                "(6 pts)", False)],
        [("Ex. 4 — ", False), ("le bois de l'arbre est coupé, transformé en pâte à papier, puis façonné en "
                                "feuilles de papier. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 3 (globale 56) - Les etats physiques de l'eau
# ---------------------------------------------------------------------------
S3 = {
    "num": 3, "title": "Les états physiques de l'eau",
    "theme": THEME, "ras_theme": RAS_THEME, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "identifier les trois états physiques de l'eau (solide, liquide, gazeux) et des exemples dans la nature.",
    "support": "un glaçon, un verre d'eau, une bouilloire ou marmite (démonstration), images.",
    "cover_image": ("scripts/t4/generated_images/u8_s3_a_eau.jpg",
                     "Un enfant observe un glaçon fondre lentement dans un verre d'eau posé au soleil."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite les trois états physiques de la matière.",
         "R.A. : solide, liquide, gazeux.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Posez un glaçon dans une assiette et observez-le pendant quelques "
                                 "minutes. Que se passe-t-il ?",
         "R.A. : le glaçon fond peu à peu et se transforme en eau liquide.", "Expérimentation dirigée",
         "Glaçon, assiette", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les états physiques de l'eau ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez une marmite d'eau qui bout : que voit-on s'échapper au-dessus ?",
         "R.A. : une sorte de fumée blanche (la vapeur d'eau) s'échappe de la marmite.",
         "Observation dirigée", "Marmite d'eau chaude (démonstration encadrée)", ""),
        ("4. Analyse", "À votre avis, la glace, l'eau du verre et la vapeur de la marmite, est-ce la même "
                        "matière ?",
         "R.A. : oui, c'est toujours de l'eau, mais sous trois états physiques différents : solide (glace), "
         "liquide (eau) et gazeux (vapeur d'eau).", "Étude de cas", "Images des trois états", ""),
        ("5. Synthèse", "Donc, l'eau existe sous trois états physiques : à l'état solide, c'est la glace "
                        "ou la neige ; à l'état liquide, c'est l'eau que nous buvons, des rivières, des "
                        "lacs ; à l'état gazeux, c'est la vapeur d'eau, invisible ou visible sous forme de "
                        "buée ou de nuages.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Donne un exemple, dans la nature, de l'eau à l'état solide, à l'état "
                            "liquide et à l'état gazeux.",
         "Ex. 1 : solide (neige, glace, grêle), liquide (rivière, lac, pluie), gazeux (nuage, buée, vapeur "
         "d'eau).", "Travail individuel", "Cahier", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite les trois états de l'eau et un exemple pour chacun.",
         "Ex. 1 : solide (glace), liquide (rivière), gazeux (nuage).", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. L'eau, une matière aux trois états"),
        ("body", "L'eau est la seule matière que l'on rencontre facilement, dans la nature, sous ses trois "
                 "états physiques : solide, liquide et gazeux."),
        ("section", "2. Les trois états de l'eau"),
        ("sub", "a. L'état solide : la glace"),
        ("body", "Quand l'eau est très froide, elle devient dure et garde sa forme : c'est la glace, la "
                 "neige ou la grêle."),
        ("sub", "b. L'état liquide : l'eau"),
        ("body", "C'est l'état le plus courant : l'eau des rivières, des lacs, de la pluie, celle que nous "
                 "buvons chaque jour."),
        ("sub", "c. L'état gazeux : la vapeur d'eau"),
        ("body", "Invisible la plupart du temps, elle devient visible sous forme de buée (sur une vitre "
                 "froide) ou de nuages dans le ciel."),
        ("image", ("scripts/t4/generated_images/u8_s3_b_trois_etats_eau.jpg",
                   "Les trois états physiques de l'eau : la glace (solide), l'eau (liquide) et la vapeur d'eau (gazeux).")),
        ("section", "3. Des exemples dans la nature"),
        ("body", "En observant la nature autour de nous, on retrouve facilement l'eau sous ses trois "
                 "états : la neige sur une montagne, l'eau d'une rivière, ou un nuage dans le ciel."),
        ("image", ("scripts/t4/generated_images/u8_s3_c_nature.jpg",
                   "Dans la nature : de la neige sur une montagne, une rivière et des nuages dans le ciel.")),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Cite les trois états physiques de l'eau."),
        ("Exercice 2 (5 points)", " — Donne un exemple, dans la nature, pour chacun des trois états de "
                                   "l'eau."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                   "1. La glace est de l'eau à l'état solide.\n"
                                   "2. La vapeur d'eau est toujours visible.\n"
                                   "3. L'eau des rivières est de l'eau à l'état liquide."),
        ("Exercice 4 (4 points)", " — Explique en une phrase pourquoi la glace, l'eau et la vapeur sont "
                                   "trois états d'une même matière."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("solide, liquide, gazeux. (5 pts)", False)],
        [("Ex. 2 — ", False), ("solide : neige/glace/grêle ; liquide : rivière/lac/pluie ; gazeux : "
                                "nuage/buée. (5 pts)", False)],
        [("Ex. 3 — ", False), ("1. Vrai. (2 pts)", False)],
        [("2. Faux, elle est souvent invisible. (2 pts)", False)],
        [("3. Vrai. (2 pts)", False)],
        [("Ex. 4 — ", False), ("parce que c'est toujours de l'eau, seule son apparence (état physique) "
                                "change selon la température. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 4 (globale 57) - Fusion et solidification de l'eau
# ---------------------------------------------------------------------------
S4 = {
    "num": 4, "title": "Fusion et solidification de l'eau",
    "theme": THEME, "ras_theme": RAS_THEME, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "décrire la fusion et la solidification de l'eau et les conditions de température associées.",
    "support": "glaçons, récipients, un endroit chaud et un congélateur/réfrigérateur si possible, thermomètre.",
    "cover_image": ("scripts/t4/generated_images/u8_s4_a_glacon.jpg",
                     "Un glaçon commence à fondre au soleil, formant une petite flaque d'eau autour de lui."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite les trois états physiques de l'eau vus à la séance précédente.",
         "R.A. : solide (glace), liquide (eau), gazeux (vapeur d'eau).", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Posons un glaçon au soleil et un verre d'eau au congélateur. Que va-t-il "
                                 "se passer selon vous ?",
         "R.A. : le glaçon va fondre et devenir liquide ; l'eau du verre va geler et devenir solide.",
         "Expérimentation dirigée", "Glaçon, verre d'eau, congélateur", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Fusion et solidification de l'eau ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Après quelques minutes, observez les deux récipients : qu'est-il arrivé au "
                            "glaçon ? Et à l'eau mise au froid ?",
         "R.A. : le glaçon est devenu de l'eau liquide (il a fondu) ; l'eau du congélateur est devenue "
         "solide (elle a gelé).", "Observation dirigée", "Récipients", ""),
        ("4. Analyse", "À votre avis, qu'est-ce qui provoque ces deux changements d'état ?",
         "R.A. : la chaleur fait fondre la glace (elle passe de solide à liquide) ; le froid fait geler "
         "l'eau (elle passe de liquide à solide). L'eau devient solide à 0 °C ou moins.", "Étude de cas",
         "Thermomètre", ""),
        ("5. Synthèse", "Donc, la fusion est le passage de l'état solide à l'état liquide sous l'effet de "
                        "la chaleur (la glace fond à 0 °C) ; la solidification est le passage inverse, de "
                        "l'état liquide à l'état solide, sous l'effet du froid (l'eau gèle à 0 °C).",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Dans un pays où il fait très froid, les flaques d'eau se transforment "
                            "en glace le matin. De quel changement d'état s'agit-il ?",
         "Ex. 1 : d'une solidification (l'eau liquide devient solide à cause du froid).",
         "Travail individuel", "Cahier", ""),
        ("III. ÉVALUATION", "Ex. 1 — Qu'est-ce que la fusion ? Qu'est-ce que la solidification ?",
         "Ex. 1 : la fusion est le passage du solide au liquide (chaleur) ; la solidification est le "
         "passage du liquide au solide (froid).", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. La fusion : du solide au liquide"),
        ("body", "Sous l'effet de la chaleur, la glace se transforme en eau liquide : c'est la fusion. "
                 "L'eau fond à 0 °C (elle commence à devenir liquide à cette température)."),
        ("section", "2. La solidification : du liquide au solide"),
        ("body", "Sous l'effet du froid, l'eau liquide se transforme en glace : c'est la solidification. "
                 "L'eau se solidifie (gèle) elle aussi à 0 °C."),
        ("image", ("scripts/t4/generated_images/u8_s4_b_fusion.jpg",
                   "La fusion (glace → eau, sous l'effet de la chaleur) et la solidification (eau → glace, sous l'effet du froid).")),
        ("section", "3. Des exemples de la vie quotidienne"),
        ("body", "On observe la fusion quand un glaçon fond dans une boisson ou quand la neige fond au "
                 "soleil au printemps. On observe la solidification quand on fabrique des glaçons au "
                 "congélateur ou quand l'eau gèle par une nuit très froide."),
        ("image", ("scripts/t4/generated_images/u8_s4_c_bac_glacons.jpg",
                   "De l'eau versée dans un bac à glaçons se solidifie au congélateur pour former des glaçons.")),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Qu'est-ce que la fusion ? Qu'est-ce que la solidification ?"),
        ("Exercice 2 (5 points)", " — À quelle température l'eau fond-elle et gèle-t-elle ?"),
        ("Exercice 3 (6 points)", " — Pour chaque situation, indique s'il s'agit d'une fusion ou d'une "
                                   "solidification :\n"
                                   "1. Un glaçon fond dans un verre de jus.\n"
                                   "2. On met de l'eau dans un bac à glaçons au congélateur.\n"
                                   "3. De la neige fond au soleil."),
        ("Exercice 4 (4 points)", " — Explique en une phrase pourquoi les glaçons fondent plus vite un "
                                   "jour de grande chaleur qu'un jour frais."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("la fusion est le passage du solide au liquide (chaleur) ; la solidification "
                                "est le passage du liquide au solide (froid). (5 pts)", False)],
        [("Ex. 2 — ", False), ("à 0 °C, dans les deux cas. (5 pts)", False)],
        [("Ex. 3 — ", False), ("1. Fusion. (2 pts)", False)],
        [("2. Solidification. (2 pts)", False)],
        [("3. Fusion. (2 pts)", False)],
        [("Ex. 4 — ", False), ("parce que la chaleur accélère la fusion : plus il fait chaud, plus vite la "
                                "glace fond. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 5 (globale 58) - Vaporisation et condensation de l'eau
# ---------------------------------------------------------------------------
S5 = {
    "num": 5, "title": "Vaporisation et condensation de l'eau",
    "theme": THEME, "ras_theme": RAS_THEME, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "décrire la vaporisation et la condensation de l'eau et des exemples dans la vie quotidienne.",
    "support": "une marmite d'eau chaude (démonstration encadrée), un couvercle froid, du linge mouillé.",
    "cover_image": ("scripts/t4/generated_images/u8_s5_a_vapeur.jpg",
                     "De la vapeur s'échappe d'une marmite d'eau chaude posée sur un feu."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Qu'est-ce que la fusion ? Qu'est-ce que la solidification ?",
         "R.A. : la fusion est le passage du solide au liquide ; la solidification est le passage du "
         "liquide au solide.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Observons une marmite d'eau qui chauffe. Que voit-on s'échapper "
                                 "au-dessus, et pourquoi le niveau de l'eau baisse-t-il avec le temps ?",
         "R.A. : de la vapeur (fumée blanche) s'échappe ; le niveau de l'eau baisse car une partie de "
         "l'eau se transforme en vapeur et s'en va.", "Observation dirigée", "Marmite d'eau chaude", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Vaporisation et condensation de "
                            "l'eau ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Approchons un couvercle froid au-dessus de la marmite : que se forme-t-il sur "
                            "sa surface ?",
         "R.A. : de petites gouttes d'eau se forment sur le couvercle froid.", "Expérimentation dirigée",
         "Couvercle froid", ""),
        ("4. Analyse", "À votre avis, d'où viennent ces gouttes d'eau sur le couvercle froid ?",
         "R.A. : c'est la vapeur d'eau (gaz) qui, en touchant le couvercle froid, redevient liquide : elle "
         "se condense.", "Étude de cas", "Couvercle, marmite", ""),
        ("5. Synthèse", "Donc, la vaporisation est le passage de l'état liquide à l'état gazeux sous "
                        "l'effet de la chaleur (l'eau chauffée se transforme en vapeur) ; la condensation "
                        "est le passage inverse, de l'état gazeux à l'état liquide, quand la vapeur "
                        "rencontre une surface froide.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Du linge mouillé mis à sécher au soleil devient sec après quelques "
                            "heures. Quel changement d'état a eu lieu ?",
         "Ex. 1 : une vaporisation : l'eau du linge s'est transformée en vapeur d'eau et s'est échappée "
         "dans l'air.", "Travail individuel", "Cahier", ""),
        ("III. ÉVALUATION", "Ex. 1 — Qu'est-ce que la vaporisation ? Qu'est-ce que la condensation ?",
         "Ex. 1 : la vaporisation est le passage du liquide au gaz (chaleur) ; la condensation est le "
         "passage du gaz au liquide (froid).", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. La vaporisation : du liquide au gaz"),
        ("body", "Sous l'effet de la chaleur, l'eau liquide se transforme en vapeur d'eau (un gaz) : c'est "
                 "la vaporisation. Elle est rapide quand l'eau bout, mais elle se produit aussi lentement, "
                 "même à température ambiante : c'est l'évaporation."),
        ("section", "2. La condensation : du gaz au liquide"),
        ("body", "Quand la vapeur d'eau rencontre une surface froide, elle redevient liquide : c'est la "
                 "condensation. C'est ce qui forme la buée sur une vitre froide ou les petites gouttes sur "
                 "un couvercle."),
        ("image", ("scripts/t4/generated_images/u8_s5_b_vaporisation.jpg",
                   "La vaporisation (eau → vapeur, sous l'effet de la chaleur) et la condensation (vapeur → eau, au contact du froid).")),
        ("section", "3. Des exemples de la vie quotidienne"),
        ("body", "On observe la vaporisation quand du linge mouillé sèche au soleil ou quand une flaque "
                 "d'eau disparaît après la pluie. On observe la condensation quand de la buée se forme sur "
                 "une vitre froide, un miroir de salle de bain ou quand on voit de petites gouttes sur un "
                 "verre d'eau glacée."),
        ("image", ("scripts/t4/generated_images/u8_s5_c_linge.jpg",
                   "Du linge mouillé sèche au soleil : l'eau qu'il contient s'évapore dans l'air.")),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Qu'est-ce que la vaporisation ? Qu'est-ce que la condensation ?"),
        ("Exercice 2 (5 points)", " — Pourquoi de la buée se forme-t-elle sur une vitre froide un matin "
                                   "frais ?"),
        ("Exercice 3 (6 points)", " — Pour chaque situation, indique s'il s'agit d'une vaporisation ou "
                                   "d'une condensation :\n"
                                   "1. Une flaque d'eau disparaît après quelques heures de soleil.\n"
                                   "2. De petites gouttes se forment sur un verre d'eau glacée.\n"
                                   "3. Du linge mouillé sèche sur un fil."),
        ("Exercice 4 (4 points)", " — Explique en une phrase le lien entre la vaporisation et la "
                                   "condensation dans le cycle de l'eau (vu à la prochaine séance)."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("la vaporisation est le passage du liquide au gaz (chaleur) ; la "
                                "condensation est le passage du gaz au liquide (au contact du froid). "
                                "(5 pts)", False)],
        [("Ex. 2 — ", False), ("parce que la vapeur d'eau contenue dans l'air se condense en touchant la "
                                "surface froide de la vitre. (5 pts)", False)],
        [("Ex. 3 — ", False), ("1. Vaporisation. (2 pts)", False)],
        [("2. Condensation. (2 pts)", False)],
        [("3. Vaporisation. (2 pts)", False)],
        [("Ex. 4 — ", False), ("l'eau s'évapore (vaporisation) puis se condense en nuages, avant de "
                                "retomber sous forme de pluie. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 6 (globale 59) - Le cycle de l'eau
# ---------------------------------------------------------------------------
S6 = {
    "num": 6, "title": "Le cycle de l'eau",
    "theme": THEME, "ras_theme": RAS_THEME, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "décrire les étapes du cycle de l'eau (évaporation, condensation, précipitations, ruissellement).",
    "support": "image ou schéma du cycle de l'eau, récit d'une journée de pluie.",
    "cover_image": ("scripts/t4/generated_images/u8_s6_a_pluie.jpg",
                     "Une pluie tombe sur un paysage malgache, alimentant une rivière qui coule vers la mer."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Qu'est-ce que la vaporisation ? Qu'est-ce que la condensation ?",
         "R.A. : la vaporisation est le passage du liquide au gaz ; la condensation est le passage du gaz "
         "au liquide.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "D'où vient la pluie qui tombe sur nos champs ? Et où va l'eau de pluie "
                                 "ensuite ?",
         "R.A. : hypothèses des élèves.", "Questionnement oral", "Tableau noir", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Le cycle de l'eau ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez ce schéma : par quelles étapes l'eau passe-t-elle, de la mer jusqu'à "
                            "la pluie, puis de retour à la mer ?",
         "R.A. : l'eau de la mer s'évapore, forme des nuages, retombe en pluie, puis ruisselle ou "
         "s'infiltre dans le sol avant de rejoindre les rivières et la mer.", "Observation dirigée",
         "Schéma du cycle de l'eau", ""),
        ("4. Analyse", "À votre avis, pourquoi dit-on que c'est un « cycle » (un cercle sans fin) ?",
         "R.A. : parce que l'eau repasse sans cesse par les mêmes étapes : elle s'évapore, se condense, "
         "retombe, puis s'évapore de nouveau, indéfiniment.", "Étude de cas", "Schéma du cycle de l'eau",
         ""),
        ("5. Synthèse", "Donc, le cycle de l'eau comprend quatre grandes étapes : l'évaporation (l'eau des "
                        "mers, lacs et rivières se transforme en vapeur sous l'effet du soleil), la "
                        "condensation (la vapeur forme des nuages en altitude), les précipitations (la "
                        "pluie, la neige ou la grêle tombent au sol), et le ruissellement/l'infiltration "
                        "(l'eau retourne vers les rivières, les lacs, les nappes souterraines et la mer).",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — À partir du schéma du cycle de l'eau, explique en tes propres mots le "
                            "trajet d'une goutte d'eau, de l'océan jusqu'à ton village, puis de retour à "
                            "l'océan.",
         "Ex. 1 : réponse libre suivant les quatre étapes du cycle.", "Travail en binôme",
         "Schéma du cycle de l'eau", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite les quatre étapes du cycle de l'eau, dans l'ordre.",
         "Ex. 1 : évaporation, condensation, précipitations, ruissellement/infiltration.",
         "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Un voyage sans fin pour l'eau"),
        ("body", "L'eau de notre planète n'est jamais détruite : elle circule sans cesse entre les mers, "
                 "le ciel, le sol et les rivières. Ce grand voyage s'appelle le cycle de l'eau."),
        ("section", "2. Les quatre étapes du cycle de l'eau"),
        ("sub", "a. L'évaporation"),
        ("body", "Sous l'effet de la chaleur du soleil, l'eau des mers, des lacs et des rivières se "
                 "transforme en vapeur d'eau et monte dans le ciel."),
        ("sub", "b. La condensation"),
        ("body", "En altitude, l'air est plus froid : la vapeur d'eau se condense en minuscules "
                 "gouttelettes qui forment les nuages."),
        ("sub", "c. Les précipitations"),
        ("body", "Quand les gouttelettes des nuages deviennent trop lourdes, elles tombent au sol sous "
                 "forme de pluie, de neige ou de grêle : ce sont les précipitations."),
        ("sub", "d. Le ruissellement et l'infiltration"),
        ("body", "Une partie de l'eau tombée ruisselle à la surface du sol vers les rivières, les lacs et "
                 "la mer ; une autre partie s'infiltre dans le sol pour rejoindre les nappes souterraines. "
                 "Le cycle recommence alors sans cesse."),
        ("image", ("scripts/t4/generated_images/u8_s6_b_cycle.jpg",
                   "Le cycle de l'eau : évaporation, condensation, précipitations, ruissellement et infiltration.")),
        ("section", "3. Le cycle de l'eau à Madagascar"),
        ("body", "Ce cycle explique la saison des pluies : l'évaporation intense au-dessus de l'océan "
                 "Indien forme d'énormes nuages qui apportent la pluie nécessaire aux rizières et aux "
                 "rivières de l'île."),
        ("image", ("scripts/t4/generated_images/u8_s6_c_riziere.jpg",
                   "La pluie remplit les rizières en terrasses des Hautes Terres malgaches.")),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Cite les quatre étapes du cycle de l'eau, dans l'ordre."),
        ("Exercice 2 (5 points)", " — Explique ce qui se passe pendant l'étape de la condensation."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                   "1. L'évaporation transforme l'eau liquide en vapeur.\n"
                                   "2. Le cycle de l'eau s'arrête une fois que la pluie est tombée.\n"
                                   "3. Une partie de l'eau de pluie s'infiltre dans le sol."),
        ("Exercice 4 (4 points)", " — Explique en deux phrases pourquoi le cycle de l'eau est important "
                                   "pour l'agriculture à Madagascar."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("évaporation, condensation, précipitations, ruissellement/infiltration. "
                                "(5 pts)", False)],
        [("Ex. 2 — ", False), ("la vapeur d'eau, en altitude, se refroidit et se transforme en petites "
                                "gouttelettes qui forment les nuages. (5 pts)", False)],
        [("Ex. 3 — ", False), ("1. Vrai. (2 pts)", False)],
        [("2. Faux, le cycle continue sans cesse : l'eau s'évapore de nouveau. (2 pts)", False)],
        [("3. Vrai. (2 pts)", False)],
        [("Ex. 4 — ", False), ("réponse libre : le cycle apporte la pluie nécessaire pour arroser les "
                                "rizières et remplir les rivières utilisées par les agriculteurs. (4 pts)",
                                False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 7 (globale 60) - Revision Unite VIII
# ---------------------------------------------------------------------------
S7 = {
    "num": 7, "title": "Révision — Unité VIII : Matière", "kind": "revision",
    "theme": THEME, "ras_theme": "Les états de la matière ; l'origine de la matière ; les états de l'eau ; "
                                  "fusion/solidification ; vaporisation/condensation ; le cycle de l'eau",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "traiter un sujet complet portant sur les séances 54 à 59, puis identifier ses points "
                "faibles.",
    "support": "sujet recopié au tableau ou polycopié, cahier de brouillon.",
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Sans ouvrir votre cahier : cite les trois états physiques de la matière.",
         "R.A. : solide, liquide, gazeux.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Aujourd'hui vous traitez un sujet d'entraînement, comme un examen, mais "
                                 "sans note comptant pour la moyenne.",
         "Les élèves s'installent en condition d'examen.", "Consigne", "Tableau noir", ""),
        ("2. Présentation", "Quatre exercices, 20 points. Cahier de brouillon autorisé.",
         "Les élèves écoutent.", "Exposé", "Tableau noir", ""),
        ("3. Passation", "L'enseignant distribue ou recopie le sujet au tableau.",
         "Les élèves traitent le sujet.", "Travail individuel", "Sujet, cahier", ""),
        ("4. Correction collective", "Exercice par exercice, l'enseignant corrige au tableau avec la "
                                     "classe.",
         "Les élèves corrigent au stylo de couleur.", "Correction dirigée", "Tableau noir", ""),
        ("5. Synthèse", "Donc, les points faibles de la classe sont notés au tableau pour être repris.",
         "Les élèves notent leurs deux points faibles.", "Bilan collectif", "Cahier", ""),
        ("III. ÉVALUATION", "L'auto-évaluation tient lieu d'évaluation.",
         "Les élèves calculent leur score.", "Auto-évaluation", "Cahier", ""),
    ],
    "sujet_title": "Sujet d'entraînement — Unité VIII (Matière) — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Associe chaque état à sa propriété (2 points)\n"
         "1. solide · 2. liquide · 3. gazeux\n"
         "a. ni forme ni volume propres · b. forme propre et volume propre · c. volume propre mais pas de "
         "forme propre"),
        ("", "B. Vrai ou faux — justifie en une phrase (2 points)\n"
              "1. La glace est de l'eau à l'état solide.\n"
              "2. Le plastique existe directement dans la nature, sans transformation."),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "Un bac contient 24 glaçons. Après une heure au soleil, on constate que 18 glaçons ont "
         "complètement fondu.\n"
         "1. Quel pourcentage des glaçons a fondu ? (2 pts)\n"
         "2. Combien de glaçons restent solides ? (2 pts)\n"
         "3. Si les glaçons restants fondent à leur tour dans le même temps, combien de temps supplémentaire "
         "cela prendra-t-il au total, sachant qu'une heure suffit pour faire fondre 18 glaçons au même "
         "rythme ? (2 pts, réponse argumentée)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Le matin, une élève remarque de petites gouttes d'eau sur la vitre froide de sa fenêtre alors "
         "qu'il ne pleut pas.\n"
         "1. Comment s'appelle ce phénomène ? (1,5 pt)\n"
         "2. D'où vient l'eau de ces gouttes ? (1,5 pt)\n"
         "3. Pourquoi se forme-t-elle sur la vitre et pas ailleurs dans la pièce ? (2 pts)\n"
         "4. À quel autre phénomène du cycle de l'eau cela ressemble-t-il ? (1 pt)"),
        ("Exercice 4 — Situation (4 points)",
         "Un camarade affirme : « Une fois que la pluie est tombée, l'eau disparaît pour toujours. » "
         "Réponds-lui en deux phrases, en utilisant les notions du cycle de l'eau."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1 → b · 2 → c · 3 → a (0,5 pt par association, 0,5 pt bonus de présentation)", False)],
        [("B. (1 pt par item : 0,5 pt pour vrai/faux, 0,5 pt pour la justification)", False)],
        [("1. Vrai.", False)],
        [("2. Faux. Il est fabriqué par l'homme à partir d'autres matières premières.", False)],
        [("Renvoi : séances 54, 55, 56.", True)],
        [("Exercice 2 (6 pts)", True)],
        [("1. 18 ÷ 24 × 100 = 75 % des glaçons. (2 pts)", False)],
        [("2. 24 − 18 = 6 glaçons. (2 pts)", False)],
        [("3. Réponse argumentée : comme 18 glaçons fondent en une heure, 6 glaçons (le tiers) devraient "
          "fondre en un temps plus court, soit environ 20 minutes supplémentaires si le rythme est "
          "proportionnel. (2 pts)", False)],
        [("Renvoi : séance 57.", True)],
        [("Exercice 3 (6 pts)", True)],
        [("1. La condensation. (1,5 pt)", False)],
        [("2. De la vapeur d'eau présente dans l'air de la pièce. (1,5 pt)", False)],
        [("3. Parce que la vitre est froide : la vapeur d'eau se condense au contact d'une surface froide. "
          "(2 pts)", False)],
        [("4. À la formation des nuages (condensation dans le cycle de l'eau). (1 pt)", False)],
        [("Renvoi : séances 58, 59.", True)],
        [("Exercice 4 (4 pts)", True)],
        [("Réponse libre : l'eau ne disparaît pas, elle s'infiltre dans le sol ou ruisselle vers les "
          "rivières et la mer, puis s'évapore de nouveau : le cycle continue. (4 pts)", False)],
        [("Renvoi : séance 59.", True)],
        [("Repères de score : 16-20 acquis · 11-15 à consolider · 6-10 fragile · 0-5 reprendre les "
          "séances 54 à 59.", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 8 (globale 61) - Examen Unite VIII
# ---------------------------------------------------------------------------
S8 = {
    "num": 8, "title": "Sujet d'examen ST T4 — Unité VIII : Matière", "kind": "exam",
    "theme": THEME, "ras_theme": "Les états de la matière ; l'origine de la matière ; les états de l'eau ; "
                                  "fusion/solidification ; vaporisation/condensation ; le cycle de l'eau",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "évaluer la maîtrise des notions des séances 54 à 59 — les états et l'origine de la matière, "
                "les changements d'état de l'eau et le cycle de l'eau.",
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
    "sujet_title": "SUJET D'EXAMEN — Unité VIII : Matière — Durée : ____________ — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Complète avec le mot exact (2 points)\n"
         "1. Le passage de l'état solide à l'état liquide s'appelle la ……………… .\n"
         "2. Le passage de l'état liquide à l'état gazeux s'appelle la ……………… .\n"
         "3. Le passage de l'état gazeux à l'état liquide s'appelle la ……………… .\n"
         "4. Les gouttes d'eau qui tombent des nuages s'appellent les ……………… ."),
        ("", "B. QCM — une seule réponse exacte (2 points)\n"
              "1. Un solide a : A. une forme propre B. la forme du récipient C. ni forme ni volume "
              "propres\n"
              "2. L'eau gèle à : A. 0 °C B. 20 °C C. 100 °C\n"
              "3. La laine est une matière d'origine : A. minérale B. végétale C. animale\n"
              "4. Dans le cycle de l'eau, après l'évaporation vient : A. le ruissellement B. la "
              "condensation C. la solidification"),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "Une classe de 32 élèves réalise une expérience de fusion : chaque élève fait fondre un glaçon "
         "de 20 grammes. Après l'expérience, on récupère en tout 560 grammes d'eau liquide.\n"
         "1. Quelle est la masse totale de glace fondue par toute la classe, avant fusion ? (2 pts)\n"
         "2. Cette masse d'eau récupérée (560 g) correspond-elle à la masse de glace attendue ? Justifie "
         "par un calcul. (2 pts)\n"
         "3. Si chaque glaçon fond en moyenne en 15 minutes, combien de temps, au minimum, dure "
         "l'expérience complète pour un élève ? (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Sur les Hautes Terres malgaches, un fort ensoleillement au-dessus de gros nuages est suivi, "
         "l'après-midi, d'une pluie abondante sur les rizières.\n"
         "1. Quel phénomène a permis la formation de ces nuages ? (1,5 pt)\n"
         "2. Comment appelle-t-on la pluie qui tombe au sol ? (1,5 pt)\n"
         "3. Que devient une partie de cette eau de pluie une fois au sol ? (2 pts)\n"
         "4. Pourquoi ce phénomène se répète-t-il régulièrement ? (1 pt)"),
        ("Exercice 4 — Situation (4 points)",
         "Un camarade affirme : « L'eau et la glace sont deux matières différentes. » Réponds-lui en deux "
         "phrases, en t'appuyant sur ce que tu as appris sur les états de la matière."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. fusion · 2. vaporisation · 3. condensation · 4. précipitations (0,5 pt par réponse)",
          False)],
        [("B. 1. A · 2. A · 3. C · 4. B (0,5 pt par item)", False)],
        [("Renvoi : séances 54, 56, 55, 59.", True)],
        [("Exercice 2 (6 pts)", True)],
        [("1. 32 × 20 g = 640 g de glace au départ. (2 pts)", False)],
        [("2. Non : 560 g < 640 g ; une partie de l'eau a pu s'évaporer ou rester non mesurée pendant "
          "l'expérience. (2 pts)", False)],
        [("3. Au moins 15 minutes (un seul glaçon par élève). (2 pts)", False)],
        [("Renvoi : séance 57.", True)],
        [("Exercice 3 (6 pts)", True)],
        [("1. L'évaporation (de l'eau des sols, plantes, cours d'eau) suivie de la condensation en nuages. "
          "(1,5 pt)", False)],
        [("2. Une précipitation. (1,5 pt)", False)],
        [("3. Elle ruisselle vers les rivières ou s'infiltre dans le sol. (2 pts)", False)],
        [("4. Parce que le cycle de l'eau est permanent : l'eau s'évapore de nouveau après chaque pluie. "
          "(1 pt)", False)],
        [("Renvoi : séance 59.", True)],
        [("Exercice 4 (4 pts)", True)],
        [("Réponse libre : l'eau et la glace sont en réalité la même matière (l'eau), seulement sous deux "
          "états physiques différents (liquide et solide). (4 pts)", False)],
        [("Renvoi : séances 54, 56.", True)],
        [("TOTAL : 20 points", True)],
    ],
}
