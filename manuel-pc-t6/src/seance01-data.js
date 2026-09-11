// Données de la Séance 1 — Les propriétés spécifiques des solides (échantillon témoin)
module.exports = {
  numero: 1,
  total: 34,
  unite: "I",
  theme: "Matière",
  titre: "Les propriétés spécifiques des solides",
  objectif: "identifier les propriétés spécifiques d'un corps solide (forme propre) et distinguer un solide compact d'un solide pulvérisé",
  documentation: "Programme d'études T6 — Sciences Physiques (MEN Madagascar) ; manuel J-Learn",
  support: "Caillou, morceau de craie, sable, sel fin, cuillère, deux récipients transparents",
  image: "images/img_seance01.png",
  imageLegende: "Figure 1 — Des solides compacts (caillou, craie) et des solides pulvérisés (sable, sel fin)",

  // I. Révision (séance précédente = première séance : rappel des acquis du primaire sur les états de la matière)
  revision: {
    qa: [
      { q: "Cite les trois états de la matière que tu connais.", ra: "L'état solide, l'état liquide et l'état gazeux." },
      { q: "Donne un exemple de corps solide, un exemple de corps liquide et un exemple de gaz.", ra: "Solide : une pierre ; liquide : l'eau ; gaz : l'air." },
      { q: "L'eau de la marmite qui bout se transforme en quoi ?", ra: "Elle se transforme en vapeur d'eau, c'est-à-dire en gaz." },
    ],
    technique: "Questions-réponses orales",
    support: "—",
  },

  miseEnSituation: {
    enseignant: [
      "Rova aide sa mère au marché d'Analakely. Elle porte un panier contenant un gros manioc, un sachet de riz et un paquet de sel. En marchant, le sachet de riz se déchire : les grains se répandent par terre et prennent la forme du trou où ils tombent, mais le manioc, lui, garde toujours sa forme.",
      "Pourquoi les grains de riz s'étalent-ils par terre alors que le manioc garde sa forme ?",
      "R.A. : Parce que le riz est en petits grains et le manioc est un morceau entier et dur.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée, brainstorming",
    support: "Tableau noir",
  },

  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Les propriétés spécifiques des solides ». Après cette séance, vous serez capables d'identifier la forme propre d'un solide et de distinguer un solide compact d'un solide pulvérisé.",
    apprenants: "Écoutent.",
    technique: "Présentation orale",
    support: "Tableau noir, cahier",
  },

  observation: {
    enseignant: "Regardez et observez bien ces objets posés sur la table : un caillou, un morceau de craie, du sable dans un récipient et du sel fin dans un autre récipient. Je déplace maintenant le caillou dans un bol, puis je verse le sable dans un autre récipient.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation",
    support: "Caillou, craie, sable, sel fin, récipients transparents",
    noteObservation: "",
  },

  analyse: {
    qa: [
      { q: "Quand je déplace le caillou du bureau vers le bol, sa forme change-t-elle ?", ra: "Non, le caillou garde toujours la même forme." },
      { q: "Quand je verse le sable dans un autre récipient, que fait-il ?", ra: "Le sable coule et prend la forme du récipient qui le contient." },
      { q: "Peut-on saisir le caillou entre deux doigts ? Et un seul grain de sable ?", ra: "On peut saisir le caillou facilement ; un grain de sable est très petit mais on peut aussi le saisir : chaque grain garde sa forme." },
      { q: "Quelle est la différence entre le caillou et le sable ?", ra: "Le caillou est en un seul morceau : c'est un solide compact. Le sable est formé de petits grains : c'est un solide pulvérisé." },
      { q: "Le sable prend la forme du récipient. Est-ce que chaque grain change de forme ?", ra: "Non, chaque grain garde sa propre forme : c'est le tas de grains qui épouse la forme du récipient." },
    ],
    technique: "Questions-réponses, démarche d'investigation",
    support: "Caillou, craie, sable, sel fin, récipients transparents",
  },

  synthese: {
    enseignant: "Donc, un solide a une forme propre : il garde sa forme quel que soit le récipient qui le contient. Un solide en un seul morceau que l'on peut saisir est un solide compact. Un solide formé de petits grains est un solide pulvérisé : le tas de grains prend la forme du récipient, mais chaque grain garde sa forme propre.",
    apprenants: "Écoutent.",
    technique: "Exposé",
    support: "Tableau noir",
  },

  // 6. Application — 2 exercices (types internes : Vrai/Faux, classement/appariement)
  application: [
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Un solide garde sa forme quel que soit le récipient qui le contient.",
        "b) Le sable est un solide compact.",
        "c) Un grain de sel garde sa forme propre.",
        "d) La craie est un solide pulvérisé.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: " : la forme propre est la propriété spécifique des solides." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : le sable est un solide pulvérisé, formé de petits grains." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: " : chaque grain garde sa forme propre même dans le tas." }],
        [{ text: "d) " }, { text: "Faux", cle: true }, { text: " : la craie est un solide compact, elle est en un seul morceau." }],
      ],
    },
    {
      consigne: "Classe les solides suivants en deux groupes, « solides compacts » et « solides pulvérisés » : farine de manioc, brique, sucre en poudre, cuillère, riz, clou.",
      items: [],
      corrige: [
        [{ text: "Solides compacts : ", bold: true }, { text: "brique, cuillère, clou", cle: true }, { text: " (chacun est en un seul morceau que l'on peut saisir)." }],
        [{ text: "Solides pulvérisés : ", bold: true }, { text: "farine de manioc, sucre en poudre, riz", cle: true }, { text: " (formés de petits grains)." }],
      ],
    },
  ],
  applicationTechnique: "Travail individuel sur ardoise",
  applicationSupport: "Ardoise, cahier",

  // III. Évaluation — 2 exercices (texte à trous, question/réponse)
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : forme propre – pulvérisé – compact – récipient.",
      items: [
        "a) Un solide garde sa ………, quel que soit le ……… qui le contient.",
        "b) Une pierre est un solide ……… .",
        "c) Le sel fin est un solide ……… .",
        "d) Le tas de sable prend la forme du ……… mais chaque grain garde sa ……… .",
      ],
      corrige: [
        [{ text: "a) Un solide garde sa " }, { text: "forme propre", cle: true }, { text: ", quel que soit le " }, { text: "récipient", cle: true }, { text: " qui le contient." }],
        [{ text: "b) Une pierre est un solide " }, { text: "compact", cle: true }, { text: "." }],
        [{ text: "c) Le sel fin est un solide " }, { text: "pulvérisé", cle: true }, { text: "." }],
        [{ text: "d) Le tas de sable prend la forme du " }, { text: "récipient", cle: true }, { text: " mais chaque grain garde sa " }, { text: "forme propre", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds aux questions suivantes par une phrase complète :",
      items: [
        "a) Quelle est la propriété spécifique d'un corps solide ?",
        "b) Qu'est-ce qu'un solide compact ? Donne un exemple.",
        "c) Qu'est-ce qu'un solide pulvérisé ? Donne un exemple.",
        "d) Pourquoi dit-on que le riz versé dans une assiette reste un solide, alors qu'il prend la forme de l'assiette ?",
      ],
      corrige: [
        [{ text: "a) La propriété spécifique d'un solide est d'avoir une " }, { text: "forme propre", cle: true }, { text: " : il garde sa forme quel que soit le récipient." }],
        [{ text: "b) Un solide compact est un solide en " }, { text: "un seul morceau", cle: true }, { text: " que l'on peut saisir, par exemple une pierre ou une cuillère." }],
        [{ text: "c) Un solide pulvérisé est un solide formé de " }, { text: "petits grains", cle: true }, { text: ", par exemple le sable ou le sucre en poudre." }],
        [{ text: "d) Parce que " }, { text: "chaque grain de riz garde sa forme propre", cle: true }, { text: " : c'est seulement le tas de grains qui épouse la forme de l'assiette." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit",
  evaluationSupport: "Cahier, feuille d'évaluation",

  // ----- LEÇON -----
  lecon: {
    motsCles: ["forme propre", "solide compact", "solide pulvérisé", "solides compacts", "solides pulvérisés"],
    sections: [
      {
        titre: "1. Qu'est-ce qu'un corps solide ?",
        paras: [
          "Autour de nous, la matière existe sous trois états : l'état solide, l'état liquide et l'état gazeux. Une pierre, une cuillère, un morceau de bois, un caillou sont des corps solides.",
          "Un corps solide peut être saisi entre les doigts et transporté sans récipient : on peut prendre un caillou dans la main et le poser ailleurs, il ne coule pas et ne s'échappe pas.",
        ],
      },
      {
        titre: "2. La forme propre des solides",
        paras: [
          "Un corps solide possède une forme propre : il garde la même forme, quel que soit l'endroit où on le pose et quel que soit le récipient qui le contient.",
          "Exemples :",
        ],
        puces: [
          "Un caillou posé sur la table, dans un bol ou dans un panier garde toujours la même forme.",
          "Une cuillère reste une cuillère, qu'elle soit dans le tiroir ou dans la marmite.",
          "Un morceau de craie garde sa forme dans la boîte comme dans la main.",
        ],
      },
      {
        titre: "3. Solides compacts et solides pulvérisés",
        sousSections: [
          {
            titre: "a. Les solides compacts",
            paras: [
              "Un solide compact est un solide en un seul morceau, que l'on peut saisir facilement entre les doigts.",
              "Exemples : une pierre, une brique, un clou, un morceau de manioc, une cuillère.",
            ],
          },
          {
            titre: "b. Les solides pulvérisés",
            paras: [
              "Un solide pulvérisé est un solide formé d'un très grand nombre de petits grains.",
              "Exemples : le sable, le sel fin, le sucre en poudre, la farine de manioc, le riz.",
              "Attention : un tas de solide pulvérisé prend la forme du récipient qui le contient, mais chaque grain, pris séparément, garde sa forme propre. C'est pourquoi le sable et le riz sont bien des solides, et non des liquides.",
            ],
          },
        ],
      },
    ],
    saisTu: [
      "À Madagascar, le riz est un solide pulvérisé que l'on mesure souvent avec un « kapoaka », une boîte de lait concentré vide : le riz prend exactement la forme du kapoaka, mais chaque grain reste entier ! Un kapoaka rempli à ras bord contient environ 285 g de riz blanc.",
    ],
    experience: [
      "Prends un verre, un caillou et une poignée de riz.",
      "1. Pose le caillou dans le verre, puis sors-le : sa forme n'a pas changé.",
      "2. Verse le riz dans le verre : le tas de riz prend la forme du verre.",
      "3. Retire un grain de riz et observe-le : il a gardé sa forme propre.",
      "Conclusion : le caillou est un solide compact ; le riz est un solide pulvérisé, mais chaque grain garde sa forme.",
    ],
  },

  // Matériel de substitution
  substitutions: [
    { officiel: "Récipients transparents de laboratoire (béchers)", local: "Verres, bouteilles en plastique coupées, bocaux" },
    { officiel: "Échantillons de solides variés", local: "Caillou, craie, riz, sel, sable de la cour, farine de manioc" },
    { officiel: "Spatule de laboratoire", local: "Cuillère à soupe" },
  ],

  // ----- EXERCICES notés (section après la leçon) -----
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. La propriété spécifique d'un corps solide est :  a) de couler   b) d'avoir une forme propre   c) de prendre la forme du récipient",
        "2. Le sucre en poudre est :  a) un solide compact   b) un liquide   c) un solide pulvérisé",
        "3. Un solide que l'on peut saisir en un seul morceau est dit :  a) pulvérisé   b) compact   c) liquide",
        "4. Quand on verse du sable dans un bol :  a) chaque grain change de forme   b) le tas prend la forme du bol mais chaque grain garde sa forme   c) le sable devient liquide",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "un solide a une forme propre", cle: true }, { text: " ; couler ou prendre la forme du récipient sont des propriétés des liquides." }],
        [{ text: "2. Réponse c) : ", bold: true }, { text: "le sucre en poudre est un solide pulvérisé", cle: true }, { text: ", formé de petits grains." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "c'est un solide compact", cle: true }, { text: "." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "le tas prend la forme du bol mais chaque grain garde sa forme propre", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Une brique est un solide pulvérisé.",
        "2. Chaque grain de sel garde sa forme propre.",
        "3. Le riz versé dans une assiette devient un liquide car il prend la forme de l'assiette.",
        "4. On peut saisir un solide compact entre les doigts.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : une brique est un solide compact, elle est en un seul morceau." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : le riz reste un solide pulvérisé, car chaque grain garde sa forme propre." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : compact – forme propre – grains – pulvérisé – récipient – solide.",
      items: [
        "Un corps ……… possède une ……… . Une pierre, en un seul morceau, est un solide ……… . Le sable, formé de petits ………, est un solide ……… . Le tas de sable prend la forme du ……… qui le contient.",
      ],
      corrige: [
        [{ text: "Un corps " }, { text: "solide", cle: true }, { text: " possède une " }, { text: "forme propre", cle: true }, { text: ". Une pierre, en un seul morceau, est un solide " }, { text: "compact", cle: true }, { text: ". Le sable, formé de petits " }, { text: "grains", cle: true }, { text: ", est un solide " }, { text: "pulvérisé", cle: true }, { text: ". Le tas de sable prend la forme du " }, { text: "récipient", cle: true }, { text: " qui le contient." }],
      ],
    },
    {
      points: 6,
      consigne: "Observe la figure 1 en tête de la leçon, puis réponds :",
      items: [
        "1. Nomme deux solides compacts visibles sur la figure.",
        "2. Nomme deux solides pulvérisés visibles sur la figure.",
        "3. Le sable de la figure est dans un bol. Explique pourquoi il reste un solide.",
      ],
      corrige: [
        [{ text: "1. Les deux solides compacts sont " }, { text: "le caillou et le morceau de craie", cle: true }, { text: "." }],
        [{ text: "2. Les deux solides pulvérisés sont " }, { text: "le sable et le sel fin", cle: true }, { text: "." }],
        [{ text: "3. Le sable reste un solide car " }, { text: "chaque grain garde sa forme propre", cle: true }, { text: " ; seul le tas de grains épouse la forme du bol." }],
      ],
    },
  ],
};
