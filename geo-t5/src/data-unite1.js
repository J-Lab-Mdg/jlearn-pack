// data-unite1.js — UNITÉ 1 : LA PLANÈTE TERRE (Séances 1 à 14)
// Contenu rédactionnel conforme au Programme d'études officiel T5 — Géographie (p. 158-160)
const TOTAL = 76;

const S1 = {
  numero: 1, total: TOTAL,
  titre: "La forme de la Terre",
  theme: "La planète Terre",
  objectif: "Être capable de décrire la forme de la Terre.",
  image: { id: "geo5_forme_terre", legende: "La Terre vue de l'espace : une sphère, presque ronde." },
  scene: { file: "scene_s01_forme_terre.jpg", mode: "document", legende: "Document : la maîtresse montre le globe ; Faniry compare la Terre à une orange." },
  revisionOuverture: [
    ["Que voyons-nous dans le ciel la nuit ?", "Nous voyons la lune et les étoiles."],
    ["Quand tu regardes loin devant toi, où finit le ciel ?", "Le ciel semble toucher la terre là-bas : c'est l'horizon."],
  ],
  miseEnSituation: {
    texte: "Faniry habite un village de pêcheurs, près de la mer. Un soir, son grand-père lui montre un bateau qui s'éloigne vers le large. « Regarde bien, dit le grand-père. Le bateau descend peu à peu, puis il disparaît complètement. Pourtant, il flotte toujours sur l'eau ! » Faniry se demande pourquoi le bateau disparaît ainsi, comme s'il se cachait derrière quelque chose.",
    question: "Pourquoi le bateau disparaît-il peu à peu à l'horizon ?",
    ra: "Parce que la Terre est ronde : le bateau descend derrière la courbe de la Terre.",
    support: "Schéma de la forme de la Terre (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « La forme de la Terre ». Après cette séance, vous serez capables de dire quelle est la forme de la Terre et de citer des preuves de cette forme.",
  observation: "Observez bien le schéma qui montre la Terre vue de l'espace, et le document où la maîtresse présente le globe.",
  supportObservation: "Globe terrestre et schéma (page Leçon)",
  analyse: [
    ["Quelle est la forme de la Terre ?", "La Terre est une sphère : elle est presque ronde."],
    ["Pourquoi le bateau de Faniry disparaît-il peu à peu ?", "Parce que la surface de la mer est courbe : le bateau passe derrière la courbe de la Terre."],
    ["Qui nous a montré des photos de la Terre entière ?", "Les astronautes, depuis l'espace, ont pris des photos de la Terre ronde."],
    ["À quel fruit ressemble la Terre ?", "La Terre ressemble à une orange : ronde, mais un peu aplatie."],
    ["La Terre est-elle parfaitement ronde comme un ballon de football ?", "Non, elle est un peu aplatie aux pôles, comme une orange."],
    ["Sur quoi vivons-nous, nous et tous les habitants du monde ?", "Nous vivons à la surface de la Terre, qui est presque ronde."],
  ],
  synthese: "Donc, la Terre est une sphère : elle est presque ronde, un peu aplatie aux pôles, comme une orange. Les bateaux qui disparaissent peu à peu à l'horizon et les photos prises depuis l'espace en sont des preuves.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Quelle est la forme de la Terre ?",
        "2. À quel fruit ressemble la Terre ?",
        "3. Qui a pris des photos de la Terre entière ?",
        "4. Pourquoi un bateau disparaît-il peu à peu à l'horizon ?",
      ],
      corrige: [
        "1. La Terre est une **sphère** : elle est presque **ronde**.",
        "2. La Terre ressemble à une **orange** : ronde mais un peu aplatie.",
        "3. Les **astronautes** ont pris des photos de la Terre depuis l'espace.",
        "4. Le bateau disparaît parce que la Terre est **ronde** : il passe derrière sa courbe.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. La Terre est plate comme une table.",
        "2. La Terre est presque ronde.",
        "3. Un bateau qui s'éloigne disparaît peu à peu à l'horizon.",
        "4. La Terre est un peu aplatie aux pôles.",
      ],
      corrige: [
        "1. **Faux** : la Terre est presque ronde, pas plate.",
        "2. **Vrai** : la Terre est une sphère, presque ronde.",
        "3. **Vrai** : le bateau passe derrière la courbe de la Terre ronde.",
        "4. **Vrai** : la Terre est un peu aplatie aux pôles, comme une orange.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : ronde — orange — horizon — astronautes.",
      items: [
        "La Terre est presque ……… .",
        "Elle est un peu aplatie aux pôles, comme une ……… .",
        "Le bateau disparaît peu à peu à l'……… .",
        "Les ……… ont photographié la Terre depuis l'espace.",
      ],
      corrige: [
        "La Terre est presque **ronde** / une **orange** / l'**horizon** / les **astronautes**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. La forme de la Terre est : A. carrée — B. presque ronde — C. plate",
        "2. La preuve de la rotondité de la Terre est : A. le bateau qui disparaît à l'horizon — B. la pluie qui tombe — C. le vent qui souffle",
        "3. La Terre est aplatie : A. au milieu — B. aux pôles — C. nulle part",
        "4. Les photos de la Terre entière ont été prises : A. par les pêcheurs — B. par les astronautes — C. par les agriculteurs",
      ],
      corrige: [
        "1. Réponse **B** : la Terre est presque ronde.",
        "2. Réponse **A** : le bateau qui disparaît derrière la courbe de la Terre.",
        "3. Réponse **B** : la Terre est un peu aplatie aux pôles.",
        "4. Réponse **B** : par les astronautes, depuis l'espace.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La Terre est presque ronde",
        paras: [
          "La Terre est une sphère : elle est presque ronde, comme une balle ou une orange.",
          "Nous ne voyons pas cette rondeur parce que nous sommes très petits à sa surface. Mais vue depuis l'espace, la Terre apparaît comme un grand disque bleu et vert.",
        ],
        exemples: [
          "Les astronautes ont pris de belles photos de la Terre ronde depuis l'espace.",
          "La lune, dans le ciel, est ronde elle aussi : c'est une sphère comme la Terre.",
        ],
      },
      {
        titre: "2. Les preuves de la rotondité de la Terre",
        paras: [
          "Depuis longtemps, les hommes ont remarqué des preuves que la Terre est ronde.",
          "Un bateau qui s'éloigne vers le large descend peu à peu, puis disparaît complètement : il passe derrière la courbe de la Terre.",
        ],
        exemples: [
          "Le grand-père de Faniry, pêcheur, voit les bateaux disparaître ainsi chaque jour.",
          "Sur la plage de Morondava, les pirogues qui partent en mer semblent descendre dans l'eau au loin.",
        ],
      },
      {
        titre: "3. Une orange aplatie aux pôles",
        paras: [
          "La Terre n'est pas parfaitement ronde : elle est un peu aplatie en haut et en bas, aux pôles, comme une orange posée sur une table.",
          "C'est pourquoi on dit qu'elle a la forme d'une sphère aplatie.",
        ],
        exemples: [
          "Quand on presse doucement une orange, elle s'aplatit un peu : la Terre ressemble à cela.",
        ],
      },
    ],
  },
  motsCles: ["sphère", "ronde", "horizon", "astronautes", "espace"],
  questionsRevision: [
    ["Quelle est la forme de la Terre ?", "La Terre est une sphère : elle est presque ronde."],
    ["Cite une preuve que la Terre est ronde.", "Le bateau qui disparaît peu à peu derrière la courbe de la Terre, à l'horizon."],
  ],
};

