// data-speciales.js — séances de révision (9, 21, 32), examens d'unité (10, 22, 33) et examen blanc final (34)

// ============================================================ S9 — RÉVISION UNITÉ I
const S9 = {
  numero: 9, total: 34, unite: "I", type: "revision",
  titre: "Révision de l'Unité I — Matière : propriétés et grandeurs",
  image: "images/img_unite1.png",
  imageLegende: "Les trois états de la matière : solide, liquide, gaz",
  recap: [
    {
      ref: "Séance 1 — Les propriétés des solides",
      motsCles: ["forme propre", "volume propre"],
      points: [
        "Un solide a une forme propre : il garde sa forme quel que soit le récipient.",
        "Un solide a un volume propre : son volume ne change pas.",
        "Exemples : la pierre, le morceau de bois, le clou, le riz en grain (chaque grain est un solide).",
      ],
    },
    {
      ref: "Séance 2 — Les propriétés des liquides",
      motsCles: ["surface libre", "horizontale"],
      points: [
        "Un liquide n'a pas de forme propre : il prend la forme du récipient.",
        "Un liquide a un volume propre.",
        "Au repos, la surface libre d'un liquide est toujours plane et horizontale.",
      ],
    },
    {
      ref: "Séances 3 et 4 — Les gaz",
      motsCles: ["compressible", "expansible"],
      points: [
        "Un gaz n'a ni forme propre ni volume propre : il occupe tout le volume offert.",
        "Un gaz est compressible (on peut réduire son volume) et expansible (il se répand partout).",
        "L'air nous entoure : il gonfle le ballon, fait des bulles dans l'eau. 1 litre d'air pèse environ 1,3 g.",
      ],
    },
    {
      ref: "Séances 5 et 6 — La masse et le volume",
      motsCles: ["kilogramme", "mètre cube", "litre"],
      points: [
        "La masse mesure la quantité de matière ; unité : le kilogramme (kg) ; instrument : la balance.",
        "1 t = 1 000 kg ; 1 kg = 1 000 g.",
        "Le volume mesure la place occupée ; unité : le mètre cube (m³) ; on utilise aussi le litre.",
        "1 m³ = 1 000 L ; 1 L = 1 000 mL ; 1 mL = 1 cm³.",
      ],
    },
    {
      ref: "Séances 7 et 8 — La pression",
      motsCles: ["pression", "pascal"],
      points: [
        "La pression est la force exercée sur une surface ; unité : le pascal (Pa) ; instrument : le manomètre.",
        "Plus la surface est petite, plus la pression est grande, à force égale.",
        "En comprimant un gaz, on peut le liquéfier : le gaz butane est liquide dans la bouteille.",
        "Sous pression plus forte, l'eau bout au-dessus de 100 °C (cocotte-minute ~120 °C) ; en altitude, elle bout plus bas (~96 °C à Antananarivo).",
      ],
    },
  ],
  exercices: [
    {
      points: 5,
      consigne: "Complète le tableau : pour chaque état (solide, liquide, gaz), indique s'il possède une forme propre et un volume propre.",
      items: [
        "1. Le solide : forme propre ? volume propre ?",
        "2. Le liquide : forme propre ? volume propre ?",
        "3. Le gaz : forme propre ? volume propre ?",
        "4. Quel état est compressible et expansible ?",
        "5. Comment est la surface libre d'un liquide au repos ?",
      ],
      corrige: [
        [{ text: "1. Le solide : " }, { text: "forme propre : oui ; volume propre : oui", cle: true }, { text: "." }],
        [{ text: "2. Le liquide : " }, { text: "forme propre : non ; volume propre : oui", cle: true }, { text: "." }],
        [{ text: "3. Le gaz : " }, { text: "forme propre : non ; volume propre : non", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "Le gaz", cle: true }, { text: "." }],
        [{ text: "5. " }, { text: "Plane et horizontale", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Convertis :",
      items: [
        "1. 3 t = …… kg",
        "2. 2 500 g = …… kg",
        "3. 2 m³ = …… L",
        "4. 1,5 L = …… mL",
        "5. 250 cm³ = …… mL",
      ],
      corrige: [
        [{ text: "1. 3 t = " }, { text: "3 000 kg", cle: true }, { text: "." }],
        [{ text: "2. 2 500 g = " }, { text: "2,5 kg", cle: true }, { text: "." }],
        [{ text: "3. 2 m³ = " }, { text: "2 000 L", cle: true }, { text: "." }],
        [{ text: "4. 1,5 L = " }, { text: "1 500 mL", cle: true }, { text: "." }],
        [{ text: "5. 250 cm³ = " }, { text: "250 mL", cle: true }, { text: " (1 cm³ = 1 mL)." }],
      ],
    },
    {
      points: 5,
      consigne: "Associe chaque grandeur à son unité et à son instrument de mesure : masse, volume, pression, température.",
      items: [
        "1. La masse : unité ? instrument ?",
        "2. Le volume : unité ?",
        "3. La pression : unité ? instrument ?",
        "4. Cite un gaz que l'on liquéfie par compression.",
        "5. Pourquoi l'eau bout-elle plus vite dans une cocotte-minute ?",
      ],
      corrige: [
        [{ text: "1. Masse : " }, { text: "kilogramme (kg), balance", cle: true }, { text: "." }],
        [{ text: "2. Volume : " }, { text: "mètre cube (m³)", cle: true }, { text: ", on utilise aussi le litre." }],
        [{ text: "3. Pression : " }, { text: "pascal (Pa), manomètre", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "Le butane", cle: true }, { text: ", liquide dans sa bouteille sous pression." }],
        [{ text: "5. Sous pression plus forte, l'eau bout vers " }, { text: "120 °C : les aliments cuisent plus vite", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Vrai ou Faux ? Corrige les affirmations fausses.",
      items: [
        "1. L'air ne pèse rien.",
        "2. Un gaz occupe tout le volume de son récipient.",
        "3. Le volume d'un liquide change quand on le transvase.",
        "4. À force égale, la pression augmente quand la surface diminue.",
        "5. À Antananarivo, l'eau bout à exactement 100 °C.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : 1 litre d'air pèse environ 1,3 g." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: " : il est expansible." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : le liquide garde son volume propre ; seule sa forme change." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: " : c'est pourquoi la pointe du clou s'enfonce." }],
        [{ text: "5. " }, { text: "Faux", cle: true }, { text: " : en altitude, elle bout vers 96 °C." }],
      ],
    },
  ],
};

// ============================================================ S10 — EXAMEN UNITÉ I
const S10 = {
  numero: 10, total: 34, unite: "I", type: "examen",
  titre: "Examen de l'Unité I — Matière : propriétés et grandeurs",
  sousTitre: "SUJET D'EXAMEN No 1",
  consignes: [
    "Durée conseillée : une séance. Lis bien chaque question avant de répondre.",
    "Écris tes réponses au stylo, proprement, sur ta copie.",
    "Le corrigé et le barème se trouvent à la page suivante : ne les regarde qu'après avoir terminé.",
  ],
  exercices: [
    {
      points: 4,
      consigne: "Questions de cours. Réponds par une phrase complète :",
      items: [
        "1. Cite les deux propriétés spécifiques d'un solide. (1 pt)",
        "2. Comment est la surface libre d'un liquide au repos ? (1 pt)",
        "3. Que signifie « un gaz est compressible » ? (1 pt)",
        "4. Quelle est l'unité légale de la masse ? (1 pt)",
      ],
      corrige: [
        [{ text: "1. Un solide a " }, { text: "une forme propre et un volume propre", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. Elle est " }, { text: "plane et horizontale", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. " }, { text: "On peut diminuer son volume en le pressant", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. " }, { text: "Le kilogramme (kg)", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Vrai ou Faux ? (1 pt par bonne réponse)",
      items: [
        "1. Un liquide a un volume propre.",
        "2. Un gaz a une forme propre.",
        "3. 1 mL = 1 cm³.",
        "4. La pression se mesure avec une balance.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Vrai", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. " }, { text: "Faux", cle: true }, { text: " : il prend la forme et le volume du récipient. (1 pt)" }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : avec un manomètre ; la balance mesure la masse. (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Conversions. (1 pt par bonne réponse)",
      items: [
        "1. 5 t = …… kg",
        "2. 0,75 kg = …… g",
        "3. 3 500 L = …… m³",
        "4. 2 L = …… cm³",
      ],
      corrige: [
        [{ text: "1. 5 t = " }, { text: "5 000 kg", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. 0,75 kg = " }, { text: "750 g", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. 3 500 L = " }, { text: "3,5 m³", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. 2 L = " }, { text: "2 000 cm³", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Expérience. On souffle dans un ballon de baudruche, puis on le presse entre les mains sans le faire éclater.",
      items: [
        "1. Quel état de la matière est enfermé dans le ballon ? (1 pt)",
        "2. Pourquoi le ballon prend-il une forme arrondie partout ? (1,5 pt)",
        "3. Que montre le fait que l'on puisse presser le ballon ? (1,5 pt)",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Un gaz : l'air", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. Parce que l'air est " }, { text: "expansible : il occupe tout le volume et pousse partout", cle: true }, { text: " sur les parois. (1,5 pt)" }],
        [{ text: "3. Que l'air est " }, { text: "compressible : son volume diminue quand on le presse", cle: true }, { text: ". (1,5 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Problème. Un zébu pèse 350 kg ; une charrette vide pèse 150 kg. Le fermier charge la charrette de 8 sacs de riz de 50 kg chacun.",
      items: [
        "1. Quelle est la masse totale des sacs de riz ? (1,5 pt)",
        "2. Quelle est la masse de la charrette chargée ? (1,5 pt)",
        "3. Exprime cette masse en tonnes. (1 pt)",
      ],
      corrige: [
        [{ text: "1. 8 × 50 kg = " }, { text: "400 kg", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "2. 150 + 400 = " }, { text: "550 kg", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. 550 kg = " }, { text: "0,55 t", cle: true }, { text: ". (1 pt)" }],
      ],
    },
  ],
};

// ============================================================ S21 — RÉVISION UNITÉ II
const S21 = {
  numero: 21, total: 34, unite: "II", type: "revision",
  titre: "Révision de l'Unité II — Électricité et magnétisme",
  image: "images/img_unite2.png",
  imageLegende: "Le circuit électrique : générateur, fils, interrupteur, lampe",
  recap: [
    {
      ref: "Séances 11 à 13 — Le circuit électrique et son schéma",
      motsCles: ["circuit fermé", "sens conventionnel"],
      points: [
        "Un circuit simple comprend : un générateur (pile), des fils de connexion, un interrupteur et un récepteur (lampe).",
        "La lampe brille si le circuit est fermé ; elle s'éteint si le circuit est ouvert.",
        "Chaque composant a un symbole normalisé ; le schéma se trace à la règle, en rectangle.",
        "Le sens conventionnel du courant : de la borne + vers la borne −, à l'extérieur du générateur.",
      ],
    },
    {
      ref: "Séances 14 à 16 — Montages en série et en dérivation",
      motsCles: ["série", "dérivation"],
      points: [
        "En série : une seule boucle ; les lampes brillent faiblement ; si une grille, tout s'éteint.",
        "En dérivation : plusieurs branches ; chaque lampe brille normalement et reste indépendante.",
        "Les installations des maisons sont en dérivation.",
      ],
    },
    {
      ref: "Séances 17 à 19 — Sécurité et pannes",
      motsCles: ["fusible", "court-circuit"],
      points: [
        "Le fusible contient un fil fin qui fond en cas de surcharge ou de court-circuit : il protège l'installation.",
        "On remplace toujours un fusible par un fusible de même calibre.",
        "Le secteur (220 V) est dangereux : électrisation, électrocution, incendie. On coupe le courant avant toute intervention.",
        "Pannes courantes : lampe grillée (filament coupé), pile usée, fil débranché, mauvaise connexion. On vérifie un élément à la fois.",
      ],
    },
    {
      ref: "Séance 20 — Intensité et tension",
      motsCles: ["ampère", "volt"],
      points: [
        "L'intensité se mesure en ampères (A) avec un ampèremètre branché en série.",
        "La tension se mesure en volts (V) avec un voltmètre branché en dérivation.",
        "Repères : pile ronde 1,5 V ; pile plate 4,5 V ; batterie 12 V ; secteur 220 V.",
      ],
    },
  ],
  exercices: [
    {
      points: 5,
      consigne: "Questions rapides :",
      items: [
        "1. Cite les quatre éléments d'un circuit simple.",
        "2. Que fait la lampe si l'on ouvre l'interrupteur ?",
        "3. Dans quel sens circule le courant, à l'extérieur du générateur ?",
        "4. Avec quoi trace-t-on un schéma électrique ?",
        "5. Quelle est la tension du secteur à Madagascar ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Le générateur, les fils, l'interrupteur et le récepteur (lampe)", cle: true }, { text: "." }],
        [{ text: "2. Elle " }, { text: "s'éteint : le circuit est ouvert", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "De la borne + vers la borne −", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "À la règle", cle: true }, { text: ", avec les symboles normalisés, en rectangle." }],
        [{ text: "5. " }, { text: "220 volts", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Série ou dérivation ? Attribue chaque propriété au bon montage :",
      items: [
        "1. Une seule boucle de courant.",
        "2. Chaque lampe brille normalement.",
        "3. Si une lampe grille, les autres restent allumées.",
        "4. Les lampes brillent faiblement quand on en ajoute.",
        "5. C'est le montage des installations domestiques.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Série", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Dérivation", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Dérivation", cle: true }, { text: " : les branches sont indépendantes." }],
        [{ text: "4. " }, { text: "Série", cle: true }, { text: "." }],
        [{ text: "5. " }, { text: "Dérivation", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Sécurité électrique. Vrai ou Faux ? Corrige les affirmations fausses.",
      items: [
        "1. On peut toucher une prise avec les mains mouillées.",
        "2. Le fusible protège l'installation en fondant.",
        "3. On peut remplacer un fusible par un fil de cuivre épais.",
        "4. Avant de changer une ampoule, on coupe le courant.",
        "5. Le courant du secteur peut provoquer une électrocution.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : l'eau facilite le passage du courant, danger mortel." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: " : son fil fin fond et ouvre le circuit." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : il faut un fusible de même calibre, sinon plus de protection." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "5. " }, { text: "Vrai", cle: true }, { text: " : 220 V est une tension mortelle." }],
      ],
    },
    {
      points: 5,
      consigne: "La lampe de poche de Naina ne s'allume plus. Aide-le :",
      items: [
        "1. Cite trois causes possibles de la panne.",
        "2. Décris la méthode pour trouver la cause.",
        "3. Comment reconnaît-on une lampe grillée ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Pile usée, lampe grillée, mauvais contact ou fil débranché", cle: true }, { text: "." }],
        [{ text: "2. On vérifie " }, { text: "un seul élément à la fois", cle: true }, { text: " : essayer une pile neuve, puis une lampe neuve, puis resserrer les contacts." }],
        [{ text: "3. Son " }, { text: "filament est coupé", cle: true }, { text: " : on le voit par le verre, ou la lampe ne s'allume pas sur une pile neuve." }],
      ],
    },
  ],
};

// ============================================================ S22 — EXAMEN UNITÉ II
const S22 = {
  numero: 22, total: 34, unite: "II", type: "examen",
  titre: "Examen de l'Unité II — Électricité et magnétisme",
  sousTitre: "SUJET D'EXAMEN No 2",
  consignes: [
    "Durée conseillée : une séance. Lis bien chaque question avant de répondre.",
    "Trace les schémas à la règle, avec les symboles normalisés.",
    "Le corrigé et le barème se trouvent à la page suivante : ne les regarde qu'après avoir terminé.",
  ],
  exercices: [
    {
      points: 4,
      consigne: "Questions de cours. Réponds par une phrase complète :",
      items: [
        "1. Quel est le rôle du générateur dans un circuit ? (1 pt)",
        "2. Qu'est-ce qu'un circuit fermé ? (1 pt)",
        "3. Quel est le sens conventionnel du courant ? (1 pt)",
        "4. Quel est le rôle du fusible ? (1 pt)",
      ],
      corrige: [
        [{ text: "1. Il " }, { text: "fournit le courant électrique", cle: true }, { text: " au circuit (exemple : la pile). (1 pt)" }],
        [{ text: "2. Un circuit " }, { text: "sans interruption, où le courant circule", cle: true }, { text: " : la lampe brille. (1 pt)" }],
        [{ text: "3. " }, { text: "De la borne + vers la borne − à l'extérieur du générateur", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. Il " }, { text: "protège l'installation : son fil fond", cle: true }, { text: " en cas de surcharge ou de court-circuit. (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Symboles et schéma. (1 pt par bonne réponse)",
      items: [
        "1. Dessine le symbole de la pile.",
        "2. Dessine le symbole de la lampe.",
        "3. Dessine le symbole de l'interrupteur ouvert.",
        "4. Dessine le schéma d'un circuit simple : pile, interrupteur fermé, lampe.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Deux traits parallèles inégaux", cle: true }, { text: " : le long = borne +, le court = borne −. (1 pt)" }],
        [{ text: "2. " }, { text: "Un cercle contenant une croix", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. " }, { text: "Un trait incliné qui interrompt la ligne", cle: true }, { text: " du circuit. (1 pt)" }],
        [{ text: "4. Un " }, { text: "rectangle tracé à la règle", cle: true }, { text: " reliant les trois symboles, interrupteur en position fermée. (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Montages. Deux lampes L1 et L2 sont montées avec une pile. Dans le montage A, elles sont en série ; dans le montage B, en dérivation.",
      items: [
        "1. Dans quel montage les lampes brillent-elles normalement ? (1 pt)",
        "2. Dans le montage A, L1 grille. Que fait L2 ? Pourquoi ? (1,5 pt)",
        "3. Dans le montage B, L1 grille. Que fait L2 ? Pourquoi ? (1,5 pt)",
      ],
      corrige: [
        [{ text: "1. Dans le " }, { text: "montage B (dérivation)", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. L2 " }, { text: "s'éteint : la boucle unique est coupée", cle: true }, { text: ", plus aucun courant ne passe. (1,5 pt)" }],
        [{ text: "3. L2 " }, { text: "reste allumée : sa branche est indépendante", cle: true }, { text: " de celle de L1. (1,5 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Mesures électriques. (1 pt par bonne réponse)",
      items: [
        "1. Quel appareil mesure l'intensité, et comment se branche-t-il ?",
        "2. Quel appareil mesure la tension, et comment se branche-t-il ?",
        "3. Quelle est la tension d'une pile plate ?",
        "4. Range du plus petit au plus grand : secteur, pile ronde, batterie de voiture, pile plate.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "L'ampèremètre, branché en série", cle: true }, { text: " ; unité : l'ampère (A). (1 pt)" }],
        [{ text: "2. " }, { text: "Le voltmètre, branché en dérivation", cle: true }, { text: " ; unité : le volt (V). (1 pt)" }],
        [{ text: "3. " }, { text: "4,5 V", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. " }, { text: "Pile ronde (1,5 V) < pile plate (4,5 V) < batterie (12 V) < secteur (220 V)", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Sécurité. Chez Hanta, les lumières se sont éteintes d'un coup : le fusible a fondu.",
      items: [
        "1. Donne deux causes possibles de la fonte du fusible. (1,5 pt)",
        "2. Que doit-on faire avant de remplacer le fusible ? (1 pt)",
        "3. Par quoi doit-on remplacer le fusible fondu ? Pourquoi pas par un gros fil ? (1,5 pt)",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Une surcharge (trop d'appareils) ou un court-circuit", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "2. " }, { text: "Couper le courant au disjoncteur général", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. Par un " }, { text: "fusible de même calibre", cle: true }, { text: " ; un gros fil ne fondrait pas et l'installation ne serait " }, { text: "plus protégée : risque d'incendie", cle: true }, { text: ". (1,5 pt)" }],
      ],
    },
  ],
};

// ============================================================ S32 — RÉVISION UNITÉ III
const S32 = {
  numero: 32, total: 34, unite: "III", type: "revision",
  titre: "Révision de l'Unité III — Chaleur et température",
  image: "images/img_unite3.png",
  imageLegende: "La chaleur et ses transferts dans la vie quotidienne",
  recap: [
    {
      ref: "Séance 23 — Chaleur et température",
      motsCles: ["température", "chaleur"],
      points: [
        "La température indique si un corps est chaud ou froid ; instrument : le thermomètre ; unité : le degré Celsius (°C).",
        "La chaleur est une énergie qui passe toujours du corps chaud vers le corps froid.",
        "Deux effets de la chaleur : variation de température ou changement d'état.",
        "Repères : glace 0 °C ; corps humain 37 °C ; eau bouillante 100 °C.",
      ],
    },
    {
      ref: "Séance 24 — Conducteurs et isolants thermiques",
      motsCles: ["conducteur", "isolant"],
      points: [
        "Bons conducteurs : les métaux (fer, aluminium, cuivre) : la chaleur y passe vite.",
        "Mauvais conducteurs (isolants) : bois, plastique, paille, laine, air immobile.",
        "Les bons conducteurs thermiques sont aussi de bons conducteurs électriques.",
      ],
    },
    {
      ref: "Séances 25 à 27 — Les trois modes de transfert",
      motsCles: ["conduction", "convection", "rayonnement"],
      points: [
        "Conduction : de proche en proche, sans déplacement de matière ; surtout dans les solides.",
        "Convection : par le mouvement d'un fluide ; le chaud monte, le froid descend ; liquides et gaz seulement.",
        "Rayonnement : à distance, sans contact ni matière ; traverse le vide ; c'est ainsi que le Soleil chauffe la Terre.",
        "Les surfaces sombres absorbent le rayonnement ; les surfaces claires le réfléchissent.",
      ],
    },
    {
      ref: "Séances 28 et 29 — Conserver la chaleur",
      motsCles: ["isolant", "vide"],
      points: [
        "Un corps chaud perd sa chaleur par les trois modes de transfert à la fois.",
        "Pour la conserver : isolant épais (conduction), couvercle (convection), surface réfléchissante (rayonnement), vide (thermos).",
        "Test d'efficacité : comparer avec un témoin non protégé.",
      ],
    },
    {
      ref: "Séances 30 et 31 — La dilatation",
      motsCles: ["dilatation", "contraction"],
      points: [
        "Chauffé, un corps se dilate (volume augmente) ; refroidi, il se contracte.",
        "Le gaz se dilate plus que le liquide, qui se dilate plus que le solide.",
        "Applications : espaces entre les rails, cerclage des roues, bilame, thermomètre à liquide, vase d'expansion.",
      ],
    },
  ],
  exercices: [
    {
      points: 5,
      consigne: "Questions rapides :",
      items: [
        "1. Quel instrument mesure la température, et en quelle unité ?",
        "2. Dans quel sens la chaleur passe-t-elle ?",
        "3. Cite deux bons conducteurs et deux isolants thermiques.",
        "4. Quel mode de transfert traverse le vide ?",
        "5. Que fait un solide quand on le chauffe ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Le thermomètre, en degrés Celsius (°C)", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Du corps chaud vers le corps froid", cle: true }, { text: "." }],
        [{ text: "3. Conducteurs : " }, { text: "fer, cuivre", cle: true }, { text: " ; isolants : " }, { text: "bois, laine", cle: true }, { text: " (ou paille, plastique…)." }],
        [{ text: "4. " }, { text: "Le rayonnement", cle: true }, { text: "." }],
        [{ text: "5. Il " }, { text: "se dilate : son volume augmente", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Conduction, convection ou rayonnement ? Identifie le mode de transfert :",
      items: [
        "1. La cuillère en fer devient brûlante dans la marmite.",
        "2. L'air chaud monte au-dessus du fatapera.",
        "3. Le Soleil chauffe le toit en tôle.",
        "4. L'eau tourne dans la casserole qui chauffe.",
        "5. On sent la chaleur des braises sans les toucher.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Conduction", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Convection", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Rayonnement", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "Convection", cle: true }, { text: "." }],
        [{ text: "5. " }, { text: "Rayonnement", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Vrai ou Faux ? Corrige les affirmations fausses.",
      items: [
        "1. Le gaz se dilate moins que le solide.",
        "2. Le couvercle réduit la perte de chaleur par convection.",
        "3. Une surface noire réfléchit le rayonnement.",
        "4. Le thermomètre à liquide fonctionne grâce à la dilatation.",
        "5. Dans la conduction, la matière se déplace avec la chaleur.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : le gaz se dilate le plus des trois états." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : elle l'absorbe ; ce sont les surfaces claires qui réfléchissent." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: " : le liquide dilaté monte dans le tube." }],
        [{ text: "5. " }, { text: "Faux", cle: true }, { text: " : la matière reste immobile, la chaleur avance de proche en proche." }],
      ],
    },
    {
      points: 5,
      consigne: "Le thermos et la boîte isotherme :",
      items: [
        "1. Cite les trois « ennemis » à combattre pour conserver la chaleur.",
        "2. Associe à chacun la technique du thermos qui le combat.",
        "3. Pourquoi laisse-t-on un espace entre les rails du chemin de fer ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "La conduction, la convection et le rayonnement", cle: true }, { text: "." }],
        [{ text: "2. Conduction et convection : " }, { text: "le vide entre les parois", cle: true }, { text: " ; rayonnement : " }, { text: "la paroi réfléchissante", cle: true }, { text: " ; convection par le haut : " }, { text: "le bouchon isolant", cle: true }, { text: "." }],
        [{ text: "3. Pour que les rails puissent " }, { text: "se dilater au soleil sans se tordre", cle: true }, { text: "." }],
      ],
    },
  ],
};

// ============================================================ S33 — EXAMEN UNITÉ III
const S33 = {
  numero: 33, total: 34, unite: "III", type: "examen",
  titre: "Examen de l'Unité III — Chaleur et température",
  sousTitre: "SUJET D'EXAMEN No 3",
  consignes: [
    "Durée conseillée : une séance. Lis bien chaque question avant de répondre.",
    "Réponds par des phrases complètes quand la question le demande.",
    "Le corrigé et le barème se trouvent à la page suivante : ne les regarde qu'après avoir terminé.",
  ],
  exercices: [
    {
      points: 4,
      consigne: "Questions de cours. Réponds par une phrase complète :",
      items: [
        "1. Quelle est la différence entre chaleur et température ? (1 pt)",
        "2. Qu'est-ce qu'un isolant thermique ? Donne un exemple. (1 pt)",
        "3. Définis la conduction. (1 pt)",
        "4. Définis la dilatation. (1 pt)",
      ],
      corrige: [
        [{ text: "1. La chaleur est " }, { text: "une énergie qui se transmet", cle: true }, { text: " ; la température " }, { text: "indique si un corps est chaud ou froid", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. Un matériau qui " }, { text: "laisse mal passer la chaleur", cle: true }, { text: ", comme le bois ou la laine. (1 pt)" }],
        [{ text: "3. Le transfert de chaleur " }, { text: "de proche en proche, sans déplacement de matière", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. " }, { text: "L'augmentation du volume d'un corps quand on le chauffe", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Identifie le mode de transfert de chaleur. (1 pt par bonne réponse)",
      items: [
        "1. Le manche métallique de la marmite devient chaud.",
        "2. La brise de mer rafraîchit la côte l'après-midi.",
        "3. Le mur exposé au soleil devient chaud.",
        "4. Toute l'eau de la marmite finit par bouillir grâce au mouvement de l'eau.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Conduction", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. " }, { text: "Convection", cle: true }, { text: " : courant d'air entre mer et terre. (1 pt)" }],
        [{ text: "3. " }, { text: "Rayonnement", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. " }, { text: "Convection", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Vrai ou Faux ? Corrige les affirmations fausses. (1 pt par bonne réponse)",
      items: [
        "1. La chaleur passe du corps froid vers le corps chaud.",
        "2. Les métaux sont de bons conducteurs thermiques.",
        "3. Le rayonnement a besoin d'air pour se propager.",
        "4. Un liquide refroidi se contracte.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : du chaud vers le froid. (1 pt)" }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : il traverse même le vide. (1 pt)" }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Expérience. On chauffe une boule métallique qui, froide, passait juste dans un anneau.",
      items: [
        "1. La boule chaude passe-t-elle encore ? Pourquoi ? (1,5 pt)",
        "2. Comment faire pour qu'elle repasse rapidement ? (1 pt)",
        "3. Cite une précaution prise contre ce phénomène dans les chemins de fer. (1,5 pt)",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Non : elle s'est dilatée", cle: true }, { text: ", son volume a augmenté. (1,5 pt)" }],
        [{ text: "2. La " }, { text: "refroidir (eau froide) : elle se contracte", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. On laisse des " }, { text: "espaces (joints de dilatation) entre les rails", cle: true }, { text: ". (1,5 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Problème. Miora veut apporter du riz chaud à son père au champ, à deux heures de marche.",
      items: [
        "1. Propose un dispositif pour garder le riz chaud, en citant les matériaux. (2 pts)",
        "2. Explique le rôle de chaque élément du dispositif. (2 pts)",
      ],
      corrige: [
        [{ text: "1. Mettre la marmite " }, { text: "dans un panier tapissé de paille ou de tissus épais, avec un couvercle", cle: true }, { text: ", le tout bien fermé. (2 pts)" }],
        [{ text: "2. La paille et les tissus, " }, { text: "isolants, ralentissent la conduction", cle: true }, { text: " ; le couvercle et la fermeture " }, { text: "bloquent la convection", cle: true }, { text: " ; l'ensemble réduit fortement la perte de chaleur. (2 pts)" }],
      ],
    },
  ],
};

// ============================================================ S34 — EXAMEN BLANC FINAL
const S34 = {
  numero: 34, total: 34, unite: null, type: "examen",
  titre: "Examen blanc de fin d'année — Sciences Physiques T6",
  sousTitre: "EXAMEN BLANC — TOUT LE PROGRAMME",
  consignes: [
    "Cet examen blanc couvre les trois unités du programme : Matière, Électricité, Chaleur.",
    "Durée conseillée : une séance complète. Travaille seul, sans regarder tes leçons.",
    "Trace les schémas à la règle. Écris des phrases complètes.",
    "Le corrigé et le barème se trouvent à la page suivante : ne les regarde qu'après avoir terminé.",
  ],
  exercices: [
    {
      points: 5,
      consigne: "Unité I — La matière. Réponds aux questions :",
      items: [
        "1. Complète le tableau des propriétés : solide, liquide, gaz — forme propre ? volume propre ? (2 pts)",
        "2. Convertis : 2,4 t = …… kg ; 3 L = …… mL ; 500 cm³ = …… L. (1,5 pt)",
        "3. Pourquoi le camion s'enfonce-t-il dans le sable alors que le piéton non ? Utilise le mot « pression ». (1,5 pt)",
      ],
      corrige: [
        [{ text: "1. Solide : " }, { text: "forme propre oui, volume propre oui", cle: true }, { text: " ; liquide : " }, { text: "forme non, volume oui", cle: true }, { text: " ; gaz : " }, { text: "ni forme ni volume propres", cle: true }, { text: ". (2 pts)" }],
        [{ text: "2. 2,4 t = " }, { text: "2 400 kg", cle: true }, { text: " ; 3 L = " }, { text: "3 000 mL", cle: true }, { text: " ; 500 cm³ = " }, { text: "0,5 L", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. Le camion, très lourd, exerce une " }, { text: "pression plus grande sur le sol", cle: true }, { text: " : à surface comparable, plus la force est grande, plus la pression est grande. (1,5 pt)" }],
      ],
    },
    {
      points: 5,
      consigne: "Unité II — Électricité. Un circuit comprend une pile, un interrupteur et une lampe.",
      items: [
        "1. Dessine le schéma normalisé du circuit, interrupteur fermé, et indique le sens conventionnel du courant. (2 pts)",
        "2. On ajoute une deuxième lampe en série. Que devient l'éclat des lampes ? (1 pt)",
        "3. On monte plutôt les deux lampes en dérivation. Quels sont les deux avantages ? (2 pts)",
      ],
      corrige: [
        [{ text: "1. Rectangle à la règle : " }, { text: "pile (traits inégaux), interrupteur fermé, lampe (cercle-croix)", cle: true }, { text: " ; flèche du courant " }, { text: "du + vers le −", cle: true }, { text: " à l'extérieur de la pile. (2 pts)" }],
        [{ text: "2. " }, { text: "L'éclat diminue : les lampes brillent faiblement", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. " }, { text: "Chaque lampe brille normalement", cle: true }, { text: " et " }, { text: "reste allumée si l'autre grille", cle: true }, { text: " (branches indépendantes). (2 pts)" }],
      ],
    },
    {
      points: 5,
      consigne: "Unité II — Sécurité et mesures :",
      items: [
        "1. Cite trois règles de sécurité face au courant du secteur. (1,5 pt)",
        "2. Quel appareil mesure l'intensité, et comment se branche-t-il ? Même question pour la tension. (2 pts)",
        "3. Associe : pile ronde, pile plate, secteur — 220 V, 1,5 V, 4,5 V. (1,5 pt)",
      ],
      corrige: [
        [{ text: "1. Par exemple : " }, { text: "ne jamais toucher une prise avec les mains mouillées ; couper le courant avant toute intervention ; ne pas toucher un fil dénudé", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "2. Intensité : " }, { text: "ampèremètre en série (ampères)", cle: true }, { text: " ; tension : " }, { text: "voltmètre en dérivation (volts)", cle: true }, { text: ". (2 pts)" }],
        [{ text: "3. Pile ronde : " }, { text: "1,5 V", cle: true }, { text: " ; pile plate : " }, { text: "4,5 V", cle: true }, { text: " ; secteur : " }, { text: "220 V", cle: true }, { text: ". (1,5 pt)" }],
      ],
    },
    {
      points: 5,
      consigne: "Unité III — Chaleur. Réponds aux questions :",
      items: [
        "1. Nomme le mode de transfert : a) la cuillère chauffe dans la marmite ; b) l'air chaud monte au-dessus du feu ; c) le Soleil chauffe la Terre. (1,5 pt)",
        "2. Explique pourquoi une bouteille thermos garde le café chaud. (2 pts)",
        "3. Pourquoi ne remplit-on pas à ras bord une marmite d'huile avant de la chauffer ? (1,5 pt)",
      ],
      corrige: [
        [{ text: "1. a) " }, { text: "conduction", cle: true }, { text: " ; b) " }, { text: "convection", cle: true }, { text: " ; c) " }, { text: "rayonnement", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "2. " }, { text: "Le vide entre les parois bloque conduction et convection, la paroi réfléchissante renvoie le rayonnement, le bouchon isolant ferme le haut", cle: true }, { text: ". (2 pts)" }],
        [{ text: "3. L'huile chauffée " }, { text: "se dilate : son volume augmente et elle déborderait", cle: true }, { text: ". (1,5 pt)" }],
      ],
    },
  ],
};

module.exports = { S9, S10, S21, S22, S32, S33, S34, revisions: [S9, S21, S32], examens: [S10, S22, S33, S34] };
