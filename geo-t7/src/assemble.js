// assemble.js — Assemblage du Manuel de Géographie T7 (Collection J-Learn)
const fs = require("fs");
const path = require("path");
const { Document, Packer, AlignmentType, Table, TableRow, WidthType, BorderStyle, Paragraph, TextRun } = require("docx");
const B = require("./builders");
const Protect = require("../../jlearn-protection");
const { generateSeanceDocContent } = require("./seance-generator");
const { UNITES } = require("./curriculum");

// Annexes optionnelles tant qu'elles ne sont pas créées (fin de projet)
const annexesPath = path.join(__dirname, "annexes.js");
const annexesContent = fs.existsSync(annexesPath) ? require("./annexes").annexesContent : null;

const OUT_DIR = path.join(__dirname, "..", "output");
const OUT_FILE = path.join(OUT_DIR, "Manuel_Geographie_T7_JLearn.docx");

// Les sept unités sont importées depuis curriculum.js.

// Toutes les unités du programme sont désormais produites
const FUTURES = [];

const thin = { style: BorderStyle.SINGLE, size: 4, color: "BBBBBB" };
const borders = { top: thin, bottom: thin, left: thin, right: thin, insideHorizontal: thin, insideVertical: thin };

// ── 1. Couverture ───────────────────────────────────────────────────────
function coverPage() {
  // Couverture identique au modèle GEO T5 validé ; seule la classe devient T7.
  const coverPath = path.join(__dirname, "..", "..", "geo7_bookcover.png");
  const out = [];
  if (fs.existsSync(coverPath)) out.push(...B.imageBlock(coverPath, 602));
  out.push(B.pageBreak());
  return out;
}

// ── 2. Avant-propos ─────────────────────────────────────────────────────
function avantPropos() {
  return [
    B.headingWithBookmark("Avant-propos", "avantpropos", { size: 34, after: 200 }),
    B.p("Ce manuel de Géographie est destiné aux élèves de la classe de T7. Il accompagne l'enseignant et l'élève pendant les 66 heures du programme d'études, à raison de deux heures par semaine.", { size: 25, after: 140 }),
    B.p("L'ouvrage compte 80 numéros : 66 leçons de 60 minutes, 7 révisions et 7 sujets d'examen corrigés. Chaque leçon comprend une fiche de préparation détaillée, une leçon rédigée et illustrée, quatre exercices notés et leurs corrigés.", { size: 25, after: 140 }),
    B.p("Les sept unités suivent les thématiques officielles : initiation à l'étude de la géographie ; la planète Terre ; relief, climat, hydrographie et végétation ; caractéristiques de la population mondiale ; population face aux problèmes environnementaux ; activités économiques de la population mondiale ; gestion des ressources naturelles.", { size: 25, after: 140 }),
    B.p("Des scènes semi-réalistes, des schémas pédagogiques, un glossaire, huit cartes et schémas d'activités, une auto-évaluation, une table des illustrations et les sources complètent le manuel.", { size: 25, after: 140 }),
    B.p("Cette édition a été élaborée avec soin. L'équipe J-Lab accueille les retours des enseignants et des élèves afin d'améliorer les prochaines éditions.", { size: 25, after: 140 }),
    B.p("Nous remercions les enseignants qui guideront les élèves dans l'observation, le raisonnement géographique et l'action responsable.", { size: 25, after: 200 }),
    B.pageBreak(),
  ];
}

// ── 3. Mode d'emploi ────────────────────────────────────────────────────
function modeEmploi() {
  return [
    B.headingWithBookmark("Mode d'emploi du manuel", "modeemploi", { size: 34, after: 200 }),
    B.p("Chaque leçon de 60 minutes est organisée en trois temps :", { size: 25, after: 100 }),
    B.p("1. La fiche de préparation : révision (5 minutes), nouvelle leçon (45 minutes) et évaluation (10 minutes). Le tableau guide la mise en situation, la présentation, l'observation, l'analyse, la synthèse et l'application.", { size: 25, after: 100, indent: 240 }),
    B.p("2. La leçon : un schéma pédagogique, un document illustré et un contenu structuré mettent en évidence les notions à retenir.", { size: 25, after: 100, indent: 240 }),
    B.p("3. Les exercices : quatre activités notées sur 5 points, suivies de corrigés précis, permettent de s'entraîner et de vérifier les acquis.", { size: 25, after: 140, indent: 240 }),
    B.p("« R.A. » signifie « Réponse attendue ».", { size: 25, after: 140 }),
    B.p("Le titre de la leçon est en rouge, les sous-titres en vert, les mots clés en bleu et les éléments essentiels du corrigé en rose.", { size: 25, after: 140 }),
    B.p("Deux leçons de 60 minutes sont prévues chaque semaine, conformément au volume horaire de deux heures par semaine.", { size: 25, after: 140 }),
    B.pageBreak(),
  ];
}

