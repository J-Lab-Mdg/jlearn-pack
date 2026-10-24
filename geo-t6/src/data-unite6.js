// data-unite6.js — UNITÉ 6 : LE VILLAGE ÉCOLOGIQUE (Séances 67 à 71)
// Contenu rédactionnel conforme au Programme d'études officiel T6 — Géographie (p. 165, 181)
const TOTAL = 78;

const S67 = {
  numero: 67, total: TOTAL,
  titre: "Qu'est-ce qu'un village écologique ?",
  theme: "Le village écologique",
  objectif: "Être capable d'expliquer la notion de village écologique : un village qui respecte son milieu naturel.",
  image: { id: "geo6_village_ecologique_notion", legende: "Le village écologique vit en paix avec la nature qui l'entoure." },
  scene: { file: "scene_s67_notion.jpg", mode: "document", legende: "Document : au village de grand-père Maitso, l'eau claire coule à la fontaine, les collines sont vertes, les poubelles triées attendent le ramassage." },
  revisionOuverture: [
    ["Cite les trois formes de tourisme.", "Balnéaire, culturel et écologique."],
    ["Que doit faire l'homme face aux nouvelles technologies ?", "Rester le maître de l'outil : la machine aide, l'homme décide."],
  ],
  miseEnSituation: {
    texte: "Grandes vacances au village de grand-père Maitso. En arrivant, Miora ouvre de grands yeux : des panneaux en bois indiquent le chemin de la source protégée ; les rizières brillent, propres ; le long des sentiers, des petites cloisons en bambou recueillent les déchets, triés ; au bord de la colline, personne ne coupe un arbre sans en replanter un. « Qu'est-ce qui a changé ? demande-t-elle. — Notre village s'est lancé un défi, sourit grand-père : devenir un village écologique. Un village qui respecte la nature, pour que la nature continue de nous nourrir. »",
    question: "Qu'est-ce qu'un village écologique ?",
    ra: "C'est un village organisé pour respecter son milieu naturel : protéger l'eau et la forêt, gérer les déchets, utiliser proprement ses ressources — pour que la vie dure.",
    support: "Schéma de la notion de village écologique (page Leçon)",
  },
  presentation: "Aujourd'hui, nous commençons la dernière unité : le village écologique. Nous allons apprendre : « Qu'est-ce qu'un village écologique ? ». Après cette séance, vous serez capables d'expliquer cette notion et de citer les gestes d'un village écologique.",
  observation: "Observez bien le schéma : un village au milieu de la nature — la source protégée, la forêt, les rizières, les déchets triés — chaque élément à sa place.",
  supportObservation: "Schéma de la notion de village écologique (page Leçon)",
  analyse: [
    ["Qu'est-ce qu'un village écologique ?", "C'est un village qui respecte son milieu naturel et vit en harmonie avec lui."],
    ["Que protège-t-il d'abord ?", "Son eau : la source est enclose, le lavage se fait loin du captage."],
    ["Que fait-il pour la forêt ?", "Il coupe sans détruire : arbres mûrs seulement, et replantés aussitôt."],
    ["Que fait-il des déchets ?", "Il les trie : compost pour les restes, récupération pour ce qui se vend, dépôt propre pour le reste."],
    ["Comment chauffe-t-il et s'éclaire-t-il ?", "Avec des foyers économes, du gaz, des panneaux solaires — moins de fumée, moins de bois coupé."],
    ["Pourquoi tout cela ?", "Pour que le village nourrisse ses enfants aujourd'hui… et ceux de demain."],
  ],
  synthese: "Donc, un village écologique est un village qui respecte son milieu : eau protégée, forêt gérée, déchets triés, énergie propre. Il ne refuse pas le progrès : il l'organise pour que la vie dure.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'un village écologique ?",
        "2. Comment protège-t-on la source d'un village ?",
        "3. Que fait un village écologique de ses déchets ?",
        "4. Pourquoi un village veut-il devenir écologique ?",
      ],
      corrige: [
        "1. C'est **un village qui respecte son milieu naturel** et vit en harmonie avec lui.",
        "2. En l'entourant d'une clôture et en lavant le linge loin du captage.",
        "3. Il **les trie** : compost, récupération, dépôt propre.",
        "4. **Pour que la nature continue de le nourrir**, aujourd'hui et pour les enfants de demain.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Un village écologique refuse tout progrès.",
        "2. Dans un village écologique, on replante les arbres coupés.",
        "3. Les panneaux solaires aident à moins couper de bois.",
        "4. Un village écologique jette ses déchets dans la rivière.",
      ],
      corrige: [
        "1. **Faux** : il organise le progrès proprement, il ne le refuse pas.",
        "2. **Vrai** : un coupé, un planté.",
        "3. **Vrai** : moins de bois de chauffe à couper.",
        "4. **Faux** : il les trie et les dépose proprement.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : écologique — eau — trie — demain.",
      items: [
        "Un village qui respecte son milieu est un village ……… .",
        "Sa première richesse à protéger est l'……… de la source.",
        "Un village écologique …… ses déchets.",
        "Il pense aux enfants d'……… .",
      ],
      corrige: [
        "village **écologique** / l'**eau** / **trie** / de **demain**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Un village écologique : A. respecte son milieu — B. pollue la rivière — C. coupe toute la forêt",
        "2. La source du village est : A. entourée d'une clôture — B. un dépotoir — C. vendue",
        "3. Les déchets y sont : A. brûlés n'importe où — B. triés — C. jetés aux champs",
        "4. Les panneaux solaires permettent : A. moins de fumée et de bois coupé — B. plus de tavy — C. rien",
        "5. Le but du village écologique : A. la vie qui dure — B. partir vite — C. tout vendre",
      ],
      corrige: [
        "1. Réponse **A** : eau, forêt, sol, déchets respectés.",
        "2. Réponse **A** : le captage est protégé.",
        "3. Réponse **B** : compost, récupération, dépôt.",
        "4. Réponse **A** : énergie propre.",
        "5. Réponse **A** : nourrir aujourd'hui sans appauvrir demain.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Un village en paix avec la nature",
        paras: [
          "Un village écologique est un village organisé pour respecter le milieu naturel où il vit : son eau, sa forêt, sa terre et son air.",
          "Il ne refuse ni la route, ni l'école, ni le progrès. Mais il choisit des façons de vivre qui n'abîment pas ce qui le nourrit : c'est cela, l'écologie du village.",
        ],
        exemples: [
          "Au village de grand-père Maitso, les panneaux de bois indiquent le chemin de la source protégée.",
          "Les sentiers restent propres : chacun rapporte ce qu'il emporte.",
        ],
      },
      {
        titre: "2. Les gestes du village écologique",
        paras: [
          "Protéger l'eau : enclore la source, laver en aval, planter les berges. Gérer la forêt : couper les arbres mûrs, replanter le double, défendre les pentes fragiles.",
          "Trier les déchets : le compost nourrit les champs, la récupération rapporte un peu d'argent, le reste part au dépôt. Chauffer et s'éclairer proprement : foyers économes, gaz, panneaux solaires.",
        ],
        exemples: [
          "Les cloisons en bambou du village recueillent les déchets, triés par les écoliers.",
          "Depuis les foyers améliorés, la fumée ne pique plus les yeux des mamans.",
        ],
      },
      {
        titre: "3. Pour aujourd'hui et pour demain",
        paras: [
          "Le village écologique ne vit pas moins bien : il vit mieux et plus longtemps. Son eau reste claire, sa terre reste forte, sa forêt reste debout.",
          "Et surtout, il prépare l'avenir : les enfants qui grandissent aujourd'hui trouveront demain les mêmes richesses. Voilà pourquoi des villages de Madagascar se lancent ce défi, unité après unité de vie.",
        ],
        exemples: [
          "L'objectif d'un village écologique est affiché et traduit en actions collectives mesurables.",
          "Les rizières du village n'ont jamais été aussi propres ni aussi vertes.",
        ],
      },
    ],
  },
  motsCles: ["village écologique", "milieu naturel", "respecter", "trier", "durabilité"],
  questionsRevision: [
    ["Qu'est-ce qu'un village écologique ?", "C'est un village organisé pour respecter son milieu naturel."],
    ["Cite trois gestes d'un village écologique.", "Protéger la source, replanter les arbres coupés, trier les déchets (aussi foyers propres)."],
  ],
};

