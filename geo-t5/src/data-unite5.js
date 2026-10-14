// data-unite5.js — UNITÉ 5 : LA VIE RURALE ET LA VIE URBAINE (Séances 62 à 68)
// Contenu rédactionnel conforme au Programme d'études officiel T5 — Géographie
const TOTAL = 76;

const S62 = {
  numero: 62, total: TOTAL,
  titre: "La vie rurale : les caractéristiques",
  theme: "La vie rurale et la vie urbaine",
  objectif: "Être capable de définir le milieu rural et de citer ses caractéristiques.",
  image: { id: "geo5_vie_rurale", legende: "Le milieu rural : un village, des rizières, la nature tout autour." },
  scene: { file: "scene_s62_vie_rurale.jpg", mode: "document", legende: "Document : le village de Faniry au lever du jour, entre rizières et prairies." },
  revisionOuverture: [
    ["Cite trois gestes pour préserver les ressources naturelles.", "Reboiser, protéger par des parcs, pêcher avec mesure."],
    ["Qu'est-ce qu'une ressource renouvelable ?", "Une ressource qui se renouvelle si on la protège."],
  ],
  miseEnSituation: {
    texte: "Faniry habite la ville, mais chaque vacances, il rejoint le village de sa grand-mère, au bout d'une piste de terre. Ici, pas d'immeubles : des cases et des maisons espacées, entourées de rizières et de prairies. Le matin, les coqs chantent, les femmes pilent le riz, les zébus partent au pâturage. « Ici, c'est la campagne, dit la grand-mère. La vie est simple : nous vivons au rythme des champs. »",
    question: "Qu'est-ce que le milieu rural et comment le reconnaît-on ?",
    ra: "Le milieu rural est la campagne : peu d'habitants, des villages et des hameaux, la nature tout autour, et des habitants qui vivent surtout des travaux des champs.",
    support: "Schéma de la vie rurale (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « La vie rurale : les caractéristiques ». Après cette séance, vous serez capables de définir le milieu rural et de citer ses caractéristiques.",
  observation: "Observez bien le schéma : un village de campagne et ses quatre caractéristiques.",
  supportObservation: "Schéma de la vie rurale (page Leçon)",
  analyse: [
    ["Qu'est-ce que le milieu rural ?", "C'est la campagne : l'ensemble des villages et des terres cultivées, loin des grandes villes."],
    ["Comment sont les maisons à la campagne ?", "Elles sont espacées, en cases ou en maisons, groupées en villages et en hameaux."],
    ["Comment est la population rurale ?", "Elle est peu nombreuse et dispersée sur un grand territoire."],
    ["Que trouve-t-on tout autour des villages ?", "La nature : rizières, prairies, forêts, rivières et collines."],
    ["Comment vivent la plupart des ruraux ?", "Des travaux des champs : agriculture, élevage, pêche et petit artisanat."],
    ["Comment est la vie quotidienne à la campagne ?", "Calme, au rythme des saisons et des travaux, avec beaucoup d'entraide."],
  ],
  synthese: "Donc, le milieu rural, c'est la campagne : peu d'habitants dispersés dans des villages et des hameaux, la nature tout autour, des familles qui vivent des champs, et un rythme de vie calme et solidaire.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que le milieu rural ?",
        "2. Comment sont les maisons à la campagne ?",
        "3. De quoi vivent la plupart des ruraux ?",
        "4. Comment est le rythme de vie à la campagne ?",
      ],
      corrige: [
        "1. C'est la **campagne** : villages et terres cultivées loin des grandes villes.",
        "2. **Espacées**, groupées en **villages** et **hameaux**.",
        "3. Des **travaux des champs** : agriculture, élevage, pêche, artisanat.",
        "4. **Calme**, au rythme des **saisons** et des travaux.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. À la campagne, les maisons sont souvent entassées.",
        "2. La population rurale est dispersée.",
        "3. La nature entoure les villages.",
        "4. Les coqs réveillent Faniry au village.",
      ],
      corrige: [
        "1. **Faux** : elles sont espacées.",
        "2. **Vrai** : sur un grand territoire.",
        "3. **Vrai** : rizières, prairies, forêts.",
        "4. **Vrai** : et les femmes pilent le riz.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : campagne — hameaux — champs — saisons.",
      items: [
        "Le milieu rural, c'est la ……… .",
        "Les maisons se groupent en villages et en ……… .",
        "Les ruraux vivent surtout des travaux des ……… .",
        "La vie suit le rythme des ……… .",
      ],
      corrige: [
        "la **campagne** / en **hameaux** / des **champs** / des **saisons**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le milieu rural est : A. la campagne — B. la ville — C. l'usine",
        "2. À la campagne, la population est : A. très dense — B. peu nombreuse et dispersée — C. absente",
        "3. Un hameau est : A. un très gros immeuble — B. un petit groupe de maisons — C. une machine",
        "4. La grand-mère de Faniry vit : A. en ville — B. au village — C. dans un avion",
      ],
      corrige: [
        "1. Réponse **A**.",
        "2. Réponse **B**.",
        "3. Réponse **B** : quelques maisons à l'écart.",
        "4. Réponse **B** : au bout d'une piste de terre.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La définition du milieu rural",
        paras: [
          "Le milieu rural est la campagne : l'ensemble des villages, des hameaux et des terres qui s'étendent hors des villes.",
          "On l'appelle aussi milieu de vie rural, par opposition au milieu urbain, la ville.",
        ],
        exemples: [
          "Le village de la grand-mère de Faniry, au bout de sa piste de terre.",
        ],
      },
      {
        titre: "2. Un paysage ouvert et nature",
        paras: [
          "À la campagne, la nature domine : rizières en terrasses, prairies, forêts, rivières et collines.",
          "Les maisons, en bois, en brique ou en matériaux, restent basses et espacées ; les chemins de terre relient les hameaux.",
        ],
        exemples: [
          "Le matin, les zébus de Faniry partent au pâturage dans la prairie.",
        ],
      },
      {
        titre: "3. Une vie au rythme des champs",
        paras: [
          "Les familles rurales vivent surtout de l'agriculture, de l'élevage, de la pêche et du petit artisanat.",
          "La vie y est calme et solidaire : on s'entraide aux champs, on se retrouve aux marchés et aux fêtes du village.",
        ],
        exemples: [
          "Au moment du repiquage, tous les voisins travaillent ensemble dans les rizières.",
        ],
      },
    ],
  },
  motsCles: ["milieu rural", "campagne", "village", "hameau", "dispersée", "entraide"],
  questionsRevision: [
    ["Qu'est-ce que le milieu rural ?", "La campagne : villages et terres cultivées loin des villes."],
    ["Cite deux caractéristiques de la vie rurale.", "Peu d'habitants dispersés et la nature tout autour (aussi : vie des champs, calme)."],
  ],
};

