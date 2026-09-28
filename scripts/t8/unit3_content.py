# -*- coding: utf-8 -*-
"""Contenu pédagogique — SVT 4ème — Unité III : Géologie
(les roches magmatiques, sédimentaires et métamorphiques, le cycle des roches, leurs usages)
Auteur : contenu rédigé pour J-Learn (T8).
"""

UNIT3 = {
    'num': 3,
    'theme': "Géologie",
    'toc_title': "UNITÉ III — Géologie",
    'ras_short': "Corréler les propriétés, les modes de formation des roches à leurs utilisations",
    'ras_full': "Corréler les propriétés, les modes de formation des roches à leurs utilisations",
    'valeurs_short': "Responsabilité, culture de l'excellence",
    'valeurs_full': "Responsabilité, culture de l'excellence",
    'exam_title': "Sujet d'examen 4e — Unité III : Géologie",
    'glossaire': [
        ("Roche", "Matériau naturel et solide qui constitue l'écorce terrestre, formé d'un ou plusieurs minéraux."),
        ("Minéral", "Substance naturelle solide, de composition chimique définie, qui constitue les roches."),
        ("Magma", "Roche en fusion, très chaude, présente en profondeur ou émise par un volcan."),
        ("Roche magmatique", "Roche formée par le refroidissement et la solidification du magma."),
        ("Roche sédimentaire", "Roche formée par l'accumulation et la consolidation de sédiments (débris, restes d'organismes)."),
        ("Roche métamorphique", "Roche transformée en profondeur sous l'effet de la chaleur et de la pression, sans fusion complète."),
        ("Cycle des roches", "Transformation continue des roches d'un type à un autre, au cours du temps géologique."),
        ("Érosion", "Usure et destruction progressive des roches sous l'action de l'eau, du vent ou de la température."),
        ("Sédiment", "Débris de roches, de minéraux ou de restes d'êtres vivants, déposé par l'eau, le vent ou la glace."),
        ("Gisement", "Endroit où se trouve naturellement une roche ou un minéral en quantité exploitable."),
        ("Pierre précieuse", "Minéral rare et recherché pour sa beauté, utilisé en bijouterie (saphir, émeraude, rubis)."),
        ("Latérite", "Roche rougeâtre riche en fer et en aluminium, très répandue à Madagascar, utilisée en brique de construction."),
    ],
}

