// data-unite2.js — UNITÉ 2 : L'UTILISATION DES RESSOURCES NATURELLES (Séances 11 à 17)
// Contenu rédactionnel conforme au Programme d'études officiel T6 — Géographie (p. 169-172)
const TOTAL = 78;

const S11 = {
  numero: 11, total: TOTAL,
  titre: "Les ressources naturelles renouvelables : l'eau et les forêts",
  theme: "L'utilisation des ressources naturelles",
  objectif: "Être capable de citer les ressources naturelles renouvelables, en commençant par l'eau et les forêts.",
  image: { id: "geo6_eau_foret", legende: "Les ressources renouvelables : l'eau de la vie et la forêt verte." },
  scene: { file: "scene_s11_eau_foret.jpg", mode: "document", legende: "Document : au village de grand-père Maitso, la rivière et la forêt d'eucalyptus nourrissent tout le monde." },
  revisionOuverture: [
    ["Comment s'appelle la frontière qui sépare deux régions ?", "C'est la délimitation des régions."],
    ["Cite deux richesses naturelles de notre région.", "Par exemple : la terre des rizières et l'eau des rivières."],
  ],
  miseEnSituation: {
    texte: "Week-end à la campagne, chez grand-père Maitso. Le matin, Miora suit la rivière qui descend de la colline : les femmes y lavent le linge, les zébus y boivent, un canal amène l'eau aux rizières. Plus haut, la forêt d'eucalyptus sent bon. « Ici, tout vient de la nature, dit grand-père. L'eau de la rivière, le bois de la forêt : ce sont nos richesses. Sans elles, pas de riz, pas de feu pour cuire, pas de maison. »",
    question: "Pourquoi l'eau et la forêt sont-elles des richesses pour les habitants ?",
    ra: "Parce que l'eau et la forêt donnent tout ce dont les hommes ont besoin pour vivre : à boire, à manger, du bois, des plantes. Ce sont des ressources naturelles renouvelables.",
    support: "Schéma de l'eau et de la forêt (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les ressources naturelles renouvelables : l'eau et les forêts ». Après cette séance, vous serez capables d'expliquer ce qu'est une ressource naturelle renouvelable et de citer l'eau et les forêts parmi elles.",
  observation: "Observez bien le schéma qui montre l'eau et la forêt, et le document du village de grand-père Maitso, entre la rivière et la forêt.",
  supportObservation: "Schéma de l'eau et de la forêt (page Leçon)",
  analyse: [
    ["Qu'est-ce qu'une ressource naturelle ?", "C'est une richesse que la nature nous offre et que nous utilisons pour vivre."],
    ["Quelles ressources naturelles voyez-vous au village de grand-père ?", "La rivière, la forêt d'eucalyptus, la terre des rizières."],
    ["Pourquoi l'eau est-elle une ressource si précieuse ?", "Parce qu'on boit, on lave, on irrigue les champs et on fait tourner les barrages avec elle."],
    ["Que nous donne la forêt ?", "Le bois pour construire et cuire, les plantes pour se soigner, les fruits et le miel."],
    ["Que veut dire « renouvelable » ?", "Cela veut dire que la ressource se renouvelle, revient, si on la protège."],
    ["L'eau et le bois sont-ils renouvelables ?", "Oui : la pluie refait l'eau des rivières, et les arbres repoussent… si on ne les coupe pas tous à la fois."],
  ],
  synthese: "Donc, une ressource naturelle est une richesse que la nature offre. L'eau et la forêt sont des ressources renouvelables : elles se renouvellent sans cesse, à condition que nous les protégions.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'une ressource naturelle ?",
        "2. Cite deux ressources naturelles renouvelables.",
        "3. Que veut dire « renouvelable » ?",
        "4. Donne deux utilités de l'eau pour les hommes.",
      ],
      corrige: [
        "1. C'est une **richesse que la nature nous offre** et que nous utilisons pour vivre.",
        "2. Par exemple : **l'eau** et **la forêt**.",
        "3. Cela veut dire que la ressource **se renouvelle**, revient, si on la protège.",
        "4. On **boit** l'eau et on **irrigue** les champs (aussi : laver, faire tourner les barrages).",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. L'eau est une ressource naturelle renouvelable.",
        "2. La forêt donne seulement du bois.",
        "3. Une ressource renouvelable peut disparaître si on la détruit.",
        "4. La pluie renouvelle l'eau des rivières.",
      ],
      corrige: [
        "1. **Vrai** : l'eau se renouvelle par la pluie.",
        "2. **Faux** : elle donne aussi des plantes, des fruits, du miel.",
        "3. **Vrai** : renouvelable ne veut pas dire indestructible.",
        "4. **Vrai** : le cycle de l'eau renouvelle les rivières.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : nature — renouvelable — eau — forêt.",
      items: [
        "Une ressource naturelle est une richesse que la ……… nous offre.",
        "L'eau et la forêt sont des ressources ……… .",
        "Nous buvons l'……… et nous construisons avec le bois de la ……… .",
        "Ces ressources se renouvellent si nous les ……… (protégeons / détruisons).",
      ],
      corrige: [
        "la **nature** / **renouvelable** / l'**eau** / la **forêt** / les **protégeons**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Une ressource naturelle vient : A. de l'usine — B. de la nature — C. du marché",
        "2. « Renouvelable » veut dire : A. qui se renouvelle — B. qui disparaît à jamais — C. qui coûte cher",
        "3. La forêt donne : A. seulement des cailloux — B. du bois, des plantes, des fruits — C. du pétrole",
        "4. L'eau des rivières est renouvelée par : A. la pluie — B. les camions — C. les magasins",
        "5. Pour que le bois revienne, il faut : A. couper tous les arbres — B. replanter les arbres coupés — C. brûler la forêt",
      ],
      corrige: [
        "1. Réponse **B** : de la nature.",
        "2. Réponse **A** : qui se renouvelle.",
        "3. Réponse **B** : du bois, des plantes, des fruits, du miel.",
        "4. Réponse **A** : la pluie.",
        "5. Réponse **B** : replanter les arbres coupés.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Une richesse que la nature offre",
        paras: [
          "Une ressource naturelle est une richesse que la nature met à la disposition des hommes, sans que personne ne l'ait fabriquée.",
          "L'eau, la forêt, la terre, les animaux, les minerais, le soleil : toutes ces richesses viennent de la nature. Nous les utilisons chaque jour pour vivre.",
        ],
        exemples: [
          "Au village de grand-père Maitso, la rivière et la forêt entourent les maisons : tout le monde en dépend.",
          "Le riz de nos assiettes pousse grâce à la terre et à l'eau : deux ressources naturelles.",
        ],
      },
      {
        titre: "2. L'eau, la ressource de la vie",
        paras: [
          "L'eau est la première ressource de la vie. Sans elle, ni homme, ni animal, ni plante ne peut vivre.",
          "Les rivières et les lacs donnent à boire, arrosent les rizières, nourrissent les poissons. Les grandes chutes font même tourner les barrages, qui fabriquent de l'électricité pour les villes.",
        ],
        exemples: [
          "Le canal de grand-père amène l'eau de la rivière jusqu'aux rizières du village.",
          "La pluie qui tombe pendant la saison chaude renouvelle l'eau des rivières et des nappes.",
        ],
      },
      {
        titre: "3. La forêt, la ressource verte",
        paras: [
          "La forêt est une autre grande ressource renouvelable. Elle donne le bois pour construire les maisons et cuire les repas.",
          "Elle offre aussi les plantes qui soignent, les fruits, le miel, et abrite les animaux. Et les arbres protègent le sol : leurs racines retiennent la terre des collines.",
        ],
        exemples: [
          "La forêt d'eucalyptus de grand-père donne du bois de chauffe à tout le village.",
          "Les guérisseurs connaissent les plantes de la forêt qui font tomber la fièvre.",
        ],
      },
    ],
  },
  motsCles: ["ressource naturelle", "renouvelable", "eau", "forêt", "richesse"],
  questionsRevision: [
    ["Qu'est-ce qu'une ressource naturelle renouvelable ?", "C'est une richesse que la nature offre et qui se renouvelle si on la protège."],
    ["Cite deux dons de la forêt.", "Le bois pour construire et cuire, et les plantes qui soignent."],
  ],
};

