// data-unite3.js — UNITÉ 3 : LES ÉLÉMENTS DU PAYSAGE NATUREL (Séances 25 à 31)
// Contenu rédactionnel conforme au Programme d'études officiel T4 — Géographie (p. 120-121)
const TOTAL = 76;

const S25 = {
  numero: 25, total: TOTAL,
  titre: "Qu'est-ce qu'un paysage naturel ?",
  theme: "Les éléments du paysage naturel",
  objectif: "Être capable de dire ce qu'est un paysage naturel et de distinguer les paysages terrestre, littoral et marin.",
  image: { id: "geot4_types_paysage", legende: "Les trois types de paysage naturel : terrestre, littoral et marin." },
  scene: { file: "scene_s25_paysage_naturel.jpg", mode: "document", legende: "Document : un paysage naturel — la montagne, la forêt, la cascade et la rivière." },
  revisionOuverture: [
    ["Qu'est-ce qu'un plan ?", "Un plan est un dessin qui représente un lieu vu de dessus."],
    ["Quelle flèche dessine-t-on sur un plan pour l'orienter ?", "La flèche du Nord, la lettre N, en haut du plan."],
  ],
  miseEnSituation: {
    texte: "Pendant les vacances, Rado fait un grand voyage avec son oncle. D'abord, ils traversent les collines et les rizières de l'intérieur. Puis ils arrivent au bord de la mer, où les vagues léchent le sable. Le dernier jour, avec un masque de plongée, Rado découvre les coraux et les poissons colorés sous l'eau. « J'ai vu trois mondes différents ! », s'écrie-t-il.",
    question: "Quels trois mondes différents Rado a-t-il vus pendant son voyage ?",
    ra: "La terre ferme (les collines), le bord de la mer (la plage) et le monde sous la mer (les coraux et les poissons).",
    support: "Schéma des trois types de paysage (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Qu'est-ce qu'un paysage naturel ? ». Après cette séance, vous serez capables de dire ce qu'est un paysage naturel et de nommer les trois types de paysages.",
  observation: "Regardez et observez bien les trois dessins de paysages : ce que l'on voit sur chacun.",
  supportObservation: "Schéma des trois types de paysage (page Leçon)",
  analyse: [
    ["Que voyons-nous sur le premier dessin ?", "Une montagne, des collines, un cours d'eau et des arbres."],
    ["Où se trouvent ces éléments : sur la terre ou dans la mer ?", "Ils se trouvent sur la terre ferme."],
    ["Comment s'appelle ce paysage de la terre ferme ?", "C'est le paysage terrestre."],
    ["Que voyons-nous sur le deuxième dessin ?", "La mer, la plage, la côte et un cap."],
    ["Comment s'appelle le paysage du bord de la mer ?", "C'est le paysage littoral."],
    ["Et le troisième dessin, que montre-t-il ?", "Le monde sous la mer : les coraux, les récifs et les poissons. C'est le paysage marin."],
  ],
  synthese: "Donc, un paysage naturel est tout ce que nous voyons autour de nous sans que l'homme l'ait fabriqué. Il y a trois types de paysages naturels : le paysage terrestre sur la terre ferme, le paysage littoral au bord de la mer et le paysage marin sous la mer.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'un paysage naturel ?",
        "2. Comment s'appelle le paysage de la terre ferme ?",
        "3. Comment s'appelle le paysage du bord de la mer ?",
        "4. Comment s'appelle le paysage du monde sous la mer ?",
      ],
      corrige: [
        "1. Un paysage naturel est **tout ce que nous voyons autour de nous sans que l'homme l'ait fabriqué**.",
        "2. C'est le **paysage terrestre**.",
        "3. C'est le **paysage littoral**.",
        "4. C'est le **paysage marin**.",
      ],
    },
    {
      consigne: "Relie chaque paysage de la liste 1 à ce que l'on y voit de la liste 2 par une flèche.",
      items: [
        "Liste 1 : 1. Le paysage terrestre — 2. Le paysage littoral — 3. Le paysage marin",
        "Liste 2 : a. les récifs et les coraux — b. les montagnes, les rivières et les forêts — c. la plage, la côte et les vagues",
      ],
      corrige: [
        "1 → **b** : le paysage terrestre montre les montagnes, les rivières et les forêts.",
        "2 → **c** : le paysage littoral montre la plage, la côte et les vagues.",
        "3 → **a** : le paysage marin montre les récifs et les coraux.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : terrestre — littoral — marin — naturel.",
      items: [
        "Un paysage ……… est fait de ce que l'homme n'a pas fabriqué.",
        "Le paysage des montagnes et des rivières est le paysage ……… .",
        "Le paysage de la plage et de la côte est le paysage ……… .",
        "Le paysage des coraux, sous la mer, est le paysage ……… .",
      ],
      corrige: ["**naturel** / **terrestre** / **littoral** / **marin**."],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le paysage littoral se trouve au bord de la mer.",
        "2. Le paysage marin se trouve sur la terre ferme.",
        "3. Une montagne fait partie du paysage terrestre.",
        "4. Un paysage naturel est fabriqué par l'homme.",
      ],
      corrige: [
        "1. **Vrai**.",
        "2. **Faux** : le paysage marin est **sous la mer**.",
        "3. **Vrai**.",
        "4. **Faux** : c'est ce que l'homme **n'a pas fabriqué**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Qu'est-ce qu'un paysage naturel ?",
        paras: [
          "Un paysage naturel est tout ce que nous voyons autour de nous dans la nature, sans que l'homme l'ait fabriqué : les montagnes, les rivières, les forêts, la mer.",
          "Observer un paysage, c'est regarder attentivement ce qui s'y trouve pour le décrire.",
        ],
      },
      {
        titre: "2. Le paysage terrestre",
        paras: [
          "Le paysage terrestre, ou continental, se trouve sur la terre ferme.",
          "On y voit le relief : montagnes, collines, vallées et plaines ; les cours d'eau : ruisseaux, rivières et fleuves ; et la végétation : forêts, savanes et steppes.",
        ],
        exemples: [
          "Les collines couvertes de rizières des Hautes Terres de Madagascar.",
        ],
      },
      {
        titre: "3. Le paysage littoral",
        paras: [
          "Le paysage littoral se trouve au bord de la mer : c'est le rivage.",
          "On y voit la côte, la plage, les falaises, les baies, les caps, les îles et les presqu'îles.",
        ],
        exemples: [
          "Les plages de sable et les caps du littoral malgache.",
        ],
      },
      {
        titre: "4. Le paysage marin",
        paras: [
          "Le paysage marin se trouve sous la mer.",
          "On y voit les récifs coralliens, les coraux de toutes les formes, les poissons, les algues et le sable du fond.",
        ],
        exemples: [
          "Avec un masque de plongée, Rado a vu les coraux et les poissons colorés : il découvrait le paysage marin.",
        ],
      },
    ],
  },
  motsCles: ["paysage naturel", "terrestre", "littoral", "marin"],
  questionsRevision: [
    ["Cite les trois types de paysages naturels.", "Le paysage terrestre, le paysage littoral et le paysage marin."],
    ["Où se trouve le paysage marin ?", "Sous la mer."],
  ],
};

