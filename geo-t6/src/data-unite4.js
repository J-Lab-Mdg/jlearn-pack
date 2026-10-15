// data-unite4.js — UNITÉ 4 : L'EXODE RURAL À MADAGASCAR (Séances 39 à 43)
// Contenu rédactionnel conforme au Programme d'études officiel T6 — Géographie (p. 175-176)
const TOTAL = 78;

const S39 = {
  numero: 39, total: TOTAL,
  titre: "Qu'est-ce que l'exode rural ?",
  theme: "L'exode rural à Madagascar",
  objectif: "Être capable d'expliquer la notion d'exode rural : le départ définitif des campagnes vers les villes.",
  image: { id: "geo6_exode_notion", legende: "L'exode rural : quitter la campagne pour vivre en ville, pour toujours." },
  scene: { file: "scene_s39_notion.jpg", mode: "document", legende: "Document : au village de grand-père Maitso, Tovo, le fils du voisin, charge ses sacs sur le taxi-brousse : il part vivre à Toamasina." },
  revisionOuverture: [
    ["Comment la population malgache évolue-t-elle ?", "Elle croît vite : la natalité dépasse la mortalité, elle double en une génération."],
    ["Cite deux conséquences des migrations dans les villes.", "La population urbaine augmente vite et les émigrants y sont parfois plus nombreux que les enfants du pays."],
  ],
  miseEnSituation: {
    texte: "Au village de grand-père Maitso, c'est le grand adieu. Tovo, le fils aîné du voisin, charge sur le taxi-brousse une valise, deux sacs de riz et une natte roulée. Il part à Toamasina, chez un oncle : il ne reviendra pas au village, sinon pour les grandes fêtes. Sa mère essuie une larme en silence. « De mon temps, on restait au village toute sa vie, soupire grand-père. Aujourd'hui, les jeunes partent et ne reviennent plus. C'est ça, l'exode rural. »",
    question: "En quoi le départ de Tovo est-il différent d'un simple voyage ?",
    ra: "Tovo ne part pas en visite : il quitte le village pour toujours, pour aller vivre en ville. Ce départ définitif de la campagne vers la ville s'appelle l'exode rural.",
    support: "Schéma de la notion d'exode rural (page Leçon)",
  },
  presentation: "Aujourd'hui, nous commençons l'unité 4 : l'exode rural à Madagascar. Nous allons apprendre : « Qu'est-ce que l'exode rural ? ». Après cette séance, vous serez capables d'expliquer cette notion et de la distinguer d'un simple trajet quotidien.",
  observation: "Observez bien le schéma : à gauche la campagne qui se vide, à droite la ville qui se remplit ; la grande flèche du départ est définitive.",
  supportObservation: "Schéma de la notion d'exode rural (page Leçon)",
  analyse: [
    ["Que fait Tovo ?", "Il quitte le village de ses parents pour aller vivre en ville, à Toamasina."],
    ["Reviendra-t-il vivre au village ?", "Non : son départ est définitif."],
    ["Comment s'appelle ce phénomène ?", "L'exode rural."],
    ["Dans quelle direction se fait ce départ ?", "De la campagne vers la ville."],
    ["Est-ce la même chose que le trajet des vendeurs de brèdes ?", "Non : eux reviennent chaque soir ; c'est le mouvement pendulaire, pas l'exode."],
    ["L'exode rural est-il une migration ?", "Oui : c'est une migration définitive, de la campagne vers la ville."],
  ],
  synthese: "Donc, l'exode rural est le départ définitif des habitants des campagnes vers les villes. Celui qui part ne revient plus vivre au village : il change de lieu de vie pour toujours.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que l'exode rural ?",
        "2. Dans quelle direction se fait l'exode rural ?",
        "3. Le départ de celui qui émigre est-il temporaire ou définitif ?",
        "4. Quelle est la différence avec le mouvement pendulaire ?",
      ],
      corrige: [
        "1. C'est **le départ définitif des habitants des campagnes vers les villes**.",
        "2. **De la campagne vers la ville**.",
        "3. Il est **définitif** : on ne revient plus vivre au village.",
        "4. Le trajet pendulaire est **un aller-retour quotidien** ; l'exode rural est **un départ pour toujours**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. L'exode rural va de la ville vers la campagne.",
        "2. Celui qui quitte définitivement son village pour la ville fait partie de l'exode rural.",
        "3. Le vendeur qui revient au village chaque soir fait partie de l'exode rural.",
        "4. L'exode rural vide les campagnes et remplit les villes.",
      ],
      corrige: [
        "1. **Faux** : il va de la campagne vers la ville.",
        "2. **Vrai** : c'est la définition même de l'exode rural.",
        "3. **Faux** : son trajet est pendulaire, il ne déménage pas.",
        "4. **Vrai** : c'est la double conséquence de l'exode.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : définitif — campagne — ville — exode rural.",
      items: [
        "Le départ ……… des habitants des campagnes vers les villes s'appelle l'……… .",
        "L'exode rural va de la ……… vers la ……… .",
        "Celui qui part ne revient plus vivre dans son ……… d'origine.",
      ],
      corrige: [
        "départ **définitif** / l'**exode rural** / de la **campagne** vers la **ville** / son **village**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. L'exode rural est un départ : A. pour les vacances — B. définitif — C. du soir",
        "2. Il se fait : A. de la ville vers la campagne — B. de la campagne vers la ville — C. d'un îlot à l'autre",
        "3. Le trajet quotidien domicile-travail s'appelle : A. le mouvement pendulaire — B. l'exode rural — C. la migration",
        "4. À cause de l'exode rural, les campagnes : A. se remplissent — B. se vident — C. ne changent pas",
        "5. À cause de l'exode rural, les villes : A. rapetissent — B. grossissent vite — C. disparaissent",
      ],
      corrige: [
        "1. Réponse **B** : définitif.",
        "2. Réponse **B** : de la campagne vers la ville.",
        "3. Réponse **A** : le mouvement pendulaire.",
        "4. Réponse **B** : elles se vident de leurs jeunes.",
        "5. Réponse **B** : elles grossissent vite.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Un départ définitif vers la ville",
        paras: [
          "L'exode rural, c'est le départ définitif des habitants des campagnes vers les villes. Celui qui part emporte ses affaires, quitte sa maison et ses champs, et ne revient plus vivre au village.",
          "C'est une migration : l'émigrant de la campagne devient un immigrant de la ville. Mais attention : la visite du samedi au village n'est pas de l'exode ; l'exode, c'est quand on change de vie pour toujours.",
        ],
        exemples: [
          "Tovo charge valise, sacs de riz et natte sur le taxi-brousse de Toamasina.",
          "Chaque année, des villages des Hautes Terres perdent plusieurs de leurs jeunes ainsi.",
        ],
      },
      {
        titre: "2. Ne pas confondre avec le va-et-vient quotidien",
        paras: [
          "L'exode rural n'est pas le mouvement pendulaire. Les vendeurs qui descendent vendre au marché de la ville remontent dormir au village le soir : eux ne changent pas de maison.",
          "Celui qui fait l'exode rural, au contraire, quitte sa maison de campagne pour toujours et va louer ou construire un logement en ville.",
        ],
        exemples: [
          "La cycliste qui revient chaque soir près de sa rizière n'émigre pas.",
          "Tovo, lui, ne reviendra qu'aux grandes fêtes familiales.",
        ],
      },
      {
        titre: "3. Un phénomène qui grandit",
        paras: [
          "À Madagascar, l'exode rural touche surtout les jeunes : fils de paysans sans terre, jeunes filles cherchant du travail, élèves partis étudier qui ne reviennent plus.",
          "Les villes malgaches grossissent ainsi de milliers de nouveaux arrivants chaque année, tandis que des hameaux perdent leurs habitants. Pourquoi tant de départs ? C'est ce que nous allons découvrir : les causes de l'exode rural.",
        ],
        exemples: [
          "Antananarivo déborde sur ses collines ; des villages de l'intérieur se vident.",
          "Grand-père Maitso compte les maisons fermées du village : de plus en plus nombreuses.",
        ],
      },
    ],
  },
  motsCles: ["exode rural", "départ définitif", "campagne", "ville", "migration"],
  questionsRevision: [
    ["Qu'est-ce que l'exode rural ?", "C'est le départ définitif des habitants des campagnes vers les villes."],
    ["Quelle différence avec le mouvement pendulaire ?", "Le pendulaire est un aller-retour quotidien ; l'exode est un départ définitif."],
  ],
};

