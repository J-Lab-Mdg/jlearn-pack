// ============================================================
// builders.js — fonctions de construction docx (skill v18)
// Projet : Manuel SES T11 — série OSE — Collection J-Learn
// ============================================================
const {
  Paragraph, TextRun, AlignmentType, Table, TableRow, TableCell,
  WidthType, BorderStyle, ShadingType, VerticalMerge, PageBreak,
  BookmarkStart, BookmarkEnd, InternalHyperlink, ImageRun, HeadingLevel,
} = require("docx");

// Compteur global pour des w:id de signets uniques (la classe Bookmark
// de docx 9.x réutilise toujours l'id 1, ce qui fragilise la navigation)
let BOOKMARK_ID = 0;
const fs = require("fs");
const path = require("path");

const RED   = "C00000";   // titre de leçon
const GREEN = "1E7B34";   // sous-titres
const BLUE  = "1F4E79";   // mots clés
const PINK  = "C2185B";   // corrigé
const BLACK = "000000";
const FONT  = "Times New Roman";

// ------------------------------------------------------------
// Paragraphes
// ------------------------------------------------------------
function p(text, opts = {}) {
  const {
    bold = false, italics = false, size = 20, color = BLACK,
    align = undefined, spacingAfter = 60, spacingBefore = 0, indent = undefined,
  } = opts;
  return new Paragraph({
    alignment: align,
    spacing: { after: spacingAfter, before: spacingBefore },
    indent,
    children: [new TextRun({ text, bold, italics, size, color, font: FONT })],
  });
}

// Paragraphe avec mots-clés colorés + gras (pour leçon : bleu ; pour corrigé : rose)
function pHighlight(text, keywords = [], keyColor = BLUE, opts = {}) {
  const { size = 21, spacingAfter = 90, bold = false, italic = false, align } = opts;
  const raw = Array.isArray(keywords) ? keywords : (keywords == null ? [] : [keywords]);
  const arr = raw.map((k) => String(k).trim()).filter(Boolean);
  if (!arr.length) {
    return new Paragraph({
      alignment: align, spacing: { after: spacingAfter },
      children: [new TextRun({ text, size, bold, italics: italic, font: FONT })],
    });
  }
  const sorted = [...arr].sort((a, b) => b.length - a.length);
  const re = new RegExp(sorted.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), "gi");
  const out = [];
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(new TextRun({ text: text.slice(last, m.index), size, bold, italics: italic, font: FONT }));
    out.push(new TextRun({ text: m[0], size, bold: true, color: keyColor, font: FONT }));
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(new TextRun({ text: text.slice(last), size, bold, italics: italic, font: FONT }));
  return new Paragraph({ alignment: align, spacing: { after: spacingAfter }, children: out });
}

// Paragraphe champ méta : « Label : Valeur » (label gras)
function field(label, value, align = undefined) {
  return new Paragraph({
    alignment: align,
    spacing: { after: 40 },
    children: [
      new TextRun({ text: label, bold: true, size: 19, font: FONT }),
      new TextRun({ text: (value == null ? "" : value), size: 19, font: FONT }),
    ],
  });
}

// Image à partir d'un fichier png (taille cible ~largeur 620px, page A4)
function imageParas(file, legende) {
  if (!file || !fs.existsSync(file)) return [];
  const buf = fs.readFileSync(file);
  const ext = path.extname(file).toLowerCase().replace(".", "");
  const type = ext === "jpg" ? "jpg" : "png";
  const out = [new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 40 },
    children: [new ImageRun({
      type,
      data: buf,
      transformation: { width: 560, height: Math.round(560 * 0.70) },
    })],
  })];
  if (legende) out.push(p(legende, { italic: true, size: 18, align: AlignmentType.CENTER, spacingAfter: 120 }));
  return out;
}

// ------------------------------------------------------------
// Tables
// ------------------------------------------------------------
function noBorders() {
  const none = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
  return { top: none, bottom: none, left: none, right: none, insideHorizontal: none, insideVertical: none };
}

const GRID_BORDERS = { style: BorderStyle.SINGLE, size: 4, color: "808080" };

function cell(children, opts = {}) {
  const {
    colSpan = 1, width = undefined, shading = undefined, borders = undefined,
    margins = { top: 60, bottom: 60, left: 100, right: 100 }, vMerge = undefined,
  } = opts;
  return new TableCell({
    columnSpan: colSpan,
    verticalMerge: vMerge,
    width: width ? { size: width, type: WidthType.PERCENTAGE } : undefined,
    shading: shading ? { fill: shading, type: ShadingType.CLEAR, color: "auto" } : undefined,
    borders,
    margins,
    children,
  });
}

function gridTable(rows, widths = [12, 26, 18, 14, 15, 15], borders = GRID_BORDERS) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: widths,
    borders,
    rows,
  });
}

// Méta-table : 2 colonnes à bordures invisibles (gauche = infos, droite = classe)
function metaTable(meta) {
  const left = [
    field("Discipline : ", meta.discipline),
    field("Thème : ", meta.theme),
    field("Titre : ", meta.titre),
    field("Objectif spécifique : ", meta.objectif),
    field("Documentation : ", meta.documentation),
    field("Support et matériel : ", meta.support),
  ];
  const right = [
    field("Date : ", meta.date || "____________", AlignmentType.RIGHT),
    field("Classe : ", meta.classe || "T11 — Série OSE", AlignmentType.RIGHT),
    field("Séance n° : ", meta.seance, AlignmentType.RIGHT),
    field("Durée : ", meta.duree || "____________", AlignmentType.RIGHT),
    field("Thématique / RAS : ", meta.ras, AlignmentType.RIGHT),
    field("Valeurs à véhiculer : ", meta.valeurs, AlignmentType.RIGHT),
  ];
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: noBorders(),
    columnWidths: [52, 48],
    rows: [
      new TableRow({ children: [
        cell(left, { shading: "F7F7F7" }),
        cell(right),
      ]}),
    ],
  });
}

