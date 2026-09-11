// ============================================================
// Unité III — Travail et emploi (PE T12 série OSE — 30 heures)
// RAS 1 : Estimer les éléments dont dépend le niveau d'emploi dans une économie
// RAS 2 : Evaluer les différentes manières pour organiser le travail
// Découpage : 14 séances de cours + 1 révision + 1 sujet d'examen
// Valeurs : Responsabilité, autonomie
// ============================================================

const U = {
  num: "III",
  titre: "Travail et emploi",
  ras: "Estimer les éléments dont dépend le niveau d'emploi dans une économie · Evaluer les différentes manières pour organiser le travail",
  valeurs: "Responsabilité, autonomie",
  duree: "30 heures",
  themes: [
    "Croissance, productivité et emploi",
    "Le progrès technique, destructeur ou créateur d'emplois ?",
    "Le marché du travail : le modèle standard",
    "Les limites du modèle standard",
    "Le chômage keynésien",
    "Le chômage classique",
    "Le chômage structurel",
    "Les conséquences du chômage et du sous-emploi",
    "Les politiques de relance de la demande",
    "Les politiques d'offre et de soutien à l'emploi",
    "Formation, insertion et reconversion",
    "L'organisation scientifique du travail : le taylorisme",
    "Le fordisme : intérêts et limites",
    "Les nouvelles formes d'organisation du travail",
  ],
  topics: [
    // ---------------------------------------------------------
    // SÉANCE 35 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Croissance, productivité et emploi",
      theme: "Travail et emploi",
      ras: "Estimer les éléments dont dépend le niveau d'emploi dans une économie",
      valeurs: "Responsabilité, autonomie",
      objectif: "relier croissance de la production, productivité et niveau d'emploi",
      supportMeta: "Tableaux statistiques, documents, cahier, calculatrice",
      revision: [
        ["Qu'est-ce que la productivité du travail ?", "La quantité produite rapportée au travail utilisé, le plus souvent par heure travaillée."],
        ["Qu'est-ce que la croissance économique ?", "L'augmentation durable de la production d'un pays, mesurée par la hausse du PIB en volume."],
      ],
      mise: [
        "Une entreprise double sa production sans changer de méthode. Va-t-elle embaucher ?",
        "Oui, si la productivité reste la même : produire deux fois plus demande deux fois plus de bras. Mais si une machine fait le travail, l'emploi peut stagner.",
      ],
      observation: "le tableau comparant croissance de la production et croissance de la productivité",
      observationSupport: "Tableau comparant production, productivité et emploi affiché ou distribué",
      technAna: "Lecture de tableau et calcul dirigé",
      qa: [
        ["Quel lien relie production, productivité et emploi ?", "L'emploi dépend de la quantité produite et de la productivité : emploi = production ÷ productivité moyenne par tête."],
        ["Quand l'emploi augmente-t-il ?", "Quand la production croît plus vite que la productivité : il faut alors davantage de travailleurs pour produire davantage."],
        ["Quand l'emploi stagne-t-il ?", "Quand la productivité progresse au même rythme que la production : la même équipe suffit à produire plus."],
        ["Peut-on produire plus en employant moins ?", "Oui, si la productivité progresse plus vite que la production : les gains d'efficacité remplacent des postes."],
        ["Comment calcule-t-on l'évolution de l'emploi ?", "En comparant les taux : si la production croît de 4 % et la productivité de 1 %, l'emploi progresse d'environ 3 %."],
        ["Qu'est-ce que l'élasticité emploi-croissance ?", "Le rapport entre la hausse de l'emploi et la hausse de la production : il mesure la capacité de la croissance à créer des emplois."],
        ["Pourquoi cette élasticité varie-t-elle selon les pays ?", "Selon l'intensité de main-d'œuvre des secteurs qui croissent et selon le rythme du progrès technique."],
        ["Pourquoi la croissance reste-t-elle la condition principale ?", "Parce que sans hausse de la production, les gains de productivité réduisent mécaniquement le nombre de postes nécessaires."],
      ],
      synthese: "Donc, le niveau de l'emploi dépend de deux grandeurs : la production réalisée et la productivité du travail. L'emploi augmente lorsque la production croît plus vite que la productivité ; il stagne ou recule lorsque les gains de productivité compensent ou dépassent la hausse de la production.",
      motsCles: ["emploi", "production", "productivité", "croissance", "élasticité emploi-croissance", "heures travaillées", "gain de productivité", "intensité de main-d'œuvre"],
      image: { file: "t12_u3_croissance_emploi.png", legende: "Figure 31 — Croissance de la production, productivité et emploi." },
      contenu: [
        {
          sousTitre: "1. Une relation à trois termes",
          texte: "L'emploi se déduit de la production et de la productivité : produire davantage demande plus de travail, à moins que chaque travailleur ne produise davantage.",
          liste: [
            "Production : la quantité de biens et de services créés dans le pays.",
            "Productivité : la production rapportée aux moyens utilisés, le plus souvent par heure travaillée.",
            "Emploi : le nombre de personnes occupées, ou le nombre d'heures travaillées.",
          ],
        },
        {
          sousTitre: "2. La règle des trois cas",
          texte: "Comparer les rythmes de croissance suffit à prévoir le sens de l'évolution de l'emploi.",
          liste: [
            "Production + 4 %, productivité + 1 % : l'emploi augmente d'environ 3 %.",
            "Production + 3 %, productivité + 3 % : l'emploi reste stable.",
            "Production + 2 %, productivité + 4 % : l'emploi recule.",
          ],
        },
        {
          sousTitre: "3. L'élasticité emploi-croissance",
          texte: "Cet indicateur résume la capacité de la croissance à créer des emplois.",
          liste: [
            "Il rapporte la variation de l'emploi à la variation de la production.",
            "Une élasticité faible signifie que la croissance crée peu d'emplois : la productivité absorbe l'essentiel du gain.",
            "Une élasticité élevée traduit une croissance riche en main-d'œuvre.",
          ],
        },
        {
          sousTitre: "4. Ce qui fait varier le résultat",
          texte: "Le même taux de croissance peut créer beaucoup ou peu d'emplois selon le contexte.",
          liste: [
            "Secteurs concernés : l'artisanat et les services emploient davantage par unité produite que l'industrie lourde.",
            "Rythme du progrès technique : des gains rapides remplacent plus vite les postes.",
            "Durée du travail : une baisse du temps de travail répartit le travail sur davantage de personnes.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "L'emploi augmente quand…", opts: ["la production croît plus vite que la productivité", "la productivité croît plus vite que la production", "les salaires baissent"], ok: 0, expl: "Il faut alors embaucher." },
          { q: "Production + 4 % et productivité + 1 % donnent un emploi qui…", opts: ["progresse d'environ 3 %", "recule de 3 %", "reste stable"], ok: 0, expl: "La différence des deux taux donne l'évolution." },
          { q: "L'élasticité emploi-croissance mesure…", opts: ["la capacité de la croissance à créer des emplois", "le niveau des salaires", "le nombre d'heures par semaine"], ok: 0, expl: "Elle rapporte emploi et production." },
          { q: "Un gain de productivité rapide tend à…", opts: ["remplacer des postes plus vite", "embaucher automatiquement", "augmenter les prix"], ok: 0, expl: "La même production demande moins de travail." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une hausse de la productivité réduit toujours l'emploi.", rep: false, expl: "Elle ne le réduit que si elle dépasse la croissance de la production." },
          { txt: "Une baisse de la durée du travail peut répartir le travail sur davantage de personnes.", rep: true, expl: "À production égale, il faut plus de travailleurs." },
          { txt: "Tous les secteurs créent autant d'emplois par unité produite.", rep: false, expl: "L'intensité de main-d'œuvre varie fortement selon les activités." },
          { txt: "Sans croissance de la production, les gains de productivité réduisent l'emploi.", rep: true, expl: "La même production demande moins de travail." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Quelle relation relie production, productivité et emploi ?", r: "L'emploi dépend de la production et de la productivité : il augmente quand la production croît plus vite que la productivité." },
          { q: "Production + 5 %, productivité + 2 % : que devient l'emploi ?", r: "L'emploi progresse d'environ 3 %, puisque la production croît plus vite que la productivité." },
          { q: "Qu'est-ce que l'élasticité emploi-croissance ?", r: "C'est le rapport entre la variation de l'emploi et celle de la production : il mesure la capacité de la croissance à créer des emplois." },
          { q: "Cite deux facteurs qui font varier le nombre d'emplois créés pour un même taux de croissance.", r: "Les secteurs concernés, certains étant plus intenses en main-d'œuvre, et le rythme du progrès technique." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "La production rapportée aux moyens utilisés est la", suite: "productivité" },
          { debut: "L'emploi augmente si la production croît plus vite que la", suite: "productivité" },
          { debut: "Le rapport entre variation de l'emploi et variation de la production est l'", suite: "élasticité" },
          { debut: "Un secteur qui emploie beaucoup de travailleurs par unité produite est intense en", suite: "main-d'œuvre" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 36 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le progrès technique, destructeur ou créateur d'emplois ?",
      theme: "Travail et emploi",
      ras: "Estimer les éléments dont dépend le niveau d'emploi dans une économie",
      valeurs: "Responsabilité, autonomie",
      objectif: "exposer les effets du progrès technique sur l'emploi et les mécanismes de compensation",
      supportMeta: "Documents, exemples de métiers, cahier",
      revision: [
        ["Quand l'emploi augmente-t-il ?", "Quand la production croît plus vite que la productivité du travail."],
        ["Qu'est-ce que l'élasticité emploi-croissance ?", "Le rapport entre la variation de l'emploi et celle de la production."],
      ],
      mise: [
        "L'arrivée des distributeurs automatiques a-t-elle supprimé du travail ?",
        "Elle a supprimé des guichetiers, mais créé des métiers de maintenance, de logistique et de conception : les deux mouvements coexistent.",
      ],
      observation: "la liste des métiers disparus et des métiers apparus",
      observationSupport: "Documents présentant des métiers disparus et des métiers nouveaux",
      technAna: "Étude de documents et débat dirigé",
      qa: [
        ["Quels sont les trois effets du progrès technique sur l'emploi ?", "Un effet de destruction des postes, un effet de compensation et un effet de création de métiers nouveaux."],
        ["Qu'est-ce que l'effet de destruction ?", "Des tâches et des postes disparaissent, remplacés par des machines ou par un procédé plus efficace."],
        ["Quels sont les canaux de compensation ?", "La baisse des prix, la hausse du pouvoir d'achat, la fabrication des nouveaux équipements et l'apparition de produits nouveaux."],
        ["Comment la baisse des prix compense-t-elle ?", "Elle augmente le pouvoir d'achat, ce qui soutient la demande d'autres biens et donc l'emploi dans d'autres activités."],
        ["Quels métiers le progrès technique crée-t-il ?", "La maintenance, l'informatique, la logistique, la formation, les services liés aux nouveaux équipements."],
        ["La compensation est-elle automatique ?", "Non : elle demande du temps, de la formation et de la mobilité, et suppose que la demande suive."],
        ["Pourquoi parle-t-on de destruction créatrice ?", "Parce que le progrès détruit des activités anciennes en même temps qu'il en fait naître de nouvelles, souvent plus productives."],
        ["Que peuvent faire les pouvoirs publics ?", "Anticiper les reconversions, financer la formation continue et accompagner les secteurs et les territoires touchés."],
      ],
      synthese: "Donc, le progrès technique exerce trois effets simultanés : il détruit des tâches, il compense par la baisse des prix et l'activité induite, et il crée des métiers nouveaux. La compensation n'a rien d'automatique : elle suppose du temps, de la formation et de la mobilité, d'où le rôle essentiel des politiques d'accompagnement.",
      motsCles: ["progrès technique", "destruction créatrice", "compensation", "baisse des prix", "pouvoir d'achat", "nouveaux métiers", "reconversion", "formation continue"],
      image: { file: "t12_u3_progres_emploi.png", legende: "Figure 32 — Le progrès technique : destructeur ou créateur d'emplois ?" },
      contenu: [
        {
          sousTitre: "1. L'effet de destruction",
          texte: "Le premier effet est le plus visible : des tâches disparaissent, remplacées par des machines ou des procédés.",
          liste: [
            "Une machine accomplit plus vite et moins cher un travail répétitif.",
            "Les postes correspondants sont supprimés ou non renouvelés.",
            "Les travailleurs concernés doivent changer de tâche, d'entreprise ou de métier.",
          ],
        },
        {
          sousTitre: "2. Les canaux de compensation",
          texte: "Plusieurs mécanismes rendent à l'économie une partie des emplois détruits.",
          liste: [
            "La baisse des prix augmente le pouvoir d'achat : les ménages demandent d'autres biens, qui emploient d'autres personnes.",
            "La fabrication, l'installation et la maintenance des nouveaux équipements créent une activité nouvelle.",
            "Les gains de productivité financent des hausses de salaire, donc une demande supplémentaire.",
          ],
        },
        {
          sousTitre: "3. L'effet de création",
          texte: "Le progrès technique fait aussi apparaître des métiers qui n'existaient pas.",
          liste: [
            "Maintenance et réparation des équipements nouveaux.",
            "Informatique, réseaux et services numériques.",
            "Logistique, transport et distribution liés aux nouveaux circuits.",
            "Formation et accompagnement des utilisateurs.",
          ],
        },
        {
          sousTitre: "4. Une compensation qui ne va pas de soi",
          texte: "Les effets positifs existent, mais ils sont différés et inégalement répartis.",
          liste: [
            "Le temps : les destructions sont immédiates, les créations prennent des années.",
            "La mobilité : le chômeur ne peut pas toujours changer de région ou de métier.",
            "La qualification : les nouveaux postes exigent des compétences que l'ancien poste n'a pas développées.",
            "Rôle public : formation continue, anticipation des reconversions, appui aux territoires touchés.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "L'effet de destruction correspond à…", opts: ["des postes remplacés par des machines", "la création de métiers", "la hausse des prix"], ok: 0, expl: "Des tâches disparaissent." },
          { q: "La baisse des prix compense en…", opts: ["augmentant le pouvoir d'achat", "réduisant la demande", "supprimant la concurrence"], ok: 0, expl: "Les ménages consomment davantage d'autres biens." },
          { q: "Un métier créé par le progrès technique est…", opts: ["la maintenance d'équipements", "le travail à la main identique", "la vente sans intermédiaire"], ok: 0, expl: "Les équipements nouveaux exigent entretien et réparation." },
          { q: "La compensation est…", opts: ["différée et non automatique", "immédiate", "inutile"], ok: 0, expl: "Elle demande temps, formation et mobilité." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le progrès technique ne détruit jamais d'emplois.", rep: false, expl: "L'effet de destruction est réel et immédiat." },
          { txt: "Les créations d'emplois sont souvent plus lentes que les destructions.", rep: true, expl: "C'est le décalage qui rend les transitions difficiles." },
          { txt: "La formation continue facilite les reconversions.", rep: true, expl: "Elle rapproche les compétences des besoins nouveaux." },
          { txt: "Le progrès technique crée automatiquement autant d'emplois qu'il en détruit.", rep: false, expl: "Rien n'est automatique : tout dépend du contexte." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite les trois effets du progrès technique sur l'emploi.", r: "L'effet de destruction des postes, l'effet de compensation et l'effet de création de métiers nouveaux." },
          { q: "Explique le canal de compensation par la baisse des prix.", r: "Les prix baissent, le pouvoir d'achat augmente, les ménages demandent d'autres biens, ce qui soutient l'emploi dans d'autres activités." },
          { q: "Pourquoi la compensation n'est-elle pas automatique ?", r: "Parce qu'elle demande du temps, de la mobilité et des compétences nouvelles que le travailleur déplacé ne possède pas toujours." },
          { q: "Que peut faire l'action publique face à ces transformations ?", r: "Anticiper les reconversions, financer la formation continue et accompagner les secteurs et les territoires touchés." },
        ]},
        { type: "appariement", consigne: "Relie chaque situation à l'effet correspondant.", pointsPar: 1, items: [
          { g: ["Une caisse automatique remplace un guichet", "Un technicien entretient les automates", "Les prix baissent, les ménages achètent d'autres biens", "Un atelier ferme après une automatisation", "Un service de livraison se développe"], d: ["Création", "Destruction", "Compensation", "Destruction", "Création"], pairs: [[0, 1], [1, 0], [2, 2], [3, 1], [4, 0]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 37 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le marché du travail : le modèle standard",
      theme: "Travail et emploi",
      ras: "Estimer les éléments dont dépend le niveau d'emploi dans une économie",
      valeurs: "Responsabilité, autonomie",
      objectif: "présenter le fonctionnement du marché du travail dans le modèle standard",
      supportMeta: "Graphiques offre/demande, documents, cahier",
      revision: [
        ["Quels sont les trois effets du progrès technique sur l'emploi ?", "La destruction de postes, la compensation et la création de métiers nouveaux."],
        ["Qu'est-ce qu'un marché ?", "Le lieu, réel ou virtuel, où se rencontrent une offre et une demande pour fixer un prix."],
      ],
      mise: [
        "Un employeur propose un salaire très bas. Trouvera-t-il des candidats ?",
        "Peu : les travailleurs préfèrent attendre ou s'orienter ailleurs. Le salaire est le prix qui équilibre offre et demande de travail.",
      ],
      observation: "le graphique du marché du travail",
      observationSupport: "Graphique offre et demande de travail affiché ou distribué",
      technAna: "Lecture de graphique et discussion dirigée",
      qa: [
        ["Qu'est-ce que le marché du travail ?", "Le lieu, réel ou virtuel, où se rencontrent l'offre de travail des ménages et la demande de travail des entreprises."],
        ["Qui compose l'offre de travail ?", "Les personnes qui cherchent un emploi et acceptent de travailler au salaire proposé."],
        ["Qui compose la demande de travail ?", "Les entreprises et les administrations qui souhaitent embaucher."],
        ["Comment le salaire se fixe-t-il dans le modèle standard ?", "Par la confrontation de l'offre et de la demande : le salaire d'équilibre égalise les quantités offertes et demandées."],
        ["Pourquoi la demande de travail est-elle décroissante ?", "Parce qu'un salaire plus élevé renchérit le coût du travail : les entreprises embauchent moins."],
        ["Pourquoi l'offre de travail est-elle croissante ?", "Parce qu'un salaire plus élevé attire davantage de candidats sur le marché."],
        ["Que se passe-t-il si le salaire est supérieur à l'équilibre ?", "L'offre dépasse la demande : il apparaît du chômage, et la concurrence entre candidats pousse le salaire à la baisse."],
        ["Que conclut le modèle standard ?", "Que le chômage volontaire existe seul : toute personne acceptant le salaire d'équilibre trouve un emploi."],
      ],
      synthese: "Donc, dans le modèle standard, le marché du travail fonctionne comme tout marché : l'offre de travail des ménages rencontre la demande des entreprises et détermine un salaire d'équilibre. À ce salaire, tous ceux qui veulent travailler trouvent un emploi : le chômage ne peut être que volontaire ou transitoire.",
      motsCles: ["marché du travail", "offre de travail", "demande de travail", "salaire d'équilibre", "flexibilité", "ajustement", "chômage volontaire", "productivité marginale"],
      image: { file: "t12_u3_marche_travail.png", legende: "Figure 33 — Le modèle standard du marché du travail." },
      contenu: [
        {
          sousTitre: "1. Offre et demande de travail",
          texte: "Le marché du travail met face à face deux catégories d'agents.",
          liste: [
            "L'offre vient des ménages : ils proposent leur force de travail contre un salaire.",
            "La demande vient des entreprises et des administrations : elles cherchent la main-d'œuvre nécessaire à leur production.",
            "Le prix de cette rencontre est le salaire.",
          ],
        },
        {
          sousTitre: "2. Le salaire d'équilibre",
          texte: "Les deux courbes se croisent en un point qui définit le salaire et le niveau d'emploi.",
          liste: [
            "La demande décroît avec le salaire : embaucher coûte plus cher.",
            "L'offre croît avec le salaire : travailler devient plus attractif.",
            "Au point de croisement, la quantité offerte égale la quantité demandée.",
          ],
        },
        {
          sousTitre: "3. Le mécanisme d'ajustement",
          texte: "Le modèle décrit comment le marché revient à l'équilibre après un déséquilibre.",
          liste: [
            "Salaire trop élevé : l'offre excède la demande, la concurrence entre candidats fait baisser le salaire.",
            "Salaire trop bas : les entreprises ne trouvent pas de candidats, elles doivent l'augmenter.",
            "Le mouvement se poursuit jusqu'à l'équilibre.",
          ],
        },
        {
          sousTitre: "4. La conclusion du modèle",
          texte: "Le modèle standard aboutit à une affirmation forte, qui sera discutée à la séance suivante.",
          liste: [
            "Toute personne qui accepte le salaire d'équilibre trouve un emploi.",
            "Le chômage observé serait donc volontaire : refus du salaire proposé ou recherche d'un meilleur poste.",
            "Cette conclusion se heurte à la réalité, où le chômage dure.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "L'offre de travail émane…", opts: ["des ménages", "des entreprises", "de l'État"], ok: 0, expl: "Ce sont les personnes qui cherchent un emploi." },
          { q: "Un salaire plus élevé fait…", opts: ["baisser la demande de travail", "augmenter la demande de travail", "disparaître le marché"], ok: 0, expl: "Embaucher coûte plus cher." },
          { q: "Au salaire d'équilibre…", opts: ["offre et demande sont égales", "l'offre est nulle", "la demande est nulle"], ok: 0, expl: "Le marché est équilibré." },
          { q: "Dans le modèle standard, le chômage durable est…", opts: ["impossible, sauf s'il est volontaire", "inévitable", "sans cause"], ok: 0, expl: "L'ajustement par le salaire le résorbe." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La demande de travail augmente quand le salaire baisse.", rep: true, expl: "Embaucher devient moins coûteux." },
          { txt: "Un salaire trop élevé fait apparaître du chômage.", rep: true, expl: "L'offre excède alors la demande." },
          { txt: "Le salaire d'équilibre est fixé par la loi dans le modèle standard.", rep: false, expl: "Il résulte de la rencontre offre-demande." },
          { txt: "Le modèle standard explique le chômage de longue durée.", rep: false, expl: "Il le considère comme volontaire ou transitoire." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis le marché du travail.", r: "C'est le lieu, réel ou virtuel, où se rencontrent l'offre de travail des ménages et la demande de travail des entreprises." },
          { q: "Comment se fixe le salaire dans le modèle standard ?", r: "Il se fixe par la confrontation de l'offre et de la demande : le salaire d'équilibre égalise les quantités offertes et demandées." },
          { q: "Que se passe-t-il si le salaire est supérieur au salaire d'équilibre ?", r: "L'offre de travail excède la demande, ce qui crée du chômage et pousse le salaire vers le bas." },
          { q: "Quelle est la conclusion du modèle standard sur le chômage ?", r: "Le chômage ne peut être que volontaire ou transitoire : toute personne acceptant le salaire d'équilibre trouve un emploi." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Ceux qui proposent leur force de travail forment l'", suite: "offre" },
          { debut: "Celles qui cherchent à embaucher forment la", suite: "demande" },
          { debut: "Le prix qui équilibre le marché du travail est le", suite: "salaire" },
          { debut: "Un refus du poste au salaire proposé donne un chômage", suite: "volontaire" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 38 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les limites du modèle standard",
      theme: "Travail et emploi",
      ras: "Estimer les éléments dont dépend le niveau d'emploi dans une économie",
      valeurs: "Responsabilité, autonomie",
      objectif: "expliquer pourquoi le marché du travail ne revient pas à l'équilibre",
      supportMeta: "Documents, schémas, cahier",
      revision: [
        ["Comment le salaire se fixe-t-il dans le modèle standard ?", "Par la rencontre de l'offre et de la demande de travail, au point d'équilibre."],
        ["Que prévoit le modèle standard en cas de chômage ?", "Que le salaire baisse jusqu'à ce que l'offre et la demande s'égalisent."],
      ],
      mise: [
        "Si le chômage se résorbait par la baisse des salaires, pourquoi voit-on des chômeurs pendant des années ?",
        "Parce que le marché du travail ne ressemble pas à un marché de légumes : les salaires résistent, l'information manque et les travailleurs ne sont pas interchangeables.",
      ],
      observation: "le schéma des limites du modèle",
      observationSupport: "Schéma des limites du modèle standard affiché ou distribué",
      technAna: "Lecture de schéma et débat dirigé",
      qa: [
        ["Quelle est la première limite du modèle ?", "La rigidité des salaires : ils ne baissent pas facilement, en raison des conventions, de la législation et de la résistance des salariés."],
        ["Pourquoi les salaires résistent-ils à la baisse ?", "Parce qu'un salaire plus bas démotive l'équipe en place, provoque des départs et dégrade la qualité du travail."],
        ["Quelle est la deuxième limite ?", "L'information imparfaite : l'employeur ne connaît pas la productivité réelle d'un candidat avant de l'embaucher."],
        ["Quelle est la troisième limite ?", "La mobilité limitée : changer de région ou de métier coûte cher, et tous les travailleurs ne peuvent pas le faire."],
        ["Qu'est-ce que la segmentation du marché du travail ?", "La séparation entre un secteur stable, bien rémunéré, et un secteur précaire, les deux communiquant mal."],
        ["Qu'est-ce que la théorie du salaire d'efficience ?", "L'idée qu'un salaire supérieur à l'équilibre peut être rentable, parce qu'il réduit le turn-over et stimule l'effort."],
        ["Qu'est-ce que le chômage involontaire ?", "La situation d'une personne qui accepterait le salaire en vigueur sans trouver d'emploi."],
        ["Que conclure sur le rôle de la régulation ?", "Que des règles — protection de l'emploi, salaire minimum, assurance chômage — répondent à ces défaillances, tout en ayant leurs propres effets."],
      ],
      synthese: "Donc, le marché du travail ne s'ajuste pas comme le modèle standard le prévoyait : les salaires sont rigides, l'information est imparfaite, la mobilité est coûteuse et le marché est segmenté. Ces défaillances expliquent l'existence d'un chômage involontaire durable, que l'action publique cherche à réduire.",
      motsCles: ["rigidité des salaires", "information imparfaite", "mobilité", "segmentation", "salaire d'efficience", "chômage involontaire", "salaire minimum", "défaillance de marché"],
      image: { file: "t12_u3_limites_modele.png", legende: "Figure 34 — Pourquoi le marché du travail ne s'équilibre pas : les limites du modèle." },
      contenu: [
        {
          sousTitre: "1. La rigidité des salaires",
          texte: "Le salaire n'est pas un prix comme les autres : il ne baisse presque jamais.",
          liste: [
            "Des conventions collectives et un minimum légal encadrent les rémunérations.",
            "Une baisse des salaires démotive l'équipe en place et provoque des départs.",
            "Les entreprises préfèrent souvent réduire les effectifs plutôt que les salaires.",
          ],
        },
        {
          sousTitre: "2. L'information imparfaite",
          texte: "Employeurs et candidats ne disposent pas des mêmes informations.",
          liste: [
            "L'employeur ne connaît pas à l'avance la productivité réelle du candidat.",
            "Le candidat ne connaît pas toujours les conditions réelles du poste.",
            "Cette incertitude allonge la recherche d'emploi et entretient un chômage de friction.",
          ],
        },
        {
          sousTitre: "3. La mobilité limitée et la segmentation",
          texte: "Les travailleurs ne se déplacent pas instantanément d'un poste à l'autre.",
          liste: [
            "Changer de région suppose un logement, une école pour les enfants, un réseau.",
            "Changer de métier suppose une formation et une période sans revenu.",
            "Le marché se segmente : d'un côté des emplois stables, de l'autre des emplois précaires, avec peu de passages.",
          ],
        },
        {
          sousTitre: "4. Le salaire d'efficience et le rôle des règles",
          texte: "Certaines pratiques d'entreprise s'expliquent par ces défaillances.",
          liste: [
            "Un salaire supérieur à l'équilibre peut réduire le turn-over et stimuler l'effort : c'est le salaire d'efficience.",
            "Le salaire minimum protège les travailleurs les moins qualifiés, mais peut réduire l'embauche dans les secteurs à faible productivité.",
            "L'assurance chômage sécurise les parcours, tout en devant préserver l'incitation au retour à l'emploi.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Les salaires résistent à la baisse surtout parce que…", opts: ["une baisse démotive l'équipe en place", "la loi l'interdit toujours", "les clients l'exigent"], ok: 0, expl: "L'effort et la fidélité des salariés s'en ressentent." },
          { q: "Le salaire d'efficience est…", opts: ["un salaire supérieur à l'équilibre, choisi pour stimuler l'effort", "le salaire le plus bas possible", "un salaire imposé par les clients"], ok: 0, expl: "Il réduit le turn-over et la surveillance." },
          { q: "Le chômage involontaire désigne…", opts: ["une personne qui accepterait le salaire sans trouver d'emploi", "un refus de travailler", "une retraite anticipée"], ok: 0, expl: "Elle ne trouve pas de poste malgré sa disponibilité." },
          { q: "La segmentation sépare…", opts: ["emplois stables et emplois précaires", "hommes et femmes", "villes et campagnes"], ok: 0, expl: "Les deux compartiments communiquent peu." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une baisse des salaires suffit toujours à résorber le chômage.", rep: false, expl: "La rigidité des salaires et la faiblesse de la demande l'empêchent." },
          { txt: "L'information imparfaite allonge la recherche d'emploi.", rep: true, expl: "Employeurs et candidats s'observent avant de s'engager." },
          { txt: "La mobilité professionnelle est sans coût.", rep: false, expl: "Elle suppose formation, déménagement et perte de revenu." },
          { txt: "Le salaire minimum peut réduire l'embauche dans les secteurs peu productifs.", rep: true, expl: "Le coût du travail y dépasse la productivité." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite trois limites du modèle standard du marché du travail.", r: "La rigidité des salaires, l'information imparfaite et la mobilité limitée des travailleurs." },
          { q: "Pourquoi une entreprise hésite-t-elle à baisser les salaires en période difficile ?", r: "Parce qu'une baisse démotive l'équipe en place, provoque des départs et dégrade la qualité du travail." },
          { q: "Qu'est-ce que la théorie du salaire d'efficience ?", r: "C'est l'idée qu'un salaire supérieur à l'équilibre peut être rentable, car il réduit le turn-over et stimule l'effort des salariés." },
          { q: "Définis le chômage involontaire.", r: "C'est la situation d'une personne qui accepterait le salaire en vigueur sans parvenir à trouver un emploi." },
        ]},
        { type: "appariement", consigne: "Relie chaque situation à la limite correspondante.", pointsPar: 1, items: [
          { g: ["Un ouvrier refuse un poste à 300 km", "Un employeur ignore la fiabilité du candidat", "Une convention fixe le salaire plancher", "Un vendeur précaire ne passe pas au secteur stable", "Une démission après une baisse de salaire"], d: ["Information imparfaite", "Rigidité des salaires", "Mobilité limitée", "Segmentation", "Rigidité des salaires"], pairs: [[0, 2], [1, 0], [2, 1], [3, 3], [4, 1]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 39 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le chômage keynésien",
      theme: "Travail et emploi",
      ras: "Estimer les éléments dont dépend le niveau d'emploi dans une économie",
      valeurs: "Responsabilité, autonomie",
      objectif: "expliquer le chômage provoqué par l'insuffisance de la demande",
      supportMeta: "Schéma de la boucle, documents, cahier",
      revision: [
        ["Quelle est la première limite du modèle standard ?", "La rigidité des salaires, qui empêche l'ajustement par le bas."],
        ["Qu'est-ce que le chômage involontaire ?", "La situation d'une personne qui accepterait le salaire en vigueur sans trouver d'emploi."],
      ],
      mise: [
        "Une entreprise vend moins et réduit ses effectifs. Les ménages touchés achètent à leur tour moins. Que se passe-t-il ?",
        "Le mouvement s'entretient : la baisse de la demande provoque une baisse de l'emploi, qui réduit encore la demande.",
      ],
      observation: "le schéma de la boucle de sous-activité",
      observationSupport: "Schéma de la boucle demande — production — emploi affiché ou distribué",
      technAna: "Lecture de schéma et discussion dirigée",
      qa: [
        ["Qu'est-ce que le chômage keynésien ?", "Un chômage causé par l'insuffisance de la demande : les entreprises ne vendent pas assez pour employer toute la main-d'œuvre disponible."],
        ["Qui a formulé cette analyse ?", "L'économiste britannique John Maynard Keynes, dans la première moitié du vingtième siècle."],
        ["Comment se forme la boucle ?", "La demande faiblit, la production baisse, les effectifs sont réduits, les revenus distribués diminuent, ce qui réduit encore la demande."],
        ["Pourquoi le salaire ne corrige-t-il pas la situation ?", "Parce que baisser les salaires réduit le pouvoir d'achat, donc la demande : le remède aggrave le mal."],
        ["Qu'est-ce que la trappe à sous-activité ?", "Une situation où l'économie reste durablement en dessous de son niveau de production potentielle, sans force de rappel suffisante."],
        ["Quelle est la réponse keynésienne ?", "Relancer la demande : dépense publique, travaux publics, soutien à la consommation et à l'investissement."],
        ["Qu'est-ce que le multiplicateur ?", "Le fait qu'un euro de dépense publique produit plus d'un euro d'activité, parce qu'il est dépensé à son tour."],
        ["Quelles sont les limites de la relance ?", "Le déficit public, les délais d'exécution et le risque d'inflation si la production ne suit pas."],
      ],
      synthese: "Donc, le chômage keynésien naît d'une demande insuffisante : les entreprises ne vendent pas assez pour employer tout le monde. La baisse des salaires n'y remédie pas, puisqu'elle réduit encore le pouvoir d'achat. La réponse passe par le soutien à la demande, la dépense publique jouant un rôle d'entraînement.",
      motsCles: ["chômage keynésien", "demande insuffisante", "Keynes", "multiplicateur", "dépense publique", "relance", "pouvoir d'achat", "sous-activité"],
      image: { file: "t12_u3_keynesien.png", legende: "Figure 35 — Le chômage keynésien : quand la demande fait défaut." },
      contenu: [
        {
          sousTitre: "1. La cause : une demande insuffisante",
          texte: "Pour Keynes, l'économie peut rester durablement en dessous de ses capacités faute de débouchés.",
          liste: [
            "Les ménages achètent moins, par prudence ou par manque de revenu.",
            "Les entreprises investissent moins, faute de perspectives de vente.",
            "La production s'ajuste à la demande : les effectifs sont réduits.",
          ],
        },
        {
          sousTitre: "2. La boucle de sous-activité",
          texte: "Le mécanisme s'entretient de lui-même par un enchaînement circulaire.",
          liste: [
            "La demande faiblit, la production baisse.",
            "Les entreprises licencient ou n'embauchent plus.",
            "Les revenus distribués diminuent, ce qui réduit à nouveau la demande.",
          ],
        },
        {
          sousTitre: "3. Pourquoi les salaires ne suffisent pas",
          texte: "Keynes écarte la solution du modèle classique.",
          liste: [
            "Baisser les salaires réduit le pouvoir d'achat des ménages.",
            "La demande baisse d'autant, la production aussi, et l'emploi avec elle.",
            "C'est ce qu'on appelle le paradoxe de l'épargne : vouloir tous épargner réduit les revenus de tous.",
          ],
        },
        {
          sousTitre: "4. La réponse : soutenir la demande",
          texte: "La politique keynésienne agit sur les débouchés, non sur le coût du travail.",
          liste: [
            "Travaux publics : routes, écoles, adduction d'eau.",
            "Soutien à la consommation des ménages les plus modestes.",
            "Le multiplicateur : un euro dépensé circule et crée plus d'un euro d'activité.",
            "Limites : déficit, délais d'exécution, risque d'inflation si l'offre ne suit pas.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le chômage keynésien vient…", opts: ["d'une demande insuffisante", "d'un salaire trop élevé seulement", "du climat"], ok: 0, expl: "Les débouchés manquent." },
          { q: "Selon Keynes, baisser les salaires…", opts: ["réduit encore la demande", "relance toujours l'emploi", "n'a aucun effet du tout"], ok: 0, expl: "Le pouvoir d'achat baisse avec eux." },
          { q: "Le multiplicateur désigne…", opts: ["l'effet amplifié de la dépense publique", "la hausse des prix", "la baisse des impôts"], ok: 0, expl: "Un euro dépensé circule et crée de l'activité." },
          { q: "Une relance keynésienne passe par…", opts: ["des travaux publics", "une baisse des salaires", "la suppression des allocations"], ok: 0, expl: "Elle soutient directement la demande." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Pour Keynes, le marché revient toujours de lui-même à l'équilibre.", rep: false, expl: "Il soutient au contraire qu'il peut rester en sous-activité." },
          { txt: "Une baisse générale des salaires peut aggraver le chômage.", rep: true, expl: "Elle réduit le pouvoir d'achat et la demande." },
          { txt: "La dépense publique peut avoir un effet d'entraînement.", rep: true, expl: "C'est le multiplicateur." },
          { txt: "La relance ne présente aucun inconvénient.", rep: false, expl: "Elle creuse le déficit et peut alimenter l'inflation." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Qu'est-ce que le chômage keynésien ?", r: "C'est un chômage causé par l'insuffisance de la demande : les entreprises ne vendent pas assez pour employer toute la main-d'œuvre disponible." },
          { q: "Décris la boucle de sous-activité.", r: "La demande faiblit, la production baisse, les effectifs sont réduits, les revenus distribués diminuent, ce qui réduit encore la demande." },
          { q: "Pourquoi une baisse générale des salaires n'est-elle pas la solution selon Keynes ?", r: "Parce qu'elle réduit le pouvoir d'achat des ménages, donc la demande, donc la production et l'emploi." },
          { q: "Qu'est-ce que le multiplicateur ?", r: "C'est le fait qu'un euro de dépense publique crée plus d'un euro d'activité, parce que la somme versée est dépensée à son tour." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "L'auteur de l'analyse keynésienne est John Maynard", suite: "Keynes" },
          { debut: "Le chômage keynésien vient d'un manque de", suite: "demande" },
          { debut: "Routes, écoles et réseaux financés par l'État sont des travaux", suite: "publics" },
          { debut: "Une économie durablement en dessous de ses capacités est en", suite: "sous-activité" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 40 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le chômage classique",
      theme: "Travail et emploi",
      ras: "Estimer les éléments dont dépend le niveau d'emploi dans une économie",
      valeurs: "Responsabilité, autonomie",
      objectif: "expliquer le chômage lié à un coût du travail trop élevé",
      supportMeta: "Graphiques, documents, cahier",
      revision: [
        ["Quelle est la cause du chômage keynésien ?", "L'insuffisance de la demande adressée aux entreprises."],
        ["Que préconise la politique keynésienne ?", "Le soutien à la demande par la dépense publique et les travaux publics."],
      ],
      mise: [
        "Une entreprise hésite à embaucher parce que le salaire coûte plus cher que ce que le poste rapporte. Que faire ?",
        "Agir sur le coût du travail ou sur la productivité : c'est la réponse de l'analyse classique.",
      ],
      observation: "le graphique du marché du travail avec un salaire supérieur à l'équilibre",
      observationSupport: "Graphique du marché du travail avec salaire réel trop élevé",
      technAna: "Lecture de graphique et discussion dirigée",
      qa: [
        ["Qu'est-ce que le chômage classique ?", "Un chômage causé par un coût du travail trop élevé par rapport à la productivité : les entreprises n'embauchent pas."],
        ["Pourquoi appelle-t-on cette analyse « classique » ?", "Parce qu'elle reprend le raisonnement des économistes classiques : le marché se rétablit si les prix, ici les salaires, sont flexibles."],
        ["Qu'entend-on par salaire réel ?", "Le salaire corrigé de la hausse des prix : ce qu'il permet réellement d'acheter."],
        ["Comment le salaire trop élevé crée-t-il du chômage ?", "L'offre de travail dépasse la demande : davantage de personnes se présentent que d'emplois proposés."],
        ["Quel rôle jouent les charges ?", "Les cotisations et taxes s'ajoutent au salaire versé : elles élèvent le coût total du travail pour l'employeur."],
        ["Quelles solutions l'analyse classique propose-t-elle ?", "La modération salariale, l'allègement des charges et l'assouplissement des conditions d'embauche."],
        ["Quelles objections lui oppose-t-on ?", "Baisser les salaires réduit le pouvoir d'achat et la demande : le chômage keynésien risque de s'aggraver."],
        ["Comment articuler les deux analyses ?", "Les deux types de chômage peuvent coexister : le diagnostic porte sur la part respective de la demande insuffisante et du coût du travail."],
      ],
      synthese: "Donc, le chômage classique s'explique par un coût du travail supérieur à la productivité du poste : à ce niveau de salaire, l'offre de travail dépasse la demande. La réponse classique passe par la modération salariale, l'allègement des charges et une plus grande flexibilité, mais elle doit composer avec l'effet dépressif d'une baisse générale des salaires.",
      motsCles: ["chômage classique", "coût du travail", "salaire réel", "charges", "productivité", "modération salariale", "flexibilité", "salaire minimum"],
      image: { file: "t12_u3_classique.png", legende: "Figure 36 — Le chômage classique : quand le coût du travail est trop élevé." },
      contenu: [
        {
          sousTitre: "1. Le mécanisme",
          texte: "L'analyse classique place l'origine du chômage dans le prix du travail lui-même.",
          liste: [
            "Une entreprise embauche tant que le poste rapporte au moins ce qu'il coûte.",
            "Si le coût du travail dépasse la productivité du poste, elle renonce à embaucher.",
            "L'offre de travail excède alors la demande : le chômage apparaît.",
          ],
        },
        {
          sousTitre: "2. Coût du travail et salaire réel",
          texte: "Le coût supporté par l'employeur dépasse le salaire versé au salarié.",
          liste: [
            "Salaire brut, auquel s'ajoutent les cotisations sociales.",
            "Salaire réel : le salaire corrigé de la hausse des prix, qui mesure le pouvoir d'achat.",
            "Un salaire minimum élevé protège les salariés, mais peut exclure du marché les travailleurs les moins productifs.",
          ],
        },
        {
          sousTitre: "3. Les réponses proposées",
          texte: "L'analyse classique agit sur le coût et sur la flexibilité.",
          liste: [
            "Modération salariale et allègement des charges sur les bas salaires.",
            "Assouplissement des conditions d'embauche et de licenciement.",
            "Hausse de la productivité par la formation et l'investissement.",
          ],
        },
        {
          sousTitre: "4. Les objections",
          texte: "Ces remèdes sont contestés, et le débat reste ouvert.",
          liste: [
            "Une baisse générale des salaires réduit le pouvoir d'achat et la demande.",
            "La flexibilité accrue peut précariser l'emploi sans le développer.",
            "Le diagnostic dépend du contexte : les deux types de chômage peuvent coexister.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le chômage classique s'explique par…", opts: ["un coût du travail trop élevé", "une demande insuffisante", "un manque de machines"], ok: 0, expl: "Le poste coûte plus qu'il ne rapporte." },
          { q: "Le salaire réel est…", opts: ["le salaire corrigé de la hausse des prix", "le salaire avant impôt", "le salaire du secteur public"], ok: 0, expl: "Il mesure le pouvoir d'achat." },
          { q: "Une solution classique est…", opts: ["l'allègement des charges", "la hausse du salaire minimum", "la réduction des horaires"], ok: 0, expl: "Elle abaisse le coût du travail." },
          { q: "Une objection à la baisse des salaires est…", opts: ["la baisse du pouvoir d'achat", "la hausse des prix", "la baisse du chômage"], ok: 0, expl: "La demande s'en trouve réduite." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le coût du travail comprend les cotisations sociales.", rep: true, expl: "Elles s'ajoutent au salaire versé." },
          { txt: "Le salaire minimum n'a jamais d'effet sur l'emploi.", rep: false, expl: "Il peut exclure les travailleurs les moins productifs." },
          { txt: "Une hausse de productivité rend l'embauche plus facile.", rep: true, expl: "Le poste rapporte davantage à coût égal." },
          { txt: "Chômage classique et chômage keynésien ne peuvent pas coexister.", rep: false, expl: "Les deux causes peuvent se cumuler dans une même économie." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Qu'est-ce que le chômage classique ?", r: "C'est un chômage causé par un coût du travail trop élevé par rapport à la productivité, qui décourage l'embauche." },
          { q: "Qu'est-ce que le salaire réel ?", r: "C'est le salaire corrigé de la hausse des prix : il mesure ce que le salaire permet réellement d'acheter." },
          { q: "Cite deux réponses de l'analyse classique au chômage.", r: "La modération salariale et l'allègement des charges sur les bas salaires, ainsi que l'assouplissement des conditions d'embauche." },
          { q: "Quelle objection oppose-t-on à la baisse générale des salaires ?", r: "Elle réduit le pouvoir d'achat des ménages, donc la demande, ce qui peut aggraver le chômage keynésien." },
        ]},
        { type: "appariement", consigne: "Relie chaque diagnostic à sa réponse.", pointsPar: 1, items: [
          { g: ["Demande insuffisante", "Coût du travail trop élevé", "Salaires rigides à la baisse", "Charges élevées sur les bas salaires", "Production inférieure aux capacités"], d: ["Allègement des charges", "Relance de la demande", "Relance de la demande", "Allègement des charges", "Relance de la demande"], pairs: [[0, 1], [1, 0], [2, 1], [3, 0], [4, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 41 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le chômage structurel",
      theme: "Travail et emploi",
      ras: "Estimer les éléments dont dépend le niveau d'emploi dans une économie",
      valeurs: "Responsabilité, autonomie",
      objectif: "expliquer le chômage durable lié à la structure de l'économie",
      supportMeta: "Documents, schémas, cahier",
      revision: [
        ["Quelle est la cause du chômage classique ?", "Un coût du travail trop élevé par rapport à la productivité du poste."],
        ["Qu'est-ce que le salaire réel ?", "Le salaire corrigé de la hausse des prix."],
      ],
      mise: [
        "Des entreprises cherchent des soudeurs pendant que des milliers de personnes cherchent un emploi. Pourquoi le marché ne les réunit-il pas ?",
        "Parce que les compétences, les lieux et les métiers ne correspondent pas : c'est précisément le chômage structurel.",
      ],
      observation: "le schéma des causes du chômage structurel",
      observationSupport: "Schéma des causes du chômage structurel affiché ou distribué",
      technAna: "Lecture de schéma et étude de documents",
      qa: [
        ["Qu'est-ce que le chômage structurel ?", "Un chômage durable, lié à la structure de l'économie : les offres et les demandes d'emploi ne se correspondent pas."],
        ["Quelle différence avec le chômage conjoncturel ?", "Le chômage conjoncturel suit le cycle de l'activité ; le chômage structurel persiste même quand l'activité repart."],
        ["Quelle est la première cause ?", "L'inadéquation des compétences : les qualifications des chercheurs d'emploi ne répondent pas aux besoins des entreprises."],
        ["Quelle est la deuxième cause ?", "L'obsolescence des métiers : des activités disparaissent et les savoir-faire correspondants trouvent moins de preneurs."],
        ["Quel rôle joue l'éloignement géographique ?", "Les emplois se créent loin des bassins de main-d'œuvre, et le déménagement coûte cher."],
        ["Comment les rigidités de structure agissent-elles ?", "Les procédures d'embauche, l'accès au crédit et au foncier freinent la création d'activités nouvelles."],
        ["Quelles politiques répondent à ce chômage ?", "La formation, la reconversion, l'aide à la mobilité et le soutien à la création d'entreprise."],
        ["Pourquoi ce chômage est-il le plus difficile à traiter ?", "Parce qu'il ne disparaît pas avec la reprise : il demande des transformations de long terme."],
      ],
      synthese: "Donc, le chômage structurel tient à la structure même de l'économie : inadéquation des compétences, métiers devenus obsolètes, éloignement géographique, rigidités et mutations technologiques. Contrairement au chômage conjoncturel, il ne se résorbe pas avec la reprise : il exige formation, reconversion et appui à la mobilité.",
      motsCles: ["chômage structurel", "chômage conjoncturel", "inadéquation des compétences", "obsolescence", "mobilité", "rigidités", "reconversion", "création d'entreprise"],
      image: { file: "t12_u3_structurel.png", legende: "Figure 37 — Le chômage structurel : quand l'offre et la demande ne se rencontrent pas." },
      contenu: [
        {
          sousTitre: "1. Un chômage qui ne suit pas la conjoncture",
          texte: "Le chômage structurel se distingue du chômage conjoncturel par sa persistance.",
          liste: [
            "Conjoncturel : lié au cycle, il baisse quand l'activité repart.",
            "Structurel : lié à l'organisation de l'économie, il résiste à la reprise.",
            "On le repère à la coexistence d'emplois vacants et de chômeurs durables.",
          ],
        },
        {
          sousTitre: "2. Les causes principales",
          texte: "Plusieurs causes, souvent présentes ensemble, entretiennent ce chômage.",
          liste: [
            "Inadéquation des compétences : la qualification disponible ne répond pas aux besoins.",
            "Obsolescence des métiers : des activités anciennes déclinent définitivement.",
            "Éloignement géographique : les emplois ne sont pas là où vivent les travailleurs.",
            "Rigidités : procédures, accès au crédit et au foncier freinent les créations d'activité.",
            "Mutations technologiques : les tâches changent plus vite que les reconversions.",
          ],
        },
        {
          sousTitre: "3. Les signes observables",
          texte: "Des indices simples permettent d'identifier un chômage structurel.",
          liste: [
            "Des offres d'emploi non pourvues malgré un chômage élevé.",
            "Une durée moyenne de chômage longue et croissante.",
            "Des secteurs entiers en déclin dans une région donnée.",
          ],
        },
        {
          sousTitre: "4. Les réponses possibles",
          texte: "Les politiques structurelles agissent lentement mais durablement.",
          liste: [
            "Formation initiale et continue adaptée aux besoins identifiés.",
            "Reconversion des travailleurs des secteurs en déclin.",
            "Aide à la mobilité géographique et au logement des actifs.",
            "Soutien à la création d'entreprise et à l'accès au crédit.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le chômage structurel…", opts: ["résiste à la reprise de l'activité", "disparaît dès la reprise", "n'existe qu'en ville"], ok: 0, expl: "Il tient à la structure de l'économie." },
          { q: "Un signe de chômage structurel est…", opts: ["des offres d'emploi non pourvues", "une baisse des salaires", "une hausse des prix"], ok: 0, expl: "Offres et demandes ne se rencontrent pas." },
          { q: "L'inadéquation des compétences désigne…", opts: ["l'écart entre qualifications et besoins", "le refus de travailler", "le manque de machines"], ok: 0, expl: "Les profils ne correspondent pas aux postes." },
          { q: "Une réponse structurelle est…", opts: ["la reconversion des travailleurs", "la baisse des impôts seulement", "la hausse des droits de douane"], ok: 0, expl: "Elle rapproche compétences et besoins." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le chômage structurel se résorbe dès le retour de la croissance.", rep: false, expl: "Il persiste tant que la structure de l'économie n'a pas changé." },
          { txt: "Des emplois vacants peuvent coexister avec un chômage élevé.", rep: true, expl: "C'est le signe typique du chômage structurel." },
          { txt: "L'aide à la mobilité peut réduire le chômage structurel.", rep: true, expl: "Elle rapproche travailleurs et emplois." },
          { txt: "Les mutations technologiques n'ont aucun effet sur l'emploi.", rep: false, expl: "Elles transforment les métiers et les qualifications requises." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis le chômage structurel et dis en quoi il diffère du chômage conjoncturel.", r: "C'est un chômage durable lié à la structure de l'économie ; contrairement au chômage conjoncturel, il ne disparaît pas avec la reprise de l'activité." },
          { q: "Cite trois causes du chômage structurel.", r: "L'inadéquation des compétences, l'obsolescence des métiers et l'éloignement géographique des emplois." },
          { q: "Quel signe permet de repérer un chômage structurel ?", r: "La coexistence d'offres d'emploi non pourvues avec un chômage élevé et durable." },
          { q: "Cite trois politiques de lutte contre ce chômage.", r: "La formation adaptée aux besoins, la reconversion des travailleurs des secteurs en déclin et l'aide à la mobilité géographique." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Un chômage lié au cycle de l'activité est", suite: "conjoncturel" },
          { debut: "Un chômage durable lié à l'organisation de l'économie est", suite: "structurel" },
          { debut: "Un métier dont les savoir-faire ne trouvent plus preneur devient", suite: "obsolète" },
          { debut: "Changer de métier après une formation est une", suite: "reconversion" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 42 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les conséquences du chômage et du sous-emploi",
      theme: "Travail et emploi",
      ras: "Estimer les éléments dont dépend le niveau d'emploi dans une économie",
      valeurs: "Responsabilité, autonomie",
      objectif: "mesurer les effets économiques et sociaux du chômage et du sous-emploi",
      supportMeta: "Documents, schémas, cahier",
      revision: [
        ["Qu'est-ce que le chômage structurel ?", "Un chômage durable lié à la structure de l'économie, qui résiste à la reprise."],
        ["Quelle différence avec le chômage conjoncturel ?", "Le chômage conjoncturel suit le cycle de l'activité ; le chômage structurel persiste."],
      ],
      mise: [
        "Quand un actif sur cinq ne travaille pas, qui en supporte le coût ?",
        "Tout le monde : le chômeur perd son revenu, l'économie perd une production, la collectivité finance des aides et renonce à des recettes.",
      ],
      observation: "le schéma des conséquences du chômage",
      observationSupport: "Schéma des conséquences du chômage affiché ou distribué",
      technAna: "Lecture de schéma et étude de documents",
      qa: [
        ["Quelles sont les conséquences économiques du chômage ?", "La baisse des revenus et de la consommation, une production perdue, une hausse des dépenses sociales et une baisse des recettes fiscales."],
        ["Pourquoi parle-t-on de production perdue ?", "Parce que le travail disponible n'est pas utilisé : la production réalisée reste en dessous de ce qu'elle pourrait être."],
        ["Quelles sont les conséquences sociales ?", "La hausse de la pauvreté et de la précarité, la fragilisation de la famille et du lien social, le risque d'exclusion."],
        ["Quelles sont les conséquences individuelles ?", "La perte de revenu, la perte de compétences liée à l'inactivité, l'atteinte à l'estime de soi, le découragement."],
        ["Qu'est-ce que le phénomène du chômeur découragé ?", "Une personne qui cesse de chercher un emploi après des échecs répétés et sort des statistiques du chômage."],
        ["Qu'est-ce que le sous-emploi ?", "La situation d'une personne qui travaille moins qu'elle ne le voudrait, ou sur un poste très inférieur à sa qualification."],
        ["Pourquoi le sous-emploi compte-t-il autant ?", "Parce qu'il produit une partie des mêmes effets que le chômage, sans apparaître dans les statistiques officielles."],
        ["Le coût du chômage est-il seulement individuel ?", "Non : il est collectif, car il réduit l'activité, pèse sur les finances publiques et affaiblit la cohésion sociale."],
      ],
      synthese: "Donc, le coût du chômage dépasse largement la perte de revenu du chômeur : il réduit la production, pèse sur les finances publiques, fragilise les familles et use les compétences. Le sous-emploi produit une partie des mêmes effets, tout en restant plus difficile à mesurer.",
      motsCles: ["chômage", "sous-emploi", "production perdue", "dépenses sociales", "précarité", "exclusion", "découragement", "coût collectif"],
      image: { file: "t12_u3_consequences.png", legende: "Figure 38 — Les conséquences du chômage et du sous-emploi." },
      contenu: [
        {
          sousTitre: "1. Les conséquences économiques",
          texte: "Le chômage prive l'économie d'une production qu'elle aurait pu réaliser.",
          liste: [
            "Baisse des revenus des ménages, donc de la consommation.",
            "Production perdue : le travail disponible n'est pas utilisé.",
            "Hausse des dépenses sociales et baisse des recettes fiscales.",
            "Coût de la formation des jeunes qui ne trouvent pas d'emploi.",
          ],
        },
        {
          sousTitre: "2. Les conséquences sociales",
          texte: "Les effets se transmettent à l'ensemble de la société.",
          liste: [
            "Hausse de la pauvreté, de la précarité et du risque d'exclusion.",
            "Fragilisation de la famille et du lien social.",
            "Tensions accrues sur la cohésion et la solidarité collective.",
          ],
        },
        {
          sousTitre: "3. Les conséquences individuelles",
          texte: "Une période longue sans emploi marque durablement la personne.",
          liste: [
            "Perte de revenu et difficultés matérielles immédiates.",
            "Perte de compétences : une longue inactivité déqualifie.",
            "Atteinte à l'estime de soi, risque de découragement et de sortie du marché du travail.",
          ],
        },
        {
          sousTitre: "4. Le sous-emploi",
          texte: "Une part importante du travail disponible est employée en dessous de son potentiel.",
          liste: [
            "Un actif est en sous-emploi s'il travaille moins qu'il ne le voudrait.",
            "Il l'est aussi s'il occupe un poste très inférieur à sa qualification.",
            "Le sous-emploi produit une partie des mêmes effets, sans apparaître dans les statistiques du chômage.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une conséquence économique du chômage est…", opts: ["une production perdue", "une hausse des recettes fiscales", "une baisse des dépenses sociales"], ok: 0, expl: "Le travail disponible n'est pas utilisé." },
          { q: "Le sous-emploi désigne…", opts: ["un actif qui travaille moins qu'il ne le voudrait", "un actif sans emploi", "un retraité"], ok: 0, expl: "Il sous-utilise sa capacité de travail." },
          { q: "Une longue inactivité entraîne…", opts: ["une perte de compétences", "une hausse de qualification", "une hausse de salaire"], ok: 0, expl: "Le savoir-faire s'use sans pratique." },
          { q: "Le coût du chômage est…", opts: ["collectif", "uniquement individuel", "uniquement public"], ok: 0, expl: "Il touche production, finances et cohésion sociale." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le sous-emploi apparaît toujours dans les statistiques du chômage.", rep: false, expl: "Il reste largement invisible dans ces statistiques." },
          { txt: "Le chômage réduit les recettes fiscales de l'État.", rep: true, expl: "Moins d'activité, moins de recettes ; plus d'aides à financer." },
          { txt: "Une période de chômage peut fragiliser la famille.", rep: true, expl: "La perte de revenu pèse sur tout le foyer." },
          { txt: "Un chômeur découragé continue de chercher activement un emploi.", rep: false, expl: "Il cesse de chercher et sort des statistiques." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite deux conséquences économiques du chômage.", r: "Une production perdue, puisque le travail disponible n'est pas utilisé, et une baisse des recettes fiscales accompagnée d'une hausse des dépenses sociales." },
          { q: "Cite deux conséquences sociales du chômage.", r: "La hausse de la pauvreté et de la précarité, et la fragilisation de la famille et du lien social." },
          { q: "Définis le sous-emploi.", r: "C'est la situation d'un actif qui travaille moins qu'il ne le voudrait, ou qui occupe un poste très inférieur à sa qualification." },
          { q: "Pourquoi dit-on que le coût du chômage est collectif ?", r: "Parce qu'il réduit l'activité économique, pèse sur les finances publiques et affaiblit la cohésion sociale, bien au-delà du seul chômeur." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Une activité qui n'est pas réalisée constitue une production", suite: "perdue" },
          { debut: "Un actif qui occupe un poste très inférieur à sa qualification est en", suite: "sous-emploi" },
          { debut: "Une personne qui cesse de chercher un emploi est un chômeur", suite: "découragé" },
          { debut: "La hausse de la pauvreté et de la précarité est une conséquence", suite: "sociale" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 43 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les politiques de relance de la demande",
      theme: "Travail et emploi",
      ras: "Estimer les éléments dont dépend le niveau d'emploi dans une économie",
      valeurs: "Responsabilité, autonomie",
      objectif: "présenter les instruments et les limites des politiques de relance",
      supportMeta: "Schéma du multiplicateur, documents, cahier, calculatrice",
      revision: [
        ["Qu'est-ce que le chômage keynésien ?", "Un chômage causé par l'insuffisance de la demande adressée aux entreprises."],
        ["Qu'est-ce que le multiplicateur ?", "Le fait qu'un euro de dépense publique crée plus d'un euro d'activité."],
      ],
      mise: [
        "L'État lance un programme de routes dans une région où le chômage est élevé. Comment l'emploi en profite-t-il ?",
        "Les entreprises embauchent pour les travaux, les ouvriers dépensent leur salaire, les commerces embauchent à leur tour : la dépense circule.",
      ],
      observation: "le schéma du circuit de la relance",
      observationSupport: "Schéma du circuit de la dépense publique affiché ou distribué",
      technAna: "Lecture de schéma et calcul dirigé",
      qa: [
        ["Quel est le principe d'une politique de relance ?", "Soutenir la demande par la dépense publique, pour que les entreprises produisent et embauchent à nouveau."],
        ["Quels sont les principaux instruments ?", "Les travaux publics, les aides ciblées aux ménages, la baisse de certains impôts et le soutien à l'investissement."],
        ["Pourquoi cibler les ménages modestes ?", "Parce qu'ils consomment une part élevée de leur revenu : l'aide se transforme immédiatement en demande."],
        ["Comment fonctionne le multiplicateur ?", "La somme dépensée devient un revenu pour d'autres, qui la dépensent à leur tour : l'activité créée dépasse la dépense initiale."],
        ["Qu'est-ce qu'un stabilisateur automatique ?", "Un mécanisme qui amortit le cycle sans décision nouvelle, comme les allocations chômage, qui soutiennent le revenu en période de récession."],
        ["Quelles sont les limites de la relance ?", "Le creusement du déficit public, les délais de mise en œuvre et le risque d'inflation si la production ne suit pas."],
        ["Qu'est-ce que l'effet d'éviction ?", "Le risque que l'emprunt public élève les taux d'intérêt et décourage l'investissement privé."],
        ["La relance suffit-elle ?", "Non : elle traite le chômage conjoncturel, mais reste sans effet sur le chômage structurel, qui demande formation et reconversion."],
      ],
      synthese: "Donc, la relance soutient la demande par la dépense publique : travaux publics, aides ciblées et soutien à l'investissement. Le multiplicateur amplifie l'effet, mais la relance creuse le déficit, prend du temps et reste impuissante face au chômage structurel.",
      motsCles: ["relance", "dépense publique", "travaux publics", "multiplicateur", "stabilisateur automatique", "déficit public", "effet d'éviction", "chômage conjoncturel"],
      image: { file: "t12_u3_relance.png", legende: "Figure 39 — Les politiques de relance de la demande." },
      contenu: [
        {
          sousTitre: "1. Le principe",
          texte: "La relance part du diagnostic keynésien : le manque de débouchés empêche l'embauche.",
          liste: [
            "L'État dépense davantage ou prélève moins.",
            "La demande adressée aux entreprises augmente.",
            "La production reprend, les effectifs suivent.",
          ],
        },
        {
          sousTitre: "2. Les instruments",
          texte: "Plusieurs leviers, d'efficacité inégale, sont à la disposition des pouvoirs publics.",
          liste: [
            "Travaux publics : routes, écoles, adduction d'eau — l'effet est direct sur l'emploi.",
            "Aides ciblées aux ménages modestes, qui consomment une large part de leur revenu.",
            "Baisse de certains impôts : l'effet dépend de la part que les ménages en consomment.",
            "Soutien à l'investissement : commandes publiques, aides sectorielles.",
          ],
        },
        {
          sousTitre: "3. Le multiplicateur",
          texte: "L'effet d'entraînement explique l'intérêt de la relance.",
          liste: [
            "Une somme dépensée devient le revenu d'un fournisseur ou d'un salarié.",
            "Ce revenu est à son tour dépensé, ce qui crée une nouvelle activité.",
            "L'activité totale créée dépasse la dépense initiale : c'est le multiplicateur.",
          ],
        },
        {
          sousTitre: "4. Les limites",
          texte: "La relance n'est ni gratuite ni universelle.",
          liste: [
            "Déficit public : il faut financer la dépense, par l'impôt ou par l'emprunt.",
            "Délais : les projets mettent du temps à démarrer, l'effet peut venir trop tard.",
            "Inflation : si la production ne suit pas, la hausse de la demande fait monter les prix.",
            "Effet d'éviction : l'emprunt public peut renchérir le crédit et freiner l'investissement privé.",
            "Sans effet sur le chômage structurel, qui relève d'autres instruments.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une politique de relance agit sur…", opts: ["la demande", "le coût du travail", "les droits de douane"], ok: 0, expl: "Elle redonne des débouchés aux entreprises." },
          { q: "Un exemple de travaux publics est…", opts: ["la construction d'une école", "une baisse du salaire minimum", "une hausse des taux d'intérêt"], ok: 0, expl: "La commande publique emploie directement." },
          { q: "Un stabilisateur automatique est…", opts: ["une allocation chômage", "un grand chantier décidé au cas par cas", "une augmentation d'impôt"], ok: 0, expl: "Il amortit le cycle sans décision nouvelle." },
          { q: "L'effet d'éviction désigne…", opts: ["le crédit privé freiné par l'emprunt public", "la baisse des prix", "la hausse des exportations"], ok: 0, expl: "Les taux montent et l'investissement privé recule." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La relance est efficace contre le chômage structurel.", rep: false, expl: "Elle traite le chômage conjoncturel, lié à la demande." },
          { txt: "Le multiplicateur amplifie l'effet de la dépense publique.", rep: true, expl: "La somme versée est redépensée." },
          { txt: "Une relance peut alimenter l'inflation.", rep: true, expl: "Si l'offre ne suit pas la demande, les prix montent." },
          { txt: "Les travaux publics agissent immédiatement sur l'emploi.", rep: false, expl: "Les délais de montage des projets retardent l'effet." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Quel est le principe d'une politique de relance ?", r: "Soutenir la demande par la dépense publique, afin que les entreprises produisent et embauchent à nouveau." },
          { q: "Cite trois instruments de relance.", r: "Les travaux publics, les aides ciblées aux ménages modestes et le soutien à l'investissement." },
          { q: "Explique le mécanisme du multiplicateur.", r: "Une somme dépensée devient le revenu d'un fournisseur ou d'un salarié, qui la redépense : l'activité créée dépasse la dépense initiale." },
          { q: "Cite trois limites de la relance.", r: "Le creusement du déficit public, les délais de mise en œuvre et le risque d'inflation si la production ne suit pas." },
        ]},
        { type: "appariement", consigne: "Relie chaque instrument à sa caractéristique.", pointsPar: 1, items: [
          { g: ["Construction d'une route", "Allocation chômage", "Emprunt public massif", "Aide versée aux ménages modestes", "Hausse des prix après une relance"], d: ["Stabilisateur automatique", "Travaux publics", "Inflation", "Effet d'éviction", "Consommation immédiate"], pairs: [[0, 1], [1, 0], [2, 3], [3, 4], [4, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 44 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les politiques d'offre et de soutien à l'emploi",
      theme: "Travail et emploi",
      ras: "Estimer les éléments dont dépend le niveau d'emploi dans une économie",
      valeurs: "Responsabilité, autonomie",
      objectif: "présenter les politiques qui agissent sur les conditions de production",
      supportMeta: "Documents, schémas, cahier",
      revision: [
        ["Quel est le principe d'une politique de relance ?", "Soutenir la demande par la dépense publique pour relancer la production et l'emploi."],
        ["Quelle est la principale limite de la relance ?", "Le déficit public, les délais et le risque d'inflation."],
      ],
      mise: [
        "Faut-il aider les entreprises à embaucher, ou les ménages à consommer ?",
        "Les deux approches se complètent : l'une soutient les débouchés, l'autre rend l'embauche moins coûteuse et plus simple.",
      ],
      observation: "le schéma des politiques d'offre",
      observationSupport: "Schéma des politiques d'offre affiché ou distribué",
      technAna: "Lecture de schéma et débat dirigé",
      qa: [
        ["Qu'est-ce qu'une politique d'offre ?", "Une politique qui agit sur les conditions de production, pour rendre l'embauche moins coûteuse et plus simple."],
        ["Quelle différence avec la relance ?", "La relance soutient la demande ; la politique d'offre améliore la capacité de produire et le coût du travail."],
        ["Quelles mesures réduisent le coût du travail ?", "L'allègement des charges sur les bas salaires et les aides à l'embauche."],
        ["Qu'est-ce que la flexibilité encadrée ?", "L'assouplissement des conditions d'embauche et de travail, assorti de garanties pour les salariés."],
        ["Comment soutenir les entreprises autrement ?", "En facilitant l'accès au crédit, en simplifiant les démarches et en ouvrant les marchés publics."],
        ["Qu'est-ce que l'incitation financière au retour à l'emploi ?", "Faire en sorte que la reprise d'un emploi augmente réellement le revenu disponible du foyer."],
        ["Quelles sont les limites de ces politiques ?", "Elles n'agissent qu'à moyen terme et leur efficacité suppose une activité suffisante : sans demande, l'embauche ne suit pas."],
        ["Demande et offre sont-elles opposées ?", "Non, elles se complètent : une économie a besoin de débouchés et d'entreprises capables d'y répondre."],
      ],
      synthese: "Donc, les politiques d'offre agissent sur les conditions de production : allègement du coût du travail, flexibilité encadrée, appui aux entreprises et incitation au retour à l'emploi. Elles n'agissent qu'à moyen terme et leur efficacité suppose une demande suffisante : offre et demande se complètent plus qu'elles ne s'opposent.",
      motsCles: ["politique d'offre", "coût du travail", "allègement de charges", "flexibilité encadrée", "aide à l'embauche", "accès au crédit", "incitation au retour à l'emploi", "moyen terme"],
      image: { file: "t12_u3_offre.png", legende: "Figure 40 — Les politiques d'offre et de soutien à l'emploi." },
      contenu: [
        {
          sousTitre: "1. La logique de l'offre",
          texte: "Plutôt que de soutenir les débouchés, on améliore la capacité des entreprises à produire et à embaucher.",
          liste: [
            "Réduire ce que coûte un travailleur au regard de ce qu'il rapporte.",
            "Simplifier les démarches et l'accès aux financements.",
            "Rendre le retour à l'emploi financièrement avantageux.",
          ],
        },
        {
          sousTitre: "2. Les principales mesures",
          texte: "Les instruments de l'offre se répartissent en quelques familles.",
          liste: [
            "Allègement des charges sur les bas salaires et aides à l'embauche.",
            "Flexibilité encadrée : assouplir les conditions d'embauche et de travail, avec des garanties.",
            "Soutien aux entreprises : accès au crédit, simplification, marchés publics.",
            "Secteurs porteurs : soutenir les activités à forte intensité de main-d'œuvre.",
          ],
        },
        {
          sousTitre: "3. L'incitation au retour à l'emploi",
          texte: "Le passage de l'allocation au salaire doit rester financièrement intéressant.",
          liste: [
            "Comparer le revenu disponible sans emploi et avec emploi.",
            "Compléter le salaire par des aides temporaires plutôt que de le remplacer.",
            "Accompagner la reprise : transport, garde d'enfants, équipement.",
          ],
        },
        {
          sousTitre: "4. Les limites et l'articulation avec la demande",
          texte: "Ces politiques ne se substituent pas au soutien de l'activité.",
          liste: [
            "Effet différé : les mesures structurelles agissent à moyen terme.",
            "Sans demande, une baisse du coût du travail ne déclenche pas d'embauche.",
            "Le coût budgétaire des allègements doit être financé.",
            "L'efficacité suppose un environnement stable et prévisible pour les entreprises.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une politique d'offre agit sur…", opts: ["les conditions de production", "la demande des ménages", "les exportations seulement"], ok: 0, expl: "Elle vise le coût et la capacité de produire." },
          { q: "Une mesure d'offre est…", opts: ["l'allègement des charges", "la hausse des allocations chômage", "la baisse des taux de change"], ok: 0, expl: "Elle réduit le coût du travail." },
          { q: "La flexibilité encadrée assouplit…", opts: ["les conditions d'embauche, avec des garanties", "le salaire minimum à la baisse", "les horaires sans limite"], ok: 0, expl: "Des garanties accompagnent l'assouplissement." },
          { q: "Une politique d'offre agit surtout…", opts: ["à moyen terme", "immédiatement", "en une semaine"], ok: 0, expl: "Les transformations structurelles prennent du temps." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une politique d'offre remplace la relance de la demande.", rep: false, expl: "Les deux approches se complètent." },
          { txt: "Soutenir les secteurs à forte intensité de main-d'œuvre favorise l'emploi.", rep: true, expl: "Ils emploient davantage par unité produite." },
          { txt: "Le retour à l'emploi doit rester financièrement avantageux.", rep: true, expl: "Sinon l'incitation à reprendre un poste disparaît." },
          { txt: "Les politiques d'offre sont efficaces même sans demande.", rep: false, expl: "Sans débouchés, l'embauche ne suit pas." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Qu'est-ce qu'une politique d'offre ?", r: "C'est une politique qui agit sur les conditions de production, afin de rendre l'embauche moins coûteuse et plus simple." },
          { q: "Cite trois mesures relevant de la politique d'offre.", r: "L'allègement des charges sur les bas salaires, la flexibilité encadrée et le soutien à l'accès au crédit des entreprises." },
          { q: "Qu'est-ce que l'incitation au retour à l'emploi ?", r: "Faire en sorte que la reprise d'un emploi augmente réellement le revenu disponible du foyer, afin que le travail reste avantageux." },
          { q: "Pourquoi offre et demande se complètent-elles plutôt qu'elles ne s'opposent ?", r: "Parce qu'une économie a besoin à la fois de débouchés suffisants et d'entreprises capables d'y répondre." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Réduire les cotisations sur les bas salaires est un allègement de", suite: "charges" },
          { debut: "Une activité qui emploie beaucoup de travailleurs est intense en", suite: "main-d'œuvre" },
          { debut: "Assouplir les règles d'embauche avec des garanties donne une flexibilité", suite: "encadrée" },
          { debut: "Les politiques d'offre produisent leur effet à", suite: "moyen terme" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 45 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Formation, insertion et reconversion",
      theme: "Travail et emploi",
      ras: "Estimer les éléments dont dépend le niveau d'emploi dans une économie",
      valeurs: "Responsabilité, autonomie",
      objectif: "présenter les dispositifs qui rapprochent compétences et besoins",
      supportMeta: "Documents, schémas, cahier",
      revision: [
        ["Qu'est-ce qu'une politique d'offre ?", "Une politique qui agit sur les conditions de production pour rendre l'embauche plus facile."],
        ["Qu'est-ce que le chômage structurel ?", "Un chômage durable lié à la structure de l'économie, qui résiste à la reprise."],
      ],
      mise: [
        "Un ouvrier perd son emploi après vingt ans dans le même atelier. Que lui faut-il pour retrouver un poste ?",
        "Un bilan de compétences, une formation adaptée et souvent un accompagnement : c'est tout l'objet de l'insertion et de la reconversion.",
      ],
      observation: "le schéma des dispositifs de formation et d'insertion",
      observationSupport: "Schéma des dispositifs de formation affiché ou distribué",
      technAna: "Lecture de schéma et étude de documents",
      qa: [
        ["Quel est l'objectif commun de ces dispositifs ?", "Rapprocher les compétences disponibles des besoins des entreprises : améliorer l'employabilité."],
        ["Qu'est-ce que l'employabilité ?", "La capacité d'une personne à trouver et à conserver un emploi, compte tenu de ses compétences et du marché."],
        ["Quel est le rôle de la formation initiale ?", "Donner les savoirs de base et une qualification reconnue avant l'entrée sur le marché du travail."],
        ["Quel est le rôle de la formation continue ?", "Entretenir et élever les compétences tout au long de la vie active, face aux mutations des métiers."],
        ["Qu'est-ce que l'apprentissage ?", "Une formation alternant périodes en entreprise et enseignement, qui donne une expérience réelle."],
        ["Qu'est-ce que l'insertion professionnelle ?", "L'ensemble des dispositifs qui accompagnent les jeunes et les publics éloignés de l'emploi vers un poste durable."],
        ["Qu'est-ce que la reconversion ?", "Le changement de métier, préparé par une formation adaptée, lorsque l'activité d'origine décline."],
        ["Quelles conditions de réussite ?", "L'identification des besoins réels des entreprises, la qualité de la formation et l'accompagnement après la formation."],
      ],
      synthese: "Donc, formation initiale, formation continue, insertion et reconversion poursuivent le même but : élever l'employabilité en rapprochant les compétences disponibles des besoins des entreprises. Leur efficacité dépend de la qualité de la formation, de l'anticipation des besoins et de l'accompagnement après la formation.",
      motsCles: ["employabilité", "formation initiale", "formation continue", "apprentissage", "insertion professionnelle", "reconversion", "alternance", "compétences"],
      image: { file: "t12_u3_formation.png", legende: "Figure 41 — Formation, insertion et reconversion." },
      contenu: [
        {
          sousTitre: "1. L'employabilité : un objectif commun",
          texte: "Tous ces dispositifs visent la même cible, à des moments différents de la vie active.",
          liste: [
            "L'employabilité est la capacité à trouver et à conserver un emploi.",
            "Elle dépend des compétences de la personne et de l'état du marché.",
            "Elle s'entretient : une compétence non utilisée se dégrade.",
          ],
        },
        {
          sousTitre: "2. Former avant et pendant la vie active",
          texte: "La formation n'est pas un moment unique, mais un continuum.",
          liste: [
            "Formation initiale : les savoirs de base et une qualification reconnue.",
            "Formation continue : entretenir et élever les compétences tout au long de la vie active.",
            "Apprentissage et alternance : former en travaillant, ce qui donne une expérience réelle.",
          ],
        },
        {
          sousTitre: "3. Insérer et reconvertir",
          texte: "Deux situations particulières demandent un accompagnement spécifique.",
          liste: [
            "Insertion : stages, apprentissage et tutorat pour les jeunes et les publics éloignés de l'emploi.",
            "Reconversion : changer de métier après une formation adaptée, quand l'activité d'origine décline.",
            "Accompagnement personnalisé : bilan de compétences, conseil, suivi après le placement.",
          ],
        },
        {
          sousTitre: "4. Les conditions de réussite",
          texte: "Un dispositif ne vaut que par son adéquation aux besoins réels.",
          liste: [
            "Identifier les besoins des entreprises du territoire avant de concevoir la formation.",
            "Assurer la qualité des enseignements et la reconnaissance du diplôme ou de la certification.",
            "Accompagner après la formation : le placement ne se décrète pas.",
            "Faciliter la mobilité : transport, hébergement, garde d'enfants.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "L'employabilité désigne…", opts: ["la capacité à trouver et conserver un emploi", "le nombre d'emplois disponibles", "le niveau des salaires"], ok: 0, expl: "Elle mêle compétences et état du marché." },
          { q: "La formation continue s'adresse…", opts: ["aux actifs tout au long de leur vie", "aux seuls élèves", "aux retraités"], ok: 0, expl: "Elle entretient les compétences." },
          { q: "L'apprentissage alterne…", opts: ["entreprise et enseignement", "école et retraite", "chômage et emploi"], ok: 0, expl: "Il forme en travaillant." },
          { q: "La reconversion prépare…", opts: ["un changement de métier", "un départ en retraite", "une augmentation de salaire"], ok: 0, expl: "Elle suit le déclin d'une activité." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une formation efficace se conçoit en identifiant d'abord les besoins des entreprises.", rep: true, expl: "L'adéquation aux besoins réels fait la différence." },
          { txt: "L'insertion ne concerne que les jeunes diplômés.", rep: false, expl: "Elle vise aussi les publics éloignés de l'emploi." },
          { txt: "L'accompagnement après la formation facilite le placement.", rep: true, expl: "Le suivi évite les ruptures de parcours." },
          { txt: "Une compétence non utilisée se conserve indéfiniment.", rep: false, expl: "L'inactivité prolongée déqualifie." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis l'employabilité.", r: "C'est la capacité d'une personne à trouver et à conserver un emploi, compte tenu de ses compétences et de l'état du marché du travail." },
          { q: "Quelle différence entre formation initiale et formation continue ?", r: "La formation initiale donne les bases et une qualification avant l'entrée sur le marché ; la formation continue entretient et élève les compétences tout au long de la vie active." },
          { q: "Qu'est-ce que l'insertion professionnelle ?", r: "C'est l'ensemble des dispositifs, comme le stage, l'apprentissage ou le tutorat, qui accompagnent les jeunes et les publics éloignés de l'emploi vers un poste durable." },
          { q: "Cite deux conditions de réussite d'une politique de formation.", r: "L'identification préalable des besoins réels des entreprises et l'accompagnement après la formation." },
        ]},
        { type: "appariement", consigne: "Relie chaque dispositif à sa définition.", pointsPar: 1, items: [
          { g: ["Formation en alternance", "Stage d'immersion pour un jeune", "Bilan puis changement de métier", "Cours du soir pour un salarié", "Remise à niveau après un chômage long"], d: ["Insertion", "Reconversion", "Apprentissage", "Formation continue", "Formation continue"], pairs: [[0, 2], [1, 0], [2, 1], [3, 3], [4, 4]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 46 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "L'organisation scientifique du travail : le taylorisme",
      theme: "Travail et emploi",
      ras: "Evaluer les différentes manières pour organiser le travail",
      valeurs: "Responsabilité, autonomie",
      objectif: "exposer les principes et les limites de l'organisation scientifique du travail",
      supportMeta: "Documents, schémas, cahier",
      revision: [
        ["Qu'est-ce que l'employabilité ?", "La capacité d'une personne à trouver et à conserver un emploi."],
        ["Qu'est-ce qu'un gain de productivité ?", "Une hausse de la production obtenue avec la même quantité de travail."],
      ],
      mise: [
        "Comment produire davantage avec les mêmes ouvriers au début du vingtième siècle ?",
        "En étudiant chaque geste, en le chronométrant et en confiant à chacun une tâche unique : c'est l'organisation scientifique du travail.",
      ],
      observation: "la scène d'atelier présentant l'organisation scientifique du travail",
      observationSupport: "Illustration d'atelier et documents sur le taylorisme",
      technAna: "Lecture de documents et observation dirigée",
      qa: [
        ["Qui est à l'origine de l'organisation scientifique du travail ?", "L'ingénieur américain Frederick Taylor, au tournant du vingtième siècle."],
        ["Quel est le principe de la division du travail ?", "Décomposer la fabrication en tâches simples et confier à chaque ouvrier une tâche unique et répétitive."],
        ["Qu'est-ce que la séparation conception-exécution ?", "Les ingénieurs et les bureaux conçoivent les méthodes ; les ouvriers les exécutent sans les discuter."],
        ["Qu'apporte le chronométrage ?", "Il mesure le temps de chaque geste et fixe une cadence, ce qui permet de définir une norme de production."],
        ["Qu'est-ce que le salaire au rendement ?", "Une rémunération indexée sur la quantité produite, destinée à stimuler l'effort."],
        ["Quels gains le taylorisme apporte-t-il ?", "Une forte hausse de la productivité, une baisse des coûts unitaires et une standardisation de la qualité."],
        ["Quelles sont ses limites ?", "La répétitivité, la perte d'autonomie, l'usure professionnelle et la démotivation des salariés."],
        ["Quelles critiques lui a-t-on adressées ?", "La parcellisation du travail vide le métier de son contenu et réduit l'ouvrier à un exécutant surveillé."],
      ],
      synthese: "Donc, le taylorisme organise le travail selon une méthode scientifique : division des tâches, chronométrage, séparation entre la conception et l'exécution, salaire au rendement. Il élève fortement la productivité, au prix d'un travail parcellaire, répétitif et étroitement contrôlé.",
      motsCles: ["taylorisme", "organisation scientifique du travail", "division du travail", "chronométrage", "parcellisation", "salaire au rendement", "standardisation", "productivité"],
      image: { file: "t12_u3_taylorisme.jpg", legende: "Figure 42 — L'organisation scientifique du travail : atelier taylorien." },
      contenu: [
        {
          sousTitre: "1. La méthode de Taylor",
          texte: "L'ingénieur Frederick Taylor propose d'appliquer la méthode scientifique au travail lui-même.",
          liste: [
            "Observer et décomposer chaque opération en gestes élémentaires.",
            "Chronométrer ces gestes pour en déduire la meilleure manière de faire.",
            "Fixer une norme : un temps et une méthode pour chaque tâche.",
          ],
        },
        {
          sousTitre: "2. Les principes d'organisation",
          texte: "Quatre principes structurent l'organisation scientifique du travail.",
          liste: [
            "Division du travail : une tâche unique et répétitive par poste.",
            "Séparation entre la conception, réservée aux bureaux, et l'exécution, laissée à l'atelier.",
            "Sélection et formation de l'ouvrier à la tâche précise qu'il devra accomplir.",
            "Salaire au rendement : la rémunération suit la quantité produite.",
          ],
        },
        {
          sousTitre: "3. Les gains obtenus",
          texte: "L'efficacité de la méthode explique sa diffusion rapide.",
          liste: [
            "Productivité fortement accrue : chacun se spécialise et perd moins de temps.",
            "Coût unitaire réduit et prix de vente plus bas.",
            "Qualité standardisée : le même geste donne le même résultat.",
          ],
        },
        {
          sousTitre: "4. Les limites et les critiques",
          texte: "Les effets sur les personnes ont été vivement contestés.",
          liste: [
            "Répétitivité et monotonie : le travail perd son intérêt.",
            "Perte d'autonomie : l'ouvrier n'a plus d'initiative sur sa méthode.",
            "Usure professionnelle : gestes répétés, troubles musculo-squelettiques.",
            "Démotivation et conflits, qui se traduisent par des arrêts et du turn-over.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "L'organisation scientifique du travail est l'œuvre de…", opts: ["Frederick Taylor", "Henry Ford", "Adam Smith"], ok: 0, expl: "Il publie ses principes au début du vingtième siècle." },
          { q: "La parcellisation consiste à…", opts: ["diviser le travail en tâches simples", "augmenter les salaires", "supprimer les cadences"], ok: 0, expl: "Chaque poste devient élémentaire." },
          { q: "Le chronométrage sert à…", opts: ["fixer le temps d'exécution de chaque geste", "mesurer la pause déjeuner", "calculer les congés"], ok: 0, expl: "Il définit la norme de production." },
          { q: "Une limite du taylorisme est…", opts: ["la répétitivité du travail", "la baisse de la productivité", "l'excès d'autonomie"], ok: 0, expl: "Le poste devient monotone et usant." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Dans l'atelier taylorien, l'ouvrier conçoit lui-même sa méthode de travail.", rep: false, expl: "La conception est réservée aux bureaux d'études." },
          { txt: "Le salaire au rendement indexe la rémunération sur la quantité produite.", rep: true, expl: "Il vise à stimuler l'effort." },
          { txt: "Le taylorisme accroît fortement la productivité.", rep: true, expl: "La spécialisation réduit les temps morts." },
          { txt: "La parcellisation enrichit le contenu du métier.", rep: false, expl: "Elle le réduit au contraire à un geste unique." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Qui est à l'origine de l'organisation scientifique du travail ?", r: "L'ingénieur américain Frederick Taylor, au tournant du vingtième siècle." },
          { q: "Cite trois principes de l'organisation taylorienne.", r: "La division du travail en tâches simples, la séparation entre la conception et l'exécution, et le chronométrage des gestes assorti d'un salaire au rendement." },
          { q: "Quels gains le taylorisme apporte-t-il ?", r: "Une forte hausse de la productivité, une baisse du coût unitaire et une qualité standardisée." },
          { q: "Cite deux limites de cette organisation du travail.", r: "La répétitivité et la monotonie du poste, ainsi que la perte d'autonomie et l'usure professionnelle." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Décomposer une fabrication en gestes élémentaires est la", suite: "parcellisation" },
          { debut: "Mesurer le temps de chaque geste est le", suite: "chronométrage" },
          { debut: "Les bureaux conçoivent, l'atelier exécute : c'est la séparation conception-", suite: "exécution" },
          { debut: "Une rémunération liée à la quantité produite est un salaire au", suite: "rendement" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 47 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le fordisme : intérêts et limites",
      theme: "Travail et emploi",
      ras: "Evaluer les différentes manières pour organiser le travail",
      valeurs: "Responsabilité, autonomie",
      objectif: "analyser le modèle fordiste et son évolution",
      supportMeta: "Documents, schémas, cahier",
      revision: [
        ["Quels sont les principes de l'organisation scientifique du travail ?", "La division des tâches, le chronométrage et la séparation entre conception et exécution."],
        ["Quelles sont les limites du taylorisme ?", "La répétitivité, la perte d'autonomie et l'usure professionnelle."],
      ],
      mise: [
        "Produire en masse ne sert à rien si personne ne peut acheter. Comment Ford a-t-il résolu le problème ?",
        "En payant ses ouvriers suffisamment pour qu'ils deviennent les clients du produit qu'ils fabriquent.",
      ],
      observation: "la scène de chaîne de montage",
      observationSupport: "Illustration de chaîne de montage et documents sur le fordisme",
      technAna: "Lecture de documents et observation dirigée",
      qa: [
        ["Qu'est-ce que le fordisme ?", "Un mode d'organisation associant la production en série à la chaîne et des salaires élevés, afin que les ouvriers puissent acheter les produits fabriqués."],
        ["Qui en est à l'origine ?", "L'industriel américain Henry Ford, qui met en place la chaîne de montage au début du vingtième siècle."],
        ["Qu'apporte le travail à la chaîne ?", "La pièce vient à l'ouvrier : les déplacements disparaissent, la cadence est imposée par le tapis roulant."],
        ["Qu'est-ce que la standardisation ?", "La fabrication de produits identiques, aux pièces interchangeables, ce qui abaisse le coût et simplifie la réparation."],
        ["Pourquoi Ford a-t-il relevé les salaires ?", "Pour retenir la main-d'œuvre, réduire le turn-over et créer une clientèle capable d'acheter la production de masse."],
        ["Quel compromis le fordisme instaure-t-il ?", "Un cercle vertueux : salaires élevés, consommation de masse, production de masse, gains de productivité."],
        ["Quelles sont les limites du modèle ?", "La rigidité face à une demande diversifiée, la monotonie du travail et les conflits sociaux liés aux cadences."],
        ["Comment le modèle a-t-il évolué ?", "La demande s'est personnalisée et la concurrence s'est mondialisée : les entreprises sont passées à une production plus souple et diversifiée."],
      ],
      synthese: "Donc, le fordisme associe la production de masse à la chaîne, la standardisation et des salaires élevés : les ouvriers deviennent les clients des produits qu'ils fabriquent. Ce compromis a soutenu une croissance durable, avant que la diversification de la demande et la concurrence mondiale n'imposent une production plus souple.",
      motsCles: ["fordisme", "chaîne de montage", "production de masse", "standardisation", "salaire élevé", "consommation de masse", "compromis fordiste", "production au plus juste"],
      image: { file: "t12_u3_fordisme.jpg", legende: "Figure 43 — Le fordisme : la chaîne de montage." },
      contenu: [
        {
          sousTitre: "1. La chaîne et la production de masse",
          texte: "Ford applique les principes tayloriens et y ajoute le convoyeur.",
          liste: [
            "Le produit avance vers l'ouvrier : les déplacements inutiles disparaissent.",
            "La cadence est imposée par la vitesse du tapis roulant.",
            "Les pièces sont standardisées et interchangeables.",
          ],
        },
        {
          sousTitre: "2. Le salaire élevé",
          texte: "L'innovation de Ford ne se limite pas à l'atelier : elle touche la rémunération.",
          liste: [
            "Un salaire nettement supérieur au marché, destiné à fixer la main-d'œuvre.",
            "La réduction d'un turn-over coûteux en formation et en qualité.",
            "La création d'une clientèle : les ouvriers achètent ce qu'ils produisent.",
          ],
        },
        {
          sousTitre: "3. Le cercle vertueux fordiste",
          texte: "Le modèle relie production et consommation de masse dans un même mouvement.",
          liste: [
            "Les gains de productivité permettent des salaires plus élevés.",
            "Ces salaires alimentent une demande de masse.",
            "La production de masse répond à cette demande à un coût toujours plus bas.",
          ],
        },
        {
          sousTitre: "4. Les limites et l'évolution",
          texte: "Le modèle s'essouffle lorsque la demande change de nature.",
          liste: [
            "Rigidité : la chaîne supporte mal la personnalisation des produits.",
            "Monotonie et cadences élevées : conflits, absentéisme, turn-over.",
            "Concurrence mondiale et recherche de qualité : il faut produire plus souple et mieux.",
            "D'où le passage progressif à la production au plus juste et à des formes d'organisation plus flexibles.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le fordisme est l'œuvre de…", opts: ["Henry Ford", "Frederick Taylor", "Adam Smith"], ok: 0, expl: "Il met en place la chaîne de montage." },
          { q: "Le tapis roulant impose…", opts: ["la cadence de travail", "le salaire", "le nombre d'heures d'ouverture"], ok: 0, expl: "La pièce vient à l'ouvrier." },
          { q: "Ford relève les salaires pour…", opts: ["créer une clientèle pour la production de masse", "réduire ses coûts immédiats", "supprimer la concurrence"], ok: 0, expl: "Ses ouvriers achètent ses produits." },
          { q: "Une limite du fordisme est…", opts: ["sa rigidité face à une demande diversifiée", "son coût de main-d'œuvre trop bas", "sa faible productivité"], ok: 0, expl: "La chaîne supporte mal les variantes." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Dans le fordisme, les produits sont standardisés.", rep: true, expl: "Les pièces sont interchangeables." },
          { txt: "Le salaire élevé visait uniquement à réduire les coûts immédiats.", rep: false, expl: "Il visait aussi à créer une clientèle." },
          { txt: "Le compromis fordiste relie hausse de productivité et hausse de la consommation.", rep: true, expl: "C'est le cercle vertueux du modèle." },
          { txt: "Le fordisme s'est maintenu sans évolution jusqu'à aujourd'hui.", rep: false, expl: "La demande personnalisée a imposé plus de souplesse." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Qu'est-ce que le fordisme ?", r: "C'est un mode d'organisation qui associe la production en série à la chaîne, la standardisation et des salaires élevés, pour que les ouvriers deviennent les clients des produits fabriqués." },
          { q: "Pourquoi Henry Ford a-t-il relevé les salaires ?", r: "Pour retenir la main-d'œuvre, réduire un turn-over coûteux et créer une clientèle capable d'acheter la production de masse." },
          { q: "Décris le cercle vertueux fordiste.", r: "Les gains de productivité permettent des salaires plus élevés, ces salaires alimentent une demande de masse, et la production de masse y répond à un coût toujours plus bas." },
          { q: "Cite deux limites du fordisme.", r: "La rigidité face à une demande diversifiée et la monotonie du travail à la chaîne, source de conflits et de turn-over." },
        ]},
        { type: "appariement", consigne: "Relie chaque élément à son effet.", pointsPar: 1, items: [
          { g: ["Tapis roulant", "Pièces interchangeables", "Salaire élevé", "Demande personnalisée", "Gains de productivité"], d: ["Standardisation", "Cadence imposée", "Production plus souple", "Consommation de masse", "Consommation de masse"], pairs: [[0, 1], [1, 0], [2, 3], [3, 2], [4, 4]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 48 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les nouvelles formes d'organisation du travail",
      theme: "Travail et emploi",
      ras: "Evaluer les différentes manières pour organiser le travail",
      valeurs: "Responsabilité, autonomie",
      objectif: "comparer les formes nouvelles d'organisation au modèle taylorien-fordien",
      supportMeta: "Documents, schémas, cahier",
      revision: [
        ["Qu'est-ce que le fordisme ?", "La production de masse à la chaîne, associée à des salaires élevés et à la consommation de masse."],
        ["Quelle est la principale limite du fordisme ?", "Sa rigidité face à une demande devenue diversifiée et personnalisée."],
      ],
      mise: [
        "Pourquoi beaucoup d'entreprises ont-elles abandonné la chaîne rigide ?",
        "Parce que les clients veulent des produits variés et livrés vite : il faut des équipes capables de s'adapter, pas seulement d'exécuter.",
      ],
      observation: "le schéma comparant les deux modèles d'organisation",
      observationSupport: "Schéma comparatif des organisations du travail affiché ou distribué",
      technAna: "Lecture de schéma et débat dirigé",
      qa: [
        ["Quelles sont les principales formes nouvelles d'organisation ?", "La polyvalence, les groupes de travail autonomes, la production au plus juste, la qualité totale, la souplesse des horaires et le travail de plateforme."],
        ["Qu'est-ce que la polyvalence ?", "La capacité d'un salarié à occuper plusieurs postes et à passer de l'un à l'autre selon les besoins."],
        ["Qu'est-ce qu'un groupe de travail autonome ?", "Une équipe qui organise elle-même la répartition des tâches et la résolution des problèmes courants."],
        ["Qu'est-ce que la production au plus juste ?", "Fabriquer juste à temps et juste ce qu'il faut, en limitant les stocks et les gaspillages."],
        ["Qu'est-ce que la qualité totale ?", "La recherche du zéro défaut, chaque opérateur contrôlant son propre travail."],
        ["Quels effets sur les salariés ?", "Plus d'initiative et de compétences mobilisées, mais aussi plus de responsabilité individuelle et une vigilance accrue sur la charge de travail."],
        ["Quels risques ces formes comportent-elles ?", "L'intensification du travail, la pression du résultat et l'isolement, notamment dans le travail de plateforme."],
        ["Remplacent-elles totalement l'ancien modèle ?", "Non : taylorisme et fordisme subsistent dans les activités standardisées, et les deux logiques coexistent souvent dans une même entreprise."],
      ],
      synthese: "Donc, les formes nouvelles recherchent la réactivité et la qualité : polyvalence, équipes autonomes, production au plus juste et numérique. Elles mobilisent davantage l'intelligence des salariés, tout en faisant peser sur eux davantage de responsabilité et en soulevant la question de la charge de travail et de la stabilité de l'emploi.",
      motsCles: ["polyvalence", "groupe autonome", "production au plus juste", "qualité totale", "flexibilité", "numérique", "plateforme", "charge de travail"],
      image: { file: "t12_u3_nouvelles_formes.png", legende: "Figure 44 — Les nouvelles formes d'organisation du travail." },
      contenu: [
        {
          sousTitre: "1. Ce qui change par rapport au modèle taylorien-fordien",
          texte: "Le modèle ancien visait la répétition ; les formes nouvelles visent l'adaptation.",
          liste: [
            "Hiérarchie courte et contrôle exercé par les pairs, plutôt que surveillance directe.",
            "Postes élargis : plusieurs tâches, plusieurs machines.",
            "Objectif : répondre à une demande variable et personnalisée.",
          ],
        },
        {
          sousTitre: "2. Les principales formes nouvelles",
          texte: "Plusieurs méthodes, souvent combinées, structurent l'organisation contemporaine.",
          liste: [
            "Polyvalence et rotation des postes : le salarié passe d'une tâche à l'autre.",
            "Groupes de travail autonomes : l'équipe répartit elle-même le travail.",
            "Production au plus juste : zéro stock inutile, livraison au moment voulu.",
            "Qualité totale : chaque opérateur contrôle son propre travail.",
            "Numérique et télétravail : coordination à distance, horaires plus souples.",
            "Travail de plateforme : missions courtes, intermédiées par une application.",
          ],
        },
        {
          sousTitre: "3. Ce que recherchent les entreprises",
          texte: "L'objectif est la réactivité et la qualité plutôt que le seul volume.",
          liste: [
            "Répondre vite à une demande variée et changeante.",
            "Réduire les défauts et les coûts inutiles.",
            "Obtenir l'implication des salariés dans l'amélioration continue.",
          ],
        },
        {
          sousTitre: "4. Ce que cela change pour les salariés",
          texte: "Le bilan est ambivalent : plus d'autonomie, mais plus d'exigence.",
          liste: [
            "Atouts : initiative, compétences mobilisées, travail moins monotone.",
            "Contraintes : responsabilité individuelle accrue, pression du résultat.",
            "Point de vigilance : la charge de travail et la stabilité de l'emploi, surtout dans le travail de plateforme.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La polyvalence désigne…", opts: ["la capacité à occuper plusieurs postes", "le salaire au rendement", "la parcellisation"], ok: 0, expl: "Le salarié change de tâche selon les besoins." },
          { q: "La production au plus juste vise…", opts: ["à limiter les stocks et les gaspillages", "à produire le plus possible", "à standardiser les horaires"], ok: 0, expl: "On fabrique juste à temps et juste ce qu'il faut." },
          { q: "Un groupe de travail autonome…", opts: ["répartit lui-même ses tâches", "n'a aucun objectif", "est dirigé au geste près"], ok: 0, expl: "L'équipe s'organise elle-même." },
          { q: "Un risque des formes nouvelles est…", opts: ["l'intensification du travail", "la baisse des compétences requises", "la hausse des stocks"], ok: 0, expl: "La responsabilité individuelle s'accroît." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Les formes nouvelles ont totalement fait disparaître le travail à la chaîne.", rep: false, expl: "Les deux logiques coexistent souvent dans une même entreprise." },
          { txt: "La qualité totale confie à chaque opérateur le contrôle de son propre travail.", rep: true, expl: "L'objectif est le zéro défaut." },
          { txt: "Le travail de plateforme pose la question de la stabilité de l'emploi.", rep: true, expl: "Les missions y sont courtes et fragmentées." },
          { txt: "La polyvalence réduit toujours la charge de travail.", rep: false, expl: "Elle peut au contraire l'intensifier." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite trois formes nouvelles d'organisation du travail.", r: "La polyvalence, les groupes de travail autonomes et la production au plus juste." },
          { q: "Qu'est-ce que la production au plus juste ?", r: "C'est produire juste à temps et juste ce qu'il faut, en limitant les stocks et les gaspillages." },
          { q: "Quels atouts ces formes apportent-elles aux salariés ?", r: "Elles mobilisent davantage leur initiative et leurs compétences, et rendent le travail moins monotone." },
          { q: "Quels risques comportent-elles ?", r: "Une responsabilité individuelle accrue, une pression du résultat plus forte et une charge de travail à surveiller, notamment dans le travail de plateforme." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Occuper successivement plusieurs postes est la", suite: "polyvalence" },
          { debut: "Fabriquer juste à temps et sans stock inutile est la production au plus", suite: "juste" },
          { debut: "Rechercher le zéro défaut est la qualité", suite: "totale" },
          { debut: "Une équipe qui répartit elle-même ses tâches est un groupe", suite: "autonome" },
        ]},
      ],
    },
  ],
};

module.exports = U;
