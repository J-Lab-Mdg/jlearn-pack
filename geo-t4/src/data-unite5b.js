// data-unite5b.js — UNITÉ 5 : L'HOMME ET LES ACTIVITÉS QUOTIDIENNES (Séances 63 à 68)
const TOTAL = 76;

const S63 = {
  numero: 63, total: TOTAL,
  titre: "Les variables de la croissance de la population",
  theme: "L'Homme et les activités quotidiennes",
  objectif: "Être capable de citer les trois variables qui font croître ou diminuer la population.",
  image: { id: "geot4_croissance", legende: "Les trois variables : les naissances, les décès et les migrations." },
  scene: { file: "scene_s63_croissance.jpg", mode: "document", legende: "Document : le bilan de la population — naissances, décès et migrations." },
  miseEnSituation: {
    texte: "À la fin de l'année, le chef du village dresse son bilan devant tout le monde : « Cette année : 5 naissances, 2 décès, 4 départs vers la ville et 7 arrivées ! » Il marque une pause, sourit : « Alors, amis, notre village a-t-il grandi ou rapetissé ? » Les habitants calculent… et bientôt tout le village crie de joie : « Il a grandi ! »",
    question: "Pourquoi le village a-t-il grandi cette année ?",
    ra: "Parce que les naissances et les arrivées ont dépassé les décès et les départs.",
    support: "Schéma des trois variables (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les variables de la croissance de la population ». Après cette séance, vous serez capables de citer les trois variables qui font croître ou diminuer la population.",
  observation: "Regardez et observez bien les trois panneaux : les naissances, les décès et les migrations, puis le grand résultat.",
  supportObservation: "Schéma des trois variables (page Leçon)",
  analyse: [
    ["Combien de naissances cette année au village ?", "Cinq naissances."],
    ["Combien de décès ?", "Deux décès."],
    ["Combien de départs et d'arrivées ?", "Quatre départs et sept arrivées."],
    ["Qu'est-ce qui fait augmenter la population ?", "Les naissances et les arrivées."],
    ["Qu'est-ce qui fait diminuer la population ?", "Les décès et les départs."],
    ["Alors, le village a-t-il grandi ?", "Oui : 5 + 7 = 12 en plus, 2 + 4 = 6 en moins ; il a grandi de 6 habitants."],
  ],
  synthese: "Donc, trois variables font croître ou diminuer la population : les naissances, les décès et les migrations (départs et arrivées). Si les naissances et les arrivées sont plus nombreuses que les décès et les départs, la population augmente ; sinon, elle diminue.",
  appExos: [
    {
      consigne: "Complète avec les mots : naissances — décès — migrations — augmente.",
      items: [
        "1. Les trois variables de la croissance sont les ……… , les ……… et les ……… .",
        "2. Si les naissances et les arrivées dépassent le reste, la population ……… .",
      ],
      corrige: [
        "1. Les **naissances**, les **décès** et les **migrations**.",
        "2. Elle **augmente**.",
      ],
    },
    {
      consigne: "Résous ces petits problèmes.",
      items: [
        "1. Village de 800 habitants : 12 naissances, 5 décès. Population en fin d'année ?",
        "2. Ville de 2 000 habitants : 20 naissances, 18 décès, 60 arrivées, 100 départs. La population a-t-elle augmenté ou diminué ?",
      ],
      corrige: [
        "1. 800 + 12 − 5 = **807 habitants**.",
        "2. 20 + 60 = 80 en plus ; 18 + 100 = 118 en moins ; 118 − 80 = 38 : la population a **diminué de 38 habitants** (1 962).",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Seules les naissances font croître la population.",
        "2. Les départs font diminuer la population.",
        "3. Une population peut diminuer même avec des naissances.",
        "4. Les trois variables sont : naissances, décès, migrations.",
      ],
      corrige: [
        "1. **Faux** : **les arrivées** la font aussi croître.",
        "2. **Vrai**.",
        "3. **Vrai** : si les décès et les départs sont plus nombreux.",
        "4. **Vrai**.",
      ],
    },
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Cite les trois variables de la croissance de la population.",
        "2. Quand dit-on que la population augmente ?",
        "3. Dans le bilan du chef du village, de combien le village a-t-il grandi ?",
        "4. Que prépare un village dont la population augmente vite ?",
      ],
      corrige: [
        "1. **Les naissances, les décès et les migrations**.",
        "2. Quand **les naissances et les arrivées dépassent les décès et les départs**.",
        "3. 5 + 7 − 2 − 4 = **6 habitants de plus**.",
        "4. **Plus d'écoles, plus de maisons, plus de champs**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Trois variables",
        paras: [
          "La population d'un lieu change sans arrêt. Trois variables expliquent ce changement :",
          "les naissances, qui ajoutent des habitants ;",
          "les décès, qui en enlèvent ;",
          "les migrations, avec les départs qui enlèvent et les arrivées qui ajoutent.",
        ],
      },
      {
        titre: "2. Calculer la croissance",
        paras: [
          "On additionne ce qui augmente : naissances + arrivées.",
          "On additionne ce qui diminue : décès + départs.",
          "Si le premier total dépasse le second, la population augmente ; sinon, elle diminue.",
        ],
        sous: [
          {
            titre: "a. Le bilan annuel du village",
            paras: [
              "Chaque fin d'année, le chef du village dresse le bilan des trois variables.",
              "Ce bilan dit si le village a grandi ou rapetissé, et de combien.",
            ],
          },
        ],
      },
      {
        titre: "3. Grandir ou rapetisser",
        paras: [
          "Un village qui grandit a besoin de plus d'écoles et de plus de terres.",
          "Une localité qui rapetissse perd des bras pour cultiver : les familles s'inquiètent.",
        ],
        exemples: [
          "Le bilan du village : 5 naissances + 7 arrivées = 12 ; 2 décès + 4 départs = 6 ; le village a grandi de 6 habitants.",
        ],
      },
    ],
  },
  motsCles: ["variable", "croissance", "augmenter", "diminuer"],
  questionsRevision: [
    ["Cite les trois variables de la croissance de la population.", "Les naissances, les décès et les migrations."],
    ["Quand la population diminue-t-elle ?", "Quand les décès et les départs dépassent les naissances et les arrivées."],
  ],
};

