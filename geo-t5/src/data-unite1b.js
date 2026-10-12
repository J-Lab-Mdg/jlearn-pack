// data-unite1b.js — UNITÉ 1 : LA PLANÈTE TERRE (Séances 8 à 14)
// Contenu rédactionnel conforme au Programme d'études officiel T5 — Géographie (p. 159-160)
const TOTAL = 76;

const S8 = {
  numero: 8, total: TOTAL,
  titre: "Les cinq océans",
  theme: "La planète Terre",
  objectif: "Être capable de nommer les cinq océans du globe terrestre et de situer l'océan Indien.",
  image: { id: "geo5_oceans", legende: "Les cinq océans du globe terrestre." },
  scene: { file: "scene_s08_oceans.jpg", mode: "document", legende: "Document : faire naviguer le petit voilier d'un océan à l'autre sur la carte du monde." },
  miseEnSituation: {
    texte: "Ialy rêve de devenir capitaine de bateau, comme son oncle qui navigue vers Toamasina. Sur la grande carte du monde de la classe, il promène son petit voilier en papier. « Regarde, dit la maîtresse, ton bateau peut traverser cinq immenses étendues d'eau. Ce sont les océans. Sais-tu les nommer ? »",
    question: "Combien y a-t-il d'océans sur la Terre, et comment s'appellent-ils ?",
    ra: "Il y a cinq océans : l'océan Pacifique, l'océan Atlantique, l'océan Indien, l'océan glacial Arctique et l'océan glacial Antarctique.",
    support: "Schéma des cinq océans (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les cinq océans ». Après cette séance, vous serez capables de nommer les cinq océans et de dire lequel baigne Madagascar.",
  observation: "Observez bien le planisphère où les cinq océans sont écrits en bleu, et le document du voilier d'Ialy.",
  supportObservation: "Planisphère des océans (page Leçon)",
  analyse: [
    ["Qu'est-ce qu'un océan ?", "Un océan est une immense étendue d'eau salée."],
    ["Combien y a-t-il d'océans sur la Terre ?", "Il y a cinq océans."],
    ["Cite les cinq océans.", "L'océan Pacifique, l'océan Atlantique, l'océan Indien, l'océan glacial Arctique et l'océan glacial Antarctique."],
    ["Quel est le plus grand océan du monde ?", "Le plus grand océan est l'océan Pacifique."],
    ["Quel océan baigne la côte Est de Madagascar ?", "C'est l'océan Indien."],
    ["Où se trouvent les océans glaciaux ?", "Les océans glaciaux se trouvent près des pôles : l'Arctique au nord, l'Antarctique au sud."],
  ],
  synthese: "Donc, la Terre compte cinq océans : le Pacifique, le plus grand ; l'Atlantique ; l'Indien, qui baigne la côte Est de Madagascar ; et les océans glaciaux Arctique et Antarctique, près des pôles.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'un océan ?",
        "2. Combien y a-t-il d'océans sur la Terre ?",
        "3. Quel est le plus grand océan du monde ?",
        "4. Quel océan baigne la côte Est de Madagascar ?",
      ],
      corrige: [
        "1. Un **océan** est une immense étendue d'eau salée.",
        "2. Il y a **cinq** océans.",
        "3. Le plus grand océan est l'océan **Pacifique**.",
        "4. C'est l'océan **Indien**.",
      ],
    },
    {
      consigne: "Relie chaque océan à sa particularité.",
      items: [
        "1. L'océan Pacifique",
        "2. L'océan Indien",
        "3. L'océan glacial Arctique",
        "4. L'océan Atlantique",
      ],
      corrige: [
        "1 → **le plus grand océan du monde**.",
        "2 → **l'océan qui baigne l'Est de Madagascar**.",
        "3 → **l'océan gelé près du pôle Nord**.",
        "4 → **l'océan entre l'Amérique et l'Afrique**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec : Pacifique — Indien — cinq — glacial.",
      items: [
        "La Terre compte ……… océans.",
        "Le plus grand océan est l'océan ……… .",
        "L'océan qui baigne Madagascar est l'océan ……… .",
        "L'océan ……… Arctique est près du pôle Nord.",
      ],
      corrige: [
        "**cinq** / océan **Pacifique** / océan **Indien** / océan **glacial**.",
      ],
    },
    {
      consigne: "Vrai ou faux ?",
      items: [
        "1. Un océan est une immense étendue d'eau salée.",
        "2. L'océan Indien est le plus grand océan du monde.",
        "3. L'océan glacial Antarctique se trouve près du pôle Sud.",
        "4. Madagascar est baignée par l'océan Atlantique.",
      ],
      corrige: [
        "1. **Vrai**.",
        "2. **Faux** : le plus grand est l'océan Pacifique.",
        "3. **Vrai**.",
        "4. **Faux** : Madagascar est baignée par l'océan Indien.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Qu'est-ce qu'un océan ?",
        paras: [
          "Un océan est une immense étendue d'eau salée.",
          "Les océans occupent la plus grande partie de la surface de la Terre.",
        ],
        exemples: [
          "L'eau de l'océan est salée : on ne peut pas la boire.",
        ],
      },
      {
        titre: "2. Les cinq océans",
        paras: [
          "La Terre compte cinq océans : l'océan Pacifique, l'océan Atlantique, l'océan Indien, l'océan glacial Arctique et l'océan glacial Antarctique.",
          "L'océan Pacifique est le plus grand de tous ; l'océan Indien est celui qui baigne Madagascar.",
        ],
        exemples: [
          "L'oncle d'Ialy navigue sur l'océan Indien pour rejoindre le port de Toamasina.",
        ],
      },
      {
        titre: "3. Madagascar et l'océan Indien",
        paras: [
          "Madagascar est une grande île de l'océan Indien.",
          "À l'est de l'île, les vagues de l'océan Indien viennent mourir sur les plages de sable.",
        ],
        exemples: [
          "À l'ouest, le canal de Mozambique sépare Madagascar de l'Afrique.",
        ],
      },
    ],
  },
  motsCles: ["océan", "Pacifique", "Atlantique", "Indien", "glacial"],
  questionsRevision: [
    ["Combien y a-t-il d'océans ?", "Il y a cinq océans."],
    ["Quel océan baigne Madagascar ?", "L'océan Indien."],
  ],
};

