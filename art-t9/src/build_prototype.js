// Prototype — Collection J-Learn — Arts T9 — Séance 1
// Traitement C (Node.js + docx). Skill jlearn-manuel-scolaire v18.
// Démarche Arts : pratique dominant, corrigé = exemple attendu + critères de réussite.
const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, Table, TableRow, TableCell,
  WidthType, BorderStyle, ShadingType, PageBreak, ImageRun, Bookmark, InternalHyperlink,
  VerticalAlign, HeightRule,
} = require("docx");

const RED = "C00000", GREEN = "1E7B34", BLUE = "1F4E79", BLACK = "000000", ROSE = "C2185B";
const FONT = "Times New Roman";
const ASSETS = path.join(__dirname, "..", "assets");

// ---------- helpers ----------
function run(text, o = {}) {
  return new TextRun({ text, font: FONT, size: o.size ?? 20, bold: o.bold ?? false,
    italics: o.italics ?? false, color: o.color ?? BLACK });
}
function p(text, o = {}) {
  return new Paragraph({
    alignment: o.align, spacing: { after: o.after ?? 80, before: o.before ?? 0, line: o.line ?? 240 },
    children: [run(text, o)],
  });
}
function pRuns(runs, o = {}) {
  return new Paragraph({ alignment: o.align, spacing: { after: o.after ?? 80, line: o.line ?? 240 }, children: runs });
}
// highlight keywords in blue bold within a lesson paragraph
function pLesson(text, keywords, o = {}) {
  const runs = [];
  let remaining = text;
  const sorted = [...keywords].sort((a, b) => b.length - a.length);
  while (remaining.length) {
    let idx = -1, hit = null;
    for (const k of sorted) {
      const i = remaining.toLowerCase().indexOf(k.toLowerCase());
      if (i !== -1 && (idx === -1 || i < idx)) { idx = i; hit = k; }
    }
    if (idx === -1) { runs.push(run(remaining, { size: o.size ?? 21 })); break; }
    if (idx > 0) runs.push(run(remaining.slice(0, idx), { size: o.size ?? 21 }));
    runs.push(run(remaining.slice(idx, idx + hit.length), { size: o.size ?? 21, bold: true, color: BLUE }));
    remaining = remaining.slice(idx + hit.length);
  }
  return new Paragraph({ spacing: { after: o.after ?? 100, line: 260 }, children: runs });
}
function noBorders() {
  const none = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
  return { top: none, bottom: none, left: none, right: none, insideHorizontal: none, insideVertical: none };
}
function thinBorders() {
  const b = { style: BorderStyle.SINGLE, size: 4, color: "999999" };
  return { top: b, bottom: b, left: b, right: b, insideHorizontal: b, insideVertical: b };
}
function cell(children, o = {}) {
  return new TableCell({
    columnSpan: o.colSpan, rowSpan: o.rowSpan, verticalAlign: o.vAlign ?? VerticalAlign.TOP,
    width: o.width ? { size: o.width, type: WidthType.DXA } : undefined,
    shading: o.shading ? { fill: o.shading, type: ShadingType.CLEAR, color: "auto" } : undefined,
    margins: { top: 50, bottom: 50, left: 80, right: 80 },
    children,
  });
}
function img(file, w) {
  const dims = {
    "img_art_t9_s01_objet_1100.png": [1100, 733],
    "img_art_t9_s01_echelle.png": [1100, 360],
    "img_art_t9_s01_volume.png": [1100, 620],
    "img_art_t9_s01_exemple_1100.png": [1100, 733],
    "pasapas_s01_et1_ok_1100.jpg": [1100, 1100],
    "pasapas_s01_et2_ok_1100.jpg": [1100, 1100],
    "pasapas_s01_et3_ok_1100.jpg": [1100, 1100],
    "pasapas_s01_et3_pasok_1100.jpg": [1100, 1100],
    "pasapas_s01_et4_ok_1100.jpg": [1100, 733],
    "pasapas_s01_et4_pasok_1100.jpg": [1100, 1100],
  }[file];
  const h = Math.round(w * dims[1] / dims[0]);
  const type = file.toLowerCase().endsWith(".jpg") ? "jpg" : "png";
  return new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 60, before: 60 },
    children: [new ImageRun({ type, data: fs.readFileSync(path.join(ASSETS, file)),
      transformation: { width: w, height: h } })] });
}
function caption(text) { return p(text, { align: AlignmentType.CENTER, italics: true, size: 17, color: "555555", after: 140 }); }
function okOnly(file, cap) {
  return [
    p("✓ OK — résultat attendu", { bold: true, color: GREEN, size: 19, align: AlignmentType.CENTER, after: 60 }),
    img(file, 300),
    caption(cap),
  ];
}
function okVsPasOk(okFile, okCap, badFile, badCap) {
  return new Table({
    borders: thinBorders(), width: { size: 10200, type: WidthType.DXA },
    columnWidths: [5100, 5100], layout: "fixed",
    rows: [new TableRow({ children: [
      cell([
        p("✓ OK — résultat attendu", { bold: true, color: GREEN, size: 19, align: AlignmentType.CENTER, after: 60 }),
        img(okFile, 250), caption(okCap),
      ], { width: 5100, shading: "F0FFF0" }),
      cell([
        p("✗ PAS OK — ATTENTION !", { bold: true, color: RED, size: 19, align: AlignmentType.CENTER, after: 60 }),
        img(badFile, 250), caption(badCap),
      ], { width: 5100, shading: "FFF0F0" }),
    ] })],
  });
}
function bookmark(id, text, o = {}) {
  return new Paragraph({ spacing: { after: o.after ?? 120, before: o.before ?? 0 }, alignment: o.align,
    children: [new Bookmark({ id, children: [run(text, { size: o.size ?? 26, bold: true, color: o.color ?? BLACK })] })] });
}
function link(anchor, text) {
  return new Paragraph({ spacing: { after: 80 },
    children: [new InternalHyperlink({ anchor, children: [new TextRun({ text, font: FONT, size: 21, color: BLUE, underline: {} })] })] });
}