const S64 = {
  numero: 64, total: TOTAL,
  titre: "Les us et coutumes dans la localité",
  theme: "L'Homme et les activités quotidiennes",
  objectif: "Être capable de définir les us et coutumes et de citer ceux de sa localité.",
  image: { id: "geot4_us_coutumes", legende: "Les us et coutumes : le mariage, la circoncision, l'exhumation et l'enterrement." },
  scene: { file: "scene_s64_us_coutumes.jpg", mode: "document", legende: "Document : la fête du village — musique, danses et partage." },
  miseEnSituation: {
    texte: "Samedi, toute la famille de Rasoa se réunit au village : on prépare la cérémonie de l'exhumation, quand la famille honore ensemble ses ancêtres. « C'est notre coutume », explique la grand-mère. « Chaque famille, chaque région a ses coutumes : le mariage, la circoncision, l'enterrement… C'est notre façon de vivre ensemble, transmise par nos anciens. »",
    question: "Qu'est-ce que la grand-mère appelle « notre façon de vivre ensemble » ?",
    ra: "Les us et coutumes : les habitudes et les traditions transmises par les anciens.",
    support: "Schéma des us et coutumes (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les us et coutumes dans la localité ». Après cette séance, vous serez capables de définir les us et coutumes et de citer ceux de votre localité.",
  observation: "Regardez et observez bien les quatre dessins : le mariage, la circoncision, l'exhumation et l'enterrement.",
  supportObservation: "Schéma des us et coutumes (page Leçon)",
  analyse: [
    ["Que célèbre la famille de Rasoa ce samedi ?", "La cérémonie de l'exhumation : honorer ensemble les ancêtres."],
    ["Quels grands moments de la vie montrent les dessins ?", "Le mariage, la circoncision, l'exhumation et l'enterrement."],
    ["Qui transmet ces coutumes aux enfants ?", "Les anciens : grands-parents et parents."],
    ["Les coutumes sont-elles les mêmes partout ?", "Non : chaque famille, chaque région a ses coutumes."],
    ["Comment s'appellent les habitudes et les traditions d'un peuple ?", "Ce sont les us et coutumes."],
    ["Pourquoi respecte-t-on les coutumes des autres ?", "Parce que chaque peuple vit à sa manière : le respectunit les familles."],
  ],
  synthese: "Donc, les us et coutumes sont les habitudes et les traditions d'un pays, d'un peuple ou d'un milieu. Dans nos localités : le mariage, la circoncision, l'exhumation des ancêtres et l'enterrement sont de grandes coutumes. Les anciens les transmettent aux enfants ; on les respecte et on respecte celles des autres.",
  appExos: [
    {
      consigne: "Complète avec les mots : coutumes — anciens — mariage — respecter.",
      items: [
        "1. Les habitudes et les traditions d'un peuple sont ses us et ……… .",
        "2. Ce sont les ……… qui transmettent les coutumes.",
        "3. L'union d'un homme et d'une femme est le ……… .",
        "4. Il faut ……… les coutumes des autres régions.",
      ],
      corrige: ["**coutumes** / **anciens** / **mariage** / **respecter**."],
    },
    {
      consigne: "Relie chaque coutume de la liste 1 à sa description de la liste 2 par une flèche.",
      items: [
        "Liste 1 : 1. le mariage — 2. la circoncision — 3. l'exhumation — 4. l'enterrement",
        "Liste 2 : a. on honore ensemble les ancêtres — b. l'union d'un homme et d'une femme — c. on accompagne le défunt au tombeau — d. une grande fête pour l'enfant",
      ],
      corrige: [
        "1 → **b** : le mariage unit un homme et une femme.",
        "2 → **d** : la circoncision est une grande fête pour l'enfant.",
        "3 → **a** : l'exhumation honore ensemble les ancêtres.",
        "4 → **c** : l'enterrement accompagne le défunt au tombeau.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que les us et coutumes ?",
        "2. Cite trois grandes coutumes de nos localités.",
        "3. Qui transmet les coutumes aux enfants ?",
        "4. Pourquoi faut-il respecter les coutumes des autres ?",
      ],
      corrige: [
        "1. Ce sont **les habitudes et les traditions d'un pays, d'un peuple, d'un milieu**.",
        "2. Par exemple : **le mariage, la circoncision et l'enterrement** (aussi l'exhumation).",
        "3. **Les anciens** : grands-parents et parents.",
        "4. Parce que **chaque peuple vit à sa manière** : le respect unit les familles.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Les coutumes sont les mêmes dans toutes les régions.",
        "2. L'exhumation honore les ancêtres.",
        "3. Les jeunes transmettent les coutumes aux anciens.",
        "4. Les us et coutumes font partie de la vie de la localité.",
      ],
      corrige: [
        "1. **Faux** : **chaque région a ses coutumes**.",
        "2. **Vrai**.",
        "3. **Faux** : ce sont **les anciens** qui transmettent aux enfants.",
        "4. **Vrai**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La définition des us et coutumes",
        paras: [
          "Les us et coutumes sont les habitudes, les usages et les traditions d'un pays, d'un peuple ou d'un milieu.",
          "Elles guident la vie ensemble : la manière de se marier, de fêter, d'accompagner les défunts.",
        ],
      },
      {
        titre: "2. Les grandes coutumes de nos localités",
        paras: [
          "Le mariage : l'union d'un homme et d'une femme, fêtée par les deux familles.",
          "La circoncision : une grande fête pour l'enfant et sa famille.",
          "L'exhumation : la famille honore ensemble ses ancêtres.",
          "L'enterrement : on accompagne le défunt jusqu'au tombeau de famille.",
        ],
        sous: [
          {
            titre: "a. La transmission",
            paras: [
              "Les anciens transmettent les coutumes aux enfants par les fêtes, les récits et les cérémonies.",
              "Chaque génération garde ainsi la mémoire de celle d'avant.",
            ],
          },
        ],
      },
      {
        titre: "3. Le respect des coutumes",
        paras: [
          "Les coutumes changent d'une région à l'autre, d'une famille à l'autre.",
          "En visitant une autre localité, on s'enquiert de ses coutumes et on les respecte.",
        ],
        exemples: [
          "La grand-mère de Rasoa prépare l'exhumation : toute la famille se réunira pour honorer les ancêtres.",
        ],
      },
    ],
  },
  motsCles: ["us et coutumes", "tradition", "cérémonie", "transmission"],
  questionsRevision: [
    ["Qu'est-ce que les us et coutumes ?", "Les habitudes et les traditions d'un pays, d'un peuple, d'un milieu."],
    ["Cite trois grandes coutumes de nos localités.", "Le mariage, la circoncision et l'enterrement (aussi l'exhumation)."],
  ],
};

const S65 = {
  numero: 65, total: TOTAL,
  titre: "Le respect des fady",
  theme: "L'Homme et les activités quotidiennes",
  objectif: "Être capable de définir le fady et d'expliquer pourquoi on le respecte.",
  image: { id: "geot4_fady", legende: "Les fady : des interdictions traditionnelles que l'on respecte." },
  scene: { file: "scene_s65_fady.jpg", mode: "document", legende: "Document : le lieu sacré — l'ancien explique le fady, les enfants écoutent." },
  miseEnSituation: {
    texte: "Ravi, le cousin venu de la ville, veut labourer le champ ce mardi matin. Mais le grand-père l'arrête net : « Halte ! Aujourd'hui, c'est fady de travailler la terre ! » Ravi s'étonne : « Fady ? » « Oui, le fady, c'est une interdiction de nos anciens, explique le grand-père. Ici, on ne laboure pas ce jour-là, on ne pêche pas certains jours, on ne touche pas aux lieux sacrés. On respecte le fady, c'est tout ! »",
    question: "Pourquoi le grand-père arrête-t-il Ravi ?",
    ra: "Parce que ce jour est fady : une interdiction traditionnelle qu'on respecte.",
    support: "Schéma des fady (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Le respect des fady ». Après cette séance, vous serez capables de définir le fady et d'expliquer pourquoi on le respecte.",
  observation: "Regardez et observez bien les trois panneaux avec leurs panneaux d'interdiction.",
  supportObservation: "Schéma des fady (page Leçon)",
  analyse: [
    ["Que veut faire Ravi ce mardi matin ?", "Labourer le champ."],
    ["Pourquoi le grand-père l'arrête-t-il ?", "Parce que c'est fady de travailler la terre ce jour-là."],
    ["Qu'est-ce qu'un fady ?", "C'est une interdiction traditionnelle transmise par les anciens."],
    ["Cite deux fady du schéma.", "Ne pas pêcher certains jours ; ne pas entrer dans les lieux sacrés."],
    ["Les fady sont-ils les mêmes partout ?", "Non : chaque région a ses propres fady."],
    ["Que fait-on quand on visite une autre région ?", "On demande ses fady et on les respecte."],
  ],
  synthese: "Donc, le fady est une interdiction traditionnelle : certains jours, certains lieux, certains actes sont interdits par la coutume. Chaque région de Madagascar a ses fady. On les respecte chez soi, et on respecte aussi ceux des autres régions qu'on visite.",
  appExos: [
    {
      consigne: "Complète avec les mots : fady — interdiction — anciens — respecter.",
      items: [
        "1. Le ……… est une interdiction traditionnelle.",
        "2. C'est une ……… transmise par la coutume.",
        "3. Les ……… ont transmis les fady aux générations.",
        "4. Quand on voyage, il faut ……… les fady de la région visitée.",
      ],
      corrige: ["**fady** / **interdiction** / **anciens** / **respecter**."],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Un fady est une permission de faire quelque chose.",
        "2. Chaque région a ses propres fady.",
        "3. On respecte les fady même quand on est pressé.",
        "4. Les lieux sacrés peuvent être fady.",
      ],
      corrige: [
        "1. **Faux** : c'est **une interdiction**.",
        "2. **Vrai**.",
        "3. **Vrai**.",
        "4. **Vrai**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'un fady ?",
        "2. Qui a arrêté Ravi, et pourquoi ?",
        "3. Que fait-on avant d'agir dans une région qu'on ne connaît pas ?",
        "4. Pourquoi respecte-t-on les fady ?",
      ],
      corrige: [
        "1. C'est **une interdiction traditionnelle** transmise par les anciens.",
        "2. **Son grand-père**, parce que c'était **fady de travailler la terre ce jour-là**.",
        "3. **On demande les fady de la région et on les respecte**.",
        "4. **Par respect pour les anciens et les coutumes** de chaque région.",
      ],
    },
    {
      consigne: "Relie chaque fady de la liste 1 à ce qu'il interdit de la liste 2 par une flèche.",
      items: [
        "Liste 1 : 1. le fady du jour sans labour — 2. le fady de la pêche — 3. le fady du lieu sacré",
        "Liste 2 : a. entrer dans certains endroits respectés — b. travailler la terre certains jours — c. pêcher certains jours",
      ],
      corrige: [
        "1 → **b** : il interdit de labourer certains jours.",
        "2 → **c** : il interdit de pêcher certains jours.",
        "3 → **a** : il interdit d'entrer dans certains lieux respectés.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La définition du fady",
        paras: [
          "Le fady est une interdiction traditionnelle : la coutume défend certains actes, certains jours ou certains lieux.",
          "Le mot fady veut dire « interdit », « défendu ».",
        ],
      },
      {
        titre: "2. Des exemples de fady",
        paras: [
          "Ne pas travailler la terre certains jours de la semaine, comme le jour fady du village.",
          "Ne pas pêcher certains jours, pour laisser le lac ou la rivière se reposer.",
          "Ne pas entrer dans les lieux sacrés, comme certaines collines ou forêts respectées.",
        ],
        sous: [
          {
            titre: "a. Des fady différents partout",
            paras: [
              "Chaque région, chaque village a ses fady : ce qui est fady ici ne l'est pas forcément ailleurs.",
              "Le voyageur avisé demande toujours : « Y a-t-il un fady ici ? »",
            ],
          },
        ],
      },
      {
        titre: "3. Pourquoi respecter les fady ?",
        paras: [
          "Par respect pour les anciens, qui ont établi ces règles.",
          "Par respect pour les habitants du lieu, qui y tiennent.",
          "Le respect des fady garde la paix entre les familles et les villages.",
        ],
        exemples: [
          "Ravi, le cousin de la ville, a posé sa houe : mardi, c'est fady de labourer chez son grand-père.",
        ],
      },
    ],
  },
  motsCles: ["fady", "interdit", "tradition", "respect"],
  questionsRevision: [
    ["Qu'est-ce qu'un fady ?", "C'est une interdiction traditionnelle."],
    ["Que fait-on en arrivant dans une région inconnue ?", "On demande les fady de la région et on les respecte."],
  ],
};

const S66 = {
  numero: 66, total: TOTAL,
  titre: "Les caractéristiques socioculturelles : langue, vêtement, mode de vie",
  theme: "L'Homme et les activités quotidiennes",
  objectif: "Être capable de décrire les caractéristiques socioculturelles de sa famille et de sa localité.",
  image: { id: "geot4_socioculturel", legende: "Nos caractéristiques socioculturelles : la langue, le vêtement, les coiffures et le mode de vie." },
  scene: { file: "scene_s66_socioculturel.jpg", mode: "document", legende: "Document : la langue, les vêtements et les histoires des anciens." },
  miseEnSituation: {
    texte: "« Présentez votre famille à la classe ! », demande la maîtresse. Tiana se lève : « Ma famille vient des Hautes Terres. À la maison, nous parlons malgache, maman porte un beau lamba, papa met son chapeau pour les champs. Nous mangeons du riz au repas, nous avons deux zébus et une maison en briques. » Chaque élève raconte : les origines et les modes de vie se croisent dans la classe !",
    question: "Que raconte Tiana sur sa famille ?",
    ra: "Son origine, sa langue, ses vêtements et son mode de vie.",
    support: "Schéma des caractéristiques socioculturelles (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les caractéristiques socioculturelles : langue, vêtement, mode de vie ». Après cette séance, vous serez capables de décrire les caractéristiques socioculturelles de votre famille.",
  observation: "Regardez et observez bien les quatre panneaux : la langue, le vêtement, les coiffures et le mode de vie.",
  supportObservation: "Schéma des caractéristiques socioculturelles (page Leçon)",
  analyse: [
    ["Quelle langue parle la famille de Tiana ?", "Le malgache."],
    ["Que dit-on pour se saluer en malgache ?", "« Salama ! »"],
    ["Que porte la maman de Tiana ?", "Un lamba, le tissu traditionnel."],
    ["Que met le papa pour aller aux champs ?", "Son chapeau."],
    ["Cite deux éléments du mode de vie de la famille.", "Le riz au repas et les zébus (aussi la maison en briques)."],
    ["D'où vient la famille de Tiana ?", "Des Hautes Terres."],
  ],
  synthese: "Donc, chaque famille a ses caractéristiques socioculturelles : son origine, sa langue, ses vêtements comme le lamba et le chapeau, ses coiffures et son mode de vie — la maison, la nourriture, les animaux. Ces caractéristiques font la richesse de notre pays.",
  appExos: [
    {
      consigne: "Complète avec les mots : malgache — lamba — riz — origine.",
      items: [
        "1. La langue que nous parlons à la maison est le ……… .",
        "2. Le tissu traditionnel que portent les femmes est le ……… .",
        "3. Notre plat principal à chaque repas est le ……… .",
        "4. La région d'où vient ma famille est son ……… .",
      ],
      corrige: ["**malgache** / **lamba** / **riz** / **origine**."],
    },
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Cite trois caractéristiques socioculturelles d'une famille.",
        "2. Comment salue-t-on en malgache ?",
        "3. Que porte le papa de Tiana pour les champs ?",
        "4. Pourquoi les modes de vie sont-ils différents d'une famille à l'autre ?",
      ],
      corrige: [
        "1. Par exemple : **la langue, le vêtement et le mode de vie** (aussi l'origine, les coiffures).",
        "2. On dit **« Salama ! »**.",
        "3. **Son chapeau**.",
        "4. Parce que **chaque famille a son origine et ses coutumes**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Toutes les familles de Madagascar vivent exactement de la même manière.",
        "2. Le lamba est un vêtement traditionnel.",
        "3. La langue malgache nous unit dans tout le pays.",
        "4. Le mode de vie comprend la maison et la nourriture.",
      ],
      corrige: [
        "1. **Faux** : **chaque famille a ses caractéristiques**.",
        "2. **Vrai**.",
        "3. **Vrai**.",
        "4. **Vrai**.",
      ],
    },
    {
      consigne: "Relie chaque caractéristique de la liste 1 à son exemple de la liste 2 par une flèche.",
      items: [
        "Liste 1 : 1. la langue — 2. le vêtement — 3. le mode de vie — 4. l'origine",
        "Liste 2 : a. le riz au repas et les zébus — b. la région d'où vient la famille — c. le malgache — d. le lamba et le chapeau",
      ],
      corrige: [
        "1 → **c** : la langue, c'est le malgache.",
        "2 → **d** : le vêtement, c'est le lamba et le chapeau.",
        "3 → **a** : le mode de vie, c'est le riz et les zébus.",
        "4 → **b** : l'origine, c'est la région d'où vient la famille.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Les caractéristiques socioculturelles",
        paras: [
          "Chaque famille, chaque localité a sa manière de vivre : ce sont ses caractéristiques socioculturelles.",
          "Elles comprennent l'origine de la famille, sa langue, ses vêtements, ses coiffures et son mode de vie.",
        ],
      },
      {
        titre: "2. La langue et les vêtements",
        paras: [
          "Le malgache est notre langue commune : elle nous unit d'un bout à l'autre de l'île.",
          "Le lamba, ce beau tissu, accompagle les femmes ; le chapeau protège les hommes aux champs.",
        ],
        sous: [
          {
            titre: "a. Le mode de vie",
            paras: [
              "Le mode de vie, c'est la manière de vivre au quotidien : la maison, la nourriture, les animaux, les métiers.",
              "Dans nos localités : le riz à chaque repas, le zébu à l'étable, la rizière au versant.",
            ],
          },
        ],
      },
      {
        titre: "3. La richesse de nos différences",
        paras: [
          "Les familles viennent de régions différentes : les unes des Hautes Terres, les autres de la côte.",
          "Ces différences de langues, de vêtements et de coutumes font la richesse de Madagascar.",
        ],
        exemples: [
          "Tiana présente sa famille : origine des Hautes Terres, langue malgache, lamba de maman, chapeau de papa, riz et zébus.",
        ],
      },
    ],
  },
  motsCles: ["caractéristiques socioculturelles", "langue", "vêtement", "mode de vie", "origine"],
  questionsRevision: [
    ["Cite trois caractéristiques socioculturelles d'une famille.", "L'origine, la langue et le vêtement (aussi le mode de vie)."],
    ["Qu'est-ce que le mode de vie ?", "C'est la manière de vivre au quotidien : la maison, la nourriture, les métiers."],
  ],
};

