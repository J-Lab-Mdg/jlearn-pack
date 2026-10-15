// data-unite3b.js — UNITÉ 3 : LA POPULATION MALGACHE (Séances 32 à 36)
// Contenu rédactionnel conforme au Programme d'études officiel T6 — Géographie (p. 173-175)
const TOTAL = 78;

const S32 = {
  numero: 32, total: TOTAL,
  titre: "Le mouvement pendulaire",
  theme: "La population malgache",
  objectif: "Être capable d'expliquer le mouvement pendulaire et de citer des exemples de trajets quotidiens.",
  image: { id: "geo6_pendulaire", legende: "Le mouvement pendulaire : partir le matin, revenir le soir." },
  scene: { file: "scene_s32_pendulaire.jpg", mode: "document", legende: "Document : à l'aube sur la route d'Antsirabe, les vélos chargés de paniers convergent vers la ville : le marché ouvre bientôt." },
  revisionOuverture: [
    ["Quelle différence entre émigration et immigration ?", "L'émigration est le départ d'un lieu ; l'immigration est l'arrivée dans un lieu."],
    ["Comment appelle-t-on celui qui arrive dans une nouvelle ville ?", "Un immigrant."],
  ],
  miseEnSituation: {
    texte: "Il est cinq heures du matin. Sur la route qui descend vers Antsirabe, Miora regarde passer un curieux cortège : des dizaines de vélos chargés de paniers de brèdes, de poules, de charbon. Tous roulent dans le même sens, vers la ville. « Ce soir, ils remonteront, explique maman Rasoa. Ils viennent vendre au marché, puis ils rentrent dormir chez eux, au village. »",
    question: "Comment appelle-t-on ce va-et-vient quotidien entre le village et la ville ?",
    ra: "C'est le mouvement pendulaire : partir le matin pour travailler ou vendre en ville, revenir le soir au village, comme le balancier d'une horloge.",
    support: "Schéma du mouvement pendulaire (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Le mouvement pendulaire ». Après cette séance, vous serez capables d'expliquer ce mouvement et de donner des exemples de trajets quotidiens.",
  observation: "Observez bien le schéma : le matin, les flèches vont du village vers la ville ; le soir, elles reviennent de la ville vers le village.",
  supportObservation: "Schéma du mouvement pendulaire (page Leçon)",
  analyse: [
    ["Que font ces cyclistes chaque matin ?", "Ils descendent vers la ville pour vendre leurs produits ou travailler."],
    ["Et chaque soir ?", "Ils remontent dormir chez eux, au village."],
    ["Pourquoi appelle-t-on cela « pendulaire » ?", "Parce que ce mouvement fait des allers-retours, comme le balancier d'une horloge."],
    ["Qui fait ces trajets ?", "Les vendeurs, les ouvriers, les employés, et aussi les élèves qui étudient en ville."],
    ["Pourquoi ne pas habiter en ville ?", "La vie y coûte plus cher ; au village, on garde sa maison et son champ."],
    ["Le mouvement pendulaire est-il une migration ?", "Non : on ne change pas de logement, on fait seulement des trajets quotidiens."],
  ],
  synthese: "Donc, le mouvement pendulaire, c'est le va-et-vient quotidien des personnes entre leur domicile et leur lieu de travail ou d'étude : partir le matin, revenir le soir.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que le mouvement pendulaire ?",
        "2. Donne deux exemples de personnes qui font ces trajets.",
        "3. Pourquoi ces personnes rentrent-elles chez elles le soir ?",
        "4. Le mouvement pendulaire est-il une migration ?",
      ],
      corrige: [
        "1. C'est **le va-et-vient quotidien** entre le domicile et le lieu de travail ou d'étude.",
        "2. Par exemple : **les vendeurs du marché** et **les ouvriers** (aussi les élèves).",
        "3. Parce que **la vie au village coûte moins cher** et que leur maison et leur champ y sont.",
        "4. **Non** : on ne change pas de logement, seulement de place le jour.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le mouvement pendulaire se fait chaque jour.",
        "2. Celui qui fait un trajet pendulaire change de maison.",
        "3. Le matin, les flèches vont vers la ville.",
        "4. Le soir, tout le monde revient au village.",
      ],
      corrige: [
        "1. **Vrai** : c'est un trajet quotidien.",
        "2. **Faux** : il garde son logement habituel.",
        "3. **Vrai** : on va travailler ou vendre en ville.",
        "4. **Vrai** : chacun rentre chez soi le soir.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : pendulaire — matin — soir — quotidien.",
      items: [
        "Le trajet qui se répète chaque jour est un trajet ……… .",
        "Le mouvement ……… est un aller-retour entre le domicile et le travail.",
        "Le ……… , on part vers la ville.",
        "Le ……… , on revient à la maison.",
      ],
      corrige: [
        "**quotidien** / **pendulaire** / le **matin** / le **soir**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le mouvement pendulaire ressemble : A. au balancier d'une horloge — B. à une pierre jetée — C. à un arbre immobile",
        "2. Ces trajets ont lieu : A. une fois par an — B. chaque jour — C. jamais",
        "3. Le matin, les vendeurs vont : A. au village — B. au marché de la ville — C. dormir",
        "4. Le soir, ils retournent : A. en ville — B. à l'hôpital — C. chez eux au village",
        "5. Celui qui fait un trajet pendulaire : A. déménage — B. ne déménage pas — C. vend sa maison",
      ],
      corrige: [
        "1. Réponse **A** : un va-et-vient régulier.",
        "2. Réponse **B** : chaque jour.",
        "3. Réponse **B** : au marché de la ville.",
        "4. Réponse **C** : chez eux au village.",
        "5. Réponse **B** : il garde son logement.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Partir le matin, revenir le soir",
        paras: [
          "Chaque matin, des milliers de personnes quittent leur village ou leur quartier pour aller travailler, vendre ou étudier ailleurs.",
          "Le soir, elles font le chemin inverse et rentrent à la maison. Le lendemain, tout recommence.",
        ],
        exemples: [
          "Les cyclistes chargés de paniers qui descendent vers Antsirabe avant le lever du soleil.",
          "L'employé qui prend le taxi-brousse chaque matin pour rejoindre son bureau.",
        ],
      },
      {
        titre: "2. Un mouvement de va-et-vient",
        paras: [
          "Ce mouvement s'appelle le mouvement pendulaire, parce qu'il fait des allers-retours réguliers, comme le balancier d'une horloge.",
          "Il ne s'agit pas d'une migration : celui qui fait ce trajet ne change pas de logement. Il vit toujours au même endroit ; seul son trajet quotidien bouge.",
        ],
        exemples: [
          "Le vendeur de brèdes dort au village chaque nuit, en ville chaque midi.",
          "Les élèves internes de la semaine, eux, ne sont pas pendulaires : ils ne rentrent que le week-end.",
        ],
      },
      {
        titre: "3. Pourquoi ces trajets quotidiens ?",
        paras: [
          "Beaucoup de familles préfèrent rester vivre au village : la vie y coûte moins cher, la famille et le champ y restent.",
          "Mais le travail, les écoles et les marchés se trouvent en ville. Alors on fait la navette. Résultat : le matin, les routes qui entrent dans les villes sont bondées, et les marchés débordent ; le soir, le flot repart dans l'autre sens.",
        ],
        exemples: [
          "Autour des grandes marchés, la foule est immense dès l'aube et se vide à midi.",
          "Aux heures de pointe, les taxis-brousse roulent complets dans les deux sens.",
        ],
      },
    ],
  },
  motsCles: ["mouvement pendulaire", "domicile", "trajet quotidien", "va-et-vient", "heure de pointe"],
  questionsRevision: [
    ["Qu'est-ce que le mouvement pendulaire ?", "C'est le va-et-vient quotidien entre le domicile et le lieu de travail ou d'étude."],
    ["Est-ce une migration ? Pourquoi ?", "Non, car on ne change pas de logement."],
  ],
};

