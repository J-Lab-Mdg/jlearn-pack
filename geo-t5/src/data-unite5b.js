// data-unite5b.js — UNITÉ 5 (suite et fin) : Séances 69 à 74
// Contenu rédactionnel conforme au Programme d'études officiel T5 — Géographie
const TOTAL = 76;

const S69 = {
  numero: 69, total: TOTAL,
  titre: "Les problèmes de la vie urbaine",
  theme: "La vie rurale et la vie urbaine",
  objectif: "Être capable de décrire les problèmes du milieu urbain.",
  image: { id: "geo5_problemes_urbains", legende: "Surpopulation, logements serrés, transports saturés, problèmes de salubrité." },
  scene: { file: "scene_s69_problemes_urbains.jpg", mode: "document", legende: "Document : quartier dense au bord du canal, ruelle encombrée, bouchons en bas." },
  revisionOuverture: [
    ["Cite deux problèmes de la vie rurale.", "L'isolement des pistes et le manque d'électricité."],
    ["Qu'est-ce que l'exode rural ?", "Le départ des habitants des campagnes vers les villes."],
  ],
  miseEnSituation: {
    texte: "Les cousins de Rado viennent d'arriver du village, pour travailler à Antananarivo. Ils logent chez une tante, dans une maison déjà pleine : on dort à quatre dans une pièce. Chaque matin, le cousin aîné met deux heures pour rejoindre son chantier, coincé dans les embouteillages. Et la saison des pluies arrive : l'an dernier, le canal du quartier a débordé, emportant les ordures dans les cours. « La ville attire, soupire la tante, mais elle étouffe. »",
    question: "Quels problèmes rencontrent les habitants des villes ?",
    ra: "La surpopulation, le manque de logements (taudis, maisons surpeuplées), les transports saturés et les problèmes de salubrité : déchets, canaux sales, inondations.",
    support: "Schéma des problèmes urbains (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les problèmes de la vie urbaine ». Après cette séance, vous serez capables de citer et d'expliquer les problèmes des villes.",
  observation: "Observez bien le schéma : quatre panneaux montrent la surpopulation, les logements serrés, les transports saturés et la salubrité.",
  supportObservation: "Schéma des problèmes urbains (page Leçon)",
  analyse: [
    ["Pourquoi les villes sont-elles surpeuplées ?", "À cause de l'exode rural et des nombreuses naissances : trop de monde arrive et reste en ville."],
    ["Où logent les nouveaux arrivants ?", "Chez la famille, dans des maisons surpeuplées ou dans des quartiers de maisons précaires : les taudis."],
    ["Pourquoi les transports sont-ils saturés ?", "Parce que trop de voitures, de taxis-be et de piétons circulent sur les mêmes rues aux mêmes heures."],
    ["Quels sont les problèmes de salubrité ?", "Les déchets mal ramassés, les canaux sales, les eaux usées et les moustiques, sources de maladies."],
    ["Que se passe-t-il dans les bas quartiers à la saison des pluies ?", "Les canaux débordent et les eaux sales envahissent les cours et les maisons."],
    ["Pourquoi dit-on que « la ville étouffe » ?", "Parce que la croissance est plus rapide que la construction de logements et d'équipements."],
  ],
  synthese: "Donc, les villes font face à la surpopulation, au manque de logements (surpeuplement, taudis), aux transports saturés et aux problèmes de salubrité (déchets, canaux, inondations). La ville attire, mais elle étouffe.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Pourquoi les villes sont-elles surpeuplées ?",
        "2. Où logent les nouveaux arrivants ?",
        "3. Pourquoi les transports sont-ils saturés ?",
        "4. Cite deux problèmes de salubrité.",
      ],
      corrige: [
        "1. À cause de l'**exode rural** et des **naissances**.",
        "2. Chez la famille, dans des maisons **surpeuplées** ou des **taudis**.",
        "3. Trop de **voitures** et de **piétons** sur les mêmes rues aux mêmes heures.",
        "4. Les **déchets** mal ramassés et les **canaux sales** (aussi les inondations).",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. L'exode rural vide les villes.",
        "2. Les bas quartiers craignent les inondations à la saison des pluies.",
        "3. Un taudis est un logement insalubre.",
        "4. Les embouteillages font perdre du temps.",
      ],
      corrige: [
        "1. **Faux** : il remplit les villes.",
        "2. **Vrai** : les canaux débordent.",
        "3. **Vrai**.",
        "4. **Vrai** : deux heures pour le cousin de Rado.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : surpopulation — taudis — embouteillages — salubrité.",
      items: [
        "Trop de monde dans la ville : la ……… .",
        "Les quartiers de maisons précaires sont des ……… .",
        "Les voitures coincées forment des ……… .",
        "Déchets et canaux sales : ce sont les problèmes de ……… .",
      ],
      corrige: [
        "la **surpopulation** / des **taudis** / des **embouteillages** / de **salubrité**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Les cousins de Rado dorment : A. à quatre dans une pièce — B. chacun dans sa chambre — C. au village",
        "2. La ville étouffe parce que : A. elle grandit trop vite — B. elle rétrécit — C. il n'y a personne",
        "3. À la saison des pluies, le canal du quartier : A. déborde — B. chante — C. disparaît",
        "4. Contre les maladies, la ville doit améliorer : A. la salubrité — B. la télévision — C. les cartes",
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
        titre: "1. Trop de monde, trop peu de logements",
        paras: [
          "L'exode rural et la croissance des familles remplissent les villes : la population double vite.",
          "Les logements manquent : familles entassées dans une pièce, quartiers de maisons précaires, taudis sur les pentes et au bord des canaux.",
        ],
        exemples: [
          "Les cousins de Rado dorment à quatre dans une pièce chez leur tante.",
        ],
      },
      {
        titre: "2. Circuler devient un parcours",
        paras: [
          "Aux heures de pointe, voitures, taxis-be et piétons se bousculent : les embouteillages bloquent la ville.",
          "Le cousin de Rado met deux heures pour rejoindre son chantier.",
        ],
        exemples: [
          "Le matin, la route vers le centre d'Antananarivo se transforme en parking.",
        ],
      },
      {
        titre: "3. Salubrité et inondations",
        paras: [
          "Les déchets s'accumulent quand le ramassage ne suit pas ; les canaux se bouchent et les eaux usées stagnent.",
          "À la saison des pluies, les bas quartiers s'inondent : les eaux sales apportent maladies et moustiques.",
        ],
        exemples: [
          "L'an dernier, le canal du quartier a débordé jusqu'aux cours.",
        ],
      },
    ],
  },
  motsCles: ["surpopulation", "exode rural", "taudis", "embouteillages", "salubrité", "inondations"],
  questionsRevision: [
    ["Cite deux problèmes de la vie urbaine.", "La surpopulation et le manque de logements (aussi transports, salubrité)."],
    ["Pourquoi les villes grossissent-elles trop vite ?", "À cause de l'exode rural et des naissances."],
  ],
};

