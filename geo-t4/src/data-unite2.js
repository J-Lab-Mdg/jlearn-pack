// data-unite2.js — UNITÉ 2 : LE PLAN (Séances 11 à 16)
// Contenu rédactionnel conforme au Programme d'études officiel T4 — Géographie (p. 119-120)
const TOTAL = 76;

const S11 = {
  numero: 11, total: TOTAL,
  titre: "Qu'est-ce qu'un plan ?",
  theme: "Le plan",
  objectif: "Être capable de dire ce qu'est un plan et à quoi il sert.",
  image: { id: "geot4_plan_classe", legende: "Le plan d'une salle de classe, vue de dessus." },
  revisionOuverture: [
    ["Où place-t-on le Nord sur un dessin ou une carte ?", "On place le Nord en haut."],
    ["Cite les quatre points cardinaux.", "Le Nord, le Sud, l'Est et l'Ouest."],
  ],
  miseEnSituation: {
    texte: "Une hirondelle vole souvent au-dessus de l'école. De là-haut, elle voit la cour entière, les toits des bâtiments, les arbres et les enfants tout petits. La maîtresse montre alors un drôle de dessin : la salle de classe comme si on la regardait depuis le ciel.",
    question: "Que verrait un oiseau qui vole au-dessus de notre école ?",
    ra: "Il verrait les toits, la cour et les arbres vus d'en haut.",
    support: "Plan de la salle de classe (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Qu'est-ce qu'un plan ? ». Après cette séance, vous serez capables de dire ce qu'est un plan et à quoi il sert.",
  observation: "Regardez et observez bien le dessin de la salle de classe vu de dessus.",
  supportObservation: "Plan de la salle de classe (page Leçon)",
  analyse: [
    ["Que représente ce dessin ?", "Il représente notre salle de classe."],
    ["Comment regarde-t-on la salle sur ce dessin ?", "On la regarde comme si on était au-dessus, dans le ciel."],
    ["Comment s'appelle cette façon de regarder, depuis le ciel ?", "C'est la vue de dessus."],
    ["Ce dessin a un nom particulier. Lequel ?", "C'est un plan."],
    ["Un plan est-il un dessin vu de côté ou vu de dessus ?", "Un plan est un dessin vu de dessus."],
    ["À quoi peut servir ce dessin de notre salle ?", "À connaître la place de chaque chose dans la salle."],
  ],
  synthese: "Donc, un plan est un dessin qui représente un lieu vu de dessus, comme si on le regardait depuis le ciel. Il sert à connaître la place de chaque chose dans ce lieu.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'un plan ?",
        "2. Comment regarde-t-on un lieu sur un plan ?",
        "3. Un plan représente-t-il un lieu vu de côté ou vu de dessus ?",
        "4. À quoi sert un plan ?",
      ],
      corrige: [
        "1. Un plan est un **dessin qui représente un lieu vu de dessus**.",
        "2. On regarde le lieu **comme si on était au-dessus, dans le ciel**.",
        "3. Un plan représente un lieu **vu de dessus**.",
        "4. Il sert à **connaître la place de chaque chose** dans un lieu.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Un plan est un dessin vu de dessus.",
        "2. Un plan se regarde comme si on était sous la terre.",
        "3. Un plan sert à connaître la place de chaque chose.",
        "4. Sur un plan, on dessine les meubles par des formes simples.",
      ],
      corrige: [
        "1. **Vrai**.",
        "2. **Faux** : on le regarde comme si on était **au-dessus, dans le ciel**.",
        "3. **Vrai**.",
        "4. **Vrai**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : dessus — ciel — plan — place.",
      items: [
        "Un ……… est un dessin qui représente un lieu vu de dessus.",
        "On le regarde comme si on était dans le ……… .",
        "Un plan est toujours dessiné vu de ……… .",
        "Il sert à connaître la ……… de chaque chose.",
      ],
      corrige: ["**plan** / **ciel** / **dessus** / **place**."],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Un plan est : A. une chanson — B. un dessin vu de dessus — C. une photo de visage",
        "2. Sur un plan, on regarde le lieu : A. d'en haut — B. de côté — C. d'en bas",
        "3. Un plan sert à : A. connaître la place des choses — B. faire du bruit — C. compter les élèves",
        "4. La vue de dessus, c'est comme si un oiseau : A. marchait — B. nageait — C. volait au-dessus du lieu",
      ],
      corrige: [
        "1. Réponse **B** : un dessin vu de dessus.",
        "2. Réponse **A** : d'en haut.",
        "3. Réponse **A** : connaître la place des choses.",
        "4. Réponse **C** : volait au-dessus du lieu.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Qu'est-ce qu'un plan ?",
        paras: [
          "Un plan est un dessin qui représente un lieu vu de dessus, comme si on le regardait depuis le ciel.",
          "Sur un plan, on dessine chaque chose par une forme simple : c'est pour cela que l'on reconnaît facilement la salle de classe sur le plan.",
        ],
      },
      {
        titre: "2. La vue de dessus",
        paras: [
          "Regarder en vue de dessus, c'est regarder un lieu d'en haut, comme un oiseau qui vole au-dessus de l'école.",
          "Vu de dessus, un pupitre devient un simple rectangle ; le tableau devient un rectangle tout en longueur contre le mur.",
        ],
        exemples: [
          "L'hirondelle qui vole au-dessus de la cour voit les toits et les enfants tout petits : elle voit l'école en vue de dessus.",
        ],
      },
      {
        titre: "3. À quoi sert un plan ?",
        paras: [
          "Un plan sert à connaître la place de chaque chose dans un lieu, sans se déplacer.",
          "Il aide aussi à retrouver son chemin, à expliquer où se trouve un endroit et à préparer l'aménagement d'un lieu.",
        ],
        exemples: [
          "Avec le plan de l'école, un visiteur trouve la salle de classe sans se perdre.",
          "Avec le plan du quartier, on montre à un camarade le chemin de la maison à l'école.",
        ],
      },
    ],
  },
  motsCles: ["plan", "vu de dessus", "lieu"],
  questionsRevision: [
    ["Qu'est-ce qu'un plan ?", "Un plan est un dessin qui représente un lieu vu de dessus."],
    ["À quoi sert un plan ?", "À connaître la place de chaque chose dans un lieu."],
  ],
};

