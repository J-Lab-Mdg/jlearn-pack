// data-unite1.js — UNITÉ 1 : L'ORIENTATION GÉOGRAPHIQUE (Séances 1 à 8)
// Contenu rédactionnel conforme au Programme d'études officiel T4 — Géographie (p. 118)
const TOTAL = 76;

const S1 = {
  numero: 1, total: TOTAL,
  titre: "Le lever et le coucher du soleil : l'Est et l'Ouest",
  theme: "L'orientation géographique",
  objectif: "Être capable de repérer l'Est et l'Ouest à partir du lever et du coucher du soleil.",
  image: { id: "geot4_lever_coucher_soleil", legende: "Le lever du soleil (à l'Est) et le coucher du soleil (à l'Ouest)." },
  // I. Révision — première séance de l'année : questions d'éveil sur le vécu
  revisionOuverture: [
    ["Que vois-tu dans le ciel quand tu pars à l'école le matin ?", "Le soleil qui se lève."],
    ["Que fait le soleil le soir ?", "Le soleil se couche et la nuit arrive."],
  ],
  miseEnSituation: {
    texte: "Chaque matin, Rova accompagne sa grand-mère au marché. Un matin, sa grand-mère s'arrête, montre le ciel et lui dit : « Regarde bien, le soleil se lève toujours de ce côté-là. » Le soir, en rentrant, Rova remarque que le soleil descend à l'opposé, derrière la colline. Elle se demande comment s'appellent ces deux côtés du ciel.",
    question: "Où voyons-nous le soleil le matin, et où le voyons-nous le soir ?",
    ra: "Le matin, nous voyons le soleil se lever d'un côté ; le soir, nous le voyons se coucher du côté opposé.",
    support: "Image du lever et du coucher du soleil (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Le lever et le coucher du soleil : l'Est et l'Ouest ». Après cette séance, vous serez capables de repérer l'Est et l'Ouest grâce au soleil.",
  observation: "Regardez et observez bien l'image qui montre le soleil le matin et le soleil le soir.",
  supportObservation: "Image du lever et du coucher du soleil (page Leçon)",
  analyse: [
    ["Que fait le soleil le matin ?", "Le matin, le soleil se lève."],
    ["De quel côté du ciel le soleil se lève-t-il ?", "Il se lève du côté appelé l'Est."],
    ["Que fait le soleil le soir ?", "Le soir, le soleil se couche."],
    ["De quel côté du ciel le soleil se couche-t-il ?", "Il se couche du côté appelé l'Ouest."],
    ["Le matin, si tu regardes le soleil qui se lève, où se trouve l'Est ?", "L'Est est devant moi."],
    ["Et où se trouve alors l'Ouest ?", "L'Ouest est derrière moi."],
  ],
  synthese: "Donc, le soleil se lève toujours du même côté : ce côté s'appelle l'Est. Il se couche du côté opposé : ce côté s'appelle l'Ouest. Quand nous regardons le soleil qui se lève, l'Est est devant nous et l'Ouest est derrière nous.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Que fait le soleil chaque matin ?",
        "2. De quel côté le soleil se lève-t-il ?",
        "3. Que fait le soleil chaque soir ?",
        "4. De quel côté le soleil se couche-t-il ?",
      ],
      corrige: [
        "1. Chaque matin, le soleil **se lève**.",
        "2. Le soleil se lève du côté de l'**Est**.",
        "3. Chaque soir, le soleil **se couche**.",
        "4. Le soleil se couche du côté de l'**Ouest**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le soleil se lève à l'Ouest.",
        "2. Le soleil se couche à l'Ouest.",
        "3. Le matin, le soleil monte dans le ciel.",
        "4. Quand nous regardons le soleil qui se lève, l'Ouest est devant nous.",
      ],
      corrige: [
        "1. **Faux** : le soleil se lève à l'**Est**.",
        "2. **Vrai** : le soleil se couche à l'**Ouest**.",
        "3. **Vrai** : le matin, le soleil monte dans le ciel.",
        "4. **Faux** : devant nous, c'est l'**Est** ; l'Ouest est derrière nous.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : lève — couche — Est — Ouest.",
      items: [
        "Chaque matin, le soleil se ……… du côté de l'Est.",
        "Chaque soir, il se ……… du côté de l'Ouest.",
        "Le côté où le soleil se lève s'appelle l'……… .",
        "Le côté où le soleil se couche s'appelle l'……… .",
      ],
      corrige: [
        "Le soleil se **lève** / se **couche** / l'**Est** / l'**Ouest**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le soleil se lève : A. au Nord — B. à l'Est — C. à l'Ouest",
        "2. Le soleil se couche : A. à l'Ouest — B. au Sud — C. à l'Est",
        "3. Le matin, en regardant le soleil qui se lève, l'Est est : A. derrière nous — B. devant nous — C. à notre gauche",
        "4. Le côté opposé à l'Est, c'est : A. le Nord — B. le Sud — C. l'Ouest",
      ],
      corrige: [
        "1. Réponse **B** : le soleil se lève à l'Est.",
        "2. Réponse **A** : le soleil se couche à l'Ouest.",
        "3. Réponse **B** : l'Est est devant nous.",
        "4. Réponse **C** : le côté opposé à l'Est, c'est l'Ouest.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Le lever du soleil",
        paras: [
          "Chaque matin, le soleil apparaît au-dessus de l'horizon : on dit qu'il se lève.",
          "Le côté du ciel où le soleil se lève s'appelle l'Est. Le matin, quand nous regardons le soleil qui se lève, l'Est est devant nous.",
        ],
        exemples: [
          "Rova part à l'école tôt le matin : le soleil qui se lève brille devant elle, elle marche vers l'Est.",
          "À l'aube, les coqs du village chantent quand le soleil se lève à l'Est.",
        ],
      },
      {
        titre: "2. Le coucher du soleil",
        paras: [
          "Chaque soir, le soleil descend et disparaît derrière l'horizon : on dit qu'il se couche.",
          "Le côté du ciel où le soleil se couche s'appelle l'Ouest. Le soir, quand nous regardons le soleil qui se couche, l'Ouest est devant nous et l'Est est derrière nous.",
        ],
        exemples: [
          "Le soir, Koto joue devant la maison : il voit le soleil descendre derrière la colline, cette colline se trouve à l'Ouest du village.",
        ],
      },
      {
        titre: "3. Se repérer avec le soleil",
        paras: [
          "Le lever et le coucher du soleil nous aident à trouver l'Est et l'Ouest, le matin et le soir.",
        ],
        exemples: [
          "Le matin : le soleil se lève, l'Est est du côté du soleil levant.",
          "Le soir : le soleil se couche, l'Ouest est du côté du soleil couchant.",
        ],
      },
    ],
  },
  motsCles: ["Est", "Ouest", "se lève", "se couche", "horizon"],
  questionsRevision: [
    ["De quel côté le soleil se lève-t-il ?", "Le soleil se lève du côté de l'Est."],
    ["De quel côté le soleil se couche-t-il ?", "Le soleil se couche du côté de l'Ouest."],
  ],
};