const S2 = {
  numero: 2, total: TOTAL,
  titre: "Les dimensions de la Terre",
  theme: "La planète Terre",
  objectif: "Être capable de citer les dimensions de la Terre : superficie, circonférence et diamètre.",
  image: { id: "geo5_dimensions_terre", legende: "Les dimensions de la Terre : diamètre, circonférence et superficie." },
  scene: { file: "scene_s02_dimensions.jpg", mode: "document", legende: "Document : mesurer le tour d'un grand ballon pour comprendre la circonférence." },
  miseEnSituation: {
    texte: "À l'école, la maîtresse apporte un grand ballon de jeu. « Ce ballon représente la Terre, dit-elle. Qui peut mesurer son tour avec ce ruban ? » Rova enroule le ruban autour du ballon et trouve la longueur du tour. « Très bien ! Alors, demanda Iavo, quelle est la taille de la vraie Terre ? »",
    question: "Comment peut-on donner la taille de la Terre qui est si grande ?",
    ra: "On donne ses dimensions : la superficie, la circonférence et le diamètre.",
    support: "Schéma des dimensions de la Terre (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les dimensions de la Terre ». Après cette séance, vous serez capables de citer la superficie, la circonférence et le diamètre de la Terre.",
  observation: "Observez bien le schéma qui montre les trois dimensions de la Terre, et le document des élèves qui mesurent le tour d'un ballon.",
  supportObservation: "Schéma des dimensions et ruban de mesure (page Leçon)",
  analyse: [
    ["Comment appelle-t-on la mesure de la surface de la Terre ?", "C'est la superficie de la Terre."],
    ["Quelle est environ la superficie de la Terre ?", "La superficie de la Terre est d'environ 510 millions de kilomètres carrés."],
    ["Comment appelle-t-on le tour complet de la Terre ?", "Le tour complet de la Terre s'appelle la circonférence."],
    ["Quelle est environ la circonférence de la Terre ?", "La circonférence de la Terre est d'environ 40 000 kilomètres."],
    ["Comment appelle-t-on la ligne qui traverse la Terre d'un côté à l'autre, en passant par le centre ?", "C'est le diamètre de la Terre."],
    ["Quelle est environ la longueur du diamètre de la Terre ?", "Le diamètre de la Terre mesure environ 12 742 kilomètres."],
  ],
  synthese: "Donc, la taille de la Terre se donne par trois dimensions : la superficie, environ 510 millions de kilomètres carrés ; la circonférence, environ 40 000 kilomètres ; et le diamètre, environ 12 742 kilomètres.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Comment appelle-t-on le tour complet de la Terre ?",
        "2. Quelle est environ la circonférence de la Terre ?",
        "3. Comment appelle-t-on la surface totale de la Terre ?",
        "4. Qu'est-ce que le diamètre de la Terre ?",
      ],
      corrige: [
        "1. Le tour complet de la Terre s'appelle la **circonférence**.",
        "2. La circonférence de la Terre est d'environ **40 000 kilomètres**.",
        "3. La surface totale de la Terre s'appelle la **superficie**.",
        "4. Le **diamètre** est la ligne qui traverse la Terre d'un côté à l'autre en passant par le centre.",
      ],
    },
    {
      consigne: "Relie chaque mesure à son nom.",
      items: [
        "1. Environ 510 millions de km²",
        "2. Environ 40 000 km",
        "3. Environ 12 742 km",
        "4. Le tour complet de la Terre",
      ],
      corrige: [
        "1 → **la superficie** de la Terre.",
        "2 → **la circonférence** de la Terre.",
        "3 → **le diamètre** de la Terre.",
        "4 → **la circonférence** de la Terre.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec : circonférence — superficie — diamètre — kilomètres.",
      items: [
        "La surface totale de la Terre s'appelle la ……… .",
        "Le tour complet de la Terre s'appelle la ……… .",
        "La ligne qui traverse la Terre par le centre est le ……… .",
        "La circonférence de la Terre mesure environ 40 000 ……… .",
      ],
      corrige: [
        "la **superficie** / la **circonférence** / le **diamètre** / 40 000 **kilomètres**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. La circonférence de la Terre mesure environ : A. 4 000 km — B. 40 000 km — C. 400 000 km",
        "2. La superficie de la Terre est d'environ : A. 510 millions de km² — B. 510 km² — C. 5 000 km²",
        "3. Le diamètre traverse la Terre : A. en passant par le centre — B. sur le bord — C. dans le ciel",
        "4. Mesurer le tour d'un ballon avec un ruban, c'est chercher : A. son diamètre — B. sa circonférence — C. sa superficie",
      ],
      corrige: [
        "1. Réponse **B** : environ 40 000 kilomètres.",
        "2. Réponse **A** : environ 510 millions de kilomètres carrés.",
        "3. Réponse **A** : le diamètre passe par le centre de la Terre.",
        "4. Réponse **B** : on cherche la circonférence du ballon.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La superficie de la Terre",
        paras: [
          "La superficie est la mesure de toute la surface de la Terre.",
          "La superficie de la Terre est d'environ 510 millions de kilomètres carrés (km²).",
          "La plus grande partie de cette surface est occupée par l'eau des océans.",
        ],
        exemples: [
          "Madagascar est toute petite à côté de la Terre entière.",
        ],
      },
      {
        titre: "2. La circonférence de la Terre",
        paras: [
          "La circonférence est le tour complet de la Terre, comme le tour d'un ballon mesuré avec un ruban.",
          "La circonférence de la Terre mesure environ 40 000 kilomètres.",
        ],
        exemples: [
          "Rova a mesuré le tour du grand ballon de l'école avec un ruban : elle a imité la mesure de la circonférence de la Terre.",
        ],
      },
      {
        titre: "3. Le diamètre de la Terre",
        paras: [
          "Le diamètre est la ligne droite qui traverse la Terre d'un côté à l'autre, en passant par son centre.",
          "Le diamètre de la Terre mesure environ 12 742 kilomètres.",
        ],
        exemples: [
          "Si on pouvait creuser un tunnel à travers la Terre, sa longueur serait le diamètre : environ 12 742 kilomètres.",
        ],
      },
    ],
  },
  motsCles: ["superficie", "circonférence", "diamètre", "kilomètre carré"],
  questionsRevision: [
    ["Comment appelle-t-on le tour complet de la Terre ?", "Le tour complet de la Terre s'appelle la circonférence, environ 40 000 kilomètres."],
    ["Qu'est-ce que le diamètre de la Terre ?", "C'est la ligne qui traverse la Terre en passant par le centre, environ 12 742 kilomètres."],
  ],
};

