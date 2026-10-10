// data-unite2b.js — UNITÉ 2 : LE PLAN (Séances 17 à 22, suite et fin)
const TOTAL = 76;

const S17 = {
  numero: 17, total: TOTAL,
  titre: "Réaliser le plan de la salle de classe",
  theme: "Le plan",
  objectif: "Être capable de réaliser le plan de la salle de classe en suivant les étapes : contour, flèche du Nord, meubles, légende.",
  image: { id: "geot4_plan_classe", legende: "Le plan terminé de la salle de classe." },
  scene: { file: "scene_s17_realiser_plan.jpg", mode: "illustration", legende: "Illustration : réaliser ensemble le plan de la salle de classe." },
  miseEnSituation: {
    texte: "La maîtresse annonce un grand défi : « Aujourd'hui, vous allez devenir de vrais dessinateurs de plans ! Chaque binôme va réaliser le plan de notre salle de classe. Les plus beaux plans seront affichés au mur. » Tiana serre son crayon : elle se souvient de tout ce que la classe a appris depuis deux semaines.",
    question: "Qu'avons-nous appris qui va nous servir pour réaliser ce plan ?",
    ra: "La vue de dessus, la flèche du Nord, les formes simples des meubles et la légende.",
    support: "Plan de la salle de classe (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Réaliser le plan de la salle de classe ». Après cette séance, vous serez capables de réaliser un plan complet de la classe, avec la flèche du Nord et la légende.",
  observation: "Regardez et observez bien la salle réelle autour de vous, puis le plan modèle : le contour, la porte, les fenêtres, les meubles.",
  supportObservation: "La salle de classe réelle et le plan modèle (page Leçon)",
  analyse: [
    ["Par quelle étape commence-t-on le plan ?", "On commence par dessiner le contour : les murs de la salle."],
    ["Qu'ajoute-t-on au contour ensuite ?", "On ajoute la porte et les fenêtres."],
    ["Quelle flèche faut-il dessiner pour orienter le plan ?", "La flèche du Nord, la lettre N, vers le haut."],
    ["Comment dessine-t-on les meubles ?", "Par des formes simples vues de dessus, placées à leur vraie place."],
    ["Qu'écrit-on à côté du plan pour l'expliquer ?", "On écrit la légende, qui donne le sens de chaque signe."],
    ["Que vérifie-t-on à la fin ?", "On vérifie que la flèche N est en haut, que chaque meuble est à sa place et que la légende est complète."],
  ],
  synthese: "Donc, pour réaliser le plan de la salle de classe : on dessine d'abord le contour des murs, puis la porte et les fenêtres ; on ajoute la flèche du Nord en haut ; on dessine les meubles par des formes simples vues de dessus ; enfin on écrit la légende et on vérifie tout.",
  appExos: [
    {
      consigne: "Sur une feuille, réalise le plan de notre salle de classe, puis vérifie-le avec ton voisin de table.",
      items: [
        "Dessine le contour des murs, la porte et les fenêtres.",
        "Ajoute la flèche du Nord (N) en haut du plan.",
        "Dessine les meubles par des formes simples vues de dessus.",
        "Écris la légende à côté du plan et le titre en haut.",
      ],
      corrige: [
        "Le plan attendu montre : le **contour** des murs, la **porte** et les **fenêtres**, la **flèche N en haut**, les **meubles** par des formes simples à leur place, une **légende** complète et un **titre**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. On commence le plan par dessiner les pupitres.",
        "2. La flèche du Nord doit être en haut du plan.",
        "3. La légende n'est pas utile sur un plan.",
        "4. On vérifie son plan en le comparant à la salle réelle.",
      ],
      corrige: [
        "1. **Faux** : on commence par **le contour des murs**.",
        "2. **Vrai**.",
        "3. **Faux** : sans légende, on ne peut pas lire le plan.",
        "4. **Vrai**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Écris 1, 2, 3, 4 pour ranger les étapes de la réalisation du plan de la classe.",
      items: [
        "……… On dessine les meubles par des formes simples vues de dessus.",
        "……… On dessine le contour des murs, la porte et les fenêtres.",
        "……… On écrit la légende et le titre.",
        "……… On ajoute la flèche du Nord en haut du plan.",
      ],
      corrige: [
        "Meubles : **3** / contour : **1** / légende et titre : **4** / flèche du Nord : **2**.",
      ],
    },
    {
      consigne: "Complète avec les mots : contour — Nord — légende — dessus.",
      items: [
        "On commence par dessiner le ……… des murs.",
        "La flèche du ……… oriente le plan.",
        "Les meubles sont dessinés par des formes simples vues de ……… .",
        "La ……… explique les signes du plan.",
      ],
      corrige: ["**contour** / **Nord** / **dessus** / **légende**."],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Le matériel nécessaire",
        paras: [
          "Pour réaliser le plan de la classe, il faut : une feuille de papier, un crayon, une règle, une gomme et son double-décimètre.",
        ],
      },
      {
        titre: "2. Les étapes de réalisation",
        paras: [
          "Étape 1 : on dessine le contour de la salle, c'est-à-dire les murs.",
          "Étape 2 : on ajoute la porte et les fenêtres sur le contour.",
          "Étape 3 : on dessine la flèche du Nord, la lettre N, en haut du plan.",
          "Étape 4 : on dessine chaque meuble par une forme simple vue de dessus, à sa vraie place.",
          "Étape 5 : on écrit la légende à côté du plan et le titre en haut.",
        ],
      },
      {
        titre: "3. Vérifier son plan",
        paras: [
          "On vérifie que la flèche N est bien en haut, que chaque meuble est à sa place et que la légende explique tous les signes.",
          "Un camarade relit le plan et signale les erreurs à corriger avant l'affichage.",
        ],
        exemples: [
          "Tiana et son binôme ont vérifié leur plan : ils avaient oublié une fenêtre, ils l'ont ajoutée avant de le rendre.",
        ],
      },
    ],
  },
  motsCles: ["contour", "flèche du Nord", "formes simples", "légende", "étapes"],
  questionsRevision: [
    ["Quelle est la première étape pour réaliser le plan de la classe ?", "Dessiner le contour des murs."],
    ["Qu'ajoute-t-on à la fin pour expliquer les signes du plan ?", "La légende."],
  ],
};

const S18 = {
  numero: 18, total: TOTAL,
  titre: "Le plan de l'école : les infrastructures",
  theme: "Le plan",
  objectif: "Être capable d'identifier les infrastructures de l'école sur un plan et de situer un bâtiment par rapport à un autre.",
  image: { id: "geot4_plan_ecole", legende: "Le plan de l'école : les bâtiments, la cour, le puits et le portail." },
  scene: { file: "scene_s18_plan_ecole.jpg", mode: "document", legende: "Document : les infrastructures de l'école : salles de classe, cour, puits, jardin." },
  miseEnSituation: {
    texte: "Jour de rentrée. Des parents cherchent la salle de leur enfant dans la cour. Le directeur a une idée : il affiche un grand plan à l'entrée de l'école. « Regardez : les salles de classe sont ici, le bureau est là, la cantine au bout… » Tout le monde trouve son chemin grâce au plan.",
    question: "Qu'est-ce qui aide les parents à trouver les bâtiments de l'école ?",
    ra: "Le plan de l'école affiché à l'entrée.",
    support: "Plan de l'école (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Le plan de l'école : les infrastructures ». Après cette séance, vous serez capables de nommer les infrastructures de l'école et de situer un bâtiment par rapport à un autre.",
  observation: "Regardez et observez bien le plan de l'école : les bâtiments, la cour, le puits et le portail.",
  supportObservation: "Plan de l'école (page Leçon)",
  analyse: [
    ["Quels bâtiments voit-on sur ce plan ?", "Les salles de classe (A), le bureau du directeur (B), la cantine (C) et les toilettes (D)."],
    ["Où se trouve la cour de récréation ?", "La cour est au milieu de l'école, entre les bâtiments."],
    ["Que représente le rond avec une croix ?", "C'est le puits."],
    ["Par où entre-t-on dans l'école ?", "On entre par le portail."],
    ["Situe la cantine par rapport aux salles de classe.", "La cantine est en bas du plan : elle est au Sud des salles de classe."],
    ["Situe le bureau du directeur par rapport aux salles de classe.", "Le bureau est à droite des salles de classe : il est à l'Est des salles de classe."],
  ],
  synthese: "Donc, le plan de l'école montre les infrastructures : les bâtiments comme les salles de classe, le bureau du directeur, la cantine et les toilettes, et aussi la cour, le puits et le portail. Grâce à la flèche du Nord, on peut situer chaque bâtiment par rapport à un autre.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Cite quatre infrastructures de l'école.",
        "2. Où se trouve la cour de récréation sur ce plan ?",
        "3. Par où entre-t-on dans l'école ?",
        "4. Situe les toilettes par rapport à la cantine.",
      ],
      corrige: [
        "1. Par exemple : **les salles de classe, le bureau du directeur, la cantine et les toilettes** (aussi la cour, le puits, le portail).",
        "2. La cour est **au milieu de l'école**, entre les bâtiments.",
        "3. On entre **par le portail**.",
        "4. Les toilettes sont **à l'Est de la cantine** (à droite sur le plan).",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Sur ce plan, la lettre B représente : A. la cantine — B. le bureau du directeur — C. les toilettes",
        "2. Le puits est représenté par : A. un rond avec une croix — B. un triangle — C. une flèche",
        "3. Le portail se trouve : A. au Nord du plan — B. au Sud du plan — C. au milieu de la cour",
        "4. Les salles de classe (A) sont : A. à l'Ouest du bureau (B) — B. à l'Est du bureau (B) — C. dans la cour",
      ],
      corrige: [
        "1. Réponse **B** : le bureau du directeur.",
        "2. Réponse **A** : un rond avec une croix.",
        "3. Réponse **B** : au Sud du plan, en bas.",
        "4. Réponse **A** : à l'Ouest du bureau.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : cour — portail — cantine — puits.",
      items: [
        "Les élèves jouent pendant la récréation dans la ……… .",
        "On entre dans l'école par le ……… .",
        "On mange à midi à la ……… .",
        "On tire de l'eau au ……… de l'école.",
      ],
      corrige: ["**cour** / **portail** / **cantine** / **puits**."],
    },
    {
      consigne: "Relie chaque lieu de la liste 1 à sa description de la liste 2 par une flèche.",
      items: [
        "Liste 1 : 1. Le bureau du directeur — 2. La cantine — 3. Les toilettes — 4. Les salles de classe",
        "Liste 2 : a. les bâtiments A du plan — b. le lieu où l'on mange à midi — c. le bureau B, à l'Est des classes — d. le petit bâtiment D",
      ],
      corrige: [
        "1 → **c** : le bureau du directeur est le bâtiment B.",
        "2 → **b** : la cantine est le lieu où l'on mange à midi.",
        "3 → **d** : les toilettes sont le petit bâtiment D.",
        "4 → **a** : les salles de classe sont les bâtiments A.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Les infrastructures de l'école",
        paras: [
          "Les infrastructures de l'école sont tout ce qui est construit ou aménagé : les bâtiments, la cour, le portail, le puits.",
          "Sur le plan de l'école, chaque infrastructure est représentée par un signe expliqué dans la légende.",
        ],
        exemples: [
          "Les salles de classe (A), le bureau du directeur (B), la cantine (C), les toilettes (D).",
          "La cour de récréation, le puits, le portail, les arbres.",
        ],
      },
      {
        titre: "2. Situer un bâtiment par rapport à un autre",
        paras: [
          "Grâce à la flèche du Nord, on peut dire la position d'un bâtiment : au Nord, au Sud, à l'Est ou à l'Ouest d'un autre.",
          "On peut aussi dire : à côté de, en face de, près de, loin de.",
        ],
        exemples: [
          "« La cantine est au Sud des salles de classe. »",
          "« Le bureau du directeur est à l'Est des salles de classe. »",
        ],
      },
      {
        titre: "3. À quoi sert le plan de l'école ?",
        paras: [
          "Il aide les élèves, les parents et les visiteurs à trouver leur chemin dans l'école.",
          "Il sert aussi à préparer les travaux : si l'école fait construire une nouvelle salle, on la place d'abord sur le plan.",
        ],
      },
    ],
  },
  motsCles: ["infrastructures", "bâtiments", "cour", "portail", "puits"],
  questionsRevision: [
    ["Cite trois infrastructures de l'école.", "Par exemple : les salles de classe, la cantine et le portail."],
    ["Comment situer un bâtiment par rapport à un autre sur un plan ?", "Avec les points cardinaux : au Nord, au Sud, à l'Est ou à l'Ouest."],
  ],
};

