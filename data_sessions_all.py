# -*- coding: utf-8 -*-
from constants import C_RED, C_GREEN, C_BLUE, C_CORR, C_DARK, C_EMERALD, C_GRAY_TEXT

sessions_t1 = [
    # -------------------------------------------------------------------------
    # SÉANCE 1
    # -------------------------------------------------------------------------
    {
        "seance_num": 1,
        "titre": "Les différentes parties du corps humain",
        "theme": "Le corps humain",
        "obj": "Distinguer les trois grandes parties du corps humain (tête, tronc, membres) et nommer les principaux organes.",
        "doc_ref": "Programme officiel Connaissances Usuelles 9e (FRA / FRM)",
        "support": "Planche anatomique / Schéma du corps humain",
        "seance_str": "1 / 11",
        "duree_str": "30 minutes",
        "duree_rev": "3 min",
        "rev_teacher": "C'est notre première leçon de sciences. De quoi avons-nous besoin pour vivre et grandir en bonne santé ?",
        "rev_students": "R.A. : Nous avons besoin d'une bonne alimentation, d'eau propre, d'air pur et de prendre soin de notre corps.",
        "duree_lecon": "22 min",
        "mis_teacher": "Regardez votre camarade debout. Quelles sont les grandes parties qui forment son corps ?",
        "mis_students": "R.A. : Le corps est formé par la tête, le ventre, les bras et les jambes.",
        "mis_tech": "Questionnement / Échange oral",
        "mis_supp": "Tableau noir, élève modèle",
        "pres_teacher": "Aujourd'hui, nous allons apprendre : « Les différentes parties du corps humain ». Après cette séance, vous serez capables de nommer les 3 grandes parties du corps et leurs composantes.",
        "pres_students": "Écoutent attentivement l'objectif de la leçon.",
        "pres_tech": "Expositive directe",
        "pres_supp": "Tableau noir",
        "obs_teacher": "Regardez attentivement cette planche illustrée du corps humain. Observez la tête en haut, le tronc au milieu et les membres attachés.",
        "obs_students": "Observent silencieusement la silhouette humaine sans intervenir.",
        "obs_tech": "Observation guidée",
        "obs_supp": "Schéma du corps humain",
        "obs_obs": "Vérifier que les élèves distinguent la tête, le tronc et les membres.",
        "ana_q_ra_list": [
            ("En combien de grandes parties le corps humain est-il divisé ?",
             "R.A. : Le corps humain est divisé en 3 grandes parties : la tête, le tronc et les membres."),
            ("Qu'est-ce qui relie la tête au tronc ?",
             "R.A. : C'est le cou qui relie la tête au tronc."),
            ("De quoi se compose le tronc ?",
             "R.A. : Le tronc comprend la poitrine (thorax) en haut et le ventre (abdomen) en bas. À l'arrière, c'est le dos."),
            ("Quels sont les membres du corps humain ?",
             "R.A. : Il y a deux membres supérieurs (les bras) et deux membres inférieurs (les jambes)."),
            ("Quels organes importants sont logés dans la tête et le tronc ?",
             "R.A. : Le cerveau et les organes des sens sont dans la tête. Le cœur et les poumons sont dans la poitrine ; l'estomac et les intestins sont dans le ventre.")
        ],
        "ana_tech": "Questionnement analytique / Déduction",
        "ana_supp": "Schéma du corps humain",
        "syn_teacher": "Donc, le corps humain comprend 3 grandes parties : la tête (avec les organes des sens), le tronc (poitrine et ventre, relié par le cou) et les 4 membres (2 membres supérieurs pour attraper et 2 membres inférieurs pour se déplacer).",
        "syn_students": "Écoutent la synthèse de l'enseignant et répètent ensemble les 3 grandes parties.",
        "syn_tech": "Exposition récapitulative",
        "syn_supp": "Tableau noir",
        "app_exercises_teacher": [
            "1. Montrez et nommez sur votre propre corps : la tête, le cou, la poitrine, le ventre, le bras et la jambe.",
            "2. Complétez la phrase : Les bras sont les membres ... et les jambes sont les membres ... ."
        ],
        "app_corriges_students": [
            "1. L'élève montre avec précision chaque partie en nommant correctement tête, cou, poitrine, ventre, bras et jambe.",
            ("2. Les bras sont les membres ", "supérieurs", " et les jambes sont les membres ", "inférieurs", ".")
        ],
        "app_tech": "Pratique guidée / Travail sur ardoise",
        "app_supp": "Ardoise, corps de l'élève",
        "duree_eval": "5 min",
        "eval_exercises_teacher": [
            "1. Répondez par Vrai ou Faux : a) Le cou relie les membres au ventre. b) Le cœur est situé dans la poitrine. c) Les jambes sont des membres supérieurs.",
            "2. Citez les 3 grandes parties du corps humain."
        ],
        "eval_corriges_students": [
            ("1. a) ", "Faux", " (le cou relie la tête au tronc). b) ", "Vrai", ". c) ", "Faux", " (les jambes sont les membres inférieurs)."),
            ("2. Les 3 grandes parties sont : ", "la tête", ", ", "le tronc", " et ", "les membres", ".")
        ],
        "eval_tech": "Évaluation individuelle sur cahier",
        "eval_supp": "Cahier de classe",
        "lesson_sections": [
            {
                "title": "1. Les trois grandes divisions du corps",
                "paragraphs": [
                    [("Le corps humain est composé de trois grandes parties principales :", True, C_DARK)],
                    [("• ", False, C_DARK), ("La tête", True, C_BLUE), (" : située au sommet, elle porte le visage, les cheveux et renferme le cerveau.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Le tronc", True, C_BLUE), (" : c'est la partie centrale du corps. Il est relié à la tête par ", False, C_DARK), ("le cou", True, C_BLUE), (". Il comprend ", False, C_DARK), ("la poitrine", True, C_BLUE), (" (ou thorax) en haut et ", False, C_DARK), ("le ventre", True, C_BLUE), (" (ou abdomen) en bas.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Les membres", True, C_BLUE), (" : fixés au tronc, ils sont au nombre de quatre. On distingue les deux ", False, C_DARK), ("membres supérieurs", True, C_BLUE), (" (les bras) et les deux ", False, C_DARK), ("membres inférieurs", True, C_BLUE), (" (les jambes).", False, C_DARK)]
                ]
            },
            {
                "title": "2. Les principaux organes et leur emplacement",
                "paragraphs": [
                    [("À l'intérieur du corps se trouvent des organes indispensables à la vie :", False, C_DARK)],
                    [("• Dans la tête : le ", False, C_DARK), ("cerveau", True, C_BLUE), (" commande tout le corps, et les ", False, C_DARK), ("organes des sens", True, C_BLUE), (" (yeux, oreilles, nez, langue) nous informent sur notre environnement.", False, C_DARK)],
                    [("• Dans la poitrine : le ", False, C_DARK), ("cœur", True, C_BLUE), (" fait circuler le sang et les deux ", False, C_DARK), ("poumons", True, C_BLUE), (" permettent de respirer.", False, C_DARK)],
                    [("• Dans le ventre : l'", False, C_DARK), ("estomac", True, C_BLUE), (" et les ", False, C_DARK), ("intestins", True, C_BLUE), (" assurent la digestion des aliments.", False, C_DARK)]
                ]
            },
            {
                "title": "3. À retenir",
                "paragraphs": [
                    [("Mon corps comprend ", False, C_DARK), ("la tête", True, C_BLUE), (", ", False, C_DARK), ("le tronc", True, C_BLUE), (" (poitrine et ventre) et ", False, C_DARK), ("les 4 membres", True, C_BLUE), (" (2 bras et 2 jambes). Pour rester en bonne santé, je dois nourrir, laver et protéger chaque partie de mon corps.", False, C_DARK)]
                ]
            }
        ],
        "image_path": "squelette_humain.png",
        "image_legend": "Schéma 1 : Le corps humain et les trois grandes régions du squelette",
        "exercices_page": [
            {
                "num": "Exercice 1",
                "title": "Localisation des parties du corps",
                "bareme": "10 points (2,5 pts par réponse)",
                "lines": [
                    "Indiquez dans quelle grande partie du corps (Tête, Tronc, Membre supérieur ou Membre inférieur) se trouve chaque élément :",
                    "a) Le genou : ____________________",
                    "b) Les yeux : ____________________",
                    "c) Le cœur : ____________________",
                    "d) Le coude : ____________________"
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur l'organisation du corps",
                "bareme": "10 points (2,5 pts par item)",
                "lines": [
                    "Écrivez « Vrai » ou « Faux » devant chaque affirmation :",
                    "1. Le corps humain possède quatre membres inférieurs. [ _____ ]",
                    "2. Le cou permet de relier la tête au tronc. [ _____ ]",
                    "3. Les poumons sont situés à l'intérieur du ventre. [ _____ ]",
                    "4. La poitrine et le ventre forment le tronc. [ _____ ]"
                ]
            }
        ],
        "corriges_page": [
            {
                "num": "Exercice 1",
                "title": "Localisation des parties du corps",
                "bareme": "10 points",
                "answers": [
                    [("a) Le genou : ", False, C_DARK), ("Membre inférieur", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("b) Les yeux : ", False, C_DARK), ("Tête", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("c) Le cœur : ", False, C_DARK), ("Tronc (dans la poitrine)", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("d) Le coude : ", False, C_DARK), ("Membre supérieur", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur l'organisation du corps",
                "bareme": "10 points",
                "answers": [
                    [("1. Le corps humain possède quatre membres inférieurs : ", False, C_DARK), ("Faux", True, C_CORR), (" (il a 2 membres inférieurs et 2 membres supérieurs) (2,5 pts)", False, C_GRAY_TEXT)],
                    [("2. Le cou permet de relier la tête au tronc : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("3. Les poumons sont situés à l'intérieur du ventre : ", False, C_DARK), ("Faux", True, C_CORR), (" (les poumons sont dans la poitrine) (2,5 pts)", False, C_GRAY_TEXT)],
                    [("4. La poitrine et le ventre forment le tronc : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            }
        ]
    },

    # -------------------------------------------------------------------------
    # SÉANCE 2
    # -------------------------------------------------------------------------
    {
        "seance_num": 2,
        "titre": "Les membres supérieurs et leurs articulations",
        "theme": "Le corps humain",
        "obj": "Décrire les trois segments du membre supérieur (bras, avant-bras, main) et comprendre le fonctionnement des articulations.",
        "doc_ref": "Programme officiel Connaissances Usuelles 9e (FRA / FRM)",
        "support": "Schéma anatomique du membre supérieur / Planche musculaire",
        "seance_str": "2 / 11",
        "duree_str": "30 minutes",
        "duree_rev": "3 min",
        "rev_teacher": "Quelles sont les 3 grandes parties du corps humain apprises lors de la séance précédente ?",
        "rev_students": "R.A. : Les 3 grandes parties sont la tête, le tronc et les membres.",
        "duree_lecon": "22 min",
        "mis_teacher": "Levez la main droite pour toucher votre épaule gauche. Quels mouvements votre bras a-t-il faits ?",
        "mis_students": "R.A. : Le bras s'est levé, s'est plié au coude et la main s'est posée sur l'épaule.",
        "mis_tech": "Mise en situation motrice / Éveil corporel",
        "mis_supp": "Bras de l'élève",
        "pres_teacher": "Aujourd'hui, nous allons apprendre : « Les membres supérieurs et leurs articulations ». Après cette séance, vous saurez nommer les 3 parties du membre supérieur et ses 3 articulations.",
        "pres_students": "Écoutent attentivement la présentation.",
        "pres_tech": "Expositive",
        "pres_supp": "Tableau noir",
        "obs_teacher": "Regardez attentivement ce schéma du membre supérieur. Repérez le bras en haut, l'avant-bras au milieu et la main en bas.",
        "obs_students": "Observent le schéma et repèrent les zones de pliure.",
        "obs_tech": "Observation de planche anatomique",
        "obs_supp": "Schéma du bras",
        "obs_obs": "Vérifier que les élèves identifient bien l'épaule, le coude et le poignet.",
        "ana_q_ra_list": [
            ("Quelles sont les trois parties qui forment le membre supérieur ?",
             "R.A. : Le membre supérieur comprend le bras (en haut), l'avant-bras (au milieu) et la main (au bout)."),
            ("Qu'est-ce qu'une articulation ?",
             "R.A. : Une articulation est l'endroit où deux os se rejoignent et permettent le mouvement."),
            ("Quelles sont les trois articulations du membre supérieur ?",
             "R.A. : L'épaule (relie le bras au tronc), le coude (relie le bras à l'avant-bras) et le poignet (relie l'avant-bras à la main)."),
            ("De quoi est composée la main ?",
             "R.A. : La main est composée de la paume, du dos et de 5 doigts terminés par des ongles."),
            ("À quoi nous servent nos membres supérieurs au quotidien ?",
             "R.A. : Ils servent à attraper des objets, écrire, manger, porter, lancer et travailler.")
        ],
        "ana_tech": "Analyse guidée / Démonstration physique",
        "ana_supp": "Schéma du membre supérieur",
        "syn_teacher": "Donc, chaque membre supérieur comprend 3 parties : le bras, l'avant-bras et la main (à 5 doigts). Il possède 3 articulations qui permettent de bouger : l'épaule, le coude et le poignet.",
        "syn_students": "Écoutent la synthèse du maître et plient leur coude et poignet.",
        "syn_tech": "Synthèse magistrale",
        "syn_supp": "Tableau noir",
        "app_exercises_teacher": [
            "1. Touchez votre coude droit et pliez-le. Quelle partie relie-t-il ?",
            "2. Rangez du haut vers le bas les 3 parties du membre supérieur : la main, le bras, l'avant-bras."
        ],
        "app_corriges_students": [
            "1. L'élève touche son coude et répond : « Le coude relie le bras et l'avant-bras ».",
            ("2. Du haut vers le bas : 1. ", "Le bras", " - 2. ", "L'avant-bras", " - 3. ", "La main", ".")
        ],
        "app_tech": "Pratique active sur ardoise",
        "app_supp": "Ardoise",
        "duree_eval": "5 min",
        "eval_exercises_teacher": [
            "1. Associez chaque articulation à son rôle : a) Épaule / b) Coude / c) Poignet -> 1) Relie l'avant-bras à la main / 2) Relie le bras au tronc / 3) Relie le bras à l'avant-bras.",
            "2. Combien de doigts possède chaque main ? Citez le nom de deux doigts."
        ],
        "eval_corriges_students": [
            ("1. a) Épaule -> ", "2 (relie le bras au tronc)", " ; b) Coude -> ", "3 (relie le bras à l'avant-bras)", " ; c) Poignet -> ", "1 (relie l'avant-bras à la main)", "."),
            ("2. Chaque main possède ", "5 doigts", ". Exemples : ", "le pouce, l'index, le majeur, l'annulaire, l'auriculaire", ".")
        ],
        "eval_tech": "Contrôle écrit sur cahier",
        "eval_supp": "Cahier de classe",
        "lesson_sections": [
            {
                "title": "1. Les trois parties du membre supérieur",
                "paragraphs": [
                    [("Le membre supérieur (le bras complet) est divisé en trois parties successives :", False, C_DARK)],
                    [("1. ", False, C_DARK), ("Le bras", True, C_BLUE), (" : situé entre l'épaule et le coude.", False, C_DARK)],
                    [("2. ", False, C_DARK), ("L'avant-bras", True, C_BLUE), (" : situé entre le coude et le poignet.", False, C_DARK)],
                    [("3. ", False, C_DARK), ("La main", True, C_BLUE), (" : située à l'extrémité, elle comprend la paume, le dos et ", False, C_DARK), ("5 doigts", True, C_BLUE), (" (le pouce, l'index, le majeur, l'annulaire et l'auriculaire).", False, C_DARK)]
                ]
            },
            {
                "title": "2. Les articulations du membre supérieur",
                "paragraphs": [
                    [("Une ", False, C_DARK), ("articulation", True, C_BLUE), (" est la jonction mobile entre deux os. Le membre supérieur possède 3 articulations principales :", False, C_DARK)],
                    [("• ", False, C_DARK), ("L'épaule", True, C_BLUE), (" : attache le bras au tronc et permet de tourner le bras dans toutes les directions.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Le coude", True, C_BLUE), (" : permet de plier (flexion) et de tendre (extension) l'avant-bras.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Le poignet", True, C_BLUE), (" : permet à la main de bouger avec précision pour écrire et saisir les objets.", False, C_DARK)]
                ]
            },
            {
                "title": "3. À retenir",
                "paragraphs": [
                    [("Mon membre supérieur comprend ", False, C_DARK), ("le bras, l'avant-bras et la main", True, C_BLUE), (". Grâce aux articulations de ", False, C_DARK), ("l'épaule, du coude et du poignet", True, C_BLUE), (", je peux plier mon bras, écrire, porter et travailler avec agilité.", False, C_DARK)]
                ]
            }
        ],
        "image_path": "bras_muscles.png",
        "image_legend": "Schéma 2 : Les membres supérieurs, articulations et muscles (biceps/triceps)",
        "exercices_page": [
            {
                "num": "Exercice 1",
                "title": "Les articulations et leurs liaisons",
                "bareme": "10 points (3,33 pts par liaison)",
                "lines": [
                    "Reliez par une flèche chaque articulation aux deux parties qu'elle relie :",
                    "• Épaule   --->  [ Avant-bras et Main ]",
                    "• Coude    --->  [ Tronc et Bras ]",
                    "• Poignet  --->  [ Bras et Avant-bras ]"
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Compléter la description du membre supérieur",
                "bareme": "10 points (2,5 pts par mot)",
                "lines": [
                    "Complétez le texte avec les mots suivants : doigts, coude, avant-bras, épaule.",
                    "Le membre supérieur est relié au tronc par l'__________ . Entre l'épaule et le poignet se trouvent le bras et l'__________ . L'articulation qui permet de plier le bras s'appelle le __________ . À l'extrémité, la main possède cinq __________ ."
                ]
            }
        ],
        "corriges_page": [
            {
                "num": "Exercice 1",
                "title": "Les articulations et leurs liaisons",
                "bareme": "10 points",
                "answers": [
                    [("• Épaule -> ", False, C_DARK), ("Tronc et Bras", True, C_CORR), (" (3,33 pts)", False, C_GRAY_TEXT)],
                    [("• Coude -> ", False, C_DARK), ("Bras et Avant-bras", True, C_CORR), (" (3,33 pts)", False, C_GRAY_TEXT)],
                    [("• Poignet -> ", False, C_DARK), ("Avant-bras et Main", True, C_CORR), (" (3,34 pts)", False, C_GRAY_TEXT)]
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Compléter la description du membre supérieur",
                "bareme": "10 points",
                "answers": [
                    [("Le membre supérieur est relié au tronc par ", False, C_DARK), ("l'épaule", True, C_CORR), (" (2,5 pts).", False, C_GRAY_TEXT)],
                    [("Entre l'épaule et le poignet se trouvent le bras et ", False, C_DARK), ("l'avant-bras", True, C_CORR), (" (2,5 pts).", False, C_GRAY_TEXT)],
                    [("L'articulation qui permet de plier le bras s'appelle ", False, C_DARK), ("le coude", True, C_CORR), (" (2,5 pts).", False, C_GRAY_TEXT)],
                    [("À l'extrémité, la main possède cinq ", False, C_DARK), ("doigts", True, C_CORR), (" (2,5 pts).", False, C_GRAY_TEXT)]
                ]
            }
        ]
    },

    # -------------------------------------------------------------------------
    # SÉANCE 3
    # -------------------------------------------------------------------------
    {
        "seance_num": 3,
        "titre": "Hygiène, sécurité et santé des membres supérieurs",
        "theme": "Hygiène et sécurité corporelle",
        "obj": "Appliquer les règles d'hygiène des mains et des ongles, connaître les mesures de sécurité pour éviter les accidents et faire des exercices pour fortifier les bras.",
        "doc_ref": "Programme officiel Connaissances Usuelles 9e (FRA / FRM)",
        "support": "Savon, eau propre, brosse à ongles, coupe-ongles",
        "seance_str": "3 / 11",
        "duree_str": "30 minutes",
        "duree_rev": "3 min",
        "rev_teacher": "Quelles sont les 3 articulations du membre supérieur apprises lors de la dernière séance ?",
        "rev_students": "R.A. : Les 3 articulations sont l'épaule, le coude et le poignet.",
        "duree_lecon": "22 min",
        "mis_teacher": "Que faites-vous avec vos mains avant de passer à table pour manger ?",
        "mis_students": "R.A. : Nous nous lavons soigneusement les mains avec de l'eau propre et du savon.",
        "mis_tech": "Mise en situation quotidienne",
        "mis_supp": "Discussion de classe",
        "pres_teacher": "Aujourd'hui, nous allons apprendre : « Hygiène, sécurité et santé des membres supérieurs ». Après cette séance, vous saurez comment laver vos mains, entretenir vos ongles et éviter les accidents de bras.",
        "pres_students": "Écoutent la présentation.",
        "pres_tech": "Expositive",
        "pres_supp": "Tableau noir",
        "obs_teacher": "Regardez cette démonstration du lavage des mains au savon et observez la propreté sous les ongles courts et taillés.",
        "obs_students": "Observent les gestes de lavage et l'état des ongles propres.",
        "obs_tech": "Démonstration pratique",
        "obs_supp": "Cuvette, savon, serviette",
        "obs_obs": "Insister sur le frottement de la paume, du dos et entre les doigts.",
        "ana_q_ra_list": [
            ("Pourquoi doit-on se laver les mains avec de l'eau et du savon ?",
             "R.A. : Pour éliminer la saleté et tuer les microbes invisibles qui causent des maladies."),
            ("À quels moments précis faut-il impérativement se laver les mains ?",
             "R.A. : Avant de manger, après être allé aux toilettes, après avoir joué dehors et en rentrant de l'école."),
            ("Comment doit-on entretenir ses ongles ?",
             "R.A. : Il faut couper les ongles courts régulièrement et les brosser pour ne pas loger de saleté ni de microbes."),
            ("Quels sont les dangers et accidents qui menacent nos bras et mains ?",
             "R.A. : Les chutes, les fractures, les brûlures avec le feu ou l'eau chaude, et les coupures avec des couteaux ou du verre cassé."),
            ("Quels exercices simples fortifient nos membres supérieurs ?",
             "R.A. : Lancer la balle, faire des tractions douces, nager, faire de la gymnastique et s'étirer.")
        ],
        "ana_tech": "Questionnement analytique / Hygiène pratique",
        "ana_supp": "Matériel de toilette",
        "syn_teacher": "Donc, pour protéger nos membres supérieurs, nous devons nous laver les mains à l'eau et au savon avant les repas et après les latrines, couper nos ongles courts, éviter les jeux dangereux (grimaces aux arbres, manipuler le feu) et faire du sport pour fortifier nos muscles.",
        "syn_students": "Écoutent la synthèse et mémorisent les règles d'hygiène.",
        "syn_tech": "Synthèse récapitulative",
        "syn_supp": "Tableau noir",
        "app_exercises_teacher": [
            "1. Mimez les 4 gestes du lavage des mains : mouiller, savonner et frotter, rincer, sécher.",
            "2. Citez deux objets tranchants dangereux pour les mains."
        ],
        "app_corriges_students": [
            "1. L'élève mime correctement les gestes de savonnage entre les doigts et sur le dos des mains.",
            ("2. Exemples : ", "les couteaux tranchants, les lames de rasoir, le verre brisé", ".")
        ],
        "app_tech": "Mime / Expression pratique",
        "app_supp": "Espace classe",
        "duree_eval": "5 min",
        "eval_exercises_teacher": [
            "1. Cochez les bonnes habitudes d'hygiène : a) Ronger ses ongles avec les dents. b) Se laver les mains avant de manger. c) Garder les ongles longs et noirs. d) Se laver les mains après les toilettes.",
            "2. Que risque un enfant qui monte imprudemment sur un mur instable ?"
        ],
        "eval_corriges_students": [
            ("1. Bonnes habitudes : ", "b) Se laver les mains avant de manger", " et ", "d) Se laver les mains après les toilettes", "."),
            ("2. Il risque de ", "tomber, se blesser, se casser ou se fracturer le bras", ".")
        ],
        "eval_tech": "Évaluation écrite sur ardoise/cahier",
        "eval_supp": "Cahier de classe",
        "lesson_sections": [
            {
                "title": "1. L'hygiène des mains et des ongles",
                "paragraphs": [
                    [("Nos mains touchent toutes sortes d'objets au cours de la journée. Elles se salissent et ramassent des ", False, C_DARK), ("microbes", True, C_BLUE), (" invisibles qui peuvent nous rendre malades.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Le lavage des mains", True, C_BLUE), (" : se laver toujours avec de ", False, C_DARK), ("l'eau propre et du savon", True, C_BLUE), (" en frottant la paume, le dos de la main et entre les doigts.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Moments obligatoires", True, C_BLUE), (" : avant de manger, après les latrines/toilettes, et après avoir manipulé des objets sales.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Les ongles", True, C_BLUE), (" : il faut couper les ongles courts à l'aide d'un coupe-ongles et les brosser. ", False, C_DARK), ("Ne jamais ronger ses ongles", True, C_BLUE), (" avec les dents !", False, C_DARK)]
                ]
            },
            {
                "title": "2. Sécurité et protection des membres supérieurs",
                "paragraphs": [
                    [("Pour éviter les accidents graves (fractures, brûlures, entorses, coupures) :", False, C_DARK)],
                    [("• Ne pas monter imprudemment aux arbres hauts ou sur les toits.", False, C_DARK)],
                    [("• Éviter de toucher les marmites bouillantes ou les braises du réchaud (*fatapera*).", False, C_DARK)],
                    [("• Ne pas manipuler des objets tranchants (lames, verre cassé, machette).", False, C_DARK)]
                ]
            },
            {
                "title": "3. À retenir",
                "paragraphs": [
                    [("Des mains propres et des ongles courts me protègent des maladies. Je me lave les mains à ", False, C_DARK), ("l'eau et au savon", True, C_BLUE), (" avant chaque repas et en sortant des latrines. Je protège mes bras en évitant les chutes et les jeux dangereux.", False, C_DARK)]
                ]
            }
        ],
        "image_path": "os_coupe.png",
        "image_legend": "Schéma 3 : Coupe d'un os long (cartilage, périoste, os compact, moelle)",
        "exercices_page": [
            {
                "num": "Exercice 1",
                "title": "Les étapes du lavage des mains",
                "bareme": "10 points (2,5 pts par étape)",
                "lines": [
                    "Remettez dans le bon ordre chronologique les étapes du lavage des mains (écrivez les numéros de 1 à 4) :",
                    "[ _____ ] Frotter avec du savon pendant 20 secondes (paumes, dos des mains, entre les doigts).",
                    "[ _____ ] Se sécher les mains avec un linge propre ou à l'air libre.",
                    "[ _____ ] Se mouiller les mains avec de l'eau propre.",
                    "[ _____ ] Rincer abondamment à l'eau courante propre."
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Comportements de sécurité",
                "bareme": "10 points (2,5 pts par item)",
                "lines": [
                    "Pour chaque situation, écrivez « Bon comportement » ou « Dangereux » :",
                    "a) Se couper les ongles avec des ciseaux d'école sales : ____________________",
                    "b) Se laver les mains au savon avant de toucher son goûter : ____________________",
                    "c) Sauter d'un mur haut en tendant les bras en avant : ____________________",
                    "d) Porter une charge adaptée à son âge avec les deux mains : ____________________"
                ]
            }
        ],
        "corriges_page": [
            {
                "num": "Exercice 1",
                "title": "Les étapes du lavage des mains",
                "bareme": "10 points",
                "answers": [
                    [("[ ", False, C_DARK), ("2", True, C_CORR), (" ] Frotter avec du savon pendant 20 secondes (2,5 pts)", False, C_DARK)],
                    [("[ ", False, C_DARK), ("4", True, C_CORR), (" ] Se sécher les mains avec un linge propre (2,5 pts)", False, C_DARK)],
                    [("[ ", False, C_DARK), ("1", True, C_CORR), (" ] Se mouiller les mains avec de l'eau propre (2,5 pts)", False, C_DARK)],
                    [("[ ", False, C_DARK), ("3", True, C_CORR), (" ] Rincer abondamment à l'eau courante propre (2,5 pts)", False, C_DARK)]
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Comportements de sécurité",
                "bareme": "10 points",
                "answers": [
                    [("a) Se couper les ongles avec des ciseaux sales : ", False, C_DARK), ("Dangereux", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("b) Se laver les mains au savon avant le goûter : ", False, C_DARK), ("Bon comportement", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("c) Sauter d'un mur haut les bras en avant : ", False, C_DARK), ("Dangereux", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("d) Porter une charge adaptée avec les deux mains : ", False, C_DARK), ("Bon comportement", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            }
        ]
    },

    # -------------------------------------------------------------------------
    # SÉANCE 4
    # -------------------------------------------------------------------------
    {
        "seance_num": 4,
        "titre": "Les membres inférieurs : anatomie, hygiène et sécurité",
        "theme": "Le corps humain & Motricité",
        "obj": "Décrire les 3 parties du membre inférieur (cuisse, jambe, pied), identifier les 3 articulations et appliquer les règles d'hygiène et de sécurité.",
        "doc_ref": "Programme officiel Connaissances Usuelles 9e (FRA / FRM)",
        "support": "Schéma anatomique du membre inférieur / Chaussures et savon",
        "seance_str": "4 / 11",
        "duree_str": "30 minutes",
        "duree_rev": "3 min",
        "rev_teacher": "Citez les deux moments obligatoires où il faut se laver les mains au savon.",
        "rev_students": "R.A. : Avant de manger et après être allé aux toilettes ou latrines.",
        "duree_lecon": "22 min",
        "mis_teacher": "Levez-vous et faites deux pas en avant. Quelles parties de votre corps vous permettent de marcher et de rester debout ?",
        "mis_students": "R.A. : Ce sont les membres inférieurs : les cuisses, les genoux, les jambes et les pieds.",
        "mis_tech": "Mise en situation motrice",
        "mis_supp": "Élèves debout",
        "pres_teacher": "Aujourd'hui, nous allons apprendre : « Les membres inférieurs : anatomie, hygiène et sécurité ». Après cette séance, vous connaîtrez les parties des jambes, leurs articulations et comment en prendre soin.",
        "pres_students": "Écoutent la présentation.",
        "pres_tech": "Expositive",
        "pres_supp": "Tableau noir",
        "obs_teacher": "Regardez ce schéma du membre inférieur. Repérez la cuisse en haut, le genou, la jambe au milieu, la cheville et le pied en bas.",
        "obs_students": "Observent attentivement le schéma et repèrent les 3 articulations.",
        "obs_tech": "Observation anatomique",
        "obs_supp": "Schéma de la jambe",
        "obs_obs": "Veiller à ce que les élèves ne confondent pas la cuisse (en haut) et la jambe (en bas).",
        "ana_q_ra_list": [
            ("Quelles sont les trois parties qui forment le membre inférieur ?",
             "R.A. : La cuisse (en haut), la jambe (au milieu) et le pied (en bas)."),
            ("Quelles sont les trois articulations du membre inférieur ?",
             "R.A. : La hanche (relie la cuisse au tronc), le genou (relie la cuisse à la jambe) et la cheville (relie la jambe au pied)."),
            ("De quoi est composé le pied ?",
             "R.A. : Le pied comprend le talon, la plante du pied, le coup-de-pied et 5 orteils."),
            ("Quelles sont les règles d'hygiène pour les membres inférieurs ?",
             "R.A. : Laver les pieds chaque jour au savon, bien sécher entre les orteils, couper les ongles des orteils et porter des chaussures propres."),
            ("Quels sont les risques d'accidents pour les jambes et pieds ?",
             "R.A. : Marcher pieds nus sur des épines ou des clous (risque de tétanos), glisser, tomber et se fouler la cheville (entorse).")
        ],
        "ana_tech": "Analyse interrogative / Démonstration",
        "ana_supp": "Schéma et corps de l'élève",
        "syn_teacher": "Donc, chaque membre inférieur comprend 3 parties : la cuisse, la jambe et le pied (à 5 orteils), reliés par la hanche, le genou et la cheville. Pour leur santé, il faut les laver chaque jour, couper les ongles, porter des sandales pour éviter les blessures et pratiquer la marche ou la course.",
        "syn_students": "Écoutent et répètent les 3 articulations du membre inférieur.",
        "syn_tech": "Synthèse récapitulative",
        "syn_supp": "Tableau noir",
        "app_exercises_teacher": [
            "1. Touchez votre genou droit et votre cheville gauche. Quelles parties relient-ils ?",
            "2. Pourquoi est-il dangereux de marcher pieds nus dans la cour de l'école ?"
        ],
        "app_corriges_students": [
            "1. L'élève touche son genou (relie cuisse et jambe) et sa cheville (relie jambe et pied).",
            ("2. On risque de ", "se blesser avec des cailloux, des épines, du verre cassé ou d'attraper des vers de pieds (puces chiques)", ".")
        ],
        "app_tech": "Pratique sur ardoise",
        "app_supp": "Ardoise",
        "duree_eval": "5 min",
        "eval_exercises_teacher": [
            "1. Complétez avec les mots : pied, cuisse, jambe. Du haut vers le bas, le membre inférieur est composé de la ..., de la ... et du ... .",
            "2. Citez deux mesures d'hygiène pour prendre soin de ses pieds."
        ],
        "eval_corriges_students": [
            ("1. Du haut vers le bas : de la ", "cuisse", ", de la ", "jambe", " et du ", "pied", "."),
            ("2. Deux mesures : ", "se laver les pieds avec de l'eau et du savon", " et ", "couper les ongles des orteils courts et brossés", ".")
        ],
        "eval_tech": "Évaluation individuelle sur cahier",
        "eval_supp": "Cahier de classe",
        "lesson_sections": [
            {
                "title": "1. Les trois parties du membre inférieur",
                "paragraphs": [
                    [("Le membre inférieur (la jambe complète) porte tout le poids du corps. Il comprend 3 parties :", False, C_DARK)],
                    [("1. ", False, C_DARK), ("La cuisse", True, C_BLUE), (" : la partie supérieure la plus épaisse et musclée.", False, C_DARK)],
                    [("2. ", False, C_DARK), ("La jambe", True, C_BLUE), (" : la partie médiane située entre le genou et la cheville.", False, C_DARK)],
                    [("3. ", False, C_DARK), ("Le pied", True, C_BLUE), (" : la partie inférieure qui repose sur le sol, terminée par ", False, C_DARK), ("5 orteils", True, C_BLUE), (".", False, C_DARK)]
                ]
            },
            {
                "title": "2. Les articulations du membre inférieur",
                "paragraphs": [
                    [("Trois grandes articulations permettent la marche, la course et le saut :", False, C_DARK)],
                    [("• ", False, C_DARK), ("La hanche", True, C_BLUE), (" : relie la cuisse au tronc (bassin).", False, C_DARK)],
                    [("• ", False, C_DARK), ("Le genou", True, C_BLUE), (" : relie la cuisse à la jambe et permet de plier la jambe.", False, C_DARK)],
                    [("• ", False, C_DARK), ("La cheville", True, C_BLUE), (" : relie la jambe au pied et donne de la souplesse aux pas.", False, C_DARK)]
                ]
            },
            {
                "title": "3. Hygiène et sécurité des pieds",
                "paragraphs": [
                    [("• Se laver les pieds tous les soirs à l'eau et au savon, et bien essuyer entre les orteils.", False, C_DARK)],
                    [("• Couper les ongles des orteils au carré pour éviter les ongles incarnés.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Porter des chaussures ou sandales", True, C_BLUE), (" pour se protéger des piqûres, clous rouillés et puces chiques.", False, C_DARK)]
                ]
            },
            {
                "title": "4. À retenir",
                "paragraphs": [
                    [("Le membre inférieur comprend ", False, C_DARK), ("la cuisse, la jambe et le pied", True, C_BLUE), (", articulés par ", False, C_DARK), ("la hanche, le genou et la cheville", True, C_BLUE), (". Je lave mes pieds chaque jour et je porte des chaussures pour éviter les blessures.", False, C_DARK)]
                ]
            }
        ],
        "image_path": "squelette_humain.png",
        "image_legend": "Schéma 4 : Les membres inférieurs et articulations porteuses",
        "exercices_page": [
            {
                "num": "Exercice 1",
                "title": "Les articulations du membre inférieur",
                "bareme": "10 points (3,33 pts par association)",
                "lines": [
                    "Associez chaque articulation à son emplacement :",
                    "• Hanche   --->  [ Entre la cuisse et la jambe ]",
                    "• Genou    --->  [ Entre la jambe et le pied ]",
                    "• Cheville --->  [ Entre le tronc et la cuisse ]"
                ]
            },
            {
                "num": "Exercice 2",
                "title": "QCM d'hygiène et d'anatomie",
                "bareme": "10 points (2,5 pts par question)",
                "lines": [
                    "Pour chaque question, entourez la bonne réponse :",
                    "1. Quelle partie du membre inférieur repose sur le sol ?  a) La cuisse   b) Le genou   c) Le pied",
                    "2. Combien d'orteils compte un pied humain normal ?  a) 4 orteils   b) 5 orteils   c) 6 orteils",
                    "3. Que risque-t-on en marchant pieds nus dans la boue ?  a) Des parasites   b) Rien   c) Une carie",
                    "4. L'articulation située au milieu de la jambe est :  a) Le poignet   b) Le coude   c) Le genou"
                ]
            }
        ],
        "corriges_page": [
            {
                "num": "Exercice 1",
                "title": "Les articulations du membre inférieur",
                "bareme": "10 points",
                "answers": [
                    [("• Hanche -> ", False, C_DARK), ("Entre le tronc et la cuisse", True, C_CORR), (" (3,33 pts)", False, C_GRAY_TEXT)],
                    [("• Genou -> ", False, C_DARK), ("Entre la cuisse et la jambe", True, C_CORR), (" (3,33 pts)", False, C_GRAY_TEXT)],
                    [("• Cheville -> ", False, C_DARK), ("Entre la jambe et le pied", True, C_CORR), (" (3,34 pts)", False, C_GRAY_TEXT)]
                ]
            },
            {
                "num": "Exercice 2",
                "title": "QCM d'hygiène et d'anatomie",
                "bareme": "10 points",
                "answers": [
                    [("1. Repose sur le sol : ", False, C_DARK), ("c) Le pied", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("2. Nombre d'orteils : ", False, C_DARK), ("b) 5 orteils", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("3. Risque pieds nus : ", False, C_DARK), ("a) Des parasites", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("4. Articulation du milieu : ", False, C_DARK), ("c) Le genou", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            }
        ]
    },

    # -------------------------------------------------------------------------
    # SÉANCE 5
    # -------------------------------------------------------------------------
    {
        "seance_num": 5,
        "titre": "La peau : constitution et rôles",
        "theme": "Les organes des sens & Protection corporelle",
        "obj": "Décrire la constitution de la peau (épiderme, derme, pores, poils) et expliquer ses trois grands rôles (enveloppe protectrice, organe du toucher, élimination de la sueur).",
        "doc_ref": "Programme officiel Connaissances Usuelles 9e (FRA / FRM)",
        "support": "Schéma en coupe de la peau (peau_coupe.png) / Loupe",
        "seance_str": "5 / 11",
        "duree_str": "30 minutes",
        "duree_rev": "3 min",
        "rev_teacher": "Quelles sont les 3 parties du membre inférieur apprises lors de la dernière séance ?",
        "rev_students": "R.A. : Les 3 parties sont la cuisse, la jambe et le pied.",
        "duree_lecon": "22 min",
        "mis_teacher": "Touchez le dos de votre main. Qu'est-ce qui recouvre et protège toute la surface de notre corps ?",
        "mis_students": "R.A. : C'est la peau qui recouvre tout notre corps.",
        "mis_tech": "Mise en situation tactile",
        "mis_supp": "Peau de la main",
        "pres_teacher": "Aujourd'hui, nous allons apprendre : « La peau : constitution et rôles ». Après cette séance, vous connaîtrez les couches de la peau, ses petits trous (pores) et ses fonctions indispensables.",
        "pres_students": "Écoutent la présentation.",
        "pres_tech": "Expositive",
        "pres_supp": "Tableau noir",
        "obs_teacher": "Regardez attentivement ce schéma en coupe de la peau. Observez la couche extérieure (épiderme), la couche profonde (derme), les poils et les petits orifices.",
        "obs_students": "Observent silencieusement le schéma en coupe.",
        "obs_tech": "Observation de schéma scientifique",
        "obs_supp": "Planche en coupe de la peau (peau_coupe.png)",
        "obs_obs": "Attirer l'attention sur les poils et les glandes sudoripares.",
        "ana_q_ra_list": [
            ("Quelles sont les deux couches principales de la peau ?",
             "R.A. : La couche externe en surface s'appelle l'épiderme, et la couche interne plus épaisse s'appelle le derme."),
            ("Que trouve-t-on à la surface de l'épiderme ?",
             "R.A. : On trouve des poils et de minuscules trous appelés pores."),
            ("À quoi servent les pores de la peau ?",
             "R.A. : Les pores laissent sortir la sueur (transpiration) pour rafraîchir le corps et éliminer les déchets."),
            ("Quel est le premier rôle protecteur de la peau ?",
             "R.A. : La peau est une enveloppe protectrice imperméable qui empêche les microbes et la poussière d'entrer dans notre organisme."),
            ("Quel sens est logé dans la peau ?",
             "R.A. : C'est le sens du toucher qui permet de sentir le chaud, le froid, la douleur, le doux et le rugueux.")
        ],
        "ana_tech": "Analyse guidée / Déduction scientifique",
        "ana_supp": "Schéma en coupe de la peau",
        "syn_teacher": "Donc, la peau est une enveloppe protectrice formée de deux couches : l'épiderme en surface (avec poils et pores) et le derme en profondeur. Elle sert à protéger les organes internes, à évacuer la sueur par les pores et à ressentir le monde grâce au sens du toucher.",
        "syn_students": "Écoutent et répètent les noms : épiderme, derme, pores, toucher.",
        "syn_tech": "Synthèse magistrale",
        "syn_supp": "Tableau noir",
        "app_exercises_teacher": [
            "1. Comment s'appelle la couche superficielle de la peau visible à l'œil nu ?",
            "2. Que se passe-t-il sur notre peau quand nous courons sous le soleil chaud ?"
        ],
        "app_corriges_students": [
            ("1. C'est ", "l'épiderme", "."),
            ("2. La peau transpire et évacue ", "de la sueur par les pores", " pour refroidir le corps.")
        ],
        "app_tech": "Application sur ardoise",
        "app_supp": "Ardoise",
        "duree_eval": "5 min",
        "eval_exercises_teacher": [
            "1. Citez les deux couches de la peau.",
            "2. Répondez par Vrai ou Faux : a) Les pores permettent à la sueur de sortir. b) La peau ne ressent ni le chaud ni le froid. c) L'épiderme est sous le derme."
        ],
        "eval_corriges_students": [
            ("1. Les deux couches sont : ", "l'épiderme", " et ", "le derme", "."),
            ("2. a) ", "Vrai", ". b) ", "Faux", " (la peau est l'organe du toucher). c) ", "Faux", " (l'épiderme est en surface).")
        ],
        "eval_tech": "Contrôle écrit individuel",
        "eval_supp": "Cahier de classe",
        "lesson_sections": [
            {
                "title": "1. La constitution de la peau",
                "paragraphs": [
                    [("La peau est l'organe le plus étendu du corps humain. Elle est constituée de deux couches superposées :", False, C_DARK)],
                    [("1. ", False, C_DARK), ("L'épiderme", True, C_BLUE), (" : c'est la couche externe, en surface. Elle est mince mais résistante. Elle porte les ", False, C_DARK), ("poils", True, C_BLUE), (" et des trous microscopiques appelés ", False, C_DARK), ("pores", True, C_BLUE), (".", False, C_DARK)],
                    [("2. ", False, C_DARK), ("Le derme", True, C_BLUE), (" : c'est la couche interne, plus épaisse. Elle contient des vaisseaux sanguins, des racines de poils et les nerfs du toucher.", False, C_DARK)]
                ]
            },
            {
                "title": "2. Les rôles essentiels de la peau",
                "paragraphs": [
                    [("La peau remplit trois fonctions vitales :", False, C_DARK)],
                    [("• ", False, C_DARK), ("Rôle protecteur", True, C_BLUE), (" : elle forme une barrière imperméable contre les microbes, le soleil et les blessures légères.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Organe du toucher", True, C_BLUE), (" : grâce aux terminaisons nerveuses, elle nous fait ressentir le chaud, le froid, la douleur, la douceur et la forme des objets.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Évacuation de la sueur", True, C_BLUE), (" : par les pores, la peau rejette la sueur pour éliminer les toxines et maintenir la température du corps à 37 °C.", False, C_DARK)]
                ]
            },
            {
                "title": "3. À retenir",
                "paragraphs": [
                    [("La peau comprend ", False, C_DARK), ("l'épiderme", True, C_BLUE), (" (en surface avec les poils et les pores) et ", False, C_DARK), ("le derme", True, C_BLUE), (" (en profondeur). Elle protège notre corps, permet de ressentir le toucher et élimine la sueur.", False, C_DARK)]
                ]
            }
        ],
        "image_path": "peau_coupe.png",
        "image_legend": "Schéma 5 : Coupe de la peau humaine (épiderme, derme, glande sudoripare, pore)",
        "exercices_page": [
            {
                "num": "Exercice 1",
                "title": "Légender la coupe de la peau",
                "bareme": "10 points (2,5 pts par terme)",
                "lines": [
                    "Complétez chaque phrase avec le terme exact (Épiderme, Derme, Pores, Sueur) :",
                    "a) La couche extérieure de la peau visible à l'œil nu est l'__________ .",
                    "b) La couche profonde et épaisse de la peau est le __________ .",
                    "c) Les minuscules ouvertures de la peau s'appellent les __________ .",
                    "d) Le liquide salé évacué par les pores lors d'un effort est la __________ ."
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Les rôles de la peau",
                "bareme": "10 points (2,5 pts par item)",
                "lines": [
                    "Cochez uniquement les affirmations qui sont vraies :",
                    "[ _____ ] La peau est l'organe du sens du toucher.",
                    "[ _____ ] La peau laisse entrer librement tous les microbes dans le corps.",
                    "[ _____ ] Les pores permettent de rejeter la transpiration.",
                    "[ _____ ] La peau nous permet de savoir si un objet est brûlant ou glacé."
                ]
            }
        ],
        "corriges_page": [
            {
                "num": "Exercice 1",
                "title": "Légender la coupe de la peau",
                "bareme": "10 points",
                "answers": [
                    [("a) Couche extérieure : ", False, C_DARK), ("Épiderme", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("b) Couche profonde : ", False, C_DARK), ("Derme", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("c) Minuscules ouvertures : ", False, C_DARK), ("Pores", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("d) Liquide évacué : ", False, C_DARK), ("Sueur (ou transpiration)", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Les rôles de la peau",
                "bareme": "10 points",
                "answers": [
                    [("[ ", False, C_DARK), ("X", True, C_CORR), (" ] La peau est l'organe du sens du toucher. (2,5 pts)", False, C_DARK)],
                    [("[   ] La peau laisse entrer librement les microbes. (Faux - elle fait barrière) (2,5 pts)", False, C_DARK)],
                    [("[ ", False, C_DARK), ("X", True, C_CORR), (" ] Les pores permettent de rejeter la transpiration. (2,5 pts)", False, C_DARK)],
                    [("[ ", False, C_DARK), ("X", True, C_CORR), (" ] La peau nous permet de savoir si un objet est brûlant. (2,5 pts)", False, C_DARK)]
                ]
            }
        ]
    },

    # -------------------------------------------------------------------------
    # SÉANCE 6
    # -------------------------------------------------------------------------
    {
        "seance_num": 6,
        "titre": "Les parasites et l'hygiène de la peau",
        "theme": "Santé et Prévention cutanée",
        "obj": "Identifier les parasites de la peau (poux, puces, punaises), connaître les maladies cutanées courantes (la gale, les champignons) et pratiquer les règles d'hygiène préventives.",
        "doc_ref": "Programme officiel Connaissances Usuelles 9e (FRA / FRM)",
        "support": "Savon, peigne fin, vêtements propres et repassés, eau propre",
        "seance_str": "6 / 11",
        "duree_str": "30 minutes",
        "duree_rev": "3 min",
        "rev_teacher": "Comment s'appellent les deux couches de la peau et à quoi servent les pores ?",
        "rev_students": "R.A. : L'épiderme (en surface) et le derme (en profondeur). Les pores servent à évacuer la sueur.",
        "duree_lecon": "22 min",
        "mis_teacher": "Avez-vous déjà vu un enfant se gratter constamment la tête ou le corps ? Pourquoi se gratte-t-il ?",
        "mis_students": "R.A. : Il a peut-être des poux dans les cheveux ou des puces sur le corps, à cause de la saleté.",
        "mis_tech": "Mise en situation quotidienne",
        "mis_supp": "Échange de classe",
        "pres_teacher": "Aujourd'hui, nous allons apprendre : « Les parasites et l'hygiène de la peau ». Après cette séance, vous connaîtrez les parasites cutanés et les gestes d'hygiène pour garder une peau saine.",
        "pres_students": "Écoutent la présentation.",
        "pres_tech": "Expositive",
        "pres_supp": "Tableau noir",
        "obs_teacher": "Regardez ces illustrations de parasites (pou de tête, puce, punaise de lit) et observez du linge propre repassé au fer chaud.",
        "obs_students": "Observent les dessins des parasites et le linge propre.",
        "obs_tech": "Observation de supports imagés",
        "obs_supp": "Images de parasites et linge propre",
        "obs_obs": "Montrer que la saleté favorise la multiplication de ces parasites.",
        "ana_q_ra_list": [
            ("Quels sont les principaux parasites qui attaquent la peau et les cheveux ?",
             "R.A. : Les poux (dans les cheveux), les puces (sur le corps) et les punaises de lit (dans la literie)."),
            ("Quelles maladies de peau ces parasites et le manque d'hygiène provoquent-ils ?",
             "R.A. : La gale (démangeaisons intenses), la teigne (champignons du cuir chevelu) et des plaies d'infection."),
            ("Comment attrape-t-on des poux de tête ?",
             "R.A. : Par contact direct de tête à tête ou en partageant le peigne, la brosse ou le bonnet d'une personne infestée."),
            ("Quelles sont les mesures d'hygiène essentielles pour protéger sa peau ?",
             "R.A. : Se laver le corps entier chaque jour à l'eau et au savon, laver ses cheveux, porter des vêtements propres et repassés."),
            ("Que faut-il faire si l'on a des boutons ou de fortes démangeaisons ?",
             "R.A. : Ne pas se gratter avec des ongles sales et aller consulter un médecin ou un agent de santé au CSB.")
        ],
        "ana_tech": "Analyse guidée / Dialogue didactique",
        "ana_supp": "Tableau noir et illustrations",
        "syn_teacher": "Donc, les poux, les puces et les punaises sont des parasites de la peau qui causent des démangeaisons et des maladies comme la gale. Pour s'en protéger, il faut se laver quotidiennement au savon, laver les cheveux au peigne fin, porter des habits propres et repassés, et consulter au dispensaire en cas de maladie.",
        "syn_students": "Écoutent la synthèse et retiennent les conseils d'hygiène.",
        "syn_tech": "Synthèse récapitulative",
        "syn_supp": "Tableau noir",
        "app_exercises_teacher": [
            "1. Citez 3 parasites de la peau.",
            "2. Pourquoi doit-on repasser les vêtements au fer chaud après les avoir lavés ?"
        ],
        "app_corriges_students": [
            ("1. Les 3 parasites sont : ", "le pou, la puce et la punaise", "."),
            ("2. La chaleur du fer ", "tue les œufs et les parasites invisibles", " restés sur le tissu.")
        ],
        "app_tech": "Travail sur ardoise",
        "app_supp": "Ardoise",
        "duree_eval": "5 min",
        "eval_exercises_teacher": [
            "1. Associez chaque parasite à son lieu de vie : a) Le pou / b) La punaise / c) La puce -> 1) Dans les lits et matelas sales / 2) Dans les cheveux / 3) Sur la peau et les animaux domestiques.",
            "2. Que devez-vous faire en cas d'apparition de la gale ?"
        ],
        "eval_corriges_students": [
            ("1. a) Le pou -> ", "2 (cheveux)", " ; b) La punaise -> ", "1 (lits)", " ; c) La puce -> ", "3 (peau/animaux)", "."),
            ("2. Il faut ", "se laver avec un savon adapté, laver tous les vêtements et consulter un médecin au CSB", ".")
        ],
        "eval_tech": "Évaluation individuelle sur cahier",
        "eval_supp": "Cahier de classe",
        "lesson_sections": [
            {
                "title": "1. Les parasites de la peau",
                "paragraphs": [
                    [("Plusieurs petits animaux parasites peuvent vivre aux dépens de notre peau :", False, C_DARK)],
                    [("• ", False, C_DARK), ("Le pou", True, C_BLUE), (" : vit dans les cheveux, pique le cuir chevelu pour sucer le sang et pond des œufs appelés ", False, C_DARK), ("lentes", True, C_BLUE), (".", False, C_DARK)],
                    [("• ", False, C_DARK), ("La puce", True, C_BLUE), (" : saute sur le corps, pique et laisse de petits boutons rouges très irritants.", False, C_DARK)],
                    [("• ", False, C_DARK), ("La punaise de lit", True, C_BLUE), (" : se cache dans les fentes des lits en bois et les nattes sales et pique la nuit.", False, C_DARK)]
                ]
            },
            {
                "title": "2. Les affections cutanées courantes",
                "paragraphs": [
                    [("• ", False, C_DARK), ("La gale", True, C_BLUE), (" : causée par un parasite minuscule (acarien) qui creuse sous la peau entre les doigts et provoque de violentes démangeaisons le soir.", False, C_DARK)],
                    [("• ", False, C_DARK), ("La teigne et les champignons", True, C_BLUE), (" : font tomber les cheveux par plaques ou créent des taches blanches sur la peau.", False, C_DARK)]
                ]
            },
            {
                "title": "3. Les règles d'hygiène corporelle et vestimentaire",
                "paragraphs": [
                    [("1. Se laver le corps entier chaque jour avec de ", False, C_DARK), ("l'eau propre et du savon", True, C_BLUE), (".", False, C_DARK)],
                    [("2. Laver régulièrement ses cheveux et les peigner avec un peigne propre et individuel.", False, C_DARK)],
                    [("3. Porter des ", False, C_DARK), ("vêtements propres, séchés au soleil et repassés", True, C_BLUE), (" (la chaleur détruit les parasites et leurs œufs).", False, C_DARK)],
                    [("4. Aérer et faire sécher les matelas et nattes au soleil chaque semaine.", False, C_DARK)]
                ]
            },
            {
                "title": "4. À retenir",
                "paragraphs": [
                    [("Pour éviter les poux, puces, punaises et la gale, je dois ", False, C_DARK), ("me laver tous les jours au savon", True, C_BLUE), (" et porter des ", False, C_DARK), ("vêtements propres et repassés", True, C_BLUE), (". En cas de maladie de peau, je vais au centre de santé (CSB).", False, C_DARK)]
                ]
            }
        ],
        "image_path": "peau_coupe.png",
        "image_legend": "Schéma 6 : Hygiène de la peau et lutte contre les parasites cutanés (gale, poux)",
        "exercices_page": [
            {
                "num": "Exercice 1",
                "title": "Connaître les parasites de la peau",
                "bareme": "10 points (2,5 pts par question)",
                "lines": [
                    "Complétez chaque phrase avec le mot qui convient (Poux, Puces, Lentes, Punaises) :",
                    "a) Les œufs pondus par les poux dans les cheveux s'appellent les __________ .",
                    "b) Les insectes qui sautent et piquent sur la peau sont les __________ .",
                    "c) Les parasites qui se cachent dans les lits et piquent la nuit sont les __________ .",
                    "d) Pour éliminer les __________ de tête, on utilise un peigne très fin."
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur les soins de la peau",
                "bareme": "10 points (2,5 pts par item)",
                "lines": [
                    "Écrivez « Vrai » ou « Faux » devant chaque affirmation :",
                    "1. Le manque de propreté favorise l'apparition des poux et de la gale. [ _____ ]",
                    "2. Prêter son peigne à un camarade infesté de poux est sans danger. [ _____ ]",
                    "3. Le repassage des vêtements tue les parasites et leurs œufs. [ _____ ]",
                    "4. On doit gratter fortement ses boutons de gale avec les ongles. [ _____ ]"
                ]
            }
        ],
        "corriges_page": [
            {
                "num": "Exercice 1",
                "title": "Connaître les parasites de la peau",
                "bareme": "10 points",
                "answers": [
                    [("a) Œufs des poux : ", False, C_DARK), ("Lentes", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("b) Insectes qui sautent : ", False, C_DARK), ("Puces", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("c) Cachent dans les lits : ", False, C_DARK), ("Punaises", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("d) Peigne fin pour éliminer : ", False, C_DARK), ("Poux", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur les soins de la peau",
                "bareme": "10 points",
                "answers": [
                    [("1. Manque de propreté favorise les poux : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("2. Prêter son peigne sans danger : ", False, C_DARK), ("Faux", True, C_CORR), (" (cela transmet les poux) (2,5 pts)", False, C_GRAY_TEXT)],
                    [("3. Repassage tue les parasites : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("4. Gratter avec les ongles : ", False, C_DARK), ("Faux", True, C_CORR), (" (cela infecte les plaies) (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            }
        ]
    },

    # -------------------------------------------------------------------------
    # SÉANCE 7
    # -------------------------------------------------------------------------
    {
        "seance_num": 7,
        "titre": "L'œil : anatomie et fonctionnement de la vision",
        "theme": "Les organes des sens",
        "obj": "Énumérer les parties protectrices et visuelles de l'œil, et expliquer le rôle de la lumière et de chaque partie dans la vision.",
        "doc_ref": "Programme officiel Connaissances Usuelles 9e (FRA / FRM)",
        "support": "Schéma anatomique de l'œil / Miroir de poche",
        "seance_str": "7 / 11",
        "duree_str": "30 minutes",
        "duree_rev": "3 min",
        "rev_teacher": "Citez 3 règles d'hygiène pour éviter les parasites de la peau.",
        "rev_students": "R.A. : Se laver tous les jours au savon, porter des habits propres et repassés, et ne pas prêter son peigne.",
        "duree_lecon": "22 min",
        "mis_teacher": "Fermez tous les yeux pendant 5 secondes. Que voyez-vous ? Ouvrez-les. Quel organe vous permet de voir le monde ?",
        "mis_students": "R.A. : Les yeux fermés, on est dans le noir complet. C'est l'œil qui nous permet de voir la lumière et les objets.",
        "mis_tech": "Expérimentation sensorielle",
        "mis_supp": "Yeux des élèves",
        "pres_teacher": "Aujourd'hui, nous allons apprendre : « L'œil : anatomie et fonctionnement de la vision ». Après cette séance, vous saurez nommer les parties de l'œil et expliquer comment nous voyons.",
        "pres_students": "Écoutent attentivement.",
        "pres_tech": "Expositive",
        "pres_supp": "Tableau noir",
        "obs_teacher": "Regardez le visage de votre voisin ou ce schéma de l'œil. Observez les sourcils, les paupières, les cils, la partie blanche, le cercle coloré et le point noir au centre.",
        "obs_students": "Observent les détails de l'œil chez leur camarade.",
        "obs_tech": "Observation directe en binôme",
        "obs_supp": "Visage du camarade et schéma",
        "obs_obs": "Faire repérer la pupille (point noir) et l'iris (anneau coloré).",
        "ana_q_ra_list": [
            ("Quelles sont les parties qui protègent l'œil à l'extérieur ?",
             "R.A. : Les sourcils (arrêtent la sueur du front), les paupières (se ferment pour protéger) et les cils (arrêtent les poussières)."),
            ("Quelles sont les parties visibles du globe oculaire ?",
             "R.A. : Le blanc de l'œil, l'iris (cercle de couleur marron, noir ou bleu) et la pupille (point noir au centre)."),
            ("À quoi sert la pupille ?",
             "R.A. : La pupille est l'ouverture qui laisse entrer la lumière dans l'œil. Elle s'agrandit dans l'obscurité et se rétrécit en pleine lumière."),
            ("De quoi l'œil a-t-il besoin pour voir les objets ?",
             "R.A. : L'œil a absolument besoin de lumière ; dans le noir total, même avec les yeux grands ouverts, on ne peut rien voir."),
            ("Quelles informations la vue nous donne-t-elle sur les objets ?",
             "R.A. : Elle nous renseigne sur la couleur, la forme, la taille, le mouvement et la distance des objets.")
        ],
        "ana_tech": "Analyse guidée / Déduction",
        "ana_supp": "Schéma de l'œil",
        "syn_teacher": "Donc, l'œil est l'organe du sens de la vue. Il est protégé par les sourcils, paupières et cils. Le globe oculaire comprend le blanc de l'œil, l'iris coloré et la pupille noire qui fait entrer la lumière pour nous permettre de distinguer formes, couleurs et distances.",
        "syn_students": "Écoutent et répètent les noms des parties de l'œil.",
        "syn_tech": "Synthèse récapitulative",
        "syn_supp": "Tableau noir",
        "app_exercises_teacher": [
            "1. À quoi servent les sourcils au-dessus des yeux ?",
            "2. Que fait la pupille quand vous passez du soleil à une pièce sombre ?"
        ],
        "app_corriges_students": [
            ("1. Les sourcils empêchent ", "la sueur du front de couler dans les yeux", "."),
            ("2. La pupille ", "s'agrandit (se dilate)", " pour capter plus de lumière.")
        ],
        "app_tech": "Pratique sur ardoise",
        "app_supp": "Ardoise",
        "duree_eval": "5 min",
        "eval_exercises_teacher": [
            "1. Associez chaque partie à son rôle protecteur ou visuel : a) Les cils / b) Les sourcils / c) La pupille -> 1) Arrête la sueur / 2) Laisse entrer la lumière / 3) Arrête les poussières.",
            "2. Citez deux informations que la vue nous donne sur un objet."
        ],
        "eval_corriges_students": [
            ("1. a) Cils -> ", "3 (poussières)", " ; b) Sourcils -> ", "1 (sueur)", " ; c) Pupille -> ", "2 (lumière)", "."),
            ("2. La vue nous indique : ", "la couleur, la forme, la taille ou la distance", ".")
        ],
        "eval_tech": "Évaluation écrite individuelle",
        "eval_supp": "Cahier de classe",
        "lesson_sections": [
            {
                "title": "1. Les parties protectrices de l'œil",
                "paragraphs": [
                    [("L'œil est un organe très fragile, protégé par trois éléments externes :", False, C_DARK)],
                    [("• ", False, C_DARK), ("Les sourcils", True, C_BLUE), (" : situés au-dessus de l'œil, ils empêchent la sueur du front de couler dans l'œil.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Les paupières", True, C_BLUE), (" : voiles de peau mobiles qui se ferment instantanément en cas de danger ou de poussière, et étalent les larmes pour nettoyer l'œil.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Les cils", True, C_BLUE), (" : petits poils au bord des paupières qui arrêtent les grains de poussière et le sable.", False, C_DARK)]
                ]
            },
            {
                "title": "2. Les parties visuelles du globe oculaire",
                "paragraphs": [
                    [("En regardant l'œil de face, on distingue :", False, C_DARK)],
                    [("• ", False, C_DARK), ("Le blanc de l'œil", True, C_BLUE), (" : enveloppe protectrice externe résistante.", False, C_DARK)],
                    [("• ", False, C_DARK), ("L'iris", True, C_BLUE), (" : anneau circulaire coloré (marron, noir, noisette).", False, C_DARK)],
                    [("• ", False, C_DARK), ("La pupille", True, C_BLUE), (" : petit trou noir au centre de l'iris. Elle s'ouvre grand dans l'obscurité et se rétrécit sous le soleil pour contrôler la quantité de lumière entrant dans l'œil.", False, C_DARK)]
                ]
            },
            {
                "title": "3. À retenir",
                "paragraphs": [
                    [("L'œil est l'organe de ", False, C_DARK), ("la vue", True, C_BLUE), (". Les ", False, C_DARK), ("sourcils, paupières et cils", True, C_BLUE), (" le protègent. ", False, C_DARK), ("La pupille", True, C_BLUE), (" laisse entrer la lumière pour nous permettre de voir.", False, C_DARK)]
                ]
            }
        ],
        "image_path": "oeil_anatomie.png",
        "image_legend": "Schéma 7 : Coupe de l'œil humain (cornée, pupille, iris, rétine, nerf optique)",
        "exercices_page": [
            {
                "num": "Exercice 1",
                "title": "Anatomie de l'œil",
                "bareme": "10 points (2,5 pts par question)",
                "lines": [
                    "Complétez avec les mots : iris, cils, pupille, sourcils.",
                    "a) Les __________ arrêtent la sueur qui descend du front.",
                    "b) Les petits poils qui protègent l'œil de la poussière sont les __________ .",
                    "c) Le cercle coloré de l'œil s'appelle l'__________ .",
                    "d) Le point noir situé au centre de l'œil est la __________ ."
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Le fonctionnement de l'œil",
                "bareme": "10 points (2,5 pts par item)",
                "lines": [
                    "Répondez par « Vrai » ou « Faux » :",
                    "1. L'œil humain peut voir les objets dans une obscurité totale. [ _____ ]",
                    "2. Les paupières s'ouvrent et se ferment pour humidifier et protéger l'œil. [ _____ ]",
                    "3. La pupille rétrécit lorsqu'il y a une vive lumière. [ _____ ]",
                    "4. L'organe de la vue est la langue. [ _____ ]"
                ]
            }
        ],
        "corriges_page": [
            {
                "num": "Exercice 1",
                "title": "Anatomie de l'œil",
                "bareme": "10 points",
                "answers": [
                    [("a) Arrêtent la sueur : ", False, C_DARK), ("Sourcils", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("b) Poils protecteurs de poussière : ", False, C_DARK), ("Cils", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("c) Cercle coloré : ", False, C_DARK), ("Iris", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("d) Point noir central : ", False, C_DARK), ("Pupille", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Le fonctionnement de l'œil",
                "bareme": "10 points",
                "answers": [
                    [("1. Voir dans l'obscurité totale : ", False, C_DARK), ("Faux", True, C_CORR), (" (il faut de la lumière) (2,5 pts)", False, C_GRAY_TEXT)],
                    [("2. Paupières protègent : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("3. Pupille rétrécit en lumière : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("4. Organe de la vue : ", False, C_DARK), ("Faux", True, C_CORR), (" (c'est l'œil) (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            }
        ]
    },

    # -------------------------------------------------------------------------
    # SÉANCE 8
    # -------------------------------------------------------------------------
    {
        "seance_num": 8,
        "titre": "Protection et hygiène des yeux",
        "theme": "Santé visuelle",
        "obj": "Connaître et appliquer les mesures d'hygiène et de sécurité pour préserver sa vue (distance de lecture, éclairage, ne pas frotter avec les mains sales, dangers des objets pointus).",
        "doc_ref": "Programme officiel Connaissances Usuelles 9e (FRA / FRM)",
        "support": "Livre de lecture, lampe/lumière du jour, eau propre, règle de 30 cm",
        "seance_str": "8 / 11",
        "duree_str": "30 minutes",
        "duree_rev": "3 min",
        "rev_teacher": "Comment s'appelle le petit trou noir au centre de l'œil et quel est son rôle ?",
        "rev_students": "R.A. : C'est la pupille. Elle laisse entrer la lumière dans l'œil.",
        "duree_lecon": "22 min",
        "mis_teacher": "Quand vous lisez votre cahier très près des yeux ou dans une pièce trop sombre, que ressentez-vous ?",
        "mis_students": "R.A. : Les yeux piquent, deviennent rouges, se fatiguent et on a mal à la tête.",
        "mis_tech": "Mise en situation d'observation",
        "mis_supp": "Cahier de classe",
        "pres_teacher": "Aujourd'hui, nous allons apprendre : « Protection et hygiène des yeux ». Après cette séance, vous connaîtrez les bonnes habitudes pour protéger vos yeux toute votre vie.",
        "pres_students": "Écoutent la présentation.",
        "pres_tech": "Expositive",
        "pres_supp": "Tableau noir",
        "obs_teacher": "Observez la bonne posture pour lire : le livre posé à environ 30 cm des yeux avec une lumière venant du côté gauche ou d'en haut.",
        "obs_students": "Observent la démonstration et mesurent la distance avec leur double-décimètre.",
        "obs_tech": "Démonstration posturale",
        "obs_supp": "Livre et règle",
        "obs_obs": "Faire corriger la posture courbée des élèves.",
        "ana_q_ra_list": [
            ("À quelle distance doit-on placer son livre ou cahier pour lire sans fatiguer ses yeux ?",
             "R.A. : Il faut placer son livre à environ 30 centimètres des yeux."),
            ("Comment doit être l'éclairage pendant le travail scolaire ?",
             "R.A. : Il faut un bon éclairage, sans ombre portée sur le cahier, et éviter de lire sous une lumière éblouissante ou trop faible."),
            ("Pourquoi est-il strictement interdit de se frotter les yeux avec des mains sales ?",
             "R.A. : Parce que les mains sales transportent des microbes qui provoquent la conjonctivite (yeux rouges et purulents)."),
            ("Quels sont les objets dangereux à éloigner absolument des yeux ?",
             "R.A. : Les objets pointus (crayons taillés, compas, aiguilles, couteaux), les lance-pierres et les produits chimiques (savon acide, eau de Javel)."),
            ("Que faut-il faire si une poussière entre dans l'œil ?",
             "R.A. : Il faut rincer doucement avec de l'eau propre et cligner des yeux sans frotter avec les doigts.")
        ],
        "ana_tech": "Questionnement analytique / Gestes réflexes",
        "ana_supp": "Matériel d'écolier",
        "syn_teacher": "Donc, pour garder des yeux sains : lire à 30 cm avec une bonne lumière, ne jamais frotter les yeux avec des mains sales, laver le visage à l'eau propre, éviter les écrans prolongés et consulter immédiatement un médecin en cas de douleur ou de baisse de vue.",
        "syn_students": "Écoutent et répètent les règles d'or de la protection des yeux.",
        "syn_tech": "Synthèse magistrale",
        "syn_supp": "Tableau noir",
        "app_exercises_teacher": [
            "1. Montrez comment vous tenez votre livre pour lire à 30 cm de vos yeux.",
            "2. Pourquoi ne faut-il pas regarder directement le soleil en face ?"
        ],
        "app_corriges_students": [
            "1. L'élève se tient droit et place son livre à distance de son avant-bras (environ 30 cm).",
            ("2. Les rayons du soleil sont ", "trop puissants et peuvent brûler la rétine de l'œil (rendre aveugle)", ".")
        ],
        "app_tech": "Pratique posturale",
        "app_supp": "Cahier de l'élève",
        "duree_eval": "5 min",
        "eval_exercises_teacher": [
            "1. Cochez les bons comportements pour les yeux : a) Lire dans le noir complet. b) Laver ses yeux à l'eau propre. c) Frotter ses yeux avec des doigts sales. d) Placer son travail à 30 cm.",
            "2. Quelle maladie des yeux a un enfant qui a les yeux très rouges et qui collent le matin ?"
        ],
        "eval_corriges_students": [
            ("1. Bons comportements : ", "b) Laver ses yeux à l'eau propre", " et ", "d) Placer son travail à 30 cm", "."),
            ("2. C'est ", "la conjonctivite", " (infection de l'œil).")
        ],
        "eval_tech": "Évaluation individuelle écrite",
        "eval_supp": "Cahier de classe",
        "lesson_sections": [
            {
                "title": "1. Les bonnes règles de travail pour préserver la vue",
                "paragraphs": [
                    [("Pour éviter la fatigue visuelle et les maux de tête :", False, C_DARK)],
                    [("• ", False, C_DARK), ("Distance de travail", True, C_BLUE), (" : toujours tenir son livre ou son cahier à ", False, C_DARK), ("environ 30 centimètres", True, C_BLUE), (" des yeux (longueur de l'avant-bras).", False, C_DARK)],
                    [("• ", False, C_DARK), ("Un bon éclairage", True, C_BLUE), (" : bien éclairer la page sans être ébloui. Ne jamais lire dans la pénombre ou au soleil brûlant.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Limiter les écrans", True, C_BLUE), (" : éviter de regarder la télévision ou le téléphone de trop près et ne pas veiller tard.", False, C_DARK)]
                ]
            },
            {
                "title": "2. Protection contre les accidents et les infections",
                "paragraphs": [
                    [("• ", False, C_DARK), ("Ne jamais frotter les yeux avec des mains sales", True, C_BLUE), (" : les microbes causent des conjonctivites graves.", False, C_DARK)],
                    [("• Faire attention aux objets pointus (crayons, ciseaux, branches d'arbre, lance-pierre) qui peuvent crever un œil.", False, C_DARK)],
                    [("• En cas de poussière dans l'œil : rincer à l'eau propre abondante, ne pas frotter.", False, C_DARK)],
                    [("• Consulter un médecin ou un ophtalmologue dès qu'on voit flou ou qu'on a mal aux yeux.", False, C_DARK)]
                ]
            },
            {
                "title": "3. À retenir",
                "paragraphs": [
                    [("Mes yeux sont précieux. Pour les protéger, je lis à ", False, C_DARK), ("30 cm avec une bonne lumière", True, C_BLUE), (", je ne frotte jamais mes yeux avec des mains sales et je lave mon visage chaque matin à ", False, C_DARK), ("l'eau propre", True, C_BLUE), (".", False, C_DARK)]
                ]
            }
        ],
        "image_path": "oeil_anatomie.png",
        "image_legend": "Schéma 8 : Protection des yeux, paupières, larmes et hygiène visuelle",
        "exercices_page": [
            {
                "num": "Exercice 1",
                "title": "Conseils pour protéger ses yeux",
                "bareme": "10 points (2,5 pts par conseil)",
                "lines": [
                    "Classez les actions dans le tableau (Bon pour les yeux / Dangereux pour les yeux) :",
                    "a) Lire à 30 cm sous une bonne lampe.",
                    "b) Se frotter les yeux après avoir joué dans la terre.",
                    "c) Jouer avec des pointes ou des couteaux près du visage.",
                    "d) Laver son visage à l'eau propre chaque matin."
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur l'hygiène visuelle",
                "bareme": "10 points (2,5 pts par item)",
                "lines": [
                    "Écrivez « Vrai » ou « Faux » :",
                    "1. On peut regarder l'éclipse du soleil directement sans lunettes spéciales. [ _____ ]",
                    "2. La conjonctivite est causée par des microbes apportés par la saleté. [ _____ ]",
                    "3. Plus on colle ses yeux sur le cahier, mieux on protège sa vue. [ _____ ]",
                    "4. En cas de douleur prolongée aux yeux, il faut consulter un médecin. [ _____ ]"
                ]
            }
        ],
        "corriges_page": [
            {
                "num": "Exercice 1",
                "title": "Conseils pour protéger ses yeux",
                "bareme": "10 points",
                "answers": [
                    [("a) Lire à 30 cm : ", False, C_DARK), ("Bon pour les yeux", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("b) Frotter avec mains sales : ", False, C_DARK), ("Dangereux pour les yeux", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("c) Jouer avec des pointes : ", False, C_DARK), ("Dangereux pour les yeux", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("d) Laver le visage à l'eau propre : ", False, C_DARK), ("Bon pour les yeux", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur l'hygiène visuelle",
                "bareme": "10 points",
                "answers": [
                    [("1. Regarder le soleil sans lunettes : ", False, C_DARK), ("Faux", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("2. Conjonctivite et microbes : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("3. Coller les yeux sur le cahier : ", False, C_DARK), ("Faux", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("4. Consulter en cas de douleur : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            }
        ]
    },

    # -------------------------------------------------------------------------
    # SÉANCE 9
    # -------------------------------------------------------------------------
    {
        "seance_num": 9,
        "titre": "L'oreille : audition, hygiène et soins",
        "theme": "Les organes des sens & Hygiène auditive",
        "obj": "Décrire les parties de l'oreille (pavillon, conduit auditif, tympan), expliquer le rôle de l'audition et appliquer les soins d'hygiène et de protection contre les bruits violents et les infections.",
        "doc_ref": "Programme officiel Connaissances Usuelles 9e (FRA / FRM)",
        "support": "Schéma de l'oreille / Linge propre humide / Boîte à sons",
        "seance_str": "9 / 11",
        "duree_str": "30 minutes",
        "duree_rev": "3 min",
        "rev_teacher": "À quelle distance doit-on tenir son livre pour lire confortablement ?",
        "rev_students": "R.A. : À environ 30 centimètres des yeux.",
        "duree_lecon": "22 min",
        "mis_teacher": "Bouchez vos deux oreilles avec vos index pendant que je parle. Qu'entendez-vous ? Quel organe nous permet d'entendre ?",
        "mis_students": "R.A. : On n'entend presque rien ou très étouffé. Ce sont les oreilles qui nous permettent d'entendre les sons et la voix.",
        "mis_tech": "Expérimentation auditive directe",
        "mis_supp": "Oreilles des élèves",
        "pres_teacher": "Aujourd'hui, nous allons apprendre : « L'oreille : audition, hygiène et soins ». Après cette séance, vous connaîtrez les parties de l'oreille et comment en prendre soin.",
        "pres_students": "Écoutent la présentation.",
        "pres_tech": "Expositive",
        "pres_supp": "Tableau noir",
        "obs_teacher": "Regardez le schéma de l'oreille. Observez le pavillon externe en forme d'entonnoir, le conduit auditif et la fine membrane appelée le tympan.",
        "obs_students": "Observent attentivement le schéma.",
        "obs_tech": "Observation anatomique",
        "obs_supp": "Schéma en coupe de l'oreille",
        "obs_obs": "Montrer que le tympan est fragile comme une peau de tambour.",
        "ana_q_ra_list": [
            ("Quelles sont les trois parties principales de l'oreille ?",
             "R.A. : Le pavillon (à l'extérieur), le conduit auditif (le canal) et le tympan (la membrane au fond)."),
            ("À quoi sert le pavillon de l'oreille ?",
             "R.A. : Il capte les sons autour de nous comme un entonnoir et les dirige vers le conduit auditif."),
            ("Qu'est-ce que le tympan et quel est son rôle ?",
             "R.A. : C'est une fine membrane tendue comme un tambour qui vibre sous l'effet des sons et transmet le signal au cerveau."),
            ("Pourquoi ne faut-il JAMAIS introduire d'objets pointus (allumettes, brindilles, stylos) dans l'oreille ?",
             "R.A. : Parce qu'on risque de percer le tympan et de devenir sourd pour toujours (la surdité)."),
            ("Comment nettoyer ses oreilles correctement ?",
             "R.A. : Nettoyer le pavillon et l'entrée du conduit avec le coin d'une serviette propre et humide. Ne jamais enfoncer de cotons-tiges profondément.")
        ],
        "ana_tech": "Analyse guidée / Déduction médicale simple",
        "ana_supp": "Schéma de l'oreille",
        "syn_teacher": "Donc, l'oreille est l'organe du sens de l'ouïe (l'audition). Le pavillon capte les bruits, le conduit les guide et le tympan vibre. Pour préserver son audition : ne rien introduire dans le conduit, laver le pavillon à l'eau, éviter la musique trop forte et soigner les otites au centre de santé.",
        "syn_students": "Écoutent la synthèse et mémorisent le mot « tympan ».",
        "syn_tech": "Synthèse récapitulative",
        "syn_supp": "Tableau noir",
        "app_exercises_teacher": [
            "1. Touchez le pavillon de votre oreille gauche. À quoi ressemble sa forme ?",
            "2. Pourquoi une gifle sur l'oreille est-elle très dangereuse ?"
        ],
        "app_corriges_students": [
            "1. L'élève touche son pavillon et répond : « Sa forme ressemble à un entonnoir pour capter les sons ».",
            ("2. La pression brutale de l'air peut ", "déchirer le tympan et rendre sourd", ".")
        ],
        "app_tech": "Pratique sur ardoise",
        "app_supp": "Ardoise",
        "duree_eval": "5 min",
        "eval_exercises_teacher": [
            "1. Associez chaque terme à sa description : a) Pavillon / b) Tympan / c) Conduit auditif -> 1) Canal qui mène au fond de l'oreille / 2) Membrane fragile qui vibre / 3) Partie visible extérieure en forme d'entonnoir.",
            "2. Citez deux comportements dangereux pour les oreilles."
        ],
        "eval_corriges_students": [
            ("1. a) Pavillon -> ", "3 (partie extérieure)", " ; b) Tympan -> ", "2 (membrane fragile)", " ; c) Conduit -> ", "1 (canal)", "."),
            ("2. Comportements dangereux : ", "enfoncer des objets pointus (allumette, plume) et écouter des bruits assourdissants", ".")
        ],
        "eval_tech": "Contrôle écrit sur cahier",
        "eval_supp": "Cahier de classe",
        "lesson_sections": [
            {
                "title": "1. L'anatomie de l'oreille et l'audition",
                "paragraphs": [
                    [("L'oreille est l'organe du sens de ", False, C_DARK), ("l'ouïe", True, C_BLUE), (" (l'audition). Elle comprend trois parties essentielles :", False, C_DARK)],
                    [("1. ", False, C_DARK), ("Le pavillon", True, C_BLUE), (" : la partie externe cartilagineuse. Sa forme d'entonnoir capte les ondes sonores et les oriente.", False, C_DARK)],
                    [("2. ", False, C_DARK), ("Le conduit auditif", True, C_BLUE), (" : un canal court qui conduit les sons vers l'intérieur.", False, C_DARK)],
                    [("3. ", False, C_DARK), ("Le tympan", True, C_BLUE), (" : une membrane très fine tendue au bout du conduit. Elle vibre quand le son arrive, comme la peau d'un tambour.", False, C_DARK)]
                ]
            },
            {
                "title": "2. Les règles d'hygiène et de protection de l'oreille",
                "paragraphs": [
                    [("• ", False, C_DARK), ("Nettoyage doux", True, C_BLUE), (" : nettoyer uniquement le pavillon et le bord extérieur avec un linge propre et humide.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Interdiction d'objets pointus", True, C_BLUE), (" : ne JAMAIS enfoncer d'allumette, de cure-dent, de plume ou d'épingle dans l'oreille. Cela peut percer le tympan et entraîner une ", False, C_DARK), ("surdité définitive", True, C_BLUE), (".", False, C_DARK)],
                    [("• ", False, C_DARK), ("Protection contre le bruit", True, C_BLUE), (" : fuir les explosions, pétards et musiques assourdissantes.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Soigner les otites", True, C_BLUE), (" : si l'oreille coule ou fait mal, aller consulter un médecin au CSB immédiatement.", False, C_DARK)]
                ]
            },
            {
                "title": "3. À retenir",
                "paragraphs": [
                    [("L'oreille me permet d'entendre grâce au ", False, C_DARK), ("pavillon, au conduit et au tympan", True, C_BLUE), (". Je nettoie mes oreilles avec un linge humide et je n'enfonce ", False, C_DARK), ("aucun objet", True, C_BLUE), (" dans mon conduit auditif.", False, C_DARK)]
                ]
            }
        ],
        "image_path": "oreille_anatomie.png",
        "image_legend": "Schéma 9 : Coupe de l'oreille (pavillon, conduit auditif, tympan, osselets)",
        "exercices_page": [
            {
                "num": "Exercice 1",
                "title": "Les parties de l'oreille et leurs rôles",
                "bareme": "10 points (2,5 pts par réponse)",
                "lines": [
                    "Complétez avec les mots : tympan, ouïe, pavillon, conduit.",
                    "a) Le sens qui nous permet d'entendre les bruits est l'__________ .",
                    "b) La partie externe visible de l'oreille est le __________ .",
                    "c) Le canal dans lequel voyagent les sons est le __________ auditif.",
                    "d) La fine membrane qui vibre sous l'effet du son est le __________ ."
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur l'hygiène des oreilles",
                "bareme": "10 points (2,5 pts par item)",
                "lines": [
                    "Écrivez « Vrai » ou « Faux » :",
                    "1. On peut se curer l'oreille avec une allumette pour la nettoyer. [ _____ ]",
                    "2. Un tympan percé peut rendre une personne sourde. [ _____ ]",
                    "3. Les bruits trop violents protègent et renforcent l'ouïe. [ _____ ]",
                    "4. On doit nettoyer le pavillon avec un linge propre et humide. [ _____ ]"
                ]
            }
        ],
        "corriges_page": [
            {
                "num": "Exercice 1",
                "title": "Les parties de l'oreille et leurs rôles",
                "bareme": "10 points",
                "answers": [
                    [("a) Sens de l'écoute : ", False, C_DARK), ("Ouïe", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("b) Partie externe : ", False, C_DARK), ("Pavillon", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("c) Canal des sons : ", False, C_DARK), ("Conduit", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("d) Membrane qui vibre : ", False, C_DARK), ("Tympan", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur l'hygiène des oreilles",
                "bareme": "10 points",
                "answers": [
                    [("1. Curer avec une allumette : ", False, C_DARK), ("Faux", True, C_CORR), (" (très dangereux) (2,5 pts)", False, C_GRAY_TEXT)],
                    [("2. Tympan percé cause la surdité : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("3. Bruits violents renforcent : ", False, C_DARK), ("Faux", True, C_CORR), (" (ils détruisent l'ouïe) (2,5 pts)", False, C_GRAY_TEXT)],
                    [("4. Nettoyer pavillon au linge : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            }
        ]
    }
]
