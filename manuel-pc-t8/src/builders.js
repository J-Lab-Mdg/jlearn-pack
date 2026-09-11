// builders.js — Fonctions docx réutilisables pour le Manuel Physique-Chimie T8 J-Learn
const {
  Document, Packer, Paragraph, TextRun, AlignmentType,
  Table, TableRow, TableCell, WidthType, BorderStyle,
  ShadingType, PageBreak, ImageRun, Bookmark, InternalHyperlink,
  VerticalMergeType, HeadingLevel,
} = require("docx");
const fs = require("fs");

const RED = "C00000";
const GREEN = "1E7B34";
const BLUE = "1F4E79";
const BLACK = "000000";
const PINK = "C2185B"; // corrigé
const HEAD_SHADE = "DDEEFF";
const SUBHEAD_SHADE = "F5F5F5";
const SECTION_SHADE = "E8F0E4"; // ligne II. NOUVELLE LEÇON
const BOX_EXP_SHADE = "FFF6E5"; // Expérience à la maison
const BOX_SAIS_SHADE = "E8F2FB"; // Le savais-tu ?

const FONT = "Times New Roman";

// ---------- paragraphes ----------
function p(text, opts = {}) {
  const {
    bold = false, italics = false, color = BLACK, size = 22,
    align = AlignmentType.LEFT, spacingAfter = 80, spacingBefore = 0,
    indent = null,
  } = opts;
  return new Paragraph({
    alignment: align,
    spacing: { after: spacingAfter, before: spacingBefore },
    indent: indent || undefined,
    children: [new TextRun({ text, bold, italics, color, size, font: FONT })],
  });
}

// Paragraphe multi-runs : segments [{text, bold, color, italics}]
function pRuns(segments, opts = {}) {
  const { align = AlignmentType.LEFT, spacingAfter = 80, spacingBefore = 0, size = 22 } = opts;
  return new Paragraph({
    alignment: align,
    spacing: { after: spacingAfter, before: spacingBefore },
    children: segments.map(s => new TextRun({
      text: s.text, bold: !!s.bold, italics: !!s.italics,
      color: s.color || BLACK, size: s.size || size, font: FONT,
    })),
  });
}

// Met en évidence les mots-clés (bleu+gras) dans un texte de leçon
function pHighlight(text, keywords, opts = {}) {
  const { size = 22, spacingAfter = 80, keyColor = BLUE } = opts;
  const kws = (Array.isArray(keywords) ? keywords : [keywords]).filter(Boolean);
  if (!kws.length) return p(text, { size, spacingAfter });
  const pattern = kws
    .map(k => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .sort((a, b) => b.length - a.length)
    .join("|");
  const regex = new RegExp(`(${pattern})`, "gi");
  const parts = text.split(regex);
  const runs = parts.filter(x => x !== "").map(part =>
    regex.test(part) && kws.some(k => k.toLowerCase() === part.toLowerCase())
      ? new TextRun({ text: part, bold: true, color: keyColor, size, font: FONT })
      : new TextRun({ text: part, size, font: FONT, color: BLACK })
  );
  return new Paragraph({ spacing: { after: spacingAfter }, children: runs });
}

function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] });
}

// ---------- images ----------
function imagePara(path, widthPx, heightPx, opts = {}) {
  const { align = AlignmentType.CENTER, spacingAfter = 120 } = opts;
  const data = fs.readFileSync(path);
  return new Paragraph({
    alignment: align,
    spacing: { after: spacingAfter },
    children: [new ImageRun({
      type: "png",
      data,
      transformation: { width: widthPx, height: heightPx },
    })],
  });
}

function legende(text) {
  return p(text, { italics: true, size: 18, align: AlignmentType.CENTER, spacingAfter: 160 });
}

// ---------- cellules / tables ----------
const noneBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
function noBorders() {
  return {
    top: noneBorder, bottom: noneBorder, left: noneBorder, right: noneBorder,
    insideHorizontal: noneBorder, insideVertical: noneBorder,
  };
}

function cell(children, opts = {}) {
  return new TableCell({
    columnSpan: opts.colSpan || undefined,
    verticalMerge: opts.vMerge || undefined,
    width: opts.width ? { size: opts.width, type: WidthType.PERCENTAGE } : undefined,
    shading: opts.shading ? { fill: opts.shading, type: ShadingType.CLEAR, color: "auto" } : undefined,
    margins: { top: 60, bottom: 60, left: 100, right: 100 },
    children,
  });
}

