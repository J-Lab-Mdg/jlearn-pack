// data-unite3b.js — UNITÉ 3 (suite) : Séances 34 à 43
// Contenu rédactionnel conforme au Programme d'études officiel T5 — Géographie
const TOTAL = 76;

const S34 = {
  numero: 34, total: TOTAL,
  titre: "Les zones climatiques (1) : les zones humides et les Hautes Terres",
  theme: "Les milieux naturels à Madagascar",
  objectif: "Être capable de situer et de caractériser les zones climatiques humides et le climat d'altitude des Hautes Terres.",
  image: { id: "geo5_zones_climatiques1", legende: "La Côte Est et le Sambirano sont humides ; les Hautes Terres ont un climat d'altitude." },
  scene: { file: "scene_s34_zones_humides.jpg", mode: "document", legende: "Document : la forêt tropicale humide de la Côte Est, sous la pluie." },
  revisionOuverture: [
    ["Quel est le climat de Madagascar ?", "Un climat tropical : chaud toute l'année."],
    ["Quelles sont les deux saisons malgaches ?", "La saison chaude et pluvieuse (novembre-avril) et la saison fraîche et sèche (mai-octobre)."],
  ],
  miseEnSituation: {
    texte: "Soa passe les vacances chez sa tante à Toamasina, sur la côte Est. Quelle surprise ! Chaque matin, en se réveillant, elle trouve les feuilles du jardin mouillées de rosée, et presque chaque après-midi, une averse chaude tombe. Même en saison sèche, il pleut ! Le linge ne sèche jamais complètement. « Ici, tout est vert toute l'année », lui explique sa tante. De retour à Antananarivo, sur les Hautes Terres, Soa retrouve l'air frais du matin.",
    question: "Pourquoi pleut-il souvent sur la côte Est et fait-il plus frais sur les Hautes Terres ?",
    ra: "La côte Est reçoit les vents chargés de pluie venant de l'océan ; les Hautes Terres, plus élevées, ont un air plus frais.",
    support: "Carte des zones climatiques (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les zones climatiques (1) ». Après cette séance, vous serez capables de situer les zones humides de Madagascar et de décrire le climat des Hautes Terres.",
  observation: "Observez bien la carte : la Côte Est et le Sambirano sont en bleu (zones humides) ; les Hautes Terres sont en orange (climat d'altitude).",
  supportObservation: "Carte des zones climatiques (page Leçon)",
  analyse: [
    ["Quelles sont les zones très humides de Madagascar ?", "La Côte Est et la région du Sambirano."],
    ["Où se trouve le Sambirano ?", "Au nord-ouest de Madagascar, autour d'Ambanja."],
    ["Pourquoi la Côte Est reçoit-elle beaucoup de pluie ?", "Parce que les vents venant de l'océan Indien apportent leur humidité sur cette côte."],
    ["Comment est le climat des Hautes Terres ?", "Il est plus frais à cause de l'altitude, avec moins de pluies qu'à l'est."],
    ["Pourquoi fait-il plus frais en altitude ?", "Parce que l'air se refroidit quand on monte : plus on gravit, plus il fait frais."],
    ["Quelle végétation couvre la Côte Est humide ?", "La forêt tropicale humide, verte toute l'année."],
  ],
  synthese: "Donc, Madagascar compte plusieurs zones climatiques : la Côte Est et le Sambirano sont très humides, car les vents de l'océan y déversent leurs pluies ; les Hautes Terres centrales ont un climat d'altitude, plus frais, avec une saison sèche bien marquée.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Quelles sont les zones très humides de Madagascar ?",
        "2. Où se trouve le Sambirano ?",
        "3. Pourquoi la Côte Est reçoit-elle beaucoup de pluie ?",
        "4. Comment est le climat des Hautes Terres ?",
      ],
      corrige: [
        "1. La **Côte Est** et le **Sambirano**.",
        "2. Au **nord-ouest**, autour d'Ambanja.",
        "3. Parce que les **vents de l'océan** y apportent leur humidité.",
        "4. Plus **frais** à cause de l'**altitude**, avec une saison sèche marquée.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. La Côte Est est une zone sèche.",
        "2. Le Sambirano se trouve autour d'Ambanja.",
        "3. Il fait plus frais en altitude.",
        "4. La forêt tropicale humide couvre la Côte Est.",
      ],
      corrige: [
        "1. **Faux** : c'est une zone très humide.",
        "2. **Vrai** : au nord-ouest de l'île.",
        "3. **Vrai** : l'air se refroidit en montant.",
        "4. **Vrai** : elle reste verte toute l'année.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : Est — Sambirano — altitude — humide.",
      items: [
        "La Côte ……… est très humide.",
        "Le ……… se trouve au nord-ouest, autour d'Ambanja.",
        "Sur les Hautes Terres, il fait frais à cause de l'……… .",
        "La forêt tropicale ……… pousse sur la côte Est.",
      ],
      corrige: [
        "Côte **Est** / le **Sambirano** / l'**altitude** / forêt tropicale **humide**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. La zone humide du nord-ouest s'appelle : A. le Betsileo — B. le Sambirano — C. le Menabe",
        "2. Les vents humides de la côte Est viennent de : A. l'océan Indien — B. du désert — C. de l'Afrique",
        "3. À Antananarivo, les matinées de saison sèche sont : A. brûlantes — B. fraîches — C. neigeuses",
        "4. La ville d'Ambanja est connue pour : A. ses mines — B. sa culture de vanille et de cacao — C. son désert",
      ],
      corrige: [
        "1. Réponse **B** : le Sambirano.",
        "2. Réponse **A** : de l'océan Indien.",
        "3. Réponse **B** : fraîches, à cause de l'altitude.",
        "4. Réponse **B** : vanille et cacao, grâce à son climat humide.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La Côte Est, très humide",
        paras: [
          "La Côte Est, de Vohémar à Taolagnaro, reçoit des pluies abondantes presque toute l'année.",
          "Les vents chargés d'humidité venus de l'océan Indien rencontrent les premières montagnes et déversent leur pluie : c'est la région la plus arrosée de Madagascar.",
        ],
        exemples: [
          "À Toamasina, il pleut même pendant la saison sèche.",
          "La forêt tropicale humide de Masoala pousse grâce à ces pluies.",
        ],
      },
      {
        titre: "2. Le Sambirano",
        paras: [
          "Le Sambirano est une petite région du nord-ouest, autour d'Ambanja, au bord d'une baie ouverte aux vents humides.",
          "Son climat très pluvieux permet des cultures précieuses : la vanille, le cacao et le café y prospèrent.",
        ],
        exemples: [
          "Le chocolat du Sambirano est célèbre dans tout le pays.",
        ],
      },
      {
        titre: "3. Les Hautes Terres et leur climat d'altitude",
        paras: [
          "Les Hautes Terres centrales, entre 800 et 1 500 mètres d'altitude, ont un climat d'altitude : l'air y est plus frais.",
          "Les matinées de saison sèche sont fraîches, parfois brumeuses, et la saison sèche y est bien marquée.",
        ],
        exemples: [
          "À Antsirabe, à 1 500 mètres, on met une veste le matin en juillet.",
        ],
      },
    ],
  },
  motsCles: ["zone climatique", "Côte Est", "Sambirano", "climat d'altitude", "humide"],
  questionsRevision: [
    ["Quelles sont les zones très humides de Madagascar ?", "La Côte Est et le Sambirano."],
    ["Pourquoi fait-il plus frais sur les Hautes Terres ?", "Parce que l'air se refroidit avec l'altitude."],
  ],
};