const S63 = {
  numero: 63, total: TOTAL,
  titre: "Les activités en milieu rural",
  theme: "La vie rurale et la vie urbaine",
  objectif: "Être capable de classer les activités rurales dans les trois secteurs (primaire, secondaire, tertiaire).",
  image: { id: "geo5_act_rurales", legende: "Les trois secteurs d'activités à la campagne : produire, transformer, rendre service." },
  scene: { file: "scene_s63_act_rurales.jpg", mode: "document", legende: "Document : repiquage du riz, tissage du raphia, pêche à la nasse — les métiers de la campagne." },
  revisionOuverture: [
    ["Qu'est-ce que le milieu rural ?", "La campagne : villages et terres cultivées loin des villes."],
    ["Cite deux caractéristiques de la vie rurale.", "Peu d'habitants dispersés et la nature tout autour."],
  ],
  miseEnSituation: {
    texte: "Dans le village de Soa, chacun a son métier. Son père cultive le riz et élève des zébus. Sa mère tresse des paniers en raphia et les vend au marché. Son oncle fait tourner le moulin à décortiquer le riz du village. Sa tante est institutrice à l'école publique, et son cousin conduit le taxi-brousse deux fois par semaine. « Cinq métiers, et pas un seul pareil ! », remarque Soa.",
    question: "Comment classer les métiers de la campagne ?",
    ra: "En trois secteurs : le primaire (produire : agriculture, élevage, pêche), le secondaire (transformer : artisanat, moulin) et le tertiaire (servir : institutrice, chauffeur).",
    support: "Schéma des trois secteurs (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les activités en milieu rural ». Après cette séance, vous serez capables de classer les activités de la campagne dans les trois secteurs.",
  observation: "Observez bien le schéma : trois colonnes montrent les secteurs primaire, secondaire et tertiaire à la campagne.",
  supportObservation: "Schéma des trois secteurs (page Leçon)",
  analyse: [
    ["Que veut dire le secteur primaire ?", "C'est le secteur qui produit les matières premières : agriculture, élevage, pêche, forêt."],
    ["Quels métiers du village de Soa sont primaires ?", "Le père qui cultive le riz et élève des zébus."],
    ["Que veut dire le secteur secondaire ?", "C'est le secteur qui transforme les matières premières en produits."],
    ["Quels exemples de métiers secondaires à la campagne ?", "La mère qui tresse des paniers, l'oncle du moulin à riz, les briquetiers."],
    ["Que veut dire le secteur tertiaire ?", "C'est le secteur des services : il ne produit ni ne transforme, il rend service."],
    ["Quels métiers tertiaires trouve-t-on à la campagne ?", "L'institutrice, l'infirmier, les marchands, le chauffeur de taxi-brousse, le coiffeur."],
  ],
  synthese: "Donc, les activités rurales se classent en trois secteurs : le primaire qui produit (agriculture, élevage, pêche), le secondaire qui transforme (artisanat, moulin à riz) et le tertiaire qui rend service (école, santé, commerce, transport).",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Que fait le secteur primaire ?",
        "2. Que fait le secteur secondaire ?",
        "3. Que fait le secteur tertiaire ?",
        "4. Dans quel secteur se trouve l'institutrice ?",
      ],
      corrige: [
        "1. Il **produit les matières premières** (agriculture, élevage, pêche).",
        "2. Il **transforme** les matières premières en produits.",
        "3. Il **rend des services** aux gens.",
        "4. Dans le secteur **tertiaire**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le cultivateur de riz travaille dans le primaire.",
        "2. Le moulin à riz est une activité tertiaire.",
        "3. Le coiffeur du village rend un service.",
        "4. Tresser des paniers est une activité secondaire.",
      ],
      corrige: [
        "1. **Vrai** : il produit une matière première.",
        "2. **Faux** : c'est du secondaire, il transforme le paddy en riz.",
        "3. **Vrai** : secteur tertiaire.",
        "4. **Vrai** : il transforme le raphia en panier.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : primaire — secondaire — tertiaire — produits.",
      items: [
        "L'agriculture et la pêche sont du secteur ……… .",
        "L'artisanat et le moulin à riz sont du secteur ……… .",
        "L'infirmier et le marchand sont du secteur ……… .",
        "Le secondaire transforme les matières premières en ……… .",
      ],
      corrige: [
        "secteur **primaire** / secteur **secondaire** / secteur **tertiaire** / en **produits**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Élever des zébus est : A. primaire — B. secondaire — C. tertiaire",
        "2. Le chauffeur de taxi-brousse travaille : A. dans les champs — B. dans les services — C. à l'usine",
        "3. Le père de Soa cultive : A. du riz — B. des voitures — C. des livres",
        "4. Le moulin de l'oncle transforme : A. le paddy en riz — B. le riz en eau — C. rien",
      ],
      corrige: [
        "1. Réponse **A** : production d'élevage.",
        "2. Réponse **B** : le transport est un service.",
        "3. Réponse **A**.",
        "4. Réponse **A** : il décortique le paddy.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Le secteur primaire : produire",
        paras: [
          "À la campagne, le secteur primaire est le plus important : il réunit l'agriculture, l'élevage, la pêche et l'exploitation de la forêt.",
          "Il nourrit la famille et le pays : riz, manioc, maïs, viande, poisson.",
        ],
        exemples: [
          "Le père de Soa cultive le riz et mène ses zébus au pâturage.",
        ],
      },
      {
        titre: "2. Le secteur secondaire : transformer",
        paras: [
          "Le secteur secondaire transforme les matières premières en produits utilisables.",
          "À la campagne, c'est surtout l'artisanat : paniers et nattes en raphia, poteries, savon, huile, briques — et les moulins à décortiquer le riz.",
        ],
        exemples: [
          "L'oncle de Soa fait tourner le moulin du village : le paddy devient du riz blanc.",
        ],
      },
      {
        titre: "3. Le secteur tertiaire : rendre service",
        paras: [
          "Le secteur tertiaire regroupe tous les métiers qui rendent service.",
          "Même au village, on compte l'instituteur, l'infirmier, les marchands, le coiffeur, le réparateur et le chauffeur de taxi-brousse.",
        ],
        exemples: [
          "Deux fois par semaine, le cousin de Soa conduit le taxi-brousse vers la ville.",
        ],
      },
    ],
  },
  motsCles: ["secteur primaire", "secteur secondaire", "secteur tertiaire", "matières premières", "artisanat", "services"],
  questionsRevision: [
    ["Cite les trois secteurs d'activités.", "Le primaire (produire), le secondaire (transformer), le tertiaire (servir)."],
    ["Dans quel secteur met-on le moulin à riz ? Et l'infirmier ?", "Le moulin à riz : secondaire ; l'infirmier : tertiaire."],
  ],
};

