# -*- coding: utf-8 -*-
"""
Données pour les Annexes du Manuel SVT 9e :
- Annexe I : 5 Sujets d'Examen Types Officiels (Format CEPE / Évaluation Nationale 9e) avec corrigés et barèmes sur 20 points
- Annexe II : Répertoire Général des Schémas et Formules Scientifiques de 9e
"""

official_exams_5 = [
    {
        "num": 1,
        "titre": "SUJET TYPE OFFICIEL N° 1 — ANATOMIE, SQUELETTE ET SECOURISME",
        "dren": "ANALAMANGA",
        "cisco": "ANTANANARIVO-RENIVOHITRA",
        "zap": "MAHAMASINA",
        "epp": "EPP ANKADIFOTSY",
        "code": "101 020 005",
        "duree": "45 minutes",
        "bareme_total": "20 points",
        "parties": [
            {
                "titre": "PARTIE I : CONTRÔLE DES CONNAISSANCES NOTIONNELLES (6 points)",
                "questions": [
                    "1. Définissez ce qu'est une articulation et donnez deux exemples dans le corps humain. (2 pts)",
                    "2. Répondez par VRAI ou FAUX (2 pts) :\n   a) Le squelette d'un adulte compte environ 206 os. (1 pt)\n   b) Quand le biceps se contracte pour plier le bras, le triceps se contracte aussi en même temps. (1 pt)",
                    "3. Complétez la phrase suivante avec les mots appropriés (2 pts) :\n   « L'os est constitué de matière organique souple appelée .................. et de sels minéraux rigides appelés .................. »"
                ],
                "corriges": [
                    [("1. Définition de l'articulation : ", True, None), ("Une articulation est la zone de jonction mobile entre deux os qui permet les mouvements du corps (1 pt). Exemples : le coude, le genou, l'épaule, la cheville (1 pt pour 2 exemples valides).", False, None)],
                    [("2. Vrai ou Faux : ", True, None), ("\n   a) VRAI (environ 206 os chez l'adulte) (1 pt).\n   b) FAUX (le biceps et le triceps sont des muscles antagonistes : quand l'un se contracte, l'autre se relâche) (1 pt).", False, None)],
                    [("3. Texte complété : ", True, None), ("« L'os est constitué de matière organique souple appelée ", False, None), ("osséine", True, None), (" et de sels minéraux rigides appelés ", False, None), ("calcaire (ou phosphate de calcium)", True, None), (" » (2 pts, 1 pt par mot exact).", False, None)]
                ]
            },
            {
                "titre": "PARTIE II : SCHÉMA SCIENTIFIQUE ET EXPÉRIMENTATION (6 points)",
                "questions": [
                    "1. Lors d'une expérience en classe, le maître brûle un os de zébu sur des braises ardentes. (3 pts)\n   a) Que devient l'osséine contenue dans l'os ? (1 pt)\n   b) Quel est l'aspect et la résistance de l'os après calcination ? (1 pt)\n   c) Quelle substance minérale subsiste seule dans l'os brûlé ? (1 pt)",
                    "2. Citez dans l'ordre les trois parties principales du membre supérieur humain. (3 pts)"
                ],
                "corriges": [
                    [("1. Expérience de calcination de l'os :", True, None), ("\n   a) L'osséine (matière organique) brûle et se détruit sous l'action du feu (1 pt).\n   b) L'os devient tout blanc, très fragile et friable, il s'effrite en poussière sous les doigts (1 pt).\n   c) C'est le calcaire (sels minéraux) qui subsiste seul (1 pt).", False, None)],
                    [("2. Les trois parties du membre supérieur : ", True, None), ("Le bras (avec l'humérus), l'avant-bras (avec le radius et le cubitus) et la main (avec le carpe, métacarpe et phalanges) (3 pts, 1 pt par partie exacte).", False, None)]
                ]
            },
            {
                "titre": "PARTIE III : SITUATION-PROBLÈME DE SANTÉ ET SECOURISME (8 points)",
                "questions": [
                    "Contexte : Pendant la récréation, Rado glisse sur une pierre dans la cour de l'école. Il crie de douleur, sa cheville gonfle rapidement et il ne peut plus poser son pied par terre.",
                    "1. De quel traumatisme des articulations Rado souffre-t-il probablement ? (2 pts)",
                    "2. Quelles sont les DEUX actions de premiers secours immédiates que le maître et les élèves doivent accomplir ? (3 pts)",
                    "3. Que faut-il absolument ÉVITER de faire pour ne pas aggraver sa blessure ? (3 pts)"
                ],
                "corriges": [
                    [("1. Diagnostic probable : ", True, None), ("Rado souffre d'une entorse (foulure ou étirement violent des ligaments de la cheville) ou d'une fracture (2 pts).", False, None)],
                    [("2. Gestes de premiers secours : ", True, None), ("\n   - Asseoir immédiatement l'enfant et immobiliser la cheville sans bouger le membre (1.5 pt).\n   - Appliquer une compresse d'eau froide ou un linge propre frais sur la cheville pour calmer la douleur et réduire le gonflement, puis alerter les parents ou le CSB (1.5 pt).", False, None)],
                    [("3. Ce qu'il faut absolument éviter : ", True, None), ("Il ne faut jamais masser brutalement la cheville blessée, ne pas tirer sur le pied, et ne pas forcer l'enfant à marcher (3 pts).", False, None)]
                ]
            }
        ]
    },
    {
        "num": 2,
        "titre": "SUJET TYPE OFFICIEL N° 2 — LA PEAU, LES ORGANES DES SENS ET L'HYGIÈNE",
        "dren": "VAKINANKARATRA",
        "cisco": "ANTSIRABE I",
        "zap": "ANTSIRABE NORD",
        "epp": "EPP IVOHITRA",
        "code": "102 010 008",
        "duree": "45 minutes",
        "bareme_total": "20 points",
        "parties": [
            {
                "titre": "PARTIE I : QUESTIONS DE CONNAISSANCE (6 points)",
                "questions": [
                    "1. Nommez les deux couches principales qui constituent la peau humaine. (2 pts)",
                    "2. Quel est le rôle des glandes sudoripares et des pores de la peau ? (2 pts)",
                    "3. Cochez la bonne réponse (2 pts) :\n   Le tympan de l'oreille est :\n   [ ] Un os dur de la mâchoire\n   [ ] Une fine membrane vibrante séparant l'oreille externe de l'oreille moyenne\n   [ ] Une glande qui fabrique du sérum"
                ],
                "corriges": [
                    [("1. Les deux couches de la peau : ", True, None), ("L'épiderme (couche superficielle protectrice) et le derme (couche profonde vivante et sensible) (2 pts, 1 pt chacune).", False, None)],
                    [("2. Rôle des glandes sudoripares : ", True, None), ("Elles fabriquent la sueur qui est évacuée par les pores pour réguler la température du corps (refroidissement) et éliminer les toxines (2 pts).", False, None)],
                    [("3. Bonne réponse cochée : ", True, None), ("Une fine membrane vibrante séparant l'oreille externe de l'oreille moyenne (2 pts).", False, None)]
                ]
            },
            {
                "titre": "PARTIE II : ORGANES DE LA VISION ET DE L'OUÏE (6 points)",
                "questions": [
                    "1. Quels sont les trois organes protecteurs extérieurs de l'œil ? (3 pts)",
                    "2. Pourquoi est-il très dangereux d'introduire des objets pointus (allumette, bâtonnet, épingle) dans le conduit de l'oreille ? (3 pts)"
                ],
                "corriges": [
                    [("1. Organes protecteurs de l'œil : ", True, None), ("Les paupières, les cils et les sourcils (également les glandes lacrymales qui produisent les larmes) (3 pts, 1 pt pour chaque organe cité).", False, None)],
                    [("2. Danger des objets pointus dans l'oreille : ", True, None), ("Ces objets risquent de perforer ou déchirer la membrane fragile du tympan, ce qui entraîne une douleur aiguë, une infection grave et une surdité définitive (perte irréversible de l'ouïe) (3 pts).", False, None)]
                ]
            },
            {
                "titre": "PARTIE III : SANTÉ PUBLIQUE ET HYGIÈNE CUTANÉE À MADAGASCAR (8 points)",
                "questions": [
                    "Contexte : Dans un village, plusieurs enfants ont des démangeaisons intenses entre les doigts et sur le ventre, surtout la nuit. Le médecin du CSB II diagnostique la gale (hafotsy / katsaka).",
                    "1. Quel est le parasite responsable de la gale cutanée ? (2 pts)",
                    "2. Comment ce parasite se transmet-il d'un individu à l'autre ? (2 pts)",
                    "3. Quelles sont les TROIS mesures d'hygiène indispensables pour guérir et stopper la contagion dans la famille et à l'école ? (4 pts)"
                ],
                "corriges": [
                    [("1. Parasite responsable : ", True, None), ("Le sarcopte (acarien minuscule qui creuse des galeries sous la peau) (2 pts).", False, None)],
                    [("2. Mode de transmission : ", True, None), ("Par contact direct de peau à peau avec une personne contaminée ou par le partage de vêtements, couvertures, linges et nattes non lavés (2 pts).", False, None)],
                    [("3. Trois mesures d'hygiène indispensables :", True, None), ("\n   - Traiter tous les membres de la famille en même temps avec la lotion prescrite par le médecin du CSB (1.5 pt).\n   - Laver tous les vêtements, draps et couvertures à l'eau bouillante savonneuse et les sécher en plein soleil (1.5 pt).\n   - Se laver quotidiennement tout le corps à l'eau propre et au savon (1 pt).", False, None)]
                ]
            }
        ]
    },
    {
        "num": 3,
        "titre": "SUJET TYPE OFFICIEL N° 3 — LA DENTITION, LA DIGESTION ET L'EAU POTABLE",
        "dren": "HAUTE MATSIATRA",
        "cisco": "FIANARANTSOA I",
        "zap": "AMBOHIMIANDRA",
        "epp": "EPP TANAMBAO",
        "code": "301 040 012",
        "duree": "45 minutes",
        "bareme_total": "20 points",
        "parties": [
            {
                "titre": "PARTIE I : CONNAISSANCES SUR LES DENTS ET LA DIGESTION (6 points)",
                "questions": [
                    "1. Combien de dents permanentes un adulte possède-t-il au total ? (1 pt)",
                    "2. Associez chaque type de dent à son rôle principal (3 pts) :\n   a) Les incisives             1) Broyer et écraser les aliments\n   b) Les canines               2) Couper et trancher les aliments\n   c) Les molaires              3) Déchirer les aliments résistants",
                    "3. Quel est l'organe du tube digestif où se fait le malaxage des aliments avec les sucs gastriques ? (2 pts)"
                ],
                "corriges": [
                    [("1. Denture adulte : ", True, None), ("Un adulte possède 32 dents au total (1 pt).", False, None)],
                    [("2. Association des dents : ", True, None), ("\n   a) Incisives -> 2) Couper et trancher (1 pt)\n   b) Canines -> 3) Déchirer (1 pt)\n   c) Molaires -> 1) Broyer et écraser (1 pt)", False, None)],
                    [("3. Organe de malaxage : ", True, None), ("C'est l'estomac (2 pts).", False, None)]
                ]
            },
            {
                "titre": "PARTIE II : COUPE DE LA DENT ET CARIE (6 points)",
                "questions": [
                    "1. Nommez les trois couches successives d'une dent, de l'extérieur vers l'intérieur. (3 pts)",
                    "2. Expliquez comment se forme la carie dentaire et pourquoi un brossage régulier après les repas la prévient. (3 pts)"
                ],
                "corriges": [
                    [("1. Les trois couches de la dent : ", True, None), ("L'émail (couche externe dure), l'ivoire ou dentine (couche intermédiaire), et la pulpe dentaire (contenant vaisseaux sanguins et nerfs) (3 pts, 1 pt par couche exacte).", False, None)],
                    [("2. Formation et prévention de la carie : ", True, None), ("Les résidus sucrés coincés entre les dents sont transformés par les bactéries en acides qui rongent l'émail puis l'ivoire. Le brossage minutieux pendant 3 minutes élimine la plaque dentaire et les débris d'aliments, empêchant l'attaque des bactéries (3 pts).", False, None)]
                ]
            },
            {
                "titre": "PARTIE III : PURIFICATION DE L'EAU ET PARASITES DIGESTIFS (8 points)",
                "questions": [
                    "Contexte : Dans un village des Hautes Terres, la source d'eau est trouble après la pluie. Des enfants qui boivent cette eau présentent des diarrhées et des vers ronds (Ascaris) dans leurs selles.",
                    "1. Quels sont les deux moyens simples et efficaces pour rendre l'eau de la rivière propre et potable à la maison ? (4 pts)",
                    "2. Citez deux règles d'hygiène fondamentales avant chaque repas pour ne pas attraper de parasites intestinaux. (4 pts)"
                ],
                "corriges": [
                    [("1. Deux moyens de rendre l'eau potable :", True, None), ("\n   - Faire bouillir l'eau à gros bouillons pendant au moins 10 minutes, puis la laisser refroidir dans un récipient propre couvert (2 pts).\n   - Traiter l'eau claire avec une solution désinfectante agréée comme le Sur'Eau (chlore) selon le dosage prescrit (2 pts) (la filtration sur linge propre est également valorisée).", False, None)],
                    [("2. Règles d'hygiène indispensables :", True, None), ("\n   - Se laver systématiquement les mains à l'eau propre et au savon avant de toucher les aliments et de manger (2 pts).\n   - Bien laver les fruits et légumes crus avec de l'eau saine et couvrir les plats pour les protéger des mouches (2 pts).", False, None)]
                ]
            }
        ]
    },
    {
        "num": 4,
        "titre": "SUJET TYPE OFFICIEL N° 4 — RESPIRATION, AIR, VACCINATION ET PALUDISME",
        "dren": "ATSINANANA",
        "cisco": "TOAMASINA I",
        "zap": "ANJOMA",
        "epp": "EPP MORAFENO",
        "code": "501 010 014",
        "duree": "45 minutes",
        "bareme_total": "20 points",
        "parties": [
            {
                "titre": "PARTIE I : L'APPAREIL RESPIRATOIRE ET L'AIR (6 points)",
                "questions": [
                    "1. Citez dans l'ordre le trajet de l'air inspiré depuis le nez jusqu'aux poumons. (3 pts)",
                    "2. Quels sont les deux principaux gaz qui composent l'air que nous respirons ? Précisez leurs proportions approximatives. (3 pts)"
                ],
                "corriges": [
                    [("1. Trajet de l'air inspiré : ", True, None), ("Fosses nasales (nez) -> Pharynx/Larynx -> Trachée-artère -> Bronches -> Poumons (alvéoles pulmonaires) (3 pts).", False, None)],
                    [("2. Composition principale de l'air : ", True, None), ("L'Azote (environ 78 % ou 4/5) et l'Oxygène / Dioxygène (environ 21 % ou 1/5) (3 pts, 1.5 pt par gaz et proportion).", False, None)]
                ]
            },
            {
                "titre": "PARTIE II : MALADIES INFANTILES ET VACCINATION (6 points)",
                "questions": [
                    "1. Pourquoi les nouveau-nés et jeunes enfants doivent-ils recevoir le vaccin BCG ? Contre quelle maladie grave protège-t-il ? (3 pts)",
                    "2. Citez deux maladies infantiles très contagieuses évitables par la vaccination du PEV (Programme Élargi de Vaccination). (3 pts)"
                ],
                "corriges": [
                    [("1. Rôle du vaccin BCG : ", True, None), ("Le BCG permet au système immunitaire de fabriquer des défenses protectrices contre la tuberculose pulmonaire, maladie bactérienne grave et contagieuse (3 pts).", False, None)],
                    [("2. Deux maladies évitables par le vaccin : ", True, None), ("La rougeole, la coqueluche, la diphtérie, le tétanos ou la poliomyélite (3 pts, 1.5 pt par maladie valide citée).", False, None)]
                ]
            },
            {
                "titre": "PARTIE III : LUTTE CONTRE LE PALUDISME (8 points)",
                "questions": [
                    "Contexte : Sur la côte Est de Madagascar, le paludisme (tazo mahery) sévit fortement pendant la saison des pluies. L'agent communautaire vient sensibiliser l'école.",
                    "1. Quel est l'insecte vecteur qui transmet le microbe du paludisme en piquant l'homme la nuit ? (2 pts)",
                    "2. Pourquoi les eaux stagnantes (flaques, boîtes de conserve abandonnées, vieux pneus) favorisent-elles le paludisme ? (2 pts)",
                    "3. Donnez DEUX moyens de protection indispensables recommandés par le PNLP pour protéger la famille. (4 pts)"
                ],
                "corriges": [
                    [("1. Insecte vecteur : ", True, None), ("Le moustique anophèle femelle (2 pts).", False, None)],
                    [("2. Rôle des eaux stagnantes : ", True, None), ("Les eaux stagnantes constituent les gîtes larvaires où la femelle moustique pond ses œufs et où se développent les larves (2 pts).", False, None)],
                    [("3. Deux moyens de protection indispensables :", True, None), ("\n   - Dormir chaque nuit sous une moustiquaire imprégnée d'insecticide à longue durée d'action (MILDA) (2 pts).\n   - Assainir la cour en comblant les flaques d'eau, en débroussaillant les abords des maisons et en éliminant les récipients abandonnés (2 pts).", False, None)]
                ]
            }
        ]
    },
    {
        "num": 5,
        "titre": "SUJET TYPE OFFICIEL N° 5 — LE MONDE VÉGÉTAL, L'HABITAT ET LES ÉLEVAGES",
        "dren": "BOENY",
        "cisco": "MAHAJANGA I",
        "zap": "MAHABIBO",
        "epp": "EPP TSARARANO",
        "code": "401 020 009",
        "duree": "45 minutes",
        "bareme_total": "20 points",
        "parties": [
            {
                "titre": "PARTIE I : LES ORGANES DES PLANTES ET DES ARBRES (6 points)",
                "questions": [
                    "1. Citez les trois organes végétatifs fondamentaux d'une plante. (3 pts)",
                    "2. Quel est le rôle principal des racines d'un arbre pour la protection de l'environnement et du sol malgache ? (3 pts)"
                ],
                "corriges": [
                    [("1. Les trois organes de la plante : ", True, None), ("Les racines, la tige (ou tronc) et les feuilles (3 pts, 1 pt chacune).", False, None)],
                    [("2. Rôle des racines contre l'érosion : ", True, None), ("Les racines puissantes retiennent fermement la terre fertile, absorbent l'eau de pluie et empêchent le ravinement et l'érosion des sols (formation des lavaka) (3 pts).", False, None)]
                ]
            },
            {
                "titre": "PARTIE II : L'HABITAT SAIN ET LES LATRINES (6 points)",
                "questions": [
                    "1. Pourquoi une maison saine doit-elle obligatoirement comporter de grandes fenêtres orientées vers la lumière ? (3 pts)",
                    "2. À quelle distance minimale de la source d'eau ou du puits doit-on creuser la fosse d'aisance (latrine), et pourquoi doit-elle avoir un couvercle ? (3 pts)"
                ],
                "corriges": [
                    [("1. Rôle des fenêtres : ", True, None), ("Pour faire entrer l'air pur et les rayons du soleil (lumière ultraviolette) qui aèrent les pièces, chassent l'humidité et détruisent les microbes (3 pts).", False, None)],
                    [("2. Règle pour les latrines : ", True, None), ("À au moins 15 à 20 mètres en aval du puits pour ne pas infiltrer de microbes dans l'eau potable de la nappe phréatique (1.5 pt). Le couvercle empêche les mouches d'entrer et de transporter des matières fécales vers les aliments (1.5 pt).", False, None)]
                ]
            },
            {
                "titre": "PARTIE III : LES ANIMAUX UTILES : LA POULE ET LE ZÉBU (8 points)",
                "questions": [
                    "1. Classez la poule selon son régime alimentaire et son mode de reproduction. (2 pts)",
                    "2. Donnez DEUX produits essentiels que l'élevage de la poule fournit à la famille malgache. (2 pts)",
                    "3. Citez TROIS utilités majeures du zébu (Omby) dans la vie économique et agricole à Madagascar. (4 pts)"
                ],
                "corriges": [
                    [("1. Caractéristiques de la poule : ", True, None), ("Régime omnivore/granivore (mange grains, herbes, vers) (1 pt) et mode de reproduction ovipare (pond des œufs) (1 pt).", False, None)],
                    [("2. Produits fournis par la poule : ", True, None), ("Des œufs riches en protéines et de la viande nourrissante (ainsi que du fumier pour le potager) (2 pts).", False, None)],
                    [("3. Trois utilités majeures du zébu :", True, None), ("\n   - Force de traction animale : labour des rizières (piétinement/kiboma) et transport par charrette (1.5 pt).\n   - Production alimentaire : viande nourrissante et lait (1.5 pt).\n   - Fumier naturel fertilisant pour enrichir les cultures agricoles (1 pt) (également valorisé : valeur culturelle et sociale).", False, None)]
                ]
            }
        ]
    }
]