const S68 = {
  numero: 68, total: TOTAL,
  titre: "L'organisation juridique : l'autorité locale et les notables",
  theme: "Le village écologique",
  objectif: "Être capable de décrire l'organisation juridique d'un village : l'autorité locale et les notables.",
  image: { id: "geo6_organisation_juridique", legende: "Le chef du fokontany et les notables : l'équipe qui fait respecter les règles." },
  scene: { file: "scene_s68_autorite.jpg", mode: "document", legende: "Document : au bureau du fokontany, Rakotomalala, le chef, écoute les villageois ; à côté, les notables prennent note des décisions." },
  revisionOuverture: [
    ["Qu'est-ce qu'un village écologique ?", "C'est un village organisé pour respecter son milieu naturel."],
    ["Cite trois gestes d'un village écologique.", "Protéger la source, replanter les arbres coupés, trier les déchets (aussi foyers propres)."],
  ],
  miseEnSituation: {
    texte: "Réunion au bureau du fokontany. Rakotomalala, le chef du fokontany, a convoqué tout le village : « Le défi du village écologique commence par les règles. Qui les fera respecter ? Comment déciderons-nous ensemble ? » Dans la salle, autour de lui, siègent les notables : la doyenne Soa, gardienne de la mémoire ; l'ancien instituteur ; le représentant des jeunes ; la sage-femme du dispensaire. « Nous sommes l'autorité locale, rappelle Rakotomalala. Avec les notables, nous proposons ; l'assemblée du village décide ; et chacun respecte la règle commune. »",
    question: "Qui dirige un village, et comment les décisions se prennent-elles ?",
    ra: "Le chef du fokontany est l'autorité locale : il applique les règles et convoque les réunions. Les notables — anciens, sages, représentants — le conseillent. L'assemblée des villageois décide ensemble.",
    support: "Schéma de l'organisation du village (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « L'organisation juridique : l'autorité locale et les notables ». Après cette séance, vous serez capables de dire qui dirige le village et comment se prennent les décisions.",
  observation: "Observez bien le schéma : au centre, le chef du fokontany ; autour de lui, les notables ; en dessous, l'assemblée de tous les villageois.",
  supportObservation: "Schéma de l'organisation du village (page Leçon)",
  analyse: [
    ["Qui est l'autorité locale du village ?", "Le chef du fokontany, élu par les habitants pour les représenter et faire respecter les règles."],
    ["Qui sont les notables ?", "Les anciens et les sages du village : la doyenne, l'ancien instituteur, la sage-femme, le représentant des jeunes."],
    ["Quel est leur rôle ?", "Conseiller le chef, garder la mémoire des coutumes, témoigner de la sagesse du village."],
    ["Qui décide en dernier ?", "L'assemblée des villageois, réunie au son du tambour ou de la corne."],
    ["Que fait le chef du fokontany chaque jour ?", "Il tient l'état du village, transmet les informations, règle les petits différends, convoque les réunions."],
    ["Que se passe-t-il en cas de conflit ?", "On cherche d'abord l'accord à l'amiable devant le chef et les notables ; seulement ensuite, si besoin, on va au tribunal du district."],
  ],
  synthese: "Donc, le village est dirigé par l'autorité locale — le chef du fokontany — conseillé par les notables, gardiens de la mémoire. Les grandes décisions appartiennent à l'assemblée de tous : chacun a voix au chapitre, et la règle commune engage tout le monde.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qui est l'autorité locale d'un village ?",
        "2. Qui sont les notables ?",
        "3. Quel est le rôle du chef du fokontany ?",
        "4. Qui prend les grandes décisions du village ?",
      ],
      corrige: [
        "1. **Le chef du fokontany**, élu par les habitants.",
        "2. **Les anciens et les sages** du village : doyenne, ancien instituteur, sage-femme…",
        "3. Il **fait respecter les règles**, tient l'état du village et convoque les réunions.",
        "4. **L'assemblée des villageois**, réunie pour en décider ensemble.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le chef du fokontany est nommé par les zébus.",
        "2. Les notables gardent la mémoire des coutumes.",
        "3. L'assemblée des villageois décide des grandes affaires.",
        "4. En cas de conflit, on va tout de suite au tribunal.",
      ],
      corrige: [
        "1. **Faux** : il est élu par les habitants du fokontany.",
        "2. **Vrai** : ils conseillent et témoignent.",
        "3. **Vrai** : chacun a voix au chapitre.",
        "4. **Faux** : on cherche d'abord l'accord devant le chef et les notables.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : fokontany — notables — assemblée — coutumes.",
      items: [
        "Le chef du ……… est l'autorité locale du village.",
        "Les anciens et les sages sont les ……… .",
        "Les grandes décisions reviennent à l'……… des villageois.",
        "Les notables gardent la mémoire des ……… .",
      ],
      corrige: [
        "du **fokontany** / les **notables** / l'**assemblée** / des **coutumes**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. L'autorité locale du village est : A. le chef du fokontany — B. le touriste — C. le camionneur",
        "2. Les notables sont : A. des anciens et des sages — B. des enfants — C. des étrangers",
        "3. Leur rôle : A. conseiller le chef — B. crier — C. dormir",
        "4. Les décisions majeures se prennent : A. en assemblée — B. en cachette — C. par tirage au sort",
        "5. Devant un conflit, on cherche d'abord : A. l'accord à l'amiable — B. la bagarre — C. le bateau",
      ],
      corrige: [
        "1. Réponse **A** : élu par les habitants.",
        "2. Réponse **A** : la mémoire vivante du village.",
        "3. Réponse **A** : avec la mémoire des coutumes.",
        "4. Réponse **A** : réunion au son du tambour.",
        "5. Réponse **A** : devant le chef et les notables.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. L'autorité locale",
        paras: [
          "Dans chaque fokontany, les habitants élisent leur chef : c'est l'autorité locale. Il connaît chaque famille, chaque ruelle, chaque histoire.",
          "Il tient l'état du village — naissances, décès, arrivées —, transmet les informations du district, règle les petits différends et fait respecter les règles communes. Sans lui, pas d'ordre : c'est l'organisation juridique du village.",
        ],
        exemples: [
          "Rakotomalala convoque la réunion du défi écologique au bureau du fokontany.",
          "C'est lui qui signe les attestations et accueille les nouveaux arrivants.",
        ],
      },
      {
        titre: "2. Les notables",
        paras: [
          "Autour du chef siègent les notables : la doyenne Soa, qui se souvient de tout ; l'ancien instituteur, qui lit les papiers ; la sage-femme, qui a vu naître la moitié du village ; le représentant des jeunes.",
          "Leur rôle est de conseiller : ils gardent la mémoire des coutumes, apaisent les querelles et témoignent de ce qui s'est toujours fait. Le chef décide avec eux, jamais contre eux.",
        ],
        exemples: [
          "La doyenne Soa rappelle comment, du temps de ses parents, la source était déjà protégée par des règles.",
          "L'ancien instituteur note les décisions dans le grand cahier du village.",
        ],
      },
      {
        titre: "3. Décider ensemble",
        paras: [
          "Pour les grandes affaires — l'eau, la forêt, les terres, le défi écologique — le chef convoque l'assemblée du village au son du tambour ou de la corne.",
          "Chacun parle, les notables résument, et la décision commune devient règle pour tous, consignée dans le cahier. C'est cette organisation — autorité locale, notables, assemblée — qui permettra au village de tenir son défi écologique, comme nous le verrons avec les Dina.",
        ],
        exemples: [
          "L'assemblée du village a voté à main levée la clôture de la source.",
          "Le grand cahier du fokontany garde la trace de chaque décision.",
        ],
      },
    ],
  },
  motsCles: ["organisation juridique", "autorité locale", "chef du fokontany", "notables", "assemblée"],
  questionsRevision: [
    ["Qui dirige le village et qui le conseille ?", "Le chef du fokontany dirige ; les notables le conseillent."],
    ["Qui prend les grandes décisions ?", "L'assemblée de tous les villageois."],
  ],
};

