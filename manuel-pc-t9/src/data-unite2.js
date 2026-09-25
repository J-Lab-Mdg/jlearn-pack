// data-unite2.js — T9 Unité II : ÉLECTRICITÉ (séances 12 à 17)
const DOC = "Programme scolaire de la classe de 3e (T9) — Sciences Physiques (MEN Madagascar) ; manuel J-Learn";

const S12 = {
  numero: 12, total: 34, unite: "II", theme: "Électricité",
  titre: "Le conducteur ohmique et sa caractéristique",
  objectif: "identifier un conducteur ohmique et de tracer sa caractéristique tension-intensité",
  documentation: DOC,
  support: "Résistors, piles (1,5 V et 4,5 V), voltmètre, ampèremètre, fils, papier quadrillé, règle",
  image: "images/img_seance12.png",
  imageLegende: "Figure 10 — La caractéristique U = f(I) : une droite passant par l'origine, tracée en ligne moyenne",
  revision: {
    qa: [
      { q: "Comment se branche un voltmètre ? un ampèremètre ?", ra: "Le voltmètre en dérivation ; l'ampèremètre en série." },
      { q: "Rappelle les unités de U et de I.", ra: "Le volt (V) et l'ampère (A)." },
      { q: "Comment augmenter la tension avec des piles ?", ra: "En les associant en série : les tensions s'ajoutent." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Dans le poste de radio démonté de l'oncle Solofo, on découvre de petits cylindres peints d'anneaux de couleur, soudés partout sur la carte. « Ce sont des résistors, dit-il : sans eux, tout grillerait ! »",
      "Comment ces composants se comportent-ils quand on leur applique une tension ?",
      "R.A. : La tension et l'intensité y varient proportionnellement : nous allons le découvrir en traçant leur caractéristique.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Résistor réel, tableau",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Le conducteur ohmique et sa caractéristique ». Après cette séance, vous serez capables d'identifier un résistor, de décrire le protocole de mesure et de tracer la caractéristique U = f(I).",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien. 1) Voici le conducteur ohmique (ou résistor) : un petit cylindre à anneaux colorés, deux bornes ; son symbole : un rectangle. 2) Montage : le résistor est alimenté par des piles en série (tension variable : 1,5 V, 3 V, 4,5 V…) ; l'ampèremètre en série mesure I, le voltmètre en dérivation mesure U. 3) Relevons cinq couples (I, U) : (0,05 A ; 1 V), (0,10 A ; 2 V), (0,15 A ; 3,1 V), (0,20 A ; 3,9 V), (0,25 A ; 5 V). 4) Plaçons ces points de fonctionnement sur le graphique U en fonction de I : ils s'alignent presque !",
    apprenants: "Observent, relèvent les mesures, placent les points sur papier quadrillé.",
    technique: "Expérimentation, mesures, graphique", support: "Montage, papier quadrillé",
  },
  analyse: {
    qa: [
      { q: "Comment reconnaît-on un conducteur ohmique ?", ra: "Un cylindre à anneaux de couleur ; son symbole est un rectangle." },
      { q: "Qu'est-ce qu'un point de fonctionnement ?", ra: "Un couple (I, U) mesuré : intensité traversant le résistor et tension entre ses bornes." },
      { q: "Qu'appelle-t-on caractéristique ?", ra: "La courbe U = f(I) : la tension en fonction de l'intensité." },
      { q: "Pourquoi les points ne sont-ils pas parfaitement alignés ?", ra: "À cause des erreurs de mesure : chaque point est entaché d'une petite erreur." },
      { q: "Comment trace-t-on alors la courbe ?", ra: "On trace une ligne moyenne : une droite passant par l'origine, laissant les points répartis de part et d'autre : jamais une ligne brisée !" },
    ],
    technique: "Questions-réponses, méthode graphique", support: "Graphique au tableau",
  },
  synthese: {
    enseignant: "Donc, le conducteur ohmique (ou résistor) est ce dipôle cylindrique à anneaux colorés, symbolisé par un rectangle. Pour l'étudier, on applique des tensions croissantes (piles en série) et on mesure, pour chaque tension U maintenue entre ses bornes, l'intensité I qui le traverse : chaque couple (I, U) est un point de fonctionnement. La courbe U = f(I) s'appelle la caractéristique tension-intensité du résistor. On place au moins cinq points ; comme les mesures sont entachées d'erreurs, les points ne sont pas rigoureusement alignés : on trace une ligne moyenne : une droite passant par l'origine, avec les points équitablement répartis de part et d'autre : jamais de ligne brisée ! Cette droite révèle un caractère linéaire remarquable, que la loi d'Ohm exprimera la semaine prochaine. Respectez toujours les limites d'utilisation indiquées sur le composant.",
    apprenants: "Écoutent, terminent leur graphique en ligne moyenne.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Réponds :",
      items: [
        "a) Comment appelle-t-on la courbe U = f(I) d'un résistor ?",
        "b) Quelle forme a-t-elle ?",
      ],
      corrige: [
        [{ text: "a) Sa " }, { text: "caractéristique tension-intensité", cle: true }, { text: "." }],
        [{ text: "b) Une " }, { text: "droite passant par l'origine", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Décris le protocole de mesure : appareils et branchements.",
      items: [],
      corrige: [
        [{ text: "Alimenter le résistor sous " }, { text: "tension variable (piles en série)", cle: true }, { text: " ; mesurer I avec " }, { text: "l'ampèremètre en série", cle: true }, { text: " et U avec " }, { text: "le voltmètre en dérivation", cle: true }, { text: " ; relever au moins cinq couples (I, U)." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, graphique",
  evaluation: [
    {
      consigne: "Complète : chaque couple (I, U) est un point de ……… ; les points ne sont pas parfaitement alignés à cause des ……… ; on trace une ……… passant par l'……… .",
      items: [],
      corrige: [
        [{ text: "Point de " }, { text: "fonctionnement", cle: true }, { text: " ; des " }, { text: "erreurs de mesure", cle: true }, { text: " ; une " }, { text: "ligne moyenne (droite)", cle: true }, { text: " ; l'" }, { text: "origine", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Pourquoi ne doit-on jamais relier les points expérimentaux par une ligne brisée ?",
      items: [],
      corrige: [
        [{ text: "Parce que les écarts viennent " }, { text: "des erreurs de mesure", cle: true }, { text: " : le comportement réel est " }, { text: "linéaire", cle: true }, { text: " ; la droite moyenne le représente fidèlement." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["conducteur ohmique", "résistor", "point de fonctionnement", "caractéristique", "ligne moyenne"],
    sections: [
      {
        titre: "1. Le conducteur ohmique",
        paras: [
          "Le conducteur ohmique, ou résistor, est un dipôle en forme de cylindre peint d'anneaux de couleurs. Son symbole normalisé est un rectangle. Il possède des limites d'utilisation à respecter.",
          "Son rôle dans les circuits : limiter et régler l'intensité du courant. On en trouve des dizaines dans chaque radio, chargeur ou téléphone : c'est le composant le plus répandu de l'électronique.",
        ],
      },
      {
        titre: "2. Le protocole d'étude",
        paras: [
          "On alimente le résistor sous une tension variable (piles montées en série) ; pour chaque tension U (voltmètre en dérivation), on mesure l'intensité I (ampèremètre en série). Chaque couple (I, U) est un point de fonctionnement.",
          "Rappel des branchements : le voltmètre se branche EN DÉRIVATION aux bornes du résistor ; l'ampèremètre s'insère EN SÉRIE dans le circuit. Les inverser fausse tout (et peut abîmer l'ampèremètre) !",
        ],
      },
      {
        titre: "3. La caractéristique U = f(I)",
        paras: [
          "On place au moins cinq points de fonctionnement sur le graphique U en fonction de I. Les points, entachés d'erreurs, ne sont pas exactement alignés : on trace une ligne moyenne, droite passant par l'origine, les points répartis équitablement de part et d'autre. La caractéristique I = f(U) n'est pas étudiée.",
          "Cette droite passant par l'origine est la signature d'une PROPORTIONNALITÉ entre U et I : c'est elle qui conduira à la loi d'Ohm de la prochaine séance.",
        ],
      },
      {
        titre: "4. Exemples résolus",
        paras: [
          "Exemple 1 — Mesures sur un résistor : (0,1 A ; 2,2 V), (0,2 A ; 3,9 V), (0,3 A ; 6,1 V), (0,4 A ; 8,0 V). Ces points sont-ils exploitables ? Que tracer ? Solution : U double (environ) quand I double : les points s'alignent presque sur une droite passant par l'origine. On trace la ligne moyenne à la règle, sans forcer le trait sur chaque point : les petits écarts sont des erreurs de mesure normales.",
          "Exemple 2 — Sur une caractéristique, un camarade relie les points par une ligne brisée qui ne passe pas par l'origine. Quelles sont ses deux erreurs ? Solution : 1) on ne relie jamais les points un à un : on trace UNE droite moyenne qui équilibre les écarts ; 2) pour un conducteur ohmique, cette droite passe par l'origine (U = 0 quand I = 0 : sans courant, pas de tension aux bornes du résistor).",
        ],
      },
    ],
    saisTu: [
      "Les anneaux colorés du résistor forment un code : chaque couleur est un chiffre (noir 0, marron 1, rouge 2… blanc 9). Trois anneaux donnent la valeur en ohms, le quatrième la précision. Les électroniciens du monde entier lisent ce code arc-en-ciel d'un seul coup d'œil !",
      "Tracer une ligne moyenne au lieu de relier les points, c'est le geste fondamental de la science expérimentale : aucune mesure n'est parfaite, mais l'ensemble révèle la loi. Les scientifiques d'aujourd'hui font pareil avec leurs ordinateurs : ils appellent cela une régression linéaire !",
    ],
    experience: [
      "La mine de crayon résistante :",
      "Matériel : un crayon à papier, un taille-crayon ou un cutter (avec un adulte), une pile plate 4,5 V, une petite ampoule, des fils.",
      "Protocole : 1. Taille le crayon aux deux bouts : la mine de graphite est un conducteur ohmique naturel.",
      "2. Monte la mine en série avec la pile et l'ampoule.",
      "3. Raccourcis la longueur de mine dans le circuit (pince les fils plus près l'un de l'autre).",
      "4. Compare l'éclat de la lampe dans chaque cas.",
      "Observation : avec toute la mine, la lampe brille faiblement ; plus la longueur de mine diminue, plus la lampe brille.",
      "Conclusion : la mine s'oppose au passage du courant, et d'autant plus qu'elle est longue : tu viens de découvrir la résistance, mesurée à la séance suivante.",
    ],
  },
  substitutions: [
    { officiel: "Alimentation variable de laboratoire", local: "Piles 1,5 V associées en série : 1,5 / 3 / 4,5 / 6 V" },
    { officiel: "Résistors calibrés", local: "Mine de crayon, résistors de récupération (vieilles radios)" },
    { officiel: "Multimètres", local: "Un seul multimètre prêté, utilisé successivement en V puis en A" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "QCM : 1. Le symbole du résistor : a) cercle b) rectangle c) triangle. 2. Le voltmètre se branche : a) en série b) en dérivation c) n'importe où. 3. La caractéristique d'un résistor est : a) une droite par l'origine b) un cercle c) une courbe quelconque. 4. Les points s'écartent de la droite à cause : a) du vent b) des erreurs de mesure c) de la couleur des anneaux.",
      items: [],
      corrige: [
        [{ text: "1. " }, { text: "b", cle: true }, { text: " ; 2. " }, { text: "b", cle: true }, { text: " ; 3. " }, { text: "a", cle: true }, { text: " ; 4. " }, { text: "b", cle: true }, { text: ". (1 point par réponse)" }],
      ],
    },
    {
      points: 3,
      consigne: "On mesure : (0,1 A ; 2,1 V), (0,2 A ; 3,9 V), (0,3 A ; 6,1 V). Place mentalement ces points : quelle est l'allure de la caractéristique ? Estime la tension pour 0,4 A.",
      items: [],
      corrige: [
        [{ text: "Une " }, { text: "droite passant par l'origine (pente ≈ 20)", cle: true }, { text: " ; pour 0,4 A : U ≈ " }, { text: "8 V", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "Explique pourquoi il faut relever AU MOINS cinq points de fonctionnement pour tracer une bonne caractéristique.",
      items: [],
      corrige: [
        [{ text: "Avec peu de points, " }, { text: "les erreurs de mesure faussent le tracé", cle: true }, { text: " ; cinq points ou plus permettent de tracer une " }, { text: "ligne moyenne fiable", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S13 = {
  numero: 13, total: 34, unite: "II", theme: "Électricité",
  titre: "La loi d'Ohm ; la résistance électrique",
  objectif: "énoncer la loi d'Ohm et de définir la résistance d'un conducteur ohmique",
  documentation: DOC,
  support: "Caractéristique tracée en séance 12, résistors, multimètre (ohmmètre), tableau",
  image: "images/img_seance13.png",
  imageLegende: "Figure 11 — U = R × I : le triangle magique donne les trois formules de la loi d'Ohm",
  revision: {
    qa: [
      { q: "Quelle est l'allure de la caractéristique d'un résistor ?", ra: "Une droite passant par l'origine." },
      { q: "Que traduit une droite passant par l'origine ?", ra: "La proportionnalité entre U et I." },
      { q: "Comment s'appelle un couple (I, U) mesuré ?", ra: "Un point de fonctionnement." },
    ],
    technique: "Questions-réponses orales", support: "Graphique de la séance 12",
  },
  miseEnSituation: {
    enseignant: [
      "Notre caractéristique de la semaine dernière cache un trésor : pour chaque point de la droite, calculons U ÷ I : 2 ÷ 0,1 = 20 ; 4 ÷ 0,2 = 20 ; 6 ÷ 0,3 = 20… Toujours 20 !",
      "Que signifie ce nombre constant, et quelle loi générale se cache derrière ?",
      "R.A. : C'est la résistance R du conducteur (en ohms) ; la loi d'Ohm dit U = R × I.",
    ],
    apprenants: "Écoutent, vérifient les quotients sur leur graphique.",
    technique: "Question problème", support: "Graphique, tableau",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La loi d'Ohm ; la résistance électrique ». Après cette séance, vous serez capables d'énoncer la loi d'Ohm, de définir la résistance et de l'utiliser en calcul.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien. 1) Sur la caractéristique, l'équation de la droite s'écrit U = 20 × I : le coefficient 20 est la pente. 2) Je mesure le même résistor à l'ohmmètre : il affiche 20 Ω : c'est bien le même nombre ! 3) Autre résistor, autre pente : 47 Ω à l'ohmmètre, et sa caractéristique est plus « raide ». 4) Attention au vocabulaire : le résistor est l'objet ; sa résistance R est la grandeur physique qui le caractérise.",
    apprenants: "Observent, mesurent des résistors à l'ohmmètre, comparent aux pentes.",
    technique: "Expérimentation, mesures", support: "Ohmmètre, résistors, graphiques",
  },
  analyse: {
    qa: [
      { q: "Énonce la loi d'Ohm.", ra: "La tension U aux bornes d'un conducteur ohmique est proportionnelle à l'intensité I du courant qui le traverse : U = R × I." },
      { q: "Que représente R ?", ra: "Le coefficient de proportionnalité : la résistance du conducteur, en ohms (Ω)." },
      { q: "Comment calculer R connaissant U et I ?", ra: "R = U ÷ I." },
      { q: "Et I connaissant U et R ?", ra: "I = U ÷ R." },
      { q: "Quelle différence entre résistor et résistance ?", ra: "Le résistor est l'objet ; la résistance est sa grandeur physique (le nombre d'ohms)." },
    ],
    technique: "Questions-réponses", support: "Tableau",
  },
  synthese: {
    enseignant: "Donc, la loi d'Ohm s'énonce : la tension U appliquée aux bornes d'un conducteur ohmique est proportionnelle à l'intensité I du courant qui le traverse : U = R × I. Le coefficient de proportionnalité R est appelé résistance du conducteur ; son unité internationale est l'ohm, de symbole Ω (la lettre grecque oméga). La résistance est la pente de la caractéristique : plus la droite est raide, plus R est grande, plus le conducteur s'oppose au passage du courant. Les trois formules du triangle : U = R × I ; R = U ÷ I ; I = U ÷ R : cachez la grandeur cherchée, le triangle donne la formule ! Et ne confondez plus : le résistor est l'objet que l'on tient en main, la résistance est la grandeur que l'ohmmètre mesure. Georg Ohm publia sa loi en 1827 : on se moqua de lui… avant de donner son nom à l'unité !",
    apprenants: "Écoutent et recopient le triangle U-R-I.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Un résistor de 50 Ω est traversé par un courant de 0,2 A. Calcule la tension entre ses bornes.",
      items: [],
      corrige: [
        [{ text: "U = R × I = 50 × 0,2 = " }, { text: "10 V", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Sous 6 V, un résistor est traversé par 0,05 A. Calcule sa résistance.",
      items: [],
      corrige: [
        [{ text: "R = U ÷ I = 6 ÷ 0,05 = " }, { text: "120 Ω", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, calcul posé",
  evaluation: [
    {
      consigne: "Complète : la loi d'Ohm s'écrit U = ……… × ……… ; R est la ……… du conducteur, en ……… ; sur la caractéristique, R est la ……… de la droite.",
      items: [],
      corrige: [
        [{ text: "U = " }, { text: "R", cle: true }, { text: " × " }, { text: "I", cle: true }, { text: " ; la " }, { text: "résistance", cle: true }, { text: ", en " }, { text: "ohms (Ω)", cle: true }, { text: " ; la " }, { text: "pente", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Quelle intensité traverse un résistor de 220 Ω branché sous 11 V ?",
      items: [],
      corrige: [
        [{ text: "I = U ÷ R = 11 ÷ 220 = " }, { text: "0,05 A = 50 mA", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["loi d'Ohm", "résistance", "ohm", "U = R × I", "pente", "ohmmètre"],
    sections: [
      {
        titre: "1. La loi d'Ohm",
        paras: [
          "La tension U appliquée aux bornes d'un conducteur ohmique est proportionnelle à l'intensité I du courant qui le traverse : U = R × I (U en volts, I en ampères, R en ohms).",
        ],
      },
      {
        titre: "2. La résistance",
        paras: [
          "R, coefficient de proportionnalité, est la résistance du conducteur : elle mesure son opposition au passage du courant. Unité : l'ohm (Ω). C'est la pente de la caractéristique U = f(I) ; elle se mesure directement à l'ohmmètre.",
          "Interprétation physique : à tension égale, une grande résistance laisse passer un petit courant ; une petite résistance, un grand courant. Le résistor est comme un rétrécissement sur un canal : plus il est étroit, moins l'eau passe.",
        ],
      },
      {
        titre: "3. Les trois formules",
        paras: [
          "Le triangle U / R·I donne les trois formules d'un coup d'œil : cache la grandeur cherchée, la position des deux autres t'indique l'opération.",
        ],
        puces: [
          "U = R × I : calculer la tension ;",
          "R = U ÷ I : calculer la résistance ;",
          "I = U ÷ R : calculer l'intensité ;",
          "bien distinguer : le résistor (l'objet) et sa résistance (la grandeur physique).",
        ],
      },
      {
        titre: "4. Exemples résolus",
        paras: [
          "Exemple 1 — Un résistor de 22 Ω est traversé par un courant de 0,2 A. Calcule la tension à ses bornes. Solution : U = R × I = 22 × 0,2 = 4,4 V. Vérifie les unités : ohms × ampères = volts ✔.",
          "Exemple 2 — Sur la caractéristique d'un résistor, on lit le point (0,3 A ; 15 V). Calcule R, puis l'intensité sous 9 V. Attention au piège des milliampères : que vaut I si U = 15 V et R = 500 Ω ? Solution : R = U ÷ I = 15 ÷ 0,3 = 50 Ω. Sous 9 V : I = 9 ÷ 50 = 0,18 A. Avec 500 Ω : I = 15 ÷ 500 = 0,03 A = 30 mA : pense à convertir en milliampères quand le résultat est petit !",
        ],
      },
    ],
    saisTu: [
      "Georg Simon Ohm était un modeste professeur bavarois : quand il publia sa loi en 1827, les savants la jugèrent « indigne de la science » et il perdit son poste ! Il fallut vingt ans pour que le monde reconnaisse son génie. Aujourd'hui, chaque résistor de chaque téléphone porte silencieusement son nom.",
      "La loi d'Ohm explique pourquoi les lignes de la JIRAMA transportent l'électricité sous haute tension : à puissance égale, une tension élevée permet un courant faible, donc moins de pertes par échauffement dans les longs kilomètres de câbles entre Andekaleka et Antananarivo !",
    ],
    experience: [
      "L'eau salée résistante :",
      "Matériel : un verre d'eau très salée, deux clous (électrodes), une pile plate 4,5 V, une petite ampoule, des fils, du sel.",
      "Protocole : 1. Plonge les deux clous dans l'eau salée, reliés en série avec la pile et l'ampoule.",
      "2. Écarte les clous l'un de l'autre et observe.",
      "3. Rapproche-les au maximum sans qu'ils se touchent.",
      "4. Ajoute encore du sel et observe une dernière fois.",
      "Observation : la lampe luit ; elle faiblit quand les clous s'écartent (le trajet dans l'eau s'allonge : R augmente) ; elle brille davantage quand ils se rapprochent ou quand le sel augmente (R diminue).",
      "Conclusion : la résistance dépend du conducteur : longueur du trajet et nature du milieu : mêmes conclusions qu'avec la mine de crayon, la loi d'Ohm les met en chiffres.",
    ],
  },
  substitutions: [
    { officiel: "Ohmmètre", local: "Multimètre de l'électricien du quartier (position Ω), ou calcul R = U ÷ I" },
    { officiel: "Boîte de résistances étalons", local: "Résistors de récupération marqués, mines de crayon de longueurs différentes" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Complète le tableau (loi d'Ohm) : a) R = 40 Ω, I = 0,3 A : U ? b) U = 9 V, I = 0,15 A : R ? c) U = 12 V, R = 60 Ω : I ? d) R = 20 Ω, U = 5 V : I ?",
      items: [],
      corrige: [
        [{ text: "a) U = " }, { text: "12 V", cle: true }, { text: " ; b) R = " }, { text: "60 Ω", cle: true }, { text: " ; c) I = " }, { text: "0,2 A", cle: true }, { text: " ; d) I = " }, { text: "0,25 A", cle: true }, { text: ". (1 point par calcul)" }],
      ],
    },
    {
      points: 3,
      consigne: "Deux caractéristiques sont tracées sur le même graphique : celle de R1 est plus raide que celle de R2. Lequel a la plus grande résistance ? Justifie.",
      items: [],
      corrige: [
        [{ text: "" }, { text: "R1", cle: true }, { text: " : la résistance est " }, { text: "la pente de la droite", cle: true }, { text: " ; plus raide = plus grande." }],
      ],
    },
    {
      points: 3,
      consigne: "Un fil de cuivre a une résistance presque nulle ; un fil de nichrome de même taille, une résistance élevée. Lequel choisir : a) pour transporter le courant ? b) pour chauffer un réchaud ? Justifie.",
      items: [],
      corrige: [
        [{ text: "a) Le " }, { text: "cuivre : il ne s'oppose presque pas au courant", cle: true }, { text: " ; b) le " }, { text: "nichrome : sa forte résistance produit de la chaleur", cle: true }, { text: " (effet Joule, séance 16)." }],
      ],
    },
  ],
};

const S14 = {
  numero: 14, total: 34, unite: "II", theme: "Électricité",
  titre: "Association de résistors en série et en dérivation",
  objectif: "appliquer la loi d'Ohm pour calculer la résistance équivalente de résistors associés en série et en dérivation",
  documentation: DOC,
  support: "Résistors, piles, multimètre, fils, schémas au tableau",
  image: "images/img_seance14.png",
  imageLegende: "Figure 12 — En série : Re = R1 + R2 ; en dérivation : 1/Re = 1/R1 + 1/R2",
  revision: {
    qa: [
      { q: "Énonce la loi d'Ohm.", ra: "U = R × I : la tension est proportionnelle à l'intensité." },
      { q: "Rappelle la loi d'additivité des tensions en série.", ra: "U = U1 + U2." },
      { q: "Rappelle la loi des nœuds en dérivation.", ra: "I = I1 + I2." },
    ],
    technique: "Questions-réponses orales", support: "Ardoise",
  },
  miseEnSituation: {
    enseignant: [
      "Le technicien répare l'amplificateur de la sono du village : il lui faut un résistor de 50 Ω, mais sa boîte ne contient que des 20 Ω et des 30 Ω ! Il sourit : « Pas de problème, je vais les associer. »",
      "Comment combiner plusieurs résistors pour obtenir la résistance voulue ?",
      "R.A. : En série, les résistances s'ajoutent (20 + 30 = 50 Ω) ; en dérivation, la résistance équivalente diminue.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Association de résistors en série et en dérivation ». Après cette séance, vous serez capables de calculer la résistance équivalente dans les deux montages.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien. 1) R1 = 20 Ω et R2 = 30 Ω en série : l'ohmmètre appliqué à l'ensemble affiche 50 Ω. 2) Les mêmes en dérivation : l'ohmmètre affiche 12 Ω : moins que la plus petite ! 3) Démonstration en série : le même courant I traverse R1 et R2 ; les tensions s'ajoutent : U = U1 + U2 = R1 I + R2 I = (R1 + R2) I : donc Re = R1 + R2. 4) En dérivation : la même tension U, les intensités s'ajoutent : I = U/R1 + U/R2 : donc 1/Re = 1/R1 + 1/R2.",
    apprenants: "Observent les mesures, suivent les deux démonstrations.",
    technique: "Expérimentation, démonstration", support: "Montages, ohmmètre, tableau",
  },
  analyse: {
    qa: [
      { q: "Quelle est la résistance équivalente en série ?", ra: "Re = R1 + R2 : les résistances s'ajoutent." },
      { q: "Et en dérivation ?", ra: "1/Re = 1/R1 + 1/R2 : l'inverse de Re est la somme des inverses." },
      { q: "En série, Re est-elle plus grande ou plus petite que chaque résistance ?", ra: "Plus grande : ajouter un résistor en série augmente l'opposition au courant." },
      { q: "Et en dérivation ?", ra: "Plus petite que la plus petite des résistances : le courant dispose de plusieurs chemins." },
      { q: "Quelles lois a-t-on utilisées pour démontrer ces formules ?", ra: "La loi d'Ohm, l'additivité des tensions (série) et la loi des nœuds (dérivation)." },
    ],
    technique: "Questions-réponses, démonstration", support: "Tableau",
  },
  synthese: {
    enseignant: "Donc, deux résultats à connaître parfaitement. En série : la résistance équivalente est la somme : Re = R1 + R2 : le courant doit franchir les obstacles l'un après l'autre, l'opposition augmente. En dérivation : l'inverse de la résistance équivalente est la somme des inverses : 1/Re = 1/R1 + 1/R2 : le courant se partage entre plusieurs chemins, l'opposition diminue : Re est toujours plus petite que la plus petite des résistances ! Ces formules se démontrent avec la loi d'Ohm : en série, l'additivité des tensions donne (R1 + R2) I ; en dérivation, la loi des nœuds donne U/R1 + U/R2. La valeur calculée se vérifie à l'ohmmètre : 20 et 30 Ω donnent 50 Ω en série et 12 Ω en dérivation : notre technicien avait les deux solutions en main !",
    apprenants: "Écoutent et recopient les deux formules encadrées.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Calcule la résistance équivalente de R1 = 100 Ω et R2 = 150 Ω : a) en série ; b) en dérivation.",
      items: [],
      corrige: [
        [{ text: "a) Re = 100 + 150 = " }, { text: "250 Ω", cle: true }, { text: "." }],
        [{ text: "b) 1/Re = 1/100 + 1/150 = 5/300 : Re = " }, { text: "60 Ω", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Vérifie sans calculer : en dérivation, Re peut-elle valoir 120 Ω avec R1 = 100 Ω et R2 = 150 Ω ?",
      items: [],
      corrige: [
        [{ text: "" }, { text: "Non", cle: true }, { text: " : en dérivation, Re est toujours " }, { text: "inférieure à la plus petite résistance (ici < 100 Ω)", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, calcul posé",
  evaluation: [
    {
      consigne: "Complète : en série, Re = ……… ; en dérivation, ……… = 1/R1 + 1/R2 ; en série Re est plus ……… que chaque résistance ; en dérivation, plus ……… que la plus petite.",
      items: [],
      corrige: [
        [{ text: "Re = " }, { text: "R1 + R2", cle: true }, { text: " ; " }, { text: "1/Re", cle: true }, { text: " ; plus " }, { text: "grande", cle: true }, { text: " ; plus " }, { text: "petite", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Deux résistors identiques de 60 Ω sont montés en dérivation. Calcule Re. Que remarques-tu ?",
      items: [],
      corrige: [
        [{ text: "1/Re = 1/60 + 1/60 = 2/60 : Re = " }, { text: "30 Ω : la moitié d'une résistance", cle: true }, { text: " (cas de deux résistors identiques)." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["résistance équivalente", "série", "dérivation", "Re = R1 + R2", "1/Re = 1/R1 + 1/R2"],
    sections: [
      {
        titre: "1. Association en série",
        paras: [
          "Le même courant traverse les résistors ; les tensions s'ajoutent : U = R1 I + R2 I = (R1 + R2) I. La résistance équivalente est Re = R1 + R2 : elle est plus grande que chacune des résistances.",
          "Image simple : deux rétrécissements l'un après l'autre sur le même canal gênent plus le passage qu'un seul : les obstacles en file s'additionnent.",
        ],
      },
      {
        titre: "2. Association en dérivation",
        paras: [
          "La même tension s'applique aux résistors ; les intensités s'ajoutent (loi des nœuds) : I = U/R1 + U/R2. D'où 1/Re = 1/R1 + 1/R2 : Re est plus petite que la plus petite des résistances.",
          "Image simple : deux canaux côte à côte laissent passer plus d'eau qu'un seul : offrir un chemin de plus au courant diminue toujours la résistance totale.",
          "Cas particulier bien utile : deux résistances identiques R en dérivation donnent Re = R ÷ 2.",
        ],
      },
      {
        titre: "3. La vérification",
        paras: [
          "La valeur calculée se vérifie à l'ohmmètre appliqué aux bornes de l'ensemble. Exemple : 20 Ω et 30 Ω donnent 50 Ω en série, 12 Ω en dérivation.",
          "Contrôle de cohérence systématique : en série, Re dépasse la plus grande des résistances ; en dérivation, Re est inférieure à la plus petite. Un résultat qui viole ces règles est forcément faux !",
        ],
      },
      {
        titre: "4. Exemples résolus",
        paras: [
          "Exemple 1 — Calcule la résistance équivalente de 20 Ω et 30 Ω : a) en série ; b) en dérivation. Solution : a) Re = 20 + 30 = 50 Ω. b) 1/Re = 1/20 + 1/30 = 3/60 + 2/60 = 5/60, donc Re = 60 ÷ 5 = 12 Ω. Cohérence : 50 > 30 ✔ ; 12 < 20 ✔.",
          "Exemple 2 — Un montage en dérivation de deux résistors identiques a une résistance équivalente de 15 Ω. Quelle est la valeur de chaque résistor ? Solution : pour deux résistances identiques en dérivation, Re = R ÷ 2 : donc R = 2 × 15 = 30 Ω. Vérification : 1/30 + 1/30 = 2/30 = 1/15 ✔.",
        ],
      },
    ],
    saisTu: [
      "Dans ta maison, tous les appareils sont branchés en dérivation sur les 220 V : chaque appareil ajouté offre un chemin de plus au courant, la résistance totale de l'installation baisse… et l'intensité totale grimpe ! Voilà pourquoi trop d'appareils sur une même prise font chauffer les fils : le disjoncteur veille.",
      "Les ingénieurs électroniciens fabriquent les valeurs qui n'existent pas en magasin en associant des résistors : besoin de 50 Ω ? Deux résistors de 100 Ω en dérivation ! Besoin de 470 Ω ? 220 + 250 en série. Tes deux formules sont leurs outils quotidiens.",
    ],
    experience: [
      "Les mines associées :",
      "Matériel : deux mines de crayon identiques, une pile plate 4,5 V, une petite ampoule, des fils.",
      "Protocole : 1. Monte UNE mine en série avec la pile et l'ampoule : note l'éclat (référence).",
      "2. Place les deux mines bout à bout (série) et observe.",
      "3. Place les deux mines côte à côte, reliées ensemble aux deux extrémités (dérivation), et observe.",
      "4. Interprète chaque éclat avec les formules.",
      "Observation : en série, la lampe faiblit (résistance doublée) ; en dérivation, elle brille plus qu'avec une seule mine (résistance divisée par deux).",
      "Conclusion : les associations de résistances suivent exactement les deux formules : Re = R1 + R2 en série, et Re plus petite que chaque résistance en dérivation.",
    ],
  },
  substitutions: [
    { officiel: "Plaque d'essai (breadboard)", local: "Dominos d'électricien, trombones et pinces à linge" },
    { officiel: "Jeu de résistors", local: "Mines de crayon, fils résistifs de vieux grille-pain (avec prudence)" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Calcule Re : a) 10 Ω et 40 Ω en série ; b) 10 Ω et 40 Ω en dérivation ; c) trois résistors de 30 Ω en série ; d) deux de 100 Ω en dérivation.",
      items: [],
      corrige: [
        [{ text: "a) " }, { text: "50 Ω", cle: true }, { text: " ; b) 1/Re = 1/10 + 1/40 = 5/40 : " }, { text: "8 Ω", cle: true }, { text: " ; c) " }, { text: "90 Ω", cle: true }, { text: " ; d) " }, { text: "50 Ω", cle: true }, { text: ". (1 point par calcul)" }],
      ],
    },
    {
      points: 3,
      consigne: "Le technicien doit obtenir exactement 75 Ω avec des résistors de 50 Ω et de 100 Ω (il en a plusieurs de chaque). Propose une association.",
      items: [],
      corrige: [
        [{ text: "Deux résistors de 50 Ω en série (100 Ω) ne conviennent pas ; mais " }, { text: "50 Ω en série avec [deux 50 Ω en dérivation, soit 25 Ω]", cle: true }, { text: " donne 50 + 25 = " }, { text: "75 Ω", cle: true }, { text: " ; (autre solution : 100 et 50 ne suffisent pas seuls)." }],
      ],
    },
    {
      points: 3,
      consigne: "Un montage en dérivation de R1 = 60 Ω et R2 = 30 Ω est alimenté sous 12 V. Calcule Re puis l'intensité totale I.",
      items: [],
      corrige: [
        [{ text: "1/Re = 1/60 + 1/30 = 3/60 : Re = " }, { text: "20 Ω", cle: true }, { text: " ; I = U ÷ Re = 12 ÷ 20 = " }, { text: "0,6 A", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S15 = {
  numero: 15, total: 34, unite: "II", theme: "Électricité",
  titre: "La puissance électrique : P = U × I",
  objectif: "lire les indications portées sur un appareil électrique et de calculer la puissance consommée P = U × I",
  documentation: DOC,
  support: "Lampes et appareils avec plaques signalétiques, multimètre, piles, tableau",
  image: "images/img_seance15.png",
  imageLegende: "Figure 13 — La plaque signalétique annonce tension et puissance : P = U × I donne le courant appelé",
  revision: {
    qa: [
      { q: "Rappelle la loi d'Ohm.", ra: "U = R × I." },
      { q: "Qu'est-ce que la puissance d'une force (mécanique) ?", ra: "Le quotient du travail par la durée : P = W ÷ t, en watts." },
      { q: "Rappelle Ueff du secteur à Madagascar.", ra: "220 V (tension efficace), 50 Hz." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Sur l'ampoule de la véranda, on lit « 230 V ; 60 W » ; sur le fer à repasser, « 220 V ; 1 000 W » ; sur la bouilloire, « 220 V ; 2 000 W ». Quand la bouilloire chauffe, la lumière faiblit parfois un instant !",
      "Que signifient ces inscriptions, et pourquoi les gros appareils font-ils « broncher » l'installation ?",
      "R.A. : Ce sont la tension d'usage et la puissance consommée ; P = U × I : plus P est grande, plus l'appareil appelle de courant.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Appareils, plaques signalétiques",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La puissance électrique ». Après cette séance, vous serez capables de lire une plaque signalétique et de calculer la puissance consommée par un appareil.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien. 1) Faisons l'inventaire des plaques : lampe (230 V ; 60 W), radio (220 V ; 15 W), fer (220 V ; 1 000 W), bouilloire (220 V ; 2 000 W). 2) La première valeur est la tension d'usage : celle du secteur ; la seconde, la puissance consommée en fonctionnement normal. 3) Calculons le courant appelé par chacun : I = P ÷ U : lampe : 60 ÷ 230 ≈ 0,26 A ; fer : 1 000 ÷ 220 ≈ 4,5 A ; bouilloire : ≈ 9 A ! 4) Voilà pourquoi la bouilloire fait « broncher » la maison : elle appelle 35 fois plus de courant que la lampe.",
    apprenants: "Observent, relèvent les plaques, calculent les intensités.",
    technique: "Observation, calculs", support: "Plaques signalétiques, tableau",
  },
  analyse: {
    qa: [
      { q: "Que signifient les deux indications d'une plaque signalétique ?", ra: "La tension d'usage (V) et la puissance consommée en fonctionnement normal (W)." },
      { q: "Donne la relation entre P, U et I.", ra: "P = U × I (pour le secteur, on admet P ≈ U × I avec les valeurs efficaces)." },
      { q: "Comment calculer le courant appelé par un appareil ?", ra: "I = P ÷ U : c'est l'intensité minimale que doit supporter la ligne." },
      { q: "Pour un conducteur ohmique, comment exprimer P avec R et I ?", ra: "P = U × I = R × I × I = R × I²." },
      { q: "Pourquoi cette information est-elle importante pour les fusibles ?", ra: "Le fusible doit supporter le courant appelé : un appareil puissant exige un fusible et des fils adaptés." },
    ],
    technique: "Questions-réponses", support: "Tableau",
  },
  synthese: {
    enseignant: "Donc, tout appareil électrique porte une plaque signalétique : sa tension d'usage et sa puissance consommée en fonctionnement normal : « 220 V ; 1 000 W » se lit : branché sur 220 V, cet appareil consomme 1 000 watts. La relation fondamentale : P = U × I : la puissance (watts) est le produit de la tension (volts) par l'intensité (ampères) ; pour les appareils du secteur, on admet P ≈ U × I avec les valeurs efficaces. On en déduit le courant appelé : I = P ÷ U : notre bouilloire de 2 000 W appelle 9 A : ligne et fusible doivent le supporter ! Pour un conducteur ohmique, en combinant avec la loi d'Ohm : P = R × I² : la puissance dissipée croît comme le carré de l'intensité : doubler le courant quadruple l'échauffement : retenez bien ce résultat pour la loi de Joule, la semaine prochaine.",
    apprenants: "Écoutent et recopient les formules.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Une lampe porte « 220 V ; 75 W ». Calcule l'intensité du courant qui la traverse en fonctionnement normal.",
      items: [],
      corrige: [
        [{ text: "I = P ÷ U = 75 ÷ 220 ≈ " }, { text: "0,34 A", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Un résistor de 100 Ω est traversé par 0,5 A. Calcule la puissance qu'il consomme.",
      items: [],
      corrige: [
        [{ text: "P = R × I² = 100 × 0,25 = " }, { text: "25 W", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, calcul posé",
  evaluation: [
    {
      consigne: "Complète : la puissance électrique s'écrit P = ……… × ……… ; unité : le ……… ; pour un conducteur ohmique, P = R × ……… ; le courant appelé vaut I = ……… ÷ ……… .",
      items: [],
      corrige: [
        [{ text: "P = " }, { text: "U", cle: true }, { text: " × " }, { text: "I", cle: true }, { text: " ; le " }, { text: "watt (W)", cle: true }, { text: " ; R × " }, { text: "I²", cle: true }, { text: " ; I = " }, { text: "P", cle: true }, { text: " ÷ " }, { text: "U", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Que signifie l'inscription « 220 V ; 2 000 W » d'une bouilloire ? Quel courant appelle-t-elle ?",
      items: [],
      corrige: [
        [{ text: "Tension d'usage " }, { text: "220 V", cle: true }, { text: " et puissance consommée " }, { text: "2 000 W", cle: true }, { text: " ; I = 2 000 ÷ 220 ≈ " }, { text: "9 A", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["puissance électrique", "plaque signalétique", "P = U × I", "watt", "courant appelé", "P = R × I²"],
    sections: [
      {
        titre: "1. La plaque signalétique",
        paras: [
          "Tout appareil porte deux indications : sa tension d'usage (V) et sa puissance consommée en fonctionnement normal (W). Exemples : lampe « 230 V ; 60 W » ; fer « 220 V ; 1 000 W ».",
          "Prends le réflexe de lire ces plaques : elles se trouvent sous l'appareil, sur le culot des lampes ou près du cordon. Deux nombres qui disent tout de la consommation !",
        ],
      },
      {
        titre: "2. La relation P = U × I",
        paras: [
          "La puissance électrique consommée est le produit de la tension par l'intensité : P = U × I (watt = volt × ampère). Pour les appareils alimentés par le secteur, on admet P ≈ U × I avec les valeurs efficaces.",
        ],
        puces: [
          "courant appelé : I = P ÷ U : à connaître pour choisir fils et fusibles ;",
          "pour un conducteur ohmique : P = R × I² (en combinant avec U = R I).",
        ],
      },
      {
        titre: "3. Les ordres de grandeur",
        paras: [
          "Règle d'or à retenir : tout ce qui CHAUFFE est gourmand (fer, bouilloire, réchaud : plus de 1 000 W) ; tout ce qui éclaire ou fait du son est sobre (DEL, radio : moins de 20 W).",
        ],
        puces: [
          "radio : 15 W ; lampe DEL : 9 W ; vieille ampoule : 60 W ;",
          "fer à repasser : 1 000 W ; bouilloire : 2 000 W ;",
          "plus P est grande, plus le courant appelé est fort.",
        ],
      },
      {
        titre: "4. Exemples résolus",
        paras: [
          "Exemple 1 — Quel courant appelle un fer à repasser « 220 V ; 1 100 W » ? Peut-il partager un fusible de 10 A avec une bouilloire de 2 200 W ? Solution : fer : I = 1 100 ÷ 220 = 5 A ; bouilloire : I = 2 200 ÷ 220 = 10 A. Ensemble : 5 + 10 = 15 A > 10 A : le fusible fond ! Il faut les brancher sur des lignes différentes.",
          "Exemple 2 — Un résistor de 100 Ω est traversé par 0,3 A. Calcule sa puissance dissipée de deux façons. Solution : 1re méthode : U = R × I = 100 × 0,3 = 30 V puis P = U × I = 30 × 0,3 = 9 W. 2e méthode : P = R × I² = 100 × 0,09 = 9 W. Les deux formules donnent toujours le même résultat : la seconde va juste plus vite !",
        ],
      },
    ],
    saisTu: [
      "Une lampe DEL de 9 W éclaire autant que la vieille ampoule de 60 W : sept fois moins de puissance pour la même lumière ! Sur une année, la différence paie plusieurs kilos de riz. C'est pourquoi la JIRAMA et les programmes d'électrification distribuent des lampes DEL dans tout Madagascar.",
      "La formule P = R × I² explique le choix des GROS câbles pour les fortes puissances : si I double, l'échauffement des fils QUADRUPLE ! Les électriciens dimensionnent chaque fil selon le courant appelé : une simple formule de 3e protège les maisons de l'incendie.",
    ],
    experience: [
      "L'inventaire des puissances :",
      "Matériel : un carnet, un crayon, les plaques signalétiques de la maison (ou d'une boutique).",
      "Protocole : 1. Relève les plaques signalétiques : lampes, radio, fer, téléviseur…",
      "2. Classe les appareils du moins puissant au plus puissant.",
      "3. Calcule le courant appelé par chacun : I = P ÷ U.",
      "4. Additionne les courants si tout fonctionnait en même temps et compare au calibre du disjoncteur (souvent 15 ou 20 A).",
      "Observation : les appareils qui chauffent dominent largement le classement ; la somme des courants dépasse parfois le calibre : impossible de tout allumer à la fois !",
      "Conclusion : P = U × I permet de prévoir le courant appelé par chaque appareil et de comprendre pourquoi le disjoncteur saute quand on branche trop de « chauffeurs » ensemble.",
    ],
  },
  substitutions: [
    { officiel: "Wattmètre", local: "Lecture des plaques signalétiques + calcul P = U × I" },
    { officiel: "Banc d'appareils étalonnés", local: "Appareils de la maison : lampe, radio, fer, bouilloire" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Complète : a) U = 220 V, I = 2 A : P ? b) P = 1 100 W, U = 220 V : I ? c) R = 50 Ω, I = 2 A : P ? d) P = 60 W, I = 0,5 A : U ?",
      items: [],
      corrige: [
        [{ text: "a) P = " }, { text: "440 W", cle: true }, { text: " ; b) I = " }, { text: "5 A", cle: true }, { text: " ; c) P = 50 × 4 = " }, { text: "200 W", cle: true }, { text: " ; d) U = " }, { text: "120 V", cle: true }, { text: ". (1 point par calcul)" }],
      ],
    },
    {
      points: 3,
      consigne: "Le circuit « prises » d'une maison est protégé par un fusible de 10 A sous 220 V. Peut-on y brancher ensemble le fer (1 000 W) et la bouilloire (2 000 W) ? Justifie par le calcul.",
      items: [],
      corrige: [
        [{ text: "I total = (1 000 + 2 000) ÷ 220 ≈ " }, { text: "13,6 A > 10 A", cle: true }, { text: " : " }, { text: "non, le fusible fond", cle: true }, { text: " : il faut les utiliser séparément." }],
      ],
    },
    {
      points: 3,
      consigne: "Montre que pour un conducteur ohmique, P = R × I², puis calcule la puissance dissipée par un fil de 2 Ω parcouru par 8 A.",
      items: [],
      corrige: [
        [{ text: "P = U × I et U = R × I donc " }, { text: "P = R × I²", cle: true }, { text: " ; P = 2 × 64 = " }, { text: "128 W", cle: true }, { text: " : le fil chauffe beaucoup !" }],
      ],
    },
  ],
};

const S16 = {
  numero: 16, total: 34, unite: "II", theme: "Électricité",
  titre: "L'énergie électrique ; l'effet Joule et sa loi",
  objectif: "calculer l'énergie électrique consommée W = P × t et d'énoncer la loi de Joule",
  documentation: DOC,
  support: "Compteur électrique (ou photo), facture JIRAMA, fil fin, pile, appareils divers",
  image: "images/img_seance16.png",
  imageLegende: "Figure 14 — Le compteur additionne les kilowattheures ; la loi de Joule : Q = R × I² × t",
  revision: {
    qa: [
      { q: "Rappelle la relation de la puissance électrique.", ra: "P = U × I ; pour un résistor : P = R × I²." },
      { q: "Que lit-on sur une plaque signalétique ?", ra: "La tension d'usage et la puissance consommée." },
      { q: "Qu'est-ce que l'effet Joule, vu en T8 ?", ra: "L'échauffement d'un conducteur parcouru par un courant." },
    ],
    technique: "Questions-réponses orales", support: "Ardoise",
  },
  miseEnSituation: {
    enseignant: [
      "La facture JIRAMA de la famille indique : « 85 kWh consommés ce mois ». Papa fronce les sourcils : « Qu'est-ce qu'on a bien pu consommer ? » Pendant ce temps, le fer à repasser chauffe, la bouilloire siffle… et le compteur tourne.",
      "Que compte exactement le compteur, et d'où vient la chaleur de nos appareils ?",
      "R.A. : Il compte l'énergie électrique W = P × t, en kilowattheures ; la chaleur vient de l'effet Joule, régi par la loi de Joule.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Facture JIRAMA, tableau",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « L'énergie électrique ; l'effet Joule et sa loi ». Après cette séance, vous serez capables de calculer une énergie consommée et d'énoncer la loi de Joule.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien. 1) Je fais passer le courant d'une pile dans un fil métallique très fin : en quelques secondes, il devient brûlant : c'est l'effet Joule. 2) Le compteur de l'école : quand le fer fonctionne, son disque tourne vite ; lampe seule : il tourne lentement : il compte l'énergie W = P × t. 3) Calculons : le fer (1 kW) pendant 2 h : W = 1 × 2 = 2 kWh ; la lampe (0,06 kW) pendant 2 h : 0,12 kWh. 4) Sur la facture : 85 kWh × prix du kWh = le montant à payer.",
    apprenants: "Observent, lisent le compteur, vérifient une facture.",
    technique: "Expérimentation, observation, calculs", support: "Fil fin, compteur, facture",
  },
  analyse: {
    qa: [
      { q: "Donne la formule de l'énergie électrique consommée.", ra: "W = P × t : puissance × durée." },
      { q: "Quelles unités emploie-t-on ?", ra: "Le joule (P en W, t en s) ou, en pratique, le kilowattheure : P en kW et t en h ; 1 kWh = 3 600 000 J." },
      { q: "Qu'est-ce que l'effet Joule ?", ra: "Le dégagement de chaleur par tout conducteur parcouru par un courant." },
      { q: "Énonce la loi de Joule.", ra: "L'énergie électrique reçue par un conducteur ohmique est intégralement convertie en chaleur : Q = R × I² × t." },
      { q: "Cite des applications et un danger de l'effet Joule.", ra: "Applications : lampe à incandescence, fer à repasser, fer à souder, réchaud ; danger : destruction des appareils et incendies en cas de dépassement des limites." },
    ],
    technique: "Questions-réponses", support: "Tableau",
  },
  synthese: {
    enseignant: "Donc, l'énergie électrique consommée par un appareil de puissance P pendant une durée t vaut W = P × t : en joules si P est en watts et t en secondes ; en pratique, on utilise le kilowattheure : 1 kWh est l'énergie d'un appareil de 1 kW fonctionnant 1 h, soit 3 600 000 J. Le compteur électrique de la maison additionne les kWh de tous les appareils : l'énergie totale est la somme des W = P × t de chacun : c'est ce que facture la JIRAMA. L'effet Joule : tout conducteur parcouru par un courant s'échauffe. La loi de Joule précise : l'énergie électrique reçue par un conducteur ohmique est intégralement convertie en chaleur : Q = R × I² × t (joules). Applications : lampes à incandescence, fers à repasser et à souder, réchauds… Mais l'effet Joule détruit aussi les dispositifs dont on dépasse les limites : d'où les fusibles, la semaine prochaine !",
    apprenants: "Écoutent et recopient les formules.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Un téléviseur de 100 W fonctionne 5 h par jour. Calcule l'énergie consommée par jour, en kWh.",
      items: [],
      corrige: [
        [{ text: "W = 0,1 × 5 = " }, { text: "0,5 kWh", cle: true }, { text: " par jour." }],
      ],
    },
    {
      consigne: "Un résistor de 40 Ω est parcouru par 0,5 A pendant 10 min. Calcule la chaleur dégagée (loi de Joule).",
      items: [],
      corrige: [
        [{ text: "Q = R × I² × t = 40 × 0,25 × 600 = " }, { text: "6 000 J", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, calcul posé",
  evaluation: [
    {
      consigne: "Complète : W = ……… × ……… ; 1 kWh = ……… J ; la loi de Joule : Q = ……… × ……… × ……… ; le compteur mesure l'……… consommée en ……… .",
      items: [],
      corrige: [
        [{ text: "W = " }, { text: "P", cle: true }, { text: " × " }, { text: "t", cle: true }, { text: " ; " }, { text: "3 600 000", cle: true }, { text: " J ; Q = " }, { text: "R", cle: true }, { text: " × " }, { text: "I²", cle: true }, { text: " × " }, { text: "t", cle: true }, { text: " ; l'" }, { text: "énergie", cle: true }, { text: " en " }, { text: "kWh", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "La famille utilise chaque jour : le fer (1 000 W, 1 h), 4 lampes (60 W chacune, 5 h), la radio (20 W, 8 h). Calcule l'énergie quotidienne totale en kWh.",
      items: [],
      corrige: [
        [{ text: "Fer : 1 kWh ; lampes : 4 × 0,06 × 5 = 1,2 kWh ; radio : 0,02 × 8 = 0,16 kWh ; total = " }, { text: "2,36 kWh", cle: true }, { text: " par jour." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["énergie électrique", "W = P × t", "kilowattheure", "compteur", "effet Joule", "loi de Joule"],
    sections: [
      {
        titre: "1. L'énergie électrique consommée",
        paras: [
          "Un appareil de puissance P fonctionnant pendant une durée t consomme l'énergie W = P × t : en joules (W et s), ou en kilowattheures (kW et h). 1 kWh = 3 600 000 J.",
          "L'énergie d'une installation est la somme des énergies consommées par chaque appareil : c'est elle que mesure le compteur électrique et que facture la JIRAMA.",
          "Bien distinguer puissance et énergie : la puissance est un DÉBIT (des joules par seconde) ; l'énergie est la QUANTITÉ totale consommée. Une petite lampe allumée toute la nuit peut consommer plus qu'une bouilloire utilisée deux minutes !",
        ],
      },
      {
        titre: "2. L'effet Joule",
        paras: [
          "Tout conducteur parcouru par un courant électrique s'échauffe : c'est l'effet Joule.",
          "Il est tantôt utile (chauffer, éclairer par incandescence), tantôt nuisible (pertes dans les fils, surchauffe des appareils) : le même phénomène cuit ton riz et menace les installations surchargées !",
        ],
      },
      {
        titre: "3. La loi de Joule",
        paras: [
          "L'énergie électrique reçue par un conducteur ohmique est intégralement convertie en chaleur : Q = R × I² × t (Q en joules).",
        ],
        puces: [
          "applications : lampe à incandescence, fer à repasser, fer à souder, réchaud ;",
          "danger : l'effet Joule détruit les dispositifs dont on dépasse les limites de fonctionnement (échauffement, incendie).",
        ],
      },
      {
        titre: "4. Exemples résolus",
        paras: [
          "Exemple 1 — Une bouilloire de 2 000 W fonctionne 30 minutes. Calcule l'énergie consommée en kWh, puis le coût à 800 Ar le kWh. Solution : P = 2 kW ; t = 0,5 h ; W = P × t = 2 × 0,5 = 1 kWh. Coût : 1 × 800 = 800 Ar. La demi-heure de bouilloire coûte autant que 100 heures d'une lampe DEL de 10 W !",
          "Exemple 2 — Un résistor de 50 Ω est traversé par 2 A pendant 5 minutes. Quelle chaleur dégage-t-il ? Solution : loi de Joule : Q = R × I² × t = 50 × 4 × 300 = 60 000 J. N'oublie pas les conversions : I² = 2² = 4, et t = 5 × 60 = 300 s : le temps en secondes pour un résultat en joules !",
        ],
      },
    ],
    saisTu: [
      "Sur les anciens compteurs, le disque horizontal qui tourne est freiné par un aimant et entraîné par le courant : sa vitesse est proportionnelle à la puissance consommée, et son nombre de tours compte les kWh ! Les nouveaux compteurs électroniques font le même calcul... sans une seule pièce mobile.",
      "James Joule mesura l'équivalence entre travail et chaleur avec des roues à aubes agitant de l'eau dans un tonneau… pendant son voyage de noces, dit la légende ! Sa femme surveillait le thermomètre. L'unité d'énergie du monde entier est née d'une lune de miel studieuse.",
    ],
    experience: [
      "Le détective du compteur :",
      "Matériel : le compteur électrique de la maison (ou d'un voisin, avec permission), un carnet, l'inventaire des puissances de la séance précédente.",
      "Protocole : 1. Note l'index du compteur le soir à une heure précise.",
      "2. Note-le le lendemain à la même heure : la différence est la consommation du jour en kWh.",
      "3. Estime W = P × t pour chaque appareil utilisé dans la journée.",
      "4. Compare ton total au relevé du compteur.",
      "Observation : le total estimé s'approche du relevé ; les appareils qui chauffent (fer, réchaud, bouilloire) écrasent tout le reste ; les petites veilles comptent aussi sur la durée.",
      "Conclusion : W = P × t rend la facture prévisible : traquer les fortes puissances et les longues durées, c'est la clé des économies d'énergie à la maison.",
    ],
  },
  substitutions: [
    { officiel: "Compteur pédagogique", local: "Compteur réel de la maison, photo de compteur, facture JIRAMA" },
    { officiel: "Calorimètre (vérification loi de Joule)", local: "Hors programme : on admet la loi sans vérification calorimétrique" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "a) Convertis 2,5 kWh en joules. b) Une bouilloire de 2 000 W fonctionne 15 min : calcule W en kWh. c) Que coûte cette utilisation si le kWh vaut 600 ariary ? d) Un fil de résistance 1,5 Ω parcouru par 10 A pendant 60 s : calcule Q.",
      items: [],
      corrige: [
        [{ text: "a) 2,5 × 3 600 000 = " }, { text: "9 000 000 J", cle: true }, { text: " ; b) 2 × 0,25 = " }, { text: "0,5 kWh", cle: true }, { text: " ; c) 0,5 × 600 = " }, { text: "300 ariary", cle: true }, { text: " ; d) Q = 1,5 × 100 × 60 = " }, { text: "9 000 J", cle: true }, { text: ". (1 point par calcul)" }],
      ],
    },
    {
      points: 3,
      consigne: "Énonce la loi de Joule et cite deux applications pratiques et un danger de l'effet Joule.",
      items: [],
      corrige: [
        [{ text: "" }, { text: "L'énergie électrique reçue par un conducteur ohmique est intégralement convertie en chaleur (Q = R I² t)", cle: true }, { text: " ; applications : " }, { text: "fer à repasser, réchaud (ou lampe, fer à souder)", cle: true }, { text: " ; danger : " }, { text: "échauffement destructeur, incendie", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "Pourquoi les câbles d'une installation chauffent-ils dangereusement quand on branche trop d'appareils ? Utilise Q = R × I² × t dans ton explication.",
      items: [],
      corrige: [
        [{ text: "Trop d'appareils → " }, { text: "I total augmente", cle: true }, { text: " ; la chaleur croît comme " }, { text: "le carré de I", cle: true }, { text: " : doubler le courant quadruple l'échauffement des fils → risque d'incendie." }],
      ],
    },
  ],
};

const S17 = {
  numero: 17, total: 34, unite: "II", theme: "Électricité",
  titre: "L'électricité à la maison : installation, protection, sécurité",
  objectif: "décrire et de schématiser une installation électrique domestique et d'énoncer les règles de sécurité",
  documentation: DOC,
  support: "Maquette ou planche d'installation, disjoncteur et fusibles réels, facture JIRAMA, affiches de sécurité",
  image: "images/img_seance17.png",
  imageLegende: "Figure 15 — Du compteur au disjoncteur, puis aux lignes protégées par fusibles : l'installation domestique",
  revision: {
    qa: [
      { q: "Rappelle le principe de production d'une tension alternative, vu en T8.", ra: "Un aimant tournant près d'une bobine (alternateur) ; le transformateur change la tension." },
      { q: "Pourquoi transporte-t-on l'électricité en haute tension ?", ra: "Pour réduire les pertes par effet Joule dans les câbles." },
      { q: "Rappelle la loi de Joule.", ra: "Q = R × I² × t : l'énergie reçue devient intégralement chaleur." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Orage sur le quartier : toutes les lampes de la maison s'éteignent d'un coup ! Papa va au tableau : le disjoncteur a sauté. Il le réarme : tout revient. Mais la semaine dernière, seule la ligne de la cuisine était morte : c'était un fusible.",
      "Comment l'électricité circule-t-elle dans la maison, et qui nous protège des accidents ?",
      "R.A. : La ligne JIRAMA traverse le compteur puis le disjoncteur ; les lignes en dérivation sont chacune protégées par un fusible.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « L'électricité à la maison ». Après cette séance, vous serez capables de décrire et schématiser l'installation, d'expliquer les protections et d'énoncer les règles de sécurité.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien la planche de l'installation. 1) La ligne de la JIRAMA arrive au compteur, qui mesure l'énergie. 2) Elle traverse ensuite le disjoncteur général. 3) À ses bornes se branchent, en dérivation, les lignes de distribution : éclairage, prises, gros appareils : chacune protégée par son fusible. 4) Voici un fusible fondu : son fil intérieur est coupé : il s'est sacrifié pour protéger sa ligne. 5) Sur l'affiche : les circonstances d'électrocution : mains mouillées, fil dénudé, appareil défectueux ; et d'incendie : surcharge, vieux fils.",
    apprenants: "Observent la planche, examinent fusibles et disjoncteur, lisent l'affiche.",
    technique: "Observation, description", support: "Planche, composants réels, affiches",
  },
  analyse: {
    qa: [
      { q: "Quel est le trajet du courant dans l'installation ?", ra: "Ligne JIRAMA → compteur → disjoncteur général → lignes de distribution en dérivation." },
      { q: "Pourquoi les lignes sont-elles en dérivation ?", ra: "Pour que chaque appareil reçoive la même tension (220 V) et fonctionne indépendamment." },
      { q: "Quel est le rôle du disjoncteur ? du fusible ?", ra: "Le disjoncteur protège toute l'installation et se réarme ; chaque fusible ne protège qu'une ligne et doit être remplacé après avoir fondu." },
      { q: "Cite des circonstances d'électrocution.", ra: "Toucher un fil dénudé ou un appareil défectueux, manipuler avec les mains mouillées, prise surchargée près de l'eau." },
      { q: "Cite les principales règles de sécurité.", ra: "Ne jamais toucher fils dénudés ni prises ; mains sèches ; débrancher avant de réparer ; ne jamais refaire avec le secteur les expériences faites avec des piles ; seul un adulte qualifié intervient sur le 220 V." },
    ],
    technique: "Questions-réponses", support: "Planche, tableau",
  },
  synthese: {
    enseignant: "Donc, l'installation domestique suit toujours le même schéma : la ligne de la JIRAMA arrive au compteur (qui mesure l'énergie en kWh), traverse le disjoncteur général, puis alimente les lignes de distribution branchées en dérivation : ainsi chaque appareil reçoit 220 V et fonctionne indépendamment. Les protections : le disjoncteur général protège toutes les lignes de l'habitation et se réarme après incident ; chaque fusible ne protège qu'une seule ligne : son fil calibré fond (effet Joule !) dès que le courant dépasse la limite : on le remplace par un fusible de même calibre, jamais par un fil quelconque ! L'électrocution menace quand le corps devient conducteur : fil dénudé, appareil défectueux, mains mouillées ; l'incendie guette les lignes surchargées. Règles d'or : mains sèches, jamais de doigt ni d'objet dans une prise, débrancher avant toute intervention, et surtout : ne JAMAIS refaire avec le secteur les expériences que nous faisons avec des piles : seul le professeur manipule le 220 V.",
    apprenants: "Écoutent et recopient le schéma de l'installation.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Décris, dans l'ordre, le trajet du courant depuis la ligne JIRAMA jusqu'à une lampe de la maison.",
      items: [],
      corrige: [
        [{ text: "Ligne JIRAMA → " }, { text: "compteur", cle: true }, { text: " → " }, { text: "disjoncteur général", cle: true }, { text: " → " }, { text: "ligne d'éclairage (en dérivation) protégée par son fusible", cle: true }, { text: " → interrupteur → lampe." }],
      ],
    },
    {
      consigne: "Quelle différence de rôle entre le disjoncteur et un fusible ?",
      items: [],
      corrige: [
        [{ text: "Le disjoncteur protège " }, { text: "TOUTES les lignes de l'habitation", cle: true }, { text: " (et se réarme) ; chaque fusible ne protège " }, { text: "qu'UNE ligne de distribution", cle: true }, { text: " (et se remplace)." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, schéma",
  evaluation: [
    {
      consigne: "Vrai ou Faux ? Corrige si nécessaire :",
      items: [
        "a) Les lignes de distribution sont branchées en série.",
        "b) Un fusible fondu peut être remplacé par un fil de fer quelconque.",
        "c) On peut refaire chez soi, avec le secteur, les expériences faites en classe avec des piles.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Faux", cle: true }, { text: " : en dérivation, pour que chaque appareil ait 220 V." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : uniquement par un fusible de même calibre, sinon plus de protection !" }],
        [{ text: "c) " }, { text: "Faux", cle: true }, { text: " : le secteur est mortel ; seul le professeur manipule le 220 V." }],
      ],
    },
    {
      consigne: "Cite trois circonstances d'électrocution et la règle de sécurité qui les évite.",
      items: [],
      corrige: [
        [{ text: "" }, { text: "Fil dénudé (ne pas toucher, faire réparer)", cle: true }, { text: " ; " }, { text: "mains mouillées (toujours manipuler au sec)", cle: true }, { text: " ; " }, { text: "appareil défectueux sous tension (débrancher avant toute intervention)", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["compteur", "disjoncteur", "fusible", "lignes de distribution", "électrocution", "règles de sécurité"],
    sections: [
      {
        titre: "1. Le schéma de l'installation",
        paras: [
          "La ligne de la JIRAMA arrive au compteur (mesure de l'énergie), traverse le disjoncteur général, puis alimente les lignes de distribution branchées en dérivation : chaque appareil reçoit 220 V et fonctionne indépendamment des autres.",
          "Retrouve tes lois de 5e et 4e : le montage en dérivation garantit la même tension partout (unicité), et les intensités des lignes s'additionnent dans le câble principal : c'est lui que surveille le disjoncteur !",
        ],
      },
      {
        titre: "2. Les protections",
        paras: [],
        puces: [
          "le disjoncteur général protège toutes les lignes de l'habitation ; il se réarme après l'incident ;",
          "chaque fusible ne protège qu'une ligne : son fil fond (effet Joule) au-delà du calibre ;",
          "remplacer un fusible uniquement par un fusible de même calibre : jamais un fil quelconque !",
        ],
      },
      {
        titre: "3. Les dangers et les règles de sécurité",
        paras: [
          "Électrocution : fil dénudé, appareil défectueux, mains mouillées. Incendie : lignes surchargées, vieux fils (effet Joule).",
        ],
        puces: [
          "ne jamais toucher un fil dénudé ni introduire quoi que ce soit dans une prise ;",
          "manipuler mains sèches, loin de l'eau ;",
          "débrancher avant toute intervention ;",
          "ne JAMAIS refaire avec le secteur les expériences réalisées en classe avec des piles ;",
          "seul un adulte qualifié intervient sur l'installation.",
        ],
      },
      {
        titre: "4. Exemples résolus",
        paras: [
          "Exemple 1 — Une ligne protégée par un fusible de 10 A alimente un fer (1 100 W), une bouilloire (2 200 W) et une lampe (100 W) sous 220 V. Que se passe-t-il si tout fonctionne ensemble ? Solution : courants appelés : 5 A + 10 A + 0,45 A ≈ 15,45 A > 10 A : le fusible fond et coupe la ligne, comme prévu. Solution pratique : répartir les gros appareils sur des lignes différentes.",
          "Exemple 2 — Après la fonte d'un fusible, un voisin propose de le remplacer par un gros fil de cuivre « pour que ça ne saute plus ». Pourquoi est-ce très dangereux ? Solution : le fusible fond VOLONTAIREMENT pour couper les surintensités. Un gros fil de cuivre ne fond pas : la surcharge continue, les fils de la ligne chauffent (Q = R × I² × t)… jusqu'à l'incendie. Un fusible se remplace uniquement par un fusible de même calibre.",
        ],
      },
    ],
    saisTu: [
      "Le corps humain conduit d'autant mieux le courant qu'il est mouillé : sa résistance passe d'environ 100 000 Ω (peau sèche) à moins de 1 000 Ω (peau humide) ! Sous 220 V, la loi d'Ohm donne alors I = 220 ÷ 1 000 = 0,22 A : plus de quatre fois le seuil mortel de 50 mA. Voilà pourquoi salle d'eau et électricité ne font jamais bon ménage.",
      "Les installations modernes ajoutent un gardien supplémentaire : le disjoncteur différentiel. Il compare en permanence le courant qui part et celui qui revient : la moindre fuite (par exemple à travers un corps humain !) le fait couper en quelques millièmes de seconde. Une invention qui sauve des milliers de vies chaque année.",
    ],
    experience: [
      "L'audit sécurité de la maison (sans rien toucher !) :",
      "Matériel : un carnet, un crayon, tes yeux : et rien d'autre : on ne touche à RIEN.",
      "Protocole : 1. Observe : où sont le compteur et le disjoncteur ? Quel est le calibre indiqué ?",
      "2. Compte les lignes et leurs fusibles au tableau électrique.",
      "3. Chasse aux dangers : fils dénudés, prises cassées, multiprises surchargées, appareils près de l'eau : note tout.",
      "4. Présente ta liste à un adulte : que faut-il faire réparer en priorité ?",
      "Observation : la plupart des maisons révèlent au moins un point à corriger : multiprise surchargée, cordon abîmé ou prise descellée.",
      "Conclusion : la sécurité électrique commence par un regard informé : savoir lire une installation, c'est déjà protéger sa famille : et on laisse toujours les réparations à un adulte qualifié.",
    ],
  },
  substitutions: [
    { officiel: "Maquette d'installation domestique", local: "Planche dessinée + composants réels récupérés (fusibles fondus, vieux disjoncteur)" },
    { officiel: "Tableau pédagogique des dangers", local: "Affiches dessinées par la classe : électrocution, incendie" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Associe : compteur, disjoncteur, fusible, lignes de distribution — a) protège une seule ligne ; b) mesure l'énergie en kWh ; c) branchées en dérivation ; d) protège toute l'installation.",
      items: [],
      corrige: [
        [{ text: "Compteur → " }, { text: "b", cle: true }, { text: " ; disjoncteur → " }, { text: "d", cle: true }, { text: " ; fusible → " }, { text: "a", cle: true }, { text: " ; lignes → " }, { text: "c", cle: true }, { text: ". (1 point par association)" }],
      ],
    },
    {
      points: 3,
      consigne: "La ligne des prises est protégée par un fusible de 16 A. Un court-circuit se produit : explique ce qui se passe, en citant l'effet physique mis en jeu.",
      items: [],
      corrige: [
        [{ text: "Le courant devient très intense ; " }, { text: "l'effet Joule fait fondre le fil calibré du fusible", cle: true }, { text: " : " }, { text: "la ligne est coupée avant que les câbles ne brûlent", cle: true }, { text: " ; les autres lignes continuent de fonctionner." }],
      ],
    },
    {
      points: 3,
      consigne: "Rédige trois règles de sécurité électrique à afficher à la maison, avec pour chacune le danger évité.",
      items: [],
      corrige: [
        [{ text: "Exemples : " }, { text: "mains sèches (électrocution)", cle: true }, { text: " ; " }, { text: "ne rien enfoncer dans les prises (électrocution)", cle: true }, { text: " ; " }, { text: "une seule multiprise par prise murale (incendie par surcharge)", cle: true }, { text: ". (1 point par règle cohérente)" }],
      ],
    },
  ],
};

module.exports = { seances: [S12, S13, S14, S15, S16, S17] };
