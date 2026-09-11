// ============================================================
// data-evaluations.js — révisions et sujets d'examen (Manuel SES T12, série OSE)
// Une révision et un sujet d'examen corrigé par unité.
// ============================================================

const revisions = {
  I: {
    titre: "Révision — Unité I : Croissance et développement",
    tableau: [
      ["Croissance économique", "Augmentation durable de la production d'un pays, mesurée par la hausse du PIB en volume."],
      ["PIB", "Valeur de la production réalisée sur le territoire pendant une année."],
      ["Valeur ajoutée", "Valeur de la production diminuée des consommations intermédiaires."],
      ["Approche par la dépense", "PIB = C + I + G + (X − M)."],
      ["Approche par la production", "Somme des valeurs ajoutées, augmentée des impôts nets des subventions."],
      ["Approche par le revenu", "Salaires, excédent brut d'exploitation et impôts nets des subventions."],
      ["Limites du PIB", "Travail domestique, économie informelle, répartition, environnement et temps libre."],
      ["Facteur travail", "Quantité d'actifs occupés et qualité de leur formation."],
      ["Facteur capital", "Machines, bâtiments, infrastructures et moyens financiers."],
      ["Intensité capitalistique", "Capital dont dispose chaque travailleur."],
      ["Rendements décroissants", "Chaque équipement supplémentaire apporte un gain plus faible."],
      ["PGF", "Part de la croissance non expliquée par les quantités de travail et de capital."],
      ["Progrès technique", "Innovation qui permet de produire davantage avec les mêmes facteurs."],
      ["Capital humain", "Compétences, formation et santé des travailleurs."],
      ["Croissance extensive", "Croissance obtenue en mobilisant davantage de facteurs."],
      ["Croissance intensive", "Croissance obtenue en rendant les mêmes facteurs plus efficaces."],
      ["Croissance endogène", "Croissance dont les causes sont internes au système économique."],
      ["Développement", "Amélioration durable des conditions de vie de la population."],
      ["RNB par habitant", "Revenu moyen par personne : il n'indique pas la répartition."],
      ["IDH", "Indice de 0 à 1 combinant santé, éducation et niveau de vie."],
      ["Sous-développement", "Situation où les besoins essentiels restent insatisfaits pour beaucoup."],
      ["Cercle vicieux", "Faible revenu, faible épargne, faible investissement, faible productivité."],
      ["Big push", "Investissements coordonnés qui deviennent rentables ensemble."],
      ["Développement durable", "Répondre aux besoins du présent sans compromettre ceux des générations futures."],
      ["Soutenabilité faible", "Les formes de capital sont substituables : seul le stock total compte."],
      ["Soutenabilité forte", "Le capital naturel est irremplaçable : chaque capital est préservé séparément."],
      ["Externalité négative", "Coût subi par un tiers et non compensé par celui qui le cause."],
      ["Réglementation", "Normes et interdictions imposées aux pollueurs."],
      ["Taxation environnementale", "Faire payer la pollution pour en décourager l'usage."],
      ["Marchés de quotas", "Plafond d'émissions fixé, puis droits échangeables entre entreprises."],
    ],
    questions: [
      ["Donne la définition du PIB et écris la formule de son calcul par la dépense.", "Le PIB est la valeur de la production réalisée sur le territoire pendant une année. Par la dépense : PIB = C + I + G + (X − M)."],
      ["Cite trois limites du PIB.", "Il ignore le travail domestique, l'économie informelle et les atteintes à l'environnement ; il ne dit rien de la répartition des revenus."],
      ["Quels sont les deux facteurs de la croissance et comment agissent-ils ?", "Le travail et le capital, par leur quantité et par leur qualité : un travailleur formé ou une machine récente produisent davantage."],
      ["Qu'est-ce que la productivité globale des facteurs ?", "C'est la part de la croissance qui ne s'explique ni par le travail ni par le capital : le progrès technique, l'organisation, la formation et la qualité des institutions."],
      ["Quelle différence y a-t-il entre croissance extensive et croissance intensive ?", "L'extensive mobilise davantage de facteurs ; l'intensive rend les mêmes facteurs plus efficaces grâce à la productivité."],
      ["Pourquoi la croissance est-elle un phénomène endogène ?", "Parce qu'elle s'entretient elle-même : l'investissement élève la productivité, la production augmente, et le profit finance l'investissement suivant."],
      ["Quelle différence y a-t-il entre croissance et développement ?", "La croissance mesure une hausse de production ; le développement désigne une amélioration des conditions de vie : santé, éducation, sécurité et liberté."],
      ["Quelles sont les trois dimensions de l'IDH ?", "Une vie longue et saine mesurée par l'espérance de vie, l'accès au savoir mesuré par la scolarisation, et un niveau de vie décent mesuré par le RNB par habitant."],
      ["Décris le cercle vicieux du sous-développement.", "Le faible revenu empêche l'épargne, la faible épargne empêche l'investissement, le manque d'investissement maintient une productivité basse, ce qui reconduit le faible revenu."],
      ["Qu'est-ce que le développement durable ?", "C'est un développement qui répond aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs."],
      ["Distingue soutenabilité faible et soutenabilité forte.", "La faible admet la substitution entre les formes de capital ; la forte tient le capital naturel pour irremplaçable et le protège séparément."],
      ["Cite les trois instruments d'une politique environnementale.", "La réglementation, la taxation et les marchés de quotas d'émission."],
    ],
  },
};