// ── 4. Table des matières interactive ───────────────────────────────────
function tableDesMatieres() {
  const out = [];
  out.push(B.headingWithBookmark("Table des matières", null, { size: 34, after: 200 }));
  out.push(B.tocLink("Avant-propos", "avantpropos", { size: 25, bold: true }));
  out.push(B.tocLink("Mode d'emploi du manuel", "modeemploi", { size: 25, bold: true }));
  out.push(B.tocLink("Tableau de bord général", "tableaudebord", { size: 25, bold: true }));
  out.push(B.pEmpty(10));
  UNITES.forEach((u) => {
    out.push(B.tocLink(u.nom, u.id, { size: 26, bold: true }));
    u.topics.forEach((t) => {
      out.push(B.tocLink(`Séance ${t.numero} — ${t.titre}`, `seance${t.numero}`, { size: 24, indent: 360 }));
    });
    out.push(B.tocLink(`Séance ${u.rev.numero} — Révision (Unité ${UNITES.indexOf(u) + 1})`, `seance${u.rev.numero}`, { size: 24, indent: 360 }));
    out.push(B.tocLink(`Séance ${u.exam.numero} — Sujet d'examen T7 (Unité ${UNITES.indexOf(u) + 1})`, `seance${u.exam.numero}`, { size: 24, indent: 360 }));
    out.push(B.pEmpty(10));
  });
  FUTURES.forEach((f) => {
    out.push(B.p(`${f.nom} (${f.seances}) — à paraître dans la version complète`, { size: 24, bold: true, color: "777777", after: 60 }));
  });
  out.push(B.pEmpty(10));
  if (annexesContent) {
    out.push(B.tocLink("Annexes", "annexes", { size: 26, bold: true }));
    out.push(B.tocLink("Glossaire", "glossaire", { size: 24, indent: 360 }));
    out.push(B.tocLink("Cartes muettes", "cartesmuettes", { size: 24, indent: 360 }));
    out.push(B.tocLink("Auto-évaluation", "autoevaluation", { size: 24, indent: 360 }));
    out.push(B.tocLink("Table des illustrations", "illustrations", { size: 24, indent: 360 }));
    out.push(B.tocLink("Sources", "sources", { size: 24, indent: 360 }));
  }
  out.push(B.pageBreak());
  return out;
}

// ── 5. Tableaux de bord ─────────────────────────────────────────────────
function boardRow(cols, widths, header = false) {
  return new TableRow({
    ...(header ? { tableHeader: true } : {}),
    children: cols.map((c, i) =>
      B.cell([B.p(c, { bold: header, size: 24, align: header ? AlignmentType.CENTER : AlignmentType.LEFT })],
        { shading: header ? B.HEADER_BG : undefined, width: widths[i] })),
  });
}

function tableauDeBord() {
  const out = [];
  out.push(B.headingWithBookmark("Tableau de bord général", "tableaudebord", { size: 34, after: 200 }));
  out.push(B.p("Le programme de Géographie T7 prévoit 66 heures annuelles, à raison de 2 heures par semaine, réparties en sept thématiques. Le manuel compte 80 numéros : 66 leçons de 60 minutes, 7 révisions et 7 sujets d'examen corrigés, complétés par les annexes.", { size: 25, after: 160 }));
  const rows = [
    boardRow(["Unité", "Séances", "Leçons", "Révision + Examen"], [46, 18, 12, 24], true),
    ...UNITES.map((u) => boardRow([u.nom.replace(/UNITÉ \d+ — /, `Unité ${UNITES.indexOf(u) + 1} — `), u.seances, String(u.lecons), "2 (incluses)"], [46, 18, 12, 24])),
    ...FUTURES.map((f, i) => boardRow([f.nom.replace(/UNITÉ \d+ — /, `Unité ${UNITES.length + i + 1} — `), f.seances, "à venir", "2 (prévues)"], [46, 18, 12, 24])),
    boardRow(["Total", "Séances 1 à 80", "66", "7 + 7"], [46, 18, 12, 24]),
  ];
  out.push(new Table({ borders, width: { size: 100, type: WidthType.PERCENTAGE }, rows }));
  out.push(B.pEmpty());

  UNITES.forEach((u) => {
    out.push(B.p(`Tableau de bord — ${u.nom.charAt(0) + u.nom.slice(1).toLowerCase()}`, { size: 28, bold: true, before: 120, after: 120, color: B.GREEN }));
    const detail = [
      boardRow(["Séance", "Titre", "Type"], [12, 58, 30], true),
      ...u.topics.map((t) => boardRow([String(t.numero), t.titre, "Leçon"], [12, 58, 30])),
      boardRow([String(u.rev.numero), u.rev.titre, "Révision"], [12, 58, 30]),
      boardRow([String(u.exam.numero), u.exam.titre, "Sujet d'examen"], [12, 58, 30]),
    ];
    out.push(new Table({ borders, width: { size: 100, type: WidthType.PERCENTAGE }, rows: detail }));
    out.push(B.pEmpty());
  });
  out.push(B.pageBreak());
  return out;
}

