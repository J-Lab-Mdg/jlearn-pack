// ============================================================
// Unité II — Monnaie et financement (PE T11 série OSE — 28 heures)
// RAS 1 : Evaluer les formes de la monnaie et ses fonctions
// RAS 2 : Déterminer l'utilité de la création monétaire
// RAS 3 : Evaluer les modes de financement de l'économie
// RAS 4 : Déterminer la relation entre le taux d'intérêt, les risques de
//         crédit, la monnaie
// Découpage : 13 séances de cours + 1 révision + 1 sujet d'examen
// Valeurs : Persévérance, Responsabilité
// ============================================================

const U = {
  num: "II",
  titre: "Monnaie et financement",
  ras: "Evaluer les formes de la monnaie et ses fonctions · Déterminer l'utilité de la création monétaire · Evaluer les modes de financement de l'économie · Déterminer la relation entre le taux d'intérêt, les risques de crédit, la monnaie",
  valeurs: "Persévérance, Responsabilité",
  duree: "28 heures",
  themes: [
    "Du troc à la monnaie",
    "Les fonctions de la monnaie",
    "Masse monétaire et marché monétaire",
    "Le mécanisme de la création monétaire",
    "Banque centrale et banques commerciales",
    "Besoin et capacité de financement",
    "Le financement interne : l'autofinancement",
    "Le financement externe intermédié",
    "Le financement externe désintermédié",
    "Le taux d'intérêt et les intérêts simples",
    "La valeur acquise",
    "Taux nominal et taux réel",
    "Les risques de crédit",
  ],
  topics: [
    // ---------------------------------------------------------
    // SÉANCE 14 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Du troc à la monnaie : définition et formes",
      theme: "Monnaie et financement",
      ras: "Evaluer les formes de la monnaie et ses fonctions",
      valeurs: "Persévérance, Responsabilité",
      objectif: "expliquer les limites du troc et définir la monnaie et ses formes",
      supportMeta: "Documents sur le troc et les moyens de paiement, billets, cahier",
      revision: [
        ["Qu'est-ce que la valeur ajoutée ?", "La richesse créée : valeur de la production moins consommations intermédiaires."],
        ["Cite deux parties prenantes externes de l'entreprise.", "Les clients et les fournisseurs (ou la banque, l'État, les riverains)."],
      ],
      mise: [
        "Un pêcheur veut du riz et le paysan veut du poisson : l'échange est facile. Et si le paysan veut des légumes ?",
        "Il faut alors plusieurs échanges successifs : c'est la limite du troc, que la monnaie vient lever.",
      ],
      observation: "les documents présentant le troc et les moyens de paiement actuels",
      observationSupport: "Documents et images sur le troc, les billets, les chèques et le paiement mobile",
      technAna: "Étude de document, jeu de rôle et débat dirigé",
      qa: [
        ["Qu'est-ce que le troc ?", "L'échange direct d'un bien contre un autre, sans intermédiaire monétaire."],
        ["Quelles sont les limites du troc ?", "Il exige une double coïncidence des besoins, il rend difficile l'évaluation des valeurs et il ne permet pas de conserver un pouvoir d'achat dans le temps."],
        ["Qu'est-ce que la monnaie ?", "Un bien ou un instrument accepté par tous dans une société pour payer des achats, évaluer les valeurs et régler les dettes."],
        ["Qu'est-ce que la monnaie fiduciaire ?", "La monnaie matérielle : les billets et les pièces, dont la valeur repose sur la confiance dans l'institution qui les émet."],
        ["Qu'est-ce que la monnaie scripturale ?", "La monnaie inscrite sur un compte : dépôts à vue, virements, chèques, cartes bancaires et paiements mobiles."],
        ["La monnaie scripturale est-elle de la monnaie ?", "Oui : elle permet de payer et d'éteindre une dette ; c'est aujourd'hui la forme la plus utilisée dans les échanges professionnels."],
        ["Qu'est-ce que la monnaie électronique ?", "Une forme de monnaie scripturale stockée et transmise par un support numérique : porte-monnaie mobile, carte prépayée."],
        ["Pourquoi accepte-t-on un billet de banque ?", "Parce que la confiance est établie : chacun sait qu'il pourra à son tour s'en servir pour payer."],
      ],
      synthese: "Donc, le troc exige une double coïncidence des besoins et ne permet ni mesure commune ni conservation du pouvoir d'achat. La monnaie lève ces trois obstacles. Elle prend aujourd'hui deux formes principales : la monnaie fiduciaire — billets et pièces — et la monnaie scripturale — écritures sur compte, cartes et paiements mobiles.",
      motsCles: ["troc", "monnaie", "monnaie fiduciaire", "monnaie scripturale", "monnaie électronique", "moyen de paiement", "confiance"],
      image: { file: "t11_u2_troc.jpg", legende: "Figure 12 — Du troc à la monnaie : la double coïncidence des besoins." },
      contenu: [
        {
          sousTitre: "1. Le troc et ses limites",
          texte: "Le troc est l'échange direct de biens et de services sans monnaie. Il fonctionne dans des cercles restreints, mais se heurte à trois obstacles majeurs.",
          liste: [
            "La double coïncidence des besoins : il faut que chacun veuille précisément ce que l'autre offre.",
            "L'absence de mesure commune : combien de kilos de riz pour un cabri ? L'évaluation est discutée à chaque échange.",
            "L'impossibilité d'épargner : un bien stocké se détériore et ne conserve pas son pouvoir d'achat.",
          ],
        },
        {
          sousTitre: "2. La monnaie",
          texte: "La monnaie est un instrument accepté par la collectivité pour régler les échanges. Sa valeur ne vient pas du papier : elle vient de la confiance.",
          liste: [
            "Elle est acceptée par tous sur le territoire considéré.",
            "Elle est émise ou garantie par une autorité reconnue : la banque centrale.",
            "Elle suppose la confiance : un billet ne vaut que parce que d'autres l'accepteront demain.",
          ],
        },
        {
          sousTitre: "3. La monnaie fiduciaire",
          texte: "Le mot vient du latin fiducia, la confiance. La monnaie fiduciaire est la monnaie matérielle : billets et pièces.",
          liste: [
            "Billets de banque émis par la banque centrale.",
            "Pièces de monnaie divisionnaires.",
            "Avantages : immédiate, anonyme, acceptée partout sans intermédiaire technique.",
            "Limites : risque de perte ou de vol, coût de manipulation pour les gros montants.",
          ],
        },
        {
          sousTitre: "4. La monnaie scripturale",
          texte: "La monnaie scripturale n'a pas d'existence matérielle : c'est une écriture sur un compte, détenue auprès d'une banque ou d'un établissement de paiement.",
          liste: [
            "Dépôts à vue : sommes disponibles immédiatement par carte, virement ou chèque.",
            "Virements et prélèvements : transferts de compte à compte.",
            "Paiement mobile et monnaie électronique : porte-monnaie numérique largement utilisé pour les petits montants.",
            "Avantages : sécurité, rapidité, traçabilité ; elle domine les échanges professionnels.",
          ],
        },
        {
          sousTitre: "5. Deux formes complémentaires",
          texte: "Les formes de monnaie ne s'excluent pas : elles répondent à des usages différents et se complètent au quotidien.",
          liste: [
            "Les petits achats de proximité se règlent souvent en espèces ou en monnaie mobile.",
            "Les paiements professionnels et les salaires passent par la monnaie scripturale.",
            "Une économie moderne utilise les deux, selon les montants, les lieux et les habitudes.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le troc exige…", opts: ["une double coïncidence des besoins", "l'intervention d'une banque", "un taux d'intérêt"], ok: 0, expl: "Chacun doit vouloir ce que l'autre possède." },
          { q: "Les billets de banque sont de la monnaie…", opts: ["fiduciaire", "scripturale", "électronique"], ok: 0, expl: "Ce sont des signes monétaires matériels." },
          { q: "Un virement bancaire mobilise de la monnaie…", opts: ["scripturale", "fiduciaire", "divisionnaire"], ok: 0, expl: "C'est une écriture de compte à compte." },
          { q: "La valeur d'un billet repose sur…", opts: ["la confiance dans l'institution émettrice", "la valeur du papier", "le cours de l'or"], ok: 0, expl: "La monnaie fiduciaire tire sa valeur de la confiance collective." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le troc permet de conserver facilement un pouvoir d'achat dans le temps.", rep: false, expl: "Les biens échangés se détériorent et ne se conservent pas." },
          { txt: "La monnaie scripturale permet de payer sans support matériel.", rep: true, expl: "Elle circule par écritures entre comptes." },
          { txt: "Le paiement mobile est une forme de monnaie scripturale.", rep: true, expl: "Il transfère une écriture d'un compte à un autre." },
          { txt: "La monnaie fiduciaire a disparu avec le développement des banques.", rep: false, expl: "Billets et pièces restent très utilisés pour les petits montants." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite trois limites du troc.", r: "Le troc exige une double coïncidence des besoins, il ne fournit pas de mesure commune des valeurs et il ne permet pas de conserver un pouvoir d'achat dans le temps." },
          { q: "Donne la définition de la monnaie.", r: "La monnaie est un instrument accepté par tous dans une société pour payer des achats, évaluer les valeurs et régler les dettes." },
          { q: "Quelle différence y a-t-il entre monnaie fiduciaire et monnaie scripturale ?", r: "La monnaie fiduciaire est matérielle — billets et pièces — tandis que la monnaie scripturale est une écriture sur un compte, utilisée par virement, carte ou paiement mobile." },
          { q: "Pourquoi dit-on que la monnaie repose sur la confiance ?", r: "Parce qu'un billet ou une écriture ne vaut que si les autres agents acceptent de les recevoir en paiement à leur tour." },
        ]},
        { type: "appariement", consigne: "Relie chaque forme de monnaie à son exemple.", pointsPar: 1, items: [
          { g: ["Un billet de banque", "Un virement de salaire", "Une pièce de monnaie", "Un porte-monnaie mobile"], d: ["Monnaie scripturale", "Monnaie fiduciaire", "Monnaie électronique", "Monnaie fiduciaire"], pairs: [[0, 1], [1, 0], [2, 3], [3, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 15 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les fonctions de la monnaie",
      theme: "Monnaie et financement",
      ras: "Evaluer les formes de la monnaie et ses fonctions",
      valeurs: "Persévérance, Responsabilité",
      objectif: "distinguer les trois fonctions de la monnaie et les illustrer",
      supportMeta: "Documents sur les prix et les paiements, tableau des fonctions, cahier",
      revision: [
        ["Qu'est-ce que la monnaie scripturale ?", "La monnaie inscrite sur un compte : dépôts, virements, cartes, paiement mobile."],
        ["Cite une limite du troc.", "La double coïncidence des besoins (ou l'absence de mesure commune)."],
      ],
      mise: [
        "Quand un commerçant affiche un prix, quand un client paie, et quand un épargnant garde son argent : la monnaie joue-t-elle le même rôle ?",
        "Non : elle mesure la valeur, elle sert à payer, puis elle conserve le pouvoir d'achat.",
      ],
      observation: "le tableau des trois fonctions affiché au tableau",
      observationSupport: "Tableau des fonctions de la monnaie (mesure, paiement, réserve), affiché ou distribué",
      technAna: "Étude de document et questionnement dirigé",
      qa: [
        ["Quelles sont les trois fonctions de la monnaie ?", "Unité de compte, intermédiaire des échanges et réserve de valeur."],
        ["Qu'est-ce que la fonction d'unité de compte ?", "La monnaie sert à mesurer et à comparer la valeur des biens et des services : afficher un prix, tenir une comptabilité."],
        ["Qu'est-ce que la fonction d'intermédiaire des échanges ?", "La monnaie sert à payer : elle permet de vendre aujourd'hui et d'acheter plus tard auprès de n'importe qui."],
        ["Qu'est-ce que la fonction de réserve de valeur ?", "La monnaie permet de conserver un pouvoir d'achat pour un achat futur ou pour faire face à un imprévu."],
        ["Pourquoi la fonction de réserve de valeur est-elle fragile ?", "Parce que la hausse des prix réduit ce que l'on pourra acheter demain avec la même somme : la monnaie perd une partie de son pouvoir d'achat."],
        ["Quel lien y a-t-il entre unité de compte et comparaison des prix ?", "Grâce à l'unité de compte, un client compare deux offres exprimées dans la même unité, sans négocier chaque fois un rapport d'échange."],
        ["Que se passe-t-il quand la confiance dans la monnaie disparaît ?", "Les trois fonctions se dégradent : on ne veut plus la conserver, on préfère troquer ou détenir d'autres valeurs."],
      ],
      synthese: "Donc, la monnaie remplit trois fonctions : elle mesure la valeur — unité de compte ; elle permet de payer — intermédiaire des échanges ; elle conserve le pouvoir d'achat — réserve de valeur. La dernière est la plus fragile, car elle dépend de l'évolution des prix et de la confiance dans la monnaie.",
      motsCles: ["unité de compte", "intermédiaire des échanges", "réserve de valeur", "pouvoir d'achat", "prix", "confiance"],
      image: { file: "t11_u2_fonctions.png", legende: "Figure 13 — Les trois fonctions de la monnaie." },
      contenu: [
        {
          sousTitre: "1. Unité de compte",
          texte: "La monnaie fournit une échelle commune pour exprimer la valeur de tout ce qui s'échange.",
          liste: [
            "Afficher un prix : un kilo de riz, une coupe de cheveux, un loyer.",
            "Tenir une comptabilité : comparer des recettes et des charges exprimées dans la même unité.",
            "Établir un bilan et un compte de résultat.",
            "Sans unité de compte, chaque échange suppose de redéfinir un rapport de valeur.",
          ],
        },
        {
          sousTitre: "2. Intermédiaire des échanges",
          texte: "La monnaie sépare l'achat de la vente : on peut vendre aujourd'hui et acheter plus tard auprès de n'importe quel fournisseur.",
          liste: [
            "Le vendeur reçoit de la monnaie et devient libre d'acheter ce qu'il veut.",
            "Les échanges ne sont plus limités par la double coïncidence des besoins.",
            "Les paiements peuvent être différés ou échelonnés.",
          ],
        },
        {
          sousTitre: "3. Réserve de valeur",
          texte: "Conserver de la monnaie, c'est conserver un pouvoir d'achat disponible pour plus tard.",
          liste: [
            "Faire face à un imprévu : maladie, réparation, mauvaise récolte.",
            "Préparer un achat important : terrain, équipement, scolarité.",
            "Condition : que les prix restent stables. Avec la hausse des prix, la même somme achète moins.",
            "C'est pourquoi une épargne durable cherche un placement plutôt qu'une simple conservation d'espèces.",
          ],
        },
        {
          sousTitre: "4. Les trois fonctions sont liées",
          texte: "Une monnaie qui perd une fonction perd les autres : la confiance est le ciment de l'ensemble.",
          liste: [
            "Si la monnaie ne mesure plus rien de stable, on cesse de l'utiliser comme unité de compte.",
            "Si elle perd trop vite son pouvoir d'achat, on refuse de la conserver.",
            "Si elle n'est plus acceptée, les échanges reviennent au troc ou à une autre monnaie.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Une vente au marché, suivie dans le temps :",
          liste: [
            "Le paysan affiche 2 500 Ar le kilo : unité de compte.",
            "Le client paie avec son porte-monnaie mobile : intermédiaire des échanges.",
            "Le paysan conserve la somme pour acheter des semences la saison prochaine : réserve de valeur.",
            "Si le prix des semences monte fortement, sa réserve perd une partie de son pouvoir d'achat.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Afficher le prix d'un bien correspond à la fonction d'…", opts: ["unité de compte", "réserve de valeur", "crédit"], ok: 0, expl: "La monnaie mesure la valeur des biens." },
          { q: "Conserver de l'argent pour un achat futur correspond à la fonction de…", opts: ["réserve de valeur", "unité de compte", "intermédiaire des échanges"], ok: 0, expl: "La monnaie conserve un pouvoir d'achat." },
          { q: "Payer un fournisseur avec un virement correspond à la fonction d'…", opts: ["intermédiaire des échanges", "unité de compte", "réserve de valeur"], ok: 0, expl: "La monnaie sert à régler l'échange." },
          { q: "La fonction la plus fragile quand les prix augmentent est…", opts: ["la réserve de valeur", "l'unité de compte", "l'intermédiaire des échanges"], ok: 0, expl: "La même somme permet d'acheter moins." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La monnaie permet de vendre aujourd'hui et d'acheter plus tard.", rep: true, expl: "C'est la fonction d'intermédiaire des échanges." },
          { txt: "Une hausse durable des prix renforce la fonction de réserve de valeur.", rep: false, expl: "Elle la fragilise : la même somme achète moins." },
          { txt: "Sans unité de compte, chaque échange impose de redéfinir un rapport de valeur.", rep: true, expl: "C'est l'un des obstacles que lève la monnaie." },
          { txt: "La perte de confiance dans la monnaie ne concerne que l'État.", rep: false, expl: "Elle affecte tous les agents : ménages, entreprises, commerçants." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite et définis les trois fonctions de la monnaie.", r: "Unité de compte : mesurer la valeur. Intermédiaire des échanges : servir à payer. Réserve de valeur : conserver un pouvoir d'achat." },
          { q: "Illustre la fonction d'unité de compte par un exemple.", r: "Un commerçant affiche ses prix en ariary : le client compare deux offres exprimées dans la même unité." },
          { q: "Pourquoi la fonction de réserve de valeur est-elle fragile ?", r: "Parce que la hausse des prix réduit ce que la même somme permettra d'acheter demain." },
          { q: "Que se passe-t-il quand la confiance dans la monnaie disparaît ?", r: "Les trois fonctions se dégradent : on refuse de la conserver, on cesse de l'utiliser comme unité de compte et les échanges reviennent au troc." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["unité de compte", "intermédiaire des échanges", "réserve de valeur", "pouvoir d'achat", "prix"], items: [
          { phrase: "Mesurer la valeur d'un bien est la fonction d'_________.", mot: "unité de compte" },
          { phrase: "Payer un achat est la fonction d'_________.", mot: "intermédiaire des échanges" },
          { phrase: "Conserver son argent pour plus tard est la fonction de _________.", mot: "réserve de valeur" },
          { phrase: "La hausse des _________ réduit le _________ de la monnaie.", mot: "prix" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 16 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Masse monétaire et marché monétaire",
      theme: "Monnaie et financement",
      ras: "Déterminer l'utilité de la création monétaire",
      valeurs: "Persévérance, Responsabilité",
      objectif: "définir la masse monétaire et expliquer le rôle du marché monétaire",
      supportMeta: "Documents sur les moyens de paiement, tableau simplifié, cahier",
      revision: [
        ["Cite les trois fonctions de la monnaie.", "Unité de compte, intermédiaire des échanges, réserve de valeur."],
        ["Qu'est-ce que la monnaie scripturale ?", "La monnaie inscrite sur un compte, utilisée par virement, carte ou paiement mobile."],
      ],
      mise: [
        "Combien d'argent circule dans un pays, et comment les banques se procurent-elles des liquidités ?",
        "La quantité de monnaie en circulation s'appelle la masse monétaire ; les banques s'échangent des liquidités sur le marché monétaire.",
      ],
      observation: "le tableau des composantes de la masse monétaire affiché au tableau",
      observationSupport: "Tableau simplifié des composantes de la masse monétaire et schéma du marché monétaire",
      technAna: "Étude de document et questionnement dirigé",
      qa: [
        ["Qu'est-ce que la masse monétaire ?", "La quantité de monnaie disponible dans une économie à un moment donné : l'ensemble des moyens de paiement détenus par les agents non financiers."],
        ["De quoi est composée la masse monétaire ?", "Des billets et pièces en circulation et des dépôts à vue auprès des banques et des établissements de paiement."],
        ["Pourquoi les dépôts à vue comptent-ils dans la masse monétaire ?", "Parce qu'ils sont utilisables immédiatement pour payer : par carte, virement ou chèque."],
        ["Qu'est-ce qu'un agrégat monétaire ?", "Une mesure conventionnelle de la masse monétaire, du plus liquide au moins liquide : les dépôts à terme y entrent avec une liquidité moindre."],
        ["Qu'est-ce que le marché monétaire ?", "Le marché sur lequel les banques et les institutions financières s'échangent des liquidités à court terme."],
        ["À quoi sert le marché monétaire ?", "À permettre aux banques d'équilibrer leurs trésoreries : placer leurs excédents et emprunter ce qui leur manque."],
        ["Quelle différence y a-t-il entre marché monétaire et marché financier ?", "Le marché monétaire traite des liquidités à court terme ; le marché financier finance à long terme par actions et obligations."],
      ],
      synthese: "Donc, la masse monétaire mesure la quantité de moyens de paiement en circulation : espèces et dépôts à vue. Le marché monétaire, lui, est le marché de court terme où les banques s'échangent les liquidités dont elles ont besoin pour équilibrer leur trésorerie.",
      motsCles: ["masse monétaire", "agrégat monétaire", "dépôts à vue", "liquidité", "marché monétaire", "court terme", "trésorerie"],
      image: { file: "t11_u2_masse.png", legende: "Figure 14 — La masse monétaire et le marché monétaire." },
      contenu: [
        {
          sousTitre: "1. La masse monétaire",
          texte: "La masse monétaire est le stock de moyens de paiement disponibles dans l'économie à un instant donné.",
          liste: [
            "Les billets et les pièces détenus par le public.",
            "Les dépôts à vue : comptes courants et comptes de paiement mobilisables immédiatement.",
            "Les dépôts à terme et l'épargne liquide, selon les agrégats retenus.",
            "Plus un actif est liquide, plus il compte dans la monnaie au sens strict.",
          ],
        },
        {
          sousTitre: "2. Les agrégats monétaires",
          texte: "On ne mesure pas la monnaie d'un seul coup : on la range par degré de liquidité, du plus immédiat au moins disponible.",
          liste: [
            "Agrégat le plus étroit : espèces en circulation + dépôts à vue.",
            "Agrégats plus larges : on y ajoute les dépôts à terme et l'épargne mobilisable avec un délai.",
            "L'agrégat choisi dépend de ce que l'on veut observer : la monnaie qui sert à payer, ou l'épargne disponible.",
          ],
        },
        {
          sousTitre: "3. Le marché monétaire",
          texte: "Le marché monétaire est le marché des liquidités à court terme. Les banques en sont les principaux intervenants.",
          liste: [
            "Une banque qui a trop de liquidités les prête à court terme.",
            "Une banque qui en manque emprunte pour faire face aux retraits et aux paiements.",
            "La banque centrale intervient pour fournir ou retirer des liquidités et orienter les taux à court terme.",
          ],
        },
        {
          sousTitre: "4. Pourquoi ce marché est-il utile ?",
          texte: "Sans marché monétaire, chaque banque devrait détenir en permanence d'importantes réserves inutilisées.",
          liste: [
            "Il limite le coût de la prudence : placer ses excédents rapporte.",
            "Il sécurise les paiements : une banque à découvert peut se refinancer.",
            "Il transmet la politique monétaire : les taux courts influencent les crédits à l'économie.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Deux banques d'une même place :",
          liste: [
            "La banque A reçoit d'importants dépôts et dispose d'un excédent de trésorerie : elle le prête à court terme.",
            "La banque B doit honorer des retraits et manque de liquidités : elle emprunte.",
            "Le marché monétaire les met en relation, à un taux négocié pour une durée courte.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La masse monétaire est…", opts: ["la quantité de moyens de paiement en circulation", "le budget de l'État", "le total des exportations"], ok: 0, expl: "Elle mesure les moyens de paiement détenus par les agents." },
          { q: "Les dépôts à vue entrent dans la masse monétaire car…", opts: ["ils servent à payer immédiatement", "ils rapportent un intérêt", "ils sont bloqués"], ok: 0, expl: "Ce sont des moyens de paiement mobilisables sans délai." },
          { q: "Le marché monétaire traite des opérations…", opts: ["à court terme entre institutions financières", "à long terme pour les particuliers", "d'achat d'actions"], ok: 0, expl: "Il ajuste les trésoreries des banques." },
          { q: "Une banque qui manque de liquidités peut…", opts: ["emprunter sur le marché monétaire", "imprimer des billets", "refuser tous les retraits"], ok: 0, expl: "Elle se refinance auprès d'autres banques ou de la banque centrale." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Les billets détenus par les banques dans leurs coffres comptent dans la monnaie en circulation.", rep: false, expl: "Seule compte la monnaie détenue par le public." },
          { txt: "Le marché monétaire permet de placer des excédents de trésorerie.", rep: true, expl: "C'est l'un de ses deux rôles, avec le refinancement." },
          { txt: "Le marché monétaire finance les investissements à long terme.", rep: false, expl: "C'est le rôle du marché financier, par actions et obligations." },
          { txt: "La banque centrale intervient sur le marché monétaire.", rep: true, expl: "Elle fournit ou retire des liquidités et oriente les taux courts." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Donne la définition de la masse monétaire.", r: "La masse monétaire est la quantité de moyens de paiement disponibles dans une économie à un moment donné." },
          { q: "De quoi est composée la monnaie au sens étroit ?", r: "Des billets et pièces en circulation et des dépôts à vue auprès des banques et établissements de paiement." },
          { q: "Donne la définition du marché monétaire.", r: "Le marché monétaire est le marché sur lequel les banques et institutions financières s'échangent des liquidités à court terme." },
          { q: "Quelle différence y a-t-il entre marché monétaire et marché financier ?", r: "Le marché monétaire traite des liquidités à court terme, tandis que le marché financier finance à long terme par actions et obligations." },
        ]},
        { type: "appariement", consigne: "Relie chaque notion à sa définition.", pointsPar: 1, items: [
          { g: ["Dépôt à vue", "Marché monétaire", "Masse monétaire", "Banque centrale"], d: ["Échanges de liquidités à court terme", "Quantité de moyens de paiement en circulation", "Institution qui oriente les taux courts", "Compte mobilisable immédiatement"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 17 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le mécanisme de la création monétaire",
      theme: "Monnaie et financement",
      ras: "Déterminer l'utilité de la création monétaire",
      valeurs: "Persévérance, Responsabilité",
      objectif: "expliquer comment les banques créent de la monnaie en accordant des crédits",
      supportMeta: "Schéma du circuit du crédit, tableau d'exemple, cahier",
      revision: [
        ["Qu'est-ce que la masse monétaire ?", "La quantité de moyens de paiement disponibles dans l'économie."],
        ["À quoi sert le marché monétaire ?", "À équilibrer les trésoreries des banques à court terme."],
      ],
      mise: [
        "Quand une banque accorde un crédit, où prend-elle l'argent ?",
        "Elle ne prélève pas les dépôts des autres clients : elle inscrit la somme sur le compte de l'emprunteur, créant ainsi de la monnaie.",
      ],
      observation: "le schéma du circuit du crédit affiché au tableau",
      observationSupport: "Schéma crédit → dépôt → paiement → nouveau dépôt, affiché ou distribué",
      technAna: "Étude de schéma et calcul dirigé",
      qa: [
        ["Qu'est-ce que la création monétaire ?", "L'augmentation de la quantité de monnaie en circulation, principalement par l'octroi de crédits par les banques."],
        ["Comment une banque crée-t-elle de la monnaie ?", "En accordant un crédit : elle inscrit le montant sur le compte de l'emprunteur, ce qui augmente les dépôts, donc la masse monétaire."],
        ["Pourquoi dit-on que les crédits font les dépôts ?", "Parce que le dépôt apparaît sur le compte au moment même où le crédit est accordé, avant même que l'argent ne soit dépensé."],
        ["Comment la monnaie créée se diffuse-t-elle ?", "L'emprunteur paie son fournisseur, qui dépose la somme dans sa propre banque, qui peut à son tour prêter une partie de ce dépôt."],
        ["Quelles sont les limites de la création monétaire ?", "Les réserves obligatoires, les besoins de liquidité des clients, le risque de défaut et la politique de la banque centrale."],
        ["Que sont les réserves obligatoires ?", "La part des dépôts que chaque banque doit conserver et ne peut pas prêter, fixée par la banque centrale."],
        ["Comment fonctionne le multiplicateur de crédit ?", "À partir d'un dépôt initial, une série de prêts et de dépôts successifs multiplie la monnaie créée ; plus la part conservée est faible, plus la création est ample."],
        ["La création monétaire est-elle sans danger ?", "Non : une création excessive alimente la hausse des prix, et des crédits accordés sans prudence provoquent des impayés."],
      ],
      synthese: "Donc, les banques créent de la monnaie en accordant des crédits : chaque crédit inscrit un dépôt nouveau, qui circule et alimente de nouveaux dépôts. Ce mécanisme est encadré par les réserves obligatoires, le risque de crédit et l'action de la banque centrale : sans ces limites, la création monétaire alimenterait la hausse des prix.",
      motsCles: ["création monétaire", "crédit", "dépôt", "réserves obligatoires", "multiplicateur de crédit", "banque centrale", "liquidité"],
      image: { file: "t11_u2_creation.png", legende: "Figure 15 — Le mécanisme de la création monétaire par le crédit." },
      contenu: [
        {
          sousTitre: "1. Le crédit crée le dépôt",
          texte: "L'idée surprend : lorsqu'une banque accorde un crédit, elle ne puise pas dans les dépôts existants. Elle crée une écriture nouvelle.",
          liste: [
            "Le client signe un contrat de prêt de 5 000 000 Ar.",
            "La banque inscrit 5 000 000 Ar au crédit de son compte : le dépôt apparaît.",
            "La masse monétaire augmente du montant du crédit.",
            "En remboursant, le client détruit progressivement cette monnaie créée.",
          ],
        },
        {
          sousTitre: "2. La diffusion dans l'économie",
          texte: "La monnaie créée circule et alimente d'autres dépôts, ce qui amplifie le mécanisme.",
          liste: [
            "L'emprunteur paie son fournisseur : la somme quitte sa banque.",
            "Le fournisseur la dépose dans la sienne : un nouveau dépôt apparaît.",
            "Cette banque peut prêter une partie de ce dépôt, après avoir conservé les réserves obligatoires.",
            "Le processus se répète : c'est le multiplicateur de crédit.",
          ],
        },
        {
          sousTitre: "3. Un exemple chiffré",
          texte: "Un dépôt initial de 1 000 000 Ar, avec une part conservée de 20 % :",
          liste: [
            "Dépôt initial : 1 000 000 Ar. La banque conserve 200 000 Ar et prête 800 000 Ar.",
            "L'emprunteur paie un fournisseur, qui dépose 800 000 Ar : sa banque conserve 160 000 Ar et prête 640 000 Ar.",
            "Le cycle continue : 512 000 Ar, puis 409 600 Ar…",
            "La création totale tend vers 1 000 000 ÷ 0,20 = 5 000 000 Ar de monnaie créée au maximum.",
          ],
        },
        {
          sousTitre: "4. Les limites du mécanisme",
          texte: "La création monétaire n'est pas illimitée : plusieurs freins la contiennent.",
          liste: [
            "Les réserves obligatoires fixées par la banque centrale.",
            "Les retraits d'espèces demandés par les clients : ils réduisent les réserves disponibles.",
            "Le risque de défaut : une banque prudente refuse les crédits douteux.",
            "Le taux directeur de la banque centrale : plus il est élevé, plus le refinancement coûte cher.",
          ],
        },
        {
          sousTitre: "5. Création monétaire et hausse des prix",
          texte: "Créer de la monnaie stimule l'activité, mais trop de monnaie poursuivant trop peu de biens fait monter les prix.",
          liste: [
            "Une création modérée accompagne la croissance de la production.",
            "Une création excessive alimente la hausse des prix et réduit le pouvoir d'achat.",
            "La banque centrale surveille l'évolution de la masse monétaire et des prix.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une banque crée de la monnaie en…", opts: ["accordant un crédit", "imprimant des billets", "encaissant des impôts"], ok: 0, expl: "Le crédit inscrit un dépôt nouveau au compte de l'emprunteur." },
          { q: "Les réserves obligatoires sont…", opts: ["la part des dépôts que la banque doit conserver", "les bénéfices mis en réserve", "les dépôts des clients"], ok: 0, expl: "Elles limitent la capacité de prêt de la banque." },
          { q: "Le remboursement d'un crédit…", opts: ["détruit de la monnaie", "crée de la monnaie", "n'a aucun effet"], ok: 0, expl: "La monnaie créée disparaît au fur et à mesure du remboursement." },
          { q: "Une création monétaire excessive favorise…", opts: ["la hausse des prix", "la baisse des prix", "la disparition du crédit"], ok: 0, expl: "Trop de monnaie pour trop peu de biens fait monter les prix." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Pour prêter, une banque utilise obligatoirement les dépôts de ses autres clients.", rep: false, expl: "Le crédit crée le dépôt : il n'est pas prélevé sur les dépôts existants." },
          { txt: "Les crédits font les dépôts.", rep: true, expl: "Le dépôt naît au moment de l'octroi du crédit." },
          { txt: "Plus la part conservée est faible, plus la création monétaire potentielle est grande.", rep: true, expl: "Le multiplicateur est d'autant plus fort que la réserve obligatoire est faible." },
          { txt: "La banque centrale n'a aucun moyen d'agir sur la création monétaire.", rep: false, expl: "Elle fixe les réserves obligatoires et le taux de refinancement." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds en rédigeant le calcul.", pointsPar: 2, items: [
          { q: "Explique en trois étapes comment un crédit de 5 000 000 Ar augmente la masse monétaire.", r: "La banque inscrit 5 000 000 Ar au compte de l'emprunteur ; ce dépôt nouveau augmente la masse monétaire ; l'emprunteur paie son fournisseur, qui dépose la somme dans sa propre banque." },
          { q: "Dépôt initial 1 000 000 Ar, part conservée 20 % : quelle est la création monétaire maximale ?", r: "Création maximale = 1 000 000 ÷ 0,20 = 5 000 000 Ar." },
          { q: "Cite deux limites à la création monétaire.", r: "Les réserves obligatoires fixées par la banque centrale et le risque de défaut, qui pousse la banque à refuser les crédits douteux." },
          { q: "Pourquoi une création monétaire excessive est-elle dangereuse ?", r: "Parce que trop de monnaie pour trop peu de biens disponibles fait monter les prix et réduit le pouvoir d'achat." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "En accordant un crédit, la banque crée un", suite: "dépôt" },
          { debut: "La part des dépôts que la banque ne peut pas prêter est la réserve", suite: "obligatoire" },
          { debut: "Rembourser un crédit détruit de la", suite: "monnaie" },
          { debut: "Une création excessive alimente la hausse des", suite: "prix" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 18 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Banque centrale et banques commerciales",
      theme: "Monnaie et financement",
      ras: "Déterminer l'utilité de la création monétaire",
      valeurs: "Persévérance, Responsabilité",
      objectif: "distinguer le rôle de la banque centrale de celui des banques commerciales",
      supportMeta: "Documents sur les institutions monétaires, tableau comparatif, cahier",
      revision: [
        ["Comment une banque crée-t-elle de la monnaie ?", "En accordant un crédit, qui inscrit un dépôt nouveau."],
        ["Qu'est-ce que les réserves obligatoires ?", "La part des dépôts que chaque banque doit conserver sans la prêter."],
      ],
      mise: [
        "Qui décide de la quantité de monnaie et du coût de l'argent dans un pays ?",
        "La banque centrale, qui agit sur les banques commerciales par ses taux et ses réserves.",
      ],
      observation: "le tableau comparatif banque centrale / banques commerciales",
      observationSupport: "Tableau comparatif des rôles (institution publique / établissements de crédit)",
      technAna: "Étude de document et questionnement dirigé",
      qa: [
        ["Qu'est-ce que la banque centrale ?", "L'institution publique qui émet la monnaie nationale, conduit la politique monétaire et veille à la stabilité du système financier."],
        ["Quelles sont ses missions principales ?", "Émettre les billets, fixer le taux directeur et les réserves obligatoires, refinancer les banques et détenir les réserves du pays."],
        ["Qu'est-ce qu'une banque commerciale ?", "Un établissement de crédit qui reçoit des dépôts du public et accorde des crédits aux ménages et aux entreprises."],
        ["Quelle différence y a-t-il entre les deux ?", "La banque centrale ne s'adresse pas au public : elle est la banque des banques et de l'État. Les banques commerciales sont les intermédiaires entre déposants et emprunteurs."],
        ["Qu'est-ce que le taux directeur ?", "Le taux auquel la banque centrale prête aux banques commerciales ; il influence tous les autres taux de l'économie."],
        ["Comment la banque centrale agit-elle sur le crédit ?", "En relevant son taux, elle renchérit le refinancement : les banques prêtent moins et plus cher. En le baissant, elle rend le crédit plus accessible."],
        ["Que fait la banque centrale en cas de crise de liquidité ?", "Elle fournit des liquidités aux banques pour éviter qu'une panne de confiance ne bloque les paiements : elle joue le rôle de prêteur en dernier ressort."],
      ],
      synthese: "Donc, la banque centrale est l'institution publique qui émet la monnaie, fixe le taux directeur et les réserves obligatoires, et refinance les banques. Les banques commerciales, elles, collectent les dépôts du public et accordent les crédits. Le taux directeur se transmet aux crédits distribués à l'économie.",
      motsCles: ["banque centrale", "banque commerciale", "taux directeur", "réserves obligatoires", "refinancement", "prêteur en dernier ressort", "stabilité financière"],
      image: { file: "t11_u2_banques.png", legende: "Figure 16 — Banque centrale et banques commerciales." },
      contenu: [
        {
          sousTitre: "1. La banque centrale",
          texte: "La banque centrale est une institution publique : elle n'a pas pour but de réaliser un profit, mais de garantir la stabilité de la monnaie et du système financier.",
          liste: [
            "Émission des billets et des pièces : elle a le privilège de la monnaie fiduciaire.",
            "Conduite de la politique monétaire : elle fixe le taux directeur et les réserves obligatoires.",
            "Refinancement des banques : elle leur prête les liquidités dont elles manquent.",
            "Gestion des réserves du pays et surveillance du système bancaire.",
          ],
        },
        {
          sousTitre: "2. Les banques commerciales",
          texte: "Les banques commerciales sont des entreprises dont le métier est l'intermédiation : elles transforment des dépôts en crédits.",
          liste: [
            "Elles collectent l'épargne : comptes courants, livrets, dépôts à terme.",
            "Elles accordent des crédits : trésorerie, équipement, immobilier, consommation.",
            "Elles rendent des services de paiement : virements, cartes, chèques.",
            "Elles se rémunèrent par la différence entre le taux des crédits et celui des dépôts.",
          ],
        },
        {
          sousTitre: "3. Du taux directeur au crédit bancaire",
          texte: "La chaîne de transmission est simple à retenir : banque centrale → banques → ménages et entreprises.",
          liste: [
            "La banque centrale relève son taux directeur.",
            "Le refinancement des banques coûte plus cher.",
            "Les banques relèvent à leur tour le taux de leurs crédits.",
            "Les ménages et les entreprises empruntent moins : la demande et les prix sont freinés.",
          ],
        },
        {
          sousTitre: "4. Le rôle de prêteur en dernier ressort",
          texte: "En période de tension, la banque centrale fournit des liquidités pour éviter qu'une banque solvable ne soit emportée par une panique.",
          liste: [
            "Une ruée aux guichets peut mettre en difficulté une banque pourtant solvable.",
            "La banque centrale prête contre garantie pour rétablir la confiance.",
            "Cette fonction suppose une surveillance : elle ne protège pas les banques imprudentes.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Une décision de politique monétaire :",
          liste: [
            "La banque centrale relève son taux directeur de 0,5 point.",
            "Les banques empruntent plus cher et relèvent le taux de leurs crédits.",
            "Un artisan renonce à acheter une machine : son investissement est reporté.",
            "La demande ralentit, la pression sur les prix se réduit.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La banque centrale a pour mission…", opts: ["d'émettre la monnaie et de conduire la politique monétaire", "d'accorder des crédits aux ménages", "de vendre des assurances"], ok: 0, expl: "Elle est la banque des banques et de l'État." },
          { q: "Une banque commerciale se rémunère surtout par…", opts: ["l'écart entre le taux des crédits et celui des dépôts", "l'impôt", "la vente de billets"], ok: 0, expl: "C'est le cœur du métier d'intermédiation." },
          { q: "Le taux directeur est fixé par…", opts: ["la banque centrale", "chaque banque commerciale", "les clients"], ok: 0, expl: "Il sert de référence à tous les autres taux." },
          { q: "Quand la banque centrale relève son taux…", opts: ["le crédit devient plus cher", "le crédit devient gratuit", "les dépôts disparaissent"], ok: 0, expl: "Le refinancement des banques coûte davantage." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La banque centrale accorde des crédits aux particuliers.", rep: false, expl: "Elle s'adresse aux banques et à l'État, pas au public." },
          { txt: "Les banques commerciales transforment des dépôts en crédits.", rep: true, expl: "C'est la fonction d'intermédiation." },
          { txt: "Le taux directeur influence les taux pratiqués par les banques.", rep: true, expl: "Il se transmet à toute l'économie." },
          { txt: "Le prêteur en dernier ressort protège toutes les banques, même imprudentes.", rep: false, expl: "Il intervient contre garantie et sous surveillance." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite trois missions de la banque centrale.", r: "Émettre la monnaie fiduciaire, fixer le taux directeur et les réserves obligatoires, refinancer les banques et surveiller le système financier." },
          { q: "Quelle différence y a-t-il entre une banque centrale et une banque commerciale ?", r: "La banque centrale est une institution publique, banque des banques et de l'État, tandis que la banque commerciale est une entreprise qui collecte des dépôts et accorde des crédits." },
          { q: "Décris la chaîne de transmission du taux directeur.", r: "La banque centrale fixe son taux ; les banques se refinancent plus ou moins cher ; elles ajustent le taux de leurs crédits ; ménages et entreprises empruntent davantage ou moins." },
          { q: "Qu'est-ce que le rôle de prêteur en dernier ressort ?", r: "C'est la fourniture de liquidités par la banque centrale à une banque en difficulté temporaire, pour éviter qu'une panique ne bloque les paiements." },
        ]},
        { type: "appariement", consigne: "Relie chaque institution à son rôle.", pointsPar: 1, items: [
          { g: ["Émettre les billets", "Accorder un crédit à un artisan", "Fixer le taux directeur", "Recevoir des dépôts du public"], d: ["Banque commerciale", "Banque centrale", "Banque commerciale", "Banque centrale"], pairs: [[0, 1], [1, 0], [2, 3], [3, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 19 — RAS 3
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Besoin et capacité de financement",
      theme: "Monnaie et financement",
      ras: "Evaluer les modes de financement de l'économie",
      valeurs: "Persévérance, Responsabilité",
      objectif: "distinguer besoin de financement et capacité de financement des agents économiques",
      supportMeta: "Tableaux d'exemples d'agents, documents, cahier",
      revision: [
        ["Qu'est-ce que la banque centrale ?", "L'institution publique qui émet la monnaie et conduit la politique monétaire."],
        ["Comment se transmet le taux directeur ?", "De la banque centrale aux banques, puis aux crédits des ménages et des entreprises."],
      ],
      mise: [
        "Une entreprise veut acheter une machine mais n'a pas l'argent. Un ménage, lui, met de côté chaque mois. Qui finance qui ?",
        "Le ménage épargnant dispose d'une capacité de financement ; l'entreprise exprime un besoin de financement.",
      ],
      observation: "le tableau des agents et de leur situation financière",
      observationSupport: "Tableau des agents (ménages, entreprises, État) et de leur besoin ou capacité de financement",
      technAna: "Étude de document et questionnement dirigé",
      qa: [
        ["Qu'est-ce qu'un besoin de financement ?", "La situation d'un agent dont les emplois — investissements, consommation — dépassent les ressources disponibles : il doit emprunter."],
        ["Qu'est-ce qu'une capacité de financement ?", "La situation d'un agent dont les ressources — épargne, revenus non consommés — dépassent ses dépenses : il peut prêter ou placer."],
        ["Quels agents ont le plus souvent besoin de financement ?", "Les entreprises, qui investissent avant d'encaisser les recettes, et l'État, quand ses dépenses dépassent ses recettes."],
        ["Quels agents dégagent le plus souvent une capacité de financement ?", "Les ménages, dont une part du revenu est épargnée, et les entreprises qui dégagent un bénéfice non distribué."],
        ["Comment les deux situations se rencontrent-elles ?", "Par le système financier : banques et marchés collectent l'épargne disponible et la mettent à la disposition de ceux qui en ont besoin."],
        ["Que se passe-t-il si l'épargne disponible est insuffisante ?", "Le coût de l'argent monte : les taux s'élèvent et certains projets sont reportés ou abandonnés."],
        ["Pourquoi le financement est-il indispensable à la croissance ?", "Parce qu'il permet d'investir aujourd'hui — une machine, un atelier — et de rembourser grâce aux recettes futures."],
      ],
      synthese: "Donc, un agent est en besoin de financement quand ses dépenses dépassent ses ressources ; il est en capacité de financement quand son épargne dépasse ses dépenses. Le système financier met en relation les deux : c'est la fonction essentielle du financement de l'économie.",
      motsCles: ["besoin de financement", "capacité de financement", "épargne", "investissement", "système financier", "taux d'intérêt", "intermédiation"],
      image: { file: "t11_u2_financement.png", legende: "Figure 17 — Besoin et capacité de financement des agents." },
      contenu: [
        {
          sousTitre: "1. Le besoin de financement",
          texte: "Un agent est en besoin de financement lorsqu'il dépense plus qu'il ne dispose dans la période.",
          liste: [
            "Une entreprise achète une machine avant d'en tirer des recettes.",
            "Un ménage construit sa maison avant de l'avoir entièrement payée.",
            "L'État finance une route dont l'usage s'étalera sur des années.",
            "Dans tous les cas, il faut trouver les fonds : emprunter ou faire appel à des capitaux.",
          ],
        },
        {
          sousTitre: "2. La capacité de financement",
          texte: "À l'inverse, un agent dégage une capacité de financement lorsqu'il ne dépense pas tout ce qu'il gagne.",
          liste: [
            "Un ménage qui épargne chaque mois une part de son revenu.",
            "Une entreprise qui conserve une partie de son bénéfice.",
            "Un investisseur institutionnel qui collecte des cotisations.",
            "Cette épargne cherche un placement : dépôt, obligation, action.",
          ],
        },
        {
          sousTitre: "3. La rencontre par le système financier",
          texte: "Le système financier a pour fonction de transformer l'épargne disponible en moyens de financement.",
          liste: [
            "Intermédiation : les banques collectent les dépôts et prêtent.",
            "Désintermédiation : les agents se rencontrent directement sur le marché financier.",
            "Dans les deux cas, le prix de l'argent est le taux d'intérêt.",
          ],
        },
        {
          sousTitre: "4. Quand l'épargne manque",
          texte: "Si les capacités de financement sont insuffisantes face aux besoins, le prix de l'argent monte.",
          liste: [
            "Les taux s'élèvent : seuls les projets les plus rentables sont financés.",
            "Certains projets sont reportés : l'investissement ralentit.",
            "Le pays peut faire appel à l'épargne extérieure : prêts, investissements étrangers.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Trois agents, trois situations :",
          liste: [
            "Une coopérative achète une décortiqueuse : besoin de financement de 8 000 000 Ar.",
            "Un instituteur place 200 000 Ar par mois : capacité de financement.",
            "Une banque collecte ces dépôts et prête à la coopérative : intermédiation.",
            "Le taux du crédit rémunère le déposant et couvre le risque pris par la banque.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Un agent dont les dépenses dépassent les ressources est en…", opts: ["besoin de financement", "capacité de financement", "situation d'équilibre"], ok: 0, expl: "Il doit emprunter pour réaliser son projet." },
          { q: "Un ménage qui épargne dégage…", opts: ["une capacité de financement", "un besoin de financement", "une dette"], ok: 0, expl: "Son épargne est disponible pour financer d'autres agents." },
          { q: "Le système financier sert à…", opts: ["mettre en relation épargne et financement", "distribuer des salaires", "fixer les prix des biens"], ok: 0, expl: "C'est sa fonction économique essentielle." },
          { q: "Quand l'épargne disponible est insuffisante…", opts: ["le taux d'intérêt a tendance à monter", "le crédit devient gratuit", "l'État rembourse les dettes"], ok: 0, expl: "La rareté de l'épargne renchérit le financement." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une entreprise qui investit dégage toujours une capacité de financement.", rep: false, expl: "Elle est au contraire en besoin de financement avant d'avoir encaissé les recettes." },
          { txt: "L'épargne des ménages peut financer l'investissement des entreprises.", rep: true, expl: "C'est le rôle du système financier de les mettre en relation." },
          { txt: "Le financement permet d'investir aujourd'hui et de rembourser plus tard.", rep: true, expl: "Le crédit avance les recettes futures." },
          { txt: "Le taux d'intérêt n'a aucun lien avec l'équilibre entre épargne et besoins.", rep: false, expl: "Il est le prix qui équilibre l'offre et la demande de fonds." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis le besoin de financement.", r: "C'est la situation d'un agent dont les dépenses dépassent les ressources disponibles : il doit emprunter." },
          { q: "Définis la capacité de financement.", r: "C'est la situation d'un agent dont l'épargne dépasse les dépenses : il peut prêter ou placer." },
          { q: "Cite un agent souvent en besoin de financement et un agent souvent en capacité, en expliquant pourquoi.", r: "L'entreprise investit avant d'encaisser ses recettes ; le ménage épargne une part de son revenu." },
          { q: "Que se passe-t-il quand l'épargne disponible est insuffisante face aux besoins ?", r: "Le taux d'intérêt monte, ce qui renchérit le crédit et fait reporter certains projets." },
        ]},
        { type: "appariement", consigne: "Relie chaque situation à sa qualification.", pointsPar: 1, items: [
          { g: ["Une entreprise achète une machine à crédit", "Un ménage place son épargne", "L'État construit une route financée par emprunt", "Une coopérative conserve son bénéfice"], d: ["Capacité de financement", "Besoin de financement", "Capacité de financement", "Besoin de financement"], pairs: [[0, 1], [1, 0], [2, 3], [3, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 20 — RAS 3
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le financement interne : l'autofinancement",
      theme: "Monnaie et financement",
      ras: "Evaluer les modes de financement de l'économie",
      valeurs: "Persévérance, Responsabilité",
      objectif: "définir l'autofinancement et en mesurer les avantages et les limites",
      supportMeta: "Comptes de résultat simplifiés, documents, cahier",
      revision: [
        ["Qu'est-ce qu'un besoin de financement ?", "La situation d'un agent dont les dépenses dépassent les ressources disponibles."],
        ["Comment le système financier relie-t-il épargne et investissement ?", "Par l'intermédiation bancaire et par le marché financier."],
      ],
      mise: [
        "Une entreprise peut-elle se financer sans aucune banque ?",
        "Oui, si elle dégage assez de bénéfices et d'amortissements : c'est l'autofinancement.",
      ],
      observation: "le compte de résultat simplifié présentant la part conservée",
      observationSupport: "Comptes de résultat simplifiés montrant bénéfice, amortissements et autofinancement",
      technAna: "Étude de document et calcul dirigé",
      qa: [
        ["Qu'est-ce que le financement interne ?", "Le financement assuré par les ressources propres de l'entreprise : le bénéfice conservé et les amortissements."],
        ["Qu'est-ce que l'autofinancement ?", "La part du résultat que l'entreprise conserve, à laquelle s'ajoutent les amortissements : c'est la ressource interne disponible pour investir."],
        ["Pourquoi les amortissements financent-ils l'entreprise ?", "Parce qu'ils constatent l'usure d'un bien déjà payé : l'argent correspondant reste dans la trésorerie jusqu'au renouvellement."],
        ["Quels sont les avantages de l'autofinancement ?", "Il est gratuit, immédiat, ne crée pas de dette et préserve l'indépendance de l'entreprise."],
        ["Quelles sont ses limites ?", "Il dépend du résultat, il est souvent insuffisant pour un gros investissement et il peut freiner la croissance s'il est systématiquement privilégié."],
        ["Comment une entreprise augmente-t-elle son autofinancement ?", "En améliorant sa productivité, en réduisant les gaspillages, en distribuant moins de dividendes ou en étalant ses investissements."],
        ["Une entreprise très autofinancée est-elle toujours en bonne santé ?", "Pas forcément : un autofinancement faible peut traduire une phase de croissance coûteuse, et un autofinancement élevé peut masquer un manque d'investissement."],
      ],
      synthese: "Donc, l'autofinancement réunit le bénéfice conservé et les amortissements : c'est la ressource interne de l'entreprise. Il ne coûte rien et préserve l'indépendance, mais il dépend du résultat et reste souvent insuffisant pour financer de gros investissements.",
      motsCles: ["financement interne", "autofinancement", "bénéfice conservé", "amortissement", "trésorerie", "indépendance financière", "capacité d'investissement"],
      image: { file: "t11_u2_autofinancement.png", legende: "Figure 18 — Le financement interne : de la ressource à l'autofinancement." },
      contenu: [
        {
          sousTitre: "1. Les ressources internes de l'entreprise",
          texte: "L'entreprise crée elle-même une partie des ressources qu'elle investit, sans faire appel à un financeur extérieur.",
          liste: [
            "Le bénéfice de l'exercice, lorsqu'il n'est pas distribué.",
            "Les amortissements, qui conservent dans l'entreprise la valeur de l'usure du matériel.",
            "Les provisions et réserves constituées les années précédentes.",
          ],
        },
        {
          sousTitre: "2. Calculer l'autofinancement",
          texte: "L'autofinancement s'obtient simplement à partir du compte de résultat.",
          liste: [
            "Autofinancement = bénéfice net conservé + dotations aux amortissements.",
            "Exemple : bénéfice net 3 500 000 Ar, dividendes 1 000 000 Ar, amortissements 1 100 000 Ar.",
            "Autofinancement = (3 500 000 − 1 000 000) + 1 100 000 = 3 600 000 Ar.",
            "Cette somme est disponible pour investir ou pour renforcer la trésorerie.",
          ],
        },
        {
          sousTitre: "3. Les avantages",
          texte: "Le financement interne est souvent le premier réflexe quand il est disponible.",
          liste: [
            "Aucun intérêt à payer, aucune garantie à fournir.",
            "Indépendance préservée : aucun engagement envers un prêteur.",
            "Rapidité : la ressource est déjà dans l'entreprise.",
            "Signal positif : une entreprise capable de s'autofinancer inspire confiance aux banques.",
          ],
        },
        {
          sousTitre: "4. Les limites",
          texte: "L'autofinancement ne suffit pas toujours, et son absence n'est pas toujours un signe de faiblesse.",
          liste: [
            "Il dépend du résultat : une mauvaise année le réduit à néant.",
            "Un gros investissement dépasse souvent la capacité interne.",
            "Se financer uniquement sur ses ressources peut ralentir la croissance.",
            "Une entreprise en croissance rapide a souvent besoin de ressources externes, sans que ce soit un signe de difficulté.",
          ],
        },
        {
          sousTitre: "5. Renforcer la capacité interne",
          texte: "Plusieurs leviers permettent d'augmenter la ressource disponible sans recourir à l'emprunt.",
          liste: [
            "Améliorer la marge : réduire les coûts, valoriser la production.",
            "Limiter la distribution des dividendes en période d'investissement.",
            "Étaler les investissements et hiérarchiser les projets.",
            "Réduire le besoin en fonds de roulement : stocks et créances mieux gérés.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "L'autofinancement est assuré par…", opts: ["les ressources propres de l'entreprise", "un emprunt bancaire", "une augmentation de capital"], ok: 0, expl: "Bénéfice conservé et amortissements sont des ressources internes." },
          { q: "Les amortissements financent l'entreprise car…", opts: ["ils gardent dans l'entreprise la valeur de l'usure", "ils sont versés en espèces", "ils augmentent les dettes"], ok: 0, expl: "Aucune sortie d'argent ne les accompagne." },
          { q: "Parmi les avantages de l'autofinancement, on compte…", opts: ["l'indépendance préservée", "le paiement d'intérêts", "l'obligation de fournir des garanties"], ok: 0, expl: "Aucun engagement envers un prêteur n'est pris." },
          { q: "Un investissement important est souvent…", opts: ["supérieur à la capacité d'autofinancement", "toujours financé en interne", "financé par les dividendes"], ok: 0, expl: "Il faut alors compléter par un financement externe." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une entreprise qui s'autofinance ne paie pas d'intérêts.", rep: true, expl: "Elle utilise ses propres ressources." },
          { txt: "Distribuer davantage de dividendes augmente l'autofinancement.", rep: false, expl: "Le dividende est prélevé sur le bénéfice, donc sur la ressource interne." },
          { txt: "Le recours à l'emprunt est toujours le signe d'une difficulté.", rep: false, expl: "Une entreprise en croissance emprunte souvent pour financer ses investissements." },
          { txt: "Les amortissements n'entraînent aucune sortie d'argent.", rep: true, expl: "La dépense a eu lieu lors de l'achat du bien." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds en rédigeant le calcul.", pointsPar: 2, items: [
          { q: "Bénéfice net 3 500 000 Ar, dividendes 1 000 000 Ar, amortissements 1 100 000 Ar. Calcule l'autofinancement.", r: "Autofinancement = (3 500 000 − 1 000 000) + 1 100 000 = 3 600 000 Ar." },
          { q: "Pourquoi les amortissements sont-ils une ressource de financement ?", r: "Parce qu'ils constatent l'usure d'un bien déjà payé : aucune sortie d'argent ne les accompagne, la somme reste disponible." },
          { q: "Cite deux avantages et deux limites de l'autofinancement.", r: "Avantages : aucun intérêt à payer et indépendance préservée. Limites : il dépend du résultat et reste souvent insuffisant pour un gros investissement." },
          { q: "Comment une entreprise peut-elle augmenter sa capacité d'autofinancement ?", r: "En améliorant sa marge, en réduisant les dividendes distribués pendant la phase d'investissement et en étalant ses projets." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["autofinancement", "amortissements", "dividendes", "interne", "trésorerie"], items: [
          { phrase: "Le bénéfice conservé et les amortissements forment l'_________.", mot: "autofinancement" },
          { phrase: "Les _________ constatent l'usure du matériel sans sortie d'argent.", mot: "amortissements" },
          { phrase: "Distribuer moins de _________ laisse plus de ressources dans l'entreprise.", mot: "dividendes" },
          { phrase: "Le financement interne renforce la _________ disponible.", mot: "trésorerie" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 21 — RAS 3
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le financement externe intermédié : le crédit bancaire",
      theme: "Monnaie et financement",
      ras: "Evaluer les modes de financement de l'économie",
      valeurs: "Persévérance, Responsabilité",
      objectif: "décrire le rôle de la banque dans le financement intermédié et lire un plan de remboursement",
      supportMeta: "Exemples de contrats de prêt, tableau d'amortissement simplifié, cahier",
      revision: [
        ["Qu'est-ce que l'autofinancement ?", "Le bénéfice conservé augmenté des amortissements."],
        ["Cite une limite de l'autofinancement.", "Il dépend du résultat et reste insuffisant pour un gros investissement."],
      ],
      mise: [
        "Une coopérative veut une machine de 8 millions mais n'en a que 3. Que fait-elle ?",
        "Elle emprunte le reste à sa banque, qu'elle rembourse par mensualités avec des intérêts.",
      ],
      observation: "l'exemple de tableau d'amortissement distribué en classe",
      observationSupport: "Exemple de contrat de prêt et tableau d'amortissement simplifié",
      technAna: "Étude de cas et calcul dirigé",
      qa: [
        ["Qu'est-ce que le financement intermédié ?", "Un financement qui passe par un intermédiaire financier — en pratique une banque — entre l'épargnant et l'emprunteur."],
        ["Quel est le rôle de la banque ?", "Elle collecte les dépôts, évalue le risque de l'emprunteur, accorde le crédit et en suit le remboursement."],
        ["Que contient un contrat de prêt ?", "Le montant, la durée, le taux, les modalités de remboursement, les garanties demandées et les conséquences d'un défaut."],
        ["Qu'est-ce qu'une garantie ?", "Un bien ou un engagement apporté par l'emprunteur — caution, hypothèque, nantissement — qui permet à la banque de se rembourser en cas de défaillance."],
        ["Comment se répartit une mensualité ?", "Une part rembourse le capital, l'autre paie les intérêts ; au début, les intérêts dominent."],
        ["Quels crédits la banque accorde-t-elle aux entreprises ?", "Le crédit de trésorerie, le crédit d'équipement, le crédit immobilier et les facilités de caisse."],
        ["Comment la banque se rémunère-t-elle ?", "Par l'écart entre le taux du crédit et celui des dépôts, ainsi que par les frais de dossier et de service."],
        ["Quels sont les avantages et limites du crédit bancaire ?", "Avantages : rapidité, souplesse, financement adapté. Limites : intérêts à payer, garanties exigées, endettement qui pèse sur la trésorerie."],
      ],
      synthese: "Donc, le financement intermédié passe par une banque qui transforme des dépôts en crédits, évalue le risque et exige souvent des garanties. L'emprunteur rembourse par échéances qui mêlent capital et intérêts. Le crédit permet d'investir, mais il crée une dette qu'il faut savoir rembourser.",
      motsCles: ["financement intermédié", "crédit bancaire", "intermédiation", "garantie", "caution", "échéance", "taux"],
      image: { file: "t11_u2_credit.png", legende: "Figure 19 — Le crédit bancaire : de l'épargne collectée au prêt accordé." },
      contenu: [
        {
          sousTitre: "1. L'intermédiation bancaire",
          texte: "La banque se place entre l'épargnant et l'emprunteur : c'est la définition du financement intermédié.",
          liste: [
            "Elle collecte l'épargne auprès de nombreux déposants.",
            "Elle prête à des emprunteurs qu'elle a sélectionnés.",
            "Elle supporte le risque de défaut : c'est son métier et sa responsabilité.",
            "Elle transforme des dépôts à court terme en crédits à moyen et long terme.",
          ],
        },
        {
          sousTitre: "2. Le contrat de prêt",
          texte: "Tout crédit repose sur un contrat écrit qui fixe les engagements des deux parties.",
          liste: [
            "Le montant emprunté et la durée de remboursement.",
            "Le taux d'intérêt : fixe ou variable.",
            "La périodicité des échéances : mensuelle, trimestrielle.",
            "Les garanties : caution, hypothèque, nantissement du matériel.",
            "Les conséquences du non-remboursement : pénalités, exigibilité anticipée, saisie.",
          ],
        },
        {
          sousTitre: "3. Le tableau d'amortissement",
          texte: "Le tableau d'amortissement détaille, échéance par échéance, la répartition entre capital remboursé et intérêts payés.",
          liste: [
            "Exemple : prêt de 5 000 000 Ar sur 4 ans au taux annuel de 12 %.",
            "Annuité constante d'environ 1 646 000 Ar (capital + intérêts).",
            "Première année : intérêts 600 000 Ar, capital remboursé 1 046 000 Ar.",
            "Dernière année : intérêts faibles, capital restant presque intégralement remboursé.",
          ],
        },
        {
          sousTitre: "4. Les principaux crédits aux entreprises",
          texte: "Les besoins diffèrent selon l'objet financé, et les crédits aussi.",
          liste: [
            "Crédit de trésorerie : financer le décalage entre achats et ventes.",
            "Crédit d'équipement : acheter une machine, un véhicule.",
            "Crédit immobilier : construire ou acheter des locaux.",
            "Facilités de caisse et ligne de découvert : faire face à un besoin ponctuel.",
          ],
        },
        {
          sousTitre: "5. Avantages et limites du crédit",
          texte: "Emprunter est un levier puissant, qui doit rester mesuré.",
          liste: [
            "Avantages : investir sans attendre, lisser la charge dans le temps, garder sa trésorerie.",
            "Limites : intérêts à payer, garanties exigées, engagement irréversible.",
            "Règle de prudence : la charge de remboursement doit rester supportable par l'activité.",
            "Un crédit se rembourse avec les recettes futures : il faut donc évaluer le projet avant de signer.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le financement intermédié passe par…", opts: ["une banque", "la bourse", "la famille uniquement"], ok: 0, expl: "La banque s'interpose entre épargnants et emprunteurs." },
          { q: "Une garantie sert à…", opts: ["permettre à la banque de se rembourser en cas de défaillance", "augmenter le taux d'intérêt", "supprimer les intérêts"], ok: 0, expl: "Caution, hypothèque ou nantissement sécurisent le prêt." },
          { q: "Dans une annuité constante, la part des intérêts…", opts: ["diminue au fil du remboursement", "augmente sans cesse", "reste la même"], ok: 0, expl: "Les intérêts se calculent sur le capital restant dû." },
          { q: "Un crédit d'équipement finance…", opts: ["l'achat d'une machine", "le salaire du gardien", "les impôts de l'entreprise"], ok: 0, expl: "Il finance un investissement durable." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La banque supporte le risque de défaut de l'emprunteur.", rep: true, expl: "C'est le cœur du métier d'intermédiation." },
          { txt: "Le taux d'un crédit est toujours fixe.", rep: false, expl: "Il peut être fixe ou variable selon le contrat." },
          { txt: "Un crédit permet d'investir avant d'avoir encaissé les recettes.", rep: true, expl: "C'est précisément son intérêt pour l'entreprise." },
          { txt: "Plus un crédit est important, meilleure est la situation de l'entreprise.", rep: false, expl: "Il faut comparer la dette à la capacité de remboursement." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis le financement intermédié.", r: "C'est un financement qui passe par un intermédiaire financier — une banque — placé entre l'épargnant et l'emprunteur." },
          { q: "Cite quatre éléments d'un contrat de prêt.", r: "Le montant, la durée, le taux d'intérêt, la périodicité des échéances et les garanties demandées." },
          { q: "Explique l'évolution de la répartition capital / intérêts dans une annuité constante.", r: "Au début, les intérêts dominent car ils portent sur un capital restant dû élevé ; au fil des échéances, la part du capital remboursé augmente et celle des intérêts diminue." },
          { q: "Cite un avantage et une limite du crédit bancaire.", r: "Avantage : il permet d'investir sans attendre les recettes. Limite : il crée une dette avec des intérêts et parfois des garanties à fournir." },
        ]},
        { type: "appariement", consigne: "Relie chaque besoin au crédit correspondant.", pointsPar: 1, items: [
          { g: ["Acheter une machine", "Payer les fournisseurs avant les ventes", "Construire un atelier", "Faire face à un besoin ponctuel"], d: ["Crédit de trésorerie", "Crédit immobilier", "Facilité de caisse", "Crédit d'équipement"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
    },
    // ---------------------------------------------------------
    // SÉANCE 22 — RAS 3
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le financement externe désintermédié : le marché financier",
      theme: "Monnaie et financement",
      ras: "Evaluer les modes de financement de l'économie",
      valeurs: "Persévérance, Responsabilité",
      objectif: "distinguer financement intermédié et désintermédié, et décrire le rôle du marché financier",
      supportMeta: "Documents sur les actions et obligations, étude de cas, cahier",
      revision: [
        ["Qu'est-ce que le financement intermédié ?", "Un financement qui passe par un intermédiaire, en pratique une banque."],
        ["Cite deux éléments d'un contrat de prêt.", "Le montant et la durée (ou le taux, les garanties)."],
      ],
      mise: [
        "Une grande entreprise peut-elle se financer sans passer par une banque ?",
        "Oui : elle émet des actions ou des obligations, souscrites directement par des épargnants ou des investisseurs.",
      ],
      observation: "les documents présentant une action et une obligation",
      observationSupport: "Documents sur les actions, les obligations et le fonctionnement d'un marché financier",
      technAna: "Étude de document, débat dirigé et questionnement",
      qa: [
        ["Qu'est-ce que le financement désintermédié ?", "Un financement obtenu directement sur le marché financier, sans passer par un intermédiaire bancaire : l'emprunteur rencontre directement les apporteurs de capitaux."],
        ["Qu'est-ce qu'une action ?", "Un titre de propriété : celui qui la détient possède une fraction de l'entreprise et peut recevoir un dividende."],
        ["Qu'est-ce qu'une obligation ?", "Un titre de créance : l'émetteur emprunte et s'engage à rembourser à une échéance, en versant des intérêts."],
        ["Quelle différence y a-t-il entre action et obligation ?", "L'actionnaire est propriétaire et partage le risque ; l'obligataire est créancier, il connaît à l'avance le taux et l'échéance."],
        ["Qu'est-ce qu'une augmentation de capital ?", "L'opération par laquelle l'entreprise émet de nouvelles actions pour apporter des fonds nouveaux aux actionnaires existants ou à de nouveaux investisseurs."],
        ["Quels sont les avantages du marché financier ?", "Il permet de réunir des montants importants, souvent à long terme, et il diversifie les sources de financement de l'entreprise."],
        ["Quelles sont ses limites pour une petite entreprise ?", "L'accès suppose une taille suffisante, une transparence comptable et des coûts d'introduction souvent dissuasifs : la banque reste le partenaire habituel des petites structures."],
      ],
      synthese: "Donc, le financement désintermédié met directement en relation l'entreprise qui cherche des fonds et les épargnants, par actions ou par obligations. L'action fait entrer de nouveaux propriétaires, l'obligation crée une dette remboursable à terme. Ce mode reste réservé aux entreprises d'une certaine taille : les petites structures continuent de s'adresser à leur banque.",
      motsCles: ["financement désintermédié", "marché financier", "action", "obligation", "dividende", "augmentation de capital", "échéance"],
      image: { file: "t11_u2_marches.png", legende: "Figure 20 — Financement intermédié et financement désintermédié." },
      contenu: [
        {
          sousTitre: "1. Intermédié et désintermédié",
          texte: "Deux voies mènent des épargnants aux entreprises : l'une passe par la banque, l'autre directement par le marché.",
          liste: [
            "Intermédié : la banque collecte les dépôts et les transforme en crédits.",
            "Désintermédié : l'entreprise émet des titres achetés par les investisseurs.",
            "Les deux coexistent : les grandes entreprises combinent les deux sources.",
          ],
        },
        {
          sousTitre: "2. L'action : un titre de propriété",
          texte: "Acheter une action, c'est devenir propriétaire d'une fraction de l'entreprise.",
          liste: [
            "L'actionnaire partage les résultats : il peut recevoir un dividende.",
            "Il partage aussi le risque : la valeur de l'action varie avec la situation de l'entreprise.",
            "Il participe aux décisions par son droit de vote en assemblée générale.",
            "Une augmentation de capital apporte des fonds nouveaux sans créer de dette.",
          ],
        },
        {
          sousTitre: "3. L'obligation : un titre de créance",
          texte: "Souscrire une obligation, c'est prêter à l'entreprise émettrice.",
          liste: [
            "L'obligataire connaît le taux d'intérêt et la durée de l'emprunt.",
            "Il est remboursé à l'échéance prévue.",
            "En cas de défaillance, il est remboursé avant les actionnaires.",
            "L'entreprise conserve ses propriétaires : l'obligation ne dilue pas le capital.",
          ],
        },
        {
          sousTitre: "4. Action ou obligation : deux logiques",
          texte: "Le choix dépend du projet, de la situation financière et de la volonté des dirigeants.",
          liste: [
            "Action : pas de remboursement obligatoire, mais partage du capital et du risque.",
            "Obligation : dette à rembourser, mais contrôle de l'entreprise préservé.",
            "Une entreprise très endettée privilégiera les fonds propres, et inversement.",
          ],
        },
        {
          sousTitre: "5. Les conditions d'accès",
          texte: "Le marché financier n'est pas accessible à toutes les entreprises : il suppose transparence et taille suffisante.",
          liste: [
            "Des comptes régulièrement publiés et certifiés.",
            "Un historique d'activité permettant d'évaluer le risque.",
            "Des montants assez importants pour couvrir les frais d'émission.",
            "Pour une petite structure : la banque, la microfinance ou l'apport personnel restent les voies réalistes.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une action est…", opts: ["un titre de propriété", "un titre de créance", "un contrat de travail"], ok: 0, expl: "Elle donne une fraction du capital et un droit de vote." },
          { q: "Une obligation est…", opts: ["un titre de créance", "un titre de propriété", "un dépôt bancaire"], ok: 0, expl: "Elle est remboursée à l'échéance, avec intérêts." },
          { q: "Le financement désintermédié…", opts: ["met l'entreprise directement en relation avec les épargnants", "passe obligatoirement par une banque", "est réservé aux ménages"], ok: 0, expl: "Il s'effectue par émission de titres sur le marché." },
          { q: "En cas de difficulté, l'obligataire est remboursé…", opts: ["avant les actionnaires", "après les actionnaires", "jamais"], ok: 0, expl: "Il est créancier, l'actionnaire est propriétaire." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une augmentation de capital crée une dette pour l'entreprise.", rep: false, expl: "Elle apporte des fonds propres, sans obligation de remboursement." },
          { txt: "L'actionnaire partage le risque de l'entreprise.", rep: true, expl: "La valeur de son titre et son dividende varient selon les résultats." },
          { txt: "Le marché financier est accessible sans condition à toute entreprise.", rep: false, expl: "Il suppose transparence comptable et taille suffisante." },
          { txt: "L'obligation ne dilue pas le capital de l'entreprise.", rep: true, expl: "L'obligataire est un créancier, pas un propriétaire." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis le financement désintermédié.", r: "C'est un financement obtenu directement sur le marché financier, par émission d'actions ou d'obligations, sans passer par une banque." },
          { q: "Quelle différence y a-t-il entre une action et une obligation ?", r: "L'action est un titre de propriété qui partage le risque et donne droit au dividende ; l'obligation est un titre de créance remboursé à une échéance, avec intérêts." },
          { q: "Pourquoi une petite entreprise accède-t-elle rarement au marché financier ?", r: "Parce que l'accès suppose des comptes certifiés, une taille suffisante et des montants assez importants pour couvrir les frais d'émission." },
          { q: "Cite un avantage et un inconvénient d'une augmentation de capital.", r: "Avantage : elle apporte des fonds propres sans dette. Inconvénient : elle dilue la part des propriétaires existants." },
        ]},
        { type: "appariement", consigne: "Relie chaque opération à sa conséquence.", pointsPar: 1, items: [
          { g: ["Émettre des actions", "Émettre des obligations", "Souscrire un emprunt bancaire", "Conserver le bénéfice"], d: ["Créer une dette remboursable", "Financement intermédié", "Autofinancement", "Entrer de nouveaux propriétaires"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 23 — RAS 4
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le taux d'intérêt : rôles et calcul des intérêts simples",
      theme: "Monnaie et financement",
      ras: "Déterminer la relation entre le taux d'intérêt, les risques de crédit, la monnaie",
      valeurs: "Persévérance, Responsabilité",
      objectif: "expliquer les rôles du taux d'intérêt et calculer des intérêts simples",
      supportMeta: "Tableaux de calcul d'intérêts, documents bancaires, cahier",
      revision: [
        ["Qu'est-ce qu'une obligation ?", "Un titre de créance remboursé à une échéance, avec intérêts."],
        ["Qu'est-ce que le financement désintermédié ?", "Un financement obtenu directement sur le marché, sans banque."],
      ],
      mise: [
        "Pourquoi accepte-t-on de payer plus que la somme empruntée ?",
        "Parce que le prêteur renonce à utiliser son argent et prend un risque : l'intérêt le rémunère pour les deux.",
      ],
      observation: "le tableau de calcul des intérêts simples affiché au tableau",
      observationSupport: "Tableau de calcul des intérêts simples (capital, taux, durée), affiché ou distribué",
      technAna: "Lecture de tableau et calcul dirigé",
      qa: [
        ["Qu'est-ce que le taux d'intérêt ?", "Le prix de l'argent : la rémunération du prêteur, exprimée en pourcentage du capital prêté pour une période donnée."],
        ["Quels rôles joue-t-il ?", "Il rémunère l'épargne et le renoncement à la consommation, il couvre le risque de non-remboursement, il compense la perte de pouvoir d'achat due à la hausse des prix, et il régule la demande de crédit."],
        ["Comment calcule-t-on des intérêts simples ?", "Intérêt = capital × taux × durée, le taux et la durée étant exprimés dans la même unité de temps : une année."],
        ["Que se passe-t-il si la durée est exprimée en mois ?", "On convertit : la durée en années vaut le nombre de mois divisé par 12. Pour 9 mois, n = 9/12 = 0,75."],
        ["Les intérêts simples sont-ils capitalisés ?", "Non : l'intérêt est calculé uniquement sur le capital initial, contrairement aux intérêts composés."],
        ["Comment varie le taux selon le risque ?", "Plus le risque de non-remboursement est élevé, plus le taux demandé est élevé : c'est la prime de risque."],
        ["Un taux élevé est-il toujours avantageux ?", "Il est avantageux pour le prêteur, coûteux pour l'emprunteur, et il freine l'investissement quand il est trop haut."],
      ],
      synthese: "Donc, le taux d'intérêt est le prix de l'argent : il rémunère le renoncement à la consommation, couvre le risque de défaut et compense la perte de pouvoir d'achat. Avec des intérêts simples, le calcul est Intérêt = capital × taux × durée, les intérêts étant calculés sur le capital initial.",
      motsCles: ["taux d'intérêt", "capital", "durée", "intérêts simples", "prime de risque", "pouvoir d'achat", "coût du crédit"],
      image: { file: "t11_u2_interets.png", legende: "Figure 21 — Le calcul des intérêts simples : capital × taux × durée." },
      contenu: [
        {
          sousTitre: "1. Le prix de l'argent",
          texte: "Le taux d'intérêt mesure ce que coûte un emprunt ou ce que rapporte un placement, en pourcentage du capital sur une période.",
          liste: [
            "Du côté de l'emprunteur : c'est le coût du crédit.",
            "Du côté du prêteur : c'est la rémunération de son épargne.",
            "Il s'exprime en pourcentage par an, sauf indication contraire.",
          ],
        },
        {
          sousTitre: "2. Les rôles du taux d'intérêt",
          texte: "Quatre fonctions économiques se combinent dans un même taux.",
          liste: [
            "Rémunérer le renoncement : le prêteur n'utilise pas son argent pendant la durée du prêt.",
            "Rémunérer le risque : plus le risque de défaut est grand, plus le taux est élevé.",
            "Compenser la hausse des prix : sans cela, l'épargne perdrait son pouvoir d'achat.",
            "Réguler la demande de crédit : un taux élevé freine les emprunts, un taux bas les encourage.",
          ],
        },
        {
          sousTitre: "3. La formule des intérêts simples",
          texte: "Intérêt = capital × taux × durée. Le taux est écrit en décimales et la durée en années.",
          liste: [
            "Exemple : un capital de 2 000 000 Ar placé à 6 % pendant 3 ans.",
            "I = 2 000 000 × 0,06 × 3 = 360 000 Ar.",
            "Le capital reste identique chaque année : l'intérêt n'est pas capitalisé.",
          ],
        },
        {
          sousTitre: "4. Durées inférieures à l'année",
          texte: "La formule reste la même, à condition de convertir la durée en années.",
          liste: [
            "Exemple : 5 000 000 Ar empruntés à 12 % pendant 9 mois.",
            "n = 9 ÷ 12 = 0,75 an.",
            "I = 5 000 000 × 0,12 × 0,75 = 450 000 Ar.",
            "Pour une durée en jours, on divise par 360 dans la convention commerciale usuelle.",
          ],
        },
        {
          sousTitre: "5. Taux et risque",
          texte: "Deux emprunteurs ne paient jamais forcément le même taux : la différence s'appelle la prime de risque.",
          liste: [
            "Un emprunteur stable, avec des garanties, obtient un taux plus bas.",
            "Un projet incertain ou un emprunteur sans historique paiera davantage.",
            "C'est pourquoi la microfinance pratique souvent des taux plus élevés : risque et coût de suivi plus grands.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le taux d'intérêt est…", opts: ["le prix de l'argent", "le prix d'un bien", "un impôt"], ok: 0, expl: "Il rémunère le prêteur et coûte à l'emprunteur." },
          { q: "Intérêts simples : I = C × t × n. Pour 2 000 000 Ar à 6 % pendant 3 ans, I vaut…", opts: ["360 000 Ar", "36 000 Ar", "3 600 000 Ar"], ok: 0, expl: "I = 2 000 000 × 0,06 × 3 = 360 000 Ar." },
          { q: "Une durée de 9 mois s'écrit, en années…", opts: ["0,75", "9", "0,9"], ok: 0, expl: "9 ÷ 12 = 0,75." },
          { q: "Plus le risque de non-remboursement est élevé…", opts: ["plus le taux demandé est élevé", "plus le taux baisse", "le taux ne change pas"], ok: 0, expl: "C'est la prime de risque." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Les intérêts simples se calculent sur le capital initial.", rep: true, expl: "Ils ne sont pas capitalisés, contrairement aux intérêts composés." },
          { txt: "Le taux d'intérêt ne dépend jamais du risque.", rep: false, expl: "La prime de risque est une composante du taux." },
          { txt: "Un taux élevé freine la demande de crédit.", rep: true, expl: "Il renchérit le coût du financement." },
          { txt: "Le taux d'intérêt compense aussi la perte de pouvoir d'achat.", rep: true, expl: "Sans cette compensation, prêter ferait perdre de la valeur." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds en rédigeant le calcul.", pointsPar: 2, items: [
          { q: "Calcule l'intérêt d'un capital de 2 000 000 Ar placé à 6 % pendant 3 ans.", r: "I = 2 000 000 × 0,06 × 3 = 360 000 Ar." },
          { q: "Calcule l'intérêt d'un emprunt de 5 000 000 Ar à 12 % pendant 9 mois.", r: "n = 9 ÷ 12 = 0,75 an ; I = 5 000 000 × 0,12 × 0,75 = 450 000 Ar." },
          { q: "Un prêt de 1 500 000 Ar à 10 % rapporte 225 000 Ar d'intérêts. Quelle est la durée ?", r: "n = 225 000 ÷ (1 500 000 × 0,10) = 225 000 ÷ 150 000 = 1,5 an, soit 18 mois." },
          { q: "Cite trois rôles du taux d'intérêt.", r: "Rémunérer le renoncement à la consommation, couvrir le risque de non-remboursement et compenser la perte de pouvoir d'achat (il régule aussi la demande de crédit)." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["capital", "taux", "durée", "risque", "épargne"], items: [
          { phrase: "Intérêt = _________ × taux × durée.", mot: "capital" },
          { phrase: "Le _________ s'exprime en pourcentage par an.", mot: "taux" },
          { phrase: "La _________ se convertit en années dans la formule.", mot: "durée" },
          { phrase: "La prime de _________ explique l'écart de taux entre deux emprunteurs.", mot: "risque" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 24 — RAS 4
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La valeur acquise : capital, taux, durée, échéance",
      theme: "Monnaie et financement",
      ras: "Déterminer la relation entre le taux d'intérêt, les risques de crédit, la monnaie",
      valeurs: "Persévérance, Responsabilité",
      objectif: "calculer la valeur acquise d'un capital placé à intérêts simples",
      supportMeta: "Tableaux de valeurs acquises, documents bancaires, cahier",
      revision: [
        ["Quelle est la formule des intérêts simples ?", "Intérêt = capital × taux × durée."],
        ["Que devient une durée de 9 mois dans la formule ?", "0,75 an."],
      ],
      mise: [
        "Tu places 1 000 000 Ar à 8 % pendant 2 ans. Combien retrouves-tu à la fin ?",
        "Le capital, plus les intérêts : c'est la valeur acquise du placement.",
      ],
      observation: "le tableau des valeurs acquises affiché au tableau",
      observationSupport: "Tableau capital / intérêts / valeur acquise, affiché ou distribué",
      technAna: "Lecture de tableau et calcul dirigé",
      qa: [
        ["Qu'est-ce que la valeur acquise ?", "La somme que l'on obtient à l'échéance : le capital initial augmenté des intérêts acquis."],
        ["Comment la calcule-t-on ?", "Valeur acquise = capital + intérêts = capital × (1 + taux × durée)."],
        ["Que désigne l'échéance ?", "La date à laquelle le capital et les intérêts sont dus, ou à laquelle le placement arrive à terme."],
        ["Comment la valeur acquise évolue-t-elle avec la durée ?", "Elle augmente linéairement : à taux égal, doubler la durée double les intérêts."],
        ["Comment évolue-t-elle avec le taux ?", "Elle augmente proportionnellement au taux : un taux doublé double les intérêts."],
        ["Que devient la valeur acquise d'un emprunt ?", "C'est la somme totale à rembourser : capital emprunté plus intérêts dus."],
        ["Comment comparer deux placements de durées différentes ?", "En calculant pour chacun la valeur acquise à la même échéance, ou le taux annuel rapporté au capital."],
      ],
      synthese: "Donc, la valeur acquise est la somme obtenue à l'échéance : le capital augmenté des intérêts simples, soit capital × (1 + taux × durée). Elle croît proportionnellement au taux et à la durée. Pour un emprunteur, c'est la somme totale à rembourser.",
      motsCles: ["valeur acquise", "capital", "intérêts", "échéance", "durée", "remboursement", "placement"],
      image: { file: "t11_u2_valeur.png", legende: "Figure 22 — Valeur acquise : capital et intérêts à l'échéance." },
      contenu: [
        {
          sousTitre: "1. Du capital à la valeur acquise",
          texte: "À l'échéance, le créancier reçoit son capital et les intérêts correspondants : l'ensemble forme la valeur acquise.",
          liste: [
            "Valeur acquise = capital + intérêts.",
            "Avec I = C × t × n, on obtient VA = C × (1 + t × n).",
            "Pour un placement, c'est la somme encaissée ; pour un emprunt, la somme due.",
          ],
        },
        {
          sousTitre: "2. Un exemple complet",
          texte: "Un capital de 1 000 000 Ar placé à 8 % pendant 2 ans :",
          liste: [
            "Intérêts : I = 1 000 000 × 0,08 × 2 = 160 000 Ar.",
            "Valeur acquise : VA = 1 000 000 + 160 000 = 1 160 000 Ar.",
            "On peut aussi écrire VA = 1 000 000 × (1 + 0,08 × 2) = 1 160 000 Ar.",
          ],
        },
        {
          sousTitre: "3. Lire un tableau de valeurs acquises",
          texte: "Le tableau permet de comparer rapidement plusieurs durées.",
          liste: [
            "Capital 1 000 000 Ar, taux 8 % : VA à 1 an = 1 080 000 Ar.",
            "À 2 ans : 1 160 000 Ar. À 3 ans : 1 240 000 Ar. À 5 ans : 1 400 000 Ar.",
            "La progression est constante : 80 000 Ar d'intérêts par année.",
          ],
        },
        {
          sousTitre: "4. L'échéance",
          texte: "L'échéance fixe la date de remboursement ou de disponibilité des fonds. Elle est un engagement du contrat.",
          liste: [
            "Une échéance courte : le capital est remboursé vite, la charge d'intérêts est faible.",
            "Une échéance longue : la charge d'intérêts totale augmente, mais l'effort périodique diminue.",
            "Un remboursement anticipé peut être prévu, parfois avec une pénalité.",
          ],
        },
        {
          sousTitre: "5. Choisir entre deux offres",
          texte: "Comparer deux offres suppose de ramener les conditions à une mesure commune.",
          liste: [
            "Même capital et même durée : comparer les taux.",
            "Durées différentes : comparer la valeur acquise à chaque échéance, ou le taux annuel.",
            "Tenir compte des frais : frais de dossier, assurance, pénalités de retard.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La valeur acquise est égale à…", opts: ["capital + intérêts", "capital − intérêts", "intérêts − capital"], ok: 0, expl: "C'est la somme obtenue à l'échéance." },
          { q: "1 000 000 Ar à 8 % pendant 2 ans donnent une valeur acquise de…", opts: ["1 160 000 Ar", "1 080 000 Ar", "1 800 000 Ar"], ok: 0, expl: "I = 160 000 Ar, donc VA = 1 160 000 Ar." },
          { q: "Aux intérêts simples, si la durée double…", opts: ["les intérêts doublent", "les intérêts quadruplent", "les intérêts diminuent"], ok: 0, expl: "La progression est linéaire." },
          { q: "L'échéance est…", opts: ["la date à laquelle le capital et les intérêts sont dus", "le montant emprunté", "le taux du contrat"], ok: 0, expl: "Elle fixe la fin de l'opération." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La valeur acquise d'un emprunt est la somme totale à rembourser.", rep: true, expl: "Capital plus intérêts dus." },
          { txt: "Aux intérêts simples, les intérêts se cumulent d'une année sur l'autre.", rep: false, expl: "Ils sont calculés uniquement sur le capital initial." },
          { txt: "Allonger la durée d'un placement augmente la valeur acquise.", rep: true, expl: "Les intérêts s'accumulent avec le temps." },
          { txt: "Comparer deux offres suppose de tenir compte des frais.", rep: true, expl: "Frais de dossier et assurance modifient le coût réel." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds en rédigeant le calcul.", pointsPar: 2, items: [
          { q: "Calcule la valeur acquise d'un capital de 1 000 000 Ar placé à 8 % pendant 2 ans.", r: "VA = 1 000 000 × (1 + 0,08 × 2) = 1 160 000 Ar." },
          { q: "Même capital à 8 % pendant 5 ans : quelle valeur acquise ?", r: "VA = 1 000 000 × (1 + 0,08 × 5) = 1 400 000 Ar." },
          { q: "Un emprunt de 3 000 000 Ar à 10 % est remboursé au bout de 18 mois. Quelle somme totale faut-il rembourser ?", r: "n = 1,5 an ; VA = 3 000 000 × (1 + 0,10 × 1,5) = 3 000 000 × 1,15 = 3 450 000 Ar." },
          { q: "Comment comparer deux placements de durées différentes ?", r: "En calculant pour chacun la valeur acquise à la même échéance, ou en ramenant les conditions à un taux annuel comparable." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Valeur acquise = capital × (1 + taux ×", suite: "durée)" },
          { debut: "Pour un emprunteur, la valeur acquise est la somme totale à", suite: "rembourser" },
          { debut: "La date de remboursement prévue au contrat est l'", suite: "échéance" },
          { debut: "Aux intérêts simples, la progression de la valeur acquise est", suite: "linéaire" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 25 — RAS 4
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Taux d'intérêt nominal et taux d'intérêt réel",
      theme: "Monnaie et financement",
      ras: "Déterminer la relation entre le taux d'intérêt, les risques de crédit, la monnaie",
      valeurs: "Persévérance, Responsabilité",
      objectif: "distinguer taux nominal et taux réel et mesurer l'effet de la hausse des prix",
      supportMeta: "Tableaux taux / inflation, documents, cahier",
      revision: [
        ["Qu'est-ce que la valeur acquise ?", "La somme obtenue à l'échéance : capital plus intérêts."],
        ["Comment calcule-t-on les intérêts simples ?", "I = capital × taux × durée."],
      ],
      mise: [
        "Un placement rapporte 8 % mais les prix montent de 10 % dans l'année. A-t-on gagné ?",
        "Non : en pouvoir d'achat, on a perdu : le taux réel est négatif.",
      ],
      observation: "le tableau comparant taux affiché et hausse des prix",
      observationSupport: "Tableau taux nominal / hausse des prix / taux réel, affiché ou distribué",
      technAna: "Lecture de tableau et calcul dirigé",
      qa: [
        ["Qu'est-ce que le taux d'intérêt nominal ?", "Le taux affiché dans le contrat, celui qui sert au calcul des intérêts versés en monnaie."],
        ["Qu'est-ce que le taux d'intérêt réel ?", "Le taux nominal diminué de la hausse des prix : il mesure le gain réel en pouvoir d'achat."],
        ["Comment le calcule-t-on simplement ?", "Taux réel ≈ taux nominal − taux de hausse des prix."],
        ["Que se passe-t-il quand la hausse des prix dépasse le taux nominal ?", "Le taux réel est négatif : l'épargnant perd du pouvoir d'achat malgré les intérêts perçus."],
        ["Pourquoi cette distinction est-elle importante pour un emprunteur ?", "Parce qu'un emprunt à taux fixe coûte moins cher quand les prix augmentent : la dette est remboursée en monnaie dévaluée."],
        ["Que devient le taux réel si les prix baissent ?", "Il devient supérieur au taux nominal : le pouvoir d'achat du créancier augmente."],
        ["Comment un prêteur se protège-t-il ?", "En intégrant l'évolution attendue des prix au taux nominal demandé, ou en indexant le contrat."],
      ],
      synthese: "Donc, le taux nominal est le taux affiché, celui qui calcule les intérêts versés ; le taux réel en retranche la hausse des prix et mesure le gain en pouvoir d'achat. Quand la hausse des prix dépasse le taux nominal, le taux réel devient négatif : le prêteur perd et l'emprunteur gagne.",
      motsCles: ["taux nominal", "taux réel", "hausse des prix", "pouvoir d'achat", "indexation", "épargne", "dette"],
      image: { file: "t11_u2_taux.png", legende: "Figure 23 — Taux nominal, hausse des prix et taux réel." },
      contenu: [
        {
          sousTitre: "1. Le taux nominal",
          texte: "C'est le taux inscrit au contrat : celui qui détermine les sommes effectivement versées.",
          liste: [
            "Un prêt à 12 % : 12 % est le taux nominal.",
            "Un livret rémunéré à 5 % : 5 % est le taux nominal.",
            "Il ne dit rien, à lui seul, du gain en pouvoir d'achat.",
          ],
        },
        {
          sousTitre: "2. Le taux réel",
          texte: "Le taux réel rapporte les intérêts perçus à l'évolution du pouvoir d'achat.",
          liste: [
            "Taux réel ≈ taux nominal − taux de hausse des prix.",
            "Exemple : taux nominal 8 %, hausse des prix 10 % → taux réel ≈ −2 %.",
            "L'épargnant reçoit des intérêts, mais il peut acheter moins qu'avant.",
            "Exemple inverse : taux nominal 8 %, hausse des prix 3 % → taux réel ≈ +5 %.",
          ],
        },
        {
          sousTitre: "3. Qui gagne, qui perd ?",
          texte: "La hausse des prix redistribue silencieusement entre prêteurs et emprunteurs.",
          liste: [
            "Hausse des prix plus forte que prévu : l'emprunteur à taux fixe gagne, le prêteur perd.",
            "Hausse des prix plus faible que prévu : le prêteur gagne, l'emprunteur rembourse plus cher en pouvoir d'achat.",
            "C'est pourquoi les contrats de long terme prévoient souvent une révision ou une indexation.",
          ],
        },
        {
          sousTitre: "4. Se protéger",
          texte: "Plusieurs dispositifs limitent le risque lié à l'évolution des prix.",
          liste: [
            "Le taux variable : il suit un indice de référence.",
            "L'indexation : les sommes dues évoluent avec un indice défini au contrat.",
            "La durée courte : elle limite l'exposition au risque de prix.",
            "Une prime de risque intégrée dès la signature du contrat.",
          ],
        },
        {
          sousTitre: "Exemple chiffré",
          texte: "Un prêt de 4 000 000 Ar sur un an, à 9 %, dans une année où les prix montent de 6 % :",
          liste: [
            "Intérêts versés : 4 000 000 × 0,09 = 360 000 Ar.",
            "Valeur acquise : 4 360 000 Ar.",
            "Taux réel ≈ 9 % − 6 % = 3 % : le gain réel du prêteur est de 3 % en pouvoir d'achat.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le taux nominal est…", opts: ["le taux affiché au contrat", "le taux corrigé des prix", "le taux de change"], ok: 0, expl: "Il sert au calcul des intérêts versés." },
          { q: "Taux nominal 8 %, hausse des prix 10 % : le taux réel est d'environ…", opts: ["−2 %", "+2 %", "+18 %"], ok: 0, expl: "8 − 10 = −2 % : le prêteur perd du pouvoir d'achat." },
          { q: "Un taux réel négatif signifie que…", opts: ["le pouvoir d'achat diminue", "les prix baissent", "le prêt est remboursé"], ok: 0, expl: "La hausse des prix dépasse le taux perçu." },
          { q: "Quand la hausse des prix est plus forte que prévu, un emprunteur à taux fixe…", opts: ["gagne en pouvoir d'achat", "perd en pouvoir d'achat", "ne change rien"], ok: 0, expl: "Il rembourse en monnaie dévaluée." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le taux réel mesure le gain en pouvoir d'achat.", rep: true, expl: "Il retranche la hausse des prix du taux nominal." },
          { txt: "Un taux nominal élevé garantit un taux réel élevé.", rep: false, expl: "Tout dépend du niveau de la hausse des prix." },
          { txt: "Un contrat à taux variable suit un indice de référence.", rep: true, expl: "Il permet de s'adapter à l'évolution des conditions." },
          { txt: "L'indexation protège contre l'évolution des prix.", rep: true, expl: "Les sommes dues évoluent avec l'indice prévu." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds en rédigeant le calcul.", pointsPar: 2, items: [
          { q: "Taux nominal 8 %, hausse des prix 3 % : quel est le taux réel ?", r: "Taux réel ≈ 8 % − 3 % = 5 %." },
          { q: "Taux nominal 9 %, hausse des prix 12 % : que se passe-t-il pour le prêteur ?", r: "Taux réel ≈ −3 % : le prêteur perd du pouvoir d'achat malgré les intérêts perçus." },
          { q: "Un prêt de 4 000 000 Ar à 9 % sur un an, dans une année de hausse des prix de 6 % : calcule les intérêts et le taux réel.", r: "Intérêts = 4 000 000 × 0,09 = 360 000 Ar ; taux réel ≈ 9 % − 6 % = 3 %." },
          { q: "Cite deux moyens de se protéger contre le risque de hausse des prix.", r: "Le taux variable indexé sur une référence et l'indexation des sommes dues, ou encore le choix d'une durée courte." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["nominal", "réel", "pouvoir d'achat", "indexation", "négatif"], items: [
          { phrase: "Le taux affiché au contrat est le taux _________.", mot: "nominal" },
          { phrase: "Le taux _________ mesure le gain en pouvoir d'achat.", mot: "réel" },
          { phrase: "Quand les prix montent plus vite que le taux, le taux réel est _________.", mot: "négatif" },
          { phrase: "L'_________ fait évoluer les sommes dues selon un indice.", mot: "indexation" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 26 — RAS 4
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les risques de crédit",
      theme: "Monnaie et financement",
      ras: "Déterminer la relation entre le taux d'intérêt, les risques de crédit, la monnaie",
      valeurs: "Persévérance, Responsabilité",
      objectif: "identifier les risques de crédit et les moyens de les prévenir",
      supportMeta: "Études de cas de crédits, documents bancaires, cahier",
      revision: [
        ["Quelle est la différence entre taux nominal et taux réel ?", "Le taux nominal est affiché ; le taux réel retranche la hausse des prix."],
        ["Que devient le taux réel si les prix montent plus vite que le taux ?", "Il devient négatif : le prêteur perd du pouvoir d'achat."],
      ],
      mise: [
        "Une banque prête à un artisan : que risque-t-elle, et comment s'en protège-t-elle ?",
        "Elle risque de ne pas être remboursée ; elle étudie le dossier, demande des garanties et fixe un taux adapté.",
      ],
      observation: "les études de cas de demandes de crédit distribuées en classe",
      observationSupport: "Études de cas de demandes de crédit et grilles d'analyse du risque",
      technAna: "Étude de cas, débat dirigé et jeu de rôle",
      qa: [
        ["Qu'est-ce que le risque de crédit ?", "Le risque que l'emprunteur ne rembourse pas, totalement ou partiellement, aux échéances prévues."],
        ["Quels sont les autres risques liés au crédit ?", "Le risque de taux — une hausse renchérit un emprunt à taux variable ; le risque de liquidité — l'impossibilité de faire face à une échéance ; et le risque de change pour les emprunts en devises."],
        ["Comment la banque évalue-t-elle le risque ?", "En étudiant la capacité de remboursement, l'historique de l'emprunteur, la qualité du projet et les garanties disponibles."],
        ["Quels signaux d'alerte repère-t-on ?", "Des revenus irréguliers, un endettement déjà lourd, des incidents de paiement antérieurs, un projet mal chiffré ou des fonds propres insuffisants."],
        ["Quels moyens de protection existe-t-il ?", "Les garanties — caution, hypothèque, nantissement —, le cautionnement solidaire, l'assurance, et le taux qui intègre une prime de risque."],
        ["Qu'est-ce que la caution solidaire ?", "L'engagement pris par une ou plusieurs personnes de rembourser à la place de l'emprunteur défaillant ; c'est la base du crédit de groupe en microfinance."],
        ["Comment un emprunteur réduit-il son risque ?", "En empruntant le juste montant, en choisissant une durée adaptée, en constituant un apport personnel et en prévoyant une marge pour les imprévus."],
        ["Que se passe-t-il en cas de défaut ?", "La banque applique les pénalités prévues, peut exiger le remboursement anticipé et faire jouer les garanties ; l'emprunteur perd sa crédibilité pour les crédits futurs."],
      ],
      synthese: "Donc, le risque de crédit est le risque de non-remboursement, auquel s'ajoutent le risque de taux, le risque de liquidité et le risque de change. La banque l'évalue par l'étude du dossier, l'exige de garanties et une prime de risque dans le taux. L'emprunteur, lui, se protège en empruntant le juste nécessaire.",
      motsCles: ["risque de crédit", "risque de taux", "risque de liquidité", "garantie", "caution solidaire", "défaut", "prime de risque"],
      image: { file: "t11_u2_risques.png", legende: "Figure 24 — Les risques de crédit et les moyens de les prévenir." },
      contenu: [
        {
          sousTitre: "1. Le risque de défaut",
          texte: "C'est le risque central : l'emprunteur ne rembourse pas à l'échéance.",
          liste: [
            "Causes fréquentes : perte de revenu, maladie, mauvaise récolte, échec du projet financé.",
            "Conséquence pour le prêteur : la perte des sommes prêtées et des intérêts attendus.",
            "Conséquence pour l'emprunteur : pénalités, exclusion du crédit, saisie éventuelle des garanties.",
          ],
        },
        {
          sousTitre: "2. Les autres risques",
          texte: "Le non-remboursement n'est pas le seul danger lié au crédit.",
          liste: [
            "Risque de taux : sur un crédit à taux variable, une hausse augmente la charge à rembourser.",
            "Risque de liquidité : l'emprunteur ne peut pas faire face à une échéance même s'il est solvable à terme.",
            "Risque de change : un emprunt en devise étrangère coûte plus cher si la monnaie nationale se déprécie.",
          ],
        },
        {
          sousTitre: "3. L'évaluation du risque",
          texte: "Avant d'accorder un crédit, la banque analyse méthodiquement le dossier.",
          liste: [
            "La capacité de remboursement : comparer les échéances aux revenus attendus.",
            "L'historique : incidents de paiement, ancienneté de la relation bancaire.",
            "Le projet : cohérence, chiffrage, perspectives de recettes.",
            "Les fonds propres : un apport personnel montre l'engagement de l'emprunteur.",
            "Les garanties disponibles : caution, hypothèque, nantissement.",
          ],
        },
        {
          sousTitre: "4. Les moyens de protection",
          texte: "Le risque ne se supprime pas : il se couvre et se répartit.",
          liste: [
            "Les garanties réelles : hypothèque sur un bien, nantissement du matériel.",
            "Les garanties personnelles : caution d'un tiers, caution solidaire d'un groupe.",
            "L'assurance : elle couvre le décès, l'invalidité ou la perte d'emploi.",
            "La prime de risque : un taux plus élevé compense un risque plus grand.",
          ],
        },
        {
          sousTitre: "5. Emprunter de façon responsable",
          texte: "Le meilleur moyen de limiter le risque reste la prudence au moment de s'engager.",
          liste: [
            "Emprunter le montant strictement nécessaire au projet.",
            "Choisir une durée qui rend l'échéance supportable par l'activité.",
            "Prévoir une marge pour les imprévus : une mauvaise saison, une réparation.",
            "Lire le contrat : taux, frais, pénalités, conditions de remboursement anticipé.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le risque de crédit est…", opts: ["le risque de non-remboursement", "le risque de chute des ventes", "le risque d'inondation"], ok: 0, expl: "C'est le risque principal pris par le prêteur." },
          { q: "Sur un crédit à taux variable, une hausse du taux augmente…", opts: ["la charge de remboursement", "le capital emprunté", "la durée du contrat"], ok: 0, expl: "C'est le risque de taux." },
          { q: "Une caution solidaire est…", opts: ["l'engagement de rembourser à la place de l'emprunteur", "une assurance obligatoire", "un dépôt d'espèces"], ok: 0, expl: "Elle est largement utilisée dans le crédit de groupe." },
          { q: "Pour réduire son risque, l'emprunteur doit…", opts: ["emprunter le juste nécessaire", "emprunter le maximum possible", "cacher ses autres dettes"], ok: 0, expl: "Le montant et la durée doivent rester adaptés au projet." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Un apport personnel est un signal défavorable pour la banque.", rep: false, expl: "Il montre l'engagement de l'emprunteur et réduit le risque." },
          { txt: "La prime de risque se traduit par un taux plus élevé.", rep: true, expl: "Elle compense la probabilité de défaut." },
          { txt: "Le risque de liquidité est l'impossibilité de faire face à une échéance.", rep: true, expl: "Même un emprunteur solvable peut en être victime." },
          { txt: "En cas de défaut, l'emprunteur conserve intacte sa capacité d'emprunt.", rep: false, expl: "Il perd sa crédibilité pour les crédits futurs." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis le risque de crédit et cite deux de ses causes.", r: "C'est le risque de non-remboursement. Causes fréquentes : la perte de revenu, une maladie, une mauvaise récolte ou l'échec du projet financé." },
          { q: "Cite trois éléments qu'une banque examine avant d'accorder un crédit.", r: "La capacité de remboursement, l'historique de l'emprunteur et les garanties disponibles (ainsi que la qualité du projet et les fonds propres)." },
          { q: "Quelle différence y a-t-il entre risque de taux et risque de liquidité ?", r: "Le risque de taux est lié à une hausse du taux sur un crédit variable ; le risque de liquidité est l'impossibilité de faire face à une échéance à un moment donné." },
          { q: "Cite deux règles d'un emprunt responsable.", r: "Emprunter le montant strictement nécessaire et choisir une durée qui rend l'échéance supportable par l'activité." },
        ]},
        { type: "appariement", consigne: "Relie chaque risque à son illustration.", pointsPar: 1, items: [
          { g: ["Un client ne rembourse plus", "Le taux variable augmente", "Une échéance ne peut être payée", "La monnaie nationale se déprécie"], d: ["Risque de taux", "Risque de liquidité", "Risque de change", "Risque de crédit"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
    },
  ],
};

module.exports = U;
