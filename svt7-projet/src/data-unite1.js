// ============================================================
// Unité I — Santé et bien-être : appareil digestif (10 h)
// ============================================================
const U = {
  num: "I",
  titre: "Santé et bien-être",
  ras: "Analyser le fonctionnement de l'appareil digestif",
  valeurs: "Responsabilité, respect de toute vie",
  topics: [
    {
      type: "cours",
      titre: "L'appareil digestif : découverte des organes",
      theme: "Santé et bien-être",
      ras: "Analyser le fonctionnement de l'appareil digestif",
      valeurs: "Responsabilité, respect de toute vie",
      objectif: "identifier les organes du tube digestif et les glandes digestives",
      supportMeta: "Schéma de l'appareil digestif, mannequin ou schéma du corps humain",
      revision: [
        ["Quels aliments faut-il manger pour être en bonne santé ?", "Des aliments variés : énergétiques, bâtisseurs et protecteurs."],
        ["Où va la nourriture quand tu l'avales ?", "Elle descend dans le corps, dans le tube digestif."],
      ],
      mise: ["Que se passe-t-il dans ton corps après avoir avalé un morceau de pain ?", "Le pain descend dans le tube digestif et il est transformé."],
      observation: "le schéma de l'appareil digestif",
      observationSupport: "Schéma de l'appareil digestif",
      technAna: "Observation guidée et questionnement",
      qa: [
        ["Que voyez-vous sur ce schéma ?", "Le tube digestif et les glandes digestives."],
        ["Par où les aliments entrent-ils dans le corps ?", "Par la bouche (avec le pharynx et l'œsophage)."],
        ["Quels organes forment le tube digestif ?", "La bouche, le pharynx, l'œsophage, l'estomac, l'intestin grêle, le gros intestin et l'anus."],
        ["La digestion concerne-t-elle seulement le tube digestif ?", "Non, des glandes digestives participent aussi : glandes salivaires, glandes gastriques, foie, pancréas, glandes intestinales."],
      ],
      synthese: "Donc, l'appareil digestif comprend le tube digestif (bouche, pharynx, œsophage, estomac, intestin grêle, gros intestin, anus) et les glandes digestives (salivaires, gastriques, foie, pancréas, intestinales).",
      motsCles: ["appareil digestif", "tube digestif", "glandes digestives", "estomac", "intestin grêle"],
      contenu: [
        { sousTitre: "1. Le tube digestif", texte: "Le tube digestif est le long conduit que les aliments parcourent dans le corps. Il commence à la bouche et se termine à l'anus.", liste: ["La bouche : introduction des aliments et mastication.", "Le pharynx : passage vers l'œsophage.", "L'œsophage : conduit qui amène les aliments à l'estomac.", "L'estomac : poche qui reçoit les aliments.", "L'intestin grêle : longue partie où la digestion se termine.", "Le gros intestin : réserve d'eau et formation des déchets.", "L'anus : orifice d'évacuation des déchets."] },
        { sousTitre: "2. Les glandes digestives", texte: "Les glandes digestives produisent des liquides qui aident à transformer les aliments.", liste: ["Glandes salivaires : salive dans la bouche.", "Glandes gastriques : sucs dans l'estomac.", "Foie : bile.", "Pancréas : sucs digestifs.", "Glandes intestinales : sucs dans l'intestin grêle."] },
        { sousTitre: "Exemple", texte: "Quand tu manges du riz, il entre par la bouche, passe par l'œsophage, arrive dans l'estomac, puis dans l'intestin grêle où il est transformé en substances utilisables par le corps." },
      ],
      appExos: [
        { type: "qcm", consigne: "Encercle la bonne réponse.", pointsPar: 1, items: [
          { q: "L'appareil digestif commence à…", opts: ["la bouche", "l'estomac", "l'anus"], ok: 0, expl: "La digestion commence dans la bouche." },
          { q: "L'œsophage amène les aliments vers…", opts: ["l'intestin grêle", "l'estomac", "le pharynx"], ok: 1, expl: "L'œsophage conduit les aliments à l'estomac." },
          { q: "Les glandes digestives produisent…", opts: ["des aliments", "des liquides digestifs", "de l'urine"], ok: 1, expl: "Elles produisent des sucs et liquides utiles à la digestion." },
          { q: "Le gros intestin sert surtout à…", opts: ["digérer les protéines", "stocker l'eau et former les déchets", "absorber les graisses"], ok: 1, expl: "Il réserve l'eau et prépare l'évacuation des déchets." },
        ]},
        { type: "vf", consigne: "Écris V si vraie, F si fausse.", pointsPar: 1, items: [
          { txt: "Le tube digestif comprend la bouche, le pharynx, l'œsophage, l'estomac et les intestins.", rep: true, expl: "Ce sont les éléments du tube digestif." },
          { txt: "Le foie est un organe du tube digestif.", rep: false, expl: "Le foie est une glande digestive, pas une partie du tube." },
          { txt: "Les aliments sortent du corps par l'anus.", rep: true, expl: "L'anus est l'ouverture finale du tube digestif." },
          { txt: "L'estomac est un organe du tube digestif.", rep: true, expl: "L'estomac fait partie du tube digestif." },
        ]},
      ],
      evalExos: [
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Le tube digestif est formé par la bouche, le pharynx, l'œsophage, l'", suite: "estomac" },
          { debut: "Les aliments sortent du corps par l'", suite: "anus" },
          { debut: "Le \u2009foie et le pancréas sont des glandes", suite: "digestives" },
        ]},
        { type: "appariement", consigne: "Associe.", pointsPar: 1, items: [{ g: ["Bouche", "Estomac", "Intestin grêle"], d: ["Poche qui reçoit les aliments", "Introduction des aliments", "Fin de la digestion"], pairs: [[1,1],[0,0],[2,2]] }] },
      ],
    },
    {
      type: "cours",
      titre: "Les rôles du tube digestif et des glandes digestives",
      theme: "Santé et bien-être",
      ras: "Analyser le fonctionnement de l'appareil digestif",
      valeurs: "Responsabilité, respect de toute vie",
      objectif: "expliquer les rôles des organes du tube digestif et des glandes digestives",
      supportMeta: "Schéma de l'appareil digestif, tableau des rôles",
      revision: [
        ["Quels organes forment le tube digestif ?", "La bouche, le pharynx, l'œsophage, l'estomac, l'intestin grêle, le gros intestin et l'anus."],
        ["Cites deux glandes digestives.", "Les glandes salivaires et le foie (ou le pancréas, les glandes gastriques)."],
      ],
      mise: ["À quoi sert l'estomac ?", "Il reçoit les aliments et les transforme avec des sucs digestifs."],
      observation: "le tableau des rôles du tube digestif et des glandes digestives",
      observationSupport: "Tableau des rôles",
      technAna: "Questionnement dirigé",
      qa: [
        ["Quel est le rôle de la bouche ?", "Elle broie les aliments et les mélange avec la salive."],
        ["Quel est le rôle de l'œsophage ?", "Il conduit les aliments de la bouche vers l'estomac."],
        ["Quel est le rôle des glandes digestives ?", "Elles produisent des sucs qui transforment les aliments."],
        ["Pourquoi le foie est-il utile à la digestion ?", "Il produit la bile qui aide à digérer les graisses."],
      ],
      synthese: "Donc, chaque organe du tube digestif a un rôle précis (broyer, transporter, transformer, absorber, évacuer) et les glandes digestives produisent les sucs qui rendent cette transformation possible.",
      motsCles: ["rôles", "mastication", "sucs digestifs", "bile", "absorption"],
      contenu: [
        { sousTitre: "1. Rôles des organes du tube digestif", liste: ["Bouche : mastication et début de la digestion avec la salive.", "Pharynx et œsophage : transport des aliments.", "Estomac : brassage et début de la digestion des protéines.", "Intestin grêle : fin de la digestion et absorption des nutriments.", "Gros intestin : absorption de l'eau et formation des déchets.", "Anus : évacuation des déchets."] },
        { sousTitre: "2. Rôles des glandes digestives", liste: ["Glandes salivaires : salive qui contient une enzyme débutant la digestion de l'amidon.", "Glandes gastriques : suc gastrique dans l'estomac.", "Foie : bile qui facilite la digestion des graisses.", "Pancréas : sucs digestifs pour les protéines, sucres et graisses.", "Glandes intestinales : sucs qui terminent la digestion."] },
        { sousTitre: "Exemple", texte: "Le pain mastiqué dans la bouche est mélangé à la salive. Il arrive dans l'estomac, puis dans l'intestin grêle où les sucs le transforment en substances simples utilisables par le corps." },
      ],
      appExos: [
        { type: "qr", consigne: "Réponds par une phrase.", pointsPar: 2, items: [
          { q: "Quel est le rôle de l'œsophage ?", r: "Il conduit les aliments de la bouche vers l'estomac." },
          { q: "Pourquoi les glandes digestives sont-elles importantes ?", r: "Elles produisent les sucs qui transforment les aliments en substances utilisables." },
        ]},
        { type: "trous", consigne: "Complète avec les mots : estomac, salive, bile, anus.", mots: ["estomac", "salive", "bile", "anus"], pointsPar: 1, items: [
          { phrase: "La ____________ est produite par les glandes salivaires.", moteuil: "salive", mot: "salive" },
          { phrase: "L'____________ reçoit les aliments et les transforme.", moteuil: "estomac", mot: "estomac" },
          { phrase: "Le foie produit la ____________.", moteuil: "bile", mot: "bile" },
          { phrase: "Les déchets sortent par l'____________.", moteuil: "anus", mot: "anus" },
        ]},
      ],
      evalExos: [
        { type: "appariement", consigne: "Associe chaque organe à son rôle.", pointsPar: 1, items: [{ g: ["Bouche", "Estomac", "Foie", "Intestin grêle"], d: ["Produit la bile", "Mastique les aliments", "Absorbe les nutriments", "Transforme les aliments avec le suc gastrique"], pairs: [[2,0],[0,1],[3,2],[1,3]] }] },
      ],
    },
    {
      type: "cours",
      titre: "Le trajet et les transformations des aliments",
      theme: "Santé et bien-être",
      ras: "Analyser le fonctionnement de l'appareil digestif",
      valeurs: "Responsabilité, respect de toute vie",
      objectif: "déterminer le parcours d'un aliment et expliquer les transformations subies",
      supportMeta: "Schéma du trajet des aliments, matériel pour expérience de la salive sur l'amidon",
      revision: [
        ["Quel est le rôle du tube digestif ?", "Transporter, broyer, transformer et évacuer les aliments."],
        ["Quelle glande produit la bile ?", "Le foie."],
      ],
      mise: ["Suivons un morceau de riz depuis la cuillère jusqu'à la sortie du corps.", "Il passe par la bouche, le pharynx, l'œsophage, l'estomac, l'intestin grêle, le gros intestin et l'anus."],
      observation: "le schéma du trajet des aliments",
      observationSupport: "Schéma du trajet des aliments, expérience salive-amidon",
      technAna: "Démarche d'observation et questionnement",
      qa: [
        ["Que se passe-t-il dans la bouche ?", "Les aliments sont broyés et mélangés à la salive."],
        ["Que devient l'aliment dans l'estomac ?", "Il est brassé et attaqué par le suc gastrique."],
        ["Dans quel organe se terminent les transformations ?", "Dans l'intestin grêle, avec les sucs digestifs."],
        ["Que deviennent les substances obtenues ?", "Les substances simples passent dans le sang (absorption) et nourrissent le corps ; les déchets sont évacués."],
      ],
      synthese: "Donc, un aliment parcourt la bouche, le pharynx, l'œsophage, l'estomac, l'intestin grêle et le gros intestin ; il subit des transformations mécaniques (broyage, brassage) et chimiques (sucs, enzymes) et les substances obtenues sont absorbées, tandis que les déchets sont évacués par l'anus.",
      motsCles: ["trajet", "mastication", "actions mécaniques", "actions chimiques", "absorption"],
      contenu: [
        { sousTitre: "1. Le parcours de l'aliment", texte: "Le trajet de l'aliment est le suivant : bouche → pharynx → œsophage → estomac → intestin grêle → gros intestin → anus." },
        { sousTitre: "2. Les transformations mécaniques", liste: ["Broyage par les dents dans la bouche.", "Brassage par les muscles de l'estomac.", "Malaxage dans l'intestin."] },
        { sousTitre: "3. Les transformations chimiques", liste: ["Salive : début de la digestion de l'amidon (ex. pain).", "Suc gastrique : transformation des protéines.", "Bile et sucs du pancréas : digération des graisses, sucres et protéines.", "Sucs intestinaux : fin de la digestion."] },
        { sousTitre: "4. Le devenir des aliments", texte: "À la fin de la digestion, les aliments deviennent des substances simples (glucides, lipides, acides aminés, vitamines, sels minéraux) absorbées dans le sang. Ce qui n'est pas utilisé devient des déchets (fèces) évacués par l'anus." },
      ],
      appExos: [
        { type: "qr", consigne: "Réponds par une phrase.", pointsPar: 2, items: [
          { q: "Relève le trajet d'un aliment dans le tube digestif.", r: "Bouche, pharynx, œsophage, estomac, intestin grêle, gros intestin, anus." },
          { q: "Quelle différence existe entre une transformation mécanique et une transformation chimique ?", r: "La transformation mécanique broie ou mélange (dents, brassage), la transformation chimique change la matière grâce aux sucs et enzymes." },
        ]},
        { type: "vf", consigne: "Vrai ou faux ?", pointsPar: 1, items: [
          { txt: "La salive commence la digestion de l'amidon.", rep: true, expl: "La salive contient une enzyme qui digère l'amidon." },
          { txt: "Les aliments sont absorbés dans l'estomac.", rep: false, expl: "L'absorption principale se fait dans l'intestin grêle." },
          { txt: "Le gros intestin absorbe surtout de l'eau.", rep: true, expl: "C'est son rôle principal." },
        ]},
      ],
      evalExos: [
        { type: "completion", consigne: "Complète le trajet.", pointsPar: 1, items: [
          { debut: "Bouche → pharynx → œsophage → ", suite: "estomac" },
          { debut: "Estomac → intestin grêle → gros intestin → ", suite: "anus" },
          { debut: "Les substances simples passent dans le ", suite: "sang" },
        ]},
      ],
    },
    {
      type: "cours",
      titre: "Le devenir des aliments et les conséquences d'une digestion perturbée",
      theme: "Santé et bien-être",
      ras: "Analyser le fonctionnement de l'appareil digestif",
      valeurs: "Responsabilité, respect de toute vie",
      objectif: "expliquer les conséquences d'un organe digestif malade ou détruit sur la digestion",
      supportMeta: "Schéma de la digestion, tableau conséquences",
      revision: [
        ["À quoi servent les sucs digestifs ?", "À transformer les aliments en substances simples."],
        ["Pourquoi le riz est-il digéré ?", "Pour devenir des substances simples que le corps peut utiliser et absorber."],
      ],
      mise: ["Et si quelqu'un n'avait plus de salive ou plus d'intestin grêle fonctionnel ?", "La digestion du pain ne commencerait pas bien, et les aliments ne seraient plus correctement transformés ni absorbés."],
      observation: "un schéma de la digestion et un tableau de conséquences",
      observationSupport: "Schéma de la digestion + tableau",
      technAna: "Analyse de tableau",
      qa: [
        ["Que se passerait-il si l'estomac était détruit ?", "Les aliments ne seraient plus brassés et la transformation des protéines serait très diminuée."],
        ["Que se passerait-il si l'intestin grêle était malade ?", "La digestion ne se terminerait pas et les nutriments ne seraient plus bien absorbés ; le corps serait mal nourri."],
        ["Pourquoi faut-il bien mâcher ?", "Pour faciliter le travail de l'estomac et des sucs digestifs."],
      ],
      synthese: "Donc, chaque organe digestif est indispensable : s'il est malade ou détruit, la transformation des aliments et l'absorption des nutriments sont perturbées, ce qui peut provoquer une mauvaise alimentation du corps.",
      motsCles: ["digestion perturbée", "malnutrition", "absorption", "appareil digestif"],
      contenu: [
        { sousTitre: "1. Le devenir normal des aliments", liste: ["Bouche : broyage + salive.", "Estomac : brassage + suc gastrique.", "Intestin grêle : sucs + absorption des substances simples.", "Gros intestin : eau + déchets.", "Anus : évacuation."] },
        { sousTitre: "2. Conséquences d'une digestion perturbée", liste: ["Si la bouche ou les dents sont abîmées : broyage difficile.", "Si l'œsophage est bloqué : transport difficile.", "Si l'estomac est malade : transformation incomplète.", "Si le foie ou le pancréas sont malades : digestion des graisses ou des sucres perturbée.", "Si l'intestin grêle est malade : absorption insuffisante et malnutrition."] },
        { sousTitre: "3. Importance de la santé digestive", texte: "Bien mâcher, manger des repas réguliers, boire de l'eau propre et consulter en cas de douleur permettent de garder un appareil digestif en bonne santé." },
      ],
      appExos: [
        { type: "qr", consigne: "Réponds par une phrase.", pointsPar: 2, items: [
          { q: "Quelle conséquence a une maladie de l'intestin grêle sur le corps ?", r: "Les aliments ne sont plus bien absorbés, le corps reçoit moins de nutriments et peut souffrir de malnutrition." },
          { q: "Pourquoi le foie est-il important pour la digestion ?", r: "Il produit la bile qui permet de digérer les graisses." },
        ]},
        { type: "vf", consigne: "Vrai ou faux ?", pointsPar: 1, items: [
          { txt: "Une destruction de l'estomac empêcherait le brassage des aliments.", rep: true, expl: "L'estomac brasse et transforme les aliments." },
          { txt: "Lorsque l'appareil digestif est malade, les aliments sont toujours bien absorbés.", rep: false, expl: "Une digestion perturbée entraîne une mauvaise absorption." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Explique par une phrase.", pointsPar: 2, items: [
          { q: "Que se passerait-il si le pancréas ne produisait plus ses sucs ?", r: "Les sucres, graisses et protéines seraient moins bien digérés, la digestion serait incomplète." },
          { q: "Cite une bonne habitude pour garder un appareil digestif en bonne santé.", r: "Mâcher correctement et manger des repas réguliers (ou boire de l'eau propre, éviter l'excès de sucreries, consulter en cas de douleur)." },
        ]},
      ],
    },
  ],
};
module.exports = U;
