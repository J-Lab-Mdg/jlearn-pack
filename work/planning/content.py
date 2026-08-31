# -*- coding: utf-8 -*-
# Each entry: key = tuple of existing item texts (signature), value = dict with
#   'new_ens': list of new ENS item-line strings (without leading number, will be numbered continuing)
#   'new_app': list of new corrigé strings (matching)
# Numbers will continue after len(existing items).
# NOTE: all Vrai/Faux logical answers below were carefully re-verified for correctness.

DATA = {}

def add(sig, new_ens, new_app):
    DATA[sig] = {'new_ens': new_ens, 'new_app': new_app}

# S1 - number reading QCM
add(
    ("1. 3 529 se lit :   a) trois mille cinq cent trente   b) trois mille six cent vingt-neuf   c) trois mille cinq cent vingt-huit   d) trois mille cinq cent vingt-neuf",),
    [
        "8 042 se lit :   a) huit mille quarante-deux   b) huit mille quatre cent deux   c) huit cent quarante-deux   d) huit mille quatre",
        "« Six mille trois cents » s'écrit :   a) 6 300   b) 6 030   c) 630   d) 63 000",
        "Dans 7 205, le chiffre des centaines est :   a) 7   b) 2   c) 0   d) 5",
    ],
    ["a) huit mille quarante-deux", "a) 6 300", "b) 2"],
)

# S2 App - addition QCM
add(
    ("1. 5 225 + 19 = ?   a) 5 236   b) 5 252   c) 5 244   d) 5 261",),
    [
        "3 408 + 46 = ?   a) 3 444   b) 3 454   c) 3 464   d) 3 408",
        "6 072 + 128 = ?   a) 6 190   b) 6 200   c) 6 210   d) 6 100",
        "9 815 + 85 = ?   a) 9 890   b) 9 800   c) 9 900   d) 9 910",
    ],
    ["b) 3 454", "b) 6 200", "c) 9 900"],
)

# S2 Eval - Vrai/Faux addition
add(
    ("1. Dans une addition, l'ordre des termes ne change pas le résultat.", "2. Le résultat d'une addition s'appelle un produit."),
    [
        "On peut additionner plus de deux nombres à la fois.",
        "Ajouter zéro à un nombre ne change pas ce nombre.",
    ],
    ["Vrai", "Vrai"],
)

# S3 App - soustraction QCM
add(
    ("1. 473 − 3 = ?   a) 484   b) 465   c) 473   d) 470",),
    [
        "958 − 8 = ?   a) 950   b) 966   c) 940   d) 958",
        "621 − 21 = ?   a) 642   b) 600   c) 610   d) 599",
        "347 − 47 = ?   a) 400   b) 294   c) 300   d) 390",
    ],
    ["a) 950", "b) 600", "c) 300"],
)

# S3 Eval - Vrai/Faux soustraction
add(
    ("1. Dans une soustraction, on peut intervertir les deux termes sans changer le résultat.", "2. On vérifie une soustraction en additionnant la différence au nombre soustrait."),
    [
        "Le résultat d'une soustraction s'appelle une différence.",
        "Soustraire zéro à un nombre ne change pas ce nombre.",
    ],
    ["Vrai", "Vrai"],
)

# S4 Eval - Vrai/Faux géométrie (droites/segments)
add(
    ("1. Le segment de droite a une longueur mesurable.", "2. Toutes les demi-droites ont deux extrémités."),
    [
        "Une droite n'a ni début ni fin.",
        "Une demi-droite a une seule extrémité, appelée origine.",
    ],
    ["Vrai", "Vrai"],
)

# S5 App - unité longueur QCM
add(
    ("1. L'unité principale de longueur est :   a) le gramme   b) le mètre   c) le litre   d) le franc",),
    [
        "Pour mesurer la longueur d'un crayon, on utilise le plus souvent :   a) le mètre   b) le centimètre   c) le kilomètre   d) le litre",
        "1 mètre équivaut à :   a) 10 centimètres   b) 100 centimètres   c) 1 000 centimètres   d) 1 centimètre",
        "Pour mesurer la distance entre deux villes, on utilise plutôt :   a) le centimètre   b) le millimètre   c) le kilomètre   d) le gramme",
    ],
    ["b) le centimètre", "b) 100 centimètres", "c) le kilomètre"],
)

# S5 Eval - Vrai/Faux longueurs
add(
    ("1. 1 km = 1 000 m.", "2. Pour passer du mètre au centimètre, on divise par 100."),
    [
        "1 m = 100 cm.",
        "Pour passer du kilomètre au mètre, on multiplie par 1 000.",
    ],
    ["Vrai", "Vrai"],
)