const S12 = {
  numero: 12, total: TOTAL,
  titre: "Les ressources halieutiques",
  theme: "L'utilisation des ressources naturelles",
  objectif: "Être capable d'expliquer ce que sont les ressources halieutiques et de citer les produits de la pêche à Madagascar.",
  image: { id: "geo6_halieutique", legende: "Les ressources halieutiques : les poissons, les crevettes et les langoustes." },
  scene: { file: "scene_s12_halieutique.jpg", mode: "document", legende: "Document : au retour de la pêche, les pêcheurs d'un village du bord de mer étalent le poisson pour le sécher au soleil." },
  revisionOuverture: [
    ["Qu'est-ce qu'une ressource naturelle renouvelable ?", "C'est une richesse que la nature offre et qui se renouvelle si on la protège."],
    ["Cite deux dons de la forêt.", "Le bois pour construire et cuire, et les plantes qui soignent."],
  ],
  miseEnSituation: {
    texte: "Chez Tojo, à Toamasina, on mange du poisson presque tous les jours. Ce matin, l'oncle de Tojo rentre de la pêche : sa pirogue déborde de poissons argentés, et un panier plein de crevettes grises. « La mer est généreuse, dit-il, mais il faut la respecter. Mon père m'a appris à ne pas prendre les petits poissons : si on les prend, demain il n'y en aura plus. »",
    question: "Qu'appelle-t-on les ressources halieutiques, et comment les préserver ?",
    ra: "Les ressources halieutiques sont les richesses de la pêche : poissons, crevettes, langoustes, crabes. Elles se renouvellent si on ne pêche pas les petits ni pendant la ponte.",
    support: "Schéma des ressources halieutiques (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les ressources halieutiques ». Après cette séance, vous serez capables d'expliquer ce que sont les ressources halieutiques et de dire comment les préserver.",
  observation: "Observez bien le schéma des produits de la mer, et le document des pêcheurs qui font sécher le poisson au soleil.",
  supportObservation: "Schéma des ressources halieutiques (page Leçon)",
  analyse: [
    ["Que veut dire le mot « halieutique » ?", "Cela veut dire « tout ce qui concerne la pêche »."],
    ["Que rapporte la pirogue de l'oncle de Tojo ?", "Des poissons et des crevettes : des produits de la pêche."],
    ["Cite trois ressources halieutiques de Madagascar.", "Les poissons, les crevettes et les langoustes (aussi les crabes, les calamars)."],
    ["Qui pêche avec des pirogues près du bord ?", "Les pêcheurs artisans, qui nourrissent les villages du bord de mer."],
    ["Que fait la pêche industrielle ?", "Les grands bateaux pêchent loin des côtes, et les produits partent vers les villes et l'exportation."],
    ["Pourquoi ne faut-il pas prendre les petits poissons ?", "Parce qu'ils n'ont pas encore grandi ni eu de petits : la mer se vide pour demain."],
  ],
  synthese: "Donc, les ressources halieutiques sont les richesses de la pêche : poissons, crevettes, langoustes, crabes. Elles se renouvellent si on pêche avec sagesse : laisser les petits poissons grandir et respecter les périodes de ponte.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Que veut dire « halieutique » ?",
        "2. Cite trois ressources halieutiques.",
        "3. Quelle est la différence entre la pêche artisanale et la pêche industrielle ?",
        "4. Pourquoi laisser les petits poissons dans la mer ?",
      ],
      corrige: [
        "1. « Halieutique » veut dire **tout ce qui concerne la pêche**.",
        "2. Par exemple : **les poissons, les crevettes et les langoustes**.",
        "3. La pêche **artisanale** se fait avec des pirogues près du bord ; la pêche **industrielle** utilise de grands bateaux au large.",
        "4. Parce qu'ils doivent **grandir et avoir des petits** pour que la mer se renouvelle.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Les crevettes sont une ressource halieutique.",
        "2. La pêche industrielle utilise des pirogues.",
        "3. Les ressources halieutiques se renouvellent toutes seules, même si l'on surpêche.",
        "4. Les pêcheurs artisans nourrissent les villages du bord de mer.",
      ],
      corrige: [
        "1. **Vrai** : les crevettes viennent de la pêche.",
        "2. **Faux** : elle utilise de grands bateaux.",
        "3. **Faux** : la surpêche vide la mer.",
        "4. **Vrai** : leur pêche alimente les marchés locaux.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : halieutique — pirogues — petits — renouvellent.",
      items: [
        "Les richesses de la pêche s'appellent les ressources ……… .",
        "Les pêcheurs artisans pêchent avec des ……… .",
        "Il ne faut pas prendre les ……… poissons.",
        "Les ressources halieutiques se ……… si on les respecte.",
      ],
      corrige: [
        "ressources **halieutiques** / des **pirogues** / les **petits** poissons / se **renouvellent**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. « Halieutique » concerne : A. la pêche — B. les mines — C. les routes",
        "2. Une pirogue sert à : A. voler — B. pêcher près du bord — C. creuser le sol",
        "3. La langouste est : A. un poisson d'eau douce — B. un produit de la mer — C. un arbre",
        "4. La pêche industrielle travaille : A. au large avec de grands bateaux — B. dans les rizières — C. à la montagne",
        "5. Pour que la mer reste généreuse, il faut : A. tout prendre — B. pêcher avec sagesse — C. jeter les filets cassés",
      ],
      corrige: [
        "1. Réponse **A** : la pêche.",
        "2. Réponse **B** : pêcher près du bord.",
        "3. Réponse **B** : un produit de la mer.",
        "4. Réponse **A** : au large avec de grands bateaux.",
        "5. Réponse **B** : pêcher avec sagesse.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Les richesses de la mer et des rivières",
        paras: [
          "On appelle ressources halieutiques toutes les richesses qui viennent de la pêche : poissons de mer et de rivière, crevettes, langoustes, crabes, calamars.",
          "Madagascar, grande île entourée d'eau, possède des eaux très poissonneuses : la mer nourrit des milliers de familles de pêcheurs.",
        ],
        exemples: [
          "La pirogue de l'oncle de Tojo revient chaque matin chargée de poissons et de crevettes.",
          "Au marché de Toamasina, on vend des crevettes qui partent aussi vers les villes de l'intérieur.",
        ],
      },
      {
        titre: "2. La pêche artisanale et la pêche industrielle",
        paras: [
          "La pêche artisanale, c'est la pêche des pêcheurs du bord de mer : pirogues, filets, lignes. Elle nourrit les familles et les villages.",
          "La pêche industrielle utilise de grands bateaux qui pêchent au large, parfois pendant des semaines. Les produits sont vendus en ville ou exportés vers d'autres pays.",
        ],
        exemples: [
          "Le poisson séché au soleil se garde longtemps : les familles le mangent tout au long de la semaine.",
          "Les crevettes de Madagascar sont appréciées très loin : elles sont vendues aux pays étrangers.",
        ],
      },
      {
        titre: "3. Une richesse qui se protège",
        paras: [
          "Les ressources halieutiques sont renouvelables : les poissons se reproduisent. Mais si l'on pêche les petits, ou pendant la ponte, la mer s'appauvrit.",
          "Les vrais pêcheurs respectent la mer : ils laissent grandir les petits poissons et suivent les règles du village pour que la mer reste généreuse.",
        ],
        exemples: [
          "Le père de l'oncle de Tojo lui a appris à rejeter les petits poissons à la mer.",
          "Dans beaucoup de villages, le dina interdit de pêcher pendant certaines périodes.",
        ],
      },
    ],
  },
  motsCles: ["ressources halieutiques", "pêche artisanale", "pêche industrielle", "pirogue", "crevettes"],
  questionsRevision: [
    ["Qu'appelle-t-on ressources halieutiques ?", "Les richesses qui viennent de la pêche : poissons, crevettes, langoustes, crabes."],
    ["Comment protéger la mer ?", "Laisser grandir les petits poissons et respecter les périodes de ponte."],
  ],
};