const S67 = {
  numero: 67, total: TOTAL,
  titre: "Les activités de la population : panorama",
  theme: "L'Homme et les activités quotidiennes",
  objectif: "Être capable de nommer les grandes activités de la population d'un village ou d'une ville.",
  image: { id: "geot4_activites", legende: "Les six grandes activités : agriculture, pêche, artisanat, industrie, commerce, transport." },
  scene: { file: "scene_s67_panorama.jpg", mode: "document", legende: "Document : les six activités de la population, en un seul paysage." },
  miseEnSituation: {
    texte: "Le maître apporte six grandes photos et les étale au tableau. « Regardez bien ! Ici, des rizières en terrasses ; là, une pirogue au matin ; ici, une tisserande au travail ; là, une usine de riz ; un marché coloré ; et un taxi-brousse chargé ! À votre avis, que font toutes ces personnes ? » La classe répond d'une seule voix : « Elles travaillent ! »",
    question: "Que font toutes les personnes des six photos ?",
    ra: "Elles travaillent : ce sont les activités de la population.",
    support: "Schéma des six grandes activités (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les activités de la population : panorama ». Après cette séance, vous serez capables de nommer les grandes activités de la population d'un village ou d'une ville.",
  observation: "Regardez et observez bien les six panneaux : l'agriculture, la pêche, l'artisanat, l'industrie, le commerce et le transport.",
  supportObservation: "Schéma des six grandes activités (page Leçon)",
  analyse: [
    ["Que fait le cultivateur sur la première photo ?", "Il cultive la terre : c'est l'agriculture."],
    ["Que fait le pêcheur ?", "Il pêche le poisson avec sa pirogue et son filet."],
    ["Que fait la tisserande ?", "Elle tisse des étoffes : c'est l'artisanat."],
    ["Que fait l'usine ?", "Elle transforme le riz : c'est l'industrie."],
    ["Que fait le marchand au marché ?", "Il vend et on lui achète : c'est le commerce."],
    ["Et le taxi-brousse ?", "Il transporte les voyageurs : c'est le transport."],
  ],
  synthese: "Donc, la population d'un village ou d'une ville exerce six grandes activités : l'agriculture (cultiver), la pêche, l'artisanat (fabriquer avec ses mains), l'industrie (transformer en usine), le commerce (acheter et vendre) et le transport (déplacer personnes et marchandises).",
  appExos: [
    {
      consigne: "Complète avec les mots : agriculture — pêche — artisanat — industrie — commerce — transport.",
      items: [
        "1. Cultiver la terre, c'est l'……… .",
        "2. Prendre le poisson, c'est la ……… .",
        "3. Tisser un lamba, c'est l'……… .",
        "4. Transformer le riz en usine, c'est l'……… .",
        "5. Vendre au marché, c'est le ……… .",
        "6. Conduire le taxi-brousse, c'est le ……… .",
      ],
      corrige: ["**agriculture** / **pêche** / **artisanat** / **industrie** / **commerce** / **transport**."],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Les activités servent à nourrir et faire vivre les familles.",
        "2. Une ville n'a aucune activité.",
        "3. Le transport déplace les marchandises.",
        "4. L'artisanat se fait en usine.",
      ],
      corrige: [
        "1. **Vrai**.",
        "2. **Faux** : la ville a **beaucoup d'activités** : commerce, industrie, transport…",
        "3. **Vrai**.",
        "4. **Faux** : l'artisanat se fait **avec les mains**, à l'atelier ou à la maison.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Relie chaque personne de la liste 1 à son activité de la liste 2 par une flèche.",
      items: [
        "Liste 1 : 1. le cultivateur — 2. la tisserande — 3. la marchande — 4. le chauffeur du taxi-brousse",
        "Liste 2 : a. le commerce — b. le transport — c. l'agriculture — d. l'artisanat",
      ],
      corrige: [
        "1 → **c** : le cultivateur fait de l'agriculture.",
        "2 → **d** : la tisserande fait de l'artisanat.",
        "3 → **a** : la marchande fait du commerce.",
        "4 → **b** : le chauffeur fait du transport.",
      ],
    },
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Cite les six grandes activités de la population.",
        "2. Que produit l'agriculture ?",
        "3. Où travaille l'ouvrier ?",
        "4. Pourquoi les habitants travaillent-ils ?",
      ],
      corrige: [
        "1. **L'agriculture, la pêche, l'artisanat, l'industrie, le commerce et le transport**.",
        "2. **Le riz, le manioc, le maïs, les légumes…**",
        "3. **À l'usine**.",
        "4. **Pour nourrir leurs familles et faire vivre leur localité**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Travailler pour vivre",
        paras: [
          "Les habitants d'un village ou d'une ville exercent des activités : ils travaillent pour nourrir leurs familles.",
          "Les activités font vivre la localité entière.",
        ],
      },
      {
        titre: "2. Les six grandes activités",
        paras: [
          "L'agriculture : cultiver le riz, le manioc, le maïs et les légumes.",
          "La pêche : prendre le poisson des rivières, des lacs et de la mer.",
          "L'artisanat : fabriquer avec ses mains des paniers, des nattes, des pots, des lamba.",
          "L'industrie : transformer les produits dans les usines — le riz décortiqué, le savon, le tissu.",
          "Le commerce : acheter et vendre au marché.",
          "Le transport : déplacer personnes et marchandises.",
        ],
        sous: [
          {
            titre: "a. Village ou ville",
            paras: [
              "Le village vit surtout de l'agriculture, de l'élevage et de la pêche.",
              "La ville rassemble le commerce, l'industrie et les services.",
            ],
          },
        ],
      },
      {
        titre: "3. Toutes liées",
        paras: [
          "Les activités ont besoin les unes des autres : le cultivateur vend sa récolte au marché ; le camion l'emporte en ville.",
          "Sans transport, pas de commerce ; sans agriculture, rien à vendre !",
        ],
        exemples: [
          "Le matin, la marchande achète les brèdes chez le cultivateur, les transporte en taxi-brousse et les vend au marché de la ville.",
        ],
      },
    ],
  },
  motsCles: ["activité", "travailler", "population"],
  questionsRevision: [
    ["Cite les six grandes activités de la population.", "L'agriculture, la pêche, l'artisanat, l'industrie, le commerce et le transport."],
    ["Pourquoi les habitants exercent-ils des activités ?", "Pour nourrir leurs familles et faire vivre leur localité."],
  ],
};