const S69 = {
  numero: 69, total: TOTAL,
  titre: "Les droits coutumiers : les Dina",
  theme: "Le village écologique",
  objectif: "Être capable d'expliquer ce qu'est un Dina et le rôle des droits coutumiers dans la vie du village.",
  image: { id: "geo6_dina", legende: "Le Dina : la règle du village, écrite et respectée par tous." },
  scene: { file: "scene_s69_dina.jpg", mode: "document", legende: "Document : sous l'arbre à palabres, la doyenne Soa lit le Dina du village ; les villageois écoutent, la main sur le cœur." },
  revisionOuverture: [
    ["Qui dirige le village et qui le conseille ?", "Le chef du fokontany dirige ; les notables le conseillent."],
    ["Qui prend les grandes décisions ?", "L'assemblée de tous les villageois."],
  ],
  miseEnSituation: {
    texte: "Sous l'arbre à palabres, la doyenne Soa déplie un papier jauni, puis un autre, tout neuf. « Voici nos Dina, dit-elle. La règle de nos ancêtres, et la règle d'aujourd'hui. Ici, il est écrit : celui qui coupe un arbre de la source paie un zébu. Là, signé le mois dernier : celui qui jette des déchets dans la rivière répare et nettoie. Le Dina, ce sont les règles que le village se donne lui-même, transmises de nos grands-parents et ajoutées par nous. Celui qui les trahit répond devant tous. »",
    question: "Qu'est-ce qu'un Dina, et à quoi sert-il ?",
    ra: "Le Dina est une règle coutumière que le village se donne lui-même : interdictions, réparations, promesses. Il complète la règle publique et protège l'eau, la forêt et la paix du village.",
    support: "Schéma du Dina (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les droits coutumiers : les Dina ». Après cette séance, vous serez capables d'expliquer ce qu'est un Dina et pourquoi il fait respecter les règles mieux que la peur.",
  observation: "Observez bien le schéma : le grand cahier du village, les règles inscrites, la réparation en cas de faute, et la main levée de l'assemblée qui promet.",
  supportObservation: "Schéma du Dina (page Leçon)",
  analyse: [
    ["Qu'est-ce qu'un Dina ?", "C'est une règle coutumière que la communauté se donne elle-même et s'engage à respecter."],
    ["Par qui est-il créé ?", "Par l'assemblée du village, avec le chef et les notables ; autrefois, il se transmettait de bouche en bouche."],
    ["Que règle-t-il ?", "La vie commune : l'eau, la forêt, les troupeaux, les fêtes, les querelles de terre."],
    ["Que risque celui qui le viole ?", "Une réparation fixée d'avance : un zébu, une amende en argent, des journées de travail pour le village — et la honte devant tous."],
    ["Le Dina s'oppose-t-il à la règle publique ?", "Non : il la complète. La règle publique protège tout le pays ; le Dina protège le village, avec ses mots à lui."],
    ["Pourquoi le respecte-t-on si bien ?", "Parce que chacun l'a promis devant tous : c'est la parole donnée, et la parole, chez nous, vaut plus que le papier."],
  ],
  synthese: "Donc, le Dina est la règle que le village se donne lui-même : créée par l'assemblée, gardée par les notables, promise par tous. Il protège l'eau, la forêt et la paix — et celui qui le trahit répare devant le village.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'un Dina ?",
        "2. Qui crée le Dina d'un village ?",
        "3. Que risque celui qui viole le Dina ?",
        "4. Le Dina s'oppose-t-il à la règle publique ?",
      ],
      corrige: [
        "1. C'est **une règle coutumière que la communauté se donne elle-même** et s'engage à respecter.",
        "2. **L'assemblée du village**, avec le chef et les notables.",
        "3. **Une réparation fixée d'avance** : zébu, amende, travail pour le village — et la honte devant tous.",
        "4. **Non** : il la complète, avec les mots et la mémoire du village.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le Dina se transmettait autrefois de bouche en bouche.",
        "2. Le Dina peut protéger la source du village.",
        "3. Celui qui viole le Dina n'a rien à craindre.",
        "4. La parole donnée vaut beaucoup dans le village.",
      ],
      corrige: [
        "1. **Vrai** : les anciens le gardaient en mémoire.",
        "2. **Vrai** : comme tous les biens communs.",
        "3. **Faux** : il répare devant tous.",
        "4. **Vrai** : c'est le cœur du Dina.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : Dina — assemblée — réparation — coutumière.",
      items: [
        "La règle que le village se donne s'appelle le ……… .",
        "Il est créé par l'……… des villageois.",
        "Le violateur du Dina doit une ……… .",
        "Le Dina est une règle ……… , héritée des ancêtres.",
      ],
      corrige: [
        "le **Dina** / l'**assemblée** / une **réparation** / une règle **coutumière**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le Dina règle : A. la vie du village — B. la pluie — C. les étoiles",
        "2. Il est gardé par : A. le chef et les notables — B. les touristes — C. personne",
        "3. Une faute au Dina se paie : A. par une réparation — B. par un voyage — C. par un chant",
        "4. Le Dina protège surtout : A. l'eau, la forêt et la paix — B. les cailloux — C. la lune",
        "5. On respecte le Dina parce que : A. on l'a promis devant tous — B. on a peur du papier — C. c'est nouveau",
      ],
      corrige: [
        "1. Réponse **A** : l'eau, les troupeaux, les terres, les fêtes.",
        "2. Réponse **A** : et le grand cahier du village.",
        "3. Réponse **A** : zébu, amende ou travail.",
        "4. Réponse **A** : les biens communs du village.",
        "5. Réponse **A** : la parole donnée engage.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La règle des ancêtres",
        paras: [
          "Avant les papiers et les bureaux, les villages vivaient déjà sous des règles : les droits coutumiers. Les ancêtres les gardaient en mémoire et les transmettaient de bouche en bouche, autour du feu.",
          "Ces règles disaient ce qui est permis et ce qui est interdit : où puiser l'eau, quand couper le bois, comment partager la terre. Elles tenaient le village en paix, sans gendarme ni tribunal.",
        ],
        exemples: [
          "La doyenne Soa se souvient du Dina de la source, déjà respecté du temps de ses parents.",
          "Autour du feu, les anciens répétaient les règles aux enfants, en proverbes.",
        ],
      },
      {
        titre: "2. Le Dina d'aujourd'hui",
        paras: [
          "Le Dina est la forme vivante de ces droits coutumiers : une règle que le village se donne lui-même, en assemblée, et que chacun promet de respecter.",
          "Aujourd'hui, beaucoup de villages écrivent leurs Dina dans le grand cahier du fokontany : la règle ancienne pour la source, la règle nouvelle pour les déchets ou le reboisement. La parole reste le cœur du Dina, le papier n'en est que la mémoire.",
        ],
        exemples: [
          "Un Dina peut prévoir une réparation ou une sanction en cas de coupe d'arbre près d'une source.",
          "Le Dina neuf des déchets a été signé le mois dernier par tous les chefs de famille.",
        ],
      },
      {
        titre: "3. Réparer, réconcilier",
        paras: [
          "Le Dina fixe d'avance la réparation : un zébu, une amende, des journées de travail pour le village. Celui qui faut répare, et le village se réconcilie.",
          "Voilà pourquoi le Dina est l'arme du village écologique : la source, la forêt et la rivière y sont protégées non par la peur du gendarme, mais par la parole donnée de tous. La séance suivante verra comment le village vit et s'amuse aussi : son organisation socioéconomique.",
        ],
        exemples: [
          "Le voleur d'arbres a offert son zébu et replanté dix pieds : l'affaire est close.",
          "Chaque année, l'assemblée relit le Dina et l'ajuste aux nouveaux défis.",
        ],
      },
    ],
  },
  motsCles: ["droits coutumiers", "Dina", "règle", "réparation", "parole donnée"],
  questionsRevision: [
    ["Qu'est-ce qu'un Dina ?", "Une règle coutumière que le village se donne lui-même et promet de respecter."],
    ["Que risque celui qui viole le Dina ?", "Une réparation fixée d'avance : zébu, amende ou travail, devant tous."],
  ],
};