const S3 = {
  numero: 3, total: TOTAL,
  titre: "Le globe terrestre et le planisphère",
  theme: "La planète Terre",
  objectif: "Être capable de distinguer le globe terrestre du planisphère et de citer leurs avantages et leurs limites.",
  image: { id: "geo5_globe_planisphere", legende: "Le globe terrestre (rond) et le planisphère (à plat)." },
  scene: { file: "scene_s03_globe_planisphere.jpg", mode: "document", legende: "Document : Soana tient le globe ; Mamy déplie la carte du monde à plat." },
  miseEnSituation: {
    texte: "Pour les fêtes, les jumeaux de la famille de Tiana ont reçu deux cadeaux : une petite sœur a reçu un globe terrestre, et un frère a reçu une grande carte du monde à accrocher au mur. Les deux enfants regardent leurs cadeaux. « Le mien est le meilleur, dit la sœur, il montre la vraie forme de la Terre ! » « Le mien est plus pratique, répond le frère, on le plie et on l'emporte partout ! »",
    question: "Quel est l'avantage du globe terrestre, et quel est l'avantage du planisphère ?",
    ra: "Le globe montre la vraie forme ronde de la Terre ; le planisphère est une carte à plat, pratique à transporter.",
    support: "Schéma globe et planisphère (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Le globe terrestre et le planisphère ». Après cette séance, vous serez capables de distinguer ces deux représentations de la Terre et de donner leurs avantages et leurs limites.",
  observation: "Observez bien le schéma qui montre le globe terrestre à côté du planisphère, et le document des deux élèves.",
  supportObservation: "Globe terrestre et carte murale (page Leçon)",
  analyse: [
    ["Qu'est-ce que le globe terrestre ?", "Le globe terrestre est une représentation réduite de la Terre, en forme de sphère."],
    ["Qu'est-ce que le planisphère ?", "Le planisphère est la représentation de la Terre entière sur une surface plane."],
    ["Quelle est la différence entre le globe et le planisphère ?", "Le globe est rond comme la Terre ; le planisphère est plat, dessiné sur une feuille."],
    ["Quel est l'avantage du globe terrestre ?", "Il montre la vraie forme de la Terre et on peut le faire tourner."],
    ["Quel est l'avantage du planisphère ?", "Il se plie, se transporte et se fixe au mur : on voit toute la Terre d'un seul coup d'œil."],
    ["Quelle est la limite du planisphère ?", "Il déforme un peu la Terre : les régions près des pôles semblent plus grandes qu'en réalité."],
  ],
  synthese: "Donc, le globe terrestre est la représentation réduite et ronde de la Terre, fidèle à sa forme. Le planisphère est la représentation de la Terre sur une surface plane, pratique mais un peu déformée.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que le globe terrestre ?",
        "2. Qu'est-ce que le planisphère ?",
        "3. Quel est l'avantage du globe terrestre ?",
        "4. Quel est l'avantage du planisphère ?",
      ],
      corrige: [
        "1. Le **globe terrestre** est une représentation réduite de la Terre, ronde comme elle.",
        "2. Le **planisphère** est la représentation de la Terre entière sur une surface plane.",
        "3. Le globe montre la **vraie forme** de la Terre et on peut le faire tourner.",
        "4. Le planisphère se **plie et se transporte** : on voit toute la Terre d'un coup d'œil.",
      ],
    },
    {
      consigne: "Écris G si la phrase convient au globe terrestre, P si elle convient au planisphère.",
      items: [
        "1. Il est rond comme la Terre.",
        "2. Il se plie et se range dans un sac.",
        "3. On peut le faire tourner sur son support.",
        "4. Il est dessiné sur une surface plane.",
      ],
      corrige: [
        "1. **G** : le globe est rond comme la Terre.",
        "2. **P** : le planisphère se plie et se transporte.",
        "3. **G** : on fait tourner le globe sur son support.",
        "4. **P** : le planisphère est dessiné à plat.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec : globe terrestre — planisphère — ronde — plane.",
      items: [
        "La représentation réduite de la Terre en forme de sphère est le ……… .",
        "La représentation de la Terre sur une surface plane est le ……… .",
        "Le globe terrestre est ……… comme la vraie Terre.",
        "Le planisphère est dessiné sur une surface ……… .",
      ],
      corrige: [
        "le **globe terrestre** / le **planisphère** / **ronde** / **plane**.",
      ],
    },
    {
      consigne: "Vrai ou faux ?",
      items: [
        "1. Le globe terrestre est la représentation réduite de la Terre.",
        "2. Le planisphère garde exactement la forme ronde de la Terre.",
        "3. Le planisphère est pratique à transporter.",
        "4. Le globe terrestre peut se faire tourner.",
      ],
      corrige: [
        "1. **Vrai** : le globe est une représentation réduite de la Terre.",
        "2. **Faux** : le planisphère est plat, il déforme un peu la Terre.",
        "3. **Vrai** : il se plie et se transporte facilement.",
        "4. **Vrai** : on le fait tourner sur son support.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Le globe terrestre",
        paras: [
          "Le globe terrestre est une représentation réduite de la Terre : une petite sphère qui imite la forme réelle de notre planète.",
          "Sur le globe, on voit les continents, les océans, et on peut faire tourner la sphère sur son support pour voir toutes les régions.",
        ],
        exemples: [
          "Le globe de l'école est posé sur un support en bois et tourne facilement.",
        ],
      },
      {
        titre: "2. Le planisphère",
        paras: [
          "Le planisphère est la représentation de la surface de la Terre sur une surface plane, comme une grande carte du monde.",
          "On peut le fixer au mur, le plier ou le dérouler : c'est très pratique.",
        ],
        exemples: [
          "La carte du monde accrochée dans la classe de T5 est un planisphère.",
        ],
      },
      {
        titre: "3. Avantages et limites",
        paras: [
          "Le globe est fidèle à la forme de la Terre, mais il est encombrant et on ne voit qu'une moitié à la fois.",
          "Le planisphère montre toute la Terre d'un seul coup d'œil et se transporte facilement, mais il est plat : il déforme un peu les régions proches des pôles.",
        ],
        exemples: [
          "Sur certains planisphères, le Groenland paraît immense, alors qu'il est plus petit que l'Afrique en réalité.",
        ],
      },
    ],
  },
  motsCles: ["globe terrestre", "planisphère", "représentation", "surface plane"],
  questionsRevision: [
    ["Qu'est-ce qu'un planisphère ?", "C'est la représentation de la Terre entière sur une surface plane."],
    ["Cite un avantage du globe terrestre.", "Il montre la vraie forme ronde de la Terre."],
  ],
};

