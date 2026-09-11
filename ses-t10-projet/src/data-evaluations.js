// ============================================================
// data-evaluations.js — séances de révision et sujets d'examen
// 1 révision + 1 sujet d'examen T10 par unité (7 unités)
// ============================================================

const revisions = {
  I: {
    titre: "Révision — Unité I : Orientation scolaire et professionnelle",
    tableau: [
      ["Diplôme", "Document officiel attestant la réussite à un examen et un niveau d'études ; il ouvre l'accès à l'emploi sans le garantir."],
      ["Emploi", "Activité professionnelle rémunérée : travail salarié (pour un employeur) ou travail indépendant (à son compte)."],
      ["Formation et compétences", "Ce que l'on sait faire : elles complètent le diplôme et sont exigées par les employeurs."],
      ["Exigences du monde du travail", "Ponctualité, discipline, respect des consignes, travail en équipe, langues, compétences numériques, autonomie."],
      ["Série L", "Langues, littérature, philosophie, histoire-géographie → enseignement, droit, journalisme, communication, culture."],
      ["Série S", "Mathématiques, sciences physiques, SVT → médecine, ingénierie, agronomie, informatique, recherche."],
      ["Série OSE", "Sciences économiques et sociales, droit, gestion → gestion, comptabilité, commerce, banque, entrepreneuriat."],
      ["Projet d'orientation", "Quatre étapes : se connaître, s'informer, décider, s'engager — en tenant compte des besoins de l'économie."],
      ["Secteurs porteurs", "Agriculture et élevage, santé, enseignement, bâtiment et énergie, numérique, tourisme et artisanat."],
    ],
    questions: [
      ["Quelle est la différence entre un diplôme et un emploi ?", "Le diplôme atteste un niveau d'études et de compétences ; l'emploi est l'activité rémunérée que l'on occupe ensuite. Le diplôme facilite l'accès à l'emploi mais ne le garantit pas."],
      ["Cite trois exigences du monde du travail.", "La ponctualité, la discipline et l'esprit d'équipe (on peut aussi citer la maîtrise des langues, des outils numériques et l'autonomie)."],
      ["Quelles sont les matières dominantes et deux débouchés de la série OSE ?", "Les matières dominantes sont les sciences économiques et sociales, le droit et la gestion ; les débouchés sont la comptabilité et la gestion d'entreprise (ou la banque, le commerce, l'entrepreneuriat)."],
      ["Quelles sont les quatre étapes d'un projet d'orientation ?", "Se connaître, s'informer, décider et s'engager."],
      ["Pourquoi faut-il tenir compte des besoins de l'économie dans son projet d'orientation ?", "Parce que les secteurs qui recrutent offrent plus de chances de trouver un emploi ou de créer sa propre activité : agriculture, santé, enseignement, bâtiment, numérique, tourisme."],
    ],
  },

  II: {
    titre: "Révision — Unité II : Introduction à l'étude des sciences économiques et sociales",
    tableau: [
      ["Science", "Démarche qui observe, questionne, formule une hypothèse et vérifie avant d'expliquer."],
      ["Économie", "Étude de la manière dont une société produit, répartit et consomme des ressources limitées."],
      ["Sociologie", "Étude de la vie des groupes humains, des normes, des valeurs et de la socialisation."],
      ["Sciences politiques", "Étude du pouvoir, des institutions et de la manière dont les décisions sont prises."],
      ["Droit", "Ensemble des règles écrites qui organisent la vie en société et protègent les libertés."],
      ["Organisation", "Groupe structuré de personnes et de moyens qui poursuit un objectif commun."],
      ["Circuit économique", "Ménages, entreprises et administrations : la dépense de l'un est le revenu de l'autre."],
      ["Services publics", "École, santé, sécurité, routes : produits non marchands financés par l'impôt."],
    ],
    questions: [
      ["Donne la définition de l'économie.", "L'économie étudie comment une société produit, répartit et consomme des ressources limitées pour satisfaire ses besoins."],
      ["Qu'est-ce qui distingue une opinion d'une démarche scientifique ?", "L'opinion n'a pas besoin de preuves ; la démarche scientifique observe, mesure et vérifie avant de conclure."],
      ["Cite les trois acteurs du circuit économique et leur rôle.", "Les ménages offrent du travail et consomment ; les entreprises produisent et vendent ; les administrations rendent des services publics financés par l'impôt."],
      ["Qu'est-ce qui fait tenir une société ensemble ?", "Des règles partagées, des valeurs communes et des institutions comme la famille, l'école et la justice."],
      ["Montre, par un exemple, qu'un fait économique a aussi une dimension sociale.", "Une entreprise qui ferme prive des familles de revenus : la décision est économique, la conséquence est sociale."],
    ],
  },

  III: {
    titre: "Révision — Unité III : Entreprise et production",
    tableau: [
      ["Entreprise privée", "Organisation à but lucratif : elle vend sa production pour réaliser un bénéfice."],
      ["Administration", "Organisation qui rend un service public financé par l'impôt, sans rechercher de profit."],
      ["Économie sociale", "Association, coopérative et mutuelle : production pour l'utilité des membres."],
      ["Bien et service", "Le bien est matériel et stockable ; le service est une activité rendue, non stockable."],
      ["Production marchande", "Production vendue sur un marché à un prix qui couvre les coûts."],
      ["Secteur formel", "Activités déclarées : impôts payés, contrats de travail, protection sociale."],
      ["Secteur informel", "Activités non déclarées : revenus immédiats, mais précarité et absence de crédit."],
      ["Facteurs de production", "Le travail et le capital, avec les ressources naturelles ; substituables et complémentaires."],
      ["Productivité", "Rapport entre la quantité produite et les moyens utilisés ; le progrès technique l'augmente."],
      ["Profit", "Excédent des recettes sur les charges ; il récompense le risque pris par l'entrepreneur."],
    ],
    questions: [
      ["Quelle différence y a-t-il entre une entreprise privée et une administration ?", "L'entreprise vend pour réaliser un bénéfice ; l'administration rend un service public financé par l'impôt."],
      ["Qu'est-ce que l'économie sociale ?", "L'économie sociale rassemble les associations, coopératives et mutuelles, qui produisent pour l'utilité de leurs membres sans rechercher d'abord le profit."],
      ["Donne la différence entre un bien et un service, avec un exemple chacun.", "Le riz est un bien, matériel et stockable ; la consultation médicale est un service, rendu sans stockage possible."],
      ["Cite deux limites du secteur informel pour celui qui l'exerce.", "L'absence de protection sociale et l'impossibilité d'obtenir un crédit pour se développer."],
      ["Comment calcule-t-on un profit ?", "En retranchant l'ensemble des charges des recettes : profit = recettes moins charges."],
    ],
  },

  IV: {
    titre: "Révision — Unité IV : Revenu et consommation",
    tableau: [
      ["Ménage", "Ensemble des personnes qui partagent un logement et mettent leurs ressources en commun."],
      ["Revenu primaire", "Revenu reçu en participant à la production : salaire, revenu mixte, revenu du patrimoine."],
      ["Revenu de transfert", "Somme reçue sans contrepartie de production : pension, allocation, bourse."],
      ["Revenu disponible", "Ce qui reste après impôts et cotisations, pour consommer et épargner."],
      ["Consommation", "Utilisation de biens et de services pour satisfaire un besoin : individuelle, collective ou ostentatoire."],
      ["Épargne", "Part du revenu non consommée : placement ou thésaurisation."],
      ["Pyramide de Maslow", "Physiologique, sécurité, appartenance, estime, accomplissement : la base d'abord."],
      ["Pouvoir d'achat", "Quantité de biens qu'un revenu permet d'acheter compte tenu des prix."],
      ["Effet d'imitation", "Consommer comme son groupe de référence ; effet de distinction : se démarquer par l'objet rare."],
    ],
    questions: [
      ["Quelle différence y a-t-il entre un revenu primaire et un revenu de transfert ?", "Le revenu primaire rémunère une participation à la production ; le revenu de transfert est reçu sans contrepartie productive."],
      ["Qu'est-ce que le pouvoir d'achat ?", "C'est la quantité de biens et de services qu'un revenu permet d'acheter compte tenu du niveau des prix."],
      ["Cite les cinq niveaux de la pyramide de Maslow.", "Les besoins physiologiques, la sécurité, l'appartenance, l'estime et l'accomplissement de soi."],
      ["Quelle différence y a-t-il entre placement et thésaurisation ?", "Le placement confie l'argent à un organisme ou l'investit pour le faire fructifier ; la thésaurisation le conserve sans rapport."],
      ["Cite deux déterminants socioculturels de la consommation.", "L'âge et le milieu social (ou le genre, le lieu d'habitation, le niveau d'instruction)."],
    ],
  },

  V: {
    titre: "Révision — Unité V : Marché et prix",
    tableau: [
      ["Marché", "Lieu, physique ou non, de rencontre entre l'offre et la demande."],
      ["Demande", "Quantité que les acheteurs veulent et peuvent acheter à un prix donné."],
      ["Offre", "Quantité que les vendeurs veulent et peuvent vendre à un prix donné."],
      ["Loi de la demande", "Quand le prix monte, la quantité demandée baisse ; quand il baisse, elle augmente."],
      ["Loi de l'offre", "Quand le prix monte, la quantité offerte augmente ; quand il baisse, elle diminue."],
      ["Prix d'équilibre", "Prix qui égalise quantité offerte et quantité demandée : ni pénurie ni surplus."],
      ["Concurrence pure et parfaite", "Atomicité, homogénéité, libre entrée, transparence et mobilité."],
      ["Monopole / duopole / oligopole", "Un seul offreur / deux offreurs / quelques offreurs dominants."],
      ["Entente", "Accord entre offreurs sur les prix ou les quantités : interdit par le droit de la concurrence."],
    ],
    questions: [
      ["Énonce la loi de la demande et la loi de l'offre.", "Quand le prix monte, la demande baisse et l'offre augmente ; quand le prix baisse, la demande monte et l'offre diminue."],
      ["Qu'est-ce que le prix d'équilibre ?", "C'est le prix pour lequel la quantité offerte est égale à la quantité demandée : le marché est alors sans pénurie ni surplus."],
      ["Que devient le prix d'équilibre si une mauvaise récolte réduit l'offre ?", "L'offre diminue : le prix d'équilibre monte et la quantité échangée diminue."],
      ["Cite trois conditions de la concurrence pure et parfaite.", "L'atomicité, l'homogénéité des produits et la libre entrée (ou la transparence, la mobilité)."],
      ["Quelles sont les conséquences d'une entente pour les consommateurs ?", "Des prix plus élevés et un choix réduit, donc une baisse du pouvoir d'achat."],
    ],
  },

  VI: {
    titre: "Révision — Unité VI : Individu et société",
    tableau: [
      ["Culture", "Ensemble des manières de vivre, de penser et de créer d'un groupe."],
      ["Pratique culturelle", "Activité par laquelle on exprime ou partage sa culture."],
      ["Catégorie socio-professionnelle", "Groupe occupant une position proche dans l'activité économique."],
      ["Culture de masse", "Contenus diffusés à un très large public par les médias."],
      ["Mode de vie", "Manière habituelle dont un groupe organise sa vie quotidienne."],
      ["Socialisation", "Apprentissage, tout au long de la vie, des manières de vivre en société."],
      ["Norme", "Règle de conduite attendue par le groupe ; la valeur est le principe qu'elle traduit."],
      ["Acteur social", "Individu qui a intériorisé les règles et peut agir dans la société."],
      ["Socialisation différentielle", "Socialisation qui varie selon le groupe social, la région et le genre."],
    ],
    questions: [
      ["Donne la définition de la culture et celle d'une pratique culturelle.", "La culture est l'ensemble des manières de vivre et de penser d'un groupe ; une pratique culturelle est l'activité concrète qui l'exprime."],
      ["Qu'est-ce que la culture de masse ?", "C'est l'ensemble des productions culturelles diffusées à un très grand nombre de personnes par les médias et les industries culturelles."],
      ["Quelle différence y a-t-il entre une norme et une valeur ?", "La valeur est le principe jugé important par le groupe ; la norme est la règle concrète qui traduit ce principe au quotidien."],
      ["Cite quatre agents de socialisation.", "La famille, l'école, les pairs ou amis, et les institutions religieuses (auxquels s'ajoutent les médias)."],
      ["Qu'est-ce que la socialisation différentielle ?", "C'est le fait que les contenus transmis varient selon le groupe social, la région et le genre, produisant des manières d'agir différentes."],
    ],
  },

  VII: {
    titre: "Révision — Unité VII : Sciences politiques et droit",
    tableau: [
      ["Pouvoir politique", "Pouvoir de décider pour toute une société et de faire appliquer les décisions."],
      ["État", "Institutions qui exercent le pouvoir sur une population et un territoire."],
      ["Éléments de l'État", "Population, territoire, gouvernement et souveraineté."],
      ["Nation", "Communauté partageant histoire, langue, culture et conscience d'appartenance."],
      ["Puissance publique", "Capacité de l'État de se faire obéir : administration, force publique, justice."],
      ["Légitimité", "Reconnaissance par la population du droit de commander."],
      ["Souveraineté", "Caractère suprême du pouvoir : intérieure sur le territoire, extérieure face aux autres États."],
      ["Droit", "Règles générales, écrites et sanctionnées, qui organisent la vie en société."],
      ["Fonctions du droit", "Garantir les libertés, organiser la vie en société, pacifier les conflits."],
    ],
    questions: [
      ["Cite les quatre éléments constitutifs de l'État.", "Une population, un territoire délimité par des frontières, un gouvernement organisé et la souveraineté."],
      ["Quelle différence y a-t-il entre l'État et la nation ?", "L'État est une organisation de pouvoir sur un territoire ; la nation est une communauté liée par l'histoire, la langue et la culture."],
      ["Qu'est-ce que la légitimité, et en quoi diffère-t-elle de la légalité ?", "La légitimité est la reconnaissance du droit de commander ; la légalité est la conformité aux règles de droit en vigueur."],
      ["Qu'est-ce que la souveraineté extérieure ?", "C'est l'indépendance de l'État vis-à-vis des autres États, qui lui permet de conduire librement sa politique étrangère."],
      ["Cite les trois fonctions du droit et illustre la pacification.", "Garantir les libertés, organiser la vie en société et pacifier les conflits : la pacification permet, par exemple, de trancher un litige de bornage au tribunal plutôt que par la violence."],
    ],
  },
};

