// data-unite2.js — Unité II : ÉLECTRICITÉ ET MAGNÉTISME (séances 11 à 20)
const DOC = "Programme d'études T6 — Sciences Physiques (MEN Madagascar) ; manuel J-Learn";

const S11 = {
  numero: 11, total: 34, unite: "II", theme: "Électricité et magnétisme",
  titre: "Le circuit électrique simple",
  objectif: "monter un circuit électrique simple et nommer ses composants",
  documentation: DOC,
  support: "Pile plate 4,5 V, ampoule, fils de connexion, interrupteur, lampe de poche",
  image: "images/img_seance11.png",
  imageLegende: "Figure 11 — Schéma d'un circuit électrique simple : pile, interrupteur fermé et lampe allumée",
  revision: {
    qa: [
      { q: "Qu'est-ce que la liquéfaction par compression ?", ra: "La transformation d'un gaz en liquide sous l'effet d'une forte pression." },
      { q: "Dans la bouteille de gaz de cuisine, le butane est-il liquide ou gazeux ?", ra: "Liquide, car il est sous forte pression." },
      { q: "Pourquoi l'eau bout-elle plus vite de la cocotte-minute ?", ra: "La pression élevée fait bouillir l'eau au-dessus de 100 °C : les aliments cuisent plus vite." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Le soir, quand il fait noir, Vola appuie sur le bouton de sa lampe de poche : la petite ampoule s'allume aussitôt. Quand elle relâche le bouton, la lumière s'éteint.",
      "D'où vient l'électricité qui allume l'ampoule de la lampe de poche ?",
      "R.A. : Des piles qui sont à l'intérieur de la lampe.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée", support: "Lampe de poche",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Le circuit électrique simple ». Après cette séance, vous serez capables de nommer les composants d'un circuit électrique simple et de monter un circuit qui allume une lampe.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien ce montage : je relie la pile, l'interrupteur et la lampe avec des fils de connexion. Je ferme l'interrupteur : la lampe s'allume. J'ouvre l'interrupteur : elle s'éteint. Je débranche maintenant un fil : la lampe reste éteinte même si l'interrupteur est fermé.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Pile, lampe, fils, interrupteur",
  },
  analyse: {
    qa: [
      { q: "Quels sont les éléments de ce montage ?", ra: "Une pile, une lampe, des fils de connexion et un interrupteur." },
      { q: "Quel élément fournit le courant électrique ?", ra: "La pile : c'est le générateur." },
      { q: "Quel élément utilise le courant pour éclairer ?", ra: "La lampe : c'est le récepteur." },
      { q: "Quand la lampe s'allume-t-elle ?", ra: "Quand le circuit est fermé : le courant peut circuler dans une boucle complète." },
      { q: "Pourquoi la lampe s'éteint-elle quand on débranche un fil ?", ra: "Parce que le circuit est ouvert : la boucle est interrompue et le courant ne circule plus." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Pile, lampe, fils, interrupteur",
  },
  synthese: {
    enseignant: "Donc, un circuit électrique simple comprend : un générateur (la pile) qui fournit le courant, un récepteur (la lampe) qui l'utilise, des fils de connexion qui relient les éléments, et un interrupteur qui commande le circuit. La lampe s'allume seulement si le circuit est fermé, c'est-à-dire si le courant peut circuler dans une boucle complète sans interruption.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) La pile est le générateur du circuit.",
        "b) La lampe s'allume quand le circuit est ouvert.",
        "c) Les fils de connexion relient les éléments du circuit.",
        "d) L'interrupteur sert à ouvrir ou fermer le circuit.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: " : elle fournit le courant." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : elle s'allume quand le circuit est fermé." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Associe chaque composant à son rôle : pile, lampe, fils de connexion, interrupteur.",
      items: [
        "a) Commande l'ouverture et la fermeture du circuit.",
        "b) Fournit le courant électrique.",
        "c) Transforme le courant en lumière.",
        "d) Conduisent le courant entre les éléments.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "L'interrupteur", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "La pile", cle: true }, { text: " (le générateur)." }],
        [{ text: "c) " }, { text: "La lampe", cle: true }, { text: " (le récepteur)." }],
        [{ text: "d) " }, { text: "Les fils de connexion", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail de groupe", applicationSupport: "Pile, lampe, fils, ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : fermé – générateur – récepteur – boucle – ouvert.",
      items: [
        "a) La pile est le ……… du circuit ; la lampe est le ……… .",
        "b) La lampe brille quand le circuit est ……… : le courant circule dans une ……… complète.",
        "c) Quand le circuit est ………, le courant ne circule pas.",
      ],
      corrige: [
        [{ text: "a) La pile est le " }, { text: "générateur", cle: true }, { text: " du circuit ; la lampe est le " }, { text: "récepteur", cle: true }, { text: "." }],
        [{ text: "b) La lampe brille quand le circuit est " }, { text: "fermé", cle: true }, { text: " : le courant circule dans une " }, { text: "boucle", cle: true }, { text: " complète." }],
        [{ text: "c) Quand le circuit est " }, { text: "ouvert", cle: true }, { text: ", le courant ne circule pas." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Cite les quatre composants d'un circuit électrique simple.",
        "b) Quel est le rôle du générateur ?",
        "c) Que se passe-t-il si un fil du circuit est débranché ?",
        "d) Cite un objet de la vie courante qui contient un circuit électrique simple.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "La pile, la lampe, les fils de connexion et l'interrupteur", cle: true }, { text: "." }],
        [{ text: "b) Il " }, { text: "fournit le courant électrique", cle: true }, { text: " au circuit." }],
        [{ text: "c) Le circuit est " }, { text: "ouvert", cle: true }, { text: " : le courant ne circule plus et la lampe s'éteint." }],
        [{ text: "d) " }, { text: "La lampe de poche", cle: true }, { text: " (ou la sonnette, un jouet électrique)." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["générateur", "récepteur", "circuit fermé", "circuit ouvert", "fils de connexion", "interrupteur"],
    sections: [
      {
        titre: "1. Les composants d'un circuit électrique simple",
        paras: ["Un circuit électrique simple comprend quatre éléments :"],
        puces: [
          "le générateur (la pile) : il fournit le courant électrique ;",
          "le récepteur (la lampe) : il utilise le courant, par exemple pour éclairer ;",
          "les fils de connexion : ils conduisent le courant d'un élément à l'autre ;",
          "l'interrupteur : il permet d'ouvrir ou de fermer le circuit.",
        ],
      },
      {
        titre: "2. Circuit fermé, circuit ouvert",
        paras: [
          "Le courant électrique ne circule que si le circuit forme une boucle complète, sans interruption : on dit que le circuit est fermé. La lampe brille.",
          "Si la boucle est interrompue (interrupteur ouvert, fil débranché, lampe dévissée), le circuit est ouvert : le courant ne circule pas et la lampe est éteinte.",
        ],
      },
      {
        titre: "3. Monter un circuit simple",
        paras: ["Pour allumer une lampe avec une pile :"],
        puces: [
          "relier une borne de la pile à une borne de la lampe avec un fil ;",
          "relier l'autre borne de la lampe à l'interrupteur ;",
          "relier l'interrupteur à l'autre borne de la pile ;",
          "fermer l'interrupteur : la lampe s'allume.",
        ],
      },
    ],
    saisTu: [
      "La lampe de poche est un circuit électrique simple de poche : les piles (générateur), l'ampoule ou la LED (récepteur), le bouton (interrupteur) et des lamelles de métal qui servent de fils de connexion. Une LED consomme environ dix fois moins d'énergie qu'une ampoule à filament !",
    ],
    experience: [
      "Avec une pile plate de 4,5 V et une petite ampoule de lampe de poche (jamais avec la prise de courant !) :",
      "1. Pose le culot de l'ampoule sur une languette de la pile.",
      "2. Touche le plot du bas de l'ampoule avec l'autre languette.",
      "3. L'ampoule s'allume : tu as fermé un circuit électrique simple.",
    ],
  },
  substitutions: [
    { officiel: "Fils de connexion à pinces crocodiles", local: "Fil électrique récupéré, dénudé aux extrémités" },
    { officiel: "Support de lampe", local: "Ampoule tenue à la main ou fixée avec du ruban adhésif" },
    { officiel: "Interrupteur de laboratoire", local: "Deux punaises et un trombone sur une planchette" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Le générateur d'un circuit simple est :  a) la lampe   b) la pile   c) l'interrupteur",
        "2. La lampe s'allume quand le circuit est :  a) ouvert   b) fermé   c) débranché",
        "3. Le rôle des fils de connexion est de :  a) fournir le courant   b) éclairer   c) conduire le courant",
        "4. Si on dévisse la lampe d'un circuit fermé :  a) elle reste allumée   b) le circuit devient ouvert   c) la pile devient plus forte",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "la pile", cle: true }, { text: " fournit le courant." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "fermé", cle: true }, { text: " : le courant circule dans la boucle complète." }],
        [{ text: "3. Réponse c) : ", bold: true }, { text: "conduire le courant", cle: true }, { text: " entre les éléments." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "le circuit devient ouvert", cle: true }, { text: " et le courant ne circule plus." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. La lampe est le générateur du circuit.",
        "2. Un circuit fermé forme une boucle complète.",
        "3. L'interrupteur ouvert laisse passer le courant.",
        "4. Une lampe de poche contient un circuit électrique simple.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : la lampe est le récepteur ; le générateur est la pile." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : l'interrupteur ouvert coupe le circuit, le courant ne passe pas." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : récepteur – boucle – interrupteur – générateur – fermé – fils de connexion.",
      items: [
        "La pile est le ……… : elle fournit le courant. La lampe est le ……… . Les ……… conduisent le courant. L'……… commande le circuit. La lampe brille si le circuit est ……… , c'est-à-dire si la ……… est complète.",
      ],
      corrige: [
        [{ text: "La pile est le " }, { text: "générateur", cle: true }, { text: " : elle fournit le courant. La lampe est le " }, { text: "récepteur", cle: true }, { text: ". Les " }, { text: "fils de connexion", cle: true }, { text: " conduisent le courant. L'" }, { text: "interrupteur", cle: true }, { text: " commande le circuit. La lampe brille si le circuit est " }, { text: "fermé", cle: true }, { text: ", c'est-à-dire si la " }, { text: "boucle", cle: true }, { text: " est complète." }],
      ],
    },
    {
      points: 6,
      consigne: "Observe la figure 11 en tête de la leçon, puis réponds :",
      items: [
        "1. Nomme les quatre composants représentés sur le schéma.",
        "2. L'interrupteur est-il ouvert ou fermé ? Comment le sais-tu ?",
        "3. Que faut-il faire pour éteindre la lampe sans toucher ni la pile ni la lampe ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "La pile, l'interrupteur, la lampe et les fils de connexion", cle: true }, { text: "." }],
        [{ text: "2. Il est " }, { text: "fermé", cle: true }, { text: ", car la lampe est allumée : le courant circule." }],
        [{ text: "3. Il faut " }, { text: "ouvrir l'interrupteur", cle: true }, { text: " : le circuit devient ouvert et la lampe s'éteint." }],
      ],
    },
  ],
};

const S12 = {
  numero: 12, total: 34, unite: "II", theme: "Électricité et magnétisme",
  titre: "Les symboles et le schéma d'un circuit électrique",
  objectif: "reconnaître les symboles normalisés des composants et schématiser un circuit électrique simple",
  documentation: DOC,
  support: "Tableau des symboles normalisés, pile, lampe, interrupteur, fils, règle, crayon",
  image: "images/img_seance12.png",
  imageLegende: "Figure 12 — Les symboles normalisés des composants d'un circuit électrique",
  revision: {
    qa: [
      { q: "Cite les quatre composants d'un circuit électrique simple.", ra: "La pile, la lampe, les fils de connexion et l'interrupteur." },
      { q: "Quel composant est le générateur ?", ra: "La pile." },
      { q: "Quand la lampe s'allume-t-elle ?", ra: "Quand le circuit est fermé." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Tovo veut expliquer par lettre à son cousin de Mahajanga comment monter le circuit de sa lampe. Dessiner une vraie pile et une vraie ampoule, c'est long et difficile. Il aimerait un dessin simple que tout le monde comprend.",
      "Comment les électriciens du monde entier dessinent-ils les circuits pour se comprendre ?",
      "R.A. : Avec des symboles, des dessins simples identiques pour tous.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Les symboles et le schéma d'un circuit électrique ». Après cette séance, vous serez capables de reconnaître les symboles normalisés des composants et de dessiner le schéma d'un circuit simple.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien ce tableau des symboles normalisés affiché au tableau : le symbole de la pile, de la lampe, de l'interrupteur ouvert, de l'interrupteur fermé, du fil de connexion et du fusible.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation", support: "Tableau des symboles normalisés",
  },
  analyse: {
    qa: [
      { q: "Comment représente-t-on la pile ?", ra: "Par deux traits parallèles : un long trait pour la borne +, un trait court et épais pour la borne −." },
      { q: "Comment représente-t-on la lampe ?", ra: "Par un cercle contenant une croix." },
      { q: "Comment représente-t-on un fil de connexion ?", ra: "Par un trait droit, tracé à la règle." },
      { q: "Quelle est la différence entre le symbole de l'interrupteur ouvert et celui de l'interrupteur fermé ?", ra: "Interrupteur fermé : le trait est dans le prolongement du fil ; ouvert : le trait est relevé, la boucle est interrompue." },
      { q: "Pourquoi utilise-t-on des symboles normalisés ?", ra: "Pour que tout le monde, dans tous les pays, comprenne le même schéma." },
    ],
    technique: "Questions-réponses", support: "Tableau des symboles normalisés",
  },
  synthese: {
    enseignant: "Donc, pour dessiner un circuit électrique, on utilise des symboles normalisés, les mêmes dans le monde entier : deux traits inégaux pour la pile, un cercle avec une croix pour la lampe, un trait droit pour le fil, un trait relevé ou aligné pour l'interrupteur ouvert ou fermé. Le dessin du circuit avec ces symboles s'appelle le schéma du circuit : on le trace à la règle, en formant un rectangle.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Dessine le symbole normalisé de chaque composant :",
      items: [
        "a) Une pile.",
        "b) Une lampe.",
        "c) Un interrupteur ouvert.",
        "d) Un fil de connexion.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Deux traits parallèles : un long (borne +) et un court épais (borne −)", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Un cercle contenant une croix", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Un trait relevé entre deux points : la boucle est interrompue", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Un trait droit tracé à la règle", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Le symbole de la lampe est un cercle avec une croix.",
        "b) Le grand trait du symbole de la pile représente la borne −.",
        "c) Un schéma de circuit se trace à main levée.",
        "d) Les symboles normalisés sont les mêmes dans tous les pays.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : le grand trait représente la borne + ; le petit trait épais représente la borne −." }],
        [{ text: "c) " }, { text: "Faux", cle: true }, { text: " : on trace le schéma à la règle, en rectangle." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: " : c'est pour cela qu'on dit « normalisés »." }],
      ],
    },
  ],
  applicationTechnique: "Travail individuel sur ardoise", applicationSupport: "Ardoise, règle",
  evaluation: [
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Pourquoi utilise-t-on des symboles normalisés ?",
        "b) Décris le symbole de la pile.",
        "c) Qu'est-ce que le schéma d'un circuit ?",
        "d) Avec quel instrument trace-t-on les fils sur un schéma ?",
      ],
      corrige: [
        [{ text: "a) Pour que " }, { text: "tout le monde comprenne le même schéma", cle: true }, { text: ", dans tous les pays." }],
        [{ text: "b) " }, { text: "Deux traits parallèles : un long pour la borne +, un court et épais pour la borne −", cle: true }, { text: "." }],
        [{ text: "c) C'est le " }, { text: "dessin du circuit avec les symboles normalisés", cle: true }, { text: "." }],
        [{ text: "d) Avec " }, { text: "une règle", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Dessine le schéma normalisé d'un circuit comprenant une pile, un interrupteur fermé et une lampe, puis le même circuit avec l'interrupteur ouvert. Indique dans chaque cas si la lampe brille.",
      items: [],
      corrige: [
        [{ text: "Schéma 1 : rectangle avec " }, { text: "pile, interrupteur fermé et lampe en boucle complète", cle: true }, { text: " → la lampe " }, { text: "brille", cle: true }, { text: "." }],
        [{ text: "Schéma 2 : même rectangle avec " }, { text: "l'interrupteur ouvert (trait relevé)", cle: true }, { text: " → la lampe " }, { text: "ne brille pas", cle: true }, { text: ", le circuit est ouvert." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, règle, feuille d'évaluation",
  lecon: {
    motsCles: ["symboles normalisés", "schéma", "borne", "circuit"],
    sections: [
      {
        titre: "1. Pourquoi des symboles ?",
        paras: [
          "Dessiner une vraie pile ou une vraie lampe est long et chacun dessinerait différemment. Les électriciens et les scientifiques du monde entier utilisent donc des symboles normalisés : des dessins simples, identiques pour tous.",
        ],
      },
      {
        titre: "2. Les symboles normalisés à connaître",
        paras: ["Voir la figure 12 en tête de la leçon :"],
        puces: [
          "la pile : deux traits parallèles, un long (borne +) et un court épais (borne −) ;",
          "la lampe : un cercle contenant une croix ;",
          "le fil de connexion : un trait droit ;",
          "l'interrupteur fermé : un trait aligné avec le fil ; ouvert : un trait relevé ;",
          "le fusible : un petit rectangle traversé par le fil.",
        ],
      },
      {
        titre: "3. Tracer le schéma d'un circuit",
        paras: ["Règles pour un bon schéma :"],
        puces: [
          "tracer les fils à la règle, en formant un rectangle ;",
          "placer les symboles sur les côtés du rectangle, jamais dans les coins ;",
          "respecter l'ordre des composants du circuit réel.",
        ],
      },
    ],
    saisTu: [
      "Les symboles électriques sont fixés par la Commission électrotechnique internationale (CEI), fondée en 1906. Grâce à elle, un schéma dessiné par un électricien malgache peut être lu sans difficulté par un électricien japonais ou brésilien !",
    ],
    experience: [
      "Entraîne-toi à schématiser :",
      "1. Observe une lampe de poche : repère la pile, l'ampoule, l'interrupteur.",
      "2. Dessine son schéma normalisé à la règle dans ton cahier.",
      "3. Fais vérifier ton schéma par un camarade : peut-il reconnaître chaque composant ?",
    ],
  },
  substitutions: [
    { officiel: "Planche de symboles imprimée", local: "Tableau des symboles recopié au tableau noir" },
    { officiel: "Gabarits de dessin", local: "Règle et pièce de monnaie pour tracer les cercles" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Le symbole de la lampe est :  a) un rectangle   b) un cercle avec une croix   c) deux traits parallèles",
        "2. Dans le symbole de la pile, le trait long représente :  a) la borne +   b) la borne −   c) le fil",
        "3. Un schéma de circuit se trace :  a) à main levée   b) à la règle   c) au compas seulement",
        "4. Le symbole du fusible est :  a) un cercle   b) un petit rectangle   c) un triangle",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "un cercle avec une croix", cle: true }, { text: "." }],
        [{ text: "2. Réponse a) : ", bold: true }, { text: "la borne +", cle: true }, { text: "." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "à la règle", cle: true }, { text: ", en formant un rectangle." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "un petit rectangle", cle: true }, { text: " traversé par le fil." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Chaque pays a ses propres symboles électriques.",
        "2. Sur un schéma, l'interrupteur ouvert se dessine avec un trait relevé.",
        "3. On place les symboles dans les coins du rectangle.",
        "4. Le schéma permet de comprendre un circuit sans voir le montage réel.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : les symboles sont normalisés, identiques dans le monde entier." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : on place les symboles sur les côtés, jamais dans les coins." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Associe chaque composant à la description de son symbole : pile, lampe, fil, interrupteur ouvert, interrupteur fermé, fusible.",
      items: [
        "1. Un trait droit tracé à la règle.",
        "2. Un cercle contenant une croix.",
        "3. Deux traits parallèles de longueurs différentes.",
        "4. Un trait relevé qui interrompt la boucle.",
        "5. Un trait aligné entre deux points.",
        "6. Un petit rectangle traversé par un trait.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Le fil de connexion", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "La lampe", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "La pile", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "L'interrupteur ouvert", cle: true }, { text: "." }],
        [{ text: "5. " }, { text: "L'interrupteur fermé", cle: true }, { text: "." }],
        [{ text: "6. " }, { text: "Le fusible", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Dessine dans ton cahier le schéma normalisé des circuits suivants et indique si la lampe brille :",
      items: [
        "1. Une pile, une lampe et un interrupteur fermé.",
        "2. Une pile, une lampe et un interrupteur ouvert.",
        "3. Une pile, un fusible, un interrupteur fermé et une lampe.",
      ],
      corrige: [
        [{ text: "1. Rectangle : pile + interrupteur fermé + lampe → " }, { text: "la lampe brille", cle: true }, { text: " (circuit fermé)." }],
        [{ text: "2. Même schéma avec le trait de l'interrupteur relevé → " }, { text: "la lampe ne brille pas", cle: true }, { text: " (circuit ouvert)." }],
        [{ text: "3. Rectangle : pile + fusible + interrupteur fermé + lampe → " }, { text: "la lampe brille", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S13 = {
  numero: 13, total: 34, unite: "II", theme: "Électricité et magnétisme",
  titre: "Le sens conventionnel du courant électrique",
  objectif: "expliquer le sens conventionnel du courant électrique dans un circuit",
  documentation: DOC,
  support: "Circuit pile-lampe monté, schéma au tableau avec flèches rouges",
  image: "images/img_seance13.png",
  imageLegende: "Figure 13 — Le sens conventionnel du courant : de la borne + vers la borne −, à l'extérieur du générateur",
  revision: {
    qa: [
      { q: "Comment dessine-t-on le symbole de la pile ?", ra: "Deux traits parallèles : un long (borne +) et un court épais (borne −)." },
      { q: "Comment s'appelle le dessin d'un circuit avec des symboles ?", ra: "Le schéma du circuit." },
      { q: "Pourquoi les symboles sont-ils dits « normalisés » ?", ra: "Parce qu'ils sont les mêmes dans le monde entier." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "L'eau de la rivière Ikopa coule toujours dans le même sens, de l'amont vers l'aval. Et le courant électrique dans un fil, a-t-il lui aussi un sens ?",
      "R.A. : Oui, le courant électrique circule dans un sens précis.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème, comparaison", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Le sens conventionnel du courant électrique ». Après cette séance, vous serez capables d'indiquer par des flèches le sens du courant dans un circuit.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien ce schéma au tableau : les flèches rouges partent de la borne + de la pile, traversent la lampe et reviennent à la borne −.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation", support: "Schéma au tableau avec flèches rouges",
  },
  analyse: {
    qa: [
      { q: "De quelle borne de la pile partent les flèches ?", ra: "De la borne + (borne positive)." },
      { q: "À quelle borne reviennent-elles ?", ra: "À la borne − (borne négative)." },
      { q: "Comment appelle-t-on ce sens de circulation ?", ra: "Le sens conventionnel du courant électrique." },
      { q: "Ce sens est-il le même dans tous les pays ?", ra: "Oui, c'est une convention adoptée par tous les scientifiques." },
      { q: "Le courant traverse-t-il la lampe ?", ra: "Oui, le courant traverse la lampe et la fait briller." },
    ],
    technique: "Questions-réponses", support: "Schéma au tableau",
  },
  synthese: {
    enseignant: "Donc, à l'extérieur du générateur, le courant électrique circule de la borne + vers la borne − : c'est le sens conventionnel du courant. Sur un schéma, on indique ce sens par des flèches rouges dessinées sur les fils. Cette convention est la même dans le monde entier.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Le courant circule de la borne + vers la borne − à l'extérieur du générateur.",
        "b) Le sens conventionnel change d'un pays à l'autre.",
        "c) On indique le sens du courant par des flèches sur les fils.",
        "d) Le courant traverse la lampe.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : c'est une convention mondiale, la même partout." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: ", en général des flèches rouges." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: " : c'est ce courant qui la fait briller." }],
      ],
    },
    {
      consigne: "Complète chaque phrase :",
      items: [
        "a) Le courant sort du générateur par la borne ……… .",
        "b) Le courant rentre dans le générateur par la borne ……… .",
        "c) Ce sens de circulation s'appelle le sens ……… du courant.",
        "d) Sur le schéma, on le représente par des ……… .",
      ],
      corrige: [
        [{ text: "a) Par la borne " }, { text: "+ (positive)", cle: true }, { text: "." }],
        [{ text: "b) Par la borne " }, { text: "− (négative)", cle: true }, { text: "." }],
        [{ text: "c) Le sens " }, { text: "conventionnel", cle: true }, { text: " du courant." }],
        [{ text: "d) Par des " }, { text: "flèches", cle: true }, { text: " dessinées sur les fils." }],
      ],
    },
  ],
  applicationTechnique: "Travail individuel sur ardoise", applicationSupport: "Ardoise, règle",
  evaluation: [
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Qu'est-ce que le sens conventionnel du courant électrique ?",
        "b) Comment indique-t-on ce sens sur un schéma ?",
        "c) Pourquoi parle-t-on de « convention » ?",
        "d) Dessine un circuit pile-lampe et indique le sens du courant par des flèches.",
      ],
      corrige: [
        [{ text: "a) C'est le sens de circulation du courant " }, { text: "de la borne + vers la borne −", cle: true }, { text: ", à l'extérieur du générateur." }],
        [{ text: "b) Par des " }, { text: "flèches dessinées sur les fils", cle: true }, { text: "." }],
        [{ text: "c) Parce que ce sens a été " }, { text: "choisi d'un commun accord", cle: true }, { text: " par tous les scientifiques." }],
        [{ text: "d) Schéma : rectangle pile-lampe avec " }, { text: "flèches partant du + et revenant au −", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Choisis la bonne réponse :",
      items: [
        "a) À l'extérieur de la pile, le courant va :  1) du − vers le +   2) du + vers le −   3) dans les deux sens",
        "b) Les flèches du sens du courant se dessinent :  1) sur les fils   2) dans la lampe   3) sur la pile seulement",
        "c) Le sens conventionnel est :  1) différent selon les circuits   2) le même partout dans le monde   3) choisi par chaque électricien",
        "d) La borne + de la pile se représente par :  1) le petit trait épais   2) le grand trait   3) un cercle",
      ],
      corrige: [
        [{ text: "a) Réponse 2) : " }, { text: "du + vers le −", cle: true }, { text: "." }],
        [{ text: "b) Réponse 1) : " }, { text: "sur les fils", cle: true }, { text: "." }],
        [{ text: "c) Réponse 2) : " }, { text: "le même partout dans le monde", cle: true }, { text: "." }],
        [{ text: "d) Réponse 2) : " }, { text: "le grand trait", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["sens conventionnel", "borne positive", "borne négative", "courant électrique"],
    sections: [
      {
        titre: "1. Le courant a un sens",
        paras: [
          "Dans un circuit fermé, le courant électrique circule toujours dans le même sens, comme l'eau d'une rivière.",
        ],
      },
      {
        titre: "2. Le sens conventionnel",
        paras: [
          "Les scientifiques du monde entier ont choisi une règle commune, appelée convention :",
          "À l'extérieur du générateur, le courant électrique circule de la borne positive (+) vers la borne négative (−).",
          "C'est le sens conventionnel du courant électrique.",
        ],
      },
      {
        titre: "3. Représenter le sens du courant",
        paras: ["Sur un schéma :"],
        puces: [
          "on dessine des flèches sur les fils, souvent en rouge ;",
          "les flèches sortent de la borne + de la pile, traversent la lampe et reviennent à la borne − ;",
          "une seule flèche par côté du circuit suffit.",
        ],
      },
    ],
    saisTu: [
      "Le sens conventionnel a été choisi au XIXe siècle, avant la découverte de l'électron ! On sait aujourd'hui que dans les métaux, les électrons se déplacent en réalité dans le sens inverse. Mais la convention a été conservée : tous les schémas du monde utilisent le sens + vers −.",
    ],
    experience: [
      "Vérifie l'importance des bornes avec un adulte :",
      "1. Observe une radio ou une lampe torche à piles : repère les signes + et − dans le logement des piles.",
      "2. Mets une pile à l'envers : l'appareil ne fonctionne pas.",
      "Conclusion : le sens de branchement de la pile compte, car le courant a un sens.",
    ],
  },
  substitutions: [
    { officiel: "Schéma mural du sens du courant", local: "Schéma tracé au tableau noir avec des flèches à la craie de couleur" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Le sens conventionnel du courant va :  a) du − vers le +   b) du + vers le −   c) sans sens précis",
        "2. Ce sens s'observe :  a) à l'intérieur de la pile   b) à l'extérieur du générateur   c) uniquement dans la lampe",
        "3. Sur un schéma, le sens du courant est indiqué par :  a) des croix   b) des flèches   c) des points",
        "4. Le sens conventionnel est valable :  a) à Madagascar seulement   b) en Afrique seulement   c) dans le monde entier",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "du + vers le −", cle: true }, { text: "." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "à l'extérieur du générateur", cle: true }, { text: "." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "des flèches", cle: true }, { text: " dessinées sur les fils." }],
        [{ text: "4. Réponse c) : ", bold: true }, { text: "dans le monde entier", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Le courant sort de la pile par la borne −.",
        "2. Le courant traverse la lampe et la fait briller.",
        "3. Dans un circuit ouvert, le courant circule quand même.",
        "4. Une pile montée à l'envers empêche l'appareil de fonctionner.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : il sort par la borne + et revient par la borne −." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : dans un circuit ouvert, aucun courant ne circule." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: " : le sens de branchement compte." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : flèches – positive – conventionnel – négative – extérieur – générateur.",
      items: [
        "À l'……… du ………, le courant circule de la borne ……… vers la borne ……… : c'est le sens ……… . On le représente par des ……… sur les fils.",
      ],
      corrige: [
        [{ text: "À l'" }, { text: "extérieur", cle: true }, { text: " du " }, { text: "générateur", cle: true }, { text: ", le courant circule de la borne " }, { text: "positive", cle: true }, { text: " vers la borne " }, { text: "négative", cle: true }, { text: " : c'est le sens " }, { text: "conventionnel", cle: true }, { text: ". On le représente par des " }, { text: "flèches", cle: true }, { text: " sur les fils." }],
      ],
    },
    {
      points: 6,
      consigne: "Observe la figure 13 en tête de la leçon, puis réponds :",
      items: [
        "1. De quelle borne de la pile partent les flèches rouges ?",
        "2. Dans quel ordre le courant traverse-t-il les éléments du circuit ?",
        "3. Recopie le schéma dans ton cahier et vérifie le sens de tes flèches.",
      ],
      corrige: [
        [{ text: "1. De la " }, { text: "borne + (le grand trait du symbole)", cle: true }, { text: "." }],
        [{ text: "2. Le courant part du +, " }, { text: "traverse les fils et la lampe, puis revient à la borne −", cle: true }, { text: "." }],
        [{ text: "3. Schéma correct : " }, { text: "toutes les flèches suivent la boucle du + vers le −", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S14 = {
  numero: 14, total: 34, unite: "II", theme: "Électricité et magnétisme",
  titre: "Deux lampes montées en série",
  objectif: "réaliser et analyser un circuit comportant deux lampes montées en série",
  documentation: DOC,
  support: "Pile 4,5 V, deux lampes identiques, fils de connexion, interrupteur",
  image: "images/img_seance14.png",
  imageLegende: "Figure 14 — Deux lampes montées en série : une seule boucle",
  revision: {
    qa: [
      { q: "Quel est le sens conventionnel du courant électrique ?", ra: "De la borne + vers la borne −, à l'extérieur du générateur." },
      { q: "Comment représente-t-on ce sens sur un schéma ?", ra: "Par des flèches sur les fils." },
      { q: "Quel symbole représente la lampe ?", ra: "Un cercle avec une croix." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Pendant les fêtes, Lova admire une guirlande lumineuse. Soudain, toutes les ampoules s'éteignent en même temps : une seule ampoule a grillé !",
      "Pourquoi une seule ampoule grillée peut-elle éteindre toute la guirlande ?",
      "R.A. : Parce que les ampoules sont branchées les unes à la suite des autres : si une grille, le circuit est coupé.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Deux lampes montées en série ». Après cette séance, vous serez capables de monter deux lampes en série et d'expliquer ce qui se passe quand on dévisse une lampe.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien ce montage : les deux lampes sont branchées l'une à la suite de l'autre sur la même boucle. Je ferme l'interrupteur : les deux lampes brillent faiblement. Je dévisse maintenant une lampe : observez l'autre.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Pile, deux lampes, fils, interrupteur",
  },
  analyse: {
    qa: [
      { q: "Comment les deux lampes sont-elles branchées ?", ra: "L'une à la suite de l'autre, sur la même boucle : c'est un montage en série." },
      { q: "Combien de boucles le circuit comporte-t-il ?", ra: "Une seule boucle." },
      { q: "Comment brillent les deux lampes ?", ra: "Faiblement : moins fort qu'une lampe seule avec la même pile." },
      { q: "Que se passe-t-il quand on dévisse une lampe ?", ra: "L'autre lampe s'éteint aussi, car la boucle est coupée." },
      { q: "Le même courant traverse-t-il les deux lampes ?", ra: "Oui, le même courant traverse toutes les lampes du montage en série." },
    ],
    technique: "Questions-réponses, expérimentation", support: "Montage en série",
  },
  synthese: {
    enseignant: "Donc, deux lampes sont montées en série quand elles sont branchées l'une à la suite de l'autre, sur une seule boucle. Le même courant traverse les deux lampes. Elles brillent plus faiblement qu'une lampe seule. Si l'une des lampes grille ou est dévissée, l'autre s'éteint aussi, car le circuit est ouvert.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Dans un montage en série, les lampes sont sur la même boucle.",
        "b) Deux lampes en série brillent plus fort qu'une lampe seule.",
        "c) Si une lampe en série grille, l'autre reste allumée.",
        "d) Le même courant traverse toutes les lampes en série.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : elles brillent plus faiblement." }],
        [{ text: "c) " }, { text: "Faux", cle: true }, { text: " : l'autre s'éteint aussi, car la boucle est coupée." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Complète chaque phrase :",
      items: [
        "a) Des lampes branchées l'une à la suite de l'autre sont montées en ……… .",
        "b) Un montage en série ne comporte qu'une seule ……… .",
        "c) En série, si une lampe grille, l'autre ……… .",
        "d) Deux lampes en série brillent ……… qu'une lampe seule.",
      ],
      corrige: [
        [{ text: "a) En " }, { text: "série", cle: true }, { text: "." }],
        [{ text: "b) Une seule " }, { text: "boucle", cle: true }, { text: "." }],
        [{ text: "c) L'autre " }, { text: "s'éteint", cle: true }, { text: "." }],
        [{ text: "d) Elles brillent " }, { text: "plus faiblement", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail de groupe", applicationSupport: "Pile, lampes, fils",
  evaluation: [
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Qu'est-ce qu'un montage en série ?",
        "b) Pourquoi les lampes en série brillent-elles faiblement ?",
        "c) Que se passe-t-il si on dévisse une des lampes ? Pourquoi ?",
        "d) Dessine le schéma de deux lampes en série avec une pile et un interrupteur fermé.",
      ],
      corrige: [
        [{ text: "a) C'est un montage où les lampes sont branchées " }, { text: "l'une à la suite de l'autre, sur une seule boucle", cle: true }, { text: "." }],
        [{ text: "b) Parce qu'elles " }, { text: "se partagent l'énergie fournie par la pile", cle: true }, { text: "." }],
        [{ text: "c) L'autre lampe s'éteint, car " }, { text: "la boucle est coupée : le circuit est ouvert", cle: true }, { text: "." }],
        [{ text: "d) Schéma : " }, { text: "rectangle avec pile, interrupteur et deux lampes à la suite", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Choisis la bonne réponse :",
      items: [
        "a) Un montage en série comporte :  1) une seule boucle   2) deux boucles   3) trois boucles",
        "b) La guirlande dont toutes les ampoules s'éteignent ensemble est montée :  1) en dérivation   2) en série   3) sans circuit",
        "c) En série, le courant qui traverse la deuxième lampe est :  1) plus faible que dans la première   2) plus fort   3) le même",
        "d) Si on ajoute une troisième lampe en série, les lampes brillent :  1) plus fort   2) encore plus faiblement   3) pareil",
      ],
      corrige: [
        [{ text: "a) Réponse 1) : " }, { text: "une seule boucle", cle: true }, { text: "." }],
        [{ text: "b) Réponse 2) : " }, { text: "en série", cle: true }, { text: "." }],
        [{ text: "c) Réponse 3) : " }, { text: "le même courant", cle: true }, { text: " traverse toutes les lampes." }],
        [{ text: "d) Réponse 2) : " }, { text: "encore plus faiblement", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, règle, feuille d'évaluation",
  lecon: {
    motsCles: ["montage en série", "boucle", "grille", "circuit ouvert"],
    sections: [
      {
        titre: "1. Qu'est-ce qu'un montage en série ?",
        paras: [
          "Deux lampes sont montées en série quand elles sont branchées l'une à la suite de l'autre dans le circuit. Le circuit ne forme qu'une seule boucle : le courant sort de la pile, traverse la première lampe, puis la deuxième, et revient à la pile.",
        ],
      },
      {
        titre: "2. Propriétés du montage en série",
        puces: [
          "Le même courant traverse toutes les lampes.",
          "Les lampes brillent plus faiblement qu'une lampe seule : elles se partagent l'énergie de la pile.",
          "Plus on ajoute de lampes en série, plus elles brillent faiblement.",
          "Si une lampe grille ou est dévissée, toutes les autres s'éteignent : la boucle est coupée, le circuit est ouvert.",
        ],
        paras: [],
      },
      {
        titre: "3. Avantage et inconvénient",
        paras: [
          "Avantage : le montage en série est simple et économise les fils.",
          "Inconvénient : une seule lampe défectueuse éteint tout le circuit, et les lampes brillent faiblement. C'est pourquoi les lampes d'une maison ne sont pas montées en série.",
        ],
      },
    ],
    saisTu: [
      "Les anciennes guirlandes lumineuses étaient montées en série : une seule ampoule grillée éteignait toute la guirlande, et il fallait tester les ampoules une par une pour trouver la coupable ! Les guirlandes modernes utilisent d'autres montages pour éviter ce problème.",
    ],
    experience: [
      "Si tu disposes d'une pile plate et de deux petites ampoules :",
      "1. Monte d'abord une seule ampoule avec la pile : observe son éclat.",
      "2. Monte les deux ampoules l'une à la suite de l'autre (en série).",
      "3. Compare : les deux ampoules brillent plus faiblement.",
      "4. Dévisse une ampoule : l'autre s'éteint aussitôt.",
    ],
  },
  substitutions: [
    { officiel: "Supports de lampes de laboratoire", local: "Douilles récupérées ou connexions directes tenues avec du ruban adhésif" },
    { officiel: "Lampes d'expérimentation identiques", local: "Deux ampoules de lampe de poche du même type" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Deux lampes en série sont branchées :  a) sur deux boucles   b) l'une à la suite de l'autre   c) chacune sur sa pile",
        "2. En série, les lampes brillent :  a) plus fort qu'une lampe seule   b) plus faiblement   c) exactement pareil",
        "3. Si une lampe en série grille :  a) l'autre s'éteint   b) l'autre brille plus fort   c) rien ne change",
        "4. Le nombre de boucles d'un montage en série est :  a) 1   b) 2   c) autant que de lampes",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "l'une à la suite de l'autre", cle: true }, { text: "." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "plus faiblement", cle: true }, { text: "." }],
        [{ text: "3. Réponse a) : ", bold: true }, { text: "l'autre s'éteint", cle: true }, { text: " : la boucle est coupée." }],
        [{ text: "4. Réponse a) : ", bold: true }, { text: "une seule boucle", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. En série, chaque lampe a sa propre boucle.",
        "2. Le même courant traverse les deux lampes en série.",
        "3. Ajouter des lampes en série les fait briller plus fort.",
        "4. Les lampes d'une maison ne sont pas montées en série.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : il n'y a qu'une seule boucle pour toutes les lampes ; chaque lampe a sa boucle en dérivation." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : elles brillent de plus en plus faiblement." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: " : sinon une seule lampe grillée éteindrait toute la maison." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : série – boucle – faiblement – s'éteint – suite – même.",
      items: [
        "Deux lampes branchées l'une à la ……… de l'autre sont montées en ……… . Le circuit forme une seule ……… et le ……… courant traverse les deux lampes. Elles brillent ……… . Si une lampe grille, l'autre ……… .",
      ],
      corrige: [
        [{ text: "Deux lampes branchées l'une à la " }, { text: "suite", cle: true }, { text: " de l'autre sont montées en " }, { text: "série", cle: true }, { text: ". Le circuit forme une seule " }, { text: "boucle", cle: true }, { text: " et le " }, { text: "même", cle: true }, { text: " courant traverse les deux lampes. Elles brillent " }, { text: "faiblement", cle: true }, { text: ". Si une lampe grille, l'autre " }, { text: "s'éteint", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Fety monte une pile, un interrupteur et trois lampes en série. Réponds :",
      items: [
        "1. Combien de boucles son circuit comporte-t-il ?",
        "2. Compare l'éclat de ses trois lampes à celui d'une lampe seule branchée sur la même pile.",
        "3. La lampe du milieu grille. Que deviennent les deux autres ? Explique.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Une seule boucle", cle: true }, { text: "." }],
        [{ text: "2. Les trois lampes brillent " }, { text: "beaucoup plus faiblement", cle: true }, { text: " qu'une lampe seule." }],
        [{ text: "3. Les deux autres " }, { text: "s'éteignent", cle: true }, { text: ", car la lampe grillée " }, { text: "coupe l'unique boucle", cle: true }, { text: " : le circuit est ouvert." }],
      ],
    },
  ],
};

const S15 = {
  numero: 15, total: 34, unite: "II", theme: "Électricité et magnétisme",
  titre: "Deux lampes montées en dérivation",
  objectif: "réaliser et analyser un circuit comportant deux lampes montées en dérivation",
  documentation: DOC,
  support: "Pile 4,5 V, deux lampes identiques, fils de connexion, interrupteur",
  image: "images/img_seance15.png",
  imageLegende: "Figure 15 — Deux lampes montées en dérivation : chaque lampe a sa propre boucle",
  revision: {
    qa: [
      { q: "Qu'est-ce qu'un montage en série ?", ra: "Un montage où les lampes sont branchées l'une à la suite de l'autre, sur une seule boucle." },
      { q: "Comment brillent deux lampes en série ?", ra: "Plus faiblement qu'une lampe seule." },
      { q: "Que se passe-t-il si une lampe en série grille ?", ra: "L'autre s'éteint aussi, car la boucle est coupée." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Chez Naina, quand l'ampoule de la cuisine grille, la lampe du salon continue pourtant de briller normalement.",
      "Les lampes de la maison sont-elles montées en série ? Pourquoi ?",
      "R.A. : Non, car si elles étaient en série, toutes les lampes s'éteindraient en même temps.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée, question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Deux lampes montées en dérivation ». Après cette séance, vous serez capables de monter deux lampes en dérivation et d'expliquer pourquoi une lampe grillée n'éteint pas l'autre.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien ce montage : chaque lampe est branchée directement aux deux bornes de la pile, sur sa propre branche. Je ferme le circuit : les deux lampes brillent normalement. Je dévisse une lampe : observez l'autre.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Pile, deux lampes, fils",
  },
  analyse: {
    qa: [
      { q: "Comment les lampes sont-elles branchées ?", ra: "Chacune sur sa propre branche, directement reliée aux bornes de la pile : c'est un montage en dérivation." },
      { q: "Combien de boucles le circuit comporte-t-il ?", ra: "Deux boucles : une par lampe." },
      { q: "Comment brillent les deux lampes ?", ra: "Normalement, comme une lampe seule." },
      { q: "Que se passe-t-il quand on dévisse une lampe ?", ra: "L'autre continue de briller : sa boucle n'est pas coupée." },
      { q: "Comment appelle-t-on les points où les branches se rejoignent ?", ra: "Les nœuds du circuit." },
    ],
    technique: "Questions-réponses, expérimentation", support: "Montage en dérivation",
  },
  synthese: {
    enseignant: "Donc, deux lampes sont montées en dérivation quand chacune est branchée sur sa propre branche, directement reliée aux bornes du générateur. Le circuit comporte plusieurs boucles. Chaque lampe brille normalement, comme si elle était seule. Si une lampe grille, l'autre continue de briller : c'est pourquoi les installations des maisons sont en dérivation.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) En dérivation, chaque lampe a sa propre boucle.",
        "b) Deux lampes en dérivation brillent faiblement.",
        "c) Si une lampe en dérivation grille, l'autre s'éteint.",
        "d) Les lampes d'une maison sont montées en dérivation.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : elles brillent normalement, comme une lampe seule." }],
        [{ text: "c) " }, { text: "Faux", cle: true }, { text: " : l'autre continue de briller, sa boucle n'est pas coupée." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Compare les deux montages en répondant : série ou dérivation ?",
      items: [
        "a) Une seule boucle pour toutes les lampes.",
        "b) Chaque lampe brille comme si elle était seule.",
        "c) Une lampe grillée éteint toutes les autres.",
        "d) Montage utilisé dans les maisons.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Série", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Dérivation", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Série", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Dérivation", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail de groupe", applicationSupport: "Pile, lampes, fils",
  evaluation: [
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Qu'est-ce qu'un montage en dérivation ?",
        "b) Pourquoi une lampe grillée n'éteint-elle pas l'autre en dérivation ?",
        "c) Comment brillent deux lampes montées en dérivation ?",
        "d) Pourquoi les installations électriques des maisons sont-elles en dérivation ?",
      ],
      corrige: [
        [{ text: "a) C'est un montage où " }, { text: "chaque lampe est branchée sur sa propre branche", cle: true }, { text: ", reliée directement aux bornes du générateur." }],
        [{ text: "b) Parce que " }, { text: "chaque lampe a sa propre boucle", cle: true }, { text: " : couper une boucle ne coupe pas l'autre." }],
        [{ text: "c) " }, { text: "Normalement", cle: true }, { text: ", comme une lampe seule." }],
        [{ text: "d) Pour que " }, { text: "chaque appareil fonctionne indépendamment des autres", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Choisis la bonne réponse :",
      items: [
        "a) En dérivation, le circuit comporte :  1) une seule boucle   2) plusieurs boucles   3) aucune boucle",
        "b) Les points où les branches se rejoignent s'appellent :  1) les bornes   2) les nœuds   3) les fusibles",
        "c) Deux lampes en dérivation brillent :  1) faiblement   2) normalement   3) pas du tout",
        "d) Quand on dévisse une lampe en dérivation :  1) l'autre s'éteint   2) l'autre brille encore   3) la pile s'use plus vite",
      ],
      corrige: [
        [{ text: "a) Réponse 2) : " }, { text: "plusieurs boucles", cle: true }, { text: "." }],
        [{ text: "b) Réponse 2) : " }, { text: "les nœuds", cle: true }, { text: "." }],
        [{ text: "c) Réponse 2) : " }, { text: "normalement", cle: true }, { text: "." }],
        [{ text: "d) Réponse 2) : " }, { text: "l'autre brille encore", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["montage en dérivation", "branche", "nœud", "boucle"],
    sections: [
      {
        titre: "1. Qu'est-ce qu'un montage en dérivation ?",
        paras: [
          "Deux lampes sont montées en dérivation quand chaque lampe est branchée sur sa propre branche, directement reliée aux deux bornes du générateur.",
          "Le circuit comporte alors plusieurs boucles : une par lampe. Les points où les branches se rejoignent s'appellent les nœuds.",
        ],
      },
      {
        titre: "2. Propriétés du montage en dérivation",
        puces: [
          "Chaque lampe brille normalement, comme si elle était seule avec la pile.",
          "Si une lampe grille ou est dévissée, les autres continuent de briller : leur boucle n'est pas coupée.",
          "Chaque lampe peut être commandée séparément par son propre interrupteur.",
        ],
        paras: [],
      },
      {
        titre: "3. Le montage des maisons",
        paras: [
          "Dans une maison, toutes les lampes et les prises sont montées en dérivation. C'est pourquoi la lampe du salon continue de briller quand l'ampoule de la cuisine grille, et pourquoi on peut allumer chaque pièce séparément.",
        ],
      },
    ],
    saisTu: [
      "Le réseau électrique de la Jirama alimente des milliers de maisons montées en dérivation sur les mêmes lignes : chaque maison reçoit la même tension de 220 volts et fonctionne indépendamment de ses voisines. Ta maison est une « branche » du grand circuit du quartier !",
    ],
    experience: [
      "Si tu disposes d'une pile plate et de deux petites ampoules :",
      "1. Branche chaque ampoule directement sur les deux languettes de la pile, côte à côte (avec des fils).",
      "2. Observe : les deux ampoules brillent aussi fort qu'une ampoule seule.",
      "3. Enlève une ampoule : l'autre brille toujours.",
      "Conclusion : en dérivation, chaque ampoule est indépendante.",
    ],
  },
  substitutions: [
    { officiel: "Plaques de montage électrique", local: "Planchette en bois, punaises et trombones" },
    { officiel: "Fils à pinces crocodiles", local: "Fils électriques récupérés et dénudés" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. En dérivation, chaque lampe est branchée :  a) à la suite de l'autre   b) sur sa propre branche   c) sans fil",
        "2. Le nombre de boucles d'un montage de 2 lampes en dérivation est :  a) 1   b) 2   c) 0",
        "3. Une lampe en dérivation brille :  a) faiblement   b) normalement   c) par intermittence",
        "4. Le montage des maisons est :  a) en série   b) en dérivation   c) sans générateur",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "sur sa propre branche", cle: true }, { text: "." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "2 boucles", cle: true }, { text: ", une par lampe." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "normalement", cle: true }, { text: ", comme une lampe seule." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "en dérivation", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. En dérivation, une lampe grillée éteint toutes les autres.",
        "2. Les nœuds sont les points où les branches se rejoignent.",
        "3. Chaque lampe en dérivation peut avoir son propre interrupteur.",
        "4. Deux lampes en dérivation brillent plus faiblement qu'une lampe seule.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : les autres continuent de briller ; c'est en série qu'une lampe grillée éteint tout." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: " : c'est ainsi qu'on allume chaque pièce séparément." }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : elles brillent normalement." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : branche – dérivation – nœuds – boucles – normalement – indépendante.",
      items: [
        "En ………, chaque lampe est branchée sur sa propre ……… . Le circuit comporte plusieurs ……… qui se rejoignent aux ……… . Chaque lampe brille ……… et reste ……… des autres.",
      ],
      corrige: [
        [{ text: "En " }, { text: "dérivation", cle: true }, { text: ", chaque lampe est branchée sur sa propre " }, { text: "branche", cle: true }, { text: ". Le circuit comporte plusieurs " }, { text: "boucles", cle: true }, { text: " qui se rejoignent aux " }, { text: "nœuds", cle: true }, { text: ". Chaque lampe brille " }, { text: "normalement", cle: true }, { text: " et reste " }, { text: "indépendante", cle: true }, { text: " des autres." }],
      ],
    },
    {
      points: 6,
      consigne: "Compare les montages en série et en dérivation :",
      items: [
        "1. Donne deux différences entre les deux montages.",
        "2. Quel montage choisirais-tu pour éclairer deux pièces d'une maison ? Justifie.",
        "3. Pourquoi la lampe du salon de Naina reste-t-elle allumée quand celle de la cuisine grille ?",
      ],
      corrige: [
        [{ text: "1. En série : " }, { text: "une seule boucle, lampes faibles, une grillée éteint tout", cle: true }, { text: " ; en dérivation : " }, { text: "plusieurs boucles, éclat normal, lampes indépendantes", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "La dérivation", cle: true }, { text: " : chaque pièce s'allume séparément et une panne n'éteint pas l'autre." }],
        [{ text: "3. Parce que les lampes de la maison sont " }, { text: "en dérivation", cle: true }, { text: " : la boucle du salon n'est pas coupée." }],
      ],
    },
  ],
};

const S16 = {
  numero: 16, total: 34, unite: "II", theme: "Électricité et magnétisme",
  titre: "Comparaison des montages en série et en dérivation",
  objectif: "comparer les montages en série et en dérivation et choisir le montage adapté à une situation",
  documentation: DOC,
  support: "Deux montages préparés (série et dérivation), tableau de comparaison au tableau noir",
  image: "images/img_seance16.png",
  imageLegende: "Figure 16 — Montage en série (une boucle) et montage en dérivation (plusieurs boucles)",
  revision: {
    qa: [
      { q: "Qu'est-ce qu'un montage en dérivation ?", ra: "Un montage où chaque lampe a sa propre branche reliée aux bornes de la pile." },
      { q: "Comment brillent deux lampes en dérivation ?", ra: "Normalement, comme une lampe seule." },
      { q: "Quel montage utilise-t-on dans les maisons ?", ra: "Le montage en dérivation." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Mamy veut installer deux lampes sur sa bicyclette : une à l'avant et une à l'arrière, alimentées par la même dynamo. Son ami lui conseille la dérivation, son frère la série. Il hésite.",
      "Que risque-t-il s'il choisit la série et qu'une ampoule grille la nuit ?",
      "R.A. : Les deux lampes s'éteindront en même temps : il n'aura plus de lumière du tout.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Situation problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Comparaison des montages en série et en dérivation ». Après cette séance, vous serez capables de comparer les deux montages et de choisir le montage adapté à chaque situation.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien ces deux montages côte à côte : à gauche, deux lampes en série ; à droite, deux lampes en dérivation, avec la même pile. Comparez l'éclat des lampes. Je dévisse maintenant une lampe dans chaque montage.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, comparaison", support: "Deux montages (série et dérivation)",
  },
  analyse: {
    qa: [
      { q: "Dans quel montage les lampes brillent-elles le plus fort ?", ra: "En dérivation : elles brillent normalement ; en série, elles brillent faiblement." },
      { q: "Que se passe-t-il quand je dévisse une lampe du montage en série ?", ra: "L'autre s'éteint : la boucle unique est coupée." },
      { q: "Et dans le montage en dérivation ?", ra: "L'autre lampe continue de briller : sa boucle est intacte." },
      { q: "Quel montage consomme le moins de fils ?", ra: "Le montage en série." },
      { q: "Quel montage choisir pour la bicyclette de Mamy ? Pourquoi ?", ra: "La dérivation : si une lampe grille, l'autre continue d'éclairer." },
    ],
    technique: "Questions-réponses, comparaison", support: "Deux montages",
  },
  synthese: {
    enseignant: "Donc, les deux montages ont des propriétés opposées. En série : une seule boucle, le même courant partout, des lampes qui brillent faiblement et qui dépendent les unes des autres. En dérivation : plusieurs boucles, des lampes qui brillent normalement et qui sont indépendantes. On choisit la dérivation quand chaque récepteur doit fonctionner indépendamment, comme dans les maisons ; la série reste utile pour les montages simples et économiques.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Indique pour chaque propriété s'il s'agit du montage en série ou en dérivation :",
      items: [
        "a) Les lampes brillent normalement.",
        "b) Une seule boucle de courant.",
        "c) Les lampes sont indépendantes.",
        "d) Utilise moins de fils.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Dérivation", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Série", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Dérivation", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Série", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) En série, les lampes brillent plus fort qu'en dérivation.",
        "b) En dérivation, une lampe grillée n'éteint pas les autres.",
        "c) Le montage en série utilise plus de fils que la dérivation.",
        "d) Pour des lampes indépendantes, on choisit la dérivation.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Faux", cle: true }, { text: " : c'est l'inverse, elles brillent plus faiblement en série." }],
        [{ text: "b) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Faux", cle: true }, { text: " : la série utilise moins de fils." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, tableau de comparaison",
  evaluation: [
    {
      consigne: "Complète le tableau de comparaison en répondant :",
      items: [
        "a) Nombre de boucles : série ? dérivation ?",
        "b) Éclat des lampes : série ? dérivation ?",
        "c) Si une lampe grille : série ? dérivation ?",
        "d) Exemple d'utilisation : série ? dérivation ?",
      ],
      corrige: [
        [{ text: "a) Série : " }, { text: "1 boucle", cle: true }, { text: " ; dérivation : " }, { text: "plusieurs boucles", cle: true }, { text: "." }],
        [{ text: "b) Série : " }, { text: "éclat faible", cle: true }, { text: " ; dérivation : " }, { text: "éclat normal", cle: true }, { text: "." }],
        [{ text: "c) Série : " }, { text: "tout s'éteint", cle: true }, { text: " ; dérivation : " }, { text: "les autres brillent encore", cle: true }, { text: "." }],
        [{ text: "d) Série : " }, { text: "guirlande simple", cle: true }, { text: " ; dérivation : " }, { text: "installation d'une maison", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Pour chaque situation, choisis le montage adapté et justifie :",
      items: [
        "a) Éclairer les pièces d'une maison.",
        "b) Un jouet simple avec deux petites lampes décoratives qui s'allument ensemble.",
        "c) Les deux lampes de la bicyclette de Mamy.",
        "d) Des prises de courant dans une salle de classe.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Dérivation", cle: true }, { text: " : chaque pièce doit s'allumer indépendamment." }],
        [{ text: "b) " }, { text: "Série", cle: true }, { text: " : montage simple et économique, les lampes fonctionnent ensemble." }],
        [{ text: "c) " }, { text: "Dérivation", cle: true }, { text: " : si une lampe grille, l'autre éclaire encore." }],
        [{ text: "d) " }, { text: "Dérivation", cle: true }, { text: " : chaque prise doit fonctionner indépendamment." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["série", "dérivation", "indépendantes", "boucle"],
    sections: [
      {
        titre: "1. Tableau de comparaison",
        paras: [
          "Montage en série : une seule boucle ; le même courant traverse toutes les lampes ; éclat faible ; si une lampe grille, toutes s'éteignent ; moins de fils utilisés.",
          "Montage en dérivation : plusieurs boucles (une par lampe) ; éclat normal ; les lampes sont indépendantes ; si une lampe grille, les autres brillent encore ; plus de fils utilisés.",
        ],
      },
      {
        titre: "2. Quel montage choisir ?",
        puces: [
          "On choisit la dérivation quand chaque récepteur doit fonctionner indépendamment : lampes et prises d'une maison, éclairage d'une école, phares d'un véhicule.",
          "On peut choisir la série pour un montage très simple et économique où tous les récepteurs fonctionnent ensemble.",
        ],
        paras: [],
      },
      {
        titre: "3. À retenir pour la vie quotidienne",
        paras: [
          "Toutes les installations électriques domestiques sont en dérivation : c'est pour cela que chaque lampe a son interrupteur et que les appareils fonctionnent indépendamment les uns des autres.",
        ],
      },
    ],
    saisTu: [
      "Dans une voiture ou un taxi-brousse, tous les équipements électriques (phares, klaxon, essuie-glaces, autoradio) sont branchés en dérivation sur la même batterie de 12 volts : chacun fonctionne indépendamment, exactement comme les lampes d'une maison !",
    ],
    experience: [
      "Compare les deux montages avec une pile plate et deux ampoules :",
      "1. Monte les deux ampoules en série : note leur éclat, puis dévisse une ampoule.",
      "2. Monte les deux ampoules en dérivation : note leur éclat, puis dévisse une ampoule.",
      "3. Écris tes observations dans un tableau à deux colonnes « série / dérivation ».",
    ],
  },
  substitutions: [
    { officiel: "Deux jeux de montage complets", local: "Un seul jeu remonté successivement en série puis en dérivation" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Le montage où les lampes brillent le plus fort est :  a) la série   b) la dérivation   c) les deux pareillement",
        "2. Le montage le plus économique en fils est :  a) la série   b) la dérivation   c) aucun des deux",
        "3. Dans une école, les lampes des salles sont montées :  a) en série   b) en dérivation   c) sans interrupteur",
        "4. En série, si une lampe grille :  a) les autres brillent plus fort   b) toutes s'éteignent   c) rien ne change",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "la dérivation", cle: true }, { text: " : chaque lampe brille normalement." }],
        [{ text: "2. Réponse a) : ", bold: true }, { text: "la série", cle: true }, { text: "." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "en dérivation", cle: true }, { text: "." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "toutes s'éteignent", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. En dérivation, le circuit comporte plusieurs boucles.",
        "2. La série est le montage des installations domestiques.",
        "3. En dérivation, chaque lampe peut avoir son interrupteur.",
        "4. En série, les lampes sont indépendantes les unes des autres.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Faux", cle: true }, { text: " : les maisons sont câblées en dérivation." }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : en série, elles dépendent les unes des autres ; c'est en dérivation qu'elles sont indépendantes." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : dérivation – série – normalement – faiblement – indépendantes – boucle.",
      items: [
        "En ………, les lampes sont sur une seule ……… et brillent ……… . En ………, chaque lampe a sa branche : elles brillent ……… et sont ……… .",
      ],
      corrige: [
        [{ text: "En " }, { text: "série", cle: true }, { text: ", les lampes sont sur une seule " }, { text: "boucle", cle: true }, { text: " et brillent " }, { text: "faiblement", cle: true }, { text: ". En " }, { text: "dérivation", cle: true }, { text: ", chaque lampe a sa branche : elles brillent " }, { text: "normalement", cle: true }, { text: " et sont " }, { text: "indépendantes", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Observe la figure 16 en tête de la leçon, puis réponds :",
      items: [
        "1. Quel montage est représenté à gauche ? À droite ? Justifie.",
        "2. Dans quel montage L1 et L2 s'éteignent-elles ensemble si L1 grille ?",
        "3. Mamy choisit finalement la dérivation pour sa bicyclette. A-t-il raison ? Explique.",
      ],
      corrige: [
        [{ text: "1. À gauche : " }, { text: "la série (une boucle unique)", cle: true }, { text: " ; à droite : " }, { text: "la dérivation (deux branches et des nœuds)", cle: true }, { text: "." }],
        [{ text: "2. Dans le " }, { text: "montage en série", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Oui", cle: true }, { text: " : en dérivation, si une lampe grille la nuit, " }, { text: "l'autre continue d'éclairer", cle: true }, { text: " : c'est plus sûr." }],
      ],
    },
  ],
};

const S17 = {
  numero: 17, total: 34, unite: "II", theme: "Électricité et magnétisme",
  titre: "La protection par fusible",
  objectif: "définir le rôle du fusible dans un circuit électrique",
  documentation: DOC,
  support: "Fusibles usagés et neufs, schéma de circuit avec fusible, fil fin d'acier de paille de fer",
  image: "images/img_seance17.png",
  imageLegende: "Figure 17 — Un circuit protégé par un fusible : si le courant est trop fort, le fil du fusible fond",
  revision: {
    qa: [
      { q: "Quel montage rend les lampes indépendantes ?", ra: "Le montage en dérivation." },
      { q: "Dans quel montage une lampe grillée éteint-elle toutes les autres ?", ra: "Dans le montage en série." },
      { q: "Quel montage utilise-t-on dans les maisons ?", ra: "La dérivation." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Un soir, chez Hanta, trop d'appareils étaient branchés sur la même prise : le fer à repasser, la bouilloire et le réchaud. Soudain, tout s'est éteint dans la maison. Le père de Hanta a dit : « C'est le fusible qui a sauté, heureusement ! »",
      "Pourquoi le père de Hanta dit-il « heureusement » ?",
      "R.A. : Parce que le fusible a coupé le courant avant que les fils ne chauffent trop et ne provoquent un incendie.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La protection par fusible ». Après cette séance, vous serez capables d'expliquer le rôle du fusible et de dire pourquoi il protège le circuit et la maison.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien ces fusibles : celui-ci est neuf, on voit son fil fin intact à l'intérieur ; celui-là a « sauté », son fil est fondu et coupé. Observez aussi le schéma du circuit avec le symbole du fusible.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, analyse technologique", support: "Fusibles neuf et usagé, schéma",
  },
  analyse: {
    qa: [
      { q: "Que voit-on à l'intérieur d'un fusible ?", ra: "Un fil très fin." },
      { q: "Que devient ce fil quand le courant est trop fort ?", ra: "Il chauffe et fond : le circuit est coupé." },
      { q: "Pourquoi dit-on que le fusible protège le circuit ?", ra: "Parce qu'il coupe le courant avant que les fils ne surchauffent et ne provoquent un incendie." },
      { q: "Quand le courant devient-il trop fort ?", ra: "Quand trop d'appareils fonctionnent en même temps, ou lors d'un court-circuit." },
      { q: "Que faut-il faire quand un fusible a sauté ?", ra: "Chercher la cause, débrancher des appareils, puis remplacer le fusible par un fusible du même calibre." },
    ],
    technique: "Questions-réponses, analyse technologique", support: "Fusibles, schéma",
  },
  synthese: {
    enseignant: "Donc, le fusible est un petit appareil de protection placé dans le circuit. Il contient un fil fin qui fond quand le courant devient trop fort, par exemple en cas de surcharge ou de court-circuit. En fondant, il ouvre le circuit et coupe le courant : il protège ainsi les fils, les appareils et la maison contre l'échauffement et l'incendie. Un fusible qui a sauté doit être remplacé par un fusible du même calibre, jamais par un fil quelconque.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Le fusible contient un fil fin qui fond si le courant est trop fort.",
        "b) Un fusible qui a sauté peut être remplacé par un gros fil de cuivre.",
        "c) Le fusible protège la maison contre les incendies électriques.",
        "d) Le courant devient trop fort quand trop d'appareils fonctionnent en même temps.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : il faut un fusible du même calibre ; un gros fil ne fondrait pas et ne protégerait plus rien." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: " : c'est la surcharge." }],
      ],
    },
    {
      consigne: "Remets dans l'ordre les étapes de la protection par fusible :",
      items: [
        "a) Le fil du fusible fond.",
        "b) Trop d'appareils sont branchés : le courant devient trop fort.",
        "c) Le courant est coupé, le circuit est protégé.",
        "d) Le fil fin du fusible chauffe.",
      ],
      corrige: [
        [{ text: "Ordre correct : " }, { text: "b → d → a → c", cle: true }, { text: "." }],
        [{ text: "b) Le courant devient trop fort ; d) le fil du fusible " }, { text: "chauffe", cle: true }, { text: " ; a) il " }, { text: "fond", cle: true }, { text: " ; c) le circuit est " }, { text: "coupé et protégé", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail individuel sur ardoise", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Qu'y a-t-il à l'intérieur d'un fusible ?",
        "b) Que fait le fusible quand le courant devient trop fort ?",
        "c) Contre quels dangers le fusible protège-t-il ?",
        "d) Pourquoi ne faut-il jamais remplacer un fusible par un fil quelconque ?",
      ],
      corrige: [
        [{ text: "a) Un " }, { text: "fil très fin", cle: true }, { text: " qui fond facilement." }],
        [{ text: "b) Son fil " }, { text: "fond et ouvre le circuit", cle: true }, { text: " : le courant est coupé." }],
        [{ text: "c) Contre " }, { text: "l'échauffement des fils et l'incendie", cle: true }, { text: "." }],
        [{ text: "d) Parce qu'un fil quelconque " }, { text: "ne fondrait pas au bon moment", cle: true }, { text: " : le circuit ne serait plus protégé." }],
      ],
    },
    {
      consigne: "Choisis la bonne réponse :",
      items: [
        "a) Le fusible se place :  1) dans le circuit   2) à côté du circuit   3) sur la lampe",
        "b) Le fil du fusible fond quand :  1) le courant est trop faible   2) le courant est trop fort   3) il pleut",
        "c) Un fusible qui a sauté doit être remplacé par :  1) un fil de cuivre épais   2) un fusible de même calibre   3) du papier aluminium",
        "d) La surcharge se produit quand :  1) trop d'appareils fonctionnent ensemble   2) on éteint tout   3) le circuit est ouvert",
      ],
      corrige: [
        [{ text: "a) Réponse 1) : " }, { text: "dans le circuit", cle: true }, { text: "." }],
        [{ text: "b) Réponse 2) : " }, { text: "le courant est trop fort", cle: true }, { text: "." }],
        [{ text: "c) Réponse 2) : " }, { text: "un fusible de même calibre", cle: true }, { text: "." }],
        [{ text: "d) Réponse 1) : " }, { text: "trop d'appareils fonctionnent ensemble", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["fusible", "surcharge", "court-circuit", "fond", "protection"],
    sections: [
      {
        titre: "1. Qu'est-ce qu'un fusible ?",
        paras: [
          "Le fusible est un petit appareil de protection contenant un fil très fin. Il est placé dans le circuit, en série, généralement près du compteur ou dans les appareils.",
        ],
      },
      {
        titre: "2. Comment protège-t-il le circuit ?",
        paras: ["Quand le courant devient trop fort :"],
        puces: [
          "le fil fin du fusible chauffe rapidement ;",
          "il fond et se coupe : on dit que le fusible « saute » ;",
          "le circuit est alors ouvert : le courant ne circule plus.",
        ],
      },
      {
        titre: "3. Quand le courant devient-il trop fort ?",
        puces: [
          "En cas de surcharge : trop d'appareils puissants fonctionnent en même temps sur le même circuit ;",
          "En cas de court-circuit : les deux fils se touchent directement, sans passer par un récepteur.",
        ],
        paras: [],
      },
      {
        titre: "4. Remplacer un fusible",
        paras: [
          "Un fusible qui a sauté a fait son travail : il a protégé le circuit. Avant de le remplacer, il faut chercher la cause (débrancher des appareils, faire réparer le court-circuit), puis mettre un fusible du même calibre. Ne jamais le remplacer par un fil de cuivre ou un objet métallique : le circuit ne serait plus protégé et un incendie deviendrait possible.",
        ],
      },
    ],
    saisTu: [
      "Dans les installations modernes, le fusible est souvent remplacé par un disjoncteur : au lieu de fondre, il se déclenche comme un interrupteur automatique quand le courant est trop fort. Avantage : on peut le réarmer d'un simple geste, sans rien remplacer !",
    ],
    experience: [
      "Observation uniquement, avec un adulte — ne touche jamais au tableau électrique seul :",
      "1. Demande à un adulte de te montrer les fusibles ou le disjoncteur de la maison.",
      "2. Observe un fusible transparent : repère le fil fin à l'intérieur.",
      "3. Compare un fusible neuf et un fusible sauté si possible : le fil du second est coupé.",
    ],
  },
  substitutions: [
    { officiel: "Fusibles de démonstration", local: "Fusibles usagés récupérés chez un électricien ou un vulcanisateur" },
    { officiel: "Maquette de circuit avec fusible", local: "Schéma au tableau + fil fin de paille de fer montré (sans le faire fondre en classe)" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Le rôle du fusible est de :  a) faire briller la lampe   b) protéger le circuit   c) fournir le courant",
        "2. Quand le courant est trop fort, le fil du fusible :  a) fond   b) grossit   c) devient plus long",
        "3. Un court-circuit se produit quand :  a) le circuit est ouvert   b) les deux fils se touchent directement   c) la pile est usée",
        "4. Après avoir sauté, un fusible doit être :  a) réparé avec du fil de fer   b) remplacé par un fusible de même calibre   c) laissé tel quel",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "protéger le circuit", cle: true }, { text: "." }],
        [{ text: "2. Réponse a) : ", bold: true }, { text: "il fond", cle: true }, { text: " et coupe le circuit." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "les deux fils se touchent directement", cle: true }, { text: ", sans passer par un récepteur." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "remplacé par un fusible de même calibre", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Le fusible contient un fil épais qui ne fond jamais.",
        "2. La surcharge se produit quand trop d'appareils fonctionnent ensemble.",
        "3. Un fusible sauté signifie qu'il a protégé le circuit.",
        "4. On peut remplacer un fusible par du papier d'aluminium.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : il contient un fil très fin qui fond quand le courant est trop fort." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: " : il a coupé le courant à temps." }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : c'est très dangereux, le circuit ne serait plus protégé." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : fond – incendie – fusible – surcharge – calibre – coupe.",
      items: [
        "Le ……… protège le circuit. En cas de ……… ou de court-circuit, son fil fin ……… et ……… le courant. Il évite ainsi l'……… . On le remplace toujours par un fusible du même ……… .",
      ],
      corrige: [
        [{ text: "Le " }, { text: "fusible", cle: true }, { text: " protège le circuit. En cas de " }, { text: "surcharge", cle: true }, { text: " ou de court-circuit, son fil fin " }, { text: "fond", cle: true }, { text: " et " }, { text: "coupe", cle: true }, { text: " le courant. Il évite ainsi l'" }, { text: "incendie", cle: true }, { text: ". On le remplace toujours par un fusible du même " }, { text: "calibre", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Chez Hanta, le fusible a sauté quand le fer à repasser, la bouilloire et le réchaud fonctionnaient ensemble.",
      items: [
        "1. Comment appelle-t-on cette situation ?",
        "2. Décris ce qui s'est passé à l'intérieur du fusible.",
        "3. Que doit faire la famille de Hanta avant de remettre le courant ?",
      ],
      corrige: [
        [{ text: "1. Une " }, { text: "surcharge", cle: true }, { text: " : trop d'appareils puissants sur le même circuit." }],
        [{ text: "2. Le fil fin a " }, { text: "chauffé puis fondu", cle: true }, { text: ", ce qui a " }, { text: "ouvert le circuit", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Débrancher des appareils", cle: true }, { text: ", puis " }, { text: "remplacer le fusible par un de même calibre", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S18 = {
  numero: 18, total: 34, unite: "II", theme: "Électricité et magnétisme",
  titre: "Les dangers du courant du secteur",
  objectif: "identifier les dangers du courant du secteur et appliquer les mesures de sécurité",
  documentation: DOC,
  support: "Affiche de sécurité électrique, images de situations dangereuses",
  image: "images/img_seance18.png",
  imageLegende: "Figure 18 — Trois règles de sécurité : ne pas toucher les prises, pas d'électricité près de l'eau, ne pas toucher un fil dénudé",
  revision: {
    qa: [
      { q: "Quel est le rôle du fusible ?", ra: "Protéger le circuit : son fil fond et coupe le courant quand celui-ci est trop fort." },
      { q: "Qu'est-ce qu'une surcharge ?", ra: "Trop d'appareils puissants qui fonctionnent en même temps sur le même circuit." },
      { q: "Par quoi remplace-t-on un fusible qui a sauté ?", ra: "Par un fusible du même calibre." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Le petit frère de Faly, âgé de deux ans, s'approche d'une prise de courant avec un clou à la main. Faly le voit et l'arrête juste à temps.",
      "Quel danger le petit frère courait-il ?",
      "R.A. : L'électrocution : le courant du secteur peut blesser gravement ou tuer.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Les dangers du courant du secteur ». Après cette séance, vous serez capables d'identifier les situations dangereuses et d'appliquer les règles de sécurité électrique.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien cette affiche de sécurité : un doigt devant une prise barrée, un appareil électrique près de l'eau barré, un fil dénudé barré.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, étude documentaire", support: "Affiche de sécurité électrique",
  },
  analyse: {
    qa: [
      { q: "Quelle est la tension du courant du secteur à Madagascar ?", ra: "220 volts : elle est très dangereuse pour le corps humain." },
      { q: "Pourquoi la pile de 4,5 V n'est-elle pas dangereuse alors que le secteur l'est ?", ra: "Parce que sa tension est très faible ; celle du secteur est presque 50 fois plus grande." },
      { q: "Que risque une personne qui touche un fil dénudé sous tension ?", ra: "L'électrisation ou l'électrocution : le courant traverse son corps." },
      { q: "Pourquoi l'eau augmente-t-elle le danger ?", ra: "Parce que l'eau conduit le courant : le corps mouillé laisse passer le courant encore plus facilement." },
      { q: "Que faire si une personne est électrisée ?", ra: "Ne jamais la toucher directement : couper d'abord le courant, puis appeler un adulte et les secours." },
    ],
    technique: "Questions-réponses, étude de situations", support: "Affiche de sécurité",
  },
  synthese: {
    enseignant: "Donc, le courant du secteur, de tension 220 volts, est très dangereux : il peut provoquer des brûlures, l'électrisation, l'électrocution, et des incendies. Pour se protéger, il faut respecter les règles de sécurité : ne jamais mettre les doigts ou un objet dans une prise, ne jamais toucher un fil dénudé, ne jamais utiliser un appareil électrique avec les mains mouillées ou près de l'eau, ne jamais toucher directement une personne électrisée : il faut d'abord couper le courant.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Le courant du secteur a une tension de 220 V.",
        "b) On peut toucher une prise avec les mains mouillées si on fait vite.",
        "c) Une pile de 4,5 V est aussi dangereuse que le secteur.",
        "d) L'eau conduit le courant électrique.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : jamais, l'eau augmente le danger d'électrocution." }],
        [{ text: "c) " }, { text: "Faux", cle: true }, { text: " : sa tension est trop faible pour être dangereuse ; le secteur est presque 50 fois plus élevé." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: " : c'est pourquoi eau et électricité ne doivent jamais se rencontrer." }],
      ],
    },
    {
      consigne: "Pour chaque situation, dis si elle est dangereuse et pourquoi :",
      items: [
        "a) Brancher un téléphone avec les mains sèches.",
        "b) Enfoncer un clou dans une prise.",
        "c) Utiliser une bouilloire électrique posée au bord de l'évier plein d'eau.",
        "d) Débrancher un appareil en tirant sur la prise, pas sur le fil.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Sans danger", cle: true }, { text: " : geste normal avec les mains sèches." }],
        [{ text: "b) " }, { text: "Très dangereux", cle: true }, { text: " : risque d'électrocution." }],
        [{ text: "c) " }, { text: "Dangereux", cle: true }, { text: " : l'appareil peut tomber dans l'eau, qui conduit le courant." }],
        [{ text: "d) " }, { text: "Sans danger", cle: true }, { text: " : c'est le bon geste ; tirer sur le fil l'abîmerait et pourrait le dénuder." }],
      ],
    },
  ],
  applicationTechnique: "Travail de groupe, discussion", applicationSupport: "Affiche, ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : couper – électrocution – 220 – dénudé – mouillées – conduit.",
      items: [
        "a) Le secteur a une tension de ……… volts : il peut provoquer l'……… .",
        "b) Il ne faut jamais toucher un fil ……… ni manipuler un appareil avec les mains ……… .",
        "c) L'eau ……… le courant. Avant de toucher une personne électrisée, il faut ……… le courant.",
      ],
      corrige: [
        [{ text: "a) Le secteur a une tension de " }, { text: "220", cle: true }, { text: " volts : il peut provoquer l'" }, { text: "électrocution", cle: true }, { text: "." }],
        [{ text: "b) Il ne faut jamais toucher un fil " }, { text: "dénudé", cle: true }, { text: " ni manipuler un appareil avec les mains " }, { text: "mouillées", cle: true }, { text: "." }],
        [{ text: "c) L'eau " }, { text: "conduit", cle: true }, { text: " le courant. Avant de toucher une personne électrisée, il faut " }, { text: "couper", cle: true }, { text: " le courant." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Cite trois dangers du courant du secteur.",
        "b) Cite trois règles de sécurité électrique.",
        "c) Que faire en premier si quelqu'un est électrisé ?",
        "d) Pourquoi ne faut-il pas réparer soi-même une prise ?",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Les brûlures, l'électrocution et l'incendie", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Ne rien enfoncer dans une prise ; ne pas toucher un fil dénudé ; ne pas utiliser d'appareil électrique près de l'eau", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Couper le courant", cle: true }, { text: " (disjoncteur), sans toucher la personne, puis appeler les secours." }],
        [{ text: "d) Parce que c'est le travail d'un " }, { text: "électricien qualifié", cle: true }, { text: " : un enfant ou un adulte non formé risque l'électrocution." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["secteur", "220 volts", "électrisation", "électrocution", "fil dénudé", "sécurité"],
    sections: [
      {
        titre: "1. Le courant du secteur est dangereux",
        paras: [
          "Le courant du secteur, distribué par la Jirama, a une tension de 220 volts. Contrairement au courant d'une pile (1,5 V ou 4,5 V), il est très dangereux pour le corps humain.",
          "Ses dangers :",
        ],
        puces: [
          "l'électrisation : le courant traverse le corps et provoque des blessures et des brûlures ;",
          "l'électrocution : électrisation mortelle ;",
          "l'incendie : des fils abîmés ou surchargés peuvent mettre le feu à la maison.",
        ],
      },
      {
        titre: "2. Les règles de sécurité",
        puces: [
          "Ne jamais mettre les doigts ni un objet dans une prise de courant.",
          "Ne jamais toucher un fil dénudé ou abîmé.",
          "Ne jamais utiliser un appareil électrique avec les mains mouillées, ni près de l'eau.",
          "Débrancher un appareil en tirant sur la fiche, jamais sur le fil.",
          "Ne jamais réparer soi-même une installation : appeler un électricien.",
        ],
        paras: [],
      },
      {
        titre: "3. Que faire en cas d'accident ?",
        puces: [
          "Ne jamais toucher directement une personne électrisée : le courant passerait aussi dans ton corps.",
          "Couper immédiatement le courant au disjoncteur.",
          "Appeler un adulte et les secours.",
        ],
        paras: [],
      },
    ],
    saisTu: [
      "Le corps humain est conducteur d'électricité, surtout quand la peau est mouillée. Un courant de quelques dizaines de milliampères seulement — mille fois moins que celui d'un fer à repasser — peut déjà être mortel. C'est pourquoi aucune règle de sécurité n'est exagérée !",
    ],
    experience: [
      "Pas d'expérience avec le secteur — jamais ! À la place, une mission de sécurité :",
      "1. Avec un adulte, fais le tour de la maison et repère les dangers : fils abîmés, prises cassées, multiprises surchargées.",
      "2. Dessine un plan de la maison et marque d'une croix rouge les points dangereux.",
      "3. Présente ta liste à ta famille pour que les réparations soient faites par un électricien.",
    ],
  },
  substitutions: [
    { officiel: "Affiche de sécurité imprimée", local: "Affiche dessinée par la classe avec les trois interdits en rouge" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. La tension du secteur à Madagascar est :  a) 4,5 V   b) 12 V   c) 220 V",
        "2. L'électrisation mortelle s'appelle :  a) l'électrocution   b) la surcharge   c) le court-circuit",
        "3. Avant de toucher une personne électrisée, il faut :  a) la tirer par le bras   b) couper le courant   c) lui verser de l'eau",
        "4. On débranche un appareil en tirant sur :  a) le fil   b) la fiche   c) l'appareil",
      ],
      corrige: [
        [{ text: "1. Réponse c) : ", bold: true }, { text: "220 V", cle: true }, { text: "." }],
        [{ text: "2. Réponse a) : ", bold: true }, { text: "l'électrocution", cle: true }, { text: "." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "couper le courant", cle: true }, { text: " : sinon le courant te traverserait aussi." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "la fiche", cle: true }, { text: " : tirer sur le fil peut le dénuder." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Une pile de 4,5 V peut électrocuter une personne.",
        "2. L'eau augmente le danger du courant électrique.",
        "3. Un fil dénudé sous tension peut être touché sans danger s'il ne fait pas d'étincelles.",
        "4. Le courant du secteur peut provoquer des incendies.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : sa tension est bien trop faible ; c'est le secteur (220 V) qui est mortel." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: " : l'eau conduit le courant." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : un fil sous tension est dangereux même sans étincelles." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: " : fils abîmés ou surchargés peuvent mettre le feu." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : secours – électrisation – 220 – prise – couper – mouillées.",
      items: [
        "Le courant du secteur (……… V) peut provoquer l'……… . Ne mets jamais un objet dans une ………, et ne touche jamais un appareil avec les mains ……… . En cas d'accident : ……… le courant, puis appeler les ……… .",
      ],
      corrige: [
        [{ text: "Le courant du secteur (" }, { text: "220", cle: true }, { text: " V) peut provoquer l'" }, { text: "électrisation", cle: true }, { text: ". Ne mets jamais un objet dans une " }, { text: "prise", cle: true }, { text: ", et ne touche jamais un appareil avec les mains " }, { text: "mouillées", cle: true }, { text: ". En cas d'accident : " }, { text: "couper", cle: true }, { text: " le courant, puis appeler les " }, { text: "secours", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Observe la figure 18 en tête de la leçon, puis réponds :",
      items: [
        "1. Décris les trois interdictions représentées.",
        "2. Pour chacune, explique le danger évité.",
        "3. Propose une quatrième règle de sécurité électrique non représentée sur la figure.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Ne pas toucher les trous d'une prise ; pas d'appareil électrique près de l'eau ; ne pas toucher un fil dénudé", cle: true }, { text: "." }],
        [{ text: "2. Les trois évitent " }, { text: "l'électrisation et l'électrocution", cle: true }, { text: " ; l'eau et le fil dénudé laissent le courant traverser le corps." }],
        [{ text: "3. Par exemple : " }, { text: "débrancher en tirant sur la fiche", cle: true }, { text: ", ou ne jamais réparer soi-même une installation." }],
      ],
    },
  ],
};

const S19 = {
  numero: 19, total: 34, unite: "II", theme: "Électricité et magnétisme",
  titre: "Les pannes dans un circuit électrique",
  objectif: "identifier les pannes dans un circuit électrique : coupure, mauvaise connexion, lampe grillée",
  documentation: DOC,
  support: "Circuit pile-lampe avec pannes préparées, lampe grillée, fil coupé",
  image: "images/img_seance19.png",
  imageLegende: "Figure 19 — Deux pannes courantes : le fil coupé et la lampe grillée",
  revision: {
    qa: [
      { q: "Quelle est la tension du courant du secteur ?", ra: "220 volts." },
      { q: "Cite deux règles de sécurité électrique.", ra: "Ne rien enfoncer dans une prise ; ne pas utiliser d'appareil électrique près de l'eau." },
      { q: "Que faire d'abord si une personne est électrisée ?", ra: "Couper le courant, sans toucher la personne." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "La lampe de poche de Tahina ne s'allume plus. Il se demande : est-ce la pile usée ? L'ampoule grillée ? Un mauvais contact ?",
      "Comment Tahina peut-il trouver la panne ?",
      "R.A. : En vérifiant un à un chaque élément : la pile, l'ampoule, les contacts.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Situation problème", support: "Lampe de poche",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Les pannes dans un circuit électrique ». Après cette séance, vous serez capables d'identifier une coupure, une mauvaise connexion ou une lampe grillée, et de réparer la panne.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien ces trois circuits en panne : dans le premier, un fil est coupé ; dans le deuxième, un fil est mal branché sur la borne ; dans le troisième, la lampe est grillée : regardez son filament cassé à travers le verre.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, analyse technologique", support: "Trois circuits en panne préparés",
  },
  analyse: {
    qa: [
      { q: "Pourquoi la lampe du premier circuit est-elle éteinte ?", ra: "Un fil est coupé : le circuit est ouvert, le courant ne circule pas." },
      { q: "Et dans le deuxième circuit ?", ra: "Un fil est mal branché : c'est une mauvaise connexion, le courant ne passe pas bien." },
      { q: "Comment reconnaît-on une lampe grillée ?", ra: "Son filament est cassé : on le voit à travers le verre, ou on la teste dans un circuit qui fonctionne." },
      { q: "Comment trouver une panne dans un circuit ?", ra: "En vérifiant chaque élément un par un : la pile, les fils, les connexions, la lampe." },
      { q: "Comment réparer chaque panne ?", ra: "Remplacer ou reconnecter le fil, resserrer la connexion, remplacer la lampe grillée ou la pile usée." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Circuits en panne",
  },
  synthese: {
    enseignant: "Donc, si une lampe ne s'allume plus, le circuit a une panne. Les pannes courantes sont : la coupure d'un fil, qui ouvre le circuit ; la mauvaise connexion, quand un fil est mal branché ou desserré ; la lampe grillée, dont le filament est cassé ; et la pile usée. Pour trouver la panne, on vérifie méthodiquement chaque élément un par un, puis on répare : rebrancher ou remplacer le fil, resserrer la connexion, changer la lampe ou la pile.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Associe chaque observation à la panne correspondante : coupure, mauvaise connexion, lampe grillée, pile usée.",
      items: [
        "a) Le filament de l'ampoule est cassé.",
        "b) Un fil est sectionné en deux.",
        "c) Le fil bouge sur la borne et la lampe clignote.",
        "d) La lampe neuve ne brille pas, même avec de bonnes connexions.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Lampe grillée", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Coupure", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Mauvaise connexion", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Pile usée", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Un fil coupé ouvre le circuit.",
        "b) Une lampe qui clignote peut indiquer une mauvaise connexion.",
        "c) Une lampe grillée peut être réparée en la secouant.",
        "d) Pour trouver une panne, on vérifie les éléments un par un.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: " : le courant ne circule plus." }],
        [{ text: "b) " }, { text: "Vrai", cle: true }, { text: " : le contact se fait et se défait." }],
        [{ text: "c) " }, { text: "Faux", cle: true }, { text: " : un filament cassé ne se répare pas, il faut remplacer la lampe." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: " : c'est la méthode du dépannage." }],
      ],
    },
  ],
  applicationTechnique: "Travail de groupe", applicationSupport: "Circuits en panne, ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : filament – connexion – coupure – un par un – grillée – ouvert.",
      items: [
        "a) Une ……… de fil rend le circuit ……… .",
        "b) Une lampe est ……… quand son ……… est cassé.",
        "c) Un fil desserré provoque une mauvaise ……… . Pour trouver la panne, on vérifie les éléments ……… .",
      ],
      corrige: [
        [{ text: "a) Une " }, { text: "coupure", cle: true }, { text: " de fil rend le circuit " }, { text: "ouvert", cle: true }, { text: "." }],
        [{ text: "b) Une lampe est " }, { text: "grillée", cle: true }, { text: " quand son " }, { text: "filament", cle: true }, { text: " est cassé." }],
        [{ text: "c) Un fil desserré provoque une mauvaise " }, { text: "connexion", cle: true }, { text: ". Pour trouver la panne, on vérifie les éléments " }, { text: "un par un", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "La lampe de poche de Tahina ne s'allume plus. Décris les quatre vérifications qu'il doit faire, dans l'ordre, et la réparation correspondante.",
      items: [],
      corrige: [
        [{ text: "1. Vérifier " }, { text: "la pile", cle: true }, { text: " (l'essayer dans une autre lampe) → la remplacer si elle est usée." }],
        [{ text: "2. Vérifier " }, { text: "l'ampoule", cle: true }, { text: " (filament cassé ?) → remplacer l'ampoule grillée." }],
        [{ text: "3. Vérifier " }, { text: "les contacts et connexions", cle: true }, { text: " → nettoyer et resserrer." }],
        [{ text: "4. Vérifier " }, { text: "les lamelles ou fils internes", cle: true }, { text: " (coupure) → rebrancher ou remplacer." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["panne", "coupure", "mauvaise connexion", "lampe grillée", "filament"],
    sections: [
      {
        titre: "1. Les pannes courantes d'un circuit",
        puces: [
          "La coupure : un fil est sectionné ou débranché ; le circuit est ouvert et le courant ne circule plus.",
          "La mauvaise connexion : un fil est mal branché, desserré ou sale ; le courant passe mal ou par intermittence (la lampe clignote).",
          "La lampe grillée : son filament est cassé ; on le voit parfois à travers le verre de l'ampoule.",
          "La pile usée : elle ne fournit plus assez de courant.",
        ],
        paras: [],
      },
      {
        titre: "2. La méthode de recherche de panne",
        paras: ["Comme un vrai électricien, on procède méthodiquement, en vérifiant un élément à la fois :"],
        puces: [
          "1. Tester la pile dans un autre circuit qui fonctionne.",
          "2. Tester la lampe dans un autre circuit, ou observer son filament.",
          "3. Vérifier chaque connexion : le fil est-il bien serré sur la borne ?",
          "4. Suivre chaque fil du regard pour repérer une coupure.",
        ],
      },
      {
        titre: "3. Réparer la panne",
        paras: [
          "Une fois la panne trouvée : remplacer la pile usée ou la lampe grillée, resserrer ou nettoyer la mauvaise connexion, remplacer ou rebrancher le fil coupé. Attention : on ne répare soi-même que les circuits à pile ; les pannes du secteur sont réservées à l'électricien.",
        ],
      },
    ],
    saisTu: [
      "Les techniciens utilisent un appareil appelé multimètre pour trouver les pannes sans démonter tout le circuit : il détecte si le courant passe entre deux points. En position « test de continuité », il émet un bip quand le fil n'est pas coupé !",
    ],
    experience: [
      "Jeu du dépanneur (avec une pile plate, une ampoule et des fils) :",
      "1. Demande à un camarade de préparer une panne en cachette : fil débranché, ampoule dévissée…",
      "2. À toi de trouver la panne le plus vite possible, en vérifiant chaque élément un par un.",
      "3. Échangez les rôles. Le meilleur dépanneur est celui qui utilise la méthode la plus logique !",
    ],
  },
  substitutions: [
    { officiel: "Multimètre", local: "Circuit-témoin pile+ampoule pour tester chaque élément" },
    { officiel: "Lampes de rechange", local: "Ampoules récupérées de lampes de poche usagées" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Un circuit avec un fil coupé est un circuit :  a) fermé   b) ouvert   c) en surcharge",
        "2. Une lampe grillée a :  a) un filament cassé   b) un verre sale   c) un culot brillant",
        "3. Une lampe qui clignote indique souvent :  a) une pile neuve   b) une mauvaise connexion   c) un circuit parfait",
        "4. Pour trouver une panne, on vérifie les éléments :  a) tous en même temps   b) un par un   c) au hasard",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "ouvert", cle: true }, { text: " : le courant ne circule plus." }],
        [{ text: "2. Réponse a) : ", bold: true }, { text: "un filament cassé", cle: true }, { text: "." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "une mauvaise connexion", cle: true }, { text: " : le contact se fait et se défait." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "un par un", cle: true }, { text: ", méthodiquement." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Une pile usée est une panne possible du circuit.",
        "2. On peut réparer un filament cassé avec de la colle.",
        "3. Un fil desserré sur une borne provoque une mauvaise connexion.",
        "4. Un élève peut réparer lui-même une panne du courant du secteur.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Faux", cle: true }, { text: " : une lampe grillée doit être remplacée." }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : les pannes du secteur sont réservées à l'électricien ; l'élève ne dépanne que les circuits à pile." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : clignote – grillée – coupure – ouvert – connexion – filament.",
      items: [
        "Une ……… de fil rend le circuit ……… . Quand la lampe ………, il y a souvent une mauvaise ……… . Une lampe ……… a son ……… cassé.",
      ],
      corrige: [
        [{ text: "Une " }, { text: "coupure", cle: true }, { text: " de fil rend le circuit " }, { text: "ouvert", cle: true }, { text: ". Quand la lampe " }, { text: "clignote", cle: true }, { text: ", il y a souvent une mauvaise " }, { text: "connexion", cle: true }, { text: ". Une lampe " }, { text: "grillée", cle: true }, { text: " a son " }, { text: "filament", cle: true }, { text: " cassé." }],
      ],
    },
    {
      points: 6,
      consigne: "Observe la figure 19 en tête de la leçon, puis réponds :",
      items: [
        "1. Quelles sont les deux pannes représentées sur le schéma ?",
        "2. Pour chaque panne, indique la réparation qui convient.",
        "3. La lampe reste éteinte après remplacement de l'ampoule et réparation du fil. Quelle autre cause faut-il vérifier ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Le fil coupé et la lampe grillée", cle: true }, { text: "." }],
        [{ text: "2. Fil coupé : " }, { text: "rebrancher ou remplacer le fil", cle: true }, { text: " ; lampe grillée : " }, { text: "remplacer l'ampoule", cle: true }, { text: "." }],
        [{ text: "3. Il faut vérifier " }, { text: "la pile (peut-être usée) et les connexions", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S20 = {
  numero: 20, total: 34, unite: "II", theme: "Électricité et magnétisme",
  titre: "Intensité et tension : mesures dans un circuit",
  objectif: "mesurer l'intensité et la tension dans un circuit électrique simple avec l'ampèremètre et le voltmètre",
  documentation: DOC,
  support: "Circuit pile-lampe, ampèremètre (ou multimètre), voltmètre, fils de connexion",
  image: "images/img_seance20.png",
  imageLegende: "Figure 20 — L'ampèremètre se branche en série, le voltmètre en dérivation aux bornes de la lampe",
  revision: {
    qa: [
      { q: "Cite trois pannes possibles d'un circuit électrique.", ra: "La coupure, la mauvaise connexion et la lampe grillée." },
      { q: "Comment reconnaît-on une lampe grillée ?", ra: "Son filament est cassé." },
      { q: "Comment cherche-t-on une panne ?", ra: "En vérifiant les éléments un par un." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Chez le vulcanisateur, on mesure la pression des pneus avec un manomètre. Et pour le courant électrique, existe-t-il des appareils pour mesurer « la force » du courant dans un fil et « la force » de la pile ?",
      "R.A. : Oui : des appareils de mesure électriques.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème, comparaison", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Intensité et tension : mesures dans un circuit ». Après cette séance, vous serez capables de nommer les unités de l'intensité et de la tension, et de brancher correctement l'ampèremètre et le voltmètre.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien ce montage : l'ampèremètre est placé dans la boucle du circuit, en série, comme un maillon de la chaîne. Le voltmètre, lui, est branché à côté, en dérivation, entre les deux bornes de la lampe. Lisez les valeurs affichées.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Circuit avec ampèremètre et voltmètre",
  },
  analyse: {
    qa: [
      { q: "Que mesure l'intensité du courant ?", ra: "Le débit du courant électrique qui circule dans le circuit." },
      { q: "Quel appareil mesure l'intensité, et quelle est son unité ?", ra: "L'ampèremètre ; l'unité est l'ampère, de symbole A." },
      { q: "Comment se branche l'ampèremètre ?", ra: "En série, dans la boucle du circuit." },
      { q: "Que mesure la tension ?", ra: "La différence électrique entre les deux bornes d'un composant, par exemple entre les bornes de la pile ou de la lampe." },
      { q: "Quel appareil mesure la tension, et quelle est son unité ?", ra: "Le voltmètre ; l'unité est le volt, de symbole V." },
      { q: "Comment se branche le voltmètre ?", ra: "En dérivation, aux bornes du composant." },
    ],
    technique: "Questions-réponses, expérimentation", support: "Circuit de mesure",
  },
  synthese: {
    enseignant: "Donc, l'intensité du courant mesure le débit de courant dans le circuit ; elle se mesure en ampères, symbole A, avec un ampèremètre branché en série. La tension mesure la différence électrique entre deux bornes ; elle se mesure en volts, symbole V, avec un voltmètre branché en dérivation aux bornes du composant. Retenez : ampèremètre en série, voltmètre en dérivation.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Complète le tableau en répondant :",
      items: [
        "a) Grandeur mesurée par l'ampèremètre ? Son unité et son symbole ?",
        "b) Grandeur mesurée par le voltmètre ? Son unité et son symbole ?",
        "c) Branchement de l'ampèremètre ?",
        "d) Branchement du voltmètre ?",
      ],
      corrige: [
        [{ text: "a) " }, { text: "L'intensité ; l'ampère (A)", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "La tension ; le volt (V)", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "En série", cle: true }, { text: ", dans la boucle du circuit." }],
        [{ text: "d) " }, { text: "En dérivation", cle: true }, { text: ", aux bornes du composant." }],
      ],
    },
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) L'intensité se mesure en volts.",
        "b) Le voltmètre se branche en dérivation.",
        "c) Une pile plate porte l'indication 4,5 V : c'est sa tension.",
        "d) L'ampèremètre se branche aux bornes de la lampe, en dérivation.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Faux", cle: true }, { text: " : l'intensité se mesure en ampères ; le volt est l'unité de tension." }],
        [{ text: "b) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: " : 4,5 volts est la tension de la pile." }],
        [{ text: "d) " }, { text: "Faux", cle: true }, { text: " : l'ampèremètre se branche en série, dans la boucle." }],
      ],
    },
  ],
  applicationTechnique: "Travail de groupe", applicationSupport: "Circuit de mesure, ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : volt – série – ampère – dérivation – intensité – tension.",
      items: [
        "a) L'……… du courant se mesure en ……… avec un ampèremètre branché en ……… .",
        "b) La ……… se mesure en ……… avec un voltmètre branché en ……… .",
      ],
      corrige: [
        [{ text: "a) L'" }, { text: "intensité", cle: true }, { text: " du courant se mesure en " }, { text: "ampère", cle: true }, { text: "s avec un ampèremètre branché en " }, { text: "série", cle: true }, { text: "." }],
        [{ text: "b) La " }, { text: "tension", cle: true }, { text: " se mesure en " }, { text: "volt", cle: true }, { text: "s avec un voltmètre branché en " }, { text: "dérivation", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Quelle est la différence entre l'intensité et la tension ?",
        "b) Sur une pile, on lit « 1,5 V ». Que signifie cette indication ?",
        "c) Dessine le schéma d'un circuit pile-lampe avec un ampèremètre correctement branché.",
        "d) Où brancherais-tu un voltmètre pour mesurer la tension aux bornes de la lampe ?",
      ],
      corrige: [
        [{ text: "a) L'" }, { text: "intensité est le débit du courant", cle: true }, { text: " dans le circuit (en A) ; la " }, { text: "tension est la différence électrique entre deux bornes", cle: true }, { text: " (en V)." }],
        [{ text: "b) La " }, { text: "tension de la pile est 1,5 volt", cle: true }, { text: "." }],
        [{ text: "c) Schéma : " }, { text: "l'ampèremètre (cercle avec A) est dans la boucle, en série", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "En dérivation, entre les deux bornes de la lampe", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, règle, feuille d'évaluation",
  lecon: {
    motsCles: ["intensité", "tension", "ampère", "volt", "ampèremètre", "voltmètre"],
    sections: [
      {
        titre: "1. L'intensité du courant",
        paras: [
          "L'intensité mesure le débit du courant électrique qui circule dans le circuit, comme le débit de l'eau dans un tuyau.",
        ],
        puces: [
          "Unité : l'ampère, de symbole A.",
          "Appareil de mesure : l'ampèremètre, symbolisé par un cercle contenant la lettre A.",
          "Branchement : en série, dans la boucle du circuit — le courant à mesurer le traverse.",
        ],
      },
      {
        titre: "2. La tension",
        paras: [
          "La tension mesure la différence électrique entre les deux bornes d'un composant : entre les bornes d'une pile ou d'une lampe.",
        ],
        puces: [
          "Unité : le volt, de symbole V.",
          "Appareil de mesure : le voltmètre, symbolisé par un cercle contenant la lettre V.",
          "Branchement : en dérivation, aux bornes du composant.",
          "Exemples de tensions : pile ronde 1,5 V ; pile plate 4,5 V ; batterie de voiture 12 V ; secteur 220 V.",
        ],
      },
      {
        titre: "3. La règle d'or des branchements",
        paras: [
          "Ampèremètre en série, voltmètre en dérivation. Un ampèremètre branché en dérivation directement sur la pile provoque un court-circuit et peut abîmer l'appareil : il faut toujours respecter cette règle.",
        ],
      },
    ],
    saisTu: [
      "Les unités « ampère » et « volt » honorent deux grands savants : André-Marie Ampère, physicien français qui a fondé l'étude des courants électriques, et Alessandro Volta, physicien italien qui a inventé la première pile électrique vers 1800 : la « pile voltaïque », ancêtre de toutes nos piles !",
    ],
    experience: [
      "Lis les tensions autour de toi (lecture seulement, sans démonter) :",
      "1. Cherche l'indication de tension écrite sur : une pile ronde, une pile plate, un chargeur de téléphone, une lampe.",
      "2. Note les valeurs dans ton cahier (exemples : 1,5 V ; 4,5 V ; 5 V…).",
      "3. Compare-les à la tension du secteur (220 V) : comprends-tu pourquoi seules les piles sont sans danger ?",
    ],
  },
  substitutions: [
    { officiel: "Ampèremètre et voltmètre séparés", local: "Un multimètre unique (position A puis position V)" },
    { officiel: "Circuit didactique", local: "Pile plate, ampoule de lampe de poche et fils récupérés" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. L'intensité du courant se mesure en :  a) volts   b) ampères   c) pascals",
        "2. Le voltmètre se branche :  a) en série   b) en dérivation   c) n'importe comment",
        "3. La tension d'une pile plate est :  a) 1,5 V   b) 4,5 V   c) 220 V",
        "4. L'appareil qui mesure l'intensité est :  a) le voltmètre   b) le manomètre   c) l'ampèremètre",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "en ampères (A)", cle: true }, { text: "." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "en dérivation", cle: true }, { text: ", aux bornes du composant." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "4,5 V", cle: true }, { text: " ; 1,5 V est la tension d'une pile ronde." }],
        [{ text: "4. Réponse c) : ", bold: true }, { text: "l'ampèremètre", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. L'ampèremètre se branche en série dans le circuit.",
        "2. Le volt est l'unité de l'intensité.",
        "3. La tension du secteur est 220 V.",
        "4. Le symbole de l'ampèremètre est un cercle contenant la lettre V.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Faux", cle: true }, { text: " : le volt est l'unité de la tension ; l'intensité se mesure en ampères." }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : c'est la lettre A ; le cercle avec V est le voltmètre." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : dérivation – ampèremètre – volts – intensité – série – bornes.",
      items: [
        "L'……… mesure l'……… du courant ; il se branche en ……… . Le voltmètre mesure la tension en ……… ; il se branche en ……… aux ……… du composant.",
      ],
      corrige: [
        [{ text: "L'" }, { text: "ampèremètre", cle: true }, { text: " mesure l'" }, { text: "intensité", cle: true }, { text: " du courant ; il se branche en " }, { text: "série", cle: true }, { text: ". Le voltmètre mesure la tension en " }, { text: "volts", cle: true }, { text: " ; il se branche en " }, { text: "dérivation", cle: true }, { text: " aux " }, { text: "bornes", cle: true }, { text: " du composant." }],
      ],
    },
    {
      points: 6,
      consigne: "Observe la figure 20 en tête de la leçon, puis réponds :",
      items: [
        "1. Où l'ampèremètre est-il branché ? Justifie ce branchement.",
        "2. Où le voltmètre est-il branché ? Que mesure-t-il exactement ici ?",
        "3. La pile porte l'indication 4,5 V et l'ampèremètre affiche 0,3 A. Donne le nom, l'unité et la valeur de chaque grandeur mesurée.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Dans la boucle, en série", cle: true }, { text: " : le courant à mesurer doit le traverser." }],
        [{ text: "2. " }, { text: "En dérivation aux bornes de la lampe", cle: true }, { text: " : il mesure la tension entre les bornes de la lampe." }],
        [{ text: "3. " }, { text: "Tension : 4,5 volts (V)", cle: true }, { text: " ; " }, { text: "intensité : 0,3 ampère (A)", cle: true }, { text: "." }],
      ],
    },
  ],
};

module.exports = { seances: [S11, S12, S13, S14, S15, S16, S17, S18, S19, S20] };