const S64 = {
  numero: 64, total: TOTAL,
  titre: "La vie urbaine : les caractéristiques",
  theme: "La vie rurale et la vie urbaine",
  objectif: "Être capable de définir le milieu urbain et de citer ses caractéristiques.",
  image: { id: "geo5_vie_urbaine", legende: "Le milieu urbain : immeubles, rues animées, services nombreux." },
  scene: { file: "scene_s64_vie_urbaine.jpg", mode: "document", legende: "Document : une rue d'Antananarivo en fin d'après-midi — la ville qui s'anime." },
  revisionOuverture: [
    ["Cite les trois secteurs d'activités.", "Le primaire, le secondaire et le tertiaire."],
    ["Dans quel secteur met-on le moulin à riz ?", "Dans le secondaire."],
  ],
  miseEnSituation: {
    texte: "Rakoto passe une semaine chez son oncle à Antananarivo. Quel changement ! Des immeubles de plusieurs étages, des rues bondées de voitures et de taxis-be, des boutiques qui s'allument dès la nuit, des marchands de brochettes à chaque coin. « Ici, on ne compte plus les habitants, sourit l'oncle. C'est la ville : tout est grand, tout bouge, tout est pressé. » Le soir, Rakoto entend la rumeur de la circulation au lieu des coqs du village.",
    question: "Qu'est-ce que le milieu urbain et comment le reconnaît-on ?",
    ra: "Le milieu urbain est la ville : beaucoup d'habitants serrés sur un petit territoire, des immeubles, des rues animées, des services nombreux et un rythme de vie pressé.",
    support: "Schéma de la vie urbaine (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « La vie urbaine : les caractéristiques ». Après cette séance, vous serez capables de définir le milieu urbain et de citer ses caractéristiques.",
  observation: "Observez bien le schéma : une rue de ville et ses quatre caractéristiques.",
  supportObservation: "Schéma de la vie urbaine (page Leçon)",
  analyse: [
    ["Qu'est-ce que le milieu urbain ?", "C'est la ville : un espace très peuplé, bâti et animé, avec des activités autres que l'agriculture."],
    ["Comment est la population en ville ?", "Très nombreuse et serrée : la densité est forte."],
    ["Comment sont les constructions en ville ?", "Hautes et serrées : immeubles, maisons en rangée, bureaux, boutiques."],
    ["Quels services trouve-t-on en ville ?", "Des écoles, des hôpitaux, des banques, des marchés, l'électricité, l'eau courante."],
    ["Comment est le rythme de vie urbain ?", "Pressé : horaires, circulation, files d'attente."],
    ["Quelle est la plus grande ville de Madagascar ?", "Antananarivo, la capitale, où habite l'oncle de Rakoto."],
  ],
  synthese: "Donc, le milieu urbain, c'est la ville : une population très nombreuse et serrée, des immeubles et des rues animées, des services nombreux — écoles, hôpitaux, banques — et un rythme de vie pressé. Antananarivo en est le premier exemple.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que le milieu urbain ?",
        "2. Comment est la population en ville ?",
        "3. Cite trois services que l'on trouve en ville.",
        "4. Quelle est la plus grande ville de Madagascar ?",
      ],
      corrige: [
        "1. C'est **la ville** : un espace très peuplé, bâti et animé.",
        "2. **Très nombreuse** et **serrée** : forte densité.",
        "3. Les **écoles**, les **hôpitaux**, les **banques** (aussi marchés, eau, électricité).",
        "4. **Antananarivo**, la capitale.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. En ville, la densité de population est faible.",
        "2. Les immeubles sont des constructions hautes.",
        "3. La ville offre de nombreux services.",
        "4. Rakoto entend les coqs à Antananarivo.",
      ],
      corrige: [
        "1. **Faux** : elle est forte.",
        "2. **Vrai**.",
        "3. **Vrai**.",
        "4. **Faux** : il entend la circulation.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : ville — densité — services — pressé.",
      items: [
        "Le milieu urbain, c'est la ……… .",
        "La population y est serrée : la ……… est forte.",
        "Écoles, hôpitaux, banques : ce sont des ……… .",
        "Le rythme de vie urbain est ……… .",
      ],
      corrige: [
        "la **ville** / la **densité** / des **services** / est **pressé**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le milieu urbain est : A. la ville — B. la forêt — C. la rizière",
        "2. Antananarivo est : A. un village — B. la capitale — C. une île",
        "3. Un immeuble est : A. une maison d'un étage — B. une construction haute à plusieurs étages — C. une pirogue",
        "4. La nuit, Rakoto entend : A. la circulation — B. les coqs — C. le silence total",
      ],
      corrige: [
        "1. Réponse **A**.",
        "2. Réponse **B**.",
        "3. Réponse **B**.",
        "4. Réponse **A**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La définition du milieu urbain",
        paras: [
          "Le milieu urbain est la ville : un espace bâti et très peuplé, où les habitants travaillent surtout dans le commerce, l'industrie et les services.",
          "Il s'oppose au milieu rural, la campagne.",
        ],
        exemples: [
          "Antananarivo, Toamasina et Fianarantsoa sont des villes.",
        ],
      },
      {
        titre: "2. Un paysage de pierre et de mouvement",
        paras: [
          "En ville, les constructions sont hautes et serrées : immeubles, bureaux, boutiques, maisons en rangée.",
          "Les rues sont animées : voitures, taxis-be, piétons pressés, marchands ambulants.",
        ],
        exemples: [
          "Rakoto voit s'allumer les boutiques dès la nuit tombée.",
        ],
      },
      {
        titre: "3. La ville des services",
        paras: [
          "La ville concentre les services : écoles et lycées, hôpitaux, banques, bureaux publics, marchés, eau courante et électricité.",
          "Mais ce confort a un prix : la vie y est chère et le rythme pressé, au son des horaires et des klaxons.",
        ],
        exemples: [
          "L'oncle de Rakoto part tôt au bureau et rentre tard.",
        ],
      },
    ],
  },
  motsCles: ["milieu urbain", "ville", "densité", "immeuble", "services", "capitale"],
  questionsRevision: [
    ["Qu'est-ce que le milieu urbain ?", "La ville : un espace bâti, très peuplé, aux activités de commerce, d'industrie et de services."],
    ["Cite trois services urbains.", "Les écoles, les hôpitaux et les banques (aussi les marchés, l'eau, l'électricité)."],
  ],
};