// ---------- méta-table ----------
function metaTable() {
  const L = (label, val) => pRuns([run(label + " ", { bold: true, size: 19 }), run(val, { size: 19 })], { after: 50 });
  const left = [
    L("Discipline :", "Arts"),
    L("Sous discipline :", "Arts visuels"),
    L("Thème :", "Dessin à partir d’un objet"),
    L("Titre :", "Les nuances (noir, blanc, gris)"),
    L("Objectif spécifique :", "Réaliser un dessin d’objet en utilisant les nuances de noir, blanc et gris pour donner du volume."),
    L("Documentation :", "PE T9 — Arts visuels (Dessin) ; FRP Arts T9 — Composante I (valeurs / nuances)."),
    L("Support et matériel :", "Gobelet en terre cuite, papier, crayon, gomme, image d’observation."),
  ];
  const right = [
    L("Date :", "_______"),
    L("Classe :", "T9"),
    L("Séance n° :", "1"),
    L("Durée :", "120 min"),
  ];
  return new Table({ borders: noBorders(), width: { size: 10200, type: WidthType.DXA },
    columnWidths: [7000, 3200],
    rows: [new TableRow({ children: [
      cell(left, { width: 7000 }), cell(right, { width: 3200, vAlign: VerticalAlign.TOP }),
    ] })] });
}

// ---------- déroulement table ----------
const W = [1200, 3200, 3200, 900, 950, 750];
function headCell(text, o = {}) {
  return cell([p(text, { bold: true, size: 18, align: AlignmentType.CENTER, after: 0 })],
    { shading: "DDEEFF", width: o.width, colSpan: o.colSpan, rowSpan: o.rowSpan, vAlign: VerticalAlign.CENTER });
}
function deroulementHeader() {
  const r1 = new TableRow({ tableHeader: true, children: [
    headCell("Étapes et Durée", { width: W[0], rowSpan: 2 }),
    headCell("Déroulement de la leçon", { colSpan: 2 }),
    headCell("Technique et Stratégie", { width: W[3], rowSpan: 2 }),
    headCell("Support et Matériel", { width: W[4], rowSpan: 2 }),
    headCell("Observation", { width: W[5], rowSpan: 2 }),
  ] });
  const r2 = new TableRow({ tableHeader: true, children: [
    cell([p("Enseignant", { bold: true, size: 18, align: AlignmentType.CENTER, after: 0 })], { shading: "F5F5F5", width: W[1], vAlign: VerticalAlign.CENTER }),
    cell([p("Apprenants", { bold: true, size: 18, align: AlignmentType.CENTER, after: 0 })], { shading: "F5F5F5", width: W[2], vAlign: VerticalAlign.CENTER }),
  ] });
  return [r1, r2];
}
function tc(paras, w, o = {}) {
  return cell(paras, { width: w, shading: o.shading, vAlign: VerticalAlign.TOP });
}
function stepRow(label, ens, app, tech, supp) {
  const cp = (arr) => arr.map(t => typeof t === "string" ? p(t, { size: 17, after: 50 }) : t);
  const labelParas = label.split("\n").map((ln, i) => p(ln, { bold: true, size: 17, after: i === label.split("\n").length - 1 ? 0 : 20 }));
  return new TableRow({ children: [
    tc(labelParas, W[0], { shading: "F2F2F2" }),
    tc(cp(ens), W[1]), tc(cp(app), W[2]),
    tc(cp(tech), W[3]), tc(cp(supp), W[4]), tc([p("", { size: 17 })], W[5]),
  ] });
}
function sectionRow(text) {
  return new TableRow({ children: [
    cell([p(text, { bold: true, size: 18, color: RED, align: AlignmentType.CENTER, after: 0 })],
      { colSpan: 6, shading: "FDE9E9" }),
  ] });
}

