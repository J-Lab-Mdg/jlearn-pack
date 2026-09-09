// ============================================================
// Unité VII — Sciences politiques et droit (PE T10 — 8 heures)
// RAS 1 : Évaluer les caractéristiques du pouvoir public
// RAS 2 : Identifier les fonctions du Droit
// Découpage : 3 séances de cours + 1 révision + 1 sujet d'examen
// Valeurs : Justice et équité, Culture de l'excellence
// ============================================================

const U = {
  num: "VII",
  titre: "Sciences politiques et droit",
  ras: "Évaluer les caractéristiques du pouvoir public · Identifier les fonctions du Droit",
  valeurs: "Justice et équité, Culture de l'excellence",
  duree: "8 heures",
  themes: [
    "Les éléments constitutifs du pouvoir politique",
    "Légitimité et souveraineté de l'État",
    "Les fonctions du droit",
  ],
  topics: [
    // ---------------------------------------------------------
    // SÉANCE 41 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les éléments constitutifs du pouvoir politique : État, nation, territoire",
      theme: "Sciences politiques et droit",
      ras: "Évaluer les caractéristiques du pouvoir public",
      valeurs: "Justice et équité, Culture de l'excellence",
      objectif: "distinguer les éléments constitutifs d'un État et définir État, nation, territoire et puissance publique",
      supportMeta: "Documents sur les institutions, carte d'un territoire, cahier",
      revision: [
        ["Qu'est-ce qu'une norme ?", "Une règle de conduite, écrite ou non, que le groupe attend de ses membres."],
        ["Qu'est-ce qu'un agent de socialisation ?", "Un groupe ou une institution qui transmet des normes et des valeurs à un individu."],
      ],
      mise: [
        "Qui décide de la construction d'une route, de l'ouverture d'une école et de la sécurité d'un village ?",
        "L'État, à travers ses administrations et ses représentants.",
      ],
      observation: "le tableau des éléments constitutifs de l'État affiché au tableau",
      observationSupport: "Documents sur les institutions et carte du territoire, tableau des éléments constitutifs",
      technAna: "Étude de document et questionnement dirigé",
      qa: [
        ["Qu'est-ce que le pouvoir politique ?", "Le pouvoir de prendre et de faire appliquer des décisions qui s'imposent à l'ensemble d'une société sur un territoire donné."],
        ["Qu'est-ce que l'État ?", "L'ensemble des institutions — gouvernement, administration, forces de l'ordre, justice — par lesquelles le pouvoir politique s'exerce sur une population et un territoire."],
        ["Quels sont les éléments constitutifs de l'État ?", "Une population, un territoire délimité par des frontières, un gouvernement organisé et la souveraineté, c'est-à-dire la capacité de décider sans être subordonné."],
        ["Qu'est-ce que la nation ?", "Une communauté humaine qui partage une histoire, une langue, une culture et la conscience d'appartenir au même ensemble."],
        ["Qu'est-ce qu'un État-nation ?", "Un État dont le territoire coïncide avec une nation : les habitants se reconnaissent comme appartenant à la même communauté politique."],
        ["Qu'est-ce que le territoire ?", "L'espace — terrestre, maritime et aérien — sur lequel l'État exerce sa puissance et où ses règles s'appliquent."],
        ["Qu'est-ce que la puissance publique ?", "La capacité de l'État de se faire obéir : administration, police, armée, justice, et les moyens de contraindre prévus par la loi."],
      ],
      synthese: "Donc, le pouvoir politique s'exerce par l'État, qui réunit quatre éléments : une population, un territoire aux frontières délimitées, un gouvernement organisé et la souveraineté. La nation est la communauté qui se reconnaît une histoire et une culture communes ; quand elle coïncide avec les frontières de l'État, on parle d'État-nation. La puissance publique est la capacité de faire appliquer les décisions.",
      motsCles: ["pouvoir politique", "État", "nation", "État-nation", "territoire", "puissance publique", "frontières"],
      image: { file: "u7_etat.png", legende: "Figure 12 — Les éléments constitutifs de l'État." },
      contenu: [
        {
          sousTitre: "1. Le pouvoir politique",
          texte: "Le pouvoir politique est le pouvoir de décider pour l'ensemble d'une société et de faire appliquer ces décisions, y compris par la contrainte prévue par la loi. Il se distingue du pouvoir d'un parent sur ses enfants ou d'un chef d'entreprise sur ses salariés : il s'exerce sur tous les habitants d'un territoire.",
          liste: [
            "Il décide : lois, budget, organisation des services publics.",
            "Il arbitre : répartir les ressources et trancher les conflits.",
            "Il contraint : sanctionner ceux qui n'obéissent pas aux règles.",
          ],
        },
        {
          sousTitre: "2. Les éléments constitutifs de l'État",
          texte: "Un État existe lorsqu'il réunit une population, un territoire, un gouvernement et la souveraineté.",
          liste: [
            "Une population : les habitants permanents du territoire.",
            "Un territoire : sol, sous-sol, eaux intérieures, mer territoriale et espace aérien, délimités par des frontières.",
            "Un gouvernement ou une organisation politique : les institutions qui exercent le pouvoir.",
            "La souveraineté : le pouvoir suprême de décider sans dépendre d'une autre autorité.",
          ],
        },
        {
          sousTitre: "3. Nation et État-nation",
          texte: "La nation est une communauté de sentiment et de mémoire ; l'État est une organisation de pouvoir. Les deux ne se confondent pas toujours.",
          liste: [
            "Une nation partage une histoire, une langue, une culture et une volonté de vivre ensemble.",
            "Un État-nation apparaît quand les limites de l'État et celles de la nation se superposent.",
            "Un même État peut abriter plusieurs groupes culturels ; une même nation peut être répartie entre plusieurs États.",
          ],
        },
        {
          sousTitre: "4. La puissance publique",
          texte: "L'État dispose de moyens propres pour faire appliquer ses décisions : c'est la puissance publique.",
          liste: [
            "L'administration : les services qui appliquent les décisions publiques.",
            "La force publique : police et gendarmerie, armée en cas de menace extérieure.",
            "La justice : les tribunaux, qui sanctionnent les manquements à la loi.",
            "Les ressources publiques : l'impôt, qui finance l'action de l'État.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Comment se manifeste l'État au quotidien ?",
          liste: [
            "L'état civil : la déclaration d'une naissance.",
            "L'école publique : les programmes et les enseignants.",
            "La route : son entretien par les services de l'État ou de la commune.",
            "La sécurité : la présence des forces de l'ordre.",
            "La justice : le tribunal qui tranche un litige entre deux personnes.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Un État réunit…", opts: ["une population, un territoire, un gouvernement et la souveraineté", "une seule famille", "une entreprise"], ok: 0, expl: "Ce sont les quatre éléments constitutifs." },
          { q: "La nation se définit surtout par…", opts: ["une histoire, une langue et une culture partagées", "un budget", "un tribunal"], ok: 0, expl: "C'est une communauté de mémoire et de sentiment d'appartenance." },
          { q: "La puissance publique est…", opts: ["la capacité de l'État de se faire obéir", "la richesse des habitants", "un impôt"], ok: 0, expl: "Administration, police, justice et armée en sont les moyens." },
          { q: "Un État-nation apparaît quand…", opts: ["les frontières de l'État coïncident avec une nation", "l'État n'a pas de territoire", "il n'y a pas de gouvernement"], ok: 0, expl: "La communauté politique et la communauté culturelle se superposent." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le territoire d'un État se limite au sol.", rep: false, expl: "Il comprend aussi les eaux intérieures, la mer territoriale et l'espace aérien." },
          { txt: "La nation et l'État sont deux réalités distinctes.", rep: true, expl: "La nation est une communauté ; l'État est une organisation de pouvoir." },
          { txt: "L'impôt finance l'action de l'État.", rep: true, expl: "Il permet de payer les services publics et les agents de l'État." },
          { txt: "Un État peut exister sans population.", rep: false, expl: "La population est l'un des éléments constitutifs de l'État." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite les quatre éléments constitutifs de l'État.", r: "Une population, un territoire délimité par des frontières, un gouvernement organisé et la souveraineté." },
          { q: "Donne la définition de la nation.", r: "La nation est une communauté humaine qui partage une histoire, une langue, une culture et la conscience d'appartenir au même ensemble." },
          { q: "Qu'est-ce que la puissance publique ?", r: "C'est la capacité de l'État de se faire obéir, grâce à l'administration, à la force publique et à la justice." },
          { q: "Quelle différence y a-t-il entre un État et une nation ?", r: "L'État est une organisation de pouvoir sur un territoire, tandis que la nation est une communauté liée par l'histoire, la langue et la culture." },
        ]},
        { type: "appariement", consigne: "Relie chaque élément à sa définition.", pointsPar: 1, items: [
          { g: ["Population", "Territoire", "Gouvernement", "Souveraineté"], d: ["Espace où l'État exerce sa puissance", "Institutions qui exercent le pouvoir", "Pouvoir suprême de décider", "Habitants permanents de l'État"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 42 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Légitimité et souveraineté de l'État",
      theme: "Sciences politiques et droit",
      ras: "Évaluer les caractéristiques du pouvoir public",
      valeurs: "Justice et équité, Culture de l'excellence",
      objectif: "expliquer ce qui fonde la légitimité de l'État et ce qu'est la souveraineté",
      supportMeta: "Documents sur les élections et les institutions, cahier",
      revision: [
        ["Cite les quatre éléments constitutifs de l'État.", "Une population, un territoire, un gouvernement et la souveraineté."],
        ["Qu'est-ce que la puissance publique ?", "La capacité de l'État de se faire obéir."],
      ],
      mise: [
        "Pourquoi obéit-on à une décision de l'État même quand on n'est pas d'accord avec elle ?",
        "Parce que l'État est reconnu comme légitime : sa décision a été prise selon les règles, au nom de tous.",
      ],
      observation: "les documents décrivant les règles de désignation des responsables publics",
      observationSupport: "Documents sur les élections, la Constitution et les institutions, affichés ou distribués",
      technAna: "Étude de document, débat dirigé et questionnement",
      qa: [
        ["Qu'est-ce que la légitimité ?", "La reconnaissance, par la population, du droit qu'a le pouvoir de commander ; un pouvoir légitime est obéi parce qu'il est accepté, pas seulement par crainte."],
        ["Quelles sont les sources de la légitimité ?", "Le respect des règles de désignation, en particulier les élections régulières ; la conformité à la Constitution ; l'efficacité de l'action publique ; l'adhésion à des valeurs partagées."],
        ["Qu'est-ce que la légalité ?", "La conformité d'une décision aux règles de droit en vigueur : une décision peut être légale sans être jugée juste par tous."],
        ["Qu'est-ce que la souveraineté ?", "Le caractère suprême du pouvoir de l'État : il décide en dernier ressort sur son territoire et ne dépend d'aucune autre autorité."],
        ["Quelle différence y a-t-il entre souveraineté intérieure et souveraineté extérieure ?", "La souveraineté intérieure s'exerce sur le territoire et la population ; la souveraineté extérieure est l'indépendance de l'État vis-à-vis des autres États et des organisations internationales."],
        ["La souveraineté est-elle absolue ?", "Elle peut être limitée par les engagements internationaux librement consentis et par les règles que l'État s'impose à lui-même, notamment la Constitution."],
        ["Pourquoi la légitimité est-elle nécessaire à l'efficacité du pouvoir ?", "Parce qu'un pouvoir obéi par la seule contrainte coûte cher et reste fragile ; un pouvoir reconnu obtient l'adhésion et la coopération."],
      ],
      synthese: "Donc, la légitimité est la reconnaissance du droit de commander : elle repose sur le respect des règles de désignation, des élections et de la Constitution. La souveraineté est le caractère suprême du pouvoir : intérieure sur le territoire, extérieure face aux autres États. Un pouvoir légitime est plus efficace, car il obtient l'obéissance par l'adhésion et non par la seule contrainte.",
      motsCles: ["légitimité", "légalité", "élections", "Constitution", "souveraineté", "indépendance", "adhésion"],
      contenu: [
        {
          sousTitre: "1. La légitimité du pouvoir",
          texte: "Un pouvoir n'est pas seulement une force : il est aussi une autorité reconnue. La légitimité est ce qui fait accepter une décision par ceux à qui elle s'applique.",
          liste: [
            "Légitimité par les règles : les responsables sont désignés selon des procédures connues et acceptées.",
            "Légitimité par les élections : la désignation régulière des représentants par les citoyens.",
            "Légitimité par les résultats : un pouvoir qui assure la sécurité, l'école et la santé inspire confiance.",
            "Légitimité par les valeurs : le respect de la justice, de l'équité et de la dignité des personnes.",
          ],
        },
        {
          sousTitre: "2. Légalité et légitimité",
          texte: "Les deux notions ne se confondent pas : une règle peut être respectée sans être considérée comme juste, et une décision jugée juste peut ne pas être prévue par la loi.",
          liste: [
            "Est légal ce qui est conforme aux règles de droit en vigueur.",
            "Est légitime ce qui est reconnu comme fondé et acceptable par la société.",
            "Un pouvoir durable cherche à être à la fois légal et légitime.",
          ],
        },
        {
          sousTitre: "3. La souveraineté",
          texte: "La souveraineté est le caractère suprême et originaire du pouvoir de l'État : il ne s'appuie sur aucun pouvoir supérieur.",
          liste: [
            "Souveraineté intérieure : l'État édicte des règles qui s'imposent à tous sur son territoire.",
            "Souveraineté extérieure : l'État conduit librement sa politique étrangère et conclut des traités.",
            "La souveraineté appartient à la nation : les représentants l'exercent au nom du peuple.",
          ],
        },
        {
          sousTitre: "4. Les limites de la souveraineté",
          texte: "Être souverain ne signifie pas agir sans aucune contrainte : l'État s'engage et se limite lui-même.",
          liste: [
            "La Constitution : l'État fixe lui-même les règles qu'il ne peut pas violer.",
            "Les traités internationaux : un engagement librement consenti doit être respecté.",
            "La coopération régionale : certaines décisions sont prises avec d'autres États.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Une décision publique contestée :",
          liste: [
            "Une commune décide d'interdire la construction sur une zone inondable.",
            "La décision est légale : elle s'appuie sur un texte applicable.",
            "Elle est contestée par des habitants qui s'estiment lésés : ils peuvent la discuter ou la contester devant le juge.",
            "L'État garde le dernier mot sur son territoire, mais il doit rendre des comptes : c'est la contrepartie de sa légitimité.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La légitimité est…", opts: ["la reconnaissance du droit de commander", "l'argent de l'État", "un impôt"], ok: 0, expl: "Un pouvoir légitime est accepté, pas seulement subi." },
          { q: "Est légal ce qui est…", opts: ["conforme aux règles de droit en vigueur", "jugé juste par chacun", "décidé par un voisin"], ok: 0, expl: "La légalité se mesure à la conformité aux textes." },
          { q: "La souveraineté intérieure s'exerce…", opts: ["sur le territoire et la population", "uniquement à l'étranger", "dans une entreprise"], ok: 0, expl: "L'État décide en dernier ressort sur son territoire." },
          { q: "La souveraineté peut être limitée par…", opts: ["la Constitution et les traités internationaux", "l'opinion d'un passant", "la météo"], ok: 0, expl: "L'État s'impose des règles et respecte ses engagements." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Un pouvoir légitime est obéi uniquement par la contrainte.", rep: false, expl: "Il est accepté parce que reconnu fondé ; la contrainte ne suffit pas à le rendre légitime." },
          { txt: "Des élections régulières contribuent à la légitimité du pouvoir.", rep: true, expl: "La désignation selon des règles connues fonde la reconnaissance." },
          { txt: "La souveraineté extérieure est l'indépendance de l'État face aux autres États.", rep: true, expl: "Elle permet de conduire librement sa politique étrangère." },
          { txt: "Une décision légale est toujours jugée juste par tous.", rep: false, expl: "Légalité et légitimité sont deux notions distinctes." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Donne la définition de la légitimité.", r: "La légitimité est la reconnaissance, par la population, du droit qu'a le pouvoir de commander." },
          { q: "Cite deux sources de la légitimité d'un pouvoir.", r: "Le respect des règles de désignation, en particulier des élections, et la conformité à la Constitution." },
          { q: "Quelle différence y a-t-il entre souveraineté intérieure et souveraineté extérieure ?", r: "La souveraineté intérieure s'exerce sur le territoire et la population ; la souveraineté extérieure est l'indépendance de l'État face aux autres États." },
          { q: "Pourquoi un pouvoir légitime est-il plus efficace ?", r: "Parce qu'il obtient l'obéissance par l'adhésion et la coopération, alors qu'un pouvoir imposé par la seule force coûte cher et reste fragile." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["légitimité", "légalité", "élections", "souveraineté", "Constitution"], items: [
          { phrase: "Le droit de commander reconnu par la population est la _________.", mot: "légitimité" },
          { phrase: "La conformité d'une décision aux règles de droit est la _________.", mot: "légalité" },
          { phrase: "La désignation régulière des représentants se fait par des _________.", mot: "élections" },
          { phrase: "Le caractère suprême du pouvoir de l'État est la _________.", mot: "souveraineté" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 43 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les fonctions du droit",
      theme: "Sciences politiques et droit",
      ras: "Identifier les fonctions du Droit",
      valeurs: "Justice et équité, Culture de l'excellence",
      objectif: "identifier les fonctions du droit : garantir les libertés, organiser la vie en société et pacifier les conflits",
      supportMeta: "Documents juridiques simples, étude de cas, cahier",
      revision: [
        ["Qu'est-ce que la légitimité ?", "La reconnaissance par la population du droit qu'a le pouvoir de commander."],
        ["Qu'est-ce que la souveraineté extérieure ?", "L'indépendance de l'État vis-à-vis des autres États."],
      ],
      mise: [
        "Deux voisins se disputent une parcelle. Que fait-on plutôt que de se battre ?",
        "On porte l'affaire devant les anciens, puis devant le tribunal, qui tranche selon la loi.",
      ],
      observation: "le document juridique et l'étude de cas distribués en classe",
      observationSupport: "Extraits de textes juridiques et étude de cas de litige, tableau des fonctions du droit",
      technAna: "Étude de cas, débat dirigé et jeu de rôle",
      qa: [
        ["Qu'est-ce que le droit ?", "L'ensemble des règles générales, écrites et obligatoires, qui organisent la vie en société et dont le non-respect est sanctionné."],
        ["Quelle est la première fonction du droit ?", "Garantir les libertés : la loi protège la personne, sa dignité, ses biens et ses opinions, et fixe les limites de l'action de l'État."],
        ["Quelle est la deuxième fonction du droit ?", "Organiser la vie en société : il fixe les règles du mariage, de la propriété, du travail, du commerce, de la circulation et de la scolarité."],
        ["Quelle est la troisième fonction du droit ?", "Pacifier la société : il offre une procédure pour régler les conflits sans recourir à la violence, par la médiation, la conciliation ou le jugement."],
        ["Le droit se confond-il avec la morale ?", "Non : la morale relève de la conscience de chacun, tandis que le droit est une règle extérieure, écrite et sanctionnée par une autorité."],
        ["Que se passe-t-il si une règle de droit n'est pas respectée ?", "Une sanction est prévue : réparation du dommage, amende, ou peine plus grave selon le cas."],
        ["Pourquoi les règles doivent-elles être connues à l'avance ?", "Parce que chacun doit pouvoir savoir ce qui est permis et ce qui est interdit avant d'agir : c'est la sécurité juridique."],
      ],
      synthese: "Donc, le droit remplit trois fonctions essentielles : il garantit les libertés de chacun, il organise la vie en société en fixant des règles connues à l'avance, et il pacifie les relations en offrant une procédure pour régler les conflits sans violence. Il ne se confond pas avec la morale : ses règles sont écrites, générales et sanctionnées.",
      motsCles: ["droit", "libertés", "règle", "sanction", "pacification", "justice", "sécurité juridique"],
      image: { file: "u7_droit.png", legende: "Figure 13 — Les trois fonctions du droit." },
      contenu: [
        {
          sousTitre: "1. Le droit : des règles générales et sanctionnées",
          texte: "Une règle de droit est générale, obligatoire et assortie d'une sanction. Elle est écrite dans des textes : Constitution, lois, règlements, contrats.",
          liste: [
            "Générale : elle s'applique à tous dans la même situation.",
            "Obligatoire : personne ne peut décider seul de ne pas l'appliquer.",
            "Sanctionnée : le non-respect entraîne une conséquence prévue par la loi.",
          ],
        },
        {
          sousTitre: "2. Fonction 1 — Garantir les libertés",
          texte: "Le droit protège la personne contre l'arbitraire, qu'il vienne d'un autre particulier ou de l'État lui-même.",
          liste: [
            "La liberté d'aller et venir et la sûreté de la personne.",
            "La liberté d'expression et d'opinion, dans les limites fixées par la loi.",
            "Le droit de propriété et la liberté de contracter.",
            "La protection de la vie privée et de la dignité.",
          ],
        },
        {
          sousTitre: "3. Fonction 2 — Organiser la vie en société",
          texte: "Le droit donne un cadre stable aux activités collectives : chacun sait à quoi s'en tenir.",
          liste: [
            "L'état civil : naissance, mariage, décès.",
            "La propriété et les contrats : vendre, louer, emprunter.",
            "Le travail : contrat, durée, rémunération, sécurité.",
            "La circulation : code de la route, transports.",
            "La scolarité et l'organisation des services publics.",
          ],
        },
        {
          sousTitre: "4. Fonction 3 — Pacifier la société",
          texte: "Le droit offre des procédures pour trancher les conflits sans violence : c'est la fonction de pacification.",
          liste: [
            "La médiation et la conciliation : un tiers aide les parties à trouver un accord.",
            "Le recours au juge : le tribunal tranche et sa décision s'impose.",
            "La sanction : réparer le dommage, payer une amende, ou subir une peine.",
            "La sécurité juridique : des règles connues à l'avance évitent les conflits inutiles.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Un litige de bornage entre deux voisins :",
          liste: [
            "Première étape : les familles tentent une conciliation avec l'aide des anciens du village.",
            "Deuxième étape : à défaut d'accord, le tribunal est saisi et examine les titres de propriété.",
            "Troisième étape : le juge rend une décision qui fixe la limite et s'impose aux deux parties.",
            "Le conflit est réglé sans violence : c'est la pacification par le droit.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une règle de droit est…", opts: ["générale, obligatoire et sanctionnée", "facultative", "secrète"], ok: 0, expl: "Ces trois caractères la distinguent d'une simple habitude." },
          { q: "Parmi les fonctions du droit, on trouve…", opts: ["garantir les libertés", "fixer les prix du marché", "choisir une série"], ok: 0, expl: "Le droit protège la personne et ses libertés fondamentales." },
          { q: "La pacification par le droit consiste à…", opts: ["régler les conflits par une procédure plutôt que par la violence", "laisser chacun se faire justice", "supprimer les tribunaux"], ok: 0, expl: "Médiation, conciliation et jugement remplacent l'affrontement." },
          { q: "Le droit et la morale…", opts: ["ne se confondent pas", "sont identiques", "sont deux mots pour la même chose"], ok: 0, expl: "La morale relève de la conscience ; le droit est écrit et sanctionné." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le droit fixe des règles connues à l'avance.", rep: true, expl: "C'est la sécurité juridique : chacun sait ce qui est permis et interdit." },
          { txt: "Le droit n'a aucun rôle dans l'organisation du travail.", rep: false, expl: "Il encadre le contrat, la durée, la rémunération et la sécurité." },
          { txt: "Une règle de droit non respectée expose à une sanction.", rep: true, expl: "La sanction est ce qui distingue la règle de droit du simple conseil." },
          { txt: "Le droit encourage chacun à se faire justice soi-même.", rep: false, expl: "Il offre au contraire une procédure pour éviter la violence privée." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite les trois fonctions du droit.", r: "Garantir les libertés, organiser la vie en société et pacifier les conflits." },
          { q: "Qu'est-ce que la fonction de pacification du droit ?", r: "C'est le fait d'offrir une procédure — médiation, conciliation, jugement — pour régler un conflit sans recourir à la violence." },
          { q: "Quelle différence y a-t-il entre le droit et la morale ?", r: "La morale relève de la conscience de chacun, tandis que le droit est une règle écrite, générale et sanctionnée par une autorité." },
          { q: "Pourquoi les règles de droit doivent-elles être connues à l'avance ?", r: "Parce que chacun doit pouvoir savoir ce qui est permis et interdit avant d'agir : c'est la sécurité juridique." },
        ]},
        { type: "appariement", consigne: "Relie chaque situation à la fonction du droit correspondante.", pointsPar: 1, items: [
          { g: ["Un tribunal tranche un litige de bornage", "La loi protège la liberté d'expression", "Le code de la route règle la circulation", "Une amende sanctionne une infraction"], d: ["Organiser la vie en société", "Sanctionner le non-respect de la règle", "Pacifier la société", "Garantir les libertés"], pairs: [[0, 2], [1, 3], [2, 0], [3, 1]] },
        ]},
      ],
    },
  ],
};

module.exports = U;