// En-tête 2 lignes de la table de déroulement (6 colonnes)
function deroulementHeader() {
  const shade = "D9E2F3";
  const row1 = new TableRow({ children: [
    cell([p("Étapes", { bold: true, size: 19 })], { shading: shade, vMerge: VerticalMerge.RESTART }),
    cell([p("Déroulement de la leçon", { bold: true, size: 19 })], { shading: shade, colSpan: 2 }),
    cell([p("Technique et Stratégie", { bold: true, size: 19 })], { shading: shade, vMerge: VerticalMerge.RESTART }),
    cell([p("Support et Matériel", { bold: true, size: 19 })], { shading: shade, vMerge: VerticalMerge.RESTART }),
    cell([p("Observation", { bold: true, size: 19 })], { shading: shade, vMerge: VerticalMerge.RESTART }),
  ]});
  const row2 = new TableRow({ children: [
    cell([p("", { size: 16 })], { vMerge: VerticalMerge.CONTINUE }),
    cell([p("Enseignant", { bold: true, size: 19 })], { shading: "F2F2F2" }),
    cell([p("Apprenants", { bold: true, size: 19 })], { shading: "F2F2F2" }),
    cell([], { vMerge: VerticalMerge.CONTINUE }),
    cell([], { vMerge: VerticalMerge.CONTINUE }),
    cell([], { vMerge: VerticalMerge.CONTINUE }),
  ]});
  return [row1, row2];
}

// Ligne de section « II. NOUVELLE LEÇON » (colspan 6)
function sectionRow(label) {
  return new TableRow({ children: [
    cell([p(label, { bold: true, size: 19, color: BLUE })], { colSpan: 6, shading: "EAF0FA" }),
  ]});
}

// Ligne d'étape standard
function stepRow({ etape, enseignant, apprenants, technique, support, observation }) {
  const toParas = (val) => {
    if (Array.isArray(val)) return val;
    if (!val) return [p("", { size: 16 })];
    return [p(val, { size: 18, spacingAfter: 30 })];
  };
  return new TableRow({ children: [
    cell(toParas(etape), { shading: "FCFCFC" }),
    cell(toParas(enseignant)),
    cell(toParas(apprenants)),
    cell(toParas(technique)),
    cell(toParas(support)),
    cell(toParas(observation, "FCFCFC")),
  ]});
}

// ------------------------------------------------------------
// Page de la fiche de préparation
// ------------------------------------------------------------
function buildFichePage(meta, steps, seanceNum, totalSeances) {
  const out = [
    new Paragraph({ children: [new PageBreak()] }),
    p("SÉANCE " + seanceNum + " / " + totalSeances, { bold: true, size: 22, align: AlignmentType.CENTER, color: BLUE, spacingAfter: 40 }),
    p(meta.titre, { bold: true, size: 26, align: AlignmentType.CENTER, color: RED, spacingAfter: 80 }),
    p("FICHE DE PRÉPARATION", { bold: true, size: 24, align: AlignmentType.CENTER, spacingAfter: 100 }),
    metaTable(meta),
    p("", { size: 12 }),
  ];
  const rows = [
    ...deroulementHeader(),
    ...steps,
  ];
  out.push(gridTable(rows));
  return out;
}

// ------------------------------------------------------------
// Titres / texte de la leçon
// ------------------------------------------------------------
function leconTitre(text, anchor) {
  const run = new TextRun({ text, bold: true, size: 28, color: RED, font: FONT });
  const children = anchor ? [new BookmarkStart(anchor, ++BOOKMARK_ID), run, new BookmarkEnd(BOOKMARK_ID)] : [run];
  return new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 160 }, children });
}

function leconSousTitre(text) {
  return pHighlight(text, [], GREEN, { size: 23, spacingAfter: 80 });
}

function sousSection(text) {
  return p(text, { bold: true, size: 21, spacingAfter: 60, indent: { left: 240 } });
}

// ------------------------------------------------------------
// Sommaire interactif
// ------------------------------------------------------------
function tocLink(label, anchor, opts = {}) {
  const { size = 20, bold = false, indent = 0 } = opts;
  return new Paragraph({
    spacing: { after: 30 },
    indent: indent ? { left: indent } : undefined,
    children: [new InternalHyperlink({
      anchor,
      children: [new TextRun({ text: label, size, bold, font: FONT, style: "Hyperlink" })],
    })],
  });
}

// ------------------------------------------------------------
// Titre de section (avec signet)
// ------------------------------------------------------------
function sectionHeading(text, anchor, opts = {}) {
  const { size = 24, color = BLUE, align = AlignmentType.CENTER } = opts;
  const run = new TextRun({ text, bold: true, size, color, font: FONT });
  const children = anchor ? [new BookmarkStart(anchor, ++BOOKMARK_ID), run, new BookmarkEnd(BOOKMARK_ID)] : [run];
  return new Paragraph({ alignment: align, spacing: { before: 200, after: 100 }, children });
}

module.exports = {
  p, pHighlight, field, imageParas, noBorders, cell, gridTable, metaTable,
  deroulementHeader, sectionRow, stepRow, buildFichePage,
  leconTitre, leconSousTitre, sousSection, tocLink, sectionHeading,
  RED, GREEN, BLUE, PINK, BLACK, FONT,
  Paragraph, TextRun, AlignmentType, Table, TableRow, TableCell,
  WidthType, BorderStyle, ShadingType, VerticalMerge, PageBreak,
  BookmarkStart, BookmarkEnd, InternalHyperlink, ImageRun, HeadingLevel,
};