const S33 = {
  numero: 33, total: TOTAL,
  titre: "Les causes et les conséquences des migrations",
  theme: "La population malgache",
  objectif: "Être capable de citer les causes des migrations (économiques, socioculturelles, catastrophes naturelles) et leurs conséquences.",
  image: { id: "geo6_causes_consequences_migrations", legende: "Pourquoi les hommes partent, et ce qui arrive ensuite." },
  scene: { file: "scene_s33_consequences.jpg", mode: "document", legende: "Document : sur les collines d'Antananarivo, de nouvelles maisons de briques rouges grimpent chaque année : la ville déborde de nouveaux arrivants." },
  revisionOuverture: [
    ["Qu'est-ce que le mouvement pendulaire ?", "C'est le va-et-vient quotidien entre le domicile et le lieu de travail ou d'étude."],
    ["Est-ce une migration ? Pourquoi ?", "Non, car on ne change pas de logement."],
  ],
  miseEnSituation: {
    texte: "Miora relit la lettre que Tojo lui a envoyée de Toamasina. « Tu sais, écrit-il, dans ma rue, la moitié des voisins viennent d'ailleurs : un maçon venu du sud après le cyclone, une couturière qui a suivi son mari, un étudiant venu pour l'université. Ici, on trouve du travail, des écoles, de l'argent. » Et Tojo conclut : « Notre ville grandit si vite que les collines se couvrent de maisons. »",
    question: "Pourquoi tant de personnes quittent-elles leur lieu d'origine ? Et qu'arrive-t-il ensuite ?",
    ra: "Elles partent pour des raisons économiques, socioculturelles ou à cause de catastrophes naturelles. Résultat : les villes grossissent vite, parfois plus par les émigrants que par leurs propres enfants.",
    support: "Schéma des causes et des conséquences des migrations (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les causes et les conséquences des migrations ». Après cette séance, vous serez capables de dire pourquoi les hommes partent et ce que leurs départs provoquent.",
  observation: "Observez bien le schéma : à gauche, les raisons du départ ; à droite, ce qui se passe dans les villes d'arrivée.",
  supportObservation: "Schéma des causes et des conséquences des migrations (page Leçon)",
  analyse: [
    ["Pourquoi Rado est-il parti à Antananarivo ?", "Pour trouver du travail : c'est une cause économique."],
    ["Pourquoi une jeune épouse rejoint-elle parfois son mari ?", "Pour vivre en famille : c'est une cause socioculturelle."],
    ["Pourquoi le maçon de la lettre a-t-il quitté le sud ?", "Un cyclone a détruit sa maison : une catastrophe naturelle l'a chassé."],
    ["Quelle est la première conséquence dans les villes ?", "La population urbaine augmente très vite."],
    ["Que signifie la « domination des émigrants » ?", "Que dans certaines villes, les nouveaux venus sont plus nombreux que les enfants du pays."],
    ["Et que deviennent les villages de départ ?", "Ils se vident de leurs jeunes : c'est le début de l'exode rural."],
  ],
  synthese: "Donc, les migrations ont des causes économiques, socioculturelles et naturelles. Leurs conséquences : les villes grossissent vite, les émigrants y dominent parfois, et les campagnes perdent leurs habitants.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Cite les trois familles de causes des migrations.",
        "2. Donne un exemple de cause économique.",
        "3. Donne un exemple de cause socioculturelle.",
        "4. Cite deux conséquences des migrations dans les villes.",
      ],
      corrige: [
        "1. Les causes **économiques**, **socioculturelles** et **les catastrophes naturelles**.",
        "2. **Chercher du travail** ou une terre.",
        "3. **Rejoindre son époux** ou sa famille, suivre des études.",
        "4. **La population urbaine augmente** et **les émigrants y sont parfois plus nombreux** que les enfants du pays.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Un cyclone peut pousser une famille à partir.",
        "2. Les migrations vident les grandes villes.",
        "3. Chercher du travail est une cause économique de migration.",
        "4. La domination des émigrants veut dire que les nouveaux venus sont les plus nombreux.",
      ],
      corrige: [
        "1. **Vrai** : la maison détruite, il faut recommencer ailleurs.",
        "2. **Faux** : elles les remplissent, au contraire.",
        "3. **Vrai** : c'est même la cause la plus fréquente.",
        "4. **Vrai** : dans certaines villes, les arrivants dépassent les autochtones.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : économique — socioculturelle — urbaine — émigrants.",
      items: [
        "Partir pour trouver du travail, c'est une cause ……… de migration.",
        "Rejoindre son mari, c'est une cause ……… .",
        "Consequence : la population ……… augmente vite.",
        "Dans certaines villes, on parle de la domination des ……… .",
      ],
      corrige: [
        "cause **économique** / cause **socioculturelle** / population **urbaine** / des **émigrants**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Une cause de migration : A. rester dormir — B. chercher du travail — C. fermer la porte",
        "2. Une catastrophe naturelle qui chasse les habitants : A. un cyclone — B. une fête — C. un marché",
        "3. Après les migrations, les villes : A. rapetissent — B. grossissent — C. disparaissent",
        "4. Les villages de départ : A. se remplissent — B. se vident de leurs jeunes — C. ne changent pas",
        "5. Une cause socioculturelle de migration : A. le mariage — B. le chômage — C. la sécheresse",
      ],
      corrige: [
        "1. Réponse **B** : chercher du travail.",
        "2. Réponse **A** : un cyclone.",
        "3. Réponse **B** : elles grossissent vite.",
        "4. Réponse **B** : les jeunes partent, les anciens restent.",
        "5. Réponse **A** : suivre son époux ou sa famille.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Les causes économiques",
        paras: [
          "La plupart du temps, les hommes migrent pour gagner leur vie : chercher un emploi, une terre à cultiver, un meilleur salaire.",
          "Là où le travail manque, les jeunes partent vers les villes ou vers les zones de grands chantiers. Les études aussi font migrer : les lycées et les écoles supérieures attirent les élèves des campagnes.",
        ],
        exemples: [
          "Rado part travailler dans un atelier d'Antananarivo.",
          "Des élèves des villages environnants viennent étudier au collège d'Antsirabe.",
        ],
      },
      {
        titre: "2. Les causes socioculturelles et les catastrophes naturelles",
        paras: [
          "D'autres migrations viennent de la vie en société : le mariage, le désir de rejoindre sa famille, la coutume qui envoie un enfant chez un oncle.",
          "Enfin, les catastrophes naturelles chassent les habitants : un cyclone détruit les maisons, une sécheresse brûle les récoltes, une inondation noie les champs ; il faut alors partir pour survivre.",
        ],
        exemples: [
          "Une jeune mariée rejoint le village de son époux.",
          "Après le passage d'un cyclone, des familles du sud reconstruisent leur vie ailleurs.",
        ],
      },
      {
        titre: "3. Les conséquences des migrations",
        paras: [
          "Dans les villes d'arrivée, la population urbaine augmente très vite : de nouveaux quartiers poussent sur les collines, les marchés débordent, les écoles s'emplissent.",
          "Parfois, les arrivants sont plus nombreux que les enfants du pays : on parle de la domination des émigrants. À l'inverse, les villages de départ se vident de leurs jeunes et de leurs bras : ce grand mouvement de la campagne vers la ville s'appelle l'exode rural, objet de notre unité suivante.",
        ],
        exemples: [
          "Dans la rue de Tojo, la moitié des voisins viennent d'ailleurs.",
          "Les collines d'Antananarivo se couvrent de maisons neuves chaque année.",
        ],
      },
    ],
  },
  motsCles: ["causes économiques", "causes socioculturelles", "catastrophe naturelle", "population urbaine", "domination des émigrants"],
  questionsRevision: [
    ["Cite les trois familles de causes des migrations.", "Les causes économiques, socioculturelles et les catastrophes naturelles."],
    ["Qu'est-ce que la domination des émigrants ?", "Quand les nouveaux venus dans une ville sont plus nombreux que ses habitants d'origine."],
  ],
};

