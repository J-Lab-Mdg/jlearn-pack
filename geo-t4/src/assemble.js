// assemble.js — Assemble le Manuel de Géographie T4 (Traitement C, skill jlearn-manuel-scolaire)
// Contenu courant : Unités 1, 2 et 3. Usage : node src/assemble.js
const fs = require("fs");
const path = require("path");
const { Document, Packer, AlignmentType, Table, TableRow, WidthType, BorderStyle } = require("docx");
const B = require("./builders");
const { generateSeanceDocContent } = require("./seance-generator");
const U1 = require("./data-unite1");
const U1REV = require("./data-unite1-rev");
const U2A = require("./data-unite2");
const U2B = require("./data-unite2b");
const U2 = { topics: [...U2A.topics, ...U2B.topics] };
const U2REV = require("./data-unite2-rev");
const U3A = require("./data-unite3");
const U3B = require("./data-unite3b");
const U3 = { topics: [...U3A.topics, ...U3B.topics] };
const U3REV = require("./data-unite3-rev");

const OUT_DIR = path.join(__dirname, "..", "output");
const OUT_FILE = path.join(OUT_DIR, "Manuel_Geographie_T4_V1_UNITE3.docx");

// ── Configuration des unités disponibles ────────────────────────────────
const UNITES = [
  {
    id: "unite1",
    nom: "UNITÉ 1 — L'ORIENTATION GÉOGRAPHIQUE",
    seances: "Séances 1 à 10",
    lecons: 8,
    intro: "Thématique officielle du programme d'études T4 : la notion d'orientation géographique — les points cardinaux, les directions intermédiaires et la rose des vents. Durée officielle : 4 heures, soit 8 séances de 30 minutes.",
    topics: U1.topics,
    rev: U1REV.revision,
    exam: U1REV.examen,
  },
  {
    id: "unite2",
    nom: "UNITÉ 2 — LE PLAN",
    seances: "Séances 11 à 24",
    lecons: 12,
    intro: "Thématique officielle du programme d'études T4 : le plan à différentes échelles — plan de la salle de classe, de l'école, du quartier, du village ou de la ville : éléments, orientation, échelle et légende. Durée officielle : 6 heures, soit 12 séances de 30 minutes.",
    topics: U2.topics,
    rev: U2REV.revision,
    exam: U2REV.examen,
  },
  {
    id: "unite3",
    nom: "UNITÉ 3 — LES ÉLÉMENTS DU PAYSAGE NATUREL",
    seances: "Séances 25 à 38",
    lecons: 12,
    intro: "Thématique officielle du programme d'études T4 : les éléments du paysage naturel — le relief, les cours d'eau, la végétation, le paysage littoral, le paysage marin, les paysages aménagés urbain et rural, le climat et les utilités pour l'homme. Durée officielle : 6 heures, soit 12 séances de 30 minutes.",
    topics: U3.topics,
    rev: U3REV.revision,
    exam: U3REV.examen,
  },
];

// Unités restantes (livrées plus tard) — affichées en gris dans la table des matières
const FUTURES = [
  { nom: "UNITÉ 4 — L'ENVIRONNEMENT", seances: "Séances 39 à 56" },
  { nom: "UNITÉ 5 — L'HOMME ET LES ACTIVITÉS QUOTIDIENNES", seances: "Séances 57 à 76" },
];

const thin = { style: BorderStyle.SINGLE, size: 4, color: "BBBBBB" };
const borders = { top: thin, bottom: thin, left: thin, right: thin, insideHorizontal: thin, insideVertical: thin };

// ── 1. Couverture ───────────────────────────────────────────────────────
function coverPage() {
  return [
    B.pEmpty(28), B.pEmpty(28),
    B.p("COLLECTION J-LEARN", { size: 26, bold: true, align: AlignmentType.CENTER, after: 300, color: "1F4E79" }),
    B.pEmpty(20),
    B.p("GÉOGRAPHIE", { size: 56, bold: true, align: AlignmentType.CENTER, after: 120, color: "C00000" }),
    B.p("Classe de T4", { size: 32, bold: true, align: AlignmentType.CENTER, after: 400 }),
    B.pEmpty(16),
    B.p("Manuel complet : fiches de préparation, leçons,", { size: 24, align: AlignmentType.CENTER, after: 60 }),
    B.p("exercices, corrigés et sujets d'examen", { size: 24, align: AlignmentType.CENTER, after: 400 }),
    B.pEmpty(16),
    B.p("Conforme au programme d'études officiel T4 en vigueur à Madagascar", { size: 20, italics: true, align: AlignmentType.CENTER, after: 200 }),
    B.p("Volume horaire officiel : 1 heure par semaine — séances de 30 minutes", { size: 20, italics: true, align: AlignmentType.CENTER, after: 200 }),
    B.pEmpty(20),
    B.p("Collection J-Learn — Manuels scolaires pour Madagascar", { size: 18, align: AlignmentType.CENTER, after: 60, color: "555555" }),
    B.pageBreak(),
  ];
}

