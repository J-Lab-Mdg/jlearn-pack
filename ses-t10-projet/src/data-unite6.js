// ============================================================
// Unité VI — Individu et société (PE T10 — 10 heures)
// RAS 1 : Déterminer la diversité des pratiques culturelles
// RAS 2 : Identifier les principaux agents de la socialisation
// Découpage : 4 séances de cours + 1 révision + 1 sujet d'examen
// Valeurs : Respect d'autrui, Estime de soi et confiance en soi
// ============================================================

const U = {
  num: "VI",
  titre: "Individu et société",
  ras: "Déterminer la diversité des pratiques culturelles · Identifier les principaux agents de la socialisation",
  valeurs: "Respect d'autrui, Estime de soi et confiance en soi",
  duree: "10 heures",
  themes: [
    "Les pratiques culturelles et les catégories socio-professionnelles",
    "Culture de masse et modes de vie",
    "La socialisation : normes, valeurs et société",
    "Les agents de socialisation et la socialisation différentielle",
  ],
  topics: [
    // ---------------------------------------------------------
    // SÉANCE 35 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les pratiques culturelles et les catégories socio-professionnelles",
      theme: "Individu et société",
      ras: "Déterminer la diversité des pratiques culturelles",
      valeurs: "Respect d'autrui, Estime de soi et confiance en soi",
      objectif: "définir la culture et une pratique culturelle, et repérer leur diversité selon les groupes",
      supportMeta: "Documents sur des pratiques culturelles locales, enquête de classe, cahier",
      revision: [
        ["Qu'est-ce qu'un déterminant socioculturel de la consommation ?", "Un facteur lié à la place de la personne dans la société : l'âge, le genre, le milieu social, le niveau d'instruction."],
        ["Cite un exemple de consommation collective.", "Une route, une école publique ou un centre de santé."],
      ],
      mise: [
        "Toutes les familles de ta classe célèbrent-elles la même chose, de la même manière ?",
        "Non : les coutumes, les mets, les danses et les cérémonies diffèrent d'une région et d'une famille à l'autre.",
      ],
      observation: "les documents présentant des pratiques culturelles de régions différentes",
      observationSupport: "Documents et images de pratiques culturelles (musique, danse, cuisine, cérémonie), grille d'observation",
      technAna: "Enquête, étude de document et débat dirigé",
      qa: [
        ["Qu'est-ce que la culture ?", "L'ensemble des manières de vivre, de penser et de créer d'un groupe : sa langue, ses coutumes, ses croyances, ses arts, sa cuisine, ses règles de politesse."],
        ["Qu'est-ce qu'une pratique culturelle ?", "Une activité par laquelle une personne exprime ou partage sa culture : écouter de la musique, danser, cuisiner un plat, assister à une cérémonie, lire, aller au stade."],
        ["Pourquoi les pratiques culturelles diffèrent-elles d'un groupe à l'autre ?", "Parce qu'elles sont transmises : chaque groupe, chaque région et chaque génération transmet ses propres manières de faire."],
        ["Qu'est-ce qu'une catégorie socio-professionnelle ?", "Un groupe de personnes qui occupent une position proche dans l'activité économique : agriculteurs, artisans et commerçants, ouvriers, employés, cadres et professions intermédiaires, enseignants."],
        ["En quoi la catégorie socio-professionnelle influence-t-elle les pratiques culturelles ?", "Les horaires, les revenus et le niveau d'instruction différents orientent les loisirs, les lectures, les sorties et les modes de sociabilité."],
        ["Comment expliquer les différences entre régions ?", "Par l'histoire, l'environnement naturel, les activités dominantes et les traditions propres à chaque territoire."],
        ["Observer ces différences doit-il conduire à hiérarchiser les cultures ?", "Non : la diversité des pratiques est une richesse ; chaque culture a sa cohérence et sa dignité."],
      ],
      synthese: "Donc, la culture est l'ensemble des manières de vivre et de penser d'un groupe, et les pratiques culturelles en sont l'expression concrète. Elles varient selon la région, la génération, le milieu et la catégorie socio-professionnelle. Cette diversité ne justifie aucune hiérarchie : elle est une richesse à comprendre et à respecter.",
      motsCles: ["culture", "pratique culturelle", "coutume", "catégorie socio-professionnelle", "diversité", "milieu social", "respect"],
      image: { file: "u6_culture.png", legende: "Figure 9 — La diversité des pratiques culturelles selon les groupes." },
      contenu: [
        {
          sousTitre: "1. La culture",
          texte: "La culture n'est pas seulement ce qui est exposé dans un musée : c'est tout ce qu'un groupe transmet et partage pour vivre ensemble.",
          liste: [
            "La langue et les manières de saluer.",
            "Les coutumes et les cérémonies : mariage, retournement des morts, circoncision.",
            "La cuisine et les manières de recevoir.",
            "La musique, la danse, l'artisanat et les récits.",
            "Les croyances et les règles de respect envers les aînés.",
          ],
        },
        {
          sousTitre: "2. Une pratique culturelle",
          texte: "Une pratique culturelle est une activité concrète par laquelle une personne participe à la vie culturelle de son groupe.",
          liste: [
            "Pratiques domestiques : cuisine, chants, jeux, veillées familiales.",
            "Pratiques collectives : fêtes de village, matchs de football, chorales, marchés.",
            "Pratiques de sortie : cinéma, concert, stade, bibliothèque.",
            "Pratiques médiatiques : radio, télévision, réseaux sociaux, musique en ligne.",
          ],
        },
        {
          sousTitre: "3. Les catégories socio-professionnelles",
          texte: "Les sociologues regroupent les individus selon leur position dans l'activité économique : c'est la catégorie socio-professionnelle.",
          liste: [
            "Agriculteurs, éleveurs et pêcheurs.",
            "Artisans, commerçants et chefs d'entreprise.",
            "Ouvriers et employés.",
            "Professions intermédiaires : instituteurs, infirmiers, techniciens.",
            "Cadres et professions libérales : médecins, ingénieurs, magistrats.",
          ],
        },
        {
          sousTitre: "4. Pourquoi les pratiques varient-elles ?",
          texte: "Trois grands facteurs expliquent les écarts observés entre les groupes.",
          liste: [
            "Le revenu et le temps disponible : certaines sorties coûtent cher ou demandent du temps libre.",
            "Le niveau d'instruction : il ouvre l'accès à la lecture, aux médias écrits et à certaines formes culturelles.",
            "Le milieu et la région : les traditions locales, l'offre culturelle disponible et l'histoire du territoire.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Une même journée de fête dans trois milieux :",
          liste: [
            "Dans un village de la côte : repas collectif de poisson, danse traditionnelle, visites entre familles.",
            "Dans un quartier populaire de la capitale : match de football, musique amplifiée, sortie en groupe.",
            "Dans une famille de cadres : sortie au concert ou au cinéma, lecture, repas au restaurant.",
            "Trois manières de célébrer, trois pratiques culturelles également légitimes.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La culture d'un groupe, c'est…", opts: ["l'ensemble de ses manières de vivre et de penser", "uniquement ses musées", "son revenu"], ok: 0, expl: "Langue, coutumes, cuisine, croyances et arts en font partie." },
          { q: "Une pratique culturelle est…", opts: ["une activité qui exprime une culture", "un impôt", "un salaire"], ok: 0, expl: "Danser, cuisiner, lire ou assister à une cérémonie en sont des exemples." },
          { q: "Une catégorie socio-professionnelle regroupe des personnes selon…", opts: ["leur position dans l'activité économique", "leur taille", "leur langue"], ok: 0, expl: "Agriculteurs, ouvriers, employés, cadres sont des catégories." },
          { q: "Observer des pratiques culturelles différentes doit conduire à…", opts: ["les respecter", "les classer du meilleur au pire", "les interdire"], ok: 0, expl: "La diversité culturelle est une richesse, pas une hiérarchie." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La culture se limite aux œuvres d'art.", rep: false, expl: "Elle inclut la langue, la cuisine, les coutumes et les règles de vie." },
          { txt: "Les pratiques culturelles se transmettent au sein d'un groupe.", rep: true, expl: "C'est la transmission qui explique leur diversité." },
          { txt: "Le niveau d'instruction influence les pratiques culturelles.", rep: true, expl: "Il ouvre l'accès à la lecture et à certaines formes culturelles." },
          { txt: "Une catégorie socio-professionnelle n'a aucun lien avec les loisirs.", rep: false, expl: "Revenu, temps libre et réseaux de sociabilité orientent les loisirs." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Donne la définition de la culture.", r: "La culture est l'ensemble des manières de vivre, de penser et de créer qu'un groupe transmet et partage." },
          { q: "Donne la définition d'une pratique culturelle et cite un exemple.", r: "Une pratique culturelle est une activité par laquelle on exprime ou partage sa culture, comme cuisiner un plat régional ou participer à une fête de village." },
          { q: "Cite trois catégories socio-professionnelles.", r: "Les agriculteurs, les ouvriers et les cadres (ou les artisans, les employés, les professions intermédiaires)." },
          { q: "Cite deux facteurs qui expliquent les différences de pratiques culturelles entre groupes.", r: "Le niveau de revenu et de temps libre, et le niveau d'instruction, auxquels s'ajoute l'appartenance régionale." },
        ]},
        { type: "appariement", consigne: "Relie chaque pratique au facteur qui l'explique le mieux.", pointsPar: 1, items: [
          { g: ["Aller au concert en ville", "Cuisiner un plat de sa région", "Assister au match du quartier", "Lire la presse chaque jour"], d: ["Appartenance régionale", "Offre culturelle de proximité", "Niveau d'instruction", "Offre culturelle urbaine"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 36 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Culture de masse et modes de vie",
      theme: "Individu et société",
      ras: "Déterminer la diversité des pratiques culturelles",
      valeurs: "Respect d'autrui, Estime de soi et confiance en soi",
      objectif: "définir la culture de masse et expliquer comment elle transforme les modes de vie",
      supportMeta: "Documents sur les médias, enquête de classe, cahier",
      revision: [
        ["Qu'est-ce qu'une pratique culturelle ?", "Une activité par laquelle une personne exprime ou partage sa culture."],
        ["Cite une catégorie socio-professionnelle.", "Les agriculteurs, les artisans, les ouvriers, les employés ou les cadres."],
      ],
      mise: [
        "Comment les jeunes d'une ville et ceux d'un village éloigné peuvent-ils connaître la même chanson ?",
        "Par la radio, la télévision et le téléphone : les médias diffusent les mêmes contenus partout.",
      ],
      observation: "les documents montrant la diffusion d'un même contenu par les médias",
      observationSupport: "Documents sur la radio, la télévision, le téléphone et les réseaux sociaux, grille d'enquête",
      technAna: "Étude de document, enquête de classe et débat dirigé",
      qa: [
        ["Qu'est-ce que la culture de masse ?", "Un ensemble de productions culturelles — chansons, films, séries, émissions, jeux — diffusées à un très grand nombre de personnes par les médias et les industries culturelles."],
        ["Qu'appelle-t-on un média de masse ?", "Un moyen de diffusion qui s'adresse à un public très large en même temps : la radio, la télévision, la presse à grand tirage, internet et les réseaux sociaux."],
        ["Qu'est-ce qu'un mode de vie ?", "La manière habituelle dont un groupe organise sa vie quotidienne : ses horaires, ses repas, ses loisirs, ses sociabilités."],
        ["Comment la culture de masse transforme-t-elle les modes de vie ?", "Elle diffuse des références communes — chansons, expressions, vêtements — qui rapprochent les manières de vivre, tout en introduisant de nouvelles attentes et de nouvelles consommations."],
        ["Quels sont les effets positifs ?", "L'accès à des connaissances et à des œuvres pour un public très large, le partage de références communes, l'ouverture à d'autres cultures."],
        ["Quels sont les limites souvent relevées ?", "L'uniformisation des goûts, la place de la publicité, la marchandisation de la culture et une consommation passive."],
        ["La culture de masse remplace-t-elle les cultures locales ?", "Non nécessairement : elle se mélange à elles ; beaucoup de productions locales utilisent aujourd'hui les médias de masse pour se diffuser."],
      ],
      synthese: "Donc, la culture de masse est l'ensemble des contenus diffusés à un très large public par les médias. Elle rapproche les modes de vie en créant des références communes, elle démocratise l'accès aux œuvres, mais elle peut aussi uniformiser les goûts et transformer la culture en produit de consommation. Les cultures locales ne disparaissent pas : elles se recomposent avec elle.",
      motsCles: ["culture de masse", "médias", "industrie culturelle", "mode de vie", "uniformisation", "références communes"],
      contenu: [
        {
          sousTitre: "1. La culture de masse",
          texte: "La culture de masse est née avec les techniques qui permettent de diffuser le même contenu à des millions de personnes en même temps.",
          liste: [
            "La radio et la télévision diffusent musique, information et séries.",
            "Le cinéma et la vidéo touchent un public très large.",
            "Internet et les réseaux sociaux permettent de partager instantanément une chanson ou une vidéo.",
            "Les industries culturelles produisent ces contenus pour un marché de grande taille.",
          ],
        },
        {
          sousTitre: "2. Les médias de masse",
          texte: "Un média de masse s'adresse à un public nombreux, dispersé et anonyme, contrairement à une conversation ou à un spectacle de village.",
          liste: [
            "Radio : la plus répandue, y compris dans les zones rurales.",
            "Télévision : images et émissions suivies par des millions de foyers.",
            "Presse : journaux et magazines diffusés à grande échelle.",
            "Numérique : téléphone portable, plateformes vidéo, réseaux sociaux.",
          ],
        },
        {
          sousTitre: "3. Les modes de vie",
          texte: "Le mode de vie décrit la manière concrète dont les gens vivent au quotidien dans un groupe donné.",
          liste: [
            "En ville : horaires de bureau, repas rapides, transports, écrans le soir.",
            "En zone rurale : rythme des travaux agricoles, repas familiaux, veillées.",
            "Chez les jeunes : téléphone, musique, réseaux sociaux, sport.",
          ],
        },
        {
          sousTitre: "4. Les effets de la culture de masse",
          texte: "Ses effets sont ambivalents : elle rapproche, mais elle uniformise aussi.",
          liste: [
            "Effets positifs : accès facilité à l'information et aux œuvres, références partagées, découverte d'autres cultures.",
            "Effets discutés : uniformisation des goûts, standardisation des contenus, importance de la publicité.",
            "Effets sur la consommation : nouveaux besoins d'équipement et de loisirs, effet d'imitation renforcé.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Une chanson diffusée par la radio et partagée sur les téléphones :",
          liste: [
            "Elle est écoutée le même jour dans une capitale régionale et dans un village éloigné.",
            "Les jeunes adoptent les mêmes pas de danse : référence commune, sentiment d'appartenance.",
            "Dans le même temps, des groupes locaux enregistrent leurs propres morceaux et les diffusent sur les mêmes canaux : la culture locale se sert de la culture de masse.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La culture de masse est diffusée par…", opts: ["les médias à un très large public", "un seul lecteur", "le bouche-à-oreille uniquement"], ok: 0, expl: "Radio, télévision, presse et numérique touchent des millions de personnes." },
          { q: "Un média de masse s'adresse à un public…", opts: ["nombreux et dispersé", "d'une seule famille", "d'un seul village"], ok: 0, expl: "C'est ce qui le distingue d'une conversation ou d'un spectacle local." },
          { q: "Un mode de vie décrit…", opts: ["la manière habituelle de vivre au quotidien", "un salaire", "un diplôme"], ok: 0, expl: "Horaires, repas, loisirs et sociabilités en font partie." },
          { q: "Parmi les limites de la culture de masse, on relève…", opts: ["l'uniformisation des goûts", "l'absence de public", "l'interdiction des médias"], ok: 0, expl: "La standardisation des contenus est souvent critiquée." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La culture de masse supprime forcément les cultures locales.", rep: false, expl: "Les cultures locales se recomposent et utilisent souvent les mêmes canaux de diffusion." },
          { txt: "La radio reste un média très présent dans les zones rurales.", rep: true, expl: "Elle ne demande ni électricité continue ni connexion internet." },
          { txt: "La culture de masse crée des références communes entre des personnes éloignées.", rep: true, expl: "C'est l'un de ses principaux effets sociaux." },
          { txt: "La publicité est absente des médias de masse.", rep: false, expl: "Elle y occupe une place importante et influence la consommation." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Donne la définition de la culture de masse.", r: "La culture de masse est l'ensemble des productions culturelles diffusées à un très grand nombre de personnes par les médias et les industries culturelles." },
          { q: "Cite trois médias de masse.", r: "La radio, la télévision et internet (ou la presse à grand tirage)." },
          { q: "Cite un effet positif et une limite de la culture de masse.", r: "Effet positif : l'accès facilité aux œuvres et à l'information ; limite : l'uniformisation des goûts et la marchandisation de la culture." },
          { q: "Qu'est-ce qu'un mode de vie ?", r: "Un mode de vie est la manière habituelle dont un groupe organise sa vie quotidienne : horaires, repas, loisirs et sociabilités." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["médias", "masse", "mode de vie", "uniformisation", "références"], items: [
          { phrase: "La radio, la télévision et internet sont des _________ de masse.", mot: "médias" },
          { phrase: "Une culture diffusée à des millions de personnes est une culture de _________.", mot: "masse" },
          { phrase: "Les horaires, les repas et les loisirs forment un _________.", mot: "mode de vie" },
          { phrase: "Le risque de voir les goûts se ressembler est l'_________.", mot: "uniformisation" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 37 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La socialisation : normes, valeurs et société",
      theme: "Individu et société",
      ras: "Identifier les principaux agents de la socialisation",
      valeurs: "Respect d'autrui, Estime de soi et confiance en soi",
      objectif: "définir la socialisation, la norme, la valeur et la société, et expliquer comment un individu devient un acteur social",
      supportMeta: "Schéma de la socialisation, documents, cahier",
      revision: [
        ["Qu'est-ce que la culture de masse ?", "Un ensemble de contenus culturels diffusés à un très large public par les médias."],
        ["Qu'est-ce qu'un mode de vie ?", "La manière habituelle dont un groupe organise sa vie quotidienne."],
      ],
      mise: [
        "Un enfant sait-il dire bonjour, partager et attendre son tour sans qu'on le lui apprenne ?",
        "Non : il apprend ces manières de faire auprès de sa famille, de l'école et de son entourage.",
      ],
      observation: "le schéma de la socialisation affiché au tableau",
      observationSupport: "Schéma de la socialisation (individu → normes et valeurs → société), affiché ou distribué",
      technAna: "Étude de cas, questionnement dirigé et débat",
      qa: [
        ["Qu'est-ce que la socialisation ?", "Le processus par lequel un individu apprend, tout au long de sa vie, les manières d'agir, de penser et de parler de la société où il vit."],
        ["Qu'est-ce qu'une norme ?", "Une règle de conduite, écrite ou non, que le groupe attend de ses membres : saluer les aînés, arriver à l'heure, respecter le tour de parole."],
        ["Qu'est-ce qu'une valeur ?", "Une idée que le groupe juge importante et qui sert de repère : le respect des aînés, la solidarité familiale, la vérité, l'effort."],
        ["Qu'est-ce que la société ?", "Un ensemble de personnes qui vivent ensemble sur un territoire, partagent des institutions et obéissent à des règles communes."],
        ["Quelle différence y a-t-il entre norme et valeur ?", "La valeur est le principe que l'on juge important ; la norme est la règle concrète qui traduit ce principe dans la vie quotidienne."],
        ["Comment un individu devient-il un acteur social ?", "En intériorisant les normes et les valeurs, puis en les appliquant et en les transformant par ses propres choix."],
        ["La socialisation s'arrête-t-elle à l'enfance ?", "Non : elle continue à l'adolescence, au travail, dans le quartier et tout au long de la vie."],
      ],
      synthese: "Donc, la socialisation est le processus par lequel chacun apprend à vivre en société. Elle transmet des normes, c'est-à-dire des règles de conduite, et des valeurs, c'est-à-dire des principes tenus pour importants. En les intériorisant, l'individu devient un acteur social, capable d'agir dans la société et de la faire évoluer.",
      motsCles: ["socialisation", "norme", "valeur", "société", "intériorisation", "acteur social", "règle"],
      image: { file: "u6_socialisation.png", legende: "Figure 10 — La socialisation : de l'individu à l'acteur social." },
      contenu: [
        {
          sousTitre: "1. La socialisation",
          texte: "La socialisation est l'apprentissage de la vie en société. Elle ne se limite pas à l'enfance : elle se poursuit à chaque fois que l'on change de groupe.",
          liste: [
            "L'enfant apprend le langage, la politesse et les interdits fondamentaux.",
            "L'adolescent apprend les codes de son groupe d'amis.",
            "L'adulte apprend les règles de son métier et de son entreprise.",
            "Chacun continue d'apprendre en changeant de quartier, d'emploi ou de pays.",
          ],
        },
        {
          sousTitre: "2. Les normes",
          texte: "Une norme est une règle de conduite, formelle ou informelle, que le groupe attend de ses membres.",
          liste: [
            "Normes formelles : la loi, le règlement de l'école, le code de la route.",
            "Normes informelles : saluer, céder sa place, ne pas couper la parole.",
            "Le non-respect d'une norme expose à une sanction : réprobation, moquerie, exclusion ou peine prévue par la loi.",
          ],
        },
        {
          sousTitre: "3. Les valeurs",
          texte: "Une valeur est ce qu'un groupe juge important et désirable. Les valeurs servent de repères pour juger les conduites.",
          liste: [
            "Le respect des aînés et de la parole donnée.",
            "La solidarité familiale et l'entraide entre voisins.",
            "L'effort, la persévérance et l'honnêteté.",
            "La vérité, la justice et le respect d'autrui.",
          ],
        },
        {
          sousTitre: "4. De l'individu à l'acteur social",
          texte: "En intériorisant les normes et les valeurs, l'individu devient capable d'agir de manière prévisible et coopérative : il devient un acteur social.",
          liste: [
            "Il comprend ce que les autres attendent de lui.",
            "Il sait coopérer : travail de groupe, entraide, respect des tours de rôle.",
            "Il peut aussi discuter une règle, proposer un changement et faire évoluer son groupe.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Une même valeur, trois normes :",
          liste: [
            "Valeur : le respect des aînés.",
            "Norme familiale : saluer les aînés et leur céder la parole.",
            "Norme scolaire : se lever quand l'enseignant entre dans la classe.",
            "Norme villageoise : participer aux travaux collectifs décidés par les aînés.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La socialisation est…", opts: ["l'apprentissage de la vie en société", "un sport", "un impôt"], ok: 0, expl: "Elle transmet les manières d'agir et de penser du groupe." },
          { q: "Une norme est…", opts: ["une règle de conduite attendue par le groupe", "un prix", "un métier"], ok: 0, expl: "Elle peut être écrite ou implicite." },
          { q: "Une valeur est…", opts: ["ce qu'un groupe juge important", "un salaire", "un diplôme"], ok: 0, expl: "Elle sert de repère pour juger les conduites." },
          { q: "Un acteur social est un individu qui…", opts: ["a intériorisé les règles et peut agir dans la société", "vit seul", "refuse toute règle"], ok: 0, expl: "Il sait coopérer et peut aussi faire évoluer les règles." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La socialisation s'arrête à la fin de l'enfance.", rep: false, expl: "Elle continue à l'adolescence, au travail et tout au long de la vie." },
          { txt: "Toutes les normes sont écrites dans la loi.", rep: false, expl: "Beaucoup de normes sont implicites : saluer, ne pas couper la parole." },
          { txt: "Une valeur peut se traduire par plusieurs normes différentes.", rep: true, expl: "Le respect des aînés s'exprime autrement en famille, à l'école ou au village." },
          { txt: "Un individu socialisé peut contribuer à faire évoluer les règles.", rep: true, expl: "Il n'est pas seulement soumis aux normes : il peut les discuter." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Donne la définition de la socialisation.", r: "La socialisation est le processus par lequel un individu apprend, tout au long de sa vie, les manières d'agir, de penser et de parler de sa société." },
          { q: "Quelle différence y a-t-il entre une norme et une valeur ?", r: "La valeur est le principe jugé important par le groupe, tandis que la norme est la règle concrète qui traduit ce principe dans la vie quotidienne." },
          { q: "Donne un exemple de valeur et la norme qui la traduit.", r: "Le respect des aînés est une valeur ; saluer un aîné et lui céder la parole est la norme qui la traduit." },
          { q: "Pourquoi dit-on que la socialisation continue à l'âge adulte ?", r: "Parce que chaque changement de groupe — nouvel emploi, nouveau quartier — demande d'apprendre de nouvelles règles." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "L'apprentissage de la vie en société s'appelle la", suite: "socialisation" },
          { debut: "Une règle de conduite attendue par le groupe est une", suite: "norme" },
          { debut: "Ce qu'un groupe juge important et désirable est une", suite: "valeur" },
          { debut: "Un individu qui a intériorisé les règles devient un acteur", suite: "social" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 38 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les agents de socialisation et la socialisation différentielle",
      theme: "Individu et société",
      ras: "Identifier les principaux agents de la socialisation",
      valeurs: "Respect d'autrui, Estime de soi et confiance en soi",
      objectif: "identifier les principaux agents de socialisation et expliquer la socialisation différentielle",
      supportMeta: "Schéma des agents de socialisation, enquête de classe, cahier",
      revision: [
        ["Qu'est-ce que la socialisation ?", "Le processus par lequel un individu apprend les manières d'agir et de penser de sa société."],
        ["Quelle différence y a-t-il entre une norme et une valeur ?", "La valeur est le principe important ; la norme est la règle concrète qui le traduit."],
      ],
      mise: [
        "Qui t'a appris le plus de choses : ta famille, l'école ou tes amis ?",
        "Chacun a appris des choses différentes de chacun : la famille, l'école et les amis n'enseignent pas la même chose.",
      ],
      observation: "le schéma des agents de socialisation affiché au tableau",
      observationSupport: "Schéma des agents de socialisation (famille, école, pairs, institutions religieuses, médias), affiché ou distribué",
      technAna: "Étude de cas, enquête de classe et débat dirigé",
      qa: [
        ["Qu'appelle-t-on un agent de socialisation ?", "Un groupe ou une institution qui transmet des normes, des valeurs et des manières de faire à un individu."],
        ["Quel est le rôle de la famille ?", "Elle assure la première socialisation : le langage, la politesse, les interdits fondamentaux, les croyances et les habitudes de vie."],
        ["Quel est le rôle de l'école ?", "Elle transmet des savoirs et des règles collectives : ponctualité, respect du tour de parole, travail en groupe, respect des camarades."],
        ["Quel est le rôle des institutions religieuses ?", "Elles transmettent des croyances, des pratiques et des repères moraux partagés par une communauté."],
        ["Quel rôle jouent les pairs et les médias ?", "Les amis transmettent les codes du groupe d'âge ; les médias diffusent des modèles, des références et des comportements à grande échelle."],
        ["Qu'est-ce que la socialisation différentielle ?", "Le fait que la socialisation varie selon le groupe social, la région et le genre : on n'apprend pas exactement les mêmes manières d'agir partout."],
        ["Comment la socialisation varie-t-elle selon le genre ?", "Les tâches, les comportements attendus et les activités valorisées peuvent différer selon que l'on est une fille ou un garçon, selon les milieux et les époques."],
        ["Ces différences sont-elles définitives ?", "Non : la socialisation continue toute la vie, et chacun peut remettre en question ce qu'il a appris."],
      ],
      synthese: "Donc, plusieurs agents assurent la socialisation : la famille d'abord, puis l'école, les pairs, les institutions religieuses et les médias. Comme ils ne transmettent pas les mêmes contenus selon le milieu, la région et le genre, la socialisation est différentielle : elle produit des manières d'agir et de penser variées à l'intérieur d'une même société.",
      motsCles: ["agents de socialisation", "famille", "école", "pairs", "institutions religieuses", "socialisation différentielle", "genre"],
      image: { file: "u6_agents.png", legende: "Figure 11 — Les principaux agents de la socialisation." },
      contenu: [
        {
          sousTitre: "1. La famille, premier agent de socialisation",
          texte: "La famille transmet les premiers apprentissages, avant même l'école. Elle façonne les habitudes durables.",
          liste: [
            "Le langage et les manières de saluer.",
            "Les règles de politesse et le respect des aînés.",
            "Les habitudes alimentaires et les rythmes de la journée.",
            "Les croyances et les pratiques propres au foyer.",
          ],
        },
        {
          sousTitre: "2. L'école",
          texte: "L'école complète la famille : elle place l'enfant dans un groupe plus large et lui apprend des règles impersonnelles.",
          liste: [
            "Les savoirs scolaires : lire, écrire, compter, raisonner.",
            "Les règles collectives : horaires, ponctualité, travail en groupe.",
            "Le respect des autres élèves et des enseignants.",
            "La préparation à la vie citoyenne.",
          ],
        },
        {
          sousTitre: "3. Les pairs, les institutions religieuses et les médias",
          texte: "D'autres agents interviennent, avec des contenus différents.",
          liste: [
            "Les pairs : les amis et le groupe d'âge transmettent les codes, les goûts et les manières d'être ensemble.",
            "Les institutions religieuses : elles transmettent des croyances et des repères moraux.",
            "Les médias : ils diffusent des modèles et des références à grande échelle.",
            "Le quartier et le village : ils transmettent les solidarités locales et les coutumes.",
          ],
        },
        {
          sousTitre: "4. La socialisation différentielle",
          texte: "Parce que les agents ne disent pas la même chose partout, la socialisation produit des différences.",
          liste: [
            "Selon le groupe social : les attentes ne sont pas les mêmes dans un milieu d'agriculteurs et dans un milieu de cadres.",
            "Selon la région : les coutumes, les langues et les rythmes de vie varient d'une province à l'autre.",
            "Selon le genre : les tâches et les comportements valorisés peuvent différer pour les filles et les garçons.",
            "Ces différences ne sont pas figées : la socialisation continue à l'âge adulte.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Deux élèves d'une même classe de T10 :",
          liste: [
            "Le premier a grandi dans un village de pêcheurs : il a appris les travaux de la mer, l'entraide entre familles et le respect des aînés du village.",
            "La seconde a grandi dans un quartier de la capitale : elle a appris les codes de l'école, la vie associative et l'usage des médias numériques.",
            "Les deux sont également socialisés, mais par des contenus différents : c'est la socialisation différentielle.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le premier agent de socialisation est…", opts: ["la famille", "l'entreprise", "le marché"], ok: 0, expl: "Elle transmet le langage, la politesse et les interdits fondamentaux." },
          { q: "L'école transmet surtout…", opts: ["des savoirs et des règles collectives", "des croyances familiales", "des prix"], ok: 0, expl: "Ponctualité, travail en groupe et respect des autres y sont appris." },
          { q: "La socialisation différentielle désigne…", opts: ["des socialisations différentes selon le groupe, la région et le genre", "une socialisation identique pour tous", "l'absence de socialisation"], ok: 0, expl: "Les contenus transmis varient selon les milieux." },
          { q: "Parmi les agents de socialisation, on compte aussi…", opts: ["les pairs et les médias", "uniquement l'école", "uniquement la famille"], ok: 0, expl: "Les amis, les institutions religieuses et les médias en font partie." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La socialisation est assurée par un seul agent.", rep: false, expl: "Famille, école, pairs, institutions religieuses et médias y participent." },
          { txt: "La famille transmet le langage et la politesse.", rep: true, expl: "C'est le premier apprentissage de la vie sociale." },
          { txt: "La socialisation peut varier selon la région.", rep: true, expl: "Les coutumes et les rythmes de vie diffèrent d'une province à l'autre." },
          { txt: "Ce qui est appris dans l'enfance ne peut plus jamais évoluer.", rep: false, expl: "La socialisation continue toute la vie et chacun peut remettre en question ses apprentissages." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite quatre agents de socialisation.", r: "La famille, l'école, les pairs ou amis, et les institutions religieuses (auxquels s'ajoutent les médias)." },
          { q: "Quel est le rôle de l'école dans la socialisation ?", r: "L'école transmet des savoirs et des règles collectives : ponctualité, respect du tour de parole et travail en groupe." },
          { q: "Qu'est-ce que la socialisation différentielle ?", r: "C'est le fait que la socialisation varie selon le groupe social, la région et le genre, produisant des manières d'agir différentes." },
          { q: "Montre, par un exemple, que la socialisation varie selon le milieu.", r: "Un enfant de village de pêcheurs apprend les travaux de la mer, alors qu'un enfant de la capitale apprend les codes de l'école et des médias numériques." },
        ]},
        { type: "appariement", consigne: "Relie chaque agent à ce qu'il transmet principalement.", pointsPar: 1, items: [
          { g: ["La famille", "L'école", "Les pairs", "Les institutions religieuses"], d: ["Les savoirs et les règles collectives", "Les croyances et les repères moraux", "Les codes du groupe d'âge", "Le langage et la politesse"], pairs: [[0, 3], [1, 0], [2, 2], [3, 1]] },
        ]},
      ],
    },
  ],
};

module.exports = U;
