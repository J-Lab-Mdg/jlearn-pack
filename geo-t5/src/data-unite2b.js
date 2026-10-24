// data-unite2b.js — UNITÉ 2 (suite) : Séances 21 à 24
// Contenu rédactionnel conforme au Programme d'études officiel T5 — Géographie
const TOTAL = 76;

const S21 = {
  numero: 21, total: TOTAL,
  titre: "Les îles voisines de l'océan Indien",
  theme: "L'île de Madagascar dans le monde",
  objectif: "Être capable de citer et de situer les îles voisines de Madagascar dans l'océan Indien.",
  image: { id: "geo5_iles_voisines", legende: "Madagascar au centre, entourée de ses îles voisines : Comores, Mayotte, Seychelles, Maurice, La Réunion, Maldives." },
  scene: { file: "scene_s21_iles_voisines.jpg", mode: "document", legende: "Document : Rakoto et Soa cherchent les îles voisines sur la grande carte de l'océan Indien." },
  revisionOuverture: [
    ["Cite trois îles éparses.", "Les Glorieuses, Juan de Nova et Europa (aussi Bassas da India et Tromelin)."],
    ["Où se trouve le canal de Mozambique ?", "Entre Madagascar et le continent africain."],
  ],
  miseEnSituation: {
    texte: "Ce soir, toute la famille de Rakoto regarde l'ouverture des Jeux des îles de l'océan Indien à la télévision. Les délégations défilent une par une : Madagascar bien sûr, puis les Comores, Maurice, La Réunion, les Seychelles, les Maldives… « Comme nous avons beaucoup de voisins dans l'océan Indien ! », s'exclame Rakoto.",
    question: "Quelles sont les îles voisines de Madagascar ?",
    ra: "Les Comores, Mayotte, les Seychelles, Maurice, La Réunion et les Maldives.",
    support: "Carte de l'océan Indien et schéma (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les îles voisines de l'océan Indien ». Après cette séance, vous serez capables de citer les îles voisines de Madagascar et de les situer.",
  observation: "Observez bien le schéma : Madagascar est au centre, et des points orange marquent les îles voisines tout autour.",
  supportObservation: "Schéma de l'océan Indien (page Leçon)",
  analyse: [
    ["Quelles îles voisines se trouvent au nord-ouest de Madagascar ?", "Les Comores et Mayotte."],
    ["Quelle île voisine se trouve au nord de Madagascar ?", "Les Seychelles."],
    ["Quelles îles se trouvent à l'est de Madagascar ?", "Maurice et La Réunion."],
    ["Où se trouvent les Maldives ?", "Au nord-est de Madagascar, loin dans l'océan Indien."],
    ["Quelle est la plus grande île de l'océan Indien ?", "C'est Madagascar, la Grande Île."],
    ["Comment s'appelle la réunion sportive des îles de l'océan Indien ?", "Les Jeux des îles de l'océan Indien."],
  ],
  synthese: "Donc, Madagascar est entourée d'îles voisines : les Comores et Mayotte au nord-ouest, les Seychelles au nord, Maurice et La Réunion à l'est, et les Maldives au nord-est. Madagascar reste la plus grande île de l'océan Indien.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Quelles îles se trouvent au nord-ouest de Madagascar ?",
        "2. Quelle île se trouve au nord de Madagascar ?",
        "3. Quelles îles se trouvent à l'est de Madagascar ?",
        "4. Quelle est la plus grande île de l'océan Indien ?",
      ],
      corrige: [
        "1. Les **Comores** et **Mayotte** se trouvent au nord-ouest.",
        "2. Les **Seychelles** se trouvent au nord.",
        "3. **Maurice** et **La Réunion** se trouvent à l'est.",
        "4. C'est **Madagascar**, la Grande Île.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Maurice se trouve à l'ouest de Madagascar.",
        "2. Les Maldives sont des îles voisines de Madagascar.",
        "3. Les Seychelles se trouvent au nord.",
        "4. Mayotte se trouve à l'est de Madagascar.",
      ],
      corrige: [
        "1. **Faux** : Maurice se trouve à l'est.",
        "2. **Vrai** : elles se trouvent au nord-est de Madagascar.",
        "3. **Vrai** : les Seychelles sont au nord.",
        "4. **Faux** : Mayotte se trouve au nord-ouest.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : Comores — Seychelles — Maurice — Maldives.",
      items: [
        "Au nord-ouest de Madagascar se trouvent les ……… .",
        "Au nord se trouvent les ……… .",
        "À l'est se trouvent Maurice et ……… .",
        "Au nord-est se trouvent les ……… .",
      ],
      corrige: [
        "les **Comores** (et Mayotte) / les **Seychelles** / Maurice et **La Réunion** / les **Maldives**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Mayotte se trouve : A. au nord-ouest — B. à l'est — C. au sud",
        "2. Maurice se trouve : A. au nord — B. à l'est — C. à l'ouest",
        "3. La plus grande île de l'océan Indien est : A. Maurice — B. les Seychelles — C. Madagascar",
        "4. Les Jeux des îles de l'océan Indien réunissent : A. les îles voisines — B. les pays d'Afrique — C. les pays d'Europe",
      ],
      corrige: [
        "1. Réponse **A** : Mayotte est au nord-ouest de Madagascar.",
        "2. Réponse **B** : Maurice est à l'est.",
        "3. Réponse **C** : Madagascar est la plus grande.",
        "4. Réponse **A** : les îles voisines de l'océan Indien.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Des voisines dans l'océan Indien",
        paras: [
          "Madagascar n'est pas seule dans l'océan Indien : des îles voisines l'entourent.",
          "Au nord-ouest, on trouve les Comores et Mayotte ; au nord, les Seychelles ; à l'est, Maurice et La Réunion ; au nord-est, les Maldives.",
        ],
        exemples: [
          "De Diego, au nord de Madagascar, les Comores ne sont pas très loin en bateau.",
        ],
      },
      {
        titre: "2. Des îles différentes",
        paras: [
          "Ces îles voisines sont plus petites que la Grande Île. Certaines sont des pays, comme Maurice, les Seychelles et les Comores.",
          "La Réunion, elle, est une île montagneuse et volcanique. Les Maldives sont des îles très plates, formées de corail, presque au niveau de la mer.",
        ],
        exemples: [
          "Les plages des Maldives sont des bancs de sable blanc posés sur des récifs de corail.",
          "Le piton des Neiges, à La Réunion, culmine à plus de 3 000 mètres.",
        ],
      },
      {
        titre: "3. Madagascar, la plus grande",
        paras: [
          "Avec ses 590 000 kilomètres carrés, Madagascar est de loin la plus grande île de l'océan Indien.",
          "Ses voisines et elle échangent des visiteurs, des marchandises et des équipes sportives, comme aux Jeux des îles de l'océan Indien.",
        ],
        exemples: [
          "Aux Jeux des îles, les sportifs malgaches rencontrent ceux de Maurice, des Seychelles et des Comores.",
        ],
      },
    ],
  },
  motsCles: ["Comores", "Mayotte", "Seychelles", "Maurice", "La Réunion", "Maldives"],
  questionsRevision: [
    ["Cite trois îles voisines de Madagascar.", "Les Comores, Maurice et La Réunion (aussi Mayotte, les Seychelles et les Maldives)."],
    ["Quelle est la plus grande île de l'océan Indien ?", "Madagascar."],
  ],
};

