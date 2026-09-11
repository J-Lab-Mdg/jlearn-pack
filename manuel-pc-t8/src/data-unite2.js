// data-unite2.js — T8 Unité II : ÉLECTRICITÉ ET MAGNÉTISME (séances 12 à 17)
const DOC = "Programme d'études T8 — Sciences Physiques (MEN Madagascar) ; manuel J-Learn";

const S12 = {
  numero: 12, total: 34, unite: "II", theme: "Électricité et magnétisme",
  titre: "Le courant alternatif et l'alternateur",
  objectif: "expliquer le rôle de l'aimant et de la bobine dans la production d'un courant alternatif",
  documentation: DOC,
  support: "Dynamo de vélo, aimant, bobine de fil, DEL montées tête-bêche, fils, résistance de protection",
  image: "images/img_seance12.png",
  imageLegende: "Figure 10 — La dynamo du vélo : un aimant qui tourne devant une bobine produit du courant alternatif",
  revision: {
    qa: [
      { q: "Qu'est-ce qu'une bobine, vue en T7 ?", ra: "Un enroulement de fil conducteur qui se comporte comme un aimant quand un courant la traverse." },
      { q: "Quels sont les deux pôles d'un aimant ?", ra: "Le pôle Nord et le pôle Sud." },
      { q: "Quelles sources de courant continu connais-tu ?", ra: "Les piles et les batteries." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "La nuit tombe sur la route d'Ambositra. Le vélo de Fetra n'a ni pile ni batterie, pourtant son phare s'allume dès qu'il pédale : une petite molette frotte contre le pneu. Plus il pédale vite, plus la lampe brille !",
      "D'où vient ce courant électrique fabriqué en pédalant ?",
      "R.A. : La dynamo contient un aimant qui tourne devant une bobine : ce mouvement crée un courant.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Dynamo de vélo",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Le courant alternatif et l'alternateur ». Après cette séance, vous serez capables d'expliquer comment un aimant et une bobine produisent un courant alternatif.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : je branche deux DEL tête-bêche (une rouge, une verte, en sens opposés) aux bornes d'une bobine, avec une résistance de protection. J'approche vivement l'aimant de la bobine : une DEL clignote. Je le retire : c'est l'autre qui s'allume ! Si je fais tourner l'aimant régulièrement devant la bobine, les deux DEL clignotent à tour de rôle.",
    apprenants: "Observent, puis un groupe reproduit le geste.",
    technique: "Expérimentation, démarche d'investigation", support: "Aimant, bobine, DEL tête-bêche",
  },
  analyse: {
    qa: [
      { q: "Que se passe-t-il quand l'aimant bouge devant la bobine ?", ra: "Un courant apparaît dans la bobine : c'est le courant induit." },
      { q: "Et quand l'aimant est immobile ?", ra: "Aucun courant : il faut un mouvement." },
      { q: "Pourquoi les deux DEL s'allument-elles à tour de rôle ?", ra: "Le courant change de sens à chaque aller-retour de l'aimant : il est alternatif." },
      { q: "Qu'est-ce qu'un alternateur ?", ra: "Une machine où un aimant tourne devant une bobine et produit un courant alternatif." },
      { q: "Où trouve-t-on des alternateurs ?", ra: "Dynamo de vélo, groupes électrogènes, centrales hydroélectriques comme Andekaleka." },
    ],
    technique: "Questions-réponses, expérimentation", support: "Montage, tableau noir",
  },
  synthese: {
    enseignant: "Donc, quand un aimant se déplace devant une bobine (ou une bobine devant un aimant), un courant induit apparaît dans la bobine : c'est le phénomène d'induction. Si l'aimant tourne régulièrement, le courant change de sens à chaque demi-tour : c'est un courant alternatif. L'alternateur est la machine qui réalise cela : un aimant tournant (le rotor) devant des bobines fixes (le stator). C'est le cœur de la dynamo de vélo, du groupe électrogène et des centrales : à Andekaleka, c'est l'eau de la rivière qui fait tourner les turbines et leurs alternateurs géants pour éclairer Antananarivo !",
    apprenants: "Écoutent et recopient.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Réponds :",
      items: [
        "a) Que faut-il pour produire un courant induit dans une bobine ?",
        "b) Pourquoi le courant produit par un alternateur est-il alternatif ?",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Un aimant en mouvement près de la bobine", cle: true }, { text: " (ou la bobine en mouvement près de l'aimant)." }],
        [{ text: "b) L'aimant tourne : " }, { text: "le courant change de sens à chaque demi-tour", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Dans une centrale hydroélectrique, indique dans l'ordre ce qui fait quoi : eau, turbine, alternateur.",
      items: [],
      corrige: [
        [{ text: "" }, { text: "L'eau fait tourner la turbine", cle: true }, { text: ", qui " }, { text: "entraîne l'alternateur", cle: true }, { text: ", lequel " }, { text: "produit le courant alternatif", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Vrai ou Faux ? Corrige si nécessaire :",
      items: [
        "a) Un aimant immobile devant une bobine produit un courant.",
        "b) L'alternateur produit un courant alternatif.",
        "c) La dynamo de vélo contient un alternateur.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Faux", cle: true }, { text: " : il faut un mouvement de l'aimant (ou de la bobine)." }],
        [{ text: "b) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: " : un petit aimant y tourne devant une bobine." }],
      ],
    },
    {
      consigne: "Explique pourquoi le phare du vélo brille plus fort quand on pédale plus vite.",
      items: [],
      corrige: [
        [{ text: "L'aimant tourne " }, { text: "plus vite devant la bobine", cle: true }, { text: " : le courant induit est " }, { text: "plus intense", cle: true }, { text: " et la lampe brille davantage." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["courant induit", "induction", "alternateur", "rotor", "stator", "courant alternatif"],
    sections: [
      {
        titre: "1. Le courant induit",
        paras: [
          "Quand un aimant se déplace devant une bobine, un courant apparaît dans la bobine sans aucune pile : c'est le courant induit. Il cesse dès que le mouvement s'arrête, et change de sens quand le mouvement s'inverse.",
        ],
      },
      {
        titre: "2. L'alternateur",
        paras: [
          "Un alternateur est une machine formée d'un aimant tournant (rotor) et de bobines fixes (stator). La rotation régulière de l'aimant produit un courant qui change de sens à chaque demi-tour : un courant alternatif.",
        ],
      },
      {
        titre: "3. Des alternateurs partout",
        paras: [],
        puces: [
          "la dynamo de vélo (quelques watts) ;",
          "le groupe électrogène (quelques kilowatts) ;",
          "les alternateurs des centrales hydroélectriques d'Andekaleka ou de Mandraka (des mégawatts !).",
        ],
      },
    ],
    saisTu: [
      "C'est Michael Faraday qui découvrit l'induction en 1831 avec un simple aimant et une bobine. On raconte qu'un ministre lui demanda : « À quoi cela sert-il ? » Faraday répondit : « À quoi sert un nouveau-né ? » Aujourd'hui, plus de 95 % de l'électricité mondiale naît d'alternateurs, les « bébés » de Faraday !",
    ],
    experience: [
      "Ta mini-centrale à main :",
      "1. Enroule 50 à 100 tours de fil de cuivre verni autour d'un tube de carton (bobine).",
      "2. Relie les deux bouts dénudés à une DEL (ou deux DEL tête-bêche).",
      "3. Fais entrer et sortir rapidement un aimant puissant dans le tube, dans la pénombre : la DEL clignote !",
      "4. Varie la vitesse : que remarques-tu ?",
    ],
  },
  substitutions: [
    { officiel: "Alternateur didactique de laboratoire", local: "Dynamo de vélo récupérée chez le réparateur de bicyclettes" },
    { officiel: "Bobine calibrée", local: "Fil de cuivre verni récupéré (vieux transformateur, moteur grillé) enroulé sur un tube de carton" },
    { officiel: "Oscilloscope", local: "Deux DEL tête-bêche : leur clignotement alterné montre le changement de sens du courant" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "QCM : choisis la bonne réponse.",
      items: [
        "1. Le courant induit apparaît quand : a) l'aimant est posé sur la bobine  b) l'aimant bouge près de la bobine  c) la bobine est chauffée",
        "2. Dans un alternateur, la partie qui tourne s'appelle : a) le stator  b) le rotor  c) la turbine",
        "3. Le courant produit par un alternateur est : a) continu  b) alternatif  c) nul",
        "4. À Andekaleka, ce qui fait tourner l'alternateur est : a) le vent  b) l'eau  c) le charbon",
      ],
      corrige: [
        [{ text: "1. " }, { text: "b", cle: true }, { text: " ; 2. " }, { text: "b", cle: true }, { text: " ; 3. " }, { text: "b", cle: true }, { text: " ; 4. " }, { text: "b", cle: true }, { text: ". (1 point par réponse)" }],
      ],
    },
    {
      points: 3,
      consigne: "Décris deux façons différentes de produire un courant induit avec un aimant et une bobine.",
      items: [],
      corrige: [
        [{ text: "1) " }, { text: "Déplacer l'aimant devant la bobine immobile", cle: true }, { text: " ; 2) " }, { text: "déplacer la bobine devant l'aimant immobile", cle: true }, { text: " : seul le mouvement relatif compte." }],
      ],
    },
    {
      points: 3,
      consigne: "Pourquoi branche-t-on deux DEL tête-bêche pour étudier le courant d'un alternateur ?",
      items: [],
      corrige: [
        [{ text: "Chaque DEL ne s'allume que dans un sens : leur clignotement alterné prouve que " }, { text: "le courant change régulièrement de sens", cle: true }, { text: " — il est " }, { text: "alternatif", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S13 = {
  numero: 13, total: 34, unite: "II", theme: "Électricité et magnétisme",
  titre: "Tension maximale, tension efficace, période et fréquence",
  objectif: "déterminer la tension maximale, la tension efficace, la période et la fréquence d'un courant alternatif",
  documentation: DOC,
  support: "Graphe de la tension en fonction du temps (affiche), multimètre, règle, tableau noir quadrillé",
  image: "images/img_seance13.png",
  imageLegende: "Figure 11 — La courbe de la tension alternative : Umax, période T et fréquence f = 1 ÷ T",
  revision: {
    qa: [
      { q: "Qu'est-ce qu'un courant alternatif ?", ra: "Un courant qui change régulièrement de sens." },
      { q: "Quelle machine produit un courant alternatif ?", ra: "L'alternateur." },
      { q: "En quelle unité mesure-t-on une tension ? une durée ?", ra: "En volts (V) ; en secondes (s)." },
    ],
    technique: "Questions-réponses orales", support: "Ardoise",
  },
  miseEnSituation: {
    enseignant: [
      "Sur la plaque du chargeur de téléphone, Lova lit : « 220 V ~ 50 Hz ». Elle s'interroge : la tension du secteur change tout le temps de valeur et de sens… alors que signifie ce « 220 V » ? Et ce mystérieux « 50 Hz » ?",
      "Comment décrire par des nombres une tension qui change sans cesse ?",
      "R.A. : Par sa tension efficace (220 V), sa période et sa fréquence (50 Hz).",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Plaque d'un chargeur",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Tension maximale, tension efficace, période et fréquence ». Après cette séance, vous serez capables de lire ces quatre grandeurs sur la courbe d'une tension alternative.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien cette courbe de la tension du secteur en fonction du temps : elle monte, atteint un sommet, redescend, passe sous zéro, remonte… toujours le même motif qui se répète. Mesurons ensemble : la hauteur du sommet, et la durée entre deux sommets consécutifs.",
    apprenants: "Observent la courbe, relèvent les valeurs sur le quadrillage.",
    technique: "Démarche d'observation, lecture graphique", support: "Graphe affiché",
  },
  analyse: {
    qa: [
      { q: "Comment appelle-t-on la valeur du sommet de la courbe ?", ra: "La tension maximale Umax." },
      { q: "Qu'est-ce que la période T ?", ra: "La durée d'un motif complet : par exemple entre deux sommets consécutifs. Elle se mesure en secondes." },
      { q: "Qu'est-ce que la fréquence f ?", ra: "Le nombre de périodes par seconde : f = 1 ÷ T, en hertz (Hz)." },
      { q: "Que vaut la fréquence du secteur si T = 0,02 s ?", ra: "f = 1 ÷ 0,02 = 50 Hz." },
      { q: "Qu'est-ce que la tension efficace Ueff ?", ra: "La tension mesurée par le voltmètre : celle d'une tension continue qui chaufferait autant. Ueff ≈ Umax ÷ 1,41." },
    ],
    technique: "Questions-réponses, lecture graphique", support: "Graphe, tableau noir",
  },
  synthese: {
    enseignant: "Donc, quatre grandeurs décrivent une tension alternative. La tension maximale Umax : la valeur du sommet de la courbe. La période T : la durée d'un motif complet, en secondes. La fréquence f : le nombre de motifs par seconde, f = 1 ÷ T, en hertz. La tension efficace Ueff : celle qu'indique un voltmètre, Ueff ≈ Umax ÷ 1,41. Pour le secteur de la JIRAMA : Ueff = 220 V, f = 50 Hz, donc T = 0,02 s et Umax ≈ 220 × 1,41 ≈ 310 V ! Attention : seul l'enseignant manipule le courant du secteur.",
    apprenants: "Écoutent et recopient les formules.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Sur une courbe, on lit : Umax = 8 V et T = 0,04 s.",
      items: [
        "a) Calcule la fréquence f.",
        "b) Calcule la tension efficace Ueff.",
      ],
      corrige: [
        [{ text: "a) f = 1 ÷ T = 1 ÷ 0,04 = " }, { text: "25 Hz", cle: true }, { text: "." }],
        [{ text: "b) Ueff = 8 ÷ 1,41 ≈ " }, { text: "5,7 V", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "La fréquence d'un courant est de 100 Hz. Quelle est sa période ?",
      items: [],
      corrige: [
        [{ text: "T = 1 ÷ f = 1 ÷ 100 = " }, { text: "0,01 s", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, calcul posé",
  evaluation: [
    {
      consigne: "Complète : la durée d'un motif complet est la ……… (en ………) ; le nombre de motifs par seconde est la ……… (en ………).",
      items: [],
      corrige: [
        [{ text: "La " }, { text: "période T", cle: true }, { text: " (en " }, { text: "secondes", cle: true }, { text: ") ; la " }, { text: "fréquence f", cle: true }, { text: " (en " }, { text: "hertz", cle: true }, { text: ")." }],
      ],
    },
    {
      consigne: "Le secteur de la JIRAMA a une fréquence de 50 Hz et une tension efficace de 220 V. Calcule sa période et sa tension maximale.",
      items: [],
      corrige: [
        [{ text: "T = 1 ÷ 50 = " }, { text: "0,02 s", cle: true }, { text: " ; Umax ≈ 220 × 1,41 ≈ " }, { text: "310 V", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["tension maximale", "tension efficace", "période", "fréquence", "hertz"],
    sections: [
      {
        titre: "1. La courbe de la tension alternative",
        paras: [
          "La tension alternative varie sans cesse : sa courbe en fonction du temps est une ondulation régulière qui répète toujours le même motif.",
        ],
      },
      {
        titre: "2. Les quatre grandeurs",
        paras: [],
        puces: [
          "Tension maximale Umax : la valeur du sommet (en V) ;",
          "Période T : la durée d'un motif complet (en s) ;",
          "Fréquence f = 1 ÷ T : le nombre de motifs par seconde (en hertz, Hz) ;",
          "Tension efficace Ueff ≈ Umax ÷ 1,41 : la valeur indiquée par le voltmètre.",
        ],
      },
      {
        titre: "3. Le courant du secteur",
        paras: [
          "À Madagascar, le courant distribué par la JIRAMA a pour caractéristiques : Ueff = 220 V ; f = 50 Hz ; donc T = 0,02 s et Umax ≈ 310 V. Le courant du secteur est dangereux : seul l'enseignant le manipule.",
        ],
      },
    ],
    saisTu: [
      "50 hertz signifie que le courant du secteur change de sens 100 fois par seconde (deux fois par période) ! C'est bien trop rapide pour l'œil : les lampes semblent briller en continu. En Amérique, la fréquence est de 60 Hz : les appareils voyagent moins facilement que les hommes.",
    ],
    experience: [
      "La période à l'oreille :",
      "1. Attache un petit poids à une ficelle de 25 cm : tu obtiens un pendule.",
      "2. Lance-le et compte le nombre d'allers-retours en 10 secondes (environ 10).",
      "3. Calcule sa période T = 10 s ÷ nombre d'oscillations ≈ 1 s, puis sa fréquence f = 1 ÷ T ≈ 1 Hz.",
      "4. Raccourcis la ficelle : la fréquence augmente ! Le secteur, lui, « oscille » 50 fois par seconde.",
    ],
  },
  substitutions: [
    { officiel: "Oscilloscope", local: "Grande courbe tracée à l'avance sur papier kraft quadrillé, à mesurer à la règle" },
    { officiel: "Générateur basse fréquence", local: "Pendule à ficelle pour concrétiser période et fréquence" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Sur une courbe : Umax = 6 V, T = 0,05 s. Calcule : a) la fréquence ; b) la tension efficace. Puis : c) T si f = 25 Hz ; d) Umax si Ueff = 110 V.",
      items: [],
      corrige: [
        [{ text: "a) f = 1 ÷ 0,05 = " }, { text: "20 Hz", cle: true }, { text: " ; b) Ueff = 6 ÷ 1,41 ≈ " }, { text: "4,3 V", cle: true }, { text: " ; c) T = 1 ÷ 25 = " }, { text: "0,04 s", cle: true }, { text: " ; d) Umax ≈ 110 × 1,41 ≈ " }, { text: "155 V", cle: true }, { text: ". (1 point chacun)" }],
      ],
    },
    {
      points: 3,
      consigne: "Un voltmètre branché sur une prise indique 220 V. Cette valeur est-elle la tension maximale ? Explique.",
      items: [],
      corrige: [
        [{ text: "Non : le voltmètre indique la " }, { text: "tension efficace", cle: true }, { text: " ; la tension maximale vaut environ " }, { text: "310 V", cle: true }, { text: " (220 × 1,41)." }],
      ],
    },
    {
      points: 3,
      consigne: "Classe du plus rapide au plus lent : courant A (T = 0,01 s), courant B (f = 25 Hz), courant C (T = 0,02 s).",
      items: [],
      corrige: [
        [{ text: "f(A) = 100 Hz ; f(C) = 50 Hz ; f(B) = 25 Hz → " }, { text: "A puis C puis B", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S14 = {
  numero: 14, total: 34, unite: "II", theme: "Électricité et magnétisme",
  titre: "Le transformateur",
  objectif: "expliquer le rôle d'un transformateur et de distinguer transformateur élévateur et abaisseur",
  documentation: DOC,
  support: "Transformateur ou chargeur démonté (démonstration), schéma du transformateur, documents",
  image: "images/img_seance14.png",
  imageLegende: "Figure 12 — Le transformateur : deux bobines sur un noyau de fer pour élever ou abaisser la tension alternative",
  revision: {
    qa: [
      { q: "Quelles sont les caractéristiques du courant du secteur ?", ra: "220 V (tension efficace), 50 Hz." },
      { q: "Qu'est-ce qu'une bobine ?", ra: "Un enroulement de fil conducteur." },
      { q: "Quel phénomène produit un courant dans une bobine sans pile ?", ra: "L'induction : un champ magnétique variable près de la bobine." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "La radio de la grand-mère de Tojo fonctionne en 12 V, mais la prise du mur fournit du 220 V ! Entre les deux, une petite boîte noire chauffe doucement : sans elle, la radio grillerait instantanément.",
      "Comment cette boîte transforme-t-elle 220 V en 12 V ?",
      "R.A. : C'est un transformateur : deux bobines sur un noyau de fer qui abaissent la tension alternative.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Chargeur, radio",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Le transformateur ». Après cette séance, vous serez capables d'expliquer son rôle et de distinguer transformateur élévateur et abaisseur.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien ce transformateur démonté : un cadre en fer feuilleté, et deux bobines de fil verni qui ne se touchent pas : la bobine d'entrée (primaire) aux fils fins et nombreux tours, la bobine de sortie (secondaire) aux fils plus gros et moins de tours. Aucun fil ne relie directement l'entrée à la sortie !",
    apprenants: "Observent les deux bobines et le noyau, comptent approximativement les spires.",
    technique: "Démarche d'observation, analyse technologique", support: "Transformateur démonté",
  },
  analyse: {
    qa: [
      { q: "De quoi est fait un transformateur ?", ra: "De deux bobines (primaire et secondaire) enroulées sur un même noyau de fer." },
      { q: "Comment l'énergie passe-t-elle du primaire au secondaire sans fil commun ?", ra: "Par induction : le courant alternatif du primaire crée un champ magnétique variable dans le noyau, qui induit une tension dans le secondaire." },
      { q: "De quoi dépend la tension de sortie ?", ra: "Du rapport du nombre de spires : moins de spires au secondaire → tension abaissée ; plus de spires → tension élevée." },
      { q: "Le transformateur fonctionne-t-il en courant continu ?", ra: "Non : sans variation du champ magnétique, aucune induction." },
      { q: "Quels sont les deux types de transformateurs ?", ra: "L'abaisseur (chargeurs, radios) et l'élévateur (départ des centrales)." },
    ],
    technique: "Questions-réponses, analyse technologique", support: "Transformateur, schéma",
  },
  synthese: {
    enseignant: "Donc, un transformateur est constitué de deux bobines enroulées sur un noyau de fer : le primaire reçoit la tension d'entrée, le secondaire délivre la tension de sortie, transmise par induction à travers le noyau. Si le secondaire a moins de spires que le primaire, la tension est abaissée (transformateur abaisseur : chargeurs, adaptateurs) ; s'il en a plus, elle est élevée (transformateur élévateur : sortie des centrales). Retenez bien : le transformateur ne fonctionne qu'en courant alternatif : c'est l'un des grands avantages de l'alternatif sur le continu !",
    apprenants: "Écoutent et recopient.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Réponds :",
      items: [
        "a) Cite les trois parties principales d'un transformateur.",
        "b) Un transformateur a 1 000 spires au primaire et 100 au secondaire : est-il élévateur ou abaisseur ?",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Bobine primaire, bobine secondaire, noyau de fer", cle: true }, { text: "." }],
        [{ text: "b) Moins de spires au secondaire : " }, { text: "abaisseur", cle: true }, { text: " (la tension est divisée par 10 : 220 V → 22 V)." }],
      ],
    },
    {
      consigne: "Pourquoi un transformateur ne peut-il pas fonctionner avec une pile ?",
      items: [],
      corrige: [
        [{ text: "La pile fournit un courant " }, { text: "continu : le champ magnétique ne varie pas", cle: true }, { text: ", donc " }, { text: "aucune tension induite", cle: true }, { text: " au secondaire." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète : la bobine d'entrée s'appelle le ……… ; la bobine de sortie s'appelle le ……… ; l'énergie passe de l'une à l'autre grâce au ……… de fer, par le phénomène d'……… .",
      items: [],
      corrige: [
        [{ text: "Le " }, { text: "primaire", cle: true }, { text: " ; le " }, { text: "secondaire", cle: true }, { text: " ; le " }, { text: "noyau", cle: true }, { text: " de fer ; par " }, { text: "induction", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Le chargeur d'un téléphone transforme le 220 V du secteur en 5 V. Quel type de transformateur contient-il ? Compare ses deux bobines.",
      items: [],
      corrige: [
        [{ text: "Un transformateur " }, { text: "abaisseur", cle: true }, { text: " : son secondaire a " }, { text: "beaucoup moins de spires", cle: true }, { text: " que son primaire." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["transformateur", "primaire", "secondaire", "noyau de fer", "élévateur", "abaisseur"],
    sections: [
      {
        titre: "1. La constitution du transformateur",
        paras: [
          "Un transformateur comprend deux bobines électriquement séparées, enroulées sur un même noyau de fer : le primaire (entrée) et le secondaire (sortie).",
        ],
      },
      {
        titre: "2. Le principe",
        paras: [
          "Le courant alternatif du primaire crée dans le noyau un champ magnétique variable ; ce champ variable induit une tension alternative dans le secondaire. Sans variation — donc en courant continu — le transformateur ne fonctionne pas.",
        ],
      },
      {
        titre: "3. Élever ou abaisser",
        paras: [
          "La tension de sortie dépend du rapport des nombres de spires :",
        ],
        puces: [
          "secondaire avec MOINS de spires → transformateur abaisseur (chargeurs, adaptateurs : 220 V → 12 V, 5 V…) ;",
          "secondaire avec PLUS de spires → transformateur élévateur (sortie des centrales : vers les hautes tensions).",
        ],
      },
    ],
    saisTu: [
      "La « guerre des courants » opposa Edison (continu) à Tesla et Westinghouse (alternatif) vers 1890. L'alternatif gagna grâce au transformateur : lui seul permettait d'élever la tension pour transporter l'électricité au loin, puis de l'abaisser pour la maison. Tout le réseau de la JIRAMA repose encore sur ce principe !",
    ],
    experience: [
      "Chasse aux transformateurs :",
      "1. Fais l'inventaire des « boîtes noires » de la maison : chargeurs de téléphone, adaptateur de radio, lampe de bureau…",
      "2. Lis leurs plaques : tension d'entrée (220 V ~) et de sortie (5 V, 9 V, 12 V…).",
      "3. Conclus : tous ces transformateurs sont-ils élévateurs ou abaisseurs ? Pourquoi chauffent-ils un peu ?",
    ],
  },
  substitutions: [
    { officiel: "Transformateur didactique démontable", local: "Vieux chargeur ou adaptateur démonté À L'AVANCE par l'enseignant (jamais branché une fois ouvert)" },
    { officiel: "Maquette de noyau feuilleté", local: "Lames de fer blanc découpées dans une boîte de conserve, empilées et collées" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Vrai ou Faux ? a) Le transformateur fonctionne en courant continu. b) Le primaire et le secondaire sont reliés par un fil. c) Un abaisseur a moins de spires au secondaire. d) Le noyau est en fer.",
      items: [],
      corrige: [
        [{ text: "a) " }, { text: "Faux", cle: true }, { text: " (alternatif seulement) ; b) " }, { text: "Faux", cle: true }, { text: " (transmission par induction via le noyau) ; c) " }, { text: "Vrai", cle: true }, { text: " ; d) " }, { text: "Vrai", cle: true }, { text: ". (1 point chacun)" }],
      ],
    },
    {
      points: 3,
      consigne: "Un transformateur reçoit 220 V et délivre 22 V. Son primaire compte 2 000 spires. Combien de spires (environ) compte son secondaire ?",
      items: [],
      corrige: [
        [{ text: "La tension est divisée par 10 → le secondaire a environ " }, { text: "200 spires", cle: true }, { text: " (2 000 ÷ 10)." }],
      ],
    },
    {
      points: 3,
      consigne: "Explique le rôle du noyau de fer dans un transformateur.",
      items: [],
      corrige: [
        [{ text: "Il " }, { text: "canalise le champ magnétique", cle: true }, { text: " du primaire vers le secondaire : presque toute l'énergie magnétique traverse le noyau, ce qui rend " }, { text: "l'induction efficace", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S15 = {
  numero: 15, total: 34, unite: "II", theme: "Électricité et magnétisme",
  titre: "Production et transport du courant : sécurité électrique",
  objectif: "expliquer le principe de production et de transport du courant alternatif et les mesures de sécurité associées",
  documentation: DOC,
  support: "Schéma du réseau électrique (centrale → pylônes → transformateurs → maisons), documents sur les risques électriques, maquette",
  image: "images/img_seance15.png",
  imageLegende: "Figure 13 — De la centrale à la maison : transport sous haute tension puis abaissement près des habitations",
  revision: {
    qa: [
      { q: "Quel appareil élève ou abaisse une tension alternative ?", ra: "Le transformateur." },
      { q: "Où le courant de la JIRAMA est-il produit ?", ra: "Dans des centrales : hydroélectriques (Andekaleka, Mandraka), thermiques, solaires." },
      { q: "Quelle est la tension du secteur domestique ?", ra: "220 V efficaces, 50 Hz." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Sur la route de Toamasina, Hery compte les immenses pylônes qui enjambent les collines depuis Andekaleka. Son père lui dit : « Ces câbles transportent plus de 100 000 volts ! » Pourtant, à la maison, la prise ne délivre « que » 220 V.",
      "Pourquoi transporter le courant sous une tension si dangereuse, puis l'abaisser ?",
      "R.A. : La haute tension réduit les pertes d'énergie dans les câbles ; on abaisse ensuite pour distribuer sans danger.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Schéma du réseau",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Production et transport du courant : sécurité électrique ». Après cette séance, vous serez capables d'expliquer le trajet du courant de la centrale à la maison et les règles de sécurité.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien le schéma du réseau : 1) la centrale et son alternateur ; 2) un transformateur élévateur monte la tension à 63 000 V ou plus ; 3) les lignes à haute tension sur pylônes traversent le pays ; 4) près des villes, des postes de transformation abaissent la tension ; 5) le transformateur sur poteau, près de chez vous, livre le 220 V. Observez aussi ces pictogrammes : éclair jaune, « Danger de mort ».",
    apprenants: "Suivent le trajet sur le schéma, identifient les pictogrammes.",
    technique: "Étude documentaire", support: "Schéma, pictogrammes",
  },
  analyse: {
    qa: [
      { q: "Pourquoi élever la tension pour le transport ?", ra: "À puissance égale, une tension plus haute signifie un courant plus faible : les câbles chauffent moins, les pertes par effet Joule diminuent." },
      { q: "Quelles sont les étapes du réseau ?", ra: "Centrale → transformateur élévateur → lignes haute tension → postes abaisseurs → transformateur de quartier → maisons en 220 V." },
      { q: "Quels sont les dangers du courant pour le corps humain ?", ra: "Brûlures, contraction des muscles, arrêt du cœur : dès 50 V, le courant peut être mortel." },
      { q: "Cite des règles de sécurité à la maison.", ra: "Ne jamais toucher une prise avec les mains mouillées, ne pas surcharger les prises, débrancher avant de réparer, faire réparer les fils dénudés." },
      { q: "Et près des lignes ?", ra: "Ne jamais grimper aux pylônes, ne pas pêcher ou jouer au cerf-volant sous les lignes, s'éloigner d'un câble tombé à terre." },
    ],
    technique: "Questions-réponses, étude documentaire", support: "Documents, schéma",
  },
  synthese: {
    enseignant: "Donc, le courant fait un long voyage : produit par l'alternateur de la centrale, il est élevé en haute tension par un transformateur élévateur, transporté par les lignes sur pylônes (moins de pertes par effet Joule), puis abaissé par étapes jusqu'au 220 V de nos prises. La haute tension est mortelle : jamais d'approche des pylônes, transformateurs ou câbles tombés. À la maison, le 220 V reste dangereux : mains sèches, appareils en bon état, prises non surchargées, et on coupe le courant avant toute intervention. L'électricité est une servante précieuse mais exigeante : respect des règles, toujours !",
    apprenants: "Écoutent et recopient les règles de sécurité.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Remets dans l'ordre les étapes du réseau : a) transformateur abaisseur de quartier ; b) alternateur de la centrale ; c) lignes à haute tension ; d) transformateur élévateur ; e) prise de la maison.",
      items: [],
      corrige: [
        [{ text: "Ordre : " }, { text: "b → d → c → a → e", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Cite deux comportements dangereux et la règle de sécurité correspondante.",
      items: [],
      corrige: [
        [{ text: "Exemples : toucher une prise les mains mouillées → " }, { text: "toujours les mains sèches", cle: true }, { text: " ; jouer au cerf-volant sous une ligne → " }, { text: "s'éloigner des lignes électriques", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail de groupe", applicationSupport: "Schéma, affiche",
  evaluation: [
    {
      consigne: "Complète : on transporte le courant sous ……… tension pour réduire les ……… par effet ……… dans les câbles ; près des maisons, des transformateurs ……… ramènent la tension à ……… V.",
      items: [],
      corrige: [
        [{ text: "Sous " }, { text: "haute", cle: true }, { text: " tension pour réduire les " }, { text: "pertes", cle: true }, { text: " par effet " }, { text: "Joule", cle: true }, { text: " ; des transformateurs " }, { text: "abaisseurs", cle: true }, { text: " ramènent la tension à " }, { text: "220", cle: true }, { text: " V." }],
      ],
    },
    {
      consigne: "Après un cyclone, un câble électrique pend jusqu'au sol dans ta rue. Que fais-tu ? Que ne fais-tu surtout pas ?",
      items: [],
      corrige: [
        [{ text: "Je " }, { text: "reste loin, j'alerte les adultes et la JIRAMA", cle: true }, { text: " ; je ne " }, { text: "touche jamais le câble", cle: true }, { text: ", même avec un bâton, et je n'approche pas : le sol lui-même peut être dangereux." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["centrale", "haute tension", "pylône", "poste de transformation", "effet Joule", "sécurité électrique"],
    sections: [
      {
        titre: "1. De la centrale à la maison",
        paras: [
          "Le courant alternatif est produit par les alternateurs des centrales (hydroélectriques comme Andekaleka, thermiques, solaires). Un transformateur élévateur monte la tension (63 000 V et plus), les lignes sur pylônes transportent l'énergie, puis des postes de transformation l'abaissent par étapes jusqu'au 220 V domestique.",
        ],
      },
      {
        titre: "2. Pourquoi la haute tension ?",
        paras: [
          "Dans un câble, le courant produit de la chaleur (effet Joule) : de l'énergie perdue. En élevant la tension, on réduit l'intensité nécessaire, donc les pertes. C'est tout l'intérêt du transport sous haute tension.",
        ],
      },
      {
        titre: "3. Les risques électriques",
        paras: [
          "Le courant qui traverse le corps provoque brûlures, contractions musculaires, voire arrêt du cœur. Le danger augmente avec la tension et avec l'humidité de la peau.",
        ],
      },
      {
        titre: "4. Les règles d'or de la sécurité",
        paras: [],
        puces: [
          "mains sèches, pieds au sec pour tout geste électrique ;",
          "ne jamais introduire d'objet dans une prise ;",
          "débrancher (ou couper le disjoncteur) avant de réparer ;",
          "ne pas surcharger les multiprises ;",
          "rester loin des pylônes, transformateurs et câbles tombés à terre.",
        ],
      },
    ],
    saisTu: [
      "La ligne d'Andekaleka à Antananarivo transporte l'électricité sous 138 000 volts, soit plus de 600 fois la tension de tes prises ! Sans cette haute tension, une grande partie de l'énergie de la rivière Vohitra se perdrait en chaleur dans les 140 kilomètres de câbles.",
    ],
    experience: [
      "La maquette du réseau (sans électricité !) :",
      "1. Sur un grand carton, dessine et découpe : la centrale, deux transformateurs, des pylônes en allumettes, une maison.",
      "2. Relie-les avec de la ficelle : ficelle épaisse pour la haute tension, fine pour le 220 V.",
      "3. Colle des étiquettes de tension à chaque étape et présente ta maquette à la classe.",
    ],
  },
  substitutions: [
    { officiel: "Maquette de réseau électrique du commerce", local: "Maquette en carton, allumettes et ficelle fabriquée par les groupes" },
    { officiel: "Film documentaire sur les centrales", local: "Schéma mural + récit d'une visite ou témoignage d'un agent JIRAMA local" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "QCM : 1. On transporte le courant sous haute tension pour : a) aller plus vite b) réduire les pertes c) faire joli. 2. L'effet Joule est : a) un échauffement b) un éclair c) un aimant. 3. Près d'un câble à terre : a) je le pousse du pied b) je reste loin et j'alerte c) je le ramasse. 4. Le 220 V domestique : a) est sans danger b) peut tuer c) ne traverse pas le corps.",
      items: [],
      corrige: [
        [{ text: "1. " }, { text: "b", cle: true }, { text: " ; 2. " }, { text: "a", cle: true }, { text: " ; 3. " }, { text: "b", cle: true }, { text: " ; 4. " }, { text: "b", cle: true }, { text: ". (1 point par réponse)" }],
      ],
    },
    {
      points: 3,
      consigne: "Trace le schéma simplifié du réseau : centrale → maison, en plaçant les deux types de transformateurs.",
      items: [],
      corrige: [
        [{ text: "Centrale → " }, { text: "transformateur ÉLÉVATEUR", cle: true }, { text: " → lignes haute tension → " }, { text: "transformateur ABAISSEUR", cle: true }, { text: " (postes puis quartier) → maison (220 V)." }],
      ],
    },
    {
      points: 3,
      consigne: "Ton petit frère veut brancher quatre appareils sur la même multiprise déjà chaude. Explique-lui le danger.",
      items: [],
      corrige: [
        [{ text: "La multiprise surchargée laisse passer un courant trop fort : elle " }, { text: "chauffe (effet Joule)", cle: true }, { text: " et peut " }, { text: "fondre ou provoquer un incendie", cle: true }, { text: " ; il faut répartir les appareils ou en débrancher." }],
      ],
    },
  ],
};

const S16 = {
  numero: 16, total: 34, unite: "II", theme: "Électricité et magnétisme",
  titre: "La diode et le circuit d'alimentation",
  objectif: "interpréter le rôle de la diode dans le redressement du courant alternatif et de décrire un circuit d'alimentation",
  documentation: DOC,
  support: "Diodes, DEL, pile, générateur très basse fréquence (ou alternateur artisanal), résistance de protection, fils, vieux chargeur démonté",
  image: "images/img_seance16.png",
  imageLegende: "Figure 14 — La diode ne laisse passer le courant que dans un sens : c'est la clé du redressement",
  revision: {
    qa: [
      { q: "Quelle est la différence entre courant continu et alternatif ?", ra: "Le continu circule dans un seul sens ; l'alternatif change de sens régulièrement." },
      { q: "Que fait un transformateur abaisseur ?", ra: "Il abaisse une tension alternative (ex. : 220 V → 6 V)." },
      { q: "Ton téléphone se charge-t-il en courant continu ou alternatif ?", ra: "En continu : sa batterie ne peut se charger qu'avec un courant à sens unique." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Le téléphone de Mirana se charge grâce à sa batterie, qui exige du courant continu. Mais la prise fournit du 220 V alternatif ! Le petit chargeur fait donc DEUX métiers : abaisser la tension… et changer la nature du courant.",
      "Comment transformer un courant alternatif en courant continu ?",
      "R.A. : Grâce aux diodes, qui ne laissent passer le courant que dans un seul sens : c'est le redressement.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Chargeur de téléphone",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La diode et le circuit d'alimentation ». Après cette séance, vous serez capables d'expliquer le redressement et de décrire un circuit d'alimentation complet.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien. Expérience 1 : je branche une diode et une lampe sur une pile : la lampe brille. J'inverse la diode : plus rien ! La diode est une « porte à sens unique ». Expérience 2 : sur le générateur alternatif très basse fréquence, deux DEL tête-bêche clignotent alternativement. J'ajoute une diode dans le circuit : une seule DEL clignote désormais : les alternances négatives sont bloquées.",
    apprenants: "Observent, prédisent le résultat avant chaque inversion, vérifient.",
    technique: "Expérimentation, démarche d'investigation", support: "Diodes, DEL, pile, générateur",
  },
  analyse: {
    qa: [
      { q: "Que fait une diode ?", ra: "Elle laisse passer le courant dans un seul sens (sens passant) et le bloque dans l'autre." },
      { q: "Quel est son symbole ?", ra: "Un triangle pointant vers une barre : le triangle indique le sens passant." },
      { q: "Que devient un courant alternatif après une diode ?", ra: "Seules les alternances positives passent : le courant est redressé (mais saccadé)." },
      { q: "Comment obtenir un redressement complet ?", ra: "Avec un pont de 4 diodes qui retourne aussi les alternances négatives." },
      { q: "Quelles sont les étapes d'un circuit d'alimentation ?", ra: "Transformateur (abaisse), pont de diodes (redresse), condensateur (lisse) : la sortie est un courant continu." },
    ],
    technique: "Questions-réponses, expérimentation", support: "Montages, tableau noir",
  },
  synthese: {
    enseignant: "Donc, la diode est un composant à sens unique : elle conduit dans le sens passant, bloque dans l'autre. Placée dans un circuit alternatif, elle supprime les alternances négatives : c'est le redressement simple. Le pont de quatre diodes fait mieux : il retourne les alternances négatives, et le courant sort toujours dans le même sens. Un circuit d'alimentation complet — celui de tous vos chargeurs — enchaîne : transformateur abaisseur (220 V → quelques volts), pont de diodes (alternatif → redressé), condensateur (lissage) : à la sortie, un courant continu prêt pour la batterie. Trois composants, et l'alternatif du secteur devient le continu du téléphone !",
    apprenants: "Écoutent et recopient le schéma en chaîne.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Réponds :",
      items: [
        "a) Dans quel sens une diode conduit-elle le courant ?",
        "b) Que se passe-t-il si on la branche à l'envers ?",
      ],
      corrige: [
        [{ text: "a) Dans le " }, { text: "sens passant", cle: true }, { text: " (indiqué par le triangle de son symbole)." }],
        [{ text: "b) " }, { text: "Aucun courant ne passe", cle: true }, { text: " : elle bloque." }],
      ],
    },
    {
      consigne: "Remets dans l'ordre les étages d'un circuit d'alimentation : pont de diodes – transformateur – condensateur de lissage.",
      items: [],
      corrige: [
        [{ text: "" }, { text: "Transformateur → pont de diodes → condensateur", cle: true }, { text: " : abaisser, redresser, lisser." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète : la diode laisse passer le courant dans le sens ……… ; transformer l'alternatif en courant à sens unique s'appelle le ……… ; on utilise un ……… de 4 diodes.",
      items: [],
      corrige: [
        [{ text: "Le sens " }, { text: "passant", cle: true }, { text: " ; le " }, { text: "redressement", cle: true }, { text: " ; un " }, { text: "pont", cle: true }, { text: " de 4 diodes." }],
      ],
    },
    {
      consigne: "Explique pourquoi un chargeur de téléphone contient à la fois un transformateur ET des diodes.",
      items: [],
      corrige: [
        [{ text: "Le transformateur " }, { text: "abaisse le 220 V", cle: true }, { text: " à quelques volts, mais le courant reste alternatif ; les diodes le " }, { text: "redressent en courant continu", cle: true }, { text: ", seul capable de charger la batterie." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["diode", "sens passant", "redressement", "pont de diodes", "circuit d'alimentation", "adaptateur"],
    sections: [
      {
        titre: "1. La diode",
        paras: [
          "La diode est un composant qui ne laisse passer le courant que dans un sens, appelé sens passant. Son symbole est un triangle (sens passant) pointant vers une barre. La DEL (diode électroluminescente) est une diode qui s'éclaire quand elle conduit.",
        ],
      },
      {
        titre: "2. Le redressement",
        paras: [
          "Une diode placée dans un circuit alternatif bloque les alternances négatives : le courant obtenu circule toujours dans le même sens, mais par à-coups. Le pont de 4 diodes redresse aussi les alternances négatives : le courant sort continu (ondulé), puis un condensateur le lisse.",
        ],
      },
      {
        titre: "3. Le circuit d'alimentation",
        paras: [
          "Le circuit d'alimentation (ou adaptateur) de tous les chargeurs enchaîne trois étages :",
        ],
        puces: [
          "le transformateur abaisseur : 220 V alternatif → quelques volts alternatifs ;",
          "le pont de diodes : alternatif → courant redressé ;",
          "le condensateur : lissage → courant continu utilisable par la batterie.",
        ],
      },
    ],
    saisTu: [
      "Les premiers « redresseurs » de la radio, vers 1910, étaient des cristaux de galène qu'on grattait avec une pointe métallique pour trouver le « bon point » ! Aujourd'hui, une diode moderne tient dans un grain de riz, et ton chargeur en contient au moins quatre.",
    ],
    experience: [
      "La porte à sens unique :",
      "1. Récupère une DEL (guirlande usée, jouet cassé), une pile plate 4,5 V et une résistance ou une petite ampoule de protection.",
      "2. Branche DEL + résistance sur la pile : elle brille (patte longue vers le +).",
      "3. Retourne la DEL : plus de lumière : tu viens de vérifier le sens passant !",
      "4. Attention : jamais de DEL directement sur la pile sans résistance, elle grillerait.",
    ],
  },
  substitutions: [
    { officiel: "Diodes de laboratoire et générateur TBF", local: "DEL et diodes récupérées sur vieux appareils ; alternateur artisanal aimant-bobine comme source alternative" },
    { officiel: "Oscilloscope pour visualiser le redressement", local: "Deux DEL tête-bêche avant la diode, une seule allumée après : preuve visible du redressement" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Associe chaque composant à son rôle : transformateur, diode, pont de 4 diodes, condensateur — a) redresse tout le courant ; b) abaisse la tension ; c) lisse le courant ; d) bloque un sens du courant.",
      items: [],
      corrige: [
        [{ text: "Transformateur → " }, { text: "b", cle: true }, { text: " ; diode → " }, { text: "d", cle: true }, { text: " ; pont → " }, { text: "a", cle: true }, { text: " ; condensateur → " }, { text: "c", cle: true }, { text: ". (1 point par association)" }],
      ],
    },
    {
      points: 3,
      consigne: "Dessine la courbe d'une tension alternative avant, puis après une diode simple.",
      items: [],
      corrige: [
        [{ text: "Avant : " }, { text: "sinusoïde complète (alternances + et −)", cle: true }, { text: " ; après : " }, { text: "seules les bosses positives restent", cle: true }, { text: ", les creux négatifs sont remplacés par des paliers à zéro." }],
      ],
    },
    {
      points: 3,
      consigne: "Vrai ou Faux : « Une batterie de téléphone peut se charger directement sur le 220 V alternatif. » Justifie.",
      items: [],
      corrige: [
        [{ text: "" }, { text: "Faux", cle: true }, { text: " : il faut " }, { text: "abaisser la tension ET redresser le courant", cle: true }, { text: " (transformateur + pont de diodes) : c'est le rôle du chargeur." }],
      ],
    },
  ],
};

const S17 = {
  numero: 17, total: 34, unite: "II", theme: "Électricité et magnétisme",
  titre: "Courant continu et courant alternatif : le match",
  objectif: "comparer le courant électrique alternatif et le courant électrique continu",
  documentation: DOC,
  support: "Piles, batterie, lampes, DEL, schéma d'une prise secteur, tableau comparatif sur kraft",
  image: "images/img_seance17.png",
  imageLegende: "Figure 15 — Courant continu (pile) et courant alternatif (secteur) : deux courbes, deux comportements",
  revision: {
    qa: [
      { q: "Cite deux sources de courant continu.", ra: "La pile et la batterie." },
      { q: "Cite deux sources de courant alternatif.", ra: "L'alternateur (centrale, dynamo) et la prise du secteur." },
      { q: "Quel composant permet de passer de l'alternatif au continu ?", ra: "La diode (pont de diodes) : le redressement." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Dans le village de Soavina, un débat anime la place : pour électrifier l'école, faut-il des panneaux solaires avec batteries (courant continu) ou attendre la ligne de la JIRAMA (courant alternatif) ? Chacun a ses arguments !",
      "Quels sont les avantages et les inconvénients de chaque type de courant ?",
      "R.A. : Le continu se stocke (batteries) ; l'alternatif se transforme et se transporte facilement.",
    ],
    apprenants: "Écoutent et débattent brièvement.",
    technique: "Question problème, débat", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Courant continu et courant alternatif : le match ». Après cette séance, vous serez capables de comparer les deux types de courants et de dresser un tableau récapitulatif.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien. Une DEL branchée sur une pile brille en continu ; inversée, elle s'éteint : le courant a un sens fixe. Sur l'alternateur artisanal, les deux DEL tête-bêche clignotent chacune leur tour : le courant change de sens. Regardez enfin les deux courbes : une droite horizontale pour la pile, une ondulation pour le secteur.",
    apprenants: "Observent les montages et les courbes.",
    technique: "Expérimentation, comparaison", support: "Pile, DEL, alternateur artisanal, courbes",
  },
  analyse: {
    qa: [
      { q: "Quelles sont les sources de chaque courant ?", ra: "Continu : piles, batteries, panneaux solaires. Alternatif : alternateurs, prises du secteur." },
      { q: "Compare le sens du courant.", ra: "Continu : un seul sens, tension constante. Alternatif : le sens change régulièrement (100 fois par seconde à 50 Hz)." },
      { q: "Quel courant se stocke ?", ra: "Le continu, dans les batteries ; l'alternatif ne se stocke pas directement." },
      { q: "Quel courant se transporte le mieux sur longue distance ?", ra: "L'alternatif : le transformateur permet la haute tension, donc peu de pertes." },
      { q: "Lequel est le plus dangereux ?", ra: "Les deux sont dangereux ; à tension égale, l'alternatif du secteur provoque plus facilement la contraction des muscles." },
    ],
    technique: "Questions-réponses, débat, tableau comparatif", support: "Montages, kraft",
  },
  synthese: {
    enseignant: "Donc, résumons le match. Courant continu : fourni par piles, batteries et panneaux solaires ; sens unique, tension constante ; il se stocke, alimente l'électronique (téléphones, radios, lampes DEL) ; mais il se transforme mal et se transporte mal au loin. Courant alternatif : fourni par les alternateurs et le secteur ; il change de sens régulièrement ; le transformateur l'élève ou l'abaisse à volonté, d'où un transport économique sur longue distance ; mais il ne se stocke pas directement. Voilà pourquoi nos maisons reçoivent de l'alternatif… que nos chargeurs redressent en continu ! Les deux courants ne sont pas ennemis : ils sont complémentaires.",
    apprenants: "Complètent le tableau comparatif en groupe.", technique: "Exposé, travail de groupe", support: "Tableau kraft",
  },
  application: [
    {
      consigne: "Classe chaque source : pile bouton, prise de la salle, batterie de moto, dynamo, panneau solaire.",
      items: [],
      corrige: [
        [{ text: "Continu : " }, { text: "pile bouton, batterie de moto, panneau solaire", cle: true }, { text: " ; alternatif : " }, { text: "prise de la salle, dynamo", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Donne un avantage du continu et un avantage de l'alternatif.",
      items: [],
      corrige: [
        [{ text: "Continu : " }, { text: "il se stocke dans les batteries", cle: true }, { text: " ; alternatif : " }, { text: "il se transforme (transformateur) et se transporte au loin avec peu de pertes", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Vrai ou Faux ? Corrige si nécessaire :",
      items: [
        "a) Le courant d'une batterie change de sens 100 fois par seconde.",
        "b) L'alternatif se transporte mieux grâce au transformateur.",
        "c) Une batterie stocke directement du courant alternatif.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Faux", cle: true }, { text: " : la batterie fournit un courant continu, à sens unique." }],
        [{ text: "b) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Faux", cle: true }, { text: " : seul le continu se stocke ; il faut redresser l'alternatif d'abord." }],
      ],
    },
    {
      consigne: "Pour l'école de Soavina (loin du réseau), recommanderais-tu le solaire + batteries ou l'attente de la ligne JIRAMA ? Donne deux arguments.",
      items: [],
      corrige: [
        [{ text: "Réponse argumentée attendue, ex. : " }, { text: "solaire + batteries : disponible immédiatement, stockage pour le soir", cle: true }, { text: " ; ou ligne JIRAMA : " }, { text: "puissance plus grande, pas de batteries à remplacer", cle: true }, { text: ". (1 point par argument cohérent)" }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["courant continu", "courant alternatif", "stockage", "transport", "transformateur", "batterie"],
    sections: [
      {
        titre: "1. Le courant continu (CC)",
        paras: [
          "Sources : piles, batteries, panneaux solaires. Le courant circule dans un seul sens et la tension garde une valeur constante. Il se stocke dans les batteries et alimente toute l'électronique.",
        ],
      },
      {
        titre: "2. Le courant alternatif (CA)",
        paras: [
          "Sources : alternateurs (dynamos, groupes, centrales), prises du secteur (220 V, 50 Hz). Le courant change régulièrement de sens. Grâce au transformateur, il s'élève ou s'abaisse à volonté : idéal pour le transport sur longue distance.",
        ],
      },
      {
        titre: "3. Le tableau du match",
        paras: [],
        puces: [
          "Stockage : continu OUI (batteries) / alternatif NON ;",
          "Transformation de tension : continu difficile / alternatif facile (transformateur) ;",
          "Transport longue distance : continu coûteux / alternatif économique (haute tension) ;",
          "Usage : continu pour l'électronique / alternatif pour la distribution et les gros appareils ;",
          "Danger : les deux ! Respect des règles de sécurité dans tous les cas.",
        ],
      },
      {
        titre: "4. Complémentaires, pas ennemis",
        paras: [
          "Le réseau distribue de l'alternatif ; chaque chargeur le redresse en continu pour les batteries. Les deux courants travaillent ensemble au quotidien.",
        ],
      },
    ],
    saisTu: [
      "Les grandes lignes solaires du futur ? Certains pays utilisent désormais du courant continu à très haute tension (CCHT) pour les distances extrêmes, comme 3 000 km en Chine ! La « guerre des courants » n'est donc pas tout à fait finie… mais pour nos maisons, l'alternatif règne toujours.",
    ],
    experience: [
      "L'enquête des étiquettes :",
      "1. Relève les inscriptions de cinq appareils : lampe torche, téléphone + chargeur, radio, fer à repasser…",
      "2. Repère les symboles : ⎓ ou CC/DC (continu), ~ ou CA/AC (alternatif).",
      "3. Classe les appareils en deux colonnes et repère ceux qui utilisent LES DEUX (les appareils à chargeur !).",
    ],
  },
  substitutions: [
    { officiel: "Générateur de démonstration CC/CA", local: "Pile plate (continu) + alternateur artisanal aimant-bobine (alternatif)" },
    { officiel: "Tableau comparatif imprimé", local: "Grand tableau sur papier kraft rempli par les groupes au feutre" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Recopie et complète le tableau : pour chaque critère (source, sens du courant, stockage, transport au loin), donne la réponse pour le continu puis pour l'alternatif.",
      items: [],
      corrige: [
        [{ text: "Sources : " }, { text: "piles-batteries-solaire / alternateurs-secteur", cle: true }, { text: " ; sens : " }, { text: "unique / change régulièrement", cle: true }, { text: " ; stockage : " }, { text: "oui / non", cle: true }, { text: " ; transport : " }, { text: "difficile / facile (haute tension)", cle: true }, { text: ". (1 point par ligne)" }],
      ],
    },
    {
      points: 3,
      consigne: "Explique pourquoi la JIRAMA distribue de l'alternatif et non du continu.",
      items: [],
      corrige: [
        [{ text: "L'alternatif " }, { text: "se transforme facilement (transformateurs)", cle: true }, { text: " : transport en haute tension avec " }, { text: "peu de pertes", cle: true }, { text: ", puis abaissement à 220 V près des maisons." }],
      ],
    },
    {
      points: 3,
      consigne: "Un panneau solaire alimente une lampe DEL le jour. Que faut-il ajouter pour avoir de la lumière la nuit ? Quel type de courant est en jeu ?",
      items: [],
      corrige: [
        [{ text: "Il faut " }, { text: "une batterie", cle: true }, { text: " pour stocker l'énergie du jour ; tout le système fonctionne en " }, { text: "courant continu", cle: true }, { text: "." }],
      ],
    },
  ],
};

module.exports = { seances: [S12, S13, S14, S15, S16, S17] };
