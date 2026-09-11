// ============================================================
// assemble.js — assemblage du manuel SES T11, série L (Collection J-Learn)
// Bloc 1 : Unité I « Croissance et développement » (15 séances)
// TOTAL = 35 séances (découpage complet du manuel : 5 unités, 70 heures)
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
const { revisions, examens } = require("./data-evaluations");

const UNITS = [U1, U2];
const TOTAL = 35;
const IMG_DIR = path.join(__dirname, "..", "output", "images");

// Découpage complet (35 séances) — 5 thématiques du Programme d'Études T11
const PLAN = [
  ["I", "Production dans les organisations", 7],
  ["II", "Monnaie et financement", 5],
  ["III", "Coordination par le marché et par l'État", 5],
  ["IV", "Socialisation de l'individu", 4],
  ["V", "Sciences politiques et droit", 4],
];

// ------------------------------------------------------------
// Couverture
// ------------------------------------------------------------
function coverPage() {
  return [
    B.p("", { size: 24 }),
    B.p("Collection J-Learn", { bold: true, size: 28, align: AlignmentType.CENTER, color: B.BLUE, spacingAfter: 400 }),
    B.p("MANUEL DE SCIENCES ÉCONOMIQUES ET SOCIALES", { bold: true, size: 34, align: AlignmentType.CENTER, color: B.RED, spacingAfter: 120 }),
    B.p("CLASSE DE T11 — SÉRIE L", { bold: true, size: 30, align: AlignmentType.CENTER, spacingAfter: 200 }),
    B.p("Programme d'Études — 5 unités thématiques · 35 séances", { size: 24, align: AlignmentType.CENTER, spacingAfter: 300 }),
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
  out.push(B.p("Ce manuel de Sciences Économiques et Sociales pour la classe de T11, série L, a été élaboré à partir du Programme d'Études officiel de Madagascar, section « Sciences Économiques et Sociales ». Il couvre les cinq thématiques du programme : la production dans les organisations, la monnaie et le financement, la coordination par le marché et par l'État, la socialisation de l'individu, enfin les sciences politiques et le droit.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Chaque séance est composée d'une fiche de préparation, d'une leçon, d'exercices notés et de leur corrigé. Le manuel suit la méthode J-Learn organisée en trois grandes étapes : la Révision, la Nouvelle Leçon (six sous-étapes) et l'Évaluation.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Le Programme d'Études attribue deux heures par semaine aux Sciences Économiques et Sociales en série L, soit soixante-dix heures pour l'année. Le découpage en trente-cinq séances respecte cette répartition : vingt-cinq séances de cours, une séance de révision et un sujet d'examen corrigé par unité. La durée de chaque séance est laissée à l'enseignant, qui la répartit selon le rythme de sa classe, le niveau des apprenants et le matériel disponible.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Conformément aux orientations pédagogiques du programme, les séances privilégient une approche centrée sur l'apprenant : celui-ci observe, questionne, travaille en groupe et construit lui-même ses savoirs. Les démarches inductive, déductive, comparative, documentaire et argumentative sont mobilisées selon les objets d'étude, et l'enseignant joue le rôle de guide, de médiateur et d'accompagnateur.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Les séances sont regroupées en cinq unités, une par thématique du programme. Les exemples, situations et supports proposés sont ancrés dans la réalité malgache : exploitation rurale, coopérative, atelier de transformation, marché local, administration et collectivité locale.", { size: 21, spacingAfter: 120 }));
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
  out.push(B.p("Résultats d'apprentissage spécifiques (Programme d'Études T11, série L) :", { bold: true, size: 20, spacingAfter: 40 }));
  u.ras.split(" · ").forEach((r) => out.push(B.p("• " + r, { size: 20, spacingAfter: 30, indent: { left: 360 } })));
  out.push(B.p("Valeurs à véhiculer : " + u.valeurs, { size: 20, spacingAfter: 60 }));
  out.push(B.p("Volume horaire de l'unité : " + u.duree + " (la discipline dispose de 2 heures par semaine, soit 70 heures pour l'année). Durée de chaque séance laissée à l'enseignant.", { size: 20, spacingAfter: 100 }));
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
  ["Acteurs externes", "Clients, fournisseurs, banques, État, riverains, concurrents."],
  ["Acteurs internes", "Associés et actionnaires, salariés et dirigeants."],
  ["Action", "Titre qui rend son détenteur associé de l'entreprise."],
  ["Amortissement", "Constation comptable de l'usure d'un équipement ; sa part mise en réserve finance le renouvellement."],
  ["Association", "Groupement de personnes réunies pour un but autre que le partage d'un bénéfice."],
  ["Autofinancement", "Financement de l'investissement par les ressources propres : bénéfices conservés et amortissements."],
  ["Banque centrale", "Institution qui fournit la monnaie de base, encadre les banques et veille à la valeur de la monnaie."],
  ["Banque commerciale", "Établissement qui collecte les dépôts, accorde des crédits et gère les moyens de paiement."],
  ["Bénéfices conservés", "Part du profit non distribuée et gardée dans l'entreprise."],
  ["Besoin de financement", "Situation d'un agent dont les dépenses prévues dépassent les ressources disponibles."],
  ["Bien", "Produit matériel que l'on peut stocker et transporter."],
  ["Bilan", "Photographie du patrimoine à une date : emplois et ressources."],
  ["But lucratif", "Finalité d'une organisation qui recherche un bénéfice destiné à être partagé."],
  ["But non lucratif", "Finalité d'une organisation où le service rendu prime sur le partage d'un bénéfice."],
  ["Capacité de financement", "Situation d'un agent dont les ressources dépassent les dépenses : il peut épargner."],
  ["Capital", "Somme prêtée ou placée, sur laquelle se calculent les intérêts."],
  ["Combinaison productive", "Manière d'associer les facteurs pour obtenir une quantité donnée de produit."],
  ["Compte de résultat", "Document qui retrace les produits et les charges d'une période et dégage le résultat."],
  ["Confiance", "Condition de la valeur de la monnaie : on l'accepte parce que d'autres l'accepteront."],
  ["Consommations intermédiaires", "Biens et services achetés et entièrement consommés dans la production."],
  ["Coopérative", "Société de personnes qui mettent leurs moyens en commun pour un service commun."],
  ["Coût de production", "Dépense engagée pour fabriquer un bien ou rendre un service."],
  ["Coût fixe", "Coût indépendant de la quantité produite : loyer, amortissement."],
  ["Coût total", "Somme des coûts fixes et des coûts variables."],
  ["Coût variable", "Coût qui suit la quantité produite : matières premières, énergie."],
  ["Création monétaire", "Processus par lequel de la monnaie nouvelle apparaît, principalement par l'octroi de crédits."],
  ["Crédit", "Mise à disposition d'une somme remboursable, qui fait naître un dépôt."],
  ["Dépôt", "Avoir inscrit en compte, utilisable pour payer."],
  ["Dividende", "Part du bénéfice distribuée aux associés ou aux actionnaires."],
  ["Échéance", "Date à laquelle une somme doit être payée ou remboursée."],
  ["Économie formelle", "Ensemble des activités enregistrées, déclarées et soumises aux règles en vigueur."],
  ["Économie informelle", "Ensemble des activités de production et de vente qui échappent aux règles déclarées."],
  ["Emplois du bilan", "Ce que l'organisation possède : machines, stocks, créances."],
  ["Épargne", "Part du revenu qui n'est pas consommée et qui alimente le financement."],
  ["Facteur capital", "Moyens durables de production : machines, bâtiments, outillage, matériel."],
  ["Facteur travail", "Effort humain, physique ou intellectuel, fourni dans la production."],
  ["Financement désintermédié", "Autre nom du financement direct : aucun intermédiaire ne s'interpose."],
  ["Financement direct", "Financement par émission de titres souscrits directement par les épargnants."],
  ["Financement indirect", "Financement par un intermédiaire, la banque, qui collecte l'épargne puis prête."],
  ["Financement intermédié", "Autre nom du financement indirect."],
  ["Impact négatif", "Effet défavorable de l'activité : pollution, épuisement des ressources."],
  ["Impact positif", "Effet favorable de l'activité : emplois créés, compétences transmises."],
  ["Inflation", "Hausse durable du niveau général des prix, qui réduit le pouvoir d'achat de la monnaie."],
  ["Intérêt convergent", "Intérêt partagé par tous les acteurs : la pérennité de l'entreprise."],
  ["Intérêt divergent", "Intérêt opposé : salaires et dividendes, prix et marge, emploi et productivité."],
  ["Intérêts simples", "Intérêts calculés sur le capital initial : capital × taux × durée."],
  ["Intermédiaire des échanges", "Fonction de la monnaie : elle sert à payer et à se libérer d'une dette."],
  ["Intermédiation", "Activité par laquelle un intermédiaire relie l'épargnant à l'emprunteur."],
  ["Investissement", "Dépense durable destinée à accroître la capacité de produire."],
  ["Marché financier", "Marché sur lequel s'échangent les titres : actions et obligations."],
  ["Marché monétaire", "Marché sur lequel les banques se prêtent entre elles à court terme."],
  ["Masse monétaire", "Ensemble des moyens de paiement détenus par les agents : billets, pièces et dépôts à vue."],
  ["Maximisation du profit", "Choix de la quantité où l'écart entre la recette et le coût total est le plus grand."],
  ["Monnaie", "Instrument accepté par tous pour régler les échanges et mesurer les valeurs."],
  ["Monnaie de base", "Monnaie fournie par la banque centrale aux banques commerciales."],
  ["Monnaie fiduciaire", "Monnaie matérielle : billets et pièces détenus physiquement."],
  ["Monnaie scripturale", "Monnaie qui n'existe que par des écritures en compte : virements, chèques, cartes."],
  ["Obligation", "Titre de créance : son détenteur prête à l'entreprise contre intérêts."],
  ["Organisation", "Groupe structuré de personnes qui réunit des ressources pour atteindre un objectif commun."],
  ["Organisation privée", "Organisation dont le capital appartient à des personnes privées."],
  ["Organisation publique", "Organisation dont le capital appartient à l'État ou à une collectivité."],
  ["Partie prenante", "Personne ou groupe qui contribue à l'activité ou qui est affecté par elle."],
  ["Perte", "Solde négatif entre les recettes et le coût total."],
  ["Pilier économique", "Viabilité de l'activité, emplois, revenus et innovation."],
  ["Pilier environnemental", "Ressources consommées, déchets, énergie, pollutions, climat."],
  ["Pilier social", "Conditions de travail, formation, dialogue avec les salariés."],
  ["Prime de risque", "Majoration du taux exigée en proportion du risque de crédit."],
  ["Prix de vente", "Somme demandée à l'acheteur pour une unité de bien ou de service."],
  ["Production", "Transformation de ressources en biens ou en services destinés à satisfaire un besoin."],
  ["Productivité", "Rapport entre la quantité produite et la quantité de facteurs utilisés."],
  ["Profit", "Solde positif entre les recettes et le coût total."],
  ["Protection sociale", "Dispositifs qui couvrent les risques de la vie : maladie, accident, vieillesse, famille."],
  ["Recette", "Prix de vente multiplié par la quantité vendue."],
  ["Règles de fonctionnement", "Dispositions qui fixent qui décide, qui fait quoi et selon quelle procédure."],
  ["Répartition de la valeur ajoutée", "Partage de la richesse créée entre salaires, impôts, intérêts, dividendes et autofinancement."],
  ["Répartition des tâches", "Distribution des activités entre les membres de l'organisation."],
  ["Réserve de valeur", "Fonction de la monnaie : elle conserve un pouvoir d'achat dans le temps."],
  ["Réserves", "Avoirs que les banques doivent détenir pour faire face aux retraits."],
  ["Responsabilité sociétale (RSE)", "Prise en compte volontaire par l'entreprise des effets de son activité sur la société et l'environnement."],
  ["Ressources du bilan", "Comment le patrimoine est financé : capital, réserves, dettes."],
  ["Ressources naturelles", "Biens fournis par la nature : terre, eau, matières premières."],
  ["Résultat", "Différence entre les produits et les charges de la période : bénéfice ou perte."],
  ["Risque de crédit", "Risque que l'emprunteur ne rembourse pas la somme prêtée."],
  ["Service", "Prestation rendue, consommée au moment même où elle est fournie."],
  ["Service public", "Activité assurée au profit de tous, sous la responsabilité de la puissance publique."],
  ["Système financier", "Ensemble des institutions et marchés qui relient agents à capacité et agents à besoin de financement."],
  ["Taux d'intérêt", "Prix du crédit : rémunération du prêteur, coût pour l'emprunteur."],
  ["Taux nominal", "Taux affiché par le prêteur, inscrit au contrat."],
  ["Taux réel", "Taux nominal diminué de l'inflation : coût réel du crédit."],
  ["Troc", "Échange direct de marchandise contre marchandise, sans intermédiaire monétaire."],
  ["Unité de compte", "Fonction de la monnaie : elle mesure les valeurs et permet de comparer les prix."],
  ["Valeur acquise", "Somme obtenue à l'échéance : capital augmenté des intérêts."],
  ["Valeur ajoutée", "Valeur de la production diminuée des consommations intermédiaires : la richesse créée."],
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
    "Programme d'Études — Classe de T11, série L, Sciences Économiques et Sociales (Direction des Curricula et des Recherches Pédagogiques, Madagascar).",
    "Programme d'Études — Classe de T11, répartition annuelle du programme d'études, série L (même source).",
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