const S40 = {
  numero: 40, total: TOTAL,
  titre: "Les causes de l'exode rural : la pauvreté et le chômage",
  theme: "L'exode rural à Madagascar",
  objectif: "Être capable d'expliquer comment la pauvreté et le chômage poussent les ruraux à partir vers les villes.",
  image: { id: "geo6_exode_pauvrete", legende: "Des champs trop petits, aucun autre travail : la pauvreté pousse au départ." },
  scene: { file: "scene_s40_pauvrete.jpg", mode: "document", legende: "Document : sur son minuscule lopin, Tovo récolte à peine deux sacs de riz : de quoi nourrir sa famille pendant un mois seulement." },
  revisionOuverture: [
    ["Qu'est-ce que l'exode rural ?", "C'est le départ définitif des habitants des campagnes vers les villes."],
    ["Quelle différence avec le mouvement pendulaire ?", "Le pendulaire est un aller-retour quotidien ; l'exode est un départ définitif."],
  ],
  miseEnSituation: {
    texte: "Avant de partir, Tovo montre son champ à Hery : un lopin si petit qu'on le traverse en dix pas. « Mon père a partagé sa terre entre nous cinq frères, explique-t-il. Mon lopin donne deux sacs de riz par an : de quoi manger un mois. Ici, pas d'usine, pas d'atelier, rien : la terre est le seul travail. Et elle ne nourrit plus. À Toamasina, mon cousin gagne de l'argent chaque semaine. »",
    question: "Pourquoi Tovo ne peut-il plus vivre de son village ?",
    ra: "Parce que son champ est trop petit pour nourrir sa famille et qu'aucun autre travail existe au village : c'est la pauvreté et le chômage, premières causes de l'exode rural.",
    support: "Schéma des causes : pauvreté et chômage (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les causes de l'exode rural : la pauvreté et le chômage ». Après cette séance, vous serez capables d'expliquer ces deux causes qui poussent les ruraux vers les villes.",
  observation: "Observez bien le schéma : un grand champ qui se partage en lopins de plus en plus petits, et un village sans usine ni atelier.",
  supportObservation: "Schéma des causes : pauvreté et chômage (page Leçon)",
  analyse: [
    ["Pourquoi le champ de Tovo est-il si petit ?", "Parce que la terre du père a été partagée entre les cinq frères : le morcellement."],
    ["De quoi le morcellement est-il la conséquence ?", "Des familles nombreuses : à chaque génération, les terres se re-partagent en parcelles plus petites."],
    ["Que donne ce petit champ ?", "Deux sacs de riz par an : pas de quoi nourrir une famille."],
    ["Y a-t-il un autre travail au village ?", "Non : ni usine, ni atelier, ni bureau : la terre est le seul emploi."],
    ["Comment s'appelle l'absence de travail ?", "Le chômage : les jeunes sont sans emploi."],
    ["Que vient chercher Tovo à Toamasina ?", "Un travail rémunéré : un salaire chaque semaine, pour vivre et aider sa famille."],
  ],
  synthese: "Donc, la pauvreté (des terres trop petites qui ne nourrissent plus) et le chômage (aucun travail autre que la terre) poussent les jeunes des campagnes vers les villes : ce sont les premières causes de l'exode rural.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Pourquoi les champs deviennent-ils de plus en plus petits ?",
        "2. Pourquoi parle-t-on de pauvreté à la campagne ?",
        "3. Qu'est-ce que le chômage ?",
        "4. Que viennent chercher les jeunes dans les villes ?",
      ],
      corrige: [
        "1. Parce que **les terres se partagent entre les enfants** à chaque génération : c'est le morcellement.",
        "2. Parce que **les récoltes ne nourrissent plus** les familles.",
        "3. C'est **l'absence de travail** pour ceux qui cherchent un emploi.",
        "4. **Un emploi et un salaire**, pour vivre et aider leur famille.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le morcellement des terres enrichit les paysans.",
        "2. Dans beaucoup de villages, la terre est le seul travail.",
        "3. La pauvreté pousse les jeunes à rester au village.",
        "4. Le chômage existe aussi à la campagne.",
      ],
      corrige: [
        "1. **Faux** : les parcelles trop petites appauvrissent les familles.",
        "2. **Vrai** : sans usine ni atelier, il n'y a pas d'autre emploi.",
        "3. **Faux** : elle les pousse à partir vers les villes.",
        "4. **Vrai** : les jeunes sans terre et sans emploi sont au chômage.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : morcellement — pauvreté — chômage — salaire.",
      items: [
        "Le partage des terres entre les enfants s'appelle le ……… .",
        "Quand les récoltes ne nourrissent plus, c'est la ……… .",
        "L'absence de travail, c'est le ……… .",
        "Les jeunes partent en ville chercher un emploi et un ……… .",
      ],
      corrige: [
        "le **morcellement** / la **pauvreté** / le **chômage** / un **salaire**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le champ de Tovo est petit parce que : A. il est paresseux — B. la terre a été partagée entre les frères — C. il pleut trop",
        "2. Au village, le seul travail est : A. la terre — B. l'usine — C. le bureau de poste",
        "3. La pauvreté pousse les jeunes : A. à partir — B. à rester — C. à dormir",
        "4. Le chômage, c'est : A. avoir un travail — B. chercher un travail sans en trouver — C. être à l'école",
        "5. En ville, le cousin de Tovo gagne : A. rien — B. de l'argent chaque semaine — C. des zébus",
      ],
      corrige: [
        "1. Réponse **B** : la terre a été partagée entre les cinq frères.",
        "2. Réponse **A** : la terre, l'agriculture.",
        "3. Réponse **A** : à partir vers les villes.",
        "4. Réponse **B** : chercher sans trouver.",
        "5. Réponse **B** : un salaire régulier.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Des terres qui ne nourrissent plus",
        paras: [
          "Dans les campagnes surpeuplées des Hautes Terres, la terre se partage entre les enfants à chaque génération : c'est le morcellement. Les champs, déjà petits, deviennent minuscules.",
          "Avec ces lopins de quelques pas de large, les récoltes ne nourrissent plus les familles : la pauvreté s'installe. Les mauvaises années — sécheresse, cyclone — la disette menace.",
        ],
        exemples: [
          "Le lopin de Tovo donne deux sacs de riz par an, à peine un mois de nourriture.",
          "Dans le village de grand-père, plusieurs familles ne mangent à leur faim qu'après la vente d'un zébu.",
        ],
      },
      {
        titre: "2. Aucun travail autre que la terre",
        paras: [
          "Au village, il n'y a ni usine, ni atelier, ni bureau : la terre est le seul employeur. Quand elle manque, le chômage frappe les jeunes.",
          "Sans emploi, sans salaire, un jeune ne peut ni se marier, ni construire une maison, ni aider ses parents. Il attend, ou il part.",
        ],
        exemples: [
          "Les jeunes du village passent leurs journées au bord de la route, sans travail.",
          "Tovo a essayé le petit commerce de légumes : le village est trop pauvre pour acheter.",
        ],
      },
      {
        titre: "3. La ville qui semble briller",
        paras: [
          "De loin, la ville brille : on y gagne de l'argent chaque semaine, on y trouve des écoles, l'électricité, les films.",
          "C'est de la pauvreté que l'on fuit, et la richesse que l'on croit trouver. Ce rêve pousse les jeunes sur les taxis-brousse : il fera aussi le désillusion de certains, que nous verrons plus loin.",
        ],
        exemples: [
          "Le cousin de Tovo envoie de l'argent à sa mère restée au village.",
          "Les récits des revenus de la ville tournent dans tous les villages.",
        ],
      },
    ],
  },
  motsCles: ["pauvreté", "chômage", "morcellement", "salaire", "causes"],
  questionsRevision: [
    ["Cite les deux premières causes de l'exode rural vues aujourd'hui.", "La pauvreté (terres trop petites) et le chômage (aucun autre travail)."],
    ["Qu'est-ce que le morcellement des terres ?", "Le partage des terres entre les enfants, qui les rend de plus en plus petites."],
  ],
};