const S70 = {
  numero: 70, total: TOTAL,
  titre: "Les atouts du milieu rural et du milieu urbain",
  theme: "La vie rurale et la vie urbaine",
  objectif: "Être capable de citer les atouts du milieu rural et du milieu urbain.",
  image: { id: "geo5_atouts_milieux", legende: "À gauche, les atouts de la campagne ; à droite, les atouts de la ville." },
  scene: { file: "scene_s70_atouts.jpg", mode: "document", legende: "Document : d'un côté la campagne généreuse, de l'autre la ville équipée — et la route qui les unit." },
  revisionOuverture: [
    ["Cite deux problèmes de la vie urbaine.", "La surpopulation et le manque de logements."],
    ["Qu'est-ce qu'un taudis ?", "Un logement insalubre et précaire."],
  ],
  miseEnSituation: {
    texte: "Débat en classe : « Où est-il mieux de vivre, à la campagne ou à la ville ? » Le groupe de Soa défend la campagne : « L'air est pur, la terre nourrit, le riz coûte moins cher, on vit tranquille ! » Le groupe de Rakoto répond pour la ville : « Les hôpitaux soignent, les lycées forment, les boutiques vendent tout, et on trouve du travail ! » La maîtresse sourit : « Chaque milieu a ses atouts. Notez-les tous. »",
    question: "Quels sont les atouts du milieu rural et du milieu urbain ?",
    ra: "La campagne offre la terre, l'eau, la forêt, l'air pur, des vivres bon marché et le calme ; la ville offre les écoles, les hôpitaux, les commerces, les emplois et les équipements.",
    support: "Schéma des atouts (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les atouts du milieu rural et du milieu urbain ». Après cette séance, vous serez capables de citer les atouts de chaque milieu.",
  observation: "Observez bien le schéma : deux colonnes — les trésors de la campagne et ceux de la ville.",
  supportObservation: "Schéma des atouts (page Leçon)",
  analyse: [
    ["Quels atouts naturels possède la campagne ?", "La terre fertile, l'eau des rivières, les forêts, les pâturages et l'air pur."],
    ["Pourquoi la vie coûte-t-elle moins cher à la campagne ?", "Parce que les vivres — riz, légumes, fruits — viennent des champs voisins."],
    ["Quels atouts d'étude offre la ville ?", "Les écoles, les collèges, les lycées et les universités."],
    ["Quels atouts de santé ?", "Les grands hôpitaux, les spécialistes et les pharmacies."],
    ["Quel atout économique majeur de la ville ?", "Les emplois nombreux : commerces, usines, bureaux, chantiers."],
    ["La maîtresse a-t-elle choisi un gagnant au débat ?", "Non : chaque milieu a ses atouts, et ils sont complémentaires."],
  ],
  synthese: "Donc, la campagne a pour atouts la terre, l'eau, la forêt, l'air pur, des vivres bon marché et le calme ; la ville a pour atouts les écoles, les hôpitaux, les commerces, les emplois et les équipements. Aucun ne gagne : ils se complètent.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Cite deux atouts naturels de la campagne.",
        "2. Pourquoi la vie coûte-t-elle moins cher à la campagne ?",
        "3. Cite deux atouts de la ville.",
        "4. Quel milieu offre le plus d'emplois ?",
      ],
      corrige: [
        "1. La **terre fertile** et l'**eau** des rivières (aussi forêts, air pur).",
        "2. Parce que les **vivres** viennent des champs **voisins**.",
        "3. Les **écoles** et les **hôpitaux** (aussi commerces, emplois).",
        "4. La **ville**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. L'air de la campagne est plus pur que celui de la ville.",
        "2. Les grands hôpitaux se trouvent surtout en ville.",
        "3. La campagne offre plus d'emplois de bureaux.",
        "4. Les deux milieux sont complémentaires.",
      ],
      corrige: [
        "1. **Vrai**.",
        "2. **Vrai**.",
        "3. **Faux** : les bureaux sont urbains.",
        "4. **Vrai**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : terre — air — hôpitaux — emplois.",
      items: [
        "La campagne offre la ……… fertile.",
        "On y respire un …… pur.",
        "La ville soigne dans ses grands ……… .",
        "Elle offre aussi de nombreux ……… .",
      ],
      corrige: [
        "la **terre** / un **air** pur / ses grands **hôpitaux** / de nombreux **emplois**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le groupe de Soa défendait : A. la campagne — B. la ville — C. personne",
        "2. Le riz coûte moins cher : A. au village — B. en ville — C. à l'étranger",
        "3. Les universités se trouvent : A. en ville — B. dans les forêts — C. sur les pirogues",
        "4. Au débat, la maîtresse a déclaré : A. chaque milieu a ses atouts — B. la ville gagne — C. la campagne gagne",
      ],
      corrige: [
        "1. Réponse **A**.",
        "2. Réponse **A** : il vient des rizières voisines.",
        "3. Réponse **A**.",
        "4. Réponse **A**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Les trésors de la campagne",
        paras: [
          "La campagne possède les richesses naturelles : terre fertile, eau abondante, forêts, pâturages et poissons.",
          "L'air y est pur, le cadre paisible, et les vivres bon marché : le riz du village coûte moins cher que celui de la ville.",
        ],
        exemples: [
          "« On vit tranquille », disait le groupe de Soa au débat.",
        ],
      },
      {
        titre: "2. Les trésors de la ville",
        paras: [
          "La ville concentre les équipements : écoles, lycées, universités, grands hôpitaux, pharmacies, banques.",
          "Elle offre du travail à beaucoup : commerces, usines, bureaux, chantiers — et des loisirs variés.",
        ],
        exemples: [
          "« On trouve du travail ! », répondait le groupe de Rakoto.",
        ],
      },
      {
        titre: "3. Deux milieux, une seule équipe",
        paras: [
          "Ni vainqueur ni vaincu : les atouts de la campagne et ceux de la ville se complètent.",
          "Le bonheur d'un pays vient de leur union : la campagne nourrit, la ville instruit, soigne et équipe.",
        ],
        exemples: [
          "Le schéma de la leçon montre les deux colonnes reliées par une route.",
        ],
      },
    ],
  },
  motsCles: ["atouts", "équipements", "complémentaires", "emplois", "air pur"],
  questionsRevision: [
    ["Cite deux atouts de la campagne et deux atouts de la ville.", "Campagne : terre fertile, air pur. Ville : hôpitaux, emplois."],
    ["Les deux milieux sont-ils rivaux ?", "Non, complémentaires."],
  ],
};

