// data-unite5.js — UNITÉ 5 : L'HOMME ET LES ACTIVITÉS QUOTIDIENNES (Séances 57 à 62)
const TOTAL = 76;

const S57 = {
  numero: 57, total: TOTAL,
  titre: "Qu'est-ce que la population ?",
  theme: "L'Homme et les activités quotidiennes",
  objectif: "Être capable de définir la population et de dire qui en fait partie.",
  image: { id: "geot4_population", legende: "La population d'un village : tous ses habitants, petits et grands." },
  miseEnSituation: {
    texte: "Ce matin, un visiteur arrive à l'école avec un grand cahier. « Je viens compter les habitants du village », explique-t-il. « Tous ? », demande Faniry. « Oui, tous : les enfants, les papas, les mamans, les grands-pères et les grands-mères, tous ceux qui habitent ici ! » Faniry se tourne vers son voisin : « Alors, nous aussi, nous comptons ! »",
    question: "Qui compte-t-on quand on compte la population d'un village ?",
    ra: "Tous les habitants du village : les enfants, les adultes et les anciens.",
    support: "Schéma de la population d'un village (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Qu'est-ce que la population ? ». Après cette séance, vous serez capables de définir la population et de dire qui en fait partie.",
  observation: "Regardez et observez bien le dessin du village : les maisons, l'école et tous les habitants.",
  supportObservation: "Schéma de la population d'un village (page Leçon)",
  analyse: [
    ["Qui voit-on sur le dessin du village ?", "Des maisons, l'école et beaucoup d'habitants."],
    ["Nomme les habitants que tu reconnais.", "Des enfants, un homme, une femme, un bébé, une personne ancienne."],
    ["Le bébé fait-il partie de la population du village ?", "Oui : dès sa naissance, le bébé est un habitant."],
    ["Et la personne ancienne ?", "Oui : tous les habitants font partie de la population."],
    ["Comment appelle-t-on l'ensemble des habitants d'un lieu ?", "C'est la population."],
    ["Peut-on parler de la population d'une ville ? D'un pays ?", "Oui : chaque ville, chaque pays a sa population."],
  ],
  synthese: "Donc, la population, c'est l'ensemble des habitants d'un lieu : d'un village, d'une ville ou d'un pays. Elle compte tout le monde : les enfants, les adultes et les anciens, les filles et les garçons. Compter les habitants d'un lieu s'appelle recenser.",
  appExos: [
    {
      consigne: "Complète avec les mots : population — habitants — anciens — recenser.",
      items: [
        "1. L'ensemble des habitants d'un lieu s'appelle la ……… .",
        "2. Les personnes qui habitent un village sont ses ……… .",
        "3. Les grands-pères et les grands-mères sont les ……… .",
        "4. Compter tous les habitants d'un lieu, c'est les ……… .",
      ],
      corrige: ["**population** / **habitants** / **anciens** / **recenser**."],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. La population, ce sont seulement les adultes.",
        "2. Un bébé fait partie de la population de son village.",
        "3. Une ville a une population.",
        "4. Les habitants d'un village quittent tous la population quand ils vieillissent.",
      ],
      corrige: [
        "1. **Faux** : c'est **tous les habitants**, enfants, adultes et anciens.",
        "2. **Vrai**.",
        "3. **Vrai**.",
        "4. **Faux** : on reste **un habitant** toute sa vie.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que la population ?",
        "2. Qui compte-t-on dans la population d'un village ?",
        "3. Que signifie « recenser » ?",
        "4. De quel lieu peut-on encore parler de la population ?",
      ],
      corrige: [
        "1. C'est **l'ensemble des habitants d'un lieu**.",
        "2. **Tous les habitants : les enfants, les adultes et les anciens**.",
        "3. Recenser, c'est **compter tous les habitants** d'un lieu.",
        "4. Par exemple : **d'une ville, d'un pays**.",
      ],
    },
    {
      consigne: "Classe ces personnes selon qu'elles font partie ou non de la population de ton village : un élève de ta classe — un touriste de passage — la marchande du marché — un habitant d'un autre village.",
      items: [
        "Font partie de la population du village : ………",
        "N'en font pas partie : ………",
      ],
      corrige: [
        "**Font partie** : un élève de ta classe, la marchande du marché (elle habite le village).",
        "**N'en font pas partie** : un touriste de passage, un habitant d'un autre village.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La définition de la population",
        paras: [
          "La population, c'est l'ensemble des habitants d'un lieu.",
          "Ce lieu peut être un village, une ville, une région ou un pays entier.",
        ],
      },
      {
        titre: "2. Qui fait partie de la population ?",
        paras: [
          "Tout le monde : les bébés, les enfants, les adultes et les anciens.",
          "Les filles et les garçons, les femmes et les hommes : tout habitant compte.",
          "Celui qui habite le lieu fait partie de sa population ; celui qui n'y habite pas n'en fait pas partie.",
        ],
        sous: [
          {
            titre: "a. Recenser",
            paras: [
              "Recenser, c'est compter tous les habitants d'un lieu.",
              "Le recensement dit combien nous sommes : c'est un grand compte, lieu par lieu.",
            ],
          },
        ],
      },
      {
        titre: "3. Pourquoi compter les habitants ?",
        paras: [
          "Connaître le nombre d'habitants aide le village : combien d'écoles faut-il ? De marchés ? De routes ?",
          "Chaque habitant compte : le recensement ne doit oublier personne.",
          "Le recensement d'un pays entier compte des millions d'habitants : Madagascar compte environ 27 millions d'habitants.",
        ],
        exemples: [
          "Le visiteur au grand cahier a compté, maison par maison, tous les habitants du village de Faniry.",
        ],
      },
    ],
  },
  motsCles: ["population", "habitants", "recenser", "recensement"],
  questionsRevision: [
    ["Qu'est-ce que la population ?", "C'est l'ensemble des habitants d'un lieu."],
    ["Que signifie « recenser » ?", "Compter tous les habitants d'un lieu."],
  ],
};