const S9 = {
  numero: 9, total: TOTAL,
  titre: "Lire une carte du monde",
  theme: "La planète Terre",
  objectif: "Être capable de citer les éléments d'une carte et de lire une carte du monde.",
  image: { id: "geo5_lire_carte_monde", legende: "Les sept éléments à vérifier avant de lire une carte." },
  scene: { file: "scene_s09_lire_carte.jpg", mode: "document", legende: "Document : lire la carte du monde avec la baguette de la maîtresse." },
  miseEnSituation: {
    texte: "La classe prépare un jeu de lecture de cartes. Devant le planisphère accroché au mur, la maîtresse demande : « Avant de chercher un pays sur une carte, que doit-on regarder d'abord ? » Mamy lève la main : « Moi, je regarde toujours le titre pour savoir de quoi parle la carte ! » « Très bien, dit la maîtresse. Et il y a encore six autres choses à vérifier… »",
    question: "Que doit-on vérifier sur une carte avant de la lire ?",
    ra: "On vérifie sept éléments : le titre, la légende, l'échelle, l'orientation, la source, la date et l'auteur.",
    support: "Schéma des éléments d'une carte (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Lire une carte du monde ». Après cette séance, vous serez capables de citer les éléments d'une carte et de lire un planisphère.",
  observation: "Observez bien le schéma de la carte avec ses sept éléments, et le document de la lecture à la baguette.",
  supportObservation: "Carte du monde et schéma (page Leçon)",
  analyse: [
    ["Que nous apprend le titre d'une carte ?", "Le titre nous dit de quoi parle la carte."],
    ["À quoi sert la légende ?", "La légende explique la signification des signes et des couleurs de la carte."],
    ["À quoi sert l'échelle ?", "L'échelle permet de mesurer les distances réelles sur la carte."],
    ["Comment sait-on où est le Nord sur une carte ?", "Une flèche ou une rose des vents montre l'orientation, le Nord en haut."],
    ["Que nous apprennent la source, la date et l'auteur ?", "Elles disent d'où viennent les informations, quand la carte a été faite et par qui."],
    ["Combien d'éléments faut-il vérifier avant de lire une carte ?", "Il faut vérifier sept éléments."],
  ],
  synthese: "Donc, avant de lire une carte, on vérifie sept éléments : le titre, la légende, l'échelle, l'orientation, la source, la date et l'auteur. C'est la clé d'une bonne lecture.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. À quoi sert la légende d'une carte ?",
        "2. À quoi sert l'échelle d'une carte ?",
        "3. Qu'est-ce qui montre le Nord sur une carte ?",
        "4. Combien d'éléments vérifie-t-on avant de lire une carte ?",
      ],
      corrige: [
        "1. La **légende** explique la signification des signes et des couleurs.",
        "2. L'**échelle** permet de mesurer les distances réelles.",
        "3. Une **flèche** ou une rose des vents montre le Nord, en haut.",
        "4. On vérifie **sept** éléments.",
      ],
    },
    {
      consigne: "Associe chaque élément à son rôle.",
      items: [
        "1. Le titre",
        "2. La légende",
        "3. L'échelle",
        "4. La date",
      ],
      corrige: [
        "1 → **dit de quoi parle la carte**.",
        "2 → **explique les signes et les couleurs**.",
        "3 → **sert à mesurer les distances**.",
        "4 → **dit quand la carte a été faite**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec : titre — légende — échelle — orientation.",
      items: [
        "Le ……… dit de quoi parle la carte.",
        "La ……… explique les signes et les couleurs.",
        "L'……… sert à mesurer les distances.",
        "L'……… est montrée par la flèche du Nord.",
      ],
      corrige: [
        "Le **titre** / la **légende** / l'**échelle** / l'**orientation**.",
      ],
    },
    {
      consigne: "Vrai ou faux ?",
      items: [
        "1. On lit une carte sans regarder la légende.",
        "2. La flèche du Nord est en haut de la carte.",
        "3. La source dit d'où viennent les informations de la carte.",
        "4. L'auteur est celui qui a fabriqué la carte.",
      ],
      corrige: [
        "1. **Faux** : la légende est indispensable pour comprendre les signes.",
        "2. **Vrai**.",
        "3. **Vrai**.",
        "4. **Vrai**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Les éléments d'une carte",
        paras: [
          "Une carte bien faite comporte toujours sept éléments : le titre, la légende, l'échelle, l'orientation, la source, la date et l'auteur.",
          "Avant de chercher quoi que ce soit, on prend le temps de les vérifier.",
        ],
        exemples: [
          "Mamy regarde toujours le titre en premier : il sait ainsi de quoi parle la carte.",
        ],
      },
      {
        titre: "2. Lire le planisphère",
        paras: [
          "Pour lire un planisphère, on repère d'abord les continents et les océans.",
          "Puis, avec la légende et l'échelle, on peut situer les pays et mesurer les distances.",
        ],
        exemples: [
          "Sur le planisphère de la classe, Madagascar est un petit point rouge dans l'océan Indien, à l'est de l'Afrique.",
        ],
      },
      {
        titre: "3. Compléter une carte muette",
        paras: [
          "Une carte muette est une carte vide, sans noms.",
          "Pour la compléter, on écrit les noms des continents et des océans au bon endroit, en s'aidant du planisphère.",
        ],
        exemples: [
          "Le jeu de la classe : placer les sept continents et les cinq océans sur le planisphère muet.",
        ],
      },
    ],
  },
  motsCles: ["titre", "légende", "échelle", "orientation", "carte muette"],
  questionsRevision: [
    ["Cite trois éléments d'une carte.", "Le titre, la légende et l'échelle (aussi l'orientation, la source, la date et l'auteur)."],
    ["Qu'est-ce qu'une carte muette ?", "C'est une carte vide, sans noms, que l'on complète."],
  ],
};

