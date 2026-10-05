# -*- coding: utf-8 -*-
"""Content for UNITE IV - Conception technologique (seances 1-7).
Grounded in PE T5 p.113-116 (RAS: classifier les objets volants et expliquer
les notions scientifiques du vol ; motoriser un mini-vehicule ; concevoir,
construire, tester et ameliorer un mini objet volant et un mini-vehicule).
"""

THEME = "Conception technologique"
RAS_THEME_1 = "Classifier les objets volants et expliquer les notions scientifiques du vol ; motoriser un mini-véhicule"
RAS_THEME_2 = "Concevoir, construire, tester et améliorer un mini objet volant et un mini-véhicule"
VALEURS = "créativité, esprit d'initiative, persévérance, travail d'équipe"

# ---------------------------------------------------------------------------
# SEANCE 1 - Classifier les objets volants
# ---------------------------------------------------------------------------
S1 = {
    "num": 1, "title": "Classifier les objets volants",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "classer des objets volants selon leur structure et leur mode de vol.",
    "support": "images d'objets volants (cerf-volant, avion en papier, montgolfière, hélicoptère, drone), "
               "tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u4_s1_a_objets_volants.jpg",
                     "Des objets volants variés : cerf-volant, avion en papier, montgolfière, hélicoptère."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite un objet qui vole, fabriqué par l'homme.",
         "R.A. : un cerf-volant, un avion, un hélicoptère.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Un cerf-volant et une montgolfière volent-ils de la même façon ?",
         "R.A. : non, le cerf-volant a besoin de vent et d'une corde, la montgolfière flotte dans l'air comme "
         "une bulle.", "Questionnement oral", "Images d'objets volants", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Classifier les objets volants ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez ces objets volants : cerf-volant, avion en papier, montgolfière, "
                            "hélicoptère, drone. Notez s'ils ont un moteur ou non, et comment ils restent en "
                            "l'air.",
         "R.A. : cerf-volant et avion en papier — pas de moteur, portés par le vent ou lancés ; hélicoptère et "
         "drone — moteur avec hélices ; montgolfière — air chaud, plus léger que l'air.", "Observation dirigée",
         "Images d'objets volants", ""),
        ("4. Analyse", "Peut-on regrouper ces objets en deux grandes catégories selon leur façon de voler ?",
         "R.A. : les objets « plus légers que l'air » (montgolfière, ballon) et les objets « plus lourds que "
         "l'air » (avion, cerf-volant, hélicoptère, drone), qui volent grâce à leur forme ou à un moteur.",
         "Étude de cas", "Documents, schémas", ""),
        ("5. Synthèse", "Donc, on classe les objets volants en deux grandes catégories : les objets plus légers "
                         "que l'air (montgolfière, ballon à gaz), qui flottent naturellement, et les objets plus "
                         "lourds que l'air (cerf-volant, avion, hélicoptère, drone), qui ont besoin d'une forme "
                         "adaptée, du vent ou d'un moteur pour voler.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Range ces objets dans la bonne catégorie : montgolfière, drone, cerf-"
                            "volant, ballon à gaz.",
         "Ex. 1 : plus légers que l'air — montgolfière, ballon à gaz ; plus lourds que l'air — drone, "
         "cerf-volant.", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite un objet volant plus léger que l'air et un objet volant plus lourd "
                             "que l'air.",
         "Ex. 1 : montgolfière (plus léger que l'air) ; avion (plus lourd que l'air).",
         "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Qu'est-ce qu'un objet volant ?"),
        ("body", "Un objet volant est un objet capable de se déplacer ou de se maintenir dans l'air. Il peut "
                 "être naturel (un oiseau, un insecte) ou fabriqué par l'homme."),
        ("section", "2. Les objets plus légers que l'air"),
        ("body", "Ces objets flottent dans l'air car ils sont remplis d'un gaz plus léger que l'air, ou d'air "
                 "chaud (qui est plus léger que l'air froid qui l'entoure). Exemples : la montgolfière (air "
                 "chaud), le ballon à gaz."),
        ("section", "3. Les objets plus lourds que l'air"),
        ("body", "Ces objets ont besoin d'une forme adaptée, du vent, d'un lancer ou d'un moteur pour voler. "
                 "Exemples : le cerf-volant (porté par le vent, retenu par une corde), l'avion en papier ou "
                 "l'avion (forme des ailes), l'hélicoptère et le drone (hélices entraînées par un moteur)."),
        ("image", ("scripts/t5/generated_images/u4_s1_b_classification.jpg",
                   "Classification des objets volants : plus légers que l'air / plus lourds que l'air.")),
        ("section", "4. Avec ou sans moteur"),
        ("body", "On peut aussi classer les objets volants selon qu'ils ont un moteur (hélicoptère, drone, "
                 "avion à moteur) ou non (cerf-volant, avion en papier, planeur, montgolfière une fois gonflée)."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Classe ces objets volants en « plus léger que l'air » ou « plus lourd que "
                                  "l'air » : 1. montgolfière · 2. avion · 3. ballon à gaz · 4. cerf-volant · "
                                  "5. drone."),
        ("Exercice 2 (5 points)", " — Pour chacun de ces objets, indique s'il possède un moteur : 1. hélicoptère "
                                  "· 2. cerf-volant · 3. drone · 4. avion en papier · 5. montgolfière."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Tous les objets volants ont un moteur.\n"
                                  "2. La montgolfière vole grâce à de l'air chaud.\n"
                                  "3. Le cerf-volant a besoin de vent pour voler.\n"
                                  "4. Un objet « plus lourd que l'air » ne peut jamais voler."),
        ("Exercice 4 (4 points)", " — Cite un objet volant naturel (non fabriqué par l'homme) et explique "
                                  "brièvement comment il reste en l'air."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. plus léger", True), (" · 2. ", False), ("plus lourd", True), (" · 3. ", False),
         ("plus léger", True), (" · 4. ", False), ("plus lourd", True), (" · 5. ", False), ("plus lourd", True)],
        [("Ex. 2 — ", False), ("1. oui", True), (" · 2. ", False), ("non", True), (" · 3. ", False),
         ("oui", True), (" · 4. ", False), ("non", True), (" · 5. ", False), ("non", True)],
        [("Ex. 3 — ", False),
         ("1. Faux. Le cerf-volant et le planeur, par exemple, n'ont pas de moteur. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Vrai. (1,5 pt)", False)],
        [("4. Faux. Grâce à sa forme (ailes) ou à un moteur (hélices), un objet plus lourd que l'air peut "
          "voler. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Par exemple, un oiseau : ses ailes ont une forme qui crée une force de portance "
                                "quand il bat des ailes ou plane. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 2 - Les notions scientifiques sur le vol
# ---------------------------------------------------------------------------
S2 = {
    "num": 2, "title": "Les notions scientifiques sur le vol",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "identifier les quatre forces qui agissent sur un objet volant : portance, poids, propulsion, "
                "traînée.",
    "support": "un avion en papier, un ventilateur ou éventail, images, tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u4_s2_a_forces_vol.jpg",
                     "Les quatre forces du vol appliquées à un avion en papier : portance, poids, propulsion, traînée."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite un objet volant plus lourd que l'air.",
         "R.A. : un avion, un cerf-volant, un hélicoptère.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Pourquoi un avion en papier bien plié vole-t-il plus loin qu'une simple boule "
                                  "de papier ?",
         "R.A. : parce que sa forme (les ailes) l'aide à se maintenir en l'air plus longtemps.",
         "Questionnement oral", "Avion en papier, boule de papier", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les notions scientifiques sur le vol ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Lancez un avion en papier. Observez les forces qui agissent sur lui : qu'est-ce qui "
                            "le fait avancer, qu'est-ce qui le fait monter, qu'est-ce qui le fait redescendre, "
                            "qu'est-ce qui le ralentit ?",
         "R.A. : le lancer le fait avancer ; la forme des ailes le fait monter un peu ; son poids le fait "
         "redescendre ; l'air devant lui le ralentit.", "Expérimentation", "Avion en papier", ""),
        ("4. Analyse", "Si on ajoute du poids à l'avion en papier (un trombone), que se passe-t-il ?",
         "R.A. : il vole différemment : parfois mieux équilibré, parfois il tombe plus vite si trop lourd.",
         "Expérimentation", "Avion en papier, trombone", ""),
        ("5. Synthèse", "Donc, quatre forces agissent sur tout objet volant : la portance (le pousse vers le "
                         "haut, créée par la forme des ailes et l'air), le poids (le tire vers le bas, dû à la "
                         "gravité), la propulsion (le fait avancer, créée par un lancer, une hélice ou un "
                         "moteur) et la traînée (le freine, due à la résistance de l'air). Un objet vole bien "
                         "quand ces forces sont équilibrées.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Quelle force fait monter un avion en papier, et quelle force le fait "
                            "redescendre ?",
         "Ex. 1 : la portance le fait monter ; le poids le fait redescendre.", "Travail de groupe",
         "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite les quatre forces qui agissent sur un objet volant.",
         "Ex. 1 : la portance, le poids, la propulsion, la traînée.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Les quatre forces du vol"),
        ("body", "Tout objet volant est soumis à quatre forces principales, qui agissent dans des directions "
                 "opposées deux à deux."),
        ("sub", "a. La portance"),
        ("body", "La force qui pousse l'objet vers le haut. Elle est créée par la forme des ailes (ou de la "
                 "voile d'un cerf-volant) et par le déplacement de l'air autour d'elles."),
        ("sub", "b. Le poids"),
        ("body", "La force qui tire l'objet vers le bas, due à la gravité. Plus un objet est lourd, plus il "
                 "faut de portance pour le maintenir en l'air."),
        ("image", ("scripts/t5/generated_images/u4_s2_a_forces_vol.jpg",
                   "Les quatre forces du vol appliquées à un avion en papier : portance, poids, propulsion, traînée.")),
        ("sub", "c. La propulsion"),
        ("body", "La force qui fait avancer l'objet. Elle vient d'un lancer (avion en papier), du vent (cerf-"
                 "volant), ou d'un moteur à hélice (avion, drone, hélicoptère)."),
        ("sub", "d. La traînée"),
        ("body", "La force qui résiste à l'avancement, due au frottement de l'air sur l'objet. Une forme "
                 "aérodynamique (fine, lisse) réduit la traînée."),
        ("section", "2. L'équilibre des forces"),
        ("body", "Un objet volant se maintient en l'air et avance correctement quand ces quatre forces sont "
                 "équilibrées : la portance doit compenser le poids, et la propulsion doit être plus forte que "
                 "la traînée pour avancer."),
    ],
    "exercices": [
        ("Exercice 1 (4 points)", " — Définis en une phrase chacune des quatre forces du vol : 1. portance · "
                                  "2. poids · 3. propulsion · 4. traînée."),
        ("Exercice 2 (6 points)", " — Pour chaque situation, indique la force principalement en jeu : "
                                  "1. un avion en papier ralentit à cause de l'air · 2. un cerf-volant monte "
                                  "grâce au vent sur sa voile · 3. un objet lâché tombe au sol · 4. une hélice "
                                  "fait avancer un drone."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. La portance pousse l'objet vers le bas.\n"
                                  "2. Une forme aérodynamique réduit la traînée.\n"
                                  "3. Le poids est dû à la gravité.\n"
                                  "4. Un objet vole bien seulement si ces quatre forces sont déséquilibrées."),
        ("Exercice 4 (4 points)", " — Explique pourquoi un parachute ouvert tombe plus lentement qu'un "
                                  "parachute fermé, en utilisant le mot « traînée »."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. force qui pousse vers le haut ; 2. force qui tire vers le bas (gravité) ; "
                                "3. force qui fait avancer ; 4. force qui freine, due à la résistance de "
                                "l'air. (1 pt par définition correcte)", False)],
        [("Ex. 2 — ", False), ("1. traînée", True), (" · 2. ", False), ("portance", True), (" · 3. ", False),
         ("poids", True), (" · 4. ", False), ("propulsion", True)],
        [("Ex. 3 — ", False),
         ("1. Faux. La portance pousse l'objet vers le haut. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Vrai. (1,5 pt)", False)],
        [("4. Faux. Un objet vole bien quand ces forces sont équilibrées (portance compense le poids). "
          "(1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Le parachute ouvert a une plus grande surface exposée à l'air, ce qui augmente "
                                "beaucoup la traînée et ralentit la chute. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 3 - La motorisation d'un mini-vehicule
# ---------------------------------------------------------------------------
S3 = {
    "num": 3, "title": "La motorisation d'un mini-véhicule",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "identifier différents modes de motorisation d'un mini-véhicule : humaine, mécanique, "
                "thermique, électrique.",
    "support": "une petite voiture jouet à élastique ou à pile, images de véhicules variés, tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u4_s3_a_motorisation.jpg",
                     "Quatre modes de motorisation d'un véhicule : humaine, mécanique, thermique, électrique."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite une des quatre forces qui agissent sur un objet volant.",
         "R.A. : la portance, le poids, la propulsion ou la traînée.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Qu'est-ce qui fait avancer un vélo ? Et une voiture ? Et une charrette tirée "
                                  "par un zébu ?",
         "R.A. : le vélo — les jambes du cycliste ; la voiture — un moteur ; la charrette — la force du zébu.",
         "Questionnement oral", "Images de véhicules", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « La motorisation d'un mini-véhicule ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez une petite voiture jouet à élastique remontée, puis une à pile. Comparez "
                            "leur source d'énergie.",
         "R.A. : la première utilise l'énergie emmagasinée dans un élastique tendu ; la seconde utilise "
         "l'énergie électrique d'une pile.", "Expérimentation", "Jouets à élastique et à pile", ""),
        ("4. Analyse", "Peut-on classer les façons de faire avancer un véhicule selon leur source d'énergie ?",
         "R.A. : oui : la force humaine, un mécanisme remonté (ressort, élastique), un moteur thermique "
         "(essence), ou un moteur électrique (pile, batterie).", "Étude de cas", "Documents", ""),
        ("5. Synthèse", "Donc, un mini-véhicule peut être motorisé de quatre façons : motorisation humaine "
                         "(pédales, manivelle actionnées par la main), motorisation mécanique (ressort ou "
                         "élastique remonté qui restitue son énergie), motorisation thermique (moteur à "
                         "essence, qui brûle du carburant) et motorisation électrique (moteur alimenté par une "
                         "pile ou une batterie).",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Un petit véhicule avance après qu'on ait tourné une manivelle qui tend un "
                            "ressort. Quel type de motorisation est-ce ?",
         "Ex. 1 : une motorisation mécanique.", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite les quatre modes de motorisation d'un véhicule.",
         "Ex. 1 : humaine, mécanique, thermique, électrique.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Qu'est-ce que la motorisation ?"),
        ("body", "La motorisation d'un véhicule, c'est la façon dont il reçoit l'énergie nécessaire pour "
                 "avancer. On distingue quatre grands modes de motorisation."),
        ("sub", "a. La motorisation humaine"),
        ("body", "Le véhicule avance grâce à la force musculaire d'une personne, par exemple en pédalant "
                 "(vélo) ou en tournant une manivelle."),
        ("sub", "b. La motorisation mécanique"),
        ("body", "Le véhicule avance grâce à l'énergie emmagasinée dans un ressort ou un élastique que l'on a "
                 "remonté ou tendu à l'avance ; cette énergie se libère progressivement pour faire avancer le "
                 "véhicule."),
        ("image", ("scripts/t5/generated_images/u4_s3_b_mini_vehicule.jpg",
                   "Un mini-véhicule à élastique : la motorisation mécanique en action.")),
        ("sub", "c. La motorisation thermique"),
        ("body", "Le véhicule avance grâce à un moteur qui brûle un carburant (essence, gazole). C'est le mode "
                 "de motorisation des voitures, camions et motos les plus répandus."),
        ("sub", "d. La motorisation électrique"),
        ("body", "Le véhicule avance grâce à un moteur électrique alimenté par une pile ou une batterie. C'est "
                 "le mode utilisé par de nombreux petits jouets et, de plus en plus, par des vraies voitures."),
        ("section", "2. Choisir une motorisation pour un mini-véhicule"),
        ("body", "Pour un mini-véhicule construit en classe, les motorisations humaine (manivelle), mécanique "
                 "(élastique) et électrique (petit moteur à pile) sont les plus simples et les plus sûres à "
                 "réaliser."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Associe chaque exemple à son mode de motorisation : 1. vélo · 2. voiture "
                                  "à essence · 3. petite voiture jouet à pile · 4. véhicule à élastique remonté "
                                  "— A. humaine · B. mécanique · C. thermique · D. électrique."),
        ("Exercice 2 (5 points)", " — Cite un avantage et un inconvénient de la motorisation humaine par "
                                  "rapport à la motorisation thermique."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. La motorisation mécanique utilise un moteur à essence.\n"
                                  "2. La motorisation électrique utilise une pile ou une batterie.\n"
                                  "3. Pédaler est un exemple de motorisation humaine.\n"
                                  "4. Il n'existe qu'un seul mode de motorisation possible."),
        ("Exercice 4 (4 points)", " — Pour construire un mini-véhicule en classe, quel mode de motorisation "
                                  "choisirais-tu, et pourquoi ?"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1-A", True), (" · 2-", False), ("C", True), (" · 3-", False), ("D", True),
         (" · 4-", False), ("B", True)],
        [("Ex. 2 — ", False), ("avantage : pas besoin de carburant, économique et écologique ; inconvénient : "
                                "fatigue plus vite et moins puissante sur de longues distances. (2,5 pts par "
                                "élément cohérent)", False)],
        [("Ex. 3 — ", False),
         ("1. Faux. La motorisation mécanique utilise un ressort ou un élastique. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Vrai. (1,5 pt)", False)],
        [("4. Faux. Il existe quatre modes : humaine, mécanique, thermique, électrique. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Réponse libre et justifiée : par exemple, l'élastique (motorisation mécanique), "
                                "car il est simple, peu coûteux et sans danger à manipuler en classe. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 4 - Construction d'un mini objet volant et d'un mini-vehicule
# ---------------------------------------------------------------------------
S4 = {
    "num": 4, "title": "Construction d'un mini objet volant et d'un mini-véhicule",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "concevoir et construire un prototype de mini objet volant et un prototype de mini-véhicule, à "
                "partir d'un cahier des charges simple.",
    "support": "papier, pailles, bâtonnets, bouchons, élastiques, ciseaux, ruban adhésif.",
    "cover_image": ("scripts/t5/generated_images/u4_s4_a_construction.jpg",
                     "Construction en classe d'un mini objet volant en papier et d'un mini-véhicule à élastique."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite un mode de motorisation simple à réaliser en classe pour un mini-véhicule.",
         "R.A. : la motorisation humaine (manivelle) ou mécanique (élastique).", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Avant de construire un objet technique, que doit-on préparer ?",
         "R.A. : une liste de ce que l'objet doit faire, et le matériel nécessaire.", "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Construction d'un mini objet volant et d'un "
                             "mini-véhicule ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez un cahier des charges simple : « L'objet volant doit parcourir au moins "
                            "3 mètres. Le mini-véhicule doit avancer en ligne droite sur 2 mètres. »",
         "R.A. : les élèves identifient les critères à respecter (distance, trajectoire).", "Lecture dirigée",
         "Cahier des charges", ""),
        ("4. Analyse", "Quelles étapes suivre pour construire ces objets en respectant le cahier des charges ?",
         "R.A. : choisir un modèle, rassembler le matériel, construire, puis tester.", "Discussion dirigée",
         "Documents", ""),
        ("5. Synthèse", "Donc, pour construire un objet technique, on suit ces étapes : 1. lire le cahier des "
                         "charges (ce que l'objet doit faire) ; 2. choisir un modèle (croquis) ; 3. rassembler "
                         "le matériel ; 4. construire le prototype ; 5. le tester.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "En groupes, construisez un avion en papier et un petit véhicule à élastique, en "
                            "suivant les étapes.",
         "Les élèves construisent leurs prototypes en groupe.", "Travail de groupe", "Papier, pailles, "
         "élastiques, bouchons", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite les cinq étapes de construction d'un objet technique.",
         "Ex. 1 : cahier des charges, modèle/croquis, matériel, construction, test.", "Évaluation écrite",
         "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Le cahier des charges"),
        ("body", "Avant de construire un objet technique, on rédige un cahier des charges : une liste de ce "
                 "que l'objet doit faire (sa fonction) et des contraintes à respecter (taille, matériaux "
                 "disponibles, distance à parcourir, sécurité)."),
        ("section", "2. Les étapes de construction"),
        ("body", "1. Lire et comprendre le cahier des charges. 2. Choisir un modèle à réaliser, en faisant un "
                 "croquis. 3. Rassembler le matériel nécessaire. 4. Construire le prototype, étape par étape. "
                 "5. Tester le prototype pour vérifier qu'il respecte le cahier des charges."),
        ("image", ("scripts/t5/generated_images/u4_s4_a_construction.jpg",
                   "Construction en classe d'un mini objet volant en papier et d'un mini-véhicule à élastique.")),
        ("section", "3. Exemple : construire un mini objet volant"),
        ("body", "Matériel simple : une feuille de papier (avion en papier) ou du papier léger et des pailles "
                 "(planeur). On plie ou on assemble les pièces selon un modèle, en veillant à l'équilibre entre "
                 "les forces du vol (portance, poids, propulsion, traînée) étudiées en séance 2."),
        ("section", "4. Exemple : construire un mini-véhicule"),
        ("body", "Matériel simple : un châssis en carton ou en bois léger, des bouchons comme roues, des "
                 "pailles comme essieux, un élastique tendu comme motorisation mécanique. On assemble les "
                 "pièces, puis on teste l'avancement en ligne droite."),
        ("section", "5. Sécurité pendant la construction"),
        ("body", "On utilise les ciseaux avec précaution, on ne tend pas un élastique vers le visage de "
                 "quelqu'un, et on range le matériel tranchant après usage."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Range dans l'ordre les étapes de construction d'un objet technique : "
                                  "A. tester le prototype · B. rassembler le matériel · C. lire le cahier des "
                                  "charges · D. construire le prototype · E. choisir un modèle (croquis)."),
        ("Exercice 2 (5 points)", " — Cite trois matériaux simples utilisables pour construire un mini-"
                                  "véhicule."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Le cahier des charges décrit ce que l'objet doit faire.\n"
                                  "2. On peut construire un prototype sans jamais le tester.\n"
                                  "3. Un élastique tendu peut servir de motorisation mécanique.\n"
                                  "4. La sécurité n'a pas d'importance pendant la construction."),
        ("Exercice 4 (4 points)", " — Propose un cahier des charges simple (deux critères) pour un mini objet "
                                  "volant que ta classe pourrait construire."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("C → E → B → D → A", True)],
        [("Ex. 2 — ", False), ("par exemple : carton, bouchons, pailles, élastiques. (1,66 pt par matériau "
                                "cohérent, 3 attendus)", False)],
        [("Ex. 3 — ", False),
         ("1. Vrai. (1,5 pt)", False)],
        [("2. Faux. Il faut toujours tester le prototype pour vérifier qu'il fonctionne. (1,5 pt)", False)],
        [("3. Vrai. (1,5 pt)", False)],
        [("4. Faux. La sécurité (usage des ciseaux, des élastiques) est essentielle pendant la construction. "
          "(1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Réponse libre : par exemple, « l'objet doit voler au moins 2 mètres » et "
                                "« l'objet doit être construit avec du papier uniquement ». (4 pts — 2 pts par "
                                "critère cohérent)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 5 - Analyse et amelioration du prototype construit
# ---------------------------------------------------------------------------
S5 = {
    "num": 5, "title": "Analyse et amélioration du prototype construit",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "tester un prototype, identifier ses points faibles et proposer des correctifs pour "
                "l'améliorer.",
    "support": "les prototypes construits en séance 4, mètre ou ficelle pour mesurer les distances, tableau "
               "noir.",
    "cover_image": ("scripts/t5/generated_images/u4_s5_a_amelioration.jpg",
                     "Test et amélioration d'un prototype : identifier les points faibles, proposer des correctifs."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite la dernière étape de la construction d'un objet technique.",
         "R.A. : le test du prototype.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Si ton objet volant ne parcourt que 1 mètre alors que le cahier des charges "
                                  "demande 3 mètres, que faire ?",
         "R.A. : chercher pourquoi il ne vole pas assez loin, puis modifier le prototype.",
         "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Analyse et amélioration du prototype "
                             "construit ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Testez à nouveau vos prototypes de la séance précédente. Mesurez la distance "
                            "parcourue ou observez le trajet. Notez les problèmes rencontrés.",
         "R.A. : par exemple, l'objet volant part de travers, ou le mini-véhicule n'avance pas en ligne "
         "droite.", "Expérimentation", "Prototypes, mètre ou ficelle", ""),
        ("4. Analyse", "Pour chaque problème observé, cherchez une cause possible.",
         "R.A. : objet volant déséquilibré — poids mal réparti ; véhicule qui dévie — roues mal alignées.",
         "Discussion dirigée", "Documents", ""),
        ("5. Synthèse", "Donc, après avoir testé un prototype, on identifie ses points faibles (ce qui ne "
                         "fonctionne pas comme prévu), on en cherche la cause, puis on propose des correctifs "
                         "(des modifications) pour l'améliorer. On recommence le test autant de fois que "
                         "nécessaire : c'est la démarche d'amélioration.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "En groupes, appliquez un correctif à votre prototype puis retestez-le.",
         "Les élèves modifient et retestent leur prototype.", "Travail de groupe", "Prototypes, matériel", ""),
        ("III. ÉVALUATION", "Ex. 1 — Qu'est-ce qu'un correctif ?",
         "Ex. 1 : une modification apportée à un prototype pour corriger un problème identifié lors du test.",
         "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Pourquoi tester un prototype ?"),
        ("body", "Tester un prototype permet de vérifier s'il respecte le cahier des charges (par exemple, la "
                 "distance à parcourir) et de repérer ses points faibles."),
        ("section", "2. Identifier les points faibles"),
        ("body", "On observe attentivement le comportement du prototype : part-il de travers ? avance-t-il en "
                 "ligne droite ? atteint-il la distance demandée ? On note chaque problème observé."),
        ("image", ("scripts/t5/generated_images/u4_s5_a_amelioration.jpg",
                   "Test et amélioration d'un prototype : identifier les points faibles, proposer des correctifs.")),
        ("section", "3. Chercher une cause et proposer un correctif"),
        ("body", "Pour chaque point faible, on cherche une cause probable, puis on propose un correctif, "
                 "c'est-à-dire une modification du prototype. Exemples : si un objet volant penche d'un côté, "
                 "on rééquilibre son poids ; si un mini-véhicule dévie, on vérifie l'alignement de ses roues ; "
                 "si un objet volant ne va pas assez loin, on allège sa structure ou on améliore sa forme."),
        ("section", "4. Recommencer le test"),
        ("body", "Après avoir appliqué un correctif, on teste à nouveau le prototype. Cette démarche "
                 "(construire, tester, corriger, re-tester) peut se répéter plusieurs fois : c'est ainsi que "
                 "l'on améliore progressivement un objet technique."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Pour chaque problème, propose une cause possible et un correctif : "
                                  "1. un objet volant penche toujours du même côté · 2. un mini-véhicule dévie "
                                  "vers la gauche."),
        ("Exercice 2 (5 points)", " — Range dans l'ordre logique la démarche d'amélioration d'un prototype : "
                                  "A. appliquer un correctif · B. tester le prototype · C. identifier un point "
                                  "faible · D. retester le prototype."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Un prototype parfait du premier coup n'a jamais besoin d'être testé.\n"
                                  "2. Un correctif est une modification apportée pour corriger un problème.\n"
                                  "3. Il est inutile de retester un prototype après l'avoir modifié.\n"
                                  "4. Observer attentivement le comportement du prototype aide à trouver ses "
                                  "points faibles."),
        ("Exercice 4 (4 points)", " — Ton mini-véhicule n'avance que de 50 cm alors qu'il devrait avancer de "
                                  "2 mètres. Propose une cause possible et un correctif."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. cause : poids mal réparti — correctif : rééquilibrer le poids de l'objet "
                                "(2,5 pts) ; 2. cause : roues mal alignées — correctif : réaligner ou ajuster "
                                "les roues (2,5 pts)", False)],
        [("Ex. 2 — ", False), ("B → C → A → D", True)],
        [("Ex. 3 — ", False),
         ("1. Faux. Même un prototype qui semble réussi doit être testé pour le vérifier. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Faux. Il faut toujours retester un prototype après modification. (1,5 pt)", False)],
        [("4. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Par exemple, cause possible : l'élastique n'est pas assez tendu, ou les roues "
                                "frottent trop ; correctif : tendre davantage l'élastique ou vérifier que les "
                                "roues tournent librement. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 6 - Revision Unite IV
# ---------------------------------------------------------------------------
S6 = {
    "num": 6, "title": "Révision — Unité IV : Conception technologique", "kind": "revision",
    "cover_image": ("scripts/t5/generated_images/u4_bilan_r1.jpg",
                     "Bilan de l'Unité IV : objets volants, forces du vol, motorisation, construction de prototypes."),
    "theme": THEME, "ras_theme": "Objets volants, forces du vol, motorisation d'un mini-véhicule, conception, "
                                  "construction, test et amélioration de prototypes",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "traiter un sujet complet portant sur les séances 1 à 5, puis identifier ses points faibles.",
    "support": "sujet recopié au tableau ou polycopié, cahier de brouillon.",
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Sans ouvrir votre cahier : cite une des quatre forces du vol.",
         "R.A. : la portance, le poids, la propulsion ou la traînée.", "Questionnement oral", "—", ""),
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
    "sujet_title": "Sujet d'entraînement — Unité IV (Conception technologique) — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Vrai ou faux (2 points)\n"
         "1. La montgolfière est un objet plus léger que l'air.\n"
         "2. La traînée fait avancer un objet volant.\n"
         "B. Complète (2 points)\n"
         "3. La force qui tire un objet volant vers le bas s'appelle le ……………… .\n"
         "4. Un mini-véhicule à élastique utilise une motorisation ……………… ."),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "Une classe construit un avion en papier qui ne vole que 1,5 mètre alors que le cahier des charges "
         "demande 3 mètres.\n"
         "1. Cite deux causes possibles de ce problème. (2 pts)\n"
         "2. Propose un correctif pour chaque cause citée. (2 pts)\n"
         "3. Que doit-on faire après avoir appliqué les correctifs ? (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "On observe un drone qui vole grâce à quatre hélices motorisées électriquement.\n"
         "1. Ce drone est-il plus léger ou plus lourd que l'air ? (2 pts)\n"
         "2. Quelle force les hélices créent-elles principalement ? (2 pts)\n"
         "3. Quel mode de motorisation ce drone utilise-t-il ? (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Un camarade affirme : « Une fois le prototype construit, il n'y a plus rien à faire. »\n"
         "Réponds-lui en expliquant la démarche à suivre après la construction."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. Vrai. 2. Faux (elle freine). (1 pt par item)", False)],
        [("B. 3. poids. 4. mécanique. (1 pt par item)", False)],
        [("Renvoi : séances 1, 2, 3.", True)],
        [("Exercice 2 (6 pts)", True)],
        [("1. Par exemple : poids mal réparti, forme trop lourde ou peu aérodynamique. (2 pts)", False)],
        [("2. Rééquilibrer le poids ; alléger ou affiner la forme. (2 pts)", False)],
        [("3. Retester le prototype pour vérifier l'effet du correctif. (2 pts)", False)],
        [("Renvoi : séance 5.", True)],
        [("Exercice 3 (6 pts)", True)],
        [("1. Plus lourd que l'air. (2 pts)", False)],
        [("2. La propulsion (et une part de portance). (2 pts)", False)],
        [("3. La motorisation électrique. (2 pts)", False)],
        [("Renvoi : séances 1, 2, 3.", True)],
        [("Exercice 4 (4 pts)", True)],
        [("Après la construction, il faut tester le prototype, identifier ses points faibles, appliquer des "
          "correctifs puis retester : l'amélioration continue tant que le cahier des charges n'est pas atteint. "
          "(4 pts)", False)],
        [("Renvoi : séance 5.", True)],
        [("Repères de score : 16-20 acquis · 11-15 à consolider · 6-10 fragile · 0-5 reprendre les séances 1 à 5.", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 7 - Examen Unite IV
# ---------------------------------------------------------------------------
S7 = {
    "num": 7, "title": "Sujet d'examen ST T5 — Unité IV : Conception technologique", "kind": "exam",
    "cover_image": ("scripts/t5/generated_images/u4_bilan_e1.jpg",
                     "Sujet d'examen, Unité IV : Conception technologique."),
    "theme": THEME, "ras_theme": "Objets volants, forces du vol, motorisation d'un mini-véhicule, conception, "
                                  "construction, test et amélioration de prototypes",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "évaluer la maîtrise des notions des séances 1 à 5 — objets volants, forces du vol, "
                "motorisation, construction et amélioration de prototypes.",
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
    "sujet_title": "SUJET D'EXAMEN — Unité IV : Conception technologique — Durée : ____________ — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Complète avec le mot exact (2 points)\n"
         "1. La force qui pousse un objet volant vers le haut s'appelle la ……………… .\n"
         "2. Une modification apportée à un prototype pour corriger un problème s'appelle un ……………… .\n"
         "B. QCM — une seule réponse exacte (2 points)\n"
         "1. Un objet plus léger que l'air est : A. un avion B. une montgolfière C. un drone\n"
         "2. Un véhicule qui avance grâce aux jambes d'un cycliste utilise une motorisation : A. thermique "
         "B. électrique C. humaine"),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "On teste un cerf-volant qui ne monte presque pas, même avec du vent.\n"
         "1. Quelle force semble insuffisante ? (2 pts)\n"
         "2. Cite une cause possible de ce problème. (2 pts)\n"
         "3. Propose un correctif pour améliorer le vol du cerf-volant. (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Une équipe construit un mini-véhicule à élastique qui doit parcourir 2 mètres en ligne droite selon "
         "le cahier des charges, mais il ne parcourt que 80 cm et dévie vers la droite.\n"
         "1. Cite les deux problèmes rencontrés par ce prototype. (2 pts)\n"
         "2. Propose une cause possible pour chaque problème. (2 pts)\n"
         "3. Pourquoi est-il important de retester après avoir appliqué un correctif ? (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Ta classe doit choisir entre construire un mini objet volant et un mini-véhicule avec un budget "
         "limité de matériaux simples (papier, pailles, élastiques, bouchons).\n"
         "Propose un plan en deux étapes pour réussir ce projet, en citant les notions apprises dans l'unité."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. portance. 2. correctif. (1 pt par item)", False)],
        [("B. 1. B. 2. C. (1 pt par item)", False)],
        [("Exercice 2 (6 pts)", True)],
        [("1. La portance. (2 pts)", False)],
        [("2. Par exemple : la voile du cerf-volant est trop petite ou mal orientée face au vent. (2 pts)", False)],
        [("3. Par exemple : agrandir la voile ou ajuster l'angle d'attaque face au vent. (2 pts)", False)],
        [("Exercice 3 (6 pts)", True)],
        [("1. Il ne parcourt pas assez de distance (80 cm au lieu de 2 m) et il dévie vers la droite. (2 pts)", False)],
        [("2. Distance insuffisante : élastique pas assez tendu ou trop de frottement ; déviation : roues mal "
          "alignées. (2 pts)", False)],
        [("3. Pour vérifier que le correctif a bien résolu le problème avant de considérer le prototype comme "
          "terminé. (2 pts)", False)],
        [("Exercice 4 (4 pts)", True)],
        [("Réponse libre et cohérente : par exemple, 1. rédiger un cahier des charges et choisir un modèle "
          "adapté au matériel disponible ; 2. construire, tester, puis améliorer le prototype par correctifs "
          "successifs. (4 pts)", False)],
    ],
}
