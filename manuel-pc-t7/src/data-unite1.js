// data-unite1.js — T7 Unité I : MATIÈRE (séances 1 à 10)
const DOC = "Programme d'études T7 — Sciences Physiques (MEN Madagascar) ; manuel J-Learn";

const S1 = {
  numero: 1, total: 34, unite: "I", theme: "Matière",
  titre: "La masse volumique d'un corps",
  objectif: "établir la relation entre la masse et le volume d'un corps et de calculer sa masse volumique",
  documentation: DOC,
  support: "Balance, éprouvette graduée ou récipient gradué, eau, huile, cailloux, morceaux de bois et de fer",
  image: "images/img_seance01.png",
  imageLegende: "Figure 1 — Un litre de bois, un litre d'eau et un litre de fer n'ont pas la même masse",
  revision: {
    qa: [
      { q: "En quelle unité mesure-t-on la masse, et avec quel instrument ?", ra: "En kilogrammes (kg), avec une balance." },
      { q: "En quelle unité mesure-t-on le volume ?", ra: "En mètres cubes (m³) ; on utilise aussi le litre : 1 L = 1 dm³." },
      { q: "Convertis : 1 L = …… mL ; 1 mL = …… cm³.", ra: "1 L = 1 000 mL ; 1 mL = 1 cm³." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Au marché d'Analakely, Noro soulève un petit sac : il est très lourd, il contient des clous. Son frère soulève un sac trois fois plus gros : il est tout léger, il contient du riz soufflé !",
      "Pourquoi le petit sac est-il plus lourd que le grand ?",
      "R.A. : Parce que la matière qu'il contient est plus « serrée », plus lourde pour le même volume.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La masse volumique d'un corps ». Après cette séance, vous serez capables de mesurer la masse et le volume d'un corps, puis de calculer sa masse volumique.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : je mesure avec la balance la masse d'un litre d'eau, puis la masse d'un litre d'huile, puis celle d'un caillou dont je mesure aussi le volume par déplacement d'eau dans l'éprouvette. Je note tous les résultats au tableau.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Balance, éprouvette, eau, huile, caillou",
  },
  analyse: {
    qa: [
      { q: "Quelle est la masse d'un litre d'eau ?", ra: "1 kg, soit 1 000 g." },
      { q: "Un litre d'huile a-t-il la même masse qu'un litre d'eau ?", ra: "Non : environ 900 g seulement. À volume égal, les matières ont des masses différentes." },
      { q: "Comment calculer la masse d'un litre de la matière du caillou ?", ra: "En divisant sa masse par son volume : masse ÷ volume." },
      { q: "Comment s'appelle ce rapport masse ÷ volume ?", ra: "La masse volumique de la matière." },
      { q: "En quelle unité s'exprime-t-elle ?", ra: "En grammes par centimètre cube (g/cm³) ou en kilogrammes par litre (kg/L)." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Résultats de mesures au tableau",
  },
  synthese: {
    enseignant: "Donc, la masse volumique d'une matière est la masse d'une unité de volume de cette matière. On la calcule en divisant la masse du corps par son volume : masse volumique = masse ÷ volume. Elle s'exprime en g/cm³ ou en kg/L. Chaque matière a sa masse volumique propre : 1 g/cm³ pour l'eau, environ 0,9 g/cm³ pour l'huile, 7,8 g/cm³ pour le fer, 2,7 g/cm³ pour l'aluminium.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Calcule la masse volumique de chaque corps :",
      items: [
        "a) Un caillou de masse 150 g et de volume 60 cm³.",
        "b) Un morceau de fer de masse 390 g et de volume 50 cm³.",
        "c) 2 L d'huile de masse 1,8 kg.",
      ],
      corrige: [
        [{ text: "a) 150 ÷ 60 = " }, { text: "2,5 g/cm³", cle: true }, { text: "." }],
        [{ text: "b) 390 ÷ 50 = " }, { text: "7,8 g/cm³", cle: true }, { text: " : c'est bien du fer." }],
        [{ text: "c) 1,8 ÷ 2 = " }, { text: "0,9 kg/L", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Un litre d'eau a une masse de 1 kg.",
        "b) Toutes les matières ont la même masse volumique.",
        "c) La masse volumique se calcule par masse ÷ volume.",
        "d) 1 g/cm³ = 1 kg/L.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : chaque matière a sa masse volumique propre." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: " : les deux unités sont équivalentes." }],
      ],
    },
  ],
  applicationTechnique: "Travail individuel sur ardoise", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : volume – matière – masse volumique – g/cm³ – divise.",
      items: [
        "a) La ……… d'un corps est la masse d'une unité de volume de sa ……… .",
        "b) Pour la calculer, on ……… la masse par le ……… .",
        "c) Elle s'exprime en ……… ou en kg/L.",
      ],
      corrige: [
        [{ text: "a) La " }, { text: "masse volumique", cle: true }, { text: " d'un corps est la masse d'une unité de volume de sa " }, { text: "matière", cle: true }, { text: "." }],
        [{ text: "b) Pour la calculer, on " }, { text: "divise", cle: true }, { text: " la masse par le " }, { text: "volume", cle: true }, { text: "." }],
        [{ text: "c) Elle s'exprime en " }, { text: "g/cm³", cle: true }, { text: " ou en kg/L." }],
      ],
    },
    {
      consigne: "Petit problème : Fetra plonge un objet métallique dans une éprouvette contenant 40 mL d'eau ; le niveau monte à 65 mL. La balance indique 67,5 g.",
      items: [
        "a) Quel est le volume de l'objet ?",
        "b) Calcule sa masse volumique.",
        "c) Sachant que l'aluminium a une masse volumique de 2,7 g/cm³, de quel métal s'agit-il ?",
      ],
      corrige: [
        [{ text: "a) 65 − 40 = " }, { text: "25 cm³", cle: true }, { text: "." }],
        [{ text: "b) 67,5 ÷ 25 = " }, { text: "2,7 g/cm³", cle: true }, { text: "." }],
        [{ text: "c) C'est de " }, { text: "l'aluminium", cle: true }, { text: " : sa masse volumique correspond." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["masse volumique", "masse", "volume", "g/cm³"],
    sections: [
      {
        titre: "1. Le même volume, des masses différentes",
        paras: [
          "Un litre d'eau pèse 1 kg ; un litre d'huile pèse environ 0,9 kg ; un litre de fer pèserait 7,8 kg ! À volume égal, chaque matière a sa propre masse.",
        ],
      },
      {
        titre: "2. La masse volumique",
        paras: [
          "La masse volumique d'une matière est la masse d'une unité de volume de cette matière.",
          "Formule : masse volumique = masse ÷ volume",
          "Unités : le gramme par centimètre cube (g/cm³) ou le kilogramme par litre (kg/L). Les deux sont équivalentes : 1 g/cm³ = 1 kg/L.",
        ],
      },
      {
        titre: "3. Quelques masses volumiques à connaître",
        puces: [
          "Eau : 1 g/cm³ (exactement 1 kg par litre) ;",
          "Huile : environ 0,9 g/cm³ ;",
          "Bois sec : 0,4 à 0,8 g/cm³ selon l'essence ;",
          "Aluminium : 2,7 g/cm³ ;",
          "Fer : 7,8 g/cm³ ;",
          "Or : 19,3 g/cm³ — le plus dense des métaux usuels !",
        ],
        paras: [],
      },
      {
        titre: "4. Mesurer pour identifier une matière",
        paras: [
          "La masse volumique est une carte d'identité de la matière : en mesurant la masse (balance) et le volume (éprouvette, déplacement d'eau), puis en calculant le rapport, on peut reconnaître de quel matériau un objet est fait.",
        ],
      },
    ],
    saisTu: [
      "Les orpailleurs malgaches, sur les rivières de la région de Maevatanana, utilisent la masse volumique sans le savoir : en lavant le sable dans leur batée, l'or (19,3 g/cm³), beaucoup plus dense que le sable (2,6 g/cm³), reste au fond pendant que le sable part avec l'eau !",
    ],
    experience: [
      "Mesure la masse volumique d'un caillou :",
      "1. Pèse un caillou avec une balance de cuisine (note sa masse en g).",
      "2. Remplis un verre doseur d'eau jusqu'à une graduation précise, note le niveau.",
      "3. Plonge le caillou : la montée du niveau donne son volume en mL (= cm³).",
      "4. Divise la masse par le volume : tu obtiens la masse volumique en g/cm³ !",
    ],
  },
  substitutions: [
    { officiel: "Éprouvette graduée", local: "Verre doseur de cuisine ou bouteille graduée à la main" },
    { officiel: "Balance de précision", local: "Balance de cuisine ou balance du marché" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. La masse volumique se calcule par :  a) masse × volume   b) masse ÷ volume   c) volume ÷ masse",
        "2. La masse volumique de l'eau est :  a) 1 g/cm³   b) 7,8 g/cm³   c) 0,9 g/cm³",
        "3. 1 g/cm³ est équivalent à :  a) 1 kg/m³   b) 1 kg/L   c) 1 g/L",
        "4. Le métal le plus dense parmi ces trois est :  a) l'aluminium   b) le fer   c) l'or",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "masse ÷ volume", cle: true }, { text: "." }],
        [{ text: "2. Réponse a) : ", bold: true }, { text: "1 g/cm³", cle: true }, { text: "." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "1 kg/L", cle: true }, { text: "." }],
        [{ text: "4. Réponse c) : ", bold: true }, { text: "l'or (19,3 g/cm³)", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. À volume égal, toutes les matières ont la même masse.",
        "2. La masse volumique permet d'identifier une matière.",
        "3. Un litre d'huile est plus lourd qu'un litre d'eau.",
        "4. Le volume d'un caillou peut se mesurer par déplacement d'eau.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : chaque matière a sa masse volumique propre." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: " : c'est sa carte d'identité." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : l'huile (0,9 kg) est plus légère que l'eau (1 kg)." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Calculs. Donne chaque masse volumique :",
      items: [
        "1. Un morceau de bois : masse 120 g, volume 200 cm³.",
        "2. Une brique : masse 1,8 kg, volume 1 L.",
        "3. Une pièce métallique : masse 39 g, volume 5 cm³. Quel est ce métal ?",
      ],
      corrige: [
        [{ text: "1. 120 ÷ 200 = " }, { text: "0,6 g/cm³", cle: true }, { text: "." }],
        [{ text: "2. 1,8 ÷ 1 = " }, { text: "1,8 kg/L", cle: true }, { text: "." }],
        [{ text: "3. 39 ÷ 5 = " }, { text: "7,8 g/cm³ : c'est du fer", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Problème. Vola veut vérifier qu'un bijou « en or » n'est pas une imitation. Le bijou pèse 57,9 g. Plongé dans une éprouvette contenant 20 mL d'eau, il fait monter le niveau à 23 mL.",
      items: [
        "1. Quel est le volume du bijou ?",
        "2. Calcule sa masse volumique.",
        "3. L'or a une masse volumique de 19,3 g/cm³. Le bijou est-il en or pur ? Justifie.",
      ],
      corrige: [
        [{ text: "1. 23 − 20 = " }, { text: "3 cm³", cle: true }, { text: "." }],
        [{ text: "2. 57,9 ÷ 3 = " }, { text: "19,3 g/cm³", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Oui : sa masse volumique est exactement celle de l'or", cle: true }, { text: " (19,3 g/cm³)." }],
      ],
    },
  ],
};

const S2 = {
  numero: 2, total: 34, unite: "I", theme: "Matière",
  titre: "La densité par rapport à l'eau",
  objectif: "déterminer la densité d'une substance par rapport à l'eau et de classer des liquides selon leur densité",
  documentation: DOC,
  support: "Verre haut et transparent, eau, huile, sirop ou miel, cuillère, tableau des masses volumiques",
  image: "images/img_seance02.png",
  imageLegende: "Figure 2 — Le cocktail à étages : chaque liquide se place selon sa densité",
  revision: {
    qa: [
      { q: "Rappelle la formule de la masse volumique.", ra: "Masse volumique = masse ÷ volume." },
      { q: "Quelle est la masse volumique de l'eau ?", ra: "1 g/cm³, soit 1 kg/L." },
      { q: "Comment mesure-t-on le volume d'un objet irrégulier ?", ra: "Par déplacement d'eau dans un récipient gradué." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Dans la sauce de sa grand-mère, Lova remarque que l'huile forme toujours de petites gouttes dorées qui restent à la surface du bouillon, jamais au fond.",
      "Pourquoi l'huile reste-t-elle toujours au-dessus de l'eau ?",
      "R.A. : Parce qu'elle est plus légère que l'eau, à volume égal.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La densité par rapport à l'eau ». Après cette séance, vous serez capables de calculer la densité d'une substance, d'expliquer pourquoi elle n'a pas d'unité, et de classer des liquides selon leur densité.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : je verse doucement dans ce grand verre du sirop, puis de l'eau, puis de l'huile. Observez comment les trois liquides se rangent : forment-ils un mélange ou des étages ?",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Verre, sirop, eau, huile",
  },
  analyse: {
    qa: [
      { q: "Comment les trois liquides se sont-ils placés ?", ra: "En étages : le sirop au fond, l'eau au milieu, l'huile au-dessus." },
      { q: "Quel liquide est le plus dense ? Le moins dense ?", ra: "Le sirop est le plus dense ; l'huile est la moins dense." },
      { q: "Comment compare-t-on une matière à l'eau ?", ra: "En divisant sa masse volumique par celle de l'eau : c'est la densité." },
      { q: "Quelle est la densité de l'huile (masse volumique 0,9 g/cm³) ?", ra: "0,9 ÷ 1 = 0,9." },
      { q: "Pourquoi la densité n'a-t-elle pas d'unité ?", ra: "Parce que c'est un rapport entre deux masses volumiques : les unités se simplifient." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Cocktail à étages",
  },
  synthese: {
    enseignant: "Donc, la densité d'une substance est le rapport entre sa masse volumique et celle de l'eau : densité = masse volumique de la substance ÷ masse volumique de l'eau. C'est un nombre sans unité. La densité de l'eau vaut 1. Une substance de densité inférieure à 1 est moins dense que l'eau ; une substance de densité supérieure à 1 est plus dense. Dans un mélange de liquides non miscibles, le plus dense se place en bas et le moins dense en haut : c'est le cocktail à étages.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Calcule la densité de chaque substance (masse volumique de l'eau : 1 g/cm³) :",
      items: [
        "a) Huile : 0,9 g/cm³.",
        "b) Fer : 7,8 g/cm³.",
        "c) Bois : 0,6 g/cm³.",
        "d) Sirop : 1,3 g/cm³.",
      ],
      corrige: [
        [{ text: "a) d = " }, { text: "0,9", cle: true }, { text: " (sans unité)." }],
        [{ text: "b) d = " }, { text: "7,8", cle: true }, { text: "." }],
        [{ text: "c) d = " }, { text: "0,6", cle: true }, { text: "." }],
        [{ text: "d) d = " }, { text: "1,3", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "On verse dans un verre trois liquides non miscibles : liquide A (d = 1,4), liquide B (d = 0,8), liquide C (d = 1). Dans quel ordre se placent-ils, de bas en haut ?",
      items: [],
      corrige: [
        [{ text: "De bas en haut : " }, { text: "A (1,4), puis C (1), puis B (0,8)", cle: true }, { text: " : le plus dense au fond, le moins dense en surface." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : unité – eau – rapport – dense – densité – 1.",
      items: [
        "a) La ……… est le ……… entre la masse volumique d'une substance et celle de l'……… .",
        "b) Elle n'a pas d'……… ; la densité de l'eau vaut ……… .",
        "c) Un liquide de densité 1,3 est plus ……… que l'eau : il se place en dessous.",
      ],
      corrige: [
        [{ text: "a) La " }, { text: "densité", cle: true }, { text: " est le " }, { text: "rapport", cle: true }, { text: " entre la masse volumique d'une substance et celle de l'" }, { text: "eau", cle: true }, { text: "." }],
        [{ text: "b) Elle n'a pas d'" }, { text: "unité", cle: true }, { text: " ; la densité de l'eau vaut " }, { text: "1", cle: true }, { text: "." }],
        [{ text: "c) Un liquide de densité 1,3 est plus " }, { text: "dense", cle: true }, { text: " que l'eau." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Pourquoi la densité n'a-t-elle pas d'unité ?",
        "b) Décris la fabrication d'un cocktail à étages avec trois liquides.",
        "c) Où se place le liquide le plus dense ? Le moins dense ?",
        "d) L'alcool a une densité de 0,8. Se place-t-il au-dessus ou en dessous de l'eau ?",
      ],
      corrige: [
        [{ text: "a) Parce que c'est un " }, { text: "rapport de deux masses volumiques", cle: true }, { text: " : les unités se simplifient." }],
        [{ text: "b) On verse d'abord " }, { text: "le plus dense (sirop), puis l'eau, puis le moins dense (huile)", cle: true }, { text: ", doucement le long de la paroi." }],
        [{ text: "c) Le plus dense " }, { text: "au fond", cle: true }, { text: " ; le moins dense " }, { text: "en surface", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Au-dessus", cle: true }, { text: " : sa densité (0,8) est inférieure à celle de l'eau (1)." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["densité", "rapport", "sans unité", "plus dense", "moins dense"],
    sections: [
      {
        titre: "1. Comparer une matière à l'eau",
        paras: [
          "L'eau est la référence : sa masse volumique vaut 1 g/cm³. Pour comparer une matière à l'eau, on calcule sa densité :",
          "densité = masse volumique de la substance ÷ masse volumique de l'eau",
          "La densité est un nombre sans unité, car les deux unités du rapport se simplifient.",
        ],
      },
      {
        titre: "2. Lire une densité",
        puces: [
          "d = 1 : même densité que l'eau.",
          "d < 1 : moins dense que l'eau (huile 0,9 ; alcool 0,8 ; bois 0,6).",
          "d > 1 : plus dense que l'eau (sirop 1,3 ; aluminium 2,7 ; fer 7,8 ; or 19,3).",
        ],
        paras: [],
      },
      {
        titre: "3. Le cocktail à étages",
        paras: [
          "Quand on superpose délicatement des liquides non miscibles, chacun se place selon sa densité : le plus dense au fond, le moins dense en surface.",
          "Exemple avec trois étages : sirop (d ≈ 1,3) en bas, eau (d = 1) au milieu, huile (d ≈ 0,9) en haut.",
        ],
      },
    ],
    saisTu: [
      "Dans le canal du Mozambique, l'eau de mer est plus dense que l'eau douce à cause du sel dissous (d ≈ 1,03). C'est pourquoi il est plus facile de flotter dans la mer que dans un lac ! Dans la mer Morte, au Proche-Orient, l'eau est si salée (d ≈ 1,24) qu'on y flotte sans nager.",
    ],
    experience: [
      "Fabrique ton cocktail à étages :",
      "1. Verse 3 cm de sirop ou de miel au fond d'un grand verre.",
      "2. Verse doucement de l'eau (colorée si possible) en la faisant couler sur une cuillère retournée.",
      "3. Verse enfin l'huile de la même façon.",
      "4. Admire les trois étages : chaque liquide a trouvé sa place selon sa densité !",
    ],
  },
  substitutions: [
    { officiel: "Liquides de laboratoire calibrés", local: "Sirop ou miel, eau, huile de cuisine" },
    { officiel: "Densimètre", local: "Calcul de densité à partir de masse et volume mesurés" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. La densité de l'eau vaut :  a) 0   b) 1   c) 10",
        "2. La densité s'exprime :  a) en g/cm³   b) en kg/L   c) sans unité",
        "3. Un liquide de densité 0,85 :  a) coule sous l'eau   b) flotte sur l'eau   c) se mélange toujours",
        "4. Dans un cocktail à étages, le liquide du fond est :  a) le moins dense   b) le plus dense   c) le plus clair",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "1", cle: true }, { text: "." }],
        [{ text: "2. Réponse c) : ", bold: true }, { text: "sans unité", cle: true }, { text: " : c'est un rapport." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "il flotte sur l'eau", cle: true }, { text: " (d < 1)." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "le plus dense", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. La densité du fer vaut 7,8 g/cm³.",
        "2. L'huile est moins dense que l'eau.",
        "3. Pour calculer une densité, on divise la masse volumique de la substance par celle de l'eau.",
        "4. Un liquide de densité 1,2 se place au-dessus de l'eau.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : la densité vaut 7,8 sans unité ; c'est la masse volumique qui vaut 7,8 g/cm³." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: " (d ≈ 0,9)." }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : plus dense que l'eau, il se place en dessous." }],
      ],
    },
    {
      points: 6,
      consigne: "Calcule la densité de chaque substance et indique si elle flotte ou coule dans l'eau :",
      items: [
        "1. Le liège : masse volumique 0,24 g/cm³.",
        "2. Le granite : masse volumique 2,6 g/cm³.",
        "3. La glace : masse volumique 0,92 g/cm³.",
      ],
      corrige: [
        [{ text: "1. d = " }, { text: "0,24 : il flotte", cle: true }, { text: " (d < 1)." }],
        [{ text: "2. d = " }, { text: "2,6 : il coule", cle: true }, { text: " (d > 1)." }],
        [{ text: "3. d = " }, { text: "0,92 : elle flotte", cle: true }, { text: " — c'est pourquoi les glaçons flottent dans un verre !" }],
      ],
    },
    {
      points: 6,
      consigne: "Observe la figure 2 (le cocktail à étages), puis réponds :",
      items: [
        "1. Nomme les trois liquides du verre, de bas en haut, avec leur densité.",
        "2. Explique pourquoi ils ne se mélangent pas et restent en étages.",
        "3. On ajoute délicatement de l'alcool (d = 0,8). Où va-t-il se placer ?",
      ],
      corrige: [
        [{ text: "1. De bas en haut : " }, { text: "sirop (d ≈ 1,3), eau (d = 1), huile (d ≈ 0,9)", cle: true }, { text: "." }],
        [{ text: "2. Ils sont " }, { text: "non miscibles et de densités différentes", cle: true }, { text: " : chacun se range selon sa densité." }],
        [{ text: "3. " }, { text: "Tout en haut, au-dessus de l'huile", cle: true }, { text: " : c'est le moins dense (0,8 < 0,9)." }],
      ],
    },
  ],
};

const S3 = {
  numero: 3, total: 34, unite: "I", theme: "Matière",
  titre: "La flottabilité d'un corps",
  objectif: "prédire si un corps flotte ou coule en comparant sa masse volumique (ou sa densité) à celle de l'eau",
  documentation: DOC,
  support: "Bassine d'eau, objets divers : bouchon, clou, caillou, morceau de bois, bouteille vide bouchée, orange",
  image: "images/img_seance03.png",
  imageLegende: "Figure 3 — La pirogue et le bouchon flottent ; le caillou et le clou coulent",
  revision: {
    qa: [
      { q: "Qu'est-ce que la densité d'une substance ?", ra: "Le rapport entre sa masse volumique et celle de l'eau ; c'est un nombre sans unité." },
      { q: "Que signifie une densité inférieure à 1 ?", ra: "La substance est moins dense que l'eau." },
      { q: "Dans le cocktail à étages, où va le liquide le plus dense ?", ra: "Au fond du verre." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Sur le canal des Pangalanes, une pirogue en bois chargée de sacs glisse sur l'eau. Tsiry se demande : « Le bois flotte… mais pourquoi ce petit caillou que je jette coule-t-il aussitôt, alors qu'il est bien plus léger que la pirogue ? »",
      "Qu'en pensez-vous : est-ce le poids qui décide si un objet flotte ?",
      "R.A. : Non, la grosse pirogue flotte et le petit caillou coule : ce n'est pas une question de poids total.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La flottabilité d'un corps ». Après cette séance, vous serez capables de prédire si un corps flotte ou coule, en comparant sa masse volumique ou sa densité à celle de l'eau.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : je plonge un à un dans la bassine : le bouchon, le clou, le morceau de bois, le caillou, la bouteille vide bouchée, l'orange. Notez dans un tableau : flotte ou coule.",
    apprenants: "Observent silencieusement et notent.",
    technique: "Démarche d'observation, expérimentation", support: "Bassine, objets divers",
  },
  analyse: {
    qa: [
      { q: "Quels objets flottent ? Lesquels coulent ?", ra: "Flottent : bouchon, bois, bouteille bouchée, orange. Coulent : clou, caillou." },
      { q: "Le clou est petit et léger : pourquoi coule-t-il ?", ra: "Parce que sa matière, le fer, est plus dense que l'eau (d = 7,8)." },
      { q: "Qu'ont en commun les objets qui flottent ?", ra: "Leur masse volumique est inférieure à celle de l'eau : densité < 1." },
      { q: "Quelle est donc la règle de la flottabilité ?", ra: "Un corps flotte si sa masse volumique est inférieure à celle de l'eau ; il coule si elle est supérieure." },
      { q: "Pourquoi un bateau en acier flotte-t-il alors ?", ra: "Parce qu'il est creux : avec l'air qu'il contient, sa masse volumique moyenne devient inférieure à celle de l'eau." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Tableau flotte/coule",
  },
  synthese: {
    enseignant: "Donc, la flottabilité d'un corps ne dépend pas de sa taille ni de son poids total, mais de sa masse volumique comparée à celle de l'eau. Si la masse volumique du corps est inférieure à celle de l'eau (densité < 1), il flotte ; si elle est supérieure (densité > 1), il coule. Un objet creux rempli d'air, comme un bateau ou une bouteille bouchée, a une masse volumique moyenne faible : c'est pourquoi il flotte même si sa coque est en métal.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Prédis si chaque corps flotte ou coule dans l'eau (d eau = 1) :",
      items: [
        "a) Une bille de verre (d = 2,5).",
        "b) Un bouchon de liège (d = 0,24).",
        "c) Un glaçon (d = 0,92).",
        "d) Une pièce en aluminium (d = 2,7).",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Coule", cle: true }, { text: " : d > 1." }],
        [{ text: "b) " }, { text: "Flotte", cle: true }, { text: " : d < 1." }],
        [{ text: "c) " }, { text: "Flotte", cle: true }, { text: " : 0,92 < 1, il dépasse à peine de la surface." }],
        [{ text: "d) " }, { text: "Coule", cle: true }, { text: " : d > 1." }],
      ],
    },
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Un objet lourd coule toujours.",
        "b) La flottabilité dépend de la masse volumique du corps.",
        "c) Un corps de densité 0,7 flotte sur l'eau.",
        "d) Un bateau en acier flotte parce qu'il est creux.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Faux", cle: true }, { text: " : une pirogue lourde flotte, un petit clou coule." }],
        [{ text: "b) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: " : 0,7 < 1." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: " : l'air qu'il contient abaisse sa masse volumique moyenne." }],
      ],
    },
  ],
  applicationTechnique: "Travail de groupe", applicationSupport: "Bassine, objets, ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : coule – flotte – masse volumique – inférieure – supérieure – creux.",
      items: [
        "a) Un corps ……… si sa ……… est ……… à celle de l'eau.",
        "b) Il ……… si elle est ……… à celle de l'eau.",
        "c) Un bateau en métal flotte parce qu'il est ……… et rempli d'air.",
      ],
      corrige: [
        [{ text: "a) Un corps " }, { text: "flotte", cle: true }, { text: " si sa " }, { text: "masse volumique", cle: true }, { text: " est " }, { text: "inférieure", cle: true }, { text: " à celle de l'eau." }],
        [{ text: "b) Il " }, { text: "coule", cle: true }, { text: " si elle est " }, { text: "supérieure", cle: true }, { text: " à celle de l'eau." }],
        [{ text: "c) Un bateau en métal flotte parce qu'il est " }, { text: "creux", cle: true }, { text: " et rempli d'air." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Énonce la règle de la flottabilité.",
        "b) Pourquoi un petit clou coule-t-il alors qu'une grosse pirogue flotte ?",
        "c) Pourquoi une bouteille vide et bouchée flotte-t-elle, alors que remplie d'eau elle coule ?",
        "d) L'œuf frais coule dans l'eau douce mais flotte dans l'eau très salée. Explique.",
      ],
      corrige: [
        [{ text: "a) Un corps flotte si " }, { text: "sa masse volumique est inférieure à celle de l'eau", cle: true }, { text: " ; il coule si elle est supérieure." }],
        [{ text: "b) Parce que " }, { text: "le fer est plus dense que l'eau, le bois moins dense", cle: true }, { text: " : c'est la matière qui compte, pas le poids total." }],
        [{ text: "c) Vide et bouchée, elle contient de l'air : " }, { text: "sa masse volumique moyenne est faible", cle: true }, { text: " ; remplie d'eau, sa masse volumique moyenne dépasse celle de l'eau." }],
        [{ text: "d) L'eau très salée est " }, { text: "plus dense que l'œuf", cle: true }, { text: " : l'œuf devient « moins dense que le liquide » et flotte." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["flottabilité", "flotte", "coule", "masse volumique", "densité"],
    sections: [
      {
        titre: "1. Flotter ou couler : ce n'est pas une question de poids",
        paras: [
          "Une pirogue de 300 kg flotte ; un clou de 2 g coule. Ce n'est donc pas le poids total qui décide, mais la matière dont le corps est fait.",
        ],
      },
      {
        titre: "2. La règle de la flottabilité",
        puces: [
          "Si la masse volumique du corps est inférieure à celle de l'eau (densité < 1) : le corps flotte.",
          "Si elle est supérieure (densité > 1) : le corps coule.",
          "Si elle est égale (densité = 1) : le corps reste entre deux eaux.",
        ],
        paras: [],
      },
      {
        titre: "3. Le cas des objets creux",
        paras: [
          "Un objet creux contient de l'air, très léger. Sa masse volumique moyenne (métal + air) peut devenir inférieure à celle de l'eau : c'est pourquoi les navires en acier, les bidons vides et les bouteilles bouchées flottent.",
          "Si l'eau entre et chasse l'air, la masse volumique moyenne augmente : l'objet coule. C'est le naufrage !",
        ],
      },
      {
        titre: "4. La flottabilité dépend aussi du liquide",
        paras: [
          "Un même corps peut flotter dans un liquide dense et couler dans un liquide léger. L'œuf frais coule dans l'eau douce (d de l'œuf ≈ 1,03) mais flotte dans l'eau très salée (d ≈ 1,1).",
        ],
      },
    ],
    saisTu: [
      "Les pirogues à balancier des pêcheurs vezo sont creusées dans le tronc très léger du farafatse (d ≈ 0,4). Grâce à cette essence peu dense et au balancier qui les stabilise, elles affrontent la houle du canal du Mozambique depuis des siècles !",
    ],
    experience: [
      "L'œuf qui flotte (expérience de la densité) :",
      "1. Dépose délicatement un œuf frais dans un grand verre d'eau : il coule.",
      "2. Retire l'œuf, ajoute 4 à 5 cuillères à soupe de sel, mélange bien.",
      "3. Redépose l'œuf : il flotte ! L'eau salée est devenue plus dense que l'œuf.",
      "4. Ajoute doucement de l'eau douce par-dessus : l'œuf reste suspendu entre deux eaux.",
    ],
  },
  substitutions: [
    { officiel: "Cuve de flottabilité", local: "Bassine, seau ou grande cuvette" },
    { officiel: "Corps d'épreuve calibrés", local: "Bouchon, clou, caillou, bois, bouteille, orange, œuf" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Un corps flotte si sa densité est :  a) supérieure à 1   b) inférieure à 1   c) égale à 100",
        "2. Le clou coule car :  a) il est petit   b) le fer est plus dense que l'eau   c) il est pointu",
        "3. Un corps de densité exactement 1 :  a) flotte en surface   b) coule au fond   c) reste entre deux eaux",
        "4. Le navire en acier flotte grâce à :  a) sa peinture   b) l'air qu'il contient   c) son ancre",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "inférieure à 1", cle: true }, { text: "." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "le fer est plus dense que l'eau", cle: true }, { text: " (d = 7,8)." }],
        [{ text: "3. Réponse c) : ", bold: true }, { text: "il reste entre deux eaux", cle: true }, { text: "." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "l'air qu'il contient", cle: true }, { text: " abaisse sa masse volumique moyenne." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Plus un objet est gros, plus il coule facilement.",
        "2. Le bois flotte car sa densité est inférieure à 1.",
        "3. Une bouteille remplie d'eau flotte mieux qu'une bouteille vide bouchée.",
        "4. Un même objet peut flotter dans un liquide et couler dans un autre.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : seule compte la masse volumique comparée à celle de l'eau." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : pleine d'eau, sa masse volumique moyenne augmente et elle coule." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: " : tout dépend de la densité du liquide." }],
      ],
    },
    {
      points: 6,
      consigne: "Pour chaque corps, calcule la densité puis prédis : flotte ou coule ?",
      items: [
        "1. Corps A : masse 240 g, volume 300 cm³.",
        "2. Corps B : masse 540 g, volume 200 cm³.",
        "3. Corps C : masse 100 g, volume 100 cm³.",
      ],
      corrige: [
        [{ text: "1. 240 ÷ 300 = 0,8 g/cm³, d = " }, { text: "0,8 < 1 : il flotte", cle: true }, { text: "." }],
        [{ text: "2. 540 ÷ 200 = 2,7 g/cm³, d = " }, { text: "2,7 > 1 : il coule", cle: true }, { text: "." }],
        [{ text: "3. 100 ÷ 100 = 1 g/cm³, d = " }, { text: "1 : il reste entre deux eaux", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Observe la figure 3, puis réponds :",
      items: [
        "1. Classe les objets de la figure en deux groupes : flottent / coulent.",
        "2. Explique pourquoi la pirogue en bois flotte malgré sa grande masse.",
        "3. Que se passerait-il si la pirogue se remplissait d'eau ? Justifie.",
      ],
      corrige: [
        [{ text: "1. Flottent : " }, { text: "la pirogue, le bouchon, la bouteille vide", cle: true }, { text: " ; coulent : " }, { text: "le caillou, le clou", cle: true }, { text: "." }],
        [{ text: "2. Le bois a une " }, { text: "masse volumique inférieure à celle de l'eau", cle: true }, { text: " : la taille ne compte pas." }],
        [{ text: "3. Elle coulerait peu à peu : l'eau chasse l'air et " }, { text: "la masse volumique moyenne dépasse celle de l'eau", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S4 = {
  numero: 4, total: 34, unite: "I", theme: "Matière",
  titre: "Les mélanges homogènes et hétérogènes",
  objectif: "différencier un mélange homogène d'un mélange hétérogène et de classer des mélanges courants",
  documentation: DOC,
  support: "Verres transparents, eau, sel, sable, huile, jus de fruits, riz, petites pierres, cuillères",
  image: "images/img_seance04.png",
  imageLegende: "Figure 4 — Mélanges homogènes (jus, eau salée) et hétérogènes (eau boueuse, eau et huile)",
  revision: {
    qa: [
      { q: "Énonce la règle de la flottabilité.", ra: "Un corps flotte si sa masse volumique est inférieure à celle de l'eau, il coule si elle est supérieure." },
      { q: "Pourquoi l'huile flotte-t-elle sur l'eau ?", ra: "Parce que sa densité (0,9) est inférieure à celle de l'eau (1)." },
      { q: "Qu'est-ce que la densité ?", ra: "Le rapport entre la masse volumique d'une substance et celle de l'eau ; sans unité." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Hanitra prépare le repas : elle mélange du sel dans l'eau de cuisson — le sel disparaît complètement. Puis elle verse le riz dans l'eau — les grains restent bien visibles !",
      "Ces deux mélanges se ressemblent-ils ?",
      "R.A. : Non : dans l'un on ne voit plus rien, dans l'autre on distingue les grains.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Les mélanges homogènes et hétérogènes ». Après cette séance, vous serez capables de différencier ces deux types de mélanges et de classer les mélanges de la vie courante.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien ces quatre verres : eau + sel bien remué ; eau + sable ; eau + huile ; jus d'orange pressé et filtré. Dans lesquels peut-on distinguer les constituants à l'œil nu ?",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Verres, eau, sel, sable, huile, jus",
  },
  analyse: {
    qa: [
      { q: "Dans l'eau salée, voit-on encore le sel ?", ra: "Non : on ne distingue qu'un seul liquide." },
      { q: "Dans l'eau et le sable, distingue-t-on les constituants ?", ra: "Oui : le sable est visible au fond." },
      { q: "Comment appelle-t-on un mélange où l'on ne distingue pas les constituants ?", ra: "Un mélange homogène." },
      { q: "Et un mélange où on les distingue à l'œil nu ?", ra: "Un mélange hétérogène." },
      { q: "L'eau et l'huile forment-elles un mélange homogène ?", ra: "Non : on voit deux couches distinctes, c'est un mélange hétérogène." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Les quatre verres",
  },
  synthese: {
    enseignant: "Donc, un mélange est constitué d'au moins deux substances. Dans un mélange homogène, on ne distingue pas les constituants à l'œil nu : l'ensemble paraît uniforme, comme l'eau salée ou le jus filtré. Dans un mélange hétérogène, on distingue les constituants à l'œil nu : eau et sable, eau et huile, riz et cailloux. Le même couple de substances peut donner l'un ou l'autre : le sel se dissout dans l'eau (homogène), le sable non (hétérogène).",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Classe chaque mélange : homogène ou hétérogène ?",
      items: [
        "a) L'eau sucrée bien remuée.",
        "b) L'eau boueuse d'une rizière.",
        "c) L'air que nous respirons.",
        "d) La salade de fruits.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Homogène", cle: true }, { text: " : le sucre est invisible." }],
        [{ text: "b) " }, { text: "Hétérogène", cle: true }, { text: " : on voit les particules de terre." }],
        [{ text: "c) " }, { text: "Homogène", cle: true }, { text: " : on ne distingue pas ses gaz." }],
        [{ text: "d) " }, { text: "Hétérogène", cle: true }, { text: " : chaque fruit est visible." }],
      ],
    },
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Dans un mélange homogène, on distingue les constituants à l'œil nu.",
        "b) L'eau et l'huile forment un mélange hétérogène.",
        "c) Un mélange contient au moins deux substances.",
        "d) L'eau salée est un mélange hétérogène.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Faux", cle: true }, { text: " : c'est la définition du mélange hétérogène." }],
        [{ text: "b) " }, { text: "Vrai", cle: true }, { text: " : deux couches bien visibles." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Faux", cle: true }, { text: " : elle est homogène, le sel dissous est invisible." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : hétérogène – distingue – homogène – substances – œil nu.",
      items: [
        "a) Un mélange contient au moins deux ……… .",
        "b) Dans un mélange ………, on ne ……… pas les constituants à l'……… .",
        "c) Dans un mélange ………, les constituants restent visibles.",
      ],
      corrige: [
        [{ text: "a) Un mélange contient au moins deux " }, { text: "substances", cle: true }, { text: "." }],
        [{ text: "b) Dans un mélange " }, { text: "homogène", cle: true }, { text: ", on ne " }, { text: "distingue", cle: true }, { text: " pas les constituants à l'" }, { text: "œil nu", cle: true }, { text: "." }],
        [{ text: "c) Dans un mélange " }, { text: "hétérogène", cle: true }, { text: ", les constituants restent visibles." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Donne la définition d'un mélange homogène, avec deux exemples.",
        "b) Donne la définition d'un mélange hétérogène, avec deux exemples.",
        "c) Le lait paraît homogène à l'œil nu, mais au microscope on voit des gouttelettes de graisse. Que peut-on en conclure ?",
        "d) Cite un mélange homogène et un mélange hétérogène que l'on trouve dans une cuisine malgache.",
      ],
      corrige: [
        [{ text: "a) Mélange dont on " }, { text: "ne distingue pas les constituants à l'œil nu", cle: true }, { text: " : eau salée, jus filtré." }],
        [{ text: "b) Mélange dont on " }, { text: "distingue les constituants à l'œil nu", cle: true }, { text: " : eau boueuse, eau et huile." }],
        [{ text: "c) Que le classement dépend de l'observation : " }, { text: "homogène à l'œil nu ne veut pas dire homogène au microscope", cle: true }, { text: "." }],
        [{ text: "d) Par exemple : " }, { text: "l'eau sucrée (homogène) et le romazava avec ses brèdes et morceaux (hétérogène)", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["mélange", "homogène", "hétérogène", "constituants"],
    sections: [
      {
        titre: "1. Qu'est-ce qu'un mélange ?",
        paras: [
          "Un mélange est formé d'au moins deux substances réunies. Presque tout ce qui nous entoure est un mélange : l'air, l'eau de mer, la terre, le jus de fruits, le béton…",
        ],
      },
      {
        titre: "2. Le mélange homogène",
        paras: [
          "Dans un mélange homogène, on ne distingue pas les constituants à l'œil nu : l'ensemble paraît uniforme, d'un seul tenant.",
        ],
        puces: [
          "l'eau salée ou l'eau sucrée bien remuées ;",
          "le jus de fruits filtré ;",
          "l'air (mélange de gaz : diazote, dioxygène…) ;",
          "le café bien dissous dans l'eau chaude.",
        ],
      },
      {
        titre: "3. Le mélange hétérogène",
        paras: [
          "Dans un mélange hétérogène, on distingue les constituants à l'œil nu.",
        ],
        puces: [
          "l'eau boueuse : particules de terre visibles ;",
          "l'eau et l'huile : deux couches distinctes ;",
          "le riz mêlé de petites pierres, avant le tri ;",
          "la salade de fruits, le romazava.",
        ],
      },
      {
        titre: "4. Attention aux apparences",
        paras: [
          "Le classement dépend de l'observation : le lait semble homogène, mais au microscope on découvre des gouttelettes de graisse dispersées dans l'eau. À l'œil nu, on le classe cependant parmi les mélanges homogènes.",
        ],
      },
    ],
    saisTu: [
      "L'eau de mer est un mélange homogène d'eau et d'environ 35 g de sels par litre. Dans les salines de Toliara et de Morondava, on laisse le soleil évaporer l'eau des bassins : le sel réapparaît ! Preuve qu'il était bien là, invisible, dans le mélange homogène.",
    ],
    experience: [
      "Chasse aux mélanges dans la cuisine :",
      "1. Prépare quatre petits verres : eau + sucre remué, eau + terre, eau + quelques gouttes d'huile, thé ou café filtré.",
      "2. Observe chaque verre devant la lumière : distingues-tu les constituants ?",
      "3. Classe chaque mélange : homogène ou hétérogène.",
      "4. Laisse reposer une heure et observe à nouveau : certains mélanges ont-ils changé de catégorie ?",
    ],
  },
  substitutions: [
    { officiel: "Tubes à essai", local: "Petits verres transparents ou flacons de récupération" },
    { officiel: "Agitateur en verre", local: "Cuillère ou baguette en bois propre" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Un mélange homogène est un mélange :  a) d'une seule substance   b) où l'on ne distingue pas les constituants   c) toujours liquide",
        "2. L'eau boueuse est un mélange :  a) homogène   b) hétérogène   c) pur",
        "3. L'air est :  a) un corps pur   b) un mélange homogène de gaz   c) un mélange hétérogène",
        "4. L'eau et l'huile forment :  a) un mélange homogène   b) un mélange hétérogène   c) une solution",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "où l'on ne distingue pas les constituants", cle: true }, { text: " à l'œil nu." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "hétérogène", cle: true }, { text: "." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "un mélange homogène de gaz", cle: true }, { text: "." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "un mélange hétérogène", cle: true }, { text: " : deux couches visibles." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. L'eau sucrée est un mélange homogène.",
        "2. Un mélange peut contenir une seule substance.",
        "3. Dans le riz mêlé de cailloux, on distingue les constituants : mélange hétérogène.",
        "4. Un mélange homogène à l'œil nu l'est forcément aussi au microscope.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Faux", cle: true }, { text: " : il faut au moins deux substances." }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : le lait paraît homogène mais montre des gouttelettes au microscope." }],
      ],
    },
    {
      points: 6,
      consigne: "Classe ces huit mélanges en deux colonnes (homogène / hétérogène) : eau salée, salade de fruits, air, eau + sable, café dissous, eau + huile, jus filtré, riz + cailloux.",
      items: [],
      corrige: [
        [{ text: "Homogènes : ", bold: true }, { text: "eau salée, air, café dissous, jus filtré", cle: true }, { text: "." }],
        [{ text: "Hétérogènes : ", bold: true }, { text: "salade de fruits, eau + sable, eau + huile, riz + cailloux", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Petite enquête. Mamy verse une poudre blanche dans l'eau et remue longtemps : le mélange reste trouble et, après une heure, un dépôt blanc s'est formé au fond.",
      items: [
        "1. Ce mélange est-il homogène ou hétérogène ? Justifie.",
        "2. La poudre s'est-elle dissoute ?",
        "3. Si Mamy avait utilisé du sel, qu'aurait-elle observé ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Hétérogène", cle: true }, { text: " : on distingue le dépôt et le liquide trouble." }],
        [{ text: "2. " }, { text: "Non", cle: true }, { text: " : elle se dépose au fond au lieu de disparaître dans l'eau." }],
        [{ text: "3. Un mélange " }, { text: "homogène : le sel se serait dissous", cle: true }, { text: ", liquide limpide sans dépôt." }],
      ],
    },
  ],
};

const S5 = {
  numero: 5, total: 34, unite: "I", theme: "Matière",
  titre: "Dissolution et miscibilité : solution, solvant, soluté",
  objectif: "expliquer les propriétés des mélanges (dissolution, miscibilité) et d'utiliser le vocabulaire solution, solvant, soluté",
  documentation: DOC,
  support: "Verres, eau, sel, sucre, sable, huile, sirop, alcool à brûler (démonstration), cuillères",
  image: "images/img_seance05.png",
  imageLegende: "Figure 5 — Dissolution du sel ; huile et eau non miscibles ; sirop et eau miscibles",
  revision: {
    qa: [
      { q: "Qu'est-ce qu'un mélange homogène ? Donne un exemple.", ra: "Un mélange dont on ne distingue pas les constituants : l'eau salée." },
      { q: "Qu'est-ce qu'un mélange hétérogène ? Donne un exemple.", ra: "Un mélange dont on distingue les constituants : l'eau et l'huile." },
      { q: "L'air est-il un mélange ?", ra: "Oui, un mélange homogène de gaz." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Pour sucrer son café, Dada verse une cuillerée de sucre et remue : le sucre disparaît, mais le café est bien sucré ! « Où est passé le sucre ? », demande la petite Fara.",
      "Le sucre a-t-il vraiment disparu ?",
      "R.A. : Non : on le goûte encore ! Il est dans l'eau, mais invisible.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Dissolution et miscibilité ». Après cette séance, vous serez capables d'expliquer la dissolution et la miscibilité, et d'employer correctement les mots solution, solvant et soluté.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : je verse du sel dans l'eau et je remue : que devient-il ? Je fais de même avec du sable. Ensuite, je verse du sirop dans l'eau, puis de l'huile dans l'eau, et je remue chaque verre.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Verres, sel, sable, sirop, huile",
  },
  analyse: {
    qa: [
      { q: "Que devient le sel dans l'eau ?", ra: "Il se dissout : il disparaît à l'œil nu, le mélange devient homogène." },
      { q: "Et le sable ?", ra: "Il ne se dissout pas : il se dépose au fond, le mélange reste hétérogène." },
      { q: "Comment appelle-t-on le liquide qui dissout ? Le solide dissous ? Le mélange obtenu ?", ra: "Le solvant ; le soluté ; la solution." },
      { q: "Le sirop et l'eau se mélangent-ils complètement ?", ra: "Oui : ils sont miscibles, le mélange est homogène." },
      { q: "Et l'huile et l'eau ?", ra: "Non : elles sont non miscibles, l'huile reste au-dessus." },
      { q: "Peut-on dissoudre du sel sans fin dans un verre d'eau ?", ra: "Non : au-delà d'une certaine quantité, le sel ne se dissout plus : la solution est saturée." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Les verres d'expérience",
  },
  synthese: {
    enseignant: "Donc, la dissolution est le passage d'un soluté (solide, liquide ou gaz) dans un solvant pour former une solution homogène : dans l'eau salée, l'eau est le solvant, le sel le soluté, l'eau salée la solution. Le soluté dissous ne disparaît pas : sa masse se conserve. Quand le solvant ne peut plus rien dissoudre, la solution est saturée. Pour les liquides, on parle de miscibilité : deux liquides miscibles (eau et sirop) forment un mélange homogène ; deux liquides non miscibles (eau et huile) forment un mélange hétérogène.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Dans chaque cas, nomme le solvant, le soluté et la solution :",
      items: [
        "a) Du sucre dissous dans de l'eau.",
        "b) Du sel dissous dans de l'eau.",
        "c) Du sirop de grenadine dans de l'eau (miscibles).",
      ],
      corrige: [
        [{ text: "a) Solvant : " }, { text: "l'eau", cle: true }, { text: " ; soluté : " }, { text: "le sucre", cle: true }, { text: " ; solution : " }, { text: "l'eau sucrée", cle: true }, { text: "." }],
        [{ text: "b) Solvant : " }, { text: "l'eau", cle: true }, { text: " ; soluté : " }, { text: "le sel", cle: true }, { text: " ; solution : " }, { text: "l'eau salée", cle: true }, { text: "." }],
        [{ text: "c) Solvant : " }, { text: "l'eau", cle: true }, { text: " ; soluté : " }, { text: "le sirop", cle: true }, { text: " ; solution : " }, { text: "l'eau sirupeuse (boisson)", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Le sel dissous a disparu pour toujours.",
        "b) L'eau et l'huile sont miscibles.",
        "c) Une solution saturée ne peut plus dissoudre de soluté.",
        "d) Le sable se dissout dans l'eau.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Faux", cle: true }, { text: " : il est toujours là (le goût le prouve) et sa masse se conserve." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : elles sont non miscibles." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Faux", cle: true }, { text: " : il se dépose au fond." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : soluté – saturée – solvant – miscibles – solution – masse.",
      items: [
        "a) Dans l'eau sucrée, l'eau est le ………, le sucre le ……… et l'eau sucrée la ……… .",
        "b) Lors d'une dissolution, la ……… du soluté se conserve.",
        "c) Deux liquides qui se mélangent complètement sont ……… ; une solution qui ne peut plus dissoudre est ……… .",
      ],
      corrige: [
        [{ text: "a) L'eau est le " }, { text: "solvant", cle: true }, { text: ", le sucre le " }, { text: "soluté", cle: true }, { text: " et l'eau sucrée la " }, { text: "solution", cle: true }, { text: "." }],
        [{ text: "b) La " }, { text: "masse", cle: true }, { text: " du soluté se conserve." }],
        [{ text: "c) Ils sont " }, { text: "miscibles", cle: true }, { text: " ; elle est " }, { text: "saturée", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Petit problème : Faly dissout 25 g de sel dans 200 g d'eau.",
      items: [
        "a) Quelle est la masse de la solution obtenue ? Justifie.",
        "b) Nomme le solvant et le soluté.",
        "c) Faly ajoute encore du sel : au bout d'un moment, des grains restent au fond malgré l'agitation. Comment appelle-t-on cette solution ?",
      ],
      corrige: [
        [{ text: "a) 200 + 25 = " }, { text: "225 g : la masse du soluté se conserve", cle: true }, { text: " lors de la dissolution." }],
        [{ text: "b) Solvant : " }, { text: "l'eau", cle: true }, { text: " ; soluté : " }, { text: "le sel", cle: true }, { text: "." }],
        [{ text: "c) Une solution " }, { text: "saturée", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["dissolution", "solvant", "soluté", "solution", "miscibles", "saturée"],
    sections: [
      {
        titre: "1. La dissolution",
        paras: [
          "La dissolution est le passage d'une substance (le soluté) dans un liquide (le solvant) pour former un mélange homogène appelé solution.",
          "Exemple : sel (soluté) + eau (solvant) → eau salée (solution).",
          "Le soluté ne disparaît pas : il est dispersé dans le solvant en particules invisibles. La masse totale se conserve : 200 g d'eau + 25 g de sel = 225 g d'eau salée.",
        ],
      },
      {
        titre: "2. La saturation",
        paras: [
          "Un solvant ne peut pas dissoudre une quantité illimitée de soluté. Quand il ne peut plus rien dissoudre, la solution est saturée : le soluté en excès reste au fond. Dans un litre d'eau, on peut dissoudre au maximum environ 360 g de sel.",
        ],
      },
      {
        titre: "3. La miscibilité des liquides",
        puces: [
          "Deux liquides miscibles se mélangent complètement en un mélange homogène : eau et sirop, eau et alcool.",
          "Deux liquides non miscibles restent séparés en couches : eau et huile, eau et pétrole.",
        ],
        paras: [],
      },
      {
        titre: "4. Solides qui ne se dissolvent pas",
        paras: [
          "Certains solides, comme le sable ou la craie, ne se dissolvent pas dans l'eau : ils restent en suspension puis se déposent. Le mélange reste hétérogène.",
        ],
      },
    ],
    saisTu: [
      "Le lamba des Hautes Terres est parfois teint avec des teintures végétales dissoutes dans l'eau bouillante : la couleur est un soluté ! Et quand tu prépares un ranon'ampango (eau de riz grillé), tu fabriques toi-même une solution : l'eau dissout les arômes du riz grillé au fond de la marmite.",
    ],
    experience: [
      "La masse se conserve-t-elle vraiment ?",
      "1. Pèse un verre d'eau sur la balance de cuisine, note la masse.",
      "2. Pèse 20 g de sel à part.",
      "3. Verse le sel dans l'eau, remue jusqu'à dissolution complète.",
      "4. Repèse le verre : la masse totale = masse de l'eau + 20 g. Rien ne s'est perdu !",
    ],
  },
  substitutions: [
    { officiel: "Balance de précision et verrerie", local: "Balance de cuisine, verres et cuillères" },
    { officiel: "Solutés de laboratoire", local: "Sel, sucre, sirop, café soluble" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Dans l'eau sucrée, le sucre est :  a) le solvant   b) le soluté   c) la solution",
        "2. Deux liquides qui se mélangent complètement sont :  a) miscibles   b) non miscibles   c) saturés",
        "3. Lors d'une dissolution, la masse du soluté :  a) disparaît   b) diminue   c) se conserve",
        "4. Une solution qui ne peut plus dissoudre de soluté est :  a) diluée   b) saturée   c) filtrée",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "le soluté", cle: true }, { text: "." }],
        [{ text: "2. Réponse a) : ", bold: true }, { text: "miscibles", cle: true }, { text: "." }],
        [{ text: "3. Réponse c) : ", bold: true }, { text: "elle se conserve", cle: true }, { text: "." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "saturée", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. L'eau et l'alcool sont miscibles.",
        "2. Le sable est soluble dans l'eau.",
        "3. On peut dissoudre du sel sans limite dans un verre d'eau.",
        "4. Une solution est toujours un mélange homogène.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Faux", cle: true }, { text: " : il ne se dissout pas, il se dépose." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : au-delà d'environ 360 g/L, la solution est saturée." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: " : c'est sa définition." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : solution – conserve – soluté – homogène – solvant – saturée.",
      items: [
        "Le sucre versé dans l'eau est le ……… ; l'eau est le ……… ; l'eau sucrée est la ……… , un mélange ……… . La masse du sucre se ……… . Si on en ajoute trop, la solution devient ……… .",
      ],
      corrige: [
        [{ text: "Le sucre est le " }, { text: "soluté", cle: true }, { text: " ; l'eau est le " }, { text: "solvant", cle: true }, { text: " ; l'eau sucrée est la " }, { text: "solution", cle: true }, { text: ", un mélange " }, { text: "homogène", cle: true }, { text: ". La masse du sucre se " }, { text: "conserve", cle: true }, { text: ". Si on en ajoute trop, la solution devient " }, { text: "saturée", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Problème. Niry prépare une boisson : elle verse 30 g de sirop dans 270 g d'eau et remue.",
      items: [
        "1. Le sirop et l'eau sont-ils miscibles ? Quel type de mélange obtient-elle ?",
        "2. Quelle est la masse de la boisson ?",
        "3. Elle verse ensuite une cuillerée d'huile par erreur. Décris ce qu'elle observe et explique.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Oui, miscibles : mélange homogène", cle: true }, { text: "." }],
        [{ text: "2. 270 + 30 = " }, { text: "300 g", cle: true }, { text: " : la masse se conserve." }],
        [{ text: "3. " }, { text: "L'huile forme une couche à la surface", cle: true }, { text: " : elle est " }, { text: "non miscible avec l'eau et moins dense", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S6 = {
  numero: 6, total: 34, unite: "I", theme: "Matière",
  titre: "Séparer un mélange : décantation et filtration",
  objectif: "expliquer et mettre en pratique la décantation et la filtration pour séparer un mélange hétérogène",
  documentation: DOC,
  support: "Eau boueuse, verres, filtre (tissu propre, papier filtre ou passoire fine), entonnoir, bassines",
  image: "images/img_seance06.png",
  imageLegende: "Figure 6 — La décantation laisse déposer ; la filtration retient les particules",
  revision: {
    qa: [
      { q: "Qu'est-ce qu'une solution ? Donne ses trois éléments.", ra: "Un mélange homogène formé d'un solvant et d'un soluté dissous." },
      { q: "Le sable se dissout-il dans l'eau ?", ra: "Non : il se dépose au fond, le mélange reste hétérogène." },
      { q: "Que sont deux liquides non miscibles ? Exemple.", ra: "Des liquides qui ne se mélangent pas : eau et huile." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Pendant la saison des pluies, l'eau du puits de Soanavela devient trouble et jaunâtre. Sa maman la laisse reposer dans un grand seau toute la nuit, puis la verse à travers un linge propre avant de la faire bouillir.",
      "À quoi servent ces deux gestes : laisser reposer, puis verser à travers un linge ?",
      "R.A. : À enlever la terre de l'eau : d'abord elle tombe au fond, puis le linge retient le reste.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La décantation et la filtration ». Après cette séance, vous serez capables d'expliquer le principe de ces deux techniques et de les mettre en pratique pour séparer un mélange hétérogène.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : ce verre d'eau boueuse repose depuis ce matin : où sont les particules de terre ? Je verse maintenant doucement le liquide du dessus dans un autre verre, sans remuer le dépôt. Puis je verse de l'eau boueuse fraîche à travers ce filtre posé sur l'entonnoir.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Eau boueuse, verres, filtre, entonnoir",
  },
  analyse: {
    qa: [
      { q: "Où se retrouvent les particules après une nuit de repos ?", ra: "Au fond du verre : elles se sont déposées." },
      { q: "Comment s'appelle cette technique de séparation par repos ?", ra: "La décantation." },
      { q: "Sur quoi repose la décantation ?", ra: "Sur la différence de densité : les particules plus denses tombent au fond." },
      { q: "Que retient le filtre ? Que laisse-t-il passer ?", ra: "Il retient les particules solides ; il laisse passer le liquide, appelé filtrat." },
      { q: "La filtration enlève-t-elle le sel dissous dans l'eau ?", ra: "Non : le sel dissous traverse le filtre, car il est en particules invisibles." },
      { q: "Peut-on décanter l'eau et l'huile ?", ra: "Oui : les deux liquides non miscibles se séparent en couches, on soutire ensuite celle du bas." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Expériences de décantation et filtration",
  },
  synthese: {
    enseignant: "Donc, la décantation consiste à laisser reposer un mélange hétérogène : les particules les plus denses se déposent au fond, et les liquides non miscibles se séparent en couches ; on récupère ensuite le liquide clair. La filtration consiste à verser le mélange à travers un filtre : les particules solides sont retenues, le liquide clair, appelé filtrat, traverse. Ces techniques séparent les mélanges hétérogènes, mais elles ne peuvent pas retirer un soluté dissous : le filtrat d'eau salée reste salé.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Décantation ou filtration ? Choisis la technique la plus adaptée :",
      items: [
        "a) Récupérer l'eau claire d'un seau d'eau très boueuse, sans matériel.",
        "b) Retirer les grains de thé d'une infusion.",
        "c) Séparer l'huile et l'eau d'une sauce.",
        "d) Enlever les dernières particules fines d'une eau déjà reposée.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Décantation", cle: true }, { text: " : laisser reposer puis verser doucement." }],
        [{ text: "b) " }, { text: "Filtration", cle: true }, { text: " : la passoire retient les feuilles." }],
        [{ text: "c) " }, { text: "Décantation", cle: true }, { text: " : les liquides non miscibles se séparent en couches." }],
        [{ text: "d) " }, { text: "Filtration", cle: true }, { text: " : le filtre retient les fines particules." }],
      ],
    },
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) La décantation utilise la différence de densité.",
        "b) Le filtrat est le solide retenu par le filtre.",
        "c) La filtration retire le sel dissous de l'eau salée.",
        "d) On peut séparer l'eau et l'huile par décantation.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : le filtrat est le liquide clair qui traverse le filtre." }],
        [{ text: "c) " }, { text: "Faux", cle: true }, { text: " : le soluté dissous traverse le filtre." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: " : elles se séparent en deux couches." }],
      ],
    },
  ],
  applicationTechnique: "Travail de groupe", applicationSupport: "Matériel de filtration, ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : filtrat – décantation – dépose – filtration – retient – hétérogène.",
      items: [
        "a) La ……… consiste à laisser reposer : le solide se ……… au fond.",
        "b) La ……… consiste à verser à travers un filtre qui ……… les particules ; le liquide clair recueilli est le ……… .",
        "c) Ces deux techniques séparent les mélanges ……… .",
      ],
      corrige: [
        [{ text: "a) La " }, { text: "décantation", cle: true }, { text: " consiste à laisser reposer : le solide se " }, { text: "dépose", cle: true }, { text: " au fond." }],
        [{ text: "b) La " }, { text: "filtration", cle: true }, { text: " consiste à verser à travers un filtre qui " }, { text: "retient", cle: true }, { text: " les particules ; le liquide clair est le " }, { text: "filtrat", cle: true }, { text: "." }],
        [{ text: "c) Elles séparent les mélanges " }, { text: "hétérogène", cle: true }, { text: "s." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Décris les étapes pour clarifier une eau boueuse avec ces deux techniques.",
        "b) Pourquoi la filtration ne suffit-elle pas à rendre l'eau potable ?",
        "c) Pourquoi la décantation fonctionne-t-elle aussi avec l'eau et l'huile ?",
        "d) Cite deux exemples d'utilisation de la filtration dans la vie quotidienne.",
      ],
      corrige: [
        [{ text: "a) D'abord la " }, { text: "décantation (laisser reposer, verser le clair)", cle: true }, { text: ", puis la " }, { text: "filtration du liquide restant", cle: true }, { text: "." }],
        [{ text: "b) Parce qu'elle ne retire " }, { text: "ni les microbes ni les substances dissoutes", cle: true }, { text: " : il faut encore bouillir ou traiter l'eau (Sûr'Eau)." }],
        [{ text: "c) Parce que ces liquides sont " }, { text: "non miscibles et de densités différentes", cle: true }, { text: " : ils se séparent en couches." }],
        [{ text: "d) " }, { text: "Le café filtre, le thé passé à la passoire, le linge pour l'eau du puits", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["décantation", "filtration", "filtrat", "dépôt", "filtre"],
    sections: [
      {
        titre: "1. La décantation",
        paras: [
          "La décantation consiste à laisser reposer un mélange hétérogène sans le remuer :",
        ],
        puces: [
          "les particules solides, plus denses, se déposent au fond (le dépôt) ;",
          "les liquides non miscibles se séparent en couches selon leur densité ;",
          "on verse ou on soutire ensuite doucement le liquide clarifié.",
        ],
      },
      {
        titre: "2. La filtration",
        paras: [
          "La filtration consiste à faire passer le mélange à travers un filtre (papier, tissu serré, passoire fine) :",
        ],
        puces: [
          "les particules solides, trop grosses pour passer, sont retenues par le filtre ;",
          "le liquide clair qui traverse s'appelle le filtrat.",
        ],
      },
      {
        titre: "3. Les limites de ces techniques",
        paras: [
          "Décantation et filtration ne séparent que les mélanges hétérogènes. Elles ne peuvent pas retirer un soluté dissous : l'eau salée filtrée reste salée ! Et une eau claire n'est pas forcément potable : les microbes, invisibles, traversent le filtre ordinaire. Il faut la faire bouillir ou la traiter.",
        ],
      },
    ],
    saisTu: [
      "Les stations de traitement de la JIRAMA utilisent exactement ces techniques à grande échelle : l'eau des rivières passe d'abord dans de grands bassins de décantation, puis à travers des filtres à sable, avant d'être désinfectée et envoyée dans les robinets de la ville !",
    ],
    experience: [
      "Fabrique un filtre à étages :",
      "1. Coupe le fond d'une bouteille en plastique et retourne-la comme un entonnoir.",
      "2. Superpose dedans : un tissu propre, du charbon de bois pilé, du sable fin, des graviers.",
      "3. Verse doucement de l'eau boueuse décantée et récupère le filtrat.",
      "4. Compare la clarté avant/après. Attention : cette eau reste non potable — il faudrait la faire bouillir !",
    ],
  },
  substitutions: [
    { officiel: "Papier filtre et entonnoir de laboratoire", local: "Tissu propre serré, passoire fine, bouteille coupée" },
    { officiel: "Bécher", local: "Verres et bocaux transparents" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. La décantation consiste à :  a) chauffer le mélange   b) laisser reposer le mélange   c) remuer le mélange",
        "2. Le liquide clair qui traverse le filtre s'appelle :  a) le dépôt   b) le filtrat   c) le soluté",
        "3. La filtration retient :  a) les particules solides   b) le sel dissous   c) l'eau",
        "4. L'eau filtrée et claire est :  a) toujours potable   b) pas forcément potable   c) toujours salée",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "laisser reposer le mélange", cle: true }, { text: "." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "le filtrat", cle: true }, { text: "." }],
        [{ text: "3. Réponse a) : ", bold: true }, { text: "les particules solides", cle: true }, { text: "." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "pas forcément potable", cle: true }, { text: " : les microbes traversent le filtre." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Pendant la décantation, il faut remuer régulièrement.",
        "2. La décantation sépare aussi deux liquides non miscibles.",
        "3. Le filtrat d'une eau salée ne contient plus de sel.",
        "4. Le dépôt est le solide qui s'accumule au fond pendant la décantation.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : il faut au contraire laisser reposer sans remuer." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: " : ils se séparent en couches." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : le sel dissous traverse le filtre, le filtrat reste salé." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : filtre – dépôt – décantation – filtrat – densité – hétérogènes.",
      items: [
        "La ……… utilise la différence de ……… : les particules forment un ……… au fond. La filtration utilise un ……… qui retient le solide et laisse passer le ……… . Ces techniques séparent les mélanges ……… .",
      ],
      corrige: [
        [{ text: "La " }, { text: "décantation", cle: true }, { text: " utilise la différence de " }, { text: "densité", cle: true }, { text: " : les particules forment un " }, { text: "dépôt", cle: true }, { text: " au fond. La filtration utilise un " }, { text: "filtre", cle: true }, { text: " qui retient le solide et laisse passer le " }, { text: "filtrat", cle: true }, { text: ". Ces techniques séparent les mélanges " }, { text: "hétérogènes", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Situation. Après l'orage, Tojo doit clarifier 10 L d'eau très boueuse pour la lessive.",
      items: [
        "1. Décris, dans l'ordre, les deux étapes qu'il doit suivre et ce que chacune enlève.",
        "2. Pourquoi commence-t-on par la décantation plutôt que par la filtration ?",
        "3. Cette eau clarifiée est-elle bonne à boire ? Justifie.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Décantation (le gros des particules se dépose)", cle: true }, { text: ", puis " }, { text: "filtration (le linge retient les particules fines)", cle: true }, { text: "." }],
        [{ text: "2. Pour " }, { text: "ne pas boucher le filtre", cle: true }, { text: " avec la grande quantité de boue : la décantation dégrossit le travail." }],
        [{ text: "3. " }, { text: "Non", cle: true }, { text: " : elle peut contenir des " }, { text: "microbes invisibles", cle: true }, { text: " ; il faudrait la faire bouillir ou la traiter." }],
      ],
    },
  ],
};

const S7 = {
  numero: 7, total: 34, unite: "I", theme: "Matière",
  titre: "Séparer un mélange : évaporation et distillation",
  objectif: "expliquer les principes de l'évaporation et de la distillation et de choisir la technique adaptée pour séparer un mélange homogène",
  documentation: DOC,
  support: "Eau salée, assiette plate, bouilloire ou marmite avec couvercle, verre froid, réchaud (démonstration)",
  image: "images/img_seance07.png",
  imageLegende: "Figure 7 — La distillation : l'eau s'évapore puis se condense, le sel reste dans le ballon",
  revision: {
    qa: [
      { q: "Quelles techniques séparent un mélange hétérogène ?", ra: "La décantation et la filtration." },
      { q: "La filtration peut-elle retirer le sel de l'eau salée ?", ra: "Non : le sel dissous traverse le filtre." },
      { q: "Qu'est-ce que le filtrat ?", ra: "Le liquide clair qui traverse le filtre." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Aux salines de Toliara, on fait entrer l'eau de mer dans de grands bassins plats. Quelques semaines de soleil plus tard, l'eau a disparu… et il reste des montagnes de sel blanc !",
      "Où est passée l'eau ? Comment le sel invisible est-il réapparu ?",
      "R.A. : L'eau s'est évaporée au soleil, et le sel dissous est resté sur place.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée", support: "Tableau noir, photo de salines",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « L'évaporation et la distillation ». Après cette séance, vous serez capables d'expliquer ces deux techniques et de choisir celle qui convient pour séparer un mélange homogène.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : cette assiette d'eau salée est exposée depuis trois jours près de la fenêtre : que voit-on au fond ? Maintenant, je fais bouillir de l'eau salée dans la marmite couverte, et je tiens ce verre froid au-dessus de la vapeur qui s'échappe : que se forme-t-il sur le verre ? Goûtons prudemment ces gouttes.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Assiette, marmite, verre froid",
  },
  analyse: {
    qa: [
      { q: "Que reste-t-il dans l'assiette après évaporation ?", ra: "Des cristaux de sel : le soluté est resté." },
      { q: "Où est partie l'eau ?", ra: "Dans l'air, sous forme de vapeur invisible." },
      { q: "Que se forme-t-il sur le verre froid tenu au-dessus de la vapeur ?", ra: "Des gouttelettes d'eau : la vapeur se condense au contact du froid." },
      { q: "Ces gouttelettes sont-elles salées ?", ra: "Non : elles sont douces, le sel n'est pas parti avec la vapeur." },
      { q: "Quelle technique récupère seulement le sel ? Et laquelle récupère aussi l'eau pure ?", ra: "L'évaporation récupère le sel ; la distillation (évaporation + condensation) récupère les deux." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Expériences",
  },
  synthese: {
    enseignant: "Donc, l'évaporation consiste à laisser ou faire partir le solvant en vapeur : le soluté dissous reste et cristallise ; c'est ainsi qu'on récolte le sel marin, mais l'eau est perdue dans l'air. La distillation va plus loin : on fait bouillir le mélange, puis on refroidit la vapeur pour la condenser en liquide pur recueilli à part ; on récupère ainsi l'eau pure ET le sel reste dans le récipient. Ces deux techniques séparent les mélanges homogènes, ce que la filtration ne peut pas faire.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Évaporation ou distillation ? Choisis la technique adaptée :",
      items: [
        "a) Récolter le sel de l'eau de mer dans les salines.",
        "b) Obtenir de l'eau pure à partir d'eau salée, sur un bateau.",
        "c) Faire réapparaître le sucre dissous dans un fond de verre.",
        "d) Séparer et récupérer l'eau ET le sel d'une solution.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Évaporation", cle: true }, { text: " : le soleil fait le travail, seul le sel intéresse." }],
        [{ text: "b) " }, { text: "Distillation", cle: true }, { text: " : on condense la vapeur pour boire l'eau pure." }],
        [{ text: "c) " }, { text: "Évaporation", cle: true }, { text: " : laisser sécher, le sucre cristallise." }],
        [{ text: "d) " }, { text: "Distillation", cle: true }, { text: " : elle récupère les deux constituants." }],
      ],
    },
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) L'évaporation fait partir le solvant et laisse le soluté.",
        "b) La vapeur d'eau salée est salée.",
        "c) La distillation comprend une ébullition puis une condensation.",
        "d) L'évaporation permet de récupérer l'eau pure.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : le sel ne s'évapore pas, la vapeur est douce." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Faux", cle: true }, { text: " : l'eau part dans l'air ; c'est la distillation qui la récupère." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : condensation – cristallise – évaporation – vapeur – distillation – pure.",
      items: [
        "a) Dans l'………, le solvant part en ……… et le soluté ……… .",
        "b) La ……… ajoute une ……… : la vapeur refroidie redevient de l'eau ……… .",
      ],
      corrige: [
        [{ text: "a) Dans l'" }, { text: "évaporation", cle: true }, { text: ", le solvant part en " }, { text: "vapeur", cle: true }, { text: " et le soluté " }, { text: "cristallise", cle: true }, { text: "." }],
        [{ text: "b) La " }, { text: "distillation", cle: true }, { text: " ajoute une " }, { text: "condensation", cle: true }, { text: " : la vapeur refroidie redevient de l'eau " }, { text: "pure", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Explique comment on récolte le sel dans les salines de Toliara.",
        "b) Décris les deux étapes de la distillation.",
        "c) Pourquoi l'eau distillée n'est-elle pas salée ?",
        "d) Quelle différence essentielle y a-t-il entre filtration et distillation ?",
      ],
      corrige: [
        [{ text: "a) L'eau de mer est enfermée dans des bassins plats : " }, { text: "le soleil évapore l'eau et le sel cristallise", cle: true }, { text: " au fond." }],
        [{ text: "b) " }, { text: "Ébullition du mélange, puis condensation de la vapeur", cle: true }, { text: " refroidie, recueillie dans un autre récipient." }],
        [{ text: "c) Parce que " }, { text: "le sel ne s'évapore pas : seule l'eau part en vapeur", cle: true }, { text: "." }],
        [{ text: "d) La filtration sépare les mélanges " }, { text: "hétérogènes", cle: true }, { text: " ; la distillation sépare les mélanges " }, { text: "homogènes", cle: true }, { text: " (soluté dissous)." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["évaporation", "distillation", "condensation", "cristallise", "eau pure"],
    sections: [
      {
        titre: "1. L'évaporation",
        paras: [
          "L'évaporation consiste à faire partir le solvant sous forme de vapeur, naturellement au soleil ou en chauffant. Le soluté dissous, qui ne s'évapore pas, reste et cristallise.",
          "Exemple : dans les salines, l'eau de mer s'évapore au soleil et le sel se dépose. Inconvénient : le solvant est perdu dans l'air.",
        ],
      },
      {
        titre: "2. La distillation",
        paras: [
          "La distillation permet de récupérer les deux constituants d'un mélange homogène. Elle comprend deux étapes :",
        ],
        puces: [
          "l'ébullition : le solvant part en vapeur, le soluté reste dans le récipient ;",
          "la condensation : la vapeur, refroidie dans un tube, redevient liquide pur recueilli à part.",
        ],
      },
      {
        titre: "3. Quelle technique pour quel mélange ?",
        puces: [
          "Mélange hétérogène solide-liquide : décantation puis filtration.",
          "Liquides non miscibles : décantation.",
          "Soluté dissous (mélange homogène) : évaporation (pour le soluté) ou distillation (pour les deux).",
        ],
        paras: [],
      },
    ],
    saisTu: [
      "L'alambic des distillateurs d'huiles essentielles fonctionne exactement comme notre distillation : à Ambanja et sur la côte Est, on distille l'ylang-ylang, le girofle et le ravintsara ! La vapeur d'eau entraîne les parfums de la plante, puis se condense dans un serpentin refroidi : on recueille l'huile essentielle qui flotte sur l'eau (décantation finale !).",
    ],
    experience: [
      "Fais réapparaître le sel :",
      "1. Dissous une cuillerée de sel dans un demi-verre d'eau.",
      "2. Verse la solution dans une assiette plate.",
      "3. Pose l'assiette au soleil, près d'une fenêtre, pendant 2 à 3 jours.",
      "4. Observe les cristaux blancs qui apparaissent : le sel n'avait jamais disparu !",
    ],
  },
  substitutions: [
    { officiel: "Appareil de distillation en verre", local: "Marmite couverte + verre froid tenu au-dessus de la vapeur (démonstration prudente)" },
    { officiel: "Plaque chauffante", local: "Réchaud, fatapera (manipulé par l'adulte)" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. L'évaporation fait partir :  a) le soluté   b) le solvant   c) tout le mélange",
        "2. Dans les salines, le sel réapparaît grâce à :  a) la filtration   b) l'évaporation   c) la décantation",
        "3. La condensation transforme :  a) l'eau en vapeur   b) la vapeur en liquide   c) le sel en cristaux",
        "4. Pour récupérer l'eau ET le sel, on utilise :  a) la distillation   b) l'évaporation   c) la filtration",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "le solvant", cle: true }, { text: "." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "l'évaporation", cle: true }, { text: " au soleil." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "la vapeur en liquide", cle: true }, { text: "." }],
        [{ text: "4. Réponse a) : ", bold: true }, { text: "la distillation", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Le sel s'évapore avec l'eau quand on chauffe l'eau salée.",
        "2. L'eau distillée est de l'eau pure.",
        "3. L'évaporation est plus rapide au soleil et au vent.",
        "4. La distillation ne comporte qu'une seule étape.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : seule l'eau part en vapeur, le sel reste." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : deux étapes, ébullition puis condensation." }],
      ],
    },
    {
      points: 6,
      consigne: "Associe chaque mélange à la technique de séparation la plus adaptée (décantation, filtration, évaporation, distillation) :",
      items: [
        "1. Eau + sable.",
        "2. Eau de mer, pour récolter le sel.",
        "3. Eau + huile.",
        "4. Eau salée, pour obtenir de l'eau potable en mer.",
        "5. Thé avec ses feuilles.",
        "6. Eau sucrée, pour faire réapparaître le sucre.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Filtration", cle: true }, { text: " (ou décantation puis filtration)." }],
        [{ text: "2. " }, { text: "Évaporation", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Décantation", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "Distillation", cle: true }, { text: "." }],
        [{ text: "5. " }, { text: "Filtration", cle: true }, { text: " (passoire)." }],
        [{ text: "6. " }, { text: "Évaporation", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Observe la figure 7 (la distillation), puis réponds :",
      items: [
        "1. Que se passe-t-il dans le ballon chauffé ?",
        "2. Que se passe-t-il dans le tube incliné ?",
        "3. Que reste-t-il dans le ballon à la fin ? Que recueille-t-on dans le récipient ?",
      ],
      corrige: [
        [{ text: "1. L'eau salée bout : " }, { text: "l'eau part en vapeur, le sel reste", cle: true }, { text: "." }],
        [{ text: "2. La vapeur " }, { text: "se refroidit et se condense en gouttelettes", cle: true }, { text: " qui coulent vers le récipient." }],
        [{ text: "3. Dans le ballon : " }, { text: "le sel cristallisé", cle: true }, { text: " ; dans le récipient : " }, { text: "l'eau pure distillée", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S8 = {
  numero: 8, total: 34, unite: "I", theme: "Matière",
  titre: "Séparer un mélange : tamisage et pressage",
  objectif: "expliquer les principes du tamisage et du pressage et de choisir la technique de séparation adaptée à un mélange donné",
  documentation: DOC,
  support: "Tamis ou passoire, mélange sable + gravier, riz avec impuretés, fruits juteux (orange, citron), presse-agrumes ou mains, tissu",
  image: "images/img_seance08.png",
  imageLegende: "Figure 8 — Le tamisage sépare selon la taille ; le pressage extrait le liquide",
  revision: {
    qa: [
      { q: "Quelle technique sépare le sel de l'eau en le récupérant ?", ra: "L'évaporation (le sel cristallise)." },
      { q: "Que récupère la distillation ?", ra: "Le solvant pur (condensé) et le soluté (resté dans le récipient)." },
      { q: "Rappelle les techniques déjà étudiées.", ra: "Décantation, filtration, évaporation, distillation." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Avant de cuire le riz, Bao le secoue dans le sahafa (van) et le passe au tamis pour enlever les petites pierres et les balles. Et pour le jus du déjeuner, elle presse fortement les oranges au-dessus d'un bol.",
      "Quels gestes de séparation Bao utilise-t-elle ?",
      "R.A. : Le tamisage pour trier le riz, le pressage pour extraire le jus.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée", support: "Tamis, sahafa",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Le tamisage et le pressage ». Après cette séance, vous serez capables d'expliquer ces deux techniques et de choisir, parmi les six techniques étudiées, celle qui convient à un mélange donné.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : je verse ce mélange de sable et de gravier dans le tamis et je secoue au-dessus de la bassine. Où va le sable ? Où reste le gravier ? Maintenant, je presse cette moitié d'orange au-dessus du bol : que recueille-t-on ? Que reste-t-il dans la main ?",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Tamis, sable, gravier, orange, bol",
  },
  analyse: {
    qa: [
      { q: "Que laisse passer le tamis ? Que retient-il ?", ra: "Il laisse passer les grains plus petits que ses trous (sable) et retient les plus gros (gravier)." },
      { q: "Sur quelle propriété repose le tamisage ?", ra: "Sur la différence de taille des grains." },
      { q: "Quelle différence avec la filtration ?", ra: "Même principe, mais le tamisage sépare des solides entre eux ; le filtre, aux trous très fins, sépare un solide d'un liquide." },
      { q: "Que sépare le pressage ?", ra: "Un liquide contenu dans un solide : le jus sort, la pulpe reste." },
      { q: "Cite d'autres exemples de pressage.", ra: "La canne à sucre écrasée pour le jus, le coco râpé pressé pour le lait de coco, les graines pressées pour l'huile." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Expériences",
  },
  synthese: {
    enseignant: "Donc, le tamisage sépare les constituants solides d'un mélange selon la taille de leurs grains : les petits passent à travers les mailles du tamis, les gros sont retenus. Le pressage extrait un liquide contenu dans un solide en exerçant une forte pression : le jus de l'orange, le lait de coco, l'huile des graines. Nous connaissons maintenant six techniques de séparation : décantation, filtration, évaporation, distillation, tamisage et pressage : à chaque mélange sa technique !",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Choisis la technique adaptée (parmi les six) :",
      items: [
        "a) Séparer la farine des morceaux de son.",
        "b) Extraire le lait de coco du coco râpé.",
        "c) Séparer le gravier du sable de construction.",
        "d) Extraire le jus de la canne à sucre.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Tamisage", cle: true }, { text: " : la farine fine passe, le son reste." }],
        [{ text: "b) " }, { text: "Pressage", cle: true }, { text: " : on presse le coco râpé dans un tissu." }],
        [{ text: "c) " }, { text: "Tamisage", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Pressage", cle: true }, { text: " : on écrase la canne." }],
      ],
    },
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Le tamisage sépare selon la taille des grains.",
        "b) Le pressage sert à séparer deux solides.",
        "c) Le tamis retient les gros éléments.",
        "d) On peut extraire l'huile d'arachide par pressage.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : il extrait un liquide d'un solide." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: " : on presse les graines." }],
      ],
    },
  ],
  applicationTechnique: "Travail de groupe", applicationSupport: "Tamis, mélanges, ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : liquide – taille – tamisage – pressage – retient – pression.",
      items: [
        "a) Le ……… sépare des solides selon la ……… de leurs grains : le tamis ……… les plus gros.",
        "b) Le ……… extrait un ……… d'un solide grâce à une forte ……… .",
      ],
      corrige: [
        [{ text: "a) Le " }, { text: "tamisage", cle: true }, { text: " sépare des solides selon la " }, { text: "taille", cle: true }, { text: " de leurs grains : le tamis " }, { text: "retient", cle: true }, { text: " les plus gros." }],
        [{ text: "b) Le " }, { text: "pressage", cle: true }, { text: " extrait un " }, { text: "liquide", cle: true }, { text: " d'un solide grâce à une forte " }, { text: "pression", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Récapitulons les six techniques ! Associe chaque mélange à SA technique :",
      items: [
        "a) Eau boueuse à clarifier sans matériel.",
        "b) Riz mêlé de sable fin.",
        "c) Eau salée → obtenir de l'eau pure.",
        "d) Café moulu dans l'eau chaude.",
        "e) Arachides grillées → huile.",
        "f) Eau de mer → récolter le sel.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Décantation", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Tamisage", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Distillation", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Filtration", cle: true }, { text: "." }],
        [{ text: "e) " }, { text: "Pressage", cle: true }, { text: "." }],
        [{ text: "f) " }, { text: "Évaporation", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["tamisage", "pressage", "taille des grains", "extraire"],
    sections: [
      {
        titre: "1. Le tamisage",
        paras: [
          "Le tamisage sépare les constituants solides d'un mélange selon la taille de leurs grains :",
        ],
        puces: [
          "les grains plus petits que les mailles passent à travers le tamis ;",
          "les grains plus gros sont retenus ;",
          "exemples : trier le riz, tamiser la farine, séparer sable et gravier sur les chantiers.",
        ],
      },
      {
        titre: "2. Le pressage",
        paras: [
          "Le pressage extrait un liquide contenu dans un solide en exerçant une forte pression :",
        ],
        puces: [
          "le jus d'orange ou de citron pressé ;",
          "le lait de coco pressé du coco râpé dans un tissu ;",
          "le jus de canne à sucre écrasée ;",
          "l'huile extraite des graines d'arachide ou de coco.",
        ],
      },
      {
        titre: "3. Le tableau des six techniques",
        puces: [
          "Décantation : différence de densité — eau boueuse, eau + huile.",
          "Filtration : filtre fin — solide dans un liquide.",
          "Évaporation : le solvant part, le soluté cristallise — salines.",
          "Distillation : ébullition + condensation — eau pure + sel.",
          "Tamisage : différence de taille — riz, farine, sable.",
          "Pressage : extraction d'un jus — agrumes, coco, canne.",
        ],
        paras: [],
      },
    ],
    saisTu: [
      "Dans les campagnes malgaches, la canne à sucre est pressée entre deux rouleaux de bois actionnés à la main ou par des zébus : le jus recueilli, bouilli puis évaporé, donne le sucre roux ! Un seul aliment, trois techniques de séparation : pressage, filtration, évaporation.",
    ],
    experience: [
      "Le grand tri du mélange mystère :",
      "1. Prépare un mélange : sable + gravier + sel + un peu d'eau (le sel se dissout !).",
      "2. Tamise d'abord : le gravier reste sur le tamis.",
      "3. Filtre à travers un tissu : le sable est retenu, l'eau salée passe.",
      "4. Verse l'eau salée dans une assiette au soleil : le sel réapparaît en quelques jours !",
      "5. Tu as utilisé trois techniques pour tout séparer. Champion !",
    ],
  },
  substitutions: [
    { officiel: "Tamis de laboratoire calibrés", local: "Passoire de cuisine, tamis à riz, sahafa, moustiquaire tendue" },
    { officiel: "Presse de laboratoire", local: "Presse-agrumes, mains fortes, tissu tordu" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Le tamisage sépare selon :  a) la densité   b) la taille des grains   c) la couleur",
        "2. Le pressage extrait :  a) un solide d'un liquide   b) un liquide d'un solide   c) un gaz",
        "3. Pour trier le riz des petites pierres, on utilise :  a) la distillation   b) le tamisage   c) l'évaporation",
        "4. Le lait de coco s'obtient par :  a) pressage   b) filtration   c) décantation",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "la taille des grains", cle: true }, { text: "." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "un liquide d'un solide", cle: true }, { text: "." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "le tamisage", cle: true }, { text: "." }],
        [{ text: "4. Réponse a) : ", bold: true }, { text: "le pressage", cle: true }, { text: " du coco râpé." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Le tamis laisse passer les gros grains et retient les petits.",
        "2. Presser une orange est une technique de séparation.",
        "3. Le tamisage peut séparer le sel dissous de l'eau.",
        "4. Le sahafa (van) du riz fait un tri comme le tamis.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : c'est l'inverse, les petits passent et les gros restent." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: " : le pressage sépare le jus de la pulpe." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : le sel dissous n'est pas un grain ; il faut l'évaporation." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: " : il sépare le riz de ses impuretés." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : pressage – mailles – tamisage – jus – gros – pression.",
      items: [
        "Le ……… utilise un tamis : les grains plus petits que les ……… passent, les plus ……… restent. Le ……… utilise une forte ……… pour extraire le ……… d'un fruit ou d'une graine.",
      ],
      corrige: [
        [{ text: "Le " }, { text: "tamisage", cle: true }, { text: " utilise un tamis : les grains plus petits que les " }, { text: "mailles", cle: true }, { text: " passent, les plus " }, { text: "gros", cle: true }, { text: " restent. Le " }, { text: "pressage", cle: true }, { text: " utilise une forte " }, { text: "pression", cle: true }, { text: " pour extraire le " }, { text: "jus", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Le grand défi des six techniques ! Un mélange contient : de l'eau, du sel dissous, du sable et des graviers. Décris les étapes, dans l'ordre, pour séparer les quatre constituants.",
      items: [],
      corrige: [
        [{ text: "1. " }, { text: "Tamisage", cle: true }, { text: " : les graviers restent sur le tamis." }],
        [{ text: "2. " }, { text: "Filtration", cle: true }, { text: " (ou décantation puis filtration) : le sable est retenu par le filtre." }],
        [{ text: "3. " }, { text: "Évaporation ou distillation", cle: true }, { text: " de l'eau salée : le sel cristallise ; avec la distillation, on récupère aussi " }, { text: "l'eau pure", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S9 = {
  numero: 9, total: 34, unite: "I", theme: "Matière",
  titre: "Les transformations physiques",
  objectif: "identifier une transformation physique et de montrer que la matière reste la même pendant cette transformation",
  documentation: DOC,
  support: "Glaçons, bougie (cire), feuille de papier à plier et découper, craie à écraser, sel et eau, verre",
  image: "images/img_seance09.png",
  imageLegende: "Figure 9 — Glace, eau liquide, vapeur : la matière eau reste la même",
  revision: {
    qa: [
      { q: "Cite les six techniques de séparation étudiées.", ra: "Décantation, filtration, évaporation, distillation, tamisage, pressage." },
      { q: "Quelle technique choisir pour l'eau salée si l'on veut le sel ?", ra: "L'évaporation." },
      { q: "Le sel dissous a-t-il changé de nature dans l'eau ?", ra: "Non : il est toujours là, on le récupère intact par évaporation." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Le matin, Fitia sort un glaçon du congélateur et le pose dans un verre : à midi, il est devenu de l'eau ; et l'eau du linge mouillé étendu au soleil disparaît dans l'air. Le soir, la vapeur de la marmite redevient des gouttelettes sur le couvercle froid.",
      "L'eau qui change ainsi d'état devient-elle une autre matière ?",
      "R.A. : Non, c'est toujours de l'eau : glace, liquide ou vapeur.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Les transformations physiques ». Après cette séance, vous serez capables d'identifier une transformation physique et d'expliquer pourquoi la matière reste la même.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien ces quatre expériences : je fais fondre un glaçon dans ma main ; je plie puis découpe cette feuille de papier ; j'écrase ce morceau de craie en poudre ; je dissous ce sel dans l'eau. Dans chaque cas, demandez-vous : la matière a-t-elle changé de nature ?",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Glaçon, papier, craie, sel, eau",
  },
  analyse: {
    qa: [
      { q: "Le glaçon fondu est-il toujours de l'eau ?", ra: "Oui : il a changé d'état, pas de nature." },
      { q: "Le papier plié ou découpé est-il toujours du papier ?", ra: "Oui : sa forme a changé, pas sa matière." },
      { q: "La craie écrasée est-elle toujours de la craie ?", ra: "Oui : elle est en poudre, mais c'est la même matière (fragmentation)." },
      { q: "Le sel dissous est-il toujours du sel ?", ra: "Oui : la preuve, on le récupère par évaporation." },
      { q: "Qu'ont en commun toutes ces transformations ?", ra: "Aucune nouvelle substance n'apparaît : la matière reste la même." },
      { q: "Ces transformations sont-elles réversibles ?", ra: "Souvent oui : l'eau regèle, le sel recristallise ; mais pas toujours (papier découpé)." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Les quatre expériences",
  },
  synthese: {
    enseignant: "Donc, une transformation physique est une transformation au cours de laquelle la matière change de forme, d'état ou d'aspect, mais reste la même substance : aucune nouvelle matière n'apparaît. Les changements d'état (fusion, solidification, vaporisation, liquéfaction), les déformations (pliage, dilatation, compression), la fragmentation (écrasement) et la dissolution sont des transformations physiques. Beaucoup sont réversibles : on peut revenir en arrière.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Ces transformations sont-elles physiques ? Justifie :",
      items: [
        "a) La glace qui fond au soleil.",
        "b) Une barre de fer que l'on plie.",
        "c) Du sucre dissous dans le thé.",
        "d) Une assiette cassée en morceaux.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Oui : changement d'état", cle: true }, { text: ", l'eau reste de l'eau." }],
        [{ text: "b) " }, { text: "Oui : déformation", cle: true }, { text: ", le fer reste du fer." }],
        [{ text: "c) " }, { text: "Oui : dissolution", cle: true }, { text: ", le sucre reste du sucre (le goût le prouve)." }],
        [{ text: "d) " }, { text: "Oui : fragmentation", cle: true }, { text: ", chaque morceau est toujours de la même matière." }],
      ],
    },
    {
      consigne: "Nomme le changement d'état :",
      items: [
        "a) La glace devient liquide.",
        "b) L'eau liquide devient vapeur.",
        "c) La vapeur devient liquide.",
        "d) L'eau liquide devient glace.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "La fusion", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "La vaporisation", cle: true }, { text: " (évaporation ou ébullition)." }],
        [{ text: "c) " }, { text: "La liquéfaction", cle: true }, { text: " (condensation)." }],
        [{ text: "d) " }, { text: "La solidification", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : substance – physique – état – forme – nouvelle – réversible.",
      items: [
        "a) Une transformation ……… change la ………, l'……… ou l'aspect de la matière.",
        "b) Aucune ……… substance n'apparaît : la ……… reste la même.",
        "c) La fusion de la glace est ……… : l'eau peut regeler.",
      ],
      corrige: [
        [{ text: "a) Une transformation " }, { text: "physique", cle: true }, { text: " change la " }, { text: "forme", cle: true }, { text: ", l'" }, { text: "état", cle: true }, { text: " ou l'aspect de la matière." }],
        [{ text: "b) Aucune " }, { text: "nouvelle", cle: true }, { text: " substance n'apparaît : la " }, { text: "substance", cle: true }, { text: " reste la même." }],
        [{ text: "c) La fusion de la glace est " }, { text: "réversible", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Donne la définition d'une transformation physique.",
        "b) Cite les quatre familles de transformations physiques avec un exemple chacune.",
        "c) Comment prouver que le sel dissous est toujours du sel ?",
        "d) Le riz écrasé en farine a-t-il subi une transformation physique ? Justifie.",
      ],
      corrige: [
        [{ text: "a) Une transformation où la matière change de forme ou d'état " }, { text: "sans devenir une nouvelle substance", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Changement d'état (fusion de la glace), déformation (pliage du fer), fragmentation (craie écrasée), dissolution (sel dans l'eau)", cle: true }, { text: "." }],
        [{ text: "c) En " }, { text: "évaporant l'eau : le sel réapparaît intact", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Oui : c'est une fragmentation", cle: true }, { text: " ; la farine est toujours du riz." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["transformation physique", "changement d'état", "déformation", "fragmentation", "dissolution", "réversible"],
    sections: [
      {
        titre: "1. Qu'est-ce qu'une transformation physique ?",
        paras: [
          "Une transformation physique est un processus au cours duquel la forme, l'état ou l'aspect d'une substance change, sans que la substance elle-même change : aucune nouvelle matière n'apparaît.",
        ],
      },
      {
        titre: "2. Les quatre familles de transformations physiques",
        sousSections: [
          {
            titre: "a. Les changements d'état",
            puces: [
              "Fusion : solide → liquide (la glace fond).",
              "Solidification : liquide → solide (l'eau gèle).",
              "Vaporisation : liquide → gaz (l'eau bout ou s'évapore).",
              "Liquéfaction (condensation) : gaz → liquide (la buée sur le couvercle).",
            ],
            paras: [],
          },
          {
            titre: "b. Les déformations",
            paras: ["Pliage, étirement, compression, dilatation : la forme change, la matière reste. Exemple : le fer plié du forgeron reste du fer."],
          },
          {
            titre: "c. La fragmentation",
            paras: ["Casser, écraser, moudre : la craie en poudre reste de la craie, le riz moulu reste du riz."],
          },
          {
            titre: "d. La dissolution",
            paras: ["Le sel dissous dans l'eau reste du sel : l'évaporation le fait réapparaître."],
          },
        ],
      },
      {
        titre: "3. Des transformations souvent réversibles",
        paras: [
          "Beaucoup de transformations physiques sont réversibles : l'eau gelée peut refondre, le sel dissous recristalliser, le fil de fer se déplier. Certaines ne le sont pas en pratique (le papier découpé), mais la matière n'a quand même pas changé de nature.",
        ],
      },
    ],
    saisTu: [
      "Le cycle de l'eau est une gigantesque suite de transformations physiques : l'eau des océans s'évapore au soleil, la vapeur se condense en nuages, la pluie tombe sur les montagnes, les rivières retournent à la mer… Depuis des milliards d'années, c'est toujours la même eau qui tourne : celle que tu bois a peut-être désaltéré un dinosaure !",
    ],
    experience: [
      "Le voyage aller-retour de l'eau :",
      "1. Remplis un petit sac plastique transparent d'un fond d'eau, ferme-le bien.",
      "2. Scotche-le sur une fenêtre ensoleillée.",
      "3. Observe pendant la journée : des gouttelettes se forment en haut du sac (évaporation puis condensation).",
      "4. L'eau monte et redescend sans jamais quitter le sac : un mini cycle de l'eau !",
    ],
  },
  substitutions: [
    { officiel: "Plaque chauffante et cristallisoir", local: "Soleil de la fenêtre, assiette, marmite (avec un adulte)" },
    { officiel: "Mortier et pilon de laboratoire", local: "Pilon à riz (leona) ou cuillère et bol solide" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Dans une transformation physique :  a) une nouvelle substance apparaît   b) la matière reste la même   c) la matière disparaît",
        "2. Le passage solide → liquide s'appelle :  a) la fusion   b) la solidification   c) la vaporisation",
        "3. Écraser de la craie est :  a) une fragmentation   b) une dissolution   c) une combustion",
        "4. La buée sur un couvercle froid est :  a) une évaporation   b) une liquéfaction   c) une fusion",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "la matière reste la même", cle: true }, { text: "." }],
        [{ text: "2. Réponse a) : ", bold: true }, { text: "la fusion", cle: true }, { text: "." }],
        [{ text: "3. Réponse a) : ", bold: true }, { text: "une fragmentation", cle: true }, { text: "." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "une liquéfaction (condensation)", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. La glace et la vapeur d'eau sont deux matières différentes.",
        "2. Plier un fil de fer est une transformation physique.",
        "3. La dissolution du sucre crée une nouvelle substance.",
        "4. Beaucoup de transformations physiques sont réversibles.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : c'est la même eau dans deux états différents." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: " : déformation, le fer reste du fer." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : le sucre est toujours là, dissous et invisible." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Nomme la famille de chaque transformation physique (changement d'état, déformation, fragmentation, dissolution) :",
      items: [
        "1. Le beurre fond dans la poêle.",
        "2. On pile le riz pour faire de la farine.",
        "3. Le sucre disparaît dans le café chaud.",
        "4. Le forgeron aplatit une barre de fer rouge.",
        "5. La rosée se forme sur l'herbe au petit matin.",
        "6. L'eau du lac gèle en hiver à Antsirabe.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Changement d'état (fusion)", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Fragmentation", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Dissolution", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "Déformation", cle: true }, { text: "." }],
        [{ text: "5. " }, { text: "Changement d'état (liquéfaction)", cle: true }, { text: "." }],
        [{ text: "6. " }, { text: "Changement d'état (solidification)", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Observe la figure 9, puis réponds :",
      items: [
        "1. Nomme les deux changements d'état représentés par les flèches.",
        "2. Pourquoi dit-on que la matière n'a pas changé au long de cette chaîne ?",
        "3. Complète la chaîne : quels changements d'état permettraient de revenir de la vapeur à la glace ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "La fusion (glace → eau) et la vaporisation (eau → vapeur)", cle: true }, { text: "." }],
        [{ text: "2. Parce que glace, liquide et vapeur sont " }, { text: "trois états de la même substance : l'eau", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "La liquéfaction (vapeur → eau) puis la solidification (eau → glace)", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S10 = {
  numero: 10, total: 34, unite: "I", theme: "Matière",
  titre: "Les transformations chimiques",
  objectif: "identifier une transformation chimique et de la distinguer d'une transformation physique",
  documentation: DOC,
  support: "Bougie, allumettes, morceau de papier, clous rouillés et clous neufs, vinaigre, bicarbonate ou cendre, eau de chaux si disponible",
  image: "images/img_seance10.png",
  imageLegende: "Figure 10 — Combustion et rouille : de nouvelles substances apparaissent",
  revision: {
    qa: [
      { q: "Qu'est-ce qu'une transformation physique ?", ra: "Une transformation où la matière change de forme ou d'état sans changer de nature." },
      { q: "Cite les quatre familles de transformations physiques.", ra: "Changements d'état, déformations, fragmentation, dissolution." },
      { q: "Le sucre dissous a-t-il changé de nature ?", ra: "Non : il est intact, dispersé dans l'eau." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Le vélo de Naivo est resté dehors toute la saison des pluies : son guidon brillant s'est couvert de plaques brunes de rouille qui s'effritent. Et ce matin, le papier qu'il a brûlé pour allumer le feu est devenu une cendre noire et légère.",
      "Le fer rouillé est-il encore du fer ? Le papier brûlé est-il encore du papier ?",
      "R.A. : Non : la rouille et la cendre sont des matières nouvelles, différentes.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Clous rouillés",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Les transformations chimiques ». Après cette séance, vous serez capables d'identifier une transformation chimique, de citer ses signes, et de la distinguer d'une transformation physique.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : je fais brûler ce petit morceau de papier dans l'assiette : que devient-il ? Comparez ce clou neuf et ce clou rouillé : même matière ? Je verse maintenant du vinaigre sur la cendre : qu'observe-t-on ? (Il se forme des bulles.)",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Papier, allumettes, clous, vinaigre, cendre",
  },
  analyse: {
    qa: [
      { q: "Que devient le papier brûlé ?", ra: "De la cendre noire, de la fumée et des gaz : des substances nouvelles." },
      { q: "Peut-on retransformer la cendre en papier ?", ra: "Non : la transformation est irréversible." },
      { q: "La rouille est-elle du fer ?", ra: "Non : c'est une nouvelle substance, brune et friable, formée par le fer, l'air et l'humidité." },
      { q: "Que montrent les bulles quand le vinaigre touche la cendre ?", ra: "Qu'un gaz nouveau se forme : c'est le signe d'une transformation chimique." },
      { q: "Quelle est donc la grande différence avec une transformation physique ?", ra: "Dans une transformation chimique, de nouvelles substances apparaissent ; dans une transformation physique, la matière reste la même." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Expériences",
  },
  synthese: {
    enseignant: "Donc, une transformation chimique est une transformation au cours de laquelle des substances disparaissent et de nouvelles substances apparaissent. Exemples : la combustion (le papier ou la bougie brûlent et donnent cendres, fumées et gaz), l'oxydation (le fer rouille), la précipitation (l'eau de chaux se trouble au contact du dioxyde de carbone), la neutralisation (le vinaigre qui mousse sur la cendre ou neutralise la soude). Les signes d'une transformation chimique : changement de couleur, dégagement de gaz, apparition d'un solide, production de chaleur ou de lumière. Attention : la combustion est dangereuse : on ne joue jamais avec le feu.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Transformation physique ou chimique ? Justifie :",
      items: [
        "a) La bougie qui fond près de la flamme.",
        "b) La mèche de la bougie qui brûle.",
        "c) Le clou qui rouille.",
        "d) Le clou que l'on plie.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Physique : fusion de la cire", cle: true }, { text: ", la cire fondue reste de la cire." }],
        [{ text: "b) " }, { text: "Chimique : combustion", cle: true }, { text: ", il se forme des gaz et de la fumée." }],
        [{ text: "c) " }, { text: "Chimique : oxydation", cle: true }, { text: ", la rouille est une substance nouvelle." }],
        [{ text: "d) " }, { text: "Physique : déformation", cle: true }, { text: ", le fer reste du fer." }],
      ],
    },
    {
      consigne: "Cite le signe de transformation chimique observé :",
      items: [
        "a) L'eau de chaux devient blanche et trouble.",
        "b) Le vinaigre versé sur la cendre produit des bulles.",
        "c) Le bois qui brûle éclaire et chauffe.",
        "d) Le fer brillant devient brun.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Apparition d'un solide (précipité)", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Dégagement d'un gaz", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Production de chaleur et de lumière", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Changement de couleur", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : nouvelles – chimique – combustion – rouille – disparaissent – oxydation.",
      items: [
        "a) Dans une transformation ………, des substances ……… et de ……… substances apparaissent.",
        "b) La ……… du papier et l'……… du fer (la ………) sont des transformations chimiques.",
      ],
      corrige: [
        [{ text: "a) Dans une transformation " }, { text: "chimique", cle: true }, { text: ", des substances " }, { text: "disparaissent", cle: true }, { text: " et de " }, { text: "nouvelles", cle: true }, { text: " substances apparaissent." }],
        [{ text: "b) La " }, { text: "combustion", cle: true }, { text: " du papier et l'" }, { text: "oxydation", cle: true }, { text: " du fer (la " }, { text: "rouille", cle: true }, { text: ") sont des transformations chimiques." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Quelle est la différence essentielle entre transformation physique et transformation chimique ?",
        "b) Cite les quatre signes qui révèlent une transformation chimique.",
        "c) Pourquoi la fonte de la cire est-elle physique alors que la combustion de la mèche est chimique ?",
        "d) Cite deux dangers liés à la combustion et une précaution pour chacun.",
      ],
      corrige: [
        [{ text: "a) Physique : " }, { text: "la matière reste la même", cle: true }, { text: " ; chimique : " }, { text: "de nouvelles substances apparaissent", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Changement de couleur, dégagement de gaz, apparition d'un solide, production de chaleur ou de lumière", cle: true }, { text: "." }],
        [{ text: "c) La cire fondue " }, { text: "reste de la cire (fusion)", cle: true }, { text: " ; la mèche brûlée devient " }, { text: "cendres et gaz (nouvelles substances)", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "L'incendie : ne jamais laisser un feu sans surveillance ; les brûlures : manipuler les flammes avec un adulte", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["transformation chimique", "combustion", "oxydation", "précipitation", "neutralisation", "nouvelles substances"],
    sections: [
      {
        titre: "1. Qu'est-ce qu'une transformation chimique ?",
        paras: [
          "Une transformation chimique est une transformation au cours de laquelle des substances disparaissent et de nouvelles substances apparaissent. On ne peut généralement pas revenir en arrière.",
        ],
      },
      {
        titre: "2. Quatre exemples importants",
        puces: [
          "La combustion : le papier, le bois ou la bougie brûlent avec le dioxygène de l'air et donnent cendres, fumées et gaz (dont le dioxyde de carbone).",
          "L'oxydation : le fer exposé à l'air humide se couvre de rouille, substance brune et friable.",
          "La précipitation : l'eau de chaux limpide se trouble au contact du dioxyde de carbone : un solide blanc se forme.",
          "La neutralisation : un acide (vinaigre) neutralise une base (soude, cendre) : bulles et chaleur.",
        ],
        paras: [],
      },
      {
        titre: "3. Les signes d'une transformation chimique",
        puces: [
          "changement de couleur (fer → rouille brune) ;",
          "dégagement d'un gaz (bulles) ;",
          "apparition d'un solide (précipité) ;",
          "production de chaleur ou de lumière (flamme).",
        ],
        paras: [],
      },
      {
        titre: "4. Physique ou chimique : le test de la question",
        paras: [
          "Devant toute transformation, pose-toi LA question : « Une nouvelle substance est-elle apparue ? » Non → transformation physique. Oui → transformation chimique.",
          "Attention danger : les combustions dégagent chaleur et gaz. On ne fait jamais d'expérience avec le feu sans un adulte, loin de tout produit inflammable.",
        ],
      },
    ],
    saisTu: [
      "La cuisson du riz est une transformation chimique : les grains durs deviennent tendres et parfumés, et l'ampango (croûte dorée du fond de marmite) doit sa couleur et son goût à des réactions chimiques de brunissement. Impossible de « décuire » le riz : les transformations chimiques sont irréversibles !",
    ],
    experience: [
      "Le gaz mystérieux (avec un adulte) :",
      "1. Verse trois cuillères de vinaigre dans un verre.",
      "2. Ajoute une cuillère de bicarbonate de soude (ou de cendre tamisée).",
      "3. Observe l'effervescence : des bulles de gaz nouveau (dioxyde de carbone) s'échappent !",
      "4. Approche une allumette enflammée de l'ouverture (adulte !) : elle s'éteint, ce gaz ne permet pas la combustion.",
    ],
  },
  substitutions: [
    { officiel: "Eau de chaux", local: "Eau + chaux blanche de construction, filtrée et reposée" },
    { officiel: "Bicarbonate de laboratoire", local: "Bicarbonate alimentaire ou cendre de bois tamisée" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Dans une transformation chimique :  a) rien ne change   b) de nouvelles substances apparaissent   c) seule la forme change",
        "2. La rouille est :  a) du fer déformé   b) une nouvelle substance   c) du fer fondu",
        "3. La combustion d'une bougie concerne :  a) la cire qui fond   b) la mèche qui brûle   c) la bougie qui penche",
        "4. L'eau de chaux qui se trouble révèle :  a) le dioxygène   b) le dioxyde de carbone   c) la vapeur d'eau",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "de nouvelles substances apparaissent", cle: true }, { text: "." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "une nouvelle substance", cle: true }, { text: ", formée à partir du fer." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "la mèche qui brûle", cle: true }, { text: " : c'est la combustion." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "le dioxyde de carbone", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. On peut retransformer la cendre en papier.",
        "2. Le dégagement de bulles peut révéler une transformation chimique.",
        "3. La fonte du beurre est une transformation chimique.",
        "4. La combustion produit de la chaleur et de la lumière.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : la combustion est irréversible." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : c'est une fusion, transformation physique." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Classe ces transformations en deux colonnes (physique / chimique) : le riz qui cuit, la glace qui fond, le bois qui brûle, le sel qui se dissout, le clou qui rouille, le papier que l'on découpe.",
      items: [],
      corrige: [
        [{ text: "Physiques : ", bold: true }, { text: "la glace qui fond, le sel qui se dissout, le papier découpé", cle: true }, { text: "." }],
        [{ text: "Chimiques : ", bold: true }, { text: "le riz qui cuit, le bois qui brûle, le clou qui rouille", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Enquête. Vero allume une bougie et observe attentivement.",
      items: [
        "1. Quelle partie de la bougie subit une transformation physique ? Laquelle ? ",
        "2. Quelle partie subit une transformation chimique ? Quels en sont les signes ?",
        "3. Après une heure, la bougie est plus courte. Où est passée la matière disparue ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "La cire près de la flamme : elle fond (fusion)", cle: true }, { text: " puis se resolidifie en coulant." }],
        [{ text: "2. " }, { text: "La mèche et la cire vaporisée brûlent : flamme (lumière, chaleur)", cle: true }, { text: " et gaz produits." }],
        [{ text: "3. Elle est partie " }, { text: "dans l'air sous forme de gaz et de fumée", cle: true }, { text: " produits par la combustion." }],
      ],
    },
  ],
};

module.exports = { seances: [S1, S2, S3, S4, S5, S6, S7, S8, S9, S10] };