const S19 = {
  numero: 19, total: TOTAL,
  titre: "Situer l'école dans son environnement",
  theme: "Le plan",
  objectif: "Être capable d'indiquer la position de l'école par rapport aux lieux connus du quartier (marché, église, bureau du Fokontany, route).",
  image: { id: "geot4_itineraire", legende: "Le quartier autour de l'école : marché, église, Fokontany, routes." },
  scene: { file: "scene_s19_situer_ecole.jpg", mode: "document", legende: "Document : situer l'école dans son environnement : marché, église, routes et rizières." },
  miseEnSituation: {
    texte: "Le cousin de Sitraka arrive au village pour la première fois. À la gare routière, il demande : « Où est l'école ? » Sitraka réfléchit, puis répond : « C'est facile : monte la grande route, l'école est en face du côté du marché, au Nord de l'église. » Son cousin sourit : « Avec toutes ces indications, je ne peux pas me perdre ! »",
    question: "Quels lieux connus Sitraka a-t-il utilisés pour expliquer le chemin ?",
    ra: "La grande route, le marché et l'église.",
    support: "Plan du quartier (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Situer l'école dans son environnement ». Après cette séance, vous serez capables d'indiquer la position de l'école par rapport aux lieux connus du quartier.",
  observation: "Regardez et observez bien le plan du quartier autour de l'école : les lieux et les routes.",
  supportObservation: "Plan du quartier (page Leçon)",
  analyse: [
    ["Par rapport à quels lieux peut-on situer l'école ?", "Par rapport au marché, à l'église, au bureau du Fokontany et à la grande route."],
    ["Sur ce plan, où se trouve le marché par rapport à l'école ?", "Le marché est en bas du plan : il est au Sud de l'école."],
    ["Où se trouve l'église par rapport à l'école ?", "L'église est à gauche du plan : elle est à l'Ouest de l'école."],
    ["Pourquoi la grande route aide-t-elle à se repérer ?", "Parce que tout le monde connaît la route et qu'elle ne change pas de place."],
    ["Comment s'appelle l'espace autour de l'école, avec les maisons et les lieux ?", "C'est le quartier."],
    ["Quelle phrase peut dire la position de l'école sur ce plan ?", "L'école est au Nord du marché (ou : à l'Est de l'église, près de la grande route)."],
  ],
  synthese: "Donc, pour situer l'école, on la place par rapport aux lieux connus du quartier : le marché, l'église, le bureau du Fokontany, la grande route. On utilise les points cardinaux pour dire la position : par exemple, « l'école est au Nord du marché ».",
  appExos: [
    {
      consigne: "Complète avec les mots : Nord — marché — route — quartier.",
      items: [
        "L'espace autour de l'école, avec les maisons et les lieux, s'appelle le ……… .",
        "Sur notre plan, l'école est au ……… du marché.",
        "Le bureau du Fokontany se trouve près de la grande ……… .",
        "Pour situer l'école, on peut dire : « l'école est à côté du ……… ».",
      ],
      corrige: ["**quartier** / **Nord** / **route** / **marché**."],
    },
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Cite deux lieux qui aident à situer l'école dans le quartier.",
        "2. Sur notre plan, où est l'église par rapport à l'école ?",
        "3. Pourquoi la grande route est-elle un bon repère ?",
        "4. Invente une phrase pour situer ton école dans ton quartier.",
      ],
      corrige: [
        "1. Par exemple : **le marché et l'église** (aussi le bureau du Fokontany, la grande route).",
        "2. L'église est **à l'Ouest de l'école**.",
        "3. Parce que **tout le monde la connaît** et qu'elle **ne change pas de place**.",
        "4. Réponse personnelle, par exemple : **« Mon école est au Nord du marché, à côté de la grande route. »**",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. On peut situer l'école par rapport au marché.",
        "2. Sur notre plan, le marché est au Nord de l'école.",
        "3. La grande route peut servir de repère pour situer l'école.",
        "4. Le quartier est l'espace autour de l'école.",
      ],
      corrige: [
        "1. **Vrai**.",
        "2. **Faux** : le marché est **au Sud** de l'école.",
        "3. **Vrai**.",
        "4. **Vrai**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Situer un lieu, c'est : A. dire sa position par rapport à un autre lieu — B. le dessiner en couleurs — C. le compter",
        "2. Sur notre plan, l'école est à l'……… de l'église. : A. Ouest — B. Est — C. Sud",
        "3. Le bureau du Fokontany est : A. un lieu connu du quartier — B. un jeu — C. une école",
        "4. Pour dire la position, on utilise : A. les points cardinaux — B. les couleurs du crayon — C. les prénoms",
      ],
      corrige: [
        "1. Réponse **A**.",
        "2. Réponse **B** : à l'Est de l'église.",
        "3. Réponse **A** : un lieu connu du quartier.",
        "4. Réponse **A** : les points cardinaux.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Situer, c'est comparer les places",
        paras: [
          "Situer un lieu, c'est dire sa position par rapport à un autre lieu que tout le monde connaît.",
          "On utilise les points cardinaux : au Nord, au Sud, à l'Est, à l'Ouest ; ou des expressions comme à côté de, en face de, près de.",
        ],
      },
      {
        titre: "2. Les lieux de repère du quartier",
        paras: [
          "Les lieux connus du quartier aident à situer l'école : le marché, l'église, la mosquée, le bureau du Fokontany, la grande route.",
          "Ces lieux sont de bons repères parce que tout le monde les connaît et qu'ils ne changent pas de place.",
        ],
        exemples: [
          "« L'école est au Nord du marché. »",
          "« L'école est à l'Est de l'église, près de la grande route. »",
        ],
      },
      {
        titre: "3. Expliquer le chemin à un visiteur",
        paras: [
          "Avec ces repères, on peut expliquer le chemin de l'école à un visiteur, comme Sitraka l'a fait pour son cousin.",
          "On peut aussi tracer le chemin sur un plan : c'est ce que nous ferons à la séance suivante.",
        ],
      },
    ],
  },
  motsCles: ["situer", "quartier", "par rapport à", "points cardinaux"],
  questionsRevision: [
    ["Que veut dire « situer un lieu » ?", "Dire sa position par rapport à un autre lieu connu."],
    ["Cite deux lieux de repère du quartier.", "Par exemple : le marché et l'église."],
  ],
};

