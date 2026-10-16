// data-unite6b.js — UNITÉ 6 : LE VILLAGE ÉCOLOGIQUE (Séances 72 à 76)
// Contenu rédactionnel conforme au Programme d'études officiel T6 — Géographie (p. 165, 181)
const TOTAL = 78;

const S72 = {
  numero: 72, total: TOTAL,
  titre: "Les structures : l'habitation et l'architecture",
  theme: "Le village écologique",
  objectif: "Être capable de décrire l'habitation du village écologique et l'architecture qui respecte le milieu.",
  image: { id: "geo6_habitation_architecture", legende: "Brique, bois, paille et soleil : construire avec le pays, contre le vent." },
  scene: { file: "scene_s72_habitation.jpg", mode: "document", legende: "Document : la nouvelle maison du village : murs de brique cuite, large toit débordant, fenêtres croisées pour l'air, véranda côté soleil." },
  revisionOuverture: [
    ["Cite trois activités économiques du village écologique.", "Agriculture propre, pisciculture, artisanat de raphia (aussi transformation, solaire, écotourisme)."],
    ["Quelle est la règle commune à toutes ces activités ?", "Produire aujourd'hui sans épuiser les ressources de demain."],
  ],
  miseEnSituation: {
    texte: "La famille de la veuve Ravao fait construire sa nouvelle maison. Sur le chantier, l'artisan explique ses choix : « Des murs en brique cuite de la briqueterie du village, qui gardent la fraîcheur le jour et la chaleur la nuit. Un large toit à deux pentes, qui dépasse de tous les côtés : la pluie glisse loin des murs. Des fenêtres en face à face : l'air traverse, la maison respire. La véranda regarde le soleil levant : on y travaille sans chaud du midi. Et la cuisine, séparée, avec sa cheminée : la fumée sort au lieu de piquer les yeux. »",
    question: "Comment construire une maison qui respecte le milieu et le climat ?",
    ra: "Avec les matériaux du pays (brique, bois, paille), une architecture adaptée au climat : toit débordant contre la pluie, fenêtres croisées pour l'air, cuisine séparée avec cheminée, vérandas côté soleil.",
    support: "Schéma de l'habitation écologique (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les structures : l'habitation et l'architecture ». Après cette séance, vous serez capables de décrire une maison bien construite et d'expliquer chaque choix de l'artisan.",
  observation: "Observez bien le schéma : la maison et ses parties — toit débordant, fenêtres en face à face, véranda, cuisine séparée — avec la flèche du vent et celle du soleil.",
  supportObservation: "Schéma de l'habitation écologique (page Leçon)",
  analyse: [
    ["De quoi sont faits les murs ?", "En brique cuite de la briqueterie locale : solide, fraîche le jour, chaude la nuit."],
    ["Pourquoi le toit déborde-t-il de tous les côtés ?", "Pour que la pluie glisse loin des murs et les protège."],
    ["Pourquoi des fenêtres en face à face ?", "Pour que l'air traverse la maison : elle respire et reste saine."],
    ["À quoi sert la véranda côté soleil levant ?", "À travailler à l'abri, sans le chaud du midi."],
    ["Pourquoi la cuisine est-elle séparée ?", "Pour que la fumée et les odeurs sortent par la cheminée, sans envahir les chambres."],
    ["Qu'est-ce qu'une bonne architecture ?", "Une construction adaptée au climat et au site, avec les matériaux du pays, qui dure longtemps."],
  ],
  synthese: "Donc, l'habitation du village écologique s'appuie sur l'architecture locale : matériaux du pays, toit débordant, fenêtres croisées, cuisine séparée, vérandas au bon soleil. Une maison bien pensée dure des générations et coûte moins cher à ses habitants.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Avec quoi construit-on les murs au village ?",
        "2. Pourquoi le toit doit-il déborder ?",
        "3. À quoi servent les fenêtres en face à face ?",
        "4. Pourquoi séparer la cuisine ?",
      ],
      corrige: [
        "1. **Avec la brique cuite de la briqueterie locale** (et le bois, la paille du pays).",
        "2. Pour que **la pluie glisse loin des murs** et les protège.",
        "3. À faire **traverser l'air** : la maison respire.",
        "4. Pour que **la fumée sorte par la cheminée**, sans envahir les chambres.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. La brique cuite garde la fraîcheur le jour.",
        "2. Une maison sans fenêtres respire mieux.",
        "3. Le toit à deux pentes évacue la pluie.",
        "4. La véranda sert à travailler à l'abri.",
      ],
      corrige: [
        "1. **Vrai** : et la chaleur la nuit.",
        "2. **Faux** : sans fenêtres, l'air meurt et les maladies viennent.",
        "3. **Vrai** : l'eau glisse des deux côtés.",
        "4. **Vrai** : au soleil levant, sans le chaud du midi.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : brique — déborde — traverse — cheminée.",
      items: [
        "Les murs se construisent en ……… cuite du pays.",
        "Le toit ……… de tous les côtés pour protéger les murs.",
        "L'air ……… la maison par les fenêtres en face à face.",
        "La fumée de la cuisine sort par la ……… .",
      ],
      corrige: [
        "en **brique** / **déborde** / **traverse** / la **cheminée**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. L'architecture, c'est : A. l'art de construire — B. l'art de chanter — C. l'art de fuir",
        "2. La brique vient : A. de la briqueterie du village — B. de la lune — C. de la mer",
        "3. Les fenêtres en face à face font : A. traverser l'air — B. entrer la pluie — C. fuir les mouches",
        "4. Le toit débordant protège : A. les murs — B. les nuages — C. la lune",
        "5. Une maison bien construite dure : A. des générations — B. un jour — C. une nuit",
      ],
      corrige: [
        "1. Réponse **A** : penser la maison avant de la bâtir.",
        "2. Réponse **A** : matériaux du pays.",
        "3. Réponse **A** : la maison respire.",
        "4. Réponse **A** : la pluie glisse loin.",
        "5. Réponse **A** : et coûte moins cher à ses habitants.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Les matériaux du pays",
        paras: [
          "La maison du village parle le langage de son pays : brique cuite des briqueteries, bois des forêts gérées, paille des toits, pierre des carrières proches, lamba des cloisons.",
          "Ces matériaux locaux coûtent moins cher, supportent le climat et font travailler les artisans du coin. C'est la première règle de l'habitation écologique : construire avec ce que le pays offre, sans le vider.",
        ],
        exemples: [
          "Les briques rouges montent du four du village sur des charrettes à zébu.",
          "Le bois des charpentes vient des coupes replantées de la colline.",
        ],
      },
      {
        titre: "2. Penser le climat",
        paras: [
          "La bonne architecture regarde le ciel avant de dessiner : le soleil, la pluie, le vent. Le toit à deux pentes débordantes chasse les pluies violentes ; les fenêtres en face à face laissent l'air traverser ; la véranda reçoit le soleil du matin et fuit celui du midi.",
          "La cuisine séparée, avec sa cheminée, chasse la fumée : les yeux et les poumons des mamans sont protégés. Chaque détail a sa raison : la maison travaille avec le climat, jamais contre lui.",
        ],
        exemples: [
          "Sous le toit débordant, la pluie tombe en rideau loin des murs de brique.",
          "La maison respire du matin au soir par ses fenêtres croisées.",
        ],
      },
      {
        titre: "3. La maison qui dure",
        paras: [
          "Une maison bien pensée dure des générations : elle coûte moins cher à ses habitants, résiste aux cyclones et aux saisons, et garde la santé de ceux qui l'habitent.",
          "Au village écologique, chaque nouvelle maison suit désormais ces règles, notées au bureau du fokontany. La séance suivante montrera les autres structures du village : les infrastructures et les sites naturels.",
        ],
        exemples: [
          "La maison de la veuve Ravao traversera les saisons debout.",
          "Le grand-père de Maitso a bâti sa maison ainsi : elle a cent ans et tient encore.",
        ],
      },
    ],
  },
  motsCles: ["habitation", "architecture", "matériaux locaux", "toit débordant", "ventilation"],
  questionsRevision: [
    ["Cite deux règles de l'architecture locale.", "Le toit débordant contre la pluie et les fenêtres en face à face pour l'air (aussi cuisine séparée)."],
    ["Pourquoi construire avec les matériaux du pays ?", "Ils coûtent moins cher, supportent le climat et font travailler les artisans du coin."],
  ],
};