const S13 = {
  numero: 13, total: TOTAL,
  titre: "La faune et la flore",
  theme: "L'utilisation des ressources naturelles",
  objectif: "Être capable de citer des animaux et des plantes de Madagascar et d'expliquer le mot « endémique ».",
  image: { id: "geo6_faune_flore", legende: "La faune et la flore : lémuriens, caméléons et plantes uniques au monde." },
  scene: { file: "scene_s13_faune_flore.jpg", mode: "document", legende: "Document : dans la forêt d'Andasibe, les jumeaux aperçoivent un indri qui chante au sommet d'un arbre." },
  revisionOuverture: [
    ["Qu'appelle-t-on ressources halieutiques ?", "Les richesses qui viennent de la pêche : poissons, crevettes, langoustes, crabes."],
    ["Comment protéger la mer ?", "Laisser grandir les petits poissons et respecter les périodes de ponte."],
  ],
  miseEnSituation: {
    texte: "Excursion en famille à Andasibe, dans la forêt de l'Est. À l'aube, un chant étrange monte des arbres : « C'est l'indri, le plus grand des lémuriens vivants, souffle le guide. Il chante pour marquer sa forêt. » Les jumeaux retiennent leur souffle. Sur une branche, un caméléon minuscule change de couleur. Miora trouve une orchidée rose. « Tout cela n'existe qu'ici, dit le guide. Si la forêt disparaît, ces animaux et ces plantes disparaissent avec elle. »",
    question: "Pourquoi la faune et la flore de Madagascar sont-elles si précieuses ?",
    ra: "Parce que la plupart des animaux et des plantes de Madagascar sont endémiques : ils n'existent nulle part ailleurs. Si on les détruit ici, ils disparaissent du monde entier.",
    support: "Schéma de la faune et de la flore (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « La faune et la flore ». Après cette séance, vous serez capables de citer des animaux et des plantes de Madagascar et d'expliquer le mot « endémique ».",
  observation: "Observez bien le schéma des animaux et des plantes, et le document de la forêt d'Andasibe avec l'indri.",
  supportObservation: "Schéma de la faune et de la flore (page Leçon)",
  analyse: [
    ["Qu'est-ce que la faune ?", "C'est l'ensemble des animaux d'un lieu."],
    ["Qu'est-ce que la flore ?", "C'est l'ensemble des plantes d'un lieu."],
    ["Quel animal les jumeaux ont-ils vu à Andasibe ?", "L'indri, le plus grand lémurien vivant, qui chante à l'aube."],
    ["Que veut dire « endémique » ?", "Un animal ou une plante endémique n'existe que dans un seul lieu et nulle part ailleurs."],
    ["Cite trois animaux de Madagascar.", "Par exemple : le lémurien, le caméléon et le fossa."],
    ["Que se passe-t-il si la forêt d'un animal endémique disparaît ?", "L'animal disparaît avec sa forêt : il ne peut vivre nulle part ailleurs."],
  ],
  synthese: "Donc, la faune, ce sont les animaux ; la flore, ce sont les plantes. La plupart des animaux et des plantes de Madagascar sont endémiques : ils n'existent qu'ici. Détruire la forêt, c'est les faire disparaître du monde entier.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que la faune ? Qu'est-ce que la flore ?",
        "2. Que veut dire « endémique » ?",
        "3. Cite deux animaux endémiques de Madagascar.",
        "4. Cite deux plantes qu'on trouve à Madagascar.",
      ],
      corrige: [
        "1. La **faune**, ce sont les animaux ; la **flore**, ce sont les plantes.",
        "2. Un animal ou une plante **endémique** n'existe que dans un seul lieu, nulle part ailleurs.",
        "3. Par exemple : **le lémurien indri** et **le caméléon**.",
        "4. Par exemple : **le baobab** et **l'orchidée** (aussi le ravinala).",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Tous les animaux du monde vivent à Madagascar.",
        "2. Le lémurien est un animal endémique de Madagascar.",
        "3. La flore, ce sont les animaux.",
        "4. Si la forêt disparaît, les lémuriens disparaissent aussi.",
      ],
      corrige: [
        "1. **Faux** : beaucoup d'espèces sont endémiques, elles n'existent qu'ici.",
        "2. **Vrai** : les lémuriens n'existent qu'à Madagascar.",
        "3. **Faux** : la flore, ce sont les plantes.",
        "4. **Vrai** : ils ne peuvent vivre nulle part ailleurs.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : faune — flore — endémique — forêt.",
      items: [
        "Les animaux d'un lieu forment la ……… .",
        "Les plantes d'un lieu forment la ……… .",
        "Un animal qui n'existe qu'ici est ……… .",
        "Les lémuriens ne vivent que dans la ……… de Madagascar.",
      ],
      corrige: [
        "la **faune** / la **flore** / **endémique** / la **forêt**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le plus grand lémurien vivant est : A. l'indri — B. le caméléon — C. le zébu",
        "2. « Endémique » veut dire : A. très gros — B. unique à un seul lieu — C. très vieux",
        "3. Le caméléon peut : A. voler — B. changer de couleur — C. nager très vite",
        "4. Le ravinala, l'arbre du voyageur, est : A. une plante de Madagascar — B. un poisson — C. une montagne",
        "5. Pour protéger la faune, il faut d'abord protéger : A. sa forêt — B. les routes — C. les magasins",
      ],
      corrige: [
        "1. Réponse **A** : l'indri, qui chante à l'aube.",
        "2. Réponse **B** : unique à un seul lieu.",
        "3. Réponse **B** : changer de couleur.",
        "4. Réponse **A** : une plante emblématique de Madagascar.",
        "5. Réponse **A** : sa forêt, sa maison.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La faune : des animaux uniques",
        paras: [
          "La faune de Madagascar est célèbre dans le monde entier : les lémuriens, les caméléons, le fossa, les oiseaux colorés.",
          "Beaucoup de ces animaux sont endémiques : ils n'existent qu'à Madagascar. C'est le cas de tous les lémuriens, ces singes à grande queue qui ne vivent nulle part ailleurs sur Terre.",
        ],
        exemples: [
          "À Andasibe, l'indri chante à l'aube : on l'entend à des kilomètres.",
          "Les caméléons de Madagascar, du plus grand au plus petit du monde, changent de couleur pour se cacher.",
        ],
      },
      {
        titre: "2. La flore : des plantes uniques",
        paras: [
          "La flore est tout aussi précieuse : baobabs, orchidées, ravinala, palmiers, plantes médicinales.",
          "Une grande partie des plantes de Madagascar est endémique : certaines ne poussent que sur une seule colline !",
        ],
        exemples: [
          "L'allée des baobabs, près de Morondava, est connue dans le monde entier.",
          "Le ravinala, l'arbre du voyageur, donne une eau limpide à celui qui coupe sa feuille.",
        ],
      },
      {
        titre: "3. Un trésor fragile",
        paras: [
          "La faune et la flore sont des ressources renouvelables, mais fragiles : les animaux et les plantes ont besoin de leur forêt.",
          "Quand la forêt brûle ou est coupée, les espèces endémiques disparaissent : personne ne peut les faire revenir. Les protéger, c'est protéger un trésor du monde entier.",
        ],
        exemples: [
          "Les parcs nationaux, comme celui d'Andasibe, protègent la forêt et ses habitants.",
          "Le guide d'Andasibe répète : « La forêt d'abord, les animaux suivront. »",
        ],
      },
    ],
  },
  motsCles: ["faune", "flore", "endémique", "lémurien", "forêt"],
  questionsRevision: [
    ["Que veut dire « endémique » ?", "Un animal ou une plante endémique n'existe que dans un seul lieu, nulle part ailleurs."],
    ["Cite un animal endémique et une plante de Madagascar.", "Le lémurien indri (animal) et le baobab (plante)."],
  ],
};

