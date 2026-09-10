// ============================================================
// data-evaluations.js — séances de révision et sujets d'examen
// 1 révision + 1 sujet d'examen par unité (5 unités, série OSE)
// ============================================================

const revisions = {
  I: {
    titre: "Révision — Unité I : Production dans les organisations",
    tableau: [
      ["Facteurs de production", "Le travail et le capital, avec les ressources naturelles nécessaires à la production."],
      ["Combinaison productive", "Manière d'associer les facteurs ; le choix retient la combinaison la moins coûteuse."],
      ["Coût fixe", "Dépense due quelle que soit la quantité produite : loyer, assurance, amortissement."],
      ["Coût variable", "Dépense qui suit la quantité produite : matières premières, énergie, emballages."],
      ["Coût moyen", "Coût total divisé par la quantité produite : coût de revient d'une unité."],
      ["Coût marginal", "Coût de la dernière unité produite ; il guide la décision de produire."],
      ["Chiffre d'affaires", "Prix de vente × quantité vendue : l'ensemble des recettes de l'entreprise."],
      ["Profit", "Recettes moins coûts : positif, c'est un bénéfice ; négatif, une perte."],
      ["Maximisation du profit", "Produire tant que la recette marginale dépasse le coût marginal ; s'arrêter quand elles s'égalent."],
      ["Valeur ajoutée", "Valeur de la production moins consommations intermédiaires : richesse créée."],
      ["Bilan", "Photographie du patrimoine à une date : emplois à l'actif, ressources au passif."],
      ["Compte de résultat", "Produits et charges de la période, dont la différence donne le résultat net."],
      ["RSE", "Responsabilité sociétale : impacts sociaux et environnementaux assumés par l'entreprise."],
      ["Parties prenantes", "Acteurs internes et externes affectés par l'entreprise ou capables de l'influencer."],
      ["Intérêts convergents / divergents", "Objectifs communs ou opposés ; les conflits se règlent par la négociation, le contrat et la loi."],
    ],
    questions: [
      ["Quelle différence y a-t-il entre un coût fixe et un coût variable ?", "Le coût fixe est dû quelle que soit la production — loyer, assurance — tandis que le coût variable suit la quantité produite : matières premières, énergie, emballages."],
      ["Comment calcule-t-on le coût moyen, et que mesure-t-il ?", "Le coût moyen est le coût total divisé par la quantité produite : il mesure le coût de revient d'une unité et sert à fixer le prix de vente."],
      ["Énonce la règle de maximisation du profit.", "Il faut produire une unité supplémentaire tant que la recette marginale dépasse le coût marginal, et s'arrêter quand les deux s'égalent."],
      ["Comment calcule-t-on la valeur ajoutée, et entre qui se répartit-elle ?", "Valeur ajoutée = valeur de la production − consommations intermédiaires. Elle se répartit entre les salariés, l'État, l'autofinancement de l'entreprise et les apporteurs de capitaux."],
      ["Quelle différence y a-t-il entre le bilan et le compte de résultat ?", "Le bilan est une photographie du patrimoine à une date — emplois à l'actif, ressources au passif — tandis que le compte de résultat retrace les produits et les charges de la période pour dégager le résultat."],
      ["Cite deux intérêts divergents dans une entreprise et un mode de règlement.", "Les salaires contre les dividendes, et la rentabilité immédiate contre la protection de l'environnement. Ces conflits se règlent par la négociation, le contrat, la loi, et par le juge en dernier recours."],
    ],
  },
};

const examens = {
  I: {
    titre: "Sujet d'examen — Unité I : Production dans les organisations",
    exercices: [
      { type: "qcm", consigne: "Choisis la bonne réponse en écrivant la lettre correspondante.", pointsPar: 1, items: [
        { q: "Le loyer d'un atelier est un coût…", opts: ["fixe", "variable", "marginal"], ok: 0, expl: "Il est dû quelle que soit la quantité produite." },
        { q: "La valeur ajoutée se calcule ainsi :", opts: ["production − consommations intermédiaires", "recettes − salaires", "chiffre d'affaires − impôts"], ok: 0, expl: "Elle mesure la richesse créée par l'entreprise elle-même." },
        { q: "Dans le bilan, un emprunt bancaire figure…", opts: ["au passif", "à l'actif", "dans le compte de résultat"], ok: 0, expl: "C'est une ressource : une dette envers la banque." },
        { q: "Une partie prenante est un acteur qui…", opts: ["est affecté par l'entreprise ou peut l'influencer", "achète uniquement ses produits", "n'a aucun lien avec elle"], ok: 0, expl: "La notion couvre tous les acteurs concernés, internes comme externes." },
      ]},
      { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
        { txt: "Le profit est maximal quand la recette marginale égale le coût marginal.", rep: true, expl: "Au-delà, chaque unité supplémentaire coûte plus qu'elle ne rapporte." },
        { txt: "Un chiffre d'affaires élevé garantit un bénéfice.", rep: false, expl: "Le résultat dépend aussi du niveau des charges." },
        { txt: "Le total de l'actif est toujours égal au total du passif.", rep: true, expl: "Tout emploi est financé par une ressource : capitaux propres ou dette." },
        { txt: "Une externalité négative est un coût payé volontairement par l'entreprise.", rep: false, expl: "C'est un coût supporté par la collectivité sans contrepartie." },
      ]},
      { type: "qr", consigne: "Réponds en rédigeant le calcul.", pointsPar: 2, items: [
        { q: "Un atelier a 400 000 Ar de charges fixes et produit 1 000 pièces à 300 Ar de coût variable. Calcule le coût total et le coût moyen.", r: "Coût total = 400 000 + (1 000 × 300) = 700 000 Ar ; coût moyen = 700 000 ÷ 1 000 = 700 Ar par pièce." },
        { q: "Production : 8 000 000 Ar ; consommations intermédiaires : 5 000 000 Ar. Calcule la valeur ajoutée.", r: "Valeur ajoutée = 8 000 000 − 5 000 000 = 3 000 000 Ar." },
        { q: "Chiffre d'affaires : 24 000 000 Ar ; charges : 20 500 000 Ar. Quel est le résultat et quel taux de marge cela représente-t-il ?", r: "Résultat = 3 500 000 Ar ; taux de marge = 3 500 000 ÷ 24 000 000 ≈ 14,6 %." },
        { q: "Pourquoi une entreprise bénéficiaire peut-elle manquer de trésorerie ?", r: "Parce que les amortissements sont des charges sans sortie d'argent, alors que les remboursements d'emprunt et les ventes à crédit réduisent la trésorerie disponible." },
      ]},
      { type: "appariement", consigne: "Relie chaque notion à sa définition.", pointsPar: 1, items: [
        { g: ["Coût marginal", "Valeur ajoutée", "RSE", "Chiffre d'affaires"], d: ["Richesse créée par l'activité", "Impacts sociaux et environnementaux assumés", "Prix de vente × quantité vendue", "Coût de la dernière unité produite"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
      ]},
      { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
        { debut: "Recettes moins coûts donne le", suite: "profit" },
        { debut: "Les achats consommés dans la production sont des consommations", suite: "intermédiaires" },
        { debut: "Les salariés, les clients et l'État sont des parties", suite: "prenantes" },
        { debut: "Salaires contre dividendes est un exemple d'intérêts", suite: "divergents" },
      ]},
    ],
  },
};

module.exports = { revisions, examens };