const S58 = {
  numero: 58, total: TOTAL,
  titre: "La répartition de la population par sexe et par âge",
  theme: "L'Homme et les activités quotidiennes",
  objectif: "Être capable de répartir la population par sexe et par âge.",
  image: { id: "geot4_sexe_age", legende: "Répartir la population : par sexe (garçons et filles) et par âge (enfants, adultes, anciens)." },
  miseEnSituation: {
    texte: "La maîtresse dessine un grand tableau au tableau noir. « Commençons par notre classe ! Les garçons, levez la main… douze ! Les filles… quatorze ! Maintenant, levons la main si tu as moins de dix ans… » Bientôt, le tableau est rempli. « Voilà, dit-elle, nous avons réparti notre classe par sexe et par âge ! »",
    question: "Comment la maîtresse a-t-elle réparti la classe ?",
    ra: "Par sexe (garçons et filles) et par âge (les enfants, les adultes, les anciens).",
    support: "Schéma de la répartition par sexe et par âge (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « La répartition de la population par sexe et par âge ». Après cette séance, vous serez capables de répartir une population par sexe et par âge.",
  observation: "Regardez et observez bien les deux panneaux : la répartition par sexe et la répartition par âge.",
  supportObservation: "Schéma de la répartition par sexe et par âge (page Leçon)",
  analyse: [
    ["Combien de groupes fait-on quand on répartit par sexe ?", "Deux groupes : les garçons (ou hommes) et les filles (ou femmes)."],
    ["Quels groupes fait-on quand on répartit par âge ?", "Trois groupes : les enfants, les adultes et les anciens."],
    ["Dans la classe de la maîtresse, combien de garçons ? De filles ?", "Douze garçons et quatorze filles."],
    ["À quel groupe d'âge appartiens-tu ?", "Au groupe des enfants."],
    ["Ton grand-père appartient à quel groupe ?", "Au groupe des anciens."],
    ["Pourquoi répartir la population en groupes ?", "Pour mieux la connaître et mieux répondre à ses besoins."],
  ],
  synthese: "Donc, on répartit la population par sexe : les garçons et les hommes d'un côté, les filles et les femmes de l'autre. On la répartit aussi par âge : les enfants, les adultes et les anciens. Répartir la population en groupes aide à mieux la connaître.",
  appExos: [
    {
      consigne: "Complète avec les mots : sexe — âge — enfants — anciens.",
      items: [
        "1. Répartir par ……, c'est séparer garçons et filles.",
        "2. Répartir par ……, c'est séparer selon le nombre d'années.",
        "3. Les élèves de la classe sont des ……… .",
        "4. Les grands-mères sont des ……… .",
      ],
      corrige: ["**sexe** / **âge** / **enfants** / **anciens**."],
    },
    {
      consigne: "Dans ta classe : compte les garçons et les filles, puis complète.",
      items: [
        "Garçons : …… — Filles : …… — Total : ……",
      ],
      corrige: [
        "Exemple : **Garçons : 12 — Filles : 14 — Total : 12 + 14 = 26**. (On accepte les chiffres réels de la classe.)",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. La répartition par sexe fait deux groupes.",
        "2. La répartition par âge fait deux groupes.",
        "3. Les adultes forment un groupe d'âge.",
        "4. Répartir la population aide à mieux la connaître.",
      ],
      corrige: [
        "1. **Vrai** : garçons et filles.",
        "2. **Faux** : elle fait **trois groupes** : enfants, adultes, anciens.",
        "3. **Vrai**.",
        "4. **Vrai**.",
      ],
    },
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Cite les deux groupes de la répartition par sexe.",
        "2. Cite les trois groupes de la répartition par âge.",
        "3. Qui a compté les mains levées dans la classe de la maîtresse ?",
        "4. À quel groupe d'âge appartient ton papa ?",
      ],
      corrige: [
        "1. **Les garçons (ou hommes) et les filles (ou femmes)**.",
        "2. **Les enfants, les adultes et les anciens**.",
        "3. **La maîtresse**, pour remplir le tableau de la classe.",
        "4. **Au groupe des adultes**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Répartir par sexe",
        paras: [
          "Le sexe sépare les habitants en deux groupes : les personnes de sexe masculin (les garçons, les hommes) et les personnes de sexe féminin (les filles, les femmes).",
          "Dans un tableau, on écrit les effectifs de chaque groupe : par exemple 12 garçons et 14 filles.",
        ],
      },
      {
        titre: "2. Répartir par âge",
        paras: [
          "L'âge sépare les habitants en trois groupes : les enfants, les adultes et les anciens.",
          "Les enfants vont à l'école ; les adultes travaillent ; les anciens conseillent et transmettent les traditions.",
        ],
        sous: [
          {
            titre: "a. Le tableau de la classe",
            paras: [
              "On dessine un tableau : une ligne pour les garçons, une ligne pour les filles.",
              "On ajoute les âges : combien d'élèves ont neuf ans ? dix ans ?",
              "La dernière colonne donne le total : c'est l'effectif.",
            ],
          },
        ],
      },
      {
        titre: "3. Pourquoi ces tableaux ?",
        paras: [
          "Un tableau de répartition montre d'un coup d'œil qui habite un lieu.",
          "Il aide à prévoir : des écoles pour les enfants, des dispensaires pour tous, des lieux de rencontre pour les anciens.",
        ],
        exemples: [
          "Le tableau de la classe de la maîtresse : 12 garçons et 14 filles, dont 20 enfants de moins de dix ans.",
        ],
      },
    ],
  },
  motsCles: ["répartition", "sexe", "âge", "tableau", "effectif"],
  questionsRevision: [
    ["Cite les deux groupes de la répartition par sexe.", "Les garçons (hommes) et les filles (femmes)."],
    ["Cite les trois groupes de la répartition par âge.", "Les enfants, les adultes et les anciens."],
  ],
};