const S14 = {
  numero: 14, total: TOTAL,
  titre: "Les ressources naturelles non renouvelables : les minerais",
  theme: "L'utilisation des ressources naturelles",
  objectif: "Être capable de citer les principaux minerais de Madagascar et d'expliquer pourquoi ils ne sont pas renouvelables.",
  image: { id: "geo6_minerais", legende: "Les principaux minerais de Madagascar : nickel, chromite, ilménite, saphirs." },
  scene: { file: "scene_s14_minerais.jpg", mode: "document", legende: "Document : dans une carrière du Sud, un chercheur de saphirs tamise la terre rouge au bord de son puits." },
  revisionOuverture: [
    ["Que veut dire « endémique » ?", "Un animal ou une plante endémique n'existe que dans un seul lieu, nulle part ailleurs."],
    ["Cite un animal endémique et une plante de Madagascar.", "Le lémurien indri (animal) et le baobab (plante)."],
  ],
  miseEnSituation: {
    texte: "Sur la route des vacances, le taxi-brousse s'arrête à un carrefour du Sud. Des hommes sortent d'un puits profond, des seaux de terre rouge à la main. « Que cherchent-ils ? demande Hery. — Des saphirs, répond papa. Des pierres précieuses bleues, cachées sous la terre. » Un peu plus loin, une montagne entière semble grignotée par des machines géantes : c'est une mine. « Ici, la terre garde des trésors : du nickel, de la chromite… Mais attention, prévient papa, une fois extraits, ces trésors ne reviennent jamais. »",
    question: "Que cache le sous-sol de Madagascar, et pourquoi ces richesses sont-elles différentes de l'eau et de la forêt ?",
    ra: "Le sous-sol cache des minerais : nickel, chromite, ilménite, saphirs. Ce sont des ressources non renouvelables : une fois extraites, elles ne se renouvellent pas.",
    support: "Carte des minerais de Madagascar (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les ressources naturelles non renouvelables : les minerais ». Après cette séance, vous serez capables de citer les principaux minerais de Madagascar et d'expliquer pourquoi ils ne sont pas renouvelables.",
  observation: "Observez bien la carte des minerais de Madagascar, et le document du chercheur de saphirs.",
  supportObservation: "Carte des minerais (page Leçon)",
  analyse: [
    ["Que cherchent les hommes au carrefour du Sud ?", "Des saphirs, des pierres précieuses cachées sous la terre."],
    ["Qu'est-ce qu'un minerai ?", "C'est une roche ou une substance tirée du sous-sol, qui contient des métaux ou des pierres précieuses."],
    ["Cite trois minerais de Madagascar.", "Le nickel, la chromite et l'ilménite (aussi les saphirs, le graphite, le mica)."],
    ["Que veut dire « non renouvelable » ?", "Cela veut dire que la ressource ne se renouvelle pas : une fois extraite, elle est finie."],
    ["À quoi servent les minerais ?", "À fabriquer des métaux, des bijoux, des pièces de voitures, des outils."],
    ["Pourquoi les minerais sont-ils différents de l'eau et de la forêt ?", "L'eau et la forêt se renouvellent ; les minerais, une fois extraits, ne reviennent jamais."],
  ],
  synthese: "Donc, le sous-sol de Madagascar cache des minerais : le nickel et le cobalt à l'est, la chromite au nord-ouest, l'ilménite au sud-est, les saphirs dans le Sud. Ce sont des ressources non renouvelables : une fois extraites, elles s'épuisent pour toujours.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'un minerai ?",
        "2. Cite trois minerais de Madagascar.",
        "3. Que veut dire « non renouvelable » ?",
        "4. Où trouve-t-on les saphirs à Madagascar ?",
      ],
      corrige: [
        "1. Un **minerai** est une roche du sous-sol qui contient des métaux ou des pierres précieuses.",
        "2. Par exemple : **le nickel, la chromite et l'ilménite**.",
        "3. Cela veut dire que la ressource **ne se renouvelle pas** : extraite, elle est finie.",
        "4. Dans le **Sud**, autour d'Ilakaka sur la route du sud.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Les minerais se renouvellent comme la forêt.",
        "2. Le nickel est extrait à l'est de Madagascar.",
        "3. Les saphirs sont des pierres précieuses.",
        "4. Les minerais servent à fabriquer des métaux et des outils.",
      ],
      corrige: [
        "1. **Faux** : les minerais sont non renouvelables.",
        "2. **Vrai** : le nickel est extrait à l'est du pays.",
        "3. **Vrai** : ce sont des pierres précieuses recherchées.",
        "4. **Vrai** : ils donnent des métaux et des pièces pour l'industrie.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : minerais — sous-sol — non renouvelables — saphirs.",
      items: [
        "Les richesses cachées sous la terre s'appellent les ……… .",
        "Elles se trouvent dans le ……… de Madagascar.",
        "Les minerais sont des ressources ……… .",
        "Les pierres précieuses bleues du Sud sont les ……… .",
      ],
      corrige: [
        "les **minerais** / le **sous-sol** / **non renouvelables** / les **saphirs**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Un minerai vient : A. de la mer — B. du sous-sol — C. du ciel",
        "2. « Non renouvelable » veut dire : A. qui ne revient plus — B. qui pousse vite — C. qui vole",
        "3. La chromite est extraite : A. au nord-ouest — B. au sommet des montagnes — C. dans la mer",
        "4. L'ilménite sert à fabriquer : A. du pain — B. des peintures blanches et du métal — C. des tissus",
        "5. Une mine, c'est : A. un champ de riz — B. un lieu d'extraction du sous-sol — C. une école",
      ],
      corrige: [
        "1. Réponse **B** : du sous-sol.",
        "2. Réponse **A** : qui ne revient plus une fois extrait.",
        "3. Réponse **A** : au nord-ouest de Madagascar.",
        "4. Réponse **B** : des peintures et du métal (du titane).",
        "5. Réponse **B** : un lieu d'extraction du sous-sol.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Des trésors sous la terre",
        paras: [
          "Le sous-sol de Madagascar cache de grandes richesses : les minerais. Un minerai est une roche qui contient des métaux ou des pierres précieuses.",
          "On les extrait dans des mines : des carrières à ciel ouvert ou des puits profonds, comme ceux des chercheurs de saphirs.",
        ],
        exemples: [
          "Les hommes du Sud creusent des puits pour trouver les saphirs bleus.",
          "Près de Moramanga, vers l'est, de grandes machines extraient le nickel et le cobalt.",
        ],
      },
      {
        titre: "2. Les principaux minerais de l'île",
        paras: [
          "Madagascar possède du nickel et du cobalt à l'est, de la chromite au nord-ouest, de l'ilménite sur la côte sud-est, des saphirs dans le Sud.",
          "On trouve aussi du graphite, du mica, du sel, du quartz… Le sous-sol de la grande île est riche.",
        ],
        exemples: [
          "L'ilménite de la côte sud-est donne du titane, un métal léger et solide.",
          "La chromite sert à fabriquer l'acier inoxydable des cuisines et des outils.",
        ],
      },
      {
        titre: "3. Une fois partis, ils ne reviennent plus",
        paras: [
          "Contrairement à l'eau et à la forêt, les minerais sont non renouvelables : la terre a mis des millions d'années à les former.",
          "Une fois extraits et utilisés, ils ont disparu pour toujours. C'est pourquoi il ne faut pas les gaspiller et éviter de les détruire en les exploitant mal.",
        ],
        exemples: [
          "Papa le dit en repartant : « Un saphir extrait, c'est un saphir de moins sur Terre. »",
          "Les mines abandonnées laissent des trous immenses : la terre ne se referme pas.",
        ],
      },
    ],
  },
  motsCles: ["minerai", "mine", "sous-sol", "non renouvelable", "nickel", "chromite", "ilménite", "saphirs"],
  questionsRevision: [
    ["Pourquoi les minerais sont-ils non renouvelables ?", "Parce qu'une fois extraits, ils ne se renouvellent plus : ils ont disparu pour toujours."],
    ["Cite trois minerais de Madagascar.", "Le nickel, la chromite et l'ilménite (aussi les saphirs)."],
  ],
};

