// Briques de construction du Manuel de Mathématiques 6e — Collection J-Learn
// Traitement C : génération de zéro avec le package `docx`.
// Toutes les règles visuelles proviennent de design-fiche.md et manuel-structure.md.

const {
  Paragraph, TextRun, Table, TableRow, TableCell, WidthType, BorderStyle,
  AlignmentType, HeadingLevel, VerticalMerge, ShadingType, InternalHyperlink,
  Bookmark, PageBreak, Math: OMath, MathRun, MathFraction, TabStopType,
} = require("docx");

const FONT = "Times New Roman";

// ---------------------------------------------------------------- couleurs
const C = {
  titre:    "C00000", // titre de leçon — rouge
  soustitre:"1E8449", // sous-titres — vert
  motcle:   "1F4E79", // mots clés — bleu + gras
  corrige:  "C2185B", // corrigé — rose/bordeaux
  noir:     "000000",
  gris:     "555555",
};

// fonds de cellule / d'encadré (repris de la palette validée sur le 7e)
const SH = {
  entete:   "DDEEFF",
  section:  "EDEDED",
  neutre:   "F5F5F5",
  corrige:  "E8F8F5",
  piege:    "FDEDEC",
  astuce:   "FEF9E7",
  retenir:  "EBF5FB",
  accent:   "FFE0B2",
};

// ---------------------------------------------------------------- bordures
const noneB = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
function noBorders() {
  return { top: noneB, bottom: noneB, left: noneB, right: noneB,
           insideHorizontal: noneB, insideVertical: noneB };
}
const lineB = { style: BorderStyle.SINGLE, size: 4, color: "7F7F7F" };
function gridBorders() {
  return { top: lineB, bottom: lineB, left: lineB, right: lineB,
           insideHorizontal: lineB, insideVertical: lineB };
}

// ---------------------------------------------------------------- runs
/**
 * Convertit une chaîne balisée en TextRun[].
 * Balises : **gras**, {{mot clé bleu}}, [[corrigé rose]], __italique__
 */
function runs(text, base = {}) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|\{\{[^}]+\}\}|\[\[[^\]]+\]\]|__[^_]+__)/g;
  let last = 0, m;
  // Word ignore un "\n" a l'interieur d'un w:t : il faut un vrai saut de ligne
  // (<w:br/>). On decoupe donc chaque fragment sur les retours a la ligne.
  const push = (t, o) => {
    if (!t) return;
    t.split("\n").forEach((ligne, i) => {
      out.push(new TextRun({
        text: ligne, font: FONT, size: 21, ...base, ...o,
        ...(i > 0 ? { break: 1 } : {}),
      }));
    });
  };
  while ((m = re.exec(text)) !== null) {
    push(text.slice(last, m.index), {});
    const tok = m[0];
    if (tok.startsWith("**"))      push(tok.slice(2, -2), { bold: true });
    else if (tok.startsWith("{{")) push(tok.slice(2, -2), { bold: true, color: C.motcle });
    else if (tok.startsWith("[[")) push(tok.slice(2, -2), { bold: true, color: C.corrige });
    else                           push(tok.slice(2, -2), { italics: true });
    last = m.index + tok.length;
  }
  push(text.slice(last), {});
  if (!out.length) push(" ", {});
  return out;
}

function p(text, opt = {}) {
  const { align, spacing, indent, bullet, ...rest } = opt;
  return new Paragraph({
    children: typeof text === "string" ? runs(text, rest) : text,
    alignment: align,
    spacing: spacing || { after: 40 },
    indent,
    ...(bullet ? { bullet: { level: bullet - 1 } } : {}),
  });
}

const empty = (h = 60) => new Paragraph({ children: [], spacing: { after: h } });

// ---------------------------------------------------------------- cellules
function cell(children, o = {}) {
  const kids = (Array.isArray(children) ? children : [children])
    .map((c) => (typeof c === "string" ? p(c) : c));
  return new TableCell({
    children: kids.length ? kids : [empty(0)],
    width: o.width ? { size: o.width, type: WidthType.PERCENTAGE } : undefined,
    columnSpan: o.colSpan,
    verticalMerge: o.vMerge,
    shading: o.shading
      ? { type: ShadingType.CLEAR, color: "auto", fill: o.shading }
      : undefined,
    margins: { top: 60, bottom: 60, left: 90, right: 90 },
    borders: o.borders,
    verticalAlign: o.valign,
  });
}

// ================================================================ MÉTA-TABLE
// Bordures invisibles. Infos descriptives à gauche, Date/Classe/Séance/Durée à droite.
function metaTable(s) {
  const L = [
    ["Discipline", "Mathématiques"],
    ["Sous discipline", s.sousDiscipline],
    ["Thème", s.theme],
    ["Titre", s.titre],
    ["Objectif spécifique", s.objectif],
    ["Documentation", s.documentation],
    ["Support et matériel", s.materiel],
  ];
  const R = [
    ["Date", "……………………"],
    ["Classe", "6e"],
    ["Séance n°", s.seanceLocale],
    ["Durée", "60 min"],
  ];
  const line = ([k, v]) =>
    p([
      new TextRun({ text: `${k} : `, font: FONT, size: 20, bold: true }),
      new TextRun({ text: String(v), font: FONT, size: 20 }),
    ], { spacing: { after: 20 } });

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: noBorders(),
    rows: [
      new TableRow({
        children: [
          cell(L.map(line), { width: 63, borders: noBorders() }),
          cell(R.map(line), { width: 37, borders: noBorders() }),
        ],
      }),
    ],
  });
}