const S59 = {
  numero: 59, total: TOTAL,
  titre: "L'effectif de l'école et du village",
  theme: "L'Homme et les activités quotidiennes",
  objectif: "Être capable de lire et de remplir un tableau d'effectifs de l'école et du village.",
  image: { id: "geot4_effectif", legende: "Le tableau des effectifs de l'école : le nombre d'élèves par classe." },
  miseEnSituation: {
    texte: "Le directeur de l'école rassemble les chefs de classe. « Pour mon rapport, j'ai besoin des effectifs ! Allez compter les élèves de chaque classe. » Les chefs partent, cahiers en main. Une heure plus tard, le grand tableau est prêt : T1, T2, T3, T4… et le total de l'école ! « Et savez-vous combien d'habitants compte notre village ? demande le directeur. Plus de mille ! »",
    question: "Qu'ont compté les chefs de classe, et comment appelle-t-on ce nombre ?",
    ra: "Le nombre d'élèves de chaque classe : c'est l'effectif.",
    support: "Tableau des effectifs de l'école (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « L'effectif de l'école et du village ». Après cette séance, vous serez capables de lire et de remplir un tableau d'effectifs.",
  observation: "Regardez et observez bien le tableau : les classes, les colonnes garçons, filles et total.",
  supportObservation: "Tableau des effectifs de l'école (page Leçon)",
  analyse: [
    ["Que montre la première colonne du tableau ?", "Les classes : T1, T2, T3, T4."],
    ["Combien de garçons en T4 ? Et de filles ?", "Douze garçons et quatorze filles."],
    ["Quel est l'effectif total de la classe de T4 ?", "Douze plus quatorze : vingt-six élèves."],
    ["Comment trouve-t-on le total de l'école ?", "On additionne les effectifs de toutes les classes."],
    ["Quel est l'effectif total de l'école du tableau ?", "Quarante-cinq plus cinquante : quatre-vingt-quinze élèves."],
    ["Comment appelle-t-on le nombre d'élèves ou d'habitants d'un lieu ?", "C'est l'effectif."],
  ],
  synthese: "Donc, l'effectif, c'est le nombre d'élèves d'une école ou d'habitants d'un lieu. On le lit et on l'écrit dans un tableau : une ligne par classe, des colonnes garçons, filles et total. Pour trouver l'effectif total, on additionne tous les effectifs.",
  appExos: [
    {
      consigne: "Réponds en t'aidant du tableau de la leçon.",
      items: [
        "1. Combien d'élèves en T1 ?",
        "2. Combien de garçons en T2 ?",
        "3. Combien d'élèves en tout dans l'école ?",
        "4. Quelle classe a l'effectif le plus grand ?",
      ],
      corrige: [
        "1. **Vingt-deux élèves** (10 garçons + 12 filles).",
        "2. **Onze garçons**.",
        "3. **Quatre-vingt-quinze élèves**.",
        "4. **La T4**, avec vingt-six élèves.",
      ],
    },
    {
      consigne: "Complète avec les mots : effectif — additionne — tableau — lignes.",
      items: [
        "1. Le nombre d'élèves d'une classe est son ……… .",
        "2. Pour trouver le total, on ……… les effectifs.",
        "3. On écrit les effectifs dans un ……… .",
        "4. Dans un tableau, chaque classe occupe une des ……… .",
      ],
      corrige: ["**effectif** / **additionne** / **tableau** / **lignes**."],
    },
  ],
  evalExos: [
    {
      consigne: "Complète le tableau : la classe de T3 a 12 garçons et 11 filles.",
      items: [
        "Effectif de T3 : 12 + …… = ……",
      ],
      corrige: [
        "12 + **11** = **23 élèves**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. L'effectif d'une école, c'est le nombre de ses maîtres.",
        "2. On additionne les effectifs pour trouver le total.",
        "3. Un village a aussi un effectif : ses habitants.",
        "4. Le tableau des effectifs se lit colonne par colonne et ligne par ligne.",
      ],
      corrige: [
        "1. **Faux** : c'est **le nombre de ses élèves** (ou d'habitants pour un lieu).",
        "2. **Vrai**.",
        "3. **Vrai**.",
        "4. **Vrai**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Qu'est-ce qu'un effectif ?",
        paras: [
          "L'effectif, c'est le nombre d'élèves d'une classe ou d'une école.",
          "Par extension, c'est aussi le nombre d'habitants d'un lieu : l'effectif du village.",
        ],
      },
      {
        titre: "2. Lire un tableau d'effectifs",
        paras: [
          "Chaque ligne du tableau montre une classe ; chaque colonne montre un groupe : garçons, filles, total.",
          "Pour lire le tableau : je choisis ma ligne, puis ma colonne, et je lis le nombre.",
        ],
        sous: [
          {
            titre: "a. Remplir le tableau",
            paras: [
              "On compte les élèves de sa classe : d'abord les garçons, puis les filles.",
              "On additionne : garçons + filles = effectif de la classe.",
              "On additionne toutes les classes : c'est l'effectif de l'école.",
            ],
          },
        ],
      },
      {
        titre: "3. De l'école au village",
        paras: [
          "L'école compte ses élèves ; le village compte ses habitants.",
          "Le chef du village garde la liste des familles : il connaît l'effectif du village.",
        ],
        exemples: [
          "Le directeur a additionné : 22 + 24 + 23 + 26 = 95 élèves ; et le village, lui, compte plus de mille habitants.",
        ],
      },
    ],
  },
  motsCles: ["effectif", "tableau", "additionner", "total"],
  questionsRevision: [
    ["Qu'est-ce qu'un effectif ?", "C'est le nombre d'élèves d'une classe ou d'une école, ou d'habitants d'un lieu."],
    ["Comment trouve-t-on l'effectif total d'une école ?", "On additionne les effectifs de toutes les classes."],
  ],
};

const S60 = {
  numero: 60, total: TOTAL,
  titre: "Les naissances",
  theme: "L'Homme et les activités quotidiennes",
  objectif: "Être capable d'expliquer qu'une naissance augmente la population.",
  image: { id: "geot4_naissances", legende: "Une naissance : le petit Rakoto arrive, la population du village augmente." },
  miseEnSituation: {
    texte: "Ce matin, Faniry arrive à l'école tout excité : « J'ai un petit frère ! Il est né cette nuit, il s'appelle Rakoto ! » La maîtresse félicite la famille et dit à la classe : « Savez-vous que notre village vient de grandir ? Un nouvel habitant est arrivé ! »",
    question: "Pourquoi le village vient-il de grandir ?",
    ra: "Parce qu'un enfant est né : il y a un nouvel habitant, la population augmente.",
    support: "Schéma de la naissance (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les naissances ». Après cette séance, vous serez capables d'expliquer qu'une naissance augmente la population.",
  observation: "Regardez et observez bien le dessin : la famille avec son nouveau-né et la grande flèche verte.",
  supportObservation: "Schéma de la naissance (page Leçon)",
  analyse: [
    ["Qu'annonce Faniry à l'école ?", "La naissance de son petit frère Rakoto."],
    ["Comment s'appelle un enfant qui vient de naître ?", "C'est un nouveau-né."],
    ["Que devient la population du village avec cette naissance ?", "Elle augmente : il y a un habitant de plus."],
    ["Si le village avait 1 000 habitants, combien en a-t-il maintenant ?", "Mille un habitants."],
    ["Que fait la famille pour fêter la naissance ?", "Elle accueille le bébé et le présente à tous."],
    ["Comment appelle-t-on l'arrivée d'un enfant au monde ?", "C'est la naissance."],
  ],
  synthese: "Donc, une naissance, c'est l'arrivée d'un nouvel enfant au monde. Chaque naissance apporte un nouvel habitant : la population augmente. Quand il y a beaucoup de naissances, le village et la ville grandissent vite.",
  appExos: [
    {
      consigne: "Complète avec les mots : naissance — nouveau-né — augmente — habitant.",
      items: [
        "1. L'arrivée d'un enfant au monde est une ……… .",
        "2. Un enfant qui vient de naître est un ……… .",
        "3. Chaque naissance fait que la population ……… .",
        "4. Le bébé Rakoto est un nouvel ……… du village.",
      ],
      corrige: ["**naissance** / **nouveau-né** / **augmente** / **habitant**."],
    },
    {
      consigne: "Résous ces petits problèmes.",
      items: [
        "1. Le village compte 300 habitants. Cette année, il y a 5 naissances. Combien d'habitants maintenant ?",
        "2. La classe de T1 compte 22 élèves. Un élève nouveau-né… non ! Un petit frère naît dans une famille : que devient la population du village ?",
      ],
      corrige: [
        "1. 300 + 5 = **305 habitants**.",
        "2. La population du village **augmente de un** habitant.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Une naissance diminue la population.",
        "2. Le nouveau-né compte comme habitant dès sa naissance.",
        "3. Avec 5 naissances, un village de 200 habitants en compte 205.",
        "4. Beaucoup de naissances font grandir vite une population.",
      ],
      corrige: [
        "1. **Faux** : elle **augmente** la population.",
        "2. **Vrai**.",
        "3. **Vrai**.",
        "4. **Vrai**.",
      ],
    },
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'une naissance ?",
        "2. Que fait une naissance à la population d'un lieu ?",
        "3. Comment s'appelle un enfant qui vient de naître ?",
        "4. Le village de Soa compte 1 500 habitants ; 8 enfants y sont nés cette année. Combien d'habitants maintenant ?",
      ],
      corrige: [
        "1. C'est **l'arrivée d'un nouvel enfant au monde**.",
        "2. Elle **fait augmenter la population** : un habitant de plus.",
        "3. C'est **un nouveau-né**.",
        "4. 1 500 + 8 = **1 508 habitants**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La naissance",
        paras: [
          "Une naissance, c'est l'arrivée d'un nouvel enfant au monde.",
          "L'enfant qui vient de naître est un nouveau-né ; sa famille l'accueille avec joie.",
        ],
      },
      {
        titre: "2. La naissance fait grandir la population",
        paras: [
          "Chaque naissance ajoute un habitant au village ou à la ville.",
          "On écrit : population + naissances = nouvelle population.",
          "Quand les naissances sont nombreuses, la population grandit vite : il faut plus d'écoles, plus de champs, plus de maisons.",
        ],
        sous: [
          {
            titre: "a. Bienvenue au nouveau-né !",
            paras: [
              "Dans les familles malgaches, la naissance d'un enfant est une grande joie : on présente le bébé à la famille et aux voisins.",
            ],
          },
        ],
      },
      {
        titre: "3. Compter les naissances",
        paras: [
          "Chaque année, on compte les naissances du village.",
          "Ce nombre sert à préparer l'avenir : combien d'élèves en T1 dans quelques années ?",
        ],
        exemples: [
          "Cette année, le village de Faniry a enregistré cinq naissances : cinq nouveaux habitants, dont le petit Rakoto.",
        ],
      },
    ],
  },
  motsCles: ["naissance", "nouveau-né", "augmenter", "habitants"],
  questionsRevision: [
    ["Qu'est-ce qu'une naissance ?", "C'est l'arrivée d'un nouvel enfant au monde."],
    ["Que fait une naissance à la population ?", "Elle l'augmente d'un habitant."],
  ],
};