const S68 = {
  numero: 68, total: TOTAL,
  titre: "L'agriculture",
  theme: "L'Homme et les activités quotidiennes",
  objectif: "Être capable de décrire l'agriculture et ses grandes étapes.",
  image: { id: "geot4_agriculture", legende: "L'agriculture : le labourage, le repiquage du riz et la récolte." },
  scene: { file: "scene_s68_agriculture.jpg", mode: "document", legende: "Document : l'agriculture — le labourage, le repiquage et la récolte du riz." },
  miseEnSituation: {
    texte: "À l'aube, Rivo accompagne son père à la rizière. Le zébu tire la charrue, la terre se retourne, noire et humide. « Voilà le labourage », dit le père. Dans quelques semaines viendront le repiquage des jeunes plants de riz, puis, après la saison des pluies, la grande récolte. « Sans l'agriculture, rappelle le père, personne n'aurait de riz dans son assiette ! »",
    question: "Quelles sont les étapes du travail du riz que Rivo découvre ?",
    ra: "Le labourage, le repiquage des jeunes plants, puis la récolte.",
    support: "Schéma de l'agriculture (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « L'agriculture ». Après cette séance, vous serez capables de décrire l'agriculture et ses grandes étapes.",
  observation: "Regardez et observez bien le dessin : les rizières en terrasses, le labourage avec le zébu, le repiquage et la récolte.",
  supportObservation: "Schéma de l'agriculture (page Leçon)",
  analyse: [
    ["Que fait le zébu dans la rizière ?", "Il tire la charrue pour retourner la terre."],
    ["Comment s'appelle cette première étape ?", "C'est le labourage."],
    ["Que fait-on après le labourage ?", "On repique les jeunes plants de riz dans la rizière inondée."],
    ["Que récolte-t-on à la fin de la saison ?", "Le riz doré, en épis."],
    ["Quelles autres cultures voit-on dans nos campagnes ?", "Le manioc, le maïs, les légumes, les fruits."],
    ["Que donne l'agriculture aux habitants ?", "Elle donne la nourriture : le riz et les légumes de chaque repas."],
  ],
  synthese: "Donc, l'agriculture, c'est cultiver la terre pour produire la nourriture. Ses grandes étapes : le labourage avec le zébu, le repiquage des jeunes plants de riz, puis la récolte. L'agriculture nourrit toutes les familles : c'est la première activité de nos campagnes.",
  appExos: [
    {
      consigne: "Range les étapes du riz dans l'ordre : écris 1, 2, 3.",
      items: [
        "……… la récolte du riz doré",
        "……… le labourage avec le zébu",
        "……… le repiquage des jeunes plants",
      ],
      corrige: [
        "Le labourage : **1** / le repiquage : **2** / la récolte : **3**.",
      ],
    },
    {
      consigne: "Complète avec les mots : charrue — repiquage — récolte — nourrir.",
      items: [
        "1. Le zébu tire la ……… pour retourner la terre.",
        "2. On plante les jeunes plants de riz au ……… .",
        "3. On coupe le riz mûr à la ……… .",
        "4. L'agriculture sert à ……… les familles.",
      ],
      corrige: ["**charrue** / **repiquage** / **récolte** / **nourrir**."],
    },
  ],
  evalExos: [
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. L'agriculture, c'est pêcher le poisson.",
        "2. Le labourage prépare la terre avant le repiquage.",
        "3. Le riz se récolte avant d'être repiqué.",
        "4. L'agriculture nourrit les familles.",
      ],
      corrige: [
        "1. **Faux** : c'est **cultiver la terre**.",
        "2. **Vrai**.",
        "3. **Faux** : on repique d'abord, **on récolte après**.",
        "4. **Vrai**.",
      ],
    },
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que l'agriculture ?",
        "2. Qui tire la charrue au labourage ?",
        "3. Cite trois cultures de nos campagnes.",
        "4. Pourquoi l'agriculture est-elle la première activité des campagnes ?",
      ],
      corrige: [
        "1. C'est **cultiver la terre pour produire la nourriture**.",
        "2. **Le zébu**.",
        "3. **Le riz, le manioc et le maïs** (aussi les légumes, les fruits).",
        "4. Parce qu'**elle nourrit toutes les familles**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La définition de l'agriculture",
        paras: [
          "L'agriculture, c'est cultiver la terre pour produire la nourriture.",
          "C'est la première activité de nos campagnes.",
        ],
      },
      {
        titre: "2. Les étapes du riz",
        paras: [
          "Le labourage : le zébu tire la charrue, la terre se retourne.",
          "Le repiquage : on plante les jeunes plants de riz dans la rizière inondée.",
          "La récolte : après la saison des pluies, on coupe le riz doré et on le bat pour en tirer les grains.",
        ],
        sous: [
          {
            titre: "a. Les autres cultures",
            paras: [
              "Le manioc et le maïs sur les collines, les légumes dans les jardins, les mangues et les goyaves dans les vergers.",
              "Certaines régions cultivent aussi la vanille, le café et les girofles pour vendre au loin.",
            ],
          },
        ],
      },
      {
        titre: "3. L'agriculture fait vivre",
        paras: [
          "Le riz de chaque assiette vient du travail des cultivateurs.",
          "L'agriculture nourrit les familles et remplit les marchés.",
        ],
        exemples: [
          "À l'aube, Rivo et son père labourent ; dans quelques mois, la rizière dorée offrira sa récolte.",
        ],
      },
    ],
  },
  motsCles: ["agriculture", "labourage", "repiquage", "récolte", "cultivateur"],
  questionsRevision: [
    ["Qu'est-ce que l'agriculture ?", "C'est cultiver la terre pour produire la nourriture."],
    ["Cite les trois étapes du riz.", "Le labourage, le repiquage et la récolte."],
  ],
};

module.exports = { topics: [S63, S64, S65, S66, S67, S68] };