const S2 = {
  numero: 2, total: TOTAL,
  titre: "Le mouvement apparent du soleil",
  theme: "L'orientation géographique",
  objectif: "Être capable d'identifier l'Est et l'Ouest à partir du mouvement apparent du soleil.",
  image: { id: "geot4_mouvement_soleil", legende: "Le trajet du soleil dans le ciel pendant la journée." },
  miseEnSituation: {
    texte: "Hier matin, la maîtresse a demandé à Aina de planter un bâton dans la cour de l'école. À midi, l'ombre du bâton avait raccourci et changé de place. Le soir, avant de rentrer, Aina voit que l'ombre a encore bougé. Elle se demande ce qui a fait bouger l'ombre du bâton.",
    question: "Qu'est-ce qui se déplace dans le ciel pendant la journée ?",
    ra: "Le soleil se déplace dans le ciel pendant la journée.",
    support: "Schéma du mouvement apparent du soleil (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Le mouvement apparent du soleil ». Après cette séance, vous serez capables de décrire le trajet du soleil dans le ciel et de retrouver l'Est et l'Ouest à tout moment de la journée.",
  observation: "Regardez et observez bien le schéma qui montre le trajet du soleil du matin au soir.",
  supportObservation: "Schéma du mouvement apparent du soleil (page Leçon)",
  analyse: [
    ["Où se trouve le soleil le matin ?", "Le matin, le soleil se lève à l'Est."],
    ["Que fait le soleil pendant la matinée ?", "Il monte de plus en plus haut dans le ciel."],
    ["Où se trouve le soleil à midi ?", "À midi, le soleil est haut dans le ciel."],
    ["Que fait le soleil l'après-midi ?", "Il descend doucement vers l'horizon."],
    ["Où se couche le soleil le soir ?", "Le soir, le soleil se couche à l'Ouest."],
    ["Comment appelle-t-on ce trajet du soleil dans le ciel ?", "C'est le mouvement apparent du soleil."],
  ],
  synthese: "Donc, pendant la journée, le soleil semble se déplacer dans le ciel : il se lève à l'Est, il est haut à midi, puis il se couche à l'Ouest. Ce trajet s'appelle le mouvement apparent du soleil. Il nous aide à retrouver l'Est et l'Ouest.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Où se lève le soleil chaque matin ?",
        "2. Où se trouve le soleil à midi ?",
        "3. Où le soleil se couche-t-il le soir ?",
        "4. Comment appelle-t-on le trajet du soleil dans le ciel ?",
      ],
      corrige: [
        "1. Chaque matin, le soleil se lève à l'**Est**.",
        "2. À midi, le soleil est **haut dans le ciel**.",
        "3. Le soir, le soleil se couche à l'**Ouest**.",
        "4. Ce trajet s'appelle le **mouvement apparent du soleil**.",
      ],
    },
    {
      consigne: "Écris 1, 2, 3, 4 pour ranger les étapes de la journée dans l'ordre.",
      items: [
        "……… Le soleil se couche à l'Ouest.",
        "……… Le soleil se lève à l'Est.",
        "……… Le soleil est haut dans le ciel.",
        "……… La nuit arrive et les étoiles apparaissent.",
      ],
      corrige: [
        "Le soleil se lève : **1** / le soleil est haut : **2** / le soleil se couche : **3** / la nuit arrive : **4**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : Est — Ouest — haut — mouvement.",
      items: [
        "Le matin, le soleil se lève à l'……… .",
        "À midi, il est ……… dans le ciel.",
        "Le soir, il se couche à l'……… .",
        "Le trajet du soleil dans le ciel s'appelle le ……… apparent du soleil.",
      ],
      corrige: ["**Est** / **haut** / **Ouest** / **mouvement**."],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le soleil reste au même endroit dans le ciel toute la journée.",
        "2. À midi, le soleil est haut dans le ciel.",
        "3. Le soleil se couche du côté de l'Est.",
        "4. Le mouvement apparent du soleil nous aide à trouver l'Est et l'Ouest.",
      ],
      corrige: [
        "1. **Faux** : le soleil semble se déplacer pendant la journée.",
        "2. **Vrai** : à midi, le soleil est haut dans le ciel.",
        "3. **Faux** : le soleil se couche à l'**Ouest**.",
        "4. **Vrai** : il nous montre l'Est et l'Ouest.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Le trajet du soleil pendant la journée",
        paras: [
          "Le matin, le soleil se lève à l'Est : il apparaît au-dessus de l'horizon.",
          "À midi, le soleil est haut dans le ciel : c'est le moment où il éclaire le plus fort.",
          "Le soir, le soleil descend et se couche à l'Ouest, à l'opposé de l'Est.",
        ],
      },
      {
        titre: "2. Le mouvement apparent du soleil",
        paras: [
          "Pendant la journée, le soleil semble se déplacer dans le ciel, de l'Est vers l'Ouest : c'est le mouvement apparent du soleil.",
          "En réalité, c'est la Terre qui tourne sur elle-même ; c'est pour cela que le soleil paraît bouger.",
        ],
        exemples: [
          "L'ombre d'un bâton planté dans la cour change de place et de longueur pendant la journée : elle suit le mouvement apparent du soleil.",
        ],
      },
      {
        titre: "3. Le mouvement apparent du soleil nous aide à nous repérer",
        paras: [
          "Grâce à ce mouvement, nous pouvons trouver l'Est le matin et l'Ouest le soir, même sans instrument.",
        ],
        exemples: [
          "Le matin, l'ombre d'un arbre pointe à l'opposé du soleil levant : le soleil est à l'Est.",
        ],
      },
    ],
  },
  motsCles: ["mouvement apparent", "Est", "Ouest", "à midi", "se lève", "se couche"],
  questionsRevision: [
    ["Comment appelle-t-on le trajet du soleil dans le ciel ?", "C'est le mouvement apparent du soleil."],
    ["Où le soleil se couche-t-il ?", "Le soleil se couche à l'Ouest."],
  ],
};

