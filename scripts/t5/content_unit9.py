# -*- coding: utf-8 -*-
"""Content for UNITE IX - Geologie (seances 1-4).
Grounded in PE T5 p.124-125 (RAS: decrire les proprietes physiques et
chimiques du sol, et les types de sol de Madagascar avec leur culture
correspondante).
Faits sur les types de sols malgaches verifies via recherche web
(wikiwand.com/fr/Geographie_de_Madagascar, dp-spad.org these Ramaroson Vola) :
Madagascar compte cinq grands types de sol — ferralitique/lateritique
(Ankaratra, Itasy, Tampoketsa, Vatomandry), ferrugineux (Mahafaly,
Morondava, Ouest, extreme Sud, plateau), hydromorphe (lac Alaotra, Andapa,
Marovoay, Betsimitatatra - utilise pour la riziculture), volcanique
(Antsirabe, Ankaratra/Betafo, Itasy, montagne d'Ambre, Androy - fertile),
calcaire (Antsirabe, plateau de Bemaraha, plateau de Mahafaly).
"""

THEME = "Géologie"
RAS_THEME_1 = "Décrire les propriétés physiques et chimiques du sol"
RAS_THEME_2 = "Décrire les types de sol de Madagascar et la culture correspondante"
VALEURS = "esprit d'observation, respect de la terre, savoir-faire agricole"

