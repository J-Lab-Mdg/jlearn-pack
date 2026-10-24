// data-unite2b.js — UNITÉ 2 (suite) : L'UTILISATION DES RESSOURCES NATURELLES (Séances 18 à 24)
// Contenu rédactionnel conforme au Programme d'études officiel T6 — Géographie (p. 170-172)
const TOTAL = 78;

const S18 = {
  numero: 18, total: TOTAL,
  titre: "La gestion des ressources naturelles",
  theme: "L'utilisation des ressources naturelles",
  objectif: "Être capable d'expliquer ce qu'est la gestion des ressources naturelles et de citer des gestes de bonne gestion.",
  image: { id: "geo6_gestion", legende: "Gérer sans détruire : protéger, réglementer, remplacer." },
  scene: { file: "scene_s18_gestion.jpg", mode: "document", legende: "Document : le conseil du village de grand-père Maitso discute des règles de la forêt sous l'arbre à palabres." },
  revisionOuverture: [
    ["Cite les quatre grandes utilisations des ressources naturelles.", "Se nourrir, se soigner, construire et vendre."],
    ["Donne un exemple de construction avec une ressource naturelle.", "La maison en briques d'argile (ou en bois de forêt)."],
  ],
  miseEnSituation: {
    texte: "Au village de grand-père Maitso, le conseil se réunit sous le grand arbre. À l'ordre du jour : la forêt de la colline. « Chaque famille prend son bois là-haut, dit le doyen. Mais l'an dernier, nous avons coupé plus d'arbres que la forêt n'en a fait pousser. » Les anciens discutent, puis prennent trois décisions : personne ne coupera sur la pente de la source ; chaque famille qui coupe un arbre en replante un ; et le ravin du côté est sera mis en défense pendant trois ans. « Voilà, conclut le doyen : nous avons géré notre forêt. »",
    question: "Que veut dire « gérer » les ressources naturelles ?",
    ra: "Gérer, c'est décider ensemble comment utiliser les ressources sans les épuiser : protéger, réglementer, remplacer.",
    support: "Schéma de la gestion des ressources (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « La gestion des ressources naturelles ». Après cette séance, vous serez capables d'expliquer ce qu'est la gestion et de citer des gestes de bonne gestion.",
  observation: "Observez bien le schéma des trois clés de la gestion, et le document du conseil du village sous le grand arbre.",
  supportObservation: "Schéma de la gestion (page Leçon)",
  analyse: [
    ["Pourquoi le conseil du village s'est-il réuni ?", "Parce que la forêt a été plus coupée qu'elle n'a poussé : il fallait décider ensemble."],
    ["Quelles décisions le conseil a-t-il prises ?", "Protéger la pente de la source, replanter chaque arbre coupé, mettre le ravin en défense."],
    ["Que veut dire « gérer » une ressource ?", "C'est décider ensemble comment l'utiliser sans l'épuiser."],
    ["Qu'est-ce qu'une règle comme le dina ?", "C'est une règle du village que tout le monde s'engage à respecter."],
    ["Pourquoi replanter chaque arbre coupé ?", "Pour que la forêt continue de donner du bois aux enfants de demain."],
    ["Que se passe-t-il si personne ne gère la forêt ?", "Chacun coupe ce qu'il veut : la forêt disparaît, et avec elle l'eau, le bois et les animaux."],
  ],
  synthese: "Donc, gérer les ressources naturelles, c'est décider ensemble comment les utiliser sans les épuiser : protéger les endroits fragiles, réglementer par des règles comme le dina, et replanter ce que l'on prend.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Que veut dire « gérer » les ressources naturelles ?",
        "2. Cite les trois clés d'une bonne gestion.",
        "3. Qu'est-ce que le dina ?",
        "4. Pourquoi mettre un ravin « en défense » pendant trois ans ?",
      ],
      corrige: [
        "1. C'est **décider ensemble comment utiliser** les ressources **sans les épuiser**.",
        "2. **Protéger, réglementer, remplacer**.",
        "3. C'est **une règle du village** que tous s'engagent à respecter.",
        "4. Pour laisser le sol et les jeunes arbres **se reposer et repousser**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Gérer, c'est empêcher tout le monde d'utiliser les ressources.",
        "2. Un arbre coupé devrait être replanté.",
        "3. Le dina est une règle de village.",
        "4. Sans gestion, la forêt disparaît peu à peu.",
      ],
      corrige: [
        "1. **Faux** : gérer, c'est utiliser avec sagesse, pas interdire tout.",
        "2. **Vrai** : c'est la règle du « un coupé, un planté ».",
        "3. **Vrai** : une règle que les anciens font respecter.",
        "4. **Vrai** : chacun couperait sans limite.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : gérer — protéger — replanter — dina.",
      items: [
        "……… les ressources, c'est décider ensemble de leur usage.",
        "Il faut ……… les pentes des sources et les jeunes forêts.",
        "Un arbre coupé, un arbre ……… .",
        "La règle du village s'appelle le ……… .",
      ],
      corrige: [
        "**Gérer** / **protéger** / **replanter** / le **dina**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le conseil du village s'est réuni pour parler : A. de la forêt — B. du ballon — C. de la pluie d'hier",
        "2. « Mettre en défense », c'est : A. interdire d'y toucher un temps — B. mettre le feu — C. vendre",
        "3. Une bonne gestion laisse aux enfants de demain : A. les mêmes richesses — B. rien — C. seulement des cailloux",
        "4. Le doyen du village est : A. le plus ancien qui conseille — B. le plus jeune élève — C. un touriste",
        "5. Gérer ensemble est mieux que gérer seul, parce que : A. la ressource est à tous — B. c'est plus lent — C. c'est interdit",
      ],
      corrige: [
        "1. Réponse **A** : de la forêt de la colline.",
        "2. Réponse **A** : interdire d'y toucher pendant un certain temps.",
        "3. Réponse **A** : les mêmes richesses qu'aujourd'hui.",
        "4. Réponse **A** : le plus ancien, qui conseille le village.",
        "5. Réponse **A** : la ressource appartient à toute la communauté.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Pourquoi gérer ?",
        paras: [
          "Les ressources naturelles appartiennent à tous les habitants, d'aujourd'hui et de demain. Si chacun prend sans règle, la ressource disparaît.",
          "Gérer, c'est donc décider ensemble comment utiliser chaque ressource : combien prendre, où prendre, quand s'arrêter.",
        ],
        exemples: [
          "Le village de grand-père Maitso a coupé plus d'arbres que la forêt n'en a poussé : il a fallu décider des règles.",
          "Une pirogue qui prend trop de poissons vide la mer pour tous les autres pêcheurs.",
        ],
      },
      {
        titre: "2. Protéger, réglementer, remplacer",
        paras: [
          "Protéger : on garde les endroits fragiles, comme les pentes des sources et les forêts qui restent ; on crée des réserves.",
          "Réglementer : on fixe des règles, comme le dina du village, et on les fait respecter. Remplacer : on replante les arbres coupés, on laisse le sol se reposer.",
        ],
        exemples: [
          "Le ravin du village est resté trois ans sans être touché : les jeunes arbres ont repris.",
          "Dans les parcs nationaux, il est interdit de couper et de chasser : la forêt y est protégée.",
        ],
      },
      {
        titre: "3. L'importance de gérer ensemble",
        paras: [
          "Une bonne gestion demande la parole de tous : le conseil des anciens, les familles, les jeunes, même l'école.",
          "Bien gérées, les ressources nourrissent les enfants de demain aussi bien que ceux d'aujourd'hui : c'est cela, le développement durable.",
        ],
        exemples: [
          "Au conseil du village, même les femmes et les jeunes ont donné leur avis sur la forêt.",
          "La classe de Mme Randriamampionona surveille les jeunes arbres plantés autour de l'école.",
        ],
      },
    ],
  },
  motsCles: ["gestion", "protéger", "réglementer", "replanter", "dina", "mise en défense"],
  questionsRevision: [
    ["Que veut dire gérer les ressources naturelles ?", "Décider ensemble comment les utiliser sans les épuiser."],
    ["Cite les trois clés d'une bonne gestion.", "Protéger, réglementer, remplacer."],
  ],
};