// ── 2. Avant-propos ─────────────────────────────────────────────────────
function avantPropos() {
  return [
    B.headingWithBookmark("Avant-propos", "avantpropos", { size: 30, after: 200 }),
    B.p("Ce manuel de Géographie, destiné aux élèves de la classe de T4, a été conçu pour accompagner l'enseignant et l'élève tout au long de l'année scolaire, conformément au programme d'études officiel en vigueur à Madagascar.", { size: 21, after: 140 }),
    B.p("Il propose, pour chacune des 66 séances de 30 minutes qui composent le programme de Géographie de T4 (1 heure par semaine), une fiche de préparation détaillée, une leçon rédigée, ainsi que des exercices avec leurs corrigés détaillés notés selon un barème.", { size: 21, after: 140 }),
    B.p("Les séances sont regroupées en cinq unités thématiques : l'orientation géographique, le plan, les éléments du paysage naturel, l'Environnement, et l'Homme et les activités quotidiennes. Chaque unité se termine par une séance de révision puis par un sujet d'examen avec son corrigé, pour préparer les élèves aux évaluations. Un glossaire et des cartes muettes complèteront l'ouvrage final.", { size: 21, after: 140 }),
    B.p("Cette édition a été élaborée avec le plus grand soin. Malgré toute l'attention portée à sa rédaction et à sa relecture, il est possible que quelques erreurs (orthographe, grammaire, ou autres coquilles) s'y soient glissées : nous vous remercions par avance de votre indulgence.", { size: 21, after: 140 }),
    B.p("L'équipe J-Lab accueille avec attention tous les retours des enseignants et des élèves qui utilisent ce manuel : signalement d'erreurs, suggestions d'amélioration, comme appréciations sur les points forts de l'ouvrage. Vos remarques contribuent directement à l'amélioration des prochaines éditions.", { size: 21, after: 140 }),
    B.p("Nous remercions chaleureusement les enseignants qui accompagneront leurs élèves avec ce manuel : c'est grâce à leur engagement quotidien que ce travail prend tout son sens.", { size: 21, after: 200 }),
    B.pageBreak(),
  ];
}

// ── 3. Mode d'emploi ────────────────────────────────────────────────────
function modeEmploi() {
  return [
    B.headingWithBookmark("Mode d'emploi du manuel", "modeemploi", { size: 30, after: 200 }),
    B.p("Chaque séance de ce manuel est organisée en trois temps :", { size: 21, after: 100 }),
    B.p("1. La fiche de préparation : un tableau en trois grandes étapes — I. Révision, II. Nouvelle leçon (mise en situation, présentation, observation, analyse, synthèse, application) et III. Évaluation — destiné à guider l'enseignant dans le déroulement de son cours.", { size: 21, after: 100, indent: 240 }),
    B.p("2. La leçon : le contenu rédigé que l'élève doit retenir, avec les notions clés mises en évidence en couleur.", { size: 21, after: 100, indent: 240 }),
    B.p("3. Les exercices : des exercices variés, avec une consigne claire pour chacun, pour s'entraîner et s'évaluer, accompagnés d'un corrigé détaillé noté selon un barème.", { size: 21, after: 140, indent: 240 }),
    B.p("« R.A. » signifie « Réponse attendue » : il s'agit de la réponse que l'enseignant attend de la part des élèves.", { size: 21, after: 140 }),
    B.p("Le code couleur de la leçon :", { size: 21, after: 100, bold: true }),
    B.p("• le titre de la leçon est en rouge ;", { size: 21, after: 60, indent: 240 }),
    B.p("• les sous-titres sont en vert ;", { size: 21, after: 60, indent: 240 }),
    B.p("• les mots clés sont en bleu et en gras ;", { size: 21, after: 60, indent: 240 }),
    B.p("• dans les corrigés, les mots clés de la réponse sont en rose.", { size: 21, after: 140, indent: 240 }),
    B.p("Les séances durent 30 minutes : deux séances sont donc prévues chaque semaine, conformément au volume horaire officiel d'une heure par semaine.", { size: 21, after: 140 }),
    B.pageBreak(),
  ];
}