// ── 6. Séance de révision ───────────────────────────────────────────────
function revisionSeance(rev, numUnite) {
  const out = [];
  out.push(B.pageBreak());
  out.push(B.headingWithBookmark(`SÉANCE ${rev.numero} / ${rev.total}`, `seance${rev.numero}`, { size: 26, align: AlignmentType.CENTER, after: 40 }));
  out.push(B.headingWithBookmark(rev.titre, null, { size: 30, align: AlignmentType.CENTER, after: 60 }));
  out.push(B.p("FICHE DE PRÉPARATION", { size: 28, bold: true, align: AlignmentType.CENTER, after: 120 }));
  out.push(B.metaTable({
    discipline: "Géographie",
    theme: rev.theme,
    titre: rev.titre,
    objectif: "Réviser et consolider toutes les notions de l'unité.",
    documentation: "Programme d'études officiel T7 — Géographie",
    classe: "T7",
    seanceNum: rev.numero,
    total: rev.total,
    duree: "60 minutes",
  }));
  out.push(B.pEmpty());
  out.push(B.deroulementTable([
    B.stepRow({
      etape: "I. RÉVISION", duree: "5 min",
      enseignant: [rev.questions[0][0], rev.questions[1][0]],
      apprenants: [`R.A. : ${rev.questions[0][1]}`, `R.A. : ${rev.questions[1][1]}`],
      technique: "Questions-réponses orales",
      support: "—",
    }),
    B.sectionRow("II. NOUVELLE LEÇON", "45 min"),
    B.stepRow({
      etape: "1. Mise en situation",
      enseignant: [`Nous avons terminé l'unité ${numUnite}. Aujourd'hui, nous allons réviser ensemble toutes les notions pour bien nous en souvenir.`],
      apprenants: ["Les élèves écoutent."],
      technique: "Conversation dirigée",
      support: "Tableau noir",
    }),
    B.stepRow({
      etape: "2. Présentation",
      enseignant: ["Aujourd'hui, nous allons réviser toutes les notions de l'unité. Après cette séance, vous serez capables de bien répondre aux questions de révision et de réussir le sujet d'examen."],
      apprenants: ["Les élèves écoutent."],
      technique: "Annonce de l'objectif",
      support: "Tableau noir, cahier",
    }),
    B.stepRow({
      etape: "3. Observation",
      enseignant: ["Regardez et observez bien le tableau récapitulatif des notions de l'unité."],
      apprenants: ["Les élèves observent silencieusement."],
      technique: "Observation silencieuse",
      support: "Tableau récapitulatif (ci-dessous)",
    }),
    B.stepRow({
      etape: "4. Analyse",
      enseignant: rev.questions.map(([q]) => q),
      apprenants: rev.questions.map(([, ra]) => `R.A. : ${ra}`),
      technique: "Questions-réponses",
      support: "Tableau récapitulatif (ci-dessous)",
    }),
    B.stepRow({
      etape: "5. Synthèse",
      enseignant: ["Donc, prenons le temps de relire ensemble le tableau récapitulatif : chaque notion est une clé pour l'examen de l'unité."],
      apprenants: ["Les élèves écoutent."],
      technique: "Explication",
      support: "Tableau noir",
    }),
    B.stepRow({
      etape: "6. Application",
      enseignant: B.exosToParas([
        {
          consigne: "Par binôme, choisissez trois notions du tableau récapitulatif et posez-vous les questions l'un à l'autre.",
          items: ["Chaque élève du binôme pose au moins une question.", "On vérifie la réponse avec le tableau récapitulatif."],
          corrige: [],
        },
      ]),
      apprenants: [
        B.p("R.A. : Les binômes s'interrogent sur trois notions de l'unité et corrigent leurs réponses avec le tableau récapitulatif.", { size: 20, after: 30, kwColor: B.CORRIGE }),
      ],
      technique: "Travail en binôme",
      support: "Cahier, tableau récapitulatif",
    }),
    B.stepRow({
      etape: "III. ÉVALUATION", duree: "10 min",
      enseignant: ["Annonce le sujet d'examen de l'unité pour la prochaine séance et répond aux dernières questions des élèves."],
      apprenants: ["Les élèves posent leurs questions."],
      technique: "Préparation de l'évaluation",
      support: "Cahier",
    }),
  ]));
  out.push(B.pageBreak());
  out.push(B.leconTitre(`Tableau récapitulatif — Unité ${numUnite}`));
  out.push(new Table({
    borders,
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      boardRow(["Notion", "À retenir"], [34, 66], true),
      ...rev.tableau.map(([notion, def]) => boardRow([notion, def], [34, 66])),
    ],
  }));
  out.push(B.pEmpty());
  out.push(B.leconSousTitre("Questions de révision"));
  rev.questions.forEach(([q, ra]) => {
    out.push(B.p(q, { size: 25, after: 30 }));
    out.push(B.p(`R.A. : ${ra}`, { size: 25, after: 90, kwColor: B.CORRIGE }));
  });
  return out;
}