const S19 = {
  numero: 19, total: TOTAL,
  titre: "Le déséquilibre entre population et ressources",
  theme: "L'utilisation des ressources naturelles",
  objectif: "Être capable d'expliquer le déséquilibre entre la croissance de la population et les ressources naturelles.",
  image: { id: "geo6_equilibre", legende: "La grande balance : la population augmente vite, les ressources ne suivent pas." },
  scene: { file: "scene_s19_equilibre.jpg", mode: "document", legende: "Document : à la fontaine du quartier, la file d'attente s'allonge chaque année : les familles sont plus nombreuses." },
  revisionOuverture: [
    ["Que veut dire gérer les ressources naturelles ?", "Décider ensemble comment les utiliser sans les épuiser."],
    ["Cite les trois clés d'une bonne gestion.", "Protéger, réglementer, remplacer."],
  ],
  miseEnSituation: {
    texte: "À la fontaine du quartier, le matin, la file s'allonge. Miora compte : douze femmes devant elle, hier il y en avait dix. « Quand j'étais petite, raconte une grand-mère, nous étions trois familles dans cette rue. Aujourd'hui, il y en a quinze, et toujours une seule fontaine ! » Le soir, à la maison, Hery réfléchit : plus de familles, c'est plus de riz à manger, plus de bois pour cuire, plus de maisons à construire. Mais la terre, elle, n'a pas grandi.",
    question: "Pourquoi la croissance de la population pose-t-elle un problème aux ressources naturelles ?",
    ra: "Parce que la population augmente vite, alors que la terre, l'eau et la forêt ne peuvent pas augmenter aussi vite : c'est le déséquilibre.",
    support: "Schéma de la balance population-ressources (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Le déséquilibre entre population et ressources ». Après cette séance, vous serez capables d'expliquer ce déséquilibre et ses conséquences.",
  observation: "Observez bien le schéma de la grande balance, et le document de la file à la fontaine.",
  supportObservation: "Schéma de la balance (page Leçon)",
  analyse: [
    ["Que remarque Miora à la fontaine ?", "La file d'attente s'allonge : les familles du quartier sont de plus en plus nombreuses."],
    ["Que veut dire « la croissance de la population » ?", "C'est l'augmentation du nombre des habitants."],
    ["Pourquoi plus de familles veut-il dire plus de pression sur les ressources ?", "Parce qu'il faut plus de riz, plus d'eau, plus de bois, plus de maisons."],
    ["La terre peut-elle agrandir les rizières aussi vite ?", "Non : la terre, l'eau et la forêt ne peuvent pas pousser aussi vite que la population."],
    ["Qu'est-ce que le déséquilibre ?", "C'est quand la population grandit plus vite que les ressources disponibles."],
    ["Que se passe-t-il quand le déséquilibre s'aggrave ?", "Les ressources deviennent insuffisantes : la vie devient plus difficile, la terre s'épuise."],
  ],
  synthese: "Donc, la population de Madagascar augmente vite, mais la terre, l'eau et la forêt ne peuvent pas augmenter aussi vite : c'est le déséquilibre. Plus nous sommes nombreux, plus nous devons utiliser les ressources avec soin.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Que veut dire « la croissance de la population » ?",
        "2. Pourquoi la file de la fontaine s'allonge-t-elle ?",
        "3. Qu'est-ce que le déséquilibre entre population et ressources ?",
        "4. Que doit-on faire face à ce déséquilibre ?",
      ],
      corrige: [
        "1. C'est **l'augmentation du nombre des habitants**.",
        "2. Parce que **les familles sont plus nombreuses** dans le quartier.",
        "3. C'est quand **la population grandit plus vite que les ressources**.",
        "4. **Utiliser les ressources avec encore plus de soin** et les gérer ensemble.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. La terre peut agrandir les rizières aussi vite que la population grandit.",
        "2. Plus de familles veut dire plus d'eau à puiser.",
        "3. Le déséquilibre rend la vie plus difficile.",
        "4. La population de Madagascar augmente lentement.",
      ],
      corrige: [
        "1. **Faux** : la terre ne peut pas suivre cette vitesse.",
        "2. **Vrai** : plus de bouches, plus de maisons, plus d'eau.",
        "3. **Vrai** : les ressources deviennent insuffisantes.",
        "4. **Faux** : elle augmente vite.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : population — ressources — déséquilibre — soin.",
      items: [
        "La ……… de Madagascar augmente vite.",
        "La terre et l'eau sont nos ……… naturelles.",
        "Quand les hommes deviennent trop nombreux pour les ressources, c'est le ……… .",
        "Face au déséquilibre, il faut utiliser les ressources avec plus de ……… .",
      ],
      corrige: [
        "La **population** / les **ressources** / le **déséquilibre** / avec plus de **soin**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. La file de la fontaine s'allonge parce que : A. la fontaine fuit — B. les familles sont plus nombreuses — C. l'eau est plus savoureuse",
        "2. Les ressources qui ne peuvent pas suivre sont : A. la terre et l'eau — B. les voitures — C. les rues",
        "3. Le déséquilibre commence quand : A. la population dépasse les ressources — B. il pleut trop — C. l'école ferme",
        "4. Plus de familles demandent : A. moins de riz — B. plus de riz, d'eau et de bois — C. la même chose",
        "5. Face au déséquilibre, la sagesse est de : A. gaspiller — B. utiliser avec soin — C. tout interdire",
      ],
      corrige: [
        "1. Réponse **B** : les familles sont plus nombreuses.",
        "2. Réponse **A** : la terre, l'eau, la forêt, la mer.",
        "3. Réponse **A** : la population grandit plus vite que les ressources.",
        "4. Réponse **B** : plus de riz, d'eau et de bois.",
        "5. Réponse **B** : utiliser avec soin.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Une population qui grandit vite",
        paras: [
          "La population de Madagascar augmente vite : les familles sont nombreuses et il naît beaucoup d'enfants.",
          "Dans les villes comme dans les campagnes, les quartiers et les villages s'agrandissent chaque année.",
        ],
        exemples: [
          "Dans la rue de Miora, on compte quinze familles là où il y en avait trois.",
          "La file de la fontaine s'allonge d'année en année.",
        ],
      },
      {
        titre: "2. Des ressources qui ne peuvent pas suivre",
        paras: [
          "Plus d'habitants, cela veut dire plus de riz à manger, plus d'eau à puiser, plus de bois pour cuire et construire.",
          "Mais la terre ne s'agrandit pas, les rivières ne grossissent pas à volonté, et la forêt ne repousse que lentement : les ressources ne peuvent pas suivre la croissance de la population.",
        ],
        exemples: [
          "La même fontaine doit maintenant désaltérer cinq fois plus de familles.",
          "Les collines autrefois boisées sont coupées plus vite qu'elles ne repoussent.",
        ],
      },
      {
        titre: "3. Le déséquilibre et ses leçons",
        paras: [
          "Quand la population grandit plus vite que les ressources, il y a déséquilibre : les ressources deviennent insuffisantes pour tous.",
          "Ce déséquilibre nous apprend deux choses : prendre soin de chaque ressource, et réfléchir ensemble à la taille de nos familles pour que chacun puisse bien vivre.",
        ],
        exemples: [
          "La grand-mère de la fontaine se souvient du temps où l'eau manquait moins.",
          "La croissance de la population doit être mise en relation avec la capacité des terres et des services à satisfaire les besoins.",
        ],
      },
    ],
  },
  motsCles: ["croissance de la population", "déséquilibre", "pression", "insuffisance", "soin"],
  questionsRevision: [
    ["Qu'est-ce que le déséquilibre entre population et ressources ?", "C'est quand la population grandit plus vite que les ressources ne peuvent se renouveler."],
    ["Cite deux conséquences de ce déséquilibre.", "Les ressources deviennent insuffisantes et la vie devient plus difficile."],
  ],
};