// ── 4. Table des matières interactive ───────────────────────────────────
function tableDesMatieres() {
  const out = [];
  out.push(B.headingWithBookmark("Table des matières", null, { size: 30, after: 200 }));
  out.push(B.tocLink("Avant-propos", "avantpropos", { size: 21, bold: true }));
  out.push(B.tocLink("Mode d'emploi du manuel", "modeemploi", { size: 21, bold: true }));
  out.push(B.tocLink("Tableau de bord général", "tableaudebord", { size: 21, bold: true }));
  out.push(B.pEmpty(10));
  UNITES.forEach((u) => {
    out.push(B.tocLink(u.nom, u.id, { size: 22, bold: true }));
    u.topics.forEach((t) => {
      out.push(B.tocLink(`Séance ${t.numero} — ${t.titre}`, `seance${t.numero}`, { size: 20, indent: 360 }));
    });
    out.push(B.tocLink(`Séance ${u.rev.numero} — Révision (Unité ${UNITES.indexOf(u) + 1})`, `seance${u.rev.numero}`, { size: 20, indent: 360 }));
    out.push(B.tocLink(`Séance ${u.exam.numero} — Sujet d'examen T4 (Unité ${UNITES.indexOf(u) + 1})`, `seance${u.exam.numero}`, { size: 20, indent: 360 }));
    out.push(B.pEmpty(10));
  });
  FUTURES.forEach((f) => {
    out.push(B.p(`${f.nom} (${f.seances}) — à paraître dans la version finale`, { size: 20, bold: true, color: "777777", after: 60 }));
  });
  out.push(B.pEmpty(10));
  out.push(B.p("Annexes (version finale) : glossaire — cartes muettes — auto-évaluation — table des illustrations", { size: 20, italics: true, color: "777777", after: 100 }));
  out.push(B.pageBreak());
  return out;
}

// ── 5. Tableaux de bord ─────────────────────────────────────────────────
function boardRow(cols, widths, header = false) {
  return new TableRow({
    ...(header ? { tableHeader: true } : {}),
    children: cols.map((c, i) =>
      B.cell([B.p(c, { bold: header, size: 20, align: header ? AlignmentType.CENTER : AlignmentType.LEFT })],
        { shading: header ? B.HEADER_BG : undefined, width: widths[i] })),
  });
}