const S22 = {
  numero: 22, total: TOTAL,
  titre: "Lire une carte de Madagascar",
  theme: "L'île de Madagascar dans le monde",
  objectif: "Être capable de repérer les éléments d'une carte de Madagascar et de les utiliser.",
  image: { id: "geo5_lire_carte_mada", legende: "Les éléments d'une carte de Madagascar : titre, légende, échelle, orientation, source et date." },
  scene: { file: "scene_s22_lire_carte_mada.jpg", mode: "document", legende: "Document : un élève mesure les distances sur une carte de Madagascar avec sa règle graduée." },
  revisionOuverture: [
    ["Cite trois îles voisines de Madagascar.", "Les Comores, Maurice et La Réunion."],
    ["Où se trouvent les Maldives ?", "Au nord-est de Madagascar."],
  ],
  miseEnSituation: {
    texte: "Le directeur veut afficher une grande carte de Madagascar dans la salle de classe. Il demande à Soa de la présenter aux visiteurs. Soa regarde la carte : en haut, un titre ; en bas, un petit tableau avec des signes ; une flèche indique le nord ; une barre graduée montre les kilomètres… « Il faut que je connaisse tous les éléments de cette carte pour bien l'expliquer », pense Soa.",
    question: "Que faut-il regarder pour bien lire une carte ?",
    ra: "Il faut regarder le titre, la légende, l'échelle, l'orientation, la source, la date et l'auteur.",
    support: "Carte de Madagascar annotée (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Lire une carte de Madagascar ». Après cette séance, vous serez capables de nommer les éléments d'une carte et de vous en servir.",
  observation: "Observez bien le schéma : les flèches rouges montrent les sept éléments de la carte de Madagascar.",
  supportObservation: "Carte annotée (page Leçon)",
  analyse: [
    ["Où se trouve le titre de la carte ?", "Le titre se trouve en haut de la carte : « Madagascar »."],
    ["À quoi sert la légende ?", "La légende explique la signification des signes et des couleurs de la carte."],
    ["Que signifie l'étoile rouge près du centre de l'île ?", "C'est le signe de la capitale, Antananarivo."],
    ["À quoi sert l'échelle ?", "L'échelle sert à calculer les distances réelles à partir des distances mesurées sur la carte."],
    ["Comment savoir où est le nord sur la carte ?", "Une flèche ou une rose des vents indique le nord, en haut de la carte."],
    ["Pourquoi lire la source et la date d'une carte ?", "Pour savoir qui a fait la carte, quand, et si elle est encore exacte."],
  ],
  synthese: "Donc, pour lire une carte de Madagascar, on regarde sept éléments : le titre, la légende, l'échelle, l'orientation, la source, la date et l'auteur. La légende explique les signes, et l'échelle permet de calculer les distances réelles.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. À quoi sert la légende d'une carte ?",
        "2. À quoi sert l'échelle d'une carte ?",
        "3. Quel signe représente la capitale sur la carte ?",
        "4. Comment s'appelle la capitale de Madagascar ?",
      ],
      corrige: [
        "1. La **légende** explique la signification des signes et des couleurs de la carte.",
        "2. L'**échelle** sert à calculer les distances réelles.",
        "3. Une **étoile** représente la capitale.",
        "4. La capitale de Madagascar est **Antananarivo**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le nord se trouve en haut de la carte.",
        "2. L'échelle sert à colorier la carte.",
        "3. La légende explique les signes de la carte.",
        "4. Il ne faut pas lire la source d'une carte.",
      ],
      corrige: [
        "1. **Vrai** : la flèche du nord pointe vers le haut.",
        "2. **Faux** : elle sert à calculer les distances réelles.",
        "3. **Vrai** : elle explique signes et couleurs.",
        "4. **Faux** : la source et la date nous renseignent sur la carte.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : légende — échelle — titre — nord.",
      items: [
        "Le ……… de la carte se trouve en haut.",
        "La ……… explique les signes et les couleurs.",
        "L'……… sert à calculer les distances réelles.",
        "La flèche indique le ……… , en haut de la carte.",
      ],
      corrige: [
        "Le **titre** / la **légende** / l'**échelle** / le **nord**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Sur la carte, la capitale Antananarivo est représentée par : A. un trait — B. une étoile — C. une tache bleue",
        "2. Sur cette carte, 1 cm représente : A. 50 km — B. 5 km — C. 500 km",
        "3. La source d'une carte nous dit : A. qui l'a faite — B. le prix du papier — C. la couleur du nord",
        "4. Pour mesurer une distance sur la carte, on utilise : A. un compas seulement — B. une règle graduée et l'échelle — C. une balance",
      ],
      corrige: [
        "1. Réponse **B** : par une étoile.",
        "2. Réponse **A** : 1 cm sur la carte représente 50 km en réalité.",
        "3. Réponse **A** : qui a fait la carte.",
        "4. Réponse **B** : une règle graduée, puis l'échelle.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Les éléments de la carte",
        paras: [
          "Une carte de Madagascar bien faite montre toujours sept éléments : le titre, la légende, l'échelle, l'orientation, la source, la date et l'auteur.",
          "Le titre se lit en haut ; la légende, souvent dans un cadre, explique chaque signe : l'étoile pour la capitale, les points pour les villes, les traits pour les routes et les fleuves.",
        ],
        exemples: [
          "Sur la carte de la classe, l'étoile rouge d'Antananarivo se repère vite grâce à la légende.",
        ],
      },
      {
        titre: "2. Lire l'échelle",
        paras: [
          "L'échelle dit combien de kilomètres réels représente un centimètre sur la carte.",
          "Sur notre carte, 1 cm représente 50 km. La distance Antananarivo–Toamasina mesure environ 4 cm sur la carte : elle mesure donc environ 200 km en réalité.",
        ],
        exemples: [
          "Soa mesure 4 cm entre les deux étoiles et calcule : 4 × 50 km = 200 km.",
        ],
      },
      {
        titre: "3. Les grandes villes sur la carte",
        paras: [
          "Grâce à la carte, on repère les grandes villes : Antananarivo, la capitale, au centre ; Toamasina à l'est ; Mahajanga à l'ouest ; Toliara au sud-ouest.",
          "La flèche du nord, en haut de la carte, nous aide à donner les directions : Toamasina est à l'est d'Antananarivo.",
        ],
        exemples: [
          "Toliara se trouve au sud-ouest, presque sur le tropique du Capricorne.",
        ],
      },
    ],
  },
  motsCles: ["titre", "légende", "échelle", "orientation", "source"],
  questionsRevision: [
    ["Cite quatre éléments d'une carte.", "Le titre, la légende, l'échelle et l'orientation (aussi la source, la date et l'auteur)."],
    ["Sur une carte, 1 cm représente 50 km. Que représente 3 cm ?", "3 cm représentent 150 km (3 × 50 km)."],
  ],
};