const S10 = {
  numero: 10, total: TOTAL,
  titre: "La rotation de la Terre",
  theme: "La planète Terre",
  objectif: "Être capable d'expliquer la rotation de la Terre : elle tourne sur elle-même d'Ouest en Est, en 24 heures.",
  image: { id: "geo5_rotation", legende: "La Terre tourne sur elle-même, d'Ouest en Est, en 24 heures." },
  scene: { file: "scene_s10_rotation.jpg", mode: "document", legende: "Document : la lampe représente le Soleil ; l'élève fait tourner le globe sur lui-même." },
  miseEnSituation: {
    texte: "Dans la classe un peu assombrie, la maîtresse allume une lampe : « Cette lampe est le Soleil. » Puis elle demande à Volana de faire tourner le globe terrestre sur lui-même. Volana le fait tourner doucement, et les élèves voient Madagascar passer devant la lampe, puis disparaître, puis revenir encore. « Vous venez de voir la rotation de la Terre ! » dit la maîtresse.",
    question: "Comment la Terre tourne-t-elle sur elle-même, et en combien de temps ?",
    ra: "La Terre tourne sur elle-même, d'Ouest en Est, en 24 heures.",
    support: "Schéma de la rotation (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « La rotation de la Terre ». Après cette séance, vous serez capables d'expliquer la rotation : son sens et sa durée.",
  observation: "Observez bien le schéma de la Terre avec sa flèche de rotation, et le document de l'expérience de la lampe.",
  supportObservation: "Globe, lampe et schéma (page Leçon)",
  analyse: [
    ["Comment s'appelle le mouvement de la Terre sur elle-même ?", "C'est la rotation."],
    ["Dans quel sens la Terre tourne-t-elle sur elle-même ?", "Elle tourne d'Ouest en Est."],
    ["Combien de temps dure un tour complet ?", "Un tour complet dure 24 heures."],
    ["À quoi ressemble ce mouvement ?", "La Terre tourne comme une toupie."],
    ["Quand la Terre a fait un tour complet, combien de temps s'est écoulé ?", "Il s'est écoulé un jour entier : 24 heures."],
    ["Qui fait tourner le globe dans l'expérience de la classe ?", "C'est Volana qui fait tourner le globe devant la lampe."],
  ],
  synthese: "Donc, la Terre tourne sur elle-même, d'Ouest en Est, comme une toupie : c'est la rotation. Un tour complet dure 24 heures, c'est-à-dire un jour entier.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Comment s'appelle le mouvement de la Terre sur elle-même ?",
        "2. Dans quel sens la Terre tourne-t-elle ?",
        "3. Combien de temps dure un tour complet ?",
        "4. À quoi ressemble ce mouvement de la Terre ?",
      ],
      corrige: [
        "1. C'est la **rotation**.",
        "2. Elle tourne d'**Ouest en Est**.",
        "3. Un tour complet dure **24 heures**.",
        "4. La Terre tourne comme une **toupie**.",
      ],
    },
    {
      consigne: "Complète avec : rotation — Ouest — Est — 24.",
      items: [
        "La Terre tourne sur elle-même : c'est la ……… .",
        "Elle tourne de l'……… vers l'……… .",
        "Un tour complet dure ……… heures.",
        "………… heures, c'est un jour entier.",
      ],
      corrige: [
        "la **rotation** / de l'**Ouest** vers l'**Est** / **24** heures.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. La rotation est le mouvement de la Terre : A. autour du Soleil — B. sur elle-même — C. autour de la lune",
        "2. La Terre tourne sur elle-même : A. d'Est en Ouest — B. d'Ouest en Est — C. de haut en bas",
        "3. Un tour complet dure : A. 12 heures — B. 24 heures — C. 365 jours",
        "4. Dans l'expérience de la classe, le Soleil est représenté par : A. une lampe — B. une bougie — C. un ballon",
      ],
      corrige: [
        "1. Réponse **B** : sur elle-même.",
        "2. Réponse **B** : d'Ouest en Est.",
        "3. Réponse **B** : 24 heures.",
        "4. Réponse **A** : une lampe.",
      ],
    },
    {
      consigne: "Vrai ou faux ?",
      items: [
        "1. La Terre tourne sur elle-même comme une toupie.",
        "2. La rotation dure une année.",
        "3. Nous sentons la Terre tourner sous nos pieds.",
        "4. La Terre fait un tour complet en un jour.",
      ],
      corrige: [
        "1. **Vrai**.",
        "2. **Faux** : elle dure 24 heures.",
        "3. **Faux** : la Terre est si grande que nous ne sentons pas sa rotation.",
        "4. **Vrai**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Un mouvement invisible",
        paras: [
          "La Terre tourne sur elle-même, d'Ouest en Est, comme une toupie : ce mouvement s'appelle la rotation.",
          "Nous ne sentons pas ce mouvement parce que la Terre est immense et que tout tourne avec nous.",
        ],
        exemples: [
          "Dans un bateau qui avance doucement sur une mer calme, on ne sent pas non plus le mouvement.",
        ],
      },
      {
        titre: "2. Vingt-quatre heures par tour",
        paras: [
          "La Terre fait un tour complet sur elle-même en 24 heures.",
          "24 heures, c'est la durée d'un jour entier : le jour et la nuit ensemble.",
        ],
        exemples: [
          "De midi aujourd'hui à midi demain, la Terre a fait exactement un tour sur elle-même.",
        ],
      },
      {
        titre: "3. L'expérience de la lampe",
        paras: [
          "Pour comprendre la rotation, on utilise un globe terrestre et une lampe.",
          "La lampe immobile représente le Soleil ; quand on fait tourner le globe, on voit chaque région passer devant la lumière.",
        ],
        exemples: [
          "Volana a fait tourner le globe : Madagascar est passé devant la lampe, a disparu, puis est revenu.",
        ],
      },
    ],
  },
  motsCles: ["rotation", "Ouest en Est", "24 heures", "toupie"],
  questionsRevision: [
    ["Qu'est-ce que la rotation ?", "C'est le mouvement de la Terre qui tourne sur elle-même, d'Ouest en Est, en 24 heures."],
    ["Pourquoi ne sentons-nous pas la rotation de la Terre ?", "Parce que la Terre est immense et que tout tourne avec nous."],
  ],
};