// ── 7. Sujet d'examen ───────────────────────────────────────────────────
function examenSeance(ex) {
  const out = [];
  out.push(B.pageBreak());
  out.push(B.headingWithBookmark(`SÉANCE ${ex.numero} / ${ex.total}`, `seance${ex.numero}`, { size: 26, align: AlignmentType.CENTER, after: 40 }));
  out.push(B.headingWithBookmark(ex.titre, null, { size: 30, align: AlignmentType.CENTER, after: 60 }));
  out.push(B.p(`Durée : ${ex.duree} — Barème : ${ex.bareme} points`, { size: 26, bold: true, align: AlignmentType.CENTER, after: 80 }));
  out.push(B.p(ex.consigneGenerale, { size: 25, italics: true, align: AlignmentType.CENTER, after: 160 }));
  ex.exercices.forEach((exo) => {
    out.push(B.p(exo.titre, { size: 26, bold: true, before: 120, after: 60 }));
    out.push(B.p(exo.consigne, { size: 25, italics: true, after: 60 }));
    (exo.items || []).forEach((it) => out.push(B.p(it, { size: 25, after: 40 })));
  });
  out.push(B.pEmpty());
  out.push(B.p("CORRIGÉ ET BARÈME", { size: 28, bold: true, before: 160, after: 80 }));
  ex.exercices.forEach((exo) => {
    out.push(B.p(exo.titre, { size: 25, bold: true, after: 40 }));
    (exo.corrige || []).forEach((c) => out.push(B.p(c, { size: 25, after: 40, kwColor: B.CORRIGE })));
  });
  out.push(B.p(`Total : ${ex.bareme} points`, { size: 25, bold: true, before: 80, after: 100 }));
  return out;
}

// ── Assemblage ──────────────────────────────────────────────────────────
(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const children = [
    ...coverPage(),
    ...Protect.authenticityPage(B, "Géographie T7"),
    ...avantPropos(),
    ...modeEmploi(),
    ...tableDesMatieres(),
    ...tableauDeBord(),
  ];

  UNITES.forEach((u, i) => {
    const numUnite = i + 1;
    children.push(B.headingWithBookmark(u.nom, u.id, { size: 32, after: 60, align: AlignmentType.CENTER }));
    children.push(B.p(u.intro, { size: 24, italics: true, align: AlignmentType.CENTER, after: 200 }));

    let prevQuestions = null; // pas de révision au début d'une unité : la 1re séance a ses questions d'ouverture
    u.topics.forEach((topic) => {
      children.push(...generateSeanceDocContent(topic, prevQuestions));
      prevQuestions = topic.questionsRevision;
    });
    children.push(...revisionSeance(u.rev, numUnite));
    children.push(...examenSeance(u.exam));
  });

  // Annexes (glossaire, cartes muettes, auto-évaluation, table des illustrations, sources)
  if (annexesContent) {
    children.push(...annexesContent(UNITES.flatMap((u) => u.topics)));
  }

  const doc = new Document({
    creator: "J-Lab — Collection J-Learn",
    title: "Manuel de Géographie T7 — J-Learn (édition complète protégée)",
    description: "Manuel scolaire de Géographie T7 — 80 numéros : 66 leçons, 7 révisions, 7 examens corrigés, scènes, schémas, cartes et annexes.",
    styles: {
      default: {
        document: { run: { font: "Times New Roman", size: 24 } },
      },
    },
    sections: [{
      properties: { titlePage: true },
      headers: Protect.headers(),
      footers: Protect.footers(),
      children,
    }],
  });

  const buf = await Packer.toBuffer(doc);
  fs.writeFileSync(OUT_FILE, buf);
  console.log(`Écrit : ${OUT_FILE} (${Math.round(buf.length / 1024)} Ko)`);
})();