const S61 = {
  numero: 61, total: TOTAL,
  titre: "Les décès",
  theme: "L'Homme et les activités quotidiennes",
  objectif: "Être capable d'expliquer qu'un décès diminue la population, et de parler du deuil avec respect.",
  image: { id: "geot4_deces", legende: "Un décès : la famille accompagne son ancien ; la population du village diminue." },
  miseEnSituation: {
    texte: "Le grand-père de Voahangy, si gentil, si plein d'histoires, nous a quittés la semaine dernière. Tout le village s'est réuni pour l'accompagner jusqu'au tombeau de famille. La maîtresse dit à la classe, doucement : « C'est ainsi : chaque décès nous attriste, et le village perd un habitant. C'est pourquoi on honore la mémoire des anciens. »",
    question: "Qu'arrive-t-il au village quand un habitant meurt ?",
    ra: "Le village perd un habitant : la population diminue.",
    support: "Schéma du décès (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les décès ». Après cette séance, vous serez capables d'expliquer qu'un décès diminue la population.",
  observation: "Regardez et observez bien le dessin : le tombeau, les fleurs, la famille qui accompagne, et la grande flèche rouge.",
  supportObservation: "Schéma du décès (page Leçon)",
  analyse: [
    ["Qui a quitté le village de Voahangy ?", "Son grand-père."],
    ["Comment appelle-t-on la mort d'une personne ?", "C'est le décès."],
    ["Que devient la population du village ?", "Elle diminue : il y a un habitant de moins."],
    ["Si le village avait 305 habitants, combien en reste-t-il après un décès ?", "Trois cent quatre habitants."],
    ["Que fait la famille quand un ancien meurt ?", "Elle porte le deuil et l'accompagne jusqu'au tombeau."],
    ["Que garde-t-on de l'ancien disparu ?", "Sa mémoire : ses histoires et ses conseils."],
  ],
  synthese: "Donc, un décès, c'est la mort d'un habitant. Chaque décès enlève un habitant : la population diminue. La famille porte le deuil et le village accompagne son ancien jusqu'au tombeau : on honore ainsi la mémoire de ceux qui nous ont quittés.",
  appExos: [
    {
      consigne: "Complète avec les mots : décès — diminue — deuil — mémoire.",
      items: [
        "1. La mort d'un habitant est un ……… .",
        "2. Chaque décès fait que la population ……… .",
        "3. Après un décès, la famille porte le ……… .",
        "4. On honore la ……… de l'ancien disparu.",
      ],
      corrige: ["**décès** / **diminue** / **deuil** / **mémoire**."],
    },
    {
      consigne: "Résous ce petit problème.",
      items: [
        "Le village compte 400 habitants. Cette année, il y a eu 2 décès et 6 naissances. Le village a-t-il grandi ou diminué ? De combien ?",
      ],
      corrige: [
        "Naissances : +6 ; décès : −2 ; 6 − 2 = **+4** : le village a **grandi de 4 habitants** (404 habitants).",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Un décès augmente la population du village.",
        "2. Après un décès, la famille porte le deuil.",
        "3. Avec 2 décès, un village de 100 habitants en compte 98.",
        "4. On accompagne l'ancien jusqu'au tombeau de famille.",
      ],
      corrige: [
        "1. **Faux** : il **diminue** la population.",
        "2. **Vrai**.",
        "3. **Vrai**.",
        "4. **Vrai**.",
      ],
    },
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'un décès ?",
        "2. Que fait un décès à la population d'un lieu ?",
        "3. Que fait la famille pendant le deuil ?",
        "4. Le village compte 1 200 habitants ; 3 décès cette année. Combien d'habitants maintenant ?",
      ],
      corrige: [
        "1. C'est **la mort d'un habitant**.",
        "2. Il **diminue la population** : un habitant de moins.",
        "3. Elle **porte le deuil** et accompagne son ancien jusqu'au tombeau.",
        "4. 1 200 − 3 = **1 197 habitants**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Le décès",
        paras: [
          "Un décès, c'est la mort d'un habitant.",
          "Le décès d'un proche attriste toute la famille et tout le village.",
        ],
      },
      {
        titre: "2. Le décès diminue la population",
        paras: [
          "Chaque décès enlève un habitant au village ou à la ville.",
          "On écrit : population − décès = nouvelle population.",
        ],
        sous: [
          {
            titre: "a. Le deuil et la mémoire",
            paras: [
              "Pendant le deuil, la famille reçoit le réconfort des voisins et des amis.",
              "On honore la mémoire de l'ancien : ses histoires, ses conseils et son travail restent dans le cœur du village.",
            ],
          },
        ],
      },
      {
        titre: "3. Naissances et décès ensemble",
        paras: [
          "Chaque année, le village compte ses naissances et ses décès.",
          "Si les naissances sont plus nombreuses que les décès, le village grandit.",
        ],
        exemples: [
          "Le village de Voahangy a compté cette année 6 naissances et 2 décès : il a grandi de 4 habitants.",
        ],
      },
    ],
  },
  motsCles: ["décès", "diminuer", "deuil", "mémoire"],
  questionsRevision: [
    ["Qu'est-ce qu'un décès ?", "C'est la mort d'un habitant."],
    ["Que fait un décès à la population ?", "Il la diminue d'un habitant."],
  ],
};