const S71 = {
  numero: 71, total: TOTAL,
  titre: "Améliorer la vie en milieu rural",
  theme: "La vie rurale et la vie urbaine",
  objectif: "Être capable de proposer des solutions pour améliorer la vie en milieu rural.",
  image: { id: "geo5_ameliorer_rural", legende: "Pistes, eau et électricité, écoles et santé, appui aux paysans, coopératives, communication." },
  scene: { file: "scene_s71_ameliorer_rural.jpg", mode: "document", legende: "Document : le village de Mandrosoa se modernise — école neuve, robinet public, panneaux solaires." },
  revisionOuverture: [
    ["Cite deux atouts de la campagne.", "La terre fertile et l'air pur."],
    ["Cite deux atouts de la ville.", "Les hôpitaux et les emplois."],
  ],
  miseEnSituation: {
    texte: "Grande journée à Mandrosoa ! On inaugure le nouveau forage : la présidente de la commune tourne le robinet, et l'eau claire jaillit sous les applaudissements. Le soleil brille sur les panneaux solaires du CSB, qui garde enfin ses vaccins au frais. Les enfants découvrent leur nouvelle école, aux murs frais peints. Et sur la piste réhabilitée, le camion du marché entre au village sans s'enliser. « Le village revit », dit le doyen, les yeux brillants.",
    question: "Comment améliorer la vie en milieu rural ?",
    ra: "En désenclavant les villages (pistes), en apportant l'eau et l'électricité, en rapprochant écoles et santé, en appuyant les paysans (prix justes, coopératives) et en développant la communication.",
    support: "Schéma des solutions rurales (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Améliorer la vie en milieu rural ». Après cette séance, vous serez capables de proposer des solutions pour la campagne.",
  observation: "Observez bien le schéma : six solutions pour que la campagne revive.",
  supportObservation: "Schéma des solutions rurales (page Leçon)",
  analyse: [
    ["Pourquoi faut-il d'abord réhabiliter les pistes ?", "Parce que les routes désenclavent le village : les produits partent, les marchandises et les services arrivent."],
    ["Qu'apporte le forage au village ?", "De l'eau potable tout près des maisons : plus de longues marches, moins de maladies."],
    ["À quoi servent les panneaux solaires du CSB ?", "À garder les vaccins au frais et à éclairer la salle de soins."],
    ["Comment appuyer les paysans ?", "Par des prix justes, des crédits, des formations et de bonnes semences."],
    ["Qu'est-ce qu'une coopérative ?", "Un groupe de producteurs qui vendent ensemble pour mieux gagner."],
    ["Pourquoi la communication est-elle importante ?", "Parce que la radio et le téléphone informent les paysans : prix du marché, météo, santé."],
  ],
  synthese: "Donc, pour améliorer la vie rurale : réhabiliter les pistes, apporter l'eau potable et l'électricité solaire, rapprocher écoles et centres de santé, appuyer les paysans par des prix justes et des coopératives, et développer la communication. Alors, les jeunes resteront au village.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Pourquoi faut-il réhabiliter les pistes ?",
        "2. Qu'apporte le forage au village ?",
        "3. Qu'est-ce qu'une coopérative ?",
        "4. Pourquoi les jeunes resteraient-ils au village ?",
      ],
      corrige: [
        "1. Elles **désenclavent** le village : tout circule.",
        "2. De l'**eau potable** près des maisons.",
        "3. Des producteurs qui **vendent ensemble**.",
        "4. Parce qu'il y aura de l'**eau**, des **écoles**, des soins et du **travail**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Les panneaux solaires gardent les vaccins au frais.",
        "2. Les coopératives affaiblissent les paysans.",
        "3. Le forage évite les longues marches pour l'eau.",
        "4. La radio peut informer les paysans des prix.",
      ],
      corrige: [
        "1. **Vrai** : le CSB a maintenant un réfrigérateur solaire.",
        "2. **Faux** : vendre ensemble rapporte plus.",
        "3. **Vrai**.",
        "4. **Vrai**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : pistes — forage — coopérative — solaires.",
      items: [
        "Réhabiliter les ……… désenclave le village.",
        "Le nouveau ……… donne de l'eau potable.",
        "Vendre ensemble grâce à une ……… rapporte plus.",
        "Les panneaux ……… alimentent le CSB.",
      ],
      corrige: [
        "les **pistes** / le nouveau **forage** / une **coopérative** / les panneaux **solaires**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. À Mandrosoa, on a inauguré : A. un forage — B. un aéroport — C. une usine",
        "2. Le camion du marché entre au village grâce : A. à la piste réhabilitée — B. à la magie — C. au hasard",
        "3. Les crédits aux paysans servent : A. à acheter semences et outils — B. à dormir — C. à rien",
        "4. Le doyen dit : A. « Le village revit » — B. « Tout est perdu » — C. « Partons tous »",
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
        titre: "1. Désenclaver et équiper",
        paras: [
          "La première solution, c'est la route : réhabiliter les pistes pour que camions et taxis-brousse passent toute l'année.",
          "Viennent ensuite l'eau potable (forages, robinets) et l'électricité (panneaux solaires, petites centrales).",
        ],
        exemples: [
          "Le nouveau forage de Mandrosoa a changé la vie des femmes et des enfants.",
        ],
      },
      {
        titre: "2. Rapprocher l'école et la santé",

        paras: [
          "Construire des écoles de proximité et des CSB équipés évite aux enfants deux heures de marche et aux familles des voyages coûteux.",
          "Les internats et les cantines scolaires gardent les élèves au village.",
        ],
        exemples: [
          "Le réfrigérateur solaire du CSB garde enfin les vaccins.",
        ],
      },
      {
        titre: "3. Appuyer ceux qui produisent",
        paras: [
          "Prix justes, crédits, formations et semences : l'État et les projets appuient les paysans.",
          "Les coopératives vendent ensemble, plus fort ; la radio et le téléphone informent chaque jour.",
        ],
        exemples: [
          "La coopérative de riz de Mandrosoa négocie de meilleurs prix à la ville.",
        ],
      },
    ],
  },
  motsCles: ["désenclavement", "forage", "panneaux solaires", "coopérative", "prix justes"],
  questionsRevision: [
    ["Cite trois solutions pour améliorer la vie rurale.", "Réhabiliter les pistes, creuser des forages, construire des écoles de proximité (aussi coopératives, électricité solaire)."],
    ["Qu'est-ce qu'une coopérative ?", "Un groupe de producteurs qui vendent ensemble pour mieux gagner."],
  ],
};