const S41 = {
  numero: 41, total: TOTAL,
  titre: "Les causes de l'exode rural : l'insécurité et les problèmes fonciers",
  theme: "L'exode rural à Madagascar",
  objectif: "Être capable d'expliquer comment l'insécurité et les problèmes fonciers poussent les ruraux à quitter la campagne.",
  image: { id: "geo6_exode_insecurite", legende: "Insécurité et terres sans papiers : partir pour être tranquille." },
  scene: { file: "scene_s41_insecurite.jpg", mode: "document", legende: "Document : la nuit, au bord du feu, les jeunes du village veillent sur les troupeaux de zébus : les vols sont devenus fréquents." },
  revisionOuverture: [
    ["Cite les deux premières causes de l'exode rural vues aujourd'hui.", "La pauvreté (terres trop petites) et le chômage (aucun autre travail)."],
    ["Qu'est-ce que le morcellement des terres ?", "Le partage des terres entre les enfants, qui les rend de plus en plus petites."],
  ],
  miseEnSituation: {
    texte: "Autour du feu du soir, grand-père Maitso raconte, la voix grave : « L'année dernière, des voleurs ont emmené les zébus de trois familles, en une seule nuit. Depuis, nos jeunes veillent par tours près des troupeaux, jusqu'au matin. Ils sont fatigués, ils ont peur. » Et l'oncle Rivo ajoute un autre récit : son voisin cultivait depuis toujours un champ sans papier ; à la mort du père, des cousins sont venus reprendre la terre. Sans papiers, rien à faire. Le voisin est parti en ville.",
    question: "Comment l'insécurité et les problèmes de terre poussent-ils au départ ?",
    ra: "Les vols de zébus et les conflits de terre rendent la vie à la campagne difficile : beaucoup partent pour trouver la tranquillité ailleurs.",
    support: "Schéma des causes : insécurité et problèmes fonciers (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les causes de l'exode rural : l'insécurité et les problèmes fonciers ». Après cette séance, vous serez capables d'expliquer ces deux causes de l'exode rural.",
  observation: "Observez bien le schéma : d'un côté, la nuit et les voleurs de zébus ; de l'autre, une terre sans titre au centre d'un conflit de famille.",
  supportObservation: "Schéma des causes : insécurité et problèmes fonciers (page Leçon)",
  analyse: [
    ["Que risque-t-on la nuit dans certains campagnes ?", "Le vol des zébus par des bandes de voleurs."],
    ["Comment les villageois réagissent-ils ?", "Les jeunes veillent par tours près des troupeaux, jusqu'au matin."],
    ["Quelles sont les conséquences de ces veilles ?", "Les jeunes sont fatigués, ils ont peur, certains abandonnent."],
    ["Qu'est-ce qu'un problème foncier ?", "C'est un conflit à propos de la terre : sa possession, son héritage, ses limites."],
    ["Pourquoi le voisin de l'oncle Rivo a-t-il perdu son champ ?", "Il cultivait une terre sans papier ; à la mort du père, des cousins l'ont reprise."],
    ["Que fait-on quand on ne se sent plus chez soi ?", "On part : beaucoup rejoignent la ville pour vivre tranquilles."],
  ],
  synthese: "Donc, l'insécurité (vols de zébus, veilles épuisantes) et les problèmes fonciers (terres sans papiers, héritages disputés) poussent les ruraux vers les villes : ce sont d'autres causes de l'exode rural.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Que vole-t-on souvent dans les campagnes la nuit ?",
        "2. Comment les villageois protègent-ils leurs troupeaux ?",
        "3. Qu'est-ce qu'un problème foncier ?",
        "4. Pourquoi le voisin de l'oncle Rivo a-t-il perdu sa terre ?",
      ],
      corrige: [
        "1. **Les zébus**, par des bandes de voleurs.",
        "2. **Les jeunes veillent par tours** près des troupeaux.",
        "3. C'est **un conflit à propos de la terre** : possession, héritage, limites.",
        "4. Parce que **sa terre n'avait pas de papier** : les cousins l'ont reprise à la mort du père.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. L'insécurité concerne seulement les villes.",
        "2. Une terre sans papier peut être perdue lors d'un héritage.",
        "3. Les veilles contre les voleurs fatiguent les jeunes.",
        "4. Les problèmes fonciers et l'insécurité favorisent l'exode rural.",
      ],
      corrige: [
        "1. **Faux** : les campagnes connaissent aussi l'insécurité, comme les vols de zébus.",
        "2. **Vrai** : sans titre, difficile de prouver que la terre est à soi.",
        "3. **Vrai** : veiller toute la nuit épuise, avec l'école ou le travail le jour.",
        "4. **Vrai** : on part pour vivre tranquille.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : insécurité — zébus — foncier — papier.",
      items: [
        "Les vols de ……… créent l'……… dans les campagnes.",
        "Un conflit à propos de la terre est un problème ……… .",
        "Une terre sans ……… peut être perdue au partage de l'héritage.",
      ],
      corrige: [
        "vols de **zébus** / l'**insécurité** / problème **foncier** / sans **papier**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Les voleurs de bétail s'attaquent surtout : A. aux zébus — B. aux poules des écoles — C. aux taxis",
        "2. Contre les voleurs, les jeunes : A. dorment — B. veillent par tours — C. partent en pirogue",
        "3. Un problème foncier concerne : A. la terre — B. le ciel — C. la mer",
        "4. Une terre sans titre est : A. en sécurité — B. fragile — C. immortelle",
        "5. Face à l'insécurité, certains villageois : A. restent toujours — B. partent en ville — C. rient",
      ],
      corrige: [
        "1. Réponse **A** : aux zébus, la richesse des campagnes.",
        "2. Réponse **B** : ils montent la garde à tour de rôle.",
        "3. Réponse **A** : sa possession, son héritage, ses limites.",
        "4. Réponse **B** : fragile, elle peut être contestée.",
        "5. Réponse **B** : ils cherchent la tranquillité en ville.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. L'insécurité à la campagne",
        paras: [
          "Dans certaines régions, des bandes de voleurs attaquent les troupeaux : le vol de zébus est la grande peur des campagnes. En une nuit, une famille peut perdre toute sa richesse.",
          "Pour protéger les bêtes, les jeunes veillent par tours près des enclos, jusqu'au matin. Fatigués, inquiets, certains se lassent : ils partent vers des lieux plus calmes.",
        ],
        exemples: [
          "Trois familles du village de grand-père ont perdu leurs zébus en une nuit.",
          "Les veilleurs rentrent au petit matin, les yeux rouges de fatigue.",
        ],
      },
      {
        titre: "2. Les terres sans papiers",
        paras: [
          "Beaucoup de paysans cultivent des terres reçues des parents, sans aucun papier qui prouve qu'elles sont à eux. C'est la coutume, mais c'est fragile.",
          "À la mort du père, les héritiers se disputent ; des cousins éloignés revendiquent la terre ; sans titre écrit, le cultivateur perd son bien du jour au lendemain.",
        ],
        exemples: [
          "Le voisin de l'oncle Rivo a cultivé quarante ans un champ… repris par des cousins après l'enterrement.",
          "Deux frères ne se parlent plus depuis le partage de la rizière paternelle.",
        ],
      },
      {
        titre: "3. Partir pour être tranquille",
        paras: [
          "Insécurité la nuit, terres menacées le jour : quand on ne se sent plus chez soi, le village devient invivable.",
          "Alors on part. La ville attire aussi parce qu'on y échappe aux veilles et aux conflits de terre : on y est anonyme, on y refait sa vie. C'est une nouvelle cause de l'exode rural.",
        ],
        exemples: [
          "Le voisin de l'oncle Rivo a tout quitté pour devenir gardien à Toamasina.",
          "« En ville, au moins, on dort », dit un jeune veilleur du village.",
        ],
      },
    ],
  },
  motsCles: ["insécurité", "vol de zébus", "problème foncier", "héritage", "titre de terre"],
  questionsRevision: [
    ["Comment l'insécurité pousse-t-elle à l'exode rural ?", "Les vols et les veilles fatiguent et effrayent les jeunes, qui partent pour être tranquilles."],
    ["Pourquoi les terres sans papier sont-elles fragiles ?", "Sans titre, on ne peut pas prouver qu'elles sont à soi : elles peuvent être reprises."],
  ],
};