# S6 Eval - grand nombre QCM
add(
    ("1. 981 536 se lit :   a) neuf-cent-quatre-vingt-un mille six-cent-trente-six   b) neuf-cent-quatre-vingt-un mille cinq-cent-trente-sept   c) neuf-cent-quatre-vingt-un mille cinq-cent-trente-six   d) neuf-cent-quatre-vingt-un mille cinq-cent-trente-cinq",),
    [
        "« Sept-cent-douze mille quatre-cent-huit » s'écrit :   a) 712 480   b) 712 408   c) 721 408   d) 712 048",
        "Dans 456 789, le chiffre des dizaines de mille est :   a) 4   b) 5   c) 6   d) 7",
        "624 903 se lit :   a) six-cent-vingt-quatre mille neuf-cent-trois   b) six-cent-vingt-quatre mille neuf-cent-treize   c) six-cent-vingt-quatre mille neuf-cent-trente   d) six-cent-deux mille neuf-cent-trois",
    ],
    ["b) 712 408", "b) 5", "a) six-cent-vingt-quatre mille neuf-cent-trois"],
)

# S7 App - multiplication QCM
add(
    ("1. 54 × 12 = ?   a) 643   b) 658   c) 648   d) 656",),
    [
        "24 × 6 = ?   a) 124   b) 144   c) 134   d) 154",
        "37 × 9 = ?   a) 323   b) 343   c) 333   d) 313",
        "18 × 15 = ?   a) 260   b) 270   c) 280   d) 290",
    ],
    ["b) 144", "c) 333", "b) 270"],
)

# S7 Eval - Vrai/Faux multiplication
add(
    ("1. Multiplier un nombre par 1 ne change pas ce nombre.", "2. Le résultat d'une multiplication s'appelle une différence."),
    [
        "Multiplier un nombre par 0 donne toujours 0.",
        "On peut changer l'ordre des facteurs sans changer le résultat.",
    ],
    ["Vrai", "Vrai"],
)

# S8 App - division QCM
add(
    ("1. 76 ÷ 17 = ? (quotient entier)   a) 4   b) 7   c) 17   d) 15",),
    [
        "144 ÷ 12 = ?   a) 10   b) 11   c) 12   d) 14",
        "95 ÷ 9 = ? (quotient entier)   a) 9   b) 10   c) 11   d) 8",
        "63 ÷ 7 = ?   a) 8   b) 9   c) 7   d) 10",
    ],
    ["c) 12", "b) 10", "b) 9"],
)

# S8 Eval - Vrai/Faux division
add(
    ("1. Dans une division, le reste est toujours plus petit que le diviseur.", "2. Diviser par zéro est possible."),
    [
        "Le résultat d'une division s'appelle un quotient.",
        "Quand le reste est nul, la division est dite exacte.",
    ],
    ["Vrai", "Vrai"],
)

# S9 App exo#0 - QCM rectangle/carré (only 2 items, need 2 more)
add(
    ("1. Le rectangle a pour propriété :   a) 4 côtés, 4 angles droits, côtés opposés égaux deux à deux   b) 4 côtés égaux, 4 angles droits   c) 3 côtés   d) aucun angle",
     "2. Le carré a pour propriété :   a) 4 côtés, 4 angles droits, côtés opposés égaux deux à deux   b) 4 côtés égaux, 4 angles droits   c) un seul côté   d) 5 angles"),
    [
        "Un rectangle a ses diagonales :   a) perpendiculaires   b) de même longueur   c) inégales   d) inexistantes",
        "Le carré est un cas particulier de :   a) triangle   b) rectangle   c) cercle   d) trapèze",
    ],
    ["b) de même longueur", "b) rectangle"],
)

# S9 Eval - Vrai/Faux rectangle/carré (2 items)
add(
    ("1. Le rectangle : 4 côtés, 4 angles droits, côtés opposés égaux deux à deux.", "2. Le carré a 3 côtés."),
    [
        "Le carré a 4 côtés égaux et 4 angles droits.",
        "Dans un rectangle, les côtés opposés sont parallèles.",
    ],
    ["Vrai", "Vrai"],
)

# S10 App - unité masse QCM
add(
    ("1. L'unité principale de masse est :   a) le mètre   b) le kilogramme   c) le litre   d) le degré",),
    [
        "Pour peser un sac de riz, on utilise le plus souvent :   a) le gramme   b) le kilogramme   c) le litre   d) le mètre",
        "1 kilogramme équivaut à :   a) 10 grammes   b) 100 grammes   c) 1 000 grammes   d) 1 gramme",
        "Pour peser un médicament, on utilise plutôt :   a) le gramme   b) le kilogramme   c) la tonne   d) le litre",
    ],
    ["b) le kilogramme", "c) 1 000 grammes", "a) le gramme"],
)

