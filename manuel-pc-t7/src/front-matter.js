// front-matter.js — couverture, avant-propos, mode d'emploi, sommaire interactif, tableau de bord, pages d'unité
const B = require("./builders");
const { AlignmentType, Table, TableRow, WidthType } = require("docx");
const path = require("path");
const fs = require("fs");

const sizeOf = (p) => {
  const buf = fs.readFileSync(p);
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
};

function img(rootDir, rel, wPx) {
  const p = path.join(rootDir, rel);
  if (!fs.existsSync(p)) return null;
  const dim = sizeOf(p);
  const h = Math.round(dim.height * (wPx / dim.width));
  return B.imagePara(p, wPx, h);
}

// ---------------- Couverture ----------------
function buildCouverture(rootDir) {
  const out = [];
  out.push(B.p("RÉPUBLIQUE DE MADAGASCAR", { bold: true, size: 22, align: AlignmentType.CENTER, spacingBefore: 300, spacingAfter: 60 }));
  out.push(B.p("Collection J-Learn", { italics: true, size: 24, align: AlignmentType.CENTER, spacingAfter: 400 }));
  out.push(B.p("SCIENCES PHYSIQUES", { bold: true, size: 40, color: B.RED, align: AlignmentType.CENTER, spacingAfter: 100 }));
  out.push(B.p("Physique - Chimie", { bold: true, size: 32, color: B.BLUE, align: AlignmentType.CENTER, spacingAfter: 100 }));
  out.push(B.p("Classe de T7", { bold: true, size: 30, align: AlignmentType.CENTER, spacingAfter: 300 }));
  const cov = img(rootDir, "images/img_couverture.png", 440) || img(rootDir, "images/img_unite3.png", 440);
  if (cov) out.push(cov);
  out.push(B.p("Manuel de l'enseignant et de l'apprenant", { size: 24, align: AlignmentType.CENTER, spacingBefore: 300, spacingAfter: 80 }));
  out.push(B.p("Fiches de préparation • Leçons illustrées • Exercices corrigés", { italics: true, size: 20, align: AlignmentType.CENTER, spacingAfter: 400 }));
  out.push(B.p("Version V1 — Année scolaire 2026-2027", { size: 20, align: AlignmentType.CENTER, spacingAfter: 60 }));
  out.push(B.pageBreak());
  return out;
}

// ---------------- Avant-propos ----------------
function buildAvantPropos() {
  const out = [];
  out.push(B.heading("AVANT-PROPOS", { anchorId: "avantpropos", size: 30, align: AlignmentType.CENTER, spacingAfter: 200 }));
  [
    "Ce manuel de Sciences Physiques pour la classe de T7 a été conçu conformément au programme d'études officiel du Ministère de l'Éducation Nationale de Madagascar. Il couvre l'intégralité du programme de l'année en trente-trois séances, complétées par un examen blanc de fin d'année.",
    "Chaque séance est construite selon la même architecture en trois temps : la fiche de préparation destinée à l'enseignant, avec le déroulement complet de la séance (révision, nouvelle leçon en six étapes, évaluation) ; la leçon illustrée à destination de l'apprenant, avec ses mots-clés mis en évidence ; et une série d'exercices notés sur 20 points, accompagnés de leur corrigé détaillé.",
    "Une attention particulière a été portée au contexte malgache : les exemples, les anecdotes et les expériences s'appuient sur la vie quotidienne des élèves — la marmite de riz, le fatapera, les salines de Toliara, les pirogues du canal des Pangalanes, le barrage d'Andekaleka ou les orpailleurs de Maevatanana. Chaque séance propose en outre une rubrique « Expérience à la maison » réalisable avec du matériel simple, un encadré « Le savais-tu ? » pour éveiller la curiosité, et un tableau de matériel de substitution qui remplace le matériel de laboratoire par des équivalents locaux faciles à trouver.",
    "Quatre sujets d'examen d'unité et un examen blanc final, tous corrigés et barémés, permettent d'évaluer régulièrement les acquis. Le tableau de bord placé au début du manuel aide l'apprenant à suivre sa progression séance après séance.",
    "Nous souhaitons que ce manuel soit un compagnon fidèle de l'enseignant comme de l'apprenant, et qu'il contribue à faire aimer les sciences physiques à tous les élèves de T7.",
  ].forEach(t => out.push(B.p(t, { size: 22, spacingAfter: 120, align: AlignmentType.JUSTIFIED })));
  out.push(B.p("L'équipe J-Learn", { italics: true, size: 22, align: AlignmentType.RIGHT, spacingBefore: 120 }));
  out.push(B.pageBreak());
  return out;
}