const S3 = {
  numero: 3, total: TOTAL,
  titre: "Le Nord et le Sud : la boussole et le GPS",
  theme: "L'orientation géographique",
  objectif: "Être capable de repérer le Nord à l'aide d'une boussole ou d'un GPS, et de nommer le Sud.",
  image: { id: "geot4_boussole_gps", legende: "La boussole et le GPS, deux instruments pour trouver le Nord." },
  miseEnSituation: {
    texte: "Liantsoa a reçu une boussole de son oncle, marin à Toamasina. Son oncle lui a dit : « Avec cela, tu ne te perdras jamais. » Liantsoa remarque une chose étonnante : même quand il tourne la boussole dans tous les sens, l'aiguille rouge finit toujours par pointer le même côté.",
    question: "Qu'est-ce qui ne change jamais sur une boussole ?",
    ra: "L'aiguille rouge pointe toujours le même côté : le Nord.",
    support: "Image de la boussole et du GPS (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Le Nord et le Sud : la boussole et le GPS ». Après cette séance, vous serez capables de trouver le Nord avec une boussole ou un GPS, et de dire où se trouve le Sud.",
  observation: "Regardez et observez bien l'image de la boussole et de l'appareil GPS.",
  supportObservation: "Image de la boussole et du GPS (page Leçon)",
  analyse: [
    ["Qu'est-ce qu'une boussole ?", "Une boussole est un instrument qui nous aide à trouver le Nord."],
    ["Que fait l'aiguille rouge de la boussole ?", "L'aiguille rouge pointe toujours vers le Nord."],
    ["Si je tourne la boussole, l'aiguille rouge change-t-elle de direction ?", "Non, l'aiguille rouge continue de pointer le Nord."],
    ["Qu'est-ce qu'un GPS ?", "Le GPS est un appareil électronique qui indique notre position et les directions."],
    ["Comment s'appelle le côté opposé au Nord ?", "Le côté opposé au Nord s'appelle le Sud."],
    ["Quand le Nord est devant moi, où se trouve le Sud ?", "Le Sud est derrière moi."],
  ],
  synthese: "Donc, pour trouver le Nord, on peut utiliser une boussole : son aiguille rouge pointe toujours vers le Nord. On peut aussi utiliser un GPS. Le côté opposé au Nord s'appelle le Sud : quand le Nord est devant nous, le Sud est derrière nous.",
  appExos: [
    {
      consigne: "Relie chaque mot de la liste 1 à sa définition de la liste 2 par une flèche.",
      items: [
        "Liste 1 : 1. La boussole — 2. Le GPS — 3. Le Nord — 4. Le Sud",
        "Liste 2 : a. l'appareil électronique qui indique la position — b. le côté opposé au Nord — c. l'instrument à aiguille qui trouve le Nord — d. la direction pointée par l'aiguille rouge",
      ],
      corrige: [
        "1 → **c** : la boussole est l'instrument à aiguille qui trouve le Nord.",
        "2 → **a** : le GPS est l'appareil électronique qui indique la position.",
        "3 → **d** : le Nord est la direction pointée par l'aiguille rouge.",
        "4 → **b** : le Sud est le côté opposé au Nord.",
      ],
    },
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. À quoi sert une boussole ?",
        "2. Que fait l'aiguille rouge de la boussole ?",
        "3. Comment s'appelle le côté opposé au Nord ?",
        "4. Quand le Nord est devant toi, où se trouve le Sud ?",
      ],
      corrige: [
        "1. La boussole sert à **trouver le Nord**.",
        "2. L'aiguille rouge **pointe toujours vers le Nord**.",
        "3. Le côté opposé au Nord s'appelle le **Sud**.",
        "4. Le Sud se trouve **derrière moi**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : boussole — Nord — Sud — GPS.",
      items: [
        "La ……… sert à trouver le Nord.",
        "Son aiguille rouge pointe toujours vers le ……… .",
        "Le côté opposé au Nord s'appelle le ……… .",
        "Le ……… est un appareil électronique qui indique notre position.",
      ],
      corrige: ["**boussole** / **Nord** / **Sud** / **GPS**."],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. L'aiguille rouge de la boussole pointe vers : A. le Sud — B. le Nord — C. l'Est",
        "2. Le côté opposé au Nord, c'est : A. l'Est — B. l'Ouest — C. le Sud",
        "3. Le GPS est : A. un instrument à aiguille — B. un appareil électronique — C. une carte",
        "4. Quand le Nord est devant nous, le Sud est : A. derrière nous — B. à droite — C. devant nous",
      ],
      corrige: [
        "1. Réponse **B** : elle pointe vers le Nord.",
        "2. Réponse **C** : le côté opposé au Nord, c'est le Sud.",
        "3. Réponse **B** : le GPS est un appareil électronique.",
        "4. Réponse **A** : le Sud est derrière nous.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La boussole",
        paras: [
          "La boussole est un instrument qui nous aide à trouver le Nord.",
          "Elle possède une aiguille rouge qui pointe toujours vers le Nord, même quand on tourne la boussole.",
          "Les marins, les randonneurs et les bergers utilisent la boussole pour ne pas se perdre.",
        ],
      },
      {
        titre: "2. Le GPS",
        paras: [
          "Le GPS est un appareil électronique, souvent placé dans les téléphones ou les voitures.",
          "Il indique notre position et les directions à prendre pour aller quelque part.",
        ],
      },
      {
        titre: "3. Le Nord et le Sud",
        paras: [
          "Le Nord est la direction pointée par l'aiguille rouge de la boussole.",
          "Le Sud est le côté opposé au Nord : quand le Nord est devant nous, le Sud est derrière nous.",
        ],
        exemples: [
          "Liantsoa tient sa boussole à plat dans sa main : l'aiguille rouge désigne le Nord du village.",
        ],
      },
    ],
  },
  motsCles: ["boussole", "Nord", "Sud", "GPS", "aiguille"],
  questionsRevision: [
    ["Que fait l'aiguille rouge d'une boussole ?", "L'aiguille rouge pointe toujours vers le Nord."],
    ["Comment s'appelle le côté opposé au Nord ?", "C'est le Sud."],
  ],
};

