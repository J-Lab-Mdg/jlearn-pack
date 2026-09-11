// ============================================================
// Unité III — Coordination par le marché et par l'État
// (PE T11 série OSE — 28 heures)
// RAS 1 : Fonction du marché concurrentiel
// RAS 2 : Efficacité d'un marché concurrentiel
// RAS 3 : Déterminer les différentes imperfections et les défaillances du marché
// RAS 4 : Expliquer les raisons de l'intervention de l'État dans l'économie
// Découpage : 13 séances de cours + 1 révision + 1 sujet d'examen
// Valeurs : Responsabilité, Justice et équité
// ============================================================

const U = {
  num: "III",
  titre: "Coordination par le marché et par l'État",
  ras: "Fonction du marché concurrentiel · Efficacité d'un marché concurrentiel · Déterminer les différentes imperfections et les défaillances du marché · Expliquer les raisons de l'intervention de l'État dans l'économie",
  valeurs: "Responsabilité, Justice et équité",
  duree: "28 heures",
  themes: [
    "Le marché : offreurs et demandeurs",
    "La demande : loi et courbe",
    "L'offre : loi et courbe",
    "L'équilibre du marché : prix et quantité",
    "Les conditions de la concurrence pure et parfaite",
    "Les structures de marché",
    "Le gain à l'échange",
    "Le surplus de production",
    "Les imperfections du marché",
    "L'asymétrie d'information",
    "Externalités négatives et biens collectifs",
    "L'intervention de l'État dans l'économie",
    "Les politiques conjoncturelles",
  ],
  topics: [
    // ---------------------------------------------------------
    // SÉANCE 29 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le marché : offreurs et demandeurs",
      theme: "Coordination par le marché et par l'État",
      ras: "Fonction du marché concurrentiel",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "définir le marché et distinguer les offreurs des demandeurs",
      supportMeta: "Documents sur le marché local, étude de cas, cahier",
      revision: [
        ["Qu'est-ce que la monnaie fiduciaire ?", "La monnaie matérielle : les billets et les pièces."],
        ["Cite une fonction de la monnaie.", "Intermédiaire des échanges, unité de compte ou réserve de valeur."],
      ],
      mise: [
        "Au marché du quartier, à quel moment le prix du riz monte-t-il ?",
        "Quand le riz manque et que beaucoup de gens veulent l'acheter : le prix grimpe. C'est le marché qui fixe le prix.",
      ],
      observation: "les documents présentant un marché local et les échanges qui s'y déroulent",
      observationSupport: "Documents et images sur un marché local malgache, tableaux de prix affichés",
      technAna: "Étude de document, jeu de rôle et débat dirigé",
      qa: [
        ["Qu'est-ce qu'un marché ?", "Un lieu, réel ou virtuel, où se rencontrent des offreurs et des demandeurs pour échanger un bien ou un service contre un prix."],
        ["Qui sont les offreurs ?", "Ceux qui proposent le bien ou le service : producteurs, commerçants, prestataires de service."],
        ["Qui sont les demandeurs ?", "Ceux qui souhaitent l'acheter : ménages, entreprises, administrations."],
        ["Qu'est-ce que le prix ?", "La somme d'argent qu'il faut donner pour obtenir le bien : il exprime la valeur d'échange et sert de signal."],
        ["Quels marchés connaît-on ?", "Le marché des biens et services, le marché du travail, le marché financier, le marché foncier, le marché des changes."],
        ["Qu'est-ce qu'un marché physique et un marché virtuel ?", "Physique : le marché du quartier où l'on se rencontre. Virtuel : la commande en ligne ou la vente par téléphone, sans lieu de rencontre."],
        ["Pourquoi dit-on que le marché coordonne ?", "Parce que des milliers de décisions individuelles, prises séparément, s'accordent par le prix sans qu'une autorité les impose."],
      ],
      synthese: "Donc, le marché est le lieu réel ou virtuel où se rencontrent l'offre et la demande. Les offreurs proposent un bien ou un service, les demandeurs veulent l'obtenir, et le prix qui se forme coordonne leurs décisions. Le marché fixe le prix et la quantité échangée sans qu'aucune autorité ne les décide.",
      motsCles: ["marché", "offreur", "demandeur", "prix", "échange", "bien et service", "coordination"],
      image: { file: "t11_u3_marche.jpg", legende: "Figure 25 — Un marché local : la rencontre des offreurs et des demandeurs." },
      contenu: [
        {
          sousTitre: "1. Le lieu de la rencontre",
          texte: "Le marché n'est pas forcément un lieu : c'est d'abord une rencontre entre deux intentions contraires.",
          liste: [
            "Un marché physique : le bazary du quartier, le marché de gros, la foire.",
            "Un marché sans lieu : la vente par téléphone, la commande en ligne, l'appel d'offres.",
            "Ce qui compte, c'est que l'acheteur et le vendeur se mettent d'accord sur un prix.",
          ],
        },
        {
          sousTitre: "2. Les deux côtés du marché",
          texte: "Chaque échange met en présence deux catégories d'agents aux intentions opposées.",
          liste: [
            "Les offreurs : ils veulent vendre au meilleur prix — producteurs, commerçants, artisans.",
            "Les demandeurs : ils veulent acheter au meilleur prix — ménages, entreprises, administrations.",
            "Un même agent peut être offreur sur un marché et demandeur sur un autre : un paysan vend son riz et achète du savon.",
            "Sur le marché du travail, les rôles s'inversent : le ménage offre son travail et l'entreprise le demande.",
          ],
        },
        {
          sousTitre: "3. Le prix, signal du marché",
          texte: "Le prix n'est pas seulement une somme à payer : c'est une information.",
          liste: [
            "Il dit aux acheteurs ce que le bien coûte réellement en effort.",
            "Il dit aux vendeurs s'il est intéressant de produire et de proposer davantage.",
            "Quand le bien manque, le prix monte : il rationne la demande et attire de nouveaux offreurs.",
            "Quand le bien abonde, le prix baisse : il encourage l'achat et freine la production.",
          ],
        },
        {
          sousTitre: "4. Des marchés très différents",
          texte: "On ne raisonne pas de la même façon sur tous les marchés, mais la logique reste la même.",
          liste: [
            "Marché des biens et services : riz, savon, transport, coupe de cheveux.",
            "Marché du travail : la force de travail s'échange contre un salaire.",
            "Marché financier : les capitaux s'échangent contre un intérêt ou un dividende.",
            "Marché foncier : la terre s'achète, se vend ou se loue.",
          ],
        },
        {
          sousTitre: "5. Une coordination sans chef",
          texte: "Le marché réalise ce qu'un planificateur ne saurait faire : accorder des décisions dispersées.",
          liste: [
            "Chacun décide seul, selon ses besoins et ses moyens.",
            "Le prix ajuste automatiquement les intentions de chacun.",
            "Aucune autorité ne fixe la quantité à produire : c'est la confrontation offre-demande qui en décide.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Un marché est…", opts: ["le lieu réel ou virtuel de rencontre entre offreurs et demandeurs", "un magasin d'État", "une loi économique"], ok: 0, expl: "C'est la rencontre de deux intentions d'échange." },
          { q: "Sur le marché du travail, le ménage est…", opts: ["offreur de travail", "demandeur de travail", "acheteur de machines"], ok: 0, expl: "Il propose sa force de travail contre un salaire." },
          { q: "Quand un bien manque, son prix a tendance à…", opts: ["monter", "baisser", "rester stable"], ok: 0, expl: "La rareté pousse les acheteurs à surenchérir." },
          { q: "Le prix du marché sert surtout de…", opts: ["signal pour les offreurs et les demandeurs", "salaire du vendeur", "taxe"], ok: 0, expl: "Il renseigne sur la valeur et oriente les décisions." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Un marché peut exister sans lieu physique.", rep: true, expl: "Une vente par téléphone ou en ligne est un échange de marché." },
          { txt: "Un paysan qui vend son riz est un demandeur de riz.", rep: false, expl: "Il est offreur de riz ; il sera demandeur sur un autre marché." },
          { txt: "Le prix est fixé par le vendeur seul sur un marché concurrentiel.", rep: false, expl: "Il résulte de la confrontation de l'offre et de la demande." },
          { txt: "Quand un bien abonde, son prix a tendance à baisser.", rep: true, expl: "Les offreurs se font concurrence pour écouler leur stock." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis le marché.", r: "C'est un lieu réel ou virtuel où se rencontrent des offreurs et des demandeurs pour échanger un bien ou un service contre un prix." },
          { q: "Quelle différence y a-t-il entre un offreur et un demandeur ?", r: "L'offreur propose le bien ou le service, le demandeur veut l'obtenir. Sur le marché du travail, le ménage est offreur et l'entreprise est demandeuse." },
          { q: "Pourquoi dit-on que le prix est un signal ?", r: "Parce qu'il informe les acheteurs sur le coût réel du bien et les vendeurs sur l'intérêt de produire, ce qui oriente les décisions de chacun." },
          { q: "Cite trois marchés différents et ce qui s'y échange.", r: "Le marché des biens et services — riz, savon ; le marché du travail — la force de travail contre un salaire ; le marché financier — les capitaux contre un intérêt ou un dividende." },
        ]},
        { type: "appariement", consigne: "Relie chaque agent à son rôle sur le marché indiqué.", pointsPar: 1, items: [
          { g: ["Ménage sur le marché du travail", "Entreprise sur le marché du travail", "Paysan qui vend son riz", "Client au marché du quartier"], d: ["Demandeur de travail", "Offreur de riz", "Demandeur de riz", "Offreur de travail"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 30 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La demande : loi de la demande et courbe",
      theme: "Coordination par le marché et par l'État",
      ras: "Fonction du marché concurrentiel",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "définir la demande, énoncer la loi de la demande et tracer sa courbe",
      supportMeta: "Tableaux de demande, graphiques, papier millimétré, cahier",
      revision: [
        ["Qu'est-ce qu'un marché ?", "Le lieu réel ou virtuel où se rencontrent offreurs et demandeurs."],
        ["Qui sont les demandeurs ?", "Ceux qui souhaitent acheter le bien : ménages, entreprises, administrations."],
      ],
      mise: [
        "Quand le prix du riz passe de 1 800 Ar à 1 400 Ar le kilo, ta famille en achète-t-elle plus ou moins ?",
        "Plus : à un prix plus bas, on achète davantage. C'est la loi de la demande.",
      ],
      observation: "le tableau de demande affiché au tableau",
      observationSupport: "Tableau de demande (prix / quantité demandée), affiché ou distribué",
      technAna: "Lecture de tableau et tracé de courbe dirigé",
      qa: [
        ["Qu'est-ce que la demande ?", "La quantité d'un bien que les acheteurs sont prêts et capables d'acheter, à un prix donné et pendant une période donnée."],
        ["Qu'énonce la loi de la demande ?", "Quand le prix d'un bien augmente, la quantité demandée diminue ; quand le prix baisse, la quantité demandée augmente."],
        ["Pourquoi la quantité demandée baisse-t-elle quand le prix monte ?", "Parce que les acheteurs se reportent sur d'autres biens, ou renoncent : on appelle cela l'effet de substitution et l'effet de revenu."],
        ["Qu'est-ce qu'un tableau de demande ?", "Un tableau qui indique, pour chaque prix, la quantité que les acheteurs sont prêts à acheter."],
        ["Comment trace-t-on la courbe de demande ?", "Le prix se porte sur l'axe vertical, la quantité sur l'axe horizontal : la courbe est décroissante, elle descend de la gauche vers la droite."],
        ["Qu'est-ce qu'un déplacement le long de la courbe ?", "Un changement de prix : on se déplace sur la même courbe, la quantité demandée varie mais la demande ne change pas."],
        ["Qu'est-ce qu'un déplacement de la courbe ?", "Un changement d'un autre facteur — revenu, goûts, prix d'un autre bien, nombre d'acheteurs : toute la courbe se déplace vers la droite ou vers la gauche."],
      ],
      synthese: "Donc, la demande est la quantité d'un bien que les acheteurs veulent et peuvent acheter à un prix donné. La loi de la demande énonce que la quantité demandée baisse quand le prix monte. Une variation de prix déplace le point le long de la courbe ; une variation du revenu, des goûts ou du nombre d'acheteurs déplace la courbe entière.",
      motsCles: ["demande", "loi de la demande", "quantité demandée", "courbe de demande", "prix", "revenu", "substitution"],
      image: { file: "t11_u3_demande.png", legende: "Figure 26 — La courbe de demande : prix et quantité demandée." },
      contenu: [
        {
          sousTitre: "1. La demande : vouloir et pouvoir",
          texte: "Vouloir un bien ne suffit pas : encore faut-il pouvoir le payer. La demande réunit les deux conditions.",
          liste: [
            "Un désir sans moyens n'est pas une demande effective.",
            "La demande s'exprime toujours pour un prix et une période donnés.",
            "On distingue la demande individuelle — celle d'un acheteur — et la demande globale, qui additionne tous les acheteurs.",
          ],
        },
        {
          sousTitre: "2. La loi de la demande",
          texte: "Deux effets expliquent pourquoi un prix plus bas fait acheter davantage.",
          liste: [
            "L'effet de substitution : le bien devient moins cher que les autres, on s'en sert à leur place.",
            "L'effet de revenu : à prix plus bas, le même budget permet d'acheter plus.",
            "Exemple : le riz passe de 1 800 à 1 400 Ar le kilo ; le ménage en achète 5 kg au lieu de 3 kg.",
          ],
        },
        {
          sousTitre: "3. Le tableau de demande",
          texte: "Le tableau et la courbe disent la même chose sous deux formes.",
          liste: [
            "Prix 2 000 Ar → quantité demandée 10 kg.",
            "Prix 1 600 Ar → 20 kg.",
            "Prix 1 200 Ar → 35 kg.",
            "Prix 800 Ar → 55 kg.",
            "Chaque couple prix-quantité donne un point de la courbe.",
          ],
        },
        {
          sousTitre: "4. Se déplacer sur la courbe",
          texte: "Seul un changement de prix provoque un déplacement le long de la courbe.",
          liste: [
            "Prix plus élevé : on remonte la courbe, la quantité demandée diminue.",
            "Prix plus bas : on descend la courbe, la quantité demandée augmente.",
            "On parle alors de variation de la quantité demandée, et non de variation de la demande.",
          ],
        },
        {
          sousTitre: "5. Déplacer la courbe",
          texte: "Cinq facteurs déplacent la courbe de demande vers la droite ou vers la gauche.",
          liste: [
            "Le revenu des acheteurs : la hausse du revenu déplace la demande des biens normaux vers la droite.",
            "Les goûts et la mode : une campagne de santé fait augmenter la demande de fruits.",
            "Le prix des biens substituables : si le prix du manioc monte, la demande de riz augmente.",
            "Le prix des biens complémentaires : si le prix du sucre monte, la demande de thé baisse.",
            "Le nombre d'acheteurs : l'arrivée d'une nouvelle usine augmente la demande de logements du quartier.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La loi de la demande énonce que…", opts: ["quand le prix monte, la quantité demandée baisse", "quand le prix monte, la quantité demandée augmente", "le prix ne change rien"], ok: 0, expl: "C'est la relation inverse entre prix et quantité demandée." },
          { q: "La courbe de demande est…", opts: ["décroissante", "croissante", "horizontale"], ok: 0, expl: "Prix élevé en haut, quantité faible à gauche." },
          { q: "Une hausse du revenu déplace…", opts: ["la courbe de demande vers la droite", "le point le long de la courbe", "la courbe d'offre"], ok: 0, expl: "Le revenu est un facteur de déplacement de la courbe." },
          { q: "Le manioc par rapport au riz est un bien…", opts: ["substituable", "complémentaire", "collectif"], ok: 0, expl: "On peut remplacer l'un par l'autre dans le repas." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Un désir sans moyen de paiement est une demande effective.", rep: false, expl: "La demande suppose à la fois le désir et la capacité de payer." },
          { txt: "Une baisse de prix provoque un déplacement le long de la courbe.", rep: true, expl: "Seule une variation de prix joue sur la quantité demandée le long de la courbe." },
          { txt: "Le sucre est un bien complémentaire du thé.", rep: true, expl: "On les consomme ensemble : la hausse du prix de l'un réduit la demande de l'autre." },
          { txt: "La courbe de demande est croissante.", rep: false, expl: "Elle est décroissante : prix et quantité varient en sens inverse." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis la demande et énonce la loi de la demande.", r: "La demande est la quantité d'un bien que les acheteurs sont prêts et capables d'acheter à un prix donné. La loi de la demande énonce que la quantité demandée diminue quand le prix augmente." },
          { q: "Quelle différence y a-t-il entre un déplacement le long de la courbe et un déplacement de la courbe ?", r: "Le déplacement le long de la courbe vient d'une variation du prix ; le déplacement de la courbe vient d'un autre facteur : revenu, goûts, prix d'un bien lié ou nombre d'acheteurs." },
          { q: "Explique l'effet de substitution et l'effet de revenu.", r: "Quand le prix baisse, le bien remplace les autres dans le budget — effet de substitution — et le même argent permet d'en acheter davantage — effet de revenu." },
          { q: "Cite deux facteurs qui déplacent la courbe de demande vers la droite.", r: "Une hausse du revenu des acheteurs et une hausse du prix d'un bien substituable comme le manioc pour le riz." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Quand le prix baisse, la quantité demandée", suite: "augmente" },
          { debut: "La courbe de demande est", suite: "décroissante" },
          { debut: "Le sucre est un bien _________ du thé", suite: "complémentaire" },
          { debut: "L'addition des demandes individuelles donne la demande", suite: "globale" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 31 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "L'offre : loi de l'offre et courbe",
      theme: "Coordination par le marché et par l'État",
      ras: "Fonction du marché concurrentiel",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "définir l'offre, énoncer la loi de l'offre et tracer sa courbe",
      supportMeta: "Tableaux d'offre, graphiques, cahier",
      revision: [
        ["Qu'énonce la loi de la demande ?", "Quand le prix augmente, la quantité demandée diminue."],
        ["Qu'est-ce qu'un déplacement de la courbe de demande ?", "Le déplacement de toute la courbe, causé par le revenu, les goûts ou le nombre d'acheteurs."],
      ],
      mise: [
        "Si le prix du riz double, le paysan cultive-t-il davantage son champ ?",
        "Oui : à un prix plus élevé, produire devient rentable, il offre davantage de riz sur le marché.",
      ],
      observation: "le tableau d'offre affiché au tableau",
      observationSupport: "Tableau d'offre (prix / quantité offerte), affiché ou distribué",
      technAna: "Lecture de tableau et tracé de courbe dirigé",
      qa: [
        ["Qu'est-ce que l'offre ?", "La quantité d'un bien que les vendeurs sont prêts et capables de mettre sur le marché, à un prix donné et pendant une période donnée."],
        ["Qu'énonce la loi de l'offre ?", "Quand le prix d'un bien augmente, la quantité offerte augmente ; quand le prix baisse, la quantité offerte diminue."],
        ["Pourquoi offre-t-on davantage quand le prix monte ?", "Parce que le prix plus élevé couvre des coûts de production plus élevés et dégage un profit supérieur : les producteurs déjà présents produisent plus, et de nouveaux producteurs arrivent."],
        ["Qu'est-ce qu'un tableau d'offre ?", "Un tableau qui indique, pour chaque prix, la quantité que les vendeurs sont prêts à proposer."],
        ["Comment trace-t-on la courbe d'offre ?", "Le prix sur l'axe vertical, la quantité sur l'axe horizontal : la courbe est croissante, elle monte de la gauche vers la droite."],
        ["Quels facteurs déplacent la courbe d'offre ?", "Le coût des facteurs de production, le progrès technique, le nombre d'offreurs, les prix des autres biens, les anticipations et les aléas climatiques."],
        ["Quelle différence avec l'offre globale ?", "L'offre individuelle est celle d'un seul producteur ; l'offre globale est la somme des offres individuelles sur le marché."],
      ],
      synthese: "Donc, l'offre est la quantité d'un bien que les vendeurs sont prêts à proposer à un prix donné. La loi de l'offre énonce que la quantité offerte augmente avec le prix, parce qu'un prix plus élevé rend la production rentable. Une variation du coût des facteurs, de la technique ou du nombre d'offreurs déplace la courbe entière.",
      motsCles: ["offre", "loi de l'offre", "quantité offerte", "courbe d'offre", "coût de production", "progrès technique", "offre globale"],
      image: { file: "t11_u3_offre.png", legende: "Figure 27 — La courbe d'offre : prix et quantité offerte." },
      contenu: [
        {
          sousTitre: "1. L'offre : vouloir et pouvoir vendre",
          texte: "Comme la demande, l'offre suppose une intention et une capacité.",
          liste: [
            "Proposer un bien à un prix qui ne couvre pas les coûts n'a pas de sens durablement.",
            "L'offre s'exprime pour un prix et une période donnés.",
            "L'offre globale additionne les offres de tous les producteurs présents sur le marché.",
          ],
        },
        {
          sousTitre: "2. La loi de l'offre",
          texte: "Le prix est une récompense pour le producteur : plus il est élevé, plus l'effort de produire est rentable.",
          liste: [
            "Un prix plus élevé couvre des coûts croissants : terres moins fertiles, heures supplémentaires.",
            "Il attire de nouveaux producteurs sur le marché.",
            "Exemple : à 1 200 Ar le kilo, les paysans offrent 20 tonnes ; à 1 800 Ar, ils en offrent 40 tonnes.",
          ],
        },
        {
          sousTitre: "3. Le tableau d'offre",
          texte: "Le tableau se lit prix par prix, comme pour la demande.",
          liste: [
            "Prix 2 000 Ar → quantité offerte 60 kg.",
            "Prix 1 600 Ar → 45 kg.",
            "Prix 1 200 Ar → 30 kg.",
            "Prix 800 Ar → 12 kg.",
            "Chaque couple prix-quantité donne un point de la courbe croissante.",
          ],
        },
        {
          sousTitre: "4. Déplacement le long de la courbe",
          texte: "Seul le prix déplace le point le long de la courbe d'offre.",
          liste: [
            "Prix plus élevé : on remonte la courbe, la quantité offerte augmente.",
            "Prix plus bas : on descend la courbe, la quantité offerte diminue.",
            "On parle de variation de la quantité offerte.",
          ],
        },
        {
          sousTitre: "5. Déplacer la courbe d'offre",
          texte: "Six facteurs déplacent la courbe, sans que le prix du bien n'ait changé.",
          liste: [
            "Le coût des facteurs : une hausse du prix de l'engrais réduit l'offre.",
            "Le progrès technique : une meilleure semence augmente l'offre à prix égal.",
            "Le nombre d'offreurs : l'arrivée de nouveaux producteurs déplace la courbe vers la droite.",
            "Les prix des autres biens : si le maïs rapporte plus, le paysan lui consacre ses terres.",
            "Les anticipations : un producteur qui prévoit une hausse peut stocker.",
            "Les aléas climatiques : une sécheresse déplace la courbe vers la gauche.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La loi de l'offre énonce que…", opts: ["quand le prix monte, la quantité offerte augmente", "quand le prix monte, la quantité offerte baisse", "le prix ne joue pas"], ok: 0, expl: "Un prix plus élevé rend la production rentable." },
          { q: "La courbe d'offre est…", opts: ["croissante", "décroissante", "verticale"], ok: 0, expl: "Prix et quantité offerte varient dans le même sens." },
          { q: "Une hausse du prix de l'engrais…", opts: ["déplace la courbe d'offre vers la gauche", "déplace le point le long de la courbe", "augmente la demande"], ok: 0, expl: "C'est un facteur de coût, pas une variation du prix du bien." },
          { q: "Une sécheresse provoque…", opts: ["une baisse de l'offre", "une hausse de l'offre", "une baisse du coût"], ok: 0, expl: "La récolte diminue à prix égal." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Un prix plus élevé rend la production plus rentable.", rep: true, expl: "Il couvre des coûts croissants et attire de nouveaux producteurs." },
          { txt: "Une variation du prix du bien déplace la courbe d'offre.", rep: false, expl: "Elle déplace le point le long de la courbe." },
          { txt: "Le progrès technique augmente l'offre à prix égal.", rep: true, expl: "Il permet de produire plus avec les mêmes ressources." },
          { txt: "L'offre globale est l'offre d'un seul producteur.", rep: false, expl: "C'est la somme des offres individuelles." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis l'offre et énonce la loi de l'offre.", r: "L'offre est la quantité d'un bien que les vendeurs sont prêts et capables de proposer à un prix donné. La loi de l'offre énonce que la quantité offerte augmente quand le prix augmente." },
          { q: "Pourquoi un prix plus élevé fait-il augmenter la quantité offerte ?", r: "Parce qu'il couvre des coûts de production croissants et dégage un profit supérieur, ce qui pousse les producteurs en place à produire plus et en attire de nouveaux." },
          { q: "Cite trois facteurs qui déplacent la courbe d'offre.", r: "Le coût des facteurs de production, le progrès technique et le nombre d'offreurs — auxquels s'ajoutent les aléas climatiques et les anticipations." },
          { q: "Quelle différence y a-t-il entre offre individuelle et offre globale ?", r: "L'offre individuelle est celle d'un seul producteur ; l'offre globale est la somme des offres de tous les producteurs présents sur le marché." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["croissante", "prix", "coût", "technique", "climat"], items: [
          { phrase: "La courbe d'offre est _________.", mot: "croissante" },
          { phrase: "Seul le _________ du bien déplace le point le long de la courbe.", mot: "prix" },
          { phrase: "Le _________ des facteurs de production déplace la courbe d'offre.", mot: "coût" },
          { phrase: "Le progrès _________ permet de produire davantage à prix égal.", mot: "technique" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 32 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "L'équilibre du marché : prix et quantité d'équilibre",
      theme: "Coordination par le marché et par l'État",
      ras: "Fonction du marché concurrentiel",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "déterminer graphiquement le prix et la quantité d'équilibre, et expliquer l'ajustement",
      supportMeta: "Graphique offre-demande, tableau comparatif, cahier",
      revision: [
        ["Qu'énonce la loi de l'offre ?", "Quand le prix augmente, la quantité offerte augmente."],
        ["Cite un facteur qui déplace la courbe d'offre.", "Le coût des facteurs, le progrès technique ou une sécheresse."],
      ],
      mise: [
        "Le kilo de tomates est à 3 000 Ar : il en reste beaucoup sur les étals à midi. Que va faire le vendeur ?",
        "Il va baisser son prix pour écouler le stock : c'est le marché qui cherche son équilibre.",
      ],
      observation: "le graphique de la croix offre-demande affiché au tableau",
      observationSupport: "Graphique de la rencontre de l'offre et de la demande, affiché ou distribué",
      technAna: "Lecture de graphique et raisonnement dirigé",
      qa: [
        ["Qu'est-ce que l'équilibre du marché ?", "La situation où la quantité offerte est égale à la quantité demandée : tout ce qui est apporté se vend, tous ceux qui veulent acheter au prix trouvent le bien."],
        ["Qu'est-ce que le prix d'équilibre ?", "Le prix pour lequel l'offre et la demande sont égales : on l'appelle aussi prix de marché."],
        ["Comment le trouve-t-on graphiquement ?", "C'est le point d'intersection des deux courbes : on lit le prix sur l'axe vertical et la quantité sur l'axe horizontal."],
        ["Que se passe-t-il si le prix est au-dessus de l'équilibre ?", "L'offre dépasse la demande : il y a excédent, les stocks s'accumulent et les vendeurs baissent leur prix."],
        ["Que se passe-t-il si le prix est en dessous de l'équilibre ?", "La demande dépasse l'offre : il y a pénurie, les acheteurs se font concurrence et le prix monte."],
        ["Comment le marché se rééquilibre-t-il ?", "Par le mouvement des prix : la hausse décourage une partie de la demande et attire de nouveaux offreurs ; la baisse fait l'inverse. Ce tâtonnement conduit à l'équilibre."],
        ["Que se passe-t-il si la demande augmente ?", "La courbe de demande se déplace vers la droite : à offre inchangée, le prix d'équilibre monte et la quantité échangée augmente."],
        ["Que se passe-t-il si l'offre augmente ?", "La courbe d'offre se déplace vers la droite : à demande inchangée, le prix d'équilibre baisse et la quantité échangée augmente."],
      ],
      synthese: "Donc, l'équilibre du marché est atteint quand la quantité offerte égale la quantité demandée : il détermine à la fois le prix et la quantité échangée. Au-dessus du prix d'équilibre, l'excédent fait baisser le prix ; en dessous, la pénurie le fait monter. Quand l'offre ou la demande se déplace, un nouvel équilibre s'établit.",
      motsCles: ["équilibre", "prix d'équilibre", "quantité d'équilibre", "excédent", "pénurie", "ajustement", "tâtonnement"],
      image: { file: "t11_u3_equilibre.png", legende: "Figure 28 — La croix offre-demande : le prix d'équilibre." },
      contenu: [
        {
          sousTitre: "1. La rencontre des deux courbes",
          texte: "Sur un graphique, l'offre monte et la demande descend : elles se croisent en un point.",
          liste: [
            "Ce point est l'équilibre : il n'y a ni excédent ni pénurie.",
            "Le prix correspondant est le prix d'équilibre.",
            "La quantité correspondante est la quantité échangée.",
          ],
        },
        {
          sousTitre: "2. Lire un tableau comparatif",
          texte: "Le tableau permet de repérer l'équilibre sans graphique.",
          liste: [
            "Prix 1 000 Ar : demande 60 kg, offre 20 kg → pénurie de 40 kg.",
            "Prix 1 500 Ar : demande 40 kg, offre 40 kg → équilibre.",
            "Prix 2 000 Ar : demande 25 kg, offre 55 kg → excédent de 30 kg.",
            "Le prix d'équilibre est donc 1 500 Ar et la quantité échangée 40 kg.",
          ],
        },
        {
          sousTitre: "3. Le mécanisme d'ajustement",
          texte: "Le marché corrige de lui-même les déséquilibres par le mouvement des prix.",
          liste: [
            "Pénurie : les acheteurs se disputent le bien et proposent davantage → le prix monte.",
            "La hausse décourage certains acheteurs et attire de nouveaux vendeurs.",
            "Excédent : les vendeurs ne vendent pas tout et baissent leur prix.",
            "La baisse attire de nouveaux acheteurs et décourage certains vendeurs.",
            "Le mouvement continue jusqu'à ce que les deux quantités s'égalisent : c'est le tâtonnement.",
          ],
        },
        {
          sousTitre: "4. Quand la demande se déplace",
          texte: "Une hausse de la demande crée un nouvel équilibre, à un prix plus élevé.",
          liste: [
            "Exemple : la fête de fin d'année augmente la demande de volailles.",
            "La courbe de demande se déplace vers la droite.",
            "Le prix d'équilibre monte et la quantité échangée augmente.",
            "Si la demande baisse, le prix et la quantité diminuent.",
          ],
        },
        {
          sousTitre: "5. Quand l'offre se déplace",
          texte: "Une hausse de l'offre crée un nouvel équilibre, à un prix plus bas.",
          liste: [
            "Exemple : une bonne récolte de riz fait augmenter l'offre.",
            "La courbe d'offre se déplace vers la droite.",
            "Le prix d'équilibre baisse et la quantité échangée augmente.",
            "Une sécheresse produit l'effet inverse : prix plus élevé, quantité plus faible.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "L'équilibre du marché se réalise quand…", opts: ["la quantité offerte égale la quantité demandée", "le prix est maximal", "l'État fixe le prix"], ok: 0, expl: "Il n'y a alors ni excédent ni pénurie." },
          { q: "Un prix supérieur au prix d'équilibre provoque…", opts: ["un excédent d'offre", "une pénurie", "un équilibre stable"], ok: 0, expl: "Les vendeurs ne trouvent pas preneurs à ce prix." },
          { q: "Une bonne récolte fait…", opts: ["baisser le prix d'équilibre", "monter le prix d'équilibre", "disparaître le marché"], ok: 0, expl: "L'offre augmente : la courbe se déplace vers la droite." },
          { q: "Une hausse de la demande, à offre inchangée, fait…", opts: ["monter le prix et la quantité", "baisser le prix et la quantité", "baisser le prix et monter la quantité"], ok: 0, expl: "Le déplacement de la demande vers la droite élève les deux." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "En situation de pénurie, le prix a tendance à monter.", rep: true, expl: "Les acheteurs se font concurrence pour un bien rare." },
          { txt: "Un excédent d'offre pousse le prix à la hausse.", rep: false, expl: "Les vendeurs baissent leurs prix pour écouler les stocks." },
          { txt: "Le prix d'équilibre se lit au point d'intersection des deux courbes.", rep: true, expl: "C'est là que les quantités offerte et demandée sont égales." },
          { txt: "Une sécheresse élève le prix d'équilibre du riz.", rep: true, expl: "L'offre diminue : la courbe se déplace vers la gauche." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds en expliquant le raisonnement.", pointsPar: 2, items: [
          { q: "À 1 000 Ar, la demande est de 60 kg et l'offre de 20 kg. Que se passe-t-il et comment le marché réagit-il ?", r: "Il y a pénurie de 40 kg. Les acheteurs se disputent le bien, le prix monte, ce qui décourage une partie de la demande et attire de nouveaux offreurs, jusqu'à l'équilibre." },
          { q: "Définis le prix d'équilibre et dis comment on le trouve.", r: "C'est le prix pour lequel la quantité offerte égale la quantité demandée. On le trouve à l'intersection des deux courbes, ou dans un tableau en cherchant la ligne où les deux quantités sont égales." },
          { q: "Pourquoi une bonne récolte fait-elle baisser le prix du riz ?", r: "Parce que l'offre augmente : la courbe d'offre se déplace vers la droite. À demande inchangée, l'excédent d'offre pousse les vendeurs à baisser leurs prix." },
          { q: "Explique le mécanisme de tâtonnement du marché.", r: "Le marché essaie des prix : trop haut, l'excédent le fait baisser ; trop bas, la pénurie le fait monter. Les ajustements successifs conduisent au prix d'équilibre." },
        ]},
        { type: "appariement", consigne: "Relie chaque situation à son effet sur l'équilibre.", pointsPar: 1, items: [
          { g: ["Bonne récolte de riz", "Fête de fin d'année", "Sécheresse", "Hausse du prix de l'engrais"], d: ["Prix d'équilibre en baisse", "Prix d'équilibre en hausse", "Quantité échangée en baisse", "Demande déplacée vers la droite"], pairs: [[0, 0], [1, 3], [2, 1], [3, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 33 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les conditions de la concurrence pure et parfaite",
      theme: "Coordination par le marché et par l'État",
      ras: "Fonction du marché concurrentiel",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "énumérer et expliquer les cinq conditions de la concurrence pure et parfaite",
      supportMeta: "Documents sur les marchés locaux, étude de cas, cahier",
      revision: [
        ["Qu'est-ce que le prix d'équilibre ?", "Le prix pour lequel la quantité offerte égale la quantité demandée."],
        ["Comment le marché corrige-t-il une pénurie ?", "Par la hausse du prix, qui décourage la demande et attire de nouveaux offreurs."],
      ],
      mise: [
        "Au marché, un seul vendeur peut-il imposer son prix à tous les autres ?",
        "Non, à condition que les vendeurs soient nombreux et que les acheteurs puissent aller voir ailleurs : c'est la concurrence pure et parfaite.",
      ],
      observation: "les documents décrivant un marché de produits agricoles au niveau local",
      observationSupport: "Documents sur un marché de produits agricoles et sur les conditions de la concurrence",
      technAna: "Étude de document, débat dirigé et questionnement",
      qa: [
        ["Qu'est-ce que la concurrence ?", "La situation dans laquelle plusieurs offreurs se disputent la même clientèle, chacun cherchant à vendre au mieux sans pouvoir imposer son prix."],
        ["Qu'est-ce que la concurrence pure et parfaite ?", "Une forme de marché idéale où aucune entreprise et aucun acheteur n'a le pouvoir d'influencer le prix : le prix s'impose à tous."],
        ["Quelle est la première condition ?", "L'atomicité du marché : les offreurs et les demandeurs sont si nombreux et si petits qu'aucun ne pèse sur le prix."],
        ["Quelle est la deuxième condition ?", "L'homogénéité des produits : les biens offerts sont identiques, l'acheteur n'a aucune raison de préférer un vendeur à un autre."],
        ["Quelle est la troisième condition ?", "La transparence de l'information : chacun connaît les prix pratiqués et la qualité des produits offerts."],
        ["Quelles sont les quatrième et cinquième conditions ?", "La libre entrée et la libre sortie du marché, et la libre circulation des facteurs de production."],
        ["Quelle conséquence pour les agents ?", "Ils sont preneurs de prix : chacun accepte le prix du marché, qu'il ne peut modifier seul."],
        ["La concurrence pure et parfaite existe-t-elle vraiment ?", "C'est un modèle de référence : le marché du riz au niveau local s'en approche, mais la plupart des marchés réels s'en écartent."],
      ],
      synthese: "Donc, la concurrence pure et parfaite repose sur cinq conditions : atomicité du marché, homogénéité des produits, transparence de l'information, libre entrée et sortie, libre circulation des facteurs. Quand elles sont réunies, personne ne peut imposer son prix : tous les agents sont preneurs de prix et le marché fixe le prix d'équilibre.",
      motsCles: ["concurrence", "concurrence pure et parfaite", "atomicité", "homogénéité", "transparence", "libre entrée", "preneur de prix"],
      image: { file: "t11_u3_cpp.png", legende: "Figure 29 — Les cinq conditions de la concurrence pure et parfaite." },
      contenu: [
        {
          sousTitre: "1. L'atomicité du marché",
          texte: "Chaque agent est comme un grain de sable : seul, il ne pèse rien sur le prix.",
          liste: [
            "Les offreurs sont nombreux et de petite taille.",
            "Les demandeurs sont nombreux et chacun achète une faible part du total.",
            "Aucun ne peut, à lui seul, faire monter ou baisser le prix.",
          ],
        },
        {
          sousTitre: "2. L'homogénéité des produits",
          texte: "Les biens sont interchangeables : l'acheteur choisit au prix, non au vendeur.",
          liste: [
            "Un kilo de riz d'un étal vaut celui du voisin.",
            "Si un vendeur augmente son prix, tous ses clients partent chez le concurrent.",
            "Aucune marque, aucun service annexe ne distingue les produits.",
          ],
        },
        {
          sousTitre: "3. La transparence de l'information",
          texte: "Chacun connaît les prix demandés et la qualité réelle des produits.",
          liste: [
            "L'acheteur peut comparer avant d'acheter.",
            "Le vendeur connaît les prix pratiqués par ses concurrents.",
            "Sans cette transparence, un vendeur pourrait vendre plus cher à un client mal informé.",
          ],
        },
        {
          sousTitre: "4. Libre entrée et libre circulation",
          texte: "Le marché reste ouvert, et les ressources peuvent se déplacer.",
          liste: [
            "Libre entrée : tout producteur peut venir vendre, sans barrière ni licence coûteuse.",
            "Libre sortie : tout producteur peut cesser son activité sans obstacle.",
            "Libre circulation des facteurs : le travail et le capital vont là où le profit est le meilleur.",
            "Cette mobilité égalise les rémunérations et empêche les profits durables.",
          ],
        },
        {
          sousTitre: "5. Un modèle de référence",
          texte: "Peu de marchés réels réunissent les cinq conditions : le modèle sert de point de comparaison.",
          liste: [
            "Le marché du riz au niveau local s'en approche : nombreux paysans, produit homogène.",
            "Le marché de la téléphonie s'en éloigne : quelques offreurs, produits différenciés.",
            "Mesurer l'écart au modèle permet de comprendre le fonctionnement réel d'un marché.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "L'atomicité du marché signifie que…", opts: ["les agents sont nombreux et aucun ne pèse sur le prix", "les produits sont identiques", "l'information est gratuite"], ok: 0, expl: "Chaque agent est trop petit pour influencer le marché." },
          { q: "Dans la concurrence pure et parfaite, les agents sont…", opts: ["preneurs de prix", "faiseurs de prix", "fixés par l'État"], ok: 0, expl: "Ils subissent le prix d'équilibre." },
          { q: "L'homogénéité des produits signifie que…", opts: ["les biens sont identiques", "les prix sont imposés", "les vendeurs sont rares"], ok: 0, expl: "Aucun vendeur ne peut se distinguer par le produit." },
          { q: "La libre entrée permet…", opts: ["à tout producteur de venir vendre sur le marché", "de fixer un prix minimum", "d'interdire la concurrence"], ok: 0, expl: "Aucune barrière ne bloque l'arrivée de nouveaux offreurs." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La transparence de l'information permet de comparer les prix.", rep: true, expl: "Chacun connaît les prix pratiqués et la qualité des produits." },
          { txt: "La concurrence pure et parfaite est le cas le plus fréquent dans la réalité.", rep: false, expl: "C'est un modèle de référence ; beaucoup de marchés s'en éloignent." },
          { txt: "La libre circulation des facteurs permet au capital d'aller là où il est le plus rentable.", rep: true, expl: "Le travail et le capital se déplacent vers les meilleures rémunérations." },
          { txt: "Un offreur peut durablement vendre plus cher que ses concurrents en concurrence pure et parfaite.", rep: false, expl: "Il perdrait immédiatement tous ses clients." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Énumère les cinq conditions de la concurrence pure et parfaite.", r: "Atomicité du marché, homogénéité des produits, transparence de l'information, libre entrée et sortie du marché, libre circulation des facteurs de production." },
          { q: "Pourquoi dit-on que les agents sont preneurs de prix ?", r: "Parce qu'aucun d'eux n'est assez gros pour influencer le prix : chacun accepte le prix du marché, fixé par la confrontation globale de l'offre et de la demande." },
          { q: "Quelle différence y a-t-il entre atomicité et homogénéité ?", r: "L'atomicité concerne le nombre et la taille des agents ; l'homogénéité concerne la nature des produits échangés." },
          { q: "Donne un exemple de marché qui s'approche de la concurrence pure et parfaite.", r: "Le marché du riz au niveau local : de nombreux paysans offrent un produit homogène, l'information sur les prix circule et l'entrée est libre." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["atomicité", "homogénéité", "transparence", "entrée", "facteurs"], items: [
          { phrase: "L'_________ du marché : aucun agent ne pèse sur le prix.", mot: "atomicité" },
          { phrase: "L'_________ des produits : les biens sont identiques.", mot: "homogénéité" },
          { phrase: "La _________ de l'information : les prix sont connus de tous.", mot: "transparence" },
          { phrase: "La libre circulation des _________ de production.", mot: "facteurs" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 34 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les structures de marché : concurrence, monopole, oligopole",
      theme: "Coordination par le marché et par l'État",
      ras: "Fonction du marché concurrentiel",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "distinguer les structures de marché et leurs conséquences sur le prix et la quantité",
      supportMeta: "Documents sur les entreprises locales, étude de cas, cahier",
      revision: [
        ["Cite deux conditions de la concurrence pure et parfaite.", "L'atomicité du marché et l'homogénéité des produits."],
        ["Pourquoi les agents sont-ils preneurs de prix ?", "Parce qu'aucun n'est assez gros pour influencer le prix du marché."],
      ],
      mise: [
        "Combien d'entreprises se partagent la téléphonie mobile à Madagascar ?",
        "Deux ou trois seulement : ce n'est plus de la concurrence pure et parfaite, c'est un oligopole.",
      ],
      observation: "les documents présentant les entreprises et les secteurs étudiés",
      observationSupport: "Documents sur les secteurs d'activité : téléphonie, distribution d'eau, marché de légumes",
      technAna: "Étude de document, débat dirigé et tableau comparatif",
      qa: [
        ["Qu'est-ce qu'une structure de marché ?", "La manière dont un marché est organisé : nombre d'offreurs, nature des produits et facilité d'entrée."],
        ["Qu'est-ce que la concurrence monopolistique ?", "Un marché où les offreurs sont nombreux mais les produits différenciés : restaurants, coiffeurs, magasins de vêtements."],
        ["Qu'est-ce qu'un oligopole ?", "Un marché dominé par un petit nombre d'offreurs, chacun assez gros pour peser sur le prix : téléphonie mobile, ciment, carburant."],
        ["Qu'est-ce qu'un monopole ?", "Un marché où un seul offreur détient la totalité de l'offre : distribution d'eau ou d'électricité dans une localité."],
        ["Quelles sont les conséquences d'un monopole ?", "Le monopoliste fixe un prix plus élevé et une quantité plus faible que ne le ferait la concurrence : une partie des échanges avantageux ne se fait pas."],
        ["Qu'est-ce qu'une barrière à l'entrée ?", "Tout obstacle qui empêche un nouveau producteur d'entrer sur le marché : investissement initial, licence, réseau à construire, fidélité des clients."],
        ["Qu'est-ce que le pouvoir de marché ?", "La capacité d'un offreur à fixer son prix au-dessus du coût sans perdre toute sa clientèle."],
        ["Pourquoi la puissance publique surveille-t-elle ces marchés ?", "Parce que la concentration réduit la quantité offerte, élève les prix et nuit au consommateur : une autorité de régulation peut encadrer le marché."],
      ],
      synthese: "Donc, les marchés se distinguent par le nombre d'offreurs, la nature des produits et les barrières à l'entrée. De la concurrence pure et parfaite au monopole, le pouvoir de marché grandit : le prix s'élève et la quantité échangée diminue. C'est pourquoi la puissance publique encadre les marchés concentrés.",
      motsCles: ["structure de marché", "concurrence monopolistique", "oligopole", "monopole", "barrière à l'entrée", "pouvoir de marché", "régulation"],
      image: { file: "t11_u3_structures.png", legende: "Figure 30 — Les structures de marché, du plus concurrentiel au moins concurrentiel." },
      contenu: [
        {
          sousTitre: "1. Le nombre d'offreurs",
          texte: "Le premier critère qui distingue les marchés est le nombre de vendeurs en présence.",
          liste: [
            "Très nombreux : concurrence pure et parfaite ou concurrence monopolistique.",
            "Quelques-uns : oligopole.",
            "Un seul : monopole.",
          ],
        },
        {
          sousTitre: "2. Concurrence monopolistique",
          texte: "Beaucoup d'offreurs, mais chacun cherche à se distinguer.",
          liste: [
            "Les produits sont différenciés : emplacement, qualité, service, réputation.",
            "Chaque vendeur garde un petit pouvoir sur son prix.",
            "Exemples : restaurants du quartier, salons de coiffure, boutiques de vêtements.",
          ],
        },
        {
          sousTitre: "3. L'oligopole",
          texte: "Quelques offreurs se partagent l'essentiel du marché et s'observent.",
          liste: [
            "Chacun sait que sa décision influencera ses rivaux.",
            "La tentation de l'entente est grande : se mettre d'accord sur les prix.",
            "Exemples : opérateurs de téléphonie mobile, cimenteries, distribution de carburant.",
            "Les barrières à l'entrée sont fortes : réseau à construire, licence, capitaux importants.",
          ],
        },
        {
          sousTitre: "4. Le monopole",
          texte: "Un seul offreur, aucun concurrent direct : le marché est entièrement entre ses mains.",
          liste: [
            "Il fixe le prix qui maximise son profit.",
            "Le prix est plus élevé et la quantité plus faible qu'en concurrence.",
            "Exemples : distribution d'eau et d'électricité dans une localité donnée.",
            "Le monopole peut être justifié quand une seule entreprise produit à moindre coût — monopole naturel —, à condition d'être régulé.",
          ],
        },
        {
          sousTitre: "5. Les barrières à l'entrée",
          texte: "Ce qui protège les offreurs en place empêche les nouveaux venus de les concurrencer.",
          liste: [
            "Barrières financières : investissement initial, achat d'équipement lourd.",
            "Barrières réglementaires : licence, agrément, quota.",
            "Barrières techniques : brevet, savoir-faire, réseau de distribution.",
            "Barrières commerciales : notoriété, fidélité de la clientèle, coût de changement pour le client.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Un marché dominé par quelques offreurs est…", opts: ["un oligopole", "un monopole", "une concurrence pure et parfaite"], ok: 0, expl: "Un petit nombre d'entreprises se partagent le marché." },
          { q: "Un marché où un seul offreur détient toute l'offre est…", opts: ["un monopole", "un oligopole", "une concurrence monopolistique"], ok: 0, expl: "Il n'existe aucun concurrent direct." },
          { q: "Les restaurants d'un quartier relèvent plutôt de…", opts: ["la concurrence monopolistique", "le monopole", "la concurrence pure et parfaite"], ok: 0, expl: "Offreurs nombreux, produits différenciés." },
          { q: "Une licence coûteuse est…", opts: ["une barrière à l'entrée", "une externalité", "un bien collectif"], ok: 0, expl: "Elle empêche les nouveaux producteurs d'entrer." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Un monopole offre généralement une quantité plus faible que la concurrence.", rep: true, expl: "Il restreint l'offre pour maintenir un prix élevé." },
          { txt: "En oligopole, les offreurs ne se surveillent pas.", rep: false, expl: "Chaque décision d'un offreur affecte ses rivaux, ils s'observent." },
          { txt: "La concurrence monopolistique suppose des produits différenciés.", rep: true, expl: "Chaque vendeur se distingue par la qualité, le service ou l'emplacement." },
          { txt: "Une barrière à l'entrée facilite l'arrivée de nouveaux offreurs.", rep: false, expl: "Elle la rend plus difficile, voire impossible." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Quelle différence y a-t-il entre oligopole et monopole ?", r: "L'oligopole est un marché dominé par quelques offreurs, le monopole un marché où un seul offreur détient la totalité de l'offre." },
          { q: "Quelles sont les conséquences d'un monopole pour le consommateur ?", r: "Le prix est plus élevé et la quantité disponible plus faible : une partie des échanges qui seraient avantageux ne se réalise pas." },
          { q: "Cite trois barrières à l'entrée.", r: "L'investissement initial élevé, la licence ou l'agrément réglementaire, et le brevet ou le réseau de distribution à constituer." },
          { q: "Pourquoi les marchés concentrés sont-ils surveillés par la puissance publique ?", r: "Parce que le pouvoir de marché réduit la quantité offerte, élève les prix et nuit au consommateur : une régulation est nécessaire." },
        ]},
        { type: "appariement", consigne: "Relie chaque marché à sa structure.", pointsPar: 1, items: [
          { g: ["Téléphonie mobile", "Distribution d'eau dans une ville", "Restaurants du quartier", "Marché du riz au village"], d: ["Concurrence monopolistique", "Concurrence proche de la CPP", "Oligopole", "Monopole"], pairs: [[0, 2], [1, 3], [2, 0], [3, 1]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 35 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le gain à l'échange et le surplus du consommateur",
      theme: "Coordination par le marché et par l'État",
      ras: "Efficacité d'un marché concurrentiel",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "expliquer pourquoi l'échange volontaire profite aux deux parties et calculer le surplus du consommateur",
      supportMeta: "Tableaux de disposition à payer, graphiques, cahier",
      revision: [
        ["Qu'est-ce qu'un oligopole ?", "Un marché dominé par un petit nombre d'offreurs."],
        ["Qu'est-ce qu'une barrière à l'entrée ?", "Un obstacle qui empêche un nouveau producteur d'entrer sur le marché."],
      ],
      mise: [
        "Tu achètes un vélo d'occasion 150 000 Ar alors que tu étais prêt à payer 200 000 Ar. As-tu fait une bonne affaire ?",
        "Oui : tu as obtenu 50 000 Ar de gain à l'échange, c'est ton surplus de consommateur.",
      ],
      observation: "le tableau des dispositions à payer affiché au tableau",
      observationSupport: "Tableau des dispositions à payer des acheteurs et graphique de la demande",
      technAna: "Lecture de tableau et calcul dirigé",
      qa: [
        ["Pourquoi échange-t-on ?", "Parce que l'échange volontaire profite aux deux parties : chacun reçoit une chose qui vaut plus pour lui que ce qu'il donne."],
        ["Qu'est-ce que la disposition à payer ?", "Le prix maximum qu'un acheteur accepte de payer pour obtenir le bien, compte tenu de l'utilité qu'il en attend."],
        ["Qu'est-ce que le surplus du consommateur ?", "La différence entre ce que l'acheteur était prêt à payer et ce qu'il a effectivement payé."],
        ["Comment le calcule-t-on ?", "Surplus du consommateur = disposition à payer − prix effectivement payé."],
        ["Que se passe-t-il quand le prix dépasse la disposition à payer ?", "L'acheteur renonce : l'échange n'a pas lieu, il n'y a aucun gain à réaliser."],
        ["Comment le marché concurrentiel maximise-t-il l'échange ?", "Au prix d'équilibre, tous les échanges dont la disposition à payer dépasse le coût de production sont réalisés : aucun gain mutuel n'est perdu."],
        ["Que mesure le surplus total d'un marché ?", "La somme des gains des acheteurs et des vendeurs : c'est la richesse créée par l'échange sur ce marché."],
      ],
      synthese: "Donc, l'échange volontaire est mutuellement avantageux : chacun y gagne. Le gain de l'acheteur est son surplus de consommateur, égal à sa disposition à payer moins le prix payé. Au prix d'équilibre d'un marché concurrentiel, tous les échanges avantageux se réalisent, ce qui rend ce marché efficace.",
      motsCles: ["gain à l'échange", "disposition à payer", "surplus du consommateur", "échange volontaire", "prix du marché", "utilité", "efficacité"],
      image: { file: "t11_u3_gain.png", legende: "Figure 31 — Le gain à l'échange : le surplus du consommateur." },
      contenu: [
        {
          sousTitre: "1. Pourquoi l'échange profite-t-il aux deux ?",
          texte: "Personne n'est contraint sur un marché libre : on n'échange que si l'on y trouve un avantage.",
          liste: [
            "L'acheteur estime le bien plus utile que l'argent qu'il donne.",
            "Le vendeur estime l'argent reçu plus utile que le bien qu'il cède.",
            "Les deux y gagnent : l'échange crée de la valeur, il ne la déplace pas seulement.",
          ],
        },
        {
          sousTitre: "2. La disposition à payer",
          texte: "Chaque acheteur a un prix limite, qui dépend de l'utilité qu'il attend du bien.",
          liste: [
            "Un acheteur très pressé accepte de payer davantage.",
            "Un acheteur qui peut se passer du bien se limite à un prix bas.",
            "Cette disposition varie d'une personne à l'autre : c'est ce qui donne une courbe de demande décroissante.",
          ],
        },
        {
          sousTitre: "3. Calculer le surplus du consommateur",
          texte: "Le surplus est la différence entre la disposition à payer et le prix réel.",
          liste: [
            "Exemple, pour un prix de marché de 1 500 Ar le kilo :",
            "Acheteur A, prêt à payer 2 000 Ar : surplus de 500 Ar.",
            "Acheteur B, prêt à payer 1 700 Ar : surplus de 200 Ar.",
            "Acheteur C, prêt à payer 1 600 Ar : surplus de 100 Ar.",
            "Acheteur D, prêt à payer 1 400 Ar : il n'achète pas, surplus nul.",
          ],
        },
        {
          sousTitre: "4. Lire le surplus sur le graphique",
          texte: "Le surplus du consommateur est l'aire située sous la courbe de demande et au-dessus du prix.",
          liste: [
            "Plus le prix est bas, plus le surplus est grand.",
            "Les acheteurs dont la disposition à payer est la plus élevée gagnent le plus.",
            "Une baisse de prix augmente le surplus de ceux qui achetaient déjà et en fait entrer de nouveaux.",
          ],
        },
        {
          sousTitre: "5. Quand le marché est-il efficace ?",
          texte: "L'efficacité se mesure à l'ampleur du gain total réalisé par l'échange.",
          liste: [
            "Un marché est efficace quand plus personne ne peut gagner sans qu'un autre perde.",
            "Au prix d'équilibre concurrentiel, tous les échanges mutuellement avantageux sont réalisés.",
            "Restreindre les échanges — prix imposé, quota, monopole — détruit une partie du gain : c'est une perte sèche.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le surplus du consommateur est égal à…", opts: ["disposition à payer − prix payé", "prix payé − coût de production", "prix payé + disposition à payer"], ok: 0, expl: "C'est le gain net de l'acheteur." },
          { q: "Un acheteur prêt à payer 2 000 Ar paie 1 500 Ar : son surplus est de…", opts: ["500 Ar", "1 500 Ar", "3 500 Ar"], ok: 0, expl: "2 000 − 1 500 = 500 Ar." },
          { q: "Si le prix du marché dépasse sa disposition à payer, l'acheteur…", opts: ["renonce à l'achat", "achète quand même", "paie le double"], ok: 0, expl: "L'échange n'est plus avantageux pour lui." },
          { q: "Un marché concurrentiel est efficace quand…", opts: ["tous les échanges mutuellement avantageux sont réalisés", "le prix est le plus élevé possible", "un seul vendeur fixe le prix"], ok: 0, expl: "Aucun gain mutuel n'est perdu." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Un échange volontaire est avantageux pour les deux parties.", rep: true, expl: "Chacun n'échange que s'il y trouve son intérêt." },
          { txt: "Le surplus du consommateur diminue quand le prix baisse.", rep: false, expl: "Il augmente : l'écart avec la disposition à payer se creuse." },
          { txt: "Restreindre les échanges détruit une partie du gain total.", rep: true, expl: "C'est la perte sèche : des échanges avantageux ne se font pas." },
          { txt: "La disposition à payer est identique pour tous les acheteurs.", rep: false, expl: "Elle varie selon les besoins et les revenus de chacun." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds en rédigeant le calcul.", pointsPar: 2, items: [
          { q: "Un acheteur était prêt à payer 200 000 Ar pour un vélo et le paie 150 000 Ar. Quel est son surplus ?", r: "Surplus = 200 000 − 150 000 = 50 000 Ar." },
          { q: "Prix du marché : 1 500 Ar. Trois acheteurs sont prêts à payer 1 900, 1 600 et 1 400 Ar. Calcule le surplus total.", r: "A : 400 Ar ; B : 100 Ar ; C : il n'achète pas. Surplus total = 500 Ar." },
          { q: "Pourquoi dit-on que l'échange volontaire crée de la valeur ?", r: "Parce que chacun reçoit une chose qui vaut plus pour lui que ce qu'il cède : les deux parties gagnent, sans qu'aucune ne perde." },
          { q: "Qu'est-ce que la perte sèche d'un marché ?", r: "C'est la partie du gain total qui disparaît quand des échanges mutuellement avantageux ne se réalisent pas, à cause d'un prix imposé, d'un quota ou d'un monopole." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Surplus du consommateur = disposition à payer −", suite: "prix payé" },
          { debut: "Le prix maximum qu'un acheteur accepte de payer est sa disposition à", suite: "payer" },
          { debut: "Un marché est efficace quand aucun gain mutuel n'est", suite: "perdu" },
          { debut: "Quand le prix baisse, le surplus du consommateur", suite: "augmente" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 36 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le surplus de production et l'efficacité du marché concurrentiel",
      theme: "Coordination par le marché et par l'État",
      ras: "Efficacité d'un marché concurrentiel",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "définir le surplus de production et montrer l'efficacité du marché concurrentiel",
      supportMeta: "Tableaux de coûts et de prix, graphique offre-demande, cahier",
      revision: [
        ["Qu'est-ce que le surplus du consommateur ?", "La différence entre la disposition à payer et le prix effectivement payé."],
        ["Pourquoi l'échange volontaire profite-t-il aux deux parties ?", "Parce que chacun reçoit une chose qui vaut plus pour lui que ce qu'il donne."],
      ],
      mise: [
        "Un paysan produit son riz à 900 Ar le kilo et le vend 1 500 Ar. Quel est son gain ?",
        "Il gagne 600 Ar par kilo : c'est son surplus de production.",
      ],
      observation: "le tableau des coûts de production affiché au tableau",
      observationSupport: "Tableau des coûts de production par producteur et graphique de l'offre",
      technAna: "Lecture de tableau et calcul dirigé",
      qa: [
        ["Qu'est-ce que le surplus de production ?", "La différence entre le prix de vente effectivement reçu et le coût de production du vendeur : c'est son gain à l'échange."],
        ["Comment le calcule-t-on ?", "Surplus de production = prix de vente − coût de production de la dernière unité vendue."],
        ["Pourquoi les vendeurs n'ont-ils pas tous le même surplus ?", "Parce que leurs coûts diffèrent : un paysan dont la terre est fertile produit moins cher et gagne davantage au même prix."],
        ["Que mesure le surplus total du marché ?", "La somme du surplus des acheteurs et du surplus des vendeurs : c'est la richesse créée par les échanges sur ce marché."],
        ["Pourquoi le marché concurrentiel est-il efficace ?", "Parce qu'à l'équilibre, le surplus total est maximal : toutes les unités dont la valeur pour l'acheteur dépasse le coût de production sont échangées."],
        ["Que se passe-t-il à une quantité inférieure à l'équilibre ?", "Des échanges avantageux ne se font pas : la valeur pour l'acheteur dépasse encore le coût de production, une partie du surplus est perdue."],
        ["Que se passe-t-il à une quantité supérieure à l'équilibre ?", "Des unités sont produites dont le coût dépasse la valeur accordée par l'acheteur : la société perd au lieu de gagner."],
        ["L'efficacité du marché suffit-elle ?", "Non : un marché peut être efficace et produire des situations très inégalitaires, ce qui justifie l'intervention de l'État."],
      ],
      synthese: "Donc, le surplus de production est la différence entre le prix reçu et le coût de production. Ajouté au surplus du consommateur, il forme le surplus total, qui mesure la richesse créée par l'échange. Le marché concurrentiel est efficace parce qu'à l'équilibre ce surplus total est maximal : ni trop ni trop peu d'unités ne sont échangées.",
      motsCles: ["surplus de production", "surplus total", "coût de production", "efficacité", "équilibre", "richesse créée", "rente"],
      image: { file: "t11_u3_surplus.png", legende: "Figure 32 — Le surplus de production et le surplus total à l'équilibre." },
      contenu: [
        {
          sousTitre: "1. Le gain du producteur",
          texte: "Comme l'acheteur, le vendeur mesure son gain à l'aune de ce qu'il aurait accepté.",
          liste: [
            "Le coût de production est le prix minimum auquel il accepte de vendre.",
            "Vendre au-dessus de ce coût lui laisse un gain : le surplus de production.",
            "Exemple : coût 900 Ar, prix de vente 1 500 Ar → surplus de 600 Ar par kilo.",
          ],
        },
        {
          sousTitre: "2. Des coûts inégaux entre producteurs",
          texte: "Sur un même marché, les producteurs n'ont pas les mêmes conditions de production.",
          liste: [
            "Terre fertile contre terre pauvre, outillage moderne contre outillage manuel.",
            "Le producteur le plus efficace encaisse le surplus le plus élevé.",
            "Le prix du marché s'aligne sur le coût du producteur le plus coûteux nécessaire à l'approvisionnement : le producteur marginal.",
          ],
        },
        {
          sousTitre: "3. Lire le surplus sur le graphique",
          texte: "Le surplus de production est l'aire située au-dessus de la courbe d'offre et en dessous du prix.",
          liste: [
            "Le surplus du consommateur est sous la courbe de demande, au-dessus du prix.",
            "Le surplus de production est au-dessus de la courbe d'offre, en dessous du prix.",
            "La somme des deux forme le surplus total du marché.",
          ],
        },
        {
          sousTitre: "4. Pourquoi l'équilibre est-il efficace ?",
          texte: "La quantité d'équilibre est précisément celle qui maximise le surplus total.",
          liste: [
            "En deçà : il reste des unités dont la valeur pour l'acheteur dépasse le coût de production.",
            "Au-delà : produire coûte plus que ce que l'acheteur accorde au bien.",
            "À l'équilibre : les deux s'égalisent, le gain total est maximal.",
          ],
        },
        {
          sousTitre: "5. Les limites de l'efficacité",
          texte: "Efficace ne veut pas dire juste : le marché ne se préoccupe pas de la répartition.",
          liste: [
            "Le surplus est réparti selon les dispositions à payer, donc selon les revenus.",
            "Un marché peut être efficace et laisser des ménages sans accès au bien.",
            "C'est l'une des raisons de l'intervention de l'État, que nous étudierons ensuite.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le surplus de production est égal à…", opts: ["prix de vente − coût de production", "disposition à payer − prix", "prix + coût"], ok: 0, expl: "C'est le gain net du vendeur." },
          { q: "Un producteur vend 1 500 Ar un bien qui lui coûte 900 Ar : son surplus est de…", opts: ["600 Ar", "2 400 Ar", "900 Ar"], ok: 0, expl: "1 500 − 900 = 600 Ar." },
          { q: "Le surplus total du marché est…", opts: ["la somme du surplus des acheteurs et des vendeurs", "le profit de l'État", "le chiffre d'affaires total"], ok: 0, expl: "Il mesure la richesse créée par les échanges." },
          { q: "À une quantité supérieure à l'équilibre…", opts: ["le coût dépasse la valeur accordée par l'acheteur", "le surplus total augmente", "tout le monde gagne"], ok: 0, expl: "La société perd sur les unités produites en trop." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Tous les producteurs ont le même coût de production sur un marché.", rep: false, expl: "Les conditions de production diffèrent d'un producteur à l'autre." },
          { txt: "Le surplus total est maximal à la quantité d'équilibre.", rep: true, expl: "Ni trop ni trop peu d'unités ne sont échangées." },
          { txt: "Un marché efficace garantit une répartition juste des richesses.", rep: false, expl: "L'efficacité ne dit rien de la répartition du surplus." },
          { txt: "Le producteur le plus efficace encaisse le surplus le plus élevé.", rep: true, expl: "Son coût étant plus bas, l'écart avec le prix est plus grand." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds en rédigeant le calcul.", pointsPar: 2, items: [
          { q: "Un paysan produit à 900 Ar le kilo et vend à 1 500 Ar. Calcule son surplus de production par kilo.", r: "Surplus = 1 500 − 900 = 600 Ar par kilo." },
          { q: "Prix du marché : 1 500 Ar. Trois producteurs ont des coûts de 1 000, 1 300 et 1 600 Ar. Calcule le surplus de chacun.", r: "Le premier : 500 Ar ; le deuxième : 200 Ar ; le troisième ne vend pas, son coût dépasse le prix." },
          { q: "Pourquoi le marché concurrentiel est-il dit efficace ?", r: "Parce qu'à l'équilibre, le surplus total est maximal : toutes les unités dont la valeur pour l'acheteur dépasse le coût de production sont échangées, et aucune unité dont le coût dépasse la valeur ne l'est." },
          { q: "Pourquoi l'efficacité du marché ne suffit-elle pas ?", r: "Parce qu'un marché peut être efficace et produire des situations très inégalitaires : le surplus se répartit selon les revenus, ce qui justifie l'intervention de l'État." },
        ]},
        { type: "appariement", consigne: "Relie chaque notion à sa mesure.", pointsPar: 1, items: [
          { g: ["Surplus du consommateur", "Surplus de production", "Surplus total", "Prix d'équilibre"], d: ["Prix reçu − coût de production", "Somme des deux surplus", "Rencontre de l'offre et de la demande", "Disposition à payer − prix payé"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 37 — RAS 3
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les imperfections du marché",
      theme: "Coordination par le marché et par l'État",
      ras: "Déterminer les différentes imperfections et les défaillances du marché",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "identifier les imperfections du marché et leurs conséquences sur le prix et la quantité",
      supportMeta: "Documents sur les prix locaux, études de cas, cahier",
      revision: [
        ["Qu'est-ce que le surplus de production ?", "La différence entre le prix de vente reçu et le coût de production."],
        ["Qu'est-ce qu'un oligopole ?", "Un marché dominé par un petit nombre d'offreurs."],
      ],
      mise: [
        "Sur la ligne de taxi-brousse d'une petite ville, trois compagnies se sont mises d'accord sur le prix du billet. Que se passe-t-il ?",
        "Les voyageurs paient plus cher et certains renoncent : l'entente fausse le jeu de la concurrence.",
      ],
      observation: "les études de cas sur les marchés locaux et les prix pratiqués",
      observationSupport: "Études de cas sur les marchés locaux : transport, carburant, produits de première nécessité",
      technAna: "Étude de cas, débat dirigé et questionnement",
      qa: [
        ["Qu'est-ce qu'une imperfection du marché ?", "Une situation dans laquelle les conditions de la concurrence pure et parfaite ne sont pas réunies : les offreurs disposent d'un pouvoir sur le prix."],
        ["Quelle est la première imperfection ?", "Le nombre limité d'offreurs : quelques entreprises, voire une seule, se partagent le marché — oligopole ou monopole."],
        ["Quelle est la deuxième imperfection ?", "La différenciation des produits : chaque offreur rend son bien difficilement comparable, ce qui lui donne une clientèle captive."],
        ["Qu'est-ce qu'une entente entre producteurs ?", "Un accord, le plus souvent secret, pour fixer les prix, se répartir le marché ou limiter les quantités produites."],
        ["Pourquoi l'entente est-elle condamnée ?", "Parce qu'elle fait payer au consommateur un prix supérieur à celui du marché concurrentiel : elle est interdite et sanctionnée par la loi."],
        ["Quel rôle jouent les barrières à l'entrée ?", "Elles protègent les offreurs en place et empêchent l'arrivée de concurrents qui feraient baisser les prix."],
        ["Quelles sont les conséquences de ces imperfections ?", "Un prix supérieur au coût de production, une quantité échangée plus faible, un profit durable pour les offreurs et une perte sèche pour la société."],
        ["Comment y remédier ?", "Par l'ouverture du marché à de nouveaux entrants, le contrôle des concentrations, la sanction des ententes et la régulation des prix quand le marché ne peut être ouvert."],
      ],
      synthese: "Donc, un marché est imparfait quand les offreurs disposent d'un pouvoir sur le prix : nombre limité d'offreurs, différenciation des produits, entente et barrières à l'entrée. Le prix s'élève au-dessus du coût de production, la quantité échangée diminue, et la société perd une partie du gain de l'échange.",
      motsCles: ["imperfection du marché", "pouvoir de marché", "différenciation", "entente", "barrière à l'entrée", "perte sèche", "régulation"],
      image: { file: "t11_u3_imperfections.png", legende: "Figure 33 — Les imperfections du marché et leurs conséquences." },
      contenu: [
        {
          sousTitre: "1. Le nombre limité d'offreurs",
          texte: "Quand ils sont peu nombreux, les offreurs peuvent agir sur le prix au lieu de le subir.",
          liste: [
            "Chacun sait que sa décision sera ressentie par les autres.",
            "La tentation d'agir ensemble remplace la concurrence.",
            "Exemple : les compagnies de taxi-brousse sur une même ligne.",
          ],
        },
        {
          sousTitre: "2. La différenciation des produits",
          texte: "Rendre son produit unique, c'est échapper à la comparaison par les prix.",
          liste: [
            "Différenciation réelle : qualité, service après-vente, innovation technique.",
            "Différenciation perçue : marque, emballage, publicité, réputation.",
            "Conséquence : une clientèle fidèle accepte de payer plus cher.",
            "Le vendeur garde un pouvoir de marché même s'il a des concurrents.",
          ],
        },
        {
          sousTitre: "3. L'entente entre producteurs",
          texte: "L'entente remplace la concurrence par la coordination entre offreurs.",
          liste: [
            "Entente sur les prix : tous pratiquent le même tarif élevé.",
            "Entente sur les quantités : tous limitent leur production pour soutenir le prix.",
            "Répartition du marché : chacun garde sa zone ou sa clientèle.",
            "Elle est illicite et sanctionnée par l'autorité de la concurrence.",
          ],
        },
        {
          sousTitre: "4. Les barrières à l'entrée",
          texte: "Sans barrière, les profits attireraient de nouveaux concurrents : les barrières empêchent ce retour à la normale.",
          liste: [
            "Investissement initial très lourd : usine, réseau de distribution.",
            "Autorisation administrative, licence, quota d'importation.",
            "Brevet, savoir-faire exclusif, maîtrise d'une ressource rare.",
            "Fidélité de la clientèle et coût de changement élevé pour l'acheteur.",
          ],
        },
        {
          sousTitre: "5. Les conséquences",
          texte: "Toutes ces imperfections produisent les mêmes effets, dans le même sens.",
          liste: [
            "Prix supérieur au coût de production : l'offreur dégage un profit durable.",
            "Quantité échangée plus faible qu'en concurrence.",
            "Perte sèche : des échanges mutuellement avantageux ne se font pas.",
            "Remèdes : ouvrir le marché, contrôler les concentrations, sanctionner les ententes, réguler les prix.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une imperfection du marché est…", opts: ["une situation où les offreurs ont un pouvoir sur le prix", "un marché équilibré", "un marché sans offreur"], ok: 0, expl: "Les conditions de la concurrence pure et parfaite ne sont pas réunies." },
          { q: "Une entente sur les prix est…", opts: ["illicite et sanctionnée", "encouragée par la loi", "sans effet"], ok: 0, expl: "Elle fait payer au consommateur un prix supérieur au prix concurrentiel." },
          { q: "La différenciation des produits donne…", opts: ["un pouvoir de marché au vendeur", "un prix unique sur le marché", "une sortie du marché"], ok: 0, expl: "Le produit n'est plus directement comparable à celui du concurrent." },
          { q: "Une barrière à l'entrée…", opts: ["empêche l'arrivée de nouveaux concurrents", "fait baisser les prix", "supprime le profit"], ok: 0, expl: "Elle protège les offreurs en place." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une imperfection du marché réduit la quantité échangée.", rep: true, expl: "Le prix plus élevé écarte une partie des acheteurs." },
          { txt: "La différenciation des produits supprime tout pouvoir de marché.", rep: false, expl: "Elle en donne un, au contraire, en fidélisant la clientèle." },
          { txt: "La perte sèche désigne des échanges avantageux qui ne se réalisent pas.", rep: true, expl: "C'est la part du surplus détruite par l'imperfection." },
          { txt: "Ouvrir un marché à de nouveaux entrants renforce les imperfections.", rep: false, expl: "C'est au contraire un remède : la concurrence fait baisser les prix." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Qu'est-ce qu'une imperfection du marché ? Donne deux exemples.", r: "C'est une situation où les conditions de la concurrence pure et parfaite ne sont pas réunies : nombre limité d'offreurs, différenciation des produits, entente ou barrières à l'entrée." },
          { q: "Pourquoi une entente sur les prix est-elle condamnée ?", r: "Parce qu'elle remplace la concurrence par un accord entre offreurs : le consommateur paie plus cher, la quantité échangée diminue, et l'entente est sanctionnée par la loi." },
          { q: "Quelles sont les conséquences d'une barrière à l'entrée ?", r: "Elle protège les offreurs en place, maintient le prix au-dessus du coût de production et permet un profit durable en empêchant l'arrivée de concurrents." },
          { q: "Cite deux remèdes aux imperfections du marché.", r: "L'ouverture du marché à de nouveaux entrants et la sanction des ententes, auxquels s'ajoutent le contrôle des concentrations et la régulation des prix." },
        ]},
        { type: "appariement", consigne: "Relie chaque imperfection à son exemple.", pointsPar: 1, items: [
          { g: ["Trois compagnies sur une ligne", "Produits portant une marque", "Licence très coûteuse", "Accord secret sur les tarifs"], d: ["Différenciation des produits", "Barrière à l'entrée", "Entente", "Nombre limité d'offreurs"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 38 — RAS 3
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "L'asymétrie d'information",
      theme: "Coordination par le marché et par l'État",
      ras: "Déterminer les différentes imperfections et les défaillances du marché",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "définir l'asymétrie d'information et expliquer ses conséquences sur le marché",
      supportMeta: "Mises en situation, études de cas, cahier",
      revision: [
        ["Qu'est-ce qu'une imperfection du marché ?", "Une situation où les offreurs disposent d'un pouvoir sur le prix."],
        ["Qu'est-ce qu'une barrière à l'entrée ?", "Un obstacle qui empêche un nouveau concurrent d'entrer sur le marché."],
      ],
      mise: [
        "Tu achètes un téléphone d'occasion sur un étal. Le vendeur sait qu'il va tomber en panne ; toi, tu l'ignores. Le marché peut-il bien fonctionner ?",
        "Non : celui qui sait plus que l'autre peut en profiter, et les bons produits finissent par disparaître du marché.",
      ],
      observation: "les mises en situation et études de cas distribuées en classe",
      observationSupport: "Mises en situation et études de cas sur le marché de l'occasion, le crédit et l'assurance",
      technAna: "Étude de cas, jeu de rôle et débat dirigé",
      qa: [
        ["Qu'est-ce que l'asymétrie d'information ?", "Une situation où l'une des parties à l'échange détient une information que l'autre n'a pas : le vendeur connaît l'état réel du bien, l'emprunteur connaît sa capacité réelle de remboursement."],
        ["Qu'est-ce que la sélection adverse ?", "Le mécanisme par lequel les mauvais produits chassent les bons : l'acheteur, incapable de distinguer la qualité, n'offre qu'un prix moyen, ce qui décourage les vendeurs de produits de bonne qualité."],
        ["Qu'est-ce que l'aléa moral ?", "Le changement de comportement après la signature du contrat : celui qui est assuré ou financé prend plus de risques parce qu'il n'en supporte pas seul les conséquences."],
        ["Donne trois exemples d'asymétrie d'information.", "Le marché de l'occasion : le vendeur connaît les défauts du bien. Le crédit : l'emprunteur connaît sa situation réelle. L'assurance : l'assuré connaît ses habitudes et ses risques."],
        ["Quelle est la conséquence la plus grave ?", "Le marché peut se réduire, voire disparaître : les échanges avantageux ne se font plus parce que la confiance manque."],
        ["Comment réduit-on l'asymétrie d'information ?", "Par l'information obligatoire du consommateur, les labels et les normes, la garantie, la réputation du vendeur, le recours à un intermédiaire de confiance et la régulation."],
        ["Quel rôle joue la réputation ?", "Un vendeur qui veut rester sur le marché a intérêt à livrer une qualité constante : la réputation remplace l'information manquante."],
        ["L'État doit-il intervenir ?", "Oui, quand l'asymétrie est forte et que ses conséquences sont graves : étiquetage obligatoire, contrôle des médicaments, agrément des établissements de crédit."],
      ],
      synthese: "Donc, l'asymétrie d'information est une défaillance du marché : celui qui en sait plus peut en profiter. Elle provoque la sélection adverse — les mauvais produits chassent les bons — et l'aléa moral — le comportement change après la signature. Information obligatoire, labels, garanties et réputation permettent d'y remédier.",
      motsCles: ["asymétrie d'information", "sélection adverse", "aléa moral", "confiance", "label", "garantie", "régulation"],
      image: { file: "t11_u3_asymetrie.jpg", legende: "Figure 34 — L'asymétrie d'information sur un marché de l'occasion." },
      contenu: [
        {
          sousTitre: "1. Quand l'un en sait plus que l'autre",
          texte: "Le bon fonctionnement du marché suppose que les deux parties soient également informées. Ce n'est presque jamais le cas.",
          liste: [
            "Le vendeur connaît l'état réel de ce qu'il vend.",
            "L'acheteur découvre souvent la qualité après l'achat.",
            "L'écart d'information avantage systématiquement celui qui sait.",
          ],
        },
        {
          sousTitre: "2. La sélection adverse",
          texte: "L'ignorance de l'acheteur dégrade la qualité moyenne des produits échangés.",
          liste: [
            "Incapable de distinguer le bon du mauvais, il propose un prix moyen.",
            "Les vendeurs de bonne qualité refusent ce prix et quittent le marché.",
            "Il ne reste que les produits médiocres : le marché se dégrade.",
            "Exemple : les téléphones d'occasion dont on ignore l'historique.",
          ],
        },
        {
          sousTitre: "3. L'aléa moral",
          texte: "Le risque naît après la signature, quand le comportement échappe à l'autre partie.",
          liste: [
            "Un emprunteur financé peut se lancer dans un projet plus risqué qu'il ne l'aurait fait avec ses propres fonds.",
            "Un assuré peut moins surveiller ses biens une fois couvert.",
            "Un salarié difficile à surveiller peut réduire son effort.",
          ],
        },
        {
          sousTitre: "4. Trois marchés concernés",
          texte: "Certains marchés sont particulièrement exposés à ce problème.",
          liste: [
            "Marché de l'occasion : véhicules, téléphones, électroménager.",
            "Marché du crédit : la banque connaît mal la situation réelle de l'emprunteur.",
            "Marché de l'assurance : l'assuré connaît ses risques mieux que l'assureur.",
            "Marché des médicaments : le patient ne peut juger la qualité du produit.",
          ],
        },
        {
          sousTitre: "5. Les remèdes",
          texte: "Plusieurs dispositifs rendent l'information à celui qui ne l'a pas.",
          liste: [
            "L'information obligatoire : étiquetage, notice, prix affiché.",
            "Les labels et les normes : ils garantissent un niveau de qualité vérifié.",
            "La garantie et le service après-vente : le vendeur s'engage sur son produit.",
            "La réputation : un vendeur établi perdrait trop à tromper ses clients.",
            "L'intermédiaire de confiance et le contrôle public pour les enjeux les plus graves.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "L'asymétrie d'information est…", opts: ["une information détenue par une seule des deux parties", "une information gratuite", "un excès de transparence"], ok: 0, expl: "L'une des parties en sait plus que l'autre." },
          { q: "La sélection adverse désigne…", opts: ["l'éviction des bons produits par les mauvais", "un choix libre de l'acheteur", "une baisse des prix"], ok: 0, expl: "Le prix moyen décourage les vendeurs de bonne qualité." },
          { q: "L'aléa moral apparaît…", opts: ["après la signature du contrat", "avant la négociation", "au moment du paiement"], ok: 0, expl: "Le comportement change une fois la couverture acquise." },
          { q: "Une garantie offerte par le vendeur sert à…", opts: ["rétablir la confiance de l'acheteur", "augmenter le prix sans contrepartie", "supprimer la concurrence"], ok: 0, expl: "Elle engage le vendeur sur la qualité réelle du bien." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Sur un marché, l'acheteur et le vendeur disposent toujours de la même information.", rep: false, expl: "Le vendeur connaît généralement mieux ce qu'il vend." },
          { txt: "La sélection adverse peut faire disparaître un marché.", rep: true, expl: "Les bons produits quittent le marché, la confiance disparaît." },
          { txt: "L'aléa moral précède la signature du contrat.", rep: false, expl: "Il apparaît après, quand le comportement change." },
          { txt: "Un label de qualité réduit l'asymétrie d'information.", rep: true, expl: "Il certifie un niveau que l'acheteur ne peut vérifier seul." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis l'asymétrie d'information et donne un exemple.", r: "C'est une situation où l'une des parties détient une information que l'autre n'a pas : par exemple, le vendeur d'un téléphone d'occasion connaît ses défauts que l'acheteur ignore." },
          { q: "Explique le mécanisme de la sélection adverse.", r: "Incapable de distinguer la qualité, l'acheteur propose un prix moyen ; les vendeurs de bonne qualité refusent ce prix et quittent le marché, si bien que les mauvais produits finissent par dominer." },
          { q: "Quelle différence y a-t-il entre sélection adverse et aléa moral ?", r: "La sélection adverse joue avant l'échange, par la qualité cachée du bien ; l'aléa moral joue après la signature, par le changement de comportement de la partie couverte." },
          { q: "Cite trois remèdes à l'asymétrie d'information.", r: "L'information obligatoire du consommateur, les labels et normes de qualité, et la garantie offerte par le vendeur, appuyés par la réputation et le contrôle public." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["asymétrie", "sélection adverse", "aléa moral", "réputation", "label"], items: [
          { phrase: "L'_________ d'information désavantage celui qui en sait moins.", mot: "asymétrie" },
          { phrase: "Les mauvais produits chassent les bons : c'est la _________.", mot: "sélection adverse" },
          { phrase: "Le comportement change après la signature du contrat : c'est l'_________.", mot: "aléa moral" },
          { phrase: "Un _________ certifie un niveau de qualité vérifié.", mot: "label" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 39 — RAS 3
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Externalités négatives et biens collectifs",
      theme: "Coordination par le marché et par l'État",
      ras: "Déterminer les différentes imperfections et les défaillances du marché",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "définir l'externalité négative et le bien collectif, et expliquer la défaillance du marché",
      supportMeta: "Documents sur l'environnement local, études de cas, cahier",
      revision: [
        ["Qu'est-ce que la sélection adverse ?", "Le mécanisme par lequel les mauvais produits chassent les bons."],
        ["Cite un remède à l'asymétrie d'information.", "L'étiquetage obligatoire, un label de qualité ou la garantie du vendeur."],
      ],
      mise: [
        "Une usine rejette ses eaux usées dans la rivière où le village puise son eau. Qui paie le coût ?",
        "Le village, pas l'usine : la rivière polluée est une externalité négative que le marché ne compte pas.",
      ],
      observation: "les documents sur les pollutions et les équipements collectifs de la localité",
      observationSupport: "Documents sur les pollutions locales et les équipements collectifs : route, école, éclairage public",
      technAna: "Étude de document, débat dirigé et enquête de terrain",
      qa: [
        ["Qu'est-ce qu'une externalité ?", "Un effet de l'activité d'un agent sur le bien-être d'un tiers, sans que ce soit payé ni compensé par le marché."],
        ["Qu'est-ce qu'une externalité négative ?", "Un coût imposé à autrui sans compensation : fumée d'usine, eau polluée, bruit, déforestation."],
        ["Quelle est la conséquence d'une externalité négative ?", "Le marché produit trop : le prix du bien ne reflète pas le coût supporté par la collectivité."],
        ["Qu'est-ce qu'une externalité positive ?", "Un avantage procuré à autrui sans rémunération : la formation d'un salarié, l'entretien d'un jardin, la vaccination d'un voisin."],
        ["Qu'est-ce qu'un bien collectif ?", "Un bien dont l'usage par une personne n'empêche pas celui des autres et dont personne ne peut être exclu : éclairage public, digue, route, défense nationale."],
        ["Pourquoi le marché privé ne fournit-il pas assez de biens collectifs ?", "Parce que chacun peut en profiter sans payer : c'est le comportement du passager clandestin, qui décourage l'investissement privé."],
        ["Comment remédie-t-on aux externalités négatives ?", "Par une taxe, une norme ou une réglementation, un système de permis d'émission, ou la négociation entre les parties concernées."],
        ["Qu'est-ce qu'un bien commun ?", "Un bien dont l'usage est rival mais dont l'exclusion est difficile : forêt, pêcherie, pâturage. Laissé libre, il est surexploité."],
      ],
      synthese: "Donc, le marché échoue quand le prix ne dit pas tout le coût ni tout l'avantage : l'externalité négative fait produire trop, le bien collectif n'est pas fourni en quantité suffisante. Ces défaillances du marché appellent une action collective, le plus souvent publique.",
      motsCles: ["externalité", "externalité négative", "externalité positive", "bien collectif", "passager clandestin", "bien commun", "taxe"],
      image: { file: "t11_u3_externalites.png", legende: "Figure 35 — Externalités négatives et biens collectifs." },
      contenu: [
        {
          sousTitre: "1. Un coût que personne ne paie",
          texte: "L'externalité naît quand une activité affecte autrui sans passer par un prix.",
          liste: [
            "L'usine pollue : elle ne paie ni l'eau potable ni la santé dégradée.",
            "Ce coût est supporté par la collectivité, pas par le producteur.",
            "Le prix du bien est alors trop bas par rapport à son coût réel pour la société.",
          ],
        },
        {
          sousTitre: "2. Externalité négative : on produit trop",
          texte: "Puisque le pollueur ne paie pas, son activité paraît plus rentable qu'elle ne l'est.",
          liste: [
            "La quantité produite dépasse la quantité souhaitable pour la société.",
            "Exemples : fumées industrielles, déchets dans la rivière, bruit, déforestation.",
            "Remèdes : taxe correspondant au coût du dommage, normes d'émission, permis, négociation entre les parties.",
          ],
        },
        {
          sousTitre: "3. Externalité positive : on produit trop peu",
          texte: "Quand l'avantage profite à d'autres sans être rémunéré, l'activité est découragée.",
          liste: [
            "Exemples : la formation professionnelle, la vaccination, la rénovation d'une façade.",
            "Celui qui agit ne touche qu'une partie du bénéfice qu'il crée.",
            "Remèdes : subvention, aide publique, gratuité du service concerné.",
          ],
        },
        {
          sousTitre: "4. Les biens collectifs",
          texte: "Deux propriétés définissent le bien collectif : non-rivalité et non-exclusion.",
          liste: [
            "Non-rivalité : l'usage par une personne n'empêche pas celui d'une autre — éclairage public.",
            "Non-exclusion : impossible d'empêcher quelqu'un d'en profiter — digue, défense nationale.",
            "Conséquence : le passager clandestin profite sans payer.",
            "Le marché privé n'en fournit donc pas assez : la puissance publique doit le faire.",
          ],
        },
        {
          sousTitre: "5. Les biens communs",
          texte: "Les ressources partagées, rivales mais ouvertes à tous, sont surexploitées.",
          liste: [
            "Exemples : forêt, pêcherie, pâturage, nappe phréatique.",
            "Chacun prélève le maximum avant que l'autre ne le fasse.",
            "La ressource s'épuise : c'est ce qu'on appelle le risque de surexploitation des biens communs.",
            "Remèdes : quotas, règles coutumières, gestion communautaire, réglementation publique.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une externalité négative est…", opts: ["un coût imposé à autrui sans compensation", "un coût payé par le producteur", "un avantage gratuit"], ok: 0, expl: "Elle affecte un tiers sans passer par un prix." },
          { q: "Une externalité négative conduit le marché à…", opts: ["produire trop", "produire trop peu", "produire juste"], ok: 0, expl: "Le coût supporté par la collectivité n'est pas compté." },
          { q: "L'éclairage public est…", opts: ["un bien collectif", "un bien privé", "un bien commun"], ok: 0, expl: "Non-rival et non-exclusif." },
          { q: "Le passager clandestin désigne…", opts: ["celui qui profite d'un bien collectif sans payer", "un voyageur sans billet", "un vendeur ambulant"], ok: 0, expl: "Il décourage la fourniture privée du bien." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une taxe sur la pollution est un remède aux externalités négatives.", rep: true, expl: "Elle fait payer au pollueur le coût imposé à la collectivité." },
          { txt: "Le marché privé fournit spontanément assez de biens collectifs.", rep: false, expl: "Le passager clandestin rend l'investissement privé non rentable." },
          { txt: "La vaccination est une externalité positive.", rep: true, expl: "Elle protège aussi l'entourage de la personne vaccinée." },
          { txt: "Une pêcherie partagée est un exemple de bien commun.", rep: true, expl: "L'usage en est rival, mais l'exclusion y est difficile." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis l'externalité négative et donne deux exemples.", r: "C'est un coût imposé à un tiers sans compensation : la fumée d'une usine, une rivière polluée, le bruit ou la déforestation." },
          { q: "Pourquoi une externalité négative fait-elle produire trop ?", r: "Parce que le pollueur ne paie pas le dommage causé : son coût privé est inférieur au coût réel pour la société, ce qui rend l'activité artificiellement rentable." },
          { q: "Quelles sont les deux propriétés d'un bien collectif ?", r: "La non-rivalité — l'usage par l'un n'empêche pas celui des autres — et la non-exclusion — on ne peut empêcher personne d'en profiter." },
          { q: "Cite deux remèdes aux externalités négatives.", r: "Une taxe correspondant au coût du dommage et des normes d'émission, auxquels s'ajoutent les permis et la négociation entre les parties." },
        ]},
        { type: "appariement", consigne: "Relie chaque notion à son exemple.", pointsPar: 1, items: [
          { g: ["Fumée d'usine", "Vaccination", "Éclairage public", "Pêcherie partagée"], d: ["Externalité positive", "Bien collectif", "Bien commun", "Externalité négative"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 40 — RAS 4
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les raisons de l'intervention de l'État dans l'économie",
      theme: "Coordination par le marché et par l'État",
      ras: "Expliquer les raisons de l'intervention de l'État dans l'économie",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "expliquer pourquoi l'État intervient et énumérer ses activités économiques",
      supportMeta: "Documents sur les services publics, tableaux statistiques, cahier",
      revision: [
        ["Qu'est-ce qu'un bien collectif ?", "Un bien non-rival et non-exclusif, comme l'éclairage public."],
        ["Pourquoi une externalité négative fait-elle produire trop ?", "Parce que le pollueur ne paie pas le dommage causé à la collectivité."],
      ],
      mise: [
        "Qui construit la route qui dessert ton village, et qui paie ?",
        "La collectivité, par l'impôt : la route est un bien dont personne ne peut être exclu et que le privé ne fournirait pas.",
      ],
      observation: "les documents présentant les services publics et les activités de l'État",
      observationSupport: "Documents sur les services publics, tableaux statistiques, textes officiels",
      technAna: "Étude de document, débat dirigé et situation-problème",
      qa: [
        ["Pourquoi l'État intervient-il dans l'économie ?", "Parce que le marché, laissé seul, ne fournit pas tout ce dont la société a besoin et ne répartit pas équitablement les richesses."],
        ["Quelles activités économiques l'État doit-il fournir ?", "Les infrastructures — routes, ports, réseaux —, l'éducation, la santé, la sécurité, la justice et la monnaie."],
        ["Comment l'État remédie-t-il aux défaillances du marché ?", "En réglementant les externalités, en fournissant les biens collectifs, en imposant la transparence et en régulant la concurrence."],
        ["Comment réduit-il les inégalités ?", "Par l'impôt progressif et les prestations sociales, par la gratuité ou la subvention des services essentiels, et par l'aide aux régions défavorisées."],
        ["Quels sont les grands objectifs de la politique économique ?", "La croissance, l'emploi, la stabilité des prix et l'équilibre extérieur."],
        ["Quels instruments l'État utilise-t-il ?", "La dépense publique, l'impôt, la réglementation, la subvention et l'entreprise publique."],
        ["Quelles sont les limites de l'intervention publique ?", "Le coût de financement par l'impôt ou l'emprunt, la lourdeur administrative, le risque d'inefficacité et la difficulté de bien connaître les besoins réels."],
        ["Que se passe-t-il si l'État intervient trop ?", "Il peut freiner l'initiative privée, alourdir les prélèvements et détourner des ressources d'usages plus utiles : l'enjeu est de trouver le bon dosage."],
      ],
      synthese: "Donc, l'État intervient pour corriger les défaillances du marché — externalités, biens collectifs, asymétrie d'information, concurrence imparfaite — et pour réduire les inégalités. Il poursuit quatre objectifs : la croissance, l'emploi, la stabilité des prix et l'équilibre extérieur. Son action a un coût, qu'il faut comparer au bénéfice attendu.",
      motsCles: ["intervention de l'État", "défaillance du marché", "service public", "inégalités", "redistribution", "croissance", "réglementation"],
      image: { file: "t11_u3_etat.png", legende: "Figure 36 — Les raisons de l'intervention de l'État dans l'économie." },
      contenu: [
        {
          sousTitre: "1. Ce que le marché ne fournit pas",
          texte: "Certains besoins ne trouvent pas de réponse rentable par le marché privé.",
          liste: [
            "Les biens collectifs : route, digue, éclairage, défense.",
            "Les services dont l'accès est un droit : école, soins, justice.",
            "Les investissements trop lourds pour un acteur privé : port, barrage, réseau électrique.",
          ],
        },
        {
          sousTitre: "2. Corriger les défaillances du marché",
          texte: "L'État répare ce que le prix ne dit pas ou dit mal.",
          liste: [
            "Externalités négatives : normes, taxes, contrôles.",
            "Asymétrie d'information : étiquetage obligatoire, contrôle des produits dangereux.",
            "Concurrence imparfaite : contrôle des concentrations, sanction des ententes.",
            "Cadre juridique : contrats, propriété, règlement des litiges.",
          ],
        },
        {
          sousTitre: "3. Réduire les inégalités",
          texte: "Un marché efficace peut laisser des ménages sans accès aux biens essentiels.",
          liste: [
            "Impôt progressif : il prélève davantage sur les revenus élevés.",
            "Prestations sociales : aides, bourses, allocations.",
            "Services essentiels gratuits ou subventionnés : école, eau, santé.",
            "Péréquation entre régions : les ressources vont vers les zones les moins dotées.",
          ],
        },
        {
          sousTitre: "4. Les objectifs de la politique économique",
          texte: "Quatre objectifs guident l'action économique de l'État.",
          liste: [
            "La croissance : accroître durablement la production du pays.",
            "L'emploi : permettre à chacun de travailler.",
            "La stabilité des prix : éviter que la monnaie perde sa valeur.",
            "L'équilibre extérieur : éviter un déficit durable avec l'étranger.",
          ],
        },
        {
          sousTitre: "5. Les limites de l'action publique",
          texte: "Intervenir n'est jamais gratuit, ni toujours efficace.",
          liste: [
            "Le financement : impôt ou emprunt, qui pèsent sur les ménages et les générations futures.",
            "La lourdeur administrative : les décisions sont lentes et parfois mal ciblées.",
            "Le risque d'inefficacité : une entreprise publique protégée peut mal gérer ses coûts.",
            "L'enjeu est le dosage : ni trop d'État, ni trop peu.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "L'État fournit les biens collectifs parce que…", opts: ["le marché privé n'en fournit pas assez", "les entreprises l'exigent", "le prix est trop élevé"], ok: 0, expl: "Le passager clandestin rend l'investissement privé non rentable." },
          { q: "Parmi ces objectifs, lequel est un objectif de la politique économique ?", opts: ["la croissance", "la publicité", "la concurrence fiscale"], ok: 0, expl: "Avec l'emploi, la stabilité des prix et l'équilibre extérieur." },
          { q: "Un impôt progressif…", opts: ["prélève proportionnellement plus sur les revenus élevés", "est identique pour tous", "avantage les plus riches"], ok: 0, expl: "Il sert à réduire les inégalités." },
          { q: "Une limite de l'intervention publique est…", opts: ["son coût de financement", "son absence d'effet", "sa rapidité excessive"], ok: 0, expl: "L'impôt et l'emprunt ont un coût pour la collectivité." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La stabilité des prix est un objectif de la politique économique.", rep: true, expl: "Elle préserve le pouvoir d'achat de la monnaie." },
          { txt: "L'État n'a aucun rôle dans la correction des externalités.", rep: false, expl: "Il intervient par les normes, les taxes et les contrôles." },
          { txt: "Les prestations sociales servent à réduire les inégalités.", rep: true, expl: "Elles redistribuent une partie des ressources vers les ménages modestes." },
          { txt: "L'intervention de l'État est toujours sans coût pour la collectivité.", rep: false, expl: "Elle se finance par l'impôt ou l'emprunt." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite trois raisons de l'intervention de l'État dans l'économie.", r: "Fournir les biens collectifs que le marché ne produit pas, corriger les défaillances du marché comme les externalités, et réduire les inégalités par la redistribution." },
          { q: "Quels sont les quatre objectifs de la politique économique ?", r: "La croissance, l'emploi, la stabilité des prix et l'équilibre extérieur." },
          { q: "Comment l'État réduit-il les inégalités économiques ?", r: "Par un impôt progressif, des prestations sociales, la gratuité ou la subvention des services essentiels et la péréquation entre régions." },
          { q: "Cite deux limites de l'intervention publique.", r: "Son coût de financement par l'impôt ou l'emprunt, et la lourdeur administrative qui rend les décisions lentes et parfois mal ciblées." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Un bien dont personne ne peut être exclu est un bien", suite: "collectif" },
          { debut: "La fumée d'usine est une externalité", suite: "négative" },
          { debut: "Un impôt _________ prélève davantage sur les revenus élevés", suite: "progressif" },
          { debut: "La stabilité des prix préserve le pouvoir", suite: "d'achat" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 41 — RAS 4
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les politiques conjoncturelles",
      theme: "Coordination par le marché et par l'État",
      ras: "Expliquer les raisons de l'intervention de l'État dans l'économie",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "distinguer politique conjoncturelle et politique structurelle, et décrire leurs instruments",
      supportMeta: "Tableaux statistiques, articles de presse économique, cahier",
      revision: [
        ["Quels sont les quatre objectifs de la politique économique ?", "La croissance, l'emploi, la stabilité des prix et l'équilibre extérieur."],
        ["Cite un instrument de l'État dans l'économie.", "La dépense publique, l'impôt, la réglementation ou la subvention."],
      ],
      mise: [
        "Quand les prix montent trop vite, l'État doit-il dépenser plus ou moins ?",
        "Moins : il freine la demande pour calmer les prix. C'est une politique de rigueur, l'inverse d'une politique de relance.",
      ],
      observation: "les tableaux statistiques et articles présentant l'évolution de l'activité et des prix",
      observationSupport: "Tableaux statistiques et articles sur l'activité, l'emploi et les prix, affichés ou distribués",
      technAna: "Étude de document, débat dirigé et situation-problème",
      qa: [
        ["Qu'est-ce que la conjoncture ?", "La situation économique à court terme : le niveau de l'activité, de l'emploi et des prix à un moment donné."],
        ["Qu'est-ce qu'une politique conjoncturelle ?", "Une action de court terme de l'État destinée à agir sur la conjoncture : soutenir l'activité quand elle ralentit, la freiner quand elle surchauffe."],
        ["Quelle est la différence avec une politique structurelle ?", "La politique structurelle agit sur le long terme — formation, infrastructures, institutions — tandis que la politique conjoncturelle agit dans l'immédiat."],
        ["Qu'est-ce qu'une politique de relance ?", "Une politique qui augmente la demande globale en période de ralentissement : plus de dépenses publiques, moins d'impôts, des taux plus bas."],
        ["Qu'est-ce qu'une politique de rigueur ?", "Une politique qui freine la demande en période de surchauffe : moins de dépenses publiques, plus d'impôts, des taux plus élevés."],
        ["Quels sont les deux volets de la politique conjoncturelle ?", "La politique budgétaire — dépense publique et impôt — et la politique monétaire — taux d'intérêt et quantité de monnaie."],
        ["Quels sont les risques d'une relance mal calibrée ?", "L'inflation si la demande dépasse l'offre disponible, et l'endettement si le déficit se creuse durablement."],
        ["Pourquoi les effets ne sont-ils pas immédiats ?", "Parce qu'il faut du temps pour voter un budget, lancer des travaux et que les dépenses se diffusent dans l'économie : c'est le délai d'action de la politique économique."],
      ],
      synthese: "Donc, la politique conjoncturelle agit à court terme sur l'activité par deux leviers : le budget — dépenses et impôts — et la monnaie — taux d'intérêt et quantité de monnaie en circulation. On dépense davantage pour relancer une économie ralentie, on dépense moins et on relève les taux pour calmer une économie qui surchauffe.",
      motsCles: ["conjoncture", "politique conjoncturelle", "relance", "rigueur", "politique budgétaire", "politique monétaire", "inflation"],
      image: { file: "t11_u3_politiques.png", legende: "Figure 37 — Relance et rigueur : les deux orientations de la politique conjoncturelle." },
      contenu: [
        {
          sousTitre: "1. La conjoncture",
          texte: "L'économie connaît des hauts et des bas : la conjoncture les décrit.",
          liste: [
            "Expansion : la production augmente, l'emploi progresse.",
            "Ralentissement ou récession : la production baisse, le chômage augmente.",
            "La conjoncture se mesure par la production, les prix, l'emploi et les échanges extérieurs.",
          ],
        },
        {
          sousTitre: "2. Court terme et long terme",
          texte: "Deux politiques se distinguent par leur horizon d'action.",
          liste: [
            "Politique conjoncturelle : agir dans l'année sur l'activité et les prix.",
            "Politique structurelle : agir sur plusieurs années — routes, écoles, formation, institutions.",
            "Les deux se complètent : sans infrastructures, la relance ne produit rien de durable.",
          ],
        },
        {
          sousTitre: "3. La politique de relance",
          texte: "Quand l'activité ralentit, l'État soutient la demande.",
          liste: [
            "Dépense publique accrue : travaux, équipements, aides aux ménages.",
            "Impôts réduits : les ménages et les entreprises gardent davantage pour consommer et investir.",
            "Taux d'intérêt plus bas : le crédit coûte moins cher, l'investissement repart.",
          ],
        },
        {
          sousTitre: "4. La politique de rigueur",
          texte: "Quand les prix s'emballent, l'État freine la demande.",
          liste: [
            "Dépense publique réduite : moins de commandes à l'économie.",
            "Impôts relevés : le pouvoir d'achat disponible diminue.",
            "Taux d'intérêt relevés : le crédit devient plus cher, la consommation et l'investissement ralentissent.",
          ],
        },
        {
          sousTitre: "5. Les limites de l'action conjoncturelle",
          texte: "Agir sur la conjoncture est un exercice délicat, aux effets incertains.",
          liste: [
            "Délai d'action : entre la décision et son effet, plusieurs mois peuvent passer.",
            "Risque d'inflation : une relance trop forte fait monter les prix.",
            "Risque d'endettement : un déficit répété doit être financé et remboursé.",
            "Dépendance extérieure : une petite économie subit les chocs venus de l'étranger.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une politique conjoncturelle agit…", opts: ["à court terme sur l'activité", "sur plusieurs décennies", "uniquement sur l'étranger"], ok: 0, expl: "Elle vise la situation économique immédiate." },
          { q: "Pour relancer une économie en ralentissement, l'État…", opts: ["augmente la dépense publique", "relève les impôts", "augmente les taux"], ok: 0, expl: "Il soutient la demande globale." },
          { q: "La politique monétaire agit sur…", opts: ["les taux d'intérêt et la monnaie", "les routes et les écoles", "le droit du travail"], ok: 0, expl: "Elle est conduite par la banque centrale." },
          { q: "Une relance trop forte risque de provoquer…", opts: ["de l'inflation", "une baisse des prix", "une pénurie de main-d'œuvre"], ok: 0, expl: "La demande dépasse l'offre disponible." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une politique de rigueur relève les impôts et réduit la dépense publique.", rep: true, expl: "Elle freine une demande jugée excessive." },
          { txt: "La politique structurelle agit dans l'immédiat sur la conjoncture.", rep: false, expl: "Elle agit sur le long terme : infrastructures, formation, institutions." },
          { txt: "Le délai d'action est un inconvénient de la politique conjoncturelle.", rep: true, expl: "L'effet se fait sentir plusieurs mois après la décision." },
          { txt: "Une baisse des taux d'intérêt encourage l'investissement.", rep: true, expl: "Le crédit coûte moins cher, les projets deviennent rentables." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Quelle différence y a-t-il entre politique conjoncturelle et politique structurelle ?", r: "La politique conjoncturelle agit à court terme sur l'activité et les prix ; la politique structurelle agit sur le long terme sur les infrastructures, la formation et les institutions." },
          { q: "Cite deux mesures d'une politique de relance.", r: "Une hausse de la dépense publique — travaux, équipements — et une baisse des impôts, appuyées par une baisse des taux d'intérêt." },
          { q: "Quels sont les deux volets de la politique conjoncturelle ?", r: "La politique budgétaire, qui joue sur la dépense publique et l'impôt, et la politique monétaire, qui joue sur les taux d'intérêt et la quantité de monnaie." },
          { q: "Cite deux limites de l'action conjoncturelle.", r: "Le délai entre la décision et son effet, et le risque d'inflation ou d'endettement si la relance est trop forte ou trop longue." },
        ]},
        { type: "appariement", consigne: "Relie chaque mesure à son orientation.", pointsPar: 1, items: [
          { g: ["Augmenter les travaux publics", "Relever les taux d'intérêt", "Réduire les impôts", "Réduire la dépense publique"], d: ["Rigueur", "Relance", "Rigueur", "Relance"], pairs: [[0, 1], [1, 0], [2, 1], [3, 0]] },
        ]},
      ],
    },
  ],
};

module.exports = U;
