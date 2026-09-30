# -*- coding: utf-8 -*-
"""Content for UNITE IX - Electricite et magnetisme (seances 62-67).
Grounded in PE T4 (RAS: Interpreter l'interaction des aimants avec d'autres
aimants et avec des materiaux quotidiens ; interpreter l'interaction d'un
objet prealablement electrise avec des materiaux quotidiens).
"""

THEME = "Électricité et magnétisme"
RAS_THEME = ("Interpréter l'interaction des aimants avec d'autres aimants et avec des matériaux "
             "quotidiens ; interpréter l'interaction d'un objet préalablement électrisé avec des "
             "matériaux quotidiens")
VALEURS = "goût de l'effort, rigueur"

# ---------------------------------------------------------------------------
# SEANCE 1 (globale 62) - Les aimants et leurs interactions
# ---------------------------------------------------------------------------
S1 = {
    "num": 1, "title": "Les aimants et leurs interactions",
    "theme": THEME, "ras_theme": RAS_THEME, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "identifier un aimant et distinguer les matériaux qu'il attire de ceux qu'il n'attire pas.",
    "support": "un ou plusieurs aimants, objets variés (clou, trombone, gomme, morceau de bois, pièce de "
               "monnaie, bout de tissu).",
    "cover_image": ("scripts/t4/generated_images/u9_s1_a_aimants.jpg",
                     "Un enfant approche un aimant de divers petits objets posés sur une table."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "As-tu déjà vu un objet qui « colle » à un aimant, comme sur la porte d'un "
                         "réfrigérateur ?",
         "R.A. : réponses libres des élèves.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Approchons un aimant d'un clou, puis d'une gomme. Que se passe-t-il "
                                 "dans chaque cas ?",
         "R.A. : le clou est attiré par l'aimant et reste collé ; la gomme n'est pas attirée.",
         "Expérimentation dirigée", "Aimant, clou, gomme", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les aimants et leurs interactions ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Approchons maintenant l'aimant d'un trombone, d'une pièce de monnaie, d'un "
                            "morceau de bois et d'un bout de tissu. Classons les objets en deux groupes.",
         "R.A. : le trombone (en fer) est attiré ; la pièce de monnaie, le bois et le tissu ne le sont "
         "pas (ou très peu selon le métal de la pièce).", "Observation dirigée", "Aimant, objets variés",
         ""),
        ("4. Analyse", "À votre avis, pourquoi l'aimant attire-t-il certains objets et pas d'autres ?",
         "R.A. : l'aimant n'attire que certains métaux, appelés matériaux magnétiques (le fer, l'acier, "
         "le nickel) ; il n'attire ni le bois, ni le plastique, ni le tissu, ni la plupart des autres "
         "métaux comme l'or ou l'aluminium.", "Étude de cas", "Aimant, objets variés", ""),
        ("5. Synthèse", "Donc, un aimant est un objet capable d'attirer certains métaux, appelés matériaux "
                         "magnétiques (le fer, l'acier, le nickel). Cette propriété s'appelle le magnétisme. "
                         "L'aimant n'attire pas les matériaux non magnétiques comme le bois, le plastique, "
                         "le verre, le tissu ou l'aluminium.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Cite deux objets de la classe qu'un aimant attire, et deux objets "
                            "qu'il n'attire pas.",
         "Ex. 1 : réponses libres, par exemple : attirés (ciseaux en métal, trombone) ; non attirés "
         "(cahier, règle en plastique).", "Travail individuel", "Cahier", ""),
        ("III. ÉVALUATION", "Ex. 1 — Qu'est-ce qu'un aimant ? Cite deux matériaux qu'il attire.",
         "Ex. 1 : un aimant est un objet qui attire certains métaux (le fer, l'acier).",
         "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Qu'est-ce qu'un aimant ?"),
        ("body", "Un aimant est un objet qui a la propriété d'attirer certains métaux. Cette propriété "
                 "s'appelle le magnétisme. On trouve des aimants dans de nombreux objets de la vie "
                 "quotidienne : sur la porte d'un réfrigérateur, dans une boussole, dans un jouet, dans un "
                 "haut-parleur."),
        ("section", "2. Les matériaux attirés par un aimant"),
        ("body", "Un aimant n'attire que les matériaux dits magnétiques : le fer, l'acier et le nickel. Un "
                 "clou, un trombone ou des ciseaux en acier sont attirés par un aimant."),
        ("section", "3. Les matériaux non attirés par un aimant"),
        ("body", "Un aimant n'attire pas les matériaux non magnétiques : le bois, le plastique, le verre, "
                 "le tissu, le papier, ni la plupart des autres métaux comme l'or, l'argent ou l'aluminium."),
        ("image", ("scripts/t4/generated_images/u9_s1_b_attraction.jpg",
                   "Un aimant attire les objets en fer ou en acier, mais n'attire pas le bois, le "
                   "plastique ni le tissu.")),
        ("section", "4. Des aimants utiles au quotidien"),
        ("body", "Les aimants sont utilisés dans de nombreux objets : les aimants décoratifs de "
                 "réfrigérateur, certains jeux et jouets, les fermetures de sacs ou de cahiers, et les "
                 "boussoles qui indiquent le nord."),
        ("image", ("scripts/t4/generated_images/u9_s1_c_jouet.jpg",
                   "Un enfant joue avec un jeu de pêche magnétique : une canne munie d'un aimant attire "
                   "de petits poissons en carton portant un morceau de métal.")),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Qu'est-ce qu'un aimant ? Qu'est-ce que le magnétisme ?"),
        ("Exercice 2 (5 points)", " — Cite trois matériaux magnétiques (attirés par un aimant)."),
        ("Exercice 3 (6 points)", " — Classe ces objets selon qu'ils sont attirés ou non par un aimant : "
                                   "1. un clou en fer · 2. une gomme · 3. une pièce en acier · 4. un "
                                   "morceau de bois · 5. des ciseaux en métal · 6. un bout de tissu."),
        ("Exercice 4 (4 points)", " — Explique en une phrase pourquoi un aimant n'attire pas une gomme "
                                   "en caoutchouc."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("un aimant est un objet capable d'attirer certains métaux ; le magnétisme "
                                "est cette propriété d'attraction. (5 pts)", False)],
        [("Ex. 2 — ", False), ("le fer, l'acier, le nickel. (5 pts)", False)],
        [("Ex. 3 — ", False), ("attirés : 1, 3, 5 (1 pt chacun) ; non attirés : 2, 4, 6 (1 pt chacun). "
                                "(6 pts)", False)],
        [("Ex. 4 — ", False), ("parce que le caoutchouc n'est pas un matériau magnétique. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 2 (globale 63) - Les poles d'un aimant
# ---------------------------------------------------------------------------
S2 = {
    "num": 2, "title": "Les pôles d'un aimant",
    "theme": THEME, "ras_theme": RAS_THEME, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "identifier les deux pôles d'un aimant et expliquer l'attraction et la répulsion entre "
                "deux aimants.",
    "support": "deux aimants droits (barreaux) ou en fer à cheval, une boussole si possible.",
    "cover_image": ("scripts/t4/generated_images/u9_s2_a_barreau.jpg",
                     "Un aimant droit (en forme de barreau) rouge et bleu posé sur une table, avec de la "
                     "limaille de fer visible autour de ses extrémités."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite un matériau attiré par un aimant et un matériau qui ne l'est pas.",
         "R.A. : le fer (attiré) ; le bois (non attiré).", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Approchons les deux extrémités d'un même aimant d'un clou. Attirent-elles "
                                 "toutes les deux le clou ?",
         "R.A. : oui, les deux extrémités de l'aimant attirent le clou.", "Expérimentation dirigée",
         "Aimant, clou", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les pôles d'un aimant ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Approchons maintenant deux aimants l'un de l'autre, d'abord dans un sens, "
                            "puis dans l'autre. Que remarque-t-on ?",
         "R.A. : parfois les aimants s'attirent et se collent ; parfois ils se repoussent et s'éloignent "
         "l'un de l'autre.", "Expérimentation dirigée", "Deux aimants", ""),
        ("4. Analyse", "À votre avis, pourquoi les deux aimants s'attirent-ils dans un sens et se "
                        "repoussent-ils dans l'autre ?",
         "R.A. : chaque aimant a deux pôles, un pôle Nord et un pôle Sud ; deux pôles différents (Nord et "
         "Sud) s'attirent, alors que deux pôles identiques (Nord-Nord ou Sud-Sud) se repoussent.",
         "Étude de cas", "Deux aimants", ""),
        ("5. Synthèse", "Donc, chaque aimant possède deux pôles : un pôle Nord et un pôle Sud. Deux pôles "
                         "différents s'attirent, deux pôles identiques se repoussent. C'est la règle "
                         "d'interaction entre les aimants.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Si le pôle Nord d'un aimant A est approché du pôle Nord d'un aimant "
                            "B, que va-t-il se passer ?",
         "Ex. 1 : les deux aimants vont se repousser, car les deux pôles sont identiques (Nord-Nord).",
         "Travail individuel", "Cahier", ""),
        ("III. ÉVALUATION", "Ex. 1 — Quels sont les deux pôles d'un aimant ? Que se passe-t-il entre deux "
                             "pôles identiques ?",
         "Ex. 1 : pôle Nord et pôle Sud ; deux pôles identiques se repoussent.",
         "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Les deux pôles d'un aimant"),
        ("body", "Chaque aimant possède deux pôles, situés à ses deux extrémités : le pôle Nord (souvent "
                 "marqué N ou en rouge) et le pôle Sud (souvent marqué S ou en bleu). C'est aux pôles que "
                 "la force d'attraction de l'aimant est la plus forte."),
        ("section", "2. Attraction et répulsion entre deux aimants"),
        ("sub", "a. L'attraction"),
        ("body", "Quand on approche deux pôles différents (un pôle Nord et un pôle Sud), les deux aimants "
                 "s'attirent et se collent l'un à l'autre."),
        ("sub", "b. La répulsion"),
        ("body", "Quand on approche deux pôles identiques (deux pôles Nord, ou deux pôles Sud), les deux "
                 "aimants se repoussent et s'éloignent l'un de l'autre."),
        ("image", ("scripts/t4/generated_images/u9_s2_b_poles.jpg",
                   "Les pôles d'un aimant : deux pôles différents s'attirent, deux pôles identiques se "
                   "repoussent.")),
        ("section", "3. Une application des pôles : la boussole"),
        ("body", "La boussole contient une petite aiguille aimantée qui tourne librement. Son pôle Nord "
                 "est attiré par le pôle magnétique situé près du pôle Nord terrestre : c'est pourquoi "
                 "l'aiguille de la boussole indique toujours le Nord."),
        ("image", ("scripts/t4/generated_images/u9_s2_c_boussole.jpg",
                   "Une boussole dont l'aiguille aimantée indique le Nord, tenue par un enfant en pleine "
                   "nature.")),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Quels sont les deux pôles d'un aimant ?"),
        ("Exercice 2 (5 points)", " — Que se passe-t-il quand on approche deux pôles différents ? Deux "
                                   "pôles identiques ?"),
        ("Exercice 3 (6 points)", " — Pour chaque situation, indique s'il y a attraction ou répulsion : "
                                   "1. pôle Nord contre pôle Sud · 2. pôle Nord contre pôle Nord · 3. pôle "
                                   "Sud contre pôle Sud."),
        ("Exercice 4 (4 points)", " — Explique en une phrase pourquoi l'aiguille d'une boussole indique "
                                   "toujours le Nord."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("le pôle Nord et le pôle Sud. (5 pts)", False)],
        [("Ex. 2 — ", False), ("deux pôles différents s'attirent ; deux pôles identiques se repoussent. "
                                "(5 pts)", False)],
        [("Ex. 3 — ", False), ("1. Attraction. (2 pts)", False)],
        [("2. Répulsion. (2 pts)", False)],
        [("3. Répulsion. (2 pts)", False)],
        [("Ex. 4 — ", False), ("parce que son pôle Nord est attiré par le pôle magnétique situé près du "
                                "Nord terrestre. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 3 (globale 64) - L'electrisation d'un objet
# ---------------------------------------------------------------------------
S3 = {
    "num": 3, "title": "L'électrisation d'un objet",
    "theme": THEME, "ras_theme": RAS_THEME, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "décrire l'électrisation d'un objet par frottement et son interaction avec des matériaux "
                "légers.",
    "support": "une règle en plastique, un morceau de tissu en laine ou de papier, de petits morceaux de "
               "papier découpés.",
    "cover_image": ("scripts/t4/generated_images/u9_s3_a_regle.jpg",
                     "Un enfant frotte une règle en plastique avec un morceau de tissu, prêt à approcher "
                     "la règle de petits morceaux de papier."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Que se passe-t-il quand on approche deux pôles identiques de deux aimants ?",
         "R.A. : ils se repoussent.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Approchons une règle en plastique, non frottée, de petits morceaux de "
                                 "papier. Que se passe-t-il ?",
         "R.A. : rien ne se passe, les morceaux de papier ne bougent pas.", "Expérimentation dirigée",
         "Règle, papier", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « L'électrisation d'un objet ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Frottons maintenant vigoureusement la règle avec un morceau de tissu ou de "
                            "cheveux, puis approchons-la à nouveau des petits morceaux de papier. Que "
                            "se passe-t-il cette fois ?",
         "R.A. : les petits morceaux de papier sont attirés par la règle et se collent à elle.",
         "Expérimentation dirigée", "Règle, tissu, papier", ""),
        ("4. Analyse", "À votre avis, pourquoi la règle attire-t-elle le papier seulement après avoir été "
                        "frottée ?",
         "R.A. : le frottement a chargé la règle d'électricité statique : on dit qu'elle s'est électrisée. "
         "Une fois électrisée, elle peut attirer de petits objets légers, même s'ils ne contiennent pas "
         "de métal.", "Étude de cas", "Règle, tissu, papier", ""),
        ("5. Synthèse", "Donc, un objet peut être électrisé par frottement : en le frottant contre un "
                         "autre matériau (tissu, cheveux, laine), il se charge d'électricité statique et "
                         "devient capable d'attirer de petits objets légers (papier, cheveux, poussière), "
                         "qu'ils soient métalliques ou non.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Après avoir enlevé un pull en laine, on entend parfois de petits "
                            "crépitements et les cheveux se dressent. Comment expliquer ce phénomène ?",
         "Ex. 1 : le frottement du pull contre les cheveux les a électrisés, ce qui provoque une légère "
         "attraction et parfois de petites étincelles.", "Travail individuel", "Cahier", ""),
        ("III. ÉVALUATION", "Ex. 1 — Comment peut-on électriser un objet ? Que peut-il alors attirer ?",
         "Ex. 1 : par frottement contre un autre matériau ; il peut attirer de petits objets légers.",
         "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Qu'est-ce que l'électrisation ?"),
        ("body", "L'électrisation est le fait de charger un objet d'électricité statique, le plus souvent "
                 "par frottement contre un autre matériau (un tissu, de la laine, des cheveux). Un objet "
                 "électrisé peut alors attirer de petits objets légers."),
        ("section", "2. L'électrisation par frottement"),
        ("body", "Quand on frotte une règle en plastique ou un ballon de baudruche avec un tissu, l'objet "
                 "se charge d'électricité statique : il devient « électrisé ». Contrairement à un aimant, "
                 "un objet électrisé attire des matériaux légers de toutes sortes (papier, cheveux, "
                 "confettis), pas seulement des métaux."),
        ("image", ("scripts/t4/generated_images/u9_s3_b_electrisation.jpg",
                   "Une règle en plastique frottée avec un tissu devient électrisée et attire de petits "
                   "morceaux de papier.")),
        ("section", "3. Des exemples de la vie quotidienne"),
        ("body", "On observe l'électrisation quand on enlève un pull en laine et que les cheveux se "
                 "dressent, quand un ballon de baudruche frotté sur des cheveux reste collé au mur, ou "
                 "quand un peigne frotté attire de petits morceaux de papier."),
        ("image", ("scripts/t4/generated_images/u9_s3_c_cheveux.jpg",
                   "Une fillette frotte un ballon de baudruche sur ses cheveux, qui se dressent et sont "
                   "attirés par le ballon électrisé.")),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Qu'est-ce que l'électrisation d'un objet ?"),
        ("Exercice 2 (5 points)", " — Comment peut-on électriser une règle en plastique ?"),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                   "1. Un objet électrisé peut attirer de petits morceaux de papier.\n"
                                   "2. Seuls les objets métalliques peuvent être électrisés.\n"
                                   "3. Le frottement peut électriser un objet."),
        ("Exercice 4 (4 points)", " — Explique en une phrase pourquoi les cheveux d'un enfant se dressent "
                                   "parfois quand il enlève son pull en laine."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("c'est le fait de charger un objet d'électricité statique, en général par "
                                "frottement. (5 pts)", False)],
        [("Ex. 2 — ", False), ("en la frottant contre un tissu, de la laine ou des cheveux. (5 pts)",
                                False)],
        [("Ex. 3 — ", False), ("1. Vrai. (2 pts)", False)],
        [("2. Faux, des objets non métalliques comme le plastique peuvent aussi être électrisés. (2 pts)",
          False)],
        [("3. Vrai. (2 pts)", False)],
        [("Ex. 4 — ", False), ("parce que le frottement du pull électrise les cheveux, qui se repoussent "
                                "légèrement entre eux et se dressent. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 4 (globale 65) - Les charges electriques et leurs interactions
# ---------------------------------------------------------------------------
S4 = {
    "num": 4, "title": "Les charges électriques et leurs interactions",
    "theme": THEME, "ras_theme": RAS_THEME, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "expliquer l'attraction et la répulsion entre objets électrisés selon leurs charges "
                "électriques.",
    "support": "deux ballons de baudruche, un morceau de laine, fil pour suspendre les ballons.",
    "cover_image": ("scripts/t4/generated_images/u9_s4_a_ballons.jpg",
                     "Deux ballons de baudruche gonflés, suspendus par un fil, prêts pour une expérience "
                     "d'électricité statique."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Comment peut-on électriser un objet ?",
         "R.A. : par frottement contre un autre matériau.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Frottons deux ballons de baudruche avec de la laine, puis suspendons-les "
                                 "côte à côte par un fil. Que se passe-t-il ?",
         "R.A. : les deux ballons s'éloignent l'un de l'autre, comme s'ils se repoussaient.",
         "Expérimentation dirigée", "Deux ballons, laine, fil", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les charges électriques et leurs "
                             "interactions ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Approchons maintenant un des ballons électrisés du bras d'un élève, ou de "
                            "petits morceaux de papier. Que se passe-t-il ?",
         "R.A. : les poils du bras se dressent légèrement ; les morceaux de papier sont attirés par le "
         "ballon.", "Observation dirigée", "Ballon électrisé, papier", ""),
        ("4. Analyse", "À votre avis, pourquoi les deux ballons se repoussent-ils, alors que le ballon "
                        "attire les morceaux de papier ?",
         "R.A. : l'électrisation par frottement avec le même matériau (la laine) donne aux deux ballons "
         "le même type de charge électrique ; deux charges identiques se repoussent. En revanche, le "
         "papier n'est pas électrisé ou porte une charge différente, donc il est attiré par le ballon.",
         "Étude de cas", "Ballons, papier", ""),
        ("5. Synthèse", "Donc, un objet électrisé porte une charge électrique. Deux objets portant des "
                         "charges électriques identiques se repoussent, tout comme deux pôles magnétiques "
                         "identiques. Deux objets portant des charges différentes s'attirent, comme un "
                         "objet électrisé et un objet non électrisé (le papier).",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Deux ballons frottés de la même façon avec de la laine sont suspendus "
                            "côte à côte. Vont-ils s'attirer ou se repousser ?",
         "Ex. 1 : ils vont se repousser, car ils portent la même charge électrique.",
         "Travail individuel", "Cahier", ""),
        ("III. ÉVALUATION", "Ex. 1 — Que se passe-t-il entre deux objets portant des charges électriques "
                             "identiques ? Et des charges différentes ?",
         "Ex. 1 : charges identiques → répulsion ; charges différentes → attraction.",
         "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Un objet électrisé porte une charge électrique"),
        ("body", "Quand un objet est électrisé par frottement, il porte une charge électrique. Les "
                 "physiciens distinguent deux types de charges, qu'on appelle par convention positive et "
                 "négative."),
        ("section", "2. L'interaction entre les charges électriques"),
        ("sub", "a. Charges identiques : répulsion"),
        ("body", "Deux objets qui portent le même type de charge électrique se repoussent, tout comme deux "
                 "pôles identiques d'un aimant."),
        ("sub", "b. Charges différentes : attraction"),
        ("body", "Deux objets qui portent des charges électriques différentes s'attirent. Un objet "
                 "électrisé attire aussi les objets non électrisés, comme de petits morceaux de papier."),
        ("image", ("scripts/t4/generated_images/u9_s4_b_charges.jpg",
                   "Les charges électriques : deux charges identiques se repoussent, deux charges "
                   "différentes s'attirent.")),
        ("section", "3. Une comparaison avec les aimants"),
        ("body", "L'interaction entre charges électriques ressemble à celle entre pôles magnétiques : dans "
                 "les deux cas, ce qui est identique se repousse et ce qui est différent s'attire. "
                 "Cependant, l'électricité statique et le magnétisme restent deux phénomènes distincts."),
        ("image", ("scripts/t4/generated_images/u9_s4_c_eclair.jpg",
                   "Un éclair illumine le ciel pendant un orage tropical à Madagascar : une manifestation "
                   "naturelle et puissante de l'électricité.")),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Que se passe-t-il entre deux objets portant des charges électriques "
                                   "identiques ?"),
        ("Exercice 2 (5 points)", " — Que se passe-t-il entre deux objets portant des charges électriques "
                                   "différentes ?"),
        ("Exercice 3 (6 points)", " — Complète : deux ballons frottés avec le même tissu et suspendus côte "
                                   "à côte se …………… (attirent/repoussent) car ils portent des charges "
                                   "…………… (identiques/différentes). Un de ces ballons attire un morceau de "
                                   "papier non électrisé car leurs charges sont …………… (identiques/"
                                   "différentes)."),
        ("Exercice 4 (4 points)", " — En une phrase, compare l'interaction entre deux charges électriques "
                                   "identiques et celle entre deux pôles magnétiques identiques."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("elles se repoussent. (5 pts)", False)],
        [("Ex. 2 — ", False), ("elles s'attirent. (5 pts)", False)],
        [("Ex. 3 — ", False), ("se repoussent ; identiques ; différentes. (2 pts par mot correct, "
                                "6 pts)", False)],
        [("Ex. 4 — ", False), ("dans les deux cas, ce qui est identique (charges ou pôles) se repousse. "
                                "(4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 5 (globale 66) - Revision Unite IX
# ---------------------------------------------------------------------------
S5 = {
    "num": 5, "title": "Révision — Unité IX : Électricité et magnétisme", "kind": "revision",
    "theme": THEME, "ras_theme": "Les aimants et leurs interactions ; les pôles d'un aimant ; "
                                  "l'électrisation d'un objet ; les charges électriques et leurs "
                                  "interactions",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "traiter un sujet complet portant sur les séances 62 à 65, puis identifier ses points "
                "faibles.",
    "support": "sujet recopié au tableau ou polycopié, cahier de brouillon.",
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Sans ouvrir votre cahier : cite les deux pôles d'un aimant.",
         "R.A. : pôle Nord, pôle Sud.", "Questionnement oral", "—", ""),
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
    "sujet_title": "Sujet d'entraînement — Unité IX (Électricité et magnétisme) — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Vrai ou faux — justifie en une phrase (2 points)\n"
         "1. Un aimant attire le bois.\n"
         "2. Deux pôles différents d'aimants s'attirent."),
        ("", "B. Complète avec le mot exact (2 points)\n"
              "1. Un objet chargé d'électricité statique par frottement est dit ……………… .\n"
              "2. Deux objets portant des charges électriques identiques ……………… ."),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "Un enseignant distribue 30 petits objets à sa classe pour un tri avec un aimant : 12 objets "
         "sont attirés, les autres ne le sont pas.\n"
         "1. Combien d'objets ne sont pas attirés par l'aimant ? (2 pts)\n"
         "2. Quel pourcentage des objets est attiré par l'aimant ? (2 pts)\n"
         "3. Si l'on ajoute 10 objets métalliques supplémentaires (tous attirés) au même lot, quel est "
         "le nouveau pourcentage d'objets attirés sur le total ? (2 pts, réponse argumentée)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Une élève frotte un ballon de baudruche sur ses cheveux, puis l'approche d'un mur. Le ballon "
         "reste collé au mur pendant plusieurs secondes.\n"
         "1. Comment appelle-t-on le phénomène qui a chargé le ballon ? (1,5 pt)\n"
         "2. Pourquoi le ballon reste-t-il collé au mur ? (2 pts)\n"
         "3. Le ballon aurait-il attiré le mur avant d'avoir été frotté ? Justifie. (1,5 pt)\n"
         "4. Cite un autre exemple de la vie quotidienne où l'on observe ce même phénomène. (1 pt)"),
        ("Exercice 4 — Situation (4 points)",
         "Un camarade affirme : « Un aimant et un objet électrisé, c'est la même chose. » Réponds-lui en "
         "deux phrases, en expliquant la différence entre magnétisme et électrisation."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. Faux, un aimant n'attire que certains métaux (fer, acier, nickel), pas le bois. (1 pt)",
          False)],
        [("2. Vrai. (1 pt)", False)],
        [("B. 1. électrisé · 2. se repoussent (1 pt par réponse)", False)],
        [("Renvoi : séances 62, 63, 64.", True)],
        [("Exercice 2 (6 pts)", True)],
        [("1. 30 − 12 = 18 objets non attirés. (2 pts)", False)],
        [("2. 12 ÷ 30 × 100 = 40 % des objets. (2 pts)", False)],
        [("3. (12+10) ÷ (30+10) × 100 = 22 ÷ 40 × 100 = 55 % des objets. (2 pts)", False)],
        [("Renvoi : séance 62.", True)],
        [("Exercice 3 (6 pts)", True)],
        [("1. L'électrisation (par frottement). (1,5 pt)", False)],
        [("2. Parce qu'il est électrisé et attiré par le mur, qui porte une charge différente (ou "
          "neutre). (2 pts)", False)],
        [("3. Non, car avant d'être frotté, il n'était pas électrisé et ne pouvait rien attirer. "
          "(1,5 pt)", False)],
        [("4. Réponse libre : des cheveux qui se dressent en enlevant un pull en laine, un peigne qui "
          "attire de petits papiers. (1 pt)", False)],
        [("Renvoi : séance 64.", True)],
        [("Exercice 4 (4 pts)", True)],
        [("Réponse libre : un aimant attire naturellement certains métaux en permanence (magnétisme), "
          "alors qu'un objet électrisé doit d'abord être frotté pour attirer temporairement des objets "
          "légers (électrisation). (4 pts)", False)],
        [("Renvoi : séances 62, 64.", True)],
        [("Repères de score : 16-20 acquis · 11-15 à consolider · 6-10 fragile · 0-5 reprendre les "
          "séances 62 à 65.", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 6 (globale 67) - Examen Unite IX (dernier examen du manuel)
# ---------------------------------------------------------------------------
S6 = {
    "num": 6, "title": "Sujet d'examen ST T4 — Unité IX : Électricité et magnétisme", "kind": "exam",
    "theme": THEME, "ras_theme": "Les aimants et leurs interactions ; les pôles d'un aimant ; "
                                  "l'électrisation d'un objet ; les charges électriques et leurs "
                                  "interactions",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "évaluer la maîtrise des notions des séances 62 à 65 — les aimants, leurs pôles, "
                "l'électrisation et les charges électriques.",
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
    "sujet_title": "SUJET D'EXAMEN — Unité IX : Électricité et magnétisme — Durée : ____________ — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. QCM — une seule réponse exacte (2 points)\n"
         "1. Un aimant attire : A. le bois B. le fer C. le plastique\n"
         "2. Deux pôles identiques d'aimants : A. s'attirent B. se repoussent C. n'interagissent pas\n"
         "3. Un objet peut être électrisé par : A. le froid B. le frottement C. la couleur\n"
         "4. Deux charges électriques différentes : A. s'attirent B. se repoussent C. n'interagissent pas"),
        ("", "B. Complète avec le mot exact (2 points)\n"
              "1. Les deux pôles d'un aimant sont le pôle ……………… et le pôle ……………… .\n"
              "2. Un objet électrisé peut attirer de petits ……………… , même s'ils ne sont pas "
              "métalliques."),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "Une classe de 25 élèves teste chacun un aimant sur 4 objets différents (fer, bois, plastique, "
         "acier). Pour chaque élève, 2 des 4 objets sont attirés.\n"
         "1. Combien d'objets, au total pour toute la classe, sont testés ? (2 pts)\n"
         "2. Combien d'objets, au total, sont attirés par les aimants ? (2 pts)\n"
         "3. Quel pourcentage du total des objets testés représente ce nombre d'objets attirés ? "
         "(2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Deux ballons de baudruche, frottés avec le même morceau de laine, sont suspendus côte à côte "
         "par un fil. On observe qu'ils s'écartent l'un de l'autre.\n"
         "1. Comment appelle-t-on le phénomène qui a chargé les ballons ? (1,5 pt)\n"
         "2. Pourquoi les deux ballons s'écartent-ils l'un de l'autre ? (2 pts)\n"
         "3. Que se passerait-il si l'on approchait l'un des ballons d'un petit morceau de papier non "
         "électrisé ? (1,5 pt)\n"
         "4. Cite un phénomène chez les aimants qui ressemble à cette répulsion. (1 pt)"),
        ("Exercice 4 — Situation (4 points)",
         "Un camarade affirme : « Les aimants et l'électricité statique, ça n'a rien à voir. » Réponds-lui "
         "en deux phrases, en citant un point commun et une différence entre les deux phénomènes."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. B · 2. B · 3. B · 4. A (0,5 pt par réponse)", False)],
        [("B. 1. Nord ; Sud · 2. objets légers (1 pt par réponse)", False)],
        [("Renvoi : séances 62, 63, 64.", True)],
        [("Exercice 2 (6 pts)", True)],
        [("1. 25 × 4 = 100 objets testés au total. (2 pts)", False)],
        [("2. 25 × 2 = 50 objets attirés au total. (2 pts)", False)],
        [("3. 50 ÷ 100 × 100 = 50 % des objets testés. (2 pts)", False)],
        [("Renvoi : séance 62.", True)],
        [("Exercice 3 (6 pts)", True)],
        [("1. L'électrisation (par frottement avec la laine). (1,5 pt)", False)],
        [("2. Parce qu'ils portent tous les deux la même charge électrique, et deux charges identiques "
          "se repoussent. (2 pts)", False)],
        [("3. Le papier serait attiré par le ballon électrisé, car leurs charges sont différentes. "
          "(1,5 pt)", False)],
        [("4. La répulsion entre deux pôles magnétiques identiques. (1 pt)", False)],
        [("Renvoi : séances 63, 65.", True)],
        [("Exercice 4 (4 pts)", True)],
        [("Réponse libre : point commun — dans les deux cas, ce qui est identique se repousse et ce qui "
          "est différent s'attire ; différence — le magnétisme d'un aimant est permanent, tandis que "
          "l'électrisation nécessite un frottement et disparaît avec le temps. (4 pts)", False)],
        [("Renvoi : séances 62, 65.", True)],
        [("TOTAL : 20 points", True)],
    ],
}