const S65 = {
  numero: 65, total: TOTAL,
  titre: "Les activités en milieu urbain",
  theme: "La vie rurale et la vie urbaine",
  objectif: "Être capable de classer les activités urbaines dans les trois secteurs.",
  image: { id: "geo5_act_urbaines", legende: "Les trois secteurs en ville : maraîchage, usines et chantiers, services." },
  scene: { file: "scene_s65_act_urbaines.jpg", mode: "document", legende: "Document : chantier, boutique de tissus, bureau — les métiers de la ville." },
  revisionOuverture: [
    ["Qu'est-ce que le milieu urbain ?", "La ville : un espace bâti, très peuplé, aux activités de services."],
    ["Cite trois services urbains.", "Les écoles, les hôpitaux et les banques."],
  ],
  miseEnSituation: {
    texte: "Vela fait un exposé sur les métiers de sa ville. Son grand frère est maçon sur un chantier d'immeuble. Sa mère tient une boutique de tissus au marché d'Analakely. Sa tante est comptable dans une banque. Et dans la vallée qui borde la ville, un ami de la famille cultive des brèdes et des tomates qu'il vend chaque matin. « Alors, demande la maîtresse, dans quels secteurs travaillent-ils tous ? »",
    question: "Quelles activités trouve-t-on en ville et comment les classer ?",
    ra: "Le primaire est peu présent (maraîchage des bordures de ville), le secondaire regroupe usines et chantiers, et le tertiaire domine : boutiques, banques, transport, bureaux publics.",
    support: "Schéma des secteurs en ville (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les activités en milieu urbain ». Après cette séance, vous serez capables de classer les activités de la ville dans les trois secteurs.",
  observation: "Observez bien le schéma : en ville aussi, les trois secteurs existent — mais le tertiaire domine.",
  supportObservation: "Schéma des secteurs en ville (page Leçon)",
  analyse: [
    ["Le secteur primaire est-il important en ville ?", "Non, il est peu présent : quelques maraîchers et éleveurs de volailles en bordure de ville."],
    ["Quelles sont les activités secondaires en ville ?", "Les usines (textile, brasserie, décorticage), les ateliers et les chantiers de construction."],
    ["Pourquoi dit-on que le tertiaire domine en ville ?", "Parce que la plupart des citadins travaillent dans les services : boutiques, banques, transport, bureaux publics."],
    ["Dans quel secteur travaille le maçon ?", "Dans le secondaire : la construction transforme les matériaux en bâtiments."],
    ["Dans quel secteur travaille la comptable de banque ?", "Dans le tertiaire : la banque rend un service."],
    ["Que fait le maraîcher de la vallée ?", "Il cultive des brèdes et des tomates : c'est du primaire, aux portes de la ville."],
  ],
  synthese: "Donc, en ville, le primaire est rare (maraîchage périphérique), le secondaire regroupe usines, ateliers et chantiers, et le tertiaire domine : boutiques, banques, transport, bureaux publics, santé, école. La ville est la capitale des services.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Le secteur primaire est-il important en ville ?",
        "2. Cite deux activités secondaires urbaines.",
        "3. Pourquoi le tertiaire domine-t-il en ville ?",
        "4. Dans quel secteur travaille la vendeuse de tissus ?",
      ],
      corrige: [
        "1. **Non**, peu présent : quelques **maraîchers** en bordure de ville.",
        "2. Les **usines** et les **chantiers** de construction.",
        "3. Parce que la plupart des citadins travaillent dans les **services**.",
        "4. Dans le **tertiaire** (le commerce).",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le maçon travaille dans le tertiaire.",
        "2. Les usines textiles sont du secteur secondaire.",
        "3. La banque rend un service.",
        "4. Le maraîcher cultive en ville centre.",
      ],
      corrige: [
        "1. **Faux** : la construction est du secondaire.",
        "2. **Vrai**.",
        "3. **Vrai** : tertiaire.",
        "4. **Faux** : en bordure, dans les vallées périphériques.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : maraîchers — chantiers — services — tertiaire.",
      items: [
        "En bordure de ville, quelques ……… cultivent des légumes.",
        "Les maçons travaillent sur des ……… .",
        "Boutiques, banques, transport : ce sont des ……… .",
        "En ville, le secteur ……… domine.",
      ],
      corrige: [
        "quelques **maraîchers** / des **chantiers** / des **services** / le secteur **tertiaire**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. La brasserie de la ville est : A. primaire — B. secondaire — C. tertiaire",
        "2. La comptable de Vela travaille : A. dans une banque — B. aux champs — C. sur un chantier",
        "3. Le tertiaire en ville, c'est surtout : A. le plus gros employeur — B. absent — C. interdit",
        "4. Les brèdes et tomates de l'ami viennent : A. des vallées près de la ville — B. de la lune — C. d'un immeuble",
      ],
      corrige: [
        "1. Réponse **B** : elle transforme (boisson).",
        "2. Réponse **A**.",
        "3. Réponse **A** : la majorité des emplois urbains.",
        "4. Réponse **A** : le maraîchage périurbain.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Un primaire discret",
        paras: [
          "En ville, on ne laboure pas de grandes rizières : le secteur primaire y est discret.",
          "Il se réfugie en bordure de ville : maraîchers des vallées, éleveurs de volailles et de porcs, planteurs de brèdes.",
        ],
        exemples: [
          "L'ami de la famille de Vela vend ses tomates chaque matin aux ménagères.",
        ],
      },
      {
        titre: "2. Le secondaire urbain : usines et chantiers",
        paras: [
          "Les villes brassent les activités secondaires : usines textiles, brasseries, décorticage du riz, imprimeries, ateliers de menuiserie et de mécanique.",
          "Et partout, les chantiers de construction bâtissent les quartiers de demain.",
        ],
        exemples: [
          "Le grand frère de Vela est maçon sur un chantier d'immeuble.",
        ],
      },
      {
        titre: "3. Le tertiaire, roi de la ville",
        paras: [
          "La plupart des citadins travaillent dans les services : boutiques et marchés, banques et assurances, transport et taxis-be, restaurants, bureaux publics, écoles et hôpitaux.",
          "Le tertiaire est le premier pourvoyeur d'emplois urbains.",
        ],
        exemples: [
          "La mère de Vela tient sa boutique de tissus ; sa tante est comptable à la banque.",
        ],
      },
    ],
  },
  motsCles: ["maraîchage", "usine", "chantier", "services", "services publics"],
  questionsRevision: [
    ["Quel secteur domine en ville et pourquoi ?", "Le tertiaire, car la plupart des citadins travaillent dans les services."],
    ["Où trouve-t-on le primaire en ville ?", "En bordure de ville : maraîchage et petit élevage."],
  ],
};

