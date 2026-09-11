// ============================================================
// Unité IV — Organisations (PE T12 série OSE — 20 heures)
// RAS 1 : Déterminer les sources de pouvoir et les styles de direction dans une organisation
// RAS 2 : Evaluer des méthodes pour définir une stratégie dans une organisation
// Découpage : 9 séances de cours + 1 révision + 1 sujet d'examen
// Valeurs : Responsabilité, estime de soi et confiance en soi
// ============================================================

const U = {
  num: "IV",
  titre: "Organisations",
  ras: "Déterminer les sources de pouvoir et les styles de direction dans une organisation · Evaluer des méthodes pour définir une stratégie dans une organisation",
  valeurs: "Responsabilité, estime de soi et confiance en soi",
  duree: "20 heures",
  themes: [
    "L'organisation : définition et diversité",
    "Les sources de pouvoir dans l'entreprise privée",
    "Les sources de pouvoir dans les organisations publiques et les associations",
    "Les styles de direction",
    "Les facteurs qui influencent le style de direction",
    "L'identité de l'organisation et le diagnostic stratégique",
    "Le diagnostic stratégique : la matrice SWOT (FFOM)",
    "La formulation des objectifs stratégiques",
    "La démarche stratégique et sa mise en œuvre",
  ],
  topics: [
    // ---------------------------------------------------------
    // SÉANCE 51 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "L'organisation : définition et diversité",
      theme: "Organisations",
      ras: "Déterminer les sources de pouvoir et les styles de direction dans une organisation",
      valeurs: "Responsabilité, estime de soi et confiance en soi",
      objectif: "définir une organisation et distinguer ses grandes formes",
      supportMeta: "Documents, schémas, cahier",
      revision: [
        ["Qu'est-ce qu'une entreprise ?", "Une unité de production qui combine des facteurs pour offrir des biens ou des services destinés à la vente."],
        ["Qu'est-ce qu'un groupe social ?", "Un ensemble de personnes qui partagent des caractéristiques et entretiennent des relations durables."],
      ],
      mise: [
        "Une menuiserie de quartier, la commune et une association de parents d'élèves ont-elles quelque chose en commun ?",
        "Oui : ce sont trois organisations — des groupes structurés qui poursuivent un but avec des moyens propres.",
      ],
      observation: "la planche présentant les trois grandes formes d'organisation",
      observationSupport: "Illustration des trois formes d'organisation et documents d'accompagnement",
      technAna: "Observation dirigée et lecture de documents",
      qa: [
        ["Qu'est-ce qu'une organisation ?", "Un groupe structuré de personnes qui poursuit un but commun, en répartissant les tâches et en mobilisant des ressources."],
        ["Quels sont les traits communs à toute organisation ?", "Un but, des membres, une répartition des tâches, des règles de fonctionnement et des ressources."],
        ["Qu'est-ce qu'une entreprise privée ?", "Une organisation qui produit des biens ou des services pour les vendre, et dont le capital appartient à des personnes privées."],
        ["Qu'est-ce qu'une organisation publique ?", "Une structure créée par la puissance publique pour rendre un service à la population : commune, établissement scolaire, hôpital public."],
        ["Qu'est-ce qu'une association ?", "Un groupement de personnes qui mettent leurs moyens en commun pour un but autre que le profit."],
        ["Quelle différence entre but lucratif et but non lucratif ?", "Une organisation lucrative recherche un bénéfice à partager ; une organisation non lucrative réinvestit ses ressources dans son objet social."],
        ["Comment les ressources diffèrent-elles ?", "L'entreprise vit de ses ventes, l'organisation publique du budget et de la fiscalité, l'association des cotisations, des dons et des subventions."],
        ["Pourquoi la finalité change-t-elle tout ?", "Parce qu'elle détermine à qui l'organisation rend des comptes, et comment elle mesure sa réussite."],
      ],
      synthese: "Donc, une organisation est un groupe structuré qui poursuit un but avec des moyens propres. Entreprise privée, organisation publique et association s'en distinguent par leur finalité — profit, service public ou utilité sociale — et par l'origine de leurs ressources.",
      motsCles: ["organisation", "entreprise privée", "organisation publique", "association", "finalité", "but lucratif", "ressources", "structuration"],
      image: { file: "t12_u4_diversite_organisations.jpg", legende: "Figure 45 — Les trois grandes formes d'organisation." },
      contenu: [
        {
          sousTitre: "1. Qu'est-ce qu'une organisation ?",
          texte: "Une organisation est plus qu'un simple rassemblement : elle structure l'action collective.",
          liste: [
            "Un but commun, formulé ou implicite.",
            "Des membres qui acceptent des règles de fonctionnement.",
            "Une répartition des tâches : chacun sait ce qu'il a à faire.",
            "Des ressources mobilisées : personnes, locaux, matériel, argent.",
          ],
        },
        {
          sousTitre: "2. L'entreprise privée",
          texte: "Elle produit pour vendre et assume le risque financier de son activité.",
          liste: [
            "Le capital appartient à une personne seule ou à plusieurs associés.",
            "Le but est la réalisation d'un bénéfice.",
            "Elle vit des ventes réalisées sur son marché.",
            "Sa réussite se mesure à sa rentabilité et à sa pérennité.",
          ],
        },
        {
          sousTitre: "3. L'organisation publique",
          texte: "Elle agit au nom de la collectivité et rend un service à la population.",
          liste: [
            "Créée par une décision publique, elle agit dans un cadre légal.",
            "Son but est le service rendu, non le profit.",
            "Ses ressources viennent du budget public et de la fiscalité.",
            "Sa réussite se mesure à la qualité du service et au respect des règles.",
          ],
        },
        {
          sousTitre: "4. L'association",
          texte: "Elle naît de l'engagement de personnes réunies autour d'une cause.",
          liste: [
            "But non lucratif : les ressources servent l'objet social.",
            "Ressources : cotisations, dons, subventions, bénévolat.",
            "Fonctionnement démocratique : une assemblée désigne les responsables.",
            "Sa réussite se mesure à son utilité sociale.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une organisation se définit par…", opts: ["un but, des membres, des tâches réparties", "un local et un téléphone", "unEffectif supérieur à dix personnes"], ok: 0, expl: "Elle structure l'action collective." },
          { q: "Une entreprise privée a pour but…", opts: ["la réalisation d'un bénéfice", "le service public", "la charité"], ok: 0, expl: "Elle produit pour vendre." },
          { q: "Le budget public et la fiscalité financent surtout…", opts: ["les organisations publiques", "les associations", "les entreprises familiales"], ok: 0, expl: "C'est la contrepartie du service rendu à tous." },
          { q: "Une association est dite non lucrative car…", opts: ["elle ne partage pas de bénéfice", "elle ne vend jamais rien", "elle n'a pas de budget"], ok: 0, expl: "Ses ressources servent son objet social." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Toute organisation poursuit un but commun.", rep: true, expl: "C'est ce qui la distingue d'une simple réunion de personnes." },
          { txt: "Une organisation publique recherche d'abord un bénéfice.", rep: false, expl: "Elle rend un service à la population." },
          { txt: "Une association peut recevoir des subventions.", rep: true, expl: "Les dons, cotisations et subventions la financent." },
          { txt: "Entreprise, organisation publique et association ont les mêmes ressources.", rep: false, expl: "Ventes, fiscalité et dons ne se confondent pas." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis une organisation.", r: "C'est un groupe structuré de personnes qui poursuit un but commun, en répartissant les tâches et en mobilisant des ressources." },
          { q: "Cite trois traits communs à toute organisation.", r: "Un but commun, des membres soumis à des règles, une répartition des tâches et des ressources mobilisées." },
          { q: "Quelle différence de finalité entre entreprise privée et organisation publique ?", r: "L'entreprise recherche un bénéfice en vendant sa production ; l'organisation publique rend un service à la population dans un cadre légal." },
          { q: "Comment une association finance-t-elle son action ?", r: "Par les cotisations de ses membres, les dons, les subventions publiques et le travail bénévole." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Une organisation qui vend sa production pour réaliser un bénéfice est une", suite: "entreprise" },
          { debut: "Une organisation créée par une décision publique est une organisation", suite: "publique" },
          { debut: "Une organisation qui ne partage pas de bénéfice est dite non", suite: "lucrative" },
          { debut: "Les cotisations, dons et subventions financent surtout l'", suite: "association" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 52 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les sources de pouvoir dans l'entreprise privée",
      theme: "Organisations",
      ras: "Déterminer les sources de pouvoir et les styles de direction dans une organisation",
      valeurs: "Responsabilité, estime de soi et confiance en soi",
      objectif: "identifier les sources du pouvoir de décision dans une entreprise",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Qu'est-ce qu'une organisation ?", "Un groupe structuré poursuivant un but commun, avec des tâches réparties et des ressources."],
        ["Qu'est-ce qu'une entreprise privée ?", "Une organisation qui produit pour vendre et dont le capital appartient à des personnes privées."],
      ],
      mise: [
        "Qui décide vraiment dans une entreprise : le propriétaire, le directeur ou le technicien qui maîtrise la machine ?",
        "Les trois, chacun pour des raisons différentes : la propriété, la position hiérarchique et la compétence sont trois sources de pouvoir distinctes.",
      ],
      observation: "le schéma des sources de pouvoir",
      observationSupport: "Schéma des sources de pouvoir dans l'entreprise affiché ou distribué",
      technAna: "Lecture de schéma et étude de documents",
      qa: [
        ["Qu'est-ce que le pouvoir dans une organisation ?", "La capacité d'une personne ou d'un groupe d'influencer une décision et de la faire appliquer."],
        ["Quelle est la première source de pouvoir ?", "La propriété du capital : les associés ou actionnaires désignent les dirigeants et approuvent les grandes orientations."],
        ["Quelle est la deuxième source ?", "La compétence : celui qui maîtrise un savoir rare pèse sur les décisions de son domaine."],
        ["Quelle est la troisième source ?", "La position hiérarchique : le dirigeant décide en vertu de la place qu'il occupe dans l'organigramme."],
        ["Quelle différence entre pouvoir et autorité ?", "L'autorité est le pouvoir reconnu comme légitime : on obéit parce que la fonction le justifie."],
        ["Qu'est-ce que le pouvoir d'expertise ?", "Le pouvoir que donne la maîtrise d'un savoir technique, indépendamment de tout grade."],
        ["Que change la taille de l'entreprise ?", "Dans une entreprise individuelle, propriété et direction se confondent ; dans une société, elles se séparent."],
        ["Le pouvoir est-il concentré au sommet ?", "Il l'est formellement, mais la compétence et l'information en distribuent une part réelle à plusieurs niveaux."],
      ],
      synthese: "Donc, dans l'entreprise privée, le pouvoir de décision a trois sources : la propriété du capital, la compétence et la position hiérarchique. La propriété et la direction se confondent dans une petite structure et se séparent dans une société : le pouvoir réel ne se réduit jamais à l'organigramme.",
      motsCles: ["pouvoir", "autorité", "propriété du capital", "actionnaires", "compétence", "pouvoir d'expertise", "hiérarchie", "organigramme"],
      image: { file: "t12_u4_pouvoir_entreprise.png", legende: "Figure 46 — Les sources de pouvoir dans l'entreprise privée." },
      contenu: [
        {
          sousTitre: "1. La propriété du capital",
          texte: "Celui qui détient le capital détient, en droit, le dernier mot.",
          liste: [
            "Les associés ou actionnaires désignent les dirigeants.",
            "Ils approuvent les comptes et les grandes orientations.",
            "Dans l'entreprise individuelle, le propriétaire décide seul.",
          ],
        },
        {
          sousTitre: "2. La compétence",
          texte: "Un savoir rare donne une influence réelle, sans grade ni titre.",
          liste: [
            "Le technicien qui maîtrise la machine est écouté sur son domaine.",
            "Le commercial qui détient la clientèle pèse sur les choix de gamme.",
            "Ce pouvoir d'expertise s'impose même sans position hiérarchique.",
          ],
        },
        {
          sousTitre: "3. La position hiérarchique",
          texte: "L'organigramme attribue un pouvoir formel lié à la fonction.",
          liste: [
            "Le dirigeant décide en vertu de sa place.",
            "Chaque échelon reçoit une part de responsabilité et d'autorité.",
            "Plus la structure est grande, plus les délégations sont formalisées.",
          ],
        },
        {
          sousTitre: "4. Pouvoir et autorité",
          texte: "Décider ne suffit pas : encore faut-il être reconnu.",
          liste: [
            "L'autorité est le pouvoir accepté comme légitime.",
            "Elle naît de la fonction, mais se consolide par la compétence et l'exemple.",
            "Un pouvoir sans autorité ne tient que par la contrainte et s'use vite.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La propriété du capital donne le pouvoir de…", opts: ["désigner les dirigeants", "réparer les machines", "fixer les prix du marché"], ok: 0, expl: "Le détenteur du capital a le dernier mot en droit." },
          { q: "Le pouvoir d'expertise vient…", opts: ["de la maîtrise d'un savoir rare", "de l'ancienneté seule", "du nombre de subordonnés"], ok: 0, expl: "Il ne dépend pas du grade." },
          { q: "L'autorité est…", opts: ["un pouvoir reconnu comme légitime", "une sanction", "un avantage en nature"], ok: 0, expl: "On obéit parce que la fonction le justifie." },
          { q: "Dans une entreprise individuelle…", opts: ["propriété et direction se confondent", "les actionnaires votent", "l'État décide"], ok: 0, expl: "Le propriétaire est aussi le dirigeant." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "L'organigramme épuise à lui seul la question du pouvoir.", rep: false, expl: "La compétence et l'information en distribuent une part réelle." },
          { txt: "Un salarié sans grade peut exercer une influence réelle.", rep: true, expl: "C'est le pouvoir d'expertise." },
          { txt: "Dans une société, propriété et direction peuvent être séparées.", rep: true, expl: "Les actionnaires délèguent la gestion à des dirigeants." },
          { txt: "Pouvoir et autorité désignent exactement la même chose.", rep: false, expl: "L'autorité est le pouvoir reconnu comme légitime." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite les trois sources de pouvoir dans l'entreprise privée.", r: "La propriété du capital, la compétence et la position hiérarchique." },
          { q: "Qu'est-ce que le pouvoir d'expertise ?", r: "C'est le pouvoir que donne la maîtrise d'un savoir rare, indépendamment de tout grade hiérarchique." },
          { q: "Quelle différence entre pouvoir et autorité ?", r: "Le pouvoir est la capacité d'influencer une décision ; l'autorité est ce même pouvoir lorsqu'il est reconnu comme légitime." },
          { q: "Que change le passage de l'entreprise individuelle à la société ?", r: "La propriété et la direction se séparent : les actionnaires délèguent la gestion à des dirigeants." },
        ]},
        { type: "appariement", consigne: "Relie chaque situation à la source de pouvoir correspondante.", pointsPar: 1, items: [
          { g: ["L'assemblée des actionnaires élit le conseil", "Le technicien règle la machine que nul ne maîtrise", "Le directeur signe les contrats", "Le commercial détient les clients essentiels", "Le fondateur-dirigeant de sa propre boutique"], d: ["Compétence", "Propriété du capital", "Position hiérarchique", "Compétence", "Propriété du capital"], pairs: [[0, 1], [1, 0], [2, 2], [3, 0], [4, 1]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 53 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les sources de pouvoir dans les organisations publiques et les associations",
      theme: "Organisations",
      ras: "Déterminer les sources de pouvoir et les styles de direction dans une organisation",
      valeurs: "Responsabilité, estime de soi et confiance en soi",
      objectif: "comparer les sources de pouvoir selon le type d'organisation",
      supportMeta: "Documents, schémas, cahier",
      revision: [
        ["Cite les trois sources de pouvoir dans l'entreprise privée.", "La propriété du capital, la compétence et la position hiérarchique."],
        ["Qu'est-ce que le pouvoir d'expertise ?", "Le pouvoir tiré de la maîtrise d'un savoir rare, sans lien avec le grade."],
      ],
      mise: [
        "Dans une commune, qui décide : le maire élu, le secrétaire général qui connaît les dossiers, ou le service technique ?",
        "Chacun à sa manière : l'élection donne la légitimité, la maîtrise administrative et technique donne l'influence réelle.",
      ],
      observation: "la scène de réunion d'une collectivité locale",
      observationSupport: "Illustration de réunion locale et documents d'accompagnement",
      technAna: "Observation dirigée et débat",
      qa: [
        ["D'où vient le pouvoir dans une organisation publique ?", "De l'élection ou de la nomination : la fonction confère une compétence définie par la loi ou le règlement."],
        ["Qu'est-ce que la légitimité électorale ?", "Le pouvoir reconnu parce qu'il vient du suffrage : le responsable élu agit au nom de la population."],
        ["Quel rôle joue l'encadrement administratif ?", "Les agents maîtrisent les dossiers et la procédure : ils préparent et instruisent les décisions."],
        ["Qu'est-ce que le contrôle de légalité ?", "La vérification qu'une décision publique respecte les textes en vigueur."],
        ["D'où vient le pouvoir dans une association ?", "De l'assemblée générale : les membres élisent les responsables et approuvent les orientations."],
        ["Quel rôle joue le bénévolat ?", "Il donne un pouvoir d'action sans lien hiérarchique : l'engagement personnel fait l'autorité."],
        ["Quelles différences avec l'entreprise ?", "Le pouvoir y est personnel et modulable ; ici il est encadré par des textes et contrôlé par les membres ou les électeurs."],
        ["Pourquoi ces pouvoirs sont-ils limités ?", "Parce qu'ils sont définis par un mandat, une durée et des règles que le titulaire ne peut pas modifier seul."],
      ],
      synthese: "Donc, le pouvoir change de nature selon l'organisation : l'élection ou la nomination le fonde dans les organisations publiques, l'assemblée des membres dans les associations, la propriété dans l'entreprise privée. Dans tous les cas, la maîtrise technique des dossiers donne une influence réelle à ceux qui préparent les décisions.",
      motsCles: ["légitimité électorale", "mandat", "contrôle de légalité", "assemblée générale", "bénévolat", "élection", "nomination", "encadrement"],
      image: { file: "t12_u4_pouvoir_public.jpg", legende: "Figure 47 — Le pouvoir dans la collectivité locale." },
      contenu: [
        {
          sousTitre: "1. Le pouvoir dans l'organisation publique",
          texte: "Il ne vient ni de la propriété ni du profit, mais d'une fonction conférée.",
          liste: [
            "L'élection donne la légitimité : le responsable agit au nom de la population.",
            "La nomination confie une fonction à un agent selon des règles statutaires.",
            "La compétence est définie par les textes : chacun décide dans son domaine.",
          ],
        },
        {
          sousTitre: "2. La part réelle de l'administration",
          texte: "Ceux qui instruisent les dossiers orientent les décisions.",
          liste: [
            "Les agents maîtrisent la procédure et les informations.",
            "Ils préparent les projets de décision soumis au responsable élu.",
            "Le contrôle de légalité vérifie que la décision respecte les textes.",
          ],
        },
        {
          sousTitre: "3. Le pouvoir dans l'association",
          texte: "Il appartient aux membres, qui délèguent et contrôlent.",
          liste: [
            "L'assemblée générale élit les responsables et approuve les comptes.",
            "Le conseil met en œuvre les orientations votées.",
            "Le bénévolat donne une autorité fondée sur l'engagement, non sur le grade.",
          ],
        },
        {
          sousTitre: "4. Comparer pour comprendre",
          texte: "Mettre les trois formes en regard éclaire la nature du pouvoir.",
          liste: [
            "Entreprise privée : propriété du capital, délégation souple, contrôle par les résultats.",
            "Organisation publique : mandat et textes, contrôle de légalité, reddition de comptes aux électeurs.",
            "Association : membres souverains, mandats renouvelés, contrôle par l'assemblée.",
            "Partout, la compétence technique reste une source d'influence réelle.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Dans une organisation publique, le pouvoir vient de…", opts: ["l'élection ou la nomination", "la propriété du capital", "la vente de services"], ok: 0, expl: "La fonction est conférée selon des règles publiques." },
          { q: "Le contrôle de légalité vérifie…", opts: ["le respect des textes par la décision", "la rentabilité de l'organisme", "le nombre d'agents"], ok: 0, expl: "Une décision publique doit être conforme." },
          { q: "Dans une association, le pouvoir suprême appartient à…", opts: ["l'assemblée générale", "le directeur salarié", "au principal donateur"], ok: 0, expl: "Les membres élisent et approuvent les comptes." },
          { q: "Une source d'influence commune aux trois formes est…", opts: ["la compétence technique", "le capital détenu", "le mandat électif"], ok: 0, expl: "Ceux qui maîtrisent les dossiers pèsent partout." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Un responsable élu peut modifier seul les règles de sa fonction.", rep: false, expl: "Son mandat est défini par des textes qu'il ne maîtrise pas seul." },
          { txt: "Les agents publics préparent souvent les décisions soumises aux élus.", rep: true, expl: "Ils instruisent les dossiers." },
          { txt: "Dans une association, les membres approuvent les comptes en assemblée.", rep: true, expl: "C'est le principe du fonctionnement associatif." },
          { txt: "Le bénévolat ne donne aucune influence dans une association.", rep: false, expl: "L'engagement personnel fonde une autorité réelle." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "D'où vient le pouvoir dans une organisation publique ?", r: "De l'élection ou de la nomination : la fonction confère une compétence définie par les textes." },
          { q: "Qu'est-ce que le contrôle de légalité ?", r: "C'est la vérification qu'une décision publique respecte les textes en vigueur." },
          { q: "Quel est le rôle de l'assemblée générale dans une association ?", r: "Elle élit les responsables, approuve les comptes et fixe les grandes orientations." },
          { q: "Quelle influence reste commune aux trois types d'organisation ?", r: "La compétence technique : ceux qui maîtrisent les dossiers pèsent réellement sur les décisions partout." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Le pouvoir reconnu parce qu'il vient du suffrage est la légitimité", suite: "électorale" },
          { debut: "La vérification de la conformité d'une décision aux textes est le contrôle de", suite: "légalité" },
          { debut: "L'instance souveraine d'une association est l'assemblée", suite: "générale" },
          { debut: "L'engagement personnel non rémunéré dans une association est le", suite: "bénévolat" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 54 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les styles de direction",
      theme: "Organisations",
      ras: "Déterminer les sources de pouvoir et les styles de direction dans une organisation",
      valeurs: "Responsabilité, estime de soi et confiance en soi",
      objectif: "différencier les principaux styles de direction",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["D'où vient le pouvoir dans une organisation publique ?", "De l'élection ou de la nomination, qui confèrent une compétence définie par les textes."],
        ["Qu'est-ce que le pouvoir d'expertise ?", "Le pouvoir tiré de la maîtrise d'un savoir rare, sans lien avec le grade."],
      ],
      mise: [
        "Deux responsables font le même travail de façon très différente : l'un ordonne, l'autre consulte. Lequel a raison ?",
        "Ni l'un ni l'autre en soi : l'efficacité du style dépend de la situation, de l'équipe et de l'urgence.",
      ],
      observation: "le schéma des styles de direction",
      observationSupport: "Schéma des styles de direction affiché ou distribué",
      technAna: "Lecture de schéma et débat dirigé",
      qa: [
        ["Qu'est-ce qu'un style de direction ?", "La manière habituelle dont un responsable prend ses décisions et conduit son équipe."],
        ["Qu'est-ce que le style directif ?", "Le responsable décide seul et donne des ordres précis, sans consulter."],
        ["Qu'est-ce que le style persuasif ?", "Le responsable décide, puis explique sa décision pour obtenir l'adhésion."],
        ["Qu'est-ce que le style participatif ?", "Le responsable consulte l'équipe avant de décider : les idées de chacun sont discutées."],
        ["Qu'est-ce que le style délégatif ?", "Le responsable fixe l'objectif et laisse à l'équipe le choix des moyens."],
        ["Quels sont les avantages du style directif ?", "La rapidité et la clarté : décisif en situation d'urgence ou de crise."],
        ["Quels sont les avantages du style participatif ?", "L'adhésion, la qualité des décisions et la motivation de l'équipe."],
        ["Que risque le style délégatif ?", "La perte de repères si l'équipe manque d'expérience, et l'inégalité de suivi."],
      ],
      synthese: "Donc, on distingue quatre styles de direction : directif, persuasif, participatif et délégatif, disposés sur un continuum qui va du chef qui décide seul à celui qui délègue. Aucun n'est supérieur aux autres en toutes circonstances : chacun répond à des situations, des équipes et des degrés d'urgence différents.",
      motsCles: ["style de direction", "style directif", "style persuasif", "style participatif", "style délégatif", "décision", "délégation", "adhésion"],
      image: { file: "t12_u4_styles_direction.png", legende: "Figure 48 — Les principaux styles de direction." },
      contenu: [
        {
          sousTitre: "1. Le style directif",
          texte: "Le responsable décide seul et fait exécuter.",
          liste: [
            "Ordres précis, contrôle étroit, peu de concertation.",
            "Avantage : rapidité et clarté des consignes.",
            "Limite : démotivation et remontée d'information insuffisante.",
          ],
        },
        {
          sousTitre: "2. Le style persuasif",
          texte: "Le responsable décide, puis explique pour convaincre.",
          liste: [
            "La décision reste la sienne, mais il la justifie.",
            "Avantage : adhésion plus forte qu'avec un ordre sec.",
            "Limite : l'équipe se sent peu associée à la réflexion.",
          ],
        },
        {
          sousTitre: "3. Le style participatif",
          texte: "Le responsable consulte avant de trancher.",
          liste: [
            "Réunions, débats, propositions de l'équipe.",
            "Avantage : décisions mieux informées et mieux acceptées.",
            "Limite : lenteur, et risque de confusion si l'arbitrage tarde.",
          ],
        },
        {
          sousTitre: "4. Le style délégatif",
          texte: "Le responsable fixe le but et laisse les moyens au choix de l'équipe.",
          liste: [
            "Autonomie large, contrôle a posteriori.",
            "Avantage : responsabilisation et montée en compétence.",
            "Limite : dérive possible si l'équipe manque d'expérience.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le style directif se caractérise par…", opts: ["une décision prise seule", "une décision votée", "l'absence de décision"], ok: 0, expl: "Le chef ordonne et contrôle." },
          { q: "Le style persuasif consiste à…", opts: ["décider puis expliquer", "laisser l'équipe décider", "consulter puis voter"], ok: 0, expl: "On cherche l'adhésion après la décision." },
          { q: "Dans le style participatif, la décision…", opts: ["est précédée d'une consultation", "est imposée", "est tirée au sort"], ok: 0, expl: "Les idées de l'équipe sont discutées." },
          { q: "Le style délégatif laisse à l'équipe…", opts: ["le choix des moyens", "la fixation des salaires", "la nomination du chef"], ok: 0, expl: "Le but est fixé, les moyens sont libres." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le style directif est particulièrement utile en situation d'urgence.", rep: true, expl: "La rapidité prime alors sur la concertation." },
          { txt: "Le style participatif donne toujours des décisions rapides.", rep: false, expl: "La consultation allonge le délai de décision." },
          { txt: "Le style délégatif responsabilise l'équipe.", rep: true, expl: "Elle choisit ses moyens d'action." },
          { txt: "Le style persuasif laisse l'équipe décider seule.", rep: false, expl: "La décision appartient au responsable." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis le style de direction et cite les quatre styles étudiés.", r: "C'est la manière habituelle dont un responsable décide et conduit son équipe : les styles directif, persuasif, participatif et délégatif." },
          { q: "Quelle différence entre style persuasif et style participatif ?", r: "Le persuasif décide puis explique ; le participatif consulte l'équipe avant de décider." },
          { q: "Dans quelle situation le style directif est-il le mieux adapté ?", r: "En situation d'urgence ou de crise, quand la rapidité et la clarté des consignes priment." },
          { q: "Quel est le principal avantage du style participatif ?", r: "Les décisions sont mieux informées et mieux acceptées, ce qui renforce la motivation de l'équipe." },
        ]},
        { type: "appariement", consigne: "Relie chaque situation au style de direction utilisé.", pointsPar: 1, items: [
          { g: ["Le chef ordonne seul face à un incident", "Le chef réunit l'équipe avant de trancher", "Le chef fixe l'objectif et laisse faire", "Le chef décide puis argumente", "Le chef consulte puis arbitre"], d: ["Directif", "Participatif", "Délégatif", "Persuasif", "Participatif"], pairs: [[0, 0], [1, 1], [2, 2], [3, 3], [4, 1]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 55 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les facteurs qui influencent le style de direction",
      theme: "Organisations",
      ras: "Déterminer les sources de pouvoir et les styles de direction dans une organisation",
      valeurs: "Responsabilité, estime de soi et confiance en soi",
      objectif: "dégager les facteurs qui orientent le choix d'un style et montrer qu'il n'existe pas de style idéal",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Cite les quatre styles de direction.", "Directif, persuasif, participatif et délégatif."],
        ["Quelle différence entre style persuasif et style participatif ?", "Le persuasif décide puis explique ; le participatif consulte avant de décider."],
      ],
      mise: [
        "Un responsable plutôt autoritaire peut-il devenir participatif ?",
        "Oui, si la situation change : l'arrivée d'une équipe qualifiée et d'un marché plus stable rend la concertation possible et souhaitable.",
      ],
      observation: "le schéma des facteurs influençant le style de direction",
      observationSupport: "Schéma des facteurs influençant le style de direction affiché ou distribué",
      technAna: "Lecture de schéma et débat dirigé",
      qa: [
        ["Quels facteurs liés au dirigeant agissent sur le style ?", "Sa personnalité, sa formation, son expérience, et la confiance qu'il accorde à l'équipe."],
        ["Quels facteurs liés à l'organisation interviennent ?", "Sa taille, son activité, son histoire, sa culture et le degré d'urgence du contexte."],
        ["Quels facteurs liés aux collaborateurs comptent ?", "Leur qualification, leur ancienneté, leur habitude de travailler ensemble et leur attente."],
        ["Pourquoi la taille change-t-elle le style ?", "Une grande structure multiplie les niveaux : la décision se formalise et se délègue par écrit."],
        ["Pourquoi l'activité importe-t-elle ?", "Les métiers à risque imposent des consignes strictes ; les métiers de conception gagnent à être consultés."],
        ["Que change l'urgence ?", "Une situation critique appelle des ordres clairs ; le temps manque pour consulter."],
        ["Pourquoi n'y a-t-il pas de style idéal ?", "Parce que le style efficace dépend d'une combinaison de facteurs qui varie selon les organisations et les moments."],
        ["Que doit faire un bon responsable ?", "Adapter son style : observer la situation, connaître son équipe et accepter de changer de manière de faire."],
      ],
      synthese: "Donc, le style de direction dépend de trois ensembles de facteurs : le dirigeant lui-même, l'organisation et les collaborateurs. Aucun style n'est supérieur en soi : le bon responsable est celui qui ajuste sa manière de décider à la situation, à son équipe et au degré d'urgence.",
      motsCles: ["facteurs", "personnalité du dirigeant", "taille de l'organisation", "culture", "urgence", "qualification", "adaptation", "style idéal"],
      image: { file: "t12_u4_facteurs_style.png", legende: "Figure 49 — Ce qui oriente le choix d'un style de direction." },
      contenu: [
        {
          sousTitre: "1. Les facteurs liés au dirigeant",
          texte: "Le responsable dirige avec ce qu'il est et ce qu'il sait.",
          liste: [
            "Sa personnalité : assurance, goût du dialogue, tolérance à l'erreur.",
            "Sa formation et son parcours professionnel.",
            "L'idée qu'il se fait de la motivation des personnes.",
            "La confiance qu'il accorde à son équipe.",
          ],
        },
        {
          sousTitre: "2. Les facteurs liés à l'organisation",
          texte: "Le contexte interne et externe pèse autant que la personne.",
          liste: [
            "La taille : une grande structure formalise et délègue par écrit.",
            "L'activité : la sécurité impose des procédures strictes.",
            "L'histoire et la culture : une habitude ancienne résiste au changement.",
            "L'urgence et la stabilité du contexte.",
          ],
        },
        {
          sousTitre: "3. Les facteurs liés aux collaborateurs",
          texte: "Le style s'ajuste aussi à ceux qui reçoivent les consignes.",
          liste: [
            "Leur niveau de qualification : des tâches complexes appellent la délégation.",
            "Leur ancienneté et leur habitude de travailler ensemble.",
            "Leur attente : certains veulent être guidés, d'autres décider.",
          ],
        },
        {
          sousTitre: "4. L'absence de style idéal",
          texte: "La conclusion s'impose dès lors que l'on croise ces facteurs.",
          liste: [
            "Le même style réussit ici et échoue ailleurs.",
            "Un responsable peut en changer au cours de sa carrière, ou dans la même journée.",
            "La compétence consiste à lire la situation et à adapter sa manière de décider.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Parmi les facteurs liés au dirigeant figure…", opts: ["sa confiance envers l'équipe", "le prix du marché", "la météo"], ok: 0, expl: "Elle conditionne la délégation." },
          { q: "Une grande organisation tend à…", opts: ["formaliser et déléguer par écrit", "tout décider oralement", "supprimer la hiérarchie"], ok: 0, expl: "La taille multiplie les niveaux de décision." },
          { q: "Une équipe très qualifiée appelle plutôt…", opts: ["la délégation", "le style directif", "l'absence de consignes"], ok: 0, expl: "Des tâches complexes demandent de l'autonomie." },
          { q: "En situation d'urgence, le style le plus adapté est…", opts: ["directif", "délégatif", "absent"], ok: 0, expl: "Il faut des ordres clairs et rapides." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Il existe un style de direction idéal valable partout.", rep: false, expl: "Le style efficace dépend d'une combinaison de facteurs variables." },
          { txt: "La culture de l'organisation influence la manière de diriger.", rep: true, expl: "Une habitude ancienne résiste au changement." },
          { txt: "Un responsable ne peut jamais modifier son style.", rep: false, expl: "L'adaptation est précisément la compétence attendue." },
          { txt: "L'attente des collaborateurs compte dans le choix du style.", rep: true, expl: "Certains veulent être guidés, d'autres décider." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite trois facteurs liés au dirigeant qui influencent son style.", r: "Sa personnalité, sa formation et son expérience, et la confiance qu'il accorde à son équipe." },
          { q: "Cite deux facteurs liés à l'organisation et explique leur effet.", r: "La taille, qui formalise et délègue la décision, et l'activité, qui impose des procédures strictes dans les métiers à risque." },
          { q: "Comment les collaborateurs influencent-ils le style ?", r: "Leur qualification, leur ancienneté et leur attente déterminent le degré d'autonomie qu'il est possible de leur laisser." },
          { q: "Pourquoi n'existe-t-il pas de style de direction idéal ?", r: "Parce que le style efficace dépend d'une combinaison de facteurs — dirigeant, organisation, collaborateurs, urgence — qui varie selon les situations." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "La manière habituelle dont un responsable décide est son style de", suite: "direction" },
          { debut: "Une structure de grande taille tend à formaliser la", suite: "décision" },
          { debut: "Une situation critique appelle un style", suite: "directif" },
          { debut: "Ajuster sa manière de décider à la situation est une", suite: "adaptation" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 56 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "L'identité de l'organisation et le diagnostic stratégique",
      theme: "Organisations",
      ras: "Evaluer des méthodes pour définir une stratégie dans une organisation",
      valeurs: "Responsabilité, estime de soi et confiance en soi",
      objectif: "situer l'identité de l'organisation au point de départ du diagnostic",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Pourquoi n'existe-t-il pas de style de direction idéal ?", "Parce que le style efficace dépend de facteurs qui varient selon les organisations et les moments."],
        ["Cite deux facteurs liés à l'organisation.", "La taille, qui formalise la décision, et l'activité, qui impose des procédures strictes dans les métiers à risque."],
      ],
      mise: [
        "Avant de décider où aller, que doit savoir une organisation ?",
        "Ce qu'elle est : sa mission, ses valeurs, son métier et ses ressources. Toute stratégie part de cette identité.",
      ],
      observation: "le schéma de l'identité de l'organisation",
      observationSupport: "Schéma de l'identité de l'organisation affiché ou distribué",
      technAna: "Lecture de schéma et étude de documents",
      qa: [
        ["Qu'est-ce que l'identité d'une organisation ?", "Ce qu'elle est : sa mission, ses valeurs, son métier et les ressources qu'elle mobilise."],
        ["Qu'est-ce que la mission ?", "L'énoncé de ce que l'organisation fait et de ceux à qui elle s'adresse."],
        ["Quel rôle jouent les valeurs ?", "Elles fixent les principes que l'organisation affirme et qu'elle s'engage à respecter dans son action."],
        ["Qu'entend-on par le métier de l'organisation ?", "Le savoir-faire précis qu'elle maîtrise et qui la distingue des autres."],
        ["Quelles ressources entrent dans l'identité ?", "Les ressources humaines, matérielles, financières et immatérielles."],
        ["Qu'est-ce que le diagnostic stratégique ?", "L'analyse de la situation de l'organisation qui précède toute décision stratégique."],
        ["Quelles sont les étapes du processus stratégique ?", "L'identité, le diagnostic interne et externe, les objectifs, le choix stratégique puis la mise en œuvre."],
        ["Pourquoi l'identité vient-elle en premier ?", "Parce qu'une organisation qui ne sait pas ce qu'elle est choisit mal ce qu'elle veut devenir."],
      ],
      synthese: "Donc, l'identité de l'organisation — mission, valeurs, métier et ressources — est le point de départ du processus stratégique. Le diagnostic qui suit ne prend de sens que rapporté à cette identité : c'est elle qui permet de juger si une opportunité est réellement faite pour l'organisation.",
      motsCles: ["identité", "mission", "valeurs", "métier", "ressources", "diagnostic stratégique", "processus stratégique", "analyse"],
      image: { file: "t12_u4_identite.png", legende: "Figure 50 — L'identité de l'organisation, point de départ du diagnostic." },
      contenu: [
        {
          sousTitre: "1. La mission",
          texte: "La mission dit ce que l'organisation fait et pour qui elle le fait.",
          liste: [
            "Elle délimite le domaine d'action.",
            "Elle distingue l'organisation de ses concurrents ou de ses voisins.",
            "Elle donne un repère aux membres comme aux partenaires.",
          ],
        },
        {
          sousTitre: "2. Les valeurs et le métier",
          texte: "Les principes affirmés et le savoir-faire maîtrisé complètent la mission.",
          liste: [
            "Valeurs : qualité du service, honnêteté, respect de l'environnement, solidarité.",
            "Métier : la compétence précise que l'organisation possède mieux que d'autres.",
            "Ensemble, ils orientent les choix quand plusieurs voies sont possibles.",
          ],
        },
        {
          sousTitre: "3. Les ressources",
          texte: "L'identité comprend aussi ce dont l'organisation dispose.",
          liste: [
            "Ressources humaines : effectifs, compétences, expérience.",
            "Ressources matérielles : locaux, équipements, réseaux.",
            "Ressources financières : fonds propres, capacité d'emprunt, subventions.",
            "Ressources immatérielles : savoir-faire, réputation, carnet d'adresses.",
          ],
        },
        {
          sousTitre: "4. Le processus stratégique",
          texte: "L'identité ouvre une suite d'étapes ordonnées.",
          liste: [
            "Étape 1 : préciser l'identité.",
            "Étape 2 : réaliser le diagnostic interne et externe.",
            "Étape 3 : formuler les objectifs stratégiques.",
            "Étape 4 : définir la stratégie à mettre en oeuvre.",
            "Étape 5 : suivre les résultats et corriger.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "L'identité d'une organisation comprend…", opts: ["mission, valeurs, métier et ressources", "le chiffre d'affaires du mois", "la liste des clients"], ok: 0, expl: "C'est ce qu'elle est, avant ce qu'elle fait." },
          { q: "La mission énonce…", opts: ["ce que l'organisation fait et pour qui", "le salaire du dirigeant", "le nombre d'employés"], ok: 0, expl: "Elle délimite le domaine d'action." },
          { q: "Une ressource immatérielle est…", opts: ["la réputation", "une machine", "un stock"], ok: 0, expl: "Elle n'a pas de support physique." },
          { q: "La première étape du processus stratégique est…", opts: ["préciser l'identité", "fixer les prix", "recruter"], ok: 0, expl: "On ne peut choisir sa route sans savoir d'où l'on part." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le diagnostic stratégique peut se faire sans connaître l'identité de l'organisation.", rep: false, expl: "L'identité donne le sens aux constats du diagnostic." },
          { txt: "Les valeurs aident à trancher entre plusieurs voies possibles.", rep: true, expl: "Elles fixent les principes de l'action." },
          { txt: "Le métier désigne le savoir-faire précis maîtrisé par l'organisation.", rep: true, expl: "Il la distingue des autres." },
          { txt: "Le suivi des résultats n'appartient pas au processus stratégique.", rep: false, expl: "Mesurer les écarts et corriger en est la dernière étape." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Qu'est-ce que l'identité d'une organisation ?", r: "C'est ce qu'elle est : sa mission, ses valeurs, son métier et les ressources qu'elle mobilise." },
          { q: "Cite les quatre catégories de ressources d'une organisation.", r: "Les ressources humaines, matérielles, financières et immatérielles." },
          { q: "Qu'est-ce que le diagnostic stratégique ?", r: "C'est l'analyse de la situation de l'organisation, interne et externe, qui précède toute décision stratégique." },
          { q: "Cite les cinq étapes du processus stratégique.", r: "Préciser l'identité, réaliser le diagnostic, formuler les objectifs, définir la stratégie, puis suivre et corriger." },
        ]},
        { type: "appariement", consigne: "Relie chaque élément à sa catégorie.", pointsPar: 1, items: [
          { g: ["Réputation de sérieux", "Savoir-faire en menuiserie", "Atelier équipé", "Trésorerie disponible", "Respect de la parole donnée"], d: ["Ressource financière", "Ressource matérielle", "Ressource immatérielle", "Valeur", "Métier"], pairs: [[0, 2], [1, 4], [2, 1], [3, 0], [4, 3]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 57 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le diagnostic stratégique : la matrice SWOT (FFOM)",
      theme: "Organisations",
      ras: "Evaluer des méthodes pour définir une stratégie dans une organisation",
      valeurs: "Responsabilité, estime de soi et confiance en soi",
      objectif: "réaliser un diagnostic interne et externe à l'aide de la matrice SWOT",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Qu'est-ce que le diagnostic stratégique ?", "L'analyse de la situation interne et externe de l'organisation avant toute décision."],
        ["Qu'est-ce que l'identité d'une organisation ?", "Sa mission, ses valeurs, son métier et ses ressources."],
      ],
      mise: [
        "Comment savoir, en une page, si une association peut ouvrir une deuxième antenne ?",
        "En dressant le tableau de ses forces et faiblesses face aux opportunités et menaces de son environnement : la matrice SWOT.",
      ],
      observation: "la matrice SWOT",
      observationSupport: "Matrice SWOT affichée ou distribuée",
      technAna: "Lecture de schéma et application dirigée",
      qa: [
        ["Que signifie SWOT ?", "Strengths, Weaknesses, Opportunities, Threats : forces, faiblesses, opportunités et menaces."],
        ["Que signifie FFOM ?", "Forces, Faiblesses, Opportunités, Menaces : la traduction française de la même matrice."],
        ["Que met-on dans les forces ?", "Ce que l'organisation maîtrise mieux que ses concurrents : compétences rares, matériel fiable, bonne réputation."],
        ["Que met-on dans les faiblesses ?", "Ce qui la handicape : équipement vétuste, personnel peu formé, coûts élevés, dépendance à un fournisseur."],
        ["Que met-on dans les opportunités ?", "Ce que l'environnement offre : marché en croissance, aide publique, partenariat possible, technologie disponible."],
        ["Que met-on dans les menaces ?", "Ce qui vient de l'extérieur et peut nuire : concurrence nouvelle, hausse des prix des intrants, réglementation plus stricte."],
        ["Pourquoi distinguer interne et externe ?", "Parce que l'organisation agit sur l'interne et subit l'externe : les réponses ne sont pas les mêmes."],
        ["Comment exploiter la matrice ?", "En croisant les cases : une force permet de saisir une opportunité ; une faiblesse exposée à une menace est urgente à corriger."],
      ],
      synthese: "Donc, la matrice SWOT (ou FFOM) croise deux axes : l'origine, interne ou externe, et le sens, favorable ou défavorable. Elle classe forces, faiblesses, opportunités et menaces. Son intérêt vient du croisement des cases : bâtir sur une force, saisir une opportunité, corriger une faiblesse, se prémunir d'une menace.",
      motsCles: ["SWOT", "FFOM", "forces", "faiblesses", "opportunités", "menaces", "diagnostic interne", "diagnostic externe"],
      image: { file: "t12_u4_swot.png", legende: "Figure 51 — Le diagnostic stratégique : la matrice SWOT (FFOM)." },
      contenu: [
        {
          sousTitre: "1. Les deux axes de la matrice",
          texte: "La matrice classe les constats selon deux dimensions.",
          liste: [
            "L'origine : interne, ce que l'organisation est ; externe, ce qui l'entoure.",
            "Le sens : favorable ou défavorable à l'organisation.",
            "Le croisement donne quatre cases.",
          ],
        },
        {
          sousTitre: "2. Le diagnostic interne : forces et faiblesses",
          texte: "Il porte sur ce que l'organisation maîtrise.",
          liste: [
            "Forces : compétences rares, équipe formée, matériel fiable, trésorerie saine, bonne réputation.",
            "Faiblesses : équipement vétuste, personnel peu formé, coûts élevés, dépendance à un fournisseur.",
            "Ces éléments sont modifiables par l'organisation.",
          ],
        },
        {
          sousTitre: "3. Le diagnostic externe : opportunités et menaces",
          texte: "Il porte sur ce qui vient de l'environnement.",
          liste: [
            "Opportunités : marché en croissance, besoin nouveau, aide publique, technologie disponible.",
            "Menaces : concurrence nouvelle, hausse du prix des intrants, réglementation plus stricte, changement de la demande.",
            "L'organisation ne les maîtrise pas : elle s'y adapte.",
          ],
        },
        {
          sousTitre: "4. Exploiter les croisements",
          texte: "La matrice ne vaut que par les décisions qu'elle prépare.",
          liste: [
            "Forces + opportunités : la voie la plus sûre, il faut l'exploiter.",
            "Faiblesses + menaces : la situation la plus dangereuse, il faut agir en urgence.",
            "Forces + menaces : utiliser un atout pour faire face à un risque.",
            "Faiblesses + opportunités : corriger le point faible pour saisir l'occasion.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "SWOT est l'acronyme de…", opts: ["Strengths, Weaknesses, Opportunities, Threats", "Sales, Work, Output, Time", "Staff, Wages, Orders, Tax"], ok: 0, expl: "Forces, faiblesses, opportunités, menaces." },
          { q: "Une compétence rare de l'équipe se classe dans…", opts: ["les forces", "les menaces", "les opportunités"], ok: 0, expl: "C'est un point fort interne." },
          { q: "Une nouvelle réglementation plus stricte est…", opts: ["une menace", "une force", "une faiblesse"], ok: 0, expl: "Elle vient de l'extérieur et peut nuire." },
          { q: "Une aide publique accordée à un secteur est…", opts: ["une opportunité", "une faiblesse", "une menace"], ok: 0, expl: "L'environnement offre une chance à saisir." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Les forces et les faiblesses relèvent du diagnostic interne.", rep: true, expl: "Elles décrivent l'organisation elle-même." },
          { txt: "Les opportunités et les menaces dépendent de l'organisation.", rep: false, expl: "Elles viennent de l'environnement : elle s'y adapte." },
          { txt: "Une force peut servir à saisir une opportunité.", rep: true, expl: "C'est le croisement le plus favorable." },
          { txt: "La case faiblesses-menaces est la moins urgente à traiter.", rep: false, expl: "C'est au contraire la plus dangereuse." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Que signifient SWOT et FFOM ?", r: "SWOT : Strengths, Weaknesses, Opportunities, Threats ; FFOM : Forces, Faiblesses, Opportunités, Menaces. Les deux désignent la même matrice." },
          { q: "Cite deux exemples de forces et deux exemples de faiblesses.", r: "Forces : une équipe formée et un matériel fiable. Faiblesses : un équipement vétuste et une dépendance à un fournisseur unique." },
          { q: "Cite deux exemples d'opportunités et deux exemples de menaces.", r: "Opportunités : un marché en croissance et une aide publique. Menaces : une concurrence nouvelle et la hausse du prix des intrants." },
          { q: "Comment exploite-t-on les croisements de la matrice ?", r: "Une force sert à saisir une opportunité ; une faiblesse exposée à une menace doit être corrigée en urgence." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Les forces et les faiblesses forment le diagnostic", suite: "interne" },
          { debut: "Les opportunités et les menaces forment le diagnostic", suite: "externe" },
          { debut: "Un marché en croissance est une", suite: "opportunité" },
          { debut: "Un savoir-faire rare détenu par l'équipe est une", suite: "force" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 58 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La formulation des objectifs stratégiques",
      theme: "Organisations",
      ras: "Evaluer des méthodes pour définir une stratégie dans une organisation",
      valeurs: "Responsabilité, estime de soi et confiance en soi",
      objectif: "formuler des objectifs adaptés à chaque type d'organisation",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Que contient la matrice SWOT ?", "Forces et faiblesses à l'interne, opportunités et menaces à l'externe."],
        ["Quel croisement est le plus favorable ?", "Celui des forces et des opportunités."],
      ],
      mise: [
        "Une entreprise vise 10 % de croissance, une commune veut scolariser tous les enfants du quartier, une association veut doubler ses bénéficiaires. Même démarche ?",
        "Oui, la démarche est la même, mais le contenu diffère : la finalité de l'organisation oriente ses objectifs.",
      ],
      observation: "le schéma des objectifs selon les organisations",
      observationSupport: "Schéma des objectifs stratégiques affiché ou distribué",
      technAna: "Lecture de schéma et étude de cas",
      qa: [
        ["Qu'est-ce qu'un objectif stratégique ?", "Un résultat à atteindre, choisi pour engager l'organisation sur plusieurs années."],
        ["Quelles qualités doit-il réunir ?", "Être clair, mesurable et atteignable : sinon il ne guide aucune décision."],
        ["Quels objectifs pour l'entreprise privée ?", "Rentabilité, part de marché, croissance du chiffre d'affaires, fidélisation de la clientèle."],
        ["Quelle particularité présente un groupe ?", "Les objectifs se fixent à deux niveaux : la maison mère définit l'orientation, les filiales déclinent leurs cibles."],
        ["Quels objectifs pour l'organisation publique ?", "Qualité du service rendu, respect des règles, équilibre budgétaire, couverture du territoire."],
        ["Quels objectifs pour l'association ?", "Utilité sociale : nombre de bénéficiaires, qualité de l'accompagnement, mobilisation de bénévoles."],
        ["Pourquoi la finalité change-t-elle les objectifs ?", "Parce qu'elle détermine le critère de réussite : profit, service public ou utilité sociale."],
        ["Comment rendre un objectif mesurable ?", "En lui associant un chiffre, une échéance et un moyen de vérification."],
      ],
      synthese: "Donc, un objectif stratégique est un résultat clair, mesurable et atteignable, fixé pour plusieurs années. Son contenu dépend de la finalité de l'organisation : rentabilité pour l'entreprise, service rendu pour l'organisation publique, utilité sociale pour l'association. Dans un groupe, la formulation se fait à deux niveaux.",
      motsCles: ["objectif stratégique", "mesurable", "rentabilité", "part de marché", "service public", "utilité sociale", "groupe", "maison mère"],
      image: { file: "t12_u4_objectifs.png", legende: "Figure 52 — La formulation des objectifs stratégiques." },
      contenu: [
        {
          sousTitre: "1. Ce qu'est un objectif stratégique",
          texte: "Il engage l'organisation sur la durée et oriente ses décisions.",
          liste: [
            "Clair : formulé sans ambiguïté.",
            "Mesurable : assorti d'un chiffre et d'une échéance.",
            "Atteignable : compatible avec les ressources disponibles.",
            "Cohérent avec l'identité de l'organisation.",
          ],
        },
        {
          sousTitre: "2. Les objectifs de l'entreprise privée",
          texte: "Ils traduisent la recherche d'un résultat économique durable.",
          liste: [
            "Rentabilité : dégager un bénéfice suffisant pour investir.",
            "Part de marché : gagner ou conserver des clients.",
            "Croissance du chiffre d'affaires et développement de la gamme.",
            "Cas du groupe : la maison mère fixe l'orientation, les filiales déclinent les cibles.",
          ],
        },
        {
          sousTitre: "3. Les objectifs de l'organisation publique",
          texte: "Ils traduisent la mission de service rendu à la population.",
          liste: [
            "Qualité et accessibilité du service.",
            "Respect des règles et des délais.",
            "Équilibre budgétaire et maîtrise de la dépense.",
            "Couverture du territoire et équité de traitement.",
          ],
        },
        {
          sousTitre: "4. Les objectifs de l'association",
          texte: "Ils traduisent la finalité sociale de l'organisation.",
          liste: [
            "Nombre et profil des bénéficiaires atteints.",
            "Qualité de l'accompagnement proposé.",
            "Mobilisation et fidélisation des bénévoles.",
            "Équilibre financier permettant de poursuivre l'action.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Un objectif stratégique doit être…", opts: ["clair, mesurable et atteignable", "vague et ambitieux", "imposé de l'extérieur"], ok: 0, expl: "Sinon il ne guide aucune décision." },
          { q: "Une entreprise retient plutôt comme objectif…", opts: ["une part de marché", "le nombre d'électeurs", "le nombre de bénévoles"], ok: 0, expl: "Elle vise un résultat économique." },
          { q: "Dans un groupe, les objectifs se fixent…", opts: ["à deux niveaux", "une seule fois pour toutes", "sans lien entre eux"], ok: 0, expl: "Maison mère puis filiales." },
          { q: "Une association mesure sa réussite à son…", opts: ["utilité sociale", "bénéfice distribué", "cours de Bourse"], ok: 0, expl: "Son but n'est pas lucratif." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Un objectif sans chiffre ni échéance reste vérifiable.", rep: false, expl: "Il faut un indicateur pour mesurer le résultat." },
          { txt: "Une organisation publique retient l'équilibre budgétaire parmi ses objectifs.", rep: true, expl: "Elle doit maîtriser la dépense publique." },
          { txt: "Une association et une entreprise ont exactement les mêmes objectifs.", rep: false, expl: "Leur finalité diffère : utilité sociale contre profit." },
          { txt: "Les filiales d'un groupe déclinent les objectifs fixés par la maison mère.", rep: true, expl: "Le pilotage se fait à deux niveaux." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Qu'est-ce qu'un objectif stratégique et quelles qualités doit-il réunir ?", r: "C'est un résultat à atteindre choisi pour engager l'organisation sur plusieurs années : il doit être clair, mesurable et atteignable." },
          { q: "Cite deux objectifs d'une entreprise privée.", r: "La rentabilité et la part de marché." },
          { q: "Quelle particularité présente la formulation des objectifs dans un groupe ?", r: "Elle se fait à deux niveaux : la maison mère définit l'orientation d'ensemble, les filiales déclinent leurs cibles propres." },
          { q: "Cite deux objectifs d'une organisation publique et deux d'une association.", r: "Organisation publique : la qualité du service et l'équilibre budgétaire. Association : le nombre de bénéficiaires et la mobilisation de bénévoles." },
        ]},
        { type: "appariement", consigne: "Relie chaque objectif à l'organisation correspondante.", pointsPar: 1, items: [
          { g: ["Atteindre 15 % de part de marché", "Scolariser tous les enfants du quartier", "Doubler le nombre de bénéficiaires", "Équilibrer le budget de la commune", "Former vingt bénévoles cette année"], d: ["Organisation publique", "Association", "Entreprise", "Organisation publique", "Association"], pairs: [[0, 2], [1, 0], [2, 1], [3, 3], [4, 4]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 59 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La démarche stratégique et sa mise en œuvre",
      theme: "Organisations",
      ras: "Evaluer des méthodes pour définir une stratégie dans une organisation",
      valeurs: "Responsabilité, estime de soi et confiance en soi",
      objectif: "définir la stratégie puis identifier les ressources de sa mise en œuvre",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Qu'est-ce qu'un objectif stratégique ?", "Un résultat clair, mesurable et atteignable, choisi pour engager l'organisation sur plusieurs années."],
        ["Quelle particularité présente un groupe ?", "Les objectifs se fixent à deux niveaux : maison mère et filiales."],
      ],
      mise: [
        "Une stratégie bien choisie peut échouer. Pourquoi ?",
        "Parce qu'elle n'a pas reçu les moyens de sa mise en œuvre : sans ressources affectées ni suivi, un plan reste un document.",
      ],
      observation: "le schéma de la démarche stratégique",
      observationSupport: "Schéma de la démarche stratégique affiché ou distribué",
      technAna: "Lecture de schéma et étude de cas",
      qa: [
        ["Qu'est-ce que la stratégie ?", "L'ensemble des choix par lesquels l'organisation atteint ses objectifs, compte tenu de ses ressources et de son environnement."],
        ["Quelles sont les étapes de la démarche ?", "Le diagnostic, la fixation des objectifs, le choix de la voie, l'affectation des moyens et le suivi."],
        ["Quelles grandes voies stratégiques existe-t-il ?", "La croissance, la spécialisation, la diversification et la recentrage sur le métier."],
        ["Quelles ressources la mise en œuvre mobilise-t-elle ?", "Ressources humaines, matérielles, financières et immatérielles."],
        ["Pourquoi le suivi est-il indispensable ?", "Parce qu'il mesure les écarts entre le prévu et le réalisé, et permet de corriger la trajectoire."],
        ["Que risque une stratégie sans moyens ?", "De rester une intention : l'écart entre l'objectif et les ressources est la première cause d'échec."],
        ["Comment répartit-on les responsabilités ?", "Chaque action est confiée à une personne identifiée, avec une échéance et un indicateur."],
        ["Qu'est-ce qu'un indicateur de suivi ?", "Une grandeur mesurée régulièrement qui renseigne sur l'avancement de l'action."],
      ],
      synthese: "Donc, la stratégie est un enchaînement cohérent : diagnostic, objectifs, choix de la voie, affectation des ressources et suivi. Elle n'existe vraiment qu'une fois mise en œuvre, c'est-à-dire dotée de moyens humains, matériels, financiers et immatériels proportionnés à l'ambition affichée.",
      motsCles: ["stratégie", "mise en œuvre", "voie stratégique", "croissance", "spécialisation", "diversification", "ressources", "indicateur de suivi"],
      image: { file: "t12_u4_demarche.png", legende: "Figure 53 — La démarche stratégique : de l'analyse à la mise en œuvre." },
      contenu: [
        {
          sousTitre: "1. Du diagnostic au choix de la voie",
          texte: "La stratégie traduit le diagnostic en décisions.",
          liste: [
            "Croissance : développer l'activité existante, gagner des parts de marché.",
            "Spécialisation : se concentrer sur le métier le mieux maîtrisé.",
            "Diversification : ouvrir une activité nouvelle pour réduire le risque.",
            "Recentrage : abandonner ce qui ne correspond plus à l'identité.",
          ],
        },
        {
          sousTitre: "2. Les ressources de la mise en œuvre",
          texte: "Chaque voie exige des moyens précis.",
          liste: [
            "Ressources humaines : effectifs, compétences, formation.",
            "Ressources matérielles : locaux, équipements, réseaux.",
            "Ressources financières : fonds propres, emprunt, subventions.",
            "Ressources immatérielles : savoir-faire, réputation, relations.",
          ],
        },
        {
          sousTitre: "3. Organiser l'action",
          texte: "La mise en œuvre se traduit en tâches identifiées.",
          liste: [
            "Une action, un responsable, une échéance.",
            "Un indicateur par action, mesuré à intervalles réguliers.",
            "Une information partagée : l'équipe sait où en est le projet.",
          ],
        },
        {
          sousTitre: "4. Suivre et corriger",
          texte: "Le suivi transforme le plan en pilotage.",
          liste: [
            "Comparer les résultats obtenus aux objectifs fixés.",
            "Comprendre l'écart : moyens insuffisants, hypothèse fausse, contexte changé.",
            "Corriger : réaffecter les moyens, réviser l'objectif ou changer de voie.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La stratégie est…", opts: ["l'ensemble des choix pour atteindre les objectifs", "un document décoratif", "la liste du personnel"], ok: 0, expl: "Elle traduit le diagnostic en décisions." },
          { q: "Se concentrer sur le métier le mieux maîtrisé est une stratégie de…", opts: ["spécialisation", "diversification", "croissance"], ok: 0, expl: "On renforce le cœur du métier." },
          { q: "Ouvrir une activité nouvelle pour réduire le risque est une…", opts: ["diversification", "spécialisation", "recentralisation"], ok: 0, expl: "On répartit le risque sur plusieurs activités." },
          { q: "Le suivi sert à…", opts: ["mesurer les écarts et corriger", "remplacer les objectifs", "supprimer le diagnostic"], ok: 0, expl: "Il transforme le plan en pilotage." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une stratégie peut réussir sans moyens affectés.", rep: false, expl: "L'écart entre ambition et ressources est la première cause d'échec." },
          { txt: "Un indicateur de suivi doit être mesuré régulièrement.", rep: true, expl: "Il renseigne sur l'avancement de l'action." },
          { txt: "La diversification répartit le risque sur plusieurs activités.", rep: true, expl: "On dépend moins d'un seul marché." },
          { txt: "Le suivi sert uniquement à sanctionner les responsables.", rep: false, expl: "Il sert d'abord à comprendre l'écart et à corriger." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis la stratégie et cite les étapes de la démarche.", r: "C'est l'ensemble des choix par lesquels l'organisation atteint ses objectifs : diagnostic, objectifs, choix de la voie, affectation des moyens, suivi." },
          { q: "Cite deux grandes voies stratégiques et dis en quoi elles diffèrent.", r: "La spécialisation concentre l'effort sur le métier le mieux maîtrisé ; la diversification ouvre une activité nouvelle pour réduire le risque." },
          { q: "Cite les quatre catégories de ressources nécessaires à la mise en œuvre.", r: "Les ressources humaines, matérielles, financières et immatérielles." },
          { q: "Pourquoi le suivi est-il indispensable ?", r: "Parce qu'il mesure les écarts entre le prévu et le réalisé, en explique la cause et permet de corriger la trajectoire." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "L'ensemble des choix pour atteindre les objectifs est la", suite: "stratégie" },
          { debut: "Ouvrir une activité nouvelle pour réduire le risque est une", suite: "diversification" },
          { debut: "Une grandeur mesurée régulièrement pour suivre l'action est un", suite: "indicateur" },
          { debut: "Comparer les résultats aux objectifs puis corriger constitue le", suite: "suivi" },
        ]},
      ],
    },
  ],
};

module.exports = U;