const S34 = {
  numero: 34, total: TOTAL,
  titre: "La structure de la population : la pyramide des âges",
  theme: "La population malgache",
  objectif: "Être capable de lire la pyramide des âges de Madagascar et de déduire que la population malgache est jeune.",
  image: { id: "geo6_pyramide_ages", legende: "La pyramide des âges de Madagascar : une base large, un sommet fin." },
  scene: { file: "scene_s34_pyramide.jpg", mode: "document", legende: "Document : dans la cour de l'école, des centaines d'élèves courent et jouent ; sous le manguier, trois anciens sourient en les regardant." },
  revisionOuverture: [
    ["Cite les trois familles de causes des migrations.", "Les causes économiques, socioculturelles et les catastrophes naturelles."],
    ["Qu'est-ce que la domination des émigrants ?", "Quand les nouveaux venus dans une ville sont plus nombreux que ses habitants d'origine."],
  ],
  miseEnSituation: {
    texte: "Jour de fête au village de grand-père Maitso. Miora joue au comptage : elle compte les enfants sous le manguier — vingt-six ! Elle compte les adultes — onze. Et les anciens assis sur la natte — trois. « Chez nous, les enfants sont partout, rit grand-père. Quand j'étais jeune, c'était déjà pareil : Madagascar est un pays jeune. »",
    question: "Comment dessiner et lire l'âge des habitants d'un pays ?",
    ra: "Grâce à la pyramide des âges : un dessin qui classe les habitants par tranches d'âge. Celle de Madagascar a une base très large : notre population est jeune.",
    support: "Schéma de la pyramide des âges (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « La structure de la population : la pyramide des âges ». Après cette séance, vous serez capables de lire une pyramide des âges et de dire si une population est jeune ou vieille.",
  observation: "Observez bien la pyramide des âges : à gauche les garçons et les hommes, à droite les filles et les femmes ; en bas les enfants, en haut les anciens.",
  supportObservation: "Schéma de la pyramide des âges (page Leçon)",
  analyse: [
    ["Qu'est-ce que la structure de la population ?", "C'est la répartition des habitants par âge et par sexe."],
    ["Que montre une pyramide des âges ?", "Elle montre combien il y a d'hommes, de femmes, d'enfants et d'anciens dans un pays."],
    ["Comment est-elle construite ?", "En barres : à gauche les garçons et hommes, à droite les filles et femmes, de bas en haut des plus jeunes aux plus anciens."],
    ["Comment est la base de la pyramide malgache ?", "Très large : les enfants sont très nombreux."],
    ["Et son sommet ?", "Fin et pointu : les anciens sont peu nombreux."],
    ["Que peut-on en déduire ?", "Que la population malgache est jeune : plus de 4 habitants sur 10 ont moins de quinze ans."],
  ],
  synthese: "Donc, la pyramide des âges montre la structure de la population par âge et par sexe. Celle de Madagascar a une base large et un sommet fin : notre population est jeune.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que la structure d'une population ?",
        "2. Que montre une pyramide des âges ?",
        "3. Comment reconnaît-on une population jeune sur la pyramide ?",
        "4. La population malgache est-elle jeune ou vieille ?",
      ],
      corrige: [
        "1. C'est **la répartition des habitants par âge et par sexe**.",
        "2. Elle montre **le nombre d'hommes, de femmes, d'enfants et d'anciens**.",
        "3. À **sa base large** : beaucoup d'enfants, peu d'anciens.",
        "4. Elle est **jeune** : plus de 4 habitants sur 10 ont moins de quinze ans.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Sur une pyramide des âges, les enfants sont en haut.",
        "2. À gauche de la pyramide se trouvent les garçons et les hommes.",
        "3. Une base large signifie beaucoup d'enfants.",
        "4. La pyramide malgache ressemble à une toupie renversée.",
      ],
      corrige: [
        "1. **Faux** : les enfants sont en bas, les anciens en haut.",
        "2. **Vrai** : les filles et femmes sont à droite.",
        "3. **Vrai** : c'est le signe d'une population jeune.",
        "4. **Faux** : elle ressemble à une vraie pyramide, large en bas, pointue en haut.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : âge — sexe — large — jeune.",
      items: [
        "La pyramide des âges classe les habitants par ……… et par ……… .",
        "La base de la pyramide malgache est très ……… .",
        "Donc la population malgache est une population ……… .",
      ],
      corrige: [
        "par **âge** et par **sexe** / très **large** / **jeune**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Dans une pyramide des âges, en bas se trouvent : A. les anciens — B. les enfants — C. les visiteurs",
        "2. À droite de la pyramide : A. les garçons — B. les filles et femmes — C. les zébus",
        "3. Une population jeune a : A. une base étroite — B. une base large — C. un sommet large",
        "4. La pyramide des âges montre la structure de la population : A. par âge et par sexe — B. par taille — C. par village",
        "5. Plus de 4 Malgaches sur 10 ont moins de : A. 5 ans — B. 15 ans — C. 50 ans",
      ],
      corrige: [
        "1. Réponse **B** : les enfants, du plus jeune âge.",
        "2. Réponse **B** : les filles et les femmes.",
        "3. Réponse **B** : une base large, plein d'enfants.",
        "4. Réponse **A** : par âge et par sexe.",
        "5. Réponse **B** : moins de quinze ans.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La structure par âge et par sexe",
        paras: [
          "Les habitants d'un pays ne se ressemblent pas tous : les uns sont des bébés, les autres des élèves, des parents ou des anciens.",
          "Répartir les habitants par tranches d'âge et entre garçons et filles, c'est étudier la structure de la population.",
        ],
        exemples: [
          "Sous le manguier du village : vingt-six enfants, onze adultes, trois anciens.",
          "Dans la cour de récréation, la foule des petits dépasse celle des grands.",
        ],
      },
      {
        titre: "2. Lire la pyramide des âges",
        paras: [
          "Pour dessiner cette structure, on construit une pyramide des âges : des barres horizontales empilées, une par tranche d'âge.",
          "À gauche de l'axe se trouvent les garçons et les hommes ; à droite, les filles et les femmes. En bas, la tranche des tout-petits ; en haut, celle des plus anciens. Plus une barre est longue, plus la tranche est nombreuse.",
        ],
        exemples: [
          "La barre du bas de la pyramide malgache est la plus longue de toutes.",
          "Les barres du sommet sont si courtes qu'on dirait la pointe d'une flèche.",
        ],
      },
      {
        titre: "3. Une population jeune",
        paras: [
          "La pyramide des âges de Madagascar a une base très large et un sommet très fin : beaucoup d'enfants, peu d'anciens.",
          "Plus de 4 habitants sur 10 ont moins de quinze ans : la population malgache est jeune. Aujourd'hui, cette jeunesse remplit les écoles ; demain, elle sera la force de travail du pays.",
        ],
        exemples: [
          "Les classes surchargées et les cours de récréation pleines racontent cette jeunesse.",
          "Une population jeune a besoin de beaucoup d'écoles aujourd'hui et de beaucoup d'emplois demain.",
        ],
      },
    ],
  },
  motsCles: ["structure", "pyramide des âges", "tranche d'âge", "base large", "population jeune"],
  questionsRevision: [
    ["Comment est la pyramide des âges de Madagascar ?", "À base très large et sommet fin : une population jeune."],
    ["Combien de Malgaches sur 10 ont moins de quinze ans ?", "Plus de 4 sur 10."],
  ],
};

