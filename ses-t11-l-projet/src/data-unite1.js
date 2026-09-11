// ============================================================
// data-unite1.js — Manuel SES T11 série L
// Unité I — Production dans les organisations (18 heures)
// RAS 1 : Déterminer les facteurs et les coûts de production ainsi que les recettes
// RAS 2 : Examiner la performance de l'entreprise
// RAS 3 : Déterminer les parties prenantes de l'entreprise, leurs contributions
//         et leurs intérêts
// Découpage : 7 séances de cours + 1 révision + 1 sujet d'examen (2 h par séance)
// Valeurs : Persévérance, Responsabilité
// ============================================================

const U = {
  num: "I",
  titre: "Production dans les organisations",
  ras: "Déterminer les facteurs et les coûts de production ainsi que les recettes · Examiner la performance de l'entreprise · Déterminer les parties prenantes de l'entreprise, leurs contributions et leurs intérêts",
  valeurs: "Persévérance, Responsabilité",
  duree: "18 heures",
  themes: [
    "Les organisations : statut et finalité",
    "Le fonctionnement des organisations et l'économie informelle",
    "L'activité productive : facteurs et combinaison productive",
    "Coûts, recettes et maximisation du profit",
    "Valeur ajoutée, bilan et compte de résultat",
    "La responsabilité sociétale de l'entreprise",
    "Les parties prenantes de l'entreprise",
  ],
  topics: [
    // ---------------------------------------------------------
    // SÉANCE 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les organisations : statut et finalité",
      theme: "Production dans les organisations",
      ras: "Déterminer les facteurs et les coûts de production ainsi que les recettes",
      valeurs: "Persévérance, Responsabilité",
      objectif: "classer les organisations selon leur statut et leur finalité",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Qu'est-ce qu'un bien ?", "Un produit matériel ou un service destiné à satisfaire un besoin."],
        ["Cite deux acteurs qui produisent autour de toi.", "Un atelier de transformation et une exploitation agricole, par exemple."],
      ],
      mise: [
        "L'école de votre commune, le marché du village et la coopérative de riz produisent-ils de la même façon ?",
        "Non : ils n'ont ni le même propriétaire ni le même but. Pour les distinguer, on regarde le statut de l'organisation et la finalité poursuivie.",
      ],
      observation: "le schéma des statuts des organisations",
      observationSupport: "Schéma des statuts affiché ou distribué",
      technAna: "Lecture de schéma et classement dirigé",
      qa: [
        ["Qu'est-ce qu'une organisation ?", "Un groupe structuré de personnes qui réunit des ressources pour atteindre un objectif commun : produire, rendre un service ou défendre une cause."],
        ["Qu'est-ce qu'une organisation publique ?", "Une organisation dont le capital appartient à l'État ou à une collectivité, et dont l'activité répond à une mission de service public."],
        ["Qu'est-ce qu'une organisation privée ?", "Une organisation dont le capital appartient à des personnes privées, seules ou associées."],
        ["Qu'est-ce qu'une organisation à but lucratif ?", "Une organisation qui recherche un bénéfice destiné à être partagé entre ses propriétaires."],
        ["Qu'est-ce qu'une organisation à but non lucratif ?", "Une organisation dont l'objectif n'est pas le partage d'un bénéfice : le service rendu prime."],
        ["Cite deux exemples d'organisation à but non lucratif.", "Une association de parents d'élèves et une coopérative de producteurs."],
        ["Une organisation publique peut-elle vendre ses services ?", "Oui : elle peut facturer un service tout en poursuivant une mission d'intérêt général."],
        ["Pourquoi croiser les deux critères ?", "Parce qu'ils sont indépendants : une organisation publique peut être lucrative, une organisation privée peut être non lucrative. Le classement complet demande les deux."],
      ],
      synthese: "Donc, une organisation se classe selon deux critères indépendants : le propriétaire du capital (publique ou privée) et le but poursuivi (lucratif ou non lucratif). Ces deux critères se croisent : une organisation publique peut être lucrative, une organisation privée peut être non lucrative.",
      motsCles: ["organisation", "organisation publique", "organisation privée", "but lucratif", "but non lucratif", "association", "coopérative", "service public"],
      image: { file: "t11_l_orga_statuts.png", legende: "Figure 1 — Deux critères pour classer les organisations." },
      contenu: [
        {
          sousTitre: "1. Une organisation, c'est un groupe structuré",
          texte: "Produire suppose de réunir des personnes et des ressources autour d'un but.",
          liste: [
            "Des personnes qui coopèrent selon des règles.",
            "Des ressources : capital, travail, matières premières.",
            "Un objectif : produire, rendre un service ou défendre une cause.",
          ],
        },
        {
          sousTitre: "2. Selon le propriétaire du capital",
          texte: "Le premier critère distingue publique et privé.",
          liste: [
            "Organisation publique : capital détenu par l'État ou la collectivité.",
            "Organisation privée : capital détenu par des personnes privées.",
            "Exemples : société nationale d'eau et hôpital public ; entreprise familiale et société anonyme.",
          ],
        },
        {
          sousTitre: "3. Selon le but poursuivi",
          texte: "Le second critère porte sur la destination du résultat.",
          liste: [
            "But lucratif : l'activité vise un bénéfice partagé entre les propriétaires.",
            "But non lucratif : le service rendu prime, l'excédent reste dans la structure.",
            "Exemples : société commerciale ; association et coopérative.",
          ],
        },
        {
          sousTitre: "4. Croiser les deux critères",
          texte: "Les deux critères sont indépendants : il faut les combiner.",
          liste: [
            "Une organisation publique peut vendre un service et dégager un excédent.",
            "Une organisation privée peut poursuivre un but non lucratif.",
            "Le classement complet se lit dans le croisement des deux critères.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Une organisation dont le capital appartient à l'État est…", opts: ["publique", "privée", "non lucrative"], ok: 0, expl: "C'est le propriétaire du capital qui décide." },
          { q: "Une association poursuit un but…", opts: ["non lucratif", "lucratif", "commercial"], ok: 0, expl: "Le service rendu prime sur le profit." },
          { q: "Une coopérative de producteurs est une organisation…", opts: ["privée à but non lucratif", "publique à but lucratif", "publique sans capital"], ok: 0, expl: "Capital privé, objectif de service aux membres." },
          { q: "Les deux critères de classement sont…", opts: ["indépendants", "identiques", "obligatoirement liés"], ok: 0, expl: "Ils se croisent sans se confondre." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Toute organisation publique est nécessairement non lucrative.", rep: false, expl: "Une organisation publique peut vendre des services." },
          { txt: "Une organisation à but lucratif recherche un bénéfice partageable.", rep: true, expl: "C'est la définition du but lucratif." },
          { txt: "Une entreprise familiale est une organisation privée.", rep: true, expl: "Le capital appartient à des personnes privées." },
          { txt: "Une association a pour but principal de partager des bénéfices.", rep: false, expl: "Elle poursuit un but non lucratif." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis une organisation et cite ses trois éléments constitutifs.", r: "Une organisation est un groupe structuré qui réunit des personnes, des ressources et un objectif commun : produire, rendre un service ou défendre une cause." },
          { q: "Quelle différence entre une organisation publique et une organisation privée ?", r: "Dans une organisation publique, le capital appartient à l'État ou à une collectivité ; dans une organisation privée, il appartient à des personnes privées." },
          { q: "Quelle différence entre but lucratif et but non lucratif ?", r: "Le but lucratif recherche un bénéfice partagé entre les propriétaires ; le but non lucratif fait primer le service rendu, l'excédent reste dans la structure." },
          { q: "Donne un exemple d'organisation privée à but non lucratif.", r: "Une coopérative de producteurs de riz : le capital est privé, mais l'objectif est le service rendu aux membres." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Une organisation dont le capital appartient à l'État est", suite: "publique" },
          { debut: "Une organisation qui recherche un bénéfice partagé poursuit un but", suite: "lucratif" },
          { debut: "Une association poursuit un but non", suite: "lucratif" },
          { debut: "Un groupement de producteurs qui mutualise ses moyens est une", suite: "coopérative" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le fonctionnement des organisations et l'économie informelle",
      theme: "Production dans les organisations",
      ras: "Déterminer les facteurs et les coûts de production ainsi que les recettes",
      valeurs: "Persévérance, Responsabilité",
      objectif: "décrire le fonctionnement d'une organisation et situer la place de l'économie informelle",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Quels sont les deux critères de classement d'une organisation ?", "Le propriétaire du capital et le but poursuivi."],
        ["Qu'est-ce qu'une organisation à but non lucratif ?", "Une organisation où le service rendu prime sur le partage d'un bénéfice."],
      ],
      mise: [
        "Sur le marché du village, beaucoup de vendeurs n'ont ni enseigne ni registre : sont-ils moins productifs pour autant ?",
        "Non : ils produisent et vendent, mais hors des règles déclarées. C'est l'économie informelle, qui occupe une place majeure dans l'activité du pays.",
      ],
      observation: "la scène du fonctionnement des organisations",
      observationSupport: "Illustration affichée ou distribuée",
      technAna: "Observation dirigée et débat",
      qa: [
        ["Comment une organisation fonctionne-t-elle ?", "Elle fixe des règles, réunit des ressources, organise le travail et contrôle les résultats obtenus."],
        ["Cite trois éléments du fonctionnement d'une organisation.", "Des règles de fonctionnement, une répartition des tâches et un contrôle des résultats."],
        ["Qu'est-ce que l'économie informelle ?", "L'ensemble des activités de production et de vente qui échappent aux règles déclarées : pas d'enregistrement, pas de comptabilité régulière, souvent pas d'impôt."],
        ["Cite trois formes d'activité informelle.", "Le petit commerce de rue, l'artisanat non déclaré et les services rendus à domicile."],
        ["Pourquoi l'économie informelle est-elle importante ?", "Parce qu'elle fournit un revenu à une grande partie de la population active et rend des services accessibles à tous."],
        ["Quelles sont ses limites ?", "L'absence de protection sociale, la difficulté d'accéder au crédit et la fragilité face aux aléas."],
        ["Pourquoi une activité reste-t-elle informelle ?", "Par manque d'information, par coût des formalités ou par nécessité de commencer sans capital déclaré."],
        ["Quel est l'enjeu pour les pouvoirs publics ?", "Accompagner le passage vers une activité déclarée, sans détruire les moyens d'existence qu'elle procure."],
      ],
      synthese: "Donc, une organisation fonctionne selon des règles, une répartition des tâches et un contrôle des résultats. Une partie de l'activité se déroule dans l'économie informelle, hors des règles déclarées : elle fournit des revenus et des services accessibles, mais laisse les travailleurs sans protection ni accès au crédit.",
      motsCles: ["fonctionnement", "règles", "répartition des tâches", "économie informelle", "activité déclarée", "protection sociale", "crédit", "formalités"],
      image: { file: "t11_l_orga_scene.jpg", legende: "Figure 2 — Atelier, coopérative et marché : des organisations qui produisent." },
      contenu: [
        {
          sousTitre: "1. Comment fonctionne une organisation",
          texte: "Le fonctionnement tient à trois éléments simples.",
          liste: [
            "Des règles : qui décide, qui fait quoi, selon quelle procédure.",
            "Une répartition des tâches entre les membres.",
            "Un contrôle des résultats obtenus, qui permet d'ajuster.",
          ],
        },
        {
          sousTitre: "2. L'économie informelle : de quoi parle-t-on ?",
          texte: "C'est l'activité qui échappe aux règles déclarées.",
          liste: [
            "Aucun enregistrement auprès de l'administration.",
            "Pas de comptabilité régulière ni de déclaration fiscale.",
            "Activité souvent exercée à petite échelle, avec peu de capital.",
          ],
        },
        {
          sousTitre: "3. Son importance",
          texte: "L'informel n'est pas marginal dans la vie économique.",
          liste: [
            "Il fournit un revenu à une grande partie de la population active.",
            "Il rend des biens et des services accessibles aux ménages modestes.",
            "Il permet de démarrer une activité sans capital important.",
          ],
        },
        {
          sousTitre: "4. Ses limites et l'enjeu",
          texte: "L'absence de règles a un coût pour celui qui travaille.",
          liste: [
            "Pas de protection sociale ni de couverture en cas d'accident.",
            "Accès au crédit difficile : aucune pièce comptable à présenter.",
            "Enjeu public : faciliter la formalisation sans détruire les revenus existants.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "L'économie informelle désigne des activités…", opts: ["non déclarées", "publiques", "subventionnées"], ok: 0, expl: "Elles échappent aux règles déclarées." },
          { q: "Le fonctionnement d'une organisation repose sur…", opts: ["des règles et une répartition des tâches", "le hasard", "la seule vente"], ok: 0, expl: "Règles, tâches et contrôle des résultats." },
          { q: "Une limite de l'informel est…", opts: ["l'absence de protection sociale", "l'excès d'impôts", "le salaire trop élevé"], ok: 0, expl: "Le travailleur n'est couvert par aucun régime." },
          { q: "L'informel rend les biens…", opts: ["accessibles aux ménages modestes", "plus chers que partout", "réservés à l'exportation"], ok: 0, expl: "C'est l'un de ses apports." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Une activité informelle tient une comptabilité régulière déclarée.", rep: false, expl: "C'est l'absence de déclaration qui la définit." },
          { txt: "L'informel fournit un revenu à une partie importante de la population.", rep: true, expl: "Son poids dans l'emploi est majeur." },
          { txt: "Un travailleur informel accède facilement au crédit bancaire.", rep: false, expl: "Sans pièces comptables, le prêt est refusé." },
          { txt: "Le contrôle des résultats fait partie du fonctionnement d'une organisation.", rep: true, expl: "Il permet d'ajuster l'activité." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Comment une organisation fonctionne-t-elle ?", r: "Elle fixe des règles, répartit les tâches entre ses membres et contrôle les résultats obtenus pour ajuster son activité." },
          { q: "Définis l'économie informelle et cite deux formes qu'elle prend.", r: "C'est l'ensemble des activités de production et de vente qui échappent aux règles déclarées : le petit commerce de rue et l'artisanat non déclaré, par exemple." },
          { q: "Pourquoi l'économie informelle est-elle importante ?", r: "Parce qu'elle fournit un revenu à une grande partie de la population active et rend des biens et services accessibles aux ménages modestes." },
          { q: "Cite deux limites de l'informel pour celui qui y travaille.", r: "L'absence de protection sociale et la difficulté d'accéder au crédit faute de pièces comptables." },
        ]},
        { type: "appariement", consigne: "Relie chaque situation à sa catégorie.", pointsPar: 1, items: [
          { g: ["Vente de légumes sur un étal non déclaré", "Atelier de couture enregistré", "Cordonnier ambulant sans registre", "Coopérative déclarée en bonne forme", "Vendeur de rue sans couverture sociale"], d: ["Économie informelle", "Économie formelle", "Économie informelle", "Économie formelle", "Économie informelle"], pairs: [[0, 0], [1, 1], [2, 0], [3, 1], [4, 0]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 3
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "L'activité productive : facteurs et combinaison productive",
      theme: "Production dans les organisations",
      ras: "Déterminer les facteurs et les coûts de production ainsi que les recettes",
      valeurs: "Persévérance, Responsabilité",
      objectif: "identifier les facteurs de production et expliquer la combinaison productive",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Qu'est-ce que l'économie informelle ?", "L'ensemble des activités qui échappent aux règles déclarées."],
        ["Cite deux éléments du fonctionnement d'une organisation.", "Des règles et une répartition des tâches."],
      ],
      mise: [
        "Pour faire pousser du riz, faut-il seulement de la terre ?",
        "Non : il faut aussi du travail et du matériel. Produire, c'est combiner des facteurs, et le choix de la combinaison dépend de ce dont on dispose.",
      ],
      observation: "le schéma des facteurs de production",
      observationSupport: "Schéma des facteurs affiché ou distribué",
      technAna: "Lecture de schéma et questionnement dirigé",
      qa: [
        ["Qu'est-ce que produire ?", "C'est transformer des ressources en biens ou en services destinés à satisfaire un besoin."],
        ["Cite les trois facteurs de production.", "Le travail, le capital et les ressources naturelles."],
        ["Qu'est-ce que le facteur travail ?", "L'effort humain, physique ou intellectuel, fourni dans la production, mesuré en temps ou en personnes employées."],
        ["Qu'est-ce que le facteur capital ?", "L'ensemble des moyens durables de production : machines, bâtiments, outillage, matériel de transport."],
        ["Qu'est-ce qu'une combinaison productive ?", "La manière d'associer les facteurs pour obtenir une quantité donnée de produit."],
        ["Pourquoi les combinaisons diffèrent-elles ?", "Parce que les facteurs disponibles, leurs prix et les techniques accessibles diffèrent selon les organisations."],
        ["Qu'est-ce que la productivité ?", "Le rapport entre la quantité produite et la quantité de facteurs utilisés : produire plus avec les mêmes moyens."],
        ["Comment améliorer la productivité ?", "Par une meilleure organisation du travail, une formation, ou un matériel plus adapté."],
      ],
      synthese: "Donc, produire consiste à combiner le travail, le capital et les ressources naturelles pour obtenir des biens et des services. La combinaison choisie dépend des facteurs disponibles et de leurs prix. La productivité mesure l'efficacité de cette combinaison : produire davantage avec les mêmes moyens.",
      motsCles: ["production", "facteurs de production", "travail", "capital", "ressources naturelles", "combinaison productive", "productivité", "biens et services"],
      image: { file: "t11_l_facteurs.png", legende: "Figure 3 — Combiner les facteurs pour produire." },
      contenu: [
        {
          sousTitre: "1. Produire, c'est transformer",
          texte: "L'activité productive transforme des ressources en produits.",
          liste: [
            "Des biens : objets matériels que l'on peut stocker.",
            "Des services : prestations rendues, consommées au moment où elles sont fournies.",
            "Le but : satisfaire un besoin, solvable ou non.",
          ],
        },
        {
          sousTitre: "2. Les trois facteurs de production",
          texte: "Trois catégories de ressources sont mobilisées.",
          liste: [
            "Le travail : effort humain, physique ou intellectuel.",
            "Le capital : machines, bâtiments, outillage, matériel durable.",
            "Les ressources naturelles : terre, eau, matières premières.",
          ],
        },
        {
          sousTitre: "3. La combinaison productive",
          texte: "Les facteurs sont associés en proportions variables.",
          liste: [
            "Une exploitation rurale mobilise beaucoup de travail et de terre.",
            "Une usine mobilise davantage de capital par travailleur.",
            "Le choix dépend des disponibilités, des prix et des techniques.",
          ],
        },
        {
          sousTitre: "4. La productivité",
          texte: "La combinaison se juge à son efficacité.",
          liste: [
            "Productivité : quantité produite rapportée aux facteurs utilisés.",
            "On peut la relever par la formation, l'organisation ou le matériel.",
            "Une productivité plus élevée libère des ressources pour d'autres productions.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Les trois facteurs de production sont…", opts: ["le travail, le capital et les ressources naturelles", "la terre, l'argent et l'État", "l'offre, la demande et le prix"], ok: 0, expl: "Ce sont les ressources mobilisées pour produire." },
          { q: "Une machine utilisée plusieurs années est…", opts: ["du capital", "du travail", "une ressource naturelle"], ok: 0, expl: "C'est un moyen durable de production." },
          { q: "La combinaison productive désigne…", opts: ["la façon d'associer les facteurs", "le prix de vente", "le nombre de clients"], ok: 0, expl: "Les proportions dans lesquelles on les réunit." },
          { q: "La productivité mesure…", opts: ["la production par facteur utilisé", "le bénéfice total", "le chiffre d'affaires"], ok: 0, expl: "Produire plus avec les mêmes moyens." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Un service se stocke comme un bien matériel.", rep: false, expl: "Il est consommé au moment où il est rendu." },
          { txt: "Une exploitation rurale utilise proportionnellement plus de travail qu'une usine.", rep: true, expl: "La combinaison diffère selon l'activité." },
          { txt: "La formation des travailleurs peut élever la productivité.", rep: true, expl: "Mieux former, c'est produire mieux avec autant de moyens." },
          { txt: "Les ressources naturelles ne comptent pas dans la production.", rep: false, expl: "La terre et les matières premières sont un facteur." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Qu'est-ce que produire ?", r: "C'est transformer des ressources en biens ou en services destinés à satisfaire un besoin." },
          { q: "Cite les trois facteurs de production et donne un exemple de chacun.", r: "Le travail (un ouvrier), le capital (une machine) et les ressources naturelles (une parcelle de terre)." },
          { q: "Qu'est-ce qu'une combinaison productive et de quoi dépend-elle ?", r: "C'est la manière d'associer les facteurs pour produire ; elle dépend des facteurs disponibles, de leurs prix et des techniques accessibles." },
          { q: "Définis la productivité et cite un moyen de l'améliorer.", r: "C'est la quantité produite rapportée aux facteurs utilisés ; on l'améliore par la formation, une meilleure organisation ou un matériel plus adapté." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "L'effort humain fourni dans la production est le facteur", suite: "travail" },
          { debut: "Les machines et les bâtiments forment le facteur", suite: "capital" },
          { debut: "L'association des facteurs dans des proportions choisies est la combinaison", suite: "productive" },
          { debut: "La quantité produite rapportée aux moyens employés est la", suite: "productivité" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 4
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Coûts, recettes et maximisation du profit",
      theme: "Production dans les organisations",
      ras: "Déterminer les facteurs et les coûts de production ainsi que les recettes",
      valeurs: "Persévérance, Responsabilité",
      objectif: "distinguer les coûts, calculer les recettes et expliquer la maximisation du profit",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Cite les trois facteurs de production.", "Le travail, le capital et les ressources naturelles."],
        ["Qu'est-ce que la productivité ?", "La quantité produite rapportée aux facteurs utilisés."],
      ],
      mise: [
        "Un atelier vend ses produits 1 200 ariary l'unité et dépense 900 ariary pour les fabriquer : que reste-t-il ?",
        "Il reste 300 ariary par unité : c'est le profit. Toute la question est de savoir jusqu'où produire pour que ce profit soit le plus grand possible.",
      ],
      observation: "le schéma des coûts, des recettes et du profit",
      observationSupport: "Schéma des coûts affiché ou distribué",
      technAna: "Lecture de schéma et calcul dirigé",
      qa: [
        ["Qu'est-ce qu'un coût de production ?", "La dépense engagée pour fabriquer un bien ou rendre un service."],
        ["Qu'est-ce qu'un coût fixe ?", "Un coût qui ne varie pas avec la quantité produite : loyer, amortissement du matériel."],
        ["Qu'est-ce qu'un coût variable ?", "Un coût qui suit la quantité produite : matières premières, heures supplémentaires."],
        ["Comment calcule-t-on le coût total ?", "Coût total = coûts fixes + coûts variables."],
        ["Comment calcule-t-on la recette ?", "Recette = prix de vente × quantité vendue."],
        ["Qu'est-ce que le profit ?", "Profit = recettes − coût total. Il peut être négatif : on parle alors de perte."],
        ["Que signifie maximiser le profit ?", "Choisir la quantité produite et vendue pour laquelle l'écart entre la recette et le coût total est le plus grand."],
        ["Le profit est-il le seul objectif de l'organisation ?", "Non : une organisation non lucrative poursuit un but de service, et même une entreprise doit tenir compte de ses effets sociaux et environnementaux."],
      ],
      synthese: "Donc, le coût total réunit les coûts fixes et les coûts variables ; la recette se calcule en multipliant le prix par la quantité vendue. Le profit est l'écart entre les recettes et le coût total. Maximiser le profit, c'est choisir la quantité où cet écart est le plus grand, sans oublier que le profit n'est pas le seul objectif d'une organisation.",
      motsCles: ["coût de production", "coût fixe", "coût variable", "coût total", "recette", "prix de vente", "profit", "maximisation"],
      image: { file: "t11_l_couts_recettes.png", legende: "Figure 4 — Du coût de production au profit." },
      contenu: [
        {
          sousTitre: "1. Les coûts de production",
          texte: "Produire coûte : encore faut-il distinguer deux natures de coûts.",
          liste: [
            "Coûts fixes : indépendants de la quantité (loyer, amortissement).",
            "Coûts variables : proportionnels à la quantité (matières premières, heures).",
            "Coût total = coûts fixes + coûts variables.",
          ],
        },
        {
          sousTitre: "2. Les recettes",
          texte: "La recette dépend du prix et des quantités vendues.",
          liste: [
            "Recette = prix de vente × quantité vendue.",
            "Vendre plus ne suffit pas : il faut vendre au bon prix.",
            "Une baisse de prix peut augmenter la recette si les quantités progressent assez.",
          ],
        },
        {
          sousTitre: "3. Le profit",
          texte: "Le profit est un solde, pas une somme reçue.",
          liste: [
            "Profit = recettes − coût total.",
            "Si le coût dépasse la recette, l'écart est une perte.",
            "Exemple : 1 200 Ar de recette et 900 Ar de coût laissent 300 Ar de profit par unité.",
          ],
        },
        {
          sousTitre: "4. Maximiser le profit",
          texte: "L'objectif guide le choix de la quantité produite.",
          liste: [
            "On retient la quantité où l'écart recette − coût total est maximal.",
            "Produire davantage n'augmente pas toujours le profit : le coût peut croître plus vite.",
            "Le profit n'est pas le seul but : l'organisation répond aussi d'effets sociaux et environnementaux.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Un loyer payé quel que soit le niveau de production est un coût…", opts: ["fixe", "variable", "total"], ok: 0, expl: "Il ne dépend pas de la quantité." },
          { q: "La recette se calcule par…", opts: ["prix × quantité vendue", "coût + profit", "coût total − charges"], ok: 0, expl: "C'est le produit du prix et des volumes." },
          { q: "Profit signifie…", opts: ["recettes − coût total", "coût total − recettes", "prix de vente"], ok: 0, expl: "C'est un solde positif." },
          { q: "Coût total = …", opts: ["coûts fixes + coûts variables", "recettes − profit", "prix × quantité"], ok: 0, expl: "Les deux natures de coûts s'additionnent." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Les matières premières constituent un coût variable.", rep: true, expl: "Elles suivent la quantité produite." },
          { txt: "Produire davantage augmente toujours le profit.", rep: false, expl: "Le coût peut croître plus vite que la recette." },
          { txt: "Une recette inférieure au coût total donne une perte.", rep: true, expl: "Le solde est négatif." },
          { txt: "Le profit est le seul objectif de toute organisation.", rep: false, expl: "Le but peut être non lucratif, et les effets comptent." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis le coût fixe et le coût variable, avec un exemple chacun.", r: "Le coût fixe ne varie pas avec la quantité produite, comme un loyer ; le coût variable suit la quantité produite, comme les matières premières." },
          { q: "Comment calcule-t-on la recette et le coût total ?", r: "La recette égale le prix de vente multiplié par la quantité vendue ; le coût total égale les coûts fixes augmentés des coûts variables." },
          { q: "Qu'est-ce que le profit et comment le calcule-t-on ?", r: "Le profit est le solde entre les recettes et le coût total : profit = recettes − coût total." },
          { q: "Que signifie maximiser le profit ?", r: "C'est choisir la quantité produite et vendue pour laquelle l'écart entre la recette et le coût total est le plus grand." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Un coût indépendant de la quantité produite est un coût", suite: "fixe" },
          { debut: "Recette = prix de vente × quantité", suite: "vendue" },
          { debut: "Profit = recettes − coût", suite: "total" },
          { debut: "Un solde négatif entre recettes et coût total est une", suite: "perte" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 5
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Valeur ajoutée, bilan et compte de résultat",
      theme: "Production dans les organisations",
      ras: "Examiner la performance de l'entreprise",
      valeurs: "Persévérance, Responsabilité",
      objectif: "calculer la valeur ajoutée et lire les deux instruments de la performance",
      supportMeta: "Schémas, documents comptables simples, cahier",
      revision: [
        ["Comment calcule-t-on le profit ?", "Profit = recettes − coût total."],
        ["Quelle différence entre coût fixe et coût variable ?", "Le coût fixe ne dépend pas de la quantité, le coût variable la suit."],
      ],
      mise: [
        "Deux ateliers vendent la même quantité : sont-ils également performants ?",
        "Pas forcément : celui qui achète moins d'intrants crée plus de richesse lui-même. C'est ce que mesure la valeur ajoutée, avant de juger la performance au bilan et au compte de résultat.",
      ],
      observation: "le schéma de la valeur ajoutée et des deux instruments",
      observationSupport: "Schéma comptable affiché ou distribué",
      technAna: "Lecture de schéma et calcul dirigé",
      qa: [
        ["Qu'est-ce que la valeur ajoutée ?", "La richesse créée par l'organisation : la valeur de la production diminuée des consommations intermédiaires."],
        ["Comment la calcule-t-on ?", "Valeur ajoutée = valeur de la production − consommations intermédiaires."],
        ["Qu'appelle-t-on consommations intermédiaires ?", "Les biens et services achetés et entièrement consommés dans la production : matières premières, énergie, transports."],
        ["Comment se répartit la valeur ajoutée ?", "En salaires, impôts et cotisations, intérêts, dividendes et autofinancement."],
        ["Que montre le bilan ?", "Une photographie du patrimoine à une date : les emplois (ce que possède l'entreprise) et les ressources (comment cela est financé)."],
        ["Que montre le compte de résultat ?", "Le film de l'activité sur une période : produits, charges, et le résultat qui les sépare."],
        ["Quelle différence entre les deux ?", "Le bilan est un état à un instant donné ; le compte de résultat retrace une période écoulée."],
        ["Pourquoi ces deux instruments suffisent-ils à juger la performance ?", "Parce qu'ils disent à la fois ce que l'organisation possède, comment elle est financée et ce qu'elle a gagné sur la période."],
      ],
      synthese: "Donc, la valeur ajoutée mesure la richesse créée : valeur de la production moins consommations intermédiaires. Elle se répartit entre salaires, impôts, intérêts, dividendes et autofinancement. Le bilan photographie le patrimoine à une date, le compte de résultat retrace l'activité de la période : ensemble, ils permettent de juger la performance.",
      motsCles: ["valeur ajoutée", "consommations intermédiaires", "répartition", "bilan", "emplois", "ressources", "compte de résultat", "résultat"],
      image: { file: "t11_l_va_bilan.png", legende: "Figure 5 — Mesurer la richesse créée et la performance." },
      contenu: [
        {
          sousTitre: "1. La valeur ajoutée : la richesse créée",
          texte: "Produire, c'est ajouter de la valeur à ce que l'on achète.",
          liste: [
            "Valeur ajoutée = valeur de la production − consommations intermédiaires.",
            "Les consommations intermédiaires sont détruites ou incorporées dans le produit.",
            "Exemple : un pain vendu 1 200 Ar à partir de 500 Ar de farine crée 700 Ar de valeur.",
          ],
        },
        {
          sousTitre: "2. La répartition de la valeur ajoutée",
          texte: "La richesse créée revient à plusieurs ayants droit.",
          liste: [
            "Les salaires versés aux travailleurs.",
            "Les impôts et cotisations dus à la puissance publique.",
            "Les intérêts aux prêteurs, les dividendes aux associés, le reste en autofinancement.",
          ],
        },
        {
          sousTitre: "3. Le bilan : une photographie",
          texte: "Le bilan décrit la situation à une date précise.",
          liste: [
            "Emplois : ce que l'organisation possède — machines, stocks, créances.",
            "Ressources : comment cela est financé — capital, dettes, réserves.",
            "Les deux parties sont toujours égales.",
          ],
        },
        {
          sousTitre: "4. Le compte de résultat : un film",
          texte: "Il retrace l'activité sur une période écoulée.",
          liste: [
            "Produits : ce que l'activité a rapporté sur la période.",
            "Charges : ce qu'elle a coûté sur la période.",
            "Résultat = produits − charges : bénéfice ou perte.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La valeur ajoutée se calcule par…", opts: ["production − consommations intermédiaires", "recettes − charges", "capital − dettes"], ok: 0, expl: "C'est la richesse créée par l'activité." },
          { q: "Le bilan décrit…", opts: ["le patrimoine à une date", "les ventes du mois", "les salaires versés"], ok: 0, expl: "C'est une photographie." },
          { q: "Le compte de résultat retrace…", opts: ["une période écoulée", "une date précise", "les seules dettes"], ok: 0, expl: "Il enregistre produits et charges de la période." },
          { q: "La farine achetée par le boulanger est…", opts: ["une consommation intermédiaire", "un emploi du bilan", "un salaire"], ok: 0, expl: "Elle est incorporée au produit." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Les dividendes versés proviennent de la valeur ajoutée.", rep: true, expl: "Ils font partie de sa répartition." },
          { txt: "Le bilan et le compte de résultat donnent la même information.", rep: false, expl: "L'un photographie, l'autre retrace la période." },
          { txt: "Le résultat du compte de résultat peut être une perte.", rep: true, expl: "Quand les charges dépassent les produits." },
          { txt: "Une machine achetée est une consommation intermédiaire.", rep: false, expl: "C'est un emploi durable, inscrit au bilan." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis la valeur ajoutée et donne la formule.", r: "C'est la richesse créée par l'organisation : valeur ajoutée = valeur de la production − consommations intermédiaires." },
          { q: "Cite quatre emplois de la valeur ajoutée.", r: "Les salaires, les impôts et cotisations, les intérêts et dividendes, et l'autofinancement." },
          { q: "Que montre le bilan ?", r: "Il photographie le patrimoine à une date : les emplois, c'est-à-dire ce que possède l'organisation, et les ressources, c'est-à-dire comment cela est financé." },
          { q: "Quelle différence entre le bilan et le compte de résultat ?", r: "Le bilan décrit une situation à un instant donné, le compte de résultat retrace les produits et les charges d'une période pour dégager un résultat." },
        ]},
        { type: "appariement", consigne: "Relie chaque notion à sa définition.", pointsPar: 1, items: [
          { g: ["Production moins consommations intermédiaires", "Patrimoine à une date", "Produits moins charges", "Bien incorporé au produit", "Part revenant aux salariés"], d: ["Valeur ajoutée", "Bilan", "Résultat", "Consommation intermédiaire", "Salaires"], pairs: [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 6
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "La responsabilité sociétale de l'entreprise",
      theme: "Production dans les organisations",
      ras: "Examiner la performance de l'entreprise",
      valeurs: "Persévérance, Responsabilité",
      objectif: "expliquer en quoi consiste la responsabilité sociétale de l'entreprise",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Qu'est-ce que la valeur ajoutée ?", "La valeur de la production moins les consommations intermédiaires."],
        ["Que montre le compte de résultat ?", "Les produits et les charges d'une période, et le résultat."],
      ],
      mise: [
        "Une usine qui gagne de l'argent mais pollue la rivière du village est-elle une bonne entreprise ?",
        "Sa performance financière ne suffit pas à en juger : on attend aussi qu'elle réponde de ses effets sur les personnes et sur l'environnement. C'est la responsabilité sociétale de l'entreprise.",
      ],
      observation: "le schéma des trois piliers de la RSE",
      observationSupport: "Schéma de la RSE affiché ou distribué",
      technAna: "Lecture de schéma et débat dirigé",
      qa: [
        ["Qu'est-ce que la responsabilité sociétale de l'entreprise ?", "La prise en compte volontaire par l'entreprise des effets de son activité sur la société et sur l'environnement, au-delà de ses obligations légales."],
        ["Cite les trois piliers de la RSE.", "Le pilier économique, le pilier social et le pilier environnemental."],
        ["Que recouvre le pilier économique ?", "La viabilité de l'activité, les emplois et les revenus distribués, l'innovation et la contribution au développement local."],
        ["Que recouvre le pilier social ?", "Les conditions de travail, la formation, le dialogue avec les salariés et les effets sur le territoire."],
        ["Que recouvre le pilier environnemental ?", "La consommation de ressources, les déchets, l'énergie utilisée, les pollutions et le climat."],
        ["Qu'est-ce qu'un impact positif ?", "Un effet favorable de l'activité : emplois créés, compétences transmises, services rendus au territoire."],
        ["Qu'est-ce qu'un impact négatif ?", "Un effet défavorable : pollution, épuisement des ressources, conditions de travail dégradées."],
        ["Pourquoi la RSE n'est-elle pas seulement de la communication ?", "Parce qu'elle engage des choix mesurables : investissements, procédures, achats, et parce qu'elle est évaluée par les parties prenantes."],
      ],
      synthese: "Donc, la responsabilité sociétale engage l'entreprise au-delà de ses obligations légales. Elle repose sur trois piliers : économique, social et environnemental. Il s'agit de mesurer les impacts positifs et négatifs de l'activité et d'en répondre, ce qui distingue la démarche réelle d'une simple communication.",
      motsCles: ["responsabilité sociétale", "RSE", "pilier économique", "pilier social", "pilier environnemental", "impact positif", "impact négatif", "parties prenantes"],
      image: { file: "t11_l_rse.png", legende: "Figure 6 — Les trois piliers de la responsabilité sociétale." },
      contenu: [
        {
          sousTitre: "1. De quoi parle-t-on ?",
          texte: "La RSE engage l'entreprise au-delà de la loi.",
          liste: [
            "Elle porte sur les effets de l'activité, pas seulement sur ses résultats.",
            "Elle est volontaire : l'entreprise choisit d'en répondre.",
            "Elle se vérifie dans les actes, pas dans les seules déclarations.",
          ],
        },
        {
          sousTitre: "2. Le pilier économique",
          texte: "L'entreprise doit d'abord durer pour tenir ses promesses.",
          liste: [
            "Viabilité de l'activité et capacité d'investir.",
            "Emplois et revenus distribués dans le territoire.",
            "Innovation et contribution au développement local.",
          ],
        },
        {
          sousTitre: "3. Le pilier social",
          texte: "L'activité touche directement les personnes.",
          liste: [
            "Conditions de travail et sécurité.",
            "Formation et progression des compétences.",
            "Dialogue avec les salariés et effets sur les riverains.",
          ],
        },
        {
          sousTitre: "4. Le pilier environnemental",
          texte: "Produire consomme des ressources et produit des déchets.",
          liste: [
            "Prélèvements sur les ressources et gestion des déchets.",
            "Énergie consommée et pollutions émises.",
            "Contribution au climat, que l'on peut mesurer et réduire.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Les trois piliers de la RSE sont…", opts: ["économique, social et environnemental", "juridique, fiscal et commercial", "local, national et mondial"], ok: 0, expl: "Ils couvrent les trois effets de l'activité." },
          { q: "La RSE est une démarche…", opts: ["volontaire", "imposée par la loi", "réservée à l'État"], ok: 0, expl: "Elle va au-delà des obligations légales." },
          { q: "Une pollution de rivière est un impact…", opts: ["négatif", "positif", "neutre"], ok: 0, expl: "Elle dégrade le milieu et les usages." },
          { q: "La formation des salariés relève du pilier…", opts: ["social", "économique", "environnemental"], ok: 0, expl: "Elle concerne les personnes." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La RSE se limite au respect des obligations légales.", rep: false, expl: "Elle va au-delà de la loi." },
          { txt: "La création d'emplois est un impact positif.", rep: true, expl: "C'est un effet favorable de l'activité." },
          { txt: "L'énergie consommée relève du pilier environnemental.", rep: true, expl: "Elle pèse sur les ressources et le climat." },
          { txt: "Une démarche RSE se prouve par des actes mesurables.", rep: true, expl: "Investissements, procédures et achats la rendent vérifiable." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis la responsabilité sociétale de l'entreprise.", r: "C'est la prise en compte volontaire par l'entreprise des effets de son activité sur la société et sur l'environnement, au-delà de ses obligations légales." },
          { q: "Cite les trois piliers et ce que recouvre chacun.", r: "Le pilier économique : viabilité, emplois et innovation ; le pilier social : conditions de travail et dialogue ; le pilier environnemental : ressources, déchets et climat." },
          { q: "Donne un exemple d'impact positif et un exemple d'impact négatif.", r: "Impact positif : des emplois créés et des compétences transmises. Impact négatif : une rivière polluée par les rejets de l'usine." },
          { q: "Pourquoi la RSE n'est-elle pas seulement de la communication ?", r: "Parce qu'elle engage des choix mesurables, investissements, procédures et achats, évalués par les parties prenantes." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Le pilier qui porte sur les conditions de travail est le pilier", suite: "social" },
          { debut: "Le pilier qui porte sur les déchets et l'énergie est le pilier", suite: "environnemental" },
          { debut: "Une rivière polluée est un impact", suite: "négatif" },
          { debut: "La RSE va au-delà des obligations", suite: "légales" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 7
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les parties prenantes de l'entreprise",
      theme: "Production dans les organisations",
      ras: "Déterminer les parties prenantes de l'entreprise, leurs contributions et leurs intérêts",
      valeurs: "Persévérance, Responsabilité",
      objectif: "identifier les parties prenantes et comparer leurs contributions, attentes et intérêts",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Cite les trois piliers de la RSE.", "Économique, social et environnemental."],
        ["Qu'est-ce qu'une organisation à but non lucratif ?", "Une organisation où le service rendu prime sur le partage d'un bénéfice."],
      ],
      mise: [
        "Quand une entreprise décide d'augmenter les salaires, qui est content, et qui l'est moins ?",
        "Les salariés y gagnent ; les associés voient leur dividende baisser. Une entreprise n'a jamais un seul interlocuteur : elle compose avec des acteurs dont les intérêts ne coïncident pas toujours.",
      ],
      observation: "le schéma des parties prenantes",
      observationSupport: "Schéma des parties prenantes affiché ou distribué",
      technAna: "Lecture de schéma et débat dirigé",
      qa: [
        ["Qu'est-ce qu'une partie prenante ?", "Toute personne ou tout groupe qui contribue à l'activité de l'entreprise ou qui est affecté par elle."],
        ["Cite trois acteurs internes.", "Les associés ou actionnaires, les salariés et les dirigeants."],
        ["Cite quatre acteurs externes.", "Les clients, les fournisseurs, les banques, l'État, sans oublier les riverains et les concurrents."],
        ["Qu'apportent les associés ?", "Le capital et la prise de risque ; ils attendent un revenu et la valeur de leur part."],
        ["Qu'apportent les salariés ?", "Leur travail et leurs compétences ; ils attendent un salaire, des conditions de travail et une progression."],
        ["Qu'attend l'État ?", "Le respect des règles, les impôts et cotisations, et la contribution à l'emploi."],
        ["Qu'est-ce qu'un intérêt convergent ?", "Un intérêt partagé : la pérennité de l'entreprise profite à tous les acteurs."],
        ["Cite un intérêt divergent.", "Salaires et dividendes : ce qui va aux uns ne va pas aux autres ; ou encore prix d'achat bas pour le client et marge élevée pour l'entreprise."],
      ],
      synthese: "Donc, l'entreprise compose avec des parties prenantes internes (associés, salariés, dirigeants) et externes (clients, fournisseurs, banques, État, riverains). Chacune apporte une contribution et attend une contrepartie. La pérennité de l'entreprise est un intérêt convergent, mais des intérêts divergents subsistent : salaires et dividendes, prix et marge, emploi et productivité.",
      motsCles: ["parties prenantes", "acteurs internes", "acteurs externes", "contribution", "attente", "intérêt convergent", "intérêt divergent", "dividende"],
      image: { file: "t11_l_parties_prenantes.png", legende: "Figure 7 — Contributions, attentes et intérêts des acteurs." },
      contenu: [
        {
          sousTitre: "1. Acteurs internes et acteurs externes",
          texte: "On distingue selon le lien avec l'organisation.",
          liste: [
            "Acteurs internes : associés et actionnaires, salariés, dirigeants.",
            "Acteurs externes : clients, fournisseurs, banques, État, riverains, concurrents.",
            "La frontière se dessine par l'appartenance à l'organisation.",
          ],
        },
        {
          sousTitre: "2. Ce que chacun apporte",
          texte: "Chaque acteur contribue à l'activité.",
          liste: [
            "Les associés : le capital et la prise de risque.",
            "Les salariés : le travail et les compétences.",
            "Les fournisseurs et les banques : les intrants et le financement.",
          ],
        },
        {
          sousTitre: "3. Ce que chacun attend",
          texte: "La contribution appelle une contrepartie.",
          liste: [
            "Les associés attendent un dividende et la valeur de leur part.",
            "Les salariés attendent un salaire et des conditions de travail.",
            "L'État attend le respect des règles et les prélèvements dus.",
          ],
        },
        {
          sousTitre: "4. Intérêts convergents et divergents",
          texte: "Les attentes ne coïncident pas toujours.",
          liste: [
            "Convergent : la pérennité de l'entreprise profite à tous.",
            "Divergent : salaires et dividendes, prix et marge, emploi et productivité.",
            "Le rôle du dirigeant est d'arbitrer sans rompre le jeu.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Parmi ces acteurs, lequel est interne ?", opts: ["le salarié", "le client", "le fournisseur"], ok: 0, expl: "Il appartient à l'organisation." },
          { q: "Les associés apportent…", opts: ["le capital", "les matières premières", "les impôts"], ok: 0, expl: "Ils prennent le risque financier." },
          { q: "Un intérêt convergent est…", opts: ["la pérennité de l'entreprise", "la hausse des salaires seule", "la baisse des prix seule"], ok: 0, expl: "Elle profite à tous les acteurs." },
          { q: "Salaires et dividendes forment un intérêt…", opts: ["divergent", "convergent", "inexistant"], ok: 0, expl: "Ce qui va aux uns ne va pas aux autres." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Un client est un acteur externe de l'entreprise.", rep: true, expl: "Il n'appartient pas à l'organisation." },
          { txt: "Les riverains ne sont jamais concernés par l'activité.", rep: false, expl: "Ils subissent ses effets : bruit, pollution, emploi." },
          { txt: "La banque attend le remboursement du prêt et des intérêts.", rep: true, expl: "C'est sa contrepartie au financement." },
          { txt: "Les intérêts des parties prenantes coïncident toujours.", rep: false, expl: "Ils divergent sur le partage de la valeur." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis une partie prenante et distingue acteurs internes et externes.", r: "C'est toute personne ou tout groupe qui contribue à l'activité ou qui est affecté par elle ; les acteurs internes appartiennent à l'organisation, les externes non." },
          { q: "Cite deux contributions et deux attentes dans l'entreprise.", r: "Les associés apportent le capital et attendent un dividende ; les salariés apportent leur travail et attendent un salaire." },
          { q: "Qu'est-ce qu'un intérêt convergent ?", r: "C'est un intérêt partagé par tous les acteurs : la pérennité de l'entreprise profite à chacun." },
          { q: "Cite deux exemples d'intérêts divergents.", r: "Salaires et dividendes d'une part, prix d'achat bas pour le client et marge élevée pour l'entreprise d'autre part." },
        ]},
        { type: "appariement", consigne: "Relie chaque acteur à ce qu'il apporte.", pointsPar: 1, items: [
          { g: ["Associés", "Salariés", "Banque", "Fournisseurs", "État"], d: ["Capital", "Travail", "Financement", "Matières premières", "Règles et services publics"], pairs: [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4]] },
        ]},
      ],
    },
  ],
};

module.exports = U;