const S23 = {
  numero: 23, total: TOTAL,
  titre: "Tracer la carte de Madagascar (1) : le quadrillage",
  theme: "L'île de Madagascar dans le monde",
  objectif: "Être capable de tracer le quadrillage de 18 cm × 9 cm pour préparer la carte de Madagascar.",
  image: { id: "geo5_quadrillage_mada", legende: "Le quadrillage : un rectangle de 9 cm sur 18 cm, partagé en carrés de 3 cm." },
  scene: { file: "scene_s23_quadrillage.jpg", mode: "document", legende: "Document : les mains de Soa tracent le quadrillage à la règle, carreau après carreau." },
  revisionOuverture: [
    ["Cite quatre éléments d'une carte.", "Le titre, la légende, l'échelle et l'orientation."],
    ["Sur une carte, 1 cm représente 50 km. Que représente 2 cm ?", "2 cm représentent 100 km."],
  ],
  miseEnSituation: {
    texte: "Pour la fête de l'école, la maîtresse organise un concours : « La plus belle carte de Madagascar faite à la main ! » Chaque élève recevra une feuille blanche. « Attention, dit-elle, on ne dessine pas la carte n'importe comment. D'abord, nous allons préparer le terrain : le quadrillage. » Soa prend sa règle, son crayon et sa gomme, prête à commencer.",
    question: "Comment préparer la feuille avant de tracer la carte de Madagascar ?",
    ra: "On trace d'abord un quadrillage : un rectangle de 9 cm de large et 18 cm de haut, partagé en carrés de 3 cm.",
    support: "Schéma du quadrillage (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Tracer la carte de Madagascar (1) : le quadrillage ». Après cette séance, vous serez capables de tracer un quadrillage exact de 18 cm × 9 cm.",
  observation: "Observez bien le schéma : le rectangle est partagé en trois colonnes A, B, C et six lignes 1 à 6, comme une bataille navale.",
  supportObservation: "Schéma du quadrillage (page Leçon)",
  analyse: [
    ["Quel matériel faut-il pour tracer le quadrillage ?", "Il faut une feuille blanche, un crayon, une règle graduée et une gomme."],
    ["Quelles sont les dimensions du rectangle de départ ?", "Le rectangle mesure 9 cm de large et 18 cm de haut."],
    ["En combien de carrés partage-t-on le rectangle ?", "On le partage en carrés de 3 cm de côté : trois colonnes et six lignes."],
    ["Comment nomme-t-on les colonnes et les lignes ?", "Les colonnes portent les lettres A, B, C et les lignes les numéros 1 à 6."],
    ["Pourquoi trace-t-on un quadrillage avant la carte ?", "Le quadrillage donne des repères : il aide à placer le contour de Madagascar au bon endroit."],
    ["Que faire si un trait est mal placé ?", "On efface doucement avec la gomme et on recommence, sans déchirer la feuille."],
  ],
  synthese: "Donc, avant de tracer la carte de Madagascar, on prépare un quadrillage : un rectangle de 9 cm de large et 18 cm de haut, partagé en carrés de 3 cm, avec les colonnes A, B, C et les lignes 1 à 6. Ces repères guideront le contour de l'île.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Quelles sont les dimensions du rectangle de départ ?",
        "2. Quelle est la taille d'un carreau du quadrillage ?",
        "3. Combien y a-t-il de colonnes et de lignes ?",
        "4. À quoi sert le quadrillage ?",
      ],
      corrige: [
        "1. Le rectangle mesure **9 cm de large et 18 cm de haut**.",
        "2. Chaque carreau mesure **3 cm de côté**.",
        "3. Il y a **trois colonnes** (A, B, C) et **six lignes** (1 à 6).",
        "4. Il sert de **repère** pour placer le contour de Madagascar.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le rectangle de départ mesure 9 cm de large et 18 cm de haut.",
        "2. Les colonnes portent les numéros 1 à 6.",
        "3. Les carreaux mesurent 3 cm de côté.",
        "4. On peut tracer le quadrillage sans règle.",
      ],
      corrige: [
        "1. **Vrai** : 9 cm de large sur 18 cm de haut.",
        "2. **Faux** : les colonnes portent les lettres A, B, C ; les lignes portent les numéros.",
        "3. **Vrai** : chaque carreau fait 3 cm de côté.",
        "4. **Faux** : il faut une règle graduée pour être exact.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : 18 — 9 — 3 — règle.",
      items: [
        "Le rectangle de départ mesure ……… cm de large et ……… cm de haut.",
        "Chaque carreau du quadrillage mesure ……… cm de côté.",
        "Pour tracer des traits droits et exacts, on utilise une ……… graduée.",
      ],
      corrige: [
        "**9** cm de large et **18** cm de haut / **3** cm de côté / une **règle** graduée.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le quadrillage compte : A. 3 colonnes et 6 lignes — B. 6 colonnes et 3 lignes — C. 9 colonnes et 18 lignes",
        "2. Les lignes du quadrillage portent : A. des lettres — B. des numéros de 1 à 6 — C. des couleurs",
        "3. Le quadrillage sert : A. à décorer la feuille — B. à placer le contour de l'île — C. à compter les points",
        "4. Si un trait est mal placé : A. on jette la feuille — B. on efface avec la gomme — C. on continue quand même",
      ],
      corrige: [
        "1. Réponse **A** : 3 colonnes (A, B, C) et 6 lignes (1 à 6).",
        "2. Réponse **B** : les numéros 1 à 6.",
        "3. Réponse **B** : c'est un repère pour le contour.",
        "4. Réponse **B** : on efface et on recommence proprement.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Le matériel du cartographe",
        paras: [
          "Pour tracer une belle carte, il faut soigner son matériel : une feuille blanche, un crayon bien taillé, une règle graduée et une gomme.",
          "On travaille sur une table bien plate, et on ne plie jamais la feuille.",
        ],
        exemples: [
          "Soa a taillé deux crayons avant de commencer : un pour les traits fins, un pour appuyer les contours.",
        ],
      },
      {
        titre: "2. Les étapes du quadrillage",
        paras: [
          "Étape 1 : on trace un rectangle de 9 cm de large et 18 cm de haut.",
          "Étape 2 : on partage le rectangle en carrés de 3 cm de côté. Étape 3 : on écrit les lettres A, B, C au-dessus des colonnes et les numéros 1 à 6 à gauche des lignes.",
        ],
        exemples: [
          "Pour partager le rectangle, on pose la règle et on fait une petite marque tous les 3 cm, avant de tracer les traits.",
        ],
      },
      {
        titre: "3. Pourquoi un quadrillage ?",
        paras: [
          "Le quadrillage transforme la feuille en un damier de repères, comme dans le jeu de bataille navale.",
          "Grâce aux cases A1, B2, C6…, on saura exactement où placer le nord de l'île, le sud, les îles et les villes.",
        ],
        exemples: [
          "Le quadrillage permet de repérer le cap d'Ambre dans une case définie par une lettre et un nombre.",
        ],
      },
    ],
  },
  motsCles: ["quadrillage", "rectangle", "carreau", "repère", "règle graduée"],
  questionsRevision: [
    ["Quelles sont les dimensions du rectangle du quadrillage ?", "9 cm de large et 18 cm de haut."],
    ["Combien mesure un carreau du quadrillage ?", "3 cm de côté."],
  ],
};