# S10 Eval - Vrai/Faux masse
add(
    ("1. 1 kg = 1 000 g.", "2. La balance Roberval est en équilibre quand un plateau est plus bas que l'autre."),
    [
        "La balance Roberval est en équilibre quand les deux plateaux sont à la même hauteur.",
        "On utilise des masses marquées pour peser avec la balance Roberval.",
    ],
    ["Vrai", "Vrai"],
)

# S11 Eval - grand nombre QCM
add(
    ("1. 930 248 se lit :   a) neuf-cent-trente mille deux-cent-quarante-neuf   b) neuf-cent-trente mille deux-cent-quarante-huit   c) neuf-cent-trente mille deux-cent-quarante-sept   d) neuf-cent-trente mille trois-cent-quarante-huit",),
    [
        "« Cinq-cent-quatre mille douze » s'écrit :   a) 504 012   b) 540 012   c) 504 120   d) 514 012",
        "Dans 372 691, le chiffre des unités de mille est :   a) 3   b) 7   c) 2   d) 6",
        "815 004 se lit :   a) huit-cent-quinze mille quatre   b) huit-cent-quinze mille quarante   c) huit-cent-cinq mille quatre   d) huit-cent-quinze mille quatorze",
    ],
    ["a) 504 012", "c) 2", "a) huit-cent-quinze mille quatre"],
)

# S12 Eval - Vrai/Faux décimaux
add(
    ("1. Dans l'écriture à virgule, la virgule sépare la partie entière de la partie décimale.", "2. Pour comparer deux décimaux, on compare seulement la partie décimale."),
    [
        "Pour comparer deux décimaux, on compare d'abord la partie entière.",
        "3,50 et 3,5 représentent le même nombre.",
    ],
    ["Vrai", "Vrai"],
)

# S13/S17 Eval - Vrai/Faux virgule calcul (identical signature, used twice)
add(
    ("1. Il faut toujours aligner les virgules avant de calculer.", "2. On peut ignorer la virgule pendant le calcul et la replacer n'importe où à la fin."),
    [
        "Pour additionner des nombres décimaux, on aligne les virgules les unes sous les autres.",
        "La virgule doit être replacée à sa juste position dans le résultat, pas n'importe où.",
    ],
    ["Vrai", "Vrai"],
)

# S14 App - triangle QCM
add(
    ("1. Combien de côtés a un triangle ?   a) 3   b) 4   c) 5   d) 6",),
    [
        "Un triangle possède :   a) 2 angles   b) 3 angles   c) 4 angles   d) 5 angles",
        "Un triangle dont les 3 côtés sont égaux est appelé :   a) rectangle   b) isocèle   c) équilatéral   d) trapèze",
        "La somme des angles d'un triangle vaut :   a) 90°   b) 180°   c) 270°   d) 360°",
    ],
    ["b) 3 angles", "c) équilatéral", "b) 180°"],
)

# S14 Eval - Vrai/Faux triangle
add(
    ("1. Le triangle a pour propriété : 3 côtés, 3 angles.", "2. L'aire d'une figure se mesure en centimètres."),
    [
        "L'aire d'une figure se mesure en centimètres carrés (cm²).",
        "Un triangle équilatéral a ses 3 côtés de même longueur.",
    ],
    ["Vrai — l'aire se mesure en unités carrées (cm², m², etc.), pas en centimètres simples.", "Vrai"],
)

# S15 App - Vrai/Faux droites (2 items already)
add(
    ("1. Deux droites perpendiculaires sont toujours sécantes.", "2. Deux droites parallèles peuvent se croiser très loin."),
    [
        "Deux droites perpendiculaires se coupent en formant un angle droit.",
        "Deux droites parallèles ne se croisent jamais, même très loin.",
    ],
    ["Vrai", "Vrai — c'est justement la définition de deux droites parallèles : elles ne se rencontrent jamais."],
)

# S15 Eval exo#0 - QCM angles/droites sécantes (2 items)
add(
    ("1. L'angle formé par deux droites perpendiculaires mesure :   a) 45°   b) 90°   c) 180°   d) 60°",
     "2. Deux droites sécantes se coupent en :   a) 0 point   b) 1 point   c) 2 points   d) une infinité de points"),
    [
        "Deux droites parallèles se coupent en :   a) 0 point   b) 1 point   c) 2 points   d) une infinité de points",
        "Un angle droit se note par un petit carré au sommet :   a) vrai   b) faux   c) parfois   d) jamais",
    ],
    ["a) 0 point", "a) vrai"],
)

