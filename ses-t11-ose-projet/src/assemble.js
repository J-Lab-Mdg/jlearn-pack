// ============================================================
// assemble.js — assemblage du manuel SES T11, série OSE (Collection J-Learn)
// Bloc 1 : Unité I seule (livraison de validation)
// TOTAL = 70 séances (découpage complet du manuel, voir PLAN-MANUEL-SES-T11-OSE.md)
// ============================================================
const fs = require("fs");
const path = require("path");
const {
  Document, Paragraph, TextRun, AlignmentType, PageBreak,
  TableRow, InternalHyperlink,
} = require("docx");

const B = require("./builders");
const EB = require("./exercise-bank");
const { generateSeanceDocContent } = require("./seance-generator");
const U1 = require("./data-unite1");
const U2 = require("./data-unite2");
const U3 = require("./data-unite3");
const U4 = require("./data-unite4");
const U5 = require("./data-unite5");
const { revisions, examens } = require("./data-evaluations");

const UNITS = [U1, U2, U3, U4, U5];
const TOTAL = 70;
const IMG_DIR = path.join(__dirname, "..", "output", "images");

// Découpage complet (70 séances) — 5 thématiques du Programme d'Études T11
const PLAN = [
  ["I", "Production dans les organisations", 11],
  ["II", "Monnaie et financement", 13],
  ["III", "Coordination par le marché et par l'État", 13],
  ["IV", "Socialisation de l'individu", 12],
  ["V", "Sciences politiques et droit", 11],
];

// ------------------------------------------------------------
// Couverture
// ------------------------------------------------------------
function coverPage() {
  return [
    B.p("", { size: 24 }),
    B.p("Collection J-Learn", { bold: true, size: 28, align: AlignmentType.CENTER, color: B.BLUE, spacingAfter: 400 }),
    B.p("MANUEL DE SCIENCES ÉCONOMIQUES ET SOCIALES", { bold: true, size: 34, align: AlignmentType.CENTER, color: B.RED, spacingAfter: 120 }),
    B.p("CLASSE DE T11 — SÉRIE OSE", { bold: true, size: 30, align: AlignmentType.CENTER, spacingAfter: 200 }),
    B.p("Programme d'Études — 5 unités thématiques · 70 séances", { size: 24, align: AlignmentType.CENTER, spacingAfter: 300 }),
    B.p("Fiches de préparation · Leçons · Exercices corrigés · Sujets d'examen corrigés", { size: 20, align: AlignmentType.CENTER, spacingAfter: 600 }),
    B.p("Madagascar", { size: 22, align: AlignmentType.CENTER, spacingAfter: 60 }),
    new Paragraph({ children: [new PageBreak()] }),
  ];
}

// ------------------------------------------------------------
// Avant-propos
// ------------------------------------------------------------
function avantPropos() {
  const out = [];
  out.push(B.sectionHeading("AVANT-PROPOS", "avant", { size: 26 }));
  out.push(B.p("Ce manuel de Sciences Économiques et Sociales pour la classe de T11, série OSE, a été élaboré à partir du Programme d'Études officiel de Madagascar, section « Sciences Économiques et Sociales ». Il couvre les cinq thématiques du programme : la production dans les organisations, la monnaie et le financement, la coordination par le marché et par l'État, la socialisation de l'individu, enfin les sciences politiques et le droit.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Chaque séance est composée d'une fiche de préparation, d'une leçon, d'exercices notés et de leur corrigé. Le manuel suit la méthode J-Learn organisée en trois grandes étapes : la Révision, la Nouvelle Leçon (six sous-étapes) et l'Évaluation.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Le Programme d'Études attribue cinq heures par semaine aux Sciences Économiques et Sociales en série OSE, soit cent trente-deux heures pour l'année. Le découpage en soixante-dix séances respecte cette répartition : soixante séances de cours, une séance de révision et un sujet d'examen corrigé par unité. La durée de chaque séance est laissée à l'enseignant, qui la répartit selon le rythme de sa classe, le niveau des apprenants et le matériel disponible.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Conformément aux orientations pédagogiques du programme, les séances privilégient une approche centrée sur l'apprenant : celui-ci observe, questionne, travaille en groupe et construit lui-même ses savoirs. Les démarches inductive, déductive, comparative, documentaire et argumentative sont mobilisées selon les objets d'étude, et l'enseignant joue le rôle de guide, de médiateur et d'accompagnateur.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Les séances sont regroupées en cinq unités, une par thématique du programme. Les exemples, situations et supports proposés sont ancrés dans la réalité malgache : marché local, entreprise artisanale, coopérative, exploitation agricole, administration et vie associative.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Pour bien utiliser ce manuel, se reporter au « Mode d'emploi » qui suit.", { size: 21, spacingAfter: 120 }));
  out.push(new Paragraph({ children: [new PageBreak()] }));
  return out;
}

