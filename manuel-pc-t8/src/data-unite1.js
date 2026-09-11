// data-unite1.js — T8 Unité I : LA MATIÈRE (séances 1 à 9)
const DOC = "Programme d'études T8 — Sciences Physiques (MEN Madagascar) ; manuel J-Learn";

const S1 = {
  numero: 1, total: 34, unite: "I", theme: "Matière",
  titre: "L'élément chimique et son symbole",
  objectif: "expliquer le concept d'élément chimique et d'écrire les symboles des éléments courants",
  documentation: DOC,
  support: "Objets courants (clou en fer, fil de cuivre, charbon, sel, casserole en aluminium), tableau périodique mural, étiquettes",
  image: "images/img_seance01.png",
  imageLegende: "Figure 1 — Fer, charbon (carbone), cuivre, aluminium… : les éléments chimiques se cachent dans les objets du marché",
  revision: {
    qa: [
      { q: "Qu'est-ce qu'une transformation chimique, vue en T7 ?", ra: "Une transformation où des substances disparaissent et où de nouvelles substances apparaissent (ex. : combustion, rouille)." },
      { q: "Cite un mélange et un corps pur.", ra: "Mélange : eau de mer ; corps pur : eau distillée, fer." },
      { q: "De quoi la matière est-elle faite ?", ra: "De grains extrêmement petits : les atomes." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Au marché d'Analakely, Hanta observe l'étal du quincaillier : clous en fer, fils électriques en cuivre, marmites en aluminium, sacs de charbon. Son petit frère demande : « Pourquoi dit-on Fe sur la boîte de clous et Cu sur le rouleau de fil ? » Hanta ne sait pas répondre.",
      "Que signifient ces lettres mystérieuses ?",
      "R.A. : Ce sont les symboles des éléments chimiques, un langage universel des scientifiques.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « L'élément chimique et son symbole ». Après cette séance, vous serez capables d'expliquer ce qu'est un élément chimique et d'écrire les symboles des éléments courants.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien ces objets : un clou en fer, un morceau de charbon, un fil de cuivre dénudé, une vieille casserole en aluminium et du sel de cuisine. Le clou rouille, le charbon brûle, le cuivre conduit très bien le courant : chaque matière a des propriétés qui lui sont propres. Observez maintenant le tableau accroché au mur : chaque case contient une ou deux lettres.",
    apprenants: "Observent silencieusement les objets puis le tableau mural.",
    technique: "Démarche d'observation", support: "Objets courants, tableau périodique mural",
  },
  analyse: {
    qa: [
      { q: "Le clou et la grille rouillée contiennent-ils la même « matière de base » ?", ra: "Oui : le fer. On dit qu'ils contiennent le même élément chimique." },
      { q: "Qu'est-ce donc qu'un élément chimique ?", ra: "Une sorte d'atome : tous les atomes de fer appartiennent à l'élément fer, où qu'ils se trouvent." },
      { q: "Comment s'écrit le symbole d'un élément ?", ra: "Une lettre majuscule, parfois suivie d'une lettre minuscule : H, O, C, N, S, Cl, Fe, Ca, Cu." },
      { q: "Pourquoi Fe pour le fer et Cu pour le cuivre ?", ra: "Ils viennent des noms latins : ferrum et cuprum." },
      { q: "Pourquoi un langage de symboles ?", ra: "Pour que tous les scientifiques du monde se comprennent, quelle que soit leur langue." },
    ],
    technique: "Questions-réponses, étude documentaire", support: "Objets, tableau périodique",
  },
  synthese: {
    enseignant: "Donc, un élément chimique est une sorte d'atome : l'élément fer regroupe tous les atomes de fer, l'élément oxygène tous les atomes d'oxygène. Chaque élément possède un symbole universel : une majuscule, parfois suivie d'une minuscule. Retenez ceux du programme : H (hydrogène), O (oxygène), C (carbone), N (azote), S (soufre), Cl (chlore), Fe (fer), Ca (calcium) et Cu (cuivre). Les propriétés chimiques d'un corps dépendent des éléments qu'il contient : c'est pour cela que tout ce qui contient du fer peut rouiller !",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Écris le symbole de chaque élément :",
      items: [
        "a) hydrogène   b) carbone   c) oxygène",
        "d) fer   e) cuivre   f) chlore",
      ],
      corrige: [
        [{ text: "a) " }, { text: "H", cle: true }, { text: "  b) " }, { text: "C", cle: true }, { text: "  c) " }, { text: "O", cle: true }],
        [{ text: "d) " }, { text: "Fe", cle: true }, { text: "  e) " }, { text: "Cu", cle: true }, { text: "  f) " }, { text: "Cl", cle: true }],
      ],
    },
    {
      consigne: "Donne le nom de l'élément correspondant à chaque symbole : N, S, Ca.",
      items: [],
      corrige: [
        [{ text: "N = " }, { text: "azote", cle: true }, { text: " ; S = " }, { text: "soufre", cle: true }, { text: " ; Ca = " }, { text: "calcium", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Réponds par Vrai ou Faux et corrige si nécessaire :",
      items: [
        "a) Le symbole du cuivre est Co.",
        "b) Un élément chimique est une sorte d'atome.",
        "c) Le symbole d'un élément commence toujours par une majuscule.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Faux", cle: true }, { text: " : le symbole du cuivre est Cu (Co est le cobalt)." }],
        [{ text: "b) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: " : majuscule, parfois suivie d'une minuscule." }],
      ],
    },
    {
      consigne: "Le clou en fer rouille ; la grille du pont d'Antsirabe rouille aussi. Explique pourquoi en utilisant le mot « élément ».",
      items: [],
      corrige: [
        [{ text: "Les deux objets contiennent " }, { text: "le même élément fer", cle: true }, { text: " ; or les propriétés chimiques dépendent des éléments : " }, { text: "tout corps contenant l'élément fer peut rouiller", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["élément chimique", "atome", "symbole", "propriétés chimiques"],
    sections: [
      {
        titre: "1. L'élément chimique",
        paras: [
          "La matière est faite d'atomes. Tous les atomes d'une même sorte forment un élément chimique : l'élément fer regroupe tous les atomes de fer, qu'ils soient dans un clou, une grille ou la rouille.",
          "Les propriétés chimiques d'un corps dépendent des éléments qu'il contient.",
        ],
      },
      {
        titre: "2. Le symbole de l'élément",
        paras: [
          "Chaque élément possède un symbole reconnu dans le monde entier : une lettre majuscule, parfois suivie d'une lettre minuscule.",
        ],
        puces: [
          "H : hydrogène — O : oxygène — C : carbone",
          "N : azote — S : soufre — Cl : chlore",
          "Fe : fer (latin ferrum) — Cu : cuivre (latin cuprum) — Ca : calcium",
        ],
      },
      {
        titre: "3. Un langage universel",
        paras: [
          "Un chimiste malgache, chinois ou brésilien écrit Fe pour le fer : les symboles permettent à tous les scientifiques de se comprendre sans traduction.",
        ],
      },
    ],
    saisTu: [
      "Certains symboles viennent du latin : Fe (ferrum, fer), Cu (cuprum, cuivre), Au (aurum, or), Ag (argentum, argent). Le cuivre doit même son nom latin à l'île de Chypre, où les Romains l'extrayaient !",
    ],
    experience: [
      "La chasse aux éléments à la maison :",
      "1. Fais l'inventaire de dix objets de la maison (clou, marmite, fil électrique, charbon, sel, bijou…).",
      "2. Pour chacun, devine le ou les éléments principaux qu'il contient.",
      "3. Écris leur symbole, puis vérifie avec ta leçon.",
    ],
  },
  substitutions: [
    { officiel: "Échantillons de laboratoire des éléments", local: "Objets du marché : clou (Fe), fil dénudé (Cu), charbon de bois (C), sel (Na et Cl), craie (Ca)" },
    { officiel: "Tableau périodique mural imprimé", local: "Tableau recopié à la craie sur grande feuille kraft ou sur le mur" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Associe chaque symbole à son élément : H, Ca, S, Cu — calcium, soufre, hydrogène, cuivre.",
      items: [],
      corrige: [
        [{ text: "H → " }, { text: "hydrogène", cle: true }, { text: " ; Ca → " }, { text: "calcium", cle: true }, { text: " ; S → " }, { text: "soufre", cle: true }, { text: " ; Cu → " }, { text: "cuivre", cle: true }, { text: ". (1 point par association)" }],
      ],
    },
    {
      points: 3,
      consigne: "Explique pourquoi le symbole du fer est Fe et non F.",
      items: [],
      corrige: [
        [{ text: "F est déjà pris par " }, { text: "le fluor", cle: true }, { text: " ; le fer tire son symbole du latin " }, { text: "ferrum", cle: true }, { text: " : première lettre majuscule + une minuscule : " }, { text: "Fe", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "Cite trois objets de ta maison et l'élément principal de chacun (nom + symbole).",
      items: [],
      corrige: [
        [{ text: "Exemples : clou → " }, { text: "fer, Fe", cle: true }, { text: " ; fil électrique → " }, { text: "cuivre, Cu", cle: true }, { text: " ; charbon → " }, { text: "carbone, C", cle: true }, { text: ". (1 point par objet correct)" }],
      ],
    },
  ],
};

const S2 = {
  numero: 2, total: 34, unite: "I", theme: "Matière",
  titre: "Le tableau périodique et la formule électronique",
  objectif: "expliquer la structure générale du tableau périodique et d'établir la formule électronique des 20 premiers éléments",
  documentation: DOC,
  support: "Tableau périodique de Mendeleïev (20 premiers éléments), craies de couleur, cahier",
  image: "images/img_seance02.png",
  imageLegende: "Figure 2 — Les 20 premiers éléments du tableau périodique : une ligne = une période, une colonne = une famille",
  revision: {
    qa: [
      { q: "Qu'est-ce qu'un élément chimique ?", ra: "Une sorte d'atome ; ex. : l'élément fer regroupe tous les atomes de fer." },
      { q: "Écris les symboles : oxygène, carbone, calcium.", ra: "O, C, Ca." },
      { q: "De quoi est constitué un atome ?", ra: "D'un noyau autour duquel se déplacent des électrons." },
    ],
    technique: "Questions-réponses orales", support: "Ardoise",
  },
  miseEnSituation: {
    enseignant: [
      "Dans la bibliothèque du lycée, Faly découvre une grande affiche : des dizaines de cases colorées avec des lettres et des nombres, rangées comme un calendrier. « On dirait un jeu de bataille navale ! », dit-il. Le bibliothécaire sourit : « C'est la plus grande carte au trésor de la chimie : le tableau de Mendeleïev. »",
      "Comment ce tableau est-il organisé, et que signifient les nombres dans les cases ?",
      "R.A. : Les éléments sont rangés par numéro atomique croissant, en lignes (périodes) et colonnes (familles).",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Affiche du tableau périodique",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Le tableau périodique et la formule électronique ». Après cette séance, vous serez capables d'expliquer la structure du tableau et d'établir la formule électronique des 20 premiers éléments.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien les 20 premières cases du tableau : chaque case porte un symbole et un nombre appelé numéro atomique Z. H porte le numéro 1, He le 2, Li le 3… jusqu'à Ca qui porte le 20. Observez : les numéros se suivent sans saut, ligne après ligne, comme les jours sur un calendrier.",
    apprenants: "Observent le tableau et repèrent les numéros.",
    technique: "Démarche d'observation", support: "Tableau périodique",
  },
  analyse: {
    qa: [
      { q: "Que représente le numéro atomique Z ?", ra: "Le nombre d'électrons de l'atome (égal au nombre de charges positives du noyau)." },
      { q: "Comment les éléments sont-ils rangés ?", ra: "Par numéro atomique croissant : Z = 1, 2, 3… 20." },
      { q: "Comment s'appellent les lignes ? les colonnes ?", ra: "Les lignes sont les périodes ; les colonnes sont les familles (ou groupes)." },
      { q: "Comment les électrons se répartissent-ils autour du noyau ?", ra: "En couches : la couche K reçoit 2 électrons au maximum, puis L en reçoit 8, puis M en reçoit 8." },
      { q: "Quelle est la formule électronique du sodium Na (Z = 11) ?", ra: "K2 L8 M1 : 2 + 8 + 1 = 11 électrons." },
    ],
    technique: "Questions-réponses, étude documentaire", support: "Tableau périodique, tableau noir",
  },
  synthese: {
    enseignant: "Donc, le tableau périodique range les éléments par numéro atomique Z croissant : Z est le nombre d'électrons de l'atome. Une ligne s'appelle une période, une colonne s'appelle une famille : les éléments d'une même colonne ont des propriétés chimiques voisines. Les électrons se répartissent en couches autour du noyau : K (2 au maximum), L (8 au maximum), M (8 au maximum). La formule électronique donne cette répartition : pour l'oxygène (Z = 8), K2 L6 ; pour le sodium (Z = 11), K2 L8 M1 ; pour le calcium (Z = 20), K2 L8 M8 M2… attention : K2 L8 M8, puis les 2 derniers sur la couche N : K2 L8 M8 N2.",
    apprenants: "Écoutent et recopient les exemples.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Établis la formule électronique de chaque atome :",
      items: [
        "a) hélium He (Z = 2)   b) carbone C (Z = 6)   c) aluminium Al (Z = 13)",
      ],
      corrige: [
        [{ text: "a) He : " }, { text: "K2", cle: true }, { text: "  b) C : " }, { text: "K2 L4", cle: true }, { text: "  c) Al : " }, { text: "K2 L8 M3", cle: true }],
      ],
    },
    {
      consigne: "Un atome a pour formule électronique K2 L8 M7. Quel est son numéro atomique ? De quel élément s'agit-il ?",
      items: [],
      corrige: [
        [{ text: "Z = 2 + 8 + 7 = " }, { text: "17", cle: true }, { text: " : c'est " }, { text: "le chlore Cl", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, tableau périodique",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : période – famille – numéro atomique – électrons.",
      items: [
        "a) Une ligne du tableau s'appelle une ……… ; une colonne s'appelle une ……… .",
        "b) Le ……… Z indique le nombre d'……… de l'atome.",
      ],
      corrige: [
        [{ text: "a) Une ligne est une " }, { text: "période", cle: true }, { text: " ; une colonne est une " }, { text: "famille", cle: true }, { text: "." }],
        [{ text: "b) Le " }, { text: "numéro atomique", cle: true }, { text: " Z indique le nombre d'" }, { text: "électrons", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Établis la formule électronique du magnésium Mg (Z = 12) et indique sa période.",
      items: [],
      corrige: [
        [{ text: "Mg : " }, { text: "K2 L8 M2", cle: true }, { text: " ; trois couches occupées → " }, { text: "3e période", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["tableau périodique", "numéro atomique", "période", "famille", "couche électronique", "formule électronique"],
    sections: [
      {
        titre: "1. La structure du tableau périodique",
        paras: [
          "Le tableau périodique, créé par Mendeleïev en 1869, range les éléments par numéro atomique Z croissant. Z est le nombre d'électrons de l'atome.",
        ],
        puces: [
          "une ligne = une période ;",
          "une colonne = une famille : des éléments aux propriétés chimiques voisines.",
        ],
      },
      {
        titre: "2. Les couches électroniques",
        paras: [
          "Les électrons se répartissent autour du noyau en couches successives : la couche K (2 électrons au maximum), puis la couche L (8 au maximum), puis la couche M (8 au maximum).",
        ],
      },
      {
        titre: "3. La formule électronique",
        paras: [
          "La formule électronique indique le nombre d'électrons sur chaque couche. Exemples :",
        ],
        puces: [
          "O (Z = 8) : K2 L6",
          "Na (Z = 11) : K2 L8 M1",
          "Cl (Z = 17) : K2 L8 M7",
          "Ca (Z = 20) : K2 L8 M8 N2",
        ],
      },
      {
        titre: "4. Période et couche",
        paras: [
          "Le numéro de la période d'un élément est le nombre de couches occupées : Na (K2 L8 M1) occupe trois couches, il est donc dans la 3e période.",
        ],
      },
    ],
    saisTu: [
      "En 1869, Mendeleïev laissa des cases vides dans son tableau et prédit les propriétés des éléments manquants ! Quand le gallium puis le germanium furent découverts quelques années plus tard, leurs propriétés correspondaient exactement à ses prédictions : le tableau périodique devint célèbre dans le monde entier.",
    ],
    experience: [
      "Fabrique ton tableau des 20 éléments :",
      "1. Découpe 20 cartons de la taille d'une carte à jouer.",
      "2. Sur chacun, écris le symbole en grand, le numéro atomique Z en haut, la formule électronique en bas.",
      "3. Mélange les cartes, puis reconstitue le tableau le plus vite possible : défie tes camarades !",
    ],
  },
  substitutions: [
    { officiel: "Affiche officielle du tableau périodique", local: "Tableau des 20 premiers éléments recopié sur papier kraft ou carton de récupération" },
    { officiel: "Cartes d'éléments imprimées", local: "Cartons découpés dans des boîtes, écrits au feutre ou à la craie grasse" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Établis la formule électronique : a) N (Z = 7) ; b) Ne (Z = 10) ; c) P (Z = 15) ; d) K (Z = 19).",
      items: [],
      corrige: [
        [{ text: "a) N : " }, { text: "K2 L5", cle: true }, { text: " ; b) Ne : " }, { text: "K2 L8", cle: true }, { text: " ; c) P : " }, { text: "K2 L8 M5", cle: true }, { text: " ; d) K : " }, { text: "K2 L8 M8 N1", cle: true }, { text: ". (1 point chacune)" }],
      ],
    },
    {
      points: 3,
      consigne: "Un élément se trouve dans la 2e période. Combien de couches d'électrons possède-t-il ? Donne deux exemples.",
      items: [],
      corrige: [
        [{ text: "Il possède " }, { text: "2 couches occupées (K et L)", cle: true }, { text: " ; exemples : " }, { text: "C (K2 L4), O (K2 L6)", cle: true }, { text: " ou tout élément de Li à Ne." }],
      ],
    },
    {
      points: 3,
      consigne: "Vrai ou Faux : « Les éléments d'une même colonne ont des propriétés voisines. » Justifie avec un exemple.",
      items: [],
      corrige: [
        [{ text: "" }, { text: "Vrai", cle: true }, { text: " : Li, Na et K (1re colonne) sont tous des " }, { text: "métaux très réactifs", cle: true }, { text: " ; He, Ne, Ar (dernière colonne) ne réagissent presque jamais." }],
      ],
    },
  ],
};

const S3 = {
  numero: 3, total: 34, unite: "I", theme: "Matière",
  titre: "Le modèle de Lewis et la valence",
  objectif: "établir la représentation de Lewis d'un élément et d'en déduire sa valence",
  documentation: DOC,
  support: "Tableau périodique, affiche des représentations de Lewis, craies de couleur",
  image: "images/img_seance03.png",
  imageLegende: "Figure 3 — La représentation de Lewis de H, C, N et O : les points isolés annoncent la valence",
  revision: {
    qa: [
      { q: "Établis la formule électronique de l'oxygène (Z = 8).", ra: "K2 L6." },
      { q: "Comment appelle-t-on la dernière couche occupée ?", ra: "La couche externe." },
      { q: "Combien d'électrons externes possède le carbone (K2 L4) ?", ra: "4 électrons sur la couche externe L." },
    ],
    technique: "Questions-réponses orales", support: "Ardoise",
  },
  miseEnSituation: {
    enseignant: [
      "Voahangy dessine des atomes pour son exposé, mais dessiner toutes les couches prend trop de temps. Sa grande sœur, étudiante, lui montre une astuce : « Les chimistes ne dessinent que les électrons de la couche externe, avec des points autour du symbole. C'est rapide et cela dit tout ! »",
      "Pourquoi seuls les électrons externes intéressent-ils tant les chimistes ?",
      "R.A. : Parce que ce sont eux qui participent aux liaisons entre atomes.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Le modèle de Lewis et la valence ». Après cette séance, vous serez capables de représenter un élément selon Lewis et d'en déduire sa valence.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien l'affiche : autour du symbole H, un seul point. Autour du C, quatre points isolés, un sur chaque côté. Autour du N, trois points isolés et une paire. Autour du O, deux points isolés et deux paires. Comptez les points de chaque représentation et comparez-les au nombre d'électrons externes.",
    apprenants: "Observent, comptent les points, notent leurs remarques.",
    technique: "Démarche d'observation", support: "Affiche de Lewis",
  },
  analyse: {
    qa: [
      { q: "Que représentent les points autour du symbole ?", ra: "Les électrons de la couche externe de l'atome." },
      { q: "Comment place-t-on les électrons externes ?", ra: "Un par côté d'abord (électrons célibataires), puis on complète en paires." },
      { q: "Qu'est-ce qu'un électron célibataire ?", ra: "Un électron seul sur son côté, prêt à former une liaison avec un autre atome." },
      { q: "Qu'appelle-t-on valence ?", ra: "Le nombre d'électrons célibataires : c'est le nombre de liaisons que l'atome peut former." },
      { q: "Quelle est la valence de H ? de O ? de N ? de C ?", ra: "H : 1 ; O : 2 ; N : 3 ; C : 4." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Affiche, tableau noir",
  },
  synthese: {
    enseignant: "Donc, la représentation de Lewis montre le symbole de l'élément entouré de ses électrons externes : on place d'abord un électron par côté, puis on forme des paires. Les électrons célibataires (isolés) sont ceux qui peuvent créer des liaisons : leur nombre est la valence de l'élément. Retenez : hydrogène H valence 1, oxygène O valence 2, azote N valence 3, carbone C valence 4, chlore Cl valence 1. La valence nous dira, à la prochaine séance… pardon, à la séance 5, combien de liaisons chaque atome forme dans une molécule !",
    apprenants: "Écoutent et recopient.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Pour chaque atome, indique le nombre d'électrons externes puis la valence :",
      items: [
        "a) H (K1)   b) O (K2 L6)   c) C (K2 L4)",
      ],
      corrige: [
        [{ text: "a) H : 1 électron externe → valence " }, { text: "1", cle: true }, { text: "  b) O : 6 externes, 2 célibataires → valence " }, { text: "2", cle: true }, { text: "  c) C : 4 externes, 4 célibataires → valence " }, { text: "4", cle: true }],
      ],
    },
    {
      consigne: "Le chlore Cl a pour formule électronique K2 L8 M7. Combien d'électrons célibataires possède-t-il ? Quelle est sa valence ?",
      items: [],
      corrige: [
        [{ text: "7 électrons externes = 3 paires + " }, { text: "1 célibataire", cle: true }, { text: " → valence " }, { text: "1", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète : dans la représentation de Lewis, les points représentent les ……… ; le nombre d'électrons ……… donne la ……… de l'élément.",
      items: [],
      corrige: [
        [{ text: "Les points représentent les " }, { text: "électrons externes", cle: true }, { text: " ; le nombre d'électrons " }, { text: "célibataires", cle: true }, { text: " donne la " }, { text: "valence", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Dessine la représentation de Lewis de l'azote N (K2 L5) et donne sa valence.",
      items: [],
      corrige: [
        [{ text: "5 électrons externes : " }, { text: "1 paire + 3 célibataires", cle: true }, { text: " → valence " }, { text: "3", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["représentation de Lewis", "électron externe", "électron célibataire", "paire d'électrons", "valence"],
    sections: [
      {
        titre: "1. La représentation de Lewis",
        paras: [
          "La représentation de Lewis montre le symbole de l'élément entouré de points figurant ses électrons externes (ceux de la dernière couche). On place un électron par côté, puis on complète en paires.",
        ],
      },
      {
        titre: "2. Électrons célibataires et paires",
        paras: [
          "Un électron seul sur un côté est dit célibataire : il peut former une liaison avec un électron célibataire d'un autre atome. Deux électrons du même côté forment une paire, qui ne fait pas de liaison.",
        ],
      },
      {
        titre: "3. La valence",
        paras: [
          "La valence d'un élément est le nombre de ses électrons célibataires : c'est le nombre de liaisons qu'il peut former.",
        ],
        puces: [
          "H : valence 1 — Cl : valence 1",
          "O : valence 2",
          "N : valence 3",
          "C : valence 4",
        ],
      },
    ],
    saisTu: [
      "Gilbert Lewis proposa ses fameux schémas à points en 1916, avant même que l'on puisse « voir » les atomes ! Son modèle si simple est toujours utilisé, cent ans plus tard, dans toutes les classes de chimie du monde.",
    ],
    experience: [
      "Le jeu des mains-valences :",
      "1. Chaque camarade reçoit un rôle : H lève 1 main, O lève 2 mains, N… 3 (avec un pied !), C… 4.",
      "2. Pour former une « molécule », chaque main levée doit tenir la main d'un camarade : aucune main ne doit rester libre.",
      "3. Essayez de former H et H, puis O avec deux H : vous venez de fabriquer H2 et H2O !",
    ],
  },
  substitutions: [
    { officiel: "Affiche des représentations de Lewis", local: "Représentations dessinées à la craie de couleur sur carton ou au tableau" },
    { officiel: "Modèles d'atomes aimantés", local: "Bouchons de bouteille (symboles) et graines de haricot (électrons) posés sur la table" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Donne la valence de chaque élément : a) H ; b) O ; c) N ; d) C.",
      items: [],
      corrige: [
        [{ text: "a) H : " }, { text: "1", cle: true }, { text: " ; b) O : " }, { text: "2", cle: true }, { text: " ; c) N : " }, { text: "3", cle: true }, { text: " ; d) C : " }, { text: "4", cle: true }, { text: ". (1 point chacun)" }],
      ],
    },
    {
      points: 3,
      consigne: "Le soufre S a pour formule électronique K2 L8 M6. Établis sa représentation de Lewis et sa valence.",
      items: [],
      corrige: [
        [{ text: "6 électrons externes : " }, { text: "2 paires + 2 célibataires", cle: true }, { text: " → valence " }, { text: "2", cle: true }, { text: " (comme l'oxygène, de la même famille !)." }],
      ],
    },
    {
      points: 3,
      consigne: "Explique pourquoi le néon Ne (K2 L8) ne forme aucune liaison.",
      items: [],
      corrige: [
        [{ text: "Ses 8 électrons externes forment " }, { text: "4 paires : aucun électron célibataire", cle: true }, { text: " → valence " }, { text: "0", cle: true }, { text: " : le néon est un gaz inerte." }],
      ],
    },
  ],
};

const S4 = {
  numero: 4, total: 34, unite: "I", theme: "Matière",
  titre: "Les familles d'éléments",
  objectif: "associer les familles d'éléments (alcalins, alcalino-terreux, halogènes, gaz inertes) aux propriétés qui les distinguent",
  documentation: DOC,
  support: "Tableau périodique, documents sur les propriétés des familles, tableau récapitulatif à compléter",
  image: "images/img_seance04.png",
  imageLegende: "Figure 4 — Quatre familles d'éléments : alcalins, alcalino-terreux, halogènes et gaz inertes",
  revision: {
    qa: [
      { q: "Comment appelle-t-on une colonne du tableau périodique ?", ra: "Une famille (ou un groupe)." },
      { q: "Établis la formule électronique du sodium Na (Z = 11).", ra: "K2 L8 M1." },
      { q: "Qu'ont en commun les éléments d'une même famille ?", ra: "Des propriétés chimiques voisines et le même nombre d'électrons externes." },
    ],
    technique: "Questions-réponses orales", support: "Ardoise",
  },
  miseEnSituation: {
    enseignant: [
      "Dans une famille malgache, les enfants se ressemblent : mêmes yeux, même sourire, mêmes gestes hérités des parents. Le professeur affirme : « Dans le tableau périodique aussi, il y a des familles : le lithium, le sodium et le potassium sont de vrais frères ! »",
      "Qu'est-ce qui fait « l'air de famille » des éléments d'une même colonne ?",
      "R.A. : Le même nombre d'électrons externes, donc des réactions chimiques semblables.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau périodique",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Les familles d'éléments ». Après cette séance, vous serez capables d'associer les familles alcalins, alcalino-terreux, halogènes et gaz inertes à leurs propriétés.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien les documents distribués. Document 1 : le sodium, conservé dans l'huile, réagit violemment au contact de l'eau ; le potassium encore plus fort. Document 2 : le magnésium brûle avec une lumière blanche éclatante ; le calcium réagit doucement avec l'eau. Document 3 : le chlore désinfecte l'eau, le fluor attaque presque tout. Document 4 : l'hélium et le néon ne réagissent jamais avec rien.",
    apprenants: "Lisent les documents en groupe et notent les comportements.",
    technique: "Étude documentaire, travail de groupe", support: "Documents sur les familles",
  },
  analyse: {
    qa: [
      { q: "Que remarques-tu pour Li, Na, K (1re colonne) ?", ra: "Ce sont des métaux très réactifs, surtout avec l'eau : ce sont les alcalins (1 électron externe)." },
      { q: "Et pour Be, Mg, Ca (2e colonne) ?", ra: "Des métaux réactifs, un peu moins violents : les alcalino-terreux (2 électrons externes)." },
      { q: "Et pour F et Cl (avant-dernière colonne) ?", ra: "Des non-métaux très réactifs : les halogènes (7 électrons externes)." },
      { q: "Et pour He, Ne, Ar (dernière colonne) ?", ra: "Des gaz qui ne réagissent presque jamais : les gaz inertes (couche externe pleine)." },
      { q: "Pourquoi les gaz inertes ne réagissent-ils pas ?", ra: "Leur couche externe est complète : aucun électron célibataire, valence 0." },
    ],
    technique: "Questions-réponses, travail de groupe", support: "Documents, tableau périodique",
  },
  synthese: {
    enseignant: "Donc, quatre familles à connaître. Les alcalins (Li, Na, K) : métaux très réactifs, 1 électron externe. Les alcalino-terreux (Be, Mg, Ca) : métaux réactifs, 2 électrons externes. Les halogènes (F, Cl) : non-métaux très réactifs, 7 électrons externes. Les gaz inertes ou gaz nobles (He, Ne, Ar) : couche externe pleine, ils ne réagissent presque jamais. C'est le nombre d'électrons externes qui fait l'air de famille : même colonne, même comportement chimique !",
    apprenants: "Écoutent et complètent leur tableau récapitulatif.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Classe chaque élément dans sa famille : Na, Ar, Mg, Cl, K, He, Ca, F.",
      items: [],
      corrige: [
        [{ text: "Alcalins : " }, { text: "Na, K", cle: true }, { text: " ; alcalino-terreux : " }, { text: "Mg, Ca", cle: true }, { text: " ; halogènes : " }, { text: "Cl, F", cle: true }, { text: " ; gaz inertes : " }, { text: "Ar, He", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Complète le tableau : famille / type (métal ou non) / réactivité / électrons externes, pour les alcalins et les gaz inertes.",
      items: [],
      corrige: [
        [{ text: "Alcalins : " }, { text: "métaux, très réactifs, 1 électron externe", cle: true }, { text: "." }],
        [{ text: "Gaz inertes : " }, { text: "gaz, presque aucune réaction, couche externe pleine", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail de groupe", applicationSupport: "Tableau récapitulatif, kraft",
  evaluation: [
    {
      consigne: "Vrai ou Faux ? Corrige si nécessaire :",
      items: [
        "a) Le potassium K appartient aux halogènes.",
        "b) Les gaz inertes ont une couche externe complète.",
        "c) Les halogènes sont des métaux.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Faux", cle: true }, { text: " : K est un alcalin (1re colonne)." }],
        [{ text: "b) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Faux", cle: true }, { text: " : ce sont des non-métaux très réactifs." }],
      ],
    },
    {
      consigne: "Le césium Cs est situé sous le potassium dans la 1re colonne. Prédis deux de ses propriétés.",
      items: [],
      corrige: [
        [{ text: "C'est " }, { text: "un métal alcalin très réactif", cle: true }, { text: " (encore plus que K), avec " }, { text: "1 électron externe", cle: true }, { text: " ; il réagit violemment avec l'eau." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["famille", "alcalins", "alcalino-terreux", "halogènes", "gaz inertes", "réactivité"],
    sections: [
      {
        titre: "1. Une colonne = une famille",
        paras: [
          "Les éléments d'une même colonne du tableau périodique ont le même nombre d'électrons externes : ils forment une famille aux propriétés chimiques voisines.",
        ],
      },
      {
        titre: "2. Les quatre familles au programme",
        paras: [],
        puces: [
          "Alcalins (Li, Na, K) : métaux très réactifs — 1 électron externe ;",
          "Alcalino-terreux (Be, Mg, Ca) : métaux réactifs — 2 électrons externes ;",
          "Halogènes (F, Cl) : non-métaux très réactifs — 7 électrons externes ;",
          "Gaz inertes (He, Ne, Ar) : ne réagissent presque jamais — couche externe pleine.",
        ],
      },
      {
        titre: "3. Expliquer la réactivité",
        paras: [
          "Plus un atome est proche d'avoir une couche externe pleine (halogènes) ou presque vide (alcalins), plus il est réactif. Une couche externe déjà pleine (gaz inertes) rend l'atome stable : il n'a besoin de rien.",
        ],
      },
    ],
    saisTu: [
      "L'argon représente près de 1 % de l'air que tu respires ! Ce gaz inerte, invisible et sans odeur, remplit aussi les ampoules électriques : comme il ne réagit avec rien, il protège le filament qui, sinon, brûlerait en un éclair.",
    ],
    experience: [
      "La famille du calcium dans ta cuisine :",
      "1. Verse un peu de vinaigre sur un morceau de craie (carbonate de calcium) : observe l'effervescence.",
      "2. Recommence sur une coquille d'œuf : même réaction !",
      "3. Craie et coquille contiennent le même élément calcium : même famille, même comportement.",
    ],
  },
  substitutions: [
    { officiel: "Vidéos des réactions des alcalins avec l'eau", local: "Documents illustrés ou récit de l'enseignant ; NE JAMAIS manipuler de sodium en classe" },
    { officiel: "Échantillons de gaz rares", local: "Ampoule électrique usagée (argon) et ballon de fête (hélium) comme exemples" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Associe chaque famille à sa propriété : alcalins, halogènes, gaz inertes, alcalino-terreux — a) ne réagissent presque pas ; b) métaux très réactifs ; c) métaux réactifs ; d) non-métaux très réactifs.",
      items: [],
      corrige: [
        [{ text: "Alcalins → " }, { text: "b", cle: true }, { text: " ; halogènes → " }, { text: "d", cle: true }, { text: " ; gaz inertes → " }, { text: "a", cle: true }, { text: " ; alcalino-terreux → " }, { text: "c", cle: true }, { text: ". (1 point par association)" }],
      ],
    },
    {
      points: 3,
      consigne: "Le brome Br est un halogène. Donne son nombre d'électrons externes et sa valence probable.",
      items: [],
      corrige: [
        [{ text: "Comme F et Cl : " }, { text: "7 électrons externes", cle: true }, { text: ", donc " }, { text: "valence 1", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "Explique pourquoi on utilise l'argon plutôt que l'air dans les ampoules électriques.",
      items: [],
      corrige: [
        [{ text: "L'argon est un " }, { text: "gaz inerte : il ne réagit pas", cle: true }, { text: " avec le filament chaud, alors que le dioxygène de l'air le ferait " }, { text: "brûler", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S5 = {
  numero: 5, total: 34, unite: "I", theme: "Matière",
  titre: "La molécule, la liaison covalente et la formule brute",
  objectif: "expliquer la structure d'une molécule et d'écrire sa formule brute",
  documentation: DOC,
  support: "Modèles moléculaires (ou boules de pâte et allumettes), tableau périodique, représentations de Lewis",
  image: "images/img_seance05.png",
  imageLegende: "Figure 5 — Les molécules H2O, CO2, H2, O2 et NH3 : des atomes liés par des liaisons covalentes",
  revision: {
    qa: [
      { q: "Qu'est-ce que la valence d'un élément ?", ra: "Le nombre de liaisons qu'il peut former (= nombre d'électrons célibataires)." },
      { q: "Rappelle les valences de H, O, N et C.", ra: "H : 1 ; O : 2 ; N : 3 ; C : 4." },
      { q: "Qu'est-ce qu'un électron célibataire ?", ra: "Un électron externe seul sur son côté, prêt à former une liaison." },
    ],
    technique: "Questions-réponses orales", support: "Ardoise",
  },
  miseEnSituation: {
    enseignant: [
      "Rija veut construire une maquette de molécule d'eau pour la fête de la science du lycée. Il a des boules de pâte rouge (oxygène) et blanches (hydrogène) et des allumettes. Mais combien de boules blanches attacher à la boule rouge : une, deux, trois ?",
      "Qu'est-ce qui décide du nombre d'atomes dans une molécule ?",
      "R.A. : La valence de chaque atome : l'oxygène (valence 2) attache exactement 2 hydrogènes.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Boules de pâte, allumettes",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La molécule, la liaison covalente et la formule brute ». Après cette séance, vous serez capables d'expliquer la structure d'une molécule et d'écrire sa formule brute.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : je construis la molécule H2 en reliant deux boules blanches par une allumette. Puis O2 : deux boules rouges reliées par DEUX allumettes. Puis H2O : la boule rouge tient deux boules blanches. Enfin NH3 : la boule bleue (azote) tient trois blanches, et CO2 : la boule noire (carbone) tient deux rouges par des liaisons doubles. Comptez les allumettes qui partent de chaque boule.",
    apprenants: "Observent, comptent les liaisons par atome, construisent à leur tour en groupe.",
    technique: "Modélisation, travail de groupe", support: "Modèles moléculaires",
  },
  analyse: {
    qa: [
      { q: "Qu'est-ce qu'une molécule ?", ra: "Un assemblage d'un nombre précis d'atomes liés les uns aux autres." },
      { q: "Qu'est-ce qu'une liaison covalente ?", ra: "Un lien entre deux atomes qui partagent chacun un (ou plusieurs) électron(s) : une paire partagée = une liaison." },
      { q: "Combien d'allumettes partent de chaque boule ?", ra: "Exactement la valence : 1 pour H, 2 pour O, 3 pour N, 4 pour C." },
      { q: "Comment écrit-on la composition d'une molécule ?", ra: "Par sa formule brute : symboles + nombre d'atomes en indice. H2O = 2 H et 1 O." },
      { q: "Que signifie la formule CO2 ?", ra: "1 atome de carbone lié à 2 atomes d'oxygène." },
    ],
    technique: "Questions-réponses, modélisation", support: "Modèles, tableau noir",
  },
  synthese: {
    enseignant: "Donc, une molécule est un assemblage d'atomes en nombre précis, unis par des liaisons covalentes : chaque liaison est une paire d'électrons partagée entre deux atomes. Chaque atome forme exactement autant de liaisons que sa valence : H une, O deux, N trois, C quatre. La formule brute résume la molécule : le symbole de chaque élément suivi, en indice, du nombre d'atomes. H2O : deux hydrogènes, un oxygène. CO2 : un carbone, deux oxygènes. NH3 : un azote, trois hydrogènes. Attention : nous n'étudions pas cette année la liaison ionique.",
    apprenants: "Écoutent et recopient.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Écris la formule brute de chaque molécule décrite :",
      items: [
        "a) 2 atomes d'hydrogène et 1 atome d'oxygène.",
        "b) 1 atome d'azote et 3 atomes d'hydrogène.",
        "c) 1 atome de soufre et 2 atomes d'oxygène.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "H2O", cle: true }, { text: " (eau)." }],
        [{ text: "b) " }, { text: "NH3", cle: true }, { text: " (ammoniac)." }],
        [{ text: "c) " }, { text: "SO2", cle: true }, { text: " (dioxyde de soufre)." }],
      ],
    },
    {
      consigne: "Donne la composition de la molécule CO2 puis vérifie les valences (C : 4 ; O : 2).",
      items: [],
      corrige: [
        [{ text: "CO2 = " }, { text: "1 carbone + 2 oxygènes", cle: true }, { text: " ; le carbone forme 2 liaisons doubles (4 liaisons au total = sa valence), chaque oxygène 2 liaisons : " }, { text: "les valences sont respectées", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, modèles",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : covalente – molécule – valence – formule brute.",
      items: [
        "a) Une ……… est un assemblage précis d'atomes liés.",
        "b) Une liaison ……… est une paire d'électrons partagée.",
        "c) Le nombre de liaisons d'un atome est donné par sa ……… ; la composition s'écrit avec la ……… .",
      ],
      corrige: [
        [{ text: "a) Une " }, { text: "molécule", cle: true }, { text: " est un assemblage précis d'atomes liés." }],
        [{ text: "b) Une liaison " }, { text: "covalente", cle: true }, { text: " est une paire d'électrons partagée." }],
        [{ text: "c) Sa " }, { text: "valence", cle: true }, { text: " ; la " }, { text: "formule brute", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Le méthane est formé d'un atome de carbone et de quatre atomes d'hydrogène. Écris sa formule brute et justifie le nombre d'hydrogènes.",
      items: [],
      corrige: [
        [{ text: "Formule : " }, { text: "CH4", cle: true }, { text: " ; le carbone a la " }, { text: "valence 4", cle: true }, { text: ", il forme donc 4 liaisons, une avec chaque H (valence 1)." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["molécule", "liaison covalente", "formule brute", "valence", "indice"],
    sections: [
      {
        titre: "1. La molécule",
        paras: [
          "Une molécule est un assemblage d'un nombre précis d'atomes liés les uns aux autres. L'eau, le dioxyde de carbone, le dioxygène de l'air sont faits de molécules.",
        ],
      },
      {
        titre: "2. La liaison covalente",
        paras: [
          "Une liaison covalente unit deux atomes qui partagent chacun un ou plusieurs électrons célibataires : une paire partagée = un trait entre les symboles. Chaque atome forme autant de liaisons que sa valence (H : 1, O : 2, N : 3, C : 4).",
        ],
      },
      {
        titre: "3. La formule brute",
        paras: [
          "La formule brute indique le nombre d'atomes de chaque élément, écrit en indice après le symbole :",
        ],
        puces: [
          "H2 (dihydrogène), O2 (dioxygène), N2 (diazote) ;",
          "H2O (eau) : 2 H + 1 O ;",
          "CO2 (dioxyde de carbone) : 1 C + 2 O ;",
          "NH3 (ammoniac) : 1 N + 3 H ; SO2 (dioxyde de soufre) : 1 S + 2 O.",
        ],
      },
    ],
    saisTu: [
      "Une seule goutte d'eau contient environ 1 500 milliards de milliards de molécules H2O : plus de molécules qu'il n'y a de grains de sable sur toutes les plages de Madagascar !",
    ],
    experience: [
      "Construis tes molécules :",
      "1. Prépare des boulettes de pâte ou d'argile : blanches (H), rouges (O), noires (C), bleues (N).",
      "2. Relie-les avec des allumettes ou des cure-dents en respectant les valences : H une liaison, O deux, N trois, C quatre.",
      "3. Construis H2, O2, H2O, NH3, CO2 puis vérifie qu'aucune « main » ne reste libre.",
    ],
  },
  substitutions: [
    { officiel: "Coffret de modèles moléculaires", local: "Boulettes d'argile ou de pâte colorée + allumettes ou cure-dents" },
    { officiel: "Boules colorées normalisées", local: "Fruits secs, graines ou bouchons peints de différentes couleurs" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Donne la composition de chaque molécule : a) O2 ; b) H2O ; c) NH3 ; d) SO2.",
      items: [],
      corrige: [
        [{ text: "a) O2 : " }, { text: "2 atomes d'oxygène", cle: true }, { text: " ; b) H2O : " }, { text: "2 H + 1 O", cle: true }, { text: " ; c) NH3 : " }, { text: "1 N + 3 H", cle: true }, { text: " ; d) SO2 : " }, { text: "1 S + 2 O", cle: true }, { text: ". (1 point chacune)" }],
      ],
    },
    {
      points: 3,
      consigne: "Combien de liaisons forme l'atome d'azote dans NH3 ? Justifie avec sa valence.",
      items: [],
      corrige: [
        [{ text: "L'azote forme " }, { text: "3 liaisons", cle: true }, { text: " (une avec chaque hydrogène), conformément à sa " }, { text: "valence 3", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "Vrai ou Faux : « Dans une liaison covalente, un atome donne définitivement un électron à l'autre. » Corrige si besoin.",
      items: [],
      corrige: [
        [{ text: "" }, { text: "Faux", cle: true }, { text: " : les deux atomes " }, { text: "partagent", cle: true }, { text: " une paire d'électrons ; aucun ne le donne définitivement." }],
      ],
    },
  ],
};

const S6 = {
  numero: 6, total: 34, unite: "I", theme: "Matière",
  titre: "La mole et le nombre d'Avogadro",
  objectif: "utiliser la notion de mole pour représenter une quantité de matière",
  documentation: DOC,
  support: "Boîte d'œufs, sac de riz, balance, documents sur la mesure des quantités microscopiques",
  image: "images/img_seance06.png",
  imageLegende: "Figure 6 — La douzaine pour les œufs, la mole pour les atomes : deux façons de compter par paquets",
  revision: {
    qa: [
      { q: "Qu'est-ce qu'une molécule ?", ra: "Un assemblage précis d'atomes liés par des liaisons covalentes." },
      { q: "Que signifie la formule H2O ?", ra: "2 atomes d'hydrogène liés à 1 atome d'oxygène." },
      { q: "Un atome est-il visible à l'œil nu ?", ra: "Non : il est des milliards de fois trop petit." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Au marché, la marchande ne compte pas les grains de riz un par un : elle vend au kapoaka ! De même, l'épicière vend les œufs par douzaines. Le chimiste a le même problème en pire : impossible de compter des atomes un à un, ils sont trop petits et trop nombreux.",
      "Quel « kapoaka » les chimistes ont-ils inventé pour compter les atomes ?",
      "R.A. : La mole, un paquet géant de 6,02 × 10²³ entités.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Kapoaka, boîte d'œufs",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La mole et le nombre d'Avogadro ». Après cette séance, vous serez capables d'utiliser la mole pour représenter une quantité de matière.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : une douzaine d'œufs, c'est toujours 12 œufs, qu'ils soient petits ou gros. Un kapoaka de riz contient environ 9 000 grains ; un kapoaka de maïs, beaucoup moins de grains, car ils sont plus gros. Compter par paquets, c'est plus rapide que compter un par un. Le chimiste fait pareil avec un paquet gigantesque : la mole.",
    apprenants: "Observent et comparent les « paquets » (douzaine, kapoaka).",
    technique: "Démarche d'observation, analogie", support: "Œufs, kapoaka, riz",
  },
  analyse: {
    qa: [
      { q: "Pourquoi compter les atomes par paquets ?", ra: "Ils sont trop petits et trop nombreux pour être comptés un à un." },
      { q: "Qu'est-ce qu'une mole ?", ra: "Un paquet de 6,02 × 10²³ entités identiques (atomes, molécules, ions)." },
      { q: "Comment s'appelle ce nombre ?", ra: "Le nombre d'Avogadro, noté N = 6,02 × 10²³ par mole." },
      { q: "Une mole d'atomes de fer et une mole d'atomes d'or contiennent-elles le même nombre d'atomes ?", ra: "Oui : 6,02 × 10²³ atomes chacune, comme deux douzaines contiennent 12 œufs." },
      { q: "En quelle unité s'exprime la quantité de matière ?", ra: "En moles (symbole : mol) ; on la note n." },
    ],
    technique: "Questions-réponses, analogie", support: "Tableau noir",
  },
  synthese: {
    enseignant: "Donc, la mole est le « paquet » du chimiste : 1 mole = 6,02 × 10²³ entités identiques. Ce nombre immense s'appelle le nombre d'Avogadro, N = 6,02 × 10²³ /mol. La quantité de matière, notée n et exprimée en moles (mol), compte le nombre de paquets : 2 moles d'eau = 2 × 6,02 × 10²³ molécules d'eau. Comme la douzaine vaut pour les œufs comme pour les mangues, la mole vaut pour les atomes, les molécules ou les ions !",
    apprenants: "Écoutent et recopient.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Réponds :",
      items: [
        "a) Combien y a-t-il de molécules dans 1 mole d'eau ?",
        "b) Et dans 3 moles de dioxygène ?",
      ],
      corrige: [
        [{ text: "a) " }, { text: "6,02 × 10²³ molécules", cle: true }, { text: "." }],
        [{ text: "b) 3 × 6,02 × 10²³ = " }, { text: "18,06 × 10²³ ≈ 1,8 × 10²⁴ molécules", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "On dispose de 12,04 × 10²³ atomes de fer. Quelle quantité de matière cela représente-t-il ?",
      items: [],
      corrige: [
        [{ text: "n = 12,04 × 10²³ ÷ 6,02 × 10²³ = " }, { text: "2 moles d'atomes de fer", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète : 1 mole contient ……… entités ; ce nombre s'appelle le nombre ……… ; la quantité de matière n s'exprime en ……… .",
      items: [],
      corrige: [
        [{ text: "1 mole contient " }, { text: "6,02 × 10²³", cle: true }, { text: " entités ; c'est le nombre " }, { text: "d'Avogadro", cle: true }, { text: " ; n s'exprime en " }, { text: "moles (mol)", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Explique avec tes mots pourquoi le chimiste utilise la mole, en t'aidant de l'exemple du kapoaka de riz.",
      items: [],
      corrige: [
        [{ text: "Comme les grains de riz, les atomes sont " }, { text: "trop petits et trop nombreux pour être comptés un à un", cle: true }, { text: " : on les compte " }, { text: "par paquets", cle: true }, { text: " — le kapoaka pour le riz, la mole (6,02 × 10²³) pour les atomes." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["mole", "nombre d'Avogadro", "quantité de matière", "entités"],
    sections: [
      {
        titre: "1. Compter par paquets",
        paras: [
          "Les œufs se comptent par douzaines, le riz par kapoaka. Les atomes, bien trop petits et nombreux, se comptent par moles.",
        ],
      },
      {
        titre: "2. La mole et le nombre d'Avogadro",
        paras: [
          "Une mole est un paquet de 6,02 × 10²³ entités identiques (atomes, molécules ou ions). Ce nombre s'appelle le nombre d'Avogadro : N = 6,02 × 10²³ par mole.",
        ],
      },
      {
        titre: "3. La quantité de matière",
        paras: [
          "La quantité de matière, notée n, compte le nombre de moles ; son unité est la mole (mol).",
          "Nombre d'entités = n × N. Exemple : 2 mol d'eau contiennent 2 × 6,02 × 10²³ = 12,04 × 10²³ molécules.",
        ],
      },
    ],
    saisTu: [
      "6,02 × 10²³ grains de riz rempliraient plus d'un milliard de fois le stade Barea d'Antananarivo ! Ce nombre est si gigantesque que les chimistes du monde entier lui ont même dédié une fête : le « jour de la mole », célébré le 23 octobre (10/23 à l'américaine), de 6 h 02 à 18 h 02.",
    ],
    experience: [
      "Le kapoaka d'Avogadro :",
      "1. Compte le nombre de grains de riz dans une cuillère à soupe (patience !), par exemple environ 600 grains.",
      "2. Calcule combien de cuillères il faudrait pour un kapoaka (~9 000 grains) : 15 cuillères.",
      "3. Imagine maintenant : combien de kapoaka pour une mole de grains ? 6,02 × 10²³ ÷ 9 000 ≈ 6,7 × 10¹⁹ kapoaka… impossible à stocker sur toute l'île !",
    ],
  },
  substitutions: [
    { officiel: "Balance de précision de laboratoire", local: "Balance du marché ou balance artisanale à fléau" },
    { officiel: "Compteur de particules (illustration)", local: "Kapoaka, douzaine d'œufs, sac de grains : les « paquets » de la vie courante" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "QCM : choisis la bonne réponse.",
      items: [
        "1. Une mole contient : a) 6,02 × 10²³ entités  b) 1 000 entités  c) 12 entités",
        "2. Le nombre d'Avogadro se note : a) A  b) N  c) Z",
        "3. La quantité de matière s'exprime en : a) grammes  b) litres  c) moles",
        "4. 2 moles de fer contiennent : a) 6,02 × 10²³  b) 12,04 × 10²³  c) 3,01 × 10²³ atomes",
      ],
      corrige: [
        [{ text: "1. " }, { text: "a", cle: true }, { text: " ; 2. " }, { text: "b", cle: true }, { text: " ; 3. " }, { text: "c", cle: true }, { text: " ; 4. " }, { text: "b", cle: true }, { text: ". (1 point par réponse)" }],
      ],
    },
    {
      points: 3,
      consigne: "Calcule le nombre de molécules contenues dans 0,5 mole de CO2.",
      items: [],
      corrige: [
        [{ text: "0,5 × 6,02 × 10²³ = " }, { text: "3,01 × 10²³ molécules", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "On compte 18,06 × 10²³ molécules d'eau dans un verre. Quelle est la quantité de matière d'eau ?",
      items: [],
      corrige: [
        [{ text: "n = 18,06 × 10²³ ÷ 6,02 × 10²³ = " }, { text: "3 moles", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S7 = {
  numero: 7, total: 34, unite: "I", theme: "Matière",
  titre: "La masse molaire et le volume molaire",
  objectif: "calculer la masse molaire d'un atome ou d'une molécule et d'exprimer une quantité de matière en moles",
  documentation: DOC,
  support: "Balance, tableau des masses molaires atomiques, calculatrice ou calcul posé, bouteille d'eau graduée",
  image: "images/img_seance07.png",
  imageLegende: "Figure 7 — Une mole d'eau pèse 18 g : la masse molaire se calcule à partir des masses molaires atomiques",
  revision: {
    qa: [
      { q: "Qu'est-ce qu'une mole ?", ra: "Un paquet de 6,02 × 10²³ entités identiques." },
      { q: "Que signifie n = 2 mol ?", ra: "La quantité de matière est de 2 moles, soit 2 × 6,02 × 10²³ entités." },
      { q: "Quelle est la composition de la molécule H2O ?", ra: "2 atomes d'hydrogène et 1 atome d'oxygène." },
    ],
    technique: "Questions-réponses orales", support: "Ardoise",
  },
  miseEnSituation: {
    enseignant: [
      "Impossible de compter les molécules une à une… mais la marchande de riz a la solution depuis toujours : elle ne compte pas les grains, elle les pèse ! Si un kapoaka de riz pèse toujours 285 g, peser revient à compter.",
      "Peut-on « compter » les moles avec une balance ?",
      "R.A. : Oui : il suffit de connaître la masse d'une mole, appelée masse molaire.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Balance, kapoaka",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La masse molaire et le volume molaire ». Après cette séance, vous serez capables de calculer une masse molaire et d'exprimer une quantité de matière en moles.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien le tableau des masses molaires atomiques : M(H) = 1 g/mol ; M(C) = 12 g/mol ; M(N) = 14 g/mol ; M(O) = 16 g/mol. Cela signifie qu'une mole d'atomes d'hydrogène pèse 1 gramme, une mole d'atomes de carbone 12 grammes. Je verse 18 mL d'eau dans ce verre : ces 18 grammes d'eau contiennent exactement une mole de molécules H2O !",
    apprenants: "Observent le tableau et la pesée.",
    technique: "Démarche d'observation", support: "Tableau des masses molaires, balance",
  },
  analyse: {
    qa: [
      { q: "Qu'est-ce que la masse molaire d'un atome ?", ra: "La masse d'une mole de cet atome, notée M, en grammes par mole (g/mol)." },
      { q: "Comment calcule-t-on la masse molaire d'une molécule ?", ra: "En additionnant les masses molaires de tous ses atomes." },
      { q: "Calcule M(H2O).", ra: "2 × 1 + 16 = 18 g/mol." },
      { q: "Comment trouver la quantité de matière n d'un échantillon de masse m ?", ra: "n = m ÷ M." },
      { q: "Qu'est-ce que le volume molaire d'un gaz ?", ra: "Le volume d'une mole de gaz : 22,4 L dans les conditions normales (0 °C, 1013 hPa)." },
    ],
    technique: "Questions-réponses, calcul guidé", support: "Tableau noir",
  },
  synthese: {
    enseignant: "Donc, la masse molaire M est la masse d'une mole, en g/mol. Pour une molécule, on additionne les masses molaires atomiques : M(H2O) = 2 × 1 + 16 = 18 g/mol ; M(CO2) = 12 + 2 × 16 = 44 g/mol. La formule clé : n = m ÷ M, où n est en moles, m en grammes, M en g/mol. Elle marche dans les deux sens : m = n × M. Enfin, pour les gaz, retenez que dans les conditions normales de température et de pression (0 °C et 1013 hPa), une mole de n'importe quel gaz occupe 22,4 litres : c'est le volume molaire.",
    apprenants: "Écoutent et recopient les formules.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Calcule la masse molaire de chaque molécule (M(H) = 1 ; M(C) = 12 ; M(N) = 14 ; M(O) = 16 ; M(S) = 32 g/mol) :",
      items: [
        "a) O2   b) NH3   c) SO2",
      ],
      corrige: [
        [{ text: "a) M(O2) = 2 × 16 = " }, { text: "32 g/mol", cle: true }],
        [{ text: "b) M(NH3) = 14 + 3 × 1 = " }, { text: "17 g/mol", cle: true }],
        [{ text: "c) M(SO2) = 32 + 2 × 16 = " }, { text: "64 g/mol", cle: true }],
      ],
    },
    {
      consigne: "Quelle quantité de matière y a-t-il dans 36 g d'eau ?",
      items: [],
      corrige: [
        [{ text: "n = m ÷ M = 36 ÷ 18 = " }, { text: "2 moles", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, calcul posé",
  evaluation: [
    {
      consigne: "Complète : la masse molaire M s'exprime en ……… ; la formule reliant n, m et M est n = ……… ; une mole de gaz occupe ……… dans les conditions normales.",
      items: [],
      corrige: [
        [{ text: "M s'exprime en " }, { text: "g/mol", cle: true }, { text: " ; n = " }, { text: "m ÷ M", cle: true }, { text: " ; une mole de gaz occupe " }, { text: "22,4 L", cle: true }, { text: " (0 °C, 1013 hPa)." }],
      ],
    },
    {
      consigne: "Un sachet contient 88 g de dioxyde de carbone CO2. Calcule la quantité de matière correspondante (M(C) = 12 ; M(O) = 16 g/mol).",
      items: [],
      corrige: [
        [{ text: "M(CO2) = 12 + 32 = " }, { text: "44 g/mol", cle: true }, { text: " ; n = 88 ÷ 44 = " }, { text: "2 moles", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["masse molaire", "g/mol", "n = m ÷ M", "volume molaire", "conditions normales"],
    sections: [
      {
        titre: "1. La masse molaire atomique",
        paras: [
          "La masse molaire M d'un atome est la masse d'une mole de cet atome, en grammes par mole (g/mol) : M(H) = 1 ; M(C) = 12 ; M(N) = 14 ; M(O) = 16 ; M(S) = 32 ; M(Cl) = 35,5 ; M(Fe) = 56 ; M(Ca) = 40 ; M(Cu) = 63,5 g/mol.",
        ],
      },
      {
        titre: "2. La masse molaire moléculaire",
        paras: [
          "Pour une molécule, on additionne les masses molaires de tous les atomes :",
        ],
        puces: [
          "M(H2O) = 2 × 1 + 16 = 18 g/mol ;",
          "M(CO2) = 12 + 2 × 16 = 44 g/mol ;",
          "M(NH3) = 14 + 3 × 1 = 17 g/mol.",
        ],
      },
      {
        titre: "3. La formule n = m ÷ M",
        paras: [
          "La quantité de matière n (en mol) se calcule à partir de la masse m (en g) : n = m ÷ M, et inversement m = n × M.",
        ],
      },
      {
        titre: "4. Le volume molaire des gaz",
        paras: [
          "Dans les conditions normales de température et de pression (0 °C et 1013 hPa), une mole de gaz — quel qu'il soit — occupe 22,4 litres.",
        ],
      },
    ],
    saisTu: [
      "Une mole de dihydrogène ne pèse que 2 g, une mole de dioxygène 32 g… mais toutes deux occupent le même volume de 22,4 L dans les conditions normales ! C'est Avogadro qui l'avait deviné dès 1811 : des volumes égaux de gaz contiennent le même nombre de molécules.",
    ],
    experience: [
      "Pèse une mole d'eau :",
      "1. Pose un verre vide sur la balance de cuisine et note sa masse.",
      "2. Verse de l'eau jusqu'à ajouter exactement 18 g.",
      "3. Contemple ton verre : il contient 6,02 × 10²³ molécules d'eau, une mole exactement ! Recommence avec 36 g : deux moles.",
    ],
  },
  substitutions: [
    { officiel: "Balance de précision", local: "Balance de cuisine ou du marché (précision suffisante pour 18 g d'eau)" },
    { officiel: "Éprouvette graduée", local: "Seringue graduée de pharmacie ou biberon gradué (1 mL d'eau = 1 g)" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Calcule les masses molaires : a) N2 ; b) CH4 ; c) H2SO4 (M(S) = 32) ; d) CaCO3 (M(Ca) = 40).",
      items: [],
      corrige: [
        [{ text: "a) M(N2) = " }, { text: "28 g/mol", cle: true }, { text: " ; b) M(CH4) = 12 + 4 = " }, { text: "16 g/mol", cle: true }, { text: " ; c) M(H2SO4) = 2 + 32 + 64 = " }, { text: "98 g/mol", cle: true }, { text: " ; d) M(CaCO3) = 40 + 12 + 48 = " }, { text: "100 g/mol", cle: true }, { text: ". (1 point chacune)" }],
      ],
    },
    {
      points: 3,
      consigne: "Combien de moles y a-t-il dans 160 g de dioxygène O2 ?",
      items: [],
      corrige: [
        [{ text: "M(O2) = 32 g/mol ; n = 160 ÷ 32 = " }, { text: "5 moles", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "Quel volume occupent 2 moles de dioxyde de carbone gazeux dans les conditions normales ?",
      items: [],
      corrige: [
        [{ text: "V = 2 × 22,4 = " }, { text: "44,8 L", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S8 = {
  numero: 8, total: 34, unite: "I", theme: "Matière",
  titre: "Les ions et leur identification",
  objectif: "associer la dissociation d'un composé à la formation d'ions et d'identifier quelques ions en solution",
  documentation: DOC,
  support: "Sel de cuisine, eau, pile, fils, lampe, gobelets, solutions à tester (eau salée, eau sucrée), documents sur les tests d'ions",
  image: "images/img_seance08.png",
  imageLegende: "Figure 8 — L'eau salée conduit le courant : les ions Na+ et Cl− transportent les charges électriques",
  revision: {
    qa: [
      { q: "Que devient le sel quand on le dissout dans l'eau ?", ra: "Il se disperse en particules invisibles : la solution reste salée." },
      { q: "Un atome est-il électriquement chargé ?", ra: "Non : il est électriquement neutre (autant de charges + que de −)." },
      { q: "Qu'est-ce qui transporte le courant dans un fil de cuivre ?", ra: "Les électrons." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Naina a fait tomber du sel dans l'eau : le sel « disparaît ». Mais quand il plonge dans cette eau deux fils reliés à une pile et à une lampe… la lampe s'allume ! Avec de l'eau sucrée, rien.",
      "Pourquoi l'eau salée conduit-elle le courant, et pas l'eau sucrée ?",
      "R.A. : Le sel se dissocie en particules chargées, les ions, qui transportent le courant.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Montage pile-lampe",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Les ions et leur identification ». Après cette séance, vous serez capables d'expliquer la formation des ions et d'identifier quelques ions en solution.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien l'expérience : je plonge les deux électrodes dans l'eau pure : la lampe reste éteinte. J'ajoute une cuillère de sel et je remue : la lampe s'allume progressivement. Je recommence avec de l'eau sucrée : rien. L'eau salée contient donc des porteurs de charges que l'eau sucrée n'a pas.",
    apprenants: "Observent silencieusement, un élève répète le test.",
    technique: "Expérimentation, démarche d'investigation", support: "Pile, lampe, gobelets, sel, sucre",
  },
  analyse: {
    qa: [
      { q: "Comment un atome devient-il un ion ?", ra: "En perdant ou gagnant des électrons : il n'est plus neutre, il porte une charge." },
      { q: "Qu'est-ce qu'un cation ? un anion ?", ra: "Cation : ion positif (a perdu des électrons), ex. Na+. Anion : ion négatif (a gagné des électrons), ex. Cl−." },
      { q: "Que se passe-t-il quand le sel NaCl se dissout ?", ra: "Il se dissocie en ions Na+ et Cl− dispersés parmi les molécules d'eau." },
      { q: "Pourquoi la solution conduit-elle le courant ?", ra: "Les ions, chargés et mobiles, transportent les charges électriques." },
      { q: "Comment identifier un ion dans une solution ?", ra: "Par un test caractéristique : un réactif provoque une couleur ou un précipité typique." },
    ],
    technique: "Questions-réponses, expérimentation", support: "Montage, tableau noir",
  },
  synthese: {
    enseignant: "Donc, un ion est un atome (ou groupe d'atomes) qui a perdu ou gagné des électrons : chargé positivement, c'est un cation (Na+, Ca2+, Fe2+, Fe3+, Cu2+, H+, NH4+) ; chargé négativement, c'est un anion (Cl−, OH−, SO42−, CO32−). Quand un composé ionique se dissout, il se dissocie en ions : c'est pourquoi la solution conduit le courant. On identifie les ions par des tests : la soude donne un précipité vert avec Fe2+, rouille avec Fe3+, bleu avec Cu2+ ; le nitrate d'argent donne un précipité blanc avec Cl− ; l'acide fait mousser les carbonates CO32−.",
    apprenants: "Écoutent et recopient le tableau des ions.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Classe ces ions en cations et anions : Na+, Cl−, Ca2+, SO42−, Fe3+, OH−.",
      items: [],
      corrige: [
        [{ text: "Cations : " }, { text: "Na+, Ca2+, Fe3+", cle: true }, { text: " ; anions : " }, { text: "Cl−, SO42−, OH−", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Un atome de calcium perd 2 électrons. Écris la formule de l'ion formé et son type.",
      items: [],
      corrige: [
        [{ text: "Il devient " }, { text: "Ca2+", cle: true }, { text: ", un " }, { text: "cation", cle: true }, { text: " (2 charges positives car 2 électrons perdus)." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : anion – cation – dissocie – électrons – ions.",
      items: [
        "a) Un atome qui perd des ……… devient un ……… ; un atome qui en gagne devient un ……… .",
        "b) Dans l'eau, le sel se ……… en ……… : la solution conduit le courant.",
      ],
      corrige: [
        [{ text: "a) Un atome qui perd des " }, { text: "électrons", cle: true }, { text: " devient un " }, { text: "cation", cle: true }, { text: " ; un atome qui en gagne devient un " }, { text: "anion", cle: true }, { text: "." }],
        [{ text: "b) Le sel se " }, { text: "dissocie", cle: true }, { text: " en " }, { text: "ions", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "On verse de la soude dans une solution inconnue : un précipité bleu apparaît. Quel ion la solution contient-elle ?",
      items: [],
      corrige: [
        [{ text: "Le précipité bleu révèle " }, { text: "l'ion cuivre II, Cu2+", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["ion", "cation", "anion", "dissociation", "solution ionique", "test d'identification", "précipité"],
    sections: [
      {
        titre: "1. De l'atome à l'ion",
        paras: [
          "Un atome est neutre. S'il perd des électrons, il devient un ion positif ou cation (Na+, Ca2+, Cu2+…). S'il gagne des électrons, il devient un ion négatif ou anion (Cl−, OH−…). Le nombre de charges est écrit en exposant.",
        ],
      },
      {
        titre: "2. La dissociation dans l'eau",
        paras: [
          "Quand un composé ionique comme le sel NaCl se dissout, il se dissocie en ions Na+ et Cl− entourés de molécules d'eau. Les ions, chargés et mobiles, permettent à la solution de conduire le courant électrique : c'est le signe d'une solution ionique.",
        ],
      },
      {
        titre: "3. Les ions à connaître",
        paras: [],
        puces: [
          "Cations : H+, Na+, NH4+, Ca2+, Zn2+, Fe2+, Fe3+, Cu2+ ;",
          "Anions : Cl−, OH−, SO42−, CO32−.",
        ],
      },
      {
        titre: "4. Quelques tests d'identification",
        paras: [],
        puces: [
          "soude → précipité vert : Fe2+ ; couleur rouille : Fe3+ ; bleu : Cu2+ ; blanc : Zn2+ ou Ca2+ ;",
          "nitrate d'argent → précipité blanc qui noircit à la lumière : Cl− ;",
          "acide → effervescence (gaz CO2) : carbonate CO32−.",
        ],
      },
      {
        titre: "5. Les ions et la vie",
        paras: [
          "Les ions sont partout : Ca2+ solidifie os et dents, Na+ et K+ font battre le cœur et circuler l'influx nerveux, Fe2+ transporte l'oxygène dans le sang.",
        ],
      },
    ],
    saisTu: [
      "L'eau de mer du canal du Mozambique contient environ 35 g de sels dissous par litre, principalement des ions Na+ et Cl− : c'est pour cela qu'elle conduit très bien le courant… et qu'il ne faut jamais se baigner pendant un orage !",
    ],
    experience: [
      "Le testeur de solutions :",
      "1. Monte un circuit : pile plate, lampe de poche, deux clous propres comme électrodes, fils.",
      "2. Plonge les clous (sans qu'ils se touchent) dans l'eau pure, l'eau salée, l'eau sucrée, le jus de citron.",
      "3. Note pour chaque liquide si la lampe s'allume : lesquels contiennent des ions ?",
    ],
  },
  substitutions: [
    { officiel: "Électrodes de laboratoire et multimètre", local: "Deux clous neufs, pile plate 4,5 V, lampe de poche" },
    { officiel: "Solutions étalons d'ions", local: "Eau salée, eau de chaux (chaux du maçon), jus de citron, cendre dissoute" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Donne le nom et le type (cation/anion) de chaque ion : a) Cu2+ ; b) Cl− ; c) NH4+ ; d) SO42−.",
      items: [],
      corrige: [
        [{ text: "a) ion " }, { text: "cuivre II, cation", cle: true }, { text: " ; b) ion " }, { text: "chlorure, anion", cle: true }, { text: " ; c) ion " }, { text: "ammonium, cation", cle: true }, { text: " ; d) ion " }, { text: "sulfate, anion", cle: true }, { text: ". (1 point chacun)" }],
      ],
    },
    {
      points: 3,
      consigne: "Un atome de fer perd 3 électrons. Écris la formule de l'ion obtenu, son nom et le test qui le révèle.",
      items: [],
      corrige: [
        [{ text: "Ion " }, { text: "Fe3+ (fer III)", cle: true }, { text: " ; la soude y forme un précipité " }, { text: "couleur rouille", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "Explique pourquoi l'eau sucrée ne conduit pas le courant alors que l'eau salée le conduit.",
      items: [],
      corrige: [
        [{ text: "Le sucre se dissout " }, { text: "sans se dissocier en ions", cle: true }, { text: " (molécules neutres) ; le sel libère des " }, { text: "ions Na+ et Cl− chargés et mobiles", cle: true }, { text: " qui transportent le courant." }],
      ],
    },
  ],
};

const S9 = {
  numero: 9, total: 34, unite: "I", theme: "Matière",
  titre: "Réactifs et produits d'une réaction chimique",
  objectif: "identifier les réactifs et les produits d'une transformation chimique et de la représenter par une écriture",
  documentation: DOC,
  support: "Morceau de charbon, eau de chaux, bécher, allumettes, pince, fer et soufre en poudre (démonstration), vinaigre, craie",
  image: "images/img_seance09.png",
  imageLegende: "Figure 9 — Fer + soufre → sulfure de fer : les réactifs disparaissent, un produit nouveau apparaît",
  revision: {
    qa: [
      { q: "Rappelle la différence entre transformation physique et chimique.", ra: "Physique : la substance reste la même (fusion, dissolution). Chimique : de nouvelles substances apparaissent." },
      { q: "Cite une transformation chimique vue en T7.", ra: "Combustion de la bougie, rouille du fer, vinaigre sur la soude." },
      { q: "Quel gaz trouble l'eau de chaux ?", ra: "Le dioxyde de carbone CO2." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Pour préparer le repas, Bodo allume le charbon de bois : il rougeoie, chauffe, et à la fin il ne reste que des cendres grises. Le charbon a « disparu »… mais quelque chose d'invisible s'est échappé dans l'air.",
      "Que devient le charbon qui brûle ? Comment décrire précisément cette transformation ?",
      "R.A. : Le carbone réagit avec le dioxygène de l'air pour former du dioxyde de carbone : carbone + dioxygène → dioxyde de carbone.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Réactifs et produits d'une réaction chimique ». Après cette séance, vous serez capables d'identifier les réactifs et les produits d'une réaction et de l'écrire avec une flèche.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien, à bonne distance et fenêtres ouvertes. Expérience 1 : je brûle un petit morceau de charbon puis je le plonge dans un bocal ; j'y verse de l'eau de chaux : elle se trouble ! Expérience 2 : je verse du vinaigre sur un morceau de craie : ça mousse, et le gaz recueilli trouble aussi l'eau de chaux. Expérience 3 (démonstration racontée) : chauffés ensemble, le fer gris et le soufre jaune donnent un solide gris terne qui n'est plus attiré par l'aimant.",
    apprenants: "Observent en respectant les consignes de sécurité, notent les observations.",
    technique: "Expérimentation, démarche d'investigation", support: "Charbon, eau de chaux, vinaigre, craie",
  },
  analyse: {
    qa: [
      { q: "Dans la combustion du charbon, quelles substances sont présentes AVANT ?", ra: "Le carbone (charbon) et le dioxygène de l'air : ce sont les réactifs." },
      { q: "Quelle substance nouvelle est formée ?", ra: "Le dioxyde de carbone (il trouble l'eau de chaux) : c'est le produit." },
      { q: "Comment écrit-on cette réaction ?", ra: "carbone + dioxygène → dioxyde de carbone." },
      { q: "Dans fer + soufre, comment prouver qu'un produit nouveau est formé ?", ra: "Le solide obtenu n'est plus attiré par l'aimant et n'a plus la couleur du soufre : c'est du sulfure de fer." },
      { q: "Une réaction se produit-elle n'importe quand ?", ra: "Non : il faut des conditions précises (chauffage, contact, proportions…)." },
    ],
    technique: "Questions-réponses, expérimentation", support: "Résultats d'expériences, tableau",
  },
  synthese: {
    enseignant: "Donc, dans une réaction chimique, les substances de départ sont les réactifs : elles disparaissent. Les substances nouvelles formées sont les produits. On représente la réaction par une écriture avec une flèche : réactifs → produits. Exemples : carbone + dioxygène → dioxyde de carbone ; fer + soufre → sulfure de fer ; soufre + dioxygène → dioxyde de soufre ; acide chlorhydrique + fer → dihydrogène + chlorure de fer ; acide + carbonate de calcium → dioxyde de carbone + … On identifie les produits par des tests : l'eau de chaux troublée révèle le CO2, l'aboiement d'une allumette révèle le dihydrogène. Et toujours : sécurité d'abord avec les acides et les gaz !",
    apprenants: "Écoutent et recopient les écritures de réaction.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Pour la combustion du soufre (le soufre brûle dans le dioxygène en donnant du dioxyde de soufre) :",
      items: [
        "a) Cite les réactifs.",
        "b) Cite le produit.",
        "c) Écris la réaction avec une flèche.",
      ],
      corrige: [
        [{ text: "a) Réactifs : " }, { text: "soufre et dioxygène", cle: true }, { text: "." }],
        [{ text: "b) Produit : " }, { text: "dioxyde de soufre", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "soufre + dioxygène → dioxyde de soufre", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Quel test permet d'identifier le dioxyde de carbone ? le dihydrogène ?",
      items: [],
      corrige: [
        [{ text: "CO2 : " }, { text: "il trouble l'eau de chaux", cle: true }, { text: " ; H2 : " }, { text: "il produit une petite détonation (aboiement) à l'approche d'une flamme", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète : les substances qui disparaissent sont les ……… ; les substances nouvelles sont les ……… ; on les sépare par une ……… .",
      items: [],
      corrige: [
        [{ text: "Les substances qui disparaissent sont les " }, { text: "réactifs", cle: true }, { text: " ; les nouvelles sont les " }, { text: "produits", cle: true }, { text: " ; on écrit une " }, { text: "flèche (→)", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "On verse de l'acide chlorhydrique sur de la poudre de fer : ça mousse, et le gaz « aboie » à l'approche d'une flamme. Identifie les réactifs, le gaz produit, et écris la réaction.",
      items: [],
      corrige: [
        [{ text: "Réactifs : " }, { text: "acide chlorhydrique et fer", cle: true }, { text: " ; le gaz est le " }, { text: "dihydrogène", cle: true }, { text: " ; écriture : " }, { text: "acide chlorhydrique + fer → dihydrogène + chlorure de fer", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["réactif", "produit", "réaction chimique", "test d'identification", "conditions", "sécurité"],
    sections: [
      {
        titre: "1. Réactifs et produits",
        paras: [
          "Dans une réaction chimique, les réactifs sont les substances présentes avant la transformation : elles disparaissent. Les produits sont les substances nouvelles formées.",
        ],
      },
      {
        titre: "2. L'écriture de la réaction",
        paras: [
          "On représente la réaction par : réactifs → produits. La flèche signifie « donnent ».",
        ],
        puces: [
          "carbone + dioxygène → dioxyde de carbone (combustion du charbon) ;",
          "soufre + dioxygène → dioxyde de soufre ;",
          "fer + soufre → sulfure de fer ;",
          "acide chlorhydrique + fer → dihydrogène + chlorure de fer ;",
          "acide chlorhydrique + carbonate de calcium → dioxyde de carbone + eau + chlorure de calcium.",
        ],
      },
      {
        titre: "3. Identifier les produits",
        paras: [],
        puces: [
          "dioxyde de carbone : trouble l'eau de chaux ;",
          "dihydrogène : détonation (« aboiement ») à l'approche d'une flamme ;",
          "sulfure de fer : gris terne, non attiré par l'aimant.",
        ],
      },
      {
        titre: "4. Conditions et sécurité",
        paras: [
          "Une réaction ne se produit que dans des conditions précises : chauffage, contact entre réactifs, proportions convenables. Avec les acides et les gaz : lunettes ou distance, aération, jamais de flacon vers le visage.",
        ],
      },
    ],
    saisTu: [
      "La réaction fer + soufre est si énergique qu'une fois amorcée par un point chauffé au rouge, elle se propage toute seule dans le mélange, comme une braise qui avance ! Le produit, le sulfure de fer, existe aussi dans la nature : c'est la pyrite, surnommée « l'or des fous » à cause de ses reflets dorés.",
    ],
    experience: [
      "Le gaz qui gonfle le ballon :",
      "1. Verse trois cuillères de vinaigre dans une bouteille.",
      "2. Mets une cuillère de bicarbonate de soude dans un ballon de baudruche dégonflé.",
      "3. Fixe le ballon sur le goulot puis redresse-le : le bicarbonate tombe, ça mousse, le ballon se gonfle de CO2 !",
      "4. Réactifs : vinaigre + bicarbonate ; produits : dioxyde de carbone (+ eau + un sel).",
    ],
  },
  substitutions: [
    { officiel: "Bec Bunsen et tubes à essai", local: "Réchaud à charbon en plein air et petits pots en verre récupérés (démonstration par l'enseignant uniquement)" },
    { officiel: "Acide chlorhydrique de laboratoire", local: "Vinaigre blanc (acide plus doux) sur craie ou coquilles d'œuf" },
    { officiel: "Eau de chaux préparée", local: "Chaux vive du maçon + eau, décantée puis filtrée à travers un tissu" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Dans chaque réaction, souligne les réactifs et entoure les produits : a) fer + soufre → sulfure de fer ; b) carbone + dioxygène → dioxyde de carbone.",
      items: [],
      corrige: [
        [{ text: "a) Réactifs : " }, { text: "fer, soufre", cle: true }, { text: " ; produit : " }, { text: "sulfure de fer", cle: true }, { text: ". b) Réactifs : " }, { text: "carbone, dioxygène", cle: true }, { text: " ; produit : " }, { text: "dioxyde de carbone", cle: true }, { text: ". (2 points par réaction)" }],
      ],
    },
    {
      points: 3,
      consigne: "Vrai ou Faux : « Dans une réaction chimique, les réactifs se retrouvent intacts à la fin. » Corrige si besoin.",
      items: [],
      corrige: [
        [{ text: "" }, { text: "Faux", cle: true }, { text: " : les réactifs " }, { text: "disparaissent (ils sont consommés)", cle: true }, { text: " et laissent place aux produits." }],
      ],
    },
    {
      points: 3,
      consigne: "Cite deux consignes de sécurité indispensables quand on manipule un acide.",
      items: [],
      corrige: [
        [{ text: "Exemples : " }, { text: "protéger les yeux / travailler dans un lieu aéré", cle: true }, { text: " ; " }, { text: "ne jamais diriger le flacon ou le tube vers un visage", cle: true }, { text: " ; verser l'acide dans l'eau et non l'inverse. (1,5 point par consigne)" }],
      ],
    },
  ],
};

module.exports = { seances: [S1, S2, S3, S4, S5, S6, S7, S8, S9] };
