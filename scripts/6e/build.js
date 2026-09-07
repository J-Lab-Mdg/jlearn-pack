// Générateur du Manuel de Mathématiques 6e — Collection J-Learn
// Traitement C. Exécution : node scripts/6e/build.js

const fs = require("fs");
const path = require("path");
const {
  Document, Packer, SectionType, PageOrientation, convertMillimetersToTwip,
} = require("docx");
const B = require("./builders");
const {
  C, SH, p, empty, metaTable, deroulementTable, sectionRow, stepRow, boxed,
  bookmarkedHeading, tocLink, FONT,
  Paragraph, TextRun, AlignmentType, HeadingLevel, PageBreak,
} = B;

const progression = require("./progression");
const seancesP1 = require("./seances-p1");
const revisions = require("./revisions");

const TOTAL = progression.reduce(
  (s, per) => s + per.chapitres.reduce((a, c) => a + c.seances, 0), 0);

// ============================================================ FRONT MATTER
function couverture() {
  const t = (txt, o) => new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: o.after || 120 },
    children: [new TextRun({ text: txt, font: FONT, size: o.size, bold: o.bold, color: o.color })],
  });
  return [
    empty(900),
    t("COLLECTION J-LEARN", { size: 28, bold: true, color: C.gris, after: 400 }),
    t("MANUEL DE MATHÉMATIQUES", { size: 56, bold: true, color: C.titre, after: 160 }),
    t("Classe de 6e", { size: 44, bold: true, after: 500 }),
    t("Programme officiel malgache — cinq périodes", { size: 24, after: 100 }),
    t(`Fiches de préparation · Leçons · Exercices et corrigés`, { size: 24, after: 700 }),
    t("Madagascar", { size: 24, bold: true }),
    new Paragraph({ children: [new PageBreak()] }),
  ];
}

function avantPropos() {
  const out = [bookmarkedHeading("avantpropos", "AVANT-PROPOS", HeadingLevel.HEADING_1, C.titre, 32)];
  [
    "Ce manuel s'adresse aux enseignants et aux élèves de la classe de 6e. Il couvre l'intégralité du programme officiel de mathématiques pour ce niveau, réparti en cinq périodes conformes à la répartition annuelle en vigueur.",
    "Chaque séance est présentée en trois temps. La fiche de préparation donne à l'enseignant le déroulement complet de son heure de cours, minuté et prêt à l'emploi : questions posées, réponses attendues, consignes exactes. La leçon fournit ensuite le texte de référence que l'élève relira chez lui. Les exercices, enfin, permettent d'évaluer les acquis ; ils sont tous accompagnés de leur corrigé détaillé et d'un barème.",
    "Le déroulement de chaque séance suit trois grandes étapes : une révision de la séance précédente, la nouvelle leçon en six moments (mise en situation, présentation, observation, analyse, synthèse, application), puis une évaluation écrite. Cette progression régulière installe des habitudes de travail et facilite la mémorisation.",
    "Les situations proposées sont ancrées dans la vie quotidienne malgache : le marché, la riziculture, les transports, les distances entre villes. L'élève y reconnaît son environnement et comprend que les mathématiques servent à résoudre des problèmes réels.",
    "Un soin particulier a été apporté aux corrigés. Ils ne se limitent pas à donner la réponse : ils expliquent le raisonnement, étape par étape, pour que l'élève qui s'est trompé comprenne où et pourquoi.",
  ].forEach((x) => out.push(p(x, { spacing: { after: 120 } })));
  out.push(new Paragraph({ children: [new PageBreak()] }));
  return out;
}

