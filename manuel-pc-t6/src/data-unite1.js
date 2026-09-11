// data-unite1.js — Unité I : MATIÈRE (séances 2 à 8 ; la séance 1 est dans seance01-data.js)
const S1 = require("./seance01-data");

const S2 = {
  numero: 2, total: 34, unite: "I", theme: "Matière",
  titre: "Les propriétés spécifiques des liquides",
  objectif: "identifier les propriétés spécifiques d'un liquide : absence de forme propre et surface libre plane et horizontale",
  documentation: "Programme d'études T6 — Sciences Physiques (MEN Madagascar) ; manuel J-Learn",
  support: "Eau colorée, bouteille en plastique, verre, bol, niveau à bulle, support incliné",
  image: "images/img_seance02.png",
  imageLegende: "Figure 2 — La surface libre d'un liquide au repos reste plane et horizontale, même si le récipient est incliné",
  revision: {
    qa: [
      { q: "Quelle est la propriété spécifique d'un corps solide ?", ra: "Un solide a une forme propre : il garde sa forme quel que soit le récipient." },
      { q: "Qu'est-ce qu'un solide compact ? Donne un exemple.", ra: "C'est un solide en un seul morceau, par exemple une pierre." },
      { q: "Qu'est-ce qu'un solide pulvérisé ? Donne un exemple.", ra: "C'est un solide formé de petits grains, par exemple le sable ou le riz." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Nivo revient de la fontaine avec un seau d'eau sur la tête. Sur le chemin en pente, elle remarque que l'eau bouge dans le seau et menace de déborder, alors que le seau, lui, ne change pas de forme.",
      "Pourquoi l'eau bouge-t-elle dans le seau alors que le seau garde sa forme ?",
      "R.A. : Parce que l'eau est un liquide : elle coule et bouge, le seau est un solide.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Les propriétés spécifiques des liquides ». Après cette séance, vous serez capables d'expliquer qu'un liquide n'a pas de forme propre et que sa surface libre au repos est plane et horizontale.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien cette eau colorée : je la verse du verre dans la bouteille, puis dans le bol. J'incline maintenant doucement la bouteille à moitié pleine et je la maintiens penchée, sans la secouer.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Eau colorée, verre, bouteille, bol, support incliné",
  },
  analyse: {
    qa: [
      { q: "Quand je verse l'eau du verre dans la bouteille, garde-t-elle la forme du verre ?", ra: "Non, l'eau prend la forme de la bouteille." },
      { q: "Un liquide a-t-il une forme propre comme un solide ?", ra: "Non, un liquide n'a pas de forme propre : il prend la forme du récipient qui le contient." },
      { q: "Comment est la surface de l'eau quand la bouteille est posée droite et que l'eau ne bouge plus ?", ra: "La surface de l'eau est plane et horizontale." },
      { q: "Quand j'incline la bouteille et que l'eau est au repos, comment est sa surface ?", ra: "La surface reste plane et horizontale, même si la bouteille est penchée." },
      { q: "Comment appelle-t-on la surface de l'eau en contact avec l'air ?", ra: "On l'appelle la surface libre du liquide." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Eau colorée, bouteille inclinée, niveau à bulle",
  },
  synthese: {
    enseignant: "Donc, un liquide n'a pas de forme propre : il prend la forme du récipient qui le contient et il coule. Au repos, sa surface libre, c'est-à-dire la surface en contact avec l'air, est toujours plane et horizontale, même si le récipient est incliné.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Un liquide a une forme propre.",
        "b) La surface libre d'un liquide au repos est plane et horizontale.",
        "c) L'eau versée dans un bol prend la forme du bol.",
        "d) Quand on incline la bouteille, la surface libre de l'eau au repos s'incline aussi.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Faux", cle: true }, { text: " : un liquide n'a pas de forme propre, il prend la forme du récipient." }],
        [{ text: "b) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Faux", cle: true }, { text: " : la surface libre reste horizontale même si le récipient est incliné." }],
      ],
    },
    {
      consigne: "Complète chaque phrase :",
      items: [
        "a) Un liquide prend la forme du ……… qui le contient.",
        "b) La surface d'un liquide en contact avec l'air s'appelle la ……… .",
        "c) Au repos, la surface libre d'un liquide est ……… et ……… .",
        "d) Contrairement au solide, le liquide n'a pas de ……… .",
      ],
      corrige: [
        [{ text: "a) Un liquide prend la forme du " }, { text: "récipient", cle: true }, { text: " qui le contient." }],
        [{ text: "b) Elle s'appelle la " }, { text: "surface libre", cle: true }, { text: "." }],
        [{ text: "c) Au repos, la surface libre est " }, { text: "plane", cle: true }, { text: " et " }, { text: "horizontale", cle: true }, { text: "." }],
        [{ text: "d) Le liquide n'a pas de " }, { text: "forme propre", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail individuel sur ardoise", applicationSupport: "Ardoise, cahier",
  evaluation: [
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Pourquoi dit-on qu'un liquide n'a pas de forme propre ?",
        "b) Qu'est-ce que la surface libre d'un liquide ?",
        "c) Comment est la surface libre d'un liquide au repos ?",
        "d) Cite deux liquides que tu utilises à la maison.",
      ],
      corrige: [
        [{ text: "a) Parce qu'il " }, { text: "prend la forme du récipient", cle: true }, { text: " qui le contient." }],
        [{ text: "b) C'est la " }, { text: "surface du liquide en contact avec l'air", cle: true }, { text: "." }],
        [{ text: "c) Elle est " }, { text: "plane et horizontale", cle: true }, { text: "." }],
        [{ text: "d) Par exemple " }, { text: "l'eau et l'huile", cle: true }, { text: " (ou le lait, le vinaigre, le pétrole lampant…)." }],
      ],
    },
    {
      consigne: "Choisis la bonne réponse :",
      items: [
        "a) Un liquide versé d'un verre dans une bouteille :  1) garde la forme du verre   2) prend la forme de la bouteille   3) garde une forme propre",
        "b) La surface libre d'un liquide au repos est :  1) inclinée   2) bombée   3) plane et horizontale",
        "c) Si on penche un verre d'eau et qu'on attend le repos, la surface libre :  1) reste horizontale   2) se penche avec le verre   3) devient verticale",
        "d) Le maçon vérifie l'horizontale d'un mur avec :  1) une balance   2) un niveau à bulle   3) un thermomètre",
      ],
      corrige: [
        [{ text: "a) Réponse 2) : " }, { text: "il prend la forme de la bouteille", cle: true }, { text: "." }],
        [{ text: "b) Réponse 3) : " }, { text: "plane et horizontale", cle: true }, { text: "." }],
        [{ text: "c) Réponse 1) : " }, { text: "elle reste horizontale", cle: true }, { text: "." }],
        [{ text: "d) Réponse 2) : " }, { text: "un niveau à bulle", cle: true }, { text: ", qui utilise la surface libre d'un liquide." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["surface libre", "plane et horizontale", "forme propre", "liquide"],
    sections: [
      {
        titre: "1. Un liquide n'a pas de forme propre",
        paras: [
          "L'eau, l'huile, le lait, le vinaigre sont des corps liquides. Contrairement aux solides, un liquide n'a pas de forme propre : il prend la forme du récipient qui le contient.",
          "Un liquide coule : on ne peut pas le saisir entre les doigts ni le transporter sans récipient.",
        ],
        puces: [
          "L'eau versée dans un verre prend la forme du verre.",
          "La même eau versée dans une bouteille prend la forme de la bouteille.",
        ],
      },
      {
        titre: "2. La surface libre d'un liquide",
        paras: [
          "La surface d'un liquide en contact avec l'air s'appelle la surface libre.",
          "Au repos, la surface libre d'un liquide est toujours plane et horizontale, quel que soit le récipient et même si celui-ci est incliné.",
        ],
        puces: [
          "Dans un verre droit ou penché, la surface de l'eau au repos reste horizontale.",
          "C'est cette propriété qu'utilise le niveau à bulle du maçon pour vérifier qu'un mur ou une table est bien horizontal.",
        ],
      },
      {
        titre: "3. Solides pulvérisés et liquides : ne pas confondre",
        paras: [
          "Le sable et le riz prennent la forme du récipient, comme un liquide. Mais ce sont des solides, car chaque grain garde sa forme propre. De plus, la surface d'un tas de sable peut rester en pente, alors que la surface libre d'un liquide au repos est toujours horizontale.",
        ],
      },
    ],
    saisTu: [
      "Dans les rizières en terrasses de la région Betsileo, l'eau de chaque parcelle est parfaitement plane et horizontale : c'est la surface libre de l'eau ! Les paysans utilisent cette propriété pour niveler leurs rizières et bien répartir l'eau.",
    ],
    experience: [
      "Prends une bouteille en plastique transparente à moitié remplie d'eau.",
      "1. Pose la bouteille debout sur la table : observe la surface de l'eau.",
      "2. Penche doucement la bouteille et cale-la contre un mur. Attends que l'eau ne bouge plus.",
      "3. Observe la surface de l'eau : elle est restée horizontale, même dans la bouteille penchée.",
      "Conclusion : la surface libre d'un liquide au repos est toujours plane et horizontale.",
    ],
  },
  substitutions: [
    { officiel: "Éprouvettes et béchers", local: "Bouteilles en plastique transparentes, verres" },
    { officiel: "Colorant de laboratoire", local: "Quelques gouttes de jus de betterave ou de sirop" },
    { officiel: "Niveau à bulle", local: "Bouteille transparente à moitié remplie d'eau" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Un liquide :  a) a une forme propre   b) prend la forme du récipient   c) garde toujours la même forme",
        "2. La surface libre d'un liquide est la surface en contact avec :  a) le fond du récipient   b) les parois   c) l'air",
        "3. Au repos, la surface libre est :  a) plane et horizontale   b) inclinée comme le récipient   c) bombée",
        "4. Lequel de ces corps est un liquide ?  a) la farine   b) l'huile   c) le sel fin",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "un liquide prend la forme du récipient", cle: true }, { text: " ; la forme propre est une propriété des solides." }],
        [{ text: "2. Réponse c) : ", bold: true }, { text: "la surface libre est en contact avec l'air", cle: true }, { text: "." }],
        [{ text: "3. Réponse a) : ", bold: true }, { text: "plane et horizontale", cle: true }, { text: "." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "l'huile est un liquide", cle: true }, { text: " ; la farine et le sel fin sont des solides pulvérisés." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. L'eau versée d'un verre dans un bol garde la forme du verre.",
        "2. La surface libre de l'eau d'un verre penché, au repos, reste horizontale.",
        "3. Le sable est un liquide car il prend la forme du récipient.",
        "4. On ne peut pas saisir un liquide entre les doigts.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : l'eau prend la forme du bol, car un liquide n'a pas de forme propre." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : le sable est un solide pulvérisé, chaque grain garde sa forme propre." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: " : un liquide coule, il faut un récipient pour le transporter." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : surface libre – horizontale – forme propre – récipient – coule – plane.",
      items: [
        "Un liquide n'a pas de ……… : il prend la forme du ……… qui le contient et il ……… . La surface du liquide en contact avec l'air s'appelle la ……… . Au repos, elle est toujours ……… et ……… .",
      ],
      corrige: [
        [{ text: "Un liquide n'a pas de " }, { text: "forme propre", cle: true }, { text: " : il prend la forme du " }, { text: "récipient", cle: true }, { text: " qui le contient et il " }, { text: "coule", cle: true }, { text: ". La surface du liquide en contact avec l'air s'appelle la " }, { text: "surface libre", cle: true }, { text: ". Au repos, elle est toujours " }, { text: "plane", cle: true }, { text: " et " }, { text: "horizontale", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Observe la figure 2 en tête de la leçon, puis réponds :",
      items: [
        "1. Que remarques-tu sur la surface de l'eau dans la bouteille penchée ?",
        "2. Explique pourquoi la surface de l'eau ne suit pas l'inclinaison de la bouteille.",
        "3. Quel outil du maçon utilise cette propriété ? À quoi sert-il ?",
      ],
      corrige: [
        [{ text: "1. La surface de l'eau " }, { text: "reste plane et horizontale", cle: true }, { text: ", même si la bouteille est penchée." }],
        [{ text: "2. Parce que la " }, { text: "surface libre d'un liquide au repos est toujours horizontale", cle: true }, { text: " : c'est une propriété spécifique des liquides." }],
        [{ text: "3. Le " }, { text: "niveau à bulle", cle: true }, { text: " : il sert à vérifier qu'un mur ou une surface est bien horizontal ou vertical." }],
      ],
    },
  ],
};

const S3 = {
  numero: 3, total: 34, unite: "I", theme: "Matière",
  titre: "Les propriétés spécifiques des gaz : expansibilité et compressibilité",
  objectif: "décrire l'expansibilité et la compressibilité des gaz",
  documentation: "Programme d'études T6 — Sciences Physiques (MEN Madagascar) ; manuel J-Learn",
  support: "Seringue en plastique, ballon de baudruche, pompe à bicyclette, bouteille en plastique",
  image: "images/img_seance03.png",
  imageLegende: "Figure 3 — Un gaz est compressible (seringue bouchée) et expansible (il gonfle tout le ballon)",
  revision: {
    qa: [
      { q: "Un liquide a-t-il une forme propre ?", ra: "Non, il prend la forme du récipient qui le contient." },
      { q: "Qu'est-ce que la surface libre d'un liquide ?", ra: "C'est la surface du liquide en contact avec l'air." },
      { q: "Comment est la surface libre d'un liquide au repos ?", ra: "Elle est plane et horizontale." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Koto gonfle le pneu de sa bicyclette avec une pompe. Il remarque qu'il peut enfoncer le piston de la pompe même quand il bouche la sortie avec le doigt, alors que c'est impossible si la pompe est remplie d'eau.",
      "Pourquoi peut-on enfoncer le piston quand la pompe contient de l'air, mais pas quand elle contient de l'eau ?",
      "R.A. : Parce que l'air peut être comprimé, pas l'eau.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée", support: "Pompe à bicyclette",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Les propriétés spécifiques des gaz : expansibilité et compressibilité ». Après cette séance, vous serez capables de décrire la compressibilité et l'expansibilité d'un gaz.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : je tire le piston de cette seringue pour la remplir d'air, je bouche la sortie avec le doigt, puis j'appuie sur le piston. Ensuite, je relâche le piston. Enfin, je gonfle ce ballon de baudruche.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Seringue, ballon de baudruche",
  },
  analyse: {
    qa: [
      { q: "Quand j'appuie sur le piston de la seringue bouchée, que se passe-t-il ?", ra: "Le piston s'enfonce : le volume de l'air diminue." },
      { q: "Comment appelle-t-on cette propriété du gaz ?", ra: "La compressibilité : un gaz peut être comprimé, son volume peut diminuer." },
      { q: "Quand je relâche le piston, que fait l'air ?", ra: "L'air repousse le piston et reprend son volume : le gaz se détend." },
      { q: "Dans le ballon gonflé, où se trouve l'air ?", ra: "L'air occupe tout le volume du ballon, il se répand partout." },
      { q: "Comment appelle-t-on cette propriété du gaz ?", ra: "L'expansibilité : un gaz occupe tout le volume qui lui est offert." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Seringue, ballon de baudruche",
  },
  synthese: {
    enseignant: "Donc, un gaz n'a ni forme propre ni volume propre. Il est compressible : on peut diminuer son volume en appuyant dessus. Il est aussi expansible : il se répand et occupe tout le volume du récipient qui le contient. Un gaz comprimé se détend dès qu'on le libère.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Un gaz peut être comprimé.",
        "b) Un gaz occupe tout le volume du récipient qui le contient.",
        "c) L'eau de la seringue bouchée peut être comprimée comme l'air.",
        "d) Un gaz a un volume propre.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: " : c'est la compressibilité." }],
        [{ text: "b) " }, { text: "Vrai", cle: true }, { text: " : c'est l'expansibilité." }],
        [{ text: "c) " }, { text: "Faux", cle: true }, { text: " : un liquide est pratiquement incompressible." }],
        [{ text: "d) " }, { text: "Faux", cle: true }, { text: " : un gaz n'a ni forme propre ni volume propre." }],
      ],
    },
    {
      consigne: "Associe chaque mot à sa définition : compressibilité, expansibilité, détente, gaz.",
      items: [
        "a) Propriété d'un gaz d'occuper tout le volume offert.",
        "b) Diminution du volume d'un gaz quand on appuie dessus.",
        "c) Corps qui n'a ni forme propre ni volume propre.",
        "d) Un gaz comprimé reprend du volume quand on le libère.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Expansibilité", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Compressibilité", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Gaz", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Détente", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, seringue",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : comprimé – expansible – volume – détend – compressible.",
      items: [
        "a) Un gaz est ……… : son ……… peut diminuer quand on appuie dessus.",
        "b) Un gaz est ……… : il occupe tout le volume qui lui est offert.",
        "c) L'air ……… de la pompe se ……… quand on relâche le piston.",
      ],
      corrige: [
        [{ text: "a) Un gaz est " }, { text: "compressible", cle: true }, { text: " : son " }, { text: "volume", cle: true }, { text: " peut diminuer quand on appuie dessus." }],
        [{ text: "b) Un gaz est " }, { text: "expansible", cle: true }, { text: " : il occupe tout le volume qui lui est offert." }],
        [{ text: "c) L'air " }, { text: "comprimé", cle: true }, { text: " de la pompe se " }, { text: "détend", cle: true }, { text: " quand on relâche le piston." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Que se passe-t-il quand on appuie sur le piston d'une seringue remplie d'air et bouchée ?",
        "b) Pourquoi dit-on qu'un gaz est expansible ?",
        "c) Cite un objet de la vie courante qui contient de l'air comprimé.",
        "d) Quelle différence y a-t-il entre un liquide et un gaz pour la compressibilité ?",
      ],
      corrige: [
        [{ text: "a) Le piston s'enfonce : " }, { text: "le volume de l'air diminue, l'air est comprimé", cle: true }, { text: "." }],
        [{ text: "b) Parce qu'il " }, { text: "se répand et occupe tout le volume", cle: true }, { text: " du récipient qui le contient." }],
        [{ text: "c) Par exemple " }, { text: "un pneu de bicyclette", cle: true }, { text: " (ou un ballon de football, une bombe aérosol)." }],
        [{ text: "d) Un gaz est " }, { text: "compressible", cle: true }, { text: ", alors qu'un liquide est " }, { text: "pratiquement incompressible", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["compressible", "compressibilité", "expansible", "expansibilité", "se détend", "volume propre"],
    sections: [
      {
        titre: "1. Un gaz n'a ni forme propre ni volume propre",
        paras: [
          "L'air qui nous entoure est un gaz. Comme un liquide, un gaz n'a pas de forme propre. Mais en plus, un gaz n'a pas de volume propre : son volume peut changer.",
        ],
      },
      {
        titre: "2. La compressibilité des gaz",
        paras: [
          "Un gaz est compressible : quand on appuie dessus, son volume diminue.",
          "Expérience : on remplit une seringue d'air et on bouche la sortie avec le doigt. En appuyant sur le piston, celui-ci s'enfonce : l'air est comprimé. Quand on relâche le piston, l'air comprimé se détend et repousse le piston.",
          "Un liquide, au contraire, est pratiquement incompressible : si la seringue est remplie d'eau, le piston ne s'enfonce pas.",
        ],
      },
      {
        titre: "3. L'expansibilité des gaz",
        paras: [
          "Un gaz est expansible : il se répand et occupe tout le volume du récipient qui le contient.",
          "Exemples :",
        ],
        puces: [
          "L'air gonfle tout l'intérieur d'un ballon de baudruche.",
          "L'odeur du café chaud se répand dans toute la maison : les gaz odorants occupent tout le volume de la pièce.",
          "Le gaz d'un briquet, libéré, se répand dans l'air de la pièce.",
        ],
      },
    ],
    saisTu: [
      "Les pneus des taxis-brousse sont gonflés d'air comprimé à une pression bien précise. Un pneu trop peu gonflé s'use vite et fait consommer plus de carburant ; c'est pourquoi les chauffeurs vérifient la pression avant les longs trajets sur la RN7 !",
    ],
    experience: [
      "Prends une bouteille en plastique vide (elle est en réalité pleine d'air) et un ballon de baudruche.",
      "1. Coiffe le goulot de la bouteille avec le ballon dégonflé.",
      "2. Presse fortement la bouteille entre tes mains : le ballon se gonfle un peu.",
      "3. Relâche la bouteille : le ballon se dégonfle.",
      "Conclusion : l'air chassé de la bouteille occupe le ballon (expansibilité) et reprend sa place quand on relâche (détente).",
    ],
  },
  substitutions: [
    { officiel: "Seringue de laboratoire", local: "Seringue en plastique de pharmacie (sans aiguille) ou pompe à bicyclette" },
    { officiel: "Ballon de laboratoire", local: "Ballon de baudruche ou sachet plastique" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Quand on appuie sur le piston d'une seringue d'air bouchée :  a) le volume de l'air diminue   b) le volume de l'air augmente   c) rien ne se passe",
        "2. La propriété du gaz d'occuper tout le volume offert s'appelle :  a) la compressibilité   b) l'expansibilité   c) la surface libre",
        "3. Un gaz comprimé que l'on libère :  a) reste comprimé   b) se détend   c) devient liquide",
        "4. Lequel de ces corps est pratiquement incompressible ?  a) l'air   b) l'eau   c) le gaz du briquet",
      ],
      corrige: [
        [{ text: "1. Réponse a) : ", bold: true }, { text: "le volume de l'air diminue", cle: true }, { text: " : l'air est comprimé." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "l'expansibilité", cle: true }, { text: " ; la compressibilité est la diminution de volume sous l'effet d'une pression." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "il se détend", cle: true }, { text: " et reprend du volume." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "l'eau", cle: true }, { text: ", comme tous les liquides, est pratiquement incompressible." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Un gaz a un volume propre.",
        "2. L'air d'un pneu de bicyclette est comprimé.",
        "3. L'expansibilité est la diminution du volume d'un gaz.",
        "4. L'odeur d'un poisson grillé se répand dans toute la maison grâce à l'expansibilité des gaz.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : un gaz n'a ni forme propre ni volume propre." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : l'expansibilité est la propriété d'occuper tout le volume offert ; la diminution de volume est la compressibilité." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: " : les gaz odorants occupent tout le volume de la pièce." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : détend – compressible – expansible – volume propre – forme propre – comprimer.",
      items: [
        "Un gaz n'a ni ……… ni ……… . Il est ……… : on peut le ……… en appuyant dessus. Il est aussi ……… : il occupe tout le volume offert. Libéré, un gaz comprimé se ……… .",
      ],
      corrige: [
        [{ text: "Un gaz n'a ni " }, { text: "forme propre", cle: true }, { text: " ni " }, { text: "volume propre", cle: true }, { text: ". Il est " }, { text: "compressible", cle: true }, { text: " : on peut le " }, { text: "comprimer", cle: true }, { text: " en appuyant dessus. Il est aussi " }, { text: "expansible", cle: true }, { text: " : il occupe tout le volume offert. Libéré, un gaz comprimé se " }, { text: "détend", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète le tableau de synthèse des trois états de la matière en répondant aux questions :",
      items: [
        "1. Quel état a une forme propre ?",
        "2. Quels états prennent la forme du récipient ?",
        "3. Quel état est compressible et expansible ?",
        "4. Quel état a une surface libre plane et horizontale au repos ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "L'état solide", cle: true }, { text: " : un solide garde sa forme." }],
        [{ text: "2. " }, { text: "L'état liquide et l'état gazeux", cle: true }, { text: " : ils n'ont pas de forme propre." }],
        [{ text: "3. " }, { text: "L'état gazeux", cle: true }, { text: " : le gaz est compressible et expansible." }],
        [{ text: "4. " }, { text: "L'état liquide", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S4 = {
  numero: 4, total: 34, unite: "I", theme: "Matière",
  titre: "Mise en évidence des gaz : l'air a une masse",
  objectif: "mettre en évidence l'existence des gaz (air, dioxygène, dihydrogène, dioxyde de carbone), recueillir un gaz et montrer qu'un gaz a une masse",
  documentation: "Programme d'études T6 — Sciences Physiques (MEN Madagascar) ; manuel J-Learn",
  support: "Bassine d'eau, bouteille en verre, ballon de baudruche, balance, eau de chaux, briquet à gaz",
  image: "images/img_seance04.png",
  imageLegende: "Figure 4 — Les bulles qui s'échappent de la bouteille renversée montrent que l'air existe",
  revision: {
    qa: [
      { q: "Cite les deux propriétés spécifiques des gaz.", ra: "La compressibilité et l'expansibilité." },
      { q: "Que fait un gaz comprimé quand on le libère ?", ra: "Il se détend et reprend du volume." },
      { q: "Un gaz a-t-il un volume propre ?", ra: "Non, il occupe tout le volume du récipient qui le contient." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Hery plonge une bouteille « vide » dans la bassine d'eau pour la remplir. Il entend « glou glou » et voit de grosses bulles monter à la surface avant que l'eau n'entre dans la bouteille.",
      "La bouteille était-elle vraiment vide ? Que contiennent ces bulles ?",
      "R.A. : Non, la bouteille contenait de l'air ; les bulles sont des bulles d'air.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée", support: "Bouteille, bassine d'eau",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Mise en évidence des gaz : l'air a une masse ». Après cette séance, vous serez capables de montrer que l'air existe, de citer d'autres gaz, de recueillir un gaz et de montrer qu'un gaz a une masse.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : je plonge cette bouteille renversée dans la bassine d'eau et je la penche doucement. Ensuite, je pèse ce ballon dégonflé sur la balance, puis je le gonfle fortement et je le pèse à nouveau.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Bassine d'eau, bouteille, ballon de baudruche, balance",
  },
  analyse: {
    qa: [
      { q: "Que voit-on quand je penche la bouteille renversée sous l'eau ?", ra: "Des bulles s'échappent et montent à la surface : c'est l'air qui sort de la bouteille." },
      { q: "Qu'est-ce que cela prouve ?", ra: "Que l'air existe, même si on ne le voit pas : la bouteille « vide » était pleine d'air." },
      { q: "Comment peut-on recueillir un gaz dans une bouteille ?", ra: "En remplissant la bouteille d'eau, en la renversant sous l'eau et en faisant entrer le gaz qui chasse l'eau : c'est le déplacement d'eau." },
      { q: "Le ballon gonflé pèse-t-il plus lourd que le ballon dégonflé ?", ra: "Oui, le ballon gonflé est un peu plus lourd." },
      { q: "Qu'est-ce que cela prouve ?", ra: "Que l'air a une masse." },
      { q: "Connais-tu d'autres gaz que l'air ?", ra: "Le dioxygène, le dihydrogène, le dioxyde de carbone, le gaz du briquet (butane)." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Bassine d'eau, bouteille, ballon, balance",
  },
  synthese: {
    enseignant: "Donc, l'air existe même si on ne le voit pas : on le met en évidence par les bulles qui s'échappent d'une bouteille sous l'eau. Il existe d'autres gaz : le dioxygène, le dihydrogène, le dioxyde de carbone. On peut recueillir un gaz par déplacement d'eau, et le transvaser d'un récipient à un autre. Un gaz a une masse : un litre d'air pèse environ 1,3 gramme, c'est beaucoup plus léger que les solides et les liquides.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Une bouteille ouverte « vide » contient en réalité de l'air.",
        "b) L'air n'a pas de masse.",
        "c) On peut recueillir un gaz par déplacement d'eau.",
        "d) Le dioxyde de carbone est un gaz.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: " : les bulles qui s'échappent sous l'eau le prouvent." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : un ballon gonflé pèse plus lourd qu'un ballon dégonflé, donc l'air a une masse." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: " : le gaz chasse l'eau de la bouteille renversée." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Cite le nom du gaz qui correspond à chaque description :",
      items: [
        "a) Le gaz que nous respirons pour vivre, présent dans l'air.",
        "b) Le gaz qui trouble l'eau de chaux, présent dans l'air que nous expirons.",
        "c) Le gaz le plus léger, utilisé autrefois dans les ballons volants.",
        "d) Le mélange de gaz qui nous entoure partout.",
      ],
      corrige: [
        [{ text: "a) Le " }, { text: "dioxygène", cle: true }, { text: "." }],
        [{ text: "b) Le " }, { text: "dioxyde de carbone", cle: true }, { text: "." }],
        [{ text: "c) Le " }, { text: "dihydrogène", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "L'air", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail de groupe", applicationSupport: "Ardoise, tableau noir",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : masse – bulles – déplacement d'eau – air – léger.",
      items: [
        "a) Les ……… qui s'échappent de la bouteille sous l'eau prouvent que l'……… existe.",
        "b) On recueille un gaz par ……… .",
        "c) Un gaz a une ……… , mais il est beaucoup plus ……… que les solides et les liquides.",
      ],
      corrige: [
        [{ text: "a) Les " }, { text: "bulles", cle: true }, { text: " qui s'échappent de la bouteille sous l'eau prouvent que l'" }, { text: "air", cle: true }, { text: " existe." }],
        [{ text: "b) On recueille un gaz par " }, { text: "déplacement d'eau", cle: true }, { text: "." }],
        [{ text: "c) Un gaz a une " }, { text: "masse", cle: true }, { text: ", mais il est beaucoup plus " }, { text: "léger", cle: true }, { text: " que les solides et les liquides." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Décris une expérience qui montre que l'air existe.",
        "b) Décris une expérience qui montre que l'air a une masse.",
        "c) Cite trois gaz différents de l'air.",
        "d) Comment recueille-t-on un gaz par déplacement d'eau ?",
      ],
      corrige: [
        [{ text: "a) On plonge une bouteille « vide » renversée dans l'eau et on la penche : " }, { text: "des bulles d'air s'échappent", cle: true }, { text: ", donc l'air existe." }],
        [{ text: "b) On pèse un ballon dégonflé puis le même ballon gonflé : " }, { text: "le ballon gonflé est plus lourd", cle: true }, { text: ", donc l'air a une masse." }],
        [{ text: "c) " }, { text: "Le dioxygène, le dihydrogène et le dioxyde de carbone", cle: true }, { text: "." }],
        [{ text: "d) On remplit une bouteille d'eau, on la renverse dans une bassine d'eau, puis on fait arriver le gaz dans la bouteille : " }, { text: "le gaz chasse l'eau et prend sa place", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["air", "dioxygène", "dihydrogène", "dioxyde de carbone", "déplacement d'eau", "masse"],
    sections: [
      {
        titre: "1. L'air existe",
        paras: [
          "L'air est invisible, mais il existe et occupe de la place. Une bouteille « vide » est en réalité pleine d'air.",
          "Preuves de l'existence de l'air :",
        ],
        puces: [
          "Les bulles qui s'échappent d'une bouteille renversée sous l'eau.",
          "Le vent qui pousse les pirogues à voile : c'est de l'air en mouvement.",
          "L'air qui gonfle un ballon ou un pneu.",
        ],
      },
      {
        titre: "2. Il existe d'autres gaz",
        paras: [
          "L'air n'est pas le seul gaz. On peut citer :",
        ],
        puces: [
          "le dioxygène, le gaz que nous respirons pour vivre ; il est présent dans l'air ;",
          "le dioxyde de carbone, le gaz que nous expirons ; il trouble l'eau de chaux et forme les bulles des boissons gazeuses ;",
          "le dihydrogène, le gaz le plus léger ;",
          "le butane, le gaz des briquets et des bouteilles de gaz de cuisine.",
        ],
      },
      {
        titre: "3. Recueillir et transvaser un gaz",
        paras: [
          "Pour recueillir un gaz, on utilise le déplacement d'eau : on remplit une bouteille d'eau, on la renverse dans une bassine d'eau, puis on fait arriver le gaz dans la bouteille. Le gaz monte, chasse l'eau et prend sa place.",
          "On peut aussi transvaser un gaz d'un récipient à un autre sous l'eau, en faisant passer les bulles d'une bouteille dans l'autre.",
        ],
      },
      {
        titre: "4. Un gaz a une masse",
        paras: [
          "Un ballon gonflé pèse plus lourd que le même ballon dégonflé : l'air a donc une masse.",
          "Un litre d'air pèse environ 1,3 gramme. C'est très peu : les gaz sont beaucoup moins denses que les solides et les liquides. Un litre d'eau pèse 1 000 grammes, presque 800 fois plus qu'un litre d'air !",
        ],
      },
    ],
    saisTu: [
      "L'eau de chaux est un liquide transparent qui se trouble et devient blanchâtre en présence de dioxyde de carbone. Souffle dans un verre d'eau de chaux avec une paille : elle se trouble, car l'air que tu expires contient du dioxyde de carbone produit par ton corps !",
    ],
    experience: [
      "Prends un verre et une bassine d'eau.",
      "1. Chiffonne un morceau de papier sec et cale-le au fond du verre.",
      "2. Retourne le verre et enfonce-le bien droit, verticalement, dans l'eau.",
      "3. Ressors le verre bien droit et touche le papier : il est resté sec !",
      "Conclusion : l'air contenu dans le verre a empêché l'eau d'entrer. L'air existe et occupe de la place.",
    ],
  },
  substitutions: [
    { officiel: "Cuve à eau de laboratoire", local: "Bassine ou cuvette en plastique" },
    { officiel: "Éprouvette à gaz", local: "Bouteille en verre ou en plastique transparente" },
    { officiel: "Balance de précision", local: "Balance électronique de cuisine ou balance de marché" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Une bouteille ouverte posée sur la table contient :  a) rien du tout   b) de l'air   c) du dioxyde de carbone pur",
        "2. Le gaz que nous respirons pour vivre est :  a) le dihydrogène   b) le dioxyde de carbone   c) le dioxygène",
        "3. Pour recueillir un gaz, on utilise :  a) le déplacement d'eau   b) une balance   c) un niveau à bulle",
        "4. Un litre d'air pèse environ :  a) 1,3 gramme   b) 130 grammes   c) 1 000 grammes",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "elle contient de l'air", cle: true }, { text: "." }],
        [{ text: "2. Réponse c) : ", bold: true }, { text: "le dioxygène", cle: true }, { text: " ; le dioxyde de carbone est le gaz que nous expirons." }],
        [{ text: "3. Réponse a) : ", bold: true }, { text: "le déplacement d'eau", cle: true }, { text: "." }],
        [{ text: "4. Réponse a) : ", bold: true }, { text: "environ 1,3 gramme", cle: true }, { text: " : l'air a une masse, mais il est très léger." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. L'air est visible.",
        "2. Le dioxyde de carbone trouble l'eau de chaux.",
        "3. Un ballon gonflé a la même masse qu'un ballon dégonflé.",
        "4. Le dihydrogène est le gaz le plus léger.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : l'air est invisible, mais il existe." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : le ballon gonflé est plus lourd, car l'air a une masse." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : bulles – air – masse – déplacement d'eau – chasse – dioxyde de carbone.",
      items: [
        "Quand on penche une bouteille renversée sous l'eau, des ……… s'échappent : c'est l'……… qui sort. Pour recueillir un gaz, on utilise le ……… : le gaz ……… l'eau de la bouteille. L'air que nous expirons contient du ……… . Un gaz a une ……… .",
      ],
      corrige: [
        [{ text: "Quand on penche une bouteille renversée sous l'eau, des " }, { text: "bulles", cle: true }, { text: " s'échappent : c'est l'" }, { text: "air", cle: true }, { text: " qui sort. Pour recueillir un gaz, on utilise le " }, { text: "déplacement d'eau", cle: true }, { text: " : le gaz " }, { text: "chasse", cle: true }, { text: " l'eau de la bouteille. L'air que nous expirons contient du " }, { text: "dioxyde de carbone", cle: true }, { text: ". Un gaz a une " }, { text: "masse", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Un ballon de baudruche dégonflé pèse 5 g. Une fois gonflé, il pèse 6,5 g.",
      items: [
        "1. Quelle est la masse de l'air contenu dans le ballon ?",
        "2. Que prouve cette expérience ?",
        "3. Sachant qu'un litre d'air pèse environ 1,3 g, quel volume d'air le ballon contient-il à peu près ?",
      ],
      corrige: [
        [{ text: "1. Masse de l'air = 6,5 − 5 = " }, { text: "1,5 g", cle: true }, { text: "." }],
        [{ text: "2. Elle prouve que " }, { text: "l'air a une masse", cle: true }, { text: "." }],
        [{ text: "3. 1,5 ÷ 1,3 ≈ 1,15 : le ballon contient " }, { text: "environ 1 litre d'air", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S5 = {
  numero: 5, total: 34, unite: "I", theme: "Matière",
  titre: "La masse d'un corps : instruments de mesure et unités",
  objectif: "mesurer la masse d'un corps à l'aide d'une balance et l'exprimer en kilogramme, unité du système international",
  documentation: "Programme d'études T6 — Sciences Physiques (MEN Madagascar) ; manuel J-Learn",
  support: "Balance à plateaux, masses marquées, balance électronique, objets divers (fruits, cailloux, livres)",
  image: "images/img_seance05.png",
  imageLegende: "Figure 5 — Une balance à plateaux avec ses masses marquées et une balance électronique",
  revision: {
    qa: [
      { q: "Comment montre-t-on que l'air a une masse ?", ra: "En pesant un ballon dégonflé puis gonflé : le ballon gonflé est plus lourd." },
      { q: "Comment recueille-t-on un gaz ?", ra: "Par déplacement d'eau : le gaz chasse l'eau de la bouteille renversée." },
      { q: "Cite deux gaz autres que l'air.", ra: "Le dioxygène et le dioxyde de carbone (ou le dihydrogène, le butane)." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Au marché, Soa achète 2 kilos de riz. La marchande verse le riz sur le plateau de sa balance et pose des poids de fer sur l'autre plateau jusqu'à l'équilibre.",
      "Que mesure la marchande avec sa balance ?",
      "R.A. : Elle mesure la masse du riz (la quantité de riz).",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La masse d'un corps : instruments de mesure et unités ». Après cette séance, vous serez capables de mesurer la masse d'un corps avec une balance et de l'exprimer en kilogramme.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien cette balance à deux plateaux et sa boîte de masses marquées. Je pose une mangue sur le plateau de gauche, puis j'ajoute des masses marquées sur le plateau de droite jusqu'à ce que l'aiguille soit au milieu.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Balance à plateaux, masses marquées, mangue",
  },
  analyse: {
    qa: [
      { q: "Que représente la masse d'un corps ?", ra: "La quantité de matière contenue dans ce corps." },
      { q: "Quand la balance est-elle en équilibre ?", ra: "Quand l'aiguille est au milieu : les deux plateaux portent alors la même masse." },
      { q: "J'ai posé une masse de 200 g et une de 50 g pour équilibrer la mangue. Quelle est la masse de la mangue ?", ra: "200 + 50 = 250 g : la mangue a une masse de 250 grammes." },
      { q: "Quelle est l'unité de masse du système international ?", ra: "Le kilogramme, de symbole kg." },
      { q: "Cite d'autres unités de masse utilisées dans la vie courante.", ra: "Le gramme (g), la tonne (t) pour les grandes masses ; 1 kg = 1 000 g et 1 t = 1 000 kg." },
    ],
    technique: "Questions-réponses, expérimentation", support: "Balance à plateaux, masses marquées",
  },
  synthese: {
    enseignant: "Donc, la masse d'un corps mesure la quantité de matière qu'il contient. On la mesure avec une balance : balance à plateaux avec des masses marquées, balance électronique ou balance de ménage. L'unité de masse du système international est le kilogramme, de symbole kg. On utilise aussi le gramme : 1 kg = 1 000 g, et la tonne : 1 t = 1 000 kg.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Convertis les masses suivantes :",
      items: [
        "a) 3 kg = ……… g",
        "b) 5 000 g = ……… kg",
        "c) 2 t = ……… kg",
        "d) 500 g = ……… kg",
      ],
      corrige: [
        [{ text: "a) 3 kg = " }, { text: "3 000 g", cle: true }, { text: " (1 kg = 1 000 g)." }],
        [{ text: "b) 5 000 g = " }, { text: "5 kg", cle: true }, { text: "." }],
        [{ text: "c) 2 t = " }, { text: "2 000 kg", cle: true }, { text: " (1 t = 1 000 kg)." }],
        [{ text: "d) 500 g = " }, { text: "0,5 kg", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) La masse d'un corps se mesure avec une balance.",
        "b) L'unité de masse du système international est le gramme.",
        "c) Une balance à plateaux est en équilibre quand l'aiguille est au milieu.",
        "d) 1 tonne = 100 kg.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : c'est le kilogramme (kg) ; le gramme est un sous-multiple." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Faux", cle: true }, { text: " : 1 tonne = 1 000 kg." }],
      ],
    },
  ],
  applicationTechnique: "Travail individuel sur ardoise", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Qu'est-ce que la masse d'un corps ?",
        "b) Avec quel instrument mesure-t-on une masse ?",
        "c) Quelle est l'unité de masse du système international et son symbole ?",
        "d) Pour équilibrer un ananas, on a posé des masses de 500 g, 200 g et 100 g. Quelle est la masse de l'ananas ?",
      ],
      corrige: [
        [{ text: "a) C'est la " }, { text: "quantité de matière", cle: true }, { text: " contenue dans le corps." }],
        [{ text: "b) Avec une " }, { text: "balance", cle: true }, { text: "." }],
        [{ text: "c) Le " }, { text: "kilogramme", cle: true }, { text: ", de symbole " }, { text: "kg", cle: true }, { text: "." }],
        [{ text: "d) 500 + 200 + 100 = " }, { text: "800 g", cle: true }, { text: " : l'ananas a une masse de 800 grammes." }],
      ],
    },
    {
      consigne: "Choisis l'unité qui convient le mieux : g, kg ou t.",
      items: [
        "a) La masse d'un zébu adulte : environ 400 ……… .",
        "b) La masse d'une orange : environ 200 ……… .",
        "c) La masse d'un camion chargé : environ 10 ……… .",
        "d) La masse d'un sac de riz du marché : 50 ……… .",
      ],
      corrige: [
        [{ text: "a) 400 " }, { text: "kg", cle: true }, { text: "." }],
        [{ text: "b) 200 " }, { text: "g", cle: true }, { text: "." }],
        [{ text: "c) 10 " }, { text: "t", cle: true }, { text: "." }],
        [{ text: "d) 50 " }, { text: "kg", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["masse", "balance", "kilogramme", "masses marquées", "équilibre"],
    sections: [
      {
        titre: "1. Qu'est-ce que la masse ?",
        paras: [
          "La masse d'un corps mesure la quantité de matière contenue dans ce corps. Plus un corps contient de matière, plus sa masse est grande.",
          "La masse d'un corps ne change pas quand on le déplace : un sac de riz de 50 kg a la même masse à Antananarivo, à Toamasina ou n'importe où.",
        ],
      },
      {
        titre: "2. Les instruments de mesure de la masse",
        paras: ["On mesure la masse avec une balance. Il existe plusieurs sortes de balances :"],
        puces: [
          "la balance à deux plateaux, utilisée avec une boîte de masses marquées : elle est en équilibre quand les deux plateaux portent la même masse ;",
          "la balance électronique, qui affiche directement la masse sur un écran ;",
          "la balance de ménage et le pèse-personne, utilisés à la maison.",
        ],
      },
      {
        titre: "3. Les unités de masse",
        paras: [
          "L'unité de masse du système international (SI) est le kilogramme, de symbole kg.",
          "On utilise aussi :",
        ],
        puces: [
          "le gramme (g) pour les petites masses : 1 kg = 1 000 g ;",
          "la tonne (t) pour les grandes masses : 1 t = 1 000 kg.",
        ],
      },
      {
        titre: "4. Comment peser avec une balance à plateaux ?",
        paras: ["Pour mesurer la masse d'une mangue :"],
        puces: [
          "on pose la mangue sur un plateau ;",
          "on pose des masses marquées sur l'autre plateau jusqu'à l'équilibre (aiguille au milieu) ;",
          "on additionne les masses marquées : leur somme est la masse de la mangue.",
        ],
      },
    ],
    saisTu: [
      "Le kilogramme est défini de la même façon dans le monde entier : c'est l'unité de base du Système international d'unités (SI), adopté par presque tous les pays, dont Madagascar. Ainsi, 1 kg de riz pesé à Mahajanga est exactement la même masse qu'1 kg pesé à Paris ou à Tokyo !",
    ],
    experience: [
      "Fabrique une mini balance à plateaux :",
      "1. Prends une règle plate, un crayon rond et deux couvercles identiques de bouteille.",
      "2. Pose la règle en équilibre sur le crayon (au milieu), et un couvercle à chaque bout.",
      "3. Pose un petit objet (une gomme) d'un côté, et des pièces de monnaie de l'autre jusqu'à l'équilibre.",
      "Conclusion : ta balance compare les masses ; la gomme a la même masse que les pièces posées.",
    ],
  },
  substitutions: [
    { officiel: "Balance Roberval et boîte de masses marquées", local: "Balance de marchand, balance électronique de cuisine" },
    { officiel: "Masses marquées de laboratoire", local: "Pièces de monnaie (une pièce de 50 ariary a une masse connue), sachets de sel pesés" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. La masse d'un corps mesure :  a) sa taille   b) la quantité de matière qu'il contient   c) la place qu'il occupe",
        "2. L'unité de masse du système international est :  a) le gramme   b) le litre   c) le kilogramme",
        "3. 1 kg = :  a) 100 g   b) 1 000 g   c) 10 000 g",
        "4. La balance à plateaux est en équilibre quand :  a) un plateau est plus bas   b) l'aiguille est au milieu   c) les plateaux sont vides",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "la quantité de matière qu'il contient", cle: true }, { text: " ; la place occupée est le volume." }],
        [{ text: "2. Réponse c) : ", bold: true }, { text: "le kilogramme (kg)", cle: true }, { text: "." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "1 kg = 1 000 g", cle: true }, { text: "." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "quand l'aiguille est au milieu", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Convertis les masses suivantes :",
      items: [
        "1. 7 kg = ……… g",
        "2. 2 500 g = ……… kg",
        "3. 4 t = ……… kg",
        "4. 250 g = ……… kg",
        "5. 12 000 kg = ……… t",
        "6. 0,8 kg = ……… g",
      ],
      corrige: [
        [{ text: "1. 7 kg = " }, { text: "7 000 g", cle: true }, { text: "." }],
        [{ text: "2. 2 500 g = " }, { text: "2,5 kg", cle: true }, { text: "." }],
        [{ text: "3. 4 t = " }, { text: "4 000 kg", cle: true }, { text: "." }],
        [{ text: "4. 250 g = " }, { text: "0,25 kg", cle: true }, { text: "." }],
        [{ text: "5. 12 000 kg = " }, { text: "12 t", cle: true }, { text: "." }],
        [{ text: "6. 0,8 kg = " }, { text: "800 g", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. La masse d'un sac de riz change quand on le transporte dans une autre ville.",
        "2. Une balance électronique affiche directement la masse.",
        "3. La tonne sert à mesurer les petites masses.",
        "4. Pour peser, on additionne les masses marquées posées à l'équilibre.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : la masse ne change pas quand on déplace le corps." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : la tonne sert aux grandes masses (1 t = 1 000 kg)." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Rija pèse un régime de bananes : à l'équilibre, il a posé sur l'autre plateau une masse de 2 kg, une masse de 500 g et une masse de 200 g.",
      items: [
        "1. Quelle est la masse du régime de bananes en grammes ?",
        "2. Exprime cette masse en kilogrammes.",
        "3. La marchande vend les bananes 4 000 ariary le kilogramme. Combien coûte le régime ?",
      ],
      corrige: [
        [{ text: "1. 2 000 + 500 + 200 = " }, { text: "2 700 g", cle: true }, { text: "." }],
        [{ text: "2. 2 700 g = " }, { text: "2,7 kg", cle: true }, { text: "." }],
        [{ text: "3. 2,7 × 4 000 = " }, { text: "10 800 ariary", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S6 = {
  numero: 6, total: 34, unite: "I", theme: "Matière",
  titre: "Le volume d'un corps : instruments de mesure et unités",
  objectif: "mesurer le volume d'un solide ou d'un liquide et l'exprimer en mètre cube (SI) ou en litre (vie courante)",
  documentation: "Programme d'études T6 — Sciences Physiques (MEN Madagascar) ; manuel J-Learn",
  support: "Éprouvette graduée ou verre doseur, eau, caillou, ficelle, bouteilles de différentes contenances",
  image: "images/img_seance06.png",
  imageLegende: "Figure 6 — Mesure du volume d'un caillou par déplacement d'eau dans une éprouvette graduée",
  revision: {
    qa: [
      { q: "Qu'est-ce que la masse d'un corps ?", ra: "C'est la quantité de matière contenue dans le corps." },
      { q: "Quelle est l'unité de masse du système international ?", ra: "Le kilogramme (kg)." },
      { q: "1 kg, c'est combien de grammes ?", ra: "1 kg = 1 000 g." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Aina verse l'eau d'une grande bouteille d'un litre et demi dans des petits sachets pour les vendre glacés. Elle se demande combien de sachets de 25 centilitres elle pourra remplir.",
      "Que cherche à connaître Aina : la masse ou la place occupée par l'eau ?",
      "R.A. : La place occupée par l'eau, c'est-à-dire son volume.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée", support: "Bouteille d'eau",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Le volume d'un corps : instruments de mesure et unités ». Après cette séance, vous serez capables de mesurer le volume d'un liquide ou d'un solide et de l'exprimer en litre ou en mètre cube.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien cette éprouvette graduée contenant de l'eau : je lis le niveau de l'eau. Maintenant, j'attache le caillou à une ficelle et je le plonge doucement dans l'eau. Observez le nouveau niveau.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Éprouvette graduée, eau, caillou, ficelle",
  },
  analyse: {
    qa: [
      { q: "Que représente le volume d'un corps ?", ra: "La place que ce corps occupe dans l'espace." },
      { q: "Comment mesure-t-on le volume d'un liquide ?", ra: "En le versant dans un récipient gradué : éprouvette graduée, verre doseur." },
      { q: "Que se passe-t-il quand je plonge le caillou dans l'eau ?", ra: "Le niveau de l'eau monte." },
      { q: "L'eau était à 100 mL ; avec le caillou, elle monte à 135 mL. Quel est le volume du caillou ?", ra: "135 − 100 = 35 mL : le volume du caillou est 35 millilitres." },
      { q: "Quelle est l'unité de volume du système international ?", ra: "Le mètre cube (m³). Dans la vie courante, on utilise le litre (L)." },
    ],
    technique: "Questions-réponses, expérimentation", support: "Éprouvette graduée, caillou",
  },
  synthese: {
    enseignant: "Donc, le volume d'un corps est la place qu'il occupe. L'unité de volume du système international est le mètre cube, de symbole m³. Dans la vie courante, on utilise le litre : 1 L = 1 dm³ et 1 000 L = 1 m³. On mesure le volume d'un liquide avec un récipient gradué, et le volume d'un solide de forme quelconque par déplacement d'eau : le volume du solide est égal à la montée du niveau de l'eau.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Convertis les volumes suivants :",
      items: [
        "a) 3 L = ……… mL",
        "b) 2 000 L = ……… m³",
        "c) 1 m³ = ……… L",
        "d) 500 mL = ……… L",
      ],
      corrige: [
        [{ text: "a) 3 L = " }, { text: "3 000 mL", cle: true }, { text: "." }],
        [{ text: "b) 2 000 L = " }, { text: "2 m³", cle: true }, { text: "." }],
        [{ text: "c) 1 m³ = " }, { text: "1 000 L", cle: true }, { text: "." }],
        [{ text: "d) 500 mL = " }, { text: "0,5 L", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Le volume d'un corps est la place qu'il occupe.",
        "b) On mesure le volume d'un caillou avec une balance.",
        "c) Le mètre cube est l'unité de volume du système international.",
        "d) Quand on plonge un solide dans l'eau, le niveau de l'eau descend.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : la balance mesure la masse ; le volume d'un caillou se mesure par déplacement d'eau." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Faux", cle: true }, { text: " : le niveau monte, car le solide prend la place de l'eau." }],
      ],
    },
  ],
  applicationTechnique: "Travail individuel sur ardoise", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Qu'est-ce que le volume d'un corps ?",
        "b) Quelle est l'unité de volume du système international ? Et celle de la vie courante ?",
        "c) Comment mesure-t-on le volume d'un caillou ?",
        "d) L'eau d'une éprouvette monte de 80 mL à 110 mL quand on y plonge une bille. Quel est le volume de la bille ?",
      ],
      corrige: [
        [{ text: "a) C'est la " }, { text: "place que le corps occupe", cle: true }, { text: " dans l'espace." }],
        [{ text: "b) Le " }, { text: "mètre cube (m³)", cle: true }, { text: " ; dans la vie courante, le " }, { text: "litre (L)", cle: true }, { text: "." }],
        [{ text: "c) Par " }, { text: "déplacement d'eau", cle: true }, { text: " : on plonge le caillou dans un récipient gradué et on mesure la montée du niveau." }],
        [{ text: "d) 110 − 80 = " }, { text: "30 mL", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Choisis l'unité qui convient le mieux : mL, L ou m³.",
      items: [
        "a) Le volume d'eau d'une citerne : 3 ……… .",
        "b) Le volume d'une cuillerée de sirop : 5 ……… .",
        "c) Le volume d'un bidon d'eau : 20 ……… .",
        "d) Le volume d'une piscine : 50 ……… .",
      ],
      corrige: [
        [{ text: "a) 3 " }, { text: "m³", cle: true }, { text: "." }],
        [{ text: "b) 5 " }, { text: "mL", cle: true }, { text: "." }],
        [{ text: "c) 20 " }, { text: "L", cle: true }, { text: "." }],
        [{ text: "d) 50 " }, { text: "m³", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["volume", "mètre cube", "litre", "déplacement d'eau", "récipient gradué"],
    sections: [
      {
        titre: "1. Qu'est-ce que le volume ?",
        paras: [
          "Le volume d'un corps est la place que ce corps occupe dans l'espace.",
          "Il ne faut pas confondre la masse (quantité de matière, mesurée en kg) et le volume (place occupée, mesurée en m³ ou en litres).",
        ],
      },
      {
        titre: "2. Les unités de volume",
        paras: ["L'unité de volume du système international (SI) est le mètre cube, de symbole m³."],
        puces: [
          "Dans la vie courante, on utilise le litre (L) : 1 L = 1 dm³.",
          "1 m³ = 1 000 L.",
          "Pour les petits volumes : le millilitre (mL) ; 1 L = 1 000 mL et 1 mL = 1 cm³.",
        ],
      },
      {
        titre: "3. Mesurer le volume d'un liquide",
        paras: [
          "On verse le liquide dans un récipient gradué : éprouvette graduée, verre doseur, biberon gradué. On lit le volume au niveau de la surface libre du liquide, en plaçant l'œil à la hauteur de cette surface.",
        ],
      },
      {
        titre: "4. Mesurer le volume d'un solide par déplacement d'eau",
        paras: ["Pour un solide de forme quelconque, comme un caillou :"],
        puces: [
          "on met de l'eau dans un récipient gradué et on lit le volume V1 (exemple : 100 mL) ;",
          "on plonge doucement le solide dans l'eau et on lit le nouveau volume V2 (exemple : 135 mL) ;",
          "le volume du solide est V2 − V1 (exemple : 135 − 100 = 35 mL, soit 35 cm³).",
        ],
      },
    ],
    saisTu: [
      "La Jirama facture l'eau en mètres cubes : le compteur d'eau de la maison compte chaque mètre cube consommé, c'est-à-dire chaque tranche de 1 000 litres. Une famille qui utilise 5 m³ dans le mois a consommé 5 000 litres d'eau !",
    ],
    experience: [
      "Mesure le volume d'un caillou à la maison :",
      "1. Remplis à moitié un verre doseur de cuisine (ou une bouteille graduée avec une règle) et note le niveau.",
      "2. Attache un caillou à un fil et plonge-le doucement dans l'eau, sans éclabousser.",
      "3. Note le nouveau niveau et calcule la différence : c'est le volume du caillou.",
    ],
  },
  substitutions: [
    { officiel: "Éprouvette graduée", local: "Verre doseur de cuisine, biberon gradué, bouteille graduée à la règle" },
    { officiel: "Solides d'étude calibrés", local: "Cailloux, billes, boulons" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Le volume d'un corps est :  a) sa quantité de matière   b) la place qu'il occupe   c) sa masse",
        "2. L'unité de volume du système international est :  a) le litre   b) le kilogramme   c) le mètre cube",
        "3. 1 m³ = :  a) 100 L   b) 1 000 L   c) 10 L",
        "4. On mesure le volume d'un caillou :  a) avec une balance   b) par déplacement d'eau   c) avec un mètre ruban",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "la place qu'il occupe", cle: true }, { text: " ; la quantité de matière est la masse." }],
        [{ text: "2. Réponse c) : ", bold: true }, { text: "le mètre cube (m³)", cle: true }, { text: " ; le litre est l'unité de la vie courante." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "1 m³ = 1 000 L", cle: true }, { text: "." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "par déplacement d'eau", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Convertis les volumes suivants :",
      items: [
        "1. 5 L = ……… mL",
        "2. 3 m³ = ……… L",
        "3. 4 500 L = ……… m³",
        "4. 250 mL = ……… L",
        "5. 1 L = ……… dm³",
        "6. 2 500 mL = ……… L",
      ],
      corrige: [
        [{ text: "1. 5 L = " }, { text: "5 000 mL", cle: true }, { text: "." }],
        [{ text: "2. 3 m³ = " }, { text: "3 000 L", cle: true }, { text: "." }],
        [{ text: "3. 4 500 L = " }, { text: "4,5 m³", cle: true }, { text: "." }],
        [{ text: "4. 250 mL = " }, { text: "0,25 L", cle: true }, { text: "." }],
        [{ text: "5. 1 L = " }, { text: "1 dm³", cle: true }, { text: "." }],
        [{ text: "6. 2 500 mL = " }, { text: "2,5 L", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. On lit le volume d'un liquide en plaçant l'œil à la hauteur de la surface libre.",
        "2. 1 mL = 1 cm³.",
        "3. Le volume d'un solide plongé dans l'eau est égal à la descente du niveau de l'eau.",
        "4. Le litre est l'unité de volume du système international.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : il est égal à la montée du niveau de l'eau." }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : c'est le mètre cube ; le litre est l'unité de la vie courante." }],
      ],
    },
    {
      points: 6,
      consigne: "Une éprouvette graduée contient 150 mL d'eau. On y plonge un caillou : le niveau monte à 210 mL.",
      items: [
        "1. Quel est le volume du caillou en mL ?",
        "2. Exprime ce volume en cm³.",
        "3. Aina veut remplir des sachets de 250 mL avec une bouteille de 1,5 L d'eau. Combien de sachets peut-elle remplir ?",
      ],
      corrige: [
        [{ text: "1. 210 − 150 = " }, { text: "60 mL", cle: true }, { text: "." }],
        [{ text: "2. 60 mL = " }, { text: "60 cm³", cle: true }, { text: " (1 mL = 1 cm³)." }],
        [{ text: "3. 1,5 L = 1 500 mL ; 1 500 ÷ 250 = " }, { text: "6 sachets", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S7 = {
  numero: 7, total: 34, unite: "I", theme: "Matière",
  titre: "La pression : pression exercée et pression subie",
  objectif: "expliquer la notion de pression exercée et subie, et citer son unité et son instrument de mesure",
  documentation: "Programme d'études T6 — Sciences Physiques (MEN Madagascar) ; manuel J-Learn",
  support: "Punaise, planche de bois, éponge, brique, pompe à bicyclette avec manomètre",
  image: "images/img_seance07.png",
  imageLegende: "Figure 7 — La pointe fine de la punaise s'enfonce facilement ; les raquettes larges s'enfoncent moins dans le sable",
  revision: {
    qa: [
      { q: "Qu'est-ce que le volume d'un corps ?", ra: "C'est la place que le corps occupe dans l'espace." },
      { q: "Quelle est l'unité de volume du système international ?", ra: "Le mètre cube (m³)." },
      { q: "Comment mesure-t-on le volume d'un caillou ?", ra: "Par déplacement d'eau dans un récipient gradué." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Pourquoi est-il facile d'enfoncer une punaise pointue dans le bois, alors qu'il est impossible d'y enfoncer son doigt en appuyant aussi fort ?",
      "R.A. : Parce que la pointe de la punaise est très fine : toute la force est concentrée sur une toute petite surface.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Punaise, planche",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La pression : pression exercée et pression subie ». Après cette séance, vous serez capables d'expliquer ce qu'est la pression, de dire de quoi elle dépend, et de citer son unité et son instrument de mesure.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : je pose cette brique à plat sur l'éponge, puis je pose la même brique debout sur sa plus petite face. Observez l'enfoncement de l'éponge dans les deux cas.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Brique, éponge",
  },
  analyse: {
    qa: [
      { q: "La brique a-t-elle la même masse dans les deux cas ?", ra: "Oui, c'est la même brique : elle appuie avec la même force." },
      { q: "Dans quel cas l'éponge s'enfonce-t-elle le plus ?", ra: "Quand la brique est debout sur sa petite face." },
      { q: "Qu'est-ce qui a changé entre les deux cas ?", ra: "La surface d'appui : elle est plus petite quand la brique est debout." },
      { q: "Que peut-on en conclure ?", ra: "Plus la surface d'appui est petite, plus la pression est grande, pour une même force." },
      { q: "Qui exerce la pression et qui la subit ?", ra: "La brique exerce une pression sur l'éponge ; l'éponge subit la pression." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Brique, éponge",
  },
  synthese: {
    enseignant: "Donc, quand un corps appuie sur une surface, il exerce une pression, et la surface subit cette pression. La pression dépend de la force exercée et de la surface d'appui : elle augmente quand la force augmente, et elle augmente quand la surface diminue. L'unité de pression du système international est le pascal, de symbole Pa. On mesure la pression d'un gaz avec un manomètre, comme celui qui sert à vérifier la pression des pneus.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Pour une même force, la pression augmente quand la surface d'appui diminue.",
        "b) L'unité de pression du système international est le kilogramme.",
        "c) Une brique posée debout exerce une pression plus grande qu'une brique posée à plat.",
        "d) On mesure la pression d'un pneu avec un manomètre.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : c'est le pascal (Pa) ; le kilogramme est l'unité de masse." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: " : la surface d'appui est plus petite." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Explique en une phrase pourquoi :",
      items: [
        "a) Un couteau bien aiguisé coupe mieux qu'un couteau émoussé.",
        "b) On enfonce facilement un clou pointu dans une planche.",
        "c) Les raquettes à sable empêchent de s'enfoncer.",
        "d) Le zébu s'enfonce dans la rizière boueuse alors que le canard ne s'enfonce presque pas.",
      ],
      corrige: [
        [{ text: "a) Le tranchant aiguisé a une " }, { text: "surface très petite", cle: true }, { text: " : la pression est très grande." }],
        [{ text: "b) La pointe du clou " }, { text: "concentre la force sur une petite surface", cle: true }, { text: " : la pression est grande." }],
        [{ text: "c) Les raquettes ont une " }, { text: "grande surface", cle: true }, { text: " : la pression sur le sable est plus petite." }],
        [{ text: "d) Les sabots du zébu ont une " }, { text: "petite surface", cle: true }, { text: " pour un corps très lourd : la pression exercée est grande ; les pattes palmées du canard répartissent son faible poids sur une plus grande surface." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : subit – pascal – exerce – surface – manomètre – force.",
      items: [
        "a) La brique ……… une pression sur l'éponge ; l'éponge ……… cette pression.",
        "b) La pression dépend de la ……… exercée et de la ……… d'appui.",
        "c) L'unité de pression est le ……… ; on mesure la pression d'un gaz avec un ……… .",
      ],
      corrige: [
        [{ text: "a) La brique " }, { text: "exerce", cle: true }, { text: " une pression sur l'éponge ; l'éponge " }, { text: "subit", cle: true }, { text: " cette pression." }],
        [{ text: "b) La pression dépend de la " }, { text: "force", cle: true }, { text: " exercée et de la " }, { text: "surface", cle: true }, { text: " d'appui." }],
        [{ text: "c) L'unité de pression est le " }, { text: "pascal", cle: true }, { text: " ; on mesure la pression d'un gaz avec un " }, { text: "manomètre", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Qu'est-ce qui se passe quand un corps appuie sur une surface ?",
        "b) De quoi dépend la pression ?",
        "c) Quelle est l'unité de pression du système international ?",
        "d) Pourquoi marche-t-on plus facilement sur la boue avec des planches sous les pieds ?",
      ],
      corrige: [
        [{ text: "a) Le corps " }, { text: "exerce une pression", cle: true }, { text: " sur la surface, qui la " }, { text: "subit", cle: true }, { text: "." }],
        [{ text: "b) De la " }, { text: "force exercée", cle: true }, { text: " et de la " }, { text: "surface d'appui", cle: true }, { text: "." }],
        [{ text: "c) Le " }, { text: "pascal (Pa)", cle: true }, { text: "." }],
        [{ text: "d) Les planches " }, { text: "augmentent la surface d'appui", cle: true }, { text: ", donc la pression sur la boue diminue et on s'enfonce moins." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["pression", "exerce", "subit", "surface d'appui", "pascal", "manomètre"],
    sections: [
      {
        titre: "1. Pression exercée, pression subie",
        paras: [
          "Quand un corps appuie sur une surface, il exerce une pression sur cette surface. La surface, elle, subit la pression.",
          "Exemples : la brique exerce une pression sur l'éponge ; nos pieds exercent une pression sur le sol ; l'air comprimé exerce une pression sur les parois du pneu.",
        ],
      },
      {
        titre: "2. De quoi dépend la pression ?",
        paras: ["La pression dépend de deux choses :"],
        puces: [
          "de la force exercée : plus on appuie fort, plus la pression est grande ;",
          "de la surface d'appui : pour une même force, plus la surface est petite, plus la pression est grande.",
        ],
      },
      {
        titre: "3. Applications de la vie courante",
        sousSections: [
          {
            titre: "a. Concentrer la force sur une petite surface",
            paras: ["Pour augmenter la pression, on diminue la surface :"],
            puces: [
              "la pointe d'une punaise ou d'un clou s'enfonce facilement ;",
              "un couteau bien aiguisé coupe mieux ;",
              "l'angady s'enfonce dans la terre grâce à son tranchant fin.",
            ],
          },
          {
            titre: "b. Répartir la force sur une grande surface",
            paras: ["Pour diminuer la pression, on augmente la surface :"],
            puces: [
              "des planches posées sur la boue permettent de marcher sans s'enfoncer ;",
              "les fondations larges d'une maison répartissent son poids sur le sol.",
            ],
          },
        ],
      },
      {
        titre: "4. Unité et instrument de mesure",
        paras: [
          "L'unité de pression du système international est le pascal, de symbole Pa. On utilise aussi le bar pour la pression des pneus : 1 bar = 100 000 Pa.",
          "On mesure la pression d'un gaz avec un manomètre : le gonfleur du vulcanisateur en possède un pour vérifier la pression des pneus.",
        ],
      },
    ],
    saisTu: [
      "L'unité « pascal » rend hommage à Blaise Pascal, savant français du XVIIe siècle qui a étudié la pression de l'air. L'air qui nous entoure exerce sur nous une pression d'environ 100 000 pascals : c'est la pression atmosphérique, que nous ne sentons pas car elle s'exerce dans toutes les directions !",
    ],
    experience: [
      "Compare des pressions avec une éponge (ou de la mie de pain) :",
      "1. Pose une boîte pleine à plat sur l'éponge : note l'enfoncement.",
      "2. Pose la même boîte debout sur son petit côté : l'éponge s'enfonce davantage.",
      "Conclusion : même force, surface plus petite → pression plus grande.",
    ],
  },
  substitutions: [
    { officiel: "Manomètre de laboratoire", local: "Manomètre du gonfleur de bicyclette ou du vulcanisateur" },
    { officiel: "Blocs d'essai calibrés", local: "Brique, boîte de conserve pleine" },
    { officiel: "Mousse d'essai", local: "Éponge, mie de pain, sable fin" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Quand un corps appuie sur une surface, il :  a) subit une pression   b) exerce une pression   c) perd sa masse",
        "2. Pour une même force, si la surface d'appui diminue, la pression :  a) diminue   b) ne change pas   c) augmente",
        "3. L'unité de pression du système international est :  a) le pascal   b) le litre   c) le kilogramme",
        "4. On mesure la pression des pneus avec :  a) une balance   b) un manomètre   c) une éprouvette graduée",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "il exerce une pression", cle: true }, { text: " ; c'est la surface qui la subit." }],
        [{ text: "2. Réponse c) : ", bold: true }, { text: "la pression augmente", cle: true }, { text: "." }],
        [{ text: "3. Réponse a) : ", bold: true }, { text: "le pascal (Pa)", cle: true }, { text: "." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "un manomètre", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Une punaise s'enfonce facilement car sa pointe a une très grande surface.",
        "2. Un couteau aiguisé coupe mieux car la pression sur son tranchant est très grande.",
        "3. Les planches posées sur la boue augmentent la pression sur le sol.",
        "4. Le pascal a pour symbole Pa.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : sa pointe a une très petite surface, ce qui rend la pression très grande." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : elles augmentent la surface d'appui, donc la pression diminue." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : pression – exerce – subit – augmente – diminue – surface.",
      items: [
        "Un corps posé sur une table ……… une pression ; la table ……… cette pression. Pour une même force, la pression ……… quand la ……… d'appui diminue, et elle ……… quand la surface augmente. La ……… se mesure en pascals.",
      ],
      corrige: [
        [{ text: "Un corps posé sur une table " }, { text: "exerce", cle: true }, { text: " une pression ; la table " }, { text: "subit", cle: true }, { text: " cette pression. Pour une même force, la pression " }, { text: "augmente", cle: true }, { text: " quand la " }, { text: "surface", cle: true }, { text: " d'appui diminue, et elle " }, { text: "diminue", cle: true }, { text: " quand la surface augmente. La " }, { text: "pression", cle: true }, { text: " se mesure en pascals." }],
      ],
    },
    {
      points: 6,
      consigne: "Explique chaque situation en utilisant le mot « pression » :",
      items: [
        "1. Rakoto marche sur la rizière boueuse avec de larges planches attachées sous ses pieds.",
        "2. La pointe de l'angady est fine et tranchante.",
        "3. Le camion très chargé laisse des traces profondes sur la piste en terre.",
      ],
      corrige: [
        [{ text: "1. Les planches " }, { text: "augmentent la surface d'appui", cle: true }, { text: " : la " }, { text: "pression diminue", cle: true }, { text: " et Rakoto ne s'enfonce pas." }],
        [{ text: "2. Le tranchant fin " }, { text: "concentre la force sur une petite surface", cle: true }, { text: " : la " }, { text: "pression est très grande", cle: true }, { text: " et l'angady s'enfonce dans la terre." }],
        [{ text: "3. Le camion exerce une " }, { text: "force très grande", cle: true }, { text: " : la " }, { text: "pression exercée", cle: true }, { text: " sur la piste est grande et les roues s'enfoncent." }],
      ],
    },
  ],
};

const S8 = {
  numero: 8, total: 34, unite: "I", theme: "Matière",
  titre: "Pression et changement d'état d'un corps",
  objectif: "expliquer qu'un changement de pression peut provoquer un changement d'état d'un corps",
  documentation: "Programme d'études T6 — Sciences Physiques (MEN Madagascar) ; manuel J-Learn",
  support: "Cocotte-minute (ou image), briquet à gaz transparent, seringue avec eau tiède",
  image: "images/img_seance08.png",
  imageLegende: "Figure 8 — Dans la cocotte-minute, la pression élevée fait cuire les aliments plus vite",
  revision: {
    qa: [
      { q: "De quoi dépend la pression exercée par un corps ?", ra: "De la force exercée et de la surface d'appui." },
      { q: "Quelle est l'unité de pression du système international ?", ra: "Le pascal (Pa)." },
      { q: "Avec quel instrument mesure-t-on la pression d'un gaz ?", ra: "Avec un manomètre." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Dans un briquet transparent, on voit du liquide. Pourtant, quand on appuie sur le bouton, c'est du gaz qui sort et qui s'enflamme.",
      "Comment le gaz du briquet peut-il être liquide à l'intérieur ?",
      "R.A. : Parce qu'il est très comprimé : la forte pression l'a rendu liquide.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Briquet à gaz transparent",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Pression et changement d'état d'un corps ». Après cette séance, vous serez capables d'expliquer qu'un changement de pression peut changer l'état d'un corps : un gaz comprimé peut devenir liquide, et un liquide peut bouillir plus ou moins vite selon la pression.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien ce briquet transparent : à l'intérieur, le butane est liquide ; à la sortie, il devient gaz. Observez aussi cette image de cocotte-minute : la vapeur sous pression y est plus chaude que dans une marmite ordinaire.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, étude documentaire", support: "Briquet transparent, image de cocotte-minute",
  },
  analyse: {
    qa: [
      { q: "Dans quel état est le butane à l'intérieur du briquet ? Et à la sortie ?", ra: "Liquide à l'intérieur, gazeux à la sortie." },
      { q: "Pourquoi le butane est-il liquide à l'intérieur ?", ra: "Parce qu'il est fortement comprimé : la pression élevée l'a rendu liquide." },
      { q: "Que se passe-t-il quand le butane sort du briquet ?", ra: "La pression diminue brusquement : le liquide redevient gaz." },
      { q: "Pourquoi les aliments cuisent-ils plus vite dans une cocotte-minute ?", ra: "Parce que la pression y est plus élevée : l'eau bout à une température plus haute que 100 °C." },
      { q: "En haute montagne, l'eau bout-elle à 100 °C ?", ra: "Non, elle bout avant 100 °C, car la pression de l'air y est plus faible." },
    ],
    technique: "Questions-réponses, étude documentaire", support: "Briquet transparent, image de cocotte-minute",
  },
  synthese: {
    enseignant: "Donc, la pression peut changer l'état d'un corps. Quand on comprime fortement un gaz, il peut devenir liquide : c'est le cas du butane dans le briquet ou la bouteille de gaz. Quand la pression diminue, le liquide redevient gaz. La pression change aussi la température d'ébullition de l'eau : sous pression élevée, dans la cocotte-minute, l'eau bout au-dessus de 100 °C et les aliments cuisent plus vite ; en montagne, où la pression est plus faible, l'eau bout au-dessous de 100 °C.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Un gaz fortement comprimé peut devenir liquide.",
        "b) Le butane du briquet est gazeux à l'intérieur du réservoir.",
        "c) Dans une cocotte-minute, l'eau bout à plus de 100 °C.",
        "d) En haute montagne, l'eau bout à plus de 100 °C.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: " : c'est la liquéfaction par compression." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : il est liquide à l'intérieur car il est comprimé ; il devient gaz à la sortie." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: " : la pression élevée augmente la température d'ébullition." }],
        [{ text: "d) " }, { text: "Faux", cle: true }, { text: " : elle bout avant 100 °C, car la pression y est plus faible." }],
      ],
    },
    {
      consigne: "Complète chaque phrase :",
      items: [
        "a) Quand on ……… fortement un gaz, il peut devenir liquide.",
        "b) Quand la pression diminue, le butane liquide redevient ……… .",
        "c) Sous pression élevée, l'eau bout à ……… de 100 °C.",
        "d) Sous pression faible, l'eau bout à ……… de 100 °C.",
      ],
      corrige: [
        [{ text: "a) Quand on " }, { text: "comprime", cle: true }, { text: " fortement un gaz, il peut devenir liquide." }],
        [{ text: "b) Il redevient " }, { text: "gaz", cle: true }, { text: "." }],
        [{ text: "c) Elle bout " }, { text: "au-dessus", cle: true }, { text: " de 100 °C." }],
        [{ text: "d) Elle bout " }, { text: "au-dessous", cle: true }, { text: " de 100 °C." }],
      ],
    },
  ],
  applicationTechnique: "Travail individuel sur ardoise", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Pourquoi le gaz du briquet est-il liquide à l'intérieur du réservoir ?",
        "b) Que devient ce liquide quand il sort du briquet ? Pourquoi ?",
        "c) Pourquoi la cocotte-minute cuit-elle plus vite qu'une marmite ordinaire ?",
        "d) Cite un autre exemple de gaz rendu liquide par compression.",
      ],
      corrige: [
        [{ text: "a) Parce qu'il est " }, { text: "fortement comprimé", cle: true }, { text: " : la pression élevée rend le butane liquide." }],
        [{ text: "b) Il redevient " }, { text: "gaz", cle: true }, { text: ", car la " }, { text: "pression diminue", cle: true }, { text: " brusquement à la sortie." }],
        [{ text: "c) Parce que la pression y est élevée : " }, { text: "l'eau bout au-dessus de 100 °C", cle: true }, { text: ", donc les aliments cuisent plus vite." }],
        [{ text: "d) " }, { text: "Le gaz des bouteilles de cuisine", cle: true }, { text: " (butane), liquide dans la bouteille." }],
      ],
    },
    {
      consigne: "Choisis la bonne réponse :",
      items: [
        "a) Pour rendre un gaz liquide, il faut :  1) le chauffer   2) le comprimer fortement   3) le verser dans un grand récipient",
        "b) Le butane sort du briquet à l'état :  1) solide   2) liquide   3) gazeux",
        "c) La température d'ébullition de l'eau augmente quand la pression :  1) augmente   2) diminue   3) ne change pas",
        "d) À Antananarivo (1 300 m d'altitude), l'eau bout :  1) à exactement 100 °C   2) un peu au-dessous de 100 °C   3) bien au-dessus de 100 °C",
      ],
      corrige: [
        [{ text: "a) Réponse 2) : " }, { text: "le comprimer fortement", cle: true }, { text: "." }],
        [{ text: "b) Réponse 3) : " }, { text: "à l'état gazeux", cle: true }, { text: "." }],
        [{ text: "c) Réponse 1) : " }, { text: "quand la pression augmente", cle: true }, { text: "." }],
        [{ text: "d) Réponse 2) : " }, { text: "un peu au-dessous de 100 °C", cle: true }, { text: ", car la pression diminue avec l'altitude." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["comprimé", "liquéfaction", "pression", "température d'ébullition", "butane"],
    sections: [
      {
        titre: "1. Un gaz comprimé peut devenir liquide",
        paras: [
          "Quand on comprime fortement un gaz, son volume diminue de plus en plus, et le gaz peut devenir liquide : c'est la liquéfaction par compression.",
          "Exemples :",
        ],
        puces: [
          "le butane est liquide dans le briquet et dans la bouteille de gaz de cuisine, car il y est sous forte pression ;",
          "quand le gaz sort, la pression diminue brusquement : le liquide redevient gaz et peut brûler.",
        ],
      },
      {
        titre: "2. La pression change la température d'ébullition",
        paras: [
          "À la pression normale, au bord de la mer, l'eau bout à 100 °C. Mais cette température d'ébullition change avec la pression :",
        ],
        puces: [
          "si la pression augmente, l'eau bout au-dessus de 100 °C : dans la cocotte-minute, la vapeur enfermée augmente la pression, l'eau atteint environ 120 °C et les aliments cuisent beaucoup plus vite ;",
          "si la pression diminue, l'eau bout au-dessous de 100 °C : en haute montagne, l'air est moins comprimé, et l'eau bout par exemple vers 96 °C à Antananarivo.",
        ],
      },
      {
        titre: "3. Retenir le lien entre pression et état",
        paras: [
          "La pression peut donc provoquer un changement d'état : une forte compression peut rendre un gaz liquide, et une baisse de pression peut faire bouillir un liquide plus tôt. La pression et la température agissent ensemble sur l'état des corps.",
        ],
      },
    ],
    saisTu: [
      "Antananarivo se trouve à environ 1 300 mètres d'altitude : la pression de l'air y est plus faible qu'au bord de la mer, et l'eau y bout vers 96 °C au lieu de 100 °C. C'est pourquoi le riz met un peu plus de temps à cuire sur les Hautes Terres qu'à Toamasina, au bord de la mer !",
    ],
    experience: [
      "Attention : ne fais jamais d'expérience avec le feu ou un briquet sans un adulte.",
      "Observe simplement, avec un adulte, un briquet transparent :",
      "1. Regarde le liquide qui bouge à l'intérieur quand on secoue doucement le briquet.",
      "2. Demande à l'adulte d'appuyer très brièvement sur le bouton, sans allumer : on entend le gaz s'échapper.",
      "Conclusion : le butane est liquide sous pression dans le réservoir et redevient gaz à l'air libre.",
    ],
  },
  substitutions: [
    { officiel: "Matériel de démonstration de liquéfaction", local: "Briquet à gaz transparent (manipulé par l'adulte uniquement)" },
    { officiel: "Autocuiseur de démonstration", local: "Image ou photo d'une cocotte-minute" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. La liquéfaction par compression transforme :  a) un liquide en gaz   b) un gaz en liquide   c) un solide en liquide",
        "2. Dans la bouteille de gaz de cuisine, le butane est :  a) solide   b) liquide   c) gazeux",
        "3. Dans une cocotte-minute, l'eau bout :  a) à 100 °C exactement   b) au-dessous de 100 °C   c) au-dessus de 100 °C",
        "4. Quand le butane sort du briquet, il devient gaz car :  a) la pression augmente   b) la pression diminue   c) la masse change",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "un gaz en liquide", cle: true }, { text: "." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "liquide", cle: true }, { text: ", car il est sous forte pression." }],
        [{ text: "3. Réponse c) : ", bold: true }, { text: "au-dessus de 100 °C", cle: true }, { text: " (environ 120 °C)." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "la pression diminue", cle: true }, { text: " brusquement à la sortie." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. En montagne, l'eau bout au-dessus de 100 °C.",
        "2. Une forte compression peut rendre un gaz liquide.",
        "3. Les aliments cuisent plus vite dans une cocotte-minute que dans une marmite ordinaire.",
        "4. La pression n'a aucun effet sur l'état des corps.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : elle bout au-dessous de 100 °C, car la pression y est plus faible." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: " : l'eau y bout à plus de 100 °C." }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : la pression peut provoquer des changements d'état." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : gaz – liquide – pression – comprimé – ébullition – diminue.",
      items: [
        "Le butane fortement ……… devient ……… dans le briquet. À la sortie, la pression ……… et le butane redevient ……… . La ……… change aussi la température d'……… de l'eau.",
      ],
      corrige: [
        [{ text: "Le butane fortement " }, { text: "comprimé", cle: true }, { text: " devient " }, { text: "liquide", cle: true }, { text: " dans le briquet. À la sortie, la pression " }, { text: "diminue", cle: true }, { text: " et le butane redevient " }, { text: "gaz", cle: true }, { text: ". La " }, { text: "pression", cle: true }, { text: " change aussi la température d'" }, { text: "ébullition", cle: true }, { text: " de l'eau." }],
      ],
    },
    {
      points: 6,
      consigne: "Réponds aux questions :",
      items: [
        "1. La grand-mère de Fara, qui habite Toamasina au bord de la mer, trouve que son riz cuit plus vite que chez Fara à Antananarivo. Explique pourquoi.",
        "2. Pourquoi ne faut-il jamais jeter un briquet ou une bombe aérosol au feu ?",
        "3. Donne deux exemples d'objets de la vie courante contenant un gaz liquéfié sous pression.",
      ],
      corrige: [
        [{ text: "1. À Toamasina, au niveau de la mer, la pression est plus élevée : " }, { text: "l'eau bout à 100 °C", cle: true }, { text: " ; à Antananarivo, en altitude, la pression est plus faible et " }, { text: "l'eau bout vers 96 °C", cle: true }, { text: " : le riz cuit donc un peu moins vite." }],
        [{ text: "2. La chaleur fait " }, { text: "augmenter fortement la pression du gaz", cle: true }, { text: " enfermé : le récipient peut " }, { text: "exploser", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Le briquet et la bouteille de gaz de cuisine", cle: true }, { text: " (ou la bombe aérosol)." }],
      ],
    },
  ],
};

module.exports = { seances: [S1, S2, S3, S4, S5, S6, S7, S8] };
