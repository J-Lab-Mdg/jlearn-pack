// data-unite4b.js — UNITÉ 4 : L'EXODE RURAL À MADAGASCAR (Séances 44 à 48)
// Contenu rédactionnel conforme au Programme d'études officiel T6 — Géographie (p. 175-177)
const TOTAL = 78;

const S44 = {
  numero: 44, total: TOTAL,
  titre: "Les conséquences de l'exode rural en milieu rural : le retard de développement",
  theme: "L'exode rural à Madagascar",
  objectif: "Être capable d'expliquer le retard de développement des campagnes et le cercle vicieux de l'exode rural.",
  image: { id: "geo6_exode_retard", legende: "Le cercle vicieux : le village s'appauvrit, donc on part, donc il s'appauvrit encore." },
  scene: { file: "scene_s44_retard.jpg", mode: "document", legende: "Document : au marché du village, la moitié des étals sont vides : avec le départ des habitants, tout ralentit." },
  revisionOuverture: [
    ["Quelle est la première conséquence de l'exode rural pour les campagnes ?", "La main-d'œuvre manque : les bras valides sont partis."],
    ["Que deviennent les champs sans cultivateurs ?", "Ils se délaissent : herbes, digues cassées, récoltes en baisse."],
  ],
  miseEnSituation: {
    texte: "Jour de marché au village. Le pope... plutôt : midi sonne, et le marché reste à moitié vide. « Avant, les acheteurs se bousculaient, se souvient la marchande de brèdes. Maintenant, qui achèterai-je ? Les jeunes sont partis, les anciens économisent. » Grand-père regarde le canal à demi creusé, arrêté faute de bras, et l'épicerie fermée du carrefour : « Le village s'appauvrit, dit-il. Et plus il s'appauvrit, plus les gens partent. C'est un cercle. »",
    question: "Comment l'exode rural enferme-t-il le village dans le retard ?",
    ra: "Moins d'habitants, c'est moins de production, moins de ventes, moins de projets : le village s'appauvrit, et cette pauvreté pousse de nouveaux départs. C'est le cercle vicieux de l'exode.",
    support: "Schéma du cercle vicieux de l'exode (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les conséquences de l'exode rural en milieu rural : le retard de développement ». Après cette séance, vous serez capables d'expliquer ce cercle vicieux.",
  observation: "Observez bien le schéma : quatre flèches qui tournent en rond — le village s'appauvrit, les habitants partent, et tout recommence.",
  supportObservation: "Schéma du cercle vicieux de l'exode (page Leçon)",
  analyse: [
    ["Pourquoi le marché du village est-il à moitié vide ?", "Parce que les acheteurs sont partis et que les anciens économisent."],
    ["Pourquoi le canal est-il à demi creusé ?", "Les travaux ont manqué de bras : les jeunes qui creusaient sont en ville."],
    ["Que devient l'économie d'un village qui se vide ?", "Elle fléchit : moins de production, moins de ventes, moins de services."],
    ["Quand un village s'appauvrit, que font ses habitants ?", "Ceux qui restent partent à leur tour, vers la ville."],
    ["Comment s'appelle cette boucle qui se referme ?", "Le cercle vicieux de l'exode rural.",
    ],
    ["Comment s'appelle un village qui prend du retard ?", "C'est un village en retard de développement : il n'a pas suivi le progrès des autres."],
  ],
  synthese: "Donc, l'exode rural appauvrit les campagnes : moins de bras, moins de production, moins de services. Et cette pauvreté même pousse de nouveaux départs : c'est le cercle vicieux de l'exode rural.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Pourquoi l'économie du village fléchit-elle ?",
        "2. Pourquoi les travaux du village s'arrêtent-ils ?",
        "3. Qu'est-ce qu'un cercle vicieux ?",
        "4. Comment s'appelle une région qui n'a pas suivi le progrès ?",
      ],
      corrige: [
        "1. Parce que **les habitants partis n'achètent plus et ne produisent plus**.",
        "2. Parce que **les bras manquent** pour creuser, bâtir, entretenir.",
        "3. C'est **une boucle de malheurs** qui s'entretient : une difficulté en entraîne une autre, en rond.",
        "4. C'est **une région en retard de développement**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le départ des habitants enrichit le village.",
        "2. Un canal à demi creusé montre que les travaux manquent de bras.",
        "3. Dans le cercle vicieux, la pauvreté pousse au départ, et le départ aggrave la pauvreté.",
        "4. Les marchés des villages qui se vident restent bondés.",
      ],
      corrige: [
        "1. **Faux** : il l'appauvrit et le vide.",
        "2. **Vrai** : les chantiers s'arrêtent faute de main-d'œuvre.",
        "3. **Vrai** : c'est le cercle vicieux de l'exode rural.",
        "4. **Faux** : les étals se vident avec les acheteurs.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : pauvreté — cercle vicieux — retard — partent.",
      items: [
        "L'exode rural installe la ……… dans les campagnes.",
        "Plus le village est pauvre, plus les habitants ……… .",
        "Cette boucle qui se referme s'appelle le ……… de l'exode rural.",
        "Un village qui n'a pas suivi le progrès est en ……… de développement.",
      ],
      corrige: [
        "la **pauvreté** / plus les habitants **partent** / le **cercle vicieux** / en **retard** de développement.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le marché du village est vide car : A. il pleut — B. les acheteurs sont partis — C. les brèdes sont chères",
        "2. Le canal à demi creusé manque : A. d'eau — B. de bras — C. de nom",
        "3. Un cercle vicieux est : A. une ronde joyeuse — B. une boucle de malheurs qui s'aggrave — C. un jeu",
        "4. Face au retard, les habitants restants : A. restent tous — B. partent à leur tour — C. construisent une tour",
        "5. Le contraire du cercle vicieux serait : A. un développement qui attire et retient les habitants — B. la pluie — C. le silence",
      ],
      corrige: [
        "1. Réponse **B** : la clientèle a émigré.",
        "2. Réponse **B** : la main-d'œuvre manque.",
        "3. Réponse **B** : chaque malheur entraîne le suivant.",
        "4. Réponse **B** : ils rejoignent la ville.",
        "5. Réponse **A** : un village qui se développe retient ses jeunes.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. L'économie du village fléchit",
        paras: [
          "Avec moins d'habitants, tout ralentit : les champs produisent moins, les marchés vendent moins, les petits commerces ferment, les artisans perdent leurs clients.",
          "L'argent qui circulait au village part en ville ; les projets — canal, digue, boutique commune — s'arrêtent faute de bras et de moyens.",
        ],
        exemples: [
          "Le marché de midi, à moitié vide : les acheteurs d'avant sont en ville.",
          "Le canal d'irrigation à demi creusé depuis deux campagnes.",
        ],
      },
      {
        titre: "2. Le retard de développement",
        paras: [
          "Pendant que le village s'enlise, les autres avancent : routes, électricité, écoles. L'écart grandit entre lui et le reste du pays.",
          "On dit que la région est en retard de développement : la vie y est plus difficile qu'ailleurs, et le rattrapage devient chaque année plus coûteux.",
        ],
        exemples: [
          "Le hameau voisin n'a toujours pas d'électricité, alors que la ligne passe à dix kilomètres.",
          "Les routes de la région se dégradent : plus de travaux collectifs.",
        ],
      },
      {
        titre: "3. Le cercle vicieux de l'exode",
        paras: [
          "Voici la boucle : le village est pauvre, donc les habitants partent ; comme ils partent, il manque des bras et des clients, donc le village s'appauvrit encore ; et cette pauvreté pousse de nouveaux habitants à partir.",
          "Briser ce cercle est l'enjeu des solutions que nous verrons en fin d'unité : améliorer la vie à la campagne, pour que partir ne soit plus une nécessité.",
        ],
        exemples: [
          "Le départ de la population et le retard d'équipement peuvent former un cercle cumulatif.",
          "Chaque départ rend le départ suivant plus probable.",
        ],
      },
    ],
  },
  motsCles: ["retard de développement", "économie locale", "cercle vicieux", "appauvrissement", "rattrapage"],
  questionsRevision: [
    ["Qu'est-ce que le cercle vicieux de l'exode rural ?", "La pauvreté fait partir les habitants ; leur départ appauvrit encore le village, et ainsi de suite."],
    ["Cite deux signes du retard d'un village.", "Les chantiers arrêtés faute de bras et les commerces ou écoles qui ferment."],
  ],
};

