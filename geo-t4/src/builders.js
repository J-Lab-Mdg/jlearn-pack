// builders.js — Constructeurs docx conformes au skill jlearn-manuel-scolaire (design-fiche.md)
const {
  Paragraph, TextRun, Table, TableRow, TableCell, WidthType, BorderStyle,
  ShadingType, AlignmentType, VerticalAlign, PageBreak, ImageRun, Bookmark,
  InternalHyperlink, HeadingLevel,
} = require("docx");
const fs = require("fs");

// ── Couleurs officielles ────────────────────────────────────────────────
const RED = "C00000";      // titre de leçon
const GREEN = "1E7B34";    // sous-titres de leçon
const BLUE = "1F4E79";     // mots clés de la leçon
const BLACK = "000000";
const CORRIGE = "C2185B";  // mots-clés du corrigé (rose/bordeaux)
const HEADER_BG = "DDEEFF";
const HEADER_BG2 = "F5F5F5";
const FONT = "Times New Roman";

// ── Runs : parse les marqueurs **mot** (mot en gras + couleur) ──────────
// mkRuns("Le **Nord** est en haut", {color: CORRIGE}) → "Nord" gras + couleur
function mkRuns(text, opts = {}) {
  const { size = 20, bold = false, italics = false, color = BLACK, kwColor = null } = opts;
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g).filter((s) => s !== "");
  return parts.map((part) => {
    const isKw = part.startsWith("**") && part.endsWith("**");
    const t = isKw ? part.slice(2, -2) : part;
    return new TextRun({
      text: t, size, italics,
      bold: isKw ? true : bold,
      color: isKw && kwColor ? kwColor : color,
      font: FONT,
    });
  });
}

// ── Paragraphe simple (alignement, espacement, puces) ───────────────────
function p(text, opts = {}) {
  const { size = 20, bold = false, italics = false, color = BLACK, kwColor = null,
    align = AlignmentType.LEFT, after = 80, before = 0, indent = 0, bullet = false } = opts;
  return new Paragraph({
    alignment: align,
    spacing: { after, before },
    indent: bullet ? { left: 360, hangingIndent: 0 } : (indent ? { left: indent } : undefined),
    bullet: bullet ? { level: 0 } : undefined,
    children: mkRuns(text, { size, bold, italics, color, kwColor }),
  });
}

// Paragraphe vide (espacement)
function pEmpty(size = 14) {
  return new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "", size, font: FONT })] });
}

// ── Paragraphe avec mot clé coloré partout où il apparaît (leçon) ───────
function pHighlight(text, keyword, keyColor = BLUE, opts = {}) {
  const { size = 21, after = 100 } = opts;
  if (!keyword) return p(text, { size, after });
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");
  const parts = String(text).split(regex);
  const runs = parts.map((part) =>
    part && part.toLowerCase() === keyword.toLowerCase()
      ? new TextRun({ text: part, bold: true, color: keyColor, size, font: FONT })
      : new TextRun({ text: part, size, font: FONT })
  ).filter((r) => r);
  return new Paragraph({ spacing: { after }, children: runs });
}

// ── Bordures invisibles (méta-table) ────────────────────────────────────
function noBorders() {
  const none = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
  return { top: none, bottom: none, left: none, right: none, insideHorizontal: none, insideVertical: none };
}

// ── Cellule de tableau ──────────────────────────────────────────────────
function cell(children, opts = {}) {
  return new TableCell({
    columnSpan: opts.colSpan || 1,
    rowSpan: opts.rowSpan || undefined,
    width: opts.width ? { size: opts.width, type: WidthType.PERCENTAGE } : undefined,
    shading: opts.shading ? { fill: opts.shading, type: ShadingType.CLEAR, color: "auto" } : undefined,
    margins: { top: 50, bottom: 50, left: 90, right: 90 },
    verticalAlign: VerticalAlign.TOP,
    children: children && children.length ? children : [pEmpty()],
  });
}