function modeEmploi() {
  const out = [bookmarkedHeading("modeemploi", "COMMENT UTILISER CE MANUEL", HeadingLevel.HEADING_1, C.titre, 32)];
  out.push(p("**Les trois grandes étapes d'une séance**", { spacing: { after: 80 } }));
  [
    "**I. Révision** — quelques questions rapides sur la séance précédente, pour réactiver ce qui a été appris.",
    "**II. Nouvelle leçon** — le cœur de la séance, en six moments : la mise en situation éveille l'intérêt ; la présentation annonce le titre et l'objectif ; l'observation met sous les yeux un exemple ou un matériel ; l'analyse dégage la règle par un jeu de questions ; la synthèse énonce ce qu'il faut retenir ; l'application met immédiatement en pratique.",
    "**III. Évaluation** — des exercices écrits qui mesurent ce qui a été compris.",
  ].forEach((x) => out.push(p(x, { spacing: { after: 70 } })));
  out.push(empty(80));
  out.push(p("**Le code couleur**", { spacing: { after: 80 } }));
  [
    ["Titre de leçon", C.titre, "rouge"],
    ["Sous-titre de section", C.soustitre, "vert"],
    ["Mot clé à retenir", C.motcle, "bleu et gras"],
    ["Corrigé des exercices", C.corrige, "rose bordeaux"],
  ].forEach(([lib, col, nom]) => out.push(new Paragraph({
    spacing: { after: 50 },
    children: [
      new TextRun({ text: "• ", font: FONT, size: 21 }),
      new TextRun({ text: lib, font: FONT, size: 21, bold: true, color: col }),
      new TextRun({ text: ` — ${nom}.`, font: FONT, size: 21 }),
    ],
  })));
  out.push(empty(80));
  out.push(p("**Les encadrés**", { spacing: { after: 80 } }));
  out.push(p("L'encadré **À retenir** rassemble l'essentiel de la leçon en quelques lignes. L'encadré **Attention** signale l'erreur que les élèves commettent le plus souvent sur la notion étudiée. L'encadré **Astuce** propose, quand il en existe une, un moyen simple de retenir une règle."));
  out.push(new Paragraph({ children: [new PageBreak()] }));
  return out;
}

function sommaire() {
  const out = [bookmarkedHeading("sommaire", "TABLE DES MATIÈRES", HeadingLevel.HEADING_1, C.titre, 32)];
  out.push(tocLink("avantpropos", "Avant-propos"));
  out.push(tocLink("modeemploi", "Comment utiliser ce manuel"));
  out.push(empty(80));
  let n = 0;
  progression.forEach((per) => {
    out.push(new Paragraph({
      spacing: { before: 140, after: 60 },
      children: [new TextRun({
        text: `PÉRIODE ${per.romain} — ${per.titre}`,
        font: FONT, size: 22, bold: true, color: C.soustitre })],
    }));
    per.chapitres.forEach((c) => {
      const from = n + 1; n += c.seances;
      out.push(p(`${c.nom} — séances ${from} à ${n}`, { indent: { left: 340 }, spacing: { after: 30 } }));
    });
    if (revisions[per.id]) {
      out.push(tocLink(`revision${per.id}`, revisions[per.id].revision.titre, 340));
      out.push(tocLink(`examen${per.id}`, revisions[per.id].examen.titre, 340));
    }
  });
  out.push(empty(120));
  out.push(p(`**Total : ${TOTAL} séances.**`));
  out.push(new Paragraph({ children: [new PageBreak()] }));
  return out;
}

function tableauDeBord() {
  const out = [bookmarkedHeading("tdb", "TABLEAU DE BORD", HeadingLevel.HEADING_1, C.titre, 32)];
  out.push(p("Vue d'ensemble de l'année : chaque période, ses chapitres et le nombre de séances qui leur est consacré.", { spacing: { after: 140 } }));
  const { Table, TableRow, WidthType } = B;
  const th = (t) => B.cell([p(t, { bold: true, align: AlignmentType.CENTER })], { shading: SH.entete });
  const rows = [new TableRow({ children: [th("Période"), th("Chapitre"), th("Séances")] })];
  let n = 0;
  progression.forEach((per) => {
    per.chapitres.forEach((c, i) => {
      const from = n + 1; n += c.seances;
      rows.push(new TableRow({ children: [
        B.cell([p(i === 0 ? `Période ${per.romain}` : "", { bold: true })], { width: 18, shading: i === 0 ? SH.neutre : undefined }),
        B.cell([p(c.nom)], { width: 62 }),
        B.cell([p(`${from} – ${n}`, { align: AlignmentType.CENTER })], { width: 20 }),
      ] }));
    });
  });
  out.push(new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: B.gridBorders(), rows,
  }));
  out.push(new Paragraph({ children: [new PageBreak()] }));
  return out;
}