const S20 = {
  numero: 20, total: TOTAL,
  titre: "Les ressources mal exploitées et les espèces disparues",
  theme: "L'utilisation des ressources naturelles",
  objectif: "Être capable de citer les problèmes causés par la mauvaise utilisation des ressources et de nommer des espèces disparues.",
  image: { id: "geo6_problemes_ressources", legende: "La forêt brûlée, la mer vidée, les espèces disparues : le coût de la mauvaise exploitation." },
  scene: { file: "scene_s20_problemes.jpg", mode: "document", legende: "Document : une colline dénudée par le tavy : la terre rouge emportée par la pluie descend vers la rivière." },
  revisionOuverture: [
    ["Qu'est-ce que le déséquilibre entre population et ressources ?", "C'est quand la population grandit plus vite que les ressources ne peuvent se renouveler."],
    ["Cite deux conséquences de ce déséquilibre.", "Les ressources deviennent insuffisantes et la vie devient plus difficile."],
  ],
  miseEnSituation: {
    texte: "Sur la route des vacances, le taxi-brousse longe une colline toute rousse, sans un arbre. « Avant, c'était une forêt, dit papa tristement. On l'a brûlée pour planter, puis la pluie a emporté la terre. Maintenant, plus rien ne pousse. » Le guide d'un parc, rencontré plus loin, raconte une autre histoire : « Il y a longtemps, vivait ici l'oiseau-éléphant, le plus grand oiseau du monde. Il a disparu. Et aujourd'hui, d'autres animaux sont en danger, parce que leur forêt brûle ou qu'on les chasse trop. »",
    question: "Que se passe-t-il quand les ressources sont mal exploitées ?",
    ra: "La forêt brûlée ne repousse pas, la terre s'en va avec la pluie, la mer vidée se vide encore, et des animaux disparaissent pour toujours.",
    support: "Schéma des ressources mal exploitées (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les ressources mal exploitées et les espèces disparues ». Après cette séance, vous serez capables de citer les problèmes de la mauvaise exploitation et des espèces disparues.",
  observation: "Observez bien le schéma de la forêt brûlée et de la mer vidée, et le document de la colline dénudée par le tavy.",
  supportObservation: "Schéma des problèmes d'exploitation (page Leçon)",
  analyse: [
    ["Qu'arrive-t-il à la colline le long de la route ?", "Elle a été défrichée par le tavy ; sans arbres, la pluie a emporté la terre."],
    ["Qu'est-ce que le tavy ?", "C'est la culture sur brûlis : on brûle la forêt pour planter."],
    ["Pourquoi plus rien ne pousse sur la colline ?", "Parce que la terre fertile a été emportée par l'érosion : il ne reste que des cailloux."],
    ["Qu'est-ce que la surpêche ?", "C'est pêcher plus que la mer ne peut remplacer : les poissons deviennent rares."],
    ["Cite un animal disparu de Madagascar.", "L'oiseau-éléphant, le plus grand oiseau du monde (aussi le lémurien géant)."],
    ["Pourquoi des espèces disparaissent-elles aujourd'hui ?", "Parce que leur forêt brûle ou est coupée, et qu'on les chasse trop."],
  ],
  synthese: "Donc, la mauvaise exploitation détruit : le tavy brûle la forêt, l'érosion emporte la terre, la surpêche vide la mer. Et des espèces disparaissent pour toujours, comme l'oiseau-éléphant. Ces pertes sont irréparables.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que le tavy ?",
        "2. Qu'est-ce que l'érosion fait sur une colline dénudée ?",
        "3. Qu'est-ce que la surpêche ?",
        "4. Cite un animal disparu de Madagascar.",
      ],
      corrige: [
        "1. C'est **la culture sur brûlis** : on brûle la forêt pour planter.",
        "2. Elle **emporte la terre fertile** avec la pluie.",
        "3. C'est **pêcher plus** que la mer ne peut remplacer.",
        "4. **L'oiseau-éléphant**, le plus grand oiseau du monde.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Une forêt brûlée par le tavy repousse en un an.",
        "2. La surpêche rend les poissons rares.",
        "3. L'oiseau-éléphant existe encore à Madagascar.",
        "4. Une espèce disparue ne revient jamais.",
      ],
      corrige: [
        "1. **Faux** : la forêt met des dizaines d'années à repousser, si elle repousse.",
        "2. **Vrai** : la mer n'arrive plus à se renouveler.",
        "3. **Faux** : il a disparu pour toujours.",
        "4. **Vrai** : la disparition est irréparable.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : tavy — érosion — surpêche — disparue.",
      items: [
        "Brûler la forêt pour planter s'appelle le ……… .",
        "Sur une colline sans arbres, la pluie emporte la terre : c'est l'……… .",
        "Prendre trop de poissons s'appelle la ……… .",
        "Une espèce éteinte est une espèce ……… pour toujours.",
      ],
      corrige: [
        "le **tavy** / l'**érosion** / la **surpêche** / une espèce **disparue**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. La colline rousse de la route a perdu : A. sa forêt et sa terre — B. ses voitures — C. son nom",
        "2. L'oiseau-éléphant était : A. le plus grand oiseau du monde — B. un petit moineau — C. un poisson",
        "3. La terre emportée par la pluie va : A. nourrir la mer — B. ensabler et polluer les rivières — C. faire des nuages",
        "4. Des espèces disparaissent surtout parce que : A. leur forêt disparaît — B. elles dorment trop — C. elles changent de couleur",
        "5. Mal exploiter les ressources, c'est : A. les détruire — B. les protéger — C. les compter",
      ],
      corrige: [
        "1. Réponse **A** : sa forêt brûlée et sa terre érodée.",
        "2. Réponse **A** : le plus grand oiseau du monde, disparu.",
        "3. Réponse **B** : les rivières se remplissent de terre rouge.",
        "4. Réponse **A** : sans forêt, pas de maison ni de nourriture.",
        "5. Réponse **A** : les détruire pour toujours.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La forêt brûlée et la terre emportée",
        paras: [
          "Le tavy, la culture sur brûlis, détruit la forêt : après quelques récoltes, la terre s'épuise et les paysans doivent repartir plus loin.",
          "Sur les collines dénudées, la pluie emporte la terre fertile : c'est l'érosion. Il ne reste qu'une terre rouge et dure où plus rien ne pousse bien.",
        ],
        exemples: [
          "La colline rousse le long de la route était une forêt il y a vingt ans.",
          "Les rivières rougissent après les grandes pluies : elles portent la terre des collines dénudées.",
        ],
      },
      {
        titre: "2. La mer vidée et les ressources gaspillées",
        paras: [
          "La surpêche prend les petits poissons et les poissons porteurs d'œufs : la mer n'arrive plus à se renouveler.",
          "Les forêts coupées sans replanter, les minerais extraits en détruisant les rivières : autant de ressources mal exploitées, perdues pour demain.",
        ],
        exemples: [
          "Certains villages de pêcheurs doivent aller de plus en plus loin pour trouver du poisson.",
          "Les mines mal tenues laissent des rivières boueuses et des collines trouées.",
        ],
      },
      {
        titre: "3. Des espèces disparues pour toujours",
        paras: [
          "Madagascar a déjà perdu des espèces uniques : l'oiseau-éléphant, le plus grand oiseau du monde, et les lémuriens géants ont disparu.",
          "Aujourd'hui, d'autres sont en danger : le plus grand lémurien vivant, l'indri, et beaucoup d'animaux et de plantes endémiques. Une espèce disparue ne revient jamais.",
        ],
        exemples: [
          "La raréfaction de certaines espèces montre l'effet de la destruction de leurs habitats.",
          "Les naturalistes étudient les os de l'oiseau-éléphant : personne ne pourra jamais le revoir vivant.",
        ],
      },
    ],
  },
  motsCles: ["tavy", "brûlis", "érosion", "surpêche", "espèce disparue", "oiseau-éléphant"],
  questionsRevision: [
    ["Cite deux problèmes causés par la mauvaise exploitation des ressources.", "Le tavy qui détruit la forêt et l'érosion qui emporte la terre (aussi la surpêche)."],
    ["Cite un animal disparu de Madagascar.", "L'oiseau-éléphant, le plus grand oiseau du monde."],
  ],
};

