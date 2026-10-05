# -*- coding: utf-8 -*-
"""Content for UNITE XI - Electricite et magnetisme (seances 1-6).
Grounded in PE T5 p.128-130 (RAS: distinguer conducteur/isolant et
generateur/recepteur, decrire les caracteristiques d'une pile, d'une lampe
et d'une DEL, connaitre les regles de securite electrique, et construire
une mini-lampe de poche).
"""

THEME = "Électricité et magnétisme"
RAS_THEME_1 = "Distinguer conducteur et isolant, générateur et récepteur ; décrire les caractéristiques d'une pile, d'une lampe et d'une DEL"
RAS_THEME_2 = "Connaître les règles de sécurité électrique et construire une mini-lampe de poche"
VALEURS = "sens de la sécurité, rigueur, ingéniosité, esprit d'initiative"

# ---------------------------------------------------------------------------
# SEANCE 1 - Conducteur, isolant, generateur, recepteur
# ---------------------------------------------------------------------------
S1 = {
    "num": 1, "title": "Conducteur, isolant, générateur, récepteur",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "distinguer un matériau conducteur d'un matériau isolant, et un générateur d'un récepteur "
                "dans un circuit électrique.",
    "support": "une pile, une petite lampe, des fils, des objets en métal et en plastique, tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u11_s1_a_conducteur_isolant.jpg",
                     "Matériaux conducteurs (métal) et isolants (plastique, bois, caoutchouc) de l'électricité."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite un objet qui fonctionne avec une pile.",
         "R.A. : une lampe de poche, une télécommande, un jouet.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Si on relie une pile à une lampe avec un fil en métal, puis avec une règle "
                                  "en plastique, la lampe s'allume-t-elle dans les deux cas ?",
         "R.A. : elle s'allume avec le fil en métal, mais pas avec la règle en plastique.",
         "Questionnement oral", "Pile, lampe, fils, règle", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Conducteur, isolant, générateur, "
                             "récepteur ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Testez, avec un circuit pile-lampe-fils, si différents matériaux (métal, "
                            "plastique, bois, caoutchouc) laissent passer le courant électrique.",
         "R.A. : les objets en métal laissent passer le courant (la lampe s'allume) ; le plastique, le bois "
         "sec et le caoutchouc ne le laissent pas passer.", "Expérimentation", "Pile, lampe, fils, objets "
         "variés", ""),
        ("4. Analyse", "Dans ce circuit, quel élément fournit l'énergie électrique, et quel élément "
                        "l'utilise ?",
         "R.A. : la pile fournit l'énergie électrique ; la lampe l'utilise pour produire de la lumière.",
         "Étude de cas", "Documents, schéma", ""),
        ("5. Synthèse", "Donc, un matériau conducteur laisse passer le courant électrique (la plupart des "
                         "métaux). Un matériau isolant ne laisse pas passer le courant électrique (plastique, "
                         "bois sec, caoutchouc, verre). Dans un circuit électrique, le générateur (comme une "
                         "pile) fournit l'énergie électrique, et le récepteur (comme une lampe, une DEL ou un "
                         "moteur) utilise cette énergie pour produire de la lumière, du mouvement ou un autre "
                         "effet.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Une cuillère en métal est-elle conductrice ou isolante ?",
         "Ex. 1 : conductrice.", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Quelle est la différence entre un générateur et un récepteur ?",
         "Ex. 1 : le générateur fournit l'énergie électrique ; le récepteur l'utilise.", "Évaluation écrite",
         "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Les matériaux conducteurs"),
        ("body", "Un matériau conducteur laisse passer le courant électrique. La plupart des métaux (fer, "
                 "cuivre, aluminium) sont de bons conducteurs. L'eau contenant des impuretés (eau du robinet, "
                 "eau salée) conduit aussi l'électricité."),
        ("section", "2. Les matériaux isolants"),
        ("body", "Un matériau isolant ne laisse pas passer le courant électrique. Le plastique, le bois sec, "
                 "le caoutchouc et le verre sont de bons isolants. C'est pourquoi les fils électriques sont "
                 "recouverts de plastique, et les manches de certains outils sont isolés."),
        ("image", ("scripts/t5/generated_images/u11_s1_a_conducteur_isolant.jpg",
                   "Matériaux conducteurs (métal) et isolants (plastique, bois, caoutchouc) de l'électricité.")),
        ("section", "3. Le générateur"),
        ("body", "Un générateur est un élément qui fournit l'énergie électrique à un circuit. La pile et la "
                 "batterie sont des générateurs courants."),
        ("section", "4. Le récepteur"),
        ("body", "Un récepteur est un élément qui utilise l'énergie électrique fournie par le générateur, pour "
                 "produire un effet : une lampe ou une DEL produit de la lumière, un moteur produit un "
                 "mouvement, un haut-parleur produit du son."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Classe ces matériaux en « conducteur » ou « isolant » : 1. le fer · "
                                  "2. le plastique · 3. le cuivre · 4. le bois sec · 5. le caoutchouc."),
        ("Exercice 2 (5 points)", " — Pour chacun de ces éléments, indique s'il s'agit d'un générateur ou d'un "
                                  "récepteur : 1. une pile · 2. une lampe · 3. une batterie · 4. un moteur "
                                  "électrique."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Tous les matériaux laissent passer le courant électrique.\n"
                                  "2. Le plastique est un bon isolant.\n"
                                  "3. Une pile est un récepteur.\n"
                                  "4. Une lampe utilise l'énergie électrique fournie par le générateur."),
        ("Exercice 4 (4 points)", " — Explique pourquoi les fils électriques sont recouverts d'une gaine en "
                                  "plastique."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. conducteur", True), (" · 2. ", False), ("isolant", True), (" · 3. ", False),
         ("conducteur", True), (" · 4. ", False), ("isolant", True), (" · 5. ", False), ("isolant", True)],
        [("Ex. 2 — ", False), ("1. générateur", True), (" · 2. ", False), ("récepteur", True), (" · 3. ", False),
         ("générateur", True), (" · 4. ", False), ("récepteur", True)],
        [("Ex. 3 — ", False),
         ("1. Faux. Les isolants ne laissent pas passer le courant. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Faux. Une pile est un générateur. (1,5 pt)", False)],
        [("4. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Le plastique est un isolant : la gaine protège les utilisateurs d'un contact "
                                "direct avec le métal conducteur du fil, évitant les chocs électriques. "
                                "(4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 2 - Les caracteristiques d'une pile, d'une lampe et d'une DEL
# ---------------------------------------------------------------------------
S2 = {
    "num": 2, "title": "Les caractéristiques d'une pile, d'une lampe et d'une DEL",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "décrire les caractéristiques d'une pile, d'une lampe et d'une DEL (bornes, tension "
                "nominale).",
    "support": "une pile, une petite lampe, une DEL, tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u11_s2_a_pile_lampe_del.jpg",
                     "Les caractéristiques d'une pile, d'une lampe et d'une DEL : bornes et tension nominale."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite un exemple de générateur et un exemple de récepteur.",
         "R.A. : la pile (générateur) ; la lampe (récepteur).", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Observe une pile : que remarques-tu à ses deux extrémités ?",
         "R.A. : une extrémité marquée « + » et une marquée « - ».", "Questionnement oral", "Pile", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les caractéristiques d'une pile, d'une "
                             "lampe et d'une DEL ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez une pile (ses deux bornes + et -, son voltage inscrit, par exemple "
                            "1,5 V), une lampe (ses deux bornes, son voltage inscrit) et une DEL (ses deux "
                            "pattes de longueurs différentes).",
         "R.A. : chaque composant a deux bornes ; la pile et la lampe indiquent une valeur en volts ; la DEL a "
         "une patte plus longue que l'autre.", "Observation dirigée", "Pile, lampe, DEL", ""),
        ("4. Analyse", "Pourquoi est-il important de respecter le sens de branchement d'une DEL, "
                        "contrairement à une lampe classique ?",
         "R.A. : parce qu'une DEL est polarisée : elle ne s'allume que si elle est branchée dans le bon sens.",
         "Étude de cas", "Documents", ""),
        ("5. Synthèse", "Donc, une pile possède deux bornes (+ et -) et une tension nominale indiquée en "
                         "volts (par exemple 1,5 V, 4,5 V ou 9 V), qui correspond à la tension qu'elle doit "
                         "fournir. Une lampe possède aussi deux bornes et une tension nominale à respecter pour "
                         "fonctionner correctement sans griller. Une DEL (diode électroluminescente) possède "
                         "deux bornes de longueurs différentes et doit être branchée dans le bon sens "
                         "(polarité) pour s'allumer ; elle consomme en général moins d'énergie qu'une lampe "
                         "classique.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Une DEL ne s'allume pas dans un circuit. Que peut-on vérifier en premier ?",
         "Ex. 1 : vérifier si elle est branchée dans le bon sens (polarité).", "Travail de groupe",
         "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Qu'est-ce que la tension nominale d'une pile ?",
         "Ex. 1 : la tension (en volts) que la pile est conçue pour fournir.", "Évaluation écrite", "Cahier",
         ""),
    ],
    "lecon": [
        ("section", "1. Les caractéristiques d'une pile"),
        ("body", "Une pile possède deux bornes : une borne positive (+) et une borne négative (-). Elle a "
                 "aussi une tension nominale, indiquée en volts (V) sur son emballage (par exemple 1,5 V pour "
                 "une pile ronde classique, 4,5 V ou 9 V pour d'autres types de piles)."),
        ("section", "2. Les caractéristiques d'une lampe"),
        ("body", "Une lampe (ampoule) possède deux bornes, et une tension nominale indiquée par le fabricant. "
                 "Si on lui applique une tension trop forte, son filament peut griller ; si la tension est trop "
                 "faible, elle s'allume faiblement ou pas du tout."),
        ("image", ("scripts/t5/generated_images/u11_s2_a_pile_lampe_del.jpg",
                   "Les caractéristiques d'une pile, d'une lampe et d'une DEL : bornes et tension nominale.")),
        ("section", "3. Les caractéristiques d'une DEL"),
        ("body", "Une DEL (diode électroluminescente, souvent appelée LED) possède deux pattes de longueurs "
                 "différentes : la plus longue est la borne positive, la plus courte la borne négative. "
                 "Contrairement à une lampe classique, une DEL est polarisée : elle ne s'allume que si elle est "
                 "branchée dans le bon sens. Elle a aussi une tension nominale à respecter, et consomme en "
                 "général moins d'énergie qu'une lampe classique pour un éclairage équivalent."),
        ("section", "4. Pourquoi connaître ces caractéristiques ?"),
        ("body", "Connaître les bornes et la tension nominale de chaque composant permet de construire un "
                 "circuit électrique qui fonctionne correctement, sans risquer d'endommager les composants."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Pour chacun de ces composants, cite ses deux bornes : 1. une pile · "
                                  "2. une DEL."),
        ("Exercice 2 (5 points)", " — Complète : la …………… d'une pile est indiquée en volts ; une DEL doit être "
                                  "branchée dans le bon sens car elle est …………… ."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Une lampe classique doit obligatoirement être branchée dans un sens "
                                  "précis.\n"
                                  "2. Une DEL possède deux pattes de longueurs différentes.\n"
                                  "3. La tension nominale d'une pile est indiquée en volts.\n"
                                  "4. Appliquer une tension trop forte à une lampe peut griller son filament."),
        ("Exercice 4 (4 points)", " — Explique pourquoi une DEL branchée à l'envers ne s'allume pas, "
                                  "contrairement à une lampe classique."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. borne + et borne - ; 2. patte longue (+) et patte courte (-). (2,5 pts par "
                                "composant correct)", False)],
        [("Ex. 2 — ", False), ("tension nominale ; polarisée. (2,5 pts par terme exact)", False)],
        [("Ex. 3 — ", False),
         ("1. Faux. Une lampe classique n'est pas polarisée, elle fonctionne dans les deux sens. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Vrai. (1,5 pt)", False)],
        [("4. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Parce qu'une DEL est polarisée : le courant ne peut la traverser que dans un "
                                "seul sens, contrairement à une lampe classique qui n'est pas sensible au sens "
                                "du branchement. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 3 - Les regles de securite et les risques electriques
# ---------------------------------------------------------------------------
S3 = {
    "num": 3, "title": "Les règles de sécurité et les risques électriques",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "identifier les risques électriques (court-circuit, surtension) et les règles de sécurité à "
                "respecter.",
    "support": "affiche sur la sécurité électrique, pile, fils, lampe, tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u11_s3_a_securite.jpg",
                     "Les règles de sécurité électrique : éviter le court-circuit, respecter la tension, ne pas toucher avec les mains mouillées."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Qu'est-ce que la tension nominale d'un composant électrique ?",
         "R.A. : la tension en volts que le composant est conçu pour recevoir.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Que pourrait-il se passer si on relie directement la borne + et la borne - "
                                  "d'une pile avec un simple fil, sans lampe ?",
         "R.A. : le fil ou la pile peuvent chauffer fortement ; c'est dangereux.", "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les règles de sécurité et les risques "
                             "électriques ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez (sous la supervision de l'enseignant, sans le réaliser soi-même) un "
                            "schéma montrant un court-circuit : une pile reliée directement par un fil, sans "
                            "récepteur.",
         "R.A. : les élèves comprennent que le courant circule très fort sans rien pour le limiter.",
         "Observation dirigée", "Schéma", ""),
        ("4. Analyse", "Pourquoi est-il dangereux de brancher un appareil conçu pour 4,5 V sur une source de "
                        "9 V ?",
         "R.A. : la tension trop forte (surtension) peut endommager ou détruire l'appareil, voire provoquer un "
         "incendie.", "Étude de cas", "Documents", ""),
        ("5. Synthèse", "Donc, deux risques électriques principaux sont à connaître : le court-circuit "
                         "(quand le courant passe directement entre les deux bornes d'un générateur sans "
                         "traverser de récepteur, ce qui provoque un échauffement dangereux) et la surtension "
                         "(quand on applique à un appareil une tension plus forte que sa tension nominale, ce "
                         "qui peut l'endommager). Pour se protéger, il faut : ne jamais toucher un fil "
                         "électrique dénudé, ne jamais manipuler l'électricité avec les mains mouillées, "
                         "respecter la tension nominale des appareils, et demander l'aide d'un adulte pour tout "
                         "montage électrique important.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Pourquoi ne faut-il jamais toucher un appareil électrique avec les mains "
                            "mouillées ?",
         "Ex. 1 : parce que l'eau (surtout avec des impuretés) est conductrice et augmente le risque de choc "
         "électrique.", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Qu'est-ce qu'un court-circuit ?",
         "Ex. 1 : le passage direct du courant entre les deux bornes d'un générateur, sans récepteur, "
         "provoquant un échauffement dangereux.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Le court-circuit"),
        ("body", "Un court-circuit se produit quand le courant électrique passe directement d'une borne à "
                 "l'autre du générateur, sans traverser de récepteur qui limiterait son passage. Le courant "
                 "devient alors très fort, ce qui provoque un échauffement important, pouvant endommager la "
                 "pile, faire fondre un fil, ou provoquer un incendie."),
        ("section", "2. La surtension"),
        ("body", "La surtension se produit quand on applique à un appareil une tension plus élevée que sa "
                 "tension nominale. Cela peut endommager ou détruire l'appareil (griller une lampe ou une "
                 "DEL)."),
        ("image", ("scripts/t5/generated_images/u11_s3_a_securite.jpg",
                   "Les règles de sécurité électrique : éviter le court-circuit, respecter la tension, ne pas toucher avec les mains mouillées.")),
        ("section", "3. Les règles de sécurité"),
        ("body", "Pour éviter les accidents électriques : ne jamais toucher un fil électrique dont le "
                 "revêtement isolant est abîmé ; ne jamais manipuler un appareil électrique avec les mains "
                 "mouillées, car l'eau conduit le courant ; toujours respecter la tension nominale indiquée sur "
                 "les appareils ; ne jamais relier directement les deux bornes d'une pile avec un simple fil "
                 "(court-circuit) ; demander l'aide d'un adulte pour tout montage électrique important."),
        ("section", "4. En cas d'accident électrique"),
        ("body", "Si quelqu'un reçoit un choc électrique, il faut immédiatement couper l'alimentation "
                 "électrique (sans toucher directement la personne tant que le courant n'est pas coupé) et "
                 "prévenir un adulte ou les services de secours."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Définis en une phrase : 1. un court-circuit · 2. une surtension."),
        ("Exercice 2 (5 points)", " — Cite trois règles de sécurité à respecter pour éviter les accidents "
                                  "électriques."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Un court-circuit est sans danger.\n"
                                  "2. L'eau peut conduire le courant électrique et augmenter le risque de choc.\n"
                                  "3. On peut appliquer n'importe quelle tension à un appareil sans risque.\n"
                                  "4. Il faut couper l'alimentation avant de porter secours à une personne "
                                  "électrisée."),
        ("Exercice 4 (4 points)", " — Explique pourquoi il est dangereux de relier directement les deux bornes "
                                  "d'une pile avec un simple fil métallique."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. passage direct du courant entre les deux bornes d'un générateur, sans "
                                "récepteur ; 2. application d'une tension trop forte par rapport à la tension "
                                "nominale d'un appareil. (2,5 pts par définition correcte)", False)],
        [("Ex. 2 — ", False), ("par exemple : ne pas toucher un fil dénudé, ne pas manipuler l'électricité avec "
                                "les mains mouillées, respecter la tension nominale. (1,66 pt par règle "
                                "correcte)", False)],
        [("Ex. 3 — ", False),
         ("1. Faux. Un court-circuit peut provoquer un échauffement dangereux. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Faux. Une surtension peut endommager ou détruire l'appareil. (1,5 pt)", False)],
        [("4. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Le courant devient très fort car rien ne limite son passage (pas de "
                                "récepteur) : cela peut faire chauffer fortement le fil et la pile, et "
                                "provoquer un accident. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 4 - Construction d'une mini-lampe de poche
# ---------------------------------------------------------------------------
S4 = {
    "num": 4, "title": "Construction d'une mini-lampe de poche",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "concevoir et construire une mini-lampe de poche fonctionnelle, à partir d'une pile, d'une "
                "DEL (ou lampe), de fils et d'un interrupteur.",
    "support": "pile, DEL ou petite lampe, fils conducteurs, interrupteur simple ou trombone, support (carton, "
               "bouteille), ruban adhésif.",
    "cover_image": ("scripts/t5/generated_images/u11_s4_a_mini_lampe.jpg",
                     "Construction d'une mini-lampe de poche avec une pile, une DEL, des fils et un interrupteur."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite une règle de sécurité électrique.",
         "R.A. : ne pas toucher un fil dénudé, ne pas manipuler avec les mains mouillées.", "Questionnement "
         "oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Quels éléments faut-il assembler pour fabriquer une lampe de poche simple ?",
         "R.A. : une pile, une lampe ou une DEL, des fils, et un interrupteur.", "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Construction d'une mini-lampe de poche ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez un cahier des charges simple : « La mini-lampe de poche doit s'allumer et "
                            "s'éteindre grâce à un interrupteur, et tenir dans la main. »",
         "R.A. : les élèves identifient les critères à respecter.", "Lecture dirigée", "Cahier des charges", ""),
        ("4. Analyse", "Dans quel ordre faut-il relier la pile, la DEL (ou lampe), l'interrupteur et les "
                        "fils pour que le circuit fonctionne ?",
         "R.A. : la pile, l'interrupteur et la DEL (ou lampe) doivent être reliés en boucle par les fils, en "
         "respectant le sens de branchement de la DEL si elle est utilisée.", "Discussion dirigée", "Schéma de "
         "circuit", ""),
        ("5. Synthèse", "Donc, pour construire une mini-lampe de poche, on suit les étapes suivantes : "
                         "1. rassembler le matériel (pile, DEL ou lampe, fils, interrupteur, support) ; "
                         "2. relier la pile, l'interrupteur et la DEL (ou lampe) en circuit fermé avec les "
                         "fils, en respectant la polarité de la DEL si elle est utilisée ; 3. fixer le montage "
                         "sur un support (carton, bouteille) ; 4. tester que la lampe s'allume et s'éteint bien "
                         "grâce à l'interrupteur ; 5. améliorer le montage si besoin.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "En groupes, sous la supervision de l'enseignant, construisez votre mini-lampe de "
                            "poche et testez-la.",
         "Les élèves construisent et testent leur mini-lampe de poche.", "Travail de groupe", "Pile, DEL, fils, "
         "interrupteur, support", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite les quatre éléments nécessaires pour construire une mini-lampe de "
                             "poche simple.",
         "Ex. 1 : une pile, une DEL (ou lampe), des fils, un interrupteur.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Le cahier des charges d'une mini-lampe de poche"),
        ("body", "Une mini-lampe de poche simple doit : s'allumer et s'éteindre grâce à un interrupteur, "
                 "éclairer suffisamment, et être facile à tenir en main."),
        ("section", "2. Le matériel nécessaire"),
        ("body", "Une pile (générateur), une DEL ou une petite lampe (récepteur), des fils conducteurs pour "
                 "relier les éléments, un interrupteur (ou un trombone utilisé comme interrupteur simple), et "
                 "un support (carton, petite bouteille) pour tenir l'ensemble."),
        ("image", ("scripts/t5/generated_images/u11_s4_a_mini_lampe.jpg",
                   "Construction d'une mini-lampe de poche avec une pile, une DEL, des fils et un interrupteur.")),
        ("section", "3. Les étapes de construction"),
        ("body", "1. Rassembler le matériel. 2. Relier la pile, l'interrupteur et la DEL (ou la lampe) en un "
                 "circuit fermé à l'aide des fils, en respectant le sens de branchement si une DEL est "
                 "utilisée. 3. Fixer le montage sur le support choisi. 4. Tester : l'interrupteur fermé, la "
                 "lampe doit s'allumer ; l'interrupteur ouvert, elle doit s'éteindre. 5. Si la lampe ne "
                 "s'allume pas, vérifier les branchements, la pile et le sens de la DEL, puis corriger."),
        ("section", "4. Sécurité pendant la construction"),
        ("body", "On utilise toujours une pile de faible tension (1,5 V à 9 V), adaptée à l'âge des élèves, et "
                 "on évite tout court-circuit en ne reliant jamais directement les deux bornes de la pile sans "
                 "récepteur. La construction se fait sous la supervision de l'enseignant."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Cite les cinq éléments nécessaires pour construire une mini-lampe de "
                                  "poche."),
        ("Exercice 2 (5 points)", " — Range dans l'ordre logique les étapes de construction d'une mini-lampe "
                                  "de poche : A. tester le montage · B. rassembler le matériel · C. fixer le "
                                  "montage sur un support · D. relier la pile, l'interrupteur et la DEL."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Le sens de branchement d'une DEL n'a pas d'importance.\n"
                                  "2. Un trombone peut servir d'interrupteur simple.\n"
                                  "3. Il ne faut jamais tester son montage avant de le considérer terminé.\n"
                                  "4. Un court-circuit doit être évité pendant la construction."),
        ("Exercice 4 (4 points)", " — Ta mini-lampe de poche ne s'allume pas après assemblage. Cite deux "
                                  "vérifications à faire pour trouver le problème."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("une pile, une DEL (ou lampe), des fils, un interrupteur, un support. (1 pt par "
                                "élément correct)", False)],
        [("Ex. 2 — ", False), ("B → D → C → A", True)],
        [("Ex. 3 — ", False),
         ("1. Faux. Une DEL est polarisée, le sens de branchement est important. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Faux. Il faut toujours tester le montage pour vérifier qu'il fonctionne. (1,5 pt)", False)],
        [("4. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Vérifier le sens de branchement de la DEL, et vérifier que la pile est bien "
                                "chargée et bien connectée. (4 pts — 2 pts par vérification cohérente)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 5 - Revision Unite XI
# ---------------------------------------------------------------------------
S5 = {
    "num": 5, "title": "Révision — Unité XI : Électricité et magnétisme", "kind": "revision",
    "cover_image": ("scripts/t5/generated_images/u11_bilan_r1.jpg",
                     "Bilan de l'Unité XI : conducteur/isolant, pile/lampe/DEL, sécurité électrique, mini-lampe de poche."),
    "theme": THEME, "ras_theme": "Conducteur/isolant, générateur/récepteur, caractéristiques pile/lampe/DEL, "
                                  "sécurité électrique, construction d'une mini-lampe de poche",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "traiter un sujet complet portant sur les séances 1 à 4, puis identifier ses points faibles.",
    "support": "sujet recopié au tableau ou polycopié, cahier de brouillon.",
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Sans ouvrir votre cahier : cite un matériau conducteur et un matériau isolant.",
         "R.A. : le métal (conducteur) ; le plastique (isolant).", "Questionnement oral", "—", ""),
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
    "sujet_title": "Sujet d'entraînement — Unité XI (Électricité et magnétisme) — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Vrai ou faux (2 points)\n"
         "1. Le métal est un bon conducteur électrique.\n"
         "2. Une DEL fonctionne dans n'importe quel sens de branchement.\n"
         "B. Complète (2 points)\n"
         "3. Dans un circuit, la pile est le …………… et la lampe est le …………… .\n"
         "4. Relier directement les deux bornes d'une pile sans récepteur provoque un …………… ."),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "On construit un circuit avec une pile de 4,5 V et une DEL prévue pour 3 V.\n"
         "1. Quel risque électrique cette situation présente-t-elle ? (2 pts)\n"
         "2. Comment s'appelle ce phénomène ? (2 pts)\n"
         "3. Que risque-t-il d'arriver à la DEL ? (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Un élève construit une mini-lampe de poche avec une pile, une DEL, des fils et un interrupteur, mais "
         "la lampe ne s'allume pas.\n"
         "1. Cite deux vérifications possibles pour trouver la panne. (2 pts)\n"
         "2. Pourquoi le sens de branchement de la DEL est-il important à vérifier ? (2 pts)\n"
         "3. Que doit-on faire après avoir corrigé le problème ? (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Un camarade veut toucher un fil électrique dont le plastique isolant est abîmé, pour voir s'il "
         "fonctionne.\n"
         "Explique-lui pourquoi c'est dangereux et ce qu'il devrait faire à la place."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. Vrai. 2. Faux (elle est polarisée). (1 pt par item)", False)],
        [("B. 3. générateur ; récepteur. 4. court-circuit. (1 pt par item)", False)],
        [("Renvoi : séances 1, 2, 3.", True)],
        [("Exercice 2 (6 pts)", True)],
        [("1. Un risque de surtension. (2 pts)", False)],
        [("2. La surtension. (2 pts)", False)],
        [("3. Elle risque d'être endommagée ou de griller. (2 pts)", False)],
        [("Renvoi : séances 2, 3.", True)],
        [("Exercice 3 (6 pts)", True)],
        [("1. Vérifier le sens de branchement de la DEL, vérifier l'état de la pile. (2 pts)", False)],
        [("2. Parce qu'une DEL est polarisée : elle ne s'allume que dans un sens de branchement précis. "
          "(2 pts)", False)],
        [("3. Retester le montage pour vérifier qu'il fonctionne bien. (2 pts)", False)],
        [("Renvoi : séance 4.", True)],
        [("Exercice 4 (4 pts)", True)],
        [("C'est dangereux car le métal conducteur du fil est exposé et peut provoquer un choc électrique ; il "
          "faudrait plutôt isoler le fil avec du ruban adhésif ou demander l'aide d'un adulte. (4 pts)", False)],
        [("Renvoi : séances 1, 3.", True)],
        [("Repères de score : 16-20 acquis · 11-15 à consolider · 6-10 fragile · 0-5 reprendre les séances 1 à 4.", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 6 - Examen Unite XI
# ---------------------------------------------------------------------------
S6 = {
    "num": 6, "title": "Sujet d'examen ST T5 — Unité XI : Électricité et magnétisme", "kind": "exam",
    "cover_image": ("scripts/t5/generated_images/u11_bilan_e1.jpg",
                     "Sujet d'examen, Unité XI : Électricité et magnétisme."),
    "theme": THEME, "ras_theme": "Conducteur/isolant, générateur/récepteur, caractéristiques pile/lampe/DEL, "
                                  "sécurité électrique, construction d'une mini-lampe de poche",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "évaluer la maîtrise des notions des séances 1 à 4 — conducteur/isolant, pile/lampe/DEL, "
                "sécurité électrique, construction de circuit.",
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
    "sujet_title": "SUJET D'EXAMEN — Unité XI : Électricité et magnétisme — Durée : ____________ — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Complète avec le mot exact (2 points)\n"
         "1. Un matériau qui ne laisse pas passer le courant électrique est dit ……………… .\n"
         "2. L'élément d'un circuit qui fournit l'énergie électrique s'appelle le ……………… .\n"
         "B. QCM — une seule réponse exacte (2 points)\n"
         "1. Une DEL est polarisée, ce qui signifie : A. elle fonctionne dans les deux sens B. elle ne "
         "fonctionne que dans un sens C. elle ne fonctionne jamais\n"
         "2. Un court-circuit se produit quand : A. le courant traverse un récepteur B. le courant passe "
         "directement entre les deux bornes du générateur C. la pile est déchargée"),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "On observe une pile marquée 9 V reliée à une DEL prévue pour une tension plus faible.\n"
         "1. Quel risque cette situation présente-t-elle ? (2 pts)\n"
         "2. Comment s'appelle ce phénomène ? (2 pts)\n"
         "3. Que pourrait-on faire pour éviter ce risque ? (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Une classe construit des mini-lampes de poche avec pile, DEL, fils et interrupteur.\n"
         "1. Cite le rôle de chacun de ces quatre éléments. (3 pts)\n"
         "2. Que doit-on vérifier si la lampe de l'un des groupes ne s'allume pas ? (2 pts)\n"
         "3. Pourquoi est-il important de tester le montage avant de le considérer terminé ? (1 pt)"),
        ("Exercice 4 — Situation (4 points)",
         "Ton petit frère veut toucher une prise électrique avec les mains mouillées pour voir ce qui se "
         "passe.\n"
         "Explique-lui, en deux phrases, pourquoi c'est très dangereux."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. isolant. 2. générateur. (1 pt par item)", False)],
        [("B. 1. B. 2. B. (1 pt par item)", False)],
        [("Exercice 2 (6 pts)", True)],
        [("1. Un risque de surtension pour la DEL. (2 pts)", False)],
        [("2. La surtension. (2 pts)", False)],
        [("3. Utiliser une pile de tension adaptée à la DEL, ou un composant qui limite la tension. (2 pts)", False)],
        [("Exercice 3 (6 pts)", True)],
        [("1. Pile : fournit l'énergie (générateur) ; DEL : produit la lumière (récepteur) ; fils : relient les "
          "composants (conducteurs) ; interrupteur : ouvre ou ferme le circuit. (3 pts)", False)],
        [("2. Vérifier les branchements, le sens de la DEL, et l'état de la pile. (2 pts)", False)],
        [("3. Pour s'assurer que le montage fonctionne réellement avant de le considérer achevé. (1 pt)", False)],
        [("Exercice 4 (4 pts)", True)],
        [("L'eau, surtout avec des impuretés comme la sueur, conduit le courant électrique ; toucher une prise "
          "avec les mains mouillées augmente fortement le risque de choc électrique grave. (4 pts)", False)],
    ],
}