# S15 Eval exo#1 - Vrai/Faux droites sécantes/parallèles
add(
    ("1. Toutes les droites sécantes sont perpendiculaires.", "2. Deux droites parallèles restent à égale distance l'une de l'autre."),
    [
        "Des droites sécantes non perpendiculaires forment des angles différents de 90°.",
        "Deux droites confondues ont tous leurs points communs.",
    ],
    ["Vrai", "Vrai"],
)

# S16 Eval - grand nombre QCM (millions)
add(
    ("1. 6 966 874 se lit :   a) six millions neuf-cent-soixante-six mille huit-cent-soixante-quatorze   b) six millions neuf-cent-soixante-six mille neuf-cent-soixante-quatorze   c) six millions neuf-cent-soixante-six mille huit-cent-soixante-treize   d) six millions neuf-cent-soixante-six mille huit-cent-soixante-quinze",),
    [
        "« Trois millions deux-cent mille dix » s'écrit :   a) 3 200 010   b) 3 020 010   c) 3 200 100   d) 32 000 10",
        "Dans 4 582 917, le chiffre des centaines de mille est :   a) 4   b) 5   c) 8   d) 2",
        "1 000 000 s'écrit en chiffres :   a) 100 000   b) 1 000 000   c) 10 000 000   d) 100 000 000",
    ],
    ["a) 3 200 010", "b) 5", "b) 1 000 000"],
)

# S18 Eval - Vrai/Faux fractions
add(
    ("1. On peut simplifier une fraction en divisant seulement le numérateur.", "2. Deux fractions équivalentes représentent la même quantité."),
    [
        "Pour simplifier une fraction, on divise le numérateur ET le dénominateur par un même nombre.",
        "1/2 et 2/4 sont des fractions équivalentes.",
    ],
    ["Vrai", "Vrai"],
)

# S19/S25 App - prix de revient QCM
add(
    ("1. Le prix de revient se calcule par :   a) Prix d'achat − Frais   b) Prix d'achat + Frais   c) Prix de vente − Frais   d) Prix de vente + Frais",),
    [
        "Si un objet est acheté 8 000 Ar avec 500 Ar de frais de transport, le prix de revient est :   a) 7 500 Ar   b) 8 500 Ar   c) 8 000 Ar   d) 9 000 Ar",
        "Le prix de vente doit normalement être :   a) inférieur au prix de revient   b) supérieur au prix de revient   c) égal à zéro   d) sans rapport avec le prix de revient",
        "Les frais de transport font partie :   a) du prix de vente   b) du prix de revient   c) du bénéfice   d) de la perte",
    ],
    ["b) 8 500 Ar", "b) supérieur au prix de revient", "b) du prix de revient"],
)

# S19/S25 Eval - Vrai/Faux bénéfice
add(
    ("1. Il y a bénéfice quand le prix de vente dépasse le prix de revient.", "2. La perte se produit quand le prix de vente dépasse le prix de revient."),
    [
        "La perte se produit quand le prix de revient dépasse le prix de vente.",
        "Le bénéfice se calcule par : Prix de vente − Prix de revient.",
    ],
    ["Vrai", "Vrai"],
)

# S20 App exo#0 - QCM parallélogramme/losange (2 items)
add(
    ("1. Le parallélogramme a pour propriété :   a) 4 côtés, côtés opposés parallèles et égaux   b) 4 côtés égaux, diagonales perpendiculaires   c) 3 côtés   d) aucun angle",
     "2. Le losange a pour propriété :   a) 4 côtés, côtés opposés parallèles et égaux   b) 4 côtés égaux, diagonales perpendiculaires   c) un seul côté   d) 5 angles"),
    [
        "Dans un parallélogramme, les côtés opposés sont :   a) perpendiculaires   b) parallèles et de même longueur   c) inégaux   d) inexistants",
        "Le losange est un parallélogramme dont :   a) tous les côtés sont égaux   b) tous les angles sont droits   c) il n'a que 3 côtés   d) les diagonales sont inégales",
    ],
    ["b) parallèles et de même longueur", "a) tous les côtés sont égaux"],
)

