// data-unite5b.js — UNITÉ 5 : LES GRANDES ZONES ÉCONOMIQUES ET LES ACTIVITÉS ÉCONOMIQUES (Séances 58 à 64)
// Contenu rédactionnel conforme au Programme d'études officiel T6 — Géographie (p. 178-181)
const TOTAL = 78;

const S58 = {
  numero: 58, total: TOTAL,
  titre: "Les ressources minières et leur exploitation",
  theme: "Les grandes zones économiques et les activités économiques",
  objectif: "Être capable de citer les principaux produits miniers de Madagascar et de distinguer l'exploitation artisanale de l'exploitation industrielle.",
  image: { id: "geo6_mines_exploitation", legende: "Le creuseur d'Ilakaka et la grande usine de nickel : deux mines, deux mondes." },
  scene: { file: "scene_s58_mines.jpg", mode: "document", legende: "Document : à l'ouest? plutôt : d'un côté le puits des chercheurs de saphirs ; de l'autre, la grande usine de nickel avec ses camions-bennes géants." },
  revisionOuverture: [
    ["Cite les deux grands usages du bois.", "Le bois de chauffe (cuisson) et le bois d'œuvre (construction, meubles)."],
    ["Cite deux minerais de Madagascar et leur région.", "Le nickel à l'est, les saphirs dans le Sud (aussi la chromite au nord-ouest, l'ilménite au sud-est)."],
  ],
  miseEnSituation: {
    texte: "Dans le journal du soir, deux images se suivent. La première : un creuseur de saphirs d'Ilakaka, torse nu au fond d'un puits étroit, tamisant la terre rouge à la main. La deuxième : la grande mine de nickel de l'est, où des camions-bennes gros comme des maisons montent des terrasses de roche, et où l'usine traite le minerai jour et nuit. « Deux mines, commente papa. Le saphir du creuseur nourrit sa famille ; le nickel de la grande usine rapporte des devises au pays. L'une est artisanale, l'autre industrielle. »",
    question: "Comment exploite-t-on les richesses du sous-sol malgache ?",
    ra: "De deux façons : l'exploitation artisanale (creuseurs, puits, tamis à la main) et l'exploitation industrielle (grandes machines, usines de traitement). Les deux font vivre des dizaines de milliers de personnes.",
    support: "Schéma des deux exploitations minières (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les ressources minières et leur exploitation ». Après cette séance, vous serez capables de citer les produits miniers et de distinguer les deux types d'exploitation.",
  observation: "Observez bien le schéma : le puits étroit du creuseur et ses outils simples ; la mine en terrasses et ses machines géantes.",
  supportObservation: "Schéma des deux exploitations minières (page Leçon)",
  analyse: [
    ["Cite trois produits miniers de Madagascar.", "Le nickel, la chromite, l'ilménite (aussi les saphirs, le graphite, le mica)."],
    ["Qu'est-ce que l'exploitation artisanale ?", "C'est l'exploitation à la main : le creuseur descend dans un puits et tamise la terre avec des outils simples."],
    ["Qu'est-ce que l'exploitation industrielle ?", "C'est l'exploitation par de grandes compagnies : machines géantes, usines de traitement, chemin de fer parfois."],
    ["Qui vit de l'exploitation artisanale ?", "Des dizaines de milliers de creuseurs et leurs familles, surtout dans le Sud saphirifère."],
    ["Que rapporte la grande mine de nickel ?", "Des devises au pays et des emplois aux ouvriers de la région."],
    ["Quels dangers de l'exploitation artisanale ?", "Les éboulements de puits, la poussière, les maladies — et la terre bouleversée qui met du temps à guérir."],
  ],
  synthese: "Donc, Madagascar exploite son sous-sol de deux façons : l'exploitation artisanale (creuseurs, saphirs, outils simples) et l'exploitation industrielle (grandes mines de nickel, machines, usines). Produits de grande valeur, les minerais rapportent des devises — à condition de réparer la terre après la mine.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Cite trois produits miniers de Madagascar.",
        "2. Qu'est-ce que l'exploitation artisanale d'une mine ?",
        "3. Comment travaille une grande compagnie minière ?",
        "4. Que rapporte l'exportation du nickel ?",
      ],
      corrige: [
        "1. Par exemple : **le nickel, la chromite et les saphirs** (aussi l'ilménite, le graphite).",
        "2. C'est **l'exploitation à la main** : puits étroits, tamis, outils simples.",
        "3. **Avec des machines géantes et une usine de traitement** du minerai.",
        "4. **Des devises** au pays et des emplois à la région.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Les creuseurs de saphirs travaillent avec des pelleteuses géantes.",
        "2. La grande mine de nickel se trouve à l'est du pays.",
        "3. L'exploitation artisanale fait vivre beaucoup de familles.",
        "4. Après une mine, la terre se répare toute seule en une nuit.",
      ],
      corrige: [
        "1. **Faux** : ils descendent dans des puits et tamisent à la main.",
        "2. **Vrai** : autour de Moramanga.",
        "3. **Vrai** : surtout dans le Sud saphirifère.",
        "4. **Faux** : la terre bouleversée met du temps à guérir ; il faut la réparer.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : artisanale — industrielle — saphirs — devises.",
      items: [
        "Les creuseurs d'Ilakaka cherchent les ……… à la main : exploitation ……… .",
        "La grande usine de nickel pratique l'exploitation ……… .",
        "Ses exportations apportent des ……… au pays.",
      ],
      corrige: [
        "les **saphirs** / exploitation **artisanale** / exploitation **industrielle** / des **devises**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. L'exploitation artisanale utilise : A. des outils simples et les mains — B. des robots — C. des avions",
        "2. Les camions-bennes géants appartiennent : A. au creuseur — B. à la compagnie industrielle — C. au berger",
        "3. Le nickel malgache se mine : A. à l'est — B. au fond de la mer — C. dans le ciel",
        "4. Les minerais exportés rapportent : A. des devises — B. des nuages — C. du sable",
        "5. Après la mine, il faut : A. réparer la terre — B. partir sans rien dire — C. brûler la colline",
      ],
      corrige: [
        "1. Réponse **A** : puits, tamis, pelles.",
        "2. Réponse **B** : la grande industrie minière.",
        "3. Réponse **A** : autour de Moramanga.",
        "4. Réponse **A** : de l'argent qui entre au pays.",
        "5. Réponse **A** : reboucher, replanter, rendre la vie au sol.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Le sous-sol et ses trésors",
        paras: [
          "Le sous-sol malgache est riche : nickel et cobalt à l'est, chromite au nord-ouest, ilménite au sud-est, saphirs dans le Sud, graphite et mica ailleurs encore.",
          "Ces produits miniers partent vers les pays lointains, où ils deviennent métaux, pièces de voitures, bijoux et peintures.",
        ],
        exemples: [
          "Les saphirs d'Ilakaka brillent dans les bijouteries du monde entier.",
          "Le nickel de l'est part en bateau vers les usines métallurgiques.",
        ],
      },
      {
        titre: "2. Deux façons de miner",
        paras: [
          "L'exploitation artisanale est celle des creuseurs : un puits étroit, une corde, un tamis, beaucoup de courage. Elle fait vivre des dizaines de milliers de familles.",
          "L'exploitation industrielle est celle des grandes compagnies : la colline est ouverte en terrasses, des camions-bennes géants transportent la roche, une usine traite le minerai jour et nuit, un pipeline ou un train l'emporte vers le port.",
        ],
        exemples: [
          "Le creuseur d'Ilakaka descend à vingt mètres sous terre avec sa lampe frontale.",
          "À la mine de nickel, même la nuit, les phares des camions brillent comme des étoiles.",
        ],
      },
      {
        titre: "3. Miner sans détruire",
        paras: [
          "La mine nourrit, mais elle bouleverse : la terre retournée, les rivières troublées, la poussière qui tombe sur les champs.",
          "La mine raisonnée répare ce qu'elle ouvre : reboucher les puits, replanter la végétation, respecter les villages voisins. Le sous-sol est une richesse non renouvelable : chaque gramme extrait doit compter pour le pays.",
        ],
        exemples: [
          "Les anciens puits abandonnés sont dangereux pour les enfants et les zébus.",
          "Une grande mine a replanté des milliers d'arbres sur ses terrasses remblayées.",
        ],
      },
    ],
  },
  motsCles: ["produits miniers", "exploitation artisanale", "exploitation industrielle", "creuseur", "devises"],
  questionsRevision: [
    ["Quelle différence entre exploitation artisanale et industrielle ?", "Artisanale : puits et tamis à la main. Industrielle : machines géantes et usine de traitement."],
    ["Cite trois produits miniers malgaches.", "Le nickel, la chromite et les saphirs (aussi l'ilménite, le graphite, le mica)."],
  ],
};