const S21 = {
  numero: 21, total: TOTAL,
  titre: "Les ressources et le changement climatique",
  theme: "L'utilisation des ressources naturelles",
  objectif: "Être capable d'expliquer comment l'utilisation des ressources contribue au changement climatique et de citer ses manifestations.",
  image: { id: "geo6_climat_ressources", legende: "Le changement climatique : la Terre se réchauffe, le climat se dérègle." },
  scene: { file: "scene_s21_climat.jpg", mode: "document", legende: "Document : dans le Grand Sud, le champ de manioc grillé par le soleil : la sécheresse dure depuis des mois." },
  revisionOuverture: [
    ["Cite deux problèmes causés par la mauvaise exploitation des ressources.", "Le tavy qui détruit la forêt et l'érosion qui emporte la terre (aussi la surpêche)."],
    ["Cite un animal disparu de Madagascar.", "L'oiseau-éléphant, le plus grand oiseau du monde."],
  ],
  miseEnSituation: {
    texte: "Tantely, le cousin de Toliara, téléphone à la classe : « Ici, il n'a presque pas plu depuis des mois. Le manioc grille sur pied, et les zébus maigrissent. » Mme Randriamampionona hoche la tête : « C'est le changement climatique. La Terre se réchauffe, et le climat se dérègle : les saisons ne viennent plus comme avant. » Elle ajoute : « Et saviez-vous que la façon d'utiliser nos ressources y contribue ? Chaque forêt brûlée, chaque bidon de pétrole brûlé, épaissit le manteau de gaz qui chauffe la Terre. »",
    question: "Comment l'utilisation des ressources contribue-t-elle au changement climatique ?",
    ra: "Brûler les forêts, le pétrole, le gaz et le charbon rejette des gaz qui gardent la chaleur : la Terre se réchauffe et le climat se dérègle.",
    support: "Schéma du changement climatique (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les ressources et le changement climatique ». Après cette séance, vous serez capables d'expliquer cette contribution et de citer des manifestations du changement climatique.",
  observation: "Observez bien le schéma de la Terre qui se réchauffe, et le document du champ grillé par la sécheresse.",
  supportObservation: "Schéma du changement climatique (page Leçon)",
  analyse: [
    ["Qu'annonce Tantely au téléphone ?", "Une grande sécheresse : pas de pluie depuis des mois, le manioc grille, les zébus maigrissent."],
    ["Qu'est-ce que le changement climatique ?", "C'est le dérèglement du climat de la Terre, qui se réchauffe."],
    ["Comment l'utilisation des ressources chauffe-t-elle la Terre ?", "Brûler forêts, pétrole, gaz et charbon rejette des gaz qui forment un manteau gardant la chaleur."],
    ["Cite une manifestation du changement climatique à Madagascar.", "Les sécheresses longues du Grand Sud (aussi : saisons déréglées, cyclones plus violents)."],
    ["Pourquoi les paysans du Sud sont-ils les premiers à souffrir ?", "Parce que leurs récoltes dépendent de la pluie : sans pluie, plus de récolte."],
    ["Que peut-on faire pour ne pas aggraver le réchauffement ?", "Protéger les forêts, utiliser moins de pétrole et de charbon, choisir le soleil et l'eau qui font l'énergie propre."],
  ],
  synthese: "Donc, brûler les forêts et les énergies fossiles épaissit le manteau de gaz qui garde la chaleur : la Terre se réchauffe. À Madagascar, le climat se dérègle : sécheresses longues, saisons déréglées, cyclones plus violents. Protéger les ressources, c'est aussi protéger le climat.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que le changement climatique ?",
        "2. Comment nos façons d'utiliser les ressources y contribuent-elles ?",
        "3. Cite deux manifestations du changement climatique à Madagascar.",
        "4. Cite un geste qui n'aggrave pas le réchauffement.",
      ],
      corrige: [
        "1. C'est **le dérèglement du climat** de la Terre, **qui se réchauffe**.",
        "2. **Brûler les forêts et les énergies fossiles** rejette des gaz qui gardent la chaleur.",
        "3. Par exemple : **les sécheresses longues** du Grand Sud et **les cyclones plus violents**.",
        "4. Par exemple : **protéger la forêt** (ou utiliser l'énergie du soleil).",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Brûler du charbon ne change rien au climat.",
        "2. La Terre se réchauffe à cause des gaz rejetés.",
        "3. Le Grand Sud souffre de sécheresses de plus en plus longues.",
        "4. Protéger les forêts aide à protéger le climat.",
      ],
      corrige: [
        "1. **Faux** : le charbon brûlé rejette des gaz qui chauffent la Terre.",
        "2. **Vrai** : les gaz forment un manteau qui garde la chaleur.",
        "3. **Vrai** : les récoltes grillent et les zébus maigrissent.",
        "4. **Vrai** : les forêts stockent les gaz et donnent la pluie.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : réchauffe — gaz — sécheresse — forêts.",
      items: [
        "Le changement climatique ……… la Terre.",
        "Brûler forêts et pétrole rejette des ……… .",
        "Dans le Grand Sud, la ……… dure des mois.",
        "Protéger les ……… aide à protéger le climat.",
      ],
      corrige: [
        "**réchauffe** / des **gaz** / la **sécheresse** / les **forêts**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le manteau qui garde la chaleur est fait : A. de gaz — B. de nuages en plume — C. de sable",
        "2. Le champ de Tantely souffre de : A. sécheresse — B. trop de pluie — C. neige",
        "3. Le changement climatique rend les cyclones : A. plus violents — B. plus doux — C. inexistants",
        "4. Les énergies qui chauffent le plus la Terre sont : A. le soleil et le vent — B. le pétrole et le charbon — C. l'eau des rivières",
        "5. Pour protéger le climat, on protège d'abord : A. les forêts — B. les routes — C. les antennes",
      ],
      corrige: [
        "1. Réponse **A** : des gaz rejetés par les brûlis et les moteurs.",
        "2. Réponse **A** : la sécheresse dure depuis des mois.",
        "3. Réponse **A** : plus violents et plus fréquents.",
        "4. Réponse **B** : le pétrole et le charbon, énergies fossiles.",
        "5. Réponse **A** : les forêts stockent les gaz et donnent la pluie.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Un manteau de gaz qui chauffe la Terre",
        paras: [
          "Quand nous brûlons la forêt, le pétrole, le gaz ou le charbon, nous rejetons des gaz dans l'air.",
          "Ces gaz forment un manteau de plus en plus épais autour de la Terre : il garde la chaleur du soleil. La planète se réchauffe : c'est le changement climatique.",
        ],
        exemples: [
          "Les grands brûlis envoient des colonnes de fumée pendant des semaines.",
          "Les pots d'échappement des voitures et des camions rejettent les mêmes gaz.",
        ],
      },
      {
        titre: "2. Les manifestations à Madagascar",
        paras: [
          "Le climat de Madagascar se dérègle : les saisons ne viennent plus comme avant, la pluie arrive mal.",
          "Le Grand Sud subit des sécheresses de plus en plus longues ; les cyclones de la saison chaude semblent plus violents ; sur les côtes, la mer monte peu à peu.",
        ],
        exemples: [
          "Tantely décrit le manioc grillé sur pied et les zébus maigres.",
          "Les vieux pêcheurs disent que la mer monte sur leurs plages d'enfance.",
        ],
      },
      {
        titre: "3. Nos ressources, notre climat",
        paras: [
          "Les ressources et le climat sont liés : les forêts stockent les gaz et donnent la pluie ; les énergies fossiles chauffent l'air.",
          "Protéger les forêts, brûler moins de pétrole et de charbon, choisir le soleil : voilà comment l'utilisation des ressources peut protéger le climat du monde.",
        ],
        exemples: [
          "Les parcs nationaux gardent des forêts qui font de la pluie pour les champs voisins.",
          "Les lampes solaires du village remplacent les lampes à pétrole : moins de gaz rejetés.",
        ],
      },
    ],
  },
  motsCles: ["changement climatique", "gaz", "réchauffement", "sécheresse", "cyclone"],
  questionsRevision: [
    ["Comment l'utilisation des ressources contribue-t-elle au changement climatique ?", "Brûler les forêts et les énergies fossiles rejette des gaz qui font monter la température."],
    ["Cite deux manifestations du changement climatique à Madagascar.", "Les sécheresses longues du Grand Sud et les cyclones plus violents."],
  ],
};