const S26 = {
  numero: 26, total: TOTAL,
  titre: "Les reliefs : montagnes, collines, vallées et plaines",
  theme: "Les éléments du paysage naturel",
  objectif: "Être capable de caractériser les formes du relief : montagne, colline, vallée et plaine.",
  image: { id: "geot4_relief", legende: "Les formes du relief : montagne, colline, vallée et plaine." },
  scene: { file: "scene_s26_reliefs.jpg", mode: "document", legende: "Document : la montagne, la colline, la vallée et la plaine — les quatre formes du relief." },
  miseEnSituation: {
    texte: "Soa habite dans une maison au bord d'une grande plaine de rizières. Chez sa grand-mère, au loin, le village est entouré de collines rondes et, à l'horizon, on aperçoit une montagne pointue dont le sommet est souvent dans les nuages. « Comment savoir si c'est une colline ou une montagne ? » demande Soa. Sa grand-mère sourit : « La montagne, ma fille, c'est la reine des hauteurs ! »",
    question: "Quelles formes du terrain voyons-nous autour d'un village ?",
    ra: "Des montagnes, des collines, des vallées et des plaines.",
    support: "Schéma des formes du relief (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les reliefs : montagnes, collines, vallées et plaines ». Après cette séance, vous serez capables de caractériser chaque forme du relief.",
  observation: "Regardez et observez bien le schéma du relief : la forme haute et pointue, la forme arrondie, le creux avec la rivière et la surface plate.",
  supportObservation: "Schéma des formes du relief (page Leçon)",
  analyse: [
    ["Comment est la montagne sur le schéma ?", "Elle est très haute et son sommet est pointu."],
    ["Et la colline, comment est-elle ?", "Elle est moins haute que la montagne et son sommet est arrondi."],
    ["Où passe la rivière ?", "Elle passe dans le creux entre les reliefs."],
    ["Comment s'appelle ce creux traversé par un cours d'eau ?", "C'est une vallée."],
    ["Comment est la plaine ?", "La plaine est un terrain plat et bas, souvent cultivé."],
    ["Que cultive-t-on souvent dans les plaines ?", "On cultive souvent le riz dans les plaines."],
  ],
  synthese: "Donc, le relief, c'est l'ensemble des formes du terrain. La montagne est très haute et pointue ; la colline est moins haute et arrondie ; la vallée est le creux entre les reliefs, traversé par un cours d'eau ; la plaine est un terrain plat et bas.",
  appExos: [
    {
      consigne: "Complète avec les mots : montagne — colline — vallée — plaine.",
      items: [
        "1. La ……… est très haute et son sommet est pointu.",
        "2. La ……… est moins haute et son sommet est arrondi.",
        "3. La ……… est le creux entre les reliefs, traversé par un cours d'eau.",
        "4. La ……… est un terrain plat et bas.",
      ],
      corrige: [
        "1. La **montagne**.",
        "2. La **colline**.",
        "3. La **vallée**.",
        "4. La **plaine**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le sommet arrondi et peu élevé, c'est : A. la montagne — B. la colline — C. la vallée",
        "2. Le creux traversé par une rivière, c'est : A. la plaine — B. le sommet — C. la vallée",
        "3. Dans les plaines, on cultive surtout : A. le riz — B. les pierres — C. le sable",
        "4. Le relief, c'est : A. l'ensemble des formes du terrain — B. un village — C. un nuage",
      ],
      corrige: [
        "1. Réponse **B** : la colline.",
        "2. Réponse **C** : la vallée.",
        "3. Réponse **A** : le riz.",
        "4. Réponse **A** : l'ensemble des formes du terrain.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Relie chaque forme du relief de la liste 1 à sa caractéristique de la liste 2 par une flèche.",
      items: [
        "Liste 1 : 1. La montagne — 2. La colline — 3. La vallée — 4. La plaine",
        "Liste 2 : a. terrain plat et bas — b. très haute, sommet pointu — c. creux traversé par un cours d'eau — d. moins haute, sommet arrondi",
      ],
      corrige: [
        "1 → **b** : la montagne est très haute, au sommet pointu.",
        "2 → **d** : la colline est moins haute, au sommet arrondi.",
        "3 → **c** : la vallée est le creux traversé par un cours d'eau.",
        "4 → **a** : la plaine est un terrain plat et bas.",
      ],
    },
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que le relief ?",
        "2. Quelle est la différence entre une montagne et une colline ?",
        "3. Où passe la rivière dans une vallée ?",
        "4. Que cultive-t-on souvent dans les plaines de Madagascar ?",
      ],
      corrige: [
        "1. Le relief est **l'ensemble des formes du terrain**.",
        "2. La montagne est **très haute et pointue** ; la colline est **moins haute et arrondie**.",
        "3. La rivière passe **dans le creux de la vallée**.",
        "4. On cultive souvent **le riz**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Qu'est-ce que le relief ?",
        paras: [
          "Le relief, c'est l'ensemble des formes du terrain : tout ce qui donne son aspect à la surface de la terre, du plus haut sommet à la plaine la plus plate.",
        ],
      },
      {
        titre: "2. La montagne et la colline",
        paras: [
          "La montagne est une très grande hauteur : son sommet, pointu ou rond, domine tout le paysage.",
          "La colline est une hauteur plus petite, au sommet arrondi : on peut souvent la cultiver jusqu'en haut.",
        ],
        sous: [
          {
            titre: "a. Exemples de Madagascar",
            paras: [
              "Les Hautes Terres centrales sont couvertes de collines arrondies, souvent cultivées en rizières.",
              "Au Nord se dressent les hautes montagnes du Tsaratanana.",
            ],
          },
        ],
      },
      {
        titre: "3. La vallée",
        paras: [
          "La vallée est le creux allongé entre deux reliefs.",
          "Un cours d'eau l'a souvent creusée et la traverse : la vallée est fraîche et bien arrosée.",
        ],
        exemples: [
          "Les rizières descendent en cascade au fond des vallées des Hautes Terres.",
        ],
      },
      {
        titre: "4. La plaine",
        paras: [
          "La plaine est une grande surface plate et basse.",
          "Les rivières qui la traversent déposent une terre riche : c'est pourquoi on y cultive le riz et les légumes.",
        ],
        exemples: [
          "Les grandes plaines de rizières au bord des fleuves.",
        ],
      },
    ],
  },
  motsCles: ["relief", "montagne", "colline", "vallée", "plaine", "sommet"],
  questionsRevision: [
    ["Cite les quatre formes du relief vues dans cette leçon.", "La montagne, la colline, la vallée et la plaine."],
    ["Quelle est la différence entre une montagne et une colline ?", "La montagne est très haute et pointue ; la colline est moins haute et arrondie."],
  ],
};

