# -*- coding: utf-8 -*-
"""Content for UNITE VII - Chaleur et temperature (seances 1-6).
Grounded in PE T5 p.120-122 (RAS: distinguer chaleur et temperature,
decrire le transfert de chaleur, utiliser un thermometre et connaitre les
unites de mesure de la temperature).
"""

THEME = "Chaleur et température"
RAS_THEME_1 = "Distinguer chaleur et température et décrire le transfert de chaleur"
RAS_THEME_2 = "Utiliser un thermomètre et connaître les unités de mesure de la température"
VALEURS = "rigueur scientifique, curiosité, précision"

# ---------------------------------------------------------------------------
# SEANCE 1 - Distinguer chaleur et temperature
# ---------------------------------------------------------------------------
S1 = {
    "num": 1, "title": "Distinguer chaleur et température",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "distinguer la chaleur, une forme d'énergie, de la température, une grandeur mesurable.",
    "support": "deux récipients d'eau à températures différentes, un thermomètre, tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u7_s1_a_chaleur_temperature.jpg",
                     "La différence entre chaleur (énergie ressentie) et température (grandeur mesurée au thermomètre)."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Que ressens-tu quand tu touches de l'eau chaude puis de l'eau froide ?",
         "R.A. : une sensation de chaud, puis une sensation de froid.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Comment peux-tu savoir précisément à quel point l'eau est chaude, sans te "
                                  "fier seulement à ta main ?",
         "R.A. : en utilisant un thermomètre.", "Questionnement oral", "Thermomètre", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Distinguer chaleur et température ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Touchez deux récipients d'eau : l'un tiède, l'autre chaud. Puis mesurez la "
                            "température de chacun avec un thermomètre.",
         "R.A. : la main donne une impression (plus ou moins chaud), le thermomètre donne un nombre précis en "
         "degrés.", "Expérimentation", "Eau, thermomètre", ""),
        ("4. Analyse", "La sensation de chaud ressentie par la main est-elle aussi précise que le nombre donné "
                        "par le thermomètre ?",
         "R.A. : non, la sensation est approximative et peut tromper, alors que le thermomètre donne une "
         "mesure exacte.", "Étude de cas", "Documents", ""),
        ("5. Synthèse", "Donc, la chaleur est une forme d'énergie qui passe d'un corps chaud vers un corps "
                         "froid ; c'est elle que l'on ressent au toucher. La température est une grandeur qui "
                         "indique le degré de chaud ou de froid d'un corps ; elle se mesure avec précision à "
                         "l'aide d'un thermomètre, en degrés.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Que faut-il utiliser pour connaître précisément la température d'un "
                            "enfant malade, plutôt que de poser seulement la main sur son front ?",
         "Ex. 1 : un thermomètre.", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Quelle est la différence entre la chaleur et la température ?",
         "Ex. 1 : la chaleur est une énergie ressentie ; la température est une grandeur mesurée avec un "
         "thermomètre.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. La chaleur"),
        ("body", "La chaleur est une forme d'énergie qui se transmet toujours d'un corps chaud vers un corps "
                 "plus froid. C'est cette énergie que l'on ressent au toucher, par exemple la chaleur d'une "
                 "tasse de café ou du soleil sur la peau."),
        ("section", "2. La température"),
        ("body", "La température est une grandeur qui indique le degré de chaud ou de froid d'un corps. Elle "
                 "se mesure avec précision à l'aide d'un thermomètre, et s'exprime en degrés (par exemple en "
                 "degrés Celsius, °C)."),
        ("image", ("scripts/t5/generated_images/u7_s1_a_chaleur_temperature.jpg",
                   "La différence entre chaleur (énergie ressentie) et température (grandeur mesurée au thermomètre).")),
        ("section", "3. Pourquoi la sensation peut tromper"),
        ("body", "Nos mains ne donnent qu'une impression approximative : un objet métallique et un objet en "
                 "bois à la même température peuvent sembler différents au toucher, car le métal transmet la "
                 "chaleur plus vite. C'est pourquoi on utilise un thermomètre pour obtenir une mesure exacte, "
                 "plutôt que de se fier uniquement à la sensation."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Complète : la …………… est une forme d'énergie qui se transmet d'un corps "
                                  "chaud vers un corps froid ; la …………… est une grandeur mesurée avec un "
                                  "……………."),
        ("Exercice 2 (5 points)", " — Pour chaque situation, indique si l'on parle de chaleur ou de "
                                  "température : 1. « Il fait 35 °C aujourd'hui » · 2. « Cette soupe me "
                                  "réchauffe les mains » · 3. « Le thermomètre affiche 38,5 °C »."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. La chaleur et la température sont exactement la même chose.\n"
                                  "2. Le thermomètre mesure la température.\n"
                                  "3. La sensation de la main est toujours parfaitement exacte.\n"
                                  "4. La chaleur passe toujours du corps chaud vers le corps froid."),
        ("Exercice 4 (4 points)", " — Explique pourquoi une poignée de porte en métal semble plus froide au "
                                  "toucher qu'une poignée en bois, alors qu'elles sont à la même température."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("chaleur ; température ; thermomètre. (1,66 pt par terme exact)", False)],
        [("Ex. 2 — ", False), ("1. température", True), (" · 2. ", False), ("chaleur", True), (" · 3. ", False),
         ("température", True)],
        [("Ex. 3 — ", False),
         ("1. Faux. Ce sont deux notions différentes : une énergie et une grandeur mesurée. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Faux. La sensation de la main est approximative et peut tromper. (1,5 pt)", False)],
        [("4. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Le métal transmet la chaleur de la main plus rapidement que le bois, ce qui "
                                "donne une sensation de froid plus forte, même si la température réelle des "
                                "deux objets est la même. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 2 - Le transfert de chaleur
# ---------------------------------------------------------------------------
S2 = {
    "num": 2, "title": "Le transfert de chaleur",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "décrire les trois modes de transfert de chaleur et la notion d'équilibre thermique.",
    "support": "une cuillère métallique, de l'eau chaude, une image du soleil, tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u7_s2_a_transfert.jpg",
                     "Les trois modes de transfert de chaleur : conduction, convection, rayonnement."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Quelle est la différence entre la chaleur et la température ?",
         "R.A. : la chaleur est une énergie ressentie ; la température est une grandeur mesurée.",
         "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Si tu laisses une cuillère métallique dans de l'eau très chaude, que "
                                  "remarques-tu après quelques minutes ?",
         "R.A. : le manche de la cuillère devient chaud lui aussi.", "Questionnement oral", "Cuillère, eau "
         "chaude", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Le transfert de chaleur ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez trois situations : une cuillère métallique dans l'eau chaude (contact "
                            "direct), de l'air chaud qui monte au-dessus d'un feu, et la chaleur du soleil qui "
                            "arrive jusqu'à nous sans contact.",
         "R.A. : dans le premier cas la chaleur passe par contact direct ; dans le deuxième l'air chaud se "
         "déplace ; dans le troisième la chaleur traverse l'espace sans contact ni déplacement de matière.",
         "Observation dirigée", "Images, expérience", ""),
        ("4. Analyse", "Ces trois façons de transmettre la chaleur sont-elles identiques ?",
         "R.A. : non, ce sont trois modes différents : la conduction, la convection, le rayonnement.",
         "Étude de cas", "Documents", ""),
        ("5. Synthèse", "Donc, la chaleur se transmet toujours d'un corps chaud vers un corps froid, jusqu'à "
                         "ce que les deux corps atteignent la même température : c'est l'équilibre thermique. "
                         "Elle se transmet de trois façons : par conduction (par contact direct, comme dans un "
                         "solide), par convection (par le déplacement d'un liquide ou d'un gaz chauffé), et par "
                         "rayonnement (à distance, sans contact, comme la chaleur du soleil).",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Quel mode de transfert de chaleur est en jeu quand tu touches une poêle "
                            "chaude ?",
         "Ex. 1 : la conduction.", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite les trois modes de transfert de chaleur.",
         "Ex. 1 : la conduction, la convection, le rayonnement.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Le sens du transfert de chaleur"),
        ("body", "La chaleur se transmet toujours d'un corps chaud vers un corps plus froid, et non l'inverse. "
                 "Ce transfert continue jusqu'à ce que les deux corps atteignent la même température : on dit "
                 "alors qu'ils sont en équilibre thermique."),
        ("section", "2. Les trois modes de transfert de chaleur"),
        ("sub", "a. La conduction"),
        ("body", "La chaleur passe par contact direct entre deux corps ou à l'intérieur d'un même objet. "
                 "Exemple : le manche d'une cuillère métallique qui chauffe quand on la laisse dans un plat "
                 "chaud."),
        ("image", ("scripts/t5/generated_images/u7_s2_a_transfert.jpg",
                   "Les trois modes de transfert de chaleur : conduction, convection, rayonnement.")),
        ("sub", "b. La convection"),
        ("body", "La chaleur se déplace grâce au mouvement d'un liquide ou d'un gaz. Exemple : l'air chaud "
                 "au-dessus d'un feu monte, car l'air chaud est plus léger que l'air froid."),
        ("sub", "c. Le rayonnement"),
        ("body", "La chaleur traverse l'espace sans contact et sans déplacement de matière. Exemple : la "
                 "chaleur du soleil qui nous parvient à travers l'espace vide."),
        ("section", "3. L'équilibre thermique"),
        ("body", "Quand deux corps à des températures différentes sont mis en contact, le plus chaud cède de "
                 "la chaleur au plus froid jusqu'à ce qu'ils atteignent la même température. C'est pour cela "
                 "qu'une boisson chaude refroidit et qu'une boisson froide se réchauffe à l'air ambiant."),
    ],
    "exercices": [
        ("Exercice 1 (6 points)", " — Pour chaque situation, indique le mode de transfert de chaleur en jeu : "
                                  "1. toucher un radiateur chaud · 2. la chaleur du soleil qui réchauffe la "
                                  "peau · 3. l'air chaud qui monte au plafond d'une pièce chauffée."),
        ("Exercice 2 (4 points)", " — Qu'appelle-t-on l'équilibre thermique ?"),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. La chaleur passe du corps froid vers le corps chaud.\n"
                                  "2. La convection se produit dans les liquides et les gaz.\n"
                                  "3. Le rayonnement nécessite un contact direct.\n"
                                  "4. Une boisson chaude finit par atteindre la température de la pièce."),
        ("Exercice 4 (4 points)", " — Explique, en utilisant le mot « conduction », pourquoi une casserole en "
                                  "métal chauffe vite quand on la pose sur le feu."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. conduction", True), (" · 2. ", False), ("rayonnement", True), (" · 3. ", False),
         ("convection", True)],
        [("Ex. 2 — ", False), ("C'est le moment où deux corps en contact atteignent la même température, le "
                                "transfert de chaleur s'arrête alors. (4 pts)", False)],
        [("Ex. 3 — ", False),
         ("1. Faux. La chaleur passe toujours du corps chaud vers le corps froid. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Faux. Le rayonnement se fait à distance, sans contact. (1,5 pt)", False)],
        [("4. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Le métal est un bon conducteur de chaleur : la chaleur du feu se transmet "
                                "rapidement par conduction à travers le métal de la casserole. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 3 - Le thermometre et ses types
# ---------------------------------------------------------------------------
S3 = {
    "num": 3, "title": "Le thermomètre et ses types",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "identifier les différents types de thermomètres et leur principe de fonctionnement.",
    "support": "thermomètre à liquide, thermomètre médical numérique si disponible, images, tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u7_s3_a_thermometres.jpg",
                     "Différents types de thermomètres : à liquide, numérique, à cadran, infrarouge."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite un mode de transfert de chaleur.",
         "R.A. : la conduction, la convection ou le rayonnement.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "As-tu déjà vu un thermomètre utilisé pour prendre la température d'un "
                                  "malade ? À quoi ressemblait-il ?",
         "R.A. : réponses libres : thermomètre numérique, frontal, ou à liquide.", "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Le thermomètre et ses types ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez différents types de thermomètres : à liquide coloré, numérique, à "
                            "cadran, infrarouge (frontal). Comparez leur apparence et leur mode d'affichage.",
         "R.A. : le thermomètre à liquide a un tube gradué, le numérique affiche un nombre sur un écran, le à "
         "cadran a une aiguille, l'infrarouge se pointe sans contact.", "Observation dirigée",
         "Thermomètres ou images", ""),
        ("4. Analyse", "Pourquoi le liquide d'un thermomètre monte-t-il quand il fait chaud ?",
         "R.A. : parce que le liquide se dilate (prend plus de place) quand sa température augmente.",
         "Étude de cas", "Documents, schéma", ""),
        ("5. Synthèse", "Donc, il existe plusieurs types de thermomètres : le thermomètre à liquide (un liquide "
                         "coloré se dilate dans un tube gradué selon la température), le thermomètre à cadran "
                         "(une aiguille indique la température sur un cadran), le thermomètre numérique (un "
                         "capteur électronique affiche la température sur un écran) et le thermomètre à "
                         "infrarouge (il mesure la température sans contact, souvent utilisé pour le front).",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Pourquoi utilise-t-on souvent un thermomètre à infrarouge pour les enfants "
                            "malades ?",
         "Ex. 1 : parce qu'il mesure la température rapidement et sans contact, ce qui est pratique et "
         "hygiénique.", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite deux types de thermomètres.",
         "Ex. 1 : à liquide, numérique, à cadran ou infrarouge (deux au choix).", "Évaluation écrite", "Cahier",
         ""),
    ],
    "lecon": [
        ("section", "1. Le principe du thermomètre à liquide"),
        ("body", "Un thermomètre à liquide contient un liquide coloré (autrefois souvent du mercure, "
                 "aujourd'hui souvent de l'alcool coloré) enfermé dans un tube très fin, gradué en degrés. "
                 "Quand la température augmente, le liquide se dilate (prend plus de volume) et monte dans le "
                 "tube ; on lit alors la température sur la graduation."),
        ("image", ("scripts/t5/generated_images/u7_s3_a_thermometres.jpg",
                   "Différents types de thermomètres : à liquide, numérique, à cadran, infrarouge.")),
        ("section", "2. Les autres types de thermomètres"),
        ("sub", "a. Le thermomètre à cadran"),
        ("body", "Une aiguille, reliée à un capteur métallique sensible à la chaleur, se déplace sur un cadran "
                 "gradué pour indiquer la température."),
        ("sub", "b. Le thermomètre numérique"),
        ("body", "Un capteur électronique mesure la température et l'affiche directement sous forme de "
                 "chiffres sur un petit écran."),
        ("sub", "c. Le thermomètre à infrarouge"),
        ("body", "Il mesure la chaleur émise par un corps (par exemple le front) sans contact direct, grâce à "
                 "un capteur infrarouge. Il est rapide et hygiénique, utile notamment en milieu médical."),
        ("section", "3. Choisir le bon thermomètre"),
        ("body", "Selon la situation, on choisit un thermomètre adapté : un thermomètre médical pour la "
                 "température du corps, un thermomètre météo pour l'air extérieur, un thermomètre de cuisine "
                 "pour un aliment."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Décris en une phrase le principe de fonctionnement du thermomètre à "
                                  "liquide."),
        ("Exercice 2 (5 points)", " — Associe chaque type de thermomètre à sa description : 1. à liquide · "
                                  "2. à cadran · 3. numérique · 4. infrarouge — A. aiguille sur un cadran gradué "
                                  "· B. capteur électronique avec écran · C. dilatation d'un liquide coloré · "
                                  "D. mesure sans contact."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Un thermomètre à liquide fonctionne grâce à la dilatation du liquide.\n"
                                  "2. Le thermomètre à infrarouge nécessite un contact direct avec la peau.\n"
                                  "3. Le thermomètre numérique affiche la température avec des chiffres.\n"
                                  "4. Tous les thermomètres fonctionnent exactement de la même façon."),
        ("Exercice 4 (4 points)", " — Pourquoi un thermomètre à infrarouge est-il particulièrement adapté pour "
                                  "mesurer la température de nombreux élèves rapidement ?"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("Le liquide coloré enfermé dans le tube se dilate quand la température augmente "
                                "et monte dans le tube gradué. (5 pts)", False)],
        [("Ex. 2 — ", False), ("1-C", True), (" · 2-", False), ("A", True), (" · 3-", False), ("B", True),
         (" · 4-", False), ("D", True)],
        [("Ex. 3 — ", False),
         ("1. Vrai. (1,5 pt)", False)],
        [("2. Faux. Il mesure la température sans contact direct. (1,5 pt)", False)],
        [("3. Vrai. (1,5 pt)", False)],
        [("4. Faux. Chacun a un principe de fonctionnement différent (dilatation, capteur électronique, "
          "infrarouge). (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Parce qu'il mesure vite et sans contact, ce qui évite d'attendre longtemps "
                                "entre chaque élève et limite la transmission de microbes. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 4 - Les unites de mesure de la temperature
# ---------------------------------------------------------------------------
S4 = {
    "num": 4, "title": "Les unités de mesure de la température",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "connaître les unités de mesure de la température (Celsius, Kelvin, Fahrenheit) et convertir "
                "une température simple.",
    "support": "thermomètre gradué en Celsius, tableau de conversion, tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u7_s4_a_unites.jpg",
                     "Les trois unités de mesure de la température : Celsius, Kelvin, Fahrenheit."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite un type de thermomètre.",
         "R.A. : à liquide, à cadran, numérique ou infrarouge.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "À quelle température l'eau gèle-t-elle ? À quelle température bout-elle ?",
         "R.A. : 0 °C pour la glace, 100 °C pour l'ébullition.", "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les unités de mesure de la température ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez un thermomètre gradué en degrés Celsius (°C). Repérez le point de "
                            "congélation (0 °C) et le point d'ébullition de l'eau (100 °C).",
         "R.A. : les élèves localisent les deux repères sur la graduation.", "Observation dirigée",
         "Thermomètre gradué", ""),
        ("4. Analyse", "Pourquoi les scientifiques utilisent-ils parfois une autre unité, le Kelvin (K), plutôt "
                        "que le Celsius ?",
         "R.A. : le Kelvin est l'unité scientifique internationale, utile pour des mesures très précises et "
         "des températures extrêmes.", "Étude de cas", "Documents", ""),
        ("5. Synthèse", "Donc, il existe plusieurs unités de mesure de la température. Le degré Celsius (°C) "
                         "est l'unité la plus utilisée à Madagascar et dans la plupart des pays : l'eau gèle à "
                         "0 °C et bout à 100 °C. Le Kelvin (K) est l'unité scientifique internationale ; pour "
                         "convertir, on ajoute 273 au nombre de degrés Celsius (K = °C + 273). Le degré "
                         "Fahrenheit (°F) est utilisé notamment aux États-Unis.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Convertis 27 °C en Kelvin.",
         "Ex. 1 : 27 + 273 = 300 K.", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite les trois unités de mesure de la température étudiées.",
         "Ex. 1 : le degré Celsius, le Kelvin, le degré Fahrenheit.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Le degré Celsius (°C)"),
        ("body", "C'est l'unité de température la plus utilisée à Madagascar et dans la plupart des pays du "
                 "monde. Elle a été définie à partir de deux repères : 0 °C, la température de congélation de "
                 "l'eau, et 100 °C, la température d'ébullition de l'eau (au niveau de la mer)."),
        ("section", "2. Le Kelvin (K)"),
        ("body", "Le Kelvin est l'unité scientifique internationale de température, utilisée notamment par les "
                 "scientifiques. 0 Kelvin correspond au zéro absolu, la température la plus basse possible. "
                 "Pour convertir une température de Celsius en Kelvin, on ajoute 273 : K = °C + 273."),
        ("image", ("scripts/t5/generated_images/u7_s4_a_unites.jpg",
                   "Les trois unités de mesure de la température : Celsius, Kelvin, Fahrenheit.")),
        ("section", "3. Le degré Fahrenheit (°F)"),
        ("body", "Le degré Fahrenheit est utilisé notamment aux États-Unis. Sur cette échelle, l'eau gèle à "
                 "32 °F et bout à 212 °F."),
        ("section", "4. Convertir une température"),
        ("body", "Pour passer des degrés Celsius aux Kelvin, on utilise la formule : K = °C + 273. Par "
                 "exemple, une température de 20 °C correspond à 20 + 273 = 293 K."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Complète : l'eau gèle à …… °C et bout à …… °C ; pour convertir des "
                                  "degrés Celsius en Kelvin, on ajoute …… ."),
        ("Exercice 2 (5 points)", " — Convertis en Kelvin les températures suivantes : 1. 0 °C · 2. 15 °C · "
                                  "3. 37 °C (température du corps humain) · 4. 100 °C."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Le Kelvin est l'unité scientifique internationale de température.\n"
                                  "2. L'eau bout toujours à 0 °C.\n"
                                  "3. Le Fahrenheit est utilisé notamment aux États-Unis.\n"
                                  "4. Pour convertir des degrés Celsius en Kelvin, on soustrait 273."),
        ("Exercice 4 (4 points)", " — Un thermomètre affiche 310 K. Convertis cette température en degrés "
                                  "Celsius (indice : fais l'opération inverse de K = °C + 273)."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("0 ; 100 ; 273. (1,66 pt par terme exact)", False)],
        [("Ex. 2 — ", False), ("1. 273 K", True), (" · 2. ", False), ("288 K", True), (" · 3. ", False),
         ("310 K", True), (" · 4. ", False), ("373 K", True)],
        [("Ex. 3 — ", False),
         ("1. Vrai. (1,5 pt)", False)],
        [("2. Faux. L'eau bout à 100 °C (au niveau de la mer). (1,5 pt)", False)],
        [("3. Vrai. (1,5 pt)", False)],
        [("4. Faux. On ajoute 273 pour passer des degrés Celsius aux Kelvin. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("310 - 273 = 37 °C. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 5 - Revision Unite VII
# ---------------------------------------------------------------------------
S5 = {
    "num": 5, "title": "Révision — Unité VII : Chaleur et température", "kind": "revision",
    "cover_image": ("scripts/t5/generated_images/u7_bilan_r1.jpg",
                     "Bilan de l'Unité VII : chaleur, température, transfert de chaleur, thermomètres et unités de mesure."),
    "theme": THEME, "ras_theme": "Chaleur, température, transfert de chaleur, thermomètres, unités de mesure "
                                  "(Celsius, Kelvin, Fahrenheit)",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "traiter un sujet complet portant sur les séances 1 à 4, puis identifier ses points faibles.",
    "support": "sujet recopié au tableau ou polycopié, cahier de brouillon.",
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Sans ouvrir votre cahier : à quelle température l'eau bout-elle en degrés Celsius ?",
         "R.A. : 100 °C.", "Questionnement oral", "—", ""),
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
    "sujet_title": "Sujet d'entraînement — Unité VII (Chaleur et température) — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Vrai ou faux (2 points)\n"
         "1. La chaleur passe toujours du corps froid vers le corps chaud.\n"
         "2. Le Kelvin est l'unité scientifique internationale de température.\n"
         "B. Complète (2 points)\n"
         "3. Dans un thermomètre à liquide, le liquide …………… quand la température augmente.\n"
         "4. Pour convertir une température de Celsius en Kelvin, on ajoute …………… ."),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "On mesure la température d'un enfant malade : le thermomètre affiche 39 °C.\n"
         "1. Convertis cette température en Kelvin. (2 pts)\n"
         "2. Cite un type de thermomètre adapté pour cette mesure. (2 pts)\n"
         "3. Quelle est la différence entre la chaleur et la température ici ? (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "On laisse une tasse de thé chaud sur la table d'une classe fraîche.\n"
         "1. Que va-t-il se passer à la température du thé au fil du temps ? (2 pts)\n"
         "2. Comment appelle-t-on l'état final atteint entre le thé et l'air de la pièce ? (2 pts)\n"
         "3. Quel mode de transfert de chaleur est principalement en jeu entre la tasse et l'air autour "
         "d'elle ? (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Un camarade affirme : « Un thermomètre à cadran et un thermomètre numérique fonctionnent exactement "
         "de la même façon. »\n"
         "Réponds-lui en expliquant la différence entre les deux."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. Faux (du chaud vers le froid). 2. Vrai. (1 pt par item)", False)],
        [("B. 3. se dilate. 4. 273. (1 pt par item)", False)],
        [("Renvoi : séances 1, 2, 3, 4.", True)],
        [("Exercice 2 (6 pts)", True)],
        [("1. 39 + 273 = 312 K. (2 pts)", False)],
        [("2. Un thermomètre médical numérique ou à infrarouge. (2 pts)", False)],
        [("3. La température (39 °C) est la mesure précise ; la chaleur est ce que l'on ressent au toucher sur "
          "le front de l'enfant. (2 pts)", False)],
        [("Renvoi : séances 1, 3, 4.", True)],
        [("Exercice 3 (6 pts)", True)],
        [("1. La température du thé va diminuer progressivement. (2 pts)", False)],
        [("2. L'équilibre thermique. (2 pts)", False)],
        [("3. La convection (déplacement de l'air autour de la tasse) et un peu de rayonnement. (2 pts)", False)],
        [("Renvoi : séance 2.", True)],
        [("Exercice 4 (4 pts)", True)],
        [("Le thermomètre à cadran utilise une aiguille mécanique reliée à un capteur métallique, alors que le "
          "numérique utilise un capteur électronique qui affiche un nombre sur un écran : leurs principes sont "
          "différents. (4 pts)", False)],
        [("Renvoi : séance 3.", True)],
        [("Repères de score : 16-20 acquis · 11-15 à consolider · 6-10 fragile · 0-5 reprendre les séances 1 à 4.", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 6 - Examen Unite VII
# ---------------------------------------------------------------------------
S6 = {
    "num": 6, "title": "Sujet d'examen ST T5 — Unité VII : Chaleur et température", "kind": "exam",
    "cover_image": ("scripts/t5/generated_images/u7_bilan_e1.jpg",
                     "Sujet d'examen, Unité VII : Chaleur et température."),
    "theme": THEME, "ras_theme": "Chaleur, température, transfert de chaleur, thermomètres, unités de mesure "
                                  "(Celsius, Kelvin, Fahrenheit)",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "évaluer la maîtrise des notions des séances 1 à 4 — chaleur, température, transfert de "
                "chaleur, thermomètres, unités de mesure.",
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
    "sujet_title": "SUJET D'EXAMEN — Unité VII : Chaleur et température — Durée : ____________ — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Complète avec le mot exact (2 points)\n"
         "1. La chaleur qui traverse l'espace sans contact s'appelle le ……………… .\n"
         "2. L'unité scientifique internationale de température est le ……………… .\n"
         "B. QCM — une seule réponse exacte (2 points)\n"
         "1. L'eau gèle à : A. 100 °C B. 0 °C C. 37 °C\n"
         "2. Un thermomètre à liquide fonctionne grâce à : A. un écran numérique B. la dilatation d'un liquide "
         "C. une pile"),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "On relève la température de l'air dans une classe : 25 °C.\n"
         "1. Convertis cette température en Kelvin. (2 pts)\n"
         "2. Cite un type de thermomètre qui pourrait avoir servi à cette mesure. (2 pts)\n"
         "3. Si on ouvre une fenêtre et que l'air froid entre, que va faire la température de la classe ? "
         "(2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "On observe une barre de métal chauffée à une extrémité : après un moment, l'autre extrémité devient "
         "chaude aussi.\n"
         "1. Quel mode de transfert de chaleur explique ce phénomène ? (2 pts)\n"
         "2. La chaleur passe-t-elle de l'extrémité froide vers l'extrémité chaude, ou l'inverse ? (2 pts)\n"
         "3. Que se passera-t-il si on attend suffisamment longtemps ? (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Ta petite sœur pense que plus un thermomètre est gros, plus il indique une température élevée.\n"
         "Explique-lui, en deux phrases, pourquoi ce n'est pas vrai."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. rayonnement. 2. Kelvin. (1 pt par item)", False)],
        [("B. 1. B. 2. B. (1 pt par item)", False)],
        [("Exercice 2 (6 pts)", True)],
        [("1. 25 + 273 = 298 K. (2 pts)", False)],
        [("2. Un thermomètre à liquide, numérique ou à cadran. (2 pts)", False)],
        [("3. La température de la classe va diminuer. (2 pts)", False)],
        [("Exercice 3 (6 pts)", True)],
        [("1. La conduction. (2 pts)", False)],
        [("2. De l'extrémité chaude vers l'extrémité froide. (2 pts)", False)],
        [("3. Les deux extrémités atteindront progressivement la même température (équilibre thermique). "
          "(2 pts)", False)],
        [("Exercice 4 (4 pts)", True)],
        [("La taille du thermomètre ne change pas la température mesurée : c'est la graduation lue sur "
          "l'instrument qui indique la température, pas sa taille. (4 pts)", False)],
    ],
}