const S45 = {
  numero: 45, total: TOTAL,
  titre: "Les conséquences de l'exode rural en ville : le secteur informel",
  theme: "L'exode rural à Madagascar",
  objectif: "Être capable d'expliquer ce qu'est le secteur informel et pourquoi il prolifère dans les villes.",
  image: { id: "geo6_exode_informel", legende: "Le secteur informel : des petits métiers sans papier, sans contrat, sans garantie." },
  scene: { file: "scene_s45_informel.jpg", mode: "document", legende: "Document : à Ankatodihary? plutôt : sur le trottoir, Rado vend des parapluies : pas de boutique, pas de registre — un jour il gagne, un jour rien." },
  revisionOuverture: [
    ["Qu'est-ce que le cercle vicieux de l'exode rural ?", "La pauvreté fait partir les habitants ; leur départ appauvrit encore le village, et ainsi de suite."],
    ["Cite deux signes du retard d'un village.", "Les chantiers arrêtés faute de bras et les commerces ou écoles qui ferment."],
  ],
  miseEnSituation: {
    texte: "Dans sa lettre, Rado raconte sa nouvelle vie à Antananarivo : « L'atelier promis n'a pas embauché. Alors, comme des milliers d'autres, je vends des parapluies au coin du marché. Pas de boutique, pas de papier, pas de salaire fixe : quand il pleut, je gagne ; quand le soleil brille, je ne vends rien. Le soir, je compte mes pièces. C'est ça, le secteur informel, dit ma logeuse. On surviv. »",
    question: "Pourquoi tant d'arrivants travaillent-ils ainsi, sans papier ni salaire ?",
    ra: "Parce que les usines et les bureaux n'ont pas assez d'emplois pour tous les nouveaux arrivants : le chômage pousse les gens à inventer des petits métiers. C'est la prolifération du secteur informel.",
    support: "Schéma du secteur informel (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les conséquences de l'exode rural en ville : le secteur informel ». Après cette séance, vous serez capables d'expliquer ce qu'est le secteur informel et pourquoi il se développe.",
  observation: "Observez bien le schéma : les petits métiers de la rue — étal, porteur, réparateur — et leurs trois manques : pas de papier, pas de contrat, pas de garantie.",
  supportObservation: "Schéma du secteur informel (page Leçon)",
  analyse: [
    ["Pourquoi Rado n'a-t-il pas trouvé de place à l'atelier ?", "Parce que les arrivants sont trop nombreux : les emplois fixes manquent."],
    ["Comment gagne-t-il sa vie maintenant ?", "En vendant des parapluies au coin du marché : un petit métier de la rue."],
    ["Qu'est-ce que le secteur informel ?", "C'est l'ensemble des petits métiers sans papier, sans contrat et sans garantie."],
    ["Pourquoi le secteur informel prolifère-t-il ?", "À cause du chômage : sans emploi fixe, chacun invente un petit commerce pour survivre."],
    ["Quels sont les risques de ces métiers ?", "Des revenus incertains, aucune protection en cas de maladie ou de vieillesse, et parfois la police qui chasse les étals."],
    ["Quel service rend-il quand même à la ville ?", "Il nourrit des milliers de familles et vend à petit prix ce dont tout le monde a besoin."],
  ],
  synthese: "Donc, faute d'emplois suffisants, les arrivants de l'exode rural inventent des petits métiers sans papier ni garantie : c'est le secteur informel, qui prolifère dans toutes les grandes villes.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que le secteur informel ?",
        "2. Pourquoi se développe-t-il dans les villes ?",
        "3. Cite trois petits métiers du secteur informel.",
        "4. Quels sont ses dangers pour ceux qui l'exercent ?",
      ],
      corrige: [
        "1. C'est **l'ensemble des petits métiers sans papier, sans contrat et sans garantie**.",
        "2. **À cause du chômage** : les arrivants ne trouvent pas d'emploi fixe et inventent des petits commerces.",
        "3. Par exemple : **vendeur d'étal**, **porteur au marché**, **réparateur de vélos** (aussi cireur, vendeur d'eau).",
        "4. **Des revenus incertains, aucune protection** en cas de maladie ou d'accident.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le secteur informel offre des emplois stables et garantis.",
        "2. Rado gagne de l'argent quand il pleut, rien quand il fait beau.",
        "3. Le secteur informel prolifère à cause du chômage.",
        "4. Ces petits métiers nourrissent pourtant beaucoup de familles.",
      ],
      corrige: [
        "1. **Faux** : sans contrat, rien n'est garanti.",
        "2. **Vrai** : parapluies contre soleil.",
        "3. **Vrai** : sans emploi fixe, on invente un petit métier.",
        "4. **Vrai** : des milliers de familles en vivent.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : informel — chômage — contrat — garantie.",
      items: [
        "Les petits métiers sans papier ni contrat forment le secteur ……… .",
        "Il prolifère à cause du ……… dans les villes.",
        "Un emploi stable est reconnu par un ……… écrit.",
        "Dans l'informel, aucune ……… ne protège le travailleur.",
      ],
      corrige: [
        "le secteur **informel** / le **chômage** / un **contrat** / aucune **garantie**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Rado vend : A. des parapluies — B. des voitures — C. des zébus",
        "2. Le secteur informel est né : A. du chômage — B. de la pluie — C. l'école",
        "3. Un métier informel n'a : A. ni papier ni contrat — B. ni client ni soleil — C. ni nom ni visage",
        "4. Les revenus de l'informel sont : A. fixes — B. incertains — C. royaux",
        "5. En cas de maladie, le travailleur informel : A. reçoit un salaire — B. ne reçoit rien — C. part en vacances",
      ],
      corrige: [
        "1. Réponse **A** : au coin du marché.",
        "2. Réponse **A** : pas d'emplois fixes pour tous les arrivants.",
        "3. Réponse **A** : sans papier, sans contrat, sans garantie.",
        "4. Réponse **B** : un jour on gagne, un jour rien.",
        "5. Réponse **B** : aucune protection ne le couvre.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Des arrivants sans emploi",
        paras: [
          "Chaque semaine, des centaines d'arrivants descendent des taxis-brousse dans les grandes villes. Mais les usines, les ateliers et les bureaux n'ont pas de places pour tous.",
          "Le chômage frappe alors les nouveaux venus : comme Rado, ils attendent des semaines devant les ateliers, en vain.",
        ],
        exemples: [
          "L'atelier promis à Rado n'a embauché personne ce mois-ci.",
          "Devant les usines, les files de candidats s'allongent chaque matin.",
        ],
      },
      {
        titre: "2. Les petits métiers de la rue",
        paras: [
          "Pour survivre, chacun invente un petit métier : vendre des parapluies, porter les sacs des acheteurs, réparer les vélos, vendre de l'eau fraîche, cirer les chaussures.",
          "Ces activités sans papier, sans contrat et sans garantie forment le secteur informel. On le voit partout : étals des trottoirs, marchés débordants, ateliers de fortune.",
        ],
        exemples: [
          "Rado, ses parapluies alignés contre un mur du marché.",
          "Les porteurs de sacs de riz, payés à la course, sous le soleil.",
        ],
      },
      {
        titre: "3. Une vie fragile",
        paras: [
          "Le secteur informel nourrit pourtant des milliers de familles et fait vivre la ville : c'est là qu'on achète à petit prix brèdes, charbon et savon.",
          "Mais ses travailleurs vivent fragiles : revenus incertains, aucune protection en cas de maladie ou d'accident, aucun congé, et parfois l'expulsion des trottoirs. La ville qui les a attirés ne leur offre que la survie.",
        ],
        exemples: [
          "Quand le soleil brille, Rado ne vend rien : le soir, l'assiette est maigre.",
          "Malade, un travailleur informel ne reçoit aucun salaire : la famille compte sur la solidarité.",
        ],
      },
    ],
  },
  motsCles: ["secteur informel", "chômage", "petits métiers", "sans contrat", "survie"],
  questionsRevision: [
    ["Qu'est-ce que le secteur informel ?", "L'ensemble des petits métiers sans papier, sans contrat et sans garantie."],
    ["Pourquoi prolifère-t-il en ville ?", "Parce que le chômage frappe les arrivants de l'exode rural, qui inventent des petits commerces pour survivre."],
  ],
};