# S20 Eval - Vrai/Faux parallélogramme/losange
add(
    ("1. Le parallélogramme : 4 côtés, côtés opposés parallèles et égaux.", "2. Le losange a 3 côtés."),
    [
        "Le losange a 4 côtés égaux.",
        "Les diagonales d'un losange se coupent perpendiculairement.",
    ],
    ["Vrai", "Vrai"],
)

# S21 App exo#0 - QCM rapporteur/angle (2 items)
add(
    ("1. Le rapporteur sert à :   a) tracer des cercles   b) mesurer des angles   c) mesurer des longueurs   d) peser des objets",
     "2. Un angle de 30° est :   a) un angle aigu   b) un angle nul   c) un angle plat de 180°   d) impossible à tracer"),
    [
        "Un angle de 90° est appelé :   a) angle aigu   b) angle droit   c) angle obtus   d) angle plat",
        "Un angle de 120° est :   a) aigu   b) droit   c) obtus   d) nul",
    ],
    ["b) angle droit", "c) obtus"],
)

# S21 App exo#1 - Vrai/Faux rapporteur
add(
    ("1. On place le centre du rapporteur sur le sommet de l'angle.", "2. Un angle se mesure avec une règle graduée."),
    [
        "On aligne un côté de l'angle avec la ligne de référence (0°) du rapporteur.",
        "Le rapporteur est gradué de 0° à 180°.",
    ],
    ["Vrai", "Vrai"],
)

# S21 Eval exo#0 - QCM construire angle
add(
    ("1. Pour construire un angle, on doit connaître :   a) sa couleur   b) sa mesure en degrés   c) sa longueur en cm   d) son poids",
     "2. Le zéro du rapporteur se place :   a) au sommet de l'angle   b) sur un des côtés de l'angle, au niveau du sommet   c) n'importe où   d) à l'extérieur de l'angle"),
    [
        "Un angle de 180° est appelé :   a) angle droit   b) angle aigu   c) angle plat   d) angle nul",
        "Pour construire un angle de 45°, on a besoin :   a) d'une règle seulement   b) d'un rapporteur et d'une règle   c) d'un compas seulement   d) de rien",
    ],
    ["c) angle plat", "b) d'un rapporteur et d'une règle"],
)

# S21 Eval exo#1 - Vrai/Faux angles
add(
    ("1. Deux angles peuvent avoir la même mesure sans être superposables au premier coup d'œil.", "2. Le rapporteur ne sert qu'à tracer des angles, jamais à les mesurer."),
    [
        "Le rapporteur sert à la fois à mesurer et à construire des angles.",
        "Un angle nul mesure 0°.",
    ],
    ["Vrai", "Vrai"],
)

# S22/S27/S31 App - unité capacité QCM
add(
    ("1. L'unité principale de capacité est :   a) le litre   b) le mètre   c) le kilogramme   d) le franc",),
    [
        "Pour mesurer la quantité d'eau dans une bouteille, on utilise :   a) le mètre   b) le litre   c) le kilogramme   d) le franc",
        "1 litre équivaut à :   a) 10 millilitres   b) 100 millilitres   c) 1 000 millilitres   d) 1 millilitre",
        "Pour mesurer une petite quantité de sirop, on utilise plutôt :   a) le litre   b) le centilitre   c) le kilomètre   d) le kilogramme",
    ],
    ["b) le litre", "c) 1 000 millilitres", "b) le centilitre"],
)

# S22/S27/S31 Eval - Vrai/Faux capacité
add(
    ("1. 1 l = 1 000 ml.", "2. On ne peut jamais estimer une capacité sans instrument."),
    [
        "On peut estimer une capacité approximativement avant de la mesurer précisément.",
        "1 l = 100 cl.",
    ],
    ["Vrai — une estimation approximative reste possible, mais la mesure précise nécessite un instrument.", "Vrai"],
)

# S23 Eval - grand nombre (millions) QCM
add(
    ("1. 47 383 507 se lit :   a) quarante-sept millions trois-cent-quatre-vingt-trois mille cinq-cent-huit   b) quarante-sept millions trois-cent-quatre-vingt-trois mille cinq-cent-sept   c) quarante-sept millions trois-cent-quatre-vingt-trois mille six-cent-sept   d) quarante-sept millions trois-cent-quatre-vingt-trois mille cinq-cent-six",),
    [
        "« Douze millions cent mille » s'écrit :   a) 12 100 000   b) 12 010 000   c) 1 210 000   d) 12 001 000",
        "Dans 58 274 391, le chiffre des millions est :   a) 5   b) 8   c) 2   d) 7",
        "9 000 000 se lit :   a) neuf-cent-mille   b) neuf millions   c) neuf-cent-millions   d) neuf mille",
    ],
    ["a) 12 100 000", "b) 8", "b) neuf millions"],
)