formulas_and_schemes_annex = {
    "titre": "ANNEXE II : RÉPERTOIRE GÉNÉRAL DES SCHÉMAS ET FORMULES SCIENTIFIQUES DE 9e",
    "sections": [
        {
            "titre": "1. FORMULES, PRINCIPES ET EXPÉRIENCES CLÉS DU PROGRAMME 9e",
            "items": [
                {
                    "nom": "Constitution Chimique et Biologique de l'Os",
                    "formule": "Os Long = Osséine (matière organique souple 1/3) + Sels de Calcaire (matière minérale rigide 2/3)",
                    "explication": "• Expérience de calcination : Chauffer un os au feu détruit l'osséine. Il ne reste que le calcaire : l'os devient blanc, cassant et friable.\n• Expérience de l'acide : Plonger un os dans du vinaigre ou de l'acide chlorhydrique dilué dissout tout le calcaire. Il ne reste que l'osséine : l'os devient mou, élastique et pliable sans se rompre."
                },
                {
                    "nom": "Composition Chimique de l'Air Atmosphérique",
                    "formule": "Air Atmosphérique = Azote (~78 % ou 4/5) + Oxygène / Dioxygène (~21 % ou 1/5) + Gaz carbonique et gaz rares (~1 %)",
                    "explication": "• Expérience de combustion : Une bougie allumée sous un bocal fermé consomme l'oxygène (1/5 du volume). La flamme s'éteint et le niveau de l'eau monte exactement de 1/5."
                },
                {
                    "nom": "Structure Anatomique de la Dent",
                    "formule": "Dent Saine = Émail (couche externe hyper-dure) + Ivoire/Dentine (corps de la dent) + Pulpe dentaire (vaisseaux + nerfs)",
                    "explication": "• Denture permanente de l'adulte (32 dents) = 8 incisives + 4 canines + 8 prémolaires + 12 molaires.\n• Denture de lait de l'enfant (20 dents) = 8 incisives + 4 canines + 8 molaires de lait."
                },
                {
                    "nom": "Cycle Naturel et États Physiques de l'Eau",
                    "formule": "Eau liquide (rivières/océans) ──(Évaporation)──> Vapeur d'eau ──(Condensation en altitude)──> Nuages ──(Précipitations)──> Pluie ──(Infiltration & Ruissellement)──> Nappes et Cours d'eau",
                    "explication": "• 3 états physiques : Solide (glace, grêle), Liquide (eau de pluie, rivière), Gazeux (vapeur invisible dans l'air)."
                },
                {
                    "nom": "Protocole de Stérilisation et Potabilité de l'Eau",
                    "formule": "Eau brute trouble ──(Filtration sur linge)──> Eau claire ──(Ébullition 10 min OU 2 gouttes de Sur'Eau/Litre)──> Eau potable saine",
                    "explication": "Détruit 100 % des microbes responsables du choléra, de la typhoïde, de la dysenterie et des vers intestinaux."
                },
                {
                    "nom": "Organes et Fonctions Végétales",
                    "formule": "Plante Complète = Racines (fixation + absorption d'eau et sels minéraux) + Tige/Tronc (conduction de la sève) + Feuilles (respiration + photosynthèse) + Fleurs & Fruits (reproduction)",
                    "explication": "Les racines des arbres et des vétivers fixent les sols en pente et empêchent la formation des lavaka (ravinement)."
                }
            ]
        },
        {
            "titre": "2. PLANCHE RÉCAPITULATIVE DES SCHÉMAS ANATOMIQUES ET SCIENTIFIQUES DE 9e",
            "schemas": [
                {"img": "squelette_humain.png", "legende": "Figure A : Le squelette humain — Tête (crâne, face), Tronc (colonne vertébrale, côtes, sternum), Membres supérieurs et inférieurs."},
                {"img": "bras_muscles.png", "legende": "Figure B : Le bras et les muscles antagonistes — Biceps (fléchisseur) et Triceps (extenseur) reliés aux os par des tendons."},
                {"img": "os_coupe.png", "legende": "Figure C : Coupe longitudinale d'un os long — Têtes avec cartilage articulaire, périoste, os compact, os spongieux et canal médullaire avec moelle."},
                {"img": "peau_coupe.png", "legende": "Figure D : Coupe transversale de la peau — Épiderme superficiel protecteur, derme sensible avec glandes sudoripares, pores et poils."},
                {"img": "oeil_anatomie.png", "legende": "Figure E : Coupe de l'œil humain — Cornée transparente, iris coloré, pupille centrale, cristallin, rétine réceptrice et nerf optique."},
                {"img": "oreille_anatomie.png", "legende": "Figure F : Coupe de l'oreille — Oreille externe (pavillon, conduit auditif), oreille moyenne (membrane du tympan, osselets) et oreille interne."},
                {"img": "dents.png", "legende": "Figure G : Les différentes dents et coupe de la dent — Incisive, canine, molaire ; émail externe, ivoire (dentine), pulpe et racine enchâssée."},
                {"img": "appareil_digestif.png", "legende": "Figure H : L'appareil digestif humain — Bouche, pharynx, œsophage, estomac, foie, pancréas, intestin grêle, gros intestin, rectum et anus."},
                {"img": "parasites_intestinaux.png", "legende": "Figure I : Les principaux vers parasites intestinaux — Ascaris (ver rond), Oxyures (petits vers filiformes) et Ténia (ver solitaire annelé)."},
                {"img": "cycle_eau.png", "legende": "Figure J : Le cycle de l'eau dans la nature — Évaporation par le soleil, condensation nuageuse, précipitations pluvieuses, infiltration et cours d'eau."},
                {"img": "appareil_respiratoire.png", "legende": "Figure K : L'appareil respiratoire humain — Fosses nasales, pharynx, larynx, trachée-artère, bronches droite et gauche, poumons et diaphragme."},
                {"img": "paludisme_cycle.png", "legende": "Figure L : Cycle de transmission du paludisme — Piqûre de l'anophèle femelle, transmission du Plasmodium, prévention par moustiquaire MILDA."},
                {"img": "plante_organes.png", "legende": "Figure M : Morphologie générale d'une plante — Racines pivotantes ou fasciculées, tige dressée, feuilles avec nervures, fleurs et fruits."},
                {"img": "fleur_coupe.png", "legende": "Figure N : Coupe d'une fleur complète — Calice avec sépales, corolle avec pétales, organes mâles (étamines et pollen), organe femelle (pistil et ovaire)."},
                {"img": "arbre_morphologie.png", "legende": "Figure O : L'arbre et son système racinaire — Houppier et feuillage, tronc avec écorce, racines profondes maintenant la terre contre l'érosion."},
                {"img": "habitat_sain.png", "legende": "Figure P : Aménagement d'un habitat sain — Maison ensoleillée et aérée, latrines couvertes à distance du puits, cour propre sans eaux stagnantes."},
                {"img": "poule_anatomie.png", "legende": "Figure Q : Morphologie de la poule (Akoho) — Crête, bec corné, yeux vifs, plumage, ailes, pattes écailleuses avec 4 doigts et ergots."},
                {"img": "zebu_anatomie.png", "legende": "Figure R : Morphologie du zébu malgache (Omby) — Bosse graisseuse (trafo), longues cornes en lyre, fanon sous le cou, sabots et robe."}
            ]
        }
    ]
}