const S35 = {
  numero: 35, total: TOTAL,
  titre: "Les zones climatiques (2) : la Côte Ouest et le Sud-Ouest",
  theme: "Les milieux naturels à Madagascar",
  objectif: "Être capable de situer et de caractériser les zones sèches de la Côte Ouest et du Sud-Ouest.",
  image: { id: "geo5_zones_climatiques2", legende: "La Côte Ouest est sèche ; le Sud-Ouest est très sec." },
  scene: { file: "scene_s35_zones_seches.jpg", mode: "document", legende: "Document : le paysage aride du Sud-Ouest, près de Toliara." },
  revisionOuverture: [
    ["Quelles sont les zones très humides de Madagascar ?", "La Côte Est et le Sambirano."],
    ["Pourquoi fait-il plus frais sur les Hautes Terres ?", "Parce que l'air se refroidit avec l'altitude."],
  ],
  miseEnSituation: {
    texte: "Rado voyage avec son oncle chauffeur de taxi-brousse sur la route de Toliara. Plus on descend vers le sud, plus le paysage change : l'herbe devient jaune et rare, les arbres laissent place à des buissons épineux, la poussière vole derrière le véhicule. « Ici, il pleut rarement, explique l'oncle. Certaines années, la pluie n'arrive presque pas. » Rado a soif ; il comprend pourquoi les gens gardent l'eau avec tant de soin.",
    question: "Pourquoi le Sud-Ouest de Madagascar est-il si sec ?",
    ra: "Parce que les vents ont perdu leur humidité avant d'y arriver ; les pluies y sont rares et insuffisantes.",
    support: "Carte des zones climatiques (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les zones climatiques (2) ». Après cette séance, vous serez capables de situer les zones sèches de Madagascar et d'expliquer leurs caractères.",
  observation: "Observez bien la carte : la Côte Ouest est en jaune (sèche) ; le Sud-Ouest et le Grand Sud sont en orange (très secs).",
  supportObservation: "Carte des zones climatiques (page Leçon)",
  analyse: [
    ["Comment est le climat de la Côte Ouest ?", "La Côte Ouest est sèche, avec une longue saison sèche."],
    ["Comment est le climat du Sud-Ouest et du Grand Sud ?", "Ils sont très secs : le climat y est semi-aride."],
    ["Pourquoi ces régions reçoivent-elles peu de pluie ?", "Parce que les vents y arrivent secs, après avoir perdu leur humidité sur le reste de l'île."],
    ["Quelle végétation pousse dans le Sud-Ouest ?", "Des buissons épineux, des didiéracées et quelques baobabs."],
    ["Comment s'appelle une année sans assez de pluie ?", "Une année de sécheresse."],
    ["Comment les habitants s'adaptent-ils au manque d'eau ?", "Ils gardent l'eau avec soin, creusent des puits et élèvent des zébus résistants."],
  ],
  synthese: "Donc, les zones sèches de Madagascar sont la Côte Ouest, sèche avec une longue saison sèche, et le Sud-Ouest avec le Grand Sud, très secs et semi-arides. Les vents y arrivent sans humidité : la végétation épineuse et les baobabs s'y adaptent.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Comment est le climat de la Côte Ouest ?",
        "2. Quelle est la région la plus sèche de Madagascar ?",
        "3. Pourquoi le Sud reçoit-il peu de pluie ?",
        "4. Nomme deux plantes adaptées à la sécheresse.",
      ],
      corrige: [
        "1. La Côte Ouest est **sèche**, avec une longue saison sèche.",
        "2. Le **Sud-Ouest et le Grand Sud**, autour de Toliara.",
        "3. Parce que les **vents** y arrivent **sans humidité**.",
        "4. Les **buissons épineux** et les **baobabs** (aussi les didiéracées).",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Toliara se trouve dans une zone très sèche.",
        "2. La Côte Ouest reçoit plus de pluie que la Côte Est.",
        "3. Le Grand Sud a un climat semi-aride.",
        "4. Les baobabs supportent bien la sécheresse.",
      ],
      corrige: [
        "1. **Vrai** : le climat y est semi-aride.",
        "2. **Faux** : la Côte Est est la plus arrosée.",
        "3. **Vrai**.",
        "4. **Vrai** : leur tronc stocke l'eau.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : Ouest — sèche — épineuse — sécheresse.",
      items: [
        "La Côte ……… a un climat sec.",
        "La région de Toliara est très ……… .",
        "La végétation du Sud est ……… .",
        "Une année sans assez de pluie est une année de ……… .",
      ],
      corrige: [
        "Côte **Ouest** / très **sèche** / **épineuse** / une année de **sécheresse**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le climat du Grand Sud est : A. humide — B. semi-aride — C. polaire",
        "2. Les pluies du Sud-Ouest sont : A. rares et irrégulières — B. quotidiennes — C. abondantes",
        "3. La ville au cœur de la zone très sèche est : A. Toamasina — B. Toliara — C. Antananarivo",
        "4. Face au manque d'eau, les habitants : A. déménagent tous — B. stockent l'eau et creusent des puits — C. nagent",
      ],
      corrige: [
        "1. Réponse **B** : semi-aride.",
        "2. Réponse **A** : rares et irrégulières.",
        "3. Réponse **B** : Toliara.",
        "4. Réponse **B** : ils gardent l'eau avec soin.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La Côte Ouest sèche",
        paras: [
          "De Mahajanga à Morondava, la Côte Ouest reçoit moins de pluie que l'est de l'île.",
          "Sa saison sèche dure longtemps ; les pluies tombent surtout en saison chaude, sous forme d'averses brèves.",
        ],
        exemples: [
          "Autour de Morondava, les baobabs et les savanes supportent la longue saison sèche.",
        ],
      },
      {
        titre: "2. Le Sud-Ouest et le Grand Sud, très secs",
        paras: [
          "Le Sud-Ouest, autour de Toliara, et le Grand Sud sont les régions les plus sèches de Madagascar : le climat y est semi-aride.",
          "Les vents y arrivent secs, et certaines années, la pluie manque cruellement : c'est la sécheresse.",
        ],
        exemples: [
          "À Ambovombe, dans le Grand Sud, les femmes marchent loin pour trouver de l'eau.",
        ],
      },
      {
        titre: "3. Vivre avec peu d'eau",
        paras: [
          "Dans ces régions, rien ne se perd : l'eau de pluie est recueillie dans des citernes et des jarres.",
          "Les habitants élèvent des zébus résistants et cultivent des plantes qui supportent la sécheresse, comme le manioc, le sorgho et le sisal.",
        ],
        exemples: [
          "Le sisal, plante aux longues feuilles fibreuses, pousse sans presque d'eau.",
        ],
      },
    ],
  },
  motsCles: ["zone sèche", "semi-aride", "sécheresse", "épineux", "baobab"],
  questionsRevision: [
    ["Quelle est la région la plus sèche de Madagascar ?", "Le Sud-Ouest et le Grand Sud, autour de Toliara et d'Ambovombe."],
    ["Comment s'appelle une année sans assez de pluie ?", "Une année de sécheresse."],
  ],
};