const S42 = {
  numero: 42, total: TOTAL,
  titre: "Les causes de l'exode rural : le manque d'infrastructures",
  theme: "L'exode rural à Madagascar",
  objectif: "Être capable d'expliquer comment le manque d'infrastructures pousse les ruraux à partir vers les villes.",
  image: { id: "geo6_exode_infrastructures", legende: "Ce qui manque au village, ce que la ville offre : le grand écart." },
  scene: { file: "scene_s42_infrastructures.jpg", mode: "document", legende: "Document : la piste du village coupée par la pluie : en saison des pluies, le taxi-brousse ne passe plus pendant des semaines." },
  revisionOuverture: [
    ["Comment l'insécurité pousse-t-elle à l'exode rural ?", "Les vols et les veilles fatiguent et effrayent les jeunes, qui partent pour être tranquilles."],
    ["Pourquoi les terres sans papier sont-elles fragiles ?", "Sans titre, on ne peut pas prouver qu'elles sont à soi : elles peuvent être reprises."],
  ],
  miseEnSituation: {
    texte: "Miora relit la lettre de son grand frère Rado, parti à Antananarivo : « Ici, l'électricité ne s'éteint jamais. Le collège est à dix minutes à pied, le dispensaire soigne jour et nuit, l'eau coule au robinet. » Miora pense au village : la piste coupée trois mois par an par la pluie, le collège à trente kilomètres, la pension trop chère, le dispensaire souvent sans médicaments, la lampe à pétrole. « Comment veux-tu que les gens restent ? » soupire grand-père.",
    question: "Pourquoi le manque d'infrastructures pousse-t-il les familles à partir ?",
    ra: "Parce que sans routes, sans écoles, sans eau et sans soins, la vie au village devient très difficile : les familles partent chercher le confort de la ville.",
    support: "Schéma des causes : le manque d'infrastructures (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les causes de l'exode rural : le manque d'infrastructures ». Après cette séance, vous serez capables de citer ce qui manque aux campagnes et ce que cela provoque.",
  observation: "Observez bien le schéma : à gauche, le village et ses manques ; à droite, la ville et ses équipements ; entre les deux, l'envie de partir.",
  supportObservation: "Schéma des causes : le manque d'infrastructures (page Leçon)",
  analyse: [
    ["Qu'est-ce qu'une infrastructure ?", "C'est un équipement collectif : route, école, dispensaire, adduction d'eau, électricité."],
    ["Que arrive-t-il à la piste du village en saison des pluies ?", "Elle est coupée : le taxi-brousse ne passe plus pendant des semaines."],
    ["Où se trouve le collège le plus proche ?", "À trente kilomètres : trop loin, et la pension coûte cher."],
    ["Comment s'éclaire-t-on au village ?", "À la lampe à pétrole, quand l'électricité manque."],
    ["Que trouve-t-on en ville ?", "Écoles, dispensaires, eau au robinet, électricité, routes goudronnées."],
    ["Que décident beaucoup de familles face à ce grand écart ?", "Elles partent en ville, pour l'école des enfants et les soins de tous."],
  ],
  synthese: "Donc, le manque d'infrastructures — routes coupées, écoles lointaines, eau rare, soins absents, pas d'électricité — rend la vie à la campagne difficile : c'est une grande cause de l'exode rural.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Cite trois infrastructures qui manquent souvent aux campagnes.",
        "2. Que se passe-t-il quand la piste est coupée ?",
        "3. Pourquoi les familles veulent-elles habiter près d'un collège ?",
        "4. Que gagne-t-on à vivre dans une ville équipée ?",
      ],
      corrige: [
        "1. Par exemple : **une route praticable**, **un collège proche**, **l'électricité** (aussi l'eau courante, le dispensaire).",
        "2. **Le taxi-brousse ne passe plus** : impossible de vendre ses produits ni de voyager.",
        "3. Pour que **les enfants puissent étudier** sans parcourir des kilomètres ni payer une pension.",
        "4. **Des écoles, des soins, de l'eau, de l'électricité**, le confort quotidien.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Une route est une infrastructure.",
        "2. En ville, l'électricité et l'eau coulent souvent au robinet.",
        "3. Le manque d'infrastructures retient les familles au village.",
        "4. La piste coupée empêche de vendre les récoltes.",
      ],
      corrige: [
        "1. **Vrai** : comme l'école, le dispensaire, l'adduction d'eau.",
        "2. **Vrai** : c'est le confort que les ruraux envient.",
        "3. **Faux** : il les pousse au contraire à partir.",
        "4. **Vrai** : le taxi-brousse ne passe plus.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : infrastructure — électricité — collège — pension.",
      items: [
        "Une route, une école, un dispensaire sont des ……… .",
        "Au village, la lampe à pétrole remplace souvent l'……… .",
        "Pour étudier après le primaire, il faut rejoindre le ……… de la ville.",
        "Loger ses enfants loin de chez soi coûte cher : c'est la ……… .",
      ],
      corrige: [
        "des **infrastructures** / l'**électricité** / le **collège** / la **pension**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Une infrastructure, c'est : A. un équipement collectif — B. un jouet — C. une maladie",
        "2. En saison des pluies, la piste du village est : A. goudronnée — B. coupée — C. un fleuve",
        "3. Le confort de la ville comprend : A. l'eau au robinet — B. les zébus — C. le silence",
        "4. Face au manque d'infrastructures, les familles : A. restent toujours — B. partent en ville — C. construisent des usines",
        "5. Le dispensaire du village est souvent : A. plein de médecins — B. sans médicaments — C. fermé pour toujours",
      ],
      corrige: [
        "1. Réponse **A** : un équipement collectif.",
        "2. Réponse **B** : coupée par la boue et les crues.",
        "3. Réponse **A** : l'eau, l'électricité, les écoles, les soins.",
        "4. Réponse **B** : elles cherchent le confort urbain.",
        "5. Réponse **B** : mal approvisionné, il faut aller en ville.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Ce qui manque au village",
        paras: [
          "Beaucoup de campagnes malgaches manquent de tout : la piste se coupe à la première pluie, le collège est à des kilomètres, le dispensaire n'a pas toujours des médicaments, l'eau se puise à la source, la nuit tombe sans électricité.",
          "Ces équipements collectifs — routes, écoles, eau, électricité, santé — s'appellent les infrastructures. Sans elles, chaque geste de la vie devient un effort.",
        ],
        exemples: [
          "Trois mois par an, le village de grand-père est coupé du marché d'Antsirabe.",
          "Les malades graves partent en taxi-brousse pour l'hôpital de la ville.",
        ],
      },
      {
        titre: "2. Ce que la ville offre",
        paras: [
          "La ville, elle, brille de toutes ses infrastructures : écoles de tous les niveaux, hôpitaux, eau courante, électricité sans coupure, routes goudronnées, marchés, banques, distractions.",
          "Pour les familles rurales, la ville offre ce que le village promet à peine : l'école pour les enfants, les soins pour les anciens, le confort pour tous.",
        ],
        exemples: [
          "La lettre de Rado : électricité, collège à pied, dispensaire jour et nuit.",
          "Les villes attirent comme des aimants les familles lassées des efforts quotidiens.",
        ],
      },
      {
        titre: "3. Le grand écart qui vide les campagnes",
        paras: [
          "Plus l'écart grandit entre des campagnes nues et des villes équipées, plus les départs se multiplient.",
          "Ainsi s'additionnent les causes de l'exode rural : pauvreté, chômage, insécurité, problèmes de terre, manque d'infrastructures. La séance suivante regarde ce que ces départs laissent derrière eux.",
        ],
        exemples: [
          "« Comment veux-tu que les gens restent ? » dit grand-père en repliant la lettre.",
          "Le taxi-brousse du vendredi emporte chaque semaine une nouvelle famille.",
        ],
      },
    ],
  },
  motsCles: ["infrastructure", "route", "école", "eau", "électricité"],
  questionsRevision: [
    ["Cite trois infrastructures qui manquent souvent aux campagnes.", "Les routes praticables, les collèges proches, l'eau courante (aussi l'électricité, les dispensaires)."],
    ["Pourquoi le manque d'infrastructures fait-il partir les familles ?", "Parce que la ville offre écoles, soins et confort que le village n'a pas."],
  ],
};