const S4 = {
  numero: 4, total: TOTAL,
  titre: "Les quatre points cardinaux",
  theme: "L'orientation géographique",
  objectif: "Être capable de nommer et de montrer les quatre points cardinaux, et de définir l'orientation géographique.",
  image: { id: "geot4_points_cardinaux", legende: "Les quatre points cardinaux autour de nous." },
  miseEnSituation: {
    question: "Nous connaissons déjà l'Est, l'Ouest, le Nord et le Sud. Comment appelle-t-on ensemble ces quatre grandes directions ?",
    ra: "Ce sont les points cardinaux.",
    support: "Schéma des quatre points cardinaux (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les quatre points cardinaux ». Après cette séance, vous serez capables de nommer les quatre points cardinaux, de les montrer avec vos bras et de dire ce qu'est l'orientation géographique.",
  observation: "Regardez et observez bien le schéma qui montre les quatre points cardinaux autour d'un élève.",
  supportObservation: "Schéma des quatre points cardinaux (page Leçon)",
  analyse: [
    ["Quels sont les quatre points cardinaux ?", "Les quatre points cardinaux sont le Nord, le Sud, l'Est et l'Ouest."],
    ["Comment pouvons-nous trouver l'Est sans boussole ?", "Nous regardons le soleil qui se lève."],
    ["Comment pouvons-nous trouver le Nord ?", "Nous utilisons une boussole ou un GPS."],
    ["Quand le Nord est devant moi, où est le Sud ?", "Le Sud est derrière moi."],
    ["Si l'Est est à ma droite, où est l'Ouest ?", "L'Ouest est à ma gauche."],
    ["Comment s'appelle l'action de chercher toutes ces directions autour de nous ?", "C'est l'orientation géographique."],
  ],
  synthese: "Donc, les quatre points cardinaux sont le Nord, le Sud, l'Est et l'Ouest. Les chercher et les reconnaître autour de nous s'appelle l'orientation géographique. Sur un dessin ou une carte, on place toujours le Nord en haut.",
  appExos: [
    {
      consigne: "Complète avec : Nord — Sud — Est — Ouest.",
      items: [
        "1. Le côté où le soleil se lève est l'……… .",
        "2. Le côté opposé au Nord est le ……… .",
        "3. Le côté où le soleil se couche est l'……… .",
        "4. Le côté indiqué par l'aiguille de la boussole est le ……… .",
      ],
      corrige: [
        "1. Le côté où le soleil se lève est l'**Est**.",
        "2. Le côté opposé au Nord est le **Sud**.",
        "3. Le côté où le soleil se couche est l'**Ouest**.",
        "4. Le côté indiqué par l'aiguille de la boussole est le **Nord**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le point cardinal opposé au Nord : A. l'Est — B. le Sud — C. l'Ouest",
        "2. Le soleil se lève : A. à l'Est — B. à l'Ouest — C. au Nord",
        "3. Le point cardinal opposé à l'Est : A. le Sud — B. le Nord — C. l'Ouest",
        "4. Sur une carte, le Nord est placé : A. en bas — B. en haut — C. à gauche",
      ],
      corrige: [
        "1. Réponse **B** : le Sud.",
        "2. Réponse **A** : à l'Est.",
        "3. Réponse **C** : l'Ouest.",
        "4. Réponse **B** : le Nord est en haut.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Les quatre points cardinaux sont le Nord, le Sud, l'Est et l'Ouest.",
        "2. Le soleil se lève au Nord.",
        "3. L'aiguille de la boussole pointe vers le Sud.",
        "4. Sur une carte, le Nord est toujours en haut.",
      ],
      corrige: [
        "1. **Vrai**.",
        "2. **Faux** : le soleil se lève à l'**Est**.",
        "3. **Faux** : l'aiguille de la boussole pointe vers le **Nord**.",
        "4. **Vrai**.",
      ],
    },
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Cite les quatre points cardinaux.",
        "2. Qu'est-ce que l'orientation géographique ?",
        "3. Comment trouver l'Ouest sans boussole ?",
        "4. Où est le Sud quand le Nord est devant nous ?",
      ],
      corrige: [
        "1. Les quatre points cardinaux sont le **Nord**, le **Sud**, l'**Est** et l'**Ouest**.",
        "2. L'orientation géographique, c'est **chercher et reconnaître les points cardinaux** autour de nous.",
        "3. On regarde le soleil qui **se couche**.",
        "4. Le Sud est **derrière nous**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Les quatre points cardinaux",
        paras: [
          "Les points cardinaux sont les quatre grandes directions qui nous entourent : le Nord, le Sud, l'Est et l'Ouest.",
        ],
        sous: [
          { titre: "a. Le Nord", paras: ["Le Nord est la direction pointée par l'aiguille rouge de la boussole."] },
          { titre: "b. Le Sud", paras: ["Le Sud est le côté opposé au Nord."] },
          { titre: "c. L'Est", paras: ["L'Est est le côté où le soleil se lève."] },
          { titre: "d. L'Ouest", paras: ["L'Ouest est le côté où le soleil se couche."] },
        ],
      },
      {
        titre: "2. L'orientation géographique",
        paras: [
          "Chercher et reconnaître les points cardinaux autour de nous s'appelle l'orientation géographique.",
          "S'orienter, c'est savoir où se trouvent le Nord, le Sud, l'Est et l'Ouest à partir de l'endroit où nous sommes.",
        ],
      },
      {
        titre: "3. Les points cardinaux sur le papier",
        paras: [
          "Sur un dessin, un plan ou une carte, on place toujours le Nord en haut, le Sud en bas, l'Ouest à gauche et l'Est à droite.",
        ],
      },
      {
        titre: "4. Montrer les points cardinaux avec les bras",
        paras: [
          "Debout, face au Nord, j'étends mes deux bras : ma main droite montre l'Est, ma main gauche montre l'Ouest. Derrière moi, c'est le Sud.",
        ],
        exemples: [
          "Hery se place face au Nord dans la cour : il montre l'Est avec son bras droit.",
        ],
      },
    ],
  },
  motsCles: ["points cardinaux", "Nord", "Sud", "Est", "Ouest", "orientation géographique"],
  questionsRevision: [
    ["Cite les quatre points cardinaux.", "Le Nord, le Sud, l'Est et l'Ouest."],
    ["Où place-t-on le Nord sur une carte ?", "On place le Nord en haut."],
  ],
};

