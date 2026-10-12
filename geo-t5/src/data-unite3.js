// data-unite3.js — UNITÉ 3 : LES MILIEUX NATURELS À MADAGASCAR (Séances 27 à 33)
// Contenu rédactionnel conforme au Programme d'études officiel T5 — Géographie
const TOTAL = 76;

const S27 = {
  numero: 27, total: TOTAL,
  titre: "Les formes du relief malgache",
  theme: "Les milieux naturels à Madagascar",
  objectif: "Être capable de nommer et de reconnaître les formes du relief malgache.",
  image: { id: "geo5_relief_formes", legende: "Les six formes du relief : massif, montagne, colline, plateau, plaine, vallée." },
  scene: { file: "scene_s27_relief_formes.jpg", mode: "document", legende: "Document : les collines des Hautes Terres couvertes de rizières en terrasses." },
  revisionOuverture: [
    ["Où se trouve Madagascar par rapport à l'Afrique ?", "Au sud-est de l'Afrique, séparée par le canal de Mozambique."],
    ["Dans quelle case du quadrillage place-t-on le cap d'Ambre ?", "Vers la case C6, tout en haut."],
  ],
  miseEnSituation: {
    texte: "Faniry voyage pour la première fois en taxi-brousse, d'Antananarivo à Fianarantsoa. Par la fenêtre, il regarde défiler le paysage : des collines rondes et vertes, des montagnes bleues au loin, des rizières à flanc de coteau, une rivière au fond d'une vallée… « Comme le relief de notre île est varié ! », pense Faniry.",
    question: "Quelles formes de relief Faniry peut-il observer pendant son voyage ?",
    ra: "Des collines, des montagnes, des plateaux, des plaines et des vallées.",
    support: "Schéma des formes du relief (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les formes du relief malgache ». Après cette séance, vous serez capables de nommer et de reconnaître les formes du relief de Madagascar.",
  observation: "Observez bien le schéma : il montre les six formes du relief, et le document présente les collines des Hautes Terres.",
  supportObservation: "Schéma des formes du relief (page Leçon)",
  analyse: [
    ["Qu'est-ce qu'une montagne ?", "Une montagne est un sommet élevé et pointu, plus haut qu'une colline."],
    ["Qu'est-ce qu'un massif ?", "Un massif est un groupe de montagnes réunies."],
    ["Qu'est-ce qu'une colline ?", "Une colline est une petite hauteur arrondie, plus basse qu'une montagne."],
    ["Qu'est-ce qu'un plateau ?", "Un plateau est une étendue plate, mais élevée par rapport aux plaines."],
    ["Qu'est-ce qu'une plaine ?", "Une plaine est une étendue plate et basse, souvent au bord d'un fleuve."],
    ["Qu'est-ce qu'une vallée ?", "Une vallée est une dépression allongée, creusée par une rivière entre deux reliefs."],
  ],
  synthese: "Donc, le relief malgache offre six formes : les massifs et les montagnes, les collines, les plateaux, les plaines et les vallées. Sur les Hautes Terres dominent les collines et les plateaux ; les plaines s'étendent près des côtes et des grands fleuves.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'un massif ?",
        "2. Quelle est la différence entre une colline et une montagne ?",
        "3. Qu'est-ce qu'une plaine ?",
        "4. Qu'est-ce qui creuse une vallée ?",
      ],
      corrige: [
        "1. Un **massif** est un groupe de montagnes réunies.",
        "2. Une **colline** est basse et arrondie ; une **montagne** est haute et pointue.",
        "3. Une **plaine** est une étendue plate et basse.",
        "4. C'est une **rivière** qui creuse une vallée en coulant.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Un plateau est une étendue plate et élevée.",
        "2. Une vallée est creusée par le vent.",
        "3. Une colline est plus haute qu'une montagne.",
        "4. Une plaine est plate et basse.",
      ],
      corrige: [
        "1. **Vrai** : un plateau est plat mais élevé.",
        "2. **Faux** : c'est la rivière qui creuse la vallée.",
        "3. **Faux** : la colline est plus basse.",
        "4. **Vrai** : la plaine est plate et basse.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : massif — plateau — plaine — vallée.",
      items: [
        "Un groupe de montagnes réunies s'appelle un ……… .",
        "Une étendue plate et élevée s'appelle un ……… .",
        "Une étendue plate et basse s'appelle une ……… .",
        "La dépression creusée par une rivière s'appelle une ……… .",
      ],
      corrige: [
        "un **massif** / un **plateau** / une **plaine** / une **vallée**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Une petite hauteur arrondie est : A. une montagne — B. une colline — C. un plateau",
        "2. Un sommet élevé et pointu est : A. une montagne — B. une plaine — C. une vallée",
        "3. La vallée est creusée par : A. le vent — B. une rivière — C. la mer",
        "4. Les plaines se trouvent souvent : A. au bord des fleuves — B. sur les sommets — C. dans le ciel",
      ],
      corrige: [
        "1. Réponse **B** : une colline.",
        "2. Réponse **A** : une montagne.",
        "3. Réponse **B** : par une rivière.",
        "4. Réponse **A** : au bord des fleuves et des côtes.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Montagnes, massifs et collines",
        paras: [
          "Une montagne est un sommet élevé et pointu ; plusieurs montagnes réunies forment un massif.",
          "Une colline est une petite hauteur arrondie : c'est la forme la plus courante sur les Hautes Terres de Madagascar.",
        ],
        exemples: [
          "Le massif de l'Ankaratra, près d'Antananarivo, domine les collines environnantes.",
          "Autour d'Antsirabe, les collines se suivent comme des vagues vertes.",
        ],
      },
      {
        titre: "2. Plateaux et plaines",
        paras: [
          "Un plateau est une étendue plate mais élevée, souvent couverte de prairies.",
          "Une plaine est une étendue plate et basse. Les plaines humides, au bord des fleuves, sont les terres préférées des riziculteurs.",
        ],
        exemples: [
          "Le plateau de l'Ihorombe, au sud, est un immense pâturage.",
          "La plaine de Marovoay, à l'ouest, est surnommée « le grenier à riz » de sa région.",
        ],
      },
      {
        titre: "3. Les vallées",
        paras: [
          "Une vallée est une dépression allongée que creuse une rivière entre deux reliefs.",
          "Les vallées des Hautes Terres sont étroites et verdoyantes : on y cultive le riz sur les bordures du fleuve.",
        ],
        exemples: [
          "La vallée de la Betsiboka descend vers Mahajanga.",
          "Faniry a longé la vallée de la Mania pendant son voyage.",
        ],
      },
    ],
  },
  motsCles: ["relief", "montagne", "massif", "colline", "plateau", "plaine", "vallée"],
  questionsRevision: [
    ["Cite quatre formes du relief.", "La montagne, la colline, le plateau et la plaine (aussi le massif et la vallée)."],
    ["Quelle est la différence entre un plateau et une plaine ?", "Le plateau est plat mais élevé ; la plaine est plate et basse."],
  ],
};