// ============================================================ UNE SÉANCE
function batirSeance(s, numero, periode, indexLocal, totalLocal) {
  const out = [];
  const id = `seance${numero}`;

  out.push(new Paragraph({
    spacing: { after: 40 },
    children: [new TextRun({
      text: `SÉANCE ${numero} / ${TOTAL}`,
      font: FONT, size: 20, bold: true, color: C.gris })],
  }));
  out.push(bookmarkedHeading(id, s.titre, HeadingLevel.HEADING_2, C.titre, 30));

  // ---- Fiche de préparation
  out.push(new Paragraph({
    alignment: AlignmentType.CENTER, spacing: { before: 100, after: 100 },
    children: [new TextRun({ text: "FICHE DE PRÉPARATION", font: FONT, size: 26, bold: true })],
  }));
  out.push(metaTable({
    sousDiscipline: periode.theme,
    theme: s.ch,
    titre: s.titre,
    objectif: s.objectif,
    documentation: "Programme officiel de Mathématiques, classe de 6e — RAPS 6e",
    materiel: s.materiel,
    seanceLocale: `${indexLocal} / ${totalLocal}`,
  }));
  out.push(empty(100));

  const qr = (a) => a.map(([q, r]) => p(`${q}\nR.A. : ${r}`, { spacing: { after: 50 } }));
  const rows = [];

  rows.push(stepRow("I. Révision\n(8 min)",
    s.rev.map(([q]) => p(q, { spacing: { after: 40 } })),
    s.rev.map(([, r]) => p(`R.A. : ${r}`, { spacing: { after: 40 } })),
    "Interrogation orale", "Ardoises"));

  rows.push(sectionRow("II. NOUVELLE LEÇON (40 min)"));

  rows.push(stepRow("1. Mise en situation",
    [p(s.mise.q)], [p(`R.A. : ${s.mise.ra}`), p("Écoutent et répondent à l'oral.")],
    "Questionnement", "Situation orale évoquée"));

  rows.push(stepRow("2. Présentation",
    [p(`« Aujourd'hui nous allons apprendre : ${s.titre}. À la fin de la séance, vous serez capables de ${s.objectif.replace(/^À la fin de la séance, l'élève est capable de /, "")} »`)],
    [p("Écoutent.")], "Exposé", "Tableau"));

  rows.push(stepRow("3. Observation",
    [p(s.obs)], [p("Observent silencieusement.")],
    "Observation dirigée", s.materiel.split(",")[0]));

  rows.push(stepRow("4. Analyse",
    s.ana.map(([q]) => p(q, { spacing: { after: 45 } })),
    s.ana.map(([, r]) => p(`R.A. : ${r}`, { spacing: { after: 45 } })),
    "Travail collectif", "Grande ardoise"));

  rows.push(stepRow("5. Synthèse",
    [p(`Donc, ${s.syn.replace(/^Donc, /, "")}`)],
    [p("Écoutent.")], "Exposé", "Tableau"));

  rows.push(stepRow("6. Application",
    s.app.map((e) => p(e.c, { spacing: { after: 60 } })),
    s.app.map((e) => p(e.r, { spacing: { after: 60 } })),
    "Travail individuel", "Cahier de classe"));

  rows.push(stepRow("III. Évaluation\n(12 min)",
    s.evalx.map((e) => p(e.c, { spacing: { after: 60 } })),
    s.evalx.map((e) => p(e.r, { spacing: { after: 60 } })),
    "Travail écrit", "Cahier d'évaluation"));

  out.push(deroulementTable(rows));
  out.push(new Paragraph({ children: [new PageBreak()] }));

  // ---- Leçon
  out.push(new Paragraph({
    spacing: { after: 100 },
    children: [new TextRun({ text: "LEÇON", font: FONT, size: 22, bold: true, color: C.gris })],
  }));
  out.push(new Paragraph({
    spacing: { after: 140 },
    children: [new TextRun({ text: s.titre, font: FONT, size: 30, bold: true, color: C.titre })],
  }));

  s.lecon.forEach(([titre, corps]) => {
    out.push(new Paragraph({
      spacing: { before: 130, after: 60 },
      children: [new TextRun({ text: titre, font: FONT, size: 23, bold: true, color: C.soustitre })],
    }));
    corps.split("\n").forEach((l) => out.push(p(l, { spacing: { after: 60 } })));
  });

  out.push(empty(120));
  out.push(boxed([p(s.syn)], SH.retenir, "À retenir"));

  if (s.attention) {
    out.push(empty(80));
    out.push(boxed([p(s.attention)], SH.piege, "Attention"));
  }
  if (s.astuce) {
    out.push(empty(80));
    out.push(boxed([p(s.astuce)], SH.astuce, "Astuce"));
  }

  // ---- Exercices
  out.push(empty(160));
  const total = s.exos.reduce((a, e) => a + e.pts, 0);
  out.push(new Paragraph({
    spacing: { before: 120, after: 100 },
    children: [
      new TextRun({ text: "EXERCICES", font: FONT, size: 26, bold: true, color: C.titre }),
      new TextRun({ text: `   (noté sur ${total} points)`, font: FONT, size: 21, color: C.gris }),
    ],
  }));
  s.exos.forEach((e, i) => {
    out.push(new Paragraph({
      spacing: { before: 90, after: 40 },
      children: [
        new TextRun({ text: `Exercice ${i + 1}. `, font: FONT, size: 21, bold: true }),
        new TextRun({ text: `(${e.pts} points)`, font: FONT, size: 20, color: C.gris }),
      ],
    }));
    e.c.split("\n").forEach((l) => out.push(p(l, { spacing: { after: 40 } })));
  });

  out.push(empty(120));
  const corr = [];
  s.exos.forEach((e, i) => {
    corr.push(p(`**Exercice ${i + 1}.** ${e.r.split("\n")[0]}`, { spacing: { after: 40 } }));
    e.r.split("\n").slice(1).forEach((l) => corr.push(p(l, { spacing: { after: 40 } })));
  });
  out.push(boxed(corr, SH.corrige, "Corrigé"));

  out.push(new Paragraph({ children: [new PageBreak()] }));
  return out;
}