const S15 = {
  numero: 15, total: TOTAL,
  titre: "Les ressources énergétiques",
  theme: "L'utilisation des ressources naturelles",
  objectif: "Être capable de citer les ressources énergétiques de Madagascar et de distinguer les énergies fossiles des énergies renouvelables.",
  image: { id: "geo6_energies", legende: "Les ressources énergétiques : fossiles qui s'épuisent, énergies propres qui durent." },
  scene: { file: "scene_s15_energies.jpg", mode: "document", legende: "Document : au village, le soleil recharge le panneau solaire du toit pendant que maman cuisine sur un foyer économe." },
  revisionOuverture: [
    ["Pourquoi les minerais sont-ils non renouvelables ?", "Parce qu'une fois extraits, ils ne se renouvellent plus : ils ont disparu pour toujours."],
    ["Cite trois minerais de Madagascar.", "Le nickel, la chromite et l'ilménite (aussi les saphirs)."],
  ],
  miseEnSituation: {
    texte: "Ce soir-là chez grand-père Maitso, la pluie tombe fort. La lampe solaire s'allume toute seule sur la table. « Avant, dit grand-père, on brûlait des tas de bois pour s'éclairer. Maintenant, le soleil charge ma lampe le jour, et elle m'éclaire la nuit. » Hery pose une question : « Et les voitures, elles roulent avec quoi ? — Avec du pétrole, un trésor liquide venu du sous-sol. Mais attention : le pétrole, le gaz et le charbon s'épuisent un jour. Le soleil, lui, revient chaque matin ! »",
    question: "Quelles sont les ressources qui donnent de l'énergie, et lesquelles s'épuisent ?",
    ra: "Le pétrole, le gaz et le charbon sont des énergies fossiles qui s'épuisent. Le soleil, l'eau des barrages et le bois des forêts se renouvellent.",
    support: "Schéma des ressources énergétiques (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les ressources énergétiques ». Après cette séance, vous serez capables de citer les ressources énergétiques et de distinguer celles qui s'épuisent de celles qui durent.",
  observation: "Observez bien le schéma des énergies fossiles et des énergies qui durent, et le document du panneau solaire de grand-père.",
  supportObservation: "Schéma des ressources énergétiques (page Leçon)",
  analyse: [
    ["Qu'est-ce qu'une ressource énergétique ?", "C'est une ressource qui donne de l'énergie : de la chaleur, de la lumière, du mouvement."],
    ["Cite les trois énergies fossiles.", "Le pétrole, le gaz et le charbon."],
    ["Pourquoi les appelle-t-on « fossiles » ?", "Parce qu'elles viennent de restes d'êtres vivants très anciens, enfouis sous terre."],
    ["Que fait la lampe de grand-père ?", "Elle stocke l'énergie du soleil le jour pour éclairer la nuit."],
    ["Cite trois énergies renouvelables.", "Le soleil, l'eau des barrages et le bois des forêts (aussi le vent)."],
    ["Pourquoi le charbon est-il non renouvelable ?", "Parce que la terre a mis des millions d'années à le former : une fois brûlé, il est perdu."],
  ],
  synthese: "Donc, les ressources énergétiques donnent de l'énergie. Le pétrole, le gaz et le charbon sont des énergies fossiles : elles s'épuisent. Le soleil, l'eau et le bois se renouvellent : ce sont les énergies qui durent.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Cite les trois énergies fossiles.",
        "2. Pourquoi les énergies fossiles sont-elles non renouvelables ?",
        "3. Cite deux énergies renouvelables.",
        "4. Comment la lampe de grand-père s'éclaire-t-elle ?",
      ],
      corrige: [
        "1. **Le pétrole, le gaz et le charbon**.",
        "2. Parce qu'elles **s'épuisent** : la terre ne les refait pas.",
        "3. Par exemple : **le soleil** et **l'eau des barrages**.",
        "4. Avec l'énergie du **soleil** stockée dans sa batterie pendant le jour.",
      ],
    },
    {
      consigne: "Classe ces énergies : fossiles ou renouvelables.",
      items: [
        "1. Le charbon",
        "2. Le soleil",
        "3. Le pétrole",
        "4. L'eau des barrages",
      ],
      corrige: [
        "1. Le charbon : énergie **fossile**.",
        "2. Le soleil : énergie **renouvelable**.",
        "3. Le pétrole : énergie **fossile**.",
        "4. L'eau des barrages : énergie **renouvelable**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : pétrole — charbon — soleil — épuisent.",
      items: [
        "Les trois énergies fossiles sont le gaz, le ……… et le ……… .",
        "L'énergie qui revient chaque matin est celle du ……… .",
        "Les énergies fossiles s'……… un jour.",
      ],
      corrige: [
        "le **pétrole** et le **charbon** / du **soleil** / s'**épuisent**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Une ressource énergétique donne : A. de l'énergie — B. à manger — C. des habits",
        "2. Le charbon vient : A. de la mer — B. du sous-sol — C. des arbres fruitiers",
        "3. Le pétrole fait avancer : A. les voitures — B. les écoliers — C. les nuages",
        "4. L'énergie du barrage vient : A. de l'eau — B. du feu — C. du vent seulement",
        "5. Une énergie qui dure est : A. le gaz — B. le soleil — C. le charbon",
      ],
      corrige: [
        "1. Réponse **A** : de l'énergie (chaleur, lumière, mouvement).",
        "2. Réponse **B** : du sous-sol.",
        "3. Réponse **A** : les voitures et beaucoup de moteurs.",
        "4. Réponse **A** : de l'eau qui fait tourner les turbines.",
        "5. Réponse **B** : le soleil revient chaque matin.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Les énergies fossiles du sous-sol",
        paras: [
          "Le pétrole, le gaz et le charbon sont appelés les énergies fossiles : ils viennent de restes d'êtres vivants enfouis sous terre depuis des millions d'années.",
          "Ils font marcher les moteurs, les usines et les centrales. Mais ce sont des ressources non renouvelables : un jour, elles seront épuisées.",
        ],
        exemples: [
          "Les voitures et les taxis-brousse roulent au gazole, un produit du pétrole.",
          "Le charbon de terre brûle très chaud dans les fours des usines.",
        ],
      },
      {
        titre: "2. Les énergies qui se renouvellent",
        paras: [
          "Heureusement, d'autres énergies se renouvellent sans cesse : le soleil, l'eau des rivières, le vent, et le bois des forêts bien gérées.",
          "Les panneaux solaires changent la lumière du soleil en électricité ; les barrages utilisent la force de l'eau qui descend des Hautes Terres.",
        ],
        exemples: [
          "La lampe solaire de grand-père s'allume chaque soir sans rien dépenser.",
          "Sur les Hautes Terres, l'eau des chutes fait tourner les turbines des barrages.",
        ],
      },
      {
        titre: "3. Bien utiliser l'énergie",
        paras: [
          "Utiliser l'énergie, c'est utiliser une ressource naturelle. Le bois de chauffe vient de la forêt ; le gazole vient du pétrole.",
          "Pour économiser les ressources, on utilise des foyers économes qui cuisent avec peu de bois, et on choisit le soleil, gratuit et sans fin.",
        ],
        exemples: [
          "Le foyer amélioré de maman Rasoa cuit le riz avec deux fois moins de charbon de bois.",
          "Les panneaux solaires se multiplient sur les toits des villages qui n'ont pas de ligne électrique.",
        ],
      },
    ],
  },
  motsCles: ["énergie", "fossile", "pétrole", "gaz", "charbon", "panneau solaire", "barrage"],
  questionsRevision: [
    ["Cite les trois énergies fossiles.", "Le pétrole, le gaz et le charbon."],
    ["Cite deux énergies renouvelables.", "Le soleil et l'eau des barrages (aussi le vent, le bois bien géré)."],
  ],
};