const S59 = {
  numero: 59, total: TOTAL,
  titre: "L'artisanat : produits et techniques",
  theme: "Les grandes zones économiques et les activités économiques",
  objectif: "Être capable de citer les principaux produits de l'artisanat malgache et de distinguer les techniques rudimentaires des techniques modernes.",
  image: { id: "geo6_artisanat", legende: "Le raphia, le bois, la corne : le travail des mains, patrimoine des ancêtres." },
  scene: { file: "scene_s59_artisanat.jpg", mode: "document", legende: "Document : à l'atelier d'Antsirabe, la tisserande travaille la soie sauvage sur son métier, pendant que le sculpteur finit un zébu de bois de rose." },
  revisionOuverture: [
    ["Quelle différence entre exploitation artisanale et industrielle ?", "Artisanale : puits et tamis à la main. Industrielle : machines géantes et usine de traitement."],
    ["Cite trois produits miniers malgaches.", "Le nickel, la chromite et les saphirs (aussi l'ilménite, le graphite, le mica)."],
  ],
  miseEnSituation: {
    texte: "Marché artisanal d'Antsirabe. Miora tourne entre les étals : paniers de raphia tressés serrés, chapeaux blancs souples comme du tissu, zébus sculptés dans le bois de rose, cuillères en corne de zébu, nappes brodées, papier antemoro semé de fleurs séchées. Sous le auvent, une tisserande croise les fils de soie sauvage sur son métier de bois, exactement comme sa grand-mère. À côté, un jeune homme façonne des paniers avec une machine à coudre pour les finitions. « Ici, tout vient des mains, dit la tisserande. L'artisanat, c'est la mémoire des ancêtres qui gagne le pain des enfants. »",
    question: "Que produit l'artisanat malgache, et avec quelles techniques ?",
    ra: "Des produits faits main à partir des matières locales : raphia, bois, corne, soie sauvage, fibres. Les techniques rudimentaires (métier de bois, couteau) côtoient des techniques modernes (machines pour les finitions).",
    support: "Schéma de l'artisanat (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « L'artisanat : produits et techniques ». Après cette séance, vous serez capables de citer les produits de l'artisanat malgache et de comparer les techniques anciennes et modernes.",
  observation: "Observez bien le schéma : les matières premières (raphia, bois, corne, soie), les outils de l'artisan (métier, couteau), et les produits finis (paniers, sculptures, chapeaux).",
  supportObservation: "Schéma de l'artisanat (page Leçon)",
  analyse: [
    ["Qu'est-ce que l'artisanat ?", "C'est le travail des mains : transformer des matières locales en objets utiles ou beaux."],
    ["Cite quatre produits de l'artisanat malgache.", "Les paniers de raphia, les sculptures de bois, les cuillères en corne, les tissus de soie sauvage (aussi le papier antemoro)."],
    ["D'où viennent les matières premières ?", "De la nature voisine : le raphia des marais, le bois des forêts, la corne des zébus, la soie des vers sauvages."],
    ["Qu'est-ce qu'une technique rudimentaire ?", "Un outil simple et ancien : le métier à tisser de bois, le couteau du sculpteur, la main seule."],
    ["Qu'apporte la technique moderne ?", "Des machines qui accélèrent le travail et soignent les finitions, sans remplacer la main de l'artisan."],
    ["Qui achète les produits artisanaux ?", "Les familles du pays et les visiteurs étrangers, qui en font leurs souvenirs."],
  ],
  synthese: "Donc, l'artisanat malgache transforme les matières locales — raphia, bois, corne, soie — en produits faits main : paniers, sculptures, chapeaux, tissus. Techniques rudimentaires des ancêtres et techniques modernes se complètent : la main reste la reine de l'atelier.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que l'artisanat ?",
        "2. Cite trois matières premières de l'artisanat malgache.",
        "3. Cite trois produits artisanaux.",
        "4. Quelle différence entre technique rudimentaire et moderne ?",
      ],
      corrige: [
        "1. C'est **le travail des mains** : transformer des matières locales en objets utiles ou beaux.",
        "2. Par exemple : **le raphia, le bois et la corne de zébu** (aussi la soie sauvage).",
        "3. Par exemple : **les paniers, les sculptures de bois et les chapeaux de raphia**.",
        "4. La rudimentaire utilise **des outils simples et anciens** ; la moderne **des machines pour aller plus vite**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. L'artisanat utilise surtout des matières importées.",
        "2. Le métier à tisser de bois est une technique rudimentaire.",
        "3. Les visiteurs étrangers achètent des souvenirs artisanaux.",
        "4. Les machines modernes remplacent complètement la main de l'artisan.",
      ],
      corrige: [
        "1. **Faux** : raphia, bois, corne et soie viennent du pays même.",
        "2. **Vrai** : transmis de génération en génération.",
        "3. **Vrai** : c'est une richesse pour la zone artisanale.",
        "4. **Faux** : elles aident, mais la main reste la reine.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : raphia — corne — mains — souvenirs.",
      items: [
        "Les paniers sont tressés en ……… .",
        "Les cuillères sont taillées dans la ……… de zébu.",
        "L'artisanat, c'est le travail des ……… .",
        "Les visiteurs étrangers emportent les produits comme ……… .",
      ],
      corrige: [
        "en **raphia** / la **corne** / des **mains** / comme **souvenirs**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. L'artisanat transforme : A. les matières locales — B. les nuages — C. les minerais en or",
        "2. Le papier antemoro est semé : A. de fleurs séchées — B. de clous — C. de sable",
        "3. Une technique rudimentaire utilise : A. des outils simples — B. des robots — C. des fusées",
        "4. La soie sauvage se tisse : A. au métier de bois — B. au four — C. à la mine",
        "5. L'artisanat malgache est : A. un patrimoine des ancêtres — B. une importation — C. une invention d'hier",
      ],
      corrige: [
        "1. Réponse **A** : le raphia du marais voisin, le bois de la forêt.",
        "2. Réponse **A** : une spécialité du sud-est.",
        "3. Réponse **A** : le couteau, le métier, la main.",
        "4. Réponse **A** : comme du temps des grand-mères.",
        "5. Réponse **A** : la mémoire des mains.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Les matières du pays",
        paras: [
          "L'artisanat malgache naît de la nature voisine : le raphia des marais de l'est, le bois des forêts, la corne des zébus, la soie des vers sauvages, les fibres et les gourdes des campagnes.",
          "Chaque région a sa spécialité, née de ce que sa nature offre : le tressage là où pousse le raphia, la sculpture là où pousse le bois précieux.",
        ],
        exemples: [
          "Les chapeaux de raphia d'Antananarivo, blancs et souples comme du tissu.",
          "Les zébus sculptés du bois de rose, vendus aux visiteurs du marché.",
        ],
      },
      {
        titre: "2. Les mains et les machines",
        paras: [
          "Les techniques rudimentaires sont celles des ancêtres : le métier à tisser de bois, le couteau du sculpteur, la main qui tresse, la pierre qui polit.",
          "Les techniques modernes arrivent en renfort : machines à coudre pour les finitions, outils électriques pour tailler plus vite. Mais la main reste la reine : c'est elle qui tient le geste juste, appris de la grand-mère.",
        ],
        exemples: [
          "La tisserande croise les fils de soie exactement comme sa grand-mère.",
          "Le jeune artisan coud les finitions des paniers à la machine, le cœur du tressage restant à la main.",
        ],
      },
      {
        titre: "3. Une richesse qui voyage",
        paras: [
          "Les produits artisanaux nourrissent d'abord le pays : paniers, nattes, chapeaux et cuillères servent chaque jour dans les familles.",
          "Ils voyagent ensuite : les visiteurs étrangers en font leurs souvenirs, et le papier antemoro ou la soie sauvage partent jusque dans les boutiques des grandes capitales. L'artisanat fait vivre des dizaines de milliers de familles — sans épuiser la nature, quand le raphia est coupé sans tuer la plante.",
        ],
        exemples: [
          "Une nappe de raphia se vend au marché d'Antsirabe le prix d'un sac de riz.",
          "Les carnets antemoro décorés de fleurs séchées partent vers les pays lointains.",
        ],
      },
    ],
  },
  motsCles: ["artisanat", "produits artisanaux", "techniques rudimentaires", "techniques modernes", "raphia"],
  questionsRevision: [
    ["Cite trois produits de l'artisanat malgache.", "Les paniers de raphia, les sculptures de bois et les tissus de soie sauvage (aussi le papier antemoro)."],
    ["Quelle différence entre techniques rudimentaires et modernes ?", "Rudimentaires : outils simples des ancêtres. Modernes : machines qui accélèrent et finissent, sans remplacer la main."],
  ],
};

