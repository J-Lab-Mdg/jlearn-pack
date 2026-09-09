// ============================================================
// Unité V — Marché et prix (PE T10 — 14 heures)
// RAS 1 : Déterminer le fonctionnement du marché à concurrence pure et parfaite
// RAS 2 : Estimer le fonctionnement du marché en concurrence imparfaite
// Découpage : 6 séances de cours + 1 révision + 1 sujet d'examen
// Valeurs : Responsabilité, Culture de l'excellence
// ============================================================

const U = {
  num: "V",
  titre: "Marché et prix",
  ras: "Déterminer le fonctionnement du marché à concurrence pure et parfaite · Estimer le fonctionnement du marché en concurrence imparfaite",
  valeurs: "Responsabilité, Culture de l'excellence",
  duree: "14 heures",
  themes: [
    "Le marché, l'offre et la demande",
    "La loi de l'offre et de la demande",
    "Le prix d'équilibre sur un marché concurrentiel",
    "Le marché en concurrence pure et parfaite",
    "Monopole, duopole et oligopole",
    "L'entente entre les offreurs et ses conséquences",
  ],
  topics: [
    // ---------------------------------------------------------
    // SÉANCE 27 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le marché, l'offre et la demande",
      theme: "Marché et prix",
      ras: "Déterminer le fonctionnement du marché à concurrence pure et parfaite",
      valeurs: "Responsabilité, Culture de l'excellence",
      objectif: "définir le marché, l'offre et la demande, et repérer les acteurs d'un marché",
      supportMeta: "Documents sur un marché local, enquête, cahier",
      revision: [
        ["Qu'est-ce que le pouvoir d'achat ?", "La quantité de biens et de services qu'un revenu permet d'acheter."],
        ["Cite un déterminant socioculturel de la consommation.", "L'âge, le genre, le milieu social ou le niveau d'instruction."],
      ],
      mise: [
        "Où va ta famille pour acheter ses légumes, et qui les lui vend ?",
        "Au marché du quartier : des producteurs et des revendeurs proposent, les clients achètent.",
      ],
      observation: "les documents présentant un marché local et ses acteurs",
      observationSupport: "Documents et photographies du marché local, grille d'observation affichée",
      technAna: "Enquête sur le marché, étude de document et questionnement",
      qa: [
        ["Qu'est-ce qu'un marché ?", "Le lieu, physique ou non, où se rencontrent des acheteurs et des vendeurs pour échanger un bien ou un service contre un prix."],
        ["Qui sont les acteurs du marché ?", "Les offreurs, qui proposent le bien, et les demandeurs, qui souhaitent l'acheter ; l'État peut encadrer le fonctionnement du marché."],
        ["Qu'est-ce que la demande ?", "La quantité d'un bien que les acheteurs sont prêts et capables d'acheter à un prix donné, pendant une période donnée."],
        ["Qu'est-ce que l'offre ?", "La quantité d'un bien que les vendeurs sont prêts et capables de vendre à un prix donné, pendant une période donnée."],
        ["Qu'est-ce que le prix ?", "La somme d'argent à payer pour obtenir une unité du bien ou du service ; il sert de signal entre offreurs et demandeurs."],
        ["Existe-t-il des marchés sans lieu physique ?", "Oui : le marché du travail, le marché du crédit, ou les échanges par téléphone et par internet, où l'offre et la demande se rencontrent sans étal."],
        ["Pourquoi dit-on que le marché fixe le prix ?", "Parce que le prix se forme par la confrontation de l'offre et de la demande : trop de demande fait monter le prix, trop d'offre le fait baisser."],
      ],
      synthese: "Donc, un marché est le lieu, réel ou abstrait, de la rencontre entre l'offre et la demande. La demande est la quantité que les acheteurs veulent et peuvent acheter à un prix donné ; l'offre est la quantité que les vendeurs veulent et peuvent vendre. C'est de leur confrontation que naît le prix.",
      motsCles: ["marché", "offre", "demande", "acheteurs", "vendeurs", "prix", "échange"],
      contenu: [
        {
          sousTitre: "1. Le marché",
          texte: "Un marché n'est pas forcément une place avec des étals. C'est toute rencontre organisée entre une offre et une demande autour d'un bien ou d'un service.",
          liste: [
            "Marché physique : le marché du quartier, la foire, la boutique.",
            "Marché immatériel : le marché du travail, le marché du crédit, les commandes passées en ligne.",
            "Marché local, régional, national ou international selon l'étendue géographique des échanges.",
          ],
        },
        {
          sousTitre: "2. Les acteurs du marché",
          texte: "Trois catégories d'acteurs interviennent, avec des rôles distincts.",
          liste: [
            "Les offreurs : producteurs, artisans, revendeurs ; ils proposent le bien à un prix.",
            "Les demandeurs : ménages, entreprises, administrations ; ils achètent pour consommer ou pour produire.",
            "Les pouvoirs publics : ils fixent les règles, contrôlent les prix dans certains cas et luttent contre les fraudes.",
          ],
        },
        {
          sousTitre: "3. La demande",
          texte: "La demande ne se réduit pas à une envie : elle suppose à la fois le désir d'acheter et la capacité de payer.",
          liste: [
            "Un prix plus bas augmente en général la quantité demandée.",
            "Le revenu des acheteurs conditionne leur demande.",
            "Les goûts, la saison et la présence de produits de remplacement la modifient.",
          ],
        },
        {
          sousTitre: "4. L'offre",
          texte: "L'offre est la quantité que les vendeurs sont prêts à mettre sur le marché à un prix donné.",
          liste: [
            "Un prix plus élevé incite les vendeurs à offrir davantage.",
            "Le coût de production limite l'offre : en dessous d'un certain prix, vendre n'est plus rentable.",
            "Les conditions de production — récolte, transport, stockage — modifient l'offre disponible.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Le marché du poisson d'une ville côtière :",
          liste: [
            "Offreurs : les pêcheurs, les mareyeurs, les revendeurs du marché.",
            "Demandeurs : les ménages, les restaurateurs, les transformateurs.",
            "Si la mer est mauvaise, l'offre baisse : le prix monte.",
            "Si une fête familiale approche, la demande monte : le prix monte aussi.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La demande désigne…", opts: ["la quantité que les acheteurs veulent et peuvent acheter", "la quantité que les vendeurs proposent", "le nombre de marchés"], ok: 0, expl: "Elle suppose le désir d'acheter et la capacité de payer." },
          { q: "L'offre désigne…", opts: ["la quantité que les vendeurs sont prêts à vendre", "la quantité achetée", "le nombre d'acheteurs"], ok: 0, expl: "Elle dépend du prix et du coût de production." },
          { q: "Le marché du travail est…", opts: ["un marché sans lieu physique", "un marché interdit", "un marché de légumes"], ok: 0, expl: "Offre et demande d'emploi s'y rencontrent sans étal." },
          { q: "Quand l'offre d'un bien devient rare, le prix a tendance à…", opts: ["monter", "baisser", "disparaître"], ok: 0, expl: "La rareté fait monter le prix si la demande se maintient." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Un marché peut exister sans lieu physique.", rep: true, expl: "Le marché du travail ou du crédit en sont des exemples." },
          { txt: "La demande suppose seulement l'envie d'acheter.", rep: false, expl: "Elle suppose aussi la capacité de payer." },
          { txt: "Le prix se forme par la confrontation de l'offre et de la demande.", rep: true, expl: "C'est le mécanisme central du marché." },
          { txt: "Les pouvoirs publics n'ont aucun rôle sur un marché.", rep: false, expl: "Ils fixent les règles et contrôlent les fraudes et les ententes." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Donne la définition d'un marché.", r: "Un marché est le lieu, physique ou non, où se rencontrent des offreurs et des demandeurs pour échanger un bien ou un service contre un prix." },
          { q: "Donne la définition de la demande.", r: "La demande est la quantité d'un bien que les acheteurs sont prêts et capables d'acheter à un prix donné." },
          { q: "Donne la définition de l'offre.", r: "L'offre est la quantité d'un bien que les vendeurs sont prêts et capables de vendre à un prix donné." },
          { q: "Cite deux catégories d'acteurs d'un marché et précise leur rôle.", r: "Les offreurs proposent le bien à un prix ; les demandeurs l'achètent pour le consommer ou le transformer." },
        ]},
        { type: "appariement", consigne: "Relie chaque situation à son effet sur le marché du poisson.", pointsPar: 1, items: [
          { g: ["Mauvaise météo en mer", "Fête familiale approchant", "Arrivée d'un gros bateau", "Hausse du prix du carburant"], d: ["La demande augmente", "L'offre augmente", "Le coût de production augmente", "L'offre diminue"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 28 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La loi de l'offre et de la demande",
      theme: "Marché et prix",
      ras: "Déterminer le fonctionnement du marché à concurrence pure et parfaite",
      valeurs: "Responsabilité, Culture de l'excellence",
      objectif: "énoncer la loi de l'offre et de la demande et lire un tableau de quantités offertes et demandées",
      supportMeta: "Tableaux de quantités offertes et demandées, cahier",
      revision: [
        ["Qu'est-ce que la demande ?", "La quantité d'un bien que les acheteurs sont prêts et capables d'acheter à un prix donné."],
        ["Qu'est-ce que l'offre ?", "La quantité d'un bien que les vendeurs sont prêts et capables de vendre à un prix donné."],
      ],
      mise: [
        "Que se passe-t-il quand le prix des tomates monte : les vendeurs en apportent-ils plus ou moins ?",
        "Ils en apportent davantage, parce qu'il devient intéressant de vendre ; les clients, eux, en achètent moins.",
      ],
      observation: "le tableau de quantités offertes et demandées affiché au tableau",
      observationSupport: "Tableau de quantités offertes et demandées selon le prix, affiché ou distribué",
      technAna: "Lecture de tableau, calcul dirigé et questionnement",
      qa: [
        ["Que dit la loi de la demande ?", "Quand le prix d'un bien augmente, la quantité demandée diminue ; quand le prix baisse, la quantité demandée augmente."],
        ["Que dit la loi de l'offre ?", "Quand le prix augmente, la quantité offerte augmente ; quand le prix baisse, la quantité offerte diminue."],
        ["Pourquoi la quantité demandée baisse-t-elle quand le prix monte ?", "Parce que les acheteurs renoncent, réduisent les quantités ou se tournent vers un produit de remplacement."],
        ["Pourquoi la quantité offerte augmente-t-elle quand le prix monte ?", "Parce que vendre devient plus rentable : de nouveaux vendeurs arrivent sur le marché et les vendeurs déjà présents proposent davantage."],
        ["Que se passe-t-il quand le prix est trop bas pour les vendeurs ?", "La quantité offerte devient faible et le marché manque de marchandises : c'est une situation de pénurie."],
        ["Que se passe-t-il quand le prix est trop haut pour les acheteurs ?", "La quantité demandée devient faible et les marchandises restent invendues : c'est une situation de surplus."],
        ["Que fait alors le marché ?", "Il tend vers un prix qui égalise les quantités offertes et demandées : le prix d'équilibre."],
      ],
      synthese: "Donc, la loi de l'offre et de la demande énonce deux mouvements contraires : quand le prix monte, la demande baisse et l'offre augmente ; quand le prix baisse, la demande monte et l'offre diminue. Le marché est ainsi ramené vers un prix qui égalise les quantités échangées : le prix d'équilibre.",
      motsCles: ["loi de l'offre et de la demande", "quantité offerte", "quantité demandée", "pénurie", "surplus", "ajustement"],
      contenu: [
        {
          sousTitre: "1. La loi de la demande",
          texte: "La demande varie en sens inverse du prix. On peut l'illustrer par un tableau simple.",
          liste: [
            "Prix de 1 000 ariary : quantité demandée 100 unités.",
            "Prix de 1 500 ariary : quantité demandée 70 unités.",
            "Prix de 2 000 ariary : quantité demandée 40 unités.",
            "Plus le prix monte, moins les acheteurs achètent.",
          ],
        },
        {
          sousTitre: "2. La loi de l'offre",
          texte: "L'offre varie dans le même sens que le prix : un prix élevé attire les vendeurs.",
          liste: [
            "Prix de 1 000 ariary : quantité offerte 30 unités.",
            "Prix de 1 500 ariary : quantité offerte 70 unités.",
            "Prix de 2 000 ariary : quantité offerte 110 unités.",
            "Plus le prix monte, plus les vendeurs proposent.",
          ],
        },
        {
          sousTitre: "3. Pénurie et surplus",
          texte: "Tant que l'offre et la demande ne se rejoignent pas, le marché est déséquilibré.",
          liste: [
            "Pénurie : à un prix trop bas, la demande dépasse l'offre ; les acheteurs se disputent la marchandise et le prix monte.",
            "Surplus : à un prix trop élevé, l'offre dépasse la demande ; les vendeurs baissent leur prix pour écouler le stock.",
            "Ces deux mouvements ramènent le marché vers l'équilibre.",
          ],
        },
        {
          sousTitre: "4. Lire un tableau d'offre et de demande",
          texte: "Le tableau croisé permet de repérer, à chaque prix, les quantités correspondantes et d'anticiper le sens de l'ajustement.",
          liste: [
            "À 1 000 ariary : demande 100, offre 30 → la demande dépasse l'offre → pénurie → le prix monte.",
            "À 1 500 ariary : demande 70, offre 70 → le marché est équilibré.",
            "À 2 000 ariary : demande 40, offre 110 → surplus → le prix baisse.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Le marché de la banane dans une petite ville :",
          liste: [
            "Après une coupure de route, les camions n'arrivent plus : l'offre tombe, le prix grimpe.",
            "Quand la route rouvre et que deux camions arrivent en même temps : l'offre augmente, le prix baisse.",
            "Le prix oscille ainsi autour du niveau qui permet d'écouler la marchandise sans en manquer.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Quand le prix d'un bien augmente, la quantité demandée…", opts: ["diminue", "augmente", "reste toujours identique"], ok: 0, expl: "Les acheteurs se reportent sur d'autres produits ou achètent moins." },
          { q: "Quand le prix d'un bien augmente, la quantité offerte…", opts: ["augmente", "diminue", "disparaît"], ok: 0, expl: "Vendre devient plus rentable, de nouveaux vendeurs arrivent." },
          { q: "Un prix trop bas provoque…", opts: ["une pénurie", "un surplus", "un monopole"], ok: 0, expl: "La demande dépasse l'offre disponible à ce prix." },
          { q: "Un prix trop élevé provoque…", opts: ["un surplus invendu", "une pénurie", "une entente"], ok: 0, expl: "Les acheteurs renoncent, la marchandise reste sur le marché." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La demande et le prix varient dans le même sens.", rep: false, expl: "Ils varient en sens inverse : le prix monte, la demande baisse." },
          { txt: "L'offre et le prix varient dans le même sens.", rep: true, expl: "Un prix élevé incite à offrir davantage." },
          { txt: "Un marché déséquilibré tend à revenir vers l'équilibre.", rep: true, expl: "Pénurie et surplus provoquent des mouvements de prix correcteurs." },
          { txt: "Un surplus de marchandises fait monter le prix.", rep: false, expl: "Le surplus pousse au contraire les vendeurs à baisser leur prix." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Énonce la loi de la demande.", r: "Quand le prix d'un bien augmente, la quantité demandée diminue ; quand le prix baisse, la quantité demandée augmente." },
          { q: "Énonce la loi de l'offre.", r: "Quand le prix augmente, la quantité offerte augmente ; quand le prix baisse, la quantité offerte diminue." },
          { q: "Explique ce qu'est une pénurie et ce qu'elle provoque.", r: "Une pénurie est une situation où la demande dépasse l'offre ; elle pousse le prix à la hausse." },
          { q: "Explique ce qu'est un surplus et ce qu'il provoque.", r: "Un surplus est une situation où l'offre dépasse la demande ; il pousse les vendeurs à baisser leur prix pour écouler le stock." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Quand le prix monte, la quantité demandée", suite: "diminue" },
          { debut: "Quand le prix monte, la quantité offerte", suite: "augmente" },
          { debut: "Un prix trop bas provoque une", suite: "pénurie" },
          { debut: "Un prix trop élevé laisse un surplus", suite: "invendu" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 29 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le prix d'équilibre sur un marché concurrentiel",
      theme: "Marché et prix",
      ras: "Déterminer le fonctionnement du marché à concurrence pure et parfaite",
      valeurs: "Responsabilité, Culture de l'excellence",
      objectif: "lire un graphique d'offre et de demande et déterminer le prix d'équilibre",
      supportMeta: "Graphique offre/demande, cahier",
      revision: [
        ["Que dit la loi de la demande ?", "Quand le prix augmente, la quantité demandée diminue."],
        ["Qu'est-ce qu'un surplus sur un marché ?", "Une situation où l'offre dépasse la demande, qui pousse les vendeurs à baisser le prix."],
      ],
      mise: [
        "Comment les vendeurs et les clients finissent-ils par se mettre d'accord sur un prix ?",
        "En tâtonnant : tant que la marchandise part trop vite, le prix monte ; tant qu'elle reste, il baisse.",
      ],
      observation: "le graphique montrant le croisement des courbes d'offre et de demande",
      observationSupport: "Graphique offre/demande avec prix d'équilibre, affiché ou distribué",
      technAna: "Lecture de graphique et questionnement dirigé",
      qa: [
        ["Qu'est-ce que le prix d'équilibre ?", "Le prix pour lequel la quantité offerte est exactement égale à la quantité demandée : tout le monde trouve ce qu'il cherche."],
        ["Comment appelle-t-on aussi la quantité correspondante ?", "La quantité d'équilibre : c'est le volume échangé à ce prix."],
        ["Quelles sont les caractéristiques du prix d'équilibre ?", "Il est stable : il n'y a ni pénurie ni surplus ; il est unique sur le marché considéré ; il se déplace si l'offre ou la demande change."],
        ["Que se passe-t-il si la demande augmente ?", "La courbe de demande se déplace ; à offre inchangée, le prix d'équilibre monte et la quantité échangée augmente."],
        ["Que se passe-t-il si l'offre augmente ?", "La courbe d'offre se déplace ; à demande inchangée, le prix d'équilibre baisse et la quantité échangée augmente."],
        ["Que se passe-t-il si une récolte est mauvaise ?", "L'offre diminue : le prix d'équilibre monte et la quantité échangée diminue."],
        ["Comment lit-on un graphique d'offre et de demande ?", "Le prix est en ordonnée (verticale), la quantité en abscisse (horizontale) ; la courbe d'offre monte, la courbe de demande descend ; leur croisement donne l'équilibre."],
      ],
      synthese: "Donc, le prix d'équilibre est celui qui égalise les quantités offertes et demandées : ni pénurie ni excédent. Il se lit au croisement des deux courbes et il se déplace dès que l'offre ou la demande se modifie : une mauvaise récolte qui réduit l'offre fait monter le prix ; une offre abondante le fait baisser.",
      motsCles: ["prix d'équilibre", "quantité d'équilibre", "courbe d'offre", "courbe de demande", "croisement", "déplacement de courbe"],
      image: { file: "u5_equilibre.png", legende: "Figure 8 — Le prix d'équilibre : croisement de l'offre et de la demande." },
      contenu: [
        {
          sousTitre: "1. Lire un graphique d'offre et de demande",
          texte: "Le graphique représente le marché d'un bien : le prix se lit sur l'axe vertical, la quantité sur l'axe horizontal.",
          liste: [
            "La courbe de demande descend : plus le prix est bas, plus la quantité demandée est grande.",
            "La courbe d'offre monte : plus le prix est élevé, plus la quantité offerte est grande.",
            "Le point de croisement indique le prix et la quantité d'équilibre.",
          ],
        },
        {
          sousTitre: "2. Les caractéristiques du prix d'équilibre",
          texte: "Le prix d'équilibre n'est pas un prix idéal : c'est le prix qui vide le marché.",
          liste: [
            "Stabilité : ni excédent ni pénurie, donc aucune pression pour changer le prix.",
            "Unicité : sur un marché donné, à un moment donné, il n'y a qu'un seul prix d'équilibre.",
            "Mobilité : il change dès que l'offre ou la demande se déplace.",
          ],
        },
        {
          sousTitre: "3. Quand la demande se déplace",
          texte: "La demande peut augmenter ou diminuer pour d'autres raisons que le prix : saison, revenu, mode, fête, arrivée de nouveaux habitants.",
          liste: [
            "Demande en hausse : le prix d'équilibre monte et la quantité échangée augmente.",
            "Demande en baisse : le prix d'équilibre baisse et la quantité échangée diminue.",
            "Exemple : à l'approche d'une fête, la demande de volailles augmente et le prix monte.",
          ],
        },
        {
          sousTitre: "4. Quand l'offre se déplace",
          texte: "L'offre se déplace selon les conditions de production : récolte, coût du transport, nombre de producteurs, météo.",
          liste: [
            "Offre en hausse : le prix d'équilibre baisse et la quantité échangée augmente.",
            "Offre en baisse : le prix d'équilibre monte et la quantité échangée diminue.",
            "Exemple : après une inondation, l'offre de légumes chute et les prix montent.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Le marché du riz dans une petite ville :",
          liste: [
            "Situation normale : prix 2 000 ariary le kilo, quantité échangée 1 000 kilos.",
            "Mauvaise récolte : l'offre baisse, le prix passe à 2 600 ariary et la quantité échangée tombe à 700 kilos.",
            "Bonne récolte : l'offre monte, le prix redescend à 1 800 ariary et la quantité échangée atteint 1 200 kilos.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le prix d'équilibre est le prix pour lequel…", opts: ["l'offre égale la demande", "l'offre dépasse la demande", "la demande est nulle"], ok: 0, expl: "C'est le prix qui vide le marché." },
          { q: "Si l'offre augmente et que la demande reste stable, le prix…", opts: ["baisse", "monte", "ne bouge jamais"], ok: 0, expl: "L'abondance fait baisser le prix d'équilibre." },
          { q: "Une mauvaise récolte provoque…", opts: ["une hausse du prix d'équilibre", "une baisse du prix", "une entente"], ok: 0, expl: "L'offre diminue, le prix monte." },
          { q: "Sur un graphique, le prix se lit…", opts: ["sur l'axe vertical", "sur l'axe horizontal", "dans la légende"], ok: 0, expl: "La quantité est portée sur l'axe horizontal." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Au prix d'équilibre, il reste de la marchandise invendue.", rep: false, expl: "Non : c'est précisément le prix qui ne laisse ni surplus ni pénurie." },
          { txt: "Une hausse de la demande fait monter le prix d'équilibre.", rep: true, expl: "À offre inchangée, les acheteurs se disputent une quantité limitée." },
          { txt: "La courbe d'offre est descendante.", rep: false, expl: "Elle est ascendante : un prix élevé incite à offrir davantage." },
          { txt: "Le prix d'équilibre peut changer d'une saison à l'autre.", rep: true, expl: "Il se déplace dès que l'offre ou la demande se modifie." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Donne la définition du prix d'équilibre.", r: "Le prix d'équilibre est le prix pour lequel la quantité offerte est égale à la quantité demandée." },
          { q: "Cite deux caractéristiques du prix d'équilibre.", r: "Il est stable, car il ne laisse ni pénurie ni surplus, et il se déplace dès que l'offre ou la demande change." },
          { q: "Que devient le prix d'équilibre si une inondation détruit une partie des cultures maraîchères ?", r: "L'offre diminue : le prix d'équilibre monte et la quantité échangée diminue." },
          { q: "Comment lit-on l'équilibre sur un graphique ?", r: "On repère le point de croisement de la courbe d'offre, ascendante, et de la courbe de demande, descendante." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["équilibre", "offre", "demande", "pénurie", "surplus"], items: [
          { phrase: "L'égalité entre quantité offerte et quantité demandée définit le prix d'_________.", mot: "équilibre" },
          { phrase: "Une récolte abondante déplace la courbe d'_________ vers le bas du prix.", mot: "offre" },
          { phrase: "Une fête qui approche déplace la courbe de _________.", mot: "demande" },
          { phrase: "Un prix trop bas laisse le marché en situation de _________.", mot: "pénurie" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 30 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le marché en concurrence pure et parfaite",
      theme: "Marché et prix",
      ras: "Déterminer le fonctionnement du marché à concurrence pure et parfaite",
      valeurs: "Responsabilité, Culture de l'excellence",
      objectif: "décrire les conditions de la concurrence pure et parfaite et ses effets sur le prix",
      supportMeta: "Documents sur un marché concurrentiel, tableau des conditions, cahier",
      revision: [
        ["Qu'est-ce que le prix d'équilibre ?", "Le prix pour lequel la quantité offerte est égale à la quantité demandée."],
        ["Que se passe-t-il si l'offre diminue ?", "Le prix d'équilibre monte et la quantité échangée diminue."],
      ],
      mise: [
        "Sur un marché où le même produit est vendu par dix marchands côte à côte, qui fixe le prix ?",
        "Personne en particulier : la concurrence entre les marchands et les clients fixe le prix.",
      ],
      observation: "le tableau des conditions de la concurrence pure et parfaite",
      observationSupport: "Tableau des conditions (atomicité, homogénéité, libre entrée, transparence) affiché ou distribué",
      technAna: "Étude de document, débat dirigé et questionnement",
      qa: [
        ["Qu'est-ce que la concurrence ?", "La situation dans laquelle plusieurs offreurs se disputent la même clientèle, ce qui les oblige à améliorer leurs prix, leur qualité ou leur service."],
        ["Qu'est-ce que l'atomicité du marché ?", "Le grand nombre d'acheteurs et de vendeurs : aucun d'eux, pris isolément, n'est assez gros pour imposer son prix."],
        ["Qu'est-ce que l'homogénéité du produit ?", "Les biens offerts sont identiques ou très comparables : l'acheteur choisit au prix et à la commodité."],
        ["Qu'entend-on par libre entrée sur le marché ?", "Toute entreprise qui le souhaite peut commencer à produire et à vendre, et toute entreprise peut cesser son activité."],
        ["Qu'est-ce que la transparence du marché ?", "Les acheteurs et les vendeurs connaissent les prix pratiqués et la qualité des produits : l'information circule."],
        ["Quelles sont les conséquences de la concurrence pure et parfaite ?", "Un prix unique pour un même produit, imposé par le marché ; les offreurs qui veulent vendre plus doivent baisser leurs coûts ou améliorer la qualité."],
        ["Ce modèle existe-t-il vraiment ?", "Il est rarement réalisé complètement, mais il sert de référence : certains marchés agricoles locaux s'en approchent."],
      ],
      synthese: "Donc, un marché est en concurrence pure et parfaite lorsqu'il réunit cinq conditions : de très nombreux acheteurs et vendeurs, des produits identiques, la libre entrée et sortie des entreprises, une information transparente et des acteurs mobiles. Aucun participant ne peut alors imposer son prix : le prix s'impose à tous, et les offreurs ne peuvent gagner des parts de marché qu'en améliorant leur productivité ou leur qualité.",
      motsCles: ["concurrence", "atomicité", "homogénéité", "libre entrée", "transparence", "prix unique", "référence"],
      contenu: [
        {
          sousTitre: "1. La concurrence",
          texte: "La concurrence est la rivalité entre offreurs pour obtenir la clientèle. Elle profite au consommateur, qui peut comparer et choisir.",
          liste: [
            "Concurrence par les prix : vendre moins cher que le voisin.",
            "Concurrence par la qualité : offrir un produit plus frais, mieux présenté.",
            "Concurrence par le service : livraison, crédit au client, accueil.",
          ],
        },
        {
          sousTitre: "2. Les conditions de la concurrence pure et parfaite",
          texte: "Cinq conditions doivent être réunies pour qu'un marché soit dit en concurrence pure et parfaite.",
          liste: [
            "Atomicité : une multitude d'acheteurs et de vendeurs, aucun en position de force.",
            "Homogénéité : des produits identiques, interchangeables pour l'acheteur.",
            "Libre entrée et sortie : pas d'obstacle administratif ou financier majeur pour s'installer ou partir.",
            "Transparence : les prix et la qualité sont connus de tous.",
            "Mobilité : les acheteurs peuvent changer de fournisseur, les vendeurs changer de marché.",
          ],
        },
        {
          sousTitre: "3. Les conséquences sur le prix",
          texte: "Quand ces conditions sont réunies, le marché impose son prix à tous les participants.",
          liste: [
            "Un même produit s'échange à un prix unique : vendre plus cher fait perdre le client.",
            "Le prix se fixe au niveau du prix d'équilibre.",
            "Un offreur qui veut gagner plus doit produire à moindre coût ou mieux vendre, pas augmenter son prix.",
          ],
        },
        {
          sousTitre: "4. Un modèle de référence",
          texte: "La concurrence pure et parfaite est un modèle théorique : il décrit rarement la réalité de façon complète, mais il sert à mesurer les écarts.",
          liste: [
            "Un marché de légumes avec de nombreux producteurs s'en approche.",
            "Un marché où un seul vendeur domine s'en éloigne fortement.",
            "Comparer un marché réel au modèle permet d'identifier les obstacles à la concurrence.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Le marché de la tomate dans une ville moyenne :",
          liste: [
            "Des dizaines de producteurs apportent des tomates comparables.",
            "Les acheteurs comparent les prix à quelques pas les uns des autres.",
            "Un vendeur qui affiche un prix plus élevé que ses voisins vend sa marchandise en dernier, ou pas du tout.",
            "Le prix du jour s'impose donc à tous : c'est le prix de marché.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "L'atomicité signifie…", opts: ["un très grand nombre d'acheteurs et de vendeurs", "un seul vendeur", "deux vendeurs seulement"], ok: 0, expl: "Aucun participant ne peut imposer son prix." },
          { q: "L'homogénéité des produits signifie qu'ils sont…", opts: ["identiques ou comparables", "tous différents", "tous gratuits"], ok: 0, expl: "L'acheteur choisit alors surtout selon le prix." },
          { q: "La libre entrée permet…", opts: ["à toute entreprise de venir produire et vendre", "à un seul vendeur de rester", "d'interdire la concurrence"], ok: 0, expl: "Aucun obstacle majeur ne bloque l'arrivée de nouveaux offreurs." },
          { q: "Sur un marché concurrentiel, un vendeur qui augmente son prix…", opts: ["perd ses clients", "gagne toujours plus", "devient monopoleur"], ok: 0, expl: "Les acheteurs se tournent vers les autres offreurs." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "En concurrence pure et parfaite, un vendeur peut imposer son prix.", rep: false, expl: "Aucun participant n'est assez gros pour imposer un prix." },
          { txt: "La transparence signifie que les prix sont connus de tous.", rep: true, expl: "L'information circule entre acheteurs et vendeurs." },
          { txt: "Le modèle de concurrence pure et parfaite sert de référence pour analyser un marché réel.", rep: true, expl: "Il permet de repérer les obstacles à la concurrence." },
          { txt: "La concurrence n'a jamais d'effet sur la qualité.", rep: false, expl: "Elle peut se jouer sur la qualité et le service autant que sur le prix." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite les cinq conditions de la concurrence pure et parfaite.", r: "L'atomicité, l'homogénéité des produits, la libre entrée et sortie, la transparence de l'information et la mobilité des acteurs." },
          { q: "Pourquoi aucun participant ne peut-il imposer son prix dans ce modèle ?", r: "Parce que les acheteurs et les vendeurs sont très nombreux et que chacun est trop petit pour peser sur le marché." },
          { q: "Comment un offreur peut-il gagner des clients en concurrence pure et parfaite ?", r: "En réduisant ses coûts pour baisser son prix, ou en améliorant la qualité et le service, mais pas en imposant un prix plus élevé." },
          { q: "Donne un exemple de marché qui se rapproche de ce modèle.", r: "Un marché de légumes où de nombreux producteurs vendent des produits comparables et où les acheteurs comparent les prix." },
        ]},
        { type: "appariement", consigne: "Relie chaque condition à sa signification.", pointsPar: 1, items: [
          { g: ["Atomicité", "Homogénéité", "Libre entrée", "Transparence"], d: ["Produits identiques ou comparables", "Prix et qualité connus de tous", "Très grand nombre d'acteurs", "Possibilité de s'installer ou de partir"], pairs: [[0, 2], [1, 0], [2, 3], [3, 1]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 31 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Monopole, duopole et oligopole",
      theme: "Marché et prix",
      ras: "Estimer le fonctionnement du marché en concurrence imparfaite",
      valeurs: "Responsabilité, Culture de l'excellence",
      objectif: "distinguer monopole, duopole et oligopole et décrire leurs conséquences",
      supportMeta: "Documents sur des marchés à offreurs limités, tableau comparatif, cahier",
      revision: [
        ["Cite trois conditions de la concurrence pure et parfaite.", "L'atomicité, l'homogénéité des produits et la libre entrée (ou la transparence, la mobilité)."],
        ["Que se passe-t-il quand l'offre diminue sur un marché ?", "Le prix d'équilibre monte et la quantité échangée diminue."],
      ],
      mise: [
        "Dans un village isolé, une seule boutique vend du sucre. Le prix sera-t-il le même qu'en ville ?",
        "Non : sans concurrent, le vendeur peut fixer un prix plus élevé.",
      ],
      observation: "le tableau comparant des marchés selon le nombre d'offreurs",
      observationSupport: "Tableau comparatif (un offreur, deux offreurs, quelques offreurs, multitude) affiché ou distribué",
      technAna: "Étude de cas, débat dirigé et questionnement",
      qa: [
        ["Qu'est-ce qu'un monopole ?", "Une situation de marché où un seul offreur fait face à de nombreux demandeurs ; aucun concurrent direct ne propose le même bien."],
        ["Qu'est-ce qu'un duopole ?", "Un marché sur lequel deux offreurs seulement se partagent la clientèle."],
        ["Qu'est-ce qu'un oligopole ?", "Un marché dominé par un petit nombre d'offreurs, chacun assez gros pour influencer le prix."],
        ["Quelles sont les causes d'un monopole ?", "Une barrière à l'entrée : un coût d'installation très élevé, une concession publique, un brevet, l'éloignement géographique."],
        ["Quelles sont les conséquences pour le consommateur ?", "En général, un prix plus élevé, moins de choix et moins d'incitation à améliorer la qualité."],
        ["Existe-t-il des monopoles utiles ?", "Oui : certains services de réseau — eau, électricité, télécommunications — sont fournis plus efficacement par un seul opérateur, mais ils sont alors régulés par les pouvoirs publics."],
        ["Comment limiter les abus ?", "Par le droit de la concurrence, le contrôle des prix dans certains cas, et l'ouverture du marché à de nouveaux entrants."],
      ],
      synthese: "Donc, la concurrence est imparfaite dès que le nombre d'offreurs devient restreint : monopole avec un seul offreur, duopole avec deux, oligopole avec quelques-uns. Dans ces situations, le prix n'est plus imposé par le marché : chaque offreur peut peser sur lui, au détriment du consommateur, d'où la nécessité d'une régulation publique.",
      motsCles: ["monopole", "duopole", "oligopole", "barrière à l'entrée", "concurrence imparfaite", "régulation", "consommateur"],
      contenu: [
        {
          sousTitre: "1. Le monopole",
          texte: "Un monopole est un marché où un seul offreur est présent. Il fixe son prix en tenant compte de la demande, sans craindre de concurrent direct.",
          liste: [
            "Causes : concession de service public, brevet, coût d'installation très élevé, isolement géographique.",
            "Conséquences : prix plus élevé, choix réduit, qualité parfois négligée.",
            "Exemple : la seule station-service d'une ville éloignée, le distributeur d'eau d'un quartier.",
          ],
        },
        {
          sousTitre: "2. Le duopole",
          texte: "Un duopole compte deux offreurs seulement. Chacun surveille l'autre et ajuste ses prix en fonction des réactions attendues.",
          liste: [
            "Exemple : deux compagnies de transport sur une même ligne.",
            "Conséquence : des prix souvent proches, et une forte tentation de s'entendre.",
            "Effet possible : une rivalité qui fait baisser les prix si chacun cherche à gagner des parts de marché.",
          ],
        },
        {
          sousTitre: "3. L'oligopole",
          texte: "Un oligopole est un marché dominé par quelques grandes entreprises. Chacune est assez importante pour influencer le prix, mais aucune ne peut ignorer les autres.",
          liste: [
            "Exemple : quelques grands opérateurs de téléphonie, quelques grandes marques sur un marché national.",
            "Conséquences : prix plus élevés qu'en concurrence, forte publicité pour se différencier, surveillance mutuelle.",
            "Risque : entente entre les offreurs, explicite ou tacite.",
          ],
        },
        {
          sousTitre: "4. Les barrières à l'entrée",
          texte: "Ce qui protège ces situations, ce sont les obstacles qui empêchent de nouveaux concurrents d'arriver.",
          liste: [
            "Coût financier : investissement lourd en usines ou en réseaux.",
            "Obstacle réglementaire : licence, concession, autorisation.",
            "Obstacle géographique : éloignement, coût du transport.",
            "Avantage technologique ou de marque : brevet, fidélité des clients.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Trois marchés comparés :",
          liste: [
            "Marché A : cinquante maraîchers vendent des tomates → concurrence, prix bas.",
            "Marché B : deux transporteurs desservent une ligne → duopole, prix surveillés.",
            "Marché C : une seule société distribue l'eau dans une ville → monopole, prix régulé par les pouvoirs publics.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Un monopole compte…", opts: ["un seul offreur", "deux offreurs", "une multitude d'offreurs"], ok: 0, expl: "C'est la définition même du monopole." },
          { q: "Un oligopole est un marché…", opts: ["dominé par quelques grandes entreprises", "sans offreur", "avec un seul acheteur"], ok: 0, expl: "Chacune peut influencer le prix, mais aucune ne domine seule." },
          { q: "Une barrière à l'entrée…", opts: ["empêche de nouveaux concurrents d'arriver", "facilite la concurrence", "fait baisser les prix"], ok: 0, expl: "Coût, licence ou éloignement protègent l'offreur en place." },
          { q: "Un monopole non régulé entraîne en général…", opts: ["un prix plus élevé pour le consommateur", "un prix plus bas", "une concurrence accrue"], ok: 0, expl: "Sans concurrent, l'offreur n'est pas contraint de baisser son prix." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Un duopole compte exactement deux offreurs.", rep: true, expl: "C'est la définition du duopole." },
          { txt: "Tout monopole est illégal.", rep: false, expl: "Certains services de réseau sont des monopoles régulés par la puissance publique." },
          { txt: "Un monopole peut résulter de l'isolement géographique.", rep: true, expl: "Un village éloigné n'attire pas forcément de second commerçant." },
          { txt: "En oligopole, les entreprises s'ignorent totalement.", rep: false, expl: "Elles se surveillent et ajustent leurs prix en conséquence." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Donne la définition d'un monopole.", r: "Un monopole est une situation de marché où un seul offreur fait face à de nombreux demandeurs." },
          { q: "Quelle différence y a-t-il entre duopole et oligopole ?", r: "Le duopole compte deux offreurs, tandis que l'oligopole en compte un petit nombre, chacun capable d'influencer le prix." },
          { q: "Cite deux barrières à l'entrée.", r: "Un investissement très coûteux et une licence ou concession obligatoire (ou encore l'éloignement géographique)." },
          { q: "Cite deux conséquences d'un monopole pour le consommateur.", r: "Un prix plus élevé et un choix réduit, la qualité pouvant aussi être négligée." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Un marché avec un seul offreur est un", suite: "monopole" },
          { debut: "Un marché avec deux offreurs est un", suite: "duopole" },
          { debut: "Un marché dominé par quelques grandes entreprises est un", suite: "oligopole" },
          { debut: "L'obstacle qui empêche un nouveau concurrent d'entrer est une barrière à l'", suite: "entrée" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 32 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "L'entente entre les offreurs et ses conséquences",
      theme: "Marché et prix",
      ras: "Estimer le fonctionnement du marché en concurrence imparfaite",
      valeurs: "Responsabilité, Culture de l'excellence",
      objectif: "expliquer ce qu'est une entente entre offreurs et ses conséquences pour le marché",
      supportMeta: "Étude de cas sur une entente, documents, cahier",
      revision: [
        ["Qu'est-ce qu'un oligopole ?", "Un marché dominé par un petit nombre d'offreurs, chacun capable d'influencer le prix."],
        ["Cite une barrière à l'entrée.", "Un investissement coûteux, une licence obligatoire ou l'éloignement géographique."],
      ],
      mise: [
        "Que se passe-t-il si tous les vendeurs de carburant d'une ville décident d'afficher le même prix élevé ?",
        "Le client n'a plus le choix : il paie plus cher, et les vendeurs partagent le surprofit.",
      ],
      observation: "l'étude de cas sur une entente entre offreurs",
      observationSupport: "Étude de cas sur une entente de prix, tableau des conséquences affiché",
      technAna: "Étude de cas, débat dirigé et jeu de rôle",
      qa: [
        ["Qu'est-ce qu'une entente entre offreurs ?", "Un accord, explicite ou tacite, par lequel des entreprises décident ensemble du prix à pratiquer, des quantités à offrir ou du partage de la clientèle, au lieu de se faire concurrence."],
        ["En quoi l'entente diffère-t-elle de la concurrence ?", "Dans la concurrence, chacun fixe son prix librement ; dans l'entente, les prix sont décidés en commun, comme s'il n'y avait qu'un seul vendeur."],
        ["Quelles formes l'entente peut-elle prendre ?", "Alignement des prix, répartition des zones de vente, limitation des quantités mises sur le marché, réponse commune à un appel d'offres."],
        ["Quelles sont les conséquences pour les consommateurs ?", "Des prix plus élevés, un choix réduit, une qualité moins stimulée : le pouvoir d'achat baisse."],
        ["Quelles sont les conséquences pour le marché ?", "Le prix ne joue plus son rôle de signal, l'offre est freinée et les entreprises les moins efficaces restent en place."],
        ["L'entente est-elle autorisée ?", "Non : le droit de la concurrence l'interdit et la sanctionne, car elle fausse le fonctionnement du marché au détriment des consommateurs."],
        ["Comment la repérer ?", "Des prix identiques et simultanés chez plusieurs vendeurs sans justification de coût, des augmentations parallèles répétées, ou un partage visible du territoire."],
      ],
      synthese: "Donc, une entente entre offreurs remplace la concurrence par une décision commune sur les prix ou les quantités. Elle profite aux entreprises qui la pratiquent et nuit aux consommateurs : prix plus élevés, choix réduit et marché faussé. C'est pourquoi le droit de la concurrence l'interdit et la sanctionne, et pourquoi l'arrivée de nouveaux concurrents reste le meilleur remède.",
      motsCles: ["entente", "prix imposé", "concurrence faussée", "consommateur", "droit de la concurrence", "sanction"],
      contenu: [
        {
          sousTitre: "1. Qu'est-ce qu'une entente ?",
          texte: "Une entente est une coordination entre entreprises concurrentes. Au lieu de se disputer la clientèle, elles s'accordent pour se comporter comme un offreur unique.",
          liste: [
            "Entente sur les prix : tous affichent le même tarif.",
            "Entente sur les quantités : limiter les volumes pour maintenir les prix élevés.",
            "Partage du marché : chacun garde « sa » zone ou « ses » clients.",
            "Entente tacite : sans accord écrit, chacun aligne simplement son prix sur celui du voisin.",
          ],
        },
        {
          sousTitre: "2. Les conséquences pour les consommateurs",
          texte: "L'entente transfère aux entreprises ce que la concurrence aurait laissé aux acheteurs.",
          liste: [
            "Un prix plus élevé que le prix de concurrence.",
            "Une baisse du pouvoir d'achat des ménages.",
            "Moins d'incitation à améliorer la qualité ou à innover.",
          ],
        },
        {
          sousTitre: "3. Les conséquences pour le marché",
          texte: "Le marché cesse de fonctionner comme un mécanisme d'ajustement entre offre et demande.",
          liste: [
            "Le prix ne reflète plus les coûts ni la rareté réelle.",
            "Les quantités échangées sont réduites par rapport à une situation de concurrence.",
            "Des entreprises peu efficaces survivent grâce au prix garanti.",
            "Les nouveaux entrants sont découragés.",
          ],
        },
        {
          sousTitre: "4. La réponse du droit",
          texte: "Le droit de la concurrence interdit les ententes et prévoit des sanctions. Les autorités peuvent aussi ouvrir le marché à de nouveaux entrants.",
          liste: [
            "Interdiction des ententes sur les prix et du partage de marché.",
            "Sanctions financières et, dans les cas graves, poursuites pénales.",
            "Contrôle des concentrations pour éviter qu'un groupe ne devienne trop dominant.",
            "Encadrement des monopoles naturels par la régulation des prix.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Sur un marché de matériaux de construction :",
          liste: [
            "Quatre fournisseurs s'accordent pour afficher le même prix du sac de ciment.",
            "Avant l'entente : 18 000 ariary le sac, avec des écarts selon les vendeurs.",
            "Après l'entente : 25 000 ariary chez tous, sans justification de coût.",
            "Conséquence : les familles qui construisent paient plus cher et renoncent à une partie des travaux ; les autorités peuvent sanctionner l'entente et faciliter l'arrivée d'autres fournisseurs.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une entente est…", opts: ["un accord entre offreurs sur les prix ou les quantités", "une baisse libre des prix", "une décision du consommateur"], ok: 0, expl: "Elle remplace la concurrence par une décision commune." },
          { q: "L'entente profite surtout…", opts: ["aux entreprises qui la pratiquent", "aux consommateurs", "aux nouveaux entrants"], ok: 0, expl: "Elle maintient les prix au-dessus du niveau de concurrence." },
          { q: "L'entente est…", opts: ["interdite par le droit de la concurrence", "obligatoire", "toujours tolérée"], ok: 0, expl: "Elle fausse le marché et porte atteinte au pouvoir d'achat." },
          { q: "Une entente tacite est…", opts: ["un alignement de prix sans accord écrit", "un contrat signé", "une grève"], ok: 0, expl: "Chacun aligne son prix sur celui du voisin, sans se concerter officiellement." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une entente fait baisser les prix pour les consommateurs.", rep: false, expl: "Elle les maintient au-dessus du niveau qu'aurait donné la concurrence." },
          { txt: "Une entente peut porter sur le partage d'une zone de vente.", rep: true, expl: "Le partage du marché est une forme classique d'entente." },
          { txt: "Le droit de la concurrence sanctionne les ententes.", rep: true, expl: "Des sanctions financières et des poursuites sont prévues." },
          { txt: "L'entente encourage l'arrivée de nouveaux concurrents.", rep: false, expl: "Elle les décourage au contraire, en verrouillant le marché." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Donne la définition d'une entente entre offreurs.", r: "Une entente est un accord, explicite ou tacite, par lequel des entreprises décident ensemble des prix, des quantités ou du partage de la clientèle au lieu de se faire concurrence." },
          { q: "Cite deux conséquences d'une entente pour les consommateurs.", r: "Des prix plus élevés et un choix réduit, accompagnés d'une baisse du pouvoir d'achat." },
          { q: "Cite deux conséquences d'une entente pour le marché.", r: "Le prix ne reflète plus la rareté réelle et les quantités échangées diminuent, tandis que des entreprises peu efficaces survivent." },
          { q: "Comment le droit réagit-il face aux ententes ?", r: "Le droit de la concurrence les interdit et les sanctionne financièrement, et il contrôle les concentrations pour éviter les positions dominantes." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["entente", "prix", "consommateurs", "pouvoir d'achat", "sanctionnée"], items: [
          { phrase: "Un accord entre offreurs sur les tarifs est une _________.", mot: "entente" },
          { phrase: "L'entente maintient un _________ supérieur à celui de la concurrence.", mot: "prix" },
          { phrase: "Les premières victimes d'une entente sont les _________.", mot: "consommateurs" },
          { phrase: "Une entente est interdite et _________ par la loi.", mot: "sanctionnée" },
        ]},
      ],
    },
  ],
};

module.exports = U;