# S26 App - trapèze QCM
add(
    ("1. Combien de côtés a un trapèze ?   a) 3   b) 4   c) 5   d) 6",),
    [
        "Un trapèze possède :   a) 1 paire de côtés parallèles   b) 2 paires de côtés parallèles   c) aucun côté parallèle   d) 4 côtés égaux",
        "Les côtés parallèles d'un trapèze sont appelés :   a) les diagonales   b) les bases   c) les hauteurs   d) les sommets",
        "L'aire d'un trapèze se calcule par :   a) (grande base + petite base) × hauteur ÷ 2   b) côté × côté   c) base × hauteur   d) côté × 4",
    ],
    ["a) 1 paire de côtés parallèles", "b) les bases", "a) (grande base + petite base) × hauteur ÷ 2"],
)

# S26 Eval - Vrai/Faux trapèze
add(
    ("1. Le trapèze a pour propriété : 4 côtés, deux côtés parallèles (les bases).", "2. L'aire d'une figure se mesure en centimètres."),
    [
        "L'aire d'une figure se mesure en centimètres carrés (cm²).",
        "Un trapèze a exactement une paire de côtés parallèles.",
    ],
    ["Vrai — l'aire se mesure en unités carrées (cm², m², etc.), pas en centimètres simples.", "Vrai"],
)

# S28 Eval - grand nombre QCM
add(
    ("1. 62 161 151 se lit :   a) soixante-deux millions cent-soixante-et-un mille cent-cinquante-deux   b) soixante-deux millions cent-soixante-et-un mille deux-cent-cinquante-et-un   c) soixante-deux millions cent-soixante-et-un mille cent-cinquante   d) soixante-deux millions cent-soixante-et-un mille cent-cinquante-et-un",),
    [
        "« Vingt-cinq millions mille » s'écrit :   a) 25 001 000   b) 25 000 100   c) 25 010 000   d) 2 501 000",
        "Dans 73 942 618, le chiffre des dizaines de millions est :   a) 7   b) 3   c) 9   d) 4",
        "18 000 000 se lit :   a) dix-huit-cent mille   b) dix-huit millions   c) cent-quatre-vingt millions   d) dix-huit mille",
    ],
    ["a) 25 001 000", "a) 7", "b) dix-huit millions"],
)

# S30 App - cercle QCM
add(
    ("1. Le cercle est :   a) une surface   b) un contour   c) un solide   d) un angle",),
    [
        "Le disque est :   a) le contour du cercle   b) la surface intérieure du cercle   c) un angle   d) une droite",
        "Le rayon relie :   a) deux points quelconques du cercle   b) le centre à un point du cercle   c) deux centres différents   d) rien du tout",
        "Le diamètre est égal à :   a) rayon × 2   b) rayon ÷ 2   c) rayon + 1   d) rayon × rayon",
    ],
    ["b) la surface intérieure du cercle", "b) le centre à un point du cercle", "a) rayon × 2"],
)

# S30 Eval - Vrai/Faux cercle
add(
    ("1. Le disque est la surface intérieure du cercle.", "2. Le rayon relie deux points quelconques du cercle."),
    [
        "Le rayon relie le centre du cercle à un point du cercle.",
        "Le diamètre passe par le centre du cercle.",
    ],
    ["Vrai — le rayon relie le centre à un point du cercle, pas deux points quelconques du cercle.", "Vrai"],
)

# S32 Eval - grand nombre QCM
add(
    ("1. 801 834 176 se lit :   a) huit-cent-un millions huit-cent-trente-quatre mille deux-cent-soixante-seize   b) huit-cent-un millions huit-cent-trente-quatre mille cent-soixante-seize   c) huit-cent-un millions huit-cent-trente-quatre mille cent-soixante-dix-sept   d) huit-cent-un millions huit-cent-trente-quatre mille cent-soixante-quinze",),
    [
        "« Deux-cent millions cinquante mille » s'écrit :   a) 200 050 000   b) 200 500 000   c) 20 050 000   d) 200 005 000",
        "Dans 456 789 123, le chiffre des centaines de millions est :   a) 4   b) 5   c) 6   d) 7",
        "1 milliard s'écrit :   a) 100 000 000   b) 1 000 000 000   c) 10 000 000   d) 1 000 000",
    ],
    ["a) 200 050 000", "a) 4", "b) 1 000 000 000"],
)