const S60 = {
  numero: 60, total: TOTAL,
  titre: "L'industrie : agroalimentaire, textile, minière",
  theme: "Les grandes zones économiques et les activités économiques",
  objectif: "Être capable de citer les types d'industrie de Madagascar, leur répartition et leur importance.",
  image: { id: "geo6_industrie", legende: "Trois grandes industries : transformer la récolte, filer le coton, traiter le minerai." },
  scene: { file: "scene_s60_industrie.jpg", mode: "document", legende: "Document : dans la zone franche d'Antananarivo, Rado? Non, Tovo? Non plutôt : des ouvrières et ouvriers cousent des vêtements ; les ballots partent vers les pays lointains." },
  revisionOuverture: [
    ["Cite trois produits de l'artisanat malgache.", "Les paniers de raphia, les sculptures de bois et les tissus de soie sauvage (aussi le papier antemoro)."],
    ["Quelle différence entre techniques rudimentaires et modernes ?", "Rudimentaires : outils simples des ancêtres. Modernes : machines qui accélèrent et finissent, sans remplacer la main."],
  ],
  miseEnSituation: {
    texte: "Nouvelle lettre de Rado, l'ancien vendeur de parapluies : « Devine ! J'ai trouvé mieux : une usine de vêtements dans la zone franche. Cent machines à coudre, et je suis devenu l'une d'elles — enfin, l'une des personnes assises derrière ! Nous cousons des pull-overs pour les pays froids ; le camion les emporte chaque vendredi vers le port. Avant, ici, on ne faisait que vendre ; maintenant, on fabrique. » À l'usine agroalimentaire voisine, on décortique le riz et on embouteille les boissons ; à l'est, l'usine du nickel traite le minerai.",
    question: "Quelles industries fait tourner Madagascar, et où ?",
    ra: "Trois grandes familles : l'industrie agroalimentaire (riz, boissons, sucre), l'industrie textile (zones franches de vêtements) et l'industrie minière (traitement du nickel et des autres minerais). Elles emploient des dizaines de milliers d'ouvriers et rapportent des devises.",
    support: "Schéma des trois industries (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « L'industrie : agroalimentaire, textile, minière ». Après cette séance, vous serez capables de citer les types d'industrie, leur répartition et leur importance.",
  observation: "Observez bien le schéma : les trois usines — l'agroalimentaire avec ses bouteilles, la textile avec ses vêtements, la minière avec son minerai — et les navires qui partent vers les pays lointains.",
  supportObservation: "Schéma des trois industries (page Leçon)",
  analyse: [
    ["Qu'est-ce qu'une industrie ?", "C'est une activité qui transforme des matières premières en produits finis, dans des usines."],
    ["Que transforme l'industrie agroalimentaire ?", "Les produits de la terre et de la mer : décorticage du riz, boissons, sucre, conserves de crevettes."],
    ["Que produit l'industrie textile ?", "Des vêtements, surtout dans les zones franches autour d'Antananarivo, exportés vers les pays lointains."],
    ["Que fait l'industrie minière ?", "Elle traite le minerai extrait des mines pour l'envoyer vers les usines métallurgiques."],
    ["Où se regroupent les usines ?", "Dans les grandes villes et autour des ports, où arrivent matières, ouvriers et transports."],
    ["Pourquoi l'industrie est-elle importante ?", "Elle crée des emplois salariés et rapporte des devises par ses exportations."],
  ],
  synthese: "Donc, Madagascar compte trois grandes familles d'industrie : l'agroalimentaire (riz, boissons, sucre), la textile (zones franches) et la minière (traitement des minerais). Regroupées près des villes et des ports, elles créent des emplois et rapportent des devises.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'une industrie ?",
        "2. Cite trois produits de l'industrie agroalimentaire.",
        "3. Que produit l'industrie textile malgache ?",
        "4. Pourquoi les usines se groupent-elles près des villes et des ports ?",
      ],
      corrige: [
        "1. C'est **une activité qui transforme des matières premières en produits finis**, dans des usines.",
        "2. Par exemple : **le riz décortiqué, les boissons, le sucre** (aussi les conserves de crevettes).",
        "3. **Des vêtements**, cousus dans les zones franches et exportés.",
        "4. Parce qu'elles y trouvent **les matières, les ouvriers et les transports**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Les zones franches textiles entourent Antananarivo.",
        "2. L'industrie ne crée aucun emploi.",
        "3. L'usine minière traite le minerai de nickel.",
        "4. Les vêtements des zones franches partent vers les pays lointains.",
      ],
      corrige: [
        "1. **Vrai** : c'est la grande industrie d'emploi de la capitale.",
        "2. **Faux** : des dizaines de milliers d'emplois salariés.",
        "3. **Vrai** : à l'est du pays.",
        "4. **Vrai** : ils rapportent des devises.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : agroalimentaire — textile — minière — devises.",
      items: [
        "L'industrie ……… décortique le riz et embouteille les boissons.",
        "L'industrie ……… coud les vêtements des zones franches.",
        "L'industrie ……… traite le minerai de nickel.",
        "Les exportations industrielles rapportent des ……… .",
      ],
      corrige: [
        "industrie **agroalimentaire** / industrie **textile** / industrie **minière** / des **devises**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Une industrie : A. transforme des matières premières — B. chante — C. dort",
        "2. Le décorticage du riz est une activité : A. agroalimentaire — B. textile — C. touristique",
        "3. Les zones franches cousent : A. des vêtements — B. des bateaux — C. des gâteaux",
        "4. Les usines se groupent près : A. des villes et des ports — B. des lémuriens — C. des étoiles",
        "5. L'industrie est importante parce qu'elle : A. crée des emplois salariés — B. ferme les écoles — C. arrête le vent",
      ],
      corrige: [
        "1. Réponse **A** : en produits finis, dans des usines.",
        "2. Réponse **A** : la filière alimentaire.",
        "3. Réponse **A** : pour les pays lointains.",
        "4. Réponse **A** : matières, ouvriers, transports.",
        "5. Réponse **A** : et rapporte des devises.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Transformer la récolte : l'agroalimentaire",
        paras: [
          "L'industrie agroalimentaire transforme les produits de la terre et de la mer : riz décortiqué, farines, boissons, sucre des sucreries, conserves et crevettes congelées.",
          "Installée près des zones de production et des villes, elle nourrit le marché intérieur et prépare les exportations.",
        ],
        exemples: [
          "L'usine de boissons d'Antsirabe embouteille des milliers de bouteilles par jour.",
          "La sucrerie reçoit les camions de canne des plaines voisines.",
        ],
      },
      {
        titre: "2. Coudre pour le monde : la textile",
        paras: [
          "L'industrie textile est la grande industrie d'emploi du pays : dans les zones franches autour d'Antananarivo, des dizaines de milliers d'ouvrières et d'ouvriers cousent des vêtements.",
          "Les ballots partent chaque semaine vers le port de Toamasina, puis vers les pays lointains. La textile rapporte des devises et fait vivre des familles entières — comme celle de Rado.",
        ],
        exemples: [
          "« Cent machines à coudre, et je suis devenu l'une des personnes assises derrière », écrit Rado.",
          "Le camion des pull-overs part chaque vendredi vers le port.",
        ],
      },
      {
        titre: "3. Traiter le minerai : la minière",
        paras: [
          "L'industrie minière prolonge les mines : elle lave, concentre et prépare le minerai — nickel, ilménite, chromite — avant son départ en bateau.",
          "Avec l'agroalimentaire et la textile, elle forme le troisième pilier industriel du pays : des emplois salariés, des compétences techniques, et des devises qui aident au développement.",
        ],
        exemples: [
          "L'usine de nickel de l'est traite le minerai jour et nuit.",
          "Les sacs d'ilménite du sud-est s'entassent sur le quai avant l'exportation.",
        ],
      },
    ],
  },
  motsCles: ["industrie", "agroalimentaire", "textile", "minière", "zone franche"],
  questionsRevision: [
    ["Cite les trois grandes familles d'industrie de Madagascar.", "L'agroalimentaire, la textile et la minière."],
    ["Qu'apporte l'industrie au pays ?", "Des emplois salariés et des devises par les exportations."],
  ],
};

