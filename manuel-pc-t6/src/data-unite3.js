// data-unite3.js — Unité III : CHALEUR ET TEMPÉRATURE (séances 23 à 31)
const DOC = "Programme d'études T6 — Sciences Physiques (MEN Madagascar) ; manuel J-Learn";

const S23 = {
  numero: 23, total: 34, unite: "III", theme: "Chaleur et température",
  titre: "Chaleur et température : les effets de la chaleur",
  objectif: "distinguer chaleur et température, et montrer que la chaleur reçue ou cédée peut changer la température ou l'état d'un corps",
  documentation: DOC,
  support: "Thermomètre, bol d'eau chaude, bol d'eau froide avec glaçons",
  image: "images/img_seance23.png",
  imageLegende: "Figure 23 — Le thermomètre mesure la température : eau chaude, eau froide",
  revision: {
    qa: [
      { q: "En quelle unité se mesure l'intensité du courant ?", ra: "En ampères (A), avec un ampèremètre." },
      { q: "En quelle unité se mesure la tension ?", ra: "En volts (V), avec un voltmètre." },
      { q: "Comment se branche le voltmètre ?", ra: "En dérivation, aux bornes du composant." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Le matin, à Antsirabe, Fara souffle sur ses mains pour les réchauffer, et le thé fumant réchauffe toute la famille. Le soir, le beurre laissé près du feu a complètement fondu.",
      "Qu'est-ce qui a fait fondre le beurre ?",
      "R.A. : La chaleur du feu.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Chaleur et température : les effets de la chaleur ». Après cette séance, vous serez capables de distinguer la chaleur de la température et de citer les deux effets de la chaleur sur un corps.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : je plonge le thermomètre dans le bol d'eau froide et je lis la valeur. Je le plonge maintenant dans le bol d'eau chaude et je lis à nouveau. Observez aussi les glaçons dans l'eau : ils fondent peu à peu.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Thermomètre, bols d'eau chaude et froide, glaçons",
  },
  analyse: {
    qa: [
      { q: "Quel instrument mesure la température ?", ra: "Le thermomètre." },
      { q: "En quelle unité lit-on la température ?", ra: "En degrés Celsius, de symbole °C." },
      { q: "Que se passe-t-il quand l'eau reçoit de la chaleur ?", ra: "Sa température monte : l'eau devient plus chaude." },
      { q: "Que deviennent les glaçons dans l'eau ? Pourquoi ?", ra: "Ils fondent : la chaleur reçue les fait passer de l'état solide à l'état liquide." },
      { q: "La chaleur et la température, est-ce la même chose ?", ra: "Non : la chaleur est une énergie qui passe du corps chaud au corps froid ; la température indique si un corps est chaud ou froid." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Thermomètre, bols d'eau",
  },
  synthese: {
    enseignant: "Donc, la température indique si un corps est chaud ou froid ; elle se mesure avec un thermomètre, en degrés Celsius. La chaleur est une énergie qui passe toujours du corps le plus chaud vers le corps le plus froid. La chaleur reçue ou cédée par un corps peut produire deux effets : faire varier sa température, ou provoquer un changement d'état, comme la fonte de la glace ou l'ébullition de l'eau.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) La température se mesure avec un thermomètre.",
        "b) La chaleur passe du corps froid vers le corps chaud.",
        "c) La chaleur reçue peut faire fondre un glaçon.",
        "d) Chaleur et température sont exactement la même chose.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: ", en degrés Celsius (°C)." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : elle passe toujours du corps chaud vers le corps froid." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: " : c'est un changement d'état." }],
        [{ text: "d) " }, { text: "Faux", cle: true }, { text: " : la chaleur est une énergie ; la température indique l'état chaud ou froid." }],
      ],
    },
    {
      consigne: "Indique l'effet de la chaleur dans chaque situation : variation de température ou changement d'état ?",
      items: [
        "a) L'eau de la marmite passe de 25 °C à 80 °C.",
        "b) Le beurre fond près du feu.",
        "c) L'eau bout et se transforme en vapeur.",
        "d) Le fer du repassage devient brûlant.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Variation de température", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Changement d'état", cle: true }, { text: " (solide → liquide : fusion)." }],
        [{ text: "c) " }, { text: "Changement d'état", cle: true }, { text: " (liquide → gaz : ébullition)." }],
        [{ text: "d) " }, { text: "Variation de température", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail individuel sur ardoise", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : degrés Celsius – énergie – chaud – thermomètre – état – froid.",
      items: [
        "a) La température se mesure avec un ……… en ……… .",
        "b) La chaleur est une ……… qui passe du corps ……… vers le corps ……… .",
        "c) La chaleur peut faire varier la température ou changer l'……… d'un corps.",
      ],
      corrige: [
        [{ text: "a) La température se mesure avec un " }, { text: "thermomètre", cle: true }, { text: " en " }, { text: "degrés Celsius", cle: true }, { text: "." }],
        [{ text: "b) La chaleur est une " }, { text: "énergie", cle: true }, { text: " qui passe du corps " }, { text: "chaud", cle: true }, { text: " vers le corps " }, { text: "froid", cle: true }, { text: "." }],
        [{ text: "c) La chaleur peut faire varier la température ou changer l'" }, { text: "état", cle: true }, { text: " d'un corps." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Quelle est la différence entre chaleur et température ?",
        "b) Cite les deux effets possibles de la chaleur sur un corps.",
        "c) Dans quel sens la chaleur passe-t-elle entre deux corps ?",
        "d) À quelles températures l'eau gèle-t-elle et bout-elle, au niveau de la mer ?",
      ],
      corrige: [
        [{ text: "a) La " }, { text: "chaleur est une énergie qui se transmet", cle: true }, { text: " ; la " }, { text: "température indique si un corps est chaud ou froid", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "La variation de température et le changement d'état", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Du corps le plus chaud vers le corps le plus froid", cle: true }, { text: "." }],
        [{ text: "d) Elle gèle à " }, { text: "0 °C", cle: true }, { text: " et bout à " }, { text: "100 °C", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["température", "thermomètre", "degrés Celsius", "chaleur", "énergie", "changement d'état"],
    sections: [
      {
        titre: "1. La température",
        paras: [
          "La température indique si un corps est chaud ou froid. Elle se mesure avec un thermomètre, en degrés Celsius, de symbole °C.",
          "Quelques repères :",
        ],
        puces: [
          "la glace fond à 0 °C ;",
          "le corps humain est à environ 37 °C ;",
          "l'eau bout à 100 °C au niveau de la mer.",
        ],
      },
      {
        titre: "2. La chaleur",
        paras: [
          "La chaleur est une énergie. Elle passe toujours du corps le plus chaud vers le corps le plus froid, jamais l'inverse.",
          "Exemple : le thé chaud cède de la chaleur à la tasse et à l'air ; il refroidit pendant que la tasse se réchauffe.",
        ],
      },
      {
        titre: "3. Les deux effets de la chaleur",
        sousSections: [
          {
            titre: "a. Faire varier la température",
            paras: ["Un corps qui reçoit de la chaleur voit sa température monter ; un corps qui cède de la chaleur voit sa température baisser."],
          },
          {
            titre: "b. Provoquer un changement d'état",
            paras: ["Quand un corps reçoit ou cède beaucoup de chaleur, il peut changer d'état :"],
            puces: [
              "la glace qui reçoit de la chaleur fond (solide → liquide) ;",
              "l'eau qui bout se vaporise (liquide → gaz) ;",
              "la vapeur qui se refroidit se condense en gouttelettes (gaz → liquide).",
            ],
          },
        ],
      },
    ],
    saisTu: [
      "À Antsirabe, ville des Hautes Terres, la température peut descendre jusqu'à 0 °C en hiver : de la gelée blanche se forme parfois le matin ! Sur la côte, à Toliara, il peut faire plus de 35 °C le même jour. Madagascar connaît de grands écarts de température selon l'altitude.",
    ],
    experience: [
      "Sens de la chaleur (expérience des trois bols) :",
      "1. Prépare trois bols : eau froide, eau tiède, eau bien chaude (pas brûlante !).",
      "2. Mets la main gauche dans l'eau froide et la droite dans l'eau chaude pendant 30 secondes.",
      "3. Plonge ensuite les deux mains dans l'eau tiède : la gauche la sent chaude, la droite la sent froide !",
      "Conclusion : nos mains sentent les transferts de chaleur, mais seul le thermomètre mesure la vraie température.",
    ],
  },
  substitutions: [
    { officiel: "Thermomètre de laboratoire", local: "Thermomètre médical ou thermomètre de ménage" },
    { officiel: "Glaçons de laboratoire", local: "Glace du congélateur ou achetée au marché" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. La température se mesure en :  a) ampères   b) degrés Celsius   c) litres",
        "2. La chaleur passe toujours :  a) du chaud vers le froid   b) du froid vers le chaud   c) dans les deux sens",
        "3. La glace fond à :  a) 100 °C   b) 37 °C   c) 0 °C",
        "4. La fonte d'un glaçon est :  a) une variation de température   b) un changement d'état   c) une dilatation",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "en degrés Celsius (°C)", cle: true }, { text: "." }],
        [{ text: "2. Réponse a) : ", bold: true }, { text: "du chaud vers le froid", cle: true }, { text: "." }],
        [{ text: "3. Réponse c) : ", bold: true }, { text: "0 °C", cle: true }, { text: "." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "un changement d'état", cle: true }, { text: " : solide → liquide." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Le thermomètre mesure la chaleur.",
        "2. Un corps qui reçoit de la chaleur peut voir sa température monter.",
        "3. L'eau bout à 100 °C au niveau de la mer.",
        "4. Le thé chaud reçoit de la chaleur de la tasse froide.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : il mesure la température ; la chaleur est une énergie." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : c'est le thé chaud qui cède de la chaleur à la tasse." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : état – thermomètre – chaud – énergie – température – froid.",
      items: [
        "La ……… se mesure avec un ……… . La chaleur est une ……… qui passe du corps ……… vers le corps ……… . Elle peut faire varier la température ou changer l'……… d'un corps.",
      ],
      corrige: [
        [{ text: "La " }, { text: "température", cle: true }, { text: " se mesure avec un " }, { text: "thermomètre", cle: true }, { text: ". La chaleur est une " }, { text: "énergie", cle: true }, { text: " qui passe du corps " }, { text: "chaud", cle: true }, { text: " vers le corps " }, { text: "froid", cle: true }, { text: ". Elle peut faire varier la température ou changer l'" }, { text: "état", cle: true }, { text: " d'un corps." }],
      ],
    },
    {
      points: 6,
      consigne: "Voninkazo chauffe une casserole d'eau : à 20 °C au départ, l'eau atteint 100 °C puis se met à bouillir.",
      items: [
        "1. Quel effet de la chaleur observe-t-on entre 20 °C et 100 °C ?",
        "2. Quel effet observe-t-on à 100 °C, quand l'eau bout ?",
        "3. Comment s'appelle le passage de l'eau liquide à la vapeur ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "La variation de température", cle: true }, { text: " : la température de l'eau monte." }],
        [{ text: "2. " }, { text: "Le changement d'état", cle: true }, { text: " : l'eau liquide devient vapeur, la température reste à 100 °C." }],
        [{ text: "3. " }, { text: "La vaporisation (l'ébullition)", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S24 = {
  numero: 24, total: 34, unite: "III", theme: "Chaleur et température",
  titre: "Bons et mauvais conducteurs thermiques",
  objectif: "expliquer la conductivité thermique de différents matériaux et les classer en bons et mauvais conducteurs",
  documentation: DOC,
  support: "Casserole d'eau chaude, cuillère en métal, cuillère en bois, baguette en plastique, objets divers",
  image: "images/img_seance24.png",
  imageLegende: "Figure 24 — Le métal conduit la chaleur ; le bois et le plastique la conduisent mal",
  revision: {
    qa: [
      { q: "Avec quel instrument mesure-t-on la température ?", ra: "Avec un thermomètre, en degrés Celsius." },
      { q: "Dans quel sens la chaleur passe-t-elle ?", ra: "Du corps le plus chaud vers le corps le plus froid." },
      { q: "Cite les deux effets de la chaleur sur un corps.", ra: "La variation de température et le changement d'état." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "En remuant la soupe bouillante avec une cuillère en aluminium, Bodo s'est brûlé les doigts. Sa grand-mère lui a tendu la cuillère en bois : « Prends celle-ci, elle ne brûle pas ! »",
      "Pourquoi la cuillère en métal brûle-t-elle les doigts et pas celle en bois ?",
      "R.A. : Parce que le métal laisse passer la chaleur et pas le bois.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée", support: "Cuillères en métal et en bois",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Bons et mauvais conducteurs thermiques ». Après cette séance, vous serez capables de tester la conductivité thermique d'un matériau et de classer les matériaux en bons et mauvais conducteurs de chaleur.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien cette expérience : je plonge en même temps dans l'eau bien chaude une cuillère en métal, une cuillère en bois et une baguette en plastique. Après une minute, je touche prudemment le haut de chaque objet.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Eau chaude, cuillères, baguette en plastique",
  },
  analyse: {
    qa: [
      { q: "Quel objet est devenu chaud en haut ?", ra: "La cuillère en métal : la chaleur est montée le long du métal." },
      { q: "Le bois et le plastique sont-ils devenus chauds ?", ra: "Non, ils sont restés froids en haut." },
      { q: "Comment appelle-t-on un matériau qui laisse bien passer la chaleur ?", ra: "Un bon conducteur thermique." },
      { q: "Et un matériau qui la laisse mal passer ?", ra: "Un mauvais conducteur thermique, appelé aussi isolant thermique." },
      { q: "Les métaux conduisent bien la chaleur. Que conduisent-ils bien aussi ?", ra: "Le courant électrique : les bons conducteurs thermiques sont aussi de bons conducteurs électriques." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Expérience des trois objets",
  },
  synthese: {
    enseignant: "Donc, les matériaux ne laissent pas tous passer la chaleur de la même façon. Les bons conducteurs thermiques, comme les métaux (fer, aluminium, cuivre), laissent passer la chaleur rapidement. Les mauvais conducteurs thermiques, ou isolants, comme le bois, le plastique, la paille, la laine et l'air, laissent très mal passer la chaleur. Les métaux, bons conducteurs de chaleur, sont aussi de bons conducteurs d'électricité.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Classe ces matériaux en bons ou mauvais conducteurs thermiques : aluminium, laine de mouton, cuivre, paille, fer, liège.",
      items: [],
      corrige: [
        [{ text: "Bons conducteurs : ", bold: true }, { text: "aluminium, cuivre, fer", cle: true }, { text: " (les métaux)." }],
        [{ text: "Mauvais conducteurs (isolants) : ", bold: true }, { text: "laine de mouton, paille, liège", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Le fer est un bon conducteur thermique.",
        "b) Le bois laisse passer la chaleur rapidement.",
        "c) Un isolant thermique est un mauvais conducteur de chaleur.",
        "d) Les métaux conduisent bien la chaleur et l'électricité.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : le bois est un mauvais conducteur thermique." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: " : bonne conductivité thermique et électrique vont ensemble chez les métaux." }],
      ],
    },
  ],
  applicationTechnique: "Travail de groupe", applicationSupport: "Objets divers, ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : isolant – métaux – conducteur – électricité – chaleur.",
      items: [
        "a) Un matériau qui laisse bien passer la chaleur est un bon ……… thermique.",
        "b) Les ……… sont de bons conducteurs de ……… et d'……… .",
        "c) Un mauvais conducteur thermique est aussi appelé ……… thermique.",
      ],
      corrige: [
        [{ text: "a) Un bon " }, { text: "conducteur", cle: true }, { text: " thermique." }],
        [{ text: "b) Les " }, { text: "métaux", cle: true }, { text: " sont de bons conducteurs de " }, { text: "chaleur", cle: true }, { text: " et d'" }, { text: "électricité", cle: true }, { text: "." }],
        [{ text: "c) Un " }, { text: "isolant", cle: true }, { text: " thermique." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Propose une expérience pour tester si un matériau conduit bien la chaleur.",
        "b) Pourquoi les casseroles ont-elles souvent un manche en plastique ou en bois ?",
        "c) Pourquoi les habits en laine tiennent-ils chaud en hiver ?",
        "d) Cite deux bons conducteurs et deux mauvais conducteurs thermiques.",
      ],
      corrige: [
        [{ text: "a) Plonger un bout du matériau dans l'eau chaude et " }, { text: "toucher l'autre bout après une minute", cle: true }, { text: " : s'il devient chaud, le matériau est bon conducteur." }],
        [{ text: "b) Parce que le plastique et le bois sont des " }, { text: "isolants", cle: true }, { text: " : le manche reste froid et ne brûle pas la main." }],
        [{ text: "c) Parce que la laine est un " }, { text: "mauvais conducteur", cle: true }, { text: " : elle empêche la chaleur du corps de s'échapper." }],
        [{ text: "d) Bons conducteurs : " }, { text: "le fer et l'aluminium", cle: true }, { text: " ; mauvais : " }, { text: "le bois et la paille", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["conducteur thermique", "isolant thermique", "conductivité", "métaux"],
    sections: [
      {
        titre: "1. Tous les matériaux ne conduisent pas la chaleur de la même façon",
        paras: [
          "Quand on plonge des objets de matières différentes dans l'eau chaude, certains deviennent vite chauds sur toute leur longueur, d'autres restent froids : la conductivité thermique diffère selon les matériaux.",
        ],
      },
      {
        titre: "2. Les bons conducteurs thermiques",
        paras: [
          "Un bon conducteur thermique laisse passer la chaleur rapidement.",
          "Ce sont surtout les métaux : le fer, l'aluminium, le cuivre, l'argent.",
          "C'est pourquoi les marmites et les casseroles sont en métal : la chaleur du feu passe vite vers les aliments.",
        ],
      },
      {
        titre: "3. Les mauvais conducteurs thermiques (isolants)",
        paras: [
          "Un mauvais conducteur thermique, appelé aussi isolant thermique, laisse très mal passer la chaleur.",
          "Exemples : le bois, le plastique, la paille, la laine de mouton, le liège, la terre cuite, les fibres de bois, le plâtre et l'air immobile.",
          "C'est pourquoi les manches de casseroles sont en bois ou en plastique, et les couvertures en laine tiennent chaud.",
        ],
      },
      {
        titre: "4. Conductivité thermique et conductivité électrique",
        paras: [
          "Les métaux, bons conducteurs de chaleur, sont aussi de bons conducteurs d'électricité. À l'inverse, le bois et le plastique sont à la fois isolants thermiques et isolants électriques : c'est pour cela que les fils électriques sont recouverts de plastique.",
        ],
      },
    ],
    saisTu: [
      "Les maisons traditionnelles en falafa (feuilles de ravinala tressées) et les toits de chaume restent frais pendant les journées chaudes : les fibres végétales et l'air qu'elles emprisonnent sont d'excellents isolants thermiques. Un savoir-faire malgache bien avant les isolants modernes !",
    ],
    experience: [
      "Teste la conductivité des matériaux de ta cuisine :",
      "1. Verse de l'eau bien chaude dans un bol (demande à un adulte).",
      "2. Plonge en même temps : une cuillère en métal, une cuillère en bois, une baguette en plastique.",
      "3. Après une minute, touche prudemment le haut de chaque objet.",
      "4. Classe les matériaux du plus conducteur au plus isolant.",
    ],
  },
  substitutions: [
    { officiel: "Barres d'essai calibrées (fer, cuivre…)", local: "Cuillères, clous, tiges de fer à béton, baguettes en bois" },
    { officiel: "Bain thermostaté", local: "Bol d'eau chauffée sur fatapera ou réchaud" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Un bon conducteur thermique :  a) bloque la chaleur   b) laisse bien passer la chaleur   c) refroidit les corps",
        "2. Lequel de ces matériaux est un isolant thermique ?  a) le cuivre   b) l'aluminium   c) la paille",
        "3. Les manches de casseroles sont en bois car le bois :  a) est joli   b) conduit mal la chaleur   c) est lourd",
        "4. Les métaux conduisent bien :  a) la chaleur seulement   b) l'électricité seulement   c) la chaleur et l'électricité",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "il laisse bien passer la chaleur", cle: true }, { text: "." }],
        [{ text: "2. Réponse c) : ", bold: true }, { text: "la paille", cle: true }, { text: " ; le cuivre et l'aluminium sont des métaux, bons conducteurs." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "il conduit mal la chaleur", cle: true }, { text: " : la main ne se brûle pas." }],
        [{ text: "4. Réponse c) : ", bold: true }, { text: "la chaleur et l'électricité", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. La laine de mouton est un bon conducteur thermique.",
        "2. L'air immobile est un isolant thermique.",
        "3. Une cuillère en fer plongée dans la soupe chaude devient vite chaude.",
        "4. La terre cuite conduit très bien la chaleur.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : la laine est un isolant, c'est pourquoi elle tient chaud." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: " : le fer est bon conducteur." }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : la terre cuite est un mauvais conducteur ; les jarres en terre gardent l'eau fraîche." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : isolants – métaux – conducteur – chaleur – électricité – plastique.",
      items: [
        "Les ……… comme le fer et le cuivre laissent bien passer la ……… : ce sont de bons conducteurs. Le bois, la paille et le ……… sont des ……… . Un bon ……… thermique est aussi souvent bon conducteur d'……… .",
      ],
      corrige: [
        [{ text: "Les " }, { text: "métaux", cle: true }, { text: " comme le fer et le cuivre laissent bien passer la " }, { text: "chaleur", cle: true }, { text: " : ce sont de bons conducteurs. Le bois, la paille et le " }, { text: "plastique", cle: true }, { text: " sont des " }, { text: "isolants", cle: true }, { text: ". Un bon " }, { text: "conducteur", cle: true }, { text: " thermique est aussi souvent bon conducteur d'" }, { text: "électricité", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Explique chaque situation avec les mots « conducteur » ou « isolant » :",
      items: [
        "1. La marmite est en aluminium, mais son manche est en bakélite (plastique dur).",
        "2. L'eau reste fraîche dans une jarre en terre cuite appelée sinibe.",
        "3. Les habitants d'Antsirabe portent des vêtements en laine en juillet.",
      ],
      corrige: [
        [{ text: "1. L'aluminium, " }, { text: "bon conducteur", cle: true }, { text: ", transmet vite la chaleur du feu aux aliments ; la bakélite, " }, { text: "isolante", cle: true }, { text: ", protège la main." }],
        [{ text: "2. La terre cuite est un " }, { text: "mauvais conducteur", cle: true }, { text: " : la chaleur extérieure entre très lentement, l'eau reste fraîche." }],
        [{ text: "3. La laine est un " }, { text: "isolant", cle: true }, { text: " : elle retient la chaleur du corps pendant l'hiver des Hautes Terres." }],
      ],
    },
  ],
};

const S25 = {
  numero: 25, total: 34, unite: "III", theme: "Chaleur et température",
  titre: "Le transfert de chaleur par conduction",
  objectif: "mettre en évidence que la chaleur se transmet de proche en proche, sans déplacement de matière : la conduction",
  documentation: DOC,
  support: "Tige métallique, bougie, petites noisettes de beurre ou de cire, pince à linge",
  image: "images/img_seance25.png",
  imageLegende: "Figure 25 — La conduction : la chaleur se propage de proche en proche le long de la barre métallique",
  revision: {
    qa: [
      { q: "Qu'est-ce qu'un bon conducteur thermique ? Donne un exemple.", ra: "Un matériau qui laisse bien passer la chaleur, comme le fer ou l'aluminium." },
      { q: "Qu'est-ce qu'un isolant thermique ? Donne un exemple.", ra: "Un matériau qui laisse mal passer la chaleur, comme le bois ou la paille." },
      { q: "Pourquoi le manche des casseroles est-il en bois ou en plastique ?", ra: "Parce que ce sont des isolants : le manche ne brûle pas la main." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Ranja laisse sa cuillère en fer dans la marmite de riz qui cuit. Quelques minutes plus tard, il veut la reprendre : le bout de la cuillère, pourtant hors de la marmite, est brûlant !",
      "Comment la chaleur est-elle arrivée jusqu'au bout de la cuillère qui ne touchait pas le riz ?",
      "R.A. : La chaleur est montée le long du métal, petit à petit.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Le transfert de chaleur par conduction ». Après cette séance, vous serez capables d'expliquer comment la chaleur se transmet de proche en proche dans un corps solide.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien cette expérience : j'ai collé des petites noisettes de beurre à intervalles réguliers le long de cette tige métallique. Je chauffe maintenant une extrémité de la tige à la bougie. Observez les noisettes de beurre.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Tige métallique, bougie, beurre",
  },
  analyse: {
    qa: [
      { q: "Quelle noisette de beurre fond en premier ?", ra: "Celle qui est la plus proche de la flamme." },
      { q: "Dans quel ordre les autres fondent-elles ?", ra: "L'une après l'autre, de la plus proche à la plus éloignée de la flamme." },
      { q: "Qu'est-ce que cela montre sur le déplacement de la chaleur ?", ra: "La chaleur avance de proche en proche le long de la tige." },
      { q: "La matière de la tige se déplace-t-elle ?", ra: "Non, la tige reste immobile : seule la chaleur se déplace." },
      { q: "Dans quels corps la conduction se produit-elle surtout ?", ra: "Dans les solides, surtout les métaux." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Tige, bougie, beurre",
  },
  synthese: {
    enseignant: "Donc, dans un solide, la chaleur se transmet de proche en proche, de la partie chaude vers la partie froide, sans déplacement de matière : c'est la conduction. La conduction est rapide dans les bons conducteurs comme les métaux, et très lente dans les isolants comme le bois. C'est par conduction que la cuillère laissée dans la marmite devient brûlante jusqu'au manche.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Dans la conduction, la chaleur se transmet de proche en proche.",
        "b) Dans la conduction, la matière se déplace avec la chaleur.",
        "c) La conduction est rapide dans les métaux.",
        "d) La conduction se produit surtout dans les solides.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : la matière reste immobile, seule la chaleur se déplace." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: " : les métaux sont de bons conducteurs." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Explique chaque situation en utilisant le mot « conduction » :",
      items: [
        "a) Le bout de la cuillère en fer laissée dans la soupe devient brûlant.",
        "b) Le fond de la marmite posée sur le feu chauffe le riz.",
        "c) Le fer à repasser chaud lisse et chauffe le tissu.",
        "d) La poignée en bois de la théière reste froide.",
      ],
      corrige: [
        [{ text: "a) La chaleur monte " }, { text: "par conduction, de proche en proche", cle: true }, { text: ", le long du métal." }],
        [{ text: "b) La chaleur du feu traverse le métal du fond " }, { text: "par conduction", cle: true }, { text: " et passe au riz." }],
        [{ text: "c) La chaleur passe de la semelle chaude au tissu " }, { text: "par conduction", cle: true }, { text: ", par contact direct." }],
        [{ text: "d) Le bois est un isolant : " }, { text: "la conduction y est très lente", cle: true }, { text: ", la poignée reste froide." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : conduction – proche en proche – matière – solides – métaux.",
      items: [
        "a) La ……… est le transfert de chaleur de ……… , sans déplacement de ……… .",
        "b) Elle se produit surtout dans les ……… et elle est rapide dans les ……… .",
      ],
      corrige: [
        [{ text: "a) La " }, { text: "conduction", cle: true }, { text: " est le transfert de chaleur de " }, { text: "proche en proche", cle: true }, { text: ", sans déplacement de " }, { text: "matière", cle: true }, { text: "." }],
        [{ text: "b) Elle se produit surtout dans les " }, { text: "solides", cle: true }, { text: " et elle est rapide dans les " }, { text: "métaux", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Décris l'expérience de la tige et des noisettes de beurre, et ce qu'elle démontre.",
        "b) Pourquoi la conduction est-elle lente dans le bois ?",
        "c) Donne deux exemples de conduction dans la vie quotidienne.",
        "d) La matière se déplace-t-elle pendant la conduction ?",
      ],
      corrige: [
        [{ text: "a) On chauffe une extrémité d'une tige garnie de noisettes de beurre : elles fondent " }, { text: "l'une après l'autre, de la plus proche à la plus lointaine", cle: true }, { text: " : la chaleur avance de proche en proche." }],
        [{ text: "b) Parce que le bois est un " }, { text: "mauvais conducteur thermique", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "La cuillère qui chauffe dans la marmite ; le fond de la casserole qui chauffe les aliments", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Non", cle: true }, { text: " : seule la chaleur se déplace, la matière reste immobile." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["conduction", "de proche en proche", "sans déplacement de matière", "contact"],
    sections: [
      {
        titre: "1. L'expérience de la tige chauffée",
        paras: [
          "On fixe des petites noisettes de beurre le long d'une tige métallique, puis on chauffe une extrémité à la bougie. Les noisettes fondent l'une après l'autre, de la plus proche de la flamme à la plus éloignée : la chaleur avance le long de la tige.",
        ],
      },
      {
        titre: "2. La conduction",
        paras: [
          "La conduction est le transfert de chaleur de proche en proche dans un corps, de la partie chaude vers la partie froide, sans déplacement de matière.",
          "Caractéristiques :",
        ],
        puces: [
          "elle se produit surtout dans les solides ;",
          "elle nécessite un contact entre les corps ou les parties du corps ;",
          "elle est rapide dans les bons conducteurs (métaux) et très lente dans les isolants (bois, plastique, paille).",
        ],
      },
      {
        titre: "3. La conduction dans la vie quotidienne",
        puces: [
          "Le fond de la marmite transmet la chaleur du feu au riz.",
          "Le fer à repasser chauffe le tissu par contact.",
          "La cuillère en métal laissée dans la soupe devient brûlante jusqu'au bout.",
          "Le sol carrelé paraît froid sous les pieds nus : il conduit la chaleur du pied vers le sol.",
        ],
        paras: [],
      },
    ],
    saisTu: [
      "Le carrelage et la natte (tsihy) de la même pièce sont exactement à la même température ! Mais le carrelage paraît plus froid sous les pieds car il conduit mieux la chaleur : il « aspire » la chaleur de ta peau plus vite que la natte, qui est isolante. Nos sens perçoivent le transfert de chaleur, pas la température !",
    ],
    experience: [
      "L'expérience de la petite cuillère (avec un adulte) :",
      "1. Mets une cuillère en métal et une cuillère en bois dans un verre d'eau bien chaude.",
      "2. Pose une minuscule noisette de beurre en haut de chaque manche.",
      "3. Observe : le beurre fond sur la cuillère en métal, pas sur celle en bois.",
      "Conclusion : la chaleur monte par conduction dans le métal, bon conducteur.",
    ],
  },
  substitutions: [
    { officiel: "Banc de conduction avec cire calibrée", local: "Tige de fer à béton, bougie et petites noisettes de beurre" },
    { officiel: "Pince de laboratoire", local: "Pince à linge en bois pour tenir la tige sans se brûler" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. La conduction est un transfert de chaleur :  a) avec déplacement de matière   b) de proche en proche   c) à distance sans contact",
        "2. La conduction se produit surtout dans :  a) les solides   b) les liquides   c) le vide",
        "3. Dans l'expérience de la tige, la noisette qui fond en premier est :  a) la plus éloignée de la flamme   b) la plus proche de la flamme   c) celle du milieu",
        "4. La conduction est la plus rapide dans :  a) le bois   b) le plastique   c) le cuivre",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "de proche en proche", cle: true }, { text: ", sans déplacement de matière." }],
        [{ text: "2. Réponse a) : ", bold: true }, { text: "les solides", cle: true }, { text: "." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "la plus proche de la flamme", cle: true }, { text: "." }],
        [{ text: "4. Réponse c) : ", bold: true }, { text: "le cuivre", cle: true }, { text: ", un métal bon conducteur." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Pendant la conduction, la tige métallique se déplace vers la flamme.",
        "2. La conduction va de la partie chaude vers la partie froide.",
        "3. Le fer à repasser chauffe le tissu par conduction.",
        "4. La conduction est rapide dans la paille.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : la matière reste immobile, seule la chaleur avance." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: " : par contact direct." }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : la paille est isolante, la conduction y est très lente." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : contact – conduction – froide – proche en proche – chaude – immobile.",
      items: [
        "La ……… transmet la chaleur de ……… , de la partie ……… vers la partie ……… . Elle nécessite un ……… et la matière reste ……… .",
      ],
      corrige: [
        [{ text: "La " }, { text: "conduction", cle: true }, { text: " transmet la chaleur de " }, { text: "proche en proche", cle: true }, { text: ", de la partie " }, { text: "chaude", cle: true }, { text: " vers la partie " }, { text: "froide", cle: true }, { text: ". Elle nécessite un " }, { text: "contact", cle: true }, { text: " et la matière reste " }, { text: "immobile", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Observe la figure 25 en tête de la leçon, puis réponds :",
      items: [
        "1. Décris ce que montre le dégradé de couleur de la barre.",
        "2. Pourquoi la main à l'autre bout finira-t-elle par sentir la chaleur ?",
        "3. Que se passerait-il si la barre était en bois ? Justifie.",
      ],
      corrige: [
        [{ text: "1. La barre est " }, { text: "très chaude près de la flamme et de moins en moins chaude en s'éloignant", cle: true }, { text: " : la chaleur avance de proche en proche." }],
        [{ text: "2. Parce que la chaleur " }, { text: "progresse par conduction", cle: true }, { text: " tout le long de la barre métallique jusqu'à la main." }],
        [{ text: "3. La main ne sentirait presque rien : le bois est " }, { text: "un isolant, la conduction y est très lente", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S26 = {
  numero: 26, total: 34, unite: "III", theme: "Chaleur et température",
  titre: "Le transfert de chaleur par convection",
  objectif: "mettre en évidence que la chaleur se transmet par le mouvement d'un fluide : la convection",
  documentation: DOC,
  support: "Casserole d'eau, grains de riz ou sciure, réchaud, image de courants de convection",
  image: "images/img_seance26.png",
  imageLegende: "Figure 26 — La convection : l'eau chaude monte, l'eau froide descend",
  revision: {
    qa: [
      { q: "Qu'est-ce que la conduction ?", ra: "Le transfert de chaleur de proche en proche, sans déplacement de matière." },
      { q: "Dans quels corps la conduction se produit-elle surtout ?", ra: "Dans les solides, surtout les métaux." },
      { q: "Décris l'expérience qui met en évidence la conduction.", ra: "On chauffe une tige garnie de noisettes de beurre : elles fondent l'une après l'autre." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Quand la marmite de riz commence à chauffer, Lalao observe que les grains de riz montent au milieu, redescendent sur les bords, montent à nouveau : ils tournent sans que personne ne remue !",
      "Qu'est-ce qui fait tourner les grains de riz dans l'eau qui chauffe ?",
      "R.A. : L'eau elle-même bouge dans la marmite quand elle chauffe.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Le transfert de chaleur par convection ». Après cette séance, vous serez capables d'expliquer comment la chaleur se transmet par le mouvement d'un liquide ou d'un gaz.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien cette casserole d'eau qui chauffe, avec quelques grains de riz au fond. Observez le trajet des grains entraînés par l'eau : au-dessus de la flamme, ils montent ; sur les côtés, ils redescendent.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Casserole, eau, grains de riz, réchaud",
  },
  analyse: {
    qa: [
      { q: "Que fait l'eau chauffée au fond de la casserole ?", ra: "Elle monte vers la surface." },
      { q: "Que fait l'eau froide de la surface ?", ra: "Elle descend vers le fond, où elle est chauffée à son tour." },
      { q: "Comment la chaleur se répartit-elle alors dans toute l'eau ?", ra: "Par ce mouvement tournant : l'eau chaude transporte la chaleur en se déplaçant." },
      { q: "Y a-t-il déplacement de matière dans ce transfert ?", ra: "Oui : c'est l'eau elle-même qui se déplace en transportant la chaleur." },
      { q: "Ce transfert peut-il se produire dans un solide ?", ra: "Non : il ne se produit que dans les fluides, c'est-à-dire les liquides et les gaz." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Casserole d'eau qui chauffe",
  },
  synthese: {
    enseignant: "Donc, dans un liquide ou un gaz, la chaleur se transmet par le mouvement du fluide lui-même : le fluide chaud, plus léger, monte ; le fluide froid, plus lourd, descend ; ce mouvement tournant s'appelle un courant de convection. La convection est un transfert de chaleur avec déplacement de matière, qui ne se produit que dans les fluides : liquides et gaz.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Dans la convection, la matière se déplace en transportant la chaleur.",
        "b) L'eau chaude descend au fond de la casserole.",
        "c) La convection se produit dans les liquides et les gaz.",
        "d) La convection peut se produire dans une barre de fer.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: " : c'est la grande différence avec la conduction." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : l'eau chaude monte, l'eau froide descend." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: " : uniquement dans les fluides." }],
        [{ text: "d) " }, { text: "Faux", cle: true }, { text: " : dans un solide, il n'y a pas de convection, seulement de la conduction." }],
      ],
    },
    {
      consigne: "Indique le mode de transfert : conduction ou convection ?",
      items: [
        "a) L'eau de la marmite chauffe entièrement grâce au mouvement de l'eau.",
        "b) Le manche métallique de la casserole devient chaud.",
        "c) L'air chaud du feu monte et réchauffe les mains placées au-dessus.",
        "d) Le fond de la casserole transmet la chaleur du feu à l'eau.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Convection", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Conduction", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Convection", cle: true }, { text: " : l'air chaud monte." }],
        [{ text: "d) " }, { text: "Conduction", cle: true }, { text: " : par contact, de proche en proche." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : convection – monte – descend – fluide – courant.",
      items: [
        "a) Dans une casserole qui chauffe, l'eau chaude ……… et l'eau froide ……… .",
        "b) Ce mouvement tournant s'appelle un ……… de ……… .",
        "c) La convection ne se produit que dans un ……… : liquide ou gaz.",
      ],
      corrige: [
        [{ text: "a) L'eau chaude " }, { text: "monte", cle: true }, { text: " et l'eau froide " }, { text: "descend", cle: true }, { text: "." }],
        [{ text: "b) Un " }, { text: "courant", cle: true }, { text: " de " }, { text: "convection", cle: true }, { text: "." }],
        [{ text: "c) Dans un " }, { text: "fluide", cle: true }, { text: " : liquide ou gaz." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Qu'est-ce que la convection ?",
        "b) Pourquoi le fluide chaud monte-t-il ?",
        "c) Quelle différence y a-t-il entre conduction et convection ?",
        "d) Donne deux exemples de convection dans la vie quotidienne.",
      ],
      corrige: [
        [{ text: "a) C'est le " }, { text: "transfert de chaleur par le mouvement d'un fluide", cle: true }, { text: " (liquide ou gaz)." }],
        [{ text: "b) Parce qu'en chauffant, il devient " }, { text: "plus léger (moins dense)", cle: true }, { text: " que le fluide froid." }],
        [{ text: "c) Conduction : " }, { text: "sans déplacement de matière", cle: true }, { text: " (solides) ; convection : " }, { text: "avec déplacement de matière", cle: true }, { text: " (fluides)." }],
        [{ text: "d) " }, { text: "L'eau qui chauffe dans la marmite ; l'air chaud qui monte au-dessus du feu", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["convection", "courant de convection", "fluide", "monte", "descend"],
    sections: [
      {
        titre: "1. L'observation de l'eau qui chauffe",
        paras: [
          "Dans une casserole qui chauffe, des grains de riz déposés au fond se mettent à tourner : ils montent au-dessus de la flamme, redescendent sur les bords. C'est l'eau elle-même qui bouge et les entraîne.",
        ],
      },
      {
        titre: "2. La convection",
        paras: [
          "La convection est le transfert de chaleur par le mouvement d'un fluide (liquide ou gaz).",
          "Le mécanisme :",
        ],
        puces: [
          "le fluide chauffé devient plus léger et monte ;",
          "le fluide froid, plus lourd, descend et se fait chauffer à son tour ;",
          "ce mouvement tournant s'appelle un courant de convection.",
        ],
      },
      {
        titre: "3. Convection et conduction : la différence",
        paras: [
          "Dans la conduction, la matière ne bouge pas : la chaleur avance de proche en proche dans le solide. Dans la convection, la matière se déplace : le fluide transporte la chaleur avec lui. La convection ne peut donc pas exister dans un solide.",
        ],
      },
      {
        titre: "4. La convection dans la vie quotidienne",
        puces: [
          "L'eau chauffe dans la marmite grâce aux courants de convection.",
          "L'air chaud du feu ou du fatapera monte : on place la viande à fumer au-dessus.",
          "Les brises côtières : le jour, l'air chaud des terres monte et l'air frais de la mer le remplace.",
          "L'air chaud monte au plafond des maisons ; l'air frais reste en bas.",
        ],
        paras: [],
      },
    ],
    saisTu: [
      "Les pêcheurs vezo utilisent la convection sans le savoir : le matin, la brise de terre les pousse vers le large, et l'après-midi, la brise de mer les ramène à la côte ! Ces vents sont des courants de convection géants créés par la différence de température entre la terre et la mer.",
    ],
    experience: [
      "Visualise un courant de convection (avec un adulte) :",
      "1. Remplis un grand bocal d'eau froide.",
      "2. Remplis un petit flacon d'eau très chaude colorée (sirop de grenadine ou colorant).",
      "3. Bouche le flacon avec le doigt, plonge-le au fond du bocal, puis retire ton doigt.",
      "4. Observe : l'eau chaude colorée monte en panache vers la surface !",
    ],
  },
  substitutions: [
    { officiel: "Cuve de convection avec colorant", local: "Bocal en verre, flacon, sirop coloré ou jus de betterave" },
    { officiel: "Sciure calibrée", local: "Quelques grains de riz dans la casserole" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. La convection est un transfert de chaleur :  a) sans déplacement de matière   b) avec déplacement de matière   c) sans chaleur",
        "2. La convection se produit dans :  a) les solides seulement   b) les fluides (liquides et gaz)   c) le métal",
        "3. Dans une casserole qui chauffe, l'eau chaude :  a) monte   b) descend   c) reste immobile",
        "4. Le mouvement tournant du fluide s'appelle :  a) un courant de convection   b) une conduction   c) une dilatation",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "avec déplacement de matière", cle: true }, { text: " : le fluide transporte la chaleur." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "les fluides", cle: true }, { text: " : liquides et gaz." }],
        [{ text: "3. Réponse a) : ", bold: true }, { text: "elle monte", cle: true }, { text: ", car elle est plus légère." }],
        [{ text: "4. Réponse a) : ", bold: true }, { text: "un courant de convection", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. L'air chaud d'un feu monte : c'est de la convection.",
        "2. La convection peut se produire dans une cuillère en fer.",
        "3. Le fluide froid descend car il est plus lourd.",
        "4. Dans la convection, la chaleur avance de proche en proche sans que rien ne bouge.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Faux", cle: true }, { text: " : la convection n'existe pas dans les solides." }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : c'est la définition de la conduction ; dans la convection, le fluide se déplace." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : légère – convection – monte – descend – lourde – fluide.",
      items: [
        "Dans la ………, la chaleur est transportée par le mouvement d'un ……… . L'eau chaude, plus ………, ……… ; l'eau froide, plus ………, ……… .",
      ],
      corrige: [
        [{ text: "Dans la " }, { text: "convection", cle: true }, { text: ", la chaleur est transportée par le mouvement d'un " }, { text: "fluide", cle: true }, { text: ". L'eau chaude, plus " }, { text: "légère", cle: true }, { text: ", " }, { text: "monte", cle: true }, { text: " ; l'eau froide, plus " }, { text: "lourde", cle: true }, { text: ", " }, { text: "descend", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Observe la figure 26 en tête de la leçon, puis réponds :",
      items: [
        "1. Que représentent la flèche rouge et la flèche bleue ?",
        "2. Explique pourquoi toute l'eau de la casserole finit par devenir chaude.",
        "3. Pourquoi place-t-on la viande à fumer au-dessus du feu et non à côté ?",
      ],
      corrige: [
        [{ text: "1. La flèche rouge : " }, { text: "l'eau chaude qui monte", cle: true }, { text: " ; la flèche bleue : " }, { text: "l'eau froide qui descend", cle: true }, { text: "." }],
        [{ text: "2. Le " }, { text: "courant de convection", cle: true }, { text: " brasse l'eau : chaque partie passe près du feu et se réchauffe." }],
        [{ text: "3. Parce que " }, { text: "l'air chaud et la fumée montent", cle: true }, { text: " : au-dessus du feu, la viande reçoit la chaleur portée par la convection." }],
      ],
    },
  ],
};

const S27 = {
  numero: 27, total: 34, unite: "III", theme: "Chaleur et température",
  titre: "Le transfert de chaleur par rayonnement",
  objectif: "mettre en évidence que la chaleur peut se transmettre à distance, sans contact et sans matière : le rayonnement",
  documentation: DOC,
  support: "Cour ensoleillée (ou lampe puissante), objets sombres et clairs, image du Soleil et de la Terre",
  image: "images/img_seance27.png",
  imageLegende: "Figure 27 — Le rayonnement : la chaleur du Soleil nous parvient à distance, sans contact",
  revision: {
    qa: [
      { q: "Qu'est-ce que la convection ?", ra: "Le transfert de chaleur par le mouvement d'un fluide." },
      { q: "Pourquoi l'eau chaude monte-t-elle ?", ra: "Parce qu'elle est plus légère que l'eau froide." },
      { q: "La convection existe-t-elle dans les solides ?", ra: "Non, seulement dans les liquides et les gaz." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "À midi, dans la cour, Mahery sent la chaleur du Soleil sur son visage. Pourtant, le Soleil est à 150 millions de kilomètres, et entre lui et nous, l'espace est vide : ni air, ni eau, ni solide !",
      "Comment la chaleur du Soleil peut-elle arriver jusqu'à nous à travers le vide ?",
      "R.A. : Elle voyage à distance, sans avoir besoin de matière.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Le transfert de chaleur par rayonnement ». Après cette séance, vous serez capables d'expliquer comment la chaleur se transmet à distance, sans contact et sans matière.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : sortons un instant au soleil. Placez votre main face au Soleil, puis à l'ombre. Observez aussi ces deux tissus posés au soleil depuis ce matin : le tissu noir et le tissu blanc. Touchez-les l'un après l'autre.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Soleil, tissus noir et blanc",
  },
  analyse: {
    qa: [
      { q: "Que sent la main placée face au Soleil ?", ra: "Elle sent la chaleur, immédiatement." },
      { q: "Le Soleil touche-t-il notre main ? Y a-t-il de la matière entre lui et nous ?", ra: "Non : la chaleur arrive à distance, à travers le vide de l'espace." },
      { q: "Comment s'appelle ce mode de transfert ?", ra: "Le rayonnement : la chaleur est transportée par des rayons." },
      { q: "Quel tissu est le plus chaud : le noir ou le blanc ?", ra: "Le noir : les surfaces sombres absorbent mieux le rayonnement." },
      { q: "Que fait une surface claire ou brillante ?", ra: "Elle réfléchit le rayonnement : elle chauffe moins." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Soleil, tissus",
  },
  synthese: {
    enseignant: "Donc, la chaleur peut se transmettre à distance, sans contact et sans matière : c'est le rayonnement. Le Soleil chauffe la Terre par rayonnement à travers le vide de l'espace. Un feu ou des braises nous chauffent aussi par rayonnement quand nous sommes à côté. Les surfaces sombres absorbent bien le rayonnement et chauffent beaucoup ; les surfaces claires ou brillantes le réfléchissent et chauffent moins.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Le rayonnement transmet la chaleur sans contact.",
        "b) Le rayonnement a besoin d'air pour se propager.",
        "c) Une surface noire absorbe bien le rayonnement.",
        "d) Le Soleil chauffe la Terre par conduction.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : il traverse même le vide de l'espace." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: " : c'est pourquoi elle devient très chaude au soleil." }],
        [{ text: "d) " }, { text: "Faux", cle: true }, { text: " : il la chauffe par rayonnement, à travers le vide." }],
      ],
    },
    {
      consigne: "Indique le mode de transfert : conduction, convection ou rayonnement ?",
      items: [
        "a) On se réchauffe les mains face aux braises, sans les toucher.",
        "b) Le toit en tôle devient brûlant au soleil.",
        "c) L'air chaud monte au-dessus du fatapera.",
        "d) La marmite posée sur les braises chauffe par son fond.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Rayonnement", cle: true }, { text: " : à distance, sans contact." }],
        [{ text: "b) " }, { text: "Rayonnement", cle: true }, { text: " : la tôle absorbe les rayons du Soleil." }],
        [{ text: "c) " }, { text: "Convection", cle: true }, { text: " : l'air chaud monte." }],
        [{ text: "d) " }, { text: "Conduction", cle: true }, { text: " : par contact direct." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : rayonnement – vide – sombres – contact – réfléchissent.",
      items: [
        "a) Le ……… transmet la chaleur à distance, sans ……… et sans matière : il traverse même le ……… .",
        "b) Les surfaces ……… absorbent bien le rayonnement ; les surfaces claires le ……… .",
      ],
      corrige: [
        [{ text: "a) Le " }, { text: "rayonnement", cle: true }, { text: " transmet la chaleur à distance, sans " }, { text: "contact", cle: true }, { text: " et sans matière : il traverse même le " }, { text: "vide", cle: true }, { text: "." }],
        [{ text: "b) Les surfaces " }, { text: "sombres", cle: true }, { text: " absorbent bien le rayonnement ; les surfaces claires le " }, { text: "réfléchissent", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Qu'est-ce que le rayonnement ?",
        "b) Comment la chaleur du Soleil arrive-t-elle jusqu'à la Terre ?",
        "c) Pourquoi porte-t-on des vêtements clairs quand il fait très chaud ?",
        "d) Récapitule les trois modes de transfert de chaleur avec un exemple chacun.",
      ],
      corrige: [
        [{ text: "a) C'est le " }, { text: "transfert de chaleur à distance, sans contact et sans matière", cle: true }, { text: "." }],
        [{ text: "b) Par " }, { text: "rayonnement, à travers le vide de l'espace", cle: true }, { text: "." }],
        [{ text: "c) Parce que les couleurs claires " }, { text: "réfléchissent le rayonnement du Soleil", cle: true }, { text: " : on a moins chaud." }],
        [{ text: "d) " }, { text: "Conduction", cle: true }, { text: " : la cuillère qui chauffe dans la marmite ; " }, { text: "convection", cle: true }, { text: " : l'eau qui tourne dans la casserole ; " }, { text: "rayonnement", cle: true }, { text: " : le Soleil qui chauffe la Terre." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["rayonnement", "à distance", "sans contact", "absorbe", "réfléchit"],
    sections: [
      {
        titre: "1. La chaleur qui voyage à distance",
        paras: [
          "Face au Soleil ou près d'un feu de braises, nous sentons la chaleur sans rien toucher. Cette chaleur nous parvient à distance, transportée par des rayons invisibles.",
        ],
      },
      {
        titre: "2. Le rayonnement",
        paras: [
          "Le rayonnement est le transfert de chaleur à distance, sans contact et sans matière.",
          "Caractéristiques :",
        ],
        puces: [
          "il n'a besoin ni de solide, ni de liquide, ni de gaz : il traverse le vide ;",
          "c'est ainsi que le Soleil chauffe la Terre à travers l'espace ;",
          "tout corps chaud émet un rayonnement : le feu, les braises, le fer rouge du forgeron.",
        ],
      },
      {
        titre: "3. Surfaces sombres et surfaces claires",
        puces: [
          "Une surface sombre absorbe bien le rayonnement : le tissu noir et la tôle deviennent brûlants au soleil.",
          "Une surface claire ou brillante réfléchit le rayonnement : elle chauffe moins.",
          "Applications : vêtements clairs par forte chaleur, réservoirs peints en blanc, miroirs des cuiseurs solaires.",
        ],
        paras: [],
      },
      {
        titre: "4. Les trois modes de transfert : récapitulatif",
        puces: [
          "Conduction : de proche en proche, sans déplacement de matière (solides).",
          "Convection : par le mouvement d'un fluide (liquides et gaz).",
          "Rayonnement : à distance, sans contact et sans matière (même dans le vide).",
        ],
        paras: [],
      },
    ],
    saisTu: [
      "À Madagascar, des associations diffusent des cuiseurs solaires : leurs miroirs réfléchissent le rayonnement du Soleil et le concentrent sur la marmite noire, qui l'absorbe. On peut ainsi cuire le riz sans bois ni charbon : une solution qui protège les forêts !",
    ],
    experience: [
      "Compare l'absorption du rayonnement :",
      "1. Pose au soleil deux boîtes de conserve remplies d'eau : une peinte ou entourée de tissu noir, l'autre de blanc.",
      "2. Attends une heure, puis compare la température de l'eau avec un thermomètre (ou avec le doigt).",
      "3. L'eau de la boîte noire est plus chaude : le noir absorbe mieux le rayonnement.",
    ],
  },
  substitutions: [
    { officiel: "Lampe infrarouge de démonstration", local: "Le Soleil de la cour de l'école, ou des braises (à distance prudente)" },
    { officiel: "Plaques absorbantes calibrées", local: "Tissus ou papiers noir et blanc, boîtes de conserve peintes" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Le rayonnement transmet la chaleur :  a) par contact   b) par mouvement d'un fluide   c) à distance sans matière",
        "2. Le Soleil chauffe la Terre par :  a) conduction   b) convection   c) rayonnement",
        "3. La surface qui absorbe le mieux le rayonnement est :  a) blanche   b) noire   c) brillante",
        "4. Le rayonnement peut traverser :  a) le vide   b) uniquement l'air   c) uniquement l'eau",
      ],
      corrige: [
        [{ text: "1. Réponse c) : ", bold: true }, { text: "à distance, sans matière", cle: true }, { text: "." }],
        [{ text: "2. Réponse c) : ", bold: true }, { text: "par rayonnement", cle: true }, { text: ", à travers le vide de l'espace." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "noire", cle: true }, { text: "." }],
        [{ text: "4. Réponse a) : ", bold: true }, { text: "le vide", cle: true }, { text: " : il n'a besoin d'aucune matière." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. On sent la chaleur des braises sans les toucher : c'est du rayonnement.",
        "2. Une surface blanche absorbe mieux la chaleur qu'une surface noire.",
        "3. Le rayonnement a besoin d'air pour transporter la chaleur.",
        "4. Tout corps chaud émet un rayonnement.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Faux", cle: true }, { text: " : c'est la surface noire qui absorbe le mieux ; la blanche réfléchit." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : il traverse même le vide." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: " : le feu, les braises, le fer rouge…" }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : contact – absorbe – rayonnement – réfléchit – vide – distance.",
      items: [
        "Le ……… transmet la chaleur à ………, sans ……… et sans matière : il traverse le ……… . Une surface noire ……… le rayonnement ; une surface claire le ……… .",
      ],
      corrige: [
        [{ text: "Le " }, { text: "rayonnement", cle: true }, { text: " transmet la chaleur à " }, { text: "distance", cle: true }, { text: ", sans " }, { text: "contact", cle: true }, { text: " et sans matière : il traverse le " }, { text: "vide", cle: true }, { text: ". Une surface noire " }, { text: "absorbe", cle: true }, { text: " le rayonnement ; une surface claire le " }, { text: "réfléchit", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Pour chaque situation, indique le mode de transfert (conduction, convection ou rayonnement) et justifie :",
      items: [
        "1. La semelle du fer à repasser chauffe la chemise.",
        "2. La fumée et l'air chaud montent au-dessus du feu de camp.",
        "3. Le mur exposé au soleil de l'après-midi devient chaud.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Conduction", cle: true }, { text: " : contact direct, la chaleur passe de proche en proche." }],
        [{ text: "2. " }, { text: "Convection", cle: true }, { text: " : l'air chaud, plus léger, monte en transportant la chaleur." }],
        [{ text: "3. " }, { text: "Rayonnement", cle: true }, { text: " : la chaleur du Soleil arrive à distance et le mur l'absorbe." }],
      ],
    },
  ],
};

const S28 = {
  numero: 28, total: 34, unite: "III", theme: "Chaleur et température",
  titre: "La perte de chaleur et les isolants thermiques",
  objectif: "constater que les échanges thermiques peuvent être réduits et décrire les techniques de conservation de la chaleur",
  documentation: DOC,
  support: "Deux récipients identiques, eau chaude, couvercle, tissus isolants, thermomètre, chronomètre ou montre",
  image: "images/img_seance28.png",
  imageLegende: "Figure 28 — La tasse ouverte perd vite sa chaleur ; le récipient couvert et isolé la conserve",
  revision: {
    qa: [
      { q: "Cite les trois modes de transfert de chaleur.", ra: "La conduction, la convection et le rayonnement." },
      { q: "Quel mode de transfert traverse le vide ?", ra: "Le rayonnement." },
      { q: "Quel mode se produit dans les fluides avec déplacement de matière ?", ra: "La convection." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Le matin, Voahangy prépare le café de son père qui part aux champs. Pour qu'il reste chaud jusqu'à midi, elle le verse dans une bouteille thermos. À midi, le café est encore fumant !",
      "Comment le thermos garde-t-il le café chaud pendant des heures ?",
      "R.A. : Il empêche la chaleur de s'échapper.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée", support: "Bouteille thermos ou image",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La perte de chaleur et les isolants thermiques ». Après cette séance, vous serez capables d'expliquer comment un corps chaud perd sa chaleur et de décrire les techniques pour réduire cette perte.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien cette expérience : j'ai versé la même eau chaude dans deux récipients identiques. Le premier reste ouvert ; le second est couvert et enveloppé dans un tissu de laine. Après quinze minutes, je mesure la température de l'eau dans chacun.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Deux récipients, eau chaude, couvercle, laine, thermomètre",
  },
  analyse: {
    qa: [
      { q: "Dans quel récipient l'eau a-t-elle le plus refroidi ?", ra: "Dans le récipient ouvert et non enveloppé." },
      { q: "Par où la chaleur s'échappe-t-elle du récipient ouvert ?", ra: "Par le haut avec la vapeur et l'air chaud (convection), par les parois (conduction) et par rayonnement." },
      { q: "À quoi sert le couvercle ?", ra: "Il bloque la convection : l'air chaud et la vapeur ne s'échappent plus." },
      { q: "À quoi sert le tissu de laine ?", ra: "C'est un isolant : il ralentit la conduction à travers les parois." },
      { q: "Cite les techniques utilisées dans une bouteille thermos.", ra: "Le vide entre deux parois, une surface réfléchissante et un bouchon isolant." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Expérience des deux récipients",
  },
  synthese: {
    enseignant: "Donc, un corps chaud perd sa chaleur par les trois modes de transfert : conduction, convection et rayonnement. On peut réduire cette perte de chaleur : un isolant épais autour des parois ralentit la conduction ; un couvercle bloque la convection ; une surface réfléchissante renvoie le rayonnement ; et le vide, comme entre les deux parois du thermos, arrête presque tous les transferts. C'est ainsi que le thermos garde le café chaud pendant des heures.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Associe chaque technique au transfert qu'elle réduit : couvercle, isolant épais, surface réfléchissante, vide.",
      items: [
        "a) Réduit la conduction à travers les parois.",
        "b) Bloque la convection vers le haut.",
        "c) Renvoie le rayonnement.",
        "d) Supprime conduction et convection entre deux parois.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "L'isolant épais", cle: true }, { text: " (laine, paille, liège)." }],
        [{ text: "b) " }, { text: "Le couvercle", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "La surface réfléchissante", cle: true }, { text: " (paroi brillante)." }],
        [{ text: "d) " }, { text: "Le vide", cle: true }, { text: " : sans matière, ni conduction ni convection." }],
      ],
    },
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Un corps chaud perd sa chaleur par les trois modes de transfert.",
        "b) Un couvercle augmente la perte de chaleur.",
        "c) Le vide arrête la conduction et la convection.",
        "d) La laine autour d'un récipient ralentit la perte de chaleur.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : il bloque la convection et réduit la perte." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: " : sans matière, ces deux transferts sont impossibles." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: " : la laine est un isolant." }],
      ],
    },
  ],
  applicationTechnique: "Travail de groupe", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : isolant – vide – rayonnement – couvercle – perte – réfléchissante.",
      items: [
        "a) Pour réduire la ……… de chaleur, on entoure le récipient d'un ……… épais et on pose un ……… .",
        "b) Une surface ……… renvoie le ……… ; le ……… entre deux parois arrête presque tous les transferts.",
      ],
      corrige: [
        [{ text: "a) Pour réduire la " }, { text: "perte", cle: true }, { text: " de chaleur, on entoure le récipient d'un " }, { text: "isolant", cle: true }, { text: " épais et on pose un " }, { text: "couvercle", cle: true }, { text: "." }],
        [{ text: "b) Une surface " }, { text: "réfléchissante", cle: true }, { text: " renvoie le " }, { text: "rayonnement", cle: true }, { text: " ; le " }, { text: "vide", cle: true }, { text: " entre deux parois arrête presque tous les transferts." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Par quels modes de transfert un bol de soupe chaude perd-il sa chaleur ?",
        "b) Cite trois techniques de conservation de la chaleur.",
        "c) Pourquoi couvre-t-on la marmite de riz pendant la cuisson ?",
        "d) Comment les habitants des Hautes Terres gardent-ils leur maison chaude la nuit ?",
      ],
      corrige: [
        [{ text: "a) Par " }, { text: "conduction (parois), convection (vapeur et air chaud) et rayonnement", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "L'isolant épais, le couvercle, la surface réfléchissante", cle: true }, { text: " (et le vide)." }],
        [{ text: "c) Pour " }, { text: "bloquer la convection", cle: true }, { text: " : la vapeur et la chaleur restent dans la marmite, le riz cuit plus vite avec moins de charbon." }],
        [{ text: "d) En " }, { text: "fermant portes et volets et grâce aux murs épais", cle: true }, { text: " qui isolent : la chaleur du jour reste à l'intérieur." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["perte de chaleur", "isolant thermique", "conservation", "vide", "surface réfléchissante"],
    sections: [
      {
        titre: "1. Un corps chaud perd sa chaleur",
        paras: [
          "Un corps chaud abandonné à l'air libre se refroidit : il cède sa chaleur au milieu plus froid qui l'entoure, par les trois modes de transfert :",
        ],
        puces: [
          "par conduction, à travers ses parois et son support ;",
          "par convection, avec l'air chaud et la vapeur qui montent ;",
          "par rayonnement, dans toutes les directions.",
        ],
      },
      {
        titre: "2. Réduire la perte de chaleur",
        paras: ["Pour conserver la chaleur, on s'attaque à chaque mode de transfert :"],
        puces: [
          "contre la conduction : entourer le récipient d'un isolant épais (laine, paille, liège, tissus) ;",
          "contre la convection : fermer avec un couvercle ou un bouchon ;",
          "contre le rayonnement : utiliser une surface réfléchissante (paroi brillante) ;",
          "le vide entre deux parois supprime conduction et convection : c'est la technique la plus efficace.",
        ],
      },
      {
        titre: "3. Des applications quotidiennes",
        puces: [
          "La bouteille thermos combine toutes les techniques : double paroi avec vide, surfaces réfléchissantes, bouchon isolant.",
          "La glacière isolée garde la fraîcheur (elle empêche la chaleur d'entrer).",
          "La marmite couverte cuit plus vite et économise le charbon.",
          "La marmite enveloppée dans des tissus ou de la paille finit de cuire le riz sans feu.",
        ],
        paras: [],
      },
    ],
    saisTu: [
      "La « marmite norvégienne » est utilisée par des familles malgaches pour économiser le charbon : on porte le riz à ébullition quelques minutes, puis on enferme la marmite dans une caisse remplie de paille ou de couvertures. La cuisson se termine toute seule, sans feu, grâce à la chaleur conservée !",
    ],
    experience: [
      "Le concours du thé le plus chaud :",
      "1. Verse la même quantité d'eau bien chaude dans deux bocaux identiques.",
      "2. Laisse le premier ouvert ; ferme le second et enveloppe-le dans un pull de laine.",
      "3. Après 30 minutes, compare les températures (thermomètre ou doigt prudent).",
      "Conclusion : couvercle + isolant = chaleur conservée bien plus longtemps.",
    ],
  },
  substitutions: [
    { officiel: "Calorimètre", local: "Bocaux ou boîtes identiques avec couvercles" },
    { officiel: "Isolants de laboratoire", local: "Laine, paille, vieux tissus, papier journal froissé" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Un bol de soupe chaude à l'air libre :  a) garde sa chaleur   b) perd sa chaleur   c) devient plus chaud",
        "2. Le couvercle réduit surtout la perte par :  a) conduction   b) convection   c) rayonnement",
        "3. La technique la plus efficace contre la perte de chaleur est :  a) le vide entre deux parois   b) une paroi fine   c) un récipient ouvert",
        "4. Une paroi brillante réduit la perte par :  a) conduction   b) convection   c) rayonnement",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "il perd sa chaleur", cle: true }, { text: " au profit du milieu plus froid." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "la convection", cle: true }, { text: " : l'air chaud et la vapeur ne s'échappent plus." }],
        [{ text: "3. Réponse a) : ", bold: true }, { text: "le vide entre deux parois", cle: true }, { text: "." }],
        [{ text: "4. Réponse c) : ", bold: true }, { text: "le rayonnement", cle: true }, { text: ", qu'elle réfléchit." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Un corps chaud ne perd sa chaleur que par conduction.",
        "2. La paille peut servir d'isolant thermique.",
        "3. Une glacière empêche la chaleur extérieure d'entrer.",
        "4. Plus la paroi isolante est épaisse, plus la perte de chaleur est grande.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : il perd sa chaleur par les trois modes : conduction, convection et rayonnement." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: " : l'isolation marche dans les deux sens." }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : plus l'isolant est épais, plus la perte est réduite." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : convection – isolant – couvercle – vide – réfléchissante – conduction.",
      items: [
        "Un ……… épais ralentit la ……… ; un ……… bloque la ……… ; une surface ……… renvoie le rayonnement ; le ……… supprime presque tous les transferts.",
      ],
      corrige: [
        [{ text: "Un " }, { text: "isolant", cle: true }, { text: " épais ralentit la " }, { text: "conduction", cle: true }, { text: " ; un " }, { text: "couvercle", cle: true }, { text: " bloque la " }, { text: "convection", cle: true }, { text: " ; une surface " }, { text: "réfléchissante", cle: true }, { text: " renvoie le rayonnement ; le " }, { text: "vide", cle: true }, { text: " supprime presque tous les transferts." }],
      ],
    },
    {
      points: 6,
      consigne: "Voahangy verse le café bouillant dans deux récipients : une tasse ouverte et une bouteille thermos.",
      items: [
        "1. Décris les trois chemins par lesquels la chaleur s'échappe de la tasse ouverte.",
        "2. Explique comment le thermos bloque chacun de ces chemins.",
        "3. Cite une autre situation où l'on conserve la chaleur (ou la fraîcheur) à la maison.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Conduction à travers les parois ; convection avec la vapeur et l'air chaud ; rayonnement", cle: true }, { text: " dans toutes les directions." }],
        [{ text: "2. " }, { text: "Le vide entre les parois bloque conduction et convection ; les surfaces réfléchissantes renvoient le rayonnement ; le bouchon isolant ferme le haut", cle: true }, { text: "." }],
        [{ text: "3. Par exemple : " }, { text: "la marmite enveloppée de tissus, la glacière", cle: true }, { text: ", les jarres en terre pour l'eau fraîche." }],
      ],
    },
  ],
};

const S29 = {
  numero: 29, total: 34, unite: "III", theme: "Chaleur et température",
  titre: "Construire un objet qui réduit la perte de chaleur",
  objectif: "concevoir et construire un objet ou un système isotherme qui réduit la perte de chaleur, et expliquer son fonctionnement",
  documentation: DOC,
  support: "Boîtes en carton ou plastique, isolants (paille, tissus, papier journal), petites bouteilles, eau chaude, thermomètre, ruban adhésif, ciseaux",
  image: "images/img_seance29.png",
  imageLegende: "Figure 29 — Une bouteille thermos vue en coupe : bouchon isolant, vide, paroi réfléchissante",
  revision: {
    qa: [
      { q: "Par quels modes un corps chaud perd-il sa chaleur ?", ra: "Par conduction, convection et rayonnement." },
      { q: "Cite deux techniques de conservation de la chaleur.", ra: "L'isolant épais et le couvercle (ou le vide, la surface réfléchissante)." },
      { q: "Quel transfert le couvercle bloque-t-il ?", ra: "La convection." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "L'école organise un concours : chaque groupe doit fabriquer, avec des matériaux de récupération, la « boîte magique » qui gardera une bouteille d'eau chaude le plus longtemps possible. Le groupe gagnant est celui dont l'eau sera la plus chaude après deux heures.",
      "Avec quoi et comment construiriez-vous votre boîte ?",
      "R.A. : Avec une boîte, des isolants comme la paille ou les tissus, et un couvercle bien fermé.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Situation problème, défi", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Construire un objet qui réduit la perte de chaleur ». Après cette séance, vous serez capables de concevoir, construire et expliquer un système isotherme avec des matériaux simples.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien ce schéma en coupe de la bouteille thermos : les deux parois avec le vide entre elles, la surface réfléchissante brillante, et le bouchon isolant. Observez aussi les matériaux disponibles sur la table : boîtes, paille, vieux tissus, papier journal, carton.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, analyse technologique", support: "Schéma du thermos, matériaux de récupération",
  },
  analyse: {
    qa: [
      { q: "Quelles parties du thermos réduisent la perte de chaleur, et comment ?", ra: "Le vide bloque conduction et convection ; la paroi réfléchissante renvoie le rayonnement ; le bouchon isolant ferme le haut." },
      { q: "Parmi nos matériaux, lesquels sont de bons isolants ?", ra: "La paille, les tissus de laine, le papier journal froissé, le carton." },
      { q: "Comment disposer l'isolant autour de la bouteille ?", ra: "En couche épaisse et régulière, tout autour, sans oublier le dessous et le dessus." },
      { q: "Pourquoi faut-il bien fermer la boîte ?", ra: "Pour bloquer la convection : sinon l'air chaud s'échappe par le haut." },
      { q: "Comment vérifier que notre objet fonctionne ?", ra: "En mesurant la température de l'eau au départ et après un temps donné, et en comparant avec une bouteille non protégée." },
    ],
    technique: "Questions-réponses, démarche de conception technologique", support: "Matériaux, schéma",
  },
  synthese: {
    enseignant: "Donc, pour construire un objet isotherme, on applique les techniques de conservation de la chaleur : une boîte solide, une couche épaisse d'isolant tout autour de la bouteille, y compris dessous et dessus, éventuellement du papier brillant contre le rayonnement, et une fermeture soignée contre la convection. On vérifie l'efficacité en comparant la température de l'eau protégée et celle d'une eau non protégée après le même temps.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Remets dans l'ordre les étapes de construction de la boîte isotherme :",
      items: [
        "a) Fermer soigneusement le couvercle.",
        "b) Tapisser le fond de la boîte d'une couche épaisse d'isolant.",
        "c) Placer la bouteille d'eau chaude au centre.",
        "d) Combler tous les espaces autour de la bouteille avec l'isolant.",
      ],
      corrige: [
        [{ text: "Ordre correct : " }, { text: "b → c → d → a", cle: true }, { text: "." }],
        [{ text: "b) le fond isolé ; c) " }, { text: "la bouteille au centre", cle: true }, { text: " ; d) " }, { text: "l'isolant tout autour", cle: true }, { text: " ; a) " }, { text: "la fermeture soignée", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Une couche d'isolant épaisse est plus efficace qu'une couche mince.",
        "b) Il est inutile d'isoler le dessous de la bouteille.",
        "c) Du papier aluminium brillant peut réduire la perte par rayonnement.",
        "d) On vérifie l'efficacité en comparant avec une bouteille non protégée.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : la chaleur s'échappe aussi par le bas, par conduction." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: " : la surface brillante réfléchit le rayonnement." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: " : c'est le témoin de l'expérience." }],
      ],
    },
  ],
  applicationTechnique: "Travail de groupe, construction", applicationSupport: "Boîtes, isolants, bouteilles, ruban adhésif",
  evaluation: [
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Quels matériaux choisirais-tu pour construire une boîte isotherme ? Pourquoi ?",
        "b) Pourquoi faut-il combler tous les espaces autour de la bouteille ?",
        "c) Décris le test qui permet de mesurer l'efficacité de l'objet construit.",
        "d) Explique le rôle de chaque partie d'une bouteille thermos.",
      ],
      corrige: [
        [{ text: "a) Une boîte en carton et des " }, { text: "isolants : paille, tissus, papier journal froissé", cle: true }, { text: ", car ils conduisent très mal la chaleur." }],
        [{ text: "b) Parce que " }, { text: "l'air en mouvement transporterait la chaleur par convection", cle: true }, { text: " ; l'isolant emprisonne l'air immobile." }],
        [{ text: "c) Mesurer la " }, { text: "température de départ, attendre un temps fixé, remesurer", cle: true }, { text: " et comparer avec une bouteille témoin non protégée." }],
        [{ text: "d) " }, { text: "Le vide bloque conduction et convection ; la paroi réfléchissante renvoie le rayonnement ; le bouchon isolant", cle: true }, { text: " ferme le haut." }],
      ],
    },
    {
      consigne: "Le groupe de Toky a testé sa boîte : eau à 80 °C au départ ; après 2 heures, 55 °C dans la boîte, 28 °C pour la bouteille témoin.",
      items: [
        "a) De combien de degrés l'eau protégée a-t-elle refroidi ?",
        "b) Et l'eau non protégée ?",
        "c) La boîte de Toky est-elle efficace ? Justifie.",
      ],
      corrige: [
        [{ text: "a) 80 − 55 = " }, { text: "25 °C de baisse", cle: true }, { text: "." }],
        [{ text: "b) 80 − 28 = " }, { text: "52 °C de baisse", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Oui", cle: true }, { text: " : l'eau protégée a perdu deux fois moins de chaleur que le témoin ; l'isolation a bien " }, { text: "réduit la perte de chaleur", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["isotherme", "isolant", "conception", "témoin"],
    sections: [
      {
        titre: "1. Le cahier des charges",
        paras: [
          "Un objet isotherme doit réduire au maximum la perte de chaleur. Pour le concevoir, on s'attaque aux trois modes de transfert : conduction, convection et rayonnement.",
        ],
      },
      {
        titre: "2. La construction, étape par étape",
        puces: [
          "1. Choisir une boîte solide (carton ou plastique) un peu plus grande que la bouteille.",
          "2. Tapisser le fond d'une couche épaisse d'isolant : paille, tissus, papier journal froissé.",
          "3. Envelopper la bouteille de papier brillant si possible (contre le rayonnement), puis la placer au centre.",
          "4. Combler tous les espaces avec l'isolant : aucun vide d'air libre, aucun contact direct entre la bouteille et la paroi.",
          "5. Couvrir d'une couche d'isolant et fermer soigneusement le couvercle.",
        ],
        paras: [],
      },
      {
        titre: "3. Le test d'efficacité",
        paras: [
          "Pour prouver que l'objet fonctionne, on fait une expérience avec témoin : deux bouteilles d'eau chaude identiques, l'une dans la boîte, l'autre à l'air libre. On mesure les températures au départ puis après un temps donné. Plus l'écart final est grand, plus l'objet est efficace.",
        ],
      },
    ],
    saisTu: [
      "Le thermos a été inventé en 1892 par le physicien écossais James Dewar. Son secret : le vide entre les deux parois de verre, dans lequel ni la conduction ni la convection ne sont possibles. Les vendeurs de yaourt et de café des rues d'Antananarivo utilisent le même principe avec leurs glacières isolées !",
    ],
    experience: [
      "Le défi de la boîte magique (à faire en famille ou entre amis) :",
      "1. Construis ta boîte isotherme selon les étapes de la leçon.",
      "2. Mets-y une bouteille d'eau bien chaude, et laisse une bouteille identique à l'air libre.",
      "3. Après deux heures, compare les températures.",
      "4. Améliore ta boîte (isolant plus épais, meilleure fermeture) et recommence : bats ton propre record !",
    ],
  },
  substitutions: [
    { officiel: "Kit de calorimétrie", local: "Boîtes de récupération, paille, tissus usés, papier journal" },
    { officiel: "Papier réfléchissant technique", local: "Papier aluminium de cuisine ou emballages métallisés propres" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Un objet isotherme sert à :  a) chauffer l'eau   b) réduire la perte de chaleur   c) refroidir l'eau",
        "2. Le meilleur isolant parmi ces matériaux est :  a) une plaque de fer   b) la paille   c) une feuille d'aluminium seule",
        "3. On comble les espaces autour de la bouteille pour :  a) faire joli   b) bloquer les mouvements d'air   c) alourdir la boîte",
        "4. La bouteille témoin sert à :  a) comparer les résultats   b) boire   c) remplacer la première bouteille",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "réduire la perte de chaleur", cle: true }, { text: "." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "la paille", cle: true }, { text: ", mauvaise conductrice, qui emprisonne l'air." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "bloquer les mouvements d'air", cle: true }, { text: " qui transporteraient la chaleur par convection." }],
        [{ text: "4. Réponse a) : ", bold: true }, { text: "comparer les résultats", cle: true }, { text: " avec et sans protection." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Une boîte isotherme doit rester ouverte pour respirer.",
        "2. Le papier journal froissé est un bon isolant car il emprisonne de l'air.",
        "3. Une glacière fonctionne sur le même principe qu'une boîte isotherme.",
        "4. Le test d'efficacité se fait sans mesurer la température.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : elle doit être bien fermée pour bloquer la convection." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: " : l'air immobile est un excellent isolant." }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: " : elle empêche la chaleur d'entrer, comme la boîte l'empêche de sortir." }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : il faut mesurer et comparer les températures." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : isolant – témoin – convection – épaisse – fermer – température.",
      items: [
        "Pour construire une boîte isotherme : tapisser la boîte d'une couche ……… d'……… , placer la bouteille, combler les espaces, puis bien ……… pour bloquer la ……… . On teste l'objet en comparant la ……… de l'eau avec celle d'une bouteille ……… .",
      ],
      corrige: [
        [{ text: "Pour construire une boîte isotherme : tapisser la boîte d'une couche " }, { text: "épaisse", cle: true }, { text: " d'" }, { text: "isolant", cle: true }, { text: ", placer la bouteille, combler les espaces, puis bien " }, { text: "fermer", cle: true }, { text: " pour bloquer la " }, { text: "convection", cle: true }, { text: ". On teste l'objet en comparant la " }, { text: "température", cle: true }, { text: " de l'eau avec celle d'une bouteille " }, { text: "témoin", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Observe la figure 29 (le thermos en coupe), puis réponds :",
      items: [
        "1. Nomme les quatre parties légendées du thermos.",
        "2. Associe chaque partie au mode de transfert qu'elle combat.",
        "3. Dessine dans ton cahier le plan de ta propre boîte isotherme avec ses légendes.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Le bouchon isolant, le vide entre les parois, la paroi réfléchissante et la boisson chaude", cle: true }, { text: "." }],
        [{ text: "2. Bouchon : " }, { text: "convection", cle: true }, { text: " ; vide : " }, { text: "conduction et convection", cle: true }, { text: " ; paroi réfléchissante : " }, { text: "rayonnement", cle: true }, { text: "." }],
        [{ text: "3. Plan attendu : " }, { text: "boîte, isolant épais tout autour, bouteille au centre, couvercle", cle: true }, { text: ", avec légendes." }],
      ],
    },
  ],
};

const S30 = {
  numero: 30, total: 34, unite: "III", theme: "Chaleur et température",
  titre: "La dilatation des solides",
  objectif: "constater que les solides se dilatent quand on les chauffe et citer des applications courantes",
  documentation: DOC,
  support: "Boule et anneau métalliques (ou boulon et écrou), bougie, pince, image des rails de chemin de fer",
  image: "images/img_seance30.png",
  imageLegende: "Figure 30 — La boule froide passe dans l'anneau ; chauffée, elle ne passe plus : elle s'est dilatée",
  revision: {
    qa: [
      { q: "Comment construit-on un objet isotherme ?", ra: "Avec un isolant épais tout autour, une fermeture soignée, éventuellement une surface réfléchissante." },
      { q: "Quel rôle joue la bouteille témoin dans le test ?", ra: "Elle permet de comparer la perte de chaleur avec et sans protection." },
      { q: "Quelle technique bloque à la fois conduction et convection ?", ra: "Le vide entre deux parois." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Dans le train qui va vers Toamasina, Rina entend le « tac-tac-tac » régulier des roues. Son père lui explique : « Regarde, il y a un petit espace entre les rails. Sans lui, les rails se tordraient au soleil ! »",
      "Pourquoi les rails se tordraient-ils sans ces espaces ?",
      "R.A. : Parce qu'ils s'allongent quand ils chauffent au soleil.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée", support: "Image de rails",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La dilatation des solides ». Après cette séance, vous serez capables de montrer qu'un solide chauffé se dilate et d'expliquer des applications courantes de la dilatation.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien cette expérience : à froid, cette boule métallique passe juste à travers l'anneau. Je chauffe maintenant la boule à la flamme pendant deux minutes, et j'essaie à nouveau de la faire passer dans l'anneau.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Boule et anneau métalliques, bougie, pince",
  },
  analyse: {
    qa: [
      { q: "La boule froide passe-t-elle dans l'anneau ?", ra: "Oui, elle passe juste." },
      { q: "La boule chauffée passe-t-elle encore ?", ra: "Non, elle ne passe plus : elle est devenue trop grosse." },
      { q: "Qu'est-il arrivé à la boule en chauffant ?", ra: "Son volume a augmenté : elle s'est dilatée." },
      { q: "Que se passera-t-il quand la boule refroidira ?", ra: "Elle se contractera : son volume diminuera et elle passera à nouveau." },
      { q: "Pourquoi laisse-t-on des espaces entre les rails du chemin de fer ?", ra: "Pour que les rails puissent s'allonger au soleil sans se tordre." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Boule et anneau",
  },
  synthese: {
    enseignant: "Donc, quand on chauffe un solide, son volume augmente : c'est la dilatation. Quand il refroidit, son volume diminue : c'est la contraction. La dilatation d'un solide dépend de sa nature : tous les métaux ne se dilatent pas autant. On en tient compte dans la vie courante : espaces entre les rails, joints des ponts métalliques ; et on l'utilise : cerclage des roues de charrette, bilame des fers à repasser.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Un solide chauffé voit son volume augmenter.",
        "b) La boule chauffée passe plus facilement dans l'anneau.",
        "c) Un solide refroidi se contracte.",
        "d) Tous les métaux se dilatent exactement de la même façon.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: " : c'est la dilatation." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : dilatée, elle est trop grosse et ne passe plus." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: " : son volume diminue." }],
        [{ text: "d) " }, { text: "Faux", cle: true }, { text: " : la dilatation dépend de la nature du solide." }],
      ],
    },
    {
      consigne: "Explique chaque situation avec le mot « dilatation » ou « contraction » :",
      items: [
        "a) On laisse un espace entre les rails du chemin de fer.",
        "b) Le forgeron chauffe le cercle de fer avant de le poser sur la roue en bois.",
        "c) En refroidissant, le cercle serre fortement la roue.",
        "d) Le couvercle métallique bloqué s'ouvre après passage sous l'eau chaude.",
      ],
      corrige: [
        [{ text: "a) Au soleil, les rails " }, { text: "s'allongent par dilatation", cle: true }, { text: " : l'espace évite qu'ils se tordent." }],
        [{ text: "b) Chauffé, le cercle " }, { text: "se dilate", cle: true }, { text: " et devient assez grand pour entourer la roue." }],
        [{ text: "c) En refroidissant, le cercle " }, { text: "se contracte", cle: true }, { text: " et serre la roue très fort." }],
        [{ text: "d) L'eau chaude " }, { text: "dilate le couvercle métallique", cle: true }, { text: " plus que le verre : il se desserre." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : contraction – volume – dilatation – nature – refroidit – chauffe.",
      items: [
        "a) La ……… est l'augmentation du ……… d'un corps quand on le ……… .",
        "b) La ……… est la diminution du volume quand le corps ……… .",
        "c) La dilatation dépend de la ……… du solide.",
      ],
      corrige: [
        [{ text: "a) La " }, { text: "dilatation", cle: true }, { text: " est l'augmentation du " }, { text: "volume", cle: true }, { text: " d'un corps quand on le " }, { text: "chauffe", cle: true }, { text: "." }],
        [{ text: "b) La " }, { text: "contraction", cle: true }, { text: " est la diminution du volume quand le corps " }, { text: "refroidit", cle: true }, { text: "." }],
        [{ text: "c) La dilatation dépend de la " }, { text: "nature", cle: true }, { text: " du solide." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Décris l'expérience de la boule et de l'anneau et ce qu'elle démontre.",
        "b) Pourquoi le « tac-tac » du train prouve-t-il que les ingénieurs connaissent la dilatation ?",
        "c) Comment le charron (fabricant de roues) utilise-t-il la dilatation ?",
        "d) Que devient la boule dilatée quand elle refroidit ?",
      ],
      corrige: [
        [{ text: "a) La boule froide passe dans l'anneau ; chauffée, elle ne passe plus : " }, { text: "le solide chauffé se dilate, son volume augmente", cle: true }, { text: "." }],
        [{ text: "b) Les espaces entre les rails sont prévus pour " }, { text: "laisser les rails se dilater au soleil", cle: true }, { text: " sans se tordre." }],
        [{ text: "c) Il chauffe le cercle de fer pour le dilater, le pose sur la roue, et " }, { text: "la contraction au refroidissement le serre définitivement", cle: true }, { text: "." }],
        [{ text: "d) Elle " }, { text: "se contracte et retrouve son volume initial", cle: true }, { text: " : elle repasse dans l'anneau." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["dilatation", "contraction", "volume", "bilame"],
    sections: [
      {
        titre: "1. L'expérience de la boule et de l'anneau",
        paras: [
          "À froid, une boule métallique passe juste à travers un anneau. Après avoir été chauffée, elle ne passe plus : son volume a augmenté. Quand elle refroidit, elle repasse : son volume a diminué.",
        ],
      },
      {
        titre: "2. Dilatation et contraction",
        puces: [
          "La dilatation : quand on chauffe un solide, son volume augmente.",
          "La contraction : quand un solide refroidit, son volume diminue.",
          "La dilatation dépend de la nature du solide : l'aluminium se dilate plus que le fer, qui se dilate plus que le verre.",
        ],
        paras: [],
      },
      {
        titre: "3. Applications et précautions",
        sousSections: [
          {
            titre: "a. Se protéger de la dilatation",
            puces: [
              "Les espaces entre les rails du chemin de fer, comme sur la ligne Fianarantsoa-Côte Est.",
              "Les joints de dilatation des ponts métalliques et des grands bâtiments.",
              "Les fils électriques posés un peu détendus entre les poteaux : ils se contractent en hiver.",
            ],
            paras: [],
          },
          {
            titre: "b. Utiliser la dilatation",
            puces: [
              "Le cerclage des roues de charrette : le cercle de fer chauffé, puis refroidi, serre la roue.",
              "Le bilame : deux métaux collés qui se dilatent différemment ; la lame se courbe en chauffant et coupe le courant du fer à repasser (thermostat).",
              "Ouvrir un couvercle métallique bloqué en le passant sous l'eau chaude.",
            ],
            paras: [],
          },
        ],
      },
    ],
    saisTu: [
      "La ligne de chemin de fer Fianarantsoa-Côte Est (FCE), construite entre 1926 et 1936, compte 163 km, 67 tunnels et 48 ponts. Sur toute sa longueur, les rails comportent des joints de dilatation : sans eux, le soleil tropical tordrait les voies en quelques saisons !",
    ],
    experience: [
      "La dilatation avec un boulon et un écrou (avec un adulte) :",
      "1. Choisis un boulon et un écrou qui se vissent juste.",
      "2. Chauffe le boulon (pas l'écrou) dans l'eau très chaude quelques minutes.",
      "3. Essaie de visser l'écrou froid : c'est plus dur, le boulon s'est dilaté !",
      "4. Laisse refroidir et recommence : tout redevient normal.",
    ],
  },
  substitutions: [
    { officiel: "Appareil boule-anneau de laboratoire ('anneau de Gravesande')", local: "Boulon et écrou bien ajustés, ou bille et goulot de bouteille" },
    { officiel: "Bec Bunsen", local: "Bougie ou eau très chaude" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Quand on chauffe un solide, son volume :  a) diminue   b) augmente   c) ne change pas",
        "2. La diminution de volume au refroidissement s'appelle :  a) la dilatation   b) la contraction   c) la conduction",
        "3. On laisse des espaces entre les rails pour :  a) faire du bruit   b) laisser passer l'eau   c) permettre la dilatation",
        "4. Le bilame se courbe car ses deux métaux :  a) se dilatent différemment   b) fondent   c) sont isolants",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "il augmente", cle: true }, { text: " : c'est la dilatation." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "la contraction", cle: true }, { text: "." }],
        [{ text: "3. Réponse c) : ", bold: true }, { text: "permettre la dilatation", cle: true }, { text: " des rails au soleil." }],
        [{ text: "4. Réponse a) : ", bold: true }, { text: "ils se dilatent différemment", cle: true }, { text: " : la lame se courbe." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. La boule chauffée passe plus facilement dans l'anneau.",
        "2. La dilatation dépend de la nature du solide.",
        "3. Les fils électriques sont tendus au maximum entre les poteaux.",
        "4. Le cerclage des roues de charrette utilise la dilatation puis la contraction.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : dilatée, elle est trop grosse pour passer." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : on les laisse un peu détendus pour la contraction en saison froide." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: " : cercle chauffé (dilaté), posé, puis refroidi (contracté)." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : nature – rails – contracte – dilate – volume – joints.",
      items: [
        "Un solide chauffé se ……… : son ……… augmente. En refroidissant, il se ……… . La dilatation dépend de la ……… du solide. C'est pourquoi les ……… du chemin de fer comportent des espaces, et les ponts des ……… de dilatation.",
      ],
      corrige: [
        [{ text: "Un solide chauffé se " }, { text: "dilate", cle: true }, { text: " : son " }, { text: "volume", cle: true }, { text: " augmente. En refroidissant, il se " }, { text: "contracte", cle: true }, { text: ". La dilatation dépend de la " }, { text: "nature", cle: true }, { text: " du solide. C'est pourquoi les " }, { text: "rails", cle: true }, { text: " du chemin de fer comportent des espaces, et les ponts des " }, { text: "joints", cle: true }, { text: " de dilatation." }],
      ],
    },
    {
      points: 6,
      consigne: "Observe la figure 30 (la boule et l'anneau), puis réponds :",
      items: [
        "1. Décris ce qui se passe dans chacune des deux situations représentées.",
        "2. Explique pourquoi la boule chauffée ne passe plus.",
        "3. Propose une méthode pour la faire repasser dans l'anneau, sans attendre.",
      ],
      corrige: [
        [{ text: "1. À gauche, " }, { text: "la boule froide passe dans l'anneau", cle: true }, { text: " ; à droite, " }, { text: "la boule chauffée ne passe plus", cle: true }, { text: "." }],
        [{ text: "2. La chaleur a fait " }, { text: "augmenter son volume : elle s'est dilatée", cle: true }, { text: "." }],
        [{ text: "3. La " }, { text: "plonger dans l'eau froide", cle: true }, { text: " : elle se contracte rapidement et repasse." }],
      ],
    },
  ],
};

const S31 = {
  numero: 31, total: 34, unite: "III", theme: "Chaleur et température",
  titre: "La dilatation des liquides et des gaz : le thermomètre artisanal",
  objectif: "comparer la dilatation des liquides et des gaz et fabriquer un thermomètre artisanal simple",
  documentation: DOC,
  support: "Bouteille en verre, paille transparente, pâte à modeler ou cire, eau colorée, ballon de baudruche, bols d'eau chaude et froide",
  image: "images/img_seance31.png",
  imageLegende: "Figure 31 — Un thermomètre artisanal : l'eau colorée monte dans la paille quand on la chauffe",
  revision: {
    qa: [
      { q: "Qu'est-ce que la dilatation d'un solide ?", ra: "L'augmentation de son volume quand on le chauffe." },
      { q: "Que se passe-t-il quand le solide refroidit ?", ra: "Il se contracte : son volume diminue." },
      { q: "Cite une application de la dilatation des solides.", ra: "Les espaces entre les rails, le cerclage des roues, le bilame." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "La mère de Hasina remplit toujours la marmite d'huile aux trois quarts seulement avant de la chauffer. « Si je la remplis à ras bord, l'huile débordera en chauffant », dit-elle.",
      "Pourquoi l'huile déborderait-elle en chauffant ?",
      "R.A. : Parce qu'elle prend plus de place quand elle chauffe : elle se dilate.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La dilatation des liquides et des gaz ». Après cette séance, vous serez capables de comparer la dilatation des trois états de la matière et de fabriquer un thermomètre artisanal.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : cette bouteille pleine d'eau colorée est fermée par un bouchon percé d'une paille ; le niveau monte un peu dans la paille. Je pose la bouteille dans le bol d'eau chaude : observez le niveau. Maintenant, je coiffe cette bouteille vide d'un ballon et je la pose dans l'eau chaude : observez le ballon.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Bouteille, paille, eau colorée, ballon, bols d'eau chaude et froide",
  },
  analyse: {
    qa: [
      { q: "Que fait le niveau de l'eau colorée quand la bouteille est dans l'eau chaude ?", ra: "Il monte dans la paille : l'eau chauffée se dilate." },
      { q: "Que fait le niveau quand on met la bouteille dans l'eau froide ?", ra: "Il descend : l'eau se contracte." },
      { q: "Que fait le ballon posé sur la bouteille chauffée ?", ra: "Il se gonfle : l'air de la bouteille se dilate et occupe plus de place." },
      { q: "Qui se dilate le plus : le solide, le liquide ou le gaz ?", ra: "Le gaz se dilate le plus, puis le liquide, puis le solide." },
      { q: "Comment fonctionne le thermomètre à liquide ?", ra: "Le liquide du réservoir se dilate quand la température monte et s'élève dans le tube gradué." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Thermomètre artisanal, ballon",
  },
  synthese: {
    enseignant: "Donc, les liquides et les gaz se dilatent aussi quand on les chauffe, et se contractent quand ils refroidissent. À chaleur égale, le gaz se dilate plus que le liquide, qui se dilate plus que le solide. La dilatation d'un liquide dépend de sa nature, comme pour les solides. C'est la dilatation des liquides qui fait fonctionner le thermomètre : le liquide du réservoir monte dans le tube quand la température augmente. Notre bouteille à paille est un véritable thermomètre artisanal.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Les liquides se dilatent quand on les chauffe.",
        "b) Le gaz se dilate moins que le solide.",
        "c) Le ballon se gonfle car l'air de la bouteille chauffée se dilate.",
        "d) Le thermomètre à liquide fonctionne grâce à la dilatation.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : le gaz se dilate le plus des trois états." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: " : le liquide monte dans le tube quand la température augmente." }],
      ],
    },
    {
      consigne: "Classe du plus dilatable au moins dilatable : solide, gaz, liquide. Puis explique chaque observation :",
      items: [
        "a) Classement.",
        "b) Le niveau d'eau colorée monte dans la paille au chaud.",
        "c) Le niveau descend au froid.",
        "d) La marmite d'huile ne doit pas être remplie à ras bord.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Gaz > liquide > solide", cle: true }, { text: "." }],
        [{ text: "b) L'eau chauffée " }, { text: "se dilate", cle: true }, { text: " : son volume augmente, elle monte dans la paille." }],
        [{ text: "c) L'eau refroidie " }, { text: "se contracte", cle: true }, { text: " : le niveau descend." }],
        [{ text: "d) L'huile chauffée " }, { text: "se dilate et prend plus de place", cle: true }, { text: " : elle déborderait." }],
      ],
    },
  ],
  applicationTechnique: "Travail de groupe, fabrication", applicationSupport: "Thermomètre artisanal",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : gaz – contracte – monte – dilate – liquide – thermomètre.",
      items: [
        "a) Un liquide chauffé se ……… : son niveau ……… dans la paille. Refroidi, il se ……… .",
        "b) Le ……… se dilate plus que le ……… . La dilatation des liquides fait fonctionner le ……… .",
      ],
      corrige: [
        [{ text: "a) Un liquide chauffé se " }, { text: "dilate", cle: true }, { text: " : son niveau " }, { text: "monte", cle: true }, { text: " dans la paille. Refroidi, il se " }, { text: "contracte", cle: true }, { text: "." }],
        [{ text: "b) Le " }, { text: "gaz", cle: true }, { text: " se dilate plus que le " }, { text: "liquide", cle: true }, { text: ". La dilatation des liquides fait fonctionner le " }, { text: "thermomètre", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Décris la fabrication du thermomètre artisanal.",
        "b) Explique son fonctionnement quand on le place dans l'eau chaude.",
        "c) Quelle expérience montre la dilatation d'un gaz ?",
        "d) Compare la dilatation des trois états de la matière.",
      ],
      corrige: [
        [{ text: "a) On remplit une bouteille d'eau colorée, on la ferme par un bouchon percé d'une " }, { text: "paille", cle: true }, { text: ", en scellant avec de la cire : le niveau monte un peu dans la paille." }],
        [{ text: "b) L'eau chauffée " }, { text: "se dilate et monte dans la paille", cle: true }, { text: " : plus il fait chaud, plus le niveau est haut." }],
        [{ text: "c) Le " }, { text: "ballon posé sur une bouteille chauffée se gonfle", cle: true }, { text: " : l'air dilaté occupe plus de place." }],
        [{ text: "d) " }, { text: "Le gaz se dilate le plus, puis le liquide, puis le solide", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["dilatation des liquides", "dilatation des gaz", "thermomètre", "se contracte"],
    sections: [
      {
        titre: "1. Les liquides se dilatent",
        paras: [
          "Comme les solides, les liquides se dilatent quand on les chauffe et se contractent quand ils refroidissent.",
          "Expérience : une bouteille pleine d'eau colorée, fermée par un bouchon traversé d'une paille, est posée dans l'eau chaude : le niveau monte dans la paille. Dans l'eau froide, il redescend.",
          "La dilatation d'un liquide dépend de sa nature : l'alcool se dilate plus que l'eau.",
        ],
      },
      {
        titre: "2. Les gaz se dilatent encore plus",
        paras: [
          "Expérience : on coiffe une bouteille « vide » (pleine d'air) d'un ballon de baudruche, puis on la pose dans l'eau chaude : le ballon se gonfle, car l'air dilaté occupe plus de place. Dans l'eau froide, le ballon retombe.",
          "À chaleur égale : le gaz se dilate plus que le liquide, qui se dilate plus que le solide.",
        ],
      },
      {
        titre: "3. Le thermomètre : une application de la dilatation",
        paras: [
          "Le thermomètre à liquide utilise la dilatation : quand la température monte, le liquide du réservoir se dilate et s'élève dans le tube fin gradué. Quand la température baisse, il se contracte et descend.",
          "Notre bouteille à paille fonctionne exactement comme un vrai thermomètre : c'est un thermomètre artisanal. Pour le graduer, on marque le niveau dans l'eau glacée puis dans l'eau bouillante.",
        ],
      },
      {
        titre: "4. Le vase d'expansion",
        paras: [
          "Dans les moteurs et les chauffe-eau, un réservoir appelé vase d'expansion recueille le liquide qui se dilate en chauffant : sans lui, les tuyaux éclateraient. C'est la même raison pour laquelle on ne remplit jamais à ras bord une marmite d'huile ou un radiateur de voiture.",
        ],
      },
    ],
    saisTu: [
      "Les premiers thermomètres à alcool ont été fabriqués à Florence vers 1650. Aujourd'hui encore, la plupart des thermomètres colorés contiennent de l'alcool teinté en rouge, car l'alcool se dilate beaucoup et régulièrement : exactement le principe de ta bouteille à paille !",
    ],
    experience: [
      "Fabrique et gradue ton thermomètre artisanal :",
      "1. Remplis complètement une petite bouteille d'eau colorée (sirop ou colorant).",
      "2. Perce le bouchon, passe une paille transparente et scelle avec de la cire de bougie : l'eau doit monter un peu dans la paille.",
      "3. Place la bouteille dans un bol d'eau bien froide : marque le niveau « froid » sur la paille.",
      "4. Place-la dans l'eau bien chaude : marque le niveau « chaud ». Ton thermomètre est gradué !",
    ],
  },
  substitutions: [
    { officiel: "Thermomètre de démonstration à grand tube", local: "Bouteille + paille + eau colorée (thermomètre artisanal)" },
    { officiel: "Ballon à fond rond et tube de verre", local: "Bouteille en plastique et ballon de baudruche" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Un liquide chauffé :  a) se contracte   b) se dilate   c) devient solide",
        "2. L'état de la matière qui se dilate le plus est :  a) le solide   b) le liquide   c) le gaz",
        "3. Dans le thermomètre, quand la température monte, le liquide :  a) descend   b) monte   c) disparaît",
        "4. Le ballon posé sur la bouteille chauffée se gonfle car :  a) l'air se dilate   b) l'air se contracte   c) la bouteille fond",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "il se dilate", cle: true }, { text: "." }],
        [{ text: "2. Réponse c) : ", bold: true }, { text: "le gaz", cle: true }, { text: "." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "il monte", cle: true }, { text: ", car il se dilate." }],
        [{ text: "4. Réponse a) : ", bold: true }, { text: "l'air se dilate", cle: true }, { text: " et occupe plus de place." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Tous les liquides se dilatent exactement pareil.",
        "2. Le niveau de l'eau colorée descend quand on refroidit la bouteille.",
        "3. Le vase d'expansion recueille le liquide dilaté des moteurs.",
        "4. On peut remplir d'huile une marmite à ras bord avant de la chauffer.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : la dilatation dépend de la nature du liquide ; l'alcool se dilate plus que l'eau." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: " : le liquide se contracte." }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : l'huile dilatée déborderait." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : artisanal – gaz – paille – dilate – gradue – contracte.",
      items: [
        "Dans le thermomètre ………, l'eau chauffée se ……… et monte dans la ……… ; refroidie, elle se ……… . On ……… l'appareil en marquant les niveaux froid et chaud. Le ……… se dilate encore plus que le liquide.",
      ],
      corrige: [
        [{ text: "Dans le thermomètre " }, { text: "artisanal", cle: true }, { text: ", l'eau chauffée se " }, { text: "dilate", cle: true }, { text: " et monte dans la " }, { text: "paille", cle: true }, { text: " ; refroidie, elle se " }, { text: "contracte", cle: true }, { text: ". On " }, { text: "gradue", cle: true }, { text: " l'appareil en marquant les niveaux froid et chaud. Le " }, { text: "gaz", cle: true }, { text: " se dilate encore plus que le liquide." }],
      ],
    },
    {
      points: 6,
      consigne: "Observe la figure 31 (le thermomètre artisanal), puis réponds :",
      items: [
        "1. Nomme les éléments qui composent ce thermomètre artisanal.",
        "2. Explique pourquoi le niveau monte dans la paille quand le bol contient de l'eau chaude.",
        "3. Comment graduerais-tu ce thermomètre pour repérer « froid », « tiède » et « chaud » ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Une bouteille d'eau colorée, un bouchon percé, une paille transparente", cle: true }, { text: ", posées dans un bol d'eau." }],
        [{ text: "2. La chaleur du bol passe à l'eau de la bouteille, qui " }, { text: "se dilate : son volume augmente et elle monte dans la paille", cle: true }, { text: "." }],
        [{ text: "3. Marquer le niveau dans " }, { text: "l'eau glacée (froid), l'eau du robinet (tiède) et l'eau très chaude (chaud)", cle: true }, { text: "." }],
      ],
    },
  ],
};

module.exports = { seances: [S23, S24, S25, S26, S27, S28, S29, S30, S31] };