# S33 App - économie QCM
add(
    ("1. L'économie se calcule par :   a) Gain + Dépense   b) Gain − Dépense   c) Dépense − Gain   d) Gain × Dépense",),
    [
        "Si le gain vaut 15 000 Ar et la dépense 9 000 Ar, l'économie est de :   a) 6 000 Ar   b) 24 000 Ar   c) 9 000 Ar   d) 15 000 Ar",
        "Quand la dépense dépasse le gain, il y a :   a) une économie   b) une dette   c) un bénéfice   d) rien de particulier",
        "L'économie représente la partie du gain qui n'est pas :   a) empruntée   b) dépensée   c) perdue   d) offerte",
    ],
    ["a) 6 000 Ar", "b) une dette", "b) dépensée"],
)

# S33 Eval - Vrai/Faux économie/dette
add(
    ("1. Si le gain est supérieur à la dépense, il y a une économie.", "2. La dette apparaît quand le gain dépasse la dépense."),
    [
        "La dette apparaît quand la dépense dépasse le gain.",
        "L'économie se calcule par : Gain − Dépense.",
    ],
    ["Vrai", "Vrai"],
)

# S35/S40 App - proportionnalité QCM
add(
    ("1. Si la quantité double, le prix (proportionnel) :   a) reste le même   b) double aussi   c) est divisé par 2   d) devient nul",),
    [
        "Si la quantité est multipliée par 3, le prix (proportionnel) est :   a) divisé par 3   b) multiplié par 3   c) inchangé   d) multiplié par 2",
        "Si 2 kg de riz coûtent 4 000 Ar, alors 4 kg coûtent :   a) 6 000 Ar   b) 8 000 Ar   c) 4 000 Ar   d) 12 000 Ar",
        "Dans un tableau de proportionnalité, on passe d'une colonne à l'autre en :   a) additionnant toujours 1   b) multipliant par le même nombre   c) changeant d'unité   d) soustrayant au hasard",
    ],
    ["b) multiplié par 3", "b) 8 000 Ar", "b) multipliant par le même nombre"],
)

# S35/S40 Eval - Vrai/Faux proportionnalité (only 1 item existing)
add(
    ("1. Dans une situation de proportionnalité, multiplier une grandeur par 3 multiplie l'autre par 3 aussi.",),
    [
        "Dans une situation de proportionnalité, diviser une grandeur par 2 divise l'autre par 2 aussi.",
        "Le tableau de proportionnalité permet de calculer une quatrième valeur inconnue (règle de trois).",
        "Une situation où le prix ne varie pas avec la quantité est une situation de proportionnalité.",
    ],
    ["Vrai", "Vrai", "Faux — dans ce cas, le prix ne dépend pas de la quantité, ce n'est donc pas une situation de proportionnalité."],
)

# S36 Eval - Vrai/Faux parallélépipède
add(
    ("1. Le parallélépipède rectangle a 8 sommets.", "2. Le volume se calcule en additionnant les longueurs des arêtes."),
    [
        "Le volume d'un parallélépipède rectangle se calcule par : longueur × largeur × hauteur.",
        "Le parallélépipède rectangle a 6 faces rectangulaires.",
    ],
    ["Vrai", "Vrai"],
)

# S37/S43/S47 App - heure QCM
add(
    ("1. 1 heure vaut :   a) 100 minutes   b) 60 minutes   c) 24 minutes   d) 10 minutes",),
    [
        "1 minute vaut :   a) 100 secondes   b) 60 secondes   c) 10 secondes   d) 1 000 secondes",
        "1 journée compte :   a) 12 heures   b) 24 heures   c) 60 heures   d) 100 heures",
        "2 heures représentent :   a) 60 minutes   b) 90 minutes   c) 120 minutes   d) 200 minutes",
    ],
    ["b) 60 secondes", "b) 24 heures", "c) 120 minutes"],
)

# S37/S43/S47 Eval - Vrai/Faux heure
add(
    ("1. 1 jour = 24 heures.", "2. 1 heure = 100 minutes."),
    [
        "1 heure = 60 minutes.",
        "1 minute = 60 secondes.",
    ],
    ["Vrai — 1 heure vaut bien 60 minutes, pas 100.", "Vrai"],
)