const S27 = {
  numero: 27, total: TOTAL,
  titre: "Les cours d'eau : de la source au fleuve",
  theme: "Les éléments du paysage naturel",
  objectif: "Être capable de nommer les cours d'eau (source, ruisseau, rivière, fleuve) et d'utiliser les mots amont et aval.",
  image: { id: "geot4_cours_eau", legende: "De la source à la mer : le ruisseau grossit en rivière puis en fleuve." },
  scene: { file: "scene_s27_cours_eau.jpg", mode: "document", legende: "Document : le voyage de l'eau, de la source jusqu'à la mer." },
  miseEnSituation: {
    texte: "Lalon'aïna suit son grand-père sur le sentier de la montagne. Tout à coup, une petite eau claire jaillit entre les rochers. « Regarde, dit le grand-père, c'est la source de notre rivière. Ici, elle tient dans ta main. Attends de la voir passer devant le village : là, on l'appelle la rivière. Et au bout de son voyage, elle devient un grand fleuve qui se jette dans la mer. »",
    question: "Que devient la petite eau de la source pendant son voyage ?",
    ra: "Elle grossit : elle devient un ruisseau, puis une rivière, puis un fleuve qui va à la mer.",
    support: "Schéma du voyage de l'eau (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les cours d'eau : de la source au fleuve ». Après cette séance, vous serez capables de nommer les cours d'eau et d'utiliser les mots amont et aval.",
  observation: "Regardez et observez bien le schéma : la montagne, la source, et l'eau qui grossit jusqu'à la mer.",
  supportObservation: "Schéma du voyage de l'eau (page Leçon)",
  analyse: [
    ["Où naît l'eau sur le schéma ?", "L'eau naît dans la montagne, à la source."],
    ["Comment s'appelle ce petit filet d'eau qui sort de la source ?", "C'est un ruisseau."],
    ["Que devient le ruisseau quand d'autres eaux le rejoignent ?", "Il devient une rivière, plus large."],
    ["Et quand la rivière devient très grande et va jusqu'à la mer ?", "Elle devient un fleuve."],
    ["Comment s'appelle l'endroit où le fleuve se jette dans la mer ?", "C'est l'embouchure."],
    ["Où est l'amont : vers la source ou vers la mer ?", "L'amont est vers la source."],
  ],
  synthese: "Donc, l'eau d'un cours d'eau fait un long voyage : elle sort de la source, coule en ruisseau, grossit en rivière, puis devient un fleuve qui se jette dans la mer par l'embouchure. Vers la source, c'est l'amont ; vers la mer, c'est l'aval.",
  appExos: [
    {
      consigne: "Écris 1, 2, 3, 4 pour ranger le voyage de l'eau dans l'ordre.",
      items: [
        "……… L'eau sort de terre à la source.",
        "……… Le petit filet d'eau grossit et devient une rivière.",
        "……… La rivière reçoit d'autres eaux et devient un fleuve.",
        "……… Le fleuve se jette dans la mer par l'embouchure.",
      ],
      corrige: [
        "La source : **1** / la rivière : **2** / le fleuve : **3** / l'embouchure : **4**.",
      ],
    },
    {
      consigne: "Complète avec les mots : source — ruisseau — fleuve — amont.",
      items: [
        "L'eau jaillit de la terre à la ……… .",
        "Le petit filet d'eau près de la source est un ……… .",
        "Le plus grand cours d'eau, qui va à la mer, est le ……… .",
        "Vers la source, on remonte vers l'……… .",
      ],
      corrige: ["**source** / **ruisseau** / **fleuve** / **amont**."],
    },
  ],
  evalExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Où naît un cours d'eau ?",
        "2. Quelle est la différence entre un ruisseau et un fleuve ?",
        "3. Comment s'appelle l'endroit où le fleuve rejoint la mer ?",
        "4. Si tu descends la rivière vers la mer, vas-tu vers l'amont ou vers l'aval ?",
      ],
      corrige: [
        "1. Un cours d'eau naît **à la source**.",
        "2. Le ruisseau est **tout petit** ; le fleuve est **le plus grand cours d'eau**, il va jusqu'à la mer.",
        "3. C'est **l'embouchure**.",
        "4. Je vais **vers l'aval**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. La source se trouve souvent dans la montagne.",
        "2. L'aval, c'est le côté vers la mer.",
        "3. Un ruisseau est plus grand qu'un fleuve.",
        "4. L'embouchure est l'endroit où le fleuve se jette dans la mer.",
      ],
      corrige: [
        "1. **Vrai**.",
        "2. **Vrai**.",
        "3. **Faux** : le ruisseau est **le plus petit** des cours d'eau.",
        "4. **Vrai**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La naissance d'un cours d'eau",
        paras: [
          "Un cours d'eau naît à la source : c'est là que l'eau jaillit de la terre, souvent dans la montagne.",
          "Tout près de la source, l'eau est un petit filet : c'est le ruisseau.",
        ],
      },
      {
        titre: "2. De la rivière au fleuve",
        paras: [
          "Le ruisseau grossit en recevant d'autres eaux : il devient une rivière.",
          "Quand la rivière devient très grande et qu'elle se jette dans la mer, on l'appelle un fleuve.",
          "L'endroit où le fleuve rejoint la mer s'appelle l'embouchure.",
        ],
        sous: [
          {
            titre: "a. Des fleuves de Madagascar",
            paras: [
              "La Betsiboka et la Mangoky sont de grands fleuves de Madagascar : ils descendent des Hautes Terres jusqu'à la mer.",
            ],
          },
        ],
      },
      {
        titre: "3. Amont et aval",
        paras: [
          "Sur un cours d'eau, on distingue l'amont et l'aval.",
          "L'amont, c'est le côté d'où vient l'eau, vers la source ; l'aval, c'est le côté où l'eau s'en va, vers la mer.",
        ],
        exemples: [
          "Un piroguier descend la rivière de l'amont vers l'aval.",
          "Le village en amont est plus haut sur la montagne ; le village en aval est plus bas, près de la plaine.",
        ],
      },
    ],
  },
  motsCles: ["source", "ruisseau", "rivière", "fleuve", "embouchure", "amont", "aval"],
  questionsRevision: [
    ["Cite les quatre cours d'eau du plus petit au plus grand.", "Le ruisseau, la rivière, le fleuve (et la source où l'eau naît)."],
    ["Où est l'amont d'un cours d'eau ?", "Du côté de la source, d'où vient l'eau."],
  ],
};

