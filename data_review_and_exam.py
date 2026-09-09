# -*- coding: utf-8 -*-
from constants import C_RED, C_GREEN, C_BLUE, C_CORR, C_DARK, C_EMERALD, C_GRAY_TEXT

review_session_10 = {
    "seance_num": 10,
    "titre": "Révision générale — Premier Trimestre",
    "theme": "Le corps humain, la peau et les organes des sens",
    "obj": "Consolider et synthétiser l'ensemble des connaissances acquises durant le premier trimestre (corps, membres, peau, œil, oreille, hygiène).",
    "doc_ref": "Programme officiel Connaissances Usuelles 9e (FRA / FRM)",
    "support": "Tableau récapitulatif, schémas bilan du corps, de la peau et des sens",
    "seance_str": "10 / 11",
    "duree_str": "30 minutes",
    "duree_rev": "3 min",
    "rev_teacher": "Durant ce premier trimestre, nous avons étudié le corps et les sens. Quelles sont les 3 grandes parties du corps ?",
    "rev_students": "R.A. : La tête, le tronc et les membres (supérieurs et inférieurs).",
    "duree_lecon": "22 min",
    "mis_teacher": "Nous arrivons à la fin du trimestre. Qui peut citer les 3 organes ou sens principaux que nous avons découverts en profondeur ?",
    "mis_students": "R.A. : Nous avons étudié les membres, la peau (le toucher), l'œil (la vue) et l'oreille (l'ouïe).",
    "mis_tech": "Brainstorming récapitulatif",
    "mis_supp": "Tableau noir",
    "pres_teacher": "Aujourd'hui, nous faisons la révision complète du Premier Trimestre pour préparer l'examen.",
    "pres_students": "Écoutent attentivement.",
    "pres_tech": "Expositive",
    "pres_supp": "Tableau noir",
    "obs_teacher": "Observez ce grand tableau bilan réunissant les 3 thèmes du trimestre : 1) Le corps et les articulations, 2) La peau et l'hygiène, 3) La vue et l'audition.",
    "obs_students": "Observent les 3 colonnes récapitulatives au tableau.",
    "obs_tech": "Observation de tableau de synthèse",
    "obs_supp": "Tableau de synthèse",
    "obs_obs": "Vérifier la bonne mémorisation des articulations et des règles d'hygiène.",
    "ana_q_ra_list": [
        ("Quelles sont les 3 articulations du bras et les 3 articulations de la jambe ?",
         "R.A. : Bras : épaule, coude, poignet. Jambe : hanche, genou, cheville."),
        ("Quelles sont les deux couches de la peau et le rôle des pores ?",
         "R.A. : L'épiderme (en surface) et le derme (en profondeur). Les pores évacuent la sueur."),
        ("Quels sont les parasites de la peau et comment s'en protéger ?",
         "R.A. : Les poux, puces et punaises. On s'en protège par la propreté quotidienne et le repassage des vêtements."),
        ("Quelles sont les parties protectrices et visuelles de l'œil ?",
         "R.A. : Protection : sourcils, paupières, cils. Vision : blanc de l'œil, iris et pupille."),
        ("Quelles sont les trois parties de l'oreille et quelle règle d'or protège le tympan ?",
         "R.A. : Le pavillon, le conduit auditif et le tympan. Règle d'or : ne JAMAIS introduire d'objet pointu dans l'oreille.")
    ],
    "ana_tech": "Dialogue socratique / Révision interactive",
    "ana_supp": "Tableau noir",
    "syn_teacher": "Donc, nous avons appris à connaître notre corps, à comprendre le fonctionnement de nos articulations, de notre peau, de nos yeux et de nos oreilles, et à appliquer les règles d'hygiène pour grandir en pleine santé.",
    "syn_students": "Écoutent la synthèse globale du trimestre.",
    "syn_tech": "Synthèse magistrale",
    "syn_supp": "Tableau noir",
    "app_exercises_teacher": [
        "1. Citez les 3 organes des sens étudiés ce trimestre et le sens associé à chacun.",
        "2. Donnez 3 règles d'or d'hygiène quotidienne."
    ],
    "app_corriges_students": [
        ("1. La peau (", "le toucher", "), l'œil (", "la vue", ") et l'oreille (", "l'ouïe / l'audition", ")."),
        ("2. Règles d'or : ", "se laver les mains au savon, laver le corps et couper les ongles, lire à 30 cm sous bonne lumière", ".")
    ],
    "app_tech": "Pratique collective",
    "app_supp": "Ardoise",
    "duree_eval": "5 min",
    "eval_exercises_teacher": [
        "1. Donnez le nom de l'articulation entre le bras et l'avant-bras, et entre la cuisse et la jambe.",
        "2. Comment s'appelle la couche superficielle de la peau ?"
    ],
    "eval_corriges_students": [
        ("1. Entre bras et avant-bras : ", "le coude", " ; entre cuisse et jambe : ", "le genou", "."),
        ("2. La couche superficielle est ", "l'épiderme", ".")
    ],
    "eval_tech": "Contrôle écrit flash",
    "eval_supp": "Cahier de classe",
    "lesson_sections": [
        {
            "title": "1. Synthèse thématique 1 : Le corps humain et les membres",
            "paragraphs": [
                [("• Le corps comprend la ", False, C_DARK), ("tête", True, C_BLUE), (", le ", False, C_DARK), ("tronc", True, C_BLUE), (" (poitrine et ventre, relié par le cou) et ", False, C_DARK), ("4 membres", True, C_BLUE), (".", False, C_DARK)],
                [("• Membre supérieur : bras, avant-bras, main (5 doigts). Articulations : ", False, C_DARK), ("épaule, coude, poignet", True, C_BLUE), (".", False, C_DARK)],
                [("• Membre inférieur : cuisse, jambe, pied (5 orteils). Articulations : ", False, C_DARK), ("hanche, genou, cheville", True, C_BLUE), (".", False, C_DARK)]
            ]
        },
        {
            "title": "2. Synthèse thématique 2 : La peau et son hygiène",
            "paragraphs": [
                [("• Constitution : ", False, C_DARK), ("l'épiderme", True, C_BLUE), (" (surface avec poils et pores) et ", False, C_DARK), ("le derme", True, C_BLUE), (" (profondeur).", False, C_DARK)],
                [("• Rôles : barrière protectrice, élimination de la sueur, organe du sens du ", False, C_DARK), ("toucher", True, C_BLUE), (".", False, C_DARK)],
                [("• Parasites et hygiène : éviter poux, puces et gale en se lavant chaque jour au savon et en portant des ", False, C_DARK), ("habits propres et repassés", True, C_BLUE), (".", False, C_DARK)]
            ]
        },
        {
            "title": "3. Synthèse thématique 3 : L'œil et l'oreille",
            "paragraphs": [
                [("• L'œil (la vue) : protégé par ", False, C_DARK), ("sourcils, paupières, cils", True, C_BLUE), (". La ", False, C_DARK), ("pupille", True, C_BLUE), (" laisse entrer la lumière. Règle : lire à 30 cm sous bon éclairage.", False, C_DARK)],
                [("• L'oreille (l'ouïe) : ", False, C_DARK), ("pavillon, conduit auditif, tympan", True, C_BLUE), (" qui vibre. Règle : ne jamais introduire d'objet pointu.", False, C_DARK)]
            ]
        }
    ],
    "image_path": "squelette_humain.png",
        "image_legend": "Schéma Bilan T1 : Synthèse anatomique du Premier Trimestre",
    "image_legend": "Schéma Bilan T1 : Synthèse anatomique du Premier Trimestre",
    "exercices_page": [
        {
            "num": "Exercice 1",
            "title": "Grand tableau récapitulatif du trimestre",
            "bareme": "10 points (2 pts par ligne)",
            "lines": [
                "Complétez chaque ligne avec l'organe ou le terme correspondant :",
                "1. Organe du sens de la vue : ____________________",
                "2. Organe du sens de l'ouïe : ____________________",
                "3. Organe du sens du toucher : ____________________",
                "4. Articulation reliant le bras à l'avant-bras : ____________________",
                "5. Articulation reliant la jambe au pied : ____________________"
            ]
        },
        {
            "num": "Exercice 2",
            "title": "Quiz de révision générale",
            "bareme": "10 points (2,5 pts par question)",
            "lines": [
                "Entourez la bonne réponse :",
                "a) Les pores de la peau servent à : 1) Respirer sous l'eau  2) Évacuer la sueur  3) Entendre les sons",
                "b) Pour tuer les parasites sur le linge, on doit : 1) Le mouiller  2) Le repasser au fer chaud  3) Le cacher",
                "c) La membrane fragile qui vibre dans l'oreille est : 1) L'iris  2) Le derme  3) Le tympan",
                "d) La distance recommandée pour lire sans fatiguer les yeux est : 1) 5 cm  2) 30 cm  3) 2 mètres"
            ]
        }
    ],
    "corriges_page": [
        {
            "num": "Exercice 1",
            "title": "Grand tableau récapitulatif du trimestre",
            "bareme": "10 points",
            "answers": [
                [("1. Sens de la vue : ", False, C_DARK), ("L'œil", True, C_CORR), (" (2 pts)", False, C_GRAY_TEXT)],
                [("2. Sens de l'ouïe : ", False, C_DARK), ("L'oreille", True, C_CORR), (" (2 pts)", False, C_GRAY_TEXT)],
                [("3. Sens du toucher : ", False, C_DARK), ("La peau", True, C_CORR), (" (2 pts)", False, C_GRAY_TEXT)],
                [("4. Bras / avant-bras : ", False, C_DARK), ("Le coude", True, C_CORR), (" (2 pts)", False, C_GRAY_TEXT)],
                [("5. Jambe / pied : ", False, C_DARK), ("La cheville", True, C_CORR), (" (2 pts)", False, C_GRAY_TEXT)]
            ]
        },
        {
            "num": "Exercice 2",
            "title": "Quiz de révision générale",
            "bareme": "10 points",
            "answers": [
                [("a) Les pores servent à : ", False, C_DARK), ("2) Évacuer la sueur", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                [("b) Tuer les parasites du linge : ", False, C_DARK), ("2) Le repasser au fer chaud", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                [("c) Membrane qui vibre : ", False, C_DARK), ("3) Le tympan", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                [("d) Distance pour lire : ", False, C_DARK), ("2) 30 cm", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
            ]
        }
    ]
}

exam_session_11 = {
    "seance_num": 11,
    "titre": "Sujet d'examen — Premier Trimestre (SVT 9e)",
    "theme": "Évaluation sommative du Premier Trimestre",
    "bareme_total": "20 points",
    "parties": [
        {
            "titre": "Partie I : Le corps humain et les membres (5 points)",
            "questions": [
                "1. Citez les 3 grandes parties du corps humain. (1,5 pt)",
                "2. Nommez les 3 articulations du membre supérieur. (1,5 pt)",
                "3. Complétez : L'articulation reliant la cuisse à la jambe est le __________ , et celle reliant la jambe au pied est la __________ . (2 pts)"
            ],
            "corriges": [
                [("1. Les 3 grandes parties sont : ", False, C_DARK), ("la tête, le tronc et les membres", True, C_CORR), (" (1,5 pt).", False, C_GRAY_TEXT)],
                [("2. Les 3 articulations du bras : ", False, C_DARK), ("l'épaule, le coude et le poignet", True, C_CORR), (" (1,5 pt).", False, C_GRAY_TEXT)],
                [("3. Cuisse à jambe : ", False, C_DARK), ("le genou", True, C_CORR), (" (1 pt) ; jambe au pied : ", False, C_DARK), ("la cheville", True, C_CORR), (" (1 pt).", False, C_GRAY_TEXT)]
            ]
        },
        {
            "titre": "Partie II : La peau et ses parasites (5 points)",
            "questions": [
                "1. Quelles sont les deux couches superposées de la peau ? (1,5 pt)",
                "2. À quoi servent les pores situés sur l'épiderme ? (1,5 pt)",
                "3. Donnez deux gestes d'hygiène essentiels pour éviter d'attraper des poux ou la gale. (2 pts)"
            ],
            "corriges": [
                [("1. Les deux couches sont : ", False, C_DARK), ("l'épiderme (en surface) et le derme (en profondeur)", True, C_CORR), (" (1,5 pt).", False, C_GRAY_TEXT)],
                [("2. Les pores permettent d'", False, C_DARK), ("évacuer la sueur (transpiration)", True, C_CORR), (" pour rafraîchir le corps et rejeter les toxines (1,5 pt).", False, C_GRAY_TEXT)],
                [("3. Deux gestes : ", False, C_DARK), ("se laver le corps tous les jours au savon", True, C_CORR), (" et ", False, C_DARK), ("porter des vêtements propres et repassés au fer", True, C_CORR), (" (2 pts).", False, C_GRAY_TEXT)]
            ]
        },
        {
            "titre": "Partie III : L'œil et le sens de la vue (5 points)",
            "questions": [
                "1. Citez 2 éléments qui protègent l'œil à l'extérieur. (1,5 pt)",
                "2. Comment s'appelle le trou noir au centre de l'œil qui laisse entrer la lumière ? (1,5 pt)",
                "3. Pourquoi ne doit-on jamais se frotter les yeux avec des mains sales ? (2 pts)"
            ],
            "corriges": [
                [("1. Deux éléments protecteurs : ", False, C_DARK), ("les sourcils, les paupières ou les cils", True, C_CORR), (" (1,5 pt).", False, C_GRAY_TEXT)],
                [("2. Le trou noir central est ", False, C_DARK), ("la pupille", True, C_CORR), (" (1,5 pt).", False, C_GRAY_TEXT)],
                [("3. Parce que les mains sales ", False, C_DARK), ("transportent des microbes qui causent la conjonctivite (infection des yeux)", True, C_CORR), (" (2 pts).", False, C_GRAY_TEXT)]
            ]
        },
        {
            "titre": "Partie IV : L'oreille et l'audition (5 points)",
            "questions": [
                "1. Quelles sont les trois parties qui composent l'oreille ? (1,5 pt)",
                "2. Quel est le rôle de la membrane du tympan ? (1,5 pt)",
                "3. Pourquoi est-il strictement interdit d'enfoncer des objets pointus (allumettes, plumes) dans l'oreille ? (2 pts)"
            ],
            "corriges": [
                [("1. Les trois parties sont : ", False, C_DARK), ("le pavillon, le conduit auditif et le tympan", True, C_CORR), (" (1,5 pt).", False, C_GRAY_TEXT)],
                [("2. Le tympan ", False, C_DARK), ("vibre sous l'effet des ondes sonores", True, C_CORR), (" et transmet les sons (1,5 pt).", False, C_GRAY_TEXT)],
                [("3. On risque de ", False, C_DARK), ("percer le tympan et de devenir sourd définitivement (surdité)", True, C_CORR), (" (2 pts).", False, C_GRAY_TEXT)]
            ]
        }
    ]
}
