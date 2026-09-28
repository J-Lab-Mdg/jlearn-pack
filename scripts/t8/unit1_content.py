# -*- coding: utf-8 -*-
"""Contenu pédagogique — SVT 4ème — Unité I : Santé et bien-être
(appareil respiratoire, appareil circulatoire, le sang et les groupes sanguins)
Auteur : contenu rédigé pour J-Learn (T8).
"""

UNIT1 = {
    'num': 1,
    'theme': "Santé et bien-être",
    'toc_title': "UNITÉ I — Santé et bien-être",
    'ras_short': "Analyser le fonctionnement du système circulatoire et du système respiratoire",
    'ras_full': ("Analyser le fonctionnement du système circulatoire et du système respiratoire \u00b7 "
                 "Déterminer la compatibilité des groupes sanguins entre eux"),
    'valeurs_short': "Estime de soi, créativité",
    'valeurs_full': "Estime de soi, créativité",
    'exam_title': "Sujet d'examen 4e — Unité I : Santé et bien-être",
    'glossaire': [
        ("Alvéole pulmonaire", "Petit sac d'air situé au bout des bronchioles, entouré de capillaires sanguins, où se fait l'hématose."),
        ("Hématose", "Échange gazeux au niveau des alvéoles : le sang capte le dioxygène et rejette le dioxyde de carbone."),
        ("Diaphragme", "Muscle situé sous les poumons qui se contracte et se relâche pour permettre la respiration."),
        ("Circulation sanguine", "Trajet parcouru par le sang dans l'organisme, propulsé par le cœur à travers les vaisseaux."),
        ("Petite circulation", "Trajet du sang entre le cœur et les poumons, où il se charge en dioxygène."),
        ("Grande circulation", "Trajet du sang entre le cœur et tous les organes du corps, où il apporte le dioxygène."),
        ("Artère", "Vaisseau sanguin qui transporte le sang du cœur vers les organes."),
        ("Veine", "Vaisseau sanguin qui ramène le sang des organes vers le cœur."),
        ("Capillaire sanguin", "Très petit vaisseau qui relie les artères aux veines, au contact direct des cellules."),
        ("Plasma", "Partie liquide du sang, jaunâtre, qui transporte les éléments figurés et les substances dissoutes."),
        ("Globule rouge", "Élément figuré du sang, sans noyau, contenant l'hémoglobine qui transporte le dioxygène."),
        ("Globule blanc", "Élément figuré du sang chargé de défendre l'organisme contre les microbes."),
        ("Plaquette sanguine", "Petit élément figuré du sang responsable de la coagulation en cas de blessure."),
        ("Groupe sanguin", "Catégorie du sang (A, B, AB ou O) déterminée par la présence d'antigènes sur les globules rouges."),
        ("Transfusion sanguine", "Transfert de sang d'un donneur à un receveur, qui doit respecter la compatibilité des groupes sanguins."),
        ("Donneur universel", "Personne de groupe sanguin O qui peut donner son sang à tous les groupes."),
    ],
}

