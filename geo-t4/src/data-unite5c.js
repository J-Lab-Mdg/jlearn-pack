// data-unite5c.js — UNITÉ 5 : L'HOMME ET LES ACTIVITÉS QUOTIDIENNES (Séances 69 à 74)
const TOTAL = 76;

const S69 = {
  numero: 69, total: TOTAL,
  titre: "L'élevage et la pêche",
  theme: "L'Homme et les activités quotidiennes",
  objectif: "Être capable de décrire l'élevage et la pêche, et ce qu'ils donnent aux familles.",
  image: { id: "geot4_elevage_peche", legende: "L'élevage : zébus et volailles ; la pêche : la pirogue et le filet." },
  scene: { file: "scene_s69_elevage_peche.jpg", mode: "document", legende: "Document : l'élevage des zébus et la pêche à la pirogue." },
  miseEnSituation: {
    texte: "Deux métiers se partagent la journée de la famille de Rivo. Le matin, Rivo garde les zébus au pâturage avec son oncle ; les poules picorent autour de la cour. L'après-midi, l'oncle sort la pirogue sur le lac : il jette son filet et revient avec de beaux poissons. « Chez nous, dit Rivo, on élève et on pêche : la viande et le poisson ne manquent jamais ! »",
    question: "Quelles sont les deux activités de la famille de Rivo ?",
    ra: "L'élevage des animaux et la pêche du poisson.",
    support: "Schéma de l'élevage et de la pêche (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « L'élevage et la pêche ». Après cette séance, vous serez capables de décrire l'élevage et la pêche, et ce qu'ils donnent aux familles.",
  observation: "Regardez et observez bien les deux panneaux : l'élevage avec les zébus et les poules, la pêche avec la pirogue et le filet.",
  supportObservation: "Schéma de l'élevage et de la pêche (page Leçon)",
  analyse: [
    ["Que garde Rivo au pâturage ?", "Les zébus de la famille."],
    ["Quelles volailles picorent dans la cour ?", "Les poules (et les canards)."],
    ["Quels animaux élève-t-on encore dans nos campagnes ?", "Les chèvres, les moutons, les canards."],
    ["Avec quoi l'oncle pêche-t-il sur le lac ?", "Avec sa pirogue et son filet."],
    ["Que rapporte la pêche ?", "Des poissons pour manger et vendre."],
    ["Que donnent les zébus aux familles ?", "Ils labourent, portent, donnent du lait et de la viande."],
  ],
  synthese: "Donc, l'élevage, c'est s'occuper des animaux domestiques : zébus, poules, canards, chèvres. La pêche, c'est prendre le poisson des lacs, des rivières ou de la mer, avec la pirogue et le filet. L'élevage et la pêche donnent aux familles la viande, le lait, les œufs et le poisson.",
  appExos: [
    {
      consigne: "Complète avec les mots : zébus — poules — pirogue — filet.",
      items: [
        "1. Les ……… labourent la rizière et portent les charges.",
        "2. Les ……… pondent des œufs dans la cour.",
        "3. Le pêcheur descend le lac en ……… .",
        "4. Il prend le poisson avec son ……… .",
      ],
      corrige: ["**zébus** / **poules** / **pirogue** / **filet**."],
    },
    {
      consigne: "Relie chaque animal ou outil de la liste 1 à ce qu'il donne de la liste 2 par une flèche.",
      items: [
        "Liste 1 : 1. la poule — 2. le zébu — 3. le filet — 4. la chèvre",
        "Liste 2 : a. le poisson — b. les œufs — c. le lait et le labour — d. le lait et la viande",
      ],
      corrige: [
        "1 → **b** : la poule donne les œufs.",
        "2 → **c** : le zébu donne le lait et laboure.",
        "3 → **a** : le filet prend le poisson.",
        "4 → **d** : la chèvre donne le lait et la viande.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. L'élevage, c'est prendre le poisson du lac.",
        "2. On élève des poules et des canards.",
        "3. Le pêcheur utilise une pirogue et un filet.",
        "4. Le zébu ne sert à rien.",
      ],
      corrige: [
        "1. **Faux** : c'est **s'occuper des animaux domestiques**.",
        "2. **Vrai**.",
        "3. **Vrai**.",
        "4. **Faux** : il **laboure, porte, donne du lait et de la viande**.",
      ],
    },
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que l'élevage ?",
        "2. Qu'est-ce que la pêche ?",
        "3. Cite trois animaux d'élevage.",
        "4. Que donne la pêche aux familles ?",
      ],
      corrige: [
        "1. C'est **s'occuper des animaux domestiques** pour en tirer la viande, le lait, les œufs.",
        "2. C'est **prendre le poisson** des lacs, rivières et mers.",
        "3. Par exemple : **le zébu, la poule et la chèvre** (aussi le canard, le mouton).",
        "4. **Du poisson pour manger et vendre**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. L'élevage",
        paras: [
          "L'élevage, c'est s'occuper des animaux domestiques.",
          "Le zébu est le roi de l'élevage malgache : il laboure la rizière, porte les charges, donne du lait et de la viande.",
          "Les poules et les canards donnent les œufs ; les chèvres et les moutons donnent le lait et la viande.",
        ],
      },
      {
        titre: "2. La pêche",
        paras: [
          "La pêche, c'est prendre le poisson des lacs, des rivières et de la mer.",
          "Le pêcheur sort en pirogue avec son filet ou sa ligne.",
          "Le matin, il vend sa pêche au marché.",
        ],
        sous: [
          {
            titre: "a. Le gardien de zébus",
            paras: [
              "Le matin, les enfants gardent les zébus au pâturage : c'est un travail important pour la famille.",
            ],
          },
        ],
      },
      {
        titre: "3. Ce que donnent l'élevage et la pêche",
        paras: [
          "La viande, le lait, les œufs et le poisson nourrissent les familles.",
          "Ce qui reste est vendu au marché : l'élevage et la pêche font aussi vivre.",
        ],
        exemples: [
          "Le soir, la famille de Rivo mange le poisson de l'oncle avec le lait des zébus : rien ne manque.",
        ],
      },
    ],
  },
  motsCles: ["élevage", "animaux domestiques", "pêche", "pirogue", "filet"],
  questionsRevision: [
    ["Qu'est-ce que l'élevage ?", "C'est s'occuper des animaux domestiques."],
    ["Avec quoi pêche-t-on ?", "Avec la pirogue et le filet (ou la ligne)."],
  ],
};