// ==================================================== RÉVISION / EXAMEN
function batirRevision(r, periode) {
  const { Table, TableRow, WidthType } = B;
  const out = [bookmarkedHeading(
    `revision${periode.id}`, r.titre, HeadingLevel.HEADING_2, C.titre, 30)];
  out.push(p(r.intro, { spacing: { after: 140 } }));

  out.push(new Paragraph({
    spacing: { before: 120, after: 80 },
    children: [new TextRun({
      text: "1. Les notions à retenir", font: FONT, size: 23, bold: true, color: C.soustitre })],
  }));
  const th = (t) => B.cell([p(t, { bold: true, align: AlignmentType.CENTER })], { shading: SH.entete });
  const rows = [new TableRow({ children: [th("Notion"), th("Ce qu'il faut retenir")] })];
  r.notions.forEach(([n, d]) => rows.push(new TableRow({
    children: [B.cell([p(`**${n}**`)], { width: 30, shading: SH.neutre }),
               B.cell([p(d)], { width: 70 })],
  })));
  out.push(new Table({ width: { size: 100, type: WidthType.PERCENTAGE },
                       borders: B.gridBorders(), rows }));

  out.push(new Paragraph({
    spacing: { before: 200, after: 80 },
    children: [new TextRun({
      text: "2. Questions de révision", font: FONT, size: 23, bold: true, color: C.soustitre })],
  }));
  r.questions.forEach(([q_, a], i) => {
    out.push(p(`**${i + 1}.** ${q_}`, { spacing: { after: 30 } }));
    out.push(p(`R.A. : [[${a}]]`, { indent: { left: 280 }, spacing: { after: 70 } }));
  });

  out.push(new Paragraph({ children: [new PageBreak()] }));
  return out;
}