const S28 = {
  numero: 28, total: TOTAL,
  titre: "Les lacs, les étangs et les marais",
  theme: "Les éléments du paysage naturel",
  objectif: "Être capable de caractériser un lac, un étang et un marais, et de citer un grand lac de Madagascar.",
  image: { id: "geot4_lac_etang_marais", legende: "Le lac, l'étang et le marais : trois étendues d'eau." },
  scene: { file: "scene_s28_lacs_marais.jpg", mode: "document", legende: "Document : le lac, l'étang et le marais — trois étendues d'eau calmes." },
  miseEnSituation: {
    texte: "Fanja pêche avec son oncle. Sur le chemin, ils passent devant un petit plan d'eau où les canards barbotent. Plus loin, une immense étendue d'eau brille au soleil, si grande qu'on ne voit pas l'autre bord. « Tiens, dit Fanja, l'eau de tout à l'heure tenait dans un seul regard, mais celle-ci non ! » Son oncle répond : « C'est qu'un étang et un lac ne sont pas la même chose. Et regarde ces roseaux au bord : nous voici dans le marais. »",
    question: "Les trois étendues d'eau que traverse Fanja sont-elles pareilles ?",
    ra: "Non : le petit plan d'eau est un étang, la grande étendue est un lac, et la zone de roseaux est un marais.",
    support: "Schéma du lac, de l'étang et du marais (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les lacs, les étangs et les marais ». Après cette séance, vous serez capables de caractériser ces trois étendues d'eau.",
  observation: "Regardez et observez bien les trois dessins : la grande étendue d'eau, la petite, et le terrain couvert de roseaux.",
  supportObservation: "Schéma du lac, de l'étang et du marais (page Leçon)",
  analyse: [
    ["Comment est le lac sur le dessin ?", "C'est une grande étendue d'eau entourée de terres."],
    ["Et l'étang, comment est-il ?", "C'est une petite étendue d'eau, peu profonde."],
    ["Que remarque-t-on autour du marais ?", "Le sol est mouillé, couvert d'eau et de roseaux."],
    ["Peut-on traverser un lac à pied ? Pourquoi ?", "Non, parce qu'il est grand et profond."],
    ["Dans lequel de ces trois milieux pousse le roseau ?", "Le roseau pousse dans le marais.",
    ],
    ["Connais-tu le plus grand lac de Madagascar ?", "C'est le lac Alaotra."],
  ],
  synthese: "Donc, le lac est une grande étendue d'eau entourée de terres ; l'étang est une petite étendue d'eau peu profonde ; le marais est un terrain mouillé couvert d'eau et de plantes comme le roseau. À Madagascar, le plus grand lac est le lac Alaotra.",
  appExos: [
    {
      consigne: "Complète avec les mots : lac — étang — marais — roseaux.",
      items: [
        "1. Une grande étendue d'eau entourée de terres est un ……… .",
        "2. Une petite étendue d'eau peu profonde est un ……… .",
        "3. Un terrain mouillé couvert d'eau et de plantes est un ……… .",
        "4. Dans le marais poussent surtout les ……… .",
      ],
      corrige: [
        "1. Un **lac**.",
        "2. Un **étang**.",
        "3. Un **marais**.",
        "4. Les **roseaux**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le plus grand lac de Madagascar est : A. le lac Alaotra — B. l'étang du village — C. la mer",
        "2. Un étang est : A. plus grand qu'un lac — B. une petite étendue d'eau — C. un cours d'eau rapide",
        "3. Le marais est un terrain : A. sec et sablonneux — B. mouillé et plein de plantes — C. recouvert de pierres",
        "4. Les canards et les roseaux vivent plutôt : A. dans le marais — B. sur la montagne — C. dans le désert",
      ],
      corrige: [
        "1. Réponse **A** : le lac Alaotra.",
        "2. Réponse **B** : une petite étendue d'eau.",
        "3. Réponse **B** : mouillé et plein de plantes.",
        "4. Réponse **A** : dans le marais.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Relie chaque étendue d'eau de la liste 1 à sa description de la liste 2 par une flèche.",
      items: [
        "Liste 1 : 1. Le lac — 2. L'étang — 3. Le marais",
        "Liste 2 : a. terrain mouillé couvert d'eau et de roseaux — b. grande étendue d'eau entourée de terres — c. petite étendue d'eau peu profonde",
      ],
      corrige: [
        "1 → **b** : le lac est une grande étendue d'eau entourée de terres.",
        "2 → **c** : l'étang est une petite étendue d'eau peu profonde.",
        "3 → **a** : le marais est un terrain mouillé couvert d'eau et de roseaux.",
      ],
    },
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Quelle est la différence entre un lac et un étang ?",
        "2. Quelles plantes poussent dans le marais ?",
        "3. Quel est le plus grand lac de Madagascar ?",
        "4. Pourquoi ne peut-on pas traverser un lac à pied ?",
      ],
      corrige: [
        "1. Le lac est **grand et profond** ; l'étang est **petit et peu profond**.",
        "2. Dans le marais poussent surtout **les roseaux**.",
        "3. C'est **le lac Alaotra**.",
        "4. Parce que l'eau du lac est **grande et profonde**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Le lac",
        paras: [
          "Un lac est une grande étendue d'eau entourée de terres.",
          "On y pêche et on s'y baigne ; ses bords sont souvent cultivés, car la terre y est riche.",
        ],
        sous: [
          {
            titre: "a. Le lac Alaotra",
            paras: [
              "Le lac Alaotra est le plus grand lac de Madagascar.",
              "Autour de lui s'étendent de grandes rizières et des marais à roseaux.",
            ],
          },
        ],
      },
      {
        titre: "2. L'étang",
        paras: [
          "Un étang est une petite étendue d'eau peu profonde.",
          "Les canards et les oiseaux d'eau y vivent volontiers.",
        ],
      },
      {
        titre: "3. Le marais",
        paras: [
          "Un marais est un terrain mouillé, couvert d'eau et de plantes, surtout des roseaux.",
          "On y entend chanter les grenouilles ; on y pêche de petits poissons et on y coupe des roseaux pour les nattes et les toits.",
        ],
        exemples: [
          "Les roseaux du marais servent à tisser des nattes.",
        ],
      },
    ],
  },
  motsCles: ["lac", "étang", "marais", "roseaux", "lac Alaotra"],
  questionsRevision: [
    ["Quelle est la différence entre un lac et un étang ?", "Le lac est grand et profond ; l'étang est petit et peu profond."],
    ["Quel est le plus grand lac de Madagascar ?", "Le lac Alaotra."],
  ],
};