const S36 = {
  numero: 36, total: TOTAL,
  titre: "Les quatre saisons de l'année",
  theme: "Les milieux naturels à Madagascar",
  objectif: "Être capable de nommer les quatre saisons de l'année et de les décrire.",
  image: { id: "geo5_quatre_saisons", legende: "Les quatre saisons : printemps, été, automne, hiver." },
  scene: { file: "scene_s36_quatre_saisons.jpg", mode: "document", legende: "Document : le flamboyant de la cour d'école annonce le printemps par ses fleurs rouges." },
  revisionOuverture: [
    ["Quelle est la région la plus sèche de Madagascar ?", "Le Sud-Ouest et le Grand Sud."],
    ["Comment s'appelle une année sans assez de pluie ?", "Une année de sécheresse."],
  ],
  miseEnSituation: {
    texte: "Vola reçoit une lettre de sa cousine partie vivre en France. « Ici, écrit la cousine, l'année a quatre saisons. Au printemps, les cerisiers fleurissent. En été, il fait chaud et les jours sont longs. En automne, les feuilles des arbres jaunissent puis tombent. En hiver, il fait froid et il neige : nous fabriquons des bonshommes de neige ! » Vola relit la lettre, émerveillée : elle n'a jamais vu de neige de sa vie.",
    question: "Quelles sont les quatre saisons de l'année dans certains pays du monde ?",
    ra: "Le printemps, l'été, l'automne et l'hiver.",
    support: "Schéma des quatre saisons (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les quatre saisons de l'année ». Après cette séance, vous serez capables de nommer les quatre saisons et de dire ce qui les caractérise.",
  observation: "Observez bien le schéma : quatre panneaux montrent le printemps, l'été, l'automne et l'hiver.",
  supportObservation: "Schéma des quatre saisons (page Leçon)",
  analyse: [
    ["Quelles sont les quatre saisons de l'année ?", "Le printemps, l'été, l'automne et l'hiver."],
    ["Que se passe-t-il au printemps ?", "La nature se réveille : les arbres fleurissent et les oiseaux chantent."],
    ["Comment est l'été ?", "Il fait chaud, les jours sont longs."],
    ["Que fait la nature en automne ?", "Les fruits mûrissent et les feuilles jaunissent puis tombent."],
    ["Comment est l'hiver ?", "Il fait froid, les jours sont courts, et il peut neiger."],
    ["Qu'est-ce qui provoque le changement des saisons ?", "La révolution de la Terre autour du soleil, avec son axe incliné."],
  ],
  synthese: "Donc, dans beaucoup de pays du monde, l'année compte quatre saisons : le printemps où la nature fleurit, l'été chaud, l'automne aux feuilles mortes et l'hiver froid et parfois neigeux. Ces saisons viennent de la révolution de la Terre autour du soleil.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Quelles sont les quatre saisons de l'année ?",
        "2. Que font les arbres au printemps ?",
        "3. Que font les feuilles en automne ?",
        "4. Que voit-on tomber du ciel en hiver dans certains pays ?",
      ],
      corrige: [
        "1. Le **printemps**, l'**été**, l'**automne** et l'**hiver**.",
        "2. Ils **fleurissent**.",
        "3. Elles **jaunissent puis tombent**.",
        "4. La **neige**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. L'été est la saison la plus froide.",
        "2. Les feuilles tombent en automne.",
        "3. Les jours d'hiver sont courts.",
        "4. Les quatre saisons viennent de la rotation de la Terre.",
      ],
      corrige: [
        "1. **Faux** : c'est l'hiver.",
        "2. **Vrai**.",
        "3. **Vrai**.",
        "4. **Faux** : elles viennent de la révolution, avec l'axe incliné.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : printemps — été — automne — hiver.",
      items: [
        "Les arbres fleurissent au ……… .",
        "Il fait chaud en ……… .",
        "Les feuilles tombent en ……… .",
        "Il neige en ……… dans certains pays.",
      ],
      corrige: [
        "au **printemps** / en **été** / en **automne** / en **hiver**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. La saison des fleurs est : A. le printemps — B. l'hiver — C. l'automne",
        "2. La saison la plus chaude est : A. le printemps — B. l'été — C. l'hiver",
        "3. En hiver, les jours sont : A. très longs — B. courts — C. inexistant",
        "4. Les saisons reviennent chaque année grâce : A. à la révolution de la Terre — B. à la lune — C. aux nuages",
      ],
      corrige: [
        "1. Réponse **A** : le printemps.",
        "2. Réponse **B** : l'été.",
        "3. Réponse **B** : courts.",
        "4. Réponse **A** : la révolution, avec l'axe incliné.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Printemps et été",
        paras: [
          "Au printemps (mars à mai dans l'hémisphère Nord), la nature se réveille : fleurs, chants d'oiseaux, jours qui rallongent.",
          "En été (juin à août), le soleil est haut et chaud ; les jours sont les plus longs de l'année.",
        ],
        exemples: [
          "À Madagascar, le flamboyant rougit de ses fleurs vers octobre-novembre, au début de la saison des pluies.",
        ],
      },
      {
        titre: "2. Automne et hiver",
        paras: [
          "En automne (septembre à novembre), les fruits mûrissent, les feuilles jaunissent puis tombent.",
          "En hiver (décembre à février), il fait froid, les jours sont courts, et la neige couvre certains pays.",
        ],
        exemples: [
          "La cousine de Vola fabrique des bonshommes de neige en hiver, en France.",
        ],
      },
      {
        titre: "3. Pourquoi les saisons changent-elles ?",
        paras: [
          "Rappelons la leçon de l'Unité 1 : la Terre tourne autour du soleil en un an, sur un axe incliné.",
          "Selon la position de la Terre sur son chemin, chaque hémisphère reçoit plus ou moins de chaleur : voilà l'origine des saisons.",
        ],
        exemples: [
          "Quand c'est l'été en France, dans l'hémisphère Nord, c'est l'hiver en Australie, dans l'hémisphère Sud.",
        ],
      },
    ],
  },
  motsCles: ["printemps", "été", "automne", "hiver", "saisons"],
  questionsRevision: [
    ["Quelles sont les quatre saisons de l'année ?", "Le printemps, l'été, l'automne et l'hiver."],
    ["Qu'est-ce qui provoque les saisons ?", "La révolution de la Terre autour du soleil, avec son axe incliné."],
  ],
};

const S37 = {
  numero: 37, total: TOTAL,
  titre: "Les deux saisons à Madagascar",
  theme: "Les milieux naturels à Madagascar",
  objectif: "Être capable de décrire les deux saisons de Madagascar et la vie des habitants selon la saison.",
  image: { id: "geo5_deux_saisons", legende: "La saison chaude et pluvieuse et la saison fraîche et sèche." },
  scene: { file: "scene_s37_deux_saisons.jpg", mode: "document", legende: "Document : le repiquage du riz en saison des pluies, sous les nuages d'orage." },
  revisionOuverture: [
    ["Quelles sont les quatre saisons de l'année ?", "Le printemps, l'été, l'automne et l'hiver."],
    ["Qu'est-ce qui provoque les saisons ?", "La révolution de la Terre autour du soleil, avec son axe incliné."],
  ],
  miseEnSituation: {
    texte: "Dans le village de Ranofaly, le calendrier ne compte pas quatre saisons, mais deux. En novembre, quand les premières grandes pluies tombent, tout le monde va aux rizières : c'est le repiquage. De mai à juillet, quand le ciel reste bleu, les familles moissonnent, réparent les toits et préparent les fêtes. Le grand-père de Ranofaly dit : « La saison des pluies nourrit, la saison sèche récolte. »",
    question: "Comment s'appellent les deux saisons de Madagascar et que fait-on pendant chacune ?",
    ra: "La saison chaude et pluvieuse (novembre-avril), pendant laquelle on repique le riz, et la saison fraîche et sèche (mai-octobre), pendant laquelle on récolte.",
    support: "Schéma des deux saisons (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les deux saisons à Madagascar ». Après cette séance, vous serez capables de décrire les deux saisons et la vie des Malgaches selon la saison.",
  observation: "Observez bien le schéma : deux panneaux comparent la saison chaude et pluvieuse et la saison fraîche et sèche.",
  supportObservation: "Schéma des deux saisons (page Leçon)",
  analyse: [
    ["Comment s'appellent les deux saisons de Madagascar ?", "La saison chaude et pluvieuse, et la saison fraîche et sèche."],
    ["Quand a lieu la saison chaude et pluvieuse ?", "De novembre à avril."],
    ["Quand a lieu la saison fraîche et sèche ?", "De mai à octobre."],
    ["Que fait-on dans les rizières en saison des pluies ?", "On repique le jeune riz, qui grandit grâce à l'eau des averses."],
    ["Que fait-on en saison sèche ?", "On récolte le riz, on répare les maisons et on célèbre les fêtes."],
    ["Quel danger menace la saison des pluies ?", "Les cyclones, entre décembre et mars."],
  ],
  synthese: "Donc, Madagascar ne connaît que deux saisons : la saison chaude et pluvieuse, de novembre à avril, qui fait grandir le riz mais apporte parfois des cyclones ; et la saison fraîche et sèche, de mai à octobre, qui apporte la moisson et les fêtes.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Quelles sont les deux saisons de Madagascar ?",
        "2. Que fait-on dans les rizières en saison des pluies ?",
        "3. Que fait-on en saison sèche ?",
        "4. Quel danger arrive parfois en saison des pluies ?",
      ],
      corrige: [
        "1. La saison **chaude et pluvieuse** et la saison **fraîche et sèche**.",
        "2. On **repique** le jeune riz.",
        "3. On **récolte** le riz, on répare les maisons, on fête.",
        "4. Les **cyclones**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. La saison sèche va de mai à octobre.",
        "2. On moissonne le riz en pleine saison des pluies.",
        "3. Les cyclones arrivent entre décembre et mars.",
        "4. Sur les Hautes Terres, les nuits de saison sèche sont fraîches.",
      ],
      corrige: [
        "1. **Vrai**.",
        "2. **Faux** : on moissonne plutôt en saison sèche.",
        "3. **Vrai**.",
        "4. **Vrai** : le thermomètre peut descendre vers 10 °C.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : pluvieuse — sèche — repique — cyclones.",
      items: [
        "De novembre à avril, c'est la saison chaude et ……… .",
        "De mai à octobre, c'est la saison fraîche et ……… .",
        "En saison des pluies, le paysan ……… le jeune riz.",
        "Les ……… menacent l'île de décembre à mars.",
      ],
      corrige: [
        "et **pluvieuse** / et **sèche** / **repique** / les **cyclones**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. En janvier, à Madagascar, on est en : A. saison sèche — B. saison des pluies — C. hiver neigeux",
        "2. En juillet, les Hautes Terres connaissent : A. des nuits fraîches — B. des cyclones — C. de la neige",
        "3. La moisson du riz a lieu plutôt : A. en saison sèche — B. en plein orage — C. sous la neige",
        "4. Les deux saisons malgaches durent environ : A. six mois chacune — B. un mois chacune — C. toute l'année",
      ],
      corrige: [
        "1. Réponse **B** : en saison des pluies.",
        "2. Réponse **A** : des nuits fraîches.",
        "3. Réponse **A** : en saison sèche.",
        "4. Réponse **A** : environ six mois chacune.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La saison chaude et pluvieuse",
        paras: [
          "De novembre à avril, la chaleur s'installe et des averses tombent presque chaque jour, souvent l'après-midi.",
          "C'est la saison du repiquage du riz : les rizières inondées verdissent. Mais c'est aussi la saison des cyclones, de décembre à mars.",
        ],
        exemples: [
          "Le village de Ranofaly vit au rythme des averses : « la saison des pluies nourrit ».",
        ],
      },
      {
        titre: "2. La saison fraîche et sèche",
        paras: [
          "De mai à octobre, le ciel reste bleu et les pluies se font rares.",
          "Sur les Hautes Terres, les nuits sont fraîches ; c'est la saison des moissons, des réparations des maisons et des fêtes familiales.",
        ],
        exemples: [
          "En juin, les gerbes de riz sèchent au soleil avant le battage.",
        ],
      },
      {
        titre: "3. La vie suit les saisons",
        paras: [
          "Paysans, pêcheurs et marchands organisent leur année sur les deux saisons.",
          "Les routes de campagne sont praticables en saison sèche ; les rivières gonflent en saison des pluies.",
        ],
        exemples: [
          "Les fêtes de Famadihana ont souvent lieu en saison sèche, quand les familles se réunissent.",
        ],
      },
    ],
  },
  motsCles: ["saison chaude et pluvieuse", "saison fraîche et sèche", "repiquage", "moisson", "cyclone"],
  questionsRevision: [
    ["Quand a lieu la saison chaude et pluvieuse ?", "De novembre à avril."],
    ["Que fait-on en saison sèche ?", "On récolte le riz, on répare les maisons et on célèbre les fêtes."],
  ],
};