const S70 = {
  numero: 70, total: TOTAL,
  titre: "L'artisanat",
  theme: "L'Homme et les activités quotidiennes",
  objectif: "Être capable de décrire l'artisanat et de citer les artisans de la localité.",
  image: { id: "geot4_artisanat", legende: "L'artisanat : la tisserande, le potier et le vannier." },
  scene: { file: "scene_s70_artisanat.jpg", mode: "document", legende: "Document : l'artisanat — le sculpteur, la tisserande, le potier et le vannier." },
  miseEnSituation: {
    texte: "Au marché de la ville, Soa admire les étals des artisans : les lamba aux couleurs vives de la tisserande, les grandes jarres du potier, les paniers solides du vannier. « Tout cela est fait à la main ! », s'étonne-t-elle. La tisserande sourit : « Chaque pièce passe par mes mains et mon métier à tisser. Voilà l'artisanat : travailler avec ses mains, avec les matières de la nature. »",
    question: "Comment la tisserande fabrique-t-elle ses lamba ?",
    ra: "À la main, avec son métier à tisser : c'est l'artisanat.",
    support: "Schéma de l'artisanat (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « L'artisanat ». Après cette séance, vous serez capables de décrire l'artisanat et de citer les artisans de votre localité.",
  observation: "Regardez et observez bien les trois panneaux : la tisserande, le potier et le vannier.",
  supportObservation: "Schéma de l'artisanat (page Leçon)",
  analyse: [
    ["Que fabrique la tisserande ?", "Des lamba et des nattes, avec son métier à tisser."],
    ["Que fabrique le potier ?", "Des jarres et des pots en terre."],
    ["Que fabrique le vannier ?", "Des paniers et des nattes en raphia."],
    ["Avec quoi travaillent les artisans ?", "Avec leurs mains et des matières de la nature."],
    ["Quelles matières de la nature utilisent-ils ?", "Le raphia, la terre, le bois, la soie sauvage."],
    ["Où vendent-ils leurs œuvres ?", "Au marché de la localité."],
  ],
  synthese: "Donc, l'artisanat, c'est fabriquer des objets utiles avec ses mains et des matières de la nature. Les artisans de nos localités : la tisserande, le potier, le vannier, le sculpteur. Leurs objets — lamba, jarres, paniers — remplissent les marchés et font la beauté de nos maisons.",
  appExos: [
    {
      consigne: "Complète avec les mots : tisserande — potier — vannier — mains.",
      items: [
        "1. La ……… fabrique des lamba au métier à tisser.",
        "2. Le ……… façonne des jarres en terre.",
        "3. Le ……… tresse des paniers en raphia.",
        "4. L'artisanat, c'est travailler avec ses ……… .",
      ],
      corrige: ["**tisserande** / **potier** / **vannier** / **mains**."],
    },
    {
      consigne: "Relie chaque artisan de la liste 1 à son objet de la liste 2 par une flèche.",
      items: [
        "Liste 1 : 1. la tisserande — 2. le potier — 3. le vannier",
        "Liste 2 : a. le panier — b. le lamba — c. la jarre",
      ],
      corrige: [
        "1 → **b** : la tisserande tisse le lamba.",
        "2 → **c** : le potier façonne la jarre.",
        "3 → **a** : le vannier tresse le panier.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. L'artisan travaille à la machine, en usine.",
        "2. Le raphia et la terre sont des matières naturelles.",
        "3. La tisserande utilise un métier à tisser.",
        "4. Les objets artisanaux se vendent au marché.",
      ],
      corrige: [
        "1. **Faux** : l'artisan travaille **avec ses mains**, à l'atelier.",
        "2. **Vrai**.",
        "3. **Vrai**.",
        "4. **Vrai**.",
      ],
    },
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que l'artisanat ?",
        "2. Cite trois artisans de nos localités.",
        "3. Avec quoi le vannier fait-il ses paniers ?",
        "4. Où les artisans vendent-ils leurs objets ?",
      ],
      corrige: [
        "1. C'est **fabriquer des objets utiles avec ses mains** et des matières de la nature.",
        "2. **La tisserande, le potier et le vannier** (aussi le sculpteur).",
        "3. **Avec le raphia**.",
        "4. **Au marché**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La définition de l'artisanat",
        paras: [
          "L'artisanat, c'est fabriquer des objets utiles avec ses mains.",
          "L'artisan utilise les matières de la nature : le raphia, la terre, le bois, la soie sauvage.",
        ],
      },
      {
        titre: "2. Les artisans de nos localités",
        paras: [
          "La tisserande : elle tisse les lamba et les nattes sur son métier à tisser.",
          "Le potier : il façonne les jarres et les pots en terre, puis les cuit au feu.",
          "Le vannier : il tresse les paniers, les hottes et les nattes en raphia.",
          "Le sculpteur : il sculpte le bois et la corne.",
        ],
        sous: [
          {
            titre: "a. Un savoir transmis",
            paras: [
              "Les artisans apprennent leur métier auprès de leurs parents et grands-parents.",
              "Chaque geste se transmet de génération en génération.",
            ],
          },
        ],
      },
      {
        titre: "3. L'artisanat dans la vie",
        paras: [
          "Les objets artisanaux servent chaque jour : le panier pour porter, la jarre pour l'eau, le lamba pour s'habiller.",
          "L'artisanat fait vivre beaucoup de familles et remplit les marchés.",
        ],
        exemples: [
          "Au marché, Soa admire le lamba de la tisserande : chaque pièce passe par ses mains et son métier à tisser.",
        ],
      },
    ],
  },
  motsCles: ["artisanat", "artisan", "mains", "matières naturelles"],
  questionsRevision: [
    ["Qu'est-ce que l'artisanat ?", "C'est fabriquer des objets utiles avec ses mains et des matières de la nature."],
    ["Cite trois artisans.", "La tisserande, le potier et le vannier (aussi le sculpteur)."],
  ],
};