// contenu de la fiche
function ficheTable() {
  const rows = [...deroulementHeader()];
  // I. Révision
  rows.push(stepRow("I. Révision\n(15 min)",
    [
      "Qu’est-ce qu’un dessin d’observation ?",
      "Cite deux outils utilisés pour dessiner.",
      "Quelles sont les deux grandes familles de formes ?",
    ],
    [
      pRuns([run("R.A. : ", { bold: true, size: 17, color: ROSE }), run("Un dessin réalisé en regardant un objet ou un sujet réel.", { size: 17 })], { after: 50 }),
      pRuns([run("R.A. : ", { bold: true, size: 17, color: ROSE }), run("Le crayon et le papier (on peut aussi citer la gomme, la règle).", { size: 17 })], { after: 50 }),
      pRuns([run("R.A. : ", { bold: true, size: 17, color: ROSE }), run("Les formes arrondies (organiques) et les formes anguleuses (géométriques).", { size: 17 })], { after: 50 }),
    ],
    ["Questions orales"], ["—"]));
  // II. Nouvelle leçon
  rows.push(sectionRow("II. NOUVELLE LEÇON (90 min)"));
  rows.push(stepRow("1. Mise en situation",
    ["Rova observe un gobelet en terre cuite posé sur la table. Il veut le dessiner, mais son dessin paraît tout plat, comme un cercle écrasé. Sa voisine Nivo lui dit : « Regarde, le côté près de la fenêtre est clair, et l’autre côté est sombre. » Comment Rova peut-il faire pour que son gobelet ait l’air « rond » sur le papier ?"],
    [pRuns([run("R.A. : ", { bold: true, size: 17, color: ROSE }), run("En utilisant des nuances de gris : le côté clair près de la lumière, le côté foncé dans l’ombre.", { size: 17 })], { after: 50 }),
     p("Les élèves écoutent et répondent à l’oral.", { size: 17, italics: true })],
    ["Histoire contextualisée"], ["Gobelet en terre cuite"]));
  rows.push(stepRow("2. Présentation",
    ["Aujourd’hui nous allons apprendre : « Dessin à partir d’un objet — les nuances ». Après cette séance, vous serez capables de dessiner un objet en utilisant le noir, le blanc et les gris pour lui donner du volume."],
    ["Les élèves écoutent."], ["Annonce orale"], ["Tableau noir, cahier"]));
  rows.push(stepRow("3. Observation",
    ["Regardez et observez bien le gobelet en terre cuite posé sur la table, éclairé par la fenêtre. Puis observez l’image du gobelet et l’échelle de nuances."],
    ["Les élèves observent silencieusement."], ["Observation silencieuse"], ["Gobelet réel, image, échelle de nuances"]));
  rows.push(stepRow("4. Analyse",
    [
      "Quelle est la forme générale du gobelet ?",
      "Le côté du gobelet tourné vers la fenêtre est-il clair ou foncé ?",
      "Et le côté opposé à la fenêtre ?",
      "Comment appelle-t-on les différents degrés de gris entre le noir et le blanc ?",
      "À quoi servent les nuances dans un dessin ?",
      "Que remarque-t-on sous le gobelet, sur la table ?",
    ],
    [
      pRuns([run("R.A. : ", { bold: true, size: 17, color: ROSE }), run("Une forme arrondie, proche d’un cylindre.", { size: 17 })], { after: 40 }),
      pRuns([run("R.A. : ", { bold: true, size: 17, color: ROSE }), run("Il est clair, car il reçoit la lumière.", { size: 17 })], { after: 40 }),
      pRuns([run("R.A. : ", { bold: true, size: 17, color: ROSE }), run("Il est foncé, car il est dans l’ombre.", { size: 17 })], { after: 40 }),
      pRuns([run("R.A. : ", { bold: true, size: 17, color: ROSE }), run("Les nuances (ou valeurs) : gris clair, gris moyen, gris foncé.", { size: 17 })], { after: 40 }),
      pRuns([run("R.A. : ", { bold: true, size: 17, color: ROSE }), run("À donner du volume : l’objet paraît rond et posé sur la table, au lieu d’être plat.", { size: 17 })], { after: 40 }),
      pRuns([run("R.A. : ", { bold: true, size: 17, color: ROSE }), run("Une ombre portée, qui montre que l’objet est posé sur la table.", { size: 17 })], { after: 40 }),
    ],
    ["Questions / réponses", "Démarche d’appréciation"], ["Gobelet réel, image, échelle de nuances"]));
  rows.push(stepRow("5. Synthèse",
    ["Donc, pour dessiner un objet en volume, on observe d’abord sa forme (arrondie ou anguleuse), puis on place les nuances : le côté éclairé est clair, le côté opposé est foncé, et on ajoute une ombre portée. Ce sont les nuances — les différents gris entre le noir et le blanc — qui donnent du volume au dessin."],
    ["Les élèves écoutent."], ["Synthèse énoncée par l’enseignant"], ["Tableau noir"]));
  rows.push(stepRow("6. Application",
    [
      p("Exercice 1 — Dessine le gobelet en terre cuite posé devant toi. Trace d’abord sa forme générale, puis applique au moins trois nuances (clair, moyen, foncé) et ajoute l’ombre portée.", { size: 17, after: 60 }),
      p("Exercice 2 — Complète avec les mots proposés : volume, ombre, nuances, claire.", { size: 17, after: 30 }),
      p("a) Les différents degrés de gris s’appellent les … .", { size: 17, after: 30 }),
      p("b) La partie de l’objet qui reçoit la lumière est … .", { size: 17, after: 30 }),
      p("c) La zone sombre projetée sur la table est l’… portée.", { size: 17, after: 30 }),
      p("d) Les nuances servent à donner du … à l’objet.", { size: 17, after: 30 }),
    ],
    [
      p("Exercice 1 — Production attendue : un dessin du gobelet avec un côté clair, un dégradé de gris et une ombre portée.", { size: 17, after: 40 }),
      pRuns([run("Critères de réussite : ", { bold: true, size: 17, color: ROSE }), run("forme du gobelet reconnaissable ; au moins trois nuances visibles ; côté clair du côté de la lumière ; ombre portée présente.", { size: 17 })], { after: 60 }),
      pRuns([run("Exercice 2 — ", { bold: true, size: 17 }), run("a) ", { size: 17 }), run("nuances", { size: 17, bold: true, color: ROSE }), run(" ; b) ", { size: 17 }), run("claire", { size: 17, bold: true, color: ROSE }), run(" ; c) ", { size: 17 }), run("ombre", { size: 17, bold: true, color: ROSE }), run(" ; d) ", { size: 17 }), run("volume", { size: 17, bold: true, color: ROSE }), run(".", { size: 17 })], { after: 40 }),
    ],
    ["Travail individuel", "Démarche de création"], ["Papier, crayon, gomme, gobelet"]));
  // III. Évaluation
  rows.push(stepRow("III. Évaluation\n(15 min)",
    [
      p("Exercice 1 — Dessine une boîte d’allumettes (forme anguleuse) posée sur la table, en appliquant les nuances et l’ombre portée.", { size: 17, after: 60 }),
      p("Exercice 2 — Indique si chaque affirmation est vraie ou fausse :", { size: 17, after: 30 }),
      p("a) Les nuances sont les différents degrés de gris entre le noir et le blanc.", { size: 17, after: 30 }),
      p("b) Le côté d’un objet tourné vers la lumière est le plus foncé.", { size: 17, after: 30 }),
      p("c) L’ombre portée aide à montrer que l’objet est posé sur une surface.", { size: 17, after: 30 }),
      p("d) Pour donner du volume, on utilise une seule couleur uniforme.", { size: 17, after: 30 }),
    ],
    [
      p("Exercice 1 — Production attendue : une boîte d’allumettes avec un côté clair, un côté foncé et une ombre portée.", { size: 17, after: 40 }),
      pRuns([run("Critères de réussite : ", { bold: true, size: 17, color: ROSE }), run("forme anguleuse reconnaissable ; au moins trois nuances ; côté clair cohérent avec la lumière ; ombre portée présente.", { size: 17 })], { after: 60 }),
      pRuns([run("Exercice 2 — ", { bold: true, size: 17 }), run("a) ", { size: 17 }), run("Vrai", { size: 17, bold: true, color: ROSE }), run(" ; b) ", { size: 17 }), run("Faux", { size: 17, bold: true, color: ROSE }), run(" (il est le plus clair) ; c) ", { size: 17 }), run("Vrai", { size: 17, bold: true, color: ROSE }), run(" ; d) ", { size: 17 }), run("Faux", { size: 17, bold: true, color: ROSE }), run(" (il faut plusieurs nuances).", { size: 17 })], { after: 40 }),
    ],
    ["Travail individuel"], ["Papier, crayon, gomme, boîte d’allumettes"]));
  return new Table({ borders: thinBorders(), width: { size: 10200, type: WidthType.DXA },
    columnWidths: W, layout: "fixed", rows });
}