const S38 = {
  numero: 38, total: TOTAL,
  titre: "Les principaux fleuves (1) : le Mangoky, la Sofia et la Betsiboka",
  theme: "Les milieux naturels à Madagascar",
  objectif: "Être capable de citer et de situer les principaux fleuves de Madagascar : Mangoky, Sofia, Betsiboka.",
  image: { id: "geo5_fleuves1", legende: "Le Mangoky, la Sofia et la Betsiboka sur la carte de Madagascar." },
  scene: { file: "scene_s38_fleuves1.jpg", mode: "document", legende: "Document : l'estuaire rouge de la Betsiboka à Mahajanga, chargé de latérite." },
  revisionOuverture: [
    ["Quand a lieu la saison chaude et pluvieuse ?", "De novembre à avril."],
    ["Que fait-on en saison sèche ?", "On récolte le riz, on répare les maisons et on célèbre les fêtes."],
  ],
  miseEnSituation: {
    texte: "Pour le jeu-questionnaire du vendredi, la maîtresse pose une devinette : « Je suis le fleuve le plus long de Madagascar. Je nais sur les Hautes Terres, je coule vers le sud-ouest et je me jette dans le canal de Mozambique, près de Morombe. Mes méandres sont si larges qu'on les voit depuis l'espace. Qui suis-je ? » Toute la classe cherche… « Le Mangoky ! », s'écrie enfin Rakoto.",
    question: "Quels sont les trois grands fleuves de Madagascar et où coulent-ils ?",
    ra: "Le Mangoky (le plus long, 821 km), la Sofia au nord-ouest et la Betsiboka qui se jette à Mahajanga.",
    support: "Carte des fleuves (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les principaux fleuves (1) ». Après cette séance, vous serez capables de citer et de situer le Mangoky, la Sofia et la Betsiboka.",
  observation: "Observez bien la carte : trois traits bleus épais montrent le Mangoky, la Sofia et la Betsiboka.",
  supportObservation: "Carte des fleuves (page Leçon)",
  analyse: [
    ["Quel est le fleuve le plus long de Madagascar ?", "Le Mangoky : 821 kilomètres."],
    ["Où le Mangoky se jette-t-il ?", "Dans le canal de Mozambique, près de Morombe, au sud-ouest."],
    ["Où coule la Sofia ?", "Au nord-ouest de Madagascar ; elle se jette dans le canal de Mozambique."],
    ["Où se jette la Betsiboka ?", "À Mahajanga, dans le canal de Mozambique."],
    ["Pourquoi l'estuaire de la Betsiboka est-il rouge ?", "Parce que ses eaux entraînent la terre rouge des latérites arrachée aux collines dénudées."],
    ["Où naissent ces grands fleuves ?", "Sur les Hautes Terres centrales, d'où ils descendent vers la mer.",
    ],
  ],
  synthese: "Donc, les principaux fleuves de Madagascar sont le Mangoky, le plus long avec 821 kilomètres, qui se jette près de Morombe ; la Sofia au nord-ouest ; et la Betsiboka, dont l'estuaire rouge s'ouvre à Mahajanga.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Quel est le fleuve le plus long de Madagascar et quelle est sa longueur ?",
        "2. Où se jette le Mangoky ?",
        "3. Où se jette la Betsiboka ?",
        "4. Pourquoi l'eau de la Betsiboka est-elle rouge ?",
      ],
      corrige: [
        "1. Le **Mangoky**, long de **821 kilomètres**.",
        "2. Dans le canal de Mozambique, **près de Morombe**.",
        "3. À **Mahajanga**.",
        "4. Parce qu'elle entraîne la **terre rouge** (latérite) des collines.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. La Sofia coule au sud-est de Madagascar.",
        "2. Le Mangoky mesure 821 kilomètres.",
        "3. La Betsiboka se jette à Mahajanga.",
        "4. Les grands fleuves malgaches descendent des Hautes Terres.",
      ],
      corrige: [
        "1. **Faux** : elle coule au nord-ouest.",
        "2. **Vrai** : c'est le plus long.",
        "3. **Vrai**.",
        "4. **Vrai**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : Mangoky — 821 — Sofia — Betsiboka.",
      items: [
        "Le fleuve le plus long est le ……… .",
        "Il mesure ……… kilomètres.",
        "La ……… coule au nord-ouest de l'île.",
        "La ……… se jette à Mahajanga.",
      ],
      corrige: [
        "le **Mangoky** / **821** kilomètres / la **Sofia** / la **Betsiboka**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le Mangoky se jette près de : A. Toamasina — B. Morombe — C. Diego",
        "2. L'estuaire rouge de la Betsiboka est visible : A. à Mahajanga — B. à Toliara — C. à Fianarantsoa",
        "3. La couleur rouge de l'eau vient : A. de la latérite — B. des poissons — C. des algues",
        "4. Les méandres du Mangoky : A. se voient depuis l'espace — B. sont droits — C. n'existent pas",
      ],
      corrige: [
        "1. Réponse **B** : près de Morombe.",
        "2. Réponse **A** : à Mahajanga.",
        "3. Réponse **A** : la terre rouge des collines.",
        "4. Réponse **A** : leurs boucles sont immenses.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Le Mangoky, le plus long",
        paras: [
          "Le Mangoky est le fleuve le plus long de Madagascar : 821 kilomètres.",
          "Né sur les Hautes Terres, il coule vers le sud-ouest et dessine de grands méandres avant de se jeter dans le canal de Mozambique, près de Morombe.",
        ],
        exemples: [
          "Ses boucles ocre sont si vastes que les satellites les photographient.",
        ],
      },
      {
        titre: "2. La Sofia",
        paras: [
          "La Sofia coule au nord-ouest de Madagascar.",
          "Elle traverse des plaines rizicoles avant de rejoindre le canal de Mozambique.",
        ],
        exemples: [
          "La vallée de la Sofia compte parmi les greniers à riz du nord-ouest.",
        ],
      },
      {
        titre: "3. La Betsiboka et son estuaire rouge",
        paras: [
          "La Betsiboka descend des Hautes Terres vers Mahajanga, où elle s'ouvre en large estuaire.",
          "Ses eaux sont rouges : elles entraînent la latérite, la terre rouge arrachée aux collines dénudées par l'érosion.",
        ],
        exemples: [
          "Vu du ciel, l'estuaire de la Betsiboka ressemble à un arbre rouge sur la mer.",
        ],
      },
    ],
  },
  motsCles: ["fleuve", "Mangoky", "Sofia", "Betsiboka", "estuaire", "latérite"],
  questionsRevision: [
    ["Quel est le fleuve le plus long de Madagascar ?", "Le Mangoky : 821 kilomètres."],
    ["Où se jette la Betsiboka ?", "À Mahajanga, dans le canal de Mozambique."],
  ],
};