LESSONS = [
    # ---------------- Séance 1 ----------------
    {
        'title': "Les voies respiratoires et les poumons",
        'objectif': "identifier les organes de l'appareil respiratoire et décrire le trajet de l'air",
        'support_materiel': "Schéma de l'appareil respiratoire ; petit mammifère ou vidéo de dissection",
        'ras': "Analyser le fonctionnement du système circulatoire et du système respiratoire",
        'fignum': 1,
        'fig_title': "L'appareil respiratoire : voies aériennes et poumons",
        'fig_b': "Des élèves malgaches respirent l'air frais dans la cour de l'école, au petit matin",
        'revision_q': ["Quels sont les cinq sens de l'être humain ?",
                       "Pourquoi devons-nous respirer sans arrêt ?"],
        'revision_ra': ["R.A. : La vue, l'ouïe, l'odorat, le goût et le toucher.",
                        "R.A. : Parce que le corps a besoin en permanence de dioxygène pour vivre."],
        'mise_situation': ("L'enseignant demande : « Bouchez-vous le nez et la bouche quelques secondes. "
                            "Que ressentez-vous ? Pourquoi ne pouvez-vous pas rester longtemps sans respirer ? »"),
        'mise_ra': "Les élèves répondent : on a besoin d'air, on étouffe si on ne respire pas.",
        'observation': ("L'enseignant présente la figure 1 et demande aux élèves de nommer, dans l'ordre, "
                         "les organes traversés par l'air depuis le nez jusqu'aux poumons."),
        'observation_support': "Figure 1 — L'appareil respiratoire : voies aériennes et poumons.",
        'analyse_q': [
            "Par où l'air entre-t-il dans le corps ?",
            "Quel est le rôle de la trachée ?",
            "Que sont les bronches et les bronchioles ?",
            "Où se trouvent les alvéoles pulmonaires ?",
        ],
        'analyse_ra': [
            "R.A. : L'air entre par le nez ou la bouche, puis passe par le pharynx et le larynx.",
            "R.A. : La trachée conduit l'air vers les poumons ; elle est maintenue ouverte par des anneaux cartilagineux.",
            "R.A. : Ce sont des tubes de plus en plus petits qui ramifient l'air à l'intérieur des poumons.",
            "R.A. : Elles se trouvent au bout des bronchioles, à l'intérieur des poumons.",
        ],
        'synthese': ("L'appareil respiratoire est formé des voies respiratoires (nez, pharynx, larynx, trachée, "
                     "bronches, bronchioles) et des poumons, qui contiennent les alvéoles pulmonaires."),
        'body': [
            ("1. Le trajet de l'air",
             "L'air que nous respirons suit un trajet précis avant d'arriver dans les poumons. Il pénètre par "
             "le nez, où il est réchauffé, humidifié et filtré par les poils et le mucus des fosses nasales, "
             "ou par la bouche en cas d'effort. Il traverse ensuite le pharynx, carrefour commun avec le tube "
             "digestif, puis le larynx, où se trouvent les cordes vocales.",
             ["Le nez filtre, réchauffe et humidifie l'air inspiré.",
              "Le pharynx est un carrefour entre les voies respiratoires et digestives.",
              "Le larynx contient les cordes vocales qui produisent la voix."]),
            ("2. La trachée et les bronches",
             "Après le larynx, l'air descend dans la trachée, un tube maintenu ouvert par des anneaux de "
             "cartilage en forme de « C ». La trachée se divise en deux bronches, une pour chaque poumon, qui "
             "se ramifient à leur tour en bronchioles de plus en plus fines, comme les branches d'un arbre.",
             ["La trachée est soutenue par des anneaux cartilagineux qui l'empêchent de s'écraser.",
              "Les bronches conduisent l'air vers le poumon droit et le poumon gauche.",
              "Les bronchioles sont les ramifications les plus fines des bronches."]),
            ("3. Les poumons et les alvéoles",
             "Les poumons sont deux organes spongieux situés dans le thorax, protégés par la cage thoracique. "
             "À l'extrémité de chaque bronchiole se trouvent des milliers de petits sacs appelés alvéoles "
             "pulmonaires, entourés d'un réseau très dense de capillaires sanguins. C'est là que se produisent "
             "les échanges gazeux entre l'air et le sang.",
             ["Le poumon droit possède trois lobes, le poumon gauche en possède deux.",
              "Les alvéoles pulmonaires forment une immense surface d'échange, environ 70 m² chez l'adulte.",
              "Chaque alvéole est entourée de capillaires sanguins très fins."]),
            ("4. Prendre soin de son appareil respiratoire",
             "Pour garder des poumons en bonne santé, il est important d'éviter la fumée (cigarette, feux de "
             "cuisson dans une pièce mal aérée), de limiter l'exposition à la poussière, et de pratiquer une "
             "activité physique régulière qui renforce la capacité respiratoire.",
             ["Respirer un air enfumé abîme les voies respiratoires et les poumons.",
              "Une cuisine bien aérée réduit les risques liés à la fumée du foyer.",
              "Le sport régulier renforce les muscles respiratoires et la capacité des poumons."]),
        ],
        'example': ("Quand on souffle dans un miroir froid, de la buée se forme : cela montre que l'air expiré "
                    "contient de la vapeur d'eau réchauffée et humidifiée par notre appareil respiratoire."),
        'lesaistu': ("Un adulte au repos respire environ 12 à 16 fois par minute, soit plus de 20 000 fois par "
                     "jour, sans même y penser !"),
        'exercises': [
            {'type': 'qcm', 'points': 3, 'items': [
                {'q': "L'air entre dans le corps par…", 'options': ["l'estomac", "le nez ou la bouche", "le cœur"],
                 'correct': 1, 'explain': "Le nez et la bouche sont les portes d'entrée de l'air."},
                {'q': "La trachée est maintenue ouverte par…", 'options': ["des muscles", "des anneaux de cartilage", "des os"],
                 'correct': 1, 'explain': "Ces anneaux en forme de « C » empêchent la trachée de s'écraser."},
                {'q': "Les échanges gazeux se font au niveau…", 'options': ["des alvéoles pulmonaires", "du larynx", "des bronches"],
                 'correct': 0, 'explain': "Les alvéoles sont entourées de capillaires sanguins."},
            ]},
            {'type': 'vf', 'points': 3, 'items': [
                {'text': "Le pharynx est commun aux voies respiratoires et digestives.", 'truth': True,
                 'explain': "C'est un carrefour entre l'air et les aliments."},
                {'text': "Les bronchioles sont plus grosses que les bronches.", 'truth': False,
                 'explain': "Les bronchioles sont des ramifications plus fines que les bronches."},
                {'text': "Le poumon gauche a trois lobes.", 'truth': False,
                 'explain': "C'est le poumon droit qui a trois lobes ; le gauche en a deux."},
            ]},
            {'type': 'fillblank', 'points': 3, 'items': [
                {'prefix': "L'air passe successivement par le nez, le pharynx, le", 'answer': " larynx",
                 'suffix': ", la trachée, les bronches puis les bronchioles."},
                {'prefix': "Les alvéoles pulmonaires sont entourées d'un réseau de", 'answer': " capillaires sanguins",
                 'suffix': "."},
                {'prefix': "La trachée se divise en deux", 'answer': " bronches", 'suffix': ", une pour chaque poumon."},
            ]},
            {'type': 'phrase', 'points': 3, 'items': [
                "Cite dans l'ordre les organes traversés par l'air, du nez jusqu'aux alvéoles.",
                "Pourquoi les alvéoles pulmonaires sont-elles bien adaptées aux échanges gazeux ?",
                "Explique le rôle du nez lors de l'inspiration.",
            ], 'answers': [
                "Nez → pharynx → larynx → trachée → bronches → bronchioles → alvéoles pulmonaires.",
                "Parce qu'elles sont très nombreuses, offrent une grande surface d'échange et sont entourées de capillaires sanguins.",
                "Le nez filtre, réchauffe et humidifie l'air avant qu'il n'entre dans les poumons.",
            ]},
        ],
    },
    # ---------------- Séance 2 ----------------
    {
        'title': "Les mouvements respiratoires et les échanges gazeux",
        'objectif': "expliquer les mouvements respiratoires et le mécanisme de l'hématose",
        'support_materiel': "Schéma des alvéoles pulmonaires ; ballon de baudruche pour modéliser la respiration",
        'ras': "Analyser le fonctionnement du système circulatoire et du système respiratoire",
        'fignum': 2,
        'fig_title': "Inspiration, expiration et échanges gazeux au niveau des alvéoles",
        'fig_b': "Des élèves malgaches font des exercices de respiration profonde pendant l'éducation physique",
        'revision_q': ["Quels organes forment l'appareil respiratoire ?",
                       "Où se produisent les échanges gazeux ?"],
        'revision_ra': ["R.A. : Le nez, le pharynx, le larynx, la trachée, les bronches, les bronchioles et les poumons.",
                        "R.A. : Au niveau des alvéoles pulmonaires."],
        'mise_situation': ("L'enseignant demande aux élèves de poser la main sur leur ventre et de respirer "
                            "profondément. « Que remarquez-vous ? Le ventre bouge-t-il de la même façon en "
                            "inspirant et en expirant ? »"),
        'mise_ra': "Les élèves remarquent que le ventre et la poitrine se soulèvent puis s'abaissent.",
        'observation': ("L'enseignant présente la figure 2 montrant les mouvements du diaphragme et de la "
                         "cage thoracique pendant l'inspiration et l'expiration."),
        'observation_support': "Figure 2 — Inspiration, expiration et échanges gazeux au niveau des alvéoles.",
        'analyse_q': [
            "Que se passe-t-il pendant l'inspiration ?",
            "Que se passe-t-il pendant l'expiration ?",
            "Quel muscle joue un rôle essentiel dans la respiration ?",
            "Quel gaz le sang capte-t-il, et quel gaz rejette-t-il au niveau des alvéoles ?",
        ],
        'analyse_ra': [
            "R.A. : La cage thoracique s'agrandit, le diaphragme s'abaisse, l'air entre dans les poumons.",
            "R.A. : La cage thoracique se resserre, le diaphragme remonte, l'air sort des poumons.",
            "R.A. : Le diaphragme, un muscle situé sous les poumons.",
            "R.A. : Le sang capte le dioxygène et rejette le dioxyde de carbone.",
        ],
        'synthese': ("La respiration est une succession de mouvements d'inspiration et d'expiration, assurée "
                     "par le diaphragme et la cage thoracique. Au niveau des alvéoles, le sang réalise "
                     "l'hématose : il capte le dioxygène de l'air et rejette le dioxyde de carbone."),
        'body': [
            ("1. L'inspiration",
             "Pendant l'inspiration, le diaphragme se contracte et s'abaisse, tandis que les muscles situés "
             "entre les côtes soulèvent la cage thoracique. Le volume de la cage thoracique augmente, la "
             "pression à l'intérieur des poumons diminue, et l'air extérieur, plus riche en dioxygène, "
             "s'engouffre dans les poumons.",
             ["Le diaphragme se contracte et descend.",
              "La cage thoracique s'agrandit vers le haut et sur les côtés.",
              "L'air riche en dioxygène pénètre dans les poumons."]),
            ("2. L'expiration",
             "Pendant l'expiration, c'est le mouvement inverse : le diaphragme se relâche et remonte, la cage "
             "thoracique s'abaisse et se resserre. Le volume des poumons diminue, la pression augmente, et "
             "l'air chargé de dioxyde de carbone est chassé vers l'extérieur.",
             ["Le diaphragme se relâche et remonte.",
              "La cage thoracique redevient plus petite.",
              "L'air riche en dioxyde de carbone est expulsé."]),
            ("3. L'hématose : l'échange gazeux",
             "Au niveau de chaque alvéole pulmonaire, la paroi est si fine que les gaz peuvent la traverser "
             "facilement. Le sang qui arrive par les capillaires est pauvre en dioxygène et riche en dioxyde "
             "de carbone : il capte le dioxygène de l'air alvéolaire et lui cède son dioxyde de carbone. Ce "
             "sang redevient alors riche en dioxygène et repart vers le cœur.",
             ["L'échange se fait à travers la fine paroi des alvéoles et des capillaires.",
              "Le sang capte le dioxygène (O2) apporté par l'air.",
              "Le sang libère le dioxyde de carbone (CO2) qui sera expiré."]),
            ("4. La fréquence respiratoire",
             "La fréquence respiratoire est le nombre de mouvements respiratoires par minute ; elle varie "
             "selon l'âge, l'activité physique et l'état de santé. Elle augmente pendant l'effort et diminue "
             "au repos, car les besoins en dioxygène du corps changent constamment.",
             ["Un enfant respire en général plus vite qu'un adulte au repos.",
              "La fièvre ou une maladie respiratoire peuvent augmenter la fréquence respiratoire.",
              "Mesurer sa fréquence respiratoire est un geste simple de surveillance de sa santé."]),
        ],
        'example': ("Lorsqu'on court, on respire plus vite et plus fort : le corps a besoin de davantage de "
                    "dioxygène pour fournir de l'énergie aux muscles qui travaillent."),
        'lesaistu': ("À chaque respiration, environ 500 mL d'air entrent et sortent des poumons ; c'est ce "
                     "qu'on appelle le volume courant."),
        'exercises': [
            {'type': 'qcm', 'points': 3, 'items': [
                {'q': "Pendant l'inspiration, le diaphragme…", 'options': ["se contracte et descend", "se relâche et remonte", "reste immobile"],
                 'correct': 0, 'explain': "Sa contraction agrandit la cage thoracique."},
                {'q': "Au niveau des alvéoles, le sang capte…", 'options': ["le dioxyde de carbone", "le dioxygène", "l'azote"],
                 'correct': 1, 'explain': "C'est le principe de l'hématose."},
                {'q': "Pendant l'expiration, l'air rejeté est riche en…", 'options': ["dioxygène", "dioxyde de carbone", "eau seulement"],
                 'correct': 1, 'explain': "Le CO2 produit par les cellules est éliminé par expiration."},
            ]},
            {'type': 'vf', 'points': 3, 'items': [
                {'text': "Pendant l'expiration, la cage thoracique s'agrandit.", 'truth': False,
                 'explain': "C'est pendant l'inspiration que la cage thoracique s'agrandit."},
                {'text': "L'hématose est l'échange de gaz entre l'air et le sang.", 'truth': True,
                 'explain': "Elle se produit au niveau des alvéoles pulmonaires."},
                {'text': "Le diaphragme est un os situé dans le thorax.", 'truth': False,
                 'explain': "Le diaphragme est un muscle, pas un os."},
            ]},
            {'type': 'fillblank', 'points': 3, 'items': [
                {'prefix': "Pendant l'inspiration, le volume de la cage thoracique", 'answer': " augmente",
                 'suffix': " et l'air entre dans les poumons."},
                {'prefix': "Au niveau des alvéoles, le sang cède du dioxyde de carbone et capte du", 'answer': " dioxygène",
                 'suffix': "."},
                {'prefix': "Le muscle principal de la respiration est le", 'answer': " diaphragme", 'suffix': "."},
            ]},
            {'type': 'phrase', 'points': 3, 'items': [
                "Décris ce qui se passe dans le thorax pendant l'inspiration.",
                "Explique pourquoi on respire plus vite après un effort physique.",
                "Qu'est-ce que l'hématose ?",
            ], 'answers': [
                "Le diaphragme se contracte et descend, la cage thoracique s'agrandit, l'air entre dans les poumons.",
                "Les muscles ont besoin de plus de dioxygène pour produire de l'énergie, donc la respiration s'accélère.",
                "C'est l'échange gazeux au niveau des alvéoles : le sang capte le dioxygène et rejette le dioxyde de carbone.",
            ]},
        ],
    },
    # ---------------- Séance 3 ----------------
    {
        'title': "Le cœur et les vaisseaux sanguins",
        'objectif': "décrire l'anatomie du cœur et les différents types de vaisseaux sanguins",
        'support_materiel': "Schéma du cœur ; cœur d'animal (porc, volaille) pour dissection si possible",
        'ras': "Analyser le fonctionnement du système circulatoire et du système respiratoire",
        'fignum': 3,
        'fig_title': "Le cœur et les principaux vaisseaux sanguins",
        'fig_b': "Un agent de santé malgache prend le pouls d'un patient au centre de santé du village",
        'revision_q': ["Qu'est-ce que l'hématose ?", "Quel gaz le sang capte-t-il dans les poumons ?"],
        'revision_ra': ["R.A. : C'est l'échange gazeux entre l'air et le sang au niveau des alvéoles.",
                        "R.A. : Le sang capte le dioxygène."],
        'mise_situation': ("L'enseignant demande aux élèves de poser deux doigts sur leur poignet ou leur cou. "
                            "« Que sentez-vous ? Qu'est-ce qui produit ce battement régulier ? »"),
        'mise_ra': "Les élèves sentent les battements du pouls, liés aux battements du cœur.",
        'observation': "L'enseignant présente la figure 3 représentant le cœur et les vaisseaux sanguins.",
        'observation_support': "Figure 3 — Le cœur et les principaux vaisseaux sanguins.",
        'analyse_q': [
            "Combien de cavités possède le cœur ?",
            "Quel est le rôle du cœur ?",
            "Quelle est la différence entre une artère et une veine ?",
            "Que sont les capillaires sanguins ?",
        ],
        'analyse_ra': [
            "R.A. : Le cœur possède quatre cavités : deux oreillettes et deux ventricules.",
            "R.A. : Le cœur est une pompe musculaire qui propulse le sang dans tout le corps.",
            "R.A. : L'artère transporte le sang du cœur vers les organes ; la veine ramène le sang vers le cœur.",
            "R.A. : Ce sont de très petits vaisseaux qui relient les artères aux veines, au contact des cellules.",
        ],
        'synthese': ("Le cœur est un muscle creux à quatre cavités qui propulse le sang dans l'organisme à "
                     "travers un réseau de vaisseaux sanguins : les artères, les veines et les capillaires."),
        'body': [
            ("1. Le cœur, une pompe musculaire",
             "Le cœur est un organe musculaire creux, de la taille d'un poing, situé dans la cage thoracique "
             "entre les deux poumons. Il est divisé en quatre cavités : deux oreillettes en haut, qui reçoivent "
             "le sang, et deux ventricules en bas, qui l'expulsent. Une cloison sépare le cœur droit du cœur "
             "gauche, qui ne communiquent jamais directement.",
             ["Le cœur comprend deux oreillettes et deux ventricules.",
              "Le cœur droit et le cœur gauche sont séparés par une cloison.",
              "Des valvules empêchent le sang de repartir en arrière."]),
            ("2. Les artères",
             "Les artères sont des vaisseaux à paroi épaisse et élastique qui transportent le sang du cœur "
             "vers les organes, sous forte pression. C'est dans les artères qu'on sent le pouls, choc "
             "provoqué par chaque battement du cœur.",
             ["Les artères partent du cœur vers les organes.",
              "Leur paroi épaisse résiste à la forte pression du sang.",
              "Le pouls correspond aux battements ressentis dans une artère."]),
            ("3. Les veines et les capillaires",
             "Les veines ramènent le sang des organes vers le cœur ; leur paroi est plus fine et elles "
             "possèdent des valvules qui empêchent le sang de refluer. Entre les artères et les veines, un "
             "immense réseau de capillaires, très fins, permet les échanges entre le sang et les cellules de "
             "tout le corps.",
             ["Les veines ramènent le sang vers le cœur.",
              "Des valvules empêchent le sang de reculer dans les veines.",
              "Les capillaires assurent les échanges avec les cellules."]),
            ("4. Prendre soin de son cœur",
             "Le cœur, comme tout muscle, a besoin d'être entretenu : une activité physique régulière, une "
             "alimentation équilibrée pauvre en sel et en graisses, et l'absence de tabac contribuent à "
             "préserver sa santé et à prévenir les maladies cardiovasculaires.",
             ["L'activité physique régulière renforce le muscle cardiaque.",
              "Une alimentation équilibrée protège les artères.",
              "Éviter le tabac réduit fortement le risque de maladies du cœur."]),
        ],
        'example': ("En prenant le pouls au poignet, un agent de santé compte les battements du cœur par "
                    "minute pour vérifier si une personne est en bonne santé."),
        'lesaistu': ("Le cœur bat en moyenne 70 fois par minute au repos, soit plus de 100 000 fois par jour !"),
        'exercises': [
            {'type': 'qcm', 'points': 3, 'items': [
                {'q': "Le cœur possède…", 'options': ["deux cavités", "trois cavités", "quatre cavités"],
                 'correct': 2, 'explain': "Deux oreillettes et deux ventricules."},
                {'q': "Les artères transportent le sang…", 'options': ["du cœur vers les organes", "des organes vers le cœur", "des poumons vers le nez"],
                 'correct': 0, 'explain': "Les veines font le trajet inverse."},
                {'q': "Les capillaires sont…", 'options': ["de très gros vaisseaux", "de très petits vaisseaux", "des cavités du cœur"],
                 'correct': 1, 'explain': "Ils permettent les échanges avec les cellules."},
            ]},
            {'type': 'vf', 'points': 3, 'items': [
                {'text': "Le cœur gauche et le cœur droit communiquent directement.", 'truth': False,
                 'explain': "Une cloison les sépare complètement."},
                {'text': "Les veines possèdent des valvules.", 'truth': True,
                 'explain': "Elles empêchent le sang de refluer."},
                {'text': "On sent le pouls dans une veine.", 'truth': False,
                 'explain': "Le pouls se sent dans une artère."},
            ]},
            {'type': 'fillblank', 'points': 3, 'items': [
                {'prefix': "Le cœur comprend deux oreillettes et deux", 'answer': " ventricules", 'suffix': "."},
                {'prefix': "Les veines ramènent le sang des organes vers le", 'answer': " cœur", 'suffix': "."},
                {'prefix': "Les échanges avec les cellules se font au niveau des", 'answer': " capillaires",
                 'suffix': " sanguins."},
            ]},
            {'type': 'assoc', 'points': 3,
             'colA': ["Artère", "Veine", "Capillaire"],
             'colB': ["Ramène le sang vers le cœur", "Relie artères et veines", "Transporte le sang du cœur vers les organes"],
             'correct': {1: 3, 2: 1, 3: 2}},
        ],
    },
    # ---------------- Séance 4 ----------------
    {
        'title': "La petite et la grande circulation",
        'objectif': "distinguer la petite circulation de la grande circulation sanguine",
        'support_materiel': "Schéma de la circulation sanguine ; documents ou vidéo",
        'ras': "Analyser le fonctionnement du système circulatoire et du système respiratoire",
        'fignum': 4,
        'fig_title': "La petite circulation (cœur-poumons) et la grande circulation (cœur-organes)",
        'fig_b': "Une élève malgache court pendant la récréation ; son cœur bat plus vite",
        'revision_q': ["Combien de cavités possède le cœur ?", "Quel vaisseau ramène le sang vers le cœur ?"],
        'revision_ra': ["R.A. : Quatre cavités : deux oreillettes et deux ventricules.",
                        "R.A. : La veine."],
        'mise_situation': ("L'enseignant demande : « Le sang qui sort du cœur va-t-il directement à tous les "
                            "organes, ou passe-t-il d'abord ailleurs ? »"),
        'mise_ra': "Les élèves émettent des hypothèses variées.",
        'observation': "L'enseignant présente la figure 4 montrant les deux circuits du sang.",
        'observation_support': "Figure 4 — La petite circulation et la grande circulation.",
        'analyse_q': [
            "Quel est le trajet de la petite circulation ?",
            "Quel est le trajet de la grande circulation ?",
            "Pourquoi le sang doit-il passer par les poumons avant d'aller aux organes ?",
            "Quel côté du cœur gère la petite circulation, et quel côté gère la grande circulation ?",
        ],
        'analyse_ra': [
            "R.A. : Le sang part du cœur droit vers les poumons, puis revient au cœur gauche.",
            "R.A. : Le sang part du cœur gauche vers tous les organes, puis revient au cœur droit.",
            "R.A. : Pour se charger en dioxygène avant d'être distribué aux organes.",
            "R.A. : Le cœur droit gère la petite circulation ; le cœur gauche gère la grande circulation.",
        ],
        'synthese': ("Le sang parcourt deux circuits : la petite circulation entre le cœur et les poumons "
                     "(où il se charge en dioxygène), et la grande circulation entre le cœur et tous les "
                     "organes (où il livre le dioxygène et les nutriments)."),
        'body': [
            ("1. La petite circulation",
             "La petite circulation relie le cœur aux poumons. Le sang pauvre en dioxygène part du ventricule "
             "droit, traverse les poumons où il se charge en dioxygène grâce à l'hématose, puis revient à "
             "l'oreillette gauche du cœur, riche en dioxygène.",
             ["Elle part du cœur droit vers les poumons.",
              "Le sang se charge en dioxygène dans les poumons.",
              "Le sang riche en dioxygène revient au cœur gauche."]),
            ("2. La grande circulation",
             "La grande circulation relie le cœur à tous les organes du corps. Le sang riche en dioxygène part "
             "du ventricule gauche, circule dans les artères jusqu'aux organes, où il livre le dioxygène et "
             "les nutriments et récupère le dioxyde de carbone, puis revient à l'oreillette droite par les "
             "veines.",
             ["Elle part du cœur gauche vers tous les organes.",
              "Le sang livre le dioxygène et les nutriments aux cellules.",
              "Le sang pauvre en dioxygène revient au cœur droit."]),
            ("3. Un circuit continu",
             "Les deux circulations se succèdent sans arrêt, jour et nuit : le cœur droit envoie le sang vers "
             "les poumons (petite circulation), le cœur gauche l'envoie vers les organes (grande circulation). "
             "Ce va-et-vient permanent assure à chaque cellule du corps un apport constant de dioxygène et de "
             "nutriments.",
             ["Le cœur fonctionne comme deux pompes associées, jamais à l'arrêt.",
              "Chaque cellule du corps reçoit du dioxygène grâce à ce circuit.",
              "Un effort physique augmente la vitesse de la circulation du sang."]),
            ("4. La circulation, l'effort et la santé",
             "Une bonne circulation sanguine assure un apport constant de dioxygène et de nutriments à tous "
             "les organes, même pendant un effort intense. C'est pourquoi une activité physique régulière, "
             "comme la marche, la course ou les travaux des champs, entretient un système circulatoire "
             "efficace.",
             ["L'exercice physique améliore l'efficacité de la circulation sanguine.",
              "Une bonne circulation permet aux muscles de mieux résister à la fatigue.",
              "La sédentarité prolongée peut nuire à la santé du système circulatoire."]),
        ],
        'example': ("Pendant un effort, comme la course ou le pilage du riz, le cœur bat plus vite pour "
                    "accélérer la circulation et fournir plus de dioxygène aux muscles qui travaillent."),
        'lesaistu': ("Mis bout à bout, tous les vaisseaux sanguins du corps humain mesureraient environ "
                     "100 000 km, soit plus de deux fois le tour de la Terre !"),
        'exercises': [
            {'type': 'qcm', 'points': 3, 'items': [
                {'q': "La petite circulation relie le cœur…", 'options': ["aux poumons", "aux muscles", "à l'estomac"],
                 'correct': 0, 'explain': "C'est le circuit cœur-poumons."},
                {'q': "La grande circulation part…", 'options': ["du ventricule droit", "du ventricule gauche", "de l'oreillette droite"],
                 'correct': 1, 'explain': "Le sang riche en dioxygène part du ventricule gauche vers les organes."},
                {'q': "Le sang qui revient des poumons est…", 'options': ["riche en dioxygène", "riche en dioxyde de carbone seulement", "sans gaz"],
                 'correct': 0, 'explain': "Il s'est chargé en dioxygène grâce à l'hématose."},
            ]},
            {'type': 'vf', 'points': 3, 'items': [
                {'text': "La grande circulation relie le cœur à tous les organes.", 'truth': True,
                 'explain': "Elle distribue le dioxygène à tout le corps."},
                {'text': "Le cœur droit gère la grande circulation.", 'truth': False,
                 'explain': "Le cœur droit gère la petite circulation."},
                {'text': "Les deux circulations fonctionnent en même temps.", 'truth': True,
                 'explain': "Le cœur droit et le cœur gauche battent ensemble."},
            ]},
            {'type': 'fillblank', 'points': 3, 'items': [
                {'prefix': "La petite circulation relie le cœur aux", 'answer': " poumons", 'suffix': "."},
                {'prefix': "La grande circulation part du ventricule", 'answer': " gauche", 'suffix': " vers les organes."},
                {'prefix': "Pendant un effort physique, le cœur bat plus", 'answer': " vite", 'suffix': "."},
            ]},
            {'type': 'phrase', 'points': 3, 'items': [
                "Décris le trajet complet de la petite circulation.",
                "Décris le trajet complet de la grande circulation.",
                "Pourquoi le cœur bat-il plus vite pendant un effort physique ?",
            ], 'answers': [
                "Ventricule droit → poumons (hématose) → oreillette gauche.",
                "Ventricule gauche → organes du corps (livraison de dioxygène) → oreillette droite.",
                "Parce que les muscles ont besoin de plus de dioxygène et de nutriments pendant l'effort.",
            ]},
        ],
    },
    # ---------------- Séance 5 ----------------
    {
        'title': "La composition du sang",
        'objectif': "identifier les constituants du sang (plasma et éléments figurés)",
        'support_materiel': "Photo ou vidéo de frottis sanguin ; documents scientifiques",
        'ras': "Déterminer la compatibilité des groupes sanguins entre eux",
        'fignum': 5,
        'fig_title': "Le sang observé au microscope : plasma et éléments figurés",
        'fig_b': "Un technicien de laboratoire prélève un échantillon de sang dans un centre de santé malgache",
        'revision_q': ["Quel est le trajet de la grande circulation ?", "Quel est le rôle du cœur ?"],
        'revision_ra': ["R.A. : Ventricule gauche → organes → oreillette droite.",
                        "R.A. : Le cœur pompe le sang dans tout le corps."],
        'mise_situation': ("L'enseignant montre l'image d'un tube de sang laissé au repos, séparé en deux "
                            "couches : une couche jaunâtre en haut, une couche rouge en bas. « Que représente "
                            "chaque couche ? »"),
        'mise_ra': "Les élèves émettent des hypothèses : peut-être deux liquides différents.",
        'observation': "L'enseignant présente la figure 5 : le sang observé au microscope.",
        'observation_support': "Figure 5 — Le sang observé au microscope : plasma et éléments figurés.",
        'analyse_q': [
            "De quoi le sang est-il composé ?",
            "Qu'est-ce que le plasma ?",
            "Que sont les éléments figurés du sang ?",
            "Pourquoi dit-on que le sang est un tissu liquide ?",
        ],
        'analyse_ra': [
            "R.A. : Le sang est composé de plasma et d'éléments figurés (globules rouges, globules blancs, plaquettes).",
            "R.A. : C'est la partie liquide, jaunâtre, du sang, qui transporte les éléments figurés et des substances dissoutes.",
            "R.A. : Ce sont les cellules et fragments de cellules en suspension dans le plasma.",
            "R.A. : Parce qu'il contient des cellules vivantes en suspension dans un liquide.",
        ],
        'synthese': ("Le sang est composé de plasma (partie liquide) et d'éléments figurés : globules rouges, "
                     "globules blancs et plaquettes sanguines, en suspension dans le plasma."),
        'body': [
            ("1. Le plasma",
             "Le plasma est la partie liquide du sang, de couleur jaune pâle. Il représente environ 55 % du "
             "volume sanguin et est constitué à 90 % d'eau. Il transporte les nutriments (glucose, "
             "vitamines), les déchets, les hormones et les gaz dissous, ainsi que les éléments figurés du "
             "sang.",
             ["Le plasma est composé à environ 90 % d'eau.",
              "Il transporte les nutriments et les déchets dans tout le corps.",
              "Il représente environ 55 % du volume total du sang."]),
            ("2. Les globules rouges et les globules blancs",
             "Les globules rouges, ou hématies, sont très nombreux et donnent au sang sa couleur rouge grâce "
             "à l'hémoglobine qu'ils contiennent. Les globules blancs, moins nombreux mais plus gros, "
             "défendent l'organisme contre les microbes. Il en existe plusieurs types.",
             ["Les globules rouges transportent le dioxygène grâce à l'hémoglobine.",
              "Les globules blancs assurent la défense de l'organisme.",
              "Un millimètre cube de sang contient des millions de globules rouges."]),
            ("3. Les plaquettes sanguines",
             "Les plaquettes sanguines sont de minuscules fragments de cellules, essentiels dans le processus "
             "de coagulation : lorsqu'un vaisseau est blessé, elles s'assemblent au point de la plaie pour "
             "former un bouchon qui arrête le saignement.",
             ["Les plaquettes sont plus petites que les globules rouges et blancs.",
              "Elles interviennent dans la coagulation du sang.",
              "Elles empêchent une perte de sang excessive en cas de blessure."]),
            ("4. La fabrication du sang : l'hématopoïèse",
             "Le sang n'est pas fabriqué une fois pour toutes : les globules rouges, les globules blancs et "
             "les plaquettes sont produits en permanence dans la moelle osseuse, un tissu situé à l'intérieur "
             "de certains os, comme ceux du bassin ou du sternum. Ce renouvellement constant compense la "
             "durée de vie limitée des cellules sanguines.",
             ["La moelle osseuse est le lieu de fabrication des cellules du sang.",
              "Les globules rouges vivent environ quatre mois avant d'être renouvelés.",
              "Ce renouvellement permanent maintient une quantité stable de sang dans le corps."]),
        ],
        'example': ("Quand on se coupe le doigt, le saignement s'arrête au bout de quelques minutes grâce à "
                    "l'action des plaquettes sanguines qui forment un caillot."),
        'lesaistu': ("Un adulte possède environ 5 litres de sang, ce qui représente près de 8 % de son poids "
                     "corporel."),
        'exercises': [
            {'type': 'qcm', 'points': 3, 'items': [
                {'q': "Le plasma est composé principalement…", 'options': ["de globules rouges", "d'eau", "de plaquettes"],
                 'correct': 1, 'explain': "Le plasma est constitué à environ 90 % d'eau."},
                {'q': "La couleur rouge du sang vient…", 'options': ["du plasma", "des globules blancs", "de l'hémoglobine des globules rouges"],
                 'correct': 2, 'explain': "L'hémoglobine donne sa couleur rouge au sang."},
                {'q': "Les plaquettes interviennent dans…", 'options': ["la digestion", "la coagulation", "la respiration"],
                 'correct': 1, 'explain': "Elles forment un bouchon en cas de blessure."},
            ]},
            {'type': 'vf', 'points': 3, 'items': [
                {'text': "Le sang est composé uniquement de plasma.", 'truth': False,
                 'explain': "Il contient aussi des éléments figurés."},
                {'text': "Les globules blancs défendent l'organisme.", 'truth': True,
                 'explain': "Ils luttent contre les microbes."},
                {'text': "Un adulte possède environ 5 litres de sang.", 'truth': True,
                 'explain': "C'est la quantité moyenne chez un adulte."},
            ]},
            {'type': 'fillblank', 'points': 3, 'items': [
                {'prefix': "Le sang est composé de plasma et d'éléments", 'answer': " figurés", 'suffix': "."},
                {'prefix': "Les globules rouges contiennent de l'", 'answer': "hémoglobine", 'suffix': "."},
                {'prefix': "Les plaquettes participent à la", 'answer': " coagulation", 'suffix': " du sang."},
            ]},
            {'type': 'assoc', 'points': 3,
             'colA': ["Plasma", "Globule blanc", "Plaquette"],
             'colB': ["Défend l'organisme", "Assure la coagulation", "Partie liquide du sang"],
             'correct': {1: 3, 2: 1, 3: 2}},
        ],
    },
    # ---------------- Séance 6 ----------------
    {
        'title': "Les fonctions des éléments figurés du sang",
        'objectif': "expliquer les fonctions de transport, de défense et de coagulation du sang",
        'support_materiel': "Documents ou vidéo sur les fonctions du sang ; tableau récapitulatif",
        'ras': "Déterminer la compatibilité des groupes sanguins entre eux",
        'fignum': 6,
        'fig_title': "Les fonctions des éléments figurés du sang",
        'fig_b': "Une infirmière malgache soigne une plaie chez un enfant au dispensaire",
        'revision_q': ["De quoi le sang est-il composé ?", "Que contiennent les globules rouges ?"],
        'revision_ra': ["R.A. : De plasma et d'éléments figurés (globules rouges, globules blancs, plaquettes).",
                        "R.A. : De l'hémoglobine."],
        'mise_situation': ("L'enseignant demande : « Pourquoi ne tombons-nous pas malades à chaque fois qu'un "
                            "microbe entre dans notre corps ? Et pourquoi une petite coupure finit-elle par "
                            "arrêter de saigner ? »"),
        'mise_ra': "Les élèves proposent des idées : le corps se défend, le sang se bloque.",
        'observation': "L'enseignant présente la figure 6 illustrant les trois fonctions du sang.",
        'observation_support': "Figure 6 — Les fonctions des éléments figurés du sang.",
        'analyse_q': [
            "Quel est le rôle des globules rouges ?",
            "Quel est le rôle des globules blancs ?",
            "Quel est le rôle des plaquettes ?",
            "Pourquoi ces trois fonctions sont-elles vitales pour l'organisme ?",
        ],
        'analyse_ra': [
            "R.A. : Ils transportent le dioxygène des poumons vers les organes.",
            "R.A. : Ils défendent l'organisme contre les microbes (infection).",
            "R.A. : Elles participent à la coagulation du sang en cas de blessure.",
            "R.A. : Sans elles, le corps manquerait de dioxygène, serait vulnérable aux infections et pourrait perdre trop de sang.",
        ],
        'synthese': ("Les globules rouges transportent le dioxygène, les globules blancs défendent l'organisme "
                     "contre les microbes, et les plaquettes assurent la coagulation du sang."),
        'body': [
            ("1. Le transport du dioxygène",
             "Grâce à l'hémoglobine qu'ils contiennent, les globules rouges captent le dioxygène au niveau des "
             "poumons et le libèrent au niveau des organes, qui en ont besoin pour produire de l'énergie. Ils "
             "récupèrent aussi une partie du dioxyde de carbone produit par les cellules.",
             ["L'hémoglobine se combine facilement avec le dioxygène.",
              "Les organes reçoivent le dioxygène nécessaire à leur fonctionnement.",
              "Une partie du dioxyde de carbone est transportée par le sang."]),
            ("2. La défense de l'organisme",
             "Les globules blancs constituent la défense de l'organisme contre les microbes (bactéries, virus). "
             "Lorsqu'un microbe pénètre dans le corps, certains globules blancs le détruisent directement, "
             "d'autres produisent des anticorps qui neutralisent les microbes. C'est le système immunitaire.",
             ["Les globules blancs détectent et attaquent les microbes.",
              "Certains produisent des anticorps spécifiques.",
              "Une plaie infectée entraîne souvent une augmentation des globules blancs."]),
            ("3. La coagulation du sang",
             "Lorsqu'un vaisseau sanguin est blessé, les plaquettes s'accumulent au point de la lésion et "
             "déclenchent la formation d'un caillot, avec l'aide de protéines du plasma. Ce caillot bouche la "
             "plaie et empêche une perte de sang trop importante, en attendant la cicatrisation.",
             ["Les plaquettes s'agglutinent au niveau de la blessure.",
              "Le caillot arrête le saignement en formant un bouchon.",
              "La coagulation protège l'organisme d'une perte de sang dangereuse."]),
            ("4. L'alimentation et la santé du sang",
             "Une alimentation équilibrée, riche en fer (légumes verts, viande, légumineuses) et en vitamines, "
             "est nécessaire à la bonne fabrication des globules rouges. Une carence en fer peut provoquer "
             "l'anémie, un problème de santé encore fréquent chez les enfants et les femmes enceintes à "
             "Madagascar.",
             ["Le fer est indispensable à la fabrication de l'hémoglobine.",
              "Une alimentation pauvre en fer peut provoquer une anémie.",
              "Les légumes verts et les légumineuses sont de bonnes sources de fer accessibles localement."]),
        ],
        'example': ("Chez une personne blessée qui saigne beaucoup, on applique un pansement compressif pour "
                    "aider les plaquettes à former le caillot plus rapidement."),
        'lesaistu': ("Le corps humain fabrique environ deux millions de nouveaux globules rouges chaque "
                     "seconde dans la moelle osseuse !"),
        'exercises': [
            {'type': 'qcm', 'points': 3, 'items': [
                {'q': "Les globules rouges transportent…", 'options': ["les microbes", "le dioxygène", "les plaquettes"],
                 'correct': 1, 'explain': "Grâce à l'hémoglobine."},
                {'q': "Les globules blancs assurent…", 'options': ["la coagulation", "la défense de l'organisme", "le transport du dioxygène"],
                 'correct': 1, 'explain': "C'est le système immunitaire."},
                {'q': "La coagulation est assurée par…", 'options': ["les globules rouges", "le plasma seul", "les plaquettes"],
                 'correct': 2, 'explain': "Elles forment un caillot avec l'aide du plasma."},
            ]},
            {'type': 'vf', 'points': 3, 'items': [
                {'text': "Les globules blancs peuvent produire des anticorps.", 'truth': True,
                 'explain': "Les anticorps neutralisent les microbes."},
                {'text': "La coagulation empêche une perte de sang excessive.", 'truth': True,
                 'explain': "Le caillot bouche la plaie."},
                {'text': "Les globules rouges défendent l'organisme contre les microbes.", 'truth': False,
                 'explain': "Ce sont les globules blancs qui assurent cette fonction."},
            ]},
            {'type': 'fillblank', 'points': 3, 'items': [
                {'prefix': "Les globules rouges transportent le dioxygène grâce à l'", 'answer': "hémoglobine",
                 'suffix': "."},
                {'prefix': "Les globules blancs produisent des", 'answer': " anticorps",
                 'suffix': " pour combattre les microbes."},
                {'prefix': "En cas de blessure, les plaquettes forment un", 'answer': " caillot", 'suffix': "."},
            ]},
            {'type': 'phrase', 'points': 3, 'items': [
                "Explique comment le corps se défend contre un microbe.",
                "Explique comment le sang arrête un saignement.",
                "Pourquoi les globules rouges sont-ils indispensables aux muscles pendant un effort ?",
            ], 'answers': [
                "Les globules blancs détruisent les microbes ou produisent des anticorps pour les neutraliser.",
                "Les plaquettes s'accumulent au point de la blessure et forment un caillot qui bouche la plaie.",
                "Ils leur apportent le dioxygène nécessaire à la production d'énergie pendant l'effort.",
            ]},
        ],
    },
    # ---------------- Séance 7 ----------------
    {
        'title': "Les groupes sanguins",
        'objectif': "identifier les groupes sanguins du système ABO",
        'support_materiel': "Documents sur les groupes sanguins ; exemples de résultats d'analyse de sang",
        'ras': "Déterminer la compatibilité des groupes sanguins entre eux",
        'fignum': 7,
        'fig_title': "Les quatre groupes sanguins du système ABO",
        'fig_b': "Une équipe médicale mobile organise une collecte de sang dans un village malgache",
        'revision_q': ["Quel est le rôle des globules blancs ?", "Quel est le rôle des plaquettes ?"],
        'revision_ra': ["R.A. : Ils défendent l'organisme contre les microbes.",
                        "R.A. : Elles assurent la coagulation du sang."],
        'mise_situation': ("L'enseignant demande : « Peut-on donner son sang à n'importe qui ? Pourquoi les "
                            "médecins demandent-ils toujours le groupe sanguin avant une transfusion ? »"),
        'mise_ra': "Les élèves supposent que tous les sangs ne sont peut-être pas identiques.",
        'observation': "L'enseignant présente la figure 7 illustrant les quatre groupes sanguins.",
        'observation_support': "Figure 7 — Les quatre groupes sanguins du système ABO.",
        'analyse_q': [
            "Combien de groupes sanguins existe-t-il dans le système ABO ?",
            "Qu'est-ce qui détermine le groupe sanguin d'une personne ?",
            "Quel groupe sanguin est le plus fréquent à Madagascar ?",
            "Pourquoi est-il important de connaître son groupe sanguin ?",
        ],
        'analyse_ra': [
            "R.A. : Quatre groupes : A, B, AB et O.",
            "R.A. : La présence ou l'absence d'antigènes A et/ou B sur les globules rouges.",
            "R.A. : Le groupe O est très répandu, mais toutes les répartitions varient selon les régions.",
            "R.A. : Pour permettre une transfusion sûre en cas de besoin (accident, opération, accouchement).",
        ],
        'synthese': ("Le système ABO classe le sang en quatre groupes : A, B, AB et O, selon la présence "
                     "d'antigènes à la surface des globules rouges. Connaître son groupe sanguin est utile "
                     "pour la santé."),
        'body': [
            ("1. Les antigènes des globules rouges",
             "À la surface des globules rouges se trouvent parfois des molécules appelées antigènes, notées A "
             "et B. Selon leur présence ou leur absence, chaque personne appartient à l'un des quatre groupes "
             "du système ABO : groupe A (antigène A), groupe B (antigène B), groupe AB (les deux antigènes) "
             "ou groupe O (aucun antigène).",
             ["Les antigènes A et B se trouvent à la surface des globules rouges.",
              "Le groupe sanguin dépend de la combinaison d'antigènes présents.",
              "Le groupe O ne possède ni antigène A ni antigène B."]),
            ("2. Le facteur rhésus",
             "En plus du système ABO, il existe le facteur rhésus : une personne est rhésus positif (Rh+) si "
             "elle possède l'antigène rhésus, ou rhésus négatif (Rh−) si elle ne le possède pas. On note "
             "ainsi un groupe sanguin complet, par exemple A+ ou O−.",
             ["Le facteur rhésus s'ajoute au groupe ABO (A, B, AB, O).",
              "On note le groupe sanguin avec un signe + ou −.",
              "Le facteur rhésus est aussi héréditaire, comme le groupe ABO."]),
            ("3. La détermination du groupe sanguin",
             "Le groupe sanguin est héréditaire : il est transmis par les parents et reste le même toute la "
             "vie. Il est déterminé par une simple analyse de sang, réalisée en laboratoire ou lors d'un don "
             "de sang.",
             ["Le groupe sanguin est fixé dès la naissance et ne change jamais.",
              "Il se détermine par un test sanguin simple.",
              "Connaître son groupe est utile en cas d'urgence médicale."]),
            ("4. Le test de groupage sanguin",
             "Déterminer le groupe sanguin d'une personne se fait grâce à un test simple en laboratoire : "
             "une goutte de sang est mise en contact avec des réactifs spécifiques. Si les globules rouges "
             "s'agglutinent avec un réactif donné, cela révèle la présence de l'antigène correspondant, "
             "permettant d'identifier le groupe sanguin exact.",
             ["Le test de groupage utilise des réactifs spécifiques à chaque antigène.",
              "L'agglutination des globules rouges indique la présence d'un antigène.",
              "Ce test est réalisé avant tout don ou toute transfusion de sang."]),
        ],
        'example': ("Lors d'une collecte de sang organisée par le Centre National de Transfusion Sanguine, "
                    "chaque donneur reçoit une carte indiquant son groupe sanguin, par exemple « O+ »."),
        'lesaistu': ("Le système ABO a été découvert en 1901 par le scientifique autrichien Karl Landsteiner, "
                     "ce qui a rendu les transfusions sanguines beaucoup plus sûres."),
        'exercises': [
            {'type': 'qcm', 'points': 3, 'items': [
                {'q': "Le système ABO comprend…", 'options': ["deux groupes", "quatre groupes", "six groupes"],
                 'correct': 1, 'explain': "A, B, AB et O."},
                {'q': "Le groupe O se caractérise par…", 'options': ["l'antigène A", "l'antigène B", "l'absence d'antigène A et B"],
                 'correct': 2, 'explain': "C'est pour cela qu'il est particulier."},
                {'q': "Le groupe sanguin est déterminé…", 'options': ["par l'alimentation", "par hérédité", "par l'âge"],
                 'correct': 1, 'explain': "Il est transmis par les parents et ne change pas."},
            ]},
            {'type': 'vf', 'points': 3, 'items': [
                {'text': "Le groupe AB possède les antigènes A et B.", 'truth': True,
                 'explain': "C'est pour cela qu'il porte le nom AB."},
                {'text': "Le facteur rhésus n'a aucun rapport avec le groupe sanguin.", 'truth': False,
                 'explain': "Il complète l'information du groupe ABO (+ ou −)."},
                {'text': "Le groupe sanguin peut changer au cours de la vie.", 'truth': False,
                 'explain': "Il reste le même toute la vie."},
            ]},
            {'type': 'fillblank', 'points': 3, 'items': [
                {'prefix': "Le système ABO comprend les groupes A, B, AB et", 'answer': " O", 'suffix': "."},
                {'prefix': "Le groupe sanguin dépend de la présence d'", 'answer': "antigènes",
                 'suffix': " sur les globules rouges."},
                {'prefix': "Le groupe sanguin est déterminé par", 'answer': " hérédité", 'suffix': "."},
            ]},
            {'type': 'phrase', 'points': 3, 'items': [
                "Cite les quatre groupes sanguins du système ABO.",
                "Qu'est-ce que le facteur rhésus ?",
                "Pourquoi est-il utile de connaître son groupe sanguin ?",
            ], 'answers': [
                "A, B, AB et O.",
                "C'est un antigène supplémentaire qui définit si une personne est Rh+ ou Rh−.",
                "Pour permettre une transfusion sûre et rapide en cas d'urgence.",
            ]},
        ],
    },
    # ---------------- Séance 8 ----------------
    {
        'title': "La compatibilité sanguine et la transfusion",
        'objectif': "expliquer les règles de compatibilité sanguine et l'importance du don de sang",
        'support_materiel': "Tableau de compatibilité des groupes sanguins ; enquête auprès d'un centre de transfusion",
        'ras': "Déterminer la compatibilité des groupes sanguins entre eux",
        'fignum': 8,
        'fig_title': "La compatibilité entre les groupes sanguins lors d'une transfusion",
        'fig_b': "Des jeunes malgaches font la queue pour donner leur sang lors d'une campagne de don",
        'revision_q': ["Combien de groupes sanguins existe-t-il ?", "Qu'est-ce que le facteur rhésus ?"],
        'revision_ra': ["R.A. : Quatre groupes : A, B, AB et O.",
                        "R.A. : Un antigène qui définit si une personne est Rh+ ou Rh−."],
        'mise_situation': ("L'enseignant demande : « Si une personne a un accident et perd beaucoup de sang, "
                            "peut-on lui donner n'importe quel sang ? Que se passerait-il sinon ? »"),
        'mise_ra': "Les élèves supposent qu'il pourrait y avoir un danger si les sangs ne sont pas compatibles.",
        'observation': "L'enseignant présente la figure 8 sur la compatibilité entre groupes sanguins.",
        'observation_support': "Figure 8 — La compatibilité entre les groupes sanguins lors d'une transfusion.",
        'analyse_q': [
            "Que se passe-t-il si l'on transfuse un sang incompatible ?",
            "Quel groupe est appelé « donneur universel » ?",
            "Quel groupe est appelé « receveur universel » ?",
            "Pourquoi le don de sang est-il un acte de solidarité important ?",
        ],
        'analyse_ra': [
            "R.A. : Les globules rouges s'agglutinent, ce qui peut être très dangereux, voire mortel.",
            "R.A. : Le groupe O, qui peut donner à tous les groupes.",
            "R.A. : Le groupe AB, qui peut recevoir de tous les groupes.",
            "R.A. : Parce qu'il sauve des vies en cas d'accident, d'opération ou d'accouchement difficile.",
        ],
        'synthese': ("La transfusion sanguine doit respecter la compatibilité des groupes sanguins pour éviter "
                     "une agglutination dangereuse. Le groupe O est donneur universel, le groupe AB est "
                     "receveur universel. Le don de sang est un geste de solidarité qui sauve des vies."),
        'body': [
            ("1. Le danger de l'incompatibilité",
             "Si l'on transfuse à une personne un sang d'un groupe incompatible, les anticorps présents dans "
             "son plasma attaquent les globules rouges reçus : ceux-ci s'agglutinent en amas qui peuvent "
             "boucher les vaisseaux sanguins. C'est pourquoi chaque transfusion est précédée d'un test de "
             "compatibilité rigoureux.",
             ["Un sang incompatible provoque l'agglutination des globules rouges.",
              "Cette réaction peut être très grave, voire mortelle.",
              "Un test de compatibilité est obligatoire avant toute transfusion."]),
            ("2. Le donneur universel et le receveur universel",
             "Le groupe O, dépourvu d'antigènes A et B, peut être transfusé à toute personne : on l'appelle "
             "donneur universel. À l'inverse, le groupe AB, qui possède les deux antigènes, peut recevoir le "
             "sang de n'importe quel groupe : c'est le receveur universel.",
             ["Le groupe O est appelé donneur universel.",
              "Le groupe AB est appelé receveur universel.",
              "Chaque groupe ne peut donner qu'à certains groupes compatibles."]),
            ("3. L'importance du don de sang",
             "Le don de sang volontaire et non rémunéré permet de sauver de nombreuses vies : accidentés de "
             "la route, femmes lors d'un accouchement difficile, enfants souffrant d'anémie sévère, malades "
             "opérés. À Madagascar, le Centre National de Transfusion Sanguine organise régulièrement des "
             "collectes dans les écoles, les villages et les centres de santé.",
             ["Le don de sang est un acte gratuit et volontaire.",
              "Il permet de sauver des vies dans de nombreuses situations d'urgence.",
              "Des campagnes de collecte sont organisées régulièrement à Madagascar."]),
            ("4. Organiser une collecte de sang solidaire",
             "Une école ou une communauté peut organiser, en lien avec un centre de santé, une journée de "
             "sensibilisation au don de sang : informer sur les groupes sanguins, expliquer l'importance de "
             "la compatibilité, et encourager les adultes en bonne santé à devenir donneurs volontaires et "
             "réguliers.",
             ["Sensibiliser la communauté augmente le nombre de donneurs volontaires.",
              "Chaque don de sang peut sauver plusieurs vies.",
              "Le don de sang régulier et volontaire renforce la solidarité communautaire."]),
        ],
        'example': ("Une femme qui perd beaucoup de sang lors d'un accouchement difficile peut être sauvée "
                    "grâce à une transfusion de sang compatible, don précieux d'une autre personne."),
        'lesaistu': ("Une seule poche de sang donnée peut, une fois séparée en plasma, globules rouges et "
                     "plaquettes, aider à sauver jusqu'à trois personnes différentes."),
        'exercises': [
            {'type': 'qcm', 'points': 3, 'items': [
                {'q': "Le donneur universel est le groupe…", 'options': ["AB", "O", "A"],
                 'correct': 1, 'explain': "Il n'a ni antigène A ni antigène B."},
                {'q': "Le receveur universel est le groupe…", 'options': ["O", "B", "AB"],
                 'correct': 2, 'explain': "Il possède les deux antigènes, donc tolère tous les dons."},
                {'q': "Une transfusion incompatible provoque…", 'options': ["une amélioration immédiate", "l'agglutination des globules rouges", "aucune réaction"],
                 'correct': 1, 'explain': "C'est une réaction dangereuse."},
            ]},
            {'type': 'vf', 'points': 3, 'items': [
                {'text': "Le groupe O peut donner du sang à tous les groupes.", 'truth': True,
                 'explain': "C'est le donneur universel."},
                {'text': "Le don de sang est un acte rémunéré à Madagascar.", 'truth': False,
                 'explain': "C'est un acte volontaire et gratuit."},
                {'text': "Une seule poche de sang ne peut aider qu'une seule personne.", 'truth': False,
                 'explain': "Elle peut être séparée pour aider plusieurs personnes."},
            ]},
            {'type': 'fillblank', 'points': 3, 'items': [
                {'prefix': "Le groupe O est appelé donneur", 'answer': " universel", 'suffix': "."},
                {'prefix': "Le groupe AB est appelé receveur", 'answer': " universel", 'suffix': "."},
                {'prefix': "Une transfusion incompatible provoque l'", 'answer': "agglutination",
                 'suffix': " des globules rouges."},
            ]},
            {'type': 'phrase', 'points': 3, 'items': [
                "Pourquoi le groupe O est-il appelé donneur universel ?",
                "Pourquoi le groupe AB est-il appelé receveur universel ?",
                "Cite deux situations où une transfusion sanguine peut sauver une vie.",
            ], 'answers': [
                "Parce qu'il ne possède ni antigène A ni antigène B, il est donc compatible avec tous les groupes.",
                "Parce qu'il possède les deux antigènes A et B, il peut recevoir le sang de n'importe quel groupe.",
                "Un accident de la route avec forte perte de sang, ou un accouchement difficile.",
            ]},
        ],
    },
]