// ------------------------------------------------------------
// Mode d'emploi
// ------------------------------------------------------------
function modeEmploi() {
  const out = [];
  out.push(B.sectionHeading("MODE D'EMPLOI", "mode", { size: 26 }));
  out.push(B.p("Comment est construite chaque séance ?", { bold: true, size: 22, color: B.GREEN, spacingAfter: 80 }));
  out.push(B.p("I. Révision — questions simples sur la séance précédente, avec la réponse attendue (R.A.).", { size: 21, spacingAfter: 60 }));
  out.push(B.p("II. Nouvelle leçon — six sous-étapes : 1. Mise en situation, 2. Présentation, 3. Observation, 4. Analyse, 5. Synthèse (énoncée par l'enseignant), 6. Application.", { size: 21, spacingAfter: 60 }));
  out.push(B.p("III. Évaluation — exercices écrits, avec corrigé.", { size: 21, spacingAfter: 100 }));
  out.push(B.p("La durée de chaque séance n'est pas imprimée : elle est laissée à l'enseignant, qui répartit le temps entre les trois grandes étapes selon le rythme de sa classe et la difficulté de la leçon.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Après la fiche de préparation viennent la page LEÇON (le contenu à retenir) puis la section EXERCICES (exercices notés avec barème, suivis du corrigé détaillé).", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Code couleur utilisé dans ce manuel :", { bold: true, size: 22, color: B.GREEN, spacingAfter: 80 }));
  out.push(B.p("Titre de leçon : rouge.", { size: 21, spacingAfter: 40, color: B.RED }));
  out.push(B.p("Sous-titres : vert.", { size: 21, spacingAfter: 40, color: B.GREEN }));
  out.push(B.p("Mots clés de la leçon : bleu et gras.", { size: 21, spacingAfter: 40, color: B.BLUE }));
  out.push(B.p("Corrigé des exercices : rose bordeaux.", { size: 21, spacingAfter: 40, color: B.PINK }));
  out.push(B.p("Texte courant : noir. Police : Times New Roman.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Types d'exercices utilisés (jamais nommés dans les consignes) : choix de réponses, Vrai/Faux, texte à compléter, question/réponse, appariement, complétion. Chaque exercice de la section EXERCICES est noté selon un barème ; le total est affiché.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Les exercices placés dans les étapes « Application » et « Évaluation » de la fiche ne portent ni note ni barème : ce sont des exercices de classe, corrigés à l'oral ou au tableau.", { size: 21, spacingAfter: 120 }));
  out.push(new Paragraph({ children: [new PageBreak()] }));
  return out;
}

// ------------------------------------------------------------
// Table des matières
// ------------------------------------------------------------
function tableDesMatieres() {
  const out = [];
  out.push(B.sectionHeading("TABLE DES MATIÈRES", null, { size: 26 }));
  out.push(B.tocLink("Avant-propos", "avant", { size: 22, bold: true }));
  out.push(B.tocLink("Mode d'emploi", "mode", { size: 22, bold: true }));

  let n = 0;
  UNITS.forEach((u) => {
    out.push(B.tocLink("UNITÉ " + u.num + " — " + u.titre, "unite" + u.num, { size: 22, bold: true }));
    u.topics.forEach((t) => {
      n += 1;
      out.push(B.tocLink("Séance " + n + " — " + t.titre, "seance" + n, { size: 19, indent: 360 }));
    });
    n += 1;
    out.push(B.tocLink("Séance " + n + " — " + revisions[u.num].titre, "seance" + n, { size: 19, indent: 360 }));
    n += 1;
    out.push(B.tocLink("Séance " + n + " — " + examens[u.num].titre, "seance" + n, { size: 19, indent: 360 }));
  });


  out.push(B.tocLink("Annexes", "annexes", { size: 22, bold: true }));
  out.push(B.tocLink("Glossaire", "glossaire", { size: 19, indent: 360 }));
  out.push(B.tocLink("Auto-évaluation", "autoeval", { size: 19, indent: 360 }));
  out.push(B.tocLink("Index", "index", { size: 19, indent: 360 }));
  out.push(B.tocLink("Bibliographie et webographie", "biblio", { size: 19, indent: 360 }));
  out.push(B.tocLink("Table des illustrations", "illus", { size: 19, indent: 360 }));
  out.push(new Paragraph({ children: [new PageBreak()] }));
  return out;
}

// ------------------------------------------------------------
// Tableau de bord d'une unité
// ------------------------------------------------------------
function tableauDeBord(u, startNum) {
  const out = [];
  out.push(B.sectionHeading("UNITÉ " + u.num + " — " + u.titre, "unite" + u.num, { size: 26 }));
  out.push(B.p("Résultats d'apprentissage spécifiques (Programme d'Études T11, série OSE) :", { bold: true, size: 20, spacingAfter: 40 }));
  u.ras.split(" · ").forEach((r) => out.push(B.p("• " + r, { size: 20, spacingAfter: 30, indent: { left: 360 } })));
  out.push(B.p("Valeurs à véhiculer : " + u.valeurs, { size: 20, spacingAfter: 60 }));
  out.push(B.p("Volume horaire de l'unité : " + u.duree + " (la discipline dispose de 3 heures par semaine, soit 76 heures pour l'année). Durée de chaque séance laissée à l'enseignant.", { size: 20, spacingAfter: 100 }));
  const rows = [
    new TableRow({ children: [
      B.cell([B.p("N°", { bold: true, size: 19 })], { shading: "D9E2F3" }),
      B.cell([B.p("Séance", { bold: true, size: 19 })], { shading: "D9E2F3" }),
    ]}),
  ];
  let n = startNum;
  u.topics.forEach((t) => {
    rows.push(new TableRow({ children: [
      B.cell([B.p("" + n, { size: 19 })]),
      B.cell([B.p(t.titre, { size: 19 })]),
    ]}));
    n += 1;
  });
  rows.push(new TableRow({ children: [
    B.cell([B.p("" + n, { size: 19, bold: true })]),
    B.cell([B.p(revisions[u.num].titre, { size: 19, bold: true })]),
  ]}));
  n += 1;
  rows.push(new TableRow({ children: [
    B.cell([B.p("" + n, { size: 19, bold: true })]),
    B.cell([B.p(examens[u.num].titre, { size: 19, bold: true })]),
  ]}));
  out.push(B.gridTable(rows, [8, 92]));
  out.push(new Paragraph({ children: [new PageBreak()] }));
  return out;
}

// ------------------------------------------------------------
// Séance de révision
// ------------------------------------------------------------
function revisionSeance(u, num) {
  const rev = revisions[u.num];
  const out = [];
  out.push(new Paragraph({ children: [new PageBreak()] }));
  out.push(B.sectionHeading("SÉANCE " + num + " / " + TOTAL, "seance" + num, { size: 22, color: B.BLUE }));
  out.push(B.banner("RÉVISION"));
  out.push(B.p(rev.titre, { bold: true, size: 26, align: AlignmentType.CENTER, color: B.RED, spacingAfter: 120 }));
  out.push(B.p("Durée : ____________ — Valeurs à véhiculer : " + u.valeurs, { size: 20, align: AlignmentType.CENTER, spacingAfter: 120 }));
  out.push(B.p("Tableau récapitulatif des notions", { bold: true, size: 22, color: B.GREEN, spacingAfter: 60 }));
  const rows = [
    new TableRow({ children: [
      B.cell([B.p("Notion", { bold: true, size: 19 })], { shading: "D9E2F3" }),
      B.cell([B.p("L'essentiel", { bold: true, size: 19 })], { shading: "D9E2F3" }),
    ]}),
  ];
  rev.tableau.forEach(([t, e]) => rows.push(new TableRow({ children: [
    B.cell([B.p(t, { size: 19, bold: true })]),
    B.cell([B.p(e, { size: 19 })]),
  ]})));
  out.push(B.gridTable(rows, [30, 70]));
  out.push(B.p("Questions de révision", { bold: true, size: 22, color: B.GREEN, spacingAfter: 60 }));
  rev.questions.forEach(([q, ra]) => {
    out.push(B.p(q, { size: 21, spacingAfter: 30 }));
    out.push(B.pHighlight("R.A. : " + ra, [], B.PINK, { size: 20, spacingAfter: 80 }));
  });
  return out;
}

// ------------------------------------------------------------
// Sujet d'examen
// ------------------------------------------------------------
function examenSeance(u, num) {
  const ex = examens[u.num];
  const out = [];
  out.push(new Paragraph({ children: [new PageBreak()] }));
  out.push(B.sectionHeading("SÉANCE " + num + " / " + TOTAL, "seance" + num, { size: 22, color: B.BLUE }));
  out.push(B.banner("EXAMEN"));
  out.push(B.p(ex.titre, { bold: true, size: 26, align: AlignmentType.CENTER, color: B.RED, spacingAfter: 80 }));
  out.push(B.p("Durée : ____________   ·   Barème total : " + totalPoints(ex.exercices) + " points", { size: 20, align: AlignmentType.CENTER, spacingAfter: 120 }));
  let total = 0;
  ex.exercices.forEach((exo, i) => {
    const d = EB.buildExo(exo);
    total += d.points;
    out.push(B.p("Exercice " + (i + 1) + " (" + d.points + " points)", { bold: true, size: 20, color: B.BLUE, spacingAfter: 30 }));
    out.push(B.p(exo.consigne, { italics: true, size: 19, spacingAfter: 30 }));
    d.parts.forEach((line) => out.push(B.p(line, { size: 19, spacingAfter: 25 })));
    out.push(B.p("", { size: 14 }));
  });
  out.push(B.p("TOTAL : " + total + " points", { bold: true, size: 21, align: AlignmentType.CENTER, spacingAfter: 160 }));
  out.push(B.sectionHeading("CORRIGÉ", null, { size: 24 }));
  ex.exercices.forEach((exo, i) => {
    const d = EB.buildExo(exo);
    out.push(B.p("Exercice " + (i + 1) + " — corrigé", { bold: true, size: 20, color: B.BLUE, spacingAfter: 30 }));
    d.corrige.forEach((c) => out.push(B.pHighlight(c.text, c.keys, B.PINK, { size: 19, spacingAfter: 25 })));
    out.push(B.p("", { size: 14 }));
  });
  return out;
}

function totalPoints(exos) {
  return exos.reduce((s, e) => s + EB.buildExo(e).points, 0);
}

// ------------------------------------------------------------
// Annexes
// ------------------------------------------------------------
const GLOSSAIRE = [
  ["Actif", "Partie du bilan qui présente les emplois : ce que l'entreprise possède et ce qu'on lui doit."],
  ["Action", "Titre de propriété qui donne droit au dividende et au vote : son détenteur partage le risque."],
  ["Aléa moral", "Changement de comportement après la signature du contrat, quand le risque est couvert."],
  ["Amortissement", "Constatation comptable de l'usure d'un bien durable ; c'est une charge sans sortie d'argent."],
  ["Anomie", "Affaiblissement ou disparition des repères collectifs : l'individu ne sait plus quelle règle suivre."],
  ["Arrêté", "Règlement pris par un ministre ou une autorité locale pour appliquer la loi."],
  ["Asymétrie d'information", "Situation où l'une des parties à l'échange détient une information que l'autre n'a pas."],
  ["Attente", "Contrepartie espérée par une partie prenante en échange de sa contribution."],
  ["Augmentation de capital", "Émission de nouvelles actions qui apporte des fonds propres sans créer de dette."],
  ["Autofinancement", "Part du résultat conservée par l'entreprise, augmentée des amortissements, pour financer ses investissements."],
  ["Banque centrale", "Institution qui émet les billets, fixe le taux directeur et contrôle les banques commerciales."],
  ["Banque commerciale", "Établissement qui collecte les dépôts du public et accorde les crédits."],
  ["Barrière à l'entrée", "Obstacle qui empêche un nouveau producteur d'entrer sur le marché : investissement, licence, brevet."],
  ["Bénéfice", "Résultat positif de l'exercice : produits supérieurs aux charges."],
  ["Besoin de financement", "Situation d'un agent dont l'investissement dépasse l'épargne disponible."],
  ["Bien collectif", "Bien dont l'usage par l'un n'empêche pas celui des autres et dont personne ne peut être exclu."],
  ["Bien commun", "Ressource dont l'usage est rival mais dont l'exclusion est difficile : forêt, pêcherie, pâturage."],
  ["Bilan", "Document qui présente le patrimoine de l'entreprise à une date : emplois à l'actif, ressources au passif."],
  ["Capacité de financement", "Situation d'un agent dont l'épargne excède l'investissement : il dispose de ressources à prêter."],
  ["Capitaux propres", "Ressources appartenant aux propriétaires : capital, réserves, report à nouveau, résultat."],
  ["Caution solidaire", "Engagement de rembourser à la place de l'emprunteur défaillant ; base du crédit de groupe."],
  ["Chiffre d'affaires", "Prix de vente multiplié par la quantité vendue : ensemble des recettes de l'activité."],
  ["Citoyenneté", "Qualité de membre de la cité : elle ouvre des droits et impose des devoirs."],
  ["Combinaison productive", "Manière dont l'entreprise associe ses facteurs de production pour produire."],
  ["Compte de résultat", "Document qui récapitule produits et charges de la période pour dégager le résultat."],
  ["Concurrence monopolistique", "Marché où les offreurs sont nombreux mais les produits différenciés."],
  ["Concurrence pure et parfaite", "Marché idéal réunissant atomicité, homogénéité, transparence, libre entrée et libre circulation des facteurs."],
  ["Consommations intermédiaires", "Biens et services entièrement consommés au cours du processus de production."],
  ["Constitution", "Texte suprême qui organise les pouvoirs publics et garantit les droits des citoyens."],
  ["Contribution", "Ce qu'une partie prenante apporte à l'entreprise : travail, capital, matières, crédit, règles."],
  ["Contrôle social", "Ensemble des moyens par lesquels une société amène ses membres à respecter les normes."],
  ["Contrôle social formel", "Contrôle exercé par des institutions spécialisées : police, justice, école, entreprise."],
  ["Contrôle social informel", "Contrôle exercé par l'entourage : regard, réprobation, rumeur, réputation."],
  ["Courbe d'offre", "Représentation graphique croissante de la relation entre le prix et la quantité offerte."],
  ["Courbe de demande", "Représentation graphique décroissante de la relation entre le prix et la quantité demandée."],
  ["Coût fixe", "Dépense due quelle que soit la quantité produite : loyer, assurance, amortissement."],
  ["Coût marginal", "Coût de la dernière unité produite ; il guide la décision de produire."],
  ["Coût moyen", "Coût total divisé par la quantité produite : coût de revient d'une unité."],
  ["Coût variable", "Dépense qui suit la quantité produite : matières premières, énergie, emballages."],
  ["Création monétaire", "Accroissement de la masse monétaire résultant de l'octroi de crédits par les banques."],
  ["Crédit bancaire", "Financement externe intermédié : la banque prête les fonds collectés auprès des déposants."],
  ["Défaillance du marché", "Situation où le marché n'alloue pas efficacement les ressources : externalité, bien collectif, asymétrie d'information."],
  ["Demande", "Quantité d'un bien que les acheteurs sont prêts et capables d'acheter à un prix donné."],
  ["Démocratie", "Régime où le pouvoir appartient au peuple, exercé par des représentants élus."],
  ["Dettes", "Ressources que l'entreprise doit rembourser : emprunts, dettes fournisseurs, dettes fiscales."],
  ["Déviance", "Écart par rapport aux normes admises dans un groupe, un lieu ou une époque."],
  ["Disposition à payer", "Prix maximum qu'un acheteur accepte de payer pour obtenir le bien."],
  ["Dividende", "Part du bénéfice versée aux propriétaires ou aux actionnaires."],
  ["Droit coutumier", "Ensemble des règles issues des usages d'une communauté, transmises oralement."],
  ["Échéance", "Date à laquelle le capital et les intérêts doivent être remboursés."],
  ["Entente", "Accord entre producteurs pour fixer les prix, les quantités ou se répartir le marché : elle est illicite."],
  ["Équilibre du marché", "Situation où la quantité offerte est égale à la quantité demandée."],
  ["État", "Ensemble d'institutions qui exercent le pouvoir souverain sur un territoire et une population."],
  ["État de droit", "État où la puissance publique est soumise à des règles connues, stables et contrôlées."],
  ["Étiquetage", "Désignation d'une personne par un trait qui finit par définir son identité."],
  ["Excédent", "Situation où l'offre dépasse la demande : les vendeurs baissent leurs prix."],
  ["Externalité", "Effet de l'activité sur des tiers, sans contrepartie monétaire ; elle est positive ou négative."],
  ["Externalité négative", "Coût imposé à un tiers sans compensation : pollution, bruit, déforestation."],
  ["Financement désintermédié", "Financement obtenu directement sur le marché financier, sans passer par une banque."],
  ["Financement intermédié", "Financement qui passe par un intermédiaire, en pratique une banque."],
  ["Hiérarchie des normes", "Classement des règles de droit : chaque règle respecte celle qui lui est supérieure."],
  ["Identité individuelle", "Ce qui rend une personne unique : son caractère et son histoire singulière."],
  ["Identité sociale", "Part de l'identité qui vient de l'appartenance à des groupes."],
  ["Imitation", "Mécanisme de socialisation : observer un modèle, retenir la conduite, la reproduire."],
  ["Injonction", "Mécanisme de socialisation : la règle, l'obligation ou l'interdit sont formulés explicitement."],
  ["Institution", "Organisme créé par la Constitution ou la loi, chargé d'une mission publique."],
  ["Interaction", "Mécanisme de socialisation : la conduite naît de l'échange et du retour d'autrui."],
  ["Intérêts convergents", "Objectifs communs à plusieurs parties prenantes, comme la pérennité de l'entreprise."],
  ["Intérêts divergents", "Objectifs opposés entre parties prenantes, comme salaires contre dividendes."],
  ["Intérêts simples", "Intérêts calculés uniquement sur le capital initial : I = capital × taux × durée."],
  ["Légitimité", "Reconnaissance du pouvoir comme juste, qui le fait accepter sans contrainte."],
  ["Liberté publique", "Droit fondamental garanti par la Constitution et protégé par le juge."],
  ["Loi", "Règle générale, impersonnelle et obligatoire, votée par le Parlement."],
  ["Marché", "Lieu réel ou virtuel où se rencontrent offreurs et demandeurs pour échanger contre un prix."],
  ["Marché financier", "Marché de moyen et long terme où les entreprises émettent actions et obligations."],
  ["Marché monétaire", "Marché de court terme où les banques s'échangent des liquidités."],
  ["Masse monétaire", "Quantité de monnaie en circulation, mesurée par les agrégats M1, M2 et M3."],
  ["Monarchie", "Régime où le pouvoir s'exerce à vie et se transmet le plus souvent par hérédité."],
  ["Monnaie fiduciaire", "Monnaie matérielle : billets et pièces, dont la valeur repose sur la confiance."],
  ["Monnaie scripturale", "Monnaie immatérielle faite d'écritures en compte : dépôts à vue, virements, paiements mobiles."],
  ["Monopole", "Marché où un seul offreur détient la totalité de l'offre."],
  ["Multiplicateur du crédit", "Inverse du taux de réserve obligatoire : il mesure l'ampleur de la création monétaire."],
  ["Nation", "Communauté humaine qui partage une histoire et une culture."],
  ["Norme", "Règle de conduite qui indique ce qu'il convient de faire dans une situation donnée."],
  ["Norme juridique", "Règle écrite, édictée par l'autorité publique et sanctionnée par une institution."],
  ["Norme sociale", "Règle issue des usages d'un groupe, sanctionnée par la réprobation diffuse."],
  ["Obligation", "Titre de créance remboursé à l'échéance, avec des intérêts connus à l'avance."],
  ["Offre", "Quantité d'un bien que les vendeurs sont prêts et capables de proposer à un prix donné."],
  ["Oligopole", "Marché dominé par un petit nombre d'offreurs."],
  ["Partie prenante", "Acteur interne ou externe affecté par l'activité de l'entreprise ou capable de l'influencer."],
  ["Passager clandestin", "Celui qui profite d'un bien collectif sans payer, ce qui décourage l'offre privée."],
  ["Passif", "Partie du bilan qui présente les ressources : capitaux propres et dettes."],
  ["Pénurie", "Situation où la demande dépasse l'offre : le prix a tendance à monter."],
  ["Personnalité sociale", "Manières durables d'agir, de penser et de sentir acquises dans son milieu."],
  ["Perte", "Résultat négatif de l'exercice : charges supérieures aux produits."],
  ["Politique conjoncturelle", "Action de court terme de l'État sur l'activité : relance quand elle ralentit, rigueur quand elle surchauffe."],
  ["Politique économique", "Ensemble des mesures par lesquelles l'État poursuit croissance, emploi, stabilité des prix et équilibre extérieur."],
  ["Pouvoir de marché", "Capacité d'un offreur à fixer son prix au-dessus du coût sans perdre sa clientèle."],
  ["Pouvoir exécutif", "Pouvoir qui applique la loi et dirige l'action de l'État : Gouvernement et administration."],
  ["Pouvoir judiciaire", "Pouvoir qui juge les litiges et sanctionne les infractions : les juridictions."],
  ["Pouvoir législatif", "Pouvoir qui vote la loi et contrôle le Gouvernement : le Parlement."],
  ["Prime de risque", "Part du taux d'intérêt qui compense la probabilité de non-remboursement."],
  ["Prix d'équilibre", "Prix pour lequel la quantité offerte est égale à la quantité demandée."],
  ["Profit", "Différence entre les recettes et les coûts ; positif, c'est un bénéfice."],
  ["Prophétie auto-réalisatrice", "Prédiction qui provoque sa propre réalisation : annoncer un échec le rend plus probable."],
  ["Recette", "Somme encaissée lors de la vente d'un bien ou d'un service."],
  ["Recette marginale", "Recette procurée par la dernière unité vendue ; elle guide la décision de produire."],
  ["Régime politique", "Manière dont le pouvoir est organisé, exercé et transmis dans un État."],
  ["Règlement", "Acte pris par l'exécutif pour appliquer la loi : décret ou arrêté."],
  ["République", "Régime où les responsables sont élus pour une durée limitée."],
  ["Résultat net", "Différence entre le total des produits et le total des charges de l'exercice."],
  ["Risque de crédit", "Risque que l'emprunteur ne rembourse pas tout ou partie des sommes dues."],
  ["RSE", "Responsabilité sociétale de l'entreprise : prise en compte assumée de ses impacts sociaux et environnementaux."],
  ["Sanction", "Réaction du groupe ou de l'institution face à une conduite conforme ou non."],
  ["Sélection adverse", "Mécanisme par lequel les mauvais produits chassent les bons quand l'acheteur ne peut juger la qualité."],
  ["Socialisation", "Processus par lequel l'individu intériorise les normes, les valeurs et les pratiques de sa société."],
  ["Socialisation primaire", "Socialisation de la petite enfance, assurée par la famille et le proche entourage."],
  ["Socialisation secondaire", "Socialisation poursuivie après la petite enfance : école, pairs, travail, médias."],
  ["Souveraineté", "Pouvoir suprême de l'État, sans supérieur à l'intérieur et indépendant à l'extérieur."],
  ["Stigmatisation", "Marque durable qui disqualifie la personne et la place à l'écart du groupe."],
  ["Structure de marché", "Manière dont un marché est organisé : nombre d'offreurs, nature des produits, facilité d'entrée."],
  ["Suffrage universel", "Droit de vote reconnu à tous les citoyens, sans distinction."],
  ["Surplus de production", "Différence entre le prix de vente reçu et le coût de production."],
  ["Surplus du consommateur", "Différence entre la disposition à payer et le prix effectivement payé."],
  ["Surplus total", "Somme des deux surplus : la richesse créée par l'échange, maximale à l'équilibre."],
  ["Taux d'intérêt", "Prix de l'argent : rémunération du prêteur, exprimée en pourcentage du capital pour une période."],
  ["Taux d'intérêt nominal", "Taux affiché au contrat, qui sert au calcul des intérêts versés."],
  ["Taux d'intérêt réel", "Taux nominal diminué de la hausse des prix : il mesure le gain en pouvoir d'achat."],
  ["Territoire", "Espace sur lequel s'exerce le pouvoir souverain de l'État."],
  ["Traité international", "Convention entre États qui, une fois ratifiée et publiée, a une valeur supérieure à la loi."],
  ["Trésorerie", "Argent immédiatement disponible : caisse, comptes bancaires et placements de court terme."],
  ["Troc", "Échange direct d'un bien contre un autre, sans intermédiaire monétaire."],
  ["Valeur", "Ce qu'un groupe juge important et respectable ; elle fonde ses règles de conduite."],
  ["Valeur acquise", "Somme obtenue à l'échéance : le capital augmenté des intérêts."],
  ["Valeur ajoutée", "Valeur de la production diminuée des consommations intermédiaires : richesse créée par l'activité."],
];

function glossaireAnnexe() {
  const out = [];
  out.push(new Paragraph({ children: [new PageBreak()] }));
  out.push(B.sectionHeading("ANNEXES", "annexes", { size: 26 }));
  out.push(B.sectionHeading("GLOSSAIRE", "glossaire", { size: 24 }));
  const rows = GLOSSAIRE.map(([t, d]) => new TableRow({ children: [
    B.cell([B.p(t, { size: 19, bold: true })]),
    B.cell([B.p(d, { size: 19 })]),
  ]}));
  const header = new TableRow({ children: [
    B.cell([B.p("Terme", { bold: true, size: 19 })], { shading: "D9E2F3" }),
    B.cell([B.p("Définition", { bold: true, size: 19 })], { shading: "D9E2F3" }),
  ]});
  out.push(B.gridTable([header, ...rows], [32, 68]));
  return out;
}

function autoEvaluationAnnexe() {
  const out = [];
  out.push(B.sectionHeading("AUTO-ÉVALUATION", "autoeval", { size: 24 }));
  out.push(B.p("Coche la case qui correspond à ton niveau après chaque séance.", { size: 20, spacingAfter: 80 }));
  const rows = [new TableRow({ children: [
    B.cell([B.p("Compétence", { bold: true, size: 19 })], { shading: "D9E2F3" }),
    B.cell([B.p("Acquis", { bold: true, size: 19 })], { shading: "D9E2F3" }),
    B.cell([B.p("En cours", { bold: true, size: 19 })], { shading: "D9E2F3" }),
    B.cell([B.p("À revoir", { bold: true, size: 19 })], { shading: "D9E2F3" }),
  ]})];
  UNITS.forEach((u) => {
    u.themes.forEach((t) => rows.push(new TableRow({ children: [
      B.cell([B.p("Unité " + u.num + " — " + t, { size: 19 })]),
      B.cell([B.p("☐", { size: 19 })]),
      B.cell([B.p("☐", { size: 19 })]),
      B.cell([B.p("☐", { size: 19 })]),
    ]})));
  });
  out.push(B.gridTable(rows, [55, 15, 15, 15]));
  return out;
}

function buildIndex() {
  const entries = [];
  let n = 0;
  UNITS.forEach((u) => {
    u.topics.forEach((t) => {
      n += 1;
      (t.motsCles || []).forEach((m) => entries.push([m, n]));
    });
    n += 2;
  });
  const map = new Map();
  entries.forEach(([m, s]) => {
    if (!map.has(m)) map.set(m, []);
    if (!map.get(m).includes(s)) map.get(m).push(s);
  });
  return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0], "fr", { sensitivity: "base" }));
}