const S61 = {
  numero: 61, total: TOTAL,
  titre: "Le tourisme et ses impacts",
  theme: "Les grandes zones économiques et les activités économiques",
  objectif: "Être capable de citer les formes de tourisme de Madagascar et d'expliquer ses impacts économiques.",
  image: { id: "geo6_tourisme", legende: "Balnéaire, culturel, écologique : trois tourismes, une même richesse — les devises." },
  scene: { file: "scene_s61_tourisme.jpg", mode: "document", legende: "Document : à Morondava, cousine Volana guide les visiteurs vers l'allée des baobabs au coucher du soleil." },
  revisionOuverture: [
    ["Cite les trois grandes familles d'industrie de Madagascar.", "L'agroalimentaire, la textile et la minière."],
    ["Qu'apporte l'industrie au pays ?", "Des emplois salariés et des devises par les exportations."],
  ],
  miseEnSituation: {
    texte: "Chez cousine Volana, à Morondava. Le soir, sur la piste de terre rouge, Volana conduit un petit groupe de visiteurs vers l'allée des baobabs. Les géants se découpent contre le soleil couchant ; les appareils photo cliquent. « Je suis devenue guide, fierté de Volana. Avant, je vendais des beignets ; maintenant, je fais visiter mon pays. Ces visiteurs dorment à l'hôtel, mangent au restaurant, achètent des sculptures : tout ce qu'ils dépensent fait vivre la ville. Et l'argent qu'ils changent, les devises, reste à Madagascar. »",
    question: "Quelles sont les formes du tourisme malgache, et que rapportent-elles ?",
    ra: "Trois formes : le tourisme balnéaire (plages), culturel (collines royales, traditions) et écologique (parcs, lémuriens). Il crée des emplois — guides, hôtels, restaurants — et fait entrer des devises.",
    support: "Schéma du tourisme et de ses impacts (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Le tourisme et ses impacts ». Après cette séance, vous serez capables de citer les formes du tourisme et d'expliquer ses bienfaits pour le pays.",
  observation: "Observez bien le schéma : les trois formes de tourisme, puis la chaîne des métiers — guide, hôtel, restaurant, artisan — jusqu'aux devises qui entrent au pays.",
  supportObservation: "Schéma du tourisme et de ses impacts (page Leçon)",
  analyse: [
    ["Qu'est-ce que le tourisme balnéaire ?", "Le tourisme des plages et de la mer : Nosy Be, l'île Sainte-Marie."],
    ["Qu'est-ce que le tourisme culturel ?", "La découverte des collines royales, des palais, des traditions et des fêtes."],
    ["Qu'est-ce que le tourisme écologique ?", "La visite des parcs naturels pour voir lémuriens, caméléons et orchidées, sans les déranger."],
    ["Cite trois métiers créés par le tourisme.", "Guide, réceptionniste d'hôtel, serveur de restaurant (aussi chauffeur, artisan)."],
    ["Qu'est-ce qu'une devise ?", "C'est l'argent étranger qui entre au pays quand les visiteurs changent leurs billets."],
    ["Pourquoi protéger la nature pour les visiteurs ?", "Parce que ce sont les lémuriens et les baobabs qui les attirent : sans nature préservée, pas de tourisme écologique."],
  ],
  synthese: "Donc, le tourisme malgache est balnéaire, culturel et écologique. Il crée des emplois — guides, hôtels, restaurants, artisans — et fait entrer des devises. Mais il ne dure que si la nature et la culture restent belles : le tourisme protège ce qui le fait vivre.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Cite les trois formes de tourisme de Madagascar.",
        "2. Qu'est-ce que le tourisme écologique ?",
        "3. Cite trois métiers créés par le tourisme.",
        "4. Qu'est-ce qu'une devise ?",
      ],
      corrige: [
        "1. Le tourisme **balnéaire**, **culturel** et **écologique**.",
        "2. C'est **la visite des parcs naturels** pour observer la faune et la flore sans les déranger.",
        "3. Par exemple : **guide, réceptionniste, serveur** (aussi chauffeur, artisan).",
        "4. C'est **l'argent étranger** qui entre au pays quand les visiteurs changent leurs billets.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Nosy Be attire le tourisme balnéaire.",
        "2. Le tourisme ne crée aucun emploi.",
        "3. Les visiteurs viennent surtout voir la nature malgache.",
        "4. Les devises sortent du pays avec les visiteurs.",
      ],
      corrige: [
        "1. **Vrai** : plages et mer chaude.",
        "2. **Faux** : guides, hôtels, restaurants, transports, artisanat.",
        "3. **Vrai** : lémuriens, baobabs, parcs.",
        "4. **Faux** : elles entrent au pays et y restent dépensées.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : balnéaire — écologique — emplois — devises.",
      items: [
        "Le tourisme des plages est le tourisme ……… .",
        "La visite des parcs à lémuriens est le tourisme ……… .",
        "Le tourisme crée des ……… dans les hôtels et les restaurants.",
        "L'argent étranger qui entre au pays s'appelle les ……… .",
      ],
      corrige: [
        "tourisme **balnéaire** / tourisme **écologique** / des **emplois** / les **devises**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le tourisme écologique se pratique : A. dans les parcs — B. dans les usines — C. dans les mines",
        "2. Volana est devenue : A. guide — B. aviatrice — C. banquière",
        "3. L'allée des baobabs se trouve près de : A. Morondava — B. Paris — C. la lune",
        "4. Les visiteurs font vivre : A. les hôtels et les artisans — B. personne — C. les poissons",
        "5. Pour que le tourisme dure, il faut : A. protéger la nature — B. tout vendre — C. couper les baobabs",
      ],
      corrige: [
        "1. Réponse **A** : faune et flore sans dérangement.",
        "2. Réponse **A** : elle fait visiter son pays.",
        "3. Réponse **A** : sur la côte ouest.",
        "4. Réponse **A** : et les restaurants, les chauffeurs, les guides.",
        "5. Réponse **A** : c'est elle qui attire les visiteurs.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Trois façons de visiter",
        paras: [
          "Le tourisme balnéaire cherche le soleil et les plages : Nosy Be, l'île Sainte-Marie, les lagons turquoise.",
          "Le tourisme culturel découvre l'histoire et les traditions : collines royales, palais, fêtes, artisanat. Le tourisme écologique, enfin, entre dans les parcs pour observer lémuriens, caméléons, orchidées et baobabs — sans les déranger.",
        ],
        exemples: [
          "L'allée des baobabs de Morondava au coucher du soleil.",
          "Les visiteurs de la forêt d'Andasibe écoutent le chant de l'indri, silencieux, la tête levée.",
        ],
      },
      {
        titre: "2. Une chaîne de métiers",
        paras: [
          "Chaque visiteur fait vivre une chaîne entière : l'hôtelier qui l'héberge, le restaurateur qui le nourrit, le chauffeur qui le conduit, le guide qui lui raconte, l'artisan qui lui vend ses souvenirs.",
          "Volana est devenue guide : le tourisme a transformé la vendeuse de beignets en ambassadrice de son pays.",
        ],
        exemples: [
          "Les appareils photo cliquent devant les géants de l'allée.",
          "L'hôtel de Morondava embauche des cuisiniers, des gardiens, des blanchisseurs.",
        ],
      },
      {
        titre: "3. Des devises — et une condition",
        paras: [
          "L'argent étranger que les visiteurs changent s'appelle les devises : elles entrent au pays et y restent dépensées. Le tourisme est ainsi l'une des grandes sources de devises de Madagascar.",
          "Mais le tourisme n'est éternel que si sa richesse reste : des lémuriens vivants, des forêts debout, des traditions respectées, des plages propres. Protéger la nature, c'est protéger les emplois du tourisme.",
        ],
        exemples: [
          "Le parc d'Andasibe finance des écoles pour les villages voisins grâce aux billets d'entrée.",
          "Les guides de Morondava plantent des baobabs avec les enfants du quartier.",
        ],
      },
    ],
  },
  motsCles: ["tourisme balnéaire", "tourisme culturel", "tourisme écologique", "emplois", "devises"],
  questionsRevision: [
    ["Cite les trois formes de tourisme.", "Balnéaire, culturel et écologique."],
    ["Quels sont les deux grands apports du tourisme au pays ?", "Des emplois et des devises."],
  ],
};

