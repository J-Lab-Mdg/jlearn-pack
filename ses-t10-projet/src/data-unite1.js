// ============================================================
// Unité I — Orientation scolaire et professionnelle (PE T10 — 8 heures)
// RAS du programme :
//   RAS 1 : Déterminer l'importance du diplôme par rapport à l'emploi
//   RAS 2 : Analyser les spécificités de chaque série
//   RAS 3 : Étudier un projet d'orientation
// Découpage validé : 3 séances de cours (2 h) + 1 révision (1 h) + 1 examen (1 h)
// Valeurs : Autonomie, Culture de l'excellence
// ============================================================

const U = {
  num: "I",
  titre: "Orientation scolaire et professionnelle",
  ras: "Déterminer l'importance du diplôme par rapport à l'emploi · Analyser les spécificités de chaque série · Étudier un projet d'orientation",
  valeurs: "Autonomie, Culture de l'excellence",
  duree: "8 heures",
  themes: [
    "Le diplôme et l'emploi",
    "Les séries du lycée et leurs débouchés",
    "Construire son projet d'orientation",
  ],
  topics: [
    // ---------------------------------------------------------
    // SÉANCE 1 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      duree: "2 h",
      titre: "Le diplôme et l'emploi",
      theme: "Orientation scolaire et professionnelle",
      ras: "Déterminer l'importance du diplôme par rapport à l'emploi",
      valeurs: "Autonomie, Culture de l'excellence",
      objectif: "distinguer diplôme, formation et emploi et expliquer l'importance du diplôme pour accéder à un emploi",
      supportMeta: "Extraits d'offres d'emploi, tableau préétabli, cahier",
      revision: [
        ["Pourquoi vas-tu à l'école chaque jour ?", "Pour apprendre, obtenir un diplôme et préparer mon avenir."],
        ["Que faisaient les élèves de la classe de T9 à la fin de l'année ?", "Ils passaient les examens de fin d'année et entraient au lycée."],
      ],
      mise: [
        "Pourquoi tes parents insistent-ils pour que tu travailles bien à l'école ?",
        "Pour que je réussisse, que j'aie un diplôme et que je trouve plus tard un travail.",
      ],
      observation: "les extraits d'offres d'emploi affichés au tableau",
      observationSupport: "Extraits d'offres d'emploi (journaux, affiches) ou tableau préétabli par l'enseignant",
      technAna: "Étude de document et questionnement dirigé",
      qa: [
        ["Que demande-t-on dans une offre d'emploi ?", "On demande un diplôme, une formation, parfois de l'expérience et des qualités personnelles comme la ponctualité."],
        ["Qu'est-ce qu'un diplôme ?", "C'est un document officiel qui atteste la réussite à un examen et le niveau d'études atteint par une personne."],
        ["Qu'appelle-t-on un emploi ?", "C'est une activité exercée contre une rémunération, pour le compte d'un employeur ou à son propre compte."],
        ["Le diplôme suffit-il toujours pour obtenir un emploi ?", "Non : il facilite l'accès à l'emploi, mais il faut aussi une formation adaptée, des compétences et souvent de l'expérience."],
        ["Quelles sont les principales exigences du monde du travail ?", "La ponctualité, la discipline, le respect des consignes, le travail en équipe, la maîtrise des langues et des outils numériques."],
        ["Pourquoi l'école demande-t-elle autant d'efforts ?", "Parce qu'elle développe les connaissances, les compétences et les attitudes exigées plus tard dans le monde du travail."],
      ],
      synthese: "Donc, le diplôme est la reconnaissance officielle d'un niveau d'études et de compétences : il ouvre la porte de l'emploi mais ne le garantit pas. L'obtention d'un emploi dépend aussi de la formation, des compétences, de l'expérience et des qualités personnelles exigées par le monde du travail.",
      motsCles: ["diplôme", "emploi", "formation", "compétences", "monde du travail", "exigences"],
      image: { file: "u1_emploi.png", legende: "Figure 1 — De l'école à l'emploi : le diplôme, une étape décisive." },
      contenu: [
        {
          sousTitre: "1. Les rôles de l'école",
          texte: "L'école ne sert pas seulement à apprendre des leçons. Elle prépare progressivement l'élève à la vie adulte et à la vie active.",
          liste: [
            "Elle instruit : elle transmet des connaissances dans les différentes disciplines.",
            "Elle forme : elle développe des savoir-faire utiles dans un métier (lire, calculer, rédiger, utiliser un ordinateur).",
            "Elle éduque : elle développe des savoir-être (ponctualité, respect, esprit d'équipe, sens des responsabilités).",
            "Elle prépare à l'orientation : elle permet de découvrir des métiers et de choisir une série d'études.",
          ],
        },
        {
          sousTitre: "2. Le diplôme",
          texte: "Le diplôme est un document officiel délivré après la réussite à un examen. Il atteste un niveau d'études et un ensemble de connaissances acquises. Il est reconnu par l'État, par les employeurs et par les établissements d'enseignement supérieur.",
          liste: [
            "Il atteste la réussite à un examen organisé à la fin d'un cycle d'études.",
            "Il donne accès à la classe ou à la formation supérieure suivante.",
            "Il est souvent exigé dans une offre d'emploi : c'est le « ticket d'entrée ».",
            "Il rassure l'employeur sur le niveau de formation de la personne recrutée.",
          ],
        },
        {
          sousTitre: "3. L'emploi",
          texte: "L'emploi est une activité professionnelle occupée par une personne et rémunérée. On distingue le travail salarié, où la personne travaille pour un employeur contre un salaire, et le travail indépendant, où la personne exerce à son propre compte (artisan, commerçant, exploitant agricole, entrepreneur).",
          liste: [
            "Le salarié reçoit un salaire et obéit aux consignes de l'employeur.",
            "Le travailleur indépendant organise lui-même son activité et en tire un revenu.",
            "L'emploi peut se trouver dans le secteur formel (entreprise déclarée, administration) ou dans le secteur informel (petites activités non déclarées).",
          ],
        },
        {
          sousTitre: "4. Diplôme et emploi : un lien réel mais pas automatique",
          texte: "Le diplôme augmente fortement les chances d'obtenir un emploi, mais il ne le garantit pas. Il existe des personnes diplômées sans emploi, et des personnes sans diplôme qui travaillent. Cela s'explique par plusieurs facteurs.",
          liste: [
            "L'inadéquation entre la formation suivie et les besoins des entreprises : on a formé des gens dans des spécialités où peu d'emplois existent.",
            "Le manque d'expérience professionnelle demandé par les employeurs.",
            "Le niveau de qualification : plus le diplôme est élevé et adapté, plus l'accès à l'emploi est facile.",
            "Les qualités personnelles et la mobilité : accepter de se déplacer, de se former encore, de travailler en équipe.",
          ],
        },
        {
          sousTitre: "5. Les exigences du monde du travail",
          texte: "Le monde du travail attend de la part d'un jeune bien plus que la seule possession d'un diplôme. Les employeurs formulent des exigences précises, souvent écrites dans les offres d'emploi.",
          liste: [
            "La ponctualité et l'assiduité : arriver à l'heure et être présent régulièrement.",
            "La discipline et le respect des consignes de sécurité.",
            "La maîtrise des langues : le français pour les écrits professionnels, l'anglais pour les échanges internationaux.",
            "Les compétences numériques : traitement de texte, tableur, messagerie, recherche d'informations.",
            "L'esprit d'équipe et la capacité à communiquer poliment avec les collègues et les clients.",
            "L'autonomie et le sens des responsabilités : savoir terminer une tâche sans être surveillé.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Un avis de recrutement affiché par une entreprise de la capitale :",
          liste: [
            "Poste : agent de saisie et de suivi des commandes.",
            "Diplôme demandé : baccalauréat, série OSE ou S.",
            "Formation demandée : maîtrise du tableur et du traitement de texte.",
            "Qualités demandées : ponctualité, rigueur, esprit d'équipe.",
            "Expérience : débutant accepté, stage apprécié.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse en écrivant la lettre correspondante.", pointsPar: 1, items: [
          { q: "Un diplôme est…", opts: ["un document officiel attestant un niveau d'études", "un contrat de travail", "un bulletin de salaire"], ok: 0, expl: "Le diplôme atteste la réussite à un examen et un niveau d'études." },
          { q: "Un emploi est une activité…", opts: ["bénévole toujours", "rémunérée", "scolaire"], ok: 1, expl: "L'emploi est une activité professionnelle rémunérée." },
          { q: "Le travailleur indépendant…", opts: ["reçoit un salaire d'un employeur", "exerce à son propre compte", "n'a jamais de revenu"], ok: 1, expl: "Il organise lui-même son activité et en tire un revenu." },
          { q: "Parmi les exigences du monde du travail, on trouve…", opts: ["la ponctualité et la discipline", "l'absence de formation", "le refus de travailler en équipe"], ok: 0, expl: "Les employeurs exigent ponctualité, discipline et esprit d'équipe." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le diplôme garantit automatiquement un emploi.", rep: false, expl: "Il facilite l'accès à l'emploi mais ne le garantit pas : comptent aussi la formation, l'expérience et les qualités personnelles." },
          { txt: "Un salarié travaille pour le compte d'un employeur contre un salaire.", rep: true, expl: "C'est la définition du travail salarié." },
          { txt: "La maîtrise des outils numériques est devenue une exigence fréquente des employeurs.", rep: true, expl: "Traitement de texte, tableur et messagerie sont demandés dans la plupart des postes de bureau." },
          { txt: "L'inadéquation entre formation et besoins des entreprises explique le chômage de certains diplômés.", rep: true, expl: "On peut être diplômé dans une spécialité où les débouchés sont rares." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds à chaque question par une phrase complète.", pointsPar: 2, items: [
          { q: "Donne la définition d'un diplôme.", r: "Un diplôme est un document officiel qui atteste la réussite à un examen et le niveau d'études atteint." },
          { q: "Donne la définition d'un emploi.", r: "Un emploi est une activité professionnelle occupée par une personne et rémunérée." },
          { q: "Cite deux exigences du monde du travail.", r: "Deux exigences du monde du travail sont la ponctualité et l'esprit d'équipe (ou la maîtrise des langues, la discipline, les compétences numériques)." },
          { q: "Pourquoi un diplômé peut-il rester sans emploi ?", r: "Parce que sa formation ne correspond pas toujours aux besoins des entreprises, qu'il manque d'expérience ou que le nombre d'emplois offerts est insuffisant." },
        ]},
        { type: "trous", consigne: "Complète chaque phrase avec le mot qui convient.", pointsPar: 1, mots: ["diplôme", "emploi", "formation", "salaire", "expérience"], items: [
          { phrase: "Le _________ atteste la réussite à un examen et un niveau d'études.", mot: "diplôme" },
          { phrase: "Le salarié travaille pour un employeur et reçoit un _________.", mot: "salaire" },
          { phrase: "Une _________ adaptée aux besoins des entreprises facilite l'accès à un emploi.", mot: "formation" },
          { phrase: "Beaucoup d'offres d'_________ demandent une première _________ professionnelle.", mot: "emploi", corrige: "Beaucoup d'offres d'emploi demandent une première expérience professionnelle." },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 2 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      duree: "2 h",
      titre: "Les séries du lycée et leurs débouchés",
      theme: "Orientation scolaire et professionnelle",
      ras: "Analyser les spécificités de chaque série",
      valeurs: "Autonomie, Culture de l'excellence",
      objectif: "identifier les séries du lycée, leurs matières dominantes et les études et carrières correspondantes",
      supportMeta: "Tableau des séries, brochures et listes de formations, cahier",
      revision: [
        ["Qu'est-ce qu'un diplôme ?", "Un document officiel qui atteste la réussite à un examen et un niveau d'études."],
        ["Le diplôme suffit-il à obtenir un emploi ?", "Non : il facilite l'accès à l'emploi, mais il faut aussi une formation, des compétences et de l'expérience."],
      ],
      mise: [
        "À la fin de l'année de T10, quel choix important devras-tu faire ?",
        "Je devrai choisir une série : L, S ou OSE.",
      ],
      observation: "le tableau des séries du lycée affiché au tableau",
      observationSupport: "Tableau des séries (matières dominantes, études supérieures, carrières) affiché ou distribué",
      technAna: "Étude de document, exposé et discussion dirigée",
      qa: [
        ["Quelles séries sont proposées au lycée ?", "Trois séries : la série L (littéraire), la série S (scientifique) et la série OSE (sciences économiques)."],
        ["Quelles sont les matières dominantes de la série L ?", "Les langues et la littérature, la philosophie, l'histoire et la géographie."],
        ["Quelles sont les matières dominantes de la série S ?", "Les mathématiques, les sciences physiques et les sciences de la vie et de la terre."],
        ["Quelles sont les matières dominantes de la série OSE ?", "Les sciences économiques et sociales, le droit, la gestion et la comptabilité."],
        ["Quels débouchés offre la série L ?", "L'enseignement, le journalisme, la communication, le droit, la traduction, les métiers de la culture et les carrières administratives."],
        ["Quels débouchés offrent les séries S et OSE ?", "La série S mène vers la médecine, l'ingénierie, l'agronomie, l'informatique et la recherche ; la série OSE mène vers la gestion, la comptabilité, l'économie, le commerce, la banque et l'entrepreneuriat."],
        ["Sur quoi faut-il s'appuyer pour choisir sa série ?", "Sur ses résultats scolaires, ses goûts, ses capacités, son projet de métier et les informations recueillies auprès des enseignants et des professionnels."],
      ],
      synthese: "Donc, le lycée propose trois séries — L, S et OSE — chacune avec ses matières dominantes, les études supérieures qu'elle prépare et les carrières auxquelles elle mène. Choisir une série, c'est préparer son avenir scolaire et professionnel : ce choix se fait à partir de ses résultats, de ses goûts et de son projet, en restant attentif aux passerelles possibles.",
      motsCles: ["série L", "série S", "série OSE", "débouchés", "études supérieures", "orientation"],
      image: { file: "u1_series.png", legende: "Figure 2 — Les séries du lycée et les débouchés possibles." },
      contenu: [
        {
          sousTitre: "1. Pourquoi des séries au lycée ?",
          texte: "Le lycée prépare à des études supérieures très différentes. Il propose donc des séries : une série est un ensemble cohérent de disciplines dominantes qui oriente l'élève vers un domaine d'études. Le choix de la série se fait à la fin de la classe de T10.",
        },
        {
          sousTitre: "2. La série L — littéraire",
          texte: "La série L met l'accent sur les langues, la littérature et la réflexion. Elle développe la culture générale, l'expression écrite et orale et l'analyse des textes et des sociétés.",
          liste: [
            "Matières dominantes : malagasy, français, anglais, philosophie, histoire et géographie.",
            "Études supérieures : lettres, langues, droit, sciences humaines, communication, journalisme, sciences de l'éducation.",
            "Carrières possibles : enseignant, traducteur, journaliste, juriste, chargé de communication, administrateur, métiers de la culture.",
          ],
        },
        {
          sousTitre: "3. La série S — scientifique",
          texte: "La série S met l'accent sur les mathématiques et les sciences expérimentales. Elle développe le raisonnement logique, la rigueur de mesure et l'esprit de démonstration.",
          liste: [
            "Matières dominantes : mathématiques, sciences physiques, sciences de la vie et de la terre.",
            "Études supérieures : médecine et santé, ingénierie, agronomie, informatique, géologie, statistique, recherche scientifique.",
            "Carrières possibles : médecin, ingénieur, pharmacien, agronome, informaticien, technicien supérieur, enseignant de sciences, chercheur.",
          ],
        },
        {
          sousTitre: "4. La série OSE — sciences économiques",
          texte: "La série OSE met l'accent sur les sciences économiques et sociales, le droit et la gestion. Elle développe l'analyse des phénomènes économiques et sociaux, le raisonnement sur les organisations et l'esprit entrepreneurial.",
          liste: [
            "Matières dominantes : sciences économiques et sociales, droit, gestion et comptabilité, mathématiques appliquées.",
            "Études supérieures : économie, gestion, comptabilité, commerce, banque et finance, droit, ressources humaines, entrepreneuriat.",
            "Carrières possibles : gestionnaire, comptable, économiste, banquier, entrepreneur, agent d'administration, commercial, enseignant d'économie.",
          ],
        },
        {
          sousTitre: "5. Comment choisir sa série ?",
          texte: "Le choix d'une série ne se fait ni au hasard ni uniquement par imitation des camarades. Il se prépare en croisant plusieurs informations.",
          liste: [
            "Ses résultats : réussit-on mieux dans les matières littéraires, scientifiques ou économiques ?",
            "Ses goûts : qu'est-ce qu'on aime étudier, lire, chercher, fabriquer ?",
            "Son projet : quel métier vise-t-on, et quelle série y mène ?",
            "Les informations fiables : enseignants, conseiller d'orientation, brochures des universités, témoignages de professionnels, salons des métiers.",
            "La réalité du marché du travail : quels sont les secteurs qui recrutent ?",
          ],
        },
        {
          sousTitre: "6. Un choix important mais pas définitif",
          texte: "Choisir une série oriente les études, mais il existe des passerelles et des réorientations possibles, surtout après le baccalauréat vers certaines formations. Le plus important reste le travail régulier : une série choisie avec sérieux et menée avec constance ouvre davantage de portes qu'une série « facile » abandonnée en cours de route.",
        },
      ],
      appExos: [
        { type: "appariement", consigne: "Relie chaque série aux études qu'elle prépare.", pointsPar: 1, items: [
          { g: ["Série L", "Série S", "Série OSE", "Série S (2e exemple)"], d: ["Études de médecine", "Études de lettres et de droit", "Études de gestion et de comptabilité", "Études d'agronomie"], pairs: [[0, 1], [1, 0], [2, 2], [3, 3]] },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La série OSE prépare aux métiers de la gestion et de la comptabilité.", rep: true, expl: "L'économie, la gestion et la comptabilité sont le cœur de la série OSE." },
          { txt: "La série L conduit principalement vers les études d'ingénierie.", rep: false, expl: "L'ingénierie est accessible surtout après une série S." },
          { txt: "Le choix de la série se fait à la fin de la classe de T10.", rep: true, expl: "C'est à la fin de la T10 que l'élève choisit sa série de T11." },
          { txt: "Une fois la série choisie, aucune réorientation n'est jamais possible.", rep: false, expl: "Des passerelles et des réorientations existent, en particulier après le baccalauréat." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite les trois séries du lycée.", r: "Les trois séries du lycée sont la série L, la série S et la série OSE." },
          { q: "Quelles sont les matières dominantes de la série S ?", r: "Les matières dominantes de la série S sont les mathématiques, les sciences physiques et les sciences de la vie et de la terre." },
          { q: "Cite deux carrières possibles après une série OSE.", r: "Après une série OSE, on peut devenir comptable ou gestionnaire (ou encore banquier, entrepreneur, agent d'administration)." },
          { q: "Cite deux informations à réunir avant de choisir sa série.", r: "Il faut réunir ses résultats scolaires et les informations sur les métiers visés, auprès des enseignants ou des professionnels." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "La série L développe surtout la culture générale et l'expression", suite: "écrite et orale" },
          { debut: "La série S prépare aux études de médecine, d'ingénierie et d'", suite: "agronomie" },
          { debut: "Le choix de la série se prépare à partir de ses résultats, de ses goûts et de son", suite: "projet de métier" },
          { debut: "La série OSE développe l'analyse des phénomènes économiques et", suite: "sociaux" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 3 — RAS 3
    // ---------------------------------------------------------
    {
      type: "cours",
      duree: "2 h",
      titre: "Construire son projet d'orientation",
      theme: "Orientation scolaire et professionnelle",
      ras: "Étudier un projet d'orientation",
      valeurs: "Autonomie, Culture de l'excellence",
      objectif: "élaborer un projet d'orientation en tenant compte de ses capacités, de ses intérêts et des besoins de l'économie et de la société",
      supportMeta: "Fiche de projet d'orientation, tableau préétabli, cahier",
      revision: [
        ["Quelles sont les trois séries du lycée ?", "La série L, la série S et la série OSE."],
        ["Sur quoi s'appuyer pour choisir sa série ?", "Sur ses résultats, ses goûts, son projet de métier et les informations recueillies auprès des enseignants et des professionnels."],
      ],
      mise: [
        "Si tu pouvais exercer plus tard le métier de ton choix, lequel serait-ce ?",
        "Les réponses varient : médecin, enseignant, entrepreneur, agriculteur, informaticien, artisan…",
      ],
      observation: "la fiche de projet d'orientation distribuée en classe",
      observationSupport: "Fiche de projet d'orientation (4 étapes) distribuée ou reproduite au tableau",
      technAna: "Travail de groupe et enquête sur les attentes professionnelles",
      qa: [
        ["Qu'appelle-t-on un projet d'orientation ?", "C'est une démarche personnelle qui relie ce que l'on aime, ce que l'on réussit, le métier visé et les étapes d'études à suivre pour l'atteindre."],
        ["Quelle est la première étape du projet ?", "Se connaître : repérer ses intérêts, ses capacités scolaires et ses qualités personnelles."],
        ["Que fait-on à l'étape « s'informer » ?", "On recherche des informations sur les séries, les formations, les métiers, les débouchés et les besoins du marché du travail."],
        ["Pourquoi faut-il tenir compte des besoins de l'économie ?", "Parce que certains secteurs recrutent davantage : choisir un secteur porteur augmente les chances de trouver un emploi ou de créer sa propre activité."],
        ["Quels secteurs offrent des besoins importants à Madagascar ?", "L'agriculture et l'élevage, la santé, l'enseignement, le bâtiment et les travaux publics, le numérique, l'énergie, le tourisme, la pêche et la transformation des produits locaux."],
        ["Quelles qualités faut-il pour mener son projet jusqu'au bout ?", "La constance dans l'effort, l'autonomie, l'esprit d'initiative, la patience et le sens des responsabilités."],
      ],
      synthese: "Donc, un projet d'orientation se construit en quatre temps : se connaître, s'informer, décider et s'engager. Il tient compte à la fois de ce que l'on aime, de ce que l'on réussit et des besoins présents et futurs de l'économie et de la société malgaches. Choisir tôt et travailler avec constance reste la meilleure façon de réussir son orientation.",
      motsCles: ["projet d'orientation", "intérêts", "capacités", "qualification", "besoins de l'économie", "constance"],
      image: { file: "u1_projet.png", legende: "Figure 3 — Les quatre étapes d'un projet d'orientation." },
      contenu: [
        {
          sousTitre: "1. Qu'est-ce qu'un projet d'orientation ?",
          texte: "Un projet d'orientation est une démarche réfléchie par laquelle un élève relie trois choses : ce qu'il aime (ses intérêts), ce qu'il réussit (ses capacités) et ce qu'il veut faire plus tard (son projet professionnel). Un projet n'est pas figé : il se précise et se corrige au fil des années.",
        },
        {
          sousTitre: "2. Étape 1 — Se connaître",
          texte: "Avant de choisir, il faut se poser des questions honnêtes sur soi-même.",
          liste: [
            "Quelles matières réussis-je le mieux ?",
            "Quelles activités est-ce que j'aime faire, même sans y être obligé ?",
            "Suis-je plutôt à l'aise avec les chiffres, les mots, les machines ou les relations avec les personnes ?",
            "Quelles sont mes qualités : rigueur, patience, sens du contact, créativité, esprit d'initiative ?",
            "Quelles difficultés dois-je encore travailler ?",
          ],
        },
        {
          sousTitre: "3. Étape 2 — S'informer",
          texte: "Un choix fondé sur des informations solides est plus sûr qu'un choix fait par imitation. Il faut chercher des renseignements auprès de sources fiables.",
          liste: [
            "Les enseignants et le conseiller d'orientation de l'établissement.",
            "Les brochures des universités, instituts et centres de formation professionnelle.",
            "Les anciens élèves qui poursuivent les études visées.",
            "Les professionnels rencontrés lors de stages, de visites d'entreprises ou de forums des métiers.",
            "Les offres d'emploi publiées : elles montrent les diplômes et compétences réellement demandés.",
          ],
        },
        {
          sousTitre: "4. Étape 3 — Décider",
          texte: "Décider, c'est choisir la série qui correspond le mieux à son projet, en connaissant les conséquences du choix et les efforts qu'il demande.",
          liste: [
            "Comparer les séries avec les débouchés et les formations supérieures visées.",
            "Vérifier que le métier souhaité est accessible depuis cette série.",
            "Mesurer les efforts à fournir : une série choisie demande un travail régulier pendant deux ans.",
            "Écrire sa décision sur la fiche de projet : c'est un engagement envers soi-même.",
          ],
        },
        {
          sousTitre: "5. Étape 4 — S'engager",
          texte: "Une décision ne vaut que par le travail qui la suit. L'engagement se traduit par des habitudes concrètes.",
          liste: [
            "Travailler régulièrement, sans attendre la veille des compositions.",
            "Demander de l'aide dès qu'une difficulté apparaît.",
            "Participer en classe : poser des questions, faire les exercices, travailler en groupe.",
            "Chercher des occasions de découvrir le métier visé : lecture, stages, visites, mini-projets, associations.",
            "Réévaluer son projet chaque fin d'année et l'ajuster si nécessaire.",
          ],
        },
        {
          sousTitre: "6. Les besoins présents et futurs de l'économie",
          texte: "Choisir un métier, c'est aussi regarder ce dont le pays a besoin. Une économie a besoin de personnes qualifiées dans des secteurs précis ; les jeunes qui s'y préparent trouvent plus facilement un emploi ou créent leur propre activité.",
          liste: [
            "Agriculture, élevage et transformation des produits locaux : sécurité alimentaire et exportation.",
            "Santé et action sociale : médecins, infirmiers, sages-femmes, agents communautaires.",
            "Enseignement et formation : enseignants du primaire comme du secondaire, formateurs professionnels.",
            "Bâtiment, travaux publics et énergie : routes, logements, électricité, eau potable.",
            "Numérique et télécommunications : développement d'applications, maintenance, services en ligne.",
            "Tourisme, artisanat et culture : valorisation du patrimoine et des produits locaux.",
          ],
        },
        {
          sousTitre: "Exemple de fiche de projet",
          texte: "Une fiche de projet d'orientation peut contenir les rubriques suivantes :",
          liste: [
            "Mes résultats : je réussis bien les mathématiques et les sciences économiques et sociales.",
            "Mes intérêts : j'aime compter, organiser et comprendre comment fonctionnent les entreprises.",
            "Mon métier visé : gestionnaire dans une entreprise, puis créer ma propre activité.",
            "Ma série choisie : série OSE, avec un travail renforcé en mathématiques appliquées.",
            "Mes engagements : deux heures de travail personnel par jour, remise des devoirs à temps, stage de découverte.",
            "Mes sources d'information : enseignants, brochures de l'université, rencontre avec un comptable.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La première étape d'un projet d'orientation est…", opts: ["s'informer", "se connaître", "s'engager"], ok: 1, expl: "Il faut d'abord repérer ses intérêts et ses capacités." },
          { q: "Parmi les secteurs qui recrutent, on peut citer…", opts: ["l'agriculture et la santé", "uniquement le commerce de détail", "aucun secteur en particulier"], ok: 0, expl: "L'agriculture et la santé figurent parmi les secteurs qui ont le plus de besoins." },
          { q: "Un projet d'orientation est…", opts: ["définitif dès la classe de T10", "une démarche qui relie intérêts, capacités et métier visé", "un document administratif obligatoire"], ok: 1, expl: "Il relie ce que l'on aime, ce que l'on réussit et le métier visé, et il peut être ajusté." },
          { q: "S'engager dans son projet signifie…", opts: ["attendre la fin de l'année pour travailler", "travailler régulièrement et demander de l'aide si besoin", "changer de série chaque trimestre"], ok: 1, expl: "L'engagement se traduit par un travail régulier et une participation active en classe." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["se connaître", "s'informer", "décider", "s'engager", "constance"], items: [
          { phrase: "Repérer ses intérêts et ses capacités, c'est _________.", mot: "se connaître" },
          { phrase: "Chercher des renseignements sur les métiers et les formations, c'est _________.", mot: "s'informer" },
          { phrase: "Choisir sa série en connaissant les efforts à fournir, c'est _________.", mot: "décider" },
          { phrase: "Travailler régulièrement pour réussir son choix, c'est _________.", mot: "s'engager" },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Qu'est-ce qu'un projet d'orientation ?", r: "Un projet d'orientation est une démarche qui relie ce que l'on aime, ce que l'on réussit et le métier que l'on veut exercer plus tard." },
          { q: "Cite deux secteurs de l'économie malgache qui ont d'importants besoins de main-d'œuvre qualifiée.", r: "Deux secteurs importants sont l'agriculture et la santé (on peut aussi citer l'enseignement, le bâtiment, le numérique ou le tourisme)." },
          { q: "Pourquoi la constance dans l'effort est-elle nécessaire à la réussite d'un projet ?", r: "Parce qu'une série choisie demande deux années de travail régulier : les résultats viennent de l'effort répété, pas d'une seule période de révision." },
        ]},
        { type: "appariement", consigne: "Relie chaque étape du projet à ce qu'elle désigne.", pointsPar: 1, items: [
          { g: ["Se connaître", "S'informer", "Décider", "S'engager"], d: ["Choisir la série après comparaison", "Travailler régulièrement et tenir ses engagements", "Repérer ses intérêts et ses capacités", "Chercher des renseignements sur les métiers"], pairs: [[0, 2], [1, 3], [2, 0], [3, 1]] },
        ]},
      ],
    },
  ],
};

module.exports = U;