REVISION = {
    'title': "Révision — Unité I : Santé et bien-être",
    'fig_title': "Bilan de l'Unité I : Santé et bien-être",
    'notions': [
        ("Appareil respiratoire", "Voies aériennes (nez, pharynx, larynx, trachée, bronches, bronchioles) et poumons ; l'hématose se fait dans les alvéoles."),
        ("Mouvements respiratoires", "Inspiration (le diaphragme se contracte, l'air entre) et expiration (le diaphragme se relâche, l'air sort)."),
        ("Appareil circulatoire", "Le cœur (4 cavités) propulse le sang dans les artères, les veines et les capillaires, selon la petite et la grande circulation."),
        ("Composition du sang", "Plasma (partie liquide) et éléments figurés : globules rouges (transport du O2), globules blancs (défense), plaquettes (coagulation)."),
        ("Groupes sanguins", "Système ABO (A, B, AB, O) et facteur rhésus ; le groupe O est donneur universel, le groupe AB est receveur universel."),
    ],
    'questions': [
        ("Quels organes forment l'appareil respiratoire ?",
         "R.A. : Le nez, le pharynx, le larynx, la trachée, les bronches, les bronchioles et les poumons."),
        ("Qu'est-ce que l'hématose et où se produit-elle ?",
         "R.A. : C'est l'échange gazeux entre l'air et le sang, au niveau des alvéoles pulmonaires."),
        ("Quelle est la différence entre la petite et la grande circulation ?",
         "R.A. : La petite circulation relie le cœur aux poumons ; la grande circulation relie le cœur à tous les organes."),
        ("Quels sont les trois types d'éléments figurés du sang et leur rôle ?",
         "R.A. : Les globules rouges (transport du dioxygène), les globules blancs (défense) et les plaquettes (coagulation)."),
        ("Quels sont les quatre groupes sanguins du système ABO ?",
         "R.A. : A, B, AB et O."),
        ("Pourquoi le don de sang est-il important ?",
         "R.A. : Parce qu'il permet de sauver des vies lors d'accidents, d'opérations ou d'accouchements difficiles."),
    ],
}