# ---------------------------------------------------------------------------
# SEANCE 1 - Les proprietes physiques et chimiques du sol
# ---------------------------------------------------------------------------
S1 = {
    "num": 1, "title": "Les propriétés physiques et chimiques du sol",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "décrire les propriétés physiques (couleur, texture, structure, porosité, perméabilité) et "
                "chimiques (acidité, basicité, neutralité) du sol.",
    "support": "échantillons de sol de couleurs et textures différentes, eau, papier pH si disponible, tableau "
               "noir.",
    "cover_image": ("scripts/t5/generated_images/u9_s1_a_proprietes_sol.jpg",
                     "Les propriétés physiques du sol : couleur, texture, porosité, perméabilité."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "De quelle couleur est le sol autour de ton village ou de ton école ?",
         "R.A. : réponses libres : rouge, brun, gris, etc.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Pourquoi l'eau s'infiltre-t-elle vite dans un sol sableux, mais reste-t-elle "
                                  "en flaque sur un sol argileux ?",
         "R.A. : les élèves formulent des hypothèses sur la texture du sol.", "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les propriétés physiques et chimiques du "
                             "sol ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez et comparez deux échantillons de sol : l'un sableux, l'autre argileux. "
                            "Versez un peu d'eau sur chacun et observez la vitesse d'infiltration.",
         "R.A. : l'eau s'infiltre rapidement dans le sol sableux, et lentement, voire reste en surface, sur le "
         "sol argileux.", "Expérimentation", "Échantillons de sol, eau", ""),
        ("4. Analyse", "Pourquoi ces deux sols se comportent-ils différemment face à l'eau ?",
         "R.A. : ils n'ont pas la même texture (taille des grains) ni la même porosité (quantité d'espaces "
         "vides).", "Étude de cas", "Documents", ""),
        ("5. Synthèse", "Donc, le sol a des propriétés physiques : sa couleur (rouge, brune, grise...), sa "
                         "texture (sableuse, argileuse ou limoneuse, selon la taille des particules), sa "
                         "structure (la façon dont les particules s'assemblent), sa porosité (la quantité "
                         "d'espaces vides entre les particules) et sa perméabilité (sa capacité à laisser "
                         "passer l'eau). Il a aussi des propriétés chimiques : il peut être acide, basique ou "
                         "neutre, ce qui influence les plantes qui peuvent y pousser.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Un sol laisse l'eau s'infiltrer très vite. Est-il plutôt perméable ou "
                            "imperméable ?",
         "Ex. 1 : perméable.", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite deux propriétés physiques du sol.",
         "Ex. 1 : par exemple, la couleur et la texture.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Les propriétés physiques du sol"),
        ("sub", "a. La couleur"),
        ("body", "Le sol peut être rouge, brun, noir, gris ou jaune, selon les minéraux et la matière organique "
                 "qu'il contient."),
        ("sub", "b. La texture"),
        ("body", "La texture dépend de la taille des particules du sol : sableuse (grains gros, l'eau "
                 "s'infiltre vite), argileuse (grains très fins, l'eau s'infiltre lentement) ou limoneuse "
                 "(particules de taille intermédiaire)."),
        ("sub", "c. La structure"),
        ("body", "La structure décrit la façon dont les particules du sol s'assemblent entre elles, par "
                 "exemple en grumeaux ou en couches."),
        ("image", ("scripts/t5/generated_images/u9_s1_a_proprietes_sol.jpg",
                   "Les propriétés physiques du sol : couleur, texture, porosité, perméabilité.")),
        ("sub", "d. La porosité"),
        ("body", "La porosité est la quantité d'espaces vides (pores) entre les particules du sol. Un sol très "
                 "poreux contient beaucoup d'air et d'eau entre ses particules."),
        ("sub", "e. La perméabilité"),
        ("body", "La perméabilité est la capacité du sol à laisser l'eau le traverser. Un sol sableux est "
                 "généralement très perméable ; un sol argileux est peu perméable."),
        ("section", "2. Les propriétés chimiques du sol"),
        ("body", "Un sol peut être acide, basique ou neutre, selon les substances chimiques qu'il contient. "
                 "Cette propriété influence beaucoup les plantes qui peuvent y pousser : certaines cultures "
                 "préfèrent un sol plutôt acide, d'autres un sol plutôt neutre ou basique."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Cite les cinq propriétés physiques du sol étudiées dans la leçon."),
        ("Exercice 2 (5 points)", " — Pour chacune de ces situations, nomme la propriété du sol en jeu : "
                                  "1. l'eau s'infiltre vite dans un sol sableux · 2. le sol est rouge · 3. les "
                                  "particules du sol forment des grumeaux."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Tous les sols ont exactement la même texture.\n"
                                  "2. Un sol argileux laisse en général l'eau s'infiltrer lentement.\n"
                                  "3. Le sol peut être acide, basique ou neutre.\n"
                                  "4. La couleur du sol n'a aucune importance en géologie."),
        ("Exercice 4 (4 points)", " — Explique pourquoi un agriculteur pourrait vouloir connaître l'acidité de "
                                  "son sol avant de semer."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("la couleur, la texture, la structure, la porosité, la perméabilité. (1 pt par "
                                "propriété correcte)", False)],
        [("Ex. 2 — ", False), ("1. perméabilité", True), (" · 2. ", False), ("couleur", True), (" · 3. ", False),
         ("structure", True)],
        [("Ex. 3 — ", False),
         ("1. Faux. Les sols peuvent être sableux, argileux ou limoneux. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Vrai. (1,5 pt)", False)],
        [("4. Faux. La couleur renseigne sur la composition du sol (minéraux, matière organique). (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Parce que certaines plantes poussent mieux dans un sol acide, d'autres dans un "
                                "sol neutre ou basique ; connaître l'acidité aide à choisir les bonnes cultures "
                                "ou à corriger le sol. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 2 - Les types de sol et leur culture correspondante
# ---------------------------------------------------------------------------
S2 = {
    "num": 2, "title": "Les types de sol et leur culture correspondante",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "identifier les principaux types de sol de Madagascar et la culture qui leur correspond.",
    "support": "carte des sols de Madagascar ou schéma simplifié, images de rizières et de tanety, tableau "
               "noir.",
    "cover_image": ("scripts/t5/generated_images/u9_s2_a_types_sol.jpg",
                     "Les grands types de sol de Madagascar : hydromorphe (rizières), latéritique (tanety), volcanique."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite une propriété physique du sol.",
         "R.A. : la couleur, la texture, la structure, la porosité ou la perméabilité.", "Questionnement oral",
         "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Pourquoi cultive-t-on le riz surtout dans des terrains plats et gorgés d'eau "
                                  "(rizières), et pas sur les collines (tanety) ?",
         "R.A. : le riz a besoin d'un sol qui retient beaucoup d'eau, ce que les terrains plats permettent "
         "mieux.", "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les types de sol et leur culture "
                             "correspondante ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez une carte simplifiée des sols de Madagascar. Repérez les sols rouges des "
                            "hauts plateaux, les sols des rizières, et les sols volcaniques autour "
                            "d'Antsirabe.",
         "R.A. : les élèves localisent les grandes zones de sol sur la carte.", "Observation dirigée", "Carte "
         "des sols", ""),
        ("4. Analyse", "Ces différents sols permettent-ils tous les mêmes cultures ?",
         "R.A. : non, chaque type de sol est plus ou moins adapté à certaines cultures.", "Étude de cas",
         "Documents", ""),
        ("5. Synthèse", "Donc, Madagascar compte plusieurs grands types de sol. Le sol hydromorphe (gorgé "
                         "d'eau, présent par exemple autour du lac Alaotra et dans les grandes plaines) convient "
                         "parfaitement à la riziculture. Le sol latéritique ou ferralitique (rouge, présent "
                         "notamment sur les hauts plateaux comme l'Ankaratra ou l'Itasy) — c'est pourquoi "
                         "Madagascar est parfois surnommée « la grande île rouge » — et le sol ferrugineux "
                         "(présent à l'Ouest et dans l'extrême Sud) sont souvent acides et moins fertiles, "
                         "utilisés pour des cultures de tanety (collines) comme le manioc. Le sol volcanique "
                         "(présent autour d'Antsirabe et d'Itasy) est en général très fertile et permet des "
                         "cultures variées.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Quel type de sol convient le mieux à la riziculture ?",
         "Ex. 1 : le sol hydromorphe.", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite un type de sol présent à Madagascar et une culture qui lui "
                             "correspond.",
         "Ex. 1 : par exemple, le sol hydromorphe — la riziculture.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Les grands types de sol de Madagascar"),
        ("body", "Madagascar compte plusieurs grands types de sol, selon les régions : le sol latéritique ou "
                 "ferralitique (sol rouge, riche en oxydes de fer, présent notamment sur les hauts plateaux "
                 "comme l'Ankaratra, l'Itasy ou le Tampoketsa — c'est à cause de ce sol rouge que Madagascar "
                 "est parfois surnommée « la grande île rouge »), le sol ferrugineux (présent notamment à "
                 "l'Ouest, dans l'extrême Sud et sur certains plateaux), le sol hydromorphe (sol gorgé d'eau, "
                 "présent dans les grandes plaines et autour du lac Alaotra), le sol volcanique (sol issu de "
                 "roches volcaniques, présent notamment autour d'Antsirabe, d'Itasy et de la montagne "
                 "d'Ambre) et le sol calcaire (présent notamment autour d'Antsirabe et sur certains plateaux de "
                 "l'Ouest)."),
        ("image", ("scripts/t5/generated_images/u9_s2_a_types_sol.jpg",
                   "Les grands types de sol de Madagascar : hydromorphe (rizières), latéritique (tanety), volcanique.")),
        ("section", "2. La culture correspondant à chaque type de sol"),
        ("sub", "a. Le sol hydromorphe et la riziculture"),
        ("body", "Les sols hydromorphes retiennent bien l'eau : ils sont donc parfaitement adaptés à la culture "
                 "du riz en rizière, l'une des cultures les plus importantes de Madagascar."),
        ("sub", "b. Les sols de tanety (latéritique, ferrugineux)"),
        ("body", "Les sols des collines (tanety) sont souvent acides et moins riches en éléments nutritifs ; "
                 "on y cultive surtout des plantes résistantes comme le manioc, après avoir parfois amélioré le "
                 "sol."),
        ("sub", "c. Le sol volcanique"),
        ("body", "Les sols volcaniques, comme ceux de la région d'Antsirabe, sont en général très fertiles et "
                 "permettent des cultures variées, notamment du maraîchage."),
        ("section", "3. Pourquoi connaître le type de sol ?"),
        ("body", "Connaître les propriétés de son sol permet à un agriculteur de choisir la culture la plus "
                 "adaptée, ou de savoir comment améliorer son sol (apport d'engrais, drainage, irrigation) pour "
                 "mieux cultiver."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Associe chaque type de sol à la culture qui lui correspond le mieux : "
                                  "1. sol hydromorphe · 2. sol de tanety (latéritique) · 3. sol volcanique — "
                                  "A. cultures variées, maraîchage · B. manioc et cultures résistantes · "
                                  "C. riziculture."),
        ("Exercice 2 (5 points)", " — Pourquoi Madagascar est-elle parfois surnommée « la grande île rouge » ? "
                                  "Réponds en une phrase en citant le type de sol concerné."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Tous les sols de Madagascar sont identiques.\n"
                                  "2. Le sol hydromorphe convient bien à la riziculture.\n"
                                  "3. Le sol volcanique est en général très fertile.\n"
                                  "4. Il n'existe qu'un seul type de sol dans toute l'île."),
        ("Exercice 4 (4 points)", " — Un agriculteur veut cultiver du riz. Quel type de sol devrait-il "
                                  "privilégier, et pourquoi ?"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1-C", True), (" · 2-", False), ("B", True), (" · 3-", False), ("A", True)],
        [("Ex. 2 — ", False), ("Parce que les sols latéritiques (ferralitiques), riches en oxydes de fer et de "
                                "couleur rouge, couvrent une grande partie des hauts plateaux de Madagascar. "
                                "(5 pts)", False)],
        [("Ex. 3 — ", False),
         ("1. Faux. Il existe plusieurs grands types de sol à Madagascar. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Vrai. (1,5 pt)", False)],
        [("4. Faux. Madagascar compte au moins cinq grands types de sol selon les régions. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Le sol hydromorphe, car il retient bien l'eau, ce qui convient parfaitement aux "
                                "besoins de la culture du riz en rizière. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 3 - Revision Unite IX
# ---------------------------------------------------------------------------
S3 = {
    "num": 3, "title": "Révision — Unité IX : Géologie", "kind": "revision",
    "cover_image": ("scripts/t5/generated_images/u9_bilan_r1.jpg",
                     "Bilan de l'Unité IX : propriétés du sol et types de sol de Madagascar."),
    "theme": THEME, "ras_theme": "Propriétés physiques et chimiques du sol ; types de sol de Madagascar et "
                                  "culture correspondante",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "traiter un sujet complet portant sur les séances 1 et 2, puis identifier ses points faibles.",
    "support": "sujet recopié au tableau ou polycopié, cahier de brouillon.",
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Sans ouvrir votre cahier : cite un type de sol de Madagascar.",
         "R.A. : hydromorphe, latéritique, ferrugineux, volcanique ou calcaire.", "Questionnement oral", "—", ""),
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
    "sujet_title": "Sujet d'entraînement — Unité IX (Géologie) — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Vrai ou faux (2 points)\n"
         "1. La perméabilité est la capacité du sol à laisser passer l'eau.\n"
         "2. Tous les sols de Madagascar conviennent également bien à la riziculture.\n"
         "B. Complète (2 points)\n"
         "3. Le sol …………… est de couleur rouge et riche en oxydes de fer.\n"
         "4. Le sol …………… convient le mieux à la culture du riz."),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "On verse de l'eau sur deux échantillons : un sol sableux et un sol argileux.\n"
         "1. Dans lequel l'eau s'infiltre-t-elle le plus vite ? (2 pts)\n"
         "2. Comment s'appelle cette propriété du sol ? (2 pts)\n"
         "3. Quel type de sol serait préférable pour une rizière ? (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Un paysan des hauts plateaux veut cultiver sur un sol rouge et acide de tanety.\n"
         "1. Quel type de sol est probablement présent ici ? (2 pts)\n"
         "2. Quelle culture est généralement adaptée à ce type de sol ? (2 pts)\n"
         "3. Pourquoi est-il utile de connaître l'acidité d'un sol avant de cultiver ? (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Un camarade dit : « Il n'y a qu'un seul type de sol à Madagascar, le sol rouge. »\n"
         "Réponds-lui en citant au moins deux autres types de sol présents dans le pays."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. Vrai. 2. Faux (chaque type convient à des cultures différentes). (1 pt par item)", False)],
        [("B. 3. latéritique (ferralitique). 4. hydromorphe. (1 pt par item)", False)],
        [("Renvoi : séances 1, 2.", True)],
        [("Exercice 2 (6 pts)", True)],
        [("1. Le sol sableux. (2 pts)", False)],
        [("2. La perméabilité. (2 pts)", False)],
        [("3. Le sol hydromorphe (qui retient bien l'eau). (2 pts)", False)],
        [("Renvoi : séances 1, 2.", True)],
        [("Exercice 3 (6 pts)", True)],
        [("1. Un sol latéritique (ferralitique). (2 pts)", False)],
        [("2. Le manioc ou d'autres cultures résistantes de tanety. (2 pts)", False)],
        [("3. Pour choisir une culture adaptée ou savoir comment corriger le sol avant de semer. (2 pts)", False)],
        [("Renvoi : séance 2.", True)],
        [("Exercice 4 (4 pts)", True)],
        [("Madagascar compte aussi des sols hydromorphes, ferrugineux, volcaniques et calcaires, en plus du sol "
          "latéritique rouge. (4 pts)", False)],
        [("Renvoi : séance 2.", True)],
        [("Repères de score : 16-20 acquis · 11-15 à consolider · 6-10 fragile · 0-5 reprendre les séances 1 et 2.", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 4 - Examen Unite IX
# ---------------------------------------------------------------------------
S4 = {
    "num": 4, "title": "Sujet d'examen ST T5 — Unité IX : Géologie", "kind": "exam",
    "cover_image": ("scripts/t5/generated_images/u9_bilan_e1.jpg",
                     "Sujet d'examen, Unité IX : Géologie."),
    "theme": THEME, "ras_theme": "Propriétés physiques et chimiques du sol ; types de sol de Madagascar et "
                                  "culture correspondante",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "évaluer la maîtrise des notions des séances 1 et 2 — propriétés du sol, types de sol de "
                "Madagascar.",
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
    "sujet_title": "SUJET D'EXAMEN — Unité IX : Géologie — Durée : ____________ — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Complète avec le mot exact (2 points)\n"
         "1. La …………… du sol dépend de la taille de ses particules (sableuse, argileuse, limoneuse).\n"
         "2. Le sol …………… est issu de roches volcaniques et est en général très fertile.\n"
         "B. QCM — une seule réponse exacte (2 points)\n"
         "1. Le sol qui convient le mieux à la riziculture est le sol : A. volcanique B. hydromorphe C. "
         "ferrugineux\n"
         "2. Madagascar est surnommée « la grande île rouge » à cause du sol : A. hydromorphe B. latéritique "
         "C. calcaire"),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "On compare deux échantillons de sol : l'un retient l'eau et se trouve dans une plaine, l'autre est "
         "rouge et se trouve sur une colline.\n"
         "1. Nomme le type de chaque sol. (2 pts)\n"
         "2. Quelle culture est adaptée au premier sol ? (2 pts)\n"
         "3. Quelle culture est plutôt adaptée au second ? (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Un agriculteur constate que ses plants poussent mal sur un sol très acide.\n"
         "1. Quelle propriété du sol est en cause ? (2 pts)\n"
         "2. Comment peut-il connaître précisément cette propriété ? (2 pts)\n"
         "3. Pourquoi est-il utile d'adapter la culture au type de sol plutôt que l'inverse ? (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Ta petite sœur pense que le sol est partout exactement le même à Madagascar.\n"
         "Explique-lui, en deux phrases, pourquoi ce n'est pas vrai, en donnant deux exemples de types de sol "
         "différents."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. texture. 2. volcanique. (1 pt par item)", False)],
        [("B. 1. B. 2. B. (1 pt par item)", False)],
        [("Exercice 2 (6 pts)", True)],
        [("1. Hydromorphe (plaine) ; latéritique ou ferrugineux (colline/tanety). (2 pts)", False)],
        [("2. La riziculture. (2 pts)", False)],
        [("3. Le manioc ou d'autres cultures résistantes de tanety. (2 pts)", False)],
        [("Exercice 3 (6 pts)", True)],
        [("1. L'acidité (propriété chimique du sol). (2 pts)", False)],
        [("2. En testant le sol avec un papier indicateur (papier pH) ou en l'envoyant à analyser. (2 pts)", False)],
        [("3. Parce que chaque culture a des besoins précis ; choisir une culture adaptée au sol augmente les "
          "chances de bonne récolte. (2 pts)", False)],
        [("Exercice 4 (4 pts)", True)],
        [("Madagascar compte plusieurs types de sol différents, par exemple le sol hydromorphe des rizières et "
          "le sol volcanique fertile autour d'Antsirabe. (4 pts)", False)],
    ],
}