// ---------- leçon ----------
function lecon() {
  const KW = ["nuances", "valeurs", "volume", "ombre portée", "formes arrondies", "formes anguleuses", "cylindre"];
  return [
    bookmark("lecon", "LEÇON — Dessin à partir d’un objet : les nuances", { color: RED, size: 28 }),
    img("img_art_t9_s01_objet_1100.png", 560),
    caption("Un gobelet en terre cuite éclairé par la fenêtre : le côté gauche est clair, le côté droit est foncé."),
    p("1. Observer la forme de l’objet", { bold: true, color: GREEN, size: 23, before: 120, after: 80 }),
    pLesson("Avant de dessiner, on regarde la forme générale de l’objet. On distingue deux grandes familles : les formes arrondies (organiques), comme un gobelet, une calebasse ou un fruit, et les formes anguleuses (géométriques), comme une boîte ou une règle. Le gobelet se rapproche d’un cylindre.", KW),
    p("2. La lumière et l’ombre", { bold: true, color: GREEN, size: 23, before: 120, after: 80 }),
    pLesson("Quand la lumière éclaire un objet, le côté tourné vers la lumière est clair, et le côté opposé est foncé : c’est l’ombre. Sous l’objet, on voit aussi une zone sombre projetée sur la table : c’est l’ombre portée. Elle montre que l’objet est posé sur une surface.", KW),
    img("img_art_t9_s01_volume.png", 540),
    caption("Lumière, ombre et ombre portée : le dégradé de gris donne l’impression que l’objet est posé sur la table."),
    p("3. Les nuances (valeurs)", { bold: true, color: GREEN, size: 23, before: 120, after: 80 }),
    pLesson("Les nuances, aussi appelées valeurs, sont les différents degrés de gris entre le noir et le blanc : noir, gris foncé, gris moyen, gris clair, gris très clair, blanc. Plus on place de nuances différentes, plus l’objet paraît rond : c’est le volume. Un objet dessiné avec une seule couleur uniforme paraît plat.", KW),
    img("img_art_t9_s01_echelle.png", 560),
    caption("L’échelle de nuances, du noir (ombre) au blanc (lumière)."),
    new Paragraph({ children: [new PageBreak()] }),
    p("4. Les étapes du dessin d’objet — pas-à-pas illustré", { bold: true, color: GREEN, size: 23, before: 120, after: 80 }),
    pLesson("Observe chaque étape. Quand une erreur est fréquente, compare le résultat attendu (✓ OK) avec le résultat à éviter (✗ PAS OK — ATTENTION !).", KW),
    p("Étape 1 — Tracer la forme générale", { bold: true, size: 21, before: 100, after: 60 }),
    ...okOnly("pasapas_s01_et1_ok_1100.jpg", "Traits de construction légers, proportions du gobelet, sans appuyer sur le crayon."),
    p("Étape 2 — Placer la lumière", { bold: true, size: 21, before: 100, after: 60 }),
    ...okOnly("pasapas_s01_et2_ok_1100.jpg", "Le côté gauche reste clair (lumière) ; le côté droit commence à être légèrement grisé (ombre)."),
    p("Étape 3 — Dégrader les gris", { bold: true, size: 21, before: 100, after: 60 }),
    okVsPasOk(
      "pasapas_s01_et3_ok_1100.jpg", "Dégradé progressif : clair → gris moyen → foncé. L’objet paraît rond.",
      "pasapas_s01_et3_pasok_1100.jpg", "Erreur fréquente : gris uniforme en aplat, sans dégradé. L’objet paraît plat."),
    p("Étape 4 — Ajouter l’ombre portée", { bold: true, size: 21, before: 100, after: 60 }),
    okVsPasOk(
      "pasapas_s01_et4_ok_1100.jpg", "Ombre portée douce du côté opposé à la lumière (à droite si la lumière vient de gauche).",
      "pasapas_s01_et4_pasok_1100.jpg", "Erreur fréquente : ombre portée du même côté que la lumière. La lumière et l’ombre deviennent incohérentes."),
    p("Étape 5 — Améliorer le dessin", { bold: true, size: 21, before: 100, after: 60 }),
    pLesson("Compare ton dessin aux critères de réussite, écoute les remarques des camarades ou de l’enseignant, puis corrige les nuances, la lumière ou l’ombre portée.", KW),
  ];
}