const S71 = {
  numero: 71, total: TOTAL,
  titre: "L'industrie",
  theme: "L'Homme et les activités quotidiennes",
  objectif: "Être capable de décrire l'industrie : transformer les produits dans les usines.",
  image: { id: "geot4_industrie", legende: "L'industrie : l'usine transforme le riz récolté en riz décortiqué, prêt à vendre." },
  scene: { file: "scene_s71_industrie.jpg", mode: "document", legende: "Document : l'usine transforme le riz récolté en riz décortiqué." },
  miseEnSituation: {
    texte: "Koto visite avec sa classe la rizerie de la ville. À l'entrée, des sacs de paddy : le riz récolté avec sa balle. Au milieu, les machines grondent et transforment. À la sortie, des sacs de riz blanc et brillant, prêt à cuire ! « Voilà le travail de l'industrie, explique l'ouvrier : la machine et l'homme transforment ensemble les produits de la terre. »",
    question: "Que fait la rizerie avec le riz récolté ?",
    ra: "Elle le transforme : elle décortique le paddy en riz blanc, prêt à cuire.",
    support: "Schéma de l'industrie (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « L'industrie ». Après cette séance, vous serez capables de décrire l'industrie : transformer les produits dans les usines.",
  observation: "Regardez et observez bien le dessin : le riz récolté entre à gauche, l'usine le transforme, le riz décortiqué sort à droite.",
  supportObservation: "Schéma de l'industrie (page Leçon)",
  analyse: [
    ["Qu'entre à l'usine, à gauche du dessin ?", "Le riz récolté, avec sa balle : le paddy."],
    ["Que fait l'usine au milieu ?", "Ses machines transforment le riz : elles décortiquent le paddy."],
    ["Que sort à droite ?", "Le riz blanc et décortiqué, en sacs, prêt à vendre."],
    ["Comment s'appelle le lieu où l'on transforme les produits ?", "C'est l'usine."],
    ["Qui travaille à l'usine ?", "Les ouvriers, avec les machines."],
    ["Que fabrique encore l'industrie dans nos villes ?", "Le savon, le tissu, les boissons, le sucre."],
  ],
  synthese: "Donc, l'industrie, c'est transformer les produits de la terre dans les usines, avec des machines et des ouvriers. La rizerie transforme le paddy en riz blanc ; d'autres usines fabriquent le savon, le tissu ou le sucre. L'industrie se trouve surtout dans les villes.",
  appExos: [
    {
      consigne: "Complète avec les mots : usine — transformer — ouvriers — paddy.",
      items: [
        "1. L'industrie, c'est ……… les produits dans les usines.",
        "2. Le lieu où l'on transforme s'appelle l'……… .",
        "3. Ceux qui travaillent à l'usine sont les ……… .",
        "4. Le riz récolté avec sa balle s'appelle le ……… .",
      ],
      corrige: ["**transformer** / **usine** / **ouvriers** / **paddy**."],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. L'usine fabrique avec des machines.",
        "2. La rizerie vend le riz avec sa balle.",
        "3. L'ouvrier travaille à l'usine.",
        "4. Les usines fabriquent aussi du savon et du sucre.",
      ],
      corrige: [
        "1. **Vrai**.",
        "2. **Faux** : elle **décortique le riz** : il sort blanc, prêt à cuire.",
        "3. **Vrai**.",
        "4. **Vrai**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Remets en ordre le voyage du riz : écris 1, 2, 3.",
      items: [
        "……… l'usine décortique le paddy",
        "……… le cultivateur récolte le riz",
        "……… le riz blanc est vendu au marché",
      ],
      corrige: [
        "La récolte : **1** / le décorticage à l'usine : **2** / la vente au marché : **3**.",
      ],
    },
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que l'industrie ?",
        "2. Que fait la rizerie ?",
        "3. Qui travaille dans une usine ?",
        "4. Où trouve-t-on surtout les usines ?",
      ],
      corrige: [
        "1. C'est **transformer les produits de la terre dans les usines**.",
        "2. **Elle décortique le paddy en riz blanc**, prêt à cuire.",
        "3. **Les ouvriers**, avec les machines.",
        "4. **Dans les villes**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La définition de l'industrie",
        paras: [
          "L'industrie, c'est transformer les matières premières en produits prêts à utiliser.",
          "Cette transformation se fait dans les usines, avec des machines conduites par des ouvriers.",
        ],
      },
      {
        titre: "2. L'exemple de la rizerie",
        paras: [
          "À l'entrée : le paddy, le riz récolté avec sa balle.",
          "Au milieu : les machines décortiquent, blanchissent, trient.",
          "À la sortie : le riz blanc en sacs, prêt à vendre et à cuire.",
        ],
        sous: [
          {
            titre: "a. Les autres usines",
            paras: [
              "Les savonneries fabriquent le savon, les filatures transforment le coton en tissu, les sucreries transforment la canne en sucre.",
            ],
          },
        ],
      },
      {
        titre: "3. L'industrie dans la ville",
        paras: [
          "Les usines s'installent surtout dans les villes, près des routes et des marchés.",
          "Elles donnent du travail à beaucoup d'habitants : les ouvriers.",
        ],
        exemples: [
          "À la rizerie, Koto voit le paddy entrer d'un côté et les sacs de riz blanc sortir de l'autre.",
        ],
      },
    ],
  },
  motsCles: ["industrie", "usine", "transformer", "ouvrier", "machine"],
  questionsRevision: [
    ["Qu'est-ce que l'industrie ?", "C'est transformer les produits de la terre dans les usines."],
    ["Que fait la rizerie ?", "Elle décortique le paddy en riz blanc, prêt à vendre."],
  ],
};