const S12 = {
  numero: 12, total: TOTAL,
  titre: "Les éléments du plan de la salle de classe",
  theme: "Le plan",
  objectif: "Être capable d'identifier les éléments du plan de la salle de classe.",
  image: { id: "geot4_plan_classe", legende: "Les éléments du plan : murs, porte, fenêtres et meubles." },
  miseEnSituation: {
    texte: "Soa veut faire une surprise à sa maîtresse : dessiner la salle de classe sur une grande feuille. Elle commence, puis s'arrête : « Si je dessine seulement les pupitres, on ne reconnaîtra pas notre salle ! » Son voisin de table, Mamy, lui souffle : « Dessine aussi ce qui entoure la salle et ce qui sert à entrer. »",
    question: "Quelles choses faut-il dessiner pour que l'on reconnaisse la salle de classe ?",
    ra: "Les murs, la porte, les fenêtres et les meubles.",
    support: "Plan de la salle de classe (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les éléments du plan de la salle de classe ». Après cette séance, vous serez capables de citer et de reconnaître les éléments qui doivent figurer sur le plan de la classe.",
  observation: "Regardez et observez bien le plan de la salle de classe : ce qui entoure la salle, les ouvertures et les meubles.",
  supportObservation: "Plan de la salle de classe (page Leçon)",
  analyse: [
    ["Qu'est-ce qui entoure la salle sur le plan ?", "Ce sont les murs."],
    ["Quelle ouverture permet d'entrer dans la salle ?", "C'est la porte."],
    ["Quelles ouvertures laissent entrer la lumière ?", "Ce sont les fenêtres."],
    ["Quels meubles voit-on sur ce plan ?", "Le tableau noir, le bureau du maître et les pupitres."],
    ["Comment sont dessinés les meubles sur le plan ?", "Ils sont dessinés par des formes simples, vues de dessus."],
    ["Pourquoi dessine-t-on tous ces éléments ?", "Pour que l'on reconnaisse la salle et que chaque chose soit à sa place."],
  ],
  synthese: "Donc, le plan de la salle de classe montre ses éléments : les murs qui l'entourent, la porte, les fenêtres et les meubles comme le tableau, le bureau du maître et les pupitres. Chaque élément est dessiné par une forme simple vue de dessus.",
  appExos: [
    {
      consigne: "Complète avec les mots : murs — porte — fenêtres — pupitres.",
      items: [
        "1. Ce qui entoure la salle de classe, ce sont les ……… .",
        "2. Pour entrer dans la salle, on passe par la ……… .",
        "3. Les ……… laissent entrer la lumière du jour.",
        "4. Les élèves écrivent sur leurs cahiers posés sur les ……… .",
      ],
      corrige: [
        "1. Les **murs**.",
        "2. La **porte**.",
        "3. Les **fenêtres**.",
        "4. Les **pupitres**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Sur le plan, les murs sont dessinés : A. en rond — B. par le contour de la salle — C. en pointillés bleus",
        "2. La porte est une ouverture qui sert : A. à entrer et à sortir — B. à voir dehors — C. à ranger les cahiers",
        "3. Le tableau noir est placé : A. au milieu de la salle — B. contre un mur — C. dehors",
        "4. Sur le plan, chaque meuble est dessiné : A. par une forme simple — B. en vrai grandeur — C. avec ses pieds",
      ],
      corrige: [
        "1. Réponse **B** : par le contour de la salle.",
        "2. Réponse **A** : à entrer et à sortir.",
        "3. Réponse **B** : contre un mur.",
        "4. Réponse **A** : par une forme simple.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Relie chaque élément de la liste 1 à son rôle de la liste 2 par une flèche.",
      items: [
        "Liste 1 : 1. Les murs — 2. La porte — 3. Les fenêtres — 4. Le tableau noir",
        "Liste 2 : a. laisser entrer la lumière — b. entourer la salle — c. écrire les leçons — d. entrer et sortir",
      ],
      corrige: [
        "1 → **b** : les murs entourent la salle.",
        "2 → **d** : la porte sert à entrer et à sortir.",
        "3 → **a** : les fenêtres laissent entrer la lumière.",
        "4 → **c** : le tableau noir sert à écrire les leçons.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le plan de la classe montre seulement les pupitres.",
        "2. La porte et les fenêtres sont des ouvertures de la salle.",
        "3. Le bureau du maître est un meuble de la classe.",
        "4. Sur le plan, on dessine les meubles vus de côté.",
      ],
      corrige: [
        "1. **Faux** : il montre aussi les murs, la porte, les fenêtres et les autres meubles.",
        "2. **Vrai**.",
        "3. **Vrai**.",
        "4. **Faux** : on les dessine **vus de dessus**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Ce qui entoure la salle",
        paras: [
          "Les murs forment le contour de la salle : sur le plan, ils dessinent un grand rectangle.",
          "La porte est l'ouverture par laquelle on entre et on sort.",
          "Les fenêtres sont les ouvertures qui laissent entrer la lumière et l'air.",
        ],
      },
      {
        titre: "2. Les meubles de la classe",
        paras: [
          "Les meubles de la classe sont : le tableau noir, le bureau du maître, les pupitres des élèves et les armoires.",
          "Sur le plan, chaque meuble est représenté par une forme simple vue de dessus : le pupitre est un petit rectangle, le tableau un rectangle tout en longueur contre le mur.",
        ],
      },
      {
        titre: "3. Pourquoi dessiner tous les éléments ?",
        paras: [
          "Si un élément manque, on ne reconnaît plus la salle et les places ne sont pas justes.",
          "Un plan complet montre donc le contour, les ouvertures et tous les meubles.",
        ],
        exemples: [
          "Soa a dessiné les murs, la porte, les trois fenêtres, le tableau, le bureau et les huit pupitres : sa maîtresse a reconnu la salle tout de suite.",
        ],
      },
    ],
  },
  motsCles: ["murs", "porte", "fenêtres", "meubles", "tableau", "bureau", "pupitres"],
  questionsRevision: [
    ["Cite trois éléments du plan de la salle de classe.", "Les murs, la porte et les pupitres (ou les fenêtres, le tableau, le bureau)."],
    ["Comment sont dessinés les meubles sur un plan ?", "Par des formes simples, vues de dessus."],
  ],
};

const S13 = {
  numero: 13, total: TOTAL,
  titre: "Représenter les mobiliers de la classe",
  theme: "Le plan",
  objectif: "Être capable de dessiner les meubles de la classe vus de dessus et de placer les meubles les uns par rapport aux autres.",
  image: { id: "geot4_plan_classe", legende: "Chaque meuble est dessiné par une forme simple vue de dessus." },
  miseEnSituation: {
    texte: "La maîtresse demande à Mamy : « Va au tableau et dessine notre classe comme un oiseau la voit. » Mamy hésite devant les pupitres : doit-il dessiner les pieds des tables ? Les cartables ? La maîtresse sourit : « Dessine seulement la forme que tu vois d'en haut. »",
    question: "Que voit-on d'un pupitre quand on le regarde d'en haut ?",
    ra: "On voit surtout le plateau : une forme plate, comme un rectangle.",
    support: "Plan de la salle de classe (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Représenter les mobiliers de la classe ». Après cette séance, vous serez capables de dessiner chaque meuble par une forme simple et de le placer au bon endroit sur le plan.",
  observation: "Regardez et observez bien les formes des meubles sur le plan de la classe.",
  supportObservation: "Plan de la salle de classe (page Leçon)",
  analyse: [
    ["Quelle forme a un pupitre vu de dessus ?", "Un pupitre vu de dessus a la forme d'un rectangle."],
    ["Et le bureau du maître, vue de dessus ?", "C'est aussi un rectangle, mais plus grand."],
    ["Où est collé le tableau noir ?", "Le tableau est collé contre le mur."],
    ["Où se trouvent les pupitres par rapport au bureau du maître ?", "Ils sont devant le bureau, plus loin du tableau."],
    ["Dessine-t-on les pieds des tables sur le plan ? Pourquoi ?", "Non, parce que vus de dessus, on ne voit que le plateau."],
    ["Les meubles sont-ils tous à la même place les uns par rapport aux autres ?", "Non, chaque meuble a sa place : à côté de, devant, derrière, à gauche de, à droite de."],
  ],
  synthese: "Donc, sur le plan de la classe, chaque meuble est dessiné par une forme simple vue de dessus : le pupitre par un petit rectangle, le bureau du maître par un rectangle plus grand, le tableau par un rectangle fin contre le mur. On place ensuite chaque meuble à sa place, par rapport aux autres.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Quelle forme a un pupitre vu de dessus ?",
        "2. Comment dessine-t-on le tableau noir sur le plan ?",
        "3. Dessine-t-on les pieds des tables ? Pourquoi ?",
        "4. Où se trouve ton pupitre par rapport au tableau ?",
      ],
      corrige: [
        "1. Un pupitre vu de dessus a la forme d'un **rectangle**.",
        "2. On le dessine par un **rectangle fin contre le mur**.",
        "3. **Non**, car vu de dessus, on ne voit que **le plateau** de la table.",
        "4. Réponse personnelle : mon pupitre est **devant / loin du** tableau, à **gauche / à droite**…",
      ],
    },
    {
      consigne: "Relie chaque meuble de la liste 1 à sa forme sur le plan de la liste 2 par une flèche.",
      items: [
        "Liste 1 : 1. Un pupitre — 2. Le bureau du maître — 3. Le tableau noir — 4. Une armoire",
        "Liste 2 : a. un rectangle fin collé au mur — b. un petit rectangle — c. un rectangle contre un mur, plus profond — d. un rectangle plus grand",
      ],
      corrige: [
        "1 → **b** : le pupitre est un petit rectangle.",
        "2 → **d** : le bureau est un rectangle plus grand.",
        "3 → **a** : le tableau est un rectangle fin collé au mur.",
        "4 → **c** : l'armoire est un rectangle contre un mur, plus profond.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : rectangle — dessus — plateau — mur.",
      items: [
        "Vu de ………, un pupitre a la forme d'un rectangle.",
        "Sur le plan, chaque meuble est dessiné par une forme simple, comme un ……… .",
        "On ne dessine pas les pieds des tables : on dessine seulement le ……… .",
        "Le tableau noir est collé contre le ……… .",
      ],
      corrige: ["**dessus** / **rectangle** / **plateau** / **mur**."],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le bureau du maître est dessiné : A. plus grand que les pupitres — B. plus petit — C. en rond",
        "2. Sur le plan, les meubles sont placés : A. n'importe où — B. les uns par rapport aux autres — C. tous au même endroit",
        "3. « Mon pupitre est à côté de celui de Soa » veut dire que les deux pupitres sont : A. l'un près de l'autre — B. très loin — C. un sur l'autre",
        "4. Pour dessiner la classe en vue de dessus, on se place comme : A. un poisson — B. un oiseau dans le ciel — C. un élève assis",
      ],
      corrige: [
        "1. Réponse **A** : plus grand que les pupitres.",
        "2. Réponse **B** : les uns par rapport aux autres.",
        "3. Réponse **A** : l'un près de l'autre.",
        "4. Réponse **B** : comme un oiseau dans le ciel.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Dessiner un meuble vu de dessus",
        paras: [
          "Pour dessiner un meuble sur le plan, on regarde seulement la forme que l'on voit d'en haut.",
          "On ne dessine ni les pieds, ni les côtés : juste le plateau, par une forme plate.",
        ],
        exemples: [
          "Le pupitre : un petit rectangle.",
          "Le bureau du maître : un rectangle plus grand.",
          "Le tableau noir : un rectangle fin, tout en longueur, contre le mur.",
          "L'armoire : un rectangle un peu profond, contre un mur.",
        ],
      },
      {
        titre: "2. Placer les meubles les uns par rapport aux autres",
        paras: [
          "Chaque meuble a sa place sur le plan : on dit qu'il est à côté de, devant, derrière, à gauche de ou à droite d'un autre meuble.",
          "Avant de dessiner, on observe bien la salle pour repérer la place de chaque meuble.",
        ],
        exemples: [
          "Le tableau est contre le mur du fond ; le bureau du maître est devant le tableau ; les pupitres sont devant le bureau.",
        ],
      },
      {
        titre: "3. S'entraider pour vérifier",
        paras: [
          "Après le dessin, on compare le plan et la salle réelle : chaque meuble doit être au bon endroit.",
          "Un camarade peut vérifier : il regarde la salle, puis le plan, et signale ce qui est mal placé.",
        ],
      },
    ],
  },
  motsCles: ["vu de dessus", "rectangle", "plateau", "à côté de", "devant", "derrière"],
  questionsRevision: [
    ["Quelle forme a un pupitre vu de dessus ?", "Un rectangle."],
    ["Cite deux mots qui servent à placer les meubles les uns par rapport aux autres.", "Par exemple : devant et derrière (ou à côté de, à gauche de, à droite de)."],
  ],
};