const S28 = {
  numero: 28, total: TOTAL,
  titre: "Les trois grands massifs",
  theme: "Les milieux naturels à Madagascar",
  objectif: "Être capable de citer et de situer les trois grands massifs de Madagascar avec leurs points culminants.",
  image: { id: "geo5_massifs", legende: "Tsaratanana au nord, Ankaratra au centre, Andringitra au sud." },
  scene: { file: "scene_s28_massifs.jpg", mode: "document", legende: "Document : un grand massif malgache au petit matin, sommet au-dessus des nuages." },
  revisionOuverture: [
    ["Cite quatre formes du relief.", "La montagne, la colline, le plateau et la plaine."],
    ["Qu'est-ce qu'un massif ?", "Un groupe de montagnes réunies."],
  ],
  miseEnSituation: {
    texte: "En visite chez son oncle à Ambatolampy, Rado aperçoit une immense montagne bleue : « C'est l'Ankaratra, dit l'oncle. Son sommet, le Tsiafajavona, dépasse les nuages. » Rado est émerveillé : « Et existe-t-il plus haut que l'Ankaratra ? » L'oncle sourit : « Oui, au nord, le Tsaratanana : son sommet est le toit de Madagascar ! »",
    question: "Quels sont les grands massifs de Madagascar et leurs sommets ?",
    ra: "Le Tsaratanana (Maromokotra, 2 876 m) au nord, l'Ankaratra (Tsiafajavona, 2 642 m) au centre et l'Andringitra (Pic Boby, 2 658 m) au sud.",
    support: "Schéma des trois massifs (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les trois grands massifs ». Après cette séance, vous serez capables de citer les trois grands massifs de Madagascar et leurs points culminants.",
  observation: "Observez bien le schéma : trois points rouges marquent les massifs sur la carte, et le document montre un massif au-dessus des nuages.",
  supportObservation: "Carte des massifs (page Leçon)",
  analyse: [
    ["Où se trouve le massif du Tsaratanana ?", "Le Tsaratanana se trouve au nord de Madagascar."],
    ["Comment s'appelle le sommet du Tsaratanana et quelle est sa hauteur ?", "C'est le Maromokotra : 2 876 mètres, le point culminant de Madagascar."],
    ["Où se trouve le massif de l'Ankaratra ?", "L'Ankaratra se trouve au centre, près d'Antananarivo et d'Ambatolampy."],
    ["Quel est le sommet de l'Ankaratra ?", "C'est le Tsiafajavona : 2 642 mètres."],
    ["Où se trouve le massif de l'Andringitra ?", "L'Andringitra se trouve au sud de Fianarantsoa."],
    ["Comment s'appelle le sommet de l'Andringitra ?", "C'est le Pic Boby : 2 658 mètres."],
  ],
  synthese: "Donc, Madagascar compte trois grands massifs : le Tsaratanana au nord avec le Maromokotra (2 876 m, le toit de Madagascar), l'Ankaratra au centre avec le Tsiafajavona (2 642 m) et l'Andringitra au sud avec le Pic Boby (2 658 m).",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Quel est le point culminant de Madagascar et sa hauteur ?",
        "2. Dans quelle région se trouve l'Ankaratra ?",
        "3. Comment s'appelle le sommet de l'Andringitra ?",
        "4. Où se trouve le massif du Tsaratanana ?",
      ],
      corrige: [
        "1. C'est le **Maromokotra**, dans le Tsaratanana : **2 876 mètres**.",
        "2. L'**Ankaratra** se trouve au centre, près d'Antananarivo.",
        "3. C'est le **Pic Boby** : 2 658 mètres.",
        "4. Le **Tsaratanana** se trouve au nord de Madagascar.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le Maromokotra culmine à 2 876 mètres.",
        "2. L'Andringitra se trouve au nord de Madagascar.",
        "3. Le Tsiafajavona est le sommet de l'Ankaratra.",
        "4. Le Pic Boby est plus haut que le Maromokotra.",
      ],
      corrige: [
        "1. **Vrai** : c'est le point culminant de l'île.",
        "2. **Faux** : l'Andringitra se trouve au sud de Fianarantsoa.",
        "3. **Vrai** : il culmine à 2 642 mètres.",
        "4. **Faux** : le Pic Boby (2 658 m) est plus bas que le Maromokotra (2 876 m).",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : Maromokotra — Ankaratra — Boby — 2 876.",
      items: [
        "Le sommet du Tsaratanana est le ……… , qui culmine à ……… mètres.",
        "Le massif de l'……… se trouve près d'Antananarivo.",
        "Le Pic ……… est le sommet de l'Andringitra.",
      ],
      corrige: [
        "le **Maromokotra** / **2 876** mètres / l'**Ankaratra** / le Pic **Boby**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le toit de Madagascar est : A. le Tsiafajavona — B. le Maromokotra — C. le Pic Boby",
        "2. Le massif du nord est : A. le Tsaratanana — B. l'Ankaratra — C. l'Andringitra",
        "3. L'Andringitra se trouve au sud de : A. Mahajanga — B. Toliara — C. Fianarantsoa",
        "4. Le Tsiafajavona culmine à : A. 2 642 m — B. 2 876 m — C. 2 658 m",
      ],
      corrige: [
        "1. Réponse **B** : le Maromokotra, 2 876 m.",
        "2. Réponse **A** : le Tsaratanana.",
        "3. Réponse **C** : au sud de Fianarantsoa.",
        "4. Réponse **A** : 2 642 m.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Le Tsaratanana, le toit de Madagascar",
        paras: [
          "Au nord de l'île se dresse le massif du Tsaratanana.",
          "Son sommet, le Maromokotra, culmine à 2 876 mètres : c'est le point le plus élevé de Madagascar, le « toit » du pays.",
        ],
        exemples: [
          "Sur les hauts sommets du Tsaratanana, les nuits sont très fraîches, même en saison chaude.",
        ],
      },
      {
        titre: "2. L'Ankaratra, le massif de la capitale",
        paras: [
          "Au centre de l'île, près d'Antananarivo et d'Ambatolampy, se trouve le massif de l'Ankaratra.",
          "Son sommet, le Tsiafajavona, culmine à 2 642 mètres ; par temps clair, on l'aperçoit de très loin.",
        ],
        exemples: [
          "Rado a vu l'Ankaratra depuis Ambatolampy, chez son oncle.",
        ],
      },
      {
        titre: "3. L'Andringitra, le massif du sud",
        paras: [
          "Au sud de Fianarantsoa s'élève le massif de l'Andringitra, célèbre pour ses falaises de granit.",
          "Son sommet, le Pic Boby, culmine à 2 658 mètres ; c'est un parc national très visité.",
        ],
        exemples: [
          "Les randonneurs du monde entier viennent gravir le Pic Boby.",
        ],
      },
    ],
  },
  motsCles: ["massif", "Tsaratanana", "Maromokotra", "Ankaratra", "Tsiafajavona", "Andringitra", "Pic Boby"],
  questionsRevision: [
    ["Quel est le point culminant de Madagascar ?", "Le Maromokotra, dans le massif du Tsaratanana : 2 876 mètres."],
    ["Cite les trois grands massifs de Madagascar.", "Le Tsaratanana au nord, l'Ankaratra au centre et l'Andringitra au sud."],
  ],
};

