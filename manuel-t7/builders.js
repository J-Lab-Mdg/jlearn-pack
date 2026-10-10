// Builders partagés — Manuel Anglais T4 J-Learn
const fs = require("fs");
const path = require("path");
const {
  Paragraph, TextRun, Table, TableRow, TableCell, WidthType, BorderStyle,
  AlignmentType, VerticalMergeType, ImageRun, PageBreak, ShadingType,
  VerticalAlign, Bookmark, InternalHyperlink,
} = require("docx");

// couleurs
const C = {
  RED: "C00000", GREEN: "1E7B34", BLUE: "1F4E79", PINK: "C2185B",
  GRAY: "666666", BLACK: "000000", WHITE: "FFFFFF",
  HDR1: "DDEEFF", HDR2: "F5F5F5", SECT: "EAEAEA",
};
// tailles (demi-points)
const SZ = { BODY: 28, FICHE: 24, SUB: 32, TITLE: 40, UNIT: 44 };
const FONT = "Times New Roman";
const IMG_DIR = path.join(__dirname, "img");

const run = (text, o = {}) => new TextRun({
  text, bold: !!o.bold, italics: !!o.italic, color: o.color || C.BLACK,
  size: o.size || SZ.BODY, font: FONT,
});
const p = (text, o = {}) => new Paragraph({
  alignment: o.center ? AlignmentType.CENTER : AlignmentType.LEFT,
  spacing: { after: o.after != null ? o.after : 80 },
  children: Array.isArray(text) ? text : [run(text, o)],
});
// mot clé bleu gras + prononciation italique grise
const kw = (word, pron, size = SZ.BODY) => {
  const r = [run(word, { bold: true, color: C.BLUE, size })];
  if (pron) r.push(run(` [${pron}]`, { italic: true, color: C.GRAY, size: size - 4 }));
  return r;
};
// paragraphe mixte : tableau de runs
const pr = (runs, o = {}) => new Paragraph({
  alignment: o.center ? AlignmentType.CENTER : AlignmentType.LEFT,
  spacing: { after: o.after != null ? o.after : 80 },
  children: runs,
});
// corrigé rose/bordeaux
function pAns(text, kws, o = {}) {
  let parts = [{ t: text, k: false }];
  for (const k of kws || []) {
    const next = [];
    for (const seg of parts) {
      if (seg.k) { next.push(seg); continue; }
      const idx = seg.t.indexOf(k);
      if (idx === -1) { next.push(seg); continue; }
      if (idx > 0) next.push({ t: seg.t.slice(0, idx), k: false });
      next.push({ t: seg.t.slice(idx, idx + k.length), k: true });
      if (idx + k.length < seg.t.length) next.push({ t: seg.t.slice(idx + k.length), k: false });
    }
    parts = next;
  }
  return new Paragraph({
    spacing: { after: o.after != null ? o.after : 80 },
    children: parts.map(s => run(s.t, s.k ? { bold: true, color: C.PINK, size: o.size || SZ.BODY } : { size: o.size || SZ.BODY })),
  });
}
const NONE = { style: BorderStyle.NONE, size: 0, color: C.WHITE };
const noBorders = () => ({ top: NONE, bottom: NONE, left: NONE, right: NONE, insideHorizontal: NONE, insideVertical: NONE });
const cell = (children, o = {}) => new TableCell({
  children, columnSpan: o.colSpan, verticalMerge: o.vMerge,
  verticalAlign: o.vAlign || VerticalAlign.TOP,
  width: o.w ? { size: o.w, type: WidthType.DXA } : undefined,
  shading: o.shade ? { type: ShadingType.CLEAR, fill: o.shade } : undefined,
  margins: { top: 60, bottom: 60, left: 100, right: 100 },
});
const img = (file, width, ratio) => new Paragraph({
  alignment: AlignmentType.CENTER, spacing: { after: 120 },
  children: [new ImageRun({
    data: fs.readFileSync(path.join(IMG_DIR, file)), type: "png",
    transformation: { width, height: Math.round(width * ratio) },
  })],
});
const pageBreak = () => new Paragraph({ children: [new PageBreak()] });

// bookmark sur un titre (pour sommaire interactif)
const bookmarkTitle = (id, text, o = {}) => new Paragraph({
  alignment: o.center !== false ? AlignmentType.CENTER : AlignmentType.LEFT,
  spacing: { after: o.after != null ? o.after : 120 },
  children: [new Bookmark({ id, children: [run(text, o)] })],
});
const tocLink = (anchor, text, o = {}) => new Paragraph({
  spacing: { after: 60 },
  children: [new InternalHyperlink({ anchor, children: [
    run(text, { color: C.BLUE, size: o.size || SZ.FICHE, bold: o.bold }),
  ]})],
});

// bandeau d'unité coloré
const unitBanner = (label, color, bookmarkId) => new Table({
  width: { size: 10400, type: WidthType.DXA }, borders: noBorders(),
  rows: [new TableRow({ children: [
    cell([bookmarkId
      ? new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 40 },
          children: [new Bookmark({ id: bookmarkId, children: [run(label, { bold: true, color: C.WHITE, size: SZ.UNIT })] })] })
      : p([run(label, { bold: true, color: C.WHITE, size: SZ.UNIT })], { center: true, after: 40 })],
      { shade: color, vAlign: VerticalAlign.CENTER }),
  ]})],
});