// ---------- titres avec signets (sommaire interactif) ----------
function heading(text, opts = {}) {
  const {
    anchorId = null, color = BLACK, size = 28, bold = true,
    align = AlignmentType.LEFT, spacingAfter = 120, spacingBefore = 120,
    headingLevel = null,
  } = opts;
  const run = new TextRun({ text, bold, size, color, font: FONT });
  return new Paragraph({
    heading: headingLevel || undefined,
    alignment: align,
    spacing: { after: spacingAfter, before: spacingBefore },
    children: anchorId ? [new Bookmark({ id: anchorId, children: [run] })] : [run],
  });
}

function tocLink(label, anchor, opts = {}) {
  const { indentLeft = 0, size = 22, bold = false } = opts;
  return new Paragraph({
    spacing: { after: 40 },
    indent: indentLeft ? { left: indentLeft } : undefined,
    children: [new InternalHyperlink({
      anchor,
      children: [new TextRun({ text: label, style: "Hyperlink", size, bold, font: FONT })],
    })],
  });
}

// ---------- méta-table de la fiche (bordures invisibles) ----------
function metaTable(meta) {
  // meta: { discipline, sousDiscipline, theme, titre, objectif, documentation, support, classe, seanceNo }
  const L = (label, value) => pRuns(
    [{ text: label + " : ", bold: true }, { text: value || "" }],
    { size: 20, spacingAfter: 40 }
  );
  const left = [
    L("Discipline", meta.discipline),
    L("Sous discipline", meta.sousDiscipline),
    L("Thème", meta.theme),
    L("Titre", meta.titre),
    L("Objectif spécifique", meta.objectif),
    L("Documentation", meta.documentation),
    L("Support et matériel", meta.support),
  ];
  const right = [
    L("Date", "________________"),
    L("Classe", meta.classe || "T8"),
    L("Séance n°", meta.seanceNo),
    L("Durée", "________________"),
  ];
  return new Table({
    borders: noBorders(),
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [new TableRow({ children: [
      cell(left, { width: 62 }),
      cell(right, { width: 38 }),
    ]})],
  });
}

// ---------- table de déroulement 6 colonnes ----------
const COL_W = [14, 27, 21, 13, 13, 12]; // Étapes / Enseignant / Apprenants / Technique / Support / Observation

function deroulementHeader() {
  const b = t => p(t, { bold: true, size: 19, align: AlignmentType.CENTER, spacingAfter: 20 });
  const row1 = new TableRow({ tableHeader: true, children: [
    cell([b("Étapes et Durée")], { shading: HEAD_SHADE, width: COL_W[0], vMerge: VerticalMergeType.RESTART }),
    cell([b("Déroulement de la leçon")], { shading: HEAD_SHADE, colSpan: 2, width: COL_W[1] + COL_W[2] }),
    cell([b("Technique et Stratégie")], { shading: HEAD_SHADE, width: COL_W[3], vMerge: VerticalMergeType.RESTART }),
    cell([b("Support et Matériel")], { shading: HEAD_SHADE, width: COL_W[4], vMerge: VerticalMergeType.RESTART }),
    cell([b("Observation")], { shading: HEAD_SHADE, width: COL_W[5], vMerge: VerticalMergeType.RESTART }),
  ]});
  const row2 = new TableRow({ tableHeader: true, children: [
    cell([p("", { size: 2, spacingAfter: 0 })], { vMerge: VerticalMergeType.CONTINUE, width: COL_W[0] }),
    cell([b("Enseignant")], { shading: SUBHEAD_SHADE, width: COL_W[1] }),
    cell([b("Apprenants")], { shading: SUBHEAD_SHADE, width: COL_W[2] }),
    cell([p("", { size: 2, spacingAfter: 0 })], { vMerge: VerticalMergeType.CONTINUE, width: COL_W[3] }),
    cell([p("", { size: 2, spacingAfter: 0 })], { vMerge: VerticalMergeType.CONTINUE, width: COL_W[4] }),
    cell([p("", { size: 2, spacingAfter: 0 })], { vMerge: VerticalMergeType.CONTINUE, width: COL_W[5] }),
  ]});
  return [row1, row2];
}