const S5 = {
  numero: 5, total: TOTAL,
  titre: "S'orienter à partir des faits culturels",
  theme: "L'orientation géographique",
  objectif: "Être capable d'expliquer comment s'orienter à partir des faits culturels et des repères de la localité.",
  image: { id: "geot4_faits_culturels", legende: "Les repères d'un village : la mosquée, l'église, le grand arbre, le marché." },
  miseEnSituation: {
    texte: "Samedi, Fara va au marché avec sa mère. Sur le chemin, elles passent devant la mosquée du quartier, puis l'église, puis le grand arbre de la place. Sa mère lui dit : « Retiens bien ces repères : avec eux, tu retrouveras toujours ton chemin, même sans boussole. »",
    question: "Quelles choses connues de tout le monde nous aident à retrouver notre chemin dans le village ?",
    ra: "La mosquée, l'église, le grand arbre, le marché, l'école…",
    support: "Image du village avec ses repères (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « S'orienter à partir des faits culturels ». Après cette séance, vous serez capables de citer les repères de votre village et d'expliquer comment ils nous aident à nous orienter.",
  observation: "Regardez et observez bien l'image du village : cherchez la mosquée, l'église, la maison traditionnelle et le grand arbre.",
  supportObservation: "Image du village avec ses repères (page Leçon)",
  analyse: [
    ["Quels repères connus voit-on dans notre village ou notre quartier ?", "L'école, l'église, la mosquée, le marché, le grand arbre, la route, la rivière…"],
    ["Pourquoi ces repères aident-ils à s'orienter ?", "Parce que tout le monde les connaît et qu'ils ne changent pas de place."],
    ["Comment faisait-on pour s'orienter autrefois, sans boussole ?", "On regardait le soleil, les étoiles et les repères du village."],
    ["Le grand arbre de la place peut-il nous aider à trouver notre chemin ?", "Oui, parce qu'il est connu de tous et qu'il reste toujours au même endroit."],
    ["Comment appelle-t-on une chose connue qui nous aide à nous repérer ?", "C'est un repère."],
    ["Une rivière peut-elle servir de repère ?", "Oui, car elle ne change pas de place et tout le monde la connaît."],
  ],
  synthese: "Donc, même sans boussole, on peut s'orienter grâce aux repères de notre localité : les bâtiments connus comme la mosquée ou l'église, le grand arbre, le marché, les routes et les rivières. Ces repères sont connus de tous et ne changent pas de place.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'un repère ?",
        "2. Cite trois repères que l'on peut voir dans un village.",
        "3. Pourquoi un repère est-il utile pour s'orienter ?",
        "4. Comment faisaient les anciens pour s'orienter sans boussole ?",
      ],
      corrige: [
        "1. Un repère est une **chose connue qui nous aide à nous orienter**.",
        "2. Par exemple : **l'école, l'église, le grand arbre** (ou la mosquée, le marché, la route…).",
        "3. Parce qu'il est **connu de tous** et qu'il **ne change pas de place**.",
        "4. Ils regardaient **le soleil, les étoiles et les repères du village**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Un repère change de place tous les jours.",
        "2. La mosquée, l'église et le marché peuvent servir de repères.",
        "3. Seul le soleil peut nous aider à s'orienter.",
        "4. Une rivière peut servir de repère pour s'orienter.",
      ],
      corrige: [
        "1. **Faux** : un repère ne change pas de place.",
        "2. **Vrai**.",
        "3. **Faux** : les repères du village nous aident aussi.",
        "4. **Vrai**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : repères — mosquée — soleil — place.",
      items: [
        "Les choses connues qui nous aident à nous orienter s'appellent des ……… .",
        "La ……… , l'église ou le grand arbre du village sont des repères connus de tous.",
        "Le ……… nous montre l'Est et l'Ouest.",
        "Un repère ne change pas de ……… .",
      ],
      corrige: ["**repères** / **mosquée** / **soleil** / **place**."],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Un repère, c'est : A. une chose qui bouge tout le temps — B. une chose connue qui aide à s'orienter — C. un jeu",
        "2. Lequel peut servir de repère ? A. un nuage — B. le marché du village — C. un oiseau qui vole",
        "3. Sans boussole, on peut s'orienter avec : A. les repères du village — B. la télévision — C. l'ardoise",
        "4. Le grand arbre de la place est un bon repère parce que : A. il est connu de tous — B. il est petit — C. il change de place",
      ],
      corrige: [
        "1. Réponse **B**.",
        "2. Réponse **B** : le marché du village.",
        "3. Réponse **A** : les repères du village.",
        "4. Réponse **A** : il est connu de tous.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Les repères de la localité",
        paras: [
          "Un repère est une chose connue de tous qui nous aide à nous orienter.",
          "Dans un village ou un quartier, les repères sont par exemple : l'école, l'église, la mosquée, le marché, le grand arbre, la route principale, la rivière ou la montagne.",
        ],
      },
      {
        titre: "2. S'orienter à partir des faits culturels",
        paras: [
          "Les habitants connaissent bien les bâtiments et les lieux de leur localité : ces faits culturels les aident à se repérer.",
          "Autrefois, sans boussole, les gens s'orientaient en regardant le soleil, les étoiles et les repères du village.",
          "Certains bâtiments sont construits en tenant compte d'une direction connue de tous : ils peuvent ainsi servir de repères.",
        ],
        exemples: [
          "Pour aller au marché, Fara compte les repères : la mosquée, puis l'église, puis le grand arbre.",
        ],
      },
      {
        titre: "3. Bien choisir ses repères",
        paras: [
          "Un bon repère ne change pas de place, il est connu de tous et on le voit facilement.",
        ],
        exemples: [
          "Un bon repère : le grand arbre de la place, la mosquée, l'école.",
          "Un mauvais repère : une voiture garée, un nuage, un troupeau en mouvement.",
        ],
      },
    ],
  },
  motsCles: ["repère", "repères", "faits culturels", "s'orienter"],
  questionsRevision: [
    ["Qu'est-ce qu'un repère ?", "C'est une chose connue qui nous aide à nous orienter."],
    ["Comment s'orientait-on autrefois sans boussole ?", "Avec le soleil, les étoiles et les repères du village."],
  ],
};

