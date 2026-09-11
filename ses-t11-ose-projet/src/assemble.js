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
const { revisions, examens } = require("./data-evaluations");

const UNITS = [U1, U2, U3];
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
  ["Actif", "Partie du bilan qui présente les emplois : ce que l'entreprise possède et ce qu'on lui doit."],
  ["Amortissement", "Constatation comptable de l'usure d'un bien durable ; c'est une charge sans sortie d'argent."],
  ["Attente", "Contrepartie espérée par une partie prenante en échange de sa contribution."],
  ["Autofinancement", "Part du résultat conservée par l'entreprise pour investir et faire face aux aléas."],
  ["Bilan", "Document qui présente le patrimoine de l'entreprise à une date : emplois à l'actif, ressources au passif."],
  ["Bénéfice", "Résultat positif de l'exercice : produits supérieurs aux charges."],
  ["Capitaux propres", "Ressources appartenant aux propriétaires : capital, réserves, report à nouveau, résultat."],
  ["Chiffre d'affaires", "Prix de vente multiplié par la quantité vendue : ensemble des recettes de l'activité."],
  ["Combinaison productive", "Manière dont l'entreprise associe ses facteurs de production pour produire."],
  ["Compte de résultat", "Document qui récapitule produits et charges de la période pour dégager le résultat."],
  ["Consommations intermédiaires", "Biens et services entièrement consommés au cours du processus de production."],
  ["Contribution", "Ce qu'une partie prenante apporte à l'entreprise : travail, capital, matières, crédit, règles."],
  ["Coût fixe", "Dépense due quelle que soit la quantité produite : loyer, assurance, amortissement."],
  ["Coût marginal", "Coût de la dernière unité produite ; il guide la décision de produire."],
  ["Coût moyen", "Coût total divisé par la quantité produite : coût de revient d'une unité."],
  ["Coût variable", "Dépense qui suit la quantité produite : matières premières, énergie, emballages."],
  ["Dettes", "Ressources que l'entreprise doit rembourser : emprunts, dettes fournisseurs, dettes fiscales."],
  ["Dividende", "Part du bénéfice versée aux propriétaires ou aux actionnaires."],
  ["Externalité", "Effet de l'activité sur des tiers, sans contrepartie monétaire ; elle est positive ou négative."],
  ["Intérêts convergents", "Objectifs communs à plusieurs parties prenantes, comme la pérennité de l'entreprise."],
  ["Intérêts divergents", "Objectifs opposés, comme les salaires face aux dividendes."],
  ["Partie prenante", "Personne ou groupe affecté par l'activité de l'entreprise ou capable de l'influencer."],
  ["Passif", "Partie du bilan qui présente les ressources : capitaux propres et dettes."],
  ["Perte", "Résultat négatif : les charges dépassent les produits."],
  ["Profit", "Différence entre les recettes et les coûts ; positif, c'est un bénéfice."],
  ["Recette", "Somme encaissée grâce aux ventes : le chiffre d'affaires."],
  ["Recette marginale", "Recette apportée par la vente d'une unité supplémentaire."],
  ["RSE", "Responsabilité sociétale des entreprises : prise en compte des impacts sociaux et environnementaux."],
  ["Résultat net", "Différence entre le total des produits et le total des charges de la période."],
  ["Trésorerie", "Argent immédiatement disponible : espèces en caisse et avoirs en banque."],
  ["Valeur ajoutée", "Richesse créée par l'entreprise : valeur de la production moins consommations intermédiaires."],
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
