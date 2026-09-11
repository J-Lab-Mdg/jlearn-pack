# -*- coding: utf-8 -*-
"""Séance 1 (pilote validé) — même structure que `contenu_t1.py`, titre en forme nominale."""

S1 = dict(
    n=1, semaine=1, titre="Le trajet du soleil dans la journée",
    objectif="Observer le trajet du soleil du matin au soir pour énumérer les points cardinaux.",
    materiel="Schéma du lever et du coucher du soleil, schéma du trajet du soleil, schéma des "
             "ombres, cour de l'école, ardoise et craie, cahier.",
    revision=[("Quand tu es arrivé à l'école ce matin, l'ombre du mât de drapeau était-elle "
               "longue ou courte ?", "R.A. : Elle était longue."),
              ("La porte de la classe se trouve-t-elle devant toi, derrière toi ou sur le côté ?",
               "R.A. : Derrière moi. (réponse selon la classe)")],
    mes=("Le matin, quand vous marchez vers l'école, qu'est-ce qui vous éclaire et vous "
         "réchauffe ?", "R.A. : Le soleil."),
    analyse=[
        ("Le matin, de quel côté le soleil apparaît-il dans le ciel ?",
         "R.A. : Il apparaît du côté où il se lève, à l'Est."),
        ("Le soir, de quel côté le soleil disparaît-il ?",
         "R.A. : Il disparaît du côté opposé, à l'Ouest."),
        ("À midi, le soleil est-il bas dans le ciel ou au-dessus de nous ?",
         "R.A. : À midi, il est haut dans le ciel, au-dessus de nous."),
        ("Que devient l'ombre du mât de drapeau entre le matin et le midi ?",
         "R.A. : Elle est longue le matin, puis elle devient courte à midi."),
        ("Où se trouve l'ombre de Rova le soir : du côté de l'Est ou de l'Ouest ?",
         "R.A. : Du côté de l'Est, car le soleil est à l'Ouest et l'ombre est toujours à "
         "l'opposé du soleil.")],
    synthese="Donc, chaque jour le soleil se lève à l'Est, monte dans le ciel, passe au-dessus "
             "de nous à midi, puis descend et se couche à l'Ouest le soir. Notre ombre est "
             "longue le matin et le soir, et courte à midi : elle est toujours du côté opposé "
             "au soleil.",
    application=("1. Complète avec les mots proposés : Est — Ouest — courte — longue\n"
                 "a) Le matin, le soleil se lève à l'…\n"
                 "b) Le soir, le soleil se couche à l'…\n"
                 "c) À midi, notre ombre est …\n"
                 "d) Le matin, notre ombre est …\n"
                 "2. Observe le schéma des ombres et réponds : à quel moment de la journée "
                 "l'ombre de l'enfant est-elle la plus courte ?",
                 "1. a) à l'Est — b) à l'Ouest — c) courte — d) longue\n"
                 "2. R.A. : À midi, parce que le soleil est alors au-dessus de nous."),
    evaluation=("1. Réponds par vrai ou faux.\n"
                "a) Le soleil se lève à l'Ouest.\n"
                "b) Le soleil se couche à l'Ouest.\n"
                "c) À midi, notre ombre est plus courte que le matin.\n"
                "d) Le soir, le soleil se trouve du même côté que le matin.\n"
                "2. Dessine sur ton ardoise le trajet du soleil du matin au soir.",
                "1. a) Faux — b) Vrai — c) Vrai — d) Faux\n"
                "2. Un arc qui part de l'Est, monte, passe au-dessus de nous à midi, puis "
                "descend vers l'Ouest."),
    lecon_titre="Le trajet du soleil",
    sections=[
        ("1. Le soleil se lève à l'Est",
         "Chaque matin, le soleil apparaît dans le ciel du même côté : on appelle ce côté "
         "l'Est. C'est le lever du soleil. Quand Rova part à l'école tôt le matin, le soleil "
         "est encore bas et il éclaire son dos : son ombre est longue et elle s'étire devant "
         "elle, vers l'Ouest. Le soleil semble monter au-dessus de la colline, mais en réalité "
         "c'est la Terre qui tourne.\n"
         "Retiens bien ceci : l'Est, c'est le côté où le soleil se lève. C'est le premier "
         "repère que les gens de nos campagnes utilisent depuis toujours pour se diriger dans "
         "les rizières et sur les pistes, bien avant d'avoir une boussole.",
         ("img_s01_c.png", "Figure 1 — Le soleil se lève du côté de l'Est et se couche du "
                           "côté de l'Ouest.", 600)),
        ("2. Le soleil monte dans le ciel",
         "Après le lever, le soleil monte peu à peu. Vers midi, il est haut dans le ciel, "
         "presque au-dessus de notre tête. À ce moment-là, ses rayons tombent presque à la "
         "verticale : notre ombre est courte, ramassée à nos pieds. C'est le moment de la "
         "journée où il fait le plus chaud, car le soleil chauffe la terre depuis plusieurs "
         "heures.",
         ("img_s01_b.png", "Figure 2 — L'ombre d'un enfant le matin, à midi et le soir.", 620)),
        ("3. Le soleil se couche à l'Ouest",
         "L'après-midi, le soleil redescend du côté opposé à celui du matin. Le soir, il "
         "disparaît derrière l'horizon : c'est le coucher du soleil, et ce côté s'appelle "
         "l'Ouest. Au moment du coucher, l'ombre redevient longue, mais cette fois elle pointe "
         "vers l'Est, à l'opposé du soleil. Quand Koto rentre des champs le soir, son ombre "
         "est longue devant lui.", None),
        ("4. L'ombre nous renseigne",
         "L'ombre est toujours du côté opposé au soleil. C'est une règle très utile : si le "
         "soleil est à l'Est, l'ombre va vers l'Ouest ; si le soleil est à l'Ouest, l'ombre "
         "va vers l'Est. Le matin et le soir, le soleil est bas : l'ombre est longue. À midi, "
         "le soleil est haut : l'ombre est courte. En observant seulement son ombre, on peut "
         "donc savoir à peu près quelle heure il est et de quel côté se trouve le soleil.",
         None),
        ("5. Pourquoi repérer le trajet du soleil ?",
         "Connaître le lever et le coucher du soleil permet de trouver l'Est et l'Ouest sans "
         "instrument. Une fois qu'on connaît l'Est et l'Ouest, on peut en déduire le Nord et le "
         "Sud, donc se diriger dans le village, dans la forêt ou sur une piste. C'est la "
         "première leçon du repérage : avant de savoir lire un plan, il faut savoir se repérer "
         "dehors.",
         ("img_s01_a.png", "Figure 3 — Le trajet du soleil, du lever à l'Est jusqu'au "
                           "coucher à l'Ouest.", 640)),
    ],
    encadre=[("vert", "Le savais-tu ?",
              "À Madagascar, le soleil ne se lève pas exactement à l'Est tous les jours de "
              "l'année : selon la saison, il se lève un peu plus au nord ou un peu plus au sud. "
              "Mais il se lève toujours du côté de l'Est, et il se couche toujours du côté de "
              "l'Ouest."),
             ("rouge", "Attention !",
              "Ne regarde jamais le soleil en face, même un court instant : cela peut blesser "
              "tes yeux gravement. Pour observer le trajet du soleil, on regarde son ombre ou "
              "le sol autour de soi, jamais le soleil lui-même.")],
    resume=[
        "Chaque jour, le soleil se lève du côté de l'Est et il se couche du côté de l'Ouest.",
        "Entre le lever et le coucher, il monte dans le ciel : à midi, il est haut, au-dessus "
        "de nous.",
        "Notre ombre est toujours du côté opposé au soleil : elle est longue le matin et le "
        "soir, courte à midi.",
        "Le lever et le coucher du soleil donnent donc les directions de l'Est et de l'Ouest "
        "sans aucun instrument.",
        "Savoir repérer le trajet du soleil est la première étape pour se diriger dans le "
        "village, sur une piste ou dans la forêt.",
    ],
    lexique=[("Est", "Le côté du ciel où le soleil se lève le matin."),
             ("Ouest", "Le côté du ciel où le soleil se couche le soir."),
             ("Lever du soleil", "Le moment du matin où le soleil apparaît à l'horizon."),
             ("Coucher du soleil", "Le moment du soir où le soleil disparaît à l'horizon."),
             ("Ombre", "La partie sombre qu'un objet, un arbre ou une personne fait sur le sol "
                       "quand le soleil l'éclaire. Elle est toujours du côté opposé au soleil."),
             ("Midi", "Le moment de la journée où le soleil est le plus haut dans le ciel."),
             ("Se repérer", "Savoir de quel côté on se trouve et dans quelle direction aller.")],
    exercices=[
        ("Complète avec les mots proposés : Est — Ouest — courte — longue",
         ["a) Le matin, le soleil se lève à l'………", "b) Le soir, le soleil se couche à l'………",
          "c) À midi, notre ombre est ………", "d) Le matin, notre ombre est ………"],
         ["a) à l'Est", "b) à l'Ouest", "c) courte", "d) longue"]),
        ("Réponds par vrai ou faux.",
         ["a) Le soleil se lève à l'Ouest.",
          "b) Le soir, le soleil se couche du côté de l'Ouest.",
          "c) À midi, le soleil est bas dans le ciel.",
          "d) Le matin et le soir, notre ombre est longue."],
         ["a) Faux — le soleil se lève à l'Est.",
          "b) Vrai — il se couche du côté de l'Ouest.",
          "c) Faux — à midi, le soleil est haut dans le ciel.",
          "d) Vrai — l'ombre est longue le matin et le soir."]),
        ("Relie chaque moment de la journée à la position du soleil.",
         ["Le matin", "À midi", "L'après-midi", "Le soir"],
         ["Le soleil est bas, du côté de l'Est.", "Le soleil est haut, au-dessus de nous.",
          "Le soleil descend vers l'Ouest.", "Le soleil est bas, du côté de l'Ouest."]),
        ("Réponds aux questions par une phrase complète.",
         ["a) De quel côté le soleil se lève-t-il ?", "b) De quel côté le soleil se couche-t-il ?",
          "c) Quand notre ombre est-elle la plus courte ?",
          "d) Où se trouve l'ombre quand le soleil est à l'Est ?"],
         ["a) Le soleil se lève à l'Est.", "b) Le soleil se couche à l'Ouest.",
          "c) Notre ombre est la plus courte à midi.",
          "d) Quand le soleil est à l'Est, l'ombre se trouve du côté de l'Ouest."]),
    ],
    figure_ex=("img_s01_d.png", "Figure 4 — La rose des vents.", 460),
    consigne_ex5="Observe le schéma ci-dessous puis écris le nom des quatre points cardinaux à "
                 "la bonne place.",
    corrige_ex5="En haut : le Nord — en bas : le Sud — à droite : l'Est — à gauche : "
                "l'Ouest. L'Est est donc du côté où le soleil se lève.",
)