const S6 = {
  numero: 6, total: TOTAL,
  titre: "Les directions intermédiaires",
  theme: "L'orientation géographique",
  objectif: "Être capable de déterminer les directions intermédiaires à partir des points cardinaux.",
  image: { id: "geot4_directions_intermediaires", legende: "Les 4 points cardinaux et les 4 directions intermédiaires." },
  miseEnSituation: {
    texte: "Dans la cour de récréation, la maîtresse joue avec les élèves. Elle dit éation, la maîtresse joue avec les élèves. Elle dit à Mamy : « Marche vers le Nord ! » puis à Soa : « Marche vers l'Est ! » Puis elle demande à Tiana : « À ton tour, marche entre le Nord et l'Est ! » Tiana sourit et avance en biais, entre les deux directions prises par ses camarades.",
    question: "Peut-on marcher entre deux points cardinaux ?",
    ra: "Oui, on peut marcher entre deux points cardinaux voisins.",
    support: "Schéma des directions intermédiaires (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les directions intermédiaires ». Après cette séance, vous serez capables de nommer les quatre directions situées entre les points cardinaux.",
  observation: "Regardez et observez bien le schéma qui montre les directions entre les points cardinaux.",
  supportObservation: "Schéma des directions intermédiaires (page Leçon)",
  analyse: [
    ["Quelles sont les quatre directions que nous connaissons déjà ?", "Le Nord, le Sud, l'Est et l'Ouest."],
    ["Où marche Tiana quand elle avance entre le Nord et l'Est ?", "Elle marche vers le Nord-Est."],
    ["Comment s'appelle la direction entre le Nord et l'Ouest ?", "C'est le Nord-Ouest."],
    ["Comment s'appelle la direction entre le Sud et l'Est ?", "C'est le Sud-Est."],
    ["Et la direction entre le Sud et l'Ouest ?", "C'est le Sud-Ouest."],
    ["Combien de directions avons-nous maintenant en tout ?", "Huit directions : les 4 points cardinaux et les 4 directions intermédiaires."],
  ],
  synthese: "Donc, entre deux points cardinaux voisins se trouvent des directions intermédiaires : le Nord-Est entre le Nord et l'Est, le Nord-Ouest entre le Nord et l'Ouest, le Sud-Est entre le Sud et l'Est et le Sud-Ouest entre le Sud et l'Ouest. Ensemble, elles forment huit directions.",
  appExos: [
    {
      consigne: "Complète avec : Nord-Est — Nord-Ouest — Sud-Est — Sud-Ouest.",
      items: [
        "1. La direction entre le Nord et l'Est est le ……… .",
        "2. La direction entre le Sud et l'Ouest est le ……… .",
        "3. La direction entre le Nord et l'Ouest est le ……… .",
        "4. La direction entre le Sud et l'Est est le ……… .",
      ],
      corrige: [
        "1. Le **Nord-Est**.",
        "2. Le **Sud-Ouest**.",
        "3. Le **Nord-Ouest**.",
        "4. Le **Sud-Est**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. La direction entre le Sud et l'Est : A. le Sud-Ouest — B. le Sud-Est — C. le Nord-Est",
        "2. Le Nord-Ouest se trouve entre : A. le Nord et l'Ouest — B. le Sud et l'Ouest — C. le Nord et l'Est",
        "3. Avec les directions intermédiaires, nous avons en tout : A. 4 directions — B. 6 directions — C. 8 directions",
        "4. Le vent qui souffle du Nord-Est vient : A. entre le Sud et l'Est — B. entre le Nord et l'Est — C. entre le Nord et l'Ouest",
      ],
      corrige: [
        "1. Réponse **B** : le Sud-Est.",
        "2. Réponse **A** : entre le Nord et l'Ouest.",
        "3. Réponse **C** : 8 directions.",
        "4. Réponse **B** : entre le Nord et l'Est.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le Sud-Est se trouve entre le Sud et l'Est.",
        "2. Le Nord-Ouest se trouve entre le Nord et l'Est.",
        "3. Il existe quatre directions intermédiaires.",
        "4. Les directions intermédiaires remplacent les points cardinaux.",
      ],
      corrige: [
        "1. **Vrai**.",
        "2. **Faux** : le Nord-Ouest se trouve entre le Nord et l'**Ouest**.",
        "3. **Vrai**.",
        "4. **Faux** : elles complètent les points cardinaux.",
      ],
    },
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'une direction intermédiaire ?",
        "2. Cite les quatre directions intermédiaires.",
        "3. Entre quels points cardinaux se trouve le Sud-Ouest ?",
        "4. Combien de directions forment les points cardinaux et les directions intermédiaires ?",
      ],
      corrige: [
        "1. C'est une direction **située entre deux points cardinaux voisins**.",
        "2. Le **Nord-Est**, le **Nord-Ouest**, le **Sud-Est** et le **Sud-Ouest**.",
        "3. Le Sud-Ouest se trouve entre **le Sud et l'Ouest**.",
        "4. Elles forment **huit directions**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Les directions entre les points cardinaux",
        paras: [
          "Entre deux points cardinaux voisins, il y a toujours une direction intermédiaire.",
          "Une direction intermédiaire porte le nom des deux points cardinaux qu'elle sépare : on dit d'abord le Nord ou le Sud, puis l'Est ou l'Ouest.",
        ],
      },
      {
        titre: "2. Les quatre directions intermédiaires",
        paras: [
          "Le Nord-Est se trouve entre le Nord et l'Est.",
          "Le Nord-Ouest se trouve entre le Nord et l'Ouest.",
          "Le Sud-Est se trouve entre le Sud et l'Est.",
          "Le Sud-Ouest se trouve entre le Sud et l'Ouest.",
        ],
        exemples: [
          "Un vent qui souffle du Sud-Est vient du côté situé entre le Sud et l'Est.",
        ],
      },
      {
        titre: "3. Les huit directions ensemble",
        paras: [
          "Les quatre points cardinaux et les quatre directions intermédiaires forment huit directions.",
          "Ces huit directions se retrouvent sur la rose des vents, que nous allons découvrir à la séance suivante.",
        ],
      },
    ],
  },
  motsCles: ["directions intermédiaires", "Nord-Est", "Nord-Ouest", "Sud-Est", "Sud-Ouest"],
  questionsRevision: [
    ["Cite les quatre directions intermédiaires.", "Le Nord-Est, le Nord-Ouest, le Sud-Est et le Sud-Ouest."],
    ["Entre quels points cardinaux se trouve le Nord-Est ?", "Entre le Nord et l'Est."],
  ],
};

