# -*- coding: utf-8 -*-
"""Content for UNITE VII - Geologie (seances 48-53).
Grounded in PE T4 (RAS: Analyser un echantillon de sol ; proposer des moyens
de lutte contre la degradation du sol).
"""

THEME = "Géologie"
RAS_THEME = "Analyser un échantillon de sol ; proposer des moyens de lutte contre la dégradation du sol"
VALEURS = "persévérance, responsabilité"

# ---------------------------------------------------------------------------
# SEANCE 1 (globale 48) - Les differentes couches du sol
# ---------------------------------------------------------------------------
S1 = {
    "num": 1, "title": "Les différentes couches du sol",
    "theme": THEME, "ras_theme": RAS_THEME, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "décrire les différentes couches (horizons) du sol à partir d'une coupe ou d'un échantillon.",
    "support": "bâton ou petite pelle, image d'une coupe de sol, échantillon de terre si possible.",
    "cover_image": ("scripts/t4/generated_images/u7_s1_a_sol.jpg",
                     "Un enfant observe la terre au fond d'un petit trou creusé dans la cour de l'école."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Qu'y a-t-il sous nos pieds quand nous marchons dans un champ ou dans la cour ?",
         "R.A. : le sol, la terre.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Creusons un petit trou avec un bâton dans la cour. Que remarquez-vous en "
                                 "regardant les parois du trou ?",
         "R.A. : la terre n'a pas la même couleur ni le même aspect partout : plus sombre et meuble en "
         "haut, plus claire et dure en profondeur.", "Expérimentation dirigée", "Bâton, petite pelle", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les différentes couches du sol ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez cette coupe du sol : combien de couches (horizons) distinguez-vous, et "
                            "en quoi diffèrent-elles ?",
         "R.A. : on distingue plusieurs couches superposées, de couleur, d'épaisseur et de texture "
         "différentes.", "Observation dirigée", "Image d'une coupe de sol", ""),
        ("4. Analyse", "À votre avis, pourquoi la couche du dessus est-elle plus sombre et plus riche que "
                        "celles du dessous ?",
         "R.A. : la couche du dessus contient beaucoup de matière organique en décomposition (feuilles "
         "mortes, restes d'animaux), ce qui la rend foncée et fertile ; en profondeur, il y a moins de "
         "matière organique, donc c'est plus clair.", "Étude de cas", "Image d'une coupe de sol", ""),
        ("5. Synthèse", "Donc, le sol est formé de plusieurs couches appelées horizons : la litière (débris "
                        "végétaux en surface), la terre arable (couche fertile où poussent les racines), le "
                        "sous-sol (couche plus pauvre) et la roche mère (roche dure d'origine, tout en bas).",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Dessine une coupe simple du sol avec ses quatre couches et nomme "
                            "chacune d'elles.",
         "Ex. 1 : les élèves dessinent litière, terre arable, sous-sol, roche mère de haut en bas.",
         "Travail individuel", "Cahier, crayons de couleur", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite les quatre couches du sol, de la surface vers la profondeur.",
         "Ex. 1 : litière, terre arable, sous-sol, roche mère.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Qu'est-ce que le sol ?"),
        ("body", "Le sol est la couche superficielle de la terre sur laquelle poussent les plantes, marchent "
                 "les animaux et se construisent les habitations. Il n'est pas uniforme : quand on creuse, "
                 "on découvre qu'il est formé de plusieurs couches superposées, appelées horizons."),
        ("section", "2. Les quatre couches (horizons) du sol"),
        ("sub", "a. La litière"),
        ("body", "C'est la couche la plus superficielle, composée de feuilles mortes, de brindilles et de "
                 "débris d'animaux qui commencent tout juste à se décomposer."),
        ("sub", "b. La terre arable (couche arable)"),
        ("body", "Juste en dessous, cette couche est sombre, meuble et riche en humus (matière organique "
                 "décomposée). C'est dans la terre arable que les racines des plantes puisent l'eau et les "
                 "éléments nutritifs : c'est la couche la plus fertile."),
        ("image", ("scripts/t4/generated_images/u7_s1_b_couches.jpg",
                   "Les quatre couches (horizons) du sol : litière, terre arable, sous-sol et roche mère.")),
        ("sub", "c. Le sous-sol"),
        ("body", "Plus clair et plus compact que la terre arable, le sous-sol contient peu de matière "
                 "organique. Seules les racines des grands arbres y descendent."),
        ("sub", "d. La roche mère"),
        ("body", "Tout en bas, c'est la roche dure et compacte à partir de laquelle le sol s'est formé, très "
                 "lentement, au fil des siècles, par l'action de l'eau, du vent et de la chaleur."),
        ("section", "3. Analyser un échantillon de sol"),
        ("body", "Pour connaître la qualité d'un terrain, on peut observer la profondeur et la couleur de "
                 "sa couche arable : plus elle est épaisse et foncée, plus le sol est fertile. C'est ce que "
                 "font les agriculteurs avant de choisir où cultiver."),
        ("image", ("scripts/t4/generated_images/u7_s1_c_analyse.jpg",
                   "Des élèves examinent un échantillon de terre à la loupe pour observer ses couches et sa texture.")),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Cite les quatre couches (horizons) du sol, de la surface vers la profondeur."),
        ("Exercice 2 (5 points)", " — Pourquoi la terre arable est-elle plus fertile que le sous-sol ?"),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                   "1. La litière est la couche la plus profonde du sol.\n"
                                   "2. La roche mère se trouve tout en bas du sol.\n"
                                   "3. Toutes les couches du sol ont la même couleur."),
        ("Exercice 4 (4 points)", " — Explique en une phrase comment un agriculteur peut juger, à l'œil, si "
                                   "un terrain est fertile."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("litière, terre arable, sous-sol, roche mère. (5 pts)", False)],
        [("Ex. 2 — ", False), ("parce qu'elle contient beaucoup de matière organique (humus) et nourrit les "
                                "racines des plantes. (5 pts)", False)],
        [("Ex. 3 — ", False), ("1. Faux, la litière est la couche la plus superficielle. (2 pts)", False)],
        [("2. Vrai. (2 pts)", False)],
        [("3. Faux, chaque couche a sa propre couleur et texture. (2 pts)", False)],
        [("Ex. 4 — ", False), ("en observant l'épaisseur et la couleur (foncée) de la couche arable : plus "
                                "elle est épaisse et sombre, plus le sol est fertile. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 2 (globale 49) - Les constituants du sol
# ---------------------------------------------------------------------------
S2 = {
    "num": 2, "title": "Les constituants du sol",
    "theme": THEME, "ras_theme": RAS_THEME, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "identifier les constituants du sol (éléments minéraux, matière organique, eau, air, êtres vivants).",
    "support": "bocal transparent, terre, eau, bâton pour mélanger, loupe.",
    "cover_image": ("scripts/t4/generated_images/u7_s2_a_poignee.jpg",
                     "Une main tient une poignée de terre riche et sombre, prête à être examinée."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite les quatre couches (horizons) du sol vues à la séance précédente.",
         "R.A. : litière, terre arable, sous-sol, roche mère.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Remplissons un bocal transparent avec de la terre et de l'eau, mélangeons "
                                 "bien, puis laissons reposer quelques minutes. Que va-t-il se passer, selon "
                                 "vous ?",
         "R.A. : hypothèses libres des élèves.", "Expérimentation dirigée", "Bocal, terre, eau", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les constituants du sol ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Après quelques minutes, observez le bocal : que voyez-vous se former ?",
         "R.A. : plusieurs couches se forment dans l'eau : du sable au fond, puis des particules plus fines, "
         "et de l'eau trouble avec des débris flottants au-dessus.", "Observation dirigée",
         "Bocal après repos", ""),
        ("4. Analyse", "À votre avis, pourquoi les éléments du sol se séparent-ils en couches dans le "
                        "bocal ?",
         "R.A. : les éléments les plus lourds (le sable) tombent d'abord au fond, puis les particules plus "
         "fines (le limon, l'argile) se déposent plus lentement ; les débris de plantes, plus légers, "
         "flottent à la surface.", "Étude de cas", "Bocal", ""),
        ("5. Synthèse", "Donc, le sol est composé de plusieurs éléments : des éléments minéraux (sable, "
                        "limon, argile, cailloux), de la matière organique (l'humus, restes de plantes et "
                        "d'animaux), de l'eau et de l'air (dans les espaces entre les particules), et des "
                        "êtres vivants (vers de terre, insectes, micro-organismes) qui aèrent et enrichissent "
                        "le sol.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — À partir de l'expérience du bocal, explique comment reconnaître si un "
                            "sol contient beaucoup de sable ou beaucoup d'argile.",
         "Ex. 1 : un sol avec beaucoup de sable forme une couche épaisse au fond du bocal ; un sol avec "
         "beaucoup d'argile laisse l'eau trouble plus longtemps.", "Travail en binôme", "Bocal, cahier", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite quatre constituants du sol.",
         "Ex. 1 : éléments minéraux, matière organique (humus), eau et air, êtres vivants.",
         "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. L'expérience du bocal"),
        ("body", "Quand on mélange de la terre et de l'eau dans un bocal, puis qu'on laisse reposer, les "
                 "éléments du sol se séparent en couches selon leur poids : c'est un moyen simple d'observer "
                 "les constituants d'un échantillon de sol."),
        ("image", ("scripts/t4/generated_images/u7_s2_c_sedimentation.jpg",
                   "Expérience de sédimentation : dans un bocal, les constituants du sol se séparent en "
                   "couches selon leur poids.")),
        ("section", "2. Les constituants du sol"),
        ("sub", "a. Les éléments minéraux"),
        ("body", [("Des particules de roche de tailles différentes donnent au sol sa texture : ", False),
                  ("le sable, le limon, l'argile et les cailloux.", True)]),
        ("image", ("scripts/t4/generated_images/u7_s2_b_constituants.jpg",
                   "Les principaux constituants du sol : éléments minéraux, humus, eau et air, êtres vivants.")),
        ("sub", "b. La matière organique (l'humus)"),
        ("body", "L'humus provient de la décomposition des feuilles mortes, des racines et des restes "
                 "d'animaux. Il rend le sol sombre et fertile."),
        ("sub", "c. L'eau et l'air"),
        ("body", "Entre les particules du sol se trouvent de petits espaces (les pores) remplis d'eau et "
                 "d'air, indispensables aux racines des plantes et aux êtres vivants du sol."),
        ("sub", "d. Les êtres vivants du sol"),
        ("body", "Vers de terre, insectes, champignons et micro-organismes vivent dans le sol : en le "
                 "creusant et en décomposant la matière organique, ils l'aèrent et l'enrichissent."),
        ("section", "3. Pourquoi connaître la composition du sol ?"),
        ("body", "Connaître les constituants d'un sol permet de savoir s'il convient à telle ou telle "
                 "culture : un sol trop sableux retient mal l'eau, un sol trop argileux se draine mal, tandis "
                 "qu'un sol équilibré et riche en humus est le plus fertile."),
        ("sub", "Le test du boudin : reconnaître un sol sans matériel"),
        ("body", "Prends une poignée de terre légèrement humide et malaxe-la dans la main : si elle ne "
                 "forme pas de boule et s'effrite, le sol est surtout sableux ; si elle forme un boudin qui "
                 "se casse quand on le courbe, le sol est limoneux ou modérément argileux ; si le boudin se "
                 "courbe facilement en anneau sans se casser, le sol est riche en argile (sol argileux)."),
        ("section", "4. Trois grands types de sols"),
        ("body", "Sol sablonneux : l'eau le traverse très vite, il se dessèche rapidement et contient peu "
                 "d'éléments nutritifs. Sol argileux : il retient très bien l'eau, devient lourd et collant "
                 "sous la pluie, et peut se craqueler en période sèche. Sol humifère (terre végétale) : "
                 "sombre, riche en humus, il retient bien l'eau et offre la meilleure fertilité pour les "
                 "cultures."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Cite quatre constituants du sol."),
        ("Exercice 2 (5 points)", " — Que se passe-t-il quand on mélange de la terre et de l'eau dans un "
                                   "bocal, puis qu'on laisse reposer ?"),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                   "1. L'humus provient de la décomposition de matière organique.\n"
                                   "2. Le sol ne contient jamais d'air ni d'eau.\n"
                                   "3. Les vers de terre aident à aérer le sol."),
        ("Exercice 4 (4 points)", " — Explique en une phrase pourquoi un sol riche en humus est plus "
                                   "fertile qu'un sol qui n'en contient pas."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("éléments minéraux (sable, limon, argile, cailloux), matière organique "
                                "(humus), eau et air, êtres vivants — quatre au choix. (5 pts)", False)],
        [("Ex. 2 — ", False), ("les éléments se séparent en couches selon leur poids : le sable tombe au "
                                "fond, les particules fines se déposent plus lentement, les débris flottent. "
                                "(5 pts)", False)],
        [("Ex. 3 — ", False), ("1. Vrai. (2 pts)", False)],
        [("2. Faux, il contient de l'eau et de l'air dans ses petits espaces. (2 pts)", False)],
        [("3. Vrai. (2 pts)", False)],
        [("Ex. 4 — ", False), ("parce que l'humus apporte les éléments nutritifs dont les plantes ont besoin "
                                "pour bien pousser. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 3 (globale 50) - Les types de degradation du sol
# ---------------------------------------------------------------------------
S3 = {
    "num": 3, "title": "Les types de dégradation du sol",
    "theme": THEME, "ras_theme": RAS_THEME, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "identifier les principaux types et causes de dégradation du sol.",
    "support": "images de sols dégradés (lavaka, terrain brûlé), récit ou exemple local.",
    "cover_image": ("scripts/t4/generated_images/u7_s3_a_lavaka.jpg",
                     "Un lavaka : un grand ravin creusé par l'érosion dans une colline des Hautes Terres malgaches."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite quatre constituants du sol vus à la séance précédente.",
         "R.A. : éléments minéraux, matière organique, eau et air, êtres vivants.", "Questionnement oral",
         "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Regardez cette image d'un grand ravin creusé dans une colline. Qu'est-il "
                                 "arrivé à ce sol ?",
         "R.A. : le sol a été emporté et creusé, probablement par la pluie ; c'est un signe de dégradation du "
         "sol.", "Observation dirigée", "Image d'un lavaka", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les types de dégradation du sol ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez ces images de sols abîmés : un versant sans arbres, un terrain brûlé, "
                            "un champ surpâturé, un terrain couvert de déchets. Qu'ont-ils en commun ?",
         "R.A. : dans chaque cas, le sol est nu, appauvri ou abîmé et ne peut plus bien nourrir les "
         "plantes.", "Observation dirigée", "Images de sols dégradés", ""),
        ("4. Analyse", "À votre avis, quelle est la cause de la dégradation dans chaque image ?",
         "R.A. : la déforestation laisse le sol nu et facilement emporté par l'eau (érosion) ; les feux de "
         "brousse (tavy) détruisent la matière organique ; le surpâturage tasse et met le sol à nu ; les "
         "déchets et produits chimiques polluent le sol.", "Étude de cas", "Images de sols dégradés", ""),
        ("5. Synthèse", "Donc, plusieurs types de dégradation menacent le sol : l'érosion (par l'eau ou le "
                        "vent, favorisée par la déforestation), l'appauvrissement par les feux de brousse "
                        "(tavy), le tassement par le surpâturage, et la pollution du sol par les déchets et "
                        "les produits chimiques. À Madagascar, l'érosion peut créer de grands ravins appelés "
                        "« lavaka ».",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Donne un exemple de dégradation du sol que tu as déjà observé dans ta "
                            "région, et explique sa cause probable.",
         "Ex. 1 : réponse libre argumentée.", "Travail individuel", "Cahier", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite trois causes de dégradation du sol.",
         "Ex. 1 : déforestation/érosion, feux de brousse, surpâturage, pollution — trois au choix.",
         "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Qu'est-ce que la dégradation du sol ?"),
        ("body", "Un sol est dégradé quand il perd sa fertilité, sa structure ou sa couche arable : il "
                 "devient alors moins capable de nourrir les plantes et les cultures."),
        ("section", "2. Les principales causes de dégradation du sol"),
        ("sub", "a. La déforestation et l'érosion"),
        ("body", "Les racines des arbres et des plantes retiennent le sol. Quand on coupe la forêt, la "
                 "pluie et le vent emportent facilement la terre nue : c'est l'érosion. À Madagascar, "
                 "l'érosion peut creuser de grands ravins rouges appelés « lavaka », qui peuvent atteindre "
                 "plusieurs dizaines de mètres de profondeur."),
        ("sub", "b. Les feux de brousse (le tavy)"),
        ("body", "Brûler la végétation pour préparer un champ (le tavy) détruit la matière organique et les "
                 "êtres vivants du sol, qui devient rapidement pauvre et fragile."),
        ("sub", "c. Le surpâturage"),
        ("body", "Quand trop d'animaux paissent longtemps au même endroit, ils piétinent et tassent le sol, "
                 "qui devient dur, à nu et facile à éroder."),
        ("sub", "d. La pollution du sol"),
        ("body", "Les déchets, les plastiques et les produits chimiques (pesticides, engrais mal utilisés) "
                 "peuvent polluer le sol et le rendre impropre à la culture."),
        ("image", ("scripts/t4/generated_images/u7_s3_b_causes.jpg",
                   "Quatre causes de dégradation du sol : déforestation, feux de brousse, surpâturage, pollution.")),
        ("section", "3. Les conséquences de la dégradation du sol"),
        ("body", "Un sol dégradé donne de moins bonnes récoltes, s'érode plus vite et peut ensabler les "
                 "rizières et les cours d'eau en aval. Protéger le sol, c'est donc protéger l'agriculture de "
                 "toute une région."),
        ("image", ("scripts/t4/generated_images/u7_s3_c_erosion.jpg",
                   "La pluie emporte la terre nue d'un versant déboisé : c'est l'érosion du sol.")),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Cite trois causes de dégradation du sol."),
        ("Exercice 2 (5 points)", " — Qu'est-ce qu'un « lavaka » et comment se forme-t-il ?"),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                   "1. La déforestation favorise l'érosion du sol.\n"
                                   "2. Les feux de brousse enrichissent durablement le sol.\n"
                                   "3. Le surpâturage peut tasser et mettre le sol à nu."),
        ("Exercice 4 (4 points)", " — Explique en une phrase pourquoi un sol dégradé donne de moins bonnes "
                                   "récoltes."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("déforestation/érosion, feux de brousse (tavy), surpâturage, pollution — "
                                "trois au choix. (5 pts)", False)],
        [("Ex. 2 — ", False), ("un lavaka est un grand ravin creusé par l'érosion, souvent formé quand la "
                                "déforestation laisse le sol nu face à la pluie. (5 pts)", False)],
        [("Ex. 3 — ", False), ("1. Vrai. (2 pts)", False)],
        [("2. Faux, ils détruisent la matière organique et appauvrissent le sol. (2 pts)", False)],
        [("3. Vrai. (2 pts)", False)],
        [("Ex. 4 — ", False), ("parce qu'un sol dégradé a perdu sa fertilité (sa matière organique, sa "
                                "structure) et nourrit donc moins bien les plantes. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 4 (globale 51) - Lutte contre la degradation du sol
# ---------------------------------------------------------------------------
S4 = {
    "num": 4, "title": "Lutte contre la dégradation du sol",
    "theme": THEME, "ras_theme": RAS_THEME, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "proposer et expliquer des moyens de lutte contre la dégradation du sol.",
    "support": "images de techniques de protection du sol, graines ou jeunes plants si possible.",
    "cover_image": ("scripts/t4/generated_images/u7_s4_a_reboisement.jpg",
                     "Des élèves plantent de jeunes arbres sur un versant pour protéger le sol de l'érosion."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite deux causes de dégradation du sol vues à la séance précédente.",
         "R.A. : la déforestation/l'érosion, les feux de brousse, le surpâturage ou la pollution — deux au "
         "choix.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Que peut-on faire pour empêcher qu'une colline déboisée ne se transforme "
                                 "en lavaka ?",
         "R.A. : hypothèses des élèves, par exemple replanter des arbres.", "Questionnement oral",
         "Tableau noir", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Lutte contre la dégradation du sol ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez ces images de techniques de protection du sol : que fait-on dans "
                            "chaque cas ?",
         "R.A. : on plante des arbres, on cultive en terrasses, on installe des haies, on fait tourner les "
         "cultures.", "Observation dirigée", "Images de techniques", ""),
        ("4. Analyse", "À votre avis, comment chacune de ces techniques protège-t-elle le sol ?",
         "R.A. : les racines des arbres retiennent la terre ; les terrasses et courbes de niveau ralentissent "
         "l'eau de pluie sur les pentes ; les haies vives freinent le vent et l'eau de ruissellement ; la "
         "rotation des cultures et le compost préservent la fertilité du sol.", "Étude de cas",
         "Images de techniques", ""),
        ("5. Synthèse", "Donc, on lutte contre la dégradation du sol par : le reboisement, les cultures en "
                        "terrasses ou en courbes de niveau sur les pentes, les haies vives (brise-vent), la "
                        "rotation des cultures et le compost, et la lutte contre les feux de brousse.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Propose un plan d'action simple pour protéger un terrain proche de "
                            "l'école contre l'érosion.",
         "Ex. 1 : réponse libre, par exemple planter des arbres ou des herbes sur la pente, créer une petite "
         "haie.", "Travail en groupe", "Cahier", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite trois moyens de lutte contre la dégradation du sol.",
         "Ex. 1 : reboisement, terrasses/courbes de niveau, haies vives, rotation des cultures — trois au "
         "choix.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Pourquoi agir pour protéger le sol ?"),
        ("body", "Le sol met des siècles à se former mais peut être dégradé en quelques années seulement. "
                 "Le protéger, c'est garantir de bonnes récoltes pour aujourd'hui et pour les générations "
                 "futures."),
        ("section", "2. Les moyens de lutte contre la dégradation du sol"),
        ("sub", "a. Le reboisement"),
        ("body", "Planter des arbres sur les versants dénudés permet aux racines de retenir la terre et de "
                 "réduire l'érosion."),
        ("sub", "b. Les terrasses et les courbes de niveau"),
        ("body", "Sur les pentes, cultiver en terrasses ou en suivant les courbes de niveau ralentit "
                 "l'écoulement de l'eau de pluie et empêche la terre d'être emportée."),
        ("sub", "c. Les haies vives (brise-vent)"),
        ("body", "Une rangée d'arbustes ou de plantes plantée en bordure de champ freine le vent et l'eau de "
                 "ruissellement, protégeant ainsi le sol voisin."),
        ("sub", "d. La rotation des cultures et le compost"),
        ("body", "Changer de culture chaque saison et enrichir le sol avec du compost (matière organique "
                 "décomposée) permettent de maintenir sa fertilité sur le long terme."),
        ("image", ("scripts/t4/generated_images/u7_s4_b_techniques.jpg",
                   "Quatre moyens de lutte contre la dégradation du sol : reboisement, terrasses, haies vives, rotation des cultures.")),
        ("sub", "e. Le paillage et le zéro labour"),
        ("body", "Le paillage consiste à recouvrir la terre d'herbes fauchées ou de résidus de récolte : "
                 "cela protège le sol contre le choc des gouttes de pluie, garde l'humidité et nourrit la "
                 "terre en se décomposant en humus. La technique du zéro labour (semis direct) consiste à "
                 "planter sans retourner la terre, afin de ne pas détruire la structure naturelle du sol."),
        ("sub", "f. La lutte contre les feux de brousse"),
        ("body", "Éviter le tavy et sensibiliser la communauté aux dangers des feux de brousse permet de "
                 "préserver la matière organique et la fertilité du sol."),
        ("section", "3. L'engagement de chacun"),
        ("body", "Élèves, agriculteurs et communauté peuvent agir ensemble : planter des arbres, entretenir "
                 "des haies, éviter les feux de brousse et signaler les zones menacées d'érosion. Protéger le "
                 "sol est l'affaire de tous."),
        ("image", ("scripts/t4/generated_images/u7_s4_c_terrasses.jpg",
                   "Des rizières en terrasses sur les collines des Hautes Terres malgaches limitent l'érosion du sol.")),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Cite trois moyens de lutte contre la dégradation du sol."),
        ("Exercice 2 (5 points)", " — Explique comment les terrasses ou les courbes de niveau protègent le "
                                   "sol sur une pente."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                   "1. Le reboisement aide à retenir la terre sur les pentes.\n"
                                   "2. La rotation des cultures épuise plus vite le sol.\n"
                                   "3. Les haies vives freinent le vent et l'eau de ruissellement."),
        ("Exercice 4 (4 points)", " — Propose, en une phrase, une action que tu peux mener à ton échelle "
                                   "pour protéger le sol autour de ton école ou de ton village."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("reboisement, terrasses/courbes de niveau, haies vives, rotation des cultures "
                                "et compost, lutte contre les feux de brousse — trois au choix. (5 pts)", False)],
        [("Ex. 2 — ", False), ("elles ralentissent l'écoulement de l'eau de pluie sur la pente, ce qui "
                                "empêche la terre d'être emportée. (5 pts)", False)],
        [("Ex. 3 — ", False), ("1. Vrai. (2 pts)", False)],
        [("2. Faux, elle aide au contraire à préserver la fertilité du sol. (2 pts)", False)],
        [("3. Vrai. (2 pts)", False)],
        [("Ex. 4 — ", False), ("réponse libre : par exemple planter un arbre, créer une petite haie, éviter "
                                "de brûler la végétation. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 5 (globale 52) - Revision Unite VII
# ---------------------------------------------------------------------------
S5 = {
    "num": 5, "title": "Révision — Unité VII : Géologie", "kind": "revision",
    "cover_image": ("scripts/t4/generated_images/u7_bilan_r1.jpg",
                     "Bilan de l'Unité VII : les couches du sol et la lutte contre l'érosion."),
    "theme": THEME, "ras_theme": "Les couches du sol ; les constituants du sol ; les types de dégradation du "
                                  "sol ; la lutte contre la dégradation du sol",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "traiter un sujet complet portant sur les séances 48 à 51, puis identifier ses points "
                "faibles.",
    "support": "sujet recopié au tableau ou polycopié, cahier de brouillon.",
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Sans ouvrir votre cahier : cite deux couches (horizons) du sol.",
         "R.A. : litière, terre arable, sous-sol ou roche mère — deux au choix.", "Questionnement oral",
         "—", ""),
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
    "sujet_title": "Sujet d'entraînement — Unité VII (Géologie) — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Associe chaque terme à sa définition (2 points)\n"
         "1. litière · 2. terre arable · 3. sous-sol · 4. roche mère\n"
         "a. couche fertile riche en humus · b. roche dure d'origine, tout en bas · c. débris végétaux en "
         "surface · d. couche pauvre sous la terre arable"),
        ("", "B. Vrai ou faux — justifie en une phrase (2 points)\n"
              "1. Le sol contient de l'eau et de l'air.\n"
              "2. Les feux de brousse (tavy) enrichissent durablement le sol."),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "Un village possède 60 hectares de terrain agricole. Une étude montre que 18 hectares sont touchés "
         "par l'érosion et que, parmi eux, 6 hectares présentent déjà un lavaka.\n"
         "1. Quel pourcentage du terrain est touché par l'érosion ? (2 pts)\n"
         "2. Combien d'hectares sont érodés mais sans lavaka ? (2 pts)\n"
         "3. Quel pourcentage du terrain n'est pas touché par l'érosion ? (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Sur une colline des Hautes Terres, tous les arbres ont été coupés pour faire du bois de chauffe. "
         "Deux saisons des pluies plus tard, un grand ravin rouge s'est formé sur le versant.\n"
         "1. Comment s'appelle ce type de ravin ? (1,5 pt)\n"
         "2. Quelle est la cause principale de sa formation ? (1,5 pt)\n"
         "3. Que faudrait-il faire dès maintenant pour limiter les dégâts ? (2 pts)\n"
         "4. Que faudrait-il éviter de refaire à l'avenir ? (1 pt)"),
        ("Exercice 4 — Situation (4 points)",
         "Un camarade affirme : « Le sol se reforme vite, ce n'est pas grave de le laisser se dégrader. » "
         "Réponds-lui en deux phrases, avec des arguments issus de la leçon."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1 → c · 2 → a · 3 → d · 4 → b (0,5 pt par association)", False)],
        [("B. (1 pt par item : 0,5 pt pour vrai/faux, 0,5 pt pour la justification)", False)],
        [("1. Vrai.", False)],
        [("2. Faux. Ils détruisent la matière organique et appauvrissent le sol.", False)],
        [("Renvoi : séances 48, 49, 50.", True)],
        [("Exercice 2 (6 pts)", True)],
        [("1. 18 ÷ 60 × 100 = 30 % du terrain. (2 pts)", False)],
        [("2. 18 − 6 = 12 hectares. (2 pts)", False)],
        [("3. (60 − 18) ÷ 60 × 100 = 70 % du terrain. (2 pts)", False)],
        [("Renvoi : séance 50.", True)],
        [("Exercice 3 (6 pts)", True)],
        [("1. Un lavaka. (1,5 pt)", False)],
        [("2. La déforestation, qui a laissé le sol nu face à la pluie (érosion). (1,5 pt)", False)],
        [("3. Reboiser le versant, éviter d'aggraver le ravin, en parler aux autorités locales. (2 pts)",
          False)],
        [("4. Couper tous les arbres d'un versant sans replanter. (1 pt)", False)],
        [("Renvoi : séances 50, 51.", True)],
        [("Exercice 4 (4 pts)", True)],
        [("Réponse libre : le sol met en réalité des siècles à se former mais peut être dégradé en "
          "quelques années ; une fois la fertilité perdue, les récoltes diminuent pour longtemps. (4 pts)",
          False)],
        [("Renvoi : séances 48, 50, 51.", True)],
        [("Repères de score : 16-20 acquis · 11-15 à consolider · 6-10 fragile · 0-5 reprendre les "
          "séances 48 à 51.", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 6 (globale 53) - Examen Unite VII
# ---------------------------------------------------------------------------
S6 = {
    "num": 6, "title": "Sujet d'examen ST T4 — Unité VII : Géologie", "kind": "exam",
    "cover_image": ("scripts/t4/generated_images/u7_bilan_e1.jpg",
                     "Sujet d'examen, Unité VII : Géologie."),
    "theme": THEME, "ras_theme": "Les couches du sol ; les constituants du sol ; les types de dégradation du "
                                  "sol ; la lutte contre la dégradation du sol",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "évaluer la maîtrise des notions des séances 48 à 51 — les couches, les constituants, la "
                "dégradation et la protection du sol.",
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
    "sujet_title": "SUJET D'EXAMEN — Unité VII : Géologie — Durée : ____________ — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Complète avec le mot exact (2 points)\n"
         "1. La couche du sol la plus fertile, riche en humus, s'appelle la ……………… .\n"
         "2. La roche dure d'origine, tout en bas du sol, s'appelle la ……………… .\n"
         "3. Un grand ravin creusé par l'érosion, fréquent à Madagascar, s'appelle un ……………… .\n"
         "4. Planter des arbres sur un versant pour lutter contre l'érosion s'appelle le ……………… ."),
        ("", "B. QCM — une seule réponse exacte (2 points)\n"
              "1. La couche la plus superficielle du sol, faite de débris végétaux, est : A. la litière "
              "B. le sous-sol C. la roche mère\n"
              "2. Brûler la végétation pour préparer un champ s'appelle : A. le reboisement B. le tavy "
              "C. la rotation des cultures\n"
              "3. Sur une pente, cultiver en terrasses permet surtout de : A. accélérer l'eau de pluie "
              "B. ralentir l'eau de pluie C. assécher le sol\n"
              "4. Le surpâturage dégrade le sol car les animaux : A. l'enrichissent en humus B. le "
              "tassent et le mettent à nu C. le protègent du vent"),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "Une association distribue 500 jeunes arbres à planter sur un versant menacé d'érosion. Après la "
         "plantation, une visite montre que 425 arbres ont survécu.\n"
         "1. Combien d'arbres ne sont pas survécus ? (2 pts)\n"
         "2. Quel pourcentage des arbres a survécu ? (2 pts)\n"
         "3. Si l'on veut atteindre 90 % de survie en replantant les arbres manquants, combien de "
         "nouveaux arbres faut-il planter au minimum ? (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Un agriculteur cultive toujours la même plante, année après année, sur le même champ, sans "
         "jamais ajouter de compost. Après quelques années, ses récoltes diminuent nettement.\n"
         "1. Quel phénomène explique la baisse des récoltes ? (1,5 pt)\n"
         "2. Quelles sont les deux pratiques recommandées pour éviter ce problème ? (2,5 pts)\n"
         "3. Pourquoi ces pratiques aident-elles à maintenir la fertilité du sol ? (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Un camarade affirme : « Protéger le sol, c'est seulement l'affaire des agriculteurs, pas des "
         "élèves. » Réponds-lui en donnant deux actions concrètes qu'un élève peut mener pour protéger le "
         "sol."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. terre arable · 2. roche mère · 3. lavaka · 4. reboisement (0,5 pt par réponse)", False)],
        [("B. 1. A · 2. B · 3. B · 4. B (0,5 pt par item)", False)],
        [("Renvoi : séances 48, 49, 50, 51.", True)],
        [("Exercice 2 (6 pts)", True)],
        [("1. 500 − 425 = 75 arbres. (2 pts)", False)],
        [("2. 425 ÷ 500 × 100 = 85 % des arbres. (2 pts)", False)],
        [("3. 90 % de 500 = 450 arbres nécessaires ; il faut donc planter au moins 450 − 425 = 25 nouveaux "
          "arbres. (2 pts)", False)],
        [("Renvoi : séance 51.", True)],
        [("Exercice 3 (6 pts)", True)],
        [("1. L'appauvrissement (épuisement) du sol par manque de matière organique et de diversité de "
          "cultures. (1,5 pt)", False)],
        [("2. La rotation des cultures et l'ajout de compost. (2,5 pts)", False)],
        [("3. Elles apportent ou préservent les éléments nutritifs et l'humus dont les plantes ont besoin "
          "pour bien pousser. (2 pts)", False)],
        [("Renvoi : séances 49, 51.", True)],
        [("Exercice 4 (4 pts)", True)],
        [("Deux actions parmi : planter un arbre, créer ou entretenir une haie, éviter de brûler la "
          "végétation, signaler une zone menacée d'érosion, ne pas jeter de déchets sur le sol. (2 pts par "
          "action valide)", False)],
        [("Renvoi : séances 48, 50, 51.", True)],
        [("TOTAL : 20 points", True)],
    ],
}