const S72 = {
  numero: 72, total: TOTAL,
  titre: "Le commerce",
  theme: "L'Homme et les activités quotidiennes",
  objectif: "Être capable de décrire le commerce : acheter et vendre.",
  image: { id: "geot4_commerce", legende: "Le commerce : au marché, on vend ce qu'on produit et on achète ce qu'il faut." },
  scene: { file: "scene_s72_marche.jpg", mode: "document", legende: "Document : le marché — on vend ce qu'on produit, on achète ce qu'il faut." },
  miseEnSituation: {
    texte: "Vendredi, jour du grand marché ! Rasoa installe ses brèdes et ses tomates sur l'étal. À côté, le vendeur de fruits aligne mangues et goyaves. Les acheteuses arrivent avec leurs paniers, marchandent, comparent. « Le marché, c'est le cœur du village, dit la maman de Rasoa : celui qui a produit vend, celui qui a besoin achète ! »",
    question: "Que font les gens au marché du vendredi ?",
    ra: "Ils vendent et ils achètent : c'est le commerce.",
    support: "Schéma du commerce (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Le commerce ». Après cette séance, vous serez capables de décrire le commerce : acheter et vendre.",
  observation: "Regardez et observez bien le dessin : les étals, la vendeuse de brèdes, le vendeur de fruits et l'acheteuse avec son panier.",
  supportObservation: "Schéma du commerce (page Leçon)",
  analyse: [
    ["Que fait Rasoa sur son étal ?", "Elle vend ses brèdes et ses tomates."],
    ["Que fait l'acheteuse avec son panier ?", "Elle achète ce qu'il faut pour la maison."],
    ["Que fait-on au marché ?", "On vend et on achète : c'est le commerce."],
    ["Comment appelle-t-on la personne qui vend ?", "C'est le vendeur ou la vendeuse."],
    ["Et celle qui achète ?", "C'est l'acheteur ou l'acheteuse."],
    ["Que fait le marchand avec l'argent gagné ?", "Il achète à son tour ce dont sa famille a besoin."],
  ],
  synthese: "Donc, le commerce, c'est acheter et vendre. Le vendeur propose sa marchandise au marché ; l'acheteur choisit et paie. Le marché du village ou de la ville est le grand lieu du commerce : on y vend ce qu'on produit et on y achète ce qu'il faut.",
  appExos: [
    {
      consigne: "Complète avec les mots : commerce — vendre — acheter — marché.",
      items: [
        "1. Acheter et vendre, c'est le ……… .",
        "2. Rasoa apporte ses brèdes pour les ……… .",
        "3. L'acheteuse vient ……… ce qu'il faut pour la maison.",
        "4. Le grand lieu du commerce est le ……… .",
      ],
      corrige: ["**commerce** / **vendre** / **acheter** / **marché**."],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le vendeur donne sa marchandise gratuitement.",
        "2. L'acheteur paie ce qu'il achète.",
        "3. Le commerce se fait au marché.",
        "4. Le marchand gagne de l'argent pour sa famille.",
      ],
      corrige: [
        "1. **Faux** : il **vend** sa marchandise, l'acheteur paie.",
        "2. **Vrai**.",
        "3. **Vrai**.",
        "4. **Vrai**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Relie chaque personne de la liste 1 à son action de la liste 2 par une flèche.",
      items: [
        "Liste 1 : 1. la vendeuse de brèdes — 2. l'acheteuse au panier — 3. le vendeur de fruits",
        "Liste 2 : a. propose mangues et goyaves — b. choisit et paie — c. étale brèdes et tomates",
      ],
      corrige: [
        "1 → **c** : la vendeuse étale brèdes et tomates.",
        "2 → **b** : l'acheteuse choisit et paie.",
        "3 → **a** : le vendeur propose mangues et goyaves.",
      ],
    },
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que le commerce ?",
        "2. Que fait le vendeur ?",
        "3. Que fait l'acheteur ?",
        "4. Qu'est-ce que le marché du village ?",
      ],
      corrige: [
        "1. C'est **acheter et vendre**.",
        "2. Il **propose sa marchandise et la vend**.",
        "3. Il **choisit et paie** ce qu'il achète.",
        "4. **Le grand lieu du commerce**, où l'on vend et achète.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La définition du commerce",
        paras: [
          "Le commerce, c'est acheter et vendre des marchandises.",
          "Celui qui vend propose ; celui qui achète choisit et paie.",
        ],
      },
      {
        titre: "2. Le marché",
        paras: [
          "Le marché est le grand lieu du commerce : le grand marché du village a souvent lieu une fois par semaine.",
          "On y vend ce qu'on a produit : brèdes, tomates, mangues, poules, paniers.",
          "On y achète ce qu'on ne produit pas : sel, savon, pétrole, habits.",
        ],
        sous: [
          {
            titre: "a. Les boutiques",
            paras: [
              "Dans le village, les boutiques vendent chaque jour le sel, le savon, les allumettes, le sucre.",
            ],
          },
        ],
      },
      {
        titre: "3. Le commerce fait vivre",
        paras: [
          "Le commerce fait circuler les richesses : la récolte du cultivateur devient l'argent de la marchande.",
          "Sans commerce, chacun resterait avec sa seule production.",
        ],
        exemples: [
          "Le vendredi, Rasoa vend ses brèdes au marché ; avec l'argent gagné, sa maman achète le sel et le savon.",
        ],
      },
    ],
  },
  motsCles: ["commerce", "acheter", "vendre", "marché", "marchandise"],
  questionsRevision: [
    ["Qu'est-ce que le commerce ?", "C'est acheter et vendre des marchandises."],
    ["Où se fait le commerce dans le village ?", "Au marché et dans les boutiques."],
  ],
};