const S70 = {
  numero: 70, total: TOTAL,
  titre: "L'organisation socioéconomique : modes de vie et loisirs",
  theme: "Le village écologique",
  objectif: "Être capable de décrire l'organisation socioéconomique du village : les métiers, les modes de vie et les loisirs.",
  image: { id: "geo6_modes_vie_loisirs", legende: "Travailler ensemble, s'amuser ensemble : la vie sociale du village." },
  scene: { file: "scene_s70_vie_village.jpg", mode: "document", legende: "Document : le soir au village, on répare le toit d'un voisin, on joue au kabary sous le manguier, les enfants dansent au son du valiha." },
  revisionOuverture: [
    ["Qu'est-ce qu'un Dina ?", "Une règle coutumière que le village se donne lui-même et promet de respecter."],
    ["Que risque celui qui viole le Dina ?", "Une réparation fixée d'avance : zébu, amende ou travail, devant tous."],
  ],
  miseEnSituation: {
    texte: "Samedi au village. Le matin, tout le monde s'entraide : les hommes relèvent le toit de la maison de la veuve Ravao, les femmes battent le riz ensemble au son rythmé des pilons, les jeunes trient le compost du dépôt. Le soir, place aux loisirs : sous le manguier, les anciens mènent le kabary, l'art de bien parler ; les enfants courent après un ballon de raphia ; et le valiha de l'oncle Rivo fait danser les filles jusqu'à la lune. « Travailler ensemble, s'amuser ensemble, résume grand-père : voilà notre richesse sociale. »",
    question: "Comment le village vit-il et s'amuse-t-il ensemble ?",
    ra: "Le village s'organise socialement et économiquement : entraide aux champs et aux toits, métiers complémentaires, marchés. Et il sait se détendre : kabary, musique, danses et jeux.",
    support: "Schéma de la vie sociale du village (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « L'organisation socioéconomique : modes de vie et loisirs ». Après cette séance, vous serez capables de décrire comment le village vit, travaille et s'amuse ensemble.",
  observation: "Observez bien le schéma : d'un côté les travaux partagés (toits, riz, compost), de l'autre les loisirs (kabary, valiha, danses, jeux).",
  supportObservation: "Schéma de la vie sociale du village (page Leçon)",
  analyse: [
    ["Que veut dire « socioéconomique » ?", "Cela regroupe la vie sociale (vivre ensemble) et la vie économique (gagner sa vie)."],
    ["Comment le village travaille-t-il ?", "En s'entraîdant : toits relevés ensemble, riz battu ensemble, champs partagés aux grands moments."],
    ["Qui fait quoi au village ?", "Cultivateurs, éleveurs, pêcheurs, artisans, commerçants, instituteur, sage-femme : les métiers se complètent."],
    ["Qu'est-ce que le kabary ?", "L'art de bien parler des anciens : discours rimés et proverbes pour les grandes occasions."],
    ["Quels sont les autres loisirs ?", "La musique du valiha, les danses, les jeux des enfants, les tournois de ballon, les fêtes du village."],
    ["Pourquoi les loisirs sont-ils importants ?", "Ils reposent le corps, rapprochent les cœurs et transmettent les traditions aux enfants."],
  ],
  synthese: "Donc, le village vit d'une organisation socioéconomique : métiers complémentaires, entraide aux travaux, marchés. Et il respire par ses loisirs : kabary, valiha, danses et jeux — la joie partagée qui soude la communauté.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Que veut dire « socioéconomique » ?",
        "2. Cite trois métiers complémentaires du village.",
        "3. Qu'est-ce que le kabary ?",
        "4. Pourquoi les loisirs sont-ils importants ?",
      ],
      corrige: [
        "1. Cela regroupe **la vie sociale** (vivre ensemble) **et la vie économique** (gagner sa vie).",
        "2. Par exemple : **le cultivateur, l'artisan et l'instituteur** (aussi l'éleveur, la sage-femme).",
        "3. C'est **l'art de bien parler des anciens** : discours rimés et proverbes.",
        "4. Ils **reposent le corps, rapprochent les cœurs et transmettent les traditions**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Au village, on relève les toits ensemble.",
        "2. Le valiha est un instrument de musique.",
        "3. Les loisirs séparent les familles.",
        "4. Les métiers du village se complètent.",
      ],
      corrige: [
        "1. **Vrai** : l'entraide est la règle.",
        "2. **Vrai** : la cithare de bambou qui fait danser.",
        "3. **Faux** : ils rapprochent les cœurs.",
        "4. **Vrai** : chacun a son métier, tous ont besoin les uns des autres.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : entraide — kabary — valiha — loisirs.",
      items: [
        "Relever ensemble le toit d'un voisin, c'est l'……… .",
        "L'art de bien parler des anciens est le ……… .",
        "La cithare de bambou qui fait danser est le ……… .",
        "Les jeux, les danses et la musique sont les ……… du village.",
      ],
      corrige: [
        "l'**entraide** / le **kabary** / le **valiha** / les **loisirs**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Socioéconomique veut dire : A. vie sociale + vie économique — B. dormir + manger — C. terre + mer",
        "2. L'entraide s'applique : A. aux toits et aux rizières — B. à rien — C. aux nuages",
        "3. Le kabary est : A. un discours d'anciens — B. un mets — C. une danse",
        "4. Le valiha fait : A. danser — B. pleurer — C. fuir",
        "5. Les loisirs transmettent : A. les traditions — B. les dettes — C. la pluie",
      ],
      corrige: [
        "1. Réponse **A** : vivre ensemble et gagner sa vie.",
        "2. Réponse **A** : et aux composts, et aux récoltes.",
        "3. Réponse **A** : rimé et plein de proverbes.",
        "4. Réponse **A** : jusqu'à la lune.",
        "5. Réponse **A** : aux enfants, par le jeu et la fête.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Vivre de son travail, ensemble",
        paras: [
          "L'économie du village repose sur des métiers qui se complètent : le cultivateur nourrit, l'éleveur fournit lait et viande, l'artisan fabrique, le commerçant échange, l'instituteur instruit, la sage-femme soigne.",
          "Et surtout, on ne travaille jamais seul : aux grands moments — labour, repiquage, récolte, toit à relever — l'entraide mobilise tout le village. Travailler ensemble, c'est aller plus vite et rester unis.",
        ],
        exemples: [
          "Les hommes relèvent le toit de la veuve Ravao en une matinée.",
          "Les pilons des femmes battent le riz au même rythme, comme un seul cœur.",
        ],
      },
      {
        titre: "2. Les modes de vie",
        paras: [
          "Le mode de vie du village suit le soleil et les saisons : aux champs le matin, au marché les jours de foire, à la maison le soir, autour du riz et du feu.",
          "On mange ce que la région donne — riz, brèdes, manioc, poissons des rizières —, on s'habille du lamba des tisserandes, on habite la maison de bois ou de brique selon les richesses. Une vie simple, réglée par le travail et la famille.",
        ],
        exemples: [
          "Le repas du soir réunit trois générations autour du même plat de riz.",
          "Les jours de foire, le village entier descend au marché du carrefour.",
        ],
      },
      {
        titre: "3. Les loisirs : respirer ensemble",
        paras: [
          "Le village sait aussi se reposer et s'amuser : le kabary des anciens, art de la parole ; le valiha, la cithare de bambou ; les danses des filles ; les courses des enfants après le ballon de raphia ; les tournois entre fokontany voisins ; et les grandes fêtes du calendrier coutumier.",
          "Ces loisirs ne sont pas du temps perdu : ils reposent les corps fatigués, rapprochent les familles et transmettent aux enfants la parole, la musique et la mémoire du pays. Une communauté qui sait rire ensemble résiste mieux aux mauvais jours.",
        ],
        exemples: [
          "Le valiha de l'oncle Rivo fait danser les filles jusqu'à la lune.",
          "Au kabary du samedi, les anciens rivalisent de proverbes sous le manguier.",
        ],
      },
    ],
  },
  motsCles: ["organisation socioéconomique", "entraide", "mode de vie", "kabary", "loisirs"],
  questionsRevision: [
    ["Comment le village travaille-t-il ?", "En s'entraîdant aux grands moments, avec des métiers complémentaires."],
    ["Cite deux loisirs du village.", "Le kabary et le valiha (aussi les danses, les jeux, les fêtes)."],
  ],
};