const S43 = {
  numero: 43, total: TOTAL,
  titre: "Les conséquences de l'exode rural en milieu rural : la main-d'œuvre manque",
  theme: "L'exode rural à Madagascar",
  objectif: "Être capable de montrer que l'exode rural prive les campagnes de leur main-d'œuvre : les champs se délaissent.",
  image: { id: "geo6_exode_main_oeuvre", legende: "Les bras partis, les champs se délaissent." },
  scene: { file: "scene_s43_main_oeuvre.jpg", mode: "document", legende: "Document : la rizière du voisin parti en ville est envahie par les herbes hautes : plus personne ne la cultive." },
  revisionOuverture: [
    ["Cite trois infrastructures qui manquent souvent aux campagnes.", "Les routes praticables, les collèges proches, l'eau courante (aussi l'électricité, les dispensaires)."],
    ["Cite trois causes de l'exode rural.", "La pauvreté, le chômage, l'insécurité, les problèmes fonciers, le manque d'infrastructures."],
  ],
  miseEnSituation: {
    texte: "Dimanche au village. Hery et Miora accompagnent grand-père voir les rizières. Celle du voisin parti à Toamasina est jaune d'herbes sauvages : plus personne pour labourer, repiquer, récolter. Un peu plus loin, l'oncle Rivo, seul, traîne sa houe : « Avant, ses deux fils aidaient. Ils sont en ville. À soixante ans, je n'ai plus la force de tout faire. » Le soir, on apprend que l'école du hameau voisin ferme : il ne reste que neuf élèves.",
    question: "Que laisse derrière lui le départ des jeunes ?",
    ra: "Les campagnes perdent leur main-d'œuvre : sans bras, les champs se délaissent, les récoltes baissent, les services ferment.",
    support: "Schéma : la main-d'œuvre manque (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les conséquences de l'exode rural en milieu rural : la main-d'œuvre manque ». Après cette séance, vous serez capables de décrire ce que l'exode rural fait aux campagnes.",
  observation: "Observez bien le schéma : le champ cultivé d'avant, plein de bras ; le champ d'aujourd'hui, seul et envahi d'herbes.",
  supportObservation: "Schéma : la main-d'œuvre manque (page Leçon)",
  analyse: [
    ["Qu'est-ce que la main-d'œuvre ?", "Ce sont les travailleurs, les bras capables de cultiver et de produire."],
    ["Qui partait autrefois aux champs ?", "Les jeunes et les hommes dans la force de l'âge."],
    ["Que devient la rizière du voisin parti ?", "Elle est envahie par les herbes sauvages : plus personne ne la cultive."],
    ["Pourquoi l'oncle Rivo peine-t-il ?", "Ses fils sont partis : il cultive seul, à soixante ans."],
    ["Que devient un champ délaissé ?", "Il se dégrade : les digues cèdent, la terre s'appauvrit, les herbes prennent le dessus."],
    ["Quelles autres fermetures menace le village ?", "L'école, le dispensaire, les petits commerces : sans habitants, tout ferme."],
  ],
  synthese: "Donc, l'exode rural enlève aux campagnes leur main-d'œuvre : sans les jeunes, les champs se délaissent, les récoltes baissent, et les services ferment les uns après les autres.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que la main-d'œuvre ?",
        "2. Que devient un champ quand ses cultivateurs partent ?",
        "3. Pourquoi l'oncle Rivo cultive-t-il seul ?",
        "4. Que risque l'école d'un hameau qui se vide ?",
      ],
      corrige: [
        "1. Ce sont **les travailleurs**, les bras qui cultivent et produisent.",
        "2. Il est **délaissé** : herbes sauvages, digues cassées, plus de récoltes.",
        "3. Parce que **ses deux fils sont partis** travailler en ville.",
        "4. Elle risque de **fermer** : avec neuf élèves, plus de classe possible.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. L'exode rural enlève les bras valides aux campagnes.",
        "2. Un champ délaissé donne de meilleures récoltes.",
        "3. Les anciens restés seuls ont du mal à tout cultiver.",
        "4. Le départ des jeunes ne change rien pour l'école du village.",
      ],
      corrige: [
        "1. **Vrai** : ce sont surtout les jeunes qui partent.",
        "2. **Faux** : herbes, digues cassées, terre fatiguée : la récolte disparaît.",
        "3. **Vrai** : comme l'oncle Rivo, soixante ans et seul.",
        "4. **Faux** : moins d'élèves, c'est la fermeture de la classe.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : main-d'œuvre — délaissé — jeunes — fermer.",
      items: [
        "Les travailleurs d'une région forment sa ……… .",
        "Un champ sans cultivateur est un champ ……… .",
        "Ce sont surtout les ……… qui quittent les campagnes.",
        "Une école sans élèves risque de ……… .",
      ],
      corrige: [
        "sa **main-d'œuvre** / un champ **délaissé** / les **jeunes** / de **fermer**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. La rizière du voisin parti est : A. magnifiquement cultivée — B. envahie d'herbes — C. devenue une usine",
        "2. L'oncle Rivo cultive seul car : A. il aime ça — B. ses fils sont en ville — C. il a cent ans",
        "3. Un champ délaissé voit ses digues : A. fleurir — B. céder — C. briller",
        "4. Le hameau voisin perd : A. son école — B. ses zébus — C. sa pluie",
        "5. Sans main-d'œuvre, les récoltes : A. doublent — B. baissent — C. chantent",
      ],
      corrige: [
        "1. Réponse **B** : herbes sauvages et abandon.",
        "2. Réponse **B** : ses deux fils ont émigré.",
        "3. Réponse **B** : elles cèdent, l'eau s'échappe.",
        "4. Réponse **A** : neuf élèves, la classe ferme.",
        "5. Réponse **B** : personne pour semer et récolter.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Les bras valides partent",
        paras: [
          "Ce sont les jeunes et les adultes dans la force de l'âge qui partent : eux qui labouraient, repiquaient, récoltaient, construisaient les digues.",
          "Il reste les anciens, les femmes et les enfants. La main-d'œuvre manque partout : pour les champs, pour les troupeaux, pour les chantiers du village.",
        ],
        exemples: [
          "L'oncle Rivo, soixante ans, traîne seul sa houe dans la rizière familiale.",
          "Le jour du repiquage, on cherche en vain une dizaine de bras pour aider.",
        ],
      },
      {
        titre: "2. Les champs se délaissent",
        paras: [
          "Sans bras, les champs les plus éloignés sont abandonnés les premiers : herbes sauvages, digues cassées, canaux bouchés.",
          "Petit à petit, la terre se dégrade. Les récoltes de tout le village baissent : moins de riz pour manger, moins de produits pour vendre.",
        ],
        exemples: [
          "La rizière du voisin de grand-père, jaune d'herbes, ne donne plus rien.",
          "Le canal d'irrigation, plus entretenu, déborde à la première pluie.",
        ],
      },
      {
        titre: "3. Un village qui s'éteint",
        paras: [
          "Quand les habitants partent, les services suivent : la classe ferme faute d'élèves, le petit commerce ferme faute de clients, le dispensaire réduit ses jours.",
          "Le village s'éteint à petit feu. Et plus il s'éteint, plus ceux qui restent veulent partir : c'est le début d'un cercle vicieux, que nous verrons à la séance suivante.",
        ],
        exemples: [
          "L'école du hameau voisin ferme : il ne restait que neuf élèves.",
          "L'épicerie du carrefour a baissé son rideau l'année dernière.",
        ],
      },
    ],
  },
  motsCles: ["conséquence", "main-d'œuvre", "champ délaissé", "récoltes", "fermeture"],
  questionsRevision: [
    ["Quelle est la première conséquence de l'exode rural pour les campagnes ?", "La main-d'œuvre manque : les bras valides sont partis."],
    ["Que deviennent les champs sans cultivateurs ?", "Ils se délaissent : herbes, digues cassées, récoltes en baisse."],
  ],
};

module.exports = { topics: [S39, S40, S41, S42, S43] };