const S4 = {
  numero: 4, total: TOTAL,
  titre: "L'équateur et les hémisphères",
  theme: "La planète Terre",
  objectif: "Être capable de montrer l'équateur sur le globe et de nommer les deux hémisphères.",
  image: { id: "geo5_equateur_hemispheres", legende: "L'équateur partage la Terre en deux hémisphères." },
  scene: { file: "scene_s04_equateur.jpg", mode: "document", legende: "Document : le ruban rouge autour du globe montre l'équateur ; deux moitiés : Nord et Sud." },
  miseEnSituation: {
    texte: "Dans la classe, la maîtresse attache un ruban rouge autour du milieu du globe terrestre. « Que fait ce ruban ? » demande-t-elle. Koto lève la main : « Il fait le tour du globe ! » « Très bien, dit la maîtresse. Ce ruban partage la Terre en deux moitiés. Et devinez où se trouve notre Madagascar : en haut ou en bas du ruban ? »",
    question: "Où se trouve Madagascar par rapport au ruban rouge, c'est-à-dire par rapport à l'équateur ?",
    ra: "Madagascar se trouve en dessous de l'équateur, dans l'hémisphère Sud.",
    support: "Schéma de l'équateur et des hémisphères (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « L'équateur et les hémisphères ». Après cette séance, vous serez capables de montrer l'équateur sur le globe et de nommer les deux hémisphères.",
  observation: "Observez bien le schéma de la Terre coupée par la ligne rouge de l'équateur, et le document du ruban rouge autour du globe.",
  supportObservation: "Globe avec ruban et schéma (page Leçon)",
  analyse: [
    ["Comment s'appelle la ligne rouge qui entoure le milieu de la Terre ?", "C'est l'équateur."],
    ["Peut-on voir l'équateur si on voyage sur la Terre ?", "Non, c'est une ligne imaginaire : on ne la voit pas sur le terrain."],
    ["En combien de parties l'équateur partage-t-il la Terre ?", "L'équateur partage la Terre en deux parties égales."],
    ["Comment s'appelle la moitié au-dessus de l'équateur ?", "C'est l'hémisphère Nord."],
    ["Comment s'appelle la moitié en dessous de l'équateur ?", "C'est l'hémisphère Sud."],
    ["Dans quel hémisphère se trouve Madagascar ?", "Madagascar se trouve dans l'hémisphère Sud."],
  ],
  synthese: "Donc, l'équateur est une ligne imaginaire qui fait le tour de la Terre en son milieu. Il partage la Terre en deux hémisphères : l'hémisphère Nord et l'hémisphère Sud. Madagascar se trouve dans l'hémisphère Sud.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que l'équateur ?",
        "2. En combien de parties l'équateur partage-t-il la Terre ?",
        "3. Comment s'appellent les deux moitiés de la Terre ?",
        "4. Dans quel hémisphère se trouve Madagascar ?",
      ],
      corrige: [
        "1. L'**équateur** est une ligne imaginaire qui fait le tour du milieu de la Terre.",
        "2. Il partage la Terre en **deux parties égales**.",
        "3. Ce sont l'**hémisphère Nord** et l'**hémisphère Sud**.",
        "4. Madagascar se trouve dans l'**hémisphère Sud**.",
      ],
    },
    {
      consigne: "Complète le dessin de la Terre : écris les mots Équateur, Hémisphère Nord, Hémisphère Sud aux bons endroits, puis réponds : peut-on voir l'équateur sur le terrain ?",
      items: [
        "1. La ligne du milieu : ………",
        "2. La moitié en haut : ………",
        "3. La moitié en bas : ………",
        "4. Peut-on voir l'équateur sur le terrain ? ………",
      ],
      corrige: [
        "1. La ligne du milieu : l'**équateur**.",
        "2. La moitié en haut : l'**hémisphère Nord**.",
        "3. La moitié en bas : l'**hémisphère Sud**.",
        "4. **Non**, c'est une ligne imaginaire, on ne la voit pas.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec : équateur — imaginaire — hémisphère Nord — hémisphère Sud.",
      items: [
        "La ligne qui entoure le milieu de la Terre s'appelle l'……… .",
        "C'est une ligne ……… : on ne la voit pas sur le terrain.",
        "La moitié au-dessus de l'équateur est l'……… .",
        "La moitié en dessous est l'……… .",
      ],
      corrige: [
        "l'**équateur** / une ligne **imaginaire** / l'**hémisphère Nord** / l'**hémisphère Sud**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. L'équateur partage la Terre en : A. trois parties — B. deux parties égales — C. quatre parties",
        "2. Madagascar se trouve dans : A. l'hémisphère Nord — B. l'hémisphère Sud — C. sur l'équateur",
        "3. L'équateur est : A. une ligne imaginaire — B. une rivière — C. une montagne",
        "4. Sur le globe, l'équateur est souvent dessiné : A. en vertical — B. au milieu, à l'horizontale — C. en bas seulement",
      ],
      corrige: [
        "1. Réponse **B** : deux parties égales.",
        "2. Réponse **B** : Madagascar est dans l'hémisphère Sud.",
        "3. Réponse **A** : une ligne imaginaire.",
        "4. Réponse **B** : au milieu du globe, à l'horizontale.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Une ligne imaginaire",
        paras: [
          "L'équateur est une ligne imaginaire : elle n'existe pas sur le terrain, on ne peut ni la voir ni la toucher.",
          "Elle fait le tour de la Terre en son milieu, comme un ruban attaché autour d'une orange.",
        ],
        exemples: [
          "Sur le globe de la classe, l'équateur est dessiné en rouge."],
      },
      {
        titre: "2. Deux hémisphères",
        paras: [
          "L'équateur partage la Terre en deux moitiés égales appelées hémisphères.",
          "La moitié au-dessus de l'équateur est l'hémisphère Nord ; la moitié en dessous est l'hémisphère Sud.",
        ],
        exemples: [
          "Le mot « hémisphère » veut dire « moitié de sphère ».",
        ],
      },
      {
        titre: "3. Madagascar dans l'hémisphère Sud",
        paras: [
          "Madagascar se trouve en dessous de l'équateur : notre grande île est dans l'hémisphère Sud.",
          "Quand nous sommes en saison chaude, les habitants de l'hémisphère Nord sont souvent en saison fraîche.",
        ],
        exemples: [
          "En juillet, il fait frais à Antananarivo pendant que les élèves de France, dans l'hémisphère Nord, sont en vacances d'été.",
        ],
      },
    ],
  },
  motsCles: ["équateur", "hémisphère Nord", "hémisphère Sud", "imaginaire"],
  questionsRevision: [
    ["Qu'est-ce que l'équateur ?", "C'est une ligne imaginaire qui fait le tour du milieu de la Terre et la partage en deux hémisphères."],
    ["Dans quel hémisphère se trouve Madagascar ?", "Madagascar se trouve dans l'hémisphère Sud."],
  ],
};

