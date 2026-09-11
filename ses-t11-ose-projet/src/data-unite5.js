// ============================================================
// Unité V — Sciences politiques et droit (PE T11 série OSE — 25 heures)
// RAS 1 : Evaluer les caractéristiques du pouvoir politique
// RAS 2 : Déterminer la hiérarchie des textes (sources du droit malgache)
// Découpage : 11 séances de cours + 1 révision + 1 sujet d'examen
// Valeurs : Responsabilité, Justice et équité
// ============================================================

const U = {
  num: "V",
  titre: "Sciences politiques et droit",
  ras: "Evaluer les caractéristiques du pouvoir politique · Déterminer la hiérarchie des textes et les sources du droit malgache",
  valeurs: "Responsabilité, Justice et équité",
  duree: "25 heures",
  themes: [
    "L'État : définition et caractéristiques",
    "Les rôles sociaux de l'État",
    "Les rôles économiques de l'État",
    "Les régimes politiques : monarchie et république",
    "La démocratie : principes et fonctionnement",
    "L'État de droit et la séparation des pouvoirs",
    "La Constitution et les institutions",
    "Les libertés publiques",
    "Le droit coutumier à Madagascar",
    "Les lois et les règlements",
    "La hiérarchie des sources du droit",
  ],
  topics: [
    // ---------------------------------------------------------
    // SÉANCE 58 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "L'État : définition et caractéristiques",
      theme: "Sciences politiques et droit",
      ras: "Evaluer les caractéristiques du pouvoir politique",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "définir l'État et identifier ses éléments constitutifs",
      supportMeta: "Documents institutionnels, carte du territoire, cahier",
      revision: [
        ["Qu'est-ce que le contrôle social ?", "L'ensemble des moyens par lesquels la société fait respecter les normes."],
        ["Cite une fonction de la sanction.", "Rappeler la norme, dissuader, réparer, protéger ou réinsérer."],
      ],
      mise: [
        "Qui délivre la carte d'identité, entretient la route nationale et juge un vol ?",
        "L'État, par ses administrations : il exerce un pouvoir que personne d'autre ne détient sur le territoire.",
      ],
      observation: "les documents institutionnels et la carte du territoire",
      observationSupport: "Documents institutionnels, carte du territoire national, affichés ou distribués",
      technAna: "Étude de document, recherche et travail de groupe",
      qa: [
        ["Qu'est-ce que l'État ?", "Un ensemble d'institutions qui exercent le pouvoir souverain sur une population et un territoire déterminés."],
        ["Quels sont les éléments constitutifs de l'État ?", "Un territoire, une population, des institutions et la souveraineté."],
        ["Qu'est-ce que la souveraineté ?", "Le pouvoir suprême de l'État : il n'est soumis à aucune autre autorité à l'intérieur, et il est indépendant à l'extérieur."],
        ["Quelle différence y a-t-il entre État et nation ?", "La nation est une communauté humaine qui partage une histoire et une culture ; l'État est l'organisation politique qui exerce le pouvoir."],
        ["Qu'est-ce que le pouvoir politique ?", "La capacité d'obtenir l'obéissance et de prendre des décisions valables pour l'ensemble de la société."],
        ["Qu'est-ce que la légitimité ?", "La reconnaissance du pouvoir comme juste et fondé : un pouvoir légitime est accepté, il n'a pas besoin de contraindre en permanence."],
        ["Qu'entend-on par force publique ?", "Les moyens de contrainte dont l'État dispose — police, armée, justice — et dont il détient l'usage exclusif."],
        ["L'État est-il la seule organisation à exercer un pouvoir ?", "Non : familles, entreprises, associations exercent une autorité, mais aucune ne détient la souveraineté ni le monopole de la contrainte légitime."],
      ],
      synthese: "Donc, l'État est l'ensemble des institutions qui exercent un pouvoir souverain sur un territoire et une population. Il se compose de quatre éléments : territoire, population, institutions, souveraineté. Il détient la force publique et prend des décisions qui s'imposent à tous.",
      motsCles: ["État", "territoire", "population", "souveraineté", "institution", "légitimité", "force publique"],
      image: { file: "t11_u5_etat.png", legende: "Figure 50 — Les quatre éléments constitutifs de l'État." },
      contenu: [
        {
          sousTitre: "1. Un pouvoir sur un territoire",
          texte: "L'État n'existe que sur un espace déterminé, dont les frontières le séparent des autres.",
          liste: [
            "Le territoire : terre, eaux intérieures et espace aérien.",
            "Les frontières délimitent la compétence de l'État.",
            "Le pouvoir de l'État s'exerce sur tous ceux qui s'y trouvent.",
          ],
        },
        {
          sousTitre: "2. Une population",
          texte: "L'État s'adresse à un ensemble de personnes : ses ressortissants.",
          liste: [
            "La nationalité rattache la personne à l'État.",
            "Elle ouvre des droits : protection, vote, accès aux emplois publics.",
            "Elle crée des devoirs : respect des lois, défense du pays.",
          ],
        },
        {
          sousTitre: "3. Des institutions",
          texte: "L'État n'est pas une personne : il agit par des institutions organisées.",
          liste: [
            "Le chef de l'État et le Gouvernement conduisent l'action publique.",
            "Le Parlement vote la loi.",
            "Les tribunaux rendent la justice.",
            "L'administration exécute les décisions au quotidien.",
          ],
        },
        {
          sousTitre: "4. La souveraineté",
          texte: "Ce qui distingue l'État de toute autre organisation : son pouvoir est suprême.",
          liste: [
            "À l'intérieur : aucune autorité ne lui est supérieure.",
            "À l'extérieur : il traite d'égal à égal avec les autres États.",
            "Elle s'exprime par la Constitution, la loi et la force publique.",
          ],
        },
        {
          sousTitre: "5. Pouvoir, autorité et légitimité",
          texte: "L'efficacité de l'État tient moins à sa force qu'à la reconnaissance dont il jouit.",
          liste: [
            "La force contraint, mais ne dure pas.",
            "La légitimité fait accepter la décision sans contrainte.",
            "Un pouvoir légitime est un pouvoir consenti, fondé sur des règles connues.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "L'État est…", opts: ["un ensemble d'institutions exerçant un pouvoir souverain", "une entreprise", "une association privée"], ok: 0, expl: "Il détient la souveraineté sur un territoire et une population." },
          { q: "Parmi ces éléments, lequel est un élément constitutif de l'État ?", opts: ["la souveraineté", "le chiffre d'affaires", "la mode vestimentaire"], ok: 0, expl: "Avec le territoire, la population et les institutions." },
          { q: "La souveraineté est…", opts: ["le pouvoir suprême de l'État", "un impôt", "une élection"], ok: 0, expl: "Aucune autorité ne lui est supérieure à l'intérieur." },
          { q: "La légitimité est…", opts: ["la reconnaissance du pouvoir comme juste", "la force brute", "une sanction"], ok: 0, expl: "Un pouvoir légitime est accepté sans contrainte permanente." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une association peut exercer la souveraineté.", rep: false, expl: "Seul l'État détient un pouvoir souverain." },
          { txt: "La nationalité rattache la personne à l'État.", rep: true, expl: "Elle ouvre des droits et crée des devoirs." },
          { txt: "L'État agit par l'intermédiaire d'institutions.", rep: true, expl: "Gouvernement, Parlement, tribunaux, administration." },
          { txt: "La force suffit à elle seule à fonder durablement un pouvoir.", rep: false, expl: "Sans légitimité, la contrainte ne dure pas." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis l'État.", r: "C'est un ensemble d'institutions qui exercent le pouvoir souverain sur une population et un territoire déterminés." },
          { q: "Cite les quatre éléments constitutifs de l'État.", r: "Un territoire, une population, des institutions et la souveraineté." },
          { q: "Quelle différence y a-t-il entre État et nation ?", r: "La nation est une communauté qui partage une histoire et une culture ; l'État est l'organisation politique qui exerce le pouvoir souverain." },
          { q: "Pourquoi la légitimité est-elle plus efficace que la force ?", r: "Parce qu'un pouvoir reconnu comme juste est accepté sans contrainte permanente, alors que la force seule ne dure pas." },
        ]},
        { type: "appariement", consigne: "Relie chaque notion à sa définition.", pointsPar: 1, items: [
          { g: ["Territoire", "Population", "Souveraineté", "Légitimité"], d: ["Ensemble des ressortissants", "Pouvoir suprême de l'État", "Reconnaissance du pouvoir comme juste", "Espace où s'exerce le pouvoir"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 59 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les rôles sociaux de l'État",
      theme: "Sciences politiques et droit",
      ras: "Evaluer les caractéristiques du pouvoir politique",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "identifier et expliquer les rôles sociaux de l'État",
      supportMeta: "Documents sur les services publics, étude de cas, cahier",
      revision: [
        ["Qu'est-ce que l'État ?", "Un ensemble d'institutions exerçant un pouvoir souverain sur un territoire et une population."],
        ["Cite deux éléments constitutifs de l'État.", "Le territoire, la population, les institutions ou la souveraineté."],
      ],
      mise: [
        "Qui construit l'école du village, paie les enseignants et vaccine les enfants ?",
        "L'État, au titre de ses rôles sociaux : instruire, soigner et protéger la population.",
      ],
      observation: "les documents présentant les services publics de la localité",
      observationSupport: "Documents sur les services publics : école, dispensaire, adduction d'eau, sécurité",
      technAna: "Étude de document, recherche et travail de groupe",
      qa: [
        ["Qu'appelle-t-on les rôles sociaux de l'État ?", "Les missions par lesquelles l'État assure la protection, l'instruction et le bien-être de la population."],
        ["Quel est le premier rôle social ?", "La sécurité : protéger les personnes et les biens, par la police, l'armée et la justice."],
        ["Quel rôle joue l'État dans l'éducation ?", "Il construit les écoles, forme et rémunère les enseignants, définit les programmes et délivre les diplômes."],
        ["Quel rôle joue-t-il dans la santé ?", "Il construit et équipe les centres de santé, mène les campagnes de vaccination et de prévention, forme les soignants."],
        ["Comment intervient-il face à la pauvreté ?", "Par la protection sociale : aides aux familles démunies, bourses, secours d'urgence, soutien aux personnes âgées."],
        ["Que fait-il pour l'eau, l'électricité et les routes ?", "Il planifie, finance et contrôle ces services, dont il confie parfois la gestion à des entreprises publiques ou délégataires."],
        ["Comment ces missions sont-elles financées ?", "Principalement par l'impôt et les taxes, ainsi que par l'emprunt et l'aide extérieure."],
        ["L'État peut-il tout faire seul ?", "Non : il travaille avec les communes, les associations, les communautés et les familles, chacune tenant une part de la responsabilité."],
      ],
      synthese: "Donc, l'État assume des rôles sociaux : sécurité, justice, éducation, santé, protection sociale et services essentiels. Ces missions sont financées par l'impôt et mises en œuvre par des services publics, le plus souvent en partenariat avec les communes et les associations.",
      motsCles: ["rôle social", "service public", "sécurité", "éducation", "santé", "protection sociale", "impôt"],
      image: { file: "t11_u5_sociaux.png", legende: "Figure 51 — Les rôles sociaux de l'État." },
      contenu: [
        {
          sousTitre: "1. Protéger",
          texte: "La première mission de l'État est d'assurer la sécurité des personnes et des biens.",
          liste: [
            "La police et la gendarmerie maintiennent l'ordre public.",
            "L'armée défend le territoire.",
            "La justice sanctionne les atteintes aux personnes et aux biens.",
            "La sécurité civile intervient lors des catastrophes.",
          ],
        },
        {
          sousTitre: "2. Instruire",
          texte: "L'éducation est un droit que l'État doit rendre effectif.",
          liste: [
            "Construction et équipement des écoles.",
            "Formation et rémunération des enseignants.",
            "Définition des programmes et délivrance des diplômes.",
            "Bourses et cantines scolaires pour les élèves éloignés ou démunis.",
          ],
        },
        {
          sousTitre: "3. Soigner",
          texte: "La santé publique relève de la responsabilité de l'État.",
          liste: [
            "Centres de santé, hôpitaux et dispensaires.",
            "Campagnes de vaccination et de prévention.",
            "Formation des personnels soignants.",
            "Lutte contre les épidémies et contrôle des médicaments.",
          ],
        },
        {
          sousTitre: "4. Réduire les inégalités",
          texte: "L'État corrige les écarts que le marché ne réduit pas de lui-même.",
          liste: [
            "Aides aux familles les plus démunies.",
            "Soutien aux personnes âgées et aux personnes en situation de handicap.",
            "Secours d'urgence en cas de catastrophe.",
            "Péréquation entre les régions les mieux dotées et les autres.",
          ],
        },
        {
          sousTitre: "5. Financer et organiser",
          texte: "Ces missions ont un coût, et supposent une organisation.",
          liste: [
            "L'impôt et les taxes en sont la principale ressource.",
            "L'emprunt finance les investissements lourds.",
            "Les services publics mettent en œuvre l'action de l'État.",
            "Les communes, associations et communautés relaient l'action publique.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Parmi ces missions, laquelle est un rôle social de l'État ?", opts: ["l'éducation", "la vente de produits", "la publicité"], ok: 0, expl: "Avec la santé, la sécurité et la protection sociale." },
          { q: "Les services publics sont principalement financés par…", opts: ["l'impôt", "les dons privés", "la loterie"], ok: 0, expl: "L'emprunt et l'aide extérieure complètent ce financement." },
          { q: "La vaccination relève du rôle…", opts: ["sanitaire de l'État", "militaire", "électoral"], ok: 0, expl: "C'est une mission de santé publique." },
          { q: "Les aides aux familles démunies relèvent de…", opts: ["la protection sociale", "la politique étrangère", "la fiscalité locale"], ok: 0, expl: "Elles visent à réduire les inégalités." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "L'État n'intervient ni dans l'éducation ni dans la santé.", rep: false, expl: "Ce sont deux de ses rôles sociaux majeurs." },
          { txt: "La sécurité des personnes est une mission de l'État.", rep: true, expl: "Police, gendarmerie, armée et justice." },
          { txt: "Les services publics se financent principalement par l'impôt.", rep: true, expl: "L'emprunt finance surtout les investissements lourds." },
          { txt: "L'État agit seul, sans relais local.", rep: false, expl: "Communes, associations et communautés participent à l'action publique." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite quatre rôles sociaux de l'État.", r: "Assurer la sécurité, instruire par l'école, soigner par les centres de santé et la vaccination, et réduire les inégalités par la protection sociale." },
          { q: "Comment l'État intervient-il dans le domaine de la santé ?", r: "Il construit et équipe les centres de santé, mène les campagnes de vaccination et de prévention, forme les soignants et lutte contre les épidémies." },
          { q: "Comment ces missions sont-elles financées ?", r: "Principalement par l'impôt et les taxes, complétés par l'emprunt pour les investissements lourds et par l'aide extérieure." },
          { q: "Pourquoi l'État ne peut-il pas agir seul ?", r: "Parce que les communes, les associations, les communautés et les familles tiennent chacune une part de la responsabilité dans la mise en œuvre des services." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "La police, la gendarmerie et la justice assurent la", suite: "sécurité" },
          { debut: "Les bourses et les cantines facilitent la", suite: "scolarisation" },
          { debut: "Les campagnes de vaccination relèvent de la santé", suite: "publique" },
          { debut: "L'impôt finance les services", suite: "publics" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 60 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les rôles économiques de l'État",
      theme: "Sciences politiques et droit",
      ras: "Evaluer les caractéristiques du pouvoir politique",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "identifier les rôles économiques de l'État et les relier aux défaillances du marché",
      supportMeta: "Documents sur les infrastructures et la régulation, étude de cas, cahier",
      revision: [
        ["Cite deux rôles sociaux de l'État.", "La sécurité, l'éducation, la santé ou la protection sociale."],
        ["Comment l'État finance-t-il ses missions ?", "Principalement par l'impôt, complété par l'emprunt et l'aide extérieure."],
      ],
      mise: [
        "Qui finance la route nationale, fixe les règles du commerce et contrôle la qualité des médicaments ?",
        "L'État : il fournit les infrastructures, pose le cadre juridique et corrige les défaillances du marché.",
      ],
      observation: "les documents présentant les infrastructures et les organes de régulation",
      observationSupport: "Documents sur les infrastructures, les marchés publics et les organes de régulation",
      technAna: "Étude de document, recherche et travail de groupe",
      qa: [
        ["Qu'est-ce qu'un rôle économique de l'État ?", "Une mission par laquelle l'État oriente, encadre ou soutient l'activité économique du pays."],
        ["Quel est le premier rôle économique ?", "Fournir les infrastructures que le secteur privé ne construit pas : routes, ports, réseaux d'eau et d'électricité."],
        ["Comment l'État fixe-t-il le cadre juridique ?", "En édictant les règles du commerce : droit des contrats, droit de propriété, droit de la concurrence, droit du travail."],
        ["Comment corrige-t-il les défaillances du marché ?", "En taxant les pollutions, en fournissant les biens collectifs, en imposant la transparence et en régulant les marchés concentrés."],
        ["Quels sont les objectifs de la politique économique ?", "La croissance, l'emploi, la stabilité des prix et l'équilibre extérieur."],
        ["Comment l'État régule-t-il le secteur financier ?", "Par la banque centrale, qui conduit la politique monétaire, et par les autorités chargées du contrôle des banques et des marchés."],
        ["L'État peut-il être producteur ?", "Oui : il crée des entreprises publiques quand le service est essentiel ou que le privé ne s'y engage pas — eau, électricité, transports."],
        ["Quelles sont les limites de son action économique ?", "Le coût de financement, la lourdeur administrative, le risque d'inefficacité et la nécessité de laisser l'initiative privée se déployer."],
      ],
      synthese: "Donc, l'État joue un rôle économique majeur : il fournit les infrastructures, fixe le cadre juridique de l'activité, corrige les défaillances du marché et poursuit la croissance, l'emploi, la stabilité des prix et l'équilibre extérieur. Il peut aussi produire directement, par des entreprises publiques.",
      motsCles: ["rôle économique", "infrastructure", "cadre juridique", "régulation", "politique économique", "entreprise publique", "concurrence"],
      image: { file: "t11_u5_eco.png", legende: "Figure 52 — Les rôles économiques de l'État." },
      contenu: [
        {
          sousTitre: "1. Fournir les infrastructures",
          texte: "Sans équipements collectifs, aucune activité économique ne se développe.",
          liste: [
            "Routes, ponts, ports et pistes rurales.",
            "Réseaux d'eau potable et d'électricité.",
            "Écoles et centres de formation qui forment la main-d'œuvre.",
            "Ces investissements sont trop lourds pour un acteur privé isolé.",
          ],
        },
        {
          sousTitre: "2. Fixer le cadre juridique",
          texte: "Le marché ne fonctionne qu'à l'intérieur de règles définies et appliquées.",
          liste: [
            "Le droit des contrats garantit la parole donnée.",
            "Le droit de propriété sécurise l'investissement.",
            "Le droit de la concurrence sanctionne les ententes et les abus.",
            "Le droit du travail fixe les conditions d'emploi.",
          ],
        },
        {
          sousTitre: "3. Corriger les défaillances du marché",
          texte: "L'État répare ce que le prix ne dit pas, comme nous l'avons vu au chapitre du marché.",
          liste: [
            "Externalités négatives : taxes et normes environnementales.",
            "Biens collectifs : éclairage, sécurité, défense.",
            "Asymétrie d'information : étiquetage, normes, contrôles.",
            "Concurrence imparfaite : contrôle des concentrations et des ententes.",
          ],
        },
        {
          sousTitre: "4. Conduire la politique économique",
          texte: "L'État agit sur la conjoncture et sur le long terme.",
          liste: [
            "Politique budgétaire : dépense publique et impôt.",
            "Politique monétaire : taux d'intérêt et monnaie, conduite par la banque centrale.",
            "Quatre objectifs : croissance, emploi, stabilité des prix, équilibre extérieur.",
            "Arbitrage permanent entre relance et rigueur.",
          ],
        },
        {
          sousTitre: "5. Produire et réguler",
          texte: "L'État peut aller jusqu'à produire lui-même ou déléguer.",
          liste: [
            "Entreprises publiques : eau, électricité, transports.",
            "Délégation de service public à un opérateur privé sous contrôle.",
            "Autorités de régulation pour les secteurs sensibles.",
            "Limites : coût, lourdeur, risque d'inefficacité.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Parmi ces actions, laquelle est un rôle économique de l'État ?", opts: ["construire une route nationale", "vendre des fruits au marché", "ouvrir un compte bancaire"], ok: 0, expl: "Les infrastructures sont une mission de l'État." },
          { q: "Le droit de la concurrence sert à…", opts: ["sanctionner les ententes et les abus", "supprimer les marchés", "fixer les salaires"], ok: 0, expl: "Il maintient le jeu de la concurrence." },
          { q: "Une taxe sur la pollution corrige…", opts: ["une externalité négative", "une asymétrie d'information", "un monopole naturel"], ok: 0, expl: "Elle fait payer le coût imposé à la collectivité." },
          { q: "La politique monétaire est conduite par…", opts: ["la banque centrale", "le Parlement", "le tribunal"], ok: 0, expl: "Elle joue sur les taux d'intérêt et la monnaie." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "L'État peut créer des entreprises publiques.", rep: true, expl: "Quand le service est essentiel ou que le privé ne s'y engage pas." },
          { txt: "Le marché peut fonctionner sans aucun cadre juridique.", rep: false, expl: "Les contrats, la propriété et la concurrence doivent être garantis." },
          { txt: "La stabilité des prix est un objectif de la politique économique.", rep: true, expl: "Avec la croissance, l'emploi et l'équilibre extérieur." },
          { txt: "L'action économique de l'État n'a aucune limite.", rep: false, expl: "Coût de financement, lourdeur et risque d'inefficacité la bornent." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite trois rôles économiques de l'État.", r: "Fournir les infrastructures, fixer le cadre juridique de l'activité et corriger les défaillances du marché — auxquels s'ajoutent la conduite de la politique économique et la production par des entreprises publiques." },
          { q: "Comment l'État corrige-t-il une externalité négative ?", r: "En taxant la pollution ou en imposant des normes d'émission, de façon que le pollueur supporte le coût imposé à la collectivité." },
          { q: "Quels sont les deux volets de la politique économique ?", r: "La politique budgétaire, qui joue sur la dépense publique et l'impôt, et la politique monétaire, conduite par la banque centrale sur les taux et la monnaie." },
          { q: "Cite deux limites de l'action économique de l'État.", r: "Son coût de financement par l'impôt ou l'emprunt, et la lourdeur administrative avec le risque d'inefficacité." },
        ]},
        { type: "appariement", consigne: "Relie chaque action à sa catégorie.", pointsPar: 1, items: [
          { g: ["Construire un port", "Édicter le droit des contrats", "Taxer une pollution", "Créer une entreprise publique"], d: ["Régulation", "Correction d'une externalité", "Infrastructure", "Cadre juridique"], pairs: [[0, 2], [1, 3], [2, 1], [3, 0]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 61 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les régimes politiques : monarchie et république",
      theme: "Sciences politiques et droit",
      ras: "Evaluer les caractéristiques du pouvoir politique",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "distinguer monarchie et république et caractériser les régimes démocratiques",
      supportMeta: "Documents institutionnels, textes comparatifs, cahier",
      revision: [
        ["Cite deux rôles économiques de l'État.", "Fournir les infrastructures, fixer le cadre juridique, corriger les défaillances du marché."],
        ["Quels sont les quatre objectifs de la politique économique ?", "La croissance, l'emploi, la stabilité des prix et l'équilibre extérieur."],
      ],
      mise: [
        "Dans un pays, le chef de l'État règne jusqu'à sa mort et transmet le pouvoir à son fils ; dans un autre, il est élu pour cinq ans. Quelle différence ?",
        "Le premier est une monarchie, le second une république : la manière dont le pouvoir est transmis et exercé définit le régime.",
      ],
      observation: "les documents institutionnels et textes comparatifs étudiés en classe",
      observationSupport: "Documents institutionnels et textes comparatifs sur les régimes politiques",
      technAna: "Étude de document, recherche et travail de groupe",
      qa: [
        ["Qu'est-ce qu'un régime politique ?", "La manière dont le pouvoir politique est organisé, exercé et transmis dans un État."],
        ["Qu'est-ce qu'une monarchie ?", "Un régime dans lequel le pouvoir appartient à une seule personne — roi, reine, prince — qui l'exerce à vie et le transmet le plus souvent par hérédité."],
        ["Qu'est-ce qu'une monarchie absolue ?", "Une monarchie dans laquelle le souverain concentre tous les pouvoirs, sans contre-pouvoir ni assemblée élue."],
        ["Qu'est-ce qu'une monarchie constitutionnelle ?", "Une monarchie où le souverain règne selon une Constitution qui limite son pouvoir et le partage avec un Parlement élu."],
        ["Qu'est-ce qu'une république ?", "Un régime dans lequel le pouvoir n'appartient à personne en propre : les responsables sont élus pour une durée limitée."],
        ["Qu'est-ce qu'une république démocratique ?", "Une république où les responsables sont élus au suffrage universel, où les pouvoirs sont séparés et les libertés garanties."],
        ["Quel est le régime de Madagascar ?", "Madagascar est une République : les responsables sont élus et le pouvoir est organisé par une Constitution."],
        ["Un régime peut-il changer ?", "Oui : les révolutions, les coups d'État, les réformes ou les élections modifient le régime. Les transitions sont des moments sensibles."],
      ],
      synthese: "Donc, le régime politique décrit la manière dont le pouvoir est organisé et transmis. Dans une monarchie, le pouvoir s'exerce à vie et se transmet souvent par hérédité ; dans une république, il est exercé par des responsables élus pour une durée limitée. Madagascar est une République.",
      motsCles: ["régime politique", "monarchie", "monarchie absolue", "monarchie constitutionnelle", "république", "élection", "Constitution"],
      image: { file: "t11_u5_regimes.png", legende: "Figure 53 — Monarchie et république : deux manières d'organiser le pouvoir." },
      contenu: [
        {
          sousTitre: "1. Ce que décrit un régime",
          texte: "Trois questions permettent de caractériser n'importe quel régime.",
          liste: [
            "Qui exerce le pouvoir ?",
            "Comment y accède-t-on : hérédité, élection, force ?",
            "Pendant combien de temps : à vie ou pour un mandat limité ?",
          ],
        },
        {
          sousTitre: "2. La monarchie",
          texte: "Le pouvoir appartient à une seule personne, qui l'exerce à vie.",
          liste: [
            "La transmission est le plus souvent héréditaire.",
            "Monarchie absolue : le souverain décide seul.",
            "Monarchie constitutionnelle : il règne selon une Constitution, le Parlement légifère.",
            "Exemple contemporain : plusieurs pays d'Europe et d'Asie conservent une monarchie constitutionnelle.",
          ],
        },
        {
          sousTitre: "3. La république",
          texte: "Le pouvoir n'appartient à personne en propre : il est délégué pour un temps.",
          liste: [
            "Les responsables sont élus, directement ou indirectement.",
            "Le mandat est limité dans le temps.",
            "Les décisions sont prises selon des procédures prévues par la Constitution.",
            "Aucune fonction n'est transmise par hérédité.",
          ],
        },
        {
          sousTitre: "4. La république démocratique",
          texte: "Toutes les républiques ne sont pas démocratiques : certaines conditions s'ajoutent.",
          liste: [
            "Élections libres, régulières et à scrutin sincère.",
            "Suffrage universel : tous les citoyens votent.",
            "Séparation des pouvoirs et contrôle réciproque.",
            "Libertés publiques garanties : expression, presse, réunion.",
          ],
        },
        {
          sousTitre: "5. Madagascar : une République",
          texte: "Le pays s'organise selon les principes républicains.",
          liste: [
            "Les responsables sont élus pour une durée déterminée.",
            "Le pouvoir est organisé par une Constitution.",
            "Les institutions nationales et locales sont issues d'élections ou de nominations encadrées.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Dans une monarchie, le pouvoir s'exerce…", opts: ["à vie, souvent transmis par hérédité", "pendant un mandat de cinq ans", "par tirage au sort"], ok: 0, expl: "C'est le trait distinctif de la monarchie." },
          { q: "Dans une république, les responsables sont…", opts: ["élus pour une durée limitée", "désignés par hérédité", "choisis par l'armée"], ok: 0, expl: "Le pouvoir est délégué, jamais possédé." },
          { q: "Une monarchie constitutionnelle est une monarchie où…", opts: ["le pouvoir du souverain est limité par une Constitution", "le roi décide seul", "il n'y a pas de loi"], ok: 0, expl: "Le Parlement légifère et le Gouvernement agit." },
          { q: "Madagascar est…", opts: ["une République", "une monarchie", "un empire"], ok: 0, expl: "Les responsables sont élus et le pouvoir est organisé par une Constitution." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Toutes les républiques sont automatiquement démocratiques.", rep: false, expl: "Il faut en plus des élections libres, la séparation des pouvoirs et les libertés publiques." },
          { txt: "Le suffrage universel signifie que tous les citoyens votent.", rep: true, expl: "C'est une condition de la démocratie." },
          { txt: "Une monarchie peut être limitée par une Constitution.", rep: true, expl: "C'est la monarchie constitutionnelle ou parlementaire." },
          { txt: "Un régime politique ne peut jamais changer.", rep: false, expl: "Réformes, élections, révolutions et coups d'État le modifient." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis un régime politique.", r: "C'est la manière dont le pouvoir politique est organisé, exercé et transmis dans un État." },
          { q: "Quelle différence y a-t-il entre monarchie et république ?", r: "Dans une monarchie, le pouvoir s'exerce à vie et se transmet souvent par hérédité ; dans une république, il est exercé par des responsables élus pour une durée limitée." },
          { q: "Qu'est-ce qu'une monarchie constitutionnelle ?", r: "C'est une monarchie où le souverain règne selon une Constitution qui limite son pouvoir et le partage avec un Parlement élu." },
          { q: "Cite trois conditions d'une république démocratique.", r: "Des élections libres et régulières au suffrage universel, la séparation des pouvoirs, et la garantie des libertés publiques." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["monarchie", "république", "élection", "Constitution", "universel"], items: [
          { phrase: "Le pouvoir transmis par hérédité caractérise la _________.", mot: "monarchie" },
          { phrase: "Dans une _________, les responsables sont élus pour une durée limitée.", mot: "république" },
          { phrase: "Le suffrage _________ permet à tous les citoyens de voter.", mot: "universel" },
          { phrase: "La _________ limite et organise le pouvoir du souverain.", mot: "Constitution" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 62 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La démocratie : principes et fonctionnement",
      theme: "Sciences politiques et droit",
      ras: "Evaluer les caractéristiques du pouvoir politique",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "définir la démocratie et décrire son fonctionnement et les devoirs du citoyen",
      supportMeta: "Documents sur les élections, mises en situation, cahier",
      revision: [
        ["Qu'est-ce qu'une république ?", "Un régime où le pouvoir est exercé par des responsables élus pour une durée limitée."],
        ["Qu'est-ce qu'une monarchie constitutionnelle ?", "Une monarchie où la Constitution limite le pouvoir du souverain."],
      ],
      mise: [
        "Comment une classe choisit-elle son délégué sans que personne ne s'impose ?",
        "En votant, à bulletin secret, après avoir écouté les candidats : c'est le principe même de la démocratie.",
      ],
      observation: "les documents sur les élections et les mises en situation",
      observationSupport: "Documents sur le déroulement des élections, mises en situation de vote",
      technAna: "Étude de document, jeu de rôle et débat dirigé",
      qa: [
        ["Qu'est-ce que la démocratie ?", "Un régime dans lequel le pouvoir appartient au peuple, qui l'exerce par des représentants élus et par le débat public."],
        ["Qu'entend-on par souveraineté nationale ?", "Le principe selon lequel le pouvoir vient de la nation tout entière : aucun groupe ni individu ne peut se l'approprier."],
        ["Qu'est-ce que le suffrage universel ?", "Le droit de vote reconnu à tous les citoyens, sans distinction de fortune, d'origine ni d'instruction."],
        ["Quelles sont les conditions d'une élection démocratique ?", "Un scrutin libre — on vote sans contrainte —, secret — le vote de chacun reste inconnu —, sincère — les résultats ne sont pas falsifiés — et régulier."],
        ["Qu'est-ce que la démocratie représentative ?", "Le système où les citoyens élisent des représentants qui décident à leur place pendant la durée du mandat."],
        ["Qu'est-ce que la démocratie directe ?", "Le système où le peuple décide lui-même, par référendum ou par assemblée, sans intermédiaire."],
        ["Quels devoirs la démocratie impose-t-elle au citoyen ?", "Voter, s'informer, respecter la loi et les résultats du scrutin, accepter le débat contradictoire, participer à la vie de la cité."],
        ["Pourquoi la liberté d'expression est-elle indispensable ?", "Parce que sans débat public, sans presse libre et sans opposition, le choix des électeurs n'est pas éclairé et le contrôle disparaît."],
      ],
      synthese: "Donc, la démocratie est un régime où le pouvoir appartient au peuple, exercé par des représentants élus au suffrage universel lors d'élections libres, secrètes et sincères. Elle suppose la liberté d'expression, le pluralisme et le respect des résultats, et elle impose au citoyen de s'informer et de participer.",
      motsCles: ["démocratie", "souveraineté nationale", "suffrage universel", "élection", "pluralisme", "débat public", "citoyenneté"],
      image: { file: "t11_u5_democratie.jpg", legende: "Figure 54 — Le scrutin : voter librement pour choisir ses représentants." },
      contenu: [
        {
          sousTitre: "1. Le pouvoir au peuple",
          texte: "En démocratie, personne ne possède le pouvoir : il est confié, puis rendu.",
          liste: [
            "La souveraineté appartient à la nation tout entière.",
            "Les responsables exercent un mandat, jamais une propriété.",
            "Le scrutin est le moment où le peuple tranche pacifiquement.",
          ],
        },
        {
          sousTitre: "2. Le suffrage universel",
          texte: "Le droit de vote est reconnu à tous les citoyens, sans condition de fortune ni d'instruction.",
          liste: [
            "Chaque voix compte également : une personne, une voix.",
            "Le vote est personnel : on ne vote pas à la place d'un autre.",
            "Il est libre : aucune pression ne doit s'exercer sur l'électeur.",
          ],
        },
        {
          sousTitre: "3. Un scrutin libre, secret et sincère",
          texte: "Trois conditions transforment un vote en acte démocratique.",
          liste: [
            "Libre : l'électeur n'est ni contraint ni acheté.",
            "Secret : personne ne peut savoir ce qu'il a voté.",
            "Sincère : les résultats sont comptés fidèlement et publiés.",
            "Régulier : les élections ont lieu à intervalles prévus.",
          ],
        },
        {
          sousTitre: "4. Représentative et directe",
          texte: "La démocratie prend deux formes principales.",
          liste: [
            "Représentative : les citoyens élisent des représentants qui décident pendant le mandat.",
            "Directe : le peuple tranche lui-même par référendum ou en assemblée.",
            "La plupart des démocraties combinent les deux.",
          ],
        },
        {
          sousTitre: "5. Les devoirs du citoyen",
          texte: "La démocratie ne se réduit pas à un droit de vote : elle exige une participation.",
          liste: [
            "S'informer avant de voter, auprès de sources diverses.",
            "Respecter la loi et les résultats du scrutin.",
            "Accepter le débat contradictoire et la critique.",
            "Participer : association, syndicat, assemblée locale, service civique.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La démocratie est un régime où le pouvoir…", opts: ["appartient au peuple", "appartient à un roi", "appartient à une entreprise"], ok: 0, expl: "Il est exercé par des représentants élus." },
          { q: "Le suffrage universel signifie que…", opts: ["tous les citoyens votent", "seuls les riches votent", "seuls les hommes votent"], ok: 0, expl: "Sans distinction de fortune, d'origine ni d'instruction." },
          { q: "Un scrutin démocratique est…", opts: ["libre, secret et sincère", "imposé par la force", "réservé à une élite"], ok: 0, expl: "Ces trois conditions garantissent le choix des électeurs." },
          { q: "Un devoir du citoyen en démocratie est de…", opts: ["s'informer avant de voter", "acheter des voix", "ignorer la loi"], ok: 0, expl: "Avec le respect des résultats et la participation à la vie de la cité." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La souveraineté nationale peut être appropriée par un groupe.", rep: false, expl: "Elle appartient à la nation tout entière." },
          { txt: "Le vote secret protège l'électeur des pressions.", rep: true, expl: "Personne ne peut savoir ce qu'il a voté." },
          { txt: "La liberté d'expression est indispensable à la démocratie.", rep: true, expl: "Sans débat public, le choix des électeurs n'est pas éclairé." },
          { txt: "En démocratie, les élections ont lieu sans intervalle prévu.", rep: false, expl: "Elles sont régulières : les mandats ont une durée définie." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis la démocratie.", r: "C'est un régime dans lequel le pouvoir appartient au peuple, qui l'exerce par des représentants élus et par le débat public." },
          { q: "Cite trois conditions d'une élection démocratique.", r: "Le scrutin doit être libre — sans contrainte —, secret — le vote de chacun reste inconnu — et sincère — les résultats ne sont pas falsifiés." },
          { q: "Quelle différence y a-t-il entre démocratie représentative et démocratie directe ?", r: "Dans la représentative, les citoyens élisent des représentants qui décident pendant le mandat ; dans la directe, le peuple tranche lui-même par référendum ou en assemblée." },
          { q: "Cite trois devoirs du citoyen en démocratie.", r: "S'informer avant de voter, respecter la loi et les résultats du scrutin, et participer à la vie de la cité par le débat ou l'engagement associatif." },
        ]},
        { type: "appariement", consigne: "Relie chaque principe à sa définition.", pointsPar: 1, items: [
          { g: ["Suffrage universel", "Scrutin secret", "Démocratie directe", "Souveraineté nationale"], d: ["Personne ne connaît le vote émis", "Le peuple décide sans intermédiaire", "Le pouvoir vient de la nation entière", "Tous les citoyens votent"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 63 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "L'État de droit et la séparation des pouvoirs",
      theme: "Sciences politiques et droit",
      ras: "Evaluer les caractéristiques du pouvoir politique",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "définir l'État de droit et exposer le principe de séparation des pouvoirs",
      supportMeta: "Textes de loi, documents sur les institutions, cahier",
      revision: [
        ["Qu'est-ce que la démocratie ?", "Un régime où le pouvoir appartient au peuple, exercé par des représentants élus."],
        ["Cite une condition d'une élection démocratique.", "Le scrutin doit être libre, secret et sincère."],
      ],
      mise: [
        "Un ministre peut-il décider seul d'emprisonner un citoyen sans jugement ?",
        "Non : dans un État de droit, le pouvoir est limité par la règle et contrôlé par d'autres pouvoirs.",
      ],
      observation: "les textes de loi et documents sur les institutions étudiés en classe",
      observationSupport: "Textes de loi et documents sur l'organisation des pouvoirs publics",
      technAna: "Étude de document, recherche et travail de groupe",
      qa: [
        ["Qu'est-ce que l'État de droit ?", "Un État dans lequel la puissance publique est soumise au droit : les gouvernants eux-mêmes doivent respecter des règles connues, stables et contrôlées."],
        ["Quelles sont les conditions de l'État de droit ?", "Des règles écrites et publiées, l'égalité de tous devant la loi, l'indépendance de la justice et l'existence de recours contre les décisions publiques."],
        ["Qu'est-ce que la séparation des pouvoirs ?", "Le principe selon lequel les trois fonctions de l'État — légiférer, exécuter, juger — sont confiées à des organes distincts."],
        ["Quel est le rôle du pouvoir législatif ?", "Il vote la loi, contrôle l'action du Gouvernement et représente la nation : c'est le Parlement."],
        ["Quel est le rôle du pouvoir exécutif ?", "Il dirige l'action de l'État et fait exécuter la loi : chef de l'État, Gouvernement et administration."],
        ["Quel est le rôle du pouvoir judiciaire ?", "Il juge les litiges et sanctionne les infractions : ce sont les tribunaux, qui doivent être indépendants."],
        ["Comment les pouvoirs se limitent-ils mutuellement ?", "Le Parlement contrôle le Gouvernement, le juge contrôle l'administration, et le Gouvernement peut être censuré : aucun pouvoir ne peut tout faire seul."],
        ["Pourquoi cette séparation protège-t-elle le citoyen ?", "Parce qu'elle empêche la concentration : celui qui fait la loi ne la juge pas, et celui qui l'exécute ne la fabrique pas."],
      ],
      synthese: "Donc, l'État de droit soumet la puissance publique à des règles connues, stables et contrôlées. La séparation des pouvoirs confie à trois organes distincts le soin de légiférer, d'exécuter et de juger, afin qu'aucun ne concentre l'ensemble du pouvoir.",
      motsCles: ["État de droit", "séparation des pouvoirs", "pouvoir législatif", "pouvoir exécutif", "pouvoir judiciaire", "indépendance de la justice", "recours"],
      image: { file: "t11_u5_etat_droit.png", legende: "Figure 55 — L'État de droit et la séparation des trois pouvoirs." },
      contenu: [
        {
          sousTitre: "1. Le pouvoir soumis à la règle",
          texte: "L'État de droit n'est pas l'État qui a des lois, mais celui qui leur obéit le premier.",
          liste: [
            "Les règles sont écrites, publiées et accessibles à tous.",
            "Elles sont stables : on ne les change pas au gré des circonstances.",
            "Elles s'appliquent également à tous, gouvernants compris.",
          ],
        },
        {
          sousTitre: "2. Les conditions de l'État de droit",
          texte: "Quatre exigences permettent de vérifier qu'un État est bien un État de droit.",
          liste: [
            "L'égalité devant la loi, sans passe-droit ni privilège.",
            "L'indépendance des juges, à l'abri des pressions.",
            "L'existence de recours : tout citoyen peut contester une décision.",
            "Le respect des droits fondamentaux garantis par la Constitution.",
          ],
        },
        {
          sousTitre: "3. Les trois pouvoirs",
          texte: "La séparation distingue trois fonctions complémentaires.",
          liste: [
            "Législatif : le Parlement vote la loi.",
            "Exécutif : le Gouvernement et l'administration la mettent en œuvre.",
            "Judiciaire : les tribunaux tranchent les litiges et sanctionnent.",
            "Chacun reste à sa place : c'est la garantie contre l'arbitraire.",
          ],
        },
        {
          sousTitre: "4. Des pouvoirs qui se limitent",
          texte: "La séparation n'est pas un cloisonnement : les pouvoirs se contrôlent réciproquement.",
          liste: [
            "Le Parlement vote la loi et contrôle le Gouvernement.",
            "Le juge sanctionne les excès de l'administration.",
            "Le Gouvernement engage sa responsabilité devant le Parlement.",
            "Cet équilibre oblige chaque organe à rendre des comptes.",
          ],
        },
        {
          sousTitre: "5. Pourquoi c'est nécessaire",
          texte: "Concentrer tous les pouvoirs dans les mêmes mains ouvre la porte à l'arbitraire.",
          liste: [
            "Celui qui fait la loi ne doit pas la juger.",
            "Celui qui l'exécute ne doit pas la fabriquer.",
            "Le citoyen dispose ainsi d'un recours contre la décision qui le touche.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "L'État de droit est un État où…", opts: ["la puissance publique est soumise au droit", "le chef décide seul", "la loi est secrète"], ok: 0, expl: "Les gouvernants eux-mêmes doivent respecter la règle." },
          { q: "Le pouvoir qui vote la loi est le pouvoir…", opts: ["législatif", "exécutif", "judiciaire"], ok: 0, expl: "C'est le rôle du Parlement." },
          { q: "Le pouvoir qui juge les litiges est le pouvoir…", opts: ["judiciaire", "législatif", "exécutif"], ok: 0, expl: "Ce sont les tribunaux." },
          { q: "Une condition de l'État de droit est…", opts: ["l'indépendance de la justice", "l'absence de recours", "le secret des décisions"], ok: 0, expl: "Avec l'égalité devant la loi et l'existence de recours." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Dans un État de droit, les gouvernants sont soumis à la loi.", rep: true, expl: "C'est la définition même de l'État de droit." },
          { txt: "Le Gouvernement peut juger les affaires pénales à la place des tribunaux.", rep: false, expl: "Le pouvoir judiciaire est indépendant." },
          { txt: "Le Parlement contrôle l'action du Gouvernement.", rep: true, expl: "Il vote la loi et met en jeu la responsabilité gouvernementale." },
          { txt: "Concentrer tous les pouvoirs protège le citoyen.", rep: false, expl: "C'est l'inverse : la concentration ouvre la porte à l'arbitraire." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis l'État de droit.", r: "C'est un État dans lequel la puissance publique est soumise au droit : les gouvernants eux-mêmes doivent respecter des règles connues, stables et contrôlées." },
          { q: "Cite les trois pouvoirs et le rôle de chacun.", r: "Le pouvoir législatif vote la loi, l'exécutif la met en œuvre et dirige l'État, le judiciaire juge les litiges et sanctionne les infractions." },
          { q: "Cite trois conditions de l'État de droit.", r: "L'égalité de tous devant la loi, l'indépendance de la justice et l'existence de recours contre les décisions publiques." },
          { q: "Comment les pouvoirs se limitent-ils mutuellement ?", r: "Le Parlement contrôle le Gouvernement, le juge sanctionne les excès de l'administration, et le Gouvernement engage sa responsabilité devant le Parlement." },
        ]},
        { type: "appariement", consigne: "Relie chaque pouvoir à son rôle.", pointsPar: 1, items: [
          { g: ["Le Parlement", "Le Gouvernement", "Le tribunal", "L'administration"], d: ["Dirige l'action publique", "Juge les litiges", "Exécute les décisions au quotidien", "Vote la loi"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 64 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La Constitution et les institutions",
      theme: "Sciences politiques et droit",
      ras: "Evaluer les caractéristiques du pouvoir politique",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "définir la Constitution et relier ce texte aux institutions qu'il crée",
      supportMeta: "Textes constitutionnels, organigrammes institutionnels, cahier",
      revision: [
        ["Qu'est-ce que l'État de droit ?", "Un État où la puissance publique est soumise au droit."],
        ["Cite les trois pouvoirs et leur rôle.", "Le législatif vote la loi, l'exécutif l'applique, le judiciaire juge."],
      ],
      mise: [
        "Quel texte fixe la durée du mandat du président et crée les institutions du pays ?",
        "La Constitution : c'est la règle suprême, celle que toutes les autres doivent respecter.",
      ],
      observation: "les textes constitutionnels et organigrammes étudiés en classe",
      observationSupport: "Textes constitutionnels et organigramme des institutions, affichés ou distribués",
      technAna: "Étude de document, recherche et travail de groupe",
      qa: [
        ["Qu'est-ce qu'une Constitution ?", "Le texte fondamental qui organise les pouvoirs publics, fixe leurs compétences et garantit les droits des citoyens."],
        ["Pourquoi est-elle la norme suprême ?", "Parce qu'aucune autre règle ne peut la contredire : toute loi contraire doit être écartée."],
        ["Que contient-elle ?", "L'organisation des pouvoirs, les droits et libertés, les modalités d'élection et la procédure de révision."],
        ["Qu'est-ce qu'une institution ?", "Un organisme créé par la Constitution ou la loi, doté de compétences et chargé d'une mission publique."],
        ["Quelles institutions la Constitution crée-t-elle ?", "La Présidence, le Gouvernement, le Parlement, les juridictions, et souvent des institutions de contrôle et de médiation."],
        ["Comment la Constitution peut-elle être modifiée ?", "Par une procédure de révision plus lourde que celle d'une loi ordinaire : vote à majorité qualifiée, ou référendum selon les cas."],
        ["Quel lien y a-t-il entre Constitution et État de droit ?", "La Constitution est la première règle de l'État de droit : elle encadre le pouvoir et permet de contrôler sa conformité."],
        ["Qu'est-ce qu'un contrôle de constitutionnalité ?", "La vérification, par une juridiction compétente, qu'une loi respecte bien la Constitution avant ou après sa promulgation."],
      ],
      synthese: "Donc, la Constitution est le texte suprême qui organise les pouvoirs, crée les institutions et garantit les droits. Aucune règle ne peut la contredire, et sa révision obéit à une procédure plus exigeante que celle d'une loi ordinaire.",
      motsCles: ["Constitution", "norme suprême", "institution", "révision", "droits fondamentaux", "contrôle de constitutionnalité", "Parlement"],
      image: { file: "t11_u5_institutions.png", legende: "Figure 56 — De la Constitution aux institutions : l'organisation des pouvoirs." },
      contenu: [
        {
          sousTitre: "1. Le texte fondamental",
          texte: "La Constitution n'est pas une loi parmi d'autres : elle est la règle des règles.",
          liste: [
            "Elle est adoptée selon une procédure solennelle.",
            "Elle s'impose à tous, gouvernants et gouvernés.",
            "Aucune loi ni aucun règlement ne peut la contredire.",
          ],
        },
        {
          sousTitre: "2. Ce qu'elle contient",
          texte: "Trois ensembles de dispositions la composent.",
          liste: [
            "L'organisation des pouvoirs : qui décide, comment, pour combien de temps.",
            "Les droits et libertés des citoyens.",
            "La procédure de révision, qui permet de la faire évoluer.",
          ],
        },
        {
          sousTitre: "3. Les institutions créées",
          texte: "La Constitution ne se contente pas de poser des règles : elle crée des organes.",
          liste: [
            "La Présidence de la République et le Gouvernement : l'exécutif.",
            "Le Parlement : le législatif, qui vote la loi.",
            "Les juridictions : le judiciaire, qui tranche les litiges.",
            "Des institutions de contrôle et de médiation, selon les pays.",
          ],
        },
        {
          sousTitre: "4. La révision",
          texte: "Une Constitution est faite pour durer, mais elle peut être modifiée.",
          liste: [
            "La procédure est plus lourde que pour une loi ordinaire.",
            "Elle exige souvent une majorité qualifiée au Parlement.",
            "Le référendum peut être requis pour les modifications les plus importantes.",
          ],
        },
        {
          sousTitre: "5. Le contrôle de conformité",
          texte: "Une règle qui contredit la Constitution doit être écartée.",
          liste: [
            "Le contrôle peut intervenir avant la promulgation de la loi.",
            "Il peut aussi être exercé à l'occasion d'un litige.",
            "Ce contrôle est l'une des garanties essentielles de l'État de droit.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La Constitution est…", opts: ["le texte fondamental qui organise les pouvoirs", "un règlement intérieur", "un contrat privé"], ok: 0, expl: "Elle crée les institutions et garantit les droits." },
          { q: "Aucune règle ne peut…", opts: ["contredire la Constitution", "être modifiée", "être publiée"], ok: 0, expl: "Elle est la norme suprême de l'État." },
          { q: "Une institution est…", opts: ["un organisme chargé d'une mission publique", "une entreprise privée", "une association sportive"], ok: 0, expl: "Elle est créée par la Constitution ou la loi." },
          { q: "La révision de la Constitution…", opts: ["obéit à une procédure plus lourde qu'une loi", "est décidée par un ministre seul", "est impossible"], ok: 0, expl: "Majorité qualifiée ou référendum selon les cas." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une loi peut légalement contredire la Constitution.", rep: false, expl: "La Constitution s'impose à toutes les autres règles." },
          { txt: "La Constitution garantit les droits des citoyens.", rep: true, expl: "Les droits et libertés figurent parmi ses dispositions." },
          { txt: "La Constitution crée les institutions de l'État.", rep: true, expl: "Présidence, Gouvernement, Parlement et juridictions." },
          { txt: "Le contrôle de constitutionnalité vérifie la conformité d'une loi à la Constitution.", rep: true, expl: "C'est une garantie de l'État de droit." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis la Constitution.", r: "C'est le texte fondamental qui organise les pouvoirs publics, fixe leurs compétences et garantit les droits des citoyens." },
          { q: "Cite trois ensembles de dispositions contenues dans une Constitution.", r: "L'organisation des pouvoirs, les droits et libertés des citoyens, et la procédure de révision." },
          { q: "Quelles institutions la Constitution crée-t-elle ?", r: "La Présidence et le Gouvernement pour l'exécutif, le Parlement pour le législatif, les juridictions pour le judiciaire, ainsi que des institutions de contrôle." },
          { q: "Qu'est-ce que le contrôle de constitutionnalité ?", r: "C'est la vérification, par une juridiction compétente, qu'une loi respecte bien la Constitution avant ou après sa promulgation." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "La Constitution est la norme", suite: "suprême" },
          { debut: "Le Parlement est le pouvoir", suite: "législatif" },
          { debut: "Les juridictions forment le pouvoir", suite: "judiciaire" },
          { debut: "Modifier la Constitution demande une procédure plus", suite: "lourde" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 65 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les libertés publiques",
      theme: "Sciences politiques et droit",
      ras: "Evaluer les caractéristiques du pouvoir politique",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "énumérer les libertés publiques et leurs limites, et citer les garanties",
      supportMeta: "Textes de loi, mises en situation, cahier",
      revision: [
        ["Qu'est-ce que la Constitution ?", "Le texte fondamental qui organise les pouvoirs et garantit les droits."],
        ["Cite deux institutions créées par la Constitution.", "La Présidence, le Gouvernement, le Parlement ou les juridictions."],
      ],
      mise: [
        "Peut-on dire et écrire ce que l'on veut, sans aucune limite ?",
        "Presque, mais pas entièrement : la liberté s'arrête là où commence celle des autres, et où l'ordre public l'exige.",
      ],
      observation: "les textes de loi et mises en situation étudiés en classe",
      observationSupport: "Textes garantissant les libertés publiques et mises en situation",
      technAna: "Étude de document, débat dirigé et jeu de rôle",
      qa: [
        ["Qu'est-ce qu'une liberté publique ?", "Un droit fondamental reconnu à toute personne et garanti par la Constitution et la loi contre les abus de la puissance publique."],
        ["Cite quatre libertés publiques.", "La liberté d'expression, la liberté de réunion, la liberté d'association et la liberté de circulation."],
        ["Quelles autres libertés connaît-on ?", "La liberté de conscience, la liberté de la presse, la liberté d'entreprendre et la liberté d'aller et venir."],
        ["Quelles sont les limites de ces libertés ?", "La liberté d'autrui, l'ordre public, la sécurité nationale et la santé publique : la diffamation, l'incitation à la haine ou l'appel à la violence ne sont pas couverts."],
        ["Comment ces libertés sont-elles garanties ?", "Par la Constitution, par la loi, par le juge — qui sanctionne les atteintes — et par le recours ouvert à tout citoyen."],
        ["Qu'est-ce que la liberté d'expression ?", "Le droit de dire, d'écrire et de publier ses opinions sans être poursuivi, dans les limites fixées par la loi."],
        ["Qu'est-ce que la liberté d'association ?", "Le droit de se réunir durablement avec d'autres pour poursuivre un but commun, sans autorisation préalable abusive."],
        ["Quels devoirs accompagnent ces libertés ?", "Respecter la loi, la réputation d'autrui, la sécurité collective et les droits d'autrui : la liberté s'exerce avec responsabilité."],
      ],
      synthese: "Donc, les libertés publiques sont des droits fondamentaux garantis par la Constitution et protégés par le juge : expression, réunion, association, circulation, conscience. Elles ne sont pas absolues : elles s'arrêtent devant la liberté d'autrui et l'ordre public.",
      motsCles: ["liberté publique", "liberté d'expression", "liberté d'association", "liberté de réunion", "ordre public", "garantie", "juge"],
      image: { file: "t11_u5_libertes.png", legende: "Figure 57 — Les libertés publiques, leurs limites et leurs garanties." },
      contenu: [
        {
          sousTitre: "1. Des droits fondamentaux",
          texte: "Les libertés publiques protègent la personne contre l'arbitraire.",
          liste: [
            "Elles sont reconnues à tous, sans distinction.",
            "Elles s'imposent à la puissance publique comme aux particuliers.",
            "Elles sont garanties par la Constitution et par la loi.",
          ],
        },
        {
          sousTitre: "2. Les principales libertés",
          texte: "Cinq libertés structurent la vie démocratique.",
          liste: [
            "Liberté d'expression : dire, écrire et publier ses opinions.",
            "Liberté de réunion : se rassembler pacifiquement.",
            "Liberté d'association : s'organiser durablement.",
            "Liberté de circulation : aller et venir sur le territoire.",
            "Liberté de conscience : croire ou ne pas croire, changer d'opinion.",
          ],
        },
        {
          sousTitre: "3. Les limites",
          texte: "Aucune liberté n'est absolue : elle s'exerce dans le respect de celle d'autrui.",
          liste: [
            "La diffamation et l'injure sortent du champ de la libre expression.",
            "L'appel à la haine ou à la violence est interdit.",
            "L'ordre public et la sécurité collective peuvent justifier des restrictions.",
            "Toute restriction doit être prévue par la loi et proportionnée.",
          ],
        },
        {
          sousTitre: "4. Les garanties",
          texte: "Une liberté n'existe vraiment que si un recours la protège.",
          liste: [
            "La Constitution proclame les droits fondamentaux.",
            "La loi précise leurs conditions d'exercice.",
            "Le juge sanctionne les atteintes et répare le préjudice.",
            "Tout citoyen peut saisir la justice ou une institution de médiation.",
          ],
        },
        {
          sousTitre: "5. Liberté et responsabilité",
          texte: "La liberté s'exerce avec des devoirs : c'est le sens de la citoyenneté.",
          liste: [
            "Respecter la loi et les décisions de justice.",
            "Respecter la réputation et les droits d'autrui.",
            "Exercer son droit de vote et participer à la vie publique.",
            "Une liberté sans responsabilité se retourne contre la vie collective.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une liberté publique est…", opts: ["un droit fondamental garanti par la Constitution", "un privilège accordé à quelques-uns", "une autorisation administrative"], ok: 0, expl: "Elle protège la personne contre l'arbitraire." },
          { q: "Parmi ces libertés, laquelle est une liberté publique ?", opts: ["la liberté d'association", "la liberté de polluer", "la liberté de ne pas payer d'impôt"], ok: 0, expl: "Avec l'expression, la réunion et la circulation." },
          { q: "Une limite légitime à une liberté publique est…", opts: ["la liberté d'autrui et l'ordre public", "l'opinion du plus fort", "l'absence de loi"], ok: 0, expl: "Toute restriction doit être prévue par la loi et proportionnée." },
          { q: "La diffamation…", opts: ["sort du champ de la libre expression", "est toujours autorisée", "est une opinion"], ok: 0, expl: "Elle porte atteinte à la réputation d'autrui." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Les libertés publiques sont absolues et sans limite.", rep: false, expl: "Elles s'arrêtent devant la liberté d'autrui et l'ordre public." },
          { txt: "Le juge garantit les libertés en sanctionnant les atteintes.", rep: true, expl: "Il répare le préjudice et sanctionne l'abus." },
          { txt: "La liberté de conscience permet de croire ou de ne pas croire.", rep: true, expl: "C'est l'une des libertés fondamentales." },
          { txt: "Exercer une liberté dispense de tout devoir.", rep: false, expl: "La liberté s'exerce avec responsabilité : c'est le sens de la citoyenneté." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis une liberté publique et en cite quatre.", r: "C'est un droit fondamental reconnu à toute personne et garanti par la Constitution. Exemples : liberté d'expression, de réunion, d'association et de circulation." },
          { q: "Quelles sont les limites des libertés publiques ?", r: "La liberté d'autrui, l'ordre public, la sécurité nationale et la santé publique. Toute restriction doit être prévue par la loi et proportionnée." },
          { q: "Comment les libertés publiques sont-elles garanties ?", r: "Par la Constitution qui les proclame, par la loi qui en précise l'exercice, et par le juge qui sanctionne les atteintes et répare le préjudice." },
          { q: "Quels devoirs accompagnent l'exercice des libertés ?", r: "Respecter la loi et les décisions de justice, respecter la réputation et les droits d'autrui, et participer à la vie publique." },
        ]},
        { type: "appariement", consigne: "Relie chaque liberté à son illustration.", pointsPar: 1, items: [
          { g: ["Liberté d'expression", "Liberté de réunion", "Liberté d'association", "Liberté de circulation"], d: ["Créer un club de football", "Voyager dans une autre région", "Publier une opinion dans un journal", "Participer à un rassemblement pacifique"], pairs: [[0, 2], [1, 3], [2, 0], [3, 1]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 66 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le droit coutumier à Madagascar",
      theme: "Sciences politiques et droit",
      ras: "Déterminer la hiérarchie des textes et les sources du droit malgache",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "définir le droit coutumier et le situer dans l'ensemble des sources du droit",
      supportMeta: "Textes de droit traditionnel, études de cas locales, cahier",
      revision: [
        ["Cite deux libertés publiques.", "La liberté d'expression, de réunion, d'association ou de circulation."],
        ["Quelle est la limite commune à toutes les libertés publiques ?", "La liberté d'autrui et l'ordre public."],
      ],
      mise: [
        "Dans un village, un conflit de bornage se règle devant les anciens, selon les usages. Est-ce du droit ?",
        "Oui : c'est le droit coutumier, fait d'usages transmis et reconnus par la communauté.",
      ],
      observation: "les textes de droit traditionnel et études de cas locales",
      observationSupport: "Textes de droit traditionnel et études de cas de règlement local des conflits",
      technAna: "Étude de document, enquête et travail de groupe",
      qa: [
        ["Qu'est-ce que le droit coutumier ?", "L'ensemble des règles issues des usages et des coutumes d'une communauté, transmises oralement et reconnues par elle comme obligatoires."],
        ["Quelles sont ses caractéristiques ?", "Il est oral, local, évolutif, profondément lié à la culture du groupe et appliqué par les instances traditionnelles."],
        ["Qu'est-ce qu'un texte de droit traditionnel ?", "Une règle coutumière mise par écrit et reconnue localement, comme les conventions établies par une communauté pour gérer les conflits et les ressources."],
        ["Dans quels domaines intervient-il ?", "Le mariage, la filiation et l'héritage, la gestion des terres et des ressources, et le règlement des conflits de voisinage."],
        ["Comment s'exerce-t-il ?", "Par la médiation des anciens et des instances communautaires, qui recherchent une conciliation plutôt qu'une sanction."],
        ["Quels sont ses avantages ?", "La proximité : la règle est connue de tous ; la rapidité ; le coût faible ; et l'adhésion, car la décision est acceptée par la communauté."],
        ["Quelles sont ses limites ?", "L'incertitude de la règle orale, l'inégalité possible devant les décisions, et le risque de heurter les droits fondamentaux garantis par la Constitution."],
        ["Quelle est sa place dans le droit national ?", "Il s'applique là où la loi le permet, à condition de ne pas contredire la Constitution ni les lois en vigueur, et sans priver personne du recours au juge."],
      ],
      synthese: "Donc, le droit coutumier est l'ensemble des règles issues des usages d'une communauté, transmises oralement et appliquées par ses instances. Proche des réalités locales, il règle mariage, terres et conflits de voisinage, mais il ne peut contredire la Constitution ni les lois de la République.",
      motsCles: ["droit coutumier", "usage", "coutume", "droit traditionnel", "médiation", "conciliation", "Constitution"],
      image: { file: "t11_u5_coutumier.png", legende: "Figure 58 — Le droit coutumier et sa place dans les sources du droit." },
      contenu: [
        {
          sousTitre: "1. Une règle venue des usages",
          texte: "Avant d'être écrite, la règle est d'abord une pratique répétée.",
          liste: [
            "Un usage répété devient une coutume.",
            "La coutume reconnue par le groupe devient obligatoire.",
            "La transmission se fait oralement, de génération en génération.",
          ],
        },
        {
          sousTitre: "2. Les domaines d'application",
          texte: "Le droit coutumier intervient là où la vie quotidienne est en jeu.",
          liste: [
            "Mariage, filiation et successions.",
            "Occupation et transmission des terres.",
            "Gestion des ressources : eau, forêt, pâturage.",
            "Règlement des conflits de voisinage et de bornage.",
          ],
        },
        {
          sousTitre: "3. La manière de juger",
          texte: "La coutume privilégie l'apaisement sur la sanction.",
          liste: [
            "Les anciens et les instances communautaires écoutent les parties.",
            "On recherche une conciliation acceptée par tous.",
            "La décision répare le lien social plus qu'elle ne punit.",
          ],
        },
        {
          sousTitre: "4. Les avantages",
          texte: "La force du droit coutumier tient à son enracinement.",
          liste: [
            "La règle est connue et comprise par tous.",
            "La justice est proche, rapide et peu coûteuse.",
            "La décision est acceptée, donc appliquée.",
          ],
        },
        {
          sousTitre: "5. Les limites et l'articulation",
          texte: "Le droit coutumier n'est pas une justice à part : il s'inscrit sous la loi.",
          liste: [
            "Il ne peut contredire la Constitution ni les lois en vigueur.",
            "Il ne doit pas porter atteinte aux droits fondamentaux, notamment à l'égalité.",
            "Il ne prive personne du droit de saisir le juge.",
            "L'articulation entre coutume et droit national reste un enjeu constant.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le droit coutumier est…", opts: ["l'ensemble des règles issues des usages d'une communauté", "un texte voté par le Parlement", "un traité international"], ok: 0, expl: "Il est transmis oralement et reconnu par le groupe." },
          { q: "Un domaine d'intervention du droit coutumier est…", opts: ["le mariage et l'héritage", "la politique étrangère", "le budget de l'État"], ok: 0, expl: "Avec les terres et les conflits de voisinage." },
          { q: "La coutume privilégie…", opts: ["la conciliation", "la prison", "l'amende"], ok: 0, expl: "Elle recherche l'apaisement et la réparation du lien social." },
          { q: "Le droit coutumier peut-il contredire la Constitution ?", opts: ["non, jamais", "oui, toujours", "cela dépend du village"], ok: 0, expl: "Il s'applique à condition de respecter la Constitution et les lois." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le droit coutumier est principalement écrit.", rep: false, expl: "Il est oral et transmis de génération en génération." },
          { txt: "Il est appliqué par les instances communautaires.", rep: true, expl: "Les anciens recherchent une conciliation." },
          { txt: "Il peut écarter le recours au juge.", rep: false, expl: "Il ne prive personne du droit de saisir la justice." },
          { txt: "Sa proximité favorise l'acceptation de la décision.", rep: true, expl: "La règle est connue et comprise par tous." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis le droit coutumier et cite deux caractéristiques.", r: "C'est l'ensemble des règles issues des usages d'une communauté, transmises oralement et reconnues par elle. Il est oral, local, évolutif et appliqué par les instances traditionnelles." },
          { q: "Cite trois domaines où il intervient.", r: "Le mariage, la filiation et les successions ; l'occupation et la transmission des terres ; et le règlement des conflits de voisinage." },
          { q: "Quels sont ses avantages par rapport à la justice étatique ?", r: "La proximité — la règle est connue de tous —, la rapidité, le coût faible et une meilleure acceptation de la décision par la communauté." },
          { q: "Quelles sont ses limites ?", r: "L'incertitude de la règle orale, l'inégalité possible devant les décisions et le risque de heurter les droits fondamentaux garantis par la Constitution." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["coutume", "oral", "conciliation", "Constitution", "anciens"], items: [
          { phrase: "Un usage répété et reconnu devient une _________.", mot: "coutume" },
          { phrase: "Le droit coutumier se transmet de manière _________.", mot: "oral" },
          { phrase: "Les _________ recherchent une conciliation entre les parties.", mot: "anciens" },
          { phrase: "La coutume ne peut contredire la _________.", mot: "Constitution" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 67 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les lois et les règlements",
      theme: "Sciences politiques et droit",
      ras: "Déterminer la hiérarchie des textes et les sources du droit malgache",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "distinguer la loi des règlements et décrire la procédure d'adoption",
      supportMeta: "Textes législatifs et réglementaires, cahier",
      revision: [
        ["Qu'est-ce que le droit coutumier ?", "L'ensemble des règles issues des usages d'une communauté, transmises oralement."],
        ["Cite une limite du droit coutumier.", "L'incertitude de la règle orale ou le risque de heurter la Constitution."],
      ],
      mise: [
        "Qui décide que le port du casque est obligatoire, et qui fixe le montant de l'amende ?",
        "Le Parlement vote la loi qui pose le principe ; le règlement, pris par l'exécutif, en précise les modalités.",
      ],
      observation: "les textes législatifs et réglementaires étudiés en classe",
      observationSupport: "Textes législatifs et réglementaires, affichés ou distribués",
      technAna: "Étude de document, recherche et travail de groupe",
      qa: [
        ["Qu'est-ce qu'une loi ?", "Une règle générale, impersonnelle et obligatoire, votée par le Parlement dans le domaine que la Constitution lui réserve."],
        ["Qu'est-ce qu'un règlement ?", "Un acte pris par l'exécutif — décret, arrêté — pour préciser les modalités d'application d'une loi ou organiser un service public."],
        ["Quelle différence entre les deux ?", "La loi est votée par les représentants de la nation ; le règlement est pris par l'autorité administrative. Le règlement doit respecter la loi."],
        ["Quels sont les principaux types de règlements ?", "Les décrets, pris par le chef de l'État ou le chef du Gouvernement, et les arrêtés, pris par un ministre ou une autorité locale."],
        ["Comment une loi est-elle adoptée ?", "Un projet ou une proposition est déposé, examiné et débattu par le Parlement, voté, puis promulgué et publié."],
        ["Pourquoi la publication est-elle indispensable ?", "Parce qu'une règle non publiée n'est pas applicable : personne ne peut être tenu de respecter ce qu'il ne peut connaître."],
        ["Que signifie « nul n'est censé ignorer la loi » ?", "Que la loi s'applique à tous dès sa publication, et que l'ignorance ne dispense pas de la respecter."],
        ["La loi peut-elle s'appliquer à des faits passés ?", "Non, en principe : la loi nouvelle s'applique pour l'avenir, sauf disposition contraire plus favorable."],
      ],
      synthese: "Donc, la loi est la règle générale votée par le Parlement, et le règlement l'acte pris par l'exécutif pour l'appliquer. Le règlement doit toujours respecter la loi, qui doit elle-même respecter la Constitution. La publication rend la règle applicable à tous.",
      motsCles: ["loi", "règlement", "décret", "arrêté", "Parlement", "promulgation", "publication"],
      image: { file: "t11_u5_lois.png", legende: "Figure 59 — De la proposition de loi à son application : la chaîne de la règle." },
      contenu: [
        {
          sousTitre: "1. La loi",
          texte: "La règle votée par les représentants de la nation.",
          liste: [
            "Générale : elle s'adresse à tous, sans viser une personne nommément.",
            "Impersonnelle : elle pose une règle abstraite.",
            "Obligatoire : chacun doit s'y conformer.",
            "Votée par le Parlement dans le domaine fixé par la Constitution.",
          ],
        },
        {
          sousTitre: "2. Le règlement",
          texte: "L'acte pris par l'autorité administrative pour mettre la loi en œuvre.",
          liste: [
            "Le décret : pris par le chef de l'État ou le chef du Gouvernement.",
            "L'arrêté : pris par un ministre, une autorité administrative ou une collectivité.",
            "Le règlement précise ce que la loi a posé en principe.",
            "Il ne peut ni ajouter à la loi ni la contredire.",
          ],
        },
        {
          sousTitre: "3. La procédure d'adoption",
          texte: "Une loi naît d'un parcours jalonné d'étapes.",
          liste: [
            "Dépôt d'un projet — par le Gouvernement — ou d'une proposition — par un parlementaire.",
            "Examen en commission, puis débat en séance.",
            "Vote, le plus souvent par les deux assemblées du Parlement.",
            "Promulgation par le chef de l'État, puis publication.",
          ],
        },
        {
          sousTitre: "4. La publication",
          texte: "Sans publication, la règle reste lettre morte.",
          liste: [
            "La publication rend la loi opposable à tous.",
            "Elle paraît au journal officiel ou au bulletin prévu à cet effet.",
            "Une règle non publiée ne peut être opposée à personne.",
            "« Nul n'est censé ignorer la loi » découle de cette publication.",
          ],
        },
        {
          sousTitre: "5. L'application dans le temps",
          texte: "La règle nouvelle ne s'applique pas au passé.",
          liste: [
            "En principe, la loi dispose pour l'avenir seulement.",
            "Une exception : la loi pénale plus douce peut rétroagir.",
            "L'entrée en vigueur peut être différée pour laisser le temps de s'adapter.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une loi est votée par…", opts: ["le Parlement", "le tribunal", "le préfet"], ok: 0, expl: "Les représentants de la nation adoptent la loi." },
          { q: "Un arrêté est pris par…", opts: ["une autorité administrative", "le Parlement", "le jury d'assises"], ok: 0, expl: "Un ministre ou une autorité locale, selon le cas." },
          { q: "Un règlement doit…", opts: ["respecter la loi", "remplacer la Constitution", "ignorer la loi"], ok: 0, expl: "Il sert à l'appliquer, sans la contredire." },
          { q: "Une loi non publiée…", opts: ["n'est pas applicable", "s'applique malgré tout", "s'applique aux seuls auteurs"], ok: 0, expl: "Nul ne peut respecter une règle qu'il ne peut connaître." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Un règlement peut contredire la loi.", rep: false, expl: "Il doit la respecter et se borner à l'appliquer." },
          { txt: "La promulgation et la publication précèdent l'application de la loi.", rep: true, expl: "La publication rend la règle opposable à tous." },
          { txt: "En principe, la loi s'applique pour l'avenir.", rep: true, expl: "La rétroactivité est l'exception, sauf loi pénale plus douce." },
          { txt: "Une proposition de loi émane du Gouvernement.", rep: false, expl: "Elle émane d'un parlementaire ; le Gouvernement dépose un projet." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis la loi et le règlement, et dis ce qui les distingue.", r: "La loi est une règle générale et obligatoire votée par le Parlement ; le règlement est un acte pris par l'exécutif pour l'appliquer. Le règlement doit respecter la loi." },
          { q: "Décris les étapes d'adoption d'une loi.", r: "Dépôt d'un projet ou d'une proposition, examen en commission, débat en séance, vote par le Parlement, promulgation puis publication." },
          { q: "Pourquoi la publication est-elle indispensable ?", r: "Parce qu'une règle non publiée n'est pas applicable : personne ne peut être tenu de respecter ce qu'il ne peut connaître." },
          { q: "Que signifie l'adage « nul n'est censé ignorer la loi » ?", r: "Que la loi, une fois publiée, s'applique à tous et que l'ignorance ne dispense pas de la respecter." },
        ]},
        { type: "appariement", consigne: "Relie chaque texte à son auteur.", pointsPar: 1, items: [
          { g: ["Une loi", "Un décret", "Un arrêté ministériel", "La Constitution"], d: ["Le Parlement", "Le chef de l'État ou du Gouvernement", "Le constituant", "Un ministre"], pairs: [[0, 0], [1, 1], [2, 3], [3, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 68 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La hiérarchie des sources du droit",
      theme: "Sciences politiques et droit",
      ras: "Déterminer la hiérarchie des textes et les sources du droit malgache",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "construire la pyramide des sources du droit et situer chaque texte à son niveau",
      supportMeta: "Documents juridiques, schéma de la pyramide, cahier",
      revision: [
        ["Qu'est-ce qu'une loi ?", "Une règle générale et obligatoire votée par le Parlement."],
        ["Qu'est-ce qu'un arrêté ?", "Un règlement pris par un ministre ou une autorité locale."],
      ],
      mise: [
        "Une loi contredit un traité international ratifié par le pays. Laquelle des deux règles l'emporte ?",
        "Dans la plupart des systèmes, le traité régulièrement ratifié et publié l'emporte sur la loi : il occupe un rang supérieur.",
      ],
      observation: "les documents juridiques et le schéma de la pyramide",
      observationSupport: "Documents juridiques et schéma de la hiérarchie des normes, affichés ou distribués",
      technAna: "Étude de document, schématisation et travail individuel",
      qa: [
        ["Qu'est-ce que la hiérarchie des normes ?", "L'organisation des règles de droit en niveaux : chaque règle doit respecter celle qui lui est supérieure."],
        ["Quelle est la règle suprême ?", "La Constitution : toutes les autres règles doivent la respecter."],
        ["Que trouve-t-on immédiatement au-dessous ?", "Les conventions et traités internationaux régulièrement ratifiés et publiés, dont la valeur est supérieure à celle des lois."],
        ["Quel est le rang de la loi ?", "Elle vient au-dessous de la Constitution et des traités, mais au-dessus des règlements."],
        ["Quel est le rang des règlements ?", "Les décrets viennent sous la loi, et les arrêtés sous les décrets."],
        ["Où se situe la coutume ?", "Elle s'applique là où la loi le permet, sans jamais pouvoir contredire une norme supérieure."],
        ["Qu'est-ce qu'un contrôle de conformité ?", "La vérification qu'une règle respecte bien la norme qui lui est supérieure : une juridiction compétente peut l'écarter si ce n'est pas le cas."],
        ["Pourquoi cette hiérarchie est-elle utile ?", "Elle garantit la sécurité juridique : chacun sait quelle règle s'applique et peut contester celle qui outrepasse son rang."],
      ],
      synthese: "Donc, les sources du droit s'organisent en pyramide : la Constitution au sommet, puis les traités internationaux, les lois, les décrets et les arrêtés, la coutume intervenant là où la loi le permet. Chaque règle doit respecter celle qui lui est supérieure, ce qu'un contrôle de conformité permet de vérifier.",
      motsCles: ["hiérarchie des normes", "sources du droit", "Constitution", "traité international", "loi", "décret", "arrêté"],
      image: { file: "t11_u5_pyramide.png", legende: "Figure 60 — La pyramide des sources du droit : chaque règle respecte celle qui la domine." },
      contenu: [
        {
          sousTitre: "1. Pourquoi une hiérarchie ?",
          texte: "Des règles nombreuses ne peuvent coexister sans ordre : l'une doit primer l'autre.",
          liste: [
            "La hiérarchie indique quelle règle s'applique en cas de conflit.",
            "Elle permet de contester une règle qui outrepasse son rang.",
            "Elle garantit la sécurité juridique des citoyens.",
          ],
        },
        {
          sousTitre: "2. Le sommet : la Constitution",
          texte: "Toutes les règles lui sont subordonnées.",
          liste: [
            "Elle organise les pouvoirs et garantit les droits.",
            "Aucune loi, aucun règlement ne peut la contredire.",
            "Sa révision obéit à une procédure spécifique.",
          ],
        },
        {
          sousTitre: "3. Les traités internationaux",
          texte: "Régulièrement ratifiés et publiés, ils occupent un rang élevé.",
          liste: [
            "Ils engagent l'État à l'égard des autres États.",
            "Leur valeur est supérieure à celle de la loi.",
            "Ils doivent eux-mêmes respecter la Constitution.",
          ],
        },
        {
          sousTitre: "4. Les lois et les règlements",
          texte: "La chaîne descend ensuite, du général au particulier.",
          liste: [
            "La loi : règle générale votée par le Parlement.",
            "Le décret : pris par le chef de l'État ou du Gouvernement.",
            "L'arrêté : pris par un ministre ou une autorité locale.",
            "Chaque niveau précise le précédent sans le contredire.",
          ],
        },
        {
          sousTitre: "5. Le contrôle de conformité",
          texte: "Une règle qui méconnaît la norme supérieure peut être écartée.",
          liste: [
            "Le juge vérifie la conformité d'un règlement à la loi.",
            "Une juridiction compétente contrôle la conformité de la loi elle-même.",
            "Ce contrôle est la clé de voûte de l'État de droit.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Au sommet de la hiérarchie des normes figure…", opts: ["la Constitution", "un arrêté", "une coutume"], ok: 0, expl: "Toutes les autres règles doivent la respecter." },
          { q: "Un traité régulièrement ratifié et publié a une valeur…", opts: ["supérieure à la loi", "inférieure à l'arrêté", "nulle"], ok: 0, expl: "Il reste toutefois soumis à la Constitution." },
          { q: "Un décret se situe…", opts: ["sous la loi et au-dessus de l'arrêté", "au-dessus de la Constitution", "au même niveau que la loi"], ok: 0, expl: "La chaîne descend de la loi vers les arrêtés." },
          { q: "Une règle qui méconnaît la norme supérieure…", opts: ["peut être écartée par le juge", "reste valable", "devient une loi"], ok: 0, expl: "C'est le contrôle de conformité." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Un arrêté peut modifier une loi.", rep: false, expl: "Il lui est inférieur : il ne peut que l'appliquer." },
          { txt: "La coutume peut s'appliquer là où la loi le permet.", rep: true, expl: "Sans jamais contredire une norme supérieure." },
          { txt: "La hiérarchie des normes garantit la sécurité juridique.", rep: true, expl: "Chacun sait quelle règle prime en cas de conflit." },
          { txt: "Un traité international peut contredire la Constitution.", rep: false, expl: "La Constitution demeure la norme suprême." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Décris la pyramide des sources du droit, du sommet à la base.", r: "La Constitution au sommet, puis les conventions et traités internationaux ratifiés, puis les lois, puis les décrets, puis les arrêtés ; la coutume s'applique là où la loi le permet." },
          { q: "Pourquoi la hiérarchie des normes est-elle nécessaire ?", r: "Parce qu'elle indique quelle règle s'applique en cas de conflit, permet de contester une règle qui outrepasse son rang et garantit la sécurité juridique." },
          { q: "Quelle est la valeur d'un traité international régulièrement ratifié ?", r: "Sa valeur est supérieure à celle de la loi, mais il demeure soumis à la Constitution." },
          { q: "Qu'est-ce qu'un contrôle de conformité ?", r: "C'est la vérification, par une juridiction compétente, qu'une règle respecte bien la norme qui lui est supérieure ; la règle contraire peut être écartée." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["Constitution", "loi", "décret", "arrêté", "traité"], items: [
          { phrase: "La norme suprême est la _________.", mot: "Constitution" },
          { phrase: "Le _________ international l'emporte sur la loi.", mot: "traité" },
          { phrase: "La règle générale votée par le Parlement est la _________.", mot: "loi" },
          { phrase: "Le texte pris par le chef du Gouvernement est un _________.", mot: "décret" },
        ]},
      ],
    },
  ],
};

module.exports = U;