const S62 = {
  numero: 62, total: TOTAL,
  titre: "Le commerce intérieur et le commerce extérieur",
  theme: "Les grandes zones économiques et les activités économiques",
  objectif: "Être capable de distinguer le commerce intérieur du commerce extérieur et de décrire les caractéristiques du commerce malgache.",
  image: { id: "geo6_commerce", legende: "Le marché du quartier et le port de Toamasina : le commerce dedans, le commerce dehors." },
  scene: { file: "scene_s62_commerce.jpg", mode: "document", legende: "Document : au port de Toamasina, les conteneurs s'entassent : les uns remplis de vanille et de crevettes vers l'extérieur, les autres de machines et de fournitures vers l'intérieur." },
  revisionOuverture: [
    ["Cite les trois formes de tourisme.", "Balnéaire, culturel et écologique."],
    ["Quels sont les deux grands apports du tourisme au pays ?", "Des emplois et des devises."],
  ],
  miseEnSituation: {
    texte: "Deux scènes dans la même journée. Le matin, le marché Asabotsy : maman Rasoa vend ses légumes aux familles du quartier, en argent malgache, la main à la main. Le soir, au port de Toamasina chez Tojo, les grues soulèvent des conteneurs : à l'extérieur, la vanille de la SAVA, les crevettes congelées, les vêtements des zones franches ; à l'intérieur, les machines, les médicaments, le pétrole. « Le matin, c'est le commerce intérieur, résume papa : on vend chez nous, à nous. Ici, c'est l'extérieur : on vend aux pays lointains et on achète ce qu'on ne fabrique pas. »",
    question: "Quelle différence entre commerce intérieur et extérieur, et que commerce Madagascar ?",
    ra: "Le commerce intérieur se fait à l'intérieur du pays (marchés, boutiques). Le commerce extérieur se fait avec les pays lointains : Madagascar exporte vanille, girofle, crevettes, textile, nickel ; il importe pétrole, machines et produits fabriqués.",
    support: "Schéma du commerce (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Le commerce intérieur et le commerce extérieur ». Après cette séance, vous serez capables de distinguer les deux et de citer les exportations et importations de Madagascar.",
  observation: "Observez bien le schéma : le marché du quartier (commerce intérieur) et le navire entre deux quais — exportations d'un côté, importations de l'autre.",
  supportObservation: "Schéma du commerce (page Leçon)",
  analyse: [
    ["Qu'est-ce que le commerce intérieur ?", "C'est le commerce à l'intérieur du pays : marchés, boutiques, entre villes et campagnes."],
    ["Qu'est-ce que le commerce extérieur ?", "C'est le commerce avec les pays lointains : exportations et importations."],
    ["Que vend Madagascar aux pays lointains ?", "La vanille, le girofle, le litchi, les crevettes, les vêtements, le nickel (exportations)."],
    ["Qu'achète-t-il à l'étranger ?", "Le pétrole, les machines, les véhicules, les médicaments (importations)."],
    ["Où passe le commerce entre régions ?", "Par les routes et les taxis-brousse : les produits voyagent du champ au marché."],
    ["Quelle est la faiblesse du commerce malgache ?", "Il vend des produits bruts peu transformés et achète des produits fabriqués qui coûtent cher."],
  ],
  synthese: "Donc, le commerce intérieur fait circuler les richesses à l'intérieur du pays ; le commerce extérieur exporte vanille, crevettes, textile et nickel, et importe pétrole, machines et produits fabriqués. La force de demain : transformer sur place ce que l'on vend.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que le commerce intérieur ?",
        "2. Qu'est-ce qu'une exportation ?",
        "3. Cite trois exportations de Madagascar.",
        "4. Cite deux importations.",
      ],
      corrige: [
        "1. C'est **le commerce à l'intérieur du pays** : marchés, boutiques, échanges entre régions.",
        "2. C'est **un produit vendu aux pays lointains**.",
        "3. Par exemple : **la vanille, les crevettes et le nickel** (aussi le girofle, les vêtements).",
        "4. Par exemple : **le pétrole et les machines** (aussi les médicaments, les véhicules).",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le marché Asabotsy est un lieu de commerce intérieur.",
        "2. Madagascar exporte du pétrole.",
        "3. Les crevettes congelées partent vers les pays lointains.",
        "4. Acheter des machines à l'étranger, c'est exporter.",
      ],
      corrige: [
        "1. **Vrai** : on vend et on achète dans le pays.",
        "2. **Faux** : il en importe, il n'en produit pas assez.",
        "3. **Vrai** : ce sont des exportations.",
        "4. **Faux** : c'est importer.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : intérieur — extérieur — exportations — importations.",
      items: [
        "Le commerce du marché du quartier est le commerce ……… .",
        "Le commerce avec les pays lointains est le commerce ……… .",
        "La vanille vendue à l'étranger fait partie des ……… .",
        "Le pétrole acheté à l'étranger fait partie des ……… .",
      ],
      corrige: [
        "commerce **intérieur** / commerce **extérieur** / des **exportations** / des **importations**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Une exportation, c'est : A. vendre dehors — B. acheter dehors — C. dormir",
        "2. Une importation, c'est : A. vendre chez nous — B. acheter dehors — C. semer",
        "3. Madagascar exporte surtout : A. des produits agricoles et marins — B. de la neige — C. des riens",
        "4. Les conteneurs du port contiennent : A. des marchandises — B. de l'eau de mer — C. des lémuriens",
        "5. Pour gagner plus, il faut : A. transformer sur place — B. vendre brut — C. tout importer",
      ],
      corrige: [
        "1. Réponse **A** : vendre aux pays lointains.",
        "2. Réponse **B** : acheter ce qu'on ne fabrique pas.",
        "3. Réponse **A** : vanille, girofle, crevettes, plus textile et nickel.",
        "4. Réponse **A** : exportations et importations.",
        "5. Réponse **A** : le produit transformé vaut plus cher.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Le commerce dedans",
        paras: [
          "Le commerce intérieur fait vivre le pays au quotidien : les marchés des villes et des villages, les boutiques, les taxis-brousse chargés de marchandises.",
          "Les produits voyagent du champ au marché, du port de pêche à l'étal, de l'atelier à la boutique : c'est le grand tour de la richesse nationale, en argent malgache.",
        ],
        exemples: [
          "Maman Rasoa vend ses légumes aux familles du quartier, la main à la main.",
          "Les camions de brèdes descendent chaque nuit vers la ville.",
        ],
      },
      {
        titre: "2. Le commerce dehors",
        paras: [
          "Le commerce extérieur traverse les mers. Les exportations malgaches : vanille, girofle, litchis, café, crevettes et langoustes, vêtements des zones franches, nickel et autres minerais.",
          "Les importations rapportent ce que le pays ne fabrique pas : pétrole, machines, véhicules, médicaments. Tout passe surtout par le grand port de Toamasina.",
        ],
        exemples: [
          "Les conteneurs de vanille de la SAVA attendent le navire sur le quai.",
          "Les camions-citernes de pétrole sortent du port vers l'intérieur.",
        ],
      },
      {
        titre: "3. Caractéristiques et défi",
        paras: [
          "Le commerce malgache a sa faiblesse : il vend surtout des produits bruts — plantes, poissons, minerais — et achète des produits fabriqués qui coûtent cher.",
          "Le défi de demain est de transformer sur place : la vanille en parfum, le coton en tissu, le nickel en pièces. Le produit transformé vaut plus cher que la matière brute : c'est ainsi que le commerce enrichira le pays.",
        ],
        exemples: [
          "Un kilo de gousses de vanille vaut moins qu'un flacon de parfum fini.",
          "Les zones franches montrent la voie : le tissu malgache part déjà cousu en vêtements.",
        ],
      },
    ],
  },
  motsCles: ["commerce intérieur", "commerce extérieur", "exportation", "importation", "transformation"],
  questionsRevision: [
    ["Quelle différence entre commerce intérieur et extérieur ?", "L'intérieur se fait dans le pays (marchés) ; l'extérieur avec les pays lointains (exportations, importations)."],
    ["Cite deux exportations et deux importations.", "Exportations : vanille, crevettes. Importations : pétrole, machines."],
  ],
};

