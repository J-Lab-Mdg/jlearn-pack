# -*- coding: utf-8 -*-
"""Content for UNITE VI - Sante et bien-etre (seances 42-47).
Grounded in PE T4 (RAS: Determiner les moyens pour prendre soin des organes
sensoriels).
"""

THEME = "Santé et bien-être"
RAS_THEME = "Déterminer les moyens pour prendre soin des organes sensoriels"
VALEURS = "responsabilité, respect de la vie"

# ---------------------------------------------------------------------------
# SEANCE 1 (globale 42) - L'oeil et la vue
# ---------------------------------------------------------------------------
S1 = {
    "num": 1, "title": "L'œil et la vue",
    "theme": THEME, "ras_theme": RAS_THEME, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "décrire les parties externes de l'œil et expliquer son rôle dans la vue.",
    "support": "miroir de poche, image de l'œil, bandeau ou foulard pour l'expérience.",
    "cover_image": ("scripts/t4/generated_images/u6_s1_a_regard.jpg",
                     "Un enfant observe attentivement le monde qui l'entoure grâce à ses yeux."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite un organe de ton corps que tu utilises pour observer le monde autour de "
                        "toi.",
         "R.A. : les yeux.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Fermons les yeux un instant, puis rouvrons-les. Que remarquez-vous ?",
         "R.A. : quand on ferme les yeux, on ne voit plus rien ; en les rouvrant, on revoit tout.",
         "Expérimentation dirigée", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « L'œil et la vue ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Avec un miroir de poche, observez votre œil : que voyez-vous autour et au "
                            "centre ?",
         "R.A. : les paupières, les cils, une partie blanche, une partie colorée et un petit point noir "
         "au centre.", "Observation dirigée", "Miroir de poche", ""),
        ("4. Analyse", "À votre avis, à quoi servent les paupières et les cils, et pourquoi le petit "
                        "point noir au centre change-t-il de taille selon la lumière ?",
         "R.A. : les paupières et les cils protègent l'œil de la poussière ; le point noir (la pupille) "
         "s'agrandit ou se rétrécit pour laisser entrer plus ou moins de lumière.", "Étude de cas",
         "Image de l'œil", ""),
        ("5. Synthèse", "Donc, l'œil est composé du globe oculaire, protégé par les paupières et les "
                        "cils, de l'iris (partie colorée) et de la pupille (le point noir qui règle la "
                        "quantité de lumière). L'œil permet de voir : c'est le sens de la vue.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Avec un bandeau sur les yeux, essaie de reconnaître un objet "
                            "seulement au toucher, puis explique ce que cette expérience montre sur "
                            "l'importance de la vue.",
         "Ex. 1 : sans les yeux, il est plus difficile de reconnaître les objets ; la vue nous donne "
         "beaucoup d'informations sur le monde.", "Travail en binôme", "Bandeau, objets", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite trois parties externes de l'œil et leur rôle.",
         "Ex. 1 : les paupières et les cils protègent ; la pupille règle la lumière.", "Évaluation écrite",
         "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Les parties externes de l'œil"),
        ("sub", "a. Les paupières et les cils"),
        ("body", "Les paupières s'ouvrent et se ferment pour protéger l'œil de la poussière, de la "
                 "lumière trop forte et des chocs. Les cils, sur le bord des paupières, arrêtent aussi la "
                 "poussière."),
        ("sub", "b. Le globe oculaire"),
        ("body", "C'est la boule qui forme l'œil. On y distingue une partie blanche (le blanc de l'œil), "
                 "une partie colorée appelée l'iris (bleu, marron, vert…) et, au centre, un petit point "
                 "noir appelé la pupille."),
        ("image", ("scripts/t4/generated_images/u6_s1_b_parties.jpg",
                   "Les parties externes de l'œil : paupières, cils, iris et pupille.")),
        ("sub", "c. Les sourcils"),
        ("body", "Situés au-dessus des yeux, les sourcils empêchent la sueur du front de couler dans les "
                 "yeux."),
        ("section", "2. Le rôle de l'œil : la vue"),
        ("body", "L'œil est l'organe de la vue. Il capte la lumière qui vient des objets qui nous "
                 "entourent et permet à notre cerveau de reconnaître leur forme, leur couleur, leur "
                 "distance et leur mouvement. La pupille s'élargit dans le noir pour laisser entrer plus "
                 "de lumière, et se rétrécit en pleine lumière pour protéger l'œil."),
        ("image", ("scripts/t4/generated_images/u6_s1_c_lumiere.jpg",
                   "La pupille laisse entrer la lumière qui permet à l'œil de voir les objets autour de nous.")),
        ("section", "3. Pourquoi prendre soin de sa vue ?"),
        ("body", "La vue est précieuse : elle nous permet de lire, de nous déplacer en sécurité, de "
                 "reconnaître les personnes et de découvrir le monde. C'est pourquoi il faut en prendre "
                 "grand soin, comme nous le verrons à la séance sur l'hygiène des organes sensoriels."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Cite trois parties externes de l'œil."),
        ("Exercice 2 (5 points)", " — Quel est le rôle de la pupille ?"),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                   "1. Les paupières et les cils protègent l'œil de la poussière.\n"
                                   "2. La pupille reste toujours de la même taille, quelle que soit la "
                                   "lumière.\n"
                                   "3. L'œil est l'organe de la vue."),
        ("Exercice 4 (4 points)", " — Explique en une phrase pourquoi il est plus difficile de reconnaître "
                                   "un objet seulement au toucher, sans les yeux."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("paupières, cils, globe oculaire (iris, pupille), sourcils — trois au "
                                "choix. (5 pts)", False)],
        [("Ex. 2 — ", False), ("elle règle la quantité de lumière qui entre dans l'œil (s'élargit dans le "
                                "noir, se rétrécit en pleine lumière). (5 pts)", False)],
        [("Ex. 3 — ", False), ("1. Vrai. (2 pts)", False)],
        [("2. Faux, elle change de taille selon la lumière. (2 pts)", False)],
        [("3. Vrai. (2 pts)", False)],
        [("Ex. 4 — ", False), ("parce que la vue donne beaucoup d'informations (forme, couleur, "
                                "détails) que le toucher seul ne peut pas donner aussi précisément. "
                                "(4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 2 (globale 43) - L'oreille et l'ouie, le nez et l'odorat
# ---------------------------------------------------------------------------
S2 = {
    "num": 2, "title": "L'oreille et l'ouïe, le nez et l'odorat",
    "theme": THEME, "ras_theme": RAS_THEME, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "décrire l'oreille et le nez et expliquer leur rôle dans l'ouïe et l'odorat.",
    "support": "objets sonores (cloche, sifflet), objets odorants (citron, savon, fleur), bandeau.",
    "cover_image": ("scripts/t4/generated_images/u6_s2_a_ecoute.jpg",
                     "Un enfant ferme les yeux pour mieux écouter les sons et sentir les odeurs autour de lui."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Quel organe utilises-tu pour voir, et à quoi sert la pupille ?",
         "R.A. : l'œil ; la pupille règle la quantité de lumière qui entre.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Les yeux fermés, écoutons un son (cloche, sifflet). Pouvez-vous dire ce "
                                 "que c'est sans voir ?",
         "R.A. : oui, on reconnaît le son sans le voir.", "Expérimentation dirigée", "Cloche, sifflet", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « L'oreille et l'ouïe, le nez et "
                             "l'odorat ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez un camarade de profil : que voit-on de son oreille ? Puis sentez un "
                            "citron et un savon, les yeux fermés : que remarquez-vous ?",
         "R.A. : on voit le pavillon de l'oreille et un petit trou (le conduit auditif) ; on reconnaît "
         "chaque odeur grâce au nez.", "Observation dirigée", "Citron, savon", ""),
        ("4. Analyse", "Comment l'oreille permet-elle d'entendre, et comment le nez permet-il de sentir "
                        "les odeurs ?",
         "R.A. : le pavillon capte les sons et les dirige vers le conduit auditif jusqu'au tympan ; le "
         "nez capte les odeurs qui flottent dans l'air grâce aux narines.", "Étude de cas",
         "Images de l'oreille et du nez", ""),
        ("5. Synthèse", "Donc, l'oreille est composée du pavillon (partie visible), du conduit auditif et "
                        "du tympan ; elle permet l'ouïe (entendre les sons). Le nez, avec ses deux "
                        "narines, permet l'odorat (sentir les odeurs) et sert aussi à respirer.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Les yeux bandés, reconnais trois odeurs différentes (savon, citron, "
                            "fleur) et nomme-les.",
         "Ex. 1 : les élèves identifient chaque odeur présentée.", "Travail en binôme",
         "Objets odorants, bandeau", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite le rôle de l'oreille et celui du nez.",
         "Ex. 1 : l'oreille permet d'entendre (ouïe) ; le nez permet de sentir les odeurs (odorat) et de "
         "respirer.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. L'oreille et l'ouïe"),
        ("sub", "a. Les parties de l'oreille"),
        ("body", "On distingue le pavillon (la partie visible sur le côté de la tête), le conduit auditif "
                 "(le petit tunnel qui va vers l'intérieur) et, plus profondément, le tympan, une fine "
                 "membrane qui vibre quand un son arrive."),
        ("sub", "b. Le rôle de l'oreille"),
        ("body", "L'oreille est l'organe de l'ouïe : elle capte les sons de notre environnement (voix, "
                 "musique, bruits) et permet aussi de garder l'équilibre du corps."),
        ("image", ("scripts/t4/generated_images/u6_s2_b_oreille.jpg",
                   "Les parties de l'oreille : pavillon, conduit auditif et tympan.")),
        ("section", "2. Le nez et l'odorat"),
        ("sub", "a. Les parties du nez"),
        ("body", "Le nez est percé de deux narines, séparées par une petite cloison. À l'intérieur, une "
                 "muqueuse sensible détecte les odeurs présentes dans l'air."),
        ("sub", "b. Le rôle du nez"),
        ("body", "Le nez est l'organe de l'odorat : il permet de sentir les odeurs (une fleur, un plat "
                 "cuisiné, une fumée). Il sert aussi à respirer l'air et à le réchauffer avant qu'il "
                 "n'arrive aux poumons."),
        ("image", ("scripts/t4/generated_images/u6_s2_c_nez.jpg",
                   "Le nez permet de sentir les odeurs et de respirer l'air.")),
        ("section", "3. Deux sens complémentaires"),
        ("body", "L'ouïe et l'odorat nous alertent souvent avant la vue : on entend un zébu approcher "
                 "avant de le voir, on sent une fumée avant de voir le feu. Ces deux sens nous aident donc "
                 "aussi à nous protéger des dangers."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Cite les trois parties de l'oreille vues en classe."),
        ("Exercice 2 (5 points)", " — Quel est le rôle du nez, en plus de sentir les odeurs ?"),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                   "1. Le tympan est une fine membrane qui vibre quand un son arrive.\n"
                                   "2. Le nez ne sert qu'à sentir les odeurs, jamais à respirer.\n"
                                   "3. L'ouïe et l'odorat peuvent alerter d'un danger avant même de le "
                                   "voir."),
        ("Exercice 4 (4 points)", " — Donne un exemple où l'ouïe ou l'odorat t'a permis de remarquer "
                                   "quelque chose avant de le voir."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("le pavillon, le conduit auditif, le tympan. (5 pts)", False)],
        [("Ex. 2 — ", False), ("il sert aussi à respirer (et à réchauffer l'air). (5 pts)", False)],
        [("Ex. 3 — ", False), ("1. Vrai. (2 pts)", False)],
        [("2. Faux, il sert aussi à respirer. (2 pts)", False)],
        [("3. Vrai. (2 pts)", False)],
        [("Ex. 4 — ", False), ("réponse libre : par exemple entendre un zébu approcher, ou sentir une "
                                "fumée avant de voir le feu. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 3 (globale 44) - La langue et la peau
# ---------------------------------------------------------------------------
S3 = {
    "num": 3, "title": "La langue et la peau",
    "theme": THEME, "ras_theme": RAS_THEME, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "décrire la langue et la peau et expliquer leur rôle dans le goût et le toucher.",
    "support": "morceaux de sucre, de sel, de citron ; échantillons de textures (tissu doux, papier de "
               "verre, glaçon).",
    "cover_image": ("scripts/t4/generated_images/u6_s3_a_gout_toucher.jpg",
                     "Un enfant goûte un fruit et touche différentes matières pour découvrir le goût et le toucher."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Quel organe permet d'entendre, et lequel permet de sentir les odeurs ?",
         "R.A. : l'oreille (ouïe) ; le nez (odorat).", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Goûtons un peu de sucre, puis un peu de sel. Que remarquez-vous ?",
         "R.A. : le sucre est sucré, le sel est salé ; on les distingue avec la langue.",
         "Expérimentation dirigée", "Sucre, sel", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « La langue et la peau ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Touchons un tissu doux, du papier de verre rugueux et un glaçon froid. Que "
                            "ressent la peau de vos mains ?",
         "R.A. : la peau ressent le doux, le rugueux, le froid, le chaud.", "Expérimentation dirigée",
         "Tissu, papier de verre, glaçon", ""),
        ("4. Analyse", "D'après vous, quelles saveurs la langue peut-elle reconnaître, et que peut "
                        "ressentir la peau en plus du chaud et du froid ?",
         "R.A. : la langue reconnaît le sucré, le salé, l'acide, l'amer ; la peau ressent aussi la douleur "
         "et la pression (un contact appuyé).", "Étude de cas", "Cahier", ""),
        ("5. Synthèse", "Donc, la langue est couverte de petites papilles qui permettent de reconnaître "
                        "les saveurs : sucré, salé, acide, amer. C'est l'organe du goût. La peau, qui "
                        "recouvre tout le corps, est l'organe du toucher : elle ressent le chaud, le "
                        "froid, le doux, le rugueux, la pression et la douleur.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Les yeux bandés, goûte trois aliments et nomme leur saveur ; puis "
                            "touche trois objets et décris ce que ressent ta peau.",
         "Ex. 1 : les élèves identifient correctement les saveurs et les sensations tactiles.",
         "Travail en binôme", "Aliments, objets, bandeau", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite les cinq saveurs de base reconnues par la langue.",
         "Ex. 1 : sucré, salé, acide, amer, umami.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. La langue et le goût"),
        ("body", "La langue est couverte de petites papilles gustatives, réparties sur toute sa surface. "
                 "Elles permettent de reconnaître cinq saveurs principales : le sucré, le salé, l'acide, "
                 "l'amer et l'umami (le goût savoureux d'un bouillon de viande ou de poisson). La langue "
                 "est l'organe du goût."),
        ("image", ("scripts/t4/generated_images/u6_s3_b_langue.jpg",
                   "La langue et ses papilles gustatives permettent de reconnaître les saveurs.")),
        ("section", "2. La peau et le toucher"),
        ("body", "La peau recouvre tout le corps : c'est le plus grand organe du corps humain. Elle "
                 "protège l'intérieur du corps et permet de ressentir le toucher : le chaud, le froid, le "
                 "doux, le rugueux, la pression et la douleur."),
        ("image", ("scripts/t4/generated_images/u6_s3_c_peau.jpg",
                   "La peau, organe du toucher, ressent le chaud, le froid, le doux et le rugueux.")),
        ("section", "3. Deux sens qui nous protègent"),
        ("body", "Le goût et le toucher nous protègent aussi : une saveur trop amère peut signaler un "
                 "aliment gâté ou dangereux ; la douleur ressentie par la peau nous avertit d'une blessure "
                 "ou d'un objet trop chaud, pour que nous réagissions vite."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Cite les cinq saveurs de base reconnues par la langue."),
        ("Exercice 2 (5 points)", " — Cite trois sensations que la peau peut ressentir."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                   "1. La langue est l'organe du toucher.\n"
                                   "2. La peau est le plus grand organe du corps humain.\n"
                                   "3. La douleur ressentie par la peau peut nous avertir d'un danger."),
        ("Exercice 4 (4 points)", " — Explique en une phrase pourquoi il est utile que la langue "
                                   "reconnaisse un goût amer ou désagréable."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("sucré, salé, acide, amer, umami. (5 pts)", False)],
        [("Ex. 2 — ", False), ("le chaud, le froid, le doux, le rugueux, la pression, la douleur (trois "
                                "au choix). (5 pts)", False)],
        [("Ex. 3 — ", False), ("1. Faux, la langue est l'organe du goût. (2 pts)", False)],
        [("2. Vrai. (2 pts)", False)],
        [("3. Vrai. (2 pts)", False)],
        [("Ex. 4 — ", False), ("cela peut signaler un aliment gâté ou dangereux, ce qui protège la "
                                "personne. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 4 (globale 45) - Hygiene et soins des organes sensoriels
# ---------------------------------------------------------------------------
S4 = {
    "num": 4, "title": "Hygiène et soins des organes sensoriels",
    "theme": THEME, "ras_theme": RAS_THEME, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "expliquer les moyens d'hygiène et de protection des cinq organes sensoriels.",
    "support": "savon, eau propre, coton-tige (à éviter comme contre-exemple), lunettes de soleil, cahier.",
    "cover_image": ("scripts/t4/generated_images/u6_s4_a_hygiene.jpg",
                     "Des enfants prennent soin de leurs cinq sens : ils se lavent les mains et le visage."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite les cinq organes des sens vus dans cette unité.",
         "R.A. : les yeux, les oreilles, le nez, la langue, la peau.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Un camarade se frotte souvent les yeux avec des mains sales et met des "
                                 "objets pointus dans ses oreilles. Est-ce une bonne habitude ?",
         "R.A. : non, cela peut blesser ou infecter ces organes fragiles.", "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Hygiène et soins des organes "
                             "sensoriels ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observons une liste de bonnes et de mauvaises habitudes pour les cinq sens. "
                            "Classons-les.",
         "R.A. : les élèves séparent les bonnes habitudes (se laver, se protéger du soleil) des mauvaises "
         "(mettre des objets dans les oreilles, se frotter les yeux avec les mains sales).",
         "Travail de groupe", "Liste d'habitudes", ""),
        ("4. Analyse", "Pourquoi certains gestes, comme mettre un objet pointu dans l'oreille, sont-ils "
                        "dangereux ?",
         "R.A. : cela peut blesser le tympan ou l'intérieur de l'oreille, qui sont très fragiles.",
         "Étude de cas", "Cahier", ""),
        ("5. Synthèse", "Donc, chaque organe sensoriel demande une hygiène adaptée : se laver le visage et "
                        "les mains, protéger les yeux du soleil et de la poussière, ne jamais introduire "
                        "d'objet dans les oreilles ou le nez, se brosser les dents pour la bouche, et "
                        "laver la peau régulièrement. En cas de douleur ou de problème, il faut en parler "
                        "à un adulte de confiance.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Pour chaque organe sensoriel (yeux, oreilles, nez, langue/bouche, "
                            "peau), propose un geste d'hygiène adapté.",
         "Ex. 1 : réponses variables, à valider avec l'enseignant.", "Travail de groupe", "Cahier", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite deux gestes dangereux à éviter pour protéger ses organes "
                             "sensoriels.",
         "Ex. 1 : mettre un objet pointu dans l'oreille ; se frotter les yeux avec des mains sales.",
         "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Prendre soin des yeux"),
        ("body", "Ne pas se frotter les yeux avec des mains sales, se protéger du soleil trop fort "
                 "(lunettes, chapeau), éviter de lire dans l'obscurité, et consulter un adulte ou un "
                 "médecin en cas de douleur, de rougeur ou de vue floue."),
        ("section", "2. Prendre soin des oreilles"),
        ("body", "Ne jamais introduire d'objet pointu ou dur dans l'oreille (cela peut blesser le "
                 "tympan), éviter les sons trop forts pendant longtemps, et sécher doucement l'extérieur "
                 "de l'oreille après la toilette."),
        ("image", ("scripts/t4/generated_images/u6_s4_b_yeux_oreilles.jpg",
                   "Se protéger les yeux du soleil et ne jamais mettre d'objet dans l'oreille.")),
        ("section", "3. Prendre soin du nez et de la bouche"),
        ("body", "Se moucher doucement avec un mouchoir propre, ne pas introduire d'objet dans le nez, et "
                 "se brosser les dents matin et soir pour garder une bouche et une langue saines."),
        ("section", "4. Prendre soin de la peau"),
        ("body", "Se laver le corps régulièrement avec de l'eau propre et du savon, porter des vêtements "
                 "propres, et protéger la peau des coups de soleil et des blessures."),
        ("image", ("scripts/t4/generated_images/u6_s4_c_peau_bouche.jpg",
                   "Se laver la peau et se brosser les dents font partie de l'hygiène quotidienne des sens.")),
        ("section", "5. Une règle commune : parler à un adulte de confiance"),
        ("body", "Pour tous les organes sensoriels, si l'on ressent une douleur inhabituelle, une perte "
                 "de sensation ou tout autre problème, il faut toujours en parler rapidement à un adulte "
                 "de confiance (parent, enseignant, agent de santé)."),
    ],
    "exercices": [
        ("Exercice 1 (6 points)", " — Pour trois des cinq organes sensoriels, cite un geste d'hygiène "
                                   "adapté."),
        ("Exercice 2 (5 points)", " — Pourquoi ne faut-il jamais mettre d'objet pointu dans l'oreille ?"),
        ("Exercice 3 (5 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                   "1. On peut se frotter les yeux avec des mains sales sans problème.\n"
                                   "2. Il faut parler à un adulte de confiance en cas de douleur "
                                   "inhabituelle.\n"
                                   "3. Se laver la peau régulièrement fait partie de l'hygiène des sens."),
        ("Exercice 4 (4 points)", " — Cite un signe qui doit t'amener à parler à un adulte de confiance "
                                   "au sujet de tes organes sensoriels."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("par exemple : yeux → se protéger du soleil ; oreilles → ne rien "
                                "introduire dedans ; bouche → se brosser les dents (2 pts chacun).", False)],
        [("Ex. 2 — ", False), ("parce que cela peut blesser le tympan ou l'intérieur de l'oreille, très "
                                "fragiles. (5 pts)", False)],
        [("Ex. 3 — ", False), ("1. Faux, cela peut irriter ou infecter les yeux. (1,5 pt)", False)],
        [("2. Vrai. (2 pts)", False)],
        [("3. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("réponse libre : par exemple une douleur, une perte de sensation, une "
                                "rougeur inhabituelle. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 5 (globale 46) - Revision Unite VI
# ---------------------------------------------------------------------------
S5 = {
    "num": 5, "title": "Révision — Unité VI : Santé et bien-être", "kind": "revision",
    "theme": THEME, "ras_theme": "L'œil et la vue ; l'oreille et l'ouïe ; le nez et l'odorat ; la langue et "
                                  "le goût ; la peau et le toucher ; hygiène des organes sensoriels",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "traiter un sujet complet portant sur les séances 42 à 45, puis identifier ses points "
                "faibles.",
    "support": "sujet recopié au tableau ou polycopié, cahier de brouillon.",
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Sans ouvrir votre cahier : cite deux des cinq organes sensoriels.",
         "R.A. : les yeux et les oreilles, par exemple.", "Questionnement oral", "—", ""),
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
    "sujet_title": "Sujet d'entraînement — Unité VI (Santé et bien-être) — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Associe chaque organe à son sens (2 points)\n"
         "1. l'œil · 2. l'oreille · 3. le nez · 4. la langue\n"
         "a. l'odorat · b. le goût · c. la vue · d. l'ouïe"),
        ("", "B. Vrai ou faux — justifie en une phrase (2 points)\n"
              "1. La peau est le plus grand organe du corps humain.\n"
              "2. On peut mettre un objet pointu dans l'oreille sans danger."),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "Dans une classe de 40 élèves, un contrôle de la vue montre que 6 élèves portent déjà des "
         "lunettes et que 4 autres élèves ont une petite baisse de vue à surveiller.\n"
         "1. Quel pourcentage des élèves porte déjà des lunettes ? (2 pts)\n"
         "2. Quel pourcentage des élèves a une vue à surveiller (lunettes + baisse de vue) ? (2 pts)\n"
         "3. Combien d'élèves ont une vue jugée normale, sans problème signalé ? (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Un élève met souvent des bâtonnets dans ses oreilles pour les « nettoyer » et se plaint parfois "
         "de douleurs.\n"
         "1. Pourquoi ce geste est-il dangereux ? (2 pts)\n"
         "2. Que devrait faire cet élève à la place ? (2 pts)\n"
         "3. Que doit-il faire s'il continue à ressentir des douleurs ? (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Explique, en deux phrases, comment l'ouïe et l'odorat peuvent t'aider à te protéger d'un danger "
         "avant même de le voir."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1 → c · 2 → d · 3 → a · 4 → b (0,5 pt par association)", False)],
        [("B. (1 pt par item : 0,5 pt pour vrai/faux, 0,5 pt pour la justification)", False)],
        [("1. Vrai.", False)],
        [("2. Faux. Cela peut blesser le tympan ou l'intérieur de l'oreille.", False)],
        [("Renvoi : séances 42, 43, 44.", True)],
        [("Exercice 2 (6 pts)", True)],
        [("1. 6 ÷ 40 × 100 = 15 % des élèves. (2 pts)", False)],
        [("2. (6 + 4) ÷ 40 × 100 = 25 % des élèves. (2 pts)", False)],
        [("3. 40 − 10 = 30 élèves ont une vue jugée normale. (2 pts)", False)],
        [("Renvoi : séances 42, 45.", True)],
        [("Exercice 3 (6 pts)", True)],
        [("1. Parce que cela peut blesser le tympan ou l'intérieur de l'oreille, qui sont très fragiles. "
          "(2 pts)", False)],
        [("2. Nettoyer seulement l'extérieur de l'oreille avec un linge doux, sans rien introduire "
          "dedans. (2 pts)", False)],
        [("3. En parler à un adulte de confiance, qui pourra l'emmener consulter un agent de santé. "
          "(2 pts)", False)],
        [("Renvoi : séances 43, 45.", True)],
        [("Exercice 4 (4 pts)", True)],
        [("Réponse libre : par exemple, entendre un animal ou un véhicule approcher avant de le voir, ou "
          "sentir une odeur de fumée avant de voir le feu, ce qui permet de réagir plus tôt. (4 pts)",
          False)],
        [("Renvoi : séance 43.", True)],
        [("Repères de score : 16-20 acquis · 11-15 à consolider · 6-10 fragile · 0-5 reprendre les "
          "séances 42 à 45.", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 6 (globale 47) - Examen Unite VI
# ---------------------------------------------------------------------------
S6 = {
    "num": 6, "title": "Sujet d'examen ST T4 — Unité VI : Santé et bien-être", "kind": "exam",
    "theme": THEME, "ras_theme": "L'œil et la vue ; l'oreille et l'ouïe ; le nez et l'odorat ; la langue et "
                                  "le goût ; la peau et le toucher ; hygiène des organes sensoriels",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "évaluer la maîtrise des notions des séances 42 à 45 — les cinq organes sensoriels, leurs "
                "rôles et leur hygiène.",
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
         "1. L'œil est l'organe de la ……………… .\n"
         "2. Le petit point noir au centre de l'œil qui règle la lumière s'appelle la ……………… .\n"
         "3. La fine membrane de l'oreille qui vibre au passage d'un son s'appelle le ……………… .\n"
         "4. La langue permet de reconnaître le sucré, le salé, l'acide et l'……………… ."),
        ("", "B. QCM — une seule réponse exacte (2 points)\n"
              "1. L'organe du toucher est : A. la langue B. la peau C. le nez\n"
              "2. Il ne faut jamais introduire d'objet pointu dans : A. l'œil B. l'oreille C. les deux\n"
              "3. Le nez sert à sentir les odeurs et aussi à : A. voir B. respirer C. entendre\n"
              "4. En cas de douleur inhabituelle à un organe sensoriel, il faut : A. ne rien dire "
              "B. en parler à un adulte de confiance C. attendre sans agir"),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "Dans une classe de 36 élèves, une visite médicale révèle que 9 élèves ont un petit problème "
         "auditif (audition) et que, parmi eux, 3 élèves ont aussi un problème de vue.\n"
         "1. Quel pourcentage des élèves a un problème auditif ? (2 pts)\n"
         "2. Combien d'élèves ont un problème auditif mais pas de problème de vue ? (2 pts)\n"
         "3. Quel pourcentage des élèves n'a aucun problème auditif signalé ? (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Une fillette reste longtemps au soleil sans protection pour les yeux, puis se plaint que la "
         "lumière la gêne beaucoup et qu'elle voit trouble.\n"
         "1. Quel organe sensoriel est concerné ? (1,5 pt)\n"
         "2. Quel geste d'hygiène aurait pu éviter ce problème ? (1,5 pt)\n"
         "3. Que doit-elle faire maintenant que le problème est apparu ? (2 pts)\n"
         "4. Pourquoi est-il important de protéger cet organe du soleil ? (1 pt)"),
        ("Exercice 4 — Situation (4 points)",
         "Un camarade affirme : « Les cinq sens servent seulement à profiter du monde, pas à se "
         "protéger. » Réponds-lui en donnant deux exemples où un sens nous protège d'un danger."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. vue · 2. pupille · 3. tympan · 4. amer (0,5 pt par réponse)", False)],
        [("B. 1. B · 2. C · 3. B · 4. B (0,5 pt par item)", False)],
        [("Renvoi : séances 42, 43, 44, 45.", True)],
        [("Exercice 2 (6 pts)", True)],
        [("1. 9 ÷ 36 × 100 = 25 % des élèves. (2 pts)", False)],
        [("2. 9 − 3 = 6 élèves. (2 pts)", False)],
        [("3. (36 − 9) ÷ 36 × 100 = 75 % des élèves. (2 pts)", False)],
        [("Renvoi : séance 42, 43.", True)],
        [("Exercice 3 (6 pts)", True)],
        [("1. L'œil (la vue). (1,5 pt)", False)],
        [("2. Se protéger du soleil avec des lunettes de soleil ou un chapeau. (1,5 pt)", False)],
        [("3. En parler à un adulte de confiance et consulter un agent de santé si nécessaire. (2 pts)",
          False)],
        [("4. Parce qu'une exposition trop forte au soleil peut abîmer la vue. (1 pt)", False)],
        [("Renvoi : séances 42, 45.", True)],
        [("Exercice 4 (4 pts)", True)],
        [("Deux exemples parmi : entendre un véhicule approcher (ouïe) ; sentir une fumée avant de voir "
          "le feu (odorat) ; ressentir une douleur qui signale une blessure (toucher) ; reconnaître un "
          "aliment gâté au goût. (2 pts par exemple valide)", False)],
        [("Renvoi : séances 42, 43, 44.", True)],
        [("TOTAL : 20 points", True)],
    ],
}