const S35 = {
  numero: 35, total: TOTAL,
  titre: "Croissance rapide et infrastructures",
  theme: "La population malgache",
  objectif: "Être capable de décrire les impacts de la croissance rapide de la population : insuffisance des infrastructures, manque d'emploi, insécurité, pauvreté.",
  image: { id: "geo6_impacts_croissance", legende: "Quand la population croît trop vite : écoles, emplois, sécurité." },
  scene: { file: "scene_s35_impacts.jpg", mode: "document", legende: "Document : dans la classe de Mme Randriamampionona, les élèves sont maintenant trois par banc : chaque année, la classe compte plus d'élèves." },
  revisionOuverture: [
    ["Comment est la pyramide des âges de Madagascar ?", "À base très large et sommet fin : une population jeune."],
    ["Combien de Malgaches sur 10 ont moins de quinze ans ?", "Plus de 4 sur 10."],
  ],
  miseEnSituation: {
    texte: "Rentrée des classes. Mme Randriamampionona compte les têtes : trois de plus qu'à la dernière rentrée, et toujours la même salle. « Vous allez être trois par banc », soupire-t-elle. Dehors, la file d'attente du point d'eau s'allonge ; le dispensaire du quartier manque de lits ; et les grands frères sans travail restent au bord de la route. « Nous sommes nombreux », dit Hery. « Trop nombreux pour ce que nous avons », répond son père.",
    question: "À quels problèmes une population qui croît trop vite doit-elle faire face ?",
    ra: "Aux infrastructures insuffisantes (écoles, dispensaires, eau, routes), au manque d'emploi, à l'insécurité et à la pauvreté.",
    support: "Schéma des impacts de la croissance rapide (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Croissance rapide et infrastructures ». Après cette séance, vous serez capables de citer les problèmes causés par une croissance trop rapide de la population.",
  observation: "Observez bien le schéma : au centre, la population qui croît vite ; tout autour, les quatre problèmes qu'elle rencontre.",
  supportObservation: "Schéma des impacts de la croissance rapide (page Leçon)",
  analyse: [
    ["Pourquoi la classe compte-t-elle trois élèves par banc ?", "Parce que les enfants sont de plus en plus nombreux et que la salle n'a pas grandi."],
    ["Qu'appelle-t-on des infrastructures ?", "Les équipements collectifs : écoles, dispensaires, routes, adductions d'eau."],
    ["Pourquoi sont-elles insuffisantes ?", "Parce que la population double en une génération : tout doit être doublé aussi, et on n'y arrive pas."],
    ["Que font les jeunes qui ne trouvent pas de travail ?", "Ils restent sans emploi : c'est le manque d'emploi, le chômage."],
    ["D'où vient la pauvreté qui s'installe ?", "Des besoins (nourriture, soins, écoles) qui grandissent plus vite que les richesses."],
    ["Quel lien entre pauvreté et insécurité ?", "Certains, à bout de ressources, volent ou se battent : l'insécurité gagne du terrain."],
  ],
  synthese: "Donc, une croissance trop rapide de la population entraîne des infrastructures insuffisantes, un manque d'emploi, l'insécurité et la pauvreté.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Cite trois infrastructures dont un pays a besoin.",
        "2. Pourquoi les infrastructures deviennent-elles insuffisantes ?",
        "3. Qu'est-ce que le manque d'emploi ?",
        "4. Cite deux conséquences de la pauvreté.",
      ],
      corrige: [
        "1. Par exemple : **une école**, **un dispensaire**, **une route** (aussi l'adduction d'eau).",
        "2. Parce que **la population double en une génération** et que les équipements ne suivent pas.",
        "3. C'est **l'absence de travail** pour ceux qui en cherchent.",
        "4. **La faim** et **l'insécurité** (aussi le manque de soins et d'écoles).",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Une population qui double vite a besoin de deux fois plus d'écoles.",
        "2. Le manque d'emploi touche surtout les anciens.",
        "3. La pauvreté vient des besoins qui croissent plus vite que les richesses.",
        "4. L'insécurité n'a aucun rapport avec la pauvreté.",
      ],
      corrige: [
        "1. **Vrai** : il faut tout doubler : écoles, soins, routes.",
        "2. **Faux** : ce sont surtout les jeunes qui cherchent un travail.",
        "3. **Vrai** : trop de bouches, pas assez de ressources.",
        "4. **Faux** : la pauvreté pousse certains à voler.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : infrastructures — emploi — insécurité — pauvreté.",
      items: [
        "Les écoles, les dispensaires et les routes sont des ……… .",
        "Quand les jeunes ne trouvent pas de travail, c'est le manque d'……… .",
        "Ceux qui volent par besoin font grandir l'……… .",
        "Quand les besoins dépassent les richesses, la ……… s'installe.",
      ],
      corrige: [
        "des **infrastructures** / le manque d'**emploi** / l'**insécurité** / la **pauvreté**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Une infrastructure, c'est : A. un équipement collectif — B. un jouet — C. un animal",
        "2. Si la population double, il faut : A. moins d'écoles — B. autant d'écoles — C. deux fois plus d'écoles",
        "3. Le manque d'emploi s'appelle aussi : A. le chômage — B. les vacances — C. la fête",
        "4. La croissance rapide de la population entraîne : A. la pauvreté — B. la richesse — C. la pluie",
        "5. Pour lutter contre ces problèmes, il faut construire : A. rien — B. des écoles et des dispensaires — C. des murs",
      ],
      corrige: [
        "1. Réponse **A** : un équipement collectif.",
        "2. Réponse **C** : deux fois plus, et vite.",
        "3. Réponse **A** : le chômage.",
        "4. Réponse **A** : quand les richesses ne suivent pas.",
        "5. Réponse **B** : et créer des emplois aussi.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Des infrastructures insuffisantes",
        paras: [
          "Les infrastructures sont les équipements collectifs d'un pays : les écoles, les dispensaires, les routes, les adductions d'eau, les marchés.",
          "Quand la population double en une génération, il faudrait doubler toutes ces infrastructures. Mais on n'y arrive pas : les salles de classe débordent, les files d'attente des points d'eau s'allongent, les dispensaires manquent de lits et de médicaments.",
        ],
        exemples: [
          "Trois élèves par banc dans la classe de Mme Randriamampionona.",
          "Le matin, la file du point d'eau du quartier s'étire jusqu'au coin de la rue.",
        ],
      },
      {
        titre: "2. Le manque d'emploi",
        paras: [
          "Chaque année, des milliers de jeunes quittent l'école et cherchent du travail. Mais les usines, les champs et les ateliers n'offrent pas assez d'emplois pour tous.",
          "Ce manque d'emploi frappe surtout les jeunes : sans salaire, ils ne peuvent ni se loger, ni se nourrir, ni aider leur famille.",
        ],
        exemples: [
          "Les grands frères sans travail restent au bord de la route, à attendre.",
          "Un chantier qui ouvre reçoit des centaines de candidatures pour quelques postes.",
        ],
      },
      {
        titre: "3. L'insécurité et la pauvreté",
        paras: [
          "Quand les besoins — manger, se soigner, s'instruire — grandissent plus vite que les richesses, la pauvreté s'installe dans les familles.",
          "Et la pauvreté entraîne l'insécurité : ceux qui n'ont plus rien volent parfois ce qu'ils n'ont pas. Les biens et les personnes sont moins en sécurité.",
        ],
        exemples: [
          "Le vol de riz dans les greniers augmente les années difficiles.",
          "Les quartiers pauvres demandent plus de gardiens de nuit et d'éclairage public.",
        ],
      },
    ],
  },
  motsCles: ["croissance rapide", "infrastructures", "manque d'emploi", "insécurité", "pauvreté"],
  questionsRevision: [
    ["Cite trois problèmes causés par une croissance trop rapide de la population.", "Les infrastructures insuffisantes, le manque d'emploi, la pauvreté et l'insécurité."],
    ["Pourquoi les écoles débordent-elles ?", "Parce que les enfants sont de plus en plus nombreux et que les salles ne suivent pas."],
  ],
};