function tableauDeBord() {
  const out = [];
  out.push(B.headingWithBookmark("Tableau de bord général", "tableaudebord", { size: 30, after: 200 }));
  out.push(B.p("Le programme officiel de Géographie T4 prévoit 33 heures annuelles (1 heure par semaine, séances de 30 minutes), réparties en cinq thématiques. Le manuel compte 76 numéros : 66 séances de leçon, 5 séances de révision et 5 sujets d'examen.", { size: 21, after: 160 }));
  const rows = [
    boardRow(["Unité", "Séances", "Leçons", "Révision + Examen"], [46, 18, 12, 24], true),
    ...UNITES.map((u) => boardRow([u.nom.replace(/UNITÉ \d+ — /, `Unité ${UNITES.indexOf(u) + 1} — `), u.seances, String(u.lecons), "2 (incluses)"], [46, 18, 12, 24])),
    ...FUTURES.map((f, i) => boardRow([f.nom.replace(/UNITÉ \d+ — /, `Unité ${UNITES.length + i + 1} — `), f.seances, "à venir", "2 (prévues)"], [46, 18, 12, 24])),
    boardRow(["Total", "Séances 1 à 76", "66", "5 + 5"], [46, 18, 12, 24]),
  ];
  out.push(new Table({ borders, width: { size: 100, type: WidthType.PERCENTAGE }, rows }));
  out.push(B.pEmpty());

  UNITES.forEach((u) => {
    out.push(B.p(`Tableau de bord — ${u.nom.charAt(0) + u.nom.slice(1).toLowerCase()}`, { size: 24, bold: true, before: 120, after: 120, color: B.GREEN }));
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
  out.push(B.headingWithBookmark(`SÉANCE ${rev.numero} / ${rev.total}`, `seance${rev.numero}`, { size: 22, align: AlignmentType.CENTER, after: 40 }));
  out.push(B.headingWithBookmark(rev.titre, null, { size: 26, align: AlignmentType.CENTER, after: 60 }));
  out.push(B.p("FICHE DE PRÉPARATION", { size: 24, bold: true, align: AlignmentType.CENTER, after: 120 }));
  out.push(B.metaTable({
    discipline: "Géographie",
    theme: rev.theme,
    titre: rev.titre,
    objectif: "Réviser et consolider toutes les notions de l'unité.",
    documentation: "Programme d'études officiel T4 — Géographie",
    classe: "T4",
    seanceNum: rev.numero,
    total: rev.total,
    duree: "30 minutes",
  }));
  out.push(B.pEmpty());
  out.push(B.deroulementTable([
    B.stepRow({
      etape: "I. RÉVISION", duree: "3 min",
      enseignant: [rev.questions[0][0], rev.questions[1][0]],
      apprenants: [`R.A. : ${rev.questions[0][1]}`, `R.A. : ${rev.questions[1][1]}`],
      technique: "Questions-réponses orales",
      support: "—",
    }),
    B.sectionRow("II. NOUVELLE LEÇON", "22 min"),
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
        B.p("R.A. : Les binômes s'interrogent sur trois notions de l'unité et corrigent leurs réponses avec le tableau récapitulatif.", { size: 16, after: 30, kwColor: B.CORRIGE }),
      ],
      technique: "Travail en binôme",
      support: "Cahier, tableau récapitulatif",
    }),
    B.stepRow({
      etape: "III. ÉVALUATION", duree: "5 min",
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
    out.push(B.p(q, { size: 21, after: 30 }));
    out.push(B.p(`R.A. : ${ra}`, { size: 21, after: 90, kwColor: B.CORRIGE }));
  });
  return out;
}

// ── 7. Sujet d'examen ───────────────────────────────────────────────────
function examenSeance(ex) {
  const out = [];
  out.push(B.pageBreak());
  out.push(B.headingWithBookmark(`SÉANCE ${ex.numero} / ${ex.total}`, `seance${ex.numero}`, { size: 22, align: AlignmentType.CENTER, after: 40 }));
  out.push(B.headingWithBookmark(ex.titre, null, { size: 26, align: AlignmentType.CENTER, after: 60 }));
  out.push(B.p(`Durée : ${ex.duree} — Barème : ${ex.bareme} points`, { size: 22, bold: true, align: AlignmentType.CENTER, after: 80 }));
  out.push(B.p(ex.consigneGenerale, { size: 21, italics: true, align: AlignmentType.CENTER, after: 160 }));
  ex.exercices.forEach((exo) => {
    out.push(B.p(exo.titre, { size: 22, bold: true, before: 120, after: 60 }));
    out.push(B.p(exo.consigne, { size: 21, italics: true, after: 60 }));
    (exo.items || []).forEach((it) => out.push(B.p(it, { size: 21, after: 40 })));
  });
  out.push(B.pEmpty());
  out.push(B.p("CORRIGÉ ET BARÈME", { size: 24, bold: true, before: 160, after: 80 }));
  ex.exercices.forEach((exo) => {
    out.push(B.p(exo.titre, { size: 21, bold: true, after: 40 }));
    (exo.corrige || []).forEach((c) => out.push(B.p(c, { size: 21, after: 40, kwColor: B.CORRIGE })));
  });
  out.push(B.p(`Total : ${ex.bareme} points`, { size: 21, bold: true, before: 80, after: 100 }));
  return out;
}

// ── Assemblage ──────────────────────────────────────────────────────────
(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const children = [
    ...coverPage(),
    ...avantPropos(),
    ...modeEmploi(),
    ...tableDesMatieres(),
    ...tableauDeBord(),
  ];

  UNITES.forEach((u, i) => {
    const numUnite = i + 1;
    children.push(B.headingWithBookmark(u.nom, u.id, { size: 28, after: 60, align: AlignmentType.CENTER }));
    children.push(B.p(u.intro, { size: 20, italics: true, align: AlignmentType.CENTER, after: 200 }));

    let prevQuestions = null; // pas de révision au début d'une unité : la 1re séance a ses questions d'ouverture
    u.topics.forEach((topic) => {
      children.push(...generateSeanceDocContent(topic, prevQuestions));
      prevQuestions = topic.questionsRevision;
    });
    children.push(...revisionSeance(u.rev, numUnite));
    children.push(...examenSeance(u.exam));
  });

  const doc = new Document({
    creator: "J-Lab — Collection J-Learn",
    title: "Manuel de Géographie T4 — J-Learn (V1, Unités 1-2)",
    description: "Manuel scolaire de Géographie, classe de T4 (Madagascar) — fiches de préparation, leçons, exercices corrigés.",
    styles: {
      default: {
        document: { run: { font: "Times New Roman", size: 20 } },
      },
    },
    sections: [{
      properties: { page: { margin: { top: 900, bottom: 900, left: 1000, right: 1000 } } },
      children,
    }],
  });

  const buf = await Packer.toBuffer(doc);
  fs.writeFileSync(OUT_FILE, buf);
  console.log("Écrit :", OUT_FILE, `(${Math.round(buf.length / 1024)} Ko)`);
})();