const S46 = {
  numero: 46, total: TOTAL,
  titre: "Les conséquences de l'exode rural en ville : les bidonvilles",
  theme: "L'exode rural à Madagascar",
  objectif: "Être capable de décrire un bidonville et les dangers de la vie dans ces quartiers précaires.",
  image: { id: "geo6_exode_bidonvilles", legende: "Le bidonville : des maisons précaires, sans eau, sans égouts, sans sécurité." },
  scene: { file: "scene_s46_bidonvilles.jpg", mode: "document", legende: "Document : au bord du canal, les maisons de planches et de tôles se serrent : Rado loge dans une chambre minuscule au fond de la ruelle." },
  revisionOuverture: [
    ["Qu'est-ce que le secteur informel ?", "L'ensemble des petits métiers sans papier, sans contrat et sans garantie."],
    ["Pourquoi prolifère-t-il en ville ?", "Parce que le chômage frappe les arrivants de l'exode rural, qui inventent des petits commerces pour survivre."],
  ],
  miseEnSituation: {
    texte: "Rado décrit son quartier dans sa lettre : « Nous sommes des milliers d'arrivants chaque mois, et la ville n'a pas de logements pour tous. Alors, au bord du canal, les maisons poussent comme des champignons : planches, tôles, cartons. Moi, je loue une chambre minuscule chez une dame, au fond d'une ruelle de boue. Pas d'eau courante : la fontaine publique est à dix minutes. L'électricité saute dès qu'il pleut. L'été, l'eau du canal monte jusqu'aux portes. On appelle ça un bidonville. »",
    question: "Pourquoi de tels quartiers poussent-ils, et quels dangers y cache la vie ?",
    ra: "Parce que les arrivants trop nombreux ne trouvent pas de logement convenable : ils s'entassent dans des quartiers construits à la hâte. Maisons précaires, insalubrité, maladies et inondations y menacent les habitants.",
    support: "Schéma du bidonville (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les conséquences de l'exode rural en ville : les bidonvilles ». Après cette séance, vous serez capables de décrire un bidonville et ses dangers.",
  observation: "Observez bien le schéma : des maisons de planches et de tôles serrées les unes contre les autres, une seule fontaine, des ruelles étroites, le canal qui borde le tout.",
  supportObservation: "Schéma du bidonville (page Leçon)",
  analyse: [
    ["Pourquoi ces quartiers poussent-ils si vite ?", "Parce que des milliers d'arrivants cherchent un logement chaque mois, et qu'il n'y en a pas assez."],
    ["Comment appelle-t-on ces quartiers de maisons précaires ?", "Des bidonvilles."],
    ["De quoi les maisons sont-elles faites ?", "De planches, de tôles, de cartons, de matériaux de récupération."],
    ["Où les habitants vont-ils chercher l'eau ?", "À la fontaine publique, parfois à dix minutes à pied."],
    ["Quels dangers menacent ces quartiers ?", "Les maladies dues à l'insalubrité, les incendies, les inondations quand le canal monte."],
    ["Qui vit dans ces quartiers ?", "Surtout des arrivants de l'exode rural : des familles venues de la campagne."],
  ],
  synthese: "Donc, l'exode rural jette dans les villes des arrivants sans logement : ils s'entassent dans des bidonvilles, quartiers de maisons précaires, sans eau ni égouts, où maladies, incendies et inondations menacent.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'un bidonville ?",
        "2. Pourquoi les bidonvilles poussent-ils autour des grandes villes ?",
        "3. Comment sont construites les maisons d'un bidonville ?",
        "4. Cite deux dangers de la vie dans un bidonville.",
      ],
      corrige: [
        "1. C'est **un quartier de maisons précaires**, construites sans autorisation, sans eau ni égouts.",
        "2. Parce que **les arrivants de l'exode rural** ne trouvent pas de logement convenable.",
        "3. Avec **des planches, des tôles, des cartons**, des matériaux de récupération.",
        "4. Par exemple : **les maladies** (insalubrité) et **les inondations** (aussi les incendies).",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Les bidonvilles ont l'eau courante dans chaque maison.",
        "2. Les maisons des bidonvilles sont construites à la hâte, sans autorisation.",
        "3. Les habitants des bidonvilles sont souvent d'anciens ruraux.",
        "4. Le canal qui monte menace les maisons basses.",
      ],
      corrige: [
        "1. **Faux** : l'eau se puise à la fontaine publique.",
        "2. **Vrai** : planches et tôles montées en quelques jours.",
        "3. **Vrai** : ce sont des familles venues de la campagne.",
        "4. **Vrai** : l'été, l'eau monte jusqu'aux portes.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : bidonville — précaires — fontaine — inondations.",
      items: [
        "Un quartier de maisons précaires s'appelle un ……… .",
        "Les maisons de planches et de tôles sont des maisons ……… .",
        "Sans eau courante, on puise l'eau à la ……… publique.",
        "Quand le canal monte, les quartiers bas subissent des ……… .",
      ],
      corrige: [
        "un **bidonville** / des maisons **précaires** / à la **fontaine** / des **inondations**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Un bidonville est fait de maisons : A. en béton — B. de planches et de tôles — C. en verre",
        "2. Les bidonvilles accueillent surtout : A. des arrivants de la campagne — B. des touristes — C. des explorateurs",
        "3. L'insalubrité favorise : A. les maladies — B. la richesse — C. les vacances",
        "4. L'eau du bidonville vient : A. du robinet de chaque maison — B. de la fontaine publique — C. du ciel seulement",
        "5. Les maisons du bidonville sont construites : A. avec autorisation et plans — B. à la hâte, sans autorisation — C. par des architectes",
      ],
      corrige: [
        "1. Réponse **B** : matériaux de récupération.",
        "2. Réponse **A** : des familles de l'exode rural.",
        "3. Réponse **A** : l'eau sale et les déchets portent les maladies.",
        "4. Réponse **B** : parfois à dix minutes à pied.",
        "5. Réponse **B** : en quelques jours, sans permis.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Une ville qui déborde",
        paras: [
          "Chaque mois, des milliers d'arrivants cherchent un toit en ville. Mais les logements convenables sont trop rares et trop chers pour des gens sans emploi stable.",
          "Alors les quartiers poussent à la hâte, sans autorisation, sur les terrains vides : les pentes, les bords de canal, les marécages asséchés. La ville déborde de toutes parts.",
        ],
        exemples: [
          "Les maisons de planches « poussent comme des champignons » au bord du canal.",
          "Une chambre minuscule se loue cher, au fond d'une ruelle de boue.",
        ],
      },
      {
        titre: "2. La vie dans le bidonville",
        paras: [
          "Dans le bidonville, tout manque : l'eau se puise à la fontaine publique, les toilettes sont rares, les déchets s'entassent, l'électricité saute à la pluie.",
          "Les ruelles étroites retiennent la boue et la poussière. Les maisons serrerées n'ont ni air ni lumière ; des familles entières vivent dans une seule pièce.",
        ],
        exemples: [
          "Dix minutes de marche pour deux bidons d'eau.",
          "Une seule latrine pour des dizaines de foyers.",
        ],
      },
      {
        titre: "3. Des dangers quotidiens",
        paras: [
          "L'insalubrité apporte les maladies : diarrhées, fièvres, infections des enfants.",
          "Les maisons de bois et de carton s'enflamment en quelques minutes ; le feu gagne tout le quartier. Et quand la saison des pluies arrive, l'eau du canal monte jusqu'aux portes : les inondations emportent les maigres biens des habitants.",
        ],
        exemples: [
          "L'année dernière, en saison des pluies, l'eau est entrée dans cent maisons du quartier de Rado.",
          "Un réchaud renversé a brûlé trois maisons en une nuit.",
        ],
      },
    ],
  },
  motsCles: ["bidonville", "précaire", "insalubrité", "inondation", "surpeuplement"],
  questionsRevision: [
    ["Qu'est-ce qu'un bidonville ?", "Un quartier de maisons précaires construites sans autorisation, sans eau ni égouts."],
    ["Cite deux dangers des bidonvilles.", "Les maladies dues à l'insalubrité et les inondations (aussi les incendies)."],
  ],
};