const S29 = {
  numero: 29, total: TOTAL,
  titre: "Les grandes plaines et les plateaux",
  theme: "Les milieux naturels à Madagascar",
  objectif: "Être capable de citer et de situer les grandes plaines et les grands plateaux de Madagascar.",
  image: { id: "geo5_plaines_plateaux", legende: "Les grandes plaines (vert) et les plateaux (ocre) de Madagascar." },
  scene: { file: "scene_s29_plaines_plateaux.jpg", mode: "document", legende: "Document : la plaine du lac Alaotra et ses immenses rizières." },
  revisionOuverture: [
    ["Quel est le point culminant de Madagascar ?", "Le Maromokotra, dans le Tsaratanana : 2 876 mètres."],
    ["Quelle est la différence entre une plaine et un plateau ?", "La plaine est plate et basse ; le plateau est plat et élevé."],
  ],
  miseEnSituation: {
    texte: "Soa part avec ses parents rendre visite à sa grand-mère, près du lac Alaotra. Après les collines d'Antananarivo, la route descend vers une immense plaine : partout, des rizières vertes à perte de vue, des canaux qui brillent au soleil. « Ici, la terre est si plate qu'on peut voir très loin ! », s'étonne Soa. Son père lui explique que c'est la grande plaine de l'Alaotra, le pays du riz.",
    question: "Quelles sont les grandes plaines de Madagascar et à quoi servent-elles ?",
    ra: "Les plaines de Marovoay, de l'Alaotra et de la Betsimitatatra ; elles servent surtout à la culture du riz.",
    support: "Carte des plaines et plateaux (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les grandes plaines et les plateaux ». Après cette séance, vous serez capables de citer et de situer les grandes plaines et les grands plateaux de Madagascar.",
  observation: "Observez bien la carte : les zones vertes sont les grandes plaines, les zones ocre sont les plateaux.",
  supportObservation: "Carte des plaines et plateaux (page Leçon)",
  analyse: [
    ["Cite les trois grandes plaines de Madagascar.", "La plaine de Marovoay, la plaine de l'Alaotra et la plaine de la Betsimitatatra."],
    ["Où se trouve la plaine de l'Alaotra ?", "Elle se trouve à l'est des Hautes Terres, autour du lac Alaotra."],
    ["Quelle plaine entoure Antananarivo ?", "C'est la plaine de la Betsimitatatra."],
    ["Où se trouve la plaine de Marovoay ?", "Elle se trouve au nord-ouest, près de Mahajanga."],
    ["Cite deux grands plateaux de Madagascar.", "Le plateau du Tampoketsa et le plateau de l'Ihorombe."],
    ["À quoi servent les plaines humides ?", "Elles servent à la culture du riz : ce sont les greniers à riz du pays."],
  ],
  synthese: "Donc, Madagascar compte de grandes plaines — Marovoay près de Mahajanga, l'Alaotra autour de son lac, la Betsimitatatra autour d'Antananarivo — et de grands plateaux comme le Tampoketsa et l'Ihorombe. Les plaines nourrissent le pays avec leur riz.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Cite les trois grandes plaines de Madagascar.",
        "2. Où se trouve la plaine de l'Alaotra ?",
        "3. Cite deux grands plateaux.",
        "4. À quoi servent les plaines humides ?",
      ],
      corrige: [
        "1. Les plaines de **Marovoay**, de l'**Alaotra** et de la **Betsimitatatra**.",
        "2. Elle se trouve à l'est des Hautes Terres, autour du lac Alaotra.",
        "3. Le **Tampoketsa** et l'**Ihorombe**.",
        "4. À la **culture du riz** : ce sont les greniers à riz.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. La plaine de la Betsimitatatra entoure Antananarivo.",
        "2. La plaine de Marovoay se trouve près de Toliara.",
        "3. L'Ihorombe est un plateau.",
        "4. Les plaines humides servent à la riziculture.",
      ],
      corrige: [
        "1. **Vrai** : c'est la plaine de la capitale.",
        "2. **Faux** : Marovoay se trouve près de Mahajanga, au nord-ouest.",
        "3. **Vrai** : c'est un grand plateau du sud.",
        "4. **Vrai** : on y cultive le riz.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : Alaotra — Marovoay — Betsimitatatra — Ihorombe.",
      items: [
        "La plaine de ……… se trouve autour du lac du même nom.",
        "La plaine de ……… se trouve près de Mahajanga.",
        "La plaine de la ……… entoure Antananarivo.",
        "Le plateau de l'……… est un grand pâturage du sud.",
      ],
      corrige: [
        "l'**Alaotra** / **Marovoay** / la **Betsimitatatra** / l'**Ihorombe**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. La plaine de l'Alaotra est surnommée : A. le pays du riz — B. le pays des baobabs — C. le pays des mines",
        "2. Le Tampoketsa est : A. une plaine — B. un plateau — C. une montagne",
        "3. La plaine de la Betsimitatatra se trouve autour de : A. Toliara — B. Antananarivo — C. Diego",
        "4. Sur les plateaux de l'Ihorombe, on élève surtout : A. des zébus — B. des poissons — C. des poules",
      ],
      corrige: [
        "1. Réponse **A** : le pays du riz.",
        "2. Réponse **B** : un plateau du nord-ouest des Hautes Terres.",
        "3. Réponse **B** : autour d'Antananarivo.",
        "4. Réponse **A** : des zébus, sur les prairies.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Les grandes plaines rizicoles",
        paras: [
          "Madagascar possède trois grandes plaines : celle de Marovoay, près de Mahajanga ; celle de l'Alaotra, autour de son lac ; et celle de la Betsimitatatra, autour d'Antananarivo.",
          "Ces plaines basses et humides sont couvertes de rizières : elles nourrissent le pays.",
        ],
        exemples: [
          "La plaine de l'Alaotra produit une grande partie du riz malgache.",
          "Soa a vu ces rizières à perte de vue pendant son voyage.",
        ],
      },
      {
        titre: "2. Les grands plateaux",
        paras: [
          "Les plateaux sont des étendues plates mais élevées, couvertes de prairies.",
          "Les plus connus sont le Tampoketsa, au nord-ouest des Hautes Terres, et l'Ihorombe, au sud de Fianarantsoa.",
        ],
        exemples: [
          "Sur l'Ihorombe, les troupeaux de zébus paissent à perte de vue.",
        ],
      },
      {
        titre: "3. Plaines et plateaux, des vies différentes",
        paras: [
          "Dans les plaines, les paysans cultivent le riz dans l'eau des canaux.",
          "Sur les plateaux, les éleveurs mènent paître leurs zébus sur les hautes herbes.",
        ],
        exemples: [
          "À Marovoay, on repique le riz ; sur le Tampoketsa, on garde les bœufs.",
        ],
      },
    ],
  },
  motsCles: ["plaine", "plateau", "Marovoay", "Alaotra", "Betsimitatatra", "Tampoketsa", "Ihorombe"],
  questionsRevision: [
    ["Cite les trois grandes plaines de Madagascar.", "Marovoay, l'Alaotra et la Betsimitatatra."],
    ["Cite deux grands plateaux.", "Le Tampoketsa et l'Ihorombe."],
  ],
};