const S66 = {
  numero: 66, total: TOTAL,
  titre: "La ville et la campagne ont besoin l'une de l'autre",
  theme: "La vie rurale et la vie urbaine",
  objectif: "Être capable d'expliquer l'interdépendance entre la ville et la campagne.",
  image: { id: "geo5_interdependance", legende: "La campagne nourrit la ville ; la ville équipe la campagne." },
  scene: { file: "scene_s66_interdependance.jpg", mode: "document", legende: "Document : au petit matin, les camions de vivres alimentent le marché de la ville." },
  revisionOuverture: [
    ["Quel secteur domine en ville ?", "Le tertiaire, celui des services."],
    ["Où trouve-t-on le primaire en ville ?", "En bordure de ville : maraîchage et petit élevage."],
  ],
  miseEnSituation: {
    texte: "Un soir de pénurie, la ville de Rado manque de riz : les camions n'ont pas pu passer à cause des pluies. Aussitôt, les prix montent au marché, les restaurants ferment, les familles s'inquiètent. Au village, au même moment, la pompe à eau du centre est tombée en panne : il faut une pièce que seul le marchand de la ville peut fournir. « Tu vois, dit le grand-père, la ville a faim sans nous, et nous sommes bloqués sans elle. »",
    question: "Pourquoi la ville et la campagne ont-elles besoin l'une de l'autre ?",
    ra: "La ville a besoin de la campagne pour se nourrir (riz, viande, légumes) ; la campagne a besoin de la ville pour ses produits fabriqués et ses services (outils, savon, écoles, hôpitaux).",
    support: "Schéma de l'interdépendance (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « La ville et la campagne ont besoin l'une de l'autre ». Après cette séance, vous serez capables d'expliquer cette interdépendance.",
  observation: "Observez bien le schéma : deux flèches relient la ville et la campagne — l'une porte la nourriture, l'autre les équipements.",
  supportObservation: "Schéma de l'interdépendance (page Leçon)",
  analyse: [
    ["De quoi la ville a-t-elle besoin depuis la campagne ?", "De sa nourriture : riz, viande, légumes, fruits, poisson — et de ses matières premières."],
    ["Que se passe-t-il en ville quand les camions ne passent plus ?", "Les vivres manquent, les prix montent, les familles s'inquiètent."],
    ["De quoi la campagne a-t-elle besoin depuis la ville ?", "Des produits fabriqués (outils, savon, tissus) et des services (écoles, hôpitaux, bureaux publics, pièces détachées)."],
    ["Pourquoi le village de Rado était-il bloqué ?", "Parce que la pompe à eau cassée attendait une pièce qui se vend seulement en ville."],
    ["Qu'est-ce que l'interdépendance ?", "C'est le fait que deux milieux ont besoin l'un de l'autre pour vivre."],
    ["Que veut dire l'expression « les deux mains d'un même corps » ?", "Que ville et campagne sont différentes mais inséparables, comme les deux mains d'une même personne."],
  ],
  synthese: "Donc, ville et campagne sont interdépendantes : la campagne nourrit la ville de son riz, de sa viande et de ses légumes ; la ville équipe la campagne de ses produits fabriqués et de ses services. L'une ne peut pas vivre sans l'autre.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. De quoi la ville a-t-elle besoin depuis la campagne ?",
        "2. De quoi la campagne a-t-elle besoin depuis la ville ?",
        "3. Qu'est-ce que l'interdépendance ?",
        "4. Que s'est-il passé en ville pendant la pénurie ?",
      ],
      corrige: [
        "1. De sa **nourriture** : riz, viande, légumes (et ses matières premières).",
        "2. Des **produits fabriqués** et des **services** (outils, savon, écoles, hôpitaux).",
        "3. Le fait que deux milieux **ont besoin l'un de l'autre**.",
        "4. Les vivres manquaient et **les prix montaient**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. La ville peut se passer de la campagne.",
        "2. La campagne attend parfois des pièces venues de la ville.",
        "3. Les rizières nourrissent les villes.",
        "4. L'interdépendance lie les deux milieux.",
      ],
      corrige: [
        "1. **Faux** : sans la campagne, la ville a faim.",
        "2. **Vrai** : comme la pompe du village.",
        "3. **Vrai**.",
        "4. **Vrai**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : nourrir — équiper — interdépendance — mains.",
      items: [
        "La campagne sert à ……… la ville.",
        "La ville sert à ……… la campagne.",
        "Ce besoin réciproque s'appelle l'……… .",
        "Ville et campagne sont comme les deux ……… d'un même corps.",
      ],
      corrige: [
        "à **nourrir** / à **équiper** / l'**interdépendance** / les deux **mains**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Quand les camions ne passent plus : A. les prix montent en ville — B. rien ne change — C. la ville mange mieux",
        "2. La pompe du village s'est réparée grâce : A. à une pièce de la ville — B. à la pluie — C. à la lune",
        "3. La ville donne à la campagne : A. des outils et des services — B. du riz — C. des zébus",
        "4. L'interdépendance veut dire : A. besoin mutuel — B. indifférence — C. séparation",
      ],
      corrige: [
        "1. Réponse **A**.",
        "2. Réponse **A**.",
        "3. Réponse **A**.",
        "4. Réponse **A**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Sans la campagne, la ville a faim",
        paras: [
          "La ville ne produit presque pas sa nourriture : elle vit du riz, de la viande, des légumes et du poisson envoyés par la campagne.",
          "Le moindre blocage des routes fait monter les prix : la ville dépend des camions et des champs.",
        ],
        exemples: [
          "Pendant la pénurie, les restaurants de la ville de Rado ont fermé.",
        ],
      },
      {
        titre: "2. Sans la ville, la campagne manque de tout",
        paras: [
          "La campagne a besoin des produits fabriqués en ville ou importés par elle : outils, savon, tissus, carburant, pièces détachées.",
          "Elle a aussi besoin de ses services : grandes écoles, hôpitaux spécialisés, banques, bureaux publics.",
        ],
        exemples: [
          "La pompe à eau du village attendait sa pièce du marchand de la ville.",
        ],
      },
      {
        titre: "3. Deux mains d'un même corps",
        paras: [
          "Ville et campagne ne sont pas rivales : elles se complètent.",
          "Cette complémentarité s'appelle l'interdépendance : chaque milieu donne ce que l'autre ne produit pas.",
        ],
        exemples: [
          "« La ville a faim sans nous, et nous sommes bloqués sans elle », résume le grand-père de Rado.",
        ],
      },
    ],
  },
  motsCles: ["interdépendance", "complémentarité", "pénurie", "produits fabriqués", "services"],
  questionsRevision: [
    ["Qu'est-ce que l'interdépendance ?", "Le fait que la ville et la campagne ont besoin l'une de l'autre."],
    ["Que donne la campagne à la ville ? Et la ville à la campagne ?", "La campagne donne la nourriture ; la ville donne les produits fabriqués et les services."],
  ],
};

