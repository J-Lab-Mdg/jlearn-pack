# -*- coding: utf-8 -*-
"""Contenu pédagogique — Géographie T9 — Unité 2 : La méthodologie de
traitement de devoir (4 heures PE = 4 séances de méthodologie + révision +
examen). Source : PE Géographie T9 (programme officiel) + FRP Géographie T9
(fiche de ressources pédagogiques), Thématique II.
"""

UNIT2 = {
    'num': 2,
    'roman': 'II',
    'theme': "La méthodologie de traitement de devoir",
    'toc_title': "UNITÉ 2 — LA MÉTHODOLOGIE DE TRAITEMENT DE DEVOIR",
    'thematique_officielle': (
        "Thématique officielle : La méthodologie de traitement de devoir. "
        "Valeurs à véhiculer : rigueur, organisation, persévérance. "
        "Durée officielle : 4 heures, soit 4 leçons de 60 minutes, "
        "1 séance de révision et 1 sujet d'examen."
    ),
}

LESSONS2 = [
    # ---------------- Séance 21 ----------------
    {
        'titre': "Analyser le sujet et construire la problématique",
        'video_titre': "Analyser le sujet et faire jaillir la problématique",
        'video_url': "https://www.youtube.com/watch?v=9gM59Ej9qYo",
        'titre_court': "ANALYSER LE SUJET",
        'schema_img': "schema_s21.png",
        'obs_img': "doc_s21.png",
        'objectif': "analyser un sujet de devoir en repérant ses mots-clés et construire une problématique adaptée",
        'documentation': "FRP T9, RES 2-a (Méthodologie : analyse du sujet et construction de la problématique) ; Programme d'études officiel T9 — Géographie.",
        'eleve': "Fy",
        'revision_q': ["Qu'est-ce que l'interdépendance économique ?",
                       "Cite un exemple d'interdépendance des trois secteurs à Madagascar."],
        'revision_ra': ["R.A. : C'est le fait que les secteurs primaire, secondaire et tertiaire dépendent les uns des autres pour produire des richesses.",
                        "R.A. : L'exemple de la vanille : culture (primaire), transformation (secondaire), exportation (tertiaire)."],
        'notion': "la problématique",
        'notion_def': "La problématique est la question centrale, formulée à partir du sujet, qui va guider toute la réflexion et toute la rédaction du devoir.",
        'idea2': ("Pour analyser un sujet, il faut d'abord ", "souligner les mots-clés", " et chercher leur sens précis, y compris les mots de liaison et les verbes de consigne (analyser, expliquer, montrer, comparer)."),
        'idea3': ("Il faut aussi délimiter le sujet dans l'", "espace et dans le temps", " : à quel territoire et à quelle période il se rapporte, pour éviter le hors-sujet."),
        'regle': ("Une bonne problématique doit être formulée sous forme de ", "question précise", ", directement liée aux mots-clés du sujet, et à laquelle tout le devoir doit répondre."),
        'mise_situation': "Fy reçoit le sujet « Les problèmes et les solutions de l'agriculture malgache » et ne sait pas par où commencer sa réponse.",
        'mise_ra_extra': "Parce qu'elle n'a pas encore identifié les mots-clés du sujet ni formulé une problématique pour guider sa réflexion.",
        'fig_title': "La démarche d'analyse d'un sujet : des mots-clés à la problématique",
        'obs_title': "Fy observe un sujet de devoir, souligne les mots qui lui semblent importants et se demande comment les relier.",
        'sections': [
            ("1. Repérer et définir les mots-clés",
             [("Analyser un sujet commence toujours par ", "souligner les mots-clés", " : noms, lieux, dates, et surtout le verbe de consigne (analyser, expliquer, montrer, comparer, justifier)."),
              "Chaque mot-clé doit être défini précisément, car un sujet mal compris conduit presque toujours à une réponse hors-sujet."]),
            ("2. Délimiter le sujet dans l'espace et dans le temps",
             [("Il faut ensuite se demander ", "quel territoire et quelle période", " le sujet concerne : tout Madagascar ou une région précise, une situation actuelle ou une évolution."),
              "Cette délimitation évite de traiter des faits ou des lieux qui ne sont pas demandés par le sujet."]),
            ("3. Formuler la problématique",
             ["Une fois les mots-clés et les limites identifiés, on reformule le sujet sous la forme d'une question centrale : la problématique.",
              ("La problématique doit couvrir ", "l'ensemble du sujet", " et annoncer, en creux, les grandes parties que le devoir va développer.")]),
        ],
    },
    # ---------------- Séance 22 ----------------
    {
        'titre': "Rédiger l'introduction",
        'video_titre': "L'introduction de dissertation, la base",
        'video_url': "https://www.youtube.com/watch?v=iI_wq-CYWkQ",
        'titre_court': "L'INTRODUCTION",
        'schema_img': "schema_s22.png",
        'obs_img': "doc_s22.png",
        'objectif': "rédiger une introduction complète comportant une accroche, la présentation du sujet, la problématique et l'annonce du plan",
        'documentation': "FRP T9, RES 2-b (Méthodologie : structure et rédaction de l'introduction).",
        'eleve': "Noro",
        'revision_q': ["Qu'est-ce qu'une problématique ?",
                       "Pourquoi faut-il délimiter un sujet dans l'espace et dans le temps ?"],
        'revision_ra': ["R.A. : C'est la question centrale, formulée à partir du sujet, qui guide toute la réflexion et la rédaction du devoir.",
                        "R.A. : Pour éviter de traiter des faits ou des lieux qui ne sont pas demandés par le sujet, et donc éviter le hors-sujet."],
        'notion': "l'introduction",
        'notion_def': "L'introduction est le texte qui ouvre le devoir ; elle présente le sujet, pose la problématique et annonce le plan qui sera suivi.",
        'idea2': ("Une introduction complète comporte quatre parties dans l'ordre : l'", "accroche", ", la présentation du sujet, la problématique, puis l'annonce du plan."),
        'idea3': ("L'", "accroche", " est une phrase de départ qui éveille l'intérêt du correcteur : un fait d'actualité, un chiffre marquant ou une situation concrète liée au sujet."),
        'regle': ("L'introduction se rédige toujours au ", "brouillon", " avant d'être recopiée au propre, et doit rester courte (une demi-page environ)."),
        'mise_situation': "Noro commence directement à écrire sans brouillon et oublie d'annoncer son plan ; le correcteur ne sait pas comment elle va organiser sa réponse.",
        'mise_ra_extra': "Parce qu'une introduction sans annonce de plan ne permet pas au correcteur de suivre la logique du devoir, même si le contenu est juste.",
        'fig_title': "Les quatre parties de l'introduction : accroche, présentation du sujet, problématique, annonce du plan",
        'obs_title': "Noro prépare son brouillon avant de rédiger son introduction au propre, en suivant les quatre étapes dans l'ordre.",
        'sections': [
            ("1. Les quatre parties de l'introduction",
             [("L'introduction suit toujours le même ordre : l'", "accroche", " (une phrase d'entrée en matière), la présentation du sujet et de ses mots-clés, la problématique, puis l'annonce du plan."),
              "Chaque partie doit être courte et claire : l'introduction entière ne dépasse pas une demi-page."]),
            ("2. Rédiger au brouillon avant de recopier",
             [("Il est conseillé de rédiger l'introduction au ", "brouillon", ", de la relire, puis seulement de la recopier au propre sur la copie d'examen."),
              "Cette méthode évite les ratures et permet de vérifier que les quatre parties sont bien présentes."]),
            ("3. Les erreurs à éviter",
             ["Les erreurs les plus fréquentes sont : une accroche trop longue, l'oubli de la problématique, et surtout l'oubli de l'annonce du plan.",
              "Une introduction incomplète fait perdre des points, même si le développement qui suit est de bonne qualité."]),
        ],
    },
    # ---------------- Séance 23 ----------------
    {
        'titre': "Construire le développement et les transitions",
        'video_titre': "Réaliser un développement construit (paragraphe argumenté)",
        'video_url': "https://www.youtube.com/watch?v=SlH9dCfIwTI",
        'titre_court': "LE DÉVELOPPEMENT",
        'schema_img': "schema_s23.png",
        'obs_img': "doc_s23.png",
        'objectif': "organiser le développement en parties et paragraphes argumentés, reliés par des transitions",
        'documentation': "FRP T9, RES 2-c (Méthodologie : organisation du développement et rédaction des transitions).",
        'eleve': "Haja",
        'revision_q': ["Quelles sont les quatre parties d'une introduction ?",
                       "Pourquoi faut-il rédiger l'introduction au brouillon ?"],
        'revision_ra': ["R.A. : L'accroche, la présentation du sujet, la problématique et l'annonce du plan.",
                        "R.A. : Pour éviter les ratures et vérifier que les quatre parties sont bien présentes avant de recopier."],
        'notion': "la transition",
        'notion_def': "La transition est une phrase, placée entre deux parties du développement, qui fait le bilan de la partie qui se termine et annonce la partie suivante.",
        'idea2': ("Le développement s'organise en deux ou trois grandes ", "parties", ", annoncées dans l'introduction, chacune composée de paragraphes."),
        'idea3': ("Chaque paragraphe suit la méthode ", "AEI", " : une idée (Argument), un fait précis qui l'illustre (Exemple), puis une phrase qui explique ce que cela montre (Interprétation)."),
        'regle': ("Entre chaque grande partie, une ", "transition", " est indispensable pour que le devoir reste cohérent et facile à suivre."),
        'mise_situation': "Haja rédige son développement en enchaînant ses parties sans aucune phrase de liaison ; le correcteur a l'impression de lire deux devoirs séparés.",
        'mise_ra_extra': "Parce qu'il manque une transition entre les parties : une phrase qui relie la fin d'une partie au début de la suivante.",
        'fig_title': "La structure d'un paragraphe argumenté (méthode AEI) et la place des transitions",
        'obs_title': "Haja relit son brouillon et cherche la phrase de transition qui doit relier sa première partie à la deuxième.",
        'sections': [
            ("1. Organiser le développement en parties",
             [("Le développement reprend le ", "plan annoncé", " dans l'introduction : deux ou trois grandes parties, elles-mêmes composées de deux ou trois paragraphes."),
              "Chaque partie doit traiter un aspect différent de la problématique, sans répéter ce qui a déjà été dit."]),
            ("2. Construire un paragraphe argumenté (méthode AEI)",
             [("Un bon paragraphe suit la méthode ", "AEI", " : une idée clairement énoncée (Argument), un fait précis qui l'illustre (Exemple), et une phrase qui explique ce que cela prouve (Interprétation)."),
              "Un paragraphe qui ne contient qu'une idée sans exemple reste trop général et convainc peu le correcteur."]),
            ("3. Rédiger des transitions efficaces",
             [("Une ", "transition", " rappelle en une phrase ce qui vient d'être montré, puis annonce ce qui va être étudié dans la partie suivante."),
              "Sans transition, le devoir perd en cohérence, même si chaque partie est, prise séparément, bien construite."]),
        ],
    },
    # ---------------- Séance 24 ----------------
    {
        'titre': "Rédiger la conclusion et relire sa copie",
        'video_titre': "Composition : la rédaction de la conclusion",
        'video_url': "https://www.youtube.com/watch?v=Zd3XUa96knA",
        'titre_court': "LA CONCLUSION",
        'schema_img': "schema_s24.png",
        'obs_img': "doc_s24.png",
        'objectif': "rédiger une conclusion complète (bilan et ouverture) et relire méthodiquement sa copie",
        'documentation': "FRP T9, RES 2-d (Méthodologie : structure de la conclusion et relecture de la copie).",
        'eleve': "Sitraka",
        'revision_q': ["Qu'est-ce qu'une transition ?",
                       "Que signifie la méthode AEI pour un paragraphe ?"],
        'revision_ra': ["R.A. : C'est une phrase, entre deux parties du développement, qui fait le bilan de la partie qui se termine et annonce la suivante.",
                        "R.A. : Argument (une idée), Exemple (un fait précis) et Interprétation (ce que cela montre)."],
        'notion': "la conclusion",
        'notion_def': "La conclusion est le texte qui termine le devoir ; elle répond à la problématique posée en introduction et ouvre la réflexion vers une autre question.",
        'idea2': ("La conclusion comporte deux parties : le ", "bilan", ", qui résume les grandes idées et répond à la problématique, et l'ouverture, qui prolonge la réflexion."),
        'idea3': ("L'", "ouverture", " propose une question liée au sujet mais qui n'a pas été traitée : une comparaison, une évolution récente ou une question voisine."),
        'regle': ("Après la conclusion, il faut toujours ", "relire sa copie", " pour corriger l'orthographe, vérifier le plan annoncé et s'assurer qu'aucune idée nouvelle n'apparaît dans la conclusion."),
        'mise_situation': "Sitraka termine son devoir juste avant la fin de l'épreuve et rend sa copie sans la relire ; il découvre ensuite plusieurs fautes et un mot-clé mal orthographié.",
        'mise_ra_extra': "Parce qu'il n'a pas gardé de temps pour la relecture, une étape pourtant indispensable pour corriger les fautes et vérifier la cohérence du devoir.",
        'fig_title': "La structure de la conclusion (bilan, ouverture) et les étapes de la relecture",
        'obs_title': "Sitraka relit sa copie quelques minutes avant la fin de l'épreuve, en suivant une liste de vérification.",
        'sections': [
            ("1. Le bilan : répondre à la problématique",
             [("Le bilan reprend, en quelques phrases, les ", "idées principales", " de chaque partie du développement et répond directement à la problématique posée en introduction."),
              "Il ne s'agit pas de résumer tout le devoir, mais de montrer clairement la réponse apportée à la question de départ."]),
            ("2. L'ouverture : prolonger la réflexion",
             [("L'", "ouverture", " termine le devoir par une question proche du sujet mais non traitée, par exemple une comparaison avec une autre région ou une évolution récente."),
              "Aucune idée nouvelle et développée ne doit apparaître dans la conclusion : seule une courte ouverture est attendue."]),
            ("3. Relire méthodiquement sa copie",
             ["La relecture vérifie quatre points : l'orthographe des mots-clés, la présence des quatre parties de l'introduction, le respect du plan annoncé, et la clarté des transitions.",
              ("Garder quelques minutes pour la ", "relecture", " permet souvent de corriger des erreurs qui, sinon, feraient perdre des points inutilement.")]),
        ],
    },
]