// encadré audio (QR + lien)
function audioBox(items, color) {
  const rows = items.map(it => new TableRow({ children: [
    cell([img(it.qr, 70, 1)], { w: 1300, vAlign: VerticalAlign.CENTER }),
    cell([
      p([run("🎧 " + it.label, { bold: true, size: SZ.BODY })], { after: 40 }),
      p([run(it.url, { size: 18, color: C.BLUE, italic: true })], { after: 40 }),
    ], { w: 9100, vAlign: VerticalAlign.CENTER }),
  ]}));
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run("LISTEN! Scan the code or open the link to listen and download.", { bold: true, color, size: SZ.BODY })], { center: true, after: 40 })],
        { colSpan: 2, shade: "F5F0FA" })] }),
      ...rows,
    ],
  });
}

// ------- FICHE -------
const fp = (text, o = {}) => p(text, { ...o, size: SZ.FICHE, after: o.after != null ? o.after : 40 });
function metaTable(m) {
  const L = (label, value) => p([run(label + " ", { bold: true, size: SZ.FICHE }), run(value || "", { size: SZ.FICHE })], { after: 40 });
  return new Table({
    borders: noBorders(), width: { size: 10400, type: WidthType.DXA },
    rows: [new TableRow({ children: [
      cell([
        L("Subject:", "English"), L("Theme:", m.theme), L("Title:", m.title),
        L("Specific learning outcome:", m.slo), L("Values:", m.values),
        L("Documentation:", m.docs || "T7 English Syllabus (Programme d’études T7); T7 Pedagogical Resources Booklet"),
        L("Materials:", m.materials),
      ], { w: 6800 }),
      cell([
        L("Date:", "……………………"), L("Class:", "T7"),
        L("Session n°:", m.session), L("Duration:", "……………………"),
      ], { w: 3600 }),
    ]})],
  });
}
const W = [1350, 3150, 2450, 1300, 1250, 900];
function headerRows() {
  const h = (t) => p([run(t, { bold: true, size: SZ.FICHE })], { center: true, after: 20 });
  return [
    new TableRow({ tableHeader: true, children: [
      cell([h("Steps and Duration")], { w: W[0], shade: C.HDR1, vMerge: VerticalMergeType.RESTART }),
      cell([h("Procedure")], { w: W[1] + W[2], shade: C.HDR1, colSpan: 2 }),
      cell([h("Technique and Strategy")], { w: W[3], shade: C.HDR1, vMerge: VerticalMergeType.RESTART }),
      cell([h("Materials")], { w: W[4], shade: C.HDR1, vMerge: VerticalMergeType.RESTART }),
      cell([h("Remarks")], { w: W[5], shade: C.HDR1, vMerge: VerticalMergeType.RESTART }),
    ]}),
    new TableRow({ tableHeader: true, children: [
      cell([fp("")], { w: W[0], vMerge: VerticalMergeType.CONTINUE }),
      cell([h("Teacher")], { w: W[1], shade: C.HDR2 }),
      cell([h("Learners")], { w: W[2], shade: C.HDR2 }),
      cell([fp("")], { w: W[3], vMerge: VerticalMergeType.CONTINUE }),
      cell([fp("")], { w: W[4], vMerge: VerticalMergeType.CONTINUE }),
      cell([fp("")], { w: W[5], vMerge: VerticalMergeType.CONTINUE }),
    ]}),
  ];
}
const sectionRow = (label) => new TableRow({ children: [
  cell([p([run(label, { bold: true, size: SZ.FICHE })], { center: true, after: 20 })], { colSpan: 6, shade: C.SECT }),
]});
// teacher/learners : tableaux de Paragraph (utiliser fp/pAns)
const stepRow = (step, teacher, learners, tech, mat) => new TableRow({ children: [
  cell(step.map(t => fp([run(t, { bold: true, size: SZ.FICHE })])), { w: W[0] }),
  cell(teacher, { w: W[1] }),
  cell(learners, { w: W[2] }),
  cell([fp(tech)], { w: W[3] }),
  cell([fp(mat)], { w: W[4] }),
  cell([fp("")], { w: W[5] }),
]});
const deroulement = (rows) => new Table({
  width: { size: 10400, type: WidthType.DXA },
  rows: [...headerRows(), ...rows],
});
// fiche complète : meta + rows + en-tête de séance avec bookmark
function fiche(globalNo, totalSessions, meta, rows, bookmarkId) {
  return [
    bookmarkTitle(bookmarkId, `SESSION ${globalNo} / ${totalSessions}`, { bold: true, size: 28, after: 60 }),
    p([run(meta.title, { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("LESSON PREPARATION SHEET", { bold: true, size: 30 })], { center: true, after: 160 }),
    metaTable(meta), p("", { after: 100 }), deroulement(rows),
  ];
}

// titres de leçon
const lessonTitle = (t) => p([run(t, { bold: true, color: C.RED, size: SZ.TITLE })], { center: true, after: 160 });
const sub = (t) => p([run(t, { bold: true, color: C.GREEN, size: SZ.SUB })], { after: 100 });

// page I CAN
function iCan(unitLabel, color, items, nextText) {
  const item = (t) => p([run("☐  ", { size: 32 }), run(t, { size: SZ.BODY })], { after: 100 });
  const out = [
    unitBanner(unitLabel + " — I CAN…", color),
    p("", { after: 120 }),
    p("Tick ✔ what you can do:", { after: 120 }),
    ...items.map(item),
    p("", { after: 120 }),
  ];
  if (nextText) out.push(p([run(nextText, { bold: true, color, size: SZ.SUB })], { center: true }));
  return out;
}

module.exports = {
  C, SZ, FONT, run, p, pr, kw, pAns, noBorders, cell, img, pageBreak,
  bookmarkTitle, tocLink, unitBanner, audioBox, fp, metaTable, headerRows,
  sectionRow, stepRow, deroulement, fiche, lessonTitle, sub, iCan,
};