// ---------- exercices + corrigé ----------
function grilleCritere() {
  const head = new TableRow({ tableHeader: true, children: [
    cell([p("Critère de réussite", { bold: true, size: 18, after: 0 })], { shading: "DDEEFF", width: 5200 }),
    cell([p("Acquis", { bold: true, size: 18, align: AlignmentType.CENTER, after: 0 })], { shading: "DDEEFF", width: 1600 }),
    cell([p("En cours", { bold: true, size: 18, align: AlignmentType.CENTER, after: 0 })], { shading: "DDEEFF", width: 1700 }),
    cell([p("À revoir", { bold: true, size: 18, align: AlignmentType.CENTER, after: 0 })], { shading: "DDEEFF", width: 1700 }),
  ] });
  const crit = [
    "La forme générale de l’objet est reconnaissable.",
    "Au moins trois nuances différentes sont visibles (clair, moyen, foncé).",
    "Le côté clair est bien du côté de la lumière.",
    "Une ombre portée est dessinée sous / à côté de l’objet.",
  ];
  const rows = crit.map(c => new TableRow({ children: [
    cell([p(c, { size: 18, after: 0 })], { width: 5200 }),
    cell([p("☐", { size: 18, align: AlignmentType.CENTER, after: 0 })], { width: 1600 }),
    cell([p("☐", { size: 18, align: AlignmentType.CENTER, after: 0 })], { width: 1700 }),
    cell([p("☐", { size: 18, align: AlignmentType.CENTER, after: 0 })], { width: 1700 }),
  ] }));
  return new Table({ borders: thinBorders(), width: { size: 10200, type: WidthType.DXA }, columnWidths: [5200, 1600, 1700, 1700], layout: "fixed", rows: [head, ...rows] });
}
function exercices() {
  return [
    new Paragraph({ children: [new PageBreak()] }),
    bookmark("exercices", "EXERCICES", { color: RED, size: 28 }),
    p("Les productions artistiques (exercices 1 et 3) sont appréciées à l’aide de la grille de critères. Les exercices écrits (2 et 4) sont notés sur 8 points.", { italics: true, size: 19, after: 140 }),
    p("Exercice 1 — Dessine le gobelet en terre cuite posé devant toi. Trace d’abord sa forme générale, puis applique au moins trois nuances (clair, moyen, foncé) et ajoute l’ombre portée.", { size: 20, after: 60 }),
    p("→ Apprécier avec la grille de critères (voir ci-dessous).", { italics: true, size: 18, color: "555555", after: 140 }),
    p("Exercice 2 — Complète avec les mots proposés : volume, ombre, nuances, claire. (4 points)", { bold: true, size: 20, after: 60 }),
    p("a) Les différents degrés de gris s’appellent les … .", { size: 20, after: 40 }),
    p("b) La partie de l’objet qui reçoit la lumière est … .", { size: 20, after: 40 }),
    p("c) La zone sombre projetée sur la table est l’… portée.", { size: 20, after: 40 }),
    p("d) Les nuances servent à donner du … à l’objet.", { size: 20, after: 140 }),
    p("Exercice 3 — Dessine une boîte d’allumettes (forme anguleuse) posée sur la table, en appliquant les nuances et l’ombre portée.", { size: 20, after: 60 }),
    p("→ Apprécier avec la grille de critères (voir ci-dessous).", { italics: true, size: 18, color: "555555", after: 140 }),
    p("Exercice 4 — Indique si chaque affirmation est vraie ou fausse. (4 points)", { bold: true, size: 20, after: 60 }),
    p("a) Les nuances sont les différents degrés de gris entre le noir et le blanc.", { size: 20, after: 40 }),
    p("b) Le côté d’un objet tourné vers la lumière est le plus foncé.", { size: 20, after: 40 }),
    p("c) L’ombre portée aide à montrer que l’objet est posé sur une surface.", { size: 20, after: 40 }),
    p("d) Pour donner du volume, on utilise une seule couleur uniforme.", { size: 20, after: 160 }),
    bookmark("corrige", "CORRIGÉ ET EXEMPLE DE PRODUCTION ATTENDUE", { color: RED, size: 26 }),
    p("Exemple de production attendue (exercice 1)", { bold: true, color: GREEN, size: 22, after: 80 }),
    img("img_art_t9_s01_exemple_1100.png", 520),
    caption("Exemple : le gobelet présente un côté clair, un dégradé de gris et une ombre portée. Chaque élève peut produire un dessin différent, tant que les critères sont respectés."),
    p("Grille de critères de réussite (exercices 1 et 3)", { bold: true, color: GREEN, size: 22, before: 120, after: 80 }),
    grilleCritere(),
    p("Corrigé des exercices écrits", { bold: true, color: GREEN, size: 22, before: 160, after: 80 }),
    pRuns([run("Exercice 2 — ", { bold: true, size: 20 }), run("a) ", { size: 20 }), run("nuances", { size: 20, bold: true, color: ROSE }), run(" ; b) ", { size: 20 }), run("claire", { size: 20, bold: true, color: ROSE }), run(" ; c) ", { size: 20 }), run("ombre", { size: 20, bold: true, color: ROSE }), run(" ; d) ", { size: 20 }), run("volume", { size: 20, bold: true, color: ROSE }), run(". (1 point par bonne réponse.)", { size: 20 })], { after: 100 }),
    pRuns([run("Exercice 4 — ", { bold: true, size: 20 }), run("a) ", { size: 20 }), run("Vrai", { size: 20, bold: true, color: ROSE }), run(" : les nuances sont bien les degrés de gris entre noir et blanc. b) ", { size: 20 }), run("Faux", { size: 20, bold: true, color: ROSE }), run(" : le côté tourné vers la lumière est le plus clair. c) ", { size: 20 }), run("Vrai", { size: 20, bold: true, color: ROSE }), run(" : l’ombre portée montre que l’objet est posé. d) ", { size: 20 }), run("Faux", { size: 20, bold: true, color: ROSE }), run(" : une seule couleur uniforme donne un objet plat ; il faut plusieurs nuances. (1 point par bonne réponse.)", { size: 20 })], { after: 100 }),
  ];
}