const S5 = {
  numero: 5, total: TOTAL,
  titre: "Les tropiques et les cercles polaires",
  theme: "La planète Terre",
  objectif: "Être capable de nommer les tropiques et les cercles polaires et de les placer sur le globe.",
  image: { id: "geo5_tropiques_cercles", legende: "Les cinq grandes lignes imaginaires : cercles polaires, tropiques et équateur." },
  scene: { file: "scene_s05_tropiques.jpg", mode: "document", legende: "Document : les élastiques colorés autour du globe montrent les lignes imaginaires." },
  miseEnSituation: {
    texte: "Aujourd'hui, la maîtresse apporte des élastiques de couleurs : un rouge, deux orange et deux violets. Avec les élèves, elle les place autour du globe : le rouge au milieu, les orange au-dessus et en dessous, les violets tout en haut et tout en bas. « Chaque élastique a un nom, dit-elle. Celui qui touche Madagascar, nous allons l'apprendre aujourd'hui ! »",
    question: "Quelles sont ces lignes imaginaires, et laquelle touche Madagascar ?",
    ra: "Ce sont les tropiques et les cercles polaires ; le tropique du Capricorne touche le Sud de Madagascar.",
    support: "Schéma des lignes imaginaires (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les tropiques et les cercles polaires ». Après cette séance, vous serez capables de nommer les lignes imaginaires du globe et de dire laquelle traverse Madagascar.",
  observation: "Observez bien le schéma des cinq lignes imaginaires autour de la Terre, et le document des élastiques colorés sur le globe.",
  supportObservation: "Globe et schéma des lignes (page Leçon)",
  analyse: [
    ["Combien de grandes lignes imaginaires voit-on sur le schéma, avec l'équateur ?", "On voit cinq lignes : deux cercles polaires, deux tropiques et l'équateur."],
    ["Comment s'appelle la ligne imaginaire au-dessus de l'équateur ?", "C'est le tropique du Cancer."],
    ["Comment s'appelle la ligne imaginaire en dessous de l'équateur ?", "C'est le tropique du Capricorne."],
    ["Comment s'appellent les lignes proches du haut et du bas du globe ?", "Ce sont le cercle polaire Arctique, en haut, et le cercle polaire Antarctique, en bas."],
    ["Quel tropique touche la partie sud de Madagascar ?", "C'est le tropique du Capricorne."],
    ["À quoi servent ces lignes imaginaires ?", "Elles aident à situer les lieux sur le globe : au nord ou au sud de l'équateur."],
  ],
  synthese: "Donc, autour de la Terre, on dessine d'autres lignes imaginaires : le tropique du Cancer et le tropique du Capricorne, de part et d'autre de l'équateur, et les cercles polaires Arctique et Antarctique, près des pôles. Le tropique du Capricorne traverse la partie sud de Madagascar.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Comment s'appelle la ligne imaginaire au-dessus de l'équateur ?",
        "2. Comment s'appelle la ligne imaginaire en dessous de l'équateur ?",
        "3. Comment s'appellent les lignes proches des pôles ?",
        "4. Quel tropique touche Madagascar ?",
      ],
      corrige: [
        "1. C'est le **tropique du Cancer**.",
        "2. C'est le **tropique du Capricorne**.",
        "3. Ce sont le **cercle polaire Arctique** et le **cercle polaire Antarctique**.",
        "4. Le **tropique du Capricorne** touche la partie sud de Madagascar.",
      ],
    },
    {
      consigne: "Complète avec : Cancer — Capricorne — Arctique — Antarctique.",
      items: [
        "Le tropique du ……… se trouve au-dessus de l'équateur.",
        "Le tropique du ……… se trouve en dessous de l'équateur.",
        "Le cercle polaire ……… est près du pôle Nord.",
        "Le cercle polaire ……… est près du pôle Sud.",
      ],
      corrige: [
        "tropique du **Cancer** / tropique du **Capricorne** / cercle polaire **Arctique** / cercle polaire **Antarctique**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le tropique du Capricorne se trouve : A. au-dessus de l'équateur — B. en dessous de l'équateur — C. sur l'équateur",
        "2. Le cercle polaire Arctique est proche : A. du pôle Nord — B. du pôle Sud — C. de l'équateur",
        "3. Madagascar est traversée par : A. le tropique du Cancer — B. le tropique du Capricorne — C. aucun tropique",
        "4. Ces lignes sont appelées imaginaires parce que : A. elles sont invisibles sur le terrain — B. elles sont dans le ciel — C. elles sont dessinées par les enfants",
      ],
      corrige: [
        "1. Réponse **B** : en dessous de l'équateur.",
        "2. Réponse **A** : proche du pôle Nord.",
        "3. Réponse **B** : le tropique du Capricorne, dans le Sud de Madagascar.",
        "4. Réponse **A** : on ne les voit pas sur le terrain.",
      ],
    },
    {
      consigne: "Remets en ordre, du haut vers le bas du globe : cercle polaire Antarctique — tropique du Cancer — équateur — cercle polaire Arctique — tropique du Capricorne.",
      items: [
        "1. ………",
        "2. ………",
        "3. ………",
        "4. ………",
        "5. ………",
      ],
      corrige: [
        "Du haut vers le bas : 1. **cercle polaire Arctique** — 2. **tropique du Cancer** — 3. **équateur** — 4. **tropique du Capricorne** — 5. **cercle polaire Antarctique**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Les deux tropiques",
        paras: [
          "Le tropique du Cancer est une ligne imaginaire placée au-dessus de l'équateur.",
          "Le tropique du Capricorne est une ligne imaginaire placée en dessous de l'équateur.",
          "Le tropique du Capricorne traverse la partie sud de Madagascar, au sud de Tuléar.",
        ],
        exemples: [
          "Les régions situées entre les deux tropiques reçoivent beaucoup de chaleur du soleil toute l'année.",
        ],
      },
      {
        titre: "2. Les deux cercles polaires",
        paras: [
          "Le cercle polaire Arctique est une ligne imaginaire proche du pôle Nord.",
          "Le cercle polaire Antarctique est une ligne imaginaire proche du pôle Sud.",
          "Près de ces cercles, il fait très froid : ce sont les régions polaires.",
        ],
        exemples: [
          "Au-delà du cercle polaire Antarctique se trouve l'Antarctique, recouvert de glace.",
        ],
      },
      {
        titre: "3. Des lignes pour se repérer",
        paras: [
          "Avec l'équateur, les tropiques et les cercles polaires forment les grandes lignes imaginaires du globe.",
          "Elles aident à situer les lieux : on dit qu'un pays se trouve au nord du tropique du Cancer ou au sud de l'équateur, par exemple.",
        ],
        exemples: [
          "Sur le planisphère de la classe, ces lignes sont dessinées en pointillés.",
        ],
      },
    ],
  },
  motsCles: ["tropique du Cancer", "tropique du Capricorne", "cercle polaire", "lignes imaginaires"],
  questionsRevision: [
    ["Nomme les deux tropiques.", "Le tropique du Cancer, au-dessus de l'équateur, et le tropique du Capricorne, en dessous."],
    ["Quelle ligne imaginaire touche le sud de Madagascar ?", "Le tropique du Capricorne."],
  ],
};