const S39 = {
  numero: 39, total: TOTAL,
  titre: "Les principaux fleuves (2) : la Tsiribihina, l'Onilahy et le Mangoro",
  theme: "Les milieux naturels à Madagascar",
  objectif: "Être capable de citer et de situer la Tsiribihina, l'Onilahy et le Mangoro.",
  image: { id: "geo5_fleuves2", legende: "La Tsiribihina, l'Onilahy et le Mangoro sur la carte de Madagascar." },
  scene: { file: "scene_s39_fleuves2.jpg", mode: "document", legende: "Document : la descente de la Tsiribihina en pirogue, entre les collines." },
  revisionOuverture: [
    ["Quel est le fleuve le plus long de Madagascar ?", "Le Mangoky : 821 kilomètres."],
    ["Où se jette la Betsiboka ?", "À Mahajanga, dans le canal de Mozambique."],
  ],
  miseEnSituation: {
    texte: "Rakoto réalise enfin son rêve : avec son père et des voyageurs, il descend la Tsiribihina en pirogue pendant deux jours. Le fleuve coule tranquillement entre des collines dénudées, tourne autour de bancs de sable, franchit quelques rapides. Le soir, on campe sur la plage. Le deuxième jour, le fleuve s'élargit et rejoint la mer près de Belo sur Tsiribihina. « Quel voyage ! » souffle Rakoto.",
    question: "Où coulent la Tsiribihina, l'Onilahy et le Mangoro ?",
    ra: "La Tsiribihina coule à l'ouest et se jette près de Belo sur Tsiribihina ; l'Onilahy au sud-ouest près de Toliara ; le Mangoro coule vers l'est et se jette dans l'océan Indien.",
    support: "Carte des fleuves (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les principaux fleuves (2) ». Après cette séance, vous serez capables de citer et de situer la Tsiribihina, l'Onilahy et le Mangoro.",
  observation: "Observez bien la carte : trois traits bleus épais montrent la Tsiribihina à l'ouest, l'Onilahy au sud-ouest et le Mangoro à l'est.",
  supportObservation: "Carte des fleuves (page Leçon)",
  analyse: [
    ["Où se jette la Tsiribihina ?", "Près de Belo sur Tsiribihina, sur la côte ouest."],
    ["Comment est le voyage sur la Tsiribihina ?", "Long et paisible : le fleuve coule entre des collines, avec des bancs de sable et quelques rapides."],
    ["Où se jette l'Onilahy ?", "Dans un grand estuaire près de Toliara, au sud-ouest."],
    ["Vers où coule le Mangoro ?", "Vers l'est : il se jette dans l'océan Indien."],
    ["Quelle est la particularité du Mangoro ?", "Contrairement à la plupart des grands fleuves, il coule vers l'est, dans l'océan Indien."],
    ["Pourquoi les fleuves malgaches sont-ils courts ?", "Parce que l'île est étroite : ils descendent vite des Hautes Terres vers la mer.",
    ],
  ],
  synthese: "Donc, trois autres fleuves importants complètent la liste : la Tsiribihina, qui descend vers Belo sur la côte ouest ; l'Onilahy, qui s'ouvre près de Toliara ; et le Mangoro, qui coule vers l'océan Indien, à l'est.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Où se jette la Tsiribihina ?",
        "2. Où se jette l'Onilahy ?",
        "3. Vers où coule le Mangoro ?",
        "4. Pourquoi les fleuves malgaches sont-ils courts ?",
      ],
      corrige: [
        "1. Près de **Belo sur Tsiribihina**, sur la côte ouest.",
        "2. Près de **Toliara**, au sud-ouest.",
        "3. Vers l'**est**, dans l'océan Indien.",
        "4. Parce que l'île est **étroite** : ils descendent vite vers la mer.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. L'Onilahy se jette près de Toliara.",
        "2. Le Mangoro coule vers l'ouest.",
        "3. La Tsiribihina traverse des gorges et des bancs de sable.",
        "4. On descend la Tsiribihina en pirogue pendant plusieurs jours.",
      ],
      corrige: [
        "1. **Vrai**.",
        "2. **Faux** : il coule vers l'est.",
        "3. **Vrai**.",
        "4. **Vrai** : c'est un fameux voyage.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : Tsiribihina — Onilahy — Mangoro — Indien.",
      items: [
        "La ……… se jette près de Belo, sur la côte ouest.",
        "L'……… ouvre son estuaire près de Toliara.",
        "Le ……… coule vers l'est.",
        "Il se jette dans l'océan ……… .",
      ],
      corrige: [
        "La **Tsiribihina** / l'**Onilahy** / le **Mangoro** / l'océan **Indien**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Rakoto a descendu : A. la Tsiribihina — B. le Mangoro — C. l'Onilahy",
        "2. L'estuaire de l'Onilahy se trouve près de : A. Mahajanga — B. Toliara — C. Toamasina",
        "3. Le Mangoro se jette : A. dans le canal de Mozambique — B. dans l'océan Indien — C. dans le lac Alaotra",
        "4. Les fleuves malgaches sont : A. courts et rapides — B. très larges et lents — C. secs",
      ],
      corrige: [
        "1. Réponse **A** : la Tsiribihina.",
        "2. Réponse **B** : près de Toliara.",
        "3. Réponse **B** : dans l'océan Indien.",
        "4. Réponse **A** : courts et rapides.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La Tsiribihina, la route des pirogues",
        paras: [
          "La Tsiribihina descend des plateaux de l'Ouest et coule entre des collines dénudées.",
          "On la descend en pirogue pendant plusieurs jours, jusqu'à Belo sur Tsiribihina, près de la mer.",
        ],
        exemples: [
          "Les voyageurs de Rakoto ont campé une nuit sur la plage du fleuve.",
        ],
      },
      {
        titre: "2. L'Onilahy, l'estuaire du sud",
        paras: [
          "L'Onilahy coule au sud-ouest de l'île.",
          "Près de Toliara, il s'ouvre en un vaste estuaire que traversent les pirogues de pêche.",
        ],
        exemples: [
          "Le pont de l'Onilahy, sur la route de Toliara, est l'un des plus longs de Madagascar.",
        ],
      },
      {
        titre: "3. Le Mangoro, le fleuve de l'est",
        paras: [
          "Le Mangoro prend sa source près des Hautes Terres et choisit la pente de l'est.",
          "Il traverse la forêt tropicale humide et se jette dans l'océan Indien, près de Mahanoro.",
        ],
        exemples: [
          "Ses eaux font tourner des centrales hydroélectriques.",
        ],
      },
    ],
  },
  motsCles: ["Tsiribihina", "Onilahy", "Mangoro", "estuaire", "océan Indien"],
  questionsRevision: [
    ["Cite trois fleuves appris aujourd'hui.", "La Tsiribihina, l'Onilahy et le Mangoro."],
    ["Vers où coule le Mangoro ?", "Vers l'est, dans l'océan Indien, près de Mahanoro."],
  ],
};