const S7 = {
  numero: 7, total: TOTAL,
  titre: "La rose des vents : lecture",
  theme: "L'orientation géographique",
  objectif: "Être capable de lire une rose des vents et de trouver les directions qu'elle indique.",
  image: { id: "geot4_rose_vents", legende: "La rose des vents montre les huit directions." },
  miseEnSituation: {
    texte: "Le papa de Lanto est pêcheur à Morondava. Avant de prendre la mer, il regarde toujours la rose des vents dessinée sur le port. Il dit à Lanto : « La rose des vents, c'est ma boussole sur le papier : elle me montre toutes les directions du vent. »",
    question: "À quoi sert la rose des vents ?",
    ra: "La rose des vents sert à montrer toutes les directions.",
    support: "Rose des vents (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « La rose des vents : lecture ». Après cette séance, vous serez capables de lire une rose des vents et de nommer les directions qu'elle montre.",
  observation: "Regardez et observez bien la rose des vents : les grandes branches, les petites branches et les lettres.",
  supportObservation: "Rose des vents (page Leçon)",
  analyse: [
    ["Que vois-tu au centre du schéma ?", "Je vois une étoile à huit branches."],
    ["Où est placée la lettre N ?", "La lettre N est en haut, sur la plus grande branche."],
    ["Que signifie la lettre N ?", "Elle signifie Nord."],
    ["Que signifient les lettres S, E et O ?", "S signifie Sud, E signifie Est et O signifie Ouest."],
    ["Que remarques-tu entre deux grandes branches ?", "Il y a des branches plus courtes : ce sont les directions intermédiaires, comme NE."],
    ["Comment s'appelle cette figure qui montre toutes les directions ?", "C'est la rose des vents."],
  ],
  synthese: "Donc, la rose des vents est une figure qui montre les huit directions : les quatre points cardinaux N, S, E, O sur les grandes branches, et les quatre directions intermédiaires NE, NO, SE, SO sur les branches plus courtes. Le Nord est toujours en haut.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'une rose des vents ?",
        "2. Que signifie la lettre N sur la rose des vents ?",
        "3. Où est placé le Nord sur la rose des vents ?",
        "4. Que représentent les branches courtes ?",
      ],
      corrige: [
        "1. La rose des vents est une **figure qui montre les huit directions**.",
        "2. La lettre N signifie **Nord**.",
        "3. Le Nord est placé **en haut**.",
        "4. Elles représentent **les directions intermédiaires**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. La rose des vents montre huit directions.",
        "2. Sur la rose des vents, le Sud est en haut.",
        "3. La lettre O signifie Ouest.",
        "4. La rose des vents ne montre pas les directions intermédiaires.",
      ],
      corrige: [
        "1. **Vrai**.",
        "2. **Faux** : c'est le **Nord** qui est en haut.",
        "3. **Vrai**.",
        "4. **Faux** : les branches courtes montrent les directions intermédiaires.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : rose — huit — Nord — haut.",
      items: [
        "La ……… des vents est une figure qui montre les directions.",
        "Elle montre ……… directions en tout.",
        "La lettre N signifie ……… .",
        "Le Nord est toujours en ……… de la rose des vents.",
      ],
      corrige: ["**rose** / **huit** / **Nord** / **haut**."],
    },
    {
      consigne: "Relie chaque lettre de la liste 1 à sa signification de la liste 2 par une flèche.",
      items: [
        "Liste 1 : 1. N — 2. S — 3. E — 4. O",
        "Liste 2 : a. Ouest — b. Est — c. Nord — d. Sud",
      ],
      corrige: [
        "1 → **c** : N signifie Nord.",
        "2 → **d** : S signifie Sud.",
        "3 → **b** : E signifie Est.",
        "4 → **a** : O signifie Ouest.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Qu'est-ce que la rose des vents ?",
        paras: [
          "La rose des vents est une figure en forme d'étoile qui montre les huit directions.",
          "Elle ressemble à une étoile à huit branches, placée au milieu d'un cercle.",
        ],
      },
      {
        titre: "2. Lire la rose des vents",
        paras: [
          "Les quatre grandes branches indiquent les points cardinaux : N pour le Nord, S pour le Sud, E pour l'Est et O pour l'Ouest.",
          "Le Nord est toujours en haut de la rose des vents ; sa branche est souvent la plus longue.",
          "Les quatre branches plus courtes indiquent les directions intermédiaires : NE, NO, SE et SO.",
        ],
      },
      {
        titre: "3. À quoi sert la rose des vents ?",
        paras: [
          "La rose des vents aide à connaître la direction du vent et à se repérer.",
          "On la trouve sur les cartes, sur les plans, sur les boussoles et dans les ports.",
        ],
        exemples: [
          "Le papa de Lanto lit la rose des vents du port pour connaître la direction du vent avant de prendre la mer.",
        ],
      },
    ],
  },
  motsCles: ["rose des vents", "directions", "Nord", "branches"],
  questionsRevision: [
    ["Qu'est-ce que la rose des vents ?", "C'est une figure qui montre les huit directions."],
    ["Où est placé le Nord sur la rose des vents ?", "Le Nord est en haut."],
  ],
};