const S63 = {
  numero: 63, total: TOTAL,
  titre: "Le transport et les voies de communication",
  theme: "Les grandes zones économiques et les activités économiques",
  objectif: "Être capable de citer les types de transport et les voies de communication de Madagascar et d'expliquer leur importance.",
  image: { id: "geo6_transport", legende: "Route, rail, mer, air : les quatre chemins du désenclavement." },
  scene: { file: "scene_s63_transport.jpg", mode: "document", legende: "Document : papa vérifie son taxi-brousse avant le départ ; au fond, le train Antananarivo-Toamasina croise un avion qui décolle." },
  revisionOuverture: [
    ["Quelle différence entre commerce intérieur et extérieur ?", "L'intérieur se fait dans le pays (marchés) ; l'extérieur avec les pays lointains (exportations, importations)."],
    ["Cite deux exportations et deux importations.", "Exportations : vanille, crevettes. Importations : pétrole, machines."],
  ],
  miseEnSituation: {
    texte: "Cinq heures du matin. Papa vérifie l'huile, les pneus, la charge du taxi-brousse : aujourd'hui, cap sur Toamasina. « Notre route suit la voie ferrée, explique-t-il aux jumeaux. Le train de marchandises ramène les conteneurs du port jusqu'à la capitale. Nous, on porte les voyageurs et les sacs. Et là-haut ?» — un avion traverse le ciel — « lui, il porte les visiteurs et les colis pressés. Route, rail, mer, air : sans les quatre, le pays s'arrête. Une région sans route est un grenier sans porte. »",
    question: "Quels transports font circuler Madagascar, et pourquoi sont-ils vitaux ?",
    ra: "La route (taxis-brousse, camions), le rail (Antananarivo-Toamasina), la mer (port de Toamasina) et l'air (avions). Sans voies de communication, les produits ne bougent pas : une région sans route est un grenier sans porte.",
    support: "Schéma des transports et voies de communication (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Le transport et les voies de communication ». Après cette séance, vous serez capables de citer les types de transport, de décrire les voies et d'expliquer leur importance.",
  observation: "Observez bien le schéma : la route qui serpente, le rail qui coupe la montagne, le port et ses navires, l'avion dans le ciel.",
  supportObservation: "Schéma des transports et voies de communication (page Leçon)",
  analyse: [
    ["Cite les quatre types de transport.", "La route, le rail, la mer (et les rivières), l'air."],
    ["Que porte la route ?", "Les taxis-brousse et les camions : voyageurs, sacs, marchandises de tous les jours."],
    ["Que porte la voie ferrée ?", "Le train de marchandises, entre Toamasina et Antananarivo surtout."],
    ["Quel est le grand port de Madagascar ?", "Toamasina, porte d'entrée et de sortie du commerce extérieur."],
    ["Que porte l'avion ?", "Les visiteurs pressés et les colis légers et chers."],
    ["Pourquoi dit-on « une région sans route est un grenier sans porte » ?", "Parce que sans route, les récoltes ne sortent pas et les marchandises n'entrent pas : la région reste enfermée."],
  ],
  synthese: "Donc, Madagascar circule par la route, le rail, la mer et l'air. Ces voies de communication désenclavent les régions : elles font sortir les récoltes et entrer les marchandises. Sans elles, pas de commerce, pas de développement.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Cite les quatre types de transport.",
        "2. Que porte le train de marchandises ?",
        "3. Quel est le grand port du pays, et que fait-il ?",
        "4. Pourquoi une route est-elle vitale pour un village ?",
      ],
      corrige: [
        "1. **La route, le rail, la mer et l'air**.",
        "2. **Les conteneurs et les marchandises lourdes**, surtout entre Toamasina et Antananarivo.",
        "3. **Toamasina** : porte d'entrée et de sortie du commerce extérieur.",
        "4. Parce qu'elle fait **sortir ses récoltes et entrer ses marchandises** : sans elle, il est enfermé.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le taxi-brousse est un transport routier.",
        "2. L'avion porte les marchandises lourdes.",
        "3. Le port de Toamasina sert au commerce extérieur.",
        "4. Une région enclavée commerce facilement.",
      ],
      corrige: [
        "1. **Vrai** : c'est le roi de la route malgache.",
        "2. **Faux** : il porte les visiteurs et les colis légers ; les lourds vont par mer et rail.",
        "3. **Vrai** : conteneurs à l'entrée et à la sortie.",
        "4. **Faux** : sans route, elle reste enfermée, grenier sans porte.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : route — rail — mer — air.",
      items: [
        "Le taxi-brousse voyage sur la ……… .",
        "Le train de marchandises suit la voie du ……… .",
        "Les navires du commerce extérieur naviguent sur la ……… .",
        "L'avion traverse l'……… .",
      ],
      corrige: [
        "la **route** / le **rail** / la **mer** / l'**air**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le grand port de Madagascar est : A. Toamasina — B. un lac — C. un volcan",
        "2. La voie ferrée relie surtout : A. Toamasina et Antananarivo — B. la lune et Mars — C. deux arbres",
        "3. Une voie de communication sert : A. à circuler et échanger — B. à dormir — C. à rien",
        "4. Une région sans route est : A. un grenier sans porte — B. un paradis — C. riche",
        "5. Les visiteurs pressés voyagent : A. en avion — B. à la nage — C. en pirogue",
      ],
      corrige: [
        "1. Réponse **A** : porte du commerce extérieur.",
        "2. Réponse **A** : le train ramène les conteneurs du port.",
        "3. Réponse **A** : routes, rails, ports, aéroports.",
        "4. Réponse **A** : ses récoltes ne sortent pas.",
        "5. Réponse **A** : l'avion porte les pressés et les colis chers.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Le roi de la route",
        paras: [
          "La route est la première voie de communication de Madagascar : taxis-brousse pour les voyageurs, camions pour les marchandises, voitures et zébus-cabas pour tout le reste.",
          "Mais la route se bat : pistes coupées en saison des pluies, ponts emportés, nids-de-poule. Entretenir les routes est un travail de chaque jour — c'est le désenclavement du pays.",
        ],
        exemples: [
          "Papa vérifie huile, pneus et charge avant le grand départ pour Toamasina.",
          "Le taxi-brousse partage la piste avec les charrettes à zébus.",
        ],
      },
      {
        titre: "2. Le rail, la mer et l'air",
        paras: [
          "La voie ferrée relie Toamasina à Antananarivo : le train de marchandises ramène les conteneurs du port vers la capitale, à travers les montagnes.",
          "La mer porte le grand commerce : le port de Toamasina voit entrer et sortir les navires du monde entier. Et l'air, par les avions, apporte les visiteurs pressés et les colis légers et chers.",
        ],
        exemples: [
          "Le train croise la route dans la vallée de la Mangoro.",
          "Les grues du port soulèvent les conteneurs du matin au soir.",
        ],
      },
      {
        titre: "3. Desenclaver pour développer",
        paras: [
          "Les voies de communication sont les artères du pays : elles font circuler les produits, les personnes et les idées.",
          "Une région enclavée ne peut ni vendre ses récoltes ni recevoir ses fournitures : elle reste pauvre malgré ses richesses. Désenclaver — routes, ponts, ports — c'est ouvrir le grenier et laisser entrer le développement.",
        ],
        exemples: [
          "Depuis que la piste du village est praticable, les sacs de riz partent au marché toute l'année.",
          "« Une région sans route est un grenier sans porte », répète papa en démarrant.",
        ],
      },
    ],
  },
  motsCles: ["transport", "voie de communication", "route", "rail", "désenclavement"],
  questionsRevision: [
    ["Cite les quatre types de transport.", "La route, le rail, la mer et l'air."],
    ["Pourquoi les voies de communication sont-elles vitales ?", "Sans elles, les récoltes ne sortent pas et les marchandises n'entrent pas : pas de commerce, pas de développement."],
  ],
};

