// ============================================================
// Unité IV — Socialisation de l'individu (PE T11 série OSE — 26 heures)
// RAS 1 : Déterminer les différentes formes de la socialisation
// RAS 2 : Analyser le contrôle social dans la société et les facteurs de la déviance
// Découpage : 12 séances de cours + 1 révision + 1 sujet d'examen
// Valeurs : Citoyenneté et patriotisme, Responsabilité
// ============================================================

const U = {
  num: "IV",
  titre: "Socialisation de l'individu",
  ras: "Déterminer les différentes formes de la socialisation · Analyser le contrôle social dans la société et les facteurs de la déviance",
  valeurs: "Citoyenneté et patriotisme, Responsabilité",
  duree: "26 heures",
  themes: [
    "La socialisation : définition et enjeux",
    "Personnalité sociale et identité sociale",
    "Le mécanisme de l'imitation",
    "L'injonction et l'interaction",
    "La socialisation primaire",
    "La socialisation secondaire",
    "Le contrôle social : formel et informel",
    "Normes juridiques et normes sociales",
    "Les sanctions",
    "La déviance : définition et manifestations",
    "L'anomie : l'affaiblissement des normes",
    "Étiquetage, stigmatisation et interactions sociales",
  ],
  topics: [
    // ---------------------------------------------------------
    // SÉANCE 44 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La socialisation : définition et enjeux",
      theme: "Socialisation de l'individu",
      ras: "Déterminer les différentes formes de la socialisation",
      valeurs: "Citoyenneté et patriotisme, Responsabilité",
      objectif: "définir la socialisation et expliquer pourquoi elle est nécessaire à la vie en société",
      supportMeta: "Documents et photographies de groupes, étude de cas, cahier",
      revision: [
        ["Qu'est-ce qu'un bien collectif ?", "Un bien non-rival et non-exclusif, comme l'éclairage public."],
        ["Cite un objectif de la politique économique de l'État.", "La croissance, l'emploi, la stabilité des prix ou l'équilibre extérieur."],
      ],
      mise: [
        "Un enfant élevé seul, sans jamais rencontrer personne, saurait-il parler ?",
        "Non : le langage, les gestes et les règles s'apprennent au contact des autres. C'est la socialisation.",
      ],
      observation: "les documents et photographies de groupes sociaux",
      observationSupport: "Documents et photographies de groupes : famille, classe, association, équipe sportive",
      technAna: "Étude de document, brainstorming et débat dirigé",
      qa: [
        ["Qu'est-ce que la socialisation ?", "Le processus par lequel un individu apprend et intériorise les manières d'agir, de penser et de sentir de son groupe, jusqu'à devenir un membre de la société."],
        ["Que transmet la socialisation ?", "Des normes, des valeurs, des croyances, une langue, des pratiques et des rôles sociaux."],
        ["La socialisation est-elle réservée à l'enfance ?", "Non : elle commence à la naissance et se poursuit toute la vie, à chaque fois que l'on entre dans un groupe nouveau — école, métier, association."],
        ["Qu'appelle-t-on l'inné et l'acquis ?", "L'inné est ce que l'individu possède à la naissance ; l'acquis est ce qu'il reçoit de son milieu. La socialisation relève de l'acquis."],
        ["Pourquoi la société a-t-elle besoin de la socialisation ?", "Parce qu'elle assure la cohésion : les membres partagent des repères communs, ce qui rend la vie collective possible et prévisible."],
        ["Que se passe-t-il quand la socialisation échoue ?", "L'individu se trouve en décalage avec les attentes du groupe : il risque l'exclusion, la marginalisation ou la déviance."],
        ["La socialisation supprime-t-elle la liberté individuelle ?", "Non : elle fournit des repères que chacun réinterprète. Chaque individu reste libre d'accepter, d'adapter ou de contester ce qu'il a reçu."],
        ["Quels groupes assurent cette transmission ?", "La famille d'abord, puis l'école, le groupe de pairs, le travail, les médias, la religion et les associations."],
      ],
      synthese: "Donc, la socialisation est le processus par lequel l'individu intériorise les normes, les valeurs et les pratiques de sa société. Elle commence à la naissance et continue toute la vie. Elle est la condition de la vie collective : sans repères partagés, aucune société ne tient.",
      motsCles: ["socialisation", "norme", "valeur", "intériorisation", "inné et acquis", "cohésion sociale", "intégration"],
      image: { file: "t11_u4_socialisation.jpg", legende: "Figure 38 — La socialisation : la famille, l'école et le groupe de pairs." },
      contenu: [
        {
          sousTitre: "1. Devenir membre de la société",
          texte: "On ne naît pas membre d'une société : on le devient par apprentissage.",
          liste: [
            "Le nouveau-né ne connaît ni la langue, ni les règles, ni les interdits.",
            "Il les acquiert au contact de son entourage, d'abord dans la famille.",
            "Ce processus transforme un individu biologique en personne sociale.",
          ],
        },
        {
          sousTitre: "2. Ce que la socialisation transmet",
          texte: "Quatre ensembles de contenus sont transmis en même temps.",
          liste: [
            "Les normes : les règles de conduite attendues.",
            "Les valeurs : ce que le groupe juge important et respectable.",
            "Les pratiques et les savoir-faire : la langue, les gestes, les métiers.",
            "Les rôles : ce qu'on attend d'un parent, d'un élève, d'un enseignant.",
          ],
        },
        {
          sousTitre: "3. L'inné et l'acquis",
          texte: "La socialisation relève de l'acquis : elle façonne ce que la nature a laissé ouvert.",
          liste: [
            "Inné : les dispositions biologiques présentes à la naissance.",
            "Acquis : tout ce qui vient de l'éducation et du milieu.",
            "Sans contact social, un enfant ne développe ni le langage ni les conduites sociales.",
            "Les exemples d'enfants isolés de tout contact montrent combien le lien social est vital.",
          ],
        },
        {
          sousTitre: "4. Un processus qui dure toute la vie",
          texte: "Chaque nouveau groupe impose un nouvel apprentissage.",
          liste: [
            "Entrée à l'école : apprendre les règles de la classe.",
            "Entrée dans un métier : apprendre les règles de l'entreprise.",
            "Arrivée dans une nouvelle ville : apprendre les usages locaux.",
            "On parle de socialisation continue : elle ne s'achève jamais vraiment.",
          ],
        },
        {
          sousTitre: "5. Pourquoi c'est essentiel",
          texte: "La socialisation produit ce qui fait tenir une société ensemble.",
          liste: [
            "Des repères partagés : chacun sait comment se comporter.",
            "Une identité : l'individu sait à quel groupe il appartient.",
            "Une cohésion : les comportements deviennent prévisibles.",
            "Sans elle : l'exclusion, la marginalisation, la déviance.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La socialisation est…", opts: ["le processus par lequel l'individu intériorise les normes de son groupe", "un don de la nature", "une maladie sociale"], ok: 0, expl: "Elle relève de l'acquis, transmis par l'entourage." },
          { q: "La socialisation s'arrête…", opts: ["jamais, elle continue toute la vie", "à la fin de l'enfance", "à l'entrée au collège"], ok: 0, expl: "Chaque nouveau groupe impose un nouvel apprentissage." },
          { q: "Ce qui est présent à la naissance est l'…", opts: ["inné", "acquis", "rôle social"], ok: 0, expl: "L'acquis vient de l'éducation et du milieu." },
          { q: "Sans repères partagés, une société risque…", opts: ["l'incohérence et l'exclusion", "une meilleure cohésion", "une croissance économique"], ok: 0, expl: "Les comportements ne sont plus prévisibles." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La socialisation ne concerne que la petite enfance.", rep: false, expl: "Elle continue à chaque étape de la vie." },
          { txt: "Les normes et les valeurs sont transmises par la socialisation.", rep: true, expl: "Ce sont ses contenus essentiels." },
          { txt: "Le langage est un acquis social.", rep: true, expl: "Sans contact humain, il ne se développe pas." },
          { txt: "La socialisation supprime toute liberté individuelle.", rep: false, expl: "Elle fournit des repères que chacun réinterprète." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis la socialisation.", r: "C'est le processus par lequel un individu apprend et intériorise les manières d'agir, de penser et de sentir de son groupe, jusqu'à devenir un membre de la société." },
          { q: "Cite quatre contenus transmis par la socialisation.", r: "Les normes, les valeurs partagées, les pratiques et savoir-faire comme la langue, et les rôles sociaux attendus dans le groupe." },
          { q: "Pourquoi la socialisation est-elle nécessaire à la vie collective ?", r: "Parce qu'elle donne des repères communs : chacun sait comment se comporter, les conduites deviennent prévisibles et la cohésion sociale est assurée." },
          { q: "Quelle différence y a-t-il entre l'inné et l'acquis ?", r: "L'inné est présent à la naissance, l'acquis vient de l'éducation et du milieu. La socialisation relève de l'acquis." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "La socialisation transforme un individu biologique en personne", suite: "sociale" },
          { debut: "Les règles de conduite attendues dans un groupe sont des", suite: "normes" },
          { debut: "La langue est un", suite: "acquis" },
          { debut: "La socialisation ne s'achève jamais : elle est", suite: "continue" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 45 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Personnalité sociale et identité sociale",
      theme: "Socialisation de l'individu",
      ras: "Déterminer les différentes formes de la socialisation",
      valeurs: "Citoyenneté et patriotisme, Responsabilité",
      objectif: "distinguer personnalité sociale et identité sociale, et expliquer leur construction",
      supportMeta: "Documents biographiques, portraits, cahier",
      revision: [
        ["Qu'est-ce que la socialisation ?", "Le processus par lequel l'individu intériorise les normes, valeurs et pratiques de son groupe."],
        ["La socialisation s'arrête-t-elle à l'enfance ?", "Non : elle continue à chaque étape de la vie."],
      ],
      mise: [
        "Deux élèves de la même classe ne réagissent jamais de la même façon. D'où vient la différence ?",
        "De leur histoire familiale, de leur milieu et des groupes dont ils se sentent membres : c'est leur personnalité sociale.",
      ],
      observation: "les documents biographiques et portraits distribués en classe",
      observationSupport: "Documents biographiques et portraits permettant de repérer les groupes d'appartenance",
      technAna: "Étude de document, réflexion en groupe et exposé",
      qa: [
        ["Qu'est-ce que la personnalité sociale ?", "L'ensemble des manières durables d'agir, de penser et de sentir qu'un individu a acquises par la socialisation dans son milieu."],
        ["De quoi est-elle faite ?", "Des habitudes, des goûts, des croyances, des manières de parler et de se conduire propres à un groupe social."],
        ["Qu'est-ce que l'identité sociale ?", "La part de l'identité d'une personne qui vient de son appartenance à des groupes : famille, école, quartier, association, nation."],
        ["Quelle différence avec l'identité individuelle ?", "L'identité individuelle est ce qui rend une personne unique ; l'identité sociale est ce qu'elle partage avec les membres de ses groupes."],
        ["Comment l'identité sociale se construit-elle ?", "Par les groupes fréquentés, les rôles tenus et le regard que les autres portent sur nous."],
        ["Peut-on appartenir à plusieurs groupes ?", "Oui : chacun cumule plusieurs appartenances, et le sentiment d'appartenir à tel groupe varie selon les situations."],
        ["Pourquoi l'identité sociale évolue-t-elle ?", "Parce que les groupes changent au cours de la vie : on quitte l'école, on entre dans un métier, on déménage."],
        ["Quel lien avec la citoyenneté ?", "L'identité nationale est une identité sociale : elle se construit par l'école, l'histoire apprise, les symboles et la participation à la vie publique."],
      ],
      synthese: "Donc, la personnalité sociale est l'ensemble des manières d'agir, de penser et de sentir acquises dans son milieu, tandis que l'identité sociale est le sentiment d'appartenir à des groupes. Chacun cumule plusieurs appartenances, qui évoluent au fil de la vie et se construisent dans le regard d'autrui.",
      motsCles: ["personnalité sociale", "identité sociale", "identité individuelle", "groupe d'appartenance", "rôle social", "citoyenneté", "patriotisme"],
      image: { file: "t11_u4_identite.png", legende: "Figure 39 — Identité individuelle et identités sociales d'une même personne." },
      contenu: [
        {
          sousTitre: "1. La personnalité sociale",
          texte: "Chaque individu porte la marque des milieux qui l'ont formé.",
          liste: [
            "Des habitudes et des goûts durables.",
            "Une manière de parler et de se présenter.",
            "Des réflexes moraux : ce qui est permis, interdit, respecté.",
            "Elle n'est pas héréditaire : elle s'acquiert par la socialisation.",
          ],
        },
        {
          sousTitre: "2. L'identité sociale",
          texte: "Une part de ce que nous sommes vient des groupes auxquels nous appartenons.",
          liste: [
            "Groupe familial : enfant, aîné, cadet, parent.",
            "Groupe scolaire : élève d'un collège, d'une classe.",
            "Groupe territorial : habitant d'un quartier, d'une région, d'un pays.",
            "Groupe choisi : club sportif, association religieuse ou culturelle.",
          ],
        },
        {
          sousTitre: "3. Identité individuelle et identité sociale",
          texte: "Les deux composantes de l'identité se complètent au lieu de s'opposer.",
          liste: [
            "Identité individuelle : ce qui distingue la personne — son caractère, son histoire singulière.",
            "Identité sociale : ce qu'elle partage avec les membres de ses groupes.",
            "Une personne peut être unique tout en se reconnaissant dans plusieurs groupes.",
          ],
        },
        {
          sousTitre: "4. Le rôle du regard d'autrui",
          texte: "Nous nous construisons en partie à travers la manière dont les autres nous désignent.",
          liste: [
            "Un élève encouragé se sent capable ; un élève moqué se replie.",
            "Les surnoms et les étiquettes influencent la conduite.",
            "L'identité se négocie dans les interactions quotidiennes.",
          ],
        },
        {
          sousTitre: "5. Une identité qui évolue",
          texte: "Les appartenances changent selon les étapes de la vie et les situations.",
          liste: [
            "L'enfant de la famille devient élève, puis collégien, puis lycéen.",
            "Le départ dans une autre ville modifie les repères.",
            "L'entrée dans un métier crée une nouvelle identité professionnelle.",
            "L'identité nationale se construit, elle aussi, par l'école et la vie publique.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La personnalité sociale est…", opts: ["acquise par la socialisation", "présente à la naissance", "imposée par la loi"], ok: 0, expl: "Elle se construit dans le milieu où l'on grandit." },
          { q: "L'identité sociale vient…", opts: ["de l'appartenance à des groupes", "uniquement de l'hérédité", "du hasard"], ok: 0, expl: "Famille, école, quartier, association, nation." },
          { q: "Ce qui rend une personne unique est son identité…", opts: ["individuelle", "sociale", "professionnelle"], ok: 0, expl: "Son caractère et son histoire singulière." },
          { q: "L'identité nationale se construit notamment par…", opts: ["l'école et la vie publique", "la seule naissance", "le climat"], ok: 0, expl: "Elle s'apprend, comme les autres appartenances." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une personne n'appartient qu'à un seul groupe.", rep: false, expl: "Chacun cumule plusieurs appartenances selon les situations." },
          { txt: "Le regard d'autrui influence la construction de l'identité.", rep: true, expl: "Les encouragements et les moqueries pèsent sur la conduite." },
          { txt: "La personnalité sociale est héréditaire.", rep: false, expl: "Elle s'acquiert par la socialisation, elle relève de l'acquis." },
          { txt: "Les appartenances sociales évoluent au cours de la vie.", rep: true, expl: "École, métier, déménagement : les groupes changent." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis la personnalité sociale.", r: "C'est l'ensemble des manières durables d'agir, de penser et de sentir qu'un individu a acquises par la socialisation dans son milieu." },
          { q: "Quelle différence y a-t-il entre identité individuelle et identité sociale ?", r: "L'identité individuelle est ce qui rend une personne unique ; l'identité sociale est ce qu'elle partage avec les membres des groupes auxquels elle appartient." },
          { q: "Cite quatre groupes d'appartenance possibles.", r: "La famille, l'école ou le collège, le quartier ou la ville, et une association sportive, culturelle ou religieuse." },
          { q: "Comment le regard d'autrui intervient-il dans la construction de l'identité ?", r: "Il influence la conduite : un élève encouragé se sent capable, un élève moqué se replie ; l'identité se négocie dans les interactions quotidiennes." },
        ]},
        { type: "appariement", consigne: "Relie chaque notion à son exemple.", pointsPar: 1, items: [
          { g: ["Identité individuelle", "Identité sociale", "Personnalité sociale", "Groupe d'appartenance"], d: ["Membre d'un club de football", "Manière durable de parler et de réagir", "Caractère propre à une personne", "Élève d'un collège"], pairs: [[0, 2], [1, 3], [2, 1], [3, 0]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 46 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le mécanisme de l'imitation",
      theme: "Socialisation de l'individu",
      ras: "Déterminer les différentes formes de la socialisation",
      valeurs: "Citoyenneté et patriotisme, Responsabilité",
      objectif: "expliquer le mécanisme de l'imitation et ses limites dans l'apprentissage social",
      supportMeta: "Mises en situation, études de cas, cahier",
      revision: [
        ["Qu'est-ce que la personnalité sociale ?", "L'ensemble des manières durables d'agir, de penser et de sentir acquises dans son milieu."],
        ["Qu'est-ce que l'identité sociale ?", "La part de l'identité qui vient de l'appartenance à des groupes."],
      ],
      mise: [
        "Pourquoi un enfant répète-t-il les expressions et les gestes de ses parents ?",
        "Parce qu'il imite : l'imitation est la première manière d'apprendre ce que l'on voit faire.",
      ],
      observation: "les mises en situation et études de cas distribuées en classe",
      observationSupport: "Mises en situation et études de cas sur les conduites imitées au quotidien",
      technAna: "Étude de cas, jeu de rôle et débat dirigé",
      qa: [
        ["Qu'est-ce que l'imitation ?", "Un mécanisme de socialisation par lequel un individu reproduit un comportement qu'il a observé chez une autre personne, prise comme modèle."],
        ["Comment fonctionne-t-elle ?", "En trois temps : on observe le modèle, on retient la conduite, puis on la reproduit dans une situation semblable."],
        ["Qui sert de modèle ?", "D'abord les parents et les proches, puis les enseignants, les pairs, les personnalités publiques et les figures vues dans les médias."],
        ["Pourquoi imite-t-on ?", "Parce que le modèle paraît digne de confiance, prestigieux ou proche de soi : l'imitation permet d'apprendre sans recommencer à zéro."],
        ["Qu'apprend-on par imitation ?", "Le langage, les gestes du métier, les manières de table, la façon de s'habiller, les conduites de politesse."],
        ["Quelles sont les limites de l'imitation ?", "On peut reproduire un comportement sans en comprendre le sens, et les modèles ne sont pas toujours positifs : une conduite à risque se transmet aussi par imitation."],
        ["L'imitation suffit-elle à socialiser ?", "Non : elle ne transmet ni les interdits formulés ni les significations ; d'autres mécanismes la complètent, l'injonction et l'interaction."],
        ["Quel rôle jouent les médias aujourd'hui ?", "Ils élargissent considérablement la gamme des modèles accessibles : conduites, langages et styles circulent très vite, y compris à distance."],
      ],
      synthese: "Donc, l'imitation est un mécanisme de socialisation par lequel on reproduit une conduite observée chez un modèle. Elle permet d'apprendre vite, mais elle ne suffit pas : elle peut transmettre des conduites peu souhaitables et ne donne pas le sens des règles. L'injonction et l'interaction la complètent.",
      motsCles: ["imitation", "modèle", "observation", "reproduction", "conduite", "médias", "apprentissage social"],
      image: { file: "t11_u4_imitation.png", legende: "Figure 40 — Le mécanisme de l'imitation : du modèle à la conduite reproduite." },
      contenu: [
        {
          sousTitre: "1. Observer, retenir, reproduire",
          texte: "L'imitation se déroule en trois temps, souvent sans que l'individu en ait conscience.",
          liste: [
            "Observer : on regarde quelqu'un agir.",
            "Retenir : on garde en mémoire la conduite et son résultat.",
            "Reproduire : on refait le geste dans une situation comparable.",
          ],
        },
        {
          sousTitre: "2. Les modèles",
          texte: "Tout le monde n'est pas imité de la même manière : le modèle compte autant que le geste.",
          liste: [
            "Les parents et la fratrie, premiers modèles de l'enfant.",
            "Les enseignants, les éducateurs, les aînés respectés.",
            "Les pairs du même âge, dont l'influence grandit à l'adolescence.",
            "Les figures publiques et les personnages vus dans les médias.",
          ],
        },
        {
          sousTitre: "3. Ce que l'imitation transmet",
          texte: "Une part considérable des conduites quotidiennes s'apprend ainsi.",
          liste: [
            "Le langage : les mots et l'accent de l'entourage.",
            "Les gestes professionnels : l'apprenti regarde le maître artisan.",
            "Les manières de table, de saluer et de se tenir.",
            "Les goûts vestimentaires, musicaux et alimentaires.",
          ],
        },
        {
          sousTitre: "4. Les limites",
          texte: "Imiter n'est pas comprendre : le mécanisme a ses faiblesses.",
          liste: [
            "On peut reproduire sans savoir pourquoi la règle existe.",
            "Un modèle prestigieux peut transmettre une conduite à risque.",
            "L'imitation ne fixe pas d'interdit : elle montre ce qui se fait, pas ce qui est défendu.",
            "Elle entretient parfois les stéréotypes au lieu de les interroger.",
          ],
        },
        {
          sousTitre: "5. Les médias comme relais",
          texte: "Les écrans élargissent le champ des modèles bien au-delà du voisinage.",
          liste: [
            "Les conduites circulent plus vite et plus loin.",
            "Les modèles sont choisis, mis en scène, parfois éloignés de la vie réelle.",
            "L'esprit critique permet de trier ce que l'on imite.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "L'imitation consiste à…", opts: ["reproduire une conduite observée chez un modèle", "obéir à un ordre", "inventer une règle"], ok: 0, expl: "Observer, retenir, reproduire." },
          { q: "Le premier modèle de l'enfant est généralement…", opts: ["les parents", "un inconnu", "un personnage de film"], ok: 0, expl: "La famille est le milieu de la socialisation primaire." },
          { q: "Une limite de l'imitation est…", opts: ["que l'on peut reproduire sans comprendre", "qu'elle est interdite", "qu'elle ne sert à rien"], ok: 0, expl: "Elle montre ce qui se fait, sans dire pourquoi." },
          { q: "Les médias aujourd'hui…", opts: ["élargissent la gamme des modèles accessibles", "suppriment toute imitation", "n'ont aucune influence"], ok: 0, expl: "Les conduites circulent plus vite et plus loin." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "L'imitation permet d'apprendre sans recommencer à zéro.", rep: true, expl: "On profite de l'expérience du modèle." },
          { txt: "Tous les modèles sont forcément positifs.", rep: false, expl: "Une conduite à risque se transmet aussi par imitation." },
          { txt: "L'imitation donne le sens des interdits.", rep: false, expl: "Elle montre ce qui se fait ; l'injonction formule l'interdit." },
          { txt: "L'influence des pairs grandit à l'adolescence.", rep: true, expl: "Le groupe d'âge devient une référence importante." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis l'imitation et décris ses trois temps.", r: "C'est la reproduction d'une conduite observée chez un modèle. Elle se déroule en trois temps : observer le modèle, retenir la conduite, la reproduire dans une situation semblable." },
          { q: "Cite trois modèles possibles et ce qu'ils transmettent.", r: "Les parents — le langage et les manières de table ; l'artisan — les gestes du métier ; les pairs — les goûts vestimentaires et musicaux." },
          { q: "Quelles sont les limites de l'imitation ?", r: "On peut reproduire une conduite sans en comprendre le sens, les modèles ne sont pas toujours positifs, et l'imitation ne formule aucun interdit." },
          { q: "Pourquoi l'imitation ne suffit-elle pas à elle seule ?", r: "Parce qu'elle transmet des conduites, mais ni le sens des règles ni les interdits : l'injonction et l'interaction complètent son action." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["modèle", "observer", "reproduire", "médias", "sens"], items: [
          { phrase: "Imiter, c'est d'abord _________ une conduite.", mot: "observer" },
          { phrase: "Celui que l'on imite est un _________.", mot: "modèle" },
          { phrase: "On peut _________ une conduite sans en comprendre le sens.", mot: "reproduire" },
          { phrase: "L'imitation ne donne pas le _________ des interdits.", mot: "sens" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 47 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "L'injonction et l'interaction",
      theme: "Socialisation de l'individu",
      ras: "Déterminer les différentes formes de la socialisation",
      valeurs: "Citoyenneté et patriotisme, Responsabilité",
      objectif: "distinguer l'injonction de l'interaction et comparer les trois mécanismes de socialisation",
      supportMeta: "Mises en situation, extraits de vie scolaire, cahier",
      revision: [
        ["Qu'est-ce que l'imitation ?", "La reproduction d'une conduite observée chez un modèle."],
        ["Cite une limite de l'imitation.", "On peut reproduire sans comprendre, et le modèle n'est pas toujours positif."],
      ],
      mise: [
        "« Tiens-toi droit », « dis bonjour », « range tes affaires » : que fait l'adulte qui parle ainsi ?",
        "Il adresse des injonctions : il énonce la règle au lieu de se contenter de montrer l'exemple.",
      ],
      observation: "les mises en situation et extraits de vie scolaire proposés",
      observationSupport: "Mises en situation et extraits de vie scolaire : consignes, échanges entre élèves",
      technAna: "Étude de cas, jeu de rôle et débat dirigé",
      qa: [
        ["Qu'est-ce que l'injonction ?", "Un mécanisme par lequel un individu reçoit une consigne, un ordre ou une règle formulée explicitement par une personne ou une institution."],
        ["Qui adresse des injonctions ?", "Les parents, les enseignants, les éducateurs, les institutions — et, plus tard, le règlement intérieur et la loi."],
        ["Que transmet l'injonction ?", "Les interdits et les obligations : ce qui est défendu et ce qui est exigé, avec la raison de la règle."],
        ["Qu'est-ce que l'interaction ?", "Un mécanisme par lequel l'individu se construit dans ses échanges répétés avec autrui : il ajuste sa conduite selon les réactions qu'il provoque."],
        ["En quoi l'interaction socialise-t-elle ?", "Chaque échange renvoie à l'individu une image de lui-même : il apprend ce qui est accepté, valorisé ou rejeté par le groupe."],
        ["Où observe-t-on l'interaction ?", "Dans la cour de récréation, au sein de la famille, dans le travail de groupe, dans les réseaux sociaux : partout où l'on agit avec d'autres."],
        ["Quelle différence avec l'imitation ?", "L'imitation reproduit une conduite vue ; l'injonction énonce une règle ; l'interaction fait naître la conduite de l'échange lui-même."],
        ["Les trois mécanismes s'excluent-ils ?", "Non : ils agissent en même temps et se renforcent mutuellement dans presque toutes les situations éducatives."],
      ],
      synthese: "Donc, l'injonction énonce la règle et l'interdit, l'interaction construit la conduite dans l'échange avec autrui, et l'imitation transmet l'exemple. Ces trois mécanismes agissent ensemble : chacun complète ce que les autres ne peuvent transmettre seuls.",
      motsCles: ["injonction", "interaction", "consigne", "interdit", "obligation", "échange", "regard d'autrui"],
      image: { file: "t11_u4_mecanismes.png", legende: "Figure 41 — Les trois mécanismes de la socialisation : imitation, injonction, interaction." },
      contenu: [
        {
          sousTitre: "1. L'injonction : la règle énoncée",
          texte: "Plutôt que de montrer, on dit : la règle est formulée en mots.",
          liste: [
            "Les consignes familiales : saluer, ranger, ne pas frapper.",
            "Les règles de classe : lever la main, arriver à l'heure.",
            "Les règlements et la loi : obligations et interdits écrits.",
            "L'injonction dit pourquoi : elle explique la raison de la règle.",
          ],
        },
        {
          sousTitre: "2. L'interaction : apprendre dans l'échange",
          texte: "Beaucoup de conduites ne s'enseignent pas : elles se découvrent en agissant avec les autres.",
          liste: [
            "Dans la cour de récréation : on apprend les règles du jeu et la place que l'on occupe.",
            "Dans le travail de groupe : on découvre la négociation et la répartition des tâches.",
            "Dans la famille : les échanges quotidiens ajustent les manières de faire.",
            "Chaque réaction d'autrui renvoie une image qui façonne la conduite.",
          ],
        },
        {
          sousTitre: "3. Le jeu de miroir",
          texte: "L'individu se construit à travers ce que les autres lui renvoient de lui-même.",
          liste: [
            "Un encouragement incite à recommencer.",
            "Une moquerie fait disparaître une conduite.",
            "Une réprobation répétée installe la honte et le conformisme.",
            "C'est pourquoi le regard d'autrui est un puissant outil de socialisation.",
          ],
        },
        {
          sousTitre: "4. Comparer les trois mécanismes",
          texte: "Chacun transmet quelque chose que les deux autres ne peuvent pas porter seuls.",
          liste: [
            "Imitation : elle montre l'exemple à reproduire.",
            "Injonction : elle énonce la règle, l'obligation et l'interdit.",
            "Interaction : elle fait naître la conduite de l'échange et du retour d'autrui.",
            "Une éducation efficace combine les trois.",
          ],
        },
        {
          sousTitre: "5. Des mécanismes présents partout",
          texte: "Les trois mécanismes agissent simultanément dans la plupart des situations.",
          liste: [
            "En classe : l'enseignant énonce la règle, montre l'exemple, corrige par l'échange.",
            "En famille : les parents commandent, servent de modèles et répondent aux réactions.",
            "Dans la rue : le groupe de pairs impose ses codes par l'exemple et la réaction des autres.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une injonction est…", opts: ["une règle formulée explicitement", "un geste imité", "un échange entre pairs"], ok: 0, expl: "Elle énonce obligation ou interdit." },
          { q: "L'interaction socialise parce qu'elle…", opts: ["renvoie à l'individu l'image que les autres ont de lui", "interdit toute conduite", "remplace la famille"], ok: 0, expl: "Chaque réaction d'autrui ajuste la conduite." },
          { q: "« Ne frappe pas ton camarade » est…", opts: ["une injonction", "une imitation", "une interaction"], ok: 0, expl: "C'est un interdit formulé en mots." },
          { q: "Les trois mécanismes…", opts: ["agissent ensemble et se complètent", "s'excluent toujours", "ne concernent que l'école"], ok: 0, expl: "Une éducation efficace les combine." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "L'injonction énonce les interdits et les obligations.", rep: true, expl: "Elle formule la règle en mots, avec sa raison." },
          { txt: "L'interaction suppose un échange avec autrui.", rep: true, expl: "La conduite naît des réactions provoquées." },
          { txt: "La cour de récréation n'apprend rien.", rep: false, expl: "On y découvre les règles du jeu et la place occupée dans le groupe." },
          { txt: "Les trois mécanismes agissent séparément, jamais ensemble.", rep: false, expl: "Ils se combinent dans presque toutes les situations éducatives." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis l'injonction et donne deux exemples.", r: "C'est une règle, un ordre ou une consigne formulés explicitement. Exemples : saluer les aînés, arriver à l'heure en classe." },
          { q: "Qu'est-ce que l'interaction et où l'observe-t-on ?", r: "C'est le mécanisme par lequel l'individu se construit dans ses échanges répétés avec autrui. On l'observe dans la cour de récréation, dans le travail de groupe et dans la famille." },
          { q: "Quelle différence y a-t-il entre imitation, injonction et interaction ?", r: "L'imitation reproduit un exemple, l'injonction énonce une règle ou un interdit, l'interaction fait naître la conduite de l'échange et du retour d'autrui." },
          { q: "Explique le rôle du regard d'autrui dans la socialisation.", r: "Chaque réaction renvoie une image : un encouragement incite à recommencer, une moquerie fait disparaître la conduite. Le regard d'autrui ajuste donc les comportements." },
        ]},
        { type: "appariement", consigne: "Relie chaque situation au mécanisme correspondant.", pointsPar: 1, items: [
          { g: ["L'enfant répète le geste de sa mère", "« Range tes affaires »", "Un élève se corrige après une moquerie", "Le règlement affiché en classe"], d: ["Injonction", "Interaction", "Injonction écrite", "Imitation"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 48 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La socialisation primaire",
      theme: "Socialisation de l'individu",
      ras: "Déterminer les différentes formes de la socialisation",
      valeurs: "Citoyenneté et patriotisme, Responsabilité",
      objectif: "décrire la socialisation primaire, ses agents et ses apprentissages",
      supportMeta: "Photographies de famille, récits de vie, cahier",
      revision: [
        ["Qu'est-ce que l'injonction ?", "Une règle, un ordre ou une consigne formulés explicitement."],
        ["Qu'est-ce que l'interaction ?", "Le mécanisme par lequel l'individu se construit dans ses échanges avec autrui."],
      ],
      mise: [
        "Qui t'a appris à parler, à saluer et à te tenir à table ?",
        "La famille, principalement : c'est la socialisation primaire, celle des toutes premières années.",
      ],
      observation: "les photographies de famille et récits de vie apportés en classe",
      observationSupport: "Photographies de groupe familial et récits de vie, affichés ou distribués",
      technAna: "Étude de document, récit de vie et débat dirigé",
      qa: [
        ["Qu'est-ce que la socialisation primaire ?", "La première socialisation, celle de la petite enfance : elle se déroule dans le cadre familial et pose les bases de la personnalité."],
        ["Quels en sont les agents ?", "Les parents, la fratrie, les grands-parents, la famille élargie, le voisinage proche."],
        ["Qu'apprend-on pendant cette période ?", "Le langage, la propreté, les manières de table, la politesse, les interdits fondamentaux et la place que l'on occupe dans le groupe."],
        ["Pourquoi marque-t-elle durablement ?", "Parce qu'elle se déroule au moment où l'enfant est le plus réceptif, dans un cadre affectif intense : elle installe des dispositions profondes."],
        ["Quel rôle joue la famille élargie à Madagascar ?", "Elle est souvent décisive : grands-parents, oncles et tantes participent à l'éducation, et le voisinage y contribue aussi."],
        ["La socialisation primaire est-elle la même partout ?", "Non : elle varie selon le milieu social, la culture, le lieu de vie et l'époque, ce qui produit des manières d'être différentes."],
        ["S'achève-t-elle à l'entrée à l'école ?", "Elle perd son exclusivité, mais ses acquis continuent d'agir : l'école s'appuie sur ce que l'enfant a déjà appris."],
        ["Que se passe-t-il si elle est défaillante ?", "L'enfant entre dans la vie scolaire sans repères : le risque de difficulté scolaire et de marginalisation augmente."],
      ],
      synthese: "Donc, la socialisation primaire est celle de la petite enfance, assurée par la famille et le proche entourage. Elle transmet le langage, les manières d'être et les interdits fondamentaux, dans un cadre affectif qui marque durablement la personnalité.",
      motsCles: ["socialisation primaire", "famille", "petite enfance", "langage", "interdit", "famille élargie", "personnalité"],
      image: { file: "t11_u4_primaire.png", legende: "Figure 42 — La socialisation primaire : les agents et les apprentissages." },
      contenu: [
        {
          sousTitre: "1. La première socialisation",
          texte: "Tout commence dans la famille, dès les premiers jours.",
          liste: [
            "Elle couvre la petite enfance, avant l'entrée à l'école.",
            "Elle se déroule dans un cadre affectif intense et protecteur.",
            "Elle pose les fondations sur lesquelles tout le reste se construit.",
          ],
        },
        {
          sousTitre: "2. Les agents de la socialisation primaire",
          texte: "Plusieurs personnes participent à cette première éducation.",
          liste: [
            "Les parents : premiers modèles et premières autorités.",
            "La fratrie : elle apprend le partage, la rivalité et la coopération.",
            "Les grands-parents : transmission des récits, de la langue et des usages.",
            "La famille élargie et le voisinage : éducation communautaire.",
          ],
        },
        {
          sousTitre: "3. Les apprentissages fondamentaux",
          texte: "Cette période transmet ce qui paraît aller de soi plus tard.",
          liste: [
            "Le langage : les premiers mots, la manière de s'exprimer.",
            "Les conduites du corps : propreté, tenue à table, maîtrise de soi.",
            "La politesse : saluer, remercier, demander.",
            "Les interdits fondamentaux : ne pas frapper, ne pas prendre ce qui n'est pas à soi.",
          ],
        },
        {
          sousTitre: "4. Pourquoi elle marque autant",
          texte: "Ce qui est acquis très tôt résiste au temps.",
          liste: [
            "L'enfant est alors extrêmement réceptif.",
            "Les apprentissages se font sur un fond d'attachement affectif.",
            "Les dispositions installées structurent la personnalité adulte.",
            "Rééduquer plus tard demande beaucoup plus d'efforts que transmettre tôt.",
          ],
        },
        {
          sousTitre: "5. Un contexte qui varie",
          texte: "La socialisation primaire diffère selon les milieux et les lieux.",
          liste: [
            "Milieu urbain ou rural : les occasions d'apprentissage ne sont pas les mêmes.",
            "Milieu aisé ou modeste : les objets, les sorties et les attentes scolaires diffèrent.",
            "Famille nucléaire ou élargie : le nombre d'adultes éducateurs change.",
            "Ces variations expliquent la diversité des manières d'être.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La socialisation primaire se déroule…", opts: ["dans la famille, pendant la petite enfance", "à l'école", "dans l'entreprise"], ok: 0, expl: "C'est la première socialisation, avant l'école." },
          { q: "Parmi ces apprentissages, lequel relève de la socialisation primaire ?", opts: ["le langage", "le droit du travail", "la fiscalité"], ok: 0, expl: "Avec la propreté, la politesse et les interdits fondamentaux." },
          { q: "Un agent de socialisation primaire est…", opts: ["les grands-parents", "l'inspecteur d'académie", "le syndicat"], ok: 0, expl: "Avec les parents et la fratrie." },
          { q: "Cette socialisation marque durablement parce que…", opts: ["l'enfant y est très réceptif, dans un cadre affectif", "elle est obligatoire", "elle est payante"], ok: 0, expl: "Les dispositions acquises structurent la personnalité." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La socialisation primaire s'achève définitivement à l'entrée à l'école.", rep: false, expl: "Ses acquis continuent d'agir ; elle perd seulement son exclusivité." },
          { txt: "La famille élargie participe souvent à l'éducation à Madagascar.", rep: true, expl: "Grands-parents, oncles et tantes élèvent aussi les enfants." },
          { txt: "Les interdits fondamentaux sont transmis dès la petite enfance.", rep: true, expl: "Ne pas frapper, ne pas prendre ce qui n'est pas à soi." },
          { txt: "La socialisation primaire est identique dans tous les milieux.", rep: false, expl: "Elle varie selon le lieu de vie, la culture et le milieu social." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis la socialisation primaire et cite deux agents.", r: "C'est la socialisation de la petite enfance, assurée principalement par la famille. Agents : les parents, la fratrie, les grands-parents ou le voisinage proche." },
          { q: "Cite quatre apprentissages de la socialisation primaire.", r: "Le langage, la propreté et la tenue du corps, la politesse — saluer, remercier — et les interdits fondamentaux comme ne pas frapper." },
          { q: "Pourquoi la socialisation primaire marque-t-elle durablement la personnalité ?", r: "Parce qu'elle a lieu quand l'enfant est le plus réceptif, dans un cadre affectif intense : les dispositions acquises structurent l'adulte." },
          { q: "En quoi cette socialisation varie-t-elle selon les milieux ?", r: "Le lieu de vie — urbain ou rural —, le niveau de vie, la taille de la famille et la culture ne donnent pas les mêmes occasions d'apprentissage ni les mêmes attentes." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "La socialisation de la petite enfance est la socialisation", suite: "primaire" },
          { debut: "Les parents, la fratrie et les grands-parents sont des", suite: "agents" },
          { debut: "Saluer, remercier et demander relèvent de la", suite: "politesse" },
          { debut: "Ne pas frapper est un interdit", suite: "fondamental" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 49 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La socialisation secondaire et sa complémentarité avec la primaire",
      theme: "Socialisation de l'individu",
      ras: "Déterminer les différentes formes de la socialisation",
      valeurs: "Citoyenneté et patriotisme, Responsabilité",
      objectif: "décrire la socialisation secondaire, ses agents et ses rapports avec la socialisation primaire",
      supportMeta: "Documents sur les parcours scolaires et professionnels, étude de cas, cahier",
      revision: [
        ["Qu'est-ce que la socialisation primaire ?", "La socialisation de la petite enfance, assurée par la famille."],
        ["Cite deux apprentissages de la petite enfance.", "Le langage et la politesse, ou la propreté et les interdits fondamentaux."],
      ],
      mise: [
        "En entrant au collège, que découvre-t-on de nouveau ?",
        "Une autre manière de travailler, d'autres règles et d'autres camarades : c'est la socialisation secondaire.",
      ],
      observation: "les documents sur les parcours scolaires et professionnels",
      observationSupport: "Documents sur les parcours scolaires, les métiers et les associations, affichés ou distribués",
      technAna: "Étude de document, enquête et débat dirigé",
      qa: [
        ["Qu'est-ce que la socialisation secondaire ?", "L'ensemble des apprentissages sociaux qui se poursuivent après la petite enfance, dans les groupes et institutions que l'individu rencontre ensuite."],
        ["Quels en sont les agents ?", "L'école, le groupe de pairs, le travail, les médias, la religion, les associations, les institutions."],
        ["Qu'apprend-on dans la socialisation secondaire ?", "Des règles plus formelles, des rôles spécialisés — élève, professionnel, citoyen — et des conduites adaptées à chaque situation."],
        ["Qu'apporte l'école en particulier ?", "Elle transmet des savoirs, une langue commune, des règles collectives, le sens de l'effort et les bases de la citoyenneté."],
        ["Quel rôle joue le groupe de pairs ?", "Il transmet ses propres codes — langage, vêtements, loisirs — et offre un espace d'autonomie par rapport aux adultes."],
        ["Comment les deux socialisations se complètent-elles ?", "La secondaire prolonge la primaire : elle affine et élargit ce que la famille a posé, en y ajoutant des rôles nouveaux."],
        ["Peuvent-elles s'opposer ?", "Oui : les valeurs de l'école peuvent contredire celles de la famille, ou l'inverse. Ce décalage fait naître des tensions, mais il oblige aussi à réfléchir."],
        ["Qu'est-ce que la socialisation anticipatrice ?", "L'apprentissage des conduites du groupe auquel on souhaite appartenir plus tard : un élève qui se prépare au métier qu'il vise."],
      ],
      synthese: "Donc, la socialisation secondaire prolonge la socialisation primaire : l'école, les pairs, le travail, les médias et les associations transmettent des règles plus formelles et des rôles nouveaux. Les deux se complètent, et peuvent parfois se contredire, ce qui oblige l'individu à choisir et à construire sa propre conduite.",
      motsCles: ["socialisation secondaire", "école", "groupe de pairs", "travail", "médias", "rôle social", "socialisation anticipatrice"],
      image: { file: "t11_u4_secondaire.png", legende: "Figure 43 — Socialisation primaire et socialisation secondaire : continuité et complémentarité." },
      contenu: [
        {
          sousTitre: "1. Après la petite enfance",
          texte: "La socialisation ne s'arrête pas à l'entrée à l'école : elle change de cadre et de contenu.",
          liste: [
            "Les règles deviennent plus formelles et plus écrites.",
            "Les rôles se multiplient : élève, camarade, futur professionnel, citoyen.",
            "Les groupes se diversifient : classe, club, association, entreprise.",
          ],
        },
        {
          sousTitre: "2. Les agents de la socialisation secondaire",
          texte: "Chaque nouvel environnement apporte ses propres règles.",
          liste: [
            "L'école : savoirs, langue commune, effort, citoyenneté.",
            "Le groupe de pairs : codes vestimentaires, langage, loisirs partagés.",
            "Le travail : règles de l'entreprise, gestes professionnels, ponctualité.",
            "Les médias : informations, modèles, débats publics.",
            "La religion et les associations : valeurs, rites, engagements.",
          ],
        },
        {
          sousTitre: "3. Ce que transmet l'école",
          texte: "L'école est l'agent le plus visible de la socialisation secondaire.",
          liste: [
            "Des savoirs communs à toute une génération.",
            "Des règles collectives : horaires, évaluation, respect du règlement.",
            "Le sens de l'effort et du travail régulier.",
            "Les bases de la citoyenneté : droits, devoirs, vie collective.",
          ],
        },
        {
          sousTitre: "4. Continuité et tensions",
          texte: "Les deux socialisations s'articulent, sans toujours s'accorder.",
          liste: [
            "Continuité : l'école s'appuie sur ce que la famille a déjà transmis.",
            "Complémentarité : elle ajoute des rôles que la famille ne peut apprendre.",
            "Tension possible : des valeurs différentes peuvent s'opposer.",
            "Ce décalage, bien accompagné, développe l'esprit critique.",
          ],
        },
        {
          sousTitre: "5. Se préparer au groupe futur",
          texte: "On peut aussi se socialiser par avance au groupe que l'on vise.",
          liste: [
            "Un élève qui observe les gestes du métier qu'il veut exercer.",
            "Un jeune qui adopte les codes de l'équipe qu'il espère rejoindre.",
            "C'est la socialisation anticipatrice : elle facilite l'entrée dans le groupe.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La socialisation secondaire se déroule…", opts: ["après la petite enfance, dans de nouveaux groupes", "avant la naissance", "uniquement en famille"], ok: 0, expl: "École, pairs, travail, médias, associations." },
          { q: "L'école transmet…", opts: ["des savoirs, des règles et la citoyenneté", "les gènes", "le patrimoine génétique"], ok: 0, expl: "C'est le principal agent de socialisation secondaire." },
          { q: "Le groupe de pairs transmet surtout…", opts: ["ses propres codes : langage, vêtements, loisirs", "le règlement intérieur", "les lois de la République"], ok: 0, expl: "Il offre un espace d'autonomie par rapport aux adultes." },
          { q: "La socialisation anticipatrice consiste à…", opts: ["adopter par avance les conduites du groupe visé", "refuser toute règle", "rester en famille"], ok: 0, expl: "Elle facilite l'entrée dans le groupe espéré." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La socialisation secondaire remplace totalement la primaire.", rep: false, expl: "Elle la prolonge et la complète ; les acquis familiaux continuent d'agir." },
          { txt: "Les valeurs de l'école et celles de la famille peuvent s'opposer.", rep: true, expl: "Ce décalage crée des tensions, mais développe l'esprit critique." },
          { txt: "Les médias sont un agent de socialisation secondaire.", rep: true, expl: "Ils diffusent informations, modèles et débats." },
          { txt: "Le travail ne transmet aucune règle sociale.", rep: false, expl: "Il impose horaires, gestes professionnels et conduites collectives." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis la socialisation secondaire et cite trois agents.", r: "C'est l'ensemble des apprentissages poursuivis après la petite enfance dans de nouveaux groupes. Agents : l'école, le groupe de pairs, le travail, les médias ou les associations." },
          { q: "Qu'apporte l'école comme agent de socialisation ?", r: "Elle transmet des savoirs communs, une langue commune, des règles collectives, le sens de l'effort et les bases de la citoyenneté." },
          { q: "Comment socialisation primaire et secondaire se complètent-elles ?", r: "La secondaire prolonge la primaire : elle s'appuie sur les acquis familiaux et y ajoute des rôles nouveaux — élève, professionnel, citoyen — que la famille ne peut transmettre." },
          { q: "Qu'est-ce que la socialisation anticipatrice ?", r: "C'est l'apprentissage par avance des conduites du groupe auquel on souhaite appartenir : par exemple un élève qui observe les gestes du métier visé." },
        ]},
        { type: "appariement", consigne: "Relie chaque agent à ce qu'il transmet.", pointsPar: 1, items: [
          { g: ["L'école", "Le groupe de pairs", "L'entreprise", "Les médias"], d: ["Les gestes professionnels et les horaires", "Les informations et les modèles", "Les savoirs et la citoyenneté", "Les codes vestimentaires et le langage"], pairs: [[0, 2], [1, 3], [2, 0], [3, 1]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 50 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le contrôle social : formel et informel",
      theme: "Socialisation de l'individu",
      ras: "Analyser le contrôle social dans la société et les facteurs de la déviance",
      valeurs: "Citoyenneté et patriotisme, Responsabilité",
      objectif: "définir le contrôle social et distinguer ses deux formes",
      supportMeta: "Documents sur les institutions locales, étude de cas, cahier",
      revision: [
        ["Qu'est-ce que la socialisation secondaire ?", "L'ensemble des apprentissages poursuivis après la petite enfance dans de nouveaux groupes."],
        ["Cite deux agents de socialisation secondaire.", "L'école, le groupe de pairs, le travail, les médias ou les associations."],
      ],
      mise: [
        "Pourquoi ranges-tu ta chambre : par peur d'une punition, ou parce que ta famille te regarde ?",
        "Les deux formes de contrôle existent : l'une passe par des règles écrites, l'autre par le regard des autres.",
      ],
      observation: "les documents sur les institutions locales et les règles de la communauté",
      observationSupport: "Documents sur les institutions locales, les règlements et les conventions de la communauté",
      technAna: "Étude de document, enquête de terrain et débat dirigé",
      qa: [
        ["Qu'est-ce que le contrôle social ?", "L'ensemble des moyens, des pression et des sanctions par lesquels une société amène ses membres à respecter les normes en vigueur."],
        ["Qu'est-ce que le contrôle social formel ?", "Celui qu'exercent des institutions spécialisées : police, gendarmerie, justice, administration, école, entreprise."],
        ["Qu'est-ce que le contrôle social informel ?", "Celui qu'exerce l'entourage au quotidien : la famille, les voisins, les collègues, le regard des passants, la réputation."],
        ["Quels moyens utilise le contrôle informel ?", "Le regard, le sourire, la réprobation, la moquerie, la rumeur, la mise à l'écart, la honte."],
        ["Quelle est la différence principale entre les deux ?", "Le contrôle formel s'appuie sur des règles écrites et des agents désignés ; le contrôle informel s'exerce sans règle écrite ni agent spécialisé."],
        ["Lequel est le plus efficace ?", "Le contrôle informel est souvent le plus constant, car il s'exerce partout et en permanence : il suffit du regard d'autrui."],
        ["Le contrôle social est-il seulement répressif ?", "Non : il valorise aussi les conduites conformes par l'approbation, la confiance, les félicitations et les récompenses."],
        ["Quels exemples locaux connaît-on ?", "Les conventions locales de la communauté, l'assemblée de village, le comité de quartier, le conseil des anciens : ils rappellent les règles et arbitrer les différends."],
      ],
      synthese: "Donc, le contrôle social est l'ensemble des moyens par lesquels la société obtient le respect des normes. Il prend deux formes : le contrôle formel, exercé par des institutions spécialisées, et le contrôle informel, exercé par l'entourage au quotidien. Il punit les écarts, mais valorise aussi les conduites conformes.",
      motsCles: ["contrôle social", "contrôle formel", "contrôle informel", "institution", "réprobation", "réputation", "sanction"],
      image: { file: "t11_u4_controle.png", legende: "Figure 44 — Contrôle social formel et contrôle social informel." },
      contenu: [
        {
          sousTitre: "1. Obtenir le respect des normes",
          texte: "Toute société doit s'assurer que ses règles sont suivies : c'est le rôle du contrôle social.",
          liste: [
            "Il rappelle la norme avant même de punir.",
            "Il sanctionne celui qui s'en écarte.",
            "Il valorise celui qui la respecte.",
            "Sans lui, les règles resteraient des vœux pieux.",
          ],
        },
        {
          sousTitre: "2. Le contrôle formel",
          texte: "Il s'exerce par des institutions et des agents expressément chargés de faire respecter la règle.",
          liste: [
            "Police et gendarmerie : constatation des infractions.",
            "Justice : jugement et sanction légale.",
            "Administration : contrôle des documents et des autorisations.",
            "École et entreprise : règlement intérieur et sanctions disciplinaires.",
          ],
        },
        {
          sousTitre: "3. Le contrôle informel",
          texte: "Il s'exerce sans texte ni institution : le simple regard d'autrui suffit.",
          liste: [
            "La famille : un reproche, un silence, une déception exprimée.",
            "Le voisinage : la réputation, la rumeur, la mise à l'écart.",
            "Les collègues et les camarades : la moquerie ou l'approbation.",
            "Il est permanent : on ne peut s'y soustraire qu'en s'isolant.",
          ],
        },
        {
          sousTitre: "4. Comparer les deux formes",
          texte: "Deux logiques distinctes, souvent complémentaires.",
          liste: [
            "Formel : règle écrite, agent désigné, sanction codifiée.",
            "Informel : usage partagé, tout le monde est contrôleur, sanction diffuse.",
            "Le contrôle formel intervient souvent quand l'informel a échoué.",
            "L'informel reste le plus fréquent dans la vie quotidienne.",
          ],
        },
        {
          sousTitre: "5. Un contrôle qui valorise aussi",
          texte: "Le contrôle social ne se réduit pas à la punition.",
          liste: [
            "Félicitations, confiance accordée, responsabilités confiées.",
            "Réputation d'honnêteté, qui ouvre des portes.",
            "Approbation du groupe, qui encourage à continuer.",
            "Cette face positive renforce l'adhésion aux normes.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le contrôle social est…", opts: ["l'ensemble des moyens qui font respecter les normes", "une sanction pénale", "une règle religieuse"], ok: 0, expl: "Il rappelle, sanctionne et valorise." },
          { q: "Le contrôle formel est exercé par…", opts: ["des institutions spécialisées", "les voisins", "les camarades de classe"], ok: 0, expl: "Police, justice, administration, école." },
          { q: "Un regard réprobateur dans la rue relève du contrôle…", opts: ["informel", "formel", "pénal"], ok: 0, expl: "Sans règle écrite ni agent désigné." },
          { q: "Le contrôle social…", opts: ["punit les écarts et valorise les conduites conformes", "ne fait que punir", "ne fait que récompenser"], ok: 0, expl: "Ses deux faces agissent ensemble." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le contrôle informel s'appuie sur des règles écrites.", rep: false, expl: "Il s'exerce sans texte, par le regard et la réputation." },
          { txt: "La police et la justice relèvent du contrôle formel.", rep: true, expl: "Ce sont des institutions spécialisées." },
          { txt: "Le contrôle informel est le plus fréquent au quotidien.", rep: true, expl: "Il s'exerce partout et en permanence." },
          { txt: "Le contrôle social ne valorise jamais les conduites conformes.", rep: false, expl: "Il approuve, félicite et confie des responsabilités." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis le contrôle social.", r: "C'est l'ensemble des moyens, des pression et des sanctions par lesquels une société amène ses membres à respecter les normes en vigueur." },
          { q: "Quelle différence y a-t-il entre contrôle formel et contrôle informel ?", r: "Le contrôle formel est exercé par des institutions spécialisées selon des règles écrites ; le contrôle informel s'exerce par l'entourage, sans texte ni agent désigné, par le regard et la réputation." },
          { q: "Cite deux moyens du contrôle informel.", r: "La réprobation ou la moquerie, la rumeur, la mise à l'écart et la honte." },
          { q: "Pourquoi le contrôle social n'est-il pas seulement répressif ?", r: "Parce qu'il valorise aussi les conduites conformes : félicitations, confiance, responsabilités confiées, bonne réputation." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["normes", "formel", "informel", "réputation", "justice"], items: [
          { phrase: "Le contrôle social fait respecter les _________.", mot: "normes" },
          { phrase: "La police et la _________ relèvent du contrôle formel.", mot: "justice" },
          { phrase: "Le regard des voisins est un contrôle _________.", mot: "informel" },
          { phrase: "La rumeur et la _________ sanctionnent au quotidien.", mot: "réputation" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 51 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Normes juridiques et normes sociales",
      theme: "Socialisation de l'individu",
      ras: "Analyser le contrôle social dans la société et les facteurs de la déviance",
      valeurs: "Citoyenneté et patriotisme, Responsabilité",
      objectif: "distinguer la norme juridique de la norme sociale et comparer leurs sanctions",
      supportMeta: "Textes de loi, règlements, exemples d'usages, cahier",
      revision: [
        ["Qu'est-ce que le contrôle social ?", "L'ensemble des moyens par lesquels la société fait respecter les normes."],
        ["Cite un moyen du contrôle informel.", "La réprobation, la moquerie, la rumeur ou la mise à l'écart."],
      ],
      mise: [
        "Ne pas saluer un aîné et ne pas payer ses impôts : les deux manquements sont-ils sanctionnés de la même façon ?",
        "Non : le premier attire la réprobation, le second une sanction prévue par la loi.",
      ],
      observation: "les textes de loi, règlements et exemples d'usages apportés en classe",
      observationSupport: "Textes de loi, règlements et exemples d'usages sociaux, affichés ou distribués",
      technAna: "Étude de document, tableau comparatif et débat dirigé",
      qa: [
        ["Qu'est-ce qu'une norme ?", "Une règle de conduite qui indique ce qu'il convient de faire ou de ne pas faire dans une situation donnée."],
        ["Qu'est-ce qu'une norme sociale ?", "Une règle issue des usages et des mœurs d'un groupe : saluer, s'habiller d'une certaine manière, céder sa place. Sa sanction est diffuse."],
        ["Qu'est-ce qu'une norme juridique ?", "Une règle écrite, édictée par l'autorité publique, dont le non-respect entraîne une sanction organisée par la puissance publique."],
        ["Quelles sont les sources du droit ?", "La Constitution, les lois et règlements, les conventions et traités internationaux, la coutume et les textes traditionnels."],
        ["Comment sanctionne-t-on la norme sociale ?", "Par la réprobation, la moquerie, la mise à l'écart : une sanction diffuse, sans procédure."],
        ["Comment sanctionne-t-on la norme juridique ?", "Par une sanction institutionnalisée : amende, dommages et intérêts, peine de prison, annulation d'un acte."],
        ["Les deux se contredisent-elles ?", "Elles se recouvrent souvent : la loi reprend fréquemment une norme sociale devenue essentielle — ne pas tuer, respecter la propriété."],
        ["Laquelle évolue le plus vite ?", "La norme sociale, car elle suit les mœurs : ce qui était choquant hier peut être admis aujourd'hui, et inversement."],
      ],
      synthese: "Donc, la norme sociale vient des usages et se sanctionne par la réprobation diffuse, tandis que la norme juridique est écrite, édictée par l'autorité publique et sanctionnée de façon organisée. Les deux se recouvrent souvent : la loi consolide fréquemment une règle sociale devenue essentielle.",
      motsCles: ["norme", "norme sociale", "norme juridique", "usage", "sanction", "loi", "coutume"],
      image: { file: "t11_u4_normes.png", legende: "Figure 45 — Normes sociales et normes juridiques : origine et sanction." },
      contenu: [
        {
          sousTitre: "1. La règle de conduite",
          texte: "Une norme indique ce qui est attendu : elle rend la vie collective prévisible.",
          liste: [
            "Elle s'applique à une situation précise : on ne se conduit pas de la même façon en classe et dans la rue.",
            "Elle est partagée par un groupe : ce qui est normal ici peut ne pas l'être ailleurs.",
            "Elle est intériorisée : on la suit souvent sans y penser.",
          ],
        },
        {
          sousTitre: "2. La norme sociale",
          texte: "Elle naît des pratiques répétées d'un groupe, sans texte qui la fixe.",
          liste: [
            "Saluer les aînés, remercier, céder sa place.",
            "S'habiller d'une manière adaptée à la circonstance.",
            "Respecter les usages d'un quartier ou d'une communauté.",
            "Sa sanction : le regard, la réprobation, la mise à l'écart.",
          ],
        },
        {
          sousTitre: "3. La norme juridique",
          texte: "Elle est écrite, publique et appuyée par la force publique.",
          liste: [
            "Édictée par l'autorité compétente : Parlement, Gouvernement, autorité locale.",
            "Consignée dans un texte : Constitution, loi, décret, arrêté.",
            "Sanctionnée par une institution : tribunal, administration, police.",
            "Exemples : payer ses impôts, respecter le Code de la route, tenir ses contrats.",
          ],
        },
        {
          sousTitre: "4. Les sources du droit",
          texte: "La règle juridique puise à plusieurs sources, hiérarchisées.",
          liste: [
            "La Constitution, au sommet de la hiérarchie.",
            "Les lois et les règlements pris pour les appliquer.",
            "Les conventions et traités internationaux ratifiés.",
            "La coutume et les textes de droit traditionnel, reconnus dans certaines matières.",
          ],
        },
        {
          sousTitre: "5. Deux normes complémentaires",
          texte: "Plutôt que de s'opposer, elles se renforcent le plus souvent.",
          liste: [
            "La loi reprend souvent une règle sociale devenue indispensable.",
            "La norme sociale prépare l'obéissance à la loi.",
            "Quand la loi s'écarte trop des mœurs, elle perd en efficacité.",
            "Les deux évoluent : la norme sociale suit les mœurs, la loi suit le débat public.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une norme sociale est sanctionnée par…", opts: ["la réprobation diffuse", "une peine de prison", "une amende"], ok: 0, expl: "Regard, moquerie, mise à l'écart." },
          { q: "Une norme juridique est…", opts: ["écrite et sanctionnée par l'autorité publique", "impossible à connaître", "toujours facultative"], ok: 0, expl: "Elle est édictée puis appliquée par des institutions." },
          { q: "Parmi ces normes, laquelle est juridique ?", opts: ["payer ses impôts", "saluer un aîné", "céder sa place"], ok: 0, expl: "Les deux autres relèvent de l'usage." },
          { q: "Au sommet de la hiérarchie des sources du droit figure…", opts: ["la Constitution", "le règlement intérieur", "la coutume"], ok: 0, expl: "Toutes les autres règles doivent la respecter." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Toutes les normes sont écrites.", rep: false, expl: "Les normes sociales reposent sur les usages, sans texte." },
          { txt: "La sanction juridique est organisée par une institution.", rep: true, expl: "Tribunal, administration ou police." },
          { txt: "La loi reprend souvent une règle sociale essentielle.", rep: true, expl: "Ne pas tuer, respecter la propriété en sont des exemples." },
          { txt: "La norme sociale évolue plus lentement que la loi.", rep: false, expl: "Elle suit directement les mœurs, donc change plus vite." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis une norme et distingue ses deux formes.", r: "Une norme est une règle de conduite. La norme sociale vient des usages et se sanctionne par la réprobation ; la norme juridique est écrite, édictée par l'autorité publique et sanctionnée par une institution." },
          { q: "Cite deux exemples de norme sociale et deux exemples de norme juridique.", r: "Normes sociales : saluer les aînés et céder sa place. Normes juridiques : payer ses impôts et respecter le Code de la route." },
          { q: "Quelles sont les sources du droit ?", r: "La Constitution, les lois et règlements, les conventions et traités internationaux, la coutume et les textes de droit traditionnel." },
          { q: "Pourquoi les deux types de normes se complètent-ils ?", r: "La loi reprend souvent une règle sociale devenue essentielle, et la norme sociale prépare l'obéissance à la loi : une loi trop éloignée des mœurs perd en efficacité." },
        ]},
        { type: "appariement", consigne: "Relie chaque situation au type de norme.", pointsPar: 1, items: [
          { g: ["Saluer les aînés", "Payer ses impôts", "Respecter le Code de la route", "Céder sa place à une personne âgée"], d: ["Norme juridique", "Norme juridique", "Norme sociale", "Norme sociale"], pairs: [[0, 2], [1, 0], [2, 1], [3, 3]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 52 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les sanctions : formes et fonctions",
      theme: "Socialisation de l'individu",
      ras: "Analyser le contrôle social dans la société et les facteurs de la déviance",
      valeurs: "Citoyenneté et patriotisme, Responsabilité",
      objectif: "distinguer les formes de sanction et expliquer leurs fonctions",
      supportMeta: "Règlements, études de cas, cahier",
      revision: [
        ["Qu'est-ce qu'une norme juridique ?", "Une règle écrite, édictée par l'autorité publique et sanctionnée par une institution."],
        ["Cite une source du droit.", "La Constitution, la loi, le règlement, un traité international ou la coutume."],
      ],
      mise: [
        "Un élève arrive en retard : le professeur le réprimande. Un automobiliste brûle un feu : il paie une amende. Quel point commun ?",
        "Dans les deux cas, une sanction rappelle la règle : la réaction du groupe ou de l'institution face à un écart.",
      ],
      observation: "les règlements et études de cas étudiés en classe",
      observationSupport: "Règlements intérieurs, études de cas de sanctions, affichés ou distribués",
      technAna: "Étude de cas, débat dirigé et questionnement",
      qa: [
        ["Qu'est-ce qu'une sanction ?", "La réaction du groupe ou de l'institution face à un comportement, destinée à rappeler la norme qu'il respecte ou qu'il enfreint."],
        ["Qu'est-ce qu'une sanction positive ?", "Une réaction favorable à une conduite conforme : félicitations, récompense, promotion, confiance accordée."],
        ["Qu'est-ce qu'une sanction négative ?", "Une réaction défavorable à une conduite déviante : réprimande, blâme, amende, exclusion, peine de prison."],
        ["Quelles sont les fonctions de la sanction ?", "Rappeler la norme, dissuader de recommencer, réparer le tort causé, protéger la société et permettre la réinsertion."],
        ["Comment les sanctions se graduent-elles ?", "Du simple regard réprobateur à la réprimande, puis à l'exclusion temporaire, à l'amende et enfin à la peine privative de liberté."],
        ["Qu'est-ce qu'une sanction formelle, une sanction informelle ?", "Formelle : prononcée par une institution selon une procédure. Informelle : exercée par l'entourage, sans procédure."],
        ["Pourquoi la proportionnalité compte-t-elle ?", "Une sanction disproportionnée perd sa légitimité : elle paraît injuste et produit de la révolte au lieu de l'adhésion."],
        ["La sanction suffit-elle à faire respecter la règle ?", "Non : l'adhésion aux valeurs compte autant. On respecte d'abord une règle parce qu'on la reconnaît comme juste."],
      ],
      synthese: "Donc, la sanction est la réaction du groupe ou de l'institution à un comportement. Positive ou négative, formelle ou informelle, elle rappelle la norme, dissuade, répare et protège. Sa crédibilité dépend de sa proportionnalité : une sanction injuste produit l'effet inverse de celui recherché.",
      motsCles: ["sanction", "sanction positive", "sanction négative", "dissuasion", "réparation", "proportionnalité", "réinsertion"],
      image: { file: "t11_u4_sanctions.png", legende: "Figure 46 — Les formes et les fonctions de la sanction." },
      contenu: [
        {
          sousTitre: "1. La réaction du groupe",
          texte: "Tout manquement appelle une réponse : c'est le principe même de la sanction.",
          liste: [
            "Elle peut être immédiate — un regard — ou différée — un jugement.",
            "Elle dit publiquement ce qui est accepté et ce qui ne l'est pas.",
            "Elle s'adresse à celui qui a fauté, mais aussi à tous les témoins.",
          ],
        },
        {
          sousTitre: "2. Sanction positive et sanction négative",
          texte: "Le contrôle social récompense au moins autant qu'il punit.",
          liste: [
            "Positives : félicitations, prix scolaire, promotion, confiance.",
            "Négatives : réprimande, blâme, amende, exclusion, prison.",
            "Les positives installent durablement l'habitude de la conformité.",
            "Les négatives marquent la limite à ne pas franchir.",
          ],
        },
        {
          sousTitre: "3. Les fonctions de la sanction",
          texte: "Une sanction ne se contente pas de punir : elle poursuit plusieurs buts.",
          liste: [
            "Rappeler la norme : montrer qu'elle existe toujours.",
            "Dissuader : décourager la répétition de l'écart.",
            "Réparer : indemniser la victime, remettre les choses en état.",
            "Protéger : écarter temporairement un individu dangereux.",
            "Réinsérer : permettre le retour dans la vie collective.",
          ],
        },
        {
          sousTitre: "4. La gradation des sanctions",
          texte: "La société dispose d'une échelle de réponses, du plus léger au plus lourd.",
          liste: [
            "Le regard réprobateur et la réprimande orale.",
            "L'avertissement écrit, la convocation, la mise à l'écart temporaire.",
            "L'amende et la réparation financière.",
            "L'exclusion définitive d'un groupe, puis la peine de prison.",
            "Le choix dépend de la gravité de l'acte et de la situation de la personne.",
          ],
        },
        {
          sousTitre: "5. Les conditions d'efficacité",
          texte: "Une sanction ne produit ses effets que si elle est perçue comme légitime.",
          liste: [
            "Proportionnée à la faute commise.",
            "Prévisible : énoncée à l'avance par un texte connu.",
            "Appliquée de façon équitable, sans passe-droit.",
            "Accompagnée d'un effort de réinsertion, sans quoi elle enferme.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une sanction est…", opts: ["la réaction du groupe ou de l'institution à un comportement", "une règle écrite", "un impôt"], ok: 0, expl: "Elle rappelle la norme respectée ou enfreinte." },
          { q: "Des félicitations sont une sanction…", opts: ["positive", "négative", "pécuniaire"], ok: 0, expl: "Elles récompensent une conduite conforme." },
          { q: "Une sanction disproportionnée…", opts: ["perd sa légitimité", "est toujours efficace", "n'existe pas"], ok: 0, expl: "Elle produit de la révolte au lieu de l'adhésion." },
          { q: "Parmi ces fonctions, laquelle est celle d'une sanction ?", opts: ["réparer le tort causé", "supprimer la règle", "créer la norme"], ok: 0, expl: "Avec rappeler la norme, dissuader et protéger." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Toute sanction est négative.", rep: false, expl: "Les félicitations et récompenses sont des sanctions positives." },
          { txt: "Une sanction sert aussi à protéger la société.", rep: true, expl: "Elle peut écarter temporairement un individu dangereux." },
          { txt: "Le regard réprobateur est la sanction la plus légère.", rep: true, expl: "C'est le premier degré de l'échelle des sanctions." },
          { txt: "La sanction suffit toujours à faire respecter la règle.", rep: false, expl: "L'adhésion aux valeurs compte autant que la crainte de la peine." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis la sanction et cite deux formes.", r: "C'est la réaction du groupe ou de l'institution face à un comportement. Formes : sanction positive — félicitations — et sanction négative — réprimande, amende, exclusion." },
          { q: "Cite quatre fonctions de la sanction.", r: "Rappeler la norme, dissuader la répétition de l'écart, réparer le tort causé et protéger la société, sans oublier la réinsertion." },
          { q: "Comment se graduent les sanctions ?", r: "Du regard réprobateur à la réprimande, puis à l'avertissement écrit, à l'exclusion temporaire, à l'amende et enfin à la peine de prison." },
          { q: "Pourquoi la proportionnalité est-elle indispensable ?", r: "Parce qu'une sanction disproportionnée est perçue comme injuste : elle perd sa légitimité et produit de la révolte au lieu de l'adhésion." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Une récompense est une sanction", suite: "positive" },
          { debut: "Une amende est une sanction", suite: "négative" },
          { debut: "Indemniser la victime, c'est", suite: "réparer" },
          { debut: "Permettre le retour dans la vie collective, c'est la", suite: "réinsertion" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 53 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La déviance : définition et manifestations",
      theme: "Socialisation de l'individu",
      ras: "Analyser le contrôle social dans la société et les facteurs de la déviance",
      valeurs: "Citoyenneté et patriotisme, Responsabilité",
      objectif: "définir la déviance et décrire ses deux grandes manifestations",
      supportMeta: "Documents sur les conduites sociales, étude de cas, cahier",
      revision: [
        ["Qu'est-ce qu'une sanction ?", "La réaction du groupe ou de l'institution face à un comportement."],
        ["Cite deux fonctions de la sanction.", "Rappeler la norme, dissuader, réparer, protéger ou réinsérer."],
      ],
      mise: [
        "Arriver en retard en classe est-il grave partout et toujours ?",
        "Non : la gravité dépend du lieu, de l'époque et du groupe. La déviance est toujours relative à une norme.",
      ],
      observation: "les documents décrivant des conduites jugées déviantes selon les contextes",
      observationSupport: "Documents sur des conduites sociales et leur appréciation selon les milieux",
      technAna: "Étude de document, débat dirigé et enquête au niveau de la société",
      qa: [
        ["Qu'est-ce que la déviance ?", "Un écart par rapport aux normes admises dans une société, un groupe ou une situation donnée."],
        ["La déviance est-elle universelle ?", "Non : elle est relative. Ce qui est déviant ici ne l'est pas ailleurs ; ce qui l'était hier peut ne plus l'être aujourd'hui."],
        ["Quelle est la première manifestation de la déviance ?", "La transgression des normes sociales : incivilités, refus des usages, irrespect des convenances."],
        ["Quelle est la seconde ?", "Le rejet des valeurs : la contestation radicale des principes mêmes sur lesquels repose la vie collective."],
        ["Être déviant, est-ce forcément commettre un acte nuisible ?", "Non : on peut être tenu pour déviant par le seul regard du groupe, sans avoir causé de tort — une tenue inhabituelle suffit parfois."],
        ["Quel rôle joue l'étiquetage ?", "Désigner quelqu'un comme déviant peut l'amener à le devenir : la réaction sociale fabrique parfois la déviance qu'elle dénonce."],
        ["La déviance est-elle toujours négative ?", "Pas entièrement : contester une règle injuste peut faire évoluer la société. La déviance révèle aussi les limites d'une norme."],
        ["Comment la société réagit-elle ?", "Par le contrôle social : réprobation, sanction, exclusion, ou au contraire par la réinsertion et le dialogue."],
      ],
      synthese: "Donc, la déviance est un écart par rapport aux normes admises : elle est toujours relative à un groupe, un lieu et une époque. Elle se manifeste par la transgression des normes sociales ou par le rejet des valeurs. Le regard du groupe suffit parfois à la créer, ce qui montre qu'elle est aussi une construction sociale.",
      motsCles: ["déviance", "transgression", "rejet des valeurs", "relativité", "étiquetage", "marginalité", "incivilité"],
      image: { file: "t11_u4_deviance.png", legende: "Figure 47 — La déviance : transgression des normes et rejet des valeurs." },
      contenu: [
        {
          sousTitre: "1. L'écart par rapport à la norme",
          texte: "On appelle déviance toute conduite qui s'écarte de ce que le groupe attend.",
          liste: [
            "L'écart se mesure par rapport à une norme, jamais en soi.",
            "Il peut être mineur — une tenue inhabituelle — ou grave — un acte délictueux.",
            "Il provoque une réaction du groupe : c'est cette réaction qui le qualifie.",
          ],
        },
        {
          sousTitre: "2. Une notion relative",
          texte: "Rien n'est déviant en soi : tout dépend du contexte.",
          liste: [
            "Selon les lieux : une tenue admise à la plage ne l'est pas en classe.",
            "Selon les époques : des conduites autrefois condamnées sont aujourd'hui acceptées.",
            "Selon les groupes : une conduite valorisée par les pairs peut être blâmée par les adultes.",
            "Cette relativité interdit de juger une conduite hors de son contexte.",
          ],
        },
        {
          sousTitre: "3. Transgresser les normes sociales",
          texte: "La forme la plus courante de déviance ne commet aucun délit : elle enfreint les usages.",
          liste: [
            "Incivilités : ne pas saluer, couper la parole, jeter des déchets.",
            "Refus des convenances : tenue jugée inadaptée, langage provocant.",
            "Manquement aux obligations scolaires : absentéisme, retards répétés.",
            "La sanction reste diffuse : réprobation, mise à l'écart, réputation.",
          ],
        },
        {
          sousTitre: "4. Rejeter les valeurs",
          texte: "Plus profonde, cette forme conteste les principes mêmes de la vie collective.",
          liste: [
            "Refus de l'effort scolaire, rejet de l'autorité.",
            "Contestation radicale des règles de la cité.",
            "Conduites délictueuses : vol, violence, fraude organisée.",
            "La société répond alors par une sanction formelle et organisée.",
          ],
        },
        {
          sousTitre: "5. Une construction sociale",
          texte: "La déviance n'existe que parce qu'un groupe la désigne comme telle.",
          liste: [
            "La réaction sociale précède souvent la conduite : on est désigné, puis on agit en conséquence.",
            "Contester une règle injuste peut faire avancer la société.",
            "La déviance révèle aussi les limites et les contradictions d'une norme.",
            "C'est pourquoi la réponse doit viser la réinsertion, pas seulement la punition.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La déviance est…", opts: ["un écart par rapport aux normes admises", "une maladie", "une loi"], ok: 0, expl: "Elle se mesure toujours par rapport à une norme." },
          { q: "La déviance est une notion…", opts: ["relative au groupe, au lieu et à l'époque", "universelle et immuable", "purement biologique"], ok: 0, expl: "Rien n'est déviant en soi, tout dépend du contexte." },
          { q: "L'absentéisme scolaire est…", opts: ["une transgression des normes sociales", "un rejet total des valeurs", "une maladie"], ok: 0, expl: "Il enfreint une obligation de la vie scolaire." },
          { q: "Le rejet des valeurs est…", opts: ["la forme la plus profonde de déviance", "une simple incivilité", "une norme"], ok: 0, expl: "Il conteste les principes mêmes de la vie collective." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Ce qui est déviant ici peut être normal ailleurs.", rep: true, expl: "La déviance est relative au groupe et au lieu." },
          { txt: "On peut être tenu pour déviant sans avoir commis d'acte nuisible.", rep: true, expl: "Le regard du groupe suffit parfois à désigner." },
          { txt: "La déviance n'a jamais d'effet positif sur la société.", rep: false, expl: "Contester une règle injuste peut faire évoluer les mœurs." },
          { txt: "La réponse sociale se limite toujours à la punition.", rep: false, expl: "Elle vise aussi la réinsertion et le dialogue." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis la déviance et montre qu'elle est relative.", r: "C'est un écart par rapport aux normes admises. Elle est relative : une tenue admise à la plage ne l'est pas en classe, et ce qui était condamné hier peut être accepté aujourd'hui." },
          { q: "Quelles sont les deux grandes manifestations de la déviance ?", r: "La transgression des normes sociales — incivilités, absentéisme — et le rejet des valeurs, qui conteste les principes mêmes de la vie collective." },
          { q: "Peut-on être déviant sans commettre d'acte nuisible ?", r: "Oui : le regard du groupe suffit parfois à désigner comme déviante une conduite qui ne cause aucun tort, comme une tenue inhabituelle." },
          { q: "Pourquoi dit-on que la déviance est une construction sociale ?", r: "Parce qu'elle n'existe que lorsqu'un groupe la désigne : la réaction sociale précède souvent la conduite et peut amener la personne à s'y conformer." },
        ]},
        { type: "appariement", consigne: "Relie chaque conduite à sa qualification.", pointsPar: 1, items: [
          { g: ["Jeter des déchets dans la cour", "Absentéisme répété", "Contester toute règle collective", "Porter une tenue inhabituelle"], d: ["Transgression des normes scolaires", "Rejet des valeurs", "Déviance par le seul regard d'autrui", "Incivilité"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 54 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "L'anomie : l'affaiblissement des normes",
      theme: "Socialisation de l'individu",
      ras: "Analyser le contrôle social dans la société et les facteurs de la déviance",
      valeurs: "Citoyenneté et patriotisme, Responsabilité",
      objectif: "définir l'anomie et expliquer comment l'affaiblissement des normes favorise la déviance",
      supportMeta: "Documents sur les changements sociaux, étude de cas, cahier",
      revision: [
        ["Qu'est-ce que la déviance ?", "Un écart par rapport aux normes admises dans un groupe ou une société."],
        ["Cite une manifestation de la déviance.", "La transgression des normes sociales ou le rejet des valeurs."],
      ],
      mise: [
        "Une famille quitte son village pour la ville : les repères d'hier ne valent plus. Que se passe-t-il ?",
        "Les repères s'effacent, les règles paraissent incertaines : c'est l'anomie, qui ouvre la voie à la déviance.",
      ],
      observation: "les documents décrivant des périodes de changement social rapide",
      observationSupport: "Documents sur les changements sociaux : exode rural, crises, transformations du travail",
      technAna: "Étude de document, débat dirigé et enquête au niveau de la société",
      qa: [
        ["Qu'est-ce que l'anomie ?", "Une situation dans laquelle les normes sont affaiblies, contradictoires ou absentes : l'individu ne sait plus quelle règle suivre ni quelle conduite adopter."],
        ["D'où vient ce mot ?", "Il a été forgé par le sociologue Émile Durkheim pour désigner le défaut de régulation qui apparaît quand les repères collectifs se relâchent."],
        ["Quand apparaît-elle ?", "Dans les périodes de changement rapide : crises économiques, exode rural, chômage massif, transformations brutales des modes de vie."],
        ["Quel est le lien avec la déviance ?", "Quand les repères manquent, les conduites ne sont plus encadrées : la déviance et le sentiment de désarroi augmentent."],
        ["Quels autres facteurs favorisent la déviance ?", "La pauvreté, l'échec scolaire, la rupture des liens familiaux, l'absence d'encadrement et l'influence d'un groupe déjà déviant."],
        ["L'anomie est-elle un phénomène individuel ?", "Non : c'est un état de la société, qui se répercute ensuite sur les conduites individuelles."],
        ["Comment prévenir ces situations ?", "En maintenant des repères stables : école, famille, encadrement associatif, activités pour les jeunes, perspectives d'avenir."],
        ["Quel rôle l'école joue-t-elle ?", "Elle offre un cadre de règles claires et un projet : elle réduit le désarroi en donnant des repères et une perspective."],
      ],
      synthese: "Donc, l'anomie est l'affaiblissement ou la disparition des repères collectifs : l'individu ne sait plus quelle règle suivre. Elle apparaît dans les périodes de changement rapide et favorise la déviance. La prévention passe par des cadres stables : école, famille, encadrement et perspectives d'avenir.",
      motsCles: ["anomie", "affaiblissement des normes", "changement social", "repères", "désarroi", "prévention", "encadrement"],
      image: { file: "t11_u4_anomie.png", legende: "Figure 48 — L'anomie : quand les repères s'effacent, la déviance augmente." },
      contenu: [
        {
          sousTitre: "1. Quand les règles se brouillent",
          texte: "L'anomie n'est pas l'absence de toute règle, mais l'incertitude sur la règle à suivre.",
          liste: [
            "Les normes se contredisent : ce qui est valorisé ici est blâmé là.",
            "Les repères habituels ne s'appliquent plus.",
            "L'individu se trouve désorienté, sans boussole.",
          ],
        },
        {
          sousTitre: "2. Les situations qui la provoquent",
          texte: "Certaines périodes fragilisent les cadres collectifs.",
          liste: [
            "Les crises économiques : le chômage rompt les habitudes de travail.",
            "L'exode rural : les repères du village ne valent plus en ville.",
            "Les transformations rapides des métiers et des médias.",
            "Les conflits et les situations d'urgence, qui suspendent les règles ordinaires.",
          ],
        },
        {
          sousTitre: "3. Les conséquences",
          texte: "Sans repères clairs, les conduites se dérèglent.",
          liste: [
            "Montée des conduites déviantes : incivilités, violences, conduites à risque.",
            "Sentiment de désarroi et d'inutilité chez les individus touchés.",
            "Fragilisation des solidarités familiales et de voisinage.",
            "Perte de confiance dans les institutions.",
          ],
        },
        {
          sousTitre: "4. Les autres facteurs de la déviance",
          texte: "L'anomie n'explique pas tout : d'autres facteurs s'y ajoutent.",
          liste: [
            "La pauvreté et le manque de perspectives.",
            "L'échec scolaire et l'absence de qualification.",
            "La rupture des liens familiaux et l'absence d'encadrement.",
            "L'appartenance à un groupe où la déviance est la norme.",
          ],
        },
        {
          sousTitre: "5. Prévenir",
          texte: "Restaurer des repères est la réponse la plus efficace.",
          liste: [
            "Une école qui tient : règles claires, suivi des élèves, projet.",
            "Des activités encadrées : sport, culture, associations de jeunes.",
            "Un accompagnement des familles en difficulté.",
            "Des perspectives : formation, emploi, engagement citoyen.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "L'anomie désigne…", opts: ["l'affaiblissement ou la disparition des repères collectifs", "une règle très stricte", "une sanction"], ok: 0, expl: "L'individu ne sait plus quelle règle suivre." },
          { q: "Le mot « anomie » a été forgé par…", opts: ["Émile Durkheim", "Karl Marx", "Adam Smith"], ok: 0, expl: "Le sociologue français l'a utilisé pour décrire le défaut de régulation." },
          { q: "Une situation qui favorise l'anomie est…", opts: ["un changement social rapide", "une règle très stable", "une tradition ancienne"], ok: 0, expl: "Crise, exode rural, chômage massif." },
          { q: "Pour prévenir la déviance, on peut…", opts: ["offrir un encadrement et des perspectives", "supprimer toute règle", "isoler les jeunes"], ok: 0, expl: "École, activités encadrées, formation et emploi." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "L'anomie est un phénomène purement individuel.", rep: false, expl: "C'est un état de la société qui se répercute sur les individus." },
          { txt: "L'exode rural peut provoquer un affaiblissement des repères.", rep: true, expl: "Les règles du village ne s'appliquent plus en ville." },
          { txt: "L'échec scolaire est un facteur de déviance.", rep: true, expl: "Avec la pauvreté et la rupture des liens familiaux." },
          { txt: "L'anomie explique à elle seule toutes les conduites déviantes.", rep: false, expl: "La pauvreté, l'échec scolaire et le groupe de pairs comptent aussi." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis l'anomie.", r: "C'est une situation où les normes sont affaiblies, contradictoires ou absentes : l'individu ne sait plus quelle règle suivre ni quelle conduite adopter." },
          { q: "Cite trois situations qui favorisent l'anomie.", r: "Une crise économique avec chômage massif, l'exode rural, et une transformation brutale des modes de vie ou des métiers." },
          { q: "Quel est le lien entre anomie et déviance ?", r: "Quand les repères collectifs manquent, les conduites ne sont plus encadrées : les incivilités, les violences et les conduites à risque augmentent." },
          { q: "Cite trois moyens de prévention.", r: "Une école qui tient avec des règles claires, des activités sportives et culturelles encadrées, et des perspectives de formation et d'emploi." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["anomie", "repères", "chômage", "encadrement", "école"], items: [
          { phrase: "Quand les normes se brouillent, on parle d'_________.", mot: "anomie" },
          { phrase: "Les _________ collectifs indiquent la conduite à tenir.", mot: "repères" },
          { phrase: "Le _________ massif rompt les habitudes de travail.", mot: "chômage" },
          { phrase: "L'_________ offre un cadre de règles claires et un projet.", mot: "école" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 55 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Étiquetage, stigmatisation et interactions sociales",
      theme: "Socialisation de l'individu",
      ras: "Analyser le contrôle social dans la société et les facteurs de la déviance",
      valeurs: "Citoyenneté et patriotisme, Responsabilité",
      objectif: "expliquer comment l'étiquetage et la stigmatisation fabriquent la déviance",
      supportMeta: "Mises en situation, études de cas, cahier",
      revision: [
        ["Qu'est-ce que l'anomie ?", "L'affaiblissement des normes, qui laisse l'individu sans repères."],
        ["Cite un facteur de déviance autre que l'anomie.", "La pauvreté, l'échec scolaire, la rupture familiale ou le groupe de pairs."],
      ],
      mise: [
        "Un élève qu'on répète être « mauvais » finit par se comporter comme tel. Pourquoi ?",
        "Parce que l'étiquette finit par devenir une identité : la personne se conforme à l'image qu'on lui renvoie.",
      ],
      observation: "les mises en situation et études de cas d'étiquetage étudiées en classe",
      observationSupport: "Mises en situation et études de cas sur l'étiquetage et la stigmatisation",
      technAna: "Étude de cas, jeu de rôle et débat dirigé",
      qa: [
        ["Qu'est-ce que l'étiquetage ?", "Le fait de désigner une personne par une étiquette — « le mauvais élève », « le voyou » — qui finit par définir son identité aux yeux de tous."],
        ["Qu'est-ce que la stigmatisation ?", "La marque durable laissée par l'étiquette : elle discrédite la personne et la place à l'écart du groupe."],
        ["Comment l'étiquetage fabrique-t-il la déviance ?", "Désigné comme déviant, l'individu se voit fermer les portes ordinaires ; il se réfugie dans le groupe des personnes ainsi désignées et finit par adopter la conduite attendue."],
        ["Qu'est-ce qu'une prophétie auto-réalisatrice ?", "Une prédiction qui provoque sa propre réalisation : annoncer qu'un élève échouera le conduit à l'échec annoncé."],
        ["Quel rôle jouent les interactions sociales ?", "L'identité se construit dans les échanges : le regard, les paroles et les attentes d'autrui façonnent la conduite de chacun."],
        ["Quelles conséquences pour la personne stigmatisée ?", "L'exclusion, la honte, le repli, la perte de confiance en soi et l'enfermement dans le rôle qu'on lui attribue."],
        ["Comment éviter ces effets ?", "En nommant l'acte et non la personne, en sanctionnant proportionnellement, en préservant la dignité et en ménageant des portes de sortie."],
        ["Quel est le rôle de la réinsertion ?", "Elle permet de rompre la carrière déviante : retrouver une place dans l'école, le travail ou le quartier efface l'étiquette."],
      ],
      synthese: "Donc, l'étiquetage et la stigmatisation montrent que la déviance se construit dans les interactions sociales : désignée durablement, la personne finit par se conformer à l'image qu'on lui renvoie. Nommer l'acte plutôt que la personne, sanctionner proportionnellement et ménager une réinsertion limitent ces effets.",
      motsCles: ["étiquetage", "stigmatisation", "prophétie auto-réalisatrice", "interaction", "exclusion", "dignité", "réinsertion"],
      image: { file: "t11_u4_stigmatisation.jpg", legende: "Figure 49 — L'étiquetage : quand l'étiquette devient une identité." },
      contenu: [
        {
          sousTitre: "1. Désigner, c'est déjà agir",
          texte: "Nommer une personne par un défaut n'est jamais neutre : le mot s'installe et fait effet.",
          liste: [
            "« Le paresseux », « le mauvais élève », « le voyou » sont des étiquettes.",
            "Elles résument une personne à un seul trait.",
            "Elles se diffusent dans le groupe et deviennent difficiles à décoller.",
          ],
        },
        {
          sousTitre: "2. De l'étiquette à la stigmatisation",
          texte: "L'étiquette devient stigma quand elle disqualifie durablement la personne.",
          liste: [
            "Le regard des autres change : méfiance, distance, rejet.",
            "Les occasions ordinaires se ferment : stage, emploi, amitié.",
            "La personne intériorise l'image et finit par y croire.",
          ],
        },
        {
          sousTitre: "3. La carrière déviante",
          texte: "Le sociologue Howard Becker a décrit ce processus en plusieurs étapes.",
          liste: [
            "Un acte est commis et repéré par le groupe.",
            "Une étiquette est posée publiquement.",
            "Les portes ordinaires se ferment une à une.",
            "La personne rejoint le groupe de celles qui portent la même étiquette.",
            "La conduite déviante se stabilise : elle est devenue une identité.",
          ],
        },
        {
          sousTitre: "4. La prophétie auto-réalisatrice",
          texte: "L'attente d'autrui suffit parfois à produire ce qu'elle annonce.",
          liste: [
            "Un enseignant convaincu qu'un élève échouera le suit moins.",
            "L'élève, moins encouragé, travaille moins et échoue.",
            "L'échec confirme la prédiction initiale.",
            "L'inverse est vrai : une attente positive élève les résultats.",
          ],
        },
        {
          sousTitre: "5. Limiter les dégâts",
          texte: "La manière de réagir à un écart détermine la suite du parcours.",
          liste: [
            "Nommer l'acte, jamais la personne : « tu as copié », non « tu es un tricheur ».",
            "Sanctionner proportionnellement et de façon prévisible.",
            "Préserver la dignité : éviter l'humiliation publique.",
            "Ménager une porte de sortie : réparation, excuse, retour dans le groupe.",
            "Accompagner la réinsertion pour rompre la carrière déviante.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "L'étiquetage consiste à…", opts: ["désigner une personne par un trait qui devient son identité", "poser une affiche", "rédiger une loi"], ok: 0, expl: "L'étiquette résume la personne à un défaut." },
          { q: "Une prophétie auto-réalisatrice est…", opts: ["une prédiction qui provoque sa propre réalisation", "une règle religieuse", "une sanction pénale"], ok: 0, expl: "Annoncer un échec le rend plus probable." },
          { q: "Pour limiter les effets de l'étiquetage, il faut…", opts: ["nommer l'acte, pas la personne", "aggraver la sanction", "isoler la personne"], ok: 0, expl: "Préserver la dignité et ménager une porte de sortie." },
          { q: "La stigmatisation…", opts: ["disqualifie durablement la personne", "est une récompense", "n'existe pas"], ok: 0, expl: "Elle marque, discrédite et exclut." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une étiquette peut finir par devenir une identité.", rep: true, expl: "La personne se conforme à l'image renvoyée." },
          { txt: "La stigmatisation ouvre des portes à la personne.", rep: false, expl: "Elle en ferme : stage, emploi, amitié." },
          { txt: "Une attente positive peut améliorer les résultats d'un élève.", rep: true, expl: "L'inverse de la prophétie négative est tout aussi efficace." },
          { txt: "Humilier publiquement aide à corriger une conduite.", rep: false, expl: "L'humiliation enferme au lieu de corriger." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis l'étiquetage et la stigmatisation.", r: "L'étiquetage consiste à désigner une personne par un trait qui finit par définir son identité ; la stigmatisation est la marque durable qui en résulte, qui discrédite la personne et la place à l'écart." },
          { q: "Décris les étapes de la carrière déviante.", r: "Un acte est repéré, une étiquette est posée publiquement, les portes ordinaires se ferment, la personne rejoint le groupe ainsi désigné, et la conduite se stabilise jusqu'à devenir une identité." },
          { q: "Qu'est-ce qu'une prophétie auto-réalisatrice ? Donne un exemple.", r: "C'est une prédiction qui provoque sa propre réalisation : un enseignant convaincu qu'un élève échouera le suit moins, l'élève travaille moins et échoue effectivement." },
          { q: "Cite trois règles pour limiter les effets de l'étiquetage.", r: "Nommer l'acte et non la personne, sanctionner proportionnellement et prévisiblement, préserver la dignité en évitant l'humiliation publique et ménager une réinsertion." },
        ]},
        { type: "appariement", consigne: "Relie chaque notion à sa définition.", pointsPar: 1, items: [
          { g: ["Étiquetage", "Stigmatisation", "Prophétie auto-réalisatrice", "Réinsertion"], d: ["Marque durable qui disqualifie", "Prédiction qui se réalise", "Retour dans la vie collective", "Désignation qui devient identité"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
    },
  ],
};

module.exports = U;