const S22 = {
  numero: 22, total: TOTAL,
  titre: "Les solutions (1) : exploitation rationnelle et reboisement",
  theme: "L'utilisation des ressources naturelles",
  objectif: "Être capable de citer les solutions techniques : exploitation rationnelle, reboisement et cultures adaptées.",
  image: { id: "geo6_solutions1", legende: "Les solutions (1) : exploiter rationnellement, replanter, cultiver autrement." },
  scene: { file: "scene_s22_solutions1.jpg", mode: "document", legende: "Document : jour de reboisement : les élèves de Mme Randriamampionona plantent des jeunes pins sur la colline de l'école." },
  revisionOuverture: [
    ["Comment l'utilisation des ressources contribue-t-elle au changement climatique ?", "Brûler les forêts et les énergies fossiles rejette des gaz qui font monter la température."],
    ["Cite deux manifestations du changement climatique à Madagascar.", "Les sécheresses longues du Grand Sud et les cyclones plus violents."],
  ],
  miseEnSituation: {
    texte: "Samedi matin, toute l'école monte à la colline. Chaque élève porte deux jeunes plants de pin. « Aujourd'hui, on répare, annonce Mme Randriamampionona. Un arbre coupé, un arbre replanté : notre règle à nous. » En haut, le garde forestier montre comment creuser le trou et tasser la terre. « Ces pins retiendront la terre de la colline, dit-il, et dans dix ans, ils donneront du bois. » À côté, un paysan explique qu'il a remplacé le maïs fragile par du manioc résistant et des arbres fruitiers : « Avec le climat qui change, il faut planter des plantes qui ne craignent pas la sécheresse. »",
    question: "Quelles solutions permettent d'utiliser les ressources sans les détruire ?",
    ra: "Exploiter rationnellement (prendre seulement le nécessaire), reboiser (replanter les arbres coupés) et choisir des cultures adaptées au climat.",
    support: "Schéma des solutions (1) (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les solutions (1) : exploitation rationnelle et reboisement ». Après cette séance, vous serez capables de citer ces solutions et de les expliquer.",
  observation: "Observez bien le schéma des trois solutions, et le document du jour de reboisement de l'école.",
  supportObservation: "Schéma des solutions (1) (page Leçon)",
  analyse: [
    ["Que font les élèves sur la colline ?", "Ils plantent de jeunes pins : c'est le reboisement."],
    ["Quelle est la règle du reboisement ?", "Un arbre coupé, un arbre replanté."],
    ["Que gagnera la colline dans dix ans ?", "Des arbres qui retiennent la terre et donnent du bois."],
    ["Que veut dire « exploiter rationnellement » ?", "Prendre seulement ce dont on a besoin, sans gaspiller ni détruire."],
    ["Pourquoi le paysan plante-t-il du manioc et des fruitiers ?", "Parce que ces plantes résistent à la sécheresse : elles sont adaptées au climat qui change."],
    ["Cite la solution que tu peux faire toi-même.", "Par exemple : replanter un arbre, ou ne pas gaspiller le bois de chauffe."],
  ],
  synthese: "Donc, trois solutions protègent nos ressources : exploiter rationnellement, en prenant seulement le nécessaire ; reboiser, en replantant chaque arbre coupé ; et choisir des cultures adaptées, qui résistent à la sécheresse.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Que veut dire « exploitation rationnelle » ?",
        "2. Quelle est la règle d'or du reboisement ?",
        "3. Pourquoi planter des cultures adaptées ?",
        "4. Que retiendront les racines des jeunes pins ?",
      ],
      corrige: [
        "1. C'est **prendre seulement ce dont on a besoin**, sans gaspiller ni détruire.",
        "2. **Un arbre coupé, un arbre replanté**.",
        "3. Pour qu'elles **résistent à la sécheresse** et au climat qui change.",
        "4. **La terre de la colline**, que la pluie n'emportera plus.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le reboisement consiste à couper tous les arbres.",
        "2. Exploiter rationnellement, c'est éviter le gaspillage.",
        "3. Le manioc résiste mieux à la sécheresse que le maïs fragile.",
        "4. Les arbres retiennent la terre des collines.",
      ],
      corrige: [
        "1. **Faux** : c'est replanter les arbres.",
        "2. **Vrai** : on prend ce dont on a besoin, rien de plus.",
        "3. **Vrai** : c'est une plante adaptée aux régions sèches.",
        "4. **Vrai** : leurs racines freinent l'érosion.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : rationnelle — reboisement — adaptées — terre.",
      items: [
        "Prendre seulement le nécessaire, c'est l'exploitation ……… .",
        "Replanter les arbres coupés s'appelle le ……… .",
        "Les plantes qui résistent à la sécheresse sont des cultures ……… .",
        "Les racines des arbres retiennent la ……… des collines.",
      ],
      corrige: [
        "**rationnelle** / le **reboisement** / **adaptées** / la **terre**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le jour du reboisement, chaque élève plante : A. deux jeunes arbres — B. un panier de riz — C. une antenne",
        "2. Dans dix ans, les pins donneront : A. du bois — B. du poisson — C. du pétrole",
        "3. Exploiter rationnellement la mer, c'est : A. tout pêcher — B. laisser grandir les petits — C. fermer la plage",
        "4. Le manioc est choisi parce qu'il : A. résiste à la sécheresse — B. pousse sous l'eau — C. fait de l'ombre",
        "5. Le reboisement protège aussi : A. la terre contre l'érosion — B. les voitures — C. les rochers",
      ],
      corrige: [
        "1. Réponse **A** : deux jeunes plants.",
        "2. Réponse **A** : du bois pour le village.",
        "3. Réponse **B** : laisser grandir les petits poissons.",
        "4. Réponse **A** : il supporte la sécheresse.",
        "5. Réponse **A** : les racines retiennent la terre.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Exploiter rationnellement",
        paras: [
          "Exploiter rationnellement, c'est prendre de la nature seulement ce dont on a besoin, sans gaspiller.",
          "C'est laisser grandir les petits poissons, ne couper que les arbres mûrs, ne pas gaspiller l'eau des rivières.",
        ],
        exemples: [
          "Le garde forestier ne marque que les arbres assez grands pour être coupés.",
          "Maman Rasoa cuit avec un foyer économe : moitié moins de bois pour le même riz.",
        ],
      },
      {
        titre: "2. Reboiser : replanter ce que l'on coupe",
        paras: [
          "Le reboisement consiste à replanter des arbres là où la forêt a été coupée ou brûlée.",
          "Les jeunes arbres retiennent la terre, font de l'ombre, attirent la pluie et, plus tard, donnent du bois : la forêt renaît.",
        ],
        exemples: [
          "La colline de l'école s'est couverte de jeunes pins après le jour du reboisement.",
          "Autour d'Antsirabe, les collines d'eucalyptus repoussent sans cesse, coupées et replantées.",
        ],
      },
      {
        titre: "3. Des cultures adaptées au climat",
        paras: [
          "Face au climat qui change, les paysans choisissent des cultures adaptées : le manioc, le sisal, le pois d'angole supportent la sécheresse.",
          "Les arbres fruitiers et les arbres d'ombrage protègent les champs et diversifient les récoltes : si une plante souffre, les autres nourrissent.",
        ],
        exemples: [
          "Le paysan de la colline a remplacé le maïs fragile par du manioc et des fruitiers.",
          "Dans le Grand Sud, les paysans replantent des plantes épineuses qui gardent l'eau.",
        ],
      },
    ],
  },
  motsCles: ["exploitation rationnelle", "reboisement", "cultures adaptées", "foyer économe"],
  questionsRevision: [
    ["Cite les trois solutions techniques pour protéger les ressources.", "Exploiter rationnellement, reboiser et choisir des cultures adaptées."],
    ["Quelle est la règle d'or du reboisement ?", "Un arbre coupé, un arbre replanté."],
  ],
};