const S11 = {
  numero: 11, total: TOTAL,
  titre: "Le jour et la nuit",
  theme: "La planète Terre",
  objectif: "Être capable d'expliquer l'alternance du jour et de la nuit par la rotation de la Terre.",
  image: { id: "geo5_jour_nuit", legende: "La moitié éclairée vit le jour, l'autre moitié vit la nuit." },
  scene: { file: "scene_s11_jour_nuit.jpg", mode: "document", legende: "Document : le même village le jour (à gauche) et la nuit (à droite)." },
  miseEnSituation: {
    texte: "Chaque soir, Rako regarde les étoiles depuis la véranda. « Maman, demande-t-il, pourquoi la nuit tombe-t-elle ? Le soleil s'éteint-il comme une lampe ? » Sa maman sourit : « Non, Rako. Le soleil brille toujours. C'est notre Terre qui tourne : quand notre village passe de l'autre côté, il fait nuit pour nous, mais le jour se lève ailleurs ! »",
    question: "Pourquoi la nuit tombe-t-elle, si le soleil brille toujours ?",
    ra: "Parce que la Terre tourne sur elle-même : la moitié éclairée par le soleil vit le jour, l'autre moitié vit la nuit.",
    support: "Schéma du jour et de la nuit (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Le jour et la nuit ». Après cette séance, vous serez capables d'expliquer l'alternance du jour et de la nuit.",
  observation: "Observez bien le schéma de la Terre éclairée d'un seul côté, et le document du village le jour et la nuit.",
  supportObservation: "Schéma et document (page Leçon)",
  analyse: [
    ["Le soleil s'éteint-il la nuit ?", "Non, le soleil brille toujours."],
    ["Quelle partie de la Terre vit le jour ?", "La moitié de la Terre qui fait face au soleil vit le jour."],
    ["Quelle partie de la Terre vit la nuit ?", "La moitié qui est à l'abri du soleil vit la nuit."],
    ["Qui provoque l'alternance du jour et de la nuit ?", "C'est la rotation de la Terre sur elle-même."],
    ["Quand il fait nuit chez nous, que font les habitants de l'autre côté de la Terre ?", "Ils vivent le jour : le soleil éclaire leur moitié de la Terre."],
    ["Combien de temps dure un cycle complet jour + nuit ?", "Il dure 24 heures, le temps d'un tour complet de la Terre."],
  ],
  synthese: "Donc, le soleil brille toujours, mais la Terre tourne sur elle-même : la moitié éclairée vit le jour, l'autre moitié vit la nuit. C'est l'alternance du jour et de la nuit, conséquence de la rotation.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Le soleil s'éteint-il la nuit ?",
        "2. Quelle partie de la Terre vit le jour ?",
        "3. Qui provoque l'alternance du jour et de la nuit ?",
        "4. Quand il fait nuit chez nous, qu'en est-il de l'autre côté de la Terre ?",
      ],
      corrige: [
        "1. **Non**, le soleil brille toujours.",
        "2. La moitié qui fait **face au soleil** vit le jour.",
        "3. C'est la **rotation** de la Terre sur elle-même.",
        "4. L'autre côté de la Terre vit le **jour**.",
      ],
    },
    {
      consigne: "Complète avec : jour — nuit — rotation — 24.",
      items: [
        "La moitié éclairée de la Terre vit le ……… .",
        "L'autre moitié vit la ……… .",
        "L'alternance du jour et de la nuit vient de la ……… de la Terre.",
        "Un cycle jour + nuit dure ……… heures.",
      ],
      corrige: [
        "le **jour** / la **nuit** / la **rotation** / **24** heures.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. La nuit tombe parce que : A. le soleil s'éteint — B. la Terre tourne sur elle-même — C. les nuages cachent le soleil",
        "2. Quand il fait nuit à Madagascar, de l'autre côté de la Terre : A. il fait jour — B. il fait nuit aussi — C. il neige",
        "3. La partie de la Terre à l'abri du soleil vit : A. le jour — B. la nuit — C. l'aube",
        "4. L'alternance du jour et de la nuit est une conséquence : A. de la rotation — B. de la révolution — C. du vent",
      ],
      corrige: [
        "1. Réponse **B** : la Terre tourne sur elle-même.",
        "2. Réponse **A** : il fait jour.",
        "3. Réponse **B** : la nuit.",
        "4. Réponse **A** : de la rotation.",
      ],
    },
    {
      consigne: "Remets en ordre le cycle d'une journée : la nuit tombe — le soleil se lève — le soleil est haut dans le ciel — le soleil se couche.",
      items: [
        "1. ………",
        "2. ………",
        "3. ………",
        "4. ………",
      ],
      corrige: [
        "1. **Le soleil se lève** — 2. **Le soleil est haut dans le ciel** — 3. **Le soleil se couche** — 4. **La nuit tombe**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Le soleil brille toujours",
        paras: [
          "Le soleil ne s'éteint jamais : il brille jour et nuit dans le ciel.",
          "Ce sont les habitants de la Terre qui changent de place par rapport à lui, parce que la Terre tourne.",
        ],
        exemples: [
          "La maman de Rako lui a expliqué : le soleil est comme une grande lampe toujours allumée.",
        ],
      },
      {
        titre: "2. Deux moitiés : le jour et la nuit",
        paras: [
          "La Terre est une sphère : le soleil n'éclaire que la moitié qui lui fait face.",
          "Cette moitié éclairée vit le jour ; l'autre moitié, à l'abri, vit la nuit.",
        ],
        exemples: [
          "Sur le schéma de la classe, la moitié bleu clair est éclairée, la moitié bleu foncé est dans l'ombre.",
        ],
      },
      {
        titre: "3. Une conséquence de la rotation",
        paras: [
          "Comme la Terre tourne sur elle-même en 24 heures, chaque village passe de la lumière à l'ombre, puis de l'ombre à la lumière.",
          "C'est l'alternance du jour et de la nuit.",
        ],
        exemples: [
          "Quand Rako regarde les étoiles, des enfants de l'autre côté de la Terre partent à l'école au lever du soleil.",
        ],
      },
    ],
  },
  motsCles: ["alternance", "jour", "nuit", "éclairée", "conséquence"],
  questionsRevision: [
    ["Pourquoi la nuit tombe-t-elle ?", "Parce que la Terre tourne : notre village passe à l'abri du soleil."],
    ["La nuit, que se passe-t-il de l'autre côté de la Terre ?", "Il fait jour : cette moitié est éclairée par le soleil."],
  ],
};