const S6 = {
  numero: 6, total: TOTAL,
  titre: "Les pôles et le méridien de Greenwich",
  theme: "La planète Terre",
  objectif: "Être capable de montrer les pôles et le méridien de Greenwich sur le globe.",
  image: { id: "geo5_poles_greenwich", legende: "Les pôles et le méridien de Greenwich, méridien d'origine." },
  scene: { file: "scene_s06_poles_greenwich.jpg", mode: "document", legende: "Document : le fanion au sommet du globe montre le pôle Nord ; le ruban rouge, un méridien." },
  miseEnSituation: {
    texte: "Pendant le jeu du globe, Hery pose un petit fanion tout au sommet du globe terrestre. « Regarde, dit-il, mon fanion est au point le plus haut de la Terre ! » La maîtresse sourit : « Ce point s'appelle le pôle Nord. Et si tu descends ton ruban rouge tout droit jusqu'en bas, tu dessineras une ligne très spéciale qui passe par l'Angleterre : le méridien de Greenwich. »",
    question: "Comment s'appellent le point le plus au nord et le point le plus au sud de la Terre, et la ligne numéro 0 ?",
    ra: "Ce sont le pôle Nord et le pôle Sud ; la ligne numéro 0 est le méridien de Greenwich.",
    support: "Schéma des pôles et du méridien (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les pôles et le méridien de Greenwich ». Après cette séance, vous serez capables de montrer les pôles et le méridien d'origine sur le globe.",
  observation: "Observez bien le schéma de la Terre avec ses deux pôles et les méridiens, dont celui de Greenwich en rouge.",
  supportObservation: "Globe et schéma des méridiens (page Leçon)",
  analyse: [
    ["Comment s'appelle le point le plus au nord de la Terre ?", "C'est le pôle Nord."],
    ["Comment s'appelle le point le plus au sud de la Terre ?", "C'est le pôle Sud."],
    ["Qu'est-ce qu'un méridien ?", "Un méridien est une ligne imaginaire qui relie le pôle Nord au pôle Sud."],
    ["Combien y a-t-il de méridiens sur le globe ?", "Il y a beaucoup de méridiens : ils entourent toute la Terre."],
    ["Comment appelle-t-on le méridien numéro 0 ?", "C'est le méridien de Greenwich, ou méridien d'origine."],
    ["Où passe le méridien de Greenwich ?", "Il passe près de Londres, en Angleterre, dans la ville de Greenwich."],
  ],
  synthese: "Donc, le pôle Nord et le pôle Sud sont les deux points extrêmes de la Terre. Les méridiens sont des lignes imaginaires qui relient les deux pôles. Le méridien de Greenwich est le méridien d'origine : c'est le méridien numéro 0.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Comment s'appelle le point le plus au nord de la Terre ?",
        "2. Comment s'appelle le point le plus au sud de la Terre ?",
        "3. Qu'est-ce qu'un méridien ?",
        "4. Comment appelle-t-on le méridien numéro 0 ?",
      ],
      corrige: [
        "1. Le point le plus au nord est le **pôle Nord**.",
        "2. Le point le plus au sud est le **pôle Sud**.",
        "3. Un **méridien** est une ligne imaginaire qui relie le pôle Nord au pôle Sud.",
        "4. C'est le **méridien de Greenwich**, le méridien d'origine.",
      ],
    },
    {
      consigne: "Vrai ou faux ?",
      items: [
        "1. Les méridiens vont du pôle Nord au pôle Sud.",
        "2. Le méridien de Greenwich porte le numéro 10.",
        "3. Le pôle Sud est le point le plus au sud de la Terre.",
        "4. Il n'existe qu'un seul méridien sur le globe.",
      ],
      corrige: [
        "1. **Vrai** : les méridiens relient les deux pôles.",
        "2. **Faux** : c'est le méridien numéro 0, le méridien d'origine.",
        "3. **Vrai** : c'est le point le plus au sud.",
        "4. **Faux** : il y a de très nombreux méridiens autour de la Terre.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec : pôle Nord — pôle Sud — méridien — Greenwich.",
      items: [
        "Le point le plus au nord de la Terre est le ……… .",
        "Le point le plus au sud de la Terre est le ……… .",
        "La ligne imaginaire qui relie les deux pôles est un ……… .",
        "Le méridien d'origine s'appelle méridien de ……… .",
      ],
      corrige: [
        "le **pôle Nord** / le **pôle Sud** / un **méridien** / méridien de **Greenwich**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Un méridien relie : A. l'équateur au tropique — B. le pôle Nord au pôle Sud — C. Paris à Antananarivo",
        "2. Le méridien de Greenwich est : A. le méridien d'origine, numéro 0 — B. une montagne — C. un océan",
        "3. Le fanion de Hery, au sommet du globe, marque : A. le pôle Sud — B. le pôle Nord — C. l'équateur",
        "4. Les pôles sont : A. les points extrêmes de la Terre — B. des lignes imaginaires — C. des îles",
      ],
      corrige: [
        "1. Réponse **B** : le pôle Nord au pôle Sud.",
        "2. Réponse **A** : le méridien d'origine, numéro 0.",
        "3. Réponse **B** : le pôle Nord.",
        "4. Réponse **A** : les points extrêmes de la Terre.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Les deux pôles",
        paras: [
          "Le pôle Nord est le point le plus au nord de la Terre ; le pôle Sud est le point le plus au sud.",
          "Ce sont les deux extrémités de la Terre, comme les deux bouts d'une orange.",
        ],
        exemples: [
          "Au pôle Sud se trouve l'Antarctique, un continent couvert de glace.",
        ],
      },
      {
        titre: "2. Les méridiens",
        paras: [
          "Les méridiens sont des lignes imaginaires qui relient le pôle Nord au pôle Sud.",
          "Ils entourent la Terre comme les quartiers d'une orange, et ils croisent l'équateur.",
        ],
        exemples: [
          "Sur le globe de la classe, les méridiens sont dessinés en fines lignes verticales.",
        ],
      },
      {
        titre: "3. Le méridien de Greenwich",
        paras: [
          "Parmi tous les méridiens, un seul sert de départ pour compter les autres : c'est le méridien de Greenwich.",
          "On l'appelle aussi le méridien d'origine : c'est le méridien numéro 0.",
          "Il tient son nom de la ville de Greenwich, en Angleterre, où il a été choisi.",
        ],
        exemples: [
          "Grâce au méridien de Greenwich, chaque lieu de la Terre peut être situé avec précision.",
        ],
      },
    ],
  },
  motsCles: ["pôle Nord", "pôle Sud", "méridien", "Greenwich"],
  questionsRevision: [
    ["Qu'est-ce qu'un méridien ?", "C'est une ligne imaginaire qui relie le pôle Nord au pôle Sud."],
    ["Comment appelle-t-on le méridien numéro 0 ?", "Le méridien de Greenwich, ou méridien d'origine."],
  ],
};