const S29 = {
  numero: 29, total: TOTAL,
  titre: "La végétation : forêts, savanes et steppes",
  theme: "Les éléments du paysage naturel",
  objectif: "Être capable de caractériser la forêt, la savane et la steppe, et de dire où elles se trouvent à Madagascar.",
  image: { id: "geot4_vegetation", legende: "La forêt, la savane et la steppe : trois vêtements de la terre." },
  scene: { file: "scene_s29_vegetation.jpg", mode: "document", legende: "Document : la forêt, la savane et la steppe — trois végétations différentes." },
  miseEnSituation: {
    texte: "Un grand reportage passe à la télévision du village. On y voit d'abord une forêt si dense qu'on croirait un mur vert. Puis la caméra survole une savane dorée où se dressent quelques arbres solitaires. Enfin, au Sud, la terre sèche n'offre que des touffes d'herbes rares. « Regarde, dit le papa de Tojo, la terre porte trois vêtements différents selon la pluie qu'elle reçoit. »",
    question: "Pourquoi la végétation est-elle différente d'une région à l'autre ?",
    ra: "Parce que la pluie est différente : là où il pleut beaucoup, la forêt pousse ; là où il pleut peu, l'herbe sèche.",
    support: "Schéma de la forêt, de la savane et de la steppe (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « La végétation : forêts, savanes et steppes ». Après cette séance, vous serez capables de caractériser les trois grands types de végétation.",
  observation: "Regardez et observez bien les trois dessins : la densité des arbres et la couleur de l'herbe.",
  supportObservation: "Schéma de la forêt, de la savane et de la steppe (page Leçon)",
  analyse: [
    ["Comment est la forêt sur le dessin ?", "Les arbres sont nombreux et serrés."],
    ["Que voit-on dans la savane ?", "Des herbes hautes et quelques arbres dispersés."],
    ["Et dans la steppe, que remarque-t-on ?", "Les herbes sont sèches, basses, et les arbres sont très rares."],
    ["Où pousse la forêt : là où il pleut beaucoup ou peu ?", "La forêt pousse là où il pleut beaucoup."],
    ["Où trouve-t-on les steppes et les savanes sèches à Madagascar ?", "Surtout à l'Ouest et au Sud, là où il pleut peu.",
    ],
    ["Quel climat règne sur la côte Est de Madagascar, et quelle végétation y pousse ?", "Il y pleut souvent : la végétation est une forêt dense et humide."],
  ],
  synthese: "Donc, la végétation change selon la pluie. La forêt est formée d'arbres nombreux et serrés ; la savane est faite d'herbes hautes avec quelques arbres ; la steppe est une lande d'herbes sèches et rares. À Madagascar : forêts humides à l'Est, savanes et steppes sèches à l'Ouest et au Sud.",
  appExos: [
    {
      consigne: "Complète avec les mots : forêt — savane — steppe — arbres.",
      items: [
        "1. Dans la ……… , les arbres sont nombreux et serrés.",
        "2. La ……… est faite d'herbes hautes et de quelques arbres dispersés.",
        "3. La ……… est couverte d'herbes sèches et rares.",
        "4. La forêt humide de la côte Est est pleine d'……… .",
      ],
      corrige: ["**forêt** / **savane** / **steppe** / **arbres**."],
    },
    {
      consigne: "Relie chaque végétation de la liste 1 au climat de la liste 2 par une flèche.",
      items: [
        "Liste 1 : 1. La forêt dense — 2. La savane — 3. La steppe",
        "Liste 2 : a. région sèche, herbes rares — b. région bien arrosée, il pleut souvent — c. région à saison sèche marquée, herbes hautes",
      ],
      corrige: [
        "1 → **b** : la forêt dense pousse là où il pleut souvent.",
        "2 → **c** : la savane pousse dans les régions à longue saison sèche.",
        "3 → **a** : la steppe couvre les régions sèches.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Dans la forêt, les arbres sont rares.",
        "2. La savane est faite d'herbes hautes et de quelques arbres.",
        "3. La steppe est une région bien arrosée.",
        "4. À Madagascar, la forêt humide pousse surtout sur la côte Est.",
      ],
      corrige: [
        "1. **Faux** : dans la forêt, les arbres sont **nombreux et serrés**.",
        "2. **Vrai**.",
        "3. **Faux** : la steppe est une région **sèche**.",
        "4. **Vrai**.",
      ],
    },
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Quelle est la différence entre la forêt et la savane ?",
        "2. Où pousse la forêt humide à Madagascar ?",
        "3. À quoi ressemble la steppe ?",
        "4. Pourquoi la végétation change-t-elle d'une région à l'autre ?",
      ],
      corrige: [
        "1. La forêt est **dense, pleine d'arbres serrés** ; la savane est **ouverte, faite d'herbes avec quelques arbres**.",
        "2. Elle pousse **sur la côte Est**, là où il pleut souvent.",
        "3. La steppe est **une étendue d'herbes sèches et basses, presque sans arbres**.",
        "4. Parce que **la pluie est différente** d'une région à l'autre.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La forêt",
        paras: [
          "La forêt est une végétation dense : les arbres y sont nombreux et serrés.",
          "La forêt humide pousse là où il pleut souvent ; elle abrite beaucoup d'animaux.",
        ],
        sous: [
          {
            titre: "a. À Madagascar",
            paras: [
              "La côte Est, bien arrosée, est couverte de forêts humides.",
              "À l'Ouest, on trouve des forêts plus claires, qui perdent leurs feuilles en saison sèche.",
              "Sur les côtes boueuses, entre la terre et la mer, pousse la mangrove, la forêt des palétuviers.",
            ],
          },
        ],
      },
      {
        titre: "2. La savane",
        paras: [
          "La savane est une étendue d'herbes hautes, avec quelques arbres dispersés.",
          "Pendant la saison des pluies, la savane verdit ; pendant la saison sèche, elle jaunit et les feux de brousse peuvent la traverser.",
        ],
      },
      {
        titre: "3. La steppe",
        paras: [
          "La steppe est une étendue d'herbes sèches, basses et rares ; les arbres y sont très rares.",
          "Le Sud de Madagascar, sec presque toute l'année, est couvert de steppes et de plantes épineuses.",
        ],
        exemples: [
          "Dans le Grand Sud, les pousses d'herbes ne durent que quelques semaines après la pluie.",
        ],
      },
      {
        titre: "4. La végétation suit la pluie",
        paras: [
          "Plus il pleut, plus la végétation est dense ; moins il pleut, plus elle est sèche et rare.",
          "Quand la forêt coupée repousse en broussailles, on parle de savoka ; la vraie forêt, elle, met très longtemps à revenir.",
        ],
      },
    ],
  },
  motsCles: ["forêt", "savane", "steppe", "végétation", "saison sèche", "mangrove", "savoka"],
  questionsRevision: [
    ["Cite les trois grands types de végétation.", "La forêt, la savane et la steppe."],
    ["Où pousse la forêt humide à Madagascar ?", "Sur la côte Est, là où il pleut souvent."],
  ],
};