// ---------- note de prototype + sommaire ----------
function notePrototype() {
  return [
    bookmark("note", "NOTE DE PROTOTYPE — DÉMARCHE ARTS", { color: RED, size: 26 }),
    p("Ce document est un prototype d’une séance du manuel Arts T9 (Collection J-Learn). Il sert à valider la démarche avant la production complète. La présente note ne figurera pas dans le manuel final.", { italics: true, size: 19, after: 140 }),
    p("Ce qui change par rapport aux autres disciplines", { bold: true, color: GREEN, size: 22, after: 80 }),
    p("• La structure du skill est conservée : I. Révision / II. Nouvelle leçon (6 sous-étapes) / III. Évaluation. Seule la nature du contenu change.", { size: 19, after: 60 }),
    p("• La production artistique est le cœur des étapes Application et Évaluation (pratique dominant). Un court exercice écrit vient en complément (vocabulaire, appréciation).", { size: 19, after: 60 }),
    p("• Le « corrigé » d’une production n’est pas une réponse unique : on fournit un exemple de production attendue + une grille de critères de réussite. Les exercices écrits, eux, ont un corrigé classique.", { size: 19, after: 60 }),
    p("• Le matériel est simple, local et recyclable, conformément au PE. Les démarches du PE (appréciation, création, interprétation) apparaissent dans la colonne « Technique et Stratégie ».", { size: 19, after: 60 }),
    p("• Les illustrations mélangent scène (photo de l’objet), graphique (échelle de nuances, schéma lumière/ombre) et exemple de production dessinée.", { size: 19, after: 60 }),
    p("• Pour les arts visuels, la leçon ajoute un pas-à-pas illustré : une image ✓ OK à chaque étape, et un contre-exemple ✗ PAS OK avec « ATTENTION ! » seulement quand l’erreur est fréquente.", { size: 19, after: 140 }),
    p("À valider avec l’utilisateur", { bold: true, color: GREEN, size: 22, after: 80 }),
    p("1. La place respective production / écrit dans Application et Évaluation.", { size: 19, after: 50 }),
    p("2. La présentation du corrigé (exemple + grille de critères).", { size: 19, after: 50 }),
    p("3. Le niveau de détail de la fiche et de la leçon.", { size: 19, after: 50 }),
    p("4. Le style des illustrations.", { size: 19, after: 50 }),
    p("5. Le pas-à-pas illustré (✓ OK / ✗ PAS OK — ATTENTION !) dans la leçon.", { size: 19, after: 50 }),
  ];
}
function sommaire() {
  return [
    bookmark("sommaire", "SOMMAIRE", { color: RED, size: 26 }),
    link("note", "Note de prototype — démarche Arts"),
    link("fiche", "Séance 1 — Fiche de préparation"),
    link("lecon", "Séance 1 — Leçon"),
    link("exercices", "Séance 1 — Exercices"),
    link("corrige", "Séance 1 — Corrigé et exemple de production attendue"),
  ];
}