const S72 = {
  numero: 72, total: TOTAL,
  titre: "Améliorer la vie en milieu urbain",
  theme: "La vie rurale et la vie urbaine",
  objectif: "Être capable de proposer des solutions pour améliorer la vie en milieu urbain.",
  image: { id: "geo5_ameliorer_urbain", legende: "Logements, transports en commun, salubrité, espaces verts, plan d'urbanisme, emploi." },
  scene: { file: "scene_s72_ameliorer_urbain.jpg", mode: "document", legende: "Document : logements sociaux neufs, bus urbain, ramassage des déchets, arbres plantés." },
  revisionOuverture: [
    ["Cite trois solutions pour améliorer la vie rurale.", "Pistes, forages, écoles de proximité."],
    ["Qu'est-ce qu'une coopérative ?", "Un groupe de producteurs qui vendent ensemble."],
  ],
  miseEnSituation: {
    texte: "Vela écrit au journal de la ville : « Monsieur le rédacteur, chaque matin, je perds une heure dans les embouteillages ; mon petit frère joue à côté des ordures ; et ma cousine, arrivée du village, ne trouve pas de logement. Mais j'ai vu des chantiers de logements neufs, des bus propres aux arrêts marqués, et des agents ramasser les sacs de tri. Alors, que faut-il faire de plus ? » Le journal répond en publiant la liste des solutions des urbanistes.",
    question: "Comment améliorer la vie en milieu urbain ?",
    ra: "Construire des logements sociaux, organiser les transports en commun, améliorer la salubrité (ramassage, tri), créer des espaces verts, respecter le plan d'urbanisme et créer des emplois.",
    support: "Schéma des solutions urbaines (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Améliorer la vie en milieu urbain ». Après cette séance, vous serez capables de proposer des solutions pour la ville.",
  observation: "Observez bien le schéma : six solutions pour une ville qui respire mieux.",
  supportObservation: "Schéma des solutions urbaines (page Leçon)",
  analyse: [
    ["Que fait la ville contre le manque de logements ?", "Elle construit des logements sociaux, propres et à prix accessible."],
    ["Comment désengorger les rues ?", "En développant les transports en commun : bus, taxis-be organisés, voies réservées."],
    ["Comment améliorer la salubrité ?", "Par le ramassage régulier des déchets, le tri et le nettoyage des canaux."],
    ["À quoi servent les espaces verts ?", "Ils rafraîchissent la ville, purifient l'air et offrent des lieux de détente."],
    ["Qu'est-ce que le plan d'urbanisme ?", "C'est le plan qui organise la croissance de la ville : où bâtir, où laisser des espaces, où tracer les rues."],
    ["Pourquoi faut-il aussi créer des emplois en ville ?", "Pour que les nouveaux arrivants vivent dignement et ne tombent pas dans la misère."],
  ],
  synthese: "Donc, pour améliorer la vie urbaine : construire des logements sociaux, organiser les transports en commun, ramasser et trier les déchets, créer des espaces verts, respecter le plan d'urbanisme et créer des emplois. Et développer les campagnes pour freiner l'exode.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Que fait la ville contre le manque de logements ?",
        "2. Comment désengorger les rues ?",
        "3. À quoi servent les espaces verts ?",
        "4. Qu'est-ce que le plan d'urbanisme ?",
      ],
      corrige: [
        "1. Elle construit des **logements sociaux**.",
        "2. En développant les **transports en commun**.",
        "3. Ils **rafraîchissent** et **purifient** l'air, et détendent.",
        "4. Le plan qui **organise la croissance** de la ville.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le tri des déchets améliore la salubrité.",
        "2. Les voies réservées aux bus fluidifient la circulation.",
        "3. Construire sans permis aide la ville.",
        "4. Créer des emplois aide les nouveaux arrivants.",
      ],
      corrige: [
        "1. **Vrai**.",
        "2. **Vrai**.",
        "3. **Faux** : le désordre urbain aggrave tout.",
        "4. **Vrai**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : sociaux — commun — tri — urbanisme.",
      items: [
        "La ville construit des logements ……… .",
        "Les bus organisent le transport en ……… .",
        "Le …… des déchets garde la ville propre.",
        "Le plan d'……… organise la croissance de la ville.",
      ],
      corrige: [
        "logements **sociaux** / transport en **commun** / le **tri** / le plan d'**urbanisme**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Vela perd chaque matin : A. une heure dans les bouchons — B. son temps à la plage — C. rien",
        "2. Les agents de la ville ramassent : A. les sacs de tri — B. les enfants — C. les bus",
        "3. Les espaces verts : A. rafraîchissent la ville — B. polluent — C. servent à rien",
        "4. Pour freiner l'exode rural, il faut : A. développer les campagnes — B. fermer les villes — C. construire des murs",
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
        titre: "1. Loger et circuler",
        paras: [
          "Contre la crise du logement, la ville construit des logements sociaux et réhabilite les quartiers anciens.",
          "Contre les embouteillages, elle organise les transports en commun : bus aux arrêts marqués, voies réservées, horaires réguliers.",
        ],
        exemples: [
          "Les chantiers de logements neufs que Vela voit depuis sa rue.",
        ],
      },
      {
        titre: "2. Une ville propre et verte",
        paras: [
          "Le ramassage régulier, le tri des déchets et le nettoyage des canaux rendent la salubrité.",
          "Les parcs et les arbres plantés rafraîchissent l'air et le cœur des habitants.",
        ],
        exemples: [
          "Le petit frère de Vela jouera bientôt dans un square propre.",
        ],
      },
      {
        titre: "3. Une ville planifiée et qui emploie",
        paras: [
          "Le plan d'urbanisme et le permis de bâtir évitent le désordre : on construit là où c'est prévu, en sécurité.",
          "Ateliers, formations et petits métiers créent des emplois ; et développer les campagnes freine l'exode vers la ville.",
        ],
        exemples: [
          "Le journal a publié la liste des solutions des urbanistes, à la demande de Vela.",
        ],
      },
    ],
  },
  motsCles: ["logements sociaux", "transports en commun", "tri des déchets", "espaces verts", "plan d'urbanisme"],
  questionsRevision: [
    ["Cite trois solutions pour améliorer la vie urbaine.", "Logements sociaux, transports en commun, tri des déchets (aussi espaces verts, plan d'urbanisme, emplois)."],
    ["Qu'est-ce que le plan d'urbanisme ?", "Le plan qui organise la croissance de la ville."],
  ],
};