const examens = {
  I: {
    titre: "Sujet d'examen — Unité I : Croissance et développement",
    exercices: [
      { type: "qcm", consigne: "Choisis la bonne réponse en écrivant la lettre correspondante.", pointsPar: 1, items: [
        { q: "Le PIB mesure…", opts: ["la production réalisée sur le territoire en une année", "la richesse possédée par les habitants", "le budget de l'État"], ok: 0, expl: "C'est un flux de production calculé sur une période." },
        { q: "La PGF mesure…", opts: ["l'efficacité de la combinaison des facteurs", "la quantité de machines", "le nombre d'heures travaillées"], ok: 0, expl: "Elle explique la part de croissance non due aux quantités." },
        { q: "Une croissance obtenue en irriguant une rizière est…", opts: ["intensive", "extensive", "endogène"], ok: 0, expl: "On produit plus sur la même surface." },
        { q: "L'IDH combine santé, éducation et…", opts: ["niveau de vie", "superficie du pays", "nombre d'usines"], ok: 0, expl: "Le niveau de vie est mesuré par le RNB par habitant." },
      ]},
      { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
        { txt: "Le PIB indique comment la richesse est répartie.", rep: false, expl: "Le PIB par habitant est une moyenne : il ne dit rien de la répartition." },
        { txt: "La soutenabilité forte tient le capital naturel pour irremplaçable.", rep: true, expl: "Chaque forme de capital doit être préservée séparément." },
        { txt: "Un marché de quotas garantit la quantité globale d'émissions.", rep: true, expl: "Le plafond est fixé par l'autorité ; le marché fixe le prix." },
        { txt: "L'économie informelle est entièrement intégrée au PIB.", rep: false, expl: "Faute de déclaration, une partie de l'activité échappe aux statistiques." },
      ]},
      { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
        { q: "Donne la définition du PIB et la formule de son calcul par la dépense.", r: "Le PIB est la valeur de la production réalisée sur le territoire pendant une année ; par la dépense, PIB = C + I + G + (X − M)." },
        { q: "Quelle différence y a-t-il entre croissance et développement ?", r: "La croissance mesure une hausse de production, tandis que le développement désigne une amélioration durable des conditions de vie : santé, éducation, sécurité et liberté." },
        { q: "Décris les quatre maillons du cercle vicieux du sous-développement.", r: "Le faible revenu empêche l'épargne, la faible épargne empêche l'investissement, le manque d'investissement maintient une productivité basse, et la faible productivité reconduit le faible revenu." },
        { q: "Quelles sont les trois dimensions de l'IDH ?", r: "Une vie longue et saine mesurée par l'espérance de vie, l'accès au savoir mesuré par la scolarisation, et un niveau de vie décent mesuré par le RNB par habitant." },
        { q: "Cite les trois instruments d'une politique environnementale et dis sur quoi chacun agit.", r: "La réglementation agit sur la conduite, la taxation sur les prix, et les marchés de quotas sur la quantité globale d'émissions." },
      ]},
      { type: "appariement", consigne: "Relie chaque notion à sa définition.", pointsPar: 1, items: [
        { g: ["PIB", "Valeur ajoutée", "PGF", "Soutenabilité forte", "Externalité négative"], d: ["Capital naturel irremplaçable", "Coût subi par un tiers sans compensation", "Production moins consommations intermédiaires", "Production sur le territoire en une année", "Efficacité non due aux quantités de facteurs"], pairs: [[0, 3], [1, 2], [2, 4], [3, 0], [4, 1]] },
      ]},
      { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
        { debut: "PIB = C + I + G + (X −", suite: "M" },
        { debut: "La part de croissance non expliquée par les facteurs est la productivité", suite: "globale des facteurs" },
        { debut: "Produire plus avec les mêmes facteurs est une croissance", suite: "intensive" },
        { debut: "L'indice qui combine santé, éducation et niveau de vie est l'", suite: "IDH" },
        { debut: "Celui qui dégrade l'environnement en paie le coût : c'est le principe pollueur-", suite: "payeur" },
      ]},
    ],
  },
};

module.exports = { revisions, examens };