// ---------------- Mode d'emploi ----------------
function buildModeEmploi() {
  const out = [];
  out.push(B.heading("MODE D'EMPLOI DU MANUEL", { anchorId: "modeemploi", size: 30, align: AlignmentType.CENTER, spacingAfter: 200 }));

  const blocs = [
    ["Pour l'enseignant", [
      "La fiche de préparation ouvre chaque séance : elle contient l'objectif, la documentation, les supports, puis le déroulement complet en tableau (étapes, activités de l'enseignant, activités des apprenants, techniques et supports).",
      "Les questions prévues sont accompagnées des réponses attendues (R.A.).",
      "Le tableau « Matériel de substitution » propose, pour chaque matériel du programme, un équivalent local disponible partout.",
      "Le champ Durée est laissé vide : chaque enseignant l'adapte à sa classe et à son emploi du temps.",
    ]],
    ["Pour l'apprenant", [
      "La leçon illustrée reprend l'essentiel à connaître ; les mots-clés y sont mis en évidence en couleur.",
      "L'encadré « Le savais-tu ? » raconte une anecdote scientifique liée à Madagascar ou à l'histoire des sciences.",
      "L'encadré « Expérience à la maison » propose une manipulation simple et sans danger à refaire chez soi.",
      "Les exercices notés sur 20 points permettent de s'entraîner ; le corrigé, imprimé en rose, se consulte après avoir cherché.",
    ]],
    ["Les évaluations", [
      "Chaque unité se termine par une séance de révision (l'essentiel à retenir + exercices) puis un sujet d'examen corrigé et barémé.",
      "L'examen blanc final (séance 34) couvre tout le programme : il prépare aux compositions de fin d'année.",
      "Le tableau de bord, page suivante, permet de cocher chaque séance étudiée et d'y reporter ses notes.",
    ]],
    ["Les annexes", [
      "En fin de manuel : formules et grandeurs, tableau périodique simplifié, conversions d'unités, glossaire, mémo sécurité, fiche d'auto-évaluation, index alphabétique et bibliographie-webographie.",
      "Le sommaire est interactif : dans la version numérique, cliquer sur un titre conduit directement à la page correspondante.",
    ]],
  ];
  for (const [titre, points] of blocs) {
    out.push(B.p(titre, { bold: true, size: 24, color: B.GREEN, spacingBefore: 120, spacingAfter: 60 }));
    points.forEach(t => out.push(B.p("• " + t, { size: 21, spacingAfter: 40 })));
  }
  out.push(B.pageBreak());
  return out;
}

// ---------------- Sommaire interactif ----------------
// plan = [{ unite: "I", titre, anchor, seances: [{numero, titre, anchor}] }], annexes = [{titre, anchor}]
function buildSommaire(plan, annexes) {
  const out = [];
  out.push(B.heading("SOMMAIRE", { anchorId: "sommaire", size: 30, align: AlignmentType.CENTER, spacingAfter: 200 }));
  out.push(B.tocLink("Avant-propos", "avantpropos", { size: 22 }));
  out.push(B.tocLink("Mode d'emploi du manuel", "modeemploi", { size: 22 }));
  out.push(B.tocLink("Tableau de bord de l'apprenant", "tableaubord", { size: 22 }));
  for (const u of plan) {
    out.push(B.p("", { size: 8, spacingAfter: 30 }));
    out.push(B.tocLink(u.titre, u.anchor, { size: 23, bold: true }));
    for (const s of u.seances) {
      out.push(B.tocLink(`Séance ${s.numero} — ${s.titre}`, s.anchor, { size: 21, indentLeft: 360 }));
    }
  }
  out.push(B.p("", { size: 8, spacingAfter: 30 }));
  out.push(B.tocLink("ANNEXES", "annexes", { size: 23, bold: true }));
  for (const a of annexes) {
    out.push(B.tocLink(a.titre, a.anchor, { size: 21, indentLeft: 360 }));
  }
  out.push(B.pageBreak());
  return out;
}