const S47 = {
  numero: 47, total: TOTAL,
  titre: "Les solutions (1) : améliorer les techniques agricoles",
  theme: "L'exode rural à Madagascar",
  objectif: "Être capable d'expliquer comment l'amélioration des techniques agricoles aide les ruraux à mieux vivre et à rester au village.",
  image: { id: "geo6_exode_techniques", legende: "Mieux cultiver : semer en lignes, composter, irriguer — récolter le double." },
  scene: { file: "scene_s47_techniques.jpg", mode: "document", legende: "Document : le moniteur agricole montre aux paysans du village les semis en lignes et le compost : sur la parcelle d'essai, les épis sont deux fois plus gros." },
  revisionOuverture: [
    ["Qu'est-ce qu'un bidonville ?", "Un quartier de maisons précaires construites sans autorisation, sans eau ni égouts."],
    ["Cite deux dangers des bidonvilles.", "Les maladies dues à l'insalubrité et les inondations (aussi les incendies)."],
  ],
  miseEnSituation: {
    texte: "Un moniteur agricole est venu au village. Sur la parcelle d'essai de grand-père, il a montré trois choses : semer en lignes bien droites pour que chaque pied prenne sa part de soleil ; fabriquer du compost avec les déchets des animaux pour nourrir la terre ; réparer le canal pour arroser au bon moment. À la récolte, stupeur : la parcelle d'essai a donné deux fois plus de riz que les autres. « Si la terre nourrit enfin, dit Tovo, revenu pour les vacances, peut-être qu'on n'aura plus besoin de partir. »",
    question: "Comment mieux cultiver peut-il retenir les jeunes au village ?",
    ra: "Si les récoltes doublent grâce aux techniques améliorées, la terre nourrit à nouveau les familles : partir devient moins nécessaire.",
    support: "Schéma des techniques agricoles améliorées (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les solutions (1) : améliorer les techniques agricoles ». Après cette séance, vous serez capables de citer ces techniques et d'expliquer leur effet sur l'exode rural.",
  observation: "Observez bien le schéma : les trois gestes du moniteur — lignes de semis, compost, canal réparé — et les deux tas de sacs : avant, après.",
  supportObservation: "Schéma des techniques agricoles améliorées (page Leçon)",
  analyse: [
    ["Pourquoi semer en lignes ?", "Pour que chaque pied reçoive sa part de soleil et d'espace, et que le sarclage soit plus facile."],
    ["À quoi sert le compost ?", "Il nourrit la terre naturellement, avec les déchets des animaux et des cuisines."],
    ["Pourquoi réparer le canal ?", "Pour apporter l'eau au bon moment : ni noyée, ni assoiffée, la plante donne mieux."],
    ["Qu'a donné la parcelle d'essai ?", "Deux fois plus de riz que les parcelles d'avant."],
    ["Quel est le lien avec l'exode rural ?", "Si la terre nourrit, les jeunes n'ont plus besoin de partir pour survivre."],
    ["Que peut-on diversifier d'autre au village ?", "L'élevage, le maraîchage de contre-saison, l'artisanat : plusieurs activités, plusieurs revenus."],
  ],
  synthese: "Donc, améliorer les techniques agricoles — semis en lignes, compost, irrigation réparée, activités diversifiées — double les récoltes : la campagne nourrit à nouveau ses enfants, et l'exode perd sa raison d'être.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Pourquoi semer en lignes bien droites ?",
        "2. Comment fabrique-t-on du compost ?",
        "3. Qu'apporte un canal réparé ?",
        "4. Pourquoi mieux cultiver retient-il les jeunes au village ?",
      ],
      corrige: [
        "1. Pour que **chaque pied ait sa part de soleil** et pour sarcler facilement.",
        "2. Avec **les déchets des animaux et des cuisines**, transformés en engrais naturel.",
        "3. **L'eau au bon moment**, sans noyer ni assoiffer les plants.",
        "4. Parce que **la terre nourrit à nouveau** : partir n'est plus une question de survie.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le compost appauvrit la terre.",
        "2. La parcelle d'essai a donné deux fois plus de riz.",
        "3. Diversifier les activités multiplie les revenus des familles.",
        "4. Mieux cultiver ne change rien à l'exode rural.",
      ],
      corrige: [
        "1. **Faux** : il nourrit la terre, naturellement.",
        "2. **Vrai** : lignes, compost et eau au bon moment.",
        "3. **Vrai** : élevage, maraîchage, artisanat complètent la rizière.",
        "4. **Faux** : des récoltes doubles rendent le départ moins nécessaire.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : compost — lignes — canal — récoltes.",
      items: [
        "Semer en ……… droites donne à chaque pied sa part de soleil.",
        "Le ……… nourrit la terre avec les déchets.",
        "Le ……… réparé apporte l'eau au bon moment.",
        "Bien cultivée, la terre offre de meilleures ……… .",
      ],
      corrige: [
        "en **lignes** / le **compost** / le **canal** / de meilleures **récoltes**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le moniteur agricole enseigne : A. de nouvelles techniques — B. la danse — C. le repos",
        "2. Le compost est fait : A. de déchets transformés — B. de pierres — C. de sable",
        "3. La parcelle d'essai a récolté : A. deux fois moins — B. deux fois plus — C. la même chose",
        "4. Face aux bonnes récoltes, Tovo pense : A. partir plus vite — B. rester au village — C. vendre la terre",
        "5. Diversifier, c'est ajouter : A. élevage et maraîchage — B. des nuages — C. du silence",
      ],
      corrige: [
        "1. Réponse **A** : semis, compost, irrigation.",
        "2. Réponse **A** : déjections et déchets végétaux.",
        "3. Réponse **B** : le double de riz.",
        "4. Réponse **B** : revenir vivre au village devient possible.",
        "5. Réponse **A** : plusieurs activités, plusieurs revenus.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Les gestes qui changent tout",
        paras: [
          "Premier geste : semer en lignes bien droites. Chaque pied reçoit sa part de soleil et d'air, le sarclage se fait à la houe entre les rangs, et la surveillance est plus facile.",
          "Deuxième geste : fabriquer du compost. Les déchets des animaux et des cuisines, bien entassés et retournés, deviennent un engrais naturel qui rend à la terre sa force.",
        ],
        exemples: [
          "Les lignes de riz du moniteur, droites comme des règles.",
          "Le tas de compost de grand-père, au coin de la rizière.",
        ],
      },
      {
        titre: "2. L'eau au bon moment",
        paras: [
          "Troisième geste : entretenir le canal d'irrigation. Une terre arrosée au bon moment — ni noyée, ni assoiffée — donne son maximum.",
          "Avec ces trois gestes, la parcelle d'essai du village a produit deux fois plus de riz, sans dépenser un franc de plus : seulement du soin et du travail.",
        ],
        exemples: [
          "Le canal réparé en une semaine de chantier collectif.",
          "Deux fois plus de sacs sur la parcelle d'essai : la stupeur du village.",
        ],
      },
      {
        titre: "3. Produire plus, diversifier, rester",
        paras: [
          "Quand la terre nourrit, le départ n'est plus une question de survie. On peut même diversifier : élevage de poules, maraîchage de contre-saison, transformation des produits, artisanat.",
          "Plusieurs activités, plusieurs revenus : la famille tient au village, et les jeunes, comme Tovo, songent à revenir. Améliorer les techniques agricoles, c'est frapper à la racine de l'exode rural.",
        ],
        exemples: [
          "L'amélioration des rendements peut stabiliser les revenus et réduire les départs contraints.",
          "Le groupe de femmes du village lance un élevage de poules avec l'argent des sacs doubles.",
        ],
      },
    ],
  },
  motsCles: ["techniques agricoles", "semis en lignes", "compost", "irrigation", "diversification"],
  questionsRevision: [
    ["Cite les trois gestes du moniteur agricole.", "Semer en lignes, fabriquer du compost, réparer le canal d'irrigation."],
    ["Quel lien entre meilleures récoltes et exode rural ?", "Quand la terre nourrit, partir n'est plus nécessaire : les jeunes restent ou reviennent."],
  ],
};