const S12 = {
  numero: 12, total: TOTAL,
  titre: "La révolution de la Terre",
  theme: "La planète Terre",
  objectif: "Être capable d'expliquer la révolution : la Terre tourne autour du soleil en 365 jours et 6 heures.",
  image: { id: "geo5_revolution", legende: "La Terre fait le tour du Soleil en 365 jours et 6 heures." },
  scene: { file: "scene_s12_revolution.jpg", mode: "document", legende: "Document : le jeu de la cour — marcher autour du soleil dessiné à la craie." },
  miseEnSituation: {
    texte: "Dans la cour de l'école, les élèves ont dessiné à la craie un grand soleil au milieu et une piste ovale autour. « Qui veut être la Terre ? » demande la maîtresse. Tsiory prend le petit globe et se met à marcher sur la piste, tout doucement, tout autour du soleil. « Bravo ! dit la maîtresse. Tu viens d'imiter le plus long voyage de la Terre : la révolution ! »",
    question: "Qu'est-ce que la révolution de la Terre, et combien de temps dure-t-elle ?",
    ra: "C'est le voyage de la Terre autour du soleil ; il dure 365 jours et 6 heures, c'est-à-dire une année.",
    support: "Schéma de la révolution (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « La révolution de la Terre ». Après cette séance, vous serez capables d'expliquer la révolution et sa durée.",
  observation: "Observez bien le schéma de la Terre sur son orbite autour du soleil, et le document du jeu de la cour.",
  supportObservation: "Schéma et jeu de la cour (page Leçon)",
  analyse: [
    ["Comment s'appelle le voyage de la Terre autour du soleil ?", "C'est la révolution."],
    ["Quelle est la différence entre la rotation et la révolution ?", "La rotation est le tour de la Terre sur elle-même ; la révolution est son voyage autour du soleil."],
    ["Combien de temps dure la révolution ?", "Elle dure 365 jours et 6 heures."],
    ["365 jours et 6 heures, cela fait combien de temps ?", "Cela fait une année."],
    ["Sur quelle forme de piste la Terre voyage-t-elle ?", "Elle voyage sur une grande piste ovale autour du soleil."],
    ["Dans le jeu de la cour, qui représente le soleil et qui représente la Terre ?", "Le soleil dessiné à la craie représente le soleil, et Tsiory avec son globe représente la Terre."],
  ],
  synthese: "Donc, la révolution est le voyage de la Terre autour du soleil, sur une grande piste ovale. Ce voyage dure 365 jours et 6 heures : c'est une année entière.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que la révolution de la Terre ?",
        "2. Combien de temps dure la révolution ?",
        "3. Quelle est la différence entre la rotation et la révolution ?",
        "4. Sur quelle piste la Terre voyage-t-elle ?",
      ],
      corrige: [
        "1. La **révolution** est le voyage de la Terre autour du soleil.",
        "2. Elle dure **365 jours et 6 heures**.",
        "3. La **rotation** est le tour sur elle-même ; la **révolution** est le voyage autour du soleil.",
        "4. Elle voyage sur une grande piste **ovale**.",
      ],
    },
    {
      consigne: "Complète avec : révolution — soleil — 365 — année.",
      items: [
        "La Terre tourne autour du ……… : c'est la ……… .",
        "Ce voyage dure ……… jours et 6 heures.",
        "C'est-à-dire une ……… entière.",
        "La révolution n'est pas la rotation : la rotation est le tour de la Terre sur ……… .",
      ],
      corrige: [
        "autour du **soleil** : c'est la **révolution** / **365** jours / une **année** / sur **elle-même**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. La révolution dure : A. 24 heures — B. 365 jours et 6 heures — C. 12 heures",
        "2. Pendant la révolution, la Terre tourne autour : A. du soleil — B. de la lune — C. d'elle-même",
        "3. La forme de la piste de la Terre autour du soleil est : A. un cercle parfait — B. un ovale — C. un carré",
        "4. Dans le jeu de la cour, la piste dessinée à la craie représente : A. l'équateur — B. l'orbite de la Terre — C. la route du village",
      ],
      corrige: [
        "1. Réponse **B** : 365 jours et 6 heures.",
        "2. Réponse **A** : du soleil.",
        "3. Réponse **B** : un ovale.",
        "4. Réponse **B** : l'orbite de la Terre.",
      ],
    },
    {
      consigne: "Vrai ou faux ?",
      items: [
        "1. La révolution dure une journée.",
        "2. La Terre tourne autour du soleil sur une piste ovale.",
        "3. La rotation et la révolution sont le même mouvement.",
        "4. Une année dure 365 jours et 6 heures.",
      ],
      corrige: [
        "1. **Faux** : elle dure une année.",
        "2. **Vrai**.",
        "3. **Faux** : la rotation est le tour sur elle-même, la révolution le tour autour du soleil.",
        "4. **Vrai**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Le grand voyage de la Terre",
        paras: [
          "En tournant sur elle-même, la Terre voyage aussi autour du soleil : ce grand voyage s'appelle la révolution.",
          "La piste de la Terre autour du soleil s'appelle l'orbite ; elle a la forme d'un ovale.",
        ],
        exemples: [
          "Tsiory marchait sur la piste ovale de la cour : il imitait l'orbite de la Terre.",
        ],
      },
      {
        titre: "2. Une année de voyage",
        paras: [
          "La Terre met 365 jours et 6 heures pour faire le tour complet du soleil.",
          "Ce temps s'appelle une année : c'est le temps d'une révolution complète.",
        ],
        exemples: [
          "Quand tu fêtes ton anniversaire, la Terre a juste fini un tour complet autour du soleil depuis ta naissance.",
        ],
      },
      {
        titre: "3. Rotation et révolution ensemble",
        paras: [
          "La Terre fait les deux mouvements en même temps : elle tourne sur elle-même (rotation) tout en voyageant autour du soleil (révolution).",
          "En une année, la Terre fait environ 365 rotations pendant une seule révolution.",
        ],
        exemples: [
          "Comme une toupie que l'on ferait glisser tout autour d'un rond de craie.",
        ],
      },
    ],
  },
  motsCles: ["révolution", "soleil", "orbite", "année"],
  questionsRevision: [
    ["Qu'est-ce que la révolution ?", "C'est le voyage de la Terre autour du soleil, qui dure 365 jours et 6 heures."],
    ["Comment s'appelle la piste de la Terre autour du soleil ?", "L'orbite."],
  ],
};