LESSONS = [
    # ---------------- Séance : Géo 1 ----------------
    {
        'title': "Les roches magmatiques : formation et caractéristiques",
        'objectif': "décrire la formation et les caractéristiques des roches magmatiques",
        'fignum': 16,
        'fig_title': "La formation des roches magmatiques à partir du magma",
        'fig_b': "Le massif volcanique de l'Ankaratra, sur les Hautes Terres malgaches",
        'revision_q': ["Cite deux moyens de prévention individuelle des IST.",
                       "Pourquoi faut-il refuser toute discrimination envers les personnes séropositives ?"],
        'revision_ra': ["R.A. : L'abstinence, la fidélité mutuelle ou l'utilisation correcte du préservatif.",
                        "R.A. : Parce que le VIH ne se transmet pas par les gestes du quotidien."],
        'mise_situation': ("L'enseignant montre un morceau de granite et un morceau de basalte. « D'où "
                            "viennent ces roches ? Comment se sont-elles formées ? »"),
        'mise_ra': "Les élèves émettent des hypothèses : peut-être issues d'un volcan, ou de la terre.",
        'observation': "L'enseignant présente la figure 16 sur la formation des roches magmatiques.",
        'observation_support': "Figure 16 — La formation des roches magmatiques à partir du magma.",
        'analyse_q': [
            "Qu'est-ce qu'une roche magmatique ?",
            "Que se passe-t-il quand le magma refroidit lentement en profondeur ?",
            "Que se passe-t-il quand le magma refroidit rapidement en surface ?",
            "Cite des exemples de roches magmatiques présentes à Madagascar.",
        ],
        'analyse_ra': [
            "R.A. : Une roche formée par le refroidissement et la solidification du magma.",
            "R.A. : Les cristaux ont le temps de bien se former : on obtient une roche à gros grains, comme le granite.",
            "R.A. : Les cristaux n'ont pas le temps de se former : on obtient une roche à grains fins, comme le basalte.",
            "R.A. : Le granite des Hautes Terres et le basalte des massifs volcaniques comme l'Ankaratra ou l'Itasy.",
        ],
        'synthese': ("Une roche magmatique se forme par le refroidissement du magma. Un refroidissement lent "
                     "en profondeur donne des roches à gros grains comme le granite ; un refroidissement "
                     "rapide en surface donne des roches à grains fins comme le basalte."),
        'body': [
            ("1. Qu'est-ce qu'une roche magmatique ?",
             "Une roche magmatique se forme lorsque le magma, roche en fusion très chaude provenant des "
             "profondeurs de la Terre, refroidit et se solidifie. Selon l'endroit et la vitesse de "
             "refroidissement, on distingue deux grandes familles de roches magmatiques.",
             ["Le magma est une roche fondue, très chaude, présente en profondeur.",
              "Une roche magmatique naît du refroidissement du magma.",
              "La vitesse de refroidissement influence l'aspect de la roche obtenue."]),
            ("2. Les roches magmatiques plutoniques",
             "Quand le magma refroidit très lentement, en profondeur, à l'intérieur de la croûte terrestre, "
             "les cristaux minéraux ont le temps de bien se développer : on obtient une roche à gros grains "
             "visibles à l'œil nu, comme le granite. Ce type de roche est appelé roche plutonique.",
             ["Le refroidissement lent en profondeur forme des roches plutoniques.",
              "Le granite est un exemple typique de roche plutonique.",
              "Ses cristaux sont visibles à l'œil nu grâce au refroidissement lent."]),
            ("3. Les roches magmatiques volcaniques",
             "Quand le magma arrive en surface, par exemple lors d'une éruption volcanique, il refroidit très "
             "rapidement au contact de l'air : les cristaux n'ont pas le temps de se former, ce qui donne une "
             "roche à grains très fins, parfois même vitreuse, comme le basalte. Ce type de roche est appelé "
             "roche volcanique.",
             ["Le refroidissement rapide en surface forme des roches volcaniques.",
              "Le basalte est un exemple typique de roche volcanique.",
              "Madagascar possède plusieurs massifs volcaniques, comme l'Ankaratra et l'Itasy."]),
            ("4. Les roches magmatiques de Madagascar",
             "Madagascar possède plusieurs massifs de roches magmatiques bien connus : le granite affleure "
             "largement sur les Hautes Terres, tandis que les massifs volcaniques de l'Ankaratra et de "
             "l'Itasy, aujourd'hui éteints, témoignent d'une activité volcanique ancienne qui a façonné une "
             "partie du relief central de l'île.",
             ["Le granite est très répandu sur les Hautes Terres malgaches.",
              "L'Ankaratra et l'Itasy sont d'anciens massifs volcaniques.",
              "Cette activité volcanique passée a fortement influencé le relief central de Madagascar."]),
        ],
        'example': ("Le granite des Hautes Terres malgaches, utilisé pour les tombeaux et les monuments, "
                    "présente de gros cristaux visibles, preuve de son refroidissement lent en profondeur."),
        'lesaistu': ("Madagascar possède un socle cristallin très ancien, formé il y a plus de 500 millions "
                     "d'années, en grande partie composé de roches magmatiques et métamorphiques."),
        'exercises': [
            {'type': 'qcm', 'points': 3, 'items': [
                {'q': "Une roche magmatique se forme à partir…", 'options': ["de sédiments", "du magma", "de la pression seule"],
                 'correct': 1, 'explain': "C'est le refroidissement du magma qui forme la roche."},
                {'q': "Le granite est une roche…", 'options': ["plutonique", "volcanique", "sédimentaire"],
                 'correct': 0, 'explain': "Il se forme par refroidissement lent en profondeur."},
                {'q': "Le basalte a des grains fins parce que…", 'options': ["il refroidit lentement", "il refroidit rapidement en surface", "il ne contient pas de minéraux"],
                 'correct': 1, 'explain': "Le refroidissement rapide empêche les cristaux de bien se former."},
            ]},
            {'type': 'vf', 'points': 3, 'items': [
                {'text': "Le magma est une roche en fusion très chaude.", 'truth': True,
                 'explain': "Il provient des profondeurs de la Terre."},
                {'text': "Une roche plutonique se forme en surface.", 'truth': False,
                 'explain': "Elle se forme en profondeur, par refroidissement lent."},
                {'text': "Madagascar possède des massifs volcaniques comme l'Ankaratra.", 'truth': True,
                 'explain': "Ce sont d'anciens massifs volcaniques des Hautes Terres."},
            ]},
            {'type': 'fillblank', 'points': 3, 'items': [
                {'prefix': "Une roche magmatique se forme par le refroidissement et la solidification du",
                 'answer': " magma", 'suffix': "."},
                {'prefix': "Le refroidissement lent en profondeur donne des roches à gros",
                 'answer': " grains", 'suffix': ", comme le granite."},
                {'prefix': "Le refroidissement rapide en surface donne des roches à grains",
                 'answer': " fins", 'suffix': ", comme le basalte."},
            ]},
            {'type': 'assoc', 'points': 3,
             'colA': ["Granite", "Basalte", "Magma"],
             'colB': ["Roche en fusion", "Roche volcanique à grains fins", "Roche plutonique à gros grains"],
             'correct': {1: 3, 2: 2, 3: 1}},
        ],
    },
    # ---------------- Séance : Géo 2 ----------------
    {
        'title': "Les roches sédimentaires : formation et caractéristiques",
        'objectif': "décrire la formation et les caractéristiques des roches sédimentaires",
        'fignum': 17,
        'fig_title': "La formation des roches sédimentaires par accumulation de sédiments",
        'fig_b': "Des couches de grès visibles dans un paysage érodé des Hautes Terres malgaches",
        'revision_q': ["Qu'est-ce qu'une roche magmatique ?", "Cite un exemple de roche volcanique."],
        'revision_ra': ["R.A. : Une roche formée par le refroidissement et la solidification du magma.",
                        "R.A. : Le basalte."],
        'mise_situation': ("L'enseignant montre une roche formée de couches superposées (un grès ou un "
                            "calcaire). « Pourquoi cette roche présente-t-elle des couches ? »"),
        'mise_ra': "Les élèves proposent : peut-être des dépôts successifs au cours du temps.",
        'observation': "L'enseignant présente la figure 17 sur la formation des roches sédimentaires.",
        'observation_support': "Figure 17 — La formation des roches sédimentaires par accumulation de sédiments.",
        'analyse_q': [
            "Qu'est-ce qu'un sédiment ?",
            "Comment se forme une roche sédimentaire ?",
            "Pourquoi les roches sédimentaires présentent-elles souvent des couches ?",
            "Cite des exemples de roches sédimentaires.",
        ],
        'analyse_ra': [
            "R.A. : Un débris de roche, de minéral ou de reste d'être vivant, déposé par l'eau, le vent ou la glace.",
            "R.A. : Par accumulation de sédiments qui se tassent et se cimentent progressivement au cours du temps.",
            "R.A. : Parce que les sédiments se déposent par couches successives, année après année.",
            "R.A. : Le grès, le calcaire, l'argile."
        ],
        'synthese': ("Une roche sédimentaire se forme par l'accumulation, le tassement et la cimentation de "
                     "sédiments (débris de roches, sables, restes d'organismes) déposés en couches "
                     "successives, le plus souvent dans l'eau."),
        'body': [
            ("1. Les sédiments, matière première des roches sédimentaires",
             "Un sédiment est un débris de roche, de minéral ou de reste d'être vivant, arraché par "
             "l'érosion puis transporté par l'eau, le vent ou la glace, avant de se déposer dans un lieu "
             "calme comme le fond d'un lac, d'une rivière ou de la mer.",
             ["Les sédiments proviennent de l'érosion des roches existantes.",
              "L'eau et le vent transportent les sédiments sur de longues distances.",
              "Les sédiments se déposent surtout dans des zones calmes comme les fonds marins."]),
            ("2. La formation par accumulation et cimentation",
             "Au fil du temps, les couches de sédiments s'accumulent les unes sur les autres. Sous le poids "
             "des couches supérieures, les sédiments se tassent et l'eau qui les imprègne dépose des "
             "substances qui cimentent les grains entre eux : c'est ainsi que se forme une roche solide, "
             "organisée en couches appelées strates.",
             ["Le tassement et la cimentation transforment les sédiments meubles en roche solide.",
              "Les strates témoignent des dépôts successifs au cours du temps.",
              "Ce processus est très lent, il peut durer des milliers ou des millions d'années."]),
            ("3. Des exemples de roches sédimentaires",
             "Le grès est formé de grains de sable cimentés ; le calcaire provient souvent de restes "
             "d'organismes marins (coquillages, coraux) ; l'argile résulte de très fines particules "
             "déposées en eau calme. Ces roches sont fréquentes dans certaines régions côtières et "
             "sédimentaires de Madagascar, comme le bassin de Morondava.",
             ["Le grès est composé de grains de sable cimentés.",
              "Le calcaire peut contenir des fossiles d'organismes marins.",
              "Le bassin sédimentaire de Morondava, à Madagascar, contient de nombreuses roches sédimentaires."]),
            ("4. Les fossiles, témoins du passé",
             "Certaines roches sédimentaires, comme le calcaire, contiennent des fossiles : des restes ou des "
             "empreintes d'organismes qui vivaient il y a très longtemps. Leur étude permet de reconstituer "
             "les milieux anciens, par exemple de prouver qu'une région aujourd'hui terrestre était autrefois "
             "recouverte par la mer.",
             ["Un fossile est un reste ou une trace d'organisme conservé dans une roche.",
              "Les fossiles renseignent sur les milieux et les climats du passé.",
              "Trouver un fossile marin loin de la mer prouve un ancien recouvrement par les eaux."]),
        ],
        'example': ("Dans certaines carrières de calcaire à Madagascar, on peut observer des fossiles de "
                    "coquillages, preuve que cette roche s'est formée au fond d'une ancienne mer."),
        'lesaistu': ("Les strates des roches sédimentaires permettent aux géologues de reconstituer l'histoire "
                     "de la Terre, un peu comme les pages d'un livre empilées les unes sur les autres."),
        'exercises': [
            {'type': 'qcm', 'points': 3, 'items': [
                {'q': "Un sédiment est…", 'options': ["un débris déposé par l'eau, le vent ou la glace", "un magma refroidi", "un minéral rare"],
                 'correct': 0, 'explain': "C'est la matière première des roches sédimentaires."},
                {'q': "Le grès est composé de…", 'options': ["grains de sable cimentés", "magma refroidi", "cristaux de granite"],
                 'correct': 0, 'explain': "C'est une roche sédimentaire typique."},
                {'q': "Les strates correspondent…", 'options': ["aux cristaux du granite", "aux couches successives de sédiments déposés", "à la lave d'un volcan"],
                 'correct': 1, 'explain': "Elles témoignent des dépôts successifs dans le temps."},
            ]},
            {'type': 'vf', 'points': 3, 'items': [
                {'text': "Les roches sédimentaires se forment par refroidissement du magma.", 'truth': False,
                 'explain': "Elles se forment par accumulation de sédiments, pas par refroidissement du magma."},
                {'text': "Le calcaire peut contenir des fossiles marins.", 'truth': True,
                 'explain': "Il provient souvent de restes d'organismes marins."},
                {'text': "La formation d'une roche sédimentaire peut durer très longtemps.", 'truth': True,
                 'explain': "Ce processus peut durer des milliers, voire des millions d'années."},
            ]},
            {'type': 'fillblank', 'points': 3, 'items': [
                {'prefix': "Un sédiment est un débris transporté par l'eau, le vent ou la",
                 'answer': " glace", 'suffix': "."},
                {'prefix': "Les couches successives de sédiments s'appellent des",
                 'answer': " strates", 'suffix': "."},
                {'prefix': "Le grès est formé de grains de", 'answer': " sable", 'suffix': " cimentés."},
            ]},
            {'type': 'phrase', 'points': 3, 'items': [
                "Explique comment se forme une roche sédimentaire.",
                "Pourquoi les roches sédimentaires présentent-elles des strates ?",
                "Cite deux exemples de roches sédimentaires.",
            ], 'answers': [
                "Par accumulation, tassement et cimentation de sédiments déposés en couches successives.",
                "Parce que les sédiments se déposent année après année, en couches superposées.",
                "Le grès et le calcaire (ou l'argile).",
            ]},
        ],
    },
    # ---------------- Séance : Géo 3 ----------------
    {
        'title': "Les roches métamorphiques : formation et caractéristiques",
        'objectif': "décrire la formation et les caractéristiques des roches métamorphiques",
        'fignum': 18,
        'fig_title': "La formation des roches métamorphiques sous l'effet de la chaleur et de la pression",
        'fig_b': "Un artisan malgache taille un bloc de marbre destiné à la sculpture",
        'revision_q': ["Qu'est-ce qu'un sédiment ?", "Cite un exemple de roche sédimentaire."],
        'revision_ra': ["R.A. : Un débris de roche, de minéral ou de reste d'être vivant, déposé par l'eau, le vent ou la glace.",
                        "R.A. : Le grès ou le calcaire."],
        'mise_situation': ("L'enseignant montre un morceau de marbre et un morceau de calcaire. « Ces deux "
                            "roches se ressemblent-elles ? Pourtant, le marbre provient du calcaire : comment "
                            "est-ce possible ? »"),
        'mise_ra': "Les élèves supposent qu'une transformation a dû se produire.",
        'observation': "L'enseignant présente la figure 18 sur la formation des roches métamorphiques.",
        'observation_support': "Figure 18 — La formation des roches métamorphiques sous l'effet de la chaleur et de la pression.",
        'analyse_q': [
            "Qu'est-ce qu'une roche métamorphique ?",
            "Quelles conditions transforment une roche en roche métamorphique ?",
            "Le calcaire se transforme en quelle roche métamorphique ?",
            "Cite d'autres exemples de roches métamorphiques.",
        ],
        'analyse_ra': [
            "R.A. : Une roche transformée en profondeur par la chaleur et la pression, sans fusion complète.",
            "R.A. : Une forte chaleur et une forte pression, en profondeur, sans que la roche fonde complètement.",
            "R.A. : Le marbre.",
            "R.A. : Le gneiss (à partir du granite) et le quartzite (à partir du grès)."
        ],
        'synthese': ("Une roche métamorphique se forme quand une roche déjà existante est transformée en "
                     "profondeur par une forte chaleur et une forte pression, sans fondre complètement. Le "
                     "calcaire devient du marbre, le granite devient du gneiss."),
        'body': [
            ("1. Le métamorphisme",
             "Le métamorphisme est la transformation d'une roche déjà existante (magmatique, sédimentaire ou "
             "même déjà métamorphique) sous l'effet d'une forte chaleur et d'une forte pression, en "
             "profondeur dans la croûte terrestre. La roche ne fond pas complètement, mais sa structure "
             "interne et l'organisation de ses minéraux se transforment.",
             ["Le métamorphisme transforme une roche sans la faire fondre complètement.",
              "La chaleur et la pression augmentent avec la profondeur.",
              "Les minéraux de la roche se réorganisent pendant le métamorphisme."]),
            ("2. Des exemples de transformation",
             "Le calcaire, soumis à la chaleur et à la pression, se transforme en marbre, une roche plus dure "
             "et compacte, souvent utilisée en sculpture. Le granite se transforme en gneiss, roche qui "
             "présente des bandes minérales bien visibles. Le grès se transforme en quartzite, une roche très "
             "dure et résistante.",
             ["Le calcaire devient du marbre sous l'effet du métamorphisme.",
              "Le granite devient du gneiss, reconnaissable à ses bandes minérales.",
              "Le grès devient du quartzite, une roche très résistante."]),
            ("3. Le socle géologique de Madagascar",
             "Une grande partie du sol malgache repose sur un socle cristallin très ancien, riche en gneiss "
             "et en migmatites (roches métamorphiques), formé il y a des centaines de millions d'années. Ce "
             "socle abrite aussi de nombreux gisements de pierres précieuses et de minéraux.",
             ["Le socle cristallin malgache est en grande partie métamorphique.",
              "Le gneiss est une roche métamorphique très répandue à Madagascar.",
              "Ce socle est riche en gisements de pierres précieuses et de minéraux."]),
            ("4. Reconnaître une roche métamorphique",
             "Une roche métamorphique se reconnaît souvent à l'organisation particulière de ses minéraux : "
             "certaines présentent des bandes ou des lits bien visibles (comme le gneiss), tandis que d'autres, "
             "comme le marbre, ont une texture cristalline compacte et homogène, différente de la roche "
             "sédimentaire d'origine.",
             ["Le gneiss présente des bandes minérales caractéristiques du métamorphisme.",
              "Le marbre a une texture cristalline compacte, différente du calcaire d'origine.",
              "L'observation de la texture aide à distinguer une roche métamorphique des deux autres familles."]),
        ],
        'example': ("Les carrières de marbre de certaines régions de Madagascar fournissent une roche "
                    "recherchée pour la sculpture, la décoration et la fabrication d'objets d'art."),
        'lesaistu': ("Le mot « métamorphisme » vient du grec et signifie « changement de forme » : il décrit "
                     "bien la transformation profonde que subit la roche."),
        'exercises': [
            {'type': 'qcm', 'points': 3, 'items': [
                {'q': "Le métamorphisme est provoqué par…", 'options': ["la chaleur et la pression", "l'érosion seule", "le vent"],
                 'correct': 0, 'explain': "Ces deux facteurs transforment la roche en profondeur."},
                {'q': "Le calcaire se transforme en…", 'options': ["granite", "marbre", "basalte"],
                 'correct': 1, 'explain': "C'est un exemple classique de métamorphisme."},
                {'q': "Le gneiss provient de la transformation…", 'options': ["du granite", "du calcaire", "de l'argile"],
                 'correct': 0, 'explain': "Le granite se transforme en gneiss sous l'effet du métamorphisme."},
            ]},
            {'type': 'vf', 'points': 3, 'items': [
                {'text': "Pendant le métamorphisme, la roche fond complètement.", 'truth': False,
                 'explain': "Elle ne fond pas complètement, sinon ce serait une roche magmatique."},
                {'text': "Le marbre provient de la transformation du calcaire.", 'truth': True,
                 'explain': "C'est un exemple typique de roche métamorphique."},
                {'text': "Le socle géologique de Madagascar est en grande partie métamorphique.", 'truth': True,
                 'explain': "Il est riche en gneiss et en migmatites."},
            ]},
            {'type': 'fillblank', 'points': 3, 'items': [
                {'prefix': "Le métamorphisme transforme une roche sous l'effet de la chaleur et de la",
                 'answer': " pression", 'suffix': "."},
                {'prefix': "Le calcaire se transforme en", 'answer': " marbre", 'suffix': " par métamorphisme."},
                {'prefix': "Le granite se transforme en", 'answer': " gneiss", 'suffix': " par métamorphisme."},
            ]},
            {'type': 'assoc', 'points': 3,
             'colA': ["Calcaire", "Granite", "Grès"],
             'colB': ["Quartzite", "Marbre", "Gneiss"],
             'correct': {1: 2, 2: 3, 3: 1}},
        ],
    },
    # ---------------- Séance : Géo 4 ----------------
    {
        'title': "Le cycle des roches",
        'objectif': "expliquer le cycle des roches et les transformations entre les trois familles de roches",
        'fignum': 19,
        'fig_title': "Le cycle des roches : magmatiques, sédimentaires et métamorphiques",
        'fig_b': "Un paysage érodé des Hautes Terres, où affleurent différentes roches",
        'revision_q': ["Qu'est-ce que le métamorphisme ?", "En quoi se transforme le calcaire par métamorphisme ?"],
        'revision_ra': ["R.A. : La transformation d'une roche sous l'effet de la chaleur et de la pression, sans fusion complète.",
                        "R.A. : En marbre."],
        'mise_situation': ("L'enseignant demande : « Les trois types de roches (magmatiques, sédimentaires, "
                            "métamorphiques) restent-ils toujours les mêmes, ou peuvent-ils se transformer les "
                            "uns en les autres ? »"),
        'mise_ra': "Les élèves supposent que des transformations sont possibles au fil du temps.",
        'observation': "L'enseignant présente la figure 19 sur le cycle des roches.",
        'observation_support': "Figure 19 — Le cycle des roches : magmatiques, sédimentaires et métamorphiques.",
        'analyse_q': [
            "Que devient une roche exposée à l'érosion ?",
            "Que deviennent les sédiments accumulés au fil du temps ?",
            "Que peut devenir une roche soumise à une forte chaleur et pression ?",
            "Que peut devenir une roche si elle fond complètement ?",
        ],
        'analyse_ra': [
            "R.A. : Elle se fragmente en sédiments, transportés puis déposés ailleurs.",
            "R.A. : Ils se tassent et se cimentent pour former une roche sédimentaire.",
            "R.A. : Elle se transforme en roche métamorphique.",
            "R.A. : Elle redevient du magma, qui pourra ensuite refroidir pour former une nouvelle roche magmatique.",
        ],
        'synthese': ("Le cycle des roches montre que les roches magmatiques, sédimentaires et métamorphiques "
                     "peuvent se transformer les unes en les autres au cours du temps géologique, sous "
                     "l'effet de l'érosion, de l'accumulation, de la chaleur, de la pression ou de la fusion."),
        'body': [
            ("1. De la roche à l'érosion",
             "Toute roche exposée à l'air libre est soumise à l'érosion : le vent, l'eau, la pluie et les "
             "variations de température la fragmentent peu à peu en petits débris, les sédiments, qui sont "
             "ensuite transportés ailleurs par l'eau ou le vent.",
             ["L'érosion fragmente les roches exposées en surface.",
              "L'eau et le vent transportent ensuite les sédiments produits.",
              "Ce processus concerne les trois familles de roches."]),
            ("2. Des sédiments à la roche sédimentaire, puis au métamorphisme",
             "Les sédiments transportés finissent par se déposer, s'accumuler et se cimenter pour former une "
             "roche sédimentaire. Si cette roche est ensuite enfouie profondément dans la croûte terrestre, "
             "elle peut être soumise à une forte chaleur et une forte pression et se transformer en roche "
             "métamorphique.",
             ["L'accumulation de sédiments forme une roche sédimentaire.",
              "L'enfouissement profond expose la roche à la chaleur et à la pression.",
              "Une roche sédimentaire peut ainsi devenir une roche métamorphique."]),
            ("3. Le retour au magma et un cycle sans fin",
             "Si une roche, quelle que soit son origine, est enfouie encore plus profondément et atteint des "
             "températures très élevées, elle peut fondre complètement et redevenir du magma. Ce magma, en "
             "refroidissant, formera une nouvelle roche magmatique : le cycle des roches recommence, sans "
             "jamais s'arrêter, sur des millions d'années.",
             ["Une fusion complète transforme n'importe quelle roche en magma.",
              "Le refroidissement du magma referme le cycle en formant une nouvelle roche magmatique.",
              "Le cycle des roches se déroule sur des échelles de temps très longues."]),
            ("4. L'échelle des temps géologiques",
             "Les transformations du cycle des roches se mesurent en millions, voire en centaines de millions "
             "d'années, une échelle de temps appelée temps géologique, très différente de celle de la vie "
             "humaine. Cette lenteur explique pourquoi les paysages rocheux semblent immobiles à l'échelle "
             "d'une vie, alors qu'ils se transforment sans cesse.",
             ["Le temps géologique se compte en millions d'années.",
              "Les transformations des roches sont invisibles à l'échelle d'une vie humaine.",
              "Le socle ancien de Madagascar s'est formé il y a plus de 500 millions d'années."]),
        ],
        'example': ("Un caillou de granite, usé par une rivière pendant des milliers d'années, peut finir par "
                    "se transformer en minuscules grains de sable, matière première d'une future roche "
                    "sédimentaire."),
        'lesaistu': ("Le cycle complet d'une roche, de sa formation à sa transformation en un autre type de "
                     "roche, peut prendre plusieurs millions d'années."),
        'exercises': [
            {'type': 'qcm', 'points': 3, 'items': [
                {'q': "L'érosion transforme une roche en…", 'options': ["magma", "sédiments", "roche métamorphique directement"],
                 'correct': 1, 'explain': "L'érosion fragmente la roche en petits débris."},
                {'q': "Une roche métamorphique peut redevenir…", 'options': ["magma, si elle fond complètement", "un sédiment directement", "de l'eau"],
                 'correct': 0, 'explain': "Une fusion complète transforme toute roche en magma."},
                {'q': "Le cycle des roches se déroule…", 'options': ["en quelques jours", "sur des millions d'années", "il n'existe pas"],
                 'correct': 1, 'explain': "C'est un processus géologique très lent."},
            ]},
            {'type': 'vf', 'points': 3, 'items': [
                {'text': "Les roches peuvent se transformer les unes en les autres au cours du temps.", 'truth': True,
                 'explain': "C'est le principe du cycle des roches."},
                {'text': "Une roche sédimentaire ne peut jamais devenir une roche métamorphique.", 'truth': False,
                 'explain': "Elle le peut, sous l'effet de la chaleur et de la pression en profondeur."},
                {'text': "Le cycle des roches est un processus rapide, en quelques années.", 'truth': False,
                 'explain': "C'est un processus très lent, sur des millions d'années."},
            ]},
            {'type': 'fillblank', 'points': 3, 'items': [
                {'prefix': "L'érosion fragmente une roche en", 'answer': " sédiments", 'suffix': "."},
                {'prefix': "Une roche qui fond complètement redevient du", 'answer': " magma", 'suffix': "."},
                {'prefix': "Le cycle des roches se déroule sur des millions d'", 'answer': "années", 'suffix': "."},
            ]},
            {'type': 'phrase', 'points': 3, 'items': [
                "Décris les grandes étapes du cycle des roches.",
                "Comment une roche sédimentaire peut-elle devenir une roche métamorphique ?",
                "Que devient une roche qui fond complètement ?",
            ], 'answers': [
                "Érosion → sédiments → roche sédimentaire → (chaleur/pression) roche métamorphique → (fusion) magma → nouvelle roche magmatique.",
                "En étant enfouie profondément et soumise à une forte chaleur et une forte pression.",
                "Elle redevient du magma, qui refroidira ensuite pour former une nouvelle roche magmatique.",
            ]},
        ],
    },
    # ---------------- Séance : Géo 5 ----------------
    {
        'title': "Les usages des roches dans la construction et l'artisanat",
        'objectif': "identifier les usages des roches dans la construction et l'artisanat à Madagascar",
        'fignum': 20,
        'fig_title': "Les usages des roches dans la construction et l'artisanat malgache",
        'fig_b': "Des maçons malgaches construisent un mur avec des briques de latérite",
        'revision_q': ["Décris les grandes étapes du cycle des roches.",
                       "Que devient une roche qui fond complètement ?"],
        'revision_ra': ["R.A. : Érosion → sédiments → roche sédimentaire → roche métamorphique → magma → nouvelle roche magmatique.",
                        "R.A. : Elle redevient du magma."],
        'mise_situation': ("L'enseignant demande : « Quelles roches voyez-vous utilisées dans les maisons, "
                            "les routes ou les objets d'artisanat de votre région ? »"),
        'mise_ra': "Les élèves citent la latérite, le granite, la pierre des routes.",
        'observation': "L'enseignant présente la figure 20 sur les usages des roches dans la construction et l'artisanat.",
        'observation_support': "Figure 20 — Les usages des roches dans la construction et l'artisanat malgache.",
        'analyse_q': [
            "Quelle roche est très utilisée pour fabriquer des briques à Madagascar ?",
            "Pourquoi le granite est-il utilisé dans la construction ?",
            "Quelles roches sont utilisées en artisanat et bijouterie à Madagascar ?",
            "Pourquoi est-il important d'exploiter les roches de façon responsable ?",
        ],
        'analyse_ra': [
            "R.A. : La latérite, roche rougeâtre riche en fer.",
            "R.A. : Parce qu'il est dur, résistant et durable, utile pour les fondations, les monuments et les tombeaux.",
            "R.A. : Les pierres précieuses (saphir, améthyste), le marbre, le quartz, le mica.",
            "R.A. : Pour préserver l'environnement, éviter l'épuisement des ressources et protéger les paysages.",
        ],
        'synthese': ("Les roches sont largement utilisées à Madagascar : la latérite pour les briques, le "
                     "granite pour les fondations et monuments, et diverses roches et pierres précieuses "
                     "pour l'artisanat et la bijouterie. Une exploitation responsable est nécessaire."),
        'body': [
            ("1. La latérite, roche de construction",
             "La latérite est une roche rougeâtre, riche en fer et en aluminium, très répandue à Madagascar. "
             "Une fois découpée en blocs et séchée, elle est largement utilisée pour fabriquer des briques de "
             "construction, notamment dans les régions rurales, car elle est disponible localement et peu "
             "coûteuse.",
             ["La latérite est une roche rouge, riche en fer, très répandue à Madagascar.",
              "Elle est découpée en blocs pour fabriquer des briques.",
              "Son usage est très répandu car elle est disponible localement."]),
            ("2. Le granite et les autres roches de construction",
             "Le granite, très dur et résistant à l'érosion, est utilisé pour les fondations de bâtiments, "
             "les monuments, les tombeaux et les pavages de routes. D'autres roches, comme le gneiss ou le "
             "quartzite, servent également à la construction dans certaines régions.",
             ["Le granite est apprécié pour sa dureté et sa résistance.",
              "Il est utilisé pour les fondations, les monuments et les tombeaux.",
              "D'autres roches métamorphiques servent aussi à la construction locale."]),
            ("3. Les roches et pierres précieuses dans l'artisanat",
             "Madagascar est réputée pour la richesse de son sous-sol en pierres précieuses et semi-précieuses "
             "(saphir, émeraude, améthyste, labradorite) et en minéraux (mica, graphite, quartz), utilisés en "
             "bijouterie et en artisanat. Ce secteur emploie de nombreux artisans et constitue une ressource "
             "économique importante pour le pays.",
             ["Madagascar possède des gisements réputés de pierres précieuses.",
              "Ces pierres sont travaillées par des artisans locaux pour la bijouterie.",
              "Ce secteur représente une ressource économique importante pour le pays."]),
            ("4. Les carrières et l'exploitation des roches",
             "L'extraction des roches se fait dans des carrières, à ciel ouvert ou en profondeur. Une "
             "exploitation mal contrôlée peut endommager les paysages et l'environnement ; c'est pourquoi une "
             "gestion responsable, avec réhabilitation des sites après exploitation, est nécessaire.",
             ["Une carrière est un site d'extraction de roches à la surface ou en profondeur.",
              "Une exploitation non contrôlée peut nuire aux paysages et aux sols environnants.",
              "La réhabilitation des carrières après exploitation protège l'environnement."]),
        ],
        'example': ("Dans de nombreux villages malgaches, les maisons sont construites en briques de latérite "
                    "séchées au soleil, une technique traditionnelle utilisant une ressource locale abondante."),
        'lesaistu': ("Madagascar est l'un des principaux producteurs mondiaux de saphirs, notamment extraits "
                     "de la région d'Ilakaka."),
        'exercises': [
            {'type': 'qcm', 'points': 3, 'items': [
                {'q': "La latérite est surtout utilisée pour…", 'options': ["fabriquer des briques", "fabriquer des bijoux", "produire de l'énergie"],
                 'correct': 0, 'explain': "C'est un matériau de construction courant à Madagascar."},
                {'q': "Le granite est apprécié en construction pour sa…", 'options': ["légèreté", "dureté et résistance", "couleur rouge"],
                 'correct': 1, 'explain': "Il résiste bien à l'érosion et au temps."},
                {'q': "Madagascar est réputée pour ses gisements de…", 'options': ["pétrole", "saphirs", "charbon uniquement"],
                 'correct': 1, 'explain': "Notamment dans la région d'Ilakaka."},
            ]},
            {'type': 'vf', 'points': 3, 'items': [
                {'text': "La latérite est une roche riche en fer.", 'truth': True,
                 'explain': "C'est ce qui lui donne sa couleur rougeâtre."},
                {'text': "Le granite est trop fragile pour la construction.", 'truth': False,
                 'explain': "Il est au contraire très dur et résistant."},
                {'text': "L'artisanat des pierres précieuses est une ressource économique pour Madagascar.", 'truth': True,
                 'explain': "Il emploie de nombreux artisans locaux."},
            ]},
            {'type': 'fillblank', 'points': 3, 'items': [
                {'prefix': "La latérite est utilisée pour fabriquer des", 'answer': " briques", 'suffix': "."},
                {'prefix': "Le granite est utilisé pour les fondations et les", 'answer': " monuments",
                 'suffix': "."},
                {'prefix': "Madagascar est réputée pour ses gisements de pierres", 'answer': " précieuses",
                 'suffix': "."},
            ]},
            {'type': 'phrase', 'points': 3, 'items': [
                "Pourquoi la latérite est-elle très utilisée en construction à Madagascar ?",
                "Cite deux usages du granite.",
                "Pourquoi l'artisanat des pierres précieuses est-il important pour Madagascar ?",
            ], 'answers': [
                "Parce qu'elle est disponible localement, peu coûteuse et facile à transformer en briques.",
                "Les fondations de bâtiments et les monuments (ou les tombeaux, les pavages).",
                "Parce qu'il emploie de nombreux artisans et constitue une ressource économique importante.",
            ]},
        ],
    },
    # ---------------- Séance : Géo 6 ----------------
    {
        'title': "Les usages thérapeutiques et énergétiques des roches",
        'objectif': "identifier les usages thérapeutiques et énergétiques des roches et minéraux",
        'fignum': 21,
        'fig_title': "Les usages thérapeutiques et énergétiques des roches et minéraux",
        'fig_b': "Des visiteurs se baignent dans une source thermale près d'Antsirabe",
        'revision_q': ["Pourquoi la latérite est-elle très utilisée en construction à Madagascar ?",
                       "Cite deux usages du granite."],
        'revision_ra': ["R.A. : Parce qu'elle est disponible localement, peu coûteuse et facile à transformer en briques.",
                        "R.A. : Les fondations de bâtiments et les monuments."],
        'mise_situation': ("L'enseignant demande : « Les roches ne servent-elles qu'à construire ? "
                            "Connaissez-vous d'autres usages, par exemple pour la santé ou l'énergie ? »"),
        'mise_ra': "Les élèves citent parfois les sources thermales ou le charbon.",
        'observation': "L'enseignant présente la figure 21 sur les usages thérapeutiques et énergétiques des roches.",
        'observation_support': "Figure 21 — Les usages thérapeutiques et énergétiques des roches et minéraux.",
        'analyse_q': [
            "Qu'est-ce qu'une source thermale ?",
            "Pourquoi les eaux thermales sont-elles utilisées pour la santé ?",
            "Quelle roche est utilisée comme combustible énergétique à Madagascar ?",
            "Pourquoi faut-il utiliser ces ressources de façon durable ?",
        ],
        'analyse_ra': [
            "R.A. : Une source d'eau chaude naturelle, réchauffée par la chaleur interne de la Terre en profondeur.",
            "R.A. : Elles contiennent des minéraux dissous qui peuvent soulager certains problèmes de peau ou d'articulations.",
            "R.A. : Le charbon, notamment dans le bassin houiller de la Sakoa.",
            "R.A. : Pour préserver les ressources naturelles et l'environnement pour les générations futures.",
        ],
        'synthese': ("Les roches et minéraux ont aussi des usages thérapeutiques (eaux thermales riches en "
                     "minéraux) et énergétiques (charbon, roches combustibles). Ces ressources doivent être "
                     "exploitées de façon durable."),
        'body': [
            ("1. Les eaux thermales et leurs bienfaits",
             "Une source thermale est une eau chaude naturelle qui remonte du sous-sol, réchauffée par la "
             "chaleur interne de la Terre et enrichie en minéraux dissous au contact des roches profondes. À "
             "Madagascar, la région d'Antsirabe est célèbre pour ses sources thermales, fréquentées pour "
             "leurs bienfaits sur la peau et les articulations.",
             ["Une source thermale est réchauffée par la chaleur interne de la Terre.",
              "L'eau se charge en minéraux au contact des roches profondes.",
              "Antsirabe est réputée pour ses sources thermales."]),
            ("2. Les roches et l'énergie",
             "Certaines roches sédimentaires, comme le charbon, formé à partir d'anciens débris végétaux "
             "accumulés et transformés, constituent une source d'énergie fossile. Madagascar possède "
             "notamment un important gisement de charbon dans le bassin houiller de la Sakoa, dans le "
             "sud-ouest du pays.",
             ["Le charbon est une roche sédimentaire d'origine végétale.",
              "Il constitue une source d'énergie fossile utilisée dans l'industrie.",
              "Le bassin de la Sakoa est un important gisement de charbon à Madagascar."]),
            ("3. Une exploitation responsable et durable",
             "Les ressources géologiques (roches, minéraux, eaux thermales) ne sont pas inépuisables. Il est "
             "important de les exploiter de façon responsable, en respectant l'environnement, afin de "
             "préserver ces richesses naturelles pour les générations futures.",
             ["Les ressources géologiques doivent être utilisées avec modération.",
              "Une exploitation non contrôlée peut endommager l'environnement.",
              "La préservation de ces ressources profite aux générations futures."]),
            ("4. Une gestion durable des ressources du sous-sol",
             "Madagascar possède un sous-sol riche en roches et minéraux variés, utile à la construction, à "
             "l'artisanat et à l'énergie. Pour que ces ressources profitent durablement au pays, il est "
             "essentiel de les exploiter en respectant l'environnement et en veillant à ne pas les épuiser "
             "trop rapidement.",
             ["Le sous-sol malgache est riche en ressources variées.",
              "Une exploitation raisonnée préserve les ressources pour l'avenir.",
              "Le respect de l'environnement doit accompagner toute exploitation minière."]),
        ],
        'example': ("De nombreux visiteurs se rendent chaque année aux thermes d'Antsirabe pour profiter des "
                    "bienfaits reconnus des eaux minérales chaudes issues du sous-sol volcanique."),
        'lesaistu': ("La région d'Antsirabe doit son sous-sol riche en eaux thermales à son ancienne activité "
                     "volcanique, aujourd'hui éteinte, mais dont la chaleur résiduelle réchauffe encore l'eau "
                     "souterraine."),
        'exercises': [
            {'type': 'qcm', 'points': 3, 'items': [
                {'q': "Une source thermale est réchauffée par…", 'options': ["le soleil uniquement", "la chaleur interne de la Terre", "le vent"],
                 'correct': 1, 'explain': "C'est la chaleur profonde de la Terre qui réchauffe l'eau."},
                {'q': "Le charbon est une roche…", 'options': ["magmatique", "sédimentaire d'origine végétale", "métamorphique"],
                 'correct': 1, 'explain': "Il provient d'anciens débris végétaux transformés."},
                {'q': "Le bassin houiller de la Sakoa se trouve…", 'options': ["dans le nord de Madagascar", "dans le sud-ouest de Madagascar", "en dehors de Madagascar"],
                 'correct': 1, 'explain': "C'est un important gisement de charbon malgache."},
            ]},
            {'type': 'vf', 'points': 3, 'items': [
                {'text': "Antsirabe est réputée pour ses sources thermales.", 'truth': True,
                 'explain': "Ses eaux chaudes sont utilisées pour leurs bienfaits."},
                {'text': "Le charbon est une roche magmatique.", 'truth': False,
                 'explain': "C'est une roche sédimentaire d'origine végétale."},
                {'text': "Les ressources géologiques sont inépuisables.", 'truth': False,
                 'explain': "Elles doivent être exploitées de façon responsable et durable."},
            ]},
            {'type': 'fillblank', 'points': 3, 'items': [
                {'prefix': "Une source thermale est réchauffée par la chaleur interne de la",
                 'answer': " Terre", 'suffix': "."},
                {'prefix': "Le charbon est une roche sédimentaire d'origine", 'answer': " végétale", 'suffix': "."},
                {'prefix': "Les ressources géologiques doivent être exploitées de façon",
                 'answer': " responsable", 'suffix': " et durable."},
            ]},
            {'type': 'phrase', 'points': 3, 'items': [
                "Qu'est-ce qu'une source thermale et où en trouve-t-on à Madagascar ?",
                "D'où provient le charbon et où en trouve-t-on à Madagascar ?",
                "Pourquoi faut-il exploiter les ressources géologiques de façon durable ?",
            ], 'answers': [
                "C'est une eau chaude naturelle réchauffée par la Terre ; on en trouve notamment à Antsirabe.",
                "Il provient d'anciens débris végétaux transformés ; on en trouve dans le bassin de la Sakoa.",
                "Parce que ces ressources ne sont pas inépuisables et qu'il faut préserver l'environnement.",
            ]},
        ],
    },
    # ---------------- Séance : Géo 7 (mini-projet) ----------------
    {
        'title': "Mini-projet : réaliser une collection de roches",
        'objectif': "réaliser et présenter une collection de roches locales en appliquant les connaissances acquises",
        'fignum': 22,
        'fig_title': "Étapes de réalisation d'une collection de roches",
        'fig_b': "Des élèves malgaches collectent et classent des roches lors d'une sortie sur le terrain",
        'revision_q': ["Qu'est-ce qu'une source thermale et où en trouve-t-on à Madagascar ?",
                       "Pourquoi faut-il exploiter les ressources géologiques de façon durable ?"],
        'revision_ra': ["R.A. : Une eau chaude naturelle réchauffée par la Terre ; on en trouve à Antsirabe.",
                        "R.A. : Parce que ces ressources ne sont pas inépuisables."],
        'mise_situation': ("L'enseignant demande : « Comment pourrions-nous constituer une collection de "
                            "roches représentatives de notre région, en appliquant ce que nous avons appris "
                            "sur les trois familles de roches ? »"),
        'mise_ra': "Les élèves proposent de ramasser des échantillons près de l'école ou du village.",
        'observation': "L'enseignant présente la figure 22 sur les étapes de réalisation d'une collection de roches.",
        'observation_support': "Figure 22 — Étapes de réalisation d'une collection de roches.",
        'analyse_q': [
            "Quelles sont les étapes pour réaliser une collection de roches ?",
            "Comment identifier la famille d'une roche récoltée ?",
            "Comment présenter proprement un échantillon de roche ?",
            "Pourquoi ce projet aide-t-il à mieux comprendre la géologie ?",
        ],
        'analyse_ra': [
            "R.A. : Récolter des échantillons, les nettoyer, les identifier, les étiqueter, puis les présenter.",
            "R.A. : En observant sa formation, sa couleur, la taille de ses grains et sa dureté, à l'aide de ce qui a été appris en classe.",
            "R.A. : En le nettoyant, en lui donnant un numéro et une étiquette avec son nom, sa famille et son lieu de récolte.",
            "R.A. : Parce qu'observer et manipuler de vraies roches aide à mieux retenir leurs caractéristiques.",
        ],
        'synthese': ("La réalisation d'une collection de roches se déroule en plusieurs étapes : récolte sur "
                     "le terrain, nettoyage, identification de la famille (magmatique, sédimentaire, "
                     "métamorphique), étiquetage, puis présentation à la classe."),
        'body': [
            ("1. La récolte sur le terrain",
             "Avec l'accord de l'enseignant, les élèves récoltent quelques échantillons de roches dans leur "
             "environnement proche (cour de l'école, champ, bord de route, rivière), en notant pour chacun "
             "le lieu exact où il a été trouvé.",
             ["La récolte se fait avec l'autorisation et l'encadrement de l'enseignant.",
              "Il est important de noter le lieu de récolte de chaque échantillon.",
              "Un petit nombre d'échantillons variés suffit pour un bon travail."]),
            ("2. L'identification et l'étiquetage",
             "Chaque roche est nettoyée puis observée : sa couleur, la taille de ses grains, sa dureté et son "
             "aspect permettent de proposer sa famille (magmatique, sédimentaire ou métamorphique) en "
             "s'appuyant sur les connaissances vues en classe. Une étiquette est ensuite associée à chaque "
             "échantillon.",
             ["L'observation des grains et de la couleur aide à identifier la roche.",
              "Chaque roche est classée dans une des trois familles.",
              "L'étiquette indique le nom, la famille et le lieu de récolte."]),
            ("3. La présentation de la collection",
             "Les échantillons peuvent être disposés dans une boîte ou sur un plateau, accompagnés de leurs "
             "étiquettes, puis présentés à la classe. Ce mini-projet permet de relier les connaissances "
             "théoriques à des observations concrètes du paysage géologique local.",
             ["La collection peut être présentée sous forme d'exposition en classe.",
              "Chaque élève ou groupe explique ses échantillons devant la classe.",
              "Ce travail relie la théorie du cours à l'observation directe du terrain."]),
            ("4. Prolonger le projet",
             "Le mini-projet peut être prolongé par une visite d'une carrière locale, d'un atelier "
             "d'artisanat de pierres, ou d'un musée de géologie si la région en possède un, afin d'observer "
             "concrètement l'exploitation et la transformation des roches étudiées en classe.",
             ["Une sortie sur le terrain complète utilement les connaissances théoriques.",
              "Visiter un atelier d'artisanat montre la transformation des roches en objets utiles.",
              "Ces visites renforcent la curiosité scientifique et le respect du patrimoine géologique."]),
        ],
        'example': ("Une classe rassemble des échantillons de latérite, de granite et de grès trouvés autour "
                    "de l'école, et les présente lors d'une petite exposition organisée pour les autres "
                    "classes."),
        'lesaistu': ("De nombreux musées de géologie dans le monde ont commencé par de simples collections "
                     "d'échantillons rassemblées par des passionnés ou des élèves curieux."),
        'exercises': [
            {'type': 'qcm', 'points': 3, 'items': [
                {'q': "La première étape d'une collection de roches est…", 'options': ["la présentation", "la récolte sur le terrain", "l'étiquetage"],
                 'correct': 1, 'explain': "On commence toujours par récolter les échantillons."},
                {'q': "Pour identifier une roche, on observe surtout…", 'options': ["sa couleur, ses grains et sa dureté", "son odeur uniquement", "son prix"],
                 'correct': 0, 'explain': "Ce sont des critères scientifiques d'observation."},
                {'q': "Une étiquette de roche doit indiquer…", 'options': ["seulement la couleur", "le nom, la famille et le lieu de récolte", "rien de particulier"],
                 'correct': 1, 'explain': "Ces informations permettent de bien documenter l'échantillon."},
            ]},
            {'type': 'vf', 'points': 3, 'items': [
                {'text': "On peut récolter des roches n'importe où sans précaution.", 'truth': False,
                 'explain': "Il faut le faire avec l'accord et l'encadrement de l'enseignant, en respectant l'environnement."},
                {'text': "L'observation des grains aide à identifier la famille d'une roche.", 'truth': True,
                 'explain': "C'est un critère important d'identification."},
                {'text': "La collection peut être présentée à la classe.", 'truth': True,
                 'explain': "C'est l'étape finale du mini-projet."},
            ]},
            {'type': 'fillblank', 'points': 3, 'items': [
                {'prefix': "La première étape d'une collection de roches est la",
                 'answer': " récolte", 'suffix': " sur le terrain."},
                {'prefix': "Chaque roche identifiée reçoit une",
                 'answer': " étiquette", 'suffix': "."},
                {'prefix': "Le mini-projet relie la théorie à l'observation du",
                 'answer': " terrain", 'suffix': "."},
            ]},
            {'type': 'phrase', 'points': 3, 'items': [
                "Cite les grandes étapes de réalisation d'une collection de roches.",
                "Quelles informations doivent figurer sur l'étiquette d'un échantillon ?",
                "Pourquoi ce mini-projet est-il utile pour mieux comprendre la géologie ?",
            ], 'answers': [
                "Récolte sur le terrain, nettoyage, identification, étiquetage, puis présentation.",
                "Le nom de la roche, sa famille (magmatique, sédimentaire ou métamorphique) et son lieu de récolte.",
                "Parce qu'il permet d'observer et de manipuler de vraies roches, ce qui aide à mieux retenir leurs caractéristiques.",
            ]},
        ],
    },
]