const S30 = {
  numero: 30, total: TOTAL,
  titre: "Le paysage littoral",
  theme: "Les éléments du paysage naturel",
  objectif: "Être capable de nommer les éléments du paysage littoral : côte, plage, baie, cap, île, presqu'île, estuaire.",
  image: { id: "geot4_littoral", legende: "Le paysage littoral : côte, baie, cap, île, presqu'île et estuaire." },
  scene: { file: "scene_s30_paysage_littoral.jpg", mode: "document", legende: "Document : au bord de la mer — la plage, les pirogues et le récif au loin." },
  miseEnSituation: {
    texte: "Dans la voiture qui longe la côte, Miora joue à nommer tout ce qu'elle voit : « Une plage ! Un rocher qui entre dans la mer ! Regarde, un bateau dort dans une baie bien abritée ! » Son papa ajoute : « Et là-bas, au loin, une île ! Quant au fleuve, regarde comme sa bouche s'élargit avant de rejoindre la mer. »",
    question: "Que voit-on sur le paysage du bord de la mer ?",
    ra: "La côte, la plage, les caps, les baies, les îles et la bouche des fleuves.",
    support: "Schéma du paysage littoral (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Le paysage littoral ». Après cette séance, vous serez capables de nommer les éléments du bord de la mer.",
  observation: "Regardez et observez bien le dessin du littoral : la côte, la baie, le cap, l'île, la presqu'île et l'estuaire.",
  supportObservation: "Schéma du paysage littoral (page Leçon)",
  analyse: [
    ["Comment s'appelle le bord de la mer ?", "C'est la côte, ou le littoral."],
    ["Comment s'appelle ce sable où l'on marche pieds nus ?", "C'est la plage."],
    ["Comment s'appelle cette courbe de mer qui entre dans les terres ?", "C'est une baie."],
    ["Et cette pointe de terre qui avance dans la mer ?", "C'est un cap."],
    ["Comment appelle-t-on une terre entourée d'eau de tous les côtés ?", "C'est une île."],
    ["Et une terre presque entourée d'eau, reliée au continent par un petit passage ?", "C'est une presqu'île."],
  ],
  synthese: "Donc, le paysage littoral a ses propres mots : la côte, la plage, la baie qui creuse la terre, le cap qui avance dans la mer, l'île entourée d'eau, la presqu'île presque entourée d'eau, et l'estuaire, la bouche du fleuve. Madagascar est une grande île, entourée par le canal du Mozambique à l'Ouest et l'océan Indien à l'Est.",
  appExos: [
    {
      consigne: "Complète avec les mots : île — baie — cap — presqu'île.",
      items: [
        "1. Une terre entourée d'eau de tous les côtés est une ……… .",
        "2. Une courbe de mer qui entre dans les terres est une ……… .",
        "3. Une pointe de terre qui avance dans la mer est un ……… .",
        "4. Une terre presque entourée d'eau, reliée par un petit passage, est une ……… .",
      ],
      corrige: ["**île** / **baie** / **cap** / **presqu'île**."],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Madagascar est une île.",
        "2. Le canal du Mozambique se trouve à l'Est de Madagascar.",
        "3. Un cap est une courbe de mer qui entre dans les terres.",
        "4. L'estuaire est la bouche d'un fleuve à la mer.",
      ],
      corrige: [
        "1. **Vrai**.",
        "2. **Faux** : le canal du Mozambique est **à l'Ouest** ; l'océan Indien est à l'Est.",
        "3. **Faux** : un cap est **une pointe de terre qui avance dans la mer** ; la courbe de mer, c'est la baie.",
        "4. **Vrai**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Relie chaque élément de la liste 1 à sa définition de la liste 2 par une flèche.",
      items: [
        "Liste 1 : 1. La baie — 2. Le cap — 3. L'île — 4. L'estuaire",
        "Liste 2 : a. terre entourée d'eau de tous les côtés — b. bouche du fleuve à la mer — c. courbe de mer qui entre dans les terres — d. pointe de terre qui avance dans la mer",
      ],
      corrige: [
        "1 → **c** : la baie est une courbe de mer qui entre dans les terres.",
        "2 → **d** : le cap est une pointe de terre qui avance dans la mer.",
        "3 → **a** : l'île est une terre entourée d'eau de tous les côtés.",
        "4 → **b** : l'estuaire est la bouche du fleuve à la mer.",
      ],
    },
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que le littoral ?",
        "2. Quelle est la différence entre une île et une presqu'île ?",
        "3. Quels deux grands milieux marins entourent Madagascar ?",
        "4. À quoi sert une baie pour les bateaux ?",
      ],
      corrige: [
        "1. Le littoral, c'est **le bord de la mer**.",
        "2. L'île est **entourée d'eau de tous les côtés** ; la presqu'île est **presque entourée d'eau**, reliée par un petit passage.",
        "3. **Le canal du Mozambique à l'Ouest et l'océan Indien à l'Est**.",
        "4. La baie **abrite les bateaux** du vent et des vagues.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La côte et la plage",
        paras: [
          "La côte est la ligne où la terre rencontre la mer ; le littoral, c'est tout le paysage du bord de la mer.",
          "La plage est le bord de mer couvert de sable ou de galets.",
        ],
      },
      {
        titre: "2. La baie et le cap",
        paras: [
          "La baie est une courbe de mer qui entre dans les terres : elle abrite les bateaux.",
          "Le cap est une pointe de terre qui avance dans la mer.",
        ],
        sous: [
          {
            titre: "a. Des exemples de Madagascar",
            paras: [
              "La baie d'Antongil, à l'Est, est la plus grande baie de Madagascar.",
              "Le cap d'Ambre marque la pointe Nord de l'île.",
            ],
          },
        ],
      },
      {
        titre: "3. L'île et la presqu'île",
        paras: [
          "Une île est une terre entourée d'eau de tous les côtés ; Madagascar est une grande île.",
          "Une presqu'île est une terre presque entourée d'eau, reliée au reste des terres par un petit passage.",
        ],
        sous: [
          {
            titre: "a. Des exemples de Madagascar",
            paras: [
              "Nosy Be, au Nord-Ouest, est une île célèbre.",
              "La presqu'île de Masoala s'avance dans l'océan Indien, au Nord-Est.",
            ],
          },
        ],
      },
      {
        titre: "4. L'estuaire",
        paras: [
          "L'estuaire est la bouche d'un fleuve, là où son eau se mélange à celle de la mer.",
          "À Madagascar : le canal du Mozambique borde l'île à l'Ouest, et l'océan Indien à l'Est.",
        ],
      },
    ],
  },
  motsCles: ["littoral", "côte", "plage", "baie", "cap", "île", "presqu'île", "estuaire"],
  questionsRevision: [
    ["Quelle est la différence entre une île et une presqu'île ?", "L'île est entourée d'eau de tous les côtés ; la presqu'île est presque entourée d'eau."],
    ["Comment s'appelle la pointe de terre qui avance dans la mer ?", "Un cap."],
  ],
};

