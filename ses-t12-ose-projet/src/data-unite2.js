// ============================================================
// Unité II — Mondialisation (PE T12 série OSE — 30 heures)
// RAS 1 : Analyser les fondements du commerce international
// RAS 2 : Déterminer les avantages du commerce international sur la croissance économique
// RAS 3 : Analyser les principaux mécanismes des échanges financiers internationaux
//         et leurs effets sur l'économie
// Découpage : 15 séances de cours + 1 révision + 1 sujet d'examen
// Valeurs : Persévérance, goût de l'effort et de l'excellence
// ============================================================

const U = {
  num: "II",
  titre: "Mondialisation",
  ras: "Analyser les fondements du commerce international · Déterminer les avantages du commerce international sur la croissance économique · Analyser les principaux mécanismes des échanges financiers internationaux et leurs effets sur l'économie",
  valeurs: "Persévérance, goût de l'effort et de l'excellence",
  duree: "30 heures",
  themes: [
    "Le commerce international : définition et évolution",
    "La transformation de la structure des échanges mondiaux",
    "Échanges internationaux et croissance économique",
    "Libre-échange et protectionnisme",
    "Les avantages absolus selon Adam Smith",
    "Les avantages comparatifs selon David Ricardo",
    "Les dotations factorielles : Heckscher et Ohlin",
    "Le commerce intra-branche et les avantages construits",
    "L'Organisation mondiale du commerce et la coopération internationale",
    "Les firmes multinationales : localisation et délocalisation",
    "Les flux internationaux de capitaux : IDE et investissements de portefeuille",
    "Le taux de change et le marché des changes",
    "La globalisation financière",
    "Les crises financières",
    "L'endettement extérieur et le service de la dette",
  ],
  topics: [
    // ---------------------------------------------------------
    // SÉANCE 18 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le commerce international : définition et évolution",
      theme: "Mondialisation",
      ras: "Analyser les fondements du commerce international",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "définir le commerce international et décrire sa progression",
      supportMeta: "Documents statistiques, illustrations, cahier",
      revision: [
        ["Qu'est-ce que la croissance économique ?", "L'augmentation durable de la production d'un pays, mesurée par la hausse du PIB en volume."],
        ["Qu'est-ce que la spécialisation ?", "Le fait, pour un pays ou une entreprise, de concentrer sa production sur un nombre restreint de biens."],
      ],
      mise: [
        "Pourquoi un pays achète-t-il à l'étranger des produits qu'il pourrait fabriquer lui-même ?",
        "Parce qu'il les obtient à meilleur prix ou en meilleure qualité, et qu'il peut consacrer ses ressources à ce qu'il produit le mieux.",
      ],
      observation: "le document présentant l'évolution du commerce mondial",
      observationSupport: "Documents et illustrations sur l'évolution des échanges mondiaux",
      technAna: "Lecture de documents et discussion dirigée",
      qa: [
        ["Qu'est-ce que le commerce international ?", "L'ensemble des échanges de biens et de services entre les pays : importations et exportations."],
        ["Qu'appelle-t-on exportation ?", "La vente à l'étranger d'un bien ou d'un service produit dans le pays."],
        ["Qu'appelle-t-on importation ?", "L'achat à l'étranger d'un bien ou d'un service destiné au marché intérieur."],
        ["Qu'est-ce que le commerce intra-firme ?", "Les échanges entre les différentes filiales d'une même entreprise multinationale, d'un pays à l'autre."],
        ["Qu'est-ce que le commerce intra-branche ?", "L'échange de produits appartenant à une même branche : deux pays s'échangent des véhicules ou des vêtements de gammes différentes."],
        ["Comment le commerce mondial a-t-il évolué ?", "Il a progressé plus vite que la production mondiale : les économies sont devenues plus ouvertes et plus interdépendantes."],
        ["Qu'est-ce que le taux d'ouverture ?", "Le rapport entre le commerce extérieur et le PIB : (exportations + importations) ÷ (2 × PIB)."],
        ["Qu'est-ce que la mondialisation ?", "L'intensification des échanges de biens, de services, de capitaux et d'informations à l'échelle de la planète."],
      ],
      synthese: "Donc, le commerce international désigne les échanges de biens et de services entre les pays. Il a progressé plus rapidement que la production mondiale : les économies sont aujourd'hui étroitement liées, et une part croissante des échanges se déroule à l'intérieur des branches ou des firmes elles-mêmes.",
      motsCles: ["commerce international", "exportation", "importation", "commerce intra-firme", "commerce intra-branche", "taux d'ouverture", "mondialisation", "interdépendance"],
      image: { file: "t12_u2_commerce.jpg", legende: "Figure 16 — Le commerce international : exporter et importer." },
      contenu: [
        {
          sousTitre: "1. Exporter et importer",
          texte: "Le commerce international recouvre l'ensemble des opérations d'achat et de vente qui franchissent une frontière.",
          liste: [
            "Exportation : un bien ou un service produit dans le pays est vendu à l'étranger.",
            "Importation : un bien ou un service produit à l'étranger est acheté par les résidents du pays.",
            "La balance commerciale enregistre la différence entre la valeur des exportations et celle des importations.",
          ],
        },
        {
          sousTitre: "2. Une progression continue",
          texte: "Depuis plusieurs décennies, les échanges progressent plus vite que la production mondiale.",
          liste: [
            "La baisse des coûts de transport facilite les échanges à longue distance.",
            "La réduction des obstacles douaniers ouvre les marchés.",
            "Les technologies de l'information permettent de coordonner des productions dispersées.",
          ],
        },
        {
          sousTitre: "3. Deux formes nouvelles d'échanges",
          texte: "Une part importante du commerce mondial ne ressemble plus au schéma classique d'un pays qui vend ce qu'un autre ne produit pas.",
          liste: [
            "Commerce intra-branche : deux pays échangent des produits d'une même catégorie, mais de qualités ou de gammes différentes.",
            "Commerce intra-firme : les échanges se déroulent entre les filiales d'une même entreprise, à l'intérieur d'une chaîne de production internationale.",
          ],
        },
        {
          sousTitre: "4. Mesurer l'ouverture",
          texte: "Le degré d'ouverture d'une économie se mesure par un rapport simple.",
          liste: [
            "Taux d'ouverture = (exportations + importations) ÷ (2 × PIB).",
            "Un petit pays est souvent plus ouvert qu'un grand pays, car son marché intérieur est étroit.",
            "Un taux élevé signifie aussi une plus grande exposition aux chocs extérieurs.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une exportation est…", opts: ["une vente à l'étranger", "un achat à l'étranger", "une production pour soi-même"], ok: 0, expl: "Le bien produit dans le pays est vendu hors du pays." },
          { q: "Le commerce intra-firme désigne…", opts: ["des échanges entre filiales d'une même entreprise", "des échanges entre deux États", "des échanges de services publics"], ok: 0, expl: "Il se déroule à l'intérieur d'un même groupe." },
          { q: "Le taux d'ouverture se calcule avec…", opts: ["les exportations, les importations et le PIB", "le seul PIB", "le nombre d'habitants"], ok: 0, expl: "Il rapporte le commerce extérieur à la production." },
          { q: "Une économie très ouverte est…", opts: ["plus exposée aux chocs extérieurs", "totalement protégée", "nécessairement plus pauvre"], ok: 0, expl: "Elle dépend davantage de la conjoncture mondiale." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le commerce mondial progresse moins vite que la production mondiale.", rep: false, expl: "Il progresse plus vite : les économies s'ouvrent." },
          { txt: "Un pays peut exporter et importer des produits d'une même branche.", rep: true, expl: "C'est le commerce intra-branche." },
          { txt: "Un grand pays est toujours plus ouvert qu'un petit pays.", rep: false, expl: "C'est souvent l'inverse : le marché intérieur d'un grand pays suffit davantage." },
          { txt: "La baisse des coûts de transport favorise les échanges.", rep: true, expl: "Elle rapproche les marchés éloignés." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis le commerce international.", r: "Le commerce international est l'ensemble des échanges de biens et de services qui franchissent les frontières : les exportations et les importations." },
          { q: "Quelle différence y a-t-il entre commerce intra-branche et commerce intra-firme ?", r: "Le commerce intra-branche échange des produits d'une même catégorie entre pays, tandis que le commerce intra-firme se déroule entre les filiales d'une même entreprise." },
          { q: "Comment calcule-t-on le taux d'ouverture d'une économie ?", r: "On additionne les exportations et les importations, puis on divise le total par deux fois le PIB." },
          { q: "Cite deux facteurs qui expliquent la progression du commerce mondial.", r: "La baisse des coûts de transport et la réduction des obstacles douaniers, auxquelles s'ajoutent les technologies de l'information." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Un bien vendu à l'étranger est une", suite: "exportation" },
          { debut: "Les échanges entre filiales d'un même groupe forment le commerce", suite: "intra-firme" },
          { debut: "La différence entre exportations et importations forme la balance", suite: "commerciale" },
          { debut: "L'intensification des échanges à l'échelle du monde est la", suite: "mondialisation" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 19 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La transformation de la structure des échanges mondiaux",
      theme: "Mondialisation",
      ras: "Analyser les fondements du commerce international",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "décrire l'évolution de la composition du commerce mondial",
      supportMeta: "Tableaux statistiques, graphiques, cahier",
      revision: [
        ["Qu'est-ce que le commerce intra-branche ?", "L'échange de produits appartenant à une même branche entre deux pays."],
        ["Comment définit-on le taux d'ouverture ?", "C'est le rapport entre le commerce extérieur et le PIB."],
      ],
      mise: [
        "Autrefois, les pays échangeaient surtout des matières premières contre des produits finis. Est-ce encore le cas ?",
        "Non : la part des produits manufacturés et des services a fortement progressé, alors que celle des produits primaires recule.",
      ],
      observation: "le graphique de répartition des échanges par catégorie de produits",
      observationSupport: "Graphique de répartition des échanges mondiaux par catégorie de produits",
      technAna: "Lecture de graphique et discussion dirigée",
      qa: [
        ["Quelles sont les trois grandes catégories de produits échangés ?", "Les produits primaires, les produits manufacturés et les services."],
        ["Que désignent les produits primaires ?", "Les produits issus de l'agriculture, de l'élevage, de la pêche, de la forêt et des mines, échangés sans transformation importante."],
        ["Que désignent les produits manufacturés ?", "Les biens transformés par l'industrie : textiles, matériel, matériaux de construction, produits alimentaires transformés."],
        ["Quels services s'échangent-ils ?", "Les transports, le tourisme, la banque et l'assurance, l'informatique, l'enseignement et la santé."],
        ["Comment la répartition a-t-elle évolué ?", "La part des produits manufacturés et des services s'est accrue, tandis que celle des produits primaires a reculé."],
        ["Pourquoi la part des services progresse-t-elle ?", "Parce que le transport, la communication et le tourisme se développent, et que de nombreux services peuvent désormais être échangés à distance."],
        ["Qu'est-ce que la division internationale du travail ?", "La répartition des productions entre pays, chacun se spécialisant dans les activités où il est le plus efficace."],
        ["Cette évolution profite-t-elle à tous les pays ?", "Elle profite à ceux qui parviennent à se positionner sur les segments porteurs : un pays qui n'exporte que des produits bruts reste exposé à la baisse de leurs cours."],
      ],
      synthese: "Donc, la structure du commerce mondial s'est profondément transformée : les produits manufacturés et les services occupent aujourd'hui l'essentiel des échanges, alors que la part des produits primaires recule. Cette évolution redéfinit la place de chaque pays dans la division internationale du travail.",
      motsCles: ["produits primaires", "produits manufacturés", "services", "structure des échanges", "division internationale du travail", "cours mondiaux", "transformation", "tourisme"],
      image: { file: "t12_u2_structure.png", legende: "Figure 17 — La transformation de la structure du commerce mondial." },
      contenu: [
        {
          sousTitre: "1. Trois grandes catégories",
          texte: "Les statistiques du commerce mondial répartissent les échanges en trois ensembles.",
          liste: [
            "Produits primaires : riz, vanille, café, poisson, bois, minerais, produits pétroliers bruts.",
            "Produits manufacturés : vêtements, matériel agricole, matériaux de construction, denrées transformées.",
            "Services : transport maritime et aérien, tourisme, banque, assurance, informatique.",
          ],
        },
        {
          sousTitre: "2. Une transformation mesurable",
          texte: "La comparaison dans le temps révèle un basculement net de la composition des échanges.",
          liste: [
            "La part des produits primaires diminue, bien que les volumes échangés continuent de croître.",
            "La part des produits manufacturés devient prépondérante : les chaînes de production se répartissent entre plusieurs pays.",
            "La part des services progresse rapidement, portée par le tourisme, la finance et les technologies de l'information.",
          ],
        },
        {
          sousTitre: "3. Pourquoi cette transformation",
          texte: "Trois mouvements expliquent cette évolution.",
          liste: [
            "La baisse des coûts de transport rend rentable l'échange de produits transformés à longue distance.",
            "La décomposition des processus productifs : chaque pays réalise une étape de la fabrication.",
            "L'élévation du niveau de vie, qui accroît la demande de services et de produits variés.",
          ],
        },
        {
          sousTitre: "4. Ce que cela change pour les pays exportateurs",
          texte: "La place occupée dans la structure des échanges détermine la solidité de la position d'un pays.",
          liste: [
            "Un pays qui exporte des produits primaires reste exposé à la baisse des cours mondiaux.",
            "Un pays qui exporte des produits transformés capte une part plus importante de la valeur ajoutée.",
            "Un pays qui exporte des services valorise ses compétences et ses infrastructures.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La vanille brute échangée sans transformation est…", opts: ["un produit primaire", "un produit manufacturé", "un service"], ok: 0, expl: "Elle sort de l'agriculture sans transformation industrielle." },
          { q: "La part des services dans les échanges mondiaux…", opts: ["augmente", "disparaît", "reste nulle"], ok: 0, expl: "Le tourisme, la finance et le numérique la portent." },
          { q: "Un pays qui n'exporte que des produits bruts…", opts: ["reste exposé à la baisse des cours", "est à l'abri des crises", "ne paie aucun transport"], ok: 0, expl: "Ses recettes dépendent des prix mondiaux." },
          { q: "Transformer la production sur place permet de…", opts: ["capter davantage de valeur ajoutée", "réduire ses exportations", "supprimer les importations"], ok: 0, expl: "La valeur créée par la transformation reste dans le pays." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Les produits manufacturés dominent aujourd'hui les échanges mondiaux.", rep: true, expl: "Leur part est devenue prépondérante." },
          { txt: "Les services ne peuvent pas faire l'objet d'échanges internationaux.", rep: false, expl: "Le tourisme, la banque et l'informatique s'échangent largement." },
          { txt: "La décomposition des processus productifs répartit les étapes entre plusieurs pays.", rep: true, expl: "Chaque pays réalise une étape de la chaîne." },
          { txt: "La baisse des coûts de transport freine les échanges de produits transformés.", rep: false, expl: "Elle les favorise au contraire." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite les trois grandes catégories de produits échangés et donne un exemple pour chacune.", r: "Les produits primaires comme le riz, les produits manufacturés comme le textile, et les services comme le tourisme." },
          { q: "Comment la répartition des échanges a-t-elle évolué ?", r: "La part des produits manufacturés et des services a fortement progressé, tandis que celle des produits primaires a reculé." },
          { q: "Pourquoi la décomposition des processus productifs favorise-t-elle le commerce ?", r: "Parce que chaque pays réalise une étape de la fabrication, ce qui multiplie les échanges de produits semi-finis entre pays." },
          { q: "Quel risque court un pays qui n'exporte que des produits primaires ?", r: "Il reste exposé à la baisse des cours mondiaux et ne capte qu'une faible part de la valeur ajoutée." },
        ]},
        { type: "appariement", consigne: "Relie chaque produit à sa catégorie.", pointsPar: 1, items: [
          { g: ["Un séjour touristique", "Du textile confectionné", "Des grains de café verts", "Un logiciel livré en ligne", "Du minerai de nickel"], d: ["Produit manufacturé", "Produit primaire", "Service", "Produit primaire", "Service"], pairs: [[0, 2], [1, 0], [2, 1], [3, 2], [4, 1]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 20 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Échanges internationaux et croissance économique",
      theme: "Mondialisation",
      ras: "Analyser les fondements du commerce international",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "expliquer comment les échanges stimulent la croissance",
      supportMeta: "Documents statistiques, schémas, cahier",
      revision: [
        ["Quelles sont les trois catégories de produits échangés ?", "Les produits primaires, les produits manufacturés et les services."],
        ["Qu'est-ce que la division internationale du travail ?", "La répartition des productions entre pays, chacun se spécialisant là où il est le plus efficace."],
      ],
      mise: [
        "Un pays ouvre ses frontières aux produits étrangers. Sa production va-t-elle augmenter ou diminuer ?",
        "Elle augmente en principe : l'ouverture élargit les débouchés, permet la spécialisation et fait circuler les techniques.",
      ],
      observation: "le schéma de la boucle ouverture — spécialisation — croissance",
      observationSupport: "Schéma des interactions entre ouverture commerciale et croissance",
      technAna: "Lecture de schéma et étude de documents",
      qa: [
        ["Comment l'ouverture stimule-t-elle la croissance ?", "Elle élargit les débouchés, permet la spécialisation, accroît la taille des marchés et intensifie la concurrence."],
        ["Quels sont les canaux de transmission ?", "Les exportations, les importations de biens d'équipement, les transferts de technologie et l'afflux de capitaux."],
        ["Comment les importations peuvent-elles aider à produire ?", "Elles donnent accès à des machines, des intrants et des technologies moins chers ou indisponibles dans le pays."],
        ["Quel rôle joue la concurrence étrangère ?", "Elle oblige les entreprises locales à améliorer leur qualité et à réduire leurs coûts, ce qui élève la productivité."],
        ["Le lien échanges-croissance est-il automatique ?", "Non : il suppose des capacités de production, des infrastructures et une main-d'œuvre formée pour saisir l'opportunité."],
        ["Qu'est-ce qu'une économie d'échelle liée à l'exportation ?", "Produire pour un marché plus vaste abaisse le coût unitaire, ce qui renforce la compétitivité."],
        ["Quels risques accompagnent l'ouverture ?", "La dépendance à l'égard des marchés extérieurs et la fragilité des productions locales face à la concurrence."],
        ["Comment les pouvoirs publics peuvent-ils accompagner l'ouverture ?", "En investissant dans les infrastructures, la formation et la qualité, et en accompagnant les secteurs exposés."],
      ],
      synthese: "Donc, l'ouverture commerciale stimule la croissance par plusieurs canaux : les débouchés offerts aux exportateurs, l'accès à des équipements et à des technologies importés, les économies d'échelle et la pression de la concurrence. Ce gain n'est cependant pas automatique : il suppose des entreprises capables de produire et de se moderniser.",
      motsCles: ["ouverture commerciale", "exportations", "importations", "transfert de technologie", "économies d'échelle", "concurrence", "productivité", "dépendance"],
      image: { file: "t12_u2_echanges.png", legende: "Figure 18 — Commerce international et croissance : une interaction." },
      contenu: [
        {
          sousTitre: "1. Le canal des débouchés",
          texte: "Vendre à l'étranger permet de produire au-delà de ce que le marché national peut absorber.",
          liste: [
            "Une entreprise qui exporte utilise davantage ses capacités de production.",
            "Les volumes plus élevés abaissent le coût unitaire : ce sont les économies d'échelle.",
            "Les recettes d'exportation financent l'achat d'équipements nouveaux.",
          ],
        },
        {
          sousTitre: "2. Le canal des importations",
          texte: "Importer n'est pas seulement consommer étranger : c'est souvent se donner les moyens de produire.",
          liste: [
            "Machines et matériels non fabriqués dans le pays.",
            "Intrants et matières premières à meilleur prix.",
            "Biens d'équipement incorporant des technologies récentes.",
          ],
        },
        {
          sousTitre: "3. Le canal de la concurrence et de la diffusion",
          texte: "L'exposition à la concurrence internationale modifie le comportement des entreprises.",
          liste: [
            "Obligation d'améliorer la qualité et de réduire les coûts.",
            "Adoption plus rapide des méthodes et des techniques éprouvées ailleurs.",
            "Diffusion des savoir-faire par la sous-traitance et les partenariats.",
          ],
        },
        {
          sousTitre: "4. Les conditions du succès",
          texte: "Les études comparées montrent que l'ouverture ne produit ses effets que dans certaines conditions.",
          liste: [
            "Des infrastructures fiables : transport, énergie, télécommunications.",
            "Une main-d'œuvre formée et des entreprises capables d'investir.",
            "Des institutions stables, qui sécurisent les contrats et les échanges.",
            "Sans ces conditions, l'ouverture détruit des activités locales sans en créer de nouvelles.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Exporter vers un marché plus vaste permet de…", opts: ["réaliser des économies d'échelle", "réduire la qualité", "supprimer la concurrence"], ok: 0, expl: "Produire en plus grande série abaisse le coût unitaire." },
          { q: "Importer des machines…", opts: ["donne accès à des technologies", "réduit toujours la croissance", "interdit l'exportation"], ok: 0, expl: "Les biens d'équipement importés élèvent la productivité." },
          { q: "La concurrence étrangère pousse les entreprises locales à…", opts: ["améliorer qualité et coûts", "augmenter leurs prix", "cesser de produire"], ok: 0, expl: "C'est l'effet d'émulation." },
          { q: "Le gain de l'ouverture est…", opts: ["conditionnel, pas automatique", "garanti", "inexistant"], ok: 0, expl: "Il suppose des capacités de production et des infrastructures." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Importer ne sert qu'à consommer des produits étrangers.", rep: false, expl: "Les importations donnent aussi accès à des équipements productifs." },
          { txt: "L'ouverture expose davantage aux chocs extérieurs.", rep: true, expl: "Une économie ouverte dépend de la conjoncture mondiale." },
          { txt: "La formation de la main-d'œuvre compte parmi les conditions de réussite.", rep: true, expl: "Sans compétences, l'ouverture ne crée pas d'activité nouvelle." },
          { txt: "Les économies d'échelle augmentent le coût unitaire.", rep: false, expl: "Elles l'abaissent au contraire." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite trois canaux par lesquels l'ouverture stimule la croissance.", r: "Les débouchés offerts aux exportateurs, l'accès à des équipements et technologies importés, et la pression de la concurrence qui élève la productivité." },
          { q: "Pourquoi les importations peuvent-elles aider à produire ?", r: "Parce qu'elles donnent accès à des machines, à des intrants et à des technologies moins chers ou indisponibles dans le pays." },
          { q: "Le lien entre ouverture et croissance est-il automatique ? Justifie.", r: "Non : il suppose des infrastructures fiables, une main-d'œuvre formée et des institutions stables, faute de quoi l'ouverture détruit des activités sans en créer." },
          { q: "Quel rôle joue la concurrence étrangère ?", r: "Elle oblige les entreprises locales à améliorer leur qualité et à réduire leurs coûts, et elle diffuse des méthodes éprouvées ailleurs." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Produire pour un marché plus vaste abaisse le coût", suite: "unitaire" },
          { debut: "Les machines achetées à l'étranger sont des biens d'", suite: "équipement" },
          { debut: "La diffusion des savoir-faire est un", suite: "transfert de technologie" },
          { debut: "Un pays très ouvert est plus exposé aux", suite: "chocs extérieurs" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 21 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Libre-échange et protectionnisme",
      theme: "Mondialisation",
      ras: "Analyser les fondements du commerce international",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "comparer libre-échange et protectionnisme, et citer les instruments",
      supportMeta: "Textes, documents douaniers, cahier",
      revision: [
        ["Comment l'ouverture stimule-t-elle la croissance ?", "Par les débouchés à l'exportation, l'accès aux équipements importés et la pression de la concurrence."],
        ["Quelles conditions rendent l'ouverture profitable ?", "Des infrastructures fiables, une main-d'œuvre formée et des institutions stables."],
      ],
      mise: [
        "Un pays relève les taxes sur les vêtements importés pour protéger ses usines. Qui gagne, qui perd ?",
        "Les producteurs protégés gagnent à court terme, mais les consommateurs paient plus cher et les partenaires commerciaux peuvent répliquer.",
      ],
      observation: "le tableau comparant les deux politiques commerciales",
      observationSupport: "Tableau comparatif libre-échange / protectionnisme affiché ou distribué",
      technAna: "Lecture de tableau et débat dirigé",
      qa: [
        ["Qu'est-ce que le libre-échange ?", "Une politique qui supprime les obstacles aux échanges : droits de douane, quotas et restrictions administratives."],
        ["Qu'est-ce que le protectionnisme ?", "Une politique qui protège la production nationale de la concurrence étrangère par des obstacles aux importations."],
        ["Quels sont les instruments du protectionnisme ?", "Les droits de douane, les quotas et licences, les normes sanitaires et techniques, et les subventions aux exportateurs."],
        ["Qu'est-ce qu'un droit de douane ?", "Une taxe prélevée sur un produit importé, qui renchérit son prix sur le marché national."],
        ["Qu'est-ce qu'un quota ?", "Une limite quantitative imposée aux importations d'un produit pendant une période donnée."],
        ["Quels arguments justifient le protectionnisme ?", "Protéger les industries naissantes, préserver l'emploi local et éviter une dépendance excessive à l'égard de l'étranger."],
        ["Quelles sont ses limites ?", "Des prix plus élevés pour les consommateurs, des mesures de rétorsion des partenaires et une moindre incitation à devenir compétitif."],
        ["Qu'est-ce qu'une mesure de rétorsion ?", "Une mesure prise par un pays en réponse à celle d'un partenaire : un pays qui relève ses droits de douane s'expose aux mêmes mesures."],
      ],
      synthese: "Donc, le libre-échange supprime les obstacles aux échanges et mise sur les avantages de la spécialisation ; le protectionnisme protège les productions nationales par des droits de douane, des quotas ou des normes. Le premier favorise les prix bas et la compétitivité, le second préserve des activités fragiles mais renchérit les prix et expose à des mesures de rétorsion.",
      motsCles: ["libre-échange", "protectionnisme", "droits de douane", "quotas", "normes", "subventions", "rétorsion", "industries naissantes"],
      image: { file: "t12_u2_libre_echange.png", legende: "Figure 19 — Libre-échange et protectionnisme : deux politiques commerciales." },
      contenu: [
        {
          sousTitre: "1. Le libre-échange",
          texte: "Le libre-échange repose sur l'idée que la suppression des obstacles permet à chaque pays de se spécialiser selon ses avantages.",
          liste: [
            "Suppression ou forte réduction des droits de douane.",
            "Suppression des quotas et des licences d'importation.",
            "Libre circulation des capitaux et des services.",
            "Résultat attendu : baisse des prix, plus large choix, spécialisation plus efficace.",
          ],
        },
        {
          sousTitre: "2. Le protectionnisme et ses instruments",
          texte: "Le protectionnisme utilise plusieurs instruments dont l'effet est de renchérir ou de limiter les produits importés.",
          liste: [
            "Droits de douane : une taxe sur le produit importé.",
            "Quotas et licences : une limite quantitative aux quantités importées.",
            "Normes sanitaires et techniques : des exigences que le produit importé doit respecter.",
            "Subventions aux exportateurs : une aide qui rend les produits nationaux moins chers à l'exportation.",
          ],
        },
        {
          sousTitre: "3. Les arguments protectionnistes",
          texte: "Plusieurs arguments militent pour la protection, au moins temporairement.",
          liste: [
            "Protéger une industrie naissante le temps qu'elle atteigne la taille critique.",
            "Préserver l'emploi dans les secteurs exposés à la concurrence.",
            "Réduire la dépendance à l'égard de fournisseurs étrangers.",
            "Protéger la santé et la sécurité des consommateurs par des normes.",
          ],
        },
        {
          sousTitre: "4. Les limites et les risques",
          texte: "La protection a un coût, souvent supporté par les consommateurs et par les partenaires commerciaux.",
          liste: [
            "Les prix augmentent pour les ménages et pour les entreprises qui utilisent le produit.",
            "Les entreprises protégées perdent l'incitation à devenir compétitives.",
            "Les partenaires peuvent répondre par des mesures de rétorsion, qui réduisent les exportations du pays.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Un droit de douane est…", opts: ["une taxe sur un produit importé", "une aide à l'exportation", "une norme sanitaire"], ok: 0, expl: "Il renchérit le produit importé." },
          { q: "Un quota limite…", opts: ["la quantité importée", "le prix de vente", "le nombre d'entreprises"], ok: 0, expl: "C'est une restriction quantitative." },
          { q: "Une mesure de rétorsion est…", opts: ["une réponse à une mesure étrangère", "une subvention", "un accord de libre-échange"], ok: 0, expl: "Elle répond à une mesure jugée dommageable." },
          { q: "L'argument de l'industrie naissante sert à justifier…", opts: ["une protection temporaire", "une suppression totale des taxes", "une interdiction d'exporter"], ok: 0, expl: "Le temps que l'activité atteigne sa taille critique." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le protectionnisme fait toujours baisser les prix pour les consommateurs.", rep: false, expl: "Il les renchérit au contraire." },
          { txt: "Une entreprise protégée perd une partie de son incitation à devenir compétitive.", rep: true, expl: "La concurrence ne la contraint plus." },
          { txt: "Les normes sanitaires peuvent servir d'obstacle aux importations.", rep: true, expl: "Elles imposent des exigences au produit importé." },
          { txt: "Le libre-échange supprime les quotas.", rep: true, expl: "Il lève les restrictions quantitatives." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis le libre-échange et le protectionnisme.", r: "Le libre-échange supprime les obstacles aux échanges, tandis que le protectionnisme protège la production nationale par des droits de douane, des quotas ou des normes." },
          { q: "Cite quatre instruments du protectionnisme.", r: "Les droits de douane, les quotas et licences d'importation, les normes sanitaires et techniques, et les subventions aux exportateurs." },
          { q: "Quels sont les deux principaux arguments en faveur du protectionnisme ?", r: "Protéger les industries naissantes le temps qu'elles grandissent, et préserver l'emploi dans les secteurs exposés." },
          { q: "Quelles sont les deux principales limites du protectionnisme ?", r: "Les prix augmentent pour les consommateurs, et les partenaires commerciaux peuvent prendre des mesures de rétorsion." },
        ]},
        { type: "appariement", consigne: "Relie chaque mesure à son effet.", pointsPar: 1, items: [
          { g: ["Taxe sur les vêtements importés", "Limite de 1 000 tonnes importées", "Aide versée à un exportateur", "Exigence sanitaire sur les denrées", "Suppression des licences"], d: ["Quota", "Subvention", "Droit de douane", "Libre-échange", "Norme"], pairs: [[0, 2], [1, 0], [2, 1], [3, 4], [4, 3]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 22 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les avantages absolus selon Adam Smith",
      theme: "Mondialisation",
      ras: "Déterminer les avantages du commerce international sur la croissance économique",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "expliquer la théorie des avantages absolus",
      supportMeta: "Tableaux de productivité, cahier, calculatrice",
      revision: [
        ["Qu'est-ce que le libre-échange ?", "Une politique qui supprime les obstacles aux échanges entre les pays."],
        ["Qu'est-ce que la spécialisation ?", "Le fait de concentrer sa production sur les biens que l'on produit le plus efficacement."],
      ],
      mise: [
        "Deux pays produisent du riz et du tissu. Le premier est plus rapide pour le riz, le second pour le tissu. Que doivent-ils faire ?",
        "Chacun se spécialise dans le bien où il est le plus efficace, puis ils échangent : la production totale des deux biens augmente.",
      ],
      observation: "le tableau des productivités comparées",
      observationSupport: "Tableau des heures de travail nécessaires dans deux pays affiché ou distribué",
      technAna: "Lecture de tableau et calcul dirigé",
      qa: [
        ["Qu'est-ce qu'un avantage absolu ?", "La capacité de produire un bien avec moins de ressources, donc moins d'heures de travail, qu'un autre pays."],
        ["Qui a formulé cette théorie ?", "L'économiste écossais Adam Smith, à la fin du dix-huitième siècle."],
        ["Quel est le raisonnement de Smith ?", "Chaque pays se spécialise dans la production où il est le plus efficace, puis échange : la production totale augmente et les deux pays y gagnent."],
        ["Comment calcule-t-on le coût du travail ?", "En mesurant le nombre d'heures nécessaires pour produire une unité de bien : 10 heures par tonne de riz, par exemple."],
        ["Que montre l'exemple classique ?", "Avec deux pays et deux biens, chacun détient un avantage absolu sur un bien : la spécialisation est immédiate et bénéficiaire pour les deux."],
        ["Quel gain les deux pays retirent-ils ?", "Une production totale plus élevée pour le même effort de travail, donc des quantités disponibles plus grandes dans les deux pays."],
        ["Quelle est la limite de cette théorie ?", "Elle n'explique pas le cas d'un pays moins efficace dans toutes les productions : Smith laisse ce cas sans réponse."],
        ["Qui a comblé cette lacune ?", "David Ricardo, avec la théorie des avantages comparatifs, étudiée à la séance suivante."],
      ],
      synthese: "Donc, selon Adam Smith, chaque pays doit se spécialiser dans les productions où il détient un avantage absolu, c'est-à-dire celles qu'il réalise avec le moins d'heures de travail, puis échanger. La production totale augmente et les deux pays y gagnent. Mais cette théorie ne dit rien du cas d'un pays qui serait moins efficace partout.",
      motsCles: ["avantage absolu", "Adam Smith", "spécialisation", "heures de travail", "productivité", "gain à l'échange", "coût de production", "libre-échange"],
      image: { file: "t12_u2_absolus.png", legende: "Figure 20 — Les avantages absolus selon Adam Smith." },
      contenu: [
        {
          sousTitre: "1. La notion d'avantage absolu",
          texte: "Un pays détient un avantage absolu pour un bien lorsqu'il le produit avec moins de ressources qu'un autre pays.",
          liste: [
            "Le critère retenu est simple : le nombre d'heures de travail nécessaires.",
            "Exemple : Madagascar produit une tonne de riz en 10 heures, le pays voisin en 30 heures.",
            "Madagascar détient donc l'avantage absolu pour le riz.",
          ],
        },
        {
          sousTitre: "2. Le tableau de référence",
          texte: "Considérons deux pays et deux biens, avec les temps de travail suivants.",
          liste: [
            "Madagascar : 10 heures pour une tonne de riz, 20 heures pour une pièce de tissu.",
            "Pays voisin : 30 heures pour une tonne de riz, 10 heures pour une pièce de tissu.",
            "Madagascar est plus efficace pour le riz, le pays voisin pour le tissu.",
          ],
        },
        {
          sousTitre: "3. La spécialisation et le gain",
          texte: "Si chaque pays se spécialise dans le bien où il excelle, la production totale augmente pour le même travail.",
          liste: [
            "Avant spécialisation, chaque pays consacre la moitié de son temps aux deux biens.",
            "Après spécialisation, chaque pays concentre tout son temps sur un seul bien.",
            "La quantité totale de riz et de tissu disponible pour les deux pays augmente : c'est le gain de l'échange.",
          ],
        },
        {
          sousTitre: "4. Les limites de la théorie",
          texte: "L'analyse de Smith repose sur une hypothèse restrictive.",
          liste: [
            "Elle suppose que chaque pays détient au moins un avantage absolu.",
            "Elle n'explique donc pas pourquoi un pays moins efficace partout participe tout de même aux échanges.",
            "C'est cette question que la théorie des avantages comparatifs permet de résoudre.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Un avantage absolu existe quand un pays produit…", opts: ["avec moins d'heures de travail", "davantage de variétés", "uniquement pour l'exportation"], ok: 0, expl: "Le critère est la productivité." },
          { q: "Selon Smith, chaque pays doit…", opts: ["se spécialiser là où il est le plus efficace", "tout produire lui-même", "interdire les importations"], ok: 0, expl: "Puis échanger le surplus." },
          { q: "Dans l'exemple, Madagascar a l'avantage absolu pour…", opts: ["le riz", "le tissu", "les deux biens"], ok: 0, expl: "10 heures contre 30 heures pour la même tonne." },
          { q: "La limite de la théorie de Smith est…", opts: ["de ne pas traiter le pays moins efficace partout", "d'ignorer les prix", "de refuser tout échange"], ok: 0, expl: "Ricardo comblera cette lacune." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "L'avantage absolu se mesure en heures de travail par unité produite.", rep: true, expl: "C'est le critère retenu par Smith." },
          { txt: "La spécialisation réduit la production totale des deux pays.", rep: false, expl: "Elle l'augmente pour le même effort." },
          { txt: "Smith a écrit au dix-huitième siècle.", rep: true, expl: "C'est un économiste écossais de cette période." },
          { txt: "Smith explique le commerce d'un pays sans aucun avantage absolu.", rep: false, expl: "C'est l'apport de Ricardo." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis la notion d'avantage absolu.", r: "Un pays détient un avantage absolu pour un bien lorsqu'il le produit avec moins de ressources, donc moins d'heures de travail, qu'un autre pays." },
          { q: "Expose le raisonnement d'Adam Smith.", r: "Chaque pays se spécialise dans la production où il est le plus efficace, puis échange : la production totale augmente et les deux pays y gagnent." },
          { q: "Reprends l'exemple du cours et indique la spécialisation de chaque pays.", r: "Madagascar se spécialise dans le riz, où il ne faut que 10 heures par tonne, et le pays voisin dans le tissu, où il ne faut que 10 heures par pièce." },
          { q: "Quelle limite de la théorie de Smith conduit à Ricardo ?", r: "Smith n'explique pas la situation d'un pays moins efficace dans toutes les productions, cas que la théorie des avantages comparatifs permet de traiter." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Produire avec moins d'heures donne un avantage", suite: "absolu" },
          { debut: "L'auteur de cette théorie est Adam", suite: "Smith" },
          { debut: "Concentrer sa production sur un bien s'appelle la", suite: "spécialisation" },
          { debut: "La hausse de production obtenue par l'échange est le gain à l'", suite: "échange" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 23 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les avantages comparatifs selon David Ricardo",
      theme: "Mondialisation",
      ras: "Déterminer les avantages du commerce international sur la croissance économique",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "expliquer la théorie des avantages comparatifs et le rôle du coût relatif",
      supportMeta: "Tableaux de coûts relatifs, cahier, calculatrice",
      revision: [
        ["Qu'est-ce qu'un avantage absolu ?", "La capacité de produire un bien avec moins d'heures de travail qu'un autre pays."],
        ["Quelle limite Adam Smith laisse-t-il ?", "Il n'explique pas le cas d'un pays moins efficace dans toutes les productions."],
      ],
      mise: [
        "Un pays est plus lent que son voisin pour fabriquer les deux produits. Doit-il renoncer à échanger ?",
        "Non : il lui suffit d'être relativement moins désavantagé dans une production pour y trouver un avantage et y gagner.",
      ],
      observation: "le tableau des coûts relatifs",
      observationSupport: "Tableau des coûts relatifs affiché ou distribué",
      technAna: "Lecture de tableau et calcul dirigé",
      qa: [
        ["Qu'est-ce qu'un avantage comparatif ?", "La situation d'un pays qui, même moins efficace partout, produit un bien avec un désavantage relatif plus faible que l'autre."],
        ["Qui a formulé cette théorie ?", "L'économiste britannique David Ricardo, au début du dix-neuvième siècle."],
        ["Qu'est-ce que le coût relatif ?", "Ce à quoi il faut renoncer d'un bien pour produire une unité d'un autre bien : le coût d'opportunité."],
        ["Comment calcule-t-on le coût relatif dans l'exemple du cours ?", "Madagascar : produire 1 kg de vanille coûte 4 heures de travail, une pièce de textile 8 heures : 1 kg de vanille coûte 0,5 pièce de textile."],
        ["Pourquoi l'échange reste-t-il avantageux ?", "Parce que chaque pays se spécialise là où son coût relatif est le plus faible, ce qui augmente la production totale disponible."],
        ["Que mesure-t-on exactement ?", "Non pas le niveau absolu de productivité, mais le rapport entre les productivités des deux biens."],
        ["Quelle est la limite du modèle de Ricardo ?", "Il raisonne avec un seul facteur, le travail, et ne tient pas compte des coûts de transport ni des différences de qualité."],
        ["Quelle leçon pratique en tire-t-on ?", "Un pays a intérêt à se spécialiser là où il est relativement le meilleur, même s'il n'est le meilleur nulle part en absolu."],
      ],
      synthese: "Donc, selon Ricardo, l'échange est avantageux dès lors que les coûts relatifs diffèrent entre les pays. Chacun se spécialise dans la production où son désavantage est le plus faible, ou son avantage le plus fort. Ce n'est donc pas le niveau absolu de productivité qui décide de la spécialisation, mais le rapport entre les productivités.",
      motsCles: ["avantage comparatif", "David Ricardo", "coût relatif", "coût d'opportunité", "spécialisation", "productivité", "gain mutuel", "désavantage relatif"],
      image: { file: "t12_u2_comparatifs.png", legende: "Figure 21 — Les avantages comparatifs selon David Ricardo." },
      contenu: [
        {
          sousTitre: "1. Au-delà de l'avantage absolu",
          texte: "Ricardo répond à la question laissée ouverte par Smith : que se passe-t-il lorsqu'un pays est moins efficace partout ?",
          liste: [
            "Il suffit que les écarts de productivité ne soient pas les mêmes dans les deux productions.",
            "Le pays se spécialise là où son retard est le plus faible.",
            "L'échange profite alors aux deux partenaires.",
          ],
        },
        {
          sousTitre: "2. Le coût relatif",
          texte: "La notion décisive est celle de coût relatif, ou coût d'opportunité.",
          liste: [
            "Produire davantage d'un bien oblige à renoncer à une quantité de l'autre.",
            "Exemple : Madagascar produit 1 kg de vanille en 4 heures, une pièce de textile en 8 heures.",
            "Produire 1 kg de vanille coûte donc 0,5 pièce de textile : c'est le coût relatif de la vanille.",
          ],
        },
        {
          sousTitre: "3. Le tableau de référence",
          texte: "Comparons deux pays avec les temps de travail suivants.",
          liste: [
            "Madagascar : vanille 4 heures, textile 8 heures ; coût relatif de la vanille : 0,5 pièce de textile.",
            "Pays partenaire : vanille 6 heures, textile 6 heures ; coût relatif de la vanille : 1 pièce de textile.",
            "Madagascar a l'avantage comparatif en vanille, le partenaire en textile.",
            "Chacun se spécialise, puis échange : les deux disposent de davantage des deux biens.",
          ],
        },
        {
          sousTitre: "4. Portée et limites",
          texte: "La théorie des avantages comparatifs reste le socle de l'analyse du commerce international.",
          liste: [
            "Portée : elle montre que le commerce n'est pas un jeu à somme nulle, les deux partenaires peuvent gagner.",
            "Limite : un seul facteur de production est pris en compte, le travail.",
            "Limite : ni les coûts de transport, ni les différences de qualité, ni les rendements d'échelle ne sont intégrés.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "L'avantage comparatif repose sur…", opts: ["le coût relatif", "le prix de vente", "le nombre d'habitants"], ok: 0, expl: "Ce à quoi l'on renonce pour produire un bien." },
          { q: "Selon Ricardo, un pays moins efficace partout…", opts: ["peut quand même gagner à l'échange", "doit renoncer au commerce", "doit tout importer"], ok: 0, expl: "Il lui suffit d'un désavantage relatif plus faible." },
          { q: "Dans l'exemple, Madagascar se spécialise dans…", opts: ["la vanille", "le textile", "les deux"], ok: 0, expl: "Son coût relatif en vanille est le plus faible." },
          { q: "Une limite du modèle de Ricardo est…", opts: ["de ne retenir que le travail", "de refuser l'échange", "d'ignorer les prix"], ok: 0, expl: "Un seul facteur de production est pris en compte." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le commerce international est un jeu à somme nulle.", rep: false, expl: "Les deux partenaires peuvent y gagner." },
          { txt: "Le coût relatif est aussi appelé coût d'opportunité.", rep: true, expl: "C'est ce à quoi l'on renonce en produisant." },
          { txt: "Ricardo a écrit au dix-neuvième siècle.", rep: true, expl: "Il est contemporain du début de l'industrialisation britannique." },
          { txt: "La spécialisation dépend du niveau absolu de productivité.", rep: false, expl: "Elle dépend du rapport entre les productivités." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis la notion d'avantage comparatif.", r: "C'est la situation d'un pays qui, même moins efficace partout, produit un bien avec un désavantage relatif plus faible que son partenaire." },
          { q: "Calcule le coût relatif de la vanille à Madagascar dans l'exemple du cours.", r: "Une pièce de textile demande 8 heures et un kg de vanille 4 heures : produire 1 kg de vanille coûte donc 0,5 pièce de textile." },
          { q: "Pourquoi l'échange reste-t-il avantageux quand un pays est moins efficace partout ?", r: "Parce qu'il se spécialise dans la production où son retard relatif est le plus faible, ce qui augmente la production totale des deux biens." },
          { q: "Cite deux limites du modèle de Ricardo.", r: "Il ne retient qu'un seul facteur de production, le travail, et il ne prend en compte ni les coûts de transport ni les différences de qualité." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "L'auteur de la théorie des avantages comparatifs est David", suite: "Ricardo" },
          { debut: "Ce à quoi l'on renonce en produisant est le coût d'", suite: "opportunité" },
          { debut: "Un pays se spécialise là où son désavantage est le plus", suite: "faible" },
          { debut: "Le modèle ricardien ne retient qu'un seul facteur : le", suite: "travail" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 24 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les dotations factorielles : Heckscher et Ohlin",
      theme: "Mondialisation",
      ras: "Déterminer les avantages du commerce international sur la croissance économique",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "expliquer le lien entre dotation en facteurs et spécialisation",
      supportMeta: "Documents, tableaux de facteurs, cahier",
      revision: [
        ["Qu'est-ce qu'un avantage comparatif ?", "La situation d'un pays dont le désavantage relatif est le plus faible dans une production."],
        ["Qu'est-ce que le coût relatif ?", "Ce à quoi il faut renoncer d'un bien pour produire une unité d'un autre bien."],
      ],
      mise: [
        "Un pays dispose de beaucoup de bras et de peu de machines ; un autre, de beaucoup de machines et de peu de bras. Que vont-ils exporter ?",
        "Le premier exportera des productions intensives en travail, le second des productions intensives en capital.",
      ],
      observation: "le schéma des dotations factorielles",
      observationSupport: "Schéma des dotations factorielles affiché ou distribué",
      technAna: "Lecture de schéma et discussion dirigée",
      qa: [
        ["Qu'est-ce qu'une dotation factorielle ?", "La quantité de facteurs de production dont dispose un pays : travail, capital, ressources naturelles."],
        ["Qui sont les auteurs du modèle ?", "Les économistes suédois Eli Heckscher et Bertil Ohlin, au début du vingtième siècle."],
        ["Quel est le principe du modèle ?", "Chaque pays exporte les biens qui utilisent intensivement le facteur dont il est le mieux pourvu."],
        ["Qu'entend-on par production intensive en travail ?", "Une production où la part de la main-d'œuvre dans le coût est prépondérante : textile, artisanat, récolte manuelle."],
        ["Qu'entend-on par production intensive en capital ?", "Une production où dominent les machines et les infrastructures : chimie, transport, transformation industrielle."],
        ["Pourquoi le facteur abondant coûte-t-il moins cher ?", "Parce que son offre est abondante par rapport à la demande : la main-d'œuvre nombreuse est moins chère, comme le capital là où il est accumulé."],
        ["Que prévoit le théorème sur les revenus ?", "L'ouverture tend à rapprocher les rémunérations des facteurs entre pays : le travail gagne là où il est rare, perd là où il est abondant."],
        ["Quelles sont les limites du modèle ?", "Il suppose des facteurs immobiles entre pays et des techniques identiques, hypothèses rarement vérifiées."],
      ],
      synthese: "Donc, le modèle d'Heckscher et Ohlin explique la spécialisation par les dotations en facteurs : chaque pays exporte les biens qui utilisent intensivement le facteur dont il dispose abondamment. Le commerce revient ainsi à échanger indirectement du travail contre du capital. Le modèle reste toutefois simplificateur.",
      motsCles: ["dotation factorielle", "Heckscher", "Ohlin", "intensif en travail", "intensif en capital", "abondance", "facteur rare", "spécialisation"],
      image: { file: "t12_u2_dotation.png", legende: "Figure 22 — Les dotations factorielles : Heckscher et Ohlin." },
      contenu: [
        {
          sousTitre: "1. La dotation en facteurs",
          texte: "Les pays ne disposent pas des mêmes quantités de facteurs de production, et cet écart explique une partie de leur spécialisation.",
          liste: [
            "Le travail : le nombre et la qualification des actifs disponibles.",
            "Le capital : les machines, les infrastructures et les moyens financiers.",
            "Les ressources naturelles : terres, sous-sol, eau, forêts.",
          ],
        },
        {
          sousTitre: "2. Le raisonnement du modèle",
          texte: "Le modèle relie l'abondance d'un facteur au coût de ce facteur, puis au type de production retenu.",
          liste: [
            "Un facteur abondant est relativement moins cher que dans les pays où il est rare.",
            "Les productions qui utilisent intensivement ce facteur y coûtent donc moins cher.",
            "Le pays se spécialise dans ces productions et les exporte.",
          ],
        },
        {
          sousTitre: "3. Les deux cas types",
          texte: "Le contraste entre deux pays permet de lire le mécanisme.",
          liste: [
            "Pays abondant en main-d'œuvre : spécialisation dans les productions intensives en travail — textile, artisanat, agriculture.",
            "Pays abondant en capital : spécialisation dans les productions intensives en capital — chimie, matériel, transport, transformation lourde.",
          ],
        },
        {
          sousTitre: "4. Portée et limites",
          texte: "Le modèle éclaire de nombreuses situations, mais repose sur des hypothèses restrictives.",
          liste: [
            "Il suppose que les facteurs ne circulent pas d'un pays à l'autre, ce que démentent les migrations et les capitaux internationaux.",
            "Il suppose des techniques de production identiques partout, alors que les procédés diffèrent.",
            "Il néglige les économies d'échelle, la qualité des produits et les préférences des consommateurs.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Selon Heckscher et Ohlin, un pays exporte…", opts: ["les biens intensifs dans le facteur abondant", "tous les biens possibles", "uniquement des services"], ok: 0, expl: "C'est le cœur du modèle." },
          { q: "Un pays abondant en capital se spécialise dans…", opts: ["des productions intensives en capital", "l'agriculture vivrière", "l'artisanat"], ok: 0, expl: "Le capital y est relativement moins coûteux." },
          { q: "Une production intensive en travail utilise surtout…", opts: ["de la main-d'œuvre", "des machines", "des matières premières"], ok: 0, expl: "Le travail domine dans le coût." },
          { q: "Une hypothèse du modèle est…", opts: ["l'immobilité des facteurs entre pays", "la gratuité du transport", "l'égalité des salaires"], ok: 0, expl: "Les facteurs ne circulent pas d'un pays à l'autre." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Un facteur abondant est relativement plus cher.", rep: false, expl: "Il est relativement moins cher, car son offre est importante." },
          { txt: "Le modèle suppose des techniques identiques partout.", rep: true, expl: "C'est l'une de ses hypothèses restrictives." },
          { txt: "Le commerce revient à échanger indirectement du travail contre du capital.", rep: true, expl: "Les biens échangés incorporent les facteurs." },
          { txt: "Le modèle prend en compte les économies d'échelle.", rep: false, expl: "Il les néglige." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Expose le principe du modèle d'Heckscher et Ohlin.", r: "Chaque pays exporte les biens qui utilisent intensivement le facteur de production dont il est le mieux pourvu." },
          { q: "Pourquoi un facteur abondant coûte-t-il moins cher ?", r: "Parce que son offre est importante par rapport à la demande, ce qui abaisse son prix relatif dans le pays." },
          { q: "Donne un exemple de production intensive en travail et un exemple de production intensive en capital.", r: "La confection textile est intensive en travail, la construction de matériel industriel est intensive en capital." },
          { q: "Cite deux limites du modèle.", r: "Il suppose l'immobilité des facteurs entre pays et des techniques de production identiques partout." },
        ]},
        { type: "appariement", consigne: "Relie chaque pays au type de production attendu.", pointsPar: 1, items: [
          { g: ["Pays très peuplé, peu de machines", "Pays riche en capitaux", "Pays aux terres fertiles étendues", "Pays disposant d'un sous-sol minier", "Pays à la main-d'œuvre très qualifiée"], d: ["Intensif en capital", "Intensif en travail", "Intensif en ressources naturelles", "Intensif en capital humain", "Intensif en ressources naturelles"], pairs: [[0, 1], [1, 0], [2, 2], [3, 4], [4, 3]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 25 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le commerce intra-branche et les avantages construits",
      theme: "Mondialisation",
      ras: "Déterminer les avantages du commerce international sur la croissance économique",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "expliquer le commerce intra-branche et la notion d'avantage construit",
      supportMeta: "Documents, exemples de filières, cahier",
      revision: [
        ["Que prévoit le modèle d'Heckscher et Ohlin ?", "Chaque pays exporte les biens qui utilisent intensivement le facteur dont il est le mieux pourvu."],
        ["Qu'est-ce qu'une économie d'échelle ?", "La baisse du coût unitaire obtenue en produisant en plus grande série."],
      ],
      mise: [
        "Deux pays échangent des vêtements : l'un importe des chemises et en exporte aussi. Comment expliquer ce va-et-vient ?",
        "Les modèles et les gammes diffèrent : les consommateurs recherchent la variété, et chaque pays se spécialise dans quelques variétés produites en grande série.",
      ],
      observation: "le document comparant deux échanges de produits similaires",
      observationSupport: "Documents et exemples de commerce intra-branche affichés ou distribués",
      technAna: "Étude de documents et discussion dirigée",
      qa: [
        ["Qu'est-ce que le commerce intra-branche ?", "L'échange de produits appartenant à une même branche entre deux pays : chacun exporte et importe des biens de la même catégorie."],
        ["Comment s'explique-t-il ?", "Par la différenciation des produits, la recherche de variété par les consommateurs et les économies d'échelle."],
        ["Qu'est-ce que la différenciation des produits ?", "Le fait de proposer des variétés distinctes d'un même bien : modèles, qualités, marques, conditionnements."],
        ["Quel rôle jouent les économies d'échelle ?", "Produire une seule variété en grande série coûte moins cher : chaque pays se spécialise dans quelques variétés et échange les autres."],
        ["Qu'est-ce qu'un avantage construit ?", "Un avantage qui ne vient ni du climat ni des ressources naturelles, mais d'un effort délibéré : formation, innovation, qualité, respect des normes."],
        ["Comment construit-on un tel avantage ?", "Par l'investissement en formation, la recherche, la certification, l'organisation des filières et la réputation acquise auprès des acheteurs."],
        ["En quoi cela change-t-il la vision de la spécialisation ?", "La spécialisation n'est plus un héritage subi : elle peut être choisie et construite dans le temps."],
        ["Quelles sont les difficultés ?", "L'effort est long et coûteux, et il exige stabilité des règles, financement et accès à l'information sur les marchés."],
      ],
      synthese: "Donc, une part importante du commerce mondial échappe aux explications fondées sur les seules dotations : les pays échangent des produits d'une même branche, différenciés par la qualité ou le modèle, afin de bénéficier d'économies d'échelle. Surtout, l'avantage peut être construit : formation, innovation et respect des normes permettent à un pays d'acquérir une position qu'il ne devait pas à ses ressources.",
      motsCles: ["commerce intra-branche", "différenciation", "variété", "économies d'échelle", "avantage construit", "innovation", "normes", "qualité"],
      image: { file: "t12_u2_intra_branche.png", legende: "Figure 23 — Commerce intra-branche et avantages construits." },
      contenu: [
        {
          sousTitre: "1. Une réalité que les théories classiques n'expliquent pas",
          texte: "Les modèles de Smith, Ricardo et Heckscher-Ohlin expliquent l'échange de produits différents. Or une part croissante des échanges porte sur des produits comparables.",
          liste: [
            "Deux pays s'échangent des véhicules, des vêtements ou des produits alimentaires transformés.",
            "Ces échanges ne s'expliquent ni par le climat ni par les dotations en facteurs.",
            "Ils s'expliquent par la variété recherchée et par les économies d'échelle.",
          ],
        },
        {
          sousTitre: "2. La différenciation et la variété",
          texte: "Les consommateurs apprécient de pouvoir choisir entre plusieurs variétés d'un même produit.",
          liste: [
            "Un pays produit quelques variétés en grande série, à faible coût.",
            "Il importe les autres variétés dont sa population veut disposer.",
            "Le gain vient de la variété offerte et du coût abaissé par la série.",
          ],
        },
        {
          sousTitre: "3. Les avantages construits",
          texte: "Un pays peut acquérir une position concurrentielle par un effort délibéré.",
          liste: [
            "Formation de la main-d'œuvre et montée en compétence des entreprises.",
            "Innovation de produit et de procédé, qualité constante.",
            "Respect des normes sanitaires et environnementales exigées par les marchés.",
            "Organisation de la filière, de la récolte jusqu'à l'exportation.",
          ],
        },
        {
          sousTitre: "4. Ce que cela implique pour l'action publique",
          texte: "Si l'avantage se construit, la politique économique retrouve un rôle central.",
          liste: [
            "Investir dans l'éducation et la formation professionnelle.",
            "Soutenir la recherche appliquée et la diffusion des techniques.",
            "Garantir la stabilité des règles et la qualité des infrastructures.",
            "Faciliter l'accès à l'information sur les marchés et à la certification.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le commerce intra-branche porte sur…", opts: ["des produits d'une même catégorie", "des matières premières uniquement", "des services publics"], ok: 0, expl: "Les pays échangent des variétés d'un même produit." },
          { q: "La différenciation des produits répond au goût des consommateurs pour…", opts: ["la variété", "l'uniformité", "la rareté"], ok: 0, expl: "Chacun veut pouvoir choisir." },
          { q: "Un avantage construit provient…", opts: ["d'un effort délibéré", "du seul climat", "du hasard géographique"], ok: 0, expl: "Formation, innovation, normes et qualité." },
          { q: "Produire une seule variété en grande série…", opts: ["abaisse le coût unitaire", "augmente le coût unitaire", "supprime les débouchés"], ok: 0, expl: "Ce sont les économies d'échelle." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Un pays peut exporter et importer des produits de la même branche.", rep: true, expl: "C'est précisément le commerce intra-branche." },
          { txt: "Un avantage construit ne dépend d'aucun effort.", rep: false, expl: "Il exige formation, innovation et respect des normes." },
          { txt: "Les normes exigées par les marchés peuvent devenir un atout.", rep: true, expl: "Les respecter ouvre l'accès aux marchés exigeants." },
          { txt: "La spécialisation est toujours un héritage subi.", rep: false, expl: "Elle peut être choisie et construite." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis le commerce intra-branche et donne un exemple.", r: "C'est l'échange de produits d'une même branche entre deux pays : deux pays s'échangent des vêtements de gammes différentes." },
          { q: "Qu'est-ce qu'un avantage construit ?", r: "C'est un avantage qui ne vient ni du climat ni des ressources, mais d'un effort délibéré de formation, d'innovation, de qualité et de respect des normes." },
          { q: "Quel rôle jouent les économies d'échelle dans le commerce intra-branche ?", r: "Produire une seule variété en grande série abaisse le coût unitaire : chaque pays se spécialise dans quelques variétés et importe les autres." },
          { q: "Cite deux actions publiques qui aident à construire un avantage.", r: "Investir dans l'éducation et la formation professionnelle, et soutenir la recherche appliquée ainsi que la certification des produits." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Proposer plusieurs modèles d'un même bien, c'est la", suite: "différenciation" },
          { debut: "Produire en grande série abaisse le coût", suite: "unitaire" },
          { debut: "L'avantage construit suppose un", suite: "effort" },
          { debut: "Le respect des exigences des marchés passe par la", suite: "certification" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 26 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "L'Organisation mondiale du commerce et la coopération internationale",
      theme: "Mondialisation",
      ras: "Déterminer les avantages du commerce international sur la croissance économique",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "présenter le rôle de l'OMC et les principes du commerce multilatéral",
      supportMeta: "Textes de référence, documents, cahier",
      revision: [
        ["Qu'est-ce que le commerce intra-branche ?", "L'échange de produits d'une même branche entre deux pays."],
        ["Quels instruments le protectionnisme utilise-t-il ?", "Les droits de douane, les quotas, les normes et les subventions aux exportateurs."],
      ],
      mise: [
        "Deux pays ne s'entendent plus sur une taxe douanière. Qui tranche ?",
        "Un mécanisme commun : les États ont confié à une organisation le soin d'établir les règles et de régler leurs différends.",
      ],
      observation: "le document présentant les principes du commerce multilatéral",
      observationSupport: "Documents sur les principes du commerce multilatéral affichés ou distribués",
      technAna: "Étude de documents et débat dirigé",
      qa: [
        ["Qu'est-ce que l'OMC ?", "L'Organisation mondiale du commerce : l'institution qui élabore les règles du commerce entre les pays et veille à leur application."],
        ["Quand a-t-elle été créée ?", "En 1995, en prenant la suite de l'accord général sur les tarifs douaniers et le commerce."],
        ["Quel est le principe de non-discrimination ?", "Un avantage accordé à un partenaire doit l'être à tous les membres : c'est la clause de la nation la plus favorisée."],
        ["Qu'est-ce que le traitement national ?", "Un produit importé, une fois entré sur le marché, doit être traité comme le produit national, sans taxe supplémentaire."],
        ["Qu'est-ce que le principe de réciprocité ?", "Les concessions commerciales sont négociées : chacun ouvre son marché en contrepartie de l'ouverture du partenaire."],
        ["Comment les différends sont-ils réglés ?", "Par une procédure de consultation, puis, en cas d'échec, par un mécanisme de règlement des différends qui tranche le litige."],
        ["Pourquoi la coopération est-elle nécessaire ?", "Parce que des mesures unilatérales déclenchent des rétorsions en chaîne : des règles communes rendent les échanges prévisibles."],
        ["Quelles critiques sont adressées à l'OMC ?", "Les pays les plus puissants pèsent davantage dans les négociations, et l'ouverture peut fragiliser les productions des pays les plus pauvres."],
      ],
      synthese: "Donc, l'OMC encadre le commerce mondial par des règles communes : non-discrimination, réciprocité, transparence et règlement des différends. Cette coopération multilatérale rend les échanges prévisibles et évite les guerres commerciales, même si l'équilibre entre pays membres reste discuté.",
      motsCles: ["OMC", "multilatéralisme", "non-discrimination", "nation la plus favorisée", "traitement national", "réciprocité", "différend", "transparence"],
      image: { file: "t12_u2_omc.png", legende: "Figure 24 — L'Organisation mondiale du commerce et la coopération internationale." },
      contenu: [
        {
          sousTitre: "1. Pourquoi une organisation commune",
          texte: "Sans règles partagées, chaque pays défend seul ses intérêts et les tensions commerciales s'enchaînent.",
          liste: [
            "Une mesure unilatérale appelle une mesure de rétorsion.",
            "L'incertitude décourage l'investissement et le commerce.",
            "Des règles communes rendent les échanges prévisibles et sécurisent les entreprises.",
          ],
        },
        {
          sousTitre: "2. Les principes du commerce multilatéral",
          texte: "L'action de l'organisation repose sur quatre principes fondamentaux.",
          liste: [
            "Non-discrimination : la clause de la nation la plus favorisée et le traitement national.",
            "Réciprocité : les concessions sont négociées et équilibrées entre partenaires.",
            "Transparence : les règles sont publiées et les pratiques commerciales notifiées.",
            "Règlement des différends : une procédure arbitrale tranche les litiges entre membres.",
          ],
        },
        {
          sousTitre: "3. Le règlement des différends",
          texte: "Ce mécanisme est la particularité la plus originale du système multilatéral.",
          liste: [
            "Le pays qui s'estime lésé demande l'ouverture de consultations.",
            "En cas d'échec, un groupe spécial examine le dossier et rend ses conclusions.",
            "Le pays mis en cause est invité à mettre sa mesure en conformité avec les règles.",
          ],
        },
        {
          sousTitre: "4. Les limites et les critiques",
          texte: "Le système multilatéral fait l'objet de débats legitimes.",
          liste: [
            "Les pays les plus puissants disposent de moyens de négociation supérieurs.",
            "L'ouverture peut fragiliser les productions locales des pays les moins avancés.",
            "Les négociations sont longues et leurs résultats parfois limités.",
            "Des accords régionaux se développent en complément du cadre multilatéral.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "L'OMC a pour rôle principal de…", opts: ["fixer et faire respecter les règles du commerce", "prêter de l'argent aux États", "fixer le prix des matières premières"], ok: 0, expl: "Elle encadre les échanges entre ses membres." },
          { q: "La clause de la nation la plus favorisée signifie…", opts: ["qu'un avantage accordé à l'un l'est à tous", "qu'un pays est favorisé", "qu'un produit est gratuit"], ok: 0, expl: "C'est la traduction de la non-discrimination." },
          { q: "Le traitement national impose…", opts: ["de traiter le produit importé comme le produit national", "d'interdire les importations", "de taxer davantage l'importé"], ok: 0, expl: "Aucune taxe supplémentaire après l'entrée sur le marché." },
          { q: "Un litige entre deux membres est tranché par…", opts: ["le mécanisme de règlement des différends", "un tribunal national", "un vote populaire"], ok: 0, expl: "C'est le propre du système multilatéral." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "L'OMC prête des fonds aux États membres.", rep: false, expl: "Le financement relève d'autres institutions." },
          { txt: "La transparence consiste à publier les règles commerciales.", rep: true, expl: "Les pratiques doivent être notifiées." },
          { txt: "Les pays les moins avancés sont parfois fragilisés par l'ouverture.", rep: true, expl: "Leurs productions locales résistent mal à la concurrence." },
          { txt: "Les mesures de rétorsion disparaissent totalement avec l'OMC.", rep: false, expl: "Elles sont encadrées, mais pas supprimées." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Quel est le rôle de l'OMC ?", r: "L'OMC élabore les règles du commerce entre les pays membres et veille à leur application, notamment par le règlement des différends." },
          { q: "Cite les quatre principes du commerce multilatéral.", r: "La non-discrimination, la réciprocité, la transparence et le règlement des différends." },
          { q: "Qu'est-ce que la clause de la nation la plus favorisée ?", r: "C'est la règle selon laquelle un avantage commercial accordé à un membre doit l'être à tous les autres membres." },
          { q: "Cite deux critiques adressées au système multilatéral.", r: "Les pays les plus puissants pèsent davantage dans les négociations, et l'ouverture peut fragiliser les productions des pays les moins avancés." },
        ]},
        { type: "appariement", consigne: "Relie chaque principe à sa définition.", pointsPar: 1, items: [
          { g: ["Non-discrimination", "Réciprocité", "Transparence", "Règlement des différends"], d: ["Concessions négociées et équilibrées", "Règles publiées et notifiées", "Procédure qui tranche un litige", "Nation la plus favorisée et traitement national"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 27 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les firmes multinationales : localisation et délocalisation",
      theme: "Mondialisation",
      ras: "Déterminer les avantages du commerce international sur la croissance économique",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "expliquer les stratégies de localisation des firmes multinationales et leurs effets",
      supportMeta: "Documents, études de cas, cahier",
      revision: [
        ["Quel est le rôle de l'OMC ?", "Élaborer les règles du commerce entre pays membres et veiller à leur application."],
        ["Qu'est-ce qu'un avantage construit ?", "Un avantage acquis par l'effort : formation, innovation, qualité et respect des normes."],
      ],
      mise: [
        "Une entreprise étrangère ouvre une usine de transformation dans le pays. Faut-il s'en réjouir ?",
        "Elle apporte des capitaux, des emplois et des techniques, mais elle peut aussi concurrencer les entreprises locales et rapatrier ses bénéfices.",
      ],
      observation: "le schéma des stratégies de localisation",
      observationSupport: "Schéma des stratégies de localisation et de leurs effets",
      technAna: "Étude de documents et débat dirigé",
      qa: [
        ["Qu'est-ce qu'une firme multinationale ?", "Une entreprise qui possède des unités de production ou de vente dans plusieurs pays."],
        ["Pourquoi une firme s'implante-t-elle à l'étranger ?", "Pour réduire ses coûts, accéder à des ressources ou à un marché, et profiter d'infrastructures et de règles favorables."],
        ["Qu'est-ce qu'une délocalisation ?", "Le transfert d'une activité de production vers un autre pays, souvent pour y réduire les coûts."],
        ["Quels effets positifs dans le pays d'accueil ?", "Des investissements, des emplois, des transferts de technologie et un accès aux réseaux commerciaux internationaux."],
        ["Quels risques pour le pays d'accueil ?", "La concurrence faite aux entreprises locales, le rapatriement des bénéfices et la dépendance à l'égard de décisions prises à l'étranger."],
        ["Quels effets dans le pays d'origine ?", "Des pertes d'emplois peu qualifiés, mais une spécialisation dans les activités à plus forte valeur ajoutée."],
        ["Quelles formes la présence étrangère prend-elle ?", "Une filiale de production, une sous-traitance auprès d'entreprises locales ou une coentreprise avec un partenaire national."],
        ["Que peut faire le pays d'accueil ?", "Former la main-d'œuvre, exiger des normes, favoriser les liens avec les entreprises locales et sécuriser les règles."],
      ],
      synthese: "Donc, les firmes multinationales se localisent là où les coûts, les ressources, les marchés et la qualité des institutions leur conviennent. Leurs effets sont ambivalents : investissements, emplois et transferts de technologie dans le pays d'accueil, mais aussi concurrence aux entreprises locales et rapatriement des bénéfices.",
      motsCles: ["firme multinationale", "localisation", "délocalisation", "filiale", "sous-traitance", "coentreprise", "transfert de technologie", "valeur ajoutée"],
      image: { file: "t12_u2_fmn.png", legende: "Figure 25 — Les stratégies de localisation des firmes multinationales." },
      contenu: [
        {
          sousTitre: "1. Pourquoi s'implanter ailleurs",
          texte: "La décision de localisation résulte d'un arbitrage entre plusieurs avantages attendus.",
          liste: [
            "Réduire les coûts de production, en particulier de main-d'œuvre.",
            "Accéder à des ressources : matières premières, terres, énergie.",
            "Se rapprocher d'un marché de consommateurs et éviter les droits de douane.",
            "Bénéficier d'infrastructures fiables et de règles stables.",
          ],
        },
        {
          sousTitre: "2. Les formes de l'implantation",
          texte: "La présence étrangère peut prendre plusieurs formes juridiques et économiques.",
          liste: [
            "La filiale de production : l'entreprise possède et dirige l'unité.",
            "La sous-traitance : elle confie une partie de la fabrication à des entreprises locales.",
            "La coentreprise : elle s'associe avec un partenaire national, en partageant capital et décisions.",
          ],
        },
        {
          sousTitre: "3. Les effets dans le pays d'accueil",
          texte: "Les effets positifs sont réels, mais ils ne vont pas de soi.",
          liste: [
            "Investissements, emplois directs et emplois induits.",
            "Transfert de technologie et formation de la main-d'œuvre.",
            "Accès aux réseaux commerciaux du groupe.",
            "Risques : éviction des entreprises locales, rapatriement des bénéfices, décisions prises à l'étranger.",
          ],
        },
        {
          sousTitre: "4. Les effets dans le pays d'origine et la riposte publique",
          texte: "La délocalisation bouleverse aussi l'économie du pays que l'entreprise quitte.",
          liste: [
            "Perte d'emplois peu qualifiés et reconversions difficiles.",
            "Spécialisation attendue dans les activités de conception et à forte valeur ajoutée.",
            "Le pays d'accueil peut, de son côté, former sa main-d'œuvre, exiger des normes et favoriser les liens avec ses entreprises.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une firme multinationale possède des unités…", opts: ["dans plusieurs pays", "dans une seule ville", "uniquement dans son pays"], ok: 0, expl: "C'est la définition même." },
          { q: "Une délocalisation consiste à…", opts: ["transférer une production vers un autre pays", "augmenter les salaires", "vendre l'entreprise"], ok: 0, expl: "Souvent pour réduire les coûts." },
          { q: "Une coentreprise associe…", opts: ["l'entreprise étrangère et un partenaire national", "deux États", "un syndicat et un État"], ok: 0, expl: "Le capital et les décisions sont partagés." },
          { q: "Parmi les risques pour le pays d'accueil figure…", opts: ["le rapatriement des bénéfices", "la création d'emplois", "le transfert de technologie"], ok: 0, expl: "Les bénéfices peuvent quitter le pays." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une multinationale peut faire produire par des sous-traitants locaux.", rep: true, expl: "C'est une forme fréquente d'implantation." },
          { txt: "La délocalisation ne concerne que le pays d'accueil.", rep: false, expl: "Elle affecte aussi l'emploi du pays d'origine." },
          { txt: "La qualité des infrastructures compte dans la décision de localisation.", rep: true, expl: "Transport, énergie et télécommunications sont déterminants." },
          { txt: "Les transferts de technologie sont toujours automatiques.", rep: false, expl: "Ils dépendent de la formation locale et des choix de l'entreprise." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis une firme multinationale.", r: "C'est une entreprise qui possède des unités de production ou de vente dans plusieurs pays." },
          { q: "Cite trois motifs de localisation à l'étranger.", r: "La réduction des coûts de production, l'accès à des ressources et la proximité d'un marché de consommateurs." },
          { q: "Cite deux effets positifs et deux risques pour le pays d'accueil.", r: "Effets positifs : les investissements et les transferts de technologie. Risques : la concurrence aux entreprises locales et le rapatriement des bénéfices." },
          { q: "Quelles sont les trois formes que peut prendre une implantation étrangère ?", r: "Une filiale de production, une sous-traitance auprès d'entreprises locales, ou une coentreprise avec un partenaire national." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Transférer une production à l'étranger est une", suite: "délocalisation" },
          { debut: "Une société détenue et dirigée par un groupe étranger est une", suite: "filiale" },
          { debut: "L'entreprise qui confie une fabrication à une société locale pratique la", suite: "sous-traitance" },
          { debut: "Les bénéfices renvoyés au siège forment le", suite: "rapatriement" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 28 — RAS 3
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les flux internationaux de capitaux : IDE et investissements de portefeuille",
      theme: "Mondialisation",
      ras: "Analyser les principaux mécanismes des échanges financiers internationaux et leurs effets sur l'économie",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "distinguer investissement direct et investissement de portefeuille",
      supportMeta: "Documents financiers, tableaux de flux, cahier",
      revision: [
        ["Qu'est-ce qu'une firme multinationale ?", "Une entreprise qui possède des unités de production ou de vente dans plusieurs pays."],
        ["Qu'est-ce qu'une filiale ?", "Une société détenue et dirigée par un groupe établi dans un autre pays."],
      ],
      mise: [
        "Un investisseur étranger construit une usine ; un autre achète des actions en bourse. Leurs apports sont-ils comparables ?",
        "Non : le premier s'engage durablement et dirige l'activité, le second recherche un rendement et peut se retirer en quelques jours.",
      ],
      observation: "le tableau comparant les deux types de flux",
      observationSupport: "Tableau comparatif IDE / investissements de portefeuille affiché ou distribué",
      technAna: "Lecture de tableau et discussion dirigée",
      qa: [
        ["Qu'est-ce qu'un investissement direct à l'étranger ?", "La création ou le rachat d'une unité de production dans un autre pays, dont l'investisseur garde le contrôle."],
        ["Qu'est-ce qu'un investissement de portefeuille ?", "L'achat de titres étrangers, actions ou obligations, sans direction de l'entreprise."],
        ["Quelle est la première différence ?", "L'horizon : l'IDE est de long terme, l'investissement de portefeuille peut se défaire très vite."],
        ["Quelle est la seconde différence ?", "L'objet : l'IDE apporte capitaux, techniques et compétences ; le portefeuille ne recherche qu'un rendement financier."],
        ["Pourquoi l'IDE est-il plus stable ?", "Parce qu'une usine ne se démonte pas : le retrait suppose de vendre ou de fermer l'unité."],
        ["Quel risque porte l'investissement de portefeuille ?", "Sa volatilité : des retraits massifs peuvent déstabiliser une place financière et une monnaie."],
        ["Qu'est-ce qu'un flux de capitaux ?", "Un mouvement d'argent entre pays destiné à investir, à prêter ou à placer."],
        ["Comment ces flux sont-ils enregistrés ?", "Dans la balance des paiements, au compte financier, qui retrace les mouvements d'avoirs entre résidents et non-résidents."],
      ],
      synthese: "Donc, les capitaux circulent sous deux formes principales. L'investissement direct construit une activité durable et transfère des capacités de production ; l'investissement de portefeuille apporte un financement immédiat mais instable. Un pays gagne à attirer la première forme, tout en se protégeant contre la volatilité de la seconde.",
      motsCles: ["IDE", "investissement de portefeuille", "capitaux", "contrôle", "long terme", "volatilité", "balance des paiements", "compte financier"],
      image: { file: "t12_u2_ide.png", legende: "Figure 26 — Les flux internationaux de capitaux : IDE et investissements de portefeuille." },
      contenu: [
        {
          sousTitre: "1. L'investissement direct à l'étranger",
          texte: "L'IDE se reconnaît au contrôle exercé sur l'unité de production.",
          liste: [
            "Création d'une usine, d'une plantation ou d'une filiale commerciale.",
            "Rachat d'une entreprise locale dont l'investisseur prend la direction.",
            "Horizon long : l'engagement porte sur plusieurs années.",
            "Apporte capitaux, techniques, méthodes et accès aux marchés.",
          ],
        },
        {
          sousTitre: "2. L'investissement de portefeuille",
          texte: "L'investissement de portefeuille ne vise que la rémunération du capital placé.",
          liste: [
            "Achat d'actions ou d'obligations émises par des sociétés ou des États étrangers.",
            "Aucune participation à la direction de l'entreprise.",
            "Horizon court : les titres se revendent en quelques jours.",
            "Risque : des retraits massifs déstabilisent la place financière et la monnaie.",
          ],
        },
        {
          sousTitre: "3. Les effets attendus dans le pays receveur",
          texte: "Les deux flux ne produisent pas les mêmes effets sur l'économie réelle.",
          liste: [
            "IDE : création d'emplois, transfert de technologie, élévation de la productivité.",
            "Portefeuille : financement immédiat des entreprises et de l'État, mais sans engagement durable.",
            "Dépendance : une économie financée par des capitaux volatils reste vulnérable.",
          ],
        },
        {
          sousTitre: "4. La mesure des flux",
          texte: "Ces mouvements sont retracés par un document de synthèse.",
          liste: [
            "La balance des paiements retrace toutes les transactions entre résidents et non-résidents.",
            "Le compte financier y enregistre les investissements directs, les investissements de portefeuille et les autres flux.",
            "Sa lecture indique si le pays reçoit des capitaux ou s'il en exporte.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Un IDE se caractérise par…", opts: ["le contrôle de l'unité de production", "un achat de titres sans contrôle", "un prêt à court terme"], ok: 0, expl: "L'investisseur dirige l'activité." },
          { q: "L'investissement de portefeuille a un horizon…", opts: ["court", "très long", "indéterminé"], ok: 0, expl: "Les titres se revendent vite." },
          { q: "Le risque principal du portefeuille est sa…", opts: ["volatilité", "lenteur", "gratuité"], ok: 0, expl: "Les retraits massifs déstabilisent l'économie." },
          { q: "Les flux de capitaux sont enregistrés dans…", opts: ["la balance des paiements", "le compte de résultat", "le budget de l'État"], ok: 0, expl: "Au compte financier." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Un IDE peut se retirer en quelques jours.", rep: false, expl: "Une usine ne se démonte pas : l'engagement est durable." },
          { txt: "L'investissement de portefeuille dirige l'entreprise.", rep: false, expl: "Il ne recherche qu'un rendement financier." },
          { txt: "L'IDE transfère des techniques et des compétences.", rep: true, expl: "Il apporte des capacités de production." },
          { txt: "La balance des paiements retrace les transactions avec l'étranger.", rep: true, expl: "C'est son objet même." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis l'investissement direct à l'étranger.", r: "C'est la création ou le rachat d'une unité de production dans un autre pays, dont l'investisseur conserve le contrôle." },
          { q: "Quelles sont les deux différences entre IDE et investissement de portefeuille ?", r: "L'IDE s'engage sur le long terme et dirige l'activité, tandis que le portefeuille recherche un rendement et peut se retirer en quelques jours." },
          { q: "Quel risque un pays encourt-il s'il se finance surtout par des capitaux de portefeuille ?", r: "Il s'expose à des retraits massifs et rapides, qui déstabilisent la place financière et la monnaie." },
          { q: "Où les flux de capitaux sont-ils enregistrés ?", r: "Dans la balance des paiements, au compte financier, qui retrace les mouvements d'avoirs entre résidents et non-résidents." },
        ]},
        { type: "appariement", consigne: "Relie chaque opération à sa catégorie.", pointsPar: 1, items: [
          { g: ["Construction d'une usine à l'étranger", "Achat d'actions cotées à l'étranger", "Rachat d'une société locale", "Souscription d'obligations d'État", "Ouverture d'une filiale commerciale"], d: ["Portefeuille", "IDE", "Portefeuille", "IDE", "IDE"], pairs: [[0, 1], [1, 0], [2, 1], [3, 0], [4, 3]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 29 — RAS 3
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le taux de change et le marché des changes",
      theme: "Mondialisation",
      ras: "Analyser les principaux mécanismes des échanges financiers internationaux et leurs effets sur l'économie",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "définir le taux de change et expliquer les effets de ses variations",
      supportMeta: "Documents financiers, tableaux de cotations, cahier",
      revision: [
        ["Qu'est-ce qu'un investissement direct à l'étranger ?", "La création ou le rachat d'une unité de production à l'étranger, dont l'investisseur garde le contrôle."],
        ["Qu'est-ce que la balance des paiements ?", "Le document qui retrace toutes les transactions entre les résidents et les non-résidents."],
      ],
      mise: [
        "Un exportateur vend sa vanille en devises. Si la monnaie nationale perd de sa valeur, que se passe-t-il pour lui ?",
        "Il reçoit davantage de monnaie nationale pour la même devise : ses produits deviennent aussi moins chers pour l'acheteur étranger.",
      ],
      observation: "le tableau des cotations de la monnaie nationale",
      observationSupport: "Tableau de cotations et schéma du marché des changes affichés ou distribués",
      technAna: "Lecture de tableau et calcul dirigé",
      qa: [
        ["Qu'est-ce que le taux de change ?", "Le prix d'une monnaie exprimé dans une autre : la quantité de monnaie nationale qu'il faut donner pour une unité de devise."],
        ["Qu'est-ce que le marché des changes ?", "Le lieu, physique ou électronique, où les monnaies s'échangent contre d'autres monnaies."],
        ["Comment le taux se forme-t-il ?", "Par la rencontre de l'offre et de la demande de chaque monnaie, donc par le marché dans un régime de changes flottants."],
        ["Qu'est-ce qu'une appréciation ?", "Une hausse de la valeur de la monnaie nationale : il faut en donner moins pour la même devise."],
        ["Qu'est-ce qu'une dépréciation ?", "Une baisse de la valeur de la monnaie nationale : il faut en donner davantage pour la même devise."],
        ["Quels sont les effets d'une appréciation ?", "Les importations coûtent moins cher et les exportations deviennent plus chères pour l'acheteur étranger."],
        ["Quels sont les effets d'une dépréciation ?", "Les exportations deviennent plus compétitives, mais les importations renchérissent et peuvent alimenter l'inflation."],
        ["Quelle différence y a-t-il avec la dévaluation ?", "Dans un régime de changes fixes, la décision est officielle : on parle de dévaluation ou de réévaluation ; en changes flottants, on parle de dépréciation ou d'appréciation."],
      ],
      synthese: "Donc, le taux de change est le prix d'une monnaie exprimé dans une autre. Son évolution modifie la compétitivité : une monnaie qui s'apprécie rend les importations moins chères et les exportations plus coûteuses ; une monnaie qui se déprécie favorise les exportateurs mais renchérit les importations.",
      motsCles: ["taux de change", "marché des changes", "appréciation", "dépréciation", "dévaluation", "réévaluation", "devise", "compétitivité"],
      image: { file: "t12_u2_change.png", legende: "Figure 27 — Le taux de change et le marché des changes." },
      contenu: [
        {
          sousTitre: "1. Une monnaie a un prix",
          texte: "Comme tout bien, une monnaie s'échange contre une autre à un certain prix : c'est le taux de change.",
          liste: [
            "Il s'exprime par la quantité de monnaie nationale nécessaire pour obtenir une unité de devise.",
            "Exemple : s'il faut 4 000 ariary pour un euro, le taux est de 4 000 ariary pour un euro.",
            "Il varie en permanence selon l'offre et la demande de chaque monnaie.",
          ],
        },
        {
          sousTitre: "2. Le marché des changes",
          texte: "Les échanges de monnaies se déroulent sur un marché mondial, où interviennent banques, entreprises et États.",
          liste: [
            "Les exportateurs vendent les devises reçues contre de la monnaie nationale.",
            "Les importateurs achètent les devises nécessaires à leurs paiements.",
            "Les investisseurs achètent ou vendent selon leurs placements.",
            "L'équilibre entre offre et demande fixe le taux.",
          ],
        },
        {
          sousTitre: "3. Les effets d'une variation",
          texte: "Toute variation du taux modifie les prix relatifs entre produits nationaux et produits étrangers.",
          liste: [
            "Monnaie qui s'apprécie : importations moins chères, exportations plus chères à l'étranger.",
            "Monnaie qui se déprécie : exportations plus compétitives, importations plus coûteuses.",
            "Une dépréciation forte alimente l'inflation, car les produits importés renchérissent.",
          ],
        },
        {
          sousTitre: "4. Régimes de change et vocabulaire",
          texte: "Les termes employés dépendent du régime de change en vigueur.",
          liste: [
            "Changes flottants : la variation vient du marché, on parle d'appréciation ou de dépréciation.",
            "Changes fixes : la variation décidée par l'autorité s'appelle dévaluation ou réévaluation.",
            "La banque centrale peut intervenir pour limiter les fluctuations excessives.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le taux de change est…", opts: ["le prix d'une monnaie dans une autre", "le taux d'intérêt", "le prix d'une marchandise"], ok: 0, expl: "Il exprime une monnaie en une autre." },
          { q: "Une appréciation rend les importations…", opts: ["moins chères", "plus chères", "interdites"], ok: 0, expl: "La monnaie nationale vaut davantage." },
          { q: "Une dépréciation favorise…", opts: ["les exportateurs", "les importateurs seulement", "personne"], ok: 0, expl: "Les produits nationaux deviennent moins chers à l'étranger." },
          { q: "Dans un régime de changes fixes, on parle de…", opts: ["dévaluation", "dépréciation", "cotation"], ok: 0, expl: "La variation est décidée par l'autorité." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une monnaie qui se déprécie rend les importations moins chères.", rep: false, expl: "Elles renchérissent au contraire." },
          { txt: "Le marché des changes fonctionne par offre et demande.", rep: true, expl: "En régime flottant, le taux s'y forme librement." },
          { txt: "Une forte dépréciation peut alimenter l'inflation.", rep: true, expl: "Les produits importés coûtent plus cher." },
          { txt: "La banque centrale ne peut jamais intervenir sur le change.", rep: false, expl: "Elle peut intervenir pour limiter les fluctuations." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis le taux de change.", r: "Le taux de change est le prix d'une monnaie exprimé dans une autre : la quantité de monnaie nationale qu'il faut donner pour une unité de devise." },
          { q: "Quels sont les effets d'une appréciation de la monnaie nationale ?", r: "Les importations coûtent moins cher, tandis que les exportations deviennent plus chères pour l'acheteur étranger." },
          { q: "Quels sont les deux effets d'une dépréciation ?", r: "Les exportations deviennent plus compétitives et les importations renchérissent, ce qui peut alimenter l'inflation." },
          { q: "Quelle différence y a-t-il entre dépréciation et dévaluation ?", r: "La dépréciation résulte du marché en régime flottant, alors que la dévaluation est une décision officielle en régime de changes fixes." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Une hausse de la valeur de la monnaie est une", suite: "appréciation" },
          { debut: "Une baisse de la valeur de la monnaie est une", suite: "dépréciation" },
          { debut: "Une monnaie étrangère est une", suite: "devise" },
          { debut: "Le lieu où s'échangent les monnaies est le marché des", suite: "changes" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 30 — RAS 3
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La globalisation financière",
      theme: "Mondialisation",
      ras: "Analyser les principaux mécanismes des échanges financiers internationaux et leurs effets sur l'économie",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "décrire la globalisation financière et les « trois D »",
      supportMeta: "Documents, illustrations, cahier",
      revision: [
        ["Qu'est-ce que le taux de change ?", "Le prix d'une monnaie exprimé dans une autre monnaie."],
        ["Qu'est-ce qu'un investissement de portefeuille ?", "L'achat de titres étrangers sans participation à la direction de l'entreprise."],
      ],
      mise: [
        "Une place financière ferme : que se passe-t-il sur les autres places du monde ?",
        "La nouvelle se propage aussitôt : les marchés sont reliés en continu et les capitaux circulent d'un bout à l'autre de la planète.",
      ],
      observation: "le schéma du réseau financier mondial",
      observationSupport: "Schéma du réseau financier mondial et documents sur les flux de capitaux",
      technAna: "Étude de documents et discussion dirigée",
      qa: [
        ["Qu'est-ce que la globalisation financière ?", "L'intégration des marchés financiers du monde : les capitaux circulent librement d'une place à l'autre, en continu."],
        ["Quels sont les « trois D » ?", "La déréglementation, le décloisonnement et la désintermédiation."],
        ["Qu'est-ce que la déréglementation ?", "La suppression des règles qui limitaient les mouvements de capitaux et encadraient les activités financières."],
        ["Qu'est-ce que le décloisonnement ?", "La disparition des séparations entre les marchés : les compartiments nationaux et les catégories d'activités se rejoignent."],
        ["Qu'est-ce que la désintermédiation ?", "Le fait de se financer directement sur les marchés, sans passer par l'intermédiaire d'une banque."],
        ["Quels avantages la globalisation apporte-t-elle ?", "Un financement plus abondant et moins coûteux, et une meilleure répartition de l'épargne vers les projets rentables."],
        ["Quels risques porte-t-elle ?", "La contagion des crises, la volatilité des capitaux et la rapidité de propagation des chocs."],
        ["Comment les autorités répondent-elles ?", "Par la régulation prudentielle, la surveillance des banques et la coopération entre banques centrales."],
      ],
      synthese: "Donc, la globalisation financière désigne l'intégration des marchés de capitaux à l'échelle mondiale. Elle procède des « trois D » : déréglementation, décloisonnement et désintermédiation. Elle élargit l'accès au financement, mais elle rend aussi les crises plus contagieuses, ce qui oblige à renforcer la régulation et la surveillance.",
      motsCles: ["globalisation financière", "déréglementation", "décloisonnement", "désintermédiation", "marchés financiers", "capitaux", "contagion", "régulation prudentielle"],
      image: { file: "t12_u2_globalisation.jpg", legende: "Figure 28 — La globalisation financière : des marchés reliés en permanence." },
      contenu: [
        {
          sousTitre: "1. Un marché mondial des capitaux",
          texte: "Les places financières forment aujourd'hui un ensemble continu, actif en permanence.",
          liste: [
            "Les capitaux se déplacent électroniquement en quelques secondes.",
            "Un investisseur peut placer ses fonds sur n'importe quelle place.",
            "Les taux d'intérêt et les cours s'influencent mutuellement d'un pays à l'autre.",
          ],
        },
        {
          sousTitre: "2. Les trois D",
          texte: "Trois transformations ont rendu possible cette intégration.",
          liste: [
            "Déréglementation : la levée des contrôles sur les mouvements de capitaux.",
            "Décloisonnement : la fin de la séparation entre marchés nationaux et entre activités financières.",
            "Désintermédiation : le financement direct sur les marchés, sans passer par le crédit bancaire.",
          ],
        },
        {
          sousTitre: "3. Les avantages attendus",
          texte: "L'intégration financière facilite le financement de l'économie.",
          liste: [
            "L'épargne disponible dans le monde peut rejoindre les projets les plus rentables.",
            "Les entreprises et les États accèdent à des sources de financement plus larges.",
            "La concurrence entre prêteurs peut faire baisser le coût du crédit.",
          ],
        },
        {
          sousTitre: "4. Les risques et la réponse publique",
          texte: "La même intégration transmet les chocs à grande vitesse.",
          liste: [
            "Une crise locale peut se propager à l'ensemble des places : c'est la contagion.",
            "Les capitaux les plus volatils peuvent se retirer massivement et brutalement.",
            "Réponses : régulation prudentielle, surveillance bancaire, coopération entre banques centrales.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La globalisation financière désigne…", opts: ["l'intégration des marchés de capitaux", "le commerce des marchandises", "le transport maritime"], ok: 0, expl: "Elle porte sur les capitaux, pas sur les biens." },
          { q: "Le décloisonnement supprime…", opts: ["les séparations entre marchés", "les banques", "les monnaies"], ok: 0, expl: "Les compartiments se rejoignent." },
          { q: "La désintermédiation permet de se financer…", opts: ["directement sur les marchés", "uniquement par la banque", "par l'impôt"], ok: 0, expl: "Sans passer par le crédit bancaire." },
          { q: "Le risque majeur de la globalisation financière est…", opts: ["la contagion des crises", "la disparition des banques", "la hausse des salaires"], ok: 0, expl: "Les chocs se propagent très vite." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La déréglementation lève les contrôles sur les capitaux.", rep: true, expl: "Elle ouvre les mouvements de fonds." },
          { txt: "La globalisation financière supprime tout risque de crise.", rep: false, expl: "Elle peut au contraire les propager." },
          { txt: "La régulation prudentielle renforce la solidité des banques.", rep: true, expl: "Elle impose des règles de fonds propres et de surveillance." },
          { txt: "Les capitaux circulent en continu d'une place à l'autre.", rep: true, expl: "Les marchés sont reliés en permanence." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis la globalisation financière.", r: "C'est l'intégration des marchés financiers du monde, où les capitaux circulent librement et en continu d'une place à l'autre." },
          { q: "Explique les trois D.", r: "La déréglementation lève les contrôles sur les capitaux, le décloisonnement supprime les séparations entre marchés, et la désintermédiation permet de se financer directement sans passer par une banque." },
          { q: "Cite deux avantages et deux risques de la globalisation financière.", r: "Avantages : un financement plus abondant et une meilleure allocation de l'épargne. Risques : la contagion des crises et la volatilité des capitaux." },
          { q: "Comment les autorités limitent-elles ces risques ?", r: "Par la régulation prudentielle, la surveillance des banques et la coopération entre banques centrales." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "La levée des contrôles sur les capitaux est la", suite: "déréglementation" },
          { debut: "La fin des séparations entre marchés est le", suite: "décloisonnement" },
          { debut: "Se financer sans banque est la", suite: "désintermédiation" },
          { debut: "La propagation d'une crise d'un marché à l'autre est la", suite: "contagion" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 31 — RAS 3
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les crises financières",
      theme: "Mondialisation",
      ras: "Analyser les principaux mécanismes des échanges financiers internationaux et leurs effets sur l'économie",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "distinguer les trois formes de crises et décrire la contagion",
      supportMeta: "Documents historiques, schémas, cahier",
      revision: [
        ["Que recouvrent les « trois D » ?", "La déréglementation, le décloisonnement et la désintermédiation."],
        ["Qu'est-ce que la volatilité des capitaux ?", "La rapidité avec laquelle les capitaux entrent et sortent d'un pays, ce qui rend les marchés instables."],
      ],
      mise: [
        "Une banque fait faillite dans un pays ; des épargnants d'un autre pays s'inquiètent. Pourquoi ?",
        "Parce que les établissements sont liés entre eux : la défiance d'une place gagne les autres, et le crédit se bloque partout.",
      ],
      observation: "le schéma du mécanisme de contagion",
      observationSupport: "Schéma du mécanisme de contagion et documents historiques",
      technAna: "Étude de documents et débat dirigé",
      qa: [
        ["Qu'est-ce qu'une crise boursière ?", "Un effondrement rapide des cours des actions, qui détruit une part importante de la valeur des portefeuilles."],
        ["Qu'est-ce qu'une crise bancaire ?", "La défaillance d'un grand nombre de banques, qui ne peuvent plus faire face à leurs engagements ni continuer à prêter."],
        ["Qu'est-ce qu'une crise de taux de change ?", "Une attaque contre une monnaie, qui se déprécie brutalement et oblige parfois l'État à modifier sa politique monétaire."],
        ["Comment une crise boursière atteint-elle l'économie réelle ?", "Les entreprises voient leur valeur s'effondrer, leurs financements se tarir, et elles réduisent investissements et embauches."],
        ["Pourquoi une crise bancaire est-elle la plus grave ?", "Parce qu'elle assèche le crédit : sans prêts, les entreprises et les ménages ne peuvent plus financer leurs projets."],
        ["Comment se produit la contagion ?", "La défiance gagne les autres marchés, les capitaux se retirent en masse, et le commerce international se contracte."],
        ["Quel est le rôle de la banque centrale ?", "Prêteur en dernier ressort, elle fournit les liquidités nécessaires et surveille la solidité des établissements."],
        ["Peut-on éviter les crises ?", "On ne peut toutes les éviter, mais la régulation, les fonds propres et la surveillance réduisent leur fréquence et leur gravité."],
      ],
      synthese: "Donc, on distingue trois formes de crises : boursière, bancaire et de taux de change. Elles se propagent par la défiance et par le retrait des capitaux, jusqu'à toucher l'économie réelle. La banque centrale joue alors le rôle de prêteur en dernier ressort, tandis que la régulation prudentielle vise à limiter leur fréquence.",
      motsCles: ["crise financière", "crise boursière", "crise bancaire", "crise de taux de change", "contagion", "liquidité", "prêteur en dernier ressort", "régulation"],
      image: { file: "t12_u2_crises.png", legende: "Figure 29 — Les trois formes de crises financières." },
      contenu: [
        {
          sousTitre: "1. La crise boursière",
          texte: "Elle naît d'un effondrement des cours, souvent après une période de hausse rapide.",
          liste: [
            "Les actions perdent une grande partie de leur valeur en peu de temps.",
            "Les portefeuilles des épargnants et des institutions sont amputés.",
            "Le financement des entreprises par émission d'actions devient impossible.",
          ],
        },
        {
          sousTitre: "2. La crise bancaire",
          texte: "Elle est la plus lourde de conséquences, car elle touche directement le crédit.",
          liste: [
            "Des créances deviennent irrécouvrables et les dépôts se retirent massivement.",
            "Les banques, à court de liquidités, cessent de prêter.",
            "Sans crédit, l'investissement et la consommation s'effondrent.",
          ],
        },
        {
          sousTitre: "3. La crise de taux de change",
          texte: "Elle frappe la monnaie, souvent après des sorties massives de capitaux.",
          liste: [
            "La monnaie se déprécie brutalement.",
            "Les dettes libellées en devises deviennent beaucoup plus lourdes à rembourser.",
            "Les importations renchérissent, ce qui alimente l'inflation.",
          ],
        },
        {
          sousTitre: "4. La contagion et la réponse publique",
          texte: "Une crise locale devient mondiale par un mécanisme de défiance.",
          liste: [
            "Les capitaux se retirent des marchés voisins, par prudence.",
            "Les banques cessent de se prêter entre elles.",
            "La banque centrale intervient comme prêteur en dernier ressort.",
            "La régulation prudentielle impose des fonds propres et une surveillance renforcée.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une crise boursière est…", opts: ["un effondrement des cours des actions", "une grève générale", "une baisse des salaires"], ok: 0, expl: "Elle détruit la valeur des portefeuilles." },
          { q: "La crise la plus grave pour le crédit est la crise…", opts: ["bancaire", "boursière", "de change"], ok: 0, expl: "Elle assèche les prêts à l'économie." },
          { q: "Le prêteur en dernier ressort est…", opts: ["la banque centrale", "une banque commerciale", "le gouvernement local"], ok: 0, expl: "Elle fournit les liquidités en urgence." },
          { q: "La contagion se produit par…", opts: ["la défiance et le retrait des capitaux", "la hausse des salaires", "la baisse des impôts"], ok: 0, expl: "La panique se propage d'une place à l'autre." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une crise boursière n'atteint jamais l'économie réelle.", rep: false, expl: "Le financement des entreprises se tarit, l'investissement tombe." },
          { txt: "Une dépréciation alourdit la dette libellée en devises.", rep: true, expl: "Il faut davantage de monnaie nationale pour la rembourser." },
          { txt: "La banque centrale peut fournir des liquidités en urgence.", rep: true, expl: "C'est son rôle de prêteur en dernier ressort." },
          { txt: "La régulation prudentielle augmente le risque de crise.", rep: false, expl: "Elle impose des fonds propres et une surveillance." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite les trois formes de crises financières.", r: "La crise boursière, la crise bancaire et la crise de taux de change." },
          { q: "Pourquoi la crise bancaire est-elle la plus grave ?", r: "Parce qu'elle assèche le crédit : sans prêts, les entreprises et les ménages ne peuvent plus financer leurs projets." },
          { q: "Explique le mécanisme de contagion.", r: "La défiance gagne les marchés voisins, les capitaux se retirent en masse et les banques cessent de se prêter, ce qui contracte l'économie." },
          { q: "Quel est le rôle de la banque centrale en période de crise ?", r: "Elle agit comme prêteur en dernier ressort en fournissant les liquidités dont le système a besoin." },
        ]},
        { type: "appariement", consigne: "Relie chaque situation au type de crise.", pointsPar: 1, items: [
          { g: ["Krach des actions", "Retraits massifs dans les banques", "Monnaie qui perd la moitié de sa valeur", "Banques qui cessent de se prêter entre elles"], d: ["Bancaire", "Change", "Boursière", "Bancaire"], pairs: [[0, 2], [1, 0], [2, 1], [3, 3]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 32 — RAS 3
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "L'endettement extérieur et le service de la dette",
      theme: "Mondialisation",
      ras: "Analyser les principaux mécanismes des échanges financiers internationaux et leurs effets sur l'économie",
      valeurs: "Persévérance, goût de l'effort et de l'excellence",
      objectif: "définir la dette extérieure, son service et ses effets sur l'économie",
      supportMeta: "Documents statistiques, tableaux, cahier",
      revision: [
        ["Quelles sont les trois formes de crises financières ?", "La crise boursière, la crise bancaire et la crise de taux de change."],
        ["Quel est le rôle de prêteur en dernier ressort ?", "La banque centrale fournit les liquidités dont le système financier a besoin en urgence."],
      ],
      mise: [
        "Un pays emprunte pour construire une route. L'opération est-elle bonne ou mauvaise ?",
        "Bonne si la route stimule l'activité et permet de rembourser ; mauvaise si elle finance des dépenses qui ne produisent aucun revenu.",
      ],
      observation: "le schéma de la dette extérieure et de son service",
      observationSupport: "Schéma de la dette extérieure et tableau du service de la dette",
      technAna: "Lecture de tableau et débat dirigé",
      qa: [
        ["Qu'est-ce que la dette extérieure ?", "L'ensemble des sommes que les résidents d'un pays, État et entreprises, doivent à des créanciers étrangers."],
        ["Qu'est-ce que le service de la dette ?", "Les sommes que le pays doit verser chaque année : le remboursement du capital et le paiement des intérêts."],
        ["Quelle différence y a-t-il entre dette et service de la dette ?", "La dette est le stock accumulé, le service est le flux annuel qu'elle exige."],
        ["Quels sont les effets positifs de l'endettement ?", "Il permet de financer des investissements que l'épargne nationale ne suffit pas à couvrir."],
        ["Quand l'endettement devient-il dangereux ?", "Lorsque les emprunts financent des dépenses courantes, ou lorsque le service de la dette dépasse les capacités de remboursement."],
        ["Qu'est-ce que le surendettement ?", "Une situation où le pays ne peut plus honorer le service de sa dette sans compromettre ses dépenses essentielles."],
        ["Comment traite-t-on le surendettement ?", "Par le rééchelonnement, la réduction de la dette ou l'allongement des délais de remboursement."],
        ["Qu'est-ce qu'une dette soutenable ?", "Une dette dont la croissance reste inférieure à celle des capacités de remboursement du pays."],
      ],
      synthese: "Donc, la dette extérieure est un stock que le pays doit rembourser à des créanciers étrangers ; son service est le flux annuel exigé. L'emprunt est utile lorsqu'il finance des investissements productifs, dangereux lorsqu'il finance des dépenses courantes ou devient insoutenable. Les traitements du surendettement passent par le rééchelonnement, la réduction ou l'allongement des délais.",
      motsCles: ["dette extérieure", "service de la dette", "intérêts", "remboursement", "surendettement", "rééchelonnement", "soutenabilité", "créanciers"],
      image: { file: "t12_u2_dette.png", legende: "Figure 30 — L'endettement extérieur et son service." },
      contenu: [
        {
          sousTitre: "1. Stock et flux",
          texte: "Il faut distinguer la dette accumulée et les sommes à verser chaque année.",
          liste: [
            "La dette extérieure est le stock : ce que le pays doit au total.",
            "Le service de la dette est le flux : capital remboursé et intérêts payés dans l'année.",
            "Un pays peut supporter une dette élevée si le service reste abordable.",
          ],
        },
        {
          sousTitre: "2. Les effets positifs",
          texte: "L'emprunt extérieur complète une épargne nationale insuffisante.",
          liste: [
            "Financement de routes, d'écoles, de centrales électriques.",
            "Achats d'équipements productifs pour les entreprises.",
            "Condition : l'investissement financé doit produire les revenus qui permettront de rembourser.",
          ],
        },
        {
          sousTitre: "3. Les effets négatifs",
          texte: "Les difficultés apparaissent lorsque l'emprunt ne crée pas de capacité de remboursement.",
          liste: [
            "Un service élevé absorbe une part du budget consacré à la santé et à l'éducation.",
            "La dette en devises s'alourdit quand la monnaie nationale se déprécie.",
            "Le pays devient dépendant de nouveaux emprunts pour rembourser les anciens.",
          ],
        },
        {
          sousTitre: "4. Soutenabilité et traitements",
          texte: "La soutenabilité se juge par comparaison avec les capacités du pays.",
          liste: [
            "La dette est soutenable si elle croît moins vite que les capacités de remboursement.",
            "Le rééchelonnement étale les échéances dans le temps.",
            "La réduction de la dette en annule une partie ; l'allongement des délais en réduit la charge annuelle.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La dette extérieure est due à…", opts: ["des créanciers étrangers", "aux seuls résidents", "aux banques locales seulement"], ok: 0, expl: "Les prêteurs sont établis hors du pays." },
          { q: "Le service de la dette comprend…", opts: ["le capital remboursé et les intérêts", "uniquement les intérêts", "uniquement le capital"], ok: 0, expl: "C'est le flux annuel à verser." },
          { q: "Un emprunt utile finance…", opts: ["des investissements productifs", "des dépenses courantes", "des importations de luxe"], ok: 0, expl: "Il doit créer les revenus du remboursement." },
          { q: "Le rééchelonnement consiste à…", opts: ["étaler les échéances", "annuler la dette", "augmenter les taux"], ok: 0, expl: "Les délais sont allongés." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une dette élevée est toujours insoutenable.", rep: false, expl: "Elle est soutenable si le service reste abordable." },
          { txt: "Une dépréciation alourdit une dette libellée en devises.", rep: true, expl: "Il faut davantage de monnaie nationale pour la rembourser." },
          { txt: "Le service de la dette peut réduire les moyens de la santé et de l'école.", rep: true, expl: "Il absorbe une part du budget de l'État." },
          { txt: "L'emprunt extérieur remplace toujours l'impôt.", rep: false, expl: "Il complète l'épargne nationale, il ne la remplace pas." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis la dette extérieure et le service de la dette.", r: "La dette extérieure est l'ensemble des sommes dues à des créanciers étrangers, et le service de la dette est le flux annuel du capital remboursé et des intérêts payés." },
          { q: "Quand l'endettement est-il utile à l'économie ?", r: "Lorsqu'il finance des investissements productifs — routes, écoles, équipements — qui créent les revenus permettant de rembourser." },
          { q: "Qu'est-ce que le surendettement ?", r: "C'est la situation d'un pays qui ne peut plus honorer le service de sa dette sans sacrifier ses dépenses essentielles." },
          { q: "Cite trois traitements du surendettement.", r: "Le rééchelonnement des échéances, la réduction d'une partie de la dette et l'allongement des délais de remboursement." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Le capital remboursé plus les intérêts forment le service de la", suite: "dette" },
          { debut: "Une dette que le pays ne peut plus rembourser est un", suite: "surendettement" },
          { debut: "Étaler les échéances dans le temps est un", suite: "rééchelonnement" },
          { debut: "Une dette dont la charge reste payable est dite", suite: "soutenable" },
        ]},
      ],
    },
  ],
};

module.exports = U;