const S67 = {
  numero: 67, total: TOTAL,
  titre: "Les échanges entre la ville et la campagne",
  theme: "La vie rurale et la vie urbaine",
  objectif: "Être capable de décrire les échanges de produits, de services et de personnes entre la ville et la campagne.",
  image: { id: "geo5_echanges_ville_campagne", legende: "Les camions de vivres montent vers la ville, les marchandises en descendent, les personnes circulent." },
  scene: { file: "scene_s67_echanges.jpg", mode: "document", legende: "Document : le taxi-brousse chargé croise le camion de marchandises sur la route des deux mondes." },
  revisionOuverture: [
    ["Qu'est-ce que l'interdépendance ?", "Le fait que la ville et la campagne ont besoin l'une de l'autre."],
    ["Que donne la ville à la campagne ?", "Les produits fabriqués et les services."],
  ],
  miseEnSituation: {
    texte: "Mardi, jour de marché à Ambatolampy. Dès l'aube, les camions descendent des villages chargés de riz, de pommes de terre et de charpentes de bois ; les taxis-brousse arrivent bourrés de paysans et de leurs produits. Dans l'autre sens, les commerçants de la ville repartent avec du savon, des pagnes, des outils et des pièces détachées. Et sur la place, l'équipe mobile de santé installe sa tente pour vacciner les enfants des hameaux.",
    question: "Qu'est-ce qui circule entre la ville et la campagne ?",
    ra: "Des produits (vivres vers la ville, marchandises vers la campagne), des services (marchés, santé, écoles) et des personnes (paysans, écoliers, fonctionnaires, familles).",
    support: "Schéma des échanges (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les échanges entre la ville et la campagne ». Après cette séance, vous serez capables de décrire ce qui circule entre les deux milieux.",
  observation: "Observez bien le schéma : les camions montent et descendent ; les personnes et les services circulent aussi.",
  supportObservation: "Schéma des échanges (page Leçon)",
  analyse: [
    ["Quels produits montent de la campagne vers la ville ?", "Le riz, les légumes, la viande, les fruits, le bois et le charbon de bois."],
    ["Quels produits descendent de la ville vers la campagne ?", "Le savon, les tissus, les outils, le carburant, les pièces détachées, les médicaments."],
    ["Quels services la ville rend-elle à la campagne ?", "Les grands marchés, les hôpitaux, les équipes mobiles de santé, les lycées, les banques."],
    ["Qui sont les personnes qui circulent entre ville et campagne ?", "Les paysans qui vont vendre, les écoliers internes, les fonctionnaires, les familles en visite, les jeunes en quête de travail."],
    ["Pourquoi les marchés sont-ils des lieux d'échange privilégiés ?", "Parce que producteurs et acheteurs s'y rencontrent à date fixe pour tout vendre et tout acheter."],
    ["Que fait l'équipe mobile de santé d'Ambatolampy ?", "Elle vaccine les enfants des hameaux éloignés : le service va vers la campagne."],
  ],
  synthese: "Donc, entre ville et campagne circulent des produits (vivres vers la ville, marchandises vers la campagne), des services (marchés, santé, écoles) et des personnes (vendeurs, écoliers, fonctionnaires, familles). Les routes et les marchés font vivre ces échanges.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Quels produits montent vers la ville ?",
        "2. Quels produits descendent vers la campagne ?",
        "3. Cite deux services que la ville rend à la campagne.",
        "4. Pourquoi les paysans vont-ils au marché urbain ?",
      ],
      corrige: [
        "1. Le **riz**, les **légumes**, la **viande**, les fruits, le bois.",
        "2. Le **savon**, les **tissus**, les **outils**, le carburant, les médicaments.",
        "3. Les **grands marchés** et les **hôpitaux** (aussi écoles, équipes mobiles).",
        "4. Pour **vendre** leurs produits et **acheter** ce qui leur manque.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Les échanges vont dans un seul sens.",
        "2. Les écoliers internes circulent entre ville et campagne.",
        "3. Le carburant descend de la ville vers les villages.",
        "4. Les marchés rassemblent vendeurs et acheteurs.",
      ],
      corrige: [
        "1. **Faux** : dans les deux sens.",
        "2. **Vrai**.",
        "3. **Vrai**.",
        "4. **Vrai**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : vivres — marchandises — personnes — marchés.",
      items: [
        "Les ……… montent de la campagne vers la ville.",
        "Les ……… fabriquées descendent vers la campagne.",
        "Vendeurs, écoliers, fonctionnaires : ce sont des ……… .",
        "Les grands ……… urbains fixent les jours d'échange.",
      ],
      corrige: [
        "Les **vivres** / les **marchandises** / des **personnes** / les grands **marchés**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le jour de marché, les camions descendent des villages : A. chargés de vivres — B. vides — C. pleins de savon",
        "2. L'équipe mobile de santé : A. vaccine les enfants des hameaux — B. vend des tissus — C. construit des routes",
        "3. Les échanges se font surtout : A. par les routes et les marchés — B. par magie — C. jamais",
        "4. Les jeunes partent en ville : A. pour étudier ou travailler — B. pour rien — C. pour dormir",
      ],
      corrige: [
        "1. Réponse **A**.",
        "2. Réponse **A**.",
        "3. Réponse **A**.",
        "4. Réponse **A**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Les produits circulent",
        paras: [
          "Chaque jour, les camions et les taxis-brousse chargent la campagne : riz, brèdes, pommes de terre, fruits, volailles, bois et charbon.",
          "Ils redescendent de la ville chargés de savon, de pagnes, d'outils, de carburant, de pièces et de médicaments.",
        ],
        exemples: [
          "À Ambatolampy, le mardi, les camions de pommes de terre arrivent dès l'aube.",
        ],
      },
      {
        titre: "2. Les services circulent aussi",
        paras: [
          "La ville porte ses services vers la campagne : équipes mobiles de santé, campagnes de vaccination, lycées avec internat, banques rurales.",
          "La campagne, elle, offre à la ville ses marchés et ses produits frais.",
        ],
        exemples: [
          "La tente de vaccination installée sur la place d'Ambatolampy.",
        ],
      },
      {
        titre: "3. Les personnes circulent enfin",
        paras: [
          "Les paysans montent vendre aux marchés ; les écoliers rejoignent les internats ; les fonctionnaires partent en brousse ; les familles se rendent visite.",
          "Ces mouvements de personnes, jour après jour, nouent les liens entre les deux mondes.",
        ],
        exemples: [
          "Chaque fin de semaine, les taxis-brousse ramènent les lycéens vers leurs familles.",
        ],
      },
    ],
  },
  motsCles: ["échanges", "vivres", "marchandises", "personnes", "marché", "équipe mobile de santé"],
  questionsRevision: [
    ["Cite ce qui circule entre ville et campagne.", "Des produits, des services et des personnes."],
    ["Donne un exemple d'échange dans chaque sens.", "Le riz monte vers la ville ; le savon descend vers la campagne."],
  ],
};

