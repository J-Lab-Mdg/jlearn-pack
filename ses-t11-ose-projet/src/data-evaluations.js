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
  II: {
    titre: "Révision — Unité II : Monnaie et financement",
    tableau: [
      ["Troc", "Échange direct d'un bien contre un autre, sans intermédiaire monétaire."],
      ["Monnaie", "Instrument accepté par tous pour payer, mesurer la valeur et conserver un pouvoir d'achat."],
      ["Fonctions de la monnaie", "Intermédiaire des échanges, unité de compte, réserve de valeur."],
      ["Monnaie fiduciaire", "Billets et pièces, dont la valeur repose sur la confiance dans l'institution émettrice."],
      ["Monnaie scripturale", "Écritures en compte : dépôts à vue, chèques, virements, paiements mobiles."],
      ["Masse monétaire", "Quantité de monnaie en circulation : M1, agrégat le plus liquide, puis M2 et M3."],
      ["Marché monétaire", "Marché de court terme où les banques s'échangent des liquidités."],
      ["Marché financier", "Marché de moyen et long terme où s'échangent actions et obligations."],
      ["Création monétaire", "Accroissement de la masse monétaire par l'octroi de crédits par les banques."],
      ["Multiplicateur du crédit", "Inverse du taux de réserve obligatoire : il mesure l'ampleur de la création monétaire."],
      ["Banque centrale", "Institution qui émet les billets, fixe le taux directeur et contrôle les banques."],
      ["Banque commerciale", "Établissement qui collecte les dépôts et accorde les crédits au public."],
      ["Capacité de financement", "Situation d'un agent dont l'épargne dépense moins que son revenu : il dégage une épargne."],
      ["Besoin de financement", "Situation d'un agent dont l'investissement dépasse l'épargne disponible."],
      ["Autofinancement", "Financement interne : bénéfice conservé et amortissements dégagés par l'activité."],
      ["Crédit bancaire", "Financement externe intermédié : la banque prête les fonds collectés."],
      ["Action", "Titre de propriété : donne droit au dividende et au vote, avec partage du risque."],
      ["Obligation", "Titre de créance remboursé à l'échéance, avec intérêts connus à l'avance."],
      ["Intérêts simples", "I = capital × taux × durée, calculés uniquement sur le capital initial."],
      ["Valeur acquise", "Capital augmenté des intérêts : C × (1 + taux × durée)."],
      ["Taux nominal", "Taux affiché au contrat, qui sert au calcul des intérêts versés."],
      ["Taux réel", "Taux nominal diminué de la hausse des prix : il mesure le gain en pouvoir d'achat."],
      ["Risque de crédit", "Risque que l'emprunteur ne rembourse pas tout ou partie des sommes dues."],
      ["Caution solidaire", "Engagement de rembourser à la place de l'emprunteur défaillant."],
    ],
    questions: [
      ["Quelles sont les trois fonctions de la monnaie ?", "Intermédiaire des échanges — elle sert à payer ; unité de compte — elle mesure la valeur ; réserve de valeur — elle conserve le pouvoir d'achat dans le temps."],
      ["Comment une banque crée-t-elle de la monnaie ?", "En accordant un crédit : elle inscrit la somme au compte de l'emprunteur, ce qui accroît la masse monétaire. Le cycle dépôt-réserve-crédit se répète, dans la limite des réserves obligatoires et de la solvabilité des emprunteurs."],
      ["Quelle différence y a-t-il entre la banque centrale et une banque commerciale ?", "La banque centrale émet les billets, fixe le taux directeur et contrôle les banques ; la banque commerciale collecte les dépôts du public et accorde les crédits, en recherchant un profit."],
      ["Quelle différence y a-t-il entre une action et une obligation ?", "L'action est un titre de propriété : elle donne droit au dividende et partage le risque. L'obligation est un titre de créance : elle est remboursée à l'échéance, avec des intérêts connus à l'avance."],
      ["Comment calcule-t-on des intérêts simples et la valeur acquise ?", "Intérêts = capital × taux × durée, la durée étant exprimée en années. Valeur acquise = capital × (1 + taux × durée), soit le capital augmenté des intérêts."],
      ["Qu'est-ce que le taux réel, et quand devient-il négatif ?", "Le taux réel est le taux nominal diminué de la hausse des prix : il mesure le gain en pouvoir d'achat. Il devient négatif quand la hausse des prix dépasse le taux nominal."],
      ["Cite trois risques liés au crédit et une parade pour chacun.", "Le risque de défaut, couvert par l'étude du dossier et les garanties ; le risque de taux, limité par le choix d'un taux fixe ; le risque de liquidité, réduit par une durée adaptée et une épargne de précaution."],
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
  II: {
    titre: "Sujet d'examen — Unité II : Monnaie et financement",
    exercices: [
      { type: "qcm", consigne: "Choisis la bonne réponse en écrivant la lettre correspondante.", pointsPar: 1, items: [
        { q: "La fonction de la monnaie qui permet de comparer les prix est…", opts: ["l'unité de compte", "la réserve de valeur", "le troc"], ok: 0, expl: "Les prix sont exprimés dans une unité commune." },
        { q: "Une action est…", opts: ["un titre de propriété", "un titre de créance", "un dépôt à vue"], ok: 0, expl: "Elle donne droit au dividende et au vote en assemblée." },
        { q: "Le multiplicateur du crédit avec un taux de réserve de 20 % est de…", opts: ["5", "2", "20"], ok: 0, expl: "Il vaut 1 ÷ 0,20 = 5." },
        { q: "Un emprunteur dont l'épargne est inférieure à son investissement est en situation de…", opts: ["besoin de financement", "capacité de financement", "autofinancement"], ok: 0, expl: "Il doit trouver des ressources extérieures." },
      ]},
      { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
        { txt: "La monnaie scripturale est composée des billets et des pièces.", rep: false, expl: "Elle est faite d'écritures en compte : dépôts à vue, virements, paiements mobiles." },
        { txt: "La banque centrale est la banque des banques.", rep: true, expl: "Elle leur prête en dernier ressort et fixe le taux directeur." },
        { txt: "L'autofinancement dépend du résultat de l'entreprise.", rep: true, expl: "Il réunit le bénéfice conservé et les amortissements." },
        { txt: "Un taux réel négatif avantage le prêteur.", rep: false, expl: "Le prêteur perd du pouvoir d'achat ; c'est l'emprunteur qui gagne." },
      ]},
      { type: "qr", consigne: "Réponds en rédigeant le calcul.", pointsPar: 2, items: [
        { q: "Un capital de 2 000 000 Ar est placé à 6 % pendant 3 ans. Calcule les intérêts simples.", r: "I = 2 000 000 × 0,06 × 3 = 360 000 Ar." },
        { q: "Même capital placé à 8 % pendant 2 ans : calcule la valeur acquise.", r: "VA = 2 000 000 × (1 + 0,08 × 2) = 2 320 000 Ar." },
        { q: "Taux nominal 8 %, hausse des prix 10 % : calcule le taux réel et dis qui perd.", r: "Taux réel ≈ 8 % − 10 % = −2 % : le prêteur perd du pouvoir d'achat, l'emprunteur gagne." },
        { q: "Un dépôt initial de 1 000 000 Ar, avec un taux de réserve obligatoire de 20 % : quelle masse monétaire peut être créée ?", r: "Masse monétaire = 1 000 000 ÷ 0,20 = 5 000 000 Ar, dont 4 000 000 Ar de monnaie créée par le crédit." },
        { q: "Cite deux conditions d'accès au marché financier pour une entreprise.", r: "Des comptes régulièrement publiés et certifiés, et une taille suffisante pour couvrir les frais d'émission par des montants importants." },
      ]},
      { type: "appariement", consigne: "Relie chaque notion à sa définition.", pointsPar: 1, items: [
        { g: ["Masse monétaire", "Marché monétaire", "Autofinancement", "Obligation", "Banque centrale"], d: ["Institution qui fixe le taux directeur", "Titre de créance remboursé à échéance", "Quantité de monnaie en circulation", "Marché de court terme entre banques", "Financement interne par le résultat"], pairs: [[0, 2], [1, 3], [2, 4], [3, 1], [4, 0]] },
      ]},
      { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
        { debut: "Intérêts simples : I = capital × taux ×", suite: "durée" },
        { debut: "Le taux affiché au contrat est le taux", suite: "nominal" },
        { debut: "Une entreprise qui investit plus qu'elle n'épargne a un besoin de", suite: "financement" },
        { debut: "Le risque que l'emprunteur ne rembourse pas est le risque de", suite: "crédit" },
        { debut: "La banque centrale prête aux banques en dernier", suite: "ressort" },
      ]},
    ],
  },
};

module.exports = { revisions, examens };