const S73 = {
  numero: 73, total: TOTAL,
  titre: "Les infrastructures économiques et les sites naturels",
  theme: "Le village écologique",
  objectif: "Être capable de citer les infrastructures économiques du village et d'expliquer la protection des sites naturels.",
  image: { id: "geo6_infrastructures_sites", legende: "Route, marché, ateliers — et la cascade sacrée protégée : le village aménage sans abîmer." },
  scene: { file: "scene_s73_infrastructures.jpg", mode: "document", legende: "Document : au village, la nouvelle route arrive au marché couvert ; au loin, la cascade sacrée reste sauvage, entourée d'une haie et d'un panneau discret." },
  revisionOuverture: [
    ["Cite deux règles de l'architecture locale.", "Le toit débordant contre la pluie et les fenêtres en face à face pour l'air (aussi cuisine séparée)."],
    ["Pourquoi construire avec les matériaux du pays ?", "Ils coûtent moins cher, supportent le climat et font travailler les artisans du coin."],
  ],
  miseEnSituation: {
    texte: "Grande journée au village : la route goudronnée arrive enfin au marché couvert neuf, où les étals s'alignent sous une belle charpente. Derrière les ateliers de transformation, l'électricité solaire alimente le froid du dépôt. « Nos infrastructures économiques, fierté de Rakotomalala : route, marché, ateliers, dépôt. » Mais au bout du sentier, la cascade sacrée n'a pas changé : haie vive, panneau discret, silence respecté. « On aménage le village, dit la doyenne Soa, sans abîmer ses trésors. La cascade attire les visiteurs — justement parce qu'elle est restée sauvage. »",
    question: "Quelles infrastructures le village aménage-t-il, et comment protège-t-il ses sites naturels ?",
    ra: "Les infrastructures économiques — route, marché, ateliers, dépôt, énergie — font vivre et circuler les richesses. Les sites naturels — cascade, source, forêt, colline sacrée — sont protégés : on les garde sauvages, car ils font la beauté et la richesse du village.",
    support: "Schéma des infrastructures et des sites (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les infrastructures économiques et les sites naturels ». Après cette séance, vous serez capables de citer les infrastructures du village et d'expliquer la protection des sites.",
  observation: "Observez bien le schéma : d'un côté les infrastructures aménagées (route, marché, ateliers, dépôt) ; de l'autre, les sites naturels protégés par une haie et des règles.",
  supportObservation: "Schéma des infrastructures et des sites (page Leçon)",
  analyse: [
    ["Qu'est-ce qu'une infrastructure économique ?", "Un équipement qui fait vivre l'économie : route, marché, atelier, dépôt, électricité."],
    ["Pourquoi la route est-elle la première ?", "Parce qu'elle fait sortir les produits et entrer les acheteurs : sans route, pas de marché."],
    ["Que permet le marché couvert ?", "De vendre à l'abri du soleil et de la pluie, tous les jours de foire."],
    ["Que font les ateliers et le dépôt ?", "Ils transforment et conservent : la richesse reste au village au lieu de partir brute."],
    ["Qu'est-ce qu'un site naturel ?", "Un lieu que la nature a fait beau ou sacré : cascade, source, grotte, forêt, colline."],
    ["Comment le village protège-t-il ses sites ?", "Haies, sentiers balisés, règles du Dina : on visite sans salir, on admire sans abîmer.",
    ],
  ],
  synthese: "Donc, le village aménage ses infrastructures économiques — route, marché, ateliers, dépôt, énergie — pour faire circuler ses richesses. Et il protège ses sites naturels, qui attirent les visiteurs justement parce qu'ils restent sauvages : aménager sans abîmer, voilà la règle.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Cite trois infrastructures économiques du village.",
        "2. Pourquoi la route vient-elle en premier ?",
        "3. Qu'est-ce qu'un site naturel ?",
        "4. Comment protège-t-on la cascade sacrée ?",
      ],
      corrige: [
        "1. Par exemple : **la route, le marché couvert et les ateliers** (aussi le dépôt, l'énergie).",
        "2. Parce qu'elle fait **sortir les produits et entrer les acheteurs**.",
        "3. C'est **un lieu que la nature a fait beau ou sacré** : cascade, source, grotte, forêt.",
        "4. Par **une haie vive, des sentiers balisés et les règles du Dina**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le marché couvert permet de vendre à l'abri.",
        "2. Les ateliers de transformation font fuir la richesse du village.",
        "3. La cascade sacrée attire les visiteurs.",
        "4. Un site naturel se protège en le laissant sale.",
      ],
      corrige: [
        "1. **Vrai** : du soleil et de la pluie.",
        "2. **Faux** : ils gardent la valeur sur place.",
        "3. **Vrai** : parce qu'elle est restée sauvage.",
        "4. **Faux** : on visite sans salir, on admire sans abîmer.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : route — marché — sites — Dina.",
      items: [
        "La première infrastructure économique est la ……… .",
        "Les étals s'abritent dans le ……… couvert.",
        "La cascade et la source sont des ……… naturels.",
        "Les règles de protection sont écrites dans le ……… .",
      ],
      corrige: [
        "la **route** / le **marché** / des **sites** / le **Dina**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Une infrastructure économique : A. fait vivre l'économie — B. fait dormir — C. fait pleuvoir",
        "2. Le dépôt frais du village sert : A. à conserver — B. à danser — C. à voler",
        "3. Un site naturel protégé attire : A. des visiteurs — B. des camions — C. personne",
        "4. La protection des sites s'écrit dans : A. le Dina — B. le ciel — C. l'eau",
        "5. Aménager sans abîmer, c'est : A. la règle du village écologique — B. impossible — C. une mode",
      ],
      corrige: [
        "1. Réponse **A** : route, marché, ateliers, dépôt.",
        "2. Réponse **A** : le froid solaire garde les produits.",
        "3. Réponse **A** : l'écotourisme paie le village.",
        "4. Réponse **A** : et sur les panneaux discrets.",
        "5. Réponse **A** : les trésors restent pour les enfants.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Faire circuler les richesses",
        paras: [
          "Les infrastructures économiques sont les équipements qui font vivre et circuler la richesse : la route d'abord, qui relie le village au monde ; le marché couvert ensuite, où tout se vend et s'achète.",
          "Les ateliers de transformation et le dépôt frais gardent la valeur sur place : le gingembre séché, le riz décortiqué, le poisson de l'étang partent prêts, et l'argent revient au village.",
        ],
        exemples: [
          "La route goudronnée arrive enfin au marché couvert neuf.",
          "Le froid du dépôt, alimenté par le solaire, conserve poissons et légumes.",
        ],
      },
      {
        titre: "2. Les trésors du village",
        paras: [
          "Le village a aussi des trésors qu'aucun chantier ne remplacera : la cascade sacrée, la source claire, la grotte aux chauves-souris, la colline des ancêtres, la forêt qui chante.",
          "Ces sites naturels font la beauté du pays — et sa richesse aussi : les visiteurs de l'écotourisme viennent exactement pour eux.",
        ],
        exemples: [
          "La cascade sacrée n'a pas changé depuis cent ans : haie vive, panneau discret, silence.",
          "La colline des ancêtres porte les tombeaux que nul ne touche.",
        ],
      },
      {
        titre: "3. Aménager sans abîmer",
        paras: [
          "La règle du village écologique est double : aménager ce qui rapporte (routes, marchés, ateliers), protéger ce qui est sacré et beau (sites, sources, forêts).",
          "La protection s'écrit dans le Dina et se voit sur le terrain : haies, sentiers balisés, panneaux discrets, jours de visite réglés. On visite sans salir, on admire sans abîmer — et les trésors restent pour les enfants.",
        ],
        exemples: [
          "Les sentiers de la cascade sont balisés pour que les pas ne dérangent pas les berges.",
          "Les recettes des visites paient l'entretien de la haie et du sentier.",
        ],
      },
    ],
  },
  motsCles: ["infrastructure économique", "route", "marché", "site naturel", "protection"],
  questionsRevision: [
    ["Cite trois infrastructures économiques du village.", "La route, le marché couvert et les ateliers (aussi le dépôt, l'énergie)."],
    ["Pourquoi protéger les sites naturels ?", "Parce qu'ils sont les trésors du village et qu'ils attirent les visiteurs de l'écotourisme."],
  ],
};