// ── Méta-table (bordures invisibles, infos à gauche / date-classe-séance-durée à droite) ──
// meta = { discipline, theme, titre, objectif, documentation, classe, seanceNum, total, duree }
function metaTable(meta) {
  const L = (label, value) => [
    cell([p(label, { bold: true, size: 20, after: 20 })], { width: 18 }),
    cell([p(value, { size: 20, after: 20 })], { width: 34 }),
  ];
  const R = (label, value) => [
    cell([p(label, { bold: true, size: 20, after: 20 })], { width: 16 }),
    cell([p(value, { size: 20, after: 20 })], { width: 32 }),
  ];
  const rows = [];
  const lignesGauche = [
    ["Discipline :", meta.discipline],
    ["Thème :", meta.theme],
    ["Titre de la séance :", meta.titre],
    ["Objectif spécifique :", meta.objectif],
    ["Documentation :", meta.documentation],
  ];
  const lignesDroite = [
    ["Date : ", "_______"],
    ["Classe :", meta.classe],
    ["Séance n° :", `${meta.seanceNum} / ${meta.total}`],
    ["Durée :", meta.duree],
  ];
  const n = Math.max(lignesGauche.length, lignesDroite.length);
  for (let i = 0; i < n; i++) {
    const g = lignesGauche[i] || ["", ""];
    const d = lignesDroite[i] || ["", ""];
    rows.push(new TableRow({
      children: [
        ...L(g[0], g[1]),
        ...R(d[0], d[1]),
      ],
    }));
  }
  return new Table({ borders: noBorders(), width: { size: 100, type: WidthType.PERCENTAGE }, rows });
}

// ── Table de déroulement : en-tête 2 lignes (6 colonnes) ───────────────
function deroulementHeader() {
  const row1 = new TableRow({
    tableHeader: true,
    children: [
      cell([p("Étapes et Durée", { bold: true, size: 18, align: AlignmentType.CENTER })], { shading: HEADER_BG, width: 13 }),
      cell([p("Déroulement de la leçon", { bold: true, size: 18, align: AlignmentType.CENTER })], { shading: HEADER_BG, colSpan: 2, width: 50 }),
      cell([p("Technique et Stratégie", { bold: true, size: 18, align: AlignmentType.CENTER })], { shading: HEADER_BG, width: 12 }),
      cell([p("Support et Matériel", { bold: true, size: 18, align: AlignmentType.CENTER })], { shading: HEADER_BG, width: 14 }),
      cell([p("Observation", { bold: true, size: 18, align: AlignmentType.CENTER })], { shading: HEADER_BG, width: 11 }),
    ],
  });
  const row2 = new TableRow({
    tableHeader: true,
    children: [
      cell([p("")], { shading: HEADER_BG2, width: 13 }),
      cell([p("Enseignant", { bold: true, size: 18, align: AlignmentType.CENTER })], { shading: HEADER_BG2, width: 25 }),
      cell([p("Apprenants", { bold: true, size: 18, align: AlignmentType.CENTER })], { shading: HEADER_BG2, width: 25 }),
      cell([p("")], { shading: HEADER_BG2, width: 12 }),
      cell([p("")], { shading: HEADER_BG2, width: 14 }),
      cell([p("")], { shading: HEADER_BG2, width: 11 }),
    ],
  });
  return [row1, row2];
}

// Ligne d'étape normale (I. Révision, III. Évaluation, sous-étapes 1-6)
// steps : { etape, duree, enseignant: [Paragraph|string], apprenants: [...], technique, support }
function stepRow(st) {
  const toParas = (arr, size = 17) =>
    (arr || []).map((x) => (typeof x === "string" ? p(x, { size, after: 40 }) : x));
  return new TableRow({
    children: [
      cell([p(st.etape, { bold: true, size: 18, after: 30 }), ...(st.duree ? [p(st.duree, { italics: true, size: 17 })] : [])], { width: 13 }),
      cell(toParas(st.enseignant), { width: 25 }),
      cell(toParas(st.apprenants), { width: 25 }),
      cell(toParas(st.technique ? [st.technique] : [], 17), { width: 12 }),
      cell(toParas(st.support ? [st.support] : ["—"], 17), { width: 14 }),
      cell([p("")], { width: 11 }),
    ],
  });
}

// Ligne de section fusionnée (colspan 6) : « II. NOUVELLE LEÇON — 22 min »
function sectionRow(text, duree) {
  return new TableRow({
    children: [
      cell(
        [p(text, { bold: true, size: 19, after: 20 }), ...(duree ? [p(duree, { italics: true, size: 17 })] : [])],
        { colSpan: 6, shading: "EAF3FB" }
      ),
    ],
  });
}

