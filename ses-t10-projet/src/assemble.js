// ============================================================
// assemble.js — assemblage du manuel SES T10 (Collection J-Learn)
// Bloc 1 : Unité I seule (livraison de validation)
// TOTAL = 45 séances (découpage complet du manuel, voir PLAN-MANUEL-SES-T10.md)
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
const U6 = require("./data-unite6");
const U7 = require("./data-unite7");
const { revisions, examens } = require("./data-evaluations");

const UNITS = [U1, U2, U3, U4, U5, U6, U7];
const TOTAL = 45;
const IMG_DIR = path.join(__dirname, "..", "output", "images");

// Découpage complet prévu (45 séances) — sert à la table des matières
const PLAN = [
  ["I", "Orientation scolaire et professionnelle", 3],
  ["II", "Introduction à l'étude des sciences économiques et sociales", 2],
  ["III", "Entreprise et production", 7],
  ["IV", "Revenu et consommation", 6],
  ["V", "Marché et prix", 6],
  ["VI", "Individu et société", 4],
  ["VII", "Sciences politiques et droit", 3],
];

// ------------------------------------------------------------
// Couverture
// ------------------------------------------------------------
function coverPage() {
  return [
    B.p("", { size: 24 }),
    B.p("Collection J-Learn", { bold: true, size: 28, align: AlignmentType.CENTER, color: B.BLUE, spacingAfter: 400 }),
    B.p("MANUEL DE SCIENCES ÉCONOMIQUES ET SOCIALES", { bold: true, size: 34, align: AlignmentType.CENTER, color: B.RED, spacingAfter: 120 }),
    B.p("CLASSE DE T10", { bold: true, size: 30, align: AlignmentType.CENTER, spacingAfter: 200 }),
    B.p("Programme d'Études — 7 unités thématiques · 45 séances", { size: 24, align: AlignmentType.CENTER, spacingAfter: 300 }),
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
  out.push(B.p("Ce manuel de Sciences Économiques et Sociales pour la classe de T10 a été élaboré à partir du Programme d'Études officiel de Madagascar, section « Sciences Économiques et Sociales ». Il couvre les sept thématiques du programme : l'orientation scolaire et professionnelle, l'introduction à l'étude des sciences économiques et sociales, l'entreprise et la production, le revenu et la consommation, le marché et les prix, l'individu et la société, enfin les sciences politiques et le droit.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Chaque séance est composée d'une fiche de préparation, d'une leçon, d'exercices notés et de leur corrigé. Le manuel suit la méthode J-Learn organisée en trois grandes étapes : la Révision, la Nouvelle Leçon (six sous-étapes) et l'Évaluation.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Le Programme d'Études attribue trois heures par semaine aux Sciences Économiques et Sociales en classe de T10, soit soixante-seize heures pour l'année. Le découpage en quarante-cinq séances respecte cette répartition : trente et une séances de cours, une séance de révision et un sujet d'examen corrigé par unité. La durée de chaque séance est laissée à l'enseignant, qui la répartit selon le rythme de sa classe, le niveau des apprenants et le matériel disponible.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Conformément aux orientations pédagogiques du programme, les séances privilégient une approche centrée sur l'apprenant : celui-ci observe, questionne, travaille en groupe et construit lui-même ses savoirs. Les démarches inductive, déductive, comparative, documentaire et argumentative sont mobilisées selon les objets d'étude, et l'enseignant joue le rôle de guide, de médiateur et d'accompagnateur.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Les séances sont regroupées en sept unités, une par thématique du programme. Les exemples, situations et supports proposés sont ancrés dans la réalité malgache : marché local, entreprise artisanale, coopérative, exploitation agricole, administration et vie associative.", { size: 21, spacingAfter: 120 }));
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
  out.push(B.p("Résultats d'apprentissage spécifiques (Programme d'Études T10) :", { bold: true, size: 20, spacingAfter: 40 }));
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
  ["Acteur social", "Individu qui a intériorisé les normes et les valeurs et qui peut agir dans la société."],
  ["Administration publique", "Organisation qui rend un service public au nom de la collectivité, financée par l'impôt."],
  ["Agents de socialisation", "Groupes et institutions qui transmettent les normes et les valeurs : famille, école, pairs, institutions religieuses, médias."],
  ["Appartenance (besoin d')", "Besoin d'être aimé, d'avoir des amis et de faire partie d'un groupe."],
  ["Association", "Groupe de personnes réunies autour d'un projet non lucratif."],
  ["Atomicité", "Situation d'un marché où les acheteurs et les vendeurs sont si nombreux qu'aucun ne peut imposer son prix."],
  ["Autonomie", "Capacité à travailler et à prendre des décisions par soi-même, sans être constamment surveillé."],
  ["Barrière à l'entrée", "Obstacle — coût, licence, éloignement — qui empêche un nouveau concurrent d'arriver sur un marché."],
  ["Besoin", "Exigence qu'il faut satisfaire pour vivre et vivre correctement."],
  ["Bien", "Objet matériel que l'on peut toucher, stocker et transporter."],
  ["But lucratif", "Recherche d'un bénéfice financier par la vente de la production."],
  ["Capacités", "Ce qu'un élève réussit à faire : aptitudes scolaires et compétences développées par le travail."],
  ["Capital", "Moyens durables de production : machines, outils, bâtiments, véhicules, et l'argent pour les acquérir."],
  ["Catégorie socio-professionnelle", "Groupe de personnes qui occupent une position proche dans l'activité économique."],
  ["Charges", "Dépenses de l'entreprise : achats, salaires, loyer, transport, intérêts d'emprunt."],
  ["Circuit économique", "Ensemble des flux entre ménages, entreprises et administrations : la dépense de l'un est le revenu de l'autre."],
  ["Combinaison productive", "Manière dont une entreprise associe ses facteurs de production pour produire."],
  ["Complémentarité", "Fait que les facteurs de production doivent être réunis pour produire : aucun ne produit seul."],
  ["Compétences", "Savoir-faire mobilisés dans une situation professionnelle : rédiger, calculer, utiliser un outil, travailler en équipe."],
  ["Concurrence", "Rivalité entre offreurs pour obtenir la clientèle ; elle porte sur le prix, la qualité ou le service."],
  ["Consommation", "Utilisation de biens et de services pour satisfaire un besoin."],
  ["Consommation collective", "Consommation dont plusieurs personnes profitent en même temps, souvent financée par l'impôt."],
  ["Consommation ostentatoire", "Consommation faite d'abord pour montrer sa réussite sociale."],
  ["Coopérative", "Entreprise dont les membres sont à la fois producteurs et décideurs, et à qui reviennent les bénéfices."],
  ["Culture", "Ensemble des manières de vivre, de penser et de créer d'un groupe : langue, coutumes, cuisine, croyances, arts."],
  ["Culture de masse", "Productions culturelles diffusées à un très grand nombre de personnes par les médias."],
  ["Demande", "Quantité d'un bien que les acheteurs sont prêts et capables d'acheter à un prix donné."],
  ["Diplôme", "Document officiel attestant la réussite à un examen et le niveau d'études atteint."],
  ["Droit", "Ensemble des règles générales, écrites et sanctionnées, qui organisent la vie en société."],
  ["Duopole", "Marché sur lequel deux offreurs seulement se partagent la clientèle."],
  ["Débouchés", "Études supérieures et métiers auxquels une série ou une formation donne accès."],
  ["Déterminant de la consommation", "Facteur qui explique le niveau et la nature de la consommation : économique ou socioculturel."],
  ["Effet d'imitation", "Tendance à consommer comme le groupe auquel on veut ressembler."],
  ["Effet de distinction", "Consommation d'objets rares ou coûteux destinée à se démarquer du plus grand nombre."],
  ["Effet de substitution", "Remplacement d'un bien devenu trop cher par un autre moins coûteux."],
  ["Emploi", "Activité professionnelle occupée par une personne et rémunérée."],
  ["Entente", "Accord entre offreurs sur les prix, les quantités ou le partage de la clientèle ; interdite par le droit de la concurrence."],
  ["Entrepreneur", "Personne qui prend l'initiative de créer ou de diriger une entreprise, réunit les moyens de production et assume les risques."],
  ["Entreprise", "Organisation qui combine travail et capital pour produire des biens ou des services destinés à la vente."],
  ["Facteurs de production", "Moyens qu'il faut réunir pour produire : le travail, le capital et les ressources naturelles."],
  ["Formation", "Ensemble des études et des apprentissages qui préparent à un métier."],
  ["Homogénéité", "Caractère de produits identiques ou comparables, interchangeables pour l'acheteur."],
  ["Libre entrée", "Possibilité pour toute entreprise de s'installer sur un marché ou d'en sortir."],
  ["Légalité", "Conformité d'une décision aux règles de droit en vigueur."],
  ["Légitimité", "Reconnaissance, par la population, du droit qu'a le pouvoir de commander."],
  ["Marché", "Lieu, physique ou non, où se rencontrent l'offre et la demande d'un bien ou d'un service."],
  ["Microcrédit", "Petit prêt accordé à un entrepreneur qui n'a pas accès au crédit bancaire classique."],
  ["Mode de vie", "Manière habituelle dont un groupe organise sa vie quotidienne : horaires, repas, loisirs, sociabilités."],
  ["Monde du travail", "Ensemble des entreprises, administrations et activités où s'exercent les emplois, avec leurs exigences."],
  ["Monopole", "Situation de marché où un seul offreur fait face à de nombreux demandeurs."],
  ["Mutuelle", "Organisation qui couvre ses membres contre un risque par la mise en commun des cotisations."],
  ["Média de masse", "Moyen de diffusion qui s'adresse à un public très large : radio, télévision, presse, internet."],
  ["Ménage", "Ensemble des personnes qui vivent sous le même toit et mettent leurs ressources en commun."],
  ["Nation", "Communauté humaine qui partage une histoire, une langue, une culture et la conscience d'appartenir au même ensemble."],
  ["Norme", "Règle de conduite, écrite ou non, que le groupe attend de ses membres."],
  ["Offre", "Quantité d'un bien que les vendeurs sont prêts et capables de vendre à un prix donné."],
  ["Oligopole", "Marché dominé par un petit nombre d'offreurs, chacun capable d'influencer le prix."],
  ["Pacification", "Fonction du droit qui permet de régler les conflits par une procédure plutôt que par la violence."],
  ["Placement", "Forme d'épargne confiée à un organisme ou investie dans un bien, qui peut rapporter."],
  ["Pouvoir d'achat", "Quantité de biens et de services qu'un revenu permet d'acheter compte tenu du niveau des prix."],
  ["Pouvoir politique", "Pouvoir de décider pour l'ensemble d'une société et de faire appliquer les décisions."],
  ["Pratique culturelle", "Activité par laquelle une personne exprime ou partage la culture de son groupe."],
  ["Prix", "Somme d'argent à payer pour obtenir une unité d'un bien ou d'un service."],
  ["Prix d'équilibre", "Prix pour lequel la quantité offerte est égale à la quantité demandée."],
  ["Productivité", "Rapport entre la quantité produite et les moyens utilisés pour la produire."],
  ["Profit", "Excédent des recettes sur l'ensemble des charges de l'entreprise."],
  ["Progrès technique", "Améliorations — machines, méthodes, formation — qui permettent de produire plus ou mieux avec les mêmes moyens."],
  ["Projet d'orientation", "Démarche qui relie les intérêts, les capacités scolaires et le métier visé, en quatre étapes : se connaître, s'informer, décider, s'engager."],
  ["Puissance publique", "Capacité de l'État de se faire obéir : administration, force publique, justice."],
  ["Pyramide de Maslow", "Classement des besoins en cinq niveaux : physiologiques, sécurité, appartenance, estime, accomplissement."],
  ["Qualification", "Niveau de formation et de compétences reconnu, qui permet d'occuper un emploi donné."],
  ["Recettes", "Sommes encaissées par l'entreprise grâce à ses ventes."],
  ["Ressources financières", "Argent dont dispose l'entreprise : épargne, apports, emprunt, trésorerie."],
  ["Ressources humaines", "Personnes qui travaillent dans l'entreprise, avec leurs compétences et leur expérience."],
  ["Ressources matérielles", "Moyens physiques de l'entreprise : locaux, équipements, matières premières."],
  ["Revenu", "Somme d'argent reçue régulièrement en échange d'un travail, d'un bien ou à titre d'aide."],
  ["Revenu de transfert", "Somme reçue sans contrepartie de production : pension, allocation, bourse."],
  ["Revenu disponible", "Ce qui reste au ménage après impôts et cotisations, pour consommer et épargner."],
  ["Revenu mixte", "Revenu d'un travailleur indépendant qui rémunère à la fois son travail et son activité."],
  ["Revenu primaire", "Revenu reçu en participant à la production : salaire, revenu mixte, revenu du patrimoine."],
  ["Sanction", "Conséquence prévue par la loi en cas de non-respect d'une règle de droit."],
  ["Science", "Démarche qui observe, questionne, formule une hypothèse et vérifie avant d'expliquer."],
  ["Secteur formel", "Ensemble des activités déclarées : entreprises enregistrées, salariés protégés, impôts payés."],
  ["Secteur informel", "Ensemble des activités non déclarées : revenus immédiats, mais précarité et absence de crédit."],
  ["Secteurs porteurs", "Domaines de l'économie qui ont d'importants besoins de main-d'œuvre qualifiée."],
  ["Service", "Activité rendue à quelqu'un, qui se consomme au moment où elle est rendue et ne se stocke pas."],
  ["Services publics", "Prestations fournies par l'État ou la collectivité : école, santé, sécurité, routes."],
  ["Socialisation", "Processus par lequel un individu apprend, tout au long de sa vie, les manières d'agir, de penser et de parler de sa société."],
  ["Socialisation différentielle", "Fait que la socialisation varie selon le groupe social, la région et le genre."],
  ["Sociologie", "Étude de la vie des groupes humains, des normes, des valeurs et de la socialisation."],
  ["Société", "Ensemble de personnes qui vivent sur un territoire, partagent des institutions et obéissent à des règles communes."],
  ["Souveraineté", "Caractère suprême du pouvoir de l'État : intérieure sur le territoire, extérieure face aux autres États."],
  ["Substituabilité", "Possibilité de remplacer un facteur de production par un autre."],
  ["Surplus", "Situation où l'offre dépasse la demande : la marchandise reste invendue et le prix baisse."],
  ["Sécurité juridique", "Fait que les règles de droit sont connues à l'avance, ce qui permet d'agir en connaissance de cause."],
  ["Série L", "Série littéraire du lycée : langues, littérature, philosophie, histoire et géographie."],
  ["Série OSE", "Série de sciences économiques du lycée : sciences économiques et sociales, droit, gestion et comptabilité."],
  ["Série S", "Série scientifique du lycée : mathématiques, sciences physiques, sciences de la vie et de la terre."],
  ["Territoire", "Espace — sol, eaux, mer territoriale, espace aérien — sur lequel l'État exerce sa puissance."],
  ["Thésaurisation", "Conservation d'argent chez soi, sans le faire fructifier."],
  ["Transparence", "Situation d'un marché où les prix et la qualité des produits sont connus de tous."],
  ["Travail (facteur)", "Activité humaine, physique ou intellectuelle, fournie pour produire."],
  ["Travail indépendant", "Activité exercée à son propre compte : artisan, commerçant, exploitant agricole, entrepreneur."],
  ["Travail salarié", "Activité exercée pour le compte d'un employeur, contre un salaire."],
  ["Trésorerie", "Argent disponible au jour le jour dans l'entreprise pour payer les charges courantes."],
  ["Valeur", "Ce qu'un groupe juge important et désirable, et qui sert de repère pour juger les conduites."],
  ["Économie", "Étude de la manière dont une société produit, répartit et consomme des ressources limitées."],
  ["Économie sociale", "Ensemble des associations, coopératives et mutuelles qui produisent pour l'utilité de leurs membres."],
  ["Épargne", "Part du revenu disponible qui n'est pas consommée et qui est mise de côté pour l'avenir."],
  ["État", "Ensemble des institutions qui exercent le pouvoir politique sur une population et un territoire."],
  ["État-nation", "État dont le territoire coïncide avec une nation."],
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
    "Programme d'Études — Classe de T10, Sciences Économiques et Sociales (Direction des Curricula et des Recherches Pédagogiques, Madagascar).",
    "Programme d'Études — Classe de T10, volume horaire et organisation générale des disciplines (même source).",
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
