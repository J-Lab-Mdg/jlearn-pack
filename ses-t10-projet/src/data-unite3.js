// ============================================================
// Unité III — Entreprise et production (PE T10 — 16 heures)
// RAS 1 : Analyser les modes de fonctionnement des organisations
// RAS 2 : Déterminer les facteurs de production
// RAS 3 : Déterminer le rôle de l'entrepreneur
// Découpage : 7 séances de cours + 1 révision + 1 sujet d'examen
// Valeurs : Responsabilité, Culture de l'excellence
// ============================================================

const U = {
  num: "III",
  titre: "Entreprise et production",
  ras: "Analyser les modes de fonctionnement des organisations · Déterminer les facteurs de production · Déterminer le rôle de l'entrepreneur",
  valeurs: "Responsabilité, Culture de l'excellence",
  duree: "16 heures",
  themes: [
    "Les organisations productives",
    "Biens et services : production marchande et non marchande",
    "Secteur formel et secteur informel",
    "Les facteurs de production et leurs combinaisons",
    "Productivité et progrès technique",
    "L'entrepreneur et la recherche du profit",
    "Mobiliser les ressources de l'entreprise",
  ],
  topics: [
    // ---------------------------------------------------------
    // SÉANCE 10 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les organisations productives : entreprises, administrations, économie sociale",
      theme: "Entreprise et production",
      ras: "Analyser les modes de fonctionnement des organisations",
      valeurs: "Responsabilité, Culture de l'excellence",
      objectif: "citer les principales organisations productives et les classer selon leurs objectifs",
      supportMeta: "Documents, tableau de classement, cahier",
      revision: [
        ["Qu'est-ce qu'une organisation ?", "Un groupe de personnes structuré, doté de moyens, qui poursuit un objectif commun."],
        ["Cite deux acteurs du circuit économique.", "Les ménages et les entreprises (ou les administrations)."],
      ],
      mise: [
        "Qui fabrique les objets et rend les services dont tu te sers chaque jour ?",
        "Des entreprises, des artisans, des administrations, des associations : plusieurs types d'organisations.",
      ],
      observation: "les documents présentant trois organisations différentes",
      observationSupport: "Documents sur une entreprise, une administration et une coopérative (textes courts ou affiches)",
      technAna: "Exploitation de documents et travail de groupe",
      qa: [
        ["Quelles organisations produisent autour de nous ?", "Des entreprises privées, des administrations publiques et des organisations de l'économie sociale comme les associations, les coopératives et les mutuelles."],
        ["Quel est l'objectif d'une entreprise privée ?", "Vendre sa production pour réaliser un bénéfice : c'est une organisation à but lucratif."],
        ["Quel est l'objectif d'une administration ?", "Rendre un service public à la collectivité — école, santé, sécurité — financé par l'impôt, sans rechercher de profit."],
        ["Qu'est-ce que l'économie sociale ?", "L'ensemble des organisations qui produisent pour répondre à un besoin de leurs membres ou d'un groupe, sans chercher d'abord le profit : association, coopérative, mutuelle."],
        ["Qu'est-ce qui distingue une coopérative d'une entreprise classique ?", "Dans une coopérative, les membres sont à la fois producteurs et décideurs : les bénéfices reviennent à la collectivité des membres et chacun dispose d'une voix."],
        ["Pourquoi la répartition entre organisations est-elle importante à connaître ?", "Parce qu'elle explique qui produit quoi, comment les organisations sont financées et quels emplois elles offrent."],
      ],
      synthese: "Donc, les organisations productives se répartissent en trois ensembles : les entreprises privées, à but lucratif ; les administrations, qui rendent un service public financé par l'impôt ; et les organisations de l'économie sociale — associations, coopératives, mutuelles — qui poursuivent un but d'utilité pour leurs membres. Leur objectif et leur mode de financement les distinguent.",
      motsCles: ["entreprise", "administration", "association", "coopérative", "mutuelle", "économie sociale", "but lucratif"],
      image: { file: "u3_atelier.png", legende: "Figure 5 — Un atelier de production : des moyens réunis pour produire." },
      contenu: [
        {
          sousTitre: "1. L'entreprise privée",
          texte: "L'entreprise est une organisation qui combine des moyens — du travail, des machines, des matières premières, de l'argent — pour produire des biens ou des services destinés à être vendus sur un marché.",
          liste: [
            "Son objectif principal est lucratif : elle cherche à réaliser un bénéfice.",
            "Elle se finance par la vente de sa production et par des emprunts ou des apports des propriétaires.",
            "On y trouve la très petite entreprise artisanale, la petite entreprise familiale et la grande entreprise.",
          ],
        },
        {
          sousTitre: "2. L'administration publique",
          texte: "L'administration produit des services non marchands, mis à la disposition de tous : l'école, l'hôpital public, la sécurité, l'état civil, les routes.",
          liste: [
            "Son objectif est l'intérêt général, non le profit.",
            "Elle est financée principalement par l'impôt et les redevances.",
            "Ses agents sont des fonctionnaires ou des contractuels, soumis à des règles de service public.",
          ],
        },
        {
          sousTitre: "3. L'économie sociale",
          texte: "L'économie sociale rassemble des organisations qui produisent pour répondre aux besoins de leurs membres ou d'un groupe, selon un principe de solidarité.",
          liste: [
            "L'association : un groupe de personnes qui se réunit autour d'un projet non lucratif (association de parents d'élèves, club sportif).",
            "La coopérative : une entreprise dont les membres sont à la fois producteurs et décideurs (coopérative de vanille, de riz, de pêcheurs).",
            "La mutuelle : une organisation qui couvre ses membres contre un risque (santé, décès, sinistre) par la mise en commun des cotisations.",
          ],
        },
        {
          sousTitre: "4. Comparer les organisations",
          texte: "Un même besoin peut être satisfait par des organisations différentes. Le tableau suivant résume les distinctions utiles.",
          liste: [
            "Objectif : profit (entreprise) · intérêt général (administration) · utilité des membres (économie sociale).",
            "Ressources : ventes (entreprise) · impôt (administration) · cotisations et ventes (économie sociale).",
            "Décision : propriétaire ou dirigeants · autorité publique · assemblée des membres.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Autour de la filière vanille, on trouve :",
          liste: [
            "des producteurs familiaux qui cultivent et préparent la vanille ;",
            "une coopérative qui regroupe les producteurs, négocie les prix et partage les bénéfices ;",
            "des entreprises privées qui achètent, transforment et exportent ;",
            "une administration qui contrôle la qualité et délivre les autorisations d'exportation.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une entreprise privée a pour objectif principal…", opts: ["le profit", "l'intérêt général", "la charité"], ok: 0, expl: "Elle vend sa production pour réaliser un bénéfice." },
          { q: "Une coopérative appartient…", opts: ["à l'État", "à ses membres", "à un seul propriétaire"], ok: 1, expl: "Les membres sont à la fois producteurs et décideurs." },
          { q: "Les services publics sont financés surtout par…", opts: ["l'impôt", "les dons", "la loterie"], ok: 0, expl: "L'impôt finance l'école, la santé et la sécurité." },
          { q: "Une mutuelle sert à…", opts: ["couvrir ses membres contre un risque", "vendre des actions", "construire des routes"], ok: 0, expl: "Les cotisations mises en commun couvrent un risque commun." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une administration recherche d'abord un bénéfice financier.", rep: false, expl: "Elle poursuit l'intérêt général et rend un service public." },
          { txt: "Une association de parents d'élèves appartient à l'économie sociale.", rep: true, expl: "C'est une organisation à but non lucratif." },
          { txt: "Une coopérative de producteurs permet de négocier de meilleurs prix.", rep: true, expl: "Le regroupement donne plus de poids face aux acheteurs." },
          { txt: "Toutes les organisations productives ont le même mode de financement.", rep: false, expl: "Ventes, impôt et cotisations sont trois sources distinctes." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite trois types d'organisations productives.", r: "Trois types d'organisations productives sont l'entreprise privée, l'administration publique et la coopérative." },
          { q: "Qu'est-ce que l'économie sociale ?", r: "L'économie sociale est l'ensemble des organisations — associations, coopératives, mutuelles — qui produisent pour l'utilité de leurs membres sans rechercher d'abord le profit." },
          { q: "Quelle différence y a-t-il entre une entreprise privée et une administration ?", r: "L'entreprise vend sa production pour réaliser un bénéfice, tandis que l'administration rend un service public financé par l'impôt." },
          { q: "Donne un exemple de coopérative et précise son intérêt pour les producteurs.", r: "Une coopérative de producteurs de vanille permet à ses membres de vendre ensemble et d'obtenir un meilleur prix." },
        ]},
        { type: "appariement", consigne: "Relie chaque organisation à son mode de financement principal.", pointsPar: 1, items: [
          { g: ["Entreprise privée", "Administration publique", "Mutuelle", "Coopérative"], d: ["L'impôt", "Les cotisations des membres", "Les ventes de la production", "Les ventes et les parts des membres"], pairs: [[0, 2], [1, 0], [2, 1], [3, 3]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 11 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Biens et services : production marchande et non marchande",
      theme: "Entreprise et production",
      ras: "Analyser les modes de fonctionnement des organisations",
      valeurs: "Responsabilité, Culture de l'excellence",
      objectif: "distinguer biens et services, production marchande et production non marchande",
      supportMeta: "Objets de la classe, documents, tableau de classement",
      revision: [
        ["Cite trois types d'organisations productives.", "L'entreprise privée, l'administration publique et la coopérative."],
        ["Qu'est-ce qui distingue l'entreprise de l'administration ?", "L'entreprise vend sa production pour un bénéfice ; l'administration rend un service public financé par l'impôt."],
      ],
      mise: [
        "Quand tu achètes du pain, achètes-tu la même chose que quand tu vas au dispensaire ?",
        "Non : le pain est un bien que l'on emporte ; la consultation est un service rendu.",
      ],
      observation: "les objets et les situations de service présentés sur la table",
      observationSupport: "Objets (cahier, savon, riz) et images de services (cours, soins, transport), tableau de classement",
      technAna: "Observation comparée et classement dirigé",
      qa: [
        ["Qu'est-ce qu'un bien ?", "C'est un objet matériel que l'on peut toucher, stocker et transporter : du riz, un cahier, une bicyclette."],
        ["Qu'est-ce qu'un service ?", "C'est une activité rendue à quelqu'un, qui ne se stocke pas : un cours, une consultation, un transport, une réparation."],
        ["Qu'est-ce qu'une production marchande ?", "Une production vendue sur un marché à un prix qui couvre au moins une partie de son coût."],
        ["Qu'est-ce qu'une production non marchande ?", "Une production fournie gratuitement ou à un prix très inférieur au coût, financée par l'impôt ou les cotisations."],
        ["Une école privée payante est-elle une production marchande ?", "Oui : les familles paient des frais de scolarité qui financent le service."],
        ["L'école publique est-elle marchande ?", "Non : elle est gratuite pour les familles et financée par l'impôt, c'est une production non marchande."],
        ["Pourquoi cette distinction est-elle importante ?", "Parce qu'elle indique qui paie la production : le client sur le marché, ou la collectivité par l'impôt."],
      ],
      synthese: "Donc, on distingue les biens, objets matériels que l'on peut stocker, des services, activités rendues sans stockage possible. La même distinction s'applique au mode de financement : une production est marchande quand elle est vendue sur un marché à un prix couvrant son coût, non marchande quand elle est fournie gratuitement ou presque, et financée par l'impôt ou par des cotisations.",
      motsCles: ["bien", "service", "production marchande", "production non marchande", "prix", "impôt"],
      contenu: [
        {
          sousTitre: "1. Biens et services",
          texte: "Toute production est soit un bien, soit un service. La différence tient à la matérialité et à la possibilité de stocker.",
          liste: [
            "Un bien est matériel : riz, savon, tissu, charrette, téléphone. On peut le stocker et le transporter.",
            "Un service est une activité : enseigner, soigner, transporter, réparer, coiffer. Il se consomme au moment où il est rendu et ne se stocke pas.",
            "Beaucoup d'achats mélangent les deux : un repas au restaurant est un bien préparé et un service de table.",
          ],
        },
        {
          sousTitre: "2. Production marchande",
          texte: "Une production est marchande lorsqu'elle est destinée à être vendue sur un marché, à un prix payé par l'acheteur.",
          liste: [
            "Le prix couvre les coûts de production et dégage, si possible, un bénéfice.",
            "Exemples : le riz du marché, la coupe de cheveux, le transport en taxi-brousse, la réparation de bicyclette.",
            "Le producteur dépend de la demande : si les clients n'achètent pas, l'activité s'arrête.",
          ],
        },
        {
          sousTitre: "3. Production non marchande",
          texte: "Une production est non marchande lorsqu'elle est mise à disposition gratuitement ou à un prix symbolique, très inférieur au coût réel.",
          liste: [
            "Elle est financée par l'impôt, les cotisations sociales ou des dons.",
            "Exemples : l'école publique, la voirie, la sécurité, la justice, les services d'une association caritative.",
            "Le producteur ne dépend pas directement du paiement du bénéficiaire.",
          ],
        },
        {
          sousTitre: "4. Le cas des organisations à but non lucratif",
          texte: "Les associations, coopératives et mutuelles peuvent vendre une production et rester non lucratives : le surplus éventuel reste dans l'organisation au lieu d'être partagé entre des propriétaires.",
          liste: [
            "Une mutuelle verse des prestations financées par les cotisations.",
            "Une association peut facturer une formation à prix réduit ; l'excédent finance d'autres actions.",
            "Une coopérative vend la récolte de ses membres et leur reverse le produit de la vente.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Classer quatre productions courantes :",
          liste: [
            "Le pain du marché : bien, production marchande.",
            "La consultation au centre de santé public : service, production non marchande (financée par l'État).",
            "Le transport en taxi-brousse : service, production marchande.",
            "Le cours dans un collège public : service, production non marchande.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Un bien est…", opts: ["un objet matériel que l'on peut stocker", "une activité rendue à quelqu'un", "un impôt"], ok: 0, expl: "Le bien est matériel et stockable." },
          { q: "Un service…", opts: ["se consomme au moment où il est rendu", "se stocke indéfiniment", "n'a jamais de valeur"], ok: 0, expl: "Il n'y a pas de stock possible pour une consultation ou un cours." },
          { q: "Une production non marchande est surtout financée par…", opts: ["l'impôt ou les cotisations", "le profit", "la loterie"], ok: 0, expl: "La collectivité finance, l'usager ne paie pas le coût réel." },
          { q: "Une école privée payante relève de la production…", opts: ["marchande", "non marchande", "illégale"], ok: 0, expl: "Les familles paient un prix qui finance le service." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Un repas au restaurant est à la fois un bien et un service.", rep: true, expl: "Les aliments sont un bien, la préparation et le service de table sont des services." },
          { txt: "Un bien peut se stocker, un service non.", rep: true, expl: "C'est la différence essentielle entre les deux." },
          { txt: "Toute production gratuite est inutile.", rep: false, expl: "Les services publics sont gratuits pour l'usager mais utiles à la collectivité." },
          { txt: "Une association peut vendre une production et rester non lucrative.", rep: true, expl: "Le surplus reste dans l'organisation et finance ses actions." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Donne la définition d'un service et cite un exemple.", r: "Un service est une activité rendue à quelqu'un qui ne se stocke pas, comme une consultation médicale ou un cours." },
          { q: "Qu'est-ce qu'une production marchande ?", r: "C'est une production vendue sur un marché à un prix payé par l'acheteur et qui couvre les coûts." },
          { q: "Qui finance la production non marchande ?", r: "Elle est financée par l'impôt, les cotisations sociales ou des dons, et non par le prix payé par l'usager." },
          { q: "Classe ces deux productions : le transport en taxi-brousse et la voirie communale.", r: "Le transport en taxi-brousse est un service marchand ; la voirie communale est une production non marchande financée par la collectivité." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["bien", "service", "marchande", "non marchande", "impôt"], items: [
          { phrase: "Le riz vendu au marché est un _________.", mot: "bien" },
          { phrase: "Une coupe de cheveux est un _________.", mot: "service" },
          { phrase: "Une production vendue à un prix qui couvre les coûts est _________.", mot: "marchande" },
          { phrase: "Les services publics gratuits sont une production _________.", mot: "non marchande" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 12 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Secteur formel et secteur informel",
      theme: "Entreprise et production",
      ras: "Analyser les modes de fonctionnement des organisations",
      valeurs: "Responsabilité, Culture de l'excellence",
      objectif: "différencier le secteur formel du secteur informel et expliquer leur importance dans l'économie",
      supportMeta: "Documents sur une entreprise déclarée et sur une activité de rue, cahier",
      revision: [
        ["Qu'est-ce qu'une production marchande ?", "Une production vendue sur un marché à un prix qui couvre les coûts."],
        ["Cite une organisation de l'économie sociale.", "Une association, une coopérative ou une mutuelle."],
      ],
      mise: [
        "Le vendeur de beignets au bord de la route et la boulangerie du quartier paient-ils tous les deux des impôts ?",
        "Non : la boulangerie est déclarée et paie des impôts, le vendeur de rue exerce souvent sans être déclaré.",
      ],
      observation: "les deux documents décrivant une activité déclarée et une activité non déclarée",
      observationSupport: "Documents comparant une entreprise enregistrée et une activité de rue, tableau de comparaison",
      technAna: "Étude de documents, discussion de groupe et questionnement",
      qa: [
        ["Qu'est-ce que le secteur formel ?", "L'ensemble des activités déclarées aux autorités : entreprises enregistrées, administrations, salariés protégés par des contrats et des cotisations."],
        ["Qu'est-ce que le secteur informel ?", "L'ensemble des activités non déclarées, souvent de petite taille : vente de rue, artisanat non enregistré, petits services, activités de subsistance."],
        ["Quelles sont les caractéristiques du secteur formel ?", "Enregistrement légal, paiement des impôts et cotisations, contrats de travail, protection sociale, accès au crédit bancaire."],
        ["Quelles sont les limites du secteur informel ?", "Absence de protection sociale, revenus irréguliers, pas d'accès au crédit, pas de couverture en cas de maladie ou d'accident, difficulté à se développer."],
        ["Le secteur informel est-il inutile ?", "Non : il procure des revenus à une grande partie de la population et rend des services de proximité, mais il reste précaire pour ceux qui l'exercent."],
        ["Pourquoi les pouvoirs publics encouragent-ils le passage au formel ?", "Parce qu'il permet de percevoir l'impôt, de protéger les travailleurs et de financer les services publics dont tous profitent."],
      ],
      synthese: "Donc, le secteur formel rassemble les activités déclarées, protégées et imposées, tandis que le secteur informel rassemble les activités non déclarées, souples mais précaires. Le secteur informel occupe une place importante dans l'économie parce qu'il donne du travail et des revenus, mais il laisse ses acteurs sans protection sociale : c'est pourquoi les pouvoirs publics cherchent à faciliter le passage vers le formel.",
      motsCles: ["secteur formel", "secteur informel", "déclaration", "protection sociale", "impôt", "précarité"],
      contenu: [
        {
          sousTitre: "1. Le secteur formel",
          texte: "Le secteur formel est constitué des activités connues des autorités et soumises aux règles : immatriculation, comptabilité, impôts, cotisations sociales, contrats de travail.",
          liste: [
            "L'entreprise est enregistrée et possède un numéro d'identification.",
            "Les salariés ont un contrat, un salaire déclaré et une couverture sociale.",
            "L'activité paie des impôts et cotise pour la retraite, la santé et les accidents du travail.",
            "L'accès au crédit bancaire et aux marchés publics est possible.",
          ],
        },
        {
          sousTitre: "2. Le secteur informel",
          texte: "Le secteur informel regroupe les activités de production et de vente qui échappent aux règles et aux statistiques officielles. Il s'agit souvent d'activités individuelles ou familiales de petite taille.",
          liste: [
            "Vente de rue : fruits, beignets, légumes, vêtements.",
            "Artisanat non enregistré : réparation, couture, coiffure à domicile.",
            "Petits services : portage, gardiennage, transport non déclaré.",
            "Agriculture de subsistance dont la production est autoconsommée.",
          ],
        },
        {
          sousTitre: "3. Comparer les deux secteurs",
          texte: "Les deux secteurs présentent des avantages et des inconvénients, pour l'activité elle-même et pour la collectivité.",
          liste: [
            "Formalités : lourdes dans le formel, quasi inexistantes dans l'informel.",
            "Protection : cotisations et droits sociaux dans le formel ; aucune dans l'informel.",
            "Financement : crédit bancaire accessible dans le formel ; épargne personnelle et tontine dans l'informel.",
            "Contribution publique : impôts payés dans le formel ; peu ou pas de recettes fiscales dans l'informel.",
            "Stabilité : croissance possible dans le formel ; activité vulnérable aux aléas dans l'informel.",
          ],
        },
        {
          sousTitre: "4. L'importance du secteur informel",
          texte: "Le secteur informel n'est pas un résidu : il occupe une grande partie de la population active et rend des services de proximité indispensables.",
          liste: [
            "Il offre un revenu immédiat à des personnes sans emploi salarié.",
            "Il forme de nombreux jeunes aux métiers par l'apprentissage sur le tas.",
            "Il approvisionne les quartiers et les marchés à bas coût.",
            "Il reste fragile : pas de retraite, pas d'indemnisation en cas d'accident, difficulté à investir.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Deux couturiers du même quartier :",
          liste: [
            "Le premier tient un atelier enregistré : il paie ses impôts, emploie deux apprentis déclarés, peut emprunter pour acheter une machine supplémentaire.",
            "Le second coud à domicile sans être déclaré : il travaille sans protection sociale et ne peut pas obtenir de prêt, mais il fait vivre sa famille au jour le jour.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le secteur formel se caractérise par…", opts: ["la déclaration de l'activité et le paiement des impôts", "l'absence de règles", "l'absence de clients"], ok: 0, expl: "L'activité est enregistrée et contribue aux charges publiques." },
          { q: "Le secteur informel procure surtout…", opts: ["un revenu immédiat mais précaire", "une retraite garantie", "un crédit bancaire automatique"], ok: 0, expl: "Il donne du travail, mais sans protection sociale." },
          { q: "Un vendeur de légumes non déclaré exerce dans le secteur…", opts: ["informel", "formel", "public"], ok: 0, expl: "Son activité n'est pas enregistrée auprès des autorités." },
          { q: "Passer du secteur informel au secteur formel permet surtout…", opts: ["d'accéder à la protection sociale et au crédit", "de ne plus jamais payer d'impôt", "de supprimer la concurrence"], ok: 0, expl: "La déclaration ouvre des droits et l'accès au financement." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le secteur informel est sans importance dans l'économie.", rep: false, expl: "Il occupe une grande partie de la population active et rend des services de proximité." },
          { txt: "Un salarié du secteur formel cotise pour sa retraite.", rep: true, expl: "Les cotisations sociales financent la protection du salarié." },
          { txt: "Une activité informelle peut difficilement obtenir un prêt bancaire.", rep: true, expl: "Sans comptabilité ni enregistrement, la banque ne peut évaluer le risque." },
          { txt: "L'impôt payé par le secteur formel ne sert à rien.", rep: false, expl: "Il finance l'école, la santé, la sécurité et les infrastructures dont tous profitent." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Donne la définition du secteur formel.", r: "Le secteur formel est l'ensemble des activités déclarées aux autorités, soumises aux impôts et aux cotisations, avec des travailleurs protégés." },
          { q: "Cite trois activités relevant souvent du secteur informel.", r: "La vente de rue, la couture à domicile et le petit transport non déclaré (ou l'artisanat non enregistré)." },
          { q: "Cite deux limites du secteur informel pour celui qui l'exerce.", r: "Il n'a pas de protection sociale et il ne peut pas obtenir de crédit pour développer son activité." },
          { q: "Pourquoi l'État cherche-t-il à faire sortir les activités de l'informel ?", r: "Parce que les activités déclarées paient l'impôt, protègent les travailleurs et financent les services publics." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Une entreprise enregistrée qui paie ses impôts appartient au secteur", suite: "formel" },
          { debut: "L'activité non déclarée appartient au secteur", suite: "informel" },
          { debut: "Les cotisations sociales financent la", suite: "protection sociale" },
          { debut: "Sans comptabilité, une activité informelle ne peut pas obtenir de", suite: "crédit" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 13 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les facteurs de production et leurs combinaisons",
      theme: "Entreprise et production",
      ras: "Déterminer les facteurs de production",
      valeurs: "Responsabilité, Culture de l'excellence",
      objectif: "identifier les facteurs de production et expliquer comment une entreprise les combine",
      supportMeta: "Schéma de la combinaison productive, documents, cahier",
      revision: [
        ["Qu'est-ce que le secteur informel ?", "L'ensemble des activités non déclarées, souvent de petite taille et sans protection sociale."],
        ["Cite un bien et un service produits près de chez toi.", "Du pain ou du riz pour le bien ; une réparation ou un transport pour le service."],
      ],
      mise: [
        "De quoi le boulanger a-t-il besoin, à part de la farine, pour faire son pain ?",
        "D'un four, d'un local, de son travail et de son savoir-faire, et d'argent pour acheter le matériel.",
      ],
      observation: "le schéma de la combinaison productive affiché au tableau",
      observationSupport: "Schéma « facteurs de production → combinaison → production » affiché ou distribué",
      technAna: "Exploitation de documents et questionnement dirigé",
      qa: [
        ["Qu'appelle-t-on les facteurs de production ?", "Les moyens qu'il faut réunir pour produire : le travail, le capital, et les ressources naturelles comme la terre et les matières premières."],
        ["Qu'est-ce que le facteur travail ?", "L'effort physique et intellectuel fourni par les personnes : le savoir-faire de l'artisan, la force du manœuvre, la compétence du comptable."],
        ["Qu'est-ce que le facteur capital ?", "Les moyens durables de production : machines, outils, bâtiments, véhicules, ordinateurs, et l'argent qui permet de les acheter."],
        ["Que désigne la terre dans ce cadre ?", "Les ressources naturelles mobilisées : le sol cultivé, l'eau, le sous-sol, la forêt, les ressources halieutiques."],
        ["Que signifie « combiner les facteurs » ?", "Choisir la manière de les associer : plus de machines et moins de main-d'œuvre, ou l'inverse, selon les moyens et les objectifs de l'entreprise."],
        ["Qu'est-ce que la substituabilité des facteurs ?", "Le fait de pouvoir remplacer un facteur par un autre : une machine peut remplacer plusieurs travailleurs, ou des travailleurs remplacer une machine trop coûteuse."],
        ["Qu'est-ce que la complémentarité des facteurs ?", "Le fait que certains facteurs ne produisent rien séparément : un tracteur sans conducteur, un four sans boulanger ne produisent rien."],
      ],
      synthese: "Donc, produire suppose de réunir du travail, du capital et des ressources naturelles, que l'entreprise combine selon ses moyens et ses objectifs. Ces facteurs peuvent se remplacer — c'est la substituabilité — mais ils restent aussi nécessairement complémentaires : aucun ne produit seul. La combinaison choisie détermine le coût et la quantité produite.",
      motsCles: ["facteurs de production", "travail", "capital", "terre", "combinaison productive", "substituabilité", "complémentarité"],
      image: { file: "u3_facteurs.png", legende: "Figure 6 — Les facteurs de production et leur combinaison." },
      contenu: [
        {
          sousTitre: "1. Les deux grands facteurs : travail et capital",
          texte: "Le Programme d'Études retient deux facteurs essentiels : le facteur travail et le facteur capital, auxquels s'ajoutent les ressources naturelles nécessaires à l'activité.",
          liste: [
            "Le travail : l'activité humaine, physique ou intellectuelle, rémunérée par un salaire ou un revenu d'activité.",
            "Le capital : les biens durables utilisés pour produire (machines, outils, bâtiments, véhicules) et les moyens financiers pour les acquérir.",
            "Les ressources naturelles : la terre, l'eau, les matières premières, l'énergie.",
          ],
        },
        {
          sousTitre: "2. La combinaison productive",
          texte: "Une entreprise ne se contente pas de posséder des facteurs : elle choisit comment les associer. Cette combinaison s'appelle la combinaison productive.",
          liste: [
            "Une combinaison intensive en travail : beaucoup de main-d'œuvre, peu de machines (récolte manuelle du riz, couture à la main).",
            "Une combinaison intensive en capital : beaucoup de machines, peu de main-d'œuvre (décorticage mécanisé, imprimerie).",
            "Le choix dépend du coût relatif des facteurs, des moyens financiers et de la qualification disponible.",
          ],
        },
        {
          sousTitre: "3. La substituabilité des facteurs",
          texte: "Dans une certaine mesure, un facteur peut remplacer l'autre. C'est la substituabilité.",
          liste: [
            "Un décortiqueuse remplace le travail de plusieurs personnes au pilon.",
            "Un ordinateur et un logiciel de comptabilité remplacent une partie du travail de saisie manuelle.",
            "La substitution a une limite : au-delà d'un certain point, la machine ne peut plus remplacer le jugement ou l'adresse humaine.",
          ],
        },
        {
          sousTitre: "4. La complémentarité des facteurs",
          texte: "Les facteurs sont aussi complémentaires : leur efficacité dépend de leur association. Un facteur isolé ne produit rien.",
          liste: [
            "Un four ne produit du pain qu'avec un boulanger et de la farine.",
            "Un tracteur ne laboure qu'avec du carburant et un conducteur formé.",
            "Une machine performante entre les mains d'un personnel non formé produit peu et tombe en panne.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Une petite unité de transformation de fruits :",
          liste: [
            "Travail : six personnes qui trient, lavent et conditionnent les fruits.",
            "Capital : deux bassins, une étuve, un local, une bicyclette pour la livraison.",
            "Ressources naturelles : les fruits achetés aux producteurs, l'eau et l'énergie.",
            "Combinaison choisie : intensive en travail au démarrage, avec un projet d'acheter une machine de conditionnement plus tard.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le facteur travail correspond à…", opts: ["l'activité humaine fournie pour produire", "aux machines", "au capital financier"], ok: 0, expl: "C'est l'effort physique et intellectuel des personnes." },
          { q: "Le facteur capital correspond à…", opts: ["aux moyens durables de production", "aux salaires", "aux matières premières consommées"], ok: 0, expl: "Machines, outils, bâtiments et moyens financiers." },
          { q: "La substituabilité signifie qu'un facteur…", opts: ["peut en remplacer un autre", "ne sert jamais", "est gratuit"], ok: 0, expl: "Une machine peut remplacer de la main-d'œuvre, et inversement." },
          { q: "La complémentarité signifie que les facteurs…", opts: ["produisent ensemble, jamais isolément", "sont interchangeables sans limite", "sont toujours gratuits"], ok: 0, expl: "Un four sans boulanger ne produit rien." },
        ]},
        { type: "appariement", consigne: "Relie chaque moyen au facteur de production correspondant.", pointsPar: 1, items: [
          { g: ["Le savoir-faire d'un artisan", "Un four à pain", "Une parcelle cultivée", "Un ordinateur"], d: ["Capital", "Travail", "Capital", "Ressources naturelles"], pairs: [[0, 1], [1, 0], [2, 3], [3, 2]] },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite les deux grands facteurs de production et donne un exemple de chacun.", r: "Le travail, comme le savoir-faire d'un couturier, et le capital, comme une machine à coudre ou un atelier." },
          { q: "Qu'est-ce qu'une combinaison productive ?", r: "C'est la manière dont une entreprise associe ses facteurs de production pour fabriquer des biens ou rendre des services." },
          { q: "Explique la différence entre substituabilité et complémentarité des facteurs.", r: "La substituabilité permet de remplacer un facteur par un autre ; la complémentarité signifie que les facteurs doivent être réunis pour produire." },
          { q: "Pourquoi une machine performante ne suffit-elle pas à produire ?", r: "Parce qu'elle doit être conduite et entretenue par un personnel formé : les facteurs sont complémentaires." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["travail", "capital", "substituabilité", "complémentarité", "combinaison"], items: [
          { phrase: "Les machines et les bâtiments forment le facteur _________.", mot: "capital" },
          { phrase: "L'effort fourni par les personnes forme le facteur _________.", mot: "travail" },
          { phrase: "Remplacer de la main-d'œuvre par une machine illustre la _________.", mot: "substituabilité" },
          { phrase: "Un four sans boulanger montre que les facteurs sont marqués par la _________.", mot: "complémentarité" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 14 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Productivité et progrès technique",
      theme: "Entreprise et production",
      ras: "Déterminer les facteurs de production",
      valeurs: "Responsabilité, Culture de l'excellence",
      objectif: "définir la productivité et expliquer le rôle du progrès technique dans son accroissement",
      supportMeta: "Tableaux de production, documents, cahier",
      revision: [
        ["Cite les deux grands facteurs de production.", "Le travail et le capital."],
        ["Qu'est-ce que la substituabilité des facteurs ?", "La possibilité de remplacer un facteur par un autre, par exemple une machine par de la main-d'œuvre."],
      ],
      mise: [
        "Deux cultivateurs ont la même parcelle : l'un récolte trois fois plus que l'autre. Pourquoi ?",
        "Le second utilise de meilleures semences, des outils plus efficaces ou une meilleure méthode.",
      ],
      observation: "les deux tableaux de production présentés au tableau",
      observationSupport: "Tableaux comparant la production obtenue avec et sans amélioration technique",
      technAna: "Exploitation de documents et calcul dirigé",
      qa: [
        ["Qu'est-ce que la productivité ?", "C'est le rapport entre la quantité produite et les moyens utilisés pour la produire : on produit plus avec la même quantité de travail ou de capital."],
        ["Comment mesure-t-on la productivité du travail ?", "En divisant la quantité produite par le nombre d'heures de travail ou par le nombre de travailleurs."],
        ["Qu'est-ce que le progrès technique ?", "L'ensemble des améliorations qui permettent de produire davantage ou mieux avec les mêmes ressources : nouvelles machines, meilleures semences, méthodes plus efficaces, organisation du travail."],
        ["Comment le progrès technique augmente-t-il la productivité ?", "Il réduit le temps nécessaire, diminue les pertes et améliore la qualité : la même équipe produit davantage."],
        ["La productivité dépend-elle seulement des machines ?", "Non : la formation des travailleurs, l'organisation du travail et l'entretien du matériel comptent autant."],
        ["Quels sont les effets d'une hausse de productivité ?", "Une baisse du coût de production, des prix plus compétitifs, la possibilité d'augmenter les revenus ou d'investir ; parfois aussi une réduction des emplois si la demande ne suit pas."],
      ],
      synthese: "Donc, la productivité mesure l'efficacité de la production : on l'augmente en produisant plus avec les mêmes moyens. Le progrès technique — machines, méthodes, formation, organisation — en est le moteur principal. Une productivité plus élevée réduit les coûts, mais elle demande des travailleurs formés et un matériel entretenu pour durer.",
      motsCles: ["productivité", "progrès technique", "coût de production", "formation", "rendement", "investissement"],
      contenu: [
        {
          sousTitre: "1. Qu'est-ce que la productivité ?",
          texte: "La productivité compare ce que l'on obtient à ce que l'on met en œuvre. Elle ne mesure pas la quantité produite en soi, mais l'efficacité de la production.",
          liste: [
            "Productivité du travail : quantité produite divisée par le nombre d'heures travaillées.",
            "Productivité du capital : quantité produite rapportée au matériel utilisé.",
            "Exemple : deux couturiers travaillent huit heures ; le premier coud dix chemises, le second en coud seize : le second est plus productif.",
          ],
        },
        {
          sousTitre: "2. Le progrès technique",
          texte: "Le progrès technique regroupe toutes les améliorations qui permettent de produire plus ou mieux sans augmenter proportionnellement les moyens employés.",
          liste: [
            "Les machines et les équipements : décortiqueuse, motopompe, machine à coudre électrique.",
            "Les procédés et les intrants : semences améliorées, engrais, méthodes de conservation.",
            "L'organisation : meilleure répartition des tâches, planification des livraisons, contrôle de qualité.",
            "Les savoirs : formation des travailleurs, entretien du matériel, tenue d'une comptabilité simple.",
          ],
        },
        {
          sousTitre: "3. Comment la productivité augmente-t-elle ?",
          texte: "Plusieurs leviers se combinent, et ils se renforcent mutuellement.",
          liste: [
            "Mécaniser une tâche répétitive : le travail humain est libéré pour d'autres tâches.",
            "Former le personnel : un travailleur formé perd moins de temps et fait moins d'erreurs.",
            "Entretenir le matériel : une panne coûte plus cher que l'entretien régulier.",
            "Réduire les pertes : meilleur stockage, meilleur transport, moins de gaspillage.",
            "Organiser la production : approvisionner à temps, éviter les attentes inutiles.",
          ],
        },
        {
          sousTitre: "4. Les effets d'une hausse de productivité",
          texte: "Produire plus avec les mêmes moyens modifie la situation de l'entreprise, de ses clients et de ses salariés.",
          liste: [
            "Le coût de production par unité diminue.",
            "L'entreprise peut baisser ses prix et gagner des clients, ou dégager plus de bénéfice.",
            "Les revenus distribués — salaires, dividendes, investissements — peuvent augmenter.",
            "Certains emplois peuvent disparaître si la demande n'augmente pas : c'est pourquoi la formation continue est nécessaire.",
          ],
        },
        {
          sousTitre: "Exemple chiffré",
          texte: "Un atelier de décorticage :",
          liste: [
            "Avant : 5 travailleurs décortiquent 100 kg de riz par jour, soit 20 kg par personne.",
            "Après l'achat d'une décortiqueuse : 5 travailleurs produisent 400 kg par jour, soit 80 kg par personne.",
            "La productivité du travail a été multipliée par quatre : le coût par kilo baisse, l'atelier peut vendre moins cher et fournir plus de clients.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La productivité mesure…", opts: ["l'efficacité de la production", "le nombre d'employés", "le chiffre d'affaires total"], ok: 0, expl: "Elle compare la production obtenue aux moyens utilisés." },
          { q: "Le progrès technique permet de…", opts: ["produire plus avec les mêmes moyens", "supprimer toute main-d'œuvre", "augmenter les prix sans raison"], ok: 0, expl: "C'est la définition même du progrès technique." },
          { q: "Parmi les leviers de productivité, on trouve…", opts: ["la formation et l'entretien du matériel", "l'absence de méthode", "le gaspillage"], ok: 0, expl: "Le savoir-faire et le matériel en état augmentent le rendement." },
          { q: "Une hausse de productivité entraîne généralement…", opts: ["une baisse du coût par unité produite", "une hausse du gaspillage", "une baisse de la qualité obligatoire"], ok: 0, expl: "Produire plus avec les mêmes moyens réduit le coût unitaire." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La productivité ne dépend que des machines.", rep: false, expl: "La formation, l'organisation et l'entretien comptent autant." },
          { txt: "Un travailleur formé est plus productif.", rep: true, expl: "Il perd moins de temps et fait moins d'erreurs." },
          { txt: "Une panne coûte souvent plus cher que l'entretien régulier.", rep: true, expl: "L'entretien prévient les arrêts de production." },
          { txt: "Le progrès technique n'a jamais d'effet sur l'emploi.", rep: false, expl: "Il peut réduire certains emplois si la demande n'augmente pas." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Donne la définition de la productivité.", r: "La productivité est le rapport entre la quantité produite et les moyens utilisés pour la produire." },
          { q: "Cite trois formes de progrès technique.", r: "Une machine nouvelle, des semences améliorées et une meilleure organisation du travail." },
          { q: "Explique comment la formation augmente la productivité.", r: "Un travailleur formé travaille plus vite, fait moins d'erreurs et entretient mieux le matériel, ce qui augmente la production obtenue avec les mêmes moyens." },
          { q: "Cite un effet positif et un effet à surveiller d'une hausse de productivité.", r: "Effet positif : la baisse du coût par unité produite ; effet à surveiller : la disparition possible de certains emplois." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["productivité", "progrès technique", "formation", "coût", "entretien"], items: [
          { phrase: "Produire plus avec les mêmes moyens, c'est augmenter la _________.", mot: "productivité" },
          { phrase: "Une machine nouvelle est une forme de _________.", mot: "progrès technique" },
          { phrase: "L'_________ régulier évite les pannes coûteuses.", mot: "entretien" },
          { phrase: "La _________ des travailleurs améliore le rendement de l'atelier.", mot: "formation" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 15 — RAS 3
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "L'entrepreneur et la recherche du profit",
      theme: "Entreprise et production",
      ras: "Déterminer le rôle de l'entrepreneur",
      valeurs: "Responsabilité, Culture de l'excellence",
      objectif: "définir l'entrepreneur, expliquer son rôle et calculer simplement un profit",
      supportMeta: "Étude de cas d'une petite entreprise, tableaux, cahier",
      revision: [
        ["Qu'est-ce que la productivité ?", "Le rapport entre la quantité produite et les moyens utilisés pour la produire."],
        ["Cite une forme de progrès technique.", "Une machine nouvelle, une semence améliorée ou une meilleure organisation du travail."],
      ],
      mise: [
        "Pourquoi une personne décide-t-elle de créer sa propre entreprise ?",
        "Pour répondre à un besoin des clients, gagner sa vie et être indépendante.",
      ],
      observation: "l'étude de cas d'une petite entreprise distribuée en classe",
      observationSupport: "Étude de cas chiffrée d'une petite entreprise (recettes et dépenses), tableau préétabli",
      technAna: "Étude de cas, jeux de rôle et résolution de problème",
      qa: [
        ["Qui est l'entrepreneur ?", "La personne qui prend l'initiative de créer ou de diriger une entreprise : elle repère un besoin, réunit les moyens de production, prend des décisions et assume les risques."],
        ["Quel est son rôle principal ?", "Répondre à des besoins par une production vendue, tout en organisant le travail et en gérant les ressources de l'entreprise."],
        ["Qu'est-ce que le profit ?", "La différence entre les recettes de l'entreprise et l'ensemble de ses charges : si les recettes dépassent les charges, il y a un bénéfice ; sinon, une perte."],
        ["Comment calcule-t-on simplement un profit ?", "Profit = recettes moins charges. Exemple : 500 000 ariary de ventes et 380 000 ariary de charges donnent un profit de 120 000 ariary."],
        ["Le profit est-il garanti ?", "Non : l'entrepreneur supporte le risque de ne pas vendre, de voir ses coûts augmenter ou d'être concurrencé."],
        ["Que fait l'entrepreneur du profit réalisé ?", "Il en garde une partie pour vivre, en réinvestit une autre pour développer l'entreprise et en conserve une part pour faire face aux imprévus."],
        ["Quelles qualités sont nécessaires ?", "Le sens de l'observation, l'esprit d'initiative, l'organisation, la persévérance et le sens des responsabilités."],
      ],
      synthese: "Donc, l'entrepreneur est celui qui repère un besoin, réunit les moyens de production, prend les décisions et assume le risque de l'activité. Son objectif est de répondre à des besoins tout en réalisant un profit, c'est-à-dire un excédent des recettes sur les charges. Ce profit n'est jamais garanti : il récompense la prise de risque et permet de faire vivre et grandir l'entreprise.",
      motsCles: ["entrepreneur", "entreprise", "besoin", "profit", "recettes", "charges", "risque"],
      contenu: [
        {
          sousTitre: "1. L'entrepreneur",
          texte: "L'entrepreneur est la personne qui prend l'initiative de la production. Il ne se contente pas d'exécuter : il décide, organise et assume les conséquences de ses choix.",
          liste: [
            "Il repère un besoin insatisfait : un produit manquant, un service absent, une clientèle mal desservie.",
            "Il réunit les moyens : du travail, du matériel, des matières premières et de l'argent.",
            "Il organise la production et la vente.",
            "Il assume le risque financier : si l'entreprise perd de l'argent, il en supporte les conséquences.",
          ],
        },
        {
          sousTitre: "2. Répondre à des besoins",
          texte: "Une entreprise ne vit que si elle répond à un besoin réel, c'est-à-dire si des clients sont prêts à payer pour ce qu'elle offre.",
          liste: [
            "Besoin de se nourrir : rizerie, boulangerie, poissonnerie.",
            "Besoin de se déplacer : transport, réparation de véhicules, vente de pièces.",
            "Besoin de se former et de se soigner : école privée, pharmacie, cabinet de soins.",
            "Besoin de communiquer : téléphonie, cybercafé, imprimerie.",
          ],
        },
        {
          sousTitre: "3. Le profit",
          texte: "Le profit, ou bénéfice, est l'excédent des recettes sur les charges. Il se calcule sur une période donnée : une semaine, un mois, une année.",
          liste: [
            "Les recettes : tout ce que l'entreprise encaisse grâce à ses ventes.",
            "Les charges : achats de matières premières, salaires, loyer, transport, électricité, intérêts d'emprunt.",
            "Profit = recettes − charges.",
            "Si les charges dépassent les recettes, l'entreprise subit une perte.",
          ],
        },
        {
          sousTitre: "4. Le risque de l'entrepreneur",
          texte: "Le profit n'est pas un dû : il récompense un risque pris. L'entrepreneur peut se tromper sur le besoin, la qualité, le prix ou la concurrence.",
          liste: [
            "Risque commercial : les clients n'achètent pas la quantité prévue.",
            "Risque de coût : le prix des matières premières augmente.",
            "Risque financier : l'emprunt contracté reste dû même si les ventes baissent.",
            "Risque humain : un départ, une maladie, un conflit dans l'équipe.",
          ],
        },
        {
          sousTitre: "Exemple chiffré",
          texte: "Une petite unité de jus de fruits sur un mois :",
          liste: [
            "Recettes : 600 000 ariary de ventes.",
            "Charges : 250 000 ariary de fruits et sucre, 120 000 ariary de salaires, 80 000 ariary de transport, 50 000 ariary de loyer et d'électricité, soit 500 000 ariary.",
            "Profit : 600 000 − 500 000 = 100 000 ariary.",
            "Emploi du profit : 40 000 ariary pour la famille, 50 000 ariary réinvestis dans une nouvelle étuve, 10 000 ariary gardés en réserve.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "L'entrepreneur est celui qui…", opts: ["prend l'initiative et assume le risque", "obéit toujours aux ordres", "ne décide jamais"], ok: 0, expl: "Il décide, organise et supporte le risque de l'activité." },
          { q: "Le profit se calcule ainsi :", opts: ["recettes moins charges", "charges moins recettes", "recettes plus charges"], ok: 0, expl: "C'est l'excédent des recettes sur l'ensemble des charges." },
          { q: "Si les charges dépassent les recettes, l'entreprise…", opts: ["réalise une perte", "réalise un profit", "ferme obligatoirement"], ok: 0, expl: "Le résultat est négatif : c'est une perte." },
          { q: "Parmi les risques de l'entrepreneur, on trouve…", opts: ["la hausse du prix des matières premières", "la garantie du profit", "l'absence de concurrence"], ok: 0, expl: "Les coûts peuvent augmenter alors que les prix de vente restent stables." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une entreprise vit tant qu'elle répond à un besoin réel.", rep: true, expl: "Sans clients prêts à payer, l'activité s'arrête." },
          { txt: "Le profit est garanti dès la création de l'entreprise.", rep: false, expl: "Il récompense un risque : il peut aussi y avoir des pertes." },
          { txt: "Une partie du profit peut être réinvestie dans l'entreprise.", rep: true, expl: "Le réinvestissement permet d'acheter du matériel et de grandir." },
          { txt: "L'entrepreneur n'a aucun rôle dans l'organisation du travail.", rep: false, expl: "Il répartit les tâches et coordonne l'équipe." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Donne la définition de l'entrepreneur.", r: "L'entrepreneur est la personne qui prend l'initiative de créer ou de diriger une entreprise, réunit les moyens de production et assume les risques." },
          { q: "Comment calcule-t-on un profit ?", r: "Le profit se calcule en retranchant l'ensemble des charges des recettes de l'entreprise." },
          { q: "Cite deux risques pris par l'entrepreneur.", r: "Le risque commercial, si les clients n'achètent pas, et le risque de coût, si le prix des matières premières augmente." },
          { q: "Que peut faire l'entrepreneur du profit réalisé ?", r: "Il peut en garder une part pour vivre, en réinvestir une autre pour développer l'entreprise et en conserver une réserve pour les imprévus." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "L'excédent des recettes sur les charges s'appelle le", suite: "profit" },
          { debut: "L'ensemble des sommes encaissées grâce aux ventes forme les", suite: "recettes" },
          { debut: "Les salaires, le loyer et les achats sont des", suite: "charges" },
          { debut: "Une entreprise ne survit que si elle répond à un", suite: "besoin" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 16 — RAS 3
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Mobiliser les ressources humaines, matérielles et financières",
      theme: "Entreprise et production",
      ras: "Déterminer le rôle de l'entrepreneur",
      valeurs: "Responsabilité, Culture de l'excellence",
      objectif: "distinguer les ressources humaines, matérielles et financières mobilisées pour produire et vendre",
      supportMeta: "Fiche-ressources d'une petite entreprise, documents, cahier",
      revision: [
        ["Comment calcule-t-on un profit ?", "En retranchant l'ensemble des charges des recettes."],
        ["Cite deux risques pris par l'entrepreneur.", "Le risque commercial et le risque de hausse des coûts."],
      ],
      mise: [
        "Une entreprise peut-elle fonctionner seulement avec de bonnes idées ?",
        "Non : il lui faut aussi des personnes, du matériel et de l'argent pour démarrer et durer.",
      ],
      observation: "la fiche-ressources d'une petite entreprise distribuée en classe",
      observationSupport: "Fiche-ressources (emplois, matériel, argent) d'une petite entreprise, tableau préétabli",
      technAna: "Étude de cas et travail de groupe",
      qa: [
        ["Quelles sont les trois grandes ressources d'une entreprise ?", "Les ressources humaines, les ressources matérielles et les ressources financières."],
        ["Qu'entend-on par ressources humaines ?", "Les personnes qui travaillent dans l'entreprise, avec leurs compétences, leur expérience et leur capacité à travailler en équipe."],
        ["Qu'entend-on par ressources matérielles ?", "Les moyens physiques : local, machines, outils, véhicules, matières premières, stock."],
        ["Qu'entend-on par ressources financières ?", "L'argent dont dispose l'entreprise : apport personnel, emprunt bancaire, épargne, tontine, revenus des ventes, subventions."],
        ["Pourquoi les ressources doivent-elles être adaptées les unes aux autres ?", "Parce qu'une machine sans personne formée, ou une équipe sans matériel, ne produit rien : les moyens doivent être cohérents entre eux."],
        ["Comment une petite entreprise peut-elle se financer au démarrage ?", "Par l'épargne personnelle, l'aide familiale, une tontine, un microcrédit, un emprunt bancaire ou une subvention."],
        ["Quelles sont les ressources mobilisées pour la commercialisation ?", "Un point de vente ou un étal, un moyen de transport, un stock présentable, une enseigne, et du temps passé avec les clients."],
      ],
      synthese: "Donc, produire et vendre suppose de mobiliser trois types de ressources : des ressources humaines, c'est-à-dire des personnes compétentes et organisées ; des ressources matérielles, c'est-à-dire des locaux, des équipements et des matières premières ; des ressources financières, c'est-à-dire l'argent nécessaire pour démarrer, acheter et attendre les paiements. Le rôle de l'entrepreneur est de les réunir et de les garder cohérentes.",
      motsCles: ["ressources humaines", "ressources matérielles", "ressources financières", "compétences", "microcrédit", "commercialisation"],
      contenu: [
        {
          sousTitre: "1. Les ressources humaines",
          texte: "Les ressources humaines sont les personnes qui travaillent dans l'entreprise. Elles en sont la ressource la plus décisive, car une machine ne remplace ni le jugement ni le sens du client.",
          liste: [
            "Les compétences techniques : savoir produire, réparer, compter, vendre.",
            "L'expérience : la connaissance du métier et des fournisseurs.",
            "Les qualités relationnelles : accueil du client, travail en équipe, ponctualité.",
            "La formation : apprentissage sur le tas, stage, formation professionnelle.",
          ],
        },
        {
          sousTitre: "2. Les ressources matérielles",
          texte: "Les ressources matérielles sont les biens durables et les matières premières nécessaires à l'activité.",
          liste: [
            "Le local : atelier, boutique, étal, entrepôt.",
            "Les équipements : machines, outils, véhicules, matériel informatique.",
            "Les matières premières et les marchandises : farine, tissu, fruits, pièces détachées.",
            "Les consommables : électricité, eau, carburant, emballages.",
          ],
        },
        {
          sousTitre: "3. Les ressources financières",
          texte: "Les ressources financières sont les sommes dont l'entreprise dispose pour démarrer, fonctionner et se développer. On distingue les ressources propres et les ressources empruntées.",
          liste: [
            "Ressources propres : épargne personnelle, apport des associés, bénéfices gardés dans l'entreprise.",
            "Ressources empruntées : emprunt bancaire, microcrédit, crédit fournisseur.",
            "Autres sources : tontine, aide familiale, subvention, apport d'un partenaire.",
            "La trésorerie : l'argent disponible au jour le jour pour payer les charges.",
          ],
        },
        {
          sousTitre: "4. Produire et vendre : des ressources complémentaires",
          texte: "Certaines ressources servent à produire, d'autres à vendre. Une entreprise qui ne prévoit que la production se retrouve avec des marchandises invendues.",
          liste: [
            "Pour produire : atelier, matières premières, personnel de fabrication.",
            "Pour vendre : point de vente, stock présentable, transport, emballage, relation avec les clients.",
            "Pour durer : comptabilité simple, suivi des dépenses et des encaissements.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Une petite unité de transformation de tomates en concentré :",
          liste: [
            "Ressources humaines : quatre personnes, dont une formée à la transformation et au contrôle de qualité.",
            "Ressources matérielles : un local carrelé, deux bassins, une étuve, des bocaux, un vélo pour la livraison.",
            "Ressources financières : 300 000 ariary d'épargne personnelle, un microcrédit de 500 000 ariary, et les recettes des premières ventes.",
            "Commercialisation : un étal au marché, des bocaux étiquetés, des livraisons deux fois par semaine chez trois boutiquiers.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Les ressources humaines désignent…", opts: ["les personnes qui travaillent dans l'entreprise", "les machines", "l'argent disponible"], ok: 0, expl: "Ce sont les compétences et le travail des personnes." },
          { q: "Un microcrédit est…", opts: ["un petit prêt accordé à un entrepreneur", "un impôt", "un salaire"], ok: 0, expl: "Il permet de financer une petite activité." },
          { q: "Parmi les ressources matérielles, on trouve…", opts: ["les équipements et les matières premières", "les clients", "les bénéfices"], ok: 0, expl: "Locaux, machines et matières premières sont des moyens physiques." },
          { q: "La trésorerie est…", opts: ["l'argent disponible au jour le jour", "le stock de marchandises", "le nombre de salariés"], ok: 0, expl: "Elle permet de payer les charges courantes." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une entreprise peut survivre sans ressources financières.", rep: false, expl: "Il faut de l'argent pour démarrer, acheter et attendre les paiements." },
          { txt: "Le point de vente est une ressource de la commercialisation.", rep: true, expl: "Étal, boutique et transport servent à vendre, pas à produire." },
          { txt: "Former le personnel est une dépense inutile.", rep: false, expl: "La formation augmente la productivité et la qualité." },
          { txt: "La tontine est une source de financement possible pour une petite activité.", rep: true, expl: "L'épargne collective permet de réunir un capital de départ." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite les trois grandes ressources mobilisées par une entreprise.", r: "Les ressources humaines, les ressources matérielles et les ressources financières." },
          { q: "Donne deux exemples de ressources matérielles.", r: "Un atelier et une machine à coudre, ou encore des matières premières et un véhicule." },
          { q: "Cite deux façons de financer le démarrage d'une petite entreprise.", r: "L'épargne personnelle et le microcrédit (on peut aussi citer la tontine, l'aide familiale ou l'emprunt bancaire)." },
          { q: "Pourquoi les ressources de production et de commercialisation doivent-elles être prévues ensemble ?", r: "Parce que produire sans moyen de vendre laisse des marchandises invendues et fait perdre de l'argent." },
        ]},
        { type: "appariement", consigne: "Relie chaque ressource à sa catégorie.", pointsPar: 1, items: [
          { g: ["Le savoir-faire d'une couturière", "Une machine à coudre", "Un emprunt bancaire", "Un étal au marché"], d: ["Ressource matérielle", "Ressource financière", "Ressource matérielle de commercialisation", "Ressource humaine"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
    },
  ],
};

module.exports = U;