const S73 = {
  numero: 73, total: TOTAL,
  titre: "Protéger l'environnement rural et urbain",
  theme: "La vie rurale et la vie urbaine",
  objectif: "Être capable de citer les gestes de protection de l'environnement en milieu rural et urbain.",
  image: { id: "geo5_proteger_environnement", legende: "À la campagne : reboiser, entretenir, protéger les rivières. En ville : trier, planter, moins polluer." },
  scene: { file: "scene_s73_proteger_env.jpg", mode: "document", legende: "Document : la grande journée citoyenne — tout le monde nettoie, trie et replante." },
  revisionOuverture: [
    ["Cite trois solutions pour améliorer la vie urbaine.", "Logements sociaux, transports en commun, tri des déchets."],
    ["Qu'est-ce que le plan d'urbanisme ?", "Le plan qui organise la croissance de la ville."],
  ],
  miseEnSituation: {
    texte: "Ce samedi, c'est la journée citoyenne « Tany madio » — la terre propre. Au village, les hommes rebouchent les sentiers et plantent des arbres sur la colline brûlée ; les femmes curèrent le canal d'irrigation. En ville, le quartier se retrouve autour du canal : on sort les ordures à la main, on trie dans des sacs verts et jaunes, on balaie la place. Le soir, le chef de quartier déclare fier : « Notre environnement, c'est notre maison commune. »",
    question: "Comment protéger l'environnement en milieu rural et urbain ?",
    ra: "À la campagne : reboiser, empêcher les feux, entretenir rizières et canaux, protéger les rivières. En ville : trier et recycler les déchets, planter des arbres, moins polluer l'air.",
    support: "Schéma de la protection de l'environnement (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Protéger l'environnement rural et urbain ». Après cette séance, vous serez capables de citer les gestes qui protègent la nature aux deux milieux.",
  observation: "Observez bien le schéma : trois gestes à la campagne, trois gestes en ville.",
  supportObservation: "Schéma de la protection (page Leçon)",
  analyse: [
    ["Comment reboiser une colline brûlée ?", "En plantant de jeunes arbres et en empêchant les feux de brousse."],
    ["Pourquoi curer les canaux d'irrigation ?", "Pour que l'eau circule bien vers les rizières sans déborder."],
    ["Comment protéger les rivières du village ?", "En n'y lavant pas les bidons de produits, en n'y versant rien de sale."],
    ["Que veut dire « trier les déchets » ?", "Séparer les déchets selon leur sorte — verts, jaunes, compostables — pour recycler."],
    ["Pourquoi planter des arbres en ville ?", "Pour l'ombre, l'air pur et la beauté des rues."],
    ["Comment moins polluer l'air en ville ?", "En privilégiant les transports propres et en évitant de brûler les déchets."],
  ],
  synthese: "Donc, protéger l'environnement se fait partout : à la campagne, reboiser, empêcher les feux, entretenir canaux et rizières, garder les rivières propres ; en ville, trier et recycler, planter des arbres, moins polluer. Notre environnement est notre maison commune.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Comment reboiser une colline brûlée ?",
        "2. Pourquoi curer les canaux d'irrigation ?",
        "3. Que veut dire « trier les déchets » ?",
        "4. Pourquoi planter des arbres en ville ?",
      ],
      corrige: [
        "1. En **plantant de jeunes arbres** et en **empêchant les feux**.",
        "2. Pour que l'**eau circule bien** vers les rizières.",
        "3. **Séparer** les déchets selon leur sorte pour **recycler**.",
        "4. Pour l'**ombre**, l'**air pur** et la beauté.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. On peut laver les bidons de produits dans la rivière.",
        "2. Les feux de brousse détruisent le reboisement.",
        "3. Le tri permet de recycler une partie des déchets.",
        "4. Brûler les ordures pollue l'air.",
      ],
      corrige: [
        "1. **Faux** : cela empoisonne l'eau.",
        "2. **Vrai**.",
        "3. **Vrai**.",
        "4. **Vrai**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : reboiser — curer — trier — planter.",
      items: [
        "……… la colline, c'est replanter des arbres.",
        "Il faut ……… les canaux pour que l'eau circule.",
        "……… les déchets permet de recycler.",
        "En ville, il faut aussi ……… des arbres.",
      ],
      corrige: [
        "**Reboiser** / **curer** / **Trier** / **planter**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. La journée citoyenne s'appelait : A. Tany madio — B. Fety be — C. Tsy misy",
        "2. Les sacs de tri de la ville étaient : A. verts et jaunes — B. rouges seulement — C. invisibles",
        "3. « Notre maison commune », c'est : A. l'environnement — B. l'école — C. le bus",
        "4. Protéger les rivières veut dire : A. ne rien verser de sale — B. tout verser — C. les assécher",
      ],
      corrige: [
        "1. Réponse **A** : la terre propre.",
        "2. Réponse **A**.",
        "3. Réponse **A**.",
        "4. Réponse **A**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. À la campagne : soigner la terre et l'eau",
        paras: [
          "Reboiser les collines et interdire les feux protègent le sol contre l'érosion.",
          "Curer les canaux, semer droit et garder les rivières propres — sans y laver les bidons de produits — protègent l'eau de tous.",
        ],
        exemples: [
          "Les femmes du village ont curé le canal d'irrigation pendant la journée citoyenne.",
        ],
      },
      {
        titre: "2. En ville : trier, planter, moins fumer",
        paras: [
          "Trier les déchets dans des sacs de couleurs permet de recycler et garde les rues propres.",
          "Planter des arbres, entretenir les parcs et préférer les transports propres rendent l'air respirable.",
        ],
        exemples: [
          "Le quartier a sorti les ordures du canal à la main, puis trié dans les sacs verts et jaunes.",
        ],
      },
      {
        titre: "3. La maison commune",
        paras: [
          "Rural ou urbain, l'environnement est le même : l'air, l'eau, la terre se partagent.",
          "Chaque geste compte : planter un arbre, trier un sac, éteindre un feu — la terre propre est l'affaire de tous.",
        ],
        exemples: [
          "« Notre environnement, c'est notre maison commune », a dit le chef de quartier.",
        ],
      },
    ],
  },
  motsCles: ["environnement", "reboiser", "curer", "trier", "recycler", "maison commune"],
  questionsRevision: [
    ["Cite un geste de protection à la campagne et un en ville.", "Campagne : reboiser les collines. Ville : trier les déchets."],
    ["Pourquoi ne faut-il pas laver les bidons dans la rivière ?", "Parce que les produits empoisonnent l'eau de tous."],
  ],
};