function batirExamen(e, periode) {
  const out = [bookmarkedHeading(
    `examen${periode.id}`, e.titre, HeadingLevel.HEADING_2, C.titre, 30)];

  const total = e.parties.reduce(
    (s, pa) => s + pa.exos.reduce((a, x) => a + x.pts, 0), 0);
  out.push(p(`**Durée : ${e.duree}**   —   **Barème : ${total} points**`, { spacing: { after: 60 } }));
  out.push(p(`__${e.consigne}__`, { spacing: { after: 160 } }));

  e.parties.forEach((pa) => {
    out.push(new Paragraph({
      spacing: { before: 150, after: 70 },
      children: [new TextRun({ text: pa.nom, font: FONT, size: 23, bold: true, color: C.soustitre })],
    }));
    pa.exos.forEach((x, i) => {
      out.push(new Paragraph({
        spacing: { before: 70, after: 30 },
        children: [
          new TextRun({ text: `${i + 1}. `, font: FONT, size: 21, bold: true }),
          new TextRun({ text: `(${x.pts} points)`, font: FONT, size: 20, color: C.gris }),
        ],
      }));
      x.c.split("\n").forEach((l) => out.push(p(l, { spacing: { after: 30 } })));
    });
  });

  out.push(new Paragraph({ children: [new PageBreak()] }));
  out.push(new Paragraph({
    spacing: { after: 120 },
    children: [new TextRun({
      text: `Corrigé — ${e.titre}`, font: FONT, size: 26, bold: true, color: C.titre })],
  }));
  e.parties.forEach((pa) => {
    out.push(new Paragraph({
      spacing: { before: 130, after: 60 },
      children: [new TextRun({ text: pa.nom, font: FONT, size: 22, bold: true, color: C.soustitre })],
    }));
    const kids = [];
    pa.exos.forEach((x, i) => {
      kids.push(p(`**${i + 1}.** (${x.pts} pts) ${x.r.split("\n")[0]}`, { spacing: { after: 40 } }));
      x.r.split("\n").slice(1).forEach((l) => kids.push(p(l, { spacing: { after: 40 } })));
    });
    out.push(boxed(kids, SH.corrige));
  });

  out.push(new Paragraph({ children: [new PageBreak()] }));
  return out;
}

// ============================================================ ASSEMBLAGE
const children = [
  ...couverture(), ...avantPropos(), ...modeEmploi(), ...sommaire(), ...tableauDeBord(),
];

const periodeP1 = progression[0];
const totalP1 = periodeP1.chapitres.reduce((a, c) => a + c.seances, 0);

children.push(new Paragraph({
  alignment: AlignmentType.CENTER, spacing: { before: 400, after: 200 },
  children: [new TextRun({
    text: `PÉRIODE ${periodeP1.romain}`, font: FONT, size: 44, bold: true, color: C.titre })],
}));
children.push(new Paragraph({
  alignment: AlignmentType.CENTER, spacing: { after: 300 },
  children: [new TextRun({ text: periodeP1.titre, font: FONT, size: 26, bold: true })],
}));
children.push(new Paragraph({ children: [new PageBreak()] }));

seancesP1.forEach((s, i) => {
  children.push(...batirSeance(s, i + 1, periodeP1, i + 1, totalP1));
});

if (seancesP1.length >= totalP1 && revisions[periodeP1.id]) {
  children.push(...batirRevision(revisions[periodeP1.id].revision, periodeP1));
  children.push(...batirExamen(revisions[periodeP1.id].examen, periodeP1));
}

const doc = new Document({
  creator: "Collection J-Learn",
  title: "Manuel de Mathématiques — Classe de 6e",
  description: "Manuel scolaire J-Learn, programme officiel malgache",
  styles: {
    default: {
      document: { run: { font: FONT, size: 21 } },
      heading1: { run: { font: FONT, size: 32, bold: true, color: C.titre } },
      heading2: { run: { font: FONT, size: 28, bold: true, color: C.titre } },
    },
  },
  sections: [{
    properties: {
      page: {
        margin: {
          top: convertMillimetersToTwip(18), bottom: convertMillimetersToTwip(18),
          left: convertMillimetersToTwip(16), right: convertMillimetersToTwip(16),
        },
      },
    },
    children,
  }],
});

const outDir = path.join(__dirname, "..", "..", "telechargements");
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, "Manuel-Mathematiques-6e-JLearn-V1.docx");

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(outFile, buf);
  console.log(`OK  ${outFile}  ${(buf.length / 1024).toFixed(0)} Ko`);
  console.log(`    ${seancesP1.length} séance(s) rédigée(s) sur ${TOTAL} prévues`);
});