EXAM = {
    'title': "Sujet d'examen 4e — Unité I : Santé et bien-être",
    'barème': 15,
    'fig_title': "L'appareil respiratoire et l'appareil circulatoire",
    'exercises': [
        {'type': 'qcm', 'points': 4, 'items': [
            {'q': "L'appareil respiratoire commence par…", 'options': ["les poumons", "le nez ou la bouche", "le cœur"],
             'correct': 1, 'explain': None},
            {'q': "L'hématose se produit dans…", 'options': ["les alvéoles pulmonaires", "le cœur", "les veines"],
             'correct': 0, 'explain': None},
            {'q': "Le cœur possède…", 'options': ["deux cavités", "trois cavités", "quatre cavités"],
             'correct': 2, 'explain': None},
            {'q': "Le donneur universel est le groupe…", 'options': ["AB", "O", "A"],
             'correct': 1, 'explain': None},
        ]},
        {'type': 'vf', 'points': 3, 'items': [
            {'text': "Les artères ramènent le sang vers le cœur.", 'truth': False, 'explain': None},
            {'text': "Les globules blancs défendent l'organisme contre les microbes.", 'truth': True, 'explain': None},
            {'text': "Le groupe AB est receveur universel.", 'truth': True, 'explain': None},
        ]},
        {'type': 'fillblank', 'points': 4, 'items': [
            {'prefix': "L'air passe par le nez, le pharynx, le larynx, la trachée, les bronches puis les",
             'answer': " bronchioles", 'suffix': "."},
            {'prefix': "La petite circulation relie le cœur aux", 'answer': " poumons", 'suffix': "."},
            {'prefix': "Les globules rouges transportent le dioxygène grâce à l'", 'answer': "hémoglobine",
             'suffix': "."},
            {'prefix': "Le système ABO comprend les groupes A, B, AB et", 'answer': " O", 'suffix': "."},
        ]},
        {'type': 'phrase', 'points': 4, 'items': [
            "Décris le trajet de l'air depuis le nez jusqu'aux alvéoles pulmonaires.",
            "Explique la différence entre la petite et la grande circulation.",
            "Cite les trois éléments figurés du sang et un rôle de chacun.",
            "Pourquoi le don de sang est-il un acte de solidarité important à Madagascar ?",
        ], 'answers': [
            "Nez → pharynx → larynx → trachée → bronches → bronchioles → alvéoles pulmonaires.",
            "La petite circulation relie le cœur aux poumons (charge en dioxygène) ; la grande circulation relie le cœur à tous les organes (livraison du dioxygène).",
            "Globules rouges (transport du dioxygène), globules blancs (défense contre les microbes), plaquettes (coagulation du sang).",
            "Parce qu'il permet de sauver des vies lors d'accidents, d'accouchements difficiles ou d'opérations, sans aucune contrepartie.",
        ]},
    ],
}

AUTOEVAL_ROWS = [f"Unité I — {l['title']}" for l in LESSONS]

INDEX_TERMS = [
    ("alvéole pulmonaire", [1, 2]),
    ("antigène", [7, 8]),
    ("artère", [3]),
    ("bronche", [1]),
    ("bronchiole", [1]),
    ("capillaire sanguin", [3, 5]),
    ("cœur", [3, 4]),
    ("coagulation", [5, 6, 8]),
    ("diaphragme", [2]),
    ("donneur universel", [8]),
    ("expiration", [2]),
    ("globule blanc", [5, 6]),
    ("globule rouge", [5, 6]),
    ("grande circulation", [4]),
    ("groupe sanguin", [7, 8]),
    ("hématose", [1, 2]),
    ("hémoglobine", [5, 6]),
    ("inspiration", [2]),
    ("larynx", [1]),
    ("petite circulation", [4]),
    ("plaquette sanguine", [5, 6]),
    ("plasma", [5]),
    ("pouls", [3]),
    ("système ABO", [7]),
    ("transfusion sanguine", [8]),
    ("trachée", [1]),
    ("veine", [3]),
]