REVISION = {
    'title': "Révision — Unité III : Géologie",
    'fig_title': "Bilan de l'Unité III : Géologie",
    'notions': [
        ("Roches magmatiques", "Formées par refroidissement du magma : plutoniques à gros grains (granite) ou volcaniques à grains fins (basalte)."),
        ("Roches sédimentaires", "Formées par accumulation, tassement et cimentation de sédiments en couches (strates) : grès, calcaire, argile."),
        ("Roches métamorphiques", "Formées par transformation d'une roche existante sous l'effet de la chaleur et de la pression : marbre, gneiss, quartzite."),
        ("Cycle des roches", "Transformation continue entre les trois familles de roches, au cours du temps géologique."),
        ("Usages des roches", "Construction (latérite, granite), artisanat/bijouterie (pierres précieuses), thérapeutique (eaux thermales) et énergie (charbon)."),
    ],
    'questions': [
        ("Comment se forme une roche magmatique ?",
         "R.A. : Par le refroidissement et la solidification du magma."),
        ("Comment se forme une roche sédimentaire ?",
         "R.A. : Par accumulation, tassement et cimentation de sédiments en couches successives."),
        ("Comment se forme une roche métamorphique ?",
         "R.A. : Par transformation d'une roche existante sous l'effet de la chaleur et de la pression, sans fusion complète."),
        ("Que montre le cycle des roches ?",
         "R.A. : Que les trois familles de roches peuvent se transformer les unes en les autres au cours du temps."),
        ("Cite deux usages des roches à Madagascar.",
         "R.A. : La construction (latérite, granite) et l'artisanat/bijouterie (pierres précieuses)."),
        ("Pourquoi faut-il exploiter les ressources géologiques de façon durable ?",
         "R.A. : Parce qu'elles ne sont pas inépuisables et qu'il faut préserver l'environnement."),
    ],
}