// step: { etape, enseignant: Paragraph[], apprenants: Paragraph[], technique, support }
function stepRow(step) {
  return new TableRow({ children: [
    cell([p(step.etape, { bold: true, size: 18, spacingAfter: 20 })], { width: COL_W[0] }),
    cell(step.enseignant, { width: COL_W[1] }),
    cell(step.apprenants, { width: COL_W[2] }),
    cell([p(step.technique || "", { size: 18, spacingAfter: 20 })], { width: COL_W[3] }),
    cell([p(step.support || "", { size: 18, spacingAfter: 20 })], { width: COL_W[4] }),
    cell([p("", { size: 18, spacingAfter: 0 })], { width: COL_W[5] }),
  ]});
}

function sectionRow(title) {
  return new TableRow({ children: [
    cell([p(title, { bold: true, size: 20, align: AlignmentType.CENTER, spacingAfter: 20 })],
      { colSpan: 6, shading: SECTION_SHADE }),
  ]});
}

function deroulementTable(steps) {
  const rows = [...deroulementHeader()];
  for (const s of steps) {
    if (s.section) rows.push(sectionRow(s.section));
    else rows.push(stepRow(s));
  }
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows,
  });
}

// ---------- encadrés pédagogiques ----------
function encadre(titre, contenuParas, shade, titleColor) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [new TableRow({ children: [
      cell([
        p(titre, { bold: true, size: 21, color: titleColor, spacingAfter: 60 }),
        ...contenuParas,
      ], { shading: shade, width: 100 }),
    ]})],
  });
}

function encadreSaisTu(contenuParas) {
  return encadre("Le savais-tu ?", contenuParas, BOX_SAIS_SHADE, BLUE);
}

function encadreExperience(contenuParas) {
  return encadre("Expérience à la maison", contenuParas, BOX_EXP_SHADE, "B25000");
}

// ---------- exercices ----------
// ex: { consigne, items: [..], corrige: [{text-segments or string}], points }
function exosToParas(exos, opts = {}) {
  const { size = 18, numerote = false } = opts;
  const out = [];
  exos.forEach((ex, i) => {
    const label = numerote ? `Exercice ${i + 1}` + (ex.points ? ` (${ex.points} points)` : "") : null;
    if (label) out.push(p(label, { bold: true, size: size + 2, spacingAfter: 40 }));
    out.push(p(ex.consigne, { italics: true, size, spacingAfter: 30 }));
    (ex.items || []).forEach(it => out.push(p(it, { size, spacingAfter: 20 })));
    out.push(p("", { size: 8, spacingAfter: 20 }));
  });
  return out;
}

// Corrigé : chaque réponse = { intro (noir), cle (rose) } ou tableau de segments
function corrigeToParas(exos, opts = {}) {
  const { size = 18, numerote = false } = opts;
  const out = [];
  exos.forEach((ex, i) => {
    if (numerote) out.push(p(`Corrigé de l'exercice ${i + 1}`, { bold: true, size: size + 2, color: PINK, spacingAfter: 40 }));
    (ex.corrige || []).forEach(ligne => {
      if (typeof ligne === "string") {
        out.push(p(ligne, { size, spacingAfter: 20 }));
      } else {
        out.push(pRuns(ligne.map(seg => ({
          text: seg.text, bold: !!seg.bold || !!seg.cle,
          color: seg.cle ? PINK : (seg.color || BLACK),
        })), { size, spacingAfter: 20 }));
      }
    });
    out.push(p("", { size: 8, spacingAfter: 20 }));
  });
  return out;
}

module.exports = {
  Document, Packer, Paragraph, TextRun, AlignmentType, Table, TableRow, TableCell,
  WidthType, BorderStyle, ShadingType, PageBreak, HeadingLevel,
  RED, GREEN, BLUE, BLACK, PINK, FONT,
  p, pRuns, pHighlight, pageBreak, imagePara, legende,
  noBorders, cell, heading, tocLink, metaTable,
  deroulementHeader, deroulementTable, stepRow, sectionRow,
  encadre, encadreSaisTu, encadreExperience,
  exosToParas, corrigeToParas,
};