const S20 = {
  numero: 20, total: TOTAL,
  titre: "Le plan du quartier et l'itinéraire maison–école",
  theme: "Le plan",
  objectif: "Être capable d'identifier les lieux principaux du quartier et de tracer l'itinéraire de la maison à l'école sur un plan.",
  image: { id: "geot4_itineraire", legende: "L'itinéraire de la maison à l'école, en pointillés rouges." },
  scene: { file: "scene_s20_itineraire.jpg", mode: "document", legende: "Document : l'itinéraire de la maison à l'école : le chemin, la rivière, le grand arbre." },
  miseEnSituation: {
    texte: "C'est la première fois que la petite Voahary ira à l'école toute seule. Son grand frère prend le plan du quartier et un crayon rouge : « Regarde bien, je trace notre chemin. On sort de la maison, on monte la ruelle jusqu'à la grande route, on tourne à droite, puis on remonte jusqu'à l'école. Tu n'as qu'à suivre les pointillés rouges ! »",
    question: "Que montre le frère de Voahary sur le plan du quartier ?",
    ra: "Le chemin de la maison à l'école, tracé en pointillés rouges.",
    support: "Plan du quartier avec itinéraire (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Le plan du quartier et l'itinéraire maison–école ». Après cette séance, vous serez capables de nommer les lieux principaux du quartier et de tracer un itinéraire simple sur un plan.",
  observation: "Regardez et observez bien le plan du quartier : les lieux, les routes et la ligne rouge en pointillés.",
  supportObservation: "Plan du quartier avec itinéraire (page Leçon)",
  analyse: [
    ["Quels lieux principaux voit-on sur ce plan du quartier ?", "La maison, l'école, l'église, le marché, le bureau du Fokontany et les routes."],
    ["Que représente la ligne rouge en pointillés ?", "Elle représente l'itinéraire de la maison à l'école."],
    ["D'où part cet itinéraire ?", "Il part de la maison."],
    ["Où arrive-t-il ?", "Il arrive à l'école."],
    ["Pourquoi l'itinéraire suit-il les routes ?", "Parce qu'on marche sur les chemins et les routes, pas à travers les maisons."],
    ["Comment appelle-t-on le chemin que l'on suit pour aller d'un endroit à un autre ?", "C'est un itinéraire."],
  ],
  synthese: "Donc, sur le plan du quartier, on peut tracer l'itinéraire de la maison à l'école : c'est le chemin que l'on suit, en passant par les ruelles et les routes. L'itinéraire part de la maison et arrive à l'école. Un itinéraire se trace en pointillés ou avec une flèche, et on cherche souvent le chemin le plus court.",
  appExos: [
    {
      consigne: "Écris 1, 2, 3, 4 pour ranger les étapes du trajet de Voahary.",
      items: [
        "……… Elle tourne et remonte la rue jusqu'à l'école.",
        "……… Elle sort de la maison.",
        "……… Elle arrive à l'école.",
        "……… Elle monte la ruelle jusqu'à la grande route.",
      ],
      corrige: [
        "Tourne et remonte : **3** / sort de la maison : **1** / arrive : **4** / monte la ruelle : **2**.",
      ],
    },
    {
      consigne: "Relie chaque mot de la liste 1 à sa définition de la liste 2 par une flèche.",
      items: [
        "Liste 1 : 1. Un itinéraire — 2. Le quartier — 3. Le plan — 4. La légende",
        "Liste 2 : a. l'encart qui explique les signes — b. le chemin que l'on suit pour aller d'un endroit à un autre — c. le dessin d'un lieu vu de dessus — d. l'espace autour de l'école, avec les maisons et les lieux",
      ],
      corrige: [
        "1 → **b** : un itinéraire est le chemin que l'on suit.",
        "2 → **d** : le quartier est l'espace autour de l'école.",
        "3 → **c** : le plan est le dessin d'un lieu vu de dessus.",
        "4 → **a** : la légende explique les signes.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'un itinéraire ?",
        "2. D'où part et où arrive l'itinéraire maison–école ?",
        "3. Pourquoi l'itinéraire suit-il les routes ?",
        "4. Cite trois lieux principaux que l'on peut voir sur un plan du quartier.",
      ],
      corrige: [
        "1. Un itinéraire est **le chemin que l'on suit pour aller d'un endroit à un autre**.",
        "2. Il **part de la maison** et **arrive à l'école**.",
        "3. Parce qu'on **marche sur les chemins et les routes**, pas à travers les maisons.",
        "4. Par exemple : **l'école, le marché et l'église** (aussi le bureau du Fokontany).",
      ],
    },
    {
      consigne: "Complète avec les mots : itinéraire — maison — école — pointillés.",
      items: [
        "Le chemin de la maison à l'école s'appelle l'……… .",
        "L'itinéraire maison–école part de la ……… .",
        "Il arrive à l'……… .",
        "Sur le plan, on trace l'itinéraire en ……… rouges.",
      ],
      corrige: ["**itinéraire** / **maison** / **école** / **pointillés**."],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Les lieux principaux du quartier",
        paras: [
          "Sur le plan du quartier, on trouve les lieux principaux : l'école, le marché, l'église, la mosquée, le bureau du Fokontany, les routes et parfois la rivière.",
          "Chaque lieu est représenté par un signe expliqué dans la légende.",
        ],
      },
      {
        titre: "2. Qu'est-ce qu'un itinéraire ?",
        paras: [
          "Un itinéraire, c'est le chemin que l'on suit pour aller d'un endroit à un autre.",
          "L'itinéraire maison–école est le chemin que l'élève suit chaque jour pour aller en classe.",
        ],
      },
      {
        titre: "3. Tracer l'itinéraire sur le plan",
        paras: [
          "Pour tracer un itinéraire, on part de la maison, on suit les ruelles et les routes, et on marque l'arrivée à l'école d'une flèche.",
          "On trace l'itinéraire en pointillés ou en couleur, pour bien le voir sur le plan.",
          "On cherche souvent le chemin le plus court, mais un chemin sûr : celui où l'on peut marcher sans danger.",
        ],
        exemples: [
          "Le grand frère de Voahary a tracé les pointillés rouges : sortir de la maison, monter la ruelle, suivre la grande route, remonter jusqu'à l'école.",
        ],
      },
    ],
  },
  motsCles: ["itinéraire", "quartier", "chemin", "le plus court"],
  questionsRevision: [
    ["Qu'est-ce qu'un itinéraire ?", "C'est le chemin que l'on suit pour aller d'un endroit à un autre."],
    ["Comment trace-t-on un itinéraire sur un plan ?", "En pointillés ou en couleur, en suivant les routes, avec une flèche à l'arrivée."],
  ],
};