# S38 Eval - grand nombre QCM
add(
    ("1. 627 454 802 se lit :   a) six-cent-vingt-sept millions quatre-cent-cinquante-quatre mille neuf-cent-deux   b) six-cent-vingt-sept millions quatre-cent-cinquante-quatre mille huit-cent-deux   c) six-cent-vingt-sept millions quatre-cent-cinquante-quatre mille huit-cent-un   d) six-cent-vingt-sept millions quatre-cent-cinquante-quatre mille huit-cent-trois",),
    [
        "« Neuf-cent millions dix mille » s'écrit :   a) 900 010 000   b) 900 100 000   c) 90 010 000   d) 900 001 000",
        "Dans 384 726 951, le chiffre des unités de millions est :   a) 3   b) 8   c) 4   d) 7",
        "500 000 000 se lit :   a) cinq milliards   b) cinq-cent millions   c) cinquante millions   d) cinq millions",
    ],
    ["a) 900 010 000", "c) 4", "b) cinq-cent millions"],
)

# S41/S45 App - intérêt QCM
add(
    ("1. L'intérêt se calcule par :   a) Capital + Taux   b) Capital × Taux ÷ 100 × Temps   c) Capital ÷ Taux   d) Taux × Temps",),
    [
        "Pour un capital de 100 000 Ar placé à 5 % pendant 1 an, l'intérêt est de :   a) 500 Ar   b) 5 000 Ar   c) 50 000 Ar   d) 105 000 Ar",
        "Le taux d'intérêt s'exprime généralement en :   a) mètres   b) pourcentage   c) kilogrammes   d) litres",
        "Le capital est :   a) la somme placée au départ   b) l'intérêt gagné   c) le taux appliqué   d) la durée du placement",
    ],
    ["b) 5 000 Ar", "b) pourcentage", "a) la somme placée au départ"],
)

# S41/S45 Eval - Vrai/Faux intérêt
add(
    ("1. Plus le taux d'intérêt est élevé, plus l'intérêt gagné est important.", "2. Le capital est l'intérêt gagné à la fin du placement."),
    [
        "Le capital est la somme placée au départ, avant de produire des intérêts.",
        "Plus la durée du placement est longue, plus l'intérêt total est important (à taux et capital égaux).",
    ],
    ["Vrai", "Vrai"],
)

# S42 Eval - Vrai/Faux cube
add(
    ("1. Le cube a 8 sommets.", "2. Le volume se calcule en additionnant les longueurs des arêtes."),
    [
        "Le volume d'un cube se calcule par : côté × côté × côté.",
        "Le cube a 6 faces carrées identiques.",
    ],
    ["Vrai", "Vrai"],
)

# S44 App - partage QCM
add(
    ("1. Dans un partage égal, chaque part est :   a) identique pour tous   b) différente selon la personne   c) toujours nulle   d) impossible à calculer",),
    [
        "Pour partager 20 mangues également entre 4 enfants, chacun reçoit :   a) 4   b) 5   c) 6   d) 8",
        "Dans un partage inégal, les parts sont réparties selon :   a) le hasard uniquement   b) une règle ou une proportion donnée   c) toujours en parts égales   d) sans aucune règle",
        "Le partage égal est aussi appelé :   a) partage proportionnel   b) partage équitable   c) partage aléatoire   d) partage inégal",
    ],
    ["b) 5", "b) une règle ou une proportion donnée", "b) partage équitable"],
)

# S44 Eval - Vrai/Faux partage (1 item existing)
add(
    ("1. Dans un partage inégal, toutes les parts sont identiques.",),
    [
        "Dans un partage égal, toutes les parts sont identiques.",
        "Un partage peut se faire selon des proportions différentes pour chaque personne.",
        "Partager équitablement signifie donner la même quantité à chacun.",
    ],
    ["Vrai", "Vrai", "Vrai"],
)

# S46 App - volume cube QCM
add(
    ("1. Le volume du cube se calcule par :   a) côté × 4   b) côté × côté × côté   c) côté × côté   d) côté ÷ 3",),
    [
        "Le volume d'un cube de côté 3 cm est :   a) 9 cm³   b) 12 cm³   c) 27 cm³   d) 6 cm³",
        "L'unité de volume la plus courante est :   a) le cm²   b) le cm³   c) le cm   d) le litre uniquement",
        "Un cube a :   a) 4 faces   b) 6 faces   c) 8 faces   d) 12 faces",
    ],
    ["c) 27 cm³", "b) le cm³", "b) 6 faces"],
)

# S46 Eval - Vrai/Faux cube/parallélépipède
add(
    ("1. Le cube et le parallélépipède rectangle ont chacun 8 sommets.", "2. Toutes les faces du parallélépipède rectangle sont des carrés identiques."),
    [
        "Toutes les faces d'un cube sont des carrés identiques.",
        "Le parallélépipède rectangle a des faces rectangulaires, pas nécessairement carrées.",
    ],
    ["Vrai", "Vrai"],
)