const S7 = {
  numero: 7, total: TOTAL,
  titre: "Les sept continents",
  theme: "La planète Terre",
  objectif: "Être capable de nommer les sept continents et de les classer selon leur taille.",
  image: { id: "geo5_continents", legende: "Les sept continents du globe terrestre." },
  scene: { file: "scene_s07_continents.jpg", mode: "document", legende: "Document : placer les grandes pièces des continents sur la carte du monde." },
  miseEnSituation: {
    texte: "Dans la salle de jeux de l'école, les élèves disposent d'une grande carte du monde en tapis, posée sur le sol. Autour d'elle, sept grandes pièces en bois : vertes, orange, violettes, roses et grises. « Chaque pièce est un continent », explique la maîtresse. Vola prend la plus grande pièce et cherche sa place. « À nous de les remettre toutes au bon endroit ! »",
    question: "Combien y a-t-il de continents, et comment s'appellent-ils ?",
    ra: "Il y a sept continents : l'Afrique, l'Amérique du Nord, l'Amérique du Sud, l'Antarctique, l'Asie, l'Europe et l'Océanie.",
    support: "Schéma des sept continents (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les sept continents ». Après cette séance, vous serez capables de nommer les sept continents et de dire quel est le plus grand.",
  observation: "Observez bien le planisphère qui montre les sept continents en couleurs, et le document du jeu de la carte au sol.",
  supportObservation: "Planisphère des continents (page Leçon)",
  analyse: [
    ["Qu'est-ce qu'un continent ?", "Un continent est une très grande étendue de terre entourée d'océans."],
    ["Combien y a-t-il de continents sur la Terre ?", "Il y a sept continents."],
    ["Cite les sept continents.", "L'Afrique, l'Amérique du Nord, l'Amérique du Sud, l'Antarctique, l'Asie, l'Europe et l'Océanie."],
    ["Quel est le plus grand continent ?", "Le plus grand continent est l'Asie."],
    ["Quel continent est recouvert de glace ?", "L'Antarctique est recouvert de glace."],
    ["Quel est le continent le plus proche de Madagascar ?", "C'est l'Afrique, qui se trouve à l'ouest de notre île."],
  ],
  synthese: "Donc, un continent est une très grande étendue de terre. La Terre compte sept continents : l'Afrique, l'Amérique du Nord, l'Amérique du Sud, l'Antarctique, l'Asie, l'Europe et l'Océanie. Le plus grand est l'Asie, et le plus proche de Madagascar est l'Afrique.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'un continent ?",
        "2. Combien y a-t-il de continents ?",
        "3. Quel est le plus grand continent ?",
        "4. Quel continent est le plus proche de Madagascar ?",
      ],
      corrige: [
        "1. Un **continent** est une très grande étendue de terre entourée d'océans.",
        "2. Il y a **sept** continents.",
        "3. Le plus grand continent est l'**Asie**.",
        "4. C'est l'**Afrique**, à l'ouest de Madagascar.",
      ],
    },
    {
      consigne: "Classe ces continents du plus grand au plus petit : Océanie — Afrique — Asie — Europe.",
      items: [
        "1. ………",
        "2. ………",
        "3. ………",
        "4. ………",
      ],
      corrige: [
        "1. **Asie** — 2. **Afrique** — 3. **Europe** — 4. **Océanie** (du plus grand au plus petit).",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec : Asie — Antarctique — sept — Afrique.",
      items: [
        "La Terre compte ……… continents.",
        "Le plus grand continent est l'……… .",
        "Le continent recouvert de glace est l'……… .",
        "Le continent le plus proche de Madagascar est l'……… .",
      ],
      corrige: [
        "**sept** continents / l'**Asie** / l'**Antarctique** / l'**Afrique**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Un continent est : A. une très grande étendue de terre — B. une petite île — C. un océan",
        "2. L'Amérique du Nord et l'Amérique du Sud forment : A. un seul continent — B. deux continents — C. trois continents",
        "3. L'Antarctique est : A. chaud et sablonneux — B. recouvert de glace — C. un océan",
        "4. Dans l'alphabet des continents, l'Océanie se trouve : A. près de l'Afrique — B. près de l'Asie, à l'est — C. entre l'Europe et l'Afrique",
      ],
      corrige: [
        "1. Réponse **A** : une très grande étendue de terre.",
        "2. Réponse **B** : deux continents.",
        "3. Réponse **B** : recouvert de glace.",
        "4. Réponse **B** : à l'est de l'Asie.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Qu'est-ce qu'un continent ?",
        paras: [
          "Un continent est une très grande étendue de terre entourée d'océans.",
          "Les continents sont si grands qu'ils regroupent de très nombreux pays.",
        ],
        exemples: [
          "L'Afrique, où se trouve l'océan Indien à l'est, compte plus de cinquante pays.",
        ],
      },
      {
        titre: "2. Les sept continents",
        paras: [
          "La Terre compte sept continents : l'Afrique, l'Amérique du Nord, l'Amérique du Sud, l'Antarctique, l'Asie, l'Europe et l'Océanie.",
          "Du plus grand au plus petit, on retient surtout que l'Asie est la plus vaste, suivie de l'Afrique, puis des Amériques, de l'Antarctique, de l'Europe et enfin de l'Océanie.",
        ],
        exemples: [
          "L'Europe et l'Asie sont reliées par la terre : certains les appellent l'Eurasie.",
          "Madagascar, elle, est une île : elle appartient à l'océan Indien, au large de l'Afrique.",
        ],
      },
      {
        titre: "3. Madagascar et l'Afrique",
        paras: [
          "Le continent le plus proche de Madagascar est l'Afrique, à l'ouest, de l'autre côté du canal de Mozambique.",
          "Sur le planisphère, Madagascar apparaît comme une grande île rouge et verte au bord de l'Afrique.",
        ],
        exemples: [
          "En bateau, il faut environ deux jours pour relier Madagascar à la côte africaine du Mozambique.",
        ],
      },
    ],
  },
  motsCles: ["continent", "Asie", "Afrique", "Antarctique", "Océanie"],
  questionsRevision: [
    ["Combien y a-t-il de continents ?", "Il y a sept continents."],
    ["Quel est le plus grand continent, et le plus proche de Madagascar ?", "Le plus grand est l'Asie ; le plus proche de Madagascar est l'Afrique."],
  ],
};

const topics = [S1, S2, S3, S4, S5, S6, S7];

module.exports = { topics };