const S74 = {
  numero: 74, total: TOTAL,
  titre: "Comparer la vie rurale et la vie urbaine",
  theme: "La vie rurale et la vie urbaine",
  objectif: "Être capable de comparer la vie rurale et la vie urbaine dans un tableau de synthèse.",
  image: { id: "geo5_comparer_vies", legende: "Le tableau de synthèse : paysage, habitants, logements, activités, services, vie quotidienne." },
  scene: { file: "scene_s74_comparer.jpg", mode: "document", legende: "Document : le grand tableau comparatif que Rakoto remplit sur sa feuille." },
  revisionOuverture: [
    ["Cite un geste de protection à la campagne et un en ville.", "Campagne : reboiser. Ville : trier les déchets."],
    ["Pourquoi ne faut-il pas laver les bidons dans la rivière ?", "Parce que les produits empoisonnent l'eau."],
  ],
  miseEnSituation: {
    texte: "Pour clore l'année, la maîtresse distribue un grand tableau à double entrée : « Complétez, colonne par colonne : à la campagne… à la ville… » Rakoto et Soa remplissent les lignes ensemble : le paysage, les habitants, les logements, les activités, les services, la vie quotidienne. En bas du tableau, une dernière ligne attend une phrase. Soa sourit et écrit : « Deux milieux différents, mais… » — « …complémentaires ! », termine Rakoto.",
    question: "Comment comparer la vie rurale et la vie urbaine ?",
    ra: "Avec un tableau : paysage (nature vs immeubles), habitants (peu et dispersés vs nombreux et serrés), logements, activités (champs vs services), services (rares vs nombreux) — et une conclusion : complémentaires.",
    support: "Tableau de comparaison (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Comparer la vie rurale et la vie urbaine ». Après cette séance, vous serez capables de remplir seul le tableau de synthèse des deux milieux.",
  observation: "Observez bien le tableau : six critères, deux colonnes — la campagne et la ville.",
  supportObservation: "Tableau de comparaison (page Leçon)",
  analyse: [
    ["Compare le paysage des deux milieux.", "À la campagne : rizières, prairies, forêts. À la ville : immeubles, rues, marchés."],
    ["Compare les habitants.", "À la campagne : peu nombreux et dispersés. À la ville : très nombreux et serrés."],
    ["Compare les logements.", "À la campagne : cases et maisons espacées. À la ville : immeubles et quartiers denses."],
    ["Compare les activités.", "À la campagne : champs, élevage, pêche, artisanat. À la ville : usines, boutiques, bureaux, services."],
    ["Compare les services.", "À la campagne : rares et parfois loin. À la ville : nombreux et proches."],
    ["Quelle conclusion écrit-on sous le tableau ?", "Deux milieux différents mais complémentaires : ils s'échangent produits, services et personnes."],
  ],
  synthese: "Donc, le tableau de comparaison range les différences : paysage, habitants, logements, activités, services et vie quotidienne. Et sa conclusion : deux milieux différents mais complémentaires — la ville et la campagne s'échangent tout.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Compare les habitants des deux milieux.",
        "2. Compare les logements.",
        "3. Compare les services.",
        "4. Quelle conclusion écrit-on sous le tableau ?",
      ],
      corrige: [
        "1. Campagne : **peu nombreux et dispersés** ; ville : **très nombreux et serrés**.",
        "2. Campagne : **cases et maisons espacées** ; ville : **immeubles et quartiers denses**.",
        "3. Campagne : **rares et parfois loin** ; ville : **nombreux et proches**.",
        "4. **Deux milieux différents mais complémentaires**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Les rizières se trouvent surtout à la campagne.",
        "2. Les bureaux se trouvent surtout au village.",
        "3. Le tableau de comparaison a deux colonnes.",
        "4. Ville et campagne sont complémentaires.",
      ],
      corrige: [
        "1. **Vrai**.",
        "2. **Faux** : surtout en ville.",
        "3. **Vrai** : campagne et ville.",
        "4. **Vrai**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : dispersés — denses — rares — complémentaires.",
      items: [
        "À la campagne, les habitants sont peu nombreux et ……… .",
        "En ville, les quartiers sont ……… .",
        "Les services sont parfois ……… à la campagne.",
        "Les deux milieux sont ……… .",
      ],
      corrige: [
        "et **dispersés** / les quartiers sont **denses** / parfois **rares** / sont **complémentaires**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le tableau de la classe compare : A. la campagne et la ville — B. la lune et le soleil — C. deux villages",
        "2. La phrase finale de Soa et Rakoto était : A. « complémentaires » — B. « identiques » — C. « ennemis »",
        "3. Les activités rurales sont surtout : A. les champs — B. les bureaux — C. les banques",
        "4. La vie quotidienne urbaine est : A. au rythme des horaires — B. au rythme des saisons — C. sans rythme",
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
        titre: "1. Le tableau des différences",
        paras: [
          "Six critères rangent les différences : le paysage, les habitants, les logements, les activités, les services et la vie quotidienne.",
          "Chaque ligne du tableau oppose la colonne campagne à la colonne ville : nature contre immeubles, dispersion contre densité.",
        ],
        exemples: [
          "Rakoto a écrit « rizières et prairies » en face de « immeubles et marchés ».",
        ],
      },
      {
        titre: "2. Le tableau des ressemblances",
        paras: [
          "Partout, les hommes travaillent, échangent, étudient et fêtent.",
          "Partout aussi, ils protègent leur environnement : la maison commune n'a pas de colonne.",
        ],
        exemples: [
          "Soa a remarqué que la ligne « entraide » existe dans les deux colonnes.",
        ],
      },
      {
        titre: "3. La leçon de l'année",
        paras: [
          "La conclusion du tableau tient en un mot : complémentaires.",
          "La campagne nourrit la ville, la ville équipe la campagne — et Madagascar a besoin de ses deux mains.",
        ],
        exemples: [
          "« Deux milieux différents, mais complémentaires ! », ont conclu Soa et Rakoto.",
        ],
      },
    ],
  },
  motsCles: ["comparaison", "tableau à double entrée", "critères", "différences", "complémentaires"],
  questionsRevision: [
    ["Cite trois critères du tableau de comparaison.", "Le paysage, les habitants et les activités (aussi logements, services, vie quotidienne)."],
    ["Quelle est la conclusion du tableau ?", "Deux milieux différents mais complémentaires."],
  ],
};

module.exports = { topics: [S69, S70, S71, S72, S73, S74] };
