# -*- coding: utf-8 -*-
"""Content for UNITE II - Organisation des êtres vivants (seances 8-17).
Grounded in PE T4 p.83-84 (RAS: Classifier des plantes selon leurs
caracteristiques / Expliquer l'importance des plantes pour l'environnement
et la vie quotidienne).
"""

THEME = "Organisation des êtres vivants"
RAS_THEME_1 = "Classifier des plantes selon leurs caractéristiques"
RAS_THEME_2 = "Expliquer l'importance des plantes pour l'environnement et la vie quotidienne"
VALEURS = "respect des biens communs, responsabilité"

# ---------------------------------------------------------------------------
# SEANCE 1 (globale 8) - L'organisation générale d'une plante
# ---------------------------------------------------------------------------
S1 = {
    "num": 1, "title": "L'organisation générale d'une plante",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "identifier les différentes parties d'une plante à fleurs et leurs caractéristiques.",
    "support": "un pied de plante entier avec racines (haricot, brède ou petite plante locale), planche ou schéma d'une plante, tableau noir.",
    "cover_image": ("scripts/t4/generated_images/u2_s1_a_jardin.jpg",
                     "Un pied de haricot arraché : on distingue déjà les racines, la tige et les feuilles."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Citez un aliment d'origine végétale que nous avons vu dans l'unité précédente.",
         "R.A. : le riz, la brède, la mangue…", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Voici un pied de brède arraché avec ses racines. Combien de parties différentes voyez-vous ?",
         "R.A. : les élèves proposent racine, tige, feuilles, parfois fleur.", "Questionnement oral", "Plante entière", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « L'organisation générale d'une plante ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez la plante : notez ce qui est dans le sol et ce qui est à l'air libre.",
         "R.A. : dans le sol — la racine ; à l'air libre — la tige, les feuilles, parfois une fleur.", "Observation dirigée", "Plante entière, loupe", ""),
        ("4. Analyse", "À votre avis, à quoi sert la racine ? La tige ? La feuille ? Et la fleur ?",
         "R.A. : la racine fixe et absorbe l'eau ; la tige porte et transporte ; la feuille capte la lumière ; la fleur donne des graines.", "Étude de cas", "Plante entière", ""),
        ("5. Synthèse", "Donc, une plante à fleurs a un appareil végétatif (racine, tige, feuilles) qui assure sa vie, et un appareil reproducteur (fleur, fruit, graine) qui assure sa reproduction.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Légendez le schéma d'une plante à fleurs.",
         "Ex. 1 : racine, tige, feuille, fleur correctement placées.", "Travail individuel", "Fiche de schéma", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite les deux appareils d'une plante à fleurs et un organe de chacun.",
         "Ex. 1 : appareil végétatif (racine) ; appareil reproducteur (fleur).", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Les deux appareils d'une plante à fleurs"),
        ("body", "Une plante à fleurs est organisée en deux grands ensembles d'organes : l'appareil végétatif, qui "
                 "assure la vie de la plante (nutrition, croissance), et l'appareil reproducteur, qui assure sa "
                 "reproduction (formation de nouvelles graines)."),
        ("section", "2. L'appareil végétatif"),
        ("sub", "a. La racine"),
        ("body", "Elle est enfoncée dans le sol. Elle fixe la plante et absorbe l'eau et les sels minéraux dont la "
                 "plante a besoin."),
        ("sub", "b. La tige"),
        ("body", "Elle porte les feuilles et les fleurs, et transporte la sève entre les racines et les feuilles."),
        ("sub", "c. La feuille"),
        ("body", "Généralement verte, elle capte la lumière du soleil pour fabriquer la nourriture de la plante."),
        ("section", "3. L'appareil reproducteur"),
        ("body", "Il comprend la fleur, qui après fécondation devient un fruit contenant une ou plusieurs graines. "
                 "La graine, semée dans le sol, donnera une nouvelle plante."),
        ("image", ("scripts/t4/generated_images/u2_s1_b_plante.jpg",
                   "L'organisation d'une plante à fleurs : racine, tige, feuille, fleur/fruit/graine.")),
        ("section", "4. Pourquoi étudier ces parties ?"),
        ("body", "Reconnaître les parties d'une plante permet ensuite de comparer différentes plantes entre elles, "
                 "et de comprendre comment les classer — ce que nous ferons dans les prochaines séances."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Nomme les quatre organes principaux d'une plante à fleurs, dans l'ordre "
                                  "du sol vers le haut : 1. …… (dans le sol) · 2. …… (porte les feuilles) · "
                                  "3. …… (capte la lumière) · 4. …… (donne les graines)."),
        ("Exercice 2 (5 points)", " — Associe chaque organe à son rôle principal : 1. racine · 2. tige · "
                                  "3. feuille · 4. fleur.\nRôles : a. transporte la sève · b. absorbe l'eau et fixe la "
                                  "plante · c. donne naissance au fruit et aux graines · d. capte la lumière."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. La racine se trouve toujours à l'air libre.\n"
                                  "2. L'appareil végétatif comprend la racine, la tige et les feuilles.\n"
                                  "3. La fleur appartient à l'appareil reproducteur.\n"
                                  "4. Toutes les plantes ont des fleurs."),
        ("Exercice 4 (4 points)", " — Choisis la bonne réponse :\n"
                                  "1. L'organe qui absorbe l'eau du sol est : A. la feuille B. la racine C. la fleur\n"
                                  "2. L'organe qui deviendra un fruit est : A. la tige B. la racine C. la fleur\n"
                                  "3. L'appareil végétatif sert surtout à : A. se reproduire B. vivre et grandir C. fleurir\n"
                                  "4. La sève circule surtout dans : A. la tige B. la fleur C. le fruit"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. racine", True), (" · 2. ", False), ("tige", True), (" · 3. ", False),
         ("feuille", True), (" · 4. ", False), ("fleur", True)],
        [("Ex. 2 — ", False), ("1 → b", True), (" · ", False), ("2 → a", True), (" · ", False),
         ("3 → d", True), (" · ", False), ("4 → c", True)],
        [("Ex. 3 — ", False),
         ("1. Faux. La racine se trouve dans le sol, pas à l'air libre. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Vrai. (1,5 pt)", False)],
        [("4. Faux. Certaines plantes n'ont pas de fleurs (mousses, fougères, algues, champignons). (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("1. B", True), (" · 2. ", False), ("C", True), (" · 3. ", False),
         ("B", True), (" · 4. ", False), ("A", True)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 2 (globale 9) - Les plantes sans fleurs
# ---------------------------------------------------------------------------
S2 = {
    "num": 2, "title": "Les plantes sans fleurs",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "identifier les principales familles de plantes sans fleurs et leurs caractéristiques.",
    "support": "échantillons de mousse, de fougère, d'algue (si disponible) et de champignon, ou photos, loupe.",
    "cover_image": ("scripts/t4/generated_images/u2_s2_a_foret.jpg",
                     "Un sous-bois humide malgache après la pluie : mousses, fougères et champignons."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Quels sont les deux appareils d'une plante à fleurs ?",
         "R.A. : appareil végétatif et appareil reproducteur.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Voici un morceau de mousse et un champignon. Ont-ils des fleurs ?",
         "R.A. : non, on ne voit aucune fleur.", "Questionnement oral", "Échantillons", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les plantes sans fleurs ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez à la loupe la mousse, la fougère (si disponible) et le champignon. Décrivez leur aspect.",
         "R.A. : la mousse forme un petit tapis vert ; la fougère a de grandes feuilles découpées ; le champignon n'est pas vert.", "Observation dirigée", "Échantillons, loupe", ""),
        ("4. Analyse", "Le champignon est-il vert comme les autres ? Fabrique-t-il sa nourriture comme une plante verte ?",
         "R.A. : non, le champignon n'est pas vert ; il se nourrit de matière déjà présente (bois mort, sol).", "Étude de cas", "Échantillons", ""),
        ("5. Synthèse", "Donc, les plantes sans fleurs regroupent les mousses, les fougères, les algues et les champignons ; elles se reproduisent sans graines, généralement par spores.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Classe ces organismes : mousse, manguier, fougère, haricot, champignon, algue.",
         "Ex. 1 : sans fleurs — mousse, fougère, champignon, algue ; à fleurs — manguier, haricot.", "Travail de groupe", "Cahier", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite les quatre familles de plantes sans fleurs.",
         "Ex. 1 : mousses, fougères, algues, champignons.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Des plantes qui ne fleurissent jamais"),
        ("body", "Toutes les plantes n'ont pas de fleurs. Certaines se reproduisent d'une autre manière, "
                 "généralement par des spores, des cellules minuscules libérées dans l'air ou dans l'eau."),
        ("section", "2. Les mousses"),
        ("body", "Petites plantes vertes, sans racines véritables, formant un tapis dense sur les rochers, les "
                 "murs humides ou l'écorce des arbres. Elles poussent surtout dans les endroits humides et ombragés."),
        ("section", "3. Les fougères"),
        ("body", "Plantes aux grandes feuilles découpées appelées frondes, souvent enroulées quand elles sont "
                 "jeunes. On en trouve dans les sous-bois humides des Hautes Terres malgaches."),
        ("image", ("scripts/t4/generated_images/u2_s2_b_familles.jpg",
                   "Les quatre familles de plantes sans fleurs : mousse, fougère, algue, champignon.")),
        ("section", "4. Les algues"),
        ("body", "Elles vivent dans l'eau douce ou dans l'eau de mer (le long des côtes malgaches). Elles vont du "
                 "simple voile vert sur une mare aux grandes algues brunes des rivages."),
        ("section", "5. Les champignons"),
        ("body", "Contrairement aux plantes vertes, le champignon ne fabrique pas sa propre nourriture à partir "
                 "de la lumière : il se nourrit de matière organique (bois mort, feuilles en décomposition, sol). "
                 "Certains champignons sont comestibles (les holatra que l'on ramasse après la pluie), d'autres "
                 "sont dangereux et ne doivent jamais être mangés sans l'avis d'un adulte qui les connaît bien."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Cite les quatre familles de plantes sans fleurs vues en classe."),
        ("Exercice 2 (5 points)", " — Associe chaque description à la bonne famille : 1. petit tapis vert sur un "
                                  "mur humide · 2. grandes feuilles découpées en sous-bois · 3. vit dans l'eau · "
                                  "4. ne fabrique pas sa nourriture à partir de la lumière.\n"
                                  "Familles : mousse, fougère, algue, champignon."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Les champignons sont toujours comestibles.\n"
                                  "2. Les mousses n'ont pas de fleurs.\n"
                                  "3. Les algues vivent uniquement en mer.\n"
                                  "4. Les plantes sans fleurs se reproduisent surtout par spores."),
        ("Exercice 4 (4 points)", " — Choisis la bonne réponse :\n"
                                  "1. Une plante qui forme un tapis vert sur un mur humide est probablement : "
                                  "A. un champignon B. une mousse C. une algue\n"
                                  "2. Les fougères se trouvent surtout : A. dans le désert B. dans les sous-bois "
                                  "humides C. dans la mer\n"
                                  "3. Le champignon se nourrit : A. de la lumière du soleil B. de matière "
                                  "organique C. uniquement d'eau\n"
                                  "4. Un exemple malgache de champignon comestible ramassé après la pluie est : "
                                  "A. le holatra B. la brède C. le voamadilo"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("mousses, fougères, algues, champignons.", True)],
        [("Ex. 2 — ", False), ("1 → mousse", True), (" · 2 → ", False), ("fougère", True), (" · 3 → ", False),
         ("algue", True), (" · 4 → ", False), ("champignon", True)],
        [("Ex. 3 — ", False),
         ("1. Faux. Certains champignons sont toxiques et dangereux, il ne faut jamais en manger sans l'avis "
          "d'un adulte qui les connaît. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Faux. Il existe aussi des algues d'eau douce. (1,5 pt)", False)],
        [("4. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("1. B", True), (" · 2. ", False), ("B", True), (" · 3. ", False),
         ("B", True), (" · 4. ", False), ("A", True)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 3 (globale 10) - Les plantes à fleurs : monocotylédones et dicotylédones
# ---------------------------------------------------------------------------
S3 = {
    "num": 3, "title": "Les plantes à fleurs : monocotylédones et dicotylédones",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "dégager les caractéristiques distinctives des plantes monocotylédones et dicotylédones.",
    "support": "un grain de maïs germé et un grain de haricot germé, feuilles de riz et feuilles de haricot, loupe.",
    "cover_image": ("scripts/t4/generated_images/u2_s3_a_champs.jpg",
                     "Rizières et champ de haricots sur les Hautes Terres : deux grandes familles de plantes."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite deux plantes sans fleurs.",
         "R.A. : la mousse, le champignon…", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Voici une feuille de riz et une feuille de haricot. Sont-elles pareilles ?",
         "R.A. : non, les nervures sont différentes.", "Questionnement oral", "Feuilles", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les plantes à fleurs : monocotylédones et "
                            "dicotylédones ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez les nervures des deux feuilles et le nombre de petites feuilles qui sortent "
                            "en premier des deux graines germées.",
         "R.A. : le riz a des nervures parallèles et une seule petite feuille au départ ; le haricot a des "
         "nervures en réseau et deux petites feuilles au départ.", "Observation dirigée", "Feuilles, graines germées, loupe", ""),
        ("4. Analyse", "Le mot cotylédon désigne la première feuille (ou les deux premières) qui sort de la "
                       "graine. Combien de cotylédons a le riz ? Et le haricot ?",
         "R.A. : le riz — un seul (monocotylédone) ; le haricot — deux (dicotylédone).", "Étude de cas", "Graines germées", ""),
        ("5. Synthèse", "Donc, on distingue les monocotylédones (un cotylédon, nervures parallèles, racines en "
                        "faisceau, comme le riz, le maïs) des dicotylédones (deux cotylédons, nervures en réseau, "
                        "racine principale, comme le haricot, le manguier).",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Range ces plantes selon leur famille : riz, haricot, maïs, manguier, canne à "
                           "sucre, brède.",
         "Ex. 1 : monocotylédones — riz, maïs, canne à sucre ; dicotylédones — haricot, manguier, brède.", "Travail de groupe", "Cahier", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite deux différences entre une monocotylédone et une dicotylédone.",
         "Ex. 1 : nombre de cotylédons différent ; nervures des feuilles différentes.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Qu'est-ce qu'un cotylédon ?"),
        ("body", "Le cotylédon est la première feuille, déjà présente dans la graine, qui apparaît lors de la "
                 "germination avant les vraies feuilles. Son nombre permet de classer les plantes à fleurs en deux "
                 "grands groupes."),
        ("section", "2. Les monocotylédones (un seul cotylédon)"),
        ("body", "Caractéristiques : une seule feuille au départ de la germination, des nervures parallèles sur "
                 "les feuilles, des racines fines regroupées en faisceau (sans racine principale bien marquée). "
                 "Exemples malgaches : le riz (vary), le maïs (katsaka), la canne à sucre (fary), le bananier "
                 "(akondro)."),
        ("section", "3. Les dicotylédones (deux cotylédons)"),
        ("body", "Caractéristiques : deux petites feuilles au départ de la germination, des nervures en réseau "
                 "(ramifiées) sur les feuilles, une racine principale bien développée avec des racines "
                 "secondaires. Exemples malgaches : le haricot (tsaramaso), le manguier (manga), les brèdes "
                 "(anana)."),
        ("image", ("scripts/t4/generated_images/u2_s3_b_comparaison.jpg",
                   "Comparaison monocotylédone / dicotylédone : nervures, cotylédons, racines.")),
        ("table", {
            "headers": ["Critère d'observation", "Monocotylédones", "Dicotylédones"],
            "rows": [
                ["Forme des racines", "En touffe (racines fasciculées)", "Une grosse racine principale (racine pivotante)"],
                ["Nervures des feuilles", "Lignes droites parallèles", "En réseau ou ramifiées"],
                ["Nombre de cotylédons", "1 seul (ex. riz, maïs)", "2 (ex. haricot, arachide)"],
            ],
        }),
        ("section", "4. Pourquoi cette distinction est-elle utile ?"),
        ("body", "Connaître la famille d'une plante aide à prévoir la forme de ses racines, de ses feuilles, et "
                 "même certains besoins de culture — des informations utiles pour l'agriculteur comme pour le "
                 "jardinier."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Complète le tableau : pour chaque caractéristique, indique si elle "
                                  "correspond à une monocotylédone ou une dicotylédone.\n"
                                  "1. Nervures parallèles · 2. Deux cotylédons · 3. Racine en faisceau · "
                                  "4. Nervures en réseau · 5. Un seul cotylédon."),
        ("Exercice 2 (5 points)", " — Classe ces plantes : riz, manguier, maïs, haricot, canne à sucre.\n"
                                  "Deux colonnes : monocotylédones / dicotylédones."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Le riz est une dicotylédone.\n"
                                  "2. Les dicotylédones ont deux cotylédons.\n"
                                  "3. Une monocotylédone a des nervures en réseau.\n"
                                  "4. Le manguier est une dicotylédone."),
        ("Exercice 4 (4 points)", " — Choisis la bonne réponse :\n"
                                  "1. Le maïs est une : A. monocotylédone B. dicotylédone C. plante sans fleurs\n"
                                  "2. Une dicotylédone a généralement : A. des nervures parallèles B. des "
                                  "nervures en réseau C. aucune nervure\n"
                                  "3. Le nombre de cotylédons d'une monocotylédone est : A. 0 B. 1 C. 2\n"
                                  "4. La canne à sucre (fary) est une : A. monocotylédone B. dicotylédone "
                                  "C. algue"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. mono", True), (" · 2. ", False), ("di", True), (" · 3. ", False),
         ("mono", True), (" · 4. ", False), ("di", True), (" · 5. ", False), ("mono", True)],
        [("Ex. 2 — ", False), ("Monocotylédones : riz, maïs, canne à sucre. Dicotylédones : manguier, haricot.", True)],
        [("Ex. 3 — ", False),
         ("1. Faux. Le riz est une monocotylédone. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Faux. Une monocotylédone a des nervures parallèles. (1,5 pt)", False)],
        [("4. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("1. A", True), (" · 2. ", False), ("B", True), (" · 3. ", False),
         ("B", True), (" · 4. ", False), ("A", True)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 4 (globale 11) - Classer des plantes locales
# ---------------------------------------------------------------------------
S4 = {
    "num": 4, "title": "Classer des plantes locales",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "classifier adéquatement des plantes locales selon leurs caractéristiques observées.",
    "support": "échantillons de 6 à 8 plantes locales rapportées par les élèves, loupe, fiche de classification.",
    "cover_image": ("scripts/t4/generated_images/u2_s4_a_ecole.jpg",
                     "Des élèves observent et classent des plantes locales à la loupe."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Quelle est la différence entre une monocotylédone et une dicotylédone ?",
         "R.A. : le nombre de cotylédons, les nervures des feuilles, le type de racine.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Chaque groupe a rapporté des plantes locales. Comment allons-nous les ranger "
                                 "par famille ?",
         "R.A. : en observant les fleurs, les feuilles et les racines.", "Consigne", "Plantes apportées", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre à : « Classer des plantes locales ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "En groupe, observez chaque plante : a-t-elle des fleurs ? Combien de cotylédons "
                           "(si vous pouvez le voir) ? Comment sont les nervures ?",
         "R.A. : les élèves remplissent une fiche d'observation par plante.", "Observation dirigée", "Plantes, loupe, fiches", ""),
        ("4. Analyse", "En comparant vos fiches, quelles plantes se ressemblent le plus ?",
         "R.A. : les élèves regroupent les plantes qui partagent les mêmes caractéristiques.", "Travail de groupe", "Fiches remplies", ""),
        ("5. Synthèse", "Donc, on peut classer n'importe quelle plante locale en suivant la même démarche : "
                        "chercher d'abord si elle a des fleurs, puis regarder ses nervures et son nombre de "
                        "cotylédons.",
         "Les élèves écoutent et notent.", "Bilan collectif", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Classez les plantes de votre groupe dans un tableau à trois colonnes : "
                           "sans fleurs, monocotylédones, dicotylédones.",
         "Ex. 1 : classement correct présenté par chaque groupe.", "Travail de groupe", "Fiche de classification", ""),
        ("III. ÉVALUATION", "Ex. 1 — Présentez oralement le classement de votre groupe et justifiez un exemple.",
         "Ex. 1 : présentation cohérente avec les observations faites.", "Exposé oral", "Fiche remplie", ""),
    ],
    "lecon": [
        ("section", "1. La démarche de classification"),
        ("body", "Pour classer une plante inconnue, on suit toujours les mêmes questions, dans l'ordre : "
                 "1) A-t-elle des fleurs ? 2) Si oui, combien de cotylédons a sa graine (un ou deux) ? "
                 "3) Comment sont les nervures de ses feuilles (parallèles ou en réseau) ?"),
        ("image", ("scripts/t4/generated_images/u2_s4_b_arbre.jpg",
                   "La démarche de classification, étape par étape.")),
        ("section", "2. Un exemple pas à pas : la brède mafana"),
        ("body", "Elle a des fleurs : ce n'est donc pas une plante sans fleurs. Ses feuilles ont des nervures en "
                 "réseau. C'est donc une dicotylédone."),
        ("section", "3. Un exemple pas à pas : le bambou (volotsangana)"),
        ("body", "Il a rarement des fleurs visibles, mais quand il en a, ses feuilles ont des nervures "
                 "parallèles et sa tige est creuse avec des nœuds : c'est une monocotylédone, de la même grande "
                 "famille que le riz et le maïs."),
        ("section", "4. L'intérêt de savoir observer"),
        ("body", "Cette démarche d'observation — regarder attentivement avant de conclure — est la même que "
                 "celle utilisée par les scientifiques : elle permet de classer n'importe quelle plante nouvelle, "
                 "même une plante jamais étudiée en classe."),
    ],
    "exercices": [
        ("Exercice 1 (6 points)", " — Pour chacune de ces trois plantes locales, indique la famille "
                                  "(sans fleurs / monocotylédone / dicotylédone) et justifie en une phrase :\n"
                                  "1. Une plante à nervures parallèles et un seul cotylédon.\n"
                                  "2. Une plante formant un tapis vert sur un rocher humide, sans fleur.\n"
                                  "3. Une plante à nervures en réseau et deux cotylédons."),
        ("Exercice 2 (6 points)", " — Voici les observations d'un élève sur une plante : « Elle a des fleurs, "
                                  "deux petites feuilles à la germination, et des nervures en réseau. »\n"
                                  "1. À quelle famille appartient-elle ? (2 pts)\n"
                                  "2. Cite un exemple malgache de cette famille. (2 pts)\n"
                                  "3. Cite une caractéristique qui aurait été différente si c'était une "
                                  "monocotylédone. (2 pts)"),
        ("Exercice 3 (4 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Toute plante observée doit d'abord être vérifiée : a-t-elle des fleurs ?\n"
                                  "2. Le nombre de cotylédons ne sert à rien pour classer une plante."),
        ("Exercice 4 (4 points)", " — Choisis la bonne réponse :\n"
                                  "1. La première question à se poser pour classer une plante est : "
                                  "A. sa couleur B. si elle a des fleurs C. sa taille\n"
                                  "2. Le bambou (volotsangana) appartient à la même grande famille que : "
                                  "A. le riz B. le haricot C. la mousse"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False),
         ("1. Monocotylédone (nervures parallèles, un cotylédon). (2 pts)", False)],
        [("2. Plante sans fleurs, probablement une mousse (tapis vert, milieu humide, pas de fleur). (2 pts)", False)],
        [("3. Dicotylédone (nervures en réseau, deux cotylédons). (2 pts)", False)],
        [("Ex. 2 — ", False),
         ("1. Dicotylédone. (2 pts)", False)],
        [("2. Par exemple le haricot (tsaramaso) ou le manguier. (2 pts)", False)],
        [("3. Elle aurait eu une seule feuille à la germination et des nervures parallèles. (2 pts)", False)],
        [("Ex. 3 — ", False),
         ("1. Vrai. (2 pts)", False)],
        [("2. Faux. Le nombre de cotylédons distingue justement les monocotylédones des dicotylédones. (2 pts)", False)],
        [("Ex. 4 — ", False), ("1. B", True), (" · 2. ", False), ("A", True)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 5 (globale 12) - Les rôles sociaux et économiques des plantes
# ---------------------------------------------------------------------------
S5 = {
    "num": 5, "title": "Les rôles sociaux et économiques des plantes",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "identifier l'utilité des plantes pour les êtres vivants sur le plan social et économique.",
    "support": "photos ou échantillons de plantes médicinales, ornementales et alimentaires, tableau noir.",
    "cover_image": ("scripts/t4/generated_images/u2_s5_a_marcheplantes.jpg",
                     "Un marché malgache : plantes médicinales, ornementales et alimentaires côte à côte."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite une monocotylédone et une dicotylédone locales.",
         "R.A. : le riz (mono) et le haricot (di), par exemple.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Pourquoi cultive-t-on du romarin ou de l'eucalyptus dans certaines familles ?",
         "R.A. : pour se soigner (tisane) ou pour son odeur.", "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les rôles sociaux et économiques des "
                            "plantes ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez ces photos : une plante médicinale (eucalyptus), une plante ornementale "
                           "(rosier), une plante alimentaire (riz). Quel est l'usage principal de chacune ?",
         "R.A. : se soigner, décorer, se nourrir.", "Observation dirigée", "Photos de plantes", ""),
        ("4. Analyse", "Certaines de ces plantes sont-elles vendues sur le marché ? Qui en profite ?",
         "R.A. : oui, les cultivateurs et les vendeurs en tirent un revenu.", "Discussion guidée", "—", ""),
        ("5. Synthèse", "Donc, les plantes ont un rôle social (se soigner, décorer, embellir un lieu) et un "
                        "rôle économique (nourriture vendue, plantes médicinales et ornementales commercialisées, "
                        "revenu pour les familles).",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Classe ces plantes selon leur rôle principal : eucalyptus, rosier, riz, "
                           "ravintsara, bougainvillier.",
         "Ex. 1 : médicinales — eucalyptus, ravintsara ; ornementales — rosier, bougainvillier ; alimentaire — riz.", "Travail de groupe", "Cahier", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite un rôle social et un rôle économique des plantes.",
         "Ex. 1 : social — se soigner ou décorer ; économique — vente sur le marché.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Les plantes médicinales"),
        ("body", "De nombreuses plantes servent à soigner ou soulager : le ravintsara et l'eucalyptus contre le "
                 "rhume, le kininina (quinquina) contre la fièvre, le voanjobory pour certains soins. Ces plantes "
                 "sont utilisées en tisane, en décoction ou en huile essentielle."),
        ("section", "2. Les plantes de décoration"),
        ("body", "Certaines plantes n'ont pas d'usage alimentaire ou médicinal direct mais embellissent un "
                 "lieu : le rosier, le bougainvillier, les orchidées malgaches très recherchées, les plantes "
                 "d'intérieur en pot, et le flamboyant (arbre originaire de Madagascar, aux fleurs rouge "
                 "orangé), planté le long de nombreuses avenues et cours d'école pour son ombre et sa beauté."),
        ("section", "3. Les plantes nourricières"),
        ("body", "Le riz, le manioc, la patate douce, les brèdes et de nombreux fruits (mangue, letchi, "
                 "banane) nourrissent chaque jour la population malgache."),
        ("image", ("scripts/t4/generated_images/u2_s5_b_roles.jpg",
                   "Trois rôles des plantes : médicinal, ornemental, alimentaire.")),
        ("section", "4. Un rôle économique important"),
        ("body", "Beaucoup de ces plantes sont vendues sur les marchés locaux ou exportées (vanille, girofle, "
                 "litchi). Leur culture, leur récolte et leur vente font vivre de nombreuses familles malgaches : "
                 "cultivateurs, transporteurs, vendeurs au marché."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Classe ces plantes selon leur rôle principal (médicinal, ornemental, "
                                  "alimentaire) : ravintsara, bougainvillier, manioc, orchidée, patate douce."),
        ("Exercice 2 (5 points)", " — Cite deux plantes malgaches exportées qui rapportent un revenu au pays."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Une plante ne peut avoir qu'un seul rôle.\n"
                                  "2. Le ravintsara est utilisé pour se soigner.\n"
                                  "3. Les plantes ornementales n'ont aucune valeur économique.\n"
                                  "4. La vente de plantes peut faire vivre une famille."),
        ("Exercice 4 (4 points)", " — Choisis la bonne réponse :\n"
                                  "1. Le rôle principal du rosier est : A. médicinal B. ornemental C. "
                                  "alimentaire\n"
                                  "2. La vanille malgache est surtout : A. consommée localement seulement B. "
                                  "exportée C. sans valeur commerciale\n"
                                  "3. Une plante qui soigne la fièvre est : A. le rosier B. le kininina C. "
                                  "le bougainvillier\n"
                                  "4. Vendre des plantes sur le marché relève d'un rôle : A. social B. "
                                  "économique C. reproducteur"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("Médicinales : ravintsara. Ornementales : bougainvillier, orchidée. "
                                "Alimentaires : manioc, patate douce.", True)],
        [("Ex. 2 — ", False), ("Par exemple la vanille et le girofle (ou le litchi).", True)],
        [("Ex. 3 — ", False),
         ("1. Faux. Une même plante peut avoir plusieurs rôles (exemple : le manioc, alimentaire et parfois "
          "vendu). (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Faux. Les plantes ornementales comme les orchidées peuvent être vendues et rapporter un revenu. "
          "(1,5 pt)", False)],
        [("4. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("1. B", True), (" · 2. ", False), ("B", True), (" · 3. ", False),
         ("B", True), (" · 4. ", False), ("B", True)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 6 (globale 13) - Les rôles culturels des plantes à Madagascar
# ---------------------------------------------------------------------------
S6 = {
    "num": 6, "title": "Les rôles culturels des plantes à Madagascar",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "découvrir les rôles culturels des plantes dans les traditions et événements de sa communauté.",
    "support": "témoignages ou documents sur les usages symboliques de plantes (canne à sucre, riz), fiche d'enquête.",
    "cover_image": ("scripts/t4/generated_images/u2_s6_a_famorana.jpg",
                     "La canne à sucre partagée lors d'un famorana : un rôle symbolique fort."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite un rôle économique d'une plante.",
         "R.A. : la vente de vanille ou de girofle, par exemple.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Avez-vous déjà vu de la canne à sucre offerte lors d'une fête familiale, comme "
                                 "une circoncision (famorana) ?",
         "R.A. : les élèves partagent leurs souvenirs.", "Discussion guidée", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les rôles culturels des plantes à "
                            "Madagascar ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Lisez ce court témoignage sur l'usage de la canne à sucre pendant le famorana. "
                           "Quel est le rôle de cette plante ici ?",
         "R.A. : un rôle symbolique et festif, pas seulement alimentaire.", "Analyse documentaire", "Texte ou témoignage", ""),
        ("4. Analyse", "Connaissez-vous d'autres plantes utilisées lors de fêtes ou de cérémonies dans votre "
                       "communauté (riz lors du famadihana, fleurs, feuilles) ?",
         "R.A. : les élèves citent des exemples vérifiés auprès de leur propre famille.", "Enquête orale", "—", ""),
        ("5. Synthèse", "Donc, certaines plantes ont un rôle culturel : elles sont utilisées comme symboles lors "
                        "des traditions et des événements importants de la communauté (circoncision, "
                        "famadihana). Ces usages peuvent varier d'une famille ou d'une région à l'autre.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Cite un événement de ta communauté où une plante joue un rôle symbolique, "
                           "et précise lequel.",
         "Ex. 1 : réponses variées, par exemple la canne à sucre au famorana.", "Travail individuel", "Cahier", ""),
        ("III. ÉVALUATION", "Ex. 1 — Donne un exemple malgache de rôle culturel d'une plante.",
         "Ex. 1 : la canne à sucre offerte lors du famorana, par exemple.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Un rôle différent des rôles social et économique"),
        ("body", "En plus de nourrir, soigner ou décorer, certaines plantes portent une valeur symbolique forte "
                 "dans la culture malgache : elles accompagnent des moments importants de la vie familiale et "
                 "communautaire."),
        ("section", "2. La canne à sucre et le famorana"),
        ("body", "Lors de la circoncision traditionnelle (famorana), la canne à sucre (fary) est souvent offerte "
                 "et partagée : sa douceur symbolise un souhait de vie douce et heureuse pour l'enfant."),
        ("section", "3. Le riz, symbole de vie"),
        ("body", "Le riz (vary) est l'aliment central de la culture malgache. Lors du famadihana, un plat de "
                 "riz particulier, le « vary be menaka » (riz cuit avec de la graisse de zébu), est "
                 "traditionnellement préparé et partagé en famille pour célébrer la cérémonie."),
        ("image", ("scripts/t4/generated_images/u2_s6_b_riz.jpg",
                   "Le riz partagé en famille lors d'une grande cérémonie malgache.")),
        ("section", "4. D'autres exemples selon les régions"),
        ("body", "Selon les régions de Madagascar, il existe d'autres plantes utilisées lors de fêtes ou de "
                 "cérémonies (fleurs, feuilles, bois pour une construction, etc.). Ces usages varient d'une "
                 "région et d'une famille à l'autre : il vaut mieux les faire rechercher et vérifier par les "
                 "élèves auprès de leur propre famille plutôt que de les présenter comme une règle générale."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Explique en deux phrases le rôle symbolique de la canne à sucre lors du "
                                  "famorana."),
        ("Exercice 2 (5 points)", " — Cite deux événements de la vie familiale malgache où une plante joue un "
                                  "rôle symbolique."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Le rôle culturel d'une plante est le même que son rôle alimentaire.\n"
                                  "2. Le riz peut avoir un rôle symbolique dans les traditions malgaches.\n"
                                  "3. Les usages symboliques des plantes sont les mêmes partout à Madagascar.\n"
                                  "4. La canne à sucre peut être offerte lors d'une circoncision."),
        ("Exercice 4 (4 points)", " — Choisis la bonne réponse :\n"
                                  "1. Le famorana est : A. une récolte B. une circoncision traditionnelle "
                                  "C. un marché\n"
                                  "2. La canne à sucre symbolise généralement : A. la douceur de la vie B. "
                                  "la tristesse C. la richesse uniquement"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("La canne à sucre est offerte et partagée pendant le famorana ; sa douceur "
                                "symbolise le souhait d'une vie douce et heureuse pour l'enfant.", True)],
        [("Ex. 2 — ", False), ("Par exemple le famorana (canne à sucre) et le famadihana (riz « vary be "
                                "menaka » partagé).", True)],
        [("Ex. 3 — ", False),
         ("1. Faux. Le rôle culturel est symbolique, différent du simple fait de nourrir. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Faux. Les usages varient d'une région à l'autre de Madagascar. (1,5 pt)", False)],
        [("4. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("1. B", True), (" · 2. ", False), ("A", True)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 7 (globale 14) - Les rôles environnementaux des plantes
# ---------------------------------------------------------------------------
S7 = {
    "num": 7, "title": "Les rôles environnementaux des plantes",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "déterminer les rôles des plantes pour l'environnement.",
    "support": "photos d'un terrain boisé et d'un terrain érodé sans végétation, tableau noir.",
    "cover_image": ("scripts/t4/generated_images/u2_s7_a_colline.jpg",
                     "Colline boisée contre colline érodée : l'impact de la disparition des plantes."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite un rôle culturel d'une plante à Madagascar.",
         "R.A. : la canne à sucre lors du famorana, par exemple.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Comparez ces deux photos : une colline couverte d'arbres, une colline nue "
                                 "(lavaka). Que remarquez-vous ?",
         "R.A. : la colline sans arbres est creusée, abîmée ; la colline boisée est intacte.", "Observation dirigée", "Photos", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les rôles environnementaux des plantes ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez les racines d'une plante dans un pot de terre. Que se passe-t-il si on "
                           "retire délicatement la terre autour des racines ?",
         "R.A. : la terre reste accrochée aux racines, elle ne s'effondre pas totalement.", "Observation dirigée", "Plante en pot, terre", ""),
        ("4. Analyse", "À votre avis, pourquoi certains oiseaux ou insectes vivent-ils dans les arbres et pas "
                       "sur un terrain nu ?",
         "R.A. : les arbres offrent un abri, de la nourriture et de l'ombre.", "Discussion guidée", "—", ""),
        ("5. Synthèse", "Donc, les plantes jouent un rôle environnemental essentiel : elles purifient l'air, "
                        "protègent le sol contre l'érosion grâce à leurs racines, et offrent un abri aux "
                        "animaux.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Explique pourquoi planter des arbres sur une colline peut éviter la "
                           "formation d'un lavaka.",
         "Ex. 1 : les racines retiennent la terre et limitent l'érosion par la pluie.", "Travail de groupe", "Cahier", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite deux rôles environnementaux des plantes.",
         "Ex. 1 : purification de l'air, protection du sol (ou abri pour les animaux).", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Les plantes purifient l'air"),
        ("body", "Les feuilles absorbent le dioxyde de carbone de l'air et rejettent de l'oxygène, indispensable "
                 "à la respiration de tous les êtres vivants."),
        ("section", "2. Les plantes protègent le sol"),
        ("body", "Les racines retiennent la terre et limitent son entraînement par la pluie et le vent. Sur les "
                 "Hautes Terres malgaches, la disparition de la végétation est l'une des causes de la formation "
                 "des lavaka, ces grandes entailles érosives creusées dans les collines."),
        ("section", "3. Les plantes offrent un abri"),
        ("body", "Les arbres et les buissons abritent de nombreux animaux : oiseaux, insectes, lémuriens dans "
                 "les forêts malgaches. Sans plantes, beaucoup de ces animaux n'auraient ni nourriture ni refuge."),
        ("image", ("scripts/t4/generated_images/u2_s7_b_racines.jpg",
                   "Les racines protègent le sol ; le feuillage abrite les animaux.")),
        ("section", "4. Une responsabilité pour chacun"),
        ("body", "Parce que les plantes rendent tous ces services, il est important de ne pas couper les arbres "
                 "sans raison, de reboiser les zones dégradées et de protéger les espaces boisés autour du "
                 "village."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Cite les trois rôles environnementaux des plantes vus en classe."),
        ("Exercice 2 (5 points)", " — Explique en une phrase le lien entre la disparition des plantes sur une "
                                  "colline et la formation d'un lavaka."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Les plantes rejettent du dioxyde de carbone et absorbent de l'oxygène.\n"
                                  "2. Les racines aident à retenir la terre.\n"
                                  "3. Les animaux n'ont pas besoin des plantes pour s'abriter.\n"
                                  "4. Couper tous les arbres d'une colline peut favoriser l'érosion."),
        ("Exercice 4 (4 points)", " — Choisis la bonne réponse :\n"
                                  "1. Les plantes absorbent surtout : A. l'oxygène B. le dioxyde de carbone "
                                  "C. l'azote\n"
                                  "2. Le lavaka est une conséquence : A. de l'excès de plantes B. de "
                                  "l'érosion liée au manque de végétation C. de la pluie uniquement\n"
                                  "3. Un rôle environnemental des plantes est : A. décorer une maison B. "
                                  "abriter des animaux C. être vendue au marché\n"
                                  "4. Reboiser une colline permet surtout de : A. augmenter l'érosion B. "
                                  "protéger le sol C. supprimer les animaux"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("Purification de l'air, protection du sol, abri pour les animaux.", True)],
        [("Ex. 2 — ", False), ("Sans racines pour retenir la terre, la pluie entraîne le sol et creuse peu à "
                                "peu un lavaka.", True)],
        [("Ex. 3 — ", False),
         ("1. Faux. C'est l'inverse : elles absorbent le dioxyde de carbone et rejettent de l'oxygène. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Faux. De nombreux animaux dépendent des plantes pour s'abriter. (1,5 pt)", False)],
        [("4. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("1. B", True), (" · 2. ", False), ("B", True), (" · 3. ", False),
         ("B", True), (" · 4. ", False), ("B", True)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 8 (globale 15) - Enquête sur les plantes de ma communauté
# ---------------------------------------------------------------------------
S8 = {
    "num": 8, "title": "Enquête sur les plantes de ma communauté",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "élaborer une fiche de synthèse présentant les différents rôles des plantes de sa communauté.",
    "support": "fiche d'enquête préparée à l'avance, résultats d'une enquête auprès de la famille ou de la communauté.",
    "cover_image": ("scripts/t4/generated_images/u2_s8_a_enquete.jpg",
                     "Interroger sa famille : une source précieuse de connaissances sur les plantes locales."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite les trois rôles environnementaux des plantes.",
         "R.A. : purification de l'air, protection du sol, abri pour les animaux.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "La semaine dernière, vous avez interrogé un membre de votre famille sur une "
                                 "plante utile près de chez vous. Qu'avez-vous appris ?",
         "R.A. : les élèves partagent une information recueillie.", "Mise en commun", "Fiches d'enquête remplies", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre à : « Faire la synthèse d'une enquête sur les "
                            "plantes de ma communauté ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Relisez votre fiche d'enquête : quel rôle (social, économique, culturel, "
                           "environnemental) correspond à la plante que vous avez étudiée ?",
         "R.A. : chaque élève identifie le ou les rôles de sa plante.", "Analyse individuelle", "Fiche d'enquête", ""),
        ("4. Analyse", "En petits groupes, comparez vos plantes : combien de rôles différents avez-vous "
                       "trouvés au total dans le groupe ?",
         "R.A. : les groupes recensent la diversité des rôles trouvés.", "Travail de groupe", "Fiches d'enquête", ""),
        ("5. Synthèse", "Donc, une même communauté peut utiliser de nombreuses plantes différentes, pour des "
                        "rôles sociaux, économiques, culturels et environnementaux, souvent combinés.",
         "Les élèves écoutent et notent.", "Bilan collectif", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Rédigez une courte fiche de synthèse (4 à 5 phrases) sur la plante "
                           "étudiée : nom, famille, rôle(s), utilité pour la communauté.",
         "Ex. 1 : fiche complète et cohérente avec l'enquête menée.", "Travail individuel", "Cahier", ""),
        ("III. ÉVALUATION", "Ex. 1 — Présentez votre fiche de synthèse à la classe.",
         "Ex. 1 : présentation orale claire des informations recueillies.", "Exposé oral", "Fiche rédigée", ""),
    ],
    "lecon": [
        ("section", "1. Pourquoi enquêter dans sa communauté ?"),
        ("body", "Interroger les membres de sa famille ou de son village permet de découvrir des usages de "
                 "plantes que l'on ne trouve pas forcément dans un livre : des connaissances transmises depuis "
                 "des générations."),
        ("section", "2. Comment construire une fiche de synthèse"),
        ("body", "Une bonne fiche de synthèse répond à quatre questions simples : Quel est le nom de la "
                 "plante ? À quelle famille appartient-elle (à fleurs ou sans fleurs, mono- ou dicotylédone) ? "
                 "Quel(s) rôle(s) joue-t-elle (social, économique, culturel, environnemental) ? Pourquoi est-elle "
                 "utile pour ma communauté ?"),
        ("section", "3. Un exemple de fiche"),
        ("body", "« Le ravintsara est un arbre dicotylédone. Il joue un rôle médicinal (ses feuilles servent à "
                 "préparer une tisane contre le rhume) et un rôle économique (son huile essentielle est vendue "
                 "et exportée). Il est cultivé dans plusieurs régions de Madagascar et fait vivre des familles "
                 "grâce à sa récolte. »"),
        ("image", ("scripts/t4/generated_images/u2_s8_b_fiche.jpg",
                   "Exemple de fiche de synthèse illustrée : le ravintsara.")),
        ("section", "4. Ce que cette enquête nous apprend"),
        ("body", "Une même plante peut cumuler plusieurs rôles à la fois. Cette diversité montre à quel point "
                 "les plantes sont précieuses pour la vie quotidienne d'une communauté malgache, et pourquoi il "
                 "est important de les préserver."),
    ],
    "exercices": [
        ("Exercice 1 (6 points)", " — À partir de ton enquête, cite : 1. le nom de la plante étudiée "
                                  "(2 pts) · 2. sa famille si elle a des fleurs (2 pts) · 3. son ou ses "
                                  "rôle(s) (2 pts)."),
        ("Exercice 2 (6 points)", " — Rédige trois phrases expliquant pourquoi cette plante est utile pour ta "
                                  "communauté."),
        ("Exercice 3 (4 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Une plante ne peut jouer qu'un seul rôle à la fois.\n"
                                  "2. Enquêter auprès de sa famille peut apporter des informations utiles sur "
                                  "les plantes locales."),
        ("Exercice 4 (4 points)", " — Choisis la bonne réponse :\n"
                                  "1. Une bonne fiche de synthèse doit répondre à : A. une seule question "
                                  "B. quatre questions clés C. aucune question précise\n"
                                  "2. Le ravintsara illustre bien : A. un rôle unique B. le cumul de "
                                  "plusieurs rôles C. l'absence de rôle"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 et 2 — ", False), ("Réponses variées selon l'enquête menée par chaque élève ; le professeur "
                                     "évalue la cohérence entre le nom, la famille, le(s) rôle(s) cité(s) et la "
                                     "justification apportée (12 pts).", True)],
        [("Ex. 3 — ", False),
         ("1. Faux. Une plante peut cumuler plusieurs rôles (exemple : le ravintsara, médicinal et "
          "économique). (2 pts)", False)],
        [("2. Vrai. (2 pts)", False)],
        [("Ex. 4 — ", False), ("1. B", True), (" · 2. ", False), ("B", True)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 9 (globale 16) - Revision Unite II
# ---------------------------------------------------------------------------
S9 = {
    "num": 9, "title": "Révision — Unité II : Organisation des êtres vivants", "kind": "revision",
    "cover_image": ("scripts/t4/generated_images/u2_bilan_r1.jpg",
                     "Bilan de l'Unité II : organisation et rôles des êtres vivants."),
    "theme": THEME, "ras_theme": "Classifier des plantes ; rôles sociaux, économiques, culturels et "
                                  "environnementaux des plantes",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "traiter un sujet complet portant sur les séances 8 à 15, puis identifier ses points faibles.",
    "support": "sujet recopié au tableau ou polycopié, cahier de brouillon.",
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Sans ouvrir votre cahier : cite un organe de l'appareil végétatif et un rôle "
                        "environnemental des plantes.",
         "R.A. : la racine (appareil végétatif) ; protection du sol (rôle environnemental).", "Questionnement oral", "—", ""),
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
    "sujet_title": "Sujet d'entraînement — Unité II (Organisation des êtres vivants) — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Associe chaque organe à son rôle (2 points)\n"
         "1. racine · 2. tige · 3. feuille · 4. fleur\n"
         "a. capte la lumière · b. donne les graines · c. transporte la sève · d. absorbe l'eau"),
        ("", "B. Vrai ou faux — justifie en une phrase (2 points)\n"
              "1. Une monocotylédone a deux cotylédons.\n"
              "2. Les champignons sont des plantes sans fleurs qui ne fabriquent pas leur nourriture à partir "
              "de la lumière."),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "Un village compte 40 familles. Une enquête montre que 25 familles cultivent des plantes médicinales, "
         "10 familles cultivent des plantes ornementales, et 5 familles ne cultivent aucune plante en plus des "
         "cultures alimentaires.\n"
         "1. Quel pourcentage de familles cultive des plantes médicinales ? (2 pts)\n"
         "2. Quel pourcentage de familles cultive des plantes ornementales ? (2 pts)\n"
         "3. Combien de familles cultivent une plante (médicinale ou ornementale) en plus de leurs cultures "
         "alimentaires ? (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Lors du famorana d'un village, la famille distribue de la canne à sucre aux invités, comme le veut "
         "la tradition.\n"
         "1. Quel rôle de la plante est illustré ici ? (2 pts)\n"
         "2. Cite un autre exemple malgache du même type de rôle. (2 pts)\n"
         "3. En quoi ce rôle est-il différent du rôle alimentaire de la canne à sucre ? (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Une colline près d'un village a perdu tous ses arbres à cause de la coupe de bois. Un lavaka commence "
         "à se former.\n"
         "Explique en deux arguments pourquoi replanter des arbres pourrait limiter ce phénomène."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1 → d · 2 → c · 3 → a · 4 → b (0,5 pt par association)", False)],
        [("B. (1 pt par item : 0,5 pt pour vrai/faux, 0,5 pt pour la justification)", False)],
        [("1. Faux. C'est une dicotylédone qui a deux cotylédons ; une monocotylédone n'en a qu'un.", False)],
        [("2. Vrai.", False)],
        [("Exercice 2 (6 pts)", True)],
        [("1. 25 ÷ 40 × 100 = 62,5 % des familles. (2 pts)", False)],
        [("2. 10 ÷ 40 × 100 = 25 % des familles. (2 pts)", False)],
        [("3. 40 − 5 = 35 familles. (2 pts)", False)],
        [("Renvoi : séances 12, 13.", True)],
        [("Exercice 3 (6 pts)", True)],
        [("1. Le rôle culturel (symbolique) de la plante. (2 pts)", False)],
        [("2. Par exemple le riz (« vary be menaka ») partagé lors d'un famadihana. (2 pts)", False)],
        [("3. Le rôle alimentaire consiste à nourrir, alors que le rôle culturel est symbolique et lié à une "
          "tradition précise. (2 pts)", False)],
        [("Renvoi : séance 13.", True)],
        [("Exercice 4 (4 pts)", True)],
        [("Argument 1 — les racines des arbres retiennent la terre et limitent son entraînement par la pluie. "
          "(2 pts)", False)],
        [("Argument 2 — sans végétation, l'eau de pluie ruisselle plus fort et creuse plus facilement le sol, "
          "aggravant l'érosion. (2 pts)", False)],
        [("Renvoi : séance 14.", True)],
        [("Repères de score : 16-20 acquis · 11-15 à consolider · 6-10 fragile · 0-5 reprendre les séances 8 à "
          "15.", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 10 (globale 17) - Examen Unite II
# ---------------------------------------------------------------------------
S10 = {
    "num": 10, "title": "Sujet d'examen ST T4 — Unité II : Organisation des êtres vivants", "kind": "exam",
    "cover_image": ("scripts/t4/generated_images/u2_bilan_e1.jpg",
                     "Sujet d'examen, Unité II : Organisation des êtres vivants."),
    "theme": THEME, "ras_theme": "Classifier des plantes ; rôles sociaux, économiques, culturels et "
                                  "environnementaux des plantes",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "évaluer la maîtrise des notions des séances 8 à 15 — organisation d'une plante, classification, "
                "rôles sociaux, économiques, culturels et environnementaux.",
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
    "sujet_title": "SUJET D'EXAMEN — Unité II : Organisation des êtres vivants — Durée : ____________ — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Complète avec le mot exact (2 points)\n"
         "1. L'organe qui absorbe l'eau du sol est la ……………… .\n"
         "2. Une plante avec un seul cotylédon est une ……………… .\n"
         "3. Le riz, le maïs et la canne à sucre appartiennent à la famille des ……………… .\n"
         "4. Les mousses, fougères, algues et champignons sont des plantes ……………… ."),
        ("", "B. QCM — une seule réponse exacte (2 points)\n"
              "1. L'appareil reproducteur d'une plante à fleurs comprend : A. la racine B. la fleur, le fruit et "
              "la graine C. la tige\n"
              "2. Le champignon ne fabrique pas sa nourriture à partir de la lumière car il n'est pas : A. "
              "vivant B. vert C. comestible\n"
              "3. Les racines d'un arbre servent notamment à : A. attirer les animaux B. retenir la terre C. "
              "produire des fleurs\n"
              "4. La canne à sucre offerte lors d'un famorana illustre un rôle : A. environnemental B. culturel "
              "C. médicinal"),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "Un jardin scolaire de 40 plants compte 25 plants de riz, 10 plants de haricots et 5 plants de rosiers.\n"
         "1. Quel pourcentage de plants sont des monocotylédones (riz) ? (2 pts)\n"
         "2. Quel pourcentage de plants sont des dicotylédones (haricots, rosiers) ? (2 pts)\n"
         "3. Si on ajoute 10 plants de maïs (monocotylédone), quel est le nouveau pourcentage de "
         "monocotylédones dans le jardin ? (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Un village a vu la moitié de sa colline se transformer en lavaka en dix ans, après la coupe massive "
         "des arbres pour le bois de chauffe. Les habitants constatent aussi la disparition de plusieurs "
         "espèces d'oiseaux qui nichaient dans ces arbres.\n"
         "1. Quel rôle des plantes a été perdu concernant le sol ? (1,5 pt)\n"
         "2. Quel rôle des plantes a été perdu concernant les oiseaux ? (1,5 pt)\n"
         "3. Propose une solution pour limiter ce phénomène à l'avenir. (2 pts)\n"
         "4. Pourquoi est-il important d'agir rapidement dans ce genre de situation ? (1 pt)"),
        ("Exercice 4 — Situation (4 points)",
         "Un camarade affirme : « Les plantes, ça sert juste à manger. » Réponds-lui en donnant trois autres "
         "rôles des plantes, avec un exemple malgache pour chacun."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. racine · 2. monocotylédone · 3. monocotylédones · 4. sans fleurs (0,5 pt par réponse)", False)],
        [("B. 1. B · 2. B · 3. B · 4. B (0,5 pt par item)", False)],
        [("Renvoi : séances 8, 9, 10, 13.", True)],
        [("Exercice 2 (6 pts)", True)],
        [("1. 25 ÷ 40 × 100 = 62,5 % de monocotylédones. (2 pts)", False)],
        [("2. (10 + 5) ÷ 40 × 100 = 37,5 % de dicotylédones. (2 pts)", False)],
        [("3. Nouveau total = 50 plants ; monocotylédones = 25 + 10 = 35 ; 35 ÷ 50 × 100 = 70 %. (2 pts)", False)],
        [("Renvoi : séances 10, 11.", True)],
        [("Exercice 3 (6 pts)", True)],
        [("1. Le rôle de protection du sol contre l'érosion. (1,5 pt)", False)],
        [("2. Le rôle d'abri (les oiseaux ne trouvent plus de nid). (1,5 pt)", False)],
        [("3. Par exemple reboiser la colline avec des espèces adaptées et limiter la coupe de bois. (2 pts)", False)],
        [("4. Parce que l'érosion s'aggrave avec le temps et devient plus difficile et coûteuse à corriger. "
          "(1 pt)", False)],
        [("Renvoi : séance 14.", True)],
        [("Exercice 4 (4 pts)", True)],
        [("Trois rôles parmi : médicinal (ex. ravintsara), ornemental (ex. orchidée), culturel (ex. canne à "
          "sucre au famorana), environnemental (ex. arbres qui protègent le sol). (1 pt par rôle correctement "
          "illustré, dans la limite de 3 pts ; 1 pt pour la clarté de la réponse).", False)],
        [("Renvoi : séances 12, 13, 14.", True)],
        [("TOTAL : 20 points", True)],
    ],
}