const S68 = {
  numero: 68, total: TOTAL,
  titre: "Les problèmes de la vie rurale",
  theme: "La vie rurale et la vie urbaine",
  objectif: "Être capable de décrire les problèmes du milieu rural et d'expliquer l'exode rural.",
  image: { id: "geo5_problemes_ruraux", legende: "Isolement, manque d'équipements, écoles et CSB éloignés, départ des jeunes." },
  scene: { file: "scene_s68_problemes_ruraux.jpg", mode: "document", legende: "Document : la piste coupée par la crue — le village isolé attend." },
  revisionOuverture: [
    ["Cite ce qui circule entre ville et campagne.", "Des produits, des services et des personnes."],
    ["Donne un exemple d'échange dans chaque sens.", "Le riz monte vers la ville ; le savon descend vers la campagne."],
  ],
  miseEnSituation: {
    texte: "À Mandrosoa, le conseil du village dresse la liste des soucis : la piste est coupée trois mois par an à la saison des pluies ; pas d'électricité ni de robinet ; les enfants marchent deux heures pour rejoindre le collège ; le CSB le plus proche n'a pas toujours de médicaments ; et les jeunes, eux, partent un à un vers la ville. « Notre village vieillit », soupire le doyen.",
    question: "Quels sont les problèmes de la vie rurale et que provoquent-ils ?",
    ra: "L'isolement (pistes coupées), le manque d'équipements (eau, électricité), l'éloignement des écoles et des centres de santé, le manque d'emplois — d'où le départ des jeunes vers les villes : l'exode rural.",
    support: "Schéma des problèmes ruraux (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les problèmes de la vie rurale ». Après cette séance, vous serez capables de citer les difficultés des campagnes et d'expliquer l'exode rural.",
  observation: "Observez bien le schéma : quatre panneaux montrent l'isolement, le manque d'électricité, l'éloignement des services et le départ des jeunes.",
  supportObservation: "Schéma des problèmes ruraux (page Leçon)",
  analyse: [
    ["Pourquoi le village de Mandrosoa est-il isolé ?", "Parce que sa piste est coupée trois mois par an à la saison des pluies."],
    ["Quels équipements manquent au village ?", "L'électricité, l'eau courante et les robinets."],
    ["Où les enfants vont-ils au collège ?", "À deux heures de marche du village."],
    ["Qu'est-ce que le CSB ?", "Le Centre de Santé de Base, le dispensaire de la campagne."],
    ["Pourquoi les jeunes quittent-ils le village ?", "Pour trouver du travail, des études et une vie plus moderne en ville."],
    ["Comment s'appelle le départ des ruraux vers les villes ?", "L'exode rural."],
  ],
  synthese: "Donc, la campagne souffre de l'isolement, du manque d'eau et d'électricité, de l'éloignement des écoles et des centres de santé, et du manque d'emplois. Ces difficultés poussent les jeunes vers la ville : c'est l'exode rural, qui fait vieillir les villages.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Pourquoi le village est-il isolé ?",
        "2. Quels équipements manquent à Mandrosoa ?",
        "3. Qu'est-ce que le CSB ?",
        "4. Comment s'appelle le départ des jeunes vers les villes ?",
      ],
      corrige: [
        "1. Sa **piste** est **coupée** par les pluies une partie de l'année.",
        "2. L'**électricité** et l'**eau courante**.",
        "3. Le **Centre de Santé de Base** de la campagne.",
        "4. L'**exode rural**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Tous les villages malgaches ont l'électricité.",
        "2. L'exode rural vide les villages de leurs jeunes.",
        "3. Le CSB manque parfois de médicaments.",
        "4. Les pistes sont parfois coupées par les crues.",
      ],
      corrige: [
        "1. **Faux** : beaucoup n'en ont pas.",
        "2. **Vrai** : « le village vieillit ».",
        "3. **Vrai**.",
        "4. **Vrai**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : isolé — électricité — exode — jeunes.",
      items: [
        "Un village sans route praticable est ……… .",
        "Beaucoup de campagnes manquent d'……… .",
        "Le départ des ruraux vers la ville est l'……… rural.",
        "Ce sont surtout les ……… qui partent.",
      ],
      corrige: [
        "est **isolé** / d'**électricité** / l'**exode** / les **jeunes**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. À Mandrosoa, la piste est coupée : A. trois mois par an — B. jamais — C. chaque nuit",
        "2. Les enfants marchent deux heures pour rejoindre : A. le collège — B. la plage — C. l'aéroport",
        "3. CSB signifie : A. Centre de Santé de Base — B. Comité des Sports — C. Camion de Blé",
        "4. L'exode rural fait : A. vieillir les villages — B. rajeunir les villes seulement — C. rien",
      ],
      corrige: [
        "1. Réponse **A** : à la saison des pluies.",
        "2. Réponse **A**.",
        "3. Réponse **A**.",
        "4. Réponse **A**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. L'isolement et les équipements manquants",
        paras: [
          "Beaucoup de villages ne sont reliés au reste du pays que par des pistes de terre, coupées par les crues en saison des pluies.",
          "L'eau courante et l'électricité manquent souvent : on va puiser à la source et on s'éclaire à la lampe-tempête.",
        ],
        exemples: [
          "À Mandrosoa, la piste est impraticable trois mois par an.",
        ],
      },
      {
        titre: "2. Des services trop loin",
        paras: [
          "Le collège est parfois à deux heures de marche ; le CSB n'a pas toujours de médicaments ni de médecin.",
          "Les familles paient cher, en temps et en argent, l'éloignement de tous les services.",
        ],
        exemples: [
          "Les internats remplissent les collèges lointains pendant la semaine.",
        ],
      },
      {
        titre: "3. L'exode rural",
        paras: [
          "Sans travail ni espoir assez près, les jeunes partent vers les villes : c'est l'exode rural.",
          "Les villages vieillissent et se vident ; et les villes, déjà pleines, grossissent encore.",
        ],
        exemples: [
          "« Notre village vieillit », soupire le doyen de Mandrosoa.",
        ],
      },
    ],
  },
  motsCles: ["isolement", "équipements", "CSB", "exode rural"],
  questionsRevision: [
    ["Cite deux problèmes de la vie rurale.", "L'isolement des pistes et le manque d'électricité (aussi : écoles loin, CSB mal équipé, peu d'emplois)."],
    ["Qu'est-ce que l'exode rural ?", "Le départ des habitants des campagnes vers les villes."],
  ],
};

module.exports = { topics: [S62, S63, S64, S65, S66, S67, S68] };