const S21 = {
  numero: 21, total: TOTAL,
  titre: "Le plan du village ou de la ville",
  theme: "Le plan",
  objectif: "Être capable d'identifier les éléments principaux du plan d'un village ou d'une ville et de dire ce qui distingue un village d'une ville.",
  image: { id: "geot4_plan_village", legende: "Le plan d'un village : bâtiments, routes, rivière, pont et rizières." },
  scene: { file: "scene_s21_plan_village.jpg", mode: "document", legende: "Document : le village vu d'en haut, comme sur un plan : école, marché, église, rizières." },
  miseEnSituation: {
    texte: "Tantely revient au village pour les vacances après un an en ville. Assise sur la colline, elle regarde le village en contrebas : l'école, l'église, la mosquée, le marché, la rivière qui brille et les rizières vertes. « Tout mon village tient dans mon regard, dit-elle. Sur un plan, je pourrais le dessiner tout entier ! »",
    question: "Quels lieux Tantely voit-elle depuis la colline ?",
    ra: "L'école, l'église, la mosquée, le marché, la rivière et les rizières.",
    support: "Plan du village (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Le plan du village ou de la ville ». Après cette séance, vous serez capables d'identifier les éléments du plan d'un village ou d'une ville et de dire ce qui les distingue.",
  observation: "Regardez et observez bien le plan du village : les bâtiments, les routes, la rivière, le pont et les rizières.",
  supportObservation: "Plan du village (page Leçon)",
  analyse: [
    ["Quels lieux reconnais-tu sur ce plan de village ?", "L'école, l'église, la mosquée, le marché, le terrain de foot, les maisons, la rivière et les rizières."],
    ["Quel élément naturel traverse le village ?", "C'est la rivière."],
    ["Comment passe-t-on d'une rive à l'autre de la rivière ?", "On passe par le pont."],
    ["Où se trouvent les rizières sur ce plan ?", "Les rizières sont au Sud de la rivière, en bas du plan."],
    ["Comment sont reliés les quartiers du village ?", "Ils sont reliés par les routes."],
    ["Quelle est la différence entre un village et une ville ?", "La ville a beaucoup plus de bâtiments, de routes et d'habitants que le village."],
  ],
  synthese: "Donc, le plan d'un village montre ses éléments principaux : les bâtiments comme l'école, l'église et le marché, les routes, la rivière et le pont, les champs et les rizières. Le plan d'une ville ressemble au plan d'un village, mais avec beaucoup plus de bâtiments, de routes et de quartiers.",
  appExos: [
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Sur ce plan, la rivière traverse le village.",
        "2. Le pont sert à traverser la route.",
        "3. Les rizières se trouvent au Sud de la rivière sur ce plan.",
        "4. Une ville a moins de bâtiments qu'un village.",
      ],
      corrige: [
        "1. **Vrai**.",
        "2. **Faux** : le pont sert à **traverser la rivière**.",
        "3. **Vrai**.",
        "4. **Faux** : la ville a **beaucoup plus** de bâtiments.",
      ],
    },
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Cite trois lieux que l'on voit sur le plan du village.",
        "2. À quoi sert le pont ?",
        "3. Quels éléments naturels peut-on voir sur un plan de village ?",
        "4. Quelle est la différence entre un village et une ville ?",
      ],
      corrige: [
        "1. Par exemple : **l'école, l'église et le marché** (aussi la mosquée, le terrain de foot).",
        "2. Le pont sert à **traverser la rivière**.",
        "3. Par exemple : **la rivière** et **les rizières** (aussi les collines, la forêt).",
        "4. La ville a **beaucoup plus de bâtiments, de routes, de quartiers et d'habitants** que le village.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : pont — rivière — rizières — routes.",
      items: [
        "Pour traverser la rivière, on passe par le ……… .",
        "L'élément naturel qui traverse le village est la ……… .",
        "Les champs de riz s'appellent les ……… .",
        "Les quartiers du village sont reliés par les ……… .",
      ],
      corrige: ["**pont** / **rivière** / **rizières** / **routes**."],
    },
    {
      consigne: "Relie chaque élément de la liste 1 à sa description de la liste 2 par une flèche.",
      items: [
        "Liste 1 : 1. Le pont — 2. La rivière — 3. Le marché — 4. Les rizières",
        "Liste 2 : a. les champs où l'on cultive le riz — b. l'endroit où l'on traverse la rivière — c. le lieu où l'on vend et où l'on achète — d. l'eau qui traverse le village",
      ],
      corrige: [
        "1 → **b** : le pont est l'endroit où l'on traverse la rivière.",
        "2 → **d** : la rivière est l'eau qui traverse le village.",
        "3 → **c** : le marché est le lieu où l'on vend et où l'on achète.",
        "4 → **a** : les rizières sont les champs de riz.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Les éléments du plan d'un village",
        paras: [
          "Le plan d'un village rassemble les lieux principaux : les bâtiments comme l'école, l'église, la mosquée et le marché, les maisons, le terrain de foot.",
          "Il montre aussi les routes, la rivière, le pont et les rizières.",
        ],
      },
      {
        titre: "2. Le pont et la rivière",
        paras: [
          "Quand une rivière traverse un village, on la dessine comme un ruban bleu sur le plan.",
          "Le pont est l'endroit où la route traverse la rivière : sur le plan, il se trouve au croisement de la route et de la rivière.",
        ],
      },
      {
        titre: "3. Village ou ville ?",
        paras: [
          "Dans un village, il y a surtout des maisons, des champs et quelques bâtiments : le plan est simple.",
          "Dans une ville, il y a beaucoup de bâtiments, de grandes routes et plusieurs quartiers : le plan est plus chargé.",
          "Mais dans les deux cas, le plan se lit de la même façon : flèche du Nord en haut, légende à côté, signes simples.",
        ],
        exemples: [
          "Sur le plan du village de Tantely, on compte une école, une église, une mosquée et un marché ; sur le plan d'une grande ville, on compterait des dizaines de rues et de quartiers.",
        ],
      },
    ],
  },
  motsCles: ["village", "ville", "rivière", "pont", "rizières", "quartiers"],
  questionsRevision: [
    ["Quelle est la différence entre un village et une ville ?", "La ville a beaucoup plus de bâtiments, de routes, de quartiers et d'habitants."],
    ["Où se trouve le pont sur un plan de village ?", "Au croisement de la route et de la rivière."],
  ],
};

