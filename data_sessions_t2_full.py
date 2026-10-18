# -*- coding: utf-8 -*-
from constants import C_RED, C_GREEN, C_BLUE, C_CORR, C_DARK, C_EMERALD, C_GRAY_TEXT
from data_sessions_t2 import sessions_t2

# Add Séances 15, 16, 17, 18, 19
more_sessions_t2 = [
    # -------------------------------------------------------------------------
    # SÉANCE 15 (Mois 5, Semaine 13)
    # -------------------------------------------------------------------------
    {
        "seance_num": 15,
        "titre": "L'appareil digestif et le trajet des aliments",
        "theme": "La digestion",
        "obj": "Décrire le trajet des aliments dans le tube digestif (bouche, œsophage, estomac, intestins) et mentionner le rôle de chaque organe dans la digestion.",
        "doc_ref": "Programme officiel Connaissances Usuelles 9e (FRA / FRM)",
        "support": "Schéma de l'appareil digestif humain / Planche anatomique",
        "seance_str": "15 / 33",
        "duree_str": "30 minutes",
        "duree_rev": "3 min",
        "rev_teacher": "Comment doit-on brosser ses dents pour éviter les caries ?",
        "rev_students": "R.A. : Du rouge vers le blanc (de la gencive vers la dent), après chaque repas.",
        "duree_lecon": "22 min",
        "mis_teacher": "Quand vous avalez du riz avec du bouillon, où vont les aliments après la bouche ?",
        "mis_students": "R.A. : Ils descendent par la gorge et vont dans le ventre pour être digérés.",
        "mis_tech": "Questionnement d'accroche",
        "mis_supp": "Ventre et gorge",
        "pres_teacher": "Aujourd'hui, nous allons apprendre : « L'appareil digestif et le trajet des aliments ». Après cette séance, vous connaîtrez le chemin de la nourriture et les organes de la digestion.",
        "pres_students": "Écoutent attentivement.",
        "pres_tech": "Expositive",
        "pres_supp": "Tableau noir",
        "obs_teacher": "Regardez ce schéma du tube digestif : suivez le trajet depuis la bouche, le long de l'œsophage, dans l'estomac, puis dans l'intestin grêle et le gros intestin.",
        "obs_students": "Observent le tracé continu du tube digestif sur le schéma.",
        "obs_tech": "Observation guidée",
        "obs_supp": "Schéma de l'appareil digestif",
        "obs_obs": "Montrer que le tube digestif est un long tuyau continu.",
        "ana_q_ra_list": [
            ("Où commence la digestion des aliments ?",
             "R.A. : La digestion commence dans la bouche, où les dents coupent et broient les aliments avec la salive."),
            ("Par quel tuyau les aliments descendent-ils vers l'estomac ?",
             "R.A. : Les aliments descendent par l'œsophage."),
            ("Qu'est-ce que l'estomac et que fait-il ?",
             "R.A. : L'estomac est une poche musculaire qui brasse les aliments avec des sucs digestifs pour les transformer en bouillie."),
            ("Que se passe-t-il dans l'intestin grêle ?",
             "R.A. : Dans l'intestin grêle (le long tuyau étroit), les éléments nutritifs passent dans le sang pour nourrir tout le corps."),
            ("À quoi sert le gros intestin ?",
             "R.A. : Le gros intestin récupère les déchets non digérés et les transforme en excréments (selles) rejetés par l'anus.")
        ],
        "ana_tech": "Analyse ordonnée / Démarche logique",
        "ana_supp": "Schéma digestif",
        "syn_teacher": "Donc, les aliments parcourent dans l'ordre : la bouche (mastication), l'œsophage (descente), l'estomac (brassage en bouillie), l'intestin grêle (passage dans le sang) et le gros intestin (élimination des déchets par l'anus).",
        "syn_students": "Écoutent la synthèse et répètent l'ordre des organes.",
        "syn_tech": "Synthèse magistrale",
        "syn_supp": "Tableau noir",
        "app_exercises_teacher": [
            "1. Remettez dans l'ordre du trajet : Estomac, Bouche, Gros intestin, Œsophage, Intestin grêle.",
            "2. Dans quel organe les aliments nourrissants passent-ils dans le sang ?"
        ],
        "app_corriges_students": [
            ("1. Ordre exact : 1. ", "Bouche", " -> 2. ", "Œsophage", " -> 3. ", "Estomac", " -> 4. ", "Intestin grêle", " -> 5. ", "Gros intestin", "."),
            ("2. Les nutriments passent dans le sang dans ", "l'intestin grêle", ".")
        ],
        "app_tech": "Travail sur ardoise",
        "app_supp": "Ardoise",
        "duree_eval": "5 min",
        "eval_exercises_teacher": [
            "1. Associez chaque organe à sa fonction : a) Bouche / b) Estomac / c) Intestin grêle -> 1) Brasse les aliments en bouillie / 2) Coupe et broie avec les dents / 3) Fait passer les nutriments dans le sang.",
            "2. Par quel orifice les déchets non digérés sont-ils évacués ?"
        ],
        "eval_corriges_students": [
            ("1. a) Bouche -> ", "2 (coupe/broie)", " ; b) Estomac -> ", "1 (brasse en bouillie)", " ; c) Intestin grêle -> ", "3 (passage dans le sang)", "."),
            ("2. Les déchets sont évacués par ", "l'anus", ".")
        ],
        "eval_tech": "Évaluation individuelle sur cahier",
        "eval_supp": "Cahier de classe",
        "lesson_sections": [
            {
                "title": "1. Le voyage des aliments dans le tube digestif",
                "paragraphs": [
                    [("L'appareil digestif transforme les aliments que nous mangeons en substances nutritives indispensables au corps. Le trajet comprend 5 étapes successives :", False, C_DARK)],
                    [("1. ", False, C_DARK), ("La bouche", True, C_BLUE), (" : les dents mastiquent les aliments et la salive les ramollit.", False, C_DARK)],
                    [("2. ", False, C_DARK), ("L'œsophage", True, C_BLUE), (" : tube qui conduit la bouchée avalée vers l'estomac.", False, C_DARK)],
                    [("3. ", False, C_DARK), ("L'estomac", True, C_BLUE), (" : poche musculaire qui brasse les aliments avec des sucs acides.", False, C_DARK)],
                    [("4. ", False, C_DARK), ("L'intestin grêle", True, C_BLUE), (" : long tuyau très fin où les aliments digérés traversent la paroi pour entrer dans le sang.", False, C_DARK)],
                    [("5. ", False, C_DARK), ("Le gros intestin", True, C_BLUE), (" : conduit les déchets non digérés vers l'anus pour être rejetés hors du corps.", False, C_DARK)]
                ]
            },
            {
                "title": "2. À retenir",
                "paragraphs": [
                    [("Le trajet des aliments est : ", False, C_DARK), ("Bouche → Œsophage → Estomac → Intestin grêle → Gros intestin", True, C_BLUE), (". La digestion nourrit tout mon corps et rejette les déchets.", False, C_DARK)]
                ]
            }
        ],
        "image_path": "appareil_digestif.png",
        "image_legend": "Schéma 15 : L'appareil digestif et le trajet complet des aliments",
        "exercices_page": [
            {
                "num": "Exercice 1",
                "title": "Le chemin de la nourriture",
                "bareme": "10 points (2 pts par organe)",
                "lines": [
                    "Écrivez les numéros de 1 à 5 pour ranger les organes dans l'ordre de la digestion :",
                    "[ _____ ] L'estomac",
                    "[ _____ ] La bouche",
                    "[ _____ ] Le gros intestin",
                    "[ _____ ] L'œsophage",
                    "[ _____ ] L'intestin grêle"
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur la digestion",
                "bareme": "10 points (2,5 pts par item)",
                "lines": [
                    "Écrivez « Vrai » ou « Faux » :",
                    "1. La digestion commence dans les oreilles. [ _____ ]",
                    "2. L'estomac brasse les aliments pour les transformer en bouillie. [ _____ ]",
                    "3. Les éléments nutritifs passent dans le sang au niveau de l'intestin grêle. [ _____ ]",
                    "4. Les aliments voyagent dans le corps sans jamais être transformés. [ _____ ]"
                ]
            }
        ],
        "corriges_page": [
            {
                "num": "Exercice 1",
                "title": "Le chemin de la nourriture",
                "bareme": "10 points",
                "answers": [
                    [("[ ", False, C_DARK), ("3", True, C_CORR), (" ] L'estomac (2 pts)", False, C_DARK)],
                    [("[ ", False, C_DARK), ("1", True, C_CORR), (" ] La bouche (2 pts)", False, C_DARK)],
                    [("[ ", False, C_DARK), ("5", True, C_CORR), (" ] Le gros intestin (2 pts)", False, C_DARK)],
                    [("[ ", False, C_DARK), ("2", True, C_CORR), (" ] L'œsophage (2 pts)", False, C_DARK)],
                    [("[ ", False, C_DARK), ("4", True, C_CORR), (" ] L'intestin grêle (2 pts)", False, C_DARK)]
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur la digestion",
                "bareme": "10 points",
                "answers": [
                    [("1. Commence dans les oreilles : ", False, C_DARK), ("Faux", True, C_CORR), (" (commence dans la bouche) (2,5 pts)", False, C_GRAY_TEXT)],
                    [("2. Estomac brasse en bouillie : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("3. Nutriments dans l'intestin grêle : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("4. Sans transformation : ", False, C_DARK), ("Faux", True, C_CORR), (" (ils sont totalement digérés et décomposés) (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            }
        ]
    },

    # -------------------------------------------------------------------------
    # SÉANCE 16 (Mois 5, Semaine 14)
    # -------------------------------------------------------------------------
    {
        "seance_num": 16,
        "titre": "L'hygiène alimentaire et la propreté des repas",
        "theme": "Santé & Nutrition",
        "obj": "Connaître et appliquer les règles d'hygiène alimentaire (laver les fruits/légumes, protéger les aliments des mouches, boire de l'eau saine, manger équilibré et à heures régulières).",
        "doc_ref": "Programme officiel Connaissances Usuelles 9e (FRA / FRM)",
        "support": "Fruits frais, couvercle/cloche alimentaire, eau potable, savon",
        "seance_str": "16 / 33",
        "duree_str": "30 minutes",
        "duree_rev": "3 min",
        "rev_teacher": "Citez dans l'ordre les organes traversés par les aliments.",
        "rev_students": "R.A. : Bouche, œsophage, estomac, intestin grêle, gros intestin.",
        "duree_lecon": "22 min",
        "mis_teacher": "Que se passe-t-il si vous mangez une mangue ramassée par terre sans la laver ou des aliments sur lesquels des mouches se sont posées ?",
        "mis_students": "R.A. : On attrape des maux de ventre violents, des diarrhées et des vomissements.",
        "mis_tech": "Mise en situation quotidienne",
        "mis_supp": "Discussion de classe",
        "pres_teacher": "Aujourd'hui, nous allons apprendre : « L'hygiène alimentaire et la propreté des repas ». Après cette séance, vous connaîtrez les règles pour manger sainement sans tomber malade.",
        "pres_students": "Écoutent la présentation.",
        "pres_tech": "Expositive",
        "pres_supp": "Tableau noir",
        "obs_teacher": "Observez des fruits bien lavés à l'eau propre et une marmite recouverte d'un couvercle propre qui empêche les mouches d'entrer.",
        "obs_students": "Observent les aliments protégés.",
        "obs_tech": "Observation de matériel concret",
        "obs_supp": "Fruits lavés, couvercle",
        "obs_obs": "Montrer que les mouches transportent la saleté sur leurs pattes.",
        "ana_q_ra_list": [
            ("Pourquoi doit-on toujours laver les fruits et les légumes crus à l'eau propre ?",
             "R.A. : Pour éliminer la terre, la poussière, les microbes et les produits chimiques."),
            ("Pourquoi faut-il toujours couvrir les aliments cuits avec un couvercle propre ?",
             "R.A. : Pour empêcher les mouches, la poussière et les cafards de se poser dessus et d'y déposer des microbes."),
            ("Que faut-il faire avant de préparer la cuisine ou de passer à table ?",
             "R.A. : Se laver soigneusement les mains avec de l'eau propre et du savon."),
            ("Quels aliments doit-on privilégier pour grandir en bonne santé ?",
             "R.A. : Une alimentation variée et équilibrée : du riz ou tubercules (énergie), des légumes verts et fruits (vitamines), et du poisson, œuf ou viande (croissance)."),
            ("Pourquoi ne doit-on pas manger d'aliments avariés ou périmés ?",
             "R.A. : Parce qu'ils provoquent de graves intoxications alimentaires.")
        ],
        "ana_tech": "Analyse interrogative / Règles pratiques",
        "ana_supp": "Aliments et ustensiles",
        "syn_teacher": "Donc, pour rester en bonne santé, il faut se laver les mains avant de manger, laver les fruits crus à l'eau propre, bien cuire les aliments, couvrir les plats contre les mouches et boire uniquement de l'eau potable.",
        "syn_students": "Écoutent la synthèse et retiennent les règles d'hygiène alimentaire.",
        "syn_tech": "Synthèse magistrale",
        "syn_supp": "Tableau noir",
        "app_exercises_teacher": [
            "1. Citez 3 gestes essentiels pour garder des aliments propres.",
            "2. Pourquoi les mouches sont-elles très dangereuses sur la nourriture ?"
        ],
        "app_corriges_students": [
            ("1. Gestes : ", "laver les fruits, couvrir les marmites avec un couvercle, se laver les mains au savon", "."),
            ("2. Les mouches viennent des poubelles et des latrines et ", "déposent des microbes et des œufs de parasites sur les aliments", ".")
        ],
        "app_tech": "Pratique sur ardoise",
        "app_supp": "Ardoise",
        "duree_eval": "5 min",
        "eval_exercises_teacher": [
            "1. Cochez les bonnes pratiques d'hygiène alimentaire : a) Manger des fruits non lavés tombés dans la terre. b) Couvrir la nourriture avec un linge ou couvercle propre. c) Boire de l'eau sale de la rizière. d) Se laver les mains avant le repas.",
            "2. Quel risque encourt-on en mangeant un aliment avarié ?"
        ],
        "eval_corriges_students": [
            ("1. Bonnes pratiques : ", "b) Couvrir la nourriture", " et ", "d) Se laver les mains avant le repas", "."),
            ("2. On risque ", "une intoxication alimentaire, de violentes diarrhées et des maux de ventre", ".")
        ],
        "eval_tech": "Évaluation individuelle sur cahier",
        "eval_supp": "Cahier de classe",
        "lesson_sections": [
            {
                "title": "1. Les règles fondamentales de l'hygiène alimentaire",
                "paragraphs": [
                    [("Une alimentation saine et propre protège notre corps des maladies digestives :", False, C_DARK)],
                    [("1. ", False, C_DARK), ("Propreté des mains et de la vaisselle", True, C_BLUE), (" : se laver les mains à l'eau et au savon avant de cuisiner et de manger. Utiliser des assiettes et couverts bien lavés.", False, C_DARK)],
                    [("2. ", False, C_DARK), ("Lavage des aliments crus", True, C_BLUE), (" : laver abondamment les fruits et légumes à l'eau claire avant de les éplucher ou de les consommer.", False, C_DARK)],
                    [("3. ", False, C_DARK), ("Protection contre les insectes", True, C_BLUE), (" : garder toujours les plats couverts. ", False, C_DARK), ("Les mouches", True, C_BLUE), (" transportent les microbes des latrines sur la nourriture.", False, C_DARK)],
                    [("4. ", False, C_DARK), ("Bien cuire les aliments", True, C_BLUE), (" : la bonne cuisson de la viande, du poisson et des légumes détruit les microbes et parasites.", False, C_DARK)]
                ]
            },
            {
                "title": "2. À retenir",
                "paragraphs": [
                    [("Pour protéger ma santé, je ", False, C_DARK), ("lave mes mains au savon", True, C_BLUE), (", je ", False, C_DARK), ("lave les fruits crus", True, C_BLUE), (" et je ", False, C_DARK), ("couvre toujours les aliments", True, C_BLUE), (" pour éloigner les mouches et la poussière.", False, C_DARK)]
                ]
            }
        ],
        "image_path": "appareil_digestif.png",
        "image_legend": "Schéma 16 : Hygiène alimentaire, lavage des mains et digestion équilibrée",
        "exercices_page": [
            {
                "num": "Exercice 1",
                "title": "Comportements d'hygiène alimentaire",
                "bareme": "10 points (2,5 pts par réponse)",
                "lines": [
                    "Classez les actions (Bonne habitude / Mauvaise habitude) :",
                    "a) Manger une banane sans se laver les mains après avoir joué dans la boue.",
                    "b) Couvrir la marmite de riz avec son couvercle propre.",
                    "c) Rincer les tomates à l'eau propre avant de préparer la salade.",
                    "d) Laisser la viande à l'air libre entourée de mouches."
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur la propreté des repas",
                "bareme": "10 points (2,5 pts par item)",
                "lines": [
                    "Écrivez « Vrai » ou « Faux » :",
                    "1. Les mouches déposent des microbes dangereux sur la nourriture découverte. [ _____ ]",
                    "2. On peut manger de la viande avariée qui dégage une mauvaise odeur. [ _____ ]",
                    "3. Boire de l'eau propre et potable est indispensable à la digestion. [ _____ ]",
                    "4. Laver les légumes avant de les manger permet d'éliminer la terre et les parasites. [ _____ ]"
                ]
            }
        ],
        "corriges_page": [
            {
                "num": "Exercice 1",
                "title": "Comportements d'hygiène alimentaire",
                "bareme": "10 points",
                "answers": [
                    [("a) Manger sans laver les mains : ", False, C_DARK), ("Mauvaise habitude", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("b) Couvrir la marmite : ", False, C_DARK), ("Bonne habitude", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("c) Rincer les tomates : ", False, C_DARK), ("Bonne habitude", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("d) Laisser la viande aux mouches : ", False, C_DARK), ("Mauvaise habitude", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur la propreté des repas",
                "bareme": "10 points",
                "answers": [
                    [("1. Mouches déposent des microbes : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("2. Manger viande avariée : ", False, C_DARK), ("Faux", True, C_CORR), (" (très dangereux) (2,5 pts)", False, C_GRAY_TEXT)],
                    [("3. Eau propre indispensable : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("4. Laver légumes élimine parasites : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            }
        ]
    },

    # -------------------------------------------------------------------------
    # SÉANCE 17 (Mois 5, Semaine 15)
    # -------------------------------------------------------------------------
    {
        "seance_num": 17,
        "titre": "Les vers et parasites intestinaux",
        "theme": "Maladies parasitaires & Santé",
        "obj": "Identifier les principaux parasites intestinaux (ascaris, oxyures, ténia), comprendre leurs voies de transmission, leurs méfaits sur la santé et appliquer les mesures préventives et le déparasitage.",
        "doc_ref": "Programme officiel Connaissances Usuelles 9e (FRA / FRM)",
        "support": "Planche illustrée des vers intestinaux / Médicament déparasitant",
        "seance_str": "17 / 33",
        "duree_str": "30 minutes",
        "duree_rev": "3 min",
        "rev_teacher": "Citez 2 règles pour éviter que les microbes ne souillent nos repas.",
        "rev_students": "R.A. : Se laver les mains au savon avant le repas et couvrir les aliments pour éloigner les mouches.",
        "duree_lecon": "22 min",
        "mis_teacher": "Certains enfants ont souvent mal au ventre, un gros ventre gonflé et sont fatigués sans grandir bien. Que peuvent-ils avoir dans leur ventre ?",
        "mis_students": "R.A. : Ils ont des vers intestinaux (*kankana*) dans leurs intestins.",
        "mis_tech": "Mise en situation d'observation clinique",
        "mis_supp": "Discussion de classe",
        "pres_teacher": "Aujourd'hui, nous allons apprendre : « Les vers et parasites intestinaux ». Après cette séance, vous connaîtrez les différents vers intestinaux, leurs dangers et comment s'en débarrasser.",
        "pres_students": "Écoutent la présentation.",
        "pres_tech": "Expositive",
        "pres_supp": "Tableau noir",
        "obs_teacher": "Regardez cette illustration montrant l'ascaris (long ver rond comme un lacet), les oxyures (petits vers blancs) et le ténia (ver solitaire plat en anneaux).",
        "obs_students": "Observent les différentes formes de vers intestinaux.",
        "obs_tech": "Observation de schémas",
        "obs_supp": "Dessins des parasites intestinaux",
        "obs_obs": "Montrer que les vers volent la nourriture de l'enfant dans ses intestins.",
        "ana_q_ra_list": [
            ("Quels sont les vers intestinaux les plus fréquents chez les enfants ?",
             "R.A. : L'ascaris (ver rond), les oxyures (petits vers filiformes provoquant des démangeaisons à l'anus) et le ténia (ver plat ou ver solitaire)."),
            ("Comment ces vers entrent-ils dans notre corps ?",
             "R.A. : En mangeant avec des mains sales, en mangeant des fruits et légumes crus non lavés souillés d'œufs de vers, en buvant de l'eau impropre ou en mangeant de la viande de porc ou de bœuf mal cuite."),
            ("Quels sont les méfaits des vers intestinaux sur la santé de l'enfant ?",
             "R.A. : Maux de ventre récurrents, gros ventre avec jambes maigres, diarrhée, fatigue, manque d'appétit et retard de croissance."),
            ("Comment éviter d'attraper des vers intestinaux ?",
             "R.A. : Se laver les mains au savon avant de manger et après les toilettes, laver soigneusement les fruits et légumes, bien cuire les viandes, et utiliser toujours les latrines."),
            ("Quel est le traitement médical pour éliminer les vers ?",
             "R.A. : Prendre un médicament vermifuge (déparasitant) prescrit par le médecin ou distribué à l'école tous les six mois.")
        ],
        "ana_tech": "Analyse médicale / Dialogue de prévention",
        "ana_supp": "Tableau noir",
        "syn_teacher": "Donc, l'ascaris, les oxyures et le ténia sont des parasites intestinaux qui volent nos aliments et nous rendent malades. Pour s'en protéger : propreté des mains et des aliments, eau potable, utilisation des latrines et prise régulière d'un déparasitant.",
        "syn_students": "Écoutent la synthèse et retiennent le nom des vers.",
        "syn_tech": "Synthèse magistrale",
        "syn_supp": "Tableau noir",
        "app_exercises_teacher": [
            "1. Citez deux vers intestinaux fréquents.",
            "2. Pourquoi est-il indispensable de déféquer dans les latrines et jamais dans la nature ?"
        ],
        "app_corriges_students": [
            ("1. Exemples : ", "l'ascaris et les oxyures (ou le ténia)", "."),
            ("2. Les selles dans la nature ", "répandent des millions d'œufs de vers dans la terre, l'eau et sur les cultures", ".")
        ],
        "app_tech": "Pratique sur ardoise",
        "app_supp": "Ardoise",
        "duree_eval": "5 min",
        "eval_exercises_teacher": [
            "1. Associez chaque ver à sa description : a) Ascaris / b) Ténia / c) Oxyures -> 1) Petits vers blancs causant des démangeaisons / 2) Long ver rond rose / 3) Ver plat rubané (ver solitaire).",
            "2. Que prend-on pour chasser les vers du ventre ?"
        ],
        "eval_corriges_students": [
            ("1. a) Ascaris -> ", "2 (ver rond)", " ; b) Ténia -> ", "3 (ver plat rubané)", " ; c) Oxyures -> ", "1 (petits vers blancs)", "."),
            ("2. On prend un ", "médicament vermifuge (déparasitant)", ".")
        ],
        "eval_tech": "Évaluation individuelle écrite",
        "eval_supp": "Cahier de classe",
        "lesson_sections": [
            {
                "title": "1. Les différents vers intestinaux",
                "paragraphs": [
                    [("Les vers intestinaux sont des parasites qui s'installent dans notre tube digestif et absorbent notre nourriture :", False, C_DARK)],
                    [("• ", False, C_DARK), ("L'ascaris", True, C_BLUE), (" : grand ver rond de 15 à 20 cm, semblable à un ver de terre rose. Il vit dans l'intestin grêle.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Les oxyures", True, C_BLUE), (" : minuscules vers blancs comme des bouts de fil, qui descendent la nuit vers l'anus et provoquent de fortes démangeaisons.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Le ténia (ver solitaire)", True, C_BLUE), (" : long ver plat formé d'anneaux, attrapé en mangeant de la viande de porc ou de bœuf mal cuite contenant des larves.", False, C_DARK)]
                ]
            },
            {
                "title": "2. Prévention et déparasitage",
                "paragraphs": [
                    [("• Se laver les mains à l'eau et au savon avant chaque repas et après les latrines.", False, C_DARK)],
                    [("• Laver soigneusement les crudités et faire bien cuire les viandes.", False, C_DARK)],
                    [("• Toujours utiliser des latrines hygiéniques et ne jamais déféquer à l'air libre.", False, C_DARK)],
                    [("• Prendre un ", False, C_DARK), ("vermifuge (déparasitant)", True, C_BLUE), (" tous les 6 mois pour éliminer les vers.", False, C_DARK)]
                ]
            },
            {
                "title": "3. À retenir",
                "paragraphs": [
                    [("Les vers intestinaux (", False, C_DARK), ("ascaris, oxyures, ténia", True, C_BLUE), (") fatiguent mon corps et ralentissent ma croissance. Je m'en protège par l'hygiène, la cuisson des viandes et la prise régulière de ", False, C_DARK), ("vermifuge", True, C_BLUE), (".", False, C_DARK)]
                ]
            }
        ],
        "image_path": "parasites_intestinaux.png",
        "image_legend": "Schéma 17 : Les vers parasites intestinaux (ascaris, oxyures, ténia)",
        "exercices_page": [
            {
                "num": "Exercice 1",
                "title": "Identifier les parasites intestinaux",
                "bareme": "10 points (2,5 pts par question)",
                "lines": [
                    "Complétez chaque phrase avec : Ténia, Oxyures, Vermifuge, Ascaris.",
                    "a) Le grand ver rond rose qui vit dans l'intestin s'appelle l'__________ .",
                    "b) Les petits vers blancs qui grattent l'anus la nuit sont les __________ .",
                    "c) Le ver solitaire plat formé d'anneaux est le __________ .",
                    "d) Le médicament qui détruit et évacue les vers du ventre s'appelle un __________ ."
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur les vers intestinaux",
                "bareme": "10 points (2,5 pts par item)",
                "lines": [
                    "Écrivez « Vrai » ou « Faux » :",
                    "1. Les vers intestinaux aident l'enfant à grandir et à grossir. [ _____ ]",
                    "2. Bien cuire la viande de porc et de bœuf détruit les larves de ténia. [ _____ ]",
                    "3. Manger avec les mains sales après avoir joué dans la terre transmet des œufs d'ascaris. [ _____ ]",
                    "4. Les latrines permettent d'éviter la propagation des œufs de parasites dans l'environnement. [ _____ ]"
                ]
            }
        ],
        "corriges_page": [
            {
                "num": "Exercice 1",
                "title": "Identifier les parasites intestinaux",
                "bareme": "10 points",
                "answers": [
                    [("a) Grand ver rond : ", False, C_DARK), ("Ascaris", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("b) Petits vers blancs : ", False, C_DARK), ("Oxyures", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("c) Ver solitaire plat : ", False, C_DARK), ("Ténia", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("d) Médicament contre les vers : ", False, C_DARK), ("Vermifuge", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur les vers intestinaux",
                "bareme": "10 points",
                "answers": [
                    [("1. Aident à grandir : ", False, C_DARK), ("Faux", True, C_CORR), (" (ils volent la nourriture et ralentissent la croissance) (2,5 pts)", False, C_GRAY_TEXT)],
                    [("2. Bien cuire la viande détruit le ténia : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("3. Mains sales transmettent les œufs : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("4. Latrines évitent la propagation : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            }
        ]
    },

    # -------------------------------------------------------------------------
    # SÉANCE 18 (Mois 6, Semaine 16)
    # -------------------------------------------------------------------------
    {
        "seance_num": 18,
        "titre": "L'eau : ses trois états et son cycle",
        "theme": "La matière & L'environnement",
        "obj": "Identifier les trois états physiques de l'eau (solide, liquide, gazeux), comprendre les transformations (fusion, évaporation, condensation, solidification) et décrire le cycle de l'eau dans la nature.",
        "doc_ref": "Programme officiel Connaissances Usuelles 9e (FRA / FRM)",
        "support": "Glaçon, verre d'eau liquide, eau bouillante avec vapeur, schéma du cycle de l'eau (cycle_eau.png)",
        "seance_str": "18 / 33",
        "duree_str": "30 minutes",
        "duree_rev": "3 min",
        "rev_teacher": "Quels sont les 3 vers intestinaux étudiés lors de la séance précédente ?",
        "rev_students": "R.A. : L'ascaris, les oxyures et le ténia.",
        "duree_lecon": "22 min",
        "mis_teacher": "Que devient un glaçon posé au soleil ? Que voit-on au-dessus d'une marmite d'eau bouillante ?",
        "mis_students": "R.A. : Le glaçon fond et devient de l'eau liquide. Au-dessus de la marmite, l'eau monte en vapeur.",
        "mis_tech": "Expérimentation d'états physiques",
        "mis_supp": "Glaçon et vapeur d'eau",
        "pres_teacher": "Aujourd'hui, nous allons apprendre : « L'eau : ses trois états et son cycle ». Après cette séance, vous saurez nommer les 3 formes de l'eau et expliquer le cycle de la pluie.",
        "pres_students": "Écoutent la présentation.",
        "pres_tech": "Expositive",
        "pres_supp": "Tableau noir",
        "obs_teacher": "Regardez ce schéma du cycle de l'eau : le soleil chauffe l'eau des rivières et de la mer, la vapeur monte, forme les nuages et retombe en pluie.",
        "obs_students": "Observent le cycle naturel de l'eau sur le schéma.",
        "obs_tech": "Observation de schéma scientifique",
        "obs_supp": "Schéma du cycle de l'eau (cycle_eau.png)",
        "obs_obs": "Faire repérer l'évaporation et la condensation sous forme de nuages.",
        "ana_q_ra_list": [
            ("Quels sont les trois états de l'eau dans la nature ?",
             "R.A. : L'état liquide (eau de robinet, rivière, pluie), l'état solide (la glace, les glaçons, la grêle) et l'état gazeux (la vapeur d'eau, invisible ou buée)."),
            ("Comment l'eau liquide devient-elle de la glace solide ?",
             "R.A. : Par le froid (solidification ou congélation)."),
            ("Comment la glace devient-elle de l'eau liquide ?",
             "R.A. : Par la chaleur (la fusion ou fonte)."),
            ("Comment l'eau liquide devient-elle de la vapeur d'eau ?",
             "R.A. : En chauffant sous l'action du feu ou du soleil (l'évaporation)."),
            ("Comment se forment les nuages et la pluie ?",
             "R.A. : La vapeur d'eau s'élève dans le ciel froid, se condense en minuscules gouttelettes pour former les nuages, puis retombe en gouttes de pluie.")
        ],
        "ana_tech": "Analyse physique simple / Déduction",
        "ana_supp": "Schéma du cycle de l'eau",
        "syn_teacher": "Donc, l'eau existe sous 3 états : solide (glace), liquide (eau) et gazeux (vapeur). Dans la nature, l'eau s'évapore sous le soleil, forme les nuages dans le ciel froid et retombe sur terre sous forme de pluie : c'est le cycle perpétuel de l'eau.",
        "syn_students": "Écoutent la synthèse et répètent les 3 états de l'eau.",
        "syn_tech": "Synthèse magistrale",
        "syn_supp": "Tableau noir",
        "app_exercises_teacher": [
            "1. Donnez un exemple d'eau solide et un exemple d'eau liquide.",
            "2. Que devient la flaque d'eau dans la cour après quelques heures sous le soleil brûlant ?"
        ],
        "app_corriges_students": [
            ("1. Eau solide : ", "un glaçon (ou la grêle)", " ; Eau liquide : ", "l'eau de pluie (ou d'une rivière)", "."),
            ("2. L'eau s'est réchauffée et ", "s'est évaporée dans l'air sous forme de vapeur invisible", ".")
        ],
        "app_tech": "Pratique sur ardoise",
        "app_supp": "Ardoise",
        "duree_eval": "5 min",
        "eval_exercises_teacher": [
            "1. Associez chaque état à son exemple : a) Solide / b) Liquide / c) Gazeux -> 1) Vapeur d'eau / 2) Glaçon de glace / 3) Eau de source.",
            "2. Comment s'appelle le passage de l'eau liquide à l'état de vapeur sous la chaleur ?"
        ],
        "eval_corriges_students": [
            ("1. a) Solide -> ", "2 (glaçon)", " ; b) Liquide -> ", "3 (eau de source)", " ; c) Gazeux -> ", "1 (vapeur d'eau)", "."),
            ("2. C'est ", "l'évaporation", ".")
        ],
        "eval_tech": "Évaluation écrite sur cahier",
        "eval_supp": "Cahier de classe",
        "lesson_sections": [
            {
                "title": "1. Les trois états physiques de l'eau",
                "paragraphs": [
                    [("L'eau peut se présenter sous trois formes différentes selon la température :", False, C_DARK)],
                    [("1. ", False, C_DARK), ("L'état solide", True, C_BLUE), (" : la glace, les glaçons, la neige et la grêle. L'eau a une forme définie que l'on peut saisir.", False, C_DARK)],
                    [("2. ", False, C_DARK), ("L'état liquide", True, C_BLUE), (" : l'eau de boisson, la pluie, les rivières, les lacs et la mer. Elle coule et prend la forme du récipient.", False, C_DARK)],
                    [("3. ", False, C_DARK), ("L'état gazeux", True, C_BLUE), (" : la vapeur d'eau invisible dans l'air ou visible sous forme de buée.", False, C_DARK)]
                ]
            },
            {
                "title": "2. Les changements d'état et le cycle de l'eau",
                "paragraphs": [
                    [("• ", False, C_DARK), ("La fusion", True, C_BLUE), (" : la glace solide fond et devient liquide sous l'effet de la chaleur.", False, C_DARK)],
                    [("• ", False, C_DARK), ("L'évaporation", True, C_BLUE), (" : l'eau liquide chauffe et se transforme en vapeur d'eau gazeuse.", False, C_DARK)],
                    [("• ", False, C_DARK), ("La condensation", True, C_BLUE), (" : la vapeur d'eau refroidit dans le ciel et forme les nuages.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Les précipitations", True, C_BLUE), (" : les gouttes d'eau des nuages retombent sous forme de pluie pour alimenter les sources et les fleuves.", False, C_DARK)]
                ]
            },
            {
                "title": "3. À retenir",
                "paragraphs": [
                    [("L'eau existe sous 3 états : ", False, C_DARK), ("solide (glace), liquide (eau) et gazeux (vapeur)", True, C_BLUE), (". Grâce au soleil et au froid, l'eau circule sans fin entre la terre, la mer et le ciel : c'est ", False, C_DARK), ("le cycle de l'eau", True, C_BLUE), (".", False, C_DARK)]
                ]
            }
        ],
        "image_path": "cycle_eau.png",
        "image_legend": "Schéma 18 : Les trois états de l'eau et le grand cycle naturel de l'eau",
        "exercices_page": [
            {
                "num": "Exercice 1",
                "title": "Les états de l'eau",
                "bareme": "10 points (2,5 pts par question)",
                "lines": [
                    "Complétez avec les mots : Liquide, Solide, Vapeur, Glace.",
                    "a) L'eau qui coule de la fontaine est à l'état __________ .",
                    "b) Un morceau de __________ est de l'eau à l'état solide.",
                    "c) L'eau qui s'élève d'une casserole bouillante est de la __________ d'eau.",
                    "d) La grêle tombant du ciel est de l'eau à l'état __________ ."
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur le cycle de l'eau",
                "bareme": "10 points (2,5 pts par item)",
                "lines": [
                    "Écrivez « Vrai » ou « Faux » :",
                    "1. La chaleur du soleil fait évaporer l'eau des mers et des lacs. [ _____ ]",
                    "2. Les nuages sont formés de minuscules gouttes d'eau condensée. [ _____ ]",
                    "3. La glace fond lorsqu'on la met dans un endroit très froid. [ _____ ]",
                    "4. L'eau de pluie retourne vers les rivières et la mer. [ _____ ]"
                ]
            }
        ],
        "corriges_page": [
            {
                "num": "Exercice 1",
                "title": "Les états de l'eau",
                "bareme": "10 points",
                "answers": [
                    [("a) Eau qui coule : ", False, C_DARK), ("Liquide", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("b) Morceau solide : ", False, C_DARK), ("Glace", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("c) Casserole bouillante : ", False, C_DARK), ("Vapeur", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("d) Grêle : ", False, C_DARK), ("Solide", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur le cycle de l'eau",
                "bareme": "10 points",
                "answers": [
                    [("1. Soleil fait évaporer l'eau : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("2. Nuages formés de gouttes : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("3. Glace fond au froid : ", False, C_DARK), ("Faux", True, C_CORR), (" (elle fond sous l'effet de la chaleur) (2,5 pts)", False, C_GRAY_TEXT)],
                    [("4. Pluie retourne aux fleuves : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            }
        ]
    },

    # -------------------------------------------------------------------------
    # SÉANCE 19 (Mois 6, Semaine 17)
    # -------------------------------------------------------------------------
    {
        "seance_num": 19,
        "titre": "L'eau potable et l'air que nous respirons",
        "theme": "Les éléments vitaux & Hygiène",
        "obj": "Connaître les méthodes pour rendre l'eau potable (ébullition, Sur'Eau, filtration), gérer l'eau sans gaspillage, prouver l'existence de l'air et apprécier ses bienfaits sur la santé.",
        "doc_ref": "Programme officiel Connaissances Usuelles 9e (FRA / FRM)",
        "support": "Flacon de Sur'Eau, filtre à eau ou tissu propre, ballon gonflable, seringue sans aiguille",
        "seance_str": "19 / 33",
        "duree_str": "30 minutes",
        "duree_rev": "3 min",
        "rev_teacher": "Quels sont les 3 états de l'eau dans la nature ?",
        "rev_students": "R.A. : L'état solide (glace), l'état liquide (eau) et l'état gazeux (vapeur).",
        "duree_lecon": "22 min",
        "mis_teacher": "Une eau très claire prise dans une rivière est-elle forcément bonne à boire ? Voyez-vous l'air autour de nous ?",
        "mis_students": "R.A. : Non, l'eau claire peut contenir des microbes invisibles. L'air est invisible mais on sent le vent.",
        "mis_tech": "Expérience et questionnement",
        "mis_supp": "Ballon gonflé",
        "pres_teacher": "Aujourd'hui, nous allons apprendre : « L'eau potable et l'air que nous respirons ». Après cette séance, vous saurez rendre l'eau potable et vous comprendrez l'importance de l'air pur.",
        "pres_students": "Écoutent la présentation.",
        "pres_tech": "Expositive",
        "pres_supp": "Tableau noir",
        "obs_teacher": "Observez ce ballon de baudruche dégonflé puis gonflé avec de l'air, et observez un flacon de solution Sur'Eau pour traiter l'eau.",
        "obs_students": "Observent le ballon qui se gonfle et la bouteille de traitement de l'eau.",
        "obs_tech": "Démonstration scientifique",
        "obs_supp": "Ballon gonflable et Sur'Eau",
        "obs_obs": "Montrer que l'air remplit l'espace et a une force.",
        "ana_q_ra_list": [
            ("Qu'est-ce qu'une eau potable ?",
             "R.A. : C'est une eau propre, limpide, sans odeur, sans mauvais goût et sans microbes, bonne pour la boisson sans rendre malade."),
            ("Quelles sont les méthodes simples pour rendre une eau potable à la maison ?",
             "R.A. : 1) Faire bouillir l'eau à gros bouillons pendant 10 minutes. 2) Utiliser une solution désinfectante (comme Sur'Eau). 3) Filtrer à travers un filtre céramique ou un tissu propre avant de désinfecter."),
            ("Comment prouver que l'air existe même s'il est invisible ?",
             "R.A. : On sent le vent sur son visage, on voit les feuilles des arbres bouger, et on peut gonfler un ballon ou faire flotter un cerf-volant."),
            ("Pourquoi l'eau et l'air sont-ils indispensables à la vie ?",
             "R.A. : Sans eau et sans air, les humains, les animaux et les plantes meurent en quelques minutes ou jours."),
            ("Quels sont les bienfaits d'un air pur et comment éviter l'air pollué ?",
             "R.A. : L'air pur donne de l'énergie et protège les poumons. Il faut aérer les chambres et éviter de respirer la fumée de bois ou les gaz d'échappement.")
        ],
        "ana_tech": "Analyse expérimentale / Éducation civique et sanitaire",
        "ana_supp": "Matériel d'expérimentation",
        "syn_teacher": "Donc, l'eau potable est une eau sans microbes obtenue par ébullition ou Sur'Eau. L'air est un gaz invisible indispensable qui nous entoure. Nous devons préserver la propreté de l'eau et respirer un air pur en aérant nos maisons.",
        "syn_students": "Écoutent la synthèse et retiennent les méthodes de potabilisation.",
        "syn_tech": "Synthèse magistrale",
        "syn_supp": "Tableau noir",
        "app_exercises_teacher": [
            "1. Donnez 2 méthodes pour rendre potable l'eau d'un puits.",
            "2. Donnez une preuve que l'air existe autour de nous."
        ],
        "app_corriges_students": [
            ("1. Méthodes : ", "faire bouillir l'eau pendant 10 minutes", " ou ", "ajouter des gouttes de Sur'Eau", "."),
            ("2. Preuve : ", "le ballon qui se gonfle (ou le vent qui fait bouger les branches)", ".")
        ],
        "app_tech": "Pratique sur ardoise",
        "app_supp": "Ardoise",
        "duree_eval": "5 min",
        "eval_exercises_teacher": [
            "1. Cochez les qualités d'une eau potable : a) Elle a une couleur boueuse. b) Elle est claire et sans microbes. c) Elle a été bouillie ou traitée au Sur'Eau. d) Elle sent mauvais.",
            "2. Pourquoi doit-on aérer sa chambre chaque matin ?"
        ],
        "eval_corriges_students": [
            ("1. Qualités eau potable : ", "b) Claire et sans microbes", " et ", "c) Bouillie ou traitée au Sur'Eau", "."),
            ("2. Pour ", "renouveler l'air et chasser l'air vicié et les microbes", ".")
        ],
        "eval_tech": "Contrôle écrit sur cahier",
        "eval_supp": "Cahier de classe",
        "lesson_sections": [
            {
                "title": "1. L'eau potable et sa purification",
                "paragraphs": [
                    [("L'eau est essentielle pour vivre, mais une eau souillée transmet des maladies graves (diarrhées, choléra, typhoïde) :", False, C_DARK)],
                    [("• Une ", False, C_DARK), ("eau potable", True, C_BLUE), (" est une eau saine, transparente, sans odeur et débarrassée de tout microbe.", False, C_DARK)],
                    [("• ", False, C_DARK), ("L'ébullition", True, C_BLUE), (" : faire bouillir l'eau pendant 10 minutes tue tous les microbes dangereux.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Le traitement chimique (Sur'Eau / Chlore)", True, C_BLUE), (" : ajouter la dose indiquée de Sur'Eau dans un récipient propre et attendre 30 minutes avant de boire.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Conservation", True, C_BLUE), (" : conserver l'eau traitée dans un seau propre muni d'un couvercle et d'un robinet.", False, C_DARK)]
                ]
            },
            {
                "title": "2. L'air et ses bienfaits pour la santé",
                "paragraphs": [
                    [("• ", False, C_DARK), ("L'air", True, C_BLUE), (" est invisible, inodore et impalpable, mais il remplit tout l'espace autour de nous.", False, C_DARK)],
                    [("• Nous prouvons son existence par ", False, C_DARK), ("le vent", True, C_BLUE), (", la respiration qui gonfle notre poitrine et les ballons gonflés.", False, C_DARK)],
                    [("• ", False, C_DARK), ("Bienfaits d'un air pur", True, C_BLUE), (" : aérer les pièces de la maison chaque matin, planter des arbres et éviter la fumée de feu de bois à l'intérieur des cases.", False, C_DARK)]
                ]
            },
            {
                "title": "3. À retenir",
                "paragraphs": [
                    [("Je bois uniquement de ", False, C_DARK), ("l'eau potable", True, C_BLUE), (" (bouillie ou traitée au Sur'Eau). Je protège mes poumons en respirant un ", False, C_DARK), ("air pur et frais", True, C_BLUE), (" dans une maison bien aérée.", False, C_DARK)]
                ]
            }
        ],
        "image_path": "cycle_eau.png",
        "image_legend": "Schéma 19 : Purification de l'eau potable et composition de l'air respirable",
        "exercices_page": [
            {
                "num": "Exercice 1",
                "title": "Rendre l'eau potable",
                "bareme": "10 points (2,5 pts par question)",
                "lines": [
                    "Complétez avec les mots : Sur'Eau, Bouillir, Potable, Malades.",
                    "a) Une eau qui ne rend pas malade s'appelle une eau __________ .",
                    "b) Faire __________ l'eau à gros bouillons permet de tuer les microbes.",
                    "c) Pour désinfecter l'eau des puits, on peut utiliser quelques gouttes de __________ .",
                    "d) Boire de l'eau sale de rivière rend les enfants __________ ."
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur l'eau et l'air",
                "bareme": "10 points (2,5 pts par item)",
                "lines": [
                    "Écrivez « Vrai » ou « Faux » :",
                    "1. Une eau claire est toujours potable sans besoin de traitement. [ _____ ]",
                    "2. L'air en mouvement s'appelle le vent. [ _____ ]",
                    "3. Ouvrir les fenêtres permet de renouveler l'air de la chambre. [ _____ ]",
                    "4. Respirer la fumée noire est excellent pour la santé des poumons. [ _____ ]"
                ]
            }
        ],
        "corriges_page": [
            {
                "num": "Exercice 1",
                "title": "Rendre l'eau potable",
                "bareme": "10 points",
                "answers": [
                    [("a) Eau saine : ", False, C_DARK), ("Potable", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("b) Tuer microbes par la chaleur : ", False, C_DARK), ("Bouillir", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("c) Produit désinfectant : ", False, C_DARK), ("Sur'Eau", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("d) Eau sale rend : ", False, C_DARK), ("Malades", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            },
            {
                "num": "Exercice 2",
                "title": "Vrai ou Faux sur l'eau et l'air",
                "bareme": "10 points",
                "answers": [
                    [("1. Eau claire toujours potable : ", False, C_DARK), ("Faux", True, C_CORR), (" (elle peut contenir des microbes invisibles) (2,5 pts)", False, C_GRAY_TEXT)],
                    [("2. Air en mouvement est le vent : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("3. Ouvrir fenêtres renouvelle l'air : ", False, C_DARK), ("Vrai", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                    [("4. Respirer fumée noire excellent : ", False, C_DARK), ("Faux", True, C_CORR), (" (très nocif pour les poumons) (2,5 pts)", False, C_GRAY_TEXT)]
                ]
            }
        ]
    }
]

sessions_t2.extend(more_sessions_t2)

# Séance 20 : Révision Trimestre 2
review_session_20 = {
    "seance_num": 20,
    "titre": "Révision générale — Deuxième Trimestre",
    "theme": "La bouche, les dents, la digestion, l'eau et l'air",
    "obj": "Consolider et synthétiser l'ensemble des connaissances du deuxième trimestre (langue, dents, appareil digestif, hygiène alimentaire, parasites, états de l'eau, eau potable et air pur).",
    "doc_ref": "Programme officiel Connaissances Usuelles 9e (FRA / FRM)",
    "support": "Tableau récapitulatif du Trimestre 2",
    "seance_str": "20 / 33",
    "duree_str": "30 minutes",
    "duree_rev": "3 min",
    "rev_teacher": "Quels sont les deux éléments vitaux étudiés lors des deux dernières séances ?",
    "rev_students": "R.A. : L'eau (ses 3 états et la potabilisation) et l'air pur.",
    "duree_lecon": "22 min",
    "mis_teacher": "Qui peut récapituler les grands thèmes que nous avons découverts pendant ce 2e trimestre ?",
    "mis_students": "R.A. : La langue et les 4 saveurs, les 3 sortes de dents, le trajet des aliments, les vers intestinaux, l'eau potable et l'air.",
    "mis_tech": "Brainstorming récapitulatif",
    "mis_supp": "Tableau noir",
    "pres_teacher": "Aujourd'hui, nous faisons la révision complète du Deuxième Trimestre pour préparer l'examen.",
    "pres_students": "Écoutent la présentation.",
    "pres_tech": "Expositive",
    "pres_supp": "Tableau noir",
    "obs_teacher": "Observez ce grand tableau bilan réunissant les 3 axes du 2e trimestre : 1) La bouche et les dents, 2) La digestion et les parasites, 3) L'eau et l'air.",
    "obs_students": "Observent les colonnes de synthèse.",
    "obs_tech": "Observation guidée",
    "obs_supp": "Tableau récapitulatif",
    "obs_obs": "Vérifier la maîtrise du vocabulaire : incisives, molaires, estomac, ascaris, évaporation.",
    "ana_q_ra_list": [
        ("Quelles sont les 4 saveurs de la langue et les 3 sortes de dents ?",
         "R.A. : Saveurs : sucré, salé, acide, amer. Dents : incisives (couper), canines (déchirer), molaires (broyer)."),
        ("Quel est l'ordre exact du trajet des aliments dans l'appareil digestif ?",
         "R.A. : Bouche -> Œsophage -> Estomac -> Intestin grêle -> Gros intestin (vers l'anus)."),
        ("Quels sont les vers intestinaux les plus fréquents et comment les éliminer ?",
         "R.A. : Ascaris, oxyures et ténia. On les élimine en prenant un vermifuge tous les 6 mois."),
        ("Quels sont les trois états de l'eau dans la nature ?",
         "R.A. : L'état solide (glace), l'état liquide (eau) et l'état gazeux (vapeur d'eau)."),
        ("Comment obtenir de l'eau potable à la maison ?",
         "R.A. : En faisant bouillir l'eau pendant 10 minutes ou en ajoutant du Sur'Eau.")
    ],
    "ana_tech": "Questionnement analytique de synthèse",
    "ana_supp": "Tableau noir",
    "syn_teacher": "Donc, ce 2e trimestre nous a permis de comprendre comment nous goûtons et mâchons avec nos dents, comment notre appareil digestif transforme les repas, comment nous protéger des vers intestinaux, et comment utiliser l'eau potable et l'air pur pour rester vigoureux.",
    "syn_students": "Écoutent la synthèse globale du trimestre.",
    "syn_tech": "Synthèse magistrale",
    "syn_supp": "Tableau noir",
    "app_exercises_teacher": [
        "1. Citez le rôle de l'estomac et le rôle de l'intestin grêle.",
        "2. Donnez deux gestes pour avoir de l'eau potable."
    ],
    "app_corriges_students": [
        ("1. Estomac : ", "brasse les aliments en bouillie", " ; Intestin grêle : ", "fait passer les nutriments dans le sang", "."),
        ("2. Gestes : ", "faire bouillir l'eau 10 minutes ou ajouter du Sur'Eau", ".")
    ],
    "app_tech": "Pratique collective",
    "app_supp": "Ardoise",
    "duree_eval": "5 min",
    "eval_exercises_teacher": [
        "1. Comment s'appelle le brossage des dents correct ?",
        "2. Citez les trois états de l'eau."
    ],
    "eval_corriges_students": [
        ("1. Brosser ", "du rouge vers le blanc (de la gencive vers la dent) après chaque repas", "."),
        ("2. Les 3 états : ", "solide, liquide, gazeux", ".")
    ],
    "eval_tech": "Contrôle écrit rapide",
    "eval_supp": "Cahier de classe",
    "lesson_sections": [
        {
            "title": "1. Synthèse thématique 1 : La langue, les dents et l'hygiène",
            "paragraphs": [
                [("• La langue reconnaît ", False, C_DARK), ("le sucré, le salé, l'acide et l'amer", True, C_BLUE), (".", False, C_DARK)],
                [("• Les 3 sortes de dents : ", False, C_DARK), ("les incisives (coupent), les canines (déchirent), les molaires (broient)", True, C_BLUE), (".", False, C_DARK)],
                [("• Se brosser les dents ", False, C_DARK), ("après chaque repas du rouge vers le blanc", True, C_BLUE), (" pour éviter la carie dentaire.", False, C_DARK)]
            ]
        },
        {
            "title": "2. Synthèse thématique 2 : L'appareil digestif et les parasites",
            "paragraphs": [
                [("• Trajet digestif : ", False, C_DARK), ("Bouche → Œsophage → Estomac → Intestin grêle → Gros intestin", True, C_BLUE), (".", False, C_DARK)],
                [("• Vers intestinaux : ", False, C_DARK), ("ascaris, oxyures, ténia", True, C_BLUE), (". Prévention : laver les mains et les aliments, utiliser les latrines, prendre un ", False, C_DARK), ("vermifuge", True, C_BLUE), (".", False, C_DARK)]
            ]
        },
        {
            "title": "3. Synthèse thématique 3 : L'eau et l'air",
            "paragraphs": [
                [("• L'eau existe sous 3 états : ", False, C_DARK), ("solide (glace), liquide (eau), gazeux (vapeur)", True, C_BLUE), (".", False, C_DARK)],
                [("• L'eau potable s'obtient par ", False, C_DARK), ("ébullition (10 min) ou Sur'Eau", True, C_BLUE), (".", False, C_DARK)],
                [("• L'air pur nous donne de l'énergie. Aérer les maisons chaque jour.", False, C_DARK)]
            ]
        }
    ],
    "image_path": "dents.png",
    "image_legend": "Schéma Bilan T2 : Synthèse notionnelle du Deuxième Trimestre",
    "exercices_page": [
        {
            "num": "Exercice 1",
            "title": "Grand bilan du Deuxième Trimestre",
            "bareme": "10 points (2 pts par réponse)",
            "lines": [
                "Complétez chaque phrase avec le terme convenable :",
                "1. Les grosses dents du fond qui écrasent les aliments sont les __________ .",
                "2. L'organe du sens du goût est la __________ .",
                "3. L'organe dans lequel les nutriments passent dans le sang est l'__________ grêle.",
                "4. Le ver solitaire plat s'appelle le __________ .",
                "5. L'eau sous forme de glaçon est à l'état __________ ."
            ]
        },
        {
            "num": "Exercice 2",
            "title": "QCM de révision Trimestre 2",
            "bareme": "10 points (2,5 pts par question)",
            "lines": [
                "Entourez la bonne réponse :",
                "a) Les incisives servent à : 1) Couper  2) Broyer  3) Entendre",
                "b) Pour éliminer les microbes de l'eau, il faut : 1) La faire bouillir 10 min  2) La saler  3) La laisser au soleil",
                "c) Le trou creusé dans la dent s'appelle : 1) La gale  2) La carie  3) Le derme",
                "d) La transformation de l'eau liquide en vapeur s'appelle : 1) La fusion  2) L'évaporation  3) La digestion"
            ]
        }
    ],
    "corriges_page": [
        {
            "num": "Exercice 1",
            "title": "Grand bilan du Deuxième Trimestre",
            "bareme": "10 points",
            "answers": [
                [("1. Grosses dents du fond : ", False, C_DARK), ("Molaires", True, C_CORR), (" (2 pts)", False, C_GRAY_TEXT)],
                [("2. Organe du goût : ", False, C_DARK), ("Langue", True, C_CORR), (" (2 pts)", False, C_GRAY_TEXT)],
                [("3. Passage dans le sang : ", False, C_DARK), ("Intestin (grêle)", True, C_CORR), (" (2 pts)", False, C_GRAY_TEXT)],
                [("4. Ver solitaire plat : ", False, C_DARK), ("Ténia", True, C_CORR), (" (2 pts)", False, C_GRAY_TEXT)],
                [("5. Eau en glaçon : ", False, C_DARK), ("Solide", True, C_CORR), (" (2 pts)", False, C_GRAY_TEXT)]
            ]
        },
        {
            "num": "Exercice 2",
            "title": "QCM de révision Trimestre 2",
            "bareme": "10 points",
            "answers": [
                [("a) Rôle des incisives : ", False, C_DARK), ("1) Couper", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                [("b) Rendre l'eau potable : ", False, C_DARK), ("1) La faire bouillir 10 min", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                [("c) Trou dans la dent : ", False, C_DARK), ("2) La carie", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)],
                [("d) Liquide en vapeur : ", False, C_DARK), ("2) L'évaporation", True, C_CORR), (" (2,5 pts)", False, C_GRAY_TEXT)]
            ]
        }
    ]
}

# Séance 21 : Examen Trimestre 2
exam_session_21 = {
    "seance_num": 21,
    "titre": "Sujet d'examen — Deuxième Trimestre (SVT 9e)",
    "theme": "Évaluation sommative du Deuxième Trimestre",
    "bareme_total": "20 points",
    "parties": [
        {
            "titre": "Partie I : La langue et les dents (5 points)",
            "questions": [
                "1. Citez les 4 saveurs fondamentales reconnues par la langue. (2 pts)",
                "2. Nommez les 3 sortes de dents et associez chacune à son action (couper, déchirer, broyer). (3 pts)"
            ],
            "corriges": [
                [("1. Les 4 saveurs sont : ", False, C_DARK), ("le sucré, le salé, l'acide et l'amer", True, C_CORR), (" (2 pts).", False, C_GRAY_TEXT)],
                [("2. Les 3 sortes de dents : ", False, C_DARK), ("Incisives (couper), Canines (déchirer), Molaires (broyer)", True, C_CORR), (" (3 pts).", False, C_GRAY_TEXT)]
            ]
        },
        {
            "titre": "Partie II : L'appareil digestif et son hygiène (5 points)",
            "questions": [
                "1. Écrivez dans l'ordre les 5 organes du trajet des aliments. (2,5 pts)",
                "2. Donnez deux règles pour protéger sa nourriture des microbes et des mouches. (2,5 pts)"
            ],
            "corriges": [
                [("1. Trajet : ", False, C_DARK), ("Bouche -> Œsophage -> Estomac -> Intestin grêle -> Gros intestin", True, C_CORR), (" (2,5 pts).", False, C_GRAY_TEXT)],
                [("2. Deux règles : ", False, C_DARK), ("se laver les mains au savon et garder toujours les plats couverts", True, C_CORR), (" (2,5 pts).", False, C_GRAY_TEXT)]
            ]
        },
        {
            "titre": "Partie III : Les vers intestinaux (5 points)",
            "questions": [
                "1. Citez deux vers intestinaux dangereux pour les enfants. (2 pts)",
                "2. Pourquoi doit-on prendre un médicament vermifuge tous les 6 mois ? (3 pts)"
            ],
            "corriges": [
                [("1. Deux vers : ", False, C_DARK), ("l'ascaris, les oxyures (ou le ténia)", True, C_CORR), (" (2 pts).", False, C_GRAY_TEXT)],
                [("2. Le vermifuge permet de ", False, C_DARK), ("tuer et évacuer les vers pour éviter l'anémie, les maux de ventre et le retard de croissance", True, C_CORR), (" (3 pts).", False, C_GRAY_TEXT)]
            ]
        },
        {
            "titre": "Partie IV : L'eau et l'air (5 points)",
            "questions": [
                "1. Citez les trois états physiques de l'eau dans la nature. (1,5 pt)",
                "2. Donnez deux méthodes simples pour rendre une eau potable à la maison. (2 pts)",
                "3. Comment prouver que l'air existe autour de nous ? (1,5 pt)"
            ],
            "corriges": [
                [("1. Les 3 états sont : ", False, C_DARK), ("solide (glace), liquide (eau) et gazeux (vapeur)", True, C_CORR), (" (1,5 pt).", False, C_GRAY_TEXT)],
                [("2. Deux méthodes : ", False, C_DARK), ("faire bouillir l'eau 10 minutes et utiliser la solution Sur'Eau", True, C_CORR), (" (2 pts).", False, C_GRAY_TEXT)],
                [("3. Preuve : ", False, C_DARK), ("par le vent qui souffle ou en gonflant un ballon de baudruche", True, C_CORR), (" (1,5 pt).", False, C_GRAY_TEXT)]
            ]
        }
    ]
}
