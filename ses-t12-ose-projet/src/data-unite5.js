// ============================================================
// Unité V — Cohésion et changement social (PE T12 série OSE — 30 heures)
// RAS 1 : Déterminer les éléments qui construisent, renforcent ou fragilisent la cohésion sociale
// RAS 2 : Analyser les relations entre les inégalités et la justice sociale
// Découpage : 13 séances de cours + 1 révision + 1 sujet d'examen
// Valeurs : Vie en harmonie, citoyenneté et patriotisme
// ============================================================

const U = {
  num: "V",
  titre: "Cohésion et changement social",
  ras: "Déterminer les éléments qui construisent, renforcent ou fragilisent la cohésion sociale · Analyser les relations entre les inégalités et la justice sociale",
  valeurs: "Vie en harmonie, citoyenneté et patriotisme",
  duree: "30 heures",
  themes: [
    "Sociologie, groupe social et lien social",
    "La diversité des groupes sociaux et des liens",
    "Les instances d'intégration sociale",
    "La division du travail, fondement du lien social",
    "La solidarité mécanique",
    "La solidarité organique",
    "Solidarité mécanique et sociétés contemporaines",
    "La rupture du lien social : désaffiliation et disqualification",
    "Différence et inégalité",
    "La diversité des inégalités et leur caractère cumulatif",
    "Les formes d'égalité",
    "Les conceptions de la justice sociale",
    "Redistribution, protection sociale et fiscalité",
  ],
  topics: [
    // ---------------------------------------------------------
    // SÉANCE 62 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Sociologie, groupe social et lien social",
      theme: "Cohésion et changement social",
      ras: "Déterminer les éléments qui construisent, renforcent ou fragilisent la cohésion sociale",
      valeurs: "Vie en harmonie, citoyenneté et patriotisme",
      objectif: "découvrir les notions de sociologie, de groupe social et de lien social",
      supportMeta: "Documents, schémas, cahier",
      revision: [
        ["Qu'est-ce qu'une organisation ?", "Un groupe structuré de personnes qui poursuit un but commun."],
        ["Qu'est-ce qu'une association ?", "Un groupement de personnes réunies pour un but autre que le profit."],
      ],
      mise: [
        "Sur une place de village, des voisins se saluent, des enfants jouent, des commerçants servent. Que voit un sociologue ?",
        "Il voit des groupes et des liens : c'est ce tissu de relations qui fait tenir la société.",
      ],
      observation: "la scène de vie collective du village",
      observationSupport: "Illustration de vie collective et documents d'accompagnement",
      technAna: "Observation dirigée et lecture de documents",
      qa: [
        ["Qu'est-ce que la sociologie ?", "La science qui étudie les sociétés humaines, les groupes qui les composent et les relations qui les unissent."],
        ["Quel est l'objet de la sociologie ?", "Comprendre comment les individus vivent ensemble, coopèrent, se hiérarchisent et se transforment."],
        ["Qu'est-ce qu'un groupe social ?", "Un ensemble de personnes qui partagent des caractéristiques, entretiennent des relations et se reconnaissent une appartenance commune."],
        ["Qu'est-ce que le lien social ?", "L'ensemble des relations qui unissent les membres d'une société et leur donnent le sentiment d'appartenir à un même ensemble."],
        ["Pourquoi le lien social est-il nécessaire ?", "Parce qu'il permet la coopération, réduit l'isolement et donne à chacun une place reconnue."],
        ["Qu'est-ce que la cohésion sociale ?", "Le degré d'attachement des membres d'une société les uns aux autres, et leur adhésion aux règles communes."],
        ["Le lien social est-il donné d'avance ?", "Non : il se construit, s'entretient et peut se défaire — c'est un travail permanent de la société sur elle-même."],
        ["Comment la sociologie procède-t-elle ?", "Elle observe, décrit, compare et cherche des régularités, sans juger les façons de vivre qu'elle étudie."],
      ],
      synthese: "Donc, la sociologie étudie la manière dont les hommes vivent ensemble. Le groupe social est l'unité de base de cette vie collective, et le lien social désigne l'ensemble des relations qui unissent les individus. La cohésion sociale mesure la solidité de ce lien.",
      motsCles: ["sociologie", "groupe social", "lien social", "cohésion sociale", "appartenance", "coopération", "relations", "société"],
      image: { file: "t12_u5_cohesion.jpg", legende: "Figure 54 — La vie collective : groupes et liens sociaux." },
      contenu: [
        {
          sousTitre: "1. La sociologie",
          texte: "La sociologie est une discipline scientifique qui prend la société pour objet.",
          liste: [
            "Elle observe les groupes, les institutions et les pratiques.",
            "Elle cherche des régularités : ce qui se répète d'un groupe à l'autre.",
            "Elle explique sans juger : comprendre avant d'approuver ou de condamner.",
          ],
        },
        {
          sousTitre: "2. Le groupe social",
          texte: "Le groupe est l'unité élémentaire de la vie collective.",
          liste: [
            "Des personnes qui partagent des caractéristiques ou un but.",
            "Des relations régulières entre elles.",
            "Le sentiment d'appartenir à un même ensemble.",
            "Des règles, explicites ou tacites, que les membres respectent.",
          ],
        },
        {
          sousTitre: "3. Le lien social",
          texte: "Le lien social est ce qui relie les individus entre eux.",
          liste: [
            "Il naît des échanges : travail, entraide, conversation, fêtes.",
            "Il donne à chacun une place et une reconnaissance.",
            "Il rend possible la coopération à grande échelle.",
          ],
        },
        {
          sousTitre: "4. La cohésion sociale",
          texte: "Une société est cohérente quand ses membres se sentent liés.",
          liste: [
            "Attachement à des valeurs et à des règles partagées.",
            "Confiance envers les autres et envers les institutions.",
            "Solidarité effective : on s'entraide au-delà du cercle proche.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La sociologie étudie…", opts: ["les sociétés humaines et les groupes", "les seuls chiffres économiques", "la nature physique"], ok: 0, expl: "Elle prend la vie collective pour objet." },
          { q: "Un groupe social suppose…", opts: ["des relations et une appartenance", "un local fermé", "un effectif de cent personnes"], ok: 0, expl: "Les membres se reconnaissent entre eux." },
          { q: "Le lien social désigne…", opts: ["les relations qui unissent les membres d'une société", "le revenu moyen", "la loi écrite"], ok: 0, expl: "C'est le tissu des relations." },
          { q: "La cohésion sociale mesure…", opts: ["la solidité de l'attachement des membres entre eux", "la taille du territoire", "le nombre de lois"], ok: 0, expl: "Elle dit si la société tient ensemble." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le lien social existe une fois pour toutes.", rep: false, expl: "Il se construit et peut se défaire." },
          { txt: "Un groupe social repose sur des relations régulières entre ses membres.", rep: true, expl: "Sans relations, il n'y a pas de groupe." },
          { txt: "La sociologie juge les façons de vivre qu'elle étudie.", rep: false, expl: "Elle explique avant tout." },
          { txt: "La coopération suppose une forme de lien social.", rep: true, expl: "Agir ensemble suppose des relations établies." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis la sociologie.", r: "C'est la science qui étudie les sociétés humaines, les groupes qui les composent et les relations qui les unissent." },
          { q: "Définis le groupe social et cite ses trois traits.", r: "C'est un ensemble de personnes qui partagent des caractéristiques, entretiennent des relations régulières et se reconnaissent une appartenance commune." },
          { q: "Qu'est-ce que le lien social ?", r: "C'est l'ensemble des relations qui unissent les membres d'une société et leur donnent le sentiment d'appartenir à un même ensemble." },
          { q: "Qu'est-ce que la cohésion sociale ?", r: "C'est le degré d'attachement des membres d'une société les uns aux autres, et leur adhésion aux règles communes." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "La science qui étudie les sociétés humaines est la", suite: "sociologie" },
          { debut: "L'ensemble des relations qui unissent les individus est le lien", suite: "social" },
          { debut: "Un ensemble de personnes liées par des relations régulières est un groupe", suite: "social" },
          { debut: "Le degré d'attachement des membres d'une société entre eux est la", suite: "cohésion" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 63 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La diversité des groupes sociaux et des liens",
      theme: "Cohésion et changement social",
      ras: "Déterminer les éléments qui construisent, renforcent ou fragilisent la cohésion sociale",
      valeurs: "Vie en harmonie, citoyenneté et patriotisme",
      objectif: "identifier les différents groupes sociaux et les liens qui unissent leurs membres",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Qu'est-ce qu'un groupe social ?", "Un ensemble de personnes liées par des relations régulières et le sentiment d'une appartenance commune."],
        ["Qu'est-ce que le lien social ?", "L'ensemble des relations qui unissent les membres d'une société."],
      ],
      mise: [
        "Une élève appartient à sa famille, à sa classe, à son équipe sportive. Où est son vrai groupe ?",
        "Tous : on appartient à plusieurs groupes à la fois, et c'est le recoupement de ces appartenances qui tisse le lien social.",
      ],
      observation: "le schéma des groupes et des liens",
      observationSupport: "Schéma des groupes sociaux affiché ou distribué",
      technAna: "Lecture de schéma et étude de documents",
      qa: [
        ["Qu'est-ce qu'un groupe primaire ?", "Un groupe de petite taille où les relations sont directes et personnelles : la famille, les amis, les voisins proches."],
        ["Qu'est-ce qu'un groupe secondaire ?", "Un groupe plus vaste où les relations sont fonctionnelles : l'entreprise, l'établissement scolaire, l'administration."],
        ["Qu'est-ce qu'un groupe d'appartenance ?", "Celui dont on fait réellement partie."],
        ["Qu'est-ce qu'un groupe de référence ?", "Celui auquel on se compare et dont on adopte les valeurs, sans nécessairement en être membre."],
        ["Quels sont les principaux liens sociaux ?", "Le lien de filiation, le lien de voisinage, le lien professionnel, le lien associatif et le lien civique."],
        ["Qu'est-ce que le lien de filiation ?", "Le lien de parenté, établi par la naissance ou l'adoption."],
        ["Pourquoi les appartenances multiples comptent-elles ?", "Parce qu'un individu inséré dans plusieurs groupes dispose de plusieurs soutiens, ce qui renforce la cohésion."],
        ["Que se passe-t-il quand ces liens se raréfient ?", "L'individu s'isole : le lien social s'affaiblit et la cohésion recule."],
      ],
      synthese: "Donc, les groupes sociaux sont multiples : groupes primaires ou secondaires, d'appartenance ou de référence. Les liens qui les traversent sont de plusieurs natures — filiation, voisinage, travail, engagement associatif, appartenance civique. Le recoupement de ces appartenances renforce la cohésion ; leur raréfaction la fragilise.",
      motsCles: ["groupe primaire", "groupe secondaire", "groupe d'appartenance", "groupe de référence", "filiation", "voisinage", "lien professionnel", "lien associatif"],
      image: { file: "t12_u5_groupes.png", legende: "Figure 55 — Groupes sociaux et liens sociaux." },
      contenu: [
        {
          sousTitre: "1. Groupes primaires et groupes secondaires",
          texte: "La taille et la nature des relations distinguent les groupes.",
          liste: [
            "Groupe primaire : quelques personnes, relations directes, chaleureuses et durables.",
            "Groupe secondaire : effectif plus large, relations utilitaires et réglées par des fonctions.",
            "Exemples : la famille d'un côté ; l'entreprise ou l'école de l'autre.",
          ],
        },
        {
          sousTitre: "2. Appartenance et référence",
          texte: "On peut appartenir à un groupe et se référer à un autre.",
          liste: [
            "Groupe d'appartenance : celui dont on est membre, que la naissance ou le choix a donné.",
            "Groupe de référence : celui dont on adopte les manières et les valeurs.",
            "Un adolescent peut appartenir à sa famille tout en se référant à son groupe d'amis.",
          ],
        },
        {
          sousTitre: "3. La diversité des liens",
          texte: "Chaque lien repose sur un principe différent.",
          liste: [
            "Filiation : la parenté, premier de tous les liens.",
            "Voisinage : la proximité géographique, qui crée des obligations réciproques.",
            "Travail : l'activité partagée et la coopération quotidienne.",
            "Engagement associatif : le lien choisi, fondé sur une cause commune.",
            "Lien civique : l'appartenance à la même collectivité politique.",
          ],
        },
        {
          sousTitre: "4. Appartenances multiples et cohésion",
          texte: "Le croisement des appartenances fait la solidité du tissu social.",
          liste: [
            "Chacun appartient à plusieurs groupes en même temps.",
            "Ces cercles se recoupent et multiplient les occasions de rencontre.",
            "À l'inverse, la perte simultanée de plusieurs liens isole rapidement la personne.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La famille est un groupe…", opts: ["primaire", "secondaire", "de référence uniquement"], ok: 0, expl: "Relations directes et personnelles." },
          { q: "Un groupe auquel on se compare sans en être membre est un groupe…", opts: ["de référence", "d'appartenance", "primaire"], ok: 0, expl: "On en adopte les valeurs." },
          { q: "Le lien de filiation repose sur…", opts: ["la parenté", "le lieu d'habitation", "le métier exercé"], ok: 0, expl: "Naissance ou adoption." },
          { q: "Appartenir à plusieurs groupes…", opts: ["renforce la cohésion", "isole toujours", "supprime les liens"], ok: 0, expl: "Les appartenances se recoupent." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une entreprise est généralement un groupe secondaire.", rep: true, expl: "Les relations y sont fonctionnelles." },
          { txt: "On ne peut appartenir qu'à un seul groupe à la fois.", rep: false, expl: "Les appartenances sont multiples et se recoupent." },
          { txt: "Le lien de voisinage repose sur la proximité géographique.", rep: true, expl: "Il crée des obligations réciproques." },
          { txt: "Un groupe de référence est toujours un groupe dont on est membre.", rep: false, expl: "On peut s'y référer sans en faire partie." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Quelle différence entre groupe primaire et groupe secondaire ?", r: "Le groupe primaire réunit peu de personnes autour de relations directes et personnelles ; le groupe secondaire est plus vaste et ses relations sont fonctionnelles." },
          { q: "Quelle différence entre groupe d'appartenance et groupe de référence ?", r: "Le groupe d'appartenance est celui dont on est membre ; le groupe de référence est celui dont on adopte les valeurs, sans nécessairement en faire partie." },
          { q: "Cite quatre types de liens sociaux.", r: "Le lien de filiation, le lien de voisinage, le lien professionnel et le lien associatif, auxquels s'ajoute le lien civique." },
          { q: "Pourquoi les appartenances multiples renforcent-elles la cohésion ?", r: "Parce qu'elles multiplient les relations et les soutiens disponibles, et que leur croisement rend l'isolement moins probable." },
        ]},
        { type: "appariement", consigne: "Relie chaque situation au type de lien correspondant.", pointsPar: 1, items: [
          { g: ["Une mère et son fils", "Des collègues d'atelier", "Des habitants de la même rue", "Des membres d'un club sportif", "Des citoyens d'une même commune"], d: ["Lien professionnel", "Lien de voisinage", "Lien de filiation", "Lien civique", "Lien associatif"], pairs: [[0, 2], [1, 0], [2, 1], [3, 4], [4, 3]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 64 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les instances d'intégration sociale",
      theme: "Cohésion et changement social",
      ras: "Déterminer les éléments qui construisent, renforcent ou fragilisent la cohésion sociale",
      valeurs: "Vie en harmonie, citoyenneté et patriotisme",
      objectif: "identifier les types d'instances d'intégration sociale",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Quelle différence entre groupe primaire et groupe secondaire ?", "Le primaire réunit peu de personnes avec des relations personnelles ; le secondaire est vaste et fonctionnel."],
        ["Cite trois types de liens sociaux.", "La filiation, le voisinage et le travail, auxquels s'ajoutent le lien associatif et le lien civique."],
      ],
      mise: [
        "Qu'est-ce qui fait qu'un jeune devient membre à part entière de la société ?",
        "Plusieurs instances, l'une après l'autre : la famille, l'école, le travail, les associations, et le droit qui fixe les règles communes.",
      ],
      observation: "le schéma des instances d'intégration",
      observationSupport: "Schéma des instances d'intégration affiché ou distribué",
      technAna: "Lecture de schéma et débat dirigé",
      qa: [
        ["Qu'appelle-t-on une instance d'intégration sociale ?", "Une institution ou un cadre collectif qui relie l'individu à la société et lui donne une place reconnue."],
        ["Quel est le rôle de la famille ?", "Première instance : elle transmet la langue, les règles élémentaires et les repères culturaux."],
        ["Quel est le rôle de l'école ?", "Elle enseigne les savoirs communs et les règles de la vie collective, et réunit des enfants d'origines diverses."],
        ["Quel est le rôle du travail ?", "Il donne un revenu, un statut, un réseau de relations et un sentiment d'utilité."],
        ["Quel est le rôle de l'État et du droit ?", "Ils fixent des règles valables pour tous et garantissent à chacun des droits égaux."],
        ["Quel est le rôle des associations ?", "Elles offrent un engagement choisi et créent des liens électifs autour d'une activité ou d'une cause."],
        ["Que se passe-t-il quand une instance fait défaut ?", "L'individu perd un point d'appui : l'absence d'emploi durable, par exemple, fragilise fortement l'intégration."],
        ["Ces instances agissent-elles séparément ?", "Non : elles se complètent et se relaient au cours de la vie."],
      ],
      synthese: "Donc, plusieurs instances concourent à l'intégration sociale : la famille, l'école, le travail, les associations, ainsi que l'État et le droit. Elles se relaient au cours de la vie ; lorsqu'une d'elles manque durablement, l'individu perd un appui et le lien social se fragilise.",
      motsCles: ["intégration sociale", "famille", "école", "travail", "État", "droit", "association", "socialisation"],
      image: { file: "t12_u5_integration.png", legende: "Figure 56 — Les instances d'intégration sociale." },
      contenu: [
        {
          sousTitre: "1. La famille",
          texte: "Première instance, elle assure la socialisation primaire.",
          liste: [
            "Transmission de la langue et des manières de vivre.",
            "Protection matérielle et affective de l'enfant.",
            "Premiers apprentissages des règles de la vie collective.",
          ],
        },
        {
          sousTitre: "2. L'école",
          texte: "Elle prend le relais et ouvre un cadre plus large.",
          liste: [
            "Savoirs communs partagés par tous les élèves.",
            "Apprentissage des règles et de la vie en groupe.",
            "Rencontre d'enfants d'origines différentes.",
          ],
        },
        {
          sousTitre: "3. Le travail",
          texte: "Il insère l'adulte dans la société par l'activité.",
          liste: [
            "Un revenu, donc une autonomie matérielle.",
            "Un statut reconnu et un réseau de relations.",
            "Le sentiment d'être utile à la collectivité.",
          ],
        },
        {
          sousTitre: "4. L'État, le droit et les associations",
          texte: "Deux instances complètent le dispositif.",
          liste: [
            "L'État et le droit fixent des règles communes et garantissent les droits de tous.",
            "Les associations offrent un engagement choisi et des liens électifs.",
            "Ensemble, elles assurent l'intégration par la participation et par la citoyenneté.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La première instance d'intégration est…", opts: ["la famille", "l'entreprise", "le syndicat"], ok: 0, expl: "Elle transmet la langue et les repères." },
          { q: "L'école contribue à l'intégration en…", opts: ["enseignant des savoirs communs", "payant un salaire", "fixant les impôts"], ok: 0, expl: "Elle transmet la culture commune." },
          { q: "Le travail intégre parce qu'il donne…", opts: ["un revenu et un statut", "un diplôme", "la nationalité"], ok: 0, expl: "Il donne une place reconnue." },
          { q: "L'absence durable d'emploi…", opts: ["fragilise l'intégration", "n'a aucun effet", "renforce la cohésion"], ok: 0, expl: "Une instance d'intégration manque." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Les associations fondent leur action sur un engagement choisi.", rep: true, expl: "On y adhère librement." },
          { txt: "L'État et le droit excluent toute règle commune.", rep: false, expl: "Ils fixent au contraire des règles valables pour tous." },
          { txt: "Les instances d'intégration se relaient au cours de la vie.", rep: true, expl: "Famille, puis école, puis travail." },
          { txt: "L'intégration sociale ne concerne que l'enfance.", rep: false, expl: "Elle se poursuit tout au long de la vie." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Qu'est-ce qu'une instance d'intégration sociale ?", r: "C'est une institution ou un cadre collectif qui relie l'individu à la société et lui donne une place reconnue." },
          { q: "Cite quatre instances d'intégration et le rôle de chacune.", r: "La famille transmet les repères, l'école enseigne les savoirs communs, le travail donne un revenu et un statut, l'État et le droit fixent les règles et garantissent les droits." },
          { q: "Pourquoi l'absence durable d'emploi fragilise-t-elle l'intégration ?", r: "Parce que le travail fournit à la fois un revenu, un statut et un réseau de relations : sa perte prive l'individu d'un point d'appui majeur." },
          { q: "Quel rôle jouent les associations dans l'intégration ?", r: "Elles offrent un engagement choisi et créent des liens électifs autour d'une activité ou d'une cause commune." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "L'institution qui transmet la langue et les repères est la", suite: "famille" },
          { debut: "L'institution qui enseigne les savoirs communs est l'", suite: "école" },
          { debut: "L'activité qui donne un revenu et un statut est le", suite: "travail" },
          { debut: "L'instance qui fixe des règles valables pour tous est l'", suite: "État" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 65 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La division du travail, fondement du lien social",
      theme: "Cohésion et changement social",
      ras: "Déterminer les éléments qui construisent, renforcent ou fragilisent la cohésion sociale",
      valeurs: "Vie en harmonie, citoyenneté et patriotisme",
      objectif: "expliquer pourquoi la division du travail fonde le lien social selon Durkheim",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Qu'est-ce qu'une instance d'intégration sociale ?", "Une institution qui relie l'individu à la société."],
        ["Qu'est-ce que la cohésion sociale ?", "Le degré d'attachement des membres d'une société entre eux."],
      ],
      mise: [
        "Si chacun fait son métier de son côté, la société ne se disperse-t-elle pas ?",
        "Non, répond Durkheim : plus les tâches sont spécialisées, plus chacun a besoin des autres, et plus le lien se resserre.",
      ],
      observation: "le schéma de la division du travail",
      observationSupport: "Schéma de la division du travail affiché ou distribué",
      technAna: "Lecture de schéma et discussion dirigée",
      qa: [
        ["Qui est Émile Durkheim ?", "Un sociologue français, l'un des fondateurs de la sociologie, qui a consacré sa thèse à la division du travail social."],
        ["Qu'est-ce que la division du travail ?", "La répartition des tâches entre les individus, chacun exerçant une activité particulière plutôt que toutes."],
        ["Quelle est la thèse de Durkheim ?", "La division du travail n'est pas seulement une technique de production : elle est la source principale du lien social dans les sociétés modernes."],
        ["Pourquoi crée-t-elle un lien ?", "Parce que chacun dépend du travail des autres pour satisfaire ses besoins : l'échange devient indispensable."],
        ["Qu'est-ce que l'interdépendance ?", "La situation où aucun individu ne se suffit à lui-même et où tous ont besoin les uns des autres."],
        ["Quel nom donne-t-il à cette solidarité ?", "La solidarité organique : le lien naît de la complémentarité des fonctions."],
        ["Quelle différence avec les sociétés anciennes ?", "Elles étaient unies par la ressemblance : c'est la solidarité mécanique."],
        ["Que risque une division du travail mal réglée ?", "L'anomie : l'absence de règles communes, où chacun poursuit son intérêt sans repère collectif."],
      ],
      synthese: "Donc, pour Durkheim, la division du travail est le fondement du lien social dans les sociétés modernes : en spécialisant les tâches, elle crée une interdépendance qui oblige à coopérer. Ce n'est pas la ressemblance qui unit les hommes, c'est le besoin qu'ils ont les uns des autres.",
      motsCles: ["Durkheim", "division du travail", "interdépendance", "solidarité organique", "complémentarité", "échange", "anomie", "spécialisation"],
      image: { file: "t12_u5_division_travail.png", legende: "Figure 57 — La division du travail, fondement du lien social." },
      contenu: [
        {
          sousTitre: "1. La thèse de Durkheim",
          texte: "Le sociologue renverse une idée reçue : la division du travail ne sépare pas, elle relie.",
          liste: [
            "Chaque individu exerce une fonction particulière.",
            "Il ne peut satisfaire seul l'ensemble de ses besoins.",
            "Il doit donc échanger avec les autres en permanence.",
          ],
        },
        {
          sousTitre: "2. De la spécialisation à l'interdépendance",
          texte: "L'enchaînement est mécanique au sens logique du terme.",
          liste: [
            "Plus les tâches se spécialisent, plus les produits se diversifient.",
            "Plus les besoins sont nombreux, plus les échanges sont nécessaires.",
            "Chacun devient dépendant de beaucoup d'autres personnes.",
          ],
        },
        {
          sousTitre: "3. La solidarité organique",
          texte: "Cette forme nouvelle de solidarité remplace l'ancienne.",
          liste: [
            "Le lien naît de la complémentarité des fonctions.",
            "Il laisse place à l'individualité : chacun a une identité propre.",
            "Il suppose un droit coopératif, qui répare plutôt qu'il ne punit.",
          ],
        },
        {
          sousTitre: "4. L'anomie, limite de la spécialisation",
          texte: "Durkheim aperçoit aussi le risque.",
          liste: [
            "L'anomie est l'affaiblissement des règles communes.",
            "Quand les échanges ne sont plus réglés, chacun poursuit son intérêt seul.",
            "La société a donc besoin de règles pour que la complémentarité produise de la cohésion.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Pour Durkheim, la division du travail…", opts: ["fonde le lien social", "détruit le lien social", "n'a aucun effet social"], ok: 0, expl: "Elle crée l'interdépendance." },
          { q: "L'interdépendance désigne…", opts: ["le besoin réciproque des individus entre eux", "la concurrence la plus vive", "l'indépendance totale"], ok: 0, expl: "Chacun a besoin du travail d'autrui." },
          { q: "La solidarité fondée sur la complémentarité est la solidarité…", opts: ["organique", "mécanique", "familiale"], ok: 0, expl: "Les fonctions se complètent." },
          { q: "L'anomie désigne…", opts: ["l'affaiblissement des règles communes", "l'excès de lois", "la fin du travail"], ok: 0, expl: "Les repères collectifs manquent." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La division du travail réduit le besoin d'échanger.", rep: false, expl: "Elle le rend au contraire indispensable." },
          { txt: "La solidarité organique laisse place à l'individualité.", rep: true, expl: "Chacun garde une identité propre." },
          { txt: "L'anomie renforce la cohésion sociale.", rep: false, expl: "Elle traduit au contraire l'absence de règles." },
          { txt: "L'échange permanent est la conséquence de l'interdépendance.", rep: true, expl: "On échange parce que l'on ne se suffit pas." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Quelle est la thèse de Durkheim sur la division du travail ?", r: "La division du travail n'est pas qu'une technique de production : elle est la source principale du lien social, car elle rend les individus interdépendants." },
          { q: "Qu'est-ce que l'interdépendance ?", r: "C'est la situation où aucun individu ne se suffit à lui-même et où tous ont besoin du travail des autres." },
          { q: "Pourquoi parle-t-on de solidarité organique ?", r: "Parce que le lien naît de la complémentarité des fonctions, comme les organes d'un même corps coopèrent." },
          { q: "Qu'est-ce que l'anomie selon Durkheim ?", r: "C'est l'affaiblissement des règles communes, où chacun poursuit son intérêt sans repère collectif." },
        ]},
        { type: "appariement", consigne: "Relie chaque notion à sa définition.", pointsPar: 1, items: [
          { g: ["Spécialisation des tâches", "Besoin réciproque entre individus", "Absence de règles communes", "Complémentarité des fonctions", "Ensemble des relations sociales"], d: ["Lien social", "Anomie", "Division du travail", "Interdépendance", "Solidarité organique"], pairs: [[0, 1], [1, 3], [2, 1], [3, 4], [4, 0]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 66 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La solidarité mécanique",
      theme: "Cohésion et changement social",
      ras: "Déterminer les éléments qui construisent, renforcent ou fragilisent la cohésion sociale",
      valeurs: "Vie en harmonie, citoyenneté et patriotisme",
      objectif: "caractériser la solidarité mécanique selon Durkheim",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Quelle est la thèse de Durkheim sur la division du travail ?", "Elle crée l'interdépendance et fonde le lien social moderne."],
        ["Qu'est-ce que l'interdépendance ?", "Le besoin réciproque des individus les uns envers les autres."],
      ],
      mise: [
        "Dans un village où tout le monde cultive et élève de la même façon, qu'est-ce qui unit les habitants ?",
        "La ressemblance : mêmes croyances, mêmes travaux, mêmes fêtes. C'est la solidarité mécanique.",
      ],
      observation: "le schéma de la solidarité mécanique",
      observationSupport: "Schéma de la solidarité mécanique affiché ou distribué",
      technAna: "Lecture de schéma et étude de documents",
      qa: [
        ["Qu'est-ce que la solidarité mécanique ?", "Une forme de lien social fondée sur la ressemblance des individus : mêmes croyances, mêmes tâches, mêmes manières de vivre."],
        ["Pourquoi l'appelle-t-on « mécanique » ?", "Parce que les individus y sont comparables à des éléments interchangeables d'un même ensemble, soudés par leur similitude."],
        ["Qu'est-ce que la conscience collective ?", "L'ensemble des croyances et des sentiments communs à la moyenne des membres d'une société."],
        ["Quelle place occupe-t-elle ici ?", "Elle est forte : chacun adhère aux mêmes croyances, et la transgression suscite une réaction vive du groupe."],
        ["Quel type de droit correspond à cette solidarité ?", "Le droit répressif : la règle transgressée appelle une sanction, non une réparation."],
        ["Quelle est la place de l'individu ?", "Faible : la personne se définit par son appartenance au groupe, non par sa singularité."],
        ["À quelles sociétés correspond ce modèle ?", "Aux sociétés de petite taille, à faible division du travail, où la communauté encadre toute la vie."],
        ["Quelle limite présente-t-il ?", "Il ne peut plus assurer la cohésion d'une société nombreuse et diversifiée."],
      ],
      synthese: "Donc, la solidarité mécanique unit les hommes par la ressemblance : mêmes croyances, mêmes tâches, conscience collective forte, droit répressif. Elle correspond aux sociétés de petite taille, à faible division du travail, où l'individu se définit d'abord par son appartenance au groupe.",
      motsCles: ["solidarité mécanique", "ressemblance", "conscience collective", "droit répressif", "sanction", "appartenance", "société traditionnelle", "faible individualité"],
      image: { file: "t12_u5_mecanique.png", legende: "Figure 58 — La solidarité mécanique selon Durkheim." },
      contenu: [
        {
          sousTitre: "1. Le principe : la ressemblance",
          texte: "Ce qui unit les individus, c'est ce qu'ils ont en commun.",
          liste: [
            "Les mêmes croyances et les mêmes pratiques.",
            "Les mêmes activités : culture, élevage, artisanat.",
            "Les mêmes fêtes et les mêmes manières de vivre.",
          ],
        },
        {
          sousTitre: "2. La conscience collective",
          texte: "Elle est le ciment de cette forme de solidarité.",
          liste: [
            "Ensemble des croyances et des sentiments partagés par tous.",
            "Elle s'impose à l'individu avec une force particulière.",
            "Toute transgression est ressentie comme une atteinte au groupe entier.",
          ],
        },
        {
          sousTitre: "3. Le droit répressif",
          texte: "Le type de droit révèle le type de solidarité.",
          liste: [
            "La faute appelle une peine : amende, exclusion, réprobation.",
            "La sanction vise à réaffirmer la règle commune.",
            "Elle n'a pas pour objet de réparer un dommage individuel.",
          ],
        },
        {
          sousTitre: "4. Sociétés concernées et limites",
          texte: "Ce modèle a un domaine de validité précis.",
          liste: [
            "Sociétés de petite taille, à division du travail peu développée.",
            "Famille et communauté encadrent l'essentiel de l'existence.",
            "Limite : une société nombreuse et diversifiée ne peut plus tenir par la seule ressemblance.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La solidarité mécanique repose sur…", opts: ["la ressemblance des individus", "la complémentarité des fonctions", "le contrat signé"], ok: 0, expl: "On est uni par ce que l'on partage." },
          { q: "La conscience collective désigne…", opts: ["les croyances partagées par tous", "l'opinion d'un seul", "la loi écrite"], ok: 0, expl: "Elle est commune au groupe." },
          { q: "Le droit qui correspond à la solidarité mécanique est…", opts: ["répressif", "coopératif", "commercial"], ok: 0, expl: "La transgression appelle une peine." },
          { q: "Dans ce modèle, l'individu…", opts: ["se définit par son appartenance au groupe", "est totalement autonome", "n'a aucune obligation"], ok: 0, expl: "Sa singularité compte peu." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La solidarité mécanique domine dans les sociétés à forte division du travail.", rep: false, expl: "C'est la solidarité organique qui y domine." },
          { txt: "Le droit répressif punit la transgression de la règle commune.", rep: true, expl: "Il réaffirme la règle par la peine." },
          { txt: "La conscience collective est faible dans les sociétés à solidarité mécanique.", rep: false, expl: "Elle y est au contraire très forte." },
          { txt: "La famille reste de nos jours un lieu de solidarité mécanique.", rep: true, expl: "Les proches partagent des repères communs." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis la solidarité mécanique.", r: "C'est une forme de lien social fondée sur la ressemblance des individus : mêmes croyances, mêmes tâches et mêmes manières de vivre." },
          { q: "Qu'est-ce que la conscience collective ?", r: "C'est l'ensemble des croyances et des sentiments communs à la moyenne des membres d'une société." },
          { q: "Qu'est-ce que le droit répressif ?", r: "C'est un droit où la règle transgressée appelle une peine, destinée à réaffirmer la règle commune plutôt qu'à réparer un dommage." },
          { q: "Quelle limite présente la solidarité mécanique ?", r: "Elle ne peut plus assurer la cohésion d'une société nombreuse et diversifiée, où les croyances et les activités se différencient." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Le principe de la solidarité mécanique est la", suite: "ressemblance" },
          { debut: "L'ensemble des croyances partagées est la conscience", suite: "collective" },
          { debut: "Un droit qui punit la transgression est un droit", suite: "répressif" },
          { debut: "Les sociétés à faible division du travail relèvent surtout de la solidarité", suite: "mécanique" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 67 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La solidarité organique",
      theme: "Cohésion et changement social",
      ras: "Déterminer les éléments qui construisent, renforcent ou fragilisent la cohésion sociale",
      valeurs: "Vie en harmonie, citoyenneté et patriotisme",
      objectif: "caractériser la solidarité organique selon Durkheim",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Qu'est-ce que la solidarité mécanique ?", "Un lien social fondé sur la ressemblance des individus."],
        ["Qu'est-ce que la conscience collective ?", "L'ensemble des croyances et des sentiments partagés par les membres d'une société."],
      ],
      mise: [
        "Dans une ville, personne ne produit ce qu'il consomme. Comment la société tient-elle ?",
        "Par l'interdépendance : le boulanger a besoin du mécanicien, qui a besoin de l'infirmière. C'est la solidarité organique.",
      ],
      observation: "le schéma de la solidarité organique",
      observationSupport: "Schéma de la solidarité organique affiché ou distribué",
      technAna: "Lecture de schéma et étude de documents",
      qa: [
        ["Qu'est-ce que la solidarité organique ?", "Une forme de lien social fondée sur la complémentarité des fonctions : chacun exerce une tâche particulière et dépend des autres."],
        ["Pourquoi l'appelle-t-on « organique » ?", "Parce que les individus y sont comparables aux organes d'un corps vivant : distincts, mais solidaires du tout."],
        ["Quel rôle joue la spécialisation ?", "Elle est la condition du mécanisme : sans fonctions distinctes, il n'y a pas de complémentarité."],
        ["Quel type de droit correspond à cette solidarité ?", "Le droit coopératif : il répare le dommage plutôt qu'il ne punit la faute."],
        ["Quelle place occupe l'individu ?", "Grande : la personne acquiert une identité propre, distincte de celle de son groupe d'origine."],
        ["Que devient la conscience collective ?", "Elle subsiste, mais porte sur des valeurs plus générales — dignité de la personne, liberté — laissant place à la diversité des opinions."],
        ["À quelles sociétés correspond ce modèle ?", "Aux sociétés modernes, industrialisées et urbanisées, à forte division du travail."],
        ["La cohésion y est-elle assurée d'office ?", "Non : elle exige des règles et des institutions, faute de quoi l'interdépendance tourne à l'anomie."],
      ],
      synthese: "Donc, la solidarité organique unit les hommes par la complémentarité : chacun exerce une fonction distincte et dépend des autres pour vivre. Elle correspond aux sociétés modernes, laisse une large place à l'individu et s'accompagne d'un droit coopératif, à condition que des règles communes encadrent les échanges.",
      motsCles: ["solidarité organique", "complémentarité", "spécialisation", "droit coopératif", "réparation", "individualisme", "société moderne", "interdépendance"],
      image: { file: "t12_u5_organique.png", legende: "Figure 59 — La solidarité organique selon Durkheim." },
      contenu: [
        {
          sousTitre: "1. Le principe : la complémentarité",
          texte: "Ce qui unit les individus, c'est leur différence même.",
          liste: [
            "Chacun exerce une fonction spécialisée.",
            "Aucun ne produit ce dont il a besoin dans sa totalité.",
            "L'échange devient la condition de la vie quotidienne.",
          ],
        },
        {
          sousTitre: "2. L'interdépendance généralisée",
          texte: "Le lien s'étend bien au-delà du cercle proche.",
          liste: [
            "Un repas mobilise des dizaines de métiers.",
            "Un objet courant suppose des transports, des réseaux, des services.",
            "La société tient par cette chaîne de coopérations.",
          ],
        },
        {
          sousTitre: "3. Le droit coopératif",
          texte: "Le type de droit révèle à nouveau le type de solidarité.",
          liste: [
            "Le litige appelle une réparation du dommage causé.",
            "L'objectif est de rétablir la relation, non de punir.",
            "Exemples : indemnisation, restitution, exécution du contrat.",
          ],
        },
        {
          sousTitre: "4. Individu, valeurs communes et anomie",
          texte: "La cohésion moderne a ses conditions.",
          liste: [
            "L'individu acquiert une identité propre et des choix personnels.",
            "Les valeurs communes subsistent, mais deviennent plus générales.",
            "Sans règles partagées, l'interdépendance dégénère en anomie.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La solidarité organique repose sur…", opts: ["la complémentarité des fonctions", "la ressemblance des croyances", "l'isolement de chacun"], ok: 0, expl: "Les fonctions se complètent." },
          { q: "Le droit coopératif cherche à…", opts: ["réparer le dommage", "punir systématiquement", "supprimer les contrats"], ok: 0, expl: "Il rétablit la relation." },
          { q: "Dans la solidarité organique, l'individu…", opts: ["acquiert une identité propre", "disparaît dans le groupe", "n'a plus de droits"], ok: 0, expl: "Sa singularité est reconnue." },
          { q: "Ce modèle correspond surtout aux sociétés…", opts: ["modernes et urbanisées", "de petite taille isolées", "sans division du travail"], ok: 0, expl: "Forte division du travail." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La solidarité organique suppose une forte spécialisation des tâches.", rep: true, expl: "Sans fonctions distinctes, pas de complémentarité." },
          { txt: "Le droit coopératif cherche d'abord à punir.", rep: false, expl: "Il répare le dommage causé." },
          { txt: "L'interdépendance relie des individus qui ne se connaissent pas.", rep: true, expl: "La chaîne de coopération est anonyme." },
          { txt: "La cohésion organique est assurée sans aucune règle commune.", rep: false, expl: "Sans règles, elle dégénère en anomie." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis la solidarité organique.", r: "C'est une forme de lien social fondée sur la complémentarité des fonctions : chacun exerce une tâche particulière et dépend des autres." },
          { q: "Qu'est-ce que le droit coopératif ?", r: "C'est un droit qui répare le dommage causé plutôt que de punir la faute, afin de rétablir la relation entre les personnes." },
          { q: "Quelle place l'individu occupe-t-il dans la solidarité organique ?", r: "Il acquiert une identité propre et des choix personnels, distincts de son groupe d'origine." },
          { q: "Quelle condition permet d'éviter l'anomie ?", r: "La présence de règles communes et d'institutions qui encadrent les échanges, sans lesquelles l'interdépendance ne produit pas de cohésion." },
        ]},
        { type: "appariement", consigne: "Relie chaque trait à la forme de solidarité correspondante.", pointsPar: 1, items: [
          { g: ["Ressemblance des croyances", "Complémentarité des fonctions", "Droit répressif", "Droit coopératif", "Forte individualité"], d: ["Solidarité organique", "Solidarité organique", "Solidarité mécanique", "Solidarité mécanique", "Solidarité organique"], pairs: [[0, 3], [1, 0], [2, 2], [3, 1], [4, 4]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 68 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Solidarité mécanique et sociétés contemporaines",
      theme: "Cohésion et changement social",
      ras: "Déterminer les éléments qui construisent, renforcent ou fragilisent la cohésion sociale",
      valeurs: "Vie en harmonie, citoyenneté et patriotisme",
      objectif: "montrer ce qui subsiste de la solidarité mécanique dans les sociétés actuelles",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Qu'est-ce que la solidarité organique ?", "Un lien fondé sur la complémentarité des fonctions et l'interdépendance."],
        ["Qu'est-ce que le droit coopératif ?", "Un droit qui répare le dommage plutôt que de punir la faute."],
      ],
      mise: [
        "Nos sociétés sont devenues diverses et spécialisées. La solidarité par ressemblance a-t-elle disparu ?",
        "Non : elle subsiste dans la famille, le voisinage et les appartenances vécues, et elle complète la solidarité organique.",
      ],
      observation: "le schéma comparatif des deux formes de solidarité",
      observationSupport: "Schéma comparatif affiché ou distribué",
      technAna: "Lecture de schéma et débat dirigé",
      qa: [
        ["Que reste-t-il de la solidarité mécanique aujourd'hui ?", "La famille, le voisinage, les fêtes partagées et le sentiment d'appartenance nationale."],
        ["Pourquoi la famille reste-t-elle une instance de solidarité mécanique ?", "Parce que ses membres partagent des repères, une histoire et une entraide qui ne se comptent pas."],
        ["Quel rôle jouent les fêtes et les cérémonies ?", "Elles rassemblent les membres du groupe et renouvellent le sentiment d'appartenance."],
        ["Qu'est-ce que le sentiment d'appartenance nationale ?", "Le fait de se sentir membre d'une même collectivité, au-delà des différences individuelles."],
        ["Qu'est-ce qui s'est affaibli ?", "L'uniformité des croyances : les valeurs se sont diversifiées, et les métiers se sont spécialisés."],
        ["Pourquoi la mobilité joue-t-elle ?", "Elle éloigne les familles et réduit les liens de voisinage durables."],
        ["Les deux formes s'excluent-elles ?", "Non : elles se combinent, la ressemblance dans les groupes proches, la complémentarité dans la société entière."],
        ["Que conclure sur la cohésion contemporaine ?", "Qu'elle repose sur ce mélange, et non sur la disparition d'une forme de solidarité."],
      ],
      synthese: "Donc, la solidarité mécanique n'a pas disparu : la famille, la proximité, les fêtes et l'appartenance nationale l'entretiennent. Mais elle ne suffit plus seule à faire tenir une société nombreuse et diversifiée. Les sociétés contemporaines combinent les deux formes de solidarité.",
      motsCles: ["solidarité mécanique", "famille", "voisinage", "fêtes", "appartenance nationale", "mobilité", "diversité des valeurs", "combinaison"],
      image: { file: "t12_u5_mecanique_aujourdhui.png", legende: "Figure 60 — La solidarité mécanique subsiste-t-elle aujourd'hui ?" },
      contenu: [
        {
          sousTitre: "1. Ce qui subsiste",
          texte: "Plusieurs formes de ressemblance continuent de faire lien.",
          liste: [
            "La famille : entraide, garde des enfants, soutien matériel.",
            "Les fêtes et les cérémonies, qui rassemblent et renouvellent l'appartenance.",
            "Le sentiment d'appartenance nationale, qui crée une conscience commune.",
            "Les solidarités de voisinage et de quartier.",
          ],
        },
        {
          sousTitre: "2. Ce qui s'est affaibli",
          texte: "Le modèle ancien a perdu de sa portée.",
          liste: [
            "La mobilité éloigne les familles et raccourcit la durée des liens de voisinage.",
            "Les croyances sont moins uniformes : les valeurs se diversifient.",
            "Les métiers se spécialisent : on partage moins les mêmes tâches.",
            "Les liens sont davantage choisis que subis.",
          ],
        },
        {
          sousTitre: "3. La combinaison des deux solidarités",
          texte: "La vie sociale contemporaine mobilise les deux registres.",
          liste: [
            "Ressemblance dans les groupes proches : famille, amis, voisinage.",
            "Complémentarité dans la société entière : métiers, services, échanges.",
            "Les deux se renforcent mutuellement quand elles coexistent.",
          ],
        },
        {
          sousTitre: "4. Ce que cela change pour la cohésion",
          texte: "La cohésion ne repose plus sur un seul principe.",
          liste: [
            "Elle exige des institutions qui garantissent des règles communes.",
            "Elle suppose la reconnaissance de la diversité des façons de vivre.",
            "Elle se mesure à la capacité de la société à maintenir les deux formes de lien.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Aujourd'hui, la solidarité mécanique subsiste surtout dans…", opts: ["la famille et la proximité", "les grandes entreprises", "les marchés financiers"], ok: 0, expl: "Les groupes proches partagent des repères." },
          { q: "La mobilité géographique…", opts: ["éloigne les familles", "supprime les métiers", "renforce les croyances"], ok: 0, expl: "Elle raccourcit les liens de voisinage." },
          { q: "Les sociétés contemporaines…", opts: ["combinent les deux formes de solidarité", "ont supprimé la solidarité mécanique", "ignorent la solidarité organique"], ok: 0, expl: "Les deux coexistent." },
          { q: "Le sentiment d'appartenance nationale relève surtout de la solidarité…", opts: ["mécanique", "organique", "contractuelle"], ok: 0, expl: "Il crée une conscience commune." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La solidarité mécanique a totalement disparu des sociétés modernes.", rep: false, expl: "Elle subsiste dans la famille et les groupes proches." },
          { txt: "Les valeurs sont aujourd'hui plus diversifiées qu'autrefois.", rep: true, expl: "L'uniformité des croyances s'est réduite." },
          { txt: "Les fêtes collectives renouvellent le sentiment d'appartenance.", rep: true, expl: "Elles rassemblent et réaffirment le lien." },
          { txt: "Ressemblance et complémentarité ne peuvent pas coexister.", rep: false, expl: "Les sociétés contemporaines les combinent." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite trois formes de solidarité mécanique qui subsistent aujourd'hui.", r: "L'entraide familiale, les solidarités de voisinage et de quartier, et le sentiment d'appartenance nationale." },
          { q: "Cite deux évolutions qui ont affaibli la solidarité mécanique.", r: "La mobilité géographique, qui éloigne les familles, et la diversification des croyances et des valeurs." },
          { q: "En quoi les deux formes de solidarité se combinent-elles ?", r: "La ressemblance continue d'unir les groupes proches, tandis que la complémentarité des fonctions relie l'ensemble de la société." },
          { q: "Que conclure sur la cohésion des sociétés contemporaines ?", r: "Qu'elle repose sur ce mélange des deux solidarités, et non sur la disparition de l'une d'entre elles." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Le premier lieu de solidarité reste la", suite: "famille" },
          { debut: "Le fait de se sentir membre d'une même nation est l'appartenance", suite: "nationale" },
          { debut: "Le déplacement des personnes d'un lieu à l'autre est la", suite: "mobilité" },
          { debut: "Les sociétés actuelles associent ressemblance et", suite: "complémentarité" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 69 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La rupture du lien social : désaffiliation et disqualification",
      theme: "Cohésion et changement social",
      ras: "Déterminer les éléments qui construisent, renforcent ou fragilisent la cohésion sociale",
      valeurs: "Vie en harmonie, citoyenneté et patriotisme",
      objectif: "expliquer la rupture du lien social dans les groupes sociaux",
      supportMeta: "Documents, schémas, cahier",
      revision: [
        ["Que reste-t-il aujourd'hui de la solidarité mécanique ?", "La famille, la proximité, les fêtes et l'appartenance nationale."],
        ["Qu'est-ce que l'anomie ?", "L'affaiblissement des règles communes, chacun poursuivant son intérêt sans repère collectif."],
      ],
      mise: [
        "Une personne perd son emploi, s'éloigne de sa famille et cesse de fréquenter ses voisins. Que se passe-t-il ?",
        "Elle se désaffilie : les liens se défont les uns après les autres, jusqu'à ce que la personne ne se sente plus membre de la société.",
      ],
      observation: "la scène illustrant la rupture du lien social",
      observationSupport: "Illustration de la rupture du lien social et documents d'accompagnement",
      technAna: "Observation dirigée et étude de cas",
      qa: [
        ["Qu'est-ce que la rupture du lien social ?", "La dégradation ou la disparition des relations qui reliaient une personne ou un groupe à la société."],
        ["Qu'est-ce que la désaffiliation ?", "Le processus par lequel une personne perd progressivement ses appartenances : emploi, famille, voisinage, associations."],
        ["Quelles sont les étapes de la désaffiliation ?", "La fragilisation des liens, leur rupture successive, puis l'isolement et la perte de repères."],
        ["Qu'est-ce que la disqualification sociale ?", "La perte de la reconnaissance sociale : la personne n'occupe plus de place reconnue et se voit dévalorisée."],
        ["Quelle différence avec la désaffiliation ?", "La désaffiliation décrit la perte des liens ; la disqualification décrit la perte du statut et de la reconnaissance."],
        ["Quelles causes principales ?", "Le chômage durable, la précarité, l'éloignement géographique, la maladie, l'absence de soutien familial."],
        ["Quelles sont les conséquences ?", "L'isolement, la perte d'estime de soi, la pauvreté et parfois l'exclusion durable."],
        ["Comment réagir ?", "En prévenant les ruptures : maintien du revenu, accompagnement social, accès aux soins, activités collectives, retour à l'emploi."],
      ],
      synthese: "Donc, la rupture du lien social se manifeste par la désaffiliation, perte progressive des appartenances, et par la disqualification sociale, perte de la reconnaissance. Le chômage durable et la précarité en sont les causes principales ; la prévention passe par le maintien des liens et de l'activité.",
      motsCles: ["rupture du lien social", "désaffiliation", "disqualification sociale", "isolement", "précarité", "exclusion", "reconnaissance", "accompagnement social"],
      image: { file: "t12_u5_rupture.jpg", legende: "Figure 61 — La rupture du lien social : l'isolement." },
      contenu: [
        {
          sousTitre: "1. La désaffiliation",
          texte: "Les liens se défont les uns après les autres.",
          liste: [
            "Perte d'emploi : le lien professionnel disparaît.",
            "Éloignement familial : le lien de parenté se distend.",
            "Retrait du quartier et des associations : les liens choisis s'éteignent.",
          ],
        },
        {
          sousTitre: "2. La disqualification sociale",
          texte: "Au-delà des liens, c'est la place qui manque.",
          liste: [
            "La personne n'occupe plus de fonction reconnue.",
            "Elle perd la considération attachée à un rôle social.",
            "Le regard des autres ajoute à la difficulté matérielle.",
          ],
        },
        {
          sousTitre: "3. Les causes",
          texte: "Plusieurs facteurs, souvent cumulés, conduisent à la rupture.",
          liste: [
            "Le chômage durable, qui prive à la fois de revenu et de relations.",
            "La précarité du logement et l'éloignement géographique.",
            "La maladie ou le handicap sans accompagnement.",
            "L'absence ou l'épuisement du soutien familial.",
          ],
        },
        {
          sousTitre: "4. Prévenir et réparer",
          texte: "L'action porte sur les liens autant que sur les ressources.",
          liste: [
            "Maintien d'un revenu minimum, qui évite la chute brutale.",
            "Accompagnement social et accès effectif aux soins.",
            "Activités collectives et associatives, qui recréent des appartenances.",
            "Retour à l'emploi ou à une activité utile, qui restaure le statut.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La désaffiliation désigne…", opts: ["la perte progressive des appartenances", "la perte d'un diplôme", "la hausse des salaires"], ok: 0, expl: "Les liens se défont un à un." },
          { q: "La disqualification sociale est…", opts: ["la perte de la reconnaissance sociale", "une sanction pénale", "un changement de métier"], ok: 0, expl: "La personne n'a plus de place reconnue." },
          { q: "Une cause fréquente de rupture est…", opts: ["le chômage durable", "la réussite scolaire", "la promotion professionnelle"], ok: 0, expl: "Il prive de revenu et de relations." },
          { q: "Prévenir la rupture suppose…", opts: ["de maintenir les liens et l'activité", "d'isoler davantage la personne", "de supprimer les aides"], ok: 0, expl: "Les appartenances protègent." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La désaffiliation est un processus progressif.", rep: true, expl: "Les liens se défont successivement." },
          { txt: "Désaffiliation et disqualification désignent la même chose.", rep: false, expl: "L'une porte sur les liens, l'autre sur le statut." },
          { txt: "Le chômage durable peut priver à la fois de revenu et de relations.", rep: true, expl: "Le travail est une instance d'intégration." },
          { txt: "L'isolement n'a aucun effet sur l'estime de soi.", rep: false, expl: "Il l'entame durablement." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis la désaffiliation.", r: "C'est le processus par lequel une personne perd progressivement ses appartenances : emploi, famille, voisinage et associations." },
          { q: "Qu'est-ce que la disqualification sociale ?", r: "C'est la perte de la reconnaissance sociale : la personne n'occupe plus de place reconnue et se voit dévalorisée." },
          { q: "Cite trois causes de rupture du lien social.", r: "Le chômage durable, la précarité du logement ou l'éloignement géographique, et l'absence de soutien familial." },
          { q: "Cite trois moyens de prévenir cette rupture.", r: "Le maintien d'un revenu minimum, l'accompagnement social avec accès aux soins, et les activités collectives qui recréent des appartenances." },
        ]},
        { type: "appariement", consigne: "Relie chaque situation à la notion correspondante.", pointsPar: 1, items: [
          { g: ["Une personne perd emploi, famille et voisinage", "Un chômeur de longue durée n'est plus reconnu", "Une association accueille des personnes isolées", "Un malade sans accompagnement s'enferme", "Une allocation évite la chute brutale"], d: ["Disqualification", "Prévention", "Cause de rupture", "Désaffiliation", "Prévention"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2], [4, 4]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 70 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Différence et inégalité",
      theme: "Cohésion et changement social",
      ras: "Analyser les relations entre les inégalités et la justice sociale",
      valeurs: "Vie en harmonie, citoyenneté et patriotisme",
      objectif: "comparer les notions de différence et d'inégalité",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Qu'est-ce que la désaffiliation ?", "La perte progressive des appartenances d'une personne."],
        ["Qu'est-ce que la cohésion sociale ?", "Le degré d'attachement des membres d'une société entre eux et à des règles communes."],
      ],
      mise: [
        "Deux élèves mesurent 1,60 m et 1,80 m. Est-ce une inégalité ?",
        "Non, c'est une différence. Elle deviendrait une inégalité si la taille ouvrait ou fermait l'accès à un emploi.",
      ],
      observation: "le schéma comparant différence et inégalité",
      observationSupport: "Schéma comparatif affiché ou distribué",
      technAna: "Lecture de schéma et débat dirigé",
      qa: [
        ["Qu'est-ce qu'une différence ?", "Un écart constaté entre deux personnes ou deux groupes, qui n'implique ni supériorité ni infériorité."],
        ["Qu'est-ce qu'une inégalité ?", "Un écart qui place les personnes dans un rapport de supériorité ou d'infériorité quant à l'accès à un avantage."],
        ["Comment une différence devient-elle une inégalité ?", "Lorsqu'elle entraîne un avantage pour les uns et un désavantage pour les autres."],
        ["Donne un exemple.", "Parler une langue étrangère est une différence ; en faire une condition d'embauche pour un poste qui ne l'exige pas crée une inégalité."],
        ["Comment mesure-t-on les inégalités ?", "Par des écarts chiffrés : de revenu, de patrimoine, de réussite scolaire, d'accès aux soins."],
        ["Lutter contre les inégalités suppose-t-il de supprimer les différences ?", "Non : la diversité des situations et des choix n'est pas en soi une injustice."],
        ["Toutes les inégalités sont-elles condamnables ?", "Non : le débat porte sur leur origine, celles qui résultent d'un choix ou d'un effort étant généralement acceptées."],
        ["Pourquoi la distinction importe-t-elle ?", "Parce qu'elle détermine ce que la justice sociale doit corriger."],
      ],
      synthese: "Donc, une différence est un écart sans hiérarchie, une inégalité est un écart qui avantage les uns et désavantage les autres. Lutter contre les inégalités ne signifie pas supprimer les différences : la justice sociale vise à corriger les écarts qui ne résultent ni d'un choix ni d'un effort.",
      motsCles: ["différence", "inégalité", "écart", "hiérarchie", "avantage", "mesure", "justice sociale", "discrimination"],
      image: { file: "t12_u5_difference.png", legende: "Figure 62 — Différence et inégalité : deux notions à distinguer." },
      contenu: [
        {
          sousTitre: "1. La différence",
          texte: "Elle constate un écart, sans jugement de valeur.",
          liste: [
            "La taille, l'âge, la langue parlée, la spécialité exercée.",
            "Aucun terme de la comparaison n'est supérieur à l'autre.",
            "La différence peut être revendiquée comme une richesse collective.",
          ],
        },
        {
          sousTitre: "2. L'inégalité",
          texte: "Elle établit une hiérarchie dans l'accès à un avantage.",
          liste: [
            "Revenu, patrimoine, emploi, école, soins, pouvoir.",
            "L'écart se mesure : rapport entre les extrêmes, écart moyen.",
            "Elle place les personnes dans un rapport de supériorité ou d'infériorité.",
          ],
        },
        {
          sousTitre: "3. Le passage de l'une à l'autre",
          texte: "Une différence devient inégalité par l'usage social qui en est fait.",
          liste: [
            "Critère retenu pour l'embauche, le logement, le crédit.",
            "Origine, lieu de résidence, sexe : autant de différences devenues discriminations.",
            "C'est ce traitement inégal qui constitue l'injustice.",
          ],
        },
        {
          sousTitre: "4. Ce que vise la justice sociale",
          texte: "La correction porte sur l'inégalité, non sur la différence.",
          liste: [
            "Supprimer les écarts qui ne sont ni choisis ni justifiés.",
            "Respecter la diversité des situations et des choix.",
            "Rendre l'accès aux avantages indépendant des caractéristiques héritées.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une différence…", opts: ["n'implique aucune hiérarchie", "est toujours injuste", "mesure les revenus"], ok: 0, expl: "Elle constate un écart sans classement." },
          { q: "Une inégalité se caractérise par…", opts: ["un rapport de supériorité ou d'infériorité", "une simple ressemblance", "une identité de situation"], ok: 0, expl: "L'accès à un avantage diffère." },
          { q: "Une différence devient une inégalité quand…", opts: ["elle ouvre ou ferme l'accès à un avantage", "elle est constatée", "elle est revendiquée"], ok: 0, expl: "Le traitement social crée l'écart." },
          { q: "Lutter contre les inégalités consiste à…", opts: ["corriger les écarts non choisis", "supprimer toute différence", "uniformiser les revenus sans mesure"], ok: 0, expl: "La diversité n'est pas une injustice." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Toute différence est une inégalité.", rep: false, expl: "Elle ne le devient que par l'usage social qui en est fait." },
          { txt: "Une inégalité se mesure par des écarts chiffrés.", rep: true, expl: "Revenus, patrimoine, réussite scolaire." },
          { txt: "La justice sociale cherche à supprimer toutes les différences.", rep: false, expl: "Elle corrige les écarts non justifiés." },
          { txt: "Un critère d'embauche sans lien avec le poste peut créer une inégalité.", rep: true, expl: "Il transforme une différence en discrimination." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Quelle différence entre différence et inégalité ?", r: "La différence est un écart sans hiérarchie ; l'inégalité place les personnes dans un rapport de supériorité ou d'infériorité quant à l'accès à un avantage." },
          { q: "Comment une différence devient-elle une inégalité ?", r: "Lorsqu'elle entraîne un avantage pour les uns et un désavantage pour les autres, par exemple lorsqu'un critère sans lien avec le poste conditionne l'embauche." },
          { q: "Comment mesure-t-on les inégalités ?", r: "Par des écarts chiffrés portant sur le revenu, le patrimoine, la réussite scolaire ou l'accès aux soins." },
          { q: "Que vise la justice sociale ?", r: "Elle corrige les écarts qui ne résultent ni d'un choix ni d'un effort, sans chercher à supprimer les différences elles-mêmes." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Un écart sans hiérarchie est une", suite: "différence" },
          { debut: "Un écart qui hiérarchise l'accès à un avantage est une", suite: "inégalité" },
          { debut: "Le traitement défavorable fondé sur une caractéristique est une", suite: "discrimination" },
          { debut: "La branche qui étudie ce qu'il est juste de corriger est la justice", suite: "sociale" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 71 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La diversité des inégalités et leur caractère cumulatif",
      theme: "Cohésion et changement social",
      ras: "Analyser les relations entre les inégalités et la justice sociale",
      valeurs: "Vie en harmonie, citoyenneté et patriotisme",
      objectif: "démontrer la diversité des inégalités et leur caractère cumulatif",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Quelle différence entre différence et inégalité ?", "La différence est un écart sans hiérarchie ; l'inégalité hiérarchise l'accès à un avantage."],
        ["Comment mesure-t-on les inégalités ?", "Par des écarts chiffrés de revenu, de patrimoine, de réussite scolaire ou d'accès aux soins."],
      ],
      mise: [
        "Un enfant né dans un foyer pauvre, loin d'un centre de santé, dans une école surchargée : quel est son handicap ?",
        "Plusieurs à la fois, et ils s'additionnent : c'est le caractère cumulatif des inégalités.",
      ],
      observation: "le schéma de la diversité des inégalités",
      observationSupport: "Schéma des domaines d'inégalités affiché ou distribué",
      technAna: "Lecture de schéma et étude de documents",
      qa: [
        ["Quelles sont les principales inégalités économiques ?", "Les écarts de revenu, de patrimoine et d'accès à l'emploi."],
        ["Quelles sont les inégalités scolaires ?", "Les écarts de réussite, d'orientation et d'accès aux études longues."],
        ["Quelles sont les inégalités de santé ?", "Les écarts d'accès aux soins, de couverture maladie et d'espérance de vie."],
        ["Que recouvrent les inégalités territoriales ?", "Les écarts d'accès aux services publics, aux transports, à l'eau et aux réseaux."],
        ["Que recouvrent les inégalités de genre ?", "Les écarts de rémunération, d'accès aux responsabilités et de sécurité."],
        ["Qu'est-ce que le caractère cumulatif des inégalités ?", "Le fait que les désavantages s'additionnent au lieu de se limiter à un seul domaine."],
        ["Donne un enchaînement.", "Un faible revenu limite l'accès aux soins et à l'école, ce qui réduit les chances d'emploi, ce qui entretient le faible revenu."],
        ["Quelle conséquence pour l'action publique ?", "Il faut agir sur plusieurs fronts à la fois : une seule mesure ne suffit pas à rompre le cumul."],
      ],
      synthese: "Donc, les inégalités sont multiples — économiques, scolaires, de santé, territoriales, de genre — et elles se cumulent : un désavantage en entraîne un autre. C'est ce cumul qui rend les situations difficiles à inverser et qui oblige l'action publique à intervenir sur plusieurs fronts.",
      motsCles: ["inégalités économiques", "inégalités scolaires", "inégalités de santé", "inégalités territoriales", "inégalités de genre", "cumul", "désavantage", "action publique"],
      image: { file: "t12_u5_cumul.png", legende: "Figure 63 — La diversité des inégalités et leur caractère cumulatif." },
      contenu: [
        {
          sousTitre: "1. Les inégalités économiques",
          texte: "Elles portent sur les ressources matérielles.",
          liste: [
            "Écarts de revenu entre les ménages.",
            "Écarts de patrimoine : logement, terre, épargne.",
            "Accès à l'emploi et à la qualité de l'emploi.",
          ],
        },
        {
          sousTitre: "2. Les inégalités scolaires et de santé",
          texte: "Elles déterminent les chances à long terme.",
          liste: [
            "Réussite scolaire, orientation et accès aux études longues.",
            "Accès aux soins, couverture maladie, espérance de vie.",
            "Ces deux domaines conditionnent largement les suivants.",
          ],
        },
        {
          sousTitre: "3. Les inégalités territoriales et de genre",
          texte: "Deux dimensions traversent tous les domaines.",
          liste: [
            "Territoire : services publics, transports, réseaux d'eau et d'énergie.",
            "Genre : rémunération, accès aux responsabilités, sécurité.",
            "Elles s'ajoutent aux précédentes plutôt que de s'y substituer.",
          ],
        },
        {
          sousTitre: "4. Le caractère cumulatif",
          texte: "Les désavantages s'enchaînent en cercle.",
          liste: [
            "Un faible revenu limite les soins et la scolarité.",
            "Une scolarité écourtée réduit l'accès à l'emploi qualifié.",
            "Un emploi précaire entretient le faible revenu de départ.",
            "Agir sur un seul domaine ne suffit donc pas.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Les inégalités de patrimoine relèvent des inégalités…", opts: ["économiques", "scolaires", "territoriales"], ok: 0, expl: "Le patrimoine est une ressource matérielle." },
          { q: "L'espérance de vie relève surtout des inégalités…", opts: ["de santé", "de genre", "scolaires"], ok: 0, expl: "Elle mesure l'état de santé d'une population." },
          { q: "Le caractère cumulatif signifie que…", opts: ["les désavantages s'additionnent", "les inégalités disparaissent", "un seul facteur suffit"], ok: 0, expl: "Un désavantage en entraîne un autre." },
          { q: "Face au cumul, l'action publique doit…", opts: ["intervenir sur plusieurs fronts", "choisir une seule mesure", "attendre le marché"], ok: 0, expl: "Une seule mesure ne rompt pas le cercle." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Les inégalités se limitent au domaine des revenus.", rep: false, expl: "Elles touchent aussi l'école, la santé, le territoire et le genre." },
          { txt: "Une scolarité écourtée réduit les chances d'emploi qualifié.", rep: true, expl: "Le cumul s'enchaîne ainsi." },
          { txt: "Les inégalités territoriales portent sur l'accès aux services publics.", rep: true, expl: "Transports, eau, écoles, soins." },
          { txt: "Une seule mesure suffit à rompre le cumul des désavantages.", rep: false, expl: "Il faut agir sur plusieurs fronts à la fois." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite quatre domaines d'inégalités.", r: "Les inégalités économiques, scolaires, de santé et territoriales, auxquelles s'ajoutent les inégalités de genre." },
          { q: "Qu'est-ce que le caractère cumulatif des inégalités ?", r: "C'est le fait que les désavantages s'additionnent au lieu de se limiter à un seul domaine." },
          { q: "Donne un enchaînement montrant ce cumul.", r: "Un faible revenu limite l'accès aux soins et à l'école, ce qui réduit les chances d'emploi qualifié, ce qui entretient le faible revenu." },
          { q: "Quelle conséquence pour l'action publique ?", r: "Elle doit intervenir sur plusieurs fronts à la fois, car une seule mesure ne suffit pas à rompre le cumul." },
        ]},
        { type: "appariement", consigne: "Relie chaque constat au domaine d'inégalité correspondant.", pointsPar: 1, items: [
          { g: ["Écart de salaire entre deux métiers", "École à deux heures de marche", "Dispensaire trop éloigné du village", "Faible accès des femmes aux postes de direction", "Taux de redoublement plus élevé dans une région"], d: ["Inégalité territoriale", "Inégalité scolaire", "Inégalité de santé", "Inégalité économique", "Inégalité de genre"], pairs: [[0, 3], [1, 0], [2, 2], [3, 4], [4, 1]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 72 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les formes d'égalité",
      theme: "Cohésion et changement social",
      ras: "Analyser les relations entre les inégalités et la justice sociale",
      valeurs: "Vie en harmonie, citoyenneté et patriotisme",
      objectif: "démontrer les grandes formes d'égalité",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Qu'est-ce que le caractère cumulatif des inégalités ?", "Le fait que les désavantages s'additionnent au lieu de se limiter à un domaine."],
        ["Cite trois domaines d'inégalités.", "Les inégalités économiques, scolaires et de santé."],
      ],
      mise: [
        "L'école est ouverte à tous, mais l'élève qui habite loin n'y va pas. L'égalité est-elle assurée ?",
        "L'égalité des droits l'est ; l'égalité des chances ne l'est pas encore. Une bourse ou un transport scolaire peuvent y remédier.",
      ],
      observation: "le schéma des trois formes d'égalité",
      observationSupport: "Schéma des formes d'égalité affiché ou distribué",
      technAna: "Lecture de schéma et débat dirigé",
      qa: [
        ["Qu'est-ce que l'égalité des droits ?", "Le fait que tous les citoyens disposent des mêmes droits : même loi pour tous, mêmes libertés, même accès au suffrage."],
        ["Qu'est-ce que l'égalité des chances ?", "Le fait que chacun parte avec les mêmes possibilités, les handicaps de départ étant compensés pour que le mérite décide du parcours."],
        ["Qu'est-ce que l'égalité réelle ?", "L'égalité de situation : les conditions de vie elles-mêmes se rapprochent, les écarts de revenu et de confort se réduisent."],
        ["Ces trois formes s'opposent-elles ?", "Non : elles se complètent et se poursuivent l'une l'autre."],
        ["Donne un exemple pour l'égalité des droits.", "Le suffrage : chaque citoyen dispose d'une voix, quelle que soit sa fortune."],
        ["Donne un exemple pour l'égalité des chances.", "Une bourse attribuée à l'élève éloigné ou à la famille modeste, qui compense un handicap de départ."],
        ["Donne un exemple pour l'égalité réelle.", "La réduction effective des écarts de revenu et l'accès effectif de tous aux soins et à l'école."],
        ["Pourquoi l'égalité des droits ne suffit-elle pas ?", "Parce que des droits égaux n'empêchent pas des situations très inégales : le droit d'aller à l'école ne vaut rien si l'école est inaccessible."],
      ],
      synthese: "Donc, on distingue trois formes d'égalité : l'égalité des droits, qui donne à tous les mêmes prérogatives ; l'égalité des chances, qui compense les handicaps de départ ; l'égalité réelle, qui rapproche les situations elles-mêmes. Elles se complètent et se poursuivent.",
      motsCles: ["égalité des droits", "égalité des chances", "égalité réelle", "égalité de situation", "compensation", "mérite", "suffrage", "discrimination positive"],
      image: { file: "t12_u5_formes_egalite.png", legende: "Figure 64 — Les trois formes d'égalité." },
      contenu: [
        {
          sousTitre: "1. L'égalité des droits",
          texte: "C'est le socle, la condition de toutes les autres.",
          liste: [
            "Même loi pour tous, mêmes libertés fondamentales.",
            "Même accès au suffrage : une personne, une voix.",
            "Interdiction des discriminations fondées sur l'origine, le sexe ou la croyance.",
          ],
        },
        {
          sousTitre: "2. L'égalité des chances",
          texte: "Elle veut que le mérite décide du parcours, non la naissance.",
          liste: [
            "Compenser les handicaps de départ : éloignement, pauvreté, handicap.",
            "Ouvrir l'accès : bourses, transports scolaires, internats, concours ouverts.",
            "Objectif : que deux élèves de même mérite aient les mêmes perspectives.",
          ],
        },
        {
          sousTitre: "3. L'égalité réelle",
          texte: "Elle vise les situations, et non plus seulement les droits ou les chances.",
          liste: [
            "Rapprocher les conditions de vie : revenu, logement, santé, éducation.",
            "Réduire les écarts effectivement constatés.",
            "C'est la forme la plus exigeante de l'égalité.",
          ],
        },
        {
          sousTitre: "4. L'articulation des trois formes",
          texte: "Chacune prolonge la précédente.",
          liste: [
            "Sans égalité des droits, aucune autre n'a de sens.",
            "Sans égalité des chances, l'égalité des droits reste formelle.",
            "Sans action sur les situations, l'égalité des chances ne produit pas ses effets.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le suffrage « une personne, une voix » relève de l'égalité…", opts: ["des droits", "des chances", "réelle"], ok: 0, expl: "Même prérogative pour tous." },
          { q: "Une bourse attribuée à un élève modeste relève de l'égalité…", opts: ["des chances", "réelle", "des droits"], ok: 0, expl: "Elle compense un handicap de départ." },
          { q: "Rapprocher les niveaux de vie relève de l'égalité…", opts: ["réelle", "des chances", "des droits"], ok: 0, expl: "Les situations elles-mêmes se rapprochent." },
          { q: "Ces trois formes…", opts: ["se complètent", "s'excluent", "se confondent"], ok: 0, expl: "Elles se poursuivent l'une l'autre." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "L'égalité des droits suffit à garantir l'égalité des situations.", rep: false, expl: "Des droits égaux n'empêchent pas des situations inégales." },
          { txt: "Une bourse scolaire vise à compenser un handicap de départ.", rep: true, expl: "Elle relève de l'égalité des chances." },
          { txt: "L'égalité réelle cherche à rapprocher les conditions de vie.", rep: true, expl: "C'est l'égalité de situation." },
          { txt: "Les trois formes d'égalité s'excluent mutuellement.", rep: false, expl: "Elles se complètent et se poursuivent." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis les trois formes d'égalité.", r: "L'égalité des droits donne à tous les mêmes prérogatives ; l'égalité des chances compense les handicaps de départ ; l'égalité réelle rapproche les conditions de vie elles-mêmes." },
          { q: "Donne un exemple d'égalité des chances.", r: "Une bourse ou un transport scolaire accordé à l'élève éloigné ou modeste, qui compense un handicap de départ." },
          { q: "Pourquoi l'égalité des droits ne suffit-elle pas ?", r: "Parce que des droits égaux n'empêchent pas des situations très inégales : le droit d'aller à l'école ne vaut rien si l'école est inaccessible." },
          { q: "Comment les trois formes s'articulent-elles ?", r: "Elles se complètent : sans égalité des droits, aucune autre n'a de sens ; sans égalité des chances, l'égalité des droits reste formelle." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Une personne, une voix, relève de l'égalité des", suite: "droits" },
          { debut: "Compenser un handicap de départ relève de l'égalité des", suite: "chances" },
          { debut: "Rapprocher les conditions de vie relève de l'égalité", suite: "réelle" },
          { debut: "Une règle qui interdit les distinctions injustifiées est l'égalité des", suite: "droits" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 73 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les conceptions de la justice sociale",
      theme: "Cohésion et changement social",
      ras: "Analyser les relations entre les inégalités et la justice sociale",
      valeurs: "Vie en harmonie, citoyenneté et patriotisme",
      objectif: "présenter les conceptions de la justice sociale et la question des inégalités justes",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Cite les trois formes d'égalité.", "L'égalité des droits, l'égalité des chances et l'égalité réelle."],
        ["Qu'est-ce qu'une inégalité ?", "Un écart qui place les personnes dans un rapport de supériorité ou d'infériorité."],
      ],
      mise: [
        "Faut-il donner la même chose à tout le monde, ou davantage à celui qui en a le plus besoin ?",
        "La question divise : c'est précisément l'objet des différentes conceptions de la justice sociale.",
      ],
      observation: "le schéma des principes de justice",
      observationSupport: "Schéma des conceptions de la justice sociale affiché ou distribué",
      technAna: "Lecture de schéma et débat dirigé",
      qa: [
        ["Qu'est-ce que la justice sociale ?", "L'ensemble des principes qui permettent de juger si la répartition des avantages et des charges dans une société est équitable."],
        ["Quel est le principe d'égalité stricte ?", "Chacun reçoit la même part, sans distinction de situation."],
        ["Quel est le principe d'équité ?", "Chacun reçoit selon son effort, son mérite ou son besoin réel."],
        ["Quel est le principe de besoin ?", "On donne davantage à celui qui part de plus loin, afin d'égaliser les situations."],
        ["Quelles inégalités sont généralement jugées justes ?", "Celles qui récompensent l'effort et le travail, et celles qui résultent d'un choix personnel."],
        ["Quelles inégalités sont jugées injustes ?", "Celles qui sont héritées : le milieu de naissance, le lieu de naissance, le sexe, l'origine."],
        ["Sur quoi porte donc le débat ?", "Moins sur l'existence des inégalités que sur leur origine."],
        ["Comment tranche-t-on en pratique ?", "En combinant les principes : l'école pour tous, mais plus d'aide pour ceux qui en ont le plus besoin."],
      ],
      synthese: "Donc, la justice sociale s'appuie sur trois principes : l'égalité, l'équité et le besoin. Elle ne condamne pas toute inégalité : elle distingue celles qui résultent d'un effort ou d'un choix, généralement acceptées, de celles qui sont héritées et tenues pour injustes.",
      motsCles: ["justice sociale", "égalité", "équité", "besoin", "mérite", "inégalités justes", "héritage", "redistribution"],
      image: { file: "t12_u5_justice.png", legende: "Figure 65 — Les conceptions de la justice sociale." },
      contenu: [
        {
          sousTitre: "1. Le principe d'égalité",
          texte: "La règle la plus simple : la même part pour tous.",
          liste: [
            "Avantage : la clarté et l'absence de favoritisme.",
            "Limite : elle traite de la même façon des situations très différentes.",
            "Exemple : un repas identique servi à tous les convives.",
          ],
        },
        {
          sousTitre: "2. Le principe d'équité",
          texte: "La règle proportionnelle : chacun selon son apport ou son besoin.",
          liste: [
            "Selon l'effort : qui travaille davantage reçoit davantage.",
            "Selon le mérite : qui réussit un concours obtient la place.",
            "Selon le besoin réel : on tient compte de la situation de départ.",
          ],
        },
        {
          sousTitre: "3. Les inégalités justes et injustes",
          texte: "Le jugement porte sur l'origine de l'écart.",
          liste: [
            "Acceptées : effort, travail, prise de risque, choix personnel.",
            "Refusées : milieu de naissance, lieu de naissance, origine, sexe.",
            "Le débat porte donc moins sur l'écart que sur sa cause.",
          ],
        },
        {
          sousTitre: "4. L'application concrète",
          texte: "Les sociétés combinent les principes plutôt que d'en choisir un.",
          liste: [
            "École ouverte à tous : égalité.",
            "Bourse pour l'élève éloigné : besoin.",
            "Rémunération selon la qualification et l'effort : mérite.",
            "L'équilibre entre ces principes fait l'objet du débat public.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le principe d'égalité consiste à…", opts: ["donner la même part à tous", "donner selon le mérite", "donner selon le besoin"], ok: 0, expl: "Aucune distinction de situation." },
          { q: "Le principe d'équité tient compte…", opts: ["de l'effort, du mérite ou du besoin", "uniquement de l'âge", "du hasard"], ok: 0, expl: "La part est proportionnée." },
          { q: "Une inégalité généralement jugée juste est…", opts: ["celle qui récompense l'effort", "celle qui vient du milieu de naissance", "celle qui tient au sexe"], ok: 0, expl: "L'effort est un choix, non un héritage." },
          { q: "Le débat sur les inégalités porte surtout sur…", opts: ["leur origine", "leur existence", "leur mesure exacte"], ok: 0, expl: "Justes ou héritées, tel est l'enjeu." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La justice sociale condamne toute forme d'inégalité.", rep: false, expl: "Elle distingue selon l'origine des écarts." },
          { txt: "Le principe de besoin donne davantage à celui qui part de plus loin.", rep: true, expl: "Il vise à égaliser les situations." },
          { txt: "Une inégalité héritée est généralement tenue pour injuste.", rep: true, expl: "Elle ne résulte d'aucun choix ni effort." },
          { txt: "Les sociétés n'appliquent jamais plusieurs principes à la fois.", rep: false, expl: "Elles combinent égalité, mérite et besoin." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis la justice sociale.", r: "C'est l'ensemble des principes qui permettent de juger si la répartition des avantages et des charges dans une société est équitable." },
          { q: "Cite les trois principes de justice et leur contenu.", r: "L'égalité : la même part pour tous ; l'équité : selon l'effort, le mérite ou le besoin ; le besoin : davantage à celui qui part de plus loin." },
          { q: "Quelles inégalités sont jugées justes, et lesquelles injustes ?", r: "Sont jugées justes celles qui récompensent l'effort ou résultent d'un choix ; sont jugées injustes celles qui sont héritées : milieu, lieu de naissance, origine, sexe." },
          { q: "Donne un exemple de combinaison des principes.", r: "L'école ouverte à tous relève de l'égalité, tandis que la bourse accordée à l'élève éloigné relève du principe de besoin." },
        ]},
        { type: "appariement", consigne: "Relie chaque situation au principe de justice appliqué.", pointsPar: 1, items: [
          { g: ["Même portion servie à chacun", "Prime accordée au meilleur vendeur", "Bourse attribuée à l'élève le plus pauvre", "Allocation versée à une famille nombreuse", "Concours ouvert à tous les candidats"], d: ["Besoin", "Égalité", "Équité", "Égalité", "Besoin"], pairs: [[0, 1], [1, 2], [2, 0], [3, 4], [4, 1]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 74 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Redistribution, protection sociale et fiscalité",
      theme: "Cohésion et changement social",
      ras: "Analyser les relations entre les inégalités et la justice sociale",
      valeurs: "Vie en harmonie, citoyenneté et patriotisme",
      objectif: "déterminer les interventions des pouvoirs publics en faveur de la justice sociale",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Qu'est-ce que la justice sociale ?", "L'ensemble des principes qui permettent de juger si la répartition des avantages est équitable."],
        ["Cite les trois principes de justice.", "L'égalité, l'équité et le besoin."],
      ],
      mise: [
        "Comment une société réduit-elle concrètement les écarts de revenu ?",
        "Par trois leviers : elle prélève, elle redistribue, elle protège — fiscalité, prestations et couverture des risques.",
      ],
      observation: "le schéma des interventions publiques",
      observationSupport: "Schéma des interventions publiques affiché ou distribué",
      technAna: "Lecture de schéma et étude de documents",
      qa: [
        ["Qu'est-ce que la fiscalité ?", "L'ensemble des prélèvements obligatoires : impôts sur le revenu, taxes sur la consommation, cotisations."],
        ["Qu'est-ce qu'un impôt progressif ?", "Un impôt dont le taux s'élève avec le revenu : chacun contribue selon ses moyens."],
        ["Qu'est-ce que la redistribution ?", "Le fait de financer, avec les ressources prélevées, des prestations et des services au profit des ménages."],
        ["Quelles prestations la redistribution finance-t-elle ?", "Les allocations familiales, les aides au logement, les minima sociaux et les services publics gratuits."],
        ["Qu'est-ce que la protection sociale ?", "L'ensemble des dispositifs qui couvrent les risques : maladie, vieillesse, accident du travail, chômage, famille."],
        ["Quel effet la redistribution produit-elle ?", "Elle réduit l'écart entre les revenus avant et après intervention publique."],
        ["Pourquoi parle-t-on de cohésion sociale ?", "Parce que la solidarité est ainsi organisée à l'échelle de la société entière, et non du seul cercle proche."],
        ["Quelles limites sont invoquées ?", "Le coût de la dépense publique, la complexité des dispositifs et le risque de réduire l'incitation à l'activité."],
      ],
      synthese: "Donc, les pouvoirs publics disposent de trois leviers : la fiscalité pour prélever, la redistribution pour financer prestations et services, la protection sociale pour couvrir les risques. Ensemble, ils réduisent l'écart des revenus et garantissent un socle commun, au prix de limites qu'il faut surveiller.",
      motsCles: ["fiscalité", "impôt progressif", "redistribution", "prestations sociales", "protection sociale", "minima sociaux", "dépense publique", "cohésion sociale"],
      image: { file: "t12_u5_redistribution.png", legende: "Figure 66 — Redistribution, protection sociale et fiscalité." },
      contenu: [
        {
          sousTitre: "1. La fiscalité",
          texte: "Elle fournit les ressources de l'action publique.",
          liste: [
            "Impôt sur le revenu, taxes sur la consommation, cotisations.",
            "Progressivité : le taux s'élève avec le revenu.",
            "Objectif : chacun contribue selon ses moyens.",
          ],
        },
        {
          sousTitre: "2. La redistribution",
          texte: "Elle transforme les ressources en prestations.",
          liste: [
            "Allocations familiales et aides au logement.",
            "Minima sociaux pour ceux qui n'ont aucune ressource.",
            "Services publics gratuits ou tarifés selon le revenu.",
            "Effet : l'écart des revenus se réduit après intervention.",
          ],
        },
        {
          sousTitre: "3. La protection sociale",
          texte: "Elle couvre les risques de la vie.",
          liste: [
            "Maladie et invalidité.",
            "Vieillesse et retraite.",
            "Accident du travail et chômage.",
            "Charges de famille.",
          ],
        },
        {
          sousTitre: "4. Effets et limites",
          texte: "Le bilan comporte des avantages nets et des points de vigilance.",
          liste: [
            "Effet : un socle garanti — soins, ressources, scolarisation.",
            "Effet : la solidarité organisée à l'échelle de la société entière.",
            "Limites : coût de la dépense publique et financement.",
            "Limites : complexité des dispositifs et risque de réduire l'incitation à l'activité.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Un impôt progressif est un impôt dont le taux…", opts: ["s'élève avec le revenu", "est identique pour tous", "baisse avec le revenu"], ok: 0, expl: "Chacun contribue selon ses moyens." },
          { q: "La redistribution finance…", opts: ["des prestations et des services", "les bénéfices des entreprises", "le commerce extérieur"], ok: 0, expl: "Allocations, aides et services publics." },
          { q: "La protection sociale couvre…", opts: ["les risques de la vie", "les seuls salaires", "le budget de l'armée"], ok: 0, expl: "Maladie, vieillesse, chômage, famille." },
          { q: "Une limite souvent invoquée est…", opts: ["le coût de la dépense publique", "l'excès de solidarité", "la disparition des impôts"], ok: 0, expl: "Le financement fait débat." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La redistribution réduit l'écart entre revenus avant et après intervention.", rep: true, expl: "C'est son effet mesurable." },
          { txt: "Les minima sociaux garantissent une ressource à ceux qui n'en ont aucune.", rep: true, expl: "Ils forment un filet de sécurité." },
          { txt: "La protection sociale se limite à la retraite.", rep: false, expl: "Elle couvre aussi la maladie, le chômage et la famille." },
          { txt: "Les dispositifs de redistribution n'ont aucun coût.", rep: false, expl: "Ils sont financés par les prélèvements." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis la fiscalité et dis ce qu'est un impôt progressif.", r: "La fiscalité est l'ensemble des prélèvements obligatoires ; un impôt progressif est un impôt dont le taux s'élève avec le revenu." },
          { q: "Qu'est-ce que la redistribution ?", r: "C'est le fait de financer, avec les ressources prélevées, des prestations et des services au profit des ménages." },
          { q: "Cite quatre risques couverts par la protection sociale.", r: "La maladie, la vieillesse, l'accident du travail et le chômage, auxquelles s'ajoutent les charges de famille." },
          { q: "Cite deux limites de l'intervention publique.", r: "Le coût de la dépense publique et son financement, ainsi que la complexité des dispositifs et le risque de réduire l'incitation à l'activité." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Un impôt dont le taux s'élève avec le revenu est", suite: "progressif" },
          { debut: "Le fait de financer des prestations avec les prélèvements est la", suite: "redistribution" },
          { debut: "Les dispositifs qui couvrent maladie et chômage forment la protection", suite: "sociale" },
          { debut: "Des prestations versées à ceux qui n'ont aucune ressource sont des minima", suite: "sociaux" },
        ]},
      ],
    },
  ],
};

module.exports = U;