// ---------- assemblage ----------
const children = [
  // couverture
  p("COLLECTION J-LEARN", { align: AlignmentType.CENTER, bold: true, size: 30, color: BLUE, before: 2400, after: 200 }),
  p("Manuel d’Arts — Classe de T9", { align: AlignmentType.CENTER, bold: true, size: 40, color: RED, after: 200 }),
  p("Programme officiel malgache — Arts visuels · Musique · Danse · Art dramatique", { align: AlignmentType.CENTER, size: 22, after: 400 }),
  p("PROTOTYPE — Séance 1", { align: AlignmentType.CENTER, bold: true, size: 28, color: GREEN, after: 120 }),
  p("Dessin à partir d’un objet — Les nuances (noir, blanc, gris)", { align: AlignmentType.CENTER, italics: true, size: 24, after: 200 }),
  p("Document de validation — ne pas diffuser", { align: AlignmentType.CENTER, size: 18, color: "888888" }),
  new Paragraph({ children: [new PageBreak()] }),
  ...sommaire(),
  new Paragraph({ children: [new PageBreak()] }),
  ...notePrototype(),
  new Paragraph({ children: [new PageBreak()] }),
  bookmark("fiche", "SÉANCE 1", { color: RED, size: 28 }),
  p("FICHE DE PRÉPARATION", { align: AlignmentType.CENTER, bold: true, size: 24, after: 140 }),
  metaTable(),
  p("", { after: 80 }),
  ficheTable(),
  new Paragraph({ children: [new PageBreak()] }),
  ...lecon(),
  ...exercices(),
];

const doc = new Document({
  creator: "J-Learn", title: "Arts T9 — Prototype Séance 1",
  styles: { default: { document: { run: { font: FONT, size: 20 } } } },
  sections: [{
    properties: { page: { margin: { top: 850, bottom: 850, left: 850, right: 850 },
      size: { width: 11906, height: 16838 } } },
    children,
  }],
});

Packer.toBuffer(doc).then(buf => {
  const out = path.join(__dirname, "..", "output", "Art_T9_J-Learn_PROTOTYPE.docx");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, buf);
  console.log("écrit:", out, buf.length, "octets");
});