function indexAnnexe() {
  const out = [];
  out.push(B.sectionHeading("INDEX", "index", { size: 24 }));
  buildIndex().forEach(([m, seances]) => {
    const links = seances.map((s) => new InternalHyperlink({
      anchor: "seance" + s,
      children: [new TextRun({ text: "Séance " + s + "  ", size: 19, color: B.BLUE, font: B.FONT })],
    }));
    out.push(new Paragraph({
      spacing: { after: 40 },
      children: [new TextRun({ text: m + "  :  ", bold: true, size: 19, font: B.FONT }), ...links],
    }));
  });
  return out;
}

function bibliographieAnnexe() {
  const out = [];
  out.push(B.sectionHeading("BIBLIOGRAPHIE ET WEBOGRAPHIE", "biblio", { size: 24 }));
  const refs = [
    "Programme d'Études — Classe de T11, série OSE, Sciences Économiques et Sociales (Direction des Curricula et des Recherches Pédagogiques, Madagascar).",
    "Programme d'Études — Classe de T11, volume horaire et organisation générale des disciplines (même source).",
  ];
  refs.forEach((r) => out.push(B.p("• " + r, { size: 20, spacingAfter: 50, indent: { left: 360 } })));
  return out;
}

function tableIllustrations() {
  const images = [];
  let n = 0;
  UNITS.forEach((u) => {
    u.topics.forEach((t) => {
      n += 1;
      if (t.image) images.push([t.image.legende || t.titre, n]);
    });
    n += 2;
  });
  if (!images.length) return [];
  const out = [];
  out.push(B.sectionHeading("TABLE DES ILLUSTRATIONS", "illus", { size: 24 }));
  images.forEach(([titre, s]) => {
    out.push(B.tocLink(titre + " — Séance " + s, "seance" + s, { size: 19 }));
  });
  return out;
}