EXAM = {
    'title': "Sujet d'examen 4e — Unité III : Géologie",
    'barème': 15,
    'fig_title': "Les trois familles de roches et le cycle des roches",
    'exercises': [
        {'type': 'qcm', 'points': 4, 'items': [
            {'q': "Une roche magmatique se forme à partir…", 'options': ["de sédiments", "du magma", "de la chaleur seule"],
             'correct': 1, 'explain': None},
            {'q': "Le granite est une roche…", 'options': ["plutonique", "volcanique", "sédimentaire"],
             'correct': 0, 'explain': None},
            {'q': "Le calcaire se transforme en… par métamorphisme.", 'options': ["granite", "marbre", "basalte"],
             'correct': 1, 'explain': None},
            {'q': "Le charbon est une roche…", 'options': ["magmatique", "sédimentaire d'origine végétale", "métamorphique"],
             'correct': 1, 'explain': None},
        ]},
        {'type': 'vf', 'points': 3, 'items': [
            {'text': "Une roche métamorphique se forme sans fusion complète de la roche d'origine.", 'truth': True, 'explain': None},
            {'text': "Les roches ne peuvent jamais se transformer les unes en les autres.", 'truth': False, 'explain': None},
            {'text': "La latérite est très utilisée pour la construction à Madagascar.", 'truth': True, 'explain': None},
        ]},
        {'type': 'fillblank', 'points': 4, 'items': [
            {'prefix': "Le refroidissement rapide du magma en surface donne des roches à grains",
             'answer': " fins", 'suffix': "."},
            {'prefix': "Les sédiments s'accumulent en couches appelées", 'answer': " strates", 'suffix': "."},
            {'prefix': "Le granite se transforme en", 'answer': " gneiss", 'suffix': " par métamorphisme."},
            {'prefix': "Antsirabe est réputée pour ses sources", 'answer': " thermales", 'suffix': "."},
        ]},
        {'type': 'phrase', 'points': 4, 'items': [
            "Décris les grandes étapes du cycle des roches.",
            "Cite un exemple de roche magmatique, un de roche sédimentaire et un de roche métamorphique.",
            "Cite deux usages des roches à Madagascar.",
            "Pourquoi faut-il exploiter les ressources géologiques de façon durable ?",
        ], 'answers': [
            "Érosion → sédiments → roche sédimentaire → roche métamorphique (chaleur/pression) → magma (fusion) → nouvelle roche magmatique.",
            "Granite (magmatique), grès ou calcaire (sédimentaire), marbre ou gneiss (métamorphique).",
            "La construction (latérite, granite) et l'artisanat/bijouterie (pierres précieuses), ou la thérapeutique/énergie (eaux thermales, charbon).",
            "Parce que ces ressources ne sont pas inépuisables et qu'il faut préserver l'environnement pour les générations futures.",
        ]},
    ],
}

AUTOEVAL_ROWS = [f"Unité III — {l['title']}" for l in LESSONS]

INDEX_TERMS = [
    ("basalte", [1]),
    ("calcaire", [2]),
    ("charbon", [6]),
    ("cycle des roches", [4]),
    ("érosion", [2, 4]),
    ("gneiss", [3]),
    ("granite", [1]),
    ("gisement", [5, 6]),
    ("grès", [2]),
    ("latérite", [5]),
    ("magma", [1]),
    ("marbre", [3]),
    ("métamorphisme", [3]),
    ("pierre précieuse", [5]),
    ("quartzite", [3]),
    ("roche magmatique", [1]),
    ("roche métamorphique", [3]),
    ("roche sédimentaire", [2]),
    ("sédiment", [2]),
    ("source thermale", [6]),
    ("strate", [2]),
]