const S48 = {
  numero: 48, total: TOTAL,
  titre: "Les solutions (2) : sécurité, emplois et infrastructures",
  theme: "L'exode rural à Madagascar",
  objectif: "Être capable de citer les solutions face à l'exode rural : renforcer la sécurité, créer des emplois, installer des infrastructures, implanter une ville nouvelle.",
  image: { id: "geo6_exode_solutions", legende: "Retenir les habitants : sécurité, emplois, infrastructures, ville nouvelle." },
  scene: { file: "scene_s48_solutions.jpg", mode: "document", legende: "Document : au carrefour du village, on trace la ville nouvelle : école, marché, ateliers — de vrais emplois à côté des champs." },
  revisionOuverture: [
    ["Cite les trois gestes du moniteur agricole.", "Semer en lignes, fabriquer du compost, réparer le canal d'irrigation."],
    ["Quel lien entre meilleures récoltes et exode rural ?", "Quand la terre nourrit, partir n'est plus nécessaire : les jeunes restent ou reviennent."],
  ],
  miseEnSituation: {
    texte: "Grande nouvelle au village : la piste va être goudronnée jusqu'au carrefour, et des patrouilles mixtes, avec les gendarmes et les hommes du villages, surveillent désormais les troupeaux. Mieux : sur la colline d'à côté, on trace une ville nouvelle — école, centre de santé, marché couvert, ateliers de transformation des produits de la région. « Des chantiers, des emplois, une vraie ville près des champs », lit-on au bureau du fokontany. Grand-père sourit : « Si tout cela sort de terre, mes petits-enfants n'auront plus besoin d'aller si loin pour vivre. »",
    question: "Quelles solutions peuvent retenir les habitants à la campagne ?",
    ra: "La sécurité retrouvée, les emplois créés près des villages, les infrastructures installées, et même des villes nouvelles pour rapprocher les services des campagnes.",
    support: "Schéma des solutions face à l'exode rural (page Leçon)",
  },
  presentation: "Aujourd'hui, nous terminons l'unité 4 avec : « Les solutions (2) : sécurité, emplois et infrastructures ». Après cette séance, vous serez capables de citer les solutions qui limitent l'exode rural.",
  observation: "Observez bien le schéma : les quatre clés qui retiennent les habitants — sécurité, emplois, infrastructures, ville nouvelle.",
  supportObservation: "Schéma des solutions face à l'exode rural (page Leçon)",
  analyse: [
    ["Que risquent les campagnes sans sécurité ?", "Les vols découragent les éleveurs et les cultivateurs : ils partent."],
    ["Comment renforcer la sécurité ?", "Par des patrouilles avec les forces de l'ordre et la coopération des villages."],
    ["Pourquoi créer des emplois près des villages ?", "Pour que les jeunes gagnent leur vie sans aller en ville : ateliers, transformation des produits, chantiers."],
    ["Quelles infrastructures faut-il installer ?", "Routes praticables, écoles, centres de santé, eau, électricité."],
    ["Qu'est-ce qu'une ville nouvelle ?", "Une ville créée de toutes pièces près des campagnes, avec ses services et ses emplois, pour désengorger les grandes villes."],
    ["Quel est le but de toutes ces solutions ?", "Rétablir l'équilibre entre la ville et la campagne, pour que chacun choisisse librement où vivre."],
  ],
  synthese: "Donc, pour limiter l'exode rural : renforcer la sécurité, créer des emplois près des villages, installer les infrastructures qui manquent, et implanter des villes nouvelles. Mieux vivre à la campagne, pour ne plus être obligé d'en partir.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Pourquoi la sécurité est-elle la première des solutions ?",
        "2. Cite deux emplois qui peuvent naître près des villages.",
        "3. Cite trois infrastructures à installer à la campagne.",
        "4. Qu'est-ce qu'une ville nouvelle ?",
      ],
      corrige: [
        "1. Parce que **sans sécurité, les biens et les personnes sont menacés** : on fuit l'insécurité.",
        "2. Par exemple : **les ateliers de transformation** des produits et **les chantiers** de routes.",
        "3. Par exemple : **une route praticable**, **une école**, **un centre de santé** (aussi eau, électricité).",
        "4. C'est **une ville créée de toutes pièces** près des campagnes, avec services et emplois.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Les patrouilles mixtes protègent les troupeaux.",
        "2. Créer des emplois en ville augmente l'exode rural.",
        "3. Une ville nouvelle rapproche les services des campagnes.",
        "4. Le but des solutions est d'interdire la ville aux ruraux.",
      ],
      corrige: [
        "1. **Vrai** : gendarmes et villageois coopèrent.",
        "2. **Vrai** : sans emploi local, on part — mais créer des emplois près des villages les retient (attention au sens : les emplois créés À LA CAMPAGNE les retiennent).",
        "3. **Vrai** : école, santé, marché, ateliers.",
        "4. **Faux** : le but est l'équilibre : choisir librement où vivre.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : sécurité — emplois — infrastructures — ville nouvelle.",
      items: [
        "Protéger les personnes et les biens, c'est renforcer la ……… .",
        "Les ateliers et les chantiers créent des ……… près des villages.",
        "Routes, écoles et centres de santé sont des ……… .",
        "Une ……… est une ville créée de toutes pièces près des campagnes.",
      ],
      corrige: [
        "la **sécurité** / des **emplois** / des **infrastructures** / une **ville nouvelle**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Contre les voleurs de zébus, on renforce : A. la sécurité — B. la pluie — C. le silence",
        "2. Les ateliers de transformation apportent : A. des emplois — B. des nuages — C. des zébus",
        "3. La piste goudronnée est : A. une infrastructure — B. un jouet — C. un animal",
        "4. La ville nouvelle est construite : A. en plein désert — B. près des campagnes — C. sous la mer",
        "5. Le but final des solutions : A. l'équilibre ville-campagne — B. vider les villes — C. fermer les écoles",
      ],
      corrige: [
        "1. Réponse **A** : patrouilles et coopération.",
        "2. Réponse **A** : transformer les produits sur place.",
        "3. Réponse **A** : elle désenclave le village.",
        "4. Réponse **B** : pour rapprocher les services.",
        "5. Réponse **A** : que chacun choisisse librement où vivre.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Sécuriser les personnes et les biens",
        paras: [
          "Première solution : la sécurité. Des patrouilles mixtes — forces de l'ordre et hommes des villages — surveillent les troupeaux et les récoltes.",
          "Quand les zébus dorment tranquilles et que les champs sont protégés, la peur recule ; les familles restent, les investissements reviennent.",
        ],
        exemples: [
          "Depuis les patrouilles, aucun zébu n'a été volé dans la commune.",
          "Les veilles épuisantes des jeunes ont cessé : ils retrouvent leurs champs.",
        ],
      },
      {
        titre: "2. Créer des emplois près des villages",
        paras: [
          "Deuxième solution : l'emploi local. Ateliers de transformation des produits — riz décortiqué, fruits séchés, tissus —, chantiers de routes, entreprises artisanales.",
          "Ces emplois permettent aux jeunes de gagner un salaire sans quitter les leurs. Les produits transformés sur place valent plus cher vendus : la richesse reste au village.",
        ],
        exemples: [
          "Le nouvel atelier de décorticage emploie déjà six jeunes du village.",
          "Les femmes transforment la soie sauvage en écharpes vendues au marché d'Antsirabe.",
        ],
      },
      {
        titre: "3. Installer les infrastructures et les villes nouvelles",
        paras: [
          "Troisième solution : les infrastructures — routes praticables toute l'année, écoles, centres de santé, eau, électricité — pour offrir aux campagnes le confort des villes.",
          "Et quand les grandes villes débordent, on implante des villes nouvelles : des villes créées de toutes pièces, avec leurs services et leurs emplois, qui rapprochent la ville des campagnes et désengorgent les capitales. C'est l'équilibre retrouvé entre la ville et la campagne : chacun peut choisir librement où vivre.",
        ],
        exemples: [
          "Au carrefour du village, les piquets de la ville nouvelle sont plantés : école, marché couvert, ateliers.",
          "La sécurité, les emplois et les infrastructures permettent aux jeunes de choisir de rester dans leur région.",
        ],
      },
    ],
  },
  motsCles: ["sécurité", "emplois", "infrastructures", "ville nouvelle", "équilibre ville-campagne"],
  questionsRevision: [
    ["Cite les quatre solutions face à l'exode rural.", "Renforcer la sécurité, créer des emplois, installer des infrastructures, implanter des villes nouvelles."],
    ["Quel est le but final de ces solutions ?", "L'équilibre entre ville et campagne : choisir librement où vivre."],
  ],
};

module.exports = { topics: [S44, S45, S46, S47, S48] };