const S73 = {
  numero: 73, total: TOTAL,
  titre: "Le transport",
  theme: "L'Homme et les activités quotidiennes",
  objectif: "Être capable de citer les moyens de transport et d'expliquer leur utilité.",
  image: { id: "geot4_transport", legende: "Les transports : le taxi-brousse, le camion, la pirogue et la charrette à zébu." },
  scene: { file: "scene_s73_transport.jpg", mode: "document", legende: "Document : les transports — le taxi-brousse, la charrette à zébu et la pirogue." },
  miseEnSituation: {
    texte: "Sur la route qui longe l'école, la classe guette les passages. « Un taxi-brousse ! Il emporte les voyageurs vers la ville. — Un camion ! Il porte les sacs de riz vers le port. — Une charrette à zébu ! Elle ramène les provisions du marché. — Et sur le lac, la pirogue de l'oncle ! » Le maître sourit : « Voilà le transport : tout ce qui bouge, personnes et marchandises ! »",
    question: "Que transportent le taxi-brousse, le camion, la charrette et la pirogue ?",
    ra: "Les voyageurs et les marchandises : c'est le transport.",
    support: "Schéma des transports (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Le transport ». Après cette séance, vous serez capables de citer les moyens de transport et d'expliquer leur utilité.",
  observation: "Regardez et observez bien les quatre panneaux : le taxi-brousse, le camion, la pirogue et la charrette à zébu.",
  supportObservation: "Schéma des transports (page Leçon)",
  analyse: [
    ["Que transporte le taxi-brousse ?", "Les voyageurs et leurs bagages."],
    ["Que transporte le camion ?", "Les marchandises : les sacs de riz, les caisses."],
    ["À quoi sert la charrette à zébu ?", "À transporter les charges du village : récoltes et provisions."],
    ["Et la pirogue ?", "À naviguer sur les lacs et rivières : pêcheurs et voyageurs."],
    ["Pourquoi le transport est-il utile ?", "Il relie les villages et les villes : sans lui, rien ne circule."],
    ["Sur quoi roulent le taxi-brousse et le camion ?", "Sur les routes."],
  ],
  synthese: "Donc, le transport, c'est déplacer les personnes et les marchandises d'un lieu à un autre. Nos moyens de transport : le taxi-brousse et le camion sur les routes, la charrette à zébu dans les villages, la pirogue sur les lacs et les rivières. Le transport relie les villages, les villes et les marchés.",
  appExos: [
    {
      consigne: "Complète avec les mots : taxi-brousse — camion — charrette — pirogue.",
      items: [
        "1. Les voyageurs montent dans le ……… pour aller en ville.",
        "2. Les sacs de riz voyagent dans le ……… .",
        "3. Le zébu tire la ……… chargée de provisions.",
        "4. Le pêcheur navigue en ……… sur le lac.",
      ],
      corrige: ["**taxi-brousse** / **camion** / **charrette** / **pirogue**."],
    },
    {
      consigne: "Relie chaque moyen de transport de la liste 1 à ce qu'il transporte de la liste 2 par une flèche.",
      items: [
        "Liste 1 : 1. le taxi-brousse — 2. le camion — 3. la pirogue",
        "Liste 2 : a. les marchandises lourdes — b. les voyageurs — c. les pêcheurs sur le lac",
      ],
      corrige: [
        "1 → **b** : le taxi-brousse transporte les voyageurs.",
        "2 → **a** : le camion porte les marchandises lourdes.",
        "3 → **c** : la pirogue porte les pêcheurs sur le lac.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le transport déplace les personnes et les marchandises.",
        "2. La charrette à zébu roule sur le lac.",
        "3. Le camion porte les charges lourdes.",
        "4. Sans transport, les marchandises ne quitteraient pas le village.",
      ],
      corrige: [
        "1. **Vrai**.",
        "2. **Faux** : elle roule **sur les chemins du village** ; sur le lac, c'est la pirogue.",
        "3. **Vrai**.",
        "4. **Vrai**.",
      ],
    },
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que le transport ?",
        "2. Cite quatre moyens de transport de nos localités.",
        "3. Que transporte le taxi-brousse ?",
        "4. Pourquoi le transport est-il utile ?",
      ],
      corrige: [
        "1. C'est **déplacer les personnes et les marchandises** d'un lieu à un autre.",
        "2. **Le taxi-brousse, le camion, la charrette à zébu et la pirogue**.",
        "3. **Les voyageurs et leurs bagages**.",
        "4. **Il relie les villages, les villes et les marchés** : sans lui, rien ne circule.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La définition du transport",
        paras: [
          "Le transport, c'est déplacer les personnes et les marchandises d'un lieu à un autre.",
          "Ceux qui conduisent — chauffeurs, charretiers, bateliers — exercent l'activité de transport.",
        ],
      },
      {
        titre: "2. Nos moyens de transport",
        paras: [
          "Sur les routes : le taxi-brousse pour les voyageurs, le camion pour les marchandises.",
          "Dans les villages : la charrette à zébu pour les charges du quotidien.",
          "Sur les lacs et les rivières : la pirogue à rame ou à voile.",
        ],
        sous: [
          {
            titre: "a. Route, piste et rivière",
            paras: [
              "Le transport suit les routes et les pistes ; là où il n'y a pas de route, la pirogue et la charrette prennent le relais.",
            ],
          },
        ],
      },
      {
        titre: "3. Le transport relie tout",
        paras: [
          "Grâce au transport, la récolte du cultivateur rejoint le marché de la ville.",
          "Grâce au transport, les marchandises de la ville — sel, savon, habits — rejoignent le village.",
        ],
        exemples: [
          "Devant l'école, la classe compte les passages : taxi-brousse, camion, charrette à zébu et, sur le lac, la pirogue de l'oncle.",
        ],
      },
    ],
  },
  motsCles: ["transport", "voyageurs", "marchandises", "route"],
  questionsRevision: [
    ["Qu'est-ce que le transport ?", "C'est déplacer les personnes et les marchandises d'un lieu à un autre."],
    ["Cite quatre moyens de transport de nos localités.", "Le taxi-brousse, le camion, la charrette à zébu et la pirogue."],
  ],
};