const S23 = {
  numero: 23, total: TOTAL,
  titre: "Les solutions (2) : agir sur les hommes et les structures",
  theme: "L'utilisation des ressources naturelles",
  objectif: "Être capable d'expliquer les solutions humaines et sociales : familles moins chargées, infrastructures, pratiques modernes.",
  image: { id: "geo6_solutions2", legende: "Les solutions (2) : des familles, des infrastructures, des pratiques nouvelles." },
  scene: { file: "scene_s23_solutions2.jpg", mode: "document", legende: "Document : au village, la nouvelle école et le point d'eau construits près du dispensaire : le cœur battant de la communauté." },
  revisionOuverture: [
    ["Cite les trois solutions techniques pour protéger les ressources.", "Exploiter rationnellement, reboiser et choisir des cultures adaptées."],
    ["Quelle est la règle d'or du reboisement ?", "Un arbre coupé, un arbre replanté."],
  ],
  miseEnSituation: {
    texte: "Grande nouvelle au village de grand-père Maitso : une nouvelle école vient d'ouvrir, à côté du point d'eau et du dispensaire. « Une école, un point d'eau, un centre de santé : voilà des infrastructures solides, se réjouit le doyen. Avec cela, nos enfants apprendront mieux, nos familles seront en meilleure santé. » Il ajoute, pensif : « Et puis il y a les familles : celles qui ont deux ou trois enfants arrivent mieux à les nourrir et à les instruire que celles qui en ont huit. Chaque enfant doit pouvoir grandir dans de bonnes conditions. »",
    question: "Quelles solutions viennent des hommes et des structures, et pas seulement de la technique ?",
    ra: "Des familles qui grandissent lentement, des infrastructures solides (écoles, santé, eau, routes) et des pratiques modernes qui remplacent les pratiques destructrices.",
    support: "Schéma des solutions (2) (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les solutions (2) : agir sur les hommes et les structures ». Après cette séance, vous serez capables de citer ces trois solutions sociales.",
  observation: "Observez bien le schéma des trois appuis, et le document de l'école et du point d'eau du village.",
  supportObservation: "Schéma des solutions (2) (page Leçon)",
  analyse: [
    ["Quelles nouvelles infrastructures le village a-t-il reçues ?", "Une école, un point d'eau et un dispensaire."],
    ["Que gagnent les enfants du village avec l'école ?", "Ils apprendront à lire, écrire, compter : ils auront de meilleurs outils pour leur vie."],
    ["Pourquoi des familles moins nombreuses vivent-elles mieux ?", "Parce que les parents peuvent mieux nourrir, soigner et instruire chaque enfant."],
    ["Que veut dire « infrastructures sociales » ?", "Ce sont les équipements qui servent à tous : écoles, centres de santé, adductions d'eau, routes."],
    ["Cite une pratique moderne qui remplace une pratique destructrice.", "Le vrai champ qui remplace le tavy, ou le foyer économe qui remplace le feu de bois gaspilleur."],
    ["Que veut dire le mot « résilience » ?", "C'est la force de se relever après un coup dur : un village outillé se relève mieux."],
  ],
  synthese: "Donc, trois solutions viennent des hommes et des structures : des familles qui grandissent lentement, pour bien nourrir chaque enfant ; des infrastructures sociales solides ; et des pratiques modernes qui remplacent les pratiques destructrices. C'est cela, la résilience d'un village.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Cite trois infrastructures sociales.",
        "2. Pourquoi des familles moins nombreuses vivent-elles mieux ?",
        "3. Donne un exemple de pratique moderne qui remplace une pratique destructrice.",
        "4. Que veut dire « résilience » ?",
      ],
      corrige: [
        "1. Par exemple : **une école, un centre de santé, un point d'eau** (aussi les routes).",
        "2. Parce que les parents peuvent **mieux nourrir, soigner et instruire** chaque enfant.",
        "3. Par exemple : **le vrai champ qui remplace le tavy** (ou le foyer économe).",
        "4. C'est **la force de se relever** après un coup dur.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Les infrastructures sociales servent à tous les habitants.",
        "2. Une école rend le village plus fort.",
        "3. Des familles très nombreuses nourrissent toujours mieux leurs enfants.",
        "4. Le foyer économe économise le bois.",
      ],
      corrige: [
        "1. **Vrai** : écoles, santé, eau, routes sont à tous.",
        "2. **Vrai** : les enfants instruits trouvent mieux leur chemin.",
        "3. **Faux** : les parents ont plus de mal à nourrir et instruire chacun.",
        "4. **Vrai** : il cuit avec beaucoup moins de bois ou de charbon.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : familles — infrastructures — pratiques — résilience.",
      items: [
        "Les écoles et les dispensaires sont des ……… sociales.",
        "Des ……… moins nombreuses peuvent mieux élever chaque enfant.",
        "Les ……… modernes remplacent le tavy et les feux gaspilleurs.",
        "La force de se relever après un coup dur s'appelle la ……… .",
      ],
      corrige: [
        "des **infrastructures** / Des **familles** / Les **pratiques** modernes / la **résilience**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le village de grand-père a reçu : A. une école et un point d'eau — B. un aéroport — C. une usine de voitures",
        "2. Un point d'eau propre évite : A. les maladies — B. la pluie — C. les vacances",
        "3. Des parents avec peu d'enfants peuvent : A. mieux les instruire — B. moins les aimer — C. les oublier",
        "4. Remplacer le tavy, c'est passer à : A. de vrais champs durables — B. la pêche en montagne — C. la chasse aux lémuriens",
        "5. Un village résilient se relève : A. après un cyclone — B. jamais — C. seulement en ville",
      ],
      corrige: [
        "1. Réponse **A** : une école, un point d'eau, un dispensaire.",
        "2. Réponse **A** : l'eau sale transmet des maladies.",
        "3. Réponse **A** : mieux les nourrir et les instruire.",
        "4. Réponse **A** : des champs qui durent, sans brûler la forêt.",
        "5. Réponse **A** : plus vite, grâce à ses équipements et sa cohésion.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Des familles qui grandissent lentement",
        paras: [
          "Le programme officiel cite la limitation des naissances parmi les solutions : des familles moins chargées peuvent mieux nourrir, soigner et instruire chaque enfant.",
          "Espacer les naissances et laisser chaque enfant grandir dans de bonnes conditions, c'est bon pour la famille, et pour l'équilibre entre les hommes et les ressources.",
        ],
        exemples: [
          "Le doyen observe que les familles de deux ou trois enfants scolarisent plus facilement tous leurs enfants.",
          "Les centres de santé conseillent les parents pour espacer les naissances.",
        ],
      },
      {
        titre: "2. Des infrastructures qui rendent fort",
        paras: [
          "Les infrastructures sociales — écoles, centres de santé, adductions d'eau, routes — équipent la communauté pour affronter les coups durs.",
          "Un village avec une école, un point d'eau et un dispensaire se relève plus vite après un cyclone ou une sécheresse : on dit qu'il est résilient.",
        ],
        exemples: [
          "La nouvelle école du village de grand-père Maitso ouvre ses portes à côté du point d'eau.",
          "Après le passage d'un cyclone, les routes solides permettent d'acheminer le riz et les soins.",
        ],
      },
      {
        titre: "3. Des pratiques qui changent",
        paras: [
          "Les pratiques ancestrales destructrices, comme le tavy, laissent place à des pratiques modernes : de vrais champs durables, des foyers économes, le gaz ou le solaire pour cuire.",
          "Ces changements viennent des hommes : c'est en formant, en expliquant, en montrant l'exemple que tout le village avance.",
        ],
        exemples: [
          "Les jeunes du village apprennent la pisciculture et l'apiculture au lieu du brûlis.",
          "Grand-père Maitso cuit désormais ses repas au foyer amélioré construit par ses petits-fils.",
        ],
      },
    ],
  },
  motsCles: ["limitation des naissances", "infrastructures sociales", "résilience", "pratiques modernes"],
  questionsRevision: [
    ["Cite trois infrastructures sociales qui rendent un village résilient.", "Une école, un centre de santé et une adduction d'eau (aussi les routes)."],
    ["Pourquoi la limitation des naissances est-elle une solution ?", "Parce que des familles moins chargées peuvent mieux nourrir et instruire chaque enfant."],
  ],
};