const S64 = {
  numero: 64, total: TOTAL,
  titre: "La nouvelle technologie et l'intelligence artificielle",
  theme: "Les grandes zones économiques et les activités économiques",
  objectif: "Être capable de citer les outils de la nouvelle technologie, de donner des exemples d'intelligence artificielle et d'en discuter les avantages et les inconvénients.",
  image: { id: "geo6_nouvelle_technologie", legende: "Téléphone, ordinateur, Internet, robot — et l'intelligence artificielle qui apprend." },
  scene: { file: "scene_s64_technologie.jpg", mode: "document", legende: "Document : au foyer? Non : à la maison, Miora parle avec cousin Tojo sur le téléphone ; l'écran traduit ses mots en anglais pour l'ami étranger du cousin." },
  revisionOuverture: [
    ["Cite les quatre types de transport.", "La route, le rail, la mer et l'air."],
    ["Pourquoi les voies de communication sont-elles vitales ?", "Sans elles, les récoltes ne sortent pas et les marchandises n'entrent pas : pas de commerce, pas de développement."],
  ],
  miseEnSituation: {
    texte: "Soirée à la maison. Miora tient le téléphone de maman : à l'écran, cousin Tojo sourit depuis Toamasina — l'image voyage par Internet, en un clin d'œil, malgré les cinq cents kilomètres. À côté, Hery dicte son devoir à l'ordinateur de papa, qui tape les mots tout seul. Et l'application traduit la phrase en anglais pour l'ami étranger de Tojo. « Cet ordinateur ne comprend pas ce qu'il écrit, précise papa. Mais d'autres machines apprennent : elles reconnaissent les visages, répondent aux questions, conduisent des voitures. On appelle ça l'intelligence artificielle. Un outil merveilleux — à condition de rester le maître. »",
    question: "Que peut-on faire avec les nouvelles technologies, et que faut-il en penser ?",
    ra: "Téléphone, ordinateur, Internet et robot changent la vie : parler loin, apprendre, traduire, calculer. L'intelligence artificielle apprend des exemples et aide l'homme. Mais elle a des inconvénients : coût, dépendance, emplois remplacés, erreurs — l'homme doit rester le maître de l'outil.",
    support: "Schéma de la nouvelle technologie (page Leçon)",
  },
  presentation: "Aujourd'hui, nous terminons les leçons de l'unité 5 avec : « La nouvelle technologie et l'intelligence artificielle ». Après cette séance, vous serez capables de citer ces outils, de donner des exemples d'intelligence artificielle et d'en dire les avantages et les inconvénients.",
  observation: "Observez bien le schéma : les quatre outils — téléphone, ordinateur, Internet, robot — et la balance des avantages et des inconvénients.",
  supportObservation: "Schéma de la nouvelle technologie (page Leçon)",
  analyse: [
    ["Cite quatre outils de la nouvelle technologie.", "Le téléphone, l'ordinateur, Internet et le robot."],
    ["Que permet le téléphone portable ?", "Parler et voir des personnes très loin, envoyer des messages, payer certains achats."],
    ["Qu'est-ce qu'Internet ?", "C'est le grand réseau qui relie les ordinateurs du monde : on y apprend, on y vend, on y parle."],
    ["Qu'est-ce qu'un robot ?", "Une machine qui exécute des tâches à la place de l'homme, souvent dans les usines."],
    ["Qu'est-ce que l'intelligence artificielle ?", "Des machines qui apprennent à partir d'exemples : traduire, reconnaître, répondre, conseiller."],
    ["Cite un inconvénient de ces technologies.", "Le coût, la dépendance, certains emplois remplacés, les erreurs et les fausses nouvelles."],
  ],
  synthese: "Donc, téléphone, ordinateur, Internet et robot transforment le travail et la vie. L'intelligence artificielle apprend et aide l'homme — traduire, soigner, conseiller. Mais elle coûte cher, rend dépendant et remplace des emplois : l'homme doit rester le maître de l'outil.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Cite quatre outils de la nouvelle technologie.",
        "2. Qu'est-ce qu'Internet ?",
        "3. Que fait un robot dans une usine ?",
        "4. Cite deux avantages de l'intelligence artificielle.",
      ],
      corrige: [
        "1. **Le téléphone, l'ordinateur, Internet et le robot**.",
        "2. C'est **le grand réseau qui relie les ordinateurs du monde** : apprendre, vendre, parler.",
        "3. Il **exécute des tâches à la place de l'homme** : souder, peindre, emballer.",
        "4. Par exemple : **traduire une langue** et **aider les médecins à lire les images du corps** (aussi conseiller les paysans).",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Internet relie les ordinateurs du monde entier.",
        "2. L'intelligence artificielle ne fait jamais d'erreur.",
        "3. Le téléphone permet de voir un cousin à cinq cents kilomètres.",
        "4. Certaines machines remplacent des travailleurs.",
      ],
      corrige: [
        "1. **Vrai** : c'est le grand réseau.",
        "2. **Faux** : elle apprend, donc elle se trompe aussi — l'homme doit vérifier.",
        "3. **Vrai** : l'image voyage par Internet.",
        "4. **Vrai** : c'est l'un des inconvénients.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : Internet — robot — apprend — maître.",
      items: [
        "Le grand réseau qui relie les ordinateurs s'appelle l'……… .",
        "La machine qui travaille à la place de l'homme est le ……… .",
        "L'intelligence artificielle ……… à partir d'exemples.",
        "Devant ces outils, l'homme doit rester le ……… .",
      ],
      corrige: [
        "l'**Internet** / le **robot** / **apprend** / le **maître**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Miora voit Tojo grâce : A. au téléphone et à Internet — B. à la poste — C. aux tambours",
        "2. Un robot sert : A. à exécuter des tâches — B. à chanter — C. à pousser",
        "3. L'intelligence artificielle peut : A. traduire une langue — B. faire pousser la pluie — C. voler sans ailes",
        "4. Un inconvénient des nouvelles technologies : A. la dépendance — B. le riz — C. le sommeil",
        "5. La bonne attitude devant ces outils : A. rester le maître et vérifier — B. tout croire — C. tout jeter",
      ],
      corrige: [
        "1. Réponse **A** : l'image voyage en un clin d'œil.",
        "2. Réponse **A** : souvent dans les usines.",
        "3. Réponse **A** : et reconnaître, conseiller, aider les médecins.",
        "4. Réponse **A** : aussi le coût et les emplois remplacés.",
        "5. Réponse **A** : l'homme garde la tête et le jugement.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Des outils qui changent la vie",
        paras: [
          "Le téléphone portable met le monde dans la poche : appeler, écrire, voir, payer — même dans les villages où la banque la plus proche est à une journée de route.",
          "L'ordinateur écrit, calcule et dessine ; Internet relie tout ce qui compte : on y apprend, on y vend, on y parle d'un bout du monde à l'autre. Le robot, enfin, travaille dans les usines : souder, peindre, emballer, sans jamais se fatiguer.",
        ],
        exemples: [
          "À l'écran, Tojo sourit depuis Toamasina, à cinq cents kilomètres.",
          "Le marché d'Antsirabe se commande parfois par téléphone avant même l'aube.",
        ],
      },
      {
        titre: "2. L'intelligence artificielle au quotidien",
        paras: [
          "L'intelligence artificielle, c'est la machine qui apprend à partir d'exemples, comme l'élève à partir d'exercices.",
          "Elle traduit les langues, reconnaît les visages et les maladies sur les images, répond aux questions, conseille les paysans sur les semis, oriente les visiteurs vers les hôtels. De plus en plus, elle travaille dans les hôpitaux, les écoles et les champs de Madagascar.",
        ],
        exemples: [
          "L'application traduit la phrase de Miora en anglais en une seconde.",
          "Des programmes aident les médecins à lire les radiographies.",
        ],
      },
      {
        titre: "3. Une balance à garder droite",
        paras: [
          "Les avantages sont immenses : parler loin, apprendre vite, soigner mieux, produire plus.",
          "Les inconvénients existent aussi : les outils coûtent cher, rendent dépendants, remplacent certains emplois, et l'intelligence artificielle se trompe parfois — les fausses nouvelles courent vite. La règle : l'homme reste le maître de l'outil, la tête et le jugement. La machine aide, l'homme décide.",
        ],
        exemples: [
          "Hery dicte son devoir, mais c'est lui qui réfléchit les phrases.",
          "La classe apprend à vérifier une information avant de la croire.",
        ],
      },
    ],
  },
  motsCles: ["nouvelle technologie", "téléphone", "Internet", "robot", "intelligence artificielle"],
  questionsRevision: [
    ["Cite quatre outils de la nouvelle technologie.", "Le téléphone, l'ordinateur, Internet et le robot."],
    ["Qu'est-ce que l'intelligence artificielle ? Donne un exemple.", "Une machine qui apprend à partir d'exemples ; par exemple, traduire une langue ou aider à lire une radiographie."],
  ],
};

module.exports = { topics: [S58, S59, S60, S61, S62, S63, S64] };