const S36 = {
  numero: 36, total: TOTAL,
  titre: "Population et développement socioéconomique",
  theme: "La population malgache",
  objectif: "Être capable d'établir la relation entre la croissance démographique et le développement socioéconomique, et de montrer qu'une population formée est une force.",
  image: { id: "geo6_population_developpement", legende: "La même population : un poids ou une force, selon qu'on la prépare." },
  scene: { file: "scene_s36_developpement.jpg", mode: "document", legende: "Document : à l'atelier du quartier, de jeunes apprentis apprennent la menuiserie auprès d'un maître : former les jeunes, c'est préparer l'avenir." },
  revisionOuverture: [
    ["Cite trois problèmes causés par une croissance trop rapide de la population.", "Les infrastructures insuffisantes, le manque d'emploi, la pauvreté et l'insécurité."],
    ["Pourquoi les écoles débordent-elles ?", "Parce que les enfants sont de plus en plus nombreux et que les salles ne suivent pas."],
  ],
  miseEnSituation: {
    texte: "Devant l'atelier du quartier, un maître menuisier forme six apprentis. « Des bras, j'en ai autant que je veux, dit-il. Ce qui manque, ce sont des bras bien formés. Un apprenti qui sait lire un plan, mesurer, calculer, je l'emploie demain. » Papa hoche la tête : « Voilà la vraie question : notre jeunesse sera-t-elle un poids ou une force ? Tout dépend de ce que nous en faisons. »",
    question: "La croissance rapide de la population empêche-t-elle le développement, ou peut-elle l'aider ?",
    ra: "Si on ne la prépare pas, elle freine le développement. Mais une population instruite, soignée et bien formée devient une force pour le pays.",
    support: "Schéma population et développement (page Leçon)",
  },
  presentation: "Aujourd'hui, nous terminons l'unité 3 avec : « Population et développement socioéconomement ». Après cette séance, vous serez capables d'expliquer la relation entre la croissance de la population et le développement du pays.",
  observation: "Observez bien le schéma : la même croissance de population mène à deux chemins opposés, selon les choix du pays.",
  supportObservation: "Schéma population et développement (page Leçon)",
  analyse: [
    ["Que doit faire un pays quand sa population double ?", "Doubler aussi les écoles, les soins, les emplois et la nourriture."],
    ["Que se passe-t-il s'il n'y arrive pas ?", "Le développement freine : pauvreté, manque d'emploi, insécurité."],
    ["La population est-elle seulement un poids ?", "Non : des travailleurs nombreux, c'est aussi une richesse."],
    ["Pourquoi une population formée est-elle une force ?", "Parce que les jeunes instruits inventent, produisent et créent des emplois."],
    ["Que faut-il pour bien préparer cette jeunesse ?", "Des écoles pour tous, des soins pour tous, et des emplois à la sortie."],
    ["Quel est le rôle des familles ?", "Élever des enfants qu'elles peuvent nourrir, soigner et instruire : des familles qui grandissent lentement."],
  ],
  synthese: "Donc, une croissance trop rapide freine le développement si le pays ne s'y prépare pas. Mais une population instruite et en bonne santé est une force : préparer la jeunesse, c'est préparer le développement.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Que doit-on doubler quand la population double ?",
        "2. Quand la croissance freine-t-elle le développement ?",
        "3. Pourquoi une population nombreuse peut-elle aider le pays ?",
        "4. Comment préparer la jeunesse du pays ?",
      ],
      corrige: [
        "1. **Les écoles, les soins, les emplois et la nourriture**.",
        "2. Quand **le pays n'y est pas préparé** et que les richesses ne suivent pas.",
        "3. Parce qu'elle offre **beaucoup de travailleurs, d'idées et de clients** pour les commerces.",
        "4. En **instruisant tous les enfants**, en les soignant et en **créant des emplois**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Une population nombreuse est toujours un poids.",
        "2. Un jeune instruit trouve plus facilement du travail.",
        "3. Le développement, c'est seulement construire des routes.",
        "4. Des familles qui grandissent lentement peuvent mieux s'occuper de chaque enfant.",
      ],
      corrige: [
        "1. **Faux** : bien formée, elle devient une force.",
        "2. **Vrai** : le maître menuisier emploie les apprentis formés.",
        "3. **Faux** : c'est aussi la santé, l'école, les emplois, la vie qui s'améliore.",
        "4. **Vrai** : chaque enfant est mieux nourri et mieux instruit.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : développement — force — instruite — emplois.",
      items: [
        "La croissance rapide freine le ……… si le pays ne s'y prépare pas.",
        "Une population bien formée devient une ……… pour le pays.",
        "Un pays prospère offre des écoles : sa population est ……… .",
        "À la sortie de l'école, les jeunes ont besoin d'……… .",
      ],
      corrige: [
        "le **développement** / une **force** / **instruite** / d'**emplois**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Une population instruite est : A. un poids — B. une force — C. perdue",
        "2. Si la population double sans préparation : A. tout va mieux — B. la pauvreté gagne — C. rien ne change",
        "3. Le maître menuisier cherche : A. des bras quelconques — B. des bras bien formés — C. des zébus",
        "4. Le développement socioéconomique, c'est : A. la vie qui s'améliore — B. dormir — C. rester pauvre",
        "5. Pour préparer la jeunesse, il faut : A. des écoles et des soins — B. des jeux — C. des nuages",
      ],
      corrige: [
        "1. Réponse **B** : une force pour travailler et créer.",
        "2. Réponse **B** : écoles, soins et emplois manquent.",
        "3. Réponse **B** : des apprentis qui savent mesurer et calculer.",
        "4. Réponse **A** : plus d'écoles, de soins, d'emplois, de richesses.",
        "5. Réponse **A** : et des emplois à la sortie.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Quand la croissance va trop vite",
        paras: [
          "Le développement socioéconomique, c'est l'amélioration de la vie de tous : plus d'écoles, plus de soins, plus d'emplois, plus de richesses mieux partagées.",
          "Or, quand la population double en une génération, il faut tout doubler : les classes, les dispensaires, les routes, la nourriture, les emplois. Si le pays n'y arrive pas, la croissance rapide freine le développement : pauvreté, chômage et insécurité s'installent.",
        ],
        exemples: [
          "Une école construite pour trois cents élèves en accueille bientôt six cents.",
          "Le riz récolté doit nourrir deux fois plus de bouches une génération plus tard.",
        ],
      },
      {
        titre: "2. La population, une force pour le pays",
        paras: [
          "Mais une population nombreuse n'est pas seulement un poids. Des travailleurs nombreux, c'est une richesse : des bras pour les champs et les chantiers, des idées pour les ateliers, des clients pour les marchés.",
          "Une population jeune et bien formée attire même les usines et les commerces : c'est une force pour le développement.",
        ],
        exemples: [
          "Le maître menuisier emploie tous les apprentis qu'il a formés.",
          "Un grand marché comme Asabotsy vit grâce à la foule de ses clients.",
        ],
      },
      {
        titre: "3. Grandir lentement et bien se former",
        paras: [
          "Alors, que faire ? D'abord, des familles qui grandissent lentement, capables de nourrir, de soigner et d'instruire chaque enfant.",
          "Ensuite, l'école pour tous, la santé pour tous, et la création d'emplois à la sortie. C'est ainsi que la population malgache accompagnera le développement socioéconomique du pays, au lieu de le freiner.",
        ],
        exemples: [
          "Six apprentis formés aujourd'hui, six menuisiers salariés demain.",
          "Une génération instruite fait avancer tout le pays.",
        ],
      },
    ],
  },
  motsCles: ["développement socioéconomique", "force", "instruite", "emplois", "bien-être"],
  questionsRevision: [
    ["Comment la croissance rapide peut-elle freiner le développement ?", "En demandant de tout doubler (écoles, soins, emplois) plus vite que le pays n'y arrive."],
    ["Comment devient-elle une force ?", "Quand la population est instruite, soignée et trouve des emplois."],
  ],
};

module.exports = { topics: [S32, S33, S34, S35, S36] };
;