const S30 = {
  numero: 30, total: TOTAL,
  titre: "Les grandes vallées",
  theme: "Les milieux naturels à Madagascar",
  objectif: "Être capable de citer les grandes vallées de Madagascar et de dire à quoi elles servent.",
  image: { id: "geo5_vallees", legende: "Les vallées de la Betsiboka, du Mangoky, de la Tsiribihina, de la Mania et de l'Ikopa." },
  scene: { file: "scene_s30_vallees.jpg", mode: "document", legende: "Document : la vallée du Mangoky et son fleuve ocre qui serpente entre les collines." },
  revisionOuverture: [
    ["Cite les trois grandes plaines de Madagascar.", "Marovoay, l'Alaotra et la Betsimitatatra."],
    ["Cite deux grands plateaux.", "Le Tampoketsa et l'Ihorombe."],
  ],
  miseEnSituation: {
    texte: "Chaque année, après la récolte, des voyageurs descendent la Tsiribihina en pirogue. Depuis les plateaux, la rivière coule entre deux rangées de collines, tour à tour calme et rapide, jusqu'à la mer près de Belo sur Tsiribihina. Rakoto rêve de faire ce voyage : « La vallée du fleuve est une vraie route d'eau ! », dit le guide.",
    question: "Qu'est-ce qu'une vallée et quels sont les grands fleuves qui les creusent ?",
    ra: "Une vallée est une dépression allongée creusée par un fleuve ; les grandes vallées suivent la Betsiboka, le Mangoky, la Tsiribihina, la Mania et l'Ikopa.",
    support: "Carte des grandes vallées (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les grandes vallées ». Après cette séance, vous serez capables de citer les grandes vallées de Madagascar et de dire à quoi elles servent.",
  observation: "Observez bien la carte : les traits bleus épais montrent les fleuves et leurs vallées, surtout à l'ouest de l'île.",
  supportObservation: "Carte des vallées (page Leçon)",
  analyse: [
    ["Qu'est-ce qu'une vallée ?", "Une vallée est une dépression allongée, creusée par un fleuve entre deux reliefs."],
    ["Cite trois grandes vallées de Madagascar.", "Les vallées de la Betsiboka, du Mangoky et de la Tsiribihina (aussi la Mania et l'Ikopa)."],
    ["Où se jette la Betsiboka ?", "Elle se jette dans le canal de Mozambique, à Mahajanga."],
    ["Où coule le Mangoky ?", "Il coule au sud-ouest de l'île et se jette près de Morombe."],
    ["Pourquoi les vallées sont-elles des routes ?", "Parce que les fleuves y permettent le transport des personnes et des marchandises."],
    ["Pourquoi trouve-t-on des rizières dans les vallées ?", "Parce que l'eau des fleuves irrigue les terres basses et fertiles."],
  ],
  synthese: "Donc, les grandes vallées de Madagascar suivent les fleuves : la Betsiboka vers Mahajanga, le Mangoky au sud-ouest, la Tsiribihina et la Mania à l'ouest, et l'Ikopa près d'Antananarivo. Les vallées sont des routes d'eau et des terres à riz.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'une vallée ?",
        "2. Cite trois grandes vallées de Madagascar.",
        "3. Où se jette la Betsiboka ?",
        "4. Pourquoi cultive-t-on du riz dans les vallées ?",
      ],
      corrige: [
        "1. Une **vallée** est une dépression allongée creusée par un fleuve.",
        "2. Les vallées de la **Betsiboka**, du **Mangoky** et de la **Tsiribihina**.",
        "3. Elle se jette dans le canal de Mozambique, à **Mahajanga**.",
        "4. Parce que l'**eau** du fleuve irrigue les terres basses et fertiles.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le Mangoky coule au sud-ouest de Madagascar.",
        "2. Une vallée est creusée par le vent.",
        "3. L'Ikopa coule près d'Antananarivo.",
        "4. Les vallées servent au transport par pirogue.",
      ],
      corrige: [
        "1. **Vrai** : il se jette près de Morombe.",
        "2. **Faux** : elle est creusée par un fleuve.",
        "3. **Vrai** : c'est un fleuve des Hautes Terres centrales.",
        "4. **Vrai** : les pirogues y transportent personnes et marchandises.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : Betsiboka — Mangoky — vallée — Ikopa.",
      items: [
        "La dépression creusée par un fleuve s'appelle une ……… .",
        "La ……… se jette à Mahajanga.",
        "Le ……… coule au sud-ouest de l'île.",
        "L'……… arrose Antananarivo.",
      ],
      corrige: [
        "une **vallée** / la **Betsiboka** / le **Mangoky** / l'**Ikopa**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. La vallée est creusée par : A. un fleuve — B. un volcan — C. la pluie seulement",
        "2. La Tsiribihina se jette : A. à l'est — B. à l'ouest, près de Belo — C. au nord",
        "3. Dans les vallées, on cultive surtout : A. le riz — B. le cacao — C. le sisal",
        "4. La vallée de la Mania se trouve : A. sur la côte est — B. à l'ouest des Hautes Terres — C. dans le nord",
      ],
      corrige: [
        "1. Réponse **A** : par un fleuve.",
        "2. Réponse **B** : à l'ouest, près de Belo sur Tsiribihina.",
        "3. Réponse **A** : le riz, grâce à l'eau d'irrigation.",
        "4. Réponse **B** : à l'ouest des Hautes Terres.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Des routes d'eau",
        paras: [
          "Chaque grand fleuve creuse sa vallée en descendant des Hautes Terres vers la mer.",
          "Les vallées de la Betsiboka, du Mangoky, de la Tsiribihina, de la Mania et de l'Ikopa sont les plus connues.",
        ],
        exemples: [
          "Des pirogues chargées de marchandises descendent la Tsiribihina jusqu'à la mer.",
        ],
      },
      {
        titre: "2. Des terres fertiles",
        paras: [
          "L'eau du fleuve dépose dans la vallée une terre fine et fertile, le limon.",
          "C'est pourquoi les vallées sont couvertes de rizières et de champs de canne à sucre ou de tabac.",
        ],
        exemples: [
          "La vallée de l'Ikopa, près d'Antananarivo, est un grand bassin rizicole.",
        ],
      },
      {
        titre: "3. Des paysages variés",
        paras: [
          "Certaines vallées sont étroites et encaissées, d'autres larges et ouvertes vers la mer.",
          "Les paysages de vallées comptent parmi les plus beaux de Madagascar.",
        ],
        exemples: [
          "Les méandres du Mangoky dessinent des boucles ocre visibles même depuis l'espace.",
        ],
      },
    ],
  },
  motsCles: ["vallée", "Betsiboka", "Mangoky", "Tsiribihina", "Mania", "Ikopa"],
  questionsRevision: [
    ["Cite trois grandes vallées de Madagascar.", "La Betsiboka, le Mangoky et la Tsiribihina."],
    ["Pourquoi les vallées sont-elles fertiles ?", "Parce que les fleuves y déposent le limon, une terre fine et riche."],
  ],
};

