// ============================================================
// data-unite3.js — Manuel SES T11 série L
// Unité III — Coordination par le marché et par l'État (14 heures)
// RAS 1 : Fonction du marché concurrentiel
// RAS 2 : Efficacité d'un marché concurrentiel
// RAS 3 : Déterminer les différentes imperfections et les défaillances du marché
// RAS 4 : Expliquer les raisons de l'intervention de l'État dans l'économie
// Découpage : 5 séances de cours + 1 révision + 1 sujet d'examen (2 h par séance)
// Valeurs : Responsabilité, Justice et équité
// ============================================================

const U = {
  num: "III",
  titre: "Coordination par le marché et par l'État",
  ras: "Fonction du marché concurrentiel · Efficacité d'un marché concurrentiel · Déterminer les différentes imperfections et les défaillances du marché · Expliquer les raisons de l'intervention de l'État dans l'économie",
  valeurs: "Responsabilité, Justice et équité",
  duree: "14 heures",
  themes: [
    "Le marché : offre, demande et formation du prix",
    "L'équilibre sur un marché concurrentiel",
    "Les structures de marché : concurrence, oligopole et monopole",
    "Concurrence pure et parfaite et efficacité du marché",
    "Imperfections, défaillances du marché et intervention de l'État",
  ],
  topics: [
    // ---------------------------------------------------------
    // SÉANCE 17
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le marché : offre, demande et formation du prix",
      theme: "Coordination par le marché et par l'État",
      ras: "Fonction du marché concurrentiel",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "définir le marché et expliquer comment l'offre et la demande forment le prix",
      supportMeta: "Illustration, schémas, documents, cahier",
      revision: [
        ["Qu'est-ce qu'un agent à besoin de financement ?", "Un agent dont les dépenses prévues dépassent les ressources disponibles."],
        ["Qu'est-ce que le taux d'intérêt ?", "Le prix du crédit : la rémunération du prêteur et le coût de l'emprunteur."],
      ],
      mise: [
        "Sur le marché du village, pourquoi le prix du riz change-t-il d'une semaine à l'autre ?",
        "Parce qu'il dépend de ce que les vendeurs apportent et de ce que les acheteurs sont prêts à payer. C'est la rencontre de l'offre et de la demande qui fixe le prix.",
      ],
      observation: "l'illustration du marché",
      observationSupport: "Illustration du marché affichée ou distribuée",
      technAna: "Observation dirigée et questionnement",
      qa: [
        ["Qu'est-ce qu'un marché ?", "Le lieu, réel ou virtuel, où se rencontrent des offreurs et des demandeurs pour échanger un bien ou un service contre un prix."],
        ["Qu'est-ce que la demande ?", "La quantité d'un bien que les acheteurs sont prêts et capables d'acheter à un prix donné."],
        ["Qu'est-ce que l'offre ?", "La quantité d'un bien que les vendeurs sont prêts et capables de vendre à un prix donné."],
        ["Comment varie la demande selon le prix ?", "Elle diminue quand le prix monte et augmente quand le prix baisse, toutes choses égales par ailleurs."],
        ["Comment varie l'offre selon le prix ?", "Elle augmente quand le prix monte et diminue quand le prix baisse : un prix plus élevé rend la vente plus intéressante."],
        ["Qu'est-ce que le prix ?", "La somme demandée pour une unité du bien : il exprime la valeur d'échange et coordonne les décisions."],
        ["Que signifie « toutes choses égales par ailleurs » ?", "Que l'on raisonne sur le seul effet du prix, en supposant les revenus, les goûts et les prix des autres biens inchangés."],
        ["Quel est le rôle du prix dans l'économie ?", "Il renseigne sur la rareté, oriente les choix des acheteurs et des vendeurs, et ajuste les quantités échangées."],
      ],
      synthese: "Donc, le marché est le lieu de rencontre entre offreurs et demandeurs. La demande diminue quand le prix monte, l'offre augmente quand le prix monte. Le prix qui se forme coordonne les décisions : il renseigne sur la rareté et ajuste les quantités échangées.",
      motsCles: ["marché", "offre", "demande", "prix", "acheteurs", "vendeurs", "toutes choses égales par ailleurs", "rareté"],
      image: { file: "t11_l_marche.jpg", legende: "Figure 13 — Le marché : offreurs, demandeurs et prix discuté." },
      contenu: [
        {
          sousTitre: "1. Le marché : un lieu de rencontre",
          texte: "Le marché n'est pas forcément un lieu physique.",
          liste: [
            "Des offreurs et des demandeurs s'y rencontrent.",
            "Ils échangent un bien ou un service contre un prix.",
            "Le marché peut être local, national, ou fonctionner à distance.",
          ],
        },
        {
          sousTitre: "2. La demande",
          texte: "Elle exprime l'intention d'acheter, à condition de pouvoir payer.",
          liste: [
            "Demande : quantité que les acheteurs veulent et peuvent acheter à un prix donné.",
            "Quand le prix baisse, la demande augmente : le bien devient accessible.",
            "Attention : vouloir un bien sans pouvoir le payer n'est pas une demande.",
          ],
        },
        {
          sousTitre: "3. L'offre",
          texte: "Elle exprime l'intention de vendre à un prix donné.",
          liste: [
            "Offre : quantité que les vendeurs veulent et peuvent vendre à un prix donné.",
            "Quand le prix monte, l'offre augmente : vendre devient plus rémunérateur.",
            "Le coût de production limite jusqu'où le prix peut baisser.",
          ],
        },
        {
          sousTitre: "4. Le rôle du prix",
          texte: "Le prix est une information et une incitation.",
          liste: [
            "Il renseigne sur la rareté relative du bien.",
            "Il oriente les acheteurs vers d'autres choix quand il monte.",
            "Il incite les vendeurs à produire davantage quand il est élevé.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Quand le prix d'un bien baisse, la demande…", opts: ["augmente", "diminue", "reste nulle"], ok: 0, expl: "Le bien devient accessible à davantage d'acheteurs." },
          { q: "Quand le prix monte, l'offre…", opts: ["augmente", "diminue", "disparaît"], ok: 0, expl: "Vendre devient plus rémunérateur." },
          { q: "Vouloir un bien sans pouvoir le payer constitue…", opts: ["un besoin non solvable", "une demande", "une offre"], ok: 0, expl: "La demande suppose le pouvoir d'acheter." },
          { q: "Le prix renseigne sur…", opts: ["la rareté du bien", "la météo", "le nombre d'habitants"], ok: 0, expl: "Il exprime la valeur d'échange." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Un marché suppose la rencontre d'offreurs et de demandeurs.", rep: true, expl: "C'est sa définition." },
          { txt: "La demande augmente quand le prix augmente.", rep: false, expl: "Elle diminue quand le prix monte." },
          { txt: "Le prix oriente les décisions des acheteurs et des vendeurs.", rep: true, expl: "Il coordonne l'économie." },
          { txt: "Le marché est toujours un lieu physique précis.", rep: false, expl: "Il peut fonctionner à distance." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Qu'est-ce qu'un marché ?", r: "C'est le lieu, réel ou virtuel, où se rencontrent des offreurs et des demandeurs pour échanger un bien ou un service contre un prix." },
          { q: "Définis la demande et l'offre.", r: "La demande est la quantité que les acheteurs veulent et peuvent acheter à un prix donné ; l'offre est la quantité que les vendeurs veulent et peuvent vendre à ce prix." },
          { q: "Comment l'offre et la demande varient-elles selon le prix ?", r: "La demande diminue quand le prix monte et augmente quand il baisse ; l'offre augmente quand le prix monte et diminue quand il baisse." },
          { q: "Quel est le rôle du prix dans l'économie ?", r: "Il renseigne sur la rareté, oriente les choix des acheteurs et des vendeurs, et ajuste les quantités échangées." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "La quantité que les acheteurs veulent et peuvent acheter est la", suite: "demande" },
          { debut: "La quantité que les vendeurs veulent et peuvent vendre est l'", suite: "offre" },
          { debut: "Quand le prix baisse, la demande", suite: "augmente" },
          { debut: "La somme demandée pour une unité du bien est le", suite: "prix" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 18
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "L'équilibre sur un marché concurrentiel",
      theme: "Coordination par le marché et par l'État",
      ras: "Fonction du marché concurrentiel",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "expliquer comment le marchandage conduit au prix et à la quantité d'équilibre",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Comment varie la demande quand le prix baisse ?", "Elle augmente : le bien devient accessible à davantage d'acheteurs."],
        ["Qu'est-ce qu'un marché ?", "Le lieu de rencontre entre offreurs et demandeurs pour échanger contre un prix."],
      ],
      mise: [
        "Au marché, un vendeur annonce un prix trop haut : que se passe-t-il ?",
        "Personne n'achète, le stock reste ; il baisse son prix. À l'inverse, un prix trop bas vide l'étal en quelques minutes et fait monter les prix : le marché converge vers un prix d'équilibre.",
      ],
      observation: "le schéma de la formation du prix d'équilibre",
      observationSupport: "Schéma de l'équilibre affiché ou distribué",
      technAna: "Lecture de schéma et débat dirigé",
      qa: [
        ["Qu'est-ce que le prix d'équilibre ?", "Le prix pour lequel la quantité offerte égale la quantité demandée : le marché se vide."],
        ["Qu'est-ce que la quantité d'équilibre ?", "La quantité échangée au prix d'équilibre, où chaque acheteur trouve un vendeur et réciproquement."],
        ["Que se passe-t-il si le prix est trop élevé ?", "L'offre dépasse la demande : les invendus s'accumulent et le prix baisse."],
        ["Que se passe-t-il si le prix est trop bas ?", "La demande dépasse l'offre : les acheteurs se font concurrence et le prix monte."],
        ["Qu'est-ce que le marchandage ?", "La discussion entre vendeur et acheteur qui, par ajustements successifs, conduit au prix de l'échange."],
        ["Qui fixe le prix d'équilibre ?", "Personne en particulier : il résulte des ajustements entre offreurs et demandeurs, personne ne le décide seul."],
        ["Que signifie « le marché se vide » ?", "Que toute la marchandise apportée trouve preneur au prix pratiqué, sans excédent ni pénurie durable."],
        ["L'équilibre est-il définitif ?", "Non : il se déplace dès que l'offre ou la demande change, par exemple à la suite d'une mauvaise récolte."],
      ],
      synthese: "Donc, le prix d'équilibre est celui pour lequel offre et demande s'égalisent : le marché se vide. Un prix trop élevé laisse des invendus et baisse ; un prix trop bas crée une pénurie et monte. Le marchandage est le mécanisme concret de cet ajustement, que personne ne décide seul.",
      motsCles: ["prix d'équilibre", "quantité d'équilibre", "marchandage", "ajustement", "invendus", "pénurie", "marché concurrentiel", "se vide"],
      image: { file: "t11_l_equilibre.png", legende: "Figure 14 — Le marchandage conduit au prix qui vide le marché." },
      contenu: [
        {
          sousTitre: "1. Quand le prix est trop élevé",
          texte: "Les vendeurs proposent plus que ce que les acheteurs acceptent.",
          liste: [
            "L'offre dépasse la demande : les invendus s'accumulent.",
            "Le vendeur baisse son prix pour écouler le stock.",
            "La baisse attire de nouveaux acheteurs.",
          ],
        },
        {
          sousTitre: "2. Quand le prix est trop bas",
          texte: "Les acheteurs se disputent une quantité insuffisante.",
          liste: [
            "La demande dépasse l'offre : la pénurie apparaît.",
            "Les acheteurs proposent un prix plus élevé.",
            "La hausse attire de nouveaux vendeurs.",
          ],
        },
        {
          sousTitre: "3. L'équilibre",
          texte: "L'ajustement s'arrête quand le marché se vide.",
          liste: [
            "Offre = demande : plus aucune pression sur le prix.",
            "Prix d'équilibre et quantité d'équilibre se stabilisent.",
            "Tous ceux qui veulent acheter au prix trouvent un vendeur.",
          ],
        },
        {
          sousTitre: "4. Le marchandage et le déplacement de l'équilibre",
          texte: "Le mécanisme concret, et sa remise en cause.",
          liste: [
            "Le marchandage : annonces, contre-propositions, accord.",
            "L'équilibre se déplace si l'offre ou la demande change.",
            "Exemple : une mauvaise récolte réduit l'offre et fait monter le prix.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le prix d'équilibre est celui pour lequel…", opts: ["l'offre égale la demande", "l'offre est nulle", "la demande est maximale"], ok: 0, expl: "Le marché se vide à ce prix." },
          { q: "Un prix trop élevé provoque…", opts: ["des invendus", "une pénurie", "un équilibre"], ok: 0, expl: "Les acheteurs se retirent." },
          { q: "Un prix trop bas provoque…", opts: ["une pénurie", "des invendus", "une baisse de la demande"], ok: 0, expl: "Les acheteurs se disputent la marchandise." },
          { q: "Le marchandage est…", opts: ["un ajustement par la discussion", "un prix fixé par l'État", "un tirage au sort"], ok: 0, expl: "Chacun ajuste son prixjusqu'à l'accord." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Au prix d'équilibre, il reste des invendus.", rep: false, expl: "Le marché se vide exactement." },
          { txt: "Une mauvaise récolte déplace l'équilibre du marché.", rep: true, expl: "L'offre diminue, le prix monte." },
          { txt: "Le prix d'équilibre est décidé par une seule autorité.", rep: false, expl: "Il résulte des ajustements du marché." },
          { txt: "La quantité d'équilibre est celle échangée au prix d'équilibre.", rep: true, expl: "C'est la définition." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis le prix d'équilibre et la quantité d'équilibre.", r: "Le prix d'équilibre est celui pour lequel l'offre égale la demande ; la quantité d'équilibre est la quantité échangée à ce prix." },
          { q: "Que se passe-t-il quand le prix est trop élevé ?", r: "L'offre dépasse la demande, les invendus s'accumulent et le prix baisse jusqu'à l'équilibre." },
          { q: "Que se passe-t-il quand le prix est trop bas ?", r: "La demande dépasse l'offre, la pénurie apparaît et les acheteurs se font concurrence, ce qui fait monter le prix." },
          { q: "Qu'est-ce que le marchandage et que produit-il ?", r: "C'est la discussion entre vendeur et acheteur qui, par ajustements successifs, conduit au prix auquel l'échange se conclut." },
        ]},
        { type: "appariement", consigne: "Relie chaque situation à sa conséquence.", pointsPar: 1, items: [
          { g: ["Prix trop élevé", "Prix trop bas", "Offre égale à la demande", "Offre qui diminue", "Demande qui augmente"], d: ["Prix d'équilibre", "Invendus", "Prix qui monte", "Pénurie", "Prix qui monte"], pairs: [[0, 1], [1, 3], [2, 0], [3, 2], [4, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 19
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les structures de marché : concurrence, oligopole et monopole",
      theme: "Coordination par le marché et par l'État",
      ras: "Fonction du marché concurrentiel",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "comparer les structures de marché selon le nombre d'offreurs et le pouvoir sur le prix",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Qu'est-ce que le prix d'équilibre ?", "Le prix pour lequel l'offre égale la demande."],
        ["Que se passe-t-il quand le prix est trop bas ?", "La demande dépasse l'offre : la pénurie fait monter le prix."],
      ],
      mise: [
        "Dans un village, un seul fournisseur d'électricité : peut-il fixer son prix comme il veut ?",
        "Oui, tant que personne ne peut le concurrencer. Le nombre d'offreurs détermine le pouvoir sur le prix : c'est ce que distinguent les structures de marché.",
      ],
      observation: "le schéma des structures de marché",
      observationSupport: "Schéma des structures affiché ou distribué",
      technAna: "Lecture de tableau et étude de cas",
      qa: [
        ["Qu'est-ce qu'une structure de marché ?", "La manière dont un marché est organisé, selon le nombre d'offreurs et de demandeurs et la nature du produit."],
        ["Qu'est-ce que la concurrence ?", "Une structure où les offreurs sont très nombreux : aucun ne peut imposer son prix."],
        ["Qu'est-ce que le monopole ?", "Une structure où un seul offreur détient le marché : il fixe le prix."],
        ["Qu'est-ce que l'oligopole ?", "Une structure où quelques offreurs se partagent le marché : chacun surveille les autres."],
        ["Qu'est-ce que le duopole ?", "Un oligopole réduit à deux offreurs."],
        ["Quel lien entre nombre d'offreurs et pouvoir sur le prix ?", "Plus les offreurs sont nombreux, moins chacun peut imposer son prix ; moins ils le sont, plus le pouvoir grandit."],
        ["Cite un exemple de situation monopolistique.", "Une seule société de distribution d'eau dans une ville, sans concurrent possible."],
        ["Pourquoi les offreurs d'un oligopole s'observent-ils ?", "Parce que la décision de l'un, baisser son prix ou lancer un produit, modifie immédiatement la position des autres."],
      ],
      synthese: "Donc, la structure d'un marché dépend du nombre d'offreurs : très nombreux dans la concurrence, quelques-uns dans l'oligopole, un seul dans le monopole. Plus les offreurs sont nombreux, moins chacun peut imposer son prix ; moins ils le sont, plus le pouvoir sur le prix grandit.",
      motsCles: ["structure de marché", "concurrence", "monopole", "oligopole", "duopole", "nombre d'offreurs", "pouvoir sur le prix", "preneur de prix"],
      image: { file: "t11_l_structures.png", legende: "Figure 15 — Du monopole à la concurrence." },
      contenu: [
        {
          sousTitre: "1. Lire une structure de marché",
          texte: "Deux critères suffisent pour la décrire.",
          liste: [
            "Le nombre d'offreurs présents sur le marché.",
            "Le pouvoir qu'ils exercent sur le prix.",
            "La nature du produit joue aussi : identique ou différencié.",
          ],
        },
        {
          sousTitre: "2. La concurrence",
          texte: "Beaucoup d'offreurs, un produit identique.",
          liste: [
            "Aucun offreur ne peut imposer son prix : chacun le subit.",
            "On appelle ces offreurs des preneurs de prix.",
            "L'entrée sur le marché est facile.",
          ],
        },
        {
          sousTitre: "3. L'oligopole",
          texte: "Quelques offreurs se partagent le marché.",
          liste: [
            "Chacun surveille les décisions des autres.",
            "Le pouvoir sur le prix est partagé, jamais total.",
            "Le duopole est le cas limite : deux offreurs seulement.",
          ],
        },
        {
          sousTitre: "4. Le monopole",
          texte: "Un seul offreur, aucune alternative.",
          liste: [
            "Il fixe le prix, dans la limite de ce que le client accepte.",
            "L'entrée sur le marché est bloquée : coût, règle, réseau.",
            "Le monopole peut être public, quand il assure un service essentiel.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Un marché où un seul offreur détient l'offre est un…", opts: ["monopole", "oligopole", "duopole"], ok: 0, expl: "Un seul vendeur face à tous les acheteurs." },
          { q: "Dans la concurrence, l'offreur est…", opts: ["preneur de prix", "faiseur de prix", "seul décideur"], ok: 0, expl: "Il subit le prix du marché." },
          { q: "Un oligopole comprend…", opts: ["quelques offreurs", "un seul offreur", "aucun offreur"], ok: 0, expl: "Ils se partagent le marché." },
          { q: "Quand les offreurs sont très nombreux, le pouvoir sur le prix…", opts: ["disparaît", "augmente", "devient total"], ok: 0, expl: "Aucun ne peut l'imposer." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Un duopole compte exactement deux offreurs.", rep: true, expl: "C'est un oligopole réduit à deux." },
          { txt: "Dans un monopole, l'offreur fixe le prix sans aucune limite.", rep: false, expl: "Il reste limité par ce que l'acheteur accepte de payer." },
          { txt: "Dans un oligopole, les offreurs s'observent avant de décider.", rep: true, expl: "Chaque décision change la position des autres." },
          { txt: "La concurrence se caractérise par un petit nombre d'offreurs.", rep: false, expl: "Ils sont très nombreux au contraire." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Qu'est-ce qu'une structure de marché ?", r: "C'est la manière dont un marché est organisé, selon le nombre d'offreurs et de demandeurs et la nature du produit échangé." },
          { q: "Quelle différence entre concurrence, oligopole et monopole ?", r: "Dans la concurrence, les offreurs sont très nombreux et subissent le prix ; dans l'oligopole, quelques-uns se partagent le marché et s'observent ; dans le monopole, un seul offreur fixe le prix." },
          { q: "Quel lien entre le nombre d'offreurs et le pouvoir sur le prix ?", r: "Plus les offreurs sont nombreux, moins chacun peut imposer son prix ; plus ils sont peu nombreux, plus le pouvoir sur le prix grandit." },
          { q: "Qu'est-ce qu'un preneur de prix ?", r: "C'est un offreur qui ne peut pas fixer son prix et doit accepter celui du marché, comme dans la concurrence." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Un marché à offreur unique est un", suite: "monopole" },
          { debut: "Un marché partagé entre quelques offreurs est un", suite: "oligopole" },
          { debut: "Un offreur qui subit le prix du marché est un preneur de", suite: "prix" },
          { debut: "Un oligopole réduit à deux offreurs est un", suite: "duopole" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 20
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Concurrence pure et parfaite et efficacité du marché",
      theme: "Coordination par le marché et par l'État",
      ras: "Efficacité d'un marché concurrentiel",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "énoncer les conditions de la concurrence pure et parfaite et montrer l'efficacité du marché concurrentiel",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Qu'est-ce qu'un oligopole ?", "Un marché partagé entre quelques offreurs qui s'observent."],
        ["Qu'est-ce qu'un preneur de prix ?", "Un offreur qui ne peut pas fixer son prix et subit celui du marché."],
      ],
      mise: [
        "Un marché où tout le monde vend le même produit au même prix, sans secret sur les tarifs : que vaut-il ?",
        "C'est le modèle de la concurrence pure et parfaite. Il sert de référence : on mesure les marchés réels à l'écart qu'ils ont avec lui.",
      ],
      observation: "le schéma des conditions de la concurrence et des surplus",
      observationSupport: "Schéma de la concurrence pure et parfaite affiché ou distribué",
      technAna: "Lecture de schéma et questionnement dirigé",
      qa: [
        ["Qu'est-ce que la concurrence pure et parfaite ?", "Un modèle de marché où aucune entrave ne gêne la concurrence et où personne ne peut influencer le prix."],
        ["Cite les cinq conditions de la concurrence pure et parfaite.", "L'atomicité, l'homogénéité des produits, la transparence de l'information, la libre entrée et sortie, la libre circulation des facteurs."],
        ["Qu'est-ce que l'atomicité ?", "La présence d'un très grand nombre d'offreurs et de demandeurs : aucun n'est assez gros pour peser sur le prix."],
        ["Qu'est-ce que la transparence de l'information ?", "Le fait que tous les participants connaissent les prix et les caractéristiques des produits offerts."],
        ["Qu'est-ce que le surplus du consommateur ?", "L'écart entre ce que l'acheteur était prêt à payer et ce qu'il paie effectivement : un gain pour lui."],
        ["Qu'est-ce que le surplus du producteur ?", "L'écart entre le prix de vente et le prix minimum auquel le vendeur aurait accepté de vendre."],
        ["Qu'est-ce que le gain à l'échange ?", "L'avantage retiré par les deux parties : chacun obtient mieux que ce qu'il aurait accepté."],
        ["En quoi le marché concurrentiel est-il efficace ?", "Il alloue les ressources vers leurs emplois les plus utiles : au prix d'équilibre, tous les échanges avantageux sont réalisés."],
      ],
      synthese: "Donc, la concurrence pure et parfaite réunit cinq conditions : atomicité, homogénéité, transparence, libre entrée et sortie, libre circulation des facteurs. Dans ce cadre, le marché concurrentiel est efficace : il réalise tous les échanges avantageux et dégage un surplus pour le consommateur comme pour le producteur.",
      motsCles: ["concurrence pure et parfaite", "atomicité", "homogénéité", "transparence", "libre entrée", "surplus du consommateur", "surplus du producteur", "gain à l'échange"],
      image: { file: "t11_l_cpp.png", legende: "Figure 16 — Les conditions de la concurrence et le gain à l'échange." },
      contenu: [
        {
          sousTitre: "1. Les cinq conditions du modèle",
          texte: "Le modèle décrit un marché sans aucune entrave.",
          liste: [
            "Atomicité : offreurs et demandeurs très nombreux.",
            "Homogénéité : les produits sont identiques.",
            "Transparence : l'information est accessible à tous.",
            "Libre entrée et sortie du marché.",
            "Libre circulation des facteurs de production.",
          ],
        },
        {
          sousTitre: "2. Le surplus du consommateur",
          texte: "L'acheteur gagne dès qu'il paie moins qu'il n'était prêt à le faire.",
          liste: [
            "Surplus = prix accepté − prix payé.",
            "Il mesure l'avantage retiré de l'échange.",
            "Plus le prix est bas, plus le surplus est grand.",
          ],
        },
        {
          sousTitre: "3. Le surplus du producteur",
          texte: "Le vendeur gagne dès qu'il vend plus cher que son minimum.",
          liste: [
            "Surplus = prix de vente − prix minimum accepté.",
            "Il couvre d'abord les coûts de production.",
            "Il incite à produire et à rester sur le marché.",
          ],
        },
        {
          sousTitre: "4. L'efficacité du marché concurrentiel",
          texte: "Le modèle sert de référence pour juger les marchés réels.",
          liste: [
            "Les ressources vont vers leurs emplois les plus utiles.",
            "Tous les échanges avantageux sont réalisés : gain à l'échange.",
            "Aucun agent ne peut imposer un prix : le rationnement se fait par les prix.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "L'atomicité désigne…", opts: ["un très grand nombre d'offreurs et de demandeurs", "un marché à deux offreurs", "un produit unique"], ok: 0, expl: "Aucun agent ne peut peser sur le prix." },
          { q: "Le surplus du consommateur est…", opts: ["prix accepté − prix payé", "prix payé − prix accepté", "coût de production"], ok: 0, expl: "C'est le gain de l'acheteur." },
          { q: "La libre entrée signifie que…", opts: ["toute entreprise peut entrer sur le marché", "l'État fixe les prix", "les produits diffèrent"], ok: 0, expl: "Aucune barrière ne bloque l'entrée." },
          { q: "Le marché concurrentiel est efficace car…", opts: ["il réalise tous les échanges avantageux", "il fixe un prix unique pour tous les biens", "il supprime les coûts"], ok: 0, expl: "C'est le sens de l'allocation optimale." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Dans la concurrence pure et parfaite, les produits sont différenciés.", rep: false, expl: "Ils sont homogènes, c'est-à-dire identiques." },
          { txt: "La transparence suppose une information accessible à tous.", rep: true, expl: "C'est l'une des cinq conditions." },
          { txt: "Le rationnement par les prix écarte les acheteurs les moins solvables.", rep: true, expl: "Le prix sélectionne les demandes." },
          { txt: "Le modèle de concurrence pure et parfaite décrit la plupart des marchés réels.", rep: false, expl: "C'est une référence, les marchés réels s'en écartent." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite les cinq conditions de la concurrence pure et parfaite.", r: "L'atomicité, l'homogénéité des produits, la transparence de l'information, la libre entrée et sortie du marché, et la libre circulation des facteurs de production." },
          { q: "Définis le surplus du consommateur et le surplus du producteur.", r: "Le surplus du consommateur est l'écart entre ce qu'il était prêt à payer et ce qu'il paie ; celui du producteur est l'écart entre le prix de vente et le prix minimum accepté." },
          { q: "Qu'est-ce que le gain à l'échange ?", r: "C'est l'avantage retiré par les deux parties : l'acheteur paie moins qu'il n'était prêt à le faire, le vendeur vend plus cher que son minimum." },
          { q: "En quoi le marché concurrentiel est-il efficace ?", r: "Il oriente les ressources vers leurs emplois les plus utiles et réalise, au prix d'équilibre, tous les échanges avantageux pour les deux parties." },
        ]},
        { type: "appariement", consigne: "Relie chaque notion à sa définition.", pointsPar: 1, items: [
          { g: ["Offreurs très nombreux", "Produits identiques", "Information accessible", "Prix accepté moins prix payé", "Entrée sans barrière"], d: ["Homogénéité", "Transparence", "Surplus du consommateur", "Libre entrée", "Atomicité"], pairs: [[0, 4], [1, 0], [2, 1], [3, 2], [4, 3]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 21
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Imperfections, défaillances du marché et intervention de l'État",
      theme: "Coordination par le marché et par l'État",
      ras: "Déterminer les différentes imperfections et les défaillances du marché · Expliquer les raisons de l'intervention de l'État dans l'économie",
      valeurs: "Responsabilité, Justice et équité",
      objectif: "distinguer imperfections et défaillances du marché et expliquer l'intervention de l'État",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Cite deux conditions de la concurrence pure et parfaite.", "L'atomicité et la transparence de l'information, par exemple."],
        ["Qu'est-ce que le surplus du consommateur ?", "L'écart entre ce qu'il était prêt à payer et ce qu'il paie."],
      ],
      mise: [
        "Une usine rejette ses déchets dans la rivière : qui paie le coût ?",
        "Le village, pas l'usine. Le prix du marché ne rend pas compte de ce dommage : c'est une défaillance, et c'est une raison d'intervention publique.",
      ],
      observation: "le schéma des défaillances et de l'intervention de l'État",
      observationSupport: "Schéma des défaillances affiché ou distribué",
      technAna: "Lecture de schéma et étude de cas",
      qa: [
        ["Comment appelle-t-on un marché qui s'écarte du modèle ?", "Un marché imparfait : la concurrence y est limitée par des obstacles."],
        ["Cite trois imperfections du marché.", "Le nombre limité d'offreurs, la différenciation des produits, et les ententes entre producteurs qui créent des barrières à l'entrée."],
        ["Qu'est-ce qu'une défaillance du marché ?", "Une situation où le marché ne parvient pas à allouer correctement les ressources, même quand la concurrence fonctionne."],
        ["Qu'est-ce qu'une asymétrie d'information ?", "Une situation où une partie dispose de plus d'informations que l'autre, ce qui fausse l'échange."],
        ["Qu'est-ce qu'une externalité ?", "Un effet de l'activité sur un tiers, qui n'est ni payé ni compensé : positif comme une formation, négatif comme une pollution."],
        ["Qu'est-ce qu'un bien collectif ?", "Un bien dont l'usage par l'un n'empêche pas l'usage par les autres et dont on ne peut exclure personne : éclairage public, sécurité."],
        ["Pourquoi le marché ne fournit-il pas assez de biens collectifs ?", "Parce que chacun peut en profiter sans payer : le marché n'y trouve pas de recette suffisante."],
        ["Cite trois formes d'intervention de l'État.", "La réglementation, la taxation ou la subvention, et la fourniture directe du bien ou du service."],
      ],
      synthese: "Donc, les imperfections limitent la concurrence : nombre restreint d'offreurs, produits différenciés, ententes. Les défaillances vont plus loin : asymétrie d'information, externalités et biens collectifs empêchent le marché d'allouer correctement les ressources. L'État intervient alors par la réglementation, la fiscalité, les subventions ou la fourniture directe, et pour réduire les inégalités.",
      motsCles: ["imperfections du marché", "défaillance du marché", "asymétrie d'information", "externalité", "bien collectif", "barrières à l'entrée", "réglementation", "intervention de l'État"],
      image: { file: "t11_l_defaillances.png", legende: "Figure 17 — Ce que le marché ne fait pas seul." },
      contenu: [
        {
          sousTitre: "1. Les imperfections du marché",
          texte: "La concurrence est limitée par des obstacles concrets.",
          liste: [
            "Nombre limité d'offreurs : monopole ou oligopole.",
            "Différenciation des produits : chacun fidélise sa clientèle.",
            "Ententes entre producteurs, d'où des barrières à l'entrée.",
          ],
        },
        {
          sousTitre: "2. Les défaillances du marché",
          texte: "Même concurrentiel, le marché peut mal allouer les ressources.",
          liste: [
            "Asymétrie d'information : une partie en sait plus que l'autre.",
            "Externalités : un effet subi par un tiers, positif ou négatif.",
            "Biens collectifs : utiles à tous, mais sous-fournis par le marché.",
          ],
        },
        {
          sousTitre: "3. Pourquoi l'État intervient",
          texte: "Il corrige ce que le marché ne traite pas.",
          liste: [
            "Réglementer : normes, interdictions, contrôles.",
            "Taxer les activités nuisibles, subventionner les activités utiles.",
            "Fournir directement les biens que le marché ne fournit pas assez.",
          ],
        },
        {
          sousTitre: "4. Les autres raisons d'intervenir",
          texte: "Corriger ne suffit pas : il faut aussi répartir et stabiliser.",
          liste: [
            "Réduire les inégalités par la fiscalité et la dépense publique.",
            "Soutenir l'activité par des politiques conjoncturelles.",
            "Garantir le cadre : monnaie, concurrence, respect des contrats.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une pollution subie par les riverains est…", opts: ["une externalité négative", "un bien collectif", "une asymétrie"], ok: 0, expl: "Le tiers subit sans être compensé." },
          { q: "L'éclairage public est…", opts: ["un bien collectif", "un bien privé", "une externalité"], ok: 0, expl: "Personne n'en est exclu, l'usage est partagé." },
          { q: "Une entente entre producteurs crée…", opts: ["une barrière à l'entrée", "une libre entrée", "une transparence"], ok: 0, expl: "Elle bloque l'accès au marché." },
          { q: "Pour fournir un bien que le marché délaisse, l'État peut…", opts: ["le produire directement", "le supprimer", "le taxer davantage"], ok: 0, expl: "C'est la fourniture directe." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une externalité est toujours négative.", rep: false, expl: "Elle peut être positive, comme une formation." },
          { txt: "Une asymétrie d'information fausse l'échange.", rep: true, expl: "Une partie en sait plus que l'autre." },
          { txt: "Le marché fournit spontanément assez de biens collectifs.", rep: false, expl: "Chacun peut en profiter sans payer." },
          { txt: "L'État intervient aussi pour réduire les inégalités.", rep: true, expl: "Corriger le marché n'est pas son seul rôle." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Quelle différence entre une imperfection et une défaillance du marché ?", r: "L'imperfection limite la concurrence : nombre restreint d'offreurs, produits différenciés, ententes ; la défaillance empêche l'allocation correcte des ressources : asymétrie d'information, externalités, biens collectifs." },
          { q: "Cite les trois défaillances et donne un exemple de chacune.", r: "L'asymétrie d'information, quand le vendeur connaît un défaut caché ; l'externalité négative, comme une rivière polluée ; le bien collectif, comme l'éclairage public." },
          { q: "Pourquoi le marché ne fournit-il pas assez de biens collectifs ?", r: "Parce que personne ne peut en être exclu : chacun peut en profiter sans payer, le marché n'y trouve pas de recette suffisante." },
          { q: "Cite trois formes d'intervention de l'État dans l'économie.", r: "La réglementation par des normes, la taxation des activités nuisibles ou la subvention des activités utiles, et la fourniture directe du bien." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Un effet subi par un tiers sans compensation est une", suite: "externalité" },
          { debut: "Un bien dont personne n'est exclu est un bien", suite: "collectif" },
          { debut: "Une entente entre producteurs crée une barrière à l'", suite: "entrée" },
          { debut: "L'ensemble des mesures imposées aux acteurs est la", suite: "réglementation" },
        ]},
      ],
    },
  ],
};

module.exports = U;