const S74 = {
  numero: 74, total: TOTAL,
  titre: "Les normes (1) : environnement et topographie",
  theme: "Le village écologique",
  objectif: "Être capable de citer les normes environnementales et de montrer comment la topographie guide l'implantation du village.",
  image: { id: "geo6_normes_environnement_topographie", legende: "Construire selon la pente, l'eau et le vent : la topographie décide." },
  scene: { file: "scene_s74_normes1.jpg", mode: "document", legende: "Document : sur la colline, l'artisan plante un piquet : les maisons monteront en courbes suivies, la rivière garde ses berges plantées, le vent traverse les rues." },
  revisionOuverture: [
    ["Cite trois infrastructures économiques du village.", "La route, le marché couvert et les ateliers (aussi le dépôt, l'énergie)."],
    ["Pourquoi protéger les sites naturels ?", "Parce qu'ils sont les trésors du village et qu'ils attirent les visiteurs de l'écotourisme."],
  ],
  miseEnSituation: {
    texte: "Nouveau chantier au village : les terrains pour les jeunes familles. Sur la colline, l'artisan plante des piquets et lit le terrain comme un livre : « Ici, la pente est forte : les maisons suivront les courbes, jamais en ligne droite qui accélère l'eau. Là-bas, le bas-fond craint les crues : pas de maisons, on y garde les rizières. La rivière garde ses berges plantées d'arbres, qui la retiennent. Et les rues se placent dans le sens du vent : l'air balaye la poussière. La topographie commande, nous obéissons. »",
    question: "Comment la nature du terrain guide-t-elle la construction du village ?",
    ra: "La topographie — pentes, bas-fonds, cours d'eau, sens du vent — décide de la place de tout : maisons en courbes sur les pentes, pas de construction dans les zones inondables, berges plantées, rues dans le sens du vent. C'est la norme environnementale.",
    support: "Schéma des normes et de la topographie (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les normes (1) : environnement et topographie ». Après cette séance, vous serez capables de citer ces normes et d'expliquer comment le terrain commande la construction.",
  observation: "Observez bien le schéma : la colline et ses courbes de niveau, le bas-fond humide, la rivière et ses berges plantées, la flèche du vent dans les rues.",
  supportObservation: "Schéma des normes et de la topographie (page Leçon)",
  analyse: [
    ["Qu'est-ce que la topographie ?", "C'est la forme du terrain : ses pentes, ses creux, ses cours d'eau, ses exposants au vent et au soleil."],
    ["Où construire sur une pente forte ?", "En suivant les courbes du terrain, jamais en ligne droite qui accélère l'eau de pluie."],
    ["Pourquoi ne pas bâtir dans les bas-fonds ?", "Parce que les crues et les marécages y inondent les maisons : on y garde les rizières."],
    ["Pourquoi planter les berges des rivières ?", "Les racines des arbres retiennent la terre et protègent les berges de l'érosion."],
    ["Comment placer les rues ?", "Dans le sens du vent : l'air balaye la poussière et rafraîchit le village."],
    ["Qu'est-ce qu'une norme environnementale ?", "Une règle qui protège le milieu : ne pas couper la berge, ne pas bâtir sur la source, trier les déchets."],
  ],
  synthese: "Donc, la topographie commande le village : maisons en courbes sur les pentes, bas-fonds réservés aux rizières, berges plantées, rues dans le vent. Les normes environnementales protègent l'eau, la terre et l'air : le village s'adapte à la nature au lieu de la bousculer.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que la topographie ?",
        "2. Pourquoi bâtir en courbes sur une pente ?",
        "3. Que fait-on des bas-fonds humides ?",
        "4. Pourquoi planter les berges ?",
      ],
      corrige: [
        "1. C'est **la forme du terrain** : pentes, creux, cours d'eau, vent, soleil.",
        "2. Pour que **l'eau de pluie ne s'engouffre pas** en ligne droite et n'emporte pas la terre.",
        "3. On **y garde les rizières** : les maisons y craignent les crues.",
        "4. Parce que **les racines retiennent la terre** et protègent les berges.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. On bâtit de préférence dans les zones inondables.",
        "2. Les rues dans le sens du vent rafraîchissent le village.",
        "3. Couper la berge d'une rivière accélère l'érosion.",
        "4. La topographie aide à bien placer le village.",
      ],
      corrige: [
        "1. **Faux** : les bas-fonds restent aux rizières.",
        "2. **Vrai** : l'air balaye la poussière.",
        "3. **Vrai** : la terre part avec la pluie.",
        "4. **Vrai** : pente, eau et vent décident de la place de tout.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : topographie — courbes — bas-fonds — berges.",
      items: [
        "La forme du terrain s'appelle la ……… .",
        "Sur une pente forte, les maisons suivent les ……… du terrain.",
        "Les crues remplissent les ……… : on y garde les rizières.",
        "Les arbres des ……… retiennent la terre.",
      ],
      corrige: [
        "la **topographie** / les **courbes** / les **bas-fonds** / les **berges**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. La topographie, c'est : A. la forme du terrain — B. un livre — C. une danse",
        "2. Bâtir en ligne droite sur une pente : A. accélère l'eau — B. arrête le vent — C. fait rire",
        "3. Les bas-fonds conviennent : A. aux rizières — B. aux palais — C. aux routes rapides",
        "4. Les racines des berges : A. retiennent la terre — B. font la pluie — C. volent",
        "5. Les normes environnementales protègent : A. l'eau, la terre et l'air — B. l'argent — C. les nuages",
      ],
      corrige: [
        "1. Réponse **A** : pentes, creux, eau, vent.",
        "2. Réponse **A** : et emporte la terre.",
        "3. Réponse **A** : l'eau y est bienvenue.",
        "4. Réponse **A** : les berges tiennent.",
        "5. Réponse **A** : le milieu qui nous nourrit.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Lire le terrain avant de bâtir",
        paras: [
          "La topographie, c'est la forme du terrain : ses pentes et ses creux, ses cours d'eau, son vent, son soleil. Avant de bâtir, l'artisan la lit comme un livre.",
          "Là où la pente est forte, les maisons suivent les courbes du terrain : les rues en escalier freinent l'eau de pluie au lieu de la lancer. Là où le terrain est plat et ferme, la place du marché et les grands bâtiments s'installent.",
        ],
        exemples: [
          "Sur la colline, les piquets des nouvelles maisons suivent les courbes de niveau.",
          "La place du marché occupe le plat du carrefour, à l'abri des crues.",
        ],
      },
      {
        titre: "2. L'eau et le vent décident aussi",
        paras: [
          "Les bas-fonds humides restent aux rizières : les crues y sont bienvenues pour le riz, mortelles pour les maisons. Les berges de la rivière se plantent d'arbres : leurs racines retiennent la terre.",
          "Et les rues se placent dans le sens du vent dominant : l'air traverse le village, balaye la poussière et rafraîchit les maisons. La nature commande, l'artisan obéit — et le village s'en porte mieux.",
        ],
        exemples: [
          "La rivière n'a jamais débordé dans une maison : les berges plantées la retiennent.",
          "Le soir, le vent descend la colline et traverse les rues comme un souffle.",
        ],
      },
      {
        titre: "3. Les normes de l'environnement",
        paras: [
          "Ces règles s'appellent des normes : ne pas bâtir sur la source ni dans le bas-fond, ne pas couper la berge, trier les déchets, replanter ce qu'on coupe.",
          "Écrites dans le Dina et affichées au fokontany, elles protègent l'eau, la terre et l'air du village. La séance suivante découvrira les autres normes : celles des traditions et de l'implantation des équipements.",
        ],
        exemples: [
          "Le panneau du chantier rappelle les normes : courbes, berges, tri, replantation.",
          "L'amende du Dina décourage celui qui voudrait bâtir sur la berge.",
        ],
      },
    ],
  },
  motsCles: ["norme environnementale", "topographie", "courbes de niveau", "bas-fond", "berges"],
  questionsRevision: [
    ["Qu'est-ce que la topographie ?", "La forme du terrain : pentes, creux, cours d'eau, vent, soleil."],
    ["Cite deux normes environnementales du village.", "Ne pas bâtir dans les bas-fonds, planter les berges (aussi trier les déchets, replanter)."],
  ],
};