const S24 = {
  numero: 24, total: TOTAL,
  titre: "Mini-projet : une activité économique qui respecte les ressources",
  theme: "L'utilisation des ressources naturelles",
  objectif: "Être capable de choisir une activité économique qui utilise rationnellement les ressources et de monter un mini-projet simple.",
  image: { id: "geo6_mini_projet", legende: "La démarche du mini-projet : observer, choisir, monter, présenter." },
  scene: { file: "scene_s24_mini_projet.jpg", mode: "document", legende: "Document : le groupe de Hery et Miora présente sa maquette d'étang piscicole devant la classe et les parents." },
  revisionOuverture: [
    ["Cite trois infrastructures sociales qui rendent un village résilient.", "Une école, un centre de santé et une adduction d'eau (aussi les routes)."],
    ["Pourquoi la limitation des naissances est-elle une solution ?", "Parce que des familles moins chargées peuvent mieux nourrir et instruire chaque enfant."],
  ],
  miseEnSituation: {
    texte: "Dernière séance de l'unité : Mme Randriamampionona annonce le grand défi. « Par groupes, vous allez monter un mini-projet : une activité économique qui utilise les ressources de notre région… sans les épuiser. » Dans la cour, les idées fusent : élever des poissons dans un étang, produire du miel avec des ruches, tisser du raphia, faire pousser des légumes en pépinière. Le groupe de Hery et Miora choisit la pisciculture : « L'eau de la rivière remplit l'étang, les poissons grandissent, et la rivière continue de couler ! »",
    question: "Comment monter un mini-projet qui respecte les ressources ?",
    ra: "On observe les ressources du milieu, on choisit une activité qui les utilise sans les épuiser, on la monte étape par étape, puis on la présente.",
    support: "Schéma de la démarche du mini-projet (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Mini-projet : une activité économique qui respecte les ressources ». Après cette séance, vous serez capables de choisir une activité et de monter un mini-projet simple.",
  observation: "Observez bien le schéma des quatre étapes du mini-projet, et le document de la présentation de la maquette d'étang piscicole.",
  supportObservation: "Schéma de la démarche du mini-projet (page Leçon)",
  analyse: [
    ["Qu'annonce la maîtresse comme grand défi ?", "Monter par groupes un mini-projet : une activité économique qui utilise les ressources sans les épuiser."],
    ["Cite trois activités proposées par les élèves.", "La pisciculture, l'apiculture (le miel) et le tissage du raphia (aussi la pépinière de légumes)."],
    ["Quelle est la première étape du mini-projet ?", "Observer les ressources disponibles autour de nous."],
    ["Pourquoi la pisciculture du groupe de Hery respecte-t-elle la ressource ?", "Parce que l'eau remplit l'étang puis retourne à la rivière : la ressource continue de couler."],
    ["Que faut-il calculer avant de présenter le projet ?", "Ce que le projet coûte et ce qu'il rapporte."],
    ["Quelle est la règle d'or d'un bon mini-projet ?", "La ressource doit encore être là quand les enfants de demain grandiront."],
  ],
  synthese: "Donc, monter un mini-projet, c'est observer les ressources du milieu, choisir une activité qui les utilise sans les épuiser, la monter étape par étape, puis la présenter. La règle d'or : la ressource doit encore être là pour les enfants de demain.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Cite les quatre étapes du mini-projet.",
        "2. Cite deux activités économiques possibles dans notre région.",
        "3. Pourquoi la pisciculture respecte-t-elle l'eau de la rivière ?",
        "4. Que faut-il calculer avant de présenter le projet ?",
      ],
      corrige: [
        "1. **Observer, choisir, monter, présenter**.",
        "2. Par exemple : **la pisciculture** et **l'apiculture** (aussi le raphia, la pépinière).",
        "3. Parce que l'eau **remplit l'étang puis retourne à la rivière**.",
        "4. **Ce que le projet coûte et ce qu'il rapporte**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Un bon mini-projet peut épuiser la ressource, si cela rapporte.",
        "2. Observer les ressources est la première étape.",
        "3. L'apiculture utilise la forêt sans la détruire.",
        "4. La maquette aide à présenter le projet aux autres.",
      ],
      corrige: [
        "1. **Faux** : la règle d'or interdit d'épuiser la ressource.",
        "2. **Vrai** : on regarde d'abord ce qui existe autour de nous.",
        "3. **Vrai** : les abeilles butinent les fleurs sans couper les arbres.",
        "4. **Vrai** : elle montre le projet en petit.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : observer — choisir — monter — présenter.",
      items: [
        "Étape 1 : ……… les ressources du milieu.",
        "Étape 2 : ……… une activité qui ne détruit pas.",
        "Étape 3 : ……… le projet étape par étape.",
        "Étape 4 : ……… le projet devant la classe.",
      ],
      corrige: [
        "**Observer** / **Choisir** / **Monter** / **Présenter**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le groupe de Hery a choisi : A. la pisciculture — B. la chasse aux lémuriens — C. la coupe de la forêt",
        "2. L'étang piscicole se remplit avec : A. l'eau de la rivière — B. de l'eau minérale achetée — C. du sable",
        "3. Les abeilles de l'apiculture donnent : A. du miel — B. du poisson — C. du charbon",
        "4. Un mini-projet réussi rapporte de l'argent et : A. garde la ressource en vie — B. salit la rivière — C. brûle la colline",
        "5. La règle d'or pense d'abord aux : A. enfants de demain — B. voitures — C. touristes",
      ],
      corrige: [
        "1. Réponse **A** : l'élevage de poissons en étang.",
        "2. Réponse **A** : l'eau de la rivière, qui y retourne ensuite.",
        "3. Réponse **A** : le miel, sans détruire la forêt.",
        "4. Réponse **A** : la ressource reste vivante.",
        "5. Réponse **A** : aux enfants de demain.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Observer et choisir",
        paras: [
          "La première étape du mini-projet, c'est l'observation : quelles ressources trouvons-nous autour de nous ? L'eau, la terre, la forêt, le soleil…",
          "Ensuite, on choisit une activité économique qui utilise ces ressources sans les épuiser : élever des poissons, produire du miel, tisser le raphia, faire pousser des plants.",
        ],
        exemples: [
          "Le groupe de Hery et Miora a repéré l'eau abondante de la rivière derrière l'école.",
          "Un autre groupe a choisi le raphia des marais voisins pour tisser des paniers.",
        ],
      },
      {
        titre: "2. Monter le projet étape par étape",
        paras: [
          "Monter le projet, c'est passer à l'action : creuser l'étang, installer les ruches, préparer la pépinière, tisser les premiers paniers.",
          "Il faut aussi calculer : ce que le projet coûte (outils, alevins, jeunes plants) et ce qu'il rapportera (poissons, miel, plants, paniers vendus).",
        ],
        exemples: [
          "L'étang du projet piscicole sera rempli par un canal depuis la rivière.",
          "Le groupe a calculé que la vente des poissons rembourserait les alevins achetés.",
        ],
      },
      {
        titre: "3. Présenter et la règle d'or",
        paras: [
          "La dernière étape, c'est la présentation : une maquette, un dessin, un petit discours devant la classe et les parents.",
          "Et la règle d'or du mini-projet : la ressource doit encore être là quand les enfants de tes enfants grandiront. Une activité qui enrichit aujourd'hui en appauvrissant demain n'est pas une bonne activité.",
        ],
        exemples: [
          "La maquette de l'étang piscicole, avec son canal et ses poissons en papier, a impressionné toute la classe.",
          "Le doyen du village, invité à la présentation, a promis un bout de terrain au bord de la rivière.",
        ],
      },
    ],
  },
  motsCles: ["mini-projet", "activité économique", "observer", "monter", "présenter", "règle d'or"],
  questionsRevision: [
    ["Cite les quatre étapes du mini-projet.", "Observer, choisir, monter, présenter."],
    ["Quelle est la règle d'or du mini-projet ?", "La ressource doit encore être là pour les enfants de demain."],
  ],
};

module.exports = { topics: [S18, S19, S20, S21, S22, S23, S24] };