const S22 = {
  numero: 22, total: TOTAL,
  titre: "Réaliser un plan simple avec légende",
  theme: "Le plan",
  objectif: "Être capable de réaliser un plan simple, avec la flèche du Nord, une légende et un titre, en suivant toutes les étapes.",
  image: { id: "geot4_plan_village", legende: "Un plan complet : titre, flèche du Nord, signes simples et légende." },
  scene: { file: "scene_s22_plan_legende.jpg", mode: "illustration", legende: "Illustration : un plan de village terminé, avec sa légende." },
  miseEnSituation: {
    texte: "Pour la fête de fin d'année, la classe prépare une exposition : « Les plans de notre quartier ». Chaque groupe choisira un lieu — la salle de classe, l'école, le chemin de la maison à l'école ou le village — et réalisera un plan simple avec une légende. Les parents viendront voir les plans et deviner les lieux !",
    question: "Que doit contenir un plan complet pour être lu par tout le monde ?",
    ra: "Un titre, la flèche du Nord, des signes simples et une légende.",
    support: "Plan du village (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Réaliser un plan simple avec légende ». Après cette séance, vous serez capables de réaliser, en groupe, un plan complet d'un lieu que vous choisissez.",
  observation: "Regardez et observez bien le plan du village : tout ce qu'il contient — le titre, la flèche du Nord, les signes et la légende.",
  supportObservation: "Plan du village (page Leçon)",
  analyse: [
    ["Que choisit-on en premier pour réaliser un plan ?", "On choisit d'abord le lieu à dessiner."],
    ["Comment dessine-t-on ce lieu ?", "On le dessine vu de dessus, avec des formes simples."],
    ["Qu'ajoute-t-on pour orienter le plan ?", "On ajoute la flèche du Nord, la lettre N, en haut."],
    ["Qu'écrit-on pour expliquer les signes ?", "On écrit la légende."],
    ["Que met-on au-dessus du plan ?", "On écrit le titre du plan."],
    ["Que vérifie-t-on à la fin ?", "On vérifie la flèche N, la légende, le titre et la place de chaque élément."],
  ],
  synthese: "Donc, pour réaliser un plan simple : on choisit le lieu, on le dessine vu de dessus avec des formes simples, on ajoute la flèche du Nord en haut, on écrit la légende à côté et le titre au-dessus, puis on vérifie tout. Un plan complet peut alors être lu par tout le monde.",
  appExos: [
    {
      consigne: "En groupe, réalisez un plan simple du lieu de votre choix (salle de classe, école, quartier ou village), puis présentez-le à la classe.",
      items: [
        "Choisissez le lieu et dessinez-le vu de dessus, avec des formes simples.",
        "Ajoutez la flèche du Nord en haut du plan.",
        "Écrivez la légende à côté et le titre au-dessus.",
        "Présentez votre plan : un élève du groupe explique la légende aux autres.",
      ],
      corrige: [
        "Le plan attendu contient : un **titre**, le lieu dessiné **vu de dessus** avec des formes simples, la **flèche N en haut**, une **légende** complète, et il est **présenté à la classe**.",
      ],
    },
    {
      consigne: "Écris 1, 2, 3, 4 pour ranger les étapes de la réalisation d'un plan.",
      items: [
        "……… On écrit la légende et le titre.",
        "……… On choisit le lieu à dessiner.",
        "……… On vérifie la flèche N, la légende et la place de chaque élément.",
        "……… On dessine le lieu vu de dessus avec la flèche du Nord.",
      ],
      corrige: [
        "Légende et titre : **3** / choix du lieu : **1** / vérification : **4** / dessin avec flèche N : **2**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Que choisit-on en premier quand on réalise un plan ?",
        "2. Quelle flèche doit-on toujours dessiner sur un plan ?",
        "3. Où écrit-on la légende ?",
        "4. Cite les quatre choses à vérifier à la fin d'un plan.",
      ],
      corrige: [
        "1. On choisit d'abord **le lieu à dessiner**.",
        "2. Il faut toujours dessiner **la flèche du Nord (N)**.",
        "3. On l'écrit **à côté du plan**.",
        "4. La **flèche N**, la **légende**, le **titre** et **la place de chaque élément**.",
      ],
    },
    {
      consigne: "Complète avec les mots : titre — légende — dessus — Nord.",
      items: [
        "Un plan se dessine toujours vu de ……… .",
        "La flèche du ……… oriente le plan.",
        "La ……… explique les signes du plan.",
        "Le ……… s'écrit au-dessus du plan.",
      ],
      corrige: ["**dessus** / **Nord** / **légende** / **titre**."],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Choisir son lieu",
        paras: [
          "On choisit un lieu que l'on connaît bien et que l'on peut observer : la salle de classe, l'école, le chemin de la maison à l'école ou le village.",
          "On observe bien le lieu avant de commencer le dessin.",
        ],
      },
      {
        titre: "2. Les étapes de réalisation",
        paras: [
          "Étape 1 : choisir le lieu et l'observer.",
          "Étape 2 : dessiner le lieu vu de dessus, avec des formes simples.",
          "Étape 3 : ajouter la flèche du Nord (N) en haut du plan.",
          "Étape 4 : écrire la légende à côté et le titre au-dessus.",
          "Étape 5 : vérifier la flèche N, la légende, le titre et la place de chaque élément.",
        ],
      },
      {
        titre: "3. Présenter son plan",
        paras: [
          "Un membre du groupe présente le plan à la classe : il dit le titre, montre la flèche du Nord et explique la légende.",
          "Les camarades posent des questions et devinent le lieu si le titre est caché.",
        ],
        exemples: [
          "Pour l'exposition, chaque groupe a affiché son plan : les parents ont reconnu l'école, la place du marché et le chemin de la rivière.",
        ],
      },
    ],
  },
  motsCles: ["plan simple", "titre", "flèche du Nord", "légende", "vérifier"],
  questionsRevision: [
    ["Cite les cinq étapes pour réaliser un plan simple.", "Choisir le lieu, le dessiner vu de dessus, ajouter la flèche N, écrire la légende et le titre, tout vérifier."],
    ["Que met-on au-dessus d'un plan ?", "Le titre."],
  ],
};

module.exports = { topics: [S17, S18, S19, S20, S21, S22] };