const S75 = {
  numero: 75, total: TOTAL,
  titre: "Les normes (2) : traditions et implantation des infrastructures",
  theme: "Le village écologique",
  objectif: "Être capable d'expliquer le respect des croyances et traditions dans l'implantation des infrastructures du village.",
  image: { id: "geo6_normes_traditions", legende: "École, point d'eau, bloc sanitaire, espace culturel : chaque équipement à sa juste place." },
  scene: { file: "scene_s75_normes2.jpg", mode: "document", legende: "Document : autour du plan du village, le chef, la doyenne et l'artisan décident : l'école loin des tombes, le point d'eau près des maisons, l'espace culturel face à la colline des ancêtres." },
  revisionOuverture: [
    ["Qu'est-ce que la topographie ?", "La forme du terrain : pentes, creux, cours d'eau, vent, soleil."],
    ["Cite deux normes environnementales du village.", "Ne pas bâtir dans les bas-fonds, planter les berges (aussi trier les déchets, replanter)."],
  ],
  miseEnSituation: {
    texte: "Dernière réunion de chantier. Sur la grande table, le plan du village. Rakotomalala pose la question délicate : « Où placer le nouveau point d'eau ? Et l'école ? » La doyenne Soa désigne la colline des ancêtres : « Pas un marteau sur les tombes, ni sur le bosquet sacré : le fady le défend — c'est la règle de toujours. » L'artisan propose : « Le point d'eau au centre des maisons : cent pas au plus pour chaque famille. L'école au calme, loin des tombes et du bruit du marché. Le bloc sanitaire en contrebas des sources, jamais au-dessus. Et l'espace culturel face à la colline : les fêtes regarderont les ancêtres. » L'assemblée approuve à main levée.",
    question: "Comment les traditions et la raison placent-elles les équipements du village ?",
    ra: "Les traditions (fady, lieux sacrés) interdisent certains emplacements ; la raison place chaque équipement au bon endroit : eau au centre des habitations, école au calme, sanitaires en contrebas des sources, espace culturel face aux ancêtres.",
    support: "Schéma de l'implantation des infrastructures (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les normes (2) : traditions et implantation des infrastructures ». Après cette séance, vous serez capables d'expliquer où se placent les équipements du village et pourquoi les traditions s'y font respecter.",
  observation: "Observez bien le schéma : le plan du village avec ses équipements — point d'eau, école, bloc sanitaire, espace culturel — et les zones interdites des traditions.",
  supportObservation: "Schéma de l'implantation des infrastructures (page Leçon)",
  analyse: [
    ["Qu'est-ce qu'un fady ?", "Une interdiction traditionnelle : ce que la coutume défend de faire en un lieu ou en un temps."],
    ["Où ne peut-on jamais bâtir ?", "Sur les tombes, le bosquet sacré, les lieux que la tradition réserve aux ancêtres."],
    ["Où placer le point d'eau ?", "Au centre des habitations : cent pas au plus pour chaque famille."],
    ["Où placer l'école ?", "Au calme, loin des tombes et du bruit du marché."],
    ["Pourquoi les sanitaires en contrebas des sources ?", "Pour que leurs eaux usées ne salissent jamais l'eau que l'on boit."],
    ["Où regarde l'espace culturel ?", "Vers la colline des ancêtres : les fêtes les honorent."],
  ],
  synthese: "Donc, l'implantation des infrastructures obéit aux deux : aux traditions (fady, lieux sacrés, tombeaux respectés) et à la raison (eau au centre, école au calme, sanitaires en contrebas des sources, espace culturel face aux ancêtres). Le village moderne reste le village des ancêtres.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'un fady ?",
        "2. Où place-t-on le point d'eau ? Pourquoi ?",
        "3. Pourquoi les sanitaires descendent-ils des sources ?",
        "4. Que regarde l'espace culturel ?",
      ],
      corrige: [
        "1. C'est **une interdiction traditionnelle** de la coutume, en un lieu ou en un temps.",
        "2. **Au centre des habitations**, à cent pas au plus de chaque famille.",
        "3. Pour que **leurs eaux usées ne salissent jamais l'eau bue** par le village.",
        "4. **La colline des ancêtres** : les fêtes les honorent.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. On peut bâtir une école sur les tombes des ancêtres.",
        "2. Le point d'eau doit rester proche de toutes les familles.",
        "3. Les sanitaires se placent au-dessus de la source.",
        "4. Les traditions guident aussi l'implantation des équipements.",
      ],
      corrige: [
        "1. **Faux** : les tombes et le bosquet sacré sont intouchables.",
        "2. **Vrai** : cent pas au plus.",
        "3. **Faux** : en contrebas, pour protéger l'eau bue.",
        "4. **Vrai** : les fady font la loi depuis toujours.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : fady — centre — contrebas — ancêtres.",
      items: [
        "L'interdiction traditionnelle s'appelle le ……… .",
        "Le point d'eau se place au ……… des habitations.",
        "Les sanitaires s'installent en ……… des sources.",
        "L'espace culturel regarde la colline des ……… .",
      ],
      corrige: [
        "le **fady** / au **centre** / en **contrebas** / des **ancêtres**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Un fady est : A. une interdiction coutumière — B. une chanson — C. un mets",
        "2. Le bosquet sacré : A. ne se touche pas — B. se vend — C. se coupe",
        "3. L'école se place : A. au calme — B. sur la tombe — C. au milieu du marché",
        "4. Les sanitaires en contrebas protègent : A. l'eau bue — B. le vent — C. le soleil",
        "5. Les équipements du village se décident : A. en assemblée — B. en cachette — C. au hasard",
      ],
      corrige: [
        "1. Réponse **A** : la règle de toujours.",
        "2. Réponse **A** : fady du lieu.",
        "3. Réponse **A** : loin des tombes et du bruit.",
        "4. Réponse **A** : l'eau potable reste propre.",
        "5. Réponse **A** : avec le chef, les notables et le plan.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Les lieux que l'on ne touche pas",
        paras: [
          "Chaque village garde ses lieux sacrés : la colline des tombeaux, le bosquet des ancêtres, la pierre où l'on fait les vœux, le jour où l'on ne travaille pas la terre. Les fady les protègent depuis toujours.",
          "Aucun marteau ne les touche : l'implantation des infrastructures commence par respecter ces interdits. Le village écologique ne bouscule pas les croyances : il s'appuie sur elles, car des hommes qui respectent leurs ancêtres respectent aussi leur terre.",
        ],
        exemples: [
          "« Pas un marteau sur les tombes », tranche la doyenne Soa.",
          "Le jour fady de la colline, aucun chantier ne travaille.",
        ],
      },
      {
        titre: "2. Chaque équipement à sa place",
        paras: [
          "Vient ensuite la raison des places : le point d'eau au centre des habitations, à cent pas au plus, pour épargner les dos ; l'école au calme, loin du marché et des tombes, pour que les voix portent.",
          "Le bloc sanitaire descend en contrebas des sources, pour que l'eau bue reste propre ; l'espace culturel monte face à la colline des ancêtres, pour que les fêtes les regardent.",
        ],
        exemples: [
          "Le plan du village étale ses équipements comme les pièces d'un jeu.",
          "Les femmes approuvent le point d'eau central : fini les bidons de dix kilos.",
        ],
      },
      {
        titre: "3. Le plan d'ensemble",
        paras: [
          "Route, marché, ateliers, eau, école, santé, culture : tout se tient sur le plan du village, chaque équipement à sa juste place, entre la règle des ancêtres et la raison des vivants.",
          "L'assemblée approuve le plan à main levée : il entre au grand cahier avec le Dina. La dernière séance de l'unité comparera le village d'avant et le village écologique, et montrera comment les élèves en font la maquette.",
        ],
        exemples: [
          "Le plan approuvé est affiché au bureau du fokontany.",
          "Le grand cahier garde la trace de chaque décision d'implantation.",
        ],
      },
    ],
  },
  motsCles: ["traditions", "fady", "implantation", "point d'eau", "espace culturel"],
  questionsRevision: [
    ["Qu'est-ce qu'un fady ?", "Une interdiction traditionnelle de la coutume, en un lieu ou en un temps."],
    ["Où place-t-on le point d'eau et l'école ?", "L'eau au centre des habitations ; l'école au calme, loin des tombes et du marché."],
  ],
};