assert len(LESSONS2) == 4, f"expected 4 lessons, got {len(LESSONS2)}"

EXAM2 = {
    'title_suffix': "LA MÉTHODOLOGIE DE TRAITEMENT DE DEVOIR",
    'exercises': [
        {
            'points': 5,
            'instruction': "Pour le sujet « Les problèmes et les solutions du secteur informel à Madagascar », réponds aux questions.",
            'questions': [
                "1. Relève deux mots-clés de ce sujet.",
                "2. Formule une problématique adaptée à ce sujet.",
            ],
            'answers': [
                "1. Mots-clés possibles : « secteur informel », « problèmes », « solutions », « Madagascar ». (2,5 points)",
                "2. Exemple de problématique : Pourquoi le secteur informel se développe-t-il autant à Madagascar, et quelles solutions permettraient de le réduire ? (2,5 points)",
            ],
        },
        {
            'points': 5,
            'instruction': "Rédige l'accroche et la présentation du sujet (les deux premières parties de l'introduction) pour ce même sujet.",
            'questions': [
                "Accroche : pars d'une situation concrète (exemple : les vendeurs ambulants d'Analakely).",
                "Présentation du sujet : explique brièvement ce qu'est le secteur informel.",
            ],
            'answers': [
                "Accroche acceptée si elle part d'un fait concret lié au secteur informel (ex. les vendeurs ambulants sans registre de commerce). (2,5 points)",
                "Présentation acceptée si elle définit le secteur informel comme les activités économiques non enregistrées et non protégées par la loi. (2,5 points)",
            ],
        },
        {
            'points': 5,
            'instruction': "Rédige un paragraphe argumenté (méthode AEI) sur une cause du secteur informel, puis une phrase de transition vers la partie suivante.",
            'questions': [
                "1. Paragraphe AEI : Argument, Exemple, Interprétation.",
                "2. Phrase de transition vers une partie sur les conséquences du secteur informel.",
            ],
            'answers': [
                "1. Est accepté tout paragraphe qui énonce une cause (ex. pauvreté), l'illustre d'un exemple malgache précis, puis explique ce que cela montre. (3 points)",
                "2. Est acceptée toute transition qui résume la cause expliquée et annonce clairement les conséquences du secteur informel. (2 points)",
            ],
        },
        {
            'points': 5,
            'instruction': "Rédige une conclusion complète (bilan et ouverture) pour ce sujet.",
            'questions': [
                "Bilan : réponds à la problématique formulée à l'exercice 1.",
                "Ouverture : propose une question voisine non traitée dans ce devoir.",
            ],
            'answers': [
                "Bilan accepté s'il répond clairement à la problématique en reprenant les causes et les solutions évoquées. (3 points)",
                "Ouverture acceptée si elle propose une question proche mais non traitée (ex. le rôle de l'État face au secteur informel). (2 points)",
            ],
        },
    ],
}
