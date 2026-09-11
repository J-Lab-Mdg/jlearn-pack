# -*- coding: utf-8 -*-
"""Contenu du Trimestre 1 — Géographie 9e — séances 2 à 5.

Structure d'une séance (toutes les clés sont obligatoires sauf mention) :
    n, semaine, titre, objectif, materiel,
    revision  : [(question, réponse_attendue), ...]
    mes       : (question, réponse_attendue)
    analyse   : [(question, réponse_attendue), ...]  (5 couples)
    synthese  : texte (énoncé par l'enseignant, commence par « Donc, »)
    application / evaluation : (énoncé, corrigé)
    lecon_titre, sections : [(titre, texte, figure_ou_None)]
        figure = (fichier_png, légende, largeur_px)
    encadre : (couleur, titre, texte)          — optionnel
    lexique : [(mot, définition), ...]
    exercices : [(consigne, [items], [corrigés])]   (5 exercices, 4 items, 4 pts)
    figure_ex : (fichier_png, légende, largeur_px)  — optionnel (schéma à légender)
    consigne_ex5 / corrige_ex5 : si l'exercice 5 porte sur la figure
"""

SEANCES = [

# ═══════════════════════════ SÉANCE 2 ═══════════════════════════
dict(
    n=2, semaine=1, titre="Les quatre points cardinaux",
    objectif="Identifier et citer les quatre points cardinaux à partir du trajet du soleil.",
    materiel="Schéma des quatre points cardinaux, croix à compléter, ardoise et craie, cahier.",
    revision=[("De quel côté le soleil se lève-t-il le matin ?", "R.A. : Du côté de l'Est."),
              ("Et de quel côté se couche-t-il le soir ?", "R.A. : Du côté de l'Ouest.")],
    mes=("Quels sont les deux côtés que le soleil nous aide à trouver sans instrument ?",
         "R.A. : L'Est et l'Ouest."),
    analyse=[
        ("Comment appelle-t-on le côté où le soleil se lève ?", "R.A. : L'Est."),
        ("Comment appelle-t-on le côté où le soleil se couche ?", "R.A. : L'Ouest."),
        ("Cite les deux autres directions que nous n'avons pas encore nommées.",
         "R.A. : Le Nord et le Sud."),
        ("Quand on regarde le soleil se lever, de quel côté se trouve le Nord ?",
         "R.A. : À notre gauche."),
        ("Et de quel côté se trouve le Sud quand on regarde le soleil se lever ?",
         "R.A. : À notre droite.")],
    synthese="Donc, il existe quatre points cardinaux : le Nord, le Sud, l'Est et l'Ouest. "
             "Le soleil se lève à l'Est et il se couche à l'Ouest. Le Nord et le Sud sont les "
             "deux autres directions : quand on regarde le soleil se lever, le Nord est à notre "
             "gauche et le Sud à notre droite.",
    application=("1. Complète : le soleil se lève à l'…, il se couche à l'…\n"
                 "2. Cite les quatre points cardinaux dans l'ordre : Nord, …, …, …",
                 "1. à l'Est ; à l'Ouest.\n2. Nord, Sud, Est, Ouest."),
    evaluation=("1. Réponds par vrai ou faux : a) Le soleil se couche à l'Est. b) Le Nord et le "
                "Sud sont des points cardinaux. c) Il y a quatre points cardinaux. "
                "d) Le soleil se lève à l'Ouest.\n"
                "2. Écris le nom des quatre points cardinaux sur ton ardoise.",
                "1. a) Faux — b) Vrai — c) Vrai — d) Faux.\n2. Nord, Sud, Est, Ouest."),
    lecon_titre="Les quatre points cardinaux",
    sections=[
        ("1. Quatre directions, quatre noms",
         "Pour se repérer, on utilise quatre directions que l'on appelle les points cardinaux : "
         "le Nord, le Sud, l'Est et l'Ouest. On les abrège souvent par une seule lettre : N pour "
         "le Nord, S pour le Sud, E pour l'Est et O pour l'Ouest. Ces quatre directions sont "
         "partout les mêmes, dans tous les villages et dans toutes les villes de Madagascar.",
         ("img_s02_a.png", "Figure 1 — Les quatre points cardinaux autour de moi.", 600)),
        ("2. L'Est et l'Ouest : les repères du soleil",
         "Deux de ces directions sont faciles à trouver grâce au soleil. L'Est, c'est le côté où "
         "le soleil se lève le matin. L'Ouest, c'est le côté où il se couche le soir. Quand Nivo "
         "regarde le soleil se lever au-dessus de la colline, elle regarde vers l'Est.", None),
        ("3. Le Nord et le Sud",
         "Le Nord et le Sud sont les deux autres directions. Elles sont perpendiculaires à la "
         "ligne Est-Ouest. Quand on regarde le soleil se lever, c'est-à-dire quand on regarde "
         "vers l'Est, le Nord se trouve à notre main gauche et le Sud à notre main droite. "
         "Derrière nous, c'est l'Ouest.", None),
        ("4. Comment retenir les quatre noms ?",
         "On peut retenir l'ordre en disant « Nord, Sud, Est, Ouest ». On peut aussi se rappeler "
         "que le soleil donne toujours l'Est et l'Ouest : il suffit ensuite de tourner d'un "
         "quart de tour vers la gauche pour avoir le Nord, et vers la droite pour le Sud. "
         "C'est une astuce que les paysans malgaches utilisent dans les rizières depuis "
         "longtemps.", None),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Le mot « cardinal » vient d'un mot latin qui signifie « le gond, le pivot ». "
             "Les points cardinaux sont donc les directions autour desquelles tout tourne, "
             "comme une porte tourne autour de ses gonds."),
    resume=[
        "Les quatre points cardinaux sont le Nord, le Sud, l'Est et l'Ouest.",
        "L'Est est le côté où le soleil se lève, l'Ouest le côté où il se couche.",
        "Quand on regarde le soleil se lever, le Nord est à notre gauche et le Sud à notre droite.",
        "On retient facilement l'ordre en disant : Nord, Sud, Est, Ouest.",
        "Ces quatre directions sont les mêmes partout, dans tous les villages et toutes les villes.",
    ],
    lexique=[("Nord", "Une des quatre directions ; elle est à gauche quand on regarde le "
                      "soleil se lever."),
             ("Sud", "La direction opposée au Nord ; elle est à droite quand on regarde "
                     "le soleil se lever."),
             ("Est", "La direction où le soleil se lève le matin."),
             ("Ouest", "La direction où le soleil se couche le soir."),
             ("Point cardinal", "Une des quatre directions de base : Nord, Sud, Est, Ouest.")],
    exercices=[
        ("Complète avec les mots proposés : Nord — Sud — Est — Ouest",
         ["a) Le soleil se lève à l'………", "b) Le soleil se couche à l'………",
          "c) Quand je regarde le soleil se lever, le …… est à ma gauche.",
          "d) Quand je regarde le soleil se lever, le …… est à ma droite."],
         ["a) à l'Est", "b) à l'Ouest", "c) le Nord", "d) le Sud"]),
        ("Réponds par vrai ou faux.",
         ["a) Il y a quatre points cardinaux.", "b) Le soleil se lève à l'Ouest.",
          "c) Le Nord est une direction.", "d) Le Sud est le côté où le soleil se lève."],
         ["a) Vrai", "b) Faux — il se lève à l'Est", "c) Vrai",
          "d) Faux — le Sud n'est pas du côté du soleil levant"]),
        ("Relie chaque direction à son repère.",
         ["Le Nord", "Le Sud", "L'Est", "L'Ouest"],
         ["Du côté où le soleil se couche.", "À gauche quand on regarde le lever du soleil.",
          "Du côté où le soleil se lève.", "À droite quand on regarde le lever du soleil."]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Combien y a-t-il de points cardinaux ?",
          "b) De quel côté le soleil se lève-t-il ?",
          "c) Où se trouve le Nord quand on regarde le soleil se lever ?",
          "d) Que nous donne le soleil, chaque matin et chaque soir ?"],
         ["a) Il y a quatre points cardinaux.", "b) Il se lève du côté de l'Est.",
          "c) Il se trouve à notre gauche.",
          "d) Il nous donne les directions de l'Est et de l'Ouest."]),
    ],
    figure_ex=("img_s02_b.png", "Figure 2 — Complète la croix des points cardinaux.", 420),
    consigne_ex5="Observe la croix ci-dessous et écris le nom de chaque point cardinal à la "
                 "bonne place.",
    corrige_ex5="En haut : le Nord — en bas : le Sud — à droite : l'Est — à gauche : l'Ouest.",
),

# ═══════════════════════════ SÉANCE 3 ═══════════════════════════
dict(
    n=3, semaine=1, titre="L'orientation par les quatre points cardinaux",
    objectif="Se situer dans la cour de l'école en utilisant les quatre points cardinaux.",
    materiel="Cour de l'école, craie pour tracer au sol, ardoise et craie, cahier.",
    revision=[("Cite les quatre points cardinaux.", "R.A. : Le Nord, le Sud, l'Est, l'Ouest."),
              ("De quel côté le soleil se lève-t-il ?", "R.A. : À l'Est.")],
    mes=("Quand vous arrivez le matin, de quel côté est le soleil par rapport à l'école ?",
         "R.A. : Du côté de l'Est."),
    analyse=[
        ("Tends le bras droit vers le soleil levant : que montre ton bras droit ?",
         "R.A. : Il montre l'Est."),
        ("Quand ton bras droit montre l'Est, qu'est-ce qu'il y a devant toi ?",
         "R.A. : Le Nord."),
        ("Et qu'est-ce qu'il y a derrière toi ?", "R.A. : Le Sud."),
        ("De quel côté se trouve l'Ouest ?", "R.A. : À ta gauche."),
        ("Où se trouve le mât de drapeau par rapport à nous : au Nord ou au Sud ?",
         "R.A. : Au Nord (à vérifier dans la cour de l'école).")],
    synthese="Donc, pour s'orienter, il suffit de tendre le bras droit vers le soleil levant : "
             "le bras droit montre l'Est, on a alors le Nord devant soi, le Sud derrière soi et "
             "l'Ouest à sa gauche. On peut ensuite dire où se trouve chaque chose de l'école : "
             "« le mât de drapeau est au Nord de la cour ».",
    application=("Dans la cour, tends le bras droit vers le soleil levant et réponds : "
                 "a) Qu'est-ce qu'il y a devant toi ? b) Derrière toi ? c) À ta gauche ? "
                 "d) À ta droite ?",
                 "a) Le Nord — b) Le Sud — c) L'Ouest — d) L'Est."),
    evaluation=("1. Réponds par vrai ou faux : a) Quand le bras droit montre l'Est, le Nord est "
                "devant nous. b) L'Ouest est à notre droite. c) Le Sud est derrière nous. "
                "d) On peut s'orienter sans boussole.\n"
                "2. Écris une phrase qui dit où se trouve la porte de la classe.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n"
                "2. Exemple : « La porte de la classe se trouve au Sud de la cour. »"),
    lecon_titre="S'orienter sans boussole",
    sections=[
        ("1. S'orienter, qu'est-ce que c'est ?",
         "S'orienter, c'est savoir de quel côté on regarde et où se trouvent les choses autour "
         "de soi. Pour cela, on n'a pas besoin d'instrument : le soleil suffit. Il suffit de "
         "connaître une seule direction pour trouver toutes les autres, car les quatre points "
         "cardinaux sont toujours rangés dans le même ordre.",
         ("scene_classe.png", "Figure 1 — Dans la cour de l'école, on apprend à s'orienter.",
          620)),
        ("2. La méthode du bras tendu",
         "Le matin, place-toi bien droit. Tends le bras droit vers le soleil levant : ton bras "
         "droit montre l'Est. Alors, automatiquement, tu as le Nord devant toi, le Sud derrière "
         "toi et l'Ouest à ta gauche. C'est la méthode la plus simple et elle marche partout.",
         ("img_s03_a.png", "Figure 2 — Bras droit vers le soleil levant : je m'oriente.", 620)),
        ("3. Dire où se trouvent les choses",
         "Une fois orienté, on peut décrire l'école et le village : « le mât de drapeau est au "
         "Nord de la cour », « les latrines sont à l'Ouest », « le portail est au Sud ». "
         "Ces phrases sont utiles parce qu'elles restent vraies toute l'année, alors que "
         "« à gauche » ou « à droite » changent selon l'endroit où l'on se tient.", None),
        ("4. Vérifier avec un repère fixe",
         "Pour vérifier que l'on ne s'est pas trompé, on choisit un repère que l'on voit de "
         "loin : une colline, un grand arbre, le clocher de l'église. On note une fois pour "
         "toutes de quel côté il se trouve, et l'on s'en sert pour se recaler les autres jours.",
         None),
    ],
    encadre=("rouge", "Attention !",
             "Le soleil ne montre l'Est que le matin, au moment du lever. À midi, il est haut "
             "dans le ciel et il ne peut plus servir de repère : on ne peut pas dire qu'il est "
             "« à l'Est » à midi."),
    resume=[
        "S'orienter, c'est savoir de quel côté on regarde et où se trouvent les choses autour de soi.",
        "Le matin, on tend le bras droit vers le soleil levant : le bras montre l'Est.",
        "Dans cette position, on a le Nord devant soi, le Sud derrière soi et l'Ouest à sa gauche.",
        "Un grand arbre ou une colline sert de repère pour vérifier que l'on ne s'est pas trompé.",
        "Le soleil ne montre l'Est que le matin : à midi, il est trop haut pour servir de repère.",
    ],
    lexique=[("S'orienter", "Trouver de quel côté sont le Nord, le Sud, l'Est et l'Ouest."),
             ("Repère", "Un objet ou un lieu que l'on reconnaît de loin et qui aide à se "
                        "diriger, comme une colline ou un grand arbre."),
             ("Devant / derrière", "Ce que l'on a devant soi quand on regarde, et ce que l'on "
                                   "a dans son dos.")],
    exercices=[
        ("Complète avec : Nord — Sud — Est — Ouest",
         ["a) Le bras droit vers le soleil levant montre l'………",
          "b) On a alors le …… devant soi.",
          "c) On a le …… derrière soi.",
          "d) L'…… est à sa gauche."],
         ["a) l'Est", "b) le Nord", "c) le Sud", "d) l'Ouest"]),
        ("Réponds par vrai ou faux.",
         ["a) Le bras droit vers le soleil levant montre l'Ouest.",
          "b) On peut s'orienter sans boussole grâce au soleil.",
          "c) À midi, le soleil montre encore l'Est.",
          "d) Un grand arbre peut servir de repère."],
         ["a) Faux — il montre l'Est", "b) Vrai", "c) Faux — à midi il est haut dans le ciel",
          "d) Vrai"]),
        ("Relie chaque position à ce qu'on y trouve quand le bras droit montre l'Est.",
         ["Devant soi", "Derrière soi", "À sa gauche", "À sa droite"],
         ["L'Est", "L'Ouest", "Le Sud", "Le Nord"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Que montre le bras droit quand on le tend vers le soleil levant ?",
          "b) Où est le Nord dans cette position ?",
          "c) Pourquoi un grand arbre est-il utile ?",
          "d) Pourquoi ne dit-on pas seulement « à gauche » ?"],
         ["a) Il montre l'Est.", "b) Il est devant nous.",
          "c) Parce qu'il sert de repère que l'on voit de loin.",
          "d) Parce que la gauche et la droite changent selon l'endroit où l'on se tient."]),
    ],
    consigne_ex5="Dans la cour de l'école, place-toi bras droit vers le soleil levant puis "
                 "écris le nom de ce que tu vois dans chaque direction.",
    corrige_ex5="Devant : le Nord — derrière : le Sud — à gauche : l'Ouest — à droite : l'Est ; "
                "les réponses varient selon ce que l'on voit dans la cour.",
),

# ═══════════════════════════ SÉANCE 4 ═══════════════════════════
dict(
    n=4, semaine=2, titre="Les directions intermédiaires",
    objectif="Reconnaître et nommer les quatre directions intermédiaires : Nord-Est, Nord-Ouest, "
             "Sud-Est, Sud-Ouest.",
    materiel="Rose des vents à 8 directions, schéma des points cardinaux, ardoise, cahier.",
    revision=[("Cite les quatre points cardinaux.", "R.A. : Nord, Sud, Est, Ouest."),
              ("Comment fait-on pour trouver le Nord le matin ?",
               "R.A. : On tend le bras droit vers le soleil levant, le Nord est devant nous.")],
    mes=("Entre le Nord et l'Est, est-ce qu'il y a quelque chose ?",
         "R.A. : Oui, une direction entre les deux."),
    analyse=[
        ("Comment appelle-t-on la direction placée entre le Nord et l'Est ?",
         "R.A. : Le Nord-Est."),
        ("Comment appelle-t-on la direction placée entre le Nord et l'Ouest ?",
         "R.A. : Le Nord-Ouest."),
        ("Et celle placée entre le Sud et l'Est ?", "R.A. : Le Sud-Est."),
        ("Et celle placée entre le Sud et l'Ouest ?", "R.A. : Le Sud-Ouest."),
        ("Combien de directions compte la rose des vents en tout ?",
         "R.A. : Huit : quatre points cardinaux et quatre directions intermédiaires.")],
    synthese="Donc, entre deux points cardinaux, il y a une direction intermédiaire. On la "
             "nomme en mettant d'abord le Nord ou le Sud, puis l'Est ou l'Ouest : Nord-Est, "
             "Nord-Ouest, Sud-Est, Sud-Ouest. Avec les quatre points cardinaux, cela fait huit "
             "directions sur la rose des vents.",
    application=("Complète : entre le Nord et l'Est, c'est le …… ; entre le Sud et l'Ouest, "
                 "c'est le …… ; entre le Nord et l'Ouest, c'est le …… ; entre le Sud et l'Est, "
                 "c'est le ……",
                 "Nord-Est ; Sud-Ouest ; Nord-Ouest ; Sud-Est."),
    evaluation=("1. Réponds par vrai ou faux : a) Le Nord-Est est entre le Nord et l'Est. "
                "b) Il y a huit directions sur la rose des vents. c) Le Sud-Est est entre le "
                "Sud et l'Ouest. d) On dit « Est-Nord ».\n"
                "2. Cite les quatre directions intermédiaires.",
                "1. a) Vrai — b) Vrai — c) Faux — d) Faux.\n"
                "2. Nord-Est, Nord-Ouest, Sud-Est, Sud-Ouest."),
    lecon_titre="Les quatre directions intermédiaires",
    sections=[
        ("1. Entre deux points cardinaux",
         "Les quatre points cardinaux ne suffisent pas toujours. Quand Hery veut dire que le "
         "marché se trouve à la fois vers le Nord et vers l'Est, il a besoin d'une nouvelle "
         "direction : le Nord-Est. Cette direction est placée exactement au milieu, entre le "
         "Nord et l'Est.",
         ("img_s04_a.png", "Figure 1 — La rose des vents avec ses huit directions.", 520)),
        ("2. Le nom des directions intermédiaires",
         "Il y a quatre directions intermédiaires : le Nord-Est (entre le Nord et l'Est), le "
         "Nord-Ouest (entre le Nord et l'Ouest), le Sud-Est (entre le Sud et l'Est) et le "
         "Sud-Ouest (entre le Sud et l'Ouest). On les écrit avec un trait d'union.", None),
        ("3. Comment les nommer sans se tromper ?",
         "La règle est simple : on commence toujours par le Nord ou par le Sud, jamais par "
         "l'Est ou par l'Ouest. On dit donc « Nord-Est » et non pas « Est-Nord ». "
         "Si l'on retient cette règle, on ne se trompe plus.", None),
        ("4. À quoi servent-elles ?",
         "Les directions intermédiaires servent à indiquer un chemin plus précis. Au lieu de "
         "dire « la rivière est au Nord », on peut dire « la rivière est au Nord-Est », "
         "ce qui est beaucoup plus exact. Les cultivateurs s'en servent pour décrire leurs "
         "parcelles et les pêcheurs pour décrire leur route en mer.", None),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Sur une boussole, les huit directions sont dessinées sur un cadran rond appelé "
             "« rose des vents ». Les marins du monde entier utilisent la même rose, avec "
             "les mêmes huit directions."),
    resume=[
        "Entre deux points cardinaux, il y a une direction intermédiaire.",
        "Les quatre directions intermédiaires sont le Nord-Est, le Nord-Ouest, le Sud-Est et le Sud-Ouest.",
        "On les nomme toujours en commençant par le Nord ou par le Sud : on dit Nord-Est, et non Est-Nord.",
        "Avec les quatre points cardinaux, la rose des vents compte donc huit directions.",
        "Ces directions permettent d'indiquer un chemin de façon plus précise.",
    ],
    lexique=[("Nord-Est", "La direction placée entre le Nord et l'Est."),
             ("Nord-Ouest", "La direction placée entre le Nord et l'Ouest."),
             ("Sud-Est", "La direction placée entre le Sud et l'Est."),
             ("Sud-Ouest", "La direction placée entre le Sud et l'Ouest."),
             ("Direction intermédiaire", "Une direction placée entre deux points cardinaux.")],
    exercices=[
        ("Complète avec : Nord-Est — Nord-Ouest — Sud-Est — Sud-Ouest",
         ["a) Entre le Nord et l'Est : le ……", "b) Entre le Nord et l'Ouest : le ……",
          "c) Entre le Sud et l'Est : le ……", "d) Entre le Sud et l'Ouest : le ……"],
         ["a) le Nord-Est", "b) le Nord-Ouest", "c) le Sud-Est", "d) le Sud-Ouest"]),
        ("Réponds par vrai ou faux.",
         ["a) On dit « Nord-Est » et non « Est-Nord ».",
          "b) Il y a quatre directions intermédiaires.",
          "c) Le Sud-Est est entre le Sud et l'Ouest.",
          "d) La rose des vents compte huit directions."],
         ["a) Vrai", "b) Vrai", "c) Faux — c'est entre le Sud et l'Est", "d) Vrai"]),
        ("Relie chaque direction à sa position.",
         ["Nord-Est", "Nord-Ouest", "Sud-Est", "Sud-Ouest"],
         ["Entre le Nord et l'Ouest", "Entre le Sud et l'Ouest",
          "Entre le Nord et l'Est", "Entre le Sud et l'Est"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Combien y a-t-il de directions intermédiaires ?",
          "b) Par quel mot commence toujours leur nom ?",
          "c) Où se place le Nord-Ouest ?",
          "d) Pourquoi utilise-t-on ces directions ?"],
         ["a) Il y en a quatre.", "b) Par le Nord ou par le Sud.",
          "c) Entre le Nord et l'Ouest.",
          "d) Pour indiquer une direction plus précise."]),
    ],
    consigne_ex5="Observe la rose des vents ci-dessous et écris le nom des quatre directions "
                 "intermédiaires à leur place.",
    corrige_ex5="En haut à droite : Nord-Est — en haut à gauche : Nord-Ouest — en bas à "
                "droite : Sud-Est — en bas à gauche : Sud-Ouest.",
),

# ═══════════════════════════ SÉANCE 5 ═══════════════════════════
dict(
    n=5, semaine=2, titre="Le tracé de la rose des vents",
    objectif="Dessiner une rose des vents à l'aide des points cardinaux et des directions "
             "intermédiaires.",
    materiel="Modèle de rose des vents à 8 directions, règle, compas (ou un "
                 "couvercle rond), crayon, gomme, ardoise, cahier.",
    revision=[("Cite les quatre directions intermédiaires.",
               "R.A. : Nord-Est, Nord-Ouest, Sud-Est, Sud-Ouest."),
              ("Combien de directions compte la rose des vents ?", "R.A. : Huit.")],
    mes=("À quoi ressemble l'objet qui porte toutes les directions ?",
         "R.A. : À une rose, avec des branches dans tous les sens."),
    analyse=[
        ("Par quoi commence-t-on quand on trace une rose des vents ?",
         "R.A. : Par une croix : une ligne Nord-Sud et une ligne Est-Ouest."),
        ("Où place-t-on le Nord sur la feuille ?", "R.A. : En haut."),
        ("Que trace-t-on ensuite ?",
         "R.A. : Les quatre directions intermédiaires, en diagonale."),
        ("Que fait-on pour terminer ?",
         "R.A. : On trace un cercle et on écrit les lettres N, S, E, O."),
        ("Pourquoi trace-t-on un cercle ?",
         "R.A. : Pour que toutes les directions aient la même longueur et que la rose soit "
         "belle et régulière.")],
    synthese="Donc, pour tracer une rose des vents, on fait trois étapes : d'abord une croix "
             "avec le Nord en haut, le Sud en bas, l'Est à droite et l'Ouest à gauche ; ensuite "
             "les quatre diagonales des directions intermédiaires ; enfin un cercle et les "
             "lettres N, S, E, O autour.",
    application=("Sur ton ardoise, trace la croix Nord-Sud et Est-Ouest, puis ajoute les quatre "
                 "directions intermédiaires.",
                 "Croix verticale N (haut) / S (bas) et horizontale E (droite) / O (gauche), "
                 "puis quatre diagonales : NE, NO, SE, SO."),
    evaluation=("1. Réponds par vrai ou faux : a) Le Nord se place en haut de la rose. "
                "b) L'Est se place à gauche. c) On trace le cercle en premier. "
                "d) On écrit les lettres N, S, E, O autour de la rose.\n"
                "2. Trace une rose des vents complète sur ton ardoise.",
                "1. a) Vrai — b) Faux — c) Faux — d) Vrai.\n"
                "2. Croix + quatre diagonales + cercle + lettres N, S, E, O."),
    lecon_titre="Tracer une rose des vents",
    sections=[
        ("1. La rose des vents, un outil pour lire les directions",
         "La rose des vents est un dessin rond qui rassemble les huit directions. On la trouve "
         "sur les cartes, sur les boussoles et dans les manuels. Elle permet de lire d'un seul "
         "coup d'œil de quel côté se trouve chaque direction.",
         ("img_s05_a.png", "Figure 1 — Tracer une rose des vents en trois étapes.", 660)),
        ("2. Première étape : la croix",
         "On commence par tracer une croix au milieu de la feuille. La ligne verticale porte le "
         "Nord en haut et le Sud en bas. La ligne horizontale porte l'Ouest à gauche et l'Est à "
         "droite. Il faut tracer à la règle, pour que les lignes soient bien droites.", None),
        ("3. Deuxième étape : les diagonales",
         "Ensuite, on trace quatre traits en diagonale, au milieu de chaque quartier : ce sont "
         "les directions intermédiaires. En haut à droite, on place le Nord-Est ; en haut à "
         "gauche, le Nord-Ouest ; en bas à droite, le Sud-Est ; en bas à gauche, le Sud-Ouest.",
         None),
        ("4. Troisième étape : le cercle et les lettres",
         "Pour finir, on trace un cercle au compas autour de la croix, et on écrit les lettres "
         "N, S, E et O au bout des quatre branches principales. La rose est alors complète : "
         "elle peut servir à lire un plan ou une carte.", None),
    ],
    encadre=("rouge", "Attention !",
             "Sur presque toutes les cartes, le Nord est placé en haut. C'est une convention : "
             "si tu vois une carte sans rose des vents, tu peux considérer que le haut de la "
             "feuille est le Nord."),
    resume=[
        "La rose des vents est un dessin rond qui rassemble les huit directions.",
        "On la trace en trois étapes : d'abord la croix Nord-Sud et Est-Ouest.",
        "Ensuite, on trace les quatre diagonales des directions intermédiaires.",
        "Enfin, on trace un cercle et on écrit les lettres N, S, E et O.",
        "Sur presque toutes les cartes, le Nord est placé en haut de la feuille.",
    ],
    lexique=[("Rose des vents", "Un dessin rond qui rassemble les huit directions."),
             ("Croix", "Deux traits qui se coupent : ici, la ligne Nord-Sud et la ligne "
                       "Est-Ouest."),
             ("Diagonale", "Un trait oblique, placé entre deux directions."),
             ("Compas", "L'instrument qui sert à tracer un cercle.")],
    exercices=[
        ("Complète avec : croix — diagonales — cercle — lettres",
         ["a) On commence par tracer une ……", "b) On ajoute ensuite les quatre ……",
          "c) On trace un …… autour.", "d) On écrit les …… N, S, E, O."],
         ["a) une croix", "b) diagonales", "c) un cercle", "d) lettres"]),
        ("Réponds par vrai ou faux.",
         ["a) Le Nord se place en haut de la rose des vents.",
          "b) On trace le cercle avant la croix.",
          "c) Le Nord-Ouest se place en haut à gauche.",
          "d) La rose des vents sert à lire les directions."],
         ["a) Vrai", "b) Faux — la croix vient d'abord", "c) Vrai", "d) Vrai"]),
        ("Relie chaque étape à ce que l'on fait.",
         ["Première étape", "Deuxième étape", "Troisième étape", "À la fin"],
         ["Tracer le cercle", "Écrire les lettres N, S, E, O",
          "Tracer la croix", "Tracer les diagonales"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Par quoi commence-t-on une rose des vents ?",
          "b) Où place-t-on l'Ouest ?",
          "c) Combien de diagonales trace-t-on ?",
          "d) Pourquoi place-t-on le Nord en haut ?"],
         ["a) On commence par tracer une croix.", "b) À gauche de la rose.",
          "c) On en trace quatre.",
          "d) Parce que c'est la convention de toutes les cartes."]),
    ],
    consigne_ex5="Reproduis la rose des vents ci-dessous sur ton ardoise, en respectant les "
                 "trois étapes.",
    corrige_ex5="Croix Nord-Sud et Est-Ouest, quatre diagonales pour NE, NO, SE, SO, puis un "
                "cercle et les lettres N, S, E, O.",
),
]

# ═══════════════════════════ SÉANCE 6 ═══════════════════════════
SEANCES.append(dict(
    n=6, semaine=2, titre="La rose des vents et l'orientation",
    objectif="Utiliser la rose des vents pour dire où se trouvent les lieux et suivre un "
             "itinéraire simple.",
    materiel="Plan simple du village avec sa rose des vents, ardoise et craie, cahier.",
    revision=[("Combien de directions compte la rose des vents ?", "R.A. : Huit."),
              ("Cite deux directions intermédiaires.",
               "R.A. : Le Nord-Est et le Sud-Ouest, par exemple.")],
    mes=("Si tu veux expliquer à un camarade comment venir chez toi, que lui dis-tu ?",
         "R.A. : Tu lui dis dans quelle direction aller."),
    analyse=[
        ("Où se trouve l'école par rapport à la maison sur le plan ?",
         "R.A. : L'école se trouve à l'Est de la maison."),
        ("Comment le vois-tu sur le plan ?",
         "R.A. : Parce que l'école est dessinée du côté de la lettre E."),
        ("Où se trouve le marché par rapport à l'école ?",
         "R.A. : Le marché se trouve au Sud de l'école."),
        ("Si je vais de la maison vers l'école, dans quelle direction je marche ?",
         "R.A. : Je marche vers l'Est."),
        ("À quoi sert la rose des vents dessinée sur le plan ?",
         "R.A. : Elle indique de quel côté est le Nord, donc elle permet de lire toutes les "
         "autres directions.")],
    synthese="Donc, la rose des vents placée sur un plan sert à lire les directions. Grâce à "
             "elle, on peut dire : « l'école est à l'Est de la maison », ou encore "
             "« le marché est au Sud de l'école ». C'est ainsi que l'on décrit un "
             "itinéraire sans se tromper.",
    application=("Sur le plan, réponds : a) Où est l'école par rapport à la maison ? "
                 "b) Où est le marché par rapport à l'école ? c) Dans quelle direction va-t-on "
                 "en allant de la maison à l'école ? d) De quel côté est le Nord ?",
                 "a) À l'Est — b) Au Sud — c) Vers l'Est — d) En haut du plan."),
    evaluation=("1. Réponds par vrai ou faux : a) La rose des vents indique le Nord. "
                "b) Sur un plan, le Nord est en bas. c) On peut décrire un itinéraire avec les "
                "directions. d) L'école est à l'Ouest de la maison.\n"
                "2. Décris en une phrase le chemin de la maison à l'école.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Faux.\n"
                "2. Exemple : « Je marche de la maison vers l'Est et j'arrive à l'école. »"),
    lecon_titre="Lire les directions sur un plan",
    sections=[
        ("1. La rose des vents sur un plan",
         "Quand on dessine un plan, on place toujours une petite rose des vents dans un coin. "
         "Cette rose indique de quel côté se trouve le Nord. Sans elle, on ne saurait pas "
         "lire le plan : on pourrait le tourner dans tous les sens sans comprendre.",
         ("img_s06_a.png", "Figure 1 — Un plan simple du village avec sa rose des vents.", 660)),
        ("2. Dire où se trouve un lieu",
         "Grâce à la rose, on peut dire où se trouve chaque lieu par rapport à un autre. On "
         "dit : « l'école est à l'Est de la maison ». Cela signifie que, sur le plan, "
         "l'école est dessinée du côté de l'Est par rapport à la maison.", None),
        ("3. Décrire un itinéraire",
         "Les directions servent aussi à décrire un chemin : « je pars de la maison, je "
         "marche vers l'Est, puis je tourne vers le Sud pour aller au marché ». Celui qui "
         "écoute peut suivre le chemin sans le voir.", None),
        ("4. Toujours vérifier le Nord",
         "Avant de lire un plan, il faut toujours chercher la rose des vents et repérer le "
         "Nord. C'est le premier réflexe. Si le plan n'a pas de rose, on considère que le haut "
         "de la feuille est le Nord.", None),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Les plans de villages et les cartes de Madagascar sont toujours dessinés avec le "
             "Nord en haut. C'est pour cela que l'on dit souvent que « le Nord est en haut "
             "» de la feuille."),
    resume=[
        "Sur un plan, une petite rose des vents indique de quel côté se trouve le Nord.",
        "Grâce à elle, on peut dire où se trouve chaque lieu : « l'école est à l'Est de la maison ».",
        "Les directions servent aussi à décrire un itinéraire que quelqu'un d'autre peut suivre.",
        "Avant de lire un plan, il faut toujours chercher la rose et repérer le Nord.",
        "Si le plan n'a pas de rose, on considère que le haut de la feuille est le Nord.",
    ],
    lexique=[("Rose des vents (sur un plan)", "Le petit dessin qui indique les directions "
                                              "sur un plan ou une carte."),
             ("Itinéraire", "Le chemin que l'on suit pour aller d'un lieu à un autre."),
             ("Par rapport à", "Permet de dire où se trouve un lieu en prenant un autre lieu "
                               "comme repère.")],
    exercices=[
        ("Complète avec : Est — Ouest — Nord — Sud",
         ["a) Sur le plan, l'école est à l'…… de la maison.",
          "b) Le marché est au …… de l'école.",
          "c) La maison est à l'…… de l'école.",
          "d) Sur un plan, le …… est placé en haut."],
         ["a) à l'Est", "b) au Sud", "c) à l'Ouest", "d) le Nord"]),
        ("Réponds par vrai ou faux.",
         ["a) La rose des vents sert à lire les directions sur un plan.",
          "b) On place le Sud en haut d'un plan.",
          "c) Un itinéraire se décrit avec les directions.",
          "d) Sans rose des vents, on ne peut pas lire un plan."],
         ["a) Vrai", "b) Faux", "c) Vrai",
          "d) Vrai — ou alors on admet que le haut est le Nord"]),
        ("Relie chaque lieu à sa position sur le plan.",
         ["L'école", "Le marché", "La maison", "Le Nord"],
         ["En haut du plan", "À l'Est de la maison", "Au Sud de l'école",
          "À l'Ouest de l'école"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Que indique la rose des vents sur un plan ?",
          "b) Où se trouve l'école par rapport à la maison ?",
          "c) Dans quelle direction marche-t-on pour aller à l'école ?",
          "d) Que fait-on quand un plan n'a pas de rose des vents ?"],
         ["a) Elle indique de quel côté est le Nord.",
          "b) Elle se trouve à l'Est de la maison.", "c) On marche vers l'Est.",
          "d) On considère que le haut de la feuille est le Nord."]),
    ],
    consigne_ex5="Observe le plan ci-dessous et écris, pour chaque lieu, de quel côté il se "
                 "trouve par rapport à l'école.",
    corrige_ex5="La maison est à l'Ouest de l'école ; le marché est au Sud de l'école ; "
                "le Nord est en haut du plan.",
))

# ═══════════════════════════ SÉANCE 7 ═══════════════════════════
SEANCES.append(dict(
    n=7, semaine=3, titre="Les éléments d'un plan : titre, échelle, légende",
    objectif="Identifier les éléments d'un plan : le titre, l'échelle et la légende.",
    materiel="Plan de la classe affiché au tableau, plan de l'école, ardoise et craie, cahier.",
    revision=[("À quoi sert la rose des vents sur un plan ?",
               "R.A. : Elle indique de quel côté est le Nord."),
              ("Où place-t-on le Nord sur un plan ?", "R.A. : En haut.")],
    mes=("Quand tu ouvres un livre, comment sais-tu de quoi il parle ?",
         "R.A. : En lisant son titre."),
    analyse=[
        ("Que doit toujours porter un plan, en haut ?", "R.A. : Un titre."),
        ("Que nous apprend le titre du plan ?",
         "R.A. : Il nous dit ce que représente le plan : la classe, l'école, le village."),
        ("À quoi sert l'échelle ?",
         "R.A. : Elle dit de combien le plan a été réduit par rapport à la réalité."),
        ("À quoi sert la légende ?",
         "R.A. : Elle explique ce que signifient les couleurs et les signes du plan."),
        ("Que manque-t-il à un plan sans titre ni légende ?",
         "R.A. : On ne peut pas savoir ce qu'il représente ni lire ses signes.")],
    synthese="Donc, tout plan porte trois éléments obligatoires : un titre qui dit ce que l'on "
             "voit, une échelle qui dit de combien le dessin a été réduit, et une légende qui "
             "explique les couleurs et les signes. Sans ces trois éléments, un plan n'est "
             "qu'un dessin.",
    application=("Montre sur le plan de la classe : a) son titre, b) son échelle, c) sa légende, "
                 "d) sa rose des vents.",
                 "a) « Plan de la classe de 9e » — b) 1 cm = 1 m — "
                 "c) les couleurs des meubles — d) en bas à droite."),
    evaluation=("1. Réponds par vrai ou faux : a) Un plan doit avoir un titre. b) L'échelle "
                "sert à décorer le plan. c) La légende explique les signes. d) On peut lire un "
                "plan sans légende.\n"
                "2. Cite les trois éléments obligatoires d'un plan.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Faux.\n"
                "2. Le titre, l'échelle et la légende."),
    lecon_titre="Lire un plan : le titre, l'échelle et la légende",
    sections=[
        ("1. Le titre du plan",
         "Le titre est écrit en haut du plan. Il dit ce que le plan représente : « Plan "
         "de la classe de 9e », « Plan de l'école », « Plan du village ». "
         "Sans titre, on ne sait pas ce que l'on regarde : c'est comme un livre sans couverture.",
         ("img_s07_a.png", "Figure 1 — Le titre, l'échelle et la légende d'un plan.", 660)),
        ("2. L'échelle du plan",
         "Une classe mesure plusieurs mètres ; on ne peut pas la dessiner en vraie grandeur sur "
         "une feuille. On la réduit. L'échelle dit de combien : « 1 cm = 1 m » signifie "
         "qu'un centimètre sur la feuille représente un mètre dans la réalité. Grâce à "
         "l'échelle, on peut mesurer sur le plan et savoir la vraie dimension.",
         None),
        ("3. La légende du plan",
         "Sur un plan, les objets sont dessinés avec des couleurs ou des signes. La légende est "
         "la petite case qui explique ces signes : le bleu pour le tableau, le marron pour la "
         "porte, le vert pour les plantes. C'est le dictionnaire du plan.", None),
        ("4. Un plan complet",
         "Un plan complet porte donc : un titre, une échelle, une légende et une rose des "
         "vents. Quand Soa dessine le plan de sa classe, elle n'oublie aucun de ces éléments, "
         "sinon son camarade ne pourra pas le lire.", None),
    ],
    encadre=("rouge", "Attention !",
             "Ne confonds pas un plan et un dessin. Un dessin montre les choses comme on les "
             "voit de côté ; un plan les montre vues d'en haut, comme si l'on était un oiseau "
             "qui regarde le sol."),
    resume=[
        "Tout plan porte trois éléments obligatoires : un titre, une échelle et une légende.",
        "Le titre dit ce que le plan représente : la classe, l'école ou le village.",
        "L'échelle indique de combien le dessin a été réduit, par exemple 1 cm pour 1 m.",
        "La légende explique les couleurs et les signes utilisés sur le plan.",
        "Un plan représente un lieu vu d'en haut, comme si on le regardait depuis le ciel.",
    ],
    lexique=[("Titre (d'un plan)", "Le texte écrit en haut qui dit ce que le plan représente."),
             ("Échelle", "Le rapport entre la longueur sur le plan et la longueur réelle ; "
                         "par exemple 1 cm = 1 m."),
             ("Légende", "La petite case qui explique les couleurs et les signes du plan."),
             ("Plan", "Un dessin qui représente un lieu vu d'en haut.")],
    exercices=[
        ("Complète avec : titre — échelle — légende — plan",
         ["a) Le …… dit ce que représente le dessin.",
          "b) L'…… indique de combien le dessin a été réduit.",
          "c) La …… explique les couleurs et les signes.",
          "d) Un …… représente un lieu vu d'en haut."],
         ["a) Le titre", "b) L'échelle", "c) La légende", "d) Un plan"]),
        ("Réponds par vrai ou faux.",
         ["a) « 1 cm = 1 m » est une échelle.",
          "b) On peut se passer de titre sur un plan.",
          "c) La légende explique les signes.",
          "d) Un plan montre les objets vus de côté."],
         ["a) Vrai", "b) Faux", "c) Vrai", "d) Faux — il les montre vus d'en haut"]),
        ("Relie chaque élément à son rôle.",
         ["Le titre", "L'échelle", "La légende", "La rose des vents"],
         ["Explique les signes", "Indique le Nord", "Dit ce que représente le plan",
          "Dit de combien le plan est réduit"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Cite les trois éléments obligatoires d'un plan.",
          "b) Que signifie « 1 cm = 1 m » ?",
          "c) Où écrit-on le titre d'un plan ?",
          "d) Pourquoi un plan a-t-il besoin d'une légende ?"],
         ["a) Le titre, l'échelle et la légende.",
          "b) Cela signifie qu'un centimètre sur le plan vaut un mètre dans la réalité.",
          "c) En haut du plan.", "d) Pour que l'on comprenne ses signes et ses couleurs."]),
    ],
    consigne_ex5="Observe le plan ci-dessous et entoure son titre, son échelle et sa légende.",
    corrige_ex5="Le titre est en haut (« Plan de la classe de 9e »), l'échelle est "
                "en bas à gauche (« 1 cm = 1 m ») et la légende est dans la case en "
                "bas à droite.",
))

# ═══════════════════════════ SÉANCE 8 ═══════════════════════════
SEANCES.append(dict(
    n=8, semaine=3, titre="Le mobilier de la classe sur le plan",
    objectif="Reconnaître les principaux meubles de la classe sur un plan et les orienter "
             "avec les points cardinaux.",
    materiel="Plan de la classe affiché au tableau, ardoise et craie, cahier.",
    revision=[("Cite les trois éléments obligatoires d'un plan.",
               "R.A. : Le titre, l'échelle et la légende."),
              ("De quel côté place-t-on le Nord sur un plan ?", "R.A. : En haut.")],
    mes=("Ferme les yeux : où se trouve le tableau dans notre classe ?",
         "R.A. : Devant nous, au mur du fond."),
    analyse=[
        ("Quels sont les meubles que l'on voit dans notre classe ?",
         "R.A. : Le tableau, le bureau du maître, les tables des élèves, les chaises, "
         "l'armoire."),
        ("Où se trouve le tableau sur le plan ?",
         "R.A. : En haut du plan, donc du côté du Nord."),
        ("Où se trouve la porte ?", "R.A. : Sur le côté, à l'Ouest du plan."),
        ("Où se trouvent les fenêtres ?", "R.A. : Sur le mur de droite, à l'Est."),
        ("Comment le plan nous le montre-t-il ?",
         "R.A. : Chaque meuble est dessiné à sa place, avec la forme et la couleur de la "
         "légende.")],
    synthese="Donc, sur le plan de la classe, chaque meuble est dessiné à la place qu'il "
             "occupe vraiment : le tableau en haut, du côté du Nord ; le bureau du maître "
             "devant le tableau ; les tables des élèves en rangées ; la porte et les fenêtres "
             "sur les murs. On peut dire où se trouve chaque meuble avec les points cardinaux.",
    application=("Sur le plan de la classe, réponds : a) Au Nord, qu'y a-t-il ? b) Où est la "
                 "porte ? c) Où sont les tables des élèves ? d) Où est le bureau du maître ?",
                 "a) Le tableau — b) À l'Ouest — c) Au centre, en rangées — "
                 "d) Devant le tableau."),
    evaluation=("1. Réponds par vrai ou faux : a) Le tableau est au Nord. b) La porte est "
                "en haut du plan. c) Les tables sont en rangées. d) Le bureau du maître est "
                "devant le tableau.\n"
                "2. Cite quatre meubles de la classe.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n"
                "2. Le tableau, le bureau du maître, les tables, les chaises."),
    lecon_titre="Le plan de notre classe",
    sections=[
        ("1. La classe vue d'en haut",
         "Quand on dessine la classe vue d'en haut, on voit les meubles comme posés sur le sol "
         "et aplatis : les tables deviennent des rectangles, le tableau devient une ligne "
         "épaisse contre le mur, les chaises deviennent de petits carrés. C'est cette vue "
         "d'en haut que l'on appelle un plan.",
         ("img_s08_a.png", "Figure 1 — Le plan de la classe avec son mobilier.", 660)),
        ("2. Les meubles et leur place",
         "Le tableau est fixé au mur du fond, en haut du plan. Devant lui, il y a l'estrade et "
         "le bureau du maître. Les tables des élèves sont rangées en lignes, face au tableau. "
         "La porte s'ouvre dans un mur, et les fenêtres percent un autre mur.", None),
        ("3. Orienter les meubles",
         "Grâce aux points cardinaux, on peut dire où se trouve chaque meuble : « le "
         "tableau est au Nord de la classe », « la porte est à l'Ouest », "
         "« les fenêtres sont à l'Est ». Ces phrases restent vraies pour toute "
         "l'année.", None),
        ("4. Pourquoi faire un plan de la classe ?",
         "Le plan de la classe sert à ranger la salle, à placer un nouvel élève, à "
         "expliquer à un remplaçant où sont les affaires. C'est aussi le premier plan que "
         "l'on apprend à lire avant de lire le plan de l'école et celui du village.", None),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Dans les écoles malgaches, l'estrade et le bureau du maître sont presque toujours "
             "du côté du tableau, face aux élèves. C'est pour cela que le haut du plan de "
             "classe est toujours le côté du tableau."),
    resume=[
        "Le plan de la classe montre les meubles vus d'en haut.",
        "Le tableau est fixé au mur du fond, en haut du plan, du côté du Nord.",
        "Devant lui se trouvent l'estrade et le bureau du maître.",
        "Les tables des élèves sont rangées en lignes, face au tableau ; la porte s'ouvre dans un mur de côté.",
        "Grâce aux points cardinaux, on peut dire où se trouve chaque meuble, et cela reste vrai toute l'année.",
    ],
    lexique=[("Mobilier", "L'ensemble des meubles d'une pièce : tables, chaises, armoire."),
             ("Estrade", "La petite plate-forme sur laquelle est placé le bureau du maître."),
             ("Rangée", "Une ligne de tables placées les unes derrière les autres."),
             ("Rectangulaire", "Qui a la forme d'un rectangle, comme une table vue d'en haut.")],
    exercices=[
        ("Complète avec : tableau — porte — fenêtres — bureau",
         ["a) Le …… est fixé au mur du fond.",
          "b) La …… s'ouvre dans un mur de côté.",
          "c) Les …… laissent entrer la lumière.",
          "d) Le …… du maître est devant le tableau."],
         ["a) Le tableau", "b) La porte", "c) Les fenêtres", "d) Le bureau"]),
        ("Réponds par vrai ou faux.",
         ["a) Le tableau est au Nord de la classe.",
          "b) Les tables des élèves sont derrière le tableau.",
          "c) La porte est dessinée sur le plan.",
          "d) Un plan montre la classe vue d'en haut."],
         ["a) Vrai", "b) Faux — elles sont face au tableau", "c) Vrai", "d) Vrai"]),
        ("Relie chaque meuble à sa place sur le plan.",
         ["Le tableau", "Le bureau du maître", "Les tables", "La porte"],
         ["Sur un mur de côté", "En haut du plan", "En rangées au centre",
          "Devant le tableau"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Où se trouve le tableau ?",
          "b) Où se trouve le bureau du maître ?",
          "c) Comment sont rangées les tables ?",
          "d) À quoi sert le plan de la classe ?"],
         ["a) Il se trouve au Nord, en haut du plan.",
          "b) Il est devant le tableau, sur l'estrade.",
          "c) Elles sont rangées en lignes, face au tableau.",
          "d) Il sert à ranger la salle et à savoir où sont les affaires."]),
    ],
    figure_ex=("img_s08_a.png", "Figure 2 — Légende le plan de la classe.", 640),
    consigne_ex5="Observe le plan de la classe et écris le nom de chaque meuble à sa place.",
    corrige_ex5="Tableau en haut (Nord), estrade et bureau du maître devant le tableau, tables "
                "des élèves en trois rangées, porte à l'Ouest, fenêtres à l'Est.",
))

# ═══════════════════════════ SÉANCE 9 ═══════════════════════════
SEANCES.append(dict(
    n=9, semaine=3, titre="La lecture du plan de la classe",
    objectif="Lire les éléments du plan et décrire leur position respective.",
    materiel="Plan de la classe affiché au tableau, plan de la classe par élève, ardoise et "
             "craie, cahier.",
    revision=[("Cite les trois éléments obligatoires d'un plan.",
               "R.A. : Le titre, l'échelle et la légende."),
              ("Où se trouve le tableau sur le plan de la classe ?",
               "R.A. : En haut, du côté du Nord.")],
    mes=("Quand on te donne un plan que tu n'as jamais vu, que fais-tu d'abord ?",
         "R.A. : On lit son titre."),
    analyse=[
        ("Que nous apprend le titre du plan ?",
         "R.A. : Il nous dit que c'est le plan de la classe."),
        ("Que nous apprend la légende ?",
         "R.A. : Elle nous dit ce que représentent les couleurs et les signes."),
        ("Où se trouve la porte par rapport aux tables ?",
         "R.A. : Elle se trouve à l'Ouest des tables."),
        ("Où se trouve le bureau du maître par rapport au tableau ?",
         "R.A. : Il se trouve devant le tableau, donc au Sud du tableau."),
        ("Comment fait-on pour savoir la longueur réelle de la classe ?",
         "R.A. : On mesure sur le plan, puis on utilise l'échelle.")],
    synthese="Donc, lire un plan, c'est répondre à trois questions. Qu'est-ce que c'est ? Le "
             "titre le dit. Où sont les choses ? Les points cardinaux et la légende le disent. "
             "Quelle est la grandeur réelle ? L'échelle le permet.",
    application=("Sur le plan, réponds : a) Quel est le titre ? b) Où est la porte ? "
                 "c) Que représente la couleur bleue dans la légende ? d) Combien mesure la "
                 "classe si le plan fait 8 cm ?",
                 "a) « Plan de la classe de 9e » — b) À l'Ouest — "
                 "c) Le tableau — d) 8 mètres."),
    evaluation=("1. Réponds par vrai ou faux : a) On lit d'abord le titre. b) La légende est "
                "inutile. c) L'échelle donne les grandeurs réelles. d) On peut dire où sont "
                "les meubles avec les points cardinaux.\n"
                "2. Décris en deux phrases la position du bureau du maître.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n"
                "2. Exemple : « Le bureau du maître est devant le tableau. Il est donc "
                "au Sud du tableau. »"),
    lecon_titre="Lire le plan de la classe",
    sections=[
        ("1. Trois questions pour lire un plan",
         "Lire un plan, c'est répondre à trois questions. La première est : qu'est-ce que "
         "c'est ? Le titre répond. La deuxième est : où sont les choses ? La légende et les "
         "points cardinaux répondent. La troisième est : quelle est la grandeur réelle ? "
         "L'échelle répond.",
         ("img_s08_a.png", "Figure 1 — Le plan de la classe avec son mobilier.", 640)),
        ("2. Décrire la position des meubles",
         "Pour décrire la position d'un meuble, on le compare à un autre. On dit : « le "
         "tableau est au Nord de la classe ». On peut dire aussi : « la porte est à "
         "l'Ouest des tables ». Ces phrases restent vraies toute l'année.", None),
        ("3. Se servir de la légende",
         "La légende est le dictionnaire du plan. Elle dit que le bleu représente le tableau, "
         "le marron la porte et le vert les plantes. Sans elle, les couleurs ne veulent rien "
         "dire. Il faut donc toujours la lire avant de répondre.", None),
        ("4. Se servir de l'échelle",
         "L'échelle permet de retrouver les grandeurs réelles. Si le plan indique « 1 cm "
         "= 1 m » et que la classe mesure 8 cm sur la feuille, alors la classe fait 8 m en "
         "vrai. On mesure d'abord, puis on convertit.", None),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Les architectes et les maçons lisent des plans toute la journée. Ils utilisent "
             "les mêmes règles que toi : le titre, la légende, l'échelle et le Nord."),
    resume=[
        "Lire un plan, c'est répondre à trois questions simples.",
        "Le titre dit ce que le plan représente.",
        "La légende explique les couleurs et les signes.",
        "Les points cardinaux disent où se trouve chaque chose.",
        "L'échelle permet de retrouver les grandeurs réelles.",
    ],
    lexique=[("Lire un plan", "Comprendre ce que représente le dessin et où sont les choses."),
             ("Légende", "La case qui explique les couleurs et les signes."),
             ("Échelle", "Le rapport entre la longueur sur le plan et la longueur réelle."),
             ("Position", "La place d'un objet par rapport à un autre.")],
    exercices=[
        ("Complète avec : titre — légende — échelle — points cardinaux",
         ["a) Le …… dit ce que représente le plan.",
          "b) La …… explique les couleurs.",
          "c) L'…… donne les grandeurs réelles.",
          "d) Les …… disent où sont les choses."],
         ["a) Le titre", "b) La légende", "c) L'échelle", "d) Les points cardinaux"]),
        ("Réponds par vrai ou faux.",
         ["a) On commence toujours par lire le titre.",
          "b) La légende ne sert à rien.",
          "c) Le tableau est au Nord de la classe.",
          "d) La porte est dessinée sur le plan."],
         ["a) Vrai", "b) Faux", "c) Vrai", "d) Vrai"]),
        ("Relie chaque question à l'élément qui y répond.",
         ["Qu'est-ce que c'est ?", "Où sont les choses ?", "Quelle grandeur réelle ?",
          "Que signifie le bleu ?"],
         ["L'échelle", "Le titre", "La légende", "Les points cardinaux"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Cite les trois questions que l'on se pose en lisant un plan.",
          "b) Où se trouve la porte ?",
          "c) Que fait-on après avoir mesuré sur le plan ?",
          "d) Pourquoi la légende est-elle utile ?"],
         ["a) Qu'est-ce que c'est ? Où sont les choses ? Quelle grandeur réelle ?",
          "b) Elle se trouve à l'Ouest des tables.",
          "c) On convertit la mesure avec l'échelle.",
          "d) Parce qu'elle explique les couleurs et les signes."]),
    ],
    figure_ex=("img_s08_a.png", "Figure 2 — Le plan de la classe à lire.", 620),
    consigne_ex5="Observe le plan de la classe et écris, pour chaque meuble, où il se trouve "
                 "par rapport aux tables des élèves.",
    corrige_ex5="Le tableau est au Nord des tables ; le bureau du maître est aussi au Nord ; "
                "la porte est à l'Ouest ; les fenêtres sont à l'Est.",
))

# ═══════════════════════════ SÉANCE 10 ═══════════════════════════
SEANCES.append(dict(
    n=10, semaine=4, titre="L'orientation du plan de la classe",
    objectif="Placer le Nord en haut du plan à l'aide d'une flèche, le Sud en bas, l'Est à "
             "droite et l'Ouest à gauche.",
    materiel="Plan de la classe à orienter, ardoise et craie, cahier.",
    revision=[("Cite les trois questions que l'on se pose en lisant un plan.",
               "R.A. : Qu'est-ce que c'est ? Où sont les choses ? Quelle grandeur réelle ?"),
              ("Où se trouve le tableau dans la classe ?", "R.A. : Au Nord.")],
    mes=("Comment savoir, sur une feuille, de quel côté est le Nord ?",
         "R.A. : En dessinant une flèche qui montre le Nord."),
    analyse=[
        ("Où place-t-on le Nord sur un plan ?", "R.A. : En haut de la feuille."),
        ("Où place-t-on le Sud ?", "R.A. : En bas de la feuille."),
        ("Où place-t-on l'Est ?", "R.A. : À droite de la feuille."),
        ("Où place-t-on l'Ouest ?", "R.A. : À gauche de la feuille."),
        ("Comment appelle-t-on le signe qui montre le Nord ?",
         "R.A. : La flèche du Nord.")],
    synthese="Donc, pour orienter un plan, on place le Nord en haut, le Sud en bas, l'Est à "
             "droite et l'Ouest à gauche. On dessine une flèche qui montre le Nord. Cette "
             "règle est la même pour tous les plans et toutes les cartes.",
    application=("Sur ton plan, dessine la flèche du Nord puis réponds : a) En haut, c'est le "
                 "… b) En bas, c'est le … c) À droite, c'est l'… d) À gauche, "
                 "c'est l'…",
                 "a) le Nord — b) le Sud — c) l'Est — d) l'Ouest."),
    evaluation=("1. Réponds par vrai ou faux : a) Le Nord est en haut. b) Le Sud est à "
                "droite. c) L'Est est à droite. d) La flèche du Nord est obligatoire.\n"
                "2. Dessine la croix des points cardinaux sur ton ardoise.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n"
                "2. Nord en haut, Sud en bas, Est à droite, Ouest à gauche."),
    lecon_titre="Orienter le plan de la classe",
    sections=[
        ("1. Pourquoi orienter un plan ?",
         "Un plan sans orientation ne veut rien dire. On pourrait le tourner dans tous les "
         "sens. L'orientation indique de quel côté est le Nord. Elle permet de dire : « la "
         "porte est à l'Ouest ».",
         ("img_s08_a.png", "Figure 1 — Le plan de la classe, avec la flèche du Nord.", 640)),
        ("2. La règle des quatre côtés",
         "La règle est toujours la même. Le Nord est en haut de la feuille. Le Sud est en bas. "
         "L'Est est à droite. L'Ouest est à gauche. Il faut la retenir une fois pour toutes.",
         None),
        ("3. La flèche du Nord",
         "On dessine une flèche dans un coin du plan. Elle pointe vers le haut et porte la "
         "lettre N. Cette flèche est le repère principal. Grâce à elle, on retrouve les "
         "trois autres directions.", None),
        ("4. Vérifier son orientation",
         "Pour vérifier, on va dans la cour le matin. On tend le bras droit vers le soleil "
         "levant. Le bras montre l'Est. On regarde ensuite de quel côté est le mur du "
         "tableau. On compare avec le plan.", None),
    ],
    encadre=("rouge", "Attention !",
             "Sur un plan, l'Est est toujours à droite et l'Ouest à gauche. Beaucoup "
             "d'élèves les confondent. Retiens que le soleil se lève à l'Est et qu'il se "
             "couche à l'Ouest."),
    resume=[
        "Orienter un plan, c'est indiquer de quel côté est le Nord.",
        "Le Nord est en haut de la feuille et le Sud en bas.",
        "L'Est est à droite et l'Ouest à gauche.",
        "Une flèche qui porte la lettre N montre le Nord.",
        "Cette règle est la même pour tous les plans et toutes les cartes.",
    ],
    lexique=[("Orienter un plan", "Indiquer de quel côté est le Nord sur le dessin."),
             ("Flèche du Nord", "Le signe en forme de flèche qui montre le Nord."),
             ("En haut / en bas", "Le bord supérieur et le bord inférieur de la feuille."),
             ("À droite / à gauche", "Les deux bords latéraux de la feuille.")],
    exercices=[
        ("Complète avec : Nord — Sud — Est — Ouest",
         ["a) En haut de la feuille, c'est le ……", "b) En bas, c'est le ……",
          "c) À droite, c'est l'……", "d) À gauche, c'est l'……"],
         ["a) le Nord", "b) le Sud", "c) l'Est", "d) l'Ouest"]),
        ("Réponds par vrai ou faux.",
         ["a) Le Nord est en haut du plan.", "b) L'Est est à gauche.",
          "c) La flèche du Nord porte la lettre N.", "d) On peut se passer d'orientation."],
         ["a) Vrai", "b) Faux — l'Est est à droite", "c) Vrai", "d) Faux"]),
        ("Relie chaque direction à sa place sur la feuille.",
         ["Le Nord", "Le Sud", "L'Est", "L'Ouest"],
         ["En bas de la feuille", "À droite de la feuille",
          "En haut de la feuille", "À gauche de la feuille"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Pourquoi faut-il orienter un plan ?",
          "b) Où place-t-on la flèche du Nord ?",
          "c) Comment vérifier son orientation dans la cour ?",
          "d) Que porte la flèche du Nord ?"],
         ["a) Pour savoir de quel côté est le Nord.",
          "b) Dans un coin du plan, tournée vers le haut.",
          "c) On tend le bras droit vers le soleil levant.",
          "d) Elle porte la lettre N."]),
    ],
    figure_ex=("img_s02_b.png", "Figure 2 — Complète la croix des points cardinaux.", 420),
    consigne_ex5="Observe la croix ci-dessous et écris le nom de chaque point cardinal à la "
                 "bonne place.",
    corrige_ex5="En haut : le Nord — en bas : le Sud — à droite : l'Est — à gauche : "
                "l'Ouest.",
))

# ═══════════════════════════ SÉANCE 11 ═══════════════════════════
SEANCES.append(dict(
    n=11, semaine=4, titre="La mesure des dimensions : du réel au plan",
    objectif="Comparer les mesures réelles de la classe et les mesures portées sur le plan.",
    materiel="Mètre ruban, règle graduée, crayon, fiche de mesures, cahier.",
    revision=[("Où place-t-on le Nord sur un plan ?", "R.A. : En haut de la feuille."),
              ("Que signifie « 1 cm = 1 m » ?",
               "R.A. : Un centimètre sur le plan vaut un mètre dans la réalité.")],
    mes=("Comment fait un maçon pour connaître la longueur d'un mur ?",
         "R.A. : Il le mesure avec un mètre."),
    analyse=[
        ("Avec quoi mesure-t-on la classe ?", "R.A. : Avec un mètre ruban."),
        ("Combien mesure la classe en vrai ?",
         "R.A. : Elle mesure 8 m de long sur 6 m de large (à vérifier)."),
        ("Combien mesure-t-elle sur le plan ?",
         "R.A. : Elle mesure 8 cm de long sur 6 cm de large."),
        ("Pourquoi les nombres sont-ils différents ?",
         "R.A. : Parce que le plan est réduit."),
        ("Comment passe-t-on du réel au plan ?",
         "R.A. : On mesure d'abord, puis on réduit les mesures.")],
    synthese="Donc, pour tracer un plan, on mesure d'abord la classe en mètres avec un mètre "
             "ruban. Ensuite, on réduit les mesures : un mètre devient un centimètre. C'est "
             "l'échelle. On peut aussi faire le chemin inverse.",
    application=("Complète : a) La classe mesure 8 m en vrai, elle mesure …… sur le plan. "
                 "b) La table mesure 1 m en vrai, elle mesure …… sur le plan. "
                 "c) Le plan mesure 6 cm, la classe mesure …… en vrai. "
                 "d) L'échelle est de 1 cm pour ……",
                 "a) 8 cm — b) 1 cm — c) 6 m — d) 1 m."),
    evaluation=("1. Réponds par vrai ou faux : a) On mesure la classe avec un mètre ruban. "
                "b) 8 m deviennent 8 cm sur le plan. c) Le plan est plus grand que la réalité. "
                "d) L'échelle est de 1 cm pour 1 m.\n"
                "2. Mesure la largeur de la porte avec un mètre ruban.",
                "1. a) Vrai — b) Vrai — c) Faux — d) Vrai.\n"
                "2. Réponse selon la classe (environ 1 m)."),
    lecon_titre="Du réel au plan : mesurer et réduire",
    sections=[
        ("1. Mesurer la classe en vrai",
         "On commence par mesurer la salle avec un mètre ruban. On mesure la longueur et la "
         "largeur. On note les résultats sur une fiche. Par exemple, la classe mesure 8 m de "
         "long sur 6 m de large.",
         ("img_s11_b.png", "Figure 1 — Mesurer en mètres, puis réduire en centimètres.", 660)),
        ("2. Réduire les mesures",
         "On ne peut pas dessiner 8 m sur une feuille. On réduit donc les mesures. Un mètre "
         "devient un centimètre. La classe de 8 m devient un rectangle de 8 cm. La largeur "
         "de 6 m devient 6 cm.", None),
        ("3. Lire l'échelle",
         "L'échelle écrit cette règle sur le plan. On lit : « 1 cm = 1 m ». Cela "
         "signifie qu'un centimètre sur la feuille représente un mètre dans la classe. "
         "Toutes les longueurs du plan suivent cette règle.", None),
        ("4. Du plan vers le réel",
         "On peut faire le chemin inverse. On mesure sur le plan avec une règle. On trouve "
         "8 cm. On sait que 1 cm vaut 1 m. La classe mesure donc 8 m en vrai. On mesure "
         "d'abord, puis on multiplie.", None),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Le mot « échelle » vient d'un mot grec qui signifie « l'escalier ». "
             "Monter d'une marche, c'est passer du plan au réel. Descendre, c'est passer du "
             "réel au plan."),
    resume=[
        "Pour tracer un plan, on mesure d'abord les dimensions réelles.",
        "On mesure la classe avec un mètre ruban, en mètres.",
        "Ensuite on réduit : un mètre devient un centimètre.",
        "L'échelle s'écrit sur le plan : 1 cm = 1 m.",
        "On peut aussi remonter du plan au réel en multipliant.",
    ],
    lexique=[("Mesurer", "Trouver la longueur d'un objet avec un instrument gradué."),
             ("Mètre ruban", "Un ruban souple gradué qui sert à mesurer les grandes "
                             "longueurs."),
             ("Réduire", "Rendre une longueur plus petite pour pouvoir la dessiner."),
             ("Dimension", "La longueur, la largeur ou la hauteur d'un objet.")],
    exercices=[
        ("Complète avec : mètre ruban — réduire — échelle — centimètre",
         ["a) On mesure la classe avec un ……",
          "b) Un mètre devient un …… sur le plan.",
          "c) Pour dessiner, il faut …… les mesures.",
          "d) La règle de réduction s'appelle l'……"],
         ["a) un mètre ruban", "b) un centimètre", "c) réduire", "d) l'échelle"]),
        ("Réponds par vrai ou faux.",
         ["a) La classe mesure 8 m en vrai.", "b) Elle mesure 80 cm sur le plan.",
          "c) Un mètre devient un centimètre.", "d) L'échelle est de 1 cm pour 1 m."],
         ["a) Vrai", "b) Faux — elle mesure 8 cm", "c) Vrai", "d) Vrai"]),
        ("Relie chaque mesure réelle à sa mesure sur le plan.",
         ["8 m", "6 m", "1 m", "2 m"],
         ["1 cm", "8 cm", "2 cm", "6 cm"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Avec quoi mesure-t-on la classe ?",
          "b) Que devient un mètre sur le plan ?",
          "c) Que signifie « 1 cm = 1 m » ?",
          "d) Comment passe-t-on du plan au réel ?"],
         ["a) On la mesure avec un mètre ruban.",
          "b) Il devient un centimètre.",
          "c) Cela signifie qu'un centimètre sur le plan vaut un mètre en vrai.",
          "d) On mesure sur le plan, puis on multiplie."]),
    ],
    consigne_ex5="Complète le tableau : écris la mesure sur le plan pour chaque mesure réelle.",
    corrige_ex5="1 m → 1 cm ; 2 m → 2 cm ; 6 m → 6 cm ; 8 m → 8 cm.",
))

# ═══════════════════════════ SÉANCE 12 ═══════════════════════════
SEANCES.append(dict(
    n=12, semaine=4, titre="Le tracé du plan de la classe à l'échelle",
    objectif="Reproduire le plan de la classe à l'échelle en traçant le contour et en plaçant "
             "le mobilier.",
    materiel="Feuille quadrillée, règle, crayon, gomme, crayons de couleur, "
             "fiche de mesures.",
    revision=[("Que fait-on avant de tracer un plan ?",
               "R.A. : On mesure les dimensions réelles."),
              ("Combien mesure la classe sur le plan ?",
               "R.A. : 8 cm de long sur 6 cm de large.")],
    mes=("Quel est le premier trait que l'on trace quand on dessine une salle ?",
         "R.A. : Le contour, c'est-à-dire les quatre murs."),
    analyse=[
        ("Par quoi commence-t-on le plan ?", "R.A. : Par le contour de la salle."),
        ("Quelle forme a le contour ?", "R.A. : C'est un rectangle."),
        ("Où place-t-on le tableau ?", "R.A. : En haut du rectangle, au Nord."),
        ("Où place-t-on les tables des élèves ?", "R.A. : Au centre, en rangées."),
        ("Que doit-on écrire pour terminer ?",
         "R.A. : Le titre, l'échelle, la légende et la flèche du Nord.")],
    synthese="Donc, pour tracer le plan de la classe, on commence par le contour en rectangle. "
             "On place ensuite le tableau au Nord, le bureau du maître devant lui, les tables "
             "en rangées, puis la porte et les fenêtres. On termine par le titre, l'échelle, "
             "la légende et la flèche du Nord.",
    application=("Trace sur ta feuille : a) le contour à l'échelle, b) le tableau, "
                 "c) trois rangées de tables, d) la porte et les fenêtres.",
                 "a) Rectangle de 8 cm sur 6 cm — b) Trait épais en haut — "
                 "c) Trois lignes de petits rectangles au centre — d) Sur les murs "
                 "de côté."),
    evaluation=("1. Réponds par vrai ou faux : a) Le contour est un rectangle. b) Le tableau "
                "est en bas du plan. c) Les tables sont en rangées. d) Le plan porte un "
                "titre.\n"
                "2. Trace un plan complet de la classe sur ta feuille.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n"
                "2. Rectangle à l'échelle + meubles placés + titre, échelle, légende et "
                "flèche du Nord."),
    lecon_titre="Tracer le plan de la classe",
    sections=[
        ("1. Le matériel et la feuille",
         "Il faut une feuille, une règle bien droite, un crayon bien taillé et une gomme. "
         "Une feuille quadrillée aide beaucoup. Un carreau peut représenter un mètre. Le "
         "travail demande de la précision et de la patience.",
         ("img_s11_a.png", "Figure 1 — Tracer le plan sur un quadrillage.", 640)),
        ("2. Tracer le contour",
         "On commence par le contour de la salle. C'est un rectangle. On trace 8 cm de long "
         "et 6 cm de large. On vérifie les angles avec la règle. Ce rectangle représente "
         "les quatre murs de la classe.", None),
        ("3. Placer le mobilier",
         "On place ensuite chaque meuble à sa place. Le tableau se trace en haut, du côté "
         "du Nord. Le bureau du maître se place devant le tableau. Les tables se dessinent "
         "en rangées. La porte s'ouvre dans un mur. Les fenêtres percent un autre mur.",
         None),
        ("4. Terminer le plan",
         "Un plan n'est jamais fini sans ses quatre éléments. On écrit le titre en haut. On "
         "note l'échelle en bas. On dessine la légende dans une case. On ajoute la flèche "
         "du Nord. Le plan est alors complet.", None),
    ],
    encadre=("rouge", "Attention !",
             "N'appuie pas trop fort avec ton crayon au début. Trace d'abord au crayon léger. "
             "Vérifie les mesures. Efface si besoin. Tu repasseras les traits à la fin."),
    resume=[
        "Pour tracer le plan, on commence par le contour de la salle.",
        "Le contour est un rectangle de 8 cm sur 6 cm à notre échelle.",
        "On place ensuite le tableau, le bureau, les tables et la porte.",
        "Le quadrillage aide : un carreau peut représenter un mètre.",
        "On termine par le titre, l'échelle, la légende et la flèche du Nord.",
    ],
    lexique=[("Contour", "Le trait qui représente les murs de la salle."),
             ("Rectangle", "Une figure à quatre côtés et quatre angles droits."),
             ("Quadrillage", "Une feuille couverte de petits carreaux qui aide à mesurer."),
             ("Précision", "La qualité d'un travail fait avec soin et exactitude.")],
    exercices=[
        ("Complète avec : contour — rectangle — mobilier — flèche",
         ["a) On commence par tracer le ……", "b) La salle a la forme d'un ……",
          "c) Ensuite on place le ……", "d) On termine par la …… du Nord."],
         ["a) le contour", "b) d'un rectangle", "c) le mobilier", "d) la flèche"]),
        ("Réponds par vrai ou faux.",
         ["a) Le contour se trace en dernier.", "b) Le tableau se place au Nord.",
          "c) Un quadrillage aide à tracer.", "d) Le plan porte toujours un titre."],
         ["a) Faux — il se trace en premier", "b) Vrai", "c) Vrai", "d) Vrai"]),
        ("Relie chaque étape à ce que l'on fait.",
         ["Première étape", "Deuxième étape", "Troisième étape", "Quatrième étape"],
         ["Placer le mobilier", "Écrire le titre et l'échelle",
          "Tracer le contour", "Tracer légèrement au crayon"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Par quoi commence-t-on le plan ?", "b) Où place-t-on le tableau ?",
          "c) Cite les quatre éléments de la fin.",
          "d) Pourquoi vaut-il mieux tracer au crayon léger ?"],
         ["a) On commence par le contour de la salle.", "b) On le place au Nord, en haut.",
          "c) Le titre, l'échelle, la légende et la flèche du Nord.",
          "d) Pour pouvoir effacer et corriger."]),
    ],
    consigne_ex5="Trace ci-dessous le plan de ta classe à l'échelle : 8 cm sur 6 cm, avec le "
                 "tableau, le bureau du maître, trois rangées de tables et la porte.",
    corrige_ex5="Rectangle de 8 cm × 6 cm ; tableau en haut ; bureau du maître "
                "devant le tableau ; trois rangées de petits rectangles au centre ; porte "
                "sur un mur de côté ; titre, échelle, légende et flèche du Nord.",
))

# ═══════════════════════════ SÉANCE 13 ═══════════════════════════
SEANCES.append(dict(
    n=13, semaine=5, titre="Les éléments du plan de l'école",
    objectif="Énumérer les éléments d'une école sur un plan : bâtiments, clôture, cour de "
             "récréation, WC et mât de drapeau.",
    materiel="Plan de l'école affiché au tableau, plan de l'école par élève, ardoise et craie, "
             "cahier.",
    revision=[("Cite les quatre éléments que tout plan doit porter.",
               "R.A. : Le titre, l'échelle, la légende et l'orientation."),
              ("Où place-t-on le Nord sur un plan ?", "R.A. : En haut de la feuille.")],
    mes=("En sortant de la classe, qu'est-ce que tu vois dans la cour de l'école ?",
         "R.A. : Le mât de drapeau, les autres salles, les WC, la clôture."),
    analyse=[
        ("Combien de bâtiments y a-t-il dans l'école ?",
         "R.A. : Il y a trois salles de classe (selon l'école)."),
        ("Où se trouve la cour de récréation ?",
         "R.A. : Elle se trouve au centre, entre les bâtiments."),
        ("Où se trouvent les WC ?", "R.A. : Ils se trouvent à l'Est des salles."),
        ("Où se trouve le mât de drapeau ?",
         "R.A. : Il se trouve dans la cour, au Sud."),
        ("Que représente le trait pointillé autour de l'école ?",
         "R.A. : Il représente la clôture.")],
    synthese="Donc, le plan de l'école représente les bâtiments, la cour de récréation, les WC, "
             "le mât de drapeau, le portail et la clôture. Chaque élément est dessiné à sa "
             "place et expliqué dans la légende.",
    application=("Sur le plan, montre et nomme : a) les salles de classe, b) la cour de "
                 "récréation, c) les WC, d) le mât de drapeau.",
                 "a) Les rectangles marron en haut — b) Le grand rectangle vert au centre — "
                 "c) Le petit rectangle bleu à l'Est — d) Le rond rouge dans la cour."),
    evaluation=("1. Réponds par vrai ou faux : a) L'école a une cour de récréation. "
                "b) Les WC sont à l'intérieur des salles. c) Le mât de drapeau est dans la "
                "cour. d) La clôture entoure l'école.\n"
                "2. Cite cinq éléments de l'école.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n"
                "2. Les salles, la cour, les WC, le mât de drapeau et la clôture."),
    lecon_titre="Le plan de l'école",
    sections=[
        ("1. L'école est plus grande que la classe",
         "La classe est une pièce. L'école est un ensemble. Elle compte plusieurs bâtiments et "
         "des espaces extérieurs. Pour la représenter, on dessine un plan. Ce plan montre "
         "l'école vue d'en haut, comme pour la classe.",
         ("img_s13_a.png", "Figure 1 — Le plan de l'école avec ses éléments.", 660)),
        ("2. Les bâtiments",
         "Les bâtiments sont les salles de classe. Il y en a souvent trois ou quatre. Elles "
         "sont alignées ou disposées en U. Sur le plan, ce sont des rectangles. Le bureau du "
         "directeur fait aussi partie des bâtiments.", None),
        ("3. La cour et les espaces extérieurs",
         "La cour de récréation est l'espace où les élèves jouent. Elle occupe le centre. Le "
         "mât de drapeau se dresse dans cette cour. Le lundi matin, on y hisse le drapeau. Les "
         "WC sont un petit bâtiment à part, souvent à l'écart.", None),
        ("4. Le portail et la clôture",
         "La clôture entoure l'école. Elle marque la limite entre l'école et le village. Le "
         "portail est l'ouverture par laquelle on entre. Sur le plan, la clôture est un trait "
         "pointillé et le portail une ouverture.", None),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Dans les écoles malgaches, le mât de drapeau est presque toujours placé au "
             "centre de la cour. On y hisse le drapeau national le lundi matin, avant "
             "d'entrer en classe."),
    resume=[
        "Le plan de l'école montre l'école entière, vue d'en haut.",
        "Il représente d'abord les bâtiments, c'est-à-dire les salles de classe.",
        "Il montre ensuite la cour de récréation et le mât de drapeau.",
        "Les WC, le portail et la clôture sont aussi dessinés.",
        "Chaque élément est à sa place et expliqué dans la légende.",
    ],
    lexique=[("Bâtiment", "Une construction avec des murs et un toit, comme une salle de "
                          "classe."),
             ("Cour de récréation", "L'espace extérieur où les élèves jouent et se réunissent."),
             ("Mât de drapeau", "Le grand poteau où l'on hisse le drapeau."),
             ("Clôture", "La barrière qui entoure l'école et marque sa limite."),
             ("Portail", "L'ouverture dans la clôture par laquelle on entre dans l'école.")],
    exercices=[
        ("Complète avec : bâtiments — cour — mât — clôture — portail",
         ["a) Les salles de classe sont dans les ……",
          "b) Les élèves jouent dans la …… de récréation.",
          "c) Le drapeau est hissé au ……",
          "d) La …… entoure l'école et le …… permet d'entrer."],
         ["a) dans les bâtiments", "b) dans la cour", "c) au mât",
          "d) La clôture … le portail"]),
        ("Réponds par vrai ou faux.",
         ["a) L'école compte plusieurs bâtiments.",
          "b) La cour de récréation est à l'extérieur.",
          "c) Les WC sont dans une salle de classe.",
          "d) Le portail se trouve dans la clôture."],
         ["a) Vrai", "b) Vrai", "c) Faux", "d) Vrai"]),
        ("Relie chaque élément à ce qu'il sert.",
         ["La cour", "Le mât", "La clôture", "Le portail"],
         ["À entrer dans l'école", "À jouer et se réunir",
          "À marquer la limite", "À hisser le drapeau"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Cite cinq éléments de l'école.", "b) Où se trouve la cour ?",
          "c) Que représente le trait pointillé ?", "d) À quoi sert le mât ?"],
         ["a) Les salles, la cour, les WC, le mât et la clôture.",
          "b) Elle se trouve au centre de l'école.",
          "c) Il représente la clôture.", "d) Il sert à hisser le drapeau."]),
    ],
    figure_ex=("img_s13_a.png", "Figure 2 — Le plan de l'école à légender.", 640),
    consigne_ex5="Observe le plan de l'école et écris le nom de chaque élément à sa place.",
    corrige_ex5="Salles de classe en haut ; WC à l'Est ; cour de récréation au centre ; mât de "
                "drapeau dans la cour ; portail à l'Ouest ; clôture tout autour.",
))

# ═══════════════════════════ SÉANCE 14 ═══════════════════════════
SEANCES.append(dict(
    n=14, semaine=5, titre="La position d'un élément de l'école par rapport aux autres",
    objectif="Utiliser les points cardinaux pour situer la classe de 9e par rapport aux autres "
             "éléments de l'école.",
    materiel="Plan de l'école affiché, plan par élève, ardoise et craie, cahier.",
    revision=[("Cite cinq éléments de l'école.",
               "R.A. : Les salles, la cour, les WC, le mât de drapeau et la clôture."),
              ("Où se trouve la cour de récréation ?", "R.A. : Au centre de l'école.")],
    mes=("Comment expliquer à un visiteur où se trouve notre classe ?",
         "R.A. : En la situant par rapport à un autre élément de l'école."),
    analyse=[
        ("Où se trouve la salle de 9e par rapport à la cour ?",
         "R.A. : Elle se trouve au Nord de la cour."),
        ("Où se trouvent les WC par rapport aux salles ?", "R.A. : À l'Est des salles."),
        ("Où se trouve le mât de drapeau par rapport aux salles ?",
         "R.A. : Au Sud des salles."),
        ("Où se trouve le portail ?", "R.A. : À l'Ouest de l'école."),
        ("Pourquoi utilise-t-on les points cardinaux ?",
         "R.A. : Parce que « à gauche » et « à droite » changent selon là où "
         "l'on se tient.")],
    synthese="Donc, pour situer un élément de l'école, on le compare à un autre avec les "
             "points cardinaux. On dit : « la salle de 9e est au Nord de la cour ». "
             "Cette phrase reste vraie partout dans l'école.",
    application=("Complète : a) La salle de 9e est au …… de la cour. b) Les WC sont à "
                 "l'…… des salles. c) Le mât est au …… des salles. d) Le portail est "
                 "à l'……",
                 "a) au Nord — b) à l'Est — c) au Sud — d) à l'Ouest."),
    evaluation=("1. Réponds par vrai ou faux : a) La salle de 9e est au Nord de la cour. "
                "b) Les WC sont à l'Ouest. c) Le mât est au Sud. d) On peut situer un lieu "
                "sans les points cardinaux.\n"
                "2. Écris une phrase qui situe la cour par rapport à ta salle.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Faux.\n"
                "2. Exemple : « La cour se trouve au Sud de la salle de 9e. »"),
    lecon_titre="Situer les éléments de l'école",
    sections=[
        ("1. Situer, c'est comparer",
         "Situer un lieu, c'est dire où il se trouve par rapport à un autre. On choisit un "
         "repère. Puis on indique la direction. Par exemple : « la salle de 9e est au Nord "
         "de la cour ».",
         ("img_s13_a.png", "Figure 1 — Situer chaque élément de l'école.", 640)),
        ("2. Les points cardinaux, toujours fiables",
         "On peut dire « à gauche » ou « à droite ». Mais ces mots changent "
         "selon l'endroit où l'on se tient. Les points cardinaux ne changent jamais. Le Nord "
         "reste le Nord pour tout le monde.", None),
        ("3. La classe de 9e dans l'école",
         "Notre salle est une des salles de l'école. Elle se trouve au Nord de la cour. Les "
         "autres salles sont à côté d'elle. Les WC sont à l'Est. Le mât de drapeau est au "
         "Sud, dans la cour.", None),
        ("4. Écrire une phrase de situation",
         "Une phrase de situation comporte trois parties. Le lieu dont on parle. Le verbe "
         "« se trouve ». La direction et le repère. Par exemple : « les WC se "
         "trouvent à l'Est des salles de classe ».", None),
    ],
    encadre=("rouge", "Attention !",
             "N'écris pas « la salle est à gauche ». Précise toujours la "
             "direction : « la salle est à l'Ouest de la cour ». C'est plus clair "
             "et cela reste vrai partout."),
    resume=[
        "Situer un lieu, c'est le comparer à un autre lieu.",
        "Pour cela, on utilise les points cardinaux.",
        "Les mots « à gauche » et « à droite » changent selon la place.",
        "La salle de 9e se trouve au Nord de la cour de récréation.",
        "Une phrase de situation nomme le lieu, la direction et le repère.",
    ],
    lexique=[("Situer", "Dire où se trouve un lieu par rapport à un autre."),
             ("Repère", "Le lieu que l'on prend comme point de comparaison."),
             ("Direction", "Le côté vers lequel on va : Nord, Sud, Est ou Ouest."),
             ("Par rapport à", "En comparant avec un autre objet ou lieu.")],
    exercices=[
        ("Complète avec : Nord — Sud — Est — Ouest",
         ["a) La salle de 9e est au …… de la cour.",
          "b) Les WC sont à l'…… des salles.",
          "c) Le mât de drapeau est au …… des salles.",
          "d) Le portail est à l'…… de l'école."],
         ["a) au Nord", "b) à l'Est", "c) au Sud", "d) à l'Ouest"]),
        ("Réponds par vrai ou faux.",
         ["a) Les points cardinaux changent selon la place.",
          "b) La salle de 9e est au Nord de la cour.",
          "c) On peut situer un lieu avec une phrase.",
          "d) « À gauche » suffit pour se faire comprendre."],
         ["a) Faux — ils ne changent jamais", "b) Vrai", "c) Vrai", "d) Faux"]),
        ("Relie chaque lieu à sa position dans l'école.",
         ["La cour", "Les WC", "Le mât", "Le portail"],
         ["À l'Est des salles", "Au centre, au Sud des salles",
          "À l'Ouest de l'école", "Au Nord de la cour"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Où se trouve la salle de 9e ?",
          "b) Pourquoi n'utilise-t-on pas « à gauche » ?",
          "c) Cite les trois parties d'une phrase de situation.",
          "d) Où se trouve le mât de drapeau ?"],
         ["a) Elle se trouve au Nord de la cour.",
          "b) Parce que cela change selon l'endroit où l'on se tient.",
          "c) Le lieu, la direction et le repère.",
          "d) Il se trouve dans la cour, au Sud des salles."]),
    ],
    consigne_ex5="Écris trois phrases qui situent trois éléments de l'école les uns par "
                 "rapport aux autres.",
    corrige_ex5="Exemples : « La salle de 9e se trouve au Nord de la cour. » "
                "« Les WC se trouvent à l'Est des salles. » « Le mât de "
                "drapeau se trouve dans la cour, au Sud des salles. »",
))

# ═══════════════════════════ SÉANCE 15 ═══════════════════════════
SEANCES.append(dict(
    n=15, semaine=5, titre="Le tracé d'un itinéraire dans l'école",
    objectif="Faire correspondre les mesures du plan et celles du terrain, puis tracer un "
             "itinéraire dans l'école.",
    materiel="Plan de l'école, règle, crayon de couleur, mètre ruban, ardoise, cahier.",
    revision=[("Où se trouve la salle de 9e par rapport à la cour ?",
               "R.A. : Au Nord de la cour."),
              ("Que signifie « 1 cm = 1 m » ?",
               "R.A. : Un centimètre sur le plan vaut un mètre sur le terrain.")],
    mes=("Pour aller du portail à notre classe, par où passes-tu ?",
         "R.A. : On traverse la cour vers le Nord."),
    analyse=[
        ("D'où part l'itinéraire ?", "R.A. : Il part du portail, à l'Ouest."),
        ("Où arrive-t-il ?", "R.A. : Il arrive à la salle de 9e, au Nord."),
        ("Par où passe-t-il ?", "R.A. : Il traverse la cour de récréation."),
        ("Combien mesure ce trajet sur le plan ?",
         "R.A. : Environ 6 cm (à mesurer)."),
        ("Et sur le terrain ?", "R.A. : Environ 6 m, grâce à l'échelle.")],
    synthese="Donc, un itinéraire décrit un chemin. Il part d'un point de départ. Il passe par "
             "des lieux connus. Il arrive à un point d'arrivée. On peut le tracer sur le plan "
             "avec une flèche et le mesurer.",
    application=("Trace sur le plan l'itinéraire du portail à la salle de 9e, puis réponds : "
                 "a) Dans quelle direction vas-tu ? b) Par où passes-tu ? c) Combien de "
                 "centimètres ? d) Combien de mètres ?",
                 "a) Vers le Nord — b) Par la cour de récréation — c) Environ 6 cm — "
                 "d) Environ 6 m."),
    evaluation=("1. Réponds par vrai ou faux : a) Un itinéraire a un départ et une arrivée. "
                "b) On peut mesurer un itinéraire. c) Le plan et le terrain ont la même "
                "taille. d) On trace l'itinéraire avec une flèche.\n"
                "2. Décris l'itinéraire de ta classe aux WC.",
                "1. a) Vrai — b) Vrai — c) Faux — d) Vrai.\n"
                "2. Exemple : « Je sors de la classe, je vais vers l'Est et j'arrive aux "
                "WC. »"),
    lecon_titre="Tracer un itinéraire dans l'école",
    sections=[
        ("1. Un itinéraire, trois moments",
         "Un itinéraire est un chemin. Il comporte trois moments. Le point de départ. Les "
         "lieux par lesquels on passe. Le point d'arrivée. Sur le plan, on le trace avec une "
         "ligne et des flèches.",
         ("img_s13_a.png", "Figure 1 — Un itinéraire dans l'école.", 640)),
        ("2. Tracer l'itinéraire sur le plan",
         "On place d'abord le point de départ avec une croix. On trace ensuite la ligne qui "
         "suit le chemin réel. On termine par une flèche au point d'arrivée. La ligne doit "
         "suivre les allées, jamais traverser les murs.", None),
        ("3. Mesurer sur le plan et sur le terrain",
         "On mesure la ligne avec une règle. On lit 6 cm. L'échelle dit « 1 cm = 1 m ». "
         "Le trajet fait donc 6 m sur le terrain. C'est ainsi que l'on fait correspondre le "
         "plan et la réalité.", None),
        ("4. Décrire l'itinéraire avec les directions",
         "Pour décrire le chemin, on utilise les points cardinaux. On dit : « je pars du "
         "portail, je vais vers le Nord, je traverse la cour et j'arrive à la salle de 9e ».",
         None),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Les livreurs et les facteurs tracent eux aussi des itinéraires. Ils cherchent le "
             "chemin le plus court pour aller d'un point à un autre. C'est le même travail "
             "que le tien sur le plan."),
    resume=[
        "Un itinéraire est le chemin que l'on suit d'un lieu à un autre.",
        "Il comporte un départ, des lieux traversés et une arrivée.",
        "On le trace sur le plan avec une ligne et une flèche.",
        "On mesure la ligne avec une règle, puis on utilise l'échelle.",
        "On le décrit avec les points cardinaux : vers le Nord, vers l'Est…",
    ],
    lexique=[("Itinéraire", "Le chemin suivi pour aller d'un lieu à un autre."),
             ("Départ", "Le lieu d'où l'on part."),
             ("Arrivée", "Le lieu où l'on s'arrête."),
             ("Traverser", "Passer d'un côté à l'autre d'un lieu.")],
    exercices=[
        ("Complète avec : départ — arrivée — flèche — échelle",
         ["a) Le …… est le lieu d'où l'on part.",
          "b) L'…… est le lieu où l'on s'arrête.",
          "c) On termine le tracé par une ……",
          "d) On utilise l'…… pour convertir les centimètres en mètres."],
         ["a) Le départ", "b) L'arrivée", "c) une flèche", "d) l'échelle"]),
        ("Réponds par vrai ou faux.",
         ["a) Un itinéraire se trace avec une ligne.",
          "b) La ligne peut traverser les murs.",
          "c) On mesure l'itinéraire avec une règle.",
          "d) 6 cm sur le plan font 6 m sur le terrain."],
         ["a) Vrai", "b) Faux — elle suit les allées", "c) Vrai", "d) Vrai"]),
        ("Relie chaque mot à son rôle dans l'itinéraire.",
         ["Le portail", "La cour", "La salle de 9e", "La flèche"],
         ["Le lieu traversé", "L'arrivée", "Marque le sens", "Le départ"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Cite les trois moments d'un itinéraire.",
          "b) Comment trace-t-on le chemin sur le plan ?",
          "c) Comment passe-t-on des centimètres aux mètres ?",
          "d) Pourquoi utilise-t-on les directions ?"],
         ["a) Le départ, les lieux traversés et l'arrivée.",
          "b) Avec une ligne et une flèche, en suivant les allées.",
          "c) On utilise l'échelle du plan.",
          "d) Pour que celui qui écoute puisse suivre le chemin."]),
    ],
    consigne_ex5="Trace sur le plan l'itinéraire qui va de la salle de 9e aux WC, puis écris "
                 "les trois phrases qui le décrivent.",
    corrige_ex5="Trait de la salle de 9e vers l'Est jusqu'aux WC ; phrases : « Je pars de "
                "la salle de 9e. Je vais vers l'Est. J'arrive aux WC. »",
))

# ═══════════════════════════ SÉANCE 16 ═══════════════════════════
SEANCES.append(dict(
    n=16, semaine=6, titre="Les éléments constitutifs d'un village",
    objectif="Énumérer les éléments constitutifs d'un village : bâtiments, routes, cours "
             "d'eau, champs et marché.",
    materiel="Photo ou scène d'un village malgache, plan du village, ardoise et craie, cahier.",
    revision=[("Cite cinq éléments de l'école.",
               "R.A. : Les salles, la cour, les WC, le mât et la clôture."),
              ("Comment trace-t-on un itinéraire ?",
               "R.A. : Avec une ligne et une flèche, du départ à l'arrivée.")],
    mes=("Qu'est-ce qu'on trouve dans un village qu'on ne trouve pas dans une école ?",
         "R.A. : Des maisons, des champs, un marché, une rivière."),
    analyse=[
        ("Cite les bâtiments que l'on voit dans le village.",
         "R.A. : Les maisons, l'école, l'église et la mairie."),
        ("Où les gens cultivent-ils le riz ?", "R.A. : Dans les rizières, en bas du village."),
        ("Où se tient le marché ?", "R.A. : Au centre du village, le jour du marché."),
        ("Comment circule-t-on dans le village ?", "R.A. : Par la route et par les pistes."),
        ("Quel est le cours d'eau du village ?", "R.A. : La rivière qui coule en bas.")],
    synthese="Donc, un village est fait de maisons, de bâtiments publics comme l'école et "
             "l'église, de champs et de rizières, d'un marché, de routes et de pistes, et "
             "souvent d'un cours d'eau. Tous ces éléments se retrouvent sur le plan.",
    application=("Cite pour ton village : a) deux bâtiments publics, b) un espace cultivé, "
                 "c) un moyen de circulation, d) un cours d'eau.",
                 "a) L'école et l'église — b) Les rizières — c) La route ou la "
                 "piste — d) La rivière."),
    evaluation=("1. Réponds par vrai ou faux : a) Un village a toujours un marché. "
                "b) Les rizières sont des espaces cultivés. c) On ne circule qu'en voiture. "
                "d) Un village peut avoir une rivière.\n"
                "2. Cite cinq éléments constitutifs d'un village.",
                "1. a) Faux — b) Vrai — c) Faux — d) Vrai.\n"
                "2. Les maisons, l'école, les rizières, le marché et la route."),
    lecon_titre="Les éléments du village",
    sections=[
        ("1. Le village, un ensemble d'éléments",
         "Un village est un groupement de maisons et de terres. Il est plus grand qu'une "
         "école. On y trouve des habitations, des bâtiments publics, des champs et des "
         "chemins. Chaque élément a une place et un rôle.",
         ("scene_village.png", "Figure 1 — Un village des hautes terres de Madagascar.",
          660)),
        ("2. Les maisons et les bâtiments publics",
         "Les maisons sont les habitations des familles. Elles sont souvent en brique rouge, "
         "avec un toit de chaume ou de tôle. Les bâtiments publics servent à tout le monde. "
         "Ce sont l'école, l'église ou le temple, la mairie et parfois le dispensaire.",
         None),
        ("3. Les champs, les rizières et les cours d'eau",
         "Les champs et les rizières entourent le village. On y cultive le riz, le manioc et "
         "le maïs. Les rizières sont souvent en bas, près de l'eau. La rivière ou le canal "
         "traverse le village et sert à irriguer les cultures.",
         None),
        ("4. Les routes, les pistes et le marché",
         "La route relie le village aux autres villages. Les pistes sont des chemins de terre "
         "à l'intérieur du village. Le marché se tient un jour fixe de la semaine. On y "
         "vend les produits des champs et de l'artisanat.", None),
    ],
    encadre=("vert", "Le savais-tu ?",
             "À Madagascar, les maisons des hautes terres sont souvent en brique rouge "
             "cuite au soleil. Elles sont orientées vers l'Est, du côté du soleil levant, "
             "et la porte ne regarde jamais le couchant."),
    resume=[
        "Un village groupe des maisons et des terres cultivées.",
        "Les maisons sont les habitations des familles.",
        "Les bâtiments publics sont l'école, l'église et la mairie.",
        "Les champs et les rizières entourent le village, près de l'eau.",
        "La route, les pistes et le marché font vivre le village.",
    ],
    lexique=[("Village", "Un groupement de maisons et de terres, plus petit qu'une ville."),
             ("Maison", "Le bâtiment où habite une famille."),
             ("Rizière", "Un champ inondé où l'on cultive le riz."),
             ("Irriguer", "Apporter de l'eau aux cultures."),
             ("Marché", "Le lieu et le jour où l'on vend et achète des produits.")],
    exercices=[
        ("Complète avec : maisons — école — rizières — marché — route",
         ["a) Les familles habitent dans des ……",
          "b) Les élèves vont à l'……",
          "c) On cultive le riz dans les ……",
          "d) On vend les produits au ……, le long de la ……"],
         ["a) des maisons", "b) à l'école", "c) les rizières", "d) au marché … la route"]),
        ("Réponds par vrai ou faux.",
         ["a) Un village ne compte que des maisons.",
          "b) Les rizières servent à cultiver le riz.",
          "c) La rivière sert à irriguer les cultures.",
          "d) Le marché se tient tous les jours."],
         ["a) Faux", "b) Vrai", "c) Vrai", "d) Faux — un jour fixe par semaine"]),
        ("Relie chaque élément à son rôle.",
         ["La rizière", "La route", "Le marché", "L'église"],
         ["Relier le village aux autres", "Vendre les produits",
          "Cultiver le riz", "Réunir les habitants"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Cite cinq éléments d'un village.", "b) Où cultive-t-on le riz ?",
          "c) Quel est le rôle de la rivière ?", "d) Que vend-on au marché ?"],
         ["a) Les maisons, l'école, les rizières, le marché et la route.",
          "b) On le cultive dans les rizières, en bas du village.",
          "c) Elle sert à irriguer les cultures et à laver.",
          "d) On y vend les produits des champs et de l'artisanat."]),
    ],
    figure_ex=("img_s16_a.png", "Figure 2 — Le plan du village.", 640),
    consigne_ex5="Observe le plan du village et écris le nom de chaque élément à sa place.",
    corrige_ex5="Maisons le long de la route ; école en bas à gauche ; marché au centre ; "
                "rizières à l'Est ; église en haut à droite ; rivière en bas ; Nord en "
                "haut.",
))

# ═══════════════════════════ SÉANCE 17 ═══════════════════════════
SEANCES.append(dict(
    n=17, semaine=6, titre="La lecture de la légende du plan du village",
    objectif="Se référer à la légende pour reconnaître les éléments du plan du village.",
    materiel="Plan du village avec sa légende, crayons de couleur, ardoise et craie, cahier.",
    revision=[("Cite cinq éléments constitutifs d'un village.",
               "R.A. : Les maisons, l'école, les rizières, le marché et la route."),
              ("À quoi sert la légende ?",
               "R.A. : Elle explique les couleurs et les signes du plan.")],
    mes=("Sur le plan du village, comment savoir que le vert représente les rizières ?",
         "R.A. : En lisant la légende."),
    analyse=[
        ("Où se trouve la légende sur le plan ?",
         "R.A. : Dans une case, souvent en bas du plan."),
        ("Que représente la couleur verte ?", "R.A. : Les rizières et les champs."),
        ("Que représente la couleur bleue ?", "R.A. : La rivière, c'est-à-dire l'eau."),
        ("Que représente le trait jaune épais ?", "R.A. : La route principale."),
        ("Que représente le petit carré rouge ?", "R.A. : Le marché.")],
    synthese="Donc, la légende est le dictionnaire du plan du village. Chaque couleur et "
             "chaque signe y sont expliqués. Sans la légende, le plan reste un dessin que "
             "l'on ne peut pas lire.",
    application=("À l'aide de la légende, réponds : a) Que représente le vert ? "
                 "b) Que représente le bleu ? c) Que représente le jaune ? d) Que "
                 "représente le rouge ?",
                 "a) Les rizières — b) La rivière — c) La route — d) Le marché."),
    evaluation=("1. Réponds par vrai ou faux : a) La légende explique les signes. "
                "b) On peut lire un plan sans légende. c) Le bleu représente l'eau. "
                "d) La légende est souvent en bas du plan.\n"
                "2. Cite trois signes de la légende et ce qu'ils représentent.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n"
                "2. Exemple : vert = rizières, bleu = rivière, jaune = route."),
    lecon_titre="La légende du plan du village",
    sections=[
        ("1. Pourquoi une légende ?",
         "Le plan du village montre beaucoup d'éléments. On ne peut pas tout écrire dessus. "
         "On utilise donc des couleurs et des signes. La légende dit ce que chacun "
         "représente.",
         ("img_s16_a.png", "Figure 1 — Le plan du village et sa légende.", 660)),
        ("2. Les couleurs de la légende",
         "Le vert représente les rizières et les champs cultivés. Le bleu représente la "
         "rivière. Le jaune ou le gris représente la route. Le marron ou le rouge "
         "représente les maisons. Le rose représente souvent le marché.", None),
        ("3. Les signes de la légende",
         "Certains éléments sont des signes et non des couleurs. Un trait épais est une "
         "route. Un trait fin et bleu est un cours d'eau. Un petit carré est une maison. "
         "Une croix ou un rond peut être l'école.", None),
        ("4. Bien utiliser la légende",
         "Avant de répondre à une question, on cherche la couleur sur le plan. Puis on lit "
         "sa signification dans la légende. Ensuite seulement on répond. C'est la méthode "
         "des trois temps.", None),
    ],
    encadre=("rouge", "Attention !",
             "Les couleurs ne sont pas les mêmes sur tous les plans. Le vert peut "
             "représenter la forêt sur un plan et les rizières sur un autre. Lis toujours la "
             "légende du plan que tu as devant toi."),
    resume=[
        "La légende est le dictionnaire du plan.",
        "Elle explique chaque couleur et chaque signe.",
        "Le vert représente souvent les cultures et le bleu l'eau.",
        "Les signes sont aussi importants que les couleurs.",
        "On cherche la couleur, on lit la légende, puis on répond.",
    ],
    lexique=[("Légende", "La case qui explique les couleurs et les signes du plan."),
             ("Signe", "Un petit dessin qui représente un élément du plan."),
             ("Couleur", "La teinte qui représente un élément : vert, bleu, jaune…"),
             ("Représenter", "Tenir la place de quelque chose sur un dessin.")],
    exercices=[
        ("Complète avec : légende — vert — bleu — jaune — signe",
         ["a) La …… explique les couleurs du plan.",
          "b) Le …… représente les rizières.",
          "c) Le …… représente la rivière.",
          "d) Le …… représente la route et chaque …… a un sens."],
         ["a) La légende", "b) Le vert", "c) Le bleu", "d) Le jaune … signe"]),
        ("Réponds par vrai ou faux.",
         ["a) On peut lire un plan sans sa légende.",
          "b) Le bleu représente souvent l'eau.",
          "c) Les couleurs sont les mêmes sur tous les plans.",
          "d) Un trait épais peut représenter une route."],
         ["a) Faux", "b) Vrai", "c) Faux", "d) Vrai"]),
        ("Relie chaque couleur ou signe à ce qu'il représente.",
         ["Le vert", "Le bleu", "Le jaune", "Le carré"],
         ["La route", "Une maison", "Les cultures", "La rivière"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Où se trouve la légende ?", "b) Que représente le vert ?",
          "c) Pourquoi les couleurs changent-elles d'un plan à l'autre ?",
          "d) Cite la méthode des trois temps."],
         ["a) Elle se trouve souvent en bas du plan, dans une case.",
          "b) Il représente les cultures, comme les rizières.",
          "c) Parce que chaque plan choisit ses propres couleurs.",
          "d) Chercher la couleur, lire la légende, puis répondre."]),
    ],
    consigne_ex5="Colorie le plan du village d'après la légende : rizières en vert, rivière "
                 "en bleu, route en jaune, maisons en marron, marché en rose.",
    corrige_ex5="Rizières vertes à l'Est ; rivière bleue en bas ; route jaune qui traverse "
                "le village ; maisons marron le long de la route ; marché rose au centre.",
))

# ═══════════════════════════ SÉANCE 18 ═══════════════════════════
SEANCES.append(dict(
    n=18, semaine=6, titre="L'orientation du plan du village",
    objectif="Orienter le plan du village : Nord en haut, Sud en bas, Est à droite, Ouest à "
             "gauche.",
    materiel="Plan du village à orienter, ardoise et craie, cahier.",
    revision=[("À quoi sert la légende d'un plan ?",
               "R.A. : Elle explique les couleurs et les signes."),
              ("Où place-t-on le Nord sur un plan ?", "R.A. : En haut de la feuille.")],
    mes=("Sur le plan du village, comment savoir de quel côté est le Nord ?",
         "R.A. : Grâce à la flèche du Nord."),
    analyse=[
        ("Où se place le Nord sur le plan du village ?", "R.A. : En haut du plan."),
        ("Où se place le Sud ?", "R.A. : En bas du plan."),
        ("Où se place l'Est ?", "R.A. : À droite du plan."),
        ("Où se place l'Ouest ?", "R.A. : À gauche du plan."),
        ("Où se trouvent les rizières par rapport aux maisons ?",
         "R.A. : Elles se trouvent à l'Est des maisons.")],
    synthese="Donc, pour orienter le plan du village, on place le Nord en haut, le Sud en bas, "
             "l'Est à droite et l'Ouest à gauche. On peut alors situer chaque élément "
             "du village les uns par rapport aux autres.",
    application=("Sur le plan, place les quatre points cardinaux puis réponds : a) Au Nord, "
                 "que trouve-t-on ? b) Au Sud ? c) À l'Est ? d) À l'Ouest ?",
                 "a) Les maisons du haut et l'église — b) La rivière — "
                 "c) Les rizières — d) Une partie des maisons."),
    evaluation=("1. Réponds par vrai ou faux : a) Le Nord est en haut du plan. "
                "b) L'Est est à gauche. c) La rivière est au Sud. d) Les rizières sont "
                "à l'Est.\n"
                "2. Dessine la croix des points cardinaux sur le plan du village.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n"
                "2. N en haut, S en bas, E à droite, O à gauche."),
    lecon_titre="Orienter le plan du village",
    sections=[
        ("1. Pourquoi orienter le plan du village ?",
         "Sans orientation, on ne peut pas dire où se trouve chaque chose. L'orientation "
         "donne le Nord. Elle permet ensuite de situer les maisons, les rizières et la "
         "rivière.",
         ("img_s16_a.png", "Figure 1 — Le plan du village orienté.", 640)),
        ("2. La règle des quatre côtés",
         "La règle est la même pour tous les plans. Le Nord est en haut. Le Sud est en bas. "
         "L'Est est à droite. L'Ouest est à gauche. La flèche du Nord rappelle cette "
         "règle.", None),
        ("3. Situer les éléments du village",
         "Une fois le plan orienté, on peut situer chaque élément. Les maisons sont au Nord "
         "et à l'Ouest. Les rizières sont à l'Est. La rivière coule au Sud. Le marché "
         "est au centre.", None),
        ("4. Vérifier avec le soleil",
         "Dans le village, on peut vérifier. Le matin, le soleil se lève à l'Est. On "
         "regarde de quel côté sont les rizières. On compare ensuite avec le plan.", None),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Les anciens du village savent orienter une maison sans boussole. Ils regardent "
             "le soleil levant. Ils placent alors l'entrée du bon côté, à l'abri du "
             "vent."),
    resume=[
        "Orienter le plan du village, c'est placer le Nord en haut.",
        "Le Sud est en bas, l'Est à droite et l'Ouest à gauche.",
        "La flèche du Nord rappelle cette règle sur le plan.",
        "Une fois orienté, on peut situer chaque élément du village.",
        "On vérifie dehors grâce au soleil levant, à l'Est.",
    ],
    lexique=[("Orienter", "Placer le Nord en haut du plan ou de la carte."),
             ("Flèche du Nord", "Le signe qui indique le Nord sur le plan."),
             ("En haut / en bas", "Le bord supérieur et le bord inférieur de la feuille."),
             ("Vérifier", "Contrôler que ce que l'on a fait est juste.")],
    exercices=[
        ("Complète avec : Nord — Sud — Est — Ouest",
         ["a) En haut du plan, c'est le ……", "b) En bas, c'est le ……",
          "c) À droite, c'est l'……", "d) À gauche, c'est l'……"],
         ["a) le Nord", "b) le Sud", "c) l'Est", "d) l'Ouest"]),
        ("Réponds par vrai ou faux.",
         ["a) La rivière coule au Sud du village.",
          "b) Les rizières sont à l'Ouest.",
          "c) Le Nord est en haut du plan.",
          "d) On peut vérifier l'orientation avec le soleil."],
         ["a) Vrai", "b) Faux — elles sont à l'Est", "c) Vrai", "d) Vrai"]),
        ("Relie chaque élément à sa place sur le plan.",
         ["Les maisons", "Les rizières", "La rivière", "Le marché"],
         ["À l'Est", "Au centre", "Au Nord et à l'Ouest", "Au Sud"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Où place-t-on le Nord ?", "b) Où se trouvent les rizières ?",
          "c) Comment vérifier l'orientation dehors ?",
          "d) Que rappelle la flèche du Nord ?"],
         ["a) On le place en haut du plan.", "b) Elles se trouvent à l'Est.",
          "c) On regarde le soleil levant, à l'Est.",
          "d) Elle rappelle où se trouve le Nord."]),
    ],
    figure_ex=("img_s16_a.png", "Figure 2 — Le plan du village à orienter.", 620),
    consigne_ex5="Place les quatre points cardinaux autour du plan du village, puis écris où "
                 "se trouvent les rizières, la rivière et le marché.",
    corrige_ex5="N en haut, S en bas, E à droite, O à gauche ; les rizières à l'Est, "
                "la rivière au Sud, le marché au centre.",
))

# ═══════════════════════════ SÉANCE 19 ═══════════════════════════
SEANCES.append(dict(
    n=19, semaine=7, titre="La position des bâtiments du village",
    objectif="Situer un bâtiment du village par rapport à un élément caractéristique.",
    materiel="Plan du village orienté, ardoise et craie, cahier.",
    revision=[("Où place-t-on l'Est sur un plan ?", "R.A. : À droite de la feuille."),
              ("Cite trois bâtiments du village.",
               "R.A. : L'école, l'église et la mairie.")],
    mes=("Pour dire à un visiteur où se trouve l'école, que lui réponds-tu ?",
         "R.A. : On la situe par rapport à un élément connu du village."),
    analyse=[
        ("Où se trouve l'école par rapport au marché ?",
         "R.A. : Elle se trouve à l'Ouest du marché."),
        ("Où se trouve l'église par rapport aux maisons ?",
         "R.A. : Elle se trouve au Nord-Est des maisons."),
        ("Où se trouve la mairie ?", "R.A. : Elle se trouve au centre, près du marché."),
        ("Où sont les rizières par rapport à l'école ?",
         "R.A. : Elles sont à l'Est de l'école."),
        ("Pourquoi choisit-on un élément caractéristique ?",
         "R.A. : Parce que tout le monde le connaît dans le village.")],
    synthese="Donc, pour situer un bâtiment, on le compare à un élément caractéristique du "
             "village. On dit : « l'école se trouve à l'Ouest du marché ». "
             "L'élément choisi doit être connu de tous.",
    application=("Complète : a) L'école se trouve à l'…… du marché. b) L'église se "
                 "trouve au …… des maisons. c) Les rizières sont à l'…… de "
                 "l'école. d) La mairie est au ……",
                 "a) à l'Ouest — b) au Nord-Est — c) à l'Est — d) au centre."),
    evaluation=("1. Réponds par vrai ou faux : a) L'école est à l'Ouest du marché. "
                "b) L'église est au Sud du village. c) La mairie est au centre. "
                "d) On situe un bâtiment par rapport à un repère connu.\n"
                "2. Écris une phrase qui situe ta maison dans le village.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n"
                "2. Exemple : « Ma maison se trouve au Nord du marché. »"),
    lecon_titre="La position des bâtiments",
    sections=[
        ("1. Choisir un élément caractéristique",
         "Un élément caractéristique est un lieu que tout le monde connaît. C'est souvent "
         "le marché, l'école ou l'église. On s'en sert comme repère pour situer les autres "
         "bâtiments.",
         ("img_s16_a.png", "Figure 1 — Situer les bâtiments du village.", 640)),
        ("2. L'école, l'église et la mairie",
         "L'école se trouve à l'Ouest du marché. L'église se dresse au Nord-Est des "
         "maisons. La mairie est au centre du village, près du marché. Ces trois bâtiments "
         "sont publics.", None),
        ("3. Les maisons et les rizières",
         "Les maisons sont groupées le long de la route, au Nord et à l'Ouest. Les "
         "rizières s'étendent à l'Est, en bas du village, près de la rivière. On y "
         "accède par une piste.", None),
        ("4. Écrire une phrase de situation",
         "On écrit : le bâtiment, puis le verbe, puis la direction et le repère. Par "
         "exemple : « l'école se trouve à l'Ouest du marché ». Cette phrase est "
         "claire pour tout le monde.", None),
    ],
    encadre=("rouge", "Attention !",
             "N'inverse pas les deux lieux. « L'école est à l'Ouest du marché » "
             "et « le marché est à l'Est de l'école » disent la même chose. "
             "Mais « l'école est à l'Est du marché » est faux."),
    resume=[
        "Pour situer un bâtiment, on le compare à un repère connu.",
        "Le marché, l'école et l'église sont de bons repères.",
        "L'école se trouve à l'Ouest du marché.",
        "L'église se dresse au Nord-Est des maisons.",
        "Une phrase de situation nomme le lieu, la direction et le repère.",
    ],
    lexique=[("Bâtiment public", "Un bâtiment qui sert à tout le village : école, "
                                 "mairie, église."),
             ("Élément caractéristique", "Un lieu que tout le monde reconnaît de loin."),
             ("Se situer", "Trouver sa place par rapport aux autres lieux."),
             ("Groupées", "Réunies au même endroit, comme les maisons d'un village.")],
    exercices=[
        ("Complète avec : Ouest — Nord-Est — Est — centre",
         ["a) L'école se trouve à l'…… du marché.",
          "b) L'église se trouve au …… des maisons.",
          "c) Les rizières s'étendent à l'…… du village.",
          "d) La mairie est au …… du village."],
         ["a) à l'Ouest", "b) au Nord-Est", "c) à l'Est", "d) au centre"]),
        ("Réponds par vrai ou faux.",
         ["a) L'école est un bâtiment public.",
          "b) Le marché est au Nord du village.",
          "c) On situe un lieu par rapport à un repère.",
          "d) « L'école est à l'Est du marché » est faux."],
         ["a) Vrai", "b) Faux — il est au centre", "c) Vrai", "d) Vrai"]),
        ("Relie chaque bâtiment à sa position.",
         ["L'école", "L'église", "La mairie", "Les rizières"],
         ["Au Nord-Est des maisons", "Au centre, près du marché",
          "À l'Est, près de la rivière", "À l'Ouest du marché"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Où se trouve l'école ?", "b) Qu'est-ce qu'un élément caractéristique ?",
          "c) Cite les trois parties d'une phrase de situation.",
          "d) Où s'étendent les rizières ?"],
         ["a) Elle se trouve à l'Ouest du marché.",
          "b) C'est un lieu que tout le monde connaît dans le village.",
          "c) Le lieu, la direction et le repère.",
          "d) Elles s'étendent à l'Est, près de la rivière."]),
    ],
    consigne_ex5="Sur le plan, écris trois phrases qui situent l'école, l'église et les "
                 "rizières par rapport au marché.",
    corrige_ex5="« L'école se trouve à l'Ouest du marché. » « L'église "
                "se trouve au Nord du marché. » « Les rizières se trouvent à "
                "l'Est du marché. »",
))

# ═══════════════════════════ SÉANCE 20 ═══════════════════════════
SEANCES.append(dict(
    n=20, semaine=7, titre="Le repérage des constituants sur le plan",
    objectif="Repérer sur le plan du village les routes, les pistes, les cours d'eau et les "
             "champs.",
    materiel="Plan du village, crayons de couleur, ardoise et craie, cahier.",
    revision=[("Où se trouve l'école par rapport au marché ?",
               "R.A. : À l'Ouest du marché."),
              ("Que représente la couleur verte sur le plan ?",
               "R.A. : Les cultures, comme les rizières.")],
    mes=("Quels sont les éléments qui ne sont pas des bâtiments, dans le village ?",
         "R.A. : Les routes, les pistes, la rivière et les champs."),
    analyse=[
        ("Comment reconnaît-on une route sur le plan ?",
         "R.A. : C'est un trait large et droit, souvent jaune."),
        ("Comment reconnaît-on une piste ?",
         "R.A. : C'est un trait fin, souvent en pointillés."),
        ("Comment reconnaît-on un cours d'eau ?",
         "R.A. : C'est un trait bleu qui serpente."),
        ("Comment reconnaît-on un champ ?",
         "R.A. : C'est une grande surface verte ou beige."),
        ("Où se trouvent les rizières par rapport à la rivière ?",
         "R.A. : Elles se trouvent juste à côté, pour profiter de l'eau.")],
    synthese="Donc, sur le plan du village, les routes sont des traits larges, les pistes des "
             "traits fins, les cours d'eau des traits bleus et les champs des surfaces "
             "colorées. La légende donne la signification de chaque signe.",
    application=("Sur le plan, entoure en : a) jaune la route, b) noir la piste, c) bleu la "
                 "rivière, d) vert les rizières.",
                 "a) Le trait large qui traverse le village — b) Le trait fin vers les "
                 "rizières — c) Le trait bleu en bas — d) La surface verte à "
                 "l'Est."),
    evaluation=("1. Réponds par vrai ou faux : a) La route est un trait large. "
                "b) La piste est un trait bleu. c) La rivière serpente. d) Les rizières "
                "sont près de la rivière.\n"
                "2. Cite quatre constituants du village qui ne sont pas des bâtiments.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n"
                "2. La route, la piste, la rivière et les champs."),
    lecon_titre="Les constituants du village sur le plan",
    sections=[
        ("1. Les routes et les pistes",
         "La route est large et droite. Elle relie le village aux autres villages. Elle est "
         "souvent goudronnée. La piste est un chemin de terre. Elle est plus étroite et "
         "souvent en pointillés sur le plan.",
         ("img_s16_a.png", "Figure 1 — Routes, pistes, cours d'eau et champs.", 640)),
        ("2. Les cours d'eau",
         "Le cours d'eau est la rivière, le ruisseau ou le canal. Sur le plan, c'est un "
         "trait bleu qui serpente. Il coule toujours vers le bas, du Nord vers le Sud ici. "
         "Il sert à irriguer les cultures.", None),
        ("3. Les champs et les rizières",
         "Les champs et les rizières sont des surfaces, pas des traits. Ils occupent de "
         "grands espaces. Les rizières sont placées près de l'eau, en bas du village. "
         "On les reconnaît à la couleur verte.", None),
        ("4. Les espaces non cultivés",
         "Tout n'est pas cultivé. Il reste des espaces libres : la forêt, les collines, "
         "les pâturages pour les zébus. Sur le plan, ce sont des surfaces claires ou "
         "grises.", None),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Les rizières en terrasses des hautes terres de Madagascar suivent les courbes "
             "de la colline. Elles permettent de cultiver le riz sur des pentes, en retenant "
             "l'eau à chaque niveau."),
    resume=[
        "Le village est fait de bâtiments mais aussi d'espaces.",
        "La route est un trait large et la piste un trait fin.",
        "La rivière est un trait bleu qui serpente.",
        "Les champs et les rizières sont de grandes surfaces colorées.",
        "Les rizières sont toujours placées près de l'eau.",
    ],
    lexique=[("Route", "Un chemin large qui relie les villages entre eux."),
             ("Piste", "Un chemin étroit en terre, à l'intérieur du village."),
             ("Cours d'eau", "L'eau qui coule : rivière, ruisseau ou canal."),
             ("Serpenter", "Faire des courbes, comme un serpent."),
             ("Pâturage", "Un espace d'herbe où les animaux mangent.")],
    exercices=[
        ("Complète avec : route — piste — rivière — rizières — champs",
         ["a) La …… relie le village aux autres villages.",
          "b) La …… est un chemin étroit en terre.",
          "c) La …… est un trait bleu qui serpente.",
          "d) Les …… sont cultivées près de l'eau, comme les ……"],
         ["a) La route", "b) La piste", "c) La rivière",
          "d) Les rizières … les champs"]),
        ("Réponds par vrai ou faux.",
         ["a) La route est un trait fin.",
          "b) La rivière coule vers le bas.",
          "c) Les rizières sont loin de l'eau.",
          "d) Les pâturages servent aux zébus."],
         ["a) Faux — c'est un trait large", "b) Vrai", "c) Faux", "d) Vrai"]),
        ("Relie chaque constituant à son signe sur le plan.",
         ["La route", "La piste", "La rivière", "Les champs"],
         ["Un trait bleu", "Une grande surface verte",
          "Un trait large", "Un trait fin ou pointillé"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Comment reconnaît-on une piste ?", "b) Où coule la rivière ?",
          "c) Pourquoi les rizières sont-elles près de l'eau ?",
          "d) Cite quatre constituants qui ne sont pas des bâtiments."],
         ["a) C'est un trait fin, souvent en pointillés.",
          "b) Elle coule en bas du village, vers le Sud.",
          "c) Pour irriguer le riz et retenir l'eau.",
          "d) La route, la piste, la rivière et les champs."]),
    ],
    consigne_ex5="Sur le plan du village, surligne la route en jaune, la piste en noir, la "
                 "rivière en bleu et les rizières en vert.",
    corrige_ex5="Route jaune qui traverse le village ; piste noire vers les rizières ; "
                "rivière bleue en bas ; rizières vertes à l'Est.",
))

# ═══════════════════════════ SÉANCE 21 ═══════════════════════════
SEANCES.append(dict(
    n=21, semaine=7, titre="L'itinéraire sur le plan du village",
    objectif="Indiquer et tracer l'itinéraire de la maison à l'école sur le plan du "
             "village.",
    materiel="Plan du village, crayon de couleur, règle, ardoise et craie, cahier.",
    revision=[("Comment reconnaît-on une piste sur le plan ?",
               "R.A. : C'est un trait fin, souvent en pointillés."),
              ("Où se trouve l'école dans le village ?",
               "R.A. : À l'Ouest du marché.")],
    mes=("Le matin, quel chemin prends-tu pour venir à l'école ?",
         "R.A. : On décrit le chemin depuis la maison."),
    analyse=[
        ("D'où part l'itinéraire ?", "R.A. : Il part de la maison de l'élève."),
        ("Où arrive-t-il ?", "R.A. : Il arrive à l'école."),
        ("Par où passe-t-il ?", "R.A. : Il suit la route ou la piste."),
        ("Dans quelle direction va-t-on d'abord ?",
         "R.A. : Vers l'Ouest, en direction de l'école."),
        ("Comment montre-t-on le sens du chemin ?", "R.A. : Avec des flèches.")],
    synthese="Donc, un itinéraire part de la maison, suit la route ou la piste et arrive à "
             "l'école. On le trace avec une ligne et des flèches. On le décrit avec les "
             "points cardinaux et les lieux traversés.",
    application=("Trace ton itinéraire puis réponds : a) D'où pars-tu ? b) Par où "
                 "passes-tu ? c) Dans quelle direction vas-tu ? d) Où arrives-tu ?",
                 "a) De ma maison — b) Par la route du village — c) Vers l'Ouest — "
                 "d) À l'école."),
    evaluation=("1. Réponds par vrai ou faux : a) L'itinéraire part de l'école. "
                "b) Il suit la route. c) Les flèches montrent le sens. d) On le décrit "
                "avec les directions.\n"
                "2. Décris en trois phrases le chemin de ta maison à l'école.",
                "1. a) Faux — b) Vrai — c) Vrai — d) Vrai.\n"
                "2. Exemple : « Je pars de ma maison. Je suis la route vers l'Ouest. "
                "J'arrive à l'école. »"),
    lecon_titre="L'itinéraire de la maison à l'école",
    sections=[
        ("1. De la maison à l'école",
         "Chaque matin, les élèves du village marchent vers l'école. Ce trajet est un "
         "itinéraire. On peut le tracer sur le plan. On peut aussi le décrire avec des "
         "phrases.",
         ("img_s06_a.png", "Figure 1 — Un itinéraire du village, de la maison à "
                           "l'école.", 640)),
        ("2. Tracer l'itinéraire",
         "On marque le départ d'une croix. On trace la ligne qui suit la route. On place "
         "une flèche à l'arrivée. La ligne ne doit pas couper à travers les "
         "rizières ni les maisons.", None),
        ("3. Nommer les lieux traversés",
         "Sur le chemin, on passe par des lieux connus. On longe le marché. On traverse la "
         "piste. On dépasse l'église. Ces repères aident celui qui suit l'itinéraire.",
         None),
        ("4. Décrire avec les directions",
         "On décrit le trajet avec les points cardinaux. On dit : « je pars de ma "
         "maison, je vais vers l'Ouest, je passe devant le marché et j'arrive à l'école ».",
         None),
    ],
    encadre=("rouge", "Attention !",
             "Un itinéraire suit toujours un chemin qui existe. Ne trace pas une ligne "
             "droite à travers les champs : personne ne peut marcher là."),
    resume=[
        "Un itinéraire va de la maison de l'élève jusqu'à l'école.",
        "Il suit la route ou la piste du village.",
        "On le trace avec une croix au départ et une flèche à l'arrivée.",
        "On nomme les lieux traversés pour aider celui qui suit.",
        "On le décrit avec les points cardinaux : vers l'Ouest, vers le Nord…",
    ],
    lexique=[("Itinéraire", "Le chemin que l'on suit d'un lieu à un autre."),
             ("Longer", "Marcher le long de quelque chose, sans le quitter."),
             ("Traverser", "Passer d'un côté à l'autre."),
             ("Dépasser", "Aller plus loin qu'un lieu, en continuant son chemin.")],
    exercices=[
        ("Complète avec : départ — route — flèche — Ouest — école",
         ["a) Le …… de l'itinéraire est la maison.",
          "b) Le chemin suit la …… du village.",
          "c) Une …… marque l'arrivée.",
          "d) On va vers l'…… pour arriver à l'……"],
         ["a) Le départ", "b) la route", "c) une flèche", "d) l'Ouest … l'école"]),
        ("Réponds par vrai ou faux.",
         ["a) On peut couper à travers les rizières.",
          "b) La flèche montre le sens du chemin.",
          "c) On nomme les lieux traversés.",
          "d) L'itinéraire finit à l'école."],
         ["a) Faux", "b) Vrai", "c) Vrai", "d) Vrai"]),
        ("Relie chaque mot à son rôle dans l'itinéraire.",
         ["La maison", "La route", "Le marché", "La flèche"],
         ["Le chemin suivi", "Le lieu traversé", "Le sens", "Le départ"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) D'où part l'itinéraire ?", "b) Où arrive-t-il ?",
          "c) Comment marque-t-on l'arrivée ?",
          "d) Pourquoi nomme-t-on les lieux traversés ?"],
         ["a) Il part de la maison de l'élève.", "b) Il arrive à l'école.",
          "c) On place une flèche.",
          "d) Pour aider celui qui suit le chemin à ne pas se tromper."]),
    ],
    consigne_ex5="Trace l'itinéraire de ta maison à l'école sur le plan, puis écris les "
                 "trois phrases qui le décrivent.",
    corrige_ex5="Croix à la maison, ligne qui suit la route vers l'Ouest, flèche à "
                "l'école ; phrases : « Je pars de ma maison. Je suis la route vers "
                "l'Ouest. J'arrive à l'école. »",
))

# ═══════════════════════════ SÉANCE 22 ═══════════════════════════
SEANCES.append(dict(
    n=22, semaine=8, titre="La distinction entre la ville et le village",
    objectif="Décrire une ville et un village, puis les comparer.",
    materiel="Scène d'un village, scène d'une ville, plan du village, ardoise et craie, cahier.",
    revision=[("Cite trois éléments constitutifs d'un village.",
               "R.A. : Les maisons, l'école et les rizières."),
              ("Comment reconnaît-on une route sur un plan ?",
               "R.A. : C'est un trait large.")],
    mes=("Quelle différence vois-tu entre un village et une grande ville ?",
         "R.A. : La ville est plus grande et elle a plus de bâtiments."),
    analyse=[
        ("Dans le village, comment sont les maisons ?",
         "R.A. : Elles sont basses, souvent en brique ou en terre."),
        ("Dans la ville, comment sont les maisons ?",
         "R.A. : Elles sont hautes, avec plusieurs étages."),
        ("Quelles activités fait-on au village ?",
         "R.A. : On cultive les champs et on élève des zébus."),
        ("Quelles activités fait-on en ville ?",
         "R.A. : On travaille dans les bureaux, les boutiques et les ateliers."),
        ("Où trouve-t-on le plus de services ?",
         "R.A. : En ville : hôpital, lycée, marché couvert, banque.")],
    synthese="Donc, le village est petit. Ses maisons sont basses et ses habitants vivent de "
             "l'agriculture. La ville est grande. Ses immeubles sont hauts et ses habitants "
             "travaillent dans les services et le commerce.",
    application=("Compare : a) la taille, b) les maisons, c) les activités, d) les services "
                 "du village et de la ville.",
                 "a) Petit / grand — b) Basses / à étages — c) Agriculture / commerce et "
                 "services — d) Peu nombreux / nombreux."),
    evaluation=("1. Réponds par vrai ou faux : a) Le village est plus grand que la ville. "
                "b) On cultive les champs au village. c) La ville a des immeubles. "
                "d) Il n'y a pas d'école au village.\n"
                "2. Cite deux différences entre la ville et le village.",
                "1. a) Faux — b) Vrai — c) Vrai — d) Faux.\n"
                "2. Exemple : la taille et les activités."),
    lecon_titre="La ville et le village",
    sections=[
        ("1. Deux manières d'habiter",
         "Les hommes se groupent pour habiter ensemble. Au village, les maisons sont peu "
         "nombreuses et entourées de champs. En ville, elles sont très nombreuses et serrées "
         "les unes contre les autres.",
         ("img_s22_a.png", "Figure 1 — Le village et la ville, côte à côte.", 680)),
        ("2. Les maisons",
         "Au village, les maisons sont basses. Elles n'ont qu'un rez-de-chaussée, parfois un "
         "étage. En ville, les immeubles ont plusieurs étages. La place manque, alors on "
         "construit en hauteur.", None),
        ("3. Les activités",
         "Au village, la plupart des habitants cultivent la terre. Ils travaillent dans les "
         "rizières et les champs. En ville, les habitants travaillent dans les boutiques, les "
         "bureaux, les ateliers et les usines.", None),
        ("4. Les services",
         "La ville offre plus de services : un grand marché, un hôpital, un lycée, une banque, "
         "une gare routière. Le village a souvent une école, un petit marché hebdomadaire et "
         "parfois un dispensaire.", None),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Antananarivo, la capitale, compte plus d'un million d'habitants. C'est la plus "
             "grande ville de Madagascar. Mais la majorité des Malgaches vivent encore dans "
             "un village."),
    resume=[
        "Le village est petit et la ville est grande.",
        "Au village, les maisons sont basses et entourées de champs.",
        "En ville, les immeubles ont plusieurs étages.",
        "Au village, on vit surtout de l'agriculture et de l'élevage.",
        "En ville, on travaille dans le commerce, les services et l'industrie.",
    ],
    lexique=[("Ville", "Un groupement de maisons grand, avec beaucoup d'habitants et de "
                       "services."),
             ("Village", "Un groupement de maisons petit, entouré de champs."),
             ("Immeuble", "Une maison à plusieurs étages."),
             ("Agriculture", "Le travail de la terre : cultures et élevage."),
             ("Service", "Une activité qui rend service aux gens : école, hôpital, banque.")],
    exercices=[
        ("Complète avec : village — ville — étages — champs",
         ["a) Le …… est petit et entouré de ……",
          "b) La …… est grande et ses immeubles ont plusieurs ……"],
         ["a) Le village … de champs", "b) La ville … plusieurs étages"]),
        ("Réponds par vrai ou faux.",
         ["a) La ville est plus petite que le village.",
          "b) On cultive les rizières au village.",
          "c) Les immeubles de la ville ont plusieurs étages.",
          "d) Il n'y a aucun service au village."],
         ["a) Faux", "b) Vrai", "c) Vrai", "d) Faux"]),
        ("Relie chaque lieu à ce qu'on y trouve.",
         ["Le village", "La ville", "Les deux"],
         ["Un lycée et un hôpital", "Une école", "Des rizières et des zébus"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Cite deux différences entre la ville et le village.",
          "b) Où travaille-t-on au village ?",
          "c) Pourquoi construit-on en hauteur en ville ?",
          "d) Cite trois services de la ville."],
         ["a) La taille et les activités.",
          "b) On travaille dans les champs et les rizières.",
          "c) Parce que la place manque.",
          "d) L'hôpital, le lycée et le grand marché."]),
    ],
    consigne_ex5="Observe les deux images et écris trois phrases qui comparent le village et "
                 "la ville.",
    corrige_ex5="Exemples : « Le village est petit. » « La ville a des immeubles à "
                "étages. » « Au village, on cultive les rizières. »",
))

# ═══════════════════════════ SÉANCE 23 ═══════════════════════════
SEANCES.append(dict(
    n=23, semaine=8, titre="Les différences entre ville et village",
    objectif="Distinguer les différences de taille, d'activités et de services entre la ville "
             "et le village.",
    materiel="Scène de village, scène de ville, tableau de comparaison, ardoise, cahier.",
    revision=[("Cite deux différences entre la ville et le village.",
               "R.A. : La taille et les activités."),
              ("Où cultive-t-on le riz ?", "R.A. : Au village, dans les rizières.")],
    mes=("Qu'est-ce qui manque le plus souvent au village par rapport à la ville ?",
         "R.A. : Les grands services, comme l'hôpital et le lycée."),
    analyse=[
        ("Combien d'habitants compte un village ?",
         "R.A. : Quelques centaines ou quelques milliers."),
        ("Et une ville ?", "R.A. : Des dizaines ou des centaines de milliers."),
        ("Quelles sont les activités du village ?",
         "R.A. : L'agriculture, l'élevage et l'artisanat."),
        ("Quelles sont les activités de la ville ?",
         "R.A. : Le commerce, l'industrie, l'administration et les services."),
        ("Quels services sont plus nombreux en ville ?",
         "R.A. : L'hôpital, le lycée, la banque, la gare routière.")],
    synthese="Donc, la ville et le village diffèrent par trois points. La taille : la ville "
             "compte beaucoup plus d'habitants. Les activités : agriculture au village, "
             "commerce et services en ville. Les services : ils sont plus nombreux et plus "
             "grands en ville.",
    application=("Complète le tableau : a) taille, b) activités, c) services, d) habitat, "
                 "pour le village puis la ville.",
                 "Village : petit / agriculture / peu nombreux / maisons basses. "
                 "Ville : grand / commerce et services / nombreux / immeubles."),
    evaluation=("1. Réponds par vrai ou faux : a) Le village compte plus d'habitants. "
                "b) On trouve des usines en ville. c) Le village a souvent un dispensaire. "
                "d) La ville n'a pas d'école.\n"
                "2. Cite les trois grandes différences.",
                "1. a) Faux — b) Vrai — c) Vrai — d) Faux.\n"
                "2. La taille, les activités et les services."),
    lecon_titre="Comparer la ville et le village",
    sections=[
        ("1. La différence de taille",
         "Un village compte quelques centaines ou quelques milliers d'habitants. Une ville en "
         "compte des dizaines de milliers, parfois plus d'un million. La ville occupe aussi "
         "beaucoup plus de place.",
         ("img_s22_a.png", "Figure 1 — Comparer la taille, les activités et les services.",
          660)),
        ("2. La différence d'activités",
         "Au village, on vit de la terre : riz, manioc, maïs, zébus. En ville, on vit du "
         "commerce, de l'industrie et des services. Beaucoup de citadins travaillent dans un "
         "bureau ou une boutique.", None),
        ("3. La différence de services",
         "La ville concentre les grands services : hôpital, lycée, université, banque, gare "
         "routière, marché couvert. Le village dispose d'une école primaire, d'un marché "
         "hebdomadaire et parfois d'un dispensaire.", None),
        ("4. Pourquoi quitte-t-on son village ?",
         "Beaucoup de jeunes partent en ville pour étudier ou chercher du travail. C'est "
         "l'exode rural. Il vide peu à peu les campagnes et grossit les villes.", None),
    ],
    encadre=("rouge", "Attention !",
             "Ne pense pas que le village est en retard. Le village nourrit le pays. C'est lui "
             "qui produit le riz que la ville consomme chaque jour."),
    resume=[
        "La ville et le village diffèrent par la taille.",
        "Elles diffèrent aussi par les activités des habitants.",
        "Elles diffèrent enfin par le nombre de services.",
        "La ville concentre hôpital, lycée, banque et marché couvert.",
        "Beaucoup de jeunes quittent le village pour la ville : c'est l'exode rural.",
    ],
    lexique=[("Habitant", "Une personne qui vit dans un lieu."),
             ("Industrie", "La fabrication d'objets dans des ateliers ou des usines."),
             ("Commerce", "L'activité qui consiste à acheter et à vendre."),
             ("Exode rural", "Le départ des habitants de la campagne vers la ville."),
             ("Administration", "Les services publics : mairie, préfecture, impôts.")],
    exercices=[
        ("Complète avec : taille — activités — services — habitants",
         ["a) La ville compte plus d'…… que le village.",
          "b) La première différence est la ……",
          "c) Les …… diffèrent : agriculture ou commerce.",
          "d) Les …… sont plus nombreux en ville."],
         ["a) d'habitants", "b) la taille", "c) Les activités", "d) Les services"]),
        ("Réponds par vrai ou faux.",
         ["a) On trouve des usines au village.",
          "b) L'hôpital est un service de la ville.",
          "c) L'exode rural est le départ vers la ville.",
          "d) Le village ne produit rien."],
         ["a) Faux", "b) Vrai", "c) Vrai", "d) Faux — il produit le riz"]),
        ("Relie chaque lieu à son activité principale.",
         ["Le village", "La ville", "Les deux"],
         ["L'industrie et les bureaux", "L'école", "L'agriculture"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Cite les trois grandes différences.",
          "b) Pourquoi les jeunes quittent-ils le village ?",
          "c) Quels services trouve-t-on en ville ?",
          "d) Que produit le village pour la ville ?"],
         ["a) La taille, les activités et les services.",
          "b) Pour étudier ou chercher du travail.",
          "c) L'hôpital, le lycée, la banque et le marché couvert.",
          "d) Il produit le riz et les légumes."]),
    ],
    consigne_ex5="Complète le tableau de comparaison : pour chaque critère, écris ce qui "
                 "concerne le village et ce qui concerne la ville.",
    corrige_ex5="Taille : petit / grand. Habitat : maisons basses / immeubles. Activités : "
                "agriculture / commerce et services. Services : école et dispensaire / "
                "hôpital, lycée, banque.",
))

# ═══════════════════════════ SÉANCE 24 ═══════════════════════════
SEANCES.append(dict(
    n=24, semaine=8, titre="La description du quartier où j'habite",
    objectif="Énumérer les éléments constitutifs du quartier où j'habite.",
    materiel="Scène d'un quartier, plan du quartier, ardoise et craie, cahier.",
    revision=[("Cite les trois grandes différences entre ville et village.",
               "R.A. : La taille, les activités et les services."),
              ("Cite trois services que l'on trouve en ville.",
               "R.A. : L'hôpital, le lycée et la banque.")],
    mes=("Autour de ta maison, qu'est-ce qu'il y a dans la rue ?",
         "R.A. : Des maisons, des boutiques, une école, des voisins."),
    analyse=[
        ("Comment s'appelle ton quartier ?",
         "R.A. : Il s'appelle … (réponse de l'élève)."),
        ("Quels bâtiments y a-t-il dans le quartier ?",
         "R.A. : Des maisons, des boutiques, une école et un lieu de culte."),
        ("Quelles sont les rues du quartier ?",
         "R.A. : Une avenue principale et des rues plus petites."),
        ("Y a-t-il un marché ou une place ?", "R.A. : Oui, il y a un petit marché."),
        ("Quels services trouve-t-on dans le quartier ?",
         "R.A. : Une école, une boutique, parfois un dispensaire.")],
    synthese="Donc, un quartier est une partie de la ville. Il est fait de maisons, de rues, "
             "de boutiques, d'une école, d'un lieu de culte et souvent d'un marché. Chaque "
             "élève peut décrire le quartier où il habite.",
    application=("Décris ton quartier en citant : a) deux bâtiments, b) une rue, c) un "
                 "service, d) un lieu de rencontre.",
                 "a) L'école et la mosquée — b) L'avenue principale — c) La boutique — "
                 "d) La place du marché."),
    evaluation=("1. Réponds par vrai ou faux : a) Un quartier est une partie de la ville. "
                "b) Il n'y a jamais d'école dans un quartier. c) On y trouve des boutiques. "
                "d) Chaque quartier a des rues.\n"
                "2. Cite quatre éléments de ton quartier.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n"
                "2. Exemple : des maisons, une école, une boutique et une place."),
    lecon_titre="Le quartier où j'habite",
    sections=[
        ("1. La ville est faite de quartiers",
         "Une ville est grande. On la découpe en quartiers. Chaque quartier a son nom, ses "
         "rues et ses habitants. Le quartier est l'échelle de la vie quotidienne : c'est "
         "là qu'on habite, qu'on achète et qu'on va à l'école.",
         ("scene_quartier.png", "Figure 1 — Une rue d'un quartier de ville.", 660)),
        ("2. Les maisons et les immeubles",
         "Le quartier est fait d'abord d'habitations. Ce sont des maisons individuelles ou des "
         "immeubles à étages. Elles sont alignées le long des rues. Certaines abritent "
         "aussi une boutique au rez-de-chaussée.", None),
        ("3. Les rues et les places",
         "Les rues permettent de circuler. L'avenue principale est large et passante. Les "
         "petites rues sont plus calmes. La place est un espace ouvert où les gens se "
         "rencontrent et où se tient parfois le marché.", None),
        ("4. Les services du quartier",
         "Chaque quartier offre des services de proximité : une école, une boutique, un "
         "atelier de réparation, un lieu de culte, parfois un dispensaire. C'est ce qui "
         "fait vivre le quartier.", None),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Le mot « quartier » vient de « quart » : autrefois, on divisait "
             "la ville en quatre parties. Aujourd'hui une grande ville comme Antananarivo "
             "compte des dizaines de quartiers."),
    resume=[
        "Un quartier est une partie de la ville.",
        "Il est fait de maisons et d'immeubles alignés le long des rues.",
        "L'avenue principale est large et les petites rues sont calmes.",
        "On y trouve une école, des boutiques et un lieu de culte.",
        "Chaque élève peut décrire le quartier où il habite.",
    ],
    lexique=[("Quartier", "Une partie de la ville, avec ses rues et ses habitants."),
             ("Habitant", "Une personne qui vit dans un lieu."),
             ("Avenue", "Une rue large et passante."),
             ("Place", "Un espace ouvert où les gens se rencontrent."),
             ("Proximité", "Ce qui est tout près de chez soi.")],
    exercices=[
        ("Complète avec : quartier — maisons — avenue — école — boutique",
         ["a) Un …… est une partie de la ville.",
          "b) On y trouve des …… alignées le long des rues.",
          "c) L'…… principale est large et passante.",
          "d) Chaque quartier a une …… et une ……"],
         ["a) Un quartier", "b) des maisons", "c) L'avenue", "d) une école … une boutique"]),
        ("Réponds par vrai ou faux.",
         ["a) Un quartier est une partie de la ville.",
          "b) Il n'y a jamais de boutique dans un quartier.",
          "c) La place est un espace ouvert.",
          "d) On peut décrire son quartier."],
         ["a) Vrai", "b) Faux", "c) Vrai", "d) Vrai"]),
        ("Relie chaque élément à son rôle dans le quartier.",
         ["L'avenue", "La place", "L'école", "La boutique"],
         ["Se rencontrer", "Circuler", "Acheter", "Étudier"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Qu'est-ce qu'un quartier ?", "b) Cite trois éléments d'un quartier.",
          "c) À quoi sert la place ?", "d) Cite un service de proximité."],
         ["a) C'est une partie de la ville.",
          "b) Des maisons, une rue et une école.",
          "c) Elle sert à se rencontrer et parfois à tenir le marché.",
          "d) La boutique ou le dispensaire."]),
    ],
    consigne_ex5="Écris cinq phrases pour décrire le quartier où tu habites.",
    corrige_ex5="Exemples : « J'habite le quartier d'Analamahitsy. » « Il y a une "
                "école et une boutique. » « L'avenue principale est passante. » "
                "« La place sert au marché. » « Les voisins se connaissent. »",
))

# ═══════════════════════════ SÉANCE 25 ═══════════════════════════
SEANCES.append(dict(
    n=25, semaine=9, titre="La lecture d'un plan de quartier",
    objectif="Reconnaître et orienter les éléments du quartier sur un plan.",
    materiel="Plan de quartier affiché, plan par élève, ardoise et craie, cahier.",
    revision=[("Qu'est-ce qu'un quartier ?", "R.A. : Une partie de la ville."),
              ("Où place-t-on le Nord sur un plan ?", "R.A. : En haut de la feuille.")],
    mes=("Sur le plan du quartier, comment savoir où se trouve l'école ?",
         "R.A. : En lisant la légende et en s'orientant avec le Nord."),
    analyse=[
        ("Que nous apprend le titre du plan ?",
         "R.A. : Que c'est le plan du quartier."),
        ("Où se trouve l'école sur le plan ?",
         "R.A. : Elle se trouve au Nord, en haut du plan."),
        ("Où se trouve le marché ?", "R.A. : Il se trouve au centre du quartier."),
        ("Où se trouvent les boutiques ?",
         "R.A. : Elles se trouvent à l'Est, le long de l'avenue."),
        ("Comment circule-t-on dans le quartier ?",
         "R.A. : Par l'avenue principale et les petites rues.")],
    synthese="Donc, le plan de quartier montre les maisons, les rues, l'école, le marché, les "
             "boutiques et le terrain de jeu. On le lit avec le titre, la légende, l'échelle "
             "et la flèche du Nord.",
    application=("Sur le plan, montre et nomme : a) l'école, b) le marché, c) les boutiques, "
                 "d) l'avenue principale.",
                 "a) Le rectangle bleu au Nord — b) Le rectangle rose au centre — "
                 "c) Les rectangles beiges à l'Est — d) La large bande grise."),
    evaluation=("1. Réponds par vrai ou faux : a) Le plan de quartier a un titre. "
                "b) L'école est au Sud. c) Le marché est au centre. d) On s'oriente avec le "
                "Nord.\n"
                "2. Cite quatre éléments que montre le plan de quartier.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n"
                "2. Les maisons, l'école, le marché et les boutiques."),
    lecon_titre="Lire un plan de quartier",
    sections=[
        ("1. Le plan du quartier",
         "Le plan de quartier est le dessin du quartier vu d'en haut. Il montre les îlots de "
         "maisons, les rues, les bâtiments publics et les espaces ouverts. Chaque élément "
         "est dessiné à sa place.",
         ("img_s25_a.png", "Figure 1 — Le plan d'un quartier.", 680)),
        ("2. Lire les rues et les îlots",
         "Les rues sont les bandes claires qui séparent les îlots. L'avenue principale est la "
         "plus large. Les îlots sont les blocs de maisons entre les rues. On les reconnaît "
         "à leur couleur dans la légende.", None),
        ("3. Situer les bâtiments",
         "L'école se trouve au Nord. Le marché occupe le centre. Les boutiques bordent "
         "l'avenue à l'Est. Le lieu de culte est au centre-sud. On peut situer chaque "
         "bâtiment avec les points cardinaux.", None),
        ("4. Les quatre éléments obligatoires",
         "Comme tout plan, celui du quartier porte un titre, une échelle, une légende et la "
         "flèche du Nord. Sans eux, on ne peut pas le lire correctement.", None),
    ],
    encadre=("rouge", "Attention !",
             "Sur un plan de quartier, les rues sont dessinées comme des bandes. On ne peut "
             "pas couper à travers un îlot de maisons : on suit toujours les rues."),
    resume=[
        "Le plan de quartier montre le quartier vu d'en haut.",
        "Les rues forment des bandes qui séparent les îlots.",
        "L'école est au Nord et le marché occupe le centre.",
        "Les boutiques bordent l'avenue principale, à l'Est.",
        "Le plan porte un titre, une échelle, une légende et la flèche du Nord.",
    ],
    lexique=[("Îlot", "Un bloc de maisons entouré de rues."),
             ("Bordent", "Être placé le long de quelque chose."),
             ("Bâtiment public", "Un bâtiment qui sert à tous : école, mairie, marché."),
             ("Espace ouvert", "Un lieu non construit : place, terrain de jeu.")],
    exercices=[
        ("Complète avec : îlots — avenue — école — marché — légende",
         ["a) Les rues séparent les …… de maisons.",
          "b) L'…… principale est la rue la plus large.",
          "c) L'…… se trouve au Nord et le …… au centre.",
          "d) La …… explique les couleurs du plan."],
         ["a) les îlots", "b) L'avenue", "c) L'école … le marché", "d) La légende"]),
        ("Réponds par vrai ou faux.",
         ["a) Le plan de quartier montre les rues.",
          "b) On peut couper à travers les maisons.",
          "c) Le marché est au centre du quartier.",
          "d) La flèche du Nord est inutile."],
         ["a) Vrai", "b) Faux — on suit les rues", "c) Vrai", "d) Faux"]),
        ("Relie chaque élément à sa place sur le plan.",
         ["L'école", "Le marché", "Les boutiques", "Le terrain de jeu"],
         ["Au centre", "À l'Est, le long de l'avenue", "Au Nord", "Au Sud-Est"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Cite les quatre éléments obligatoires du plan.",
          "b) Où se trouve l'école ?", "c) Comment reconnaît-on l'avenue principale ?",
          "d) Que montre un îlot ?"],
         ["a) Le titre, l'échelle, la légende et la flèche du Nord.",
          "b) Elle se trouve au Nord du quartier.",
          "c) C'est la bande la plus large du plan.",
          "d) Un bloc de maisons entouré de rues."]),
    ],
    figure_ex=("img_s25_a.png", "Figure 2 — Le plan de quartier à légender.", 640),
    consigne_ex5="Observe le plan de quartier et écris le nom de chaque élément à sa place, "
                 "puis indique où se trouve l'école par rapport au marché.",
    corrige_ex5="École au Nord ; marché au centre ; boutiques à l'Est ; maisons à "
                "l'Ouest et au Sud ; lieu de culte au centre-sud ; terrain de jeu au Sud-Est. "
                "L'école se trouve au Nord du marché.",
))

# ═══════════════════════════ SÉANCE 26 ═══════════════════════════
SEANCES.append(dict(
    n=26, semaine=9, titre="L'itinéraire dans le quartier",
    objectif="Retrouver et tracer un itinéraire sur le plan du quartier.",
    materiel="Plan de quartier, crayon de couleur, règle, ardoise et craie, cahier.",
    revision=[("Cite les quatre éléments obligatoires d'un plan.",
               "R.A. : Le titre, l'échelle, la légende et la flèche du Nord."),
              ("Où se trouve le marché sur le plan du quartier ?",
               "R.A. : Au centre du quartier.")],
    mes=("Pour aller de ta maison à l'école du quartier, quel chemin prends-tu ?",
         "R.A. : On décrit les rues que l'on suit."),
    analyse=[
        ("D'où part l'itinéraire ?", "R.A. : Il part de la maison de l'élève."),
        ("Où arrive-t-il ?", "R.A. : Il arrive à l'école du quartier."),
        ("Quelles rues suit-on ?",
         "R.A. : On suit la petite rue, puis l'avenue principale."),
        ("Dans quelle direction va-t-on ?",
         "R.A. : On va d'abord vers le Sud, puis vers l'Est."),
        ("Comment montre-t-on le chemin sur le plan ?",
         "R.A. : Avec un trait de couleur et une flèche à l'arrivée.")],
    synthese="Donc, retrouver un itinéraire sur le plan du quartier, c'est partir d'un lieu, "
             "suivre les rues et arriver à un autre lieu. On trace le chemin avec un trait "
             "de couleur et on le décrit avec les directions.",
    application=("Trace l'itinéraire de ta maison à l'école, puis réponds : a) Quelle rue "
                 "suis-tu ? b) Dans quelle direction vas-tu ? c) Que longes-tu ? "
                 "d) Où arrives-tu ?",
                 "a) La petite rue puis l'avenue — b) Vers le Sud, puis vers l'Est — "
                 "c) Le marché — d) À l'école."),
    evaluation=("1. Réponds par vrai ou faux : a) L'itinéraire suit les rues. "
                "b) On peut couper à travers les îlots. c) La flèche marque l'arrivée. "
                "d) On décrit le chemin avec les directions.\n"
                "2. Décris en trois phrases ton itinéraire vers l'école.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n"
                "2. Exemple : « Je pars de ma maison. Je suis la petite rue vers le "
                "Sud, puis l'avenue vers l'Est. J'arrive à l'école. »"),
    lecon_titre="Un itinéraire dans le quartier",
    sections=[
        ("1. Suivre les rues",
         "Dans un quartier, on ne marche pas en ligne droite. On suit les rues. C'est la "
         "première règle d'un itinéraire. Les rues relient les lieux entre eux et elles "
         "contournent les îlots de maisons.",
         ("img_s25_a.png", "Figure 1 — Un itinéraire dans le quartier.", 660)),
        ("2. Partir, passer, arriver",
         "Un itinéraire a trois moments. Le départ : la maison. Les lieux traversés : la "
         "place, le marché, l'avenue. L'arrivée : l'école. On nomme chaque lieu pour "
         "que celui qui écoute puisse suivre.", None),
        ("3. Tracer sur le plan",
         "On trace le chemin avec un crayon de couleur. On part du point de départ. On suit "
         "les bandes grises des rues. On place une flèche à l'arrivée. Le trait ne "
         "doit jamais traverser une maison.", None),
        ("4. Décrire avec les directions",
         "On décrit le trajet avec les points cardinaux. On dit : « je vais vers le "
         "Sud, puis je tourne vers l'Est ». On peut aussi nommer les lieux : « je "
         "passe devant le marché ».", None),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Les chauffeurs de taxi-brousse connaissent tous les itinéraires de leur ville "
             "par cœur. Ils savent quelle rue prendre à chaque heure de la journée "
             "pour éviter les embouteillages."),
    resume=[
        "Dans un quartier, un itinéraire suit toujours les rues.",
        "Il a trois moments : le départ, les lieux traversés et l'arrivée.",
        "On le trace avec un crayon de couleur et une flèche à l'arrivée.",
        "Le trait ne doit jamais traverser un îlot de maisons.",
        "On le décrit avec les directions et les lieux rencontrés.",
    ],
    lexique=[("Itinéraire", "Le chemin que l'on suit pour aller d'un lieu à un autre."),
             ("Contourner", "Passer autour de quelque chose sans le traverser."),
             ("Tourner", "Changer de direction, à un croisement."),
             ("Croisement", "L'endroit où deux rues se rencontrent.")],
    exercices=[
        ("Complète avec : rues — départ — arriver — flèche",
         ["a) Un itinéraire suit toujours les ……",
          "b) Le …… est le lieu d'où l'on part.",
          "c) On …… à l'école.",
          "d) Une …… marque l'arrivée sur le plan."],
         ["a) les rues", "b) Le départ", "c) arrive", "d) une flèche"]),
        ("Réponds par vrai ou faux.",
         ["a) On peut couper à travers les maisons.",
          "b) Le trait suit les bandes grises des rues.",
          "c) La flèche montre l'arrivée.",
          "d) On décrit le chemin avec les directions."],
         ["a) Faux", "b) Vrai", "c) Vrai", "d) Vrai"]),
        ("Relie chaque mot à son rôle dans l'itinéraire.",
         ["La maison", "L'avenue", "La flèche", "Le marché"],
         ["La rue suivie", "Le lieu traversé", "Le départ", "L'arrivée"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Cite les trois moments d'un itinéraire.",
          "b) Que ne doit jamais faire le trait ?",
          "c) Comment décrit-on le trajet ?",
          "d) Que marque la flèche ?"],
         ["a) Le départ, les lieux traversés et l'arrivée.",
          "b) Il ne doit jamais traverser une maison.",
          "c) Avec les directions et les lieux rencontrés.",
          "d) Elle marque l'arrivée."]),
    ],
    consigne_ex5="Trace sur le plan l'itinéraire qui va de ta maison à l'école du quartier, "
                 "puis écris les trois phrases qui le décrivent.",
    corrige_ex5="Trait qui suit la petite rue vers le Sud puis l'avenue vers l'Est ; flèche à "
                "l'école. Phrases : « Je pars de ma maison. Je suis la petite rue vers "
                "le Sud, puis l'avenue vers l'Est. J'arrive à l'école. »",
))

# ═══════════════════════════ SÉANCE 27 ═══════════════════════════
SEANCES.append(dict(
    n=27, semaine=9, titre="Synthèse : le repérage dans l'espace proche",
    objectif="Réviser l'ensemble du trimestre : points cardinaux, rose des vents, plans de la "
             "classe, de l'école et du village, quartier.",
    materiel="Plan de la classe, plan de l'école, plan du village, plan du quartier, rose des "
             "vents, ardoise et craie, cahier.",
    revision=[("Cite les quatre points cardinaux.", "R.A. : Le Nord, le Sud, l'Est, l'Ouest."),
              ("Cite les quatre éléments obligatoires d'un plan.",
               "R.A. : Le titre, l'échelle, la légende et l'orientation.")],
    mes=("Depuis le début du trimestre, qu'avons-nous appris à faire ?",
         "R.A. : À nous repérer et à lire des plans."),
    analyse=[
        ("Comment trouve-t-on l'Est sans instrument ?",
         "R.A. : En regardant le côté où le soleil se lève."),
        ("Combien de directions compte la rose des vents ?", "R.A. : Huit."),
        ("Cite les quatre directions intermédiaires.",
         "R.A. : Le Nord-Est, le Nord-Ouest, le Sud-Est et le Sud-Ouest."),
        ("Cite les quatre éléments obligatoires d'un plan.",
         "R.A. : Le titre, l'échelle, la légende et la flèche du Nord."),
        ("Quelle est la différence entre un village et une ville ?",
         "R.A. : Le village est petit et vit de l'agriculture ; la ville est grande et vit "
         "du commerce et des services.")],
    synthese="Donc, tout le trimestre a servi à apprendre à se repérer. Le soleil donne "
             "l'Est et l'Ouest. La rose des vents donne les huit directions. Le plan "
             "représente un lieu vu d'en haut, avec un titre, une échelle, une légende "
             "et la flèche du Nord.",
    application=("Révision guidée : a) Trace une croix des points cardinaux. b) Trace une "
                 "rose des vents. c) Cite les quatre éléments d'un plan. d) Situe "
                 "l'école par rapport au marché du village.",
                 "a) N en haut, S en bas, E à droite, O à gauche — b) Croix, "
                 "diagonales, cercle et lettres — c) Titre, échelle, légende, "
                 "orientation — d) L'école est à l'Ouest du marché."),
    evaluation=("1. Réponds par vrai ou faux : a) Le soleil se lève à l'Est. "
                "b) La rose des vents compte quatre directions. c) Un plan se lit avec une "
                "légende. d) Le Nord est en haut du plan.\n"
                "2. Trace le plan de la classe avec ses quatre éléments.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n"
                "2. Rectangle à l'échelle + meubles placés + titre, échelle, "
                "légende et flèche du Nord."),
    lecon_titre="Révision du trimestre : se repérer",
    sections=[
        ("1. Le soleil, première boussole",
         "Le soleil se lève à l'Est et il se couche à l'Ouest. Il suffit d'une seule "
         "direction pour trouver les autres. Le matin, on tend le bras droit vers le soleil "
         "levant : on a alors le Nord devant soi.",
         ("img_s01_a.png", "Figure 1 — Le trajet du soleil, du lever au coucher.", 620)),
        ("2. Les huit directions",
         "Les quatre points cardinaux sont le Nord, le Sud, l'Est et l'Ouest. Les quatre "
         "directions intermédiaires sont le Nord-Est, le Nord-Ouest, le Sud-Est et le "
         "Sud-Ouest. La rose des vents les rassemble.",
         ("img_s04_a.png", "Figure 2 — La rose des vents à huit directions.", 460)),
        ("3. Lire un plan",
         "Un plan représente un lieu vu d'en haut. Il porte toujours quatre éléments : "
         "un titre, une échelle, une légende et la flèche du Nord. Nous avons lu le "
         "plan de la classe, celui de l'école, celui du village et celui du quartier.",
         ("img_s16_a.png", "Figure 3 — Le plan du village.", 620)),
        ("4. Du village à la ville",
         "Le village est petit. Ses maisons sont basses et ses habitants cultivent la terre. "
         "La ville est grande. Elle a des immeubles, des services et des quartiers. Le "
         "quartier est une partie de la ville.",
         ("img_s22_a.png", "Figure 4 — Le village et la ville.", 620)),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Au prochain trimestre, tu quitteras l'espace proche. Tu apprendras à lire "
             "la carte de Madagascar tout entière, avec ses régions, ses fleuves et ses "
             "montagnes. Les mêmes règles serviront."),
    resume=[
        "Le soleil se lève à l'Est et se couche à l'Ouest.",
        "La rose des vents rassemble les huit directions.",
        "Un plan montre un lieu vu d'en haut.",
        "Tout plan porte un titre, une échelle, une légende et la flèche du Nord.",
        "Le village vit de l'agriculture et la ville du commerce et des services.",
    ],
    lexique=[("Se repérer", "Savoir où l'on est et dans quelle direction aller."),
             ("Point cardinal", "Une des quatre directions de base."),
             ("Direction intermédiaire", "Une direction placée entre deux points cardinaux."),
             ("Échelle", "Le rapport entre la longueur sur le plan et la longueur réelle."),
             ("Légende", "La case qui explique les couleurs et les signes du plan.")],
    exercices=[
        ("Complète avec : Est — Ouest — Nord — Sud — huit",
         ["a) Le soleil se lève à l'……", "b) Il se couche à l'……",
          "c) Le …… est en haut du plan.", "d) La rose des vents compte …… "
          "directions."],
         ["a) à l'Est", "b) à l'Ouest", "c) Le Nord", "d) huit"]),
        ("Réponds par vrai ou faux.",
         ["a) Le Sud est en bas du plan.",
          "b) Un plan peut se passer de légende.",
          "c) Le Nord-Est est une direction intermédiaire.",
          "d) La ville est plus petite que le village."],
         ["a) Vrai", "b) Faux", "c) Vrai", "d) Faux"]),
        ("Relie chaque notion à ce qu'elle permet de faire.",
         ["Le soleil", "La rose des vents", "L'échelle", "La légende"],
         ["Connaître les grandeurs réelles", "Lire les couleurs du plan",
          "Trouver l'Est et l'Ouest", "Lire les huit directions"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Cite les quatre éléments obligatoires d'un plan.",
          "b) Comment trouve-t-on le Nord le matin ?",
          "c) Cite deux différences entre ville et village.",
          "d) Combien de directions compte la rose des vents ?"],
         ["a) Le titre, l'échelle, la légende et la flèche du Nord.",
          "b) On tend le bras droit vers le soleil levant : le Nord est devant nous.",
          "c) La taille et les activités.",
          "d) Elle compte huit directions."]),
    ],
    consigne_ex5="Trace une rose des vents complète et le plan de la classe avec ses quatre "
                 "éléments obligatoires.",
    corrige_ex5="Rose : croix, quatre diagonales, cercle et lettres N, S, E, O. Plan : "
                "rectangle 8 cm × 6 cm, mobilier placé, titre, échelle 1 cm = 1 m, "
                "légende et flèche du Nord.",
))

# ═══════════════════════════ SÉANCE 28 ═══════════════════════════
SEANCES.append(dict(
  n=28, semaine=10, titre="Révision de l'unité I",
  objectif="Revoir les notions de l'unité I pour préparer le sujet d'examen.",
  materiel="Plans de la classe, de l'école, du village et du quartier, rose des vents, ""ardoise et craie, cahier.",
  illustration=("scene_village.png",
         "Illustration — Le village : ses maisons, ses rizières, sa route et son ""école.", 660),
  revision=[("Cite les quatre points cardinaux.", "R.A. : Le Nord, le Sud, l'Est, l'Ouest."),
       ("Cite les quatre éléments obligatoires d'un plan.",
        "R.A. : Le titre, l'échelle, la légende et la flèche du Nord.")],
  mes=("Avant l'examen, que devons-nous revoir ?",
     "R.A. : Tout ce que nous avons appris depuis la première séance."),
  analyse=[
    ("Comment trouve-t-on l'Est sans boussole ?",
     "R.A. : En observant le côté où le soleil se lève."),
    ("Combien de directions compte la rose des vents ?", "R.A. : Huit."),
    ("Cite les quatre directions intermédiaires.",
     "R.A. : Le Nord-Est, le Nord-Ouest, le Sud-Est et le Sud-Ouest."),
    ("Que montre l'échelle d'un plan ?",
     "R.A. : Le rapport entre la longueur sur le plan et la longueur réelle."),
    ("Qu'est-ce qui distingue un quartier d'un village ?",
     "R.A. : Le quartier est une partie de la ville ; le village est à la campagne.")],
  synthese="Donc, revoir l'unité I, c'est retenir trois choses : les points cardinaux, ""la rose des vents, et les quatre éléments d'un plan. Tout le reste en ""découle.",
  application=("Révision rapide : a) Trace la croix des points cardinaux. b) Trace une ""rose des vents. c) Cite les quatre éléments d'un plan. d) Situe ""l'école par rapport au marché.",
         "a) N en haut, S en bas, E à droite, O à gauche — b) Croix, ""diagonales, cercle et lettres — c) Titre, échelle, légende, ""orientation — d) L'école est à l'Ouest du marché."),
  evaluation=("1. Réponds par vrai ou faux : a) Le soleil se couche à l'Ouest. ""b) La rose des vents compte quatre directions. c) Un plan se lit avec ""une légende. d) Le Nord est en haut du plan.\n""2. Trace le plan de la classe avec ses quatre éléments.",
        "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n""2. Rectangle à l'échelle, mobilier placé, titre, échelle, ""légende et flèche du Nord."),
  lecon_titre="Révision de l'unité I",
  sections=[
    ("1. Les points cardinaux",
     "Le soleil se lève à l'Est et il se couche à l'Ouest. Le Nord et le Sud ""complètent la croix. Sur un plan, le Nord est toujours en haut. Cette croix est ""la base de tout le repérage : sans elle, aucune direction n'a de sens.",
     ("img_s02_a.png", "Figure 1 — La croix des quatre points cardinaux.", 460)),
    ("2. La rose des vents",
     "La rose des vents ajoute quatre directions intermédiaires : le Nord-Est, le ""Nord-Ouest, le Sud-Est et le Sud-Ouest. Elle compte donc huit directions. On ""s'en sert pour donner une direction plus précise que les quatre points ""cardinaux.",
     ("img_s04_a.png", "Figure 2 — La rose des vents à huit directions.", 460)),
    ("3. Les éléments d'un plan",
     "Tout plan porte quatre éléments obligatoires : un titre qui nomme le lieu, une ""échelle qui donne les grandeurs réelles, une légende qui explique les ""signes et les couleurs, et la flèche du Nord qui oriente le plan. Si l'un ""manque, le plan est incomplet.",
     ("img_s07_a.png", "Figure 3 — Les quatre éléments obligatoires d'un plan.", 620)),
    ("4. Du plan au terrain",
     "Nous avons lu le plan de la classe, celui de l'école, celui du village et ""celui du quartier. Chaque fois, les mêmes règles s'appliquent. Nous avons aussi ""appris à tracer un itinéraire en suivant les rues, et à comparer le village, ""la ville et le quartier.",
     ("img_s16_a.png", "Figure 4 — Le plan du village, avec sa légende.", 620)),
  ],
  encadre=("vert", "Le savais-tu ?",
       "Les géomètres utilisent les mêmes règles que toi depuis des siècles : une ""échelle, une orientation et des signes. Seuls les instruments ont changé."),
  resume=[
    "Le soleil donne l'Est et l'Ouest, donc les quatre points cardinaux.",
    "La rose des vents compte huit directions.",
    "Tout plan porte un titre, une échelle, une légende et la flèche du Nord.",
    "Un itinéraire suit toujours les rues et se décrit avec les directions.",
    "Le village vit de l'agriculture, la ville du commerce et des services.",
  ],
  lexique=[("Point cardinal", "Une des quatre directions de base."),
       ("Direction intermédiaire", "Une direction placée entre deux points cardinaux."),
       ("Échelle", "Le rapport entre la longueur sur le plan et la longueur réelle."),
       ("Légende", "La case qui explique les signes et les couleurs du plan.")],
  exercices=[
    ("Complète avec : Est — Ouest — Nord — Sud — huit",
     ["a) Le soleil se lève à l'……", "b) Il se couche à l'……",
     "c) Le …… est en haut du plan.", "d) La rose des vents compte …… ""directions."],
     ["a) à l'Est", "b) à l'Ouest", "c) Le Nord", "d) huit"]),
    ("Réponds par vrai ou faux.",
     ["a) Le Sud est en bas du plan.",
     "b) Un plan peut se passer de légende.",
     "c) Le Nord-Est est une direction intermédiaire.",
     "d) La ville est plus petite que le village."],
     ["a) Vrai", "b) Faux", "c) Vrai", "d) Faux"]),
    ("Relie chaque notion à ce qu'elle permet de faire.",
     ["Le soleil", "La rose des vents", "L'échelle", "La légende"],
     ["Connaître les grandeurs réelles", "Lire les couleurs du plan",
     "Trouver l'Est et l'Ouest", "Lire les huit directions"]),
    ("Réponds aux questions par une phrase complète.",
     ["a) Cite les quatre éléments obligatoires d'un plan.",
     "b) Comment trouve-t-on le Nord le matin ?",
     "c) Cite deux différences entre ville et village.",
     "d) Que suit toujours un itinéraire ?"],
     ["a) Le titre, l'échelle, la légende et la flèche du Nord.",
     "b) On tend le bras droit vers le soleil levant : le Nord est devant nous.",
     "c) La taille et les activités des habitants.",
     "d) Il suit toujours les rues."]),
  ],
  consigne_ex5="Trace une rose des vents complète et le plan du village avec ses quatre ""éléments obligatoires.",
  corrige_ex5="Rose : croix, quatre diagonales, cercle et lettres N, S, E, O. Plan : ""forme du village à l'échelle, maisons et rizières placés, ""titre, échelle, légende et flèche du Nord.",
))

# ═══════════════════════════ SÉANCE 29 — SUJET D'EXAMEN ════════════════════
SEANCES.append(dict(
  n=29, semaine=10, titre="Sujet d'examen 9e — Unité I",
  type="examen",
  objectif="Vérifier les acquis de l'unité I : le repérage dans l'espace proche.",
  materiel="Sujet imprimé, feuille de réponse, plan du village en document.",
  examen=[
    ("I. Questions de cours", 6, [
      "1. Cite les quatre points cardinaux.",
      "2. De quel côté le soleil se lève-t-il ? Et de quel côté se ""couche-t-il ?",
      "3. Combien de directions compte la rose des vents ? Cite les quatre ""directions intermédiaires.",
      "4. Cite les quatre éléments obligatoires d'un plan.",
      "5. Qu'appelle-t-on l'échelle d'un plan ?",
      "6. Cite deux différences entre un village et une ville.",
    ]),
    ("II. Exercices", 8, [
      "1. Complète avec les mots proposés : Est — Ouest — Nord — ""Sud — huit.",
      "a) Le soleil se lève à l'……",
      "b) Le soleil se couche à l'……",
      "c) Le …… est en haut du plan.",
      "d) La rose des vents compte …… directions.",
      "2. Réponds par vrai ou faux.",
      "a) Le Sud est en bas du plan.",
      "b) Un plan peut se passer de légende.",
      "c) Le Nord-Est est une direction intermédiaire.",
      "d) La ville est plus petite que le village.",
      "3. Relie chaque notion à ce qu'elle permet de faire.",
      "Le soleil — La rose des vents — L'échelle — La légende",
      "Lire les huit directions — Connaître les grandeurs réelles — ""Trouver l'Est et l'Ouest — Lire les couleurs du plan",
      "4. Réponds par une phrase complète.",
      "a) Pourquoi un plan a-t-il besoin d'une légende ?",
      "b) Que suit toujours un itinéraire dans un quartier ?",
    ]),
    ("III. Savoir-faire sur document", 6, [
      "Document : le plan du village ci-dessous.",
      "a) Nomme les quatre éléments obligatoires que doit porter ce plan. ""(2 points)",
      "b) Situe l'école par rapport au marché. (1 point)",
      "c) Trace l'itinéraire qui va du dispensaire à l'école. ""(2 points)",
      "d) Dans quelle direction va-t-on en suivant cet itinéraire ? (1 point)",
    ]),
  ],
  figure_ex=("img_s16_a.png", "Document — Le plan du village (à compléter).", 620),
  corrige_examen=[
    ("I. Questions de cours", 6, None, [
      "1. Le Nord, le Sud, l'Est et l'Ouest. (1 point)",
      "2. Le soleil se lève à l'Est et il se couche à l'Ouest. (1 point)",
      "3. Huit directions. Les quatre directions intermédiaires sont le Nord-Est, ""le Nord-Ouest, le Sud-Est et le Sud-Ouest. (1 point)",
      "4. Le titre, l'échelle, la légende et la flèche du Nord. (1 point)",
      "5. L'échelle est le rapport entre la longueur sur le plan et la longueur ""réelle sur le terrain. (1 point)",
      "6. Le village est petit et vit de l'agriculture ; la ville est grande et vit ""du commerce et des services. (1 point)",
    ]),
    ("II. Exercices", 8, None, [
      "1. a) à l'Est — b) à l'Ouest — c) Le Nord — d) huit. ""(0,5 point par réponse)",
      "2. a) Vrai — b) Faux — c) Vrai — d) Faux. ""(0,5 point par réponse)",
      "3. Le soleil → trouver l'Est et l'Ouest ; la rose des vents → lire ""les huit directions ; l'échelle → connaître les grandeurs réelles"" ; la légende → lire les couleurs du plan. (0,5 point par réponse)",
      "4. a) Parce que sans légende on ne peut pas comprendre les signes et les ""couleurs du plan. b) Un itinéraire suit toujours les rues. (1 point par ""réponse)",
    ]),
    ("III. Savoir-faire sur document", 6, None, [
      "a) Le titre, l'échelle, la légende et la flèche du Nord. (2 points)",
      "b) L'école est à l'Ouest du marché. (1 point)",
      "c) Trait qui part du dispensaire, suit la rue principale vers le Nord, puis ""tourne vers l'Ouest jusqu'à l'école. (2 points)",
      "d) On va d'abord vers le Nord, puis vers l'Ouest. (1 point)",
    ]),
  ],
))

# ═══════════════════════════ SÉANCE 30 ═══════════════════════════
SEANCES.append(dict(
    n=30, semaine=10, titre="Découvrir la carte de Madagascar",
    objectif="Reconnaître une carte, son titre, sa légende et son échelle.",
    materiel="Carte de Madagascar affichée au mur, carte individuelle, règle, ardoise et "
             "craie, cahier.",
    illustration=("img_s30_a.png",
                  "Illustration — La carte de Madagascar : son titre, sa légende, son "
                  "échelle et sa flèche du Nord.", 470),
    revision=[("Cite les quatre éléments obligatoires d'un plan.",
               "R.A. : Le titre, l'échelle, la légende et la flèche du Nord."),
              ("Qu'est-ce qu'un plan ?",
               "R.A. : Un dessin qui représente un lieu vu d'en haut.")],
    mes=("Quand tu regardes Madagascar affiché au mur de la classe, qu'est-ce que tu vois ?",
         "R.A. : La forme de notre pays, entourée par la mer."),
    analyse=[
        ("Quel est le titre écrit en haut de la carte ?",
         "R.A. : « Carte de Madagascar »."),
        ("Que fait la case « LÉGENDE » ?",
         "R.A. : Elle explique les couleurs : le vert pour la terre, le bleu pour la mer."),
        ("Que montre l'échelle sous la carte ?",
         "R.A. : Elle donne les distances réelles : 0, 200 km et 400 km."),
        ("Où est placée la flèche du Nord ?",
         "R.A. : En haut à droite ; elle pointe vers le haut de la carte."),
        ("Quelle forme a notre pays ?",
         "R.A. : Une forme allongée, du nord vers le sud, entourée d'eau.")],
    synthese="Donc, une carte est le dessin d'un pays tout entier vu d'en haut. Comme le "
             "plan, elle porte un titre, une légende, une échelle et la flèche du Nord. "
             "Ces quatre éléments sont obligatoires : sans eux, une carte n'est "
             "qu'un dessin.",
    application=("Observe la carte et réponds : a) Quel est son titre ? b) Que signifie la "
                 "couleur bleue ? c) Que mesure l'échelle ? d) Où se trouve le Nord ?",
                 "a) Carte de Madagascar — b) La mer — c) Les distances "
                 "réelles en kilomètres — d) En haut."),
    evaluation=("1. Réponds par vrai ou faux : a) Une carte représente un pays vu d'en "
                "haut. b) La légende explique les couleurs. c) L'échelle donne la "
                "hauteur des montagnes. d) La flèche du Nord indique le haut de la "
                "carte.\n2. Cite les quatre éléments obligatoires d'une carte.",
                "1. a) Vrai — b) Vrai — c) Faux — d) Vrai.\n"
                "2. Le titre, la légende, l'échelle et la flèche du Nord."),
    lecon_titre="La carte de Madagascar",
    sections=[
        ("1. Une carte représente un pays entier",
         "Au trimestre dernier, tu as appris à lire le plan de ta classe et celui de "
         "ton village. La carte fonctionne exactement de la même manière, mais elle "
         "montre quelque chose de bien plus grand : un pays tout entier. La carte de "
         "Madagascar représente notre île vue du ciel, comme si un avion l'avait "
         "photographiée de très haut. Autour d'elle, la couleur bleue montre la mer qui "
         "l'entoure de tous les côtés."),
        ("2. Le titre",
         "Le titre est écrit en haut, en grosses lettres : « CARTE DE MADAGASCAR ». "
         "Il dit de quel lieu parle la carte. Sans titre, on ne sait pas ce que l'on "
         "regarde. C'est la première chose à chercher quand on ouvre un atlas.",),
        ("3. La légende",
         "La légende est la petite case qui explique les couleurs et les signes. Ici, "
         "le vert désigne la terre et le bleu désigne la mer. Chaque carte a sa "
         "propre légende : il faut toujours la lire avant de répondre, car les couleurs "
         "changent d'une carte à l'autre."),
        ("4. L'échelle",
         "L'échelle est la règle graduée dessinée sous la carte. Sur cette carte, un "
         "trait porte les nombres 0, 200 km et 400 km. Grâce à elle, on peut mesurer "
         "une distance sur le papier et savoir combien de kilomètres il faut parcourir "
         "vraiment. C'est ce qui distingue un croquis d'une vraie carte."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Madagascar est la quatrième plus grande île du monde. Elle mesure environ "
             "1 580 km du nord au sud : pour la parcourir en voiture, il faut plusieurs "
             "journées entières."),
    resume=[
        "Une carte représente un pays tout entier, vu d'en haut.",
        "Le titre dit de quel lieu parle la carte.",
        "La légende explique les couleurs et les signes utilisés.",
        "L'échelle permet de mesurer les distances réelles en kilomètres.",
        "Une carte porte toujours les quatre mêmes éléments qu'un plan.",
    ],
    lexique=[("Carte", "Le dessin d'un pays ou d'une région, vu d'en haut."),
             ("Titre", "Le nom du lieu représenté, écrit en haut de la carte."),
             ("Légende", "La case qui explique les couleurs et les signes de la carte."),
             ("Échelle", "La règle qui donne les distances réelles en kilomètres."),
             ("Île", "Une terre entourée d'eau de tous les côtés.")],
    exercices=[
        ("Complète avec : titre — légende — échelle — Nord",
         ["a) Le …… dit de quel lieu parle la carte.",
          "b) La …… explique les couleurs.",
          "c) L'…… donne les distances réelles.",
          "d) La flèche du …… indique le haut de la carte."],
         ["a) Le titre", "b) La légende", "c) L'échelle", "d) du Nord"]),
        ("Réponds par vrai ou faux.",
         ["a) Une carte montre un pays vu d'en haut.",
          "b) Madagascar est entourée de terre de tous les côtés.",
          "c) La légende explique les couleurs.",
          "d) Sans échelle, on peut quand même mesurer les distances."],
         ["a) Vrai", "b) Faux", "c) Vrai", "d) Faux"]),
        ("Relie chaque élément à ce qu'il indique.",
         ["Le titre", "La légende", "L'échelle", "La flèche du Nord"],
         ["Les couleurs", "Le nom du lieu", "Le haut de la carte", "Les kilomètres"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Cite les quatre éléments obligatoires d'une carte.",
          "b) Que désigne la couleur bleue sur cette carte ?",
          "c) À quoi sert l'échelle ?",
          "d) Quelle est la forme de Madagascar ?"],
         ["a) Le titre, la légende, l'échelle et la flèche du Nord.",
          "b) Elle désigne la mer.",
          "c) Elle sert à mesurer les distances réelles.",
          "d) Une forme allongée, du nord vers le sud."]),
    ],
    consigne_ex5="Recopie la carte de Madagascar au format paysage dans ton cahier, puis "
                 "écris son titre, sa légende et son échelle.",
    corrige_ex5="Silhouette allongée du nord au sud, entourée de bleu. Titre « Carte "
                "de Madagascar ». Légende : vert = la terre, bleu = la mer. "
                "Échelle : trait gradué de 0 à 400 km.",
))

# ═══════════════════════════ SÉANCE 31 ═══════════════════════════
SEANCES.append(dict(
    n=31, semaine=10, titre="Orienter la carte de Madagascar",
    objectif="Placer le Nord en haut, le Sud en bas, l'Ouest à gauche et l'Est à "
             "droite sur la carte.",
    materiel="Carte de Madagascar affichée, carte individuelle, rose des vents, ardoise et "
             "craie, cahier.",
    illustration=("img_s31_a.png",
                  "Illustration — La carte orientée : N en haut, S en bas, E à "
                  "droite, O à gauche.", 460),
    revision=[("Cite les quatre éléments obligatoires d'une carte.",
               "R.A. : Le titre, la légende, l'échelle et la flèche du Nord."),
              ("Où le soleil se lève-t-il ?", "R.A. : À l'Est.")],
    mes=("Sur la carte affichée, de quel côté se trouve le Nord ?",
         "R.A. : En haut de la carte."),
    analyse=[
        ("Où place-t-on le Nord sur une carte ?", "R.A. : En haut."),
        ("Où place-t-on le Sud ?", "R.A. : En bas."),
        ("Où place-t-on l'Est ?", "R.A. : À droite."),
        ("Où place-t-on l'Ouest ?", "R.A. : À gauche."),
        ("Que fait la flèche du Nord ?",
         "R.A. : Elle rappelle que le haut de la carte est le Nord.")],
    synthese="Donc, sur toute carte, le Nord est en haut, le Sud en bas, l'Est à "
             "droite et l'Ouest à gauche. C'est la règle d'orientation : elle ne "
             "change jamais, quelle que soit la carte.",
    application=("Sur la carte, place les lettres N, S, E et O aux quatre bords, puis "
                 "réponds : a) De quel côté est la mer, à gauche ou à "
                 "droite de la capitale ? b) Cite une région située au nord.",
                 "a) Des deux côtés, car Madagascar est une île — "
                 "b) Antsiranana."),
    evaluation=("1. Réponds par vrai ou faux : a) Le Nord est en bas de la carte. "
                "b) L'Est est à droite. c) L'Ouest est à gauche. d) Le Sud "
                "est en haut.\n2. Trace une croix d'orientation et place les quatre "
                "points cardinaux.",
                "1. a) Faux — b) Vrai — c) Vrai — d) Faux.\n"
                "2. N en haut, S en bas, E à droite, O à gauche."),
    lecon_titre="L'orientation de la carte",
    sections=[
        ("1. La règle d'orientation",
         "Une carte est toujours orientée de la même façon : le Nord en haut, le Sud "
         "en bas, l'Est à droite et l'Ouest à gauche. Cette règle est "
         "universelle : les marins, les pilotes et les géographes du monde entier "
         "l'utilisent. C'est pour cela que l'on peut lire une carte d'un autre pays sans "
         "apprendre de nouvelles règles."),
        ("2. La flèche du Nord",
         "La flèche du Nord est dessinée sur la carte, souvent dans un coin. Elle "
         "pointe vers le haut. Elle rappelle la règle et permet de ne pas se tromper : "
         "sur certaines cartes anciennes ou schématiques, le Nord n'est pas toujours "
         "en haut, et seule la flèche le dit."),
        ("3. Retrouver les points cardinaux sans la flèche",
         "Même sans flèche, on retrouve son chemin. Le haut de la feuille est le Nord. "
         "Le bord droit est l'Est, le côté où le soleil se lève. Le bord "
         "gauche est l'Ouest, le côté où il se couche. Le bas est le Sud. Il "
         "suffit de retenir la croix apprise au trimestre dernier."),
        ("4. Pourquoi orienter ?",
         "Orienter une carte, c'est la faire correspondre au terrain. Quand on pose la "
         "carte à plat devant soi et que l'on tourne autour jusqu'à ce que son "
         "Nord soit du côté du Nord réel, tous les lieux de la carte sont "
         "alors dans la bonne direction. C'est le geste de base de celui qui se déplace "
         "avec une carte."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Les cartes anciennes plaçaient parfois le Sud en haut, ou Jérusalem au "
             "centre. La règle du Nord en haut s'est imposée avec la boussole, il y "
             "a environ six cents ans."),
    resume=[
        "Sur toute carte, le Nord est en haut et le Sud en bas.",
        "L'Est est à droite et l'Ouest est à gauche.",
        "La flèche du Nord rappelle cette règle.",
        "L'Est est le côté où le soleil se lève.",
        "Orienter une carte, c'est la faire correspondre au terrain.",
    ],
    lexique=[("Orienter", "Placer une carte dans le bon sens, par rapport au Nord."),
             ("Flèche du Nord", "Le signe qui indique le Nord sur une carte."),
             ("Point cardinal", "Une des quatre directions de base."),
             ("Universel", "Qui est le même partout dans le monde.")],
    exercices=[
        ("Complète avec : Nord — Sud — Est — Ouest",
         ["a) Le …… est en haut de la carte.",
          "b) Le …… est en bas de la carte.",
          "c) L'…… est à droite.", "d) L'…… est à gauche."],
         ["a) Le Nord", "b) Le Sud", "c) L'Est", "d) L'Ouest"]),
        ("Réponds par vrai ou faux.",
         ["a) Le Nord est en haut de la carte.",
          "b) L'Est est à gauche de la carte.",
          "c) Le soleil se lève à l'Est.",
          "d) La flèche du Nord pointe vers le bas."],
         ["a) Vrai", "b) Faux", "c) Vrai", "d) Faux"]),
        ("Relie chaque point cardinal à sa place sur la carte.",
         ["Le Nord", "Le Sud", "L'Est", "L'Ouest"],
         ["En bas", "À gauche", "En haut", "À droite"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Où place-t-on le Nord sur une carte ?",
          "b) À quoi sert la flèche du Nord ?",
          "c) De quel côté le soleil se couche-t-il ?",
          "d) Que fait-on quand on oriente une carte ?"],
         ["a) En haut de la carte.",
          "b) Elle indique de quel côté se trouve le Nord.",
          "c) Du côté de l'Ouest.",
          "d) On la tourne pour que son Nord soit du côté du Nord réel."]),
    ],
    consigne_ex5="Trace la silhouette de Madagascar, place la croix des quatre points "
                 "cardinaux aux quatre bords et dessine la flèche du Nord.",
    corrige_ex5="Silhouette allongée. N en haut, S en bas, E à droite, O à "
                "gauche. Flèche rouge pointée vers le haut.",
))

# ═══════════════════════════ SÉANCE 32 ═══════════════════════════
SEANCES.append(dict(
    n=32, semaine=10, titre="Situer les villes de Madagascar",
    objectif="Localiser les grandes villes de Madagascar sur la carte.",
    materiel="Carte de Madagascar avec les villes, carte muette individuelle, crayon, "
             "ardoise et craie, cahier.",
    illustration=("img_s32_a.png",
                  "Illustration — Les grandes villes de Madagascar sur la carte.", 460),
    revision=[("Cite les quatre éléments obligatoires d'une carte.",
               "R.A. : Le titre, la légende, l'échelle et la flèche du Nord."),
              ("Où place-t-on l'Est sur une carte ?", "R.A. : À droite.")],
    mes=("Cite le nom d'une grande ville de Madagascar que tu connais.",
         "R.A. : Antananarivo, Toamasina, Mahajanga…"),
    analyse=[
        ("Où se trouve Antananarivo ?", "R.A. : Au centre de l'île."),
        ("Où se trouve Toamasina ?", "R.A. : Sur la côte Est."),
        ("Où se trouve Mahajanga ?", "R.A. : Sur la côte Ouest, au nord."),
        ("Où se trouve Antsiranana ?", "R.A. : À la pointe nord de l'île."),
        ("Où se trouve Toliara ?", "R.A. : Sur la côte Ouest, au sud.")],
    synthese="Donc, les grandes villes de Madagascar se repèrent sur la carte grâce aux "
             "points cardinaux : Antsiranana au nord, Toamasina à l'est, Mahajanga et "
             "Toliara à l'ouest, Antananarivo au centre.",
    application=("Sur ta carte muette, place les sept villes étudiées, puis réponds : "
                 "a) Quelle ville est la capitale ? b) Quelle ville est sur la côte "
                 "Est ? c) Quelle ville est au nord ? d) Quelle ville est au sud-ouest ?",
                 "a) Antananarivo — b) Toamasina — c) Antsiranana — "
                 "d) Toliara."),
    evaluation=("1. Réponds par vrai ou faux : a) Antananarivo est au centre de "
                "l'île. b) Toamasina est sur la côte Ouest. c) Antsiranana est au "
                "nord. d) Toliara est sur la côte Est.\n"
                "2. Cite trois villes de Madagascar et dis où elles se trouvent.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Faux.\n"
                "2. Exemple : Antananarivo au centre, Toamasina à l'est, Mahajanga "
                "à l'ouest."),
    lecon_titre="Les grandes villes de Madagascar",
    sections=[
        ("1. Antananarivo, la capitale",
         "Antananarivo se trouve au centre de l'île, loin de la mer, sur les "
         "hauteurs. C'est la capitale : le gouvernement et les grandes administrations y "
         "travaillent. Parce qu'elle est au centre, les routes et les voies ferrées "
         "partent d'elle dans toutes les directions."),
        ("2. Les villes de la côte Est",
         "Toamasina est le grand port de la côte Est. Les bateaux y arrivent et en "
         "partent avec les marchandises du pays. La côte Est est droite et bordée "
         "de lagunes : c'est la région la plus humide de l'île."),
        ("3. Les villes de la côte Ouest",
         "Mahajanga au nord-ouest et Toliara au sud-ouest sont deux ports de la côte "
         "Ouest. Elles font face au canal du Mozambique. Leurs rades sont abritées et "
         "la mer y est calme une grande partie de l'année."),
        ("4. Les villes des terres hautes",
         "Antsirabe et Fianarantsoa se trouvent sur les hauts plateaux, comme la "
         "capitale. Elles sont entourées de rizières et de collines. Le climat y est "
         "plus frais que sur la côte, parce qu'elles sont plus hautes."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Antananarivo veut dire « la ville des mille ». Elle porte ce nom "
             "depuis le XVIIe siècle, en souvenir des mille soldats qui gardaient la "
             "colline royale."),
    resume=[
        "Antananarivo, la capitale, se trouve au centre de l'île.",
        "Toamasina est le grand port de la côte Est.",
        "Mahajanga au nord-ouest et Toliara au sud-ouest sont des ports de l'Ouest.",
        "Antsiranana occupe la pointe nord de l'île.",
        "Antsirabe et Fianarantsoa se trouvent sur les hauts plateaux.",
    ],
    lexique=[("Capitale", "La ville où siège le gouvernement du pays."),
             ("Port", "Une ville où les bateaux chargent et déchargent les "
              "marchandises."),
             ("Côte", "Le bord de la terre, le long de la mer."),
             ("Hauts plateaux", "La région élevée du centre de Madagascar."),
             ("Rade", "Une étendue d'eau abritée où les bateaux peuvent "
              "mouiller.")],
    exercices=[
        ("Complète avec : Antananarivo — Toamasina — Mahajanga — Antsiranana",
         ["a) …… est la capitale, au centre de l'île.",
          "b) …… est le grand port de la côte Est.",
          "c) …… est à la pointe nord.",
          "d) …… est un port du nord-ouest."],
         ["a) Antananarivo", "b) Toamasina", "c) Antsiranana", "d) Mahajanga"]),
        ("Réponds par vrai ou faux.",
         ["a) Toliara est sur la côte Ouest, au sud.",
          "b) Toamasina est sur la côte Ouest.",
          "c) Fianarantsoa se trouve sur les hauts plateaux.",
          "d) La capitale est au bord de la mer."],
         ["a) Vrai", "b) Faux", "c) Vrai", "d) Faux"]),
        ("Relie chaque ville à sa position.",
         ["Antananarivo", "Toamasina", "Antsiranana", "Toliara"],
         ["Côte Est", "Pointe nord", "Centre de l'île", "Sud-ouest"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Quelle est la capitale de Madagascar ?",
          "b) Quel est le grand port de la côte Est ?",
          "c) Cite deux villes de la côte Ouest.",
          "d) Pourquoi les routes partent-elles d'Antananarivo ?"],
         ["a) C'est Antananarivo.", "b) C'est Toamasina.",
          "c) Mahajanga et Toliara.",
          "d) Parce qu'elle est au centre de l'île."]),
    ],
    consigne_ex5="Sur une carte muette, place les sept villes étudiées et écris leur "
                 "nom à côté du point.",
    corrige_ex5="Points placés : Antsiranana au nord, Mahajanga au nord-ouest, "
                "Toamasina à l'est, Antananarivo au centre, Antsirabe juste au sud "
                "d'Antananarivo, Fianarantsoa plus au sud, Toliara au sud-ouest.",
))

# ═══════════════════════════ SÉANCE 33 ═══════════════════════════
SEANCES.append(dict(
    n=33, semaine=11, titre="Situer un point par rapport à un autre",
    objectif="Utiliser les points cardinaux pour situer une ville par rapport à une "
             "autre sur la carte.",
    materiel="Carte de Madagascar, règle, crayon de couleur, ardoise et craie, cahier.",
    illustration=("img_s33_a.png",
                  "Illustration — Antananarivo est à l'ouest de Toamasina.", 460),
    revision=[("Où place-t-on l'Ouest sur une carte ?", "R.A. : À gauche."),
              ("Quelle ville se trouve sur la côte Est ?", "R.A. : Toamasina.")],
    mes=("Pour aller d'Antananarivo à Toamasina, dans quelle direction roules-tu ?",
         "R.A. : Vers l'est."),
    analyse=[
        ("Où se trouve Antananarivo sur la carte ?", "R.A. : Au centre, à "
         "gauche."),
        ("Où se trouve Toamasina ?", "R.A. : Sur la côte Est, à droite."),
        ("Antananarivo est donc à l'ouest ou à l'est de Toamasina ?",
         "R.A. : À l'ouest de Toamasina."),
        ("Et Toamasina, par rapport à Antananarivo ?",
         "R.A. : Elle est à l'est d'Antananarivo."),
        ("Que remarque-t-on quand on échange les deux villes ?",
         "R.A. : La direction est inversée : ouest devient est.")],
    synthese="Donc, pour situer un lieu par rapport à un autre, on se place sur le "
             "premier et on regarde le second avec les points cardinaux. Si l'on échange "
             "les deux lieux, la direction s'inverse.",
    application=("Sur la carte, réponds : a) Mahajanga est à l'ouest ou à "
                 "l'est d'Antananarivo ? b) Antsiranana est au nord ou au sud "
                 "d'Antananarivo ? c) Toliara est au nord ou au sud de Mahajanga ? "
                 "d) Fianarantsoa est au nord ou au sud d'Antananarivo ?",
                 "a) À l'ouest — b) Au nord — c) Au sud — d) Au "
                 "sud."),
    evaluation=("1. Réponds par vrai ou faux : a) Toamasina est à l'est "
                "d'Antananarivo. b) Antananarivo est à l'est de Toamasina. "
                "c) Antsiranana est au nord de Fianarantsoa. d) Mahajanga est à "
                "l'est d'Antananarivo.\n"
                "2. Écris deux phrases qui situent Toliara par rapport à "
                "Antananarivo, et Antananarivo par rapport à Toliara.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Faux.\n"
                "2. « Toliara est au sud-ouest d'Antananarivo. Antananarivo est au "
                "nord-est de Toliara. »"),
    lecon_titre="Situer un lieu par rapport à un autre",
    sections=[
        ("1. Se placer, puis regarder",
         "Pour situer un lieu par rapport à un autre, il faut toujours faire deux "
         "gestes. D'abord se placer sur le lieu de départ. Ensuite regarder le lieu "
         "d'arrivée et dire de quel côté il se trouve. On emploie alors "
         "les points cardinaux : au nord, au sud, à l'est, à l'ouest."),
        ("2. La direction s'inverse",
         "Attention : la direction change selon le sens de la phrase. Toamasina est à "
         "l'est d'Antananarivo. Mais Antananarivo est à l'ouest de Toamasina. Les "
         "deux phrases parlent du même couple de villes et elles sont toutes les deux "
         "vraies, parce que le point de départ a changé."),
        ("3. Les directions intermédiaires",
         "Quand un lieu n'est ni tout à fait au nord ni tout à fait à "
         "l'ouest, on emploie une direction intermédiaire. Toliara est au sud-ouest "
         "d'Antananarivo. Antsiranana est au nord de l'île. Ces directions plus "
         "précises viennent de la rose des vents apprise au trimestre dernier."),
        ("4. Écrire la phrase complète",
         "Une réponse de géographie s'écrit toujours en une phrase complète. On "
         "n'écrit pas seulement « à l'ouest ». On écrit : « "
         "Mahajanga se trouve à l'ouest d'Antananarivo. » Le nom des deux "
         "lieux doit apparaître dans la phrase."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Sur une carte, la distance à vol d'oiseau entre Antananarivo et Toamasina "
             "est d'environ 220 km. En mesurant ce trait avec l'échelle, on retrouve "
             "cette valeur sans quitter la classe."),
    resume=[
        "Pour situer un lieu, on se place sur le premier et on regarde le second.",
        "On emploie les points cardinaux : nord, sud, est, ouest.",
        "Si l'on échange les deux lieux, la direction s'inverse.",
        "Les directions intermédiaires donnent une réponse plus précise.",
        "Une réponse de géographie s'écrit en une phrase complète.",
    ],
    lexique=[("Situer", "Dire où se trouve un lieu par rapport à un autre."),
             ("Point de départ", "Le lieu sur lequel on se place pour regarder."),
             ("Inverser", "Mettre dans l'autre sens."),
             ("Direction intermédiaire", "Une direction comme le nord-est ou le "
              "sud-ouest.")],
    exercices=[
        ("Complète avec : est — ouest — nord — sud",
         ["a) Toamasina est à l'…… d'Antananarivo.",
          "b) Antananarivo est à l'…… de Toamasina.",
          "c) Antsiranana est au …… de l'île.",
          "d) Toliara est au …… d'Antananarivo."],
         ["a) à l'est", "b) à l'ouest", "c) au nord", "d) au sud"]),
        ("Réponds par vrai ou faux.",
         ["a) Mahajanga est à l'ouest d'Antananarivo.",
          "b) Antananarivo est à l'est de Mahajanga.",
          "c) Fianarantsoa est au nord d'Antananarivo.",
          "d) Toliara est au sud-ouest d'Antananarivo."],
         ["a) Vrai", "b) Vrai", "c) Faux", "d) Vrai"]),
        ("Relie chaque couple de villes à la bonne direction.",
         ["Antananarivo → Toamasina", "Antananarivo → Mahajanga",
          "Antananarivo → Antsiranana", "Antananarivo → Toliara"],
         ["Vers l'ouest", "Vers le nord", "Vers le sud-ouest", "Vers l'est"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Où se trouve Toamasina par rapport à Antananarivo ?",
          "b) Où se trouve Antananarivo par rapport à Toamasina ?",
          "c) Cite une direction intermédiaire.",
          "d) Comment écrit-on une réponse de géographie ?"],
         ["a) Toamasina se trouve à l'est d'Antananarivo.",
          "b) Antananarivo se trouve à l'ouest de Toamasina.",
          "c) Le nord-est, le nord-ouest, le sud-est ou le sud-ouest.",
          "d) En une phrase complète, avec le nom des deux lieux."]),
    ],
    consigne_ex5="Trace la silhouette de Madagascar, place Antananarivo et Toamasina, "
                 "puis écris les deux phrases qui situent chaque ville par rapport à "
                 "l'autre.",
    corrige_ex5="Antananarivo au centre, Toamasina sur la côte Est, trait entre les "
                "deux. « Toamasina est à l'est d'Antananarivo. Antananarivo est "
                "à l'ouest de Toamasina. »",
))

# ═══════════════════════════ SÉANCE 34 ═══════════════════════════
SEANCES.append(dict(
    n=34, semaine=11, titre="L'échelle d'une carte",
    objectif="Comprendre ce qu'est l'échelle d'une carte et savoir s'en servir.",
    materiel="Carte de Madagascar, règle graduée, fiches d'exercices, ardoise et craie, "
             "cahier.",
    illustration=("img_s34_a.png",
                  "Illustration — Lire une échelle : 1 cm sur la carte vaut 100 km "
                  "sur le terrain.", 620),
    revision=[("Que donne l'échelle d'une carte ?",
               "R.A. : Les distances réelles en kilomètres."),
              ("Cite les quatre éléments obligatoires d'une carte.",
               "R.A. : Le titre, la légende, l'échelle et la flèche du Nord.")],
    mes=("Si deux villes sont très éloignées sur la carte, le sont-elles aussi "
          "sur le terrain ?",
         "R.A. : Oui, la carte respecte les proportions."),
    analyse=[
        ("Que lit-on au début de l'échelle ?", "R.A. : Le nombre 0."),
        ("Que lit-on à la fin de l'échelle ?", "R.A. : 500 km."),
        ("Combien de kilomètres vaut 1 cm sur cette carte ?", "R.A. : 100 km."),
        ("Si tu mesures 2 cm entre deux villes, quelle distance réelle fais-tu ?",
         "R.A. : 200 km."),
        ("Pourquoi l'échelle est-elle obligatoire sur une carte ?",
         "R.A. : Sans elle, on ne peut pas connaître les distances.")],
    synthese="Donc, l'échelle est la règle graduée de la carte. Ici, 1 cm mesure "
             "100 km. Pour trouver une distance réelle, on mesure sur la carte avec sa "
             "règle, puis on multiplie par la valeur de l'échelle.",
    application=("Avec l'échelle 1 cm = 100 km, calcule : a) 3 cm ? b) 5 cm ? "
                 "c) 1,5 cm ? d) 8 cm ?",
                 "a) 300 km — b) 500 km — c) 150 km — d) 800 km."),
    evaluation=("1. Réponds par vrai ou faux : a) 1 cm vaut 100 km sur cette carte. "
                "b) 4 cm valent 40 km. c) L'échelle sert à mesurer les "
                "distances. d) Un croquis sans échelle suffit pour mesurer.\n"
                "2. Entre deux villes, tu mesures 6 cm. Quelle distance réelle "
                "parcours-tu ?",
                "1. a) Vrai — b) Faux — c) Vrai — d) Faux.\n"
                "2. 600 km, car 6 × 100 = 600."),
    lecon_titre="L'échelle d'une carte",
    sections=[
        ("1. Pourquoi une échelle ?",
         "Une carte est beaucoup plus petite que le pays qu'elle représente. Madagascar "
         "mesure près de 1 600 km du nord au sud, et pourtant elle tient sur une "
         "feuille de cahier. L'échelle dit de combien la carte a été réduite. "
         "C'est le rapport entre la longueur dessinée et la longueur réelle sur le "
         "terrain."),
        ("2. Lire l'échelle graduée",
         "L'échelle se présente souvent comme une règle dessinée sous la carte. "
         "Sur notre carte, elle porte les nombres 0, 100 km, 200 km, 300 km, 400 km et "
         "500 km. On lit cette règle exactement comme celle de la trousse : on pose "
         "le zéro sur le point de départ et on lit le nombre qui correspond au point "
         "d'arrivée."),
        ("3. Calculer une distance",
         "Quand l'échelle est écrite en toutes lettres, le calcul est simple. Notre "
         "carte indique : 1 cm = 100 km. Si tu mesures 2 cm entre Antananarivo et "
         "Antsirabe, tu parcours 2 × 100 = 200 km. On multiplie toujours le nombre "
         "de centimètres par la valeur de l'échelle."),
        ("4. Grande échelle, petite échelle",
         "Une carte à grande échelle montre un petit espace en détail : le plan "
         "de ta classe, où 1 cm vaut 1 m. Une carte à petite échelle montre un "
         "grand espace en résumé : la carte de Madagascar, où 1 cm vaut 100 km. "
         "Plus l'espace représenté est grand, plus l'échelle est petite."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Sur la carte de Madagascar, 1 cm vaut 100 km. Cela veut dire que la carte "
             "est dix millions de fois plus petite que le pays : un centimètre "
             "remplace cent kilomètres."),
    resume=[
        "L'échelle dit de combien la carte a été réduite.",
        "Sur notre carte, 1 cm mesure 100 km sur le terrain.",
        "Pour calculer une distance, on mesure puis on multiplie.",
        "Une carte à grande échelle montre un petit espace en détail.",
        "Sans échelle, on ne peut pas connaître les distances réelles.",
    ],
    lexique=[("Échelle", "Le rapport entre la longueur sur la carte et la longueur "
              "réelle."),
             ("Réduire", "Rendre plus petit en gardant les proportions."),
             ("Proportion", "Le rapport constant entre la carte et le terrain."),
             ("Distance réelle", "La longueur mesurée sur le terrain, en "
              "kilomètres.")],
    exercices=[
        ("Complète avec : échelle — 100 km — multiplier — règle",
         ["a) L'…… dit de combien la carte a été réduite.",
          "b) Sur cette carte, 1 cm vaut ……",
          "c) On mesure avec une ……",
          "d) Pour trouver la distance, on doit …… le nombre de centimètres "
          "par 100."],
         ["a) L'échelle", "b) 100 km", "c) une règle", "d) on doit multiplier"]),
        ("Réponds par vrai ou faux.",
         ["a) 1 cm vaut 100 km sur la carte de Madagascar.",
          "b) 3 cm valent 3 000 km.",
          "c) Une carte à grande échelle montre un petit espace.",
          "d) On peut mesurer une distance sans échelle."],
         ["a) Vrai", "b) Faux", "c) Vrai", "d) Faux"]),
        ("Relie chaque mesure à la distance réelle (1 cm = 100 km).",
         ["2 cm", "5 cm", "8 cm", "1,5 cm"],
         ["150 km", "200 km", "500 km", "800 km"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) À quoi sert l'échelle d'une carte ?",
          "b) Combien vaut 1 cm sur la carte de Madagascar ?",
          "c) Comment calcule-t-on une distance réelle ?",
          "d) Qu'est-ce qu'une carte à grande échelle ?"],
         ["a) Elle sert à mesurer les distances réelles.",
          "b) Il vaut 100 km.",
          "c) On mesure en centimètres puis on multiplie par 100.",
          "d) C'est une carte qui montre un petit espace en détail."]),
    ],
    consigne_ex5="Avec l'échelle 1 cm = 100 km, calcule les distances réelles "
                 "suivantes, puis vérifie avec la carte : 2 cm, 4 cm, 7 cm et 9 cm.",
    corrige_ex5="2 cm = 200 km ; 4 cm = 400 km ; 7 cm = 700 km ; 9 cm = 900 km. "
                "Vérification : sur la carte, Antananarivo-Toliara mesure environ "
                "6,4 cm, soit environ 640 km.",
))

# ═══════════════════════════ SÉANCE 35 ═══════════════════════════
SEANCES.append(dict(
    n=35, semaine=11, titre="Estimer des distances sur la carte",
    objectif="Comparer les distances entre deux villes à l'aide de l'échelle.",
    materiel="Carte de Madagascar, règle graduée, fiches d'exercices, ardoise et craie, "
             "cahier.",
    illustration=("img_s35_a.png",
                  "Illustration — Les distances depuis Antananarivo vers les grandes "
                  "villes.", 460),
    revision=[("Combien vaut 1 cm sur la carte de Madagascar ?", "R.A. : 100 km."),
              ("Où se trouve Toamasina ?", "R.A. : Sur la côte Est.")],
    mes=("Entre Antananarivo et Toamasina, ou Antananarivo et Toliara, quel est le "
          "voyage le plus long ?",
         "R.A. : Antananarivo et Toliara."),
    analyse=[
        ("Quelle ville est la plus proche d'Antananarivo ?", "R.A. : Toamasina, "
         "220 km."),
        ("Quelle ville en est la plus éloignée ?", "R.A. : Antsiranana, 730 km."),
        ("Combien mesure Antananarivo-Mahajanga ?", "R.A. : 360 km."),
        ("Combien mesure Antananarivo-Fianarantsoa ?", "R.A. : 260 km."),
        ("Comment a-t-on trouvé ces nombres ?",
         "R.A. : En mesurant le trait sur la carte et en multipliant par 100.")],
    synthese="Donc, depuis Antananarivo, la ville la plus proche est Toamasina et la plus "
             "éloignée est Antsiranana. Pour comparer deux trajets, on mesure "
             "chacun, on convertit en kilomètres, puis on compare.",
    application=("Range ces trajets du plus court au plus long : Antananarivo-Toamasina "
                 "(220 km), Antananarivo-Fianarantsoa (260 km), Antananarivo-Toliara "
                 "(640 km), Antananarivo-Antsiranana (730 km).",
                 "Toamasina 220 km — Fianarantsoa 260 km — Toliara 640 km — "
                 "Antsiranana 730 km."),
    evaluation=("1. Réponds par vrai ou faux : a) Toamasina est à 220 km "
                "d'Antananarivo. b) Antsiranana est plus proche qu'Antsirabe. "
                "c) Toliara est à 640 km. d) On compare des distances en kilomètres.\n"
                "2. Cite les deux trajets les plus longs depuis la capitale.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n"
                "2. Antananarivo-Antsiranana (730 km) et Antananarivo-Toliara (640 km)."),
    lecon_titre="Estimer les distances entre les villes",
    sections=[
        ("1. Mesurer avec la règle",
         "Pour estimer une distance, on pose la règle sur la carte. On place le zéro "
         "sur la ville de départ et on lit le nombre de centimètres jusqu'à la ville "
         "d'arrivée. On mesure toujours en ligne droite, comme le ferait un oiseau, "
         "et non en suivant les virages de la route."),
        ("2. Convertir en kilomètres",
         "Une fois le nombre de centimètres connu, on le multiplie par 100, puisque "
         "1 cm vaut 100 km sur cette carte. Un trait de 2,2 cm donne donc 220 km entre "
         "Antananarivo et Toamasina. Ce calcul transforme une mesure de papier en une "
         "distance de voyage."),
        ("3. Comparer deux trajets",
         "Une fois les distances converties, la comparaison devient facile. Depuis "
         "Antananarivo, Toamasina est à 220 km et Fianarantsoa à 260 km : les "
         "deux villes sont proches de la capitale. Toliara à 640 km et Antsiranana "
         "à 730 km en sont beaucoup plus éloignées."),
        ("4. Distance à vol d'oiseau et distance réelle",
         "Attention : la distance mesurée sur la carte est une ligne droite. Sur le "
         "terrain, la route serpente, contourne les montagnes et traverse les rivières. "
         "Le voyage est donc toujours plus long que la distance mesurée sur la carte. "
         "C'est la différence entre la distance à vol d'oiseau et la distance "
         "réelle."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "La route nationale 2 relie Antananarivo à Toamasina sur environ 350 km, "
             "alors que la ligne droite ne mesure que 220 km. La différence vient des "
             "virages et du relief."),
    resume=[
        "On mesure la distance à la règle, en ligne droite.",
        "On multiplie ensuite le nombre de centimètres par 100.",
        "Depuis Antananarivo, Toamasina est la grande ville la plus proche.",
        "Antsiranana en est la plus éloignée, à 730 km.",
        "La route est toujours plus longue que la ligne droite de la carte.",
    ],
    lexique=[("Estimer", "Trouver une valeur approchée, sans calcul exact."),
             ("Distance à vol d'oiseau", "La distance en ligne droite, comme si "
              "l'on volait."),
             ("Comparer", "Ranger des valeurs du plus petit au plus grand."),
             ("Convertir", "Changer une mesure en une autre unité.")],
    exercices=[
        ("Complète avec : 220 — 360 — 640 — 730",
         ["a) Antananarivo-Toamasina : …… km",
          "b) Antananarivo-Mahajanga : …… km",
          "c) Antananarivo-Toliara : …… km",
          "d) Antananarivo-Antsiranana : …… km"],
         ["a) 220 km", "b) 360 km", "c) 640 km", "d) 730 km"]),
        ("Réponds par vrai ou faux.",
         ["a) On mesure sur la carte en ligne droite.",
          "b) La route est plus courte que la ligne droite.",
          "c) Antsiranana est à 730 km de la capitale.",
          "d) Fianarantsoa est plus loin que Toliara."],
         ["a) Vrai", "b) Faux", "c) Vrai", "d) Faux"]),
        ("Relie chaque trajet à sa distance.",
         ["Antananarivo → Toamasina", "Antananarivo → Fianarantsoa",
          "Antananarivo → Mahajanga", "Antananarivo → Antsiranana"],
         ["260 km", "360 km", "730 km", "220 km"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Quelle grande ville est la plus proche d'Antananarivo ?",
          "b) Comment mesure-t-on une distance sur la carte ?",
          "c) Pourquoi la route est-elle plus longue que la ligne droite ?",
          "d) De combien Antsiranana est-elle éloignée de la capitale ?"],
         ["a) C'est Toamasina, à 220 km.",
          "b) On pose la règle et on lit le nombre de centimètres.",
          "c) Parce qu'elle serpente et contourne le relief.",
          "d) Elle est éloignée de 730 km."]),
    ],
    consigne_ex5="Mesure sur la carte les deux trajets Antananarivo-Antsirabe et "
                 "Antananarivo-Mahajanga, convertis-les en kilomètres et dis lequel est "
                 "le plus court.",
    corrige_ex5="Antananarivo-Antsirabe : environ 1,7 cm, soit 170 km. "
                "Antananarivo-Mahajanga : environ 3,6 cm, soit 360 km. Le trajet le plus "
                "court est donc Antananarivo-Antsirabe.",
))

# ═══════════════════════════ SÉANCE 36 ═══════════════════════════
SEANCES.append(dict(
    n=36, semaine=12, titre="Les régions de Madagascar",
    objectif="Situer les grandes régions et les lieux géographiques de Madagascar.",
    materiel="Carte des régions de Madagascar, carte muette, crayons de couleur, ardoise "
             "et craie, cahier.",
    illustration=("img_s36_a.png",
                  "Illustration — Les six grandes régions de Madagascar.", 460),
    revision=[("Combien mesure 1 cm sur la carte ?", "R.A. : 100 km."),
              ("Quelle ville se trouve sur la côte Est ?", "R.A. : Toamasina.")],
    mes=("Connais-tu le nom de la région où se trouve ton école ?",
         "R.A. : On répond selon la région de l'élève."),
    analyse=[
        ("Combien de grandes régions compte Madagascar ?", "R.A. : Six."),
        ("Cite les trois régions du nord.",
         "R.A. : Antsiranana, Mahajanga et Toamasina."),
        ("Cite les trois régions du sud et du centre.",
         "R.A. : Antananarivo, Fianarantsoa et Toliara."),
        ("Quelle région entoure la capitale ?", "R.A. : La région "
         "d'Antananarivo."),
        ("Quelle région occupe le sud de l'île ?", "R.A. : La région de "
         "Toliara.")],
    synthese="Donc, Madagascar se divise en six grandes régions qui portent le nom de "
             "leur ville principale : Antsiranana, Mahajanga, Toamasina, Antananarivo, "
             "Fianarantsoa et Toliara.",
    application=("Sur ta carte muette, colorie les six régions, puis réponds : "
                 "a) Laquelle est au nord ? b) Laquelle est au centre ? c) Laquelle est "
                 "au sud ? d) Lesquelles touchent la côte Est ?",
                 "a) Antsiranana — b) Antananarivo — c) Toliara — "
                 "d) Toamasina et Antsiranana."),
    evaluation=("1. Réponds par vrai ou faux : a) Madagascar compte six grandes "
                "régions. b) La région de Toliara est au nord. c) La région "
                "d'Antananarivo est au centre. d) Mahajanga touche la côte Ouest.\n"
                "2. Cite quatre régions en indiquant leur position.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n"
                "2. Exemple : Antsiranana au nord, Toamasina à l'est, Antananarivo "
                "au centre, Toliara au sud."),
    lecon_titre="Les grandes régions de Madagascar",
    sections=[
        ("1. Six grandes régions",
         "Madagascar est divisée en six grandes régions administratives. Chacune "
         "porte le nom de sa ville principale : Antsiranana au nord, Mahajanga au "
         "nord-ouest, Toamasina à l'est, Antananarivo au centre, Fianarantsoa au "
         "sud-est des hautes terres et Toliara au sud-ouest. Connaître ces six noms "
         "permet de situer n'importe quel lieu de l'île."),
        ("2. Les hautes terres",
         "Le centre de l'île est occupé par les hautes terres, un ensemble de "
         "collines et de plateaux qui s'étirent du nord au sud. C'est là que se "
         "trouvent Antananarivo, Antsirabe et Fianarantsoa. L'altitude y dépasse "
         "souvent mille mètres, et le climat y est plus frais que sur la côte."),
        ("3. Les côtes",
         "La côte Est est droite et humide : elle reçoit les pluies apportées par "
         "l'océan Indien. La côte Ouest, tournée vers le canal du Mozambique, est "
         "plus découpée et plus sèche. Les deux côtes abritent les grands ports du "
         "pays : Toamasina à l'est, Mahajanga et Toliara à l'ouest."),
        ("4. Le sud",
         "Le sud de Madagascar est la région la plus sèche de l'île. Les pluies y "
         "sont rares et irrégulières. On y cultive le sisal et l'on y élève des "
         "zébus. La végétation y est faite de brousse épineuse, adaptée au "
         "manque d'eau."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Le mot « région » vient du latin regio, qui désignait "
             "déjà une étendue de pays. Le découpage de Madagascar en six "
             "régions a été fixé en 2004."),
    resume=[
        "Madagascar compte six grandes régions.",
        "Chacune porte le nom de sa ville principale.",
        "Les hautes terres occupent le centre de l'île.",
        "La côte Est est humide et la côte Ouest plus sèche.",
        "Le sud est la région la plus sèche de Madagascar.",
    ],
    lexique=[("Région", "Une grande division du territoire d'un pays."),
             ("Hautes terres", "La région élevée du centre de Madagascar."),
             ("Altitude", "La hauteur d'un lieu par rapport au niveau de la mer."),
             ("Côte", "Le bord de la terre, le long de la mer."),
             ("Sec", "Qui reçoit peu de pluie.")],
    exercices=[
        ("Complète avec : Antsiranana — Antananarivo — Toliara — Toamasina",
         ["a) …… est la région la plus au nord.",
          "b) …… est au centre, autour de la capitale.",
          "c) …… occupe le sud-ouest de l'île.",
          "d) …… se trouve sur la côte Est."],
         ["a) Antsiranana", "b) Antananarivo", "c) Toliara", "d) Toamasina"]),
        ("Réponds par vrai ou faux.",
         ["a) Madagascar compte six grandes régions.",
          "b) La région de Toliara est au nord de l'île.",
          "c) Antsirabe se trouve sur les hautes terres.",
          "d) Le sud est la région la plus humide."],
         ["a) Vrai", "b) Faux", "c) Vrai", "d) Faux"]),
        ("Relie chaque région à sa position.",
         ["Antsiranana", "Mahajanga", "Fianarantsoa", "Toliara"],
         ["Nord-ouest", "Sud des hautes terres", "Sud-ouest", "Nord"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Combien Madagascar compte-t-elle de grandes régions ?",
          "b) Quelle région occupe le centre de l'île ?",
          "c) Cite deux villes des hautes terres.",
          "d) Quel est le climat du sud de Madagascar ?"],
         ["a) Elle compte six grandes régions.",
          "b) C'est la région d'Antananarivo.",
          "c) Antananarivo et Antsirabe.",
          "d) C'est un climat sec, avec peu de pluies."]),
    ],
    consigne_ex5="Sur une carte muette, colorie les six régions de couleurs différentes "
                 "et écris une légende avec le nom de chacune.",
    corrige_ex5="Six zones coloriées : Antsiranana au nord, Mahajanga au nord-ouest, "
                "Toamasina à l'est, Antananarivo au centre, Fianarantsoa au sud des "
                "hautes terres, Toliara au sud-ouest. Légende : une case de couleur "
                "par région.",
))

# ═══════════════════════════ SÉANCE 37 ═══════════════════════════
SEANCES.append(dict(
    n=37, semaine=12, titre="Lire un itinéraire sur la carte",
    objectif="Suivre un déplacement de ville en ville sur la carte de Madagascar.",
    materiel="Carte de Madagascar, règle, crayon de couleur, ardoise et craie, cahier.",
    illustration=("img_s37_a.png",
                  "Illustration — L'itinéraire Antananarivo → Antsirabe → "
                  "Fianarantsoa → Toliara.", 460),
    revision=[("Combien mesure 1 cm sur la carte ?", "R.A. : 100 km."),
              ("Quelle région occupe le centre de l'île ?", "R.A. : Celle "
               "d'Antananarivo.")],
    mes=("Pour aller d'Antananarivo à Toliara, par quelles villes passes-tu ?",
         "R.A. : Par Antsirabe et Fianarantsoa."),
    analyse=[
        ("Quelle est la ville de départ ?", "R.A. : Antananarivo."),
        ("Quelle est la ville d'arrivée ?", "R.A. : Toliara."),
        ("Cite les deux villes traversées.",
         "R.A. : Antsirabe, puis Fianarantsoa."),
        ("Dans quelle direction voyage-t-on ?", "R.A. : Vers le sud-ouest."),
        ("Que fait la flèche placée au milieu du trait ?",
         "R.A. : Elle montre le sens du voyage.")],
    synthese="Donc, un itinéraire est une suite de villes reliées par une route. On "
             "nomme le départ, les étapes et l'arrivée, et l'on donne la "
             "direction suivie.",
    application=("Trace l'itinéraire Antananarivo → Toamasina, puis réponds : "
                 "a) Dans quelle direction vas-tu ? b) Quelle région traverses-tu "
                 "? c) Quelle distance parcours-tu ? d) Cite une ville étape.",
                 "a) Vers l'est — b) Celle d'Antananarivo, puis celle de "
                 "Toamasina — c) Environ 220 km en ligne droite — d) "
                 "On longe Moramanga."),
    evaluation=("1. Réponds par vrai ou faux : a) Un itinéraire a un départ et "
                "une arrivée. b) La direction Antananarivo-Toliara est le nord-est. "
                "c) Antsirabe est une étape de la route du sud. d) La flèche "
                "indique le sens du voyage.\n"
                "2. Décris en trois phrases l'itinéraire Antananarivo-Toliara.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n"
                "2. Exemple : « Je pars d'Antananarivo. Je passe par Antsirabe et "
                "Fianarantsoa. J'arrive à Toliara, au sud-ouest. »"),
    lecon_titre="Lire un itinéraire",
    sections=[
        ("1. Un itinéraire est une suite de villes",
         "Sur une carte, un itinéraire se lit comme une histoire. Il commence à une "
         "ville de départ, passe par des étapes et se termine à une ville "
         "d'arrivée. Sur la route du sud, on part d'Antananarivo, on traverse "
         "Antsirabe, puis Fianarantsoa, et l'on arrive à Toliara, sur la côte "
         "Ouest."),
        ("2. Les routes nationales",
         "Les grandes routes de Madagascar portent un numéro précédé de RN, "
         "pour route nationale. La RN 7 relie Antananarivo à Toliara en passant "
         "par Antsirabe et Fianarantsoa. La RN 2 relie la capitale au port de "
         "Toamasina. Connaître le numéro d'une route permet d'en parler sans "
         "la dessiner."),
        ("3. Décrire l'itinéraire",
         "Pour décrire un itinéraire, on nomme chaque ville dans l'ordre et l'on "
         "donne la direction suivie. On écrit : « Je pars d'Antananarivo, je "
         "roule vers le sud-ouest, je traverse Antsirabe, puis Fianarantsoa, et "
         "j'arrive à Toliara. » Chaque étape est citée, dans l'ordre du "
         "voyage."),
        ("4. Le sens du voyage",
         "Le même itinéraire se lit dans les deux sens. De Toliara vers "
         "Antananarivo, on remonte vers le nord-est : les étapes sont les mêmes, "
         "mais dans l'ordre inverse, et la direction change. C'est la règle "
         "déjà vue au trimestre dernier : quand on échange le départ et "
         "l'arrivée, la direction s'inverse."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "La RN 7 est l'une des routes les plus connues de Madagascar. Elle traverse "
             "les hautes terres, les rizières en terrasses et les paysages du sud sur "
             "près de 950 km."),
    resume=[
        "Un itinéraire a un départ, des étapes et une arrivée.",
        "Les grandes routes portent un numéro : RN 2, RN 7.",
        "On décrit l'itinéraire en nommant chaque ville dans l'ordre.",
        "Antananarivo → Toliara se dirige vers le sud-ouest.",
        "Dans l'autre sens, la direction s'inverse.",
    ],
    lexique=[("Itinéraire", "Le trajet suivi pour aller d'une ville à une autre."),
             ("Étape", "Une ville où l'on s'arrête au cours du voyage."),
             ("Route nationale", "Une grande route numérotée qui relie les "
              "villes entre elles."),
             ("Sens", "La direction dans laquelle on voyage.")],
    exercices=[
        ("Complète avec : départ — étape — arrivée — sens",
         ["a) Antananarivo est la ville de ……",
          "b) Antsirabe est une …… du voyage.",
          "c) Toliara est la ville d'……",
          "d) La flèche indique le …… du voyage."],
         ["a) de départ", "b) une étape", "c) d'arrivée", "d) le sens"]),
        ("Réponds par vrai ou faux.",
         ["a) La RN 7 relie Antananarivo à Toliara.",
          "b) Antananarivo-Toliara se dirige vers le nord-est.",
          "c) Fianarantsoa est une étape de la route du sud.",
          "d) Dans l'autre sens, la direction ne change pas."],
         ["a) Vrai", "b) Faux", "c) Vrai", "d) Faux"]),
        ("Relie chaque route à ce qu'elle relie.",
         ["La RN 2", "La RN 7", "La RN 4", "La RN 6"],
         ["Antananarivo → Toliara", "Antananarivo → Mahajanga",
          "Antananarivo → Antsiranana", "Antananarivo → Toamasina"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Cite les étapes de l'itinéraire Antananarivo-Toliara.",
          "b) Dans quelle direction voyage-t-on ?",
          "c) Que signifie RN 7 ?",
          "d) Que se passe-t-on quand on lit l'itinéraire dans l'autre sens ?"],
         ["a) Antsirabe et Fianarantsoa.",
          "b) Vers le sud-ouest.",
          "c) C'est la route nationale numéro 7.",
          "d) Les étapes sont dans l'ordre inverse et la direction change."]),
    ],
    consigne_ex5="Trace sur la carte l'itinéraire Antananarivo → Antsirabe → "
                 "Fianarantsoa → Toliara, place les flèches de sens, puis écris "
                 "les trois phrases qui le décrivent.",
    corrige_ex5="Trait Antananarivo → Antsirabe → Fianarantsoa → Toliara, "
                "flèches vers le sud-ouest. « Je pars d'Antananarivo. Je traverse "
                "Antsirabe et Fianarantsoa. J'arrive à Toliara, au sud-ouest. »",
))

# ═══════════════════════════ SÉANCE 38 ═══════════════════════════
SEANCES.append(dict(
    n=38, semaine=13, titre="Les éléments d'un paysage",
    objectif="Énumérer les éléments constitutifs d'un paysage.",
    materiel="Grande image de paysage affichée, images de paysages découpées, ardoise et "
             "craie, cahier.",
    illustration=("scene_paysage.png",
                  "Illustration — Un paysage complet : la montagne, la colline, la "
                  "rivière, la rizière et le village.", 620),
    revision=[("Cite les quatre éléments obligatoires d'une carte.",
               "R.A. : Le titre, la légende, l'échelle et la flèche du Nord."),
              ("Quelle région occupe le centre de Madagascar ?",
               "R.A. : Celle d'Antananarivo, sur les hautes terres.")],
    mes=("Quand tu regardes la campagne autour de ton village, qu'est-ce que tu vois ?",
         "R.A. : Des collines, des rizières, des maisons, une rivière."),
    analyse=[
        ("Cite une forme de relief que tu vois sur l'image.",
         "R.A. : La montagne et les collines."),
        ("Où se trouve l'eau dans ce paysage ?", "R.A. : Dans la rivière."),
        ("Cite deux plantes ou cultures visibles.",
         "R.A. : La forêt et les rizières."),
        ("Que vois-tu construit par les hommes ?",
         "R.A. : Des maisons, une école et un chemin."),
        ("Cite les quatre familles d'éléments d'un paysage.",
         "R.A. : Le relief, l'eau, la végétation et les constructions.")],
    synthese="Donc, tout paysage se compose de quatre familles d'éléments : le relief "
             "(montagnes, collines, plaines), l'eau (rivières, lacs, mer), la "
             "végétation (forêts, rizières, savane) et les constructions humaines "
             "(maisons, routes, ponts).",
    application=("Observe le paysage affiché et classe ce que tu vois dans un tableau : "
                 "relief, eau, végétation, constructions.",
                 "Relief : montagne, collines. Eau : la rivière. Végétation : "
                 "forêt, rizières, palmiers. Constructions : maisons, école, "
                 "chemin."),
    evaluation=("1. Réponds par vrai ou faux : a) Un paysage ne contient que la "
                "nature. b) Le relief fait partie du paysage. c) La rivière est un "
                "élément d'eau. d) Les maisons sont des constructions humaines.\n"
                "2. Cite quatre éléments d'un paysage.",
                "1. a) Faux — b) Vrai — c) Vrai — d) Vrai.\n"
                "2. La montagne, la rivière, la rizière et le village."),
    lecon_titre="Les éléments d'un paysage",
    sections=[
        ("1. Le relief",
         "Le relief, ce sont les formes du sol : les montagnes, les collines, les "
         "vallées et les plaines. C'est la première chose que l'on remarque, parce "
         "que le relief donne au paysage sa silhouette. Un paysage de montagne ne "
         "ressemble pas à un paysage de plaine, même si l'on y trouve les "
         "mêmes cultures."),
        ("2. L'eau",
         "L'eau est le deuxième élément. On la trouve dans la rivière qui coule au "
         "fond de la vallée, dans le lac, dans la mer au bord de la côte, ou dans la "
         "rizière inondée. L'eau attire les hommes : les villages s'installent "
         "presque toujours près d'une source ou d'un cours d'eau."),
        ("3. La végétation",
         "La végétation, ce sont les plantes qui couvrent le sol : la forêt sur les "
         "hauteurs, les rizières dans les bas-fonds, la savane herbeuse sur les pentes "
         "sèches, les palmiers et les bananiers près des maisons. La végétation "
         "change selon le climat et selon le travail des hommes."),
        ("4. Les constructions humaines",
         "Enfin, un paysage porte toujours la trace des hommes : les maisons du "
         "village, l'école, le pont sur la rivière, la route ou le sentier, les "
         "terrasses des rizières. Ces constructions montrent comment les habitants "
         "utilisent le relief, l'eau et la végétation pour vivre."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Le mot « paysage » vient de « pays ». Il est entré dans "
             "la langue française au XVIe siècle, quand les peintres ont commencé "
             "à dessiner la campagne pour elle-même."),
    resume=[
        "Un paysage se compose de quatre familles d'éléments.",
        "Le relief : montagnes, collines, vallées et plaines.",
        "L'eau : rivière, lac, mer et rizières inondées.",
        "La végétation : forêt, rizières, savane et arbres.",
        "Les constructions humaines : maisons, école, pont, route.",
    ],
    lexique=[("Paysage", "Tout ce que l'on voit quand on regarde un lieu."),
             ("Relief", "Les formes du sol : montagne, colline, vallée, plaine."),
             ("Végétation", "L'ensemble des plantes qui poussent dans un lieu."),
             ("Construction", "Ce que les hommes ont bâti."),
             ("Savane", "Une étendue d'herbes hautes avec quelques arbres.")],
    exercices=[
        ("Complète avec : relief — eau — végétation — constructions",
         ["a) La montagne et la colline forment le ……",
          "b) La rivière est un élément d'……",
          "c) La forêt et les rizières forment la ……",
          "d) Les maisons et les routes sont des ……"],
         ["a) le relief", "b) d'eau", "c) la végétation", "d) des constructions"]),
        ("Réponds par vrai ou faux.",
         ["a) Un paysage ne contient que des éléments naturels.",
          "b) La rizière est à la fois de l'eau et de la végétation.",
          "c) Le relief ne fait pas partie du paysage.",
          "d) Les villages s'installent souvent près de l'eau."],
         ["a) Faux", "b) Vrai", "c) Faux", "d) Vrai"]),
        ("Relie chaque élément à sa famille.",
         ["La rivière", "La colline", "La rizière", "L'école"],
         ["Le relief", "La végétation", "Les constructions", "L'eau"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Cite les quatre familles d'éléments d'un paysage.",
          "b) Pourquoi les villages s'installent-ils près de l'eau ?",
          "c) Cite deux formes de relief.",
          "d) Cite deux constructions humaines."],
         ["a) Le relief, l'eau, la végétation et les constructions humaines.",
          "b) Parce que l'eau est nécessaire pour boire, cuisiner et cultiver.",
          "c) La montagne et la colline.",
          "d) Les maisons et le pont."]),
    ],
    consigne_ex5="Observe le paysage autour de ton école et dresse la liste de quatre "
                 "éléments, un par famille : relief, eau, végétation, "
                 "construction.",
    corrige_ex5="Exemple de réponse : relief = la colline derrière l'école ; "
                "eau = la rivière au bas du chemin ; végétation = les rizières "
                "et les manguiers ; construction = l'école et le pont.",
))

# ═══════════════════════════ SÉANCE 39 ═══════════════════════════
SEANCES.append(dict(
    n=39, semaine=13, titre="Le vocabulaire du paysage",
    objectif="Utiliser le vocabulaire du paysage pour décrire son environnement.",
    materiel="Image de paysage proche, schéma des formes du relief, ardoise et craie, "
             "cahier.",
    illustration=("scene_paysage_proche.png",
                  "Illustration — De près : la rizière, le canal, le chemin et la "
                  "maison.", 620),
    revision=[("Cite les quatre familles d'éléments d'un paysage.",
               "R.A. : Le relief, l'eau, la végétation et les constructions."),
              ("Cite deux formes de relief.", "R.A. : La montagne et la colline.")],
    mes=("Comment appelle-t-on le champ où l'on cultive le riz ?",
         "R.A. : Une rizière."),
    analyse=[
        ("Comment appelle-t-on une haute montagne de roche ?",
         "R.A. : Un massif, ou un sommet."),
        ("Comment appelle-t-on le terrain plat et bas ?", "R.A. : Une plaine."),
        ("Comment appelle-t-on le creux entre deux collines ?", "R.A. : Une "
         "vallée."),
        ("Comment appelle-t-on le petit canal qui amène l'eau au riz ?",
         "R.A. : Un canal d'irrigation."),
        ("Comment appelle-t-on le chemin de terre entre les champs ?",
         "R.A. : Un sentier, ou une piste.")],
    synthese="Donc, chaque élément du paysage a un nom précis. Connaître ce "
             "vocabulaire permet de décrire ce que l'on voit et de se faire "
             "comprendre de tous.",
    application=("Décris le paysage de l'image en trois phrases en employant au moins "
                 "cinq mots de la leçon.",
                 "Exemple : « Au premier plan, une rizière inondée occupe le "
                 "bas-fond. Un canal d'irrigation la traverse. Sur la pente, un sentier "
                 "monte vers une maison au toit de tôle. »"),
    evaluation=("1. Réponds par vrai ou faux : a) Une vallée est un creux entre "
                "deux hauteurs. b) Une plaine est en pente. c) Un canal d'irrigation "
                "amène l'eau au riz. d) Un sommet est le point le plus bas.\n"
                "2. Écris trois phrases qui décrivent le paysage près de "
                "ton école.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Faux.\n"
                "2. Exemple : « Près de l'école coule une petite rivière. "
                "En face s'étend une rizière. Derrière se dresse une colline. »"),
    lecon_titre="Le vocabulaire du paysage",
    sections=[
        ("1. Observer avant de nommer",
         "Décrire un paysage, ce n'est pas seulement regarder : c'est nommer. On "
         "commence par observer en silence, du plus proche au plus lointain. Ensuite on "
         "donne à chaque forme le mot exact. Un élève qui dit « la grande "
         "terre plate » veut dire une plaine ; celui qui dit « le creux "
         "entre les collines » veut dire une vallée."),
        ("2. Les mots du relief",
         "Montagne, colline, vallée et plaine sont les quatre mots du relief. On "
         "les distingue par la hauteur et par la forme : la montagne est haute et "
         "pointue, la colline est basse et arrondie, la vallée est un creux allongé, "
         "la plaine est plate.",
         ("img_s39_a.png", "Figure 1 — Les formes du relief, vues de profil.", 700)),
        ("3. Les mots de l'eau et des cultures",
         "La rivière coule, le lac dort, la mer entoure l'île. La rizière est "
         "un champ plat et inondé où pousse le riz. Le canal d'irrigation est le "
         "petit fossé qui conduit l'eau de la rivière jusqu'à la rizière. "
         "La terrasse est une marche aménagée sur la pente pour retenir l'eau et la "
         "terre."),
        ("4. Décrire en trois phrases",
         "Pour décrire un paysage, trois phrases suffisent. La première situe le "
         "lieu. La deuxième nomme les éléments du relief et de l'eau. La "
         "troisième dit ce que les hommes ont fait. On emploie un vocabulaire précis "
         "et des phrases complètes."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Le mot « rizière » n'existe que dans les pays où l'on "
             "cultive le riz. En malgache, on dit « tanimbary », ce qui signifie "
             "littéralement « le champ du riz »."),
    resume=[
        "Chaque élément du paysage porte un nom précis.",
        "La montagne est haute et pointue ; la colline est basse et arrondie.",
        "La vallée est un creux allongé ; la plaine est plate.",
        "La rizière est un champ inondé ; le canal amène l'eau.",
        "Décrire un paysage demande trois phrases et des mots exacts.",
    ],
    lexique=[("Sommet", "Le point le plus haut d'une montagne."),
             ("Versant", "La pente d'une montagne ou d'une colline."),
             ("Bas-fond", "Le terrain bas et humide où l'on cultive le riz."),
             ("Terrasse", "Une marche aménagée sur une pente pour cultiver."),
             ("Canal d'irrigation", "Un petit fossé qui conduit l'eau aux "
              "cultures.")],
    exercices=[
        ("Complète avec : vallée — plaine — sommet — versant",
         ["a) Le …… est le point le plus haut de la montagne.",
          "b) Le …… est la pente de la montagne.",
          "c) La …… est le creux entre deux hauteurs.",
          "d) La …… est un terrain plat."],
         ["a) Le sommet", "b) Le versant", "c) La vallée", "d) La plaine"]),
        ("Réponds par vrai ou faux.",
         ["a) Une colline est plus basse qu'une montagne.",
          "b) Une vallée se trouve au sommet.",
          "c) Le canal d'irrigation conduit l'eau à la rizière.",
          "d) Une terrasse sert à cultiver sur une pente."],
         ["a) Vrai", "b) Faux", "c) Vrai", "d) Vrai"]),
        ("Relie chaque mot à sa définition.",
         ["Le sommet", "Le versant", "La terrasse", "Le bas-fond"],
         ["La pente", "Le point le plus haut", "Le terrain bas et humide",
          "Une marche sur la pente"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Qu'est-ce qu'une vallée ?",
          "b) Qu'est-ce qu'un canal d'irrigation ?",
          "c) Comment distingue-t-on une colline d'une montagne ?",
          "d) Cite trois mots du vocabulaire du paysage."],
         ["a) C'est le creux allongé entre deux hauteurs.",
          "b) C'est le fossé qui conduit l'eau jusqu'aux cultures.",
          "c) La colline est plus basse et plus arrondie que la montagne.",
          "d) Par exemple : versant, rizière et terrasse."]),
    ],
    consigne_ex5="Décris en trois phrases le paysage que tu vois depuis la cour de "
                 "l'école, en employant au moins six mots de la leçon.",
    corrige_ex5="Exemple : « Devant l'école s'étend une rizière dans le "
                "bas-fond. Un canal d'irrigation la borde. Derrière, le versant de la "
                "colline monte vers un sommet planté d'arbres. »",
))

# ═══════════════════════════ SÉANCE 40 ═══════════════════════════
SEANCES.append(dict(
    n=40, semaine=13, titre="La montagne",
    objectif="Décrire une montagne et la nommer.",
    materiel="Image de massif montagneux, schéma de profil, ardoise et craie, cahier.",
    illustration=("scene_montagne.png",
                  "Illustration — Un massif montagneux et la vallée à ses "
                  "pieds.", 620),
    revision=[("Cite les quatre formes du relief.",
               "R.A. : La montagne, la colline, la vallée et la plaine."),
              ("Qu'est-ce qu'un sommet ?",
               "R.A. : Le point le plus haut d'une montagne.")],
    mes=("As-tu déjà vu une montagne de près ? À quoi ressemblait-elle ?",
         "R.A. : Elle était très haute et ses pentes étaient raides."),
    analyse=[
        ("Quelle est la forme du sommet ?", "R.A. : Il est pointu et rocheux."),
        ("Comment sont les pentes ?", "R.A. : Elles sont raides."),
        ("Que voit-on à mi-hauteur ?", "R.A. : Un bandeau de brume ou de nuages."),
        ("Que trouve-t-on au pied de la montagne ?",
         "R.A. : Une vallée avec une rivière et des rizières."),
        ("Fait-il plus froid en haut ou en bas ?", "R.A. : Plus froid en haut.")],
    synthese="Donc, une montagne est un relief élevé, aux pentes raides et au sommet "
             "rocheux. L'air y est plus frais qu'en bas, et la végétation change "
             "avec l'altitude.",
    application=("Observe l'image et réponds : a) Où est le sommet ? b) Où "
                 "sont les pentes ? c) Que trouve-t-on au pied ? d) Cite un massif "
                 "montagneux de Madagascar.",
                 "a) Tout en haut, en roche grise — b) Sur les côtés, en "
                 "vert olive — c) Une vallée avec une rivière — d) "
                 "L'Andringitra ou le Tsaratanana."),
    evaluation=("1. Réponds par vrai ou faux : a) Le sommet est le point le plus "
                "haut. b) Les pentes de la montagne sont douces. c) Il fait plus frais "
                "en altitude. d) On cultive le riz au sommet.\n"
                "2. Décris une montagne en trois phrases.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Faux.\n"
                "2. Exemple : « Une montagne est un relief très élevé. "
                "Ses pentes sont raides et son sommet est rocheux. À ses pieds "
                "s'étend une vallée cultivée. »"),
    lecon_titre="La montagne",
    sections=[
        ("1. Qu'est-ce qu'une montagne ?",
         "Une montagne est un relief élevé qui domine les environs de plusieurs "
         "centaines de mètres. Ses pentes sont raides et son sommet est souvent "
         "formé de roche nue. Les montagnes de Madagascar sont anciennes : ce sont "
         "des massifs de granite, aux formes arrondies par le temps, comme l'Andringitra "
         "au sud ou le Tsaratanana au nord."),
        ("2. Le sommet et les pentes",
         "Le sommet est le point le plus haut. Sur les massifs malgaches, il est couvert "
         "de roches grises et de pelouses rases, battues par le vent. Les pentes, ou "
         "versants, descendent du sommet vers la vallée. Plus on descend, plus la "
         "pente s'adoucit et plus la végétation devient haute et dense."),
        ("3. Le climat de la montagne",
         "En altitude, l'air est plus frais : la température baisse d'environ six "
         "degrés à chaque mille mètres gagnés. Les nuages accrochent les "
         "massifs et déposent leur pluie sur les versants exposés au vent. C'est "
         "pour cela que les montagnes sont souvent couvertes de brume à "
         "mi-hauteur."),
        ("4. Vivre à la montagne",
         "Les hommes cultivent les vallées et les versants bas, où ils "
         "aménagent des rizières en terrasses. Les pentes les plus raides restent "
         "couvertes de forêt ou de prairie. On y élève des zébus et l'on y "
         "ramasse du bois. Le sommet, trop froid et trop venteux, reste inhabité."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Le maromokotro, dans le massif du Tsaratanana, culmine à 2 876 "
             "mètres : c'est le point le plus haut de Madagascar. Il y fait parfois "
             "zéro degré la nuit, alors qu'il fait chaud sur la côte."),
    resume=[
        "Une montagne est un relief élevé aux pentes raides.",
        "Le sommet est le point le plus haut, souvent rocheux.",
        "Les pentes s'adoucissent en descendant vers la vallée.",
        "En altitude, l'air est plus frais et les nuages accrochent les massifs.",
        "On cultive les versants bas en terrasses ; le sommet reste inhabité.",
    ],
    lexique=[("Massif", "Un ensemble de montagnes groupées."),
             ("Altitude", "La hauteur d'un lieu par rapport au niveau de la mer."),
             ("Versant", "Chacune des pentes d'une montagne."),
             ("Granite", "Une roche dure, grise, très répandue à "
              "Madagascar."),
             ("Culminer", "Atteindre le point le plus haut.")],
    exercices=[
        ("Complète avec : sommet — versant — altitude — massif",
         ["a) Le …… est le point le plus haut de la montagne.",
          "b) Un …… est un groupe de montagnes.",
          "c) L'…… est la hauteur par rapport à la mer.",
          "d) Le …… est une pente de la montagne."],
         ["a) Le sommet", "b) Un massif", "c) L'altitude", "d) Le versant"]),
        ("Réponds par vrai ou faux.",
         ["a) Le maromokotro est le point culminant de Madagascar.",
          "b) Il fait plus chaud en altitude.",
          "c) Les rizières en terrasses se trouvent sur les versants bas.",
          "d) Le sommet est souvent couvert de roches nues."],
         ["a) Vrai", "b) Faux", "c) Vrai", "d) Vrai"]),
        ("Relie chaque mot à sa définition.",
         ["Le sommet", "Le versant", "Le massif", "L'altitude"],
         ["La hauteur", "Un groupe de montagnes", "La pente", "Le point le plus haut"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Qu'est-ce qu'une montagne ?",
          "b) Où cultive-t-on le riz sur une montagne ?",
          "c) Pourquoi fait-il plus frais en altitude ?",
          "d) Cite un massif montagneux de Madagascar."],
         ["a) C'est un relief élevé aux pentes raides.",
          "b) On le cultive sur les versants bas, en terrasses.",
          "c) Parce que la température baisse quand on monte.",
          "d) Par exemple l'Andringitra ou le Tsaratanana."]),
    ],
    consigne_ex5="Dessine une montagne vue de profil : sommet rocheux, versants, "
                 "vallée avec une rivière, et légende les quatre mots de la "
                 "leçon.",
    corrige_ex5="Triangle élevé au sommet gris, pentes vertes, vallée en V avec un "
                "trait bleu pour la rivière, rizières en terrasses. Légende : "
                "sommet, versant, vallée, altitude.",
))

# ═══════════════════════════ SÉANCE 41 ═══════════════════════════
SEANCES.append(dict(
    n=41, semaine=14, titre="La colline et la vallée",
    objectif="Décrire une colline et une vallée.",
    materiel="Image de vallée, schéma de profil comparé, ardoise et craie, cahier.",
    illustration=("scene_colline_vallee.png",
                  "Illustration — Une vallée entre deux collines, avec sa "
                  "rivière et ses rizières.", 620),
    revision=[("Qu'est-ce qu'une montagne ?",
               "R.A. : Un relief élevé aux pentes raides."),
              ("Qu'est-ce qu'un versant ?",
               "R.A. : Une des pentes d'une montagne ou d'une colline.")],
    mes=("Dans ton village, y a-t-il un creux entre deux hauteurs ? Comment "
          "l'appelle-t-on ?",
         "R.A. : Oui, c'est une vallée."),
    analyse=[
        ("Quelle est la forme de la colline ?",
         "R.A. : Elle est basse et arrondie."),
        ("Où se trouve la vallée ?", "R.A. : Entre les deux collines."),
        ("Que coule au fond de la vallée ?", "R.A. : Une rivière."),
        ("Que cultive-t-on sur les pentes ?", "R.A. : Des rizières en "
         "terrasses."),
        ("Où sont construites les maisons ?",
         "R.A. : Sur les versants, à l'abri du vent.")],
    synthese="Donc, la colline est une hauteur basse et arrondie. La vallée est le "
             "creux qui sépare deux hauteurs. Une rivière y coule et les hommes y "
             "installent leurs rizières.",
    application=("Observe l'image et réponds : a) Combien de collines vois-tu ? "
                 "b) Où est la rivière ? c) Que cultive-t-on dans le fond ? "
                 "d) Où sont les maisons ?",
                 "a) Deux — b) Au fond de la vallée — c) Des rizières "
                 "— d) Sur le versant de la colline de droite."),
    evaluation=("1. Réponds par vrai ou faux : a) La colline est haute et "
                "pointue. b) La vallée sépare deux hauteurs. c) Une rivière "
                "coule au fond de la vallée. d) On cultive le riz sur le sommet.\n"
                "2. Décris une vallée en trois phrases.",
                "1. a) Faux — b) Vrai — c) Vrai — d) Faux.\n"
                "2. Exemple : « Une vallée est un creux entre deux hauteurs. "
                "Une rivière y coule. Les rizières occupent son fond plat. »"),
    lecon_titre="La colline et la vallée",
    sections=[
        ("1. La colline",
         "La colline est une hauteur de faible altitude, au sommet arrondi et aux "
         "pentes douces. Elle est beaucoup plus basse que la montagne : quelques "
         "dizaines ou centaines de mètres seulement. Les collines de Madagascar, "
         "couvertes de prairies ou de rizières en terrasses, donnent aux hautes "
         "terres leur paysage familier de vagues vertes."),
        ("2. La vallée",
         "La vallée est le creux allongé qui sépare deux hauteurs. Elle a la "
         "forme d'un V ouvert. Son fond est plat et humide, parce que l'eau de pluie "
         "descend des deux versants et s'y rassemble. C'est là que la terre est la "
         "plus fertile."),
        ("3. La rivière de la vallée",
         "Au fond de la vallée coule presque toujours une rivière. Elle "
         "rassemble l'eau des pentes et l'emporte vers l'aval. En saison des pluies, "
         "elle grossit et déborde ; en saison sèche, elle devient un mince filet "
         "d'eau. Les rizières sont aménagées de part et d'autre, pour profiter "
         "de cette eau."),
        ("4. Colline, montagne, vallée : les différences",
         "Retiens la comparaison : la montagne est haute et raide, la colline est basse "
         "et arrondie, la vallée est le creux entre deux hauteurs. Un même paysage "
         "peut réunir les trois : des montagnes au loin, des collines au milieu et "
         "une vallée cultivée au premier plan."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Sur les hautes terres, les paysans cultivent le riz sur des terrasses "
             "taillées dans la pente des collines. Ces marches retiennent l'eau et "
             "empêchent la terre de glisser vers le bas."),
    resume=[
        "La colline est une hauteur basse, au sommet arrondi et aux pentes douces.",
        "La vallée est le creux allongé entre deux hauteurs.",
        "Une rivière coule presque toujours au fond de la vallée.",
        "Le fond de la vallée est plat, humide et fertile.",
        "Montagne, colline et vallée se distinguent par la hauteur et la forme.",
    ],
    lexique=[("Colline", "Une hauteur basse, au sommet arrondi."),
             ("Vallée", "Le creux allongé entre deux hauteurs."),
             ("Fertile", "Qui produit beaucoup ; une terre riche."),
             ("Terrasse", "Une marche aménagée sur une pente pour cultiver."),
             ("Versant", "Chacune des pentes d'une hauteur.")],
    exercices=[
        ("Complète avec : colline — vallée — rivière — fertile",
         ["a) Une …… est une hauteur basse et arrondie.",
          "b) Une …… sépare deux hauteurs.",
          "c) Une …… coule au fond de la vallée.",
          "d) Le fond de la vallée est humide et ……"],
         ["a) Une colline", "b) Une vallée", "c) Une rivière", "d) et fertile"]),
        ("Réponds par vrai ou faux.",
         ["a) La colline est plus haute que la montagne.",
          "b) La vallée a souvent la forme d'un V.",
          "c) Les rizières occupent le fond de la vallée.",
          "d) Le sommet d'une colline est pointu comme celui d'une montagne."],
         ["a) Faux", "b) Vrai", "c) Vrai", "d) Faux"]),
        ("Relie chaque forme à sa description.",
         ["La montagne", "La colline", "La vallée", "La plaine"],
         ["Le creux entre deux hauteurs", "Basse et arrondie", "Plate",
          "Haute et raide"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Qu'est-ce qu'une colline ?",
          "b) Où se trouve la vallée ?",
          "c) Pourquoi le fond de la vallée est-il fertile ?",
          "d) Que cultive-t-on sur les pentes ?"],
         ["a) C'est une hauteur basse au sommet arrondi.",
          "b) Elle se trouve entre deux hauteurs.",
          "c) Parce que l'eau et la terre descendues des pentes s'y rassemblent.",
          "d) On y cultive le riz, en terrasses."]),
    ],
    consigne_ex5="Dessine un paysage avec deux collines, une vallée, une rivière "
                 "et des rizières en terrasses. Légende les quatre mots : colline, "
                 "vallée, rivière, terrasse.",
    corrige_ex5="Deux dômes verts de part et d'autre, V au centre, trait bleu au "
                "fond du V, bandes vertes en escalier sur les pentes, cases de légende "
                "avec les quatre mots.",
))

# ═══════════════════════════ SÉANCE 42 ═══════════════════════════
SEANCES.append(dict(
    n=42, semaine=14, titre="La plaine",
    objectif="Décrire une plaine et la distinguer de la montagne.",
    materiel="Image de plaine cultivée, schéma de profil comparé, ardoise et craie, "
             "cahier.",
    illustration=("scene_plaine.png",
                  "Illustration — Une plaine : des rizières à perte de vue et "
                  "un horizon dégagé.", 620),
    revision=[("Qu'est-ce qu'une colline ?",
               "R.A. : Une hauteur basse, au sommet arrondi."),
              ("Qu'est-ce qu'une vallée ?",
               "R.A. : Le creux allongé entre deux hauteurs.")],
    mes=("As-tu déjà marché dans un endroit où la terre est plate à "
          "perte de vue ?",
         "R.A. : Oui, dans la plaine, près de la rivière."),
    analyse=[
        ("Quelle est la forme du terrain ?", "R.A. : Il est plat, sans pente."),
        ("Que voit-on à l'horizon ?", "R.A. : Un horizon dégagé, avec "
         "des collines très loin."),
        ("Que cultive-t-on dans la plaine ?", "R.A. : Le riz, en grandes "
         "parcelles."),
        ("Comment amène-t-on l'eau aux cultures ?", "R.A. : Par des canaux "
         "d'irrigation."),
        ("Quelle est la différence avec la montagne ?",
         "R.A. : La plaine est basse et plate ; la montagne est haute et raide.")],
    synthese="Donc, une plaine est une grande étendue de terrain plat et bas. Elle "
             "est fertile et facile à cultiver, parce que l'eau y reste et que la "
             "terre ne glisse pas.",
    application=("Observe l'image et réponds : a) Le terrain est-il plat ou en "
                 "pente ? b) Que cultive-t-on ? c) Comment les parcelles sont-elles "
                 "disposées ? d) Que voit-on à l'horizon ?",
                 "a) Il est plat — b) Le riz — c) En rectangles "
                 "réguliers, séparés par des diguettes — d) Des collines "
                 "très éloignées."),
    evaluation=("1. Réponds par vrai ou faux : a) La plaine est un terrain "
                "plat. b) La plaine est une hauteur. c) On y cultive le riz. d) "
                "L'horizon y est dégagé.\n"
                "2. Cite deux différences entre une plaine et une montagne.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n"
                "2. La montagne est haute et en pente ; la plaine est basse et plate."),
    lecon_titre="La plaine",
    sections=[
        ("1. Qu'est-ce qu'une plaine ?",
         "Une plaine est une grande étendue de terrain plat, de faible altitude. Le "
         "sol n'y présente ni montée ni descente : on peut marcher longtemps sans "
         "changer de hauteur. L'horizon y est dégagé, et l'on voit très loin. "
         "Les plaines de Madagascar se trouvent surtout le long des grands fleuves et "
         "sur la côte ouest."),
        ("2. Une terre plate et fertile",
         "La plaine est une terre précieuse. Parce qu'elle est plate, la terre ne "
         "glisse pas vers le bas comme sur une pente. Parce qu'elle est basse, l'eau "
         "des pluies et des rivières s'y rassemble au lieu de s'écouler. Les "
         "alluvions déposées par les crues enrichissent le sol. C'est pour cela "
         "que les plaines sont les greniers à riz du pays."),
        ("3. L'eau dans la plaine",
         "Dans une plaine, l'eau arrive par la rivière et se répartit grâce à "
         "un réseau de canaux d'irrigation. Les parcelles, appelées parcelles "
         "rizicoles, sont entourées de petites digues de terre qui retiennent l'eau. "
         "Ce paysage en damier, fait de rectangles verts et brillants, est typique des "
         "plaines rizicoles malgaches."),
        ("4. Plaine et montagne : les différences",
         "La plaine s'oppose à la montagne sur trois points. La hauteur : la plaine "
         "est basse. La forme : la plaine est plate, la montagne est pointue. La pente "
         ": dans la plaine, il n'y en a pas. Pourtant les deux se complètent : "
         "l'eau descend de la montagne pour arroser la plaine."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "La plaine de Marovoay, dans le nord-ouest, est l'un des plus grands "
             "greniers à riz de Madagascar. Ses rizières s'étendent à "
             "perte de vue au pied du massif du Bongolava."),
    resume=[
        "Une plaine est une grande étendue de terrain plat et bas.",
        "L'horizon y est dégagé et la pente absente.",
        "Le sol y est fertile, enrichi par les alluvions des crues.",
        "Les canaux d'irrigation répartissent l'eau entre les parcelles.",
        "La plaine est basse et plate, la montagne haute et raide.",
    ],
    lexique=[("Plaine", "Une grande étendue de terrain plat et bas."),
             ("Alluvions", "La terre fertile déposée par une rivière en "
              "crue."),
             ("Diguetter", "Entourer une parcelle d'une petite levée de terre."),
             ("Grenier à riz", "Une région qui produit beaucoup de riz."),
             ("Parcelle", "Un morceau de champ cultivé.")],
    exercices=[
        ("Complète avec : plaine — plate — irrigation — fertile",
         ["a) Une …… est une grande étendue de terrain plat.",
          "b) Le sol de la plaine est ……",
          "c) Les canaux d'…… répartissent l'eau.",
          "d) La terre de la plaine est …… et basse."],
         ["a) Une plaine", "b) est fertile", "c) d'irrigation", "d) est plate"]),
        ("Réponds par vrai ou faux.",
         ["a) La plaine est une hauteur de terrain.",
          "b) L'horizon est dégagé dans une plaine.",
          "c) Les alluvions enrichissent le sol.",
          "d) La montagne descend vers la plaine par ses versants."],
         ["a) Faux", "b) Vrai", "c) Vrai", "d) Vrai"]),
        ("Relie chaque mot à sa définition.",
         ["Les alluvions", "Le canal", "La parcelle", "La diguette"],
         ["Conduit l'eau", "Retient l'eau autour du champ", "La terre des crues",
          "Un morceau de champ"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Qu'est-ce qu'une plaine ?",
          "b) Pourquoi la plaine est-elle fertile ?",
          "c) Comment amène-t-on l'eau aux rizières ?",
          "d) Cite deux différences entre plaine et montagne."],
         ["a) C'est une grande étendue de terrain plat et bas.",
          "b) Parce que l'eau s'y rassemble et que les crues y déposent des "
          "alluvions.",
          "c) Par un réseau de canaux d'irrigation.",
          "d) La plaine est basse et plate, la montagne haute et en pente."]),
    ],
    consigne_ex5="Dessine une plaine rizicole vue de haut : le canal principal, les "
                 "canaux secondaires, les parcelles entourées de diguettes, et "
                 "légende les quatre mots de la leçon.",
    corrige_ex5="Damier de rectangles verts, bandes bleues perpendiculaires pour les "
                "canaux, traits ocres pour les diguettes. Légende : plaine, "
                "irrigation, parcelle, diguette.",
))

# ═══════════════════════════ SÉANCE 43 ═══════════════════════════
SEANCES.append(dict(
    n=43, semaine=14, titre="Comparer les types de paysages",
    objectif="Identifier et comparer la montagne, la colline, la vallée et la plaine.",
    materiel="Schéma comparatif des quatre paysages, images des quatre reliefs, ardoise "
             "et craie, cahier.",
    illustration=("img_s43_a.png",
                  "Illustration — Les quatre paysages comparés : montagne, "
                  "colline, vallée, plaine.", 700),
    revision=[("Cite les quatre formes du relief.",
               "R.A. : La montagne, la colline, la vallée et la plaine."),
              ("Qu'est-ce qu'une plaine ?",
               "R.A. : Une grande étendue de terrain plat et bas.")],
    mes=("Entre une montagne et une colline, qu'est-ce qui change le plus ?",
         "R.A. : La hauteur et la raideur des pentes."),
    analyse=[
        ("Quel relief est le plus haut ?", "R.A. : La montagne."),
        ("Quel relief est le plus bas et le plus plat ?", "R.A. : La plaine."),
        ("Quel relief est un creux ?", "R.A. : La vallée."),
        ("Quel relief a un sommet arrondi ?", "R.A. : La colline."),
        ("Cite les trois critères de comparaison.",
         "R.A. : La hauteur, la forme et la pente.")],
    synthese="Donc, on compare les paysages avec trois critères : la hauteur, la "
             "forme et la pente. La montagne est haute et raide, la colline basse et "
             "arrondie, la vallée en creux, la plaine plate.",
    application=("Complète le tableau de comparaison : montagne, colline, "
                 "vallée, plaine (hauteur, forme, pente, usage principal).",
                 "Montagne : très haute, pointue, pentes raides, forêt et "
                 "terrasses. Colline : moyenne, arrondie, pentes douces, rizières en "
                 "terrasses. Vallée : basse, en V, fond plat, rizières "
                 "irriguées. Plaine : basse, plate, aucune pente, grandes "
                 "rizières."),
    evaluation=("1. Réponds par vrai ou faux : a) La montagne est le relief le "
                "plus haut. b) La colline a un sommet pointu. c) La vallée est "
                "un creux. d) La plaine est en pente.\n"
                "2. Compare en deux phrases la montagne et la plaine.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Faux.\n"
                "2. Exemple : « La montagne est haute et ses pentes sont "
                "raides. La plaine est basse et plate. »"),
    lecon_titre="Comparer les paysages",
    sections=[
        ("1. Trois critères pour comparer",
         "Pour comparer deux paysages, on emploie toujours les mêmes "
         "critères. D'abord la hauteur : le relief est-il haut ou bas ? Ensuite la "
         "forme : le sommet est-il pointu, arrondi, plat ou en creux ? Enfin la pente : "
         "le terrain monte-t-il doucement ou brutalement ? Ces trois questions "
         "suffisent à identifier n'importe quel relief.",),
        ("2. Le tableau de comparaison",
         "Le schéma résume les quatre paysages. La montagne : très haute, "
         "pointue, pentes raides. La colline : hauteur moyenne, sommet arrondi, pentes "
         "douces. La vallée : basse, en forme de V, fond plat et humide. La plaine "
         ": basse, entièrement plate, sans pente. Apprendre ce tableau permet de "
         "nommer un paysage dès le premier coup d'œil."),
        ("3. Chaque paysage a ses usages",
         "Les hommes n'utilisent pas les quatre paysages de la même manière. Sur "
         "la montagne, on garde la forêt et l'on taille des terrasses. Sur la "
         "colline, on cultive le riz en terrasses et l'on élève des zébus. Dans "
         "la vallée, on installe les rizières irriguées. Dans la plaine, on "
         "trace de grandes parcelles et l'on construit les villages."),
        ("4. Lire un paysage",
         "Un géographe lit un paysage comme on lit une phrase. Il repère le relief, "
         "puis il cherche l'eau, la végétation et les constructions, et il "
         "cherche enfin comment les hommes ont utilisé ce relief. Cette lecture "
         "donne un sens au paysage : elle explique pourquoi les maisons sont ici et les "
         "rizières là."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Les géographes appellent « géomorphologie » l'étude des "
             "formes du relief. Ce mot vient du grec : géo pour la terre, morphé "
             "pour la forme, logos pour l'étude."),
    resume=[
        "On compare les paysages avec trois critères.",
        "La hauteur : la montagne est haute, la plaine est basse.",
        "La forme : pointue, arrondie, en creux ou plate.",
        "La pente : raide, douce ou absente.",
        "Chaque paysage a son usage principal.",
    ],
    lexique=[("Critère", "Ce qui sert à comparer et à juger."),
             ("Comparer", "Chercher les ressemblances et les différences."),
             ("Identifier", "Reconnaître et nommer."),
             ("Relief", "Les formes du sol."),
             ("Pente", "L'inclinaison du terrain.")],
    exercices=[
        ("Complète avec : montagne — colline — vallée — plaine",
         ["a) La …… est très haute, avec des pentes raides.",
          "b) La …… a un sommet arrondi et des pentes douces.",
          "c) La …… est un creux entre deux hauteurs.",
          "d) La …… est plate et sans pente."],
         ["a) La montagne", "b) La colline", "c) La vallée", "d) La plaine"]),
        ("Réponds par vrai ou faux.",
         ["a) La montagne est plus haute que la colline.",
          "b) La plaine est un relief très élevé.",
          "c) La vallée a souvent un fond plat et humide.",
          "d) La colline a un sommet pointu."],
         ["a) Vrai", "b) Faux", "c) Vrai", "d) Faux"]),
        ("Relie chaque relief à son usage principal.",
         ["La montagne", "La colline", "La vallée", "La plaine"],
         ["Grandes parcelles irriguées", "Forêt et terrasses",
          "Rizières en terrasses", "Rizières dans le fond"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Cite les trois critères de comparaison des paysages.",
          "b) Quel est le relief le plus haut ?",
          "c) Quel relief n'a aucune pente ?",
          "d) Pourquoi la vallée est-elle humide ?"],
         ["a) La hauteur, la forme et la pente.",
          "b) C'est la montagne.",
          "c) C'est la plaine.",
          "d) Parce que l'eau descend des deux versants et s'y rassemble."]),
    ],
    consigne_ex5="Complète le tableau des quatre paysages : pour chacun, indique la "
                 "hauteur, la forme, la pente et l'usage principal.",
    corrige_ex5="Montagne : très haute, pointue, pentes raides, forêt et "
                "terrasses. Colline : moyenne, arrondie, pentes douces, terrasses. "
                "Vallée : basse, en V, fond plat, rizières irriguées. "
                "Plaine : basse, plate, aucune pente, grandes parcelles.",
))

# ═══════════════════════════ SÉANCE 44 ═══════════════════════════
SEANCES.append(dict(
    n=44, semaine=15, titre="L'utilisation humaine de la montagne",
    objectif="Décrire l'utilisation de la montagne par l'homme.",
    materiel="Image de versant cultivé en terrasses, schéma de terrasse, ardoise et "
             "craie, cahier.",
    illustration=("scene_montagne_cultivee.png",
                  "Illustration — Un versant de montagne cultivé en "
                  "rizières en terrasses.", 620),
    revision=[("Qu'est-ce qu'une terrasse ?",
               "R.A. : Une marche aménagée sur une pente pour cultiver."),
              ("Quelle est la forme du relief le plus haut ?", "R.A. : La "
               "montagne.")],
    mes=("Sur la pente d'une montagne, peut-on cultiver le riz ? Comment ?",
         "R.A. : Oui, en taillant des terrasses."),
    analyse=[
        ("Que fait-on pousser sur les terrasses ?", "R.A. : Le riz."),
        ("Comment l'eau arrive-t-elle jusqu'aux terrasses ?",
         "R.A. : Par un canal qui suit la courbe de la pente."),
        ("Que garde-t-on sur le sommet ?", "R.A. : La forêt."),
        ("Que fait-on sur les pentes les plus raides ?",
         "R.A. : On les laisse en prairie ou en forêt."),
        ("Pourquoi ne cultive-t-on pas le sommet ?",
         "R.A. : Parce qu'il y fait trop froid et trop venteux.")],
    synthese="Donc, sur la montagne, les hommes cultivent les versants en terrasses, "
             "gardent la forêt sur les sommets et les pentes raides, et "
             "aménagent des canaux pour conduire l'eau.",
    application=("Observe l'image et réponds : a) Que voit-on sur le versant ? "
                 "b) D'où vient l'eau ? c) Que garde-t-on en haut ? d) Où "
                 "sont les maisons ?",
                 "a) Des rizières en terrasses — b) D'un canal qui longe la "
                 "pente, alimenté par la source — c) La forêt — "
                 "d) À mi-pente, à l'abri du vent."),
    evaluation=("1. Réponds par vrai ou faux : a) On cultive le riz en terrasses "
                "sur les versants. b) On coupe toute la forêt du sommet. c) Le "
                "canal suit la courbe de niveau. d) Le sommet reste inhabité.\n"
                "2. Décris en trois phrases l'utilisation d'une montagne.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n"
                "2. Exemple : « Les versants sont cultivés en rizières "
                "en terrasses. L'eau arrive par un canal. La forêt est conservée "
                "sur les pentes raides et le sommet. »"),
    lecon_titre="L'utilisation de la montagne",
    sections=[
        ("1. Les rizières en terrasses",
         "Sur une pente, l'eau dévale et emporte la terre. Pour cultiver, les "
         "paysans taillent des marches dans la pente : ce sont les terrasses. Chaque "
         "marche retient l'eau et la terre. Sur les versants des hautes terres, ces "
         "terrasses dessinent de grands escaliers verts où pousse le riz. Elles "
         "demandent un travail considérable, entretenu de génération en "
         "génération."),
        ("2. L'eau et les canaux",
         "L'eau est captée à la source, en haut du versant, puis conduite par un "
         "canal qui suit la courbe de niveau, c'est-à-dire à la même "
         "hauteur tout le long de la pente. De ce canal principal partent de petits "
         "canaux qui remplissent chaque terrasse. L'eau descend ainsi de marche en "
         "marche, sans jamais creuser le sol."),
        ("3. La forêt et le bois",
         "Les pentes les plus raides et les sommets restent couverts de forêt. Cette "
         "forêt est utile : elle retient la terre, elle protège les sources, et "
         "elle fournit le bois de chauffe et le bois d'œuvre. Les villageois y "
         "ramassent aussi du miel, des fruits et des plantes médicinales."),
        ("4. Les limites à respecter",
         "La montagne impose des limites. Au-dessus d'une certaine altitude, le froid "
         "et le vent empêchent les cultures : on n'y trouve que des prairies. Si "
         "l'on coupe la forêt ou si l'on néglige l'entretien des terrasses, "
         "l'érosion emporte la terre en quelques saisons. La montagne ne pardonne "
         "pas les excès."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Sur les hautes terres, certaines rizières en terrasses sont "
             "cultivées sans interruption depuis plus de deux cents ans. Elles sont "
             "transmises de parents à enfants, comme un héritage."),
    resume=[
        "Sur les versants, on cultive le riz en terrasses.",
        "La terrasse retient l'eau et la terre sur la pente.",
        "Le canal suit la courbe de niveau depuis la source.",
        "Les pentes raides et les sommets restent couverts de forêt.",
        "Au-dessus d'une certaine altitude, le froid interdit les cultures.",
    ],
    lexique=[("Terrasse", "Une marche aménagée sur une pente pour cultiver."),
             ("Courbe de niveau", "Une ligne qui relie tous les points d'une "
              "même hauteur."),
             ("Captage", "L'endroit où l'on prend l'eau d'une source."),
             ("Bois d'œuvre", "Le bois utilisé pour construire."),
             ("Prairie", "Une étendue d'herbes où l'on fait paître les "
              "animaux.")],
    exercices=[
        ("Complète avec : terrasses — canal — forêt — altitude",
         ["a) On cultive le riz en …… sur les versants.",
          "b) Un …… conduit l'eau depuis la source.",
          "c) On conserve la …… sur les pentes raides.",
          "d) Au-delà d'une certaine ……, le froid interdit les "
          "cultures."],
         ["a) en terrasses", "b) Un canal", "c) la forêt", "d) certaine altitude"]),
        ("Réponds par vrai ou faux.",
         ["a) La terrasse retient l'eau et la terre.",
          "b) Le canal suit la courbe de niveau.",
          "c) On cultive jusqu'au sommet de la montagne.",
          "d) La forêt protège les sources."],
         ["a) Vrai", "b) Vrai", "c) Faux", "d) Vrai"]),
        ("Relie chaque terme à son rôle.",
         ["La terrasse", "Le canal", "La forêt", "La prairie"],
         ["Retient la terre et les sources", "Fait paître les animaux",
          "Retient l'eau sur la pente", "Conduit l'eau"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Pourquoi fait-on des terrasses ?",
          "b) D'où vient l'eau des terrasses ?",
          "c) Que conserve-t-on sur les sommets ?",
          "d) Pourquoi ne cultive-t-on pas tout en haut ?"],
         ["a) Pour retenir l'eau et la terre sur la pente.",
          "b) Elle vient de la source, par un canal de courbe de niveau.",
          "c) On conserve la forêt.",
          "d) Parce qu'il y fait trop froid et trop venteux."]),
    ],
    consigne_ex5="Dessine un versant de montagne aménagé : la forêt au "
                 "sommet, les terrasses sur la pente, le canal en haut, la source et le "
                 "village. Légende les cinq mots de la leçon.",
    corrige_ex5="Forêt en haut, escalier de terrasses vertes, trait bleu qui suit la "
                "pente en haut, source, maisons à mi-pente. Légende : terrasse, "
                "canal, forêt, source, altitude.",
))

# ═══════════════════════════ SÉANCE 45 ═══════════════════════════
SEANCES.append(dict(
    n=45, semaine=15, titre="L'utilisation de la colline et de la plaine",
    objectif="Décrire l'utilisation de la colline et de la plaine.",
    materiel="Image de rizières irriguées, schéma de réseau d'irrigation, "
             "ardoise et craie, cahier.",
    illustration=("scene_paysage_proche.png",
                  "Illustration — Les rizières irriguées, le canal et le "
                  "chemin.", 620),
    revision=[("Qu'est-ce qu'un canal d'irrigation ?",
               "R.A. : Un fossé qui conduit l'eau aux cultures."),
              ("Qu'est-ce qu'une plaine ?",
               "R.A. : Une grande étendue de terrain plat et bas.")],
    mes=("Chez toi, où installe-t-on les rizières : sur la pente ou dans le "
          "creux ?",
         "R.A. : Dans le creux, là où l'eau s'arrête."),
    analyse=[
        ("Que cultive-t-on sur les collines ?",
         "R.A. : Le riz en terrasses, et parfois le manioc sur les pentes "
         "sèches."),
        ("Que cultive-t-on dans la plaine ?",
         "R.A. : Le riz, en grandes parcelles."),
        ("Où installe-t-on les maisons ?",
         "R.A. : Sur la colline, à l'abri de l'eau et du vent."),
        ("Où passe la route ?", "R.A. : Dans la plaine, là où c'est "
         "plat."),
        ("Pourquoi les villages ne sont-ils pas dans le bas-fond ?",
         "R.A. : Parce que le bas-fond est inondé et réservé au riz.")],
    synthese="Donc, la colline porte les villages et les cultures en terrasses, "
             "tandis que la plaine porte les grandes rizières, les routes et les "
             "canaux. Chaque relief a son usage.",
    application=("Observe l'image et réponds : a) Que voit-on au premier plan ? "
                 "b) Où passe le canal ? c) Où est le chemin ? d) Où "
                 "serait la maison ?",
                 "a) Une rizière inondée — b) En bordure de la rizière "
                 "— c) Sur la diguette — d) Sur la pente, à "
                 "l'écart de l'eau."),
    evaluation=("1. Réponds par vrai ou faux : a) Les villages sont construits "
                "sur les collines. b) Les grandes rizières occupent la plaine. "
                "c) Le bas-fond est réservé au riz. d) La route passe sur "
                "le sommet.\n"
                "2. Compare en deux phrases l'usage de la colline et celui de la "
                "plaine.",
                "1. a) Vrai — b) Vrai — c) Vrai — d) Faux.\n"
                "2. Exemple : « La colline porte le village et les cultures en "
                "terrasses. La plaine porte les grandes rizières et la route. »"),
    lecon_titre="L'utilisation de la colline et de la plaine",
    sections=[
        ("1. La colline : terrasses et habitat",
         "Sur la colline, les pentes douces sont aménagées en terrasses pour le "
         "riz. Les pentes plus sèches portent le manioc, la patate douce ou des "
         "arbres fruitiers. C'est aussi sur la colline que l'on construit les maisons "
         "du village : le sol y est sec, l'air y circule et l'on voit venir les "
         "visiteurs de loin."),
        ("2. La plaine : grandes rizières",
         "Dans la plaine et dans le bas-fond, on installe les grandes rizières. Le "
         "terrain plat permet de tracer des parcelles régulières et de les "
         "remplir d'eau. C'est là que se fait l'essentiel de la récolte de riz, "
         "la nourriture de base du pays. Une seule plaine peut nourrir plusieurs "
         "villages."),
        ("3. L'irrigation",
         "Le réseau d'irrigation est le cœur de ce système. Un canal "
         "principal prend l'eau dans la rivière, puis des canaux secondaires la "
         "répartissent vers les parcelles. Des diguettes de terre entourent chaque "
         "parcelle et retiennent l'eau. Les paysans ouvrent et ferment ces passages "
         "selon les besoins du riz."),
        ("4. Routes, marchés et villages",
         "La route et la voie ferrée suivent la plaine, parce qu'il est plus "
         "facile de construire à plat. Les marchés s'installent au bord de la "
         "route, à mi-chemin entre les villages de colline et les rizières de "
         "plaine. Ainsi, chaque relief a trouvé son usage : la colline pour "
         "habiter, la plaine pour produire."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Le riz est la base de l'alimentation malgache. Un Malgache en consomme en "
             "moyenne plus de cent kilos par an, ce qui place Madagascar parmi les plus "
             "grands consommateurs de riz au monde."),
    resume=[
        "La colline porte les villages et les cultures en terrasses.",
        "La plaine et le bas-fond portent les grandes rizières.",
        "Le réseau d'irrigation distribue l'eau de la rivière.",
        "Les diguettes retiennent l'eau dans chaque parcelle.",
        "La route et les marchés s'installent dans la plaine.",
    ],
    lexique=[("Habitat", "La manière dont les hommes s'installent et "
              "construisent."),
             ("Bas-fond", "Le terrain bas et humide, cultivé en riz."),
             ("Réseau", "Un ensemble de canaux reliés entre eux."),
             ("Diguette", "Une petite levée de terre autour d'une parcelle."),
             ("Manioc", "Une plante à racine cultivée sur les sols secs.")],
    exercices=[
        ("Complète avec : colline — plaine — canal — diguette",
         ["a) Le village est construit sur la ……",
          "b) Les grandes rizières occupent la ……",
          "c) Le …… principal amène l'eau de la rivière.",
          "d) La …… retient l'eau dans la parcelle."],
         ["a) sur la colline", "b) la plaine", "c) Le canal", "d) La diguette"]),
        ("Réponds par vrai ou faux.",
         ["a) On construit les maisons dans le bas-fond inondé.",
          "b) La plaine permet de tracer des parcelles régulières.",
          "c) La route suit de préférence le terrain plat.",
          "d) Le manioc pousse dans l'eau."],
         ["a) Faux", "b) Vrai", "c) Vrai", "d) Faux"]),
        ("Relie chaque lieu à son usage.",
         ["La colline", "Le bas-fond", "La plaine", "Le bord de route"],
         ["Le marché", "Les grandes rizières", "La rizière inondée",
          "Le village"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Où construit-on les maisons du village ?",
          "b) Pourquoi les grandes rizières sont-elles dans la plaine ?",
          "c) Comment l'eau arrive-t-elle aux parcelles ?",
          "d) Pourquoi la route suit-elle la plaine ?"],
         ["a) On les construit sur la colline.",
          "b) Parce que le terrain plat permet de retenir l'eau.",
          "c) Elle arrive par un réseau de canaux.",
          "d) Parce qu'il est plus facile de construire à plat."]),
    ],
    consigne_ex5="Dessine un paysage utilisé : la colline avec le village et les "
                 "terrasses, le bas-fond avec la rizière et le canal, la route et le "
                 "marché. Légende les six éléments.",
    corrige_ex5="Colline avec maisons et escalier de terrasses, bas-fond en "
                "damier bleu-vert, canal depuis la rivière, route droite, cases du "
                "marché. Légende : colline, terrasse, bas-fond, canal, route, "
                "marché.",
))

# ═══════════════════════════ SÉANCE 46 ═══════════════════════════
SEANCES.append(dict(
    n=46, semaine=15, titre="La mauvaise exploitation du paysage",
    objectif="Décrire la mauvaise exploitation du paysage et ses conséquences : "
             "l'érosion et les feux de brousse.",
    materiel="Image de versant érodé, schéma de ravine, ardoise et craie, cahier.",
    illustration=("scene_erosion.png",
                  "Illustration — Un versant rongé par l'érosion, à "
                  "côté d'une parcelle encore protégée.", 620),
    revision=[("Pourquoi fait-on des terrasses ?",
               "R.A. : Pour retenir l'eau et la terre sur la pente."),
              ("Que conserve-t-on sur les sommets ?", "R.A. : La forêt.")],
    mes=("As-tu déjà vu un endroit où la terre rouge apparaît à "
          "nu ?",
         "R.A. : Oui, au bord du chemin, après les pluies."),
    analyse=[
        ("Que voit-on à la place de la végétation ?",
         "R.A. : La terre rouge à nu."),
        ("Comment appelle-t-on ces grandes entailles dans la pente ?",
         "R.A. : Des ravines, ou des lavaka."),
        ("Qu'est-ce qui a emporté la terre ?", "R.A. : L'eau de pluie, parce "
         "que plus rien ne la retient."),
        ("Que devient la terre emportée ?",
         "R.A. : Elle bouche la rivière et encombre la rizière."),
        ("Que faudrait-il faire ?",
         "R.A. : Replanter des arbres, faire des haies et des terrasses.")],
    synthese="Donc, quand on coupe les arbres et qu'on brûle la brousse, la terre "
             "n'est plus retenue : la pluie la creuse en ravines et l'emporte vers la "
             "rivière. C'est l'érosion.",
    application=("Observe l'image et réponds : a) Que s'est-il passé sur le "
                 "versant ? b) Quelle est la cause ? c) Quelles sont les deux "
                 "conséquences ? d) Cite deux remèdes.",
                 "a) La terre a été creusée et emportée — "
                 "b) La disparition des arbres et des herbes — c) La terre "
                 "perdue et la rivière envasée — d) Reboiser et construire "
                 "des terrasses."),
    evaluation=("1. Réponds par vrai ou faux : a) Les arbres retiennent la "
                "terre. b) Le feu de brousse protège le sol. c) La ravine est "
                "creusée par l'eau de pluie. d) Reboiser est un remède.\n"
                "2. Explique en trois phrases comment se forme une ravine.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n"
                "2. Exemple : « D'abord on coupe les arbres de la pente. Puis "
                "la pluie n'est plus retenue et elle creuse le sol. Enfin la ravine "
                "s'agrandit à chaque saison des pluies. »"),
    lecon_titre="La mauvaise exploitation du paysage",
    sections=[
        ("1. Les feux de brousse",
         "Chaque année, des feux de brousse parcourent les collines. On brûle "
         "l'herbe pour faire repousser un fourrage tendre pour les zébus, ou pour "
         "défricher un champ. Mais le feu détruit aussi les jeunes pousses, les "
         "graines et l'humus du sol. La terre, privée de couverture, se trouve nue "
         "devant les premières pluies."),
        ("2. L'érosion et les lavaka",
         "Sur une pente nue, l'eau de pluie n'est plus ralentie par les herbes ni "
         "retenue par les racines. Elle ruisselle, emporte la terre et creuse des "
         "entailles : ce sont les ravines, appelées lavaka à Madagascar. Elles "
         "peuvent atteindre plusieurs mètres de large et de profondeur, et elles "
         "s'agrandissent à chaque saison des pluies."),
        ("3. Les conséquences",
         "L'érosion a trois conséquences graves. La terre cultivable "
         "disparaît : le champ ne produit plus. La terre emportée comble la "
         "rivière, l'envasement fait déborder l'eau et détruit les "
         "rizières d'aval. Enfin, les routes sont coupées et les sources "
         "tarissent, parce que la forêt qui les alimentait n'est plus là."),
        ("4. Les remèdes",
         "Trois remèdes sont à la portée de tous. Reboiser : planter des "
         "arbres dont les racines tiennent la terre. Faire des haies vives et des "
         "bandes d'herbe en travers de la pente, qui arrêtent l'eau. Entretenir les "
         "terrasses, qui retiennent l'eau et la terre. Un sol protégé produit "
         "pendant des générations."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Le mot malgache lavaka signifie littéralement « le trou ». "
             "Certains lavaka des hautes terres atteignent plus de vingt mètres de "
             "profondeur et continuent de s'agrandir chaque année."),
    resume=[
        "Le feu de brousse met le sol à nu et détruit l'humus.",
        "Sur une pente nue, la pluie creuse des ravines appelées lavaka.",
        "L'érosion fait perdre la terre cultivable.",
        "La terre emportée envasse la rivière et détruit les "
        "rizières d'aval.",
        "Reboiser, faire des haies et entretenir les terrasses sont les remèdes.",
    ],
    lexique=[("Érosion", "L'usure et l'emport de la terre par l'eau et le "
              "vent."),
             ("Ravine", "Une entaille creusée dans la pente par l'eau."),
             ("Lavaka", "Le nom malgache d'une grande ravine."),
             ("Défricher", "Enlever les arbres et les herbes d'un terrain."),
             ("Envasement", "Le comblement d'une rivière par la terre.")],
    exercices=[
        ("Complète avec : érosion — ravine — lavaka — reboiser",
         ["a) L'…… emporte la terre d'une pente nue.",
          "b) Une …… est une entaille creusée par l'eau.",
          "c) On appelle …… une grande ravine à Madagascar.",
          "d) Il faut …… pour tenir la terre."],
         ["a) L'érosion", "b) Une ravine", "c) On appelle lavaka",
          "d) il faut reboiser"]),
        ("Réponds par vrai ou faux.",
         ["a) Les racines des arbres tiennent la terre.",
          "b) Le feu de brousse protège le sol.",
          "c) La ravine s'agrandit à chaque saison des pluies.",
          "d) L'envasement détruit les rizières d'aval."],
         ["a) Vrai", "b) Faux", "c) Vrai", "d) Vrai"]),
        ("Relie chaque cause à sa conséquence.",
         ["Le feu de brousse", "La pluie sur un sol nu", "La terre emportée",
          "Le reboisement"],
         ["Creuse la ravine", "Envasse la rivière", "Retient la terre",
          "Met le sol à nu"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Qu'est-ce que l'érosion ?",
          "b) Qu'est-ce qu'un lavaka ?",
          "c) Cite deux conséquences de l'érosion.",
          "d) Cite deux remèdes contre l'érosion."],
         ["a) C'est l'emport de la terre par l'eau et le vent.",
          "b) C'est une grande ravine creusée dans la pente.",
          "c) La perte de terre cultivable et l'envasement de la rivière.",
          "d) Reboiser et entretenir les terrasses."]),
    ],
    consigne_ex5="Dessine deux versants côte à côte : à gauche un versant "
                 "nu, creusé de ravines ; à droite le même versant protégé "
                 "par des arbres, des haies et des terrasses. Légende les quatre "
                 "mots de la leçon.",
    corrige_ex5="Gauche : pente rouge nue avec deux entailles en V, ruisseau boueux "
                "en bas. Droite : mêmes formes mais arbres, haies et escalier de "
                "terrasses vertes, ruisseau clair. Légende : érosion, ravine, "
                "lavaka, reboiser.",
))

# ═══════════════════════════ SÉANCE 47 ═══════════════════════════
SEANCES.append(dict(
    n=47, semaine=16, titre="Les types de cours d'eau",
    objectif="Décrire les différents types de cours d'eau.",
    materiel="Schéma des trois types de cours d'eau, images de ruisseau et de fleuve, "
             "ardoise et craie, cahier.",
    illustration=("img_s47_a.png",
                  "Illustration — Le ruisseau, la rivière et le fleuve.", 700),
    revision=[("Qu'est-ce qu'une vallée ?",
               "R.A. : Le creux allongé entre deux hauteurs."),
              ("Que coule au fond d'une vallée ?", "R.A. : Une rivière.")],
    mes=("Cite le nom d'un cours d'eau que tu connais près de chez toi.",
         "R.A. : On répond selon la région de l'élève."),
    analyse=[
        ("Quel est le plus petit cours d'eau ?", "R.A. : Le ruisseau."),
        ("Quel est le plus grand ?", "R.A. : Le fleuve."),
        ("Où se jette un fleuve ?", "R.A. : Dans la mer."),
        ("Où se jette une rivière ?", "R.A. : Dans un fleuve ou dans la mer."),
        ("Cite les trois critères qui les distinguent.",
         "R.A. : La largeur, la longueur et le débit.")],
    synthese="Donc, on distingue trois types de cours d'eau : le ruisseau, petit et "
             "souvent à sec ; la rivière, moyenne ; le fleuve, grand, qui se "
             "jette dans la mer.",
    application=("Classe ces cours d'eau du plus petit au plus grand : un fleuve, un "
                 "ruisseau, une rivière. Puis réponds : lequel se jette dans la mer ?",
                 "Le ruisseau, puis la rivière, puis le fleuve. Le fleuve se jette "
                 "dans la mer."),
    evaluation=("1. Réponds par vrai ou faux : a) Le ruisseau est le plus "
                "grand. b) Le fleuve se jette dans la mer. c) La rivière peut "
                "se jeter dans un fleuve. d) Un ruisseau peut être à sec en "
                "saison sèche.\n2. Cite les trois types de cours d'eau.",
                "1. a) Faux — b) Vrai — c) Vrai — d) Vrai.\n"
                "2. Le ruisseau, la rivière et le fleuve."),
    lecon_titre="Les types de cours d'eau",
    sections=[
        ("1. Le ruisseau",
         "Le ruisseau est le plus petit des cours d'eau. Il est étroit et peu "
         "profond : on peut souvent le franchir d'un pas. Il coule sur une courte "
         "distance, depuis une source ou une mare. En saison sèche, il peut "
         "même disparaître complètement, car il dépend directement des "
         "pluies."),
        ("2. La rivière",
         "La rivière est plus large et plus longue que le ruisseau. Elle reçoit "
         "l'eau de plusieurs ruisseaux, ce qui la rend plus régulière : elle coule "
         "en général toute l'année. Elle se jette dans un fleuve, dans un lac "
         "ou parfois directement dans la mer. Ses crues peuvent être fortes en "
         "saison des pluies."),
        ("3. Le fleuve",
         "Le fleuve est le plus grand des cours d'eau. Il est large, profond et long : "
         "il traverse plusieurs régions avant d'atteindre la mer. Il reçoit "
         "l'eau de nombreuses rivières, ce qui lui donne un débit important et "
         "régulier. Les grands fleuves de Madagascar sont le Betsiboka, le Mangoky et "
         "l'Onilahy."),
        ("4. Comment les distinguer ?",
         "Trois critères permettent de les reconnaître. La largeur : le lit du "
         "fleuve est bien plus large. La longueur : le fleuve parcourt des centaines de "
         "kilomètres. Le débit : c'est la quantité d'eau qui passe à un "
         "endroit donné ; le fleuve en transporte beaucoup plus. Attention "
         "pourtant : le nom seul ne suffit pas, il faut observer le cours d'eau."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Le Betsiboka est l'un des plus grands fleuves de Madagascar. Ses eaux "
             "sont chargées de terre rouge arrachée aux collines : on le "
             "reconnaît de loin à sa couleur, et même depuis l'espace."),
    resume=[
        "Le ruisseau est petit, court et parfois à sec.",
        "La rivière est moyenne et coule en général toute l'année.",
        "Le fleuve est large, long et se jette dans la mer.",
        "On les distingue par la largeur, la longueur et le débit.",
        "Le débit est la quantité d'eau qui passe en un point.",
    ],
    lexique=[("Cours d'eau", "De l'eau qui coule dans un lit, vers la mer."),
             ("Ruisseau", "Un tout petit cours d'eau, parfois temporaire."),
             ("Rivière", "Un cours d'eau moyen qui rejoint un fleuve ou la mer."),
             ("Fleuve", "Un grand cours d'eau qui se jette dans la mer."),
             ("Débit", "La quantité d'eau qui passe en un point, par "
              "seconde.")],
    exercices=[
        ("Complète avec : ruisseau — rivière — fleuve — débit",
         ["a) Le …… est le plus petit cours d'eau.",
          "b) Le …… se jette dans la mer.",
          "c) La …… rejoint souvent un fleuve.",
          "d) Le …… est la quantité d'eau qui passe."],
         ["a) Le ruisseau", "b) Le fleuve", "c) La rivière", "d) Le débit"]),
        ("Réponds par vrai ou faux.",
         ["a) Un ruisseau peut être à sec en saison sèche.",
          "b) Une rivière ne peut pas se jeter dans la mer.",
          "c) Le fleuve est le plus long des cours d'eau.",
          "d) Le débit mesure la profondeur de l'eau."],
         ["a) Vrai", "b) Faux", "c) Vrai", "d) Faux"]),
        ("Relie chaque cours d'eau à sa définition.",
         ["Le ruisseau", "La rivière", "Le fleuve", "Le débit"],
         ["La quantité d'eau", "Petit et temporaire", "Grand, se jette dans la mer",
          "Moyen, rejoint un fleuve"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Cite les trois types de cours d'eau.",
          "b) Lequel est le plus grand ?",
          "c) Cite les trois critères qui les distinguent.",
          "d) Qu'est-ce que le débit ?"],
         ["a) Le ruisseau, la rivière et le fleuve.",
          "b) C'est le fleuve.",
          "c) La largeur, la longueur et le débit.",
          "d) C'est la quantité d'eau qui passe en un point."]),
    ],
    consigne_ex5="Dessine les trois types de cours d'eau côte à côte, du plus "
                 "étroit au plus large, et légende-les avec les trois noms.",
    corrige_ex5="Trois bandes bleues parallèles de largeur croissante : un trait fin, "
                "une bande moyenne, une large bande. Légende : ruisseau, "
                "rivière, fleuve.",
))

# ═══════════════════════════ SÉANCE 48 ═══════════════════════════
SEANCES.append(dict(
    n=48, semaine=16, titre="La source et l'embouchure",
    objectif="Reconnaître la source et l'embouchure d'un cours d'eau.",
    materiel="Schéma de la source à l'embouchure, carte de Madagascar, ardoise et "
             "craie, cahier.",
    illustration=("img_s48_a.png",
                  "Illustration — De la source dans la montagne jusqu'à "
                  "l'embouchure dans la mer.", 700),
    revision=[("Cite les trois types de cours d'eau.",
               "R.A. : Le ruisseau, la rivière et le fleuve."),
              ("Où se jette un fleuve ?", "R.A. : Dans la mer.")],
    mes=("D'où vient l'eau d'une rivière ?",
         "R.A. : D'une source, dans la montagne ou dans la forêt."),
    analyse=[
        ("Où naît le cours d'eau ?", "R.A. : À la source."),
        ("Où la source se trouve-t-elle ?",
         "R.A. : Dans la montagne, souvent dans une forêt."),
        ("Comment s'appelle la fin du cours d'eau ?", "R.A. : L'embouchure."),
        ("Où se trouve l'embouchure ?", "R.A. : Là où le fleuve rejoint "
         "la mer."),
        ("L'eau peut-elle remonter vers la source ?",
         "R.A. : Non, elle descend toujours vers la mer.")],
    synthese="Donc, un cours d'eau naît à une source, dans les hauteurs, et se "
             "termine à son embouchure, là où il rejoint la mer ou un lac. "
             "Entre les deux, il suit une pente qui ne remonte jamais.",
    application=("Observe le schéma et réponds : a) Où est la source ? b) Où "
                 "est l'embouchure ? c) Dans quel sens l'eau coule-t-elle ? d) Que "
                 "devient le cours d'eau en avançant ?",
                 "a) Dans la montagne — b) Au bord de la mer — c) De la "
                 "montagne vers la mer — d) Il devient de plus en plus large."),
    evaluation=("1. Réponds par vrai ou faux : a) La source est dans les "
                "hauteurs. b) L'embouchure est le point de départ. c) L'eau "
                "descend toujours. d) Le cours d'eau s'élargit vers l'aval.\n"
                "2. Décris le trajet d'un fleuve en trois phrases.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n"
                "2. Exemple : « Le fleuve naît à une source dans la "
                "montagne. Il descend la pente en s'élargissant. Il se jette dans "
                "la mer à son embouchure. »"),
    lecon_titre="La source et l'embouchure",
    sections=[
        ("1. La source",
         "La source est l'endroit où l'eau sort de terre et donne naissance au "
         "cours d'eau. Elle se trouve presque toujours dans les hauteurs : une "
         "montagne, une colline, un versant boisé. L'eau vient de la pluie qui a "
         "traversé le sol et qui ressort à la faveur d'une roche imperméable. "
         "Une source protégée par la forêt coule toute l'année."),
        ("2. Le cours",
         "Entre la source et la mer, l'eau suit le cours du fleuve. Elle descend la "
         "pente, d'abord vite et dans un lit étroit, puis plus lentement dans un lit "
         "large. Le cours n'est jamais droit : il serpente, contourne les roches et "
         "creuse la vallée. En avançant, il reçoit l'eau d'autres ruisseaux et "
         "grossit."),
        ("3. L'embouchure",
         "L'embouchure est l'endroit où le cours d'eau rejoint la mer, un lac ou "
         "un autre cours d'eau plus grand. C'est la fin du voyage. L'eau douce y "
         "rencontre l'eau salée. Souvent, le fleuve dépose là toute la terre "
         "qu'il a transportée : il forme alors un delta, un ensemble de bras "
         "entourant des îles de vase."),
        ("4. L'eau ne remonte jamais",
         "Retiens bien cette règle : l'eau descend toujours, de la source vers "
         "l'embouchure. Elle ne remonte jamais vers la montagne. C'est pour cela que "
         "les villages situés en amont doivent protéger la rivière : ce "
         "qu'ils y jettent ou ce qu'ils laissent emporter par l'érosion se "
         "retrouve chez les villages d'aval."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Certaines sources de Madagascar sont chaudes : l'eau sort du sol à "
             "plus de quarante degrés, après avoir circulé profondément "
             "sous terre. On les appelle des sources thermales."),
    resume=[
        "La source est l'endroit où le cours d'eau naît.",
        "Elle se trouve dans les hauteurs, souvent sous une forêt.",
        "L'embouchure est l'endroit où il rejoint la mer.",
        "Entre les deux, le cours descend et s'élargit.",
        "L'eau ne remonte jamais vers la source.",
    ],
    lexique=[("Source", "L'endroit où l'eau sort de terre et donne naissance "
              "à un cours d'eau."),
             ("Embouchure", "L'endroit où un cours d'eau rejoint la mer."),
             ("Delta", "Le dépôt de terre en bras multiples, à "
              "l'embouchure."),
             ("Lit", "Le fond et les bords du cours d'eau."),
             ("Serpenter", "Faire des courbes, comme un serpent.")],
    exercices=[
        ("Complète avec : source — embouchure — delta — amont",
         ["a) La …… est le point de naissance du cours d'eau.",
          "b) L'…… est son point d'arrivée dans la mer.",
          "c) Le …… est formé par la terre déposée.",
          "d) La source se trouve toujours en ……"],
         ["a) La source", "b) L'embouchure", "c) Le delta", "d) en amont"]),
        ("Réponds par vrai ou faux.",
         ["a) La source se trouve souvent dans une forêt.",
          "b) L'eau peut remonter vers la montagne.",
          "c) Le cours d'eau s'élargit en s'approchant de la mer.",
          "d) Le delta se forme à la source."],
         ["a) Vrai", "b) Faux", "c) Vrai", "d) Faux"]),
        ("Relie chaque terme à sa définition.",
         ["La source", "L'embouchure", "Le lit", "Le delta"],
         ["L'arrivée dans la mer", "Le fond du cours d'eau",
          "La terre déposée", "La naissance"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Où se trouve la source d'un cours d'eau ?",
          "b) Qu'est-ce que l'embouchure ?",
          "c) Pourquoi le fleuve dépose-t-il de la terre en arrivant ?",
          "d) Que se passe-t-il pour les villages d'aval ?"],
         ["a) Elle se trouve dans les hauteurs.",
          "b) C'est l'endroit où le cours d'eau rejoint la mer.",
          "c) Parce qu'en arrivant, l'eau ralentit et laisse tomber sa charge.",
          "d) Ils reçoivent tout ce que l'amont a laissé partir."]),
    ],
    consigne_ex5="Dessine le trajet complet d'un fleuve : la montagne avec la source, le "
                 "cours qui s'élargit, l'embouchure et la mer. Légende les "
                 "quatre mots de la leçon.",
    corrige_ex5="Triangle de montagne à gauche avec un point bleu (la source), bande "
                "bleue qui s'élargit vers la droite, mer bleue à droite. "
                "Légende : source, cours, embouchure, mer.",
))

# ═══════════════════════════ SÉANCE 49 ═══════════════════════════
SEANCES.append(dict(
    n=49, semaine=16, titre="L'amont, l'aval et les rives",
    objectif="Reconnaître l'amont, l'aval, la rive gauche et la rive droite.",
    materiel="Schéma du sens du courant, carte de Madagascar, ardoise et craie, cahier.",
    illustration=("img_s49_a.png",
                  "Illustration — Le sens du courant, l'amont, l'aval et les "
                  "deux rives.", 700),
    revision=[("Où se trouve la source ?", "R.A. : Dans les hauteurs."),
              ("Qu'est-ce que l'embouchure ?",
               "R.A. : L'endroit où le cours d'eau rejoint la mer.")],
    mes=("Quand tu es debout dans la rivière et que l'eau arrive dans ton dos, "
          "vers quoi regardes-tu ?",
         "R.A. : Vers l'aval."),
    analyse=[
        ("Qu'appelle-t-on l'amont ?", "R.A. : Le côté de la source."),
        ("Qu'appelle-t-on l'aval ?", "R.A. : Le côté de "
         "l'embouchure."),
        ("Comment savoir de quel côté est la rive gauche ?",
         "R.A. : On se place dans le sens du courant, la rive gauche est à "
         "notre gauche."),
        ("Et la rive droite ?", "R.A. : Elle est à notre droite, dans le "
         "sens du courant."),
        ("Pourquoi cette règle est-elle importante ?",
         "R.A. : Pour que tout le monde comprenne la même chose.")],
    synthese="Donc, l'amont est du côté de la source et l'aval du côté de "
             "l'embouchure. Pour nommer les rives, on se place debout dans le lit, en "
             "regardant vers l'aval : la rive gauche est à gauche, la rive droite "
             "à droite.",
    application=("Sur le schéma, place les mots amont, aval, rive gauche et rive "
                 "droite, puis réponds : dans quelle direction faudrait-il marcher "
                 "pour remonter vers la source ?",
                 "Il faudrait marcher vers l'amont, c'est-à-dire "
                 "à contre-courant."),
    evaluation=("1. Réponds par vrai ou faux : a) L'amont est du côté "
                "de la source. b) L'aval est du côté de la montagne. c) On "
                "nomme les rives en regardant vers l'aval. d) La rive droite est "
                "à droite dans le sens du courant.\n"
                "2. Explique en deux phrases comment nommer les rives.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n"
                "2. Exemple : « On se place dans le lit en regardant vers "
                "l'aval. La rive à notre main gauche est la rive gauche. »"),
    lecon_titre="L'amont, l'aval et les rives",
    sections=[
        ("1. L'amont",
         "L'amont désigne le côté de la source, c'est-à-dire le "
         "côté d'où vient l'eau. Quand on remonte le cours d'eau, on va vers "
         "l'amont, à contre-courant. L'eau y est plus froide, plus rapide et plus "
         "claire, parce que la pente est plus forte et que le lit est encore étroit."),
        ("2. L'aval",
         "L'aval désigne le côté de l'embouchure, c'est-à-dire le "
         "côté vers lequel l'eau s'en va. Quand on descend le cours d'eau, on "
         "va vers l'aval, dans le sens du courant. L'eau y est plus lente, plus large "
         "et souvent plus trouble, parce qu'elle transporte la terre arrachée en "
         "amont."),
        ("3. Les rives",
         "La rive est le bord du cours d'eau. Mais attention : pour dire rive gauche ou "
         "rive droite, il faut une règle. On se place debout dans le lit, en "
         "regardant vers l'aval, c'est-à-dire dans le sens où l'eau "
         "s'écoule. La rive qui se trouve à notre main gauche est la rive "
         "gauche ; celle qui se trouve à notre main droite est la rive droite."),
        ("4. Pourquoi cette convention ?",
         "Cette règle est une convention : elle est adoptée par tous pour éviter "
         "les malentendus. Sans elle, deux personnes placées face à face sur "
         "les deux bords désigneraient la même rive par deux noms différents. "
         "Avec elle, un géographe, un paysan et un ingénieur parlent de la même "
         "chose."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Cette règle des rives sert aussi sur les routes et sur les voies "
             "ferrées : on compte les côtés dans le sens de la marche, pour que "
             "tout le monde s'y retrouve."),
    resume=[
        "L'amont est le côté de la source, d'où vient l'eau.",
        "L'aval est le côté de l'embouchure, où va l'eau.",
        "Remonter le cours, c'est aller vers l'amont.",
        "On nomme les rives en se plaçant dans le sens du courant.",
        "Rive gauche à main gauche, rive droite à main droite.",
    ],
    lexique=[("Amont", "Le côté de la source, d'où vient l'eau."),
             ("Aval", "Le côté de l'embouchure, où va l'eau."),
             ("Rive", "Le bord d'un cours d'eau."),
             ("Contre-courant", "Dans le sens contraire à celui de l'eau."),
             ("Convention", "Une règle adoptée par tous pour se "
              "comprendre.")],
    exercices=[
        ("Complète avec : amont — aval — gauche — droite",
         ["a) L'…… est le côté de la source.",
          "b) L'…… est le côté de la mer.",
          "c) La rive …… est à main gauche dans le sens du courant.",
          "d) La rive …… est à main droite."],
         ["a) L'amont", "b) L'aval", "c) La rive gauche", "d) La rive droite"]),
        ("Réponds par vrai ou faux.",
         ["a) En allant vers la source, on va vers l'amont.",
          "b) L'eau est plus rapide à l'aval.",
          "c) On nomme les rives en regardant vers l'aval.",
          "d) La rive gauche change selon l'endroit où l'on se place."],
         ["a) Vrai", "b) Faux", "c) Vrai", "d) Faux"]),
        ("Relie chaque terme à sa définition.",
         ["L'amont", "L'aval", "La rive", "Le courant"],
         ["Le bord du cours d'eau", "Le sens où va l'eau", "Vers la mer",
          "Vers la source"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Qu'appelle-t-on l'amont ?",
          "b) Qu'appelle-t-on l'aval ?",
          "c) Comment nomme-t-on les deux rives ?",
          "d) Pourquoi cette règle est-elle utile ?"],
         ["a) C'est le côté de la source, d'où vient l'eau.",
          "b) C'est le côté de l'embouchure, où va l'eau.",
          "c) On se place dans le sens du courant et l'on regarde ses mains.",
          "d) Pour que tout le monde désigne la même chose."]),
    ],
    consigne_ex5="Dessine une rivière qui serpente du haut vers le bas de la feuille. "
                 "Place la flèche du courant, puis écris amont, aval, rive gauche "
                 "et rive droite aux bons endroits.",
    corrige_ex5="Bande bleue sinueuse descendante, flèche vers le bas, « "
                "amont » en haut, « aval » en bas, « rive "
                "gauche » à gauche de la flèche et « rive droite "
                "» à droite.",
))

# ═══════════════════════════ SÉANCE 50 ═══════════════════════════
SEANCES.append(dict(
    n=50, semaine=17, titre="Les affluents et le réseau hydrographique",
    objectif="Reconnaître les affluents et le réseau hydrographique.",
    materiel="Schéma du réseau hydrographique, carte de Madagascar, ardoise et "
             "craie, cahier.",
    illustration=("img_s50_a.png",
                  "Illustration — Le fleuve, ses affluents, les confluents et le "
                  "bassin versant.", 700),
    revision=[("Qu'appelle-t-on l'aval ?",
               "R.A. : Le côté de l'embouchure, où va l'eau."),
              ("Comment nomme-t-on les rives ?",
               "R.A. : En se plaçant dans le sens du courant.")],
    mes=("Que se passe-t-il quand une petite rivière rejoint un grand fleuve ?",
         "R.A. : Elles mêlent leurs eaux ; la petite devient un affluent."),
    analyse=[
        ("Qu'est-ce qu'un affluent ?",
         "R.A. : Un cours d'eau qui se jette dans un autre, plus grand."),
        ("Qu'est-ce qu'un confluent ?",
         "R.A. : L'endroit où les deux cours d'eau se rejoignent."),
        ("Qu'est-ce que le réseau hydrographique ?",
         "R.A. : L'ensemble formé par le fleuve et tous ses affluents."),
        ("Qu'est-ce que le bassin versant ?",
         "R.A. : Toute la surface dont les eaux vont vers le même fleuve."),
        ("Lequel reçoit l'eau : le fleuve ou l'affluent ?",
         "R.A. : Le fleuve reçoit l'eau de ses affluents.")],
    synthese="Donc, un fleuve reçoit l'eau de nombreux affluents. Chaque point de "
             "rencontre est un confluent. L'ensemble forme un réseau "
             "hydrographique, qui draine un bassin versant.",
    application=("Sur le schéma, réponds : a) Cite deux affluents. b) Où "
                 "sont les confluents ? c) Quel est le cours principal ? d) Que "
                 "délimite le trait gris ?",
                 "a) Deux des quatre rivières dessinées — b) Aux points "
                 "rouges où elles rejoignent le fleuve — c) Le trait bleu "
                 "vertical — d) Le bassin versant."),
    evaluation=("1. Réponds par vrai ou faux : a) Un affluent se jette dans un "
                "cours plus grand. b) Le confluent est le point de rencontre. c) Le "
                "bassin versant ne reçoit aucune eau. d) Le réseau "
                "ressemble aux branches d'un arbre.\n"
                "2. Décris un réseau hydrographique en deux phrases.",
                "1. a) Vrai — b) Vrai — c) Faux — d) Vrai.\n"
                "2. Exemple : « Un réseau hydrographique réunit un "
                "fleuve et tous ses affluents. Il a la forme d'un arbre couché "
                "sur le sol. »"),
    lecon_titre="Les affluents et le réseau hydrographique",
    sections=[
        ("1. Un affluent",
         "Un affluent est un cours d'eau qui se jette dans un autre cours d'eau plus "
         "important. La petite rivière qui rejoint le fleuve est donc un affluent de "
         "ce fleuve. Attention au sens : le terme désigne toujours celui qui "
         "arrive, jamais celui qui reçoit. Un même cours d'eau peut être "
         "affluent d'un fleuve et recevoir lui-même des ruisseaux."),
        ("2. Le confluent",
         "Le confluent est l'endroit précis où les deux cours d'eau se "
         "rejoignent et mêlent leurs eaux. On le reconnaît souvent à un "
         "élargissement du lit et à un dépôt de sable ou de gravier. Les "
         "villes s'installent volontiers aux confluents, parce que l'eau y est abondante "
         "et le terrain plat."),
        ("3. Le réseau hydrographique",
         "L'ensemble formé par le fleuve, ses affluents et les affluents de ses "
         "affluents s'appelle le réseau hydrographique. Il a la forme d'un arbre "
         "couché sur le sol : le fleuve est le tronc, les affluents sont les branches "
         "et les ruisseaux sont les rameaux. Plus le réseau est dense, plus la "
         "région est arrosée."),
        ("4. Le bassin versant",
         "Le bassin versant est toute la surface du sol dont les eaux de pluie "
         "s'écoulent vers le même fleuve. Ses limites sont les lignes de "
         "crête : d'un côté, l'eau part vers un fleuve ; de l'autre, elle "
         "part vers le voisin. Connaître le bassin versant permet de prévoir les "
         "crues et de gérer l'eau ensemble."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Les bassins versants ne tiennent pas compte des frontières : plusieurs "
             "pays se partagent celui du Congo ou du Nil. C'est pour cela que la "
             "gestion de l'eau se discute entre voisins."),
    resume=[
        "Un affluent est un cours d'eau qui se jette dans un autre, plus grand.",
        "Le confluent est le point où les deux eaux se rejoignent.",
        "Le réseau hydrographique réunit le fleuve et tous ses affluents.",
        "Il a la forme d'un arbre couché sur le sol.",
        "Le bassin versant est la surface drainée par un même fleuve.",
    ],
    lexique=[("Affluent", "Un cours d'eau qui se jette dans un autre, plus "
              "important."),
             ("Confluent", "Le point de rencontre de deux cours d'eau."),
             ("Réseau hydrographique", "L'ensemble d'un fleuve et de tous ses "
              "affluents."),
             ("Bassin versant", "La surface dont les eaux vont vers le même "
              "fleuve."),
             ("Ligne de crête", "La ligne qui sépare deux bassins "
              "versants.")],
    exercices=[
        ("Complète avec : affluent — confluent — réseau — bassin",
         ["a) Un …… se jette dans un cours d'eau plus grand.",
          "b) Le …… est le point de rencontre des deux eaux.",
          "c) Le …… hydrographique réunit fleuve et affluents.",
          "d) Le …… versant est la surface drainée."],
         ["a) Un affluent", "b) Le confluent", "c) Le réseau", "d) Le bassin"]),
        ("Réponds par vrai ou faux.",
         ["a) Le fleuve est l'affluent de la rivière.",
          "b) Le réseau a la forme d'un arbre.",
          "c) Le bassin versant est limité par des lignes de crête.",
          "d) Un affluent ne peut pas recevoir de ruisseau."],
         ["a) Faux", "b) Vrai", "c) Vrai", "d) Faux"]),
        ("Relie chaque terme à sa définition.",
         ["L'affluent", "Le confluent", "Le réseau", "Le bassin"],
         ["La surface drainée", "L'ensemble du fleuve et de ses affluents",
          "Celui qui arrive", "Le point de rencontre"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Qu'est-ce qu'un affluent ?",
          "b) Qu'est-ce qu'un confluent ?",
          "c) À quoi ressemble un réseau hydrographique ?",
          "d) Qu'est-ce qu'un bassin versant ?"],
         ["a) C'est un cours d'eau qui se jette dans un autre plus grand.",
          "b) C'est le point où les deux eaux se rejoignent.",
          "c) Il ressemble à un arbre couché sur le sol.",
          "d) C'est la surface dont les eaux vont vers le même fleuve."]),
    ],
    consigne_ex5="Dessine un réseau hydrographique complet : un fleuve, trois "
                 "affluents de chaque côté, une pastille sur les confluents, et "
                 "trace la limite du bassin versant. Légende les quatre mots de la "
                 "leçon.",
    corrige_ex5="Bande bleue verticale centrale, six traits obliques qui la "
                "rejoignent, pastilles rouges aux points de contact, trait gris en "
                "ovale autour de l'ensemble. Légende : affluent, confluent, "
                "réseau, bassin versant.",
))

# ═══════════════════════════ SÉANCE 51 ═══════════════════════════
SEANCES.append(dict(
    n=51, semaine=17, titre="L'utilisation des cours d'eau",
    objectif="Décrire l'utilisation des cours d'eau : irrigation, eau potable, "
             "pêche et transport.",
    materiel="Image des usages de la rivière, carte de Madagascar, ardoise et craie, "
             "cahier.",
    illustration=("scene_cours_eau_usages.png",
                  "Illustration — La rivière : irrigation, eau potable, lessive, "
                  "abreuvement et pêche.", 620),
    revision=[("Qu'est-ce qu'un affluent ?",
               "R.A. : Un cours d'eau qui se jette dans un autre, plus grand."),
              ("Qu'est-ce que le bassin versant ?",
               "R.A. : La surface dont les eaux vont vers le même fleuve.")],
    mes=("Dans ton village, à quoi sert la rivière ?",
         "R.A. : À laver, à cuisiner, à irriguer les rizières et à "
         "pêcher."),
    analyse=[
        ("Cite un usage domestique de l'eau.",
         "R.A. : Boire, cuisiner, se laver, laver le linge."),
        ("Cite un usage agricole.", "R.A. : L'irrigation des rizières."),
        ("Que pêche-t-on dans les cours d'eau ?",
         "R.A. : Des poissons, des crevettes et des anguilles."),
        ("Cite un usage de transport.", "R.A. : La pirogue, sur les fleuves et "
         "les lacs."),
        ("Pourquoi les villages s'installent-ils près de l'eau ?",
         "R.A. : Parce que l'eau est indispensable à la vie et aux cultures.")],
    synthese="Donc, les cours d'eau servent à quatre usages principaux : l'eau "
             "pour la maison, l'irrigation des cultures, la pêche et le transport. "
             "C'est pour cela que les villages s'installent toujours à "
             "proximité.",
    application=("Observe l'image et réponds : a) Cite deux usages visibles. "
                 "b) Lequel sert à nourrir la famille ? c) Lequel sert à "
                 "produire le riz ? d) Cite un usage qui n'est pas sur l'image.",
                 "a) La lessive et l'irrigation — b) La pêche — "
                 "c) L'irrigation — d) La production d'électricité "
                 "par un barrage."),
    evaluation=("1. Réponds par vrai ou faux : a) L'eau de rivière sert à "
                "irriguer les rizières. b) On ne pêche que dans la mer. c) La "
                "pirogue sert au transport. d) Les villages s'installent loin de "
                "l'eau.\n2. Cite quatre usages des cours d'eau.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Faux.\n"
                "2. Boire, irriguer, pêcher et transporter."),
    lecon_titre="L'utilisation des cours d'eau",
    sections=[
        ("1. L'eau pour la maison",
         "Le premier usage de l'eau est domestique : on la boit, on cuisine avec, on "
         "se lave, on lave le linge et la vaisselle. Dans beaucoup de villages, on va "
         "chercher l'eau à la source ou à la rivière avec des bidons. "
         "L'eau doit être propre : une eau sale transmet des maladies comme la "
         "diarrhée et le choléra."),
        ("2. L'irrigation des cultures",
         "Le deuxième usage est agricole. L'eau de la rivière est dérivée "
         "par un canal vers les rizières. C'est l'irrigation. Grâce à elle, on "
         "peut cultiver le riz même pendant la saison sèche, et parfois faire deux "
         "récoltes dans l'année. Une rizière bien irriguée produit deux "
         "à trois fois plus qu'une rizière qui attend la pluie."),
        ("3. La pêche",
         "Le troisième usage est la pêche. On pêche dans les rivières, les "
         "lacs et les étangs : des poissons, des crevettes d'eau douce et des "
         "anguilles. La pêche fournit des protéines à la famille et un revenu "
         "au village. Elle demande de respecter les périodes de reproduction pour ne "
         "pas épuiser la ressource."),
        ("4. Le transport et l'énergie",
         "Le quatrième usage est le transport : la pirogue et la barque circulent "
         "sur les fleuves et les lacs, là où il n'y a pas de route. Enfin, "
         "l'eau qui tombe peut produire de l'électricité : un barrage retient "
         "la rivière et fait tourner des turbines. Madagascar compte plusieurs "
         "barrages hydroélectriques de ce type."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Une rizière irriguée peut donner deux récoltes par an, contre une "
             "seule pour une rizière de pluie. L'irrigation est donc l'un des "
             "leviers les plus efficaces contre la faim."),
    resume=[
        "Les cours d'eau servent à la maison, aux champs, à la pêche "
        "et au transport.",
        "L'eau domestique doit être propre pour éviter les maladies.",
        "L'irrigation permet de cultiver le riz en saison sèche.",
        "La pêche fournit des protéines et un revenu.",
        "Un barrage retient l'eau pour produire de l'électricité.",
    ],
    lexique=[("Usage", "L'utilisation que l'on fait de quelque chose."),
             ("Domestique", "Qui concerne la maison et la famille."),
             ("Irrigation", "L'action d'amener l'eau aux cultures."),
             ("Dériver", "Détourner une partie de l'eau d'un cours d'eau."),
             ("Hydroélectrique", "Qui produit de l'électricité grâce à "
              "l'eau.")],
    exercices=[
        ("Complète avec : irrigation — pêche — domestique — barrage",
         ["a) L'usage …… concerne la maison et la famille.",
          "b) L'…… amène l'eau aux rizières.",
          "c) La …… fournit des poissons.",
          "d) Un …… produit de l'électricité."],
         ["a) L'usage domestique", "b) L'irrigation", "c) La pêche",
          "d) Un barrage"]),
        ("Réponds par vrai ou faux.",
         ["a) Une eau sale peut transmettre des maladies.",
          "b) L'irrigation permet deux récoltes par an.",
          "c) On ne peut pas pêcher en eau douce.",
          "d) La pirogue sert à transporter des personnes et des biens."],
         ["a) Vrai", "b) Vrai", "c) Faux", "d) Vrai"]),
        ("Relie chaque usage à ce qu'il apporte.",
         ["L'eau domestique", "L'irrigation", "La pêche", "Le barrage"],
         ["Deux récoltes par an", "Des protéines", "La santé de la famille",
          "De l'électricité"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Cite les quatre usages des cours d'eau.",
          "b) Pourquoi l'eau de boisson doit-elle être propre ?",
          "c) Que permet l'irrigation ?",
          "d) Cite un moyen de transport fluvial."],
         ["a) La maison, l'irrigation, la pêche et le transport.",
          "b) Parce qu'une eau sale transmet des maladies.",
          "c) Elle permet de cultiver en saison sèche et de faire deux "
          "récoltes.",
          "d) La pirogue."]),
    ],
    consigne_ex5="Dessine une rivière utilisée : le canal vers les rizières, "
                 "le point d'eau du village, la lessive sur la berge, un pêcheur en "
                 "pirogue. Légende les quatre usages.",
    corrige_ex5="Bande bleue traversante, canal oblique vers des rectangles verts, "
                "bidons sur la berge, silhouette en pirogue. Légende : eau "
                "domestique, irrigation, lessive, pêche.",
))

# ═══════════════════════════ SÉANCE 52 ═══════════════════════════
SEANCES.append(dict(
    n=52, semaine=17, titre="Bien gérer l'eau",
    objectif="Être conscient de la bonne gestion de l'eau.",
    materiel="Image de la gestion de l'eau, schéma de captage, ardoise et craie, "
             "cahier.",
    illustration=("scene_gestion_eau.png",
                  "Illustration — La source protégée, le puits, le canal "
                  "avec sa vanne et les plantations.", 620),
    revision=[("Cite quatre usages des cours d'eau.",
               "R.A. : La maison, l'irrigation, la pêche et le transport."),
              ("Pourquoi l'eau de boisson doit-elle être propre ?",
               "R.A. : Parce qu'une eau sale transmet des maladies.")],
    mes=("Chez toi, que fait-on pour ne pas gaspiller l'eau ?",
         "R.A. : On ferme le robinet, on couvre la réserve, on répare les "
         "fuites."),
    analyse=[
        ("Pourquoi protéger la source ?",
         "R.A. : Pour que l'eau reste propre et coule toute l'année."),
        ("Que fait la forêt autour d'une source ?",
         "R.A. : Elle retient l'eau et la filtre."),
        ("Pourquoi ne pas jeter les déchets dans la rivière ?",
         "R.A. : Parce que l'eau sale rend malades ceux qui la boivent en "
         "aval."),
        ("Que fait une vanne sur un canal ?",
         "R.A. : Elle règle la quantité d'eau envoyée aux parcelles."),
        ("Cite un geste contre le gaspillage.",
         "R.A. : Fermer le robinet et couvrir les réserves.")],
    synthese="Donc, bien gérer l'eau, c'est protéger les sources, ne pas polluer, "
             "ne pas gaspiller et partager la ressource entre tous les usagers, de "
             "l'amont vers l'aval.",
    application=("Observe l'image et réponds : a) Comment la source est-elle "
                 "protégée ? b) À quoi sert le puits ? c) Que fait la "
                 "vanne du canal ? d) Pourquoi replante-t-on des arbres ?",
                 "a) Par un captage en dur, une clôture et des arbres autour "
                 "— b) À donner une eau propre au village — c) Elle "
                 "règle le débit vers les parcelles — d) Pour retenir "
                 "l'eau et la terre de la pente."),
    evaluation=("1. Réponds par vrai ou faux : a) Une source protégée "
                "coule toute l'année. b) Jeter des déchets dans la rivière "
                "ne gêne personne. c) La vanne règle le débit. d) "
                "Reboiser aide à garder l'eau.\n"
                "2. Cite trois gestes de la bonne gestion de l'eau.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n"
                "2. Exemple : protéger la source, ne pas polluer la rivière, "
                "fermer le robinet."),
    lecon_titre="Bien gérer l'eau",
    sections=[
        ("1. Une ressource à partager",
         "L'eau douce est une ressource précieuse et limitée. Un village, "
         "une rizière, un élevage et une usine ne peuvent pas tout consommer : il "
         "faut partager. Celui qui est en amont a une responsabilité particulière, "
         "car ce qu'il prélève ou ce qu'il pollue se répercute sur tous ceux "
         "qui vivent en aval."),
        ("2. Protéger la source",
         "La première action est de protéger la source. On construit un "
         "captage en dur, avec une dalle et une rigole d'évacuation, pour que l'eau "
         "ne soit pas souillée par la boue. On plante des arbres autour et l'on "
         "installe une clôture pour éloigner les zébus. Une source bien protégée "
         "donne une eau claire, été comme hiver."),
        ("3. Ne pas polluer, ne pas gaspiller",
         "Ne jamais jeter d'ordures, de lessive ni de produits chimiques dans la "
         "rivière : ils empoisonnent l'eau des villages d'aval et tuent les "
         "poissons. Ne pas gaspiller non plus : un robinet qui goutte perd des "
         "dizaines de litres par jour. Couvrir ses réserves d'eau évite "
         "l'évaporation et la prolifération des moustiques."),
        ("4. Les gestes de la bonne gestion",
         "Quatre gestes simples résument la bonne gestion : capter et protéger, "
         "stocker proprement, économiser au quotidien, et reboiser les versants. "
         "Reboiser est le geste le plus durable : les racines retiennent l'eau dans "
         "le sol, la rendent aux sources petit à petit, et empêchent la terre "
         "de partir."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Un robinet qui goutte une fois par seconde gaspille environ trente "
             "litres d'eau par jour : de quoi remplir soixante bouteilles d'un litre "
             "et demi."),
    resume=[
        "L'eau douce est une ressource précieuse et limitée.",
        "On protège la source par un captage, des arbres et une "
        "clôture.",
        "On ne jette ni ordures ni produits chimiques dans la rivière.",
        "On ne gaspille pas : on ferme le robinet et l'on couvre les "
        "réserves.",
        "Reboiser retient l'eau dans le sol et alimente les sources.",
    ],
    lexique=[("Gérer", "Utiliser une ressource avec soin, sans la "
              "gaspiller."),
             ("Captage", "L'aménagement qui recueille l'eau d'une source."),
             ("Polluer", "Rendre l'eau ou l'air sales et dangereux."),
             ("Évaporation", "La transformation de l'eau en vapeur, sous "
              "l'effet du soleil."),
             ("Vanne", "Un dispositif qui ouvre ou ferme le passage de "
              "l'eau.")],
    exercices=[
        ("Complète avec : source — captage — vanne — reboiser",
         ["a) On protège la …… pour garder une eau propre.",
          "b) Un …… en dur empêche la boue de souiller l'eau.",
          "c) La …… règle le débit du canal.",
          "d) Il faut …… les versants pour retenir l'eau."],
         ["a) la source", "b) Un captage", "c) La vanne", "d) il faut reboiser"]),
        ("Réponds par vrai ou faux.",
         ["a) Jeter des ordures dans la rivière pollue l'eau d'aval.",
          "b) Couvrir une réserve d'eau ne sert à rien.",
          "c) Les arbres aident l'eau à entrer dans le sol.",
          "d) L'eau douce est une ressource illimitée."],
         ["a) Vrai", "b) Faux", "c) Vrai", "d) Faux"]),
        ("Relie chaque action à son effet.",
         ["Protéger la source", "Reboiser le versant", "Fermer la vanne",
          "Couvrir la réserve"],
         ["Évite l'évaporation", "Donne une eau claire toute l'année",
          "Retient l'eau dans le sol", "Économise l'eau du canal"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Pourquoi faut-il protéger une source ?",
          "b) Cite deux façons de polluer une rivière.",
          "c) Cite deux gestes contre le gaspillage.",
          "d) Pourquoi reboiser aide-t-il à garder l'eau ?"],
         ["a) Pour que l'eau reste propre et coule toute l'année.",
          "b) Y jeter des ordures et y laver avec des produits chimiques.",
          "c) Fermer le robinet et couvrir les réserves.",
          "d) Parce que les racines retiennent l'eau et ralentissent le "
          "ruissellement."]),
    ],
    consigne_ex5="Dessine quatre vignettes qui montrent la bonne gestion de l'eau : la "
                 "source protégée, le puits du village, la vanne du canal et les "
                 "jeunes plants sur le versant. Légende chacune.",
    corrige_ex5="Quatre cases : captage avec arbres, puits avec pompe et dalle, canal "
                "avec vanne, penteplantée en lignes. Légende : captage, puits, "
                "vanne, reboisement.",
))

# ═══════════════════════════ SÉANCE 53 ═══════════════════════════
SEANCES.append(dict(
    n=53, semaine=17, titre="Synthèse : carte, paysage et eau",
    objectif="Réviser l'ensemble du trimestre : la carte, le paysage et les cours "
             "d'eau.",
    materiel="Carte de Madagascar, schéma des formes du relief, schéma du réseau "
             "hydrographique, ardoise et craie, cahier.",
    illustration=("img_s48_a.png",
                  "Illustration — De la source dans la montagne jusqu'à la "
                  "mer : le fil conducteur du trimestre.", 700),
    revision=[("Cite les quatre éléments obligatoires d'une carte.",
               "R.A. : Le titre, la légende, l'échelle et la flèche du Nord."),
              ("Cite quatre usages des cours d'eau.",
               "R.A. : La maison, l'irrigation, la pêche et le transport.")],
    mes=("Depuis le début du trimestre, quels sont les trois grands thèmes que nous "
          "avons étudiés ?",
         "R.A. : La carte, le paysage et les cours d'eau."),
    analyse=[
        ("Comment oriente-t-on une carte ?",
         "R.A. : Le Nord en haut, le Sud en bas, l'Est à droite et l'Ouest "
         "à gauche."),
        ("Que mesure l'échelle d'une carte ?", "R.A. : Les distances "
         "réelles, en kilomètres."),
        ("Cite les quatre formes du relief.",
         "R.A. : La montagne, la colline, la vallée et la plaine."),
        ("Où naît un cours d'eau et où finit-il ?",
         "R.A. : À une source, dans les hauteurs, et il finit à son "
         "embouchure, dans la mer."),
        ("Quel est le point commun entre ces trois thèmes ?",
         "R.A. : Ils expliquent comment les hommes vivent sur ce territoire.")],
    synthese="Donc, le trimestre se résume en une phrase : l'eau naît dans la "
             "montagne, descend la vallée, arrose la plaine et rejoint la mer, "
             "et les hommes se sont installés tout au long de ce trajet.",
    application=("Révision guidée : a) Oriente la carte de Madagascar. b) Cite "
                 "les quatre formes du relief. c) Nomme la source et l'embouchure. "
                 "d) Cite deux usages de l'eau.",
                 "a) N en haut, S en bas, E à droite, O à gauche — "
                 "b) Montagne, colline, vallée, plaine — c) La source en "
                 "haut, l'embouchure à la mer — d) Irrigation et eau "
                 "potable."),
    evaluation=("1. Réponds par vrai ou faux : a) Une carte se lit avec une "
                "légende. b) La plaine est un relief élevé. c) L'eau "
                "descend toujours vers la mer. d) Reboiser retient la terre.\n"
                "2. Trace de mémoire le trajet complet d'un fleuve, de la source "
                "à la mer.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n"
                "2. Montagne avec la source, bande qui s'élargit, mer à "
                "droite avec l'embouchure."),
    lecon_titre="Synthèse : la carte, le paysage et l'eau",
    sections=[
        ("1. Revoir la carte",
         "Une carte porte toujours quatre éléments : un titre, une légende, "
         "une échelle et la flèche du Nord. Elle s'oriente le Nord en haut, le Sud "
         "en bas, l'Est à droite et l'Ouest à gauche. L'échelle permet "
         "de mesurer les distances : sur la carte de Madagascar, 1 cm vaut 100 km.",
         ("img_s30_a.png", "Figure 1 — La carte de Madagascar et ses quatre "
          "éléments.", 470)),
        ("2. Revoir le paysage",
         "Le relief compte quatre formes, que l'on distingue par la hauteur, la forme "
         "et la pente : la montagne haute et raide, la colline basse et arrondie, la "
         "vallée en creux et la plaine plate. Les hommes cultivent les versants en "
         "terrasses et installent les grandes rizières dans les bas-fonds.",
         ("img_s39_a.png", "Figure 2 — Les formes du relief, vues de profil.",
          700)),
        ("3. Revoir les cours d'eau",
         "Un cours d'eau naît à une source, descend la pente en "
         "s'élargissant et se jette dans la mer à son embouchure. Il reçoit "
         "ses affluents à des confluents et draine un bassin versant. On le "
         "décrit avec quatre mots : amont, aval, rive gauche et rive droite.",
         ("img_s50_a.png", "Figure 3 — Le réseau hydrographique et le bassin "
          "versant.", 700)),
        ("4. Le fil conducteur",
         "Les trois thèmes du trimestre sont liés par un fil unique : l'eau. Elle "
         "naît dans la montagne, creuse la vallée, arrose la plaine et rejoint la "
         "mer. Sur la carte, ce trajet se lit ; dans le paysage, il se voit ; dans le "
         "cours d'eau, il se mesure. Comprendre l'eau, c'est comprendre le territoire "
         "et la vie de ceux qui l'habitent."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Les géographes appellent « géographie physique » "
             "l'étude du relief, de l'eau et du climat, et « géographie "
             "humaine » celle des hommes et de leurs activités. Les deux se "
             "croisent à chaque page de ce manuel."),
    resume=[
        "Une carte porte un titre, une légende, une échelle et la flèche "
        "du Nord.",
        "Le relief compte quatre formes : montagne, colline, vallée et "
        "plaine.",
        "Un cours d'eau va de la source vers l'embouchure, sans jamais "
        "remonter.",
        "L'eau sert à la maison, aux cultures, à la pêche et au "
        "transport.",
        "L'eau est le fil qui relie la carte, le paysage et la vie des hommes.",
    ],
    lexique=[("Synthèse", "Un résumé qui rassemble tout ce que l'on a "
              "appris."),
             ("Territoire", "L'espace occupé et aménagé par une "
              "société."),
             ("Drainer", "Recueillir les eaux d'une surface et les conduire vers "
              "un fleuve."),
             ("Relief", "Les formes du sol."),
             ("Bassin versant", "La surface dont les eaux vont vers le même "
              "fleuve.")],
    exercices=[
        ("Complète avec : Nord — relief — source — embouchure",
         ["a) Sur une carte, le …… est en haut.",
          "b) La montagne, la colline, la vallée et la plaine sont les "
          "quatre formes du ……",
          "c) Un cours d'eau naît à une ……",
          "d) Il se termine à son …… dans la mer."],
         ["a) le Nord", "b) du relief", "c) à une source", "d) à son embouchure"]),
        ("Réponds par vrai ou faux.",
         ["a) 1 cm vaut 100 km sur la carte de Madagascar.",
          "b) La plaine est le relief le plus élevé.",
          "c) L'eau descend toujours vers la mer.",
          "d) Les terrasses retiennent l'eau et la terre."],
         ["a) Vrai", "b) Faux", "c) Vrai", "d) Vrai"]),
        ("Relie chaque thème à ce qu'il permet de faire.",
         ["La carte", "Le paysage", "Le cours d'eau", "L'échelle"],
         ["Se repérer", "Nommer les formes du relief", "Mesurer les distances",
          "Suivre le trajet de l'eau"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Cite les quatre éléments obligatoires d'une carte.",
          "b) Cite les quatre formes du relief.",
          "c) Où naît un cours d'eau et où finit-il ?",
          "d) Quel est le fil conducteur du trimestre ?"],
         ["a) Le titre, la légende, l'échelle et la flèche du Nord.",
          "b) La montagne, la colline, la vallée et la plaine.",
          "c) Il naît à une source et finit à la mer, à son "
          "embouchure.",
          "d) C'est l'eau, de la montagne jusqu'à la mer."]),
    ],
    consigne_ex5="Réalise une affiche de synthèse en trois parties : la carte orientée "
                 "de Madagascar, le profil des quatre reliefs, et le trajet d'un fleuve "
                 "de la source à la mer.",
    corrige_ex5="Trois volets : carte avec N/S/E/O et son échelle ; quatre "
                "profils étiquetés montagne, colline, vallée, plaine ; "
                "fleuve qui naît en montagne, s'élargit et rejoint la mer.",
))

# ═══════════════════════════ SÉANCE 54 ═══════════════════════════
SEANCES.append(dict(
    n=54, semaine=18, titre="Révision de l'unité II",
    objectif="Revoir les notions de l'unité II pour préparer le sujet d'examen.",
    materiel="Carte de Madagascar, schéma des formes du relief, schéma du réseau "
             "hydrographique, ardoise et craie, cahier.",
    illustration=("scene_paysage.png",
                  "Illustration — Le paysage revisité : relief, eau, "
                  "végétation et villages.", 620),
    revision=[("Cite les quatre éléments obligatoires d'une carte.",
               "R.A. : Le titre, la légende, l'échelle et la flèche du Nord."),
              ("Où naît un cours d'eau et où se termine-t-il ?",
               "R.A. : Il naît à une source et se termine à son "
               "embouchure, dans la mer.")],
    mes=("Quels sont les trois grands thèmes étudiés depuis la séance 30 ?",
         "R.A. : La carte, le paysage et les cours d'eau."),
    analyse=[
        ("Comment oriente-t-on une carte ?",
         "R.A. : Le Nord en haut, le Sud en bas, l'Est à droite et l'Ouest "
         "à gauche."),
        ("Que mesure l'échelle de la carte de Madagascar ?",
         "R.A. : 1 cm vaut 100 km."),
        ("Cite les quatre formes du relief et leur différence.",
         "R.A. : La montagne haute et raide, la colline basse et arrondie, la "
         "vallée en creux, la plaine plate."),
        ("Qu'est-ce que l'érosion et comment la combattre ?",
         "R.A. : C'est l'emport de la terre par l'eau ; on la combat en "
         "reboisant et en entretenant les terrasses."),
        ("Cite les quatre mots qui décrivent un cours d'eau.",
         "R.A. : L'amont, l'aval, la rive gauche et la rive droite.")],
    synthese="Donc, revoir l'unité II, c'est retenir trois ensembles : les quatre "
             "éléments de la carte, les quatre formes du relief, et le trajet de "
             "l'eau de la source à la mer.",
    application=("Révision rapide : a) Oriente la carte de Madagascar. b) Cite "
                 "les quatre formes du relief. c) Nomme la source et l'embouchure "
                 "d'un cours d'eau. d) Cite deux gestes de la bonne gestion de "
                 "l'eau.",
                 "a) N en haut, S en bas, E à droite, O à gauche — "
                 "b) Montagne, colline, vallée, plaine — c) La source dans "
                 "les hauteurs, l'embouchure à la mer — d) Protéger "
                 "la source et reboiser."),
    evaluation=("1. Réponds par vrai ou faux : a) 1 cm vaut 100 km sur la carte. "
                "b) La plaine est le relief le plus élevé. c) L'eau descend "
                "toujours vers la mer. d) Les terrasses retiennent la terre.\n"
                "2. Trace de mémoire le profil des quatre formes du relief.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n"
                "2. Un triangle élevé, un dôme arrondi, un V et un trait "
                "horizontal."),
    lecon_titre="Révision de l'unité II",
    sections=[
        ("1. Revoir la carte",
         "Une carte porte toujours quatre éléments obligatoires : le titre, la "
         "légende, l'échelle et la flèche du Nord. Elle s'oriente le Nord en "
         "haut, le Sud en bas, l'Est à droite et l'Ouest à gauche. Sur la "
         "carte de Madagascar, 1 cm mesure 100 km : cette échelle permet de "
         "convertir n'importe quelle mesure en kilomètres.",
         ("img_s31_a.png", "Figure 1 — La carte orientée.", 460)),
        ("2. Revoir le paysage",
         "Le relief compte quatre formes, distinguées par la hauteur, la forme et la "
         "pente : la montagne haute et raide, la colline basse et arrondie, la "
         "vallée en creux, la plaine plate. Les hommes cultivent les versants en "
         "terrasses et installent les grandes rizières dans les bas-fonds. Quand "
         "la forêt disparaît, l'érosion creuse des lavaka et la terre part.",
         ("img_s39_a.png", "Figure 2 — Les quatre formes du relief.", 700)),
        ("3. Revoir les cours d'eau",
         "Un cours d'eau naît à une source dans les hauteurs, descend la pente "
         "en s'élargissant et se jette dans la mer à son embouchure. Il "
         "reçoit ses affluents à des confluents. On le décrit avec quatre "
         "mots : l'amont vers la source, l'aval vers la mer, la rive gauche et la rive "
         "droite, nommées dans le sens du courant.",
         ("img_s49_a.png", "Figure 3 — Amont, aval et les deux rives.", 700)),
        ("4. Revoir les usages et la gestion",
         "L'eau sert à quatre usages : la maison, l'irrigation, la pêche et le "
         "transport. Elle se gère avec quatre gestes : capter et protéger la "
         "source, ne pas polluer, ne pas gaspiller, et reboiser les versants. Tout ce "
         "qui est fait en amont se retrouve chez ceux qui vivent en aval.",
         ("scene_gestion_eau.png", "Figure 4 — Les gestes de la bonne gestion.",
          620)),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Retiens cette phrase pour l'examen : l'eau naît dans la montagne, "
             "traverse la vallée, arrose la plaine et rejoint la mer. Elle relie "
             "toutes les leçons du trimestre."),
    resume=[
        "Une carte porte un titre, une légende, une échelle et la flèche "
        "du Nord.",
        "Le relief compte quatre formes : montagne, colline, vallée et "
        "plaine.",
        "Un cours d'eau va de la source vers l'embouchure, sans jamais "
        "remonter.",
        "L'eau sert à la maison, aux cultures, à la pêche et au "
        "transport.",
        "Protéger la source, ne pas polluer, ne pas gaspiller et reboiser.",
    ],
    lexique=[("Carte", "Le dessin d'un pays vu d'en haut, avec ses quatre "
              "éléments."),
             ("Relief", "Les formes du sol."),
             ("Terrasse", "Une marche aménagée sur une pente pour "
              "cultiver."),
             ("Érosion", "L'emport de la terre par l'eau et le vent."),
             ("Bassin versant", "La surface dont les eaux vont vers le même "
              "fleuve.")],
    exercices=[
        ("Complète avec : échelle — relief — source — aval",
         ["a) L'…… permet de mesurer les distances sur la carte.",
          "b) La montagne, la colline, la vallée et la plaine sont les "
          "quatre formes du ……",
          "c) Un cours d'eau naît à la ……",
          "d) L'…… est le côté de la mer."],
         ["a) L'échelle", "b) du relief", "c) à la source", "d) L'aval"]),
        ("Réponds par vrai ou faux.",
         ["a) Le Nord est en haut de la carte.",
          "b) La plaine est un relief élevé.",
          "c) L'eau descend toujours vers la mer.",
          "d) Reboiser aide à retenir l'eau dans le sol."],
         ["a) Vrai", "b) Faux", "c) Vrai", "d) Vrai"]),
        ("Relie chaque notion à ce qu'elle désigne.",
         ["L'échelle", "L'amont", "L'embouchure", "Le confluent"],
         ["Le point de rencontre de deux eaux", "Les kilomètres réels",
          "Vers la source", "L'arrivée dans la mer"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Cite les quatre éléments obligatoires d'une carte.",
          "b) Cite les quatre formes du relief.",
          "c) Comment nomme-t-on les deux rives ?",
          "d) Cite deux gestes de la bonne gestion de l'eau."],
         ["a) Le titre, la légende, l'échelle et la flèche du Nord.",
          "b) La montagne, la colline, la vallée et la plaine.",
          "c) On se place dans le sens du courant et l'on regarde ses mains.",
          "d) Protéger la source et reboiser les versants."]),
    ],
    consigne_ex5="Compose une affiche de révision en trois cases : la carte orientée, "
                 "le profil des quatre reliefs, et le trajet d'un fleuve de la source "
                 "à la mer. Légende chaque case.",
    corrige_ex5="Case 1 : silhouette avec N/S/E/O. Case 2 : triangle, dôme, V et "
                "trait plat étiquetés. Case 3 : montagne avec la source, bande "
                "qui s'élargit, mer et embouchure.",
))

# ═══════════════════════════ SÉANCE 55 — SUJET D'EXAMEN ════════════════════
SEANCES.append(dict(
    n=55, semaine=18, titre="Sujet d'examen 9e — Unité II",
    type="examen",
    objectif="Vérifier les acquis de l'unité II : la carte, le paysage et les "
             "cours d'eau.",
    materiel="Sujet imprimé, feuille de réponse, document : le réseau "
             "hydrographique.",
    examen=[
        ("I. Questions de cours", 6, [
            "1. Cite les quatre éléments obligatoires d'une carte.",
            "2. Comment oriente-t-on une carte ? Donne les quatre directions.",
            "3. Combien de kilomètres mesure 1 cm sur la carte de Madagascar ?",
            "4. Cite les quatre formes du relief et dis comment on les "
            "distingue.",
            "5. Où un cours d'eau prend-il naissance et où se "
            "termine-t-il ?",
            "6. Cite deux usages des cours d'eau et une conséquence de "
            "l'érosion.",
        ]),
        ("II. Exercices", 8, [
            "1. Complète avec les mots proposés : Nord — relief — "
            "amont — échelle.",
            "a) Sur une carte, le …… est en haut.",
            "b) L'…… permet de mesurer les distances réelles.",
            "c) La montagne, la colline, la vallée et la plaine forment "
            "le ……",
            "d) L'…… est le côté de la source.",
            "2. Réponds par vrai ou faux.",
            "a) La plaine est le relief le plus élevé.",
            "b) L'eau d'un cours d'eau descend toujours vers la mer.",
            "c) Les terrasses retiennent l'eau et la terre sur la pente.",
            "d) Reboiser favorise l'érosion.",
            "3. Relie chaque terme à sa définition.",
            "L'embouchure — L'affluent — Le confluent — Le bassin "
            "versant",
            "Le point de rencontre de deux eaux — La surface drainée par "
            "un fleuve — L'arrivée dans la mer — Le cours d'eau qui "
            "se jette dans un autre",
            "4. Réponds par une phrase complète.",
            "a) Pourquoi les terrasses sont-elles nécessaires sur une pente ?",
            "b) Cite deux gestes de la bonne gestion de l'eau.",
        ]),
        ("III. Savoir-faire sur document", 6, [
            "Document : le réseau hydrographique ci-dessous.",
            "a) Nomme le cours d'eau principal et les cours d'eau qui le "
            "rejoignent. (2 points)",
            "b) Où se trouvent les confluents ? Place le mot sur le document. "
            "(1 point)",
            "c) Place la flèche du courant et écris les mots amont et aval "
            "aux bons endroits. (2 points)",
            "d) Cite un usage de cette eau pour les hommes. (1 point)",
        ]),
    ],
    figure_ex=("img_s50_a.png", "Document — Le réseau hydrographique "
               "(à compléter).", 620),
    corrige_examen=[
        ("I. Questions de cours", 6, None, [
            "1. Le titre, la légende, l'échelle et la flèche du Nord. "
            "(1 point)",
            "2. Le Nord en haut, le Sud en bas, l'Est à droite et l'Ouest "
            "à gauche. (1 point)",
            "3. 1 cm mesure 100 km. (1 point)",
            "4. La montagne est haute et raide, la colline basse et arrondie, la "
            "vallée est un creux et la plaine est plate ; on les distingue par la "
            "hauteur, la forme et la pente. (1 point)",
            "5. Il naît à une source, dans les hauteurs, et se termine à "
            "son embouchure, dans la mer. (1 point)",
            "6. Usages : la maison, l'irrigation, la pêche, le transport. "
            "Conséquence de l'érosion : la perte de terre cultivable et "
            "l'envasement de la rivière. (1 point)",
        ]),
        ("II. Exercices", 8, None, [
            "1. a) le Nord — b) L'échelle — c) le relief — "
            "d) L'amont. (0,5 point par réponse)",
            "2. a) Faux — b) Vrai — c) Vrai — d) Faux. "
            "(0,5 point par réponse)",
            "3. L'embouchure → l'arrivée dans la mer ; l'affluent → "
            "le cours d'eau qui se jette dans un autre ; le confluent → le "
            "point de rencontre de deux eaux ; le bassin versant → la surface "
            "drainée par un fleuve. (0,5 point par réponse)",
            "4. a) Parce qu'elles retiennent l'eau et la terre sur la pente. "
            "b) Protéger la source et reboiser les versants. (1 point par "
            "réponse)",
        ]),
        ("III. Savoir-faire sur document", 6, None, [
            "a) Le cours principal est le fleuve, tracé au centre ; les cours "
            "d'eau qui le rejoignent sont les affluents, de part et d'autre. "
            "(2 points)",
            "b) Les confluents se trouvent aux pastilles, là où chaque "
            "affluent rejoint le fleuve. (1 point)",
            "c) La flèche descend du haut vers le bas ; amont en haut du document, "
            "aval en bas. (2 points)",
            "d) Par exemple l'irrigation des rizières, l'eau potable, la "
            "pêche ou le transport en pirogue. (1 point)",
        ]),
    ],
))

# ═══════════════════════════ SÉANCE 56 ═══════════════════════════
SEANCES.append(dict(
    n=56, semaine=18, titre="Le jour et la nuit",
    objectif="Distinguer le jour de la nuit.",
    materiel="Schéma du jour et de la nuit, globe terrestre ou ballon, lampe de poche, "
             "ardoise et craie, cahier.",
    illustration=("img_s56_a.png",
                  "Illustration — La Terre : une moitié éclairée a le jour, "
                  "l'autre a la nuit.", 700),
    revision=[("De quel côté le soleil se lève-t-il ?", "R.A. : À l'Est."),
              ("Que fait la flèche du Nord sur une carte ?",
               "R.A. : Elle indique le haut, c'est-à-dire le Nord.")],
    mes=("Ce matin, quand tu t'es réveillé, faisait-il jour ou nuit ?",
         "R.A. : Il faisait jour."),
    analyse=[
        ("D'où vient la lumière du jour ?", "R.A. : Du soleil."),
        ("Pourquoi fait-il nuit ?",
         "R.A. : Parce que notre côté de la Terre n'est plus éclairé."),
        ("Combien de temps dure un jour et une nuit réunis ?",
         "R.A. : Vingt-quatre heures."),
        ("À quel moment le soleil est-il le plus haut ?", "R.A. : À "
         "midi."),
        ("Que voit-on dans le ciel la nuit ?",
         "R.A. : La Lune et les étoiles.")],
    synthese="Donc, le jour et la nuit se succèdent parce que la Terre tourne. La "
             "moitié de la Terre tournée vers le soleil a le jour ; l'autre "
             "moitié a la nuit.",
    application=("Observe le schéma et réponds : a) Quel côté a le jour "
                 "? b) Quel côté a la nuit ? c) D'où vient la lumière "
                 "? d) Combien dure un jour et une nuit ?",
                 "a) Le côté éclairé, tourné vers le soleil — b) Le "
                 "côté dans l'ombre — c) Du soleil — d) Vingt-quatre "
                 "heures."),
    evaluation=("1. Réponds par vrai ou faux : a) Le jour vient du soleil. "
                "b) Toute la Terre a le jour en même temps. c) La nuit, notre "
                "côté est dans l'ombre. d) Un jour et une nuit durent "
                "vingt-quatre heures.\n2. Explique en deux phrases pourquoi il fait "
                "nuit.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n"
                "2. Exemple : « Il fait nuit quand notre côté de la Terre "
                "n'est plus éclairé par le soleil. Cela arrive parce que la "
                "Terre tourne sur elle-même. »"),
    lecon_titre="Le jour et la nuit",
    sections=[
        ("1. Le jour et la nuit se succèdent",
         "Chaque journée commence par le lever du soleil et se termine par son "
         "coucher. Entre les deux, c'est le jour. Après le coucher vient la nuit, "
         "puis un nouveau lever. Ce cycle ne s'arrête jamais et il est "
         "remarquablement régulier : c'est lui qui rythme la vie des hommes, des "
         "animaux et des plantes depuis toujours."),
        ("2. D'où vient la lumière du jour ?",
         "Le jour n'existe que parce que le soleil nous éclaire. Le soleil est une "
         "étoile, c'est-à-dire un astre qui produit sa propre lumière et "
         "sa propre chaleur. La Terre, elle, ne brille pas : elle se contente de "
         "recevoir la lumière du soleil et de la renvoyer. C'est cette "
         "lumière reçue qui fait le jour."),
        ("3. Le côté éclairé et le côté sombre",
         "La Terre est une boule. Quand le soleil l'éclaire, il ne peut en "
         "éclairer qu'une moitié à la fois : celle qui lui fait face. Cette "
         "moitié a le jour. L'autre moitié, tournée vers l'espace, reste dans "
         "l'ombre : elle a la nuit. Il est donc toujours midi quelque part sur la "
         "Terre, et toujours minuit ailleurs."),
        ("4. Ce que l'on fait le jour et la nuit",
         "Le jour, la lumière permet de voir, de travailler aux champs, "
         "d'aller à l'école et de faire le marché. La nuit, l'obscurité "
         "arrête les travaux : on rentre les animaux, on dîne en famille et "
         "l'on dort. Au village, la lampe à pétrole ou le petit panneau "
         "solaire prolonge un peu la soirée, mais la nuit reste le temps du "
         "repos."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "La Terre met exactement vingt-quatre heures pour faire un tour complet "
             "sur elle-même. C'est cette durée que nous appelons un jour. Les "
             "Malgaches comptent le début du jour au lever du soleil, comme beaucoup "
             "de peuples de l'océan Indien."),
    resume=[
        "Le jour et la nuit se succèdent sans jamais s'arrêter.",
        "La lumière du jour vient du soleil, qui est une étoile.",
        "La Terre est une boule : le soleil n'en éclaire qu'une moitié.",
        "La moitié éclairée a le jour, l'autre a la nuit.",
        "Le jour est le temps du travail, la nuit celui du repos.",
    ],
    lexique=[("Jour", "La période où le soleil éclaire notre côté "
              "de la Terre."),
             ("Nuit", "La période où notre côté est dans "
              "l'ombre."),
             ("Étoile", "Un astre qui produit sa propre lumière."),
             ("Éclairer", "Donner de la lumière."),
             ("Cycle", "Une suite d'événements qui revient toujours dans le "
              "même ordre.")],
    exercices=[
        ("Complète avec : soleil — jour — nuit — ombre",
         ["a) La lumière du jour vient du ……",
          "b) Le côté éclairé de la Terre a le ……",
          "c) Le côté dans l'…… a la nuit.",
          "d) La …… arrive après le coucher du soleil."],
         ["a) du soleil", "b) le jour", "c) dans l'ombre", "d) La nuit"]),
        ("Réponds par vrai ou faux.",
         ["a) Toute la Terre a le jour en même temps.",
          "b) Le soleil est une étoile.",
          "c) La Terre produit sa propre lumière.",
          "d) Un jour et une nuit durent vingt-quatre heures."],
         ["a) Faux", "b) Vrai", "c) Faux", "d) Vrai"]),
        ("Relie chaque moment à ce qu'on y fait.",
         ["Le matin", "Le midi", "Le soir", "La nuit"],
         ["On dort", "On se réveille", "On dîne", "On mange"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) D'où vient la lumière du jour ?",
          "b) Pourquoi fait-il nuit ?",
          "c) Combien dure un jour et une nuit ?",
          "d) Que fait-on la nuit au village ?"],
         ["a) Elle vient du soleil.",
          "b) Parce que notre côté de la Terre est dans l'ombre.",
          "c) Ils durent vingt-quatre heures.",
          "d) On rentre les animaux et l'on dort."]),
    ],
    consigne_ex5="Dessine le schéma du jour et de la nuit : le soleil à gauche "
                 "avec ses rayons, la Terre au centre à moitié éclairée, "
                 "et écris les mots jour et nuit du bon côté.",
    corrige_ex5="Soleil jaune avec rayons à gauche, trois flèches vers la Terre, "
                "cercle Terre à moitié jaune (côté soleil) et à "
                "moitié sombre. Mots « jour » sur la partie claire et "
                "« nuit » sur la partie sombre.",
))

# ═══════════════════════════ SÉANCE 57 ═══════════════════════════
SEANCES.append(dict(
    n=57, semaine=18, titre="Le mouvement de la Terre",
    objectif="Reconnaître la rotation de la Terre.",
    materiel="Schéma de la rotation, globe terrestre, lampe de poche, ardoise et "
             "craie, cahier.",
    illustration=("img_s57_a.png",
                  "Illustration — La Terre tourne sur elle-même en "
                  "vingt-quatre heures.", 700),
    revision=[("D'où vient la lumière du jour ?", "R.A. : Du soleil."),
              ("Combien dure un jour et une nuit ?", "R.A. : Vingt-quatre heures.")],
    mes=("Est-ce le soleil qui tourne autour de la Terre, ou le contraire ?",
         "R.A. : C'est la Terre qui tourne."),
    analyse=[
        ("Sur quoi la Terre tourne-t-elle ?",
         "R.A. : Sur un axe imaginaire qui traverse les pôles."),
        ("Combien de temps met-elle pour un tour ?", "R.A. : Vingt-quatre "
         "heures."),
        ("Comment appelle-t-on ce mouvement ?", "R.A. : La rotation."),
        ("Dans quel sens la Terre tourne-t-elle ?",
         "R.A. : D'ouest en est."),
        ("Pourquoi le soleil semble-t-il se déplacer ?",
         "R.A. : Parce que c'est nous qui bougeons avec la Terre.")],
    synthese="Donc, la Terre tourne sur elle-même autour d'un axe : c'est la "
             "rotation. Elle fait un tour complet en vingt-quatre heures, d'ouest en "
             "est, et ce mouvement explique le jour et la nuit.",
    application=("Observe le schéma et réponds : a) Où est l'axe ? b) "
                 "Combien de temps dure un tour ? c) Comment appelle-t-on ce mouvement "
                 "? d) Que produit-il ?",
                 "a) La ligne rouge qui traverse la Terre — b) Vingt-quatre "
                 "heures — c) La rotation — d) La succession du jour et "
                 "de la nuit."),
    evaluation=("1. Réponds par vrai ou faux : a) La Terre tourne sur "
                "elle-même. b) Un tour dure douze heures. c) La rotation va "
                "d'ouest en est. d) Le soleil tourne autour de la Terre.\n"
                "2. Explique en deux phrases le mouvement de la Terre.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Faux.\n"
                "2. Exemple : « La Terre tourne sur elle-même autour d'un "
                "axe. Elle fait un tour complet en vingt-quatre heures. »"),
    lecon_titre="Le mouvement de la Terre",
    sections=[
        ("1. La Terre tourne",
         "La Terre n'est pas immobile : elle tourne sur elle-même, comme une "
         "toupie. Ce mouvement s'appelle la rotation. On ne le sent pas, parce que nous "
         "tournons avec elle, exactement à la même vitesse : dans un train qui "
         "roule doucement, on ne sent pas non plus le mouvement."),
        ("2. Un tour en vingt-quatre heures",
         "Un tour complet de la Terre dure vingt-quatre heures. C'est très "
         "long à notre échelle, et pourtant très rapide : à "
         "l'équateur, la surface terrestre se déplace à plus de mille six "
         "cents kilomètres à l'heure. Cette rotation régulière nous donne "
         "une mesure du temps fiable : le jour."),
        ("3. Pourquoi le soleil semble se déplacer",
         "Depuis le sol, on a l'impression que le soleil se lève à l'Est, monte "
         "dans le ciel et se couche à l'Ouest. En réalité, c'est nous qui "
         "bougeons avec la Terre, et ce déplacement nous fait voir le soleil "
         "autrement. C'est le même effet que depuis un train : ce sont les arbres du "
         "bord qui semblent défiler, alors que c'est le train qui avance."),
        ("4. Le jour et la nuit expliqués",
         "La rotation explique enfin le jour et la nuit. En tournant, chaque point de "
         "la Terre passe d'abord dans la partie éclairée, puis dans la partie "
         "sombre, puis revient vers la lumière. Le matin, nous entrons dans la "
         "lumière : c'est le lever du soleil. Le soir, nous en sortons : c'est le "
         "coucher."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "La Terre ne s'arrête jamais depuis plus de quatre milliards "
             "d'années. Rien ne la freine dans l'espace, où il n'y a pas "
             "d'air pour la ralentir."),
    resume=[
        "La Terre tourne sur elle-même : c'est la rotation.",
        "Elle tourne autour d'un axe qui traverse les pôles.",
        "Un tour complet dure vingt-quatre heures.",
        "La rotation se fait d'ouest en est.",
        "Ce mouvement explique la succession du jour et de la nuit.",
    ],
    lexique=[("Rotation", "Le mouvement d'un astre qui tourne sur lui-même."),
             ("Axe", "La ligne imaginaire autour de laquelle la Terre "
              "tourne."),
             ("Pôle", "Chacune des deux extrémités de l'axe."),
             ("Équateur", "La ligne imaginaire qui fait le tour de la Terre "
              "par le milieu."),
             ("Immobile", "Qui ne bouge pas.")],
    exercices=[
        ("Complète avec : rotation — axe — vingt-quatre — ouest",
         ["a) La Terre tourne sur elle-même : c'est la ……",
          "b) Elle tourne autour d'un …… imaginaire.",
          "c) Un tour complet dure …… heures.",
          "d) La rotation va d'…… en est."],
         ["a) la rotation", "b) d'un axe", "c) dure vingt-quatre heures",
          "d) d'ouest"]),
        ("Réponds par vrai ou faux.",
         ["a) La Terre est immobile dans l'espace.",
          "b) Un tour de la Terre dure vingt-quatre heures.",
          "c) Le soleil tourne autour de la Terre.",
          "d) Nous tournons avec la Terre sans le sentir."],
         ["a) Faux", "b) Vrai", "c) Faux", "d) Vrai"]),
        ("Relie chaque mot à sa définition.",
         ["La rotation", "L'axe", "Le pôle", "L'équateur"],
         ["La ligne du milieu", "Le tour sur soi-même", "La ligne de rotation",
          "Le bout de l'axe"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Comment appelle-t-on le mouvement de la Terre ?",
          "b) Combien de temps dure un tour complet ?",
          "c) Pourquoi ne sentons-nous pas ce mouvement ?",
          "d) Que produit la rotation ?"],
         ["a) On l'appelle la rotation.",
          "b) Il dure vingt-quatre heures.",
          "c) Parce que nous tournons avec elle à la même vitesse.",
          "d) Elle produit la succession du jour et de la nuit."]),
    ],
    consigne_ex5="Dessine la Terre avec son axe de rotation, la flèche du sens de "
                 "rotation et le soleil qui l'éclaire. Écris les trois mots : "
                 "rotation, axe, jour.",
    corrige_ex5="Cercle Terre traversé d'une ligne rouge oblique (l'axe), "
                "flèche courbe autour dans le sens d'ouest en est, soleil jaune "
                "sur le côté. Mots : rotation, axe, jour.",
))

# ═══════════════════════════ SÉANCE 58 ═══════════════════════════
SEANCES.append(dict(
    n=58, semaine=18, titre="Observer le ciel",
    objectif="Observer les variations du ciel au cours d'une journée.",
    materiel="Image du ciel aux trois moments du jour, carnet d'observation, ardoise et "
             "craie, cahier.",
    illustration=("scene_ciel_journee.png",
                  "Illustration — Le ciel le matin, à midi et le soir.",
                  620),
    revision=[("Comment appelle-t-on le mouvement de la Terre ?",
               "R.A. : La rotation."),
              ("De quel côté le soleil se couche-t-il ?", "R.A. : À "
               "l'Ouest.")],
    mes=("Le ciel de ce matin ressemblait-il à celui de midi ?",
         "R.A. : Non, la lumière et les couleurs changent."),
    analyse=[
        ("De quelle couleur est le ciel tôt le matin ?",
         "R.A. : Pâle, souvent jaune doré ou gris."),
        ("Où est le soleil le matin ?", "R.A. : Bas, du côté de "
         "l'Est."),
        ("Où est-il à midi ?", "R.A. : Haut, presque au-dessus de nous."),
        ("De quelle couleur est le ciel le soir ?", "R.A. : Orange et rouge."),
        ("Que voit-on dans le ciel la nuit ?",
         "R.A. : La Lune, les étoiles et parfois des nuages sombres.")],
    synthese="Donc, le ciel change trois fois par jour : pâle et doré le "
             "matin, bleu et lumineux à midi, orange et rouge le soir. Ces "
             "changements suivent toujours le même ordre.",
    application=("Observe l'image et réponds : a) Que voit-on dans la bande du "
                 "haut ? b) Dans celle du milieu ? c) Dans celle du bas ? d) "
                 "Dans quel ordre ces ciels se succèdent-ils ?",
                 "a) Le matin, soleil bas, ciel doré — b) Midi, soleil "
                 "haut, ciel bleu — c) Le soir, soleil bas, ciel orange — "
                 "d) Matin, midi, soir."),
    evaluation=("1. Réponds par vrai ou faux : a) Le matin, le soleil est "
                "bas. b) À midi, le soleil est haut. c) Le soir, le ciel est "
                "bleu. d) Le ciel change au cours de la journée.\n"
                "2. Décris le ciel du soir en deux phrases.",
                "1. a) Vrai — b) Vrai — c) Faux — d) Vrai.\n"
                "2. Exemple : « Le soir, le ciel devient orange et rouge. Le "
                "soleil est bas, du côté de l'Ouest. »"),
    lecon_titre="Observer le ciel",
    sections=[
        ("1. Le ciel du matin",
         "Tôt le matin, juste après le lever du soleil, le ciel est pâle : "
         "jaune doré, parfois gris ou rose. Le soleil est encore bas sur "
         "l'horizon et sa lumière traverse une épaisse couche d'air, ce qui "
         "adoucit ses couleurs. Les ombres sont longues et l'air est frais."),
        ("2. Le ciel de midi",
         "À midi, le soleil est haut dans le ciel, presque au-dessus de nos "
         "têtes. Sa lumière traverse moins d'air : le ciel paraît d'un bleu "
         "franc et les couleurs sont nettes. C'est le moment le plus chaud et le plus "
         "lumineux de la journée, et celui où les ombres sont les plus "
         "courtes."),
        ("3. Le ciel du soir",
         "Le soir, avant le coucher, le ciel prend des teintes orangées et "
         "rouges. C'est le plus beau moment pour observer. Le soleil redescend vers "
         "l'Ouest, les ombres s'allongent de nouveau et la fraîcheur revient. "
         "Quand le soleil a disparu, le ciel devient bleu sombre, puis noir."),
        ("4. Tenir un carnet d'observation",
         "Un élève qui observe note la date, l'heure et ce qu'il voit : la "
         "couleur du ciel, la place du soleil, la forme des nuages. En relisant ses "
         "notes au bout d'une semaine, il découvre que le ciel change selon "
         "l'heure, mais aussi selon les jours : certains sont clairs, d'autres "
         "couverts. C'est ainsi que travaille un géographe."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Les couleurs orangées du coucher viennent de la poussière et de "
             "la vapeur d'eau en suspension dans l'air. Elles filtrent la "
             "lumière du soleil et ne laissent passer que les teintes rouges."),
    resume=[
        "Le ciel change au cours de la journée.",
        "Le matin, le soleil est bas et le ciel est pâle et doré.",
        "À midi, le soleil est haut et le ciel est bleu.",
        "Le soir, le soleil redescend et le ciel devient orange et rouge.",
        "Un carnet d'observation permet de suivre ces changements.",
    ],
    lexique=[("Observer", "Regarder avec attention pour comprendre."),
             ("Horizon", "La ligne où le ciel semble toucher la terre."),
             ("Teinte", "Une nuance de couleur."),
             ("Coucher", "Le moment où le soleil disparaît sous "
              "l'horizon."),
             ("Carnet d'observation", "Un cahier où l'on note ce que l'on "
              "voit, jour après jour.")],
    exercices=[
        ("Complète avec : matin — midi — soir — nuit",
         ["a) Le ……, le soleil est bas et le ciel est pâle.",
          "b) À ……, le ciel est bleu et le soleil est haut.",
          "c) Le ……, le ciel devient orange et rouge.",
          "d) La ……, on voit la Lune et les étoiles."],
         ["a) Le matin", "b) À midi", "c) Le soir", "d) La nuit"]),
        ("Réponds par vrai ou faux.",
         ["a) Le ciel ne change jamais au cours d'une journée.",
          "b) À midi, les ombres sont courtes.",
          "c) Le soir, le soleil est du côté de l'Ouest.",
          "d) Le carnet d'observation sert à noter ce que l'on voit."],
         ["a) Faux", "b) Vrai", "c) Vrai", "d) Vrai"]),
        ("Relie chaque moment à ce qu'on voit.",
         ["Le matin", "Le midi", "Le soir", "La nuit"],
         ["Ciel orange", "Ciel noir étoilé", "Ciel pâle doré",
          "Ciel bleu franc"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Où est le soleil le matin ?",
          "b) De quelle couleur est le ciel à midi ?",
          "c) Que devient le ciel le soir ?",
          "d) Que note-t-on dans un carnet d'observation ?"],
         ["a) Il est bas, du côté de l'Est.",
          "b) Il est d'un bleu franc.",
          "c) Il devient orange et rouge.",
          "d) On note la date, l'heure, la couleur du ciel et les nuages."]),
    ],
    consigne_ex5="Dessine trois bandes : le ciel du matin, celui de midi et celui du "
                 "soir, avec le soleil placé au bon endroit dans chacune. "
                 "Légende les trois moments.",
    corrige_ex5="Bande 1 : soleil bas à gauche, ciel jaune pâle. Bande 2 : "
                "soleil en haut au centre, ciel bleu. Bande 3 : soleil bas à "
                "droite, ciel orange. Légende : matin, midi, soir.",
))

# ═══════════════════════════ SÉANCE 59 ═══════════════════════════
SEANCES.append(dict(
    n=59, semaine=19, titre="Décrire le temps qu'il fait",
    objectif="Utiliser un vocabulaire simple : il fait beau, il pleut, il fait chaud, "
             "il fait froid.",
    materiel="Image des quatre temps, thermomètre, ardoise et craie, cahier.",
    illustration=("img_s59_a.png",
                  "Illustration — Il fait beau, il pleut, il fait chaud, il "
                  "fait froid.", 700),
    revision=[("Où est le soleil à midi ?",
               "R.A. : Haut, presque au-dessus de nous."),
              ("Que note-t-on dans un carnet d'observation ?",
               "R.A. : La date, l'heure, la couleur du ciel et les nuages.")],
    mes=("Ce matin, quel temps faisait-il en arrivant à l'école ?",
         "R.A. : On répond selon le jour : beau, pluvieux, chaud ou frais."),
    analyse=[
        ("Que dit-on quand le soleil brille et que le ciel est bleu ?",
         "R.A. : Il fait beau."),
        ("Que dit-on quand l'eau tombe des nuages ?", "R.A. : Il pleut."),
        ("Que dit-on quand la température est élevée ?",
         "R.A. : Il fait chaud."),
        ("Que dit-on quand la température est basse ?", "R.A. : Il fait "
         "froid."),
        ("Quel instrument mesure la température ?", "R.A. : Le "
         "thermomètre.")],
    synthese="Donc, quatre expressions décrivent le temps qu'il fait : il fait "
             "beau, il pleut, il fait chaud, il fait froid. On les complète en "
             "observant le ciel et en lisant le thermomètre.",
    application=("Décris le temps d'aujourd'hui en deux phrases, en employant "
                 "deux des quatre expressions de la leçon.",
                 "Exemple : « Aujourd'hui, il fait beau et il fait chaud. "
                 "Le ciel est bleu et le soleil brille. »"),
    evaluation=("1. Réponds par vrai ou faux : a) Il fait beau quand le "
                "soleil brille. b) La pluie tombe des nuages. c) Le thermomètre "
                "mesure le vent. d) Il fait froid quand la température est "
                "basse.\n2. Décris le temps d'aujourd'hui en deux phrases.",
                "1. a) Vrai — b) Vrai — c) Faux — d) Vrai.\n"
                "2. Exemple : « Aujourd'hui, il pleut et il fait frais. Le "
                "ciel est gris. »"),
    lecon_titre="Décrire le temps qu'il fait",
    sections=[
        ("1. Le temps et le climat",
         "Le temps qu'il fait, c'est l'état du ciel et de l'air à un "
         "moment précis, dans un lieu précis : aujourd'hui, ici, il pleut. Le "
         "climat, lui, est le temps habituel d'une région observée sur "
         "plusieurs années. Ne confonds pas les deux : le temps change "
         "d'un jour à l'autre, le climat reste."),
        ("2. Il fait beau, il pleut",
         "Il fait beau quand le soleil brille et que le ciel est dégagé : les "
         "nuages sont rares ou absents. Il pleut quand l'eau contenue dans les nuages "
         "tombe sur le sol. Entre les deux, il peut faire gris, avec un ciel couvert de "
         "nuages sans pluie. Observer les nuages permet souvent de prévoir la "
         "pluie."),
        ("3. Il fait chaud, il fait froid",
         "Il fait chaud quand la température est élevée, et froid quand "
         "elle est basse. La température se mesure avec un thermomètre, en "
         "degrés. À Madagascar, la chaleur dépend surtout de "
         "l'altitude : il fait chaud sur la côte et plus frais sur les hautes terres, "
         "où les nuits d'hiver peuvent être très froides."),
        ("4. Décrire avec des phrases complètes",
         "Pour décrire le temps, une phrase complète vaut mieux qu'un mot "
         "isolé. On écrit : « Aujourd'hui, il fait beau et il fait "
         "chaud. » ou : « Ce matin, il pleut et il fait frais. » "
         "On peut ajouter l'heure et le lieu, comme dans un carnet "
         "d'observation."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Sur les hautes terres de Madagascar, la température peut descendre "
             "sous cinq degrés la nuit en juillet, alors qu'il fait encore trente "
             "degrés l'après-midi. C'est l'écart entre le jour et la nuit "
             "en altitude."),
    resume=[
        "Le temps est l'état du ciel et de l'air à un moment donné.",
        "Le climat est le temps habituel d'une région sur plusieurs "
        "années.",
        "Il fait beau quand le soleil brille ; il pleut quand l'eau tombe des "
        "nuages.",
        "Il fait chaud quand la température est élevée, froid quand elle "
        "est basse.",
        "On décrit le temps avec des phrases complètes.",
    ],
    lexique=[("Temps", "L'état du ciel et de l'air à un moment donné."),
             ("Climat", "Le temps habituel d'une région, sur plusieurs "
              "années."),
             ("Température", "Le degré de chaleur de l'air."),
             ("Thermomètre", "L'instrument qui mesure la température."),
             ("Dégagé", "Un ciel sans nuages.")],
    exercices=[
        ("Complète avec : beau — pleut — chaud — froid",
         ["a) Quand le soleil brille, il fait ……",
          "b) Quand l'eau tombe des nuages, il ……",
          "c) Quand la température est élevée, il fait ……",
          "d) Quand elle est basse, il fait ……"],
         ["a) il fait beau", "b) il pleut", "c) il fait chaud",
          "d) il fait froid"]),
        ("Réponds par vrai ou faux.",
         ["a) Le temps et le climat sont la même chose.",
          "b) Le thermomètre mesure la température.",
          "c) Un ciel couvert annonce souvent la pluie.",
          "d) Il fait plus frais sur les hautes terres que sur la côte."],
         ["a) Faux", "b) Vrai", "c) Vrai", "d) Vrai"]),
        ("Relie chaque expression à ce qu'on observe.",
         ["Il fait beau", "Il pleut", "Il fait chaud", "Il fait froid"],
         ["Le thermomètre est bas", "Le soleil brille", "L'eau tombe",
          "Le thermomètre est haut"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Quelle est la différence entre le temps et le climat ?",
          "b) Quel instrument mesure la température ?",
          "c) Que dit-on quand l'eau tombe des nuages ?",
          "d) Comment décrit-on le temps qu'il fait ?"],
         ["a) Le temps est d'un jour, le climat de plusieurs années.",
          "b) C'est le thermomètre.",
          "c) On dit qu'il pleut.",
          "d) On le décrit avec des phrases complètes."]),
    ],
    consigne_ex5="Dessine les quatre panneaux du temps : le soleil pour « il "
                 "fait beau », le nuage et la pluie, le thermomètre haut, le "
                 "thermomètre bas. Écris l'expression sous chacun.",
    corrige_ex5="Quatre cases : soleil avec rayons, nuage gris avec traits de pluie, "
                "thermomètre rouge monté, thermomètre bleu descendu. "
                "Légende : il fait beau, il pleut, il fait chaud, il fait froid.",
))

# ═══════════════════════════ SÉANCE 60 ═══════════════════════════
SEANCES.append(dict(
    n=60, semaine=19, titre="Le vent et la girouette",
    objectif="Observer les mouvements d'une girouette.",
    materiel="Girouette fabriquée ou schéma de girouette, cour de l'école, ardoise "
             "et craie, cahier.",
    illustration=("img_s60_a.png",
                  "Illustration — La girouette : la flèche indique d'où "
                  "vient le vent.", 700),
    revision=[("Comment appelle-t-on le mouvement de la Terre ?",
               "R.A. : La rotation."),
              ("Quel instrument mesure la température ?", "R.A. : Le "
               "thermomètre.")],
    mes=("Quand les arbres se courbent, qu'est-ce qui les pousse ?",
         "R.A. : Le vent."),
    analyse=[
        ("Qu'est-ce que le vent ?", "R.A. : De l'air qui se déplace."),
        ("Que fait la girouette ?",
         "R.A. : Elle tourne et se place face au vent."),
        ("Qu'indique la flèche de la girouette ?",
         "R.A. : La direction d'où vient le vent."),
        ("Comment appelle-t-on un vent très fort ?",
         "R.A. : Une tempête, ou un cyclone selon la saison."),
        ("Où place-t-on une girouette ?",
         "R.A. : Dans un endroit dégagé, loin des arbres et des murs.")],
    synthese="Donc, le vent est de l'air qui se déplace. La girouette sert à "
             "connaître sa direction : la flèche se place face au vent et "
             "indique d'où il vient.",
    application=("Observe le schéma et réponds : a) D'où vient le vent "
                 "? b) Où va-t-il ? c) Que fait la flèche ? d) Où "
         "faut-il placer une girouette ?",
                 "a) De l'Ouest — b) Vers l'Est — c) Elle se place face "
                 "au vent — d) Dans un endroit dégagé."),
    evaluation=("1. Réponds par vrai ou faux : a) Le vent est de l'air "
                "immobile. b) La girouette indique d'où vient le vent. c) La "
                "flèche se place face au vent. d) On place la girouette contre "
                "un mur.\n2. Explique en deux phrases le rôle d'une "
                "girouette.",
                "1. a) Faux — b) Vrai — c) Vrai — d) Faux.\n"
                "2. Exemple : « La girouette tourne librement sur son axe. "
                "Sa flèche indique la direction d'où vient le vent. »"),
    lecon_titre="Le vent et la girouette",
    sections=[
        ("1. Qu'est-ce que le vent ?",
         "Le vent est de l'air en mouvement. Quand le soleil chauffe le sol, l'air "
         "chaud monte et l'air plus frais arrive à sa place : ce déplacement "
         "est le vent. On ne le voit pas, mais on le sent sur la peau et l'on "
         "observe ses effets : les feuilles bougent, les drapeaux claquent, la fumée "
         " penche."),
        ("2. D'où vient le vent ?",
         "Le vent se nomme d'après l'endroit d'où il vient, et non "
         "l'endroit où il va. Un vent d'ouest vient de l'ouest et se dirige vers "
         "l'est. C'est la même convention que pour l'amont et l'aval d'un cours "
         "d'eau : on regarde toujours le point de départ."),
        ("3. La girouette",
         "La girouette est l'instrument qui donne cette direction. Elle est composée "
         "d'une flèche qui tourne librement autour d'un axe vertical, elle-même "
         "fixée sur un mât. Sous la flèche, une croix indique les quatre points "
         "cardinaux : N, S, E et O. L'empennage, à l'arrière, offre plus de prise "
         "au vent que la pointe : c'est lui qui fait pivoter l'ensemble."),
        ("4. Lire la girouette",
         "Pour lire une girouette, on regarde vers quoi pointe la flèche. Elle "
         "indique l'endroit d'où vient le vent : si la flèche pointe vers "
         "l'ouest, le vent vient de l'ouest. Il faut installer la girouette dans un "
         "endroit dégagé, loin des arbres, des murs et des toits, sinon elle "
         "indique une fausse direction."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Les marins nomment les vents depuis des siècles : l'alizé, qui "
             "souffle régulièrement vers l'équateur, a guidé les pirogues "
             "malgaches et les boutres arabes à travers l'océan Indien."),
    resume=[
        "Le vent est de l'air qui se déplace.",
        "Le vent se nomme d'après l'endroit d'où il vient.",
        "La girouette est une flèche qui tourne librement sur un axe.",
        "La flèche se place face au vent et indique sa provenance.",
        "On l'installe dans un endroit dégagé.",
    ],
    lexique=[("Vent", "De l'air qui se déplace."),
             ("Girouette", "Un instrument qui indique d'où vient le vent."),
             ("Axe", "La tige autour de laquelle la flèche tourne."),
             ("Empennage", "La partie arrière de la flèche, qui prend le "
              "vent."),
             ("Dégagé", "Un endroit sans obstacle autour.")],
    exercices=[
        ("Complète avec : vent — girouette — flèche — ouest",
         ["a) Le …… est de l'air qui se déplace.",
          "b) La …… indique la direction du vent.",
          "c) La …… se place face au vent.",
          "d) Un vent d'…… vient de l'ouest."],
         ["a) Le vent", "b) La girouette", "c) La flèche", "d) d'ouest"]),
        ("Réponds par vrai ou faux.",
         ["a) Le vent se nomme d'après l'endroit où il va.",
          "b) La girouette tourne librement sur son axe.",
          "c) L'empennage offre plus de prise au vent que la pointe.",
          "d) On peut placer une girouette sous un arbre."],
         ["a) Faux", "b) Vrai", "c) Vrai", "d) Faux"]),
        ("Relie chaque élément à son rôle.",
         ["La flèche", "L'empennage", "Le mât", "La croix"],
         ["Donne les quatre directions", "Indique la direction",
          "Fait pivoter la flèche", "Porte l'ensemble"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Qu'est-ce que le vent ?",
          "b) Comment nomme-t-on un vent ?",
          "c) Que fait la flèche de la girouette ?",
          "d) Où installe-t-on une girouette ?"],
         ["a) C'est de l'air qui se déplace.",
          "b) On le nomme d'après l'endroit d'où il vient.",
          "c) Elle se place face au vent et indique sa provenance.",
          "d) Dans un endroit dégagé, loin des obstacles."]),
    ],
    consigne_ex5="Dessine une girouette complète : le mât, la flèche tournée vers "
                 "l'Ouest, l'empennage, la croix N-S-E-O, et les flèches du vent qui "
                 "souffle vers l'Est.",
    corrige_ex5="Mât vertical, flèche rouge pointée vers la gauche (O), "
                "empennage jaune à droite, croix avec N en haut, S en bas, O à "
                "gauche et E à droite, flèches bleues du vent vers la droite.",
))

# ═══════════════════════════ SÉANCE 61 ═══════════════════════════
SEANCES.append(dict(
    n=61, semaine=19, titre="Construire une girouette",
    objectif="Construire une girouette et l'utiliser.",
    materiel="Carton rigide, paille ou tige fine, épingle, tuteur en bois, "
             "ciseaux, colle, crayon et règle, cahier.",
    illustration=("img_s61_a.png",
                  "Illustration — Les quatre étapes de la fabrication.", 700),
    revision=[("Que fait la flèche d'une girouette ?",
               "R.A. : Elle se place face au vent."),
              ("Comment nomme-t-on un vent ?",
               "R.A. : D'après l'endroit d'où il vient.")],
    mes=("De quoi a-t-on besoin pour fabriquer une girouette qui tourne "
          "librement ?",
         "R.A. : D'une flèche, d'une tige et d'un axe qui tourne sans frotter."),
    analyse=[
        ("Dans quoi découpe-t-on la flèche ?", "R.A. : Dans du carton "
         "rigide."),
        ("Que met-on sous la flèche ?",
         "R.A. : Une paille ou une tige fine, pour qu'elle pivote."),
        ("Comment fixe-t-on l'ensemble ?",
         "R.A. : Avec une épingle plantée dans le tuteur."),
        ("Que place-t-on au pied du mât ?",
         "R.A. : La croix des quatre points cardinaux, orientée au Nord."),
        ("Comment vérifie-t-on que la girouette tourne bien ?",
         "R.A. : On souffle dessus : elle doit pivoter sans accrocher.")],
    synthese="Donc, une girouette se construit en quatre étapes : découper la "
             "flèche et l'empennage, les fixer sur une paille, planter le tuteur, "
             "puis orienter la croix des points cardinaux.",
    application=("Fabrique ta girouette, puis réponds : a) Dans quelle "
                 "direction pointe la flèche ? b) D'où vient le vent ? c) "
                 "La girouette tourne-t-elle librement ? d) Que faut-il corriger "
                 "sinon ?",
                 "a) Selon l'observation du jour — b) Du côté "
                 "opposé à la direction de la pointe... non : du côté "
                 "vers lequel elle pointe — c) Oui, sinon elle frotte — "
                 "d) Il faut desserrer l'épingle ou redresser le tuteur."),
    evaluation=("1. Réponds par vrai ou faux : a) La flèche se découpe "
                "dans du carton. b) La girouette doit être bloquée. c) La "
                "croix s'oriente au Nord. d) Le tuteur doit être bien "
                "droit.\n2. Cite les quatre étapes de la fabrication.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Vrai.\n"
                "2. Découper, fixer sur la paille, planter le tuteur, placer "
                "la croix."),
    lecon_titre="Construire une girouette",
    sections=[
        ("1. Le matériel",
         "Peu de matériel suffit : une feuille de carton rigide pour la flèche et "
         "l'empennage, une paille ou une tige fine qui sert de support, une épingle "
         "qui fait office d'axe, un tuteur en bois planté dans le sol, des ciseaux "
         "et de la colle. Avec une bouteille en plastique coupée et une baguette, on "
         "obtient déjà une girouette solide."),
        ("2. Les quatre étapes",
         "Première étape : découper la flèche, avec une pointe à un bout et "
         "l'empennage à l'autre. Deuxième étape : coller la flèche sur la "
         "paille, en équilibre. Troisième étape : planter le tuteur bien "
         "droit dans le sol. Quatrième étape : fixer la paille sur l'épingle "
         "au sommet du tuteur, sans serrer, pour que tout pivote librement."),
        ("3. Installer la girouette",
         "Une fois montée, la girouette doit être orientée. On place au "
         "pied du tuteur une croix portant les lettres N, S, E et O, et l'on tourne "
         "la croix jusqu'à ce que le N soit du côté du Nord, trouvé "
         "avec le soleil à midi ou avec une boussole. On plante ensuite "
         "l'ensemble dans un endroit dégagé, à hauteur d'œil si "
         "possible."),
        ("4. L'utiliser et noter",
         "Chaque matin, un élève relève la direction indiquée et l'écrit "
         "dans le carnet d'observation, avec la date et l'heure. Au bout d'une "
         "semaine, la classe remarque souvent que le vent vient toujours à peu "
         "près du même côté : c'est le vent dominant de la saison. "
         "C'est ainsi que les paysans prévoient la pluie."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Au village, on observe le vent depuis toujours : la fumée des "
             "feux de cuisson, la cime des bambous et le sens des vagues indiquent "
             "la même chose qu'une girouette, sans instrument."),
    resume=[
        "Une girouette se construit avec du carton, une paille, une épingle "
        "et un tuteur.",
        "Étape 1 : découper la flèche et l'empennage.",
        "Étape 2 : coller la flèche sur la paille, en équilibre.",
        "Étape 3 : planter le tuteur bien droit, dans un endroit "
        "dégagé.",
        "Étape 4 : orienter la croix N-S-E-O avec le Nord trouvé à "
        "midi.",
    ],
    lexique=[("Fabriquer", "Construire un objet de ses mains."),
             ("Découper", "Détacher une forme avec des ciseaux."),
             ("Équilibre", "État d'un objet également réparti de "
              "part et d'autre de son appui."),
             ("Pivoter", "Tourner autour d'un axe."),
             ("Dominant", "Qui revient le plus souvent.")],
    exercices=[
        ("Complète avec : carton — paille — épingle — tuteur",
         ["a) La flèche se découpe dans du …… rigide.",
          "b) On la colle sur une …… ou une tige fine.",
          "c) L'…… sert d'axe, plantée dans le tuteur.",
          "d) Le …… est planté bien droit dans le sol."],
         ["a) du carton", "b) sur une paille", "c) L'épingle", "d) Le tuteur"]),
        ("Réponds par vrai ou faux.",
         ["a) La girouette doit tourner librement.",
          "b) On peut la fixer contre un mur.",
          "c) La croix s'oriente avec le Nord.",
          "d) On relève la direction chaque jour dans le carnet."],
         ["a) Vrai", "b) Faux", "c) Vrai", "d) Vrai"]),
        ("Relie chaque étape à son action.",
         ["Étape 1", "Étape 2", "Étape 3", "Étape 4"],
         ["Coller sur la paille", "Planter le tuteur", "Orienter la croix",
          "Découper la flèche"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Cite le matériel nécessaire.",
          "b) Pourquoi la girouette doit-elle tourner librement ?",
          "c) Comment oriente-t-on la croix des points cardinaux ?",
          "d) Que note-t-on dans le carnet ?"],
         ["a) Du carton, une paille, une épingle et un tuteur.",
          "b) Pour que la flèche puisse se placer face au vent.",
          "c) On place le N du côté du Nord, trouvé à midi.",
          "d) On note la date, l'heure et la direction du vent."]),
    ],
    consigne_ex5="Fabrique ta girouette, installe-la dans la cour, puis relève "
                 "pendant trois jours la direction du vent et note tes observations "
                 "dans un tableau.",
    corrige_ex5="Girouette montée et tournant librement ; tableau à trois "
                "colonnes (date, heure, direction du vent) rempli sur trois jours ; "
                "une phrase de conclusion sur le vent dominant.",
))

# ═══════════════════════════ SÉANCE 62 ═══════════════════════════
SEANCES.append(dict(
    n=62, semaine=20, titre="Lire un thermomètre",
    objectif="Apprendre à lire un thermomètre et vérifier une température.",
    materiel="Thermomètre de classe, schéma de thermomètre gradué, ardoise et "
             "craie, cahier.",
    illustration=("img_s62_a.png",
                  "Illustration — Le thermomètre et ses graduations.", 700),
    revision=[("Que mesure un thermomètre ?", "R.A. : La température."),
              ("Que fait la girouette ?",
               "R.A. : Elle indique d'où vient le vent.")],
    mes=("Comment savoir combien il fait de degrés aujourd'hui ?",
         "R.A. : En lisant un thermomètre."),
    analyse=[
        ("Dans quelle unité mesure-t-on la température ?",
         "R.A. : En degrés Celsius."),
        ("Que contient le tube du thermomètre ?",
         "R.A. : Un liquide qui monte et descend."),
        ("Que fait le liquide quand il fait chaud ?", "R.A. : Il monte."),
        ("Que fait-il quand il fait froid ?", "R.A. : Il descend."),
        ("Où place-t-on le thermomètre ?",
         "R.A. : À l'ombre et à l'abri du vent.")],
    synthese="Donc, le thermomètre mesure la température en degrés Celsius. Le "
             "liquide monte quand il fait chaud et descend quand il fait froid. On "
             "lit la graduation au sommet du liquide.",
    application=("Sur le schéma, réponds : a) Quelle est la température "
                 "lue ? b) Où s'arrête le liquide ? c) Que se passe-t-il s'il "
                 "fait plus chaud ? d) Où place-t-on l'instrument ?",
                 "a) 25 °C — b) Au niveau du trait 25 — c) Le liquide "
                 "monte — d) À l'ombre, à l'abri du vent."),
    evaluation=("1. Réponds par vrai ou faux : a) La température se mesure "
                "en degrés. b) Le liquide descend quand il fait chaud. c) On "
                "lit au sommet du liquide. d) On place le thermomètre au "
                "soleil.\n2. Explique en deux phrases comment lire un "
                "thermomètre.",
                "1. a) Vrai — b) Faux — c) Vrai — d) Faux.\n"
                "2. Exemple : « On regarde jusqu'où monte le liquide. On "
                "lit la graduation qui se trouve au sommet. »"),
    lecon_titre="Lire un thermomètre",
    sections=[
        ("1. À quoi sert un thermomètre ?",
         "Le thermomètre mesure la température, c'est-à-dire le degré de "
         "chaleur de l'air ou d'un corps. Il complète la girouette : l'une donne la "
         "direction du vent, l'autre la chaleur. Ensemble, ils permettent de "
         "décrire le temps avec des chiffres et pas seulement avec des mots."),
        ("2. Les graduations",
         "Le long du tube, des traits marquent les degrés. Les grands traits, "
         "accompagnés d'un nombre, indiquent les dizaines : 0, 10, 20, 30, 40. Les "
         "petits traits, entre deux, valent chacun un degré. L'unité est le "
         "degré Celsius, que l'on écrit °C. En dessous de zéro, les "
         "nombres deviennent négatifs : il gèle."),
        ("3. Lire la température",
         "Pour lire, on place l'œil bien en face du sommet du liquide, à "
         "la même hauteur : sinon on se trompe d'un ou deux degrés. On lit "
         "ensuite la graduation qui se trouve juste au niveau du sommet. Sur le "
         "schéma, le liquide s'arrête au trait 25 : il fait 25 °C."),
        ("4. Bien placer le thermomètre",
         "Un thermomètre se place à l'ombre et à l'abri du vent, "
         "suspendu à l'air libre mais protégé du soleil direct. Au soleil, "
         "il n'indique plus la température de l'air mais celle de son propre tube "
         "chauffé : la mesure serait fausse de plusieurs degrés. On attend "
         "aussi quelques minutes avant de lire, le temps que l'instrument "
         "s'habitue."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "Le degré Celsius doit son nom à Anders Celsius, un savant "
             "suédois qui a fixé le zéro à la température de la glace "
             "fondante et le cent à celle de l'eau bouillante."),
    resume=[
        "Le thermomètre mesure la température en degrés Celsius.",
        "Le liquide monte quand il fait chaud et descend quand il fait froid.",
        "Les grands traits marquent les dizaines, les petits les unités.",
        "On lit la graduation au sommet du liquide, l'œil à la même "
        "hauteur.",
        "On place l'instrument à l'ombre et à l'abri du vent.",
    ],
    lexique=[("Température", "Le degré de chaleur, mesuré en "
              "degrés."),
             ("Degré Celsius", "L'unité de mesure de la température, "
              "notée °C."),
             ("Graduation", "Les traits et les nombres le long du tube."),
             ("Sommet", "Le point le plus haut du liquide dans le tube."),
             ("Geler", "Descendre en dessous de zéro degré.")],
    exercices=[
        ("Complète avec : température — Celsius — monte — ombre",
         ["a) Le thermomètre mesure la ……",
          "b) L'unité est le degré ……",
          "c) Le liquide …… quand il fait chaud.",
          "d) On place l'instrument à l'……"],
         ["a) la température", "b) degré Celsius", "c) le liquide monte",
          "d) à l'ombre"]),
        ("Réponds par vrai ou faux.",
         ["a) Le liquide descend quand il fait chaud.",
          "b) On lit au sommet du liquide.",
          "c) On peut laisser le thermomètre en plein soleil.",
          "d) Les grands traits marquent les dizaines."],
         ["a) Faux", "b) Vrai", "c) Faux", "d) Vrai"]),
        ("Relie chaque action à sa raison.",
         ["Lire à hauteur d'œil", "Placer à l'ombre",
          "Attendre quelques minutes", "Lire le sommet"],
         ["Pour que l'instrument s'habitue", "Pour éviter de se tromper",
          "Pour connaître la température", "Pour ne pas chauffer le tube"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Que mesure un thermomètre ?",
          "b) Dans quelle unité ?",
          "c) Où lit-on la température ?",
          "d) Où place-t-on l'instrument ?"],
         ["a) Il mesure la température.",
          "b) En degrés Celsius, notés °C.",
          "c) On lit la graduation au sommet du liquide.",
          "d) À l'ombre et à l'abri du vent."]),
    ],
    consigne_ex5="Releve la température de la classe trois fois dans la "
                 "journée (8 h, 12 h, 16 h), note les trois valeurs dans un "
                 "tableau et dis à quel moment il fait le plus chaud.",
    corrige_ex5="Tableau à trois lignes avec les valeurs relevées et leur "
                "heure ; phrase de conclusion : la température la plus élevée "
                "se trouve en début d'après-midi.",
))

# ═══════════════════════════ SÉANCE 63 ═══════════════════════════
SEANCES.append(dict(
    n=63, semaine=20, titre="Comparer les températures d'une journée",
    objectif="Comparer les températures au cours d'une même journée.",
    materiel="Graphique des températures, relevés de la classe, ardoise et "
             "craie, cahier.",
    illustration=("img_s63_a.png",
                  "Illustration — La courbe des températures de la "
                  "journée.", 700),
    revision=[("Dans quelle unité mesure-t-on la température ?",
               "R.A. : En degrés Celsius."),
              ("Où place-t-on un thermomètre ?", "R.A. : À l'ombre.")],
    mes=("Fait-il plus chaud le matin ou l'après-midi ?",
         "R.A. : L'après-midi."),
    analyse=[
        ("À quel moment fait-il le plus frais ?",
         "R.A. : Tôt le matin, avant le lever du soleil."),
        ("À quel moment fait-il le plus chaud ?",
         "R.A. : En début d'après-midi, vers 14 h ou 15 h."),
        ("Pourquoi pas à midi pile ?",
         "R.A. : Parce que la terre met du temps à chauffer et à "
         "rendre sa chaleur."),
        ("Que fait la courbe entre 6 h et 15 h ?", "R.A. : Elle monte."),
        ("Que fait-elle ensuite ?", "R.A. : Elle redescend.")],
    synthese="Donc, la température n'est pas la même toute la journée : elle "
             "est basse le matin, monte jusqu'au début de l'après-midi, puis "
             "redescend le soir. Le graphique montre cette courbe.",
    application=("Sur le graphique, réponds : a) Quelle température à "
                 "6 h ? b) À 12 h ? c) À 15 h ? d) Quel est le moment "
                 "le plus chaud ?",
                 "a) Environ 15 °C — b) Environ 25 °C — c) Environ "
                 "28 °C — d) Vers 15 h."),
    evaluation=("1. Réponds par vrai ou faux : a) La température est "
                "constante toute la journée. b) Le maximum se place vers 14 h. "
                "c) Le minimum se place le matin. d) La courbe descend le soir.\n"
                "2. Décris la courbe d'une journée en trois phrases.",
                "1. a) Faux — b) Vrai — c) Vrai — d) Vrai.\n"
                "2. Exemple : « Le matin, la température est basse. Elle "
                "monte jusqu'au début de l'après-midi. Puis elle redescend "
                "le soir. »"),
    lecon_titre="Les températures d'une journée",
    sections=[
        ("1. La température change dans la journée",
         "La température n'est jamais constante : elle varie sans cesse. Elle est "
         "basse au lever du jour, parce que la terre a perdu toute la nuit la chaleur "
         "reçue la veille. Elle monte ensuite, à mesure que le soleil "
         "chauffe le sol, puis elle redescend quand le soleil se couche."),
        ("2. Relever à heures fixes",
         "Pour comparer, il faut relever la température toujours aux mêmes "
         "heures : 6 h, 9 h, 12 h, 15 h et 18 h par exemple. C'est ce que l'on "
         "appelle une série de mesures. Sans heures fixes, on ne peut rien "
         "comparer : une valeur isolée ne veut rien dire."),
        ("3. Lire la courbe",
         "Sur le graphique, l'axe horizontal porte les heures et l'axe vertical les "
         "températures. Chaque relevé devient un point, et les points sont "
         "reliés par une courbe. La courbe monte le matin, atteint son point le "
         "plus haut l'après-midi, puis redescend. Lire une courbe est plus "
         "rapide que lire un tableau : l'œil voit la tendance d'un seul "
         "coup d'œil."),
        ("4. Le maximum et le minimum",
         "On appelle maximum la température la plus élevée de la "
         "journée, et minimum la plus basse. Le maximum se place vers 14 h ou 15 h, "
         "et non à midi : la terre accumule la chaleur et la restitue avec un "
         "décalage, comme une marmite qui continue de chauffer après que l'on "
         "a éteint le feu. Le minimum, lui, se place juste avant le lever du "
         "soleil."),
    ],
    encadre=("vert", "Le savais-tu ?",
             "L'écart entre le maximum et le minimum s'appelle l'amplitude "
             "thermique. Elle est faible sur la côte, où l'océan "
             "régule la chaleur, et forte sur les hautes terres."),
    resume=[
        "La température change tout au long de la journée.",
        "On relève toujours aux mêmes heures pour pouvoir comparer.",
        "La courbe monte le matin et redescend le soir.",
        "Le maximum se place vers 14 h ou 15 h, pas à midi.",
        "Le minimum se place juste avant le lever du soleil.",
    ],
    lexique=[("Relevé", "Une mesure notée à un moment précis."),
             ("Courbe", "La ligne qui relie les points d'un graphique."),
             ("Maximum", "La valeur la plus élevée."),
             ("Minimum", "La valeur la plus basse."),
             ("Amplitude thermique", "L'écart entre le maximum et le "
              "minimum.")],
    exercices=[
        ("Complète avec : matin — après-midi — maximum — minimum",
         ["a) Le …… se place juste avant le lever du soleil.",
          "b) Le …… se place vers 14 h ou 15 h.",
          "c) Le …… est la valeur la plus élevée.",
          "d) Le …… est la valeur la plus basse."],
         ["a) Le minimum", "b) Le maximum", "c) Le maximum", "d) Le minimum"]),
        ("Réponds par vrai ou faux.",
         ["a) La température est constante dans la journée.",
          "b) Le maximum se place à midi pile.",
          "c) Il faut relever toujours aux mêmes heures.",
          "d) La courbe descend après 15 h."],
         ["a) Faux", "b) Faux", "c) Vrai", "d) Vrai"]),
        ("Relie chaque mot à sa définition.",
         ["Le maximum", "Le minimum", "La courbe", "L'amplitude"],
         ["La ligne du graphique", "L'écart entre les deux",
          "La valeur la plus basse", "La valeur la plus haute"]),
        ("Réponds aux questions par une phrase complète.",
         ["a) Quand fait-il le plus chaud dans la journée ?",
          "b) Pourquoi pas à midi pile ?",
          "c) Comment doit-on relever les températures ?",
          "d) Qu'appelle-t-on l'amplitude thermique ?"],
         ["a) Vers 14 h ou 15 h.",
          "b) Parce que la terre restitue sa chaleur avec un décalage.",
          "c) On relève toujours aux mêmes heures.",
          "d) C'est l'écart entre le maximum et le minimum."]),
    ],
    consigne_ex5="Releve la température de la classe à 8 h, 11 h, 14 h et "
                 "17 h, puis trace la courbe sur un graphique et indique le maximum "
                 "et le minimum.",
    corrige_ex5="Quatre points placés aux bonnes heures, courbe qui relie les "
                "points en montant puis en descendant, flèche sur le point le plus "
                "haut (maximum) et sur le plus bas (minimum).",
))