const S71 = {
  numero: 71, total: TOTAL,
  titre: "Les activités économiques du village écologique",
  theme: "Le village écologique",
  objectif: "Être capable de citer les activités économiques d'un village écologique et d'expliquer comment elles respectent les ressources.",
  image: { id: "geo6_activites_village_eco", legende: "Rizières, étang piscicole, raphia, panneau solaire : produire sans détruire." },
  scene: { file: "scene_s71_activites.jpg", mode: "document", legende: "Document : au village, le groupe de Hery montre son étang piscicole aux visiteurs ; à côté, l'atelier de raphia et le séchoir à gingembre travaillent au soleil." },
  revisionOuverture: [
    ["Comment le village travaille-t-il ?", "En s'entraîdant aux grands moments, avec des métiers complémentaires."],
    ["Cite deux loisirs du village.", "Le kabary et le valiha (aussi les danses, les jeux, les fêtes)."],
  ],
  miseEnSituation: {
    texte: "Jour de porte ouverte au village. Les visiteurs suivent le parcours : les rizières irriguées proprement, où le riz pousse sans produits dangereux ; l'étang piscicole du groupe de Hery et Miora, qui nourrit le village sans vider la rivière ; l'atelier de raphia, où l'on tresse en coupant la feuille sans tuer la plante ; le séchoir à gingembre, qui vend la production au marché bio ; le champ de brèdes derrière le panneau solaire. « Ici, explique Rakotomalala, chaque activité gagne de l'argent en respectant la ressource. C'est notre économie écologique. »",
    question: "Quelles activités économiques font vivre un village écologique, sans détruire ses ressources ?",
    ra: "Une agriculture propre, la pisciculture, l'artisanat raisonné, la transformation des produits, l'écotourisme : des activités qui produisent en régénérant la ressource au lieu de l'épuiser.",
    support: "Schéma des activités du village écologique (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les activités économiques du village écologique ». Après cette séance, vous serez capables de citer ces activités et d'expliquer leur règle : produire sans détruire.",
  observation: "Observez bien le schéma : les six activités du village — rizière propre, étang, raphia, séchoir, panneau solaire, écotourisme — chacune avec sa règle de respect.",
  supportObservation: "Schéma des activités du village écologique (page Leçon)",
  analyse: [
    ["Quelle est la première activité du village ?", "L'agriculture : le riz et les brèdes, cultivés proprement, sans produits dangereux pour l'eau."],
    ["Que fait l'étang piscicole ?", "Il élève les poissons pour le village, sans vider la rivière ni la mer."],
    ["Comment l'atelier de raphia respecte-t-il la plante ?", "On coupe la feuille sans tuer la plante : elle repousse, la ressource vit."],
    ["Que fait le séchoir à gingembre ?", "Il transforme la récolte sur place : le produit transformé se vend plus cher — la richesse reste au village."],
    ["À quoi servent les panneaux solaires du village ?", "Ils éclairent et font tourner les ateliers sans couper un seul arbre de plus."],
    ["Qu'est-ce que l'écotourisme du village ?", "Des visiteurs viennent voir la source, la forêt et l'étang : ils paient, logent et mangent au village — la nature protégée rapporte."],
  ],
  synthese: "Donc, le village écologique vit de ses activités — agriculture propre, pisciculture, artisanat, transformation, énergie solaire, écotourisme — toutes soumises à la même règle : produire aujourd'hui sans épuiser demain.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Cite trois activités économiques du village écologique.",
        "2. Comment l'atelier de raphia respecte-t-il la plante ?",
        "3. Pourquoi transformer le gingembre sur place ?",
        "4. Comment la nature protégée rapporte-t-elle au village ?",
      ],
      corrige: [
        "1. Par exemple : **l'agriculture propre, la pisciculture et l'artisanat de raphia** (aussi séchage, solaire, écotourisme).",
        "2. En **coupant la feuille sans tuer la plante** : elle repousse.",
        "3. Parce que **le produit transformé se vend plus cher** : la richesse reste au village.",
        "4. Par **l'écotourisme** : les visiteurs paient pour voir la source, la forêt, l'étang.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. L'étang piscicole vide la rivière de ses poissons.",
        "2. Le village cultive sans produits dangereux pour l'eau.",
        "3. Le panneau solaire évite de couper du bois.",
        "4. L'écotourisme fait vivre le village en protégeant la nature.",
      ],
      corrige: [
        "1. **Faux** : il élève ses propres poissons et soulage la rivière.",
        "2. **Vrai** : l'eau de la source reste propre.",
        "3. **Vrai** : énergie propre, zéro arbre.",
        "4. **Vrai** : la nature protégée devient une richesse.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : pisciculture — transformer — solaire — écotourisme.",
      items: [
        "Élever des poissons dans un étang, c'est la ……… .",
        "……… sur place rapporte plus que vendre brut.",
        "Le panneau ……… donne une énergie propre.",
        "Les visiteurs qui viennent pour la nature font vivre l'……… .",
      ],
      corrige: [
        "la **pisciculture** / **transformer** / **solaire** / l'**écotourisme**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. La règle des activités du village écologique : A. produire sans détruire — B. tout vendre — C. tout brûler",
        "2. Le raphia se coupe : A. sans tuer la plante — B. avec la racine — C. jamais",
        "3. L'étang du groupe de Hery élève : A. des poissons — B. des zébus — C. des nuages",
        "4. Le séchoir à gingembre : A. transforme la récolte — B. fond — C. dort",
        "5. L'écotourisme paie le village pour : A. sa nature protégée — B. son bruit — C. ses déchets",
      ],
      corrige: [
        "1. Réponse **A** : aujourd'hui sans épuiser demain.",
        "2. Réponse **A** : la feuille repousse.",
        "3. Réponse **A** : sans vider la rivière.",
        "4. Réponse **A** : et vend plus cher.",
        "5. Réponse **A** : source, forêt, étang.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Produire proprement",
        paras: [
          "La première richesse du village reste la terre : rizières et jardins. Mais le village écologique cultifie proprement : compost au lieu de produits dangereux, rotation des cultures, bandes d'herbe contre l'érosion.",
          "La pisciculture complète l'assiette : l'étang du groupe de Hery et Miora élève ses poissons, soulageant la rivière et la mer de la surpêche.",
        ],
        exemples: [
          "Les rizières irriguées du village poussent sans produits qui polluent la source.",
          "L'étang piscicole, né du mini-projet de l'unité 2, nourrit maintenant tout le village.",
        ],
      },
      {
        titre: "2. Transformer et valoriser",
        paras: [
          "Vendre brut, c'est vendre mal. Le village écologique transforme sur place : gingembre séché, fruits confits, riz décortiqué, tissus et paniers finis.",
          "Le produit transformé se vend plus cher, et la valeur reste au village : emplois d'atelier, séchoirs, machines. Le panneau solaire fait tourner tout cela sans couper un arbre.",
        ],
        exemples: [
          "Le séchoir à gingembre travaille au soleil, gratuitement et proprement.",
          "L'atelier de raphia coupe la feuille sans tuer la plante : elle repousse chaque année.",
        ],
      },
      {
        titre: "3. La nature qui rapporte",
        paras: [
          "Le sommet du village écologique, c'est l'écotourisme : des visiteurs viennent pour la source claire, la forêt pleine d'oiseaux, l'étang, le valiha et la table du village.",
          "Ils paient le gîte et le couvert, emploient guides et cuisinières, achètent paniers et gingembre. La nature protégée devient une richesse : voilà la leçon du village écologique — protéger, c'est gagner.",
        ],
        exemples: [
          "Le parcours de la porte ouverte guide les visiteurs de la rizière au séchoir.",
          "Les recettes de l'écotourisme paient l'entretien de la clôture de la source.",
        ],
      },
    ],
  },
  motsCles: ["activité économique", "agriculture propre", "pisciculture", "transformation", "écotourisme"],
  questionsRevision: [
    ["Cite trois activités économiques du village écologique.", "Agriculture propre, pisciculture, artisanat de raphia (aussi transformation, solaire, écotourisme)."],
    ["Quelle est la règle commune à toutes ces activités ?", "Produire aujourd'hui sans épuiser les ressources de demain."],
  ],
};

module.exports = { topics: [S67, S68, S69, S70, S71] };