// ------------------------------------------------------------
// Assemblage final
// ------------------------------------------------------------
function assemble() {
  const children = [
    ...coverPage(),
    ...avantPropos(),
    ...modeEmploi(),
    ...tableDesMatieres(),
  ];
  let n = 0;
  UNITS.forEach((u) => {
    children.push(...tableauDeBord(u, n + 1));
    u.topics.forEach((t) => {
      n += 1;
      if (t.image) {
        const file = path.join(IMG_DIR, t.image.file);
        t.image.file = fs.existsSync(file) ? file : null;
      }
      children.push(...generateSeanceDocContent(t, n, TOTAL));
    });
    n += 1;
    children.push(...revisionSeance(u, n));
    n += 1;
    children.push(...examenSeance(u, n));
  });
  children.push(
    ...glossaireAnnexe(),
    ...autoEvaluationAnnexe(),
    ...indexAnnexe(),
    ...bibliographieAnnexe(),
    ...tableIllustrations(),
  );
  const doc = new Document({
    styles: { default: { document: { run: { font: "Times New Roman", size: 20 } } } },
    sections: [{
      properties: { page: { margin: { top: 900, bottom: 900, left: 1000, right: 1000 } } },
      children,
    }],
  });
  return doc;
}

module.exports = { assemble, buildIndex };
