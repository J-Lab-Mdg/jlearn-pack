# -*- coding: utf-8 -*-
from constants import C_RED, C_GREEN, C_BLUE, C_CORR, C_DARK, C_EMERALD, C_GRAY_TEXT

sessions_t3 = [
    # -------------------------------------------------------------------------
    # SÉANCE 22 (Mois 7, Semaine 18)
    # -------------------------------------------------------------------------
    {
        "seance_num": 22,
        "titre": "L'appareil respiratoire et son fonctionnement",
        "theme": "La respiration",
        "obj": "Citer les organes de l'appareil respiratoire (nez, trachée, bronches, poumons) et décrire les deux temps de la respiration (inspiration et expiration).",
        "doc_ref": "Programme officiel Connaissances Usuelles 9e (FRA / FRM)",
        "support": "Schéma de l'appareil respiratoire / Observation de la cage thoracique",
        "seance_str": "22 / 33",
        "duree_str": "30 minutes",
        "duree_rev": "3 min",
        "rev_teacher": "Citez les 3 états de l'eau et une méthode pour rendre l'eau potable.",
        "rev_students": "R.A. : Solide, liquide, gazeux. Faire bouillir l'eau 10 minutes ou utiliser Sur'Eau.",
        "duree_lecon": "22 min",
        "mis_teacher": "Posez vos mains sur votre poitrine et respirez profondément. Que fait votre poitrine ?",
        "mis_students": "R.A. : La poitrine se gonfle quand l'air entre, puis elle s'abaisse quand l'air sort.",
        "mis_tech": "Expérimentation corporelle",
        "mis_supp": "Poitrine des élèves",
        "pres_teacher": "Aujourd'hui, nous allons apprendre : « L'appareil respiratoire et son fonctionnement ». Après cette séance, vous saurez nommer les organes qui nous permettent de respirer.",
        "pres_students": "Écoutent attentivement.",
        "pres_tech": "Expositive",
        "pres_supp": "Tableau noir",
        "obs_teacher": "Regardez ce schéma : l'air entre par le nez, descend dans la trachée, se divise dans les deux bronches et remplit les deux poumons logés dans la poitrine.",
        "obs_students": "Observent le trajet de l'air sur le schéma.",
        "obs_tech": "Observation de planche anatomique",
        "obs_supp": "Schéma de l'appareil respiratoire",
        "obs_obs": "Faire repérer les deux poumons droit et gauche.",
        "ana_q_ra_list": [
            ("Quels sont les organes qui composent l'appareil respiratoire ?",
             "R.A. : Le nez (les narines), la trachée-artère, les bronches et les deux poumons (poumon droit et poumon gauche)."),
            ("Où sont logés les deux poumons ?",
             "R.A. : Les poumons sont logés dans la poitrine (la cage thoracique), protégés par les côtes."),
            ("Qu'est-ce que l'inspiration ?",
             "R.A. : L'inspiration est le temps où l'air frais riche en oxygène entre par le nez et gonfle les poumons (la poitrine se soulève)."),
            ("Qu'est-ce que l'expiration ?",
             "R.A. : L'expiration est le temps où l'air vicié et chaud est rejeté hors des poumons (la poitrine s'abaisse)."),
            ("Pourquoi doit-on toujours respirer par le nez et non par la bouche ?",
             "R.A. : Parce que les poils et l'humidité du nez arrêtent les poussières et réchauffent l'air avant qu'il n'arrive aux poumons.")
        ],
        "ana_tech": "Analyse guidée / Déduction biologique",
        "ana_supp": "Schéma respiratoire",
        "syn_teacher": "Donc, l'appareil respiratoire comprend le nez, la trachée, les bronches et les deux poumons. La respiration se fait en deux temps : l'inspiration (l'air entre et gonfle la poitrine) et l'expiration (l'air vicié sort et la poitrine s'abaisse). Il faut respirer par le nez.",
        "syn_students": "Écoutent la synthèse et pratiquent une inspiration/expiration calme.",
        "syn_tech": "Synthèse magistrale",
        "syn_supp": "Tableau noir",
        "app_exercises_teacher": [
            "1. Citez les deux mouvements de la respiration.",
            "2. Quels organes vitaux se gonflent d'air dans la poitrine ?"
        ],
        "app_corriges_students": [
            ("1. Les 2 mouvements : ", "l'inspiration (l'air entre) et l'expiration (l'air sort)", "."),
            ("2. Ce sont ", "les deux poumons", ".")
        ],
        "app_tech": "Pratique sur ardoise",
        "app_supp": "Ardoise",
        "duree_eval": "5 min",
        "eval_exercises_teacher": [
            "1. Remettez dans l'ordre le trajet de l'air inspiré : Poumons, Nez, Bronches, Trachée.",
            "2. Pourquoi est-il meilleur de respirer par le nez que par la bouche ?"
        ],
        "eval_corriges_students": [
            ("1. Trajet : 1. ", "Nez", " -> 2. ", "Trachée", " -> 3. ", "Bronches", " -> 4. ", "Poumons", "."),
            ("2. Les poils du nez ", "filtrent les poussières et réchauffent l'air", ".")
        ],
        "eval_tech": "Évaluation écrite sur cahier",
        "eval_supp": "Cahier de classe",
        "lesson_sections": [
            {
                "title": "1. Les organes de l'appareil respiratoire",
                "paragraphs": [
                    [("La respiration est un besoin vital permanent. L'appareil respiratoire comprend :", False, C_DARK)],
                    [("• ", False, C_DARK), ("Le nez (les fosses nasales)", True, C_BLUE), (" : porte d'entrée de l'air. Ses poils retiennent les poussières et microbes.", False, C_DARK)],
                    [("• ", False, C_DARK), ("La trachée-artère", True, C_BLUE), (" : tube cartilagineux qui fait descendre l'air dans la poitrine.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Les bronches", True, C_BLUE), (" : deux conduits qui pénètrent dans chaque poumon.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Les deux poumons", True, C_BLUE), (" : organes roses spongieux et élastiques protégés par les côtes.", False, C_DARK)]
                ]
            },
            {
                "title": "2. Les mouvements respiratoires",
                "paragraphs": [
                    [("• ", False, C_DARK), ("L'inspiration", True, C_BLUE), (" : l'air pur pénètre dans les poumons, la cage thoracique se dilate et se soulève.", False, C_DARK)],
                    [("• ", False, C_DARK), ("L'expiration", True, C_BLUE), (" : l'air chargé de gaz carbonique est chassé des poumons, la poitrine s'abaisse.", False, C_DARK)]
                ]
            },
            {
                "title": "3. À retenir",
                "paragraphs": [
                    [("L'air passe par le ", False, C_DARK), ("nez, la trachée, les bronches et les poumons", True, C_BLUE), (". Je respire toujours par le nez. ", False, C_DARK), ("L'inspiration", True, C_BLUE), (" fait entrer l'air pur et ", False, C_DARK), ("l'expiration", True, C_BLUE), (" rejette l'air vicié.", False, C_DARK)]
                ]
            }
        ],
        "image_path": "appareil_respiratoire.png",
        "image_legend": "Schéma 22 : L'appareil respiratoire (fosses nasales, trachée, bronches, poumons)",
        "exercices_page": [
            {
                "num": "Exercice 1",
                "title": "Le chemin de l'air",
                "bareme": "10 points (2,5 pts par organe)",
                "lines": [
                    "Complétez le texte avec : Trachée, Poumons, Nez, Bronches.",
                    "L'air pur entre par le __________ où il est filtré par les poils. Il descend ensuite dans la __________ , puis se sépare dans les deux __________ pour gonfler les deux __________ situés dans la poitrine."
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur la respiration",
                "bareme": "10 points (2,5 pts par item)",
                "lines": [
                    "Écrivez « Vrai » ou « Faux » :",
                    "1. Pendant l'inspiration, les poumons se vident complètement. [ _____ ]",
                    "2. Les poumons sont logés dans la poitrine et protégés par les côtes. [ _____ ]",
                    "3. Les poils du nez filtrent les poussières de l'air. [ _____ ]",
                    "4. L'expiration permet de faire entrer de l'oxygène frais. [ _____ ]"
                ]
            }
        ],
        "corriges_page": [
            {
                "num": "Exercice 1",
                "title": "Le chemin de l'air",
                "bareme": "10 points",
                "answers": [
                    [("Entre par : ", False, C_DARK), ("Nez", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("Descend dans : ", False, C_DARK), ("Trachée", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("Sépare dans : ", False, C_DARK), ("Bronches", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("Gonfle les : ", False, C_DARK), ("Poumons", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur la respiration",
                "bareme": "10 points",
                "answers": [
                    [("1. Inspiration vide les poumons : ", False, C_DARK), ("Faux", True, C_CORR), (" (elle les gonfle) (2,5 pts)", False, C_GRAY_TEXT)],
                    [("2. Poumons dans la poitrine : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("3. Poils du nez filtrent : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("4. Expiration fait entrer l'oxygène : ", False, C_DARK), ("Faux", True, C_CORR), (" (elle rejette l'air vicié) (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            }
        ]
    },

    # -------------------------------------------------------------------------
    # SÉANCE 23 (Mois 7, Semaine 19)
    # -------------------------------------------------------------------------
    {
        "seance_num": 23,
        "titre": "L'hygiène respiratoire et les maladies infantiles",
        "theme": "Santé & Prévention",
        "obj": "Connaître les règles d'hygiène de l'appareil respiratoire, distinguer les maladies infantiles contagieuses (rougeole, varicelle, coqueluche) et comprendre l'importance de la vaccination.",
        "doc_ref": "Programme officiel Connaissances Usuelles 9e (FRA / FRM)",
        "support": "Carnet de santé / Schéma des boutons de rougeole et varicelle",
        "seance_str": "23 / 33",
        "duree_str": "30 minutes",
        "duree_rev": "3 min",
        "rev_teacher": "Quels sont les organes de l'appareil respiratoire ?",
        "rev_students": "R.A. : Le nez, la trachée, les bronches et les deux poumons.",
        "duree_lecon": "22 min",
        "mis_teacher": "Que faites-vous quand vous éternuez ou toussez en classe ?",
        "mis_students": "R.A. : Nous mettons le creux du coude ou un mouchoir propre devant la bouche pour ne pas contaminer les camarades.",
        "mis_tech": "Mise en situation quotidienne",
        "mis_supp": "Élèves en classe",
        "pres_teacher": "Aujourd'hui, nous allons apprendre : « L'hygiène respiratoire et les maladies infantiles ». Après cette séance, vous connaîtrez la rougeole, la varicelle, la coqueluche et le rôle des vaccins.",
        "pres_students": "Écoutent la présentation.",
        "pres_tech": "Expositive",
        "pres_supp": "Tableau noir",
        "obs_teacher": "Observez ce carnet de vaccination avec les dates de vaccins et les illustrations de boutons de rougeole et de varicelle.",
        "obs_students": "Observent le carnet de santé et les images.",
        "obs_tech": "Observation de documents de santé",
        "obs_supp": "Carnet de santé",
        "obs_obs": "Montrer que le vaccin protège pour toute la vie.",
        "ana_q_ra_list": [
            ("Quelles sont les maladies contagieuses courantes chez les enfants ?",
             "R.A. : La rougeole (*kitrotro*), la varicelle et la coqueluche (*kohaka mandany*)."),
            ("Quels sont les signes de la rougeole et de la varicelle ?",
             "R.A. : Rougeole : forte fièvre, yeux rouges qui pleurent, toux et boutons rouges partout sur le corps. Varicelle : cloques d'eau qui démangent puis forment des croûtes."),
            ("Qu'est-ce que la coqueluche ?",
             "R.A. : Une maladie respiratoire grave provoquant des quintes de toux violentes qui coupent le souffle de l'enfant."),
            ("Comment ces maladies se transmettent-elles ?",
             "R.A. : Par l'air, la toux, les éternuements et le contact direct avec un malade."),
            ("Quel est le meilleur moyen d'être protégé contre ces maladies mortelles ?",
             "R.A. : La vaccination obligatoire dès le plus jeune âge au centre de santé (CSB).")
        ],
        "ana_tech": "Analyse médicale simple / Prévention vaccinale",
        "ana_supp": "Tableau noir",
        "syn_teacher": "Donc, la rougeole, la varicelle et la coqueluche sont des maladies infantiles très contagieuses transmises par la toux. Pour les éviter, il faut aérer les chambres, mettre son coude en toussant et se faire vacciner au centre de santé.",
        "syn_students": "Écoutent la synthèse et retiennent l'importance du carnet vaccinal.",
        "syn_tech": "Synthèse magistrale",
        "syn_supp": "Tableau noir",
        "app_exercises_teacher": [
            "1. Citez 3 maladies infantiles contagieuses.",
            "2. Quel geste barrière fait-on lorsqu'on tousse en public ?"
        ],
        "app_corriges_students": [
            ("1. Les 3 maladies : ", "la rougeole, la varicelle et la coqueluche", "."),
            ("2. On tousse dans ", "le pli de son coude ou dans un mouchoir jetable", ".")
        ],
        "app_tech": "Pratique sur ardoise",
        "app_supp": "Ardoise",
        "duree_eval": "5 min",
        "eval_exercises_teacher": [
            "1. Associez chaque maladie à son signe : a) Rougeole / b) Varicelle / c) Coqueluche -> 1) Quintes de toux étouffantes / 2) Boutons rouges avec yeux qui larmoient / 3) Petites vésicules (bulles d'eau) qui démangent.",
            "2. Que contient le carnet de santé de l'enfant pour le protéger des maladies ?"
        ],
        "eval_corriges_students": [
            ("1. a) Rougeole -> ", "2 (boutons rouges et yeux)", " ; b) Varicelle -> ", "3 (bulles d'eau)", " ; c) Coqueluche -> ", "1 (quintes de toux)", "."),
            ("2. Il contient ", "les vaccins obligatoires administrés au CSB", ".")
        ],
        "eval_tech": "Contrôle écrit sur cahier",
        "eval_supp": "Cahier de classe",
        "lesson_sections": [
            {
                "title": "1. Les principales maladies infantiles contagieuses",
                "paragraphs": [
                    [("Ces maladies très contagieuses se transmettent par les gouttelettes de salive projetées dans l'air :", False, C_DARK)],
                    [("• ", False, C_DARK), ("La rougeole (*kitrotro*)", True, C_BLUE), (" : forte fièvre, nez qui coule, yeux rouges et éruption de petites taches rouges sur tout le corps. Elle est très dangereuse.", False, C_DARK)],
                    [("• ", False, C_DARK), ("La varicelle", True, C_BLUE), (" : boutons qui se remplissent d'un liquide transparent (cloques), éclatent et sèchent en croûtes.", False, C_DARK)],
                    [("• ", False, C_DARK), ("La coqueluche (*kohaka mandany*)", True, C_BLUE), (" : violentes quintes de toux répétées qui empêchent de respirer.", False, C_DARK)]
                ]
            },
            {
                "title": "2. Protection et rôle des vaccins",
                "paragraphs": [
                    [("• ", False, C_DARK), ("Le vaccin", True, C_BLUE), (" est le moyen le plus efficace et sûr pour protéger l'enfant à vie contre les maladies graves.", False, C_DARK)],
                    [("• Isoler le malade pour ne pas contaminer les autres élèves de l'école.", False, C_DARK)],
                    [("• Aérer quotidiennement la maison et faire du sport en plein air.", False, C_DARK)]
                ]
            },
            {
                "title": "3. À retenir",
                "paragraphs": [
                    [("La rougeole, la varicelle et la coqueluche sont contagieuses. ", False, C_DARK), ("La vaccination au centre de santé (CSB)", True, C_BLUE), (" sauve des vies et me protège. Je tousse toujours dans mon coude.", False, C_DARK)]
                ]
            }
        ],
        "image_path": "appareil_respiratoire.png",
        "image_legend": "Schéma 23 : Hygiène respiratoire, aération et vaccination infantile (BCG)",
        "exercices_page": [
            {
                "num": "Exercice 1",
                "title": "Reconnaître les maladies d'enfants",
                "bareme": "10 points (2,5 pts par question)",
                "lines": [
                    "Complétez avec : Vaccin, Coqueluche, Rougeole, Varicelle.",
                    "a) La maladie qui donne des boutons rouges et de la forte fièvre est la __________ .",
                    "b) Les petites cloques remplies de liquide clair sont caractéristiques de la __________ .",
                    "c) Les quintes de toux violentes et douloureuses sont le signe de la __________ .",
                    "d) L'injection protectrice faite au dispensaire est le __________ ."
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur la contagion",
                "bareme": "10 points (2,5 pts par item)",
                "lines": [
                    "Écrivez « Vrai » ou « Faux » :",
                    "1. La rougeole se transmet par les postillons et l'air que nous respirons. [ _____ ]",
                    "2. Les vaccins sont inutiles et ne protègent pas les enfants. [ _____ ]",
                    "3. Un enfant malade de rougeole doit rester à la maison et se reposer. [ _____ ]",
                    "4. Tousser dans ses mains puis toucher les cahiers des amis est un bon geste. [ _____ ]"
                ]
            }
        ],
        "corriges_page": [
            {
                "num": "Exercice 1",
                "title": "Reconnaître les maladies d'enfants",
                "bareme": "10 points",
                "answers": [
                    [("a) Boutons rouges et fièvre : ", False, C_DARK), ("Rougeole", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("b) Petites cloques liquides : ", False, C_DARK), ("Varicelle", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("c) Quintes de toux violentes : ", False, C_DARK), ("Coqueluche", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("d) Injection protectrice : ", False, C_DARK), ("Vaccin", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur la contagion",
                "bareme": "10 points",
                "answers": [
                    [("1. Rougeole transmise par l'air : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("2. Vaccins inutiles : ", False, C_DARK), ("Faux", True, C_CORR), (" (ils sont indispensables pour sauver des vies) (2,5 pts)", False, C_GRAY_TEXT)],
                    [("3. Enfant malade reste au repos : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("4. Tousser dans ses mains bon geste : ", False, C_DARK), ("Faux", True, C_CORR), (" (tousser dans le creux du coude) (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            }
        ]
    },

    # -------------------------------------------------------------------------
    # SÉANCE 24 (Mois 8, Semaine 20)
    # -------------------------------------------------------------------------
    {
        "seance_num": 24,
        "titre": "Le paludisme : transmission, prévention et traitement",
        "theme": "Épidémiologie & Santé à Madagascar",
        "obj": "Reconnaître les symptômes du paludisme (tazo mahery), identifier l'anophèle femelle, appliquer les moyens de prévention (moustiquaire imprégnée MILDA, élimination des eaux stagnantes) et suivre le traitement précoce au CSB.",
        "doc_ref": "Programme officiel Connaissances Usuelles 9e (FRA / FRM)",
        "support": "Moustiquaire imprégnée, schéma du cycle du paludisme (paludisme_cycle.png), moustique anophèle",
        "seance_str": "24 / 33",
        "duree_str": "30 minutes",
        "duree_rev": "3 min",
        "rev_teacher": "Citez deux maladies infantiles très contagieuses évitées grâce aux vaccins.",
        "rev_students": "R.A. : La rougeole et la coqueluche.",
        "duree_lecon": "22 min",
        "mis_teacher": "À la tombée de la nuit, quel petit insecte volant pique et bourdonne aux oreilles ? Quelle maladie grave sa piqûre donne-t-elle ?",
        "mis_students": "R.A. : C'est le moustique. Sa piqûre peut transmettre le paludisme (*tazo mahery*).",
        "mis_tech": "Mise en situation quotidienne",
        "mis_supp": "Moustiquaire / Environnement",
        "pres_teacher": "Aujourd'hui, nous allons apprendre : « Le paludisme : transmission, prévention et traitement ». Après cette séance, vous saurez comment éviter les piqûres de moustiques et lutter contre le paludisme.",
        "pres_students": "Écoutent la présentation.",
        "pres_tech": "Expositive",
        "pres_supp": "Tableau noir",
        "obs_teacher": "Regardez ce schéma du cycle du paludisme : le moustique anophèle pique une personne malade, prend le parasite et le transmet en piquant une personne saine.",
        "obs_students": "Observent le cycle de transmission sur le schéma.",
        "obs_tech": "Observation scientifique",
        "obs_supp": "Planche du paludisme (paludisme_cycle.png)",
        "obs_obs": "Montrer que seul le moustique anophèle femelle transmet le paludisme.",
        "ana_q_ra_list": [
            ("Quel est l'insecte responsable de la transmission du paludisme ?",
             "R.A. : C'est la femelle du moustique appelée l'anophèle, qui pique principalement pendant la nuit."),
            ("Quels sont les symptômes et signes du paludisme (*tazo mahery*) ?",
             "R.A. : Forte fièvre, frissons intenses, maux de tête, sueurs abondantes, fatigue et parfois vomissements."),
            ("Où les moustiques pondent-ils leurs œufs et se multiplient-ils ?",
             "R.A. : Dans les eaux stagnantes : flaques d'eau, vieux pneus, boîtes de conserve abandonnées, caniveaux bouchés."),
            ("Comment se protéger efficacement contre les piqûres de moustiques ?",
             "R.A. : Dormir TOUTES les nuits sous une moustiquaire imprégnée d'insecticide (MILDA), assainir la cour et porter des vêtements longs le soir."),
            ("Que doit-on faire dès l'apparition de fièvre chez un enfant ?",
             "R.A. : L'emmener immédiatement au centre de santé (CSB) pour faire un test rapide (TDR) et prendre les médicaments antipaludiques.")
        ],
        "ana_tech": "Analyse médicale et environnementale",
        "ana_supp": "Schéma et moustiquaire",
        "syn_teacher": "Donc, le paludisme est une maladie grave transmise par la piqûre du moustique anophèle. Pour s'en protéger : dormir toujours sous moustiquaire imprégnée MILDA, éliminer toutes les eaux stagnantes autour de la case et consulter vite au CSB en cas de fièvre.",
        "syn_students": "Écoutent la synthèse et s'engagent à dormir sous moustiquaire.",
        "syn_tech": "Synthèse magistrale",
        "syn_supp": "Tableau noir",
        "app_exercises_teacher": [
            "1. Citez 2 signes du paludisme chez l'enfant.",
            "2. Où doit-on jeter les boîtes de conserve vides pour éviter les moustiques ?"
        ],
        "app_corriges_students": [
            ("1. Signes : ", "forte fièvre et frissons (avec maux de tête et sueurs)", "."),
            ("2. Il faut ", "les enterrer ou les trouer pour que l'eau de pluie ne s'y accumule pas", ".")
        ],
        "app_tech": "Pratique sur ardoise",
        "app_supp": "Ardoise",
        "duree_eval": "5 min",
        "eval_exercises_teacher": [
            "1. Comment s'appelle le moustique qui transmet le paludisme ?",
            "2. Cochez les bons moyens de prévention : a) Laisser des flaques d'eau devant la porte. b) Dormir sous moustiquaire imprégnée MILDA. c) Vider les vieux pneus remplis d'eau. d) Refuser d'aller au CSB."
        ],
        "eval_corriges_students": [
            ("1. C'est ", "l'anophèle femelle", "."),
            ("2. Bons moyens : ", "b) Dormir sous moustiquaire MILDA", " et ", "c) Vider les vieux pneus remplis d'eau", ".")
        ],
        "eval_tech": "Contrôle écrit individuel",
        "eval_supp": "Cahier de classe",
        "lesson_sections": [
            {
                "title": "1. La transmission et les symptômes du paludisme",
                "paragraphs": [
                    [("Le paludisme (*tazo mahery*) est une maladie parasitaire très répandue et dangereuse à Madagascar :", False, C_DARK)],
                    [("• Il est transmis par la piqûre de la femelle d'un moustique appelé ", False, C_DARK), ("l'anophèle", True, C_BLUE), (", qui pique entre le coucher et le lever du soleil.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Les symptômes", True, C_BLUE), (" : accès de forte fièvre, frissons, maux de tête, sueurs, courbatures et perte d'appétit.", False, C_DARK)]
                ]
            },
            {
                "title": "2. Les mesures de prévention et de traitement",
                "paragraphs": [
                    [("• ", False, C_DARK), ("La moustiquaire imprégnée (MILDA)", True, C_BLUE), (" : dormir chaque nuit, toute l'année, sous une moustiquaire sans trou bien bordée sous la natte.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Assainissement du village", True, C_BLUE), (" : boucher les flaques d'eau stagnante, désherber les abords des maisons, nettoyer les caniveaux et détruire les vieux récipients contenant de l'eau.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Traitement précoce au CSB", True, C_BLUE), (" : faire le test rapide (TDR) et prendre les comprimés antipaludiques prescrits par le soignant sans attendre.", False, C_DARK)]
                ]
            },
            {
                "title": "3. À retenir",
                "paragraphs": [
                    [("Le paludisme est transmis par ", False, C_DARK), ("l'anophèle", True, C_BLUE), (". Pour protéger ma famille, je ", False, C_DARK), ("dors chaque nuit sous moustiquaire imprégnée MILDA", True, C_BLUE), (" et j'élimine toutes les eaux stagnantes.", False, C_DARK)]
                ]
            }
        ],
        "image_path": "paludisme_cycle.png",
        "image_legend": "Schéma 24 : Cycle de transmission du paludisme par l'anophèle et prévention MILDA",
        "exercices_page": [
            {
                "num": "Exercice 1",
                "title": "Lutter contre le paludisme",
                "bareme": "10 points (2,5 pts par réponse)",
                "lines": [
                    "Complétez avec : Anophèle, MILDA, Fièvre, Eaux stagnantes.",
                    "a) Le moustique qui transmet le paludisme s'appelle l'__________ .",
                    "b) Le signe principal du paludisme est la forte __________ avec frissons.",
                    "c) Pour dormir en toute sécurité, on utilise une moustiquaire imprégnée __________ .",
                    "d) Les moustiques pondent leurs œufs dans les __________ autour des maisons."
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur le paludisme",
                "bareme": "10 points (2,5 pts par item)",
                "lines": [
                    "Écrivez « Vrai » ou « Faux » :",
                    "1. Le paludisme s'attrape en mangeant des fruits mûrs. [ _____ ]",
                    "2. Les moustiquaires imprégnées repoussent et tuent les moustiques. [ _____ ]",
                    "3. Vider les boîtes d'eau autour de la cour détruit les nids de moustiques. [ _____ ]",
                    "4. En cas de grosse fièvre, il faut attendre plusieurs jours avant de consulter. [ _____ ]"
                ]
            }
        ],
        "corriges_page": [
            {
                "num": "Exercice 1",
                "title": "Lutter contre le paludisme",
                "bareme": "10 points",
                "answers": [
                    [("a) Nom du moustique : ", False, C_DARK), ("Anophèle", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("b) Signe principal : ", False, C_DARK), ("Fièvre", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("c) Moustiquaire : ", False, C_DARK), ("MILDA", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("d) Nids de moustiques : ", False, C_DARK), ("Eaux stagnantes", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur le paludisme",
                "bareme": "10 points",
                "answers": [
                    [("1. Attrapé en mangeant fruits : ", False, C_DARK), ("Faux", True, C_CORR), (" (transmis par la piqûre de moustique) (2,5 pts)", False, C_GRAY_TEXT)],
                    [("2. Moustiquaires tuent moustiques : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("3. Vider boîtes détruit nids : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("4. Attendre avant de consulter : ", False, C_DARK), ("Faux", True, C_CORR), (" (aller immédiatement au CSB) (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            }
        ]
    },

    # -------------------------------------------------------------------------
    # SÉANCE 25 (Mois 8, Semaine 21)
    # -------------------------------------------------------------------------
    {
        "seance_num": 25,
        "titre": "Les différentes parties d'une plante et d'un arbre",
        "theme": "Le monde végétal",
        "obj": "Nommer les principales parties d'une plante et d'un arbre (racines, tige/tronc, branches, feuilles, fleurs, fruits, graines) et comprendre leur rôle vital.",
        "doc_ref": "Programme officiel Connaissances Usuelles 9e (FRA / FRM)",
        "support": "Plante entière déterrée avec racines, schéma des organes de la plante (plante_organes.png)",
        "seance_str": "25 / 33",
        "duree_str": "30 minutes",
        "duree_rev": "3 min",
        "rev_teacher": "Comment s'appelle le moustique qui transmet le paludisme et quel moyen de protection utilise-t-on la nuit ?",
        "rev_students": "R.A. : L'anophèle. On dort sous une moustiquaire imprégnée MILDA.",
        "duree_lecon": "22 min",
        "mis_teacher": "Regardez les arbres et les fleurs dans la cour de l'école. Quelles sont les parties d'une plante ?",
        "mis_students": "R.A. : Une plante a des racines sous terre, une tige ou un tronc, des feuilles vertes et des fleurs.",
        "mis_tech": "Observation directe dans la nature",
        "mis_supp": "Plante réelle",
        "pres_teacher": "Aujourd'hui, nous allons apprendre : « Les différentes parties d'une plante et d'un arbre ». Après cette séance, vous saurez nommer les organes végétaux et leurs rôles.",
        "pres_students": "Écoutent la présentation.",
        "pres_tech": "Expositive",
        "pres_supp": "Tableau noir",
        "obs_teacher": "Regardez cette plante complète et ce schéma : observez les racines cachées dans le sol, la tige droite, les feuilles étalées au soleil, la fleur et le fruit.",
        "obs_students": "Observent les différentes parties sur la plante et sur le schéma.",
        "obs_tech": "Observation guidée",
        "obs_supp": "Schéma de la plante (plante_organes.png)",
        "obs_obs": "Faire toucher les racines et les nervures des feuilles.",
        "ana_q_ra_list": [
            ("Où se trouvent les racines et à quoi servent-elles ?",
             "R.A. : Les racines sont sous terre. Elles fixent solidement la plante dans le sol et absorbent l'eau et les sels minéraux."),
            ("À quoi sert la tige (ou le tronc chez l'arbre) ?",
             "R.A. : La tige porte les branches et les feuilles, et transporte la sève (l'eau nourricière) des racines jusqu'aux feuilles."),
            ("Quel est le rôle des feuilles vertes ?",
             "R.A. : Les feuilles captent la lumière du soleil pour fabriquer la nourriture de la plante et lui permettent de respirer."),
            ("Que devient la fleur après la floraison ?",
             "R.A. : La fleur se transforme en fruit qui contient les graines pour donner de nouvelles plantes."),
            ("Quelles différences y a-t-il entre une petite plante herbacée et un grand arbre ?",
             "R.A. : La plante a une tige verte souple, tandis que l'arbre a un tronc en bois dur et épais et vit de nombreuses années.")
        ],
        "ana_tech": "Analyse botanique / Déduction",
        "ana_supp": "Schéma et plante réelle",
        "syn_teacher": "Donc, une plante comprend : les racines (fixation et absorption d'eau), la tige ou le tronc (soutien et transport), les feuilles vertes (respiration et nutrition), et les fleurs qui produisent les fruits et les graines.",
        "syn_students": "Écoutent la synthèse et répètent les organes végétaux.",
        "syn_tech": "Synthèse magistrale",
        "syn_supp": "Tableau noir",
        "app_exercises_teacher": [
            "1. Citez les 4 parties principales d'une plante.",
            "2. Que trouve-t-on à l'intérieur d'un fruit ?"
        ],
        "app_corriges_students": [
            ("1. Les 4 parties : ", "les racines, la tige (ou tronc), les feuilles et les fleurs/fruits", "."),
            ("2. À l'intérieur du fruit se trouvent ", "les graines (ou pépins/noyaux) pour reproduire la plante", ".")
        ],
        "app_tech": "Pratique sur ardoise",
        "app_supp": "Ardoise",
        "duree_eval": "5 min",
        "eval_exercises_teacher": [
            "1. Associez chaque organe de la plante à son rôle : a) Racines / b) Tige / c) Feuilles -> 1) Captent la lumière du soleil / 2) Absorbent l'eau du sol / 3) Porte les branches et transporte la sève.",
            "2. Comment s'appelle la tige en bois épaisse d'un grand arbre ?"
        ],
        "eval_corriges_students": [
            ("1. a) Racines -> ", "2 (absorbent l'eau)", " ; b) Tige -> ", "3 (porte et transporte)", " ; c) Feuilles -> ", "1 (captent la lumière)", "."),
            ("2. C'est ", "le tronc", ".")
        ],
        "eval_tech": "Contrôle individuel écrit",
        "eval_supp": "Cahier de classe",
        "lesson_sections": [
            {
                "title": "1. Les organes de la plante",
                "paragraphs": [
                    [("Une plante complète est formée de plusieurs organes indispensables à sa vie :", False, C_DARK)],
                    [("• ", False, C_DARK), ("Les racines", True, C_BLUE), (" : enfoncées dans le sol, elles ancrent la plante et puisent l'eau et les nutriments de la terre.", False, C_DARK)],
                    [("• ", False, C_DARK), ("La tige (ou le tronc)", True, C_BLUE), (" : axe dressé qui soutient les feuilles et conduit la sève nourricière.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Les feuilles", True, C_BLUE), (" : organes verts étalés qui respirent et fabriquent la matière vivante grâce au soleil.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Les fleurs", True, C_BLUE), (" : organes de reproduction qui se transforment en ", False, C_DARK), ("fruits", True, C_BLUE), (" contenant les ", False, C_DARK), ("graines", True, C_BLUE), (".", False, C_DARK)]
                ]
            },
            {
                "title": "2. À retenir",
                "paragraphs": [
                    [("La plante vit grâce à ses ", False, C_DARK), ("racines, sa tige, ses feuilles et ses fleurs", True, C_BLUE), (". Les fruits protègent les graines qui donneront naissance à de nouvelles plantes.", False, C_DARK)]
                ]
            }
        ],
        "image_path": "plante_organes.png",
        "image_legend": "Schéma 25 : Les différentes parties d'une plante (racines, tige, feuilles, fleurs)",
        "exercices_page": [
            {
                "num": "Exercice 1",
                "title": "Anatomie de la plante",
                "bareme": "10 points (2,5 pts par réponse)",
                "lines": [
                    "Complétez avec les mots : Feuilles, Racines, Tronc, Graines.",
                    "a) Les __________ absorbent l'eau et les sels minéraux dans la terre.",
                    "b) Chez un grand arbre, la tige en bois solide s'appelle le __________ .",
                    "c) Les __________ vertes respirent et captent les rayons du soleil.",
                    "d) Les fruits renferment les __________ qui germeront pour donner d'autres plantes."
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur les végétaux",
                "bareme": "10 points (2,5 pts par item)",
                "lines": [
                    "Écrivez « Vrai » ou « Faux » :",
                    "1. Les racines d'une plante poussent vers le ciel. [ _____ ]",
                    "2. La tige conduit l'eau des racines jusqu'aux feuilles. [ _____ ]",
                    "3. Les fleurs se transforment en fruits après la fécondation. [ _____ ]",
                    "4. Les plantes n'ont pas besoin d'eau pour grandir. [ _____ ]"
                ]
            }
        ],
        "corriges_page": [
            {
                "num": "Exercice 1",
                "title": "Anatomie de la plante",
                "bareme": "10 points",
                "answers": [
                    [("a) Absorbent l'eau : ", False, C_DARK), ("Racines", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("b) Tige en bois : ", False, C_DARK), ("Tronc", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("c) Vertes et respirent : ", False, C_DARK), ("Feuilles", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("d) Renferment : ", False, C_DARK), ("Graines", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur les végétaux",
                "bareme": "10 points",
                "answers": [
                    [("1. Racines vers le ciel : ", False, C_DARK), ("Faux", True, C_CORR), (" (elles s'enfoncent dans le sol) (2,5 pts)", False, C_GRAY_TEXT)],
                    [("2. Tige conduit l'eau : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("3. Fleurs deviennent fruits : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("4. Pas besoin d'eau : ", False, C_DARK), ("Faux", True, C_CORR), (" (l'eau est indispensable) (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            }
        ]
    },

    # -------------------------------------------------------------------------
    # SÉANCE 26 (Mois 8, Semaine 22)
    # -------------------------------------------------------------------------
    {
        "seance_num": 26,
        "titre": "L'utilité des plantes pour l'alimentation et la santé",
        "theme": "Botanique appliquée",
        "obj": "Identifier les plantes alimentaires de Madagascar (céréales, tubercules, légumes, fruits) et reconnaître les plantes médicinales traditionnelles qui soignent.",
        "doc_ref": "Programme officiel Connaissances Usuelles 9e (FRA / FRM)",
        "support": "Échantillons de riz, manioc, brèdes (anamamy/anamalaho), feuilles d'eucalyptus, goyave",
        "seance_str": "26 / 33",
        "duree_str": "30 minutes",
        "duree_rev": "3 min",
        "rev_teacher": "Quelles sont les différentes parties d'une plante ?",
        "rev_students": "R.A. : Les racines, la tige (ou tronc), les feuilles, les fleurs et les fruits (avec graines).",
        "duree_lecon": "22 min",
        "mis_teacher": "Que mangez-vous chaque jour au petit-déjeuner, à midi et le soir ? D'où viennent le riz, le manioc et les légumes ?",
        "mis_students": "R.A. : Ce sont des plantes cultivées par les paysans dans les champs et rizières.",
        "mis_tech": "Mise en situation quotidienne",
        "mis_supp": "Aliments végétaux",
        "pres_teacher": "Aujourd'hui, nous allons apprendre : « L'utilité des plantes pour l'alimentation et la santé ». Après cette séance, vous connaîtrez les plantes qui nous nourrissent et celles qui nous soignent.",
        "pres_students": "Écoutent la présentation.",
        "pres_tech": "Expositive",
        "pres_supp": "Tableau noir",
        "obs_teacher": "Observez ces différentes plantes : le riz (*vary*), le manioc (*mangahazo*), les brèdes (*anana*), les fruits (bananes, mangues) et les feuilles de ravintsara ou d'eucalyptus pour les tisanes.",
        "obs_students": "Observent les plantes alimentaires et médicinales.",
        "obs_tech": "Observation concrète",
        "obs_supp": "Échantillons végétaux",
        "obs_obs": "Montrer que presque toute notre nourriture provient des végétaux.",
        "ana_q_ra_list": [
            ("Quelles sont les plantes qui constituent la base de notre alimentation à Madagascar ?",
             "R.A. : Le riz (*vary*), le manioc (*mangahazo*), la patate douce (*vomanga*), le maïs et le taro (*saonjo*)."),
            ("Quelles parties des plantes mangeons-nous ?",
             "R.A. : Les graines (riz, maïs, haricots), les tubercules/racines (manioc, carottes), les feuilles (brèdes) et les fruits (bananes, oranges)."),
            ("Qu'est-ce qu'une plante médicinale ?",
             "R.A. : C'est une plante utilisée traditionnellement en tisane ou cataplasme pour guérir certaines maladies ou soulager la douleur."),
            ("Pouvez-vous citer des exemples de plantes médicinales bien connues à Madagascar ?",
             "R.A. : Le ravintsara et l'eucalyptus (contre la toux et le rhume), le goyavier/feuilles de goyave (contre la diarrhée) et la citronnelle (tisane digestive)."),
            ("Pourquoi devons-nous protéger les plantes et cultiver des jardins potagers ?",
             "R.A. : Parce qu'elles sont indispensables pour notre nourriture, notre santé et notre oxygène.")
        ],
        "ana_tech": "Analyse interrogative / Culture locale",
        "ana_supp": "Tableau noir",
        "syn_teacher": "Donc, les plantes sont indispensables : elles nous nourrissent (riz, tubercules, légumes, fruits) et nous soignent grâce aux plantes médicinales (ravintsara, eucalyptus, goyavier). Nous devons protéger et cultiver la terre.",
        "syn_students": "Écoutent la synthèse et retiennent les usages des plantes.",
        "syn_tech": "Synthèse magistrale",
        "syn_supp": "Tableau noir",
        "app_exercises_teacher": [
            "1. Citez 2 plantes à tubercules et 2 plantes à fruits de Madagascar.",
            "2. Quelle plante utilise-t-on en tisane pour calmer la toux ?"
        ],
        "app_corriges_students": [
            ("1. Tubercules : ", "le manioc et la patate douce", " ; Fruits : ", "la banane et la mangue", "."),
            ("2. On utilise ", "le ravintsara ou l'eucalyptus", ".")
        ],
        "app_tech": "Pratique sur ardoise",
        "app_supp": "Ardoise",
        "duree_eval": "5 min",
        "eval_exercises_teacher": [
            "1. Associez chaque plante à sa catégorie : a) Le riz / b) Le ravintsara / c) Le manioc -> 1) Plante médicinale / 2) Céréale nourrissante / 3) Tubercule riche en fécule.",
            "2. Quelle partie de la plante mange-t-on quand on consomme des brèdes (*anana*) ?"
        ],
        "eval_corriges_students": [
            ("1. a) Riz -> ", "2 (céréale)", " ; b) Ravintsara -> ", "1 (médicinale)", " ; c) Manioc -> ", "3 (tubercule)", "."),
            ("2. On mange ", "les feuilles", ".")
        ],
        "eval_tech": "Contrôle écrit individuel",
        "eval_supp": "Cahier de classe",
        "lesson_sections": [
            {
                "title": "1. Les plantes alimentaires à Madagascar",
                "paragraphs": [
                    [("Les plantes fournissent la majorité de nos repas quotidiens :", False, C_DARK)],
                    [("• ", False, C_DARK), ("Les céréales", True, C_BLUE), (" : le riz (*vary*), aliment principal des Malgaches, et le maïs.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Les tubercules", True, C_BLUE), (" : le manioc (*mangahazo*), la patate douce (*vomanga*) et le taro (*saonjo*), riches en énergie.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Les légumes et brèdes", True, C_BLUE), (" : *anamamy*, *anamalaho*, choux, carottes, riches en vitamines et fer.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Les fruits", True, C_BLUE), (" : bananes, mangues, papayes, oranges, goyaves, riches en eau et vitamines.", False, C_DARK)]
                ]
            },
            {
                "title": "2. Les plantes médicinales",
                "paragraphs": [
                    [("Madagascar possède des plantes précieuses pour la santé :", False, C_DARK)],
                    [("• ", False, C_DARK), ("Le ravintsara et l'eucalyptus", True, C_BLUE), (" : feuilles utilisées en inhalation ou tisane contre le rhume et la toux.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Les jeunes feuilles de goyavier", True, C_BLUE), (" : tisane efficace pour arrêter la diarrhée.", False, C_DARK)],
                    [("• ", False, C_DARK), ("La citronnelle et le gingembre", True, C_BLUE), (" : tisanes réconfortantes et digestives.", False, C_DARK)]
                ]
            },
            {
                "title": "3. À retenir",
                "paragraphs": [
                    [("Les plantes assurent ma ", False, C_DARK), ("nutrition", True, C_BLUE), (" (riz, manioc, légumes, fruits) et ma ", False, C_DARK), ("santé", True, C_BLUE), (" grâce aux plantes médicinales (ravintsara, eucalyptus). Je dois respecter et protéger la nature.", False, C_DARK)]
                ]
            }
        ],
        "image_path": "fleur_coupe.png",
        "image_legend": "Schéma 26 : Coupe de la fleur et utilité des plantes alimentaires et médicinales",
        "exercices_page": [
            {
                "num": "Exercice 1",
                "title": "Utilisation des plantes",
                "bareme": "10 points (2,5 pts par question)",
                "lines": [
                    "Complétez avec : Feuilles, Goyavier, Riz, Manioc.",
                    "a) L'aliment de base à Madagascar produit par la rizière est le __________ .",
                    "b) Le tubercule blanc très consommé bouilli ou séché est le __________ .",
                    "c) Pour les brèdes (*anana*), la partie consommée est formée par les __________ .",
                    "d) Les feuilles de __________ sont réputées pour soigner la diarrhée."
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur les plantes utiles",
                "bareme": "10 points (2,5 pts par item)",
                "lines": [
                    "Écrivez « Vrai » ou « Faux » :",
                    "1. Le riz est une plante médicinale contre les fractures. [ _____ ]",
                    "2. Les fruits apportent des vitamines indispensables à la santé. [ _____ ]",
                    "3. Les feuilles de ravintsara sont utilisées contre les coups de froid. [ _____ ]",
                    "4. Toutes les plantes sont inutiles pour l'être humain. [ _____ ]"
                ]
            }
        ],
        "corriges_page": [
            {
                "num": "Exercice 1",
                "title": "Utilisation des plantes",
                "bareme": "10 points",
                "answers": [
                    [("a) Aliment de base : ", False, C_DARK), ("Riz", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("b) Tubercule blanc : ", False, C_DARK), ("Manioc", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("c) Partie consommée des brèdes : ", False, C_DARK), ("Feuilles", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("d) Plante contre la diarrhée : ", False, C_DARK), ("Goyavier", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur les plantes utiles",
                "bareme": "10 points",
                "answers": [
                    [("1. Riz contre les fractures : ", False, C_DARK), ("Faux", True, C_CORR), (" (c'est un aliment céréalier) (2,5 pts)", False, C_GRAY_TEXT)],
                    [("2. Fruits apportent vitamines : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("3. Ravintsara contre le froid : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("4. Plantes inutiles : ", False, C_DARK), ("Faux", True, C_CORR), (" (elles sont indispensables à la vie) (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            }
        ]
    },

    # -------------------------------------------------------------------------
    # SÉANCE 27 (Mois 8, Semaine 23)
    # -------------------------------------------------------------------------
    {
        "seance_num": 27,
        "titre": "L'utilité de l'arbre : bois, sol et environnement",
        "theme": "Écologie & Protection de la nature",
        "obj": "Expliquer l'utilité de l'arbre pour le bois, la protection des sols contre l'érosion (lavaka), la pluie et la purification de l'air, et lutter contre les feux de brousse (doro tanety).",
        "doc_ref": "Programme officiel Connaissances Usuelles 9e (FRA / FRM)",
        "support": "Échantillon de bois, schéma d'une colline boisée vs colline dénudée avec lavaka",
        "seance_str": "27 / 33",
        "duree_str": "30 minutes",
        "duree_rev": "3 min",
        "rev_teacher": "Citez 2 plantes alimentaires et 2 plantes médicinales de Madagascar.",
        "rev_students": "R.A. : Riz, manioc. Ravintsara, eucalyptus.",
        "duree_lecon": "22 min",
        "mis_teacher": "Quand le soleil est brûlant à midi, où vous abritez-vous pour trouver de la fraîcheur ? Avec quoi fabrique-t-on nos tables-bancs ?",
        "mis_students": "R.A. : Sous l'ombre d'un grand arbre. Les tables et bancs sont fabriqués avec du bois d'arbre.",
        "mis_tech": "Mise en situation d'observation",
        "mis_supp": "Ombre d'arbre et meubles de classe",
        "pres_teacher": "Aujourd'hui, nous allons apprendre : « L'utilité de l'arbre : bois, sol et environnement ». Après cette séance, vous comprendrez pourquoi il faut planter et protéger les arbres.",
        "pres_students": "Écoutent la présentation.",
        "pres_tech": "Expositive",
        "pres_supp": "Tableau noir",
        "obs_teacher": "Observez ce schéma montrant une colline avec des arbres (terre retenue) et une colline brûlée sans arbres creusée par de grands trous d'érosion (*lavaka*).",
        "obs_students": "Observent les effets destructeurs du déboisement et des feux de brousse.",
        "obs_tech": "Observation comparative",
        "obs_supp": "Images d'érosion et de forêt",
        "obs_obs": "Montrer que les racines des arbres retiennent la terre comme un filet.",
        "ana_q_ra_list": [
            ("Quels produits l'arbre nous donne-t-il directement ?",
             "R.A. : Du bois d'œuvre (pour fabriquer maisons, portes, tables, pirogues), du bois de chauffage, des fruits et de l'ombre bienfaisante."),
            ("Comment les racines des arbres protègent-elles le sol malgache ?",
             "R.A. : Les racines retiennent la terre meuble et empêchent les pluies torrentielles de creuser de grands ravins d'érosion (*lavaka*) et d'ensabler les rizières."),
            ("Quel est le rôle des arbres dans la purification de l'air ?",
             "R.A. : Les arbres absorbent le gaz carbonique polluant et rejettent de l'oxygène pur et frais pour notre respiration."),
            ("Pourquoi les feux de brousse (*doro tanety*) sont-ils une catastrophe ?",
             "R.A. : Parce qu'ils brûlent les arbres, tuent les animaux sauvages, appauvrissent le sol et assèchent les sources d'eau."),
            ("Que devons-nous faire pour renouveler nos forêts ?",
             "R.A. : Reboiser chaque année en plantant de jeunes arbres et en les arrosant (*mamboly hazo*).")
        ],
        "ana_tech": "Analyse écologique / Éveil civique",
        "ana_supp": "Tableau noir",
        "syn_teacher": "Donc, l'arbre nous donne du bois, purifie l'air, attire la pluie et retient la terre contre l'érosion (*lavaka*). Pour protéger notre pays, nous devons refuser les feux de brousse (*doro tanety*) et participer activement au reboisement.",
        "syn_students": "Écoutent la synthèse et s'engagent à planter des arbres.",
        "syn_tech": "Synthèse magistrale",
        "syn_supp": "Tableau noir",
        "app_exercises_teacher": [
            "1. Citez 3 bienfaits que les arbres apportent à l'homme.",
            "2. Comment appelle-t-on les grands ravins d'érosion causés par le manque d'arbres à Madagascar ?"
        ],
        "app_corriges_students": [
            ("1. Bienfaits : ", "fournir du bois, purifier l'air et retenir la terre contre l'érosion", "."),
            ("2. Ce sont ", "les lavaka (ravins d'érosion)", ".")
        ],
        "app_tech": "Pratique sur ardoise",
        "app_supp": "Ardoise",
        "duree_eval": "5 min",
        "eval_exercises_teacher": [
            "1. Cochez les actions protectrices de la nature : a) Allumer des feux de brousse sur les collines. b) Planter des jeunes arbres (reboisement). c) Couper tous les arbres sans en replanter. d) Arroser et protéger les arbres.",
            "2. Quel gaz indispensable à la vie les feuilles des arbres rejettent-elles dans l'air ?"
        ],
        "eval_corriges_students": [
            ("1. Actions protectrices : ", "b) Planter des jeunes arbres", " et ", "d) Arroser et protéger les arbres", "."),
            ("2. Elles rejettent ", "de l'oxygène pur", ".")
        ],
        "eval_tech": "Évaluation individuelle sur cahier",
        "eval_supp": "Cahier de classe",
        "lesson_sections": [
            {
                "title": "1. L'utilité matérielle et écologique de l'arbre",
                "paragraphs": [
                    [("L'arbre est le meilleur ami de l'homme et de la nature :", False, C_DARK)],
                    [("• ", False, C_DARK), ("Fournisseur de bois", True, C_BLUE), (" : bois de charpente pour les maisons, planches pour les meubles et les pirogues, bois de chauffe.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Protection des sols", True, C_BLUE), (" : les puissantes racines retiennent la terre rouge (*tany mena*) sur les pentes et empêchent la formation des ravins d'érosion (", False, C_DARK), ("*lavaka*", True, C_BLUE), (") qui ensablent les rizières.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Purification de l'air et climat", True, C_BLUE), (" : la forêt absorbe les poussières et le gaz carbonique, produit de ", False, C_DARK), ("l'oxygène pur", True, C_BLUE), (" et favorise les pluies régulières.", False, C_DARK)]
                ]
            },
            {
                "title": "2. Lutter contre les feux et reboiser",
                "paragraphs": [
                    [("• ", False, C_DARK), ("Non aux feux de brousse (*Doro tanety*)", True, C_BLUE), (" : le feu détruit la forêt, assèche les rivières et appauvrit notre pays.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Le reboisement (*Fambolen-kazo*)", True, C_BLUE), (" : chaque enfant doit planter et soigner au moins un arbre chaque année.", False, C_DARK)]
                ]
            },
            {
                "title": "3. À retenir",
                "paragraphs": [
                    [("L'arbre donne du ", False, C_DARK), ("bois", True, C_BLUE), (", ", False, C_DARK), ("retient la terre contre les lavaka", True, C_BLUE), (" et ", False, C_DARK), ("purifie l'air", True, C_BLUE), (". Je participe au reboisement et je lutte contre les feux de brousse.", False, C_DARK)]
                ]
            }
        ],
        "image_path": "arbre_morphologie.png",
        "image_legend": "Schéma 27 : L'arbre, son feuillage, son bois et son système racinaire anti-érosion",
        "exercices_page": [
            {
                "num": "Exercice 1",
                "title": "Les bienfaits de l'arbre",
                "bareme": "10 points (2,5 pts par réponse)",
                "lines": [
                    "Complétez avec : Lavaka, Oxygène, Reboisement, Racines.",
                    "a) Les __________ de l'arbre fixent la terre et empêchent les glissements de terrain.",
                    "b) Les grands trous d'érosion sur les collines dénudées s'appellent des __________ .",
                    "c) En respirant, les arbres fabriquent de l'__________ pur pour les êtres vivants.",
                    "d) Planter de nouveaux arbres chaque saison s'appelle le __________ ."
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur la protection des forêts",
                "bareme": "10 points (2,5 pts par item)",
                "lines": [
                    "Écrivez « Vrai » ou « Faux » :",
                    "1. Les feux de brousse rendent la forêt plus belle et plus riche. [ _____ ]",
                    "2. Les racines des arbres protègent les rizières contre l'ensablement. [ _____ ]",
                    "3. Les arbres apportent de l'ombre et de la fraîcheur. [ _____ ]",
                    "4. Couper un arbre sans en replanter un autre appauvrit la nature. [ _____ ]"
                ]
            }
        ],
        "corriges_page": [
            {
                "num": "Exercice 1",
                "title": "Les bienfaits de l'arbre",
                "bareme": "10 points",
                "answers": [
                    [("a) Fixent la terre : ", False, C_DARK), ("Racines", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("b) Trous d'érosion : ", False, C_DARK), ("Lavaka", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("c) Gaz pur fabriqué : ", False, C_DARK), ("Oxygène", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("d) Planter de nouveaux arbres : ", False, C_DARK), ("Reboisement", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur la protection des forêts",
                "bareme": "10 points",
                "answers": [
                    [("1. Feux de brousse enrichissent : ", False, C_DARK), ("Faux", True, C_CORR), (" (ils détruisent la terre et la forêt) (2,5 pts)", False, C_GRAY_TEXT)],
                    [("2. Racines protègent rizières : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("3. Arbres apportent ombre : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("4. Couper sans replanter appauvrit : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            }
        ]
    },

    # -------------------------------------------------------------------------
    # SÉANCE 28 (Mois 9, Semaine 24)
    # -------------------------------------------------------------------------
    {
        "seance_num": 28,
        "titre": "L'habitat sain et l'aménagement de la maison",
        "theme": "Cadre de vie & Hygiène de l'habitat",
        "obj": "Énumérer les pièces indispensables d'une maison saine (chambre, séjour, cuisine séparée, latrines propres), connaître les règles d'aération et d'éclairage et entretenir son logement.",
        "doc_ref": "Programme officiel Connaissances Usuelles 9e (FRA / FRM)",
        "support": "Plan d'une maison avec cour propre, latrines et fenêtres",
        "seance_str": "28 / 33",
        "duree_str": "30 minutes",
        "duree_rev": "3 min",
        "rev_teacher": "Pourquoi doit-on planter des arbres et lutter contre les feux de brousse ?",
        "rev_students": "R.A. : Pour avoir du bois, de l'air pur et empêcher la terre de glisser dans les lavaka.",
        "duree_lecon": "22 min",
        "mis_teacher": "Dans quelle pièce prépare-t-on à manger ? Pourquoi ne doit-on pas faire la cuisine dans la pièce où l'on dort ?",
        "mis_students": "R.A. : Dans la cuisine. Parce que la fumée de bois étouffe et noircit la chambre.",
        "mis_tech": "Mise en situation quotidienne",
        "mis_supp": "Discussion de classe",
        "pres_teacher": "Aujourd'hui, nous allons apprendre : « L'habitat sain et l'aménagement de la maison ». Après cette séance, vous saurez comment organiser une maison propre, aérée et agréable.",
        "pres_students": "Écoutent la présentation.",
        "pres_tech": "Expositive",
        "pres_supp": "Tableau noir",
        "obs_teacher": "Regardez ce plan d'une case villageoise saine : des fenêtres ouvertes pour la lumière et l'air, une cuisine séparée et des latrines couvertes à distance.",
        "obs_students": "Observent l'aménagement rationnel de la maison.",
        "obs_tech": "Observation de plan",
        "obs_supp": "Plan d'habitat",
        "obs_obs": "Montrer que les latrines doivent être éloignées du puits d'eau.",
        "ana_q_ra_list": [
            ("Quelles sont les pièces nécessaires dans un habitat bien aménagé ?",
             "R.A. : Une chambre à coucher, une salle de séjour (ou pièce de vie), une cuisine bien aérée et des latrines/douche."),
            ("Pourquoi la lumière du soleil et l'aération sont-elles indispensables dans une maison ?",
             "R.A. : La lumière du soleil et l'air frais chassent l'humidité, détruisent les moisissures et éliminent les microbes."),
            ("Où doit être située la cuisine dans une maison traditionnelle ?",
             "R.A. : La cuisine doit être séparée de la chambre à coucher ou posséder une grande fenêtre pour évacuer la fumée de bois."),
            ("Où doivent être construites les latrines et comment les entretenir ?",
             "R.A. : Les latrines doivent être construites à au moins 10 à 15 mètres de la maison et du puits d'eau, couvertes d'un couvercle et nettoyées avec de l'eau et du savon ou de la cendre."),
            ("Comment entretenir la cour de la maison ?",
             "R.A. : Balayer la cour chaque matin, désherber et jeter les ordures dans une fosse à ordures fermée.")
        ],
        "ana_tech": "Analyse ordonnée / Hygiène domestique",
        "ana_supp": "Tableau noir",
        "syn_teacher": "Donc, une maison saine est bien aérée par des fenêtres, propre, éclairée par le soleil, avec une cuisine séparée et des latrines propres éloignées du puits. Une cour balayée éloigne les moustiques et les maladies.",
        "syn_students": "Écoutent la synthèse et retiennent les règles de l'habitat sain.",
        "syn_tech": "Synthèse magistrale",
        "syn_supp": "Tableau noir",
        "app_exercises_teacher": [
            "1. Citez 2 éléments qui rendent une maison saine.",
            "2. Pourquoi les latrines doivent-elles toujours être munies d'un couvercle ?"
        ],
        "app_corriges_students": [
            ("1. Éléments : ", "des fenêtres ouvertes pour l'air et le soleil, et une cour propre balayée", "."),
            ("2. Pour ", "empêcher les mouches de propager les microbes et bloquer les mauvaises odeurs", ".")
        ],
        "app_tech": "Pratique sur ardoise",
        "app_supp": "Ardoise",
        "duree_eval": "5 min",
        "eval_exercises_teacher": [
            "1. Cochez les caractéristiques d'un habitat sain : a) Pièces sombres et humides sans fenêtre. b) Fenêtres ouvertes pour laisser entrer l'air frais. c) Latrines entretenues avec couvercle. d) Déchets jetés partout dans la cour.",
            "2. À quelle distance minimale du puits d'eau doit-on placer les latrines ?"
        ],
        "eval_corriges_students": [
            ("1. Habitat sain : ", "b) Fenêtres ouvertes", " et ", "c) Latrines avec couvercle", "."),
            ("2. À au moins ", "10 à 15 mètres pour ne pas contaminer l'eau potable", ".")
        ],
        "eval_tech": "Contrôle individuel écrit",
        "eval_supp": "Cahier de classe",
        "lesson_sections": [
            {
                "title": "1. Les qualités d'une maison saine",
                "paragraphs": [
                    [("La maison protège notre famille du soleil, de la pluie et du froid :", False, C_DARK)],
                    [("• ", False, C_DARK), ("Aération et lumière", True, C_BLUE), (" : des fenêtres grandes ouvertes chaque matin pour laisser entrer l'air pur et les rayons du soleil désinfectants.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Cuisine séparée", True, C_BLUE), (" : la fumée de feu de bois doit sortir dehors par une cheminée ou une fenêtre pour protéger les yeux et les poumons.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Latrines hygiéniques", True, C_BLUE), (" : fosse profonde avec dalle propre, couvercle sur le trou et située loin du puits d'eau.", False, C_DARK)]
                ]
            },
            {
                "title": "2. L'entretien quotidien du logement et de la cour",
                "paragraphs": [
                    [("• Balayer le sol des pièces et la cour chaque matin.", False, C_DARK)],
                    [("• Ranger les affaires pour éviter les cachettes de rats, cafards et scorpions.", False, C_DARK)],
                    [("• Jeter les ordures dans une ", False, C_DARK), ("fosse à ordures", True, C_BLUE), (" protégée.", False, C_DARK)]
                ]
            },
            {
                "title": "3. À retenir",
                "paragraphs": [
                    [("Une maison saine est ", False, C_DARK), ("propre, éclairée et bien aérée", True, C_BLUE), (". Les latrines doivent être couvertes et la cour balayée pour vivre dans le confort et la santé.", False, C_DARK)]
                ]
            }
        ],
        "image_path": "habitat_sain.png",
        "image_legend": "Schéma 28 : Plan d'aménagement d'une maison saine et hygiénique à Madagascar",
        "exercices_page": [
            {
                "num": "Exercice 1",
                "title": "Aménagement d'une maison saine",
                "bareme": "10 points (2,5 pts par question)",
                "lines": [
                    "Complétez avec : Fenêtres, Ordures, Latrines, Cuisine.",
                    "a) Pour faire entrer l'air pur et la lumière, on ouvre les __________ .",
                    "b) La pièce où l'on prépare les repas est la __________ .",
                    "c) Les toilettes hygiéniques munies d'un couvercle sont les __________ .",
                    "d) On jette les balayures et les déchets dans la fosse à __________ ."
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur l'habitat",
                "bareme": "10 points (2,5 pts par item)",
                "lines": [
                    "Écrivez « Vrai » ou « Faux » :",
                    "1. Vivre dans une case noire et humide rend les enfants malades. [ _____ ]",
                    "2. Il est recommandé de construire les latrines juste au-dessus du puits d'eau. [ _____ ]",
                    "3. Ouvrir les fenêtres chaque matin chasse l'air vicié de la nuit. [ _____ ]",
                    "4. Balayer la cour tous les jours empêche les animaux nuisibles de s'installer. [ _____ ]"
                ]
            }
        ],
        "corriges_page": [
            {
                "num": "Exercice 1",
                "title": "Aménagement d'une maison saine",
                "bareme": "10 points",
                "answers": [
                    [("a) Ouvrir pour l'air : ", False, C_DARK), ("Fenêtres", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("b) Pièce des repas : ", False, C_DARK), ("Cuisine", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("c) Toilettes avec couvercle : ", False, C_DARK), ("Latrines", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("d) Fosse pour les déchets : ", False, C_DARK), ("Ordures", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur l'habitat",
                "bareme": "10 points",
                "answers": [
                    [("1. Case humide rend malade : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("2. Latrines au-dessus du puits : ", False, C_DARK), ("Faux", True, C_CORR), (" (très dangereux, cela empoisonne l'eau) (2,5 pts)", False, C_GRAY_TEXT)],
                    [("3. Fenêtres chassent l'air vicié : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("4. Balayer empêche les nuisibles : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            }
        ]
    },

    # -------------------------------------------------------------------------
    # SÉANCE 29 (Mois 9, Semaine 25)
    # -------------------------------------------------------------------------
    {
        "seance_num": 29,
        "titre": "La poule : description, variétés et élevage",
        "theme": "Le monde animal & Zootechnie",
        "obj": "Décrire le corps de la poule (bec, plumes, ailes, pattes), connaître les variétés locales (akoho gasy) et appliquer les règles d'un élevage soigné (poulailler, nourriture, ponte des œufs).",
        "doc_ref": "Programme officiel Connaissances Usuelles 9e (FRA / FRM)",
        "support": "Planche zoologique de la poule et du coq / Plumes, œufs frais, graines de maïs",
        "seance_str": "29 / 33",
        "duree_str": "30 minutes",
        "duree_rev": "3 min",
        "rev_teacher": "Citez 2 qualités indispensables d'une maison saine.",
        "rev_students": "R.A. : Des fenêtres pour la lumière et l'air pur, et des latrines propres couvertes.",
        "duree_lecon": "22 min",
        "mis_teacher": "Quel oiseau de basse-cour élève-t-on dans presque toutes les cours à Madagascar ? Que nous donne la poule ?",
        "mis_students": "R.A. : La poule (*akoho*). Elle nous donne des œufs frais et de la bonne viande.",
        "mis_tech": "Mise en situation quotidienne",
        "mis_supp": "Œufs et plumes",
        "pres_teacher": "Aujourd'hui, nous allons apprendre : « La poule : description, variétés et élevage ». Après cette séance, vous connaîtrez le corps de la poule et comment bien l'élever.",
        "pres_students": "Écoutent la présentation.",
        "pres_tech": "Expositive",
        "pres_supp": "Tableau noir",
        "obs_teacher": "Regardez cette illustration de la poule : observez la tête avec la crête rouge et le bec sans dents, le corps couvert de plumes, les deux ailes et les pattes à 4 doigts griffus.",
        "obs_students": "Observent la morphologie de la poule et du coq.",
        "obs_tech": "Observation zoologique",
        "obs_supp": "Schéma de la poule",
        "obs_obs": "Montrer la différence entre le coq (grand, crête haute, ergots) et la poule.",
        "ana_q_ra_list": [
            ("Comment le corps de la poule est-il recouvert et adapté à son mode de vie ?",
             "R.A. : Le corps est couvert de plumes légères et chaudes. Elle a un bec corné sans dents pour picorer les graines et les insectes."),
            ("Quelles sont les caractéristiques des pattes de la poule ?",
             "R.A. : Ses pattes sont recouvertes d'écailles et se terminent par 4 doigts munis de griffes solides pour gratter le sol (*mikiky tany*)."),
            ("Quelles sont les variétés de poules courantes à Madagascar ?",
             "R.A. : La poule locale rustique (*akoho gasy*), les poules de race pondeuse (pour beaucoup d'œufs) et les poulets de chair."),
            ("Comment se reproduit la poule ?",
             "R.A. : La poule pond des œufs, les couve pendant 21 jours pour les maintenir au chaud, puis les poussins éclosent."),
            ("Quelles sont les conditions indispensables pour réussir l'élevage des poules ?",
             "R.A. : Un poulailler propre et aéré (*tranon'akoho*), de l'eau propre tous les jours, une alimentation saine (maïs, son de riz, vers) et le vaccin contre la peste aviaire.")
        ],
        "ana_tech": "Analyse ordonnée / Zootechnie pratique",
        "ana_supp": "Tableau noir",
        "syn_teacher": "Donc, la poule est un oiseau de basse-cour au corps couvert de plumes, avec un bec pour picorer et des pattes griffues pour gratter. Elle pond des œufs et donne de la viande. Pour bien l'élever, il faut un poulailler propre, de l'eau fraîche, du grain et des soins.",
        "syn_students": "Écoutent la synthèse et retiennent les besoins de l'élevage.",
        "syn_tech": "Synthèse magistrale",
        "syn_supp": "Tableau noir",
        "app_exercises_teacher": [
            "1. Combien de jours la poule couve-t-elle ses œufs avant l'éclosion ?",
            "2. Que mange la poule dans la cour ?"
        ],
        "app_corriges_students": [
            ("1. La poule couve pendant ", "21 jours", "."),
            ("2. Elle mange ", "des graines de riz, de maïs, des insectes, des vers et des herbes", ".")
        ],
        "app_tech": "Pratique sur ardoise",
        "app_supp": "Ardoise",
        "duree_eval": "5 min",
        "eval_exercises_teacher": [
            "1. Citez les deux produits très utiles que l'élevage de poules donne à l'homme.",
            "2. Associez : a) Le coq / b) La poule / c) Le poussin -> 1) Le petit oisillon / 2) Le mâle qui chante / 3) La femelle qui pond des œufs."
        ],
        "eval_corriges_students": [
            ("1. Deux produits : ", "les œufs et la viande", "."),
            ("2. a) Coq -> ", "2 (mâle)", " ; b) Poule -> ", "3 (femelle pondeuse)", " ; c) Poussin -> ", "1 (petit oisillon)", ".")
        ],
        "eval_tech": "Contrôle écrit sur cahier",
        "eval_supp": "Cahier de classe",
        "lesson_sections": [
            {
                "title": "1. La description de la poule",
                "paragraphs": [
                    [("La poule est un oiseau domestique élevé pour ses œufs et sa chair :", False, C_DARK)],
                    [("• ", False, C_DARK), ("La tête", True, C_BLUE), (" : porte une crête rouge sur le dessus, des barbillons sous la gorge et un ", False, C_DARK), ("bec corné sans dents", True, C_BLUE), (" pour picorer les graines.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Le corps", True, C_BLUE), (" : recouvert de plumes qui la protègent du froid et de la pluie, avec deux ailes courtes.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Les pattes", True, C_BLUE), (" : munies de 4 doigts terminés par des griffes solides pour gratter le sol et chercher des vers.", False, C_DARK)]
                ]
            },
            {
                "title": "2. Reproduction et élevage de la poule (*Akoho gasy*)",
                "paragraphs": [
                    [("• La poule pond des œufs et les couve pendant ", False, C_DARK), ("21 jours", True, C_BLUE), (" jusqu'à la naissance des poussins.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Règles d'élevage", True, C_BLUE), (" :", False, C_DARK)],
                    [("  - Construire un poulailler sec, surélevé et bien fermé contre les prédateurs (rats, chiens).", False, C_DARK)],
                    [("  - Nettoyer le poulailler chaque semaine et renouveler la litière de paille.", False, C_DARK)],
                    [("  - Donner du grain (maïs concassé, son de riz) et de ", False, C_DARK), ("l'eau propre fraîche", True, C_BLUE), (" chaque jour.", False, C_DARK)]
                ]
            },
            {
                "title": "3. À retenir",
                "paragraphs": [
                    [("La poule a un ", False, C_DARK), ("bec sans dents", True, C_BLUE), (", des ", False, C_DARK), ("plumes", True, C_BLUE), (" et des ", False, C_DARK), ("pattes à griffes", True, C_BLUE), (". Elle couve ses œufs 21 jours. Un bon poulailler propre et de l'eau fraîche assurent un élevage réussi.", False, C_DARK)]
                ]
            }
        ],
        "image_path": "poule_anatomie.png",
        "image_legend": "Schéma 29 : Morphologie et anatomie de la poule (Akoho)",
        "exercices_page": [
            {
                "num": "Exercice 1",
                "title": "Le corps et la vie de la poule",
                "bareme": "10 points (2,5 pts par réponse)",
                "lines": [
                    "Complétez avec : Plumes, 21 jours, Bec, Poussins.",
                    "a) Pour picorer les grains de maïs, la poule utilise son __________ .",
                    "b) Le corps de la poule est entièrement recouvert de __________ .",
                    "c) La poule couve ses œufs pendant __________ .",
                    "d) À l'éclosion des œufs, les petits qui naissent sont des __________ ."
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur l'élevage de poules",
                "bareme": "10 points (2,5 pts par item)",
                "lines": [
                    "Écrivez « Vrai » ou « Faux » :",
                    "1. La poule possède des dents tranchantes pour mâcher la viande. [ _____ ]",
                    "2. Les pattes à griffes permettent à la poule de gratter la terre. [ _____ ]",
                    "3. Les poules peuvent rester plusieurs jours sans boire d'eau. [ _____ ]",
                    "4. Garder le poulailler propre protège les volailles contre les maladies. [ _____ ]"
                ]
            }
        ],
        "corriges_page": [
            {
                "num": "Exercice 1",
                "title": "Le corps et la vie de la poule",
                "bareme": "10 points",
                "answers": [
                    [("a) Picorer avec : ", False, C_DARK), ("Bec", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("b) Recouvert de : ", False, C_DARK), ("Plumes", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("c) Durée de couvaison : ", False, C_DARK), ("21 jours", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("d) Petits qui naissent : ", False, C_DARK), ("Poussins", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur l'élevage de poules",
                "bareme": "10 points",
                "answers": [
                    [("1. Poule possède des dents : ", False, C_DARK), ("Faux", True, C_CORR), (" (le bec est sans dents) (2,5 pts)", False, C_GRAY_TEXT)],
                    [("2. Pattes à griffes grattent la terre : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("3. Poules restent sans boire : ", False, C_DARK), ("Faux", True, C_CORR), (" (elles ont besoin d'eau propre chaque jour) (2,5 pts)", False, C_GRAY_TEXT)],
                    [("4. Poulailler propre protège : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            }
        ]
    },

    # -------------------------------------------------------------------------
    # SÉANCE 30 (Mois 9, Semaine 26)
    # -------------------------------------------------------------------------
    {
        "seance_num": 30,
        "titre": "Le zébu : description, utilité et entretien",
        "theme": "Le monde animal & Vie rurale à Madagascar",
        "obj": "Décrire la morphologie du zébu malgache (omby : cornes, bosse de graisse, fanon, sabots), expliquer ses multiples services à l'homme (piétinement des rizières, charrue, transport, lait, viande, fumier) et appliquer les soins convenables.",
        "doc_ref": "Programme officiel Connaissances Usuelles 9e (FRA / FRM)",
        "support": "Schéma et photos du zébu malgache (*omby gasy*) / Charrue, corde, sel",
        "seance_str": "30 / 33",
        "duree_str": "30 minutes",
        "duree_rev": "3 min",
        "rev_teacher": "Pendant combien de jours la poule couve-t-elle ses œufs ?",
        "rev_students": "R.A. : La poule couve ses œufs pendant 21 jours.",
        "duree_lecon": "22 min",
        "mis_teacher": "Quel est le grand animal à bosse et à longues cornes qui travaille dans les rizières et tire les charrettes à Madagascar ?",
        "mis_students": "R.A. : C'est le zébu (*omby*).",
        "mis_tech": "Mise en situation d'observation",
        "mis_supp": "Image du zébu",
        "pres_teacher": "Aujourd'hui, nous allons apprendre : « Le zébu : description, utilité et entretien ». Après cette séance, vous connaîtrez le corps du zébu et tous les services qu'il rend à l'homme.",
        "pres_students": "Écoutent la présentation.",
        "pres_tech": "Expositive",
        "pres_supp": "Tableau noir",
        "obs_teacher": "Regardez ce magnifique zébu : observez ses deux cornes pointues sur la tête, sa bosse de graisse sur le dos, son fanon sous le cou et ses 4 pattes terminées par deux sabots (onglons).",
        "obs_students": "Observent la morphologie puissante du zébu.",
        "obs_tech": "Observation zoologique",
        "obs_supp": "Schéma du zébu",
        "obs_obs": "Attirer l'attention sur la bosse qui sert de réserve d'énergie pendant la saison sèche.",
        "ana_q_ra_list": [
            ("Quels sont les caractères physiques particuliers du zébu malgache ?",
             "R.A. : Une tête avec deux grandes cornes courbées, une bosse de graisse sur le garrot, un fanon (peau plissée) sous la gorge et des sabots fendus aux 4 pattes."),
            ("À quoi sert la bosse de graisse sur le dos du zébu ?",
             "R.A. : C'est une réserve d'énergie et de nourriture qui permet au zébu de résister à la sécheresse et à la faim en hiver (*ririnina*)."),
            ("Quels sont les travaux agricoles majeurs accomplis par le zébu ?",
             "R.A. : Le piétinement de la boue des rizières (*tany vary*), le labour avec la charrue et la traction des charrettes chargées de récoltes."),
            ("Quels produits utiles le zébu fournit-il pour notre alimentation et la terre ?",
             "R.A. : La vache donne du lait nourrissant, sa viande est appréciée, et ses bouses fournissent du fumier d'engrais naturel pour enrichir les cultures."),
            ("Comment doit-on s'occuper convenablement de cet animal fidèle ?",
             "R.A. : Lui donner de l'herbe fraîche et de l'eau propre, lui donner du sel, le laver, le loger dans un parc propre (*valan'omby*) et ne jamais le maltraiter.")
        ],
        "ana_tech": "Analyse ordonnée / Élevage rural",
        "ana_supp": "Tableau noir",
        "syn_teacher": "Donc, le zébu (*omby*) est le compagnon indispensable du paysan malgache. Reconnaissable à sa bosse et ses cornes, il travaille la terre, tire les charrettes et donne du lait, de la viande et du fumier. L'homme doit le nourrir, l'abreuver et le traiter avec respect.",
        "syn_students": "Écoutent la synthèse et répètent les rôles du zébu.",
        "syn_tech": "Synthèse magistrale",
        "syn_supp": "Tableau noir",
        "app_exercises_teacher": [
            "1. Citez 2 signes qui distinguent le zébu du bœuf ordinaire.",
            "2. Citez 3 travaux ou produits que le zébu donne au paysan."
        ],
        "app_corriges_students": [
            ("1. Deux signes : ", "la bosse de graisse sur le dos et les grandes cornes", "."),
            ("2. Travaux/produits : ", "piétiner la rizière, tirer la charrette et donner du fumier (ou du lait/viande)", ".")
        ],
        "app_tech": "Pratique sur ardoise",
        "app_supp": "Ardoise",
        "duree_eval": "5 min",
        "eval_exercises_teacher": [
            "1. À quoi sert la bosse de graisse du zébu pendant la saison sèche ?",
            "2. Comment appelle-t-on l'enclos traditionnel où dorment les zébus ?"
        ],
        "eval_corriges_students": [
            ("1. La bosse sert de ", "réserve de nourriture et d'énergie pendant la saison sèche", "."),
            ("2. C'est ", "le parc à bœufs (valan'omby)", ".")
        ],
        "eval_tech": "Contrôle individuel écrit",
        "eval_supp": "Cahier de classe",
        "lesson_sections": [
            {
                "title": "1. La morphologie du zébu (*Omby gasy*)",
                "paragraphs": [
                    [("Le zébu est un grand animal herbivore domestique au cœur de la vie rurale à Madagascar :", False, C_DARK)],
                    [("• ", False, C_DARK), ("La tête", True, C_BLUE), (" : porte deux grandes cornes en forme de lyre et de larges oreilles.", False, C_DARK)],
                    [("• ", False, C_DARK), ("La bosse de graisse", True, C_BLUE), (" : située sur les épaules. Elle constitue une réserve d'énergie vitale pour traverser la saison sèche.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Le cou", True, C_BLUE), (" : porte un large repli de peau pendant appelé le ", False, C_DARK), ("fanon", True, C_BLUE), (".", False, C_DARK)],
                    [("• ", False, C_DARK), ("Les membres", True, C_BLUE), (" : solides, terminés par des sabots fendus en deux onglons.", False, C_DARK)]
                ]
            },
            {
                "title": "2. Les grands services et l'entretien du zébu",
                "paragraphs": [
                    [("• ", False, C_DARK), ("Force de travail", True, C_BLUE), (" : piétine la terre des rizières (*kodia vary*), tire la charrue pour labourer et tracte les lourdes charrettes.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Alimentation et agriculture", True, C_BLUE), (" : fournit du lait riche, de la viande et son fumier fertilise les champs.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Soins indispensables", True, C_BLUE), (" : abreuver avec de l'eau claire, conduire au pâturage (*kijana*), donner du sel gemme et nettoyer le parc (*valan'omby*).", False, C_DARK)]
                ]
            },
            {
                "title": "3. À retenir",
                "paragraphs": [
                    [("Le zébu a une ", False, C_DARK), ("bosse de réserve", True, C_BLUE), (" et des ", False, C_DARK), ("cornes", True, C_BLUE), (". Il aide le paysan à labourer la rizière, tire la charrette et donne du lait. Je dois respecter et bien soigner cet animal utile.", False, C_DARK)]
                ]
            }
        ],
        "image_path": "zebu_anatomie.png",
        "image_legend": "Schéma 30 : Morphologie et anatomie du zébu malgache (Omby)",
        "exercices_page": [
            {
                "num": "Exercice 1",
                "title": "Le corps et le rôle du zébu",
                "bareme": "10 points (2,5 pts par question)",
                "lines": [
                    "Complétez avec : Valan'omby, Bosse, Cornes, Charrue.",
                    "a) Sur le haut du dos, le zébu porte une __________ de graisse.",
                    "b) La tête du zébu est ornée de deux grandes __________ .",
                    "c) Pour labourer les champs, le zébu tire la __________ .",
                    "d) Le parc fermé où l'on garde les zébus la nuit s'appelle le __________ ."
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur le zébu malgache",
                "bareme": "10 points (2,5 pts par item)",
                "lines": [
                    "Écrivez « Vrai » ou « Faux » :",
                    "1. La bosse du zébu est remplie uniquement d'eau fraîche. [ _____ ]",
                    "2. Le zébu aide le paysan malgache à piétiner la terre des rizières. [ _____ ]",
                    "3. Les bouses de zébu servent d'engrais naturel pour faire pousser le riz. [ _____ ]",
                    "4. On ne doit jamais donner à boire au zébu après une journée de travail. [ _____ ]"
                ]
            }
        ],
        "corriges_page": [
            {
                "num": "Exercice 1",
                "title": "Le corps et le rôle du zébu",
                "bareme": "10 points",
                "answers": [
                    [("a) Réserve sur le dos : ", False, C_DARK), ("Bosse", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("b) Ornée de : ", False, C_DARK), ("Cornes", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("c) Tire pour labourer : ", False, C_DARK), ("Charrue", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("d) Parc à bœufs : ", False, C_DARK), ("Valan'omby", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur le zébu malgache",
                "bareme": "10 points",
                "answers": [
                    [("1. Bosse remplie d'eau : ", False, C_DARK), ("Faux", True, C_CORR), (" (elle est remplie de graisse énergétique) (2,5 pts)", False, C_GRAY_TEXT)],
                    [("2. Piétine les rizières : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("3. Bouses comme engrais : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("4. Ne pas donner à boire : ", False, C_DARK), ("Faux", True, C_CORR), (" (il a absolument besoin d'eau propre et de sel) (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            }
        ]
    }
]

# Séance 31 : Révision Trimestre 3
review_session_31 = {
    "seance_num": 31,
    "titre": "Révision générale — Troisième Trimestre",
    "theme": "Respiration, paludisme, monde végétal, habitat et animaux utiles",
    "obj": "Consolider et synthétiser l'ensemble des connaissances du troisième trimestre (respiration, maladies contagieuses, paludisme/MILDA, plantes/arbres, habitat sain, poule et zébu).",
    "doc_ref": "Programme officiel Connaissances Usuelles 9e (FRA / FRM)",
    "support": "Tableau récapitulatif du Trimestre 3",
    "seance_str": "31 / 33",
    "duree_str": "30 minutes",
    "duree_rev": "3 min",
    "rev_teacher": "Quels sont les deux grands animaux domestiques étudiés lors des deux dernières séances ?",
    "rev_students": "R.A. : La poule et le zébu.",
    "duree_lecon": "22 min",
    "mis_teacher": "Qui peut résumer les grands thèmes de ce 3e trimestre ?",
    "mis_students": "R.A. : L'appareil respiratoire, les vaccins, le paludisme, les plantes et arbres, l'habitat sain, la poule et le zébu.",
    "mis_tech": "Brainstorming récapitulatif",
    "mis_supp": "Tableau noir",
    "pres_teacher": "Aujourd'hui, nous faisons la révision complète du Troisième Trimestre pour préparer l'examen.",
    "pres_students": "Écoutent la présentation.",
    "pres_tech": "Expositive",
    "pres_supp": "Tableau noir",
    "obs_teacher": "Observez ce grand tableau bilan réunissant les 3 axes du 3e trimestre : 1) Respiration et paludisme, 2) Monde végétal et arbres, 3) Habitat et animaux domestiques.",
    "obs_students": "Observent les colonnes de synthèse.",
    "obs_tech": "Observation guidée",
    "obs_supp": "Tableau de synthèse",
    "obs_obs": "Vérifier la mémorisation des organes respiratoires, des rôles de l'arbre et du zébu.",
    "ana_q_ra_list": [
        ("Quels sont les organes de l'appareil respiratoire et les 2 mouvements de la respiration ?",
         "R.A. : Organes : nez, trachée, bronches, poumons. Mouvements : inspiration (l'air entre) et expiration (l'air sort)."),
        ("Comment se transmet le paludisme et comment s'en protéger ?",
         "R.A. : Transmis par le moustique anophèle. On s'en protège en dormant sous moustiquaire imprégnée MILDA et en éliminant les eaux stagnantes."),
        ("Quelles sont les parties d'une plante et les bienfaits de l'arbre ?",
         "R.A. : Racines, tige/tronc, feuilles, fleurs/fruits. L'arbre donne du bois, purifie l'air et retient la terre contre les lavaka."),
        ("Quelles sont les caractéristiques d'une maison saine ?",
         "R.A. : Propre, avec de grandes fenêtres pour l'air et le soleil, une cuisine séparée et des latrines couvertes loin du puits."),
        ("Quelle est l'utilité de la poule et du zébu pour les familles malgaches ?",
         "R.A. : La poule donne des œufs et de la viande. Le zébu aide à labourer, piétiner les rizières, tire les charrettes et donne du lait et du fumier.")
    ],
    "ana_tech": "Dialogue socratique / Révision générale",
    "ana_supp": "Tableau noir",
    "syn_teacher": "Donc, ce 3e trimestre nous a appris comment respirer et se protéger du paludisme, comment les plantes et les arbres enrichissent notre vie et notre sol, et comment entretenir notre maison et nos animaux domestiques utiles (poule et zébu).",
    "syn_students": "Écoutent la synthèse générale.",
    "syn_tech": "Synthèse magistrale",
    "syn_supp": "Tableau noir",
    "app_exercises_teacher": [
        "1. Citez 2 signes du paludisme et 1 moyen de s'en protéger.",
        "2. Donnez 2 rôles capitaux du zébu dans l'agriculture."
    ],
    "app_corriges_students": [
        ("1. Signes : ", "forte fièvre et frissons", " ; Protection : ", "moustiquaire imprégnée MILDA", "."),
        ("2. Rôles : ", "piétiner la rizière et tirer la charrue", ".")
    ],
    "app_tech": "Pratique collective",
    "app_supp": "Ardoise",
    "duree_eval": "5 min",
    "eval_exercises_teacher": [
        "1. Quels organes se gonflent d'air lors de l'inspiration ?",
        "2. Comment appelle-t-on les ravins d'érosion causés par la déforestation à Madagascar ?"
    ],
    "eval_corriges_students": [
        ("1. Ce sont ", "les deux poumons", "."),
        ("2. Ce sont ", "les lavaka", ".")
    ],
    "eval_tech": "Contrôle écrit rapide",
    "eval_supp": "Cahier de classe",
    "lesson_sections": [
        {
            "title": "1. Synthèse thématique 1 : Respiration et lutte contre le paludisme",
            "paragraphs": [
                [("• Appareil respiratoire : ", False, C_DARK), ("nez, trachée, bronches, poumons", True, C_BLUE), (". Inspiration (l'air pur entre), Expiration (l'air vicié sort).", False, C_DARK)],
                [("• Paludisme : transmis par ", False, C_DARK), ("l'anophèle", True, C_BLUE), (". Dormir sous ", False, C_DARK), ("moustiquaire imprégnée MILDA", True, C_BLUE), (" et détruire les eaux stagnantes.", False, C_DARK)]
            ]
        },
        {
            "title": "2. Synthèse thématique 2 : Monde végétal et arbres",
            "paragraphs": [
                [("• La plante vit grâce aux ", False, C_DARK), ("racines, tige/tronc, feuilles, fleurs et fruits", True, C_BLUE), (".", False, C_DARK)],
                [("• L'arbre protège les sols contre les ", False, C_DARK), ("lavaka", True, C_BLUE), (" et donne de l'oxygène. Refuser les feux de brousse (", False, C_DARK), ("*doro tanety*", True, C_BLUE), (") et reboiser.", False, C_DARK)]
            ]
        },
        {
            "title": "3. Synthèse thématique 3 : Habitat et animaux utiles",
            "paragraphs": [
                [("• Habitat sain : ", False, C_DARK), ("fenêtres ouvertes, lumière, cour balayée, latrines couvertes", True, C_BLUE), (".", False, C_DARK)],
                [("• Animaux utiles : la ", False, C_DARK), ("poule", True, C_BLUE), (" (œufs, chair, 21 jours de couvaison) et le ", False, C_DARK), ("zébu", True, C_BLUE), (" (travail agricole, lait, traction, fumier).", False, C_DARK)]
            ]
        }
    ],
    "image_path": "plante_organes.png",
    "image_legend": "Schéma Bilan T3 : Synthèse des sciences de la nature du Troisième Trimestre",
    "exercices_page": [
        {
            "num": "Exercice 1",
            "title": "Grand bilan du Troisième Trimestre",
            "bareme": "10 points (2 pts par réponse)",
            "lines": [
                "Complétez avec les termes adéquats :",
                "1. Les organes qui se gonflent d'air dans la poitrine sont les __________ .",
                "2. Le moustique transmetteur du paludisme est l'__________ .",
                "3. Les ravins d'érosion sur les collines déboisées sont les __________ .",
                "4. La durée de couvaison des œufs par la poule est de __________ jours.",
                "5. La réserve d'énergie située sur le dos du zébu est sa __________ ."
            ]
        },
        {
            "num": "Exercice 2",
            "title": "Quiz de synthèse Trimestre 3",
            "bareme": "10 points (2,5 pts par question)",
            "lines": [
                "Entourez la bonne réponse :",
                "a) L'inspiration permet de : 1) Manger  2) Faire entrer de l'air frais dans les poumons  3) Dormir",
                "b) Pour se protéger du paludisme la nuit, on dort sous : 1) Un arbre  2) Une moustiquaire MILDA  3) Un chapeau",
                "c) Le reboisement consiste à : 1) Brûler l'herbe  2) Planter de nouveaux arbres  3) Couper le bois",
                "d) Le zébu aide le paysan en : 1) Piquant les gens  2) Labourant avec la charrue  3) Pondant des œufs"
            ]
        }
    ],
    "corriges_page": [
        {
            "num": "Exercice 1",
            "title": "Grand bilan du Troisième Trimestre",
            "bareme": "10 points",
            "answers": [
                [("1. Organes gonflés d'air : ", False, C_DARK), ("Poumons", True, C_CORR), (" (2 pts)", False, C_GRAY_TEXT)],
                [("2. Moustique du paludisme : ", False, C_DARK), ("Anophèle", True, C_CORR), (" (2 pts)", False, C_GRAY_TEXT)],
                [("3. Ravins d'érosion : ", False, C_DARK), ("Lavaka", True, C_CORR), (" (2 pts)", False, C_GRAY_TEXT)],
                [("4. Durée de couvaison : ", False, C_DARK), ("21 (jours)", True, C_CORR), (" (2 pts)", False, C_GRAY_TEXT)],
                [("5. Réserve du zébu : ", False, C_DARK), ("Bosse", True, C_CORR), (" (2 pts)", False, C_GRAY_TEXT)]
            ]
        },
        {
            "num": "Exercice 2",
            "title": "Quiz de synthèse Trimestre 3",
            "bareme": "10 points",
            "answers": [
                [("a) Rôle inspiration : ", False, C_DARK), ("2) Faire entrer de l'air frais dans les poumons", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                [("b) Protection paludisme : ", False, C_DARK), ("2) Une moustiquaire MILDA", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                [("c) Reboisement : ", False, C_DARK), ("2) Planter de nouveaux arbres", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                [("d) Rôle du zébu : ", False, C_DARK), ("2) Labourant avec la charrue", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
            ]
        }
    ]
}

# Séance 32 : Examen Trimestre 3
exam_session_32 = {
    "seance_num": 32,
    "titre": "Sujet d'examen — Troisième Trimestre (SVT 9e)",
    "theme": "Évaluation sommative du Troisième Trimestre",
    "bareme_total": "20 points",
    "parties": [
        {
            "titre": "Partie I : La respiration et la santé (5 points)",
            "questions": [
                "1. Citez les organes de l'appareil respiratoire. (2 pts)",
                "2. Expliquez la différence entre l'inspiration et l'expiration. (3 pts)"
            ],
            "corriges": [
                [("1. Organes : ", False, C_DARK), ("le nez, la trachée, les bronches et les deux poumons", True, C_CORR), (" (2 pts).", False, C_GRAY_TEXT)],
                [("2. Différence : ", False, C_DARK), ("l'inspiration fait entrer l'air pur et gonfle les poumons, tandis que l'expiration rejette l'air vicié et abaisse la poitrine", True, C_CORR), (" (3 pts).", False, C_GRAY_TEXT)]
            ]
        },
        {
            "titre": "Partie II : Le paludisme et sa prévention (5 points)",
            "questions": [
                "1. Quel moustique transmet le paludisme ? (1,5 pt)",
                "2. Citez deux signes du paludisme. (1,5 pt)",
                "3. Donnez deux moyens de prévention contre le paludisme. (2 pts)"
            ],
            "corriges": [
                [("1. C'est ", False, C_DARK), ("l'anophèle femelle", True, C_CORR), (" (1,5 pt).", False, C_GRAY_TEXT)],
                [("2. Deux signes : ", False, C_DARK), ("forte fièvre, frissons (ou maux de tête)", True, C_CORR), (" (1,5 pt).", False, C_GRAY_TEXT)],
                [("3. Deux moyens : ", False, C_DARK), ("dormir sous moustiquaire imprégnée MILDA et éliminer les eaux stagnantes", True, C_CORR), (" (2 pts).", False, C_GRAY_TEXT)]
            ]
        },
        {
            "titre": "Partie III : Les plantes et les arbres (5 points)",
            "questions": [
                "1. Quelles sont les 4 parties principales d'une plante ? (2 pts)",
                "2. Pourquoi les arbres sont-ils indispensables pour protéger le sol de Madagascar ? (3 pts)"
            ],
            "corriges": [
                [("1. Les 4 parties : ", False, C_DARK), ("les racines, la tige/tronc, les feuilles et les fleurs/fruits", True, C_CORR), (" (2 pts).", False, C_GRAY_TEXT)],
                [("2. Leurs racines ", False, C_DARK), ("retiennent la terre meuble et empêchent l'érosion de creuser des lavaka qui ensablent les rizières", True, C_CORR), (" (3 pts).", False, C_GRAY_TEXT)]
            ]
        },
        {
            "titre": "Partie IV : L'habitat et les animaux domestiques (5 points)",
            "questions": [
                "1. Donnez deux caractéristiques d'une maison saine. (2 pts)",
                "2. Citez deux services immenses que le zébu rend au paysan malgache. (3 pts)"
            ],
            "corriges": [
                [("1. Deux caractéristiques : ", False, C_DARK), ("des fenêtres bien ouvertes pour l'air et le soleil, et des latrines couvertes et propres", True, C_CORR), (" (2 pts).", False, C_GRAY_TEXT)],
                [("2. Deux services : ", False, C_DARK), ("piétiner les rizières, labourer à la charrue et tirer les charrettes", True, C_CORR), (" (3 pts).", False, C_GRAY_TEXT)]
            ]
        }
    ]
}

# Séance 33 : Grand Examen Final Annuel
exam_session_33 = {
    "seance_num": 33,
    "titre": "Grand Examen Final Annuel — Connaissances Usuelles / SVT 9e",
    "theme": "Évaluation sommative annuelle de fin d'année (Programmes complets T1 + T2 + T3)",
    "bareme_total": "20 points",
    "parties": [
        {
            "titre": "Partie I : Le corps humain, les membres et les sens (5 points)",
            "questions": [
                "1. Citez les trois grandes parties du corps humain. (1 pt)",
                "2. Nommez les trois articulations du bras et les trois articulations de la jambe. (2 pts)",
                "3. Associez chaque organe au sens correspondant : Peau / Œil / Oreille / Langue -> Toucher / Vue / Ouïe / Goût. (2 pts)"
            ],
            "corriges": [
                [("1. Les 3 parties : ", False, C_DARK), ("la tête, le tronc et les membres", True, C_CORR), (" (1 pt).", False, C_GRAY_TEXT)],
                [("2. Bras : ", False, C_DARK), ("épaule, coude, poignet", True, C_CORR), (" ; Jambe : ", False, C_DARK), ("hanche, genou, cheville", True, C_CORR), (" (2 pts).", False, C_GRAY_TEXT)],
                [("3. Peau -> ", False, C_DARK), ("Toucher", True, C_CORR), (" ; Œil -> ", False, C_DARK), ("Vue", True, C_CORR), (" ; Oreille -> ", False, C_DARK), ("Ouïe", True, C_CORR), (" ; Langue -> ", False, C_DARK), ("Goût", True, C_CORR), (" (2 pts).", False, C_GRAY_TEXT)]
            ]
        },
        {
            "titre": "Partie II : La dentition et la digestion (5 points)",
            "questions": [
                "1. Nommez les 3 sortes de dents et leur rôle (couper, déchirer, broyer). (2 pts)",
                "2. Écrivez dans l'ordre les 5 étapes du trajet des aliments dans le tube digestif. (2 pts)",
                "3. Comment doit-on brosser ses dents pour éviter les caries ? (1 pt)"
            ],
            "corriges": [
                [("1. Dents : ", False, C_DARK), ("Incisives (couper), Canines (déchirer), Molaires (broyer)", True, C_CORR), (" (2 pts).", False, C_GRAY_TEXT)],
                [("2. Trajet : ", False, C_DARK), ("Bouche -> Œsophage -> Estomac -> Intestin grêle -> Gros intestin", True, C_CORR), (" (2 pts).", False, C_GRAY_TEXT)],
                [("3. Brosser ", False, C_DARK), ("du rouge vers le blanc (de la gencive vers la dent) après chaque repas", True, C_CORR), (" (1 pt).", False, C_GRAY_TEXT)]
            ]
        },
        {
            "titre": "Partie III : L'eau, l'air et la respiration (5 points)",
            "questions": [
                "1. Citez les trois états physiques de l'eau. (1,5 pt)",
                "2. Donnez deux méthodes simples pour obtenir de l'eau potable à la maison. (1,5 pt)",
                "3. Citez les organes de l'appareil respiratoire. (2 pts)"
            ],
            "corriges": [
                [("1. États de l'eau : ", False, C_DARK), ("solide (glace), liquide (eau) et gazeux (vapeur)", True, C_CORR), (" (1,5 pt).", False, C_GRAY_TEXT)],
                [("2. Eau potable : ", False, C_DARK), ("faire bouillir l'eau pendant 10 minutes et utiliser Sur'Eau", True, C_CORR), (" (1,5 pt).", False, C_GRAY_TEXT)],
                [("3. Organes respiratoires : ", False, C_DARK), ("le nez, la trachée, les bronches et les deux poumons", True, C_CORR), (" (2 pts).", False, C_GRAY_TEXT)]
            ]
        },
        {
            "titre": "Partie IV : Santé, nature et animaux utiles (5 points)",
            "questions": [
                "1. Quel moustique transmet le paludisme et quel moyen de protection utilise-t-on la nuit ? (2 pts)",
                "2. Pourquoi doit-on planter des arbres et refuser les feux de brousse (*doro tanety*) ? (1,5 pt)",
                "3. Donnez deux services essentiels rendus par le zébu au paysan malgache. (1,5 pt)"
            ],
            "corriges": [
                [("1. Moustique : ", False, C_DARK), ("l'anophèle femelle", True, C_CORR), (" ; Protection : ", False, C_DARK), ("dormir sous moustiquaire imprégnée MILDA", True, C_CORR), (" (2 pts).", False, C_GRAY_TEXT)],
                [("2. Les arbres ", False, C_DARK), ("purifient l'air, donnent du bois et retiennent la terre contre les lavaka", True, C_CORR), (" (1,5 pt).", False, C_GRAY_TEXT)],
                [("3. Services du zébu : ", False, C_DARK), ("piétiner les rizières, labourer à la charrue, tirer les charrettes, donner du lait et du fumier", True, C_CORR), (" (1,5 pt).", False, C_GRAY_TEXT)]
            ]
        }
    ]
}
