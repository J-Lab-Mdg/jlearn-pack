// data-unite2.js — T7 Unité II : ÉLECTRICITÉ ET MAGNÉTISME (séances 13 à 21)
const DOC = "Programme d'études T7 — Sciences Physiques (MEN Madagascar) ; manuel J-Learn";

const S13 = {
  numero: 13, total: 34, unite: "II", theme: "Électricité et magnétisme",
  titre: "Les circuits en série, en dérivation et mixtes",
  objectif: "réaliser et de comparer des circuits en série, en dérivation et mixtes comportant jusqu'à quatre lampes",
  documentation: DOC,
  support: "Piles plates, ampoules avec supports, fils électriques, interrupteurs, schémas au tableau",
  image: "images/img_seance13.png",
  imageLegende: "Figure 11 — Un circuit mixte : L1 en série avec L2 et L3 montées en dérivation",
  revision: {
    qa: [
      { q: "De quoi est composé un circuit électrique simple ?", ra: "D'un générateur (pile), de fils de connexion, d'un interrupteur et d'un récepteur (lampe)." },
      { q: "Qu'est-ce qu'un circuit en série, vu en T6 ?", ra: "Un circuit où tous les dipôles forment une seule boucle." },
      { q: "Qu'est-ce qu'un circuit en dérivation ?", ra: "Un circuit avec plusieurs boucles : chaque récepteur a sa propre branche." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Chez Rina, l'installation est étonnante : l'interrupteur de l'entrée commande à la fois la lampe du couloir ET les deux lampes du salon ; mais le salon garde aussi ses propres interrupteurs !",
      "Comment un seul circuit peut-il mélanger « tout ensemble » et « chacun pour soi » ?",
      "R.A. : Il combine peut-être les deux montages : série et dérivation.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Les circuits en série, en dérivation et mixtes ». Après cette séance, vous serez capables de réaliser ces trois types de circuits avec jusqu'à quatre lampes et de prévoir leur comportement.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien ces trois montages : trois lampes en série ; trois lampes en dérivation ; et ce troisième montage où une lampe est en série avec deux lampes en dérivation. Je dévisse une lampe dans chaque montage : observez ce qui se passe pour les autres.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Trois montages réalisés",
  },
  analyse: {
    qa: [
      { q: "En série, que se passe-t-il quand on dévisse une lampe ?", ra: "Toutes les lampes s'éteignent : le circuit est ouvert." },
      { q: "En dérivation, que se passe-t-il ?", ra: "Seule la lampe dévissée s'éteint : les autres branches restent fermées." },
      { q: "Dans le troisième montage, que se passe-t-il si on dévisse L1 (en série) ?", ra: "Tout s'éteint : L1 est sur le passage obligatoire du courant." },
      { q: "Et si on dévisse L2 (une des lampes en dérivation) ?", ra: "L3 reste allumée : le courant passe encore par sa branche." },
      { q: "Comment appelle-t-on ce montage qui combine série et dérivation ?", ra: "Un circuit mixte." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Les trois montages",
  },
  synthese: {
    enseignant: "Donc, il existe trois types de circuits. Dans le circuit en série, les dipôles forment une seule boucle : si l'un tombe en panne, tout s'arrête. Dans le circuit en dérivation, chaque récepteur a sa branche : les autres continuent de fonctionner en cas de panne. Le circuit mixte combine les deux : certains dipôles sont en série, d'autres en dérivation. Pour le comprendre, on repère le trajet du courant : un dipôle en série est sur le passage obligatoire ; un dipôle en dérivation partage un nœud avec une autre branche.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Dans le circuit mixte de la figure 11 (L1 en série ; L2 et L3 en dérivation), prévois ce qui se passe :",
      items: [
        "a) On dévisse L1.",
        "b) On dévisse L2.",
        "c) On dévisse L3.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Tout s'éteint", cle: true }, { text: " : L1 est sur le passage obligatoire du courant." }],
        [{ text: "b) " }, { text: "L1 et L3 restent allumées", cle: true }, { text: " : le courant passe par la branche de L3." }],
        [{ text: "c) " }, { text: "L1 et L2 restent allumées", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Dans un circuit en série, le courant a plusieurs chemins possibles.",
        "b) Un circuit mixte combine série et dérivation.",
        "c) En dérivation, une panne sur une branche arrête tout le circuit.",
        "d) Dans un circuit mixte, une lampe en série commande toutes les autres.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Faux", cle: true }, { text: " : une seule boucle, un seul chemin." }],
        [{ text: "b) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Faux", cle: true }, { text: " : seules la branche en panne s'arrête." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: " : elle est sur le passage obligatoire." }],
      ],
    },
  ],
  applicationTechnique: "Travail de groupe (montages)", applicationSupport: "Piles, lampes, fils",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : mixte – série – branche – dérivation – boucle – nœud.",
      items: [
        "a) En ………, les dipôles forment une seule ……… .",
        "b) En ………, chaque récepteur a sa propre ……… reliée aux autres par un ……… .",
        "c) Un circuit ……… combine les deux montages.",
      ],
      corrige: [
        [{ text: "a) En " }, { text: "série", cle: true }, { text: ", les dipôles forment une seule " }, { text: "boucle", cle: true }, { text: "." }],
        [{ text: "b) En " }, { text: "dérivation", cle: true }, { text: ", chaque récepteur a sa propre " }, { text: "branche", cle: true }, { text: " reliée aux autres par un " }, { text: "nœud", cle: true }, { text: "." }],
        [{ text: "c) Un circuit " }, { text: "mixte", cle: true }, { text: " combine les deux montages." }],
      ],
    },
    {
      consigne: "Un circuit mixte comporte quatre lampes : L1 en série, puis L2, L3 et L4 en dérivation. Réponds :",
      items: [
        "a) Quelles lampes s'éteignent si L1 grille ?",
        "b) Quelles lampes s'éteignent si L3 grille ?",
        "c) Dans quel montage brancher les lampes d'une maison ? Pourquoi ?",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Toutes", cle: true }, { text: " : L1 est sur le passage obligatoire." }],
        [{ text: "b) " }, { text: "Seulement L3", cle: true }, { text: " : L2 et L4 gardent leur branche, L1 reste traversée par le courant." }],
        [{ text: "c) " }, { text: "En dérivation", cle: true }, { text: " : chaque lampe fonctionne indépendamment des autres." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["série", "dérivation", "mixte", "boucle", "branche", "nœud"],
    sections: [
      {
        titre: "1. Les trois types de circuits",
        puces: [
          "Circuit en série : tous les dipôles sont dans une seule boucle ; le courant n'a qu'un chemin.",
          "Circuit en dérivation : plusieurs branches reliées par des nœuds ; le courant se partage.",
          "Circuit mixte : combinaison des deux ; certains dipôles en série, d'autres en dérivation.",
        ],
        paras: [],
      },
      {
        titre: "2. Que se passe-t-il en cas de panne ?",
        puces: [
          "En série : une lampe grillée éteint tout le circuit.",
          "En dérivation : seule la branche en panne s'arrête.",
          "En mixte : un dipôle en série commande tout ; un dipôle en dérivation ne commande que sa branche.",
        ],
        paras: [],
      },
      {
        titre: "3. Lire un circuit mixte",
        paras: [
          "Pour analyser un circuit mixte, suis le trajet du courant depuis la borne + de la pile : un dipôle placé avant le premier nœud (ou après le dernier) est en série avec tout le reste ; les dipôles placés entre deux nœuds, chacun sur sa branche, sont en dérivation entre eux.",
          "Exemple de la figure 11 : le courant traverse obligatoirement L1, puis se partage au nœud entre L2 et L3, avant de se reformer et de revenir à la pile.",
        ],
      },
    ],
    saisTu: [
      "L'installation électrique d'une maison est un immense circuit mixte : toutes les prises et lampes sont en dérivation (chacune s'allume indépendamment), mais le disjoncteur général est en série avec tout : quand il coupe, plus rien ne fonctionne. C'est sa mission de sécurité !",
    ],
    experience: [
      "Le circuit mixte à trois lampes (matériel de récupération) :",
      "1. Avec une pile plate et des fils, monte une lampe L1, puis, après elle, deux lampes L2 et L3 côte à côte sur deux branches.",
      "2. Dévisse L1 : vérifie que tout s'éteint.",
      "3. Revisse L1 et dévisse L2 : vérifie que L1 et L3 restent allumées.",
      "4. Compare l'éclat des lampes : L1, traversée par tout le courant, brille-t-elle plus fort ?",
    ],
  },
  substitutions: [
    { officiel: "Supports de lampe et fils à fiches", local: "Douilles de lampes torches, fils de récupération dénudés, ruban adhésif" },
    { officiel: "Interrupteurs du commerce", local: "Trombone pivotant sur deux punaises et planchette" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Dans un circuit en série, le courant a :  a) un seul chemin   b) deux chemins   c) autant de chemins que de lampes",
        "2. Un circuit mixte est :  a) un circuit sans pile   b) une combinaison série + dérivation   c) un circuit à deux piles",
        "3. En dérivation, si une lampe grille :  a) tout s'éteint   b) seule cette lampe s'éteint   c) la pile s'use plus vite",
        "4. Le point où le courant se partage s'appelle :  a) une borne   b) un nœud   c) un interrupteur",
      ],
      corrige: [
        [{ text: "1. Réponse a) : ", bold: true }, { text: "un seul chemin", cle: true }, { text: "." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "une combinaison série + dérivation", cle: true }, { text: "." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "seule cette lampe s'éteint", cle: true }, { text: "." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "un nœud", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Les lampes d'une maison sont montées en série.",
        "2. Dans un circuit mixte, certains dipôles sont en série et d'autres en dérivation.",
        "3. Une lampe en série avec tout le circuit commande toutes les autres.",
        "4. Un circuit en dérivation ne peut pas avoir d'interrupteur général.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : elles sont en dérivation, chacune indépendante." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: " : elle est sur le passage obligatoire du courant." }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : un interrupteur placé en série avant le premier nœud commande tout." }],
      ],
    },
    {
      points: 6,
      consigne: "Un circuit comporte une pile, un interrupteur K, puis une lampe L1, puis deux branches parallèles portant L2 et L3.",
      items: [
        "1. Fais la liste des dipôles en série avec tout le circuit.",
        "2. Quels dipôles sont en dérivation entre eux ?",
        "3. On ouvre K : que se passe-t-il ? On ferme K et on dévisse L3 : que reste-t-il d'allumé ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "L'interrupteur K et la lampe L1", cle: true }, { text: " : le courant les traverse obligatoirement." }],
        [{ text: "2. " }, { text: "L2 et L3", cle: true }, { text: ", chacune sur sa branche." }],
        [{ text: "3. K ouvert : " }, { text: "tout est éteint", cle: true }, { text: ". L3 dévissée : " }, { text: "L1 et L2 restent allumées", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Observe la figure 11, puis réponds :",
      items: [
        "1. Décris le trajet du courant depuis la borne + de la pile.",
        "2. Pourquoi dit-on que L2 et L3 sont « en dérivation entre elles » ?",
        "3. Ajoute par la pensée une lampe L4 pour qu'elle commande tout le circuit : où la placer ?",
      ],
      corrige: [
        [{ text: "1. Le courant sort de la borne +, " }, { text: "traverse L1, se partage au nœud entre L2 et L3, se reforme au second nœud", cle: true }, { text: " et revient à la borne −." }],
        [{ text: "2. Parce qu'elles sont " }, { text: "sur deux branches reliées aux deux mêmes nœuds", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "En série, sur la boucle principale", cle: true }, { text: " (avant le premier nœud ou après le second)." }],
      ],
    },
  ],
};

const S14 = {
  numero: 14, total: 34, unite: "II", theme: "Électricité et magnétisme",
  titre: "Schémas normalisés et association de piles",
  objectif: "schématiser un circuit avec les symboles normalisés et d'associer des piles en série pour augmenter la tension",
  documentation: DOC,
  support: "Piles rondes 1,5 V, pile plate 4,5 V, lampes, fils, symboles normalisés au tableau",
  image: "images/img_seance14.png",
  imageLegende: "Figure 12 — Trois piles de 1,5 V en série : les tensions s'ajoutent (4,5 V)",
  revision: {
    qa: [
      { q: "Cite les trois types de circuits.", ra: "En série, en dérivation, mixte." },
      { q: "Dessine au tableau le symbole de la pile et celui de la lampe.", ra: "Pile : un trait long (+) et un trait court épais (−) ; lampe : un cercle avec une croix." },
      { q: "Quel est le symbole de l'interrupteur ouvert ?", ra: "Un segment incliné entre deux points, comme une porte ouverte." },
    ],
    technique: "Questions-réponses orales", support: "Tableau noir",
  },
  miseEnSituation: {
    enseignant: [
      "La radio de Dadabe ne fonctionne qu'avec QUATRE piles rondes placées bout à bout, dans le bon sens. Avec deux piles seulement, rien ne se passe ; avec une pile à l'envers non plus !",
      "Pourquoi faut-il plusieurs piles, et pourquoi dans un ordre précis ?",
      "R.A. : Les piles s'additionnent peut-être pour donner plus de tension, à condition d'être dans le bon sens.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Radio, piles",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Schémas normalisés et association de piles ». Après cette séance, vous serez capables de schématiser tout circuit avec les symboles normalisés et d'expliquer l'association de piles en série.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : je monte une lampe avec une seule pile ronde de 1,5 V : notez son éclat. J'ajoute une deuxième pile en série (+ contre −) : que devient l'éclat ? Puis une troisième. Enfin, je retourne l'une des piles : que se passe-t-il ? Pendant ce temps, je schématise chaque montage au tableau.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Piles, lampe, fils, tableau",
  },
  analyse: {
    qa: [
      { q: "Que devient l'éclat de la lampe quand on ajoute des piles en série ?", ra: "Il augmente : la lampe brille de plus en plus fort." },
      { q: "Pourquoi ?", ra: "Parce que les tensions des piles s'ajoutent : 1,5 V, puis 3 V, puis 4,5 V." },
      { q: "Comment faut-il brancher les piles ?", ra: "En série, borne + de l'une contre borne − de la suivante." },
      { q: "Que se passe-t-il si une pile est retournée ?", ra: "Sa tension se retranche : la lampe faiblit ou s'éteint." },
      { q: "À quoi sert un schéma normalisé ?", ra: "À représenter un circuit de façon claire et comprise de tous, avec les mêmes symboles partout dans le monde." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Montages et schémas",
  },
  synthese: {
    enseignant: "Donc, le schéma normalisé représente un circuit par un rectangle de fils avec les symboles internationaux : pile (trait long +, trait court −), lampe (cercle et croix), interrupteur, fil de connexion. Pour associer des piles en série, on relie la borne + de l'une à la borne − de la suivante : les tensions s'ajoutent. Trois piles de 1,5 V en série donnent 4,5 V, comme la pile plate. Une pile inversée retranche sa tension au lieu de l'ajouter. Une tension plus grande fait briller la lampe plus fort, mais attention : une tension trop grande grille la lampe !",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Calcule la tension totale de chaque association en série :",
      items: [
        "a) Deux piles de 1,5 V.",
        "b) Trois piles de 1,5 V.",
        "c) Une pile de 4,5 V et une pile de 1,5 V.",
        "d) Quatre piles de 1,5 V dont une retournée.",
      ],
      corrige: [
        [{ text: "a) 1,5 + 1,5 = " }, { text: "3 V", cle: true }, { text: "." }],
        [{ text: "b) 1,5 × 3 = " }, { text: "4,5 V", cle: true }, { text: "." }],
        [{ text: "c) 4,5 + 1,5 = " }, { text: "6 V", cle: true }, { text: "." }],
        [{ text: "d) 1,5 + 1,5 + 1,5 − 1,5 = " }, { text: "3 V", cle: true }, { text: " : la pile retournée se retranche." }],
      ],
    },
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) En série, les tensions des piles s'ajoutent.",
        "b) Le sens des piles n'a pas d'importance.",
        "c) La pile plate de 4,5 V contient trois éléments de 1,5 V.",
        "d) Le symbole de la lampe est un cercle avec une croix.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : une pile inversée retranche sa tension." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail individuel sur ardoise", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : symboles – ajoutent – série – tension – normalisé – borne.",
      items: [
        "a) Un schéma ……… utilise des ……… internationaux.",
        "b) En associant des piles en ……… (……… + contre borne −), les tensions s'……… .",
        "c) Trois piles de 1,5 V en série donnent une ……… de 4,5 V.",
      ],
      corrige: [
        [{ text: "a) Un schéma " }, { text: "normalisé", cle: true }, { text: " utilise des " }, { text: "symboles", cle: true }, { text: " internationaux." }],
        [{ text: "b) En associant des piles en " }, { text: "série", cle: true }, { text: " (" }, { text: "borne", cle: true }, { text: " + contre borne −), les tensions s'" }, { text: "ajoutent", cle: true }, { text: "." }],
        [{ text: "c) Trois piles de 1,5 V en série donnent une " }, { text: "tension", cle: true }, { text: " de 4,5 V." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Une lampe de poche fonctionne avec 3 V. Combien de piles de 1,5 V faut-il, et comment les brancher ?",
        "b) La radio de Dadabe (6 V) fonctionne-t-elle avec quatre piles de 1,5 V dont une à l'envers ? Justifie par un calcul.",
        "c) Pourquoi les schémas normalisés sont-ils utiles aux électriciens du monde entier ?",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Deux piles de 1,5 V en série", cle: true }, { text: ", borne + contre borne −." }],
        [{ text: "b) Non : 1,5 × 3 − 1,5 = " }, { text: "3 V au lieu de 6 V", cle: true }, { text: " : la tension est insuffisante." }],
        [{ text: "c) Parce qu'ils utilisent " }, { text: "les mêmes symboles partout", cle: true }, { text: " : tout le monde lit le même schéma sans se tromper." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["schéma normalisé", "symbole", "association en série", "tension", "volt"],
    sections: [
      {
        titre: "1. Les symboles normalisés",
        puces: [
          "Pile : un trait long (borne +) et un trait court épais (borne −).",
          "Lampe : un cercle traversé d'une croix.",
          "Interrupteur ouvert : un segment incliné ; fermé : un segment aligné.",
          "Fil de connexion : un trait droit ; nœud : un gros point.",
        ],
        paras: [
          "Sur un schéma, le circuit est dessiné en rectangle, à la règle : c'est la convention internationale.",
        ],
      },
      {
        titre: "2. L'association de piles en série",
        paras: [
          "Pour augmenter la tension, on associe des piles en série : la borne + de l'une touche la borne − de la suivante. Les tensions s'ajoutent :",
          "1,5 V + 1,5 V + 1,5 V = 4,5 V : c'est exactement ce que contient une pile plate !",
          "Attention au sens : une pile retournée retranche sa tension au lieu de l'ajouter. C'est pourquoi les appareils dessinent le sens des piles dans leur logement.",
        ],
      },
      {
        titre: "3. Tension et éclat de la lampe",
        paras: [
          "Plus la tension appliquée à une lampe est grande, plus elle brille : mais chaque lampe a une tension nominale inscrite sur son culot (3,5 V ; 6 V…). Au-delà, le filament chauffe trop : la lampe grille !",
        ],
      },
    ],
    saisTu: [
      "La toute première pile a été inventée par Alessandro Volta en 1800 : un empilement (d'où le mot « pile » !) de disques de zinc et de cuivre séparés par du tissu imbibé d'eau salée. C'était déjà une association en série ! L'unité de tension, le volt, honore son nom.",
    ],
    experience: [
      "Le porte-piles improvisé :",
      "1. Récupère deux ou trois piles rondes de 1,5 V encore chargées.",
      "2. Aligne-les bout à bout (+ contre −) dans une gouttière de carton pliée.",
      "3. Maintiens-les serrées avec un élastique, un fil dénudé à chaque extrémité.",
      "4. Branche une petite lampe de torche : compare son éclat avec 1, 2 puis 3 piles. Note tes observations !",
    ],
  },
  substitutions: [
    { officiel: "Coupleur de piles du commerce", local: "Gouttière en carton + élastique + ruban adhésif" },
    { officiel: "Voltmètre de démonstration", local: "Comparaison d'éclat d'une même lampe" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Sur le symbole de la pile, le trait long représente :  a) la borne −   b) la borne +   c) le fil",
        "2. Trois piles de 1,5 V en série donnent :  a) 1,5 V   b) 3 V   c) 4,5 V",
        "3. Une pile montée à l'envers dans une série :  a) ajoute sa tension   b) retranche sa tension   c) ne change rien",
        "4. La tension s'exprime en :  a) ampères   b) volts   c) grammes",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "la borne +", cle: true }, { text: "." }],
        [{ text: "2. Réponse c) : ", bold: true }, { text: "4,5 V", cle: true }, { text: "." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "elle retranche sa tension", cle: true }, { text: "." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "volts (V)", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Un schéma normalisé se dessine à main levée, sans règle.",
        "2. Pour associer deux piles en série, on relie + à −.",
        "3. Une lampe brille d'autant plus fort que la tension est grande.",
        "4. On peut appliquer n'importe quelle tension à une lampe sans risque.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : à la règle, en rectangle, avec les symboles normalisés." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: " (dans la limite de sa tension nominale)." }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : au-delà de sa tension nominale, elle grille." }],
      ],
    },
    {
      points: 6,
      consigne: "Calculs d'associations en série :",
      items: [
        "1. Quelle tension obtient-on avec deux piles plates de 4,5 V en série ?",
        "2. Combien de piles rondes de 1,5 V faut-il pour obtenir 6 V ?",
        "3. Quatre piles de 1,5 V sont en série mais deux sont retournées. Quelle est la tension totale ?",
      ],
      corrige: [
        [{ text: "1. 4,5 + 4,5 = " }, { text: "9 V", cle: true }, { text: "." }],
        [{ text: "2. 6 ÷ 1,5 = " }, { text: "4 piles", cle: true }, { text: "." }],
        [{ text: "3. 1,5 + 1,5 − 1,5 − 1,5 = " }, { text: "0 V", cle: true }, { text: " : la lampe reste éteinte !" }],
      ],
    },
    {
      points: 6,
      consigne: "Schéma. Un circuit comporte : une association de deux piles de 1,5 V en série, un interrupteur fermé et une lampe.",
      items: [
        "1. Décris (ou dessine) le schéma normalisé de ce circuit.",
        "2. Quelle est la tension fournie à la lampe ?",
        "3. La lampe porte l'inscription « 3,5 V ». Peut-on ajouter une troisième pile sans risque ? Justifie.",
      ],
      corrige: [
        [{ text: "1. Un rectangle : " }, { text: "deux symboles de pile bout à bout, l'interrupteur fermé, la lampe (cercle + croix)", cle: true }, { text: ", reliés par des traits à la règle." }],
        [{ text: "2. 1,5 + 1,5 = " }, { text: "3 V", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Non : 4,5 V dépasserait la tension nominale (3,5 V)", cle: true }, { text: " : le filament grillerait." }],
      ],
    },
  ],
};

const S15 = {
  numero: 15, total: 34, unite: "II", theme: "Électricité et magnétisme",
  titre: "Les lois de la tension",
  objectif: "énoncer et d'appliquer la loi d'additivité de la tension en série et la loi d'unicité de la tension en dérivation",
  documentation: DOC,
  support: "Multimètre (voltmètre) ou schémas chiffrés au tableau, piles, lampes, fils",
  image: "images/img_seance15.png",
  imageLegende: "Figure 13 — En série, la tension de la pile se partage : U = U1 + U2",
  revision: {
    qa: [
      { q: "Qu'est-ce que la tension électrique et son unité ?", ra: "La grandeur qui mesure « l'énergie » fournie entre deux points du circuit ; elle s'exprime en volts (V)." },
      { q: "Que font les tensions de piles associées en série ?", ra: "Elles s'ajoutent." },
      { q: "Avec quel appareil mesure-t-on une tension ?", ra: "Avec un voltmètre (fonction du multimètre), branché en dérivation." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Hery a monté deux lampes en série sur une pile de 6 V. Il mesure la tension aux bornes de la première : 4 V seulement. « Où sont passés les 2 V qui manquent ? », s'étonne-t-il.",
      "À votre avis, où sont les 2 V manquants ?",
      "R.A. : Peut-être aux bornes de la deuxième lampe : la tension se partagerait.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Les lois de la tension ». Après cette séance, vous serez capables d'énoncer et d'appliquer la loi d'additivité (en série) et la loi d'unicité (en dérivation) de la tension.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : dans ce circuit en série (pile 6 V, deux lampes), je mesure au voltmètre : U aux bornes de la pile = 6 V ; U1 aux bornes de L1 = 4 V ; U2 aux bornes de L2 = 2 V. Dans ce circuit en dérivation (pile 6 V, deux lampes en branches), je mesure : U pile = 6 V ; U1 = 6 V ; U2 = 6 V. Je note tout au tableau.",
    apprenants: "Observent silencieusement et notent les mesures.",
    technique: "Démarche d'observation, mesures", support: "Multimètre, circuits, tableau de mesures",
  },
  analyse: {
    qa: [
      { q: "En série, compare U et U1 + U2.", ra: "U = U1 + U2 : 6 = 4 + 2. La tension de la pile se partage entre les lampes." },
      { q: "Comment appelle-t-on cette loi ?", ra: "La loi d'additivité de la tension (en série)." },
      { q: "En dérivation, que remarques-tu sur les trois tensions ?", ra: "Elles sont toutes égales : U = U1 = U2 = 6 V." },
      { q: "Comment appelle-t-on cette loi ?", ra: "La loi d'unicité de la tension (en dérivation)." },
      { q: "Les deux lampes en série reçoivent 4 V et 2 V : sont-elles identiques ?", ra: "Non : la tension se partage inégalement si les lampes sont différentes." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Tableau de mesures",
  },
  synthese: {
    enseignant: "Donc, deux lois gouvernent la tension. Loi d'additivité (circuit en série) : la tension aux bornes du générateur est égale à la somme des tensions aux bornes des récepteurs : U = U1 + U2 + … Loi d'unicité (circuit en dérivation) : la tension est la même aux bornes de toutes les branches : U = U1 = U2. C'est pourquoi les lampes d'une maison, toutes en dérivation, reçoivent toutes la même tension du secteur.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Applique la bonne loi :",
      items: [
        "a) En série : pile 4,5 V, U1 = 3 V. Que vaut U2 ?",
        "b) En série : U1 = 2 V, U2 = 2,5 V, U3 = 1,5 V. Que vaut la tension de la pile ?",
        "c) En dérivation : pile 6 V. Que valent U1 et U2 ?",
      ],
      corrige: [
        [{ text: "a) U2 = 4,5 − 3 = " }, { text: "1,5 V", cle: true }, { text: " (additivité)." }],
        [{ text: "b) U = 2 + 2,5 + 1,5 = " }, { text: "6 V", cle: true }, { text: " (additivité)." }],
        [{ text: "c) U1 = U2 = " }, { text: "6 V", cle: true }, { text: " (unicité)." }],
      ],
    },
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) En série, les tensions s'ajoutent.",
        "b) En dérivation, chaque branche reçoit une tension différente.",
        "c) La loi d'unicité concerne le circuit en dérivation.",
        "d) En série, deux lampes différentes peuvent recevoir des tensions différentes.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: " : U = U1 + U2." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : toutes les branches reçoivent la même tension." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: " : la tension se partage selon les lampes." }],
      ],
    },
  ],
  applicationTechnique: "Travail individuel sur ardoise", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : unicité – somme – additivité – série – même – dérivation.",
      items: [
        "a) Loi d'……… : en ………, la tension du générateur est égale à la ……… des tensions des récepteurs.",
        "b) Loi d'……… : en ………, la tension est la ……… aux bornes de toutes les branches.",
      ],
      corrige: [
        [{ text: "a) Loi d'" }, { text: "additivité", cle: true }, { text: " : en " }, { text: "série", cle: true }, { text: ", la tension du générateur est égale à la " }, { text: "somme", cle: true }, { text: " des tensions des récepteurs." }],
        [{ text: "b) Loi d'" }, { text: "unicité", cle: true }, { text: " : en " }, { text: "dérivation", cle: true }, { text: ", la tension est la " }, { text: "même", cle: true }, { text: " aux bornes de toutes les branches." }],
      ],
    },
    {
      consigne: "Problèmes :",
      items: [
        "a) Trois lampes en série sur une pile de 9 V : U1 = 3,5 V et U2 = 2,5 V. Calcule U3.",
        "b) Deux lampes en dérivation sur une pile de 4,5 V : donne U1 et U2.",
        "c) Retrouve la réponse au problème de Hery (pile 6 V, U1 = 4 V) : que vaut U2 ?",
      ],
      corrige: [
        [{ text: "a) U3 = 9 − 3,5 − 2,5 = " }, { text: "3 V", cle: true }, { text: "." }],
        [{ text: "b) U1 = U2 = " }, { text: "4,5 V", cle: true }, { text: " : loi d'unicité." }],
        [{ text: "c) U2 = 6 − 4 = " }, { text: "2 V", cle: true }, { text: " : les 2 V « manquants » sont aux bornes de L2 !" }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["loi d'additivité", "loi d'unicité", "tension", "volt", "voltmètre"],
    sections: [
      {
        titre: "1. Rappel : la tension",
        paras: [
          "La tension électrique U, exprimée en volts (V), se mesure aux bornes d'un dipôle avec un voltmètre branché en dérivation.",
        ],
      },
      {
        titre: "2. En série : la loi d'additivité",
        paras: [
          "Dans un circuit en série, la tension aux bornes du générateur est égale à la somme des tensions aux bornes de chaque récepteur :",
          "U (pile) = U1 + U2 + U3 + …",
          "La tension de la pile « se partage » entre les récepteurs. Si les lampes sont identiques, le partage est égal ; sinon, chacune prend une part différente.",
        ],
      },
      {
        titre: "3. En dérivation : la loi d'unicité",
        paras: [
          "Dans un circuit en dérivation, la tension est la même aux bornes de toutes les branches :",
          "U (pile) = U1 = U2 = U3 = …",
          "Chaque branche est directement reliée aux bornes du générateur : elle reçoit donc la tension entière.",
        ],
      },
      {
        titre: "4. Pourquoi c'est important",
        paras: [
          "C'est la loi d'unicité qui explique le branchement des maisons : toutes les lampes et prises, en dérivation, reçoivent la même tension du secteur (220 V à Madagascar). En série, chaque appareil n'en recevrait qu'une fraction et rien ne fonctionnerait correctement !",
        ],
      },
    ],
    saisTu: [
      "Le réseau de la JIRAMA distribue le 220 V dans les maisons : toutes les prises sont en dérivation, conformément à la loi d'unicité. Mais attention : 220 V est une tension dangereuse, voire mortelle. On n'ouvre JAMAIS une prise ni un appareil branché : nos expériences se font uniquement avec des piles, sans danger.",
    ],
    experience: [
      "Le partage de tension (visible sans voltmètre !) :",
      "1. Monte deux lampes identiques en série sur une pile plate : chaque lampe brille faiblement (elle ne reçoit que la moitié de la tension).",
      "2. Monte les deux mêmes lampes en dérivation : chacune brille fort (chacune reçoit toute la tension).",
      "3. Explique la différence avec les deux lois de la tension.",
    ],
  },
  substitutions: [
    { officiel: "Voltmètre / multimètre", local: "Comparaison d'éclat de lampes identiques ; schémas chiffrés au tableau" },
    { officiel: "Générateur réglable", local: "Piles rondes et plates associées en série" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. En série, la tension de la pile :  a) se partage entre les récepteurs   b) est la même partout   c) disparaît",
        "2. En dérivation, chaque branche reçoit :  a) la moitié de la tension   b) la même tension que la pile   c) une tension nulle",
        "3. La loi d'additivité s'écrit :  a) U = U1 = U2   b) U = U1 + U2   c) U = U1 − U2",
        "4. Le voltmètre se branche :  a) en série   b) en dérivation   c) n'importe comment",
      ],
      corrige: [
        [{ text: "1. Réponse a) : ", bold: true }, { text: "elle se partage entre les récepteurs", cle: true }, { text: "." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "la même tension que la pile", cle: true }, { text: "." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "U = U1 + U2", cle: true }, { text: "." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "en dérivation", cle: true }, { text: ", aux bornes du dipôle." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. La loi d'unicité concerne les circuits en série.",
        "2. En série, deux lampes identiques se partagent la tension à égalité.",
        "3. Dans une maison, toutes les prises reçoivent la même tension.",
        "4. En série, la somme des tensions des lampes dépasse la tension de la pile.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : elle concerne les circuits en dérivation." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: " : elles sont en dérivation (loi d'unicité)." }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : elle lui est exactement égale (loi d'additivité)." }],
      ],
    },
    {
      points: 6,
      consigne: "Calculs :",
      items: [
        "1. En série : pile 12 V, U1 = 5 V, U2 = 4 V. Calcule U3.",
        "2. En série : deux lampes identiques sur une pile de 6 V. Quelle tension reçoit chacune ?",
        "3. En dérivation : trois lampes sur une pile de 4,5 V. Donne U1, U2 et U3.",
      ],
      corrige: [
        [{ text: "1. U3 = 12 − 5 − 4 = " }, { text: "3 V", cle: true }, { text: "." }],
        [{ text: "2. 6 ÷ 2 = " }, { text: "3 V chacune", cle: true }, { text: " : partage égal entre lampes identiques." }],
        [{ text: "3. U1 = U2 = U3 = " }, { text: "4,5 V", cle: true }, { text: " : loi d'unicité." }],
      ],
    },
    {
      points: 6,
      consigne: "Observe la figure 13, puis réponds :",
      items: [
        "1. Quelle loi illustre cette figure ? Énonce-la.",
        "2. Vérifie la loi avec les valeurs de la figure.",
        "3. On remplace L2 par un fil sans lampe. Que devient la tension aux bornes de L1 ? Que risque-t-il de se passer ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "La loi d'additivité", cle: true }, { text: " : en série, U = U1 + U2." }],
        [{ text: "2. " }, { text: "6 V = 4 V + 2 V", cle: true }, { text: " : la loi est vérifiée." }],
        [{ text: "3. L1 reçoit alors " }, { text: "toute la tension (6 V)", cle: true }, { text: " : si sa tension nominale est plus faible, " }, { text: "elle risque de griller", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S16 = {
  numero: 16, total: 34, unite: "II", theme: "Électricité et magnétisme",
  titre: "Les lois de l'intensité",
  objectif: "énoncer et d'appliquer la loi d'unicité de l'intensité en série et la loi d'additivité de l'intensité en dérivation",
  documentation: DOC,
  support: "Multimètre (ampèremètre) ou schémas chiffrés, piles, lampes, fils",
  image: "images/img_seance16.png",
  imageLegende: "Figure 14 — En dérivation, le courant principal se partage : I = I1 + I2",
  revision: {
    qa: [
      { q: "Énonce la loi d'additivité de la tension.", ra: "En série, la tension du générateur est la somme des tensions des récepteurs : U = U1 + U2." },
      { q: "Énonce la loi d'unicité de la tension.", ra: "En dérivation, la tension est la même aux bornes de toutes les branches." },
      { q: "Qu'est-ce que l'intensité du courant et son unité ?", ra: "La grandeur qui mesure le débit de courant ; elle s'exprime en ampères (A)." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Sur le canal d'irrigation de la rizière, l'eau arrive par un grand canal, se partage entre deux petits canaux pour arroser deux parcelles, puis se rassemble de l'autre côté. Le débit total qui entre est-il perdu ?",
      "Que devient le débit d'eau du grand canal quand il se partage ?",
      "R.A. : Il se répartit entre les deux canaux, puis se retrouve entier à la sortie.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Analogie avec l'eau", support: "Tableau noir, schéma du canal",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Les lois de l'intensité ». Après cette séance, vous serez capables d'énoncer et d'appliquer la loi d'unicité (en série) et la loi d'additivité (en dérivation) de l'intensité.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : dans ce circuit en série, je mesure l'intensité à trois endroits différents avec l'ampèremètre : avant L1 : 0,4 A ; entre L1 et L2 : 0,4 A ; après L2 : 0,4 A. Dans ce circuit en dérivation, je mesure : branche principale : 0,5 A ; branche de L1 : 0,3 A ; branche de L2 : 0,2 A. Je note tout au tableau.",
    apprenants: "Observent silencieusement et notent les mesures.",
    technique: "Démarche d'observation, mesures", support: "Multimètre, circuits, tableau de mesures",
  },
  analyse: {
    qa: [
      { q: "En série, que remarques-tu sur l'intensité aux trois endroits ?", ra: "Elle est identique partout : 0,4 A. Le courant n'est ni usé ni perdu en route." },
      { q: "Comment appelle-t-on cette loi ?", ra: "La loi d'unicité de l'intensité (en série)." },
      { q: "En dérivation, compare I et I1 + I2.", ra: "I = I1 + I2 : 0,5 = 0,3 + 0,2. Le courant principal se partage entre les branches." },
      { q: "Comment appelle-t-on cette loi ?", ra: "La loi d'additivité de l'intensité (en dérivation)." },
      { q: "À quoi ressemble ce partage ?", ra: "Au canal d'irrigation : le débit total se répartit entre les canaux puis se reforme." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Tableau de mesures",
  },
  synthese: {
    enseignant: "Donc, deux lois gouvernent l'intensité, et elles sont « croisées » par rapport à celles de la tension ! Loi d'unicité (circuit en série) : l'intensité est la même en tout point du circuit : I1 = I2 = I. Loi d'additivité (circuit en dérivation) : l'intensité du courant principal est égale à la somme des intensités des branches : I = I1 + I2 + … Retenez le tableau croisé : en série, la tension s'ajoute et l'intensité est unique ; en dérivation, c'est l'inverse.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Applique la bonne loi :",
      items: [
        "a) En série : l'ampèremètre indique 0,3 A avant la lampe. Qu'indique-t-il après ?",
        "b) En dérivation : I1 = 0,25 A et I2 = 0,15 A. Que vaut l'intensité principale I ?",
        "c) En dérivation : I = 0,6 A et I1 = 0,35 A. Que vaut I2 ?",
      ],
      corrige: [
        [{ text: "a) " }, { text: "0,3 A", cle: true }, { text: " : loi d'unicité, le courant ne s'use pas." }],
        [{ text: "b) I = 0,25 + 0,15 = " }, { text: "0,4 A", cle: true }, { text: " (additivité)." }],
        [{ text: "c) I2 = 0,6 − 0,35 = " }, { text: "0,25 A", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) En série, l'intensité diminue après chaque lampe.",
        "b) En dérivation, les intensités des branches s'ajoutent.",
        "c) L'intensité se mesure en volts.",
        "d) Les lois de l'intensité sont croisées avec celles de la tension.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Faux", cle: true }, { text: " : elle est identique partout (unicité)." }],
        [{ text: "b) " }, { text: "Vrai", cle: true }, { text: " : I = I1 + I2." }],
        [{ text: "c) " }, { text: "Faux", cle: true }, { text: " : en ampères (A)." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: " : unicité/additivité s'échangent." }],
      ],
    },
  ],
  applicationTechnique: "Travail individuel sur ardoise", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : additivité – série – même – branches – unicité – somme.",
      items: [
        "a) Loi d'……… de l'intensité : en ………, l'intensité est la ……… en tout point.",
        "b) Loi d'……… de l'intensité : en dérivation, l'intensité principale est la ……… des intensités des ……… .",
      ],
      corrige: [
        [{ text: "a) Loi d'" }, { text: "unicité", cle: true }, { text: " : en " }, { text: "série", cle: true }, { text: ", l'intensité est la " }, { text: "même", cle: true }, { text: " en tout point." }],
        [{ text: "b) Loi d'" }, { text: "additivité", cle: true }, { text: " : en dérivation, l'intensité principale est la " }, { text: "somme", cle: true }, { text: " des intensités des " }, { text: "branches", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Problèmes :",
      items: [
        "a) Trois lampes en dérivation : I1 = 0,2 A, I2 = 0,3 A, I3 = 0,1 A. Calcule le courant principal.",
        "b) Dans un circuit en série, l'intensité vaut 0,45 A à l'entrée de la première lampe. Que vaut-elle à la sortie de la dernière ?",
        "c) En dérivation, I = 1 A et les deux branches sont identiques. Que vaut chaque intensité de branche ?",
      ],
      corrige: [
        [{ text: "a) I = 0,2 + 0,3 + 0,1 = " }, { text: "0,6 A", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "0,45 A", cle: true }, { text: " : l'intensité est la même en tout point." }],
        [{ text: "c) 1 ÷ 2 = " }, { text: "0,5 A par branche", cle: true }, { text: " : partage égal entre branches identiques." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["intensité", "ampère", "loi d'unicité", "loi d'additivité", "ampèremètre"],
    sections: [
      {
        titre: "1. Rappel : l'intensité",
        paras: [
          "L'intensité I mesure le débit du courant électrique. Elle s'exprime en ampères (A) et se mesure avec un ampèremètre branché en série dans le circuit.",
        ],
      },
      {
        titre: "2. En série : la loi d'unicité",
        paras: [
          "Dans un circuit en série, l'intensité est la même en tout point :",
          "I = I1 = I2 = I3 = …",
          "Le courant ne s'use pas en traversant les lampes : ce qui entre dans le circuit en ressort intégralement. Une lampe placée « après » ne brille pas moins fort qu'une lampe placée « avant » !",
        ],
      },
      {
        titre: "3. En dérivation : la loi d'additivité",
        paras: [
          "Dans un circuit en dérivation, l'intensité du courant principal est égale à la somme des intensités des branches :",
          "I = I1 + I2 + I3 + …",
          "Comme l'eau d'un canal qui se partage entre les rizières, le courant se répartit aux nœuds puis se reforme.",
        ],
      },
      {
        titre: "4. Le tableau croisé des quatre lois",
        puces: [
          "En série : tension ADDITIVE (U = U1 + U2) et intensité UNIQUE (I partout).",
          "En dérivation : tension UNIQUE (U partout) et intensité ADDITIVE (I = I1 + I2).",
        ],
        paras: [
          "Retiens ce croisement : c'est la clé de tous les exercices d'électricité !",
        ],
      },
    ],
    saisTu: [
      "L'ampère doit son nom au physicien français André-Marie Ampère (1775-1836), fondateur de l'électrodynamique. Un courant de 1 A correspond au passage d'environ six milliards de milliards d'électrons par seconde dans le fil : un débit vertigineux et pourtant invisible !",
    ],
    experience: [
      "Le courant ne s'use pas (démonstration par l'éclat) :",
      "1. Monte deux lampes identiques en série sur une pile plate.",
      "2. Observe : les deux lampes brillent exactement pareil : celle « après » ne reçoit pas moins de courant !",
      "3. Échange les deux lampes : rien ne change.",
      "4. Conclusion : l'intensité est la même en tout point du circuit en série.",
    ],
  },
  substitutions: [
    { officiel: "Ampèremètre / multimètre", local: "Comparaison d'éclat de lampes identiques ; schémas chiffrés" },
    { officiel: "Câbles de mesure", local: "Fils de récupération dénudés" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. L'intensité se mesure en :  a) volts   b) ampères   c) grammes",
        "2. En série, l'intensité est :  a) plus forte près de la pile   b) la même partout   c) nulle après la lampe",
        "3. En dérivation, le courant principal :  a) se partage entre les branches   b) reste dans une branche   c) disparaît",
        "4. L'ampèremètre se branche :  a) en dérivation   b) en série   c) aux bornes de la pile seulement",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "ampères (A)", cle: true }, { text: "." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "la même partout", cle: true }, { text: "." }],
        [{ text: "3. Réponse a) : ", bold: true }, { text: "il se partage entre les branches", cle: true }, { text: "." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "en série", cle: true }, { text: ", dans le circuit." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Le courant s'use en traversant les lampes.",
        "2. En dérivation, I = I1 + I2.",
        "3. En série, la lampe la plus proche de la pile brille plus fort.",
        "4. Les lois de la tension et de l'intensité sont croisées.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : l'intensité est la même en tout point du circuit en série." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : même intensité, même éclat pour des lampes identiques." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: " : additivité et unicité s'échangent entre série et dérivation." }],
      ],
    },
    {
      points: 6,
      consigne: "Calculs :",
      items: [
        "1. En dérivation : I1 = 0,18 A, I2 = 0,22 A. Calcule le courant principal I.",
        "2. En dérivation : I = 0,9 A, I1 = 0,4 A, I2 = 0,3 A. Calcule I3.",
        "3. En série : l'ampèremètre indique 250 mA avant L1. Qu'indique-t-il entre L1 et L2 ? (Réponds aussi en ampères.)",
      ],
      corrige: [
        [{ text: "1. I = 0,18 + 0,22 = " }, { text: "0,4 A", cle: true }, { text: "." }],
        [{ text: "2. I3 = 0,9 − 0,4 − 0,3 = " }, { text: "0,2 A", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "250 mA, soit 0,25 A", cle: true }, { text: " : loi d'unicité." }],
      ],
    },
    {
      points: 6,
      consigne: "Observe la figure 14, puis réponds :",
      items: [
        "1. Quelle loi illustre cette figure ? Énonce-la.",
        "2. Vérifie la loi avec les valeurs de la figure.",
        "3. On débranche la branche de L2. Que devient l'intensité principale ? Justifie.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "La loi d'additivité de l'intensité", cle: true }, { text: " : en dérivation, I = I1 + I2." }],
        [{ text: "2. " }, { text: "0,5 A = 0,3 A + 0,2 A", cle: true }, { text: " : la loi est vérifiée." }],
        [{ text: "3. Elle devient " }, { text: "I = I1 = 0,3 A", cle: true }, { text: " : seul le courant de la branche de L1 circule encore." }],
      ],
    },
  ],
};

const S17 = {
  numero: 17, total: 34, unite: "II", theme: "Électricité et magnétisme",
  titre: "Résoudre des problèmes avec les lois des circuits",
  objectif: "mobiliser les quatre lois de la tension et de l'intensité pour résoudre des situations-problèmes sur les circuits",
  documentation: DOC,
  support: "Schémas de circuits chiffrés au tableau, multimètre si disponible, cahier d'exercices",
  image: "images/img_seance17.png",
  imageLegende: "Figure 15 — Unicité et additivité : les quatre lois en un coup d'œil",
  revision: {
    qa: [
      { q: "Énonce les deux lois de la tension.", ra: "Additivité en série (U = U1 + U2) ; unicité en dérivation (U identique sur chaque branche)." },
      { q: "Énonce les deux lois de l'intensité.", ra: "Unicité en série (I identique partout) ; additivité en dérivation (I = I1 + I2)." },
      { q: "Quels appareils mesurent U et I, et comment se branchent-ils ?", ra: "Le voltmètre en dérivation ; l'ampèremètre en série. Les deux sont réunis dans le multimètre." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "L'électricien du quartier dépanne une installation : sans démonter les appareils, il mesure quelques tensions et intensités, réfléchit un instant… et annonce exactement où est la panne !",
      "Quel est son secret pour deviner ce qu'il ne peut pas voir ?",
      "R.A. : Il utilise les lois des circuits pour calculer les valeurs manquantes.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Résoudre des problèmes avec les lois des circuits ». Après cette séance, vous serez capables de choisir la bonne loi et de calculer toute tension ou intensité manquante dans un circuit, même mixte.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien ce problème résolu au tableau : circuit mixte avec L1 en série puis L2 et L3 en dérivation ; pile 9 V, U1 = 3 V, I = 0,6 A, I2 = 0,4 A. Je cherche U2, U3 et I3 en suivant la méthode : 1) identifier série ou dérivation pour chaque partie ; 2) choisir la loi ; 3) calculer.",
    apprenants: "Observent silencieusement la méthode.",
    technique: "Démonstration commentée", support: "Tableau noir",
  },
  analyse: {
    qa: [
      { q: "Comment trouver la tension aux bornes de l'ensemble en dérivation ?", ra: "Par additivité en série : U(ensemble) = 9 − 3 = 6 V." },
      { q: "Que valent alors U2 et U3 ?", ra: "6 V chacune : unicité de la tension en dérivation." },
      { q: "Comment trouver I3 ?", ra: "Par additivité de l'intensité : I3 = I − I2 = 0,6 − 0,4 = 0,2 A." },
      { q: "Quelle intensité traverse L1 ?", ra: "0,6 A : en série, l'intensité est la même que le courant principal." },
      { q: "Quelle est la démarche générale ?", ra: "Identifier le montage (série/dérivation), choisir la loi correspondante, poser le calcul." },
    ],
    technique: "Questions-réponses, résolution guidée", support: "Problème au tableau",
  },
  synthese: {
    enseignant: "Donc, pour résoudre un problème de circuit, on suit trois étapes. 1) Identifier : chaque dipôle est-il en série ou en dérivation ? 2) Choisir la loi : en série, tension additive et intensité unique ; en dérivation, tension unique et intensité additive. 3) Calculer, en écrivant la loi avant le calcul, et en vérifiant que le résultat est cohérent (une tension partielle ne dépasse jamais celle de la pile ; une intensité de branche ne dépasse jamais le courant principal).",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Circuit en série : pile 6 V, deux lampes ; U1 = 2,5 V ; I = 0,3 A.",
      items: [
        "a) Calcule U2.",
        "b) Quelle intensité traverse chaque lampe ?",
      ],
      corrige: [
        [{ text: "a) U2 = 6 − 2,5 = " }, { text: "3,5 V", cle: true }, { text: " (additivité)." }],
        [{ text: "b) " }, { text: "0,3 A chacune", cle: true }, { text: " (unicité en série)." }],
      ],
    },
    {
      consigne: "Circuit en dérivation : pile 4,5 V ; I1 = 0,2 A ; I2 = 0,3 A.",
      items: [
        "a) Donne U1 et U2.",
        "b) Calcule le courant principal.",
      ],
      corrige: [
        [{ text: "a) U1 = U2 = " }, { text: "4,5 V", cle: true }, { text: " (unicité)." }],
        [{ text: "b) I = 0,2 + 0,3 = " }, { text: "0,5 A", cle: true }, { text: " (additivité)." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, cahier",
  evaluation: [
    {
      consigne: "Circuit mixte : pile 12 V ; L1 en série (U1 = 4 V) ; L2 et L3 en dérivation ; I = 0,8 A ; I3 = 0,3 A.",
      items: [
        "a) Calcule la tension aux bornes de l'ensemble L2-L3.",
        "b) Donne U2 et U3.",
        "c) Calcule I2.",
        "d) Quelle intensité traverse L1 ?",
      ],
      corrige: [
        [{ text: "a) 12 − 4 = " }, { text: "8 V", cle: true }, { text: " (additivité en série)." }],
        [{ text: "b) U2 = U3 = " }, { text: "8 V", cle: true }, { text: " (unicité en dérivation)." }],
        [{ text: "c) I2 = 0,8 − 0,3 = " }, { text: "0,5 A", cle: true }, { text: " (additivité en dérivation)." }],
        [{ text: "d) " }, { text: "0,8 A", cle: true }, { text: " : tout le courant principal la traverse." }],
      ],
    },
    {
      consigne: "Chasse à l'erreur ! Un élève écrit : « Pile 6 V, deux lampes en série : U1 = 4 V et U2 = 3 V. » Et : « En dérivation, I = 0,4 A et I1 = 0,6 A. »",
      items: [
        "a) Trouve et corrige la première erreur.",
        "b) Trouve et corrige la seconde erreur.",
      ],
      corrige: [
        [{ text: "a) 4 + 3 = 7 V > 6 V : " }, { text: "impossible, la somme doit faire 6 V", cle: true }, { text: " (par exemple U2 = 2 V)." }],
        [{ text: "b) Une branche (0,6 A) " }, { text: "ne peut pas dépasser le courant principal (0,4 A)", cle: true }, { text: " : il faut I1 < I." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["situation-problème", "méthode", "lois des circuits", "cohérence", "multimètre"],
    sections: [
      {
        titre: "1. La méthode en trois étapes",
        puces: [
          "Étape 1 — IDENTIFIER : repérer, pour chaque dipôle, s'il est en série ou en dérivation (suivre le trajet du courant, repérer les nœuds).",
          "Étape 2 — CHOISIR LA LOI : série → U additive, I unique ; dérivation → U unique, I additive.",
          "Étape 3 — CALCULER : écrire la loi, remplacer par les valeurs, poser l'opération.",
        ],
        paras: [],
      },
      {
        titre: "2. Vérifier la cohérence du résultat",
        puces: [
          "Une tension partielle ne dépasse jamais la tension de la pile.",
          "Une intensité de branche ne dépasse jamais l'intensité principale.",
          "La somme des parts retrouve toujours le total : rien ne se perd !",
        ],
        paras: [],
      },
      {
        titre: "3. Le multimètre, l'outil du diagnostic",
        paras: [
          "Le multimètre réunit voltmètre (branché en dérivation, aux bornes du dipôle) et ampèremètre (branché en série, dans le circuit). En mesurant quelques valeurs et en appliquant les lois, on peut calculer toutes les autres : c'est le secret de l'électricien !",
        ],
      },
      {
        titre: "4. Exemple résolu",
        paras: [
          "Circuit mixte, pile 9 V : L1 en série (U1 = 3 V), puis L2 et L3 en dérivation ; I = 0,6 A ; I2 = 0,4 A.",
          "U aux bornes de l'ensemble en dérivation : 9 − 3 = 6 V (additivité). Donc U2 = U3 = 6 V (unicité).",
          "I3 = 0,6 − 0,4 = 0,2 A (additivité de l'intensité). Et L1 est traversée par 0,6 A (unicité en série).",
        ],
      },
    ],
    saisTu: [
      "Les techniciens qui entretiennent les centrales hydroélectriques d'Andekaleka ou de Mandraka utilisent chaque jour ces quatre lois : leurs multimètres et leurs calculs leur permettent de surveiller des circuits transportant des milliers d'ampères, sans jamais les « voir » directement !",
    ],
    experience: [
      "Le jeu du circuit mystère (à deux) :",
      "1. Ton camarade invente un circuit (série, dérivation ou mixte) avec une pile et 2 ou 3 lampes, et choisit des valeurs cohérentes de U et I.",
      "2. Il ne te donne que quelques valeurs : à toi de calculer toutes les autres avec les lois !",
      "3. Vérifiez ensemble la cohérence : sommes exactes, aucune valeur impossible.",
      "4. Échangez les rôles. Qui résout le plus vite ?",
    ],
  },
  substitutions: [
    { officiel: "Multimètre numérique", local: "Problèmes chiffrés sur schémas, valeurs données par l'enseignant" },
    { officiel: "Maquettes de circuits", local: "Schémas au tableau et sur ardoises" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. La première étape face à un problème de circuit est :  a) calculer   b) identifier série ou dérivation   c) mesurer la pile",
        "2. En série, l'intensité est :  a) additive   b) unique   c) nulle",
        "3. En dérivation, la tension est :  a) additive   b) unique   c) doublée",
        "4. Une intensité de branche de 0,7 A avec un courant principal de 0,5 A est :  a) possible   b) impossible   c) normale",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "identifier série ou dérivation", cle: true }, { text: "." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "unique", cle: true }, { text: "." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "unique", cle: true }, { text: "." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "impossible", cle: true }, { text: " : une branche ne dépasse jamais le principal." }],
      ],
    },
    {
      points: 4,
      consigne: "Circuit en série : pile 9 V, trois lampes ; U1 = 2 V, U2 = 3,5 V ; I = 0,25 A.",
      items: [
        "1. Calcule U3.",
        "2. Quelle intensité traverse L2 ?",
        "3. Quelle intensité traverse L3 ?",
        "4. Vérifie la cohérence de U1, U2, U3 avec la pile.",
      ],
      corrige: [
        [{ text: "1. U3 = 9 − 2 − 3,5 = " }, { text: "3,5 V", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "0,25 A", cle: true }, { text: " (unicité)." }],
        [{ text: "3. " }, { text: "0,25 A", cle: true }, { text: " (unicité)." }],
        [{ text: "4. 2 + 3,5 + 3,5 = " }, { text: "9 V = tension de la pile", cle: true }, { text: " : cohérent." }],
      ],
    },
    {
      points: 6,
      consigne: "Circuit en dérivation : pile 6 V, trois branches ; I = 1,2 A ; I1 = 0,5 A ; I2 = 0,4 A.",
      items: [
        "1. Donne la tension aux bornes de chaque branche.",
        "2. Calcule I3.",
        "3. On coupe la branche 1 : que deviennent le courant principal et les tensions ?",
      ],
      corrige: [
        [{ text: "1. U1 = U2 = U3 = " }, { text: "6 V", cle: true }, { text: " (unicité)." }],
        [{ text: "2. I3 = 1,2 − 0,5 − 0,4 = " }, { text: "0,3 A", cle: true }, { text: "." }],
        [{ text: "3. I = 0,4 + 0,3 = " }, { text: "0,7 A", cle: true }, { text: " ; les tensions restent " }, { text: "6 V", cle: true }, { text: " sur les branches restantes." }],
      ],
    },
    {
      points: 6,
      consigne: "Grand problème mixte. Pile 12 V ; L1 en série, puis L2 et L3 en dérivation ; U1 = 5 V ; I2 = 0,35 A ; I3 = 0,25 A.",
      items: [
        "1. Calcule la tension aux bornes de L2 et de L3.",
        "2. Calcule le courant principal I.",
        "3. Quelle intensité traverse L1 ? Récapitule toutes les valeurs du circuit.",
      ],
      corrige: [
        [{ text: "1. U2 = U3 = 12 − 5 = " }, { text: "7 V", cle: true }, { text: " (additivité puis unicité)." }],
        [{ text: "2. I = 0,35 + 0,25 = " }, { text: "0,6 A", cle: true }, { text: " (additivité)." }],
        [{ text: "3. L1 : " }, { text: "0,6 A", cle: true }, { text: ". Récapitulatif : U1 = 5 V ; U2 = U3 = 7 V ; I = I(L1) = 0,6 A ; I2 = 0,35 A ; I3 = 0,25 A." }],
      ],
    },
  ],
};

const S18 = {
  numero: 18, total: 34, unite: "II", theme: "Électricité et magnétisme",
  titre: "Les aimants et leurs pôles",
  objectif: "identifier les pôles d'un aimant et de décrire les interactions entre aimants et avec les matériaux",
  documentation: DOC,
  support: "Aimants droits et en U, clous en fer, pièces, objets en cuivre, aluminium, bois, plastique, trombones",
  image: "images/img_seance18.png",
  imageLegende: "Figure 16 — Pôles différents : attraction ; pôles identiques : répulsion",
  revision: {
    qa: [
      { q: "Cite les quatre lois des circuits étudiées.", ra: "Tension : additive en série, unique en dérivation ; intensité : unique en série, additive en dérivation." },
      { q: "Quels matériaux conduisent le courant ?", ra: "Les métaux (fer, cuivre, aluminium…) : ce sont des conducteurs." },
      { q: "Le bois et le plastique conduisent-ils le courant ?", ra: "Non : ce sont des isolants." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Le petit haut-parleur démonté d'une vieille radio contient un disque gris étonnant : il attire les clous, les trombones, la porte du buffet… mais refuse d'attirer la pièce en aluminium et le bouchon en plastique !",
      "Pourquoi cet objet attire-t-il certains objets et pas d'autres ?",
      "R.A. : C'est un aimant : il n'attire que certains métaux, comme le fer.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Aimant de récupération",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Les aimants et leurs pôles ». Après cette séance, vous serez capables d'identifier les pôles d'un aimant, de décrire les interactions entre deux aimants et de dire quels matériaux sont attirés.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : j'approche l'aimant de ces objets : clou en fer, pièce, fil de cuivre, papier d'aluminium, bois, plastique. Lesquels sont attirés ? Je plonge maintenant l'aimant dans les trombones : où s'accrochent-ils le plus ? Enfin, j'approche deux aimants l'un de l'autre, dans un sens, puis dans l'autre.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Aimants, objets divers, trombones",
  },
  analyse: {
    qa: [
      { q: "Quels objets sont attirés par l'aimant ?", ra: "Seulement les objets en fer (ou en acier) : clou, trombones. Ni le cuivre, ni l'aluminium, ni le bois, ni le plastique." },
      { q: "Où les trombones s'accrochent-ils le plus ?", ra: "Aux deux extrémités de l'aimant : ce sont les pôles, où l'aimant est le plus fort." },
      { q: "Comment s'appellent les deux pôles ?", ra: "Le pôle Nord et le pôle Sud." },
      { q: "Que se passe-t-il quand on approche deux pôles différents ? Deux pôles identiques ?", ra: "Différents : ils s'attirent ; identiques : ils se repoussent." },
      { q: "Peut-on isoler un pôle en cassant un aimant en deux ?", ra: "Non : chaque morceau redevient un aimant complet avec deux pôles." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Expériences",
  },
  synthese: {
    enseignant: "Donc, un aimant est un objet qui attire le fer et l'acier : il n'attire ni les autres métaux (cuivre, aluminium) ni les isolants. Tout aimant possède deux pôles, appelés pôle Nord et pôle Sud, situés à ses extrémités, là où l'attraction est la plus forte. Deux pôles différents s'attirent ; deux pôles identiques se repoussent. Et il est impossible d'isoler un seul pôle : un aimant brisé donne deux aimants complets. L'aimant agit même à distance et à travers certains matériaux : papier, verre, eau.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "L'aimant attire-t-il ces objets ? Réponds et justifie :",
      items: [
        "a) Un clou en fer.",
        "b) Un fil de cuivre.",
        "c) Une cuillère en acier.",
        "d) Une règle en plastique.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Oui : le fer est attiré", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Non : le cuivre n'est pas attiré", cle: true }, { text: ", bien que ce soit un métal." }],
        [{ text: "c) " }, { text: "Oui : l'acier contient du fer", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Non : le plastique n'est jamais attiré", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Attraction ou répulsion ?",
      items: [
        "a) Pôle Nord face à pôle Sud.",
        "b) Pôle Nord face à pôle Nord.",
        "c) Pôle Sud face à pôle Sud.",
        "d) Un pôle (n'importe lequel) face à un clou en fer.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Attraction", cle: true }, { text: " : pôles différents." }],
        [{ text: "b) " }, { text: "Répulsion", cle: true }, { text: " : pôles identiques." }],
        [{ text: "c) " }, { text: "Répulsion", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Attraction", cle: true }, { text: " : le fer est attiré par les deux pôles." }],
      ],
    },
  ],
  applicationTechnique: "Travail de groupe (manipulations)", applicationSupport: "Aimants, objets",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : repoussent – fer – pôles – attirent – Nord – extrémités.",
      items: [
        "a) Un aimant attire le ……… et l'acier.",
        "b) Ses deux ………, appelés pôle ……… et pôle Sud, se trouvent à ses ……… .",
        "c) Deux pôles différents s'……… ; deux pôles identiques se ……… .",
      ],
      corrige: [
        [{ text: "a) Un aimant attire le " }, { text: "fer", cle: true }, { text: " et l'acier." }],
        [{ text: "b) Ses deux " }, { text: "pôles", cle: true }, { text: ", appelés pôle " }, { text: "Nord", cle: true }, { text: " et pôle Sud, se trouvent à ses " }, { text: "extrémités", cle: true }, { text: "." }],
        [{ text: "c) Deux pôles différents s'" }, { text: "attirent", cle: true }, { text: " ; deux pôles identiques se " }, { text: "repoussent", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Comment repérer les pôles d'un aimant avec des trombones ?",
        "b) Un aimant attire-t-il tous les métaux ? Donne un contre-exemple.",
        "c) On casse un aimant droit en deux. Obtient-on un pôle Nord isolé ? Explique.",
        "d) L'aimant attire un clou à travers une feuille de papier. Que montre cette expérience ?",
      ],
      corrige: [
        [{ text: "a) On le plonge dans les trombones : ils s'accrochent " }, { text: "en plus grand nombre aux deux extrémités : les pôles", cle: true }, { text: "." }],
        [{ text: "b) Non : " }, { text: "le cuivre et l'aluminium ne sont pas attirés", cle: true }, { text: "." }],
        [{ text: "c) Non : " }, { text: "chaque moitié devient un aimant complet avec ses deux pôles", cle: true }, { text: "." }],
        [{ text: "d) Que l'aimant agit " }, { text: "à distance et à travers certains matériaux", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["aimant", "pôle Nord", "pôle Sud", "attraction", "répulsion"],
    sections: [
      {
        titre: "1. Ce qu'attire un aimant",
        paras: [
          "Un aimant attire le fer et les matériaux qui en contiennent (acier, fonte). Il n'attire ni les autres métaux (cuivre, aluminium, or), ni les isolants (bois, plastique, verre).",
          "L'attraction agit à distance, et même à travers le papier, le verre ou l'eau.",
        ],
      },
      {
        titre: "2. Les deux pôles",
        paras: [
          "Tout aimant possède deux pôles, situés là où l'attraction est la plus forte, à ses extrémités : le pôle Nord (souvent peint en rouge) et le pôle Sud (souvent en bleu).",
          "Impossible d'isoler un pôle : un aimant cassé en deux donne deux aimants complets, chacun avec son Nord et son Sud !",
        ],
      },
      {
        titre: "3. La règle des interactions",
        puces: [
          "Deux pôles différents (N-S) s'attirent.",
          "Deux pôles identiques (N-N ou S-S) se repoussent.",
        ],
        paras: [
          "C'est la règle d'or du magnétisme : elle rappelle un peu l'électricité statique, mais attention, aimants et charges électriques sont deux phénomènes différents.",
        ],
      },
    ],
    saisTu: [
      "La Terre elle-même est un aimant géant ! Son champ magnétique, créé par le fer liquide en mouvement dans son noyau, fait tourner toutes les boussoles du monde… et dévie les particules dangereuses venues du Soleil. Sans ce bouclier magnétique, la vie serait bien difficile sur notre planète.",
    ],
    experience: [
      "La course aux trombones :",
      "1. Récupère un aimant (haut-parleur usagé, fermeture de sac, aimant de réfrigérateur).",
      "2. Fais l'inventaire de la maison : liste dix objets et prédis lesquels seront attirés.",
      "3. Teste et compare avec tes prédictions : les pièges classiques sont l'aluminium et le cuivre !",
      "4. Trouve les pôles : plonge l'aimant dans des trombones et observe où ils s'accrochent le plus.",
    ],
  },
  substitutions: [
    { officiel: "Aimants droits et en U de laboratoire", local: "Aimants de haut-parleurs usagés, fermetures magnétiques, aimants de réfrigérateur" },
    { officiel: "Limaille de fer", local: "Poudre obtenue en limant un clou (avec précaution)" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Un aimant attire :  a) tous les métaux   b) le fer et l'acier   c) tous les objets",
        "2. Les pôles d'un aimant se trouvent :  a) au centre   b) aux extrémités   c) partout",
        "3. Deux pôles Nord face à face :  a) s'attirent   b) se repoussent   c) ne font rien",
        "4. Un aimant cassé en deux donne :  a) un pôle Nord et un pôle Sud séparés   b) deux aimants complets   c) deux morceaux sans pouvoir",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "le fer et l'acier", cle: true }, { text: "." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "aux extrémités", cle: true }, { text: "." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "ils se repoussent", cle: true }, { text: "." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "deux aimants complets", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Le cuivre est attiré par l'aimant.",
        "2. L'aimant agit à travers une feuille de papier.",
        "3. Deux pôles différents se repoussent.",
        "4. L'attraction est la plus forte aux pôles.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : seuls le fer et l'acier sont attirés." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: " : il agit à distance et à travers certains matériaux." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : ils s'attirent ; ce sont les pôles identiques qui se repoussent." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Prédis le comportement (attraction, répulsion ou rien) :",
      items: [
        "1. Pôle Sud d'un aimant face au pôle Nord d'un autre.",
        "2. Pôle Sud face au pôle Sud.",
        "3. Pôle Nord face à une gomme en caoutchouc.",
        "4. Pôle Sud face à un trombone en acier.",
        "5. Aimant posé sur une porte de réfrigérateur (tôle d'acier).",
        "6. Pôle Nord face à une bague en or.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Attraction", cle: true }, { text: " (pôles différents)." }],
        [{ text: "2. " }, { text: "Répulsion", cle: true }, { text: " (pôles identiques)." }],
        [{ text: "3. " }, { text: "Rien", cle: true }, { text: " : le caoutchouc n'est pas attiré." }],
        [{ text: "4. " }, { text: "Attraction", cle: true }, { text: " : l'acier contient du fer." }],
        [{ text: "5. " }, { text: "Attraction", cle: true }, { text: " : il tient collé à la tôle d'acier." }],
        [{ text: "6. " }, { text: "Rien", cle: true }, { text: " : l'or n'est pas attiré." }],
      ],
    },
    {
      points: 6,
      consigne: "Énigmes d'aimants :",
      items: [
        "1. Deux barres identiques : l'une est un aimant, l'autre du fer simple. Sans autre objet, comment reconnaître l'aimant ? (Indice : seule la répulsion prouve l'aimantation.)",
        "2. Comment récupérer des clous tombés dans un seau d'eau sans se mouiller les mains ?",
        "3. Pourquoi les fermetures de sacs et de boîtes utilisent-elles souvent des aimants ?",
      ],
      corrige: [
        [{ text: "1. On approche l'extrémité de l'une du MILIEU de l'autre : " }, { text: "si elle attire fort, c'est l'aimant", cle: true }, { text: " (le milieu d'un aimant n'attire presque pas) ; et seule " }, { text: "une répulsion prouve deux aimants", cle: true }, { text: "." }],
        [{ text: "2. En " }, { text: "promenant un aimant contre la paroi extérieure", cle: true }, { text: " : il attire les clous à travers le plastique et l'eau." }],
        [{ text: "3. Parce que l'attraction " }, { text: "agit à distance, sans crochet ni effort", cle: true }, { text: ", et se répète sans usure." }],
      ],
    },
  ],
};

const S19 = {
  numero: 19, total: 34, unite: "II", theme: "Électricité et magnétisme",
  titre: "Le champ magnétique et la boussole",
  objectif: "mettre en évidence le champ magnétique d'un aimant, de tracer ses lignes de champ et d'expliquer le fonctionnement de la boussole",
  documentation: DOC,
  support: "Aimant droit, limaille de fer, feuille de papier ou carton, boussoles, aiguille à coudre, liège, bol d'eau",
  image: "images/img_seance19.png",
  imageLegende: "Figure 17 — Les lignes de champ sortent du pôle Nord et entrent au pôle Sud ; la boussole s'aligne",
  revision: {
    qa: [
      { q: "Où se trouvent les pôles d'un aimant ?", ra: "À ses extrémités, là où l'attraction est la plus forte." },
      { q: "Rappelle la règle des interactions entre pôles.", ra: "Pôles différents : attraction ; pôles identiques : répulsion." },
      { q: "L'aimant agit-il à distance ?", ra: "Oui, même à travers le papier, le verre ou l'eau." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Les marins boutres qui traversent le canal du Mozambique n'ont longtemps eu qu'un seul guide par ciel couvert : une petite aiguille aimantée flottant dans une coupelle, qui pointait toujours vers le nord.",
      "Qui « dit » à l'aiguille où se trouve le nord, en pleine mer, sans aucun repère ?",
      "R.A. : Une force invisible : le magnétisme de la Terre agit sur l'aiguille.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote historique", support: "Boussole",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Le champ magnétique et la boussole ». Après cette séance, vous serez capables de mettre en évidence le champ magnétique d'un aimant, de dessiner ses lignes de champ et d'expliquer le fonctionnement de la boussole.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : je pose cette feuille de carton sur l'aimant droit, puis je saupoudre de la limaille de fer et je tapote doucement. Que dessine la limaille ? Maintenant, je promène une petite boussole tout autour de l'aimant : comment se comporte son aiguille à chaque position ?",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Aimant, limaille, carton, boussole",
  },
  analyse: {
    qa: [
      { q: "Que dessine la limaille autour de l'aimant ?", ra: "Des lignes courbes régulières qui relient les deux pôles : les lignes de champ." },
      { q: "Que révèlent ces lignes ?", ra: "Que l'aimant crée autour de lui une zone d'influence invisible : le champ magnétique." },
      { q: "Comment se comporte la boussole près de l'aimant ?", ra: "Son aiguille s'aligne le long des lignes de champ, et change de direction selon sa position." },
      { q: "Dans quel sens oriente-t-on les lignes de champ ?", ra: "Elles sortent du pôle Nord et entrent au pôle Sud de l'aimant." },
      { q: "Pourquoi la boussole indique-t-elle le nord, loin de tout aimant ?", ra: "Parce que la Terre elle-même crée un champ magnétique : l'aiguille s'aligne dessus." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Figure de limaille, boussoles",
  },
  synthese: {
    enseignant: "Donc, tout aimant crée autour de lui un champ magnétique : une zone invisible où il exerce son influence. La limaille de fer le rend visible en dessinant les lignes de champ, orientées du pôle Nord vers le pôle Sud à l'extérieur de l'aimant ; elles sont serrées près des pôles, là où le champ est fort. La boussole est une petite aiguille aimantée pivotante : elle s'aligne sur le champ magnétique du lieu. Loin de tout aimant, elle s'aligne sur le champ magnétique terrestre : sa pointe rouge indique le nord. C'est l'instrument d'orientation des marins depuis mille ans.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Le champ magnétique est visible à l'œil nu.",
        "b) Les lignes de champ sortent du pôle Nord de l'aimant.",
        "c) Le champ est plus fort là où les lignes sont serrées.",
        "d) La boussole fonctionne grâce au champ magnétique terrestre.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Faux", cle: true }, { text: " : il est invisible ; la limaille le révèle." }],
        [{ text: "b) " }, { text: "Vrai", cle: true }, { text: " : et elles entrent au pôle Sud." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: " : près des pôles." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds aux questions :",
      items: [
        "a) Quel matériel simple révèle les lignes de champ ?",
        "b) Où le champ d'un aimant droit est-il le plus intense ?",
        "c) Que fait l'aiguille d'une boussole placée dans un champ magnétique ?",
      ],
      corrige: [
        [{ text: "a) " }, { text: "La limaille de fer saupoudrée sur un carton", cle: true }, { text: " posé sur l'aimant." }],
        [{ text: "b) " }, { text: "Près des pôles", cle: true }, { text: " : les lignes y sont serrées." }],
        [{ text: "c) Elle " }, { text: "pivote et s'aligne le long des lignes de champ", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail de groupe", applicationSupport: "Aimants, limaille, boussoles",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : lignes de champ – terrestre – Nord – champ magnétique – limaille – boussole.",
      items: [
        "a) Tout aimant crée autour de lui un ……… invisible, que la ……… de fer révèle en dessinant les ……… .",
        "b) Elles sortent du pôle ……… de l'aimant.",
        "c) La ……… s'aligne sur le champ magnétique ……… et indique le nord.",
      ],
      corrige: [
        [{ text: "a) Tout aimant crée un " }, { text: "champ magnétique", cle: true }, { text: " invisible, que la " }, { text: "limaille", cle: true }, { text: " révèle en dessinant les " }, { text: "lignes de champ", cle: true }, { text: "." }],
        [{ text: "b) Elles sortent du pôle " }, { text: "Nord", cle: true }, { text: "." }],
        [{ text: "c) La " }, { text: "boussole", cle: true }, { text: " s'aligne sur le champ magnétique " }, { text: "terrestre", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Décris l'expérience de la limaille de fer.",
        "b) Pourquoi la boussole change-t-elle de direction quand on la déplace autour d'un aimant ?",
        "c) Pourquoi ne faut-il jamais poser un aimant près d'une boussole qu'on utilise pour s'orienter ?",
        "d) Explique la phrase : « La Terre est un aimant géant. »",
      ],
      corrige: [
        [{ text: "a) On pose un carton sur un aimant, on " }, { text: "saupoudre de la limaille et on tapote : elle dessine les lignes de champ", cle: true }, { text: "." }],
        [{ text: "b) Parce que son aiguille " }, { text: "s'aligne sur la direction locale des lignes de champ", cle: true }, { text: ", qui change autour de l'aimant." }],
        [{ text: "c) Parce que son champ, " }, { text: "plus fort que celui de la Terre à courte distance, fausse l'indication", cle: true }, { text: " du nord." }],
        [{ text: "d) Le noyau terrestre crée " }, { text: "un champ magnétique semblable à celui d'un immense aimant", cle: true }, { text: ", sur lequel toutes les boussoles s'alignent." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["champ magnétique", "lignes de champ", "limaille", "boussole", "champ terrestre"],
    sections: [
      {
        titre: "1. Le champ magnétique",
        paras: [
          "Autour de tout aimant existe une zone invisible où il exerce son influence : le champ magnétique. Plus on s'éloigne de l'aimant, plus le champ faiblit.",
        ],
      },
      {
        titre: "2. Les lignes de champ",
        paras: [
          "La limaille de fer saupoudrée sur un carton posé sur l'aimant dessine des courbes régulières : les lignes de champ.",
        ],
        puces: [
          "Elles sortent du pôle Nord et entrent au pôle Sud (à l'extérieur de l'aimant).",
          "Elles sont serrées près des pôles : champ fort ; espacées loin de l'aimant : champ faible.",
          "Elles ne se croisent jamais.",
        ],
      },
      {
        titre: "3. La boussole",
        paras: [
          "La boussole est une aiguille aimantée libre de pivoter. Placée dans un champ magnétique, elle s'aligne sur les lignes de champ.",
          "Loin de tout aimant, elle s'aligne sur le champ magnétique de la Terre : sa pointe rouge (pôle Nord de l'aiguille) pointe vers le nord géographique. C'est l'instrument d'orientation le plus ancien et le plus fiable : il ne demande ni pile ni réseau !",
        ],
      },
    ],
    saisTu: [
      "La boussole a été inventée en Chine il y a environ mille ans : une cuillère de magnétite posée sur un plateau de bronze poli, puis une aiguille aimantée flottant sur l'eau. Les navigateurs arabes et européens l'ont adoptée : sans elle, pas de grandes traversées océaniques… ni de peuplement de Madagascar par les navigateurs austronésiens venus de si loin !",
    ],
    experience: [
      "Fabrique ta boussole flottante :",
      "1. Frotte une aiguille à coudre 30 fois sur un aimant, toujours dans le même sens : elle s'aimante.",
      "2. Pique-la à travers une rondelle de liège ou pose-la sur un petit morceau de feuille sèche.",
      "3. Fais-la flotter dans un bol d'eau, loin de tout objet en fer.",
      "4. L'aiguille pivote lentement et s'aligne nord-sud : vérifie avec le soleil levant (est) !",
    ],
  },
  substitutions: [
    { officiel: "Limaille de fer de laboratoire", local: "Poudre de fer obtenue en limant un clou, ou débris fins de paille de fer" },
    { officiel: "Boussoles d'étude", local: "Aiguille aimantée sur liège flottant dans un bol" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Le champ magnétique d'un aimant est :  a) visible   b) invisible   c) coloré",
        "2. Les lignes de champ sortent :  a) du pôle Sud   b) du pôle Nord   c) du milieu",
        "3. Le champ est le plus fort :  a) près des pôles   b) au milieu de l'aimant   c) très loin",
        "4. La pointe rouge de la boussole indique :  a) le sud   b) le nord   c) l'est",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "invisible", cle: true }, { text: " : la limaille le révèle." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "du pôle Nord", cle: true }, { text: "." }],
        [{ text: "3. Réponse a) : ", bold: true }, { text: "près des pôles", cle: true }, { text: "." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "le nord", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Les lignes de champ se croisent près des pôles.",
        "2. La boussole fonctionne sans pile.",
        "3. Une boussole posée près d'un aimant indique toujours le nord géographique.",
        "4. La Terre possède un champ magnétique.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : les lignes de champ ne se croisent jamais." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: " : elle n'utilise que le champ terrestre." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : l'aimant proche fausse son indication." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: " : c'est lui qui oriente les boussoles." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : serrées – aligne – Nord – limaille – invisible – terrestre.",
      items: [
        "Le champ magnétique est ……… ; la ……… de fer le révèle. Les lignes sortent du pôle ……… et sont ……… près des pôles. L'aiguille de la boussole s'……… sur le champ ……… .",
      ],
      corrige: [
        [{ text: "Le champ magnétique est " }, { text: "invisible", cle: true }, { text: " ; la " }, { text: "limaille", cle: true }, { text: " de fer le révèle. Les lignes sortent du pôle " }, { text: "Nord", cle: true }, { text: " et sont " }, { text: "serrées", cle: true }, { text: " près des pôles. L'aiguille s'" }, { text: "aligne", cle: true }, { text: " sur le champ " }, { text: "terrestre", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Observe la figure 17, puis réponds :",
      items: [
        "1. Que représentent les courbes autour de l'aimant ? Dans quel sens sont-elles orientées ?",
        "2. Où les courbes sont-elles les plus serrées, et qu'est-ce que cela signifie ?",
        "3. La boussole de la figure est placée près du pôle Nord de l'aimant. Vers où pointe sa pointe rouge ? Justifie.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Les lignes de champ", cle: true }, { text: ", orientées " }, { text: "du pôle Nord vers le pôle Sud", cle: true }, { text: " à l'extérieur." }],
        [{ text: "2. " }, { text: "Près des pôles : le champ y est le plus fort", cle: true }, { text: "." }],
        [{ text: "3. Sa pointe rouge (Nord) est " }, { text: "attirée par le pôle... différent : elle pointe vers le pôle Sud de l'aimant", cle: true }, { text: ", en s'alignant sur la ligne de champ locale." }],
      ],
    },
  ],
};

const S20 = {
  numero: 20, total: 34, unite: "II", theme: "Électricité et magnétisme",
  titre: "La bobine parcourue par un courant",
  objectif: "montrer qu'une bobine parcourue par un courant se comporte comme un aimant avec une face Nord et une face Sud",
  documentation: DOC,
  support: "Fil de cuivre isolé, tube ou gros stylo pour enrouler, pile plate, trombones, boussole, aimant droit",
  image: "images/img_seance20.png",
  imageLegende: "Figure 18 — La bobine parcourue par un courant attire le fer : c'est un aimant temporaire",
  revision: {
    qa: [
      { q: "Qu'est-ce qu'un champ magnétique ?", ra: "La zone d'influence invisible créée autour d'un aimant." },
      { q: "Comment la boussole réagit-elle dans un champ magnétique ?", ra: "Son aiguille s'aligne sur les lignes de champ." },
      { q: "Qu'attire un aimant ?", ra: "Le fer et l'acier seulement." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "À la casse automobile d'Anosizato, une grue soulève une voiture entière avec un simple disque suspendu… puis la lâche d'un coup, exprès ! Aucun aimant ordinaire ne sait « lâcher » sa proie.",
      "Quel aimant mystérieux peut-on allumer et éteindre à volonté ?",
      "R.A. : Un aimant électrique : le courant crée le magnétisme, et on peut le couper.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La bobine parcourue par un courant ». Après cette séance, vous serez capables de montrer qu'une bobine traversée par un courant se comporte comme un aimant, avec une face Nord et une face Sud.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : j'ai enroulé ce fil de cuivre isolé en une bobine de nombreuses spires. Sans courant, j'approche des trombones : rien. Je branche la bobine sur la pile : approchons les trombones à nouveau ! J'approche aussi la boussole de chaque face de la bobine, puis j'inverse le branchement de la pile.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Bobine, pile, trombones, boussole",
  },
  analyse: {
    qa: [
      { q: "La bobine sans courant attire-t-elle les trombones ?", ra: "Non : le fil de cuivre seul n'est pas un aimant." },
      { q: "Et quand le courant passe ?", ra: "Oui : elle attire les trombones, comme un aimant !" },
      { q: "Que montre la boussole face aux deux extrémités de la bobine ?", ra: "Une face attire le pôle Sud de l'aiguille, l'autre le pôle Nord : la bobine a une face Nord et une face Sud." },
      { q: "Que se passe-t-il quand on inverse le sens du courant ?", ra: "Les faces s'échangent : la face Nord devient Sud et inversement." },
      { q: "Que se passe-t-il quand on coupe le courant ?", ra: "La bobine perd son magnétisme : c'est un aimant temporaire, commandé par le courant." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Expériences",
  },
  synthese: {
    enseignant: "Donc, une bobine est un enroulement de fil conducteur isolé. Parcourue par un courant électrique, elle crée un champ magnétique et se comporte comme un aimant : elle attire le fer, possède une face Nord et une face Sud, et interagit avec un aimant (attraction ou répulsion selon les faces). Ses particularités précieuses : son magnétisme s'arrête dès qu'on coupe le courant, il augmente avec le nombre de spires et l'intensité du courant, et il s'inverse quand on inverse le sens du courant. L'électricité sait donc fabriquer du magnétisme : c'est l'électromagnétisme.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Une bobine sans courant attire le fer.",
        "b) Une bobine parcourue par un courant a une face Nord et une face Sud.",
        "c) Couper le courant arrête le magnétisme de la bobine.",
        "d) Inverser le courant ne change rien aux faces de la bobine.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Faux", cle: true }, { text: " : sans courant, pas de magnétisme." }],
        [{ text: "b) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: " : c'est un aimant temporaire." }],
        [{ text: "d) " }, { text: "Faux", cle: true }, { text: " : les faces Nord et Sud s'échangent." }],
      ],
    },
    {
      consigne: "On approche le pôle Nord d'un aimant de la face Nord d'une bobine parcourue par un courant. Puis on inverse le courant.",
      items: [
        "a) Que se passe-t-il d'abord ?",
        "b) Que se passe-t-il après l'inversion ?",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Répulsion", cle: true }, { text: " : deux faces/pôles identiques (Nord-Nord)." }],
        [{ text: "b) " }, { text: "Attraction", cle: true }, { text: " : la face est devenue Sud, face au pôle Nord de l'aimant." }],
      ],
    },
  ],
  applicationTechnique: "Travail de groupe (manipulations)", applicationSupport: "Bobines, piles, boussole",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : temporaire – spires – courant – aimant – faces – inverse.",
      items: [
        "a) Une bobine parcourue par un ……… se comporte comme un ……… .",
        "b) Elle possède deux ……… : Nord et Sud, qui s'échangent si on ……… le courant.",
        "c) C'est un aimant ……… : son effet augmente avec le nombre de ……… .",
      ],
      corrige: [
        [{ text: "a) Une bobine parcourue par un " }, { text: "courant", cle: true }, { text: " se comporte comme un " }, { text: "aimant", cle: true }, { text: "." }],
        [{ text: "b) Elle possède deux " }, { text: "faces", cle: true }, { text: " : Nord et Sud, qui s'échangent si on " }, { text: "inverse", cle: true }, { text: " le courant." }],
        [{ text: "c) C'est un aimant " }, { text: "temporaire", cle: true }, { text: " : son effet augmente avec le nombre de " }, { text: "spires", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Décris une expérience qui prouve que la bobine sous courant est un aimant.",
        "b) Cite deux moyens d'augmenter le magnétisme d'une bobine.",
        "c) Quel avantage la bobine a-t-elle sur l'aimant ordinaire ? Donne une application.",
        "d) Comment identifier la face Nord d'une bobine avec une boussole ?",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Branchée sur la pile, elle attire les trombones ; débranchée, elle les lâche", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Augmenter le nombre de spires et augmenter l'intensité du courant", cle: true }, { text: "." }],
        [{ text: "c) On peut " }, { text: "l'allumer et l'éteindre à volonté : la grue magnétique des casses", cle: true }, { text: " soulève puis lâche les voitures." }],
        [{ text: "d) La face qui " }, { text: "attire la pointe Sud (et repousse la pointe Nord) de l'aiguille est la face Nord", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["bobine", "spires", "face Nord", "face Sud", "aimant temporaire", "électromagnétisme"],
    sections: [
      {
        titre: "1. Qu'est-ce qu'une bobine ?",
        paras: [
          "Une bobine est un long fil conducteur isolé, enroulé en spires jointives autour d'un support. Sans courant, ce n'est qu'un enroulement de cuivre : elle n'attire rien.",
        ],
      },
      {
        titre: "2. La bobine sous courant : un aimant !",
        paras: [
          "Dès qu'un courant traverse la bobine, elle crée un champ magnétique et se comporte comme un aimant droit :",
        ],
        puces: [
          "elle attire le fer et l'acier ;",
          "elle possède une face Nord et une face Sud ;",
          "elle attire ou repousse un aimant, selon la règle des pôles ;",
          "une boussole s'aligne sur son champ.",
        ],
      },
      {
        titre: "3. Un aimant commandé par le courant",
        puces: [
          "Courant coupé → magnétisme disparu : aimant temporaire.",
          "Courant inversé → faces Nord et Sud échangées.",
          "Plus de spires ou plus d'intensité → magnétisme plus fort.",
        ],
        paras: [
          "Cette découverte, l'électromagnétisme, est l'une des plus importantes de la physique : elle unit l'électricité et le magnétisme.",
        ],
      },
    ],
    saisTu: [
      "L'électromagnétisme a été découvert presque par hasard en 1820 : le danois Hans Christian Ørsted remarqua qu'une boussole déviait près d'un fil parcouru par un courant, pendant un cours devant ses étudiants ! Quelques semaines plus tard, Ampère expliquait le phénomène : l'électricité en mouvement crée du magnétisme.",
    ],
    experience: [
      "Ta première bobine magnétique :",
      "1. Enroule soigneusement 30 à 50 tours de fil de cuivre isolé fin autour d'un gros stylo ; retire le stylo.",
      "2. Dénude les deux extrémités du fil sur 1 cm.",
      "3. Branche-les quelques secondes sur une pile plate et approche un trombone léger ou ta boussole flottante.",
      "4. Observe l'attraction, puis coupe le courant : tout s'arrête ! (Ne laisse pas branché : la pile chauffe et s'use vite.)",
    ],
  },
  substitutions: [
    { officiel: "Bobine de démonstration", local: "Fil de cuivre isolé récupéré (transformateur, moteur usagé) enroulé sur un stylo" },
    { officiel: "Alimentation stabilisée", local: "Pile plate 4,5 V (branchements brefs)" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Une bobine attire le fer :  a) toujours   b) seulement quand un courant la traverse   c) jamais",
        "2. Les extrémités magnétiques d'une bobine s'appellent :  a) des bornes   b) des faces Nord et Sud   c) des spires",
        "3. Quand on inverse le courant :  a) rien ne change   b) les faces s'échangent   c) la bobine chauffe seulement",
        "4. Pour renforcer le magnétisme d'une bobine, on peut :  a) réduire les spires   b) augmenter les spires   c) couper le courant",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "seulement quand un courant la traverse", cle: true }, { text: "." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "des faces Nord et Sud", cle: true }, { text: "." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "les faces s'échangent", cle: true }, { text: "." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "augmenter les spires", cle: true }, { text: " (ou l'intensité)." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Le fil de cuivre d'une bobine est attiré par un aimant.",
        "2. Une bobine sous courant peut repousser un aimant.",
        "3. Le magnétisme de la bobine survit à la coupure du courant.",
        "4. L'électromagnétisme unit électricité et magnétisme.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : le cuivre n'est pas attiré ; c'est le courant qui crée le champ." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: " : face et pôle identiques se repoussent." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : il disparaît aussitôt : aimant temporaire." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Expériences de pensée :",
      items: [
        "1. Une bobine branchée attire un trombone. On double le nombre de spires : que devient l'attraction ?",
        "2. La face gauche d'une bobine attire le pôle Nord d'un aimant. Quelle est cette face ?",
        "3. On inverse la pile. Que fait maintenant cette même face avec le même pôle Nord ?",
      ],
      corrige: [
        [{ text: "1. Elle devient " }, { text: "plus forte", cle: true }, { text: " : le magnétisme croît avec le nombre de spires." }],
        [{ text: "2. " }, { text: "Une face Sud", cle: true }, { text: " : elle attire le pôle différent (Nord)." }],
        [{ text: "3. Elle le " }, { text: "repousse : devenue face Nord", cle: true }, { text: " après l'inversion du courant." }],
      ],
    },
    {
      points: 6,
      consigne: "Observe la figure 18, puis réponds :",
      items: [
        "1. Pourquoi les trombones sont-ils attirés sur la figure ?",
        "2. Que se passerait-il si on débranchait la pile ? ",
        "3. Compare la bobine et l'aimant droit : deux ressemblances et deux différences.",
      ],
      corrige: [
        [{ text: "1. Parce que " }, { text: "le courant de la pile traverse les spires", cle: true }, { text: " : la bobine crée un champ magnétique." }],
        [{ text: "2. " }, { text: "Les trombones tomberaient", cle: true }, { text: " : plus de courant, plus de magnétisme." }],
        [{ text: "3. Ressemblances : " }, { text: "attire le fer ; possède Nord et Sud", cle: true }, { text: ". Différences : " }, { text: "la bobine se commande (marche/arrêt, inversion) et a besoin d'une source de courant", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S21 = {
  numero: 21, total: 34, unite: "II", theme: "Électricité et magnétisme",
  titre: "L'électroaimant et ses applications",
  objectif: "fabriquer un électroaimant et d'expliquer son rôle dans le moteur électrique et la sonnerie électrique",
  documentation: DOC,
  support: "Fil de cuivre isolé, gros clou ou boulon en fer, pile plate, trombones, petits clous, images de moteur et sonnerie",
  image: "images/img_seance21.png",
  imageLegende: "Figure 19 — L'électroaimant : une bobine enroulée sur un noyau de fer démultiplie l'attraction",
  revision: {
    qa: [
      { q: "Qu'est-ce qu'une bobine parcourue par un courant ?", ra: "Un aimant temporaire, avec une face Nord et une face Sud." },
      { q: "Comment renforcer le magnétisme d'une bobine ?", ra: "En augmentant le nombre de spires ou l'intensité du courant." },
      { q: "Que devient le magnétisme quand on coupe le courant ?", ra: "Il disparaît aussitôt." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Notre bobine de la dernière séance attire à peine un trombone… Pourtant, la grue de la casse soulève des voitures ! Et la sonnerie du collège frappe sa cloche plusieurs fois par seconde, comme par magie.",
      "Que manque-t-il à notre bobine pour devenir aussi puissante ?",
      "R.A. : Peut-être un cœur de fer : un noyau qui concentre le magnétisme.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Bobine de la séance 20",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « L'électroaimant et ses applications ». Après cette séance, vous serez capables de fabriquer un électroaimant et d'expliquer son rôle dans le moteur électrique et la sonnerie électrique.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : je compare deux montages branchés sur la même pile : la bobine seule, puis la même bobine enroulée autour d'un gros clou en fer. Combien de trombones chacune soulève-t-elle ? Ensuite, observons ces schémas : que trouve-t-on à l'intérieur d'un moteur électrique et d'une sonnerie ?",
    apprenants: "Observent silencieusement et comptent les trombones.",
    technique: "Démarche d'observation, expérimentation", support: "Bobine, clou, pile, trombones, schémas",
  },
  analyse: {
    qa: [
      { q: "Quelle bobine attire le plus de trombones ?", ra: "Celle qui entoure le clou en fer : beaucoup plus que la bobine seule." },
      { q: "Comment appelle-t-on la bobine à noyau de fer ?", ra: "Un électroaimant." },
      { q: "Que fait le noyau de fer ?", ra: "Il concentre et amplifie fortement le champ magnétique de la bobine." },
      { q: "L'électroaimant garde-t-il les qualités de la bobine ?", ra: "Oui : il s'allume, s'éteint et s'inverse avec le courant." },
      { q: "Où trouve-t-on des électroaimants ?", ra: "Dans les moteurs électriques, les sonneries, les grues magnétiques, les haut-parleurs, les relais." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Comparaison des montages",
  },
  synthese: {
    enseignant: "Donc, un électroaimant est une bobine enroulée autour d'un noyau de fer : le noyau concentre le champ magnétique et rend l'attraction beaucoup plus puissante, tout en restant commandée par le courant. Dans le moteur électrique, des électroaimants attirent et repoussent un aimant ou d'autres bobines : les impulsions se succèdent et l'axe tourne : l'énergie électrique devient mouvement. Dans la sonnerie électrique, l'électroaimant attire un marteau qui frappe la cloche ; ce mouvement coupe le courant, l'électroaimant lâche, le marteau revient, le courant repasse… et le cycle recommence des dizaines de fois par seconde : dring !",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir, schémas",
  },
  application: [
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) L'électroaimant est une bobine avec un noyau de fer.",
        "b) Le noyau de fer affaiblit le champ magnétique.",
        "c) L'électroaimant ne peut pas être éteint.",
        "d) Le moteur électrique transforme l'électricité en mouvement.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : il le concentre et l'amplifie." }],
        [{ text: "c) " }, { text: "Faux", cle: true }, { text: " : il suffit de couper le courant." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: " : grâce à ses électroaimants." }],
      ],
    },
    {
      consigne: "Remets dans l'ordre les étapes du cycle de la sonnerie électrique :",
      items: [
        "(1) Le marteau frappe la cloche — (2) Le courant passe, l'électroaimant attire le marteau — (3) Le courant est coupé par le mouvement, le marteau revient — (4) Le contact se rétablit et tout recommence.",
      ],
      corrige: [
        [{ text: "Ordre : " }, { text: "2 → 1 → 3 → 4", cle: true }, { text: " : le cycle se répète très vite : la cloche tinte sans arrêt." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : noyau – amplifie – électroaimant – moteur – marteau – concentré.",
      items: [
        "a) Un ……… est une bobine enroulée sur un ……… de fer, qui ……… le champ magnétique.",
        "b) Dans le ……… électrique, des électroaimants font tourner l'axe.",
        "c) Dans la sonnerie, l'électroaimant attire un ……… qui frappe la cloche.",
      ],
      corrige: [
        [{ text: "a) Un " }, { text: "électroaimant", cle: true }, { text: " est une bobine enroulée sur un " }, { text: "noyau", cle: true }, { text: " de fer, qui " }, { text: "amplifie", cle: true }, { text: " le champ magnétique." }],
        [{ text: "b) Dans le " }, { text: "moteur", cle: true }, { text: " électrique, des électroaimants font tourner l'axe." }],
        [{ text: "c) L'électroaimant attire un " }, { text: "marteau", cle: true }, { text: " qui frappe la cloche." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Quelle est la différence entre une bobine et un électroaimant ?",
        "b) Explique pourquoi la grue de la casse peut lâcher la voiture à volonté.",
        "c) Décris le cycle complet de la sonnerie électrique.",
        "d) Cite quatre appareils contenant un électroaimant ou un moteur électrique.",
      ],
      corrige: [
        [{ text: "a) L'électroaimant possède en plus " }, { text: "un noyau de fer qui amplifie fortement", cle: true }, { text: " le champ magnétique." }],
        [{ text: "b) Parce que son aimant est un électroaimant : " }, { text: "couper le courant supprime l'attraction", cle: true }, { text: " et la charge tombe." }],
        [{ text: "c) " }, { text: "Courant → attraction du marteau → coup de cloche → contact coupé → retour du marteau → contact rétabli → recommence", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Ventilateur, pompe à eau, sonnerie, haut-parleur, perceuse, jouet motorisé…", cle: true }, { text: "" }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["électroaimant", "noyau de fer", "moteur électrique", "sonnerie électrique", "applications"],
    sections: [
      {
        titre: "1. L'électroaimant",
        paras: [
          "Un électroaimant est une bobine enroulée autour d'un noyau de fer doux. Le noyau concentre les lignes de champ et amplifie considérablement l'attraction : là où la bobine seule soulevait un trombone, l'électroaimant soulève une poignée de clous !",
          "Il garde toutes les qualités de la bobine : commandé par le courant (marche/arrêt), inversable, réglable.",
        ],
      },
      {
        titre: "2. Le moteur électrique",
        paras: [
          "Le moteur électrique transforme l'énergie électrique en mouvement de rotation. Son principe : des électroaimants attirent et repoussent tour à tour un aimant (ou d'autres bobines) fixé sur un axe. Les impulsions magnétiques, bien synchronisées, entretiennent la rotation.",
          "On trouve des moteurs partout : ventilateurs, pompes à eau, perceuses, jouets, véhicules électriques.",
        ],
      },
      {
        titre: "3. La sonnerie électrique",
        paras: [
          "La sonnerie utilise un électroaimant et un contact mobile astucieux :",
        ],
        puces: [
          "le courant passe : l'électroaimant attire le marteau, qui frappe la cloche ;",
          "en bougeant, le marteau coupe le contact : plus de courant, plus d'attraction ;",
          "un ressort ramène le marteau : le contact se rétablit, et tout recommence ;",
          "le cycle se répète des dizaines de fois par seconde : dring !",
        ],
      },
    ],
    saisTu: [
      "Les trains à sustentation magnétique (Maglev) du Japon et de Chine roulent… sans toucher le rail ! D'immenses électroaimants les font léviter et les propulsent à plus de 600 km/h. Le record du monde ferroviaire appartient à un train qui ne touche pas le sol : merci l'électroaimant !",
    ],
    experience: [
      "Fabrique ton électroaimant pêcheur de clous :",
      "1. Enroule 50 tours de fil de cuivre isolé bien serrés autour d'un gros clou (garde 15 cm de fil libre de chaque côté).",
      "2. Dénude les extrémités et branche-les sur une pile plate (brièvement !).",
      "3. Pêche des trombones et petits clous : compte ta récolte.",
      "4. Compare avec et sans noyau, avec 25 et 50 spires. Coupe le courant : tout tombe !",
    ],
  },
  substitutions: [
    { officiel: "Électroaimant de démonstration", local: "Gros clou ou boulon + fil de cuivre isolé de récupération" },
    { officiel: "Maquette de sonnerie", local: "Schéma au tableau + sonnerie réelle du collège observée" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. L'électroaimant contient :  a) un noyau de bois   b) un noyau de fer   c) un noyau de cuivre",
        "2. Le noyau de fer :  a) affaiblit le champ   b) amplifie le champ   c) coupe le courant",
        "3. Le moteur électrique produit :  a) de la lumière   b) un mouvement de rotation   c) du son uniquement",
        "4. Dans la sonnerie, la cloche est frappée par :  a) le noyau   b) le marteau   c) la pile",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "un noyau de fer", cle: true }, { text: "." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "il amplifie le champ", cle: true }, { text: "." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "un mouvement de rotation", cle: true }, { text: "." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "le marteau", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Un électroaimant est plus puissant qu'une bobine seule.",
        "2. Le moteur électrique transforme le mouvement en électricité.",
        "3. La sonnerie coupe elle-même son courant à chaque coup de marteau.",
        "4. On ne peut pas régler la force d'un électroaimant.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Vrai", cle: true }, { text: " : grâce au noyau de fer." }],
        [{ text: "2. " }, { text: "Faux", cle: true }, { text: " : il transforme l'électricité en mouvement (l'inverse est la dynamo)." }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: " : c'est ce qui fait vibrer le marteau." }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : spires et intensité règlent sa force." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : rotation – lâche – noyau – électroaimants – attire – coupe.",
      items: [
        "La grue magnétique ……… la ferraille quand le courant passe et la ……… quand on ……… le courant. Le moteur électrique contient des ……… qui entretiennent la ……… de l'axe. Le ……… de fer amplifie le champ.",
      ],
      corrige: [
        [{ text: "La grue " }, { text: "attire", cle: true }, { text: " la ferraille quand le courant passe et la " }, { text: "lâche", cle: true }, { text: " quand on " }, { text: "coupe", cle: true }, { text: " le courant. Le moteur contient des " }, { text: "électroaimants", cle: true }, { text: " qui entretiennent la " }, { text: "rotation", cle: true }, { text: ". Le " }, { text: "noyau", cle: true }, { text: " de fer amplifie le champ." }],
      ],
    },
    {
      points: 6,
      consigne: "Conception ! Tu fabriques un électroaimant avec un clou, du fil isolé et une pile.",
      items: [
        "1. Donne les trois éléments indispensables et le rôle de chacun.",
        "2. Ton électroaimant est trop faible : propose deux améliorations.",
        "3. Explique pourquoi il faut du fil ISOLÉ et non du fil nu.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Le clou (noyau : amplifie), le fil isolé (bobine : crée le champ), la pile (fournit le courant)", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Ajouter des spires ; augmenter la tension (piles en série)", cle: true }, { text: " ; serrer les spires régulièrement." }],
        [{ text: "3. Avec du fil nu, " }, { text: "le courant passerait directement de spire en spire (court-circuit)", cle: true }, { text: " au lieu de parcourir toute la bobine." }],
      ],
    },
  ],
};

module.exports = { seances: [S13, S14, S15, S16, S17, S18, S19, S20, S21] };