const S40 = {
  numero: 40, total: TOTAL,
  titre: "Les principaux lacs naturels",
  theme: "Les milieux naturels à Madagascar",
  objectif: "Être capable de citer et de situer les principaux lacs naturels de Madagascar.",
  image: { id: "geo5_lacs_naturels", legende: "Alaotra, Itasy, Kinkony et Tsimanampetsotsa sur la carte." },
  scene: { file: "scene_s40_lacs_naturels.jpg", mode: "document", legende: "Document : le lac Itasy et son île, au plan d'eau calme." },
  revisionOuverture: [
    ["Cite trois fleuves appris aujourd'hui.", "La Tsiribihina, l'Onilahy et le Mangoro."],
    ["Vers où coule le Mangoro ?", "Vers l'est, dans l'océan Indien."],
  ],
  miseEnSituation: {
    texte: "La grand-mère de Vola lui raconte son enfance au bord du lac Alaotra : « Nous partions en pirogue au lever du jour, glissant entre les roseaux. Des lémuriens sautaient d'une tige à l'autre : les bandros, les lémuriens des roseaux. Le lac nous donnait du poisson, et ses rizières nourrissaient toute la région. » Vola écoute, rêveuse : elle voudrait voir ce grand lac.",
    question: "Quels sont les principaux lacs naturels de Madagascar ?",
    ra: "Le lac Alaotra, le plus grand ; le lac Itasy ; le lac Kinkony ; et le lac Tsimanampetsotsa.",
    support: "Carte des lacs (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les principaux lacs naturels ». Après cette séance, vous serez capables de citer et de situer les principaux lacs naturels de Madagascar.",
  observation: "Observez bien la carte : quatre points bleus marquent les lacs Alaotra, Itasy, Kinkony et Tsimanampetsotsa.",
  supportObservation: "Carte des lacs (page Leçon)",
  analyse: [
    ["Qu'est-ce qu'un lac naturel ?", "C'est une étendue d'eau entourée de terre, née sans l'intervention de l'homme."],
    ["Quel est le plus grand lac naturel de Madagascar ?", "Le lac Alaotra."],
    ["Où se trouve le lac Alaotra ?", "À l'est des Hautes Terres ; ses rizières nourrissent toute la région."],
    ["Comment est né le lac Itasy ?", "Il est né dans un ancien volcan ; une île se dresse en son milieu."],
    ["Où se trouve le lac Kinkony ?", "Au nord-ouest, près de Mitsinjo ; c'est le deuxième grand lac de Madagascar."],
    ["Quelle est la particularité du lac Tsimanampetsotsa ?", "C'est un lac salé du sud-ouest, protégé par un parc national où vivent des flamants roses."],
  ],
  synthese: "Donc, les principaux lacs naturels de Madagascar sont le lac Alaotra, le plus grand, pays du riz et des bandros ; le lac Itasy, né d'un volcan ; le lac Kinkony au nord-ouest ; et le lac salé Tsimanampetsotsa, au sud-ouest.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'un lac naturel ?",
        "2. Quel est le plus grand lac naturel de Madagascar ?",
        "3. Comment est né le lac Itasy ?",
        "4. Quelle est la particularité du lac Tsimanampetsotsa ?",
      ],
      corrige: [
        "1. Une étendue d'eau entourée de terre, **née sans l'homme**.",
        "2. Le **lac Alaotra**.",
        "3. Dans un **ancien volcan**.",
        "4. C'est un **lac salé**, protégé par un parc national.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le lac Alaotra est le plus grand lac de Madagascar.",
        "2. Le lac Kinkony se trouve au sud-est.",
        "3. Le lac Itasy a une île en son milieu.",
        "4. Des flamants roses vivent au lac Tsimanampetsotsa.",
      ],
      corrige: [
        "1. **Vrai**.",
        "2. **Faux** : au nord-ouest, près de Mitsinjo.",
        "3. **Vrai**.",
        "4. **Vrai** : c'est un parc national.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : Alaotra — Itasy — Kinkony — salé.",
      items: [
        "Le lac ……… est le plus grand lac naturel.",
        "Le lac ……… est né dans un ancien volcan.",
        "Le lac ……… se trouve au nord-ouest, près de Mitsinjo.",
        "Le lac Tsimanampetsotsa est un lac ……… .",
      ],
      corrige: [
        "l'**Alaotra** / l'**Itasy** / le **Kinkony** / un lac **salé**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le lac Alaotra est célèbre pour : A. ses rizières — B. sa neige — C. son désert",
        "2. Le bandro est : A. un poisson — B. un lémurien des roseaux — C. un oiseau",
        "3. Le lac Tsimanampetsotsa se trouve : A. au nord — B. au sud-ouest — C. au centre",
        "4. Un lac naturel est créé : A. par l'homme — B. sans l'intervention de l'homme — C. par les touristes",
      ],
      corrige: [
        "1. Réponse **A** : ses rizières entourent le lac.",
        "2. Réponse **B** : le lémurien des roseaux du lac Alaotra.",
        "3. Réponse **B** : au sud-ouest, près de Toliara.",
        "4. Réponse **B** : la nature l'a créé.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Le lac Alaotra",
        paras: [
          "Le lac Alaotra est le plus grand lac naturel de Madagascar, à l'est des Hautes Terres.",
          "Ses rives couvertes de rizières en font le premier pays du riz malgache ; ses roseaux abritent le bandro, le lémurien des roseaux.",
        ],
        exemples: [
          "La grand-mère de Vola pêchait au lever du jour sur le lac Alaotra.",
        ],
      },
      {
        titre: "2. Le lac Itasy et le lac Kinkony",
        paras: [
          "Le lac Itasy, non loin d'Antananarivo, est né dans un ancien volcan ; une île verte se dresse en son milieu.",
          "Le lac Kinkony, au nord-ouest près de Mitsinjo, est le deuxième grand lac de l'île ; ses eaux poissonneuses nourrissent les villages.",
        ],
        exemples: [
          "Le dimanche, les familles d'Antananarivo pique-niquent au bord de l'Itasy.",
        ],
      },
      {
        titre: "3. Le lac Tsimanampetsotsa",
        paras: [
          "Tout au sud-ouest, près de Toliara, s'étend le lac Tsimanampetsotsa.",
          "Son eau est salée ; le parc national qui l'entoure protège des flamants roses et des tortues à l'étrange regard.",
        ],
        exemples: [
          "Des milliers de flamants roses teintent le lac en rose à la saison sèche.",
        ],
      },
    ],
  },
  motsCles: ["lac naturel", "Alaotra", "Itasy", "Kinkony", "Tsimanampetsotsa", "bandro"],
  questionsRevision: [
    ["Quel est le plus grand lac naturel de Madagascar ?", "Le lac Alaotra."],
    ["Quelle est la particularité du lac Tsimanampetsotsa ?", "C'est un lac salé, protégé par un parc national."],
  ],
};

const S41 = {
  numero: 41, total: TOTAL,
  titre: "Les lacs artificiels",
  theme: "Les milieux naturels à Madagascar",
  objectif: "Être capable d'expliquer ce qu'est un lac artificiel et de citer Mantasoa et Tsiazompaniry.",
  image: { id: "geo5_lacs_artificiels", legende: "Un lac de barrage retient l'eau derrière un mur ; Mantasoa et Tsiazompaniry près d'Antananarivo." },
  scene: { file: "scene_s41_lacs_artificiels.jpg", mode: "document", legende: "Document : le lac de Mantasoa, né d'un barrage entre ses collines." },
  revisionOuverture: [
    ["Quel est le plus grand lac naturel de Madagascar ?", "Le lac Alaotra."],
    ["Quelle est la particularité du lac Tsimanampetsotsa ?", "C'est un lac salé, protégé par un parc national."],
  ],
  miseEnSituation: {
    texte: "La classe de Faniry visite le lac de Mantasoa. Devant eux, un vaste plan d'eau s'étire entre les collines. « Ce lac n'a pas toujours existé, explique le guide. Autrefois, une rivière coulait ici dans une vallée étroite. Les hommes ont construit un grand mur de pierre — un barrage — qui a retenu l'eau de la rivière. La vallée s'est remplie, et le lac est né. » Faniry pose une question : « Alors, c'est nous qui avons fabriqué ce lac ? » — « Exactement ! »",
    question: "Qu'est-ce qu'un lac artificiel et pourquoi les hommes en créent-ils ?",
    ra: "Un lac artificiel est un lac créé par l'homme grâce à un barrage ; il sert à produire de l'électricité, à irriguer et à élever des poissons.",
    support: "Schéma du lac de barrage (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les lacs artificiels ». Après cette séance, vous serez capables d'expliquer ce qu'est un lac artificiel et de citer Mantasoa et Tsiazompaniry.",
  observation: "Observez bien le schéma : le barrage retient l'eau de la rivière et forme le lac ; sur la carte, deux points bleus marquent Mantasoa et Tsiazompaniry.",
  supportObservation: "Schéma du lac de barrage (page Leçon)",
  analyse: [
    ["Qu'est-ce qu'un lac artificiel ?", "C'est un lac créé par l'homme, en retenant l'eau d'une rivière derrière un barrage."],
    ["Qu'est-ce qu'un barrage ?", "C'est un mur construit en travers d'une vallée pour retenir l'eau."],
    ["Où se trouve le lac de Mantasoa ?", "À l'est d'Antananarivo."],
    ["Où se trouve le lac Tsiazompaniry ?", "Au sud-est d'Antananarivo."],
    ["À quoi servent ces lacs de barrage ?", "À produire de l'électricité, à irriguer les rizières en aval et à élever des poissons."],
    ["Quelle est la différence entre un lac naturel et un lac artificiel ?", "Le lac naturel est né sans l'homme ; le lac artificiel a été créé par l'homme."],
  ],
  synthese: "Donc, un lac artificiel est créé par l'homme : un barrage retient l'eau d'une rivière et la vallée se remplit. Près d'Antananarivo, Mantasoa et Tsiazompaniry sont de tels lacs, qui donnent de l'électricité, de l'irrigation et du poisson.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'un lac artificiel ?",
        "2. Qu'est-ce qu'un barrage ?",
        "3. Cite deux lacs artificiels de Madagascar.",
        "4. À quoi servent les lacs de barrage ?",
      ],
      corrige: [
        "1. Un lac **créé par l'homme** derrière un barrage.",
        "2. Un **mur** qui retient l'eau d'une rivière.",
        "3. **Mantasoa** et **Tsiazompaniry**.",
        "4. À produire de l'**électricité**, à **irriguer** et à élever des **poissons**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le lac de Mantasoa existait avant les hommes.",
        "2. Un barrage retient l'eau d'une rivière.",
        "3. Tsiazompaniry se trouve près d'Antananarivo.",
        "4. Les lacs artificiels servent à la pisciculture.",
      ],
      corrige: [
        "1. **Faux** : il a été créé par un barrage.",
        "2. **Vrai**.",
        "3. **Vrai** : au sud-est de la capitale.",
        "4. **Vrai** : on y élève des poissons.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : artificiel — barrage — Mantasoa — électricité.",
      items: [
        "Un lac créé par l'homme est un lac ……… .",
        "Le mur qui retient l'eau s'appelle un ……… .",
        "Le lac de ……… se trouve à l'est d'Antananarivo.",
        "Les lacs de barrage produisent de l'……… .",
      ],
      corrige: [
        "un lac **artificiel** / un **barrage** / le lac de **Mantasoa** / de l'**électricité**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Mantasoa et Tsiazompaniry sont : A. des volcans — B. des lacs artificiels — C. des fleuves",
        "2. Un lac artificiel naît : A. d'un barrage construit par l'homme — B. d'un volcan — C. de la pluie seulement",
        "3. L'eau retenue par un barrage sert aussi : A. à irriguer les rizières — B. à faire voler les avions — C. à rien",
        "4. Le lac Alaotra est : A. artificiel — B. naturel — C. salé",
      ],
      corrige: [
        "1. Réponse **B** : des lacs de barrage.",
        "2. Réponse **A** : un barrage retient la rivière.",
        "3. Réponse **A** : les canaux remplissent les rizières en aval.",
        "4. Réponse **B** : naturel.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Fabriquer un lac",
        paras: [
          "Quand les hommes construisent un barrage en travers d'une vallée, la rivière s'accumule derrière le mur.",
          "La vallée se remplit peu à peu : un lac artificiel est né. On l'appelle aussi lac de barrage.",
        ],
        exemples: [
          "Le guide de Mantasoa a montré à Faniry le mur qui a donné naissance au lac.",
        ],
      },
      {
        titre: "2. Mantasoa et Tsiazompaniry",
        paras: [
          "Le lac de Mantasoa s'étend à l'est d'Antananarivo, entre des collines boisées.",
          "Le lac Tsiazompaniry se trouve au sud-est de la capitale ; ses eaux irriguent les rizières des plaines en aval.",
        ],
        exemples: [
          "Le dimanche, des pêcheurs en pirogue posent leurs filets sur Mantasoa.",
        ],
      },
      {
        titre: "3. À quoi servent les lacs de barrage",
        paras: [
          "L'eau du lac fait tourner des turbines et produit de l'électricité.",
          "Elle remplit les canaux d'irrigation, abreuve les troupeaux et permet la pisciculture : l'élevage des poissons dans des cages flottantes.",
        ],
        exemples: [
          "Dans le lac Tsiazompaniry, des cageots flottants remplis de tilapias se balancent au vent.",
        ],
      },
    ],
  },
  motsCles: ["lac artificiel", "barrage", "Mantasoa", "Tsiazompaniry", "pisciculture"],
  questionsRevision: [
    ["Qu'est-ce qu'un lac artificiel ?", "Un lac créé par l'homme, derrière un barrage."],
    ["Cite deux lacs artificiels de Madagascar.", "Mantasoa et Tsiazompaniry."],
  ],
};