function deroulementTable(rows) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [1050, 2050, 2050, 1000, 1150, 900],
    rows: [...deroulementHeader(), ...rows],
  });
}

// ── Exercices → paragraphes (cellule Enseignant de la fiche) ────────────
// exo = { consigne, items: [..], corrige: [..], points }
function exosToParas(exos, size = 16) {
  const out = [];
  exos.forEach((ex, i) => {
    out.push(p(`Exercice ${i + 1} : ${ex.consigne}`, { italics: true, size, after: 30 }));
    (ex.items || []).forEach((it) => out.push(p(it, { size: size - 1, after: 20 })));
    out.push(pEmpty(10));
  });
  return out;
}

// Corrigé → paragraphes (cellule Apprenants de la fiche ; mots-clés **..** en rose)
function corrigeToParas(exos, size = 16) {
  const out = [];
  exos.forEach((ex, i) => {
    out.push(p(`Corrigé de l'exercice ${i + 1} :`, { bold: true, size, after: 25 }));
    (ex.corrige || []).forEach((c) => out.push(p(c, { size: size - 1, after: 25, kwColor: CORRIGE })));
    out.push(pEmpty(10));
  });
  return out;
}

// ── Page LEÇON ──────────────────────────────────────────────────────────
function leconTitre(text) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 120, after: 160 },
    children: [new TextRun({ text, bold: true, color: RED, size: 26, font: FONT })],
  });
}

function leconSousTitre(text) {
  return new Paragraph({
    spacing: { before: 140, after: 80 },
    children: [new TextRun({ text, bold: true, color: GREEN, size: 22, font: FONT })],
  });
}

function leconSousSousTitre(text) {
  return new Paragraph({
    spacing: { before: 80, after: 60 },
    indent: { left: 240 },
    children: [new TextRun({ text, bold: true, color: BLACK, size: 21, font: FONT })],
  });
}

// Image centrée + légende (largeur en px docx)
function imageBlock(imgPath, displayWidth, legende) {
  const buf = fs.readFileSync(imgPath);
  let h = Math.round(displayWidth * 0.7);
  const paras = [];
  try {
    const dim = sizeOfImage(imgPath);
    if (dim) { h = Math.round(displayWidth * (dim.height / dim.width)); }
  } catch (e) { /* noop */ }
  paras.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 60, after: 40 },
    children: [new ImageRun({ type: "png", data: buf, transformation: { width: displayWidth, height: h } })],
  }));
  if (legende) {
    paras.push(new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 140 },
      children: [new TextRun({ text: legende, italics: true, size: 17, color: "444444", font: FONT })],
    }));
  }
  return paras;
}

// lecture dimensions PNG (IHDR) sans dépendance
function sizeOfImage(path) {
  const buf = fs.readFileSync(path);
  if (buf.length > 24 && buf.toString("ascii", 12, 16) === "IHDR") {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }
  return null;
}

// ── Titres + signets (sommaire interactif) ─────────────────────────────
function headingWithBookmark(text, anchorId, opts = {}) {
  const { size = 26, bold = true, color = BLACK, align = AlignmentType.LEFT, after = 120, before = 0, level = null } = opts;
  const run = new TextRun({ text, bold, color, size, font: FONT });
  return new Paragraph({
    alignment: align,
    spacing: { before, after },
    ...(level ? { heading: level } : {}),
    children: anchorId ? [new Bookmark({ id: anchorId, children: [run] })] : [run],
  });
}

function tocLink(label, anchor, opts = {}) {
  const { size = 20, indent = 0, bold = false } = opts;
  return new Paragraph({
    spacing: { after: 40 },
    indent: indent ? { left: indent } : undefined,
    children: [new InternalHyperlink({
      anchor,
      children: [new TextRun({ text: label, size, bold, style: "Hyperlink", font: FONT })],
    })],
  });
}

function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] });
}

module.exports = {
  RED, GREEN, BLUE, BLACK, CORRIGE, HEADER_BG, HEADER_BG2, FONT,
  mkRuns, p, pEmpty, pHighlight, noBorders, cell, metaTable,
  deroulementHeader, stepRow, sectionRow, deroulementTable,
  exosToParas, corrigeToParas,
  leconTitre, leconSousTitre, leconSousSousTitre, imageBlock, sizeOfImage,
  headingWithBookmark, tocLink, pageBreak,
};