// ============================================================ EN-TÊTE 6 COL
const COLW = [12, 28, 28, 12, 12, 8];

function deroulementHeader() {
  const th = (t) => p(t, { bold: true, align: AlignmentType.CENTER });
  const row1 = new TableRow({
    tableHeader: true,
    children: [
      cell([th("Étapes et Durée")], { width: COLW[0], shading: SH.entete, vMerge: VerticalMerge.RESTART }),
      cell([th("Déroulement de la leçon")], { width: COLW[1] + COLW[2], shading: SH.entete, colSpan: 2 }),
      cell([th("Technique et Stratégie")], { width: COLW[3], shading: SH.entete, vMerge: VerticalMerge.RESTART }),
      cell([th("Support et Matériel")], { width: COLW[4], shading: SH.entete, vMerge: VerticalMerge.RESTART }),
      cell([th("Observation")], { width: COLW[5], shading: SH.entete, vMerge: VerticalMerge.RESTART }),
    ],
  });
  const row2 = new TableRow({
    tableHeader: true,
    children: [
      cell([empty(0)], { vMerge: VerticalMerge.CONTINUE, shading: SH.entete }),
      cell([th("Enseignant")], { width: COLW[1], shading: SH.entete }),
      cell([th("Apprenants")], { width: COLW[2], shading: SH.entete }),
      cell([empty(0)], { vMerge: VerticalMerge.CONTINUE, shading: SH.entete }),
      cell([empty(0)], { vMerge: VerticalMerge.CONTINUE, shading: SH.entete }),
      cell([empty(0)], { vMerge: VerticalMerge.CONTINUE, shading: SH.entete }),
    ],
  });
  return [row1, row2];
}

// Ligne de section fusionnée (ex. « II. NOUVELLE LEÇON »)
function sectionRow(label) {
  return new TableRow({
    children: [
      cell([p(label, { bold: true })], { colSpan: 6, shading: SH.section }),
    ],
  });
}

// Ligne d'étape ordinaire
function stepRow(etape, ens, app, tech, support) {
  const toParas = (v) =>
    (Array.isArray(v) ? v : [v]).map((x) => (typeof x === "string" ? p(x) : x));
  return new TableRow({
    children: [
      cell([p(etape, { bold: true })], { width: COLW[0], shading: SH.neutre }),
      cell(toParas(ens), { width: COLW[1] }),
      cell(toParas(app), { width: COLW[2] }),
      cell([p(tech)], { width: COLW[3] }),
      cell([p(support)], { width: COLW[4] }),
      cell([empty(0)], { width: COLW[5] }),
    ],
  });
}

function deroulementTable(rows) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: gridBorders(),
    columnWidths: COLW.map((w) => Math.round((w / 100) * 9600)),
    rows: [...deroulementHeader(), ...rows],
  });
}

// ============================================================== ENCADRÉS
function boxed(lines, fill, titre) {
  const kids = [];
  if (titre) kids.push(p(titre, { bold: true, spacing: { after: 40 } }));
  lines.forEach((l) => kids.push(typeof l === "string" ? p(l) : l));
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: gridBorders(),
    rows: [new TableRow({ children: [cell(kids, { shading: fill, width: 100 })] })],
  });
}

// ============================================================== TITRES
function bookmarkedHeading(id, text, level, color, size) {
  return new Paragraph({
    heading: level,
    spacing: { before: 180, after: 100 },
    children: [
      new Bookmark({
        id,
        children: [new TextRun({ text, font: FONT, size, bold: true, color })],
      }),
    ],
  });
}

function tocLink(id, label, indent = 0) {
  return new Paragraph({
    spacing: { after: 30 },
    indent: { left: indent },
    children: [
      new InternalHyperlink({
        anchor: id,
        children: [new TextRun({ text: label, font: FONT, size: 21, color: "1155CC", underline: {} })],
      }),
    ],
  });
}

// ============================================================== FRACTION
function frac(num, den) {
  return new OMath({
    children: [
      new MathFraction({
        numerator: [new MathRun(String(num))],
        denominator: [new MathRun(String(den))],
      }),
    ],
  });
}
function mathPara(children, opt = {}) {
  return new Paragraph({ children, alignment: opt.align, spacing: { after: 60 } });
}

module.exports = {
  FONT, C, SH, runs, p, empty, cell, noBorders, gridBorders,
  metaTable, deroulementTable, sectionRow, stepRow, boxed,
  bookmarkedHeading, tocLink, frac, mathPara,
  Paragraph, TextRun, Table, TableRow, TableCell, WidthType,
  AlignmentType, HeadingLevel, PageBreak,
};
