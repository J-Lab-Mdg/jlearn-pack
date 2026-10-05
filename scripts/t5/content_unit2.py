# -*- coding: utf-8 -*-
"""Content for UNITE II - Objet technique (seances 1-7).
Grounded in PE T5 p.109-112 (RAS: Identifier les composants, materiaux et
regles de securite des outils simples et des systemes a pieces mobiles /
Identifier les machines simples dans des objets techniques et les
representer selon differentes techniques).
"""

THEME = "Objet technique"
RAS_THEME_1 = ("Identifier les composants, les matériaux et les règles de sécurité des outils simples "
               "et des systèmes composés de plusieurs pièces mobiles")
RAS_THEME_2 = "Identifier les machines simples dans des objets techniques et les représenter selon différentes techniques"
VALEURS = "esprit d'initiative, sens de la sécurité, ingéniosité, soin du matériel"

# ---------------------------------------------------------------------------
# SEANCE 1 - Les outils simples : composants, materiaux, proprietes, securite
# ---------------------------------------------------------------------------
S1 = {
    "num": 1, "title": "Les outils simples : composants, matériaux, propriétés et sécurité",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "identifier les composants, les matériaux et les consignes de sécurité des outils simples usuels.",
    "support": "outils réels ou images (marteau, angady, scie, tournevis, pince), tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u2_s1_a_outils.jpg",
                     "Des outils simples du quotidien malgache : marteau, angady, scie, tournevis, pince."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Citez un outil que vos parents utilisent à la maison ou au champ.",
         "R.A. : l'angady, le marteau, la machette (antsy lehibe).", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Voici un angady. De quelles parties est-il composé ?",
         "R.A. : un manche en bois et une lame en métal.", "Questionnement oral", "Angady ou image", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les outils simples : composants, matériaux, "
                             "propriétés et sécurité ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez un marteau, une scie et un tournevis. Repérez le manche et la partie active "
                            "(tête, lame, embout) de chacun, et notez leur matière.",
         "R.A. : marteau — manche en bois, tête en métal ; scie — manche en plastique ou bois, lame en métal "
         "dentée ; tournevis — manche en plastique, tige et embout en métal.", "Observation dirigée",
         "Outils réels ou images", ""),
        ("4. Analyse", "Pourquoi le manche est-il souvent en bois ou en plastique, et la partie active en métal ?",
         "R.A. : le bois et le plastique sont légers et isolants, faciles à tenir ; le métal est dur et résiste "
         "aux chocs et à l'usure.", "Étude de cas", "Outils, documents", ""),
        ("5. Synthèse", "Donc, un outil simple est formé d'un manche (bois, plastique) et d'une partie active "
                         "(métal, dure et résistante). Chaque matériau est choisi selon ses propriétés. Des règles "
                         "de sécurité (gants, rangement, vérification) évitent les accidents lors de son usage.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Cite une règle de sécurité à respecter avant d'utiliser une machette (antsy "
                            "lehibe).",
         "Ex. 1 : vérifier que la lame n'est pas abîmée, la ranger dans un fourreau, ne jamais la pointer vers "
         "quelqu'un.", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite les deux parties d'un angady et la matière de chacune.",
         "Ex. 1 : le manche (bois) et la lame (métal).", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Les composants d'un outil simple"),
        ("body", "Un outil simple est composé de deux grandes parties : le manche (la partie que l'on tient) et "
                 "la partie active (la partie qui agit sur la matière : tête, lame, embout, dents)."),
        ("body", "Exemples : le marteau a un manche et une tête ; l'angady a un manche et une lame ; la scie a "
                 "un manche et une lame dentée ; le tournevis a un manche, une tige et un embout."),
        ("section", "2. Les matériaux et leurs propriétés"),
        ("sub", "a. Le bois"),
        ("body", "Léger, facile à façonner, mais peut se casser ou pourrir avec le temps. Utilisé pour les "
                 "manches (angady, marteau, houe)."),
        ("sub", "b. Le métal (fer, acier)"),
        ("body", "Dur, résistant aux chocs et à l'usure, mais lourd et peut rouiller. Utilisé pour les parties "
                 "actives (lames, têtes, dents)."),
        ("sub", "c. Le plastique"),
        ("body", "Léger, isolant (ne conduit pas l'électricité), résistant à l'eau. Utilisé pour certains "
                 "manches (tournevis, pinces)."),
        ("image", ("scripts/t5/generated_images/u2_s1_b_securite.jpg",
                   "Consignes de sécurité pour l'usage des outils simples : gants, rangement, vérification.")),
        ("section", "3. Les règles de sécurité"),
        ("body", "Avant d'utiliser un outil : vérifier qu'il n'est pas abîmé (manche fendu, lame rouillée). "
                 "Pendant l'usage : porter des gants si nécessaire, tenir l'outil fermement, ne jamais pointer "
                 "la partie tranchante vers quelqu'un. Après l'usage : nettoyer et ranger l'outil hors de portée "
                 "des jeunes enfants, lame ou pointe protégée."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Pour chacun de ces outils, cite son manche et sa partie active : "
                                  "1. le marteau · 2. l'angady · 3. la scie · 4. le tournevis · 5. la pince."),
        ("Exercice 2 (5 points)", " — Associe chaque matériau à sa propriété principale : "
                                  "1. bois · 2. métal · 3. plastique — A. dur et résistant à l'usure · "
                                  "B. léger et isolant · C. léger et facile à façonner."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. La partie active d'un outil est toujours en bois.\n"
                                  "2. Il faut vérifier un outil avant de l'utiliser.\n"
                                  "3. On peut laisser une machette à la portée d'un jeune enfant.\n"
                                  "4. Le plastique est un bon isolant électrique."),
        ("Exercice 4 (4 points)", " — Choisis la bonne réponse :\n"
                                  "1. La partie active d'un angady est : A. le manche B. la lame C. la poignée\n"
                                  "2. Le métal est choisi pour les lames car il est : A. léger B. dur et résistant "
                                  "C. souple\n"
                                  "3. Avant d'utiliser un outil, il faut : A. le jeter B. le vérifier C. le peindre\n"
                                  "4. Un bon manche d'outil doit être : A. lourd et fragile B. léger et solide "
                                  "C. transparent"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. manche bois / tête métal", True), (" · 2. ", False),
         ("manche bois / lame métal", True), (" · 3. ", False), ("manche bois ou plastique / lame métal dentée", True),
         (" · 4. ", False), ("manche plastique / tige-embout métal", True), (" · 5. ", False),
         ("manche métal ou plastique / mâchoires métal", True)],
        [("Ex. 2 — ", False), ("1. C", True), (" · 2. ", False), ("A", True), (" · 3. ", False), ("B", True)],
        [("Ex. 3 — ", False),
         ("1. Faux. La partie active est en métal, dur et résistant. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Faux. Une machette doit être rangée hors de portée des jeunes enfants. (1,5 pt)", False)],
        [("4. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("1. B", True), (" · 2. ", False), ("B", True), (" · 3. ", False),
         ("B", True), (" · 4. ", False), ("B", True)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 2 - Les systemes composes de plusieurs pieces mobiles
# ---------------------------------------------------------------------------
S2 = {
    "num": 2, "title": "Les systèmes composés de plusieurs pièces mobiles",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "décrire le fonctionnement d'un système technique composé de plusieurs pièces mobiles.",
    "support": "une fenêtre à charnières, un vélo (ou image), tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u2_s2_a_systemes.jpg",
                     "Deux systèmes à plusieurs pièces mobiles : une fenêtre à charnières et un vélo."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite les deux parties d'un outil simple.",
         "R.A. : le manche et la partie active.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Quand on ouvre une fenêtre, combien de pièces bougent en même temps ?",
         "R.A. : plusieurs : le vantail, les charnières, la poignée.", "Questionnement oral", "Fenêtre de la classe", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les systèmes composés de plusieurs pièces "
                             "mobiles ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez la fenêtre de la classe : repérez le cadre (fixe), le vantail (mobile), les "
                            "charnières et la poignée. Observez ensuite un vélo : repérez la pédale, le pédalier, "
                            "la chaîne et la roue.",
         "R.A. : la fenêtre a un cadre fixe et un vantail qui tourne sur des charnières ; le vélo a une pédale "
         "reliée par une chaîne à la roue arrière.", "Observation dirigée", "Fenêtre, vélo ou images", ""),
        ("4. Analyse", "Si on enlève une charnière de la fenêtre, ou la chaîne du vélo, le système fonctionne-t-il "
                        "encore ?",
         "R.A. : non, chaque pièce est nécessaire ; si une pièce manque ou casse, le système ne fonctionne plus "
         "correctement.", "Étude de cas", "Documents, schémas", ""),
        ("5. Synthèse", "Donc, un système technique est un ensemble de pièces, certaines fixes et d'autres "
                         "mobiles, qui travaillent ensemble pour remplir une fonction : ouvrir une fenêtre, faire "
                         "avancer un vélo.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Dans une porte, quelles pièces permettent le mouvement d'ouverture ?",
         "Ex. 1 : les gonds (charnières) et la poignée.", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite deux pièces mobiles du système de transmission d'un vélo.",
         "Ex. 1 : la pédale, la chaîne, le pignon ou la roue.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Qu'est-ce qu'un système technique ?"),
        ("body", "Un système technique est un ensemble de plusieurs pièces, assemblées pour remplir une "
                 "fonction précise. Certaines pièces sont fixes (elles ne bougent pas), d'autres sont mobiles "
                 "(elles bougent ou tournent)."),
        ("section", "2. Exemple : la fenêtre à charnières"),
        ("body", "La fenêtre est composée d'un cadre (pièce fixe, attachée au mur), d'un vantail (la partie qui "
                 "s'ouvre), de charnières (qui relient le vantail au cadre et permettent la rotation) et d'une "
                 "poignée (pour manœuvrer le vantail)."),
        ("image", ("scripts/t5/generated_images/u2_s2_b_transmission.jpg",
                   "Le système de transmission d'un vélo : pédale, pédalier, chaîne, pignon, roue.")),
        ("section", "3. Exemple : le système de transmission du vélo"),
        ("body", "Quand le cycliste appuie sur la pédale, le pédalier tourne. Le pédalier entraîne la chaîne, "
                 "qui entraîne le pignon fixé sur la roue arrière. La roue tourne alors, et le vélo avance."),
        ("section", "4. Pourquoi plusieurs pièces travaillent-elles ensemble ?"),
        ("body", "Chaque pièce a un rôle précis ; aucune ne peut assurer seule la fonction complète du système. "
                 "C'est l'ensemble organisé des pièces, fixes et mobiles, qui permet à l'objet de fonctionner."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Cite les quatre pièces principales d'une fenêtre à charnières et précise "
                                  "si chacune est fixe ou mobile."),
        ("Exercice 2 (5 points)", " — Remets dans l'ordre le trajet du mouvement dans la transmission d'un vélo : "
                                  "A. la roue tourne · B. le cycliste appuie sur la pédale · C. la chaîne "
                                  "entraîne le pignon · D. le pédalier tourne."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Toutes les pièces d'un système technique sont mobiles.\n"
                                  "2. Les charnières permettent au vantail de tourner.\n"
                                  "3. Si la chaîne d'un vélo casse, la roue continue de tourner normalement.\n"
                                  "4. Le cadre d'une fenêtre est une pièce fixe."),
        ("Exercice 4 (4 points)", " — Observe une porte de ta maison ou de ta classe. Cite deux pièces mobiles "
                                  "et une pièce fixe de ce système."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("cadre (fixe), vantail (mobile), charnières (mobiles), poignée (mobile). "
                                "(1,25 pt par pièce correcte)", False)],
        [("Ex. 2 — ", False), ("B → D → C → A", True)],
        [("Ex. 3 — ", False),
         ("1. Faux. Certaines pièces sont fixes (le cadre), d'autres mobiles (le vantail). (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Faux. Sans chaîne, la roue arrière n'est plus entraînée par le pédalier. (1,5 pt)", False)],
        [("4. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Réponse libre selon observation : par exemple, pièces mobiles — les gonds, la "
                                "poignée, le verrou ; pièce fixe — le cadre de la porte. (4 pts — toute "
                                "observation cohérente est acceptée)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 3 - Les machines simples
# ---------------------------------------------------------------------------
S3 = {
    "num": 3, "title": "Les machines simples",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "identifier les principales machines simples et expliquer comment elles réduisent l'effort.",
    "support": "brouette, hache ou couteau, images de poulie et de plan incliné, tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u2_s3_a_machines_simples.jpg",
                     "Les machines simples : levier, roue, coin, poulie, plan incliné, engrenage."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Qu'est-ce qu'un système technique ?",
         "R.A. : un ensemble de pièces fixes et mobiles qui remplissent une fonction.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Pourquoi est-il plus facile de soulever une lourde pierre avec un bâton (levier) "
                                  "qu'à mains nues ?",
         "R.A. : le bâton permet de faire moins d'effort pour soulever la même charge.", "Questionnement oral",
         "Bâton, image", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les machines simples ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez une brouette, une hache, un puits à poulie et une rampe pour monter un sac "
                            "de riz dans un camion. Que remarquez-vous sur l'effort nécessaire dans chaque cas ?",
         "R.A. : chacun de ces objets permet de déplacer, couper ou soulever une charge avec moins d'effort "
         "qu'à mains nues.", "Observation dirigée", "Images ou objets réels", ""),
        ("4. Analyse", "Ces objets utilisent-ils tous le même principe pour réduire l'effort ?",
         "R.A. : non, chacun utilise un principe différent : levier, roue, coin, poulie ou plan incliné.",
         "Étude de cas", "Documents, schémas", ""),
        ("5. Synthèse", "Donc, une machine simple est un dispositif qui permet de réduire l'effort nécessaire "
                         "pour déplacer, soulever ou couper une charge. Les principales machines simples sont : "
                         "le levier, la roue (et l'essieu), le coin, la poulie, le plan incliné, l'engrenage, la "
                         "vis sans fin et le treuil.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Quelle machine simple utilise-t-on pour puiser l'eau d'un puits avec un seau "
                            "et une corde ?",
         "Ex. 1 : la poulie (ou le treuil si une manivelle est utilisée).", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite trois machines simples que tu connais.",
         "Ex. 1 : par exemple, le levier, la roue, le plan incliné.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Qu'est-ce qu'une machine simple ?"),
        ("body", "Une machine simple est un dispositif mécanique élémentaire qui permet de réduire l'effort "
                 "nécessaire pour déplacer, soulever, couper ou tirer une charge."),
        ("section", "2. Les principales machines simples"),
        ("sub", "a. Le levier"),
        ("body", "Une barre rigide qui pivote autour d'un point d'appui. Exemples : une brouette, un pied-de-"
                 "biche, une balance à bascule."),
        ("sub", "b. La roue (et l'essieu)"),
        ("body", "Un disque qui tourne autour d'un axe, facilitant le déplacement. Exemples : la roue de la "
                 "brouette, la roue d'une charrette tirée par un zébu."),
        ("sub", "c. Le coin"),
        ("body", "Une pièce triangulaire qui sépare ou fend la matière. Exemples : une hache, la lame d'un "
                 "couteau."),
        ("sub", "d. La poulie"),
        ("body", "Une roue avec une rainure, sur laquelle passe une corde, qui change la direction de l'effort. "
                 "Exemple : un puits traditionnel avec seau et corde."),
        ("image", ("scripts/t5/generated_images/u2_s3_b_leviers_poulies.jpg",
                   "Exemples malgaches de machines simples : la brouette (levier et roue), le puits à poulie.")),
        ("sub", "e. Le plan incliné"),
        ("body", "Une surface en pente qui permet de monter une charge avec moins d'effort que verticalement. "
                 "Exemple : une rampe pour charger un sac de riz dans un camion."),
        ("sub", "f. L'engrenage"),
        ("body", "Deux roues dentées qui s'emboîtent et transmettent un mouvement de rotation. Exemple : le "
                 "mécanisme d'un moulin à manivelle."),
        ("sub", "g. La vis sans fin et le treuil"),
        ("body", "La vis transforme un mouvement de rotation en mouvement d'avancement (étau, pressoir). Le "
                 "treuil enroule une corde autour d'un axe grâce à une manivelle, pour soulever une charge "
                 "(puits à manivelle)."),
        ("section", "3. Le rôle des machines simples"),
        ("body", "Toutes les machines simples ont le même rôle : rendre un travail plus facile, en réduisant "
                 "l'effort à fournir ou en changeant sa direction."),
    ],
    "exercices": [
        ("Exercice 1 (6 points)", " — Associe chaque machine simple à son exemple : "
                                  "1. levier · 2. roue · 3. coin · 4. poulie · 5. plan incliné · 6. engrenage "
                                  "— A. hache · B. puits avec seau et corde · C. brouette (soulever) · "
                                  "D. rampe de chargement · E. roue de charrette · F. mécanisme de moulin."),
        ("Exercice 2 (4 points)", " — Cite deux machines simples utilisées dans la construction d'un puits "
                                  "traditionnel (seau, corde, manivelle)."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Une machine simple augmente toujours l'effort nécessaire.\n"
                                  "2. Le coin sert à séparer ou fendre la matière.\n"
                                  "3. Une rampe pour monter un sac de riz est un exemple de plan incliné.\n"
                                  "4. Un engrenage est formé d'une seule roue dentée."),
        ("Exercice 4 (4 points)", " — Explique en une phrase pourquoi il est plus facile de monter un sac de riz "
                                  "lourd par une rampe que de le soulever directement."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1-C", True), (" · 2-", False), ("E", True), (" · 3-", False), ("A", True),
         (" · 4-", False), ("B", True), (" · 5-", False), ("D", True), (" · 6-", False), ("F", True)],
        [("Ex. 2 — ", False), ("la poulie (ou le treuil si une manivelle est utilisée) et le levier (manivelle). "
                                "(2 pts par machine correcte)", False)],
        [("Ex. 3 — ", False),
         ("1. Faux. Une machine simple réduit l'effort nécessaire. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Vrai. (1,5 pt)", False)],
        [("4. Faux. Un engrenage est formé d'au moins deux roues dentées qui s'emboîtent. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Parce que la pente du plan incliné répartit l'effort sur une plus longue "
                                "distance, ce qui rend chaque instant de l'effort moins important qu'un "
                                "soulèvement vertical direct. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 4 - Les objets bases sur une machine simple
# ---------------------------------------------------------------------------
S4 = {
    "num": 4, "title": "Les objets basés sur une machine simple",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "analyser un objet du quotidien pour identifier la ou les machines simples qu'il utilise.",
    "support": "ciseaux, décapsuleur ou ouvre-boîte, brouette, images, tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u2_s4_a_objets_machine.jpg",
                     "Des objets du quotidien basés sur des machines simples : ciseaux, brouette, décapsuleur."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite une machine simple et donne un exemple d'objet qui l'utilise.",
         "R.A. : le levier — la brouette ; la poulie — le puits.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Des ciseaux contiennent-ils une ou plusieurs machines simples ?",
         "R.A. : plusieurs : deux leviers et deux coins (les lames).", "Questionnement oral", "Ciseaux", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les objets basés sur une machine simple ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez des ciseaux, un décapsuleur et une brouette. Pour chacun, repérez la ou "
                            "les machines simples utilisées.",
         "R.A. : ciseaux — deux leviers et deux coins ; décapsuleur — un levier ; brouette — un levier et une "
         "roue.", "Observation dirigée", "Objets réels ou images", ""),
        ("4. Analyse", "Pourquoi un même objet peut-il combiner plusieurs machines simples ?",
         "R.A. : parce que chaque machine simple remplit une fonction différente (couper, soulever, déplacer) "
         "et les combiner rend l'objet plus efficace.", "Étude de cas", "Documents, schémas", ""),
        ("5. Synthèse", "Donc, pour analyser un objet technique, on observe sa forme et son fonctionnement afin "
                         "d'identifier la ou les machines simples qu'il combine.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Quelles machines simples reconnais-tu dans un ouvre-boîte à manivelle ?",
         "Ex. 1 : un engrenage (roulette dentée) et un coin (la lame qui coupe le couvercle).",
         "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Quelles machines simples compose une brouette ?",
         "Ex. 1 : un levier (le corps et les poignées) et une roue.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Analyser un objet technique"),
        ("body", "Pour trouver la ou les machines simples contenues dans un objet, on observe : sa forme "
                 "(y a-t-il une lame pointue, une roue, une pente ?), son mouvement (tourne-t-il, pivote-t-il, "
                 "glisse-t-il ?) et sa fonction (couper, soulever, déplacer, serrer)."),
        ("section", "2. Exemples analysés"),
        ("sub", "a. Les ciseaux"),
        ("body", "Les ciseaux combinent deux leviers (les deux branches qui pivotent autour d'une vis centrale) "
                 "et deux coins (les lames tranchantes)."),
        ("sub", "b. Le décapsuleur"),
        ("body", "Le décapsuleur est un levier : un point d'appui sur le bord de la capsule permet de la "
                 "soulever avec peu d'effort."),
        ("image", ("scripts/t5/generated_images/u2_s4_b_exemples.jpg",
                   "Analyse d'objets techniques : la brouette (levier + roue), l'ouvre-boîte (engrenage + coin).")),
        ("sub", "c. La brouette"),
        ("body", "La brouette combine un levier (le corps de la brouette, qui pivote sur la roue quand on "
                 "soulève les poignées) et une roue (qui facilite le déplacement de la charge)."),
        ("sub", "d. L'ouvre-boîte à manivelle"),
        ("body", "L'ouvre-boîte combine un engrenage (la roulette dentée entraînée par la manivelle) et un coin "
                 "(la petite lame qui découpe le couvercle de la boîte)."),
        ("section", "3. Pourquoi combiner plusieurs machines simples ?"),
        ("body", "Un objet technique est souvent plus efficace quand il combine plusieurs machines simples, "
                 "chacune assurant une partie de la fonction globale de l'objet."),
    ],
    "exercices": [
        ("Exercice 1 (6 points)", " — Pour chacun de ces objets, cite la ou les machines simples qu'il contient : "
                                  "1. des ciseaux · 2. une brouette · 3. un décapsuleur."),
        ("Exercice 2 (4 points)", " — Un tire-bouchon combine une vis et un levier. Explique en une phrase le "
                                  "rôle de chacune de ces deux parties."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Un objet technique ne peut contenir qu'une seule machine simple.\n"
                                  "2. Les ciseaux contiennent des leviers et des coins.\n"
                                  "3. Un décapsuleur est un exemple de poulie.\n"
                                  "4. Observer la forme et le mouvement d'un objet aide à trouver sa machine "
                                  "simple."),
        ("Exercice 4 (4 points)", " — Choisis un objet que tu utilises chez toi (ex. machette, charrette, "
                                  "robinet) et cite la machine simple qu'il contient probablement."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. deux leviers + deux coins", True), (" · 2. ", False),
         ("un levier + une roue", True), (" · 3. ", False), ("un levier", True)],
        [("Ex. 2 — ", False), ("la vis s'enfonce dans le bouchon en tournant ; le levier (les bras du "
                                "tire-bouchon) permet ensuite de tirer le bouchon vers le haut avec peu "
                                "d'effort. (4 pts)", False)],
        [("Ex. 3 — ", False),
         ("1. Faux. Un objet peut combiner plusieurs machines simples. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Faux. Un décapsuleur est un exemple de levier. (1,5 pt)", False)],
        [("4. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Réponse libre selon l'objet choisi : par exemple, la charrette — une roue ; "
                                "le robinet — une vis. (4 pts — toute réponse cohérente est acceptée)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 5 - Les representations d'un objet du quotidien
# ---------------------------------------------------------------------------
S5 = {
    "num": 5, "title": "Les représentations d'un objet du quotidien",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "réaliser et interpréter différentes représentations d'un objet technique (croquis, vue en "
                "coupe, perspective, maquette).",
    "support": "un stylo ou une brouette, feuilles, crayons, carton pour maquette, tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u2_s5_a_representations.jpg",
                     "Les quatre représentations d'un objet technique : croquis, vue en coupe, perspective, maquette."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite un objet qui combine deux machines simples.",
         "R.A. : la brouette (levier et roue) ; les ciseaux (leviers et coins).", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Comment peux-tu montrer à un camarade, sans la lui donner, à quoi ressemble ta "
                                  "brouette ?",
         "R.A. : en la dessinant, en faisant un petit modèle (maquette).", "Questionnement oral", "Brouette ou image", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les représentations d'un objet du "
                             "quotidien ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez quatre façons de représenter un même objet (un stylo) : un croquis, une "
                            "vue en coupe, une perspective et une maquette.",
         "R.A. : le croquis est un dessin simple ; la vue en coupe montre l'intérieur ; la perspective donne "
         "une impression de volume ; la maquette est un modèle réduit en volume.", "Observation dirigée",
         "Documents ou objets", ""),
        ("4. Analyse", "Quelle représentation choisirais-tu pour montrer ce qu'il y a à l'intérieur d'un stylo ?",
         "R.A. : la vue en coupe, car elle montre l'intérieur de l'objet.", "Étude de cas", "Documents, schémas", ""),
        ("5. Synthèse", "Donc, selon ce que l'on veut montrer (la forme extérieure, l'intérieur, le volume ou "
                         "un modèle à toucher), on choisit le croquis, la vue en coupe, la perspective ou la "
                         "maquette.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Réalise un croquis rapide de ton crayon.",
         "Ex. 1 : dessin à main levée montrant la forme générale du crayon (corps, pointe, gomme).",
         "Travail individuel", "Feuille, crayon", ""),
        ("III. ÉVALUATION", "Ex. 1 — Quelle représentation choisis-tu pour montrer le volume en trois dimensions "
                             "d'un objet ?",
         "Ex. 1 : la perspective (ou la maquette).", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Pourquoi représenter un objet technique ?"),
        ("body", "Représenter un objet permet de le décrire, de l'expliquer ou de le fabriquer sans avoir "
                 "l'objet réel sous la main. Il existe plusieurs façons de représenter un même objet."),
        ("section", "2. Les quatre représentations"),
        ("sub", "a. Le croquis"),
        ("body", "Un dessin simple et rapide, fait à main levée, qui montre la forme générale de l'objet sans "
                 "souci de précision parfaite."),
        ("sub", "b. La vue en coupe"),
        ("body", "Un dessin qui montre l'objet comme s'il était coupé en deux : on voit alors ce qu'il y a à "
                 "l'intérieur."),
        ("image", ("scripts/t5/generated_images/u2_s5_b_maquette.jpg",
                   "Une maquette en carton d'une brouette, modèle réduit en volume de l'objet réel.")),
        ("sub", "c. La perspective"),
        ("body", "Un dessin qui donne une impression de volume et de profondeur, comme si l'on voyait l'objet "
                 "en trois dimensions sur une feuille plate."),
        ("sub", "d. La maquette"),
        ("body", "Un modèle réduit de l'objet, réalisé en volume avec des matériaux simples (carton, pâte à "
                 "modeler, bois). Elle permet de toucher et de manipuler une représentation de l'objet."),
        ("section", "3. Choisir la bonne représentation"),
        ("body", "On choisit le croquis pour aller vite, la vue en coupe pour montrer l'intérieur, la "
                 "perspective pour donner une impression de volume sur une feuille, et la maquette pour obtenir "
                 "un modèle que l'on peut manipuler."),
    ],
    "exercices": [
        ("Exercice 1 (4 points)", " — Définis en une phrase chacune des représentations suivantes : "
                                  "1. le croquis · 2. la vue en coupe · 3. la perspective · 4. la maquette."),
        ("Exercice 2 (4 points)", " — Pour chaque besoin, choisis la représentation la plus adaptée : "
                                  "1. montrer rapidement la forme d'un objet · 2. montrer l'intérieur d'une "
                                  "pile électrique · 3. montrer le volume d'une maison sur une feuille · "
                                  "4. construire un modèle que l'on peut toucher."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Un croquis doit être parfaitement précis, comme une photo.\n"
                                  "2. La vue en coupe montre l'intérieur d'un objet.\n"
                                  "3. Une maquette est toujours de la même taille que l'objet réel.\n"
                                  "4. La perspective donne une impression de volume."),
        ("Exercice 4 (6 points)", " — Réalise un croquis simple d'un objet de ton choix (angady, stylo, "
                                  "brouette) et légende-le avec le nom de ses deux parties principales."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. dessin simple et rapide, à main levée ; 2. dessin montrant l'intérieur de "
                                "l'objet ; 3. dessin donnant une impression de volume ; 4. modèle réduit en "
                                "volume de l'objet. (1 pt par définition correcte)", False)],
        [("Ex. 2 — ", False), ("1. croquis", True), (" · 2. ", False), ("vue en coupe", True), (" · 3. ", False),
         ("perspective", True), (" · 4. ", False), ("maquette", True)],
        [("Ex. 3 — ", False),
         ("1. Faux. Le croquis est un dessin simple et rapide, pas forcément précis. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Faux. Une maquette est un modèle réduit, en général plus petit que l'objet réel. (1,5 pt)", False)],
        [("4. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Réponse libre : croquis lisible avec deux légendes correctes nommant les parties "
                                "principales de l'objet choisi. (6 pts — 3 pts pour le croquis, 1,5 pt par "
                                "légende correcte)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 6 - Revision Unite II
# ---------------------------------------------------------------------------
S6 = {
    "num": 6, "title": "Révision — Unité II : Objet technique", "kind": "revision",
    "cover_image": ("scripts/t5/generated_images/u2_bilan_r1.jpg",
                     "Bilan de l'Unité II : outils simples, systèmes, machines simples et leurs représentations."),
    "theme": THEME, "ras_theme": "Outils simples, systèmes à pièces mobiles, machines simples, objets techniques, "
                                  "représentations d'un objet",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "traiter un sujet complet portant sur les séances 1 à 5, puis identifier ses points faibles.",
    "support": "sujet recopié au tableau ou polycopié, cahier de brouillon.",
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Sans ouvrir votre cahier : cite une machine simple et un objet qui l'utilise.",
         "R.A. : le levier — la brouette.", "Questionnement oral", "—", ""),
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
    "sujet_title": "Sujet d'entraînement — Unité II (Objet technique) — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Vrai ou faux (2 points)\n"
         "1. La partie active d'un outil est en général en métal.\n"
         "2. Une machine simple augmente toujours l'effort à fournir.\n"
         "B. Complète (2 points)\n"
         "3. Un dessin qui montre l'intérieur d'un objet est appelé une vue en ……………… .\n"
         "4. La poulie, le levier et le plan incliné sont des exemples de ……………… ."),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "On observe une brouette.\n"
         "1. Cite ses deux parties principales (manche excepté) et leur matériau. (2 pts)\n"
         "2. Quelles machines simples compose-t-elle ? (2 pts)\n"
         "3. Pourquoi est-elle plus facile à utiliser qu'un simple sac porté à bras ? (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Un menuisier doit choisir le manche d'un marteau : bois ou métal.\n"
         "1. Quel matériau choisirais-tu, et pourquoi ? (2 pts)\n"
         "2. Quel matériau choisirais-tu pour la tête du marteau, et pourquoi ? (2 pts)\n"
         "3. Cite une règle de sécurité à respecter en utilisant ce marteau. (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Un camarade dit : « Un objet technique ne peut utiliser qu'une seule machine simple à la fois. »\n"
         "Réponds-lui en donnant un exemple précis qui le contredit."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. Vrai. 2. Faux (elle le réduit). (1 pt par item)", False)],
        [("B. 3. coupe. 4. machines simples. (1 pt par item)", False)],
        [("Renvoi : séances 1, 3, 5.", True)],
        [("Exercice 2 (6 pts)", True)],
        [("1. Le corps/la caisse en métal ou bois, la roue en métal ou caoutchouc. (2 pts)", False)],
        [("2. Un levier et une roue. (2 pts)", False)],
        [("3. Parce que le levier et la roue réduisent l'effort nécessaire pour soulever et déplacer la charge. "
          "(2 pts)", False)],
        [("Renvoi : séances 1, 3, 4.", True)],
        [("Exercice 3 (6 pts)", True)],
        [("1. Le bois, car il est léger, facile à tenir et isolant. (2 pts)", False)],
        [("2. Le métal, car il est dur et résiste aux chocs répétés. (2 pts)", False)],
        [("3. Par exemple : vérifier que la tête est bien fixée au manche avant usage. (2 pts)", False)],
        [("Renvoi : séance 1.", True)],
        [("Exercice 4 (4 pts)", True)],
        [("Par exemple, les ciseaux combinent deux leviers et deux coins à la fois : un même objet peut donc "
          "utiliser plusieurs machines simples. (4 pts)", False)],
        [("Renvoi : séance 4.", True)],
        [("Repères de score : 16-20 acquis · 11-15 à consolider · 6-10 fragile · 0-5 reprendre les séances 1 à 5.", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 7 - Examen Unite II
# ---------------------------------------------------------------------------
S7 = {
    "num": 7, "title": "Sujet d'examen ST T5 — Unité II : Objet technique", "kind": "exam",
    "cover_image": ("scripts/t5/generated_images/u2_bilan_e1.jpg",
                     "Sujet d'examen, Unité II : Objet technique."),
    "theme": THEME, "ras_theme": "Outils simples, systèmes à pièces mobiles, machines simples, objets techniques, "
                                  "représentations d'un objet",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "évaluer la maîtrise des notions des séances 1 à 5 — outils, systèmes, machines simples, "
                "objets techniques, représentations.",
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
    "sujet_title": "SUJET D'EXAMEN — Unité II : Objet technique — Durée : ____________ — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Complète avec le mot exact (2 points)\n"
         "1. La pièce d'un outil que l'on tient dans la main s'appelle le ……………… .\n"
         "2. Une pièce qui ne bouge pas dans un système technique est dite ……………… .\n"
         "B. QCM — une seule réponse exacte (2 points)\n"
         "1. Une hache utilise principalement : A. une poulie B. un coin C. un engrenage\n"
         "2. Une vue qui montre l'intérieur d'un objet est : A. un croquis B. une vue en coupe C. une "
         "maquette"),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "On observe un puits traditionnel équipé d'une poulie, d'une corde et d'un seau.\n"
         "1. Quelle machine simple change la direction de l'effort pour puiser l'eau ? (2 pts)\n"
         "2. Cite un autre exemple d'objet technique qui utilise cette même machine simple. (2 pts)\n"
         "3. Quel est l'avantage d'utiliser cette machine simple plutôt que de puiser l'eau à mains nues ? "
         "(2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "On te montre quatre représentations d'une même charrette : un croquis, une vue en coupe de la roue, "
         "une perspective et une maquette en carton.\n"
         "1. Laquelle choisirais-tu pour montrer rapidement la silhouette de la charrette ? (2 pts)\n"
         "2. Laquelle choisirais-tu pour montrer l'intérieur de la roue ? (2 pts)\n"
         "3. Pourquoi est-il utile de représenter un objet de plusieurs façons différentes ? (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Ta petite sœur n'arrive pas à ouvrir un bocal très serré.\n"
         "Explique-lui, en deux phrases, comment un outil ou une machine simple pourrait l'aider, en donnant "
         "un exemple précis."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. manche. 2. fixe. (1 pt par item)", False)],
        [("B. 1. B. 2. B. (1 pt par item)", False)],
        [("Exercice 2 (6 pts)", True)],
        [("1. La poulie. (2 pts)", False)],
        [("2. Par exemple, le mât de drapeau avec une corde et une poulie. (2 pts)", False)],
        [("3. Elle permet de tirer vers le bas pour faire monter le seau, ce qui est plus facile et change le "
          "sens de l'effort. (2 pts)", False)],
        [("Exercice 3 (6 pts)", True)],
        [("1. Le croquis. (2 pts)", False)],
        [("2. La vue en coupe. (2 pts)", False)],
        [("3. Parce que chaque représentation montre un aspect différent de l'objet (forme, intérieur, volume), "
          "utile selon le besoin. (2 pts)", False)],
        [("Exercice 4 (4 pts)", True)],
        [("Un outil comme une pince peut augmenter la force exercée sur le couvercle du bocal. Par exemple, "
          "une pince multiprise agit comme un levier qui permet de mieux serrer et tourner le couvercle. "
          "(4 pts)", False)],
    ],
}
