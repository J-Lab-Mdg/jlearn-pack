// ============================================================
// data-unite2.js — Manuel SES T11 série L
// Unité II — Monnaie et financement (14 heures)
// RAS 1 : Evaluer les formes de la monnaie et ses fonctions
// RAS 2 : Déterminer l'utilité de la création monétaire
// RAS 3 : Evaluer les modes de financement de l'économie
// RAS 4 : Déterminer la relation entre le taux d'intérêt, les risques de crédit,
//         la monnaie
// Découpage : 5 séances de cours + 1 révision + 1 sujet d'examen (2 h par séance)
// Valeurs : Persévérance, Responsabilité
// ============================================================

const U = {
  num: "II",
  titre: "Monnaie et financement",
  ras: "Evaluer les formes de la monnaie et ses fonctions · Déterminer l'utilité de la création monétaire · Evaluer les modes de financement de l'économie · Déterminer la relation entre le taux d'intérêt, les risques de crédit, la monnaie",
  valeurs: "Persévérance, Responsabilité",
  duree: "14 heures",
  themes: [
    "La monnaie : utilité, fonctions et formes",
    "La création monétaire, la masse monétaire et la banque centrale",
    "Le système financier : besoins et capacités de financement",
    "Le financement de l'investissement : autofinancement, financement direct et indirect",
    "Le taux d'intérêt : rôles, calcul, taux nominal et réel, risque de crédit",
  ],
  topics: [
    // ---------------------------------------------------------
    // SÉANCE 10
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La monnaie : utilité, fonctions et formes",
      theme: "Monnaie et financement",
      ras: "Evaluer les formes de la monnaie et ses fonctions",
      valeurs: "Persévérance, Responsabilité",
      objectif: "expliquer l'utilité de la monnaie et distinguer ses fonctions et ses formes",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Qu'est-ce que la valeur ajoutée ?", "La valeur de la production moins les consommations intermédiaires."],
        ["Cite deux acteurs externes de l'entreprise.", "Les clients et les fournisseurs, ou encore les banques."],
      ],
      mise: [
        "Pourquoi ne paie-t-on pas un sac de riz avec un autre sac de riz ?",
        "Parce que le troc oblige à une double coïncidence des besoins. La monnaie lève cet obstacle : elle sert d'intermédiaire accepté par tous.",
      ],
      observation: "le schéma des fonctions et des formes de la monnaie",
      observationSupport: "Schéma de la monnaie affiché ou distribué",
      technAna: "Lecture de schéma et questionnement dirigé",
      qa: [
        ["Qu'est-ce que la monnaie ?", "Un bien ou un instrument accepté par tous pour régler les échanges et mesurer les valeurs."],
        ["Quel problème la monnaie résout-elle ?", "Celui du troc, qui exige une double coïncidence des besoins : chacun doit vouloir ce que l'autre offre."],
        ["Quelle est la première fonction de la monnaie ?", "Intermédiaire des échanges : elle sert à acheter et à se libérer d'une dette."],
        ["Quelle est la deuxième fonction ?", "Unité de compte : elle sert à mesurer les valeurs et à comparer les prix."],
        ["Quelle est la troisième fonction ?", "Réserve de valeur : elle permet d'épargner et de reporter un achat dans le temps."],
        ["Qu'est-ce que la monnaie fiduciaire ?", "La monnaie matérielle : billets et pièces, que l'on détient physiquement."],
        ["Qu'est-ce que la monnaie scripturale ?", "La monnaie inscrite en compte : virements, chèques, cartes, prélèvements."],
        ["De quoi la valeur de la monnaie dépend-elle ?", "De la confiance : une monnaie n'a de valeur que si ceux qui la reçoivent pensent pouvoir s'en servir à leur tour."],
      ],
      synthese: "Donc, la monnaie supprime la contrainte du troc en servant d'intermédiaire accepté par tous. Elle remplit trois fonctions : intermédiaire des échanges, unité de compte et réserve de valeur. Elle prend deux formes, fiduciaire et scripturale, et sa valeur repose sur la confiance.",
      motsCles: ["monnaie", "troc", "intermédiaire des échanges", "unité de compte", "réserve de valeur", "monnaie fiduciaire", "monnaie scripturale", "confiance"],
      image: { file: "t11_l_monnaie.png", legende: "Figure 8 — Les fonctions et les formes de la monnaie." },
      contenu: [
        {
          sousTitre: "1. Pourquoi la monnaie ?",
          texte: "Le troc impose une condition difficile à réunir.",
          liste: [
            "Il faut que chacun veuille ce que l'autre possède : double coïncidence des besoins.",
            "Il faut se mettre d'accord sur la quantité échangée.",
            "La monnaie lève les deux obstacles : tout s'échange contre elle.",
          ],
        },
        {
          sousTitre: "2. Les trois fonctions de la monnaie",
          texte: "Un même instrument remplit trois rôles.",
          liste: [
            "Intermédiaire des échanges : elle sert à payer.",
            "Unité de compte : elle mesure et compare les valeurs.",
            "Réserve de valeur : elle conserve le pouvoir d'acheter dans le temps.",
          ],
        },
        {
          sousTitre: "3. Les deux formes de la monnaie",
          texte: "La même monnaie circule sous deux formes.",
          liste: [
            "Monnaie fiduciaire : billets et pièces, détenus physiquement.",
            "Monnaie scripturale : écritures en compte, virements et cartes.",
            "Dans les économies modernes, la scripturale domine largement.",
          ],
        },
        {
          sousTitre: "4. La confiance, condition de la valeur",
          texte: "Une monnaie ne vaut que par l'usage qu'on en attend.",
          liste: [
            "Elle est acceptée parce que d'autres l'accepteront à leur tour.",
            "Si la confiance se rompt, la monnaie perd sa fonction.",
            "La puissance publique et la banque centrale garantissent ce cadre.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le troc exige…", opts: ["une double coïncidence des besoins", "un compte bancaire", "une banque centrale"], ok: 0, expl: "Chacun doit vouloir ce que l'autre offre." },
          { q: "Mesurer et comparer les prix est la fonction d'…", opts: ["unité de compte", "réserve de valeur", "intermédiaire des échanges"], ok: 0, expl: "C'est l'étalon des valeurs." },
          { q: "Les billets et les pièces forment la monnaie…", opts: ["fiduciaire", "scripturale", "électronique"], ok: 0, expl: "C'est la monnaie détenue physiquement." },
          { q: "La valeur de la monnaie repose sur…", opts: ["la confiance", "le poids du métal", "le nombre de banques"], ok: 0, expl: "On l'accepte parce que d'autres l'accepteront." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Conserver un pouvoir d'achat dans le temps est la fonction de réserve de valeur.", rep: true, expl: "C'est la troisième fonction de la monnaie." },
          { txt: "Un virement bancaire relève de la monnaie fiduciaire.", rep: false, expl: "C'est de la monnaie scripturale." },
          { txt: "Le troc reste pratique dès que les échanges se multiplient.", rep: false, expl: "La double coïncidence devient impossible à réunir." },
          { txt: "Sans confiance, une monnaie cesse de remplir ses fonctions.", rep: true, expl: "Plus personne ne l'accepte." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Quel problème la monnaie permet-elle de résoudre ?", r: "Elle supprime la contrainte du troc, qui exige une double coïncidence des besoins : avec la monnaie, tout s'échange contre elle." },
          { q: "Cite les trois fonctions de la monnaie.", r: "Intermédiaire des échanges, unité de compte et réserve de valeur." },
          { q: "Quelle différence entre monnaie fiduciaire et monnaie scripturale ?", r: "La fiduciaire est détenue physiquement, billets et pièces ; la scripturale n'existe que par des écritures en compte, virements et cartes." },
          { q: "De quoi dépend la valeur de la monnaie ?", r: "De la confiance : elle est acceptée parce que chacun pense pouvoir s'en servir à son tour." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "L'échange direct de marchandise contre marchandise est le", suite: "troc" },
          { debut: "La fonction qui sert à payer est l'intermédiaire des", suite: "échanges" },
          { debut: "La monnaie qui permet d'épargner est une réserve de", suite: "valeur" },
          { debut: "Les écritures en compte forment la monnaie", suite: "scripturale" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 11
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La création monétaire, la masse monétaire et la banque centrale",
      theme: "Monnaie et financement",
      ras: "Déterminer l'utilité de la création monétaire",
      valeurs: "Persévérance, Responsabilité",
      objectif: "expliquer comment la monnaie est créée et quel rôle joue la banque centrale",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Cite les trois fonctions de la monnaie.", "Intermédiaire des échanges, unité de compte et réserve de valeur."],
        ["Qu'est-ce que la monnaie scripturale ?", "La monnaie qui n'existe que par des écritures en compte."],
      ],
      mise: [
        "Quand une banque accorde un crédit, où prend-elle l'argent ?",
        "Elle ne le prend pas dans un coffre : le crédit crée un dépôt. C'est le mécanisme de la création monétaire, que la banque centrale encadre.",
      ],
      observation: "le schéma de la création monétaire",
      observationSupport: "Schéma de la création monétaire affiché ou distribué",
      technAna: "Lecture de schéma et explication dirigée",
      qa: [
        ["Qu'est-ce que la création monétaire ?", "Le processus par lequel de la monnaie nouvelle apparaît dans l'économie, principalement par l'octroi de crédits."],
        ["Comment un crédit crée-t-il de la monnaie ?", "La banque inscrit le montant prêté au crédit du compte de l'emprunteur : un dépôt naît, utilisable pour payer."],
        ["Que devient la somme dépensée ?", "Elle est versée à un fournisseur, qui la dépose à son tour dans une banque : la monnaie circule et revient dans le système bancaire."],
        ["Qu'est-ce que la masse monétaire ?", "L'ensemble des moyens de paiement détenus par les agents économiques : billets, pièces et dépôts à vue."],
        ["Quel est le rôle de la banque centrale ?", "Elle fournit la monnaie de base aux banques, encadre leur activité et veille à la valeur de la monnaie."],
        ["La création monétaire est-elle illimitée ?", "Non : les banques doivent faire face aux retraits, détenir des réserves et respecter les règles fixées par la banque centrale."],
        ["Qu'est-ce que le marché monétaire ?", "Le marché sur lequel les banques se prêtent entre elles à court terme pour équilibrer leurs comptes."],
        ["Pourquoi la création monétaire est-elle utile ?", "Parce qu'elle permet de financer l'investissement et la consommation sans attendre l'épargne préalable."],
      ],
      synthese: "Donc, la monnaie est créée principalement par le crédit : la banque inscrit le prêt au compte de l'emprunteur, la somme dépensée revient en dépôt dans le système bancaire. La masse monétaire mesure l'ensemble des moyens de paiement. La banque centrale fournit la monnaie de base, encadre les banques et veille à la valeur de la monnaie.",
      motsCles: ["création monétaire", "crédit", "dépôt", "masse monétaire", "banque centrale", "monnaie de base", "marché monétaire", "réserves"],
      image: { file: "t11_l_creation_monetaire.png", legende: "Figure 9 — Du crédit accordé à la monnaie créée." },
      contenu: [
        {
          sousTitre: "1. Le crédit crée la monnaie",
          texte: "Prêter, ce n'est pas transmettre une somme existante : c'est en créer une.",
          liste: [
            "La banque inscrit le montant du prêt au crédit du compte de l'emprunteur.",
            "Ce dépôt est utilisable : il sert à payer un fournisseur ou un salarié.",
            "Le bénéficiaire du paiement le dépose à son tour : la monnaie circule.",
          ],
        },
        {
          sousTitre: "2. Le retour dans les banques",
          texte: "La monnaie créée ne disparaît pas après l'achat.",
          liste: [
            "Le vendeur dépose la somme reçue sur son compte.",
            "La banque dispose ainsi d'une ressource nouvelle : un dépôt.",
            "Une part de ces dépôts doit rester disponible pour les retraits.",
          ],
        },
        {
          sousTitre: "3. La masse monétaire",
          texte: "On mesure le stock de moyens de paiement.",
          liste: [
            "Billets et pièces en circulation, dépôts à vue et comptes assimilés.",
            "C'est un stock, mesuré à une date, et non un flux.",
            "Son évolution indique si le financement de l'économie s'accélère.",
          ],
        },
        {
          sousTitre: "4. Le rôle de la banque centrale",
          texte: "L'institution encadre l'ensemble du processus.",
          liste: [
            "Elle fournit la monnaie de base aux banques commerciales.",
            "Elle fixe des règles : réserves, conditions d'accès au refinancement.",
            "Elle veille à la valeur de la monnaie et à la stabilité du système.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La monnaie est créée principalement par…", opts: ["l'octroi de crédits", "l'impression de billets seulement", "la vente de marchandises"], ok: 0, expl: "Le crédit fait naître un dépôt." },
          { q: "La masse monétaire mesure…", opts: ["un stock de moyens de paiement", "le budget de l'État", "les exportations"], ok: 0, expl: "C'est l'ensemble des moyens de payer." },
          { q: "La banque centrale…", opts: ["fournit la monnaie de base aux banques", "vend des billets au public", "fixe les salaires"], ok: 0, expl: "Elle encadre le système bancaire." },
          { q: "Le marché monétaire est le marché…", opts: ["où les banques se prêtent entre elles", "des actions", "des matières premières"], ok: 0, expl: "Il fonctionne à court terme." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Un crédit bancaire fait naître un dépôt.", rep: true, expl: "C'est le cœur de la création monétaire." },
          { txt: "La création monétaire est sans limite.", rep: false, expl: "Réserves et règles la bornent." },
          { txt: "La somme dépensée revient dans le système bancaire sous forme de dépôt.", rep: true, expl: "Le bénéficiaire la dépose à son tour." },
          { txt: "La masse monétaire est un flux mesuré sur une période.", rep: false, expl: "C'est un stock mesuré à une date." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Comment un crédit crée-t-il de la monnaie ?", r: "La banque inscrit le montant prêté au crédit du compte de l'emprunteur : un dépôt utilisable naît, qui sert à payer et revient ensuite en dépôt dans le système bancaire." },
          { q: "Qu'est-ce que la masse monétaire ?", r: "C'est l'ensemble des moyens de paiement détenus par les agents économiques : billets, pièces et dépôts à vue." },
          { q: "Quel est le rôle de la banque centrale ?", r: "Elle fournit la monnaie de base aux banques, encadre leur activité par des règles et veille à la valeur de la monnaie." },
          { q: "Pourquoi la création monétaire n'est-elle pas illimitée ?", r: "Parce que les banques doivent faire face aux retraits, détenir des réserves et respecter les règles fixées par la banque centrale." },
        ]},
        { type: "appariement", consigne: "Relie chaque notion à sa définition.", pointsPar: 1, items: [
          { g: ["Ensemble des moyens de paiement", "Institution qui fournit la monnaie de base", "Opération qui fait naître un dépôt", "Marché où les banques se prêtent", "Avoir inscrit en compte"], d: ["Banque centrale", "Crédit", "Marché monétaire", "Dépôt", "Masse monétaire"], pairs: [[0, 4], [1, 0], [2, 1], [3, 2], [4, 3]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 12
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le système financier : besoins et capacités de financement",
      theme: "Monnaie et financement",
      ras: "Evaluer les modes de financement de l'économie",
      valeurs: "Persévérance, Responsabilité",
      objectif: "distinguer les agents à besoin et à capacité de financement et le rôle du système financier",
      supportMeta: "Illustration, schémas, documents, cahier",
      revision: [
        ["Qu'est-ce que la masse monétaire ?", "L'ensemble des moyens de paiement détenus par les agents."],
        ["Quel est le rôle de la banque centrale ?", "Fournir la monnaie de base, encadrer les banques, veiller à la valeur de la monnaie."],
      ],
      mise: [
        "Une famille épargne sur un livret, une entreprise veut acheter une machine : comment se rencontrent-elles ?",
        "Par le système financier, qui met en relation ceux qui ont des ressources disponibles et ceux qui en manquent pour investir.",
      ],
      observation: "l'illustration du système financier",
      observationSupport: "Illustration affichée ou distribuée",
      technAna: "Observation dirigée et débat",
      qa: [
        ["Qu'est-ce que le système financier ?", "L'ensemble des institutions et des marchés qui mettent en relation les agents à capacité de financement et les agents à besoin de financement."],
        ["Qu'est-ce qu'un agent à besoin de financement ?", "Un agent dont les dépenses prévues dépassent les ressources disponibles : il doit emprunter."],
        ["Qu'est-ce qu'un agent à capacité de financement ?", "Un agent dont les ressources dépassent les dépenses : il peut prêter ou épargner."],
        ["Cite deux agents à besoin de financement.", "Une entreprise qui investit et un ménage qui construit sa maison, comme l'État quand il emprunte."],
        ["Cite un agent à capacité de financement.", "Un ménage qui épargne une part de son revenu."],
        ["Quel est le rôle d'une banque ?", "Elle collecte l'épargne, accorde des crédits et gère les moyens de paiement."],
        ["Quel est le rôle d'un marché financier ?", "Il met directement en relation émetteurs de titres et épargnants : actions et obligations."],
        ["Pourquoi le système financier est-il utile à l'économie ?", "Parce qu'il oriente l'épargne vers l'investissement, sans quoi les projets attendraient une épargne préalable."],
      ],
      synthese: "Donc, le système financier réunit les institutions et les marchés qui mettent en relation les agents à capacité de financement, qui épargnent, et les agents à besoin de financement, qui investissent. Banques et marchés orientent ainsi l'épargne vers les projets, ce qui permet d'investir sans attendre d'avoir épargné.",
      motsCles: ["système financier", "besoin de financement", "capacité de financement", "épargne", "investissement", "banque", "marché financier", "intermédiation"],
      image: { file: "t11_l_systeme_financier.jpg", legende: "Figure 10 — Banque, épargnants et entrepreneurs : le système financier." },
      contenu: [
        {
          sousTitre: "1. Deux situations opposées",
          texte: "Chaque agent se situe d'un côté ou de l'autre.",
          liste: [
            "Besoin de financement : les dépenses dépassent les ressources.",
            "Capacité de financement : les ressources dépassent les dépenses.",
            "La situation d'un agent peut changer d'une année à l'autre.",
          ],
        },
        {
          sousTitre: "2. Les institutions du système",
          texte: "Des intermédiaires assurent la rencontre.",
          liste: [
            "Les banques : elles collectent les dépôts et accordent des crédits.",
            "Les marchés financiers : actions et obligations y sont échangées.",
            "Les institutions spécialisées : assurance, microfinance, caisses d'épargne.",
          ],
        },
        {
          sousTitre: "3. Le rôle de l'épargne",
          texte: "L'épargne est la ressource du financement.",
          liste: [
            "Elle provient des ménages, des entreprises et des administrations.",
            "Elle est rémunérée : c'est le prix du renoncement à la consommation.",
            "Elle alimente les dépôts et les achats de titres.",
          ],
        },
        {
          sousTitre: "4. À quoi sert le système financier",
          texte: "Il rend possible l'investissement avant l'épargne.",
          liste: [
            "Il transforme des ressources disponibles en moyens d'investir.",
            "Il répartit le risque entre les prêteurs.",
            "Il permet de choisir entre plusieurs projets selon leur rendement.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Un agent dont les ressources dépassent les dépenses a une capacité de…", opts: ["financement", "production", "remboursement"], ok: 0, expl: "Il peut prêter ou épargner." },
          { q: "Une entreprise qui investit se trouve en besoin de…", opts: ["financement", "trésorerie excédentaire", "dividendes"], ok: 0, expl: "Elle doit trouver des ressources." },
          { q: "Une action et une obligation s'échangent sur…", opts: ["un marché financier", "un marché de légumes", "un guichet postal"], ok: 0, expl: "C'est le marché des titres." },
          { q: "Le système financier sert à orienter…", opts: ["l'épargne vers l'investissement", "les prix vers le marché", "les salaires vers l'État"], ok: 0, expl: "C'est sa fonction économique." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Un ménage qui épargne a une capacité de financement.", rep: true, expl: "Ses ressources dépassent ses dépenses." },
          { txt: "Une entreprise qui investit dispose toujours d'une capacité de financement.", rep: false, expl: "Elle se trouve en besoin de financement." },
          { txt: "La banque collecte l'épargne et accorde des crédits.", rep: true, expl: "C'est son double rôle." },
          { txt: "Le système financier répartit le risque entre les prêteurs.", rep: true, expl: "Chacun en porte une part." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Qu'est-ce que le système financier ?", r: "C'est l'ensemble des institutions et des marchés qui mettent en relation les agents à capacité de financement et les agents à besoin de financement." },
          { q: "Quelle différence entre besoin et capacité de financement ?", r: "Un agent à besoin de financement voit ses dépenses dépasser ses ressources et doit emprunter ; un agent à capacité de financement voit ses ressources dépasser ses dépenses et peut épargner." },
          { q: "Cite deux institutions du système financier et leur rôle.", r: "La banque, qui collecte les dépôts et accorde des crédits, et le marché financier, où s'échangent actions et obligations." },
          { q: "Pourquoi le système financier est-il utile à l'économie ?", r: "Parce qu'il oriente l'épargne vers l'investissement et permet de financer des projets sans attendre une épargne préalable." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Un agent dont les dépenses dépassent les ressources est en besoin de", suite: "financement" },
          { debut: "La part du revenu non consommée est l'", suite: "épargne" },
          { debut: "Les actions et les obligations s'échangent sur le marché", suite: "financier" },
          { debut: "L'acte par lequel la banque relie épargne et crédit est l'", suite: "intermédiation" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 13
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le financement de l'investissement : autofinancement, financement direct et indirect",
      theme: "Monnaie et financement",
      ras: "Evaluer les modes de financement de l'économie",
      valeurs: "Persévérance, Responsabilité",
      objectif: "comparer les trois modes de financement de l'investissement",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Qu'est-ce qu'un agent à besoin de financement ?", "Un agent dont les dépenses prévues dépassent les ressources disponibles."],
        ["Cite une institution du système financier.", "La banque, ou encore le marché financier."],
      ],
      mise: [
        "Une entreprise veut acheter une nouvelle machine : trois voies s'ouvrent à elle. Lesquelles ?",
        "Elle peut se financer sur ses bénéfices conservés, emprunter à une banque, ou émettre des titres sur un marché.",
      ],
      observation: "le schéma des deux voies du financement",
      observationSupport: "Schéma du financement affiché ou distribué",
      technAna: "Lecture de schéma et étude de cas",
      qa: [
        ["Qu'est-ce que l'autofinancement ?", "Le financement de l'investissement par les ressources propres de l'entreprise : bénéfices conservés et amortissements."],
        ["Qu'est-ce que le financement direct ?", "Le financement par émission de titres, actions ou obligations, souscrits directement par les épargnants sur un marché."],
        ["Qu'est-ce que le financement indirect ?", "Le financement par un intermédiaire, la banque, qui collecte l'épargne puis prête."],
        ["Pourquoi dit-on désintermédié ?", "Parce que l'emprunteur se passe d'intermédiaire : il va directement sur le marché."],
        ["Quel est l'avantage de l'autofinancement ?", "Il ne crée ni dette ni dépendance : l'entreprise garde son indépendance."],
        ["Quelle est la limite de l'autofinancement ?", "Il est limité par le profit réalisé et peut être insuffisant pour un gros investissement."],
        ["Quel est l'avantage du financement direct ?", "Il donne accès à des montants importants et souvent à un coût moindre pour les grandes entreprises."],
        ["Quel est l'avantage du financement indirect ?", "La banque connaît l'emprunteur, suit le projet et peut accompagner une petite structure sans accès au marché."],
      ],
      synthese: "Donc, l'investissement se finance de trois manières : par autofinancement sur les ressources propres, par financement direct sur un marché de titres, ou par financement indirect auprès d'une banque. L'autofinancement préserve l'indépendance mais reste limité ; le direct donne accès à des montants importants ; l'indirect apporte un accompagnement de proximité.",
      motsCles: ["investissement", "autofinancement", "financement direct", "financement indirect", "financement désintermédié", "financement intermédié", "actions", "obligations"],
      image: { file: "t11_l_financement.png", legende: "Figure 11 — Les deux voies du financement de l'économie." },
      contenu: [
        {
          sousTitre: "1. L'autofinancement",
          texte: "L'entreprise finance d'abord sur ses ressources propres.",
          liste: [
            "Bénéfices conservés : la part du profit non distribuée.",
            "Amortissements : la part de la valeur des équipements mise en réserve.",
            "Avantage : aucune dette, aucune dépendance. Limite : le montant disponible.",
          ],
        },
        {
          sousTitre: "2. Le financement direct",
          texte: "L'entreprise va elle-même sur le marché.",
          liste: [
            "Elle émet des actions : le souscripteur devient associé.",
            "Elle émet des obligations : le souscripteur devient créancier.",
            "On parle de financement désintermédié : pas d'intermédiaire bancaire.",
          ],
        },
        {
          sousTitre: "3. Le financement indirect",
          texte: "Un intermédiaire se place entre épargnant et emprunteur.",
          liste: [
            "La banque collecte les dépôts, puis accorde le crédit.",
            "Elle porte le risque et suit le déroulement du projet.",
            "C'est la voie la plus courante pour les petites structures.",
          ],
        },
        {
          sousTitre: "4. Comparer les trois voies",
          texte: "Le choix dépend de la taille et de la situation de l'organisation.",
          liste: [
            "Autofinancement : indépendance, mais montant limité.",
            "Direct : montants importants, mais accès réservé aux grandes structures.",
            "Indirect : accompagnement et souplesse, mais coût du crédit et garanties demandées.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Financer un investissement par les bénéfices conservés, c'est…", opts: ["l'autofinancement", "le financement direct", "le crédit-bail"], ok: 0, expl: "Ce sont les ressources propres." },
          { q: "Émettre des obligations relève du financement…", opts: ["direct", "indirect", "public"], ok: 0, expl: "L'entreprise va sur le marché." },
          { q: "Un prêt bancaire est un financement…", opts: ["indirect", "direct", "désintermédié"], ok: 0, expl: "La banque s'interpose." },
          { q: "La limite de l'autofinancement est…", opts: ["le montant disponible", "l'absence de contrôle", "la dette créée"], ok: 0, expl: "Il dépend du profit réalisé." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une action rend son détenteur créancier de l'entreprise.", rep: false, expl: "Elle le rend associé ; l'obligation rend créancier." },
          { txt: "Le financement direct est aussi appelé désintermédié.", rep: true, expl: "Aucun intermédiaire ne s'interpose." },
          { txt: "L'autofinancement crée une dette envers la banque.", rep: false, expl: "Il ne crée aucune dette." },
          { txt: "La banque suit le projet qu'elle finance.", rep: true, expl: "C'est l'avantage du financement indirect." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis l'autofinancement et cite ses deux ressources.", r: "C'est le financement par les ressources propres de l'entreprise : les bénéfices conservés et les amortissements." },
          { q: "Quelle différence entre financement direct et financement indirect ?", r: "Le direct fait appel au marché par émission d'actions ou d'obligations ; l'indirect passe par un intermédiaire, la banque, qui collecte l'épargne puis prête." },
          { q: "Cite un avantage et une limite de l'autofinancement.", r: "Avantage : il ne crée ni dette ni dépendance. Limite : le montant disponible dépend du profit réalisé." },
          { q: "Pourquoi une petite entreprise passe-t-elle plutôt par la banque ?", r: "Parce qu'elle n'a pas accès au marché financier : la banque connaît l'emprunteur, suit le projet et apporte un accompagnement de proximité." },
        ]},
        { type: "appariement", consigne: "Relie chaque mode à sa caractéristique.", pointsPar: 1, items: [
          { g: ["Bénéfices conservés", "Émission d'actions", "Prêt bancaire", "Titre de créance", "Aucune dette nouvelle"], d: ["Financement direct", "Financement indirect", "Obligation", "Autofinancement", "Autofinancement"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2], [4, 3]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 14
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le taux d'intérêt : rôles, calcul, taux nominal et réel, risque de crédit",
      theme: "Monnaie et financement",
      ras: "Déterminer la relation entre le taux d'intérêt, les risques de crédit, la monnaie",
      valeurs: "Persévérance, Responsabilité",
      objectif: "calculer des intérêts simples et distinguer taux nominal, taux réel et risque de crédit",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Qu'est-ce que le financement indirect ?", "Le financement par un intermédiaire qui collecte l'épargne puis prête."],
        ["Qu'est-ce que l'autofinancement ?", "Le financement par les ressources propres de l'entreprise."],
      ],
      mise: [
        "Un prêt à 8 % alors que les prix montent de 10 % : l'emprunteur est-il vraiment perdant ?",
        "Non : il rembourse en monnaie dévaluée. C'est pourquoi on distingue le taux nominal affiché et le taux réel, une fois l'inflation déduite.",
      ],
      observation: "le schéma du calcul des intérêts et des deux taux",
      observationSupport: "Schéma du taux d'intérêt affiché ou distribué",
      technAna: "Lecture de schéma et calcul dirigé",
      qa: [
        ["Qu'est-ce que le taux d'intérêt ?", "Le prix du crédit : la rémunération du prêteur et le coût payé par l'emprunteur, exprimé en pourcentage du capital."],
        ["Comment calcule-t-on des intérêts simples ?", "Intérêts = capital × taux × durée, la durée étant exprimée en années."],
        ["Donne un exemple de calcul.", "100 000 Ar placés à 5 % pendant 2 ans rapportent 100 000 × 0,05 × 2 = 10 000 Ar."],
        ["Qu'est-ce que le taux nominal ?", "Le taux affiché par le prêteur, celui qui figure dans le contrat."],
        ["Qu'est-ce que le taux réel ?", "Le taux nominal diminué de l'inflation : il mesure le coût réel du crédit pour l'emprunteur."],
        ["Si les prix montent de 10 % et le taux de 8 %, que se passe-t-il ?", "Le taux réel est négatif : l'emprunteur rembourse en monnaie qui a perdu de sa valeur."],
        ["Qu'est-ce que le risque de crédit ?", "Le risque que l'emprunteur ne rembourse pas : le prêteur exige alors une prime de risque, donc un taux plus élevé."],
        ["Quels sont les rôles du taux d'intérêt ?", "Il rémunère l'épargne, sélectionne les projets selon leur rentabilité et pèse sur le niveau de l'investissement."],
      ],
      synthese: "Donc, le taux d'intérêt est le prix du crédit. Les intérêts simples se calculent par capital × taux × durée. Le taux nominal est celui du contrat ; le taux réel en déduit l'inflation. Plus le risque de crédit est élevé, plus le prêteur exige une prime, donc un taux élevé. Le taux rémunère l'épargne, sélectionne les projets et pèse sur l'investissement.",
      motsCles: ["taux d'intérêt", "capital", "intérêts simples", "taux nominal", "taux réel", "inflation", "risque de crédit", "prime de risque"],
      image: { file: "t11_l_taux_interet.png", legende: "Figure 12 — Calculer des intérêts et lire un taux." },
      contenu: [
        {
          sousTitre: "1. Le prix du crédit",
          texte: "Le taux rémunère le prêteur et coûte à l'emprunteur.",
          liste: [
            "Il s'exprime en pourcentage du capital prêté.",
            "Il dépend de la durée et du risque de l'opération.",
            "Il est fixé librement, dans le cadre posé par la réglementation.",
          ],
        },
        {
          sousTitre: "2. Calculer des intérêts simples",
          texte: "La formule est directe.",
          liste: [
            "Intérêts = capital × taux × durée (en années).",
            "Exemple : 100 000 Ar à 5 % pendant 2 ans donnent 10 000 Ar.",
            "Le taux s'écrit en décimales dans le calcul : 5 % vaut 0,05.",
          ],
        },
        {
          sousTitre: "3. Taux nominal et taux réel",
          texte: "L'inflation change la lecture du taux.",
          liste: [
            "Taux nominal : celui qui figure au contrat.",
            "Taux réel : taux nominal moins le taux d'inflation.",
            "Si l'inflation dépasse le taux, le taux réel est négatif : l'emprunteur gagne.",
          ],
        },
        {
          sousTitre: "4. Le risque de crédit",
          texte: "Le taux intègre la probabilité de non-remboursement.",
          liste: [
            "Le prêteur exige une prime de risque proportionnée au danger.",
            "Un emprunteur sans garantie ni historique paie plus cher.",
            "Un taux trop élevé écarte les projets les moins rentables.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La formule des intérêts simples est…", opts: ["capital × taux × durée", "capital + taux + durée", "capital ÷ taux"], ok: 0, expl: "Les trois grandeurs se multiplient." },
          { q: "Le taux inscrit au contrat est le taux…", opts: ["nominal", "réel", "variable"], ok: 0, expl: "C'est celui affiché par le prêteur." },
          { q: "Le taux réel se calcule par…", opts: ["taux nominal − inflation", "taux nominal + inflation", "capital × inflation"], ok: 0, expl: "On déduit la hausse des prix." },
          { q: "Face à un emprunteur risqué, le prêteur…", opts: ["exige une prime de risque", "baisse le taux", "prête sans condition"], ok: 0, expl: "Le taux compense le danger." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "100 000 Ar placés à 5 % pendant 2 ans rapportent 10 000 Ar.", rep: true, expl: "100 000 × 0,05 × 2 = 10 000." },
          { txt: "Quand l'inflation dépasse le taux nominal, le taux réel est négatif.", rep: true, expl: "L'emprunteur rembourse en monnaie dévaluée." },
          { txt: "Le risque de crédit fait baisser le taux demandé.", rep: false, expl: "Il augmente la prime exigée." },
          { txt: "Le taux d'intérêt sélectionne les projets selon leur rentabilité.", rep: true, expl: "Seuls les projets assez rentables sont financés." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Donne la formule des intérêts simples et un exemple chiffré.", r: "Intérêts = capital × taux × durée ; 100 000 Ar placés à 5 % pendant 2 ans rapportent 100 000 × 0,05 × 2 = 10 000 Ar." },
          { q: "Quelle différence entre taux nominal et taux réel ?", r: "Le taux nominal est celui affiché au contrat ; le taux réel en déduit l'inflation et mesure le coût réel du crédit." },
          { q: "Que se passe-t-il quand l'inflation dépasse le taux nominal ?", r: "Le taux réel devient négatif : l'emprunteur rembourse en monnaie qui a perdu de sa valeur, il y gagne." },
          { q: "Comment le risque de crédit se traduit-il dans le taux ?", r: "Le prêteur exige une prime de risque : plus le risque de non-remboursement est élevé, plus le taux demandé l'est." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Intérêts = capital × taux ×", suite: "durée" },
          { debut: "Le taux affiché au contrat est le taux", suite: "nominal" },
          { debut: "Le taux nominal diminué de l'inflation est le taux", suite: "réel" },
          { debut: "La majoration exigée en cas de danger de non-remboursement est la prime de", suite: "risque" },
        ]},
      ],
    },
  ],
};

module.exports = U;