const S8 = {
  numero: 8, total: TOTAL,
  titre: "Dessiner une rose des vents",
  theme: "L'orientation géographique",
  objectif: "Être capable de dessiner une rose des vents en appliquant le principe des étapes de construction.",
  image: { id: "geot4_construction_rose", legende: "Les quatre étapes pour dessiner une rose des vents." },
  miseEnSituation: {
    texte: "La maîtresse annonce un concours : « Celui qui dessinera la plus belle rose des vents l'affichera au mur de la classe ! » Nivo est contente : elle a bien écouté quand la maîtresse a montré les étapes du dessin, étape par étape, au tableau.",
    question: "De quoi avons-nous besoin pour bien dessiner une rose des vents ?",
    ra: "D'un crayon, d'une règle et des étapes à suivre dans l'ordre.",
    support: "Schéma des étapes de construction (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Dessiner une rose des vents ». Après cette séance, vous serez capables de construire une rose des vents en suivant les étapes dans l'ordre.",
  observation: "Regardez et observez bien le schéma qui montre les quatre étapes du dessin de la rose des vents.",
  supportObservation: "Schéma des étapes de construction (page Leçon)",
  analyse: [
    ["Que dessine-t-on à la première étape ?", "On trace une croix : un trait vertical et un trait horizontal."],
    ["Qu'ajoute-t-on à la deuxième étape ?", "On ajoute les deux diagonales, les traits en biais."],
    ["Que fait-on à la troisième étape ?", "On allonge la branche du Nord."],
    ["Qu'écrit-on à la quatrième étape ?", "On écrit les lettres N, S, E, O, puis NE, NO, SE, SO."],
    ["Que doit-on vérifier à la fin du dessin ?", "Que le N est bien en haut."],
    ["À quoi servira ta rose des vents ?", "Elle m'aidera à me repérer et à trouver les directions."],
  ],
  synthese: "Donc, pour dessiner une rose des vents : on trace d'abord une croix (l'axe Nord-Sud et l'axe Est-Ouest), puis les diagonales pour les directions intermédiaires, on allonge la branche du Nord, et enfin on écrit les lettres N, S, E, O, NE, NO, SE, SO. Le Nord reste toujours en haut.",
  appExos: [
    {
      consigne: "Écris 1, 2, 3, 4 pour ranger les étapes du dessin de la rose des vents.",
      items: [
        "……… On trace les diagonales entre les branches.",
        "……… On écrit les lettres des huit directions.",
        "……… On trace une croix : un trait vertical et un trait horizontal.",
        "……… On allonge la branche du Nord.",
      ],
      corrige: [
        "Diagonales : **2** / lettres : **4** / croix : **1** / branche du Nord : **3**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. On commence le dessin par écrire les lettres.",
        "2. Le trait vertical représente l'axe Nord-Sud.",
        "3. Les diagonales donnent les directions intermédiaires.",
        "4. À la fin, on vérifie que le N est en haut.",
      ],
      corrige: [
        "1. **Faux** : on commence par tracer **une croix**.",
        "2. **Vrai**.",
        "3. **Vrai**.",
        "4. **Vrai**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : croix — diagonales — Nord — huit.",
      items: [
        "Pour dessiner une rose des vents, on commence par tracer une ……… .",
        "Ensuite, on trace les ……… pour les directions intermédiaires.",
        "On allonge la branche du ……… .",
        "La rose des vents complète montre ……… directions.",
      ],
      corrige: ["**croix** / **diagonales** / **Nord** / **huit**."],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. La première étape du dessin : A. écrire les lettres — B. tracer une croix — C. colorier",
        "2. Les diagonales servent à placer : A. les points cardinaux — B. les directions intermédiaires — C. le titre",
        "3. La branche la plus longue est celle : A. du Nord — B. du Sud — C. de l'Est",
        "4. À la fin, on vérifie que : A. le N est en haut — B. le S est en haut — C. les lettres sont en biais",
      ],
      corrige: [
        "1. Réponse **B** : tracer une croix.",
        "2. Réponse **B** : les directions intermédiaires.",
        "3. Réponse **A** : celle du Nord.",
        "4. Réponse **A** : le N est en haut.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Le matériel nécessaire",
        paras: [
          "Pour dessiner une rose des vents, il faut : une feuille (ou un papier d'emballage propre), un crayon, une règle et une gomme.",
        ],
      },
      {
        titre: "2. Les étapes du dessin",
        paras: [
          "Étape 1 : on trace une croix, avec un trait vertical et un trait horizontal qui se coupent.",
          "Étape 2 : on trace les deux diagonales, en biais, pour les directions intermédiaires.",
          "Étape 3 : on allonge la branche du Nord, vers le haut.",
          "Étape 4 : on écrit les lettres N, S, E, O au bout des grandes branches, puis NE, NO, SE, SO au bout des branches courtes.",
        ],
      },
      {
        titre: "3. Vérifier son dessin",
        paras: [
          "On vérifie que le N est bien en haut, que les huit branches sont bien placées et que les lettres sont justes.",
          "On peut ensuite colorier la branche du Nord en rouge pour la rendre plus visible.",
        ],
        exemples: [
          "Nivo a suivi les quatre étapes : sa rose des vents est affichée au mur de la classe.",
        ],
      },
    ],
  },
  motsCles: ["rose des vents", "croix", "diagonales", "Nord", "étapes"],
  questionsRevision: [
    ["Quelles sont les quatre étapes pour dessiner une rose des vents ?", "Tracer une croix, tracer les diagonales, allonger la branche du Nord, écrire les lettres des huit directions."],
    ["Où doit se trouver la lettre N sur ton dessin ?", "En haut."],
  ],
};

module.exports = { TOTAL, topics: [S1, S2, S3, S4, S5, S6, S7, S8] };
