# -*- coding: utf-8 -*-
"""Content for UNITE V - Conception technologique (seances 33-41).
Grounded in PE T4 (RAS: Dessiner le croquis et le schema de principe d'un
mini-bateau ; construire un mini-bateau simple).
"""

THEME = "Conception technologique"
RAS_THEME_1 = "Dessiner le croquis et le schéma de principe d'un mini-bateau"
RAS_THEME_2 = "Construire un mini-bateau simple"
VALEURS = "goût du beau, sens de la responsabilité"

# ---------------------------------------------------------------------------
# SEANCE 1 (globale 33) - Le cahier des charges du mini-bateau
# ---------------------------------------------------------------------------
S1 = {
    "num": 1, "title": "Le cahier des charges du mini-bateau",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "définir le cahier des charges d'un projet de mini-bateau : fonction, critères de réussite "
                "et contraintes.",
    "support": "cahier de projet, tableau noir, exemples d'objets flottants (bouchon, morceau de bois).",
    "cover_image": ("scripts/t4/generated_images/u5_s1_a_cahier.jpg",
                     "Des élèves discutent en groupe du projet de mini-bateau à réaliser."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Rappelle ce qu'est un cahier des charges (vu à l'Unité III).",
         "R.A. : un document qui décrit ce que doit faire un objet et les conditions à respecter.",
         "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Nous allons construire un mini-bateau en équipe. Que doit-il être capable "
                                 "de faire ?",
         "R.A. : flotter, rester stable, avancer sur l'eau.", "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Le cahier des charges du mini-bateau ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Faisons flotter un bouchon et un morceau de bois dans un seau d'eau. Que "
                            "remarquez-vous sur leur stabilité ?",
         "R.A. : certains objets flottent bien à plat, d'autres basculent.", "Expérimentation dirigée",
         "Seau d'eau, bouchon, bois", ""),
        ("4. Analyse", "D'après vous, quelles conditions notre mini-bateau devra-t-il respecter pour être "
                        "réussi ?",
         "R.A. : flotter sans couler, rester stable, transporter un petit objet, être fabriqué avec le "
         "matériel disponible en classe.", "Étude de cas", "Cahier", ""),
        ("5. Synthèse", "Donc, le cahier des charges du mini-bateau précise : sa fonction (flotter et "
                        "transporter), ses critères de réussite (stabilité, flottabilité) et ses contraintes "
                        "(matériaux disponibles, taille, temps de réalisation).",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — En groupe, rédige le cahier des charges de ton mini-bateau : une "
                            "fonction, deux critères de réussite, une contrainte.",
         "Ex. 1 : réponses variables selon les groupes, à valider avec l'enseignant.", "Travail de groupe",
         "Cahier de projet", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite deux critères qui permettront de dire si le mini-bateau est "
                             "réussi.",
         "Ex. 1 : il flotte sans couler ; il reste stable (ne se renverse pas).", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Qu'est-ce qu'un cahier des charges ?"),
        ("body", "Un cahier des charges est un document qui décrit, avant la fabrication, ce que doit faire "
                 "un objet technique et les conditions qu'il doit respecter. Il sert de guide tout au long "
                 "du projet."),
        ("section", "2. Le cahier des charges du mini-bateau"),
        ("sub", "a. La fonction"),
        ("body", "Notre mini-bateau doit flotter sur l'eau et transporter un petit objet (une graine, une "
                 "petite figurine) d'un point à un autre."),
        ("sub", "b. Les critères de réussite"),
        ("body", "Le mini-bateau doit : flotter sans couler ; rester stable, sans se renverser ; avancer "
                 "quand on souffle dessus ou quand on le pousse ; être suffisamment solide pour plusieurs "
                 "essais."),
        ("sub", "c. Les contraintes"),
        ("body", "Le projet doit respecter des contraintes : utiliser uniquement le matériel disponible en "
                 "classe, tenir dans une taille raisonnable (environ 20 cm), être réalisé en plusieurs "
                 "séances, et être fabriqué en groupe dans le respect des idées de chacun."),
        ("image", ("scripts/t4/generated_images/u5_s1_b_criteres.jpg",
                   "Les critères de réussite du mini-bateau : flotter, être stable, avancer, être solide.")),
        ("section", "3. Pourquoi rédiger un cahier des charges avant de construire ?"),
        ("body", "Rédiger le cahier des charges avant de commencer permet d'éviter les erreurs, de bien "
                 "s'organiser en groupe et de vérifier, à la fin, si l'objet fabriqué répond vraiment au "
                 "besoin de départ."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Qu'est-ce qu'un cahier des charges ? Réponds en une phrase."),
        ("Exercice 2 (6 points)", " — Cite trois critères de réussite que doit respecter le mini-bateau."),
        ("Exercice 3 (5 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                   "1. On rédige le cahier des charges après avoir construit l'objet.\n"
                                   "2. Une contrainte peut être le matériel disponible.\n"
                                   "3. Le cahier des charges aide à s'organiser en groupe."),
        ("Exercice 4 (4 points)", " — Propose une contrainte réaliste pour la construction du mini-bateau "
                                   "dans ta classe."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("un document qui décrit ce que doit faire un objet et les conditions à "
                                "respecter avant de le fabriquer. (5 pts)", False)],
        [("Ex. 2 — ", False), ("flotter sans couler, rester stable, avancer, être solide (trois au choix, "
                                "2 pts chacun).", False)],
        [("Ex. 3 — ", False), ("1. Faux, on le rédige avant. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Vrai. (2 pts)", False)],
        [("Ex. 4 — ", False), ("par exemple : n'utiliser que du matériel de récupération, ou réaliser le "
                                "bateau en une semaine. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 2 (globale 34) - Dessiner le croquis du mini-bateau
# ---------------------------------------------------------------------------
S2 = {
    "num": 2, "title": "Dessiner le croquis du mini-bateau",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "réaliser à main levée le croquis légendé du mini-bateau projeté.",
    "support": "feuilles de brouillon, crayon, règle, exemples de croquis.",
    "cover_image": ("scripts/t4/generated_images/u5_s2_a_croquis.jpg",
                     "Un élève dessine le croquis à main levée de son mini-bateau."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Rappelle deux critères de réussite du cahier des charges du mini-bateau.",
         "R.A. : flotter sans couler, rester stable.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Avant de construire, comment peut-on montrer aux autres à quoi ressemblera "
                                 "notre bateau ?",
         "R.A. : en le dessinant.", "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Dessiner le croquis du mini-bateau ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez ce croquis d'un objet simple : une chaise. Qu'a-t-il de particulier ?",
         "R.A. : c'est un dessin rapide, sans détail inutile, avec des mots pour nommer les parties.",
         "Observation dirigée", "Exemple de croquis", ""),
        ("4. Analyse", "Que faut-il représenter et noter sur le croquis d'un mini-bateau ?",
         "R.A. : la forme générale, les différentes parties (coque, mât, voile), et leurs dimensions "
         "approximatives.", "Étude de cas", "Exemple de croquis", ""),
        ("5. Synthèse", "Donc, un croquis est un dessin à main levée, rapide et simplifié, qui représente un "
                        "objet avant sa fabrication, avec des légendes qui nomment ses parties et des "
                        "dimensions approximatives.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Sur ton brouillon, dessine le croquis de ton mini-bateau avec au moins "
                            "trois légendes.",
         "Ex. 1 : croquis avec coque, mât et voile légendés.", "Travail individuel", "Feuille, crayon", ""),
        ("III. ÉVALUATION", "Ex. 1 — Que doit contenir un bon croquis, en plus du dessin ?",
         "Ex. 1 : des légendes qui nomment les parties et des dimensions approximatives.", "Évaluation écrite",
         "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Qu'est-ce qu'un croquis ?"),
        ("body", "Un croquis est un dessin rapide, réalisé à main levée, qui représente la forme générale "
                 "d'un objet avant sa fabrication. Il n'a pas besoin d'être parfait, mais il doit être clair."),
        ("section", "2. Les éléments d'un bon croquis"),
        ("sub", "a. La forme générale"),
        ("body", "Le croquis montre la silhouette du mini-bateau : une coque allongée, un mât vertical, une "
                 "voile."),
        ("sub", "b. Les légendes"),
        ("body", "Chaque partie importante est nommée par une flèche et un mot : « coque », « mât », "
                 "« voile », « quille ». Les légendes permettent à tout le monde de comprendre le dessin."),
        ("sub", "c. Les dimensions approximatives"),
        ("body", "On note, à côté du dessin, une longueur, une largeur ou une hauteur approximative, par "
                 "exemple « longueur : environ 20 cm »."),
        ("image", ("scripts/t4/generated_images/u5_s2_b_legendes.jpg",
                   "Un croquis de mini-bateau avec ses légendes : coque, mât, voile, quille.")),
        ("section", "3. Pourquoi dessiner un croquis avant de construire ?"),
        ("body", "Le croquis permet à toute l'équipe de se mettre d'accord sur la forme du bateau avant de "
                 "commencer à couper et à assembler les matériaux. Il évite de perdre du temps et du "
                 "matériel."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Qu'est-ce qu'un croquis ? Réponds en une phrase."),
        ("Exercice 2 (6 points)", " — Cite trois parties du mini-bateau que l'on peut légender sur un "
                                   "croquis."),
        ("Exercice 3 (5 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                   "1. Un croquis doit obligatoirement être fait à la règle et parfaitement "
                                   "propre.\n"
                                   "2. Les légendes servent à nommer les parties dessinées.\n"
                                   "3. Le croquis se dessine après la construction de l'objet."),
        ("Exercice 4 (4 points)", " — Pourquoi est-il utile de dessiner un croquis en équipe avant de "
                                   "construire un objet ?"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("un dessin rapide à main levée qui représente la forme générale d'un objet "
                                "avant sa fabrication. (5 pts)", False)],
        [("Ex. 2 — ", False), ("coque, mât, voile (ou quille) — trois au choix, 2 pts chacun.", False)],
        [("Ex. 3 — ", False), ("1. Faux, il peut être fait à main levée, sans règle. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Faux, il se dessine avant. (2 pts)", False)],
        [("Ex. 4 — ", False), ("cela permet à toute l'équipe de se mettre d'accord sur la forme du bateau "
                                "avant de couper et d'assembler les matériaux, et d'éviter de perdre du "
                                "temps. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 3 (globale 35) - Le schema de principe et les symboles de mouvement
# ---------------------------------------------------------------------------
S3 = {
    "num": 3, "title": "Le schéma de principe et les symboles de mouvement",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "réaliser le schéma de principe du mini-bateau en utilisant des symboles conventionnels de "
                "mouvement.",
    "support": "cahier, règle, exemples de schémas avec flèches de mouvement.",
    "cover_image": ("scripts/t4/generated_images/u5_s3_a_schema.jpg",
                     "Un schéma de principe simplifié d'un mini-bateau avec des flèches de mouvement."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Qu'est-ce qu'un croquis ?",
         "R.A. : un dessin rapide qui représente la forme générale d'un objet.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Sur mon croquis, on ne voit pas dans quel sens le bateau va avancer. "
                                 "Comment le montrer clairement ?",
         "R.A. : en dessinant une flèche qui indique la direction.", "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Le schéma de principe et les symboles "
                             "de mouvement ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez ce schéma de principe du mini-bateau : en quoi est-il différent du "
                            "croquis vu la dernière fois ?",
         "R.A. : il est encore plus simplifié, avec des formes géométriques et des flèches, sans détail "
         "artistique.", "Observation dirigée", "Exemple de schéma", ""),
        ("4. Analyse", "Que représentent les différentes flèches sur ce schéma ?",
         "R.A. : une flèche pour le sens d'avancement du bateau, une flèche pour la direction du vent qui "
         "pousse la voile.", "Étude de cas", "Exemple de schéma", ""),
        ("5. Synthèse", "Donc, le schéma de principe est un dessin très simplifié, fait de formes "
                        "géométriques, qui montre le fonctionnement d'un objet. Des flèches, appelées "
                        "symboles de mouvement, indiquent le sens de déplacement et les forces appliquées "
                        "(vent, poussée, rame).",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Sur ton cahier, reproduis le schéma de principe de ton mini-bateau avec "
                            "une flèche de direction et une flèche de force.",
         "Ex. 1 : schéma avec deux flèches correctement placées.", "Travail individuel", "Cahier, règle", ""),
        ("III. ÉVALUATION", "Ex. 1 — À quoi sert une flèche sur un schéma de principe ?",
         "Ex. 1 : à indiquer un sens de déplacement ou une force appliquée sur l'objet.", "Évaluation écrite",
         "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Qu'est-ce qu'un schéma de principe ?"),
        ("body", "Un schéma de principe est un dessin très simplifié, fait de formes géométriques (traits, "
                 "rectangles, triangles), qui montre comment un objet fonctionne, sans chercher à être "
                 "esthétique comme le croquis."),
        ("section", "2. Les symboles de mouvement"),
        ("sub", "a. La flèche de direction"),
        ("body", "Une flèche simple indique le sens dans lequel un objet se déplace, par exemple le sens "
                 "d'avancement du mini-bateau sur l'eau."),
        ("sub", "b. La flèche de force"),
        ("body", "Une flèche plus épaisse ou d'une autre couleur peut représenter une force appliquée sur "
                 "l'objet, par exemple la force du vent qui pousse la voile, ou la force d'une main qui "
                 "pousse le bateau."),
        ("image", ("scripts/t4/generated_images/u5_s3_b_symboles.jpg",
                   "Les symboles de mouvement utilisés sur un schéma technique : flèche de direction et "
                   "flèche de force.")),
        ("section", "3. Pourquoi utiliser des symboles normalisés ?"),
        ("body", "Utiliser toujours les mêmes symboles permet à n'importe quelle personne, même sans "
                 "explication orale, de comprendre le fonctionnement d'un objet en lisant son schéma."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Qu'est-ce qu'un schéma de principe ? Réponds en une phrase."),
        ("Exercice 2 (5 points)", " — Que représente une flèche sur un schéma de principe ?"),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                   "1. Le schéma de principe doit être joli et coloré comme un dessin "
                                   "d'art.\n"
                                   "2. Une flèche peut représenter la force du vent sur une voile.\n"
                                   "3. Les symboles de mouvement aident à comprendre un objet sans "
                                   "explication orale."),
        ("Exercice 4 (4 points)", " — Dessine, sur ton cahier, une flèche de direction et explique ce "
                                   "qu'elle signifierait sur le schéma de ton mini-bateau."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("un dessin très simplifié, fait de formes géométriques, qui montre comment "
                                "un objet fonctionne. (5 pts)", False)],
        [("Ex. 2 — ", False), ("un sens de déplacement ou une force appliquée sur l'objet. (5 pts)", False)],
        [("Ex. 3 — ", False), ("1. Faux, il doit être simple et clair, pas esthétique. (2 pts)", False)],
        [("2. Vrai. (2 pts)", False)],
        [("3. Vrai. (2 pts)", False)],
        [("Ex. 4 — ", False), ("réponse libre : par exemple une flèche vers l'avant du bateau signifiant "
                                "son sens d'avancement sur l'eau. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 4 (globale 36) - Choisir les materiaux et outils
# ---------------------------------------------------------------------------
S4 = {
    "num": 4, "title": "Choisir les matériaux et outils",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "sélectionner les matériaux et outils adaptés à la construction du mini-bateau, selon le "
                "cahier des charges.",
    "support": "échantillons de matériaux (bouteille plastique, liège, bois léger, bâtonnets), outils "
               "(ciseaux, colle, ficelle), seau d'eau.",
    "cover_image": ("scripts/t4/generated_images/u5_s4_a_materiaux.jpg",
                     "Des matériaux légers triés selon qu'ils flottent ou qu'ils coulent."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Rappelle un critère de réussite du cahier des charges du mini-bateau.",
         "R.A. : il doit flotter sans couler.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Plongeons un morceau de liège, un clou en métal et une bouteille en "
                                 "plastique fermée dans l'eau. Que remarquez-vous ?",
         "R.A. : le liège et la bouteille flottent, le clou coule.", "Expérimentation dirigée",
         "Seau d'eau, liège, clou, bouteille", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Choisir les matériaux et outils ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez les matériaux proposés : lesquels semblent adaptés à la coque de notre "
                            "mini-bateau ?",
         "R.A. : le bois léger, le liège, une bouteille en plastique bien fermée.", "Observation dirigée",
         "Échantillons de matériaux", ""),
        ("4. Analyse", "Pourquoi le métal n'est-il pas un bon choix pour la coque, alors qu'il est très "
                        "solide ?",
         "R.A. : parce qu'il est lourd et coule facilement, il ne respecte pas le critère de flottabilité.",
         "Étude de cas", "Échantillons de matériaux", ""),
        ("5. Synthèse", "Donc, on choisit les matériaux selon le cahier des charges : des matériaux légers "
                        "et imperméables (bois léger, liège, plastique) pour la coque qui doit flotter, et "
                        "des outils adaptés (ciseaux, colle, ficelle, brochette pour le mât) pour l'assembler "
                        "en sécurité.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — En groupe, liste les matériaux et les outils que ton équipe choisit pour "
                            "construire son mini-bateau, et justifie un de tes choix.",
         "Ex. 1 : réponses variables, à valider avec l'enseignant.", "Travail de groupe", "Cahier de projet", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite deux matériaux qui flottent et un matériau qui coule.",
         "Ex. 1 : bois léger et liège flottent ; le métal coule.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Les matériaux qui flottent"),
        ("body", "Certains matériaux légers flottent bien sur l'eau : le bois léger, le liège, le "
                 "polystyrène, une bouteille en plastique bien fermée et remplie d'air. Ces matériaux "
                 "conviennent pour la coque du mini-bateau."),
        ("section", "2. Les matériaux qui coulent"),
        ("body", "Les matériaux lourds comme le métal ou la pierre coulent facilement dans l'eau. Ils sont "
                 "trop lourds pour être utilisés pour la coque d'un mini-bateau simple."),
        ("section", "3. Les outils utiles à la construction"),
        ("body", "Pour fabriquer notre mini-bateau, nous utiliserons : des ciseaux (pour couper le papier "
                 "de la voile), de la colle (pour fixer les pièces), de la ficelle (pour attacher le mât et "
                 "la voile), et une brochette en bois (pour faire le mât). Les outils tranchants doivent "
                 "toujours être utilisés avec la surveillance d'un adulte."),
        ("image", ("scripts/t4/generated_images/u5_s4_b_outils.jpg",
                   "Les outils nécessaires à la construction du mini-bateau, rangés et prêts à l'emploi.")),
        ("section", "4. Choisir en fonction du cahier des charges"),
        ("body", "Avant de choisir un matériau ou un outil, on revient toujours au cahier des charges : "
                 "le matériau permet-il au bateau de flotter et d'être stable ? L'outil est-il adapté et "
                 "sûr à utiliser ?"),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Cite trois matériaux qui flottent bien sur l'eau."),
        ("Exercice 2 (5 points)", " — Pourquoi le métal n'est-il pas adapté pour la coque du mini-bateau ?"),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                   "1. Le liège flotte sur l'eau.\n"
                                   "2. On peut utiliser des ciseaux sans aucune précaution.\n"
                                   "3. Le choix des matériaux doit respecter le cahier des charges."),
        ("Exercice 4 (4 points)", " — Cite deux outils utiles pour construire un mini-bateau et à quoi "
                                   "chacun sert."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("bois léger, liège, polystyrène ou bouteille plastique fermée (trois au "
                                "choix). (5 pts)", False)],
        [("Ex. 2 — ", False), ("parce qu'il est lourd et coule dans l'eau, ce qui ne respecte pas le "
                                "critère de flottabilité. (5 pts)", False)],
        [("Ex. 3 — ", False), ("1. Vrai. (2 pts)", False)],
        [("2. Faux, il faut toujours utiliser les ciseaux avec précaution, sous surveillance d'un adulte "
          "si besoin. (2 pts)", False)],
        [("3. Vrai. (2 pts)", False)],
        [("Ex. 4 — ", False), ("par exemple : la colle pour fixer les pièces, la ficelle pour attacher le "
                                "mât et la voile (deux exemples au choix, 2 pts chacun).", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 5 (globale 37) - Construction du mini-bateau
# ---------------------------------------------------------------------------
S5 = {
    "num": 5, "title": "Construction du mini-bateau",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "assembler les pièces du mini-bateau en suivant le schéma de principe et en respectant les "
                "consignes de sécurité.",
    "support": "matériaux et outils choisis à la séance précédente, schémas de principe des élèves.",
    "cover_image": ("scripts/t4/generated_images/u5_s5_a_construction.jpg",
                     "Des élèves assemblent leur mini-bateau en atelier, en suivant leur schéma."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Rappelle deux matériaux choisis par ton équipe pour la coque.",
         "R.A. : réponses variables selon les équipes.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Aujourd'hui, nous passons du dessin à la réalisation concrète. Dans quel "
                                 "ordre allons-nous assembler les pièces ?",
         "R.A. : d'abord la coque, puis le mât, puis la voile.", "Questionnement oral", "Schémas", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Construction du mini-bateau ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observons les étapes de montage présentées au tableau.",
         "R.A. : les élèves repèrent l'ordre des étapes : coque, mât, voile.", "Observation dirigée",
         "Schéma des étapes", ""),
        ("4. Analyse", "Pourquoi est-il important de suivre son schéma pendant la construction, et non de "
                        "construire au hasard ?",
         "R.A. : pour que le bateau corresponde au projet prévu et respecte le cahier des charges.",
         "Étude de cas", "Schémas des élèves", ""),
        ("5. Synthèse", "Donc, la construction du mini-bateau suit un ordre logique : préparer la coque, "
                        "fixer le mât, attacher la voile, en suivant le schéma de principe et en respectant "
                        "les consignes de sécurité pour les outils.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — En équipe, commence la construction de ton mini-bateau en suivant ton "
                            "schéma, étape par étape.",
         "Ex. 1 : construction en cours, à poursuivre à la séance suivante si besoin.", "Travail de groupe",
         "Matériaux, outils", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite les trois grandes étapes de la construction du mini-bateau.",
         "Ex. 1 : préparer la coque, fixer le mât, attacher la voile.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Les étapes de la construction"),
        ("sub", "a. Préparer la coque"),
        ("body", "On découpe ou on façonne le matériau choisi (bois léger, liège, bouteille) pour former la "
                 "coque, en suivant les dimensions notées sur le croquis."),
        ("sub", "b. Fixer le mât"),
        ("body", "On plante ou on colle une brochette verticale au centre de la coque : c'est le mât, qui "
                 "portera la voile."),
        ("sub", "c. Attacher la voile"),
        ("body", "On découpe un morceau de papier ou de tissu léger en triangle ou en rectangle et on "
                 "l'attache au mât avec de la ficelle ou de la colle : c'est la voile, qui captera le vent."),
        ("image", ("scripts/t4/generated_images/u5_s5_b_etapes.jpg",
                   "Les trois étapes de construction du mini-bateau : coque, mât, voile.")),
        ("sub", "Astuce de montage : une coque avec des bouchons de liège"),
        ("body", "Une autre façon simple de fabriquer la coque consiste à assembler trois bouchons de liège "
                 "côte à côte à l'aide de deux élastiques, sans les serrer trop fort. Une ficelle nouée aux "
                 "élastiques permet ensuite de diriger le bateau une fois à l'eau. Le mât (un cure-dent) est "
                 "fixé au centre du bouchon du milieu, en le glissant dans deux petits trous percés dans la "
                 "voile en papier."),
        ("section", "2. Les consignes de sécurité"),
        ("body", "Pendant la construction, on respecte des règles de sécurité : demander l'aide d'un adulte "
                 "pour couper les matériaux durs, tenir les ciseaux correctement, ranger les outils "
                 "tranchants après usage, et travailler calmement en équipe."),
    ],
    "exercices": [
        ("Exercice 1 (6 points)", " — Cite, dans l'ordre, les trois grandes étapes de la construction du "
                                   "mini-bateau."),
        ("Exercice 2 (5 points)", " — Pourquoi faut-il suivre son schéma de principe pendant la "
                                   "construction ?"),
        ("Exercice 3 (5 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                   "1. On peut construire sans se soucier de la sécurité.\n"
                                   "2. Le mât porte la voile.\n"
                                   "3. On peut construire n'importe comment, sans suivre le schéma."),
        ("Exercice 4 (4 points)", " — Cite une règle de sécurité à respecter pendant la construction du "
                                   "mini-bateau."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("préparer la coque, fixer le mât, attacher la voile. (2 pts par étape).", False)],
        [("Ex. 2 — ", False), ("pour que le bateau corresponde au projet prévu et respecte le cahier des "
                                "charges. (5 pts)", False)],
        [("Ex. 3 — ", False), ("1. Faux, la sécurité doit toujours être respectée. (1,5 pt)", False)],
        [("2. Vrai. (2 pts)", False)],
        [("3. Faux, il faut suivre le schéma. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("par exemple : demander l'aide d'un adulte pour couper les matériaux durs, "
                                "ou ranger les outils tranchants après usage. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 6 (globale 38) - Essais, ajustements et finition
# ---------------------------------------------------------------------------
S6 = {
    "num": 6, "title": "Essais, ajustements et finition",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "tester la flottabilité et la stabilité du mini-bateau, identifier les défauts et les "
                "corriger.",
    "support": "mini-bateaux en cours de construction, bassine d'eau, matériel de finition (peinture, "
               "colle).",
    "cover_image": ("scripts/t4/generated_images/u5_s6_a_essai.jpg",
                     "Des élèves testent la flottabilité de leur mini-bateau dans une bassine d'eau."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Quelles sont les trois grandes étapes de construction du mini-bateau ?",
         "R.A. : préparer la coque, fixer le mât, attacher la voile.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Notre mini-bateau est construit. Comment savoir s'il respecte le cahier "
                                 "des charges ?",
         "R.A. : en le testant dans l'eau.", "Questionnement oral", "Bassine d'eau", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Essais, ajustements et finition ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Posons chaque mini-bateau à la surface de l'eau. Que remarquez-vous ?",
         "R.A. : certains flottent bien à plat, d'autres penchent ou prennent l'eau.", "Expérimentation "
         "dirigée", "Bassine d'eau, mini-bateaux", ""),
        ("4. Analyse", "Un bateau penche fortement d'un côté. Quelle en est probablement la cause, et "
                        "comment corriger ce défaut ?",
         "R.A. : le poids est mal réparti ; on peut rééquilibrer en ajoutant ou déplaçant un petit poids, ou "
         "en revoyant la position du mât.", "Étude de cas", "Mini-bateaux", ""),
        ("5. Synthèse", "Donc, après la construction, on teste le mini-bateau dans l'eau pour vérifier sa "
                        "flottabilité et sa stabilité, on ajuste les défauts observés (poids mal réparti, "
                        "fuite d'eau), puis on termine par la finition (solidifier les collages, décorer).",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Teste ton mini-bateau dans la bassine, note un défaut observé et la "
                            "solution que tu proposes.",
         "Ex. 1 : réponses variables selon les équipes.", "Travail de groupe", "Bassine d'eau, cahier", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite deux défauts possibles d'un mini-bateau lors de l'essai.",
         "Ex. 1 : il penche d'un côté ; il prend l'eau.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Pourquoi tester le mini-bateau ?"),
        ("body", "Tester le mini-bateau dans l'eau permet de vérifier s'il respecte réellement le cahier "
                 "des charges rédigé au début du projet : flotte-t-il ? reste-t-il stable ? avance-t-il ?"),
        ("section", "2. Les défauts fréquents et leurs solutions"),
        ("sub", "a. Le bateau penche"),
        ("body", "Le poids est mal réparti. On peut déplacer le mât, ajouter un petit poids du côté opposé, "
                 "ou élargir la base de la coque."),
        ("sub", "b. Le bateau prend l'eau"),
        ("body", "La coque n'est pas assez étanche. On peut renforcer les collages, ou enduire la coque "
                 "d'une fine couche de matériau imperméable."),
        ("sub", "c. Le bateau n'avance pas"),
        ("body", "La voile est peut-être trop petite ou mal orientée. On peut l'agrandir légèrement ou "
                 "ajuster son inclinaison."),
        ("image", ("scripts/t4/generated_images/u5_s6_b_ajustement.jpg",
                   "Un élève ajuste et répare son mini-bateau après le premier essai dans l'eau.")),
        ("section", "3. La finition"),
        ("body", "Une fois les ajustements terminés, on passe à la finition : on solidifie les collages, on "
                 "range les fils qui dépassent, et on peut décorer le mini-bateau (couleurs, petit drapeau) "
                 "pour le rendre agréable à regarder."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Pourquoi teste-t-on le mini-bateau dans l'eau après sa construction ?"),
        ("Exercice 2 (6 points)", " — Cite trois défauts possibles d'un mini-bateau lors de l'essai et une "
                                   "solution pour chacun."),
        ("Exercice 3 (5 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                   "1. Si le bateau penche, on ne peut rien faire pour le corriger.\n"
                                   "2. La finition consiste à solidifier et à décorer le bateau.\n"
                                   "3. On teste le bateau avant même de le construire."),
        ("Exercice 4 (4 points)", " — Propose une idée de décoration pour ton mini-bateau, une fois les "
                                   "ajustements terminés."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("pour vérifier s'il respecte le cahier des charges : flotte, stable, avance. "
                                "(5 pts)", False)],
        [("Ex. 2 — ", False), ("penche → rééquilibrer le poids ; prend l'eau → renforcer les collages ; "
                                "n'avance pas → agrandir ou ajuster la voile (2 pts par couple correct).",
                                False)],
        [("Ex. 3 — ", False), ("1. Faux, on peut rééquilibrer le poids. (1,5 pt)", False)],
        [("2. Vrai. (2 pts)", False)],
        [("3. Faux, on teste après la construction. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("réponse libre : par exemple peindre la coque, ajouter un petit drapeau. "
                                "(4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 7 (globale 39) - Presentation des prototypes
# ---------------------------------------------------------------------------
S7 = {
    "num": 7, "title": "Présentation des prototypes",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "présenter son prototype de mini-bateau à la classe en expliquant les choix de conception "
                "et les difficultés rencontrées.",
    "support": "mini-bateaux terminés, cahier de projet, éventuellement bassine d'eau pour une petite "
               "régate finale.",
    "cover_image": ("scripts/t4/generated_images/u5_s7_a_presentation.jpg",
                     "Une élève présente son mini-bateau terminé devant la classe."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite un défaut que ton équipe a corrigé sur son mini-bateau.",
         "R.A. : réponses variables selon les équipes.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Notre projet est terminé. Comment le partager avec le reste de la "
                                 "classe ?",
         "R.A. : en le présentant à l'oral, en montrant le bateau.", "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Présentation des prototypes ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observons un exemple de présentation de projet : que dit l'élève, dans quel "
                            "ordre ?",
         "R.A. : il présente la fonction, les matériaux choisis, les difficultés rencontrées et les "
         "solutions trouvées.", "Observation dirigée", "Exemple de présentation", ""),
        ("4. Analyse", "Pourquoi est-il utile de parler aussi des difficultés rencontrées, et pas seulement "
                        "du résultat final ?",
         "R.A. : cela montre le travail réalisé et aide les autres équipes à apprendre de ces difficultés.",
         "Étude de cas", "Cahier de projet", ""),
        ("5. Synthèse", "Donc, présenter un prototype consiste à expliquer : la fonction de l'objet, les "
                        "matériaux et étapes de fabrication, les difficultés rencontrées et comment elles "
                        "ont été résolues, en s'exprimant clairement devant la classe.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — En équipe, prépare une courte présentation orale de ton mini-bateau (2 à "
                            "3 phrases).",
         "Ex. 1 : présentation orale devant la classe.", "Travail de groupe", "Cahier de projet", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite deux éléments qu'il faut mentionner dans la présentation d'un "
                             "prototype.",
         "Ex. 1 : la fonction de l'objet et les difficultés rencontrées (ou les matériaux utilisés).",
         "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Pourquoi présenter son prototype ?"),
        ("body", "Présenter son prototype permet de partager le travail réalisé, d'expliquer les choix "
                 "faits, et de recevoir des remarques constructives des autres élèves pour progresser."),
        ("section", "2. Le contenu d'une bonne présentation"),
        ("sub", "a. La fonction de l'objet"),
        ("body", "On rappelle ce que l'objet devait faire, d'après le cahier des charges de départ."),
        ("sub", "b. Les matériaux et les étapes"),
        ("body", "On explique quels matériaux ont été choisis et comment l'objet a été construit, étape "
                 "par étape."),
        ("sub", "c. Les difficultés et les solutions"),
        ("body", "On partage les problèmes rencontrés (par exemple, un bateau qui penchait) et comment ils "
                 "ont été résolus."),
        ("image", ("scripts/t4/generated_images/u5_s7_b_flotte.jpg",
                   "Plusieurs mini-bateaux terminés flottent côte à côte lors de la présentation finale.")),
        ("section", "3. Écouter et respecter le travail des autres"),
        ("body", "Pendant les présentations, chaque élève écoute attentivement les autres équipes et peut "
                 "poser une question ou donner un compliment constructif, dans le respect du travail de "
                 "chacun."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Pourquoi est-il utile de présenter son prototype à la classe ?"),
        ("Exercice 2 (6 points)", " — Cite trois éléments à mentionner dans la présentation d'un "
                                   "prototype."),
        ("Exercice 3 (5 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                   "1. On ne doit jamais parler des difficultés rencontrées.\n"
                                   "2. Écouter les autres équipes fait partie du respect du travail de "
                                   "chacun.\n"
                                   "3. La présentation permet de recevoir des remarques constructives."),
        ("Exercice 4 (4 points)", " — Rédige une phrase pour présenter la fonction de ton mini-bateau à la "
                                   "classe."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("pour partager le travail réalisé, expliquer ses choix et recevoir des "
                                "remarques constructives. (5 pts)", False)],
        [("Ex. 2 — ", False), ("la fonction de l'objet, les matériaux et étapes, les difficultés et "
                                "solutions (2 pts chacun).", False)],
        [("Ex. 3 — ", False), ("1. Faux, en parler montre le travail réalisé. (1,5 pt)", False)],
        [("2. Vrai. (2 pts)", False)],
        [("3. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("réponse libre : par exemple « Notre mini-bateau doit flotter et transporter "
                                "une petite figurine ». (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 8 (globale 40) - Revision Unite V
# ---------------------------------------------------------------------------
S8 = {
    "num": 8, "title": "Révision — Unité V : Conception technologique", "kind": "revision",
    "cover_image": ("scripts/t4/generated_images/u5_bilan_r1.jpg",
                     "Bilan de l'Unité V : les cinq étapes de la conception technologique."),
    "theme": THEME, "ras_theme": "Cahier des charges, croquis, schéma de principe, choix des matériaux, "
                                  "construction, essais et présentation d'un mini-bateau",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "traiter un sujet complet portant sur les séances 33 à 39, puis identifier ses points "
                "faibles.",
    "support": "sujet recopié au tableau ou polycopié, cahier de brouillon.",
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Sans ouvrir votre cahier : cite une étape de la construction du mini-bateau.",
         "R.A. : préparer la coque, fixer le mât, ou attacher la voile.", "Questionnement oral", "—", ""),
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
    "sujet_title": "Sujet d'entraînement — Unité V (Conception technologique) — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Associe chaque mot à sa définition (2 points)\n"
         "1. cahier des charges · 2. croquis · 3. schéma de principe · 4. flèche de mouvement\n"
         "a. dessin très simplifié fait de formes géométriques · b. symbole indiquant une direction ou une "
         "force · c. document décrivant la fonction et les contraintes d'un objet · d. dessin rapide et "
         "légendé d'un objet"),
        ("", "B. Vrai ou faux — justifie en une phrase (2 points)\n"
              "1. Le métal est un bon matériau pour la coque d'un mini-bateau.\n"
              "2. On teste le mini-bateau avant de le construire."),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "Une classe de 30 élèves forme des équipes de 5 élèves pour construire des mini-bateaux. Après les "
         "essais, 8 équipes sur 12 ont réussi à faire flotter leur bateau sans qu'il penche.\n"
         "1. Combien d'équipes ont été formées ? Vérifie avec le nombre d'élèves. (2 pts)\n"
         "2. Quel pourcentage des équipes a réussi l'essai sans que le bateau penche ? (2 pts)\n"
         "3. Combien d'équipes doivent encore ajuster leur bateau ? (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Une équipe a construit un mini-bateau avec une coque en bois léger, mais lors du test, le bateau "
         "penche fortement d'un côté et prend un peu d'eau.\n"
         "1. Cite les deux défauts observés lors de l'essai. (2 pts)\n"
         "2. Propose une solution pour chaque défaut. (2 pts)\n"
         "3. Pourquoi est-il important de tester le prototype avant la présentation finale ? (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Un élève dit : « Je n'ai pas besoin de dessiner un croquis, je peux construire directement mon "
         "bateau. » Explique-lui, en deux phrases, pourquoi le croquis et le schéma de principe sont "
         "utiles avant de construire."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1 → c · 2 → d · 3 → a · 4 → b (0,5 pt par association)", False)],
        [("B. (1 pt par item : 0,5 pt pour vrai/faux, 0,5 pt pour la justification)", False)],
        [("1. Faux. Le métal est trop lourd, il coule ; on préfère un matériau léger comme le bois léger "
          "ou le liège.", False)],
        [("2. Faux. On teste le bateau après l'avoir construit, pour vérifier qu'il respecte le cahier des "
          "charges.", False)],
        [("Exercice 2 (6 pts)", True)],
        [("1. 30 ÷ 5 = 6 équipes… mais l'énoncé indique 12 équipes : il s'agit donc de deux classes "
          "réunies, soit 60 élèves au total pour 12 équipes de 5. (2 pts)", False)],
        [("2. 8 ÷ 12 × 100 ≈ 67 % des équipes. (2 pts)", False)],
        [("3. 12 − 8 = 4 équipes doivent encore ajuster leur bateau. (2 pts)", False)],
        [("Renvoi : séances 36, 38.", True)],
        [("Exercice 3 (6 pts)", True)],
        [("1. Le bateau penche d'un côté et prend un peu d'eau. (2 pts)", False)],
        [("2. Pencher → rééquilibrer le poids ou déplacer le mât ; prend l'eau → renforcer les collages "
          "de la coque. (2 pts)", False)],
        [("3. Pour corriger les défauts avant de montrer le prototype à la classe, et s'assurer qu'il "
          "respecte bien le cahier des charges. (2 pts)", False)],
        [("Renvoi : séance 38.", True)],
        [("Exercice 4 (4 pts)", True)],
        [("Le croquis et le schéma permettent à toute l'équipe de se mettre d'accord sur la forme et le "
          "fonctionnement du bateau avant de commencer, ce qui évite de perdre du temps et du matériel en "
          "corrigeant des erreurs après coup. (4 pts)", False)],
        [("Renvoi : séances 34, 35.", True)],
        [("Repères de score : 16-20 acquis · 11-15 à consolider · 6-10 fragile · 0-5 reprendre les séances "
          "33 à 39.", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 9 (globale 41) - Examen Unite V
# ---------------------------------------------------------------------------
S9 = {
    "num": 9, "title": "Sujet d'examen ST T4 — Unité V : Conception technologique", "kind": "exam",
    "cover_image": ("scripts/t4/generated_images/u5_bilan_e1.jpg",
                     "Sujet d'examen, Unité V : Conception technologique."),
    "theme": THEME, "ras_theme": "Cahier des charges, croquis, schéma de principe, choix des matériaux, "
                                  "construction, essais et présentation d'un mini-bateau",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "évaluer la maîtrise des notions des séances 33 à 39 — cahier des charges, croquis, schéma "
                "de principe, matériaux, construction, essais et présentation.",
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
    "sujet_title": "SUJET D'EXAMEN — Unité V : Conception technologique — Durée : ____________ — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Complète avec le mot exact (2 points)\n"
         "1. Le document qui décrit la fonction et les contraintes d'un objet s'appelle le ……………… .\n"
         "2. Un dessin rapide et légendé d'un objet avant sa fabrication s'appelle un ……………… .\n"
         "3. Un dessin très simplifié fait de formes géométriques qui montre le fonctionnement d'un objet "
         "s'appelle un ……………… .\n"
         "4. Un symbole en forme de trait avec une pointe, qui indique une direction ou une force, "
         "s'appelle une ……………… ."),
        ("", "B. QCM — une seule réponse exacte (2 points)\n"
              "1. Un matériau adapté à la coque d'un mini-bateau est : A. le métal B. le bois léger "
              "C. la pierre\n"
              "2. Le schéma de principe se réalise : A. après la construction B. avant la construction "
              "C. pendant la présentation finale\n"
              "3. Si un bateau penche lors de l'essai, il faut : A. l'abandonner B. rééquilibrer le poids "
              "C. ajouter du métal\n"
              "4. Lors de la présentation d'un prototype, il faut mentionner : A. seulement le résultat "
              "final B. la fonction, les matériaux et les difficultés rencontrées C. rien de particulier"),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "Une classe de 24 élèves forme des équipes de 4 élèves pour construire des mini-bateaux. Lors de "
         "l'essai final, 5 équipes sur 6 réussissent à faire flotter leur bateau sans qu'il penche.\n"
         "1. Combien d'équipes ont été formées ? (2 pts)\n"
         "2. Quel pourcentage des équipes a réussi l'essai sans que le bateau penche ? (2 pts)\n"
         "3. Combien d'équipes doivent encore corriger un défaut ? (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Une équipe a construit un mini-bateau avec une coque en bouteille plastique. Lors de la "
         "présentation, un camarade demande pourquoi ils n'ont pas utilisé de métal, qui est plus solide.\n"
         "1. Que doit répondre l'équipe concernant la flottabilité du métal ? (2 pts)\n"
         "2. Cite un avantage de la bouteille en plastique pour cet usage. (2 pts)\n"
         "3. Quel critère du cahier des charges ce choix de matériau permet-il de respecter ? (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Ton équipe vient de terminer son mini-bateau, mais il penche légèrement d'un côté lors du "
         "premier essai dans l'eau. Explique en deux ou trois phrases ce que tu ferais pour identifier la "
         "cause du problème et le corriger, avant de présenter ton prototype à la classe."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. cahier des charges · 2. croquis · 3. schéma de principe · 4. flèche (de mouvement) "
          "(0,5 pt par réponse)", False)],
        [("B. 1. B · 2. B · 3. B · 4. B (0,5 pt par item)", False)],
        [("Renvoi : séances 33, 34, 35, 36, 38, 39.", True)],
        [("Exercice 2 (6 pts)", True)],
        [("1. 24 ÷ 4 = 6 équipes. (2 pts)", False)],
        [("2. 5 ÷ 6 × 100 ≈ 83 % des équipes. (2 pts)", False)],
        [("3. 6 − 5 = 1 équipe doit encore corriger un défaut. (2 pts)", False)],
        [("Renvoi : séances 37, 38.", True)],
        [("Exercice 3 (6 pts)", True)],
        [("1. Le métal est solide mais lourd : il coule dans l'eau et ne convient donc pas à la coque "
          "d'un bateau qui doit flotter. (2 pts)", False)],
        [("2. La bouteille en plastique est légère, imperméable et flotte facilement. (2 pts)", False)],
        [("3. Le critère de flottabilité (le bateau doit flotter sans couler). (2 pts)", False)],
        [("Renvoi : séance 36.", True)],
        [("Exercice 4 (4 pts)", True)],
        [("Réponse libre : tester à nouveau le bateau, observer de quel côté il penche, vérifier la "
          "position du mât et le poids réparti sur la coque, puis rééquilibrer en déplaçant le mât ou en "
          "ajoutant un petit poids du côté opposé avant de représenter le bateau. (4 pts pour une démarche "
          "cohérente)", False)],
        [("Renvoi : séance 38.", True)],
        [("TOTAL : 20 points", True)],
    ],
}
