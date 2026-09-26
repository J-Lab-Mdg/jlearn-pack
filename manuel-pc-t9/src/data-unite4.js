// data-unite4.js — T9 Unité IV : CHIMIE (séances 28 à 32)
const DOC = "Programme scolaire de la classe de 3e (T9) — Sciences Physiques (MEN Madagascar) ; manuel J-Learn";

const S28 = {
  numero: 28, total: 39, unite: "IV", theme: "Chimie",
  titre: "La mole ; masse molaire et volume molaire",
  objectif: "définir la mole et d'utiliser la masse molaire et le volume molaire dans des calculs simples",
  documentation: DOC,
  support: "Balance, sachets de riz, sel, sucre, eau, tableau des masses molaires, calculatrice",
  image: "images/img_seance28.png",
  imageLegende: "Figure 22 — La mole : un paquet de 6,02 × 10²³ entités ; sa masse est la masse molaire",
  revision: {
    qa: [
      { q: "Rappelle ce qu'est un atome ; une molécule.", ra: "L'atome est le grain de matière élémentaire ; la molécule est un assemblage d'atomes." },
      { q: "Qu'est-ce qu'un ion ?", ra: "Un atome (ou groupe d'atomes) qui a gagné ou perdu des électrons : il porte une charge." },
      { q: "Donne la formule de l'eau et du dioxyde de carbone.", ra: "H2O et CO2." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "À l'épicerie, on n'achète pas les grains de riz un par un : on demande un kapoaka ! De même, le marchand d'œufs compte par douzaines. Les chimistes ont le même problème : les atomes sont si petits qu'on ne peut ni les compter ni les peser un à un.",
      "Quel « paquet » les chimistes ont-ils inventé pour compter les atomes et les molécules ?",
      "R.A. : La mole : un paquet de 6,02 × 10²³ entités : et sa masse en grammes se lit dans le tableau des masses molaires.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Kapoaka, tableau",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La mole ». Après cette séance, vous serez capables de définir la mole, la masse molaire et le volume molaire, et de calculer n = m ÷ M.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien. 1) Un grain de riz pèse environ 0,02 g : impossible de peser UN atome, un milliard de milliards de fois plus léger ! 2) Convention des chimistes : la mole = 6,02 × 10²³ entités (atomes, molécules, ions) : le nombre d'Avogadro. 3) Le tableau des masses molaires atomiques : H : 1 g/mol ; C : 12 g/mol ; O : 16 g/mol ; Fe : 56 g/mol… 4) Pour une molécule, on additionne : M(H2O) = 2 × 1 + 16 = 18 g/mol : une mole d'eau, c'est 18 g : je les verse dans ce verre : à peine trois cuillères ! 5) Pour les gaz : dans les conditions normales, une mole occupe toujours 22,4 L : le volume molaire.",
    apprenants: "Observent, calculent des masses molaires avec le tableau.",
    technique: "Observation, calculs guidés", support: "Balance, verre d'eau, tableau",
  },
  analyse: {
    qa: [
      { q: "Définis la mole.", ra: "La quantité de matière contenant 6,02 × 10²³ entités (nombre d'Avogadro)." },
      { q: "Qu'est-ce que la masse molaire ?", ra: "La masse d'une mole, en grammes par mole (g/mol)." },
      { q: "Calcule M(CO2).", ra: "12 + 2 × 16 = 44 g/mol." },
      { q: "Qu'est-ce que le volume molaire des gaz ?", ra: "Le volume d'une mole de gaz : 22,4 L dans les conditions normales de température et de pression." },
      { q: "Comment calcule-t-on le nombre de moles ?", ra: "n = m ÷ M ; pour un gaz : n = V ÷ 22,4." },
    ],
    technique: "Questions-réponses", support: "Tableau",
  },
  synthese: {
    enseignant: "Donc, la mole est le « kapoaka » des chimistes : un paquet de 6,02 × 10²³ entités : atomes, molécules ou ions : ce nombre gigantesque est le nombre d'Avogadro. La masse molaire M est la masse d'une mole, en g/mol : elle se lit dans le tableau pour les atomes (H : 1 ; C : 12 ; O : 16 ; Fe : 56…) et s'additionne pour les molécules : M(H2O) = 18 g/mol ; M(CO2) = 44 g/mol. La formule clé : n = m ÷ M : le nombre de moles est la masse divisée par la masse molaire : et réciproquement m = n × M. Pour les gaz, merveille de simplicité : dans les conditions normales de température et de pression (0 °C, pression atmosphérique normale), une mole de N'IMPORTE QUEL gaz occupe 22,4 L : le volume molaire : d'où n = V ÷ 22,4. Ces outils serviront à toutes les séances de chimie : la mole est la monnaie d'échange des réactions !",
    apprenants: "Écoutent et recopient les formules.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Calcule les masses molaires : a) O2 ; b) CH4 ; c) NaCl (Na : 23 ; Cl : 35,5).",
      items: [],
      corrige: [
        [{ text: "a) 2 × 16 = " }, { text: "32 g/mol", cle: true }, { text: " ; b) 12 + 4 × 1 = " }, { text: "16 g/mol", cle: true }, { text: " ; c) 23 + 35,5 = " }, { text: "58,5 g/mol", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Combien de moles dans 90 g d'eau ? Quelle masse pour 3 moles de CO2 ?",
      items: [],
      corrige: [
        [{ text: "n = 90 ÷ 18 = " }, { text: "5 mol", cle: true }, { text: " ; m = 3 × 44 = " }, { text: "132 g", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, tableau des masses molaires",
  evaluation: [
    {
      consigne: "Complète : une mole contient ……… entités ; la masse molaire s'exprime en ……… ; n = ……… ÷ ……… ; une mole de gaz occupe ……… L dans les conditions normales.",
      items: [],
      corrige: [
        [{ text: "" }, { text: "6,02 × 10²³", cle: true }, { text: " ; en " }, { text: "g/mol", cle: true }, { text: " ; n = " }, { text: "m", cle: true }, { text: " ÷ " }, { text: "M", cle: true }, { text: " ; " }, { text: "22,4", cle: true }, { text: " L." }],
      ],
    },
    {
      consigne: "Quel volume occupent 2 moles de dioxygène dans les conditions normales ? Et quelle est leur masse ?",
      items: [],
      corrige: [
        [{ text: "V = 2 × 22,4 = " }, { text: "44,8 L", cle: true }, { text: " ; m = 2 × 32 = " }, { text: "64 g", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["mole", "nombre d'Avogadro", "masse molaire", "volume molaire", "n = m ÷ M"],
    sections: [
      {
        titre: "1. La mole",
        paras: [
          "Les atomes sont trop petits pour être comptés un à un : les chimistes les comptent par paquets. Une mole contient 6,02 × 10²³ entités (atomes, molécules ou ions) : c'est le nombre d'Avogadro.",
          "L'idée est la même qu'au marché : on ne compte pas les grains de riz un à un, on les vend au kapoaka ! La mole est le « kapoaka » du chimiste : un paquet toujours identique, assez gros pour être pesé.",
        ],
      },
      {
        titre: "2. La masse molaire",
        paras: [
          "La masse molaire M est la masse d'une mole, en g/mol. Masses molaires atomiques usuelles : H : 1 ; C : 12 ; N : 14 ; O : 16 ; Na : 23 ; S : 32 ; Cl : 35,5 ; Fe : 56 (g/mol). Pour une molécule, on additionne : M(H2O) = 18 g/mol.",
          "Méthode pour une molécule : écris la formule, compte chaque atome, multiplie et additionne. M(CO2) = 12 + 2 × 16 = 44 g/mol. Le triangle m / n·M donne les trois formules d'un coup d'œil.",
        ],
        puces: [
          "n = m ÷ M : nombre de moles ;",
          "m = n × M : masse correspondante.",
        ],
      },
      {
        titre: "3. Le volume molaire des gaz",
        paras: [
          "Dans les conditions normales de température et de pression, une mole de n'importe quel gaz occupe 22,4 L : n = V ÷ 22,4.",
          "Fait remarquable : 22,4 L valent pour TOUS les gaz : une mole de dioxygène, de méthane ou de CO2 occupe le même volume ! Attention : cette règle ne vaut que pour les gaz, jamais pour les liquides ni les solides.",
        ],
      },
      {
        titre: "4. Exemples résolus",
        paras: [
          "Exemple 1 — Combien de moles dans 9 g d'eau ? Et quelle masse pèsent 3 mol de sel NaCl ? Solution : M(H2O) = 2 × 1 + 16 = 18 g/mol : n = m ÷ M = 9 ÷ 18 = 0,5 mol. M(NaCl) = 23 + 35,5 = 58,5 g/mol : m = n × M = 3 × 58,5 = 175,5 g.",
          "Exemple 2 — Quel volume occupent 8 g de dioxygène O2 aux conditions normales ? Solution : M(O2) = 2 × 16 = 32 g/mol : n = 8 ÷ 32 = 0,25 mol : V = n × 22,4 = 0,25 × 22,4 = 5,6 L. Le chemin masse → moles → volume passe TOUJOURS par les moles : c'est la plaque tournante de la chimie !",
        ],
      },
    ],
    saisTu: [
      "6,02 × 10²³, c'est inimaginable : si toute la population de la Terre comptait un grain par seconde, jour et nuit, il faudrait plus de deux millions d'années pour compter une seule mole de grains de riz ! Et pourtant, une mole d'eau tient dans trois cuillères à soupe.",
      "Amedeo Avogadro, avocat italien devenu physicien, émit son hypothèse sur les gaz en 1811… et personne ne le crut pendant cinquante ans ! Le nombre qui porte son nom ne fut mesuré qu'après sa mort. Depuis 2019, il est même FIXÉ par définition : c'est lui qui définit la mole.",
    ],
    experience: [
      "Pèse une mole à la maison :",
      "Matériel : une balance de cuisine, un verre gradué, de l'eau, du sel, du sucre.",
      "Protocole : 1. Pèse 18 g d'eau (18 mL) : voilà UNE mole d'eau.",
      "2. Pèse 58,5 g de sel : une mole de NaCl.",
      "3. Pèse 342 g de sucre (saccharose) : encore une mole !",
      "4. Aligne les trois tas côte à côte et compare.",
      "Observation : trois tas de tailles très différentes : trois cuillères d'eau, une petite poignée de sel, un tiers de kilo de sucre : et pourtant le MÊME nombre de molécules dans chacun !",
      "Conclusion : la mole compte toujours 6,02 × 10²³ entités : c'est la masse molaire, propre à chaque espèce chimique, qui change d'un tas à l'autre.",
    ],
  },
  substitutions: [
    { officiel: "Balance de précision", local: "Balance de cuisine, balance de l'épicier" },
    { officiel: "Tableau périodique mural", local: "Tableau des masses molaires recopié au tableau (annexe du manuel)" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Calcule : a) M(NH3) (N : 14) ; b) n pour 88 g de CO2 ; c) m de 0,5 mol de Fe ; d) V de 3 mol de gaz aux conditions normales.",
      items: [],
      corrige: [
        [{ text: "a) 14 + 3 = " }, { text: "17 g/mol", cle: true }, { text: " ; b) 88 ÷ 44 = " }, { text: "2 mol", cle: true }, { text: " ; c) 0,5 × 56 = " }, { text: "28 g", cle: true }, { text: " ; d) 3 × 22,4 = " }, { text: "67,2 L", cle: true }, { text: ". (1 point par calcul)" }],
      ],
    },
    {
      points: 3,
      consigne: "Range dans l'ordre croissant du nombre de moles : 36 g d'eau ; 22 g de CO2 ; 64 g de dioxygène. Justifie par les calculs.",
      items: [],
      corrige: [
        [{ text: "Eau : 36 ÷ 18 = 2 mol ; CO2 : 22 ÷ 44 = 0,5 mol ; O2 : 64 ÷ 32 = 2 mol ; ordre : " }, { text: "CO2 (0,5) < eau = O2 (2 mol)", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "Un ballon contient 11,2 L de méthane CH4 aux conditions normales. Calcule le nombre de moles puis la masse de gaz.",
      items: [],
      corrige: [
        [{ text: "n = 11,2 ÷ 22,4 = " }, { text: "0,5 mol", cle: true }, { text: " ; m = 0,5 × 16 = " }, { text: "8 g", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S29 = {
  numero: 29, total: 39, unite: "IV", theme: "Chimie",
  titre: "L'équation-bilan ; la réaction fer + soufre",
  objectif: "écrire et d'équilibrer une équation-bilan et d'en tirer le bilan molaire puis massique",
  documentation: DOC,
  support: "Limaille de fer, fleur de soufre, aimant, tube à essai, brûleur ou bougie, tableau",
  image: "images/img_seance29.png",
  imageLegende: "Figure 23 — Fe + S → FeS : l'équation-bilan traduit la conservation des atomes",
  revision: {
    qa: [
      { q: "Qu'est-ce qu'une mole ?", ra: "Un paquet de 6,02 × 10²³ entités." },
      { q: "Rappelle M(Fe) et M(S).", ra: "56 g/mol et 32 g/mol." },
      { q: "Dans une réaction chimique, que deviennent les atomes ?", ra: "Ils se conservent : ils se réarrangent sans disparaître ni apparaître." },
    ],
    technique: "Questions-réponses orales", support: "Ardoise",
  },
  miseEnSituation: {
    enseignant: [
      "Le cuisinier suit sa recette : « pour 4 personnes : 2 kapoaka de riz, 1 de haricots ». Pour 8 personnes, il double tout ! Le chimiste aussi a ses recettes : mais comment savoir les bonnes proportions de fer et de soufre pour ne rien gaspiller ?",
      "Comment écrire la « recette » exacte d'une réaction chimique ?",
      "R.A. : Avec l'équation-bilan : Fe + S → FeS : elle donne les proportions en moles, donc en grammes.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « L'équation-bilan ». Après cette séance, vous serez capables d'écrire, d'équilibrer une équation-bilan et d'en tirer les bilans molaire et massique.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien. 1) Mélange de limaille de fer et de fleur de soufre : l'aimant retire encore le fer : simple mélange. 2) Je chauffe le mélange dans le tube : une incandescence se propage seule : réaction chimique ! 3) Le produit gris-noir n'est plus attiré par l'aimant : c'est un corps nouveau : le sulfure de fer FeS. 4) Écrivons : fer + soufre → sulfure de fer, puis avec les formules : Fe + S → FeS. 5) Comptons les atomes de chaque côté : 1 Fe, 1 S à gauche ; 1 Fe, 1 S dans FeS : l'équation est équilibrée : rien ne se perd !",
    apprenants: "Observent la réaction, comptent les atomes.",
    technique: "Expérimentation, écriture symbolique", support: "Tube, aimant, brûleur",
  },
  analyse: {
    qa: [
      { q: "À quoi reconnaît-on qu'une réaction chimique a eu lieu ?", ra: "Un corps nouveau apparaît : FeS n'a plus les propriétés du fer ni du soufre." },
      { q: "Qu'exprime une équation-bilan ?", ra: "La nature des réactifs et des produits, et la conservation des atomes." },
      { q: "Donne le bilan molaire de Fe + S → FeS.", ra: "1 mole de fer réagit avec 1 mole de soufre pour donner 1 mole de sulfure de fer." },
      { q: "Traduis-le en masses.", ra: "56 g de fer réagissent avec 32 g de soufre pour donner 88 g de FeS." },
      { q: "Vérifie la conservation de la masse.", ra: "56 + 32 = 88 : la masse totale se conserve." },
    ],
    technique: "Questions-réponses", support: "Tableau",
  },
  synthese: {
    enseignant: "Donc, l'équation-bilan est la recette exacte du chimiste. On l'écrit en trois temps : 1) en mots : fer + soufre → sulfure de fer ; 2) en formules : Fe + S → FeS ; 3) on vérifie l'équilibre : chaque sorte d'atome doit être en nombre égal des deux côtés : les atomes se conservent, ils se réarrangent seulement. L'équation livre alors ses bilans : bilan molaire : 1 mol de Fe + 1 mol de S → 1 mol de FeS ; bilan massique, avec les masses molaires : 56 g + 32 g → 88 g : et la masse totale se conserve (56 + 32 = 88 : rien ne se perd, rien ne se crée !). Pour les gaz, on peut aussi traduire en volumes avec 22,4 L par mole. Ces proportions sont impératives : avec 56 g de fer et 50 g de soufre, 18 g de soufre resteront sans réagir : comme le cuisinier, le chimiste respecte la recette !",
    apprenants: "Écoutent et recopient les trois bilans.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Équilibre les équations : a) C + O2 → … (dioxyde de carbone) ; b) H2 + O2 → H2O.",
      items: [],
      corrige: [
        [{ text: "a) C + O2 → " }, { text: "CO2 (déjà équilibrée)", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "2 H2 + O2 → 2 H2O", cle: true }, { text: " (4 H et 2 O de chaque côté)." }],
      ],
    },
    {
      consigne: "Quelle masse de soufre faut-il pour faire réagir exactement 28 g de fer ?",
      items: [],
      corrige: [
        [{ text: "28 g = 0,5 mol de Fe ; il faut 0,5 mol de S = 0,5 × 32 = " }, { text: "16 g de soufre", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, calcul posé",
  evaluation: [
    {
      consigne: "Complète : dans une réaction, les atomes se ……… ; l'équation-bilan de la réaction fer-soufre s'écrit ……… ; bilan massique : ……… g + ……… g → ……… g.",
      items: [],
      corrige: [
        [{ text: "Se " }, { text: "conservent (se réarrangent)", cle: true }, { text: " ; " }, { text: "Fe + S → FeS", cle: true }, { text: " ; " }, { text: "56", cle: true }, { text: " + " }, { text: "32", cle: true }, { text: " → " }, { text: "88", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "On chauffe 112 g de fer avec du soufre en excès. Quelle masse de FeS obtient-on ?",
      items: [],
      corrige: [
        [{ text: "112 g = 2 mol de Fe → 2 mol de FeS = 2 × 88 = " }, { text: "176 g de FeS", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["équation-bilan", "réactifs", "produits", "conservation des atomes", "bilan molaire", "bilan massique"],
    sections: [
      {
        titre: "1. La réaction fer + soufre",
        paras: [
          "Chauffé, le mélange de fer et de soufre s'embrase et donne un corps nouveau, le sulfure de fer FeS, qui n'est plus attiré par l'aimant : une réaction chimique a eu lieu.",
          "Avant chauffage, le mélange fer + soufre est encore séparable (l'aimant retire le fer) : après réaction, plus rien à séparer : un CORPS NOUVEAU est né, avec des propriétés nouvelles. C'est le critère sûr de la transformation chimique.",
        ],
      },
      {
        titre: "2. L'équation-bilan",
        paras: [
          "Elle s'écrit avec les formules : Fe + S → FeS. Elle doit être équilibrée : chaque sorte d'atome est en nombre égal des deux côtés, car les atomes se conservent (ils se réarrangent sans disparaître).",
          "Méthode d'équilibrage : 1) écris les formules correctes (on ne les modifie JAMAIS) ; 2) compte chaque sorte d'atome des deux côtés ; 3) ajuste uniquement les coefficients devant les formules ; 4) recompte pour vérifier.",
        ],
      },
      {
        titre: "3. Les bilans",
        paras: [],
        puces: [
          "bilan molaire : 1 mol Fe + 1 mol S → 1 mol FeS ;",
          "bilan massique : 56 g + 32 g → 88 g (la masse totale se conserve) ;",
          "pour un gaz : 1 mol = 22,4 L aux conditions normales (bilan volumique).",
        ],
      },
      {
        titre: "4. Exemples résolus",
        paras: [
          "Exemple 1 — Équilibre la combustion du carbone dans le dioxygène, puis établis le bilan massique pour 12 g de carbone. Solution : C + O2 → CO2 (déjà équilibrée : 1 C, 2 O de chaque côté). Bilan molaire : 1 mol C + 1 mol O2 → 1 mol CO2 ; bilan massique : 12 g + 32 g → 44 g. Vérification de la conservation : 12 + 32 = 44 ✔.",
          "Exemple 2 — On fait réagir 28 g de fer avec du soufre. Quelle masse de soufre faut-il, et quelle masse de FeS obtient-on ? Solution : n(Fe) = 28 ÷ 56 = 0,5 mol. L'équation Fe + S → FeS exige autant de moles de soufre : m(S) = 0,5 × 32 = 16 g ; et produit 0,5 mol de FeS : m(FeS) = 0,5 × 88 = 44 g. Contrôle : 28 + 16 = 44 g ✔ : Lavoisier est content !",
        ],
      },
    ],
    saisTu: [
      "« Rien ne se perd, rien ne se crée, tout se transforme » : la célèbre loi de conservation de la masse fut établie par Antoine Lavoisier vers 1785, à force de pesées d'une précision maniaque. Toute équation-bilan que tu équilibres rend hommage à sa balance !",
      "Les hauts fourneaux, les cimenteries et les usines d'engrais calculent leurs approvisionnements avec des équations-bilans géantes : combien de tonnes de minerai pour tant de tonnes de fer ? La question de ton exercice, multipliée par un million : même équation, mêmes proportions !",
    ],
    experience: [
      "La conservation en direct (avec un adulte) :",
      "Matériel : une balance de cuisine, un citron, du bicarbonate de soude, une petite bouteille, un ballon de baudruche.",
      "Protocole : 1. Pèse ensemble le citron et une cuillère de bicarbonate : note la masse totale.",
      "2. Dans la bouteille, verse le jus sur le bicarbonate et coiffe aussitôt du ballon.",
      "3. Repèse l'ensemble fermé pendant que ça mousse.",
      "4. Ouvre le ballon et repèse une dernière fois.",
      "Observation : ça mousse, le ballon gonfle (du CO2 se forme) ; fermé, la masse n'a PAS changé ; ouvert, la masse diminue : le gaz s'est échappé dans l'air.",
      "Conclusion : au cours d'une réaction chimique, les atomes se réarrangent sans disparaître : la masse se conserve tant que rien ne s'échappe : la balance de Lavoisier ne ment jamais.",
    ],
  },
  substitutions: [
    { officiel: "Limaille de fer et fleur de soufre", local: "Paille de fer fine (éponge métallique) ; soufre de la pharmacie/quincaillerie" },
    { officiel: "Bec Bunsen", local: "Bougie ou réchaud à charbon, tube tenu par une pince à linge en bois mouillée" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "a) Équilibre : … Fe + … O2 → … Fe3O4 (combustion vive du fer). b) Vérifie ton équilibre en comptant les atomes.",
      items: [],
      corrige: [
        [{ text: "a) " }, { text: "3 Fe + 2 O2 → Fe3O4", cle: true }, { text: " ; b) gauche : " }, { text: "3 Fe, 4 O", cle: true }, { text: " ; droite : " }, { text: "3 Fe, 4 O", cle: true }, { text: " : équilibrée. (2 + 2 points)" }],
      ],
    },
    {
      points: 3,
      consigne: "On veut préparer 44 g de sulfure de fer FeS. Calcule les masses de fer et de soufre nécessaires.",
      items: [],
      corrige: [
        [{ text: "44 g = 0,5 mol de FeS : il faut 0,5 mol de chaque : " }, { text: "28 g de fer", cle: true }, { text: " et " }, { text: "16 g de soufre", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "On mélange 56 g de fer et 40 g de soufre puis on chauffe. Quelle masse de soufre restera sans réagir ? Quelle masse de FeS obtient-on ?",
      items: [],
      corrige: [
        [{ text: "56 g Fe = 1 mol consomme 32 g de S : il reste " }, { text: "8 g de soufre", cle: true }, { text: " ; on obtient 1 mol de FeS = " }, { text: "88 g", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S30 = {
  numero: 30, total: 39, unite: "IV", theme: "Chimie",
  titre: "Les alcanes ; combustions complète et incomplète",
  objectif: "citer les premiers alcanes et de distinguer combustion complète et combustion incomplète",
  documentation: DOC,
  support: "Réchaud à gaz (butane), bougie, verre froid, eau de chaux, soucoupe, tableau",
  image: "images/img_seance30.png",
  imageLegende: "Figure 24 — Flamme bleue : combustion complète (CO2 + H2O) ; flamme jaune : incomplète (carbone et CO danger !)",
  revision: {
    qa: [
      { q: "Que faut-il pour qu'une combustion ait lieu ?", ra: "Un combustible, un comburant (le dioxygène) et une source de chaleur." },
      { q: "Comment identifie-t-on le dioxyde de carbone ?", ra: "Il trouble l'eau de chaux." },
      { q: "Rappelle M(C) et M(H).", ra: "12 g/mol et 1 g/mol." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Dans la cuisine, la flamme du réchaud à gaz est bien bleue. Mais quand le brûleur est encrassé, elle devient jaune, noircit le fond des marmites… et la radio répète : « N'utilisez jamais un réchaud dans une pièce fermée : danger de mort ! »",
      "Quel est ce gaz de cuisine, et pourquoi une flamme jaune est-elle dangereuse ?",
      "R.A. : C'est le butane, un alcane ; la flamme jaune signale une combustion incomplète qui produit du carbone et du monoxyde de carbone, gaz mortel.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Réchaud, tableau",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Les alcanes et leurs combustions ». Après cette séance, vous serez capables de citer les premiers alcanes et de distinguer combustion complète et incomplète.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien. 1) La famille des alcanes, formule générale CnH2n+2 : méthane CH4 (gaz des marais), éthane C2H6, propane C3H8, butane C4H10 (le gaz en bouteille). 2) Flamme bleue du réchaud bien réglé : je tiens un verre froid au-dessus : de la buée (eau !) ; l'eau de chaux se trouble (CO2 !) : combustion complète. 3) Je ferme un peu l'arrivée d'air : la flamme jaunit ; la soucoupe tenue dessus se couvre de noir de carbone : combustion incomplète. 4) Dans ce cas se forme aussi un gaz invisible et inodore : le monoxyde de carbone CO : le tueur silencieux.",
    apprenants: "Observent, testent buée et eau de chaux, notent la suie.",
    technique: "Expérimentation, tests d'identification", support: "Réchaud, verre, eau de chaux, soucoupe",
  },
  analyse: {
    qa: [
      { q: "Qu'est-ce qu'un alcane ?", ra: "Un hydrocarbure de formule générale CnH2n+2 : méthane, éthane, propane, butane…" },
      { q: "Quels produits donne la combustion complète ?", ra: "Du dioxyde de carbone et de l'eau ; la flamme est bleue." },
      { q: "Écris l'équation de la combustion complète du méthane.", ra: "CH4 + 2 O2 → CO2 + 2 H2O." },
      { q: "Que produit en plus la combustion incomplète ?", ra: "Du carbone (fumées noires) et du monoxyde de carbone CO ; la flamme est jaune." },
      { q: "Pourquoi le CO est-il si dangereux ?", ra: "Invisible et inodore, il se fixe sur le sang à la place du dioxygène : il asphyxie : d'où l'aération obligatoire." },
    ],
    technique: "Questions-réponses", support: "Tableau",
  },
  synthese: {
    enseignant: "Donc, les alcanes sont la famille d'hydrocarbures de formule CnH2n+2 : retenez les quatre premiers : méthane CH4, éthane C2H6, propane C3H8, butane C4H10 : le gaz de nos bouteilles. Leur combustion dépend de l'apport de dioxygène. Combustion complète (air abondant) : flamme bleue, produits : dioxyde de carbone et eau : CH4 + 2 O2 → CO2 + 2 H2O ; pour le butane : 2 C4H10 + 13 O2 → 8 CO2 + 10 H2O. Combustion incomplète (air insuffisant) : flamme jaune, dépôt de carbone (marmites noircies !) et surtout monoxyde de carbone CO : invisible, inodore, il prend dans le sang la place du dioxygène et tue silencieusement. Règles de sécurité absolues : flamme bleue = brûleur bien réglé ; toujours aérer la pièce ; jamais de réchaud ni de charbon dans une chambre fermée pour la nuit.",
    apprenants: "Écoutent et recopient les équations.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Donne la formule des alcanes : a) n = 1 ; b) n = 3 ; c) n = 5 (pentane).",
      items: [],
      corrige: [
        [{ text: "a) " }, { text: "CH4", cle: true }, { text: " ; b) " }, { text: "C3H8", cle: true }, { text: " ; c) " }, { text: "C5H12", cle: true }, { text: " (CnH2n+2)." }],
      ],
    },
    {
      consigne: "À quels signes reconnaît-on une combustion incomplète du butane ?",
      items: [],
      corrige: [
        [{ text: "" }, { text: "Flamme jaune", cle: true }, { text: ", " }, { text: "dépôt de noir de carbone", cle: true }, { text: " et production de " }, { text: "monoxyde de carbone CO", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète : formule générale des alcanes : ……… ; combustion complète : flamme ………, produits ……… et ……… ; incomplète : flamme ………, produits supplémentaires ……… et ……… .",
      items: [],
      corrige: [
        [{ text: "" }, { text: "CnH2n+2", cle: true }, { text: " ; flamme " }, { text: "bleue", cle: true }, { text: ", " }, { text: "CO2", cle: true }, { text: " et " }, { text: "H2O", cle: true }, { text: " ; flamme " }, { text: "jaune", cle: true }, { text: ", " }, { text: "carbone", cle: true }, { text: " et " }, { text: "CO", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Équilibre la combustion complète de l'éthane : … C2H6 + … O2 → … CO2 + … H2O.",
      items: [],
      corrige: [
        [{ text: "" }, { text: "2 C2H6 + 7 O2 → 4 CO2 + 6 H2O", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["alcane", "CnH2n+2", "butane", "combustion complète", "combustion incomplète", "monoxyde de carbone"],
    sections: [
      {
        titre: "1. La famille des alcanes",
        paras: [
          "Les alcanes sont des hydrocarbures (carbone + hydrogène) de formule générale CnH2n+2 : méthane CH4, éthane C2H6, propane C3H8, butane C4H10 (gaz en bouteille).",
          "La formule générale est une machine à fabriquer les formules : pour n = 5, C5H12 (pentane) ; pour n = 8, C8H18 (octane, dans l'essence). Vérifie toujours : deux fois le carbone plus deux !",
        ],
      },
      {
        titre: "2. La combustion complète",
        paras: [
          "Avec assez de dioxygène : flamme bleue ; produits : dioxyde de carbone et eau. Exemples : CH4 + 2 O2 → CO2 + 2 H2O ; 2 C4H10 + 13 O2 → 8 CO2 + 10 H2O.",
          "Pour équilibrer une combustion : 1) équilibre le carbone (autant de CO2 que de C) ; 2) équilibre l'hydrogène (H2O = moitié des H) ; 3) compte les O nécessaires et ajuste le O2 en dernier.",
        ],
      },
      {
        titre: "3. La combustion incomplète et ses dangers",
        paras: [
          "Si le dioxygène manque : flamme jaune, dépôt de carbone (suie) et monoxyde de carbone CO, gaz invisible et inodore qui se fixe sur le sang à la place du dioxygène : asphyxie mortelle.",
        ],
        puces: [
          "toujours aérer la pièce où brûle un réchaud ou un charbon ;",
          "flamme jaune + marmite noircie = brûleur à régler ;",
          "jamais de braises ni de réchaud dans une chambre fermée.",
        ],
      },
      {
        titre: "4. Exemples résolus",
        paras: [
          "Exemple 1 — Équilibre la combustion complète du propane C3H8. Solution : étape 1 : 3 carbones → 3 CO2 ; étape 2 : 8 hydrogènes → 4 H2O ; étape 3 : à droite, 3 × 2 + 4 × 1 = 10 atomes O, soit 5 O2. Équation : C3H8 + 5 O2 → 3 CO2 + 4 H2O. Recompte final : C : 3 = 3 ; H : 8 = 8 ; O : 10 = 10 ✔.",
          "Exemple 2 — La marmite de Voahangy noircit et la flamme du réchaud à gaz est jaune. Diagnostique et conseille. Solution : suie + flamme jaune = combustion INCOMPLÈTE : le brûleur manque de dioxygène (trous encrassés ou arrivée d'air mal réglée). Conseils : nettoyer le brûleur, rouvrir l'arrivée d'air jusqu'à la flamme bleue, et toujours aérer : le CO invisible accompagne souvent la suie visible !",
        ],
      },
    ],
    saisTu: [
      "Le méthane est aussi le « biogaz » : dans les digesteurs, les bouses de zébu et les déchets fermentent à l'abri de l'air et libèrent du CH4 que l'on brûle pour cuisiner ! Plusieurs villages malgaches s'éclairent et cuisinent déjà grâce à leurs zébus : l'énergie est dans la bouse.",
      "Le monoxyde de carbone est surnommé le « tueur silencieux » : sans couleur, sans odeur, il se fixe sur l'hémoglobine 200 fois mieux que le dioxygène ! Quelques pour cent dans l'air d'une pièce suffisent. Un seul réflexe sauve : AÉRER, toujours, partout où quelque chose brûle.",
    ],
    experience: [
      "La bougie détective (avec un adulte) :",
      "Matériel : une bougie, une soucoupe bien froide, un bocal, de l'eau de chaux (eau + chaux éteinte décantée), des allumettes (adulte).",
      "Protocole : 1. Tiens la soucoupe froide 2 secondes AU-DESSUS de la flamme.",
      "2. Tiens-la maintenant 2 secondes DANS la flamme jaune.",
      "3. Verse un fond d'eau de chaux dans le bocal et coiffe la bougie allumée.",
      "4. Interprète chaque indice.",
      "Observation : au-dessus : de la buée (eau de combustion) ; dans la flamme : un rond noir (carbone : combustion incomplète au cœur de la flamme) ; sous le bocal : la flamme meurt et l'eau de chaux se trouble (CO2).",
      "Conclusion : la bougie brûle comme un alcane : eau + CO2 en combustion complète, suie dès que l'air manque : trois preuves en trois gestes.",
    ],
  },
  substitutions: [
    { officiel: "Bec Bunsen à virole", local: "Réchaud à gaz de cuisine (on règle l'air en observant la flamme), bougie" },
    { officiel: "Eau de chaux de laboratoire", local: "Eau + chaux vive du bâtiment, décantée puis filtrée" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "QCM : 1. Le butane est : a) C3H8 b) C4H10 c) CH4. 2. Flamme bleue = combustion : a) complète b) incomplète c) impossible. 3. Le CO est dangereux car : a) il sent mauvais b) il est invisible, inodore et asphyxiant c) il explose toujours. 4. La suie est : a) du carbone b) de l'eau c) du CO2.",
      items: [],
      corrige: [
        [{ text: "1. " }, { text: "b", cle: true }, { text: " ; 2. " }, { text: "a", cle: true }, { text: " ; 3. " }, { text: "b", cle: true }, { text: " ; 4. " }, { text: "a", cle: true }, { text: ". (1 point par réponse)" }],
      ],
    },
    {
      points: 3,
      consigne: "On brûle complètement 0,5 mol de méthane. Écris l'équation puis calcule le volume de CO2 dégagé aux conditions normales.",
      items: [],
      corrige: [
        [{ text: "CH4 + 2 O2 → CO2 + 2 H2O ; 0,5 mol de CH4 donne 0,5 mol de CO2 = 0,5 × 22,4 = " }, { text: "11,2 L", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "Rédige un court message de prévention (3 phrases) contre le danger du monoxyde de carbone à la maison.",
      items: [],
      corrige: [
        [{ text: "Idées attendues : " }, { text: "aérer toujours la pièce où l'on cuisine", cle: true }, { text: " ; " }, { text: "ne jamais dormir avec un réchaud ou des braises allumés", cle: true }, { text: " ; " }, { text: "faire régler le brûleur si la flamme est jaune", cle: true }, { text: ". (1 point par idée)" }],
      ],
    },
  ],
};

const S31 = {
  numero: 31, total: 39, unite: "IV", theme: "Chimie",
  titre: "Les solutions aqueuses ; la concentration",
  objectif: "préparer une solution aqueuse et de calculer sa concentration massique et sa concentration molaire",
  documentation: DOC,
  support: "Sel, sucre, eau, bouteilles graduées, balance, cuillère, pile + ampoule (test de conduction)",
  image: "images/img_seance31.png",
  imageLegende: "Figure 25 — Soluté + solvant = solution ; Cm = m ÷ V et C = n ÷ V",
  revision: {
    qa: [
      { q: "Rappelle n = m ÷ M : que signifient les lettres ?", ra: "Nombre de moles = masse divisée par masse molaire." },
      { q: "Qu'est-ce qu'un ion ?", ra: "Un atome ou groupe d'atomes chargé électriquement." },
      { q: "M(NaCl) ?", ra: "23 + 35,5 = 58,5 g/mol." },
    ],
    technique: "Questions-réponses orales", support: "Ardoise",
  },
  miseEnSituation: {
    enseignant: [
      "À l'hôpital, la poche de sérum indique « NaCl 9 g/L » ; au centre de santé, on prépare la solution de réhydratation : « 6 cuillères de sucre, 1 de sel, 1 litre d'eau bouillie ». Trop concentré, danger ; trop dilué, inefficace !",
      "Comment exprimer avec précision la « force » d'une solution ?",
      "R.A. : Par sa concentration : massique Cm = m ÷ V en g/L, ou molaire C = n ÷ V en mol/L.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Étiquettes, tableau",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Les solutions aqueuses et la concentration ». Après cette séance, vous serez capables de préparer une solution et de calculer Cm et C.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien. 1) Je verse 5,85 g de sel dans l'eau : il disparaît : il s'est dissous ; le sel est le soluté, l'eau le solvant, l'ensemble une solution aqueuse ; je complète à 1 L : Cm = 5,85 g/L. 2) En moles : n = 5,85 ÷ 58,5 = 0,1 mol : C = 0,1 mol/L. 3) Test électrique : les fils dans l'eau salée : l'ampoule s'allume : la solution conduit : elle contient des ions Na+ et Cl− libérés par la dissolution ; l'eau sucrée, elle, ne conduit pas : le sucre se dissout en molécules neutres. 4) J'ajoute encore du sel, encore… au bout d'un moment, il ne se dissout plus : la solution est saturée.",
    apprenants: "Observent, pèsent, testent la conduction.",
    technique: "Expérimentation, mesures", support: "Balance, bouteille graduée, circuit test",
  },
  analyse: {
    qa: [
      { q: "Définis soluté, solvant, solution.", ra: "Le soluté est le corps dissous ; le solvant, le liquide qui dissout (l'eau) ; l'ensemble est la solution." },
      { q: "Définis la concentration massique.", ra: "Cm = m ÷ V : masse de soluté par litre de solution, en g/L." },
      { q: "Définis la concentration molaire.", ra: "C = n ÷ V : nombre de moles de soluté par litre, en mol/L." },
      { q: "Quelle relation lie Cm et C ?", ra: "Cm = C × M : la concentration massique est la molaire multipliée par la masse molaire." },
      { q: "Pourquoi l'eau salée conduit-elle le courant et pas l'eau sucrée ?", ra: "La dissolution du sel libère des ions (Na+ et Cl−) mobiles ; le sucre donne des molécules neutres." },
    ],
    technique: "Questions-réponses", support: "Tableau",
  },
  synthese: {
    enseignant: "Donc, dissoudre un soluté dans un solvant (l'eau) donne une solution aqueuse : limpide, mais pas forcément incolore, et qui peut être saturée si le soluté n'est plus accepté. Deux façons d'exprimer sa « force » : la concentration massique Cm = m ÷ V (grammes de soluté par litre de solution) et la concentration molaire C = n ÷ V (moles par litre) ; elles se convertissent par Cm = C × M. Exemple du sérum : 9 g/L de NaCl, soit C = 9 ÷ 58,5 ≈ 0,15 mol/L. Grande découverte du test électrique : certaines solutions conduisent le courant : ce sont les solutions ioniques : la dissolution y a libéré des ions mobiles : NaCl → Na+ + Cl− ; d'autres, comme l'eau sucrée, ne conduisent pas : molécules neutres. La conduction est donc le détecteur d'ions du chimiste : nous nous en servirons pour les acides et les bases !",
    apprenants: "Écoutent et recopient les formules.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "On dissout 20 g de sucre dans l'eau pour obtenir 0,5 L de solution. Calcule Cm.",
      items: [],
      corrige: [
        [{ text: "Cm = 20 ÷ 0,5 = " }, { text: "40 g/L", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Une solution de NaCl a C = 0,2 mol/L. Calcule sa concentration massique.",
      items: [],
      corrige: [
        [{ text: "Cm = C × M = 0,2 × 58,5 = " }, { text: "11,7 g/L", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, calcul posé",
  evaluation: [
    {
      consigne: "Complète : le corps dissous est le ……… ; l'eau est le ……… ; Cm = ……… ÷ ……… en g/L ; C = ……… ÷ ……… en mol/L ; Cm = C × ……… .",
      items: [],
      corrige: [
        [{ text: "Le " }, { text: "soluté", cle: true }, { text: " ; le " }, { text: "solvant", cle: true }, { text: " ; " }, { text: "m", cle: true }, { text: " ÷ " }, { text: "V", cle: true }, { text: " ; " }, { text: "n", cle: true }, { text: " ÷ " }, { text: "V", cle: true }, { text: " ; C × " }, { text: "M", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Le sérum physiologique contient 9 g de NaCl par litre. Calcule sa concentration molaire.",
      items: [],
      corrige: [
        [{ text: "C = Cm ÷ M = 9 ÷ 58,5 ≈ " }, { text: "0,15 mol/L", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["soluté", "solvant", "solution aqueuse", "concentration massique", "concentration molaire", "solution ionique"],
    sections: [
      {
        titre: "1. La solution aqueuse",
        paras: [
          "Dissoudre un soluté (solide, liquide ou gaz) dans le solvant eau donne une solution aqueuse. Quand l'eau n'accepte plus de soluté, la solution est saturée.",
        ],
      },
      {
        titre: "2. Les concentrations",
        paras: [
          "Bien lire les unités : Cm en g/L se calcule avec la masse ; C en mol/L avec le nombre de moles. Le pont entre les deux est la masse molaire : Cm = C × M : encore elle !",
        ],
        puces: [
          "concentration massique : Cm = m ÷ V, en g/L ;",
          "concentration molaire : C = n ÷ V, en mol/L ;",
          "conversion : Cm = C × M ;",
          "on note [X] la concentration molaire de l'espèce X : [Na+], [Cl−]…",
        ],
      },
      {
        titre: "3. Les solutions ioniques",
        paras: [
          "Une solution conduit le courant si la dissolution a libéré des ions mobiles : NaCl → Na+ + Cl− : solution ionique. L'eau sucrée, faite de molécules neutres, ne conduit pas : le test de conduction détecte les ions.",
          "Piège à éviter : « dissous » ne veut pas dire « ionique » ! Le sucre se dissout parfaitement mais reste en molécules neutres : sa solution ne conduit pas. Seule la présence d'IONS libres fait passer le courant.",
        ],
      },
      {
        titre: "4. Exemples résolus",
        paras: [
          "Exemple 1 — On dissout 11,7 g de NaCl dans 500 mL d'eau. Calcule Cm puis C (M = 58,5 g/mol). Solution : V = 0,5 L : Cm = 11,7 ÷ 0,5 = 23,4 g/L. n = 11,7 ÷ 58,5 = 0,2 mol : C = 0,2 ÷ 0,5 = 0,4 mol/L. Vérification par la conversion : Cm = C × M = 0,4 × 58,5 = 23,4 g/L ✔.",
          "Exemple 2 — Quelle masse de sucre (M = 342 g/mol) faut-il pour préparer 2 L de solution à 0,1 mol/L ? Cette solution conduira-t-elle le courant ? Solution : n = C × V = 0,1 × 2 = 0,2 mol : m = n × M = 0,2 × 342 = 68,4 g. Conduction : NON : le sucre se dissout en molécules neutres, sans ions : la lampe du test reste éteinte.",
        ],
      },
    ],
    saisTu: [
      "La solution de réhydratation orale (eau + sucre + sel aux bonnes concentrations) sauve chaque année des millions d'enfants atteints de diarrhée : l'OMS la classe parmi les plus grandes découvertes médicales du 20e siècle. Une simple question de concentration : la chimie qui sauve des vies, dans chaque foyer !",
      "L'eau de mer du canal de Mozambique contient environ 35 g de sels par litre : les salines de Toliara la concentrent au soleil, bassin après bassin, jusqu'à la saturation (360 g/L)… et le sel cristallise ! Les paludiers pilotent des concentrations sans le savoir : du g/L à ciel ouvert.",
    ],
    experience: [
      "Prépare une vraie SRO (solution de réhydratation) :",
      "Matériel : 1 L d'eau bouillie puis refroidie (bouteille graduée), du sucre, du sel, une cuillère à café, un récipient propre.",
      "Protocole : 1. Verse le litre d'eau exactement dans le récipient propre.",
      "2. Ajoute 6 cuillères à café rases de sucre (≈ 25 g) et 1/2 cuillère de sel (≈ 3 g) : remue jusqu'à dissolution complète.",
      "3. Calcule tes concentrations massiques.",
      "4. Goûte une gorgée : contrôle qualité !",
      "Observation : tout se dissout : la solution est limpide ; concentrations : sucre ≈ 25 g/L, sel ≈ 3 g/L ; au goût, « pas plus salée que les larmes » : exactement le contrôle des centres de santé.",
      "Conclusion : une concentration se prépare, se calcule et se contrôle : tu viens de fabriquer, avec la précision d'un chimiste, la solution qui sauve le plus de vies au monde.",
    ],
  },
  substitutions: [
    { officiel: "Fiole jaugée", local: "Bouteille d'eau minérale de 1 L ou 0,5 L (volume garanti)" },
    { officiel: "Balance de précision", local: "Cuillères étalonnées : 1 c. à café rase de sel ≈ 6 g ; de sucre ≈ 4 g" },
    { officiel: "Conductimètre", local: "Pile 4,5 V + ampoule + deux clous : test de conduction" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Calcule : a) Cm pour 30 g dans 2 L ; b) C pour 0,4 mol dans 0,5 L ; c) Cm d'une solution de NaCl à 0,3 mol/L ; d) n de soluté dans 2 L à 0,25 mol/L.",
      items: [],
      corrige: [
        [{ text: "a) " }, { text: "15 g/L", cle: true }, { text: " ; b) " }, { text: "0,8 mol/L", cle: true }, { text: " ; c) 0,3 × 58,5 = " }, { text: "17,55 g/L", cle: true }, { text: " ; d) 0,25 × 2 = " }, { text: "0,5 mol", cle: true }, { text: ". (1 point par calcul)" }],
      ],
    },
    {
      points: 3,
      consigne: "On dissout 11,7 g de NaCl dans l'eau pour obtenir 2 L de solution. Calcule Cm, puis C, puis [Na+].",
      items: [],
      corrige: [
        [{ text: "Cm = 11,7 ÷ 2 = " }, { text: "5,85 g/L", cle: true }, { text: " ; C = 5,85 ÷ 58,5 = " }, { text: "0,1 mol/L", cle: true }, { text: " ; NaCl → Na+ + Cl− donc [Na+] = " }, { text: "0,1 mol/L", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "L'eau sucrée ne conduit pas le courant, l'eau salée si. Explique la différence au niveau microscopique.",
      items: [],
      corrige: [
        [{ text: "Le sucre se dissout en " }, { text: "molécules neutres", cle: true }, { text: " ; le sel libère des " }, { text: "ions mobiles Na+ et Cl− qui transportent le courant", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S32 = {
  numero: 32, total: 39, unite: "IV", theme: "Chimie",
  titre: "Acides et bases : le pH ; la neutralisation",
  objectif: "classer une solution à l'aide du pH ou du BBT et d'interpréter la neutralisation d'un acide par une base",
  documentation: DOC,
  support: "Jus de citron, vinaigre, eau savonneuse, cendre, BBT ou jus de bougainvillée, papier pH si disponible, gobelets",
  image: "images/img_seance32.png",
  imageLegende: "Figure 26 — L'échelle de pH : acide (jaune au BBT), neutre (vert), basique (bleu) ; H+ + OH− → H2O",
  revision: {
    qa: [
      { q: "Qu'est-ce qu'une solution ionique ?", ra: "Une solution qui contient des ions mobiles : elle conduit le courant." },
      { q: "Que donne la dissolution de HCl dans l'eau ?", ra: "Des ions H+ et Cl− : l'acide chlorhydrique." },
      { q: "Et celle de NaOH ?", ra: "Des ions Na+ et OH− : la soude." },
    ],
    technique: "Questions-réponses orales", support: "Ardoise",
  },
  miseEnSituation: {
    enseignant: [
      "Le citron pique la langue, la cendre mêlée d'eau est douce et glissante comme le savon ; et quand l'estomac « brûle », on avale un comprimé basique qui calme tout. Acide contre base : le duel semble s'annuler !",
      "Comment mesurer l'acidité d'une solution, et que se passe-t-il quand un acide rencontre une base ?",
      "R.A. : On mesure le pH (0 à 14, neutre à 7) ou on utilise un indicateur coloré comme le BBT ; acide + base : les ions H+ et OH− se neutralisent en eau.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Citron, cendre, tableau",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Acides, bases, pH et neutralisation ». Après cette séance, vous serez capables de classer une solution et d'interpréter la neutralisation.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien. 1) Quelques gouttes de BBT dans chaque gobelet : jus de citron : JAUNE ; vinaigre : JAUNE ; eau pure : VERT ; eau de cendre : BLEU ; eau savonneuse : BLEU. 2) Le papier pH confirme : citron pH ≈ 2, vinaigre ≈ 3, eau pure 7, eau de cendre ≈ 10. 3) La neutralisation : dans le vinaigre jauni au BBT, je verse goutte à goutte l'eau de cendre : jaune… jaune… VERT ! La solution est devenue neutre ; une goutte de plus : BLEU : basique. 4) Bilan des ions : les H+ de l'acide et les OH− de la base ont disparu ensemble : H+ + OH− → H2O.",
    apprenants: "Observent les couleurs, remplissent le tableau des pH.",
    technique: "Expérimentation, classification", support: "Gobelets, BBT, papier pH",
  },
  analyse: {
    qa: [
      { q: "Quels ions caractérisent une solution acide ? une solution basique ?", ra: "L'acide contient des ions H+ majoritaires ; la base, des ions OH− majoritaires." },
      { q: "Comment le pH classe-t-il les solutions ?", ra: "pH < 7 : acide ; pH = 7 : neutre ; pH > 7 : basique (échelle de 0 à 14)." },
      { q: "Donne les couleurs du BBT.", ra: "Jaune en milieu acide, vert en milieu neutre, bleu en milieu basique." },
      { q: "Écris l'équation de la neutralisation.", ra: "H+ + OH− → H2O ; les ions Na+ et Cl− restent spectateurs." },
      { q: "Que reste-t-il après neutralisation de HCl par NaOH ?", ra: "De l'eau et du chlorure de sodium (Na+ + Cl−) : du sel !" },
    ],
    technique: "Questions-réponses", support: "Tableau des couleurs",
  },
  synthese: {
    enseignant: "Donc, l'acidité se joue entre deux ions : H+ (l'acide) et OH− (la base). Le pH, de 0 à 14, mesure le camp dominant : pH < 7 : solution acide (H+ majoritaires) ; pH = 7 : neutre (autant de H+ que de OH−) ; pH > 7 : basique (OH− majoritaires) : plus on s'éloigne de 7, plus la solution est agressive : prudence ! Sans papier pH, l'indicateur coloré suffit : le BBT est jaune en milieu acide, vert au neutre, bleu en milieu basique : et le jus de bougainvillée ou de chou rouge rend le même service. La neutralisation : verser une base dans un acide fait disparaître les ions H+ avec les ions OH− : H+ + OH− → H2O : il ne se forme que de l'eau, pendant que Na+ et Cl−, ions spectateurs, restent en solution : évaporez : il reste du chlorure de sodium : l'acide et la base ont fabriqué du sel et de l'eau ! C'est le comprimé qui calme l'estomac et la chaux qui corrige les sols trop acides des tanety.",
    apprenants: "Écoutent et recopient l'échelle de pH.", technique: "Exposé", support: "Tableau noir, craies de couleur",
  },
  application: [
    {
      consigne: "Classe ces solutions (acide, neutre ou basique) : a) pH = 3 ; b) pH = 7 ; c) pH = 11 ; d) BBT jaune.",
      items: [],
      corrige: [
        [{ text: "a) " }, { text: "acide", cle: true }, { text: " ; b) " }, { text: "neutre", cle: true }, { text: " ; c) " }, { text: "basique", cle: true }, { text: " ; d) " }, { text: "acide", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Écris l'équation de la neutralisation et nomme les ions spectateurs pour HCl + NaOH.",
      items: [],
      corrige: [
        [{ text: "" }, { text: "H+ + OH− → H2O", cle: true }, { text: " ; spectateurs : " }, { text: "Na+ et Cl−", cle: true }, { text: " (ils formeront le sel NaCl)." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète : pH < 7 : solution ……… (ions ……… majoritaires) ; pH > 7 : ……… (ions ………) ; BBT : jaune / ……… / bleu ; neutralisation : H+ + OH− → ……… .",
      items: [],
      corrige: [
        [{ text: "" }, { text: "acide", cle: true }, { text: " (" }, { text: "H+", cle: true }, { text: ") ; " }, { text: "basique", cle: true }, { text: " (" }, { text: "OH−", cle: true }, { text: ") ; " }, { text: "vert", cle: true }, { text: " ; " }, { text: "H2O", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Un paysan trouve son sol trop acide (pH = 4,5) pour le haricot. Que peut-il épandre et pourquoi ?",
      items: [],
      corrige: [
        [{ text: "De la " }, { text: "chaux (ou des cendres) : produit basique", cle: true }, { text: " : ses ions OH− " }, { text: "neutralisent une partie des H+ du sol", cle: true }, { text: " : le pH remonte vers 7." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["pH", "acide", "base", "neutre", "BBT", "neutralisation", "ions spectateurs"],
    sections: [
      {
        titre: "1. L'échelle de pH",
        paras: [
          "Le pH, de 0 à 14, classe les solutions : pH < 7 : acide (ions H+ majoritaires) ; pH = 7 : neutre ; pH > 7 : basique (ions OH− majoritaires). Plus on s'éloigne de 7, plus la solution est dangereuse.",
          "Repères de la vie courante : jus de citron pH ≈ 2 ; vinaigre ≈ 3 ; eau pure 7 ; eau savonneuse ≈ 10 ; déboucheur de canalisations ≈ 14. Les deux EXTRÉMITÉS de l'échelle brûlent : l'acide fort comme la base forte !",
        ],
      },
      {
        titre: "2. Le BBT et les indicateurs colorés",
        paras: [
          "Le bleu de bromothymol (BBT) prend trois couleurs : jaune (acide), vert (neutre), bleu (basique). À défaut, le jus de bougainvillée ou de chou rouge change aussi de couleur selon le milieu.",
        ],
      },
      {
        titre: "3. La neutralisation",
        paras: [
          "Verser une base dans un acide (ou l'inverse) fait réagir les ions : H+ + OH− → H2O. Pour HCl + NaOH, les ions Na+ et Cl− restent spectateurs : après évaporation, il reste du sel NaCl : acide + base → sel + eau.",
          "Comprends bien « spectateurs » : Na+ et Cl− assistent à la réaction sans y participer : seuls H+ et OH− s'unissent en eau. Au point neutre (pH = 7), il ne reste que de l'eau salée !",
        ],
        puces: [
          "sécurité : jamais d'acide ou de base concentrés sans adulte ; rincer abondamment en cas de contact ;",
          "applications : comprimé contre les brûlures d'estomac, chaulage des sols acides.",
        ],
      },
      {
        titre: "4. Exemples résolus",
        paras: [
          "Exemple 1 — Trois verres contiennent du jus de citron, de l'eau pure et de l'eau de cendre. Le BBT y prend respectivement les couleurs jaune, verte et bleue. Attribue chaque pH : 2 ; 7 ; 11. Solution : jaune = acide : jus de citron, pH 2 ; vert = neutre : eau pure, pH 7 ; bleu = basique : eau de cendre, pH 11. Le BBT trie l'échelle en trois zones d'un seul coup d'œil.",
          "Exemple 2 — On verse peu à peu de la soude (NaOH) dans de l'acide chlorhydrique contenant du BBT. Décris les couleurs successives et ce qui reste après évaporation au point vert. Solution : au départ JAUNE (acide) ; au fur et à mesure, les OH− détruisent les H+ (H+ + OH− → H2O) : au point exact de neutralisation, VERT (pH 7) ; une goutte de trop : BLEU (basique). Évaporée au point vert, la solution laisse du sel NaCl : acide + base → sel + eau.",
        ],
      },
    ],
    saisTu: [
      "Ton estomac est un réacteur à pH 2 : plus acide que le jus de citron ! Sa paroi se protège par un mucus renouvelé sans cesse. Les fourmis, elles, attaquent à l'acide formique, et certaines plantes de la forêt malgache se défendent avec des sucs basiques : la guerre chimique existe dans la nature depuis toujours.",
      "Les riziculteurs malgaches pratiquent la neutralisation à l'échelle des champs : sur un sol trop acide, le riz pousse mal ; on épand de la chaux (basique) pour remonter le pH vers la neutralité : c'est le chaulage. Ta réaction H+ + OH− → H2O, version hectares !",
    ],
    experience: [
      "L'indicateur bougainvillée :",
      "Matériel : des bractées bien colorées de bougainvillée (ou du chou rouge), de l'eau chaude, un filtre (tissu), trois gobelets, du citron, de l'eau de cendre filtrée.",
      "Protocole : 1. Écrase les bractées dans un peu d'eau chaude et filtre : voilà ton indicateur.",
      "2. Répartis-le dans les trois gobelets : citron dans le premier, eau de cendre dans le deuxième, rien dans le troisième (témoin).",
      "3. Neutralisation maison : verse PEU À PEU l'eau de cendre dans le gobelet au citron en remuant.",
      "4. Teste d'autres liquides : vinaigre, savon, eau de riz.",
      "Observation : l'indicateur change nettement de couleur en milieu acide et en milieu basique ; pendant la neutralisation, la teinte repasse par celle du témoin : le point neutre !",
      "Conclusion : une simple fleur de jardin détecte acides et bases et signale même le point de neutralisation : le BBT du chimiste pousse aussi dans la cour !",
    ],
  },
  substitutions: [
    { officiel: "BBT (bleu de bromothymol)", local: "Jus de bougainvillée ou de chou rouge (indicateur naturel)" },
    { officiel: "Papier pH", local: "Classement par l'indicateur naturel (3 teintes : acide/neutre/basique)" },
    { officiel: "Soude diluée NaOH", local: "Eau de cendre filtrée (basique douce)" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "QCM : 1. pH = 7 : a) acide b) neutre c) basique. 2. BBT bleu : a) acide b) neutre c) basique. 3. La neutralisation produit : a) du gaz b) de l'eau c) du feu. 4. Dans HCl + NaOH, les spectateurs sont : a) H+ et OH− b) Na+ et Cl− c) H2O.",
      items: [],
      corrige: [
        [{ text: "1. " }, { text: "b", cle: true }, { text: " ; 2. " }, { text: "c", cle: true }, { text: " ; 3. " }, { text: "b", cle: true }, { text: " ; 4. " }, { text: "b", cle: true }, { text: ". (1 point par réponse)" }],
      ],
    },
    {
      points: 3,
      consigne: "On verse de la soude dans de l'acide chlorhydrique contenant du BBT. Décris les couleurs successives et écris l'équation de la réaction.",
      items: [],
      corrige: [
        [{ text: "" }, { text: "Jaune → vert (neutre) → bleu si excès de base", cle: true }, { text: " ; équation : " }, { text: "H+ + OH− → H2O", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "Après neutralisation exacte de l'acide chlorhydrique par la soude, on évapore l'eau. Qu'observe-t-on ? Explique avec les ions.",
      items: [],
      corrige: [
        [{ text: "Un dépôt blanc de " }, { text: "chlorure de sodium (sel)", cle: true }, { text: " : les ions spectateurs " }, { text: "Na+ et Cl− se sont assemblés en cristaux", cle: true }, { text: " quand l'eau est partie." }],
      ],
    },
  ],
};

module.exports = { seances: [S28, S29, S30, S31, S32] };