const S24 = {
  numero: 24, total: TOTAL,
  titre: "Tracer la carte de Madagascar (2) : le contour, les îles, la légende",
  theme: "L'île de Madagascar dans le monde",
  objectif: "Être capable de tracer le contour de Madagascar, ses îles, puis d'ajouter le titre, la légende et l'échelle.",
  image: { id: "geo5_tracer_carte_mada", legende: "La carte terminée : le contour, les îles, le tropique, la légende et l'échelle." },
  scene: { file: "scene_s24_tracer_carte.jpg", mode: "document", legende: "Document : la carte de Madagascar dessinée au crayon dans son quadrillage, avec sa légende coloriée." },
  revisionOuverture: [
    ["Combien mesure un carreau du quadrillage de la carte ?", "3 cm de côté."],
    ["À quoi servent les lettres et les numéros du quadrillage ?", "À repérer les cases, comme à la bataille navale, pour placer le contour."],
  ],
  miseEnSituation: {
    texte: "La semaine dernière, toute la classe a tracé le quadrillage de 9 cm × 18 cm. Aujourd'hui, place au dessin ! « D'abord, on place les points de repère, explique la maîtresse. Le cap d'Ambre, tout au nord, se trouve vers la case C6. Le cap Sainte-Marie, tout au sud, vers la case B1. Ensuite seulement, on relie en courbes douces. » Soa tient son crayon très droit : sa carte va enfin ressembler à Madagascar.",
    question: "Comment tracer le contour de Madagascar à partir du quadrillage ?",
    ra: "On place d'abord des points de repère dans les bonnes cases, puis on les relie en courbes douces pour dessiner le contour.",
    support: "Schéma de la carte terminée (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Tracer la carte de Madagascar (2) ». Après cette séance, vous serez capables de tracer le contour de Madagascar, les îles, et de compléter la carte avec le titre, la légende et l'échelle.",
  observation: "Observez bien le schéma : le contour de Madagascar se dessine dans le quadrillage, avec Nosy Be, l'île Sainte-Marie, le tropique en pointillés, la légende et l'échelle.",
  supportObservation: "Schéma de la carte terminée (page Leçon)",
  analyse: [
    ["Où place-t-on le cap d'Ambre, le nord de l'île ?", "Vers le haut du quadrillage, dans la case C6."],
    ["Où se trouve le cap Sainte-Marie, le sud de l'île ?", "Vers le bas du quadrillage, dans la case B1."],
    ["Dans quelles cases place-t-on Nosy Be et l'île Sainte-Marie ?", "Nosy Be vers la case A4, à l'ouest ; l'île Sainte-Marie vers la case C4, à l'est."],
    ["Comment relie-t-on les points de repère ?", "On les relie en courbes douces, sans angles pointus, en s'aidant des carreaux."],
    ["Que dessine-t-on en pointillés rouges dans le Sud ?", "Le tropique du Capricorne."],
    ["Que doit-on ajouter pour que la carte soit complète ?", "Le titre, la légende et l'échelle."],
  ],
  synthese: "Donc, pour tracer la carte de Madagascar : on place les points de repère dans les cases du quadrillage (cap d'Ambre en C6, cap Sainte-Marie en B1, Nosy Be en A4, Sainte-Marie en C4), on relie en courbes douces, on dessine les îles et le tropique en pointillés, puis on ajoute le titre, la légende et l'échelle.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Dans quelle case place-t-on le cap d'Ambre ?",
        "2. Dans quelle case place-t-on le cap Sainte-Marie ?",
        "3. Comment relie-t-on les points de repère ?",
        "4. Que trace-t-on en pointillés rouges dans le Sud ?",
      ],
      corrige: [
        "1. Le cap d'Ambre se place vers la case **C6**, tout en haut.",
        "2. Le cap Sainte-Marie se place vers la case **B1**, tout en bas.",
        "3. On les relie en **courbes douces**, en s'aidant des carreaux.",
        "4. Le **tropique du Capricorne**, en pointillés rouges.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Nosy Be se dessine à l'ouest, vers la case A4.",
        "2. Le contour de Madagascar se trace avec des angles pointus.",
        "3. L'île Sainte-Marie se dessine à l'est de la Grande Île.",
        "4. Une carte complète a un titre, une légende et une échelle.",
      ],
      corrige: [
        "1. **Vrai** : Nosy Be est à l'ouest, vers A4.",
        "2. **Faux** : le contour est fait de courbes douces.",
        "3. **Vrai** : Sainte-Marie est à l'est, vers C4.",
        "4. **Vrai** : ce sont les éléments indispensables.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : C6 — B1 — courbes — légende.",
      items: [
        "Le cap d'Ambre se place vers la case ……… .",
        "Le cap Sainte-Marie se place vers la case ……… .",
        "On relie les points de repère en ……… douces.",
        "Le petit cadre qui explique les signes de la carte est la ……… .",
      ],
      corrige: [
        "la case **C6** / la case **B1** / en **courbes** douces / la **légende**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le contour de Madagascar relie : A. des points de repère placés dans les cases — B. les quatre coins de la feuille — C. les lettres A, B, C",
        "2. Les îles à dessiner sont : A. Nosy Be et Sainte-Marie — B. Maurice et La Réunion — C. les Maldives",
        "3. Le tropique du Capricorne se trace : A. en haut de la carte — B. dans le Sud, en pointillés — C. autour de la feuille",
        "4. Une belle carte se reconnaît à : A. son contour exact et sa légende — B. ses couleurs criardes — C. sa grande taille",
      ],
      corrige: [
        "1. Réponse **A** : des points de repère placés dans les bonnes cases.",
        "2. Réponse **A** : Nosy Be à l'ouest et Sainte-Marie à l'est.",
        "3. Réponse **B** : dans le Sud, en pointillés.",
        "4. Réponse **A** : un contour exact, complété par la légende.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Les points de repère",
        paras: [
          "Avant de tracer le contour, on place des points de repère dans les cases du quadrillage.",
          "Le cap d'Ambre, tout au nord, se place vers C6 ; le cap Sainte-Marie, tout au sud, vers B1 ; la côte ouest passe près de la colonne A ; la côte est longe la colonne C.",
        ],
        exemples: [
          "On marque d'un petit point les quatre extrémités de l'île avant de tracer quoi que ce soit.",
        ],
      },
      {
        titre: "2. Le contour et les îles",
        paras: [
          "On relie ensuite les points de repère en courbes douces, sans lever trop le crayon, en s'aidant des carreaux.",
          "On dessine les îles : Nosy Be à l'ouest vers A4, et l'île Sainte-Marie, longue et fine, à l'est vers C4. Enfin, on trace le tropique du Capricorne en pointillés rouges dans le Sud.",
        ],
        exemples: [
          "La côte ouest de Madagascar est très découpée : on dessine de petites baies.",
          "Si une courbe rate, on efface doucement et on recommence.",
        ],
      },
      {
        titre: "3. Titre, légende et échelle",
        paras: [
          "Pour finir la carte, on écrit le titre « MADAGASCAR » en haut, au propre.",
          "On trace un cadre de légende : le littoral, les îles, le tropique du Capricorne, la capitale. Puis on ajoute l'échelle, par exemple 0–200–400 km, et le nom de l'auteur.",
        ],
        exemples: [
          "Soa a colorié sa légende aux crayons de couleur : vert pour le littoral, rouge pour le tropique.",
          "La carte de Soa a gagné le concours de la fête de l'école !",
        ],
      },
    ],
  },
  motsCles: ["contour", "points de repère", "courbes douces", "îles", "légende"],
  questionsRevision: [
    ["Quels points de repère place-t-on avant de tracer le contour ?", "Le cap d'Ambre au nord (C6), le cap Sainte-Marie au sud (B1), et les côtes est et ouest."],
    ["Que doit-on ajouter pour compléter la carte ?", "Le titre, la légende et l'échelle."],
  ],
};

module.exports = { topics: [S21, S22, S23, S24] };