const S74 = {
  numero: 74, total: TOTAL,
  titre: "Les activités de la population de ma localité : synthèse",
  theme: "L'Homme et les activités quotidiennes",
  objectif: "Être capable de présenter les activités de sa localité et de les classer.",
  image: { id: "geot4_ma_localite", legende: "Les activités de ma localité : agriculture, élevage, pêche, artisanat, commerce et transport." },
  miseEnSituation: {
    texte: "Grande journée à l'école : chaque groupe présente le résultat de son enquête ! Le groupe de Rasoa a interrogé les habitants : « Nous avons compté douze cultivateurs, cinq pêcheurs, trois artisans… » Le groupe de Hery a dressé la liste des étals du marché. Sur la grande affiche, le maître note tout : « Voici les activités de notre localité ! »",
    question: "Qu'ont découvert les élèves avec leur enquête ?",
    ra: "Les activités de leur localité : agriculture, élevage, pêche, artisanat, commerce, transport.",
    support: "Affiche des activités de la localité (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les activités de la population de ma localité : synthèse ». Après cette séance, vous serez capables de présenter les activités de votre localité et de les classer.",
  observation: "Regardez et observez bien l'affiche : le village avec ses activités numérotées de 1 à 6.",
  supportObservation: "Affiche des activités de la localité (page Leçon)",
  analyse: [
    ["Que représente le numéro 1 sur l'affiche ?", "L'agriculture : les rizières du village."],
    ["Et le numéro 2 ?", "L'élevage : les zébus du pâturage."],
    ["Quels sont les numéros 3 et 4 ?", "La pêche sur le lac et l'artisanat des vanniers."],
    ["Et les numéros 5 et 6 ?", "Le commerce du marché et le transport : charrette et taxi-brousse."],
    ["Comment la classe a-t-elle découvert tout cela ?", "Avec une enquête : chaque groupe a interrogé les habitants."],
    ["Quelle est l'activité la plus commune de nos localités ?", "L'agriculture : la plupart des familles cultivent."],
  ],
  synthese: "Donc, les activités de ma localité se classent en six groupes : l'agriculture, l'élevage et la pêche, l'artisanat, l'industrie, le commerce et le transport. L'enquête de la classe les a toutes découvertes : chaque habitant contribue à la vie du village ou de la ville par son travail.",
  appExos: [
    {
      consigne: "Classe chaque activité : A (agriculture/élevage/pêche), Ar (artisanat), I (industrie), C (commerce), T (transport).",
      items: [
        "1. la tisserande du quartier ……",
        "2. le chauffeur de taxi-brousse ……",
        "3. le gardien de zébus ……",
        "4. la marchande du marché ……",
        "5. l'ouvrier de la rizerie ……",
        "6. le repiqueur de riz ……",
      ],
      corrige: [
        "1. **Ar** / 2. **T** / 3. **A** / 4. **C** / 5. **I** / 6. **A**.",
      ],
    },
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Quelle est l'activité la plus répandue dans ta localité ?",
        "2. Comment la classe a-t-elle mené son enquête ?",
        "3. Cite deux activités de ta famille ou de tes voisins.",
        "4. Pourquoi chaque travail compte-t-il pour la localité ?",
      ],
      corrige: [
        "1. **L'agriculture** (dans la plupart de nos localités).",
        "2. **Par groupes, en interrogeant les habitants** avec un questionnaire.",
        "3. Réponse libre : par exemple **la culture du riz** et **le petit commerce**.",
        "4. Parce que **chaque habitant contribue à la vie du village ou de la ville** par son travail.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : enquête — six — agriculture — habitants.",
      items: [
        "1. La classe a découvert les activités avec une ……… .",
        "2. Les activités se classent en ……… grands groupes.",
        "3. L'activité la plus répandue de nos localités est l'……… .",
        "4. Chaque travail des ……… fait vivre la localité.",
      ],
      corrige: ["**enquête** / **six** / **agriculture** / **habitants**."],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. L'enquête de la classe a interrogé les habitants.",
        "2. Dans nos localités, personne ne travaille.",
        "3. Les activités se classent en six groupes.",
        "4. Le travail de chacun compte pour tous.",
      ],
      corrige: [
        "1. **Vrai**.",
        "2. **Faux** : **presque tous travaillent** : cultiver, pêcher, vendre, transporter…",
        "3. **Vrai**.",
        "4. **Vrai**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Les activités de ma localité",
        paras: [
          "Ma localité vit de ses activités : l'agriculture dans les rizières, l'élevage au pâturage, la pêche sur le lac.",
          "L'artisanat façonne paniers et lamba ; le commerce anime le marché ; le transport relie tout.",
        ],
        sous: [
          {
            titre: "a. Les produits locaux",
            paras: [
              "Chaque région a sa spécialité, son produit local : la vanille d'Antalaha, le girofle de Fénérive-Est, le riz des plaines de l'Alaotra, les pommes de terre du Vakinankaratra.",
              "Ces produits voyagent vers les autres régions, et même vers l'étranger : ils font la richesse de la localité.",
            ],
          },
        ],
      },
      {
        titre: "2. L'enquête de la classe",
        paras: [
          "Pour connaître les activités, la classe mène une enquête : chaque groupe interroge les habitants avec un questionnaire.",
          "Puis on compte, on classe et on affiche les résultats.",
        ],
        sous: [
          {
            titre: "a. L'affiche des activités",
            paras: [
              "Sur l'affiche, chaque activité reçoit un numéro et un dessin.",
              "D'un coup d'œil, on voit ce qui fait vivre la localité.",
            ],
          },
        ],
      },
      {
        titre: "3. Chaque travail compte",
        paras: [
          "Le cultivateur nourrit, la marchande approvisionne, le chauffeur relie, l'artisan équipe.",
          "Chaque habitant contribue à la vie du village ou de la ville par son travail.",
        ],
        exemples: [
          "L'enquête du groupe de Rasoa : douze cultivateurs, cinq pêcheurs, trois artisans — et l'affiche du maître les rassemble toutes.",
        ],
      },
    ],
  },
  motsCles: ["enquête", "questionnaire", "affiche", "classer", "localité", "produit local"],
  questionsRevision: [
    ["Comment la classe a-t-elle découvert les activités de la localité ?", "Avec une enquête : des groupes qui interrogent les habitants avec un questionnaire."],
    ["Cite les six groupes d'activités.", "Agriculture, élevage/pêche, artisanat, industrie, commerce, transport."],
    ["Cite deux produits locaux de Madagascar.", "La vanille d'Antalaha et le girofle de Fénérive-Est (aussi le riz de l'Alaotra, les pommes de terre du Vakinankaratra)."],
  ],
};

module.exports = { topics: [S69, S70, S71, S72, S73, S74] };
