// data-unite3.js — T9 Unité III : OPTIQUE (séances 20 à 25)
const DOC = "Programme scolaire de la classe de 3e (T9) — Sciences Physiques (MEN Madagascar) ; manuel J-Learn";

const S20 = {
  numero: 20, total: 34, unite: "III", theme: "Optique",
  titre: "La réflexion de la lumière : les lois",
  objectif: "mettre en évidence le phénomène de réflexion sur un miroir plan et d'énoncer ses lois",
  documentation: DOC,
  support: "Miroir plan, lampe de poche ou soleil, peigne (pinceau de lumière), rapporteur, feuille blanche",
  image: "images/img_seance20.png",
  imageLegende: "Figure 16 — Le rayon réfléchi est dans le plan d'incidence et l'angle de réflexion égale l'angle d'incidence",
  revision: {
    qa: [
      { q: "Comment se propage la lumière dans un milieu transparent et homogène ?", ra: "En ligne droite : c'est la propagation rectiligne." },
      { q: "Qu'est-ce qu'un rayon lumineux ?", ra: "La droite qui représente le trajet suivi par la lumière." },
      { q: "Cite des objets qui renvoient bien la lumière.", ra: "Le miroir, l'eau calme, une vitre, une casserole bien polie." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Jeu bien connu des cours de récréation : avec un petit miroir, on envoie une tache de soleil sur le mur, ou : gare aux gronderies : dans les yeux d'un camarade ! D'un léger mouvement du poignet, la tache saute exactement où l'on veut.",
      "Comment prévoir avec précision où repart la lumière qui frappe un miroir ?",
      "R.A. : Grâce aux deux lois de la réflexion : le rayon réfléchi est dans le plan d'incidence, et l'angle de réflexion égale l'angle d'incidence.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Miroir, tableau",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La réflexion de la lumière ». Après cette séance, vous serez capables de mettre en évidence la réflexion sur un miroir plan et d'énoncer ses deux lois.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien. 1) Sur la feuille posée à plat, le miroir tient debout ; le peigne devant la lampe découpe un fin pinceau de lumière rasant : il frappe le miroir et repart de l'autre côté : c'est la réflexion. 2) Traçons : le point d'incidence I, la normale N (perpendiculaire au miroir en I), le rayon incident, le rayon réfléchi. 3) Mesurons au rapporteur l'angle d'incidence i (entre rayon incident et normale) et l'angle de réflexion r : i = 30° donne r = 30° ; i = 50° donne r = 50° ! 4) Soulevons le rayon incident hors de la feuille : le rayon réfléchi quitte la feuille lui aussi : les deux restent dans le même plan.",
    apprenants: "Observent, tracent, mesurent les angles au rapporteur.",
    technique: "Expérimentation, mesures", support: "Miroir, peigne, rapporteur, feuille",
  },
  analyse: {
    qa: [
      { q: "Qu'appelle-t-on réflexion de la lumière ?", ra: "Le renvoi de la lumière par une surface polie, dans une direction bien déterminée." },
      { q: "Définis le plan d'incidence.", ra: "Le plan contenant le rayon incident et la normale au miroir au point d'incidence." },
      { q: "Énonce la première loi de la réflexion.", ra: "Le rayon réfléchi est dans le plan d'incidence." },
      { q: "Énonce la seconde loi.", ra: "L'angle de réflexion est égal à l'angle d'incidence : r = i." },
      { q: "Comment mesure-t-on les angles i et r ?", ra: "Toujours entre le rayon et la normale, jamais entre le rayon et le miroir." },
    ],
    technique: "Questions-réponses", support: "Schéma au tableau",
  },
  synthese: {
    enseignant: "Donc, quand la lumière frappe une surface polie comme le miroir plan, elle est renvoyée dans une direction précise : c'est la réflexion. Vocabulaire à retenir sur le schéma : le point d'incidence I, la normale (perpendiculaire au miroir en I), le rayon incident et son angle d'incidence i, le rayon réfléchi et son angle de réflexion r : les angles se mesurent toujours par rapport à la normale. Les deux lois de la réflexion, connues depuis l'Antiquité : première loi : le rayon réfléchi est situé dans le plan d'incidence (le plan formé par le rayon incident et la normale) ; seconde loi : l'angle de réflexion est égal à l'angle d'incidence : r = i. Voilà le secret du jeu du miroir : incliner le miroir de quelques degrés déplace la normale, et la tache de soleil bondit du double de l'angle !",
    apprenants: "Écoutent et recopient le schéma annoté.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Un rayon frappe un miroir plan sous un angle d'incidence de 35°. Trace mentalement : que vaut l'angle de réflexion ? Quel est l'angle entre le rayon incident et le rayon réfléchi ?",
      items: [],
      corrige: [
        [{ text: "r = i = " }, { text: "35°", cle: true }, { text: " ; l'angle entre les deux rayons vaut i + r = " }, { text: "70°", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Le rayon incident arrive perpendiculairement au miroir (le long de la normale). Que fait le rayon réfléchi ?",
      items: [],
      corrige: [
        [{ text: "i = 0° donc r = 0° : la lumière " }, { text: "repart sur elle-même", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, rapporteur",
  evaluation: [
    {
      consigne: "Complète : les angles se mesurent par rapport à la ……… ; 1re loi : le rayon réfléchi est dans le plan d'……… ; 2e loi : ……… = ……… .",
      items: [],
      corrige: [
        [{ text: "La " }, { text: "normale", cle: true }, { text: " ; le plan d'" }, { text: "incidence", cle: true }, { text: " ; " }, { text: "r = i", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Un rayon fait un angle de 20° avec la SURFACE du miroir. Calcule l'angle d'incidence puis l'angle de réflexion.",
      items: [],
      corrige: [
        [{ text: "i = 90 − 20 = " }, { text: "70°", cle: true }, { text: " (par rapport à la normale !) ; r = " }, { text: "70°", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["réflexion", "miroir plan", "normale", "angle d'incidence", "plan d'incidence", "r = i"],
    sections: [
      {
        titre: "1. Le phénomène de réflexion",
        paras: [
          "Une surface polie (miroir, eau calme, métal brillant) renvoie la lumière dans une direction bien déterminée : c'est la réflexion.",
        ],
      },
      {
        titre: "2. Le vocabulaire du schéma",
        paras: [],
        puces: [
          "point d'incidence I : le point où le rayon frappe le miroir ;",
          "normale : la perpendiculaire au miroir en I ;",
          "angle d'incidence i : entre le rayon incident et la normale ;",
          "angle de réflexion r : entre le rayon réfléchi et la normale ;",
          "plan d'incidence : le plan contenant le rayon incident et la normale.",
        ],
      },
      {
        titre: "3. Les deux lois de la réflexion",
        paras: [],
        puces: [
          "1re loi : le rayon réfléchi est situé dans le plan d'incidence ;",
          "2e loi : l'angle de réflexion est égal à l'angle d'incidence : r = i.",
        ],
      },
    ],
    saisTu: [
      "Les astronautes des missions Apollo ont déposé sur la Lune des rétroréflecteurs : des miroirs en coin qui renvoient la lumière exactement d'où elle vient. Depuis, des laboratoires envoient des éclairs laser sur la Lune et chronomètrent l'aller-retour : la distance Terre-Lune est ainsi mesurée au centimètre près : 384 400 km en moyenne !",
    ],
    experience: [
      "Le billard de lumière :",
      "1. Pose une feuille au soleil (ou devant une lampe) ; dresse un petit miroir dessus, tenu par de la pâte ou un support.",
      "2. Fabrique un pinceau de lumière : carton fendu d'une fente fine devant la lampe.",
      "3. Trace le rayon incident, le point I, la normale au rapporteur ; mesure i et r pour trois inclinaisons : conclus !",
      "4. Défi : avec deux miroirs, fais faire un demi-tour complet à la lumière.",
    ],
  },
  substitutions: [
    { officiel: "Banc d'optique avec source laser", local: "Lampe de poche + carton fendu, ou soleil + peigne" },
    { officiel: "Miroir de laboratoire sur pied", local: "Miroir de poche calé par une gomme ou de la pâte collante" },
    { officiel: "Disque gradué d'optique", local: "Rapporteur d'écolier + feuille blanche" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "QCM : 1. Les angles d'optique se mesurent par rapport : a) au miroir b) à la normale c) au sol. 2. Si i = 40°, alors r = : a) 40° b) 50° c) 80°. 3. Le plan d'incidence contient : a) le miroir entier b) le rayon incident et la normale c) l'œil de l'observateur. 4. Un rayon le long de la normale : a) repart sur lui-même b) ne se réfléchit pas c) dévie de 45°.",
      items: [],
      corrige: [
        [{ text: "1. " }, { text: "b", cle: true }, { text: " ; 2. " }, { text: "a", cle: true }, { text: " ; 3. " }, { text: "b", cle: true }, { text: " ; 4. " }, { text: "a", cle: true }, { text: ". (1 point par réponse)" }],
      ],
    },
    {
      points: 3,
      consigne: "L'angle entre le rayon incident et le rayon réfléchi vaut 90°. Calcule l'angle d'incidence. Justifie.",
      items: [],
      corrige: [
        [{ text: "i + r = 90° et i = r donc i = " }, { text: "45°", cle: true }, { text: " (chaque angle vaut " }, { text: "la moitié de l'angle total", cle: true }, { text: ")." }],
      ],
    },
    {
      points: 3,
      consigne: "Explique le jeu de la tache de soleil : pourquoi un tout petit mouvement du miroir déplace-t-il beaucoup la tache sur un mur lointain ?",
      items: [],
      corrige: [
        [{ text: "Incliner le miroir déplace la normale : le rayon réfléchi tourne " }, { text: "du double de l'angle d'inclinaison (r = i des deux côtés)", cle: true }, { text: " ; sur un mur " }, { text: "lointain, ce petit angle devient un grand déplacement", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S21 = {
  numero: 21, total: 34, unite: "III", theme: "Optique",
  titre: "L'image donnée par un miroir plan",
  objectif: "construire l'image d'un objet donnée par un miroir plan et d'en donner les caractéristiques",
  documentation: DOC,
  support: "Miroir plan, vitre, deux bougies identiques, règle, feuille quadrillée",
  image: "images/img_seance21.png",
  imageLegende: "Figure 17 — L'expérience des deux bougies : l'image est symétrique de l'objet par rapport au miroir",
  revision: {
    qa: [
      { q: "Énonce les deux lois de la réflexion.", ra: "Le rayon réfléchi est dans le plan d'incidence ; r = i." },
      { q: "Par rapport à quoi mesure-t-on les angles ?", ra: "Par rapport à la normale au miroir." },
      { q: "Que fait un rayon arrivant le long de la normale ?", ra: "Il repart sur lui-même." },
    ],
    technique: "Questions-réponses orales", support: "Ardoise",
  },
  miseEnSituation: {
    enseignant: [
      "Devant le miroir, ton reflet te ressemble parfaitement… mais quand tu lèves la main droite, il lève la main gauche ! Et l'ambulance porte l'inscription étrange « ECNALUBMA » sur son capot.",
      "Où se trouve exactement l'image donnée par un miroir plan, et quelles sont ses propriétés ?",
      "R.A. : L'image est symétrique de l'objet par rapport au miroir : même taille, derrière le miroir, mais gauche et droite inversées : et on ne peut pas la recueillir sur un écran.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Miroir, tableau",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « L'image donnée par un miroir plan ». Après cette séance, vous serez capables de construire cette image et d'en donner les caractéristiques.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien la célèbre expérience des deux bougies. 1) Une vitre debout sur la table (elle réfléchit ET laisse voir au travers) ; devant elle, une bougie allumée. 2) On voit l'image de la flamme derrière la vitre : promenons la seconde bougie, éteinte, derrière la vitre… jusqu'à ce qu'elle semble « allumée » : elle coïncide avec l'image ! 3) Mesurons : la bougie éteinte est exactement à la même distance de la vitre que la bougie allumée, sur la perpendiculaire commune : l'image est le symétrique de l'objet. 4) Plaçons un écran à l'endroit de l'image : rien ne s'y forme : l'image est virtuelle.",
    apprenants: "Observent, déplacent la bougie éteinte, mesurent les distances.",
    technique: "Expérimentation, mesures", support: "Vitre, bougies, règle",
  },
  analyse: {
    qa: [
      { q: "Où se forme l'image d'un point donnée par un miroir plan ?", ra: "Au point symétrique par rapport au plan du miroir." },
      { q: "Compare la taille de l'image et de l'objet.", ra: "Elles sont identiques : l'image est de même grandeur que l'objet." },
      { q: "Pourquoi dit-on que l'image est virtuelle ?", ra: "Parce qu'elle ne peut pas être recueillie sur un écran : elle semble située derrière le miroir." },
      { q: "Pourquoi l'ambulance écrit-elle « ECNALUBMA » ?", ra: "Le miroir inverse la gauche et la droite : dans le rétroviseur, l'automobiliste lit AMBULANCE à l'endroit." },
      { q: "Comment construit-on l'image d'un objet ?", ra: "On construit le symétrique de chaque point de l'objet par rapport au plan du miroir." },
    ],
    technique: "Questions-réponses", support: "Schéma au tableau",
  },
  synthese: {
    enseignant: "Donc, l'image d'un point lumineux donnée par un miroir plan est le symétrique de ce point par rapport au plan du miroir : même distance au miroir, sur la perpendiculaire. L'image d'un objet s'obtient en prenant le symétrique de chacun de ses points : elle a donc la même grandeur que l'objet et se trouve « derrière » le miroir, à la même distance que lui. Attention : cette image est virtuelle : impossible de la recueillir sur un écran : la lumière ne passe pas réellement derrière le miroir ; nos yeux prolongent simplement les rayons réfléchis. Dernière propriété : le miroir inverse la gauche et la droite : c'est pourquoi ton reflet lève « l'autre » main et pourquoi l'inscription « ECNALUBMA », vue dans un rétroviseur, redevient AMBULANCE. L'expérience des deux bougies résume tout : la bougie éteinte, placée au symétrique, semble s'allumer !",
    apprenants: "Écoutent et recopient la construction.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Un élève se tient à 2 m devant un miroir plan. À quelle distance de lui se trouve son image ?",
      items: [],
      corrige: [
        [{ text: "L'image est à 2 m derrière le miroir : à " }, { text: "4 m", cle: true }, { text: " de l'élève." }],
      ],
    },
    {
      consigne: "Sur ta feuille quadrillée, place un point A à 3 carreaux du trait « miroir » : construis son image A'. Puis un segment AB incliné : construis A'B'.",
      items: [],
      corrige: [
        [{ text: "A' est " }, { text: "le symétrique de A : 3 carreaux de l'autre côté, sur la perpendiculaire", cle: true }, { text: " ; A'B' s'obtient " }, { text: "point par point : même longueur que AB", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail individuel", applicationSupport: "Feuille quadrillée, règle",
  evaluation: [
    {
      consigne: "Donne les quatre caractéristiques de l'image donnée par un miroir plan.",
      items: [],
      corrige: [
        [{ text: "" }, { text: "Symétrique de l'objet par rapport au miroir", cle: true }, { text: " ; " }, { text: "de même grandeur", cle: true }, { text: " ; " }, { text: "virtuelle (non recueillable sur un écran)", cle: true }, { text: " ; " }, { text: "gauche et droite inversées", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Décris l'expérience des deux bougies et ce qu'elle démontre.",
      items: [],
      corrige: [
        [{ text: "Une bougie allumée devant une vitre ; on déplace une bougie éteinte derrière jusqu'à ce qu'elle paraisse allumée : elle occupe " }, { text: "la position exacte de l'image, symétrique de l'objet", cle: true }, { text: " : même distance, même grandeur." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["image", "symétrique", "virtuelle", "même grandeur", "inversion gauche-droite"],
    sections: [
      {
        titre: "1. La position de l'image",
        paras: [
          "L'image d'un point donnée par un miroir plan est le symétrique de ce point par rapport au plan du miroir. L'image d'un objet s'obtient en construisant le symétrique de chacun de ses points.",
        ],
      },
      {
        titre: "2. Les caractéristiques de l'image",
        paras: [],
        puces: [
          "même grandeur que l'objet ;",
          "située derrière le miroir, à la même distance que l'objet ;",
          "virtuelle : elle ne peut pas être recueillie sur un écran ;",
          "gauche et droite inversées.",
        ],
      },
      {
        titre: "3. L'expérience des deux bougies",
        paras: [
          "Une vitre sert de miroir semi-transparent : la bougie éteinte, placée derrière la vitre au symétrique de la bougie allumée, semble s'allumer : elle matérialise la position et la grandeur de l'image.",
        ],
      },
    ],
    saisTu: [
      "Léonard de Vinci écrivait ses carnets « en miroir » : de droite à gauche, avec des lettres retournées ! Pour lire ses milliers de pages de notes scientifiques, il faut… un miroir plan. Gaucher, il évitait ainsi d'étaler l'encre : et gardait au passage ses idées à l'abri des curieux.",
    ],
    experience: [
      "La bougie fantôme (avec un adulte) :",
      "1. Pose une vitre (ou le verre d'un cadre photo) debout entre deux livres, sur la table.",
      "2. Place une bougie allumée devant, une bougie identique éteinte derrière.",
      "3. Déplace la bougie éteinte jusqu'à la voir « brûler » à travers la vitre : mesure les deux distances à la vitre : égales !",
      "4. Variante sans flamme : deux bouchons identiques et une lampe de poche.",
    ],
  },
  substitutions: [
    { officiel: "Vitre de laboratoire sur support", local: "Verre d'un cadre photo tenu entre deux piles de livres" },
    { officiel: "Bougies de laboratoire", local: "Deux bougies du marché, ou deux bouchons identiques" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Vrai ou Faux : a) L'image donnée par un miroir plan est plus petite que l'objet. b) Elle est virtuelle. c) Elle est symétrique de l'objet par rapport au miroir. d) On peut la projeter sur un écran.",
      items: [],
      corrige: [
        [{ text: "a) " }, { text: "Faux (même grandeur)", cle: true }, { text: " ; b) " }, { text: "Vrai", cle: true }, { text: " ; c) " }, { text: "Vrai", cle: true }, { text: " ; d) " }, { text: "Faux (image virtuelle)", cle: true }, { text: ". (1 point par réponse)" }],
      ],
    },
    {
      points: 3,
      consigne: "Un oiseau vole à 1,5 m au-dessus d'un lac parfaitement calme. Où se trouve son image ? Pourquoi le lac se comporte-t-il en miroir ?",
      items: [],
      corrige: [
        [{ text: "À " }, { text: "1,5 m sous la surface, au symétrique", cle: true }, { text: " ; l'eau calme est une " }, { text: "surface polie qui réfléchit la lumière", cle: true }, { text: " comme un miroir plan." }],
      ],
    },
    {
      points: 3,
      consigne: "Écris le mot « BUS » tel qu'il faudrait le peindre sur un capot pour qu'il se lise correctement dans un rétroviseur. Explique.",
      items: [],
      corrige: [
        [{ text: "Il faut le peindre retourné : " }, { text: "SUB avec les lettres inversées gauche-droite", cle: true }, { text: " ; le miroir " }, { text: "inverse gauche et droite", cle: true }, { text: ", la double inversion rend le mot lisible." }],
      ],
    },
  ],
};

const S22 = {
  numero: 22, total: 34, unite: "III", theme: "Optique",
  titre: "La réfraction de la lumière ; le mirage",
  objectif: "mettre en évidence le phénomène de réfraction et d'interpréter le mirage",
  documentation: DOC,
  support: "Verre d'eau, crayon, pièce de monnaie, bassine opaque, lampe, feuille",
  image: "images/img_seance22.png",
  imageLegende: "Figure 18 — Le crayon « cassé » : la lumière change de direction en traversant la surface de l'eau",
  revision: {
    qa: [
      { q: "Comment la lumière se propage-t-elle dans un milieu homogène ?", ra: "En ligne droite." },
      { q: "Énonce la 2e loi de la réflexion.", ra: "L'angle de réflexion égale l'angle d'incidence." },
      { q: "Cite des milieux transparents.", ra: "L'air, l'eau, le verre." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Le pêcheur au harpon le sait bien : le poisson n'est jamais exactement là où on le voit ! Il vise toujours plus bas que l'image. Et le crayon plongé dans le verre d'eau paraît brisé net à la surface.",
      "Pourquoi la lumière nous joue-t-elle ces tours quand elle passe de l'eau à l'air ?",
      "R.A. : Parce qu'elle change de direction en traversant la surface entre deux milieux transparents : c'est la réfraction.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Verre d'eau, crayon",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La réfraction de la lumière ». Après cette séance, vous serez capables de mettre en évidence la réfraction, d'énoncer sa première loi et d'interpréter le mirage.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien. 1) Le crayon dans le verre d'eau : vu de côté, il paraît cassé à la surface : la lumière venant de la partie immergée a changé de direction en sortant de l'eau. 2) La pièce invisible : la pièce au fond de la bassine opaque est cachée par le bord… je verse de l'eau sans la bouger : la pièce apparaît ! Les rayons venant de la pièce se sont courbés à la surface et atteignent maintenant l'œil. 3) Le pinceau de lumière entrant dans l'eau : il se brise au passage de la surface : le rayon réfracté se rapproche de la normale en entrant dans l'eau, s'en écarte en sortant. 4) Soulevons le rayon incident : le rayon réfracté reste dans le même plan.",
    apprenants: "Observent les trois expériences, schématisent.",
    technique: "Expérimentation", support: "Verre, bassine, pièce, lampe",
  },
  analyse: {
    qa: [
      { q: "Qu'appelle-t-on réfraction ?", ra: "Le changement de direction de la lumière quand elle traverse la surface séparant deux milieux transparents." },
      { q: "Énonce la première loi de la réfraction.", ra: "Le rayon réfracté est dans le plan d'incidence." },
      { q: "Comment se comporte le rayon en passant de l'air dans l'eau ?", ra: "Il se rapproche de la normale ; en sortant de l'eau vers l'air, il s'en écarte." },
      { q: "Pourquoi la pièce « réapparaît-elle » quand on verse l'eau ?", ra: "Les rayons issus de la pièce sont déviés à la surface et parviennent à l'œil, qui croit voir la pièce plus haut qu'elle n'est." },
      { q: "Pourquoi le pêcheur vise-t-il plus bas que l'image du poisson ?", ra: "La réfraction fait paraître le poisson plus haut que sa position réelle." },
    ],
    technique: "Questions-réponses", support: "Schémas au tableau",
  },
  synthese: {
    enseignant: "Donc, lorsque la lumière traverse la surface séparant deux milieux transparents : air et eau, air et verre : elle change brusquement de direction : c'est la réfraction. Le vocabulaire reprend celui de la réflexion : point d'incidence, normale, angle d'incidence i, et maintenant le rayon réfracté avec son angle de réfraction. Première loi de la réfraction : le rayon réfracté est situé dans le plan d'incidence : c'est la seule loi au programme, la relation entre les angles sera vue au lycée. Retenez le comportement : en entrant dans un milieu plus « dense » (air vers eau), le rayon se rapproche de la normale ; en sortant (eau vers air), il s'en écarte. Voilà le crayon cassé, la pièce qui réapparaît, le poisson plus haut que sa vraie place. Et le mirage ? Sur la route surchauffée, l'air près du bitume est plus chaud et moins dense : les rayons venant du ciel s'y courbent progressivement et remontent vers l'œil : on croit voir une flaque d'eau qui reflète le ciel : ce n'est que de la lumière réfractée par les couches d'air !",
    apprenants: "Écoutent et recopient les schémas.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Explique en une phrase pourquoi le crayon plongé dans l'eau paraît cassé.",
      items: [],
      corrige: [
        [{ text: "La lumière venant de la partie immergée " }, { text: "change de direction (réfraction) en sortant de l'eau", cle: true }, { text: " : l'œil voit cette partie décalée." }],
      ],
    },
    {
      consigne: "Un rayon passe de l'air dans l'eau. Se rapproche-t-il ou s'écarte-t-il de la normale ? Et de l'eau vers l'air ?",
      items: [],
      corrige: [
        [{ text: "Air → eau : il " }, { text: "se rapproche de la normale", cle: true }, { text: " ; eau → air : il " }, { text: "s'en écarte", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, schéma",
  evaluation: [
    {
      consigne: "Complète : la réfraction est le ……… de ……… de la lumière à la traversée de la surface entre deux milieux ……… ; 1re loi : le rayon réfracté est dans le plan d'……… .",
      items: [],
      corrige: [
        [{ text: "Le " }, { text: "changement", cle: true }, { text: " de " }, { text: "direction", cle: true }, { text: " ; milieux " }, { text: "transparents", cle: true }, { text: " ; plan d'" }, { text: "incidence", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Explique le mirage de la « flaque d'eau » sur la route chauffée au soleil.",
      items: [],
      corrige: [
        [{ text: "L'air près du bitume est " }, { text: "plus chaud et moins dense", cle: true }, { text: " ; les rayons venant du ciel " }, { text: "se courbent dans ces couches d'air et remontent vers l'œil", cle: true }, { text: " : on croit voir " }, { text: "le reflet du ciel dans une flaque", cle: true }, { text: " qui n'existe pas." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["réfraction", "rayon réfracté", "plan d'incidence", "normale", "mirage"],
    sections: [
      {
        titre: "1. Le phénomène de réfraction",
        paras: [
          "Quand la lumière traverse la surface séparant deux milieux transparents (air/eau, air/verre), elle change brusquement de direction : c'est la réfraction.",
        ],
        puces: [
          "en entrant dans l'eau (ou le verre), le rayon se rapproche de la normale ;",
          "en sortant vers l'air, il s'en écarte.",
        ],
      },
      {
        titre: "2. La première loi de la réfraction",
        paras: [
          "Le rayon réfracté est situé dans le plan d'incidence. (La relation entre les angles sera étudiée au lycée.)",
        ],
      },
      {
        titre: "3. Les conséquences et le mirage",
        paras: [
          "La réfraction explique le crayon « cassé », la pièce qui réapparaît, le poisson vu plus haut que sa position réelle.",
          "Le mirage : au-dessus d'une route surchauffée, les couches d'air chaud, moins denses, courbent progressivement les rayons venus du ciel, qui remontent vers l'œil : la « flaque » est l'image réfractée du ciel.",
        ],
      },
    ],
    saisTu: [
      "Les fibres optiques qui transportent Internet sous les océans utilisent la réfraction à l'envers : la lumière qui tente de sortir du cœur de verre est intégralement renvoyée à l'intérieur (réflexion totale) et rebondit ainsi sur des milliers de kilomètres ! Un seul cheveu de verre porte des millions de conversations : y compris entre Madagascar et le monde, via le câble sous-marin.",
    ],
    experience: [
      "La pièce magique :",
      "1. Pose une pièce au fond d'une cuvette opaque ; recule jusqu'à ce que le bord cache tout juste la pièce.",
      "2. Sans bouger la tête, fais verser doucement de l'eau par un camarade.",
      "3. La pièce apparaît comme par magie : la lumière s'est courbée à la surface !",
      "4. Bonus : plonge un crayon dans un verre d'eau et observe la « cassure » sous tous les angles.",
    ],
  },
  substitutions: [
    { officiel: "Cuve à réfraction graduée", local: "Bassine opaque + pièce de monnaie + verre d'eau" },
    { officiel: "Source laser", local: "Lampe de poche + carton fendu (pinceau fin)" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "QCM : 1. La réfraction se produit : a) sur un miroir b) à la surface entre deux milieux transparents c) dans le vide. 2. De l'air vers l'eau, le rayon : a) se rapproche de la normale b) s'en écarte c) disparaît. 3. Le poisson vu du bord est : a) plus bas qu'il ne paraît b) plus haut c) exactement où on le voit. 4. Le mirage est dû : a) à l'évaporation b) à la réfraction dans l'air chaud c) à la réflexion sur l'eau.",
      items: [],
      corrige: [
        [{ text: "1. " }, { text: "b", cle: true }, { text: " ; 2. " }, { text: "a", cle: true }, { text: " ; 3. " }, { text: "a (plus bas que son image)", cle: true }, { text: " ; 4. " }, { text: "b", cle: true }, { text: ". (1 point par réponse)" }],
      ],
    },
    {
      points: 3,
      consigne: "Le pêcheur au harpon voit un poisson. Où doit-il viser et pourquoi ?",
      items: [],
      corrige: [
        [{ text: "" }, { text: "Plus bas que l'image", cle: true }, { text: " : la réfraction à la surface fait paraître le poisson " }, { text: "plus haut que sa position réelle", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "Compare réflexion et réfraction : surface concernée, devenir du rayon, une loi pour chacune.",
      items: [],
      corrige: [
        [{ text: "Réflexion : surface polie, " }, { text: "la lumière repart dans le même milieu, r = i", cle: true }, { text: " ; réfraction : surface entre deux milieux transparents, " }, { text: "la lumière traverse en changeant de direction, rayon réfracté dans le plan d'incidence", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S23 = {
  numero: 23, total: 34, unite: "III", theme: "Optique",
  titre: "La décomposition de la lumière blanche",
  objectif: "mettre en évidence la décomposition de la lumière blanche par un prisme et de nommer les couleurs du spectre",
  documentation: DOC,
  support: "Prisme (ou CD, ou bassine + miroir incliné), lampe ou soleil, écran blanc, images d'arc-en-ciel",
  image: "images/img_seance23.png",
  imageLegende: "Figure 19 — Le prisme étale la lumière blanche en un spectre de sept couleurs",
  revision: {
    qa: [
      { q: "Qu'est-ce que la réfraction ?", ra: "Le changement de direction de la lumière entre deux milieux transparents." },
      { q: "Quand voit-on un arc-en-ciel ?", ra: "Quand le soleil éclaire des gouttes de pluie : soleil dans le dos, pluie devant." },
      { q: "De quelle couleur paraît la lumière du Soleil ?", ra: "Blanche (lumière du jour)." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Après l'averse, l'arc-en-ciel déploie ses couleurs au-dessus des rizières : toujours les mêmes, toujours dans le même ordre, du rouge au violet. Pourtant le Soleil, lui, est simplement « blanc ».",
      "D'où sortent ces couleurs ? La pluie les fabrique-t-elle ?",
      "R.A. : Non : la lumière blanche contient déjà toutes les couleurs ; les gouttes ne font que les séparer, comme le prisme.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Image d'arc-en-ciel",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La décomposition de la lumière blanche ». Après cette séance, vous serez capables de décrire l'expérience du prisme et de nommer les couleurs du spectre.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien. 1) Un fin pinceau de lumière blanche traverse le prisme : sur l'écran s'étale une bande multicolore : le spectre : violet, indigo, bleu, vert, jaune, orangé, rouge. 2) Le violet est le plus dévié, le rouge le moins dévié. 3) Même expérience avec le CD : ses fins sillons étalent aussi les couleurs. 4) Et la bassine d'eau avec le miroir incliné au soleil : un « prisme d'eau » : l'arc-en-ciel apparaît au plafond ! 5) Dans tous les cas, les couleurs sortent de la lumière blanche elle-même : rien ne les a « ajoutées ».",
    apprenants: "Observent, nomment et ordonnent les couleurs.",
    technique: "Expérimentation", support: "Prisme, CD, bassine-miroir, écran",
  },
  analyse: {
    qa: [
      { q: "Que fait le prisme à la lumière blanche ?", ra: "Il la décompose : il sépare les couleurs qu'elle contient." },
      { q: "Comment s'appelle la bande colorée obtenue ?", ra: "Le spectre de la lumière blanche." },
      { q: "Énumère les sept couleurs dans l'ordre.", ra: "Violet, indigo, bleu, vert, jaune, orangé, rouge." },
      { q: "Quelle couleur est la plus déviée ? la moins déviée ?", ra: "Le violet est le plus dévié, le rouge le moins." },
      { q: "Le spectre s'arrête-t-il au rouge et au violet ?", ra: "Non : au-delà existent des lumières invisibles : l'infrarouge (au-delà du rouge) et l'ultraviolet (au-delà du violet)." },
    ],
    technique: "Questions-réponses", support: "Spectre projeté, tableau",
  },
  synthese: {
    enseignant: "Donc, la lumière blanche n'est pas « simple » : le prisme la décompose en une bande de couleurs appelée spectre : violet, indigo, bleu, vert, jaune, orangé, rouge : sept couleurs qui passent de l'une à l'autre insensiblement. La décomposition vient de la réfraction : chaque couleur est déviée différemment par le verre : le violet le plus, le rouge le moins : le prisme « étale » ainsi ce que la lumière blanche contenait déjà. L'arc-en-ciel est le même phénomène en grand : chaque goutte de pluie joue le rôle d'un minuscule prisme pour la lumière du Soleil. Le spectre visible n'est qu'une fenêtre : au-delà du rouge, l'infrarouge (la « chaleur » des braises) ; au-delà du violet, l'ultraviolet (qui brunit la peau et brûle aux heures chaudes) : des lumières invisibles à l'œil mais bien réelles. La semaine prochaine : pourquoi les objets sont-ils colorés ?",
    apprenants: "Écoutent et recopient le spectre en couleurs.", technique: "Exposé", support: "Tableau noir, craies de couleur",
  },
  application: [
    {
      consigne: "Réponds :",
      items: [
        "a) Comment appelle-t-on la bande colorée donnée par le prisme ?",
        "b) Cite les sept couleurs dans l'ordre, du plus dévié au moins dévié.",
      ],
      corrige: [
        [{ text: "a) Le " }, { text: "spectre de la lumière blanche", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Violet, indigo, bleu, vert, jaune, orangé, rouge", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Pourquoi dit-on que le prisme ne « fabrique » pas les couleurs ?",
      items: [],
      corrige: [
        [{ text: "Parce qu'il ne fait que " }, { text: "séparer les couleurs déjà contenues dans la lumière blanche", cle: true }, { text: " (chacune est réfractée différemment)." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète : le prisme ……… la lumière blanche ; la bande obtenue est le ……… ; la couleur la plus déviée est le ……… ; au-delà du rouge : l'……… ; au-delà du violet : l'……… .",
      items: [],
      corrige: [
        [{ text: "Il la " }, { text: "décompose", cle: true }, { text: " ; le " }, { text: "spectre", cle: true }, { text: " ; le " }, { text: "violet", cle: true }, { text: " ; l'" }, { text: "infrarouge", cle: true }, { text: " ; l'" }, { text: "ultraviolet", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Explique pourquoi l'arc-en-ciel apparaît quand le soleil éclaire la pluie.",
      items: [],
      corrige: [
        [{ text: "Chaque goutte d'eau agit comme " }, { text: "un petit prisme : elle décompose la lumière blanche du Soleil", cle: true }, { text: " ; l'ensemble des gouttes étale " }, { text: "le spectre en arc dans le ciel", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["décomposition", "prisme", "spectre", "sept couleurs", "infrarouge", "ultraviolet"],
    sections: [
      {
        titre: "1. L'expérience du prisme",
        paras: [
          "Un pinceau de lumière blanche traversant un prisme s'étale sur l'écran en une bande colorée : le spectre de la lumière blanche. Le prisme décompose la lumière : il sépare les couleurs qu'elle contient déjà.",
        ],
      },
      {
        titre: "2. Le spectre",
        paras: [
          "Sept couleurs passant insensiblement de l'une à l'autre : violet, indigo, bleu, vert, jaune, orangé, rouge. Le violet est le plus dévié, le rouge le moins. L'arc-en-ciel est le spectre du Soleil donné par les gouttes de pluie.",
        ],
      },
      {
        titre: "3. Au-delà du visible",
        paras: [],
        puces: [
          "infrarouge (IR) : au-delà du rouge : invisible, il transporte de la chaleur (braises, télécommandes) ;",
          "ultraviolet (UV) : au-delà du violet : invisible, il brunit et brûle la peau (prudence au soleil !).",
        ],
      },
    ],
    saisTu: [
      "C'est Isaac Newton, en 1666, qui perça le secret avec deux prismes : le premier étalait les couleurs, le second les recombinait en lumière blanche ! Preuve que le verre n'invente rien : il trie. Newton choisit de compter sept couleurs : comme les sept notes de musique : alors que le spectre est en réalité continu.",
    ],
    experience: [
      "L'arc-en-ciel de plafond :",
      "1. Remplis une bassine d'eau et cale un miroir de poche incliné dedans, face au soleil du matin.",
      "2. Oriente le reflet vers un mur ou un plafond clair : un spectre apparaît !",
      "3. L'eau au-dessus du miroir forme un « prisme liquide » qui décompose la lumière.",
      "4. Variante : incline un CD au soleil : ses sillons microscopiques étalent aussi les couleurs.",
    ],
  },
  substitutions: [
    { officiel: "Prisme de verre", local: "CD, bassine d'eau + miroir incliné, goutte d'eau sur vitre au soleil" },
    { officiel: "Lanterne d'optique", local: "Soleil direct + carton fendu, lampe de poche puissante" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "QCM : 1. Le prisme : a) fabrique b) sépare c) supprime les couleurs. 2. La couleur la moins déviée : a) violet b) vert c) rouge. 3. L'arc-en-ciel est dû : a) aux gouttes-prismes b) aux nuages c) au vent. 4. L'ultraviolet est : a) visible b) invisible et au-delà du violet c) une couleur du spectre visible.",
      items: [],
      corrige: [
        [{ text: "1. " }, { text: "b", cle: true }, { text: " ; 2. " }, { text: "c", cle: true }, { text: " ; 3. " }, { text: "a", cle: true }, { text: " ; 4. " }, { text: "b", cle: true }, { text: ". (1 point par réponse)" }],
      ],
    },
    {
      points: 3,
      consigne: "Décris l'expérience du prisme : dispositif, observation, conclusion.",
      items: [],
      corrige: [
        [{ text: "Un " }, { text: "pinceau de lumière blanche traverse le prisme", cle: true }, { text: " ; sur l'écran : " }, { text: "le spectre : violet → rouge", cle: true }, { text: " ; conclusion : " }, { text: "la lumière blanche est un mélange de toutes les couleurs", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "L'infrarouge et l'ultraviolet : où se trouvent-ils par rapport au spectre visible, et cite un effet de chacun.",
      items: [],
      corrige: [
        [{ text: "IR : " }, { text: "au-delà du rouge : chaleur des braises, télécommandes", cle: true }, { text: " ; UV : " }, { text: "au-delà du violet : bronzage et coups de soleil", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S24 = {
  numero: 24, total: 34, unite: "III", theme: "Optique",
  titre: "La couleur des objets ; les filtres",
  objectif: "expliquer la couleur des objets par l'absorption et de décrire l'effet d'un filtre coloré",
  documentation: DOC,
  support: "Objets colorés (tissus rouge, vert, blanc, noir), papiers cellophane colorés (filtres), lampe, boîte sombre",
  image: "images/img_seance24.png",
  imageLegende: "Figure 20 — Le tissu rouge renvoie le rouge et absorbe les autres couleurs ; le filtre ne laisse passer que sa couleur",
  revision: {
    qa: [
      { q: "Que contient la lumière blanche ?", ra: "Toutes les couleurs du spectre : du violet au rouge." },
      { q: "Qui décompose la lumière blanche ?", ra: "Le prisme, les gouttes de pluie, le CD." },
      { q: "Cite les sept couleurs du spectre.", ra: "Violet, indigo, bleu, vert, jaune, orangé, rouge." },
    ],
    technique: "Questions-réponses orales", support: "Ardoise",
  },
  miseEnSituation: {
    enseignant: [
      "Au marché de nuit, sous les ampoules rouges du stand de brochettes, le lamba vert de la marchande paraît… presque noir ! Et de retour sous la lampe blanche de la maison, il redevient bien vert.",
      "La couleur appartient-elle vraiment aux objets, ou dépend-elle de la lumière qui les éclaire ?",
      "R.A. : Elle dépend des deux : l'objet renvoie certaines couleurs et absorbe les autres ; il ne peut renvoyer que ce que la lumière lui apporte.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tissus colorés, tableau",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La couleur des objets ; les filtres ». Après cette séance, vous serez capables d'expliquer la couleur d'un objet par l'absorption et de prévoir l'effet d'un filtre.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien, dans la boîte sombre. 1) En lumière blanche : le tissu rouge est rouge, le vert est vert, le blanc est blanc, le noir est noir. 2) J'interpose le filtre rouge (cellophane) devant la lampe : la lumière devient rouge ; le tissu rouge reste rouge, le blanc paraît rouge… mais le tissu vert devient sombre, presque noir ! 3) Avec le filtre vert : le vert reste vert, le rouge devient noir. 4) Regardons le spectre du prisme à travers le filtre rouge : seul le rouge subsiste : le filtre absorbe toutes les autres couleurs.",
    apprenants: "Observent, notent les couleurs perçues dans chaque cas.",
    technique: "Expérimentation, tableau d'observations", support: "Boîte, tissus, filtres, lampe",
  },
  analyse: {
    qa: [
      { q: "Pourquoi un objet est-il rouge en lumière blanche ?", ra: "Il renvoie (diffuse) la lumière rouge et absorbe toutes les autres couleurs." },
      { q: "Pourquoi un objet blanc est-il blanc ? un objet noir, noir ?", ra: "Le blanc renvoie toutes les couleurs ; le noir les absorbe toutes." },
      { q: "Que fait un filtre coloré ?", ra: "Il ne laisse passer que la lumière de sa couleur et absorbe les autres." },
      { q: "Pourquoi le tissu vert paraît-il noir en lumière rouge ?", ra: "Il ne reçoit que du rouge, qu'il absorbe : il ne renvoie presque rien : il paraît noir." },
      { q: "La couleur d'un objet est-elle une propriété absolue ?", ra: "Non : elle dépend de l'objet ET de la lumière qui l'éclaire." },
    ],
    technique: "Questions-réponses", support: "Tableau d'observations",
  },
  synthese: {
    enseignant: "Donc, la couleur d'un objet s'explique par l'absorption : éclairé en lumière blanche, un objet rouge renvoie la lumière rouge et absorbe toutes les autres couleurs du spectre ; un objet blanc renvoie tout, un objet noir absorbe tout (c'est pourquoi il chauffe au soleil !). Le filtre coloré fonctionne de même : il ne laisse passer que la lumière de sa couleur et absorbe le reste : le filtre rouge ne transmet que du rouge. Conséquence spectaculaire : la couleur perçue dépend de l'éclairage : le lamba vert, sous la lampe rouge, ne reçoit aucune lumière verte à renvoyer : il absorbe le rouge et paraît noir ! Retenez la règle en deux temps : 1) quelles couleurs la lumière apporte-t-elle ? 2) lesquelles l'objet peut-il renvoyer ? Ce qui est renvoyé fait la couleur perçue ; ce qui manque des deux côtés donne du noir.",
    apprenants: "Écoutent et recopient la règle.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Prévois la couleur perçue :",
      items: [
        "a) Un tissu blanc en lumière verte.",
        "b) Un tissu rouge en lumière verte.",
        "c) Un tissu noir en lumière rouge.",
      ],
      corrige: [
        [{ text: "a) Il renvoie ce qu'il reçoit : " }, { text: "vert", cle: true }, { text: "." }],
        [{ text: "b) Il absorbe le vert, ne renvoie rien : " }, { text: "noir", cle: true }, { text: "." }],
        [{ text: "c) Il absorbe tout : " }, { text: "noir", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Que voit-on du spectre du prisme à travers un filtre vert ?",
      items: [],
      corrige: [
        [{ text: "Seule " }, { text: "la bande verte subsiste", cle: true }, { text: " : le filtre " }, { text: "absorbe toutes les autres couleurs", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, tableau à compléter",
  evaluation: [
    {
      consigne: "Complète : un objet bleu éclairé en blanc ……… le bleu et ……… les autres couleurs ; un objet blanc ……… toutes les couleurs ; un filtre jaune ne laisse passer que ……… .",
      items: [],
      corrige: [
        [{ text: "Il " }, { text: "renvoie", cle: true }, { text: " le bleu et " }, { text: "absorbe", cle: true }, { text: " les autres ; il " }, { text: "renvoie", cle: true }, { text: " toutes ; que " }, { text: "la lumière jaune", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Explique pourquoi le lamba vert paraît noir sous l'ampoule rouge du marché.",
      items: [],
      corrige: [
        [{ text: "Il ne reçoit " }, { text: "que de la lumière rouge, qu'il absorbe", cle: true }, { text: " ; ne pouvant renvoyer " }, { text: "aucune lumière verte (il n'en reçoit pas)", cle: true }, { text: ", il paraît " }, { text: "noir", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["absorption", "diffusion", "couleur des objets", "filtre coloré", "éclairage"],
    sections: [
      {
        titre: "1. La couleur des objets",
        paras: [
          "Éclairé en lumière blanche, un objet renvoie (diffuse) certaines couleurs et absorbe les autres : sa couleur est celle qu'il renvoie.",
        ],
        puces: [
          "objet rouge : renvoie le rouge, absorbe le reste ;",
          "objet blanc : renvoie toutes les couleurs ;",
          "objet noir : les absorbe toutes (il chauffe au soleil !).",
        ],
      },
      {
        titre: "2. Les filtres colorés",
        paras: [
          "Un filtre coloré ne laisse passer que la lumière de sa couleur et absorbe les autres : un filtre rouge ne transmet que du rouge.",
        ],
      },
      {
        titre: "3. La couleur dépend de l'éclairage",
        paras: [
          "Un objet ne peut renvoyer que les couleurs qu'il reçoit : un tissu vert en lumière rouge paraît noir. Règle : 1) que reçoit l'objet ? 2) que peut-il renvoyer ? Ce qui est renvoyé fait la couleur perçue.",
        ],
      },
    ],
    saisTu: [
      "Pourquoi porte-t-on du blanc en été et du sombre en hiver ? Le blanc renvoie presque toute la lumière du soleil : il reste frais ; le noir l'absorbe et la transforme en chaleur. Les toits blanchis à la chaux des pays chauds appliquent la physique d'aujourd'hui… depuis des siècles !",
    ],
    experience: [
      "La boîte à couleurs :",
      "1. Découpe une fenêtre dans une boîte en carton ; tapisse le fond d'objets colorés (bouchons, tissus, papiers).",
      "2. Couvre la fenêtre de cellophane rouge (bonbons, emballages) : éclaire à la lampe de poche à travers : note les couleurs perçues.",
      "3. Recommence avec du cellophane vert, puis bleu.",
      "4. Tableau final : quel objet « disparaît » (devient noir) sous quelle lumière ?",
    ],
  },
  substitutions: [
    { officiel: "Filtres d'optique calibrés", local: "Papiers cellophane de bonbons, plastiques colorés transparents" },
    { officiel: "Chambre noire de laboratoire", local: "Grande boîte en carton, salle assombrie le soir" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Donne la couleur perçue : a) objet blanc en lumière rouge ; b) objet rouge en lumière rouge ; c) objet bleu en lumière rouge ; d) objet noir en lumière blanche.",
      items: [],
      corrige: [
        [{ text: "a) " }, { text: "rouge", cle: true }, { text: " ; b) " }, { text: "rouge", cle: true }, { text: " ; c) " }, { text: "noir", cle: true }, { text: " ; d) " }, { text: "noir", cle: true }, { text: ". (1 point par réponse)" }],
      ],
    },
    {
      points: 3,
      consigne: "Explique pourquoi un objet noir posé au soleil devient plus chaud qu'un objet blanc.",
      items: [],
      corrige: [
        [{ text: "Le noir " }, { text: "absorbe toutes les couleurs de la lumière", cle: true }, { text: " et convertit cette énergie " }, { text: "en chaleur", cle: true }, { text: " ; le blanc renvoie presque tout." }],
      ],
    },
    {
      points: 3,
      consigne: "Un maillot paraît jaune en lumière blanche. On l'éclaire à travers un filtre rouge : que devient-il ? (Le jaune renvoie le rouge, l'orangé, le jaune et le vert.) Justifie.",
      items: [],
      corrige: [
        [{ text: "Il ne reçoit que du rouge ; comme le jaune " }, { text: "renvoie aussi le rouge", cle: true }, { text: ", le maillot paraît " }, { text: "rouge", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S25 = {
  numero: 25, total: 34, unite: "III", theme: "Optique",
  titre: "La recomposition de la lumière blanche ; le disque de Newton",
  objectif: "mettre en évidence la recomposition de la lumière blanche à l'aide du disque de Newton",
  documentation: DOC,
  support: "Disque de Newton (carton colorié), ficelle ou toupie, prismes (si disponibles), lampe",
  image: "images/img_seance25.png",
  imageLegende: "Figure 21 — En rotation rapide, les sept couleurs du disque de Newton se fondent en blanc grisâtre",
  revision: {
    qa: [
      { q: "Que fait le prisme à la lumière blanche ?", ra: "Il la décompose en un spectre de sept couleurs." },
      { q: "Cite les sept couleurs du spectre.", ra: "Violet, indigo, bleu, vert, jaune, orangé, rouge." },
      { q: "Pourquoi le tissu vert paraît-il noir en lumière rouge ?", ra: "Il absorbe le rouge et ne reçoit aucun vert à renvoyer." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Nous avons cassé la lumière blanche en sept couleurs avec le prisme. Question de logique : si le prisme sait la « démonter »… quelqu'un sait-il la « remonter » ?",
      "Peut-on refabriquer du blanc à partir des sept couleurs du spectre ?",
      "R.A. : Oui : en superposant les couleurs, par exemple en faisant tourner très vite le disque de Newton : l'œil les mélange et voit blanc.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Disque de Newton, tableau",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La recomposition de la lumière blanche ». Après cette séance, vous serez capables de décrire l'expérience du disque de Newton et de conclure sur la nature de la lumière blanche.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien. 1) Voici le disque de Newton : un carton divisé en secteurs peints aux sept couleurs du spectre, dans l'ordre. 2) À l'arrêt : on voit distinctement chaque couleur. 3) Je le fais tourner lentement : les couleurs défilent. 4) Très vite (ficelle torsadée puis tendue) : les couleurs disparaissent : le disque paraît blanc grisâtre ! 5) Contre-épreuve avec deux prismes (si disponibles) : le premier étale le spectre, le second, inversé, reforme un pinceau de lumière blanche.",
    apprenants: "Observent, font tourner leur propre disque.",
    technique: "Expérimentation", support: "Disques, ficelles",
  },
  analyse: {
    qa: [
      { q: "Que voit-on quand le disque tourne très vite ?", ra: "Les couleurs se fondent : le disque paraît blanc grisâtre." },
      { q: "Pourquoi l'œil voit-il blanc ?", ra: "Les impressions colorées se succèdent trop vite : l'œil les superpose : la persistance des impressions lumineuses les mélange." },
      { q: "Que démontre cette expérience ?", ra: "Que la superposition des couleurs du spectre redonne la lumière blanche : c'est la recomposition." },
      { q: "Pourquoi obtient-on un blanc « grisâtre » et non éclatant ?", ra: "Les peintures ne sont pas des couleurs pures et absorbent une partie de la lumière." },
      { q: "Conclus : qu'est-ce que la lumière blanche ?", ra: "Un mélange de toutes les couleurs du spectre." },
    ],
    technique: "Questions-réponses", support: "Disque, tableau",
  },
  synthese: {
    enseignant: "Donc, la boucle est bouclée : le prisme décompose la lumière blanche, et le disque de Newton la recompose. En rotation rapide, les secteurs colorés impressionnent l'œil si vite que les couleurs se superposent : grâce à la persistance des impressions lumineuses, l'œil fait la somme : violet + indigo + bleu + vert + jaune + orangé + rouge = blanc. Le blanc obtenu est grisâtre car les peintures du carton ne sont pas parfaitement pures : elles absorbent une partie de la lumière. La contre-épreuve des deux prismes le confirme : le second prisme, inversé, refond le spectre en pinceau blanc. Conclusion définitive : la lumière blanche est un mélange de toutes les couleurs du spectre : le prisme les sépare, le disque et l'œil les réunissent. Décomposition et recomposition : voilà toute la lumière blanche !",
    apprenants: "Écoutent et recopient la conclusion.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Décris le disque de Newton et ce qu'on observe : a) à l'arrêt ; b) en rotation rapide.",
      items: [],
      corrige: [
        [{ text: "a) Un disque à secteurs " }, { text: "peints aux sept couleurs du spectre : on les distingue toutes", cle: true }, { text: "." }],
        [{ text: "b) En rotation rapide : " }, { text: "les couleurs se fondent : le disque paraît blanc grisâtre", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Pourquoi faut-il que la rotation soit rapide ?",
      items: [],
      corrige: [
        [{ text: "Pour que les impressions colorées " }, { text: "se succèdent plus vite que la persistance des impressions lumineuses", cle: true }, { text: " : l'œil les superpose alors en blanc." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Disque fabriqué en classe",
  evaluation: [
    {
      consigne: "Complète : le prisme ……… la lumière blanche ; le disque de Newton la ……… ; l'œil superpose les couleurs grâce à la ……… des impressions lumineuses ; conclusion : la lumière blanche est un ……… de toutes les couleurs.",
      items: [],
      corrige: [
        [{ text: "Il la " }, { text: "décompose", cle: true }, { text: " ; la " }, { text: "recompose", cle: true }, { text: " ; la " }, { text: "persistance", cle: true }, { text: " ; un " }, { text: "mélange", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Pourquoi le disque en rotation paraît-il blanc grisâtre et non blanc pur ?",
      items: [],
      corrige: [
        [{ text: "Les peintures " }, { text: "ne sont pas des couleurs pures", cle: true }, { text: " : elles " }, { text: "absorbent une partie de la lumière", cle: true }, { text: " : le mélange est atténué." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["recomposition", "disque de Newton", "persistance des impressions", "mélange", "blanc"],
    sections: [
      {
        titre: "1. Le disque de Newton",
        paras: [
          "C'est un disque divisé en secteurs peints aux sept couleurs du spectre. Mis en rotation rapide, il paraît blanc grisâtre : les couleurs se recomposent.",
        ],
      },
      {
        titre: "2. L'interprétation",
        paras: [
          "Les impressions colorées se succèdent trop vite pour être distinguées : grâce à la persistance des impressions lumineuses, l'œil les superpose et perçoit du blanc. Le gris vient de l'imperfection des peintures, qui absorbent une partie de la lumière.",
        ],
      },
      {
        titre: "3. La conclusion",
        paras: [
          "La lumière blanche est un mélange de toutes les couleurs du spectre : le prisme la décompose, le disque de Newton (ou un second prisme inversé) la recompose.",
        ],
      },
    ],
    saisTu: [
      "Le cinéma exploite la même persistance des impressions lumineuses que le disque de Newton : 24 images fixes par seconde suffisent pour que l'œil voie un mouvement continu ! Dessins animés, écrans et téléviseurs : toute l'image animée repose sur cette « lenteur » de notre œil.",
    ],
    experience: [
      "Fabrique ton disque de Newton :",
      "1. Découpe un disque de carton de 10 cm et divise-le en 7 secteurs égaux (environ 51° chacun).",
      "2. Colorie-les : violet, indigo, bleu, vert, jaune, orangé, rouge.",
      "3. Perce deux trous près du centre, passe une ficelle en boucle : torsade puis tire en rythme : le disque file !",
      "4. À grande vitesse, les couleurs fondent en blanc grisâtre. Variante toupie : un crayon planté au centre.",
    ],
  },
  substitutions: [
    { officiel: "Disque de Newton motorisé", local: "Disque en carton + ficelle torsadée, toupie à crayon, ou fixé sur un vieux ventilateur (avec un adulte)" },
    { officiel: "Second prisme (recomposition)", local: "On admet la contre-épreuve ; le disque suffit à conclure" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "QCM : 1. Le disque de Newton sert à : a) décomposer b) recomposer c) absorber la lumière. 2. En rotation rapide il paraît : a) noir b) multicolore c) blanc grisâtre. 3. Le phénomène de l'œil utilisé : a) persistance des impressions b) réfraction c) accommodation. 4. La lumière blanche est : a) une couleur pure b) un mélange de toutes les couleurs c) l'absence de couleur.",
      items: [],
      corrige: [
        [{ text: "1. " }, { text: "b", cle: true }, { text: " ; 2. " }, { text: "c", cle: true }, { text: " ; 3. " }, { text: "a", cle: true }, { text: " ; 4. " }, { text: "b", cle: true }, { text: ". (1 point par réponse)" }],
      ],
    },
    {
      points: 3,
      consigne: "Compare les rôles du prisme et du disque de Newton vis-à-vis de la lumière blanche.",
      items: [],
      corrige: [
        [{ text: "Le prisme " }, { text: "décompose : il sépare les couleurs", cle: true }, { text: " ; le disque " }, { text: "recompose : il les superpose en blanc", cle: true }, { text: " : les deux prouvent que le blanc est un mélange." }],
      ],
    },
    {
      points: 3,
      consigne: "Ton petit frère affirme : « Le disque devient blanc parce que les peintures se mélangent en tournant. » Corrige son erreur.",
      items: [],
      corrige: [
        [{ text: "Les peintures " }, { text: "ne bougent pas : c'est dans l'œil que le mélange se fait", cle: true }, { text: " : les impressions colorées se succèdent trop vite et " }, { text: "la persistance des impressions les superpose", cle: true }, { text: "." }],
      ],
    },
  ],
};

module.exports = { seances: [S20, S21, S22, S23, S24, S25] };
