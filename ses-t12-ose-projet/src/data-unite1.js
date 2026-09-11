// ============================================================
// Unité I — Croissance et développement (PE T12 série OSE — 30 heures)
// RAS 1 : Déterminer les facteurs de la croissance économique
// RAS 2 : Analyser les différents facteurs de développement
// RAS 3 : Evaluer les rôles de la croissance économique face au développement durable
// Découpage : 15 séances de cours + 1 révision + 1 sujet d'examen
// Valeurs : Persévérance, goût de l'effort et de l'excellence
// ============================================================

const U = {
  num: "I",
  titre: "Croissance et développement",
  ras: "Déterminer les facteurs de la croissance économique · Analyser les différents facteurs de développement · Evaluer les rôles de la croissance économique face au développement durable",
  valeurs: "Persévérance, goût de l'effort et de l'excellence",
  duree: "30 heures",
  themes: [
    "Le produit intérieur brut : définition",
    "Le calcul du PIB",
    "Les limites du PIB",
    "Les sources de la croissance : le travail et le capital",
    "Le progrès technique et la productivité globale des facteurs",
    "Croissance extensive et croissance intensive",
    "La croissance, un phénomène endogène",
    "Croissance et développement : deux notions",
    "Les indicateurs du développement : le RNB et l'IDH",
    "Les causes du sous-développement",
    "Le cercle vicieux du sous-développement",
    "Les politiques économiques de développement",
    "Les limites écologiques de la croissance",
    "Soutenabilité faible et soutenabilité forte",
    "Les politiques environnementales",
  ],
  topics: [
    // ---------------------------------------------------------
    // SÉANCE 1 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le produit intérieur brut : définition",
      theme: "Croissance et développement",
      ras: "Déterminer les facteurs de la croissance économique",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "définir le PIB et distinguer production intérieure et revenu national",
      supportMeta: "Documents statistiques, extraits de comptes nationaux, cahier",
      revision: [
        ["Qu'est-ce que la valeur ajoutée ?", "La valeur de la production diminuée des consommations intermédiaires : c'est la richesse créée par l'unité de production."],
        ["Quelle différence y a-t-il entre production et productivité ?", "La production est la quantité fabriquée ; la productivité rapporte cette quantité aux moyens utilisés."],
      ],
      mise: [
        "Un pays produit du riz, des vêtements et des services de transport. Comment sait-on si sa production a augmenté cette année ?",
        "On mesure la valeur de tout ce qui a été produit pendant l'année, à condition de ne compter chaque chose qu'une seule fois.",
      ],
      observation: "le tableau des productions d'un pays affiché au tableau",
      observationSupport: "Tableau des productions par branche (agriculture, industrie, services) affiché ou distribué",
      technAna: "Lecture de tableau et calcul dirigé",
      qa: [
        ["Qu'est-ce que le produit intérieur brut ?", "C'est la valeur de l'ensemble des biens et services produits sur le territoire d'un pays au cours d'une année, par des unités résidentes ou non résidentes."],
        ["Pourquoi dit-on « intérieur » ?", "Parce que l'on retient tout ce qui est produit à l'intérieur du territoire, quelle que soit la nationalité de l'entreprise qui produit."],
        ["Pourquoi dit-on « brut » ?", "Parce que l'on ne déduit pas l'usure des équipements utilisés pour produire : l'amortissement n'est pas retiré du résultat."],
        ["Comment évite-t-on de compter deux fois la même chose ?", "En additionnant les valeurs ajoutées et non les productions brutes : la valeur ajoutée retire les consommations intermédiaires déjà comptées chez le fournisseur."],
        ["Que désigne le PIB par habitant ?", "Le PIB divisé par le nombre d'habitants : il donne un ordre de grandeur de la production moyenne par personne, sans rien dire de sa répartition."],
        ["Quelle différence y a-t-il entre PIB et PNB ?", "Le PIB retient la production réalisée sur le territoire ; le PNB retient la production des unités résidentes, où qu'elle ait lieu."],
        ["Pourquoi le PIB est-il un indicateur de référence ?", "Parce qu'il est calculé selon des règles communes à tous les pays, ce qui permet des comparaisons dans le temps et dans l'espace."],
        ["Le PIB mesure-t-il le bien-être ?", "Non : il mesure une production. Le bien-être dépend aussi de la répartition des revenus, de la santé, de l'éducation et de l'état de l'environnement."],
      ],
      synthese: "Donc, le PIB mesure la valeur de la production réalisée sur le territoire pendant une année. On l'obtient en additionnant les valeurs ajoutées des unités productives, augmentées des impôts sur les produits et diminuées des subventions. Divisé par la population, il donne un ordre de grandeur de la production moyenne par habitant ; il ne dit rien de la façon dont cette richesse est partagée.",
      motsCles: ["produit intérieur brut", "valeur ajoutée", "production intérieure", "territoire", "amortissement", "PIB par habitant", "consommations intermédiaires"],
      image: { file: "t12_u1_pib.png", legende: "Figure 1 — Le produit intérieur brut : de quoi parle-t-on ?" },
      contenu: [
        {
          sousTitre: "1. Une mesure de la production",
          texte: "Le produit intérieur brut est l'indicateur central de la comptabilité nationale : il mesure l'activité de production d'un pays pendant une année.",
          liste: [
            "Il retient les biens et les services produits sur le territoire national, par des entreprises nationales ou étrangères.",
            "Il est calculé pour une période donnée, le plus souvent l'année civile : c'est un flux, pas un stock.",
            "Il ne compte que la production destinée au marché ou fournie gratuitement par les administrations, évaluée à son coût de production.",
          ],
        },
        {
          sousTitre: "2. Comment ne rien compter deux fois",
          texte: "Additionner les chiffres d'affaires de toutes les entreprises compterait deux ou trois fois la même marchandise : le riz du paysan, la farine du meunier, le pain du boulanger. La comptabilité nationale additionne donc les valeurs ajoutées.",
          liste: [
            "Valeur ajoutée = valeur de la production − consommations intermédiaires.",
            "Exemple : le boulanger vend son pain 1 200 Ar ; il a acheté pour 500 Ar de farine et d'énergie. Sa valeur ajoutée est de 700 Ar.",
            "La somme des valeurs ajoutées de toutes les unités donne la production intérieure, à laquelle on ajoute les impôts sur les produits et dont on retire les subventions.",
          ],
        },
        {
          sousTitre: "3. Intérieur et national, brut et net",
          texte: "Deux précisions de vocabulaire évitent les confusions les plus fréquentes.",
          liste: [
            "Intérieur renvoie au territoire : la production d'une usine installée dans le pays entre dans le PIB, même si ses propriétaires vivent à l'étranger.",
            "National renvoie à la résidence : le PNB retient la production des unités résidentes, où qu'elle soit réalisée.",
            "Brut signifie que l'on ne déduit pas l'amortissement ; en le déduisant, on obtient le produit intérieur net.",
          ],
        },
        {
          sousTitre: "4. Le PIB par habitant et la croissance",
          texte: "Le PIB par habitant permet de comparer des pays de taille très différente. Son évolution d'une année à l'autre mesure la croissance économique.",
          liste: [
            "Taux de croissance = (PIB de l'année − PIB de l'année précédente) ÷ PIB de l'année précédente × 100.",
            "Exemple : un PIB qui passe de 80 000 à 82 400 milliards d'ariary progresse de 3 %.",
            "La croissance peut venir d'une production plus importante ou d'une hausse des prix : on distingue alors croissance en volume et croissance en valeur.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le PIB mesure…", opts: ["la production réalisée sur le territoire pendant une année", "la richesse possédée par les habitants", "le budget de l'État"], ok: 0, expl: "C'est un flux de production, calculé sur une période." },
          { q: "Pour éviter les doubles comptes, on additionne…", opts: ["les valeurs ajoutées", "les chiffres d'affaires", "les bénéfices"], ok: 0, expl: "La valeur ajoutée retire les consommations intermédiaires." },
          { q: "Le PIB est dit « brut » parce que…", opts: ["l'on ne déduit pas l'amortissement", "il comprend les impôts", "il est calculé avant impôt"], ok: 0, expl: "Le produit intérieur net, lui, déduit l'usure des équipements." },
          { q: "Un PIB qui passe de 80 000 à 82 400 milliards progresse de…", opts: ["3 %", "2,4 %", "0,3 %"], ok: 0, expl: "2 400 ÷ 80 000 = 0,03, soit 3 %." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La production d'une usine étrangère installée dans le pays entre dans le PIB.", rep: true, expl: "Le PIB retient le territoire, quelle que soit la nationalité du producteur." },
          { txt: "Le PIB mesure le bien-être de la population.", rep: false, expl: "Il mesure une production ; le bien-être est une notion plus large." },
          { txt: "Le PIB est un flux calculé sur une période.", rep: true, expl: "On le calcule pour une année, jamais en stock." },
          { txt: "Le PIB par habitant indique comment la richesse est répartie.", rep: false, expl: "C'est une moyenne : elle ne dit rien de la répartition." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Donne la définition du produit intérieur brut.", r: "Le produit intérieur brut est la valeur de l'ensemble des biens et services produits sur le territoire d'un pays au cours d'une année." },
          { q: "Pourquoi additionne-t-on les valeurs ajoutées et non les productions brutes ?", r: "Parce que la valeur ajoutée retire les consommations intermédiaires, ce qui évite de compter plusieurs fois la même marchandise à chaque stade de la production." },
          { q: "Quelle différence y a-t-il entre PIB et PNB ?", r: "Le PIB retient la production réalisée sur le territoire, tandis que le PNB retient la production des unités résidentes, où qu'elle ait lieu." },
          { q: "Calcule le taux de croissance d'un PIB qui passe de 50 000 à 51 500 milliards d'ariary.", r: "La hausse est de 1 500 milliards, soit 1 500 ÷ 50 000 = 3 % de croissance." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Valeur ajoutée = valeur de la production moins les", suite: "consommations intermédiaires" },
          { debut: "Le PIB est un", suite: "flux" },
          { debut: "Le PIB divisé par la population donne le PIB par", suite: "habitant" },
          { debut: "En déduisant l'amortissement du PIB, on obtient le produit intérieur", suite: "net" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 2 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le calcul du PIB",
      theme: "Croissance et développement",
      ras: "Déterminer les facteurs de la croissance économique",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "calculer le PIB par les trois approches et retrouver le même résultat",
      supportMeta: "Tableaux de comptes nationaux simplifiés, cahier, calculatrice",
      revision: [
        ["Comment définit-on le PIB ?", "C'est la valeur de la production intérieure d'un pays pendant une année, obtenue en additionnant les valeurs ajoutées."],
        ["Pourquoi l'indicateur est-il dit « intérieur » ?", "Parce qu'il retient tout ce qui est produit sur le territoire, quelle que soit la nationalité du producteur."],
      ],
      mise: [
        "Une entreprise produit, paie des salaires et vend sa marchandise. Ces trois opérations donnent-elles trois valeurs différentes ?",
        "Non : ce qui est produit est forcément vendu et se transforme en revenus. Les trois approches doivent donc aboutir au même montant.",
      ],
      observation: "le tableau présentant les trois approches du PIB",
      observationSupport: "Tableau des trois approches (dépense, production, revenu) affiché ou distribué",
      technAna: "Lecture de tableau et calcul dirigé",
      qa: [
        ["Quelles sont les trois approches du PIB ?", "L'approche par la dépense, l'approche par la production et l'approche par le revenu : les trois donnent le même résultat."],
        ["Que contient l'approche par la dépense ?", "La consommation finale des ménages et des administrations, l'investissement, la variation des stocks et le solde des échanges extérieurs."],
        ["Comment écrit-on la formule par la dépense ?", "PIB = C + I + G + (X − M), où C est la consommation, I l'investissement, G les dépenses publiques, X les exportations et M les importations."],
        ["Que contient l'approche par la production ?", "La somme des valeurs ajoutées des branches, augmentée des impôts sur les produits et diminuée des subventions d'exploitation."],
        ["Que contient l'approche par le revenu ?", "La rémunération des salariés, l'excédent brut d'exploitation des entreprises, les revenus mixtes et les impôts nets des subventions."],
        ["Pourquoi les trois approches donnent-elles le même chiffre ?", "Parce que toute production donne lieu à une dépense d'achat et se distribue en revenus : les trois regards portent sur la même réalité."],
        ["Pourquoi retire-t-on les importations ?", "Parce qu'elles correspondent à une dépense de consommation ou d'investissement qui n'a pas été produite dans le pays."],
        ["Que mesure la consommation finale des administrations ?", "Les services non marchands rendus gratuitement ou quasi gratuitement : enseignement, santé publique, sécurité ; ils sont évalués à leur coût de production."],
      ],
      synthese: "Donc, le PIB peut être calculé de trois manières : en additionnant les dépenses finales, en additionnant les valeurs ajoutées, ou en additionnant les revenus distribués. Les trois approches donnent le même montant, car toute production trouve un acheteur et se distribue en revenus. L'écart observé dans les statistiques réelles vient des difficultés de mesure, non d'une différence de principe.",
      motsCles: ["approche par la dépense", "consommation finale", "investissement", "exportations", "importations", "valeurs ajoutées", "revenus", "excédent brut d'exploitation"],
      image: { file: "t12_u1_calcul_pib.png", legende: "Figure 2 — Les trois manières de calculer le PIB." },
      contenu: [
        {
          sousTitre: "1. L'approche par la dépense",
          texte: "Elle additionne les emplois finaux de la production : ce qui est acheté pour être consommé, investi ou exporté.",
          liste: [
            "Consommation finale (C) : dépenses des ménages et des administrations pour les services non marchands.",
            "Investissement ou formation brute de capital fixe (I) : machines, bâtiments, matériels, auxquels s'ajoute la variation des stocks.",
            "Dépenses publiques (G) : partie des dépenses des administrations non déjà comptée dans la consommation finale.",
            "Solde extérieur (X − M) : exportations diminuées des importations.",
            "Formule : PIB = C + I + G + (X − M).",
          ],
        },
        {
          sousTitre: "2. Un exemple chiffré",
          texte: "Prenons des montants simplifiés, en milliards d'ariary, pour un exercice.",
          liste: [
            "Consommation des ménages : 62 000.",
            "Investissement des entreprises et des administrations : 14 000.",
            "Dépenses publiques : 9 000.",
            "Exportations : 18 000 ; importations : 21 000 ; solde : −3 000.",
            "PIB = 62 000 + 14 000 + 9 000 − 3 000 = 82 000 milliards d'ariary.",
          ],
        },
        {
          sousTitre: "3. L'approche par la production",
          texte: "Elle additionne les valeurs ajoutées créées par chaque branche, puis ajuste des impôts et des subventions.",
          liste: [
            "Agriculture : 24 000 ; industrie : 15 000 ; services : 40 000.",
            "Impôts sur les produits : 5 000 ; subventions : 2 000 ; solde : 3 000.",
            "PIB = 24 000 + 15 000 + 40 000 + 3 000 = 82 000 milliards d'ariary.",
          ],
        },
        {
          sousTitre: "4. L'approche par le revenu",
          texte: "Elle additionne les revenus versés aux facteurs de production et les impôts nets.",
          liste: [
            "Rémunération des salariés : 38 000.",
            "Excédent brut d'exploitation et revenus mixtes : 41 000.",
            "Impôts sur la production et les importations, nets des subventions : 3 000.",
            "PIB = 38 000 + 41 000 + 3 000 = 82 000 milliards d'ariary.",
          ],
        },
        {
          sousTitre: "5. Pourquoi le même résultat",
          texte: "L'égalité des trois approches n'est pas une coïncidence : elle traduit l'identité fondamentale de la comptabilité nationale.",
          liste: [
            "Ce qui est produit est acheté, stocké ou exporté : production = emplois.",
            "Le prix payé se répartit en salaires, en profit et en impôts : emplois = revenus.",
            "Les écarts statistiques viennent de la qualité des sources, en particulier de la mesure de l'économie informelle.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Dans la formule PIB = C + I + G + (X − M), la lettre I désigne…", opts: ["l'investissement", "les impôts", "les importations"], ok: 0, expl: "I comme investissement, M comme importations." },
          { q: "On retire les importations parce qu'elles…", opts: ["n'ont pas été produites dans le pays", "sont trop chères", "sont des dépenses publiques"], ok: 0, expl: "Elles correspondent à une production étrangère." },
          { q: "L'approche par la production additionne…", opts: ["les valeurs ajoutées", "les salaires", "les exportations"], ok: 0, expl: "Chaque branche apporte sa valeur ajoutée." },
          { q: "Les services non marchands sont évalués…", opts: ["à leur coût de production", "à leur prix de vente", "à zéro"], ok: 0, expl: "Ils n'ont pas de prix de marché : on retient ce qu'ils coûtent." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Les trois approches du PIB donnent le même résultat.", rep: true, expl: "Toute production est achetée et se distribue en revenus." },
          { txt: "Les importations augmentent le PIB du pays.", rep: false, expl: "Elles sont retirées du calcul : c'est la production d'un autre pays." },
          { txt: "Les services publics gratuits entrent dans le PIB.", rep: true, expl: "Ils sont comptés pour leur coût de production." },
          { txt: "La variation des stocks ne compte jamais dans le PIB.", rep: false, expl: "Les biens produits et stockés comptent comme un investissement." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Écris la formule du PIB par la dépense et explique chaque terme.", r: "PIB = C + I + G + (X − M), où C est la consommation finale, I l'investissement, G les dépenses publiques, X les exportations et M les importations." },
          { q: "Calcule le PIB avec ces données : consommation 45 000, investissement 12 000, dépenses publiques 8 000, exportations 10 000, importations 13 000.", r: "PIB = 45 000 + 12 000 + 8 000 + (10 000 − 13 000) = 62 000 milliards d'ariary." },
          { q: "Pourquoi les trois approches aboutissent-elles au même montant ?", r: "Parce que la production réalisée est nécessairement achetée ou stockée, et que son prix se distribue en revenus : les trois regards mesurent la même réalité." },
          { q: "Comment sont comptés les services publics gratuits ?", r: "Ils sont évalués à leur coût de production : salaires des agents, consommations intermédiaires et amortissement." },
        ]},
        { type: "appariement", consigne: "Relie chaque grandeur à l'approche qui la retient.", pointsPar: 1, items: [
          { g: ["Consommation des ménages", "Somme des valeurs ajoutées", "Rémunération des salariés", "Exportations moins importations", "Excédent brut d'exploitation"], d: ["Revenu", "Dépense", "Production", "Revenu", "Dépense"], pairs: [[0, 1], [1, 2], [2, 0], [3, 1], [4, 0]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 3 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les limites du PIB",
      theme: "Croissance et développement",
      ras: "Déterminer les facteurs de la croissance économique",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "identifier ce que le PIB ne mesure pas et expliquer pourquoi il ne suffit pas",
      supportMeta: "Documents statistiques, textes courts, cahier",
      revision: [
        ["Comment calcule-t-on le PIB par la dépense ?", "En additionnant la consommation finale, l'investissement, les dépenses publiques et le solde des échanges extérieurs."],
        ["Pourquoi les trois approches donnent-elles le même total ?", "Parce que toute production est achetée ou stockée, puis se distribue en revenus."],
      ],
      mise: [
        "Une mère passe sa journée à cultiver son jardin, soigner un proche et préparer les repas. Ces activités augmentent-elles le PIB ?",
        "Non : elles ne donnent lieu à aucun échange marchand. Le PIB les ignore, alors qu'elles produisent de l'utilité.",
      ],
      observation: "la liste des activités non prises en compte par le PIB",
      observationSupport: "Liste d'activités (domestiques, bénévoles, informelles) affichée ou distribuée",
      technAna: "Exploitation de documents et discussion dirigée",
      qa: [
        ["Quelle est la première limite du PIB ?", "Le PIB ignore le travail domestique et bénévole : cuisiner, soigner, éduquer ses enfants ne donnent lieu à aucune transaction enregistrée."],
        ["Pourquoi l'économie informelle échappe-t-elle au PIB ?", "Parce que les échanges ne sont pas déclarés : le petit commerce non enregistré ou l'artisanat de rue ne laissent pas de trace dans les statistiques."],
        ["Le PIB tient-il compte de la répartition des revenus ?", "Non : un pays où la richesse est concentrée et un pays où elle est partagée peuvent avoir le même PIB par habitant."],
        ["Que se passe-t-il si une usine pollue une rivière ?", "Le PIB augmente avec la production de l'usine ; il n'enregistre ni la dégradation de l'eau, ni les dépenses de santé qu'elle provoque."],
        ["Comment le PIB traite-t-il une catastrophe naturelle ?", "Les dépenses de reconstruction augmentent le PIB, alors que la perte de richesses initiale n'est pas décomptée."],
        ["Le temps libre est-il pris en compte ?", "Non : travailler davantage fait monter le PIB, même si la population dispose de moins de temps pour se reposer et pour sa famille."],
        ["Faut-il renoncer au PIB ?", "Non : il reste utile pour mesurer la production et comparer les pays, à condition de le compléter par d'autres indicateurs."],
        ["Quels indicateurs complètent le PIB ?", "L'IDH, l'espérance de vie, le taux de scolarisation, les indicateurs de pauvreté, d'inégalité et d'empreinte écologique."],
      ],
      synthese: "Donc, le PIB mesure la production marchande et non marchande enregistrée, mais il laisse de côté le travail domestique, l'économie informelle, le temps libre, la répartition des revenus et les atteintes à l'environnement. Il reste un instrument précieux pour suivre l'activité, mais il ne suffit pas à juger du développement d'un pays : il faut le compléter par des indicateurs sociaux et environnementaux.",
      motsCles: ["limites du PIB", "travail domestique", "économie informelle", "répartition des revenus", "externalités", "temps libre", "indicateurs sociaux", "développement durable"],
      image: { file: "t12_u1_limites_pib.png", legende: "Figure 3 — Ce que le PIB mesure et ce qu'il ne mesure pas." },
      contenu: [
        {
          sousTitre: "1. Ce qui échappe à la mesure",
          texte: "Le PIB n'enregistre que les productions qui font l'objet d'une transaction ou qui sont fournies par les administrations. Une part importante de l'activité réelle lui échappe.",
          liste: [
            "Le travail domestique : repas, soins, éducation au foyer, travaux d'entretien réalisés par les membres du ménage.",
            "L'économie informelle : petits métiers, vente de rue, entraide rémunérée en nature, non déclarés aux administrations.",
            "Le bénévolat associatif : temps donné gratuitement à la communauté.",
          ],
        },
        {
          sousTitre: "2. Une moyenne qui cache la répartition",
          texte: "Le PIB par habitant est une moyenne : il ne dit rien de la façon dont la production est partagée entre les habitants.",
          liste: [
            "Deux pays peuvent avoir le même PIB par habitant et des situations sociales très différentes.",
            "Une hausse du PIB peut profiter à une minorité sans améliorer la situation de la majorité.",
            "C'est pourquoi l'on complète le PIB par des indicateurs d'inégalité et de pauvreté.",
          ],
        },
        {
          sousTitre: "3. Les atteintes à l'environnement ne sont pas déduites",
          texte: "Le PIB enregistre les dépenses de production, mais ne retire pas la valeur des ressources détruites ni le coût des nuisances créées.",
          liste: [
            "La déforestation fait monter le PIB par la vente de bois, sans déduire la perte de la forêt.",
            "La pollution augmente le PIB deux fois : par la production qui la cause, puis par les dépenses de réparation.",
            "L'épuisement d'une ressource non renouvelable n'apparaît comme une perte dans aucun compte.",
          ],
        },
        {
          sousTitre: "4. Le temps libre et la qualité de la vie",
          texte: "Le PIB valorise l'activité produite, jamais le temps dont disposent les personnes pour vivre.",
          liste: [
            "Travailler plus longtemps fait monter le PIB, même si la fatigue et la maladie augmentent.",
            "Les loisirs, la vie familiale et la participation à la vie locale n'ont pas de valeur marchande.",
            "La qualité de l'air, la sécurité, la beauté d'un paysage ne sont pas comptées.",
          ],
        },
        {
          sousTitre: "5. Que faire de ces limites ?",
          texte: "Reconnaître les limites du PIB ne conduit pas à l'abandonner, mais à le replacer parmi d'autres instruments.",
          liste: [
            "Le PIB reste irremplaçable pour mesurer l'activité, l'emploi et la conjoncture.",
            "L'IDH, l'espérance de vie et le niveau de scolarisation éclairent le développement humain.",
            "Les indicateurs d'inégalité et d'empreinte écologique complètent le diagnostic.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le travail domestique est…", opts: ["exclu du PIB", "compté à sa valeur marchande", "compté la moitié"], ok: 0, expl: "Aucune transaction n'est enregistrée." },
          { q: "Une marée noire suivie d'une opération de nettoyage…", opts: ["augmente le PIB", "fait baisser le PIB", "ne change rien au PIB"], ok: 0, expl: "Les dépenses de nettoyage entrent dans la production." },
          { q: "Le PIB par habitant est…", opts: ["une moyenne qui ne dit rien de la répartition", "un indicateur d'inégalité", "un indicateur de bien-être"], ok: 0, expl: "Deux répartitions très différentes donnent la même moyenne." },
          { q: "Pour compléter le PIB, on utilise…", opts: ["l'IDH et des indicateurs sociaux", "uniquement le chiffre d'affaires", "le budget de l'État"], ok: 0, expl: "Les indicateurs sociaux et environnementaux éclairent le développement." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "L'économie informelle est entièrement incluse dans le PIB.", rep: false, expl: "Faute de déclaration, une partie de l'activité n'est pas enregistrée." },
          { txt: "Le PIB déduit le coût des atteintes à l'environnement.", rep: false, expl: "Les nuisances ne sont pas retirées du calcul." },
          { txt: "Le PIB reste utile pour suivre l'activité économique.", rep: true, expl: "Il mesure correctement la production marchande et non marchande enregistrée." },
          { txt: "Le bénévolat associatif est compté dans le PIB.", rep: false, expl: "Aucune transaction marchande n'est enregistrée." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite trois activités qui produisent de l'utilité sans entrer dans le PIB.", r: "La préparation des repas au foyer, les soins apportés à un proche et le bénévolat associatif ne sont pas comptés dans le PIB." },
          { q: "Pourquoi le PIB par habitant ne suffit-il pas à juger du niveau de vie ?", r: "Parce que c'est une moyenne : elle ne dit rien de la façon dont la richesse est répartie entre les habitants." },
          { q: "Explique comment une catastrophe peut faire augmenter le PIB.", r: "Les dépenses de reconstruction et de réparation entrent dans la production, alors que la richesse détruite n'est déduite d'aucun compte." },
          { q: "Faut-il abandonner le PIB ? Justifie ta réponse.", r: "Non : le PIB reste utile pour mesurer l'activité et la comparer, mais il doit être complété par des indicateurs de santé, d'éducation, d'inégalité et d'environnement." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Les activités réalisées au foyer sans échange marchand sont", suite: "exclues" },
          { debut: "Le PIB ne tient pas compte de la", suite: "répartition" },
          { debut: "La pollution est une", suite: "externalité" },
          { debut: "L'indicateur qui combine santé, éducation et niveau de vie est l'", suite: "IDH" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 4 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les sources de la croissance : le travail et le capital",
      theme: "Croissance et développement",
      ras: "Déterminer les facteurs de la croissance économique",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "expliquer comment le travail et le capital alimentent la croissance",
      supportMeta: "Tableau de données, documents, cahier",
      revision: [
        ["Qu'est-ce que la croissance économique ?", "C'est l'augmentation durable de la production d'un pays, mesurée par la hausse du PIB en volume."],
        ["Qu'appelle-t-on valeur ajoutée ?", "La valeur de la production diminuée des consommations intermédiaires utilisées pour la réaliser."],
      ],
      mise: [
        "Deux rizières produisent des récoltes différentes : l'une est travaillée à la main, l'autre est labourée au motoculteur. D'où vient la différence ?",
        "La seconde dispose de plus de capital par travailleur : chaque heure de travail y est plus productive.",
      ],
      observation: "le tableau comparant deux ateliers de production",
      observationSupport: "Tableau comparant nombre de travailleurs, équipements et quantité produite",
      technAna: "Lecture de tableau et calcul dirigé",
      qa: [
        ["Quels sont les deux facteurs de la croissance ?", "Le travail et le capital : la production augmente quand leur quantité ou leur qualité progresse."],
        ["Comment le facteur travail agit-il ?", "Par la quantité — nombre d'actifs occupés et durée du travail — et par la qualité — formation, expérience, santé des travailleurs."],
        ["Comment le facteur capital agit-il ?", "Par la quantité d'équipements, de bâtiments et d'infrastructures, et par leur qualité : un matériel récent produit plus qu'un matériel usé."],
        ["Qu'est-ce que l'intensité capitalistique ?", "Le rapport entre le capital et le travail : le montant d'équipement dont dispose chaque travailleur."],
        ["Pourquoi dit-on que les facteurs sont complémentaires ?", "Parce qu'une machine sans conducteur formé ne produit rien, et un travailleur sans outil produit peu."],
        ["Que se passe-t-il quand on ajoute du capital sans cesse ?", "Les gains diminuent : chaque machine supplémentaire apporte moins que la précédente si le nombre de travailleurs ne suit pas."],
        ["Comment écrit-on la fonction de production ?", "Y = A × F(K, L) : la production dépend du capital K, du travail L, et de l'efficacité avec laquelle ils sont combinés, notée A."],
        ["Le seul cumul des facteurs explique-t-il toute la croissance ?", "Non : une part importante de la croissance vient du progrès technique et d'une meilleure organisation, mesurés par la productivité globale des facteurs."],
      ],
      synthese: "Donc, la croissance vient d'abord de l'accumulation du capital et de l'augmentation du travail disponible, mais ces deux facteurs n'expliquent pas tout. Leur efficacité compte autant que leur quantité : une machine récente et un travailleur formé produisent davantage. Cette part non expliquée par les quantités de facteurs est mesurée par la productivité globale des facteurs.",
      motsCles: ["croissance économique", "facteur travail", "facteur capital", "quantité", "qualité", "intensité capitalistique", "fonction de production", "rendements décroissants"],
      image: { file: "t12_u1_sources.png", legende: "Figure 4 — Les sources de la croissance : le travail et le capital." },
      contenu: [
        {
          sousTitre: "1. Le facteur travail",
          texte: "Le travail réunit l'activité humaine consacrée à la production. Il agit par sa quantité et par sa qualité.",
          liste: [
            "Quantité : nombre de personnes en emploi et durée effective du travail.",
            "Qualité : niveau de formation, expérience accumulée, état de santé, motivation.",
            "Une heure de travail d'un ouvrier qualifié produit davantage que celle d'un ouvrier non formé.",
          ],
        },
        {
          sousTitre: "2. Le facteur capital",
          texte: "Le capital rassemble les moyens durables de production : machines, outils, bâtiments, véhicules, réseaux, mais aussi les logiciels et les brevets.",
          liste: [
            "Quantité : le stock d'équipements disponibles dans le pays.",
            "Qualité : l'âge et la performance du matériel, la fiabilité des infrastructures.",
            "Un pays qui investit régulièrement renouvelle son capital et le rend plus efficace.",
          ],
        },
        {
          sousTitre: "3. Le capital par travailleur",
          texte: "Ce qui compte n'est pas le capital en soi, mais le capital dont dispose chaque travailleur : c'est l'intensité capitalistique.",
          liste: [
            "Exemple : un atelier de 10 couturiers équipés de 2 machines produit moins par personne que le même atelier équipé de 10 machines.",
            "Élever le capital par travailleur augmente la productivité du travail.",
            "Mais au-delà d'un certain seuil, chaque équipement supplémentaire apporte un gain plus faible : c'est la loi des rendements décroissants.",
          ],
        },
        {
          sousTitre: "4. La fonction de production",
          texte: "Les économistes résument ces relations dans une formule : Y = A × F(K, L).",
          liste: [
            "Y désigne la production, K le capital et L le travail.",
            "F décrit la manière dont les deux facteurs sont combinés.",
            "A mesure l'efficacité de la combinaison : c'est le progrès technique et l'organisation, étudiés à la séance suivante.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Les deux facteurs de production retenus sont…", opts: ["le travail et le capital", "le prix et la quantité", "l'épargne et l'impôt"], ok: 0, expl: "Le programme retient le facteur travail et le facteur capital." },
          { q: "L'intensité capitalistique mesure…", opts: ["le capital par travailleur", "le nombre de machines", "le montant des salaires"], ok: 0, expl: "C'est le rapport entre le capital et le travail." },
          { q: "Dans Y = A × F(K, L), la lettre A mesure…", opts: ["l'efficacité de la combinaison", "le nombre d'années", "l'amortissement"], ok: 0, expl: "A résume le progrès technique et l'organisation." },
          { q: "Selon la loi des rendements décroissants…", opts: ["chaque machine supplémentaire apporte un gain plus faible", "la production finit par baisser", "le capital ne sert à rien"], ok: 0, expl: "Les gains diminuent quand le capital augmente sans le travail." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La qualité du travail ne joue que sur les salaires, jamais sur la production.", rep: false, expl: "Un travailleur formé produit davantage à temps égal." },
          { txt: "Un capital plus récent est généralement plus productif.", rep: true, expl: "Le progrès technique est incorporé dans le matériel neuf." },
          { txt: "Les facteurs travail et capital sont substituables mais jamais complémentaires.", rep: false, expl: "Ils sont les deux : une machine sans conducteur ne produit rien." },
          { txt: "Investir permet de renouveler et d'agrandir le capital.", rep: true, expl: "L'investissement est la source de l'accumulation du capital." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Comment le facteur travail contribue-t-il à la croissance ?", r: "Il y contribue par sa quantité, c'est-à-dire le nombre d'actifs occupés et la durée du travail, et par sa qualité, c'est-à-dire la formation et l'expérience des travailleurs." },
          { q: "Qu'est-ce que l'intensité capitalistique ?", r: "C'est le rapport entre le capital disponible et le nombre de travailleurs : le montant d'équipement dont dispose chaque travailleur." },
          { q: "Explique la loi des rendements décroissants par un exemple.", r: "Dans un atelier de dix personnes, ajouter une onzième machine sans embaucher personne augmente peu la production : chaque équipement supplémentaire apporte un gain plus faible." },
          { q: "Comment se lit la formule Y = A × F(K, L) ?", r: "La production Y dépend du capital K et du travail L, combinés selon une fonction F, avec un coefficient d'efficacité A qui résume le progrès technique." },
        ]},
        { type: "appariement", consigne: "Relie chaque situation au levier mobilisé.", pointsPar: 1, items: [
          { g: ["Embaucher deux ouvriers supplémentaires", "Acheter une machine plus rapide", "Former les employés au nouveau matériel", "Construire un atelier plus vaste", "Améliorer l'état de santé des équipes"], d: ["Qualité du travail", "Quantité de capital", "Quantité de travail", "Qualité du travail", "Quantité de capital"], pairs: [[0, 2], [1, 1], [2, 0], [3, 1], [4, 0]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 5 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le progrès technique et la productivité globale des facteurs",
      theme: "Croissance et développement",
      ras: "Déterminer les facteurs de la croissance économique",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "définir la productivité globale des facteurs et montrer le rôle du progrès technique",
      supportMeta: "Graphiques, documents techniques, cahier",
      revision: [
        ["Quels sont les deux facteurs de production ?", "Le travail et le capital."],
        ["Qu'est-ce que l'intensité capitalistique ?", "Le rapport entre le capital et le travail : l'équipement dont dispose chaque travailleur."],
      ],
      mise: [
        "Deux pays ont le même nombre de travailleurs et les mêmes machines, mais l'un produit deux fois plus. Comment est-ce possible ?",
        "Le second combine mieux ses facteurs : meilleure organisation, travailleurs mieux formés, procédés plus efficaces.",
      ],
      observation: "le graphique de la production par heure de travail",
      observationSupport: "Graphique comparant deux trajectoires de productivité affiché ou distribué",
      technAna: "Lecture de graphique et discussion dirigée",
      qa: [
        ["Qu'est-ce que la productivité globale des facteurs ?", "C'est la partie de la croissance qui ne s'explique ni par l'augmentation du travail ni par celle du capital : elle mesure l'efficacité de leur combinaison."],
        ["Que contient la PGF ?", "Le progrès technique, les innovations d'organisation, la qualification et la santé des travailleurs, la qualité des institutions."],
        ["Comment mesure-t-on la productivité du travail ?", "En rapportant la production à la quantité de travail : la production par heure travaillée ou par personne employée."],
        ["Qu'est-ce que le progrès technique ?", "L'ensemble des innovations qui permettent de produire davantage ou mieux avec la même quantité de facteurs."],
        ["Quelle différence y a-t-il entre innovation de produit et innovation de procédé ?", "L'innovation de produit crée un bien nouveau ; l'innovation de procédé change la manière de le fabriquer."],
        ["Pourquoi le progrès technique est-il incorporé au capital ?", "Parce qu'il prend souvent la forme de machines nouvelles : pour en profiter, il faut investir et renouveler l'équipement."],
        ["Comment le progrès technique se diffuse-t-il ?", "Par l'imitation, la formation, la concurrence entre entreprises et l'adoption de normes communes."],
        ["Pourquoi la PGF est-elle la source la plus durable de croissance ?", "Parce que les facteurs ont des rendements décroissants, alors que les connaissances peuvent profiter à tous sans s'épuiser."],
      ],
      synthese: "Donc, l'accumulation des facteurs ne suffit pas à expliquer la croissance : une part décisive vient de la productivité globale des facteurs, c'est-à-dire du progrès technique et de l'efficacité de l'organisation. Cette part se lit sur un graphique comme le déplacement de la courbe de productivité vers le haut. Elle est la source la plus durable de croissance, car les connaissances ne s'usent pas en servant.",
      motsCles: ["productivité globale des facteurs", "progrès technique", "innovation", "productivité du travail", "organisation", "capital humain", "diffusion", "rendements croissants"],
      image: { file: "t12_u1_pgf.png", legende: "Figure 5 — La productivité globale des facteurs et le progrès technique." },
      contenu: [
        {
          sousTitre: "1. Une croissance qui ne s'explique pas par les quantités",
          texte: "Les économistes constatent que la hausse de la production dépasse souvent ce que l'augmentation du travail et du capital permet d'expliquer.",
          liste: [
            "On appelle productivité globale des facteurs, ou PGF, ce supplément inexpliqué.",
            "Elle mesure l'efficacité avec laquelle les facteurs sont combinés.",
            "Elle se lit dans le coefficient A de la fonction de production Y = A × F(K, L).",
          ],
        },
        {
          sousTitre: "2. Ce que contient la PGF",
          texte: "La PGF n'est pas un résidu mystérieux : elle rassemble des réalités concrètes et identifiables.",
          liste: [
            "Le progrès technique : procédés nouveaux, matériel plus performant, variétés améliorées.",
            "L'organisation du travail : répartition des tâches, gestion des stocks, réduction des temps morts.",
            "Le capital humain : formation initiale, expérience, santé des travailleurs.",
            "La qualité des institutions : sécurité juridique, respect des contrats, concurrence loyalement ouverte.",
          ],
        },
        {
          sousTitre: "3. Le progrès technique",
          texte: "Le progrès technique désigne toute innovation qui permet d'obtenir davantage avec les mêmes moyens, ou la même chose avec moins de moyens.",
          liste: [
            "Innovation de procédé : semences à meilleur rendement, irrigation goutte à goutte, machine plus rapide.",
            "Innovation d'organisation : chaîne de production mieux agencée, maintenance préventive.",
            "Innovation de produit : nouveau service, nouvelle variété offerte sur le marché.",
            "Le progrès technique est souvent incorporé : il arrive avec la machine neuve que l'on achète.",
          ],
        },
        {
          sousTitre: "4. Lire le graphique",
          texte: "Sur un graphique qui met en relation le temps et la production par heure de travail, le progrès technique se voit clairement.",
          liste: [
            "Sans progrès, la courbe monte lentement : elle ne suit que l'ajout de capital.",
            "Avec le progrès technique, la courbe se déplace vers le haut, à quantité de facteurs égale.",
            "Ce déplacement est la mesure visuelle de la PGF.",
          ],
        },
        {
          sousTitre: "5. Pourquoi la PGF est la clé",
          texte: "Les facteurs s'épuisent en rendement, pas les connaissances : c'est ce qui rend la PGF décisive sur le long terme.",
          liste: [
            "Ajouter sans cesse des machines finit par rapporter de moins en moins.",
            "Une connaissance nouvelle peut être utilisée par toutes les entreprises en même temps.",
            "Un pays qui forme sa population et diffuse les innovations entretient sa croissance.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La PGF mesure…", opts: ["l'efficacité de la combinaison des facteurs", "la quantité de machines", "le nombre d'heures travaillées"], ok: 0, expl: "C'est la part de la croissance non expliquée par les quantités." },
          { q: "Une semence à meilleur rendement est…", opts: ["une innovation de procédé", "une innovation de produit", "une innovation financière"], ok: 0, expl: "Elle change la manière de produire." },
          { q: "Sur un graphique, le progrès technique se traduit par…", opts: ["un déplacement de la courbe vers le haut", "une courbe qui descend", "une courbe horizontale"], ok: 0, expl: "À facteurs égaux, on produit plus." },
          { q: "On dit du progrès technique qu'il est incorporé quand…", opts: ["il arrive avec un matériel neuf", "il est écrit dans un manuel", "il reste secret"], ok: 0, expl: "Il faut investir pour en profiter." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La PGF ne dépend que des machines.", rep: false, expl: "Elle inclut aussi l'organisation, la formation et les institutions." },
          { txt: "Les connaissances peuvent profiter à tous en même temps.", rep: true, expl: "Contrairement aux facteurs matériels, elles ne s'épuisent pas en servant." },
          { txt: "Le capital humain désigne les machines de l'entreprise.", rep: false, expl: "Il désigne les compétences et la santé des personnes." },
          { txt: "Former les travailleurs élève la productivité du travail.", rep: true, expl: "La formation fait partie de la PGF." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Donne la définition de la productivité globale des facteurs.", r: "C'est la part de la croissance qui ne s'explique ni par l'augmentation du travail ni par celle du capital : elle mesure l'efficacité de leur combinaison." },
          { q: "Cite quatre éléments qui composent la PGF.", r: "Le progrès technique, l'organisation du travail, la qualification et la santé des travailleurs, ainsi que la qualité des institutions." },
          { q: "Quelle différence y a-t-il entre innovation de produit et innovation de procédé ?", r: "L'innovation de produit crée un bien ou un service nouveau, tandis que l'innovation de procédé modifie la façon de le fabriquer." },
          { q: "Pourquoi la PGF est-elle la source de croissance la plus durable ?", r: "Parce que les facteurs matériels ont des rendements décroissants, alors que les connaissances peuvent être utilisées par tous sans s'épuiser." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "La PGF est la part de la croissance non expliquée par les", suite: "quantités de facteurs" },
          { debut: "Le progrès technique qui arrive avec une machine neuve est dit", suite: "incorporé" },
          { debut: "La formation et la santé des travailleurs forment le capital", suite: "humain" },
          { debut: "Produire plus avec les mêmes moyens, c'est une hausse de la", suite: "productivité" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 6 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Croissance extensive et croissance intensive",
      theme: "Croissance et développement",
      ras: "Déterminer les facteurs de la croissance économique",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "distinguer croissance extensive et croissance intensive",
      supportMeta: "Tableaux comparatifs, documents, cahier",
      revision: [
        ["Qu'est-ce que la productivité globale des facteurs ?", "La part de la croissance qui ne s'explique ni par le travail ni par le capital : l'efficacité de leur combinaison."],
        ["Pourquoi les rendements du capital sont-ils décroissants ?", "Parce qu'à travail constant, chaque équipement supplémentaire apporte un gain plus faible que le précédent."],
      ],
      mise: [
        "Un paysan peut doubler sa récolte en défrichant deux fois plus de terrain, ou en améliorant sa culture sur le même terrain. Quelle voie est la plus durable ?",
        "La seconde : la terre n'est pas extensible, alors que les progrès de culture peuvent se poursuivre indéfiniment.",
      ],
      observation: "le tableau comparant les deux formes de croissance",
      observationSupport: "Tableau comparatif des deux formes de croissance affiché ou distribué",
      technAna: "Lecture de tableau et discussion dirigée",
      qa: [
        ["Qu'est-ce que la croissance extensive ?", "Une croissance obtenue en utilisant davantage de facteurs : plus de travailleurs, plus de machines, plus de terres cultivées."],
        ["Qu'est-ce que la croissance intensive ?", "Une croissance obtenue en rendant les facteurs plus efficaces, à quantité égale : meilleures machines, travailleurs mieux formés, meilleure organisation."],
        ["Laquelle fait appel à la PGF ?", "La croissance intensive : elle repose sur la productivité globale des facteurs et sur le progrès technique."],
        ["Quelles sont les limites de la croissance extensive ?", "Les ressources disponibles sont limitées : population, terres, capitaux et matières premières ne croissent pas sans fin."],
        ["Pourquoi la croissance intensive est-elle plus durable ?", "Parce que les connaissances et les méthodes ne s'épuisent pas : elles peuvent continuer à porter la production."],
        ["Une croissance réelle est-elle purement extensive ou intensive ?", "Non : toute croissance observée combine les deux, à des degrés divers selon les pays et les périodes."],
        ["Comment illustrer les deux formes par l'agriculture ?", "Extensive : défricher davantage de terres. Intensive : irriguer, choisir de meilleures semences, échelonner les récoltes."],
        ["Quel indicateur permet d'identifier une croissance intensive ?", "La hausse de la production par travailleur ou par heure travaillée : si elle progresse, l'efficacité s'est améliorée."],
      ],
      synthese: "Donc, la croissance peut venir de deux mouvements distincts : mobiliser davantage de facteurs, ce qui se heurte vite à des limites physiques et démographiques, ou rendre les facteurs plus efficaces, ce qui ouvre une voie durable. La croissance intensive, portée par la productivité globale des facteurs, est la seule qui puisse se prolonger sans épuiser les ressources disponibles.",
      motsCles: ["croissance extensive", "croissance intensive", "facteurs de production", "productivité", "limites physiques", "rendements décroissants", "durabilité", "production par tête"],
      image: { file: "t12_u1_extensive.png", legende: "Figure 6 — Croissance extensive et croissance intensive." },
      contenu: [
        {
          sousTitre: "1. La croissance extensive",
          texte: "La croissance est extensive lorsque la production augmente parce que la quantité de facteurs mobilisés augmente.",
          liste: [
            "Plus de travailleurs : immigration, entrée des jeunes sur le marché du travail, allongement de la durée du travail.",
            "Plus de capital : construction d'usines, achat de machines, ouverture de nouvelles terres.",
            "L'efficacité reste la même : chaque travailleur produit autant qu'avant, mais ils sont plus nombreux.",
          ],
        },
        {
          sousTitre: "2. Les limites de la voie extensive",
          texte: "Cette voie se heurte rapidement à des bornes physiques et sociales.",
          liste: [
            "La population active ne peut croître indéfiniment.",
            "Les terres cultivables, l'eau et les ressources naturelles sont limitées.",
            "Investir toujours davantage se heurte aux rendements décroissants et au coût du financement.",
          ],
        },
        {
          sousTitre: "3. La croissance intensive",
          texte: "La croissance est intensive lorsque la production augmente grâce à une meilleure efficacité des facteurs employés.",
          liste: [
            "Machines plus performantes et procédés améliorés.",
            "Travailleurs mieux formés, en meilleure santé, mieux organisés.",
            "Meilleure utilisation des ressources : moins de pertes, moins de temps morts, moins de gaspillage.",
          ],
        },
        {
          sousTitre: "4. Le repère chiffré",
          texte: "Un exemple simple permet de distinguer les deux situations.",
          liste: [
            "Situation extensive : 100 travailleurs produisaient 1 000 unités ; ils sont 110 et produisent 1 100 unités. La production par travailleur reste à 10.",
            "Situation intensive : les mêmes 100 travailleurs produisent 1 150 unités. La production par travailleur passe de 10 à 11,5.",
            "La seconde situation est celle d'un pays qui progresse en efficacité.",
          ],
        },
        {
          sousTitre: "5. Les deux voies se combinent",
          texte: "Dans la réalité, aucun pays ne choisit exclusivement l'une ou l'autre : les deux mouvements se cumulent.",
          liste: [
            "Les pays à forte croissance démographique comptent davantage sur la voie extensive.",
            "Les pays qui investissent dans l'éducation et la recherche privilégient la voie intensive.",
            "L'enjeu de long terme est de déplacer le poids de la croissance vers la voie intensive.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une croissance obtenue en défrichant plus de terres est…", opts: ["extensive", "intensive", "endogène"], ok: 0, expl: "On mobilise davantage de facteurs." },
          { q: "La croissance intensive repose sur…", opts: ["la productivité globale des facteurs", "le nombre de travailleurs", "la superficie du pays"], ok: 0, expl: "Elle améliore l'efficacité des facteurs employés." },
          { q: "Si la production par travailleur reste constante alors que la production augmente…", opts: ["la croissance est extensive", "la croissance est intensive", "la croissance est nulle"], ok: 0, expl: "Seule la quantité de travail a changé." },
          { q: "La limite principale de la voie extensive est…", opts: ["le caractère fini des ressources", "le manque d'idées", "la baisse des prix"], ok: 0, expl: "Population, terres et capitaux ne croissent pas sans fin." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La croissance intensive suppose davantage de facteurs.", rep: false, expl: "Elle produit plus avec la même quantité de facteurs." },
          { txt: "Un pays peut combiner croissance extensive et croissance intensive.", rep: true, expl: "Les deux mouvements se cumulent dans la réalité." },
          { txt: "L'irrigation d'une rizière relève de la croissance intensive.", rep: true, expl: "On améliore le rendement sans agrandir la surface." },
          { txt: "La hausse de la production par travailleur signale une croissance extensive.", rep: false, expl: "Elle signale une amélioration de l'efficacité : croissance intensive." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis la croissance extensive et donne un exemple.", r: "La croissance extensive consiste à produire davantage en mobilisant plus de facteurs ; défricher de nouvelles terres pour augmenter la récolte en est un exemple." },
          { q: "Définis la croissance intensive et donne un exemple.", r: "La croissance intensive consiste à produire davantage avec les mêmes facteurs en améliorant leur efficacité ; irriguer une rizière pour doubler son rendement en est un exemple." },
          { q: "Pourquoi la voie extensive se heurte-t-elle à des limites ?", r: "Parce que la population active, les terres cultivables et les ressources naturelles sont en quantité finie, et que le capital supplémentaire rapporte de moins en moins." },
          { q: "Quel indicateur permet de reconnaître une croissance intensive ?", r: "La progression de la production par travailleur ou par heure travaillée, qui montre que l'efficacité s'est améliorée." },
        ]},
        { type: "appariement", consigne: "Relie chaque situation à la forme de croissance correspondante.", pointsPar: 1, items: [
          { g: ["Embaucher cinq ouvriers de plus", "Installer un système d'irrigation", "Ouvrir une deuxième boutique", "Former les vendeurs à un nouveau logiciel", "Acheter un four plus économe en énergie"], d: ["Intensive", "Extensive", "Extensive", "Intensive", "Intensive"], pairs: [[0, 1], [1, 0], [2, 1], [3, 0], [4, 0]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 7 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La croissance, un phénomène endogène",
      theme: "Croissance et développement",
      ras: "Déterminer les facteurs de la croissance économique",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "expliquer pourquoi la croissance s'entretient elle-même",
      supportMeta: "Schéma de boucle, documents, cahier",
      revision: [
        ["Quelle différence y a-t-il entre croissance extensive et intensive ?", "L'extensive mobilise plus de facteurs ; l'intensive rend les mêmes facteurs plus efficaces."],
        ["Qu'est-ce que l'investissement ?", "Une dépense qui augmente ou renouvelle le capital productif de l'économie."],
      ],
      mise: [
        "Une entreprise qui gagne davantage investit, produit mieux et gagne encore davantage. D'où vient ce mouvement ?",
        "De l'intérieur de l'économie elle-même : la croissance crée les moyens de la croissance suivante.",
      ],
      observation: "le schéma de la boucle de l'investissement",
      observationSupport: "Schéma de la boucle investissement — productivité — croissance affiché ou distribué",
      technAna: "Lecture de schéma et discussion dirigée",
      qa: [
        ["Que signifie « croissance endogène » ?", "Que les causes de la croissance se trouvent à l'intérieur du système économique : la croissance s'entretient elle-même par ses propres effets."],
        ["Quels sont les maillons de la boucle ?", "L'investissement accroît le capital et le savoir, ce qui élève la productivité, ce qui augmente la production, ce qui dégage du profit pour investir à nouveau."],
        ["Quel rôle joue le profit ?", "Il fournit l'épargne qui finance l'investissement : sans perspective de revenu, l'investissement s'arrête."],
        ["Pourquoi parle-t-on de rendements croissants ?", "Parce que les connaissances produisent des effets cumulatifs : une invention en suggère d'autres et profite à tous les utilisateurs."],
        ["Qu'est-ce qu'une externalité positive de la connaissance ?", "Un bénéfice dont profitent des entreprises qui n'ont pas supporté le coût de la recherche initiale."],
        ["Quel rôle joue la formation ?", "Elle élève le capital humain : des travailleurs formés adoptent plus vite les procédés nouveaux et en inventent eux-mêmes."],
        ["Pourquoi l'État intervient-il ?", "Parce que la recherche et l'éducation profitent à toute la société : laissées au seul marché, elles seraient insuffisamment financées."],
        ["Quelle différence avec une croissance « exogène » ?", "Dans les modèles anciens, le progrès technique tombait du ciel ; dans l'approche endogène, il résulte de choix d'investissement et de recherche."],
      ],
      synthese: "Donc, la croissance n'est pas seulement le résultat de facteurs extérieurs : elle s'entretient elle-même. L'investissement élève la productivité, la productivité accroît la production, la production dégage le profit qui finance l'investissement suivant. Les connaissances jouent ici un rôle particulier : elles se cumulent, profitent à tous et ne s'épuisent pas, ce qui rend possible une croissance durable.",
      motsCles: ["croissance endogène", "investissement", "profit", "épargne", "productivité", "recherche", "rendements croissants", "externalité positive"],
      image: { file: "t12_u1_endogene.png", legende: "Figure 7 — La croissance, un phénomène endogène : la boucle de l'investissement." },
      contenu: [
        {
          sousTitre: "1. Une cause venue de l'intérieur",
          texte: "Les économistes appelaient autrefois le progrès technique une donnée extérieure à l'économie. L'approche moderne montre qu'il naît de décisions économiques.",
          liste: [
            "Une entreprise qui investit dans la recherche crée des connaissances nouvelles.",
            "Un pays qui forme sa main-d'œuvre élève durablement sa productivité.",
            "Ces décisions sont prises à l'intérieur du système : la croissance a donc des causes internes.",
          ],
        },
        {
          sousTitre: "2. La boucle de l'investissement",
          texte: "Le mécanisme se décrit comme une boucle qui se referme sur elle-même.",
          liste: [
            "L'investissement augmente le capital et le savoir disponibles.",
            "Le capital et le savoir élèvent la productivité du travail.",
            "La productivité fait croître la production et les revenus.",
            "Les revenus dégagent l'épargne et le profit qui financent l'investissement suivant.",
          ],
        },
        {
          sousTitre: "3. Le rôle particulier des connaissances",
          texte: "Les connaissances ne se comportent pas comme les autres biens : elles possèdent deux propriétés décisives.",
          liste: [
            "Elles sont cumulatives : chaque découverte en facilite d'autres.",
            "Elles ne sont pas rivales : utilisées par une entreprise, elles restent disponibles pour les autres.",
            "Ces propriétés expliquent les rendements croissants et les externalités positives.",
          ],
        },
        {
          sousTitre: "4. Le capital humain",
          texte: "La formation et la santé des travailleurs constituent un capital incorporé aux personnes.",
          liste: [
            "Un travailleur formé adopte plus vite un procédé nouveau.",
            "Une population en bonne santé travaille plus régulièrement et plus longtemps.",
            "L'investissement en éducation est donc un investissement productif, pas seulement social.",
          ],
        },
        {
          sousTitre: "5. Ce que l'État peut faire",
          texte: "Parce que la recherche et l'éducation profitent à toute la société, l'action publique a sa place dans la boucle.",
          liste: [
            "Financer la recherche fondamentale, que les entreprises ne rentabilisent pas seules.",
            "Garantir l'éducation de base et la formation professionnelle.",
            "Protéger la propriété intellectuelle, tout en permettant la diffusion des idées.",
            "Assurer la stabilité des règles, condition de l'investissement de long terme.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une croissance endogène est une croissance dont les causes sont…", opts: ["internes au système économique", "climatiques", "imposées de l'extérieur"], ok: 0, expl: "Elle s'entretient par ses propres effets." },
          { q: "Dans la boucle, le profit sert à…", opts: ["financer l'investissement suivant", "augmenter les prix", "réduire la production"], ok: 0, expl: "Il alimente l'épargne qui finance l'investissement." },
          { q: "Les connaissances se caractérisent par…", opts: ["des rendements croissants", "un épuisement rapide", "un usage exclusif"], ok: 0, expl: "Elles se cumulent et profitent à tous." },
          { q: "L'État intervient surtout parce que la recherche…", opts: ["profite à toute la société", "ne coûte rien", "est toujours rentable à court terme"], ok: 0, expl: "Ses bénéfices dépassent l'entreprise qui la finance." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le progrès technique résulte uniquement du hasard.", rep: false, expl: "Il découle d'investissements de recherche et de formation." },
          { txt: "Une connaissance utilisée par une entreprise reste disponible pour les autres.", rep: true, expl: "Les connaissances ne sont pas rivales." },
          { txt: "L'éducation n'a d'effet que sur la vie culturelle.", rep: false, expl: "Elle élève la productivité : c'est un investissement." },
          { txt: "La stabilité des règles favorise l'investissement.", rep: true, expl: "Un investisseur engage ses fonds sur le long terme." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Que signifie l'expression « croissance endogène » ?", r: "Cela signifie que les causes de la croissance se trouvent à l'intérieur du système économique : la croissance s'entretient par ses propres effets." },
          { q: "Décris les quatre maillons de la boucle de l'investissement.", r: "L'investissement accroît le capital et le savoir, la productivité s'élève, la production augmente, et le profit dégagé finance l'investissement suivant." },
          { q: "Pourquoi les connaissances donnent-elles des rendements croissants ?", r: "Parce qu'elles se cumulent et qu'elles ne sont pas rivales : une découverte en facilite d'autres et reste utilisable par tous." },
          { q: "Cite deux actions publiques qui soutiennent la croissance endogène.", r: "Le financement de la recherche fondamentale et la garantie d'une éducation de base accessible à tous." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "La croissance est dite endogène quand ses causes sont", suite: "internes" },
          { debut: "Les connaissances sont", suite: "cumulatives" },
          { debut: "La formation et la santé forment le capital", suite: "humain" },
          { debut: "Le profit dégagé finance l'investissement", suite: "suivant" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 8 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Croissance et développement : deux notions",
      theme: "Croissance et développement",
      ras: "Analyser les différents facteurs de développement",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "distinguer croissance et développement et expliquer leur lien",
      supportMeta: "Documents statistiques, illustrations, cahier",
      revision: [
        ["Qu'est-ce que la croissance économique ?", "L'augmentation durable de la production d'un pays, mesurée par la hausse du PIB en volume."],
        ["Qu'est-ce que la croissance endogène ?", "Une croissance dont les causes sont internes au système économique et qui s'entretient elle-même."],
      ],
      mise: [
        "Un pays dont le PIB augmente chaque année voit-il forcément la vie de ses habitants s'améliorer ?",
        "Pas nécessairement : si la richesse profite à quelques-uns, ou si la production détruit l'environnement, le bien-être collectif peut stagner.",
      ],
      observation: "les documents comparant un pays à croissance forte et un pays à développement élevé",
      observationSupport: "Documents comparant PIB, espérance de vie et scolarisation affichés ou distribués",
      technAna: "Comparaison de documents et débat dirigé",
      qa: [
        ["Quelle différence y a-t-il entre croissance et développement ?", "La croissance est une augmentation quantitative de la production ; le développement est une transformation qualitative des conditions de vie."],
        ["La croissance est-elle nécessaire au développement ?", "Elle lui fournit les ressources nécessaires, mais elle ne le garantit pas : tout dépend de l'usage qui est fait de la richesse produite."],
        ["Le développement suppose-t-il toujours la croissance ?", "Une amélioration de la santé ou de l'éducation peut advenir sans hausse du PIB, mais elle est plus facile à financer quand la production progresse."],
        ["Quelles dimensions compose le développement ?", "Le niveau de vie, la santé, l'éducation, la sécurité, la liberté de choix, la qualité de l'environnement et la réduction des inégalités."],
        ["Comment appelle-t-on une croissance sans développement ?", "Une croissance appauvrissante ou sans emplois : la production augmente sans que la majorité de la population en profite."],
        ["Qu'est-ce que le sous-développement ?", "Une situation où les besoins essentiels d'une grande partie de la population restent insatisfaits : alimentation, santé, éducation, logement."],
        ["Pourquoi parle-t-on de développement humain ?", "Parce que la finalité du développement est l'élargissement des capacités des personnes, et non la seule accumulation de biens."],
        ["Quel rôle joue la répartition des revenus ?", "Un développement exige que les fruits de la croissance atteignent l'ensemble de la population, par l'emploi, les services publics et la protection sociale."],
      ],
      synthese: "Donc, la croissance mesure une augmentation de production, tandis que le développement désigne une amélioration durable des conditions de vie : santé, éducation, sécurité, liberté et environnement. La croissance fournit les moyens du développement, mais elle ne suffit pas : encore faut-il que la richesse produite soit partagée et orientée vers les besoins essentiels de la population.",
      motsCles: ["croissance", "développement", "développement humain", "sous-développement", "niveau de vie", "inégalités", "besoins essentiels", "qualité de vie"],
      image: { file: "t12_u1_croissance_dev.jpg", legende: "Figure 8 — Croissance et développement : produire plus, et vivre mieux." },
      contenu: [
        {
          sousTitre: "1. La croissance : une mesure quantitative",
          texte: "La croissance est une variation de grandeur : elle se mesure en pourcentage d'une année sur l'autre.",
          liste: [
            "Elle porte sur la production : le PIB en volume.",
            "Elle est mesurable, comparable et disponible pour presque tous les pays.",
            "Elle ne dit rien de l'usage de la richesse produite, ni de sa répartition, ni de ses effets sur l'environnement.",
          ],
        },
        {
          sousTitre: "2. Le développement : une transformation qualitative",
          texte: "Le développement désigne un changement de situation vécue par la population.",
          liste: [
            "L'allongement de l'espérance de vie et la baisse de la mortalité infantile.",
            "L'accès effectif à l'école et l'élévation du niveau d'instruction.",
            "La réduction de la pauvreté et des inégalités, la sécurité des personnes.",
            "L'élargissement des libertés et de la participation à la vie collective.",
          ],
        },
        {
          sousTitre: "3. Croissance sans développement",
          texte: "L'histoire économique fournit de nombreux cas de croissance qui ne profite pas à la majorité.",
          liste: [
            "Une croissance tirée par l'exportation d'une seule matière première, dont le revenu se concentre.",
            "Une croissance sans emplois, lorsque le progrès technique remplace plus de travailleurs qu'il n'en embauche.",
            "Une croissance qui épuise les ressources naturelles dont vivent les populations les plus pauvres.",
          ],
        },
        {
          sousTitre: "4. Développement sans croissance ?",
          texte: "Certaines améliorations ne supposent pas de production supplémentaire.",
          liste: [
            "Une meilleure organisation des soins réduit la mortalité à moyens constants.",
            "Une réforme de la scolarisation élève le niveau d'instruction sans dépense nouvelle importante.",
            "Mais sur la durée, financer santé et éducation suppose des ressources : la croissance reste utile.",
          ],
        },
        {
          sousTitre: "5. Les deux notions se complètent",
          texte: "La bonne question n'est pas de choisir entre croissance et développement, mais de relier l'une à l'autre.",
          liste: [
            "La croissance fournit les ressources de l'action publique et de l'investissement.",
            "Les politiques sociales orientent ces ressources vers les besoins essentiels.",
            "La soutenabilité garantit que la croissance d'aujourd'hui ne compromet pas celle de demain.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La croissance économique mesure…", opts: ["une augmentation de la production", "une amélioration de la santé", "une réduction des inégalités"], ok: 0, expl: "C'est une variation quantitative du PIB en volume." },
          { q: "Le développement désigne…", opts: ["une transformation des conditions de vie", "la seule hausse du PIB", "l'augmentation des exportations"], ok: 0, expl: "Il englobe santé, éducation, sécurité et liberté." },
          { q: "Une croissance sans emplois est…", opts: ["une croissance sans développement", "un développement durable", "un progrès technique nul"], ok: 0, expl: "La population n'en profite pas." },
          { q: "Le développement humain met l'accent sur…", opts: ["les capacités des personnes", "le nombre d'usines", "le volume des exportations"], ok: 0, expl: "Sa finalité est l'élargissement des choix offerts à chacun." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La croissance suffit à garantir le développement.", rep: false, expl: "Encore faut-il que la richesse soit partagée et bien employée." },
          { txt: "Une amélioration de la santé peut advenir sans hausse du PIB.", rep: true, expl: "Une meilleure organisation des soins suffit parfois." },
          { txt: "Le développement se réduit à la hausse du revenu moyen.", rep: false, expl: "Il inclut l'éducation, la santé, la sécurité et les libertés." },
          { txt: "La croissance fournit des ressources utiles au développement.", rep: true, expl: "Elle finance les services publics et l'investissement." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Donne la différence entre croissance et développement.", r: "La croissance est l'augmentation de la production mesurée par le PIB, tandis que le développement est l'amélioration durable des conditions de vie de la population." },
          { q: "Pourquoi une croissance peut-elle ne pas profiter à la population ?", r: "Parce que la richesse produite peut se concentrer entre quelques mains ou être obtenue sans création d'emplois." },
          { q: "Cite quatre dimensions du développement.", r: "La santé, l'éducation, la réduction des inégalités, et la sécurité des personnes et des biens." },
          { q: "La croissance est-elle inutile au développement ? Justifie.", r: "Non : elle fournit les ressources qui financent les services publics et les investissements, même si elle ne suffit pas à elle seule." },
        ]},
        { type: "appariement", consigne: "Relie chaque indicateur à la notion correspondante.", pointsPar: 1, items: [
          { g: ["Hausse du PIB en volume", "Espérance de vie à la naissance", "Taux de scolarisation", "Réduction de la pauvreté", "Production par habitant"], d: ["Développement", "Développement", "Croissance", "Croissance", "Développement"], pairs: [[0, 2], [1, 0], [2, 0], [3, 1], [4, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 9 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les indicateurs du développement : le RNB et l'IDH",
      theme: "Croissance et développement",
      ras: "Analyser les différents facteurs de développement",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "comparer les pays à l'aide du RNB par habitant et de l'IDH",
      supportMeta: "Tableaux statistiques, carte de l'IDH, cahier",
      revision: [
        ["Quelle différence y a-t-il entre croissance et développement ?", "La croissance mesure une hausse de production ; le développement, une amélioration des conditions de vie."],
        ["Pourquoi le PIB par habitant est-il insuffisant ?", "Parce que c'est une moyenne qui ne dit rien de la répartition ni de la santé et de l'éducation de la population."],
      ],
      mise: [
        "Deux pays ont le même revenu par habitant : dans l'un, les enfants vont presque tous à l'école ; dans l'autre, à peine la moitié. Sont-ils également développés ?",
        "Non : il faut regarder au-delà du revenu, en observant la santé et l'instruction de la population.",
      ],
      observation: "le tableau comparant RNB par habitant et IDH de quelques pays",
      observationSupport: "Tableau comparatif RNB par habitant et IDH affiché ou distribué",
      technAna: "Lecture de tableau et comparaison de pays",
      qa: [
        ["Qu'est-ce que le RNB ?", "Le revenu national brut : l'ensemble des revenus perçus par les unités résidentes d'un pays, où qu'elles exercent leur activité."],
        ["Que mesure le RNB par habitant ?", "Le revenu moyen disponible par personne : il approche le niveau de vie, sans indiquer la répartition."],
        ["Quelles sont les limites du RNB par habitant ?", "Il ignore les inégalités, l'économie informelle, la production domestique et l'état de l'environnement."],
        ["Qu'est-ce que l'IDH ?", "L'indice de développement humain : un indicateur compris entre 0 et 1 qui combine la santé, l'éducation et le niveau de vie."],
        ["Quelles sont les trois dimensions de l'IDH ?", "Une vie longue et saine, mesurée par l'espérance de vie ; l'accès au savoir, mesuré par la scolarisation ; un niveau de vie décent, mesuré par le RNB par habitant."],
        ["Comment lit-on une valeur d'IDH ?", "Plus l'indice est proche de 1, plus le développement humain est élevé ; on distingue généralement un développement faible, moyen et élevé."],
        ["Pourquoi l'IDH ne remplace-t-il pas le RNB ?", "Parce qu'il résume trois dimensions seulement et reste une moyenne nationale : il ne dit rien des inégalités internes ni de la soutenabilité."],
        ["Quels autres indicateurs complètent le diagnostic ?", "Le taux de pauvreté, l'accès à l'eau potable, la mortalité infantile, le taux d'activité des femmes et les indicateurs d'inégalité."],
      ],
      synthese: "Donc, mesurer le développement suppose plusieurs instruments. Le RNB par habitant approche le niveau de vie, mais il reste une moyenne muette sur la répartition. L'IDH y ajoute la santé et l'éducation, ce qui donne une image plus fidèle des conditions de vie. Aucun indicateur ne suffit seul : on les croise, et on les complète par des données de pauvreté et d'inégalité.",
      motsCles: ["RNB", "revenu national brut", "IDH", "espérance de vie", "scolarisation", "niveau de vie", "indicateur composite", "développement humain"],
      image: { file: "t12_u1_idh.png", legende: "Figure 9 — Mesurer le développement : le RNB et l'IDH." },
      contenu: [
        {
          sousTitre: "1. Le revenu national brut par habitant",
          texte: "Le RNB rassemble les revenus perçus par les résidents du pays, y compris ceux qui proviennent de l'étranger.",
          liste: [
            "Il comprend les salaires, les profits, les revenus fonciers et les impôts nets des subventions.",
            "Divisé par la population, il fournit un ordre de grandeur du revenu moyen par personne.",
            "Il reste une moyenne : deux pays peuvent afficher le même chiffre avec des situations très différentes.",
          ],
        },
        {
          sousTitre: "2. Les limites du revenu moyen",
          texte: "Le revenu moyen ne dit pas comment les ressources sont partagées, ni à quoi elles servent.",
          liste: [
            "Il ne distingue pas une société égalitaire d'une société très inégalitaire.",
            "Il ne mesure ni la qualité des soins reçus, ni le temps passé à l'école.",
            "Il ne tient pas compte de la dégradation des ressources naturelles.",
          ],
        },
        {
          sousTitre: "3. L'indice de développement humain",
          texte: "L'IDH a été construit pour dépasser la seule dimension monétaire du développement.",
          liste: [
            "Santé : espérance de vie à la naissance.",
            "Éducation : durée moyenne de scolarisation des adultes et durée attendue de scolarisation des enfants.",
            "Niveau de vie : RNB par habitant en parité de pouvoir d'achat.",
            "Les trois dimensions sont ramenées à une échelle commune, puis combinées en un indice compris entre 0 et 1.",
          ],
        },
        {
          sousTitre: "4. Comment interpréter un IDH",
          texte: "La lecture de l'indice est simple, à condition de se rappeler ce qu'il ne dit pas.",
          liste: [
            "Un IDH proche de 1 traduit un développement humain élevé ; un IDH inférieur à 0,55 traduit un développement faible.",
            "Un pays peut avoir un IDH supérieur à son revenu moyen : il investit dans la santé et l'école.",
            "L'inverse existe : un pays riche dont la population reste mal soignée ou peu instruite.",
          ],
        },
        {
          sousTitre: "5. Croiser les indicateurs",
          texte: "Un diagnostic sérieux ne se fonde jamais sur un seul chiffre : les indicateurs se complètent et se corrigent.",
          liste: [
            "Le RNB par habitant éclaire le niveau de vie matériel.",
            "L'IDH révèle l'usage social qui en est fait.",
            "Les indicateurs de pauvreté et d'inégalité précisent la répartition, et les données environnementales jugent la durabilité.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le RNB mesure…", opts: ["les revenus perçus par les résidents", "la production sur le territoire", "le budget de l'État"], ok: 0, expl: "Il retient la résidence et non le territoire." },
          { q: "L'IDH combine…", opts: ["santé, éducation et niveau de vie", "PIB, inflation et chômage", "exportations et importations"], ok: 0, expl: "Ce sont ses trois dimensions." },
          { q: "L'indice de développement humain varie…", opts: ["entre 0 et 1", "de 0 à 100", "sans limite"], ok: 0, expl: "Plus il est proche de 1, plus le développement est élevé." },
          { q: "Un pays au revenu moyen mais à l'IDH élevé…", opts: ["investit dans la santé et l'éducation", "a beaucoup d'usines", "exporte beaucoup"], ok: 0, expl: "L'écart vient de l'usage social fait de la richesse." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le RNB par habitant indique comment les revenus sont répartis.", rep: false, expl: "C'est une moyenne : elle ne dit rien de la répartition." },
          { txt: "L'IDH prend en compte l'espérance de vie.", rep: true, expl: "La santé est l'une de ses trois dimensions." },
          { txt: "Un seul indicateur suffit à juger du développement d'un pays.", rep: false, expl: "Il faut croiser revenu, santé, éducation et inégalités." },
          { txt: "La mortalité infantile complète utilement l'IDH.", rep: true, expl: "Elle précise l'état sanitaire de la population." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Qu'est-ce que le revenu national brut ?", r: "C'est l'ensemble des revenus perçus par les unités résidentes d'un pays, qu'elles exercent leur activité dans le pays ou à l'étranger." },
          { q: "Quelles sont les trois dimensions de l'IDH ?", r: "Une vie longue et saine mesurée par l'espérance de vie, l'accès au savoir mesuré par la scolarisation, et un niveau de vie décent mesuré par le RNB par habitant." },
          { q: "Pourquoi deux pays de même revenu moyen peuvent-ils avoir des IDH différents ?", r: "Parce que l'usage social de la richesse diffère : celui qui investit dans la santé et l'école obtient un meilleur développement humain." },
          { q: "Cite deux indicateurs qui complètent l'IDH et dis ce qu'ils apportent.", r: "Le taux de pauvreté précise la répartition des ressources, et l'accès à l'eau potable éclaire les conditions de vie quotidiennes." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "L'IDH varie entre 0 et", suite: "1" },
          { debut: "La dimension de santé de l'IDH est mesurée par l'espérance de", suite: "vie" },
          { debut: "Le RNB retient les revenus des unités", suite: "résidentes" },
          { debut: "Le revenu par habitant est une", suite: "moyenne" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 10 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les causes du sous-développement",
      theme: "Croissance et développement",
      ras: "Analyser les différents facteurs de développement",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "identifier les principales causes du retard de développement",
      supportMeta: "Documents statistiques, schémas, cahier",
      revision: [
        ["Quelles sont les trois dimensions de l'IDH ?", "La santé, l'éducation et le niveau de vie."],
        ["Pourquoi le revenu moyen ne suffit-il pas ?", "Parce qu'il ne dit rien de la répartition des revenus ni de l'état sanitaire et scolaire de la population."],
      ],
      mise: [
        "Un paysan cultive une parcelle exiguë, sans irrigation ni engrais, et vend sa récolte au bord de la piste. Pourquoi produit-il si peu ?",
        "Parce que le capital manque, que la terre est morcelée et que le produit se vend mal : plusieurs causes se cumulent.",
      ],
      observation: "le schéma des causes du retard de développement",
      observationSupport: "Schéma des causes du sous-développement affiché ou distribué",
      technAna: "Lecture de schéma et étude de documents",
      qa: [
        ["Qu'est-ce que le sous-développement ?", "Une situation durable où les besoins essentiels d'une grande partie de la population restent insatisfaits : se nourrir, se soigner, s'instruire, se loger."],
        ["Quelle est la première cause avancée par le programme ?", "L'insuffisance de capital : peu de machines, d'infrastructures et de moyens financiers disponibles."],
        ["Comment la démographie freine-t-elle le développement ?", "Une population qui croît vite oblige à consacrer l'essentiel des ressources aux besoins immédiats, au détriment de l'investissement."],
        ["Comment une mauvaise insertion commerciale agit-elle ?", "Un pays qui exporte peu ou des produits dont le prix baisse voit ses ressources se réduire, alors qu'il dépend des importations essentielles."],
        ["Quel rôle jouent les institutions ?", "Des règles instables ou mal appliquées découragent l'investissement, allongent les délais et renchérissent les échanges."],
        ["Pourquoi parle-t-on de causes cumulatives ?", "Parce qu'elles se renforcent : le manque de capital réduit la productivité, la faible productivité réduit l'épargne, la faible épargne empêche l'investissement."],
        ["Le sous-développement est-il une fatalité ?", "Non : des pays ont rompu ces enchaînements par l'éducation, l'investissement et la stabilisation des règles."],
        ["Quelles politiques permettent d'agir sur ces causes ?", "La modernisation agricole, l'industrialisation, la diversification des exportations, le renforcement des institutions et l'aide extérieure bien employée."],
      ],
      synthese: "Donc, le sous-développement n'a pas une cause unique : il résulte d'un faisceau de causes qui se renforcent mutuellement. L'insuffisance de capital, la pression démographique, la mauvaise insertion dans le commerce mondial et la fragilité des institutions forment un ensemble difficile à rompre, mais que des politiques adaptées peuvent desserrer.",
      motsCles: ["sous-développement", "insuffisance de capital", "démographie", "insertion commerciale", "institutions", "besoins essentiels", "causes cumulatives", "terme de l'échange"],
      image: { file: "t12_u1_causes.png", legende: "Figure 10 — Les principales causes du retard de développement." },
      contenu: [
        {
          sousTitre: "1. L'insuffisance de capital",
          texte: "Le manque de capital est la cause la plus immédiate : sans équipement ni infrastructure, la productivité reste faible.",
          liste: [
            "Peu de machines, d'outils et de matériel de transport.",
            "Des routes, des réseaux d'eau et d'électricité insuffisants.",
            "Des moyens financiers réduits : l'épargne est faible et le crédit coûteux.",
          ],
        },
        {
          sousTitre: "2. La pression démographique",
          texte: "Une population nombreuse et jeune ne freine pas le développement par elle-même, mais elle rend l'effort d'équipement plus lourd.",
          liste: [
            "Il faut scolariser, soigner et loger un nombre croissant de personnes.",
            "Une part importante du revenu part dans la consommation courante, au détriment de l'épargne.",
            "L'arrivée massive de jeunes sur le marché du travail exige des emplois que l'économie ne crée pas assez vite.",
          ],
        },
        {
          sousTitre: "3. L'insertion dans le commerce mondial",
          texte: "La place occupée dans les échanges internationaux détermine largement les ressources disponibles.",
          liste: [
            "Exporter une ou deux matières premières expose aux fluctuations des cours mondiaux.",
            "Les produits exportés sont souvent peu transformés : la valeur ajoutée reste à l'étranger.",
            "Les barrières à l'entrée sur les marchés des pays riches limitent les débouchés.",
          ],
        },
        {
          sousTitre: "4. Le rôle des institutions",
          texte: "Les règles du jeu économique conditionnent l'efficacité de tous les autres leviers.",
          liste: [
            "Des droits de propriété mal garantis découragent l'investissement de long terme.",
            "Des procédures longues et imprévisibles renchérissent les projets.",
            "Une fiscalité instable ou mal perçue prive l'État des moyens des services publics.",
          ],
        },
        {
          sousTitre: "5. Des causes qui se renforcent",
          texte: "L'essentiel est de comprendre l'articulation des causes, plus que de les énumérer séparément.",
          liste: [
            "Le manque de capital abaisse la productivité, donc les revenus et l'épargne.",
            "La faiblesse de l'épargne empêche l'investissement, donc le capital ne s'accroît pas.",
            "Le sous-emploi et le faible niveau d'instruction entretiennent la faiblesse de la productivité.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "L'insuffisance de capital se traduit par…", opts: ["peu de machines et d'infrastructures", "trop de machines", "un excès d'épargne"], ok: 0, expl: "Le capital productif fait défaut." },
          { q: "Exporter une seule matière première expose le pays…", opts: ["aux fluctuations des cours mondiaux", "à une croissance garantie", "à l'absence de concurrence"], ok: 0, expl: "La spécialisation rend vulnérable aux variations de prix." },
          { q: "Des institutions fragiles…", opts: ["découragent l'investissement", "font baisser les salaires", "augmentent les exportations"], ok: 0, expl: "L'insécurité juridique renchérit les projets." },
          { q: "Les causes du sous-développement sont…", opts: ["cumulatives", "indépendantes les unes des autres", "uniquement climatiques"], ok: 0, expl: "Elles se renforcent mutuellement." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La croissance démographique suffit à expliquer le sous-développement.", rep: false, expl: "Elle aggrave la situation, mais n'agit jamais seule." },
          { txt: "Transformer la production sur place augmente la valeur ajoutée captée.", rep: true, expl: "Le pays garde la part de valeur créée par la transformation." },
          { txt: "La stabilité des règles favorise l'investissement.", rep: true, expl: "Un investisseur engage ses fonds sur longue période." },
          { txt: "Le sous-développement est une fatalité géographique.", rep: false, expl: "Des politiques adaptées ont permis à plusieurs pays de le dépasser." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis le sous-développement.", r: "C'est une situation durable dans laquelle les besoins essentiels d'une grande partie de la population — se nourrir, se soigner, s'instruire, se loger — restent insatisfaits." },
          { q: "Cite trois causes du sous-développement et illustre-les.", r: "L'insuffisance de capital, avec le manque de routes et de machines ; la pression démographique, qui accroît les besoins immédiats ; et la mauvaise insertion commerciale, par la dépendance à une seule matière première." },
          { q: "Pourquoi dit-on que les causes sont cumulatives ?", r: "Parce qu'elles se renforcent entre elles : le manque de capital réduit la productivité, la faible productivité réduit l'épargne, et la faible épargne empêche l'investissement." },
          { q: "Quel rôle les institutions jouent-elles dans le développement ?", r: "Elles fixent les règles du jeu : des droits de propriété garantis et des procédures prévisibles encouragent l'investissement de long terme." },
        ]},
        { type: "appariement", consigne: "Relie chaque situation à la cause correspondante.", pointsPar: 1, items: [
          { g: ["Une piste impraticable en saison des pluies", "Une classe de quatre-vingts élèves", "Une récolte vendue brute à l'exportation", "Un litige foncier jamais tranché", "Une usine qui n'obtient pas d'autorisation"], d: ["Institution fragile", "Mauvaise insertion commerciale", "Insuffisance de capital", "Pression démographique", "Institution fragile"], pairs: [[0, 2], [1, 3], [2, 1], [3, 0], [4, 4]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 11 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le cercle vicieux du sous-développement",
      theme: "Croissance et développement",
      ras: "Analyser les différents facteurs de développement",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "expliquer l'enchaînement du cercle vicieux et les moyens de le rompre",
      supportMeta: "Schéma du cercle vicieux, documents, cahier",
      revision: [
        ["Cite trois causes du sous-développement.", "L'insuffisance de capital, la pression démographique et la mauvaise insertion dans le commerce mondial."],
        ["Pourquoi ces causes sont-elles dites cumulatives ?", "Parce qu'elles se renforcent mutuellement et entrent dans un enchaînement difficile à interrompre."],
      ],
      mise: [
        "Un ménage gagne peu, épargne peu, n'investit pas, et produit peu. Par où commencer pour en sortir ?",
        "Par un apport extérieur qui rompt la boucle : un crédit, une aide, un appui technique, puis une hausse de productivité.",
      ],
      observation: "le schéma du cercle vicieux",
      observationSupport: "Schéma du cercle vicieux du sous-développement affiché ou distribué",
      technAna: "Lecture de schéma et discussion dirigée",
      qa: [
        ["Qu'est-ce que le cercle vicieux du sous-développement ?", "Un enchaînement où chaque difficulté entretient la suivante : faible revenu, faible épargne, faible investissement, faible productivité, puis à nouveau faible revenu."],
        ["Comment le faible revenu bloque-t-il l'épargne ?", "Quand le revenu suffit à peine à nourrir la famille, il ne reste rien à mettre de côté pour investir."],
        ["Comment la faiblesse de l'épargne bloque-t-elle l'investissement ?", "Sans épargne, le crédit est rare et coûteux : l'achat de matériel, la construction d'un puits ou la formation restent hors de portée."],
        ["Comment la faiblesse de l'investissement agit-elle sur la productivité ?", "Sans matériel ni formation, chaque heure de travail produit peu, ce qui maintient les revenus au plus bas."],
        ["Comment peut-on rompre le cercle ?", "En introduisant un élément extérieur : investissement public, aide au développement, transfert de technologie, microcrédit, ou effort collectif d'épargne."],
        ["Qu'est-ce que le big push ?", "L'idée qu'un ensemble d'investissements coordonnés, menés en même temps, réussit là où des initiatives isolées échouent."],
        ["Pourquoi la coordination des investissements compte-t-elle ?", "Parce qu'une usine sans route ni électricité ne produit rien : la rentabilité de chaque projet dépend des autres."],
        ["Quelles critiques adresse-t-on à cette analyse ?", "Le schéma est simplificateur : il sous-estime l'ingéniosité locale et les ressources de l'économie informelle, et l'aide mal conçue peut créer de la dépendance."],
      ],
      synthese: "Donc, le sous-développement se décrit comme un cercle vicieux : le faible revenu interdit l'épargne, la faible épargne interdit l'investissement, le manque d'investissement maintient la productivité au plus bas, ce qui reconduit le faible revenu. Sortir de la boucle suppose un apport extérieur et des investissements coordonnés : routes, écoles, énergie et crédit doivent progresser ensemble pour que chaque projet devienne rentable.",
      motsCles: ["cercle vicieux", "faible revenu", "épargne", "investissement", "productivité", "big push", "coordination", "aide au développement"],
      image: { file: "t12_u1_cercle.png", legende: "Figure 11 — Le cercle vicieux du sous-développement." },
      contenu: [
        {
          sousTitre: "1. Un enchaînement circulaire",
          texte: "L'idée centrale, formulée notamment par Ragnar Nurkse, est que les causes ne s'additionnent pas : elles s'enchaînent et se reproduisent.",
          liste: [
            "Un revenu faible ne permet pas d'épargner.",
            "Une épargne absente empêche d'investir.",
            "Sans investissement, la productivité reste basse.",
            "Une productivité basse maintient le revenu au niveau le plus faible.",
          ],
        },
        {
          sousTitre: "2. Le côté de la demande",
          texte: "Le cercle ne se limite pas à l'offre de production : il existe aussi un blocage par les débouchés.",
          liste: [
            "Un marché intérieur pauvre offre peu de clients aux entreprises.",
            "Sans perspective de vente, personne n'investit.",
            "Sans investissement, il n'y a ni emplois ni revenus supplémentaires.",
            "La boucle se referme : le marché reste étroit.",
          ],
        },
        {
          sousTitre: "3. Les cercles dérivés",
          texte: "La même logique se retrouve dans la santé, l'éducation et la démographie.",
          liste: [
            "Une population mal nourrie travaille moins bien et tombe plus souvent malade.",
            "Des enfants non scolarisés deviennent des adultes peu productifs.",
            "Une forte natalité dilue les ressources consacrées à chaque enfant.",
          ],
        },
        {
          sousTitre: "4. Rompre la boucle",
          texte: "Puisque les causes s'entretiennent, une impulsion venue de l'extérieur du circuit est nécessaire.",
          liste: [
            "L'investissement public : routes, écoles, centres de santé, réseaux d'eau et d'électricité.",
            "L'aide extérieure et les financements concessionnels bien ciblés.",
            "Le transfert de technologies et la formation.",
            "Le microcrédit et l'épargne collective, qui permettent les premiers investissements.",
          ],
        },
        {
          sousTitre: "5. La nécessité de coordonner",
          texte: "Des projets isolés restent souvent sans effet : c'est l'argument du big push.",
          liste: [
            "Une usine sans route ni électricité ne fonctionne pas.",
            "Une école sans enseignants formés n'instruit personne.",
            "Des investissements menés ensemble se rendent mutuellement rentables.",
            "L'État joue ici un rôle d'entraînement, en programmant les équipements de base.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le premier maillon du cercle vicieux est…", opts: ["le faible revenu", "le chômage", "l'inflation"], ok: 0, expl: "Tout part du revenu insuffisant." },
          { q: "Sans épargne, l'investissement est…", opts: ["impossible ou très coûteux", "garanti par l'État", "automatique"], ok: 0, expl: "Il ne reste aucune ressource à mobiliser." },
          { q: "Le big push désigne…", opts: ["des investissements coordonnés", "une aide unique", "une baisse des impôts"], ok: 0, expl: "Plusieurs projets menés ensemble deviennent rentables." },
          { q: "Le microcrédit sert surtout à…", opts: ["financer un premier investissement", "remplacer l'épargne publique", "payer les impôts"], ok: 0, expl: "Il permet d'acheter le premier équipement productif." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le cercle vicieux ne concerne que la production.", rep: false, expl: "Il existe aussi un blocage par l'étroitesse du marché." },
          { txt: "Des investissements isolés suffisent toujours à rompre le cercle.", rep: false, expl: "Sans coordination, chaque projet reste non rentable." },
          { txt: "La formation contribue à rompre la boucle.", rep: true, expl: "Elle élève la productivité, donc les revenus." },
          { txt: "L'aide extérieure est utile si elle est bien ciblée.", rep: true, expl: "Mal conçue, elle peut créer une dépendance." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Décris les quatre maillons du cercle vicieux.", r: "Le faible revenu empêche l'épargne, la faible épargne empêche l'investissement, le manque d'investissement maintient une productivité basse, et la faible productivité reconduit le faible revenu." },
          { q: "Qu'est-ce que le big push ?", r: "C'est l'idée qu'un ensemble d'investissements coordonnés, menés en même temps, réussit là où des initiatives isolées échouent faute de débouchés et d'équipements." },
          { q: "Cite trois moyens de rompre le cercle vicieux.", r: "L'investissement public dans les infrastructures, le transfert de technologies avec formation, et le microcrédit qui finance les premiers équipements." },
          { q: "Quelles limites peut-on opposer au schéma du cercle vicieux ?", r: "Il simplifie la réalité : il sous-estime l'ingéniosité locale et l'économie informelle, et une aide mal conçue risque d'installer la dépendance." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Le cercle vicieux enchaîne revenu, épargne, investissement et", suite: "productivité" },
          { debut: "Un investissement mené seul est souvent non", suite: "rentable" },
          { debut: "L'économiste associé au cercle vicieux est Ragnar", suite: "Nurkse" },
          { debut: "Les projets doivent être", suite: "coordonnés" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 12 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les politiques économiques de développement",
      theme: "Croissance et développement",
      ras: "Analyser les différents facteurs de développement",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "présenter les grandes politiques de développement et leurs conditions de réussite",
      supportMeta: "Documents, études de cas, cahier",
      revision: [
        ["Qu'est-ce que le cercle vicieux du sous-développement ?", "L'enchaînement par lequel le faible revenu interdit l'épargne, donc l'investissement, donc la hausse de la productivité."],
        ["Comment rompt-on ce cercle ?", "Par un apport extérieur et par des investissements coordonnés dans les infrastructures, la formation et le crédit."],
      ],
      mise: [
        "Un pays veut sortir du sous-développement. Doit-il d'abord construire des routes, des écoles, ou soutenir l'agriculture ?",
        "L'expérience montre qu'aucune de ces voies ne suffit seule : la modernisation agricole, l'industrialisation et les institutions avancent ensemble.",
      ],
      observation: "le schéma des politiques de développement",
      observationSupport: "Schéma des politiques de développement affiché ou distribué",
      technAna: "Étude de cas et débat dirigé",
      qa: [
        ["Quelles sont les grandes politiques de développement ?", "La modernisation agricole, l'industrialisation et l'insertion dans le commerce mondial, le renforcement des institutions et l'aide au développement."],
        ["En quoi consiste la modernisation agricole ?", "Semences améliorées, irrigation, engrais, stockage, pistes rurales et organisation des producteurs en coopératives."],
        ["Pourquoi l'agriculture reste-t-elle prioritaire ?", "Parce qu'elle occupe la majorité de la population active et fournit l'alimentation : un progrès agricole libère des ressources pour le reste de l'économie."],
        ["Quel est l'objectif de l'industrialisation ?", "Transformer sur place les produits exportés, créer des emplois et retenir dans le pays la valeur ajoutée de la transformation."],
        ["Quelles formes prend l'insertion commerciale ?", "La diversification des produits exportés, le respect des normes exigées par les marchés, et la recherche de débouchés régionaux."],
        ["Quel rôle jouent les institutions ?", "Elles garantissent les contrats, sécurisent la propriété, simplifient les procédures et perçoivent l'impôt qui finance les services publics."],
        ["Que peut apporter l'aide au développement ?", "Des ressources financières, des compétences techniques et un appui aux projets d'infrastructure, à condition d'être coordonnée avec les priorités du pays."],
        ["Quelles sont les conditions de réussite ?", "La stabilité des règles, la formation, la lutte contre la corruption, l'entretien des équipements et l'association des populations aux projets."],
      ],
      synthese: "Donc, les politiques de développement combinent plusieurs leviers : moderniser l'agriculture dont vit la majorité de la population, industrialiser pour transformer sur place et créer des emplois, diversifier les exportations, renforcer les institutions et employer utilement l'aide extérieure. Leur efficacité dépend moins de l'abondance des moyens que de la stabilité des règles, de la formation et de l'entretien de ce qui a été construit.",
      motsCles: ["modernisation agricole", "industrialisation", "insertion commerciale", "institutions", "aide au développement", "coopérative", "infrastructures", "formation"],
      image: { file: "t12_u1_politiques.png", legende: "Figure 12 — Les politiques économiques de développement." },
      contenu: [
        {
          sousTitre: "1. La modernisation agricole",
          texte: "L'agriculture occupe la majorité de la population active et fournit l'essentiel de l'alimentation : c'est le point de départ le plus fréquent.",
          liste: [
            "Semences sélectionnées, engrais, irrigation et petit matériel.",
            "Pistes rurales et installations de stockage pour limiter les pertes après récolte.",
            "Organisation des producteurs en coopératives pour acheter, stocker et vendre ensemble.",
            "Formation technique et vulgarisation agricole auprès des exploitants.",
          ],
        },
        {
          sousTitre: "2. L'industrialisation et la transformation",
          texte: "Transformer sur place permet de garder la valeur ajoutée et de créer des emplois non agricoles.",
          liste: [
            "Décortiquerie, huilerie, conserverie, transformation du lait ou du cacao.",
            "Artisanat de production structuré et ateliers de réparation.",
            "Condition : disposer d'énergie fiable, de transport et d'une main-d'œuvre formée.",
          ],
        },
        {
          sousTitre: "3. L'insertion dans le commerce mondial",
          texte: "L'ouverture commerciale offre des débouchés, à condition de ne pas rester dépendant d'un seul produit.",
          liste: [
            "Diversifier les produits exportés pour réduire le risque de baisse des cours.",
            "Respecter les normes sanitaires et qualité exigées par les acheteurs.",
            "Négocier l'accès aux marchés régionaux et internationaux de manière progressive.",
          ],
        },
        {
          sousTitre: "4. Le rôle des institutions",
          texte: "Les institutions orientent l'efficacité de toutes les autres politiques.",
          liste: [
            "Sécuriser la propriété et l'exécution des contrats.",
            "Simplifier et raccourcir les procédures de création d'entreprise.",
            "Percevoir l'impôt de façon prévisible pour financer écoles, routes et dispensaires.",
            "Associer les collectivités locales et les populations à la définition des projets.",
          ],
        },
        {
          sousTitre: "5. L'aide au développement",
          texte: "L'aide extérieure complète l'effort national sans s'y substituer.",
          liste: [
            "Financement d'infrastructures : routes, écoles, adduction d'eau, réseaux électriques.",
            "Appui technique et transfert de compétences.",
            "Conditions d'efficacité : coordination entre bailleurs, respect des priorités du pays, entretien des équipements livrés.",
            "Risque à éviter : une aide mal conçue entretient la dépendance plutôt que les capacités locales.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La première priorité, quand la majorité de la population vit de la terre, est…", opts: ["la modernisation agricole", "la construction d'un aéroport", "la baisse des impôts"], ok: 0, expl: "Le progrès agricole libère des ressources pour le reste de l'économie." },
          { q: "Transformer la vanille sur place permet de…", opts: ["garder la valeur ajoutée", "réduire la qualité", "supprimer les emplois"], ok: 0, expl: "La transformation crée de la valeur et des emplois." },
          { q: "Une coopérative sert surtout à…", opts: ["acheter, stocker et vendre ensemble", "remplacer l'État", "supprimer la concurrence"], ok: 0, expl: "Le groupement donne du poids face aux acheteurs." },
          { q: "Une aide efficace suppose…", opts: ["la coordination et l'entretien des équipements", "un versement unique", "l'absence de contrepartie"], ok: 0, expl: "Sans entretien ni coordination, l'équipement livré se dégrade vite." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "L'industrialisation dispense de moderniser l'agriculture.", rep: false, expl: "Les deux avancent ensemble : l'agriculture nourrit et libère de la main-d'œuvre." },
          { txt: "Diversifier les exportations réduit le risque lié aux cours mondiaux.", rep: true, expl: "La dépendance à un seul produit est la principale vulnérabilité." },
          { txt: "Des institutions solides facilitent l'investissement.", rep: true, expl: "Elles sécurisent contrats et propriété." },
          { txt: "L'aide extérieure remplace l'effort national.", rep: false, expl: "Elle le complète, sans s'y substituer." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite les quatre grands leviers des politiques de développement.", r: "La modernisation agricole, l'industrialisation et la transformation sur place, la diversification des exportations, et le renforcement des institutions." },
          { q: "Pourquoi l'agriculture reste-t-elle prioritaire ?", r: "Parce qu'elle occupe la majorité de la population active et fournit l'alimentation : son progrès libère des ressources pour le reste de l'économie." },
          { q: "Qu'apporte la transformation des produits sur place ?", r: "Elle retient dans le pays la valeur ajoutée de la transformation et crée des emplois non agricoles." },
          { q: "Quelles conditions rendent l'aide au développement efficace ?", r: "La coordination entre bailleurs, le respect des priorités définies par le pays, la formation des agents locaux et l'entretien des équipements livrés." },
        ]},
        { type: "appariement", consigne: "Relie chaque action au levier correspondant.", pointsPar: 1, items: [
          { g: ["Construire un magasin de stockage", "Ouvrir une huilerie", "Respecter les normes d'exportation", "Simplifier la création d'entreprise", "Former les producteurs"], d: ["Industrialisation", "Institutions", "Modernisation agricole", "Insertion commerciale", "Modernisation agricole"], pairs: [[0, 2], [1, 0], [2, 3], [3, 1], [4, 4]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 13 — RAS 3
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les limites écologiques de la croissance",
      theme: "Croissance et développement",
      ras: "Evaluer les rôles de la croissance économique face au développement durable",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "expliquer en quoi la croissance se heurte aux limites de la planète",
      supportMeta: "Documents sur les émissions et la déforestation, illustrations, cahier",
      revision: [
        ["Quelles politiques soutiennent le développement ?", "La modernisation agricole, l'industrialisation, la diversification des exportations et le renforcement des institutions."],
        ["Qu'est-ce que le PIB ne mesure pas ?", "La répartition des revenus, le travail domestique, l'économie informelle et les atteintes à l'environnement."],
      ],
      mise: [
        "Une usine qui rejette ses déchets dans une rivière fait-elle baisser la production du pays ?",
        "Non : elle l'augmente. Mais la rivière ne fournit plus de poisson ni d'eau potable : la richesse détruite n'apparaît nulle part.",
      ],
      observation: "les documents sur les émissions et la déforestation",
      observationSupport: "Documents et illustrations sur la pollution, la déforestation et l'épuisement des ressources",
      technAna: "Étude de documents et débat dirigé",
      qa: [
        ["Quelles sont les grandes limites écologiques de la croissance ?", "L'épuisement des ressources non renouvelables, la pollution de l'air, de l'eau et des sols, la déforestation et la perte de biodiversité."],
        ["Qu'est-ce qu'une ressource non renouvelable ?", "Une ressource dont le stock ne se reconstitue pas à l'échelle humaine : minerais, pétrole, gaz, nappes fossiles."],
        ["Qu'est-ce qu'une ressource renouvelable mal gérée ?", "Une ressource qui se régénère, mais plus lentement qu'on ne l'exploite : forêt, poisson, sols cultivés, eau douce."],
        ["Qu'est-ce qu'une externalité négative ?", "Un coût subi par un tiers et non compensé par celui qui le cause : la fumée d'une usine imposée au voisinage."],
        ["Comment le changement climatique menace-t-il la croissance ?", "Par la multiplication des sécheresses, des cyclones et des inondations, qui détruisent récoltes, routes et habitations."],
        ["Pourquoi dit-on que la planète a des limites ?", "Parce que ses ressources sont finies et sa capacité d'absorption des déchets limitée : la production ne peut croître sans fin sur un espace fini."],
        ["La croissance et l'environnement sont-ils forcément opposés ?", "Non : une croissance qui économise l'énergie, recycle et protège les ressources peut réduire la pression sur l'environnement."],
        ["Qu'est-ce que le développement durable ?", "Un développement qui répond aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs."],
      ],
      synthese: "Donc, la croissance se heurte à des limites écologiques : les ressources non renouvelables s'épuisent, les ressources renouvelables peuvent être surexploitées, et les déchets dépassent la capacité d'absorption de la planète. Ces atteintes ne sont pas déduites du PIB : elles apparaissent comme des externalités négatives. Le développement durable propose de tenir ensemble les trois exigences économique, sociale et environnementale.",
      motsCles: ["limites écologiques", "ressources non renouvelables", "externalité négative", "déforestation", "biodiversité", "changement climatique", "développement durable", "pollution"],
      image: { file: "t12_u1_ecologie.jpg", legende: "Figure 13 — Les limites écologiques de la croissance." },
      contenu: [
        {
          sousTitre: "1. Des ressources finies",
          texte: "La production utilise des ressources dont certaines ne se renouvellent pas à l'échelle humaine.",
          liste: [
            "Ressources non renouvelables : minerais, hydrocarbures, nappes d'eau fossiles.",
            "Ressources renouvelables : forêts, sols, poissons, eau douce, qui se régénèrent à condition de ne pas être surexploités.",
            "Une ressource renouvelable exploitée plus vite qu'elle ne se reconstitue devient, de fait, épuisable.",
          ],
        },
        {
          sousTitre: "2. Les atteintes non comptées : les externalités",
          texte: "Une grande partie des dégradations ne passe par aucun prix : personne ne les paie, personne ne les répare.",
          liste: [
            "La fumée d'une usine dégrade la santé du voisinage sans figurer dans ses coûts.",
            "Les rejets dans une rivière détruisent la pêche dont vivent d'autres familles.",
            "Ces coûts supportés par des tiers sont des externalités négatives.",
          ],
        },
        {
          sousTitre: "3. La déforestation et la perte de biodiversité",
          texte: "La disparition des forêts illustre le mécanisme : un gain immédiat, une perte durable.",
          liste: [
            "Le bois vendu entre dans le PIB ; la forêt disparue n'est déduite d'aucun compte.",
            "La disparition des sols fertiles réduit les récoltes futures.",
            "La perte d'espèces appauvrit les ressources disponibles pour l'agriculture et la médecine.",
          ],
        },
        {
          sousTitre: "4. Le changement climatique",
          texte: "L'accumulation des gaz à effet de serre provoque un dérèglement dont les effets sont déjà mesurables.",
          liste: [
            "Sécheresses plus longues et cyclones plus intenses.",
            "Destruction de récoltes, de routes et d'habitations, avec un coût de reconstruction élevé.",
            "Les populations les plus pauvres sont les plus exposées, bien qu'elles aient le moins contribué au problème.",
          ],
        },
        {
          sousTitre: "5. Du constat au développement durable",
          texte: "Reconnaître les limites écologiques ne conduit pas à renoncer au développement, mais à le rendre soutenable.",
          liste: [
            "Le développement durable répond aux besoins du présent sans compromettre ceux des générations futures.",
            "Il articule trois exigences : efficacité économique, équité sociale et respect de l'environnement.",
            "Les instruments qui permettent cette conciliation sont étudiés aux deux séances suivantes.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une ressource non renouvelable est…", opts: ["un minerai ou un hydrocarbure", "une forêt bien gérée", "un champ cultivé"], ok: 0, expl: "Son stock ne se reconstitue pas à l'échelle humaine." },
          { q: "La fumée d'une usine imposée au voisinage est…", opts: ["une externalité négative", "un avantage comparatif", "un bien collectif"], ok: 0, expl: "C'est un coût subi par un tiers sans compensation." },
          { q: "Le développement durable répond aux besoins du présent…", opts: ["sans compromettre ceux des générations futures", "en épuisant les ressources", "en augmentant la pollution"], ok: 0, expl: "C'est la définition retenue au niveau international." },
          { q: "La déforestation fait…", opts: ["monter le PIB sans déduire la perte de forêt", "baisser le PIB", "disparaître l'industrie"], ok: 0, expl: "La vente de bois est comptée, la perte de la forêt ne l'est pas." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une ressource renouvelable peut devenir épuisable.", rep: true, expl: "Si on l'exploite plus vite qu'elle ne se régénère." },
          { txt: "Les externalités négatives sont toujours payées par celui qui les cause.", rep: false, expl: "C'est précisément le contraire : elles ne sont pas compensées." },
          { txt: "Croissance et environnement sont nécessairement incompatibles.", rep: false, expl: "Une croissance économe en ressources réduit la pression sur l'environnement." },
          { txt: "Les populations pauvres sont les plus exposées au changement climatique.", rep: true, expl: "Elles dépendent directement des ressources naturelles et disposent de peu de moyens de protection." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite trois limites écologiques de la croissance.", r: "L'épuisement des ressources non renouvelables, la pollution de l'air, de l'eau et des sols, et la déforestation avec la perte de biodiversité." },
          { q: "Donne la définition d'une externalité négative et un exemple.", r: "C'est un coût subi par un tiers sans compensation par celui qui le cause : les rejets d'une usine qui détruisent la pêche en aval en sont un exemple." },
          { q: "Pourquoi le PIB augmente-t-il lors d'une déforestation ?", r: "Parce que la vente du bois entre dans la production, alors que la perte de la forêt n'est déduite d'aucun compte." },
          { q: "Définis le développement durable.", r: "C'est un développement qui répond aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Une ressource dont le stock ne se reconstitue pas est dite non", suite: "renouvelable" },
          { debut: "Un coût subi par un tiers sans compensation est une externalité", suite: "négative" },
          { debut: "Le développement durable articule économie, social et", suite: "environnement" },
          { debut: "Le changement climatique multiplie les sécheresses et les", suite: "cyclones" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 14 — RAS 3
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Soutenabilité faible et soutenabilité forte",
      theme: "Croissance et développement",
      ras: "Evaluer les rôles de la croissance économique face au développement durable",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "distinguer les deux approches de la soutenabilité",
      supportMeta: "Textes de référence, schémas comparatifs, cahier",
      revision: [
        ["Qu'est-ce que le développement durable ?", "Un développement qui répond aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs."],
        ["Cite deux limites écologiques de la croissance.", "L'épuisement des ressources non renouvelables et la pollution de l'air, de l'eau et des sols."],
      ],
      mise: [
        "Un pays épuise une mine et construit des écoles avec l'argent gagné. La génération suivante est-elle perdante ?",
        "Selon l'approche retenue, la réponse diffère : la richesse peut être remplacée, ou la perte peut être jugée irréparable.",
      ],
      observation: "le tableau comparant les deux approches",
      observationSupport: "Tableau comparatif des deux approches de la soutenabilité affiché ou distribué",
      technAna: "Lecture de tableau et débat dirigé",
      qa: [
        ["Qu'est-ce que la soutenabilité ?", "La capacité d'un mode de développement à se maintenir dans le temps sans épuiser les ressources dont il dépend."],
        ["Que soutient la soutenabilité faible ?", "Que les différentes formes de capital sont substituables : une ressource naturelle épuisée peut être remplacée par du capital produit ou du savoir."],
        ["Que soutient la soutenabilité forte ?", "Que le capital naturel n'est pas remplaçable : chaque forme de capital doit être préservée séparément."],
        ["Quelles formes de capital distingue-t-on ?", "Le capital naturel — ressources et écosystèmes —, le capital produit — machines et infrastructures —, le capital humain — compétences et santé — et le capital institutionnel."],
        ["Quel argument fonde la soutenabilité faible ?", "L'idée que ce qui compte est le stock total de capital transmis : on peut échanger une forme contre une autre si la valeur totale ne diminue pas."],
        ["Quel argument fonde la soutenabilité forte ?", "L'irréversibilité : une espèce disparue ou une nappe épuisée ne se reconstituent pas, quel que soit le capital accumulé par ailleurs."],
        ["Quelles conséquences pratiques distinguent les deux approches ?", "La soutenabilité faible accepte des compensations ; la soutenabilité forte fixe des seuils à ne pas franchir et interdit certaines destructions."],
        ["Les deux approches ont-elles un point commun ?", "Oui : toutes deux exigent que la génération présente transmette de quoi vivre à la suivante ; elles diffèrent sur les moyens d'y parvenir."],
      ],
      synthese: "Donc, la soutenabilité faible considère que les formes de capital sont interchangeables et que seul le stock total importe ; la soutenabilité forte estime que le capital naturel est irremplaçable et qu'il faut préserver chaque forme de capital séparément. Les deux approches partagent la même exigence envers les générations futures, mais elles conduisent à des politiques différentes : compensation pour l'une, seuils et interdictions pour l'autre.",
      motsCles: ["soutenabilité", "soutenabilité faible", "soutenabilité forte", "capital naturel", "capital produit", "capital humain", "irréversibilité", "seuils"],
      image: { file: "t12_u1_soutenabilite.png", legende: "Figure 14 — Soutenabilité faible et soutenabilité forte." },
      contenu: [
        {
          sousTitre: "1. La condition commune",
          texte: "Les deux approches partagent la même définition du développement durable : transmettre aux générations suivantes de quoi satisfaire leurs besoins.",
          liste: [
            "Consommer aujourd'hui sans détruire les capacités de demain.",
            "Tenir ensemble les dimensions économique, sociale et environnementale.",
            "La divergence porte sur la question suivante : que peut-on remplacer ?",
          ],
        },
        {
          sousTitre: "2. Les quatre formes de capital",
          texte: "La discussion porte sur ce qui est transmis, et sur la possibilité d'échanger une forme de capital contre une autre.",
          liste: [
            "Capital naturel : ressources, sols, forêts, eau, biodiversité.",
            "Capital produit : machines, bâtiments, routes, réseaux.",
            "Capital humain : compétences, formation, santé.",
            "Capital institutionnel : règles, organisations, confiance.",
          ],
        },
        {
          sousTitre: "3. La soutenabilité faible",
          texte: "Dans cette approche, les formes de capital sont substituables : ce qui compte est le stock global transmis.",
          liste: [
            "Une mine épuisée peut être compensée par des écoles, des routes et des machines.",
            "Le progrès technique permet de produire autant avec moins de ressources.",
            "La condition retenue est que le capital total ne diminue pas.",
          ],
        },
        {
          sousTitre: "4. La soutenabilité forte",
          texte: "Dans cette approche, le capital naturel n'est pas remplaçable : chaque forme de capital doit être maintenue séparément.",
          liste: [
            "Une espèce disparue ne se remplace par aucune machine.",
            "Une nappe fossile épuisée ne se reconstitue pas.",
            "Certaines destructions sont irréversibles : la prudence impose des seuils à ne pas franchir.",
          ],
        },
        {
          sousTitre: "5. Ce que changent les deux approches en politique",
          texte: "Le choix théorique se traduit directement dans les instruments retenus.",
          liste: [
            "Soutenabilité faible : on accepte un projet destructeur s'il finance une compensation équivalente.",
            "Soutenabilité forte : on interdit le projet lorsque la ressource est irremplaçable, quel que soit le bénéfice financier.",
            "Dans la pratique, la plupart des politiques combinent les deux logiques selon les ressources concernées.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La soutenabilité faible considère les capitaux comme…", opts: ["substituables", "irremplaçables", "inutiles"], ok: 0, expl: "Une forme de capital peut en remplacer une autre." },
          { q: "La soutenabilité forte insiste sur…", opts: ["l'irréversibilité de certaines destructions", "la suppression des industries", "la croissance démographique"], ok: 0, expl: "Certaines pertes ne se compensent par aucune richesse." },
          { q: "Le capital humain désigne…", opts: ["les compétences et la santé des personnes", "les machines", "les ressources naturelles"], ok: 0, expl: "Il est incorporé aux personnes." },
          { q: "Une politique de seuils à ne pas franchir relève plutôt de…", opts: ["la soutenabilité forte", "la soutenabilité faible", "l'absence de soutenabilité"], ok: 0, expl: "Elle protège une ressource jugée irremplaçable." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Les deux approches refusent de transmettre quoi que ce soit aux générations futures.", rep: false, expl: "Elles partagent au contraire la même exigence de transmission." },
          { txt: "Une espèce disparue peut être remplacée par une usine.", rep: false, expl: "Pour la soutenabilité forte, la perte est irréversible." },
          { txt: "Le progrès technique est un argument de la soutenabilité faible.", rep: true, expl: "Il permet de produire autant avec moins de ressources." },
          { txt: "Les politiques réelles combinent souvent les deux logiques.", rep: true, expl: "Selon les ressources concernées, on compense ou l'on protège." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Qu'est-ce que la soutenabilité ?", r: "C'est la capacité d'un mode de développement à se maintenir dans le temps sans épuiser les ressources dont il dépend." },
          { q: "Expose l'argument de la soutenabilité faible.", r: "Les formes de capital sont substituables : une ressource épuisée peut être compensée par des machines, des routes ou du savoir, à condition que le stock total ne diminue pas." },
          { q: "Expose l'argument de la soutenabilité forte.", r: "Le capital naturel n'est pas remplaçable : certaines destructions sont irréversibles, donc chaque forme de capital doit être préservée séparément." },
          { q: "En quoi les deux approches conduisent-elles à des politiques différentes ?", r: "La soutenabilité faible accepte une compensation financière, tandis que la soutenabilité forte interdit la destruction des ressources irremplaçables." },
        ]},
        { type: "appariement", consigne: "Relie chaque affirmation à l'approche correspondante.", pointsPar: 1, items: [
          { g: ["Une mine finance la construction d'écoles", "Une espèce protégée ne se remplace pas", "Le progrès technique économise les ressources", "Un seuil de prélèvement est fixé", "Le capital total doit rester constant"], d: ["Soutenabilité forte", "Soutenabilité faible", "Soutenabilité forte", "Soutenabilité faible", "Soutenabilité faible"], pairs: [[0, 1], [1, 0], [2, 1], [3, 0], [4, 3]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 15 — RAS 3
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les politiques environnementales",
      theme: "Croissance et développement",
      ras: "Evaluer les rôles de la croissance économique face au développement durable",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "présenter les trois instruments des politiques environnementales et les comparer",
      supportMeta: "Textes réglementaires, documents sur les taxes et les quotas, cahier",
      revision: [
        ["Quelle différence y a-t-il entre soutenabilité faible et soutenabilité forte ?", "La faible admet la substitution entre capitaux ; la forte tient le capital naturel pour irremplaçable."],
        ["Qu'est-ce qu'une externalité négative ?", "Un coût subi par un tiers et non compensé par celui qui le cause."],
      ],
      mise: [
        "Comment faire pour qu'une usine rejette moins de fumée : l'y obliger, lui faire payer, ou limiter la quantité totale rejetée ?",
        "Les trois voies existent : la réglementation, la taxation et les marchés de quotas. Elles n'ont ni le même coût ni le même effet.",
      ],
      observation: "le tableau comparant les trois instruments",
      observationSupport: "Tableau comparatif des trois instruments affiché ou distribué",
      technAna: "Lecture de tableau et débat dirigé",
      qa: [
        ["Quels sont les trois instruments d'une politique environnementale ?", "La réglementation, la taxation et les marchés de quotas d'émission."],
        ["En quoi consiste la réglementation ?", "L'autorité fixe des normes et des interdictions : valeurs limites d'émission, produits interdits, aires protégées, études d'impact obligatoires."],
        ["Quels sont les avantages de la réglementation ?", "Le résultat est direct et prévisible, et l'interdiction est comprise de tous : c'est l'instrument le plus simple à faire respecter pour des pollutions graves."],
        ["Quelles sont ses limites ?", "Le contrôle coûteux, l'uniformité de la norme qui ignore les situations, et l'absence d'incitation à faire mieux que la norme."],
        ["En quoi consiste la taxation ?", "On fait payer le pollueur : une taxe sur les émissions ou sur les produits polluants élève leur prix et décourage leur usage."],
        ["Qu'est-ce que le principe pollueur-payeur ?", "Celui qui dégrade l'environnement supporte le coût de la dégradation, au lieu de le laisser porter par la collectivité."],
        ["En quoi consistent les marchés de quotas ?", "L'autorité fixe un plafond d'émissions, répartit des droits échangeables : celui qui pollue moins vend son quota, celui qui pollue plus doit en acheter."],
        ["Lequel des trois instruments garantit la quantité globale ?", "Les quotas : le plafond fixe la quantité totale, alors que la taxe fixe un prix et laisse la quantité s'ajuster."],
      ],
      synthese: "Donc, trois instruments permettent d'agir : la réglementation impose une conduite, la taxation modifie les prix pour décourager la pollution, et les marchés de quotas fixent une quantité globale à ne pas dépasser. La réglementation est directe mais coûteuse à contrôler ; la taxe est incitative mais laisse la quantité incertaine ; les quotas garantissent le volume, à condition d'organiser un marché et de contrôler les déclarations.",
      motsCles: ["réglementation", "taxation", "marchés de quotas", "pollueur-payeur", "normes", "plafond d'émissions", "incitation", "contrôle"],
      image: { file: "t12_u1_environnement.png", legende: "Figure 15 — Les trois instruments des politiques environnementales." },
      contenu: [
        {
          sousTitre: "1. La réglementation",
          texte: "L'instrument le plus ancien consiste à fixer des règles et à les faire respecter.",
          liste: [
            "Normes d'émission, interdiction de produits ou de procédés dangereux.",
            "Classement d'aires protégées, obligation d'étude d'impact avant tout projet.",
            "Avantage : le résultat est direct et l'interdiction est claire.",
            "Limite : le contrôle coûte cher et la norme n'incite pas à faire mieux qu'elle.",
          ],
        },
        {
          sousTitre: "2. La taxation",
          texte: "La taxe modifie les prix afin de rendre la pollution coûteuse pour celui qui la cause.",
          liste: [
            "Une taxe sur les émissions, sur les carburants ou sur les emballages non recyclables.",
            "Principe pollueur-payeur : le coût de la dégradation est supporté par son auteur.",
            "Avantage : chacun réduit ses émissions au moindre coût, et l'incitation reste permanente.",
            "Limite : la quantité totale d'émissions n'est pas garantie, et le taux de taxe est difficile à fixer.",
          ],
        },
        {
          sousTitre: "3. Les marchés de quotas d'émission",
          texte: "Le troisième instrument fixe d'abord la quantité, puis laisse le marché en déterminer le prix.",
          liste: [
            "L'autorité fixe un plafond d'émissions pour une période donnée.",
            "Elle répartit des quotas entre les entreprises concernées, librement échangeables.",
            "L'entreprise qui réduit ses émissions vend ses quotas ; celle qui dépasse son quota en achète.",
            "Avantage : la quantité globale est garantie ; limite : il faut un registre fiable et un contrôle des déclarations.",
          ],
        },
        {
          sousTitre: "4. Comparer les trois instruments",
          texte: "Chaque instrument agit sur une variable différente : la conduite, le prix ou la quantité.",
          liste: [
            "Réglementation : agit sur la conduite — résultat prévisible, contrôle lourd.",
            "Taxation : agit sur le prix — incitation permanente, quantité incertaine.",
            "Quotas : agissent sur la quantité — plafond garanti, marché à organiser.",
            "Le choix dépend du polluant, du nombre d'acteurs concernés et des capacités de contrôle du pays.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une norme d'émission appartient à…", opts: ["la réglementation", "la taxation", "un marché de quotas"], ok: 0, expl: "Elle impose une conduite, contrôlée par l'autorité." },
          { q: "Le principe pollueur-payeur fonde…", opts: ["la taxation", "les quotas", "les aires protégées"], ok: 0, expl: "Celui qui dégrade paie le coût de la dégradation." },
          { q: "L'instrument qui garantit la quantité globale d'émissions est…", opts: ["le marché de quotas", "la taxe", "la norme"], ok: 0, expl: "Le plafond fixe la quantité, le marché fixe le prix." },
          { q: "Sur un marché de quotas, l'entreprise la plus propre…", opts: ["vend ses quotas", "en achète", "les détruit"], ok: 0, expl: "Elle dispose de droits excédentaires qu'elle peut céder." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La réglementation incite à faire mieux que la norme.", rep: false, expl: "Une fois la norme respectée, aucune incitation ne subsiste." },
          { txt: "Une taxe environnementale agit sur les prix.", rep: true, expl: "Elle rend la pollution plus coûteuse." },
          { txt: "Les quotas garantissent le prix du droit à polluer.", rep: false, expl: "Ils garantissent la quantité ; le prix s'ajuste sur le marché." },
          { txt: "Le choix de l'instrument dépend des capacités de contrôle du pays.", rep: true, expl: "Un marché de quotas suppose un registre fiable et des contrôles." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite les trois instruments d'une politique environnementale.", r: "La réglementation, la taxation et les marchés de quotas d'émission." },
          { q: "Quels sont l'avantage et la limite de la réglementation ?", r: "Son avantage est un résultat direct et prévisible ; sa limite est un contrôle coûteux et l'absence d'incitation à dépasser la norme." },
          { q: "Qu'est-ce que le principe pollueur-payeur ?", r: "C'est le principe selon lequel celui qui dégrade l'environnement supporte le coût de la dégradation au lieu de le laisser porter par la collectivité." },
          { q: "Pourquoi les quotas garantissent-ils la quantité et non le prix ?", r: "Parce que l'autorité fixe le plafond d'émissions, tandis que le prix du droit à polluer se forme librement sur le marché entre acheteurs et vendeurs." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Une valeur limite d'émission est une", suite: "norme" },
          { debut: "Une taxe environnementale agit sur le", suite: "prix" },
          { debut: "Un marché de quotas fixe d'abord un", suite: "plafond" },
          { debut: "L'entreprise la plus propre peut vendre ses", suite: "quotas" },
        ]},
      ],
    },
  ],
};

module.exports = U;
