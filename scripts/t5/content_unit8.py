# -*- coding: utf-8 -*-
"""Content for UNITE VIII - Matiere (seances 1-5).
Grounded in PE T5 p.122-124 (RAS: decrire les changements d'etat de l'eau,
la conservation lors d'une transformation physique, et les proprietes des
solutions aqueuses).
"""

THEME = "Matière"
RAS_THEME_1 = "Décrire les changements d'état de l'eau et la conservation lors d'une transformation physique"
RAS_THEME_2 = "Décrire les propriétés des solutions aqueuses"
VALEURS = "rigueur scientifique, esprit d'observation, précision"

# ---------------------------------------------------------------------------
# SEANCE 1 - Les changements d'etat de l'eau
# ---------------------------------------------------------------------------
S1 = {
    "num": 1, "title": "Les changements d'état de l'eau",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "décrire les quatre changements d'état de l'eau et les températures auxquelles ils se "
                "produisent.",
    "support": "glaçons, eau, une casserole ou une bouilloire (démonstration supervisée), tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u8_s1_a_changements_etat.jpg",
                     "Les trois états de l'eau et les quatre changements d'état : fusion, vaporisation, condensation, solidification."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite les trois états de la matière que tu connais.",
         "R.A. : solide, liquide, gazeux.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Que devient un glaçon laissé à l'air libre ? Et de l'eau laissée longtemps "
                                  "dans une casserole sur le feu ?",
         "R.A. : le glaçon fond et devient liquide ; l'eau chauffée finit par s'évaporer.",
         "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les changements d'état de l'eau ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez un glaçon qui fond, de l'eau qui commence à bouillir, et de la buée qui "
                            "se forme sur un couvercle froid au-dessus d'eau chaude.",
         "R.A. : le glaçon (solide) devient eau (liquide) ; l'eau chauffée devient vapeur (gaz) ; la vapeur "
         "retrouve sa forme liquide (buée) au contact du couvercle froid.", "Observation dirigée", "Glaçons, "
         "eau chaude, couvercle", ""),
        ("4. Analyse", "À quelle température l'eau change-t-elle d'état ?",
         "R.A. : elle gèle (devient solide) à 0 °C et bout (devient gazeuse) à 100 °C.", "Étude de cas",
         "Documents, thermomètre", ""),
        ("5. Synthèse", "Donc, l'eau existe sous trois états : solide (glace), liquide (eau) et gazeux (vapeur "
                         "d'eau). Elle passe d'un état à un autre grâce à quatre changements d'état : la fusion "
                         "(solide → liquide, à 0 °C), la vaporisation (liquide → gazeux, à 100 °C à "
                         "l'ébullition), la condensation (gazeux → liquide) et la solidification (liquide → "
                         "solide, à 0 °C).",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Comment s'appelle le changement d'état d'un glaçon qui fond ?",
         "Ex. 1 : la fusion.", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite les trois états de l'eau et un changement d'état entre deux d'entre "
                             "eux.",
         "Ex. 1 : solide, liquide, gazeux ; par exemple, la fusion (solide → liquide).", "Évaluation écrite",
         "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Les trois états de l'eau"),
        ("body", "L'eau peut se présenter sous trois états : l'état solide (la glace), l'état liquide (l'eau "
                 "que l'on boit) et l'état gazeux (la vapeur d'eau, invisible dans l'air)."),
        ("section", "2. Les quatre changements d'état"),
        ("sub", "a. La fusion"),
        ("body", "Passage de l'état solide à l'état liquide, sous l'effet de la chaleur. L'eau fond à 0 °C : "
                 "c'est le point de fusion."),
        ("sub", "b. La vaporisation"),
        ("body", "Passage de l'état liquide à l'état gazeux, sous l'effet de la chaleur. À 100 °C, l'eau bout "
                 "et se transforme rapidement en vapeur (ébullition) ; l'évaporation peut aussi se produire "
                 "lentement à température plus basse (le linge qui sèche)."),
        ("image", ("scripts/t5/generated_images/u8_s1_a_changements_etat.jpg",
                   "Les trois états de l'eau et les quatre changements d'état : fusion, vaporisation, condensation, solidification.")),
        ("sub", "c. La condensation"),
        ("body", "Passage de l'état gazeux à l'état liquide, quand la vapeur d'eau refroidit. Exemple : la "
                 "buée qui se forme sur un couvercle froid ou sur une vitre."),
        ("sub", "d. La solidification"),
        ("body", "Passage de l'état liquide à l'état solide, sous l'effet du froid. L'eau gèle à 0 °C."),
        ("section", "3. Un phénomène réversible"),
        ("body", "Les changements d'état de l'eau sont réversibles : de la glace peut fondre puis regeler, de "
                 "la vapeur peut se condenser puis s'évaporer à nouveau. C'est toujours la même eau, qui change "
                 "seulement d'état."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Nomme le changement d'état correspondant à chaque situation : 1. un "
                                  "glaçon fond · 2. de l'eau bout · 3. de la buée se forme sur une vitre froide "
                                  "· 4. de l'eau liquide gèle dans le congélateur."),
        ("Exercice 2 (5 points)", " — Complète : l'eau fond à …… °C ; l'eau bout à …… °C."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. L'eau n'existe que sous forme liquide.\n"
                                  "2. La condensation est le passage de l'état gazeux à l'état liquide.\n"
                                  "3. Les changements d'état de l'eau sont réversibles.\n"
                                  "4. La solidification se produit quand on chauffe l'eau."),
        ("Exercice 4 (4 points)", " — Explique pourquoi de la buée apparaît sur un couvercle froid posé au-"
                                  "dessus d'une casserole d'eau chaude."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. fusion", True), (" · 2. ", False), ("vaporisation", True), (" · 3. ", False),
         ("condensation", True), (" · 4. ", False), ("solidification", True)],
        [("Ex. 2 — ", False), ("0 °C ; 100 °C. (2,5 pts par valeur exacte)", False)],
        [("Ex. 3 — ", False),
         ("1. Faux. L'eau existe sous trois états : solide, liquide, gazeux. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Vrai. (1,5 pt)", False)],
        [("4. Faux. La solidification se produit quand on refroidit l'eau. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("La vapeur d'eau chaude qui monte rencontre le couvercle froid, se refroidit "
                                "et se condense en gouttelettes liquides : c'est la buée. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 2 - La conservation lors d'une transformation physique
# ---------------------------------------------------------------------------
S2 = {
    "num": 2, "title": "La conservation lors d'une transformation physique",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "distinguer ce qui est conservé (la masse) et ce qui change (le volume, la forme, l'état) lors "
                "d'un changement d'état.",
    "support": "une balance, un glaçon et de l'eau de même masse, un récipient gradué, tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u8_s2_a_conservation.jpg",
                     "La conservation de la masse lors d'un changement d'état : la glace et l'eau fondue ont la même masse."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Comment s'appelle le passage de l'état liquide à l'état solide ?",
         "R.A. : la solidification.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Si on pèse un glaçon puis qu'on le laisse fondre et qu'on pèse l'eau "
                                  "obtenue, obtiendra-t-on la même masse ?",
         "R.A. : les élèves formulent une hypothèse (oui ou non) avant l'expérience.", "Questionnement oral",
         "Balance, glaçon", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « La conservation lors d'une transformation "
                             "physique ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Pesez un glaçon dans un récipient fermé. Laissez-le fondre complètement, puis "
                            "pesez à nouveau le récipient avec l'eau obtenue.",
         "R.A. : la masse mesurée est la même avant et après la fusion.", "Expérimentation", "Balance, "
         "récipient fermé, glaçon", ""),
        ("4. Analyse", "Le volume occupé par la glace et par l'eau obtenue est-il exactement le même ?",
         "R.A. : non, la glace occupe un peu plus de volume que la même quantité d'eau liquide (c'est pour "
         "cela qu'un glaçon flotte).", "Étude de cas", "Récipient gradué", ""),
        ("5. Synthèse", "Donc, lors d'un changement d'état, la masse de l'eau est conservée : elle reste la "
                         "même avant et après la transformation. En revanche, le volume, la forme et l'état "
                         "peuvent changer : par exemple, la glace occupe un volume légèrement plus grand que la "
                         "même masse d'eau liquide.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Un glaçon de 50 grammes fond entièrement. Quelle est la masse de l'eau "
                            "obtenue ?",
         "Ex. 1 : 50 grammes (la masse est conservée).", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Que change, et que reste identique, lors d'un changement d'état de l'eau ?",
         "Ex. 1 : la masse reste identique (conservée) ; l'état, le volume et la forme peuvent changer.",
         "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. La conservation de la masse"),
        ("body", "Lors d'un changement d'état (fusion, vaporisation, condensation, solidification), la masse "
                 "de l'eau reste la même : aucune matière n'est créée ni détruite, seul son état change. C'est "
                 "ce qu'on appelle la conservation de la masse lors d'une transformation physique."),
        ("image", ("scripts/t5/generated_images/u8_s2_a_conservation.jpg",
                   "La conservation de la masse lors d'un changement d'état : la glace et l'eau fondue ont la même masse.")),
        ("section", "2. Ce qui change : le volume"),
        ("body", "Le volume occupé par l'eau peut changer selon son état. Par exemple, l'eau qui gèle occupe un "
                 "volume légèrement plus grand qu'à l'état liquide : c'est pourquoi un glaçon flotte sur l'eau, "
                 "et pourquoi une bouteille pleine d'eau peut se fissurer si elle gèle complètement."),
        ("section", "3. Ce qui change : la forme et l'état"),
        ("body", "La forme de l'eau change aussi : liquide, elle prend la forme de son récipient ; solide, "
                 "elle garde une forme propre (celle du moule dans lequel elle a gelé) ; gazeuse, elle se "
                 "disperse dans l'air. L'état lui-même change bien sûr, par définition, lors d'un changement "
                 "d'état."),
        ("section", "4. Pourquoi c'est important à retenir"),
        ("body", "Comprendre que la masse est conservée, même quand l'apparence change beaucoup, aide à "
                 "comprendre que la matière ne disparaît pas : elle se transforme seulement."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Complète : lors d'un changement d'état, la …………… de l'eau reste la même, "
                                  "mais son …………… , sa …………… et son …………… peuvent changer."),
        ("Exercice 2 (5 points)", " — Un bol contient 200 grammes d'eau liquide. On le place au congélateur. "
                                  "Quelle sera la masse de la glace obtenue ? Justifie ta réponse."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. La masse de l'eau change toujours lors d'un changement d'état.\n"
                                  "2. La glace occupe un volume plus grand que la même masse d'eau liquide.\n"
                                  "3. L'eau liquide prend la forme de son récipient.\n"
                                  "4. Un glaçon flotte sur l'eau car il est plus léger en masse."),
        ("Exercice 4 (4 points)", " — Pourquoi est-il déconseillé de remplir complètement une bouteille d'eau "
                                  "avant de la mettre au congélateur ?"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("masse ; volume ; forme ; état. (1,25 pt par terme exact, ordre indifférent pour "
                                "volume/forme/état)", False)],
        [("Ex. 2 — ", False), ("200 grammes, car la masse de l'eau est conservée lors d'un changement d'état. "
                                "(5 pts)", False)],
        [("Ex. 3 — ", False),
         ("1. Faux. La masse de l'eau est conservée lors d'un changement d'état. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Vrai. (1,5 pt)", False)],
        [("4. Faux. Le glaçon flotte à cause de son volume plus grand (densité plus faible), pas parce qu'il "
          "est plus léger en masse. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Parce que l'eau augmente de volume en gelant ; une bouteille trop pleine peut "
                                "se fissurer ou éclater sous la pression de la glace qui prend plus de place. "
                                "(4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 3 - Les proprietes des solutions aqueuses
# ---------------------------------------------------------------------------
S3 = {
    "num": 3, "title": "Les propriétés des solutions aqueuses",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "décrire les propriétés des solutions aqueuses : concentration, acidité, basicité, neutralité, "
                "conductivité.",
    "support": "eau, sel, sucre, jus de citron, papier pH si disponible, tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u8_s3_a_solutions.jpg",
                     "Des solutions aqueuses variées : eau salée, eau sucrée, jus de citron, eau savonneuse."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Que reste constant lors d'un changement d'état de l'eau ?",
         "R.A. : la masse.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Si tu dissous une cuillère de sel dans un verre d'eau, obtiens-tu toujours de "
                                  "l'eau pure ?",
         "R.A. : non, on obtient un mélange appelé une solution.", "Questionnement oral", "Eau, sel", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les propriétés des solutions aqueuses ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Préparez (ou observez déjà préparées) plusieurs solutions : eau salée, eau "
                            "sucrée, jus de citron dilué dans l'eau, eau savonneuse. Goûtez ou sentez (avec "
                            "prudence) et comparez.",
         "R.A. : l'eau salée est salée, l'eau sucrée est sucrée, le jus de citron est acide, l'eau savonneuse "
         "est glissante.", "Expérimentation", "Eau, sel, sucre, citron, savon", ""),
        ("4. Analyse", "Peut-on dire que toutes ces solutions ont les mêmes propriétés ?",
         "R.A. : non, elles diffèrent par leur concentration, leur acidité ou leur basicité.", "Étude de cas",
         "Documents", ""),
        ("5. Synthèse", "Donc, une solution aqueuse est un mélange homogène obtenu en dissolvant une substance "
                         "(le soluté) dans l'eau (le solvant). Elle possède plusieurs propriétés : la "
                         "concentration (la quantité de soluté dissoute), l'acidité (comme le jus de citron), "
                         "la basicité (comme l'eau savonneuse) et la neutralité (comme l'eau pure), ainsi que la "
                         "conductivité électrique (certaines solutions, comme l'eau salée, laissent passer le "
                         "courant électrique, contrairement à l'eau pure).",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Le jus de citron est-il acide, basique ou neutre ?",
         "Ex. 1 : acide.", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Qu'est-ce qu'une solution aqueuse ?",
         "Ex. 1 : un mélange homogène obtenu en dissolvant une substance dans l'eau.", "Évaluation écrite",
         "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Qu'est-ce qu'une solution aqueuse ?"),
        ("body", "Une solution aqueuse est un mélange homogène (on ne voit plus les deux substances "
                 "séparément) obtenu en dissolvant une substance, le soluté (par exemple du sel ou du sucre), "
                 "dans l'eau, qui joue le rôle de solvant."),
        ("section", "2. La concentration"),
        ("body", "La concentration indique la quantité de soluté dissoute dans une quantité d'eau donnée. Une "
                 "solution est dite concentrée si elle contient beaucoup de soluté, et diluée si elle en "
                 "contient peu."),
        ("image", ("scripts/t5/generated_images/u8_s3_a_solutions.jpg",
                   "Des solutions aqueuses variées : eau salée, eau sucrée, jus de citron, eau savonneuse.")),
        ("section", "3. Acidité, basicité, neutralité"),
        ("body", "Une solution peut être acide (comme le jus de citron ou le vinaigre), basique (comme l'eau "
                 "savonneuse ou l'eau de Javel) ou neutre (comme l'eau pure). On peut mesurer ce caractère à "
                 "l'aide d'un papier indicateur (papier pH)."),
        ("section", "4. La conductivité électrique"),
        ("body", "Certaines solutions aqueuses, comme l'eau salée, conduisent le courant électrique, car les "
                 "substances dissoutes permettent au courant de circuler. L'eau pure ou distillée, elle, "
                 "conduit très mal le courant électrique."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Complète : une solution aqueuse est obtenue en dissolvant un …………… dans "
                                  "l'…………… (le solvant)."),
        ("Exercice 2 (5 points)", " — Classe ces solutions en « acide », « basique » ou « neutre » : 1. jus de "
                                  "citron · 2. eau pure · 3. eau savonneuse."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Toutes les solutions aqueuses ont la même concentration.\n"
                                  "2. L'eau salée conduit le courant électrique.\n"
                                  "3. L'eau pure est acide.\n"
                                  "4. Une solution concentrée contient beaucoup de soluté dissous."),
        ("Exercice 4 (4 points)", " — Explique pourquoi il est dangereux de manipuler des appareils électriques "
                                  "avec les mains mouillées d'eau salée (par exemple de la sueur)."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("soluté ; eau. (2,5 pts par terme exact)", False)],
        [("Ex. 2 — ", False), ("1. acide", True), (" · 2. ", False), ("neutre", True), (" · 3. ", False),
         ("basique", True)],
        [("Ex. 3 — ", False),
         ("1. Faux. Les solutions peuvent être plus ou moins concentrées. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Faux. L'eau pure est neutre. (1,5 pt)", False)],
        [("4. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("L'eau salée (comme la sueur) conduit bien le courant électrique ; des mains "
                                "mouillées augmentent donc le risque de choc électrique en cas de contact avec "
                                "un appareil. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 4 - Revision Unite VIII
# ---------------------------------------------------------------------------
S4 = {
    "num": 4, "title": "Révision — Unité VIII : Matière", "kind": "revision",
    "cover_image": ("scripts/t5/generated_images/u8_bilan_r1.jpg",
                     "Bilan de l'Unité VIII : changements d'état de l'eau, conservation, propriétés des solutions aqueuses."),
    "theme": THEME, "ras_theme": "Changements d'état de l'eau, conservation lors d'une transformation physique, "
                                  "propriétés des solutions aqueuses",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "traiter un sujet complet portant sur les séances 1 à 3, puis identifier ses points faibles.",
    "support": "sujet recopié au tableau ou polycopié, cahier de brouillon.",
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Sans ouvrir votre cahier : cite un changement d'état de l'eau.",
         "R.A. : la fusion, la vaporisation, la condensation ou la solidification.", "Questionnement oral",
         "—", ""),
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
    "sujet_title": "Sujet d'entraînement — Unité VIII (Matière) — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Vrai ou faux (2 points)\n"
         "1. La fusion est le passage de l'état liquide à l'état solide.\n"
         "2. La masse de l'eau est conservée lors d'un changement d'état.\n"
         "B. Complète (2 points)\n"
         "3. Une solution …………… contient beaucoup de soluté dissous.\n"
         "4. L'eau salée …………… le courant électrique."),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "On fait fondre 100 grammes de glace.\n"
         "1. Quel changement d'état se produit ? (2 pts)\n"
         "2. Quelle est la masse de l'eau obtenue ? Justifie. (2 pts)\n"
         "3. Le volume de l'eau obtenue sera-t-il plus grand, plus petit ou identique à celui de la glace ? "
         "(2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "On prépare trois solutions : de l'eau pure, de l'eau avec du jus de citron, et de l'eau savonneuse.\n"
         "1. Laquelle est neutre ? (2 pts)\n"
         "2. Laquelle est acide ? (2 pts)\n"
         "3. Quel instrument simple permettrait de vérifier ces propriétés ? (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Un camarade dit : « Quand l'eau devient vapeur, elle disparaît complètement. »\n"
         "Réponds-lui en t'appuyant sur ce que tu as appris sur les changements d'état."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. Faux (solide → liquide). 2. Vrai. (1 pt par item)", False)],
        [("B. 3. concentrée. 4. conduit. (1 pt par item)", False)],
        [("Renvoi : séances 1, 2, 3.", True)],
        [("Exercice 2 (6 pts)", True)],
        [("1. La fusion. (2 pts)", False)],
        [("2. 100 grammes, car la masse est conservée lors d'un changement d'état. (2 pts)", False)],
        [("3. Plus petit (la glace occupait un volume plus grand). (2 pts)", False)],
        [("Renvoi : séances 1, 2.", True)],
        [("Exercice 3 (6 pts)", True)],
        [("1. L'eau pure. (2 pts)", False)],
        [("2. L'eau avec du jus de citron. (2 pts)", False)],
        [("3. Un papier indicateur (papier pH). (2 pts)", False)],
        [("Renvoi : séance 3.", True)],
        [("Exercice 4 (4 pts)", True)],
        [("L'eau ne disparaît pas : elle change seulement d'état, passant de liquide à gazeux (vapeur d'eau), "
          "elle reste présente, dispersée dans l'air. (4 pts)", False)],
        [("Renvoi : séance 1.", True)],
        [("Repères de score : 16-20 acquis · 11-15 à consolider · 6-10 fragile · 0-5 reprendre les séances 1 à 3.", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 5 - Examen Unite VIII
# ---------------------------------------------------------------------------
S5 = {
    "num": 5, "title": "Sujet d'examen ST T5 — Unité VIII : Matière", "kind": "exam",
    "cover_image": ("scripts/t5/generated_images/u8_bilan_e1.jpg",
                     "Sujet d'examen, Unité VIII : Matière."),
    "theme": THEME, "ras_theme": "Changements d'état de l'eau, conservation lors d'une transformation physique, "
                                  "propriétés des solutions aqueuses",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "évaluer la maîtrise des notions des séances 1 à 3 — changements d'état, conservation, "
                "solutions aqueuses.",
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
         "1. Le passage de l'état liquide à l'état gazeux s'appelle la ……………… .\n"
         "2. Dans une solution aqueuse, la substance dissoute est appelée le ……………… .\n"
         "B. QCM — une seule réponse exacte (2 points)\n"
         "1. L'eau gèle à : A. 100 °C B. 0 °C C. 50 °C\n"
         "2. Le jus de citron est : A. acide B. basique C. neutre"),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "On place 150 grammes d'eau liquide au congélateur.\n"
         "1. Quel changement d'état va se produire ? (2 pts)\n"
         "2. Quelle sera la masse de la glace obtenue ? (2 pts)\n"
         "3. Le volume de la glace sera-t-il plus grand ou plus petit que celui de l'eau liquide de départ ? "
         "(2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "On teste la conductivité électrique de trois liquides : eau distillée, eau salée, eau sucrée.\n"
         "1. Lequel conduit le mieux le courant électrique ? (2 pts)\n"
         "2. Pourquoi l'eau salée conduit-elle le courant alors que l'eau distillée ne le conduit presque pas ? "
         "(2 pts)\n"
         "3. Cite un danger lié à cette propriété dans la vie quotidienne. (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Ton petit frère pense que l'eau qui s'évapore d'une flaque disparaît pour toujours.\n"
         "Explique-lui, en deux phrases, ce qui se passe réellement."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. vaporisation. 2. soluté. (1 pt par item)", False)],
        [("B. 1. B. 2. A. (1 pt par item)", False)],
        [("Exercice 2 (6 pts)", True)],
        [("1. La solidification. (2 pts)", False)],
        [("2. 150 grammes (la masse est conservée). (2 pts)", False)],
        [("3. Plus grand. (2 pts)", False)],
        [("Exercice 3 (6 pts)", True)],
        [("1. L'eau salée. (2 pts)", False)],
        [("2. Parce que le sel dissous permet au courant électrique de circuler, contrairement à l'eau pure. "
          "(2 pts)", False)],
        [("3. Par exemple : risque de choc électrique en manipulant un appareil électrique avec les mains "
          "mouillées (eau salée comme la sueur). (2 pts)", False)],
        [("Exercice 4 (4 pts)", True)],
        [("L'eau ne disparaît pas : elle se transforme en vapeur d'eau (état gazeux) et se disperse dans l'air, "
          "elle reste présente sous une autre forme. (4 pts)", False)],
    ],
}