const S31 = {
  numero: 31, total: TOTAL,
  titre: "L'utilité du relief",
  theme: "Les milieux naturels à Madagascar",
  objectif: "Être capable de citer les utilités du relief pour l'homme.",
  image: { id: "geo5_utilite_relief", legende: "Le relief sert l'agriculture, le transport, l'aménagement et le tourisme." },
  scene: { file: "scene_s31_utilite_relief.jpg", mode: "document", legende: "Document : une route sinueuse longe les rizières en terrasses d'une colline." },
  revisionOuverture: [
    ["Cite trois grandes vallées de Madagascar.", "La Betsiboka, le Mangoky et la Tsiribihina."],
    ["Pourquoi les vallées sont-elles fertiles ?", "Parce que les fleuves y déposent le limon."],
  ],
  miseEnSituation: {
    texte: "Dans la région d'Ambalavao, des visiteurs venus de loin photographient les collines et les falaises de l'Andringitra. Leur guide, un jeune homme du village, explique fièrement : « Grâce à nos montagnes, des touristes viennent toute l'année. Et nos vallées nous donnent le riz ; nos cols font passer la route nationale. » Les visiteurs repartent émerveillés, et le village vit bien.",
    question: "À quoi sert le relief pour les habitants de Madagascar ?",
    ra: "Le relief sert à l'agriculture, au transport, à l'aménagement et au tourisme.",
    support: "Schéma de l'utilité du relief (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « L'utilité du relief ». Après cette séance, vous serez capables de citer les utilités du relief pour l'homme.",
  observation: "Observez bien le schéma : quatre panneaux montrent comment le relief sert les hommes.",
  supportObservation: "Schéma de l'utilité du relief (page Leçon)",
  analyse: [
    ["Où cultive-t-on le riz grâce au relief ?", "Dans les plaines et les vallées, qui retiennent l'eau."],
    ["Que fait-on sur les plateaux ?", "On cultive et on fait paître les zébus sur les prairies."],
    ["Comment le relief aide-t-il le transport ?", "Les vallées et les cols guident les routes d'une ville à l'autre."],
    ["Pourquoi construit-on des barrages en montagne ?", "Parce que les pentes des vallées étroites retiennent l'eau des fleuves pour produire de l'électricité."],
    ["Pourquoi les touristes viennent-ils voir le relief ?", "Pour admirer les paysages : montagnes, falaises, canyons comme l'Isalo ou les Tsingy."],
    ["Où bâtit-on les grandes villes ?", "Souvent sur les plateaux et dans les vallées, à l'abri des inondations."],
  ],
  synthese: "Donc, le relief est utile à l'homme : les plaines et vallées nourrissent l'agriculture, les cols et vallées guident les routes, les montagnes retiennent les barrages et attirent les touristes. Les villes s'installent sur les plateaux et dans les vallées.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Où cultive-t-on le riz grâce au relief ?",
        "2. Comment le relief guide-t-il les routes ?",
        "3. Pourquoi installe-t-on des barrages en montagne ?",
        "4. Pourquoi les touristes aiment-ils le relief malgache ?",
      ],
      corrige: [
        "1. Dans les **plaines** et les **vallées**, qui retiennent l'eau.",
        "2. Les **cols** et les vallées guident les routes.",
        "3. Pour **retenir l'eau** et produire de l'électricité.",
        "4. Pour admirer les **paysages** : montagnes, falaises, Tsingy.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Les plaines servent à la riziculture.",
        "2. Le relief est un obstacle inutile.",
        "3. Les touristes viennent admirer les montagnes malgaches.",
        "4. Les plateaux servent de pâturages aux zébus.",
      ],
      corrige: [
        "1. **Vrai** : ce sont les greniers à riz.",
        "2. **Faux** : il rend de nombreux services.",
        "3. **Vrai** : Andringitra, Isalo, Tsingy…",
        "4. **Vrai** : leurs prairies nourrissent les troupeaux.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : agriculture — routes — tourisme — barrages.",
      items: [
        "Les plaines et les vallées servent à l'……… .",
        "Les cols et les vallées guident les ……… .",
        "En montagne, on construit des ……… pour l'électricité.",
        "Les beaux paysages attirent le ……… .",
      ],
      corrige: [
        "l'**agriculture** / les **routes** / des **barrages** / le **tourisme**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Les rizières occupent surtout : A. les sommets — B. les plaines et vallées — C. les falaises",
        "2. Les routes passent souvent : A. par les cols et vallées — B. par les sommets — C. sous la terre",
        "3. Les barrages produisent : A. de l'essence — B. de l'électricité — C. du riz",
        "4. Les Tsingy et l'Isalo attirent : A. des mineurs — B. des touristes — C. des pêcheurs",
      ],
      corrige: [
        "1. Réponse **B** : les plaines et les vallées.",
        "2. Réponse **A** : par les cols et les vallées.",
        "3. Réponse **B** : de l'électricité.",
        "4. Réponse **B** : des touristes.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Un relief qui nourrit",
        paras: [
          "Les plaines et les vallées retiennent l'eau : on y cultive le riz, la canne à sucre et les légumes.",
          "Sur les plateaux, les prairies nourrissent les zébus ; les versants des collines portent des cultures en terrasses.",
        ],
        exemples: [
          "Les rizières en escalier des collines de Betafo, près d'Antsirabe.",
        ],
      },
      {
        titre: "2. Un relief qui fait circuler et aménager",
        paras: [
          "Les routes nationales suivent les vallées et passent par les cols entre les massifs.",
          "Dans les vallées étroites des montagnes, on a construit des barrages qui fournissent de l'électricité, comme celui de Mantasoa.",
        ],
        exemples: [
          "La route nationale 7 longe les vallées pour relier Antananarivo à Toliara.",
        ],
      },
      {
        titre: "3. Un relief qui fait rêver",
        paras: [
          "Les paysages de montagne attirent les touristes du monde entier.",
          "Les randonneurs gravissent le Pic Boby, visitent les canyons de l'Isalo et les aiguilles calcaires des Tsingy.",
        ],
        exemples: [
          "À Ambalavao, le guide du village vit du tourisme grâce à l'Andringitra.",
        ],
      },
    ],
  },
  motsCles: ["agriculture", "transport", "aménagement", "tourisme", "barrage"],
  questionsRevision: [
    ["Cite trois utilités du relief.", "L'agriculture, le transport et le tourisme (aussi l'aménagement avec les barrages)."],
    ["Pourquoi construit-on des barrages en montagne ?", "Pour retenir l'eau des fleuves et produire de l'électricité."],
  ],
};

