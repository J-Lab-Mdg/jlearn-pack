// ============================================================
// Unité IV — Revenu et consommation (PE T10 — 14 heures)
// RAS 1 : Déterminer le lien entre la consommation et le revenu des ménages
// RAS 2 : Examiner les principaux déterminants de la consommation
// Découpage : 6 séances de cours + 1 révision + 1 sujet d'examen
// Valeurs : Respect de soi et d'autrui, Culture de l'excellence
// ============================================================

const U = {
  num: "IV",
  titre: "Revenu et consommation",
  ras: "Déterminer le lien entre la consommation et le revenu des ménages · Examiner les principaux déterminants de la consommation",
  valeurs: "Respect de soi et d'autrui, Culture de l'excellence",
  duree: "14 heures",
  themes: [
    "Les revenus des ménages",
    "L'utilisation du revenu disponible",
    "Les besoins et la pyramide de Maslow",
    "Les déterminants économiques de la consommation",
    "Les déterminants socioculturels de la consommation",
    "Effets de distinction et d'imitation",
  ],
  topics: [
    // ---------------------------------------------------------
    // SÉANCE 19 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les revenus des ménages : revenus primaires et revenus de transfert",
      theme: "Revenu et consommation",
      ras: "Déterminer le lien entre la consommation et le revenu des ménages",
      valeurs: "Respect de soi et d'autrui, Culture de l'excellence",
      objectif: "définir le ménage et le revenu, et distinguer les différentes sources de revenus",
      supportMeta: "Documents sur les revenus d'une famille, tableau de classement, cahier",
      revision: [
        ["Qu'est-ce que le profit d'une entreprise ?", "L'excédent des recettes sur l'ensemble des charges."],
        ["Cite deux ressources mobilisées par une entreprise.", "Les ressources humaines et les ressources financières."],
      ],
      mise: [
        "D'où vient l'argent dont dispose ta famille chaque mois ?",
        "Du travail des parents, d'une activité agricole ou artisanale, d'une pension ou d'une aide.",
      ],
      observation: "le tableau des sources de revenus affiché au tableau",
      observationSupport: "Tableau des sources de revenus (salaire, activité indépendante, loyer, pension, aide) affiché ou distribué",
      technAna: "Étude de document, brainstorming et travail de groupe",
      qa: [
        ["Qu'est-ce qu'un ménage ?", "Un ménage est l'ensemble des personnes qui vivent sous le même toit et mettent en commun tout ou partie de leurs ressources."],
        ["Qu'est-ce qu'un revenu ?", "C'est une somme d'argent qu'une personne ou un ménage reçoit régulièrement, en échange d'un travail ou d'un bien, ou à titre d'aide."],
        ["Qu'est-ce qu'un revenu primaire ?", "Un revenu reçu en contrepartie d'une participation à la production : le salaire, le revenu d'un artisan ou d'un paysan, le loyer d'un bien loué, les intérêts d'un placement."],
        ["Qu'est-ce qu'un revenu mixte ?", "Le revenu d'un travailleur indépendant qui mélange rémunération de son travail et profit de son activité : le paysan, l'artisan, le petit commerçant."],
        ["Qu'est-ce qu'un revenu de transfert ?", "Une somme reçue sans contrepartie de production : pension de retraite, allocation familiale, bourse, aide sociale, indemnité."],
        ["Qui verse les revenus de transfert ?", "L'État, les collectivités, les organismes de protection sociale, ou encore des proches qui envoient de l'argent à leur famille."],
        ["Quelle différence y a-t-il entre revenu et revenu disponible ?", "Le revenu disponible est ce qui reste au ménage après les impôts et les cotisations : c'est la somme qu'il peut vraiment consommer ou épargner."],
      ],
      synthese: "Donc, un ménage vit des revenus qu'il reçoit. On distingue les revenus primaires, gagnés en participant à la production — salaire, revenu mixte de l'indépendant, revenu du patrimoine — et les revenus de transfert, reçus sans contrepartie productive. Après impôts et cotisations, ce qui reste forme le revenu disponible, que le ménage partage entre consommation et épargne.",
      motsCles: ["ménage", "revenu", "revenu primaire", "revenu mixte", "revenu de transfert", "revenu disponible", "salaire"],
      contenu: [
        {
          sousTitre: "1. Le ménage",
          texte: "En économie, le ménage est l'unité de base de la consommation : ce sont les personnes qui partagent un logement et mettent leurs ressources en commun pour se nourrir, se loguer, se soigner et éduquer les enfants.",
          liste: [
            "Une famille nombreuse vivant dans la même maison.",
            "Un couple sans enfant, ou deux frères partageant un logement.",
            "Une personne seule qui gère son propre budget constitue aussi un ménage.",
          ],
        },
        {
          sousTitre: "2. Les revenus primaires",
          texte: "Les revenus primaires rémunèrent la participation à la production. Ils sont la contrepartie d'un travail ou de la mise à disposition d'un bien.",
          liste: [
            "Le salaire : rémunération du travail d'un employé, versée par un employeur.",
            "Le revenu mixte : celui du travailleur indépendant, qui rémunère à la fois son travail et son activité (paysan, artisan, commerçant).",
            "Le revenu du patrimoine : loyer perçu, intérêts d'un compte, dividende d'une entreprise, vente d'une récolte issue d'une terre possédée.",
          ],
        },
        {
          sousTitre: "3. Les revenus de transfert",
          texte: "Les revenus de transfert sont reçus sans qu'aucune production soit fournie en échange. Ils visent à compenser une situation — vieillesse, maladie, charge de famille, difficulté.",
          liste: [
            "Les pensions de retraite et les indemnités de maladie ou d'accident du travail.",
            "Les allocations familiales et les aides sociales.",
            "Les bourses scolaires et les aides aux étudiants.",
            "Les envois d'argent d'un proche parti travailler ailleurs.",
          ],
        },
        {
          sousTitre: "4. Du revenu au revenu disponible",
          texte: "Le revenu disponible est la somme dont le ménage dispose réellement pour consommer et épargner.",
          liste: [
            "On additionne les revenus primaires et les revenus de transfert.",
            "On retranche les impôts directs et les cotisations sociales.",
            "Ce qui reste est le revenu disponible : il finance la consommation et l'épargne.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Budget mensuel d'un ménage :",
          liste: [
            "Salaire du père : 350 000 ariary (revenu primaire).",
            "Vente de légumes du jardin : 80 000 ariary (revenu mixte).",
            "Allocation familiale : 30 000 ariary (revenu de transfert).",
            "Impôts et cotisations : 40 000 ariary.",
            "Revenu disponible : 350 000 + 80 000 + 30 000 − 40 000 = 420 000 ariary.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Un salaire est un revenu…", opts: ["primaire", "de transfert", "disponible"], ok: 0, expl: "Il rémunère le travail fourni dans la production." },
          { q: "Une pension de retraite est un revenu…", opts: ["de transfert", "primaire", "mixte"], ok: 0, expl: "Elle est versée sans contrepartie de production." },
          { q: "Le revenu d'un paysan qui vend sa récolte est un revenu…", opts: ["mixte", "de transfert", "salarial"], ok: 0, expl: "Il rémunère à la fois son travail et son activité." },
          { q: "Le revenu disponible est égal aux revenus reçus…", opts: ["moins les impôts et cotisations", "plus les impôts", "moins la consommation"], ok: 0, expl: "C'est ce qui reste après les prélèvements obligatoires." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Un loyer perçu sur une maison louée est un revenu du patrimoine.", rep: true, expl: "Il provient de la propriété d'un bien, pas d'un travail." },
          { txt: "Une bourse scolaire est un revenu primaire.", rep: false, expl: "C'est un transfert : aucune production n'est fournie en échange." },
          { txt: "Les cotisations sociales sont prélevées avant le revenu disponible.", rep: true, expl: "Elles sont retranchées des revenus reçus." },
          { txt: "Un ménage ne peut être composé que de personnes d'une même famille.", rep: false, expl: "Vivre sous le même toit et partager un budget suffit à définir le ménage." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Donne la définition d'un revenu de transfert.", r: "Un revenu de transfert est une somme reçue sans contrepartie de production, comme une pension, une allocation ou une bourse." },
          { q: "Cite deux exemples de revenus primaires.", r: "Un salaire et le revenu mixte d'un artisan (ou un loyer perçu sur un bien loué)." },
          { q: "Quelle différence y a-t-il entre le revenu reçu et le revenu disponible ?", r: "Le revenu disponible est ce qui reste après le paiement des impôts et des cotisations sociales." },
          { q: "Pourquoi le revenu d'un artisan est-il qualifié de mixte ?", r: "Parce qu'il rémunère en même temps le travail de l'artisan et le profit de son activité, sans qu'on puisse les séparer facilement." },
        ]},
        { type: "appariement", consigne: "Relie chaque somme à sa catégorie de revenu.", pointsPar: 1, items: [
          { g: ["Salaire d'un employé", "Pension de retraite", "Vente de la récolte d'un paysan", "Loyer d'une maison louée"], d: ["Revenu de transfert", "Revenu mixte", "Revenu du patrimoine", "Revenu du travail"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 20 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "L'utilisation du revenu disponible : consommation et épargne",
      theme: "Revenu et consommation",
      ras: "Déterminer le lien entre la consommation et le revenu des ménages",
      valeurs: "Respect de soi et d'autrui, Culture de l'excellence",
      objectif: "distinguer les formes de consommation et expliquer le rôle de l'épargne",
      supportMeta: "Documents, liste de dépenses d'un ménage, cahier",
      revision: [
        ["Qu'est-ce qu'un revenu de transfert ?", "Une somme reçue sans contrepartie de production, comme une pension ou une allocation."],
        ["Comment passe-t-on du revenu reçu au revenu disponible ?", "En retranchant les impôts et les cotisations sociales."],
      ],
      mise: [
        "Quand ta famille reçoit l'argent du mois, que fait-elle en premier ?",
        "Elle achète à manger, paie le loyer et l'école, puis garde ce qu'elle peut pour les imprévus.",
      ],
      observation: "la liste de dépenses d'un ménage affichée au tableau",
      observationSupport: "Liste de dépenses d'un ménage (alimentation, loyer, école, transport, réserve) affichée ou distribuée",
      technAna: "Étude de document et travail de groupe",
      qa: [
        ["Qu'est-ce que la consommation ?", "L'utilisation de biens et de services pour satisfaire un besoin : se nourrir, se loguer, se soigner, s'instruire, se déplacer."],
        ["Qu'est-ce que la consommation individuelle ?", "Une consommation dont une seule personne ou un seul ménage profite directement : un plat, un vêtement, un billet de transport."],
        ["Qu'est-ce que la consommation collective ?", "Une consommation dont plusieurs personnes profitent en même temps, souvent financée par la collectivité : une route, une école publique, un centre de santé, l'éclairage public."],
        ["Qu'est-ce qu'une consommation ostentatoire ?", "Une consommation faite d'abord pour montrer sa réussite sociale : un téléphone très coûteux, une voiture de luxe, des vêtements de marque achetés pour être vus."],
        ["Qu'est-ce que l'épargne ?", "La part du revenu qui n'est pas consommée : on la garde pour plus tard, pour un projet ou pour faire face à un imprévu."],
        ["Quelles sont les formes d'épargne ?", "Le placement — déposer l'argent sur un compte, acheter un bien, prêter contre intérêt — et la thésaurisation — garder l'argent chez soi, sans le faire fructifier."],
        ["Pourquoi l'épargne est-elle utile à un ménage ?", "Elle permet de faire face aux imprévus, de financer un projet et de ne pas dépendre d'un emprunt coûteux."],
      ],
      synthese: "Donc, le revenu disponible se partage entre la consommation, qui satisfait les besoins immédiats, et l'épargne, qui prépare l'avenir. La consommation peut être individuelle, collective ou ostentatoire ; l'épargne prend la forme d'un placement, qui rapporte, ou d'une thésaurisation, qui conserve l'argent sans le faire fructifier. Un ménage prudent épargne avant de consommer le superflu.",
      motsCles: ["consommation", "consommation individuelle", "consommation collective", "consommation ostentatoire", "épargne", "placement", "thésaurisation"],
      contenu: [
        {
          sousTitre: "1. Consommer",
          texte: "Consommer, c'est utiliser un bien ou un service pour satisfaire un besoin. La consommation absorbe la plus grande part du revenu d'un ménage.",
          liste: [
            "Se nourrir : riz, légumes, poisson, huile.",
            "Se loger : loyer, eau, électricité, entretien.",
            "Se soigner : consultation, médicaments.",
            "S'instruire : frais de scolarité, fournitures, transport scolaire.",
            "Se déplacer et communiquer : transport, téléphone.",
          ],
        },
        {
          sousTitre: "2. Consommation individuelle et consommation collective",
          texte: "La différence tient au nombre de bénéficiaires et à la manière dont l'usage est partagé.",
          liste: [
            "Consommation individuelle : un seul ménage profite du bien acheté ; il peut en exclure les autres (un repas, une chemise).",
            "Consommation collective : plusieurs personnes en profitent en même temps, sans que l'usage de l'un empêche celui de l'autre (une route, un centre de santé public).",
            "La consommation collective est souvent non marchande : elle est financée par l'impôt.",
          ],
        },
        {
          sousTitre: "3. La consommation ostentatoire",
          texte: "Certaines dépenses servent moins à satisfaire un besoin qu'à afficher une position sociale. On parle de consommation ostentatoire.",
          liste: [
            "Elle vise le regard des autres : objets de marque, véhicules coûteux, réceptions somptueuses.",
            "Elle peut déséquilibrer le budget d'un ménage et réduire l'épargne.",
            "Elle est entretenue par la publicité et par l'effet d'imitation.",
          ],
        },
        {
          sousTitre: "4. L'épargne",
          texte: "L'épargne est la part du revenu qui n'est pas dépensée. Elle n'est pas une perte : c'est un report de consommation.",
          liste: [
            "Le placement : l'argent est confié à une banque, à une mutuelle ou placé dans un bien ; il peut rapporter un intérêt ou prendre de la valeur.",
            "La thésaurisation : l'argent est conservé chez soi, en espèces, sans rapport ; il reste disponible mais perd de la valeur avec la hausse des prix.",
            "L'épargne de précaution : la réserve gardée pour une maladie, une réparation ou une mauvaise récolte.",
            "L'épargne de projet : mise de côté pour acheter un terrain, financer des études ou créer une activité.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Répartition du revenu disponible d'un ménage de 420 000 ariary :",
          liste: [
            "Alimentation : 180 000 ariary — consommation individuelle.",
            "Loyer, eau, électricité : 70 000 ariary — consommation individuelle.",
            "École et transport des enfants : 60 000 ariary — consommation individuelle.",
            "Santé : 30 000 ariary — consommation individuelle.",
            "Épargne déposée à la mutuelle : 50 000 ariary — placement de précaution.",
            "Reste pour imprévus : 30 000 ariary.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une route éclairée est une consommation…", opts: ["collective", "individuelle", "ostentatoire"], ok: 0, expl: "Tout le monde en profite en même temps, sans exclusion." },
          { q: "L'épargne est…", opts: ["la part du revenu non consommée", "un impôt", "un salaire"], ok: 0, expl: "C'est un report de consommation vers l'avenir." },
          { q: "Garder des billets chez soi s'appelle…", opts: ["la thésaurisation", "un placement bancaire", "un investissement productif"], ok: 0, expl: "L'argent est conservé sans rapporter." },
          { q: "Acheter un objet de marque surtout pour être vu relève de la consommation…", opts: ["ostentatoire", "collective", "de subsistance"], ok: 0, expl: "Le but est d'afficher une position sociale." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "L'épargne est une dépense inutile.", rep: false, expl: "Elle permet de faire face aux imprévus et de financer un projet." },
          { txt: "Une consommation collective peut être financée par l'impôt.", rep: true, expl: "Routes, écoles publiques et centres de santé en sont des exemples." },
          { txt: "La thésaurisation fait fructifier l'argent.", rep: false, expl: "Elle le conserve sans intérêt et il perd de la valeur si les prix augmentent." },
          { txt: "La consommation ostentatoire peut déséquilibrer le budget d'un ménage.", rep: true, expl: "Elle oriente l'argent vers l'apparence plutôt que vers les besoins essentiels." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Donne la définition de l'épargne.", r: "L'épargne est la part du revenu disponible qui n'est pas consommée et qui est mise de côté pour l'avenir." },
          { q: "Quelle différence y a-t-il entre consommation individuelle et consommation collective ?", r: "La consommation individuelle profite à un seul ménage, tandis que la consommation collective profite à plusieurs personnes en même temps." },
          { q: "Quelle différence y a-t-il entre placement et thésaurisation ?", r: "Le placement confie l'argent à un organisme ou l'investit dans un bien pour le faire fructifier, tandis que la thésaurisation le conserve sans rapport." },
          { q: "Cite deux raisons d'épargner pour un ménage.", r: "Faire face à un imprévu comme une maladie, et financer un projet comme l'achat d'un terrain ou la scolarité des enfants." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["consommation", "épargne", "collective", "ostentatoire", "placement"], items: [
          { phrase: "La part du revenu qui n'est pas dépensée forme l'_________.", mot: "épargne" },
          { phrase: "Une route utilisée par tous est une consommation _________.", mot: "collective" },
          { phrase: "Acheter pour paraître est une consommation _________.", mot: "ostentatoire" },
          { phrase: "Déposer de l'argent sur un compte rémunéré est un _________.", mot: "placement" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 21 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les besoins et la pyramide de Maslow",
      theme: "Revenu et consommation",
      ras: "Déterminer le lien entre la consommation et le revenu des ménages",
      valeurs: "Respect de soi et d'autrui, Culture de l'excellence",
      objectif: "citer les différents types de besoins et les classer selon la pyramide de Maslow",
      supportMeta: "Schéma de la pyramide de Maslow, documents, cahier",
      revision: [
        ["Qu'est-ce que l'épargne ?", "La part du revenu disponible qui n'est pas consommée et qui est mise de côté."],
        ["Cite une forme de consommation collective.", "Une route, une école publique ou un centre de santé."],
      ],
      mise: [
        "Si tu n'as rien mangé depuis ce matin, à quoi penses-tu le plus ?",
        "À manger : avant de penser au téléphone ou aux vêtements, il faut satisfaire les besoins vitaux.",
      ],
      observation: "le schéma de la pyramide de Maslow affiché au tableau",
      observationSupport: "Schéma de la pyramide de Maslow affiché ou distribué",
      technAna: "Étude de document et classement dirigé",
      qa: [
        ["Qu'est-ce qu'un besoin ?", "Une exigence qu'il faut satisfaire pour vivre et vivre correctement : manger, être en sécurité, appartenir à un groupe, être reconnu, se réaliser."],
        ["Quels sont les besoins de la base de la pyramide ?", "Les besoins physiologiques : se nourrir, boire, dormir, se vêtir, se loger, se soigner."],
        ["Quels sont les besoins du deuxième niveau ?", "Les besoins de sécurité : un logement sûr, un revenu stable, la protection contre la violence et la maladie."],
        ["Quels sont les besoins du troisième niveau ?", "Les besoins d'appartenance : être aimé de sa famille, avoir des amis, faire partie d'un groupe, d'un quartier, d'une équipe."],
        ["Quels sont les besoins des deux niveaux supérieurs ?", "Les besoins d'estime, c'est-à-dire être reconnu et respecté, puis les besoins d'accomplissement, c'est-à-dire réaliser ce dont on est capable."],
        ["Que dit la logique de la pyramide ?", "Les besoins de la base demandent à être satisfaits avant les autres : on ne cherche vraiment l'estime ou l'accomplissement que lorsque la faim et l'insécurité sont écartées."],
        ["Cette hiérarchie est-elle la même pour tous ?", "Elle varie selon l'âge, la culture et la situation : chacun peut accorder plus d'importance à un niveau, mais la base reste vitale pour tous."],
      ],
      synthese: "Donc, les besoins des ménages ne sont pas tous de même nature ni de même urgence. La pyramide de Maslow les classe en cinq niveaux : les besoins physiologiques, la sécurité, l'appartenance, l'estime et l'accomplissement de soi. La logique de la pyramide est qu'on satisfait d'abord la base avant de chercher les niveaux supérieurs, même si chacun peut nuancer cet ordre selon sa situation.",
      motsCles: ["besoin", "pyramide de Maslow", "besoins physiologiques", "sécurité", "appartenance", "estime", "accomplissement"],
      image: { file: "u4_maslow.png", legende: "Figure 7 — La pyramide des besoins de Maslow." },
      contenu: [
        {
          sousTitre: "1. Besoins et consommation",
          texte: "Consommer, c'est répondre à des besoins. Comprendre les besoins permet de comprendre l'ordre dans lequel un ménage dépense son revenu.",
          liste: [
            "Un besoin vital ne peut pas être reporté : manger, boire, se soigner.",
            "Un besoin de confort peut être différé : changer de téléphone, voyager.",
            "Un besoin d'apparence peut être supprimé : objets de marque, sorties coûteuses.",
          ],
        },
        {
          sousTitre: "2. Niveau 1 — Les besoins physiologiques",
          texte: "Ce sont les besoins du corps, indispensables à la survie. Ils occupent la base de la pyramide.",
          liste: [
            "Se nourrir et boire de l'eau potable.",
            "Dormir et se protéger du froid et de la pluie.",
            "Se vêtir et entretenir son logement.",
            "Se soigner en cas de maladie.",
          ],
        },
        {
          sousTitre: "3. Niveau 2 — Les besoins de sécurité",
          texte: "Une fois les besoins vitaux assurés, on cherche la stabilité et la protection.",
          liste: [
            "Disposer d'un logement sûr et d'un revenu régulier.",
            "Être protégé contre la violence, le vol et les accidents.",
            "Pouvoir faire face à la maladie grâce à une épargne ou une assurance.",
            "Garder son emploi ou son activité.",
          ],
        },
        {
          sousTitre: "4. Niveau 3 — Les besoins d'appartenance",
          texte: "L'être humain a besoin de liens : famille, amis, voisinage, groupe religieux ou association.",
          liste: [
            "Être aimé et accepté dans sa famille.",
            "Avoir des amis et participer à la vie du quartier.",
            "Appartenir à un groupe : équipe sportive, chorale, association de villageois, coopérative.",
          ],
        },
        {
          sousTitre: "5. Niveaux 4 et 5 — Estime et accomplissement",
          texte: "Les deux niveaux supérieurs concernent la place que l'on occupe et ce que l'on fait de ses capacités.",
          liste: [
            "Estime : être respecté, reconnu pour son travail, obtenir un diplôme ou une responsabilité.",
            "Accomplissement : réaliser un projet personnel, créer une entreprise, transmettre un savoir, mener une œuvre.",
            "Ces niveaux supposent que la base est assurée : on ne se réalise pas le ventre vide.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Classer des dépenses selon la pyramide :",
          liste: [
            "Acheter du riz et de l'huile : besoin physiologique.",
            "Réparer la porte de la maison : besoin de sécurité.",
            "Cotiser à une association du quartier : besoin d'appartenance.",
            "Passer un diplôme : besoin d'estime.",
            "Créer sa propre entreprise : besoin d'accomplissement.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "À la base de la pyramide de Maslow se trouvent les besoins…", opts: ["physiologiques", "d'estime", "d'accomplissement"], ok: 0, expl: "Ce sont les besoins vitaux du corps." },
          { q: "Le besoin d'appartenance correspond à…", opts: ["avoir des amis et faire partie d'un groupe", "manger à sa faim", "créer une entreprise"], ok: 0, expl: "Il s'agit des liens avec les autres." },
          { q: "Le sommet de la pyramide correspond au besoin…", opts: ["d'accomplissement de soi", "de sécurité", "physiologique"], ok: 0, expl: "C'est réaliser ce dont on est capable." },
          { q: "Réparer la porte de sa maison relève surtout du besoin de…", opts: ["sécurité", "physiologique", "d'accomplissement"], ok: 0, expl: "C'est se protéger contre les intrusions et les intempéries." },
        ]},
        { type: "appariement", consigne: "Relie chaque dépense au niveau de besoin correspondant.", pointsPar: 1, items: [
          { g: ["Acheter du riz", "Cotiser à une association", "Passer un diplôme", "Créer son entreprise"], d: ["Appartenance", "Estime", "Accomplissement", "Physiologique"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite les cinq niveaux de la pyramide de Maslow.", r: "Les besoins physiologiques, la sécurité, l'appartenance, l'estime et l'accomplissement de soi." },
          { q: "Que signifie la logique de la pyramide ?", r: "Les besoins de la base doivent être satisfaits avant les niveaux supérieurs : on ne cherche l'estime ou l'accomplissement qu'une fois la faim et l'insécurité écartées." },
          { q: "Donne un exemple de besoin d'appartenance et un exemple de besoin d'estime.", r: "Faire partie d'une association est un besoin d'appartenance ; obtenir un diplôme est un besoin d'estime." },
          { q: "Pourquoi un ménage très pauvre consomme-t-il surtout des biens de première nécessité ?", r: "Parce que son revenu ne permet de satisfaire que la base de la pyramide : se nourrir, se loger et se soigner." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["physiologiques", "sécurité", "appartenance", "estime", "accomplissement"], items: [
          { phrase: "Se nourrir et dormir sont des besoins _________.", mot: "physiologiques" },
          { phrase: "Disposer d'un logement sûr est un besoin de _________.", mot: "sécurité" },
          { phrase: "Avoir des amis et faire partie d'un groupe est un besoin d'_________.", mot: "appartenance" },
          { phrase: "Réaliser un projet personnel est un besoin d'_________.", mot: "accomplissement" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 22 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les déterminants économiques de la consommation",
      theme: "Revenu et consommation",
      ras: "Examiner les principaux déterminants de la consommation",
      valeurs: "Respect de soi et d'autrui, Culture de l'excellence",
      objectif: "identifier les facteurs économiques qui influencent la consommation des ménages",
      supportMeta: "Documents sur l'évolution des prix, tableau de comparaison, cahier",
      revision: [
        ["Cite les cinq niveaux de la pyramide de Maslow.", "Les besoins physiologiques, la sécurité, l'appartenance, l'estime et l'accomplissement."],
        ["Qu'est-ce que le pouvoir d'achat ?", "La quantité de biens et de services qu'un revenu permet d'acheter."],
      ],
      mise: [
        "Quand le prix du riz augmente mais que le salaire ne bouge pas, que se passe-t-il pour une famille ?",
        "Elle achète moins : avec le même argent, elle obtient moins de riz.",
      ],
      observation: "les documents comparant deux situations de prix et de revenu",
      observationSupport: "Documents comparant prix et revenus, tableau de comparaison affiché",
      technAna: "Étude de document, enquête et questionnement dirigé",
      qa: [
        ["Qu'appelle-t-on un déterminant de la consommation ?", "Un facteur qui explique pourquoi un ménage consomme plus ou moins, ou autrement."],
        ["Comment le revenu influence-t-il la consommation ?", "Plus le revenu est élevé, plus le ménage consomme, mais la part consacrée à l'alimentation diminue : on dépense davantage en santé, en éducation et en loisirs."],
        ["Qu'est-ce que le pouvoir d'achat ?", "La quantité de biens et de services qu'un revenu permet d'acheter : il dépend du revenu et du niveau des prix."],
        ["Comment varie le pouvoir d'achat ?", "Il augmente si le revenu monte plus vite que les prix ; il baisse si les prix montent plus vite que le revenu."],
        ["Comment le prix d'un bien influence-t-il la consommation de ce bien ?", "Quand le prix d'un bien augmente, les ménages en achètent moins et se tournent vers un produit de remplacement : c'est l'effet de substitution."],
        ["Qu'est-ce qu'un bien de première nécessité face à une hausse de prix ?", "Un bien que l'on ne peut pas supprimer : le riz, l'eau, l'électricité. Le ménage réduit alors d'autres dépenses."],
        ["Peut-on consommer sans revenu courant ?", "Oui, temporairement, en puisant dans l'épargne ou en s'endettant ; mais cela ne peut pas durer indéfiniment."],
      ],
      synthese: "Donc, la consommation d'un ménage dépend d'abord de facteurs économiques : son revenu, son pouvoir d'achat, donc le niveau des prix, et le prix des autres biens qui peuvent remplacer celui que l'on achète. Quand les prix montent plus vite que les revenus, le ménage réduit ses quantités et renonce aux dépenses non essentielles.",
      motsCles: ["déterminant", "revenu", "pouvoir d'achat", "prix", "effet de substitution", "première nécessité"],
      contenu: [
        {
          sousTitre: "1. Le revenu",
          texte: "Le revenu est le premier déterminant : c'est lui qui fixe la limite de ce que le ménage peut dépenser.",
          liste: [
            "Un revenu faible oblige à consacrer l'essentiel à l'alimentation et au logement.",
            "Quand le revenu augmente, la part de l'alimentation baisse dans le budget.",
            "Les dépenses de santé, d'éducation, de transport et de loisirs augmentent avec le revenu.",
          ],
        },
        {
          sousTitre: "2. Le pouvoir d'achat",
          texte: "Le pouvoir d'achat ne se confond pas avec le revenu : il mesure ce que ce revenu permet réellement d'acheter.",
          liste: [
            "Si les prix doublent et que le revenu double aussi, le pouvoir d'achat reste le même.",
            "Si les prix augmentent de 10 % et le revenu de 5 %, le pouvoir d'achat baisse : le ménage s'appauvrit.",
            "Si les prix baissent alors que le revenu reste stable, le pouvoir d'achat augmente.",
          ],
        },
        {
          sousTitre: "3. Le prix des biens et services",
          texte: "Le prix d'un bien détermine la quantité que le ménage peut en acheter. Quand le prix monte, deux réactions sont possibles.",
          liste: [
            "La réduction de la quantité : on achète moins de viande, on réduit les sorties.",
            "L'effet de substitution : on remplace le poulet par des sardines, le taxi par la marche.",
            "Pour les biens de première nécessité, on ne peut guère se passer du bien : on réduit alors les autres postes.",
          ],
        },
        {
          sousTitre: "4. Le recours à l'épargne et au crédit",
          texte: "La consommation ne dépend pas seulement du revenu du moment. Un ménage peut lisser ses dépenses dans le temps.",
          liste: [
            "Puiser dans l'épargne pour faire face à une période difficile ou à une dépense exceptionnelle.",
            "Emprunter pour un achat important : un terrain, un équipement, des frais de scolarité.",
            "Ces solutions ont une limite : l'épargne s'épuise et le crédit doit être remboursé.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Deux mois d'un même ménage :",
          liste: [
            "Mois 1 : revenu 400 000 ariary, prix du riz 2 000 ariary le kilo → 40 kilos achetés avec 80 000 ariary.",
            "Mois 2 : même revenu, prix du riz 2 500 ariary le kilo → 32 kilos seulement avec la même somme.",
            "Le pouvoir d'achat a baissé : le ménage réduit la quantité ou réduit une autre dépense (viande, transport).",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le pouvoir d'achat mesure…", opts: ["ce qu'un revenu permet d'acheter", "le montant du salaire", "le nombre de personnes dans le ménage"], ok: 0, expl: "Il dépend à la fois du revenu et du niveau des prix." },
          { q: "Si les prix montent plus vite que le revenu, le pouvoir d'achat…", opts: ["baisse", "augmente", "reste identique"], ok: 0, expl: "Le ménage peut acheter moins avec son revenu." },
          { q: "Remplacer un produit devenu trop cher par un autre s'appelle…", opts: ["l'effet de substitution", "l'effet de distinction", "la thésaurisation"], ok: 0, expl: "On substitue un bien moins coûteux au bien devenu cher." },
          { q: "Parmi les déterminants économiques, on trouve…", opts: ["le revenu et les prix", "le genre et l'âge", "le lieu d'habitation"], ok: 0, expl: "Le genre, l'âge et le lieu sont des déterminants socioculturels." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Quand le revenu d'un ménage augmente, la part de l'alimentation dans son budget diminue.", rep: true, expl: "Les besoins vitaux saturés, le budget se tourne vers la santé, l'éducation et les loisirs." },
          { txt: "Le pouvoir d'achat augmente toujours quand le salaire augmente.", rep: false, expl: "Il n'augmente que si le salaire monte plus vite que les prix." },
          { txt: "Un ménage peut consommer en puisant dans son épargne.", rep: true, expl: "C'est un report possible, mais limité dans le temps." },
          { txt: "Le prix d'un bien n'influence jamais la quantité achetée.", rep: false, expl: "Quand le prix monte, la quantité achetée diminue en général." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite les trois déterminants économiques de la consommation.", r: "Le revenu du ménage, le pouvoir d'achat et le prix des biens et services." },
          { q: "Explique ce qu'est le pouvoir d'achat.", r: "Le pouvoir d'achat est la quantité de biens et de services qu'un revenu permet d'acheter compte tenu du niveau des prix." },
          { q: "Qu'est-ce que l'effet de substitution ?", r: "C'est le remplacement d'un bien devenu trop cher par un autre moins coûteux, comme le poisson à la place de la viande." },
          { q: "Que fait un ménage quand le prix d'un bien de première nécessité augmente ?", r: "Il ne peut guère s'en passer : il conserve la dépense et réduit les autres postes de son budget." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Le premier déterminant de la consommation d'un ménage est son", suite: "revenu" },
          { debut: "Le pouvoir d'achat dépend du revenu et du niveau des", suite: "prix" },
          { debut: "Remplacer un bien cher par un bien moins cher est l'effet de", suite: "substitution" },
          { debut: "Consommer en période difficile suppose de puiser dans son", suite: "épargne" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 23 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les déterminants socioculturels de la consommation",
      theme: "Revenu et consommation",
      ras: "Examiner les principaux déterminants de la consommation",
      valeurs: "Respect de soi et d'autrui, Culture de l'excellence",
      objectif: "identifier les facteurs sociaux et culturels qui orientent la consommation",
      supportMeta: "Documents sur les modes de vie, enquête de classe, cahier",
      revision: [
        ["Cite trois déterminants économiques de la consommation.", "Le revenu, le pouvoir d'achat et le prix des biens et services."],
        ["Qu'est-ce que l'effet de substitution ?", "Le remplacement d'un bien devenu trop cher par un autre moins coûteux."],
      ],
      mise: [
        "Deux familles ont le même revenu et n'achètent pourtant pas les mêmes choses. Pourquoi ?",
        "Parce qu'elles n'ont ni le même âge, ni les mêmes goûts, ni les mêmes habitudes de vie.",
      ],
      observation: "les documents décrivant deux modes de vie différents",
      observationSupport: "Documents décrivant des modes de vie (jeune actif, famille rurale, étudiant), grille d'enquête",
      technAna: "Enquête, étude de document et travail de groupe",
      qa: [
        ["Qu'appelle-t-on un déterminant socioculturel ?", "Un facteur lié à la place de la personne dans la société et à sa culture : l'âge, le genre, le milieu social, le niveau d'instruction, le lieu de vie."],
        ["Comment l'âge influence-t-il la consommation ?", "Un jeune dépense davantage en téléphone, en transport et en loisirs ; une personne âgée dépense davantage en santé et en aide familiale."],
        ["Comment le genre influence-t-il certaines consommations ?", "Les dépenses d'habillement, de soins de beauté ou d'équipement domestique ne se répartissent pas de la même façon selon qu'on est une femme ou un homme."],
        ["Comment le lieu d'habitation joue-t-il ?", "À la ville, on achète davantage de services et de produits transportés ; à la campagne, on autoconsomme une partie de sa production et l'on dépend davantage du marché pour le reste."],
        ["Comment le niveau d'instruction intervient-il ?", "Il modifie les goûts et les priorités : lecture, éducation des enfants, santé préventive, usage du numérique."],
        ["Quel rôle joue la culture ?", "Elle fixe ce qui est convenable, ce qui se mange, ce qui se porte, ce qui se fête : les dépenses de cérémonie en sont un exemple."],
        ["Les déterminants économiques et socioculturels sont-ils indépendants ?", "Non : ils se combinent. Un même revenu produit des consommations différentes selon l'âge, le milieu et la culture du ménage."],
      ],
      synthese: "Donc, au-delà du revenu et des prix, la consommation dépend de facteurs socioculturels : l'âge, le genre, le milieu social, le lieu d'habitation, le niveau d'instruction et la culture. Deux ménages disposant du même revenu peuvent consommer très différemment selon leur mode de vie et leur appartenance sociale.",
      motsCles: ["déterminants socioculturels", "âge", "genre", "milieu social", "mode de vie", "niveau d'instruction"],
      contenu: [
        {
          sousTitre: "1. L'âge",
          texte: "Les besoins changent au cours de la vie ; la consommation suit.",
          liste: [
            "Jeune : téléphone, transport, loisirs, études, vêtements à la mode.",
            "Adulte en activité : logement, transport quotidien, scolarité des enfants, épargne.",
            "Personne âgée : santé, alimentation adaptée, soutien aux enfants et petits-enfants.",
          ],
        },
        {
          sousTitre: "2. Le genre",
          texte: "Selon qu'on est une femme ou un homme, certaines dépenses et certaines responsabilités budgétaires ne se répartissent pas de la même manière dans le ménage.",
          liste: [
            "Dépenses d'habillement et de soins : souvent plus élevées pour les femmes.",
            "Équipements et outils de travail : plus souvent associés aux hommes dans certains milieux.",
            "Dans beaucoup de ménages, la mère gère l'alimentation et la scolarité, ce qui oriente l'usage du revenu.",
          ],
        },
        {
          sousTitre: "3. Le milieu social et le lieu d'habitation",
          texte: "Vivre en ville ou à la campagne, dans un quartier aisé ou populaire, change la structure du budget.",
          liste: [
            "En ville : davantage de dépenses monétaires, de services payants et de transport.",
            "À la campagne : autoconsommation d'une partie de la production, dépenses concentrées sur les intrants et les produits non cultivés.",
            "Le quartier détermine l'offre disponible : marchés, boutiques, transports, écoles.",
          ],
        },
        {
          sousTitre: "4. Le niveau d'instruction et la culture",
          texte: "L'instruction et l'appartenance culturelle façonnent les goûts, les priorités et les manières de consommer.",
          liste: [
            "Niveau d'instruction : lecture, presse, santé préventive, équipement numérique, scolarisation des enfants.",
            "Culture : alimentation, vêtement, fêtes et cérémonies familiales.",
            "Religion et traditions : interdits alimentaires, fêtes religieuses, pratiques de solidarité.",
          ],
        },
        {
          sousTitre: "Exemple",
          texte: "Deux ménages, même revenu de 500 000 ariary :",
          liste: [
            "Ménage A, jeune couple urbain : téléphone et internet, transports, sorties, loyer élevé, peu d'épargne.",
            "Ménage B, famille rurale : intrants agricoles, scolarité des enfants, cérémonies familiales, épargne dans une tontine.",
            "Les deux budgets sont cohérents, mais ils traduisent deux modes de vie différents.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Parmi les déterminants socioculturels, on trouve…", opts: ["l'âge et le milieu social", "le prix du riz", "le salaire"], ok: 0, expl: "Le prix et le salaire sont des déterminants économiques." },
          { q: "Une personne âgée consomme davantage en…", opts: ["santé", "jeux vidéo", "vêtements de mode"], ok: 0, expl: "Les besoins de santé augmentent avec l'âge." },
          { q: "À la campagne, une partie de la consommation provient…", opts: ["de l'autoconsommation", "uniquement des importations", "du salaire"], ok: 0, expl: "Le ménage consomme une partie de ce qu'il produit." },
          { q: "Le niveau d'instruction influence…", opts: ["les goûts et les priorités de consommation", "la météo", "le prix du marché"], ok: 0, expl: "Il modifie les pratiques de lecture, de santé et de scolarisation." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Deux ménages ayant le même revenu consomment forcément de la même façon.", rep: false, expl: "L'âge, le lieu de vie et la culture produisent des budgets différents." },
          { txt: "Le lieu d'habitation modifie la structure du budget.", rep: true, expl: "Ville et campagne n'offrent ni les mêmes services ni les mêmes prix." },
          { txt: "Les cérémonies familiales sont une dépense à forte dimension culturelle.", rep: true, expl: "Elles traduisent les valeurs et les coutumes d'un groupe." },
          { txt: "La culture n'a aucun effet sur la consommation alimentaire.", rep: false, expl: "Elle fixe ce qui se mange, ce qui est interdit et ce qui se partage." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite quatre déterminants socioculturels de la consommation.", r: "L'âge, le genre, le milieu social ou lieu d'habitation, et le niveau d'instruction." },
          { q: "Comment l'âge modifie-t-il la consommation ?", r: "Un jeune dépense davantage en loisirs et en téléphone, une personne âgée davantage en santé et en soutien familial." },
          { q: "En quoi vivre à la campagne change-t-il le budget d'un ménage ?", r: "Le ménage autoconsomme une partie de sa production et concentre ses dépenses sur les intrants et les produits non cultivés." },
          { q: "Montre que déterminants économiques et socioculturels se combinent.", r: "Avec le même revenu, un ménage urbain et un ménage rural n'achètent pas les mêmes choses : le lieu de vie et le mode de vie orientent la dépense autant que le revenu." },
        ]},
        { type: "appariement", consigne: "Relie chaque situation au déterminant correspondant.", pointsPar: 1, items: [
          { g: ["Acheter un téléphone dernier cri à vingt ans", "Soigner une personne âgée", "Autoconsommer sa récolte", "Financer une cérémonie familiale"], d: ["Lieu de vie", "Culture", "Âge", "Âge du chef de famille"], pairs: [[0, 2], [1, 3], [2, 0], [3, 1]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 24 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Effets de distinction et d'imitation",
      theme: "Revenu et consommation",
      ras: "Examiner les principaux déterminants de la consommation",
      valeurs: "Respect de soi et d'autrui, Culture de l'excellence",
      objectif: "différencier l'effet de distinction et l'effet d'imitation dans la consommation",
      supportMeta: "Documents sur la mode et les marques, enquête de classe, cahier",
      revision: [
        ["Cite quatre déterminants socioculturels de la consommation.", "L'âge, le genre, le milieu social ou lieu d'habitation, et le niveau d'instruction."],
        ["Qu'est-ce qu'une consommation ostentatoire ?", "Une consommation faite surtout pour montrer sa réussite sociale."],
      ],
      mise: [
        "Pourquoi certains achètent-ils exactement le même téléphone que leurs amis, et d'autres un modèle que personne n'a ?",
        "Les uns imitent leur groupe, les autres cherchent à se distinguer.",
      ],
      observation: "les documents présentant des objets de marque et des objets courants",
      observationSupport: "Documents sur la mode, les marques et les objets du quotidien, grille d'observation",
      technAna: "Étude de document, débat et enquête",
      qa: [
        ["Qu'est-ce que l'effet d'imitation ?", "La tendance à consommer comme les personnes du groupe auquel on veut ressembler : on achète le même vêtement, le même téléphone, la même coiffure."],
        ["Qu'est-ce que l'effet de distinction ?", "La tendance à consommer pour se démarquer du plus grand nombre : on choisit un objet rare, coûteux ou original, pour marquer sa position."],
        ["Les deux effets s'opposent-ils vraiment ?", "Ils se combinent : on imite un groupe de référence pour en faire partie, et l'on se distingue du reste de la société par ce choix."],
        ["Quel rôle joue la publicité ?", "Elle entretient les deux effets : elle montre un produit adopté par tous, ou au contraire réservé à quelques-uns."],
        ["Quelles conséquences pour le budget d'un ménage ?", "Ces effets peuvent pousser à dépenser au-delà de ses moyens, à s'endetter et à négliger les besoins essentiels."],
        ["Comment consommer de façon responsable ?", "En distinguant le besoin réel de l'envie, en comparant les prix et la qualité, et en épargnant avant d'acheter ce qui n'est pas indispensable."],
      ],
      synthese: "Donc, la consommation n'obéit pas seulement à des besoins : elle exprime aussi une position sociale. Par l'effet d'imitation, on consomme comme le groupe auquel on veut ressembler ; par l'effet de distinction, on cherche à se démarquer. Les deux mécanismes se combinent et peuvent conduire à dépenser au-delà de ses moyens : d'où l'importance d'une consommation réfléchie.",
      motsCles: ["effet d'imitation", "effet de distinction", "groupe de référence", "publicité", "consommation responsable", "ostentation"],
      contenu: [
        {
          sousTitre: "1. L'effet d'imitation",
          texte: "L'effet d'imitation pousse à consommer comme les autres, en particulier comme le groupe auquel on souhaite appartenir. On appelle ce groupe le groupe de référence.",
          liste: [
            "Adopter la coiffure, la musique ou le style vestimentaire de son groupe d'amis.",
            "Acheter le téléphone qui « fait partie du lot » dans sa classe.",
            "Suivre une mode lancée par des personnes admirées, y compris à distance.",
          ],
        },
        {
          sousTitre: "2. L'effet de distinction",
          texte: "L'effet de distinction pousse au contraire à se différencier : on achète ce que peu de personnes possèdent, pour montrer que l'on occupe une position particulière.",
          liste: [
            "Choisir un objet rare, importé ou coûteux.",
            "Acheter une marque que tout le monde ne peut pas s'offrir.",
            "Recevoir ou offrir davantage que ce que la coutume exige.",
          ],
        },
        {
          sousTitre: "3. Les deux effets réunis",
          texte: "Imitation et distinction ne s'excluent pas : la plupart des achats combinent les deux mouvements.",
          liste: [
            "On imite le groupe de référence tout en se distinguant du plus grand nombre.",
            "Une mode se diffuse : les premiers adoptants se distinguent, puis l'imitation généralise l'usage, et un nouveau produit relance la distinction.",
            "La publicité joue alternativement sur les deux registres.",
          ],
        },
        {
          sousTitre: "4. Les risques pour le ménage",
          texte: "Ces mécanismes ont un coût. Ils peuvent détourner l'argent des besoins essentiels.",
          liste: [
            "Dépenser pour l'apparence au détriment de l'alimentation ou de la scolarité.",
            "S'endetter pour suivre une mode.",
            "Renouveler un objet encore utilisable uniquement parce qu'il n'est plus à la mode.",
          ],
        },
        {
          sousTitre: "5. Consommer de façon responsable",
          texte: "Une consommation réfléchie suppose de reprendre la main sur ses choix.",
          liste: [
            "Distinguer le besoin réel de l'envie provoquée par la publicité.",
            "Comparer les prix, la qualité et la durée de vie du produit.",
            "Épargner avant d'acheter ce qui n'est pas indispensable.",
            "Résister à la pression du groupe quand la dépense dépasse les moyens du ménage.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "L'effet d'imitation consiste à…", opts: ["consommer comme son groupe de référence", "se démarquer de tout le monde", "ne rien acheter"], ok: 0, expl: "On cherche à ressembler au groupe auquel on veut appartenir." },
          { q: "L'effet de distinction consiste à…", opts: ["se démarquer par un objet rare ou coûteux", "acheter le moins cher possible", "imiter ses voisins"], ok: 0, expl: "On marque sa position par une consommation peu commune." },
          { q: "La publicité…", opts: ["entretient à la fois imitation et distinction", "n'a aucun effet", "impose les prix"], ok: 0, expl: "Elle montre un produit adopté par tous, ou réservé à quelques-uns." },
          { q: "Une consommation responsable suppose de…", opts: ["distinguer le besoin réel de l'envie", "acheter sans comparer", "s'endetter pour suivre la mode"], ok: 0, expl: "Il faut comparer, épargner et résister à la pression du groupe." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Imitation et distinction sont incompatibles.", rep: false, expl: "On peut imiter son groupe tout en se distinguant du reste de la société." },
          { txt: "Une mode se diffuse par imitation puis appelle une nouvelle distinction.", rep: true, expl: "Quand tout le monde possède l'objet, il ne distingue plus." },
          { txt: "Suivre une mode peut conduire à s'endetter.", rep: true, expl: "La dépense dépasse alors les moyens du ménage." },
          { txt: "Un objet rare perd toujours sa valeur.", rep: false, expl: "Sa rareté est précisément ce qui lui donne valeur aux yeux de certains." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Donne la définition de l'effet d'imitation.", r: "L'effet d'imitation est la tendance à consommer comme les personnes du groupe auquel on veut ressembler." },
          { q: "Donne la définition de l'effet de distinction.", r: "L'effet de distinction est la tendance à consommer des objets rares ou coûteux pour marquer sa position sociale." },
          { q: "Montre comment les deux effets peuvent se combiner dans un même achat.", r: "On achète le téléphone utilisé par son groupe d'amis — imitation — tout en se distinguant des élèves qui ne peuvent pas se l'offrir — distinction." },
          { q: "Cite deux règles d'une consommation responsable.", r: "Comparer les prix et la qualité avant d'acheter, et épargner plutôt que s'endetter pour un achat non indispensable." },
        ]},
        { type: "trous", consigne: "Complète les phrases avec les mots proposés.", pointsPar: 1, mots: ["imitation", "distinction", "référence", "publicité", "épargne"], items: [
          { phrase: "Consommer comme son groupe de _________, c'est l'effet d'imitation.", mot: "référence" },
          { phrase: "Acheter un objet rare pour se démarquer relève de l'effet de _________.", mot: "distinction" },
          { phrase: "La _________ entretient l'envie d'acheter.", mot: "publicité" },
          { phrase: "Avant un achat non indispensable, il vaut mieux constituer une _________.", mot: "épargne" },
        ]},
      ],
    },
  ],
};

module.exports = U;
