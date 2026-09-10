// ============================================================
// Unité I — Production dans les organisations (PE T11 série OSE — 25 heures)
// RAS 1 : Déterminer les facteurs et les coûts de production ainsi que les recettes
// RAS 2 : Examiner la performance de l'entreprise
// RAS 3 : Déterminer les parties prenantes de l'entreprise, leurs contributions
//         et leurs intérêts
// Découpage : 11 séances de cours + 1 révision + 1 sujet d'examen (2 h)
// Valeurs : Persévérance, Responsabilité
// ============================================================

const U = {
  num: "I",
  titre: "Production dans les organisations",
  ras: "Déterminer les facteurs et les coûts de production ainsi que les recettes · Examiner la performance de l'entreprise · Déterminer les parties prenantes de l'entreprise, leurs contributions et leurs intérêts",
  valeurs: "Persévérance, Responsabilité",
  duree: "25 heures",
  themes: [
    "Les facteurs de production et les combinaisons productives",
    "Les coûts de production",
    "Les recettes et le profit",
    "La maximisation du profit",
    "La valeur ajoutée : mesure et répartition",
    "Le bilan de l'entreprise",
    "Le compte de résultat",
    "La responsabilité sociétale de l'entreprise",
    "Les parties prenantes internes et externes",
    "Contributions et attentes des parties prenantes",
    "Intérêts convergents et divergents",
  ],
  topics: [
    // ---------------------------------------------------------
    // SÉANCE 1 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les facteurs de production et les combinaisons productives",
      theme: "Production dans les organisations",
      ras: "Déterminer les facteurs et les coûts de production ainsi que les recettes",
      valeurs: "Persévérance, Responsabilité",
      objectif: "identifier les facteurs de production et comparer les combinaisons productives possibles",
      supportMeta: "Tableau de combinaisons productives, documents, cahier",
      revision: [
        ["Cite les deux grands facteurs de production.", "Le travail et le capital."],
        ["Qu'est-ce que la productivité ?", "Le rapport entre la quantité produite et les moyens utilisés pour la produire."],
      ],
      mise: [
        "Une couturière peut coudre à la main ou avec une machine électrique. Que choisit-elle, et pourquoi ?",
        "Selon ses moyens et le nombre de chemises à livrer : elle compare les deux combinaisons.",
      ],
      observation: "le tableau comparant deux combinaisons productives",
      observationSupport: "Tableau de combinaisons productives (travail / capital / quantité produite) affiché ou distribué",
      technAna: "Exploitation de documents et calcul dirigé",
      qa: [
        ["Quels sont les facteurs de production ?", "Le travail — l'activité humaine, physique ou intellectuelle — et le capital — les machines, les outils, les bâtiments et l'argent qui permet de les acquérir."],
        ["Que désigne-t-on par ressources naturelles ?", "Les éléments fournis par la nature et mobilisés dans la production : la terre, l'eau, les matières premières, l'énergie."],
        ["Qu'est-ce qu'une combinaison productive ?", "La manière dont l'entreprise associe ses facteurs pour produire : beaucoup de travail et peu de machines, ou l'inverse."],
        ["Comment comparer deux combinaisons ?", "En calculant, pour chacune, la quantité produite et le coût total : la meilleure est celle qui produit la quantité voulue au coût le plus faible."],
        ["Qu'est-ce que la substituabilité des facteurs ?", "La possibilité de remplacer un facteur par un autre : une machine remplace plusieurs travailleurs, ou des travailleurs remplacent une machine trop coûteuse."],
        ["Qu'est-ce que la complémentarité des facteurs ?", "Le fait qu'aucun facteur ne produit seul : une machine sans conducteur formé ne produit rien."],
        ["Pourquoi le choix de la combinaison change-t-il dans le temps ?", "Parce que les prix relatifs changent : si le coût du travail augmente ou si le prix d'une machine baisse, l'entreprise ajuste sa combinaison."],
      ],
      synthese: "Donc, produire suppose d'associer du travail et du capital, avec les ressources naturelles nécessaires. L'entreprise compare les combinaisons possibles et retient celle qui permet d'obtenir la quantité voulue au moindre coût. Ce choix évolue avec les prix des facteurs et le progrès technique.",
      motsCles: ["facteurs de production", "travail", "capital", "ressources naturelles", "combinaison productive", "substituabilité", "complémentarité"],
      contenu: [
        {
          sousTitre: "1. Les facteurs de production",
          texte: "Les facteurs de production sont les moyens qu'il faut réunir pour produire des biens ou des services. Le programme en retient deux principaux, auxquels s'ajoutent les ressources naturelles.",
          liste: [
            "Le travail : l'activité humaine, physique ou intellectuelle, qualifiée ou non, rémunérée par un salaire ou un revenu d'activité.",
            "Le capital : les moyens durables de production — machines, outils, bâtiments, véhicules, matériel informatique — et les moyens financiers qui permettent de les acquérir.",
            "Les ressources naturelles : la terre, l'eau, les matières premières, l'énergie.",
          ],
        },
        {
          sousTitre: "2. La combinaison productive",
          texte: "Une combinaison productive décrit la proportion dans laquelle les facteurs sont associés. On distingue deux grands types.",
          liste: [
            "Combinaison intensive en travail : beaucoup de main-d'œuvre, peu d'équipements. Exemple : la récolte manuelle du riz, la couture à la machine à pédale.",
            "Combinaison intensive en capital : beaucoup d'équipements, peu de main-d'œuvre. Exemple : la décortiquerie, l'imprimerie numérique.",
            "Le choix dépend du coût de chaque facteur, des moyens financiers disponibles et de la qualification de la main-d'œuvre.",
          ],
        },
        {
          sousTitre: "3. Comparer des combinaisons : un exemple chiffré",
          texte: "Un atelier doit produire 1 000 chemises. Deux combinaisons sont possibles.",
          liste: [
            "Combinaison A : 10 couturiers, 2 machines à coudre, 3 mois de travail. Coût : 10 × 150 000 × 3 = 4 500 000 Ar de salaires + 800 000 Ar de machines, soit 5 300 000 Ar.",
            "Combinaison B : 4 couturiers, 10 machines à coudre, 3 mois de travail. Coût : 4 × 150 000 × 3 = 1 800 000 Ar de salaires + 4 000 000 Ar de machines, soit 5 800 000 Ar.",
            "Avec ces chiffres, la combinaison A est la moins coûteuse : elle est retenue. Si le salaire double, le calcul change et la combinaison B peut devenir préférable.",
          ],
        },
        {
          sousTitre: "4. Substituabilité et complémentarité",
          texte: "Les deux propriétés expliquent comment les facteurs réagissent entre eux.",
          liste: [
            "Substituabilité : un facteur peut, dans une certaine mesure, remplacer l'autre. Une machine à coudre électrique remplace une partie du travail manuel.",
            "La substitution a des limites techniques et humaines : la machine ne remplace ni le jugement ni le sens du client.",
            "Complémentarité : les facteurs doivent être réunis. Un atelier équipé ne produit rien sans personnel formé, et réciproquement.",
          ],
        },
        {
          sousTitre: "5. Le rôle du progrès technique",
          texte: "Le progrès technique modifie sans cesse les combinaisons possibles : il permet d'obtenir davantage avec les mêmes moyens, ou la même production avec moins de moyens.",
          liste: [
            "Une machine plus rapide augmente la production par heure de travail.",
            "Une méthode mieux organisée réduit les pertes et les temps morts.",
            "Une formation améliore l'usage du matériel existant.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Les deux grands facteurs de production sont…", opts: ["le travail et le capital", "le prix et la quantité", "le profit et la valeur ajoutée"], ok: 0, expl: "Le programme retient le facteur travail et le facteur capital." },
          { q: "Une combinaison intensive en capital utilise…", opts: ["beaucoup de machines et peu de main-d'œuvre", "uniquement du travail manuel", "aucune ressource naturelle"], ok: 0, expl: "Le capital domine dans l'association des facteurs." },
          { q: "Remplacer des travailleurs par une machine illustre…", opts: ["la substituabilité", "la complémentarité", "la maximisation du profit"], ok: 0, expl: "Un facteur en remplace un autre." },
          { q: "Pour retenir une combinaison, l'entreprise compare…", opts: ["les coûts pour une production donnée", "le nombre d'employés seulement", "le nombre de machines seulement"], ok: 0, expl: "La meilleure combinaison produit la quantité voulue au moindre coût." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une machine sans conducteur formé produit à elle seule.", rep: false, expl: "Les facteurs sont complémentaires : aucun ne produit isolément." },
          { txt: "La substituabilité des facteurs est illimitée.", rep: false, expl: "Elle a des limites techniques et humaines." },
          { txt: "Le progrès technique permet de produire plus avec les mêmes moyens.", rep: true, expl: "C'est la définition même du progrès technique." },
          { txt: "Le choix d'une combinaison dépend du coût relatif des facteurs.", rep: true, expl: "Si le coût du travail augmente, l'entreprise peut mécaniser davantage." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Donne la définition d'une combinaison productive.", r: "Une combinaison productive est la manière dont l'entreprise associe ses facteurs de production, en proportions variables, pour obtenir une quantité donnée." },
          { q: "Quelle différence y a-t-il entre substituabilité et complémentarité ?", r: "La substituabilité permet de remplacer un facteur par un autre ; la complémentarité signifie que les facteurs doivent être réunis pour produire." },
          { q: "Pourquoi le choix de la combinaison peut-il changer d'une année à l'autre ?", r: "Parce que les prix relatifs des facteurs changent : une hausse des salaires ou une baisse du prix des machines modifie le calcul du coût." },
          { q: "Cite deux formes de progrès technique et leur effet sur la production.", r: "Une machine plus rapide augmente la production par heure ; une meilleure organisation réduit les pertes et les temps morts." },
        ]},
        { type: "appariement", consigne: "Relie chaque moyen au facteur correspondant.", pointsPar: 1, items: [
          { g: ["Le savoir-faire d'un ajusteur", "Une presse à huile", "Une parcelle de vanille", "Un local d'atelier"], d: ["Capital", "Ressources naturelles", "Capital", "Travail"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 2 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les coûts de production",
      theme: "Production dans les organisations",
      ras: "Déterminer les facteurs et les coûts de production ainsi que les recettes",
      valeurs: "Persévérance, Responsabilité",
      objectif: "distinguer coûts fixes et coûts variables, et calculer un coût total, un coût moyen et un coût marginal",
      supportMeta: "Tableaux de coûts, documents d'une petite entreprise, cahier",
      revision: [
        ["Qu'est-ce qu'une combinaison productive ?", "La manière dont l'entreprise associe ses facteurs de production pour produire."],
        ["Cite les deux grands facteurs de production.", "Le travail et le capital."],
      ],
      mise: [
        "Un boulanger paie son loyer même s'il ne vend aucun pain ce mois-ci. Qu'est-ce que cela change pour lui ?",
        "Il a des dépenses incompressibles : même sans production, une partie des coûts reste due.",
      ],
      observation: "le tableau des coûts d'un atelier affiché au tableau",
      observationSupport: "Tableau de coûts (fixes, variables, total, moyen, marginal) affiché ou distribué",
      technAna: "Lecture de tableau et calcul dirigé",
      qa: [
        ["Qu'est-ce qu'un coût de production ?", "L'ensemble des dépenses engagées par l'entreprise pour produire : achats, salaires, loyer, énergie, entretien, remboursement d'emprunt."],
        ["Qu'est-ce qu'un coût fixe ?", "Un coût qui ne varie pas avec la quantité produite : le loyer, l'assurance, l'amortissement des machines, le salaire du gardien."],
        ["Qu'est-ce qu'un coût variable ?", "Un coût qui augmente avec la quantité produite : les matières premières, l'énergie de production, les heures supplémentaires, les emballages."],
        ["Comment calcule-t-on le coût total ?", "Coût total = coûts fixes + coûts variables."],
        ["Comment calcule-t-on le coût moyen ?", "Coût moyen = coût total divisé par la quantité produite. Il indique le coût de revient d'une unité."],
        ["Qu'est-ce que le coût marginal ?", "Le coût de la dernière unité produite : ce qu'il en coûte de produire une unité de plus."],
        ["Pourquoi le coût moyen diminue-t-il souvent quand la production augmente ?", "Parce que les coûts fixes se répartissent sur un plus grand nombre d'unités : c'est l'effet de dilution des charges fixes."],
        ["Que se passe-t-il si le prix de vente est inférieur au coût moyen ?", "L'entreprise perd de l'argent sur chaque unité vendue : elle doit réduire ses coûts, augmenter son prix ou cesser cette production."],
      ],
      synthese: "Donc, les coûts se répartissent en coûts fixes, indépendants de la quantité produite, et coûts variables, proportionnels à la production. Le coût total en découle ; divisé par la quantité, il donne le coût moyen, qui mesure le coût de revient d'une unité. Le coût marginal, lui, mesure ce que coûte une unité supplémentaire.",
      motsCles: ["coût de production", "coût fixe", "coût variable", "coût total", "coût moyen", "coût marginal", "seuil de rentabilité"],
      image: { file: "t11_u1_couts.png", legende: "Figure 1 — Coûts fixes, coûts variables et coût total." },
      contenu: [
        {
          sousTitre: "1. Coûts fixes et coûts variables",
          texte: "La distinction essentielle oppose les dépenses qui existent même sans production à celles qui naissent de la production.",
          liste: [
            "Coûts fixes : loyer, assurance, amortissement du matériel, salaires permanents, intérêts d'emprunt. Ils sont dus même si la production est nulle.",
            "Coûts variables : matières premières, emballages, énergie de production, transport, heures supplémentaires. Ils suivent le volume produit.",
            "Certains coûts sont mixtes : une facture d'électricité comporte un abonnement fixe et une part variable selon la consommation.",
          ],
        },
        {
          sousTitre: "2. Calculer le coût total",
          texte: "Le coût total est la somme des coûts fixes et des coûts variables pour une quantité produite donnée.",
          liste: [
            "Coût total = coûts fixes + coûts variables.",
            "Exemple : un atelier supporte 400 000 Ar de charges fixes par mois et produit 1 000 pièces à 300 Ar de matières et d'énergie chacune.",
            "Coût total = 400 000 + (1 000 × 300) = 700 000 Ar.",
          ],
        },
        {
          sousTitre: "3. Le coût moyen",
          texte: "Le coût moyen indique ce que coûte, en moyenne, une unité produite. Il sert à fixer le prix de vente.",
          liste: [
            "Coût moyen = coût total ÷ quantité produite.",
            "Dans l'exemple : 700 000 ÷ 1 000 = 700 Ar par pièce.",
            "Si l'atelier produit 2 000 pièces avec les mêmes charges fixes : 400 000 + 600 000 = 1 000 000 Ar, soit 500 Ar par pièce.",
            "Plus la production augmente, plus les charges fixes se répartissent : le coût moyen baisse.",
          ],
        },
        {
          sousTitre: "4. Le coût marginal",
          texte: "Le coût marginal mesure la dépense supplémentaire nécessaire pour produire une unité de plus. Il guide les décisions de production.",
          liste: [
            "Coût marginal = variation du coût total pour une unité supplémentaire.",
            "Dans l'exemple, chaque pièce supplémentaire coûte 300 Ar de matières et d'énergie : le coût marginal est de 300 Ar.",
            "Comparer le coût marginal à la recette apportée par l'unité supplémentaire permet de décider de produire ou non.",
          ],
        },
        {
          sousTitre: "5. Réduire les coûts : la responsabilité de l'entreprise",
          texte: "Maîtriser les coûts n'est pas seulement afficher des économies : c'est produire sans gaspiller, dans le respect des personnes et de l'environnement.",
          liste: [
            "Réduire les pertes de matières et les rebuts.",
            "Entretenir le matériel pour éviter les pannes coûteuses.",
            "Former le personnel : moins d'erreurs, moins de gaspillage.",
            "Négocier les achats sans sacrifier la qualité ni les délais de paiement des fournisseurs.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le loyer d'un atelier est un coût…", opts: ["fixe", "variable", "marginal"], ok: 0, expl: "Il est dû quelle que soit la quantité produite." },
          { q: "Les matières premières sont un coût…", opts: ["variable", "fixe", "constant"], ok: 0, expl: "La dépense suit le volume produit." },
          { q: "Le coût moyen se calcule ainsi :", opts: ["coût total divisé par la quantité", "coût fixe moins coût variable", "prix de vente moins profit"], ok: 0, expl: "Il mesure le coût de revient d'une unité." },
          { q: "Quand la production augmente, les charges fixes par unité…", opts: ["diminuent", "augmentent", "restent identiques"], ok: 0, expl: "Elles se répartissent sur un plus grand nombre d'unités." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["fixe", "variable", "total", "moyen", "marginal"], items: [
          { phrase: "Le loyer et l'assurance sont des coûts _________.", mot: "fixe" },
          { phrase: "Les matières premières consommées forment un coût _________.", mot: "variable" },
          { phrase: "Le coût _________ est la somme des coûts fixes et des coûts variables.", mot: "total" },
          { phrase: "Produire une unité de plus représente un coût _________.", mot: "marginal" },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds en rédigeant le calcul.", pointsPar: 2, items: [
          { q: "Un atelier a 400 000 Ar de charges fixes et produit 1 000 pièces à 300 Ar de coût variable chacune. Calcule le coût total.", r: "Coût total = 400 000 + (1 000 × 300) = 700 000 Ar." },
          { q: "Dans la situation précédente, quel est le coût moyen d'une pièce ?", r: "Coût moyen = 700 000 ÷ 1 000 = 700 Ar par pièce." },
          { q: "Si l'atelier passe à 2 000 pièces, quel est le nouveau coût moyen ?", r: "Coût total = 400 000 + (2 000 × 300) = 1 000 000 Ar ; coût moyen = 1 000 000 ÷ 2 000 = 500 Ar par pièce." },
          { q: "Explique pourquoi le coût moyen a baissé.", r: "Les 400 000 Ar de charges fixes se répartissent sur deux fois plus d'unités : leur part dans chaque pièce est passée de 400 Ar à 200 Ar." },
        ]},
        { type: "appariement", consigne: "Relie chaque dépense à sa nature.", pointsPar: 1, items: [
          { g: ["Loyer de l'atelier", "Tissu utilisé", "Salaire du gardien", "Emballages"], d: ["Coût variable", "Coût fixe", "Coût variable", "Coût fixe"], pairs: [[0, 1], [1, 0], [2, 3], [3, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 3 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les recettes et le profit",
      theme: "Production dans les organisations",
      ras: "Déterminer les facteurs et les coûts de production ainsi que les recettes",
      valeurs: "Persévérance, Responsabilité",
      objectif: "calculer le chiffre d'affaires, les recettes et le profit d'une entreprise",
      supportMeta: "Tableaux de ventes, documents d'une petite entreprise, cahier",
      revision: [
        ["Qu'est-ce qu'un coût marginal ?", "Le coût de la dernière unité produite."],
        ["Comment calcule-t-on le coût total ?", "En additionnant les coûts fixes et les coûts variables."],
      ],
      mise: [
        "Un vendeur de beignets dépense 20 000 Ar en farine et en huile et encaisse 60 000 Ar. Que lui reste-t-il ?",
        "40 000 Ar, avant le transport et les autres charges : c'est son profit brut sur l'opération.",
      ],
      observation: "le tableau des recettes et des charges affiché au tableau",
      observationSupport: "Tableau de ventes et de charges d'une petite activité, affiché ou distribué",
      technAna: "Étude de cas et calcul dirigé",
      qa: [
        ["Qu'est-ce que la recette d'une entreprise ?", "La somme encaissée grâce à la vente de sa production : c'est le chiffre d'affaires."],
        ["Comment calcule-t-on le chiffre d'affaires ?", "Chiffre d'affaires = prix de vente × quantité vendue."],
        ["Qu'est-ce que la recette moyenne ?", "La recette par unité vendue, c'est-à-dire le prix de vente moyen."],
        ["Qu'est-ce que la recette marginale ?", "La recette supplémentaire apportée par la vente d'une unité de plus."],
        ["Qu'est-ce que le profit ?", "La différence entre les recettes et l'ensemble des coûts de production : profit = recettes − coûts."],
        ["Que se passe-t-il si les coûts dépassent les recettes ?", "L'entreprise subit une perte : elle doit réagir vite, car sa trésorerie s'épuise."],
        ["Pourquoi distingue-t-on recettes encaissées et ventes facturées ?", "Parce qu'une vente à crédit augmente les recettes comptables sans faire entrer d'argent immédiatement : c'est le crédit client, qui fragilise la trésorerie."],
        ["Le profit est-il un revenu garanti ?", "Non : il récompense le risque pris par l'entrepreneur et peut se transformer en perte."],
      ],
      synthese: "Donc, la recette — ou chiffre d'affaires — est le produit du prix de vente par la quantité vendue. En retranchant les coûts de production, on obtient le profit : positif, il rémunère le risque de l'entrepreneur ; négatif, il devient une perte.",
      motsCles: ["recette", "chiffre d'affaires", "recette moyenne", "recette marginale", "profit", "perte", "trésorerie"],
      contenu: [
        {
          sousTitre: "1. Les recettes de l'entreprise",
          texte: "La recette mesure ce que l'entreprise tire de ses ventes. C'est la contrepartie de la production écoulée sur le marché.",
          liste: [
            "Chiffre d'affaires = prix de vente × quantité vendue.",
            "Exemple : 1 200 pains vendus à 1 000 Ar donnent un chiffre d'affaires de 1 200 000 Ar.",
            "Si le prix baisse à 900 Ar, il faut vendre environ 1 334 pains pour obtenir la même recette.",
          ],
        },
        {
          sousTitre: "2. Recette moyenne et recette marginale",
          texte: "Ces deux notions servent à analyser l'effet d'une vente supplémentaire.",
          liste: [
            "Recette moyenne = recette totale ÷ quantité vendue : c'est le prix de vente moyen.",
            "Recette marginale = recette apportée par une unité vendue de plus.",
            "Pour écouler davantage, l'entreprise baisse souvent son prix : la recette marginale devient alors inférieure à la recette moyenne.",
          ],
        },
        {
          sousTitre: "3. Du chiffre d'affaires au profit",
          texte: "Le profit ne se confond pas avec l'encaissement : il se calcule en comparant recettes et coûts.",
          liste: [
            "Profit = recettes − coûts totaux (fixes et variables).",
            "Exemple : 1 200 000 Ar de recettes et 900 000 Ar de coûts donnent un profit de 300 000 Ar.",
            "Si les coûts atteignent 1 300 000 Ar, l'entreprise subit une perte de 100 000 Ar.",
          ],
        },
        {
          sousTitre: "4. Recettes encaissées et ventes à crédit",
          texte: "Une entreprise peut vendre à crédit : la recette est comptabilisée, mais l'argent n'est pas encore encaissé. La trésorerie, elle, ne suit pas.",
          liste: [
            "Vente au comptant : recette et encaissement immédiat.",
            "Vente à crédit : recette comptable, encaissement différé.",
            "Une accumulation de crédits clients peut mettre l'entreprise en difficulté malgré des ventes élevées.",
          ],
        },
        {
          sousTitre: "5. Lire un compte d'exploitation simplifié",
          texte: "Le compte d'exploitation récapitule, sur une période, les produits et les charges pour dégager le résultat.",
          liste: [
            "Chiffre d'affaires : 5 000 000 Ar.",
            "Achats consommés : 2 200 000 Ar.",
            "Services extérieurs et transports : 800 000 Ar.",
            "Salaires et charges sociales : 1 200 000 Ar.",
            "Amortissements et autres charges : 300 000 Ar.",
            "Total des charges : 4 500 000 Ar. Résultat : 500 000 Ar de profit.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le chiffre d'affaires se calcule ainsi :", opts: ["prix de vente × quantité vendue", "coût total − recettes", "profit + charges fixes"], ok: 0, expl: "C'est le produit du prix par les volumes vendus." },
          { q: "La recette moyenne correspond…", opts: ["au prix de vente moyen", "au coût marginal", "au bénéfice net"], ok: 0, expl: "Recette totale divisée par la quantité vendue." },
          { q: "Profit = recettes − coûts. Si recettes = 900 000 et coûts = 1 000 000, l'entreprise…", opts: ["subit une perte de 100 000", "réalise un profit de 100 000", "est à l'équilibre"], ok: 0, expl: "Les coûts dépassent les recettes : le résultat est négatif." },
          { q: "Une vente à crédit…", opts: ["augmente la recette sans encaissement immédiat", "supprime la recette", "augmente la trésorerie tout de suite"], ok: 0, expl: "L'argent n'entre qu'au paiement effectif." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Un chiffre d'affaires élevé garantit un profit.", rep: false, expl: "Le profit dépend aussi du niveau des coûts." },
          { txt: "Une entreprise peut être en difficulté de trésorerie tout en vendant beaucoup.", rep: true, expl: "Les ventes à crédit retardent l'encaissement." },
          { txt: "Le profit rémunère le risque pris par l'entrepreneur.", rep: true, expl: "Il n'est jamais garanti : il peut devenir une perte." },
          { txt: "Baisser le prix de vente fait toujours augmenter la recette.", rep: false, expl: "Il faut que la hausse des quantités compense la baisse du prix." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds en rédigeant le calcul.", pointsPar: 2, items: [
          { q: "Une entreprise vend 800 unités à 2 500 Ar. Calcule son chiffre d'affaires.", r: "Chiffre d'affaires = 2 500 × 800 = 2 000 000 Ar." },
          { q: "Ses coûts s'élèvent à 1 650 000 Ar. Quel est son profit ?", r: "Profit = 2 000 000 − 1 650 000 = 350 000 Ar." },
          { q: "Le prix est porté à 2 200 Ar et les ventes passent à 1 000 unités. Que devient le chiffre d'affaires ?", r: "Chiffre d'affaires = 2 200 × 1 000 = 2 200 000 Ar : il augmente malgré la baisse du prix." },
          { q: "Pourquoi la recette marginale peut-elle être inférieure à la recette moyenne ?", r: "Parce que, pour vendre une unité de plus, l'entreprise baisse souvent son prix de vente." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "La somme encaissée grâce aux ventes s'appelle le chiffre", suite: "d'affaires" },
          { debut: "Recettes moins coûts donne le", suite: "profit" },
          { debut: "Quand les coûts dépassent les recettes, l'entreprise subit une", suite: "perte" },
          { debut: "Une vente dont l'argent n'est pas encore encaissé est une vente à", suite: "crédit" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 4 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La maximisation du profit",
      theme: "Production dans les organisations",
      ras: "Déterminer les facteurs et les coûts de production ainsi que les recettes",
      valeurs: "Persévérance, Responsabilité",
      objectif: "expliquer comment une entreprise détermine la production qui maximise son profit",
      supportMeta: "Tableau recettes marginales / coûts marginaux, cahier",
      revision: [
        ["Comment calcule-t-on le chiffre d'affaires ?", "Prix de vente × quantité vendue."],
        ["Qu'est-ce que le coût marginal ?", "Le coût de la dernière unité produite."],
      ],
      mise: [
        "Un atelier peut produire une chemise de plus pour 3 000 Ar et la vendre 5 000 Ar. Doit-il le faire ?",
        "Oui : l'unité supplémentaire rapporte plus qu'elle ne coûte, le profit total augmente.",
      ],
      observation: "le tableau comparant recette marginale et coût marginal",
      observationSupport: "Tableau recette marginale / coût marginal par tranche de production, affiché ou distribué",
      technAna: "Lecture de tableau, calcul dirigé et résolution de problème",
      qa: [
        ["Que signifie « maximiser le profit » ?", "Choisir la quantité produite et vendue qui donne le profit le plus élevé possible, compte tenu des coûts et du prix du marché."],
        ["Quelle est la règle de décision ?", "Produire et vendre une unité supplémentaire tant que la recette marginale dépasse le coût marginal : le profit augmente. Arrêter quand les deux s'égalent."],
        ["Que se passe-t-il si la recette marginale devient inférieure au coût marginal ?", "Chaque unité supplémentaire coûte plus qu'elle ne rapporte : le profit total diminue, il faut s'arrêter."],
        ["Pourquoi le profit maximal ne correspond-il pas toujours au chiffre d'affaires maximal ?", "Parce que produire davantage peut exiger des coûts croissants — heures supplémentaires, machines en surcharge — qui réduisent le profit."],
        ["Le prix de vente est-il toujours choisi librement ?", "Non : sur un marché concurrentiel, le prix s'impose à l'entreprise ; elle ne peut agir que sur ses coûts et ses quantités."],
        ["Quelles limites rencontre la maximisation du profit ?", "Les capacités de production, la demande du marché, la qualité attendue, la réglementation et les engagements sociaux et environnementaux de l'entreprise."],
        ["Maximiser le profit autorise-t-il tout ?", "Non : la recherche du profit s'exerce dans le cadre du droit — droit du travail, fiscalité, environnement — et de la responsabilité de l'entreprise envers ses parties prenantes."],
      ],
      synthese: "Donc, maximiser le profit consiste à produire tant que la recette apportée par une unité supplémentaire dépasse ce qu'elle coûte, et à s'arrêter lorsque recette marginale et coût marginal s'égalent. Cette règle s'exerce sous contrainte : le marché fixe le prix, et le droit fixe le cadre de l'action.",
      motsCles: ["maximisation du profit", "recette marginale", "coût marginal", "quantité optimale", "contrainte de marché", "responsabilité"],
      image: { file: "t11_u1_maximisation.png", legende: "Figure 2 — Recette marginale, coût marginal et profit maximal." },
      contenu: [
        {
          sousTitre: "1. La règle de la recette marginale et du coût marginal",
          texte: "La décision de produire une unité de plus se prend en comparant ce qu'elle rapporte et ce qu'elle coûte.",
          liste: [
            "Recette marginale > coût marginal : l'unité ajoute au profit, il faut produire.",
            "Recette marginale = coût marginal : le profit est maximal, c'est le point d'arrêt.",
            "Recette marginale < coût marginal : l'unité réduit le profit, il faut s'arrêter avant.",
          ],
        },
        {
          sousTitre: "2. Un exemple chiffré",
          texte: "Un atelier vend chaque unité 5 000 Ar. Le coût marginal croît avec la production, car au-delà d'un certain volume il faut payer des heures supplémentaires.",
          liste: [
            "1re à 100e unité : coût marginal 3 000 Ar → profit marginal 2 000 Ar → produire.",
            "101e à 200e unité : coût marginal 4 000 Ar → profit marginal 1 000 Ar → produire.",
            "201e unité : coût marginal 5 000 Ar → profit marginal nul → s'arrêter ici.",
            "Au-delà : coût marginal 5 500 Ar → chaque unité fait perdre 500 Ar → ne pas produire.",
          ],
        },
        {
          sousTitre: "3. Profit maximal et chiffre d'affaires maximal",
          texte: "Les deux objectifs ne se confondent pas. Une entreprise peut vendre beaucoup et gagner peu.",
          liste: [
            "Produire au maximum de la capacité fait augmenter le chiffre d'affaires, mais les coûts croissent aussi.",
            "Le profit maximal se situe avant la capacité maximale, là où la dernière unité rapporte encore ce qu'elle coûte.",
            "Vendre à perte pour gagner des parts de marché est une stratégie risquée, qui épuise la trésorerie.",
          ],
        },
        {
          sousTitre: "4. Les contraintes de la décision",
          texte: "La règle du profit s'applique dans un cadre qui la limite : c'est ce qui distingue la théorie de la décision réelle d'un entrepreneur.",
          liste: [
            "Le marché : sur un marché concurrentiel, le prix n'est pas choisi par l'entreprise.",
            "La capacité : l'atelier ne peut pas produire au-delà de ses machines et de son personnel.",
            "La demande : produire davantage suppose de pouvoir vendre davantage.",
            "Le droit : droit du travail, normes environnementales, fiscalité.",
            "La responsabilité : qualité, sécurité, emploi, impact sur le territoire.",
          ],
        },
        {
          sousTitre: "5. Réduire les coûts plutôt que baisser la qualité",
          texte: "Face à une marge insuffisante, l'entreprise dispose de leviers durables.",
          liste: [
            "Améliorer la productivité : formation, organisation, entretien.",
            "Réduire les gaspillages et les pertes de matières.",
            "Négocier les achats et les conditions de transport.",
            "Baisser la qualité est un mauvais calcul : elle fait perdre la confiance des clients.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le profit est maximal quand…", opts: ["la recette marginale égale le coût marginal", "le chiffre d'affaires est maximal", "les coûts fixes sont nuls"], ok: 0, expl: "Au-delà, chaque unité supplémentaire coûte plus qu'elle ne rapporte." },
          { q: "Si la recette marginale est de 4 000 Ar et le coût marginal de 3 200 Ar, l'entreprise doit…", opts: ["produire l'unité supplémentaire", "s'arrêter", "baisser son prix"], ok: 0, expl: "L'unité ajoute 800 Ar au profit." },
          { q: "Sur un marché concurrentiel, le prix de vente…", opts: ["s'impose à l'entreprise", "est fixé librement par elle", "est fixé par l'État"], ok: 0, expl: "L'entreprise n'agit que sur ses coûts et ses quantités." },
          { q: "Produire au maximum de la capacité…", opts: ["ne maximise pas nécessairement le profit", "maximise toujours le profit", "supprime les coûts fixes"], ok: 0, expl: "Les coûts marginaux croissants peuvent dépasser la recette." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le profit maximal correspond toujours au chiffre d'affaires maximal.", rep: false, expl: "Produire plus peut coûter plus que cela ne rapporte." },
          { txt: "La recherche du profit s'exerce dans le cadre du droit.", rep: true, expl: "Droit du travail, fiscalité et normes environnementales s'imposent." },
          { txt: "Baisser la qualité est un levier durable pour réduire les coûts.", rep: false, expl: "Elle fait perdre la confiance des clients et donc des ventes." },
          { txt: "Un coût marginal croissant limite la quantité produite.", rep: true, expl: "Au-delà du point d'égalité, produire fait baisser le profit." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds en rédigeant le calcul.", pointsPar: 2, items: [
          { q: "Énonce la règle de maximisation du profit.", r: "Il faut produire une unité supplémentaire tant que la recette marginale dépasse le coût marginal, et s'arrêter quand les deux s'égalent." },
          { q: "Prix de vente 5 000 Ar, coût marginal de la 201e unité 5 000 Ar : que décider ?", r: "Recette marginale = coût marginal : le profit est maximal, il faut s'arrêter à 200 unités." },
          { q: "Cite deux contraintes qui limitent la recherche du profit.", r: "Le prix imposé par le marché et le respect du droit du travail (ou la capacité de production, la demande, les normes environnementales)." },
          { q: "Pourquoi vendre à perte pour gagner des parts de marché est-il risqué ?", r: "Parce que l'entreprise épuise sa trésorerie : elle peut se retrouver en cessation de paiement avant d'avoir conquis le marché." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["marginale", "marginal", "maximal", "coûts", "concurrence"], items: [
          { phrase: "La recette apportée par une unité vendue de plus est la recette _________.", mot: "marginale" },
          { phrase: "Le coût de la dernière unité produite est le coût _________.", mot: "marginal" },
          { phrase: "Le profit est _________ quand les deux grandeurs précédentes s'égalent.", mot: "maximal" },
          { phrase: "Sur un marché de _________, l'entreprise ne choisit pas son prix.", mot: "concurrence" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 5 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La valeur ajoutée : mesure et répartition",
      theme: "Production dans les organisations",
      ras: "Examiner la performance de l'entreprise",
      valeurs: "Persévérance, Responsabilité",
      objectif: "calculer la valeur ajoutée d'une entreprise et décrire sa répartition",
      supportMeta: "Tableaux de production et de répartition, documents, cahier",
      revision: [
        ["Quelle est la règle de maximisation du profit ?", "Produire tant que la recette marginale dépasse le coût marginal."],
        ["Qu'est-ce que le chiffre d'affaires ?", "Le prix de vente multiplié par la quantité vendue."],
      ],
      mise: [
        "Une boulangerie vend pour 10 millions de pain mais achète pour 6 millions de farine. Que crée-t-elle vraiment ?",
        "Elle crée 4 millions de richesse nouvelle : la différence entre ce qu'elle produit et ce qu'elle consomme pour produire.",
      ],
      observation: "le tableau de calcul de la valeur ajoutée affiché au tableau",
      observationSupport: "Tableau de calcul de la valeur ajoutée et de sa répartition, affiché ou distribué",
      technAna: "Étude de document et calcul dirigé",
      qa: [
        ["Qu'est-ce que la valeur ajoutée ?", "La richesse créée par l'entreprise : la différence entre la valeur de sa production et la valeur des biens et services consommés pour produire."],
        ["Comment calcule-t-on la valeur ajoutée ?", "Valeur ajoutée = valeur de la production − consommations intermédiaires."],
        ["Qu'appelle-t-on consommations intermédiaires ?", "Les biens et services détruits ou transformés au cours du processus de production : matières premières, énergie, transports, services extérieurs."],
        ["En quoi la valeur ajoutée mesure-t-elle la performance ?", "Elle mesure la contribution propre de l'entreprise : plus elle est élevée, plus l'entreprise crée de richesse avec ses propres moyens."],
        ["Comment la valeur ajoutée est-elle répartie ?", "Entre les salaires et charges sociales, les impôts et taxes, l'autofinancement de l'entreprise et les revenus versés aux propriétaires."],
        ["Quel lien y a-t-il entre valeur ajoutée et profit ?", "Le profit est une partie de la valeur ajoutée, celle qui reste après les salaires, les impôts et la couverture des charges financières."],
        ["Pourquoi la valeur ajoutée par tête intéresse-t-elle les économistes ?", "Parce qu'elle mesure la richesse créée par travailleur et permet de comparer des entreprises de taille différente."],
      ],
      synthese: "Donc, la valeur ajoutée mesure la richesse réellement créée par l'entreprise : la valeur de la production moins les consommations intermédiaires. Elle se répartit entre les salariés, l'État, l'entreprise elle-même et les apporteurs de capitaux. C'est un indicateur de performance plus pertinent que le seul chiffre d'affaires.",
      motsCles: ["valeur ajoutée", "consommations intermédiaires", "production", "répartition", "autofinancement", "performance"],
      contenu: [
        {
          sousTitre: "1. Mesurer la valeur ajoutée",
          texte: "La valeur ajoutée ne se confond ni avec le chiffre d'affaires ni avec le profit : elle mesure la richesse nouvelle créée par l'activité de production.",
          liste: [
            "Valeur ajoutée = valeur de la production − consommations intermédiaires.",
            "La valeur de la production comprend les ventes, la production stockée et la production immobilisée.",
            "Les consommations intermédiaires sont les achats de biens et services entièrement consommés dans le cycle de production.",
          ],
        },
        {
          sousTitre: "2. Un exemple chiffré",
          texte: "Une unité de transformation de fruits sur un mois :",
          liste: [
            "Valeur de la production (ventes + stocks) : 8 000 000 Ar.",
            "Consommations intermédiaires : fruits 3 000 000 Ar, sucre et emballages 1 200 000 Ar, énergie et transport 800 000 Ar, soit 5 000 000 Ar.",
            "Valeur ajoutée : 8 000 000 − 5 000 000 = 3 000 000 Ar.",
            "Le taux de valeur ajoutée : 3 000 000 ÷ 8 000 000 = 37,5 % de la production.",
          ],
        },
        {
          sousTitre: "3. La répartition de la valeur ajoutée",
          texte: "La valeur ajoutée n'appartient pas à l'entreprise seule : elle est partagée entre plusieurs bénéficiaires.",
          liste: [
            "Les salariés : salaires nets et cotisations sociales.",
            "L'État et les collectivités : impôts et taxes liés à la production et à l'exploitation.",
            "L'entreprise : l'autofinancement, qui permet d'investir et de faire face aux aléas.",
            "Les apporteurs de capitaux : dividendes, intérêts versés aux prêteurs.",
          ],
        },
        {
          sousTitre: "4. Valeur ajoutée et profit",
          texte: "Le profit n'est qu'une fraction de la valeur ajoutée. Comprendre cette différence évite bien des confusions.",
          liste: [
            "Valeur ajoutée : richesse créée par l'activité.",
            "Profit : ce qui reste après rémunération du travail, de l'État et des prêteurs.",
            "Une entreprise peut créer beaucoup de valeur ajoutée et dégager un profit faible, si ses charges de personnel sont élevées.",
          ],
        },
        {
          sousTitre: "5. Un indicateur de performance",
          texte: "La valeur ajoutée permet d'apprécier l'efficacité réelle de l'entreprise et sa contribution à l'économie.",
          liste: [
            "Valeur ajoutée par travailleur : 3 000 000 Ar ÷ 6 personnes = 500 000 Ar par personne et par mois.",
            "Taux de valeur ajoutée : part de la valeur ajoutée dans la production ; il indique le degré d'intégration de l'activité.",
            "Une valeur ajoutée qui progresse traduit une productivité meilleure ou une montée en gamme des produits.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La valeur ajoutée se calcule ainsi :", opts: ["production − consommations intermédiaires", "recettes − salaires", "chiffre d'affaires − impôts"], ok: 0, expl: "C'est la richesse créée au cours du processus de production." },
          { q: "Les matières premières achetées sont…", opts: ["des consommations intermédiaires", "de la valeur ajoutée", "un profit"], ok: 0, expl: "Elles sont consommées ou transformées dans la production." },
          { q: "Parmi les bénéficiaires de la valeur ajoutée, on trouve…", opts: ["les salariés, l'État et l'entreprise", "uniquement les clients", "uniquement les fournisseurs"], ok: 0, expl: "Salaires, impôts, autofinancement et dividendes en sont issus." },
          { q: "Le profit est…", opts: ["une partie de la valeur ajoutée", "égal à la valeur ajoutée", "toujours supérieur à la valeur ajoutée"], ok: 0, expl: "Il reste après les salaires, les impôts et les charges financières." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["valeur ajoutée", "consommations intermédiaires", "autofinancement", "salaires", "impôts"], items: [
          { phrase: "La richesse créée par l'entreprise est sa _________.", mot: "valeur ajoutée" },
          { phrase: "Les achats consommés dans la production sont des _________.", mot: "consommations intermédiaires" },
          { phrase: "La part de valeur ajoutée gardée par l'entreprise constitue l'_________.", mot: "autofinancement" },
          { phrase: "Les _________ rémunèrent le travail des salariés.", mot: "salaires" },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds en rédigeant le calcul.", pointsPar: 2, items: [
          { q: "Production : 8 000 000 Ar ; consommations intermédiaires : 5 000 000 Ar. Calcule la valeur ajoutée.", r: "Valeur ajoutée = 8 000 000 − 5 000 000 = 3 000 000 Ar." },
          { q: "Cette valeur ajoutée est répartie ainsi : salaires 1 700 000 Ar, impôts 300 000 Ar, dividendes 400 000 Ar. Que reste-t-il à l'entreprise ?", r: "3 000 000 − (1 700 000 + 300 000 + 400 000) = 600 000 Ar d'autofinancement." },
          { q: "L'entreprise emploie 6 personnes. Quelle est la valeur ajoutée par travailleur ?", r: "3 000 000 ÷ 6 = 500 000 Ar par travailleur et par mois." },
          { q: "Pourquoi la valeur ajoutée est-elle un meilleur indicateur de performance que le chiffre d'affaires ?", r: "Parce qu'elle ne compte que la richesse créée par l'entreprise elle-même, alors que le chiffre d'affaires inclut la valeur des biens achetés à d'autres." },
        ]},
        { type: "appariement", consigne: "Relie chaque partie de la valeur ajoutée à son bénéficiaire.", pointsPar: 1, items: [
          { g: ["Salaires et cotisations", "Impôts et taxes", "Autofinancement", "Dividendes"], d: ["L'État et les collectivités", "L'entreprise elle-même", "Les apporteurs de capitaux", "Les salariés"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 6 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le bilan de l'entreprise",
      theme: "Production dans les organisations",
      ras: "Examiner la performance de l'entreprise",
      valeurs: "Persévérance, Responsabilité",
      objectif: "lire un bilan simplifié et distinguer emplois et ressources de l'entreprise",
      supportMeta: "Exemple de bilan simplifié, documents, cahier",
      revision: [
        ["Comment calcule-t-on la valeur ajoutée ?", "Valeur de la production moins consommations intermédiaires."],
        ["Cite deux bénéficiaires de la valeur ajoutée.", "Les salariés et l'État (ou l'entreprise, les apporteurs de capitaux)."],
      ],
      mise: [
        "Comment savoir ce que possède une entreprise et ce qu'elle doit, à une date précise ?",
        "En dressant son bilan : une photographie de son patrimoine à un instant donné.",
      ],
      observation: "l'exemple de bilan simplifié distribué en classe",
      observationSupport: "Exemple de bilan simplifié (actif / passif) affiché ou distribué",
      technAna: "Étude de document et lecture de tableau",
      qa: [
        ["Qu'est-ce que le bilan ?", "Un document comptable qui présente, à une date donnée, ce que l'entreprise possède et ce qu'elle doit : une photographie de son patrimoine."],
        ["Que contient l'actif du bilan ?", "Les emplois : les biens possédés par l'entreprise et les créances détenues sur d'autres, classés selon leur degré de liquidité."],
        ["Que contient le passif du bilan ?", "Les ressources : l'origine des moyens de financement, c'est-à-dire les capitaux propres et les dettes."],
        ["Qu'est-ce que l'actif immobilisé ?", "Les biens durables destinés à rester dans l'entreprise : terrains, bâtiments, machines, matériel de transport."],
        ["Qu'est-ce que l'actif circulant ?", "Les biens et créances liés au cycle d'exploitation : stocks, créances clients, trésorerie disponible."],
        ["Que trouve-t-on dans les capitaux propres ?", "Le capital apporté par les propriétaires, les réserves accumulées, le report à nouveau et le résultat de l'exercice."],
        ["Pourquoi le total de l'actif est-il toujours égal au total du passif ?", "Parce que tout bien possédé par l'entreprise a été financé par une ressource : capitaux propres ou dette. C'est l'équilibre fondamental du bilan."],
        ["Que mesure la trésorerie dans le bilan ?", "L'argent immédiatement disponible : espèces en caisse et soldes bancaires positifs."],
      ],
      synthese: "Donc, le bilan présente à une date donnée le patrimoine de l'entreprise : à l'actif, les emplois — immobilisations, stocks, créances, trésorerie ; au passif, les ressources — capitaux propres et dettes. Les deux totaux sont toujours égaux, car tout bien possédé a été financé.",
      motsCles: ["bilan", "actif", "passif", "actif immobilisé", "actif circulant", "capitaux propres", "dettes", "trésorerie"],
      image: { file: "t11_u1_bilan.png", legende: "Figure 3 — Le bilan : emplois à l'actif, ressources au passif." },
      contenu: [
        {
          sousTitre: "1. Une photographie du patrimoine",
          texte: "Le bilan se lit à une date précise : il décrit la situation de l'entreprise à un instant, contrairement au compte de résultat qui raconte une période.",
          liste: [
            "À l'actif : ce que l'entreprise possède et ce qu'on lui doit.",
            "Au passif : ce qu'elle doit et ce qui appartient à ses propriétaires.",
            "Les deux colonnes se lisent ensemble : chaque emploi a une contrepartie en ressource.",
          ],
        },
        {
          sousTitre: "2. L'actif : les emplois",
          texte: "L'actif est classé du moins liquide au plus liquide, selon la rapidité avec laquelle un bien peut se transformer en argent.",
          liste: [
            "Actif immobilisé : terrains, bâtiments, machines, matériel de transport, matériel informatique.",
            "Stocks : matières premières, produits en cours, produits finis.",
            "Créances clients : sommes dues par les clients qui ont acheté à crédit.",
            "Trésorerie : espèces en caisse et avoirs en banque.",
          ],
        },
        {
          sousTitre: "3. Le passif : les ressources",
          texte: "Le passif indique d'où viennent les moyens qui ont permis d'acquérir les biens de l'actif.",
          liste: [
            "Capitaux propres : capital social, réserves, report à nouveau, résultat de l'exercice.",
            "Dettes financières : emprunts bancaires, dettes envers les établissements de crédit.",
            "Dettes d'exploitation : dettes envers les fournisseurs, dettes fiscales et sociales.",
          ],
        },
        {
          sousTitre: "4. L'équilibre du bilan",
          texte: "L'égalité entre le total de l'actif et celui du passif n'est pas une coïncidence : c'est une conséquence du financement des emplois.",
          liste: [
            "Exemple : un atelier achète une machine de 2 000 000 Ar financée par 1 200 000 Ar d'emprunt et 800 000 Ar d'apport personnel.",
            "L'actif augmente de 2 000 000 Ar (la machine).",
            "Le passif augmente de 1 200 000 Ar (la dette) et de 800 000 Ar (les capitaux propres).",
            "Total de l'actif = total du passif = 2 000 000 Ar.",
          ],
        },
        {
          sousTitre: "5. Ce que le bilan révèle de la santé de l'entreprise",
          texte: "Quelques lectures simples suffisent à repérer une situation fragile.",
          liste: [
            "Des capitaux propres élevés : l'entreprise est solide face aux aléas.",
            "Des dettes supérieures aux capitaux propres : la dépendance envers les créanciers est forte.",
            "Une trésorerie faible avec beaucoup de créances clients : l'argent tarde à rentrer.",
            "Des stocks qui s'accumulent : la production ne se vend pas assez vite.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le bilan présente…", opts: ["le patrimoine à une date donnée", "les ventes de l'année", "le calcul du profit"], ok: 0, expl: "C'est une photographie ; le compte de résultat raconte la période." },
          { q: "Une machine figure…", opts: ["à l'actif immobilisé", "au passif", "dans le compte de résultat"], ok: 0, expl: "C'est un bien durable possédé par l'entreprise." },
          { q: "Un emprunt bancaire figure…", opts: ["au passif", "à l'actif", "en trésorerie"], ok: 0, expl: "C'est une ressource : une dette envers la banque." },
          { q: "Le total de l'actif est…", opts: ["toujours égal au total du passif", "toujours supérieur", "toujours inférieur"], ok: 0, expl: "Tout emploi est financé par une ressource." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Les créances clients figurent à l'actif.", rep: true, expl: "C'est une somme due à l'entreprise : un emploi." },
          { txt: "Les dettes fournisseurs figurent à l'actif.", rep: false, expl: "Elles figurent au passif : c'est une ressource obtenue à crédit." },
          { txt: "Le résultat de l'exercice apparaît dans les capitaux propres.", rep: true, expl: "Le bénéfice appartient aux propriétaires tant qu'il n'est pas distribué." },
          { txt: "Une trésorerie importante avec beaucoup de dettes est sans risque.", rep: false, expl: "Il faut comparer la trésorerie aux dettes à court terme." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète en citant les montants.", pointsPar: 2, items: [
          { q: "Une entreprise possède un terrain (5 000 000), des machines (3 000 000), des stocks (1 500 000), de la trésorerie (500 000). Quel est le total de son actif ?", r: "Le total de l'actif est de 5 000 000 + 3 000 000 + 1 500 000 + 500 000 = 10 000 000 Ar." },
          { q: "Son passif se compose de 4 000 000 de capitaux propres et d'un emprunt de 6 000 000. Le bilan est-il équilibré ?", r: "Oui : le total du passif est de 4 000 000 + 6 000 000 = 10 000 000 Ar, égal au total de l'actif." },
          { q: "Cette entreprise est-elle fortement endettée ? Explique.", r: "Oui : ses dettes (6 000 000) dépassent ses capitaux propres (4 000 000), ce qui la rend dépendante de ses créanciers." },
          { q: "Quelle différence y a-t-il entre le bilan et le compte de résultat ?", r: "Le bilan est une photographie du patrimoine à une date, tandis que le compte de résultat retrace l'activité et le résultat sur une période." },
        ]},
        { type: "appariement", consigne: "Relie chaque élément à sa place dans le bilan.", pointsPar: 1, items: [
          { g: ["Un bâtiment", "Un emprunt bancaire", "Les créances clients", "Les réserves"], d: ["Passif (dettes)", "Actif circulant", "Passif (capitaux propres)", "Actif immobilisé"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
    },
    // ---------------------------------------------------------
    // SÉANCE 7 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le compte de résultat",
      theme: "Production dans les organisations",
      ras: "Examiner la performance de l'entreprise",
      valeurs: "Persévérance, Responsabilité",
      objectif: "lire un compte de résultat simplifié et calculer le résultat net",
      supportMeta: "Exemple de compte de résultat, documents, cahier",
      revision: [
        ["Que présente le bilan ?", "Le patrimoine de l'entreprise à une date donnée : ses emplois et ses ressources."],
        ["Cite deux postes de l'actif circulant.", "Les stocks et les créances clients (ou la trésorerie)."],
      ],
      mise: [
        "Le bilan dit ce que possède l'entreprise. Comment savoir si elle a gagné de l'argent cette année ?",
        "En dressant le compte de résultat : il compare les produits et les charges de toute la période.",
      ],
      observation: "l'exemple de compte de résultat simplifié distribué en classe",
      observationSupport: "Exemple de compte de résultat (produits, charges, résultat) affiché ou distribué",
      technAna: "Étude de document et calcul dirigé",
      qa: [
        ["Qu'est-ce que le compte de résultat ?", "Un document comptable qui récapitule, sur une période donnée, les produits et les charges de l'entreprise pour dégager son résultat."],
        ["Quelle différence y a-t-il entre le bilan et le compte de résultat ?", "Le bilan est une photographie du patrimoine à une date ; le compte de résultat est un film de l'activité sur une période."],
        ["Qu'appelle-t-on les produits ?", "Les ressources créées par l'activité : chiffre d'affaires, production stockée, subventions d'exploitation."],
        ["Qu'appelle-t-on les charges ?", "Les dépenses engagées pour produire : achats consommés, services extérieurs, salaires et charges sociales, impôts et taxes, dotations aux amortissements."],
        ["Comment calcule-t-on le résultat ?", "Résultat = total des produits − total des charges. Positif, c'est un bénéfice ; négatif, une perte."],
        ["Qu'est-ce qu'un amortissement ?", "La constatation comptable de l'usure d'un bien durable : chaque année, une fraction du prix de la machine est comptée en charge."],
        ["Pourquoi le résultat comptable ne correspond-il pas toujours à l'argent disponible ?", "Parce que des charges comme les amortissements ne sortent pas de la trésorerie, alors que le remboursement d'un emprunt en sort sans être une charge."],
        ["Que fait l'entreprise de son bénéfice ?", "Elle peut le mettre en réserve pour investir, le distribuer aux propriétaires, ou le conserver pour faire face aux aléas."],
      ],
      synthese: "Donc, le compte de résultat récapitule les produits et les charges de la période pour dégager le résultat net : bénéfice ou perte. Il complète le bilan, qui décrit le patrimoine à une date. Les deux documents sont complémentaires pour apprécier la performance.",
      motsCles: ["compte de résultat", "produits", "charges", "résultat net", "bénéfice", "perte", "amortissement"],
      image: { file: "t11_u1_resultat.png", legende: "Figure 4 — Le compte de résultat : des produits au résultat net." },
      contenu: [
        {
          sousTitre: "1. Un document de période",
          texte: "Le compte de résultat couvre une période — un mois, un trimestre, un exercice de douze mois — et retrace la formation du résultat.",
          liste: [
            "Les produits : ce que l'activité a rapporté.",
            "Les charges : ce que l'activité a coûté.",
            "Le résultat : la différence, bénéfice ou perte.",
          ],
        },
        {
          sousTitre: "2. Les principaux postes",
          texte: "Les postes sont présentés dans un ordre qui permet de lire la formation du résultat.",
          liste: [
            "Chiffre d'affaires : ventes de biens et de services.",
            "Achats consommés : matières premières et marchandises utilisées.",
            "Services extérieurs : transport, location, entretien, énergie.",
            "Charges de personnel : salaires et cotisations sociales.",
            "Impôts et taxes : contributions liées à l'exploitation.",
            "Dotations aux amortissements : usure des immobilisations.",
            "Résultat net : produits moins charges.",
          ],
        },
        {
          sousTitre: "3. Un exemple chiffré",
          texte: "Compte de résultat simplifié d'un atelier de transformation, sur un exercice :",
          liste: [
            "Chiffre d'affaires : 24 000 000 Ar.",
            "Achats consommés : 9 500 000 Ar.",
            "Services extérieurs : 2 800 000 Ar.",
            "Charges de personnel : 6 200 000 Ar.",
            "Impôts et taxes : 900 000 Ar.",
            "Dotations aux amortissements : 1 100 000 Ar.",
            "Total des charges : 20 500 000 Ar. Résultat : 24 000 000 − 20 500 000 = 3 500 000 Ar de bénéfice.",
          ],
        },
        {
          sousTitre: "4. Résultat comptable et trésorerie",
          texte: "Un bénéfice ne signifie pas que l'argent est disponible. La distinction est essentielle pour la gestion.",
          liste: [
            "Les amortissements sont une charge sans sortie d'argent : la dépense a eu lieu lors de l'achat.",
            "Le remboursement d'un emprunt fait sortir de l'argent sans être une charge.",
            "Une vente à crédit crée un produit sans encaissement immédiat.",
            "Une entreprise bénéficiaire peut donc manquer de trésorerie : c'est pourquoi le suivi de la trésorerie est indispensable.",
          ],
        },
        {
          sousTitre: "5. Interpréter le résultat",
          texte: "Le résultat ne se lit jamais seul : il se rapporte à l'activité et aux moyens engagés.",
          liste: [
            "Taux de marge : résultat ÷ chiffre d'affaires. Ici : 3 500 000 ÷ 24 000 000 ≈ 14,6 %.",
            "Un bénéfice faible avec un chiffre d'affaires élevé traduit des charges mal maîtrisées.",
            "Une perte répétée épuise les capitaux propres et menace la survie de l'entreprise.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le compte de résultat mesure…", opts: ["le résultat de la période", "le patrimoine à une date", "le nombre de salariés"], ok: 0, expl: "Il compare produits et charges sur une période donnée." },
          { q: "Les dotations aux amortissements sont…", opts: ["une charge calculée, sans sortie d'argent", "un produit", "une recette encaissée"], ok: 0, expl: "Elles constatent l'usure du matériel déjà payé." },
          { q: "Une perte correspond à…", opts: ["des charges supérieures aux produits", "un chiffre d'affaires faible", "des dettes élevées"], ok: 0, expl: "Le résultat est négatif quand les charges dépassent les produits." },
          { q: "Une entreprise bénéficiaire…", opts: ["peut manquer de trésorerie", "a toujours beaucoup d'argent disponible", "n'a jamais de dettes"], ok: 0, expl: "Les ventes à crédit et les remboursements d'emprunt expliquent ce décalage." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le bilan et le compte de résultat donnent la même information.", rep: false, expl: "Le bilan photographie le patrimoine ; le compte de résultat retrace l'activité de la période." },
          { txt: "Les charges de personnel comprennent les salaires et les cotisations sociales.", rep: true, expl: "Les cotisations s'ajoutent au salaire brut." },
          { txt: "Le remboursement d'un emprunt est une charge du compte de résultat.", rep: false, expl: "Il réduit la dette et la trésorerie, sans passer par le compte de résultat." },
          { txt: "Le taux de marge rapporte le résultat au chiffre d'affaires.", rep: true, expl: "Il mesure la part du chiffre d'affaires conservée après charges." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds en rédigeant le calcul.", pointsPar: 2, items: [
          { q: "Produits : 24 000 000 Ar ; charges : 20 500 000 Ar. Quel est le résultat ?", r: "Résultat = 24 000 000 − 20 500 000 = 3 500 000 Ar de bénéfice." },
          { q: "Calcule le taux de marge correspondant.", r: "Taux de marge = 3 500 000 ÷ 24 000 000 = 0,1458, soit environ 14,6 %." },
          { q: "Pourquoi une entreprise peut-elle être bénéficiaire et à court d'argent ?", r: "Parce que des charges comme les amortissements ne sortent pas de la trésorerie, alors que les remboursements d'emprunt et les ventes à crédit, eux, la réduisent." },
          { q: "Quelle différence y a-t-il entre une charge et un décaissement ?", r: "Une charge constate une dépense dans le résultat ; un décaissement est une sortie effective d'argent. Les deux ne coïncident pas toujours." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Le document qui compare produits et charges sur une période est le compte de", suite: "résultat" },
          { debut: "Produits moins charges donne le résultat", suite: "net" },
          { debut: "Un résultat négatif est une", suite: "perte" },
          { debut: "La constatation de l'usure d'une machine est un", suite: "amortissement" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 8 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La responsabilité sociétale de l'entreprise : impacts sociaux et environnementaux",
      theme: "Production dans les organisations",
      ras: "Examiner la performance de l'entreprise",
      valeurs: "Persévérance, Responsabilité",
      objectif: "définir la RSE et analyser les impacts sociaux et environnementaux d'une entreprise",
      supportMeta: "Documents sur des impacts sociaux et environnementaux, étude de cas, cahier",
      revision: [
        ["Que mesure le compte de résultat ?", "Le résultat de la période : produits moins charges."],
        ["Qu'est-ce qu'un amortissement ?", "La constatation comptable de l'usure d'un bien durable."],
      ],
      mise: [
        "Une usine peut être rentable tout en polluant une rivière. Est-elle vraiment performante ?",
        "Non : sa performance financière se paie d'un coût supporté par d'autres — les riverains, la collectivité.",
      ],
      observation: "les documents présentant les impacts d'une entreprise sur son territoire",
      observationSupport: "Documents et photographies d'impacts sociaux et environnementaux, grille d'analyse",
      technAna: "Étude de cas, débat dirigé et travail de groupe",
      qa: [
        ["Qu'est-ce que la RSE ?", "La responsabilité sociétale des entreprises : la prise en compte, au-delà du profit, des impacts sociaux et environnementaux de l'activité et la manière dont l'entreprise les assume."],
        ["Qu'entend-on par impact social ?", "Les effets de l'activité sur les personnes : emploi créé, conditions de travail, formation, santé et sécurité, respect des droits, dialogue avec le personnel."],
        ["Qu'entend-on par impact environnemental ?", "Les effets sur les milieux naturels : prélèvements de ressources, consommation d'énergie, rejets et déchets, pollution de l'air, de l'eau et des sols, atteinte à la biodiversité."],
        ["Pourquoi la performance ne se réduit-elle pas au profit ?", "Parce qu'une entreprise peut dégager un bénéfice en reportant ses coûts sur la collectivité : une performance durable combine résultats économiques, sociaux et environnementaux."],
        ["Quelles actions concrètes relèvent de la RSE ?", "Former et protéger les salariés, réduire les déchets et la consommation d'énergie, traiter les effluents, s'approvisionner de façon responsable, soutenir le développement local."],
        ["Qu'est-ce qu'une externalité négative ?", "Un coût supporté par la collectivité sans être payé par l'entreprise : une rivière polluée dont le traitement incombe aux autres."],
        ["La RSE est-elle une contrainte ou un atout ?", "Les deux : elle impose des efforts, mais elle réduit les risques, fidélise les clients et les salariés et facilite l'accès aux financements."],
      ],
      synthese: "Donc, la responsabilité sociétale des entreprises consiste à assumer les impacts sociaux et environnementaux de l'activité, et pas seulement ses résultats financiers. Une performance durable réunit les trois dimensions : économique, sociale et environnementale. Une entreprise qui reporte ses coûts sur la collectivité crée une externalité négative.",
      motsCles: ["RSE", "impact social", "impact environnemental", "externalité", "développement durable", "performance globale", "dialogue social"],
      image: { file: "t11_u1_rse.jpg", legende: "Figure 5 — Les trois dimensions de la performance d'une entreprise." },
      contenu: [
        {
          sousTitre: "1. La responsabilité sociétale des entreprises",
          texte: "La RSE traduit l'idée que l'entreprise rend des comptes à la société, et pas seulement à ses propriétaires.",
          liste: [
            "Dimension économique : produire, vendre, dégager un résultat, investir.",
            "Dimension sociale : emploi, conditions de travail, formation, sécurité.",
            "Dimension environnementale : ressources, énergie, déchets, pollution, biodiversité.",
          ],
        },
        {
          sousTitre: "2. L'impact social de l'activité",
          texte: "L'activité de production transforme la vie des personnes qui y participent et celle des territoires qui l'accueillent.",
          liste: [
            "Création et qualité de l'emploi : contrats, rémunération, stabilité.",
            "Conditions de travail : horaires, sécurité, pénibilité, protection de la santé.",
            "Formation et promotion : accès aux qualifications, évolution des carrières.",
            "Dialogue social : écoute du personnel, négociation, respect des droits.",
            "Effets indirects : revenus distribués dans le territoire, activité des fournisseurs locaux.",
          ],
        },
        {
          sousTitre: "3. L'impact environnemental",
          texte: "Toute production prélève des ressources et rejette des déchets. L'enjeu est de mesurer et de réduire ces flux.",
          liste: [
            "Prélèvements : eau, bois, matières premières, énergie, sols.",
            "Rejets et déchets : effluents liquides, fumées, emballages, déchets solides.",
            "Atteintes aux milieux : érosion, déforestation, pollution des nappes, perte de biodiversité.",
            "Actions possibles : tri et recyclage, traitement des effluents, énergies renouvelables, sobriété des emballages, reboisement.",
          ],
        },
        {
          sousTitre: "4. Les externalités : le coût que personne ne paie",
          texte: "Une externalité est un effet de l'activité sur des tiers, sans contrepartie monétaire.",
          liste: [
            "Externalité négative : une usine rejette ses effluents dans une rivière ; la collectivité supporte le coût de la dépollution et les pêcheurs perdent leur revenu.",
            "Externalité positive : une entreprise forme des apprentis qui essaimeront leurs compétences dans l'économie locale.",
            "Les pouvoirs publics interviennent pour corriger les externalités négatives : normes, taxes, contrôles.",
          ],
        },
        {
          sousTitre: "5. Mesurer la performance globale",
          texte: "Une entreprise responsable se fixe des indicateurs qui ne se limitent pas au résultat financier.",
          liste: [
            "Indicateurs économiques : chiffre d'affaires, valeur ajoutée, résultat.",
            "Indicateurs sociaux : effectifs, accidents du travail, heures de formation, ancienneté.",
            "Indicateurs environnementaux : consommation d'eau et d'énergie, tonnage de déchets, part recyclée.",
            "Exemple : une unité de transformation qui récupère ses eaux de lavage réduit à la fois sa facture et son impact.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La RSE désigne…", opts: ["la prise en compte des impacts sociaux et environnementaux", "uniquement le profit", "la publicité de l'entreprise"], ok: 0, expl: "Elle ajoute les dimensions sociale et environnementale à la dimension économique." },
          { q: "Une rivière polluée dont le coût est supporté par la collectivité est…", opts: ["une externalité négative", "une externalité positive", "un amortissement"], ok: 0, expl: "L'entreprise ne paie pas le dommage qu'elle cause." },
          { q: "Parmi les actions de RSE, on trouve…", opts: ["la formation du personnel et le traitement des déchets", "la hausse des prix", "la réduction des salaires"], ok: 0, expl: "Elles améliorent les impacts sociaux et environnementaux." },
          { q: "Une performance durable combine…", opts: ["les trois dimensions économique, sociale et environnementale", "uniquement le résultat financier", "uniquement les ventes"], ok: 0, expl: "Négliger une dimension fragilise les deux autres." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une entreprise rentable est forcément responsable.", rep: false, expl: "Elle peut être rentable en reportant ses coûts sur la collectivité." },
          { txt: "Former des apprentis peut constituer une externalité positive.", rep: true, expl: "La société profite de compétences diffusées au-delà de l'entreprise." },
          { txt: "La RSE se limite à des actions de communication.", rep: false, expl: "Elle suppose des engagements mesurables : emploi, sécurité, déchets, énergie." },
          { txt: "Les pouvoirs publics peuvent imposer des normes pour corriger une externalité.", rep: true, expl: "Normes, contrôles et taxes visent à faire payer le coût réel." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Donne la définition de la responsabilité sociétale des entreprises.", r: "La RSE est la prise en compte et l'assumption par l'entreprise des impacts sociaux et environnementaux de son activité, au-delà de son seul résultat financier." },
          { q: "Cite deux indicateurs de l'impact social et deux de l'impact environnemental.", r: "Impact social : le nombre d'accidents du travail et les heures de formation. Impact environnemental : la consommation d'eau et le tonnage de déchets." },
          { q: "Explique, par un exemple, ce qu'est une externalité négative.", r: "Une usine rejette ses effluents dans une rivière : les pêcheurs perdent leur revenu et la collectivité paie la dépollution, sans que l'entreprise supporte ce coût." },
          { q: "Pourquoi la RSE peut-elle être un atout pour l'entreprise ?", r: "Parce qu'elle réduit les risques, fidélise les clients et les salariés et facilite l'accès aux financements, tout en améliorant la performance globale." },
        ]},
        { type: "appariement", consigne: "Relie chaque action à la dimension concernée.", pointsPar: 1, items: [
          { g: ["Former les apprentis", "Traiter les effluents", "Équiper les postes de protection", "Développer les ventes"], d: ["Environnementale", "Sociale", "Économique", "Sociale (sécurité)"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 9 — RAS 3
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les parties prenantes de l'entreprise : acteurs internes et externes",
      theme: "Production dans les organisations",
      ras: "Déterminer les parties prenantes de l'entreprise, leurs contributions et leurs intérêts",
      valeurs: "Persévérance, Responsabilité",
      objectif: "identifier les parties prenantes internes et externes de l'entreprise",
      supportMeta: "Schéma des parties prenantes, étude de cas, cahier",
      revision: [
        ["Qu'est-ce que la RSE ?", "La prise en compte des impacts sociaux et environnementaux de l'activité."],
        ["Cite une externalité négative.", "Une rivière polluée dont la dépollution est payée par la collectivité."],
      ],
      mise: [
        "Qui s'intéresse au sort d'une entreprise, à part son propriétaire ?",
        "Ses salariés, ses clients, ses fournisseurs, sa banque, l'État, la commune, les riverains : tous sont concernés.",
      ],
      observation: "le schéma des parties prenantes affiché au tableau",
      observationSupport: "Schéma des parties prenantes (internes et externes) affiché ou distribué",
      technAna: "Étude de cas et questionnement dirigé",
      qa: [
        ["Qu'est-ce qu'une partie prenante ?", "Toute personne ou tout groupe qui est affecté par l'activité de l'entreprise, ou qui peut en influencer le fonctionnement."],
        ["Quelles sont les parties prenantes internes ?", "Celles qui appartiennent à l'entreprise ou y travaillent : les dirigeants, les salariés et leurs représentants, les propriétaires ou actionnaires."],
        ["Quelles sont les parties prenantes externes ?", "Celles qui sont en relation avec elle sans en faire partie : clients, fournisseurs, banques, État et collectivités, riverains, associations, partenaires."],
        ["Pourquoi cette notion est-elle importante ?", "Parce que la réussite de l'entreprise dépend de sa capacité à entretenir de bonnes relations avec tous ces acteurs, et pas seulement avec ses propriétaires."],
        ["Comment distinguer partie prenante directe et indirecte ?", "Directe : elle participe à l'activité par un contrat (salarié, client, fournisseur). Indirecte : elle subit ou observe l'activité (riverains, associations)."],
        ["L'État est-il une partie prenante ?", "Oui : il prélève l'impôt, fixe les règles et fournit des services dont l'entreprise dépend — routes, sécurité, formation."],
        ["Les parties prenantes ont-elles toutes la même importance ?", "Elles n'ont ni le même pouvoir ni la même urgence : l'entreprise doit hiérarchiser ses relations sans négliger les plus fragiles."],
      ],
      synthese: "Donc, une partie prenante est tout acteur affecté par l'activité de l'entreprise ou capable de l'influencer. Les parties prenantes internes en font partie — dirigeants, salariés, propriétaires ; les parties prenantes externes y sont liées sans en faire partie — clients, fournisseurs, banques, État, riverains. La performance durable suppose de tenir compte de toutes.",
      motsCles: ["parties prenantes", "acteurs internes", "acteurs externes", "dirigeants", "actionnaires", "riverains", "pouvoir d'influence"],
      image: { file: "t11_u1_parties.png", legende: "Figure 6 — Les parties prenantes internes et externes de l'entreprise." },
      contenu: [
        {
          sousTitre: "1. Les parties prenantes internes",
          texte: "Elles vivent l'entreprise de l'intérieur : leurs décisions et leur travail la font fonctionner.",
          liste: [
            "Les dirigeants : ils prennent les décisions stratégiques et rendent compte de leurs résultats.",
            "Les salariés : ils exécutent le travail, détiennent le savoir-faire et peuvent se syndiquer.",
            "Les propriétaires ou actionnaires : ils apportent les capitaux et attendent un retour sur leur apport.",
          ],
        },
        {
          sousTitre: "2. Les parties prenantes externes",
          texte: "Elles sont liées à l'entreprise par des contrats, des règles ou un voisinage, sans en faire partie.",
          liste: [
            "Les clients : ils achètent les produits et déterminent les recettes.",
            "Les fournisseurs : ils livrent matières, équipements et services.",
            "Les banques et les organismes de crédit : elles financent l'exploitation et l'investissement.",
            "L'État et les collectivités : ils fixent les règles, prélèvent l'impôt et fournissent les services publics.",
            "Les riverains et les associations : ils subissent les nuisances ou soutiennent les projets locaux.",
          ],
        },
        {
          sousTitre: "3. Directes et indirectes",
          texte: "La distinction aide à repérer qui peut agir directement sur l'entreprise et qui subit ses effets.",
          liste: [
            "Directe : un contrat lie l'acteur à l'entreprise (salarié, fournisseur, client, banque).",
            "Indirecte : aucun contrat, mais un effet réel (riverains, associations, opinion publique).",
            "Une partie prenante indirecte peut devenir directe : un riverain mécontent peut saisir la justice ou l'administration.",
          ],
        },
        {
          sousTitre: "4. Le pouvoir d'influence de chaque acteur",
          texte: "Tous les acteurs ne pèsent pas du même poids, et ce poids change selon les situations.",
          liste: [
            "Un client important peut imposer des délais ou un prix.",
            "Une banque peut refuser un crédit et bloquer un investissement.",
            "Un salarié qualifié dont le départ désorganiserait la production dispose d'un pouvoir réel.",
            "Une association peut alerter l'opinion et déclencher un contrôle administratif.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Une petite unité de transformation installée près d'un village :",
          liste: [
            "Internes : la gérante, six ouvriers, deux associés.",
            "Externes directes : les producteurs de fruits, trois boutiquiers clients, la banque, la commune.",
            "Externes indirectes : les familles riveraines, l'association des parents d'élèves, les pêcheurs en aval.",
            "Tous n'ont pas le même pouvoir, mais aucun ne peut être ignoré durablement.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une partie prenante est un acteur qui…", opts: ["est affecté par l'entreprise ou peut l'influencer", "achète ses produits uniquement", "n'a aucun lien avec elle"], ok: 0, expl: "La notion couvre tous les acteurs concernés, de près ou de loin." },
          { q: "Parmi les parties prenantes internes, on trouve…", opts: ["les salariés et les dirigeants", "les riverains", "les associations"], ok: 0, expl: "Ils travaillent dans l'entreprise ou la dirigent." },
          { q: "Un riverain qui subit des nuisances est une partie prenante…", opts: ["externe indirecte", "interne", "directe"], ok: 0, expl: "Aucun contrat ne le lie à l'entreprise, mais l'activité l'affecte." },
          { q: "L'État est une partie prenante car il…", opts: ["fixe les règles et prélève l'impôt", "achète toute la production", "dirige l'entreprise"], ok: 0, expl: "Il fournit aussi les services publics dont l'entreprise dépend." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Seuls les propriétaires sont concernés par la vie de l'entreprise.", rep: false, expl: "Salariés, clients, fournisseurs, banques et riverains le sont aussi." },
          { txt: "Un fournisseur est une partie prenante externe directe.", rep: true, expl: "Un contrat de vente le lie à l'entreprise." },
          { txt: "Une partie prenante indirecte ne peut jamais devenir directe.", rep: false, expl: "Un riverain peut saisir la justice et devenir un interlocuteur direct." },
          { txt: "Toutes les parties prenantes ont le même pouvoir d'influence.", rep: false, expl: "Le pouvoir varie selon la situation et les moyens de chacun." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Donne la définition d'une partie prenante.", r: "Une partie prenante est toute personne ou tout groupe affecté par l'activité de l'entreprise, ou capable d'en influencer le fonctionnement." },
          { q: "Cite trois parties prenantes internes et trois externes.", r: "Internes : les dirigeants, les salariés et les actionnaires. Externes : les clients, les fournisseurs et l'État." },
          { q: "Quelle différence y a-t-il entre une partie prenante directe et indirecte ?", r: "Une partie prenante directe est liée par un contrat, tandis qu'une partie prenante indirecte subit ou observe l'activité sans lien contractuel." },
          { q: "Donne un exemple de partie prenante externe qui exerce un fort pouvoir d'influence.", r: "Une banque qui refuse un crédit peut bloquer un investissement, donc peser lourdement sur la stratégie de l'entreprise." },
        ]},
        { type: "appariement", consigne: "Relie chaque acteur à sa catégorie.", pointsPar: 1, items: [
          { g: ["Le gérant", "Les riverains", "La banque", "Les ouvriers"], d: ["Externe indirecte", "Externe directe", "Interne", "Interne"], pairs: [[0, 2], [1, 0], [2, 1], [3, 3]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 10 — RAS 3
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Contributions et attentes des parties prenantes",
      theme: "Production dans les organisations",
      ras: "Déterminer les parties prenantes de l'entreprise, leurs contributions et leurs intérêts",
      valeurs: "Persévérance, Responsabilité",
      objectif: "distinguer ce que chaque partie prenante apporte à l'entreprise et ce qu'elle en attend",
      supportMeta: "Tableau contributions / attentes, étude de cas, cahier",
      revision: [
        ["Qu'est-ce qu'une partie prenante ?", "Tout acteur affecté par l'activité de l'entreprise ou capable de l'influencer."],
        ["Cite deux parties prenantes externes.", "Les clients et les fournisseurs (ou la banque, l'État, les riverains)."],
      ],
      mise: [
        "Chacun donne quelque chose à l'entreprise et attend quelque chose en retour. Donne un exemple.",
        "Le salarié donne son travail et attend un salaire ; le client donne son argent et attend un produit de qualité.",
      ],
      observation: "le tableau contributions / attentes affiché au tableau",
      observationSupport: "Tableau contributions et attentes des parties prenantes, affiché ou distribué",
      technAna: "Étude de cas, travail de groupe et questionnement",
      qa: [
        ["Qu'appelle-t-on la contribution d'une partie prenante ?", "Ce qu'elle apporte à l'entreprise : du travail, du capital, des matières, un crédit, des infrastructures, des règles, des achats, une réputation."],
        ["Qu'appelle-t-on l'attente d'une partie prenante ?", "Ce qu'elle espère obtenir en retour : un salaire, un dividende, un produit de qualité, un paiement, de l'emploi, un environnement préservé."],
        ["Que contribuent les salariés et qu'attendent-ils ?", "Ils apportent leur travail, leurs compétences et leur savoir-faire ; ils attendent un salaire régulier, de bonnes conditions de travail et une sécurité d'emploi."],
        ["Que contribuent les actionnaires et qu'attendent-ils ?", "Ils apportent les capitaux ; ils attendent un dividende et la valeur croissante de leur participation."],
        ["Que contribuent les clients et qu'attendent-ils ?", "Ils apportent leurs achats, donc les recettes ; ils attendent un produit de qualité, au bon prix et livré à temps."],
        ["Que contribuent l'État et la collectivité, et qu'attendent-ils ?", "Ils apportent les infrastructures, la sécurité, la formation et les règles ; ils attendent le respect de la loi, le paiement de l'impôt et de l'emploi."],
        ["Les attentes sont-elles toujours compatibles ?", "Non : certaines se complètent, d'autres s'opposent. Identifier cette diversité est la première étape pour gérer les tensions."],
      ],
      synthese: "Donc, chaque partie prenante entretient avec l'entreprise un échange : elle contribue — travail, capital, matières, crédit, règles, achats — et attend une contrepartie — salaire, dividende, qualité, paiement, emploi, environnement préservé. Comprendre ce double mouvement permet d'anticiper les désaccords.",
      motsCles: ["contribution", "attente", "salaire", "dividende", "qualité", "impôt", "conditions de travail"],
      image: { file: "t11_u1_contributions.png", legende: "Figure 7 — Ce que chacun apporte et ce que chacun attend." },
      contenu: [
        {
          sousTitre: "1. Le principe de l'échange",
          texte: "L'entreprise n'est pas isolée : elle vit d'un ensemble d'échanges avec les acteurs qui l'entourent.",
          liste: [
            "Chaque partie prenante apporte une ressource dont l'entreprise a besoin.",
            "Chacune attend une contrepartie à la mesure de son apport.",
            "L'équilibre de ces échanges conditionne la stabilité de l'entreprise.",
          ],
        },
        {
          sousTitre: "2. Les parties prenantes internes",
          texte: "Leurs contributions et attentes touchent au cœur du fonctionnement.",
          liste: [
            "Dirigeants : ils apportent leurs décisions et leur responsabilité ; ils attendent un résultat et la pérennité de l'entreprise.",
            "Salariés : ils apportent travail, compétences et savoir-faire ; ils attendent un salaire, la sécurité, la formation et la reconnaissance.",
            "Actionnaires : ils apportent le capital ; ils attendent un dividende et la valorisation de leur apport.",
          ],
        },
        {
          sousTitre: "3. Les parties prenantes externes",
          texte: "Leurs contributions permettent à l'activité d'exister et de se développer.",
          liste: [
            "Clients : ils apportent les recettes ; ils attendent qualité, prix juste et délais respectés.",
            "Fournisseurs : ils apportent matières et équipements ; ils attendent des commandes et des paiements à l'échéance.",
            "Banques : elles apportent le financement ; elles attendent le remboursement et les intérêts.",
            "État et collectivités : ils apportent infrastructures, sécurité, formation et cadre juridique ; ils attendent le respect des règles et l'impôt.",
            "Riverains et associations : ils apportent l'acceptation sociale ; ils attendent la limitation des nuisances et des retombées locales.",
          ],
        },
        {
          sousTitre: "4. Hiérarchiser sans négliger",
          texte: "L'entreprise ne peut satisfaire pleinement toutes les attentes en même temps : elle doit arbitrer, sans oublier les acteurs les moins visibles.",
          liste: [
            "Priorité aux échanges indispensables à la continuité de l'activité : personnel, fournisseurs, clients.",
            "Attention aux acteurs sans voix directe : riverains, environnement, générations futures.",
            "Un arbitrage durable explique ses choix plutôt qu'il ne les impose.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Une coopérative de transformation de vanille :",
          liste: [
            "Producteurs adhérents : apportent la récolte, attendent un prix rémunérateur et un paiement rapide.",
            "Salariés de la coopérative : apportent le travail de préparation, attendent un salaire et la sécurité.",
            "Acheteurs exportateurs : apportent les commandes, attendent qualité et régularité.",
            "Commune : apporte l'accès routier, attend de l'emploi local et le respect des règles.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La contribution d'une partie prenante est…", opts: ["ce qu'elle apporte à l'entreprise", "ce qu'elle gagne", "son nombre d'employés"], ok: 0, expl: "Travail, capital, matières, crédit ou règles sont des contributions." },
          { q: "Les actionnaires attendent surtout…", opts: ["un dividende", "un salaire", "un crédit"], ok: 0, expl: "Leur rémunération est liée au capital apporté." },
          { q: "Les salariés contribuent par…", opts: ["leur travail et leurs compétences", "leurs dividendes", "leur impôt"], ok: 0, expl: "Ils apportent la force de travail et le savoir-faire." },
          { q: "L'État attend de l'entreprise…", opts: ["le respect des règles et le paiement de l'impôt", "un dividende", "un salaire"], ok: 0, expl: "Sa contrepartie est l'usage des infrastructures et services publics." },
        ]},
        { type: "appariement", consigne: "Relie chaque acteur à son attente principale.", pointsPar: 1, items: [
          { g: ["Les salariés", "Les actionnaires", "Les clients", "La banque"], d: ["Un dividende", "Un produit de qualité au bon prix", "Le remboursement et les intérêts", "Un salaire et la sécurité"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Distingue contribution et attente d'une partie prenante.", r: "La contribution est ce que l'acteur apporte à l'entreprise ; l'attente est la contrepartie qu'il espère en retour." },
          { q: "Cite la contribution et l'attente des fournisseurs.", r: "Ils apportent les matières et les équipements, et attendent des commandes régulières et des paiements à l'échéance." },
          { q: "Cite la contribution et l'attente de l'État.", r: "Il apporte les infrastructures, la sécurité et le cadre juridique, et attend le respect des règles, l'impôt et la création d'emplois." },
          { q: "Pourquoi l'entreprise doit-elle arbitrer entre les attentes ?", r: "Parce qu'elle ne peut pas toutes les satisfaire pleinement en même temps : elle doit hiérarchiser sans négliger les acteurs les moins visibles." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Les salariés apportent leur travail et attendent un", suite: "salaire" },
          { debut: "Les actionnaires apportent le capital et attendent un", suite: "dividende" },
          { debut: "Les clients apportent les recettes et attendent la", suite: "qualité" },
          { debut: "La banque apporte le financement et attend le", suite: "remboursement" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 11 — RAS 3
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Intérêts convergents et divergents : comprendre les conflits",
      theme: "Production dans les organisations",
      ras: "Déterminer les parties prenantes de l'entreprise, leurs contributions et leurs intérêts",
      valeurs: "Persévérance, Responsabilité",
      objectif: "distinguer les intérêts convergents et divergents et expliquer comment se règlent les conflits",
      supportMeta: "Études de cas de conflits, textes du droit du travail, cahier",
      revision: [
        ["Qu'est-ce que la contribution d'une partie prenante ?", "Ce qu'elle apporte à l'entreprise."],
        ["Cite l'attente principale des salariés et celle des actionnaires.", "Un salaire et des conditions de travail correctes ; un dividende."],
      ],
      mise: [
        "Augmenter les salaires ou distribuer plus de dividendes : peut-on faire les deux ?",
        "Pas toujours : la même somme ne peut être dépensée deux fois, le choix oppose deux intérêts.",
      ],
      observation: "les études de cas de situations conflictuelles distribuées en classe",
      observationSupport: "Études de cas (hausse des salaires, mécanisation, pollution) et textes du droit du travail",
      technAna: "Étude de cas, débat dirigé et jeu de rôle",
      qa: [
        ["Qu'est-ce qu'un intérêt convergent ?", "Un objectif commun à plusieurs parties prenantes : la pérennité de l'entreprise sert à la fois les salariés, les dirigeants et les créanciers."],
        ["Qu'est-ce qu'un intérêt divergent ?", "Un objectif qui s'oppose à celui d'un autre acteur : un salaire plus élevé réduit le profit distribuable."],
        ["Cite trois conflits d'intérêts fréquents.", "Salaires contre dividendes ; prix bas pour le client contre marge du producteur ; rentabilité immédiate contre protection de l'environnement."],
        ["Comment la mécanisation crée-t-elle un conflit ?", "Elle augmente la productivité et les gains, mais elle peut supprimer des emplois : l'intérêt de l'entreprise s'oppose alors à celui des salariés concernés."],
        ["Comment se règlent ces conflits ?", "Par la négociation — dialogue social, accords d'entreprise —, par le contrat, par la loi et le règlement, et par l'arbitrage ou le juge en dernier recours."],
        ["Quel rôle joue le droit du travail ?", "Il fixe des règles minimales — durée, salaire minimum, sécurité, procédures de licenciement — que la négociation peut améliorer mais pas réduire."],
        ["Un conflit est-il toujours mauvais ?", "Non : exprimé et réglé, il révèle un problème réel et permet de trouver une solution durable ; ignoré, il dégénère en grève, en départ ou en contentieux."],
        ["Quelles sont les qualités d'une bonne négociation ?", "Écouter, chiffrer les enjeux, chercher des solutions qui profitent aux deux parties, respecter ses engagements."],
      ],
      synthese: "Donc, les intérêts des parties prenantes sont tantôt convergents — tous gagnent à la pérennité de l'entreprise — tantôt divergents — la répartition de la valeur crée des oppositions. Ces conflits se règlent par la négociation, le contrat, la loi, et par le juge en dernier recours. Exprimés à temps, ils sont une chance d'amélioration plutôt qu'une menace.",
      motsCles: ["intérêts convergents", "intérêts divergents", "conflit", "négociation", "dialogue social", "droit du travail", "arbitrage"],
      contenu: [
        {
          sousTitre: "1. Des intérêts convergents",
          texte: "Une part importante des objectifs est commune : c'est ce qui fait tenir l'entreprise.",
          liste: [
            "La pérennité de l'entreprise : salariés, dirigeants et créanciers y gagnent.",
            "La productivité : elle permet à la fois des salaires plus élevés et des résultats meilleurs.",
            "La qualité : elle fidélise les clients et sécurise l'emploi.",
            "La formation : elle profite au salarié et à l'entreprise.",
          ],
        },
        {
          sousTitre: "2. Des intérêts divergents",
          texte: "La répartition de la valeur créée met en jeu des objectifs opposés.",
          liste: [
            "Salaires contre dividendes : la valeur ajoutée distribuée à l'un n'ira pas à l'autre.",
            "Prix bas pour le client contre marge du producteur.",
            "Rentabilité immédiate contre investissement de long terme.",
            "Production contre environnement : traiter les rejets coûte cher à court terme.",
            "Emploi contre mécanisation : gagner en productivité peut supprimer des postes.",
          ],
        },
        {
          sousTitre: "3. Trois conflits types",
          texte: "Les situations les plus fréquentes se rattachent à quelques schémas simples.",
          liste: [
            "Le partage de la valeur ajoutée : quelle part aux salaires, aux investissements, aux dividendes ?",
            "L'organisation du travail : horaires, cadences, sécurité, formation.",
            "Les effets sur le territoire : nuisances, emploi local, usage des ressources naturelles.",
          ],
        },
        {
          sousTitre: "4. Les modes de règlement",
          texte: "Une société organise la résolution des conflits pour éviter qu'ils ne se transforment en épreuves de force.",
          liste: [
            "La négociation : dialogue entre les parties, accords collectifs, compromis chiffrés.",
            "Le contrat : il fixe les engagements de chacun et prévoit les conséquences d'un manquement.",
            "La loi : le droit du travail, le droit de l'environnement et le droit de la concurrence imposent des règles minimales.",
            "Le juge : en dernier recours, il tranche et sa décision s'impose aux parties.",
          ],
        },
        {
          sousTitre: "5. Conduire une négociation",
          texte: "Une négociation réussie transforme un conflit en accord durable.",
          liste: [
            "Écouter la position de l'autre et identifier les besoins réels derrière les demandes.",
            "Chiffrer les enjeux : combien coûte la mesure, que rapporte-t-elle ?",
            "Chercher les gains partagés : formation contre flexibilité, qualité contre prix.",
            "Mettre l'accord par écrit, en fixer la durée et les modalités de suivi.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Un intérêt convergent est…", opts: ["un objectif commun à plusieurs parties prenantes", "un désaccord sur les salaires", "un conflit juridique"], ok: 0, expl: "Exemple : la pérennité de l'entreprise profite à tous." },
          { q: "Parmi les conflits fréquents, on trouve…", opts: ["salaires contre dividendes", "clients contre produits", "machines contre outils"], ok: 0, expl: "Il s'agit d'un conflit de répartition de la valeur ajoutée." },
          { q: "Le droit du travail fixe…", opts: ["des règles minimales que la négociation peut améliorer", "les salaires maximum", "le prix de vente"], ok: 0, expl: "On ne peut pas déroger en dessous de la loi." },
          { q: "En dernier recours, un conflit peut être tranché par…", opts: ["le juge", "le client", "le fournisseur"], ok: 0, expl: "Sa décision s'impose aux parties." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La mécanisation ne crée jamais de tension dans l'entreprise.", rep: false, expl: "Elle peut supprimer des emplois : l'intérêt des salariés concernés s'y oppose." },
          { txt: "Un conflit exprimé à temps peut améliorer le fonctionnement de l'entreprise.", rep: true, expl: "Il révèle un problème réel avant qu'il ne dégénère." },
          { txt: "Un accord négocié peut déroger à la loi dans un sens défavorable aux salariés.", rep: false, expl: "La loi fixe un plancher : l'accord ne peut qu'améliorer la situation." },
          { txt: "La négociation suppose de chiffrer les enjeux.", rep: true, expl: "Sans évaluation des coûts et des gains, aucun compromis solide." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Donne la différence entre intérêts convergents et intérêts divergents.", r: "Les intérêts convergents sont des objectifs communs à plusieurs parties prenantes, tandis que les intérêts divergents s'opposent dans la répartition de la valeur créée." },
          { q: "Cite deux conflits d'intérêts fréquents dans une entreprise.", r: "Les salaires contre les dividendes, et la rentabilité immédiate contre la protection de l'environnement." },
          { q: "Cite trois modes de règlement d'un conflit.", r: "La négociation, le contrat et la loi (le juge intervenant en dernier recours)." },
          { q: "Pourquoi dit-on qu'un conflit n'est pas toujours mauvais ?", r: "Parce que, exprimé et réglé, il révèle un problème réel et permet de trouver une solution durable ; ignoré, il dégénère en grève ou en contentieux." },
        ]},
        { type: "appariement", consigne: "Relie chaque situation au mode de règlement adapté.", pointsPar: 1, items: [
          { g: ["Désaccord sur les horaires", "Licenciement contesté", "Nuisances subies par des riverains", "Prix d'une commande"], d: ["Le juge", "Le respect de la réglementation", "Le contrat commercial", "La négociation"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
    },
  ],
};

module.exports = U;