const S32 = {
  numero: 32, total: TOTAL,
  titre: "Les éléments du climat",
  theme: "Les milieux naturels à Madagascar",
  objectif: "Être capable de citer les trois éléments du climat et de les décrire.",
  image: { id: "geo5_elements_climat", legende: "Les trois éléments du climat : la température, les vents et les précipitations." },
  scene: { file: "scene_s32_elements_climat.jpg", mode: "document", legende: "Document : les élèves observent la manche à air, le thermomètre et le pluviomètre de l'école." },
  revisionOuverture: [
    ["Cite trois utilités du relief.", "L'agriculture, le transport et le tourisme."],
    ["Où cultive-t-on le riz grâce au relief ?", "Dans les plaines et les vallées."],
  ],
  miseEnSituation: {
    texte: "L'école de Faniry vient de recevoir une petite station météo : une manche à air sur un mât, un thermomètre et un pluviomètre. Chaque matin, deux élèves de service notent la température, regardent si le vent gonfle la manche à air et mesurent la pluie tombée pendant la nuit. « Avec ces trois mesures, nous connaîtrons le climat de notre village ! », dit la maîtresse.",
    question: "Que mesure-t-on pour connaître le climat d'un lieu ?",
    ra: "On mesure la température, les vents et les précipitations.",
    support: "Schéma des éléments du climat (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les éléments du climat ». Après cette séance, vous serez capables de citer les trois éléments du climat et de dire à quoi ils servent.",
  observation: "Observez bien le schéma : trois panneaux montrent la température, les vents et les précipitations.",
  supportObservation: "Schéma des éléments du climat (page Leçon)",
  analyse: [
    ["Quels sont les trois éléments du climat ?", "La température, les vents et les précipitations."],
    ["Avec quel instrument mesure-t-on la température ?", "Avec un thermomètre, gradué en degrés Celsius."],
    ["Qu'est-ce que le vent ?", "Le vent est l'air qui se déplace ; on le sent sur le visage et on voit bouger les arbres."],
    ["Que mesure le pluviomètre ?", "Il mesure la quantité de pluie tombée, en millimètres."],
    ["À quoi sert la manche à air ?", "Elle montre la direction et la force du vent."],
    ["Qu'est-ce que le climat ?", "Le climat est l'ensemble des temps qu'il fait habituellement dans un lieu."],
  ],
  synthese: "Donc, pour décrire le climat d'un lieu, on observe trois éléments : la température, mesurée par le thermomètre ; les vents, que la manche à air révèle ; et les précipitations, mesurées par le pluviomètre.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Quels sont les trois éléments du climat ?",
        "2. Avec quoi mesure-t-on la température ?",
        "3. Qu'est-ce que le vent ?",
        "4. Que mesure le pluviomètre ?",
      ],
      corrige: [
        "1. La **température**, les **vents** et les **précipitations**.",
        "2. Avec un **thermomètre**.",
        "3. Le vent est **l'air qui se déplace**.",
        "4. Il mesure **la quantité de pluie** tombée, en millimètres.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le thermomètre mesure la pluie.",
        "2. Le vent est de l'air qui se déplace.",
        "3. Le pluviomètre mesure les précipitations.",
        "4. La manche à air indique la direction du vent.",
      ],
      corrige: [
        "1. **Faux** : il mesure la température.",
        "2. **Vrai**.",
        "3. **Vrai** : en millimètres.",
        "4. **Vrai** : et aussi sa force.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : température — vent — pluviomètre — thermomètre.",
      items: [
        "Le ……… est l'air qui se déplace.",
        "La ……… se mesure en degrés Celsius.",
        "Le ……… mesure la pluie tombée.",
        "On lit la température sur un ……… .",
      ],
      corrige: [
        "Le **vent** / la **température** / le **pluviomètre** / un **thermomètre**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Les trois éléments du climat sont : A. pluie, neige, vent — B. température, vents, précipitations — C. chaud, froid, frais",
        "2. La température se mesure en : A. degrés — B. litres — C. kilomètres",
        "3. Les précipitations se mesurent : A. en millimètres — B. en kilos — C. en heures",
        "4. La manche à air sert à observer : A. le vent — B. la pluie — C. la température",
      ],
      corrige: [
        "1. Réponse **B**.",
        "2. Réponse **A** : en degrés Celsius.",
        "3. Réponse **A** : en millimètres.",
        "4. Réponse **A** : sa direction et sa force.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La température",
        paras: [
          "La température dit si l'air est chaud ou frais. On la mesure avec un thermomètre, en degrés Celsius (°C).",
          "À Madagascar, il fait chaud toute l'année, mais les matinées d'altitude sont fraîches.",
        ],
        exemples: [
          "À Antananarivo, en saison sèche, le thermomètre peut descendre vers 10 °C le matin.",
        ],
      },
      {
        titre: "2. Les vents",
        paras: [
          "Le vent est l'air qui se déplace au-dessus de la terre et de la mer.",
          "À Madagascar, les alizés soufflent de l'est une grande partie de l'année ; la manche à air des aéroports indique leur direction.",
        ],
        exemples: [
          "Les voiliers utilisent les alizés pour naviguer sur l'océan Indien.",
        ],
      },
      {
        titre: "3. Les précipitations",
        paras: [
          "Les précipitations sont l'eau qui tombe du ciel : la pluie surtout, à Madagascar.",
          "On les mesure avec un pluviomètre, en millimètres ; la côte Est en reçoit beaucoup plus que le grand Sud.",
        ],
        exemples: [
          "Le pluviomètre de l'école de Faniry recueille l'eau de chaque averse.",
        ],
      },
    ],
  },
  motsCles: ["climat", "température", "vent", "précipitations", "thermomètre", "pluviomètre"],
  questionsRevision: [
    ["Quels sont les trois éléments du climat ?", "La température, les vents et les précipitations."],
    ["Avec quels instruments les mesure-t-on ?", "Le thermomètre, la manche à air et le pluviomètre."],
  ],
};

