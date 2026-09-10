// ============================================================
// Unité II — Introduction à l'étude des sciences économiques et sociales
// (PE T10 — 6 heures)
// RAS 1 : Identifier les concepts clés en Sciences Économiques et Sociales
// RAS 2 : Distinguer les modes de fonctionnement de l'économie, de la société
//         et des organisations
// Découpage : 2 séances de cours + 1 révision + 1 sujet d'examen
// Valeurs : Culture de l'excellence, Respect d'autrui
// ============================================================

const U = {
  num: "II",
  titre: "Introduction à l'étude des sciences économiques et sociales",
  ras: "Identifier les concepts clés en Sciences Économiques et Sociales · Distinguer les modes de fonctionnement de l'économie, de la société et des organisations",
  valeurs: "Culture de l'excellence, Respect d'autrui",
  duree: "6 heures",
  themes: [
    "Les concepts clés des sciences économiques et sociales",
    "Le fonctionnement de l'économie et de la société",
  ],
  topics: [
    {
      type: "cours",
      titre: "Les concepts clés des sciences économiques et sociales",
      theme: "Introduction à l'étude des sciences économiques et sociales",
      ras: "Identifier les concepts clés en Sciences Économiques et Sociales",
      valeurs: "Culture de l'excellence, Respect d'autrui",
      objectif: "définir les principaux concepts des sciences économiques et sociales et expliquer pourquoi on les étudie",
      supportMeta: "Tableau des concepts affiché, documents, cahier",
      revision: [
        ["Qu'as-tu appris à l'école sur le rôle de l'argent dans la vie quotidienne ?", "L'argent sert à acheter des biens et des services, à payer le travail et à épargner."],
        ["Cite une règle que tout le monde doit respecter dans la société.", "Respecter les biens d'autrui, respecter les règles de circulation, payer ses impôts…"],
      ],
      mise: [
        "Quand un prix augmente au marché, tout le monde en parle. De quoi parle-t-on vraiment ?",
        "On parle d'économie : d'un prix, d'un marché, de la vie des gens.",
      ],
      observation: "le tableau des concepts clés affiché au tableau",
      observationSupport: "Tableau des concepts clés (science, économie, sociologie, sciences politiques, droit, organisation) affiché ou distribué",
      technAna: "Étude de document et questionnement dirigé",
      qa: [
        ["Qu'est-ce qu'une science ?", "C'est une démarche qui observe des faits, pose des questions, formule des hypothèses et les vérifie avant d'avancer une explication."],
        ["De quoi parle l'économie ?", "De la manière dont une société produit, répartit et consomme des ressources limitées pour satisfaire ses besoins."],
        ["De quoi parle la sociologie ?", "De la vie des groupes humains : les familles, les écoles, les quartiers, les normes, les valeurs et la manière dont les individus vivent ensemble."],
        ["Que désigne le mot « organisation » ?", "Un groupe structuré qui rassemble des personnes et des moyens pour atteindre un objectif : une entreprise, une administration, une association."],
        ["Qu'est-ce que le droit ?", "L'ensemble des règles écrites qui organisent la vie en société, protègent les libertés et permettent de régler les conflits."],
        ["Pourquoi étudier les sciences économiques et sociales ?", "Pour comprendre le monde dans lequel on vit, exercer son esprit critique, préparer son métier et devenir un citoyen libre et responsable."],
      ],
      synthese: "Donc, les Sciences Économiques et Sociales croisent plusieurs regards sur la réalité : l'économie étudie la production et la consommation des richesses, la sociologie étudie la vie des groupes, les sciences politiques étudient le pouvoir et le droit étudie les règles. Les réunir permet de comprendre les problèmes réels, qui ne sont jamais seulement économiques ou seulement sociaux.",
      motsCles: ["science", "économie", "sociologie", "sciences politiques", "droit", "organisation", "citoyen"],
      image: { file: "u2_concepts.jpg", legende: "Figure 4 — Les sciences économiques et sociales : quatre regards sur la réalité." },
      contenu: [
        {
          sousTitre: "1. Une science : une démarche, pas une opinion",
          texte: "Une science ne se contente pas d'affirmer. Elle suit une démarche : elle observe des faits, se pose une question, formule une hypothèse, rassemble des données, vérifie, puis propose une explication qui peut être discutée par d'autres. Une opinion personnelle, elle, n'a pas besoin de preuves.",
          liste: [
            "Observer : relever des faits mesurables (un prix, un effectif scolaire, une récolte).",
            "Questionner : pourquoi ce prix a-t-il augmenté ?",
            "Formuler une hypothèse : la récolte a été mauvaise, l'offre a baissé.",
            "Vérifier : comparer les quantités disponibles et les prix sur plusieurs marchés.",
            "Conclure et faire vérifier par d'autres.",
          ],
        },
        {
          sousTitre: "2. L'économie",
          texte: "L'économie étudie comment une société utilise des ressources limitées — la terre, le travail, le capital, le savoir — pour produire des biens et des services, les répartir entre ses membres et les consommer. Le mot vient du grec oikos (la maison) et nomos (la règle) : la gestion de la maison, étendue à celle de la cité.",
          liste: [
            "Produire : transformer des ressources en biens (du riz, une table) ou en services (un transport, une consultation).",
            "Répartir : qui reçoit quoi, sous forme de revenus (salaires, revenus agricoles, prestations).",
            "Consommer : utiliser les biens et services pour satisfaire des besoins.",
          ],
        },
        {
          sousTitre: "3. La sociologie",
          texte: "La sociologie étudie la vie des groupes humains et la manière dont les individus vivent ensemble. Elle s'intéresse aux familles, aux écoles, aux villages, aux quartiers, aux entreprises et à ce qui les tient ensemble.",
          liste: [
            "Les groupes sociaux : la famille, la classe, l'équipe de travail, l'association de villageois.",
            "Les normes et les valeurs : ce qui est permis, interdit, attendu ou valorisé.",
            "La socialisation : la manière dont chacun apprend à vivre en société.",
          ],
        },
        {
          sousTitre: "4. Les sciences politiques et le droit",
          texte: "Les sciences politiques étudient le pouvoir : qui décide, comment, et avec quelle légitimité. Le droit est l'ensemble des règles écrites qui organisent la vie collective, protègent les libertés et permettent de trancher les conflits sans violence.",
          liste: [
            "Le pouvoir politique s'exerce sur un territoire, au nom d'une collectivité.",
            "Le droit fixe des règles générales, connues à l'avance et opposables à tous.",
            "La loi, le règlement et le contrat sont des formes de règles de droit.",
          ],
        },
        {
          sousTitre: "5. Une organisation",
          texte: "Une organisation est un groupe de personnes structuré, doté de moyens, qui poursuit un objectif commun. On y trouve des règles de fonctionnement, une répartition des tâches et une autorité.",
          liste: [
            "L'entreprise : produit des biens ou des services pour les vendre.",
            "L'administration : rend un service public au nom de la collectivité.",
            "L'association, la coopérative ou la mutuelle : poursuit un but social ou mutualiste.",
          ],
        },
        {
          sousTitre: "6. Pourquoi étudier les sciences économiques et sociales ?",
          texte: "Les SES ne sont pas une discipline abstraite : elles servent à lire le monde réel et à y agir.",
          liste: [
            "Comprendre les phénomènes économiques et sociaux : pourquoi les prix varient, pourquoi des familles migrent, pourquoi des entreprises ferment.",
            "Développer l'esprit critique : vérifier une information, distinguer un fait d'une opinion, lire un graphique.",
            "Se préparer à la vie professionnelle : la gestion, la comptabilité, le commerce, l'entrepreneuriat supposent ces connaissances.",
            "Former un citoyen libre et responsable : comprendre le droit, les institutions et les enjeux du pays pour participer à la vie collective.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Quand le prix du riz augmente dans une ville, le phénomène est à la fois :",
          liste: [
            "économique : la récolte a baissé, l'offre est plus faible que la demande ;",
            "social : les ménages pauvres réduisent leurs autres dépenses ;",
            "politique : les autorités peuvent décider de limiter les exportations ;",
            "juridique : des règles encadrent les prix et la concurrence sur les marchés.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "L'économie étudie surtout…", opts: ["la production, la répartition et la consommation des richesses", "les roches et les volcans", "la conjugaison des verbes"], ok: 0, expl: "Elle porte sur l'usage des ressources limitées d'une société." },
          { q: "La sociologie étudie…", opts: ["les marchés financiers", "la vie des groupes humains", "les organes du corps humain"], ok: 1, expl: "Familles, écoles, quartiers, normes et valeurs sont ses objets." },
          { q: "Une organisation est…", opts: ["un groupe structuré qui poursuit un objectif", "un objet géométrique", "un document administratif"], ok: 0, expl: "Entreprise, administration ou association rassemblent des personnes et des moyens." },
          { q: "Le droit est…", opts: ["l'ensemble des règles qui organisent la vie en société", "un impôt", "un prix"], ok: 0, expl: "Il fixe des règles connues à l'avance et opposables à tous." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une science se contente d'opinions personnelles.", rep: false, expl: "Une science observe, mesure et vérifie avant d'expliquer." },
          { txt: "Une coopérative est une organisation de l'économie sociale.", rep: true, expl: "Association, coopérative et mutuelle poursuivent un but social ou mutualiste." },
          { txt: "L'étude des SES aide à développer l'esprit critique.", rep: true, expl: "Elle apprend à vérifier une information et à lire des données." },
          { txt: "Un phénomène économique n'a jamais de dimension sociale.", rep: false, expl: "Une hausse de prix, par exemple, a des conséquences sociales immédiates." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Donne la définition de l'économie.", r: "L'économie étudie comment une société produit, répartit et consomme des ressources limitées pour satisfaire ses besoins." },
          { q: "Donne la définition d'une organisation.", r: "Une organisation est un groupe de personnes structuré et doté de moyens, qui poursuit un objectif commun." },
          { q: "Cite deux raisons d'étudier les sciences économiques et sociales.", r: "On les étudie pour comprendre le monde réel et pour former un citoyen libre et responsable (on peut aussi citer l'esprit critique et la préparation à un métier)." },
          { q: "Montre, avec un exemple, qu'un fait économique a aussi une dimension sociale.", r: "Quand le prix du riz augmente, les ménages réduisent leurs autres dépenses : le fait est économique, mais ses effets sont sociaux." },
        ]},
        { type: "appariement", consigne: "Relie chaque notion à sa définition.", pointsPar: 1, items: [
          { g: ["Économie", "Sociologie", "Sciences politiques", "Droit"], d: ["Étude du pouvoir et des institutions", "Ensemble des règles qui organisent la vie en société", "Étude de la production et de la consommation des richesses", "Étude de la vie des groupes humains"], pairs: [[0, 2], [1, 3], [2, 0], [3, 1]] },
        ]},
      ],
    },
    {
      type: "cours",
      titre: "Le fonctionnement de l'économie et de la société",
      theme: "Introduction à l'étude des sciences économiques et sociales",
      ras: "Distinguer les modes de fonctionnement de l'économie, de la société et des organisations",
      valeurs: "Culture de l'excellence, Respect d'autrui",
      objectif: "distinguer le fonctionnement de l'économie, celui de la société et celui des organisations",
      supportMeta: "Schéma du circuit économique, documents, cahier",
      revision: [
        ["Qu'est-ce que l'économie ?", "L'étude de la manière dont une société produit, répartit et consomme des ressources limitées."],
        ["Qu'est-ce qu'une organisation ?", "Un groupe structuré de personnes et de moyens qui poursuit un objectif commun."],
      ],
      mise: [
        "Qui fabrique le pain que tu achètes, et qui le paie ?",
        "Le boulanger le fabrique avec de la farine et du travail ; le client le paie avec son argent.",
      ],
      observation: "le schéma du circuit économique affiché au tableau",
      observationSupport: "Schéma du circuit économique (ménages, entreprises, administrations) affiché ou distribué",
      technAna: "Étude de document, travail de groupe et questionnement",
      qa: [
        ["Qui sont les acteurs principaux de l'économie ?", "Les ménages, les entreprises, les administrations et, avec eux, le reste du monde par les échanges extérieurs."],
        ["Que font les ménages dans le circuit économique ?", "Ils offrent leur travail, reçoivent des revenus et consomment des biens et des services."],
        ["Que font les entreprises ?", "Elles emploient du travail et du capital, produisent des biens et des services, versent des salaires et vendent leur production."],
        ["Que font les administrations ?", "Elles rendent des services publics — école, santé, sécurité, routes — financés par les impôts, et redistribuent une partie des revenus."],
        ["Qu'est-ce qui fait tenir une société ensemble ?", "Des règles partagées, des valeurs, des institutions et la socialisation : chacun apprend à vivre avec les autres."],
        ["Comment fonctionne une organisation ?", "Elle fixe un objectif, définit des rôles, répartit les tâches et coordonne le travail selon des règles."],
        ["Économie et société sont-elles séparées ?", "Non : les décisions économiques ont des effets sociaux, et la vie sociale influence la production et la consommation."],
      ],
      synthese: "Donc, l'économie fonctionne comme un circuit : les ménages offrent du travail et consomment, les entreprises produisent et vendent, les administrations rendent des services publics et redistribuent. La société, elle, fonctionne par des règles, des valeurs et des institutions ; les organisations, par un objectif, des rôles et des procédures. Ces trois niveaux sont liés : ce qui se passe dans l'un retentit sur les autres.",
      motsCles: ["ménages", "entreprises", "administrations", "circuit économique", "services publics", "règles", "institutions"],
      image: { file: "u2_circuit.png", legende: "Figure 5 — Le circuit économique : ménages, entreprises et administrations." },
      contenu: [
        {
          sousTitre: "1. Les acteurs de l'économie",
          texte: "L'économie met en relation des acteurs qui jouent des rôles différents. Les comprendre permet de suivre les flux : qui produit, qui paie, qui reçoit.",
          liste: [
            "Les ménages : l'ensemble des personnes qui vivent sous le même toit et partagent leurs ressources. Ils offrent leur travail et consomment.",
            "Les entreprises : elles combinent du travail et du capital pour produire des biens et des services destinés à la vente.",
            "Les administrations : l'État, les collectivités et les services publics, qui produisent des services non marchands et redistribuent.",
            "L'extérieur : les échanges avec les autres pays, par les exportations et les importations.",
          ],
        },
        {
          sousTitre: "2. Le circuit économique",
          texte: "Le circuit économique montre que les acteurs sont interdépendants. Chaque dépense de l'un est un revenu pour l'autre.",
          liste: [
            "Les ménages fournissent du travail aux entreprises et aux administrations.",
            "Celles-ci leur versent des revenus : salaires, traitements, revenus d'activité.",
            "Les ménages utilisent ces revenus pour consommer des biens et des services.",
            "Les entreprises vendent leur production, ce qui leur permet de payer salaires et fournisseurs et d'investir.",
            "Les administrations prélèvent des impôts et financent l'école, la santé, la sécurité, les routes et les aides sociales.",
          ],
        },
        {
          sousTitre: "3. Le fonctionnement de la société",
          texte: "Une société ne se réduit pas aux échanges marchands. Elle fonctionne grâce à des règles, des valeurs et des institutions qui organisent la vie collective.",
          liste: [
            "Les normes : ce qui est permis, interdit ou attendu dans un groupe.",
            "Les valeurs : ce qu'une société juge important, comme la solidarité familiale ou le respect des aînés.",
            "Les institutions : la famille, l'école, la commune, la justice, les organisations religieuses.",
            "La socialisation : l'apprentissage, tout au long de la vie, des manières d'agir et de penser du groupe.",
          ],
        },
        {
          sousTitre: "4. Le fonctionnement d'une organisation",
          texte: "Toute organisation, qu'elle vende ou non sa production, fonctionne selon la même logique générale : un objectif, des moyens, des règles et une coordination.",
          liste: [
            "Un objectif : produire et vendre, rendre un service public, venir en aide à un groupe.",
            "Des moyens : des personnes, des locaux, des équipements, de l'argent.",
            "Des rôles : chacun sait ce qu'il doit faire et de qui il dépend.",
            "Des règles : horaires, procédures, hiérarchie, contrôle.",
            "Une coordination : réunions, planning, documents de suivi.",
          ],
        },
        {
          sousTitre: "5. Des niveaux liés entre eux",
          texte: "Économie, société et organisations ne fonctionnent pas séparément. Une décision prise dans une entreprise a des effets sur les ménages et sur le territoire ; une règle de droit modifie le comportement des organisations ; une évolution des valeurs change la consommation.",
          liste: [
            "Une entreprise qui ferme : pertes d'emplois et de revenus pour les familles (économique et social).",
            "Une route réparée : les produits agricoles arrivent au marché avant d'être abîmés (économique).",
            "Une règle sur le travail des enfants : elle change les pratiques familiales et scolaires (juridique et social).",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Les ménages…", opts: ["offrent leur travail et consomment", "ne participent pas à l'économie", "fabriquent uniquement des lois"], ok: 0, expl: "Ils fournissent du travail et utilisent leurs revenus pour consommer." },
          { q: "Les administrations financent les services publics grâce à…", opts: ["aux impôts", "aux bénéfices des ménages", "aux exportations uniquement"], ok: 0, expl: "L'impôt finance l'école, la santé, la sécurité et les infrastructures." },
          { q: "Une société tient ensemble par…", opts: ["des règles, des valeurs et des institutions", "le hasard", "la seule force"], ok: 0, expl: "Normes, valeurs et institutions organisent la vie collective." },
          { q: "Le salaire versé à un employé est…", opts: ["une dépense pour l'entreprise et un revenu pour le ménage", "une perte pour les deux", "un impôt"], ok: 0, expl: "C'est le principe du circuit : la dépense de l'un est le revenu de l'autre." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["ménages", "entreprises", "administrations", "impôts", "revenus"], items: [
          { phrase: "Les _________ emploient du travail et produisent des biens et des services.", mot: "entreprises" },
          { phrase: "Les _________ offrent leur travail et consomment.", mot: "ménages" },
          { phrase: "Les services publics sont financés par les _________.", mot: "impôts" },
          { phrase: "Les salaires versés deviennent des _________ pour les familles des travailleurs.", mot: "revenus" },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite trois acteurs du circuit économique.", r: "Les trois acteurs du circuit économique sont les ménages, les entreprises et les administrations." },
          { q: "Explique le principe du circuit économique en une phrase.", r: "Chaque dépense de l'un devient un revenu pour l'autre : les acteurs sont interdépendants." },
          { q: "Qu'est-ce qui fait tenir une société ensemble ?", r: "Une société tient ensemble par des règles partagées, des valeurs communes et des institutions comme la famille et l'école." },
          { q: "Donne un exemple montrant qu'une décision économique a un effet social.", r: "Une entreprise qui ferme prive des familles de revenus : la décision est économique, la conséquence est sociale." },
        ]},
        { type: "appariement", consigne: "Relie chaque acteur à son rôle principal.", pointsPar: 1, items: [
          { g: ["Ménages", "Entreprises", "Administrations", "École"], d: ["Produire des biens et des services à vendre", "Rendre un service public financé par l'impôt", "Institution qui assure la socialisation", "Offrir du travail et consommer"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
    },
  ],
};

module.exports = U;
