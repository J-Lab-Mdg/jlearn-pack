# -*- coding: utf-8 -*-
"""Content for UNITE VI - Sante et bien-etre (seances 1-5).
Grounded in PE T5 p.118-120 (RAS: decrire les muscles, les articulations et
les os du systeme musculo-squelettique, et adopter une bonne hygiene de ce
systeme).
"""

THEME = "Santé et bien-être"
RAS_THEME_1 = "Décrire les muscles et les articulations du système musculo-squelettique"
RAS_THEME_2 = "Décrire les os du système musculo-squelettique et adopter une bonne hygiène de ce système"
VALEURS = "sens de responsabilité, hygiène de vie, persévérance, respect du corps"

# ---------------------------------------------------------------------------
# SEANCE 1 - Les muscles : description et roles
# ---------------------------------------------------------------------------
S1 = {
    "num": 1, "title": "Les muscles : description et rôles",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "décrire les muscles du corps humain et expliquer leurs principaux rôles.",
    "support": "schéma du corps humain avec les principaux muscles, tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u6_s1_a_muscles.jpg",
                     "Les principaux muscles du corps humain : biceps, quadriceps, mollets, abdominaux."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Que ressens-tu dans ton bras quand tu le plies ?",
         "R.A. : une partie du bras se contracte, devient dure.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Plie puis déplie ton bras. Que se passe-t-il au niveau du biceps ?",
         "R.A. : le biceps se contracte (se raccourcit et devient dur) quand on plie le bras, puis se relâche "
         "quand on le déplie.", "Expérimentation", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les muscles : description et rôles ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez le schéma du corps humain. Repérez quelques muscles : biceps, "
                            "quadriceps, mollets, abdominaux.",
         "R.A. : les élèves localisent les muscles sur le schéma et sur leur propre corps.",
         "Observation dirigée", "Schéma du corps humain", ""),
        ("4. Analyse", "Pourquoi un muscle doit-il être attaché à un os pour le faire bouger ?",
         "R.A. : parce qu'en se contractant, le muscle tire sur l'os auquel il est attaché par un tendon, ce "
         "qui provoque le mouvement.", "Étude de cas", "Documents, schéma", ""),
        ("5. Synthèse", "Donc, un muscle est un organe capable de se contracter (se raccourcir) et de se "
                         "relâcher. Il est attaché aux os par des tendons. En se contractant, il tire sur l'os "
                         "et provoque un mouvement. Les muscles permettent aussi de maintenir la posture, de "
                         "protéger certains organes et de produire de la chaleur corporelle.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Quel muscle se contracte quand tu plies le bras ?",
         "Ex. 1 : le biceps.", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Par quoi un muscle est-il attaché à un os ?",
         "Ex. 1 : par un tendon.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Qu'est-ce qu'un muscle ?"),
        ("body", "Un muscle est un organe formé de fibres capables de se contracter (se raccourcir et durcir) "
                 "puis de se relâcher. Le corps humain compte plusieurs centaines de muscles."),
        ("section", "2. Le lien entre muscle et os"),
        ("body", "La plupart des muscles sont attachés aux os par des tendons, des cordons résistants. Quand "
                 "un muscle se contracte, il tire sur l'os auquel il est attaché, ce qui provoque un "
                 "mouvement."),
        ("image", ("scripts/t5/generated_images/u6_s1_b_contraction.jpg",
                   "La contraction du biceps : le muscle se raccourcit et tire sur l'os de l'avant-bras par un tendon.")),
        ("section", "3. Les rôles des muscles"),
        ("sub", "a. Le mouvement"),
        ("body", "Les muscles permettent de bouger : marcher, courir, saisir un objet, mâcher, respirer."),
        ("sub", "b. La posture"),
        ("body", "Certains muscles maintiennent le corps droit, assis ou debout, sans que l'on y pense."),
        ("sub", "c. La protection"),
        ("body", "Certains muscles protègent des organes internes, par exemple les muscles de l'abdomen "
                 "protègent les organes du ventre."),
        ("sub", "d. La production de chaleur"),
        ("body", "Les muscles produisent de la chaleur quand ils travaillent, ce qui aide le corps à maintenir "
                 "sa température ; c'est pourquoi on a chaud quand on fait du sport, ou qu'on frissonne quand "
                 "on a froid."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Complète : un muscle est capable de se …………… et de se relâcher ; il est "
                                  "attaché à l'os par un …………… ; en se contractant, il …………… sur l'os."),
        ("Exercice 2 (5 points)", " — Cite les quatre rôles des muscles étudiés dans la leçon."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Un muscle pousse toujours sur l'os quand il se contracte.\n"
                                  "2. Les tendons relient les muscles aux os.\n"
                                  "3. Les muscles ne servent qu'au mouvement.\n"
                                  "4. Les muscles produisent de la chaleur quand ils travaillent."),
        ("Exercice 4 (4 points)", " — Explique en une phrase pourquoi on a souvent plus chaud après avoir "
                                  "couru."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("contracter ; tendon ; tire. (1,66 pt par terme exact)", False)],
        [("Ex. 2 — ", False), ("le mouvement, la posture, la protection, la production de chaleur. (1,25 pt par "
                                "rôle correct)", False)],
        [("Ex. 3 — ", False),
         ("1. Faux. Il tire sur l'os (se raccourcit), il ne pousse pas. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Faux. Les muscles servent aussi à la posture, la protection et la production de chaleur. (1,5 pt)", False)],
        [("4. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Parce que les muscles travaillent beaucoup plus pendant la course et produisent "
                                "davantage de chaleur. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 2 - Les articulations
# ---------------------------------------------------------------------------
S2 = {
    "num": 2, "title": "Les articulations",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "décrire les articulations du corps humain et distinguer leurs différents types.",
    "support": "schéma du squelette avec les principales articulations, tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u6_s2_a_articulations.jpg",
                     "Les principales articulations du corps humain : épaule, coude, genou, crâne, colonne vertébrale."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Par quoi un muscle est-il attaché à un os ?",
         "R.A. : par un tendon.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Peux-tu plier ton genou ? Peux-tu plier les os de ton crâne ?",
         "R.A. : oui pour le genou, non pour le crâne.", "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les articulations ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez le schéma du squelette. Repérez les articulations suivantes : le genou, "
                            "le coude, l'épaule, le crâne, la colonne vertébrale. Testez leur mobilité sur "
                            "votre propre corps.",
         "R.A. : genou, coude, épaule — bougent beaucoup ; crâne — ne bouge pas du tout ; colonne vertébrale — "
         "bouge un peu.", "Observation dirigée", "Schéma du squelette", ""),
        ("4. Analyse", "Peut-on classer ces articulations selon leur degré de mobilité ?",
         "R.A. : oui : certaines sont fixes (crâne), d'autres mobiles (genou, coude, épaule), d'autres "
         "semi-mobiles (colonne vertébrale).", "Étude de cas", "Documents, schéma", ""),
        ("5. Synthèse", "Donc, une articulation est le point de rencontre entre deux os. On distingue les "
                         "articulations fixes (immobiles, comme les os du crâne), les articulations "
                         "semi-mobiles (un peu mobiles, comme les vertèbres de la colonne vertébrale) et les "
                         "articulations mobiles (très mobiles, comme le genou, le coude ou l'épaule), qui "
                         "permettent les mouvements du corps.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Range ces articulations selon leur mobilité : genou, crâne, colonne "
                            "vertébrale, épaule.",
         "Ex. 1 : fixe — crâne ; semi-mobile — colonne vertébrale ; mobiles — genou, épaule.", "Travail de "
         "groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Qu'est-ce qu'une articulation ?",
         "Ex. 1 : le point de rencontre entre deux os.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Qu'est-ce qu'une articulation ?"),
        ("body", "Une articulation est le point de rencontre entre deux os (ou plus). Elle permet, ou non, un "
                 "mouvement entre ces os."),
        ("section", "2. Les trois types d'articulations"),
        ("sub", "a. Les articulations fixes"),
        ("body", "Elles ne permettent aucun mouvement. Exemple : les os du crâne, soudés les uns aux autres."),
        ("sub", "b. Les articulations semi-mobiles"),
        ("body", "Elles permettent un léger mouvement. Exemple : les vertèbres de la colonne vertébrale, qui "
                 "permettent de se pencher légèrement."),
        ("image", ("scripts/t5/generated_images/u6_s2_b_types_articulations.jpg",
                   "Les trois types d'articulations : fixe (crâne), semi-mobile (colonne vertébrale), mobile (genou, épaule).")),
        ("sub", "c. Les articulations mobiles"),
        ("body", "Elles permettent un grand mouvement. Exemples : le genou, le coude (mouvement de charnière, "
                 "comme une porte) ; l'épaule, la hanche (mouvement de rotation dans plusieurs directions)."),
        ("section", "3. Le rôle des articulations"),
        ("body", "Les articulations mobiles, associées aux muscles et aux tendons, permettent au squelette de "
                 "bouger : marcher, courir, lever les bras, s'asseoir. Sans elles, le corps serait entièrement "
                 "rigide."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Classe ces articulations en « fixe », « semi-mobile » ou « mobile » : "
                                  "1. le coude · 2. les os du crâne · 3. la colonne vertébrale · 4. la hanche "
                                  "· 5. le genou."),
        ("Exercice 2 (5 points)", " — Définis en une phrase : 1. une articulation · 2. une articulation "
                                  "mobile."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Toutes les articulations permettent un grand mouvement.\n"
                                  "2. Les os du crâne forment une articulation fixe.\n"
                                  "3. L'épaule est une articulation mobile.\n"
                                  "4. La colonne vertébrale ne permet aucun mouvement."),
        ("Exercice 4 (4 points)", " — Explique pourquoi il est utile que le crâne possède des articulations "
                                  "fixes plutôt que mobiles."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. mobile", True), (" · 2. ", False), ("fixe", True), (" · 3. ", False),
         ("semi-mobile", True), (" · 4. ", False), ("mobile", True), (" · 5. ", False), ("mobile", True)],
        [("Ex. 2 — ", False), ("1. point de rencontre entre deux os ; 2. articulation qui permet un grand "
                                "mouvement. (2,5 pts par définition correcte)", False)],
        [("Ex. 3 — ", False),
         ("1. Faux. Certaines articulations sont fixes ou semi-mobiles. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Vrai. (1,5 pt)", False)],
        [("4. Faux. Elle permet un léger mouvement (articulation semi-mobile). (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Parce que le crâne doit rester rigide pour bien protéger le cerveau ; des "
                                "articulations mobiles le fragiliseraient. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 3 - Les os et l'hygiene du systeme musculo-squelettique
# ---------------------------------------------------------------------------
S3 = {
    "num": 3, "title": "Les os et l'hygiène du système musculo-squelettique",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "décrire les types et les rôles des os, et adopter une bonne hygiène du système "
                "musculo-squelettique.",
    "support": "schéma du squelette, affiche sur l'hygiène osseuse (lait, sport, posture), tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u6_s3_a_os.jpg",
                     "Les différents types d'os du squelette humain : plat, court, long, irrégulier."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite un exemple d'articulation mobile.",
         "R.A. : le genou, le coude, l'épaule.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Le fémur (os de la cuisse) et un os du crâne ont-ils la même forme ?",
         "R.A. : non, le fémur est long, l'os du crâne est plat.", "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les os et l'hygiène du système "
                             "musculo-squelettique ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez le schéma du squelette. Comparez la forme du fémur, d'un os du crâne, "
                            "d'un os du poignet et d'une vertèbre.",
         "R.A. : fémur — long ; crâne — plat ; poignet — court ; vertèbre — forme irrégulière.",
         "Observation dirigée", "Schéma du squelette", ""),
        ("4. Analyse", "Pourquoi le crâne est-il plat et protecteur, alors que le fémur est long et porteur ?",
         "R.A. : chaque forme d'os est adaptée à son rôle : le crâne plat protège le cerveau, le fémur long "
         "soutient le poids du corps et permet la marche.", "Étude de cas", "Documents, schéma", ""),
        ("5. Synthèse", "Donc, on distingue quatre formes d'os : les os longs (fémur, humérus), les os plats "
                         "(crâne, omoplate), les os courts (poignet, cheville) et les os irréguliers "
                         "(vertèbres). Les os soutiennent le corps, protègent certains organes (le crâne "
                         "protège le cerveau, les côtes protègent le cœur et les poumons), permettent le "
                         "mouvement avec les muscles, et fabriquent les cellules du sang. Pour garder des os et "
                         "des muscles en bonne santé, il faut manger des aliments riches en calcium, faire de "
                         "l'exercice régulièrement, garder une bonne posture et se reposer suffisamment.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Cite deux aliments riches en calcium, bons pour les os.",
         "Ex. 1 : le lait, les produits laitiers, les petits poissons mangés avec leurs arêtes.",
         "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite deux rôles des os.",
         "Ex. 1 : soutenir le corps, protéger des organes.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Les quatre formes d'os"),
        ("body", "Les os long (fémur, humérus) sont plus longs que larges, ils soutiennent le corps et "
                 "permettent de grands mouvements. Les os plats (crâne, omoplate, côtes) protègent des organes. "
                 "Les os courts (poignet, cheville) permettent des mouvements précis. Les os irréguliers "
                 "(vertèbres) ont une forme particulière adaptée à leur rôle."),
        ("image", ("scripts/t5/generated_images/u6_s3_a_os.jpg",
                   "Les différents types d'os du squelette humain : plat, court, long, irrégulier.")),
        ("section", "2. Les rôles des os"),
        ("body", "Les os soutiennent le corps (comme la charpente d'une maison), protègent certains organes "
                 "fragiles (le crâne protège le cerveau, la cage thoracique protège le cœur et les poumons), "
                 "permettent le mouvement en travaillant avec les muscles et les articulations, et fabriquent "
                 "les cellules du sang à l'intérieur de la moelle osseuse."),
        ("section", "3. Quelques accidents du système musculo-squelettique"),
        ("body", "Un choc violent ou un mauvais mouvement peut provoquer différents accidents : la fracture "
                 "est une cassure d'un os ; la luxation est le déplacement anormal des os au niveau d'une "
                 "articulation ; l'entorse est une blessure des ligaments d'une articulation, souvent causée "
                 "par une torsion. Dans tous ces cas, il faut consulter rapidement un professionnel de santé."),
        ("section", "4. L'hygiène du système musculo-squelettique"),
        ("body", "Pour garder des os et des muscles solides et en bonne santé, il est important de : manger "
                 "des aliments riches en calcium (lait, produits laitiers, petits poissons) ; pratiquer une "
                 "activité physique régulière (marche, sport, jeux actifs) ; garder une bonne posture, assis et "
                 "debout ; se reposer suffisamment ; et éviter les chocs et les chutes inutiles."),
        ("image", ("scripts/t5/generated_images/u6_s3_b_hygiene.jpg",
                   "Une bonne hygiène musculo-squelettique : alimentation riche en calcium, activité physique, bonne posture.")),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Associe chaque os à sa forme : 1. fémur · 2. crâne · 3. os du poignet · "
                                  "4. vertèbre — A. plat · B. court · C. long · D. irrégulier."),
        ("Exercice 2 (5 points)", " — Cite les quatre rôles des os étudiés dans la leçon."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Tous les os ont la même forme.\n"
                                  "2. Le calcium aide à garder des os solides.\n"
                                  "3. Une bonne posture n'a aucun effet sur le squelette.\n"
                                  "4. Les os fabriquent les cellules du sang."),
        ("Exercice 4 (4 points)", " — Cite trois gestes à adopter pour garder un système musculo-squelettique "
                                  "en bonne santé."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1-C", True), (" · 2-", False), ("A", True), (" · 3-", False), ("B", True),
         (" · 4-", False), ("D", True)],
        [("Ex. 2 — ", False), ("soutenir le corps, protéger des organes, permettre le mouvement, fabriquer les "
                                "cellules du sang. (1,25 pt par rôle correct)", False)],
        [("Ex. 3 — ", False),
         ("1. Faux. Il existe quatre formes d'os : long, plat, court, irrégulier. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Faux. Une bonne posture protège la colonne vertébrale et les articulations. (1,5 pt)", False)],
        [("4. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Par exemple : manger des aliments riches en calcium, faire de l'exercice "
                                "régulièrement, garder une bonne posture. (4 pts — 1,33 pt par geste correct)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 4 - Revision Unite VI
# ---------------------------------------------------------------------------
S4 = {
    "num": 4, "title": "Révision — Unité VI : Santé et bien-être", "kind": "revision",
    "cover_image": ("scripts/t5/generated_images/u6_bilan_r1.jpg",
                     "Bilan de l'Unité VI : muscles, articulations, os et hygiène du système musculo-squelettique."),
    "theme": THEME, "ras_theme": "Muscles, articulations, os et hygiène du système musculo-squelettique",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "traiter un sujet complet portant sur les séances 1 à 3, puis identifier ses points faibles.",
    "support": "sujet recopié au tableau ou polycopié, cahier de brouillon.",
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Sans ouvrir votre cahier : cite un rôle des muscles et un rôle des os.",
         "R.A. : les muscles permettent le mouvement ; les os soutiennent le corps.", "Questionnement oral",
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
    "sujet_title": "Sujet d'entraînement — Unité VI (Santé et bien-être) — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Vrai ou faux (2 points)\n"
         "1. Un muscle est attaché à un os par un tendon.\n"
         "2. Toutes les articulations sont mobiles.\n"
         "B. Complète (2 points)\n"
         "3. Les os …………… protègent le cerveau et les organes internes.\n"
         "4. Le calcium se trouve notamment dans le ……………."),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "On observe le bras d'un élève qui se plie au niveau du coude.\n"
         "1. Quel type d'articulation est le coude ? (2 pts)\n"
         "2. Quel muscle se contracte pour plier le bras ? (2 pts)\n"
         "3. Par quoi ce muscle est-il relié à l'os ? (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Un élève se plaint régulièrement de douleurs au dos à cause d'une mauvaise posture en classe.\n"
         "1. Quelle partie du squelette est particulièrement concernée ? (2 pts)\n"
         "2. Cite deux conseils d'hygiène pour éviter ce problème. (2 pts)\n"
         "3. Pourquoi est-il important de bien se tenir dès l'enfance ? (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Un camarade pense que seuls les sportifs ont besoin de prendre soin de leurs os et de leurs muscles.\n"
         "Réponds-lui en expliquant pourquoi tout le monde en a besoin."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. Vrai. 2. Faux (certaines sont fixes ou semi-mobiles). (1 pt par item)", False)],
        [("B. 3. plats. 4. lait (ou produits laitiers). (1 pt par item)", False)],
        [("Renvoi : séances 1, 2, 3.", True)],
        [("Exercice 2 (6 pts)", True)],
        [("1. Une articulation mobile. (2 pts)", False)],
        [("2. Le biceps. (2 pts)", False)],
        [("3. Par un tendon. (2 pts)", False)],
        [("Renvoi : séances 1, 2.", True)],
        [("Exercice 3 (6 pts)", True)],
        [("1. La colonne vertébrale. (2 pts)", False)],
        [("2. Par exemple : s'asseoir droit, éviter de porter des charges trop lourdes de façon répétée. "
          "(2 pts)", False)],
        [("3. Parce qu'une bonne posture adoptée tôt évite des douleurs et des déformations du squelette à "
          "l'âge adulte. (2 pts)", False)],
        [("Renvoi : séance 3.", True)],
        [("Exercice 4 (4 pts)", True)],
        [("Tout le monde utilise ses muscles et ses os au quotidien (marcher, porter, s'asseoir) ; une bonne "
          "hygiène musculo-squelettique profite à tous, pas seulement aux sportifs. (4 pts)", False)],
        [("Renvoi : séance 3.", True)],
        [("Repères de score : 16-20 acquis · 11-15 à consolider · 6-10 fragile · 0-5 reprendre les séances 1 à 3.", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 5 - Examen Unite VI
# ---------------------------------------------------------------------------
S5 = {
    "num": 5, "title": "Sujet d'examen ST T5 — Unité VI : Santé et bien-être", "kind": "exam",
    "cover_image": ("scripts/t5/generated_images/u6_bilan_e1.jpg",
                     "Sujet d'examen, Unité VI : Santé et bien-être."),
    "theme": THEME, "ras_theme": "Muscles, articulations, os et hygiène du système musculo-squelettique",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "évaluer la maîtrise des notions des séances 1 à 3 — muscles, articulations, os et hygiène "
                "musculo-squelettique.",
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
    "sujet_title": "SUJET D'EXAMEN — Unité VI : Santé et bien-être — Durée : ____________ — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Complète avec le mot exact (2 points)\n"
         "1. Le point de rencontre entre deux os s'appelle une ……………… .\n"
         "2. Les os fabriquent les cellules du sang grâce à la ……………… osseuse.\n"
         "B. QCM — une seule réponse exacte (2 points)\n"
         "1. Le crâne est un exemple d'os : A. long B. plat C. court\n"
         "2. Le genou est une articulation : A. fixe B. semi-mobile C. mobile"),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "Un élève se demande pourquoi il peut plier le genou mais pas les os de son crâne.\n"
         "1. Quel type d'articulation est le genou ? (2 pts)\n"
         "2. Quel type d'articulation forment les os du crâne ? (2 pts)\n"
         "3. Pourquoi est-il utile que le crâne ne bouge pas ? (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Une élève ne boit jamais de lait et fait très peu d'exercice physique.\n"
         "1. Quel risque cela peut-il présenter pour ses os ? (2 pts)\n"
         "2. Cite deux conseils d'hygiène à lui donner. (2 pts)\n"
         "3. Pourquoi est-il important de prendre soin de ses os dès l'enfance ? (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Ton petit frère ne comprend pas pourquoi il a mal aux jambes après une longue marche.\n"
         "Explique-lui, en deux phrases, ce qui se passe dans ses muscles et pourquoi le repos est utile."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. articulation. 2. moelle. (1 pt par item)", False)],
        [("B. 1. B. 2. C. (1 pt par item)", False)],
        [("Exercice 2 (6 pts)", True)],
        [("1. Une articulation mobile. (2 pts)", False)],
        [("2. Une articulation fixe. (2 pts)", False)],
        [("3. Pour que le crâne reste rigide et protège efficacement le cerveau. (2 pts)", False)],
        [("Exercice 3 (6 pts)", True)],
        [("1. Ses os risquent d'être plus fragiles, par manque de calcium et d'exercice. (2 pts)", False)],
        [("2. Par exemple : boire du lait ou manger des produits laitiers, pratiquer une activité physique "
          "régulière. (2 pts)", False)],
        [("3. Parce que des os solides dès l'enfance aident à avoir un squelette sain à l'âge adulte. (2 pts)", False)],
        [("Exercice 4 (4 pts)", True)],
        [("Pendant la marche, ses muscles des jambes ont beaucoup travaillé et se sont fatigués ; le repos leur "
          "permet de récupérer et d'éviter les douleurs prolongées. (4 pts)", False)],
    ],
}