const S42 = {
  numero: 42, total: TOTAL,
  titre: "L'utilité des cours d'eau et des lacs",
  theme: "Les milieux naturels à Madagascar",
  objectif: "Être capable de citer les utilités des cours d'eau et des lacs pour les Malgaches.",
  image: { id: "geo5_utilite_eau", legende: "Pêche, transport, irrigation, électricité, eau ménagère, abreuvement." },
  scene: { file: "scene_s42_utilite_eau.jpg", mode: "document", legende: "Document : un canal d'irrigation amène l'eau du fleuve vers les rizières." },
  revisionOuverture: [
    ["Qu'est-ce qu'un lac artificiel ?", "Un lac créé par l'homme, derrière un barrage."],
    ["Cite deux lacs artificiels de Madagascar.", "Mantasoa et Tsiazompaniry."],
  ],
  miseEnSituation: {
    texte: "Une journée au village de Mahaleo, au bord de la rivière. Le matin, les pêcheurs relèvent leurs filets remplis de tilapias. À midi, le père de Soa ouvre la vanne du canal : l'eau court vers les rizières. L'après-midi, une pirogue chargée de sacs de charbon descend le courant. Le soir, les femmes lavent le linge au bord de l'eau pendant que les zébus boivent. « Notre rivière, c'est notre trésor », dit la maman de Soa.",
    question: "À quoi servent les cours d'eau et les lacs pour les habitants ?",
    ra: "Ils servent à la pêche, au transport, à l'irrigation, à l'électricité, à l'eau ménagère et à l'abreuvement des animaux.",
    support: "Schéma de l'utilité de l'eau (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « L'utilité des cours d'eau et des lacs ». Après cette séance, vous serez capables de citer toutes les utilités de l'eau pour les Malgaches.",
  observation: "Observez bien le schéma : six panneaux montrent les services de l'eau des rivières et des lacs.",
  supportObservation: "Schéma de l'utilité de l'eau (page Leçon)",
  analyse: [
    ["Comment la rivière nourrit-elle le village ?", "Par la pêche : tilapias, carpes et crevettes."],
    ["À quoi sert la pirogue sur la rivière ?", "Au transport des personnes et des marchandises, comme les sacs de charbon."],
    ["Qu'est-ce que l'irrigation ?", "C'est l'arrosage des champs grâce à des canaux qui prennent l'eau de la rivière."],
    ["Comment obtient-on de l'électricité grâce à l'eau ?", "L'eau des barrages fait tourner des turbines qui fabriquent le courant."],
    ["Comment l'eau sert-elle à la maison ?", "Pour boire, cuisiner, se laver et laver le linge."],
    ["Qui vient boire à la rivière en fin de journée ?", "Les zébus et les autres animaux du village."],
  ],
  synthese: "Donc, les cours d'eau et les lacs servent à tout : la pêche, le transport par pirogue, l'irrigation des rizières, l'électricité des barrages, l'eau ménagère et l'abreuvement des animaux. L'eau est le trésor du village.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Comment la rivière nourrit-elle le village ?",
        "2. Qu'est-ce que l'irrigation ?",
        "3. Comment l'eau donne-t-elle de l'électricité ?",
        "4. Cite deux usages de l'eau à la maison.",
      ],
      corrige: [
        "1. Par la **pêche** : tilapias, carpes, crevettes.",
        "2. L'**arrosage des champs** grâce à des canaux.",
        "3. L'eau des barrages fait tourner des **turbines**.",
        "4. **Boire** et **cuire** les aliments (aussi se laver, laver le linge).",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Les pirogues transportent des marchandises sur les rivières.",
        "2. L'irrigation arrose les rizières.",
        "3. Les barrages fabriquent de l'essence.",
        "4. Les zébus viennent boire à la rivière.",
      ],
      corrige: [
        "1. **Vrai**.",
        "2. **Vrai**.",
        "3. **Faux** : ils fabriquent de l'électricité.",
        "4. **Vrai**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : pêche — irrigation — électricité — abreuvement.",
      items: [
        "Les poissons de la rivière donnent la ……… .",
        "Les canaux des rizières font l'……… .",
        "Les barrages produisent l'……… .",
        "Les zébus viennent boire : c'est l'……… .",
      ],
      corrige: [
        "la **pêche** / l'**irrigation** / l'**électricité** / l'**abreuvement**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le tilapia est : A. un poisson — B. un lac — C. un barrage",
        "2. L'irrigation sert : A. aux champs — B. aux avions — C. aux étoiles",
        "3. Dans les lacs de barrage, on élève aussi : A. des poissons en cages — B. des zébus — C. des avions",
        "4. La pirogue sert : A. à transporter — B. à irriguer — C. à voler",
      ],
      corrige: [
        "1. Réponse **A** : un poisson très pêché.",
        "2. Réponse **A** : à arroser les champs.",
        "3. Réponse **A** : la pisciculture en cages flottantes.",
        "4. Réponse **A** : personnes et marchandises.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. L'eau qui nourrit",
        paras: [
          "Rivières et lacs donnent du poisson : tilapias, carpes, écrevisses et crevettes.",
          "Grâce aux canaux d'irrigation, l'eau remplit les rizières et les champs de légumes.",
        ],
        exemples: [
          "À Mahaleo, le père de Soa ouvre la vanne et l'eau court vers les parcelles.",
        ],
      },
      {
        titre: "2. L'eau qui fait circuler et travailler",
        paras: [
          "Sur les grands fleuves, pirogues et chalands transportent personnes et marchandises.",
          "Dans les montagnes, les barrages retiennent l'eau : les turbines fabriquent de l'électricité pour les villes.",
        ],
        exemples: [
          "Des chalands descendent la Betsiboka jusqu'au port de Mahajanga.",
        ],
      },
      {
        titre: "3. L'eau de chaque jour",
        paras: [
          "Chaque matin, les familles puisent l'eau pour boire, cuisiner et se laver.",
          "Le soir, les troupeaux descendent boire au fleuve : c'est l'abreuvement.",
        ],
        exemples: [
          "« Notre rivière, c'est notre trésor », répète la maman de Soa.",
        ],
      },
    ],
  },
  motsCles: ["pêche", "transport", "irrigation", "barrage hydroélectrique", "eau ménagère", "abreuvement"],
  questionsRevision: [
    ["Cite trois utilités des cours d'eau et des lacs.", "La pêche, l'irrigation et le transport (aussi l'électricité, l'eau ménagère, l'abreuvement)."],
    ["Qu'est-ce que l'irrigation ?", "L'arrosage des champs grâce à des canaux qui prennent l'eau de la rivière."],
  ],
};