const S14 = {
  numero: 14, total: TOTAL,
  titre: "L'orientation du plan : la flèche du Nord",
  theme: "Le plan",
  objectif: "Être capable d'orienter un plan en plaçant la flèche du Nord et de dire où se trouvent le Sud, l'Est et l'Ouest sur le plan.",
  image: { id: "geot4_fleche_nord", legende: "La flèche du Nord oriente le plan." },
  miseEnSituation: {
    texte: "Hery et son cousin regardent le même plan de l'école, mais chacun le tourne de son côté. Hery dit : « Le portail est en bas. » Son cousin répond : « Non, il est à gauche ! » Ils se disputent jusqu'à ce que leur grand-mère montre une petite flèche sur le plan : « Tournez le plan pour que cette flèche regarde vers le haut, et vous verrez pareil ! »",
    question: "Qu'est-ce qui aide à lire un plan dans le même sens, tous ensemble ?",
    ra: "La flèche du Nord, qui doit regarder vers le haut.",
    support: "Schéma de la flèche du Nord (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « L'orientation du plan : la flèche du Nord ». Après cette séance, vous serez capables d'orienter un plan grâce à la flèche du Nord et de dire où sont le Sud, l'Est et l'Ouest sur le plan.",
  observation: "Regardez et observez bien le schéma du plan et de la flèche du Nord.",
  supportObservation: "Schéma de la flèche du Nord (page Leçon)",
  analyse: [
    ["Quelle lettre est écrite au bout de la flèche rouge ?", "C'est la lettre N."],
    ["Que signifie la lettre N ?", "Elle signifie Nord."],
    ["Dans quel sens doit pointer cette flèche quand on lit le plan ?", "Elle doit pointer vers le haut."],
    ["Si le Nord est en haut, où est le Sud ?", "Le Sud est en bas."],
    ["Et où sont l'Ouest et l'Est ?", "L'Ouest est à gauche et l'Est est à droite."],
    ["Pourquoi met-on cette flèche sur un plan ?", "Pour que tout le monde lise le plan dans le même sens."],
  ],
  synthese: "Donc, pour orienter un plan, on dessine la flèche du Nord, la lettre N, qui pointe vers le haut. Alors, le Nord est en haut, le Sud en bas, l'Ouest à gauche et l'Est à droite. Grâce à cette flèche, tout le monde lit le plan dans le même sens.",
  appExos: [
    {
      consigne: "Complète avec : haut — bas — gauche — droite.",
      items: [
        "1. Sur un plan orienté, le Nord est en ……… .",
        "2. Le Sud est en ……… .",
        "3. L'Ouest est à ……… .",
        "4. L'Est est à ……… .",
      ],
      corrige: [
        "1. Le Nord est en **haut**.",
        "2. Le Sud est en **bas**.",
        "3. L'Ouest est à **gauche**.",
        "4. L'Est est à **droite**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. La lettre N sur un plan signifie Nord.",
        "2. Sur un plan, le Sud est en haut.",
        "3. La flèche du Nord doit pointer vers le bas.",
        "4. La flèche du Nord aide tout le monde à lire le plan dans le même sens.",
      ],
      corrige: [
        "1. **Vrai**.",
        "2. **Faux** : le **Nord** est en haut, le Sud est en bas.",
        "3. **Faux** : elle doit pointer **vers le haut**.",
        "4. **Vrai**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Sur un plan, le Nord est placé : A. en bas — B. en haut — C. à gauche",
        "2. La lettre qui indique le Nord est : A. S — B. O — C. N",
        "3. Si le Nord est en haut, l'Est est : A. à droite — B. à gauche — C. en bas",
        "4. Pour orienter un plan, on utilise : A. la flèche du Nord — B. une pierre — C. le portail",
      ],
      corrige: [
        "1. Réponse **B** : en haut.",
        "2. Réponse **C** : N.",
        "3. Réponse **A** : à droite.",
        "4. Réponse **A** : la flèche du Nord.",
      ],
    },
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Quelle lettre indique le Nord sur un plan ?",
        "2. Dans quel sens pointe la flèche du Nord ?",
        "3. Où se trouve l'Ouest sur un plan orienté ?",
        "4. Pourquoi dessine-t-on la flèche du Nord sur un plan ?",
      ],
      corrige: [
        "1. La lettre **N** indique le Nord.",
        "2. Elle pointe **vers le haut** du plan.",
        "3. L'Ouest est **à gauche**.",
        "4. Pour que **tout le monde lise le plan dans le même sens**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La flèche du Nord",
        paras: [
          "Sur un plan, on dessine une flèche avec la lettre N : c'est la flèche du Nord.",
          "Cette flèche montre la direction du Nord sur le plan.",
        ],
      },
      {
        titre: "2. La règle d'orientation du plan",
        paras: [
          "Quand la flèche du Nord pointe vers le haut, le plan est bien orienté.",
          "Alors : le Nord est en haut, le Sud est en bas, l'Ouest est à gauche et l'Est est à droite.",
        ],
        exemples: [
          "Hery et son cousin tournent leur plan pour que la flèche N soit vers le haut : maintenant, ils voient tous les deux le portail en bas du plan.",
        ],
      },
      {
        titre: "3. Pourquoi orienter un plan ?",
        paras: [
          "Un plan peut être tourné dans tous les sens : sans la flèche du Nord, chacun le lit différemment.",
          "Avec la flèche du Nord, toute la classe lit le plan dans le même sens et trouve les mêmes directions.",
        ],
      },
    ],
  },
  motsCles: ["flèche du Nord", "orienter", "haut", "Nord"],
  questionsRevision: [
    ["Où place-t-on le Nord sur un plan ?", "En haut, indiqué par la flèche N."],
    ["Où se trouve l'Ouest sur un plan orienté ?", "À gauche."],
  ],
};