const S76 = {
  numero: 76, total: TOTAL,
  titre: "Comparer un village et un village écologique ; la maquette",
  theme: "Le village écologique",
  objectif: "Être capable de comparer un village ordinaire et un village écologique, et de décrire la réalisation d'une maquette.",
  image: { id: "geo6_maquette_compare", legende: "Deux villages côte à côte sur la maquette : celui d'avant, celui du défi." },
  scene: { file: "scene_s76_maquette.jpg", mode: "document", legende: "Document : au fond de la classe, la grande maquette : d'un côté le village d'avant (colline nue, poubelles), de l'autre le village écologique (source clôturée, arbres, étang)." },
  revisionOuverture: [
    ["Qu'est-ce qu'un fady ?", "Une interdiction traditionnelle de la coutume, en un lieu ou en un temps."],
    ["Où place-t-on le point d'eau et l'école ?", "L'eau au centre des habitations ; l'école au calme, loin des tombes et du marché."],
  ],
  miseEnSituation: {
    texte: "Fin d'année. Au fond de la classe de Mme Randriamampionona, une grande table porte la maquette du travail de l'année : deux villages côte à côte. À gauche, le village d'avant : colline dénudée, rivière encombrée, déchets au vent. À droite, le village écologique : source clôturée, colline replantée, étang bleu, toits propres, petits panneaux solaires en papier d'argent. « Comparez », dit la maîtresse. Hery pointe la colline : « Ici la terre partait avec la pluie ; là, les arbres la retiennent. » Miora montre la rivière : « Ici les déchets ; là, la clôture et le dépôt. » Les parents approuvent : la maquette raconte mieux que mille discours.",
    question: "Quelles différences entre un village ordinaire et un village écologique, et comment la maquette les fait-elle voir ?",
    ra: "Le village écologique protège son eau, sa forêt et sa terre, gère ses déchets et son énergie. La maquette — carton, argile, papier, mousse — montre tout cela d'un coup d'œil : comparer, c'est comprendre.",
    support: "Schéma de la comparaison des deux villages (page Leçon)",
  },
  presentation: "Aujourd'hui, nous terminons les leçons avec : « Comparer un village et un village écologique ; la maquette ». Après cette séance, vous serez capables de citer les différences et de décrire la démarche de la maquette.",
  observation: "Observez bien le schéma : deux villages face à face — eau, forêt, déchets, énergie, vie sociale — et les flèches qui passent de l'un à l'autre.",
  supportObservation: "Schéma de la comparaison des deux villages (page Leçon)",
  analyse: [
    ["Où est la différence la plus visible ?", "Sur la colline : nue et ravinée d'un côté, verte et plantée de l'autre."],
    ["Que fait l'eau dans chaque village ?", "Dans le village d'avant, elle part avec la terre ; dans l'écologique, la source clôturée et les berges plantées la gardent claire."],
    ["Que deviennent les déchets ?", "Au vent dans le village d'avant ; triés au dépôt dans le village écologique."],
    ["Et l'énergie ?", "Bois fumant d'un côté ; foyers économes, gaz et solaire de l'autre."],
    ["Avec quoi fait-on une maquette ?", "Du carton, de l'argile, du papier, de la mousse, des bâtonnets : les matériaux simples, montés en groupe."],
    ["Que montre la maquette de mieux que le discours ?", "Tout d'un coup d'œil : celui qui regarde compare et comprend sans mots."],
  ],
  synthese: "Donc, comparer, c'est comprendre : le village écologique protège son eau, sa forêt, sa terre, trie ses déchets, choisit l'énergie propre — et vit mieux. La maquette, construite en groupe avec des matériaux simples, montre toutes ces différences d'un coup d'œil.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Cite deux différences entre les deux villages.",
        "2. Que fait l'eau de la colline nue ?",
        "3. Avec quoi réalise-t-on une maquette ?",
        "4. Pourquoi la maquette explique-t-elle mieux que le discours ?",
      ],
      corrige: [
        "1. Par exemple : **la colline plantée** et **les déchets triés** (aussi source clôturée, solaire).",
        "2. Elle **emporte la terre** : l'érosion ravine la pente.",
        "3. Avec **du carton, de l'argile, du papier, de la mousse, des bâtonnets**.",
        "4. Parce qu'elle **montre tout d'un coup d'œil** : on compare et on comprend.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Dans le village écologique, la source est clôturée.",
        "2. La colline nue garde bien sa terre.",
        "3. La maquette se construit en groupe.",
        "4. Les panneaux solaires évitent de couper du bois.",
      ],
      corrige: [
        "1. **Vrai** : l'eau bue reste propre.",
        "2. **Faux** : la pluie l'emporte en ravins.",
        "3. **Vrai** : chacun sa partie, tous la maquette.",
        "4. **Vrai** : énergie propre.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : érosion — triés — maquette — groupe.",
      items: [
        "Sur la colline nue, la pluie provoque l'……… .",
        "Dans le village écologique, les déchets sont ……… .",
        "La réduction en petit du village s'appelle la ……… .",
        "On la construit en ……… , chacun sa partie.",
      ],
      corrige: [
        "l'**érosion** / **triés** / la **maquette** / en **groupe**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le village d'avant a : A. une colline nue — B. un étang propre — C. des panneaux solaires",
        "2. Le village écologique protège : A. sa source — B. ses déchets au vent — C. ses ravins",
        "3. La maquette se fait avec : A. des matériaux simples — B. de l'or — C. du béton armé",
        "4. Sur la maquette, l'étang est : A. bleu — B. noir — C. invisible",
        "5. Comparer les deux villages, c'est : A. comprendre le défi — B. perdre du temps — C. jouer",
      ],
      corrige: [
        "1. Réponse **A** : et la rivière encombrée.",
        "2. Réponse **A** : clôturée et gardée claire.",
        "3. Réponse **A** : carton, argile, papier, mousse.",
        "4. Réponse **A** : le bleu du travail de l'année.",
        "5. Réponse **A** : voir ce qui change et pourquoi.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Les deux villages face à face",
        paras: [
          "Posons les deux villages face à face. Celui d'avant : colline dénudée, ravins rouges, rivière encombrée, fumée des foyers, déchets au vent. Celui du défi : source clôturée, colline replantée, berges boisées, étang bleu, toits propres, dépôt de tri.",
          "La comparaison fait comprendre mieux que le discours : l'eau, la terre, l'air et la santé changent de visage d'un village à l'autre — et la vie avec.",
        ],
        exemples: [
          "Hery pointe la colline : « Ici la terre partait ; là, les arbres la retiennent. »",
          "Miora montre la rivière : « Ici les déchets ; là, la clôture et le dépôt. »",
        ],
      },
      {
        titre: "2. Construire la maquette",
        paras: [
          "La maquette est le village réduit : on le construit en groupe, sur une table, avec des matériaux simples — carton pour les murs, argile pour la colline, mousse et bâtonnets pour la forêt, papier bleu pour l'eau, papier d'argent pour les panneaux.",
          "Chaque groupe prend une partie : le relief, l'eau, les maisons, les équipements. On relie, on ajuste, on légende : la maquette devient le village en petit, fidèle et lisible.",
        ],
        exemples: [
          "Les deux moitiés de la table racontent le village d'avant et le village du défi.",
          "Les étiquettes placent la source, l'étang, l'école et le dépôt de tri.",
        ],
      },
      {
        titre: "3. Montrer pour convaincre",
        paras: [
          "Une maquette se montre : aux parents, aux voisins, aux visiteurs. Celui qui regarde, compare ; celui qui compare, comprend ; celui qui comprend, veut faire pareil chez lui.",
          "Voilà la dernière leçon du manuel : le village écologique n'est pas un rêve de papier — c'est un plan sur une table, des règles dans un cahier, et des mains qui se mettent au travail. La révision et l'examen final arrivent : tout ce que vous avez appris cette année y servira.",
        ],
        exemples: [
          "Les parents penchés sur la maquette approuvent : elle raconte mieux que mille discours.",
          "Le fokontany voisin a demandé la maquette pour sa prochaine réunion.",
        ],
      },
    ],
  },
  motsCles: ["comparaison", "village écologique", "maquette", "matériaux simples", "légender"],
  questionsRevision: [
    ["Cite deux différences entre un village ordinaire et un village écologique.", "La colline plantée contre la colline nue ; les déchets triés contre les déchets au vent."],
    ["Quelles sont les étapes de la maquette ?", "Construire en groupe les parties (relief, eau, maisons), relier, ajuster, légender, montrer."],
  ],
};

module.exports = { topics: [S72, S73, S74, S75, S76] };