const S33 = {
  numero: 33, total: TOTAL,
  titre: "Le climat tropical de Madagascar",
  theme: "Les milieux naturels à Madagascar",
  objectif: "Être capable de décrire le climat tropical de Madagascar.",
  image: { id: "geo5_climat_tropical", legende: "Chaleur toute l'année, une saison des pluies et une saison sèche." },
  scene: { file: "scene_s33_climat_tropical.jpg", mode: "document", legende: "Document : une averse chaude sous un soleil pâle — le climat tropical en action." },
  revisionOuverture: [
    ["Quels sont les trois éléments du climat ?", "La température, les vents et les précipitations."],
    ["Avec quoi mesure-t-on les précipitations ?", "Avec un pluviomètre, en millimètres."],
  ],
  miseEnSituation: {
    texte: "Mamy écrit à son correspondant de France. « Chez nous, à Madagascar, il ne neige jamais, raconte-t-il. Toute l'année, on porte des vêtements légers. Mais nous avons deux saisons bien différentes : en ce moment, novembre, il pleut presque chaque après-midi, avec des orages éclatants. De mai à octobre, au contraire, le ciel reste bleu et sec. » Son correspondant répond : « Nous, nous avons quatre saisons et de la neige en hiver ! »",
    question: "Quel est le climat de Madagascar et comment se caractérise-t-il ?",
    ra: "Madagascar a un climat tropical : il fait chaud toute l'année, avec une saison des pluies et une saison sèche.",
    support: "Schéma du climat tropical (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Le climat tropical de Madagascar ». Après cette séance, vous serez capables de décrire le climat tropical de notre île.",
  observation: "Observez bien le schéma : la bande du bas montre l'année malgache, partagée entre saison des pluies et saison sèche.",
  supportObservation: "Schéma du climat tropical (page Leçon)",
  analyse: [
    ["Quel est le climat de Madagascar ?", "Madagascar a un climat tropical."],
    ["Que veut dire « tropical » ?", "« Tropical » veut dire chaud toute l'année, comme entre les tropiques."],
    ["Quelles sont les deux saisons de l'année malgache ?", "La saison chaude et pluvieuse, et la saison fraîche et sèche."],
    ["Quand tombe la saison des pluies ?", "De novembre à avril."],
    ["Quand tombe la saison sèche ?", "De mai à octobre."],
    ["Quel phénomène dangereux arrive parfois en saison des pluies ?", "Les cyclones, de décembre à mars."],
  ],
  synthese: "Donc, Madagascar a un climat tropical : il fait chaud toute l'année, et l'année se partage en deux saisons — la saison chaude et pluvieuse de novembre à avril, et la saison fraîche et sèche de mai à octobre.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Quel est le climat de Madagascar ?",
        "2. Que veut dire « tropical » ?",
        "3. Quand a lieu la saison des pluies ?",
        "4. Quel danger arrive parfois en saison des pluies ?",
      ],
      corrige: [
        "1. Madagascar a un **climat tropical**.",
        "2. « **Tropical** » veut dire chaud toute l'année.",
        "3. De **novembre à avril**.",
        "4. Les **cyclones**, surtout de décembre à mars.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Il neige chaque hiver à Madagascar.",
        "2. La saison sèche va de mai à octobre.",
        "3. Le climat tropical est chaud toute l'année.",
        "4. La saison des pluies va de novembre à avril.",
      ],
      corrige: [
        "1. **Faux** : il ne neige jamais à Madagascar.",
        "2. **Vrai**.",
        "3. **Vrai**.",
        "4. **Vrai**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : tropical — pluvieuse — sèche — cyclones.",
      items: [
        "Le climat de Madagascar est un climat ……… .",
        "De novembre à avril, c'est la saison chaude et ……… .",
        "De mai à octobre, c'est la saison fraîche et ……… .",
        "En saison des pluies, des ……… frappent parfois l'île.",
      ],
      corrige: [
        "un climat **tropical** / et **pluvieuse** / et **sèche** / des **cyclones**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le climat tropical est : A. froid toute l'année — B. chaud toute l'année — C. tempéré",
        "2. La saison des pluies à Madagascar va : A. de mai à octobre — B. de novembre à avril — C. toute l'année",
        "3. En janvier, à Madagascar, on attend plutôt : A. de la neige — B. des averses et des orages — C. du gel",
        "4. Les cyclones arrivent surtout : A. en juillet — B. entre décembre et mars — C. jamais",
      ],
      corrige: [
        "1. Réponse **B** : chaud toute l'année.",
        "2. Réponse **B** : de novembre à avril.",
        "3. Réponse **B** : des averses et des orages.",
        "4. Réponse **B** : entre décembre et mars.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Un pays sous les tropiques",
        paras: [
          "Madagascar se trouve entre l'équateur et le tropique du Capricorne : c'est un pays tropical.",
          "Le soleil y est fort toute l'année et les vêtements légers suffisent, même en hiver.",
        ],
        exemples: [
          "Il ne neige jamais dans les villages de Madagascar.",
        ],
      },
      {
        titre: "2. Deux saisons, pas quatre",
        paras: [
          "Contrairement à l'Europe, Madagascar ne connaît que deux saisons.",
          "La saison chaude et pluvieuse, de novembre à avril, apporte des averses presque quotidiennes. La saison fraîche et sèche, de mai à octobre, offre un ciel bleu et des nuits fraîches.",
        ],
        exemples: [
          "Mamy porte toujours des manches courtes ; son correspondant français met un manteau l'hiver.",
        ],
      },
      {
        titre: "3. Attention aux cyclones",
        paras: [
          "Entre décembre et mars, des cyclones peuvent frapper l'île.",
          "Ce sont de grandes tempêtes tournantes, avec des vents très violents et des pluies diluviennes : on s'y prépare en protégeant les maisons et les récoltes.",
        ],
        exemples: [
          "En 2022, le cyclone Batsirai a frappé la côte Est.",
        ],
      },
    ],
  },
  motsCles: ["climat tropical", "saison chaude et pluvieuse", "saison fraîche et sèche", "cyclone"],
  questionsRevision: [
    ["Quel est le climat de Madagascar ?", "Un climat tropical : chaud toute l'année."],
    ["Quelles sont les deux saisons malgaches ?", "La saison chaude et pluvieuse (novembre-avril) et la saison fraîche et sèche (mai-octobre)."],
  ],
};

module.exports = { topics: [S27, S28, S29, S30, S31, S32, S33] };