const S16 = {
  numero: 16, total: TOTAL,
  titre: "Les ressources naturelles de ma région",
  theme: "L'utilisation des ressources naturelles",
  objectif: "Être capable de recenser les ressources naturelles de sa région et de citer celles que sa famille utilise chaque jour.",
  image: { id: "geo6_ressources_region", legende: "Les ressources d'une région : le sol, l'eau, la forêt, le soleil." },
  scene: { file: "scene_s16_ressources_region.jpg", mode: "document", legende: "Document : au marché d'Antsirabe, les étals regorgent des produits de la région : riz, légumes, fruits, branches d'eucalyptus." },
  revisionOuverture: [
    ["Cite les trois énergies fossiles.", "Le pétrole, le gaz et le charbon."],
    ["Cite deux énergies renouvelables.", "Le soleil et l'eau des barrages (aussi le vent, le bois bien géré)."],
  ],
  miseEnSituation: {
    texte: "Au marché d'Antsirabe, maman Rasoa installe son stand. Autour d'elle, le marché déborde de richesses : des montagnes de riz blanc, des cagettes de légumes frais, des fruits de toutes les couleurs, des fagots d'eucalyptus, des poules et des canards. « Tout cela vient de notre région, dit-elle à Miora. La terre des Hautes Terres est forte, la pluie y est généreuse, les rivières ne manquent pas. Nous avons de la chance ! »",
    question: "Quelles sont les ressources naturelles de notre région ?",
    ra: "Dans la Vakinankaratra : la terre des rizières et des légumes, l'eau des rivières, les forêts d'eucalyptus et de pins, le vent et le soleil. Chaque région a ses richesses.",
    support: "Schéma des ressources d'une région (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les ressources naturelles de ma région ». Après cette séance, vous serez capables de recenser les ressources de votre région et de citer celles que votre famille utilise chaque jour.",
  observation: "Observez bien le schéma des ressources d'une région, et le document du marché d'Antsirabe.",
  supportObservation: "Schéma des ressources d'une région (page Leçon)",
  analyse: [
    ["Que vend-on au marché d'Antsirabe ?", "Du riz, des légumes, des fruits, du bois, des volailles : des produits de la région."],
    ["Quelles ressources naturelles trouve-t-on dans la Vakinankaratra ?", "La terre des rizières, l'eau des rivières, les forêts d'eucalyptus et de pins, le vent et le soleil."],
    ["D'où vient le riz vendu au marché ?", "Des rizières de la région, arrosées par l'eau des rivières et la pluie."],
    ["Cite une ressource de la région côtière de Tojo, à l'Est.", "La mer et ses poissons : les ressources halieutiques."],
    ["Cite une ressource du Sud, la région de Tantely.", "Les saphirs du sous-sol, le soleil généreux, les plantes qui supportent la sécheresse."],
    ["Quelles ressources ta famille utilise-t-elle chaque jour ?", "Réponse personnelle : par exemple, l'eau, le bois ou le gaz pour cuire, la terre des champs."],
  ],
  synthese: "Donc, chaque région de Madagascar possède ses richesses : la terre, l'eau, la forêt, la mer, le sous-sol, le soleil. Dans notre région, la Vakinankaratra, la terre forte et l'eau abondante nourrissent les rizières et les marchés.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Cite trois ressources naturelles de la Vakinankaratra.",
        "2. Cite une ressource de la côte Est.",
        "3. Cite une ressource du Grand Sud.",
        "4. Quelles ressources ta famille utilise-t-elle chaque matin ?",
      ],
      corrige: [
        "1. Par exemple : **la terre des rizières, l'eau des rivières, les forêts d'eucalyptus**.",
        "2. **La mer et ses poissons** (ressources halieutiques).",
        "3. **Les saphirs** du sous-sol (aussi le soleil, les plantes résistantes).",
        "4. Réponse personnelle : par exemple, **l'eau** pour se laver et **le bois** pour cuire le riz.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Toutes les régions de Madagascar ont les mêmes ressources.",
        "2. Le riz d'Antsirabe pousse grâce à la terre et à l'eau.",
        "3. La mer est une ressource pour les régions côtières.",
        "4. Le soleil est une ressource naturelle.",
      ],
      corrige: [
        "1. **Faux** : chaque région a ses propres richesses.",
        "2. **Vrai** : la terre forte et l'eau nourrissent les rizières.",
        "3. **Vrai** : la mer donne le poisson.",
        "4. **Vrai** : il donne lumière, chaleur et énergie.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : région — terre — eau — marché.",
      items: [
        "Chaque ……… possède ses richesses naturelles.",
        "Dans la Vakinankaratra, la ……… des rizières est forte.",
        "Les rivières donnent l'……… qui arrose les champs.",
        "Les produits de la région se vendent au ……… .",
      ],
      corrige: [
        "Chaque **région** / la **terre** / l'**eau** / au **marché**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le marché d'Antsirabe vend surtout : A. des produits de la région — B. des cailloux — C. de la neige",
        "2. La région de Tojo, à l'Est, possède : A. la mer — B. le désert — C. les glaciers",
        "3. Le Sud est riche en : A. saphirs — B. neige — C. pétrole noir partout",
        "4. Les forêts de la Vakinankaratra donnent : A. du bois — B. du poisson — C. du sel",
        "5. Recenser les ressources, c'est : A. les compter et les lister — B. les jeter — C. les cacher",
      ],
      corrige: [
        "1. Réponse **A** : des produits de la région.",
        "2. Réponse **A** : la mer et ses poissons.",
        "3. Réponse **A** : les saphirs du sous-sol.",
        "4. Réponse **A** : du bois de chauffe et de construction.",
        "5. Réponse **A** : les compter et les lister.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Chaque région a ses richesses",
        paras: [
          "Les ressources naturelles ne sont pas les mêmes partout : chaque région possède ses propres richesses.",
          "La Vakinankaratra, région des Hautes Terres, a une terre forte, une pluie généreuse et des rivières qui descendent des collines.",
        ],
        exemples: [
          "Les rizières et les champs de légumes couvrent les vallées autour d'Antsirabe.",
          "Les collines se couvrent d'eucalyptus et de pins, plantés par les hommes.",
        ],
      },
      {
        titre: "2. Les ressources des autres régions",
        paras: [
          "À l'Est, la mer et les forêts humides donnent le poisson, la vanille et le girofle.",
          "Au Nord et à l'Ouest, la mer et le sous-sol offrent crevettes, canne à sucre et minerais. Au Sud, le soleil brûle, mais le sous-sol cache les saphirs et les plantes épineuses savent garder l'eau.",
        ],
        exemples: [
          "Tojo, à Toamasina, mange le poisson frais de l'océan Indien.",
          "Tantely, à Toliara, connaît les marchands de saphirs de la route du Sud.",
        ],
      },
      {
        titre: "3. Les ressources de tous les jours",
        paras: [
          "Chaque famille utilise les ressources de sa région sans toujours y penser : l'eau du robinet ou du puits, le bois ou le gaz du feu, la terre des champs, les plantes qui soignent.",
          "Observer et recenser ces ressources, c'est le premier pas pour les protéger : on ne protège bien que ce que l'on connaît.",
        ],
        exemples: [
          "Miora compte sur ses doigts : l'eau, le riz, les légumes, le bois : quatre ressources utilisées avant midi !",
          "La classe de Mme Randriamampionona prépare un grand tableau des ressources de la région.",
        ],
      },
    ],
  },
  motsCles: ["recenser", "ressources régionales", "terre", "eau", "marché"],
  questionsRevision: [
    ["Cite trois ressources de la Vakinankaratra.", "La terre des rizières, l'eau des rivières et les forêts d'eucalyptus."],
    ["Pourquoi recenser les ressources de sa région ?", "Pour mieux les connaître et mieux les protéger."],
  ],
};