const examens = {
  I: {
    titre: "Sujet d'examen T10 — Unité I : Orientation scolaire et professionnelle",
    exercices: [
      { type: "qcm", consigne: "Choisis la bonne réponse en écrivant la lettre correspondante.", pointsPar: 1, items: [
        { q: "Un diplôme est…", opts: ["un contrat de travail", "un document officiel attestant un niveau d'études", "une fiche de paie"], ok: 1, expl: "Il atteste la réussite à un examen et un niveau d'études." },
        { q: "La série qui prépare le mieux aux métiers de la comptabilité est la série…", opts: ["L", "S", "OSE"], ok: 2, expl: "La série OSE couvre l'économie, la gestion et la comptabilité." },
        { q: "La première étape d'un projet d'orientation est…", opts: ["se connaître", "s'engager", "chercher un employeur"], ok: 0, expl: "Il faut d'abord repérer ses intérêts et ses capacités." },
        { q: "Parmi les secteurs qui ont d'importants besoins à Madagascar, on trouve…", opts: ["uniquement la pêche industrielle", "l'agriculture, la santé et l'enseignement", "aucun secteur, le pays n'a plus de besoins"], ok: 1, expl: "Agriculture, santé et enseignement figurent parmi les secteurs les plus demandeurs." },
      ]},
      { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
        { txt: "Le diplôme garantit automatiquement l'obtention d'un emploi.", rep: false, expl: "Il facilite l'accès à l'emploi, mais comptent aussi la formation, l'expérience et les qualités personnelles." },
        { txt: "Un travailleur indépendant exerce son activité à son propre compte.", rep: true, expl: "Artisan, commerçant, exploitant agricole ou entrepreneur." },
        { txt: "Les compétences numériques sont aujourd'hui exigées dans de nombreux emplois de bureau.", rep: true, expl: "Traitement de texte, tableur, messagerie et recherche d'informations." },
        { txt: "Le choix d'une série au lycée est irréversible dans tous les cas.", rep: false, expl: "Des passerelles et des réorientations restent possibles, surtout après le baccalauréat." },
      ]},
      { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
        { q: "Donne la définition d'un emploi.", r: "Un emploi est une activité professionnelle occupée par une personne et rémunérée." },
        { q: "Cite deux exigences du monde du travail et explique-les brièvement.", r: "La ponctualité : arriver à l'heure chaque jour ; et l'esprit d'équipe : savoir travailler et communiquer avec les collègues pour atteindre un objectif commun." },
        { q: "Cite deux débouchés de la série S.", r: "Deux débouchés de la série S sont les études de médecine et les études d'ingénierie (ou d'agronomie, d'informatique, de recherche)." },
      ]},
      { type: "appariement", consigne: "Relie chaque série aux études qu'elle prépare.", pointsPar: 1, items: [
        { g: ["Série L", "Série S", "Série OSE", "Série L (2e exemple)"], d: ["Ingénieur en travaux publics", "Comptable dans une entreprise", "Magistrat ou avocat", "Professeur de lettres"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
      ]},
      { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
        { debut: "Le diplôme atteste la réussite à un examen et un niveau", suite: "d'études" },
        { debut: "Le salarié travaille pour un employeur et reçoit un", suite: "salaire" },
        { debut: "Les quatre étapes du projet d'orientation sont : se connaître, s'informer, décider et", suite: "s'engager" },
        { debut: "Choisir un secteur qui recrute augmente les chances de trouver un", suite: "emploi" },
      ]},
    ],
  },

  II: {
    titre: "Sujet d'examen T10 — Unité II : Introduction à l'étude des SES",
    exercices: [
      { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
        { q: "L'économie étudie…", opts: ["la production, la répartition et la consommation des richesses", "les volcans", "la conjugaison"], ok: 0, expl: "Elle porte sur l'usage des ressources limitées d'une société." },
        { q: "La sociologie étudie…", opts: ["les marchés financiers", "la vie des groupes humains", "les minéraux"], ok: 1, expl: "Familles, écoles, quartiers, normes et valeurs sont ses objets." },
        { q: "Parmi les acteurs du circuit économique, on trouve…", opts: ["les ménages, les entreprises et les administrations", "uniquement les banques", "uniquement les touristes"], ok: 0, expl: "La dépense de l'un est le revenu de l'autre." },
        { q: "Les services publics sont financés principalement par…", opts: ["l'impôt", "la loterie", "les dons"], ok: 0, expl: "L'impôt finance l'école, la santé et la sécurité." },
      ]},
      { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
        { txt: "Une science se contente d'opinions personnelles.", rep: false, expl: "Elle observe, mesure et vérifie avant d'expliquer." },
        { txt: "Une coopérative appartient à l'économie sociale.", rep: true, expl: "Association, coopérative et mutuelle poursuivent un but d'utilité pour leurs membres." },
        { txt: "Économie et société fonctionnent de façon totalement séparée.", rep: false, expl: "Les décisions économiques ont des effets sociaux, et inversement." },
        { txt: "Une organisation fonctionne avec un objectif, des rôles et des règles.", rep: true, expl: "C'est la logique commune à toute organisation." },
      ]},
      { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
        { q: "Donne la définition d'une organisation.", r: "Une organisation est un groupe de personnes structuré et doté de moyens, qui poursuit un objectif commun." },
        { q: "Explique le principe du circuit économique.", r: "Chaque dépense de l'un devient un revenu pour l'autre : les acteurs sont interdépendants." },
        { q: "Cite deux raisons d'étudier les sciences économiques et sociales.", r: "Comprendre le monde réel et former un citoyen libre et responsable (ou développer l'esprit critique, préparer un métier)." },
      ]},
      { type: "appariement", consigne: "Relie chaque acteur à son rôle.", pointsPar: 1, items: [
        { g: ["Ménages", "Entreprises", "Administrations", "École"], d: ["Produire des biens et des services à vendre", "Rendre un service public financé par l'impôt", "Institution qui assure la socialisation", "Offrir du travail et consommer"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
      ]},
      { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
        { debut: "Les ménages fournissent du travail et", suite: "consomment" },
        { debut: "Les entreprises produisent et", suite: "vendent" },
        { debut: "L'impôt finance les services", suite: "publics" },
        { debut: "La socialisation est assurée notamment par la famille et l'", suite: "école" },
      ]},
    ],
  },

  III: {
    titre: "Sujet d'examen T10 — Unité III : Entreprise et production",
    exercices: [
      { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
        { q: "Une coopérative appartient…", opts: ["à l'État", "à ses membres", "à un seul propriétaire"], ok: 1, expl: "Ses membres sont à la fois producteurs et décideurs." },
        { q: "Une consultation médicale est…", opts: ["un bien", "un service", "un impôt"], ok: 1, expl: "C'est une activité rendue, non stockable." },
        { q: "Une machine à coudre est un facteur…", opts: ["de travail", "de capital", "de transfert"], ok: 1, expl: "C'est un moyen durable de production." },
        { q: "Le profit se calcule par…", opts: ["recettes moins charges", "charges moins recettes", "recettes plus charges"], ok: 0, expl: "C'est l'excédent des recettes sur l'ensemble des charges." },
      ]},
      { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
        { txt: "Une administration recherche d'abord un bénéfice.", rep: false, expl: "Elle rend un service public financé par l'impôt." },
        { txt: "Le secteur informel occupe une place importante dans l'économie.", rep: true, expl: "Il donne travail et revenus à une grande partie de la population active." },
        { txt: "La productivité ne dépend que des machines.", rep: false, expl: "La formation, l'organisation et l'entretien comptent autant." },
        { txt: "Un four sans boulanger illustre la complémentarité des facteurs.", rep: true, expl: "Les facteurs ne produisent rien séparément." },
      ]},
      { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
        { q: "Donne la définition du secteur informel.", r: "Le secteur informel est l'ensemble des activités non déclarées, souvent de petite taille et sans protection sociale." },
        { q: "Explique la différence entre substituabilité et complémentarité des facteurs.", r: "La substituabilité permet de remplacer un facteur par un autre ; la complémentarité signifie qu'ils doivent être réunis pour produire." },
        { q: "Cite deux types de ressources mobilisées par l'entrepreneur.", r: "Les ressources humaines et les ressources financières (ou les ressources matérielles)." },
      ]},
      { type: "appariement", consigne: "Relie chaque organisation à son objectif.", pointsPar: 1, items: [
        { g: ["Entreprise privée", "Administration", "Mutuelle", "Association"], d: ["Intérêt général financé par l'impôt", "Couvrir ses membres contre un risque", "Projet non lucratif", "Réaliser un bénéfice"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
      ]},
      { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
        { debut: "Un objet matériel que l'on peut stocker est un", suite: "bien" },
        { debut: "Une activité rendue à quelqu'un est un", suite: "service" },
        { debut: "Produire plus avec les mêmes moyens, c'est augmenter la", suite: "productivité" },
        { debut: "Les ressources humaines sont les personnes et leurs", suite: "compétences" },
      ]},
    ],
  },

  IV: {
    titre: "Sujet d'examen T10 — Unité IV : Revenu et consommation",
    exercices: [
      { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
        { q: "Une pension de retraite est un revenu…", opts: ["primaire", "de transfert", "mixte"], ok: 1, expl: "Elle est versée sans contrepartie de production." },
        { q: "Le revenu disponible est égal aux revenus reçus…", opts: ["moins les impôts et cotisations", "plus les impôts", "moins la consommation"], ok: 0, expl: "C'est ce qui reste après les prélèvements obligatoires." },
        { q: "Garder des billets chez soi est…", opts: ["un placement", "une thésaurisation", "un investissement productif"], ok: 1, expl: "L'argent est conservé sans rapporter d'intérêt." },
        { q: "Au sommet de la pyramide de Maslow se trouve le besoin…", opts: ["d'accomplissement de soi", "physiologique", "de sécurité"], ok: 0, expl: "C'est réaliser ce dont on est capable." },
      ]},
      { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
        { txt: "Une route éclairée est une consommation collective.", rep: true, expl: "Tout le monde en profite en même temps, sans exclusion." },
        { txt: "Quand les prix montent plus vite que les revenus, le pouvoir d'achat augmente.", rep: false, expl: "Il baisse : le ménage peut acheter moins avec son revenu." },
        { txt: "Deux ménages au revenu identique peuvent consommer différemment.", rep: true, expl: "L'âge, le lieu de vie et la culture orientent la dépense." },
        { txt: "L'effet de distinction consiste à imiter son groupe.", rep: false, expl: "Imiter relève de l'effet d'imitation ; se distinguer, de l'effet de distinction." },
      ]},
      { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
        { q: "Donne la définition de l'épargne.", r: "L'épargne est la part du revenu disponible qui n'est pas consommée et qui est mise de côté pour l'avenir." },
        { q: "Explique ce qu'est l'effet de substitution.", r: "C'est le remplacement d'un bien devenu trop cher par un autre moins coûteux, comme le poisson à la place de la viande." },
        { q: "Cite deux déterminants socioculturels de la consommation.", r: "L'âge et le milieu social (ou le genre, le lieu d'habitation, le niveau d'instruction)." },
      ]},
      { type: "appariement", consigne: "Relie chaque somme ou dépense à sa catégorie.", pointsPar: 1, items: [
        { g: ["Salaire", "Allocation familiale", "Achat d'un objet de marque pour être vu", "Route publique"], d: ["Revenu de transfert", "Consommation ostentatoire", "Consommation collective", "Revenu primaire"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
      ]},
      { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
        { debut: "Le pouvoir d'achat dépend du revenu et du niveau des", suite: "prix" },
        { debut: "La part du revenu non dépensée forme l'", suite: "épargne" },
        { debut: "Se nourrir et dormir sont des besoins", suite: "physiologiques" },
        { debut: "Consommer comme son groupe de référence est l'effet d'", suite: "imitation" },
      ]},
    ],
  },

  V: {
    titre: "Sujet d'examen T10 — Unité V : Marché et prix",
    exercices: [
      { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
        { q: "Quand le prix d'un bien augmente, la quantité demandée…", opts: ["diminue", "augmente", "reste toujours identique"], ok: 0, expl: "Les acheteurs réduisent leurs achats ou se reportent sur un autre produit." },
        { q: "Le prix d'équilibre est le prix pour lequel…", opts: ["l'offre égale la demande", "l'offre dépasse la demande", "la demande est nulle"], ok: 0, expl: "C'est le prix qui vide le marché." },
        { q: "Un marché avec un seul offreur est…", opts: ["un monopole", "un duopole", "un oligopole"], ok: 0, expl: "Le monopole ne compte qu'un offreur." },
        { q: "Une entente entre offreurs est…", opts: ["interdite par le droit de la concurrence", "obligatoire", "toujours tolérée"], ok: 0, expl: "Elle fausse le marché au détriment des consommateurs." },
      ]},
      { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
        { txt: "Un prix trop bas provoque une pénurie.", rep: true, expl: "La demande dépasse l'offre disponible à ce prix." },
        { txt: "La courbe d'offre est descendante.", rep: false, expl: "Elle est ascendante : un prix élevé incite à offrir davantage." },
        { txt: "En concurrence pure et parfaite, un vendeur peut imposer son prix.", rep: false, expl: "Aucun participant n'est assez gros pour imposer un prix." },
        { txt: "Une mauvaise récolte fait monter le prix d'équilibre.", rep: true, expl: "L'offre diminue, le prix monte." },
      ]},
      { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
        { q: "Donne la définition de la demande.", r: "La demande est la quantité d'un bien que les acheteurs sont prêts et capables d'acheter à un prix donné." },
        { q: "Cite trois conditions de la concurrence pure et parfaite.", r: "L'atomicité, l'homogénéité des produits et la libre entrée (ou la transparence, la mobilité)." },
        { q: "Cite deux conséquences d'une entente pour les consommateurs.", r: "Des prix plus élevés et un choix réduit, donc une baisse du pouvoir d'achat." },
      ]},
      { type: "appariement", consigne: "Relie chaque situation de marché à sa dénomination.", pointsPar: 1, items: [
        { g: ["Un seul offreur", "Deux offreurs", "Quelques offreurs dominants", "Une multitude d'offreurs"], d: ["Duopole", "Oligopole", "Concurrence", "Monopole"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
      ]},
      { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
        { debut: "L'égalité entre quantité offerte et quantité demandée définit le prix d'", suite: "équilibre" },
        { debut: "Quand le prix monte, la quantité offerte", suite: "augmente" },
        { debut: "Un prix trop élevé laisse un surplus", suite: "invendu" },
        { debut: "L'obstacle qui empêche un concurrent d'arriver est une barrière à l'", suite: "entrée" },
      ]},
    ],
  },

  VI: {
    titre: "Sujet d'examen T10 — Unité VI : Individu et société",
    exercices: [
      { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
        { q: "La culture est…", opts: ["l'ensemble des manières de vivre et de penser d'un groupe", "uniquement ses musées", "son revenu"], ok: 0, expl: "Langue, coutumes, cuisine, croyances et arts en font partie." },
        { q: "Un média de masse s'adresse à un public…", opts: ["nombreux et dispersé", "d'une seule famille", "d'un seul village"], ok: 0, expl: "C'est ce qui le distingue d'un spectacle local." },
        { q: "Une norme est…", opts: ["une règle de conduite attendue par le groupe", "un prix", "un métier"], ok: 0, expl: "Elle peut être écrite ou implicite." },
        { q: "Le premier agent de socialisation est…", opts: ["la famille", "l'entreprise", "le marché"], ok: 0, expl: "Elle transmet le langage, la politesse et les interdits fondamentaux." },
      ]},
      { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
        { txt: "La socialisation s'arrête à la fin de l'enfance.", rep: false, expl: "Elle continue à l'adolescence, au travail et tout au long de la vie." },
        { txt: "La culture de masse peut uniformiser les goûts.", rep: true, expl: "La standardisation des contenus est souvent critiquée." },
        { txt: "Une valeur peut se traduire par plusieurs normes.", rep: true, expl: "Le respect des aînés s'exprime autrement en famille, à l'école ou au village." },
        { txt: "La socialisation est identique dans toutes les régions.", rep: false, expl: "Les coutumes et les rythmes de vie varient : c'est la socialisation différentielle." },
      ]},
      { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
        { q: "Donne la définition de la socialisation.", r: "La socialisation est le processus par lequel un individu apprend, tout au long de sa vie, les manières d'agir, de penser et de parler de sa société." },
        { q: "Cite quatre agents de socialisation.", r: "La famille, l'école, les pairs ou amis, et les institutions religieuses (auxquels s'ajoutent les médias)." },
        { q: "Qu'est-ce que la socialisation différentielle ?", r: "C'est le fait que la socialisation varie selon le groupe social, la région et le genre, produisant des manières d'agir différentes." },
      ]},
      { type: "appariement", consigne: "Relie chaque agent à ce qu'il transmet principalement.", pointsPar: 1, items: [
        { g: ["La famille", "L'école", "Les pairs", "Les institutions religieuses"], d: ["Les savoirs et les règles collectives", "Les croyances et les repères moraux", "Les codes du groupe d'âge", "Le langage et la politesse"], pairs: [[0, 3], [1, 0], [2, 2], [3, 1]] },
      ]},
      { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
        { debut: "Une activité qui exprime une culture est une pratique", suite: "culturelle" },
        { debut: "Les horaires, les repas et les loisirs forment un mode de", suite: "vie" },
        { debut: "Ce qu'un groupe juge important et désirable est une", suite: "valeur" },
        { debut: "Un individu qui a intériorisé les règles devient un acteur", suite: "social" },
      ]},
    ],
  },

  VII: {
    titre: "Sujet d'examen T10 — Unité VII : Sciences politiques et droit",
    exercices: [
      { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
        { q: "Parmi les éléments constitutifs de l'État, on trouve…", opts: ["une population, un territoire, un gouvernement et la souveraineté", "uniquement une armée", "uniquement une entreprise"], ok: 0, expl: "Ce sont les quatre éléments retenus par le programme." },
        { q: "La nation se définit surtout par…", opts: ["une histoire, une langue et une culture partagées", "un budget", "un tribunal"], ok: 0, expl: "C'est une communauté de mémoire et d'appartenance." },
        { q: "La légitimité est…", opts: ["la reconnaissance du droit de commander", "l'argent de l'État", "un impôt"], ok: 0, expl: "Un pouvoir légitime est accepté, pas seulement subi." },
        { q: "Parmi les fonctions du droit, on compte…", opts: ["la pacification de la société", "la fixation des salaires par l'État", "le choix des séries"], ok: 0, expl: "Le droit garantit les libertés, organise la vie sociale et pacifie." },
      ]},
      { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
        { txt: "Le territoire d'un État se limite au sol.", rep: false, expl: "Il comprend aussi les eaux intérieures, la mer territoriale et l'espace aérien." },
        { txt: "Des élections régulières contribuent à la légitimité du pouvoir.", rep: true, expl: "Le respect des règles de désignation fonde la reconnaissance." },
        { txt: "La souveraineté extérieure est l'indépendance de l'État face aux autres États.", rep: true, expl: "Elle permet de conduire librement sa politique étrangère." },
        { txt: "Le droit et la morale sont une seule et même chose.", rep: false, expl: "La morale relève de la conscience ; le droit est écrit et sanctionné." },
      ]},
      { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
        { q: "Donne la définition de la puissance publique.", r: "La puissance publique est la capacité de l'État de se faire obéir, grâce à l'administration, à la force publique et à la justice." },
        { q: "Cite les trois fonctions du droit.", r: "Garantir les libertés, organiser la vie en société et pacifier les conflits." },
        { q: "Quelle différence y a-t-il entre légalité et légitimité ?", r: "Est légal ce qui est conforme aux règles de droit ; est légitime ce qui est reconnu comme fondé et acceptable par la société." },
      ]},
      { type: "appariement", consigne: "Relie chaque situation à la fonction du droit correspondante.", pointsPar: 1, items: [
        { g: ["Un tribunal tranche un litige", "La loi protège la liberté d'expression", "Le code de la route organise la circulation", "Une amende sanctionne une infraction"], d: ["Garantir les libertés", "Organiser la vie en société", "Sanctionner la règle", "Pacifier la société"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
      ]},
      { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
        { debut: "Quand un État coïncide avec une nation, on parle d'État-", suite: "nation" },
        { debut: "Le pouvoir suprême de décider de l'État est la", suite: "souveraineté" },
        { debut: "La conformité d'une décision aux règles de droit est la", suite: "légalité" },
        { debut: "Des règles connues à l'avance assurent la sécurité", suite: "juridique" },
      ]},
    ],
  },
};

module.exports = { revisions, examens };