const S43 = {
  numero: 43, total: TOTAL,
  titre: "Les problèmes de l'eau",
  theme: "Les milieux naturels à Madagascar",
  objectif: "Être capable de décrire les problèmes de l'eau à Madagascar et de proposer des solutions.",
  image: { id: "geo5_problemes_eau", legende: "Pollution, accès difficile à l'eau potable, dégradation des ressources en eau." },
  scene: { file: "scene_s43_problemes_eau.jpg", mode: "document", legende: "Document : la longue marche des bidons d'eau dans la campagne sèche." },
  revisionOuverture: [
    ["Cite trois utilités des cours d'eau et des lacs.", "La pêche, l'irrigation et le transport."],
    ["Qu'est-ce que l'irrigation ?", "L'arrosage des champs grâce à des canaux."],
  ],
  miseEnSituation: {
    texte: "Au village de Tsarahonenana, plusieurs enfants sont tombés malades après avoir bu l'eau du marigot. Le médecin du centre de santé explique : « Cette eau est polluée : des déchets et de l'eau sale s'y déversent en amont. Il faut la faire bouillir avant de boire, ou mieux, puiser au nouveau forage. » La maman de Rado soupire : le forage est loin, à une demi-heure de marche. Mais pour la santé des enfants, chaque jour, elle y va.",
    question: "Quels sont les problèmes de l'eau et comment les résoudre ?",
    ra: "La pollution de l'eau, l'accès difficile à l'eau potable et la dégradation des ressources ; il faut protéger les sources, construire des puits et ne pas jeter de déchets.",
    support: "Schéma des problèmes de l'eau (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les problèmes de l'eau ». Après cette séance, vous serez capables de décrire les problèmes de l'eau et de dire comment les combattre.",
  observation: "Observez bien le schéma : trois panneaux montrent la pollution, la difficulté d'accès à l'eau potable et la dégradation des ressources.",
  supportObservation: "Schéma des problèmes de l'eau (page Leçon)",
  analyse: [
    ["Qu'est-ce qu'une eau polluée ?", "C'est une eau salie par des déchets, des produits ou des eaux usées, dangereuse pour la santé."],
    ["Pourquoi les enfants de Tsarahonenana sont-ils tombés malades ?", "Parce qu'ils ont bu une eau polluée du marigot."],
    ["Que faut-il faire avant de boire une eau douteuse ?", "La faire bouillir, ou mieux, puiser de l'eau propre au forage ou au puits."],
    ["Pourquoi l'accès à l'eau potable est-il difficile dans certains villages ?", "Parce que les points d'eau propres sont rares et souvent loin des maisons."],
    ["Qu'est-ce qui boue les rivières après les fortes pluies ?", "La terre rouge arrachée aux collines dénudées par l'érosion, appelée lavaka."],
    ["Comment protéger l'eau de son village ?", "Ne pas jeter de déchets dans la rivière, protéger les sources et construire des puits et des latrines."],
  ],
  synthese: "Donc, l'eau connaît trois grands problèmes : la pollution par les déchets, l'accès difficile à l'eau potable et la dégradation des ressources par l'érosion. Pour lutter : faire bouillir l'eau, protéger les sources, creuser des puits et ne rien jeter dans les rivières.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'une eau polluée ?",
        "2. Que faut-il faire avant de boire une eau douteuse ?",
        "3. Pourquoi l'accès à l'eau potable est-il difficile dans certains villages ?",
        "4. Comment protéger l'eau de son village ?",
      ],
      corrige: [
        "1. Une eau **salie par des déchets**, dangereuse pour la santé.",
        "2. La **faire bouillir** ou puiser de l'eau propre au puits.",
        "3. Parce que les **points d'eau propres** sont rares et **loin**.",
        "4. Ne pas jeter de **déchets**, protéger les **sources**, creuser des **puits**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. On peut boire l'eau du marigot sans risque.",
        "2. Faire bouillir l'eau la rend plus sûre.",
        "3. L'érosion boue les rivières après les fortes pluies.",
        "4. Jeter des déchets dans la rivière est sans danger.",
      ],
      corrige: [
        "1. **Faux** : elle peut être polluée.",
        "2. **Vrai** : l'ébullition tue les microbes.",
        "3. **Vrai** : la terre rouge des lavaka coule dans l'eau.",
        "4. **Faux** : cela pollue l'eau de tout le monde.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : polluée — bouillir — potable — déchets.",
      items: [
        "Une eau salie par les déchets est une eau ……… .",
        "Avant de la boire, il faut la faire ……… .",
        "L'eau propre à boire s'appelle l'eau ……… .",
        "Il ne faut jamais jeter de ……… dans la rivière.",
      ],
      corrige: [
        "une eau **polluée** / la faire **bouillir** / l'eau **potable** / de **déchets**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Les enfants malades de Tsarahonenana avaient bu : A. de l'eau polluée — B. du lait — C. du jus",
        "2. Le lavaka est : A. un lac — B. un ravin d'érosion — C. un bateau",
        "3. Pour avoir de l'eau propre, on construit : A. des puits et forages — B. des rockets — C. des tours",
        "4. Protéger l'eau, c'est : A. protéger la santé de tous — B. perdre du temps — C. inutile",
      ],
      corrige: [
        "1. Réponse **A** : l'eau polluée du marigot.",
        "2. Réponse **B** : un grand ravin creusé par l'érosion.",
        "3. Réponse **A** : puits, forages et robinets.",
        "4. Réponse **A** : l'eau propre garde tout le monde en santé.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. L'eau polluée",
        paras: [
          "Une eau polluée est une eau salie par des déchets, des savons ou des eaux usées.",
          "Boire une eau polluée rend malade : maux de ventre et fièvres. Avant de boire une eau douteuse, il faut la faire bouillir.",
        ],
        exemples: [
          "À Tsarahonenana, le médecin a soigné les enfants qui avaient bu au marigot.",
        ],
      },
      {
        titre: "2. L'eau difficile à trouver",
        paras: [
          "Dans beaucoup de villages, l'eau potable — l'eau propre à boire — est rare.",
          "Les femmes et les enfants marchent parfois des kilomètres avec des bidons pour chercher l'eau du forage ou de la source.",
        ],
        exemples: [
          "La maman de Rado marche une demi-heure jusqu'au forage, chaque jour.",
        ],
      },
      {
        titre: "3. Dégradation et solutions",
        paras: [
          "L'érosion creuse des lavaka et boue les rivières ; la déforestation dérègle les pluies et les sources.",
          "Pour protéger l'eau : ne rien jeter dans les rivières, protéger les sources et les forêts, construire des puits, des forages et des latrines.",
        ],
        exemples: [
          "Le nouveau forage du village de Tsarahonenana a changé la vie des familles.",
        ],
      },
    ],
  },
  motsCles: ["pollution", "eau potable", "forage", "érosion", "lavaka"],
  questionsRevision: [
    ["Cite deux problèmes de l'eau.", "La pollution et l'accès difficile à l'eau potable (aussi la dégradation)."],
    ["Que faut-il faire avant de boire une eau douteuse ?", "La faire bouillir."],
  ],
};

module.exports = { topics: [S34, S35, S36, S37, S38, S39, S40, S41, S42, S43] };