const S17 = {
  numero: 17, total: TOTAL,
  titre: "L'utilisation des ressources naturelles",
  theme: "L'utilisation des ressources naturelles",
  objectif: "Être capable d'expliquer les différentes utilisations des ressources naturelles : se nourrir, se soigner, construire, vendre.",
  image: { id: "geo6_utilisation", legende: "Quatre utilisations des ressources : se nourrir, se soigner, construire, vendre." },
  scene: { file: "scene_s17_utilisation.jpg", mode: "document", legende: "Document : chez tante Vololona, la maison en brique, le repas au feu de bois et les paniers de raphia prêts à vendre." },
  revisionOuverture: [
    ["Cite trois ressources de la Vakinankaratra.", "La terre des rizières, l'eau des rivières et les forêts d'eucalyptus."],
    ["Pourquoi recenser les ressources de sa région ?", "Pour mieux les connaître et mieux les protéger."],
  ],
  miseEnSituation: {
    texte: "Visite chez tante Vololona, la sœur de papa, à la sortie de la ville. Sa maison est en briques rouges, cuites avec l'argile de la colline. Dans la cour, le déjeuner mijote sur un feu de bois : du riz du champ voisin, du poisson de la rivière, des brèdes du jardin. Sur la véranda, des paniers et des nattes en raphia attendent l'acheteur. « Regarde bien, dit tante Vololona : ma maison, mon repas, mon travail, tout vient de la nature autour de moi. »",
    question: "Comment les hommes utilisent-ils les ressources naturelles ?",
    ra: "Ils s'en nourrissent, s'en soignent, construisent leurs maisons et vendent les produits au marché : quatre grandes utilisations.",
    support: "Schéma des quatre utilisations (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « L'utilisation des ressources naturelles ». Après cette séance, vous serez capables de citer les quatre grandes utilisations des ressources naturelles.",
  observation: "Observez bien le schéma des quatre utilisations, et le document de la maison de tante Vololona.",
  supportObservation: "Schéma des quatre utilisations (page Leçon)",
  analyse: [
    ["De quoi la maison de tante Vololona est-elle faite ?", "De briques rouges, cuites avec l'argile de la colline."],
    ["Que contient le repas qui mijote ?", "Du riz du champ, du poisson de la rivière, des brèdes du jardin : des ressources de la région."],
    ["Que fait tante Vololona avec le raphia ?", "Elle tresse des paniers et des nattes qu'elle vend."],
    ["Cite les quatre grandes utilisations des ressources.", "Se nourrir, se soigner, construire, vendre."],
    ["Avec quoi se soigne-t-on souvent à la campagne ?", "Avec les plantes médicinales de la forêt et des jardins."],
    ["Que vendent les habitants de la région au marché ?", "Le riz, les légumes, les fruits, les paniers, le bois… les produits de leurs ressources."],
  ],
  synthese: "Donc, les hommes utilisent les ressources naturelles de quatre grandes façons : se nourrir, se soigner, construire et vendre. De la maison au repas, du remède au marché, tout vient de la nature.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Cite les quatre grandes utilisations des ressources naturelles.",
        "2. Avec quelle ressource construit-on des briques ?",
        "3. Donne deux ressources qui se mangent.",
        "4. Que peut-on vendre au marché ?",
      ],
      corrige: [
        "1. **Se nourrir, se soigner, construire et vendre**.",
        "2. Avec **l'argile** de la colline.",
        "3. Par exemple : **le riz** et **le poisson** (aussi les fruits, les brèdes).",
        "4. Réponse personnelle : par exemple **le riz, les légumes, les paniers en raphia**.",
      ],
    },
    {
      consigne: "Relie chaque ressource à son utilisation.",
      items: [
        "Le riz des rizières — — construire",
        "L'argile de la colline — — se nourrir",
        "La plante médicinale — — vendre",
        "Le panier de raphia — — se soigner",
      ],
      corrige: [
        "Le riz — **se nourrir** ; l'argile — **construire** ; la plante médicinale — **se soigner** ; le panier de raphia — **vendre**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : nourrir — soigner — construire — vendre.",
      items: [
        "Le poisson et le riz servent à se ……… .",
        "Les plantes médicinales servent à se ……… .",
        "Le bois et l'argile servent à ……… des maisons.",
        "La vanille et les paniers s'emmènent au marché pour les ……… .",
      ],
      corrige: [
        "se **nourrir** / se **soigner** / à **construire** / pour les **vendre**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. La maison de tante Vololona est faite avec : A. de l'argile cuite — B. du plastique — C. de la glace",
        "2. Le repas mijote sur : A. un feu de bois — B. un volcan — C. un projecteur",
        "3. Le raphia sert à : A. tisser des paniers — B. faire du pain — C. creuser des puits",
        "4. Se soigner avec la nature, c'est utiliser : A. les plantes médicinales — B. les cailloux — C. le sable sec",
        "5. Vendre les ressources permet : A. de gagner sa vie — B. de dormir — C. de voyager dans l'espace",
      ],
      corrige: [
        "1. Réponse **A** : des briques d'argile cuite.",
        "2. Réponse **A** : un feu de bois.",
        "3. Réponse **A** : tisser paniers, nattes et chapeaux.",
        "4. Réponse **A** : les plantes médicinales.",
        "5. Réponse **A** : de gagner sa vie.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Se nourrir et se soigner",
        paras: [
          "La première utilisation des ressources, c'est de manger : le riz des rizières, le poisson des rivières et de la mer, les fruits et les légumes des jardins.",
          "La nature soigne aussi : les plantes médicinales de la forêt font tomber la fièvre, calment la toux, soignent les plaies.",
        ],
        exemples: [
          "Chez tante Vololona, le repas du jour vient tout droit des champs et de la rivière voisine.",
          "La grand-mère prépare une tisane de feuilles pour calmer la toux des enfants.",
        ],
      },
      {
        titre: "2. Construire et fabriquer",
        paras: [
          "Les maisons se construisent avec les ressources du sol : briques d'argile, bois des forêts, chaumes des collines, pierres des carrières.",
          "On fabrique aussi des meubles, des pirogues, des paniers, des nattes : autant d'objets nés des ressources naturelles.",
        ],
        exemples: [
          "Les briques rouges des maisons d'Antsirabe viennent des collines d'argile.",
          "Le tisserand de la rue voisine travaille le raphia des marais.",
        ],
      },
      {
        titre: "3. Vendre et faire vivre la région",
        paras: [
          "Les ressources qui dépassent les besoins du ménage partent au marché : riz, légumes, fruits, volailles, paniers, bois.",
          "Vendues, elles rapportent de l'argent aux familles : c'est ainsi que les ressources naturelles font vivre la région entière.",
        ],
        exemples: [
          "Le stand de maman Rasoa vend les légumes des champs voisins d'Antsirabe.",
          "La vanille de la SAVA, vendue au loin, fait vivre des milliers de familles.",
        ],
      },
    ],
  },
  motsCles: ["utilisation", "se nourrir", "se soigner", "construire", "vendre"],
  questionsRevision: [
    ["Cite les quatre grandes utilisations des ressources naturelles.", "Se nourrir, se soigner, construire et vendre."],
    ["Donne un exemple de construction avec une ressource naturelle.", "La maison en briques d'argile (ou en bois de forêt)."],
  ],
};

module.exports = { topics: [S11, S12, S13, S14, S15, S16, S17] };