const S15 = {
  numero: 15, total: TOTAL,
  titre: "L'échelle d'un plan",
  theme: "Le plan",
  objectif: "Être capable d'expliquer, avec un exemple simple, ce qu'est l'échelle d'un plan.",
  image: { id: "geot4_echelle", legende: "2 m dans la réalité deviennent 2 cm sur le plan." },
  miseEnSituation: {
    texte: "Hery veut dessiner la table du maître sur son cahier. Il prend son double-décimètre et mesure : la table est si longue que deux élèves peuvent s'asseoir l'un en face de l'autre ! « Elle est bien trop grande pour mon cahier », dit-il. La maîtresse passe et murmure : « Alors réduis-la : dessine-la plus petite, mais garde les bonnes proportions. »",
    question: "Comment dessiner une grande table sur une petite feuille ?",
    ra: "On la réduit : on la dessine plus petite, en divisant toutes les mesures de la même façon.",
    support: "Schéma de l'échelle (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « L'échelle d'un plan ». Après cette séance, vous serez capables d'expliquer, avec un exemple simple, ce qu'est l'échelle d'un plan.",
  observation: "Regardez et observez bien le schéma qui montre la table du maître et son dessin sur le plan.",
  supportObservation: "Schéma de l'échelle (page Leçon)",
  analyse: [
    ["Dans notre exemple, combien mesure la table du maître ?", "Elle mesure 2 mètres."],
    ["Peut-on dessiner 2 mètres en vrai grandeur sur un cahier ?", "Non, le cahier est trop petit."],
    ["Que fait-on alors pour la dessiner ?", "On la réduit : on la dessine plus petite."],
    ["Sur notre plan, 2 mètres sont représentés par combien de centimètres ?", "Par 2 centimètres."],
    ["Alors, 1 centimètre sur le plan représente combien dans la réalité ?", "1 centimètre représente 1 mètre."],
    ["Comment s'appelle cette règle qui fait correspondre le plan et la réalité ?", "C'est l'échelle."],
  ],
  synthese: "Donc, comme un lieu est trop grand pour une feuille, on réduit toutes les mesures de la même façon : c'est l'échelle. Dans notre exemple, 1 cm sur le plan représente 1 m dans la réalité : la table de 2 m mesure 2 cm sur le plan.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Pourquoi réduit-on les mesures quand on dessine un plan ?",
        "2. Dans notre exemple, 1 cm sur le plan représente combien dans la réalité ?",
        "3. La table du maître mesure 2 m. Combien mesure-t-elle sur le plan ?",
        "4. Comment s'appelle la règle de réduction d'un plan ?",
      ],
      corrige: [
        "1. Parce que le lieu est **trop grand pour la feuille**.",
        "2. 1 cm sur le plan représente **1 m** dans la réalité.",
        "3. Elle mesure **2 cm** sur le plan.",
        "4. C'est **l'échelle**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. L'échelle sert à : A. réduire les mesures de la même façon — B. colorier le plan — C. compter les meubles",
        "2. Sur notre plan, une table de 3 m mesure : A. 3 cm — B. 30 cm — C. 3 m",
        "3. Une table de 1 m mesure sur le plan : A. 2 cm — B. 1 cm — C. 10 cm",
        "4. Sans échelle, le plan serait : A. plus joli — B. trop grand pour la feuille — C. plus petit",
      ],
      corrige: [
        "1. Réponse **A** : réduire les mesures de la même façon.",
        "2. Réponse **A** : 3 cm (1 cm pour chaque mètre).",
        "3. Réponse **B** : 1 cm.",
        "4. Réponse **B** : trop grand pour la feuille.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : échelle — réduire — 1 mètre — 2 cm.",
      items: [
        "Pour dessiner un lieu trop grand, on doit ……… toutes les mesures.",
        "Dans notre exemple, 1 cm sur le plan représente ……… dans la réalité.",
        "La table du maître de 2 m mesure ……… sur le plan.",
        "La règle de réduction du plan s'appelle l'……… .",
      ],
      corrige: ["**réduire** / **1 mètre** / **2 cm** / **échelle**."],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. L'échelle permet de dessiner de grands lieux sur une petite feuille.",
        "2. On réduit seulement les grandes tables, pas les pupitres.",
        "3. Dans notre exemple, 2 cm sur le plan représentent 2 m dans la réalité.",
        "4. Une porte de 2 m de haut mesure 2 cm sur le plan de notre exemple.",
      ],
      corrige: [
        "1. **Vrai**.",
        "2. **Faux** : on réduit **toutes** les mesures de la même façon.",
        "3. **Vrai**.",
        "4. **Vrai** : chaque mètre devient 1 cm.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Pourquoi réduire les mesures ?",
        paras: [
          "Une salle de classe, une école ou un village sont trop grands pour être dessinés en vrai grandeur sur une feuille.",
          "On dessine donc chaque chose plus petite : on dit que l'on réduit les mesures.",
        ],
      },
      {
        titre: "2. Qu'est-ce que l'échelle ?",
        paras: [
          "L'échelle, c'est la règle qui dit combien de centimètres sur le plan représentent un mètre dans la réalité.",
          "On réduit toutes les mesures de la même façon, pour que chaque chose garde la bonne place et les bonnes proportions.",
        ],
        exemples: [
          "Dans notre exemple : 1 cm sur le plan = 1 m dans la réalité.",
          "La table du maître de 2 m devient un rectangle de 2 cm.",
          "Une table de 3 m deviendrait un rectangle de 3 cm.",
        ],
      },
      {
        titre: "3. Vérifier avec son double-décimètre",
        paras: [
          "Après le dessin, on peut vérifier : on mesure le petit rectangle sur le plan avec le double-décimètre, et la vraie table avec le mètre ruban.",
          "Si chaque mètre de la réalité correspond bien à 1 cm sur le plan, l'échelle est respectée.",
        ],
      },
    ],
  },
  motsCles: ["échelle", "réduire", "1 cm sur le plan"],
  questionsRevision: [
    ["Qu'est-ce que l'échelle d'un plan ?", "C'est la règle qui dit combien de centimètres sur le plan représentent un mètre dans la réalité."],
    ["Dans notre exemple, la table de 2 m mesure combien sur le plan ?", "2 cm."],
  ],
};