// ---------------- Tableau de bord ----------------
function buildTableauBord(plan) {
  const out = [];
  out.push(B.heading("TABLEAU DE BORD DE L'APPRENANT", { anchorId: "tableaubord", size: 30, align: AlignmentType.CENTER, spacingAfter: 100 }));
  out.push(B.p("Coche la case quand la séance est étudiée, puis note tes résultats. Objectif : toutes les cases cochées avant l'examen blanc !", {
    italics: true, size: 20, align: AlignmentType.CENTER, spacingAfter: 160,
  }));

  const { cell, p } = B;
  const header = new TableRow({ children: [
    cell([p("Séance", { bold: true, size: 19, spacingAfter: 20 })], { shading: "DDEEFF", width: 8 }),
    cell([p("Titre", { bold: true, size: 19, spacingAfter: 20 })], { shading: "DDEEFF", width: 52 }),
    cell([p("Étudiée", { bold: true, size: 19, spacingAfter: 20 })], { shading: "DDEEFF", width: 10 }),
    cell([p("Exercices refaits", { bold: true, size: 19, spacingAfter: 20 })], { shading: "DDEEFF", width: 14 }),
    cell([p("Note / 20", { bold: true, size: 19, spacingAfter: 20 })], { shading: "DDEEFF", width: 16 }),
  ]});
  const rows = [header];
  for (const u of plan) {
    rows.push(new TableRow({ children: [
      cell([p(u.titre, { bold: true, size: 19, color: B.GREEN, spacingAfter: 20 })], { shading: "E8F0E4", width: 100, colSpan: 5 }),
    ]}));
    for (const s of u.seances) {
      rows.push(new TableRow({ children: [
        cell([p(String(s.numero), { size: 19, spacingAfter: 20, align: AlignmentType.CENTER })], { width: 8 }),
        cell([p(s.titre, { size: 19, spacingAfter: 20 })], { width: 52 }),
        cell([p("☐", { size: 24, spacingAfter: 20, align: AlignmentType.CENTER })], { width: 10 }),
        cell([p("☐", { size: 24, spacingAfter: 20, align: AlignmentType.CENTER })], { width: 14 }),
        cell([p("……… / 20", { size: 19, spacingAfter: 20, align: AlignmentType.CENTER })], { width: 16 }),
      ]}));
    }
  }
  out.push(new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows }));
  out.push(B.pageBreak());
  return out;
}

// ---------------- Page de garde d'unité ----------------
function buildPageUnite(u, rootDir) {
  const out = [];
  out.push(B.p("", { size: 20, spacingAfter: 600 }));
  out.push(B.heading(u.surtitre, { anchorId: u.anchor, size: 34, color: B.RED, align: AlignmentType.CENTER, spacingAfter: 80 }));
  out.push(B.p(u.sousTitre, { bold: true, size: 28, align: AlignmentType.CENTER, spacingAfter: 240 }));
  const im = img(rootDir, u.image, 460);
  if (im) out.push(im);
  out.push(B.p("", { size: 12, spacingAfter: 120 }));
  out.push(B.p("Dans cette unité :", { bold: true, size: 22, color: B.GREEN, spacingAfter: 60 }));
  for (const s of u.seances) {
    out.push(B.p(`• Séance ${s.numero} — ${s.titre}`, { size: 21, spacingAfter: 30 }));
  }
  out.push(B.pageBreak());
  return out;
}

module.exports = { buildCouverture, buildAvantPropos, buildModeEmploi, buildSommaire, buildTableauBord, buildPageUnite };