const S31 = {
  numero: 31, total: TOTAL,
  titre: "Le paysage marin : récifs et coraux",
  theme: "Les éléments du paysage naturel",
  objectif: "Être capable de décrire le paysage marin et d'expliquer l'importance du récif corallien.",
  image: { id: "geot4_marin", legende: "Sous la mer : le récif corallien et ses habitants." },
  scene: { file: "scene_s31_recifs.jpg", mode: "document", legende: "Document : sous la mer — le récif corallien et ses poissons." },
  miseEnSituation: {
    texte: "Avec son masque et son tuba, Vola glisse doucement au-dessus des coraux. Sous elle, un monde extraordinaire : des coraux en branches, des coraux en boules orange, des poissons rayés qui vont et viennent, une étoile de mer posée sur le sable. « C'est comme un village sous l'eau, souffle Vola en remontant. Chaque animal a sa maison dans le récif ! »",
    question: "Qui vit dans le récif corallien ?",
    ra: "Les coraux, les poissons, les étoiles de mer et plein d'autres animaux.",
    support: "Schéma du paysage marin (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Le paysage marin : récifs et coraux ». Après cette séance, vous serez capables de décrire le monde sous la mer et d'expliquer pourquoi le récif corallien est important.",
  observation: "Regardez et observez bien le dessin sous-marin : le récif, les coraux, les poissons, les algues et le sable.",
  supportObservation: "Schéma du paysage marin (page Leçon)",
  analyse: [
    ["Quelle est la couleur de l'endroit où nage Vola ?", "C'est le monde bleu de la mer."],
    ["Que forment les coraux quand ils s'assemblent ?", "Ils forment un récif corallien."],
    ["À quoi ressemble un corail ?", "Certains ressemblent à des branches, d'autres à des boules ou à des cornes."],
    ["Quels animaux vivent autour du récif ?", "Les poissons, les étoiles de mer, les crabes et beaucoup d'autres."],
    ["Le corail est-il une pierre ou un être vivant ?", "Le corail est un être vivant : un petit animal qui construit son squelette."],
    ["Pourquoi le récif est-il comparé à un village sous l'eau ?", "Parce qu'il abrite et protège des milliers d'animaux."],
  ],
  synthese: "Donc, le paysage marin se compose du récif corallien, construit par des animaux minuscules appelés coraux, des poissons, des algues et du sable. Le récif est comme un village sous l'eau : il abrite et protège de nombreux animaux, et il protège aussi la côte des grosses vagues.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qui construit le récif corallien ?",
        "2. À quoi ressemblent certains coraux ?",
        "3. Cite trois animaux qui vivent dans le récif.",
        "4. Pourquoi le récif protège-t-il aussi la côte ?",
      ],
      corrige: [
        "1. Le récif est construit par **les coraux**, de petits animaux.",
        "2. Certains ressemblent **à des branches**, d'autres **à des boules**.",
        "3. Par exemple : **les poissons, les étoiles de mer et les crabes**.",
        "4. Il **arrête la force des vagues** avant qu'elles n'atteignent la côte.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le corail est une simple pierre.",
        "2. Le récif corallien abrite de nombreux animaux.",
        "3. Les algues poussent aussi sous la mer.",
        "4. Le récif corallien ne sert à rien.",
      ],
      corrige: [
        "1. **Faux** : le corail est **un être vivant**, un petit animal.",
        "2. **Vrai**.",
        "3. **Vrai**.",
        "4. **Faux** : il abrite les animaux **et protège la côte** des vagues.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : coraux — récif — poissons — vagues.",
      items: [
        "Les petits animaux qui construisent le récif sont les ……… .",
        "L'ensemble qu'ils forment s'appelle le ……… corallien.",
        "Autour du récif nagent de nombreux ……… .",
        "Le récif protège la côte de la force des ……… .",
      ],
      corrige: ["**coraux** / **récif** / **poissons** / **vagues**."],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le récif corallien se trouve : A. sous la mer — B. sur la montagne — C. dans le désert",
        "2. Le corail est : A. une plante — B. un petit animal — C. un nuage",
        "3. Le récif est comparé à : A. un village sous l'eau — B. une route — C. un champ de riz",
        "4. Pour observer le récif sans l'abîmer, on utilise : A. un marteau — B. un masque et un tuba — C. une fourche",
      ],
      corrige: [
        "1. Réponse **A** : sous la mer.",
        "2. Réponse **B** : un petit animal.",
        "3. Réponse **A** : un village sous l'eau.",
        "4. Réponse **B** : un masque et un tuba.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Le monde sous la mer",
        paras: [
          "Le paysage marin est le paysage sous la mer : on y trouve le sable du fond, les algues, les coraux, les récifs et les animaux marins.",
          "Pour l'observer, on nage avec un masque et un tuba, ou avec des bouteilles de plongée.",
        ],
      },
      {
        titre: "2. Les coraux et le récif",
        paras: [
          "Le corail est un être vivant : un petit animal qui construit un squelette de pierre, le calcaire.",
          "Quand des milliers de coraux grandissent ensemble, ils forment un récif corallien.",
          "Il existe des coraux en branches, en boules ou en cornes, de toutes les couleurs.",
        ],
      },
      {
        titre: "3. Le récif, un village sous l'eau",
        paras: [
          "Le récif abrite et protège de nombreux animaux : poissons, étoiles de mer, crabes, tortues.",
          "Il protège aussi la côte : il arrête la force des vagues.",
          "Le récif est fragile : il ne faut ni le casser, ni le marcher, ni le toucher.",
        ],
        exemples: [
          "Les côtes de Madagascar, comme autour de Toliara, possèdent de beaux récifs coralliens.",
        ],
      },
    ],
  },
  motsCles: ["récif corallien", "coraux", "poissons", "algues", "fragile"],
  questionsRevision: [
    ["Qu'est-ce qu'un récif corallien ?", "C'est un ensemble construit par des milliers de coraux, de petits animaux."],
    ["Pourquoi dit-on que le récif est un village sous l'eau ?", "Parce qu'il abrite et protège de nombreux animaux."],
  ],
};

module.exports = { TOTAL, topics: [S25, S26, S27, S28, S29, S30, S31] };