const S13 = {
  numero: 13, total: TOTAL,
  titre: "Les saisons",
  theme: "La planète Terre",
  objectif: "Être capable de citer les quatre saisons de l'année et les deux grandes saisons de Madagascar.",
  image: { id: "geo5_saisons", legende: "Les quatre saisons de l'année et les deux saisons de Madagascar." },
  scene: { file: "scene_s13_saisons.jpg", mode: "document", legende: "Document : à Madagascar, la saison des pluies (à gauche) et la saison sèche (à droite)." },
  miseEnSituation: {
    texte: "Dans une lettre, la correspondante de Sitraka, qui habite loin dans l'hémisphère Nord, lui écrit : « Ici, en décembre, les arbres ont perdu leurs feuilles et il neige parfois ! » Sitraka relit la lettre, étonné : en décembre, chez lui à Fianarantsoa, l'herbe est verte, il pleut souvent et tout pousse. Pourtant, c'est le même mois !",
    question: "Pourquoi les saisons ne sont-elles pas les mêmes partout sur la Terre ?",
    ra: "Parce que la Terre voyage autour du soleil : selon sa position, chaque région reçoit la lumière et la chaleur différemment.",
    support: "Schéma des saisons (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les saisons ». Après cette séance, vous serez capables de citer les quatre saisons de l'année et les deux saisons de Madagascar.",
  observation: "Observez bien le schéma des quatre saisons, et le document des deux saisons malgaches.",
  supportObservation: "Schéma et document (page Leçon)",
  analyse: [
    ["Quelles sont les quatre saisons de l'année ?", "Le printemps, l'été, l'automne et l'hiver."],
    ["Qu'est-ce qui provoque les saisons ?", "C'est la révolution de la Terre autour du soleil."],
    ["Combien y a-t-il de saisons à Madagascar ?", "Il y a deux saisons : la saison chaude et pluvieuse, et la saison fraîche et sèche."],
    ["Comment s'appelle la saison où il pleut beaucoup à Madagascar ?", "C'est la saison chaude et pluvieuse, environ de novembre à avril."],
    ["Comment s'appelle la saison où il fait frais et sec ?", "C'est la saison fraîche et sèche, environ de mai à octobre."],
    ["Pourquoi la correspondante de Sitraka a-t-elle de la neige en décembre ?", "Parce qu'elle habite dans l'hémisphère Nord, où l'hiver tombe en décembre."],
  ],
  synthese: "Donc, les quatre saisons de l'année sont le printemps, l'été, l'automne et l'hiver ; elles viennent de la révolution de la Terre. À Madagascar, nous vivons deux grandes saisons : la saison chaude et pluvieuse, puis la saison fraîche et sèche.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Cite les quatre saisons de l'année.",
        "2. Qu'est-ce qui provoque les saisons ?",
        "3. Combien y a-t-il de saisons à Madagascar ?",
        "4. Que se passe-t-il pendant la saison chaude et pluvieuse ?",
      ],
      corrige: [
        "1. Le **printemps**, l'**été**, l'**automne** et l'**hiver**.",
        "2. La **révolution** de la Terre autour du soleil.",
        "3. **Deux** saisons : chaude et pluvieuse, fraîche et sèche.",
        "4. Il fait chaud et il pleut beaucoup : l'herbe est verte et tout pousse.",
      ],
    },
    {
      consigne: "Complète avec : printemps — été — automne — hiver.",
      items: [
        "La saison où les fleurs naissent est le ……… .",
        "La saison la plus chaude est l'……… .",
        "La saison où les feuilles tombent est l'……… .",
        "La saison la plus froide est l'……… .",
      ],
      corrige: [
        "le **printemps** / l'**été** / l'**automne** / l'**hiver**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Les saisons viennent : A. de la rotation — B. de la révolution — C. du vent",
        "2. À Madagascar, la saison chaude est : A. pluvieuse — B. neigeuse — C. sèche",
        "3. La saison fraîche et sèche de Madagascar va environ : A. de mai à octobre — B. de novembre à avril — C. toute l'année",
        "4. En décembre, dans l'hémisphère Nord, c'est : A. l'été — B. l'hiver — C. le printemps",
      ],
      corrige: [
        "1. Réponse **B** : de la révolution.",
        "2. Réponse **A** : pluvieuse.",
        "3. Réponse **A** : de mai à octobre.",
        "4. Réponse **B** : l'hiver.",
      ],
    },
    {
      consigne: "Vrai ou faux ?",
      items: [
        "1. À Madagascar, il neige en hiver.",
        "2. La saison chaude et pluvieuse fait verdir l'herbe.",
        "3. Les quatre saisons sont le printemps, l'été, l'automne et l'hiver.",
        "4. Pendant la saison fraîche et sèche, il pleut beaucoup.",
      ],
      corrige: [
        "1. **Faux** : il ne neige pas à Madagascar, il fait frais et sec.",
        "2. **Vrai**.",
        "3. **Vrai**.",
        "4. **Faux** : la saison fraîche est sèche.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Les quatre saisons de l'année",
        paras: [
          "L'année compte quatre saisons : le printemps, où les fleurs naissent ; l'été, le plus chaud ; l'automne, où les feuilles tombent ; et l'hiver, le plus froid.",
          "Ces saisons existent surtout dans les pays lointains de l'hémisphère Nord, comme celui de la correspondante de Sitraka.",
        ],
        exemples: [
          "En décembre, la correspondante de Sitraka voit parfois la neige : c'est son hiver.",
        ],
      },
      {
        titre: "2. Une conséquence de la révolution",
        paras: [
          "Pendant que la Terre voyage autour du soleil, la lumière et la chaleur ne tombent pas de la même façon sur chaque région.",
          "Selon la position de la Terre sur son orbite, une région reçoit plus ou moins de chaleur : c'est ce qui fait les saisons.",
        ],
        exemples: [
          "Quand l'hémisphère Nord penche loin du soleil, il y fait froid : c'est l'hiver là-bas.",
        ],
      },
      {
        titre: "3. Les deux saisons de Madagascar",
        paras: [
          "Madagascar, près du tropique, ne connaît que deux grandes saisons.",
          "La saison chaude et pluvieuse, environ de novembre à avril : il fait chaud, il pleut beaucoup, la nature est verte.",
          "La saison fraîche et sèche, environ de mai à octobre : il fait frais le matin, il pleut rarement, l'herbe devient jaune.",
        ],
        exemples: [
          "En saison des pluies, les rizières se remplissent d'eau et les paysans repiquent le riz.",
          "En saison sèche, les paysans récoltent le riz et les routes de campagne sont poussiéreuses.",
        ],
      },
    ],
  },
  motsCles: ["saisons", "printemps", "été", "automne", "hiver", "pluvieuse", "sèche"],
  questionsRevision: [
    ["Cite les quatre saisons de l'année.", "Le printemps, l'été, l'automne et l'hiver."],
    ["Quelles sont les deux saisons de Madagascar ?", "La saison chaude et pluvieuse, et la saison fraîche et sèche."],
  ],
};