const S62 = {
  numero: 62, total: TOTAL,
  titre: "Les migrations",
  theme: "L'Homme et les activités quotidiennes",
  objectif: "Être capable d'expliquer les départs et les arrivées d'habitants : les migrations.",
  image: { id: "geot4_migrations", legende: "Les migrations : le départ vers la ville et l'arrivée au village." },
  miseEnSituation: {
    texte: "Deux nouvelles à la fois au village ! La grande sœur de Hery part à Antananarivo pour continuer ses études : toute la famille l'accompagne au passage du taxi-brousse. Et la même semaine, une nouvelle famille arrive de la ville : elle vient cultiver les terres du versant. « Notre village change », sourit le chef du village : « des départs, des arrivées… la vie bouge ! »",
    question: "Pourquoi le village change-t-il cette semaine ?",
    ra: "Parce qu'une habitante est partie et qu'une famille est arrivée : ce sont des migrations.",
    support: "Schéma des migrations (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les migrations ». Après cette séance, vous serez capables d'expliquer les départs et les arrivées d'habitants.",
  observation: "Regardez et observez bien le dessin : le village, la ville, la flèche rouge du départ et la flèche verte de l'arrivée.",
  supportObservation: "Schéma des migrations (page Leçon)",
  analyse: [
    ["Pourquoi la grande sœur de Hery quitte-t-elle le village ?", "Pour continuer ses études à Antananarivo."],
    ["Comment appelle-t-on le fait de quitter son lieu pour aller vivre ailleurs ?", "C'est le départ : on dit aussi émigrer."],
    ["Et la famille qui arrive de la ville ?", "Elle immigre au village : c'est une arrivée."],
    ["Pourquoi cette nouvelle famille arrive-t-elle au village ?", "Pour cultiver les terres du versant."],
    ["Que font les départs et les arrivées au nombre d'habitants ?", "Les départs le diminuent ; les arrivées l'augmentent."],
    ["Comment appelle-t-on ensemble ces départs et ces arrivées ?", "Ce sont les migrations."],
  ],
  synthese: "Donc, les migrations sont les déplacements des habitants : celui qui part émigre et fait diminuer la population de son lieu ; celui qui arrive immigre et la fait augmenter. On migre pour travailler, étudier, se marier ou cultiver de nouvelles terres.",
  appExos: [
    {
      consigne: "Complète avec les mots : émigre — immigre — diminuent — augmentent.",
      items: [
        "1. Celui qui quitte son village ……… .",
        "2. Celui qui arrive dans un nouveau lieu ……… .",
        "3. Les départs ……… la population du lieu quitté.",
        "4. Les arrivées ……… la population du lieu d'accueil.",
      ],
      corrige: ["**émigre** / **immigre** / **diminuent** / **augmentent**."],
    },
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'une migration ?",
        "2. Pourquoi la grande sœur de Hery part-elle en ville ?",
        "3. Que fait un départ à la population du village ?",
        "4. Cite deux raisons de migrer.",
      ],
      corrige: [
        "1. C'est **un déplacement d'habitants** : un départ ou une arrivée.",
        "2. **Pour continuer ses études** à Antananarivo.",
        "3. Il **fait diminuer** la population.",
        "4. Par exemple : **travailler** et **étudier** (aussi se marier, cultiver de nouvelles terres).",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Émigrer, c'est arriver dans un nouveau lieu.",
        "2. Immigrer, c'est s'installer dans un nouveau lieu.",
        "3. Les migrations changent le nombre d'habitants.",
        "4. On ne migre que pour se marier.",
      ],
      corrige: [
        "1. **Faux** : émigrer, c'est **quitter** son lieu.",
        "2. **Vrai**.",
        "3. **Vrai**.",
        "4. **Faux** : on migre aussi **pour travailler, étudier, cultiver**.",
      ],
    },
    {
      consigne: "Résous ce petit problème.",
      items: [
        "Le village compte 500 habitants. Cette année : 4 départs, 7 arrivées, 9 naissances, 3 décès. Combien d'habitants maintenant ?",
      ],
      corrige: [
        "500 − 4 + 7 + 9 − 3 = **509 habitants**.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Qu'est-ce qu'une migration ?",
        paras: [
          "Une migration, c'est le déplacement d'un habitant qui change de lieu de vie.",
          "Quitter son lieu, c'est émigrer ; arriver dans un nouveau lieu, c'est immigrer.",
        ],
      },
      {
        titre: "2. Pourquoi migre-t-on ?",
        paras: [
          "Pour étudier : aller en ville pour continuer l'école.",
          "Pour travailler : chercher un emploi, cultiver de nouvelles terres.",
          "Pour la famille : se marier, rejoindre les siens.",
        ],
        sous: [
          {
            titre: "a. Départs et arrivées",
            paras: [
              "Le départ fait diminuer la population du lieu quitté.",
              "L'arrivée fait augmenter la population du lieu d'accueil.",
            ],
          },
        ],
      },
      {
        titre: "3. Le village qui bouge",
        paras: [
          "Les villages et les villes échangent sans arrêt des habitants.",
          "Les migrations font partie de la vie : elles changent peu à peu le visage des localités.",
        ],
        exemples: [
          "Cette semaine au village de Hery : un départ pour les études en ville, et une famille qui arrive pour cultiver le versant.",
        ],
      },
    ],
  },
  motsCles: ["migration", "émigrer", "immigrer", "départ", "arrivée"],
  questionsRevision: [
    ["Qu'est-ce qu'une migration ?", "C'est le déplacement d'un habitant qui change de lieu de vie."],
    ["Quelle est la différence entre émigrer et immigrer ?", "Émigrer, c'est quitter son lieu ; immigrer, c'est arriver dans un nouveau lieu."],
  ],
};

module.exports = { topics: [S57, S58, S59, S60, S61, S62] };