const S16 = {
  numero: 16, total: TOTAL,
  titre: "La légende d'un plan",
  theme: "Le plan",
  objectif: "Être capable de dire ce qu'est la légende d'un plan et de lire une légende simple.",
  image: { id: "geot4_plan_ecole", legende: "La légende explique les signes du plan de l'école." },
  miseEnSituation: {
    texte: "Fanja trouve un vieux plan de l'école dans le bureau de son papa. Elle voit des rectangles, un rond, des points verts… « Mais lequel est la cantine ? Et ce rond, c'est quoi ? » Son papa sourit : « Cherche l'encart à côté du plan : tout est expliqué dedans. »",
    question: "Où trouver la signification des signes d'un plan ?",
    ra: "Dans l'encart à côté du plan, qui explique chaque signe.",
    support: "Plan de l'école avec sa légende (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « La légende d'un plan ». Après cette séance, vous serez capables de dire ce qu'est la légende et de lire une légende simple.",
  observation: "Regardez et observez bien le plan de l'école et l'encart placé à côté, avec les signes et leurs explications.",
  supportObservation: "Plan de l'école avec sa légende (page Leçon)",
  analyse: [
    ["Comment s'appelle l'encart placé à côté du plan ?", "C'est la légende."],
    ["À quoi sert la légende ?", "Elle explique la signification des signes et des couleurs du plan."],
    ["Sur ce plan, que représente la lettre A ?", "La lettre A représente les salles de classe."],
    ["Et le petit rond avec une croix, qu'est-ce que c'est ?", "C'est le puits."],
    ["Comment reconnaît-on la cantine sur ce plan ?", "C'est le bâtiment marqué de la lettre C, comme l'explique la légende."],
    ["Sans légende, Fanja peut-elle savoir où se trouve la cantine ?", "Non, elle ne sait pas ce que représentent les signes."],
  ],
  synthese: "Donc, la légende est l'encart qui explique la signification des signes et des couleurs d'un plan. Chaque signe de la légende correspond à une chose du lieu : sans légende, on ne peut pas lire le plan.",
  appExos: [
    {
      consigne: "Relie chaque signe de la liste 1 à sa signification de la liste 2 par une flèche.",
      items: [
        "Liste 1 : 1. La lettre A — 2. Le rond avec une croix — 3. Le rectangle jaune — 4. Le point vert",
        "Liste 2 : a. le puits — b. un arbre — c. les salles de classe — d. la cour de récréation",
      ],
      corrige: [
        "1 → **c** : la lettre A représente les salles de classe.",
        "2 → **a** : le rond avec une croix, c'est le puits.",
        "3 → **d** : le rectangle jaune, c'est la cour de récréation.",
        "4 → **b** : le point vert, c'est un arbre.",
      ],
    },
    {
      consigne: "Complète avec les mots : légende — signes — encart — couleurs.",
      items: [
        "La ……… explique la signification des signes du plan.",
        "C'est un ……… placé à côté du plan.",
        "Les ……… sont de petits dessins qui représentent les choses.",
        "La légende explique aussi le sens des ……… du plan.",
      ],
      corrige: ["**légende** / **encart** / **signes** / **couleurs**."],
    },
  ],
  evalExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que la légende d'un plan ?",
        "2. Où place-t-on la légende ?",
        "3. Peut-on lire un plan sans légende ? Pourquoi ?",
        "4. Sur le plan de l'école, comment reconnaît-on le bâtiment de la cantine ?",
      ],
      corrige: [
        "1. C'est **l'encart qui explique la signification des signes et des couleurs** d'un plan.",
        "2. On la place **à côté du plan**.",
        "3. **Non** : sans légende, on ne sait pas **ce que représentent les signes**.",
        "4. C'est le bâtiment marqué **de la lettre C**, comme l'explique la légende.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. La légende est un jeu pour la récréation.",
        "2. Chaque signe de la légende correspond à une chose du lieu.",
        "3. La légende se cache sous le plan.",
        "4. Les couleurs du plan peuvent aussi être expliquées dans la légende.",
      ],
      corrige: [
        "1. **Faux** : c'est l'encart qui explique les signes du plan.",
        "2. **Vrai**.",
        "3. **Faux** : elle est placée **à côté du plan**, bien visible.",
        "4. **Vrai**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Qu'est-ce qu'une légende ?",
        paras: [
          "La légende est l'encart qui explique la signification des signes et des couleurs employés sur un plan.",
          "Elle est placée à côté du plan, bien visible, pour aider à le lire.",
        ],
      },
      {
        titre: "2. Les signes et leurs couleurs",
        paras: [
          "Sur un plan, chaque chose est représentée par un signe : une lettre, une forme, une couleur.",
          "La légende donne le sens de chaque signe.",
        ],
        exemples: [
          "Sur le plan de l'école : A pour les salles de classe, B pour le bureau du directeur, C pour la cantine.",
          "Le rond avec une croix pour le puits, les points verts pour les arbres, le rectangle jaune pour la cour.",
        ],
      },
      {
        titre: "3. Lire un plan avec sa légende",
        paras: [
          "Pour lire un plan, on regarde d'abord la légende, puis on cherche les signes sur le plan.",
          "Ainsi, Fanja a trouvé la cantine : elle a cherché le bâtiment C, expliqué dans la légende.",
        ],
      },
    ],
  },
  motsCles: ["légende", "signes", "couleurs", "encart"],
  questionsRevision: [
    ["Qu'est-ce que la légende d'un plan ?", "C'est l'encart qui explique la signification des signes et des couleurs du plan."],
    ["Sans légende, peut-on lire un plan ?", "Non, on ne sait pas ce que représentent les signes."],
  ],
};

module.exports = { TOTAL, topics: [S11, S12, S13, S14, S15, S16] };