const S14 = {
  numero: 14, total: TOTAL,
  titre: "Le rôle du soleil",
  theme: "La planète Terre",
  objectif: "Être capable de citer le rôle du soleil : la lumière et la chaleur, et leur importance pour la vie sur la Terre.",
  image: { id: "geo5_role_soleil", legende: "Le soleil donne la lumière et la chaleur : la vie grandit." },
  scene: { file: "scene_s14_role_soleil.jpg", mode: "document", legende: "Document : les dons du soleil — le linge et le riz sèchent, les plantes poussent." },
  miseEnSituation: {
    texte: "Un matin d'hiver austral, la petite Fazila accompagne sa grand-mère au village. Partout, le soleil travaille : le linge étendu sèche vite sur les cordes, le riz blondit sur les nattes, les brèdes du jardin ont grandi pendant la nuit. « Tu vois, dit la grand-mère, le soleil s'occupe de tout le monde. Sans lui, pas de riz, pas de linge sec, pas de jardin, et pas de lumière pour jouer ! »",
    question: "Que nous donne le soleil, et pourquoi est-il si important pour la vie ?",
    ra: "Le soleil nous donne la lumière et la chaleur ; sans eux, ni plantes, ni animaux, ni hommes ne pourraient vivre.",
    support: "Schéma du rôle du soleil (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Le rôle du soleil ». Après cette séance, vous serez capables de citer les deux dons du soleil et leur importance pour la vie.",
  observation: "Observez bien le schéma de la lumière et de la chaleur du soleil, et le document du village au soleil.",
  supportObservation: "Schéma et document (page Leçon)",
  analyse: [
    ["Quels sont les deux dons du soleil ?", "La lumière et la chaleur."],
    ["À quoi sert la lumière du soleil ?", "Elle éclaire la Terre : c'est grâce à elle que nous voyons le jour."],
    ["À quoi sert la chaleur du soleil ?", "Elle réchauffe l'air, l'eau et la terre."],
    ["Pourquoi les plantes ont-elles besoin du soleil ?", "Grâce à sa lumière et sa chaleur, elles fabriquent leur nourriture et grandissent."],
    ["Cite deux exemples du travail du soleil au village.", "Le linge qui sèche sur les cordes et le riz qui sèche sur les nattes."],
    ["Que deviendrait la vie sur la Terre sans le soleil ?", "Sans lumière ni chaleur, les plantes, les animaux et les hommes ne pourraient pas vivre."],
  ],
  synthese: "Donc, le soleil nous donne deux choses précieuses : la lumière, qui éclaire la Terre, et la chaleur, qui réchauffe l'air, l'eau et la terre. Sans le soleil, la vie ne pourrait pas exister sur la Terre.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Quels sont les deux dons du soleil ?",
        "2. À quoi sert la lumière du soleil ?",
        "3. Pourquoi les plantes ont-elles besoin du soleil ?",
        "4. Que deviendrait la vie sans le soleil ?",
      ],
      corrige: [
        "1. La **lumière** et la **chaleur**.",
        "2. Elle **éclaire** la Terre.",
        "3. Grâce à sa lumière et sa chaleur, elles **fabriquent leur nourriture** et **grandissent**.",
        "4. Sans le soleil, la vie **ne pourrait pas exister** sur la Terre.",
      ],
    },
    {
      consigne: "Donne deux exemples du travail du soleil dans la vie de chaque jour.",
      items: [
        "1. ………",
        "2. ………",
      ],
      corrige: [
        "Exemples attendus : le linge qui sèche au soleil / le riz qui sèche sur les nattes / les plantes du jardin qui poussent / la chaleur qui réchauffe la maison / l'eau de la rivière tiédie au soleil.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec : lumière — chaleur — soleil — vie.",
      items: [
        "Le ……… nous donne la lumière et la chaleur.",
        "La ……… éclaire la Terre.",
        "La ……… réchauffe l'air, l'eau et la terre.",
        "Sans le soleil, la ……… ne pourrait pas exister.",
      ],
      corrige: [
        "Le **soleil** / la **lumière** / la **chaleur** / la **vie**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le soleil nous donne : A. la pluie et le vent — B. la lumière et la chaleur — C. le jour et la nuit",
        "2. Grâce au soleil, les plantes : A. grandissent — B. disparaissent — C. dorment",
        "3. Le riz étendu sur les nattes sèche grâce : A. au vent — B. à la chaleur du soleil — C. à la lune",
        "4. La nuit, quand le soleil éclaire l'autre moitié de la Terre, nous avons : A. sa lumière — B. la lumière de la lune seulement — C. beaucoup de chaleur",
      ],
      corrige: [
        "1. Réponse **B** : la lumière et la chaleur.",
        "2. Réponse **A** : elles grandissent.",
        "3. Réponse **B** : à la chaleur du soleil.",
        "4. Réponse **B** : la lumière de la lune seulement.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La lumière du soleil",
        paras: [
          "La lumière du soleil éclaire la Terre : c'est elle qui fait le jour.",
          "Elle nous permet de voir, de travailler, de lire et de jouer.",
        ],
        exemples: [
          "Le matin, les rayons du soleil entrent par la fenêtre et réveillent la maison.",
        ],
      },
      {
        titre: "2. La chaleur du soleil",
        paras: [
          "La chaleur du soleil réchauffe l'air que nous respirons, l'eau des rivières et la terre des champs.",
          "Elle sèche le linge, sèche le riz après la récolte et mûrit les fruits.",
        ],
        exemples: [
          "Sur les nattes de la grand-mère de Fazila, le riz blondit au soleil.",
        ],
      },
      {
        titre: "3. Le soleil et la vie",
        paras: [
          "Les plantes ont besoin de la lumière et de la chaleur pour fabriquer leur nourriture et grandir.",
          "Les animaux et les hommes mangent ces plantes : sans le soleil, toute la vie manquerait de nourriture et de chaleur.",
          "C'est pourquoi on dit que le soleil est la source de la vie sur la Terre.",
        ],
        exemples: [
          "Le matin, les fleurs du village s'ouvrent tournées vers le soleil.",
        ],
      },
    ],
  },
  motsCles: ["lumière", "chaleur", "vie", "source"],
  questionsRevision: [
    ["Quels sont les deux dons du soleil ?", "La lumière et la chaleur."],
    ["Pourquoi le soleil est-il la source de la vie ?", "Parce que sans sa lumière et sa chaleur, les plantes, les animaux et les hommes ne pourraient pas vivre."],
  ],
};

const topics = [S8, S9, S10, S11, S12, S13, S14];

module.exports = { topics };
