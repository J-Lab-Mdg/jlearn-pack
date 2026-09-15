// data-unite1.js — T9 Unité I : MÉCANIQUE (séances 1 à 9)
const DOC = "Programme scolaire de la classe de 3e (T9) — Sciences Physiques (MEN Madagascar) ; manuel J-Learn";

const S1 = {
  numero: 1, total: 34, unite: "I", theme: "Mécanique",
  titre: "La notion de force ; le dynamomètre",
  objectif: "mettre en évidence la force exercée par un fil sur un objet et de mesurer son intensité à l'aide d'un dynamomètre",
  documentation: DOC,
  support: "Ficelle solide, objets divers (caisse, pierre, livre), dynamomètre, sac de sable, élastiques",
  image: "images/img_seance01.png",
  imageLegende: "Figure 1 — Le fil tendu tire la caisse : la force devient visible, et le dynamomètre la mesure",
  revision: {
    qa: [
      { q: "Comment mesure-t-on un poids, vu en T8 ?", ra: "Au dynamomètre, en newtons (N)." },
      { q: "Rappelle la relation entre poids et masse.", ra: "P = m × g, avec g ≈ 10 N/kg sur Terre." },
      { q: "Le poids est-il une masse ?", ra: "Non : la masse (kg) se mesure à la balance ; le poids est une force (N)." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Au marché d'Anosibe, Rakoto tire son chariot chargé avec une corde. La corde se tend, se raidit… et le chariot, d'abord immobile, se met en marche. Si Rakoto tire trop fort d'un coup sec, la corde casse !",
      "Qu'est-ce qui met le chariot en mouvement, et comment mesurer « la force » de Rakoto ?",
      "R.A. : La corde exerce une force sur le chariot ; on mesure son intensité avec un dynamomètre, en newtons.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La notion de force ; le dynamomètre ». Après cette séance, vous serez capables de mettre en évidence la force exercée par un fil et de mesurer son intensité.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien. 1) La caisse est immobile sur la table : rien ne se passe. 2) J'attache un fil et je tire doucement : le fil se tend… puis la caisse glisse : l'équilibre est rompu ! 3) Je tire de plus en plus fort sur le fil attaché au mur : il finit par casser. 4) J'intercale maintenant le dynamomètre entre le fil et la caisse : son aiguille se déplace quand je tire, et s'arrête sur une valeur.",
    apprenants: "Observent, tirent à leur tour, lisent le dynamomètre.",
    technique: "Expérimentation", support: "Caisse, fil, dynamomètre",
  },
  analyse: {
    qa: [
      { q: "Qu'est-ce qui a rompu l'équilibre de la caisse ?", ra: "La force exercée par le fil tendu sur la caisse." },
      { q: "Que visualise le fil tendu ?", ra: "Une droite : la droite d'action (ou ligne d'action) de la force." },
      { q: "Pourquoi le fil finit-il par casser ?", ra: "Parce que la force a une intensité : trop grande, elle dépasse la résistance du fil." },
      { q: "Quel appareil mesure l'intensité d'une force, et en quelle unité ?", ra: "Le dynamomètre ; l'unité internationale est le newton (N)." },
      { q: "Peut-on encore utiliser le kilogramme-force ?", ra: "Non : dans le système international, on n'utilise plus le kgf ; seule l'unité newton est employée." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Expériences, tableau",
  },
  synthese: {
    enseignant: "Donc, une force se manifeste par ses effets : elle peut mettre un objet en mouvement, l'arrêter, le déformer ou rompre son équilibre. Le fil tendu rend la force visible : il matérialise sa droite d'action. Une force possède une intensité, que l'on mesure avec un dynamomètre : à l'intérieur, un ressort s'allonge proportionnellement à la force appliquée. L'unité internationale d'intensité est le newton, de symbole N : le kilogramme-force ne s'utilise plus. Ordres de grandeur : soulever une pomme demande environ 1 N ; tendre un arc de chasse, 100 N ; le chariot de Rakoto exige plusieurs centaines de newtons. La semaine prochaine, nous dessinerons les forces !",
    apprenants: "Écoutent et recopient l'essentiel.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Réponds :",
      items: [
        "a) Cite trois effets possibles d'une force.",
        "b) Quel appareil mesure l'intensité d'une force ? En quelle unité ?",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Mettre en mouvement, arrêter ou dévier, déformer", cle: true }, { text: " (ou rompre un équilibre)." }],
        [{ text: "b) Le " }, { text: "dynamomètre", cle: true }, { text: ", en " }, { text: "newtons (N)", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Un fil tendu tire une brique posée au sol. Que matérialise le fil tendu ?",
      items: [],
      corrige: [
        [{ text: "La " }, { text: "droite d'action de la force", cle: true }, { text: " exercée par le fil sur la brique." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète : une force peut mettre un objet en ………, l'……… ou le ……… ; son intensité se mesure au ……… et s'exprime en ……… .",
      items: [],
      corrige: [
        [{ text: "En " }, { text: "mouvement", cle: true }, { text: ", l'" }, { text: "arrêter", cle: true }, { text: ", le " }, { text: "déformer", cle: true }, { text: " ; au " }, { text: "dynamomètre", cle: true }, { text: ", en " }, { text: "newtons (N)", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Vrai ou Faux ? « L'unité légale d'intensité d'une force est le kilogramme-force. » Justifie.",
      items: [],
      corrige: [
        [{ text: "" }, { text: "Faux", cle: true }, { text: " : dans le système international, l'unité est " }, { text: "le newton (N)", cle: true }, { text: " ; le kgf ne s'utilise plus." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["force", "droite d'action", "intensité", "dynamomètre", "newton"],
    sections: [
      {
        titre: "1. Les effets d'une force",
        paras: [
          "Une force ne se voit pas : on la reconnaît à ses effets. Elle peut mettre un objet en mouvement, l'arrêter, modifier sa trajectoire, le déformer ou rompre son équilibre.",
        ],
      },
      {
        titre: "2. La force exercée par un fil",
        paras: [
          "Un objet immobile tiré par un fil se met en mouvement quand le fil se tend : le fil exerce une force sur l'objet. Le fil tendu matérialise une droite appelée droite d'action (ou ligne d'action) de la force.",
        ],
      },
      {
        titre: "3. Le dynamomètre et le newton",
        paras: [
          "Le dynamomètre contient un ressort qui s'allonge sous l'action de la force : sa graduation indique l'intensité. L'unité internationale est le newton (N). Le kilogramme-force (kgf) ne s'utilise plus.",
        ],
        puces: [
          "soulever une pomme : environ 1 N ;",
          "soulever un seau d'eau de 10 L : environ 100 N ;",
          "un fil trop sollicité casse : toute force a une intensité limite supportable.",
        ],
      },
    ],
    saisTu: [
      "Le newton rend hommage à Isaac Newton (1643-1727), qui comprit que la même force fait tomber la pomme et retient la Lune autour de la Terre ! Sur ton dynamomètre, tu liras parfois « daN » : le décanewton vaut 10 N, à peu près le poids d'un kilogramme.",
    ],
    experience: [
      "Ton dynamomètre à élastique :",
      "1. Fixe un élastique solide à un clou ; accroche au bout un crochet en fil de fer.",
      "2. Suspends une bouteille de 0,5 L pleine d'eau (poids ≈ 5 N) : marque l'allongement sur un carton derrière.",
      "3. Gradue : la moitié de l'allongement ≈ 2,5 N, le double ≈ 10 N (vérifie avec deux bouteilles).",
      "4. Mesure la force qu'il faut pour traîner ta trousse, un livre, une brique.",
    ],
  },
  substitutions: [
    { officiel: "Dynamomètre de laboratoire", local: "Élastique gradué + carton (étalonné avec des bouteilles d'eau)" },
    { officiel: "Chariot d'expérimentation", local: "Caisse en bois, boîte de conserve pleine de sable" },
    { officiel: "Fil de traction calibré", local: "Ficelle de raphia ou fil de pêche" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "QCM : 1. Une force se mesure : a) à la balance b) au dynamomètre c) au thermomètre. 2. L'unité d'intensité : a) kg b) N c) m. 3. Le fil tendu matérialise : a) la droite d'action b) le poids c) la masse. 4. Rompre un fil prouve que la force a : a) une couleur b) une intensité c) une masse.",
      items: [],
      corrige: [
        [{ text: "1. " }, { text: "b", cle: true }, { text: " ; 2. " }, { text: "b", cle: true }, { text: " ; 3. " }, { text: "a", cle: true }, { text: " ; 4. " }, { text: "b", cle: true }, { text: ". (1 point par réponse)" }],
      ],
    },
    {
      points: 3,
      consigne: "Donne trois exemples de forces de la vie quotidienne à Madagascar, en précisant leur effet.",
      items: [],
      corrige: [
        [{ text: "Exemples : " }, { text: "le zébu tire la charrette (mise en mouvement)", cle: true }, { text: " ; " }, { text: "le pied déforme le ballon (déformation)", cle: true }, { text: " ; " }, { text: "le frein arrête le vélo (arrêt du mouvement)", cle: true }, { text: ". (1 point par exemple)" }],
      ],
    },
    {
      points: 3,
      consigne: "Naly suspend un objet à son dynamomètre : il indique 12 N. Que représente cette valeur ? L'objet a-t-il une masse d'environ 1,2 kg ou 12 kg (g = 10 N/kg) ?",
      items: [],
      corrige: [
        [{ text: "C'est " }, { text: "l'intensité de la force (le poids de l'objet)", cle: true }, { text: " ; m = P ÷ g = 12 ÷ 10 = " }, { text: "1,2 kg", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S2 = {
  numero: 2, total: 34, unite: "I", theme: "Mécanique",
  titre: "Les caractéristiques d'une force ; le vecteur force",
  objectif: "donner les caractéristiques d'une force et de la représenter par un vecteur",
  documentation: DOC,
  support: "Fil, carton, dynamomètre, règle, tableau quadrillé, craies de couleur",
  image: "images/img_seance02.png",
  imageLegende: "Figure 2 — Direction, sens, intensité, point d'application : la force se dessine par un vecteur",
  revision: {
    qa: [
      { q: "Qu'est-ce qui matérialise la droite d'action d'une force ?", ra: "Le fil tendu." },
      { q: "Avec quel appareil mesure-t-on une force ?", ra: "Le dynamomètre." },
      { q: "En quelle unité ?", ra: "En newtons (N)." },
    ],
    technique: "Questions-réponses orales", support: "Ardoise",
  },
  miseEnSituation: {
    enseignant: [
      "Deux équipes s'affrontent au tir à la corde pendant la fête de l'école. Même corde, mêmes forces… mais les deux équipes tirent dans des sens opposés ! Et si l'une tirait vers le haut et l'autre horizontalement, le jeu serait tout différent.",
      "Pour décrire complètement une force, suffit-il de donner son intensité ?",
      "R.A. : Non : il faut aussi sa direction, son sens et son point d'application : quatre caractéristiques.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Les caractéristiques d'une force ; le vecteur force ». Après cette séance, vous serez capables de donner les quatre caractéristiques d'une force et de la représenter par un vecteur.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien. Le carton est fixé au support et je le tire avec un fil muni du dynamomètre. 1) Le fil tendu trace une direction dans l'espace. 2) Sur cette direction, deux sens sont possibles : je tire vers moi, ou je pousse vers le mur. 3) Le dynamomètre affiche 3 N : l'intensité. 4) La force s'applique au point d'attache du fil sur le carton : le point d'application. Je dessine maintenant tout cela au tableau : une flèche qui part du point d'application, portée par la direction du fil, orientée dans le sens de la traction, et dont la longueur traduit les 3 N.",
    apprenants: "Observent, identifient les quatre caractéristiques, reproduisent le dessin.",
    technique: "Expérimentation, modélisation", support: "Carton, fil, dynamomètre, tableau quadrillé",
  },
  analyse: {
    qa: [
      { q: "Quelles sont les quatre caractéristiques d'une force ?", ra: "Sa direction, son sens, son intensité et son point d'application." },
      { q: "Quelle est la différence entre direction et sens ?", ra: "La direction est la droite le long de laquelle la force agit ; sur une même direction, il y a deux sens possibles (le sens est indiqué par la flèche)." },
      { q: "Comment traduit-on l'intensité sur le dessin ?", ra: "Par la longueur du vecteur, selon une échelle choisie (ex. : 1 cm pour 1 N)." },
      { q: "Où place-t-on l'origine du vecteur ?", ra: "Au point d'application de la force." },
      { q: "Avec quelle échelle représenter une force de 6 N si 1 cm ↔ 2 N ?", ra: "Un vecteur long de 3 cm." },
    ],
    technique: "Questions-réponses, modélisation", support: "Tableau quadrillé, règle",
  },
  synthese: {
    enseignant: "Donc, décrire une force exige quatre renseignements : sa direction (celle de sa droite d'action, matérialisée par le fil tendu), son sens (l'un des deux possibles sur cette direction : il va de l'objet vers celui qui tire), son intensité (mesurée au dynamomètre, en newtons) et son point d'application (le point où la force s'exerce : le point d'attache). Une force se modélise alors par un vecteur : une flèche dont l'origine est le point d'application, la direction et le sens sont ceux de la force, et la longueur est proportionnelle à l'intensité selon l'échelle choisie. On note le vecteur force F surmonté d'une flèche. Ce dessin précis, toujours tracé à la règle, sera notre langage pendant toute l'unité !",
    apprenants: "Écoutent et s'entraînent à tracer des vecteurs.", technique: "Exposé", support: "Tableau noir, règle",
  },
  application: [
    {
      consigne: "Réponds :",
      items: [
        "a) Cite les quatre caractéristiques d'une force.",
        "b) Avec l'échelle 1 cm ↔ 5 N, quelle longueur donner au vecteur d'une force de 20 N ?",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Direction, sens, intensité, point d'application", cle: true }, { text: "." }],
        [{ text: "b) 20 ÷ 5 = " }, { text: "4 cm", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Un fil horizontal tire une caisse vers la droite avec une force de 8 N (échelle 1 cm ↔ 2 N). Décris le vecteur à tracer.",
      items: [],
      corrige: [
        [{ text: "Origine " }, { text: "au point d'attache du fil", cle: true }, { text: " ; direction " }, { text: "horizontale", cle: true }, { text: " ; sens " }, { text: "vers la droite", cle: true }, { text: " ; longueur 8 ÷ 2 = " }, { text: "4 cm", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Cahier quadrillé, règle",
  evaluation: [
    {
      consigne: "Complète : une force est représentée par un ……… ; son origine est le ……… ; sa longueur traduit l'……… selon une ……… choisie ; la flèche indique le ……… .",
      items: [],
      corrige: [
        [{ text: "Un " }, { text: "vecteur", cle: true }, { text: " ; le " }, { text: "point d'application", cle: true }, { text: " ; l'" }, { text: "intensité", cle: true }, { text: " ; une " }, { text: "échelle", cle: true }, { text: " ; le " }, { text: "sens", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Sur un schéma, un vecteur force mesure 6 cm avec l'échelle 1 cm ↔ 10 N. Quelle est l'intensité de la force ?",
      items: [],
      corrige: [
        [{ text: "F = 6 × 10 = " }, { text: "60 N", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["direction", "sens", "intensité", "point d'application", "vecteur force", "échelle"],
    sections: [
      {
        titre: "1. Les quatre caractéristiques d'une force",
        paras: [],
        puces: [
          "la direction : la droite le long de laquelle la force agit (droite d'action) ;",
          "le sens : l'une des deux orientations possibles sur cette direction ;",
          "l'intensité : la « grandeur » de la force, en newtons, mesurée au dynamomètre ;",
          "le point d'application : le point où la force s'exerce.",
        ],
      },
      {
        titre: "2. Le vecteur force",
        paras: [
          "Une force se modélise par un vecteur noté F fléché : une flèche d'origine le point d'application, de direction et de sens ceux de la force, de longueur proportionnelle à l'intensité selon l'échelle choisie.",
        ],
      },
      {
        titre: "3. La méthode pour tracer",
        paras: [],
        puces: [
          "1. Choisir (ou lire) l'échelle : par exemple 1 cm ↔ 2 N ;",
          "2. Calculer la longueur : force de 6 N → 3 cm ;",
          "3. Placer l'origine au point d'application ;",
          "4. Tracer à la règle sur la bonne direction, flèche dans le bon sens ;",
          "5. Nommer le vecteur (F) et noter l'échelle près du schéma.",
        ],
      },
    ],
    saisTu: [
      "Le mot « vecteur » vient du latin vehere, transporter : le vecteur « transporte » toutes les informations de la force dans un simple dessin ! Les ingénieurs qui ont conçu les ponts de la RN2 calculent des centaines de vecteurs forces avant de poser la première pierre.",
    ],
    experience: [
      "Le jeu des quatre caractéristiques :",
      "1. Pose une boîte sur la table, attache un fil et tire-la successivement : vers la droite, vers la gauche, en biais, doucement, fort.",
      "2. Pour chaque essai, un camarade décrit la force : direction ? sens ? intensité (petite/grande) ? point d'application ?",
      "3. Puis dessinez chaque force sur une feuille quadrillée avec l'échelle 1 cm ↔ 1 N (estimez avec votre dynamomètre à élastique).",
    ],
  },
  substitutions: [
    { officiel: "Table à forces de laboratoire", local: "Carton percé + fils + dynamomètres à élastique" },
    { officiel: "Papier millimétré", local: "Cahier quadrillé ordinaire" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Associe : direction, sens, intensité, point d'application — a) 15 N ; b) verticale ; c) vers le bas ; d) le crochet du seau.",
      items: [],
      corrige: [
        [{ text: "Direction → " }, { text: "b", cle: true }, { text: " ; sens → " }, { text: "c", cle: true }, { text: " ; intensité → " }, { text: "a", cle: true }, { text: " ; point d'application → " }, { text: "d", cle: true }, { text: ". (1 point par association)" }],
      ],
    },
    {
      points: 3,
      consigne: "Trace le vecteur de la force exercée par un fil qui tire un anneau A horizontalement vers la gauche, intensité 9 N, échelle 1 cm ↔ 3 N.",
      items: [],
      corrige: [
        [{ text: "Vecteur d'origine " }, { text: "A", cle: true }, { text: ", horizontal, flèche " }, { text: "vers la gauche", cle: true }, { text: ", longueur 9 ÷ 3 = " }, { text: "3 cm", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "Deux forces ont la même direction et la même intensité. Sont-elles forcément identiques ? Explique.",
      items: [],
      corrige: [
        [{ text: "" }, { text: "Non", cle: true }, { text: " : elles peuvent avoir " }, { text: "des sens contraires ou des points d'application différents", cle: true }, { text: " (comme au tir à la corde !)." }],
      ],
    },
  ],
};

const S3 = {
  numero: 3, total: 34, unite: "I", theme: "Mécanique",
  titre: "L'équilibre d'un solide soumis à deux forces",
  objectif: "donner les conditions nécessaires à l'équilibre d'un solide soumis à deux forces",
  documentation: DOC,
  support: "Morceau de carton léger, deux fils, deux dynamomètres, deux supports, règle",
  image: "images/img_seance03.png",
  imageLegende: "Figure 3 — Le carton immobile tiré par deux fils : deux forces directement opposées",
  revision: {
    qa: [
      { q: "Cite les quatre caractéristiques d'une force.", ra: "Direction, sens, intensité, point d'application." },
      { q: "Comment représente-t-on une force ?", ra: "Par un vecteur tracé à la règle, à l'échelle." },
      { q: "Que matérialise un fil tendu ?", ra: "La droite d'action de la force." },
    ],
    technique: "Questions-réponses orales", support: "Ardoise",
  },
  miseEnSituation: {
    enseignant: [
      "Au tir à la corde de la fête, il arrive un moment étrange : les deux équipes tirent de toutes leurs forces… et le nœud central ne bouge plus du tout ! Chaque équipe est pourtant bien en train de tirer.",
      "Comment un objet peut-il rester immobile alors que deux forces s'exercent sur lui ?",
      "R.A. : Parce que les deux forces se compensent exactement : mêmes droite d'action et intensité, sens contraires.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « L'équilibre d'un solide soumis à deux forces ». Après cette séance, vous serez capables d'énoncer les conditions de cet équilibre.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien. Le carton est maintenu au repos par deux fils tendus, chacun tiré par un dynamomètre accroché à un support. 1) Les deux fils sont dans le prolongement l'un de l'autre : même droite d'action. 2) Les deux dynamomètres indiquent la même valeur : 3 N et 3 N. 3) Les tractions se font vers des côtés opposés. 4) Si je déplace un support pour casser l'alignement : le carton tourne et se replace jusqu'à ce que les fils soient de nouveau alignés !",
    apprenants: "Observent, relèvent les valeurs, testent le désalignement.",
    technique: "Expérimentation, démarche d'investigation", support: "Carton, fils, dynamomètres",
  },
  analyse: {
    qa: [
      { q: "Combien de forces s'exercent sur le carton ?", ra: "Deux : celle de chaque fil (on néglige le poids du carton léger)." },
      { q: "Que constate-t-on sur leurs droites d'action ?", ra: "Elles sont confondues : les deux fils sont alignés." },
      { q: "Et sur leurs intensités ?", ra: "Elles sont égales : les deux dynamomètres affichent la même valeur." },
      { q: "Et sur leurs sens ?", ra: "Ils sont contraires : chaque fil tire de son côté." },
      { q: "Comment appelle-t-on deux forces qui vérifient ces trois conditions ?", ra: "Des forces directement opposées." },
    ],
    technique: "Questions-réponses", support: "Montage, tableau",
  },
  synthese: {
    enseignant: "Donc, le résultat est fondamental : si un solide au repos est soumis à deux forces, alors ces deux forces sont directement opposées : elles ont la même droite d'action, la même intensité et des sens contraires. Réciproquement, si les deux forces exercées sur un solide sont directement opposées, il peut rester en équilibre. C'est le cas du nœud du tir à la corde quand les équipes sont à égalité, de la lampe suspendue au plafond (le poids et la force du fil), du seau posé au sol (le poids et la réaction du sol). Attention : deux forces égales mais non alignées ne donnent pas l'équilibre : elles font tourner l'objet, comme notre carton ! Sur le schéma, les deux vecteurs sont portés par la même droite, de même longueur et de flèches opposées.",
    apprenants: "Écoutent et recopient le schéma d'équilibre.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Énonce les trois conditions pour que deux forces se compensent (forces directement opposées).",
      items: [],
      corrige: [
        [{ text: "" }, { text: "Même droite d'action", cle: true }, { text: ", " }, { text: "même intensité", cle: true }, { text: ", " }, { text: "sens contraires", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Une lampe de poids 2 N pend au bout de son fil, immobile. Donne les caractéristiques de la force exercée par le fil.",
      items: [],
      corrige: [
        [{ text: "Directement opposée au poids : direction " }, { text: "verticale", cle: true }, { text: ", sens " }, { text: "vers le haut", cle: true }, { text: ", intensité " }, { text: "2 N", cle: true }, { text: ", appliquée au point d'attache." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, schéma",
  evaluation: [
    {
      consigne: "Vrai ou Faux ? Corrige si nécessaire :",
      items: [
        "a) Deux forces de même intensité assurent toujours l'équilibre.",
        "b) Un solide en équilibre sous deux forces : celles-ci ont des sens contraires.",
        "c) Le poids d'un livre posé sur la table est compensé par la réaction de la table.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Faux", cle: true }, { text: " : il faut aussi la même droite d'action et des sens contraires." }],
        [{ text: "b) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: " : les deux forces sont directement opposées." }],
      ],
    },
    {
      consigne: "Un carton est tiré par deux fils non alignés, avec la même intensité. Reste-t-il en équilibre ? Que fait-il ?",
      items: [],
      corrige: [
        [{ text: "" }, { text: "Non", cle: true }, { text: " : les droites d'action ne sont pas confondues : " }, { text: "le carton tourne", cle: true }, { text: " jusqu'à aligner les fils." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["équilibre", "forces directement opposées", "droite d'action commune", "compensation"],
    sections: [
      {
        titre: "1. La condition d'équilibre sous deux forces",
        paras: [
          "Si un solide au repos est soumis à deux forces, alors ces deux forces sont directement opposées : même droite d'action, même intensité, sens contraires.",
        ],
      },
      {
        titre: "2. Des exemples d'équilibres",
        paras: [],
        puces: [
          "la lampe suspendue : son poids et la force du fil ;",
          "le livre posé : son poids et la réaction de la table ;",
          "le nœud du tir à la corde quand les deux équipes tirent aussi fort l'une que l'autre.",
        ],
      },
      {
        titre: "3. Attention au désalignement !",
        paras: [
          "Deux forces égales et de sens contraires, mais de droites d'action différentes, ne donnent pas l'équilibre : elles font tourner le solide (c'est un couple de forces, étudié plus tard).",
        ],
      },
    ],
    saisTu: [
      "Les funambules du cirque appliquent notre leçon sans le savoir : leur long balancier abaisse leur centre de gravité et les aide à maintenir leur poids exactement opposé à la réaction du fil. Le grand Charles Blondin a même traversé les chutes du Niagara sur une corde en 1859… en portant son cuisinier sur le dos !",
    ],
    experience: [
      "Le duel des élastiques :",
      "1. Découpe un carton (10 cm × 10 cm) et perce deux trous opposés.",
      "2. Attache deux élastiques identiques et fais-les tirer par deux camarades, chacun de son côté : le carton s'immobilise quand les élastiques sont alignés et étirés pareil.",
      "3. Demande à l'un de tirer un peu plus fort : le carton part de son côté !",
      "4. Décale un élastique vers un coin : observe la rotation du carton.",
    ],
  },
  substitutions: [
    { officiel: "Banc d'équilibre avec poulies", local: "Carton + deux fils + deux dynamomètres à élastique" },
    { officiel: "Masses marquées", local: "Bouteilles d'eau (0,5 L ≈ 5 N)" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Vrai ou Faux (1 point chacun) : a) L'équilibre exige des intensités égales. b) Les sens des deux forces sont identiques. c) Les droites d'action sont confondues. d) Un solide tiré par deux forces non alignées tourne.",
      items: [],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: " ; b) " }, { text: "Faux", cle: true }, { text: " (contraires) ; c) " }, { text: "Vrai", cle: true }, { text: " ; d) " }, { text: "Vrai", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "Un sac de riz de 50 kg pend, immobile, au crochet d'une balance romaine (g = 10 N/kg). Calcule son poids puis donne l'intensité et le sens de la force exercée par le crochet.",
      items: [],
      corrige: [
        [{ text: "P = 50 × 10 = " }, { text: "500 N", cle: true }, { text: " ; le crochet exerce " }, { text: "500 N vers le haut", cle: true }, { text: " (force directement opposée au poids)." }],
      ],
    },
    {
      points: 3,
      consigne: "Dessine un solide S en équilibre sous deux forces F1 et F2 de 4 N (échelle 1 cm ↔ 2 N), en respectant les trois conditions.",
      items: [],
      corrige: [
        [{ text: "Deux vecteurs de " }, { text: "2 cm chacun", cle: true }, { text: ", portés par " }, { text: "la même droite", cle: true }, { text: ", flèches " }, { text: "opposées", cle: true }, { text: ", appliqués sur S." }],
      ],
    },
  ],
};

const S4 = {
  numero: 4, total: 34, unite: "I", theme: "Mécanique",
  titre: "Le poids d'un corps et le centre de gravité",
  objectif: "représenter le poids d'un corps par un vecteur appliqué au centre de gravité",
  documentation: DOC,
  support: "Fil à plomb, carton de formes diverses, règle, sphère, boîte parallélépipédique, anneau, dynamomètre",
  image: "images/img_seance04.png",
  imageLegende: "Figure 4 — Le poids s'applique au centre de gravité G : au centre de la sphère, au croisement des diagonales de la brique, et même hors matière pour l'anneau !",
  revision: {
    qa: [
      { q: "Rappelle les quatre caractéristiques d'une force.", ra: "Direction, sens, intensité, point d'application." },
      { q: "Rappelle la relation P = m × g.", ra: "Poids (N) = masse (kg) × intensité de la pesanteur (≈ 10 N/kg sur Terre)." },
      { q: "Quelle est la direction du poids ?", ra: "La verticale ; son sens : vers le bas." },
    ],
    technique: "Questions-réponses orales", support: "Ardoise",
  },
  miseEnSituation: {
    enseignant: [
      "Voahangy porte un plateau de beignets sur la tête, parfaitement stable. Sa cousine essaie… et le plateau bascule aussitôt ! « Tu dois le placer juste au bon point », explique Voahangy.",
      "Où s'applique exactement le poids d'un objet, et pourquoi ce point est-il si important pour l'équilibre ?",
      "R.A. : Au centre de gravité G ; l'objet est stable quand G est bien placé au-dessus du support.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Le poids d'un corps et le centre de gravité ». Après cette séance, vous serez capables de représenter le poids par un vecteur appliqué au centre de gravité.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien. 1) Je suspends le carton par un trou : il pend, et le fil à plomb accroché au même point trace une verticale que je dessine sur le carton. 2) Je recommence avec un deuxième trou : deuxième verticale. 3) Les deux droites se coupent en un point G : je pose le carton en équilibre sur la pointe du stylo exactement en G : il tient ! 4) Pour la règle homogène, G est au milieu ; pour la sphère, au centre ; pour la boîte, au croisement des diagonales.",
    apprenants: "Observent, refont la méthode du fil à plomb sur leurs propres cartons.",
    technique: "Expérimentation", support: "Cartons, fil à plomb",
  },
  analyse: {
    qa: [
      { q: "Qu'est-ce que le poids d'un corps ?", ra: "La force d'attraction que la Terre exerce sur lui : verticale, vers le bas, d'intensité P = m × g." },
      { q: "Comment appelle-t-on son point d'application ?", ra: "Le centre de gravité G." },
      { q: "Où est G pour une sphère, une boule, un cube, un cylindre, un disque homogènes ?", ra: "En leur centre (de symétrie)." },
      { q: "Et pour un parallélépipède rectangle (une brique) ?", ra: "Au point de rencontre de ses diagonales." },
      { q: "Et pour un anneau ?", ra: "En son centre : un point situé hors de la matière !" },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Objets, tableau",
  },
  synthese: {
    enseignant: "Donc, le poids d'un corps est la force d'attraction de la Terre : direction verticale, sens vers le bas, intensité P = m × g, et point d'application le centre de gravité G. Pour les solides homogènes de forme régulière, G occupe le centre de symétrie : centre de la sphère, de la boule, du cube, du cylindre, du disque et de l'anneau ; croisement des diagonales du parallélépipède rectangle. Surprise : pour l'anneau, G est au centre du trou, hors de la matière ! La méthode du fil à plomb permet de trouver G expérimentalement : on suspend l'objet par deux points successifs, G est à l'intersection des deux verticales. Sur un schéma, le poids se dessine toujours : vecteur P d'origine G, vertical, vers le bas. Le plateau de Voahangy tient parce que G reste au-dessus de sa tête !",
    apprenants: "Écoutent et recopient les positions de G.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Donne les quatre caractéristiques du poids d'un sac de 20 kg (g = 10 N/kg).",
      items: [],
      corrige: [
        [{ text: "Direction " }, { text: "verticale", cle: true }, { text: " ; sens " }, { text: "vers le bas", cle: true }, { text: " ; intensité P = 20 × 10 = " }, { text: "200 N", cle: true }, { text: " ; point d'application : " }, { text: "le centre de gravité G", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Où se trouve le centre de gravité : a) d'un ballon ? b) d'une brique ? c) d'un anneau de rideau ?",
      items: [],
      corrige: [
        [{ text: "a) " }, { text: "Au centre du ballon", cle: true }, { text: " ; b) " }, { text: "au croisement des diagonales", cle: true }, { text: " ; c) " }, { text: "au centre du trou (hors matière)", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète : le poids s'applique au ……… noté ……… ; sa direction est ……… et son sens ……… ; pour un cube homogène, G est ……… .",
      items: [],
      corrige: [
        [{ text: "Au " }, { text: "centre de gravité", cle: true }, { text: " noté " }, { text: "G", cle: true }, { text: " ; " }, { text: "verticale", cle: true }, { text: " ; " }, { text: "vers le bas", cle: true }, { text: " ; " }, { text: "au centre du cube", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Décris la méthode du fil à plomb pour trouver le centre de gravité d'un carton plat de forme quelconque.",
      items: [],
      corrige: [
        [{ text: "Suspendre le carton par un point et " }, { text: "tracer la verticale du fil à plomb", cle: true }, { text: " ; recommencer avec " }, { text: "un second point de suspension", cle: true }, { text: " ; G est à " }, { text: "l'intersection des deux droites", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["poids", "centre de gravité", "fil à plomb", "verticale", "P = m × g"],
    sections: [
      {
        titre: "1. Le poids : une force particulière",
        paras: [
          "Le poids P d'un corps est la force d'attraction exercée par la Terre : direction verticale, sens vers le bas, intensité P = m × g (g ≈ 10 N/kg), point d'application le centre de gravité G.",
        ],
      },
      {
        titre: "2. Où se trouve le centre de gravité ?",
        paras: [],
        puces: [
          "sphère, boule, disque, cylindre, anneau homogènes : en leur centre ;",
          "cube et parallélépipède rectangle : au croisement des diagonales ;",
          "règle homogène : en son milieu ;",
          "attention : pour l'anneau, G est dans le trou, hors de la matière !",
        ],
      },
      {
        titre: "3. La méthode du fil à plomb",
        paras: [
          "On suspend l'objet plat par un premier point : on trace la verticale du fil à plomb ; on recommence par un second point : G est à l'intersection des deux tracés. Posé sur une pointe en G, l'objet reste en équilibre.",
        ],
      },
    ],
    saisTu: [
      "Les porteuses malgaches placent instinctivement leur fardeau pour que son centre de gravité soit exactement au-dessus de leur colonne vertébrale : ainsi le poids est compensé sans effort de bras. Des études ont montré qu'elles peuvent porter ainsi jusqu'à 20 % de leur propre masse… presque sans dépenser plus d'énergie !",
    ],
    experience: [
      "Trouve le point magique :",
      "1. Découpe un carton en forme de Madagascar (ou de n'importe quelle forme amusante).",
      "2. Perce deux petits trous près des bords, éloignés l'un de l'autre.",
      "3. Suspends le carton par un trou avec une épingle, accroche un fil lesté d'un caillou (fil à plomb) et trace la verticale ; recommence avec l'autre trou.",
      "4. Pose le carton sur la pointe d'un stylo à l'intersection : il tient en équilibre : tu as trouvé G !",
    ],
  },
  substitutions: [
    { officiel: "Fil à plomb de laboratoire", local: "Ficelle + caillou ou écrou" },
    { officiel: "Plaques de formes géométriques", local: "Cartons de récupération découpés" },
    { officiel: "Support de suspension", local: "Épingle plantée dans le chambranle, clou au mur" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "QCM : 1. Le poids s'applique : a) en haut de l'objet b) au centre de gravité c) au sol. 2. Sa direction : a) horizontale b) verticale c) quelconque. 3. G d'une boule : a) au centre b) en surface c) en bas. 4. G d'un anneau est : a) dans la matière b) hors de la matière c) inexistant.",
      items: [],
      corrige: [
        [{ text: "1. " }, { text: "b", cle: true }, { text: " ; 2. " }, { text: "b", cle: true }, { text: " ; 3. " }, { text: "a", cle: true }, { text: " ; 4. " }, { text: "b", cle: true }, { text: ". (1 point par réponse)" }],
      ],
    },
    {
      points: 3,
      consigne: "Un bidon de 25 kg est posé au sol (g = 10 N/kg). Calcule son poids et représente-le (échelle 1 cm ↔ 100 N) : décris le vecteur.",
      items: [],
      corrige: [
        [{ text: "P = 25 × 10 = " }, { text: "250 N", cle: true }, { text: " ; vecteur d'origine " }, { text: "G", cle: true }, { text: ", vertical vers le bas, longueur " }, { text: "2,5 cm", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "Pourquoi un bus chargé sur le toit se renverse-t-il plus facilement dans les virages qu'un bus chargé en soute ?",
      items: [],
      corrige: [
        [{ text: "La charge en hauteur " }, { text: "élève le centre de gravité", cle: true }, { text: " : le poids bascule plus vite hors de la base d'appui : " }, { text: "l'équilibre est moins stable", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S5 = {
  numero: 5, total: 34, unite: "I", theme: "Mécanique",
  titre: "La poussée d'Archimède : mise en évidence et mesure",
  objectif: "mettre en évidence la poussée d'Archimède et de déterminer son intensité par la méthode des deux pesées",
  documentation: DOC,
  support: "Dynamomètre, pierre, récipient transparent, eau, eau salée, bouteille plastique vide, fil",
  image: "images/img_seance05.png",
  imageLegende: "Figure 5 — La pierre « pèse moins » dans l'eau : le dynamomètre révèle la poussée d'Archimède",
  revision: {
    qa: [
      { q: "Rappelle la poussée d'Archimède vue en T8.", ra: "Force verticale vers le haut exercée par un liquide sur un corps immergé." },
      { q: "Quelles sont les caractéristiques du poids ?", ra: "Verticale, vers le bas, P = m × g, appliqué en G." },
      { q: "Que dit la condition d'équilibre sous deux forces ?", ra: "Forces directement opposées : même droite, même intensité, sens contraires." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Au lavoir, Lalao soulève sans effort la grosse bassine immergée… mais dès qu'elle sort de l'eau, la bassine devient terriblement lourde ! Et impossible d'enfoncer la bouteille vide dans le seau : elle « résiste » et jaillit dès qu'on la lâche.",
      "Quelle force mystérieuse aide Lalao sous l'eau et repousse la bouteille ?",
      "R.A. : La poussée d'Archimède : le liquide pousse le corps immergé verticalement vers le haut ; nous allons la mesurer.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La poussée d'Archimède : mise en évidence et mesure ». Après cette séance, vous serez capables de la mettre en évidence et de mesurer son intensité par différence de deux pesées.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien. 1) J'enfonce la bouteille vide, fond plat en premier, dans l'eau calme : je sens une résistance qui grandit ; je lâche : elle jaillit ! 2) Je suspends la pierre au dynamomètre : dans l'air, il indique P = 6 N. 3) Je descends la pierre, toujours suspendue, jusqu'à l'immerger complètement : le dynamomètre n'indique plus que T = 4 N ! 4) Je recommence dans l'eau très salée : 3,7 N ; et avec une pierre plus grosse de même poids : l'indication baisse davantage.",
    apprenants: "Observent, notent les deux pesées, calculent la différence.",
    technique: "Expérimentation, mesures", support: "Dynamomètre, pierre, récipients",
  },
  analyse: {
    qa: [
      { q: "Pourquoi le dynamomètre indique-t-il moins dans l'eau ?", ra: "Parce que l'eau exerce sur la pierre une force vers le haut : la poussée d'Archimède." },
      { q: "Quelles sont la direction et le sens de cette poussée ?", ra: "Direction verticale, sens vers le haut." },
      { q: "Comment calculer son intensité F ?", ra: "Par différence des deux pesées : F = P − T = 6 − 4 = 2 N." },
      { q: "La poussée dépend-elle du volume immergé ?", ra: "Oui : à poids égal, un corps plus volumineux reçoit une poussée plus grande." },
      { q: "Dépend-elle du liquide ?", ra: "Oui : l'eau salée, plus dense, pousse plus fort que l'eau douce." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Mesures au tableau",
  },
  synthese: {
    enseignant: "Donc, tout liquide en équilibre exerce sur un corps immergé une force appelée poussée d'Archimède : direction verticale, sens vers le haut. Sa mesure se fait par la méthode des deux pesées : on pèse le corps dans l'air (poids P), puis immergé (indication T du dynamomètre) : la poussée vaut F = P − T. Le corps immergé suspendu est en effet en équilibre sous trois forces : son poids P vers le bas, la force du fil T et la poussée F vers le haut : d'où T + F = P. Nos expériences montrent que F dépend de deux facteurs : le volume immergé du corps (plus il est gros, plus F est grande) et la nature du liquide (plus il est dense, plus F est grande) : mais F ne dépend pas du poids du corps ! La prochaine séance donnera la formule exacte : le théorème d'Archimède.",
    apprenants: "Écoutent et recopient la méthode des deux pesées.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Un objet pèse 9 N dans l'air ; immergé dans l'eau, le dynamomètre indique 6,5 N. Calcule la poussée d'Archimède.",
      items: [],
      corrige: [
        [{ text: "F = P − T = 9 − 6,5 = " }, { text: "2,5 N", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Donne les deux facteurs dont dépend la poussée d'Archimède, et un facteur dont elle NE dépend PAS.",
      items: [],
      corrige: [
        [{ text: "Elle dépend du " }, { text: "volume immergé", cle: true }, { text: " et de la " }, { text: "nature (masse volumique) du liquide", cle: true }, { text: " ; elle ne dépend pas du " }, { text: "poids du corps", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, calcul posé",
  evaluation: [
    {
      consigne: "Complète : la poussée d'Archimède est ……… et dirigée vers le ……… ; on la mesure par ……… de deux pesées : F = ……… − ……… .",
      items: [],
      corrige: [
        [{ text: "" }, { text: "Verticale", cle: true }, { text: ", vers le " }, { text: "haut", cle: true }, { text: " ; par " }, { text: "différence", cle: true }, { text: " : F = " }, { text: "P", cle: true }, { text: " − " }, { text: "T", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Cite les trois forces qui s'exercent sur une pierre suspendue à un fil et immergée dans l'eau, avec leur sens.",
      items: [],
      corrige: [
        [{ text: "Le " }, { text: "poids P (vers le bas)", cle: true }, { text: ", la " }, { text: "force du fil T (vers le haut)", cle: true }, { text: " et la " }, { text: "poussée d'Archimède F (vers le haut)", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["poussée d'Archimède", "deux pesées", "poids apparent", "volume immergé", "nature du liquide"],
    sections: [
      {
        titre: "1. La mise en évidence",
        paras: [
          "Enfoncer un récipient fond plat dans l'eau demande un effort croissant : le liquide résiste. Cette force exercée par un liquide en équilibre sur un corps immergé est la poussée d'Archimède : verticale, dirigée vers le haut.",
        ],
      },
      {
        titre: "2. La méthode des deux pesées",
        paras: [
          "On suspend le corps à un dynamomètre : dans l'air, il indique le poids P ; entièrement immergé, il indique T (le poids apparent). La poussée vaut F = P − T.",
          "Justification : le corps immergé est en équilibre sous trois forces (P vers le bas, T et F vers le haut) : T + F = P.",
        ],
      },
      {
        titre: "3. Les facteurs qui influencent F",
        paras: [],
        puces: [
          "le volume immergé : deux corps de même poids mais de volumes différents reçoivent des poussées différentes (le plus gros : la plus grande) ;",
          "la nature du liquide : un même objet reçoit une poussée plus grande dans l'eau salée que dans l'eau douce ;",
          "F ne dépend PAS du poids du corps immergé.",
        ],
      },
    ],
    saisTu: [
      "Dans la mer Morte, entre Jordanie et Israël, l'eau est presque dix fois plus salée que l'océan : la poussée y est si forte qu'on flotte assis en lisant son journal ! Plus près de nous, les nageurs remarquent qu'on flotte mieux dans le canal de Mozambique que dans le lac Itasy : l'eau salée pousse plus fort que l'eau douce.",
    ],
    experience: [
      "La balance à poussée :",
      "1. Suspends un caillou à ton dynamomètre à élastique et note l'allongement (poids dans l'air).",
      "2. Descends le caillou dans un seau d'eau sans toucher les parois : l'allongement diminue !",
      "3. La différence des deux lectures est la poussée d'Archimède.",
      "4. Recommence dans de l'eau très salée (5 cuillères de sel par litre) : la poussée augmente-t-elle ?",
    ],
  },
  substitutions: [
    { officiel: "Dynamomètre gradué", local: "Élastique étalonné avec bouteilles d'eau" },
    { officiel: "Cuve de laboratoire", local: "Seau ou bassine transparente, bocal de conserve" },
    { officiel: "Solides calibrés", local: "Cailloux, boulons, morceaux de brique" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Un solide pèse 15 N dans l'air et 11 N immergé dans l'eau. a) Calcule la poussée. b) Que devient l'indication si on remplace l'eau par de l'eau salée : plus grande, plus petite ou égale à 11 N ? Justifie.",
      items: [],
      corrige: [
        [{ text: "a) F = 15 − 11 = " }, { text: "4 N", cle: true }, { text: ". b) " }, { text: "Plus petite que 11 N", cle: true }, { text: " : l'eau salée, plus dense, " }, { text: "pousse plus fort", cle: true }, { text: ", le poids apparent diminue. (2 + 2 points)" }],
      ],
    },
    {
      points: 3,
      consigne: "Deux boules de même poids : l'une en fer (petite), l'autre en bois très dense (grosse). Immergées, laquelle reçoit la plus grande poussée ? Pourquoi ?",
      items: [],
      corrige: [
        [{ text: "La " }, { text: "grosse boule", cle: true }, { text: " : la poussée dépend du " }, { text: "volume immergé", cle: true }, { text: ", pas du poids." }],
      ],
    },
    {
      points: 3,
      consigne: "Explique pourquoi il est plus facile de porter un ami dans la piscine que sur la terre ferme.",
      items: [],
      corrige: [
        [{ text: "Dans l'eau, " }, { text: "la poussée d'Archimède soutient une partie de son poids", cle: true }, { text: " : son " }, { text: "poids apparent", cle: true }, { text: " est beaucoup plus faible." }],
      ],
    },
  ],
};

const S6 = {
  numero: 6, total: 34, unite: "I", theme: "Mécanique",
  titre: "Le théorème d'Archimède ; la densité",
  objectif: "énoncer le théorème d'Archimède et d'appliquer la relation F = ρ × V × g",
  documentation: DOC,
  support: "Dynamomètre, solide, éprouvette graduée, récipient à trop-plein, balance, eau",
  image: "images/img_seance06.png",
  imageLegende: "Figure 6 — L'équilibre sous trois forces conduit au théorème : F = poids du liquide déplacé = ρ × V × g",
  revision: {
    qa: [
      { q: "Comment mesure-t-on la poussée d'Archimède ?", ra: "Par différence de deux pesées : F = P − T." },
      { q: "De quels facteurs dépend-elle ?", ra: "Du volume immergé et de la nature (masse volumique) du liquide." },
      { q: "Rappelle la masse volumique de l'eau.", ra: "1 000 kg/m³, soit 1 kg/L ou 1 g/cm³." },
    ],
    technique: "Questions-réponses orales", support: "Ardoise",
  },
  miseEnSituation: {
    enseignant: [
      "La légende raconte qu'Archimède, chargé de vérifier si la couronne du roi Hiéron était en or pur, trouva la solution dans son bain : en s'immergeant, il vit l'eau déborder… et comprit que le volume d'eau déplacé égalait le sien. « Eurêka ! »",
      "Quel lien précis existe-t-il entre la poussée et le liquide déplacé par le corps ?",
      "R.A. : La poussée est exactement égale au poids du liquide déplacé : c'est le théorème d'Archimède.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Le théorème d'Archimède ; la densité ». Après cette séance, vous serez capables d'énoncer le théorème et d'appliquer la formule F = ρ × V × g.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien. 1) Deux pesées de la pierre : P = 6 N dans l'air, T = 4 N immergée : donc F = 2 N. 2) Je recueille l'eau débordée du récipient à trop-plein pendant l'immersion : l'éprouvette indique 200 cm³, soit 0,2 L. 3) Cette eau déplacée a une masse de 0,2 kg, donc un poids de 0,2 × 10 = 2 N. 4) Comparons : F = 2 N et poids de l'eau déplacée = 2 N : égalité parfaite (aux erreurs de mesure près) !",
    apprenants: "Observent, calculent le poids de l'eau recueillie, comparent.",
    technique: "Expérimentation, mesures et calculs", support: "Trop-plein, éprouvette, dynamomètre",
  },
  analyse: {
    qa: [
      { q: "Que vaut la poussée d'Archimède comparée au liquide déplacé ?", ra: "Elle est égale au poids du liquide déplacé." },
      { q: "Énonce le théorème d'Archimède.", ra: "Tout corps plongé dans un liquide en équilibre subit une poussée verticale, dirigée vers le haut, d'intensité égale au poids du liquide déplacé." },
      { q: "Donne la formule de F.", ra: "F = ρ × V × g : masse volumique du liquide × volume immergé × intensité de la pesanteur." },
      { q: "Qu'est-ce que la densité d'un liquide ou d'un solide ?", ra: "Le rapport de sa masse volumique à celle de l'eau : d = ρ ÷ ρeau, sans unité." },
      { q: "Où s'applique la poussée ?", ra: "Au centre de poussée : le centre de gravité du liquide déplacé." },
    ],
    technique: "Questions-réponses", support: "Tableau, mesures",
  },
  synthese: {
    enseignant: "Donc, le théorème d'Archimède s'énonce : « Tout corps plongé dans un liquide en équilibre subit de la part de celui-ci une poussée verticale, dirigée vers le haut et d'intensité égale au poids du liquide déplacé. » En formule : F = ρ × V × g, où ρ est la masse volumique du liquide (kg/m³), V le volume immergé (m³) et g ≈ 10 N/kg ; on peut aussi écrire F = d × ρeau × V × g avec la densité d du liquide (rapport sans unité : eau 1 ; eau de mer 1,03 ; mercure 13,6). La poussée se représente par un vecteur vertical vers le haut, appliqué au centre de poussée (centre de gravité du liquide déplacé). Vérifions sur nos mesures : ρ × V × g = 1 000 × 0,0002 × 10 = 2 N : exactement notre F = P − T ! Archimède avait raison de crier Eurêka.",
    apprenants: "Écoutent et recopient le théorème encadré.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Un solide de volume 0,5 L est entièrement immergé dans l'eau (ρ = 1 000 kg/m³ ; g = 10 N/kg). Calcule la poussée d'Archimède.",
      items: [],
      corrige: [
        [{ text: "V = 0,5 L = 0,0005 m³ ; F = 1 000 × 0,0005 × 10 = " }, { text: "5 N", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Énonce le théorème d'Archimède.",
      items: [],
      corrige: [
        [{ text: "Tout corps plongé dans un liquide en équilibre subit " }, { text: "une poussée verticale, vers le haut, égale au poids du liquide déplacé", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, calcul posé",
  evaluation: [
    {
      consigne: "Un objet de 0,3 L est immergé dans de l'eau salée de densité 1,1. Calcule la poussée (g = 10 N/kg).",
      items: [],
      corrige: [
        [{ text: "ρ = 1,1 × 1 000 = 1 100 kg/m³ ; F = 1 100 × 0,0003 × 10 = " }, { text: "3,3 N", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Complète : la poussée s'applique au ……… , qui est le centre de gravité du ……… ; la densité d'un liquide est le rapport de sa ……… à celle de l'……… .",
      items: [],
      corrige: [
        [{ text: "Au " }, { text: "centre de poussée", cle: true }, { text: " ; du " }, { text: "liquide déplacé", cle: true }, { text: " ; de sa " }, { text: "masse volumique", cle: true }, { text: " ; de l'" }, { text: "eau", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["théorème d'Archimède", "poids du liquide déplacé", "F = ρ × V × g", "densité", "centre de poussée"],
    sections: [
      {
        titre: "1. Le théorème d'Archimède",
        paras: [
          "Tout corps plongé dans un liquide en équilibre subit de la part de celui-ci une poussée verticale, dirigée vers le haut et d'intensité égale au poids du liquide déplacé.",
        ],
      },
      {
        titre: "2. La formule",
        paras: [
          "F = ρ × V × g : ρ est la masse volumique du liquide (kg/m³), V le volume du liquide déplacé = volume immergé (m³), g ≈ 10 N/kg. Avec la densité d du liquide : F = d × ρeau × V × g.",
        ],
        puces: [
          "densités utiles : eau 1 ; eau de mer ≈ 1,03 ; huile ≈ 0,9 ; mercure 13,6 ;",
          "la densité est un nombre sans unité : d = ρ ÷ ρeau.",
        ],
      },
      {
        titre: "3. La représentation vectorielle",
        paras: [
          "La poussée se dessine comme un vecteur vertical vers le haut, appliqué au centre de poussée : le centre de gravité du liquide déplacé.",
        ],
      },
    ],
    saisTu: [
      "Archimède de Syracuse (287-212 av. J.-C.) démasqua bel et bien l'orfèvre malhonnête : la couronne déplaçait plus d'eau qu'un lingot d'or de même masse : elle contenait de l'argent, moins dense ! Il inventa aussi la vis sans fin qui monte l'eau, toujours utilisée dans certains périmètres rizicoles.",
    ],
    experience: [
      "Vérifie le théorème toi-même :",
      "1. Remplis à ras bord une boîte percée d'un bec verseur (ou incline un bol plein).",
      "2. Immerge un caillou suspendu à ton dynamomètre à élastique : recueille TOUTE l'eau débordée dans un verre.",
      "3. Pèse l'eau recueillie (ou mesure son volume : 100 cm³ ↔ 1 N).",
      "4. Compare avec la baisse d'allongement de ton élastique : les deux valeurs concordent !",
    ],
  },
  substitutions: [
    { officiel: "Récipient à trop-plein", local: "Boîte de conserve percée d'un bec en paille, bol incliné" },
    { officiel: "Éprouvette graduée", local: "Biberon gradué, seringue de pharmacie, verre doseur" },
    { officiel: "Masses volumiques étalons", local: "Eau (1 000 kg/m³), eau salée saturée (≈ 1 200 kg/m³)" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Une pierre de 0,4 L pèse 10 N dans l'air. On l'immerge dans l'eau (g = 10 N/kg). a) Calcule la poussée. b) Qu'indique le dynamomètre pendant l'immersion ?",
      items: [],
      corrige: [
        [{ text: "a) F = 1 000 × 0,0004 × 10 = " }, { text: "4 N", cle: true }, { text: ". b) T = P − F = 10 − 4 = " }, { text: "6 N", cle: true }, { text: ". (2 + 2 points)" }],
      ],
    },
    {
      points: 3,
      consigne: "Le même solide est plongé dans du mercure (d = 13,6). Calcule la nouvelle poussée et compare-la au poids du solide. Que se passe-t-il ?",
      items: [],
      corrige: [
        [{ text: "F = 13 600 × 0,0004 × 10 = " }, { text: "54,4 N", cle: true }, { text: " : bien supérieure au poids (10 N) : " }, { text: "la pierre flotte sur le mercure !", cle: true }, { text: "" }],
      ],
    },
    {
      points: 3,
      consigne: "Retrouve, par le calcul, le volume d'un solide qui subit une poussée de 7 N dans l'eau (g = 10 N/kg).",
      items: [],
      corrige: [
        [{ text: "V = F ÷ (ρ × g) = 7 ÷ 10 000 = " }, { text: "0,0007 m³ = 0,7 L", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S7 = {
  numero: 7, total: 34, unite: "I", theme: "Mécanique",
  titre: "Les corps flottants",
  objectif: "prévoir si un solide homogène abandonné au sein d'un liquide va flotter ou couler",
  documentation: DOC,
  support: "Bassine d'eau, bois, liège, fer, bougie, huile, œuf, sel, verres, densités affichées",
  image: "images/img_seance07.png",
  imageLegende: "Figure 7 — F > P : il flotte ; F = P : il reste immobile ; F < P : il coule",
  revision: {
    qa: [
      { q: "Énonce le théorème d'Archimède.", ra: "Poussée verticale vers le haut égale au poids du liquide déplacé." },
      { q: "Rappelle la formule de la poussée.", ra: "F = ρ × V × g." },
      { q: "Qu'est-ce que la densité ?", ra: "Le rapport de la masse volumique du corps à celle de l'eau, sans unité." },
    ],
    technique: "Questions-réponses orales", support: "Ardoise",
  },
  miseEnSituation: {
    enseignant: [
      "Sur le canal des Pangalanes, les troncs de bois flottent vers la scierie, tandis que l'ancre de la barge coule à pic. Et le poisson, lui, monte ou descend à volonté sans nager, comme par magie !",
      "Peut-on prévoir par le calcul si un corps abandonné dans l'eau va flotter ou couler ?",
      "R.A. : Oui : il suffit de comparer la poussée maximale F et le poids P, ou les densités du solide et du liquide.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Les corps flottants ». Après cette séance, vous serez capables de prévoir si un solide homogène flotte ou coule dans un liquide donné.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien. 1) J'abandonne sous l'eau, un par un : le liège (il remonte et flotte), le clou (il coule), la bougie (elle remonte lentement). 2) L'œuf coule dans l'eau douce… j'ajoute du sel, cuillère après cuillère : il décolle du fond et flotte ! 3) Le morceau de bois dense flotte presque entièrement immergé. Notez pour chaque objet sa densité affichée : liège 0,2 ; bougie 0,9 ; bois dense 0,95 ; œuf 1,05 ; fer 7,8.",
    apprenants: "Observent, classent les objets, comparent aux densités.",
    technique: "Expérimentation, classification", support: "Bassine, objets, tableau des densités",
  },
  analyse: {
    qa: [
      { q: "Quelles forces s'exercent sur un solide abandonné au sein d'un liquide ?", ra: "Son poids P (vers le bas) et la poussée d'Archimède F (vers le haut)." },
      { q: "Que se passe-t-il si F > P ?", ra: "Le solide remonte et flotte en surface." },
      { q: "Si F < P ?", ra: "Il coule au fond." },
      { q: "Et si F = P ?", ra: "Il reste immobile entre deux eaux : cas très rare." },
      { q: "Traduis ces conditions avec les densités.", ra: "Le solide homogène flotte si sa densité est inférieure à celle du liquide ; il coule si elle est supérieure." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Expériences, tableau",
  },
  synthese: {
    enseignant: "Donc, un solide homogène abandonné au repos au sein d'un liquide est soumis à deux forces : son poids P et la poussée F. Trois cas : si F > P, il remonte et flotte (une partie émerge alors, jusqu'à ce que la poussée réduite égale le poids) ; si F < P, il coule ; si F = P, il reste immobile entre deux eaux : cas rarissime. Pour les solides homogènes, la comparaison des densités suffit : d(solide) < d(liquide) : il flotte ; d(solide) > d(liquide) : il coule. C'est pourquoi le liège (0,2) flotte haut, la bougie (0,9) flotte à fleur d'eau, le fer (7,8) coule… mais flotterait sur le mercure (13,6) ! Le poisson triche : sa vessie natatoire gonfle ou dégonfle, modifiant son volume donc la poussée : il monte et descend à volonté ; le sous-marin fait pareil avec ses ballasts remplis d'air ou d'eau.",
    apprenants: "Écoutent et recopient les trois cas.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Prévois (avec les densités : eau 1 ; huile 0,9) :",
      items: [
        "a) La bougie (d = 0,9) dans l'eau.",
        "b) La bougie dans l'huile.",
        "c) Le fer (d = 7,8) dans le mercure (d = 13,6).",
      ],
      corrige: [
        [{ text: "a) 0,9 < 1 : " }, { text: "elle flotte", cle: true }, { text: "." }],
        [{ text: "b) 0,9 = 0,9 : " }, { text: "elle reste entre deux eaux (cas limite)", cle: true }, { text: "." }],
        [{ text: "c) 7,8 < 13,6 : " }, { text: "il flotte sur le mercure", cle: true }, { text: " !" }],
      ],
    },
    {
      consigne: "Explique comment le sous-marin plonge et remonte.",
      items: [],
      corrige: [
        [{ text: "Il " }, { text: "remplit ses ballasts d'eau pour alourdir (P > F : il plonge)", cle: true }, { text: " et les " }, { text: "chasse à l'air comprimé pour remonter (F > P)", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète : un solide flotte si F ……… P, c'est-à-dire si sa densité est ……… à celle du liquide ; il coule si F ……… P ; il reste entre deux eaux si ……… .",
      items: [],
      corrige: [
        [{ text: "F " }, { text: ">", cle: true }, { text: " P ; densité " }, { text: "inférieure", cle: true }, { text: " ; F " }, { text: "<", cle: true }, { text: " P ; " }, { text: "F = P", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Un solide homogène de densité 1,05 est abandonné dans l'eau douce puis dans l'eau de mer (d = 1,03) et enfin dans une saumure (d = 1,2). Que fait-il dans chaque cas ?",
      items: [],
      corrige: [
        [{ text: "Eau douce : 1,05 > 1 : " }, { text: "il coule", cle: true }, { text: " ; eau de mer : 1,05 > 1,03 : " }, { text: "il coule encore (à peine)", cle: true }, { text: " ; saumure : 1,05 < 1,2 : " }, { text: "il flotte", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["flotte", "coule", "entre deux eaux", "densité", "vessie natatoire", "ballast"],
    sections: [
      {
        titre: "1. Les trois cas possibles",
        paras: [],
        puces: [
          "F > P : le solide remonte et flotte (une partie émerge, la poussée diminue jusqu'à F = P) ;",
          "F < P : le solide coule au fond ;",
          "F = P : il reste immobile au sein du liquide (cas très rare).",
        ],
      },
      {
        titre: "2. Le critère des densités",
        paras: [
          "Pour un solide homogène : il flotte si sa densité est inférieure à celle du liquide ; il coule si elle est supérieure. Exemples : liège 0,2 et bois 0,4-0,9 flottent sur l'eau ; fer 7,8 coule dans l'eau mais flotte sur le mercure 13,6.",
        ],
      },
      {
        titre: "3. Poisson et sous-marin",
        paras: [
          "Le poisson garde son poids mais modifie son volume grâce à sa vessie natatoire (compression/dilatation) : la poussée varie et il évolue à la profondeur voulue. Le sous-marin remplit ou chasse l'eau de ses water-ballasts pour plonger ou remonter.",
        ],
      },
    ],
    saisTu: [
      "L'eau de mer gelée flotte sur l'eau liquide : la glace a une densité de 0,92 ! C'est exceptionnel : presque tous les solides coulent dans leur propre liquide. Sans cette anomalie de l'eau, les lacs gèleraient par le fond et toute vie aquatique disparaîtrait en hiver dans les pays froids.",
    ],
    experience: [
      "L'œuf plongeur :",
      "1. Dépose un œuf frais dans un grand verre d'eau : il coule (d ≈ 1,05).",
      "2. Ajoute du sel cuillère par cuillère en remuant doucement : l'œuf décolle, puis flotte !",
      "3. Verse délicatement de l'eau douce par-dessus : l'œuf se stabilise entre les deux couches : F = P.",
      "4. Bonus : un œuf pourri flotte dans l'eau douce (gaz à l'intérieur) : voilà comment trier les œufs !",
    ],
  },
  substitutions: [
    { officiel: "Jeu de solides de densités calibrées", local: "Liège, bougie, bois, clou, caillou, plastiques divers" },
    { officiel: "Solutions étalonnées", local: "Eau douce, eau + sel dosé à la cuillère" },
    { officiel: "Maquette de sous-marin", local: "Bouteille percée + tube : on souffle pour chasser l'eau" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "QCM : 1. Un solide flotte si : a) F < P b) F > P c) F = 0. 2. d(solide) > d(liquide) : a) flotte b) coule c) explose. 3. Le poisson change de profondeur grâce à : a) ses nageoires seules b) sa vessie natatoire c) sa queue. 4. Le fer sur le mercure : a) coule b) flotte c) fond.",
      items: [],
      corrige: [
        [{ text: "1. " }, { text: "b", cle: true }, { text: " ; 2. " }, { text: "b", cle: true }, { text: " ; 3. " }, { text: "b", cle: true }, { text: " ; 4. " }, { text: "b", cle: true }, { text: ". (1 point par réponse)" }],
      ],
    },
    {
      points: 3,
      consigne: "Un cube homogène de 1 L pèse 8 N. Va-t-il flotter dans l'eau (g = 10 N/kg) ? Justifie par le calcul de la poussée maximale.",
      items: [],
      corrige: [
        [{ text: "F max = 1 000 × 0,001 × 10 = " }, { text: "10 N > 8 N", cle: true }, { text: " : " }, { text: "il flotte", cle: true }, { text: " (sa densité est 0,8)." }],
      ],
    },
    {
      points: 3,
      consigne: "Les troncs d'eucalyptus flottent vers la scierie, mais certains bois précieux malgaches (hazovola très dense) coulent. Explique avec les densités.",
      items: [],
      corrige: [
        [{ text: "L'eucalyptus a une " }, { text: "densité inférieure à 1", cle: true }, { text: " : il flotte ; les bois très denses ont une " }, { text: "densité supérieure à 1", cle: true }, { text: " : ils coulent." }],
      ],
    },
  ],
};

const S8 = {
  numero: 8, total: 34, unite: "I", theme: "Mécanique",
  titre: "Le travail d'une force constante",
  objectif: "définir une force constante et de calculer son travail lorsque son point d'application se déplace sur sa droite d'action",
  documentation: DOC,
  support: "Caisse, ficelle, dynamomètre, mètre ruban, plan incliné, seau, corde",
  image: "images/img_seance08.png",
  imageLegende: "Figure 8 — Une force qui déplace son point d'application travaille : W = F × d, en joules",
  revision: {
    qa: [
      { q: "Rappelle les caractéristiques d'une force.", ra: "Direction, sens, intensité, point d'application." },
      { q: "En quelle unité mesure-t-on une force ?", ra: "En newtons (N)." },
      { q: "Qu'est-ce que l'énergie, vue en T8 ?", ra: "Ce qu'il faut fournir pour produire un mouvement, de la chaleur ou de la lumière." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Deux porteurs du marché : Naina tire son diable chargé sur 100 mètres ; Fetra tire le même chargement sur 10 mètres seulement. Même effort à chaque pas… mais tout le monde dira que Naina a fourni « plus de travail ».",
      "Comment mesurer précisément le travail fourni par une force ?",
      "R.A. : Par le produit de l'intensité de la force et de la longueur du déplacement : W = F × d, en joules.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Le travail d'une force constante ». Après cette séance, vous serez capables de définir une force constante et de calculer son travail W = F × d.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien. 1) Je tire la caisse avec le dynamomètre en maintenant 20 N bien constants, sur 2 m le long du fil : la force garde direction, sens et intensité : elle est constante. 2) Même force sur 4 m : l'effort total ressenti est double. 3) Maintenant je tire à 40 N sur 2 m : effort total double aussi. 4) Enfin, je retiens la caisse qui descend le plan incliné : ma force s'oppose au déplacement : elle « freine » au lieu d'aider.",
    apprenants: "Observent, mesurent forces et distances, comparent les efforts.",
    technique: "Expérimentation, mesures", support: "Caisse, dynamomètre, mètre",
  },
  analyse: {
    qa: [
      { q: "Qu'est-ce qu'une force constante ?", ra: "Une force dont la direction, le sens et l'intensité ne varient pas au cours du temps." },
      { q: "De quoi dépend le travail d'une force ?", ra: "De son intensité F et de la longueur d du déplacement de son point d'application : W = F × d." },
      { q: "Quelle est l'unité de travail ?", ra: "Le joule (J) ; le kilogramme-mètre ne s'utilise plus." },
      { q: "Quand le travail est-il moteur ? résistant ?", ra: "Moteur si la force est dans le sens du déplacement (signe +) ; résistant si elle s'y oppose (signe −)." },
      { q: "De quoi dépend le travail du poids ?", ra: "Uniquement de la dénivellation h entre départ et arrivée du centre de gravité : W = P × h, quel que soit le chemin suivi." },
    ],
    technique: "Questions-réponses", support: "Expériences, tableau",
  },
  synthese: {
    enseignant: "Donc, une force est constante si sa direction, son sens et son intensité ne changent pas pendant le mouvement. Lorsque son point d'application se déplace sur sa droite d'action, son travail vaut, en valeur absolue, W = F × d : intensité (N) × longueur du déplacement (m) : résultat en joules (J) : le kilogramme-mètre est abandonné. Le signe : travail moteur (positif) si la force contribue au déplacement, travail résistant (négatif) si elle s'y oppose, comme le frottement ou la retenue dans la descente. Cas remarquable : le travail du poids ne dépend pas du chemin suivi, seulement de la dénivellation h : W = P × h : monter 50 kg au premier étage (3 m) coûte 500 × 3 = 1 500 J, par l'escalier droit ou en colimaçon ! Naina a fourni 10 fois plus de travail que Fetra : même force, distance décuple.",
    apprenants: "Écoutent et recopient les formules.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Calcule le travail d'une force de traction constante de 50 N dont le point d'application avance de 12 m sur sa droite d'action.",
      items: [],
      corrige: [
        [{ text: "W = F × d = 50 × 12 = " }, { text: "600 J", cle: true }, { text: " (travail moteur)." }],
      ],
    },
    {
      consigne: "Un maçon hisse un seau de mortier de poids 80 N du sol au 1er étage, à 4 m de hauteur. Calcule le travail fourni contre le poids.",
      items: [],
      corrige: [
        [{ text: "W = P × h = 80 × 4 = " }, { text: "320 J", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, calcul posé",
  evaluation: [
    {
      consigne: "Complète : le travail d'une force constante vaut W = ……… × ……… ; il s'exprime en ……… ; il est ……… si la force aide le déplacement et ……… si elle s'y oppose.",
      items: [],
      corrige: [
        [{ text: "W = " }, { text: "F", cle: true }, { text: " × " }, { text: "d", cle: true }, { text: " ; en " }, { text: "joules (J)", cle: true }, { text: " ; " }, { text: "moteur", cle: true }, { text: " ; " }, { text: "résistant", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Vrai ou Faux : « Le travail du poids est plus grand si l'on monte par un escalier en colimaçon que par une échelle droite. » Justifie.",
      items: [],
      corrige: [
        [{ text: "" }, { text: "Faux", cle: true }, { text: " : le travail du poids " }, { text: "ne dépend que de la dénivellation h", cle: true }, { text: ", pas du chemin suivi." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["force constante", "travail", "joule", "travail moteur", "travail résistant", "dénivellation"],
    sections: [
      {
        titre: "1. La force constante",
        paras: [
          "Une force est constante si sa direction, son sens et son intensité ne varient pas au cours du temps. Exemple : le poids d'un objet pendant sa chute.",
        ],
      },
      {
        titre: "2. Le travail d'une force constante",
        paras: [
          "Quand le point d'application se déplace d'une longueur d sur la droite d'action : W = F × d (F en newtons, d en mètres, W en joules). Le kilogramme-mètre (kgm) ne s'utilise plus.",
        ],
        puces: [
          "travail moteur (positif) : la force est dans le sens du déplacement ;",
          "travail résistant (négatif) : la force s'oppose au déplacement (frottements, retenue).",
        ],
      },
      {
        titre: "3. Le travail du poids",
        paras: [
          "Le travail du poids ne dépend que de la dénivellation h entre le départ et l'arrivée du centre de gravité : W = P × h. Il est indépendant du chemin suivi : escalier, échelle ou pente douce donnent le même résultat.",
        ],
      },
    ],
    saisTu: [
      "Le joule honore James Prescott Joule (1818-1889), brasseur anglais passionné de mesures. Un joule, c'est peu : soulever une petite pomme d'un mètre ! Une barre de chocolat fournit environ 1 000 000 J d'énergie : de quoi hisser cette pomme au sommet de 100 000 étages…",
    ],
    experience: [
      "Le chantier des joules :",
      "1. Avec ton dynamomètre à élastique, mesure la force pour traîner ton cartable sur le sol (par exemple 15 N).",
      "2. Traîne-le sur 4 m bien mesurés : calcule W = 15 × 4 = 60 J.",
      "3. Soulève maintenant le cartable (poids ≈ 30 N) sur 1,5 m : W = 45 J.",
      "4. Compare : quel « chantier » t'a demandé le plus de travail ?",
    ],
  },
  substitutions: [
    { officiel: "Banc à frottement réglable", local: "Caisse traînée sur ciment, natte ou sable (frottements variés)" },
    { officiel: "Poulies et masses marquées", local: "Seau d'eau hissé à la corde par-dessus une branche" },
    { officiel: "Mètre de laboratoire", local: "Mètre de couturière, corde à nœuds étalonnée" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Un zébu tire une charrette avec une force constante de 400 N sur 500 m de route droite. a) Calcule son travail. b) Ce travail est-il moteur ou résistant ?",
      items: [],
      corrige: [
        [{ text: "a) W = 400 × 500 = " }, { text: "200 000 J = 200 kJ", cle: true }, { text: ". b) " }, { text: "Moteur", cle: true }, { text: " : la force est dans le sens du déplacement. (3 + 1 points)" }],
      ],
    },
    {
      points: 3,
      consigne: "Une porteuse d'eau monte un seau de 100 N par un sentier en lacets long de 300 m, pour une dénivellation de 20 m. Calcule le travail du poids à vaincre.",
      items: [],
      corrige: [
        [{ text: "Seule la dénivellation compte : W = 100 × 20 = " }, { text: "2 000 J", cle: true }, { text: " (les 300 m de sentier " }, { text: "ne changent rien", cle: true }, { text: ")." }],
      ],
    },
    {
      points: 3,
      consigne: "Le frottement de la route sur une caisse traînée vaut 25 N. La caisse avance de 8 m. Calcule le travail du frottement et donne son signe.",
      items: [],
      corrige: [
        [{ text: "W = 25 × 8 = " }, { text: "200 J, résistant (signe −)", cle: true }, { text: " : le frottement s'oppose au déplacement." }],
      ],
    },
  ],
};

const S9 = {
  numero: 9, total: 34, unite: "I", theme: "Mécanique",
  titre: "La puissance d'une force",
  objectif: "exprimer la puissance d'une force et de donner sa signification physique",
  documentation: DOC,
  support: "Escalier ou plan incliné, seaux identiques, montre ou chronomètre, mètre",
  image: "images/img_seance09.png",
  imageLegende: "Figure 9 — Même travail, durées différentes : le plus rapide est le plus puissant !",
  revision: {
    qa: [
      { q: "Rappelle la formule du travail d'une force constante.", ra: "W = F × d, en joules." },
      { q: "De quoi dépend le travail du poids ?", ra: "Uniquement de la dénivellation h : W = P × h." },
      { q: "Qu'est-ce qu'un travail moteur ?", ra: "Le travail d'une force qui aide le déplacement (signe positif)." },
    ],
    technique: "Questions-réponses orales", support: "Ardoise",
  },
  miseEnSituation: {
    enseignant: [
      "Hery et Tsiry montent chacun un sac de ciment identique au deuxième étage du chantier. Hery arrive en 30 secondes, essoufflé ; Tsiry, tranquille, met 2 minutes. Même sac, même étage : même travail !",
      "Pourtant chacun sent bien que Hery a fourni un effort « plus intense ». Quelle grandeur distingue leurs performances ?",
      "R.A. : La puissance : le quotient du travail par la durée : Hery est quatre fois plus puissant.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La puissance d'une force ». Après cette séance, vous serez capables d'exprimer la puissance et de donner sa signification physique.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien notre concours : deux volontaires montent chacun un seau d'eau (poids 50 N) en haut de l'escalier (hauteur 3 m). 1) Le travail de chacun : W = 50 × 3 = 150 J : identique ! 2) Le chronomètre : Vola met 10 s, Sitraka met 30 s. 3) Calculons le quotient W ÷ t : Vola : 150 ÷ 10 = 15 ; Sitraka : 150 ÷ 30 = 5. Le nombre de Vola est trois fois plus grand : elle a été trois fois plus rapide à fournir le même travail.",
    apprenants: "Chronomètrent, calculent les quotients, comparent.",
    technique: "Expérimentation, mesures et calculs", support: "Escalier, seaux, chronomètre",
  },
  analyse: {
    qa: [
      { q: "Comment définit-on la puissance ?", ra: "Le quotient du travail par sa durée d'exécution : P = W ÷ t." },
      { q: "Quelle est son unité ?", ra: "Le watt (W) ; le kilogramme-mètre par seconde ne s'utilise plus." },
      { q: "Que signifie physiquement la puissance ?", ra: "Elle renseigne sur la rapidité avec laquelle un travail est effectué." },
      { q: "Que vaut 1 watt ?", ra: "1 joule fourni en 1 seconde." },
      { q: "Connais-tu une unité pratique des moteurs ?", ra: "Le cheval-vapeur : 1 ch = 736 W." },
    ],
    technique: "Questions-réponses", support: "Tableau",
  },
  synthese: {
    enseignant: "Donc, la puissance d'une force est le quotient du travail effectué par la durée d'exécution : P = W ÷ t. L'unité internationale est le watt (symbole W) : 1 watt correspond à 1 joule par seconde ; le kilogramme-mètre par seconde est abandonné. La puissance renseigne sur la rapidité à fournir un travail : même travail en moins de temps = plus grande puissance. On en déduit aussi W = P × t et t = W ÷ P. Dans le monde des moteurs, on rencontre encore le cheval-vapeur : 1 ch = 736 W : le motoculteur de 8 ch développe près de 5 900 W ! Ordres de grandeur : un homme au travail soutenu ≈ 75 W ; un zébu ≈ 500 W ; une moto ≈ 10 000 W. Hery (150 J en 30 s : 5 W… pardon, en réalité 300 J et plus !) : l'important est le principe : qui va plus vite, à travail égal, est plus puissant.",
    apprenants: "Écoutent et recopient les formules.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Un moteur fournit un travail de 3 600 J en 2 minutes. Calcule sa puissance.",
      items: [],
      corrige: [
        [{ text: "t = 120 s ; P = 3 600 ÷ 120 = " }, { text: "30 W", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Hery monte un sac (travail 3 000 J) en 30 s ; Tsiry met 120 s. Calcule leurs puissances et compare.",
      items: [],
      corrige: [
        [{ text: "Hery : 3 000 ÷ 30 = " }, { text: "100 W", cle: true }, { text: " ; Tsiry : 3 000 ÷ 120 = " }, { text: "25 W", cle: true }, { text: " : Hery est " }, { text: "4 fois plus puissant", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, calcul posé",
  evaluation: [
    {
      consigne: "Complète : la puissance est le quotient du ……… par la ……… : P = ……… ÷ ……… ; unité : le ……… ; 1 ch = ……… W.",
      items: [],
      corrige: [
        [{ text: "Du " }, { text: "travail", cle: true }, { text: " par la " }, { text: "durée", cle: true }, { text: " : P = " }, { text: "W", cle: true }, { text: " ÷ " }, { text: "t", cle: true }, { text: " ; le " }, { text: "watt", cle: true }, { text: " ; 1 ch = " }, { text: "736", cle: true }, { text: " W." }],
      ],
    },
    {
      consigne: "Une pompe de 500 W fonctionne pendant 4 minutes. Calcule le travail fourni.",
      items: [],
      corrige: [
        [{ text: "W = P × t = 500 × 240 = " }, { text: "120 000 J = 120 kJ", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["puissance", "watt", "P = W ÷ t", "cheval-vapeur", "rapidité"],
    sections: [
      {
        titre: "1. La définition",
        paras: [
          "La puissance d'une force est le quotient du travail W par la durée t de son exécution : P = W ÷ t. On en déduit W = P × t et t = W ÷ P.",
        ],
      },
      {
        titre: "2. Les unités",
        paras: [
          "L'unité internationale est le watt (W) : 1 W = 1 J/s. Le kilogramme-mètre par seconde ne s'utilise plus. Dans la technologie des moteurs, on rencontre le cheval-vapeur : 1 ch = 736 W.",
        ],
      },
      {
        titre: "3. La signification physique",
        paras: [
          "La puissance mesure la rapidité avec laquelle un travail est fourni : à travail égal, le plus puissant est celui qui va le plus vite ; à durée égale, c'est celui qui fournit le plus de travail.",
        ],
        puces: [
          "homme au travail soutenu : ≈ 75 W ;",
          "zébu de trait : ≈ 500 W ;",
          "motoculteur de 8 ch : ≈ 5 900 W.",
        ],
      },
    ],
    saisTu: [
      "Le « cheval-vapeur » fut inventé par James Watt lui-même pour vendre ses machines à vapeur : il mesura ce qu'un bon cheval de brasserie pouvait fournir en tirant… et garantit que ses machines faisaient mieux ! Ironie de l'histoire : l'unité officielle porte aujourd'hui son nom, et le cheval n'est plus qu'un souvenir de 736 W.",
    ],
    experience: [
      "Mesure ta propre puissance :",
      "1. Pèse-toi (par exemple 40 kg : poids 400 N) et mesure la hauteur d'un escalier (par exemple 3 m).",
      "2. Monte à fond de train : chronomètre (par exemple 6 s).",
      "3. Ton travail : W = 400 × 3 = 1 200 J ; ta puissance : P = 1 200 ÷ 6 = 200 W !",
      "4. Compare avec tes camarades… et avec le zébu (500 W). Qui s'en approche le plus ?",
    ],
  },
  substitutions: [
    { officiel: "Chronomètre de précision", local: "Montre à trotteuse, chronomètre du téléphone" },
    { officiel: "Escalier étalonné", local: "Marches mesurées au mètre de couturière (hauteur totale = nombre × hauteur d'une marche)" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Un treuil hisse une charge de 200 N à 15 m de hauteur en 25 s. a) Calcule le travail. b) Calcule la puissance du treuil.",
      items: [],
      corrige: [
        [{ text: "a) W = 200 × 15 = " }, { text: "3 000 J", cle: true }, { text: ". b) P = 3 000 ÷ 25 = " }, { text: "120 W", cle: true }, { text: ". (2 + 2 points)" }],
      ],
    },
    {
      points: 3,
      consigne: "Convertis : a) 2 ch en watts ; b) 1 472 W en chevaux-vapeur ; c) 0,5 ch en watts.",
      items: [],
      corrige: [
        [{ text: "a) 2 × 736 = " }, { text: "1 472 W", cle: true }, { text: " ; b) 1 472 ÷ 736 = " }, { text: "2 ch", cle: true }, { text: " ; c) " }, { text: "368 W", cle: true }, { text: ". (1 point par conversion)" }],
      ],
    },
    {
      points: 3,
      consigne: "Deux pompes remplissent chacune un réservoir identique (travail 90 000 J) : la pompe A en 5 min, la pompe B en 15 min. Calcule les deux puissances. Laquelle choisir pour irriguer vite une rizière ?",
      items: [],
      corrige: [
        [{ text: "A : 90 000 ÷ 300 = " }, { text: "300 W", cle: true }, { text: " ; B : 90 000 ÷ 900 = " }, { text: "100 W", cle: true }, { text: " ; on choisit " }, { text: "la pompe A, trois fois plus puissante", cle: true }, { text: "." }],
      ],
    },
  ],
};

module.exports = { seances: [S1, S2, S3, S4, S5, S6, S7, S8, S9] };